export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    common: Common;
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
    analytics: Analytics;
    discount: Discount;
    webhook: Webhook;
    auditTrail: AuditTrail;
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, TicketSubCategory, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, RedirectionSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, BeneficiaryModeDetails, AddBeneficiaryDetailsRequest, RefundAccountResponse, NotFoundResourceError, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, PaymentConfirmationMode, PaymentConfirmationRequest, PaymentConfirmationResponse, PennyDropPayload, CancelledChequePayload, PayoutPennyDropAndChequePayload, GetActivityStatus, ActivityHistory, CanBreakRequestBody, CanBreakResponse, FailedOrders, FailOrder, MarketplaceOrder, TotalDiscountsSet, PresentmentMoney, ShopMoney, TotalPriceSet, TotalPriceSetShopMoney, TotalPriceSetPresentmentMoney, TotalTaxSet, TotalTaxSetShopMoney, TotalTaxSetPresentmentMoney, SubtotalPriceSet, SubtotalPriceSetShopMoney, SubtotalPriceSetPresentmentMoney, LineItems, LineItemsArticle, Quantities, NotAvailable, Sellable, OrderCommitted, Damaged, Manufacturer, ArticlePrice, Company, FailOrderDateMeta, MarketplaceIdentifiers, TatacliqLuxury, Dimension, Weight, Store, ArticleMeta, ArticleBrand, LineItemsArticleIdentifier, PriceSet, PriceSetShopMoney, PriceSetPresentmentMoney, TaxLines, TaxLinesPriceSet, TaxLinesPriceSetShopMoney, TaxLinesPriceSetPresentmentMoney, TotalDiscountSet, TotalDiscountSetPresentmentMoney, TotalDiscountSetShopMoney, BillingAddress, TotalShippingPriceSet, TotalShippingPriceSetShopMoney, TotalShippingPriceSetPresentmentMoney, Customer, DefaultAddress, TotalLineItemsPriceSet, TotalLineItemsPriceSetShopMoney, TotalLineItemsPriceSetPresentmentMoney, OrderShippingAddress, OrderListing, OrderItems, PlatformOrderUserInfo, PlatformDeliveryAddress, Channel, PlatformApplication, PlatformShipment, PlatformShipmentStatus, Bags, BagItem, BagItemAttributes, ShipmentPrices, Payments, Filters, Stage, StagesFilters, Options, PlatformOrderPage, AppliedFilters, OrderDetails, OrderDetailsItem, PlatformBreakupValues, ArticleAssignment, PlatformShipmentDetails, PlatformShipmentDetailsStatus, BagsDetails, BagFinancialBreakup, Identifiers, BagCurrStatus, BagArticle, ArticleIdentifiers, Set, SetSizeDistribution, Sizes, BagArticleReturnConfig, GstDetails, BagBreakupValues, BagCurrentStatus, BagStateMapper, BagStatus, BagStatusBagStateMapper, BagPrices, ShipmentBreakupValues, DpDetails, ShipmentInvoice, RtoAddress, StoreAddressJson, PlatformFulfillingStore, FulfillingStoreMeta, AdditionalContactDetails, Documents, Gst, ProductReturnConfig, Timing, Opening, Closing, FulfillingStoreStoreAddressJson, ShipmentGst, PlatformShipmentDetailsBrand, Promise, Timestamp, ShipmentTrackingDetails, ItemsPayments, PlatformOrderDetailsPage, ShipmentDates, OrderLanesCount, StageItem, UpdateOrderReprocessResponse, PlatformOrderTrack, OrderPicklistListing, Stages, ItemTotal, GetPingResponse, GetShipmentAddressResponse, DataShipmentAddress, UpdateShipmentAddressRequest, UpdateShipmentAddressResponse, ShipmentTrackResponse, ShipmentTrackResponseBagListItem, ShipmentTrackResponseBagListItemBreakValues, ShipmentTrackResponseBagListItemStatuses, ShipmentTrackResponseBagListItemStatusesProgress, ShipmentTrackResponseBagListItemStatusesTrack, ShipmentTrackResponseBagListItemDpDetails, ShipmentTrackResponseBagListItemsProductImage, UpdateShipmentStatusResponse, UpdateShipmentStatusBody, ShipmentReasonsResponse, ShipmentResponseReasons, PlatformShipmentTrack, Results, ShipmentUpdateRequest, ShipmentUpdateResponse, UpdateProcessShipmenstRequestBody, UpdateProcessShipmenstRequestResponse, GetVoiceCallbackResponse, GetClickToCallResponse, ApefaceApiError, GetSearchWordsData, GetSearchWordsDetailResponse, ErrorResponse, SearchKeywordResult, CreateSearchKeyword, DeleteResponse, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Meta, Guide, ValidateSizeGuide, SuccessResponse, SizeGuideResponse, MetaFields, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, BannerImage, ImageUrls, Media1, CollectionQuery, GetCollectionDetailNest, GetCollectionListingResponse, UserInfo, CollectionImage, CollectionBanner, Schedule, SeoDetail, CollectionBadge, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, Price1, ProductListingPrice, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Logo, Brand, Image, ProductPublished, Product, ProductListingResponse, ReturnConfig, OrderQuantity, TaxIdentifier, CustomOrder, Trader, TeaserTag, ProductPublish, ProductCreateUpdate, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, CompanyMeta, ReturnConfig1, DimensionResponse, PriceMeta, BrandMeta, ManufacturerResponse, Trader1, QuantityBase, StoreMeta, WeightResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, UserSerializer1, UserSerializer2, GetAddressSerializer, GetCompanySerializer, SellerPhoneNumber, LocationManagerSerializer, Document, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationTimingSerializer, LocationDayWiseSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, ContactDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponAuthor, State, DisplayMetaDict, DisplayMeta, Identifier, CouponDateMeta, Validity, CouponSchedule, RuleDefinition, Validation, BulkBundleRestriction, PriceRange, PaymentAllowValue, PaymentModes, PostOrder, UsesRemaining, UsesRestriction, Restrictions, Rule, CouponAction, Ownership, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionAuthor, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, UsesRemaining1, UsesRestriction1, UserRegistered, Restrictions1, PromotionAction, PromotionSchedule, Ownership1, DisplayMeta1, Visibility, PromotionDateMeta, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, CouponBreakup, LoyaltyPoints, RawBreakup, DisplayBreakup, CartBreakup, PromoMeta, ProductPrice, ProductPriceInfo, CartProductIdentifer, ProductAvailability, BasePrice, ArticlePriceInfo, BaseInfo, ProductArticle, ProductImage, ActionQuery, ProductAction, CategoryInfo, CartProduct, AppliedPromotion, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
}
/**
 * @typedef ApplicationResponse
 * @property {Application} [application]
 */
/**
 * @typedef Currency
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */
/**
 * @typedef Domain
 * @property {boolean} [verified]
 * @property {boolean} [is_primary]
 * @property {boolean} [is_shortlink]
 * @property {string} [_id]
 * @property {string} [name]
 */
/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled]
 * @property {string} [basepath]
 */
/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */
/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled]
 */
/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [type]
 */
/**
 * @typedef ApplicationMeta
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef SecureUrl
 * @property {string} [secure_url]
 */
/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description]
 * @property {string} [channel_type]
 * @property {number} [cache_ttl]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {number} [company_id]
 * @property {string} [token]
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type]
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 */
/**
 * @typedef NotFound
 * @property {string} [message]
 */
/**
 * @typedef BadRequest
 * @property {string} [message]
 */
/**
 * @typedef LocationDefaultLanguage
 * @property {string} [name]
 * @property {string} [code]
 */
/**
 * @typedef LocationDefaultCurrency
 * @property {string} [name]
 * @property {string} [symbol]
 * @property {string} [code]
 */
/**
 * @typedef LocationCountry
 * @property {string} [capital]
 * @property {string} [currency]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [name]
 * @property {string} [parent]
 * @property {string} [phone_code]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 */
/**
 * @typedef Locations
 * @property {Object[]} [items]
 */
/**
 * @typedef TicketList
 * @property {Ticket[]} [items]
 * @property {Filter} [filters]
 * @property {Page} [page]
 */
/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */
/**
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateCustomFormPayload
 * @property {string} slug
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {string} [header_image]
 * @property {PriorityEnum} priority
 * @property {boolean} [should_notify]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */
/**
 * @typedef EditCustomFormPayload
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {PriorityEnum} priority
 * @property {string} [header_image]
 * @property {boolean} [should_notify]
 * @property {boolean} [login_required]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */
/**
 * @typedef EditTicketPayload
 * @property {TicketContent} [content]
 * @property {string} [category]
 * @property {string} [sub_category]
 * @property {string} [source]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {AgentChangePayload} [assigned_to]
 * @property {string[]} [tags]
 */
/**
 * @typedef AgentChangePayload
 * @property {string} agent_id
 */
/**
 * @typedef CreateVideoRoomResponse
 * @property {string} unique_name
 */
/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success
 */
/**
 * @typedef CreateVideoRoomPayload
 * @property {string} unique_name
 * @property {NotifyUser[]} [notify]
 */
/**
 * @typedef NotifyUser
 * @property {string} country_code
 * @property {string} phone_number
 */
/**
 * @typedef Filter
 * @property {Priority[]} priorities
 * @property {TicketCategory[]} [categories]
 * @property {Status[]} statuses
 * @property {Object[]} assignees
 */
/**
 * @typedef TicketHistoryPayload
 * @property {Object} value
 * @property {HistoryTypeEnum} type
 */
/**
 * @typedef CustomFormSubmissionPayload
 * @property {Object[]} response
 * @property {TicketAsset[]} [attachments]
 */
/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token
 */
/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants
 */
/**
 * @typedef Participant
 * @property {UserSchema} [user]
 * @property {string} [identity]
 * @property {string} [status]
 */
/**
 * @typedef Email
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 * @property {boolean} [active]
 */
/**
 * @typedef Debug
 * @property {string} [source]
 * @property {string} [platform]
 */
/**
 * @typedef SubmitCustomFormResponse
 * @property {string} message
 * @property {Ticket} ticket
 */
/**
 * @typedef TicketContext
 * @property {string} [application_id]
 * @property {string} company_id
 */
/**
 * @typedef CreatedOn
 * @property {string} user_agent
 */
/**
 * @typedef TicketAsset
 * @property {string} [display]
 * @property {string} value
 * @property {TicketAssetTypeEnum} type
 */
/**
 * @typedef TicketContent
 * @property {string} title
 * @property {string} [description]
 * @property {TicketAsset[]} [attachments]
 */
/**
 * @typedef AddTicketPayload
 * @property {Object} [created_by]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {string} category
 * @property {TicketContent} content
 */
/**
 * @typedef Priority
 * @property {PriorityEnum} key
 * @property {string} display
 * @property {string} color
 */
/**
 * @typedef Status
 * @property {string} key
 * @property {string} display
 * @property {string} color
 */
/**
 * @typedef TicketCategory
 * @property {string} key
 * @property {string} display
 * @property {CustomForm} [form]
 * @property {TicketSubCategory[]} [sub_categories]
 * @property {TicketFeedbackForm} [feedback_form]
 */
/**
 * @typedef TicketSubCategory
 * @property {string} key
 * @property {string} display
 */
/**
 * @typedef TicketFeedbackForm
 * @property {string} title
 * @property {Object[]} [display]
 */
/**
 * @typedef TicketFeedbackList
 * @property {TicketFeedback[]} [items]
 */
/**
 * @typedef TicketFeedbackPayload
 * @property {Object} [form_response]
 */
/**
 * @typedef SubmitButton
 * @property {string} title
 * @property {string} title_color
 * @property {string} background_color
 */
/**
 * @typedef PollForAssignment
 * @property {number} duration
 * @property {string} message
 * @property {string} success_message
 * @property {string} failure_message
 */
/**
 * @typedef CustomForm
 * @property {string} application_id
 * @property {string} slug
 * @property {string} [header_image]
 * @property {string} title
 * @property {string} [description]
 * @property {Priority} priority
 * @property {boolean} login_required
 * @property {boolean} should_notify
 * @property {string} [success_message]
 * @property {SubmitButton} [submit_button]
 * @property {Object[]} inputs
 * @property {CreatedOn} [created_on]
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {string} _id
 */
/**
 * @typedef FeedbackResponseItem
 * @property {string} display
 * @property {string} key
 * @property {string} value
 */
/**
 * @typedef TicketFeedback
 * @property {string} _id
 * @property {string} ticket_id
 * @property {string} company_id
 * @property {FeedbackResponseItem[]} response
 * @property {string} [category]
 * @property {Object} [user]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef TicketHistory
 * @property {string} type
 * @property {Object} value
 * @property {string} ticket_id
 * @property {CreatedOn} [created_on]
 * @property {Object} [created_by]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id]
 * @property {TicketContent} [content]
 * @property {string} ticket_id
 * @property {TicketCategory} category
 * @property {TicketSubCategory} [sub_category]
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {Object} [created_by]
 * @property {Object} [assigned_to]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_feedback_pending]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef Activity
 * @property {Object} [current_state]
 * @property {string} [document_id]
 * @property {Object} [previous_state]
 */
/**
 * @typedef ActivityDump
 * @property {Activity} [activity]
 * @property {CreatedBy} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef AddMediaListRequest
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {AddMediaRequest[]} [media_list]
 * @property {string} [ref_id]
 * @property {string} [ref_type]
 */
/**
 * @typedef AddMediaRequest
 * @property {string} [cloud_id]
 * @property {string} [cloud_name]
 * @property {string} [cloud_provider]
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {string} [media_url]
 * @property {string} [ref_id]
 * @property {string} [ref_type]
 * @property {string[]} [tags]
 * @property {string} [thumbnail_url]
 * @property {string} [type]
 */
/**
 * @typedef ApproveRequest
 * @property {boolean} [approve]
 * @property {string} [entity_type]
 * @property {string} id
 * @property {string} [reason]
 */
/**
 * @typedef Attribute
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {TagMeta[]} [tags]
 */
/**
 * @typedef AttributeObject
 * @property {string} [description]
 * @property {string} name
 * @property {string} [slug]
 * @property {string} [title]
 * @property {string} type
 * @property {number} value
 */
/**
 * @typedef CreatedBy
 * @property {string} [id]
 * @property {string} [name]
 * @property {TagMeta[]} [tags]
 */
/**
 * @typedef CursorGetResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef DeviceMeta
 * @property {string} [app_version]
 * @property {string} [platform]
 */
/**
 * @typedef Entity
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef EntityRequest
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 */
/**
 * @typedef FeedbackAttributes
 * @property {Attribute[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef FeedbackError
 * @property {Object} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */
/**
 * @typedef FeedbackState
 * @property {boolean} [active]
 * @property {boolean} [archive]
 * @property {string} [media]
 * @property {boolean} [qna]
 * @property {boolean} [rating]
 * @property {boolean} [review]
 */
/**
 * @typedef GetResponse
 * @property {Object} [data]
 * @property {Page} [page]
 */
/**
 * @typedef GetReviewResponse
 * @property {ReviewFacet[]} [facets]
 * @property {Object[]} [items]
 * @property {Page} [page]
 * @property {SortMethod[]} [sort]
 */
/**
 * @typedef InsertResponse
 * @property {number} [count]
 */
/**
 * @typedef MediaMeta
 * @property {number} [max_count]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef MediaMetaRequest
 * @property {number} max_count
 * @property {number} size
 */
/**
 * @typedef NumberGetResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PageCursor
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} size
 * @property {string} type
 */
/**
 * @typedef PageNumber
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef Rating
 * @property {Attribute[]} [attributes]
 * @property {string[]} [attributes_slugs]
 * @property {UI} [ui]
 */
/**
 * @typedef RatingRequest
 * @property {string[]} attributes
 * @property {UI} [ui]
 */
/**
 * @typedef ReportAbuseRequest
 * @property {string} [description]
 * @property {string} entity_id
 * @property {string} entity_type
 */
/**
 * @typedef Review
 * @property {string} [description]
 * @property {string} [header]
 * @property {MediaMeta} [image_meta]
 * @property {string} [title]
 * @property {MediaMeta} [video_meta]
 * @property {boolean} [vote_allowed]
 */
/**
 * @typedef ReviewFacet
 * @property {string} [display]
 * @property {string} [name]
 * @property {boolean} [selected]
 * @property {string} [slug]
 * @property {string} [type]
 */
/**
 * @typedef ReviewRequest
 * @property {string} description
 * @property {string} header
 * @property {MediaMetaRequest} image_meta
 * @property {boolean} is_vote_allowed
 * @property {string} title
 * @property {MediaMetaRequest} video_meta
 */
/**
 * @typedef SaveAttributeRequest
 * @property {string} [description]
 * @property {string} name
 * @property {string} slug
 */
/**
 * @typedef SortMethod
 * @property {string} [name]
 * @property {boolean} [selected]
 * @property {string} [type]
 */
/**
 * @typedef TagMeta
 * @property {MediaMeta[]} [media]
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef Template
 * @property {DateMeta} [date_meta]
 * @property {Entity} [entity]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Rating} [rating]
 * @property {Review} [review]
 * @property {FeedbackState} [state]
 * @property {TagMeta[]} [tags]
 */
/**
 * @typedef TemplateGetResponse
 * @property {Template[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TemplateRequest
 * @property {boolean} active
 * @property {string} [enable_media_type]
 * @property {boolean} [enable_qna]
 * @property {boolean} enable_rating
 * @property {boolean} enable_review
 * @property {EntityRequest} entity
 * @property {RatingRequest} rating
 * @property {ReviewRequest} review
 */
/**
 * @typedef TemplateRequestList
 * @property {TemplateRequest[]} template_list
 */
/**
 * @typedef UI
 * @property {string[]} [feedback_question]
 * @property {UIIcon} [icon]
 * @property {string[]} [text]
 * @property {string} [type]
 */
/**
 * @typedef UIIcon
 * @property {string} [active]
 * @property {string} [inactive]
 * @property {string[]} [selected]
 */
/**
 * @typedef UpdateAttributeRequest
 * @property {string} [description]
 * @property {string} name
 * @property {string} [slug]
 */
/**
 * @typedef UpdateResponse
 * @property {number} [count]
 */
/**
 * @typedef UpdateReviewRequest
 * @property {boolean} [active]
 * @property {string} [application]
 * @property {boolean} [approve]
 * @property {boolean} [archive]
 * @property {AttributeObject[]} [attributes_rating]
 * @property {string} [description]
 * @property {DeviceMeta} [device_meta]
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {MediaMeta[]} [media_resource]
 * @property {number} [rating]
 * @property {string} [review_id]
 * @property {string} [template_id]
 * @property {string} [title]
 */
/**
 * @typedef UpdateTemplateRequest
 * @property {boolean} active
 * @property {string} [enable_media_type]
 * @property {boolean} [enable_qna]
 * @property {boolean} enable_rating
 * @property {boolean} enable_review
 * @property {EntityRequest} entity
 * @property {RatingRequest} rating
 * @property {ReviewRequest} review
 */
/**
 * @typedef UpdateTemplateStatusRequest
 * @property {boolean} [active]
 * @property {boolean} [archive]
 */
/**
 * @typedef AvailablePageSchema
 * @property {string} [value]
 * @property {string} [text]
 * @property {string} [path]
 * @property {string} [type]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {string} [theme]
 * @property {AvailablePageSeo} [seo]
 * @property {Object[]} [props]
 * @property {string} [_id]
 */
/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */
/**
 * @typedef AvailablePageSeo
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [_id]
 */
/**
 * @typedef AvailablePageSchemaSections
 * @property {string} [name]
 * @property {string} [label]
 * @property {Object} [props]
 * @property {Object[]} [blocks]
 * @property {Object} [preset]
 * @property {AvailablePagePredicate} [predicate]
 */
/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [mobile]
 * @property {boolean} [desktop]
 * @property {boolean} [tablet]
 */
/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [authenticated]
 * @property {boolean} [anonymous]
 */
/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [selected]
 * @property {string} [exact_url]
 * @property {Object} [query]
 */
/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {AvailablePageRoutePredicate} [route]
 */
/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {number} [current]
 */
/**
 * @typedef ThemesListingResponseSchema
 * @property {ThemesSchema[]} [items]
 * @property {PaginationSchema} [page]
 */
/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */
/**
 * @typedef UpgradableThemeSchema
 * @property {string} [parent_theme]
 * @property {string} [applied_theme]
 * @property {boolean} [upgrade]
 */
/**
 * @typedef FontsSchema
 * @property {FontsSchemaItems} [items]
 * @property {string} [kind]
 */
/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegNotFoundSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef FontsSchemaItems
 * @property {string} [family]
 * @property {string[]} [variants]
 * @property {string[]} [subsets]
 * @property {string} [version]
 * @property {string} [last_modified]
 * @property {FontsSchemaItemsFiles} [files]
 * @property {string} [category]
 * @property {string} [kind]
 */
/**
 * @typedef FontsSchemaItemsFiles
 * @property {string} [regular]
 * @property {string} [italic]
 * @property {string} [bold]
 */
/**
 * @typedef ThemesSchema
 * @property {string} [application]
 * @property {boolean} [applied]
 * @property {boolean} [customized]
 * @property {boolean} [published]
 * @property {boolean} [archived]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [version]
 * @property {string} [parent_theme_version]
 * @property {string} [parent_theme]
 * @property {Information} [information]
 * @property {string[]} [tags]
 * @property {Src} [src]
 * @property {AssetsSchema} [assets]
 * @property {availableSectionSchema[]} [available_sections]
 * @property {Object} [styles]
 * @property {Config} [config]
 * @property {Font} [font]
 * @property {string} [_id]
 * @property {number} [__v]
 * @property {Colors} [colors]
 */
/**
 * @typedef availableSectionSchema
 * @property {Blocks[]} [blocks]
 * @property {string} [name]
 * @property {string} [label]
 * @property {BlocksProps[]} [props]
 */
/**
 * @typedef Information
 * @property {Images} [images]
 * @property {string[]} [features]
 * @property {string} [name]
 * @property {string} [description]
 */
/**
 * @typedef Images
 * @property {string[]} [desktop]
 * @property {string[]} [android]
 * @property {string[]} [ios]
 * @property {string[]} [thumbnail]
 */
/**
 * @typedef Src
 * @property {string} [link]
 */
/**
 * @typedef AssetsSchema
 * @property {UmdJs} [umd_js]
 * @property {CommonJs} [common_js]
 * @property {Css} [css]
 */
/**
 * @typedef UmdJs
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef CommonJs
 * @property {string} [link]
 */
/**
 * @typedef Css
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef Sections
 * @property {string} [attributes]
 */
/**
 * @typedef Config
 * @property {Preset} [preset]
 * @property {GlobalSchema} [global_schema]
 * @property {string} [current]
 * @property {ListSchemaItem[]} [list]
 */
/**
 * @typedef Preset
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef GlobalSchema
 * @property {GlobalSchemaProps[]} [props]
 */
/**
 * @typedef ListSchemaItem
 * @property {Object} [global_config]
 * @property {ConfigPage[]} [page]
 * @property {string} [name]
 */
/**
 * @typedef Colors
 * @property {string} [bg_color]
 * @property {string} [primary_color]
 * @property {string} [secondary_color]
 * @property {string} [accent_color]
 * @property {string} [link_color]
 * @property {string} [button_secondary_color]
 */
/**
 * @typedef Custom
 * @property {Object} [props]
 */
/**
 * @typedef ConfigPage
 * @property {Object} [settings]
 * @property {string} [page]
 */
/**
 * @typedef Font
 * @property {string} [family]
 * @property {Variants} [variants]
 */
/**
 * @typedef Variants
 * @property {Medium} [medium]
 * @property {SemiBold} [semi_bold]
 * @property {Bold} [bold]
 * @property {Light} [light]
 * @property {Regular} [regular]
 */
/**
 * @typedef Medium
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef SemiBold
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Bold
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Light
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Regular
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Blocks
 * @property {string} [type]
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 */
/**
 * @typedef GlobalSchemaProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 * @property {string} [category]
 */
/**
 * @typedef BlocksProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */
/**
 * @typedef BlockUserRequestSchema
 * @property {boolean} [status]
 * @property {string[]} [user_id]
 * @property {string} [reason]
 */
/**
 * @typedef ArchiveUserRequestSchema
 * @property {string} [user_id]
 */
/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email]
 */
/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [verified]
 * @property {boolean} [active]
 * @property {string} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 */
/**
 * @typedef EditMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [phone]
 */
/**
 * @typedef EditProfileRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {EditProfileMobileSchema} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {string} [profile_pic_url]
 * @property {string} [android_hash]
 * @property {string} [sender]
 * @property {string} [register_token]
 */
/**
 * @typedef EditProfileMobileSchema
 * @property {string} [phone]
 * @property {string} [country_code]
 */
/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [register_token]
 */
/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [register_token]
 * @property {string} [otp]
 */
/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} [request_id]
 * @property {string} [register_token]
 * @property {string} [otp]
 */
/**
 * @typedef SendMobileOtpRequestSchema
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [android_hash]
 * @property {string} [force]
 * @property {string} [captcha_code]
 */
/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} [old_password]
 * @property {string} [new_password]
 */
/**
 * @typedef FormRegisterRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {string} [password]
 * @property {FormRegisterRequestSchemaPhone} [phone]
 * @property {string} [register_token]
 */
/**
 * @typedef TokenRequestBodySchema
 * @property {string} [token]
 */
/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} [code]
 * @property {string} [password]
 */
/**
 * @typedef CodeRequestBodySchema
 * @property {string} [code]
 */
/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} [email]
 * @property {string} [captcha_code]
 */
/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [password]
 * @property {string} [username]
 */
/**
 * @typedef SendOtpRequestSchema
 * @property {string} [country_code]
 * @property {string} [captcha_code]
 * @property {string} [mobile]
 */
/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in]
 * @property {OAuthRequestSchemaOauth2} [oauth2]
 * @property {OAuthRequestSchemaProfile} [profile]
 */
/**
 * @typedef OAuthRequestAppleSchema
 * @property {string} [user_identifier]
 * @property {OAuthRequestAppleSchemaOauth} [oauth]
 * @property {OAuthRequestAppleSchemaProfile} [profile]
 */
/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */
/**
 * @typedef AuthSuccess
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 * @property {UserSchema} [user]
 */
/**
 * @typedef SendOtpResponse
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */
/**
 * @typedef ProfileEditSuccess
 * @property {UserSchema} [user]
 * @property {string} [register_token]
 * @property {string} [resend_email_token]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [email]
 * @property {string} [request_id]
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 */
/**
 * @typedef LoginSuccess
 * @property {UserSchema} [user]
 * @property {string} [request_id]
 * @property {string} [register_token]
 */
/**
 * @typedef VerifyOtpSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 * @property {string} [register_token]
 */
/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status]
 */
/**
 * @typedef RegisterFormSuccess
 * @property {string} [email]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */
/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message]
 */
/**
 * @typedef HasPasswordSuccess
 * @property {boolean} [result]
 */
/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout]
 */
/**
 * @typedef BlockUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef ArchiveUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef OtpSuccess
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 */
/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions]
 */
/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_mobile_link]
 */
/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_email_link]
 */
/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verify_mobile_link]
 */
/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verify_email_link]
 */
/**
 * @typedef UserSearchResponseSchema
 * @property {UserSchema[]} [users]
 */
/**
 * @typedef CustomerListResponseSchema
 * @property {UserSchema[]} [items]
 * @property {PaginationSchema} [page]
 */
/**
 * @typedef SessionListResponseSchema
 * @property {string[]} [items]
 */
/**
 * @typedef SessionDeleteResponseSchema
 * @property {string[]} [items]
 */
/**
 * @typedef UnauthorizedSchema
 * @property {string} [message]
 */
/**
 * @typedef UnauthenticatedSchema
 * @property {boolean} [authenticated]
 */
/**
 * @typedef NotFoundSchema
 * @property {string} [message]
 */
/**
 * @typedef AuthenticationInternalServerErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef AuthenticationApiErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef ProfileEditSuccessSchema
 * @property {string} [email]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [user]
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 */
/**
 * @typedef FormRegisterRequestSchemaPhone
 * @property {string} [country_code]
 * @property {string} [mobile]
 */
/**
 * @typedef OAuthRequestSchemaOauth2
 * @property {string} [access_token]
 * @property {number} [expiry]
 * @property {string} [refresh_token]
 */
/**
 * @typedef OAuthRequestSchemaProfile
 * @property {string} [last_name]
 * @property {string} [image]
 * @property {string} [id]
 * @property {string} [email]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */
/**
 * @typedef OAuthRequestAppleSchemaOauth
 * @property {string} [identity_token]
 */
/**
 * @typedef OAuthRequestAppleSchemaProfile
 * @property {string} [last_name]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */
/**
 * @typedef AuthSuccessUser
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {AuthSuccessUserDebug} [debug]
 * @property {boolean} [active]
 * @property {AuthSuccessUserEmails} [emails]
 */
/**
 * @typedef AuthSuccessUserDebug
 * @property {string} [platform]
 */
/**
 * @typedef AuthSuccessUserEmails
 * @property {string} [email]
 * @property {boolean} [verified]
 * @property {boolean} [primary]
 * @property {boolean} [active]
 */
/**
 * @typedef CreateUserRequestSchema
 * @property {string} phone_number
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} username
 * @property {Object} [meta]
 */
/**
 * @typedef CreateUserResponseSchema
 * @property {UserSchema} [user]
 */
/**
 * @typedef CreateUserSessionRequestSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {string} [user_id]
 */
/**
 * @typedef CreateUserSessionResponseSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {boolean} [secure]
 * @property {boolean} [http_only]
 * @property {Object} [cookie]
 */
/**
 * @typedef PlatformSchema
 * @property {string} [display]
 * @property {LookAndFeel} [look_and_feel]
 * @property {string} [updated_at]
 * @property {boolean} [active]
 * @property {boolean} [forgot_password]
 * @property {Login} [login]
 * @property {boolean} [skip_captcha]
 * @property {string} [name]
 * @property {MetaSchema} [meta]
 * @property {string} [_id]
 * @property {Social} [social]
 * @property {RequiredFields} [required_fields]
 * @property {RegisterRequiredFields} [register_required_fields]
 * @property {boolean} [skip_login]
 * @property {FlashCard} [flash_card]
 * @property {string} [subtext]
 * @property {SocialTokens} [social_tokens]
 * @property {string} [created_at]
 * @property {boolean} [register]
 * @property {string} [mobile_image]
 * @property {string} [desktop_image]
 */
/**
 * @typedef LookAndFeel
 * @property {string} [card_position]
 * @property {string} [background_color]
 */
/**
 * @typedef Login
 * @property {boolean} [password]
 * @property {boolean} [otp]
 */
/**
 * @typedef MetaSchema
 * @property {boolean} [fynd_default]
 */
/**
 * @typedef Social
 * @property {boolean} [account_kit]
 * @property {boolean} [facebook]
 * @property {boolean} [google]
 * @property {boolean} [apple]
 */
/**
 * @typedef RequiredFields
 * @property {PlatformEmail} [email]
 * @property {PlatformMobile} [mobile]
 */
/**
 * @typedef PlatformEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef PlatformMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef RegisterRequiredFields
 * @property {RegisterRequiredFieldsEmail} [email]
 * @property {RegisterRequiredFieldsMobile} [mobile]
 */
/**
 * @typedef RegisterRequiredFieldsEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef RegisterRequiredFieldsMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef FlashCard
 * @property {string} [text]
 * @property {string} [text_color]
 * @property {string} [background_color]
 */
/**
 * @typedef SocialTokens
 * @property {Facebook} [facebook]
 * @property {Accountkit} [account_kit]
 * @property {Google} [google]
 */
/**
 * @typedef Facebook
 * @property {string} [app_id]
 */
/**
 * @typedef Accountkit
 * @property {string} [app_id]
 */
/**
 * @typedef Google
 * @property {string} [app_id]
 */
/**
 * @typedef UpdateUserRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [external_id]
 * @property {Object} [meta]
 */
/**
 * @typedef UserSchema
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [first_name]
 * @property {Object} [meta]
 * @property {string} [last_name]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {Email[]} [emails]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {boolean} [active]
 * @property {string} [profile_pic_url]
 * @property {string} [username]
 * @property {string} [account_type]
 * @property {Debug} [debug]
 * @property {boolean} [has_old_password_hash]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef PhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [phone]
 * @property {number} [country_code]
 */
/**
 * @typedef ApplicationLegal
 * @property {string} [application]
 * @property {string} [tnc]
 * @property {string} [policy]
 * @property {string} [shipping]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [question]
 * @property {string} [answer]
 */
/**
 * @typedef PathMappingSchema
 * @property {string} [application]
 * @property {RedirectionSchema[]} [redirections]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef RedirectionSchema
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 */
/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */
/**
 * @typedef SeoSchema
 * @property {string} [app]
 * @property {string} [_id]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {Object[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef CustomMetaTag
 * @property {string} [name]
 * @property {string} [content]
 * @property {string} [_id]
 */
/**
 * @typedef Detail
 * @property {string} [title]
 * @property {string} [description]
 */
/**
 * @typedef AnnouncementPageSchema
 * @property {string} [page_slug]
 * @property {string} [type]
 */
/**
 * @typedef EditorMeta
 * @property {string} [foreground_color]
 * @property {string} [background_color]
 * @property {string} [content_type]
 * @property {string} [content]
 */
/**
 * @typedef AnnouncementAuthorSchema
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */
/**
 * @typedef AdminAnnouncementSchema
 * @property {string} [_id]
 * @property {string[]} [platforms]
 * @property {string} [title]
 * @property {string} [announcement]
 * @property {AnnouncementPageSchema[]} [pages]
 * @property {EditorMeta} [editor_meta]
 * @property {AnnouncementAuthorSchema} [author]
 * @property {string} [created_at]
 * @property {string} [app]
 * @property {string} [modified_at]
 * @property {ScheduleSchema} [_schedule]
 */
/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 */
/**
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement]
 * @property {ScheduleStartSchema} [schedule]
 */
/**
 * @typedef ScheduleStartSchema
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */
/**
 * @typedef Author
 * @property {string} [designation]
 * @property {string} [id]
 * @property {string} [name]
 */
/**
 * @typedef BlogSchema
 * @property {string} [_id]
 * @property {Object} [_custom_json]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 * @property {string} [title]
 * @property {DateMeta} [date_meta]
 */
/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 */
/**
 * @typedef SEOImage
 * @property {string} [url]
 */
/**
 * @typedef BlogRequest
 * @property {string} [application]
 * @property {Object} [_custom_json]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 */
/**
 * @typedef GetAnnouncementListSchema
 * @property {AdminAnnouncementSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateAnnouncementSchema
 * @property {string} [message]
 * @property {AdminAnnouncementSchema} [data]
 */
/**
 * @typedef DataLoaderResponseSchema
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 */
/**
 * @typedef DataLoaderResetResponseSchema
 * @property {string} [reset]
 */
/**
 * @typedef Navigation
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [orientation]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {NavigationReference} [navigation]
 */
/**
 * @typedef LocaleLanguage
 * @property {Language} [hi]
 * @property {Language} [ar]
 * @property {Language} [en_us]
 */
/**
 * @typedef Language
 * @property {string} [display]
 */
/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */
/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {PageType} type
 */
/**
 * @typedef NavigationReference
 * @property {string[]} [acl]
 * @property {string[]} [tags]
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 */
/**
 * @typedef LandingPage
 * @property {LandingPageSchema} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef ConfigurationSchema
 * @property {number} [sleep_time]
 * @property {boolean} [start_on_launch]
 * @property {number} [duration]
 * @property {string} [slide_direction]
 */
/**
 * @typedef SlideshowMedia
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {boolean} [auto_decide_duration]
 * @property {Action} [action]
 */
/**
 * @typedef Slideshow
 * @property {SlideshowSchema} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements]
 * @property {number} [refresh_rate]
 * @property {string[]} [refresh_pages]
 */
/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs]
 */
/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */
/**
 * @typedef HandpickedTagSchema
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [content]
 */
/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags]
 */
/**
 * @typedef CreateTagSchema
 * @property {string} [name]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [content]
 */
/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags]
 */
/**
 * @typedef DataLoaderSchema
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 */
/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */
/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */
/**
 * @typedef TagDeleteSuccessResponse
 * @property {boolean} [success]
 */
/**
 * @typedef ContentAPIError
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */
/**
 * @typedef CategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef ChildrenSchema
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 */
/**
 * @typedef CategoryRequestSchema
 * @property {string} [slug]
 * @property {string} [title]
 */
/**
 * @typedef FAQCategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef FaqSchema
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [question]
 * @property {string} [answer]
 */
/**
 * @typedef FAQ
 * @property {string} [slug]
 * @property {string} [question]
 * @property {string} [answer]
 */
/**
 * @typedef CreateFaqResponseSchema
 * @property {FaqSchema} [faq]
 */
/**
 * @typedef CreateFaqSchema
 * @property {FAQ} [faq]
 */
/**
 * @typedef GetFaqSchema
 * @property {Object[]} [faqs]
 */
/**
 * @typedef UpdateFaqCategoryRequestSchema
 * @property {CategorySchema} [category]
 */
/**
 * @typedef CreateFaqCategoryRequestSchema
 * @property {CategoryRequestSchema} [category]
 */
/**
 * @typedef CreateFaqCategorySchema
 * @property {CategorySchema} [category]
 */
/**
 * @typedef GetFaqCategoriesSchema
 * @property {CategorySchema[]} [categories]
 */
/**
 * @typedef GetFaqCategoryBySlugSchema
 * @property {FAQCategorySchema} [category]
 */
/**
 * @typedef LandingPageGetResponse
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LandingPageSchema
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef DefaultNavigationResponse
 * @property {NavigationSchema[]} [items]
 */
/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Orientation
 * @property {string[]} [portrait]
 * @property {string[]} [landscape]
 */
/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {Orientation} [orientation]
 * @property {number} [version]
 * @property {NavigationReference[]} [navigation]
 */
/**
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {Orientation} [orientation]
 * @property {NavigationReference[]} [navigation]
 */
/**
 * @typedef CustomPageSchema
 * @property {string} [_id]
 * @property {string} [platform]
 * @property {string} [title]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [orientation]
 * @property {string} [application]
 * @property {string} [description]
 * @property {boolean} [published]
 * @property {string[]} [tags]
 * @property {Object[]} [content]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {ScheduleSchema} [_schedule]
 */
/**
 * @typedef ContentSchema
 * @property {string} [type]
 * @property {Object} [value]
 */
/**
 * @typedef CustomPage
 * @property {CustomPageSchema} [data]
 */
/**
 * @typedef FeatureImage
 * @property {string} [secure_url]
 */
/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PageSpec
 * @property {Object[]} [specifications]
 */
/**
 * @typedef PageSpecParam
 * @property {string} [key]
 * @property {boolean} [required]
 */
/**
 * @typedef PageSpecItem
 * @property {string} [page_type]
 * @property {string} [display_name]
 * @property {PageSpecParam[]} [params]
 * @property {PageSpecParam[]} [query]
 */
/**
 * @typedef PageSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [component_ids]
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {Object[]} [page_meta]
 * @property {ScheduleSchema} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {SEO} [seo]
 * @property {Object} [visibility]
 * @property {boolean} [archived]
 */
/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */
/**
 * @typedef PageContent
 * @property {string} [type]
 * @property {Object} [value]
 */
/**
 * @typedef PageMeta
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef PageRequest
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {Object[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {string} [title]
 */
/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 */
/**
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */
/**
 * @typedef PageMetaSchema
 * @property {NavigationSchema[]} [system_pages]
 * @property {PageSchema[]} [custom_pages]
 * @property {string} [application_id]
 */
/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SlideshowSchema
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {DateMeta} [date_meta]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia[]} [media]
 * @property {boolean} [active]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef SlideshowRequest
 * @property {string} [slug]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia} [media]
 * @property {boolean} [active]
 */
/**
 * @typedef Support
 * @property {boolean} [created]
 * @property {string} [_id]
 * @property {string} [config_type]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {ContactSchema} [contact]
 */
/**
 * @typedef PhoneProperties
 * @property {string} [key]
 * @property {string} [code]
 * @property {string} [number]
 */
/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */
/**
 * @typedef EmailProperties
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef EmailSchema
 * @property {boolean} [active]
 * @property {EmailProperties[]} [email]
 */
/**
 * @typedef ContactSchema
 * @property {PhoneSchema} [phone]
 * @property {EmailSchema} [email]
 */
/**
 * @typedef TagsSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {TagSchema[]} [tags]
 */
/**
 * @typedef TagSchema
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {TagSourceSchema} [__source]
 */
/**
 * @typedef TagSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */
/**
 * @typedef UnauthenticatedUser
 * @property {string} [message]
 */
/**
 * @typedef UnauthenticatedApplication
 * @property {string} [message]
 */
/**
 * @typedef ResourceNotFound
 * @property {string} [message]
 */
/**
 * @typedef InternalServerError
 * @property {string} [message]
 * @property {string} [code]
 */
/**
 * @typedef CheckValidityResponse
 * @property {boolean} [is_valid]
 * @property {number} [discount_amount]
 */
/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef Plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef DetailedPlanComponents
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [group]
 * @property {string} [icon]
 * @property {Object} [links]
 * @property {boolean} [enabled]
 * @property {string} [display_text]
 */
/**
 * @typedef DetailedPlan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {DetailedPlanComponents[]} [components]
 */
/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */
/**
 * @typedef EntityChargePrice
 * @property {number} amount
 * @property {string} currency_code
 */
/**
 * @typedef EntityChargeRecurring
 * @property {string} interval
 */
/**
 * @typedef ChargeLineItem
 * @property {string} name
 * @property {string} term
 * @property {string} pricing_type
 * @property {EntityChargePrice} price
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {number} [trial_days]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef CreateSubscriptionCharge
 * @property {string} name
 * @property {number} [trial_days]
 * @property {ChargeLineItem[]} line_items
 * @property {boolean} [is_test]
 * @property {string} return_url
 */
/**
 * @typedef CurrentPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */
/**
 * @typedef SubscriptionCharge
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [term]
 * @property {string} [pricing_type]
 * @property {EntityChargePrice} [price]
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {string} [billing_date]
 * @property {CurrentPeriod} [current_period]
 * @property {string} [status]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef EntitySubscription
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {number} [company_id]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {number} [trial_days]
 * @property {SubscriptionTrialPeriod} [trial_period]
 * @property {Object} [metadata]
 * @property {SubscriptionCharge[]} [line_items]
 */
/**
 * @typedef CreateSubscriptionResponse
 * @property {EntitySubscription} [subscription]
 * @property {string} [confirm_url]
 */
/**
 * @typedef InvoiceDetailsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoiceDetailsClient
 * @property {string[]} [address_lines]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 */
/**
 * @typedef InvoiceDetailsStatusTrail
 * @property {string} [_id]
 * @property {string} [value]
 * @property {string} [timestamp]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataChecks
 * @property {string} [cvc_check]
 * @property {string} [address_line1_check]
 * @property {string} [address_postal_code_check]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataNetworks
 * @property {string[]} [available]
 * @property {string} [preferred]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
 * @property {boolean} [supported]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsData
 * @property {string} [brand]
 * @property {string} [last4]
 * @property {InvoiceDetailsPaymentMethodsDataChecks} [checks]
 * @property {string} [wallet]
 * @property {string} [country]
 * @property {string} [funding]
 * @property {number} [exp_year]
 * @property {InvoiceDetailsPaymentMethodsDataNetworks} [networks]
 * @property {number} [exp_month]
 * @property {string} [fingerprint]
 * @property {string} [generated_from]
 * @property {InvoiceDetailsPaymentMethodsDataThreeDSecureUsage} [three_d_secure_usage]
 */
/**
 * @typedef InvoiceDetailsPaymentMethods
 * @property {number} [id]
 * @property {string} [type]
 * @property {string} [pg_payment_method_id]
 * @property {InvoiceDetailsPaymentMethodsData} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef InvoicePaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef InvoiceDetails
 * @property {InvoiceDetailsPeriod} [period]
 * @property {InvoiceDetailsClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [_id]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicePaymentMethod} [payment_method]
 */
/**
 * @typedef InvoiceItemsPlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef InvoiceItemsPlan
 * @property {InvoiceItemsPlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef InvoiceItemsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoiceItems
 * @property {string} [_id]
 * @property {string} [currency]
 * @property {InvoiceItemsPlan} [plan]
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {string} [description]
 * @property {InvoiceItemsPeriod} [period]
 * @property {number} [unit_amount]
 * @property {number} [amount]
 * @property {string} [type]
 * @property {string} [invoice_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef Invoice
 * @property {InvoiceDetails} [invoice]
 * @property {InvoiceItems[]} [invoice_items]
 */
/**
 * @typedef InvoicesDataClient
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string[]} [address_lines]
 */
/**
 * @typedef InvoicesDataPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoicesDataPaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef InvoicesData
 * @property {string} [_id]
 * @property {InvoicesDataClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {InvoicesDataPeriod} [period]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicesDataPaymentMethod} [payment_method]
 * @property {InvoiceItems[]} [invoice_items]
 */
/**
 * @typedef Invoices
 * @property {InvoicesData[]} [data]
 * @property {number} [start]
 * @property {number} [end]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {number} [total]
 */
/**
 * @typedef Phone
 * @property {string} [phone_number]
 * @property {string} [phone_country_code]
 */
/**
 * @typedef SubscriptionBillingAddress
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [postal_code]
 */
/**
 * @typedef SubscriptionCustomer
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [_id]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {Object} [data]
 */
/**
 * @typedef SubscriptionCustomerCreate
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 */
/**
 * @typedef SubscriptionCurrentPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef SubscriptionPauseCollection
 * @property {string} [behavior]
 * @property {string} [resume_at]
 */
/**
 * @typedef SubscriptionTrial
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef SubscriptionInvoiceSettings
 * @property {boolean} [generation]
 * @property {boolean} [charging]
 */
/**
 * @typedef Subscription
 * @property {SubscriptionCurrentPeriod} [current_period]
 * @property {SubscriptionPauseCollection} [pause_collection]
 * @property {SubscriptionTrial} [trial]
 * @property {SubscriptionInvoiceSettings} [invoice_settings]
 * @property {boolean} [is_active]
 * @property {boolean} [cancel_at_period_end]
 * @property {string} [_id]
 * @property {string} [subscriber_id]
 * @property {string} [plan_id]
 * @property {string} [product_suite_id]
 * @property {Plan} [plan_data]
 * @property {string} [current_status]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [latest_invoice]
 */
/**
 * @typedef SubscriptionStatus
 * @property {boolean} [is_enabled]
 * @property {Subscription} [subscription]
 */
/**
 * @typedef SubscriptionLimitApplication
 * @property {boolean} [enabled]
 * @property {number} [hard_limit]
 * @property {number} [soft_limit]
 */
/**
 * @typedef SubscriptionLimitMarketplace
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitOtherPlatform
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitTeam
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitProducts
 * @property {boolean} [bulk]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitExtensions
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitIntegrations
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimit
 * @property {SubscriptionLimitApplication} [application]
 * @property {SubscriptionLimitMarketplace} [marketplace]
 * @property {SubscriptionLimitOtherPlatform} [other_platform]
 * @property {SubscriptionLimitTeam} [team]
 * @property {SubscriptionLimitProducts} [products]
 * @property {SubscriptionLimitExtensions} [extensions]
 * @property {SubscriptionLimitIntegrations} [integrations]
 * @property {boolean} [is_trial_plan]
 */
/**
 * @typedef SubscriptionActivateReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [plan_id]
 * @property {string} [payment_method]
 */
/**
 * @typedef SubscriptionActivateRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */
/**
 * @typedef CancelSubscriptionReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [subscription_id]
 */
/**
 * @typedef CancelSubscriptionRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */
/**
 * @typedef StatsImported
 * @property {number} [count]
 */
/**
 * @typedef StatsProcessedEmail
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */
/**
 * @typedef StatsProcessedSms
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */
/**
 * @typedef StatsProcessed
 * @property {StatsProcessedEmail} [email]
 * @property {StatsProcessedSms} [sms]
 */
/**
 * @typedef Stats
 * @property {string} [_id]
 * @property {Object} [imported]
 * @property {Object} [processed]
 */
/**
 * @typedef GetStats
 * @property {Stats[]} [items]
 */
/**
 * @typedef CampaignReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */
/**
 * @typedef RecipientHeaders
 * @property {string} [email]
 */
/**
 * @typedef CampaignEmailTemplate
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef CampignEmailProvider
 * @property {string} [_id]
 * @property {string} [from_name]
 * @property {string} [from_email]
 */
/**
 * @typedef CampaignEmail
 * @property {CampaignEmailTemplate} [template]
 * @property {CampignEmailProvider} [provider]
 */
/**
 * @typedef Campaign
 * @property {RecipientHeaders} [recipient_headers]
 * @property {CampaignEmail} [email]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [datasource]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef Campaigns
 * @property {Campaign[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BigqueryHeadersReq
 * @property {string} [query]
 * @property {string} [type]
 */
/**
 * @typedef BigqueryHeadersResHeaders
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef BigqueryHeadersRes
 * @property {BigqueryHeadersResHeaders[]} [headers]
 */
/**
 * @typedef GetNRecordsCsvReq
 * @property {string} [url]
 * @property {boolean} [header]
 * @property {number} [count]
 */
/**
 * @typedef GetNRecordsCsvResItems
 * @property {string} [phone_number]
 * @property {string} [email]
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [orderid]
 */
/**
 * @typedef GetNRecordsCsvRes
 * @property {GetNRecordsCsvResItems[]} [items]
 */
/**
 * @typedef AudienceReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */
/**
 * @typedef Audience
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef Audiences
 * @property {Audience[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EmailProviderReqFrom
 * @property {string} [name]
 * @property {string} [email]
 * @property {boolean} [is_default]
 */
/**
 * @typedef EmailProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 */
/**
 * @typedef EmailProvider
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef EmailProviders
 * @property {EmailProvider[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EmailTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef EmailTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef EmailTemplateKeys
 * @property {string} [to]
 * @property {string} [cc]
 * @property {string} [bcc]
 */
/**
 * @typedef EmailTemplateHeaders
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef EmailTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {EmailTemplateKeys} [keys]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */
/**
 * @typedef TemplateAndType
 * @property {string} [template_type]
 * @property {string} [template]
 */
/**
 * @typedef EmailTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {EmailTemplateKeys} [keys]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef EmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef SystemEmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef EmailTemplates
 * @property {EmailTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SystemEmailTemplates
 * @property {SystemEmailTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PayloadEmailTemplateStructure
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef PayloadEmailProviderStructure
 * @property {string} [_id]
 */
/**
 * @typedef PayloadEmailStructure
 * @property {PayloadEmailTemplateStructure} [template]
 * @property {PayloadEmailProviderStructure} [provider]
 */
/**
 * @typedef PayloadSmsTemplateStructure
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef PayloadSmsProviderStructure
 * @property {string} [_id]
 */
/**
 * @typedef PayloadSmsStructure
 * @property {PayloadSmsTemplateStructure} [template]
 * @property {PayloadSmsProviderStructure} [provider]
 */
/**
 * @typedef PayloadStructure
 * @property {Object[]} [data]
 * @property {PayloadEmailStructure} [email]
 * @property {PayloadSmsStructure} [sms]
 * @property {string} [application]
 */
/**
 * @typedef MetaStructure
 * @property {string} [job_type]
 * @property {string} [action]
 * @property {string} [trace]
 * @property {string} [timestamp]
 */
/**
 * @typedef EngineRequest
 * @property {PayloadStructure} [payload]
 * @property {MetaStructure} [meta]
 */
/**
 * @typedef EngineResponse
 * @property {boolean} [success]
 */
/**
 * @typedef EventSubscriptionTemplateSms
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */
/**
 * @typedef EventSubscriptionTemplateEmail
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */
/**
 * @typedef EventSubscriptionTemplate
 * @property {EventSubscriptionTemplateSms} [sms]
 * @property {EventSubscriptionTemplateEmail} [email]
 */
/**
 * @typedef EventSubscription
 * @property {EventSubscriptionTemplate} [template]
 * @property {boolean} [is_default]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [event]
 * @property {string} [slug]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef EventSubscriptions
 * @property {EventSubscription[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TriggerJobResponse
 * @property {number} [status]
 */
/**
 * @typedef TriggerJobRequest
 * @property {string} [job_id]
 */
/**
 * @typedef Job
 * @property {boolean} [completed]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [campaign]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef Jobs
 * @property {Job[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef JobLog
 * @property {Object} [imported]
 * @property {Object} [processed]
 * @property {string} [_id]
 * @property {string} [job]
 * @property {string} [campaign]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef JobLogs
 * @property {JobLog[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LogEmail
 * @property {string} [template]
 */
/**
 * @typedef LogPushnotification
 * @property {string[]} [pushtokens]
 */
/**
 * @typedef LogMeta
 * @property {string} [type]
 * @property {string} [identifier]
 * @property {string} [key]
 * @property {string} [offset]
 * @property {string} [partition]
 * @property {string} [topic]
 */
/**
 * @typedef Log
 * @property {LogEmail} [email]
 * @property {LogPushnotification} [pushnotification]
 * @property {LogMeta} [meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [service]
 * @property {string} [step]
 * @property {string} [status]
 * @property {Object} [data]
 * @property {string} [expire_at]
 * @property {string} [created_at]
 */
/**
 * @typedef Logs
 * @property {Log[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PushtokenReq
 * @property {string} [action]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 */
/**
 * @typedef PushtokenRes
 * @property {string} [_id]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 * @property {string} [type]
 * @property {string} [platform]
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [expired_at]
 */
/**
 * @typedef SmsProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [type]
 * @property {string} [provider]
 */
/**
 * @typedef SmsProvider
 * @property {number} [rpt]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef SmsProviders
 * @property {SmsProvider[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SmsTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef SmsTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef SmsTemplateMessage
 * @property {string} [template_type]
 * @property {string} [template]
 */
/**
 * @typedef SmsTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */
/**
 * @typedef SmsTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef SmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string} [priority]
 * @property {Object[]} [tags]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef SystemSmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef SmsTemplates
 * @property {SmsTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SystemSmsTemplates
 * @property {SystemSmsTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Notification
 * @property {string} [title]
 * @property {string} [body]
 * @property {string} [subtitle]
 * @property {string} [icon]
 * @property {string} [deeplink]
 * @property {string} [click_action]
 */
/**
 * @typedef SystemNotificationUser
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef SystemNotificationSettings
 * @property {boolean} [sound]
 * @property {string} [priority]
 * @property {string} [time_to_live]
 */
/**
 * @typedef SystemNotification
 * @property {Notification} [notification]
 * @property {SystemNotificationUser} [user]
 * @property {SystemNotificationUser} [settings]
 * @property {string} [_id]
 * @property {string} [group]
 * @property {string} [created_at]
 */
/**
 * @typedef SystemNotificationsPage
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 */
/**
 * @typedef SystemNotifications
 * @property {SystemNotification[]} [items]
 * @property {number} [last_read_anchor]
 * @property {Page} [page]
 */
/**
 * @typedef PaymentGatewayConfigResponse
 * @property {string[]} excluded_fields
 * @property {string} app_id
 * @property {Object[]} [aggregators]
 * @property {boolean} created
 * @property {boolean} success
 * @property {string[]} display_fields
 */
/**
 * @typedef ErrorCodeDescription
 * @property {string} description
 * @property {boolean} success
 * @property {string} code
 */
/**
 * @typedef PaymentGatewayConfig
 * @property {boolean} [is_active]
 * @property {string} config_type
 * @property {string} merchant_salt
 * @property {string} key
 * @property {string} secret
 */
/**
 * @typedef PaymentGatewayConfigRequest
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {string} app_id
 * @property {boolean} [is_active]
 */
/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {boolean} success
 * @property {string[]} aggregator
 */
/**
 * @typedef ErrorCodeAndDescription
 * @property {string} description
 * @property {string} code
 */
/**
 * @typedef HttpErrorCodeAndResponse
 * @property {boolean} success
 * @property {ErrorCodeAndDescription} error
 */
/**
 * @typedef PaymentModeLogo
 * @property {string} small
 * @property {string} large
 */
/**
 * @typedef IntentAppErrorList
 * @property {string} [package_name]
 * @property {string} [code]
 */
/**
 * @typedef IntentApp
 * @property {string} [package_name]
 * @property {string} [display_name]
 * @property {PaymentModeLogo} [logos]
 * @property {string} [code]
 */
/**
 * @typedef PaymentModeList
 * @property {string[]} [intent_app_error_list]
 * @property {string} [name]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_issuer]
 * @property {boolean} [intent_flow]
 * @property {string} [card_id]
 * @property {number} [exp_year]
 * @property {number} [timeout]
 * @property {string} [fynd_vpa]
 * @property {number} [display_priority]
 * @property {string} [card_brand]
 * @property {string} [card_isin]
 * @property {number} [retry_count]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {boolean} [expired]
 * @property {string} [card_token]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [merchant_code]
 * @property {string} aggregator_name
 * @property {string} [card_type]
 * @property {string} [card_number]
 * @property {string} [code]
 * @property {number} [exp_month]
 * @property {string} [card_reference]
 * @property {string} [card_fingerprint]
 * @property {string} [card_name]
 * @property {string} [nickname]
 * @property {string} [display_name]
 * @property {string} [card_brand_image]
 */
/**
 * @typedef RootPaymentMode
 * @property {PaymentModeList[]} [list]
 * @property {boolean} [add_card_enabled]
 * @property {number} display_priority
 * @property {string} [aggregator_name]
 * @property {string} name
 * @property {string} display_name
 * @property {boolean} [anonymous_enable]
 */
/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option
 */
/**
 * @typedef PaymentOptionsResponse
 * @property {boolean} success
 * @property {PaymentOptions} payment_options
 */
/**
 * @typedef PayoutsResponse
 * @property {Object[]} payouts_aggregators
 * @property {boolean} is_active
 * @property {Object} customers
 * @property {Object} unique_transfer_no
 * @property {boolean} is_default
 * @property {Object} more_attributes
 * @property {string} transfer_type
 */
/**
 * @typedef PayoutBankDetails
 * @property {string} [account_holder]
 * @property {string} [branch_name]
 * @property {string} [account_no]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [bank_name]
 * @property {string} [city]
 * @property {string} account_type
 * @property {string} [state]
 * @property {string} ifsc_code
 */
/**
 * @typedef PayoutRequest
 * @property {boolean} is_active
 * @property {PayoutBankDetails} bank_details
 * @property {string} aggregator
 * @property {string} transfer_type
 * @property {string} unique_external_id
 * @property {Object} users
 */
/**
 * @typedef PayoutResponse
 * @property {boolean} is_active
 * @property {Object} payouts
 * @property {Object} bank_details
 * @property {string} payment_status
 * @property {string} unique_transfer_no
 * @property {string} aggregator
 * @property {boolean} created
 * @property {boolean} success
 * @property {string} transfer_type
 * @property {Object} users
 */
/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} success
 * @property {boolean} is_active
 * @property {boolean} is_default
 */
/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_active
 * @property {string} unique_external_id
 * @property {boolean} is_default
 */
/**
 * @typedef DeletePayoutResponse
 * @property {boolean} success
 */
/**
 * @typedef SubscriptionPaymentMethodResponse
 * @property {boolean} success
 * @property {Object[]} data
 */
/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success
 */
/**
 * @typedef SubscriptionConfigResponse
 * @property {boolean} success
 * @property {Object} config
 * @property {string} aggregator
 */
/**
 * @typedef SaveSubscriptionSetupIntentRequest
 * @property {string} unique_external_id
 */
/**
 * @typedef SaveSubscriptionSetupIntentResponse
 * @property {boolean} success
 * @property {Object} data
 */
/**
 * @typedef BeneficiaryModeDetails
 * @property {string} account_holder
 * @property {string} [address]
 * @property {string} branch_name
 * @property {string} email
 * @property {string} account_no
 * @property {string} mobile
 * @property {string} bank_name
 * @property {string} [vpa]
 * @property {string} [wallet]
 * @property {string} ifsc_code
 * @property {string} [comment]
 */
/**
 * @typedef AddBeneficiaryDetailsRequest
 * @property {string} shipment_id
 * @property {BeneficiaryModeDetails} details
 * @property {string} [request_id]
 * @property {string} transfer_mode
 * @property {boolean} delights
 * @property {string} [otp]
 * @property {string} order_id
 */
/**
 * @typedef RefundAccountResponse
 * @property {boolean} success
 * @property {string} message
 * @property {boolean} [is_verified_flag]
 * @property {Object} [data]
 */
/**
 * @typedef NotFoundResourceError
 * @property {string} description
 * @property {boolean} success
 * @property {string} code
 */
/**
 * @typedef IfscCodeResponse
 * @property {string} bank_name
 * @property {boolean} [success]
 * @property {string} branch_name
 */
/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} account_holder
 * @property {string} email
 * @property {string} account_no
 * @property {string} [mobile]
 * @property {string} ifsc_code
 * @property {string} beneficiary_id
 * @property {string} transfer_mode
 * @property {string} subtitle
 * @property {string} created_on
 * @property {string} [delights_user_name]
 * @property {string} [comment]
 * @property {string} address
 * @property {string} bank_name
 * @property {number} id
 * @property {boolean} is_active
 * @property {string} [branch_name]
 * @property {string} modified_on
 * @property {string} title
 * @property {string} display_name
 */
/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */
/**
 * @typedef PaymentConfirmationMode
 * @property {Object} [meta]
 * @property {string} mode
 * @property {string} [name]
 * @property {number} amount
 */
/**
 * @typedef PaymentConfirmationRequest
 * @property {PaymentConfirmationMode[]} payment_methods
 * @property {string} order_id
 */
/**
 * @typedef PaymentConfirmationResponse
 * @property {boolean} success
 * @property {string} message
 * @property {string} order_id
 */
/**
 * @typedef PennyDropPayload
 * @property {boolean} enabled
 * @property {string} [service_provider]
 */
/**
 * @typedef CancelledChequePayload
 * @property {boolean} enabled
 * @property {boolean} [document_mandatory]
 */
/**
 * @typedef PayoutPennyDropAndChequePayload
 * @property {PennyDropPayload} penny_drop
 * @property {CancelledChequePayload} cancelled_cheque
 */
/**
 * @typedef GetActivityStatus
 * @property {ActivityHistory} activity_history
 */
/**
 * @typedef ActivityHistory
 * @property {string} [createdat]
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [user]
 */
/**
 * @typedef CanBreakRequestBody
 * @property {string[]} shipment_ids
 */
/**
 * @typedef CanBreakResponse
 * @property {boolean} status
 * @property {Object} valid_actions
 */
/**
 * @typedef FailedOrders
 * @property {FailOrder} orders
 */
/**
 * @typedef FailOrder
 * @property {string} [updated_at]
 * @property {string} [_id]
 * @property {string} [reason]
 * @property {MarketplaceOrder} [marketplace_order]
 * @property {string} [marketplace_order_id]
 * @property {string} [created_at]
 * @property {string} [app_id]
 * @property {string} [marketplace]
 * @property {number} [company_id]
 */
/**
 * @typedef MarketplaceOrder
 * @property {string} [order_status_url]
 * @property {string} [admin_graphql_api_id]
 * @property {string} [email]
 * @property {boolean} [test]
 * @property {string} [note]
 * @property {string} [total_price]
 * @property {number} [app_id]
 * @property {TotalDiscountsSet} [total_discounts_set]
 * @property {TotalPriceSet} [total_price_set]
 * @property {TotalTaxSet} [total_tax_set]
 * @property {string} [gateway]
 * @property {string} [name]
 * @property {SubtotalPriceSet} [subtotal_price_set]
 * @property {number} [number]
 * @property {boolean} [buyer_accepts_marketing]
 * @property {string} [contact_email]
 * @property {string} [token]
 * @property {string} [source_name]
 * @property {Object[]} [payment_gateway_names]
 * @property {string} [presentment_currency]
 * @property {string} [subtotal_price]
 * @property {string} [processed_at]
 * @property {number} [order_number]
 * @property {string} [total_tip_received]
 * @property {number} [id]
 * @property {boolean} [confirmed]
 * @property {string} [currency]
 * @property {string} [total_line_items_price]
 * @property {LineItems} [line_items]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [total_weight]
 * @property {BillingAddress} [billing_address]
 * @property {TotalShippingPriceSet} [total_shipping_price_set]
 * @property {Customer} [customer]
 * @property {string} [total_discounts]
 * @property {TotalLineItemsPriceSet} [total_line_items_price_set]
 * @property {string} [tags]
 * @property {string} [total_price_usd]
 * @property {number} [user_id]
 * @property {string} [total_tax]
 * @property {string} [processing_method]
 * @property {OrderShippingAddress} [shipping_address]
 * @property {boolean} [taxes_included]
 * @property {string} [financial_status]
 */
/**
 * @typedef TotalDiscountsSet
 * @property {PresentmentMoney} [presentment_money]
 * @property {ShopMoney} [shop_money]
 */
/**
 * @typedef PresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef ShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalPriceSet
 * @property {TotalPriceSetShopMoney} [shop_money]
 * @property {TotalPriceSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef TotalPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalPriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalTaxSet
 * @property {TotalTaxSetShopMoney} [shop_money]
 * @property {TotalTaxSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef TotalTaxSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalTaxSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef SubtotalPriceSet
 * @property {SubtotalPriceSetShopMoney} [shop_money]
 * @property {SubtotalPriceSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef SubtotalPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef SubtotalPriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef LineItems
 * @property {string} [sku]
 * @property {number} [fulfillable_quantity]
 * @property {number} [grams]
 * @property {string} [total_discount]
 * @property {LineItemsArticle} [article]
 * @property {string} [title]
 * @property {string} [variant_inventory_management]
 * @property {number} [id]
 * @property {number} [variant_id]
 * @property {string} [variant_title]
 * @property {boolean} [product_exists]
 * @property {string} [price]
 * @property {string} [admin_graphql_api_id]
 * @property {number} [quantity]
 * @property {string} [vendor]
 * @property {string} [fulfillment_service]
 * @property {boolean} [taxable]
 * @property {string} [name]
 * @property {number} [product_id]
 * @property {PriceSet} [price_set]
 * @property {TaxLines} [tax_lines]
 * @property {boolean} [requires_shipping]
 * @property {boolean} [gift_card]
 * @property {TotalDiscountSet} [total_discount_set]
 */
/**
 * @typedef LineItemsArticle
 * @property {Quantities} [quantities]
 * @property {string} [old_article_uid]
 * @property {number} [total_quantity]
 * @property {Manufacturer} [manufacturer]
 * @property {ArticlePrice} [price]
 * @property {boolean} [track_inventory]
 * @property {Company} [company]
 * @property {boolean} [is_active]
 * @property {FailOrderDateMeta} [date_meta]
 * @property {boolean} [fragile]
 * @property {MarketplaceIdentifiers} [marketplace_identifiers]
 * @property {string} [size]
 * @property {boolean} [is_set]
 * @property {Dimension} [dimension]
 * @property {Weight} [weight]
 * @property {Store} [store]
 * @property {ArticleMeta} [meta]
 * @property {string} [uid]
 * @property {ArticleBrand} [brand]
 * @property {number} [item_id]
 * @property {string} [fynd_article_code]
 * @property {string} [_id]
 * @property {LineItemsArticleIdentifier} [identifier]
 * @property {string} [seller_identifier]
 * @property {string} [fynd_item_code]
 * @property {string} [country_of_origin]
 */
/**
 * @typedef Quantities
 * @property {NotAvailable} [not_available]
 * @property {Sellable} [sellable]
 * @property {OrderCommitted} [order_committed]
 * @property {Damaged} [damaged]
 */
/**
 * @typedef NotAvailable
 * @property {number} [count]
 * @property {string} [updated_at]
 */
/**
 * @typedef Sellable
 * @property {number} [count]
 * @property {string} [updated_at]
 */
/**
 * @typedef OrderCommitted
 * @property {number} [count]
 * @property {string} [updated_at]
 */
/**
 * @typedef Damaged
 * @property {string} [updated_at]
 * @property {number} [count]
 */
/**
 * @typedef Manufacturer
 * @property {boolean} [is_default]
 * @property {string} [address]
 * @property {string} [name]
 */
/**
 * @typedef ArticlePrice
 * @property {number} [marked]
 * @property {string} [currency]
 * @property {number} [effective]
 * @property {number} [transfer]
 */
/**
 * @typedef Company
 * @property {number} [id]
 * @property {string} [company_type]
 * @property {string} [business_type]
 * @property {string} [company_name]
 * @property {string} [created_on]
 * @property {string} [pan_no]
 * @property {boolean} [return_allowed]
 * @property {string} [meta]
 * @property {boolean} [exchange_allowed]
 * @property {string} [agreement_start_date]
 * @property {number} [exchange_within_days]
 * @property {number} [payment_procesing_charge]
 * @property {boolean} [fynd_a_fit_available]
 * @property {string} [modified_on]
 * @property {number} [return_within_days]
 */
/**
 * @typedef FailOrderDateMeta
 * @property {string} [added_on_store]
 * @property {string} [inventory_updated_on]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef MarketplaceIdentifiers
 * @property {TatacliqLuxury} [tatacliq_luxury]
 */
/**
 * @typedef TatacliqLuxury
 * @property {string} [sku]
 */
/**
 * @typedef Dimension
 * @property {number} [height]
 * @property {number} [width]
 * @property {string} [unit]
 * @property {number} [length]
 * @property {boolean} [is_default]
 */
/**
 * @typedef Weight
 * @property {boolean} [is_default]
 * @property {string} [unit]
 * @property {number} [shipping]
 */
/**
 * @typedef Store
 * @property {number} [id]
 */
/**
 * @typedef ArticleMeta
 * @property {string} [service]
 */
/**
 * @typedef ArticleBrand
 * @property {string} [name]
 * @property {number} [id]
 */
/**
 * @typedef LineItemsArticleIdentifier
 * @property {string} [sku_code]
 */
/**
 * @typedef PriceSet
 * @property {PriceSetShopMoney} [shop_money]
 * @property {PriceSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef PriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef PriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TaxLines
 * @property {string} [title]
 * @property {string} [price]
 * @property {number} [rate]
 * @property {TaxLinesPriceSet} [price_set]
 */
/**
 * @typedef TaxLinesPriceSet
 * @property {TaxLinesPriceSetShopMoney} [shop_money]
 * @property {TaxLinesPriceSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef TaxLinesPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TaxLinesPriceSetPresentmentMoney
 * @property {string} [currency_code]
 * @property {string} [amount]
 */
/**
 * @typedef TotalDiscountSet
 * @property {TotalDiscountSetPresentmentMoney} [presentment_money]
 * @property {TotalDiscountSetShopMoney} [shop_money]
 */
/**
 * @typedef TotalDiscountSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalDiscountSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef BillingAddress
 * @property {string} [address1]
 * @property {string} [city]
 * @property {string} [zip]
 * @property {string} [last_name]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [province_code]
 * @property {string} [phone]
 * @property {string} [company]
 * @property {string} [name]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [first_name]
 * @property {string} [province]
 */
/**
 * @typedef TotalShippingPriceSet
 * @property {TotalShippingPriceSetShopMoney} [shop_money]
 * @property {TotalShippingPriceSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef TotalShippingPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalShippingPriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef Customer
 * @property {string} [created_at]
 * @property {number} [id]
 * @property {string} [last_name]
 * @property {string} [state]
 * @property {number} [last_order_id]
 * @property {string} [note]
 * @property {boolean} [verified_email]
 * @property {string} [phone]
 * @property {boolean} [accepts_marketing]
 * @property {string} [first_name]
 * @property {string} [tags]
 * @property {string} [last_order_name]
 * @property {number} [orders_count]
 * @property {string} [total_spent]
 * @property {boolean} [tax_exempt]
 * @property {string} [currency]
 * @property {string} [accepts_marketing_updated_at]
 * @property {string} [email]
 * @property {string} [updated_at]
 * @property {string} [admin_graphql_api_id]
 * @property {DefaultAddress} [default_address]
 */
/**
 * @typedef DefaultAddress
 * @property {string} [last_name]
 * @property {string} [name]
 * @property {string} [province_code]
 * @property {string} [country_code]
 * @property {boolean} [is_default]
 * @property {number} [id]
 * @property {number} [customer_id]
 * @property {string} [first_name]
 * @property {string} [address1]
 * @property {string} [phone]
 * @property {string} [country_name]
 * @property {string} [company]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [province]
 * @property {string} [country]
 * @property {string} [zip]
 */
/**
 * @typedef TotalLineItemsPriceSet
 * @property {TotalLineItemsPriceSetShopMoney} [shop_money]
 * @property {TotalLineItemsPriceSetPresentmentMoney} [presentment_money]
 */
/**
 * @typedef TotalLineItemsPriceSetShopMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef TotalLineItemsPriceSetPresentmentMoney
 * @property {string} [amount]
 * @property {string} [currency_code]
 */
/**
 * @typedef OrderShippingAddress
 * @property {string} [address1]
 * @property {string} [zip]
 * @property {string} [address2]
 * @property {string} [country_code]
 * @property {string} [country]
 * @property {string} [last_name]
 * @property {string} [province_code]
 * @property {string} [first_name]
 * @property {string} [phone]
 * @property {string} [province]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [city]
 * @property {string} [company]
 * @property {string} [name]
 */
/**
 * @typedef OrderListing
 * @property {OrderItems[]} items
 * @property {Filters} filters
 * @property {Object} next_order_status
 * @property {PlatformOrderPage} page
 * @property {AppliedFilters} applied_filters
 */
/**
 * @typedef OrderItems
 * @property {PlatformOrderUserInfo} [user]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {Channel} [channel]
 * @property {string} [id]
 * @property {PlatformApplication} [application]
 * @property {PlatformShipment} [shipments]
 * @property {string} [created_at]
 * @property {number} [total_shipments_in_order]
 */
/**
 * @typedef PlatformOrderUserInfo
 * @property {string} [mobile]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {string} [last_name]
 * @property {boolean} [is_anonymous_user]
 * @property {number} [uid]
 * @property {string} [avis_user_id]
 */
/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [area]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [version]
 * @property {string} [address1]
 * @property {string} [updated_at]
 * @property {string} [city]
 * @property {string} [landmark]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {string} [address]
 * @property {string} [phone]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [address_type]
 * @property {string} [email]
 * @property {string} [pincode]
 * @property {string} [address2]
 * @property {string} [contact_person]
 * @property {string} [address_category]
 */
/**
 * @typedef Channel
 * @property {string} [name]
 * @property {string} [logo]
 */
/**
 * @typedef PlatformApplication
 * @property {string} [id]
 */
/**
 * @typedef PlatformShipment
 * @property {PlatformShipmentStatus} [status]
 * @property {Bags} [bags]
 * @property {ShipmentPrices} [prices]
 * @property {string} [id]
 * @property {ShipmentGst} [gst]
 * @property {number} [priority]
 * @property {string} [priority_text]
 * @property {boolean} [lock_status]
 * @property {string} [ordering_channel]
 * @property {number} [total_shipment_bags]
 */
/**
 * @typedef PlatformShipmentStatus
 * @property {number} [id]
 * @property {number[]} [bag_list]
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {string} [name]
 * @property {number} [progress]
 * @property {string} [shipment_id]
 * @property {string} [current_shipment_status]
 * @property {string} [color_code]
 */
/**
 * @typedef Bags
 * @property {BagItem} [item]
 * @property {number} [id]
 */
/**
 * @typedef BagItem
 * @property {number} [id]
 * @property {string} [size]
 * @property {string} [slug_key]
 * @property {boolean} [can_return]
 * @property {number} [brand_id]
 * @property {string[]} [l2_category]
 * @property {string} [name]
 * @property {string} [code]
 * @property {boolean} [can_cancel]
 * @property {BagItemAttributes} [attributes]
 * @property {string} [l3_category_name]
 * @property {number} [l3_category]
 * @property {string[]} [l1_category]
 * @property {string[]} [image]
 * @property {string} [brand]
 * @property {string} [last_updated_at]
 */
/**
 * @typedef BagItemAttributes
 * @property {string} [item_code]
 * @property {string} [brand_name]
 * @property {string} [country_of_origin]
 */
/**
 * @typedef ShipmentPrices
 * @property {number} [refund_amount]
 * @property {number} [cashback_applied]
 * @property {number} [transfer_price]
 * @property {number} [coupon_value]
 * @property {number} [amount_paid]
 * @property {number} [delivery_charge]
 * @property {number} [coupon_effective_discount]
 * @property {number} [cod_charges]
 * @property {number} [refund_credit]
 * @property {boolean} [added_to_fynd_cash]
 * @property {number} [gst_tax_percentage]
 * @property {number} [price_marked]
 * @property {number} [price_effective]
 * @property {number} [discount]
 * @property {number} [promotion_effective_discount]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [fynd_credits]
 * @property {number} [brand_calculated_amount]
 * @property {number} [cashback]
 * @property {number} [value_of_good]
 */
/**
 * @typedef Payments
 * @property {boolean} [is_active]
 * @property {string} [display_name]
 * @property {string} [logo]
 * @property {string} [source]
 * @property {string} [source_nickname]
 * @property {number} [display_priority]
 * @property {number} [id]
 * @property {string} [mode]
 * @property {string} [payment_identifier]
 */
/**
 * @typedef Filters
 * @property {Stage} [stage]
 * @property {Stages} [stages]
 */
/**
 * @typedef Stage
 * @property {string} [text]
 * @property {string} [value]
 * @property {boolean} [is_default]
 * @property {StagesFilters} [filters]
 */
/**
 * @typedef StagesFilters
 * @property {string} [text]
 * @property {string} [value]
 * @property {string} [type]
 * @property {Options} [options]
 */
/**
 * @typedef Options
 * @property {string} [text]
 * @property {string} [value]
 */
/**
 * @typedef PlatformOrderPage
 * @property {string} [next]
 * @property {string} [previous]
 * @property {string} [type]
 * @property {number} [size]
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [total]
 * @property {ItemTotal} [item_total]
 */
/**
 * @typedef AppliedFilters
 * @property {string} [stage]
 * @property {string[]} [stores]
 * @property {string[]} [deployment_stores]
 * @property {number[]} [dp]
 * @property {string} [from_date]
 * @property {string} [to_date]
 */
/**
 * @typedef OrderDetails
 * @property {OrderPicklistListing[]} items
 * @property {PlatformOrderPage} page
 * @property {Filters} filters
 * @property {Object} next_order_status
 * @property {AppliedFilters} applied_filters
 */
/**
 * @typedef OrderDetailsItem
 * @property {PlatformOrderUserInfo} [user]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {Channel} [channel]
 * @property {Object} [fyndstore_emp]
 * @property {Object} [ordering_store]
 * @property {PlatformBreakupValues} [breakup_values]
 * @property {string} [id]
 * @property {PlatformApplication} [application]
 * @property {PlatformShipmentDetails} [shipments]
 * @property {string} [created_at]
 * @property {number} [total_shipments_in_order]
 * @property {ItemsPayments} [payments]
 * @property {Object} [payment_methods]
 */
/**
 * @typedef PlatformBreakupValues
 * @property {string} [display]
 * @property {number} [value]
 * @property {string} [name]
 */
/**
 * @typedef ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */
/**
 * @typedef PlatformShipmentDetails
 * @property {PlatformShipmentDetailsStatus} [status]
 * @property {BagsDetails} [bags]
 * @property {ShipmentPrices} [prices]
 * @property {ShipmentBreakupValues} [breakup_values]
 * @property {string} [id]
 * @property {DpDetails} [dp_details]
 * @property {Object} [payment_methods]
 * @property {ShipmentInvoice} [invoice]
 * @property {PlatformFulfillingStore} [fulfilling_store]
 * @property {Payments} [payments]
 * @property {ShipmentGst} [gst]
 * @property {Company} [company]
 * @property {PlatformShipmentDetailsBrand} [brand]
 * @property {Object} [coupon]
 * @property {string} [order_source]
 * @property {boolean} [is_not_fynd_source]
 * @property {Object} [can_break]
 * @property {string} [comment]
 * @property {Promise} [promise]
 * @property {ShipmentTrackingDetails} [tracking_details]
 * @property {boolean} [is_fynd_coupon]
 * @property {string} [order_type]
 * @property {number} [total_shipment_bags]
 * @property {Object} [pod]
 * @property {boolean} [lock_status]
 * @property {number} [priority]
 * @property {string} [priority_text]
 * @property {string} [ordering_channel]
 * @property {string} [credit_note_id]
 * @property {boolean} [auto_trigger_dp_assignment]
 * @property {string} [packaging_type]
 * @property {ShipmentDates} [dates]
 */
/**
 * @typedef PlatformShipmentDetailsStatus
 * @property {number} [id]
 * @property {number[]} [bag_list]
 * @property {string} [created_at]
 * @property {string} [status]
 * @property {string} [name]
 * @property {number} [progress]
 * @property {string} [shipment_id]
 * @property {string} [current_shipment_status]
 * @property {string} [color_code]
 */
/**
 * @typedef BagsDetails
 * @property {BagFinancialBreakup[]} [financial_breakup]
 * @property {BagCurrStatus} [status]
 * @property {BagItem} [item]
 * @property {BagArticle} [article]
 * @property {number} [id]
 * @property {BagPrices} [prices]
 * @property {GstDetails} [gst_details]
 * @property {BagBreakupValues} [breakup_values]
 * @property {number} [update_time]
 * @property {BagCurrentStatus} [current_status]
 * @property {BagStatus} [bag_status]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {Object} [payment_methods]
 */
/**
 * @typedef BagFinancialBreakup
 * @property {number} [value_of_good]
 * @property {string} [hsn_code]
 * @property {number} [price_effective]
 * @property {number} [cod_charges]
 * @property {string} [gst_fee]
 * @property {number} [fynd_credits]
 * @property {number} [refund_amount]
 * @property {number} [cashback_applied]
 * @property {number} [transfer_price]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [coupon_value]
 * @property {number} [amount_paid]
 * @property {number} [gst_tax_percentage]
 * @property {string} [size]
 * @property {number} [total_units]
 * @property {number} [discount]
 * @property {number} [coupon_effective_discount]
 * @property {number} [cashback]
 * @property {number} [promotion_effective_discount]
 * @property {string} [gst_tag]
 * @property {number} [delivery_charge]
 * @property {number} [refund_credit]
 * @property {number} [price_marked]
 * @property {Identifiers} [identifiers]
 * @property {string} [item_name]
 * @property {boolean} [added_to_fynd_cash]
 * @property {number} [brand_calculated_amount]
 */
/**
 * @typedef Identifiers
 * @property {string} [ean]
 */
/**
 * @typedef BagCurrStatus
 * @property {boolean} [enable_tracking]
 * @property {boolean} [is_customer_return_allowed]
 * @property {boolean} [is_active]
 * @property {boolean} [is_returnable]
 * @property {boolean} [can_be_cancelled]
 */
/**
 * @typedef BagArticle
 * @property {ArticleIdentifiers} [identifiers]
 * @property {boolean} [esp_modified]
 * @property {boolean} [is_set]
 * @property {string} [size]
 * @property {string} [code]
 * @property {Set} [set]
 * @property {string} [seller_identifier]
 * @property {BagArticleReturnConfig} [return_config]
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {Object} [child_details]
 */
/**
 * @typedef ArticleIdentifiers
 * @property {string} [ean]
 */
/**
 * @typedef Set
 * @property {number} [quantity]
 * @property {SetSizeDistribution} [size_distribution]
 */
/**
 * @typedef SetSizeDistribution
 * @property {Sizes} [sizes]
 */
/**
 * @typedef Sizes
 * @property {string} [size]
 * @property {number} [pieces]
 */
/**
 * @typedef BagArticleReturnConfig
 * @property {number} [time]
 * @property {string} [unit]
 * @property {boolean} [returnable]
 */
/**
 * @typedef GstDetails
 * @property {number} [brand_calculated_amount]
 * @property {string} [gst_fee]
 * @property {string} [gst_tag]
 * @property {string} [hsn_code]
 * @property {number} [value_of_good]
 * @property {number} [gst_tax_percentage]
 * @property {boolean} [is_default_hsn_code]
 */
/**
 * @typedef BagBreakupValues
 * @property {string} [name]
 * @property {string} [display]
 * @property {number} [value]
 */
/**
 * @typedef BagCurrentStatus
 * @property {string} [updated_at]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [status]
 * @property {string} [state_type]
 */
/**
 * @typedef BagStateMapper
 * @property {string} [app_state_name]
 * @property {boolean} [is_active]
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {string} [app_display_name]
 */
/**
 * @typedef BagStatus
 * @property {string} [status]
 * @property {string} [state_type]
 * @property {string} [updated_at]
 * @property {BagStatusBagStateMapper} [bag_state_mapper]
 */
/**
 * @typedef BagStatusBagStateMapper
 * @property {boolean} [is_active]
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {string} [app_display_name]
 * @property {string} [app_state_name]
 */
/**
 * @typedef BagPrices
 * @property {number} [cashback]
 * @property {number} [refund_credit]
 * @property {number} [coupon_value]
 * @property {number} [delivery_charge]
 * @property {number} [fynd_credits]
 * @property {number} [price_marked]
 * @property {number} [cashback_applied]
 * @property {number} [value_of_good]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [amount_paid]
 * @property {number} [cod_charges]
 * @property {number} [price_effective]
 * @property {number} [refund_amount]
 * @property {number} [discount]
 */
/**
 * @typedef ShipmentBreakupValues
 * @property {string} [name]
 * @property {string} [display]
 * @property {number} [value]
 */
/**
 * @typedef DpDetails
 * @property {string} [gst_tag]
 */
/**
 * @typedef ShipmentInvoice
 * @property {string} [payment_type]
 * @property {string} [updated_date]
 * @property {string} [invoice_url]
 * @property {string} [label_url]
 * @property {string} [payment_mode]
 * @property {number} [amount_to_collect]
 * @property {RtoAddress} [rto_address]
 */
/**
 * @typedef RtoAddress
 * @property {string} [name]
 * @property {number} [id]
 * @property {string} [phone]
 * @property {string} [location_type]
 * @property {StoreAddressJson} [store_address_json]
 * @property {string} [code]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {number} [company_id]
 * @property {string} [contact_person]
 * @property {string} [state]
 * @property {string} [store_email]
 * @property {string} [address2]
 */
/**
 * @typedef StoreAddressJson
 * @property {string} [country]
 * @property {string} [updated_at]
 * @property {string} [area]
 * @property {string} [state]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [pincode]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [created_at]
 * @property {string} [contact_person]
 * @property {string} [address_category]
 * @property {string} [version]
 * @property {string} [landmark]
 */
/**
 * @typedef PlatformFulfillingStore
 * @property {number} [packaging_material_count]
 * @property {string} [location_type]
 * @property {string} [code]
 * @property {string} [city]
 * @property {FulfillingStoreMeta} [meta]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {string} [address1]
 * @property {string} [store_email]
 * @property {boolean} [is_archived]
 * @property {string} [state]
 * @property {string} [address2]
 * @property {string} [contact_person]
 * @property {string} [phone]
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} [fulfillment_channel]
 * @property {string} [created_at]
 * @property {number} [id]
 * @property {string} [pincode]
 * @property {string[]} [brand_store_tags]
 * @property {number} [company_id]
 * @property {FulfillingStoreStoreAddressJson} [store_address_json]
 * @property {string} [updated_at]
 * @property {string} [login_username]
 * @property {string} [country]
 */
/**
 * @typedef FulfillingStoreMeta
 * @property {AdditionalContactDetails} [additional_contact_details]
 * @property {Documents} [documents]
 * @property {string} [gst_number]
 * @property {string} [display_name]
 * @property {ProductReturnConfig} [product_return_config]
 * @property {boolean} [allow_dp_assignment_from_fynd]
 * @property {string} [stage]
 * @property {Timing} [timing]
 */
/**
 * @typedef AdditionalContactDetails
 * @property {string[]} [number]
 */
/**
 * @typedef Documents
 * @property {Gst} [gst]
 */
/**
 * @typedef Gst
 * @property {string} [legal_name]
 * @property {string} [type]
 * @property {string} [value]
 * @property {boolean} [verified]
 */
/**
 * @typedef ProductReturnConfig
 * @property {boolean} [on_same_store]
 */
/**
 * @typedef Timing
 * @property {Opening} [opening]
 * @property {string} [weekday]
 * @property {boolean} [open]
 * @property {Closing} [closing]
 */
/**
 * @typedef Opening
 * @property {number} [minute]
 * @property {number} [hour]
 */
/**
 * @typedef Closing
 * @property {number} [hour]
 * @property {number} [minute]
 */
/**
 * @typedef FulfillingStoreStoreAddressJson
 * @property {string} [address2]
 * @property {string} [area]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [state]
 * @property {string} [contact_person]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {string} [version]
 * @property {string} [created_at]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [address1]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [updated_at]
 * @property {string} [address_category]
 */
/**
 * @typedef ShipmentGst
 * @property {number} [brand_calculated_amount]
 * @property {number} [value_of_good]
 * @property {number} [gst_fee]
 */
/**
 * @typedef PlatformShipmentDetailsBrand
 * @property {boolean} [credit_note_allowed]
 * @property {string} [brand_name]
 * @property {string} [modified_on]
 * @property {number} [id]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} [created_on]
 * @property {string} [logo]
 */
/**
 * @typedef Promise
 * @property {Timestamp} [timestamp]
 */
/**
 * @typedef Timestamp
 * @property {string} [min]
 * @property {string} [max]
 */
/**
 * @typedef ShipmentTrackingDetails
 * @property {string} [status]
 * @property {string} [time]
 * @property {boolean} [is_passed]
 * @property {boolean} [is_current]
 */
/**
 * @typedef ItemsPayments
 * @property {number} [display_priority]
 * @property {number} [id]
 * @property {boolean} [is_active]
 * @property {string} [display_name]
 * @property {string} [logo]
 * @property {string} [payment_identifier]
 * @property {string} [source_nickname]
 * @property {string} [mode]
 * @property {string} [source]
 */
/**
 * @typedef PlatformOrderDetailsPage
 * @property {string} [next]
 * @property {string} [previous]
 */
/**
 * @typedef ShipmentDates
 * @property {string} [due_date]
 */
/**
 * @typedef OrderLanesCount
 * @property {StageItem[]} stages
 */
/**
 * @typedef StageItem
 * @property {number} [count]
 * @property {string} [text]
 * @property {string} [value]
 */
/**
 * @typedef UpdateOrderReprocessResponse
 * @property {string} status
 */
/**
 * @typedef PlatformOrderTrack
 * @property {boolean} success
 * @property {string} request_id
 * @property {string} message
 * @property {string} mobile
 * @property {string} country_code
 * @property {number} resend_timer
 * @property {string} [resend_token]
 */
/**
 * @typedef OrderPicklistListing
 * @property {PlatformOrderUserInfo} [user]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {Channel} [channel]
 * @property {Object} [fyndstore_emp]
 * @property {Object} [ordering_store]
 * @property {PlatformBreakupValues} [breakup_values]
 * @property {string} [id]
 * @property {PlatformApplication} [application]
 * @property {PlatformShipmentDetails} [shipments]
 * @property {string} [created_at]
 * @property {number} [total_shipments_in_order]
 * @property {ItemsPayments} [payments]
 * @property {Object} [payment_methods]
 */
/**
 * @typedef Stages
 * @property {string} [text]
 * @property {string} [value]
 * @property {boolean} [is_default]
 * @property {StagesFilters} [filters]
 */
/**
 * @typedef ItemTotal
 * @property {number} [new]
 * @property {number} [processing]
 * @property {number} [returns]
 * @property {number} [all]
 */
/**
 * @typedef GetPingResponse
 * @property {string} ping
 */
/**
 * @typedef GetShipmentAddressResponse
 * @property {string} message
 * @property {DataShipmentAddress} data
 * @property {boolean} success
 */
/**
 * @typedef DataShipmentAddress
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {string} [phone]
 * @property {string} [area]
 * @property {string} [address]
 * @property {string} [landmark]
 * @property {string} [state]
 * @property {string} [address_type]
 * @property {string} [address_category]
 * @property {string} [email]
 * @property {string} [name]
 */
/**
 * @typedef UpdateShipmentAddressRequest
 * @property {string} email
 * @property {string} address
 * @property {string} pincode
 * @property {string} state
 * @property {string} address_type
 * @property {string} country
 * @property {string} name
 * @property {string} phone
 * @property {string} area
 * @property {string} landmark
 * @property {string} city
 */
/**
 * @typedef UpdateShipmentAddressResponse
 * @property {boolean} success
 * @property {string} message
 */
/**
 * @typedef ShipmentTrackResponse
 * @property {ShipmentTrackResponseBagListItem[]} bag_list
 * @property {string} message
 * @property {number} order_value
 */
/**
 * @typedef ShipmentTrackResponseBagListItem
 * @property {boolean} [enable_tracking]
 * @property {string} [price]
 * @property {string} [time_slot]
 * @property {string} [product_name]
 * @property {boolean} [can_return]
 * @property {string} [order_date]
 * @property {boolean} [is_try_at_home]
 * @property {ShipmentTrackResponseBagListItemBreakValues[]} [breakup_values]
 * @property {ShipmentTrackResponseBagListItemStatuses[]} [statuses]
 * @property {boolean} [is_active]
 * @property {string} [bag_id]
 * @property {string} [order_id]
 * @property {string} [size]
 * @property {string} [payment_mode_source]
 * @property {ShipmentTrackResponseBagListItemDpDetails} [dp_details]
 * @property {number} [product_id]
 * @property {ShipmentTrackResponseBagListItemsProductImage} [product_image]
 * @property {string} [brand_name]
 * @property {string} [price_marked]
 * @property {string} [status]
 * @property {boolean} [can_cancel]
 * @property {string} [payment_mode]
 * @property {string} [fynd_cash_msg]
 * @property {string} [delivery_address]
 */
/**
 * @typedef ShipmentTrackResponseBagListItemBreakValues
 * @property {string} [name]
 * @property {string} [display]
 * @property {string} [value]
 */
/**
 * @typedef ShipmentTrackResponseBagListItemStatuses
 * @property {number} [nps_rating]
 * @property {string} [nps_string]
 * @property {ShipmentTrackResponseBagListItemStatusesProgress[]} [progress_status]
 * @property {string} [flow_type]
 * @property {number} [status_progress]
 * @property {boolean} [is_nps_done]
 * @property {string} [header_message]
 * @property {string} [is_delayed]
 * @property {ShipmentTrackResponseBagListItemStatusesTrack[]} [tracking_list]
 */
/**
 * @typedef ShipmentTrackResponseBagListItemStatusesProgress
 * @property {string} [title]
 * @property {string} [type]
 * @property {boolean} [state]
 */
/**
 * @typedef ShipmentTrackResponseBagListItemStatusesTrack
 * @property {string} [status]
 * @property {string} [time]
 * @property {boolean} [is_passed]
 * @property {boolean} [is_current]
 */
/**
 * @typedef ShipmentTrackResponseBagListItemDpDetails
 * @property {string} [tracking_no]
 * @property {string} [courier]
 */
/**
 * @typedef ShipmentTrackResponseBagListItemsProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */
/**
 * @typedef UpdateShipmentStatusResponse
 * @property {Object} shipments
 * @property {any[]} [error_shipments]
 */
/**
 * @typedef UpdateShipmentStatusBody
 * @property {Object} shipments
 * @property {boolean} force_transition
 * @property {boolean} task
 */
/**
 * @typedef ShipmentReasonsResponse
 * @property {boolean} success
 * @property {string} message
 * @property {ShipmentResponseReasons[]} reasons
 */
/**
 * @typedef ShipmentResponseReasons
 * @property {number} [reason_id]
 * @property {string} [reason]
 */
/**
 * @typedef PlatformShipmentTrack
 * @property {Results} results
 */
/**
 * @typedef Results
 * @property {string} [awb]
 * @property {string} [updated_at]
 * @property {string} [last_location_recieved_at]
 * @property {string} [reason]
 * @property {string} [shipment_type]
 * @property {string} [status]
 * @property {string} [updated_time]
 * @property {string} [account_name]
 */
/**
 * @typedef ShipmentUpdateRequest
 * @property {string[]} bags
 * @property {Object} reason
 * @property {string} comments
 * @property {string} action
 */
/**
 * @typedef ShipmentUpdateResponse
 * @property {boolean} success
 * @property {string} message
 */
/**
 * @typedef UpdateProcessShipmenstRequestBody
 * @property {string[]} shipment_ids
 * @property {string} expected_status
 */
/**
 * @typedef UpdateProcessShipmenstRequestResponse
 * @property {boolean} success
 * @property {string} message
 */
/**
 * @typedef GetVoiceCallbackResponse
 * @property {string} message
 */
/**
 * @typedef GetClickToCallResponse
 * @property {string} message
 */
/**
 * @typedef ApefaceApiError
 * @property {string} [message]
 */
/**
 * @typedef GetSearchWordsData
 * @property {Object} [result]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {string} [uid]
 * @property {string} [app_id]
 */
/**
 * @typedef GetSearchWordsDetailResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData} [items]
 */
/**
 * @typedef ErrorResponse
 * @property {number} [status]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {string} [code]
 */
/**
 * @typedef SearchKeywordResult
 * @property {string} sort_on
 * @property {Object} query
 */
/**
 * @typedef CreateSearchKeyword
 * @property {SearchKeywordResult} result
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 */
/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */
/**
 * @typedef GetSearchWordsResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData[]} [items]
 */
/**
 * @typedef GetAutocompleteWordsData
 * @property {Object} [_custom_json]
 * @property {Object[]} [results]
 * @property {string[]} [words]
 * @property {string} [uid]
 * @property {string} [app_id]
 */
/**
 * @typedef GetAutocompleteWordsResponse
 * @property {Page} [page]
 * @property {GetAutocompleteWordsData[]} [items]
 */
/**
 * @typedef AutocompletePageAction
 * @property {Object} [query]
 * @property {Object} [params]
 * @property {string} [url]
 * @property {string} [type]
 */
/**
 * @typedef AutocompleteAction
 * @property {AutocompletePageAction} [page]
 * @property {string} [type]
 */
/**
 * @typedef Media
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef AutocompleteResult
 * @property {Object} [_custom_json]
 * @property {AutocompleteAction} [action]
 * @property {Media} [logo]
 * @property {string} [display]
 */
/**
 * @typedef CreateAutocompleteKeyword
 * @property {Object} [_custom_json]
 * @property {AutocompleteResult[]} [results]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 */
/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 * @property {Object[]} [results]
 * @property {string} [app_id]
 */
/**
 * @typedef ProductBundleItem
 * @property {number} min_quantity
 * @property {number} product_uid
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {number} max_quantity
 * @property {boolean} [allow_remove]
 */
/**
 * @typedef GetProductBundleCreateResponse
 * @property {Object} [created_by]
 * @property {string} name
 * @property {string} [id]
 * @property {string} choice
 * @property {string} [created_on]
 * @property {string} slug
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {ProductBundleItem[]} products
 * @property {Object} [modified_by]
 * @property {boolean} is_active
 * @property {Object} [meta]
 * @property {boolean} [same_store_assignment]
 */
/**
 * @typedef GetProductBundleListingResponse
 * @property {Page} [page]
 * @property {GetProductBundleCreateResponse[]} [items]
 */
/**
 * @typedef ProductBundleRequest
 * @property {Object} [created_by]
 * @property {string} name
 * @property {string} choice
 * @property {string} [created_on]
 * @property {string} slug
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {ProductBundleItem[]} products
 * @property {Object} [modified_by]
 * @property {boolean} is_active
 * @property {Object} [meta]
 * @property {boolean} [same_store_assignment]
 */
/**
 * @typedef LimitedProductData
 * @property {string} [item_code]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {string[]} [images]
 * @property {string} [short_description]
 * @property {string} [country_of_origin]
 * @property {string} [slug]
 * @property {string[]} [sizes]
 * @property {number} [quantity]
 * @property {Object} [identifier]
 * @property {number} [uid]
 * @property {Object} [price]
 */
/**
 * @typedef Size
 * @property {string} [value]
 * @property {boolean} [is_available]
 * @property {number} [quantity]
 * @property {string} [display]
 */
/**
 * @typedef Price
 * @property {number} [max_marked]
 * @property {number} [max_effective]
 * @property {number} [min_effective]
 * @property {number} [min_marked]
 * @property {string} [currency]
 */
/**
 * @typedef GetProducts
 * @property {number} [min_quantity]
 * @property {LimitedProductData} [product_details]
 * @property {number} [product_uid]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {Size[]} [sizes]
 * @property {number} [max_quantity]
 * @property {Price} [price]
 * @property {boolean} [allow_remove]
 */
/**
 * @typedef GetProductBundleResponse
 * @property {string} [name]
 * @property {string} [choice]
 * @property {string} [slug]
 * @property {number} [company_id]
 * @property {string[]} [page_visibility]
 * @property {GetProducts[]} [products]
 * @property {string} [logo]
 * @property {boolean} [is_active]
 * @property {Object} [meta]
 * @property {boolean} [same_store_assignment]
 */
/**
 * @typedef ProductBundleUpdateRequest
 * @property {string} name
 * @property {string} choice
 * @property {string} slug
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {ProductBundleItem[]} products
 * @property {Object} [modified_by]
 * @property {boolean} is_active
 * @property {Object} [meta]
 * @property {boolean} [same_store_assignment]
 */
/**
 * @typedef ListSizeGuide
 * @property {Object} [page]
 * @property {Object[]} [items]
 */
/**
 * @typedef Meta
 * @property {Object[]} [values]
 * @property {Object} [headers]
 * @property {string} [unit]
 */
/**
 * @typedef Guide
 * @property {Meta} [meta]
 */
/**
 * @typedef ValidateSizeGuide
 * @property {Object} [created_by]
 * @property {string} name
 * @property {number} [brand_id]
 * @property {string} [id]
 * @property {string} [image]
 * @property {string} [created_on]
 * @property {string} title
 * @property {string} [tag]
 * @property {boolean} [active]
 * @property {string} [description]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {Guide} [guide]
 * @property {Object} [modified_by]
 * @property {string} [subtitle]
 */
/**
 * @typedef SuccessResponse
 * @property {boolean} [success]
 */
/**
 * @typedef SizeGuideResponse
 * @property {Object} [created_by]
 * @property {string} [name]
 * @property {number} [brand_id]
 * @property {string} [id]
 * @property {string} [created_on]
 * @property {string} [title]
 * @property {string} [tag]
 * @property {boolean} [active]
 * @property {string} [modified_on]
 * @property {number} [company_id]
 * @property {Object} [guide]
 * @property {Object} [modified_by]
 * @property {string} [subtitle]
 */
/**
 * @typedef MetaFields
 * @property {string} value
 * @property {string} key
 */
/**
 * @typedef ApplicationItemMeta
 * @property {Object} [_custom_json]
 * @property {MetaFields[]} [_custom_meta]
 */
/**
 * @typedef SuccessResponse1
 * @property {boolean} [success]
 * @property {number} [uid]
 */
/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [values]
 * @property {Object[]} data
 * @property {Object[]} [condition]
 */
/**
 * @typedef PageResponseType
 * @property {boolean} has_next
 * @property {number} next
 * @property {number} current
 * @property {number} total_count
 */
/**
 * @typedef GetConfigResponse
 * @property {PageResponseType} page
 * @property {Object[]} data
 */
/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */
/**
 * @typedef AttributeDetailsGroup
 * @property {string} [unit]
 * @property {string} name
 * @property {string} [slug]
 * @property {string} [key]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} display_type
 */
/**
 * @typedef AppConfigurationDetail
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} [name]
 * @property {string} slug
 * @property {string} [logo]
 * @property {boolean} is_default
 * @property {string[]} [template_slugs]
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} app_id
 */
/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */
/**
 * @typedef AppConfigurationsSort
 * @property {string} [name]
 * @property {string} default_key
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_default
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} app_id
 */
/**
 * @typedef AllowSingleRequest
 * @property {boolean} allow_single
 */
/**
 * @typedef DefaultKeyRequest
 * @property {string} default_key
 */
/**
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [variant]
 * @property {Object} [detail]
 * @property {Object} [compare]
 * @property {Object} [similar]
 */
/**
 * @typedef MetaDataListingFilterMetaResponse
 * @property {string[]} [filter_types]
 * @property {string} [key]
 * @property {Object[]} [units]
 * @property {string} [display]
 */
/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
 */
/**
 * @typedef MetaDataListingSortMetaResponse
 * @property {string} [key]
 * @property {string} [display]
 */
/**
 * @typedef MetaDataListingSortResponse
 * @property {MetaDataListingSortMetaResponse[]} [data]
 */
/**
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingFilterResponse} filter
 * @property {MetaDataListingSortResponse} sort
 */
/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {MetaDataListingResponse} [listing]
 */
/**
 * @typedef ProductSize
 * @property {number} max
 * @property {number} min
 */
/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} name
 * @property {ProductSize} size
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} display_type
 */
/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */
/**
 * @typedef ConfigurationProductConfig
 * @property {string} [title]
 * @property {ProductSize} [size]
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} [subtitle]
 */
/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */
/**
 * @typedef ConfigurationProduct
 * @property {ConfigurationProductVariant} variant
 * @property {ConfigurationProductSimilar} similar
 */
/**
 * @typedef ConfigurationBucketPoints
 * @property {number} [end]
 * @property {number} [start]
 * @property {string} [display]
 */
/**
 * @typedef ConfigurationListingFilterValue
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {string} [condition]
 * @property {Object[]} [map_values]
 * @property {Object} [map]
 * @property {string} [value]
 * @property {string} [sort]
 */
/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} type
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} key
 * @property {string} [logo]
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {boolean} is_active
 * @property {number} priority
 */
/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */
/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} [name]
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {number} priority
 */
/**
 * @typedef ConfigurationListingSort
 * @property {string} default_key
 * @property {ConfigurationListingSortConfig[]} [config]
 */
/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingFilter} filter
 * @property {ConfigurationListingSort} sort
 */
/**
 * @typedef AppCatalogConfiguration
 * @property {string} [type]
 * @property {string} [config_id]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} config_type
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {ConfigurationProduct} [product]
 * @property {ConfigurationListing} [listing]
 * @property {string} app_id
 */
/**
 * @typedef GetAppCatalogConfiguration
 * @property {boolean} [is_default]
 * @property {AppCatalogConfiguration} [data]
 */
/**
 * @typedef AppConfiguration
 * @property {string} [type]
 * @property {string} [config_id]
 * @property {Object} [created_by]
 * @property {string} config_type
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {ConfigurationProduct} [product]
 * @property {ConfigurationListing} [listing]
 * @property {string} app_id
 */
/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */
/**
 * @typedef EntityConfiguration
 * @property {string} [config_id]
 * @property {string} [id]
 * @property {string} config_type
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {string} app_id
 */
/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {boolean} [is_default]
 * @property {EntityConfiguration} [data]
 */
/**
 * @typedef ProductFiltersValue
 * @property {string} [currency_code]
 * @property {number} [min]
 * @property {string} [query_format]
 * @property {Object} value
 * @property {number} [selected_min]
 * @property {string} [currency_symbol]
 * @property {boolean} is_selected
 * @property {string} display
 * @property {number} [count]
 * @property {string} [display_format]
 * @property {number} [max]
 * @property {number} [selected_max]
 */
/**
 * @typedef ProductFiltersKey
 * @property {string} name
 * @property {string[]} [operators]
 * @property {string} [logo]
 * @property {string} display
 * @property {string} [kind]
 */
/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values
 * @property {ProductFiltersKey} key
 */
/**
 * @typedef ProductSortOn
 * @property {string} [value]
 * @property {string} [name]
 * @property {boolean} [is_selected]
 */
/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductFilters[]} [filters]
 * @property {Object} operators
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef CollectionListingFilterType
 * @property {string} [display]
 * @property {string} [name]
 * @property {boolean} [is_selected]
 */
/**
 * @typedef CollectionListingFilterTag
 * @property {string} [display]
 * @property {string} [name]
 * @property {boolean} [is_selected]
 */
/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterType[]} [type]
 * @property {CollectionListingFilterTag[]} [tags]
 */
/**
 * @typedef BannerImage
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef ImageUrls
 * @property {BannerImage} [landscape]
 * @property {BannerImage} [portrait]
 */
/**
 * @typedef Media1
 * @property {string} [type]
 * @property {Object} [meta]
 * @property {string} url
 */
/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {Object[]} value
 * @property {string} op
 */
/**
 * @typedef GetCollectionDetailNest
 * @property {ImageUrls} [banners]
 * @property {Media1} [logo]
 * @property {boolean} [is_active]
 * @property {string} [uid]
 * @property {Object} [_schedule]
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 * @property {Action} [action]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [name]
 * @property {Object} [badge]
 * @property {string[]} [tag]
 * @property {boolean} [allow_sort]
 * @property {Object} [cron]
 * @property {boolean} [allow_facets]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {Object} [meta]
 * @property {string} [app_id]
 */
/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef UserInfo
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [email]
 */
/**
 * @typedef CollectionImage
 * @property {string} aspect_ratio
 * @property {string} url
 */
/**
 * @typedef CollectionBanner
 * @property {CollectionImage} portrait
 * @property {CollectionImage} landscape
 */
/**
 * @typedef Schedule
 * @property {string} [cron]
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [end]
 * @property {string} [start]
 * @property {number} [duration]
 */
/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 */
/**
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
 */
/**
 * @typedef CreateCollection
 * @property {UserInfo} [created_by]
 * @property {CollectionBanner} banners
 * @property {CollectionImage} logo
 * @property {boolean} [is_active]
 * @property {Schedule} [_schedule]
 * @property {string[]} [tags]
 * @property {string} type
 * @property {boolean} [is_visible]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [_locale_language]
 * @property {SeoDetail} [seo]
 * @property {string} [sort_on]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {string} name
 * @property {CollectionBadge} [badge]
 * @property {boolean} [allow_sort]
 * @property {Object} [_custom_json]
 * @property {boolean} [allow_facets]
 * @property {string} slug
 * @property {boolean} [published]
 * @property {string} [description]
 * @property {UserInfo} [modified_by]
 * @property {Object} [meta]
 * @property {string} app_id
 */
/**
 * @typedef CollectionCreateResponse
 * @property {ImageUrls} [banners]
 * @property {BannerImage} [logo]
 * @property {boolean} [is_active]
 * @property {Object} [_schedule]
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 * @property {string} [sort_on]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [name]
 * @property {Object} [badge]
 * @property {string[]} [tag]
 * @property {boolean} [allow_sort]
 * @property {Object} [cron]
 * @property {boolean} [allow_facets]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {Object} [meta]
 * @property {string} [app_id]
 */
/**
 * @typedef CollectionDetailResponse
 * @property {Object} [cron]
 * @property {string} [type]
 * @property {boolean} [allow_facets]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [name]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [meta]
 * @property {Object} [badge]
 * @property {string} [slug]
 * @property {string[]} [tag]
 * @property {string} [description]
 * @property {boolean} [allow_sort]
 * @property {ImageUrls} [banners]
 * @property {Media1} [logo]
 * @property {boolean} [is_active]
 * @property {number} [priority]
 * @property {Object} [_schedule]
 * @property {string} [app_id]
 */
/**
 * @typedef UpdateCollection
 * @property {CollectionBanner} [banners]
 * @property {CollectionImage} [logo]
 * @property {boolean} [is_active]
 * @property {Schedule} [_schedule]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {boolean} [is_visible]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [_locale_language]
 * @property {SeoDetail} [seo]
 * @property {string} [sort_on]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [name]
 * @property {CollectionBadge} [badge]
 * @property {boolean} [allow_sort]
 * @property {Object} [_custom_json]
 * @property {boolean} [allow_facets]
 * @property {string} [slug]
 * @property {boolean} [published]
 * @property {string} [description]
 * @property {UserInfo} [modified_by]
 * @property {Object} [meta]
 */
/**
 * @typedef Price1
 * @property {string} [currency_code]
 * @property {number} [max]
 * @property {string} [currency_symbol]
 * @property {number} [min]
 */
/**
 * @typedef ProductListingPrice
 * @property {Price1} [marked]
 * @property {Price1} [effective]
 */
/**
 * @typedef ProductBrand
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {Media1} [logo]
 */
/**
 * @typedef ProductDetailAttribute
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [key]
 */
/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title]
 * @property {ProductDetailAttribute[]} [details]
 */
/**
 * @typedef ProductListingDetail
 * @property {string} [discount]
 * @property {string} [color]
 * @property {string} [product_online_date]
 * @property {Object} [promo_meta]
 * @property {string} [item_type]
 * @property {number} [uid]
 * @property {ProductListingPrice} [price]
 * @property {string} [type]
 * @property {Media1[]} [medias]
 * @property {string} [image_nature]
 * @property {ProductBrand} [brand]
 * @property {string[]} [tryouts]
 * @property {number} [rating]
 * @property {number} [rating_count]
 * @property {string[]} [similars]
 * @property {boolean} [has_variant]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {Object} [teaser_tag]
 * @property {Object} [attributes]
 * @property {string[]} [highlights]
 * @property {boolean} [sellable]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [short_description]
 * @property {string} slug
 * @property {string} [description]
 */
/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductListingDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ItemQueryForUserCollection
 * @property {number} [item_id]
 * @property {string} [action]
 */
/**
 * @typedef CollectionItemRequest
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 * @property {ItemQueryForUserCollection[]} [item]
 */
/**
 * @typedef UpdatedResponse
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */
/**
 * @typedef CatalogInsightItem
 * @property {number} [count]
 * @property {number} [sellable_count]
 * @property {number} [out_of_stock_count]
 */
/**
 * @typedef CatalogInsightBrand
 * @property {number} [available_articles]
 * @property {string} [name]
 * @property {number} [article_freshness]
 * @property {number} [total_articles]
 * @property {number} [available_sizes]
 * @property {number} [total_sizes]
 */
/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightItem} [item]
 * @property {CatalogInsightBrand} [brand_distribution]
 */
/**
 * @typedef CrossSellingData
 * @property {number} [products]
 * @property {number} [articles]
 */
/**
 * @typedef CrossSellingResponse
 * @property {CrossSellingData} [data]
 * @property {CatalogInsightBrand} [brand_distribution]
 */
/**
 * @typedef OptInPostRequest
 * @property {number[]} [store_ids]
 * @property {number[]} [brand_ids]
 * @property {string} opt_level
 * @property {number} [company_id]
 * @property {string} [platform]
 * @property {boolean} [enabled]
 */
/**
 * @typedef CompanyOptIn
 * @property {Object} [created_by]
 * @property {number[]} store_ids
 * @property {number[]} brand_ids
 * @property {number} created_on
 * @property {string} opt_level
 * @property {number} company_id
 * @property {number} modified_on
 * @property {string} platform
 * @property {Object} [modified_by]
 * @property {boolean} enabled
 */
/**
 * @typedef GetOptInPlatform
 * @property {Page} page
 * @property {CompanyOptIn[]} items
 */
/**
 * @typedef OptinCompanyDetail
 * @property {string} [company_type]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [business_type]
 */
/**
 * @typedef CompanyBrandDetail
 * @property {number} [company_id]
 * @property {number} [total_article]
 * @property {number} [brand_id]
 * @property {string} [brand_name]
 */
/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {Page} [page]
 * @property {CompanyBrandDetail[]} [items]
 */
/**
 * @typedef OptinCompanyMetrics
 * @property {string} [company]
 * @property {number} [brand]
 * @property {number} [store]
 */
/**
 * @typedef StoreDetail
 * @property {Object[]} [additional_contacts]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {Object} [manager]
 * @property {string} [store_code]
 * @property {string} [created_on]
 * @property {string} [store_type]
 * @property {string} [modified_on]
 * @property {number} [company_id]
 * @property {Object} [timing]
 * @property {Object[]} [documents]
 * @property {number} [uid]
 * @property {Object} [address]
 */
/**
 * @typedef OptinStoreDetails
 * @property {Page} [page]
 * @property {StoreDetail[]} [items]
 */
/**
 * @typedef AttributeSchemaRange
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef AttributeMaster
 * @property {string} type
 * @property {string} [format]
 * @property {boolean} [multi]
 * @property {AttributeSchemaRange} [range]
 * @property {boolean} [mandatory]
 * @property {string[]} [allowed_values]
 */
/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */
/**
 * @typedef AttributeMasterFilter
 * @property {string[]} [depends_on]
 * @property {number} [priority]
 * @property {boolean} indexing
 */
/**
 * @typedef AttributeMasterMandatoryDetails
 * @property {string[]} [l3_keys]
 */
/**
 * @typedef AttributeMasterMeta
 * @property {AttributeMasterMandatoryDetails} mandatory_details
 * @property {boolean} [enriched]
 */
/**
 * @typedef GenderDetail
 * @property {AttributeMaster} [schema]
 * @property {string} [name]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {boolean} [is_nested]
 * @property {string} [id]
 * @property {string} [slug]
 * @property {AttributeMasterDetails} [details]
 * @property {AttributeMasterFilter} [filters]
 * @property {string} [description]
 * @property {string} [logo]
 * @property {string[]} [departments]
 * @property {AttributeMasterMeta} [meta]
 */
/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Page} [page]
 * @property {Object[]} [items]
 */
/**
 * @typedef PTErrorResponse
 * @property {number} [status]
 * @property {string} [message]
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {Object} [meta]
 */
/**
 * @typedef UserSerializer
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [uid]
 * @property {string} [contact]
 * @property {string} [_id]
 */
/**
 * @typedef GetDepartment
 * @property {UserSerializer} [created_by]
 * @property {string} [name]
 * @property {number} [page_size]
 * @property {string[]} [synonyms]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [slug]
 * @property {string} [search]
 * @property {string} [item_type]
 * @property {string} [modified_on]
 * @property {string} [logo]
 * @property {number} [priority_order]
 * @property {number} [page_no]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 */
/**
 * @typedef DepartmentsResponse
 * @property {Page} [page]
 * @property {GetDepartment[]} [items]
 */
/**
 * @typedef DepartmentErrorResponse
 * @property {number} [status]
 * @property {string} [message]
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {Object} [meta]
 */
/**
 * @typedef DepartmentCreateUpdate
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {string[]} [synonyms]
 * @property {string} [_cls]
 * @property {string} [slug]
 * @property {string} logo
 * @property {number} priority_order
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {Object} [platforms]
 * @property {string[]} [tags]
 */
/**
 * @typedef DepartmentCreateResponse
 * @property {number} uid
 * @property {string} message
 */
/**
 * @typedef DepartmentCreateErrorResponse
 * @property {string} [error]
 */
/**
 * @typedef UserDetail
 * @property {string} username
 * @property {boolean} [super_user]
 * @property {string} user_id
 * @property {string} [contact]
 */
/**
 * @typedef DepartmentModel
 * @property {Object} [_custom_json]
 * @property {UserDetail} [created_by]
 * @property {Object} name
 * @property {string} [verified_on]
 * @property {UserDetail} [verified_by]
 * @property {Object[]} [synonyms]
 * @property {string} created_on
 * @property {Object} [_cls]
 * @property {Object} [slug]
 * @property {string} modified_on
 * @property {string} logo
 * @property {number} priority_order
 * @property {UserDetail} [modified_by]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {Object} [_id]
 */
/**
 * @typedef ProductTemplate
 * @property {string[]} [attributes]
 * @property {Object} [created_by]
 * @property {string} [name]
 * @property {boolean} is_physical
 * @property {string[]} [categories]
 * @property {Object} [modified_by]
 * @property {string} slug
 * @property {string} [created_on]
 * @property {string} [tag]
 * @property {string} [description]
 * @property {string} [modified_on]
 * @property {boolean} is_expirable
 * @property {string} [logo]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_active]
 * @property {string[]} [departments]
 */
/**
 * @typedef TemplatesResponse
 * @property {Page} [page]
 * @property {ProductTemplate} [items]
 */
/**
 * @typedef TemplateDetails
 * @property {string[]} [attributes]
 * @property {string} [name]
 * @property {boolean} is_physical
 * @property {string} [id]
 * @property {string[]} [categories]
 * @property {string} slug
 * @property {string} [tag]
 * @property {string} [description]
 * @property {boolean} is_expirable
 * @property {string} [logo]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_active]
 * @property {string[]} [departments]
 */
/**
 * @typedef Properties
 * @property {Object} [brand_uid]
 * @property {Object} [no_of_boxes]
 * @property {Object} [country_of_origin]
 * @property {Object} [multi_size]
 * @property {Object} [product_group_tag]
 * @property {Object} [return_config]
 * @property {Object} [item_type]
 * @property {Object} [moq]
 * @property {Object} [is_active]
 * @property {Object} [media]
 * @property {Object} [currency]
 * @property {Object} [tags]
 * @property {Object} [size_guide]
 * @property {Object} [custom_order]
 * @property {Object} [trader]
 * @property {Object} [hsn_code]
 * @property {Object} [item_code]
 * @property {Object} [name]
 * @property {Object} [trader_type]
 * @property {Object} [teaser_tag]
 * @property {Object} [command]
 * @property {Object} [is_dependent]
 * @property {Object} [highlights]
 * @property {Object} [short_description]
 * @property {Object} [slug]
 * @property {Object} [description]
 * @property {Object} [variants]
 * @property {Object} [sizes]
 * @property {Object} [product_publish]
 * @property {Object} [category_slug]
 */
/**
 * @typedef GlobalValidation
 * @property {string} [type]
 * @property {string[]} [required]
 * @property {Properties} [properties]
 * @property {string} [title]
 * @property {string} [description]
 * @property {Object} [definitions]
 */
/**
 * @typedef TemplateValidationData
 * @property {GlobalValidation} [global_validation]
 * @property {Object} [template_validation]
 */
/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateDetails} [template_details]
 * @property {TemplateValidationData} [data]
 */
/**
 * @typedef InventoryValidationResponse
 * @property {Object} [data]
 * @property {string} [message]
 */
/**
 * @typedef HSNData
 * @property {string[]} [country_of_origin]
 * @property {string[]} [hsn_code]
 */
/**
 * @typedef HSNCodesResponse
 * @property {HSNData} [data]
 * @property {string} [message]
 */
/**
 * @typedef VerifiedBy
 * @property {string} [username]
 * @property {string} [user_id]
 */
/**
 * @typedef ProductDownloadItemsData
 * @property {string} [type]
 * @property {string[]} [brand]
 * @property {string[]} [templates]
 */
/**
 * @typedef ProductDownloadsItems
 * @property {VerifiedBy} [created_by]
 * @property {string} [url]
 * @property {string} [id]
 * @property {Object} [template_tags]
 * @property {string} [status]
 * @property {string} [trigger_on]
 * @property {string} [task_id]
 * @property {ProductDownloadItemsData} [data]
 * @property {number} [seller_id]
 * @property {string} [completed_on]
 */
/**
 * @typedef ProductDownloadsResponse
 * @property {Page} [page]
 * @property {ProductDownloadsItems} [items]
 */
/**
 * @typedef ProductConfigurationDownloads
 * @property {Object[]} [data]
 * @property {boolean} [multivalue]
 */
/**
 * @typedef CategoryMappingValues
 * @property {number} [catalog_id]
 * @property {string} name
 */
/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [google]
 * @property {CategoryMappingValues} [facebook]
 */
/**
 * @typedef Hierarchy
 * @property {number} department
 * @property {number} l2
 * @property {number} l1
 */
/**
 * @typedef Media2
 * @property {string} landscape
 * @property {string} portrait
 * @property {string} logo
 */
/**
 * @typedef Category
 * @property {Object} [created_by]
 * @property {number} [priority]
 * @property {string} name
 * @property {string} [id]
 * @property {string[]} [synonyms]
 * @property {string} [created_on]
 * @property {string} [slug]
 * @property {string[]} [tryouts]
 * @property {string} [modified_on]
 * @property {number[]} departments
 * @property {Object} [modified_by]
 * @property {boolean} is_active
 * @property {CategoryMapping} [marketplaces]
 * @property {number} level
 * @property {number} [uid]
 * @property {Hierarchy[]} [hierarchy]
 * @property {Media2} [media]
 */
/**
 * @typedef CategoryResponse
 * @property {Page} [page]
 * @property {Category[]} [items]
 */
/**
 * @typedef CategoryRequestBody
 * @property {number} [priority]
 * @property {string} name
 * @property {string[]} [synonyms]
 * @property {string} [slug]
 * @property {string[]} [tryouts]
 * @property {boolean} is_active
 * @property {CategoryMapping} [marketplaces]
 * @property {number} level
 * @property {number[]} departments
 * @property {Hierarchy[]} [hierarchy]
 * @property {Media2} [media]
 */
/**
 * @typedef CategoryCreateResponse
 * @property {number} [uid]
 * @property {string} [message]
 */
/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */
/**
 * @typedef CategoryUpdateResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef Logo
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [secure_url]
 */
/**
 * @typedef Brand
 * @property {number} [uid]
 * @property {string} [name]
 * @property {Logo} [logo]
 */
/**
 * @typedef Image
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [secure_url]
 */
/**
 * @typedef ProductPublished
 * @property {number} [product_online_date]
 * @property {boolean} [is_set]
 */
/**
 * @typedef Product
 * @property {number} [brand_uid]
 * @property {string} [color]
 * @property {string} [template_tag]
 * @property {boolean} [is_set]
 * @property {boolean} [is_physical]
 * @property {string} [country_of_origin]
 * @property {boolean} [multi_size]
 * @property {string} [item_type]
 * @property {string} [primary_color]
 * @property {boolean} [is_expirable]
 * @property {Object} [moq]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {Media1[]} [media]
 * @property {string} [currency]
 * @property {string} [size_guide]
 * @property {string} [image_nature]
 * @property {Brand} [brand]
 * @property {Object} [custom_order]
 * @property {string} [hsn_code]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {Object[]} [all_sizes]
 * @property {number} [category_uid]
 * @property {boolean} [is_dependent]
 * @property {number[]} [departments]
 * @property {string[]} [l3_mapping]
 * @property {Object} [_custom_json]
 * @property {string[]} [highlights]
 * @property {string} [id]
 * @property {Image[]} [images]
 * @property {string} [short_description]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {Object} [variants]
 * @property {Object[]} [sizes]
 * @property {ProductPublished} [product_publish]
 * @property {string} [category_slug]
 */
/**
 * @typedef ProductListingResponse
 * @property {Page} [page]
 * @property {Product[]} [items]
 */
/**
 * @typedef ReturnConfig
 * @property {boolean} returnable
 * @property {number} time
 * @property {string} unit
 */
/**
 * @typedef OrderQuantity
 * @property {boolean} [is_set]
 * @property {number} [maximum]
 * @property {number} [minimum]
 */
/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code_id]
 * @property {string} [hsn_code]
 * @property {string} [reporting_hsn]
 */
/**
 * @typedef CustomOrder
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 * @property {boolean} [is_custom_order]
 */
/**
 * @typedef Trader
 * @property {string} [type]
 * @property {string} [name]
 * @property {string[]} [address]
 */
/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
 */
/**
 * @typedef ProductPublish
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */
/**
 * @typedef ProductCreateUpdate
 * @property {number} brand_uid
 * @property {string} template_tag
 * @property {boolean} [is_set]
 * @property {string} [requester]
 * @property {number} [no_of_boxes]
 * @property {string} country_of_origin
 * @property {boolean} [multi_size]
 * @property {string[]} [product_group_tag]
 * @property {ReturnConfig} return_config
 * @property {string} item_type
 * @property {OrderQuantity} [moq]
 * @property {boolean} [is_active]
 * @property {string} [bulk_job_id]
 * @property {number} [uid]
 * @property {Media1[]} [media]
 * @property {string} currency
 * @property {string[]} [tags]
 * @property {TaxIdentifier} tax_identifier
 * @property {string} [size_guide]
 * @property {CustomOrder} [custom_order]
 * @property {Trader[]} trader
 * @property {string} [action]
 * @property {Object} item_code
 * @property {boolean} [is_image_less_product]
 * @property {string} name
 * @property {TeaserTag} [teaser_tag]
 * @property {Object} [change_request_id]
 * @property {boolean} [is_dependent]
 * @property {number[]} departments
 * @property {Object} [_custom_json]
 * @property {string[]} [highlights]
 * @property {string} [short_description]
 * @property {string} slug
 * @property {number} company_id
 * @property {Object} [variants]
 * @property {string} [description]
 * @property {ProductPublish} [product_publish]
 * @property {string} category_slug
 */
/**
 * @typedef AttributeMasterSerializer
 * @property {boolean} [variant]
 * @property {Object} [created_by]
 * @property {AttributeMaster} schema
 * @property {AttributeMasterFilter} filters
 * @property {string} [modified_on]
 * @property {string} [logo]
 * @property {string[]} [tags]
 * @property {boolean} [is_nested]
 * @property {Object} [synonyms]
 * @property {string} [name]
 * @property {string[]} departments
 * @property {string} [unit]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [created_on]
 * @property {string} slug
 * @property {AttributeMasterDetails} details
 * @property {string} [description]
 * @property {string} [raw_key]
 * @property {Object} [modified_by]
 * @property {string} [suggestion]
 */
/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */
/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */
/**
 * @typedef UserDetail1
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [full_name]
 */
/**
 * @typedef ProductBulkRequest
 * @property {UserDetail1} [created_by]
 * @property {string} [template_tag]
 * @property {string} [file_path]
 * @property {number} [cancelled]
 * @property {number} [succeed]
 * @property {number} [failed]
 * @property {string} [created_on]
 * @property {string[]} [cancelled_records]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {ProductTemplate} [template]
 * @property {UserDetail1} [modified_by]
 * @property {boolean} [is_active]
 * @property {string[]} [failed_records]
 * @property {number} [total]
 * @property {string} [stage]
 */
/**
 * @typedef ProductBulkRequestList
 * @property {Page} [page]
 * @property {ProductBulkRequest} [items]
 */
/**
 * @typedef UserInfo1
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [email]
 */
/**
 * @typedef BulkJob
 * @property {UserInfo1} [created_by]
 * @property {string} [template_tag]
 * @property {string} [file_path]
 * @property {number} [cancelled]
 * @property {number} [succeed]
 * @property {string} created_on
 * @property {number} [failed]
 * @property {Object[]} [cancelled_records]
 * @property {string} [tracking_url]
 * @property {string} [custom_template_tag]
 * @property {string} [modified_on]
 * @property {number} company_id
 * @property {UserInfo1} [modified_by]
 * @property {boolean} [is_active]
 * @property {Object[]} [failed_records]
 * @property {number} total
 * @property {string} [stage]
 */
/**
 * @typedef BulkResponse
 * @property {UserInfo1} [created_by]
 * @property {string} created_on
 * @property {string} [modified_on]
 * @property {UserInfo1} [modified_by]
 * @property {boolean} [is_active]
 * @property {string} batch_id
 */
/**
 * @typedef BulkProductRequest
 * @property {Object[]} data
 * @property {number} company_id
 * @property {string} template_tag
 * @property {string} batch_id
 */
/**
 * @typedef NestedTags
 * @property {string[]} [tags]
 */
/**
 * @typedef ProductTagsViewResponse
 * @property {NestedTags} [items]
 */
/**
 * @typedef UserCommon
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {number} [company_id]
 */
/**
 * @typedef Items
 * @property {UserCommon} [created_by]
 * @property {number} [retry]
 * @property {string} [id]
 * @property {number} [cancelled]
 * @property {number} [succeed]
 * @property {string} [created_on]
 * @property {number} [failed]
 * @property {string[]} [cancelled_records]
 * @property {string} [tracking_url]
 * @property {string} [modified_on]
 * @property {number} [company_id]
 * @property {string[]} [failed_records]
 * @property {UserCommon} [modified_by]
 * @property {boolean} [is_active]
 * @property {string} [file_path]
 * @property {number} [total]
 * @property {string} [stage]
 */
/**
 * @typedef BulkAssetResponse
 * @property {Page} [page]
 * @property {Items[]} [items]
 */
/**
 * @typedef ProductBulkAssets
 * @property {number} [company_id]
 * @property {Object} user
 * @property {string} url
 */
/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {number} [company_id]
 * @property {string} [size]
 * @property {number} [item_id]
 */
/**
 * @typedef ProductSizeDeleteResponse
 * @property {boolean} [success]
 * @property {ProductSizeDeleteDataResponse} [data]
 */
/**
 * @typedef InventoryResponse
 * @property {number} [price_effective]
 * @property {string} [seller_identifier]
 * @property {string} [inventory_updated_on]
 * @property {number} [sellable_quantity]
 * @property {number} [item_id]
 * @property {Object} [store]
 * @property {string} [currency]
 * @property {string} [size]
 * @property {number} [quantity]
 * @property {number} [price_transfer]
 * @property {string} [uid]
 * @property {number} [price]
 * @property {Object} [identifiers]
 */
/**
 * @typedef InventoryResponsePaginated
 * @property {Page} [page]
 * @property {InventoryResponse[]} [items]
 */
/**
 * @typedef SetSize
 * @property {string} size
 * @property {number} pieces
 */
/**
 * @typedef SizeDistribution
 * @property {SetSize[]} sizes
 */
/**
 * @typedef InventorySet
 * @property {string} [name]
 * @property {SizeDistribution} size_distribution
 * @property {number} [quantity]
 */
/**
 * @typedef GTIN
 * @property {string} gtin_value
 * @property {string} gtin_type
 * @property {boolean} [primary]
 */
/**
 * @typedef InvSize
 * @property {number} price_effective
 * @property {InventorySet} [set]
 * @property {number} [item_width]
 * @property {boolean} [is_set]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [item_weight]
 * @property {string} store_code
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} currency
 * @property {string} size
 * @property {number} [item_length]
 * @property {number} quantity
 * @property {number} [item_height]
 * @property {number} [price_transfer]
 * @property {string} [expiration_date]
 * @property {number} [price]
 * @property {GTIN[]} identifiers
 */
/**
 * @typedef ItemQuery
 * @property {number} [brand_uid]
 * @property {string} [item_code]
 * @property {number} [uid]
 */
/**
 * @typedef InventoryRequest
 * @property {number} company_id
 * @property {InvSize[]} sizes
 * @property {ItemQuery} item
 */
/**
 * @typedef CompanyMeta
 * @property {number} id
 */
/**
 * @typedef ReturnConfig1
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */
/**
 * @typedef DimensionResponse
 * @property {string} unit
 * @property {number} height
 * @property {number} width
 * @property {boolean} is_default
 * @property {number} length
 */
/**
 * @typedef PriceMeta
 * @property {number} marked
 * @property {number} effective
 * @property {string} [updated_at]
 * @property {Object} [tp_notes]
 * @property {number} transfer
 * @property {string} currency
 */
/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
 */
/**
 * @typedef ManufacturerResponse
 * @property {boolean} is_default
 * @property {string} name
 * @property {string} address
 */
/**
 * @typedef Trader1
 * @property {string} type
 * @property {string} name
 * @property {string[]} address
 */
/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */
/**
 * @typedef StoreMeta
 * @property {number} id
 */
/**
 * @typedef WeightResponse
 * @property {boolean} is_default
 * @property {string} unit
 * @property {number} shipping
 */
/**
 * @typedef InventorySellerResponse
 * @property {Object} [raw_meta]
 * @property {InventorySet} [set]
 * @property {CompanyMeta} company
 * @property {boolean} [is_set]
 * @property {UserSerializer} [created_by]
 * @property {string} country_of_origin
 * @property {number} item_id
 * @property {ReturnConfig1} [return_config]
 * @property {string} fynd_article_code
 * @property {DimensionResponse} dimension
 * @property {boolean} [is_active]
 * @property {number} total_quantity
 * @property {string} uid
 * @property {PriceMeta} price
 * @property {string} [expiration_date]
 * @property {string} [added_on_store]
 * @property {boolean} [track_inventory]
 * @property {Object} [fynd_meta]
 * @property {Object} [tax_identifier]
 * @property {BrandMeta} brand
 * @property {UserSerializer} [modified_by]
 * @property {ManufacturerResponse} manufacturer
 * @property {Trader1[]} [trader]
 * @property {Object} [meta]
 * @property {string} [stage]
 * @property {boolean} fragile
 * @property {Object} identifier
 * @property {Quantities} [quantities]
 * @property {Object} [_custom_json]
 * @property {string} seller_identifier
 * @property {StoreMeta} store
 * @property {string} size
 * @property {string} fynd_item_code
 * @property {WeightResponse} weight
 */
/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {Page} [page]
 * @property {InventorySellerResponse[]} [items]
 */
/**
 * @typedef BulkInventoryGetItems
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} [file_path]
 * @property {number} [cancelled]
 * @property {number} [succeed]
 * @property {string} [created_on]
 * @property {number} [failed]
 * @property {string[]} [cancelled_records]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {boolean} [is_active]
 * @property {string[]} [failed_records]
 * @property {number} [total]
 * @property {string} [stage]
 */
/**
 * @typedef BulkInventoryGet
 * @property {Page} [page]
 * @property {BulkInventoryGetItems[]} [items]
 */
/**
 * @typedef InventoryJobPayload
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 * @property {number} [price_marked]
 * @property {string} store_code
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [quantity]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [total_quantity]
 * @property {string} [expiration_date]
 * @property {number} [price]
 * @property {string} [currency]
 */
/**
 * @typedef InventoryBulkRequest
 * @property {number} company_id
 * @property {Object} [user]
 * @property {InventoryJobPayload[]} sizes
 * @property {string} batch_id
 */
/**
 * @typedef InventoryExportJob
 * @property {string} [url]
 * @property {Object} [request_params]
 * @property {string} [status]
 * @property {string} [trigger_on]
 * @property {string} task_id
 * @property {number} seller_id
 * @property {string} [completed_on]
 */
/**
 * @typedef InventoryExportRequest
 * @property {string} [type]
 * @property {number[]} [brand]
 * @property {number[]} [store]
 */
/**
 * @typedef InventoryExportResponse
 * @property {Object} [request_params]
 * @property {string} [status]
 * @property {string} [trigger_on]
 * @property {string} task_id
 * @property {number} seller_id
 */
/**
 * @typedef FilerList
 * @property {string} [value]
 * @property {string} [display]
 */
/**
 * @typedef InventoryConfig
 * @property {FilerList[]} [data]
 * @property {boolean} [multivalues]
 */
/**
 * @typedef InventoryPayload
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 * @property {number} [price_marked]
 * @property {number} store_id
 * @property {number} [total_quantity]
 * @property {string} [expiration_date]
 */
/**
 * @typedef InventoryRequestSchemaV2
 * @property {number} company_id
 * @property {Object} [meta]
 * @property {InventoryPayload[]} [payload]
 */
/**
 * @typedef InventoryFailedReason
 * @property {string} [errors]
 * @property {string} message
 */
/**
 * @typedef InventoryResponseItem
 * @property {InventoryPayload} [data]
 * @property {InventoryFailedReason} [reason]
 */
/**
 * @typedef InventoryUpdateResponse
 * @property {string} message
 * @property {InventoryResponseItem[]} [items]
 */
/**
 * @typedef PageResponse
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {string} [current]
 * @property {boolean} [has_previous]
 * @property {number} [size]
 */
/**
 * @typedef HsnCodesObject
 * @property {number} [threshold2]
 * @property {string} [id]
 * @property {number} [tax2]
 * @property {string} [hs2_code]
 * @property {number} [company_id]
 * @property {boolean} [tax_on_mrp]
 * @property {string} [modified_on]
 * @property {string} [hsn_code]
 * @property {number} [threshold1]
 * @property {boolean} [tax_on_esp]
 * @property {number} [tax1]
 */
/**
 * @typedef HsnCodesListingResponse
 * @property {PageResponse} [page]
 * @property {HsnCodesObject[]} [items]
 */
/**
 * @typedef HsnUpsert
 * @property {number} [threshold2]
 * @property {number} [tax2]
 * @property {string} hs2_code
 * @property {number} company_id
 * @property {boolean} tax_on_mrp
 * @property {string} hsn_code
 * @property {number} threshold1
 * @property {boolean} [is_active]
 * @property {boolean} [tax_on_esp]
 * @property {number} [uid]
 * @property {number} tax1
 */
/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */
/**
 * @typedef BulkHsnUpsert
 * @property {HsnUpsert[]} data
 */
/**
 * @typedef BulkHsnResponse
 * @property {boolean} [success]
 */
/**
 * @typedef TaxSlab
 * @property {number} [cess]
 * @property {string} effective_date
 * @property {number} threshold
 * @property {number} rate
 */
/**
 * @typedef HSNDataInsertV2
 * @property {string} type
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} description
 * @property {string} [modified_on]
 * @property {string} hsn_code
 * @property {Object} [modified_by]
 * @property {TaxSlab[]} taxes
 * @property {string} reporting_hsn
 * @property {string} country_code
 */
/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {PageResponse} [page]
 * @property {HSNDataInsertV2[]} [items]
 */
/**
 * @typedef BrandItem
 * @property {string} [discount]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [departments]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {Media} [logo]
 * @property {number} [uid]
 */
/**
 * @typedef BrandListingResponse
 * @property {Page} page
 * @property {BrandItem[]} [items]
 */
/**
 * @typedef Department
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Media} [logo]
 * @property {number} [priority_order]
 * @property {number} [uid]
 */
/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */
/**
 * @typedef ThirdLevelChild
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Object[]} [childs]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {number} [uid]
 */
/**
 * @typedef SecondLevelChild
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {ThirdLevelChild[]} [childs]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {number} [uid]
 */
/**
 * @typedef Child
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {SecondLevelChild[]} [childs]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {number} [uid]
 */
/**
 * @typedef CategoryItems
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Child[]} [childs]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {number} [uid]
 */
/**
 * @typedef DepartmentCategoryTree
 * @property {string} [department]
 * @property {CategoryItems[]} [items]
 */
/**
 * @typedef DepartmentIdentifier
 * @property {number} [uid]
 * @property {string} [slug]
 */
/**
 * @typedef CategoryListingResponse
 * @property {DepartmentCategoryTree[]} [data]
 * @property {DepartmentIdentifier[]} [departments]
 */
/**
 * @typedef ApplicationProductListingResponse
 * @property {Page} page
 * @property {Object} [operators]
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef ProductDetail
 * @property {string} [color]
 * @property {string} [product_online_date]
 * @property {Object} [promo_meta]
 * @property {string} [item_type]
 * @property {number} [uid]
 * @property {string} [type]
 * @property {Media1[]} [medias]
 * @property {string} [image_nature]
 * @property {ProductBrand} [brand]
 * @property {string[]} [tryouts]
 * @property {number} [rating]
 * @property {number} [rating_count]
 * @property {string[]} [similars]
 * @property {boolean} [has_variant]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {Object} [teaser_tag]
 * @property {Object} [attributes]
 * @property {string[]} [highlights]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [short_description]
 * @property {string} slug
 * @property {string} [description]
 */
/**
 * @typedef InventoryPage
 * @property {string} type
 * @property {boolean} [has_next]
 * @property {string} [next_id]
 * @property {number} item_total
 * @property {boolean} [has_previous]
 */
/**
 * @typedef InventoryStockResponse
 * @property {InventoryPage} page
 * @property {Object[]} [items]
 */
/**
 * @typedef ArticleQuery
 * @property {string} size
 * @property {number} item_id
 * @property {number[]} [ignored_stores]
 */
/**
 * @typedef AssignStoreArticle
 * @property {string} [group_id]
 * @property {ArticleQuery} [query]
 * @property {number} [quantity]
 * @property {Object} [meta]
 * @property {ArticleAssignment} [article_assignment]
 */
/**
 * @typedef AssignStore
 * @property {string} [channel_type]
 * @property {string} [channel_identifier]
 * @property {number[]} [store_ids]
 * @property {string} pincode
 * @property {number} [company_id]
 * @property {AssignStoreArticle[]} articles
 * @property {string} app_id
 */
/**
 * @typedef ArticleAssignment1
 * @property {string} [level]
 * @property {string} [strategy]
 */
/**
 * @typedef StoreAssignResponse
 * @property {number} [price_effective]
 * @property {Object[]} [strategy_wise_listing]
 * @property {number} [price_marked]
 * @property {string} [s_city]
 * @property {number} [index]
 * @property {number} [store_pincode]
 * @property {string} [group_id]
 * @property {number} item_id
 * @property {boolean} status
 * @property {number} [company_id]
 * @property {string} size
 * @property {number} [store_id]
 * @property {number} quantity
 * @property {string} [uid]
 * @property {Object} [meta]
 * @property {ArticleAssignment1} article_assignment
 * @property {string} [_id]
 */
/**
 * @typedef UserSerializer1
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [contact]
 */
/**
 * @typedef UserSerializer2
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [contact]
 */
/**
 * @typedef GetAddressSerializer
 * @property {string} [address_type]
 * @property {string} [state]
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {number} [longitude]
 * @property {string} [country]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {string} [country_code]
 * @property {string} [city]
 */
/**
 * @typedef GetCompanySerializer
 * @property {UserSerializer2} [created_by]
 * @property {string} [company_type]
 * @property {string} [name]
 * @property {string} [business_type]
 * @property {string} [verified_on]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [reject_reason]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {UserSerializer2} [modified_by]
 * @property {number} [uid]
 * @property {string} [stage]
 */
/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */
/**
 * @typedef LocationManagerSerializer
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [email]
 * @property {string} [name]
 */
/**
 * @typedef Document
 * @property {string} type
 * @property {string} [legal_name]
 * @property {string} [url]
 * @property {boolean} [verified]
 * @property {string} value
 */
/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */
/**
 * @typedef InvoiceCredSerializer
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [enabled]
 */
/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */
/**
 * @typedef LocationTimingSerializer
 * @property {number} [minute]
 * @property {number} [hour]
 */
/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 * @property {boolean} open
 * @property {LocationTimingSerializer} [closing]
 */
/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 * @property {string} [order]
 */
/**
 * @typedef GetLocationSerializer
 * @property {UserSerializer1} [created_by]
 * @property {GetCompanySerializer} [company]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} [verified_on]
 * @property {string} [store_type]
 * @property {string} [modified_on]
 * @property {string[]} [notification_emails]
 * @property {number} [uid]
 * @property {Object} [warnings]
 * @property {GetAddressSerializer} address
 * @property {string} phone_number
 * @property {string} code
 * @property {Document[]} [documents]
 * @property {string} [stage]
 * @property {string} name
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Object} [_custom_json]
 * @property {string} display_name
 * @property {UserSerializer1} [verified_by]
 * @property {string} [created_on]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {UserSerializer1} [modified_by]
 * @property {LocationIntegrationType} [integration_type]
 */
/**
 * @typedef LocationListSerializer
 * @property {Page} [page]
 * @property {GetLocationSerializer[]} [items]
 */
/**
 * @typedef ApplicationBrandJson
 * @property {Object} _custom_json
 */
/**
 * @typedef ApplicationCategoryJson
 * @property {Object} _custom_json
 */
/**
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */
/**
 * @typedef Website
 * @property {string} [url]
 */
/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */
/**
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
 */
/**
 * @typedef ContactDetails
 * @property {SellerPhoneNumber[]} [phone]
 * @property {string[]} [emails]
 */
/**
 * @typedef CompanyTaxesSerializer
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */
/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {BusinessDetails} [business_details]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 * @property {UserSerializer} [created_by]
 * @property {Document[]} [documents]
 * @property {boolean} [franchise_enabled]
 * @property {string[]} [notification_emails]
 * @property {string} [verified_on]
 * @property {number} uid
 * @property {string} [stage]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [modified_on]
 * @property {string} [mode]
 * @property {ContactDetails} [contact_details]
 * @property {string} company_type
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {string} [business_info]
 * @property {Object} [warnings]
 * @property {string} business_type
 * @property {CompanyTaxesSerializer[]} [taxes]
 */
/**
 * @typedef CreateUpdateAddressSerializer
 * @property {number} longitude
 * @property {string} country
 * @property {number} latitude
 * @property {string} city
 * @property {string} address_type
 * @property {string} state
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} pincode
 * @property {string} [address2]
 * @property {string} address1
 */
/**
 * @typedef CompanyTaxesSerializer1
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */
/**
 * @typedef UpdateCompany
 * @property {string} [name]
 * @property {BusinessDetails} [business_details]
 * @property {Document[]} [documents]
 * @property {string} [business_info]
 * @property {boolean} [franchise_enabled]
 * @property {Object} [warnings]
 * @property {ContactDetails} [contact_details]
 * @property {Object} [_custom_json]
 * @property {string[]} [notification_emails]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {string} [reject_reason]
 * @property {string} [company_type]
 * @property {string} [business_type]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 */
/**
 * @typedef ProfileSuccessResponse
 * @property {boolean} [success]
 * @property {number} [uid]
 */
/**
 * @typedef DocumentsObj
 * @property {number} [verified]
 * @property {number} [pending]
 */
/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [product]
 * @property {DocumentsObj} [store]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [brand]
 */
/**
 * @typedef BrandBannerSerializer
 * @property {string} [portrait]
 * @property {string} [landscape]
 */
/**
 * @typedef GetBrandResponseSerializer
 * @property {string} [slug_key]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 * @property {UserSerializer} [created_by]
 * @property {string[]} [synonyms]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {number} [uid]
 * @property {string} [logo]
 * @property {string} [stage]
 * @property {string} [description]
 * @property {string} [modified_on]
 * @property {string} [mode]
 * @property {string} [created_on]
 * @property {string} name
 * @property {BrandBannerSerializer} [banner]
 * @property {Object} [_locale_language]
 * @property {Object} [warnings]
 * @property {string} [reject_reason]
 */
/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {string} name
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [description]
 * @property {Object} [_locale_language]
 * @property {string[]} [synonyms]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {string} [brand_tier]
 * @property {string} logo
 * @property {number} [company_id]
 */
/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */
/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */
/**
 * @typedef CompanySerializer
 * @property {string} [name]
 * @property {CompanyDetails} [details]
 * @property {string} [modified_on]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [stage]
 * @property {Object} [_custom_json]
 * @property {string[]} [notification_emails]
 * @property {string} [verified_on]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 * @property {string} company_type
 * @property {string} business_type
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string[]} [market_channels]
 * @property {string} [reject_reason]
 */
/**
 * @typedef CompanyBrandSerializer
 * @property {string} [modified_on]
 * @property {Object} [warnings]
 * @property {string} [verified_on]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 * @property {CompanySerializer} [company]
 * @property {string} [reject_reason]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {GetBrandResponseSerializer} [brand]
 */
/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} [uid]
 * @property {number} company
 * @property {number[]} brands
 */
/**
 * @typedef LocationSerializer
 * @property {string} name
 * @property {Document[]} [documents]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {Object} [warnings]
 * @property {string} code
 * @property {string} [stage]
 * @property {Object} [_custom_json]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string[]} [notification_emails]
 * @property {number} [uid]
 * @property {GetAddressSerializer} address
 * @property {LocationManagerSerializer} [manager]
 * @property {number} company
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} display_name
 * @property {string} [store_type]
 */
/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */
/**
 * @typedef FailedResponse
 * @property {string} message
 */
/**
 * @typedef CDN
 * @property {string} url
 */
/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */
/**
 * @typedef StartResponse
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string[]} [tags]
 */
/**
 * @typedef StartRequest
 * @property {string} file_name
 * @property {string} content_type
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Object} [params]
 */
/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {string} created_on
 * @property {string} modified_on
 */
/**
 * @typedef Opts
 * @property {number} [attempts]
 * @property {number} [timestamp]
 * @property {number} [delay]
 */
/**
 * @typedef CopyFileTask
 * @property {string} id
 * @property {string} name
 * @property {BulkRequest} data
 * @property {Opts} opts
 * @property {number} progress
 * @property {number} delay
 * @property {number} timestamp
 * @property {number} attempts_made
 * @property {string[]} [stacktrace]
 * @property {number} finished_on
 * @property {number} processed_on
 */
/**
 * @typedef ReqConfiguration
 * @property {number} [concurrency]
 */
/**
 * @typedef Destination
 * @property {string} namespace
 * @property {string} rewrite
 * @property {string} [basepath]
 */
/**
 * @typedef BulkRequest
 * @property {string[]} urls
 * @property {Destination} destination
 * @property {ReqConfiguration} [configuration]
 */
/**
 * @typedef Urls
 * @property {string} url
 * @property {string} signed_url
 * @property {number} expiry
 */
/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */
/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */
/**
 * @typedef DbRecord
 * @property {boolean} success
 * @property {string[]} tags
 * @property {string} _id
 * @property {string} file_name
 * @property {string} [operation]
 * @property {string} namespace
 * @property {string} content_type
 * @property {string} file_path
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string} created_on
 * @property {string} modified_on
 */
/**
 * @typedef BrowseResponse
 * @property {DbRecord[]} items
 * @property {Page} page
 */
/**
 * @typedef RedirectDevice
 * @property {string} [link]
 * @property {string} [type]
 */
/**
 * @typedef WebRedirect
 * @property {string} [link]
 * @property {string} [type]
 */
/**
 * @typedef Redirects
 * @property {RedirectDevice} [ios]
 * @property {RedirectDevice} [android]
 * @property {WebRedirect} [web]
 * @property {boolean} [force_web]
 */
/**
 * @typedef CampaignShortLink
 * @property {string} [source]
 * @property {string} [medium]
 */
/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry]
 */
/**
 * @typedef SocialMediaTags
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image]
 */
/**
 * @typedef ShortLinkReq
 * @property {string} title
 * @property {string} url
 * @property {string} [hash]
 * @property {boolean} [active]
 * @property {string} [expire_at]
 * @property {boolean} [enable_tracking]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */
/**
 * @typedef UrlInfo
 * @property {string} [original]
 * @property {string} [short]
 * @property {string} [hash]
 */
/**
 * @typedef ShortLinkRes
 * @property {string} [title]
 * @property {UrlInfo} [url]
 * @property {string} [created_by]
 * @property {boolean} [app_redirect]
 * @property {string} [fallback]
 * @property {boolean} [active]
 * @property {string} [_id]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [application]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {Object} [meta]
 * @property {string} [updated_at]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */
/**
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ErrorRes
 * @property {string} [message]
 */
/**
 * @typedef GCompany
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [name]
 * @property {GStore[]} [stores]
 * @property {GStore[]} [gstores]
 */
/**
 * @typedef GStore
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [code]
 * @property {string} [name]
 * @property {StoreData} [data]
 */
/**
 * @typedef Metum
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef ResponseEnvelopeListSlingshotConfigurationDetail
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {SlingshotConfigurationDetail[]} [items]
 * @property {SlingshotConfigurationDetail[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef SlingshotConfigurationDetail
 * @property {SlingshotIntegration} [integration]
 * @property {GCompany[]} [companies]
 */
/**
 * @typedef SlingshotIntegration
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Metum[]} [meta]
 */
/**
 * @typedef StoreData
 * @property {string} [location_id]
 */
/**
 * @typedef KafkaMetaModel
 * @property {string} [job_type]
 * @property {number} [batch_id]
 * @property {string} [action]
 * @property {string[]} [trace]
 * @property {string} [created_on]
 * @property {number} [created_timestamp]
 */
/**
 * @typedef SuppressStoreModel
 * @property {number[]} [stores]
 */
/**
 * @typedef SuppressStorePayload
 * @property {SuppressStoreModel[]} [payload]
 * @property {KafkaMetaModel} [meta]
 */
/**
 * @typedef KafkaResponse
 * @property {number} [offset]
 * @property {number} [partition]
 */
/**
 * @typedef ResponseEnvelopeKafkaResponse
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {KafkaResponse} [items]
 * @property {KafkaResponse} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef DataTresholdDTO
 * @property {number} [min_price]
 * @property {number} [safe_stock]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {GenericDTO[]} [period_type_list]
 */
/**
 * @typedef GenericDTO
 * @property {string} [text]
 * @property {Object} [value]
 */
/**
 * @typedef JobConfigDTO
 * @property {string} integration
 * @property {Object} [integration_data]
 * @property {string} [company_name]
 * @property {number} company_id
 * @property {TaskDTO} [task_details]
 * @property {DataTresholdDTO} [threshold_details]
 * @property {string} [job_code]
 * @property {string} [alias]
 */
/**
 * @typedef TaskDTO
 * @property {number} [type]
 * @property {GenericDTO[]} [group_list]
 */
/**
 * @typedef ResponseEnvelopeString
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {string} [items]
 * @property {string} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef AWSS3config
 * @property {string} [bucket]
 * @property {string} [region]
 * @property {string} [dir]
 * @property {string} [access_key]
 * @property {string} [secret_key]
 * @property {string} [local_file_path]
 * @property {string} [archive_path]
 * @property {boolean} [archive]
 * @property {boolean} [delete]
 * @property {boolean} [unzip]
 * @property {string} [zip_format]
 * @property {string} [file_regex]
 * @property {ArchiveConfig} [archive_config]
 */
/**
 * @typedef ArchiveConfig
 * @property {boolean} [delete]
 * @property {boolean} [archive]
 * @property {string} [archive_dir]
 */
/**
 * @typedef Audit
 * @property {string} [created_by]
 * @property {string} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef CatalogMasterConfig
 * @property {string} [source_slug]
 */
/**
 * @typedef CompanyConfig
 * @property {number} [company_id]
 * @property {number[]} [exclude_steps]
 * @property {string[]} [hidden_closet_keys]
 * @property {Object} [open_tags]
 * @property {string[]} [tax_identifiers]
 * @property {number} [delete_quantity_threshold]
 */
/**
 * @typedef DBConfig
 * @property {string} [vendor]
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [dbname]
 * @property {string} [query]
 * @property {boolean} [procedure]
 * @property {string} [driver_class]
 * @property {string} [jdbc_url]
 * @property {Object} [optional_properties]
 */
/**
 * @typedef DBConnectionProfile
 * @property {string} [inventory]
 */
/**
 * @typedef DBParamConfig
 * @property {Object} [params]
 */
/**
 * @typedef DefaultHeadersDTO
 * @property {PropBeanDTO} [store]
 * @property {PropBeanDTO} [intf_article_id]
 * @property {PropBeanDTO} [price_effective]
 * @property {PropBeanDTO} [quantity]
 */
/**
 * @typedef DocMappingConfig
 * @property {Object} [properties]
 * @property {number} [junk_data_threshold_count]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {string} [unwind_field]
 * @property {DefaultHeadersDTO} [default_headers]
 */
/**
 * @typedef EmailConfig
 * @property {string} [recepient]
 * @property {string} [host]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {boolean} [read_from_content]
 * @property {boolean} [filter_based_on_recepients]
 * @property {string} [pcol]
 * @property {string} [subject_line_regex]
 * @property {string} [sender_address]
 * @property {string} [local_dir]
 * @property {string[]} [folder_name_hierarchies]
 * @property {string} [attachment_regex]
 * @property {string} [body_content_regex]
 * @property {boolean} [password_protected]
 * @property {string} [zip_format]
 * @property {boolean} [attachment_mandate]
 * @property {boolean} [filter_files_after_extraction]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_unread_mails]
 * @property {string} [content_type]
 * @property {boolean} [downloadable_link]
 * @property {Object} [properties]
 */
/**
 * @typedef FTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {string} [zip_file_regex]
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {boolean} [read_all_files]
 */
/**
 * @typedef FileConfig
 * @property {string} [delimiter]
 * @property {string} [charset]
 * @property {Object} [properties]
 * @property {boolean} [file_has_header]
 * @property {number} [header_index]
 * @property {string[]} [header_array]
 * @property {number} [data_start_index]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {number} [junk_data_threshold_count]
 * @property {string} [file_type]
 * @property {boolean} [line_validity_check]
 * @property {string[]} [sheet_names]
 * @property {boolean} [read_all_sheets]
 * @property {string} [quote_char]
 * @property {string} [escape_char]
 * @property {DefaultHeadersDTO} [default_headers]
 */
/**
 * @typedef GoogleSpreadSheetConfig
 * @property {string} [range]
 * @property {string} [sheet_id]
 * @property {string} [client_secret_location]
 * @property {string} [cred_storage_directory]
 * @property {string} [local_dir]
 * @property {ArchiveConfig} [archive_config]
 */
/**
 * @typedef HttpConfig
 * @property {string} [hosturl]
 * @property {string} [username]
 * @property {string} [password]
 * @property {Object} [request_params]
 * @property {string} [http_method]
 * @property {string} [request_payload]
 * @property {string} [local_path]
 * @property {ArchiveConfig} [archive_config]
 */
/**
 * @typedef JobConfig
 * @property {number} [_id]
 * @property {string} [job_code]
 * @property {string} [task_type]
 * @property {number} [sync_delay]
 * @property {string} [cron_expression]
 * @property {StoreFilter} [store_filter]
 * @property {ProcessConfig} [process_config]
 * @property {StoreConfig[]} [store_config]
 * @property {Object} [properties]
 * @property {boolean} [immediate_first_run]
 * @property {boolean} [disable]
 * @property {string[]} [dependent_job_codes]
 * @property {CompanyConfig[]} [company_config]
 * @property {number[]} [company_ids]
 * @property {string[]} [tax_identifiers]
 * @property {string} [priority]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {DBConnectionProfile} [db_connection_profile]
 * @property {Object} [params]
 * @property {Object} [open_tags]
 * @property {number} [delete_quantity_threshold]
 * @property {CatalogMasterConfig} [catalog_master_config]
 * @property {string[]} [aggregator_types]
 * @property {string} [integration_type]
 * @property {number} [min_price]
 * @property {Audit} [audit]
 * @property {number} [version]
 * @property {string} [alias]
 */
/**
 * @typedef JobConfigRawDTO
 * @property {string} integration
 * @property {string} company_name
 * @property {number} company_id
 * @property {JobConfig} [data]
 */
/**
 * @typedef JsonDocConfig
 * @property {PropBeanConfig[]} [prop_bean_configs]
 */
/**
 * @typedef LocalFileConfig
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [working_dir]
 * @property {boolean} [unzip]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */
/**
 * @typedef MongoDocConfig
 * @property {string} [collection_name]
 * @property {Object} [find_query]
 * @property {Object} [projection_query]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {Object[]} [aggregate_pipeline]
 * @property {boolean} [skip_save]
 */
/**
 * @typedef OAuthConfig
 * @property {number} [limit]
 * @property {number} [pages]
 * @property {number} [interval]
 * @property {string} [consumer_key]
 * @property {string} [consumer_secret]
 * @property {string} [token]
 * @property {string} [token_secret]
 * @property {string} [rest_url]
 * @property {string} [rest_base_url]
 * @property {string} [function_name]
 */
/**
 * @typedef ProcessConfig
 * @property {DBConfig} [db_config]
 * @property {DBParamConfig} [db_param_config]
 * @property {SFTPConfig} [sftp_config]
 * @property {AWSS3config} [aws_s3_config]
 * @property {MongoDocConfig} [mongo_doc_config]
 * @property {FTPConfig} [ftp_config]
 * @property {EmailConfig} [email_config]
 * @property {FileConfig} [file_config]
 * @property {JsonDocConfig} [json_doc_config]
 * @property {DocMappingConfig} [doc_mapping_config]
 * @property {TaskStepConfig} [task_step_config]
 * @property {HttpConfig} [http_config]
 * @property {LocalFileConfig} [local_file_config]
 * @property {OAuthConfig} [oauth_config]
 * @property {GoogleSpreadSheetConfig} [google_spreadsheet_config]
 */
/**
 * @typedef PropBeanConfig
 * @property {boolean} [required]
 * @property {Object} [mapping]
 * @property {boolean} [optional]
 * @property {Send} [send]
 * @property {Object[]} [validations]
 * @property {string[]} [values]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */
/**
 * @typedef PropBeanDTO
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigRawDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigRawDTO[]} [items]
 * @property {JobConfigRawDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef SFTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [private_key_path]
 * @property {boolean} [strict_host_key_checking]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {boolean} [password_protected]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */
/**
 * @typedef Send
 * @property {boolean} [raw]
 * @property {boolean} [processed]
 */
/**
 * @typedef StoreConfig
 * @property {string} [job_code]
 * @property {string} [storeid]
 * @property {string} [store_alias]
 * @property {string} [store_file_regex]
 * @property {string} [store_file_name]
 * @property {ProcessConfig} [process_config]
 * @property {Object} [properties]
 */
/**
 * @typedef StoreFilter
 * @property {string[]} [include_tags]
 * @property {string[]} [exclude_tags]
 * @property {Object} [query]
 */
/**
 * @typedef TaskConfig
 * @property {string} [name]
 * @property {number} [task_config_id]
 * @property {TaskParam[]} [task_params]
 */
/**
 * @typedef TaskParam
 * @property {string} [name]
 * @property {Object} [value]
 */
/**
 * @typedef TaskStepConfig
 * @property {TaskConfig[]} [task_configs]
 * @property {number[]} [task_config_ids]
 * @property {number[]} [task_config_group_ids]
 */
/**
 * @typedef JobStepsDTO
 * @property {string} [step_name]
 * @property {string} [type]
 * @property {number} [step_execution_time]
 * @property {number} [start_count]
 * @property {number} [end_count]
 * @property {number} [deleted_count]
 * @property {string} [processed_start_time]
 * @property {string} [processed_at]
 */
/**
 * @typedef ResponseEnvelopeListJobStepsDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobStepsDTO[]} [items]
 * @property {JobStepsDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO[]} [items]
 * @property {JobConfigDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef ResponseEnvelopeJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO} [items]
 * @property {JobConfigDTO} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef JobHistoryDto
 * @property {number} [total_added_count]
 * @property {number} [total_updated_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_initial_count]
 * @property {number} [job_id]
 * @property {string} [status]
 * @property {string} [job_code]
 * @property {string} [processed_on]
 * @property {string[]} [filename]
 * @property {string} [error_type]
 * @property {string} [message]
 */
/**
 * @typedef JobMetricsDto
 * @property {string} [job_code]
 * @property {string} [is_run_more_than_usual]
 * @property {JobHistoryDto[]} [job_history]
 * @property {number} [total_success_count]
 * @property {number} [total_failure_count]
 * @property {number} [total_warning_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_job_runs]
 */
/**
 * @typedef ResponseEnvelopeJobMetricsDto
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobMetricsDto} [items]
 * @property {JobMetricsDto} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef JobConfigListDTO
 * @property {string} [code]
 * @property {string} [alias]
 * @property {string} [modified_by]
 * @property {string} [created_by]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {boolean} [active]
 * @property {string} [type]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigListDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigListDTO[]} [items]
 * @property {JobConfigListDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef ApplicationInventory
 * @property {AppInventoryConfig} [inventory]
 * @property {AuthenticationConfig} [authentication]
 * @property {ArticleAssignmentConfig} [article_assignment]
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {AppOrderConfig} [order]
 * @property {AppLogisticsConfig} [logistics]
 * @property {string} [business]
 * @property {boolean} [comms_enabled]
 * @property {string[]} [platforms]
 * @property {string} [_id]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [modified_by]
 */
/**
 * @typedef AppInventoryConfig
 * @property {InventoryBrand} [brand]
 * @property {InventoryStore} [store]
 * @property {InventoryCategory} [category]
 * @property {InventoryPrice} [price]
 * @property {InventoryDiscount} [discount]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {boolean} [franchise_enabled]
 * @property {Object[]} [exclude_category]
 * @property {string[]} [image]
 * @property {Object[]} [company_store]
 */
/**
 * @typedef InventoryBrand
 * @property {string} [criteria]
 * @property {Object[]} [brands]
 */
/**
 * @typedef InventoryStore
 * @property {string} [criteria]
 * @property {Object[]} [stores]
 * @property {AppStoreRules} [rules]
 */
/**
 * @typedef AppStoreRules
 * @property {number[]} [companies]
 * @property {Object[]} [brands]
 */
/**
 * @typedef InventoryCategory
 * @property {string} [criteria]
 * @property {Object[]} [categories]
 */
/**
 * @typedef InventoryPrice
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef InventoryDiscount
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef AuthenticationConfig
 * @property {boolean} [required]
 * @property {string} [provider]
 */
/**
 * @typedef ArticleAssignmentConfig
 * @property {ArticleAssignmentRules} [rules]
 * @property {boolean} [post_order_reassignment]
 */
/**
 * @typedef ArticleAssignmentRules
 * @property {StorePriority} [store_priority]
 */
/**
 * @typedef StorePriority
 * @property {boolean} [enabled]
 * @property {Object[]} [storetype_order]
 */
/**
 * @typedef AppCartConfig
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [enabled]
 * @property {number} [max_cart_items]
 * @property {number} [min_cart_value]
 * @property {boolean} [bulk_coupons]
 * @property {boolean} [revenue_engine_coupon]
 */
/**
 * @typedef DeliveryCharges
 * @property {boolean} [enabled]
 * @property {Charges} [charges]
 */
/**
 * @typedef Charges
 * @property {number} [threshold]
 * @property {number} [charges]
 */
/**
 * @typedef AppPaymentConfig
 * @property {CallbackUrl} [callback_url]
 * @property {Methods} [methods]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 * @property {boolean} [enabled]
 * @property {number} [cod_amount_limit]
 * @property {number} [cod_charges]
 */
/**
 * @typedef CallbackUrl
 * @property {string} [app]
 * @property {string} [web]
 */
/**
 * @typedef Methods
 * @property {PaymentModeConfig} [pl]
 * @property {PaymentModeConfig} [card]
 * @property {PaymentModeConfig} [nb]
 * @property {PaymentModeConfig} [wl]
 * @property {PaymentModeConfig} [ps]
 * @property {PaymentModeConfig} [upi]
 * @property {PaymentModeConfig} [qr]
 * @property {PaymentModeConfig} [cod]
 * @property {PaymentModeConfig} [pp]
 * @property {PaymentModeConfig} [jp]
 * @property {PaymentModeConfig} [pac]
 * @property {PaymentModeConfig} [fc]
 * @property {PaymentModeConfig} [jiopp]
 * @property {PaymentModeConfig} [stripepg]
 * @property {PaymentModeConfig} [juspaypg]
 * @property {PaymentModeConfig} [payubizpg]
 * @property {PaymentModeConfig} [payumoneypg]
 * @property {PaymentModeConfig} [rupifipg]
 * @property {PaymentModeConfig} [simpl]
 */
/**
 * @typedef PaymentModeConfig
 * @property {boolean} [enabled]
 */
/**
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled]
 * @property {string} [default_options]
 * @property {string} [payment_identifier]
 */
/**
 * @typedef AppOrderConfig
 * @property {boolean} [enabled]
 * @property {boolean} [force_reassignment]
 * @property {string} [message]
 */
/**
 * @typedef AppLogisticsConfig
 * @property {boolean} [logistics_by_seller]
 * @property {boolean} [serviceability_check]
 * @property {boolean} [same_day_delivery]
 * @property {boolean} [dp_assignment]
 */
/**
 * @typedef LoyaltyPointsConfig
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 */
/**
 * @typedef AppInventoryPartialUpdate
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {boolean} [comms_enabled]
 */
/**
 * @typedef BrandCompanyInfo
 * @property {string} [company_name]
 * @property {number} [company_id]
 */
/**
 * @typedef CompanyByBrandsRequest
 * @property {number} brands
 * @property {string} [search_text]
 */
/**
 * @typedef CompanyByBrandsResponse
 * @property {BrandCompanyInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef StoreByBrandsRequest
 * @property {number} [company_id]
 * @property {number} brands
 * @property {string} [search_text]
 */
/**
 * @typedef StoreByBrandsResponse
 * @property {BrandStoreInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BrandStoreInfo
 * @property {string} [store_name]
 * @property {number} [store_id]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {OptedStoreAddress} [store_address]
 * @property {OptedCompany} [company]
 */
/**
 * @typedef CompanyBrandInfo
 * @property {string} [name]
 * @property {number} [value]
 * @property {string} [brand_logo_url]
 * @property {string} [brand_banner_url]
 * @property {string} [brand_banner_portrait_url]
 */
/**
 * @typedef BrandsByCompanyResponse
 * @property {CompanyBrandInfo} [brands]
 */
/**
 * @typedef CreateApplicationRequest
 * @property {App} [app]
 * @property {AppInventory} [configuration]
 * @property {AppDomain} [domain]
 */
/**
 * @typedef CreateAppResponse
 * @property {Application} [app]
 * @property {ApplicationInventory} [configuration]
 */
/**
 * @typedef ApplicationsResponse
 * @property {Application[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef MobileAppConfiguration
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {string} [package_name]
 */
/**
 * @typedef LandingImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */
/**
 * @typedef SplashImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */
/**
 * @typedef MobileAppConfigRequest
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {boolean} [is_active]
 */
/**
 * @typedef BuildVersionHistory
 * @property {BuildVersion} [versions]
 * @property {string} [latest_available_version_name]
 */
/**
 * @typedef BuildVersion
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [build_status]
 * @property {string} [version_name]
 * @property {number} [version_code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef AppSupportedCurrency
 * @property {string} [_id]
 * @property {string[]} [supported_currency]
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef DefaultCurrency
 * @property {string} [ref]
 * @property {string} [code]
 */
/**
 * @typedef CurrencyConfig
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */
/**
 * @typedef DomainAdd
 * @property {string} [name]
 */
/**
 * @typedef DomainAddRequest
 * @property {DomainAdd} [domain]
 */
/**
 * @typedef DomainsResponse
 * @property {Domain[]} [domains]
 */
/**
 * @typedef UpdateDomain
 * @property {string} [_id]
 */
/**
 * @typedef UpdateDomainTypeRequest
 * @property {UpdateDomain} [domain]
 * @property {string} [action]
 */
/**
 * @typedef DomainStatusRequest
 * @property {string} [domain_url]
 */
/**
 * @typedef DomainStatus
 * @property {string} [display]
 * @property {boolean} [status]
 */
/**
 * @typedef DomainStatusResponse
 * @property {boolean} [connected]
 * @property {DomainStatus[]} [status]
 */
/**
 * @typedef DomainSuggestionsRequest
 * @property {string} [domain_url]
 * @property {boolean} [custom]
 */
/**
 * @typedef DomainSuggestion
 * @property {string} name
 * @property {boolean} [unsupported]
 * @property {boolean} is_available
 * @property {number} [price]
 * @property {string} [currency]
 */
/**
 * @typedef DomainSuggestionsResponse
 * @property {DomainSuggestion[]} [domains]
 */
/**
 * @typedef GetIntegrationsOptInsResponse
 * @property {IntegrationOptIn[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef IntegrationOptIn
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {string} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */
/**
 * @typedef Validators
 * @property {CompanyValidator} [company]
 * @property {StoreValidator} [store]
 * @property {InventoryValidator} [inventory]
 * @property {OrderValidator} [order]
 */
/**
 * @typedef CompanyValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef JsonSchema
 * @property {string} [display]
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [tooltip]
 */
/**
 * @typedef StoreValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef InventoryValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef OrderValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef IntegrationMeta
 * @property {boolean} [is_public]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef Integration
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {Object} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */
/**
 * @typedef IntegrationConfigResponse
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef IntegrationLevel
 * @property {boolean} [opted]
 * @property {Object[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {Object} [data]
 */
/**
 * @typedef UpdateIntegrationLevelRequest
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef OptedStoreIntegration
 * @property {boolean} [other_opted]
 * @property {IntegrationOptIn} [other_integration]
 * @property {OtherEntity} [other_entity]
 */
/**
 * @typedef OtherEntity
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {OtherEntityData} [data]
 * @property {Object[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef LastPatch
 * @property {string} [op]
 * @property {string} [path]
 * @property {string} [value]
 */
/**
 * @typedef OtherEntityData
 * @property {string} [article_identifier]
 */
/**
 * @typedef App
 * @property {string} [company_id]
 * @property {string} [channel_type]
 * @property {ApplicationAuth} [auth]
 * @property {string} [name]
 * @property {string} [desc]
 */
/**
 * @typedef AppInventory
 * @property {InventoryBrandRule} [brand]
 * @property {InventoryStoreRule} [store]
 * @property {string[]} [image]
 * @property {boolean} [franchise_enabled]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {InventoryPaymentConfig} [payment]
 * @property {InventoryArticleAssignment} [article_assignment]
 */
/**
 * @typedef AppDomain
 * @property {string} [name]
 */
/**
 * @typedef CompaniesResponse
 * @property {AppInventoryCompanies} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AppInventoryCompanies
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [company_type]
 */
/**
 * @typedef StoresResponse
 * @property {AppInventoryStores} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AppInventoryStores
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [company_id]
 */
/**
 * @typedef FilterOrderingStoreRequest
 * @property {boolean} [all_stores]
 * @property {number[]} [deployed_stores]
 * @property {string} [q]
 */
/**
 * @typedef DeploymentMeta
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 */
/**
 * @typedef OrderingStoreConfig
 * @property {DeploymentMeta} [deployment_meta]
 */
/**
 * @typedef OtherSellerCompany
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef OtherSellerApplication
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OtherSellerCompany} [company]
 * @property {string} [opt_type]
 */
/**
 * @typedef OtherSellerApplications
 * @property {OtherSellerApplication[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OptedApplicationResponse
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OptedCompany} [company]
 * @property {OptedInventory} [opted_inventory]
 * @property {OptOutInventory} [opt_out_inventory]
 */
/**
 * @typedef OptedCompany
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef OptedInventory
 * @property {OptType} [opt_type]
 * @property {Object} [items]
 */
/**
 * @typedef OptType
 * @property {string} [key]
 * @property {string} [display]
 */
/**
 * @typedef OptedStore
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {OptedStoreAddress} [address]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {number} [company_id]
 */
/**
 * @typedef OptOutInventory
 * @property {number[]} store
 * @property {number[]} company
 */
/**
 * @typedef TokenResponse
 * @property {Tokens} [tokens]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef Tokens
 * @property {Firebase} [firebase]
 * @property {Moengage} [moengage]
 * @property {Segment} [segment]
 * @property {Gtm} [gtm]
 * @property {Freshchat} [freshchat]
 * @property {Safetynet} [safetynet]
 * @property {FyndRewards} [fynd_rewards]
 * @property {GoogleMap} [google_map]
 */
/**
 * @typedef Firebase
 * @property {Credentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef Credentials
 * @property {Ios} [ios]
 * @property {Android} [android]
 * @property {string} [project_id]
 * @property {string} [gcm_sender_id]
 * @property {string} [application_id]
 * @property {string} [api_key]
 */
/**
 * @typedef Ios
 * @property {string} [application_id]
 * @property {string} [api_key]
 */
/**
 * @typedef Android
 * @property {string} [application_id]
 * @property {string} [api_key]
 */
/**
 * @typedef Moengage
 * @property {MoengageCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef MoengageCredentials
 * @property {string} [app_id]
 */
/**
 * @typedef Segment
 * @property {SegmentCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef SegmentCredentials
 * @property {string} [write_key]
 */
/**
 * @typedef Gtm
 * @property {GtmCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef GtmCredentials
 * @property {string} [api_key]
 */
/**
 * @typedef Freshchat
 * @property {FreshchatCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef FreshchatCredentials
 * @property {string} [app_id]
 * @property {string} [app_key]
 * @property {string} [web_token]
 */
/**
 * @typedef Safetynet
 * @property {SafetynetCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef SafetynetCredentials
 * @property {string} [api_key]
 */
/**
 * @typedef FyndRewards
 * @property {FyndRewardsCredentials} [credentials]
 */
/**
 * @typedef FyndRewardsCredentials
 * @property {string} [public_key]
 */
/**
 * @typedef GoogleMap
 * @property {GoogleMapCredentials} [credentials]
 */
/**
 * @typedef GoogleMapCredentials
 * @property {string} [api_key]
 */
/**
 * @typedef RewardPointsConfig
 * @property {Credit} [credit]
 * @property {Debit} [debit]
 */
/**
 * @typedef Credit
 * @property {boolean} [enabled]
 */
/**
 * @typedef Debit
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 * @property {string} [strategy_channel]
 */
/**
 * @typedef ProductDetailFeature
 * @property {string[]} [similar]
 * @property {boolean} [seller_selection]
 * @property {boolean} [update_product_meta]
 * @property {boolean} [request_product]
 */
/**
 * @typedef LaunchPage
 * @property {string} [page_type]
 * @property {Object} [params]
 * @property {Object} [query]
 */
/**
 * @typedef LandingPageFeature
 * @property {LaunchPage} [launch_page]
 * @property {boolean} [continue_as_guest]
 * @property {string} [login_btn_text]
 * @property {boolean} [show_domain_textbox]
 * @property {boolean} [show_register_btn]
 */
/**
 * @typedef RegistrationPageFeature
 * @property {boolean} [ask_store_address]
 */
/**
 * @typedef AppFeature
 * @property {ProductDetailFeature} [product_detail]
 * @property {LandingPageFeature} [landing_page]
 * @property {RegistrationPageFeature} [registration_page]
 * @property {HomePageFeature} [home_page]
 * @property {CommonFeature} [common]
 * @property {CartFeature} [cart]
 * @property {QrFeature} [qr]
 * @property {PcrFeature} [pcr]
 * @property {OrderFeature} [order]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef HomePageFeature
 * @property {boolean} [order_processing]
 */
/**
 * @typedef CommonFeature
 * @property {CommunicationOptinDialogFeature} [communication_optin_dialog]
 * @property {DeploymentStoreSelectionFeature} [deployment_store_selection]
 * @property {ListingPriceFeature} [listing_price]
 * @property {CurrencyFeature} [currency]
 * @property {RevenueEngineFeature} [revenue_engine]
 * @property {FeedbackFeature} [feedback]
 * @property {CompareProductsFeature} [compare_products]
 * @property {RewardPointsConfig} [reward_points]
 */
/**
 * @typedef CommunicationOptinDialogFeature
 * @property {boolean} [visibility]
 */
/**
 * @typedef DeploymentStoreSelectionFeature
 * @property {boolean} [enabled]
 * @property {string} [type]
 */
/**
 * @typedef ListingPriceFeature
 * @property {string} [value]
 */
/**
 * @typedef CurrencyFeature
 * @property {string[]} [value]
 * @property {string} [type]
 * @property {string} [default_currency]
 */
/**
 * @typedef RevenueEngineFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef FeedbackFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef CompareProductsFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef CartFeature
 * @property {boolean} [gst_input]
 * @property {boolean} [staff_selection]
 * @property {boolean} [placing_for_customer]
 * @property {boolean} [google_map]
 * @property {boolean} [revenue_engine_coupon]
 */
/**
 * @typedef QrFeature
 * @property {boolean} [application]
 * @property {boolean} [products]
 * @property {boolean} [collections]
 */
/**
 * @typedef PcrFeature
 * @property {boolean} [staff_selection]
 */
/**
 * @typedef OrderFeature
 * @property {boolean} [buy_again]
 */
/**
 * @typedef AppFeatureRequest
 * @property {AppFeature} [feature]
 */
/**
 * @typedef AppFeatureResponse
 * @property {AppFeature} [feature]
 */
/**
 * @typedef UnhandledError
 * @property {string} [message]
 */
/**
 * @typedef InvalidPayloadRequest
 * @property {string} [message]
 */
/**
 * @typedef SuccessMessageResponse
 * @property {string} [message]
 */
/**
 * @typedef InventoryBrandRule
 * @property {string} [criteria]
 * @property {number[]} [brands]
 */
/**
 * @typedef StoreCriteriaRule
 * @property {number[]} [companies]
 * @property {number[]} [brands]
 */
/**
 * @typedef InventoryStoreRule
 * @property {string} [criteria]
 * @property {StoreCriteriaRule[]} [rules]
 * @property {number[]} [stores]
 */
/**
 * @typedef InventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */
/**
 * @typedef StorePriorityRule
 * @property {boolean} [enabled]
 * @property {string[]} [storetype_order]
 */
/**
 * @typedef ArticleAssignmentRule
 * @property {StorePriorityRule} [store_priority]
 */
/**
 * @typedef InventoryArticleAssignment
 * @property {boolean} [post_order_reassignment]
 * @property {ArticleAssignmentRule} [rules]
 */
/**
 * @typedef CompanyAboutAddress
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [address_type]
 */
/**
 * @typedef UserEmail
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 */
/**
 * @typedef UserPhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {number} [country_code]
 * @property {string} [phone]
 */
/**
 * @typedef ApplicationInformation
 * @property {InformationAddress} [address]
 * @property {InformationSupport} [support]
 * @property {SocialLinks} [social_links]
 * @property {Links} [links]
 * @property {string} [copyright_text]
 * @property {string} [_id]
 * @property {BusinessHighlights} [business_highlights]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef InformationAddress
 * @property {string} [loc]
 * @property {string[]} [address_line]
 * @property {InformationPhone} [phone]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [pincode]
 */
/**
 * @typedef InformationPhone
 * @property {string} [code]
 * @property {string} [number]
 */
/**
 * @typedef InformationSupport
 * @property {string[]} [phone]
 * @property {string[]} [email]
 * @property {string} [timing]
 */
/**
 * @typedef SocialLinks
 * @property {FacebookLink} [facebook]
 * @property {InstagramLink} [instagram]
 * @property {TwitterLink} [twitter]
 * @property {PinterestLink} [pinterest]
 * @property {GooglePlusLink} [google_plus]
 * @property {YoutubeLink} [youtube]
 * @property {LinkedInLink} [linked_in]
 * @property {VimeoLink} [vimeo]
 * @property {BlogLink} [blog_link]
 */
/**
 * @typedef FacebookLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef InstagramLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef TwitterLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef PinterestLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef GooglePlusLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef YoutubeLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef LinkedInLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef VimeoLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef BlogLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef Links
 * @property {string} [title]
 * @property {string} [link]
 */
/**
 * @typedef BusinessHighlights
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [sub_title]
 */
/**
 * @typedef ApplicationDetail
 * @property {string} name
 * @property {string} description
 * @property {SecureUrl} logo
 * @property {SecureUrl} mobile_logo
 * @property {SecureUrl} favicon
 * @property {SecureUrl} banner
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {string} [_id]
 */
/**
 * @typedef CurrenciesResponse
 * @property {Currency[]} [items]
 */
/**
 * @typedef AppCurrencyResponse
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {Currency[]} [supported_currency]
 */
/**
 * @typedef StoreLatLong
 * @property {string} [type]
 * @property {number[]} [coordinates]
 */
/**
 * @typedef OptedStoreAddress
 * @property {string} [state]
 * @property {string} [address1]
 * @property {StoreLatLong} [lat_long]
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [city]
 */
/**
 * @typedef OrderingStore
 * @property {OptedStoreAddress} [address]
 * @property {string} [_id]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [pincode]
 * @property {string} [code]
 */
/**
 * @typedef OrderingStores
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {number} [__v]
 */
/**
 * @typedef OrderingStoresResponse
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 */
/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */
/**
 * @typedef State
 * @property {boolean} [is_public]
 * @property {boolean} [is_display]
 * @property {boolean} [is_archived]
 */
/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */
/**
 * @typedef DisplayMeta
 * @property {string} [subtitle]
 * @property {string} [description]
 * @property {DisplayMetaDict} [remove]
 * @property {DisplayMetaDict} [apply]
 * @property {string} [title]
 * @property {DisplayMetaDict} [auto]
 */
/**
 * @typedef Identifier
 * @property {string[]} [collection_id]
 * @property {string[]} [article_id]
 * @property {number[]} [item_id]
 * @property {number[]} [store_id]
 * @property {number[]} [category_id]
 * @property {string[]} [user_id]
 * @property {number[]} [brand_id]
 * @property {number[]} [company_id]
 */
/**
 * @typedef CouponDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */
/**
 * @typedef Validity
 * @property {number} [priority]
 */
/**
 * @typedef CouponSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {Object[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} [end]
 */
/**
 * @typedef RuleDefinition
 * @property {string} applicable_on
 * @property {boolean} [auto_apply]
 * @property {string[]} [scope]
 * @property {string} type
 * @property {string} [currency_code]
 * @property {string} value_type
 * @property {boolean} [is_exact]
 * @property {string} calculate_on
 */
/**
 * @typedef Validation
 * @property {string} [user_registered_after]
 * @property {string[]} [app_id]
 * @property {boolean} [anonymous]
 */
/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */
/**
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */
/**
 * @typedef PaymentModes
 * @property {string[]} [types]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [networks]
 * @property {string[]} [codes]
 */
/**
 * @typedef PostOrder
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */
/**
 * @typedef UsesRemaining
 * @property {number} [app]
 * @property {number} [total]
 * @property {number} [user]
 */
/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [maximum]
 * @property {UsesRemaining} [remaining]
 */
/**
 * @typedef Restrictions
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {number[]} [user_groups]
 * @property {PriceRange} [price_range]
 * @property {string[]} [platforms]
 * @property {boolean} [coupon_allowed]
 * @property {Object} [payments]
 * @property {PostOrder} [post_order]
 * @property {UsesRestriction} [uses]
 * @property {number[]} [ordering_stores]
 */
/**
 * @typedef Rule
 * @property {number} [max]
 * @property {number} [key]
 * @property {number} [discount_qty]
 * @property {number} [value]
 * @property {number} [min]
 */
/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */
/**
 * @typedef Ownership
 * @property {string} payable_category
 * @property {string} payable_by
 */
/**
 * @typedef CouponAdd
 * @property {CouponAuthor} [author]
 * @property {string} type_slug
 * @property {string} code
 * @property {State} [state]
 * @property {DisplayMeta} display_meta
 * @property {Identifier} identifiers
 * @property {CouponDateMeta} [date_meta]
 * @property {Validity} validity
 * @property {string[]} [tags]
 * @property {CouponSchedule} [_schedule]
 * @property {RuleDefinition} rule_definition
 * @property {Validation} [validation]
 * @property {Restrictions} [restrictions]
 * @property {Rule[]} rule
 * @property {CouponAction} [action]
 * @property {Ownership} ownership
 */
/**
 * @typedef CouponsResponse
 * @property {CouponAdd} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SuccessMessage
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef OperationErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef CouponUpdate
 * @property {CouponAuthor} [author]
 * @property {string} type_slug
 * @property {string} code
 * @property {State} [state]
 * @property {DisplayMeta} display_meta
 * @property {Identifier} identifiers
 * @property {CouponDateMeta} [date_meta]
 * @property {Validity} validity
 * @property {string[]} [tags]
 * @property {CouponSchedule} [_schedule]
 * @property {RuleDefinition} rule_definition
 * @property {Validation} [validation]
 * @property {Restrictions} [restrictions]
 * @property {Rule[]} rule
 * @property {CouponAction} [action]
 * @property {Ownership} ownership
 */
/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */
/**
 * @typedef CompareObject
 * @property {number} [greater_than]
 * @property {number} [less_than_equals]
 * @property {number} [less_than]
 * @property {number} [greater_than_equals]
 * @property {number} [equals]
 */
/**
 * @typedef ItemCriteria
 * @property {number[]} [item_brand]
 * @property {string[]} [item_exclude_sku]
 * @property {string[]} [item_sku]
 * @property {CompareObject} [cart_quantity]
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_store]
 * @property {number[]} [item_exclude_store]
 * @property {number[]} [item_exclude_category]
 * @property {boolean} [all_items]
 * @property {number[]} [item_id]
 * @property {string[]} [item_size]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_category]
 * @property {number[]} [item_company]
 * @property {number[]} [item_exclude_company]
 * @property {CompareObject} [cart_total]
 */
/**
 * @typedef DiscountOffer
 * @property {string} [code]
 * @property {number} [max_discount_amount]
 * @property {number} [max_offer_quantity]
 * @property {number} [min_offer_quantity]
 * @property {number} [discount_price]
 * @property {number} [discount_percentage]
 * @property {number} [discount_amount]
 */
/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {ItemCriteria} item_criteria
 * @property {DiscountOffer} offer
 * @property {string} discount_type
 */
/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */
/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */
/**
 * @typedef PromotionPaymentModes
 * @property {string} type
 * @property {PaymentAllowValue1} [uses]
 * @property {string[]} [codes]
 */
/**
 * @typedef PostOrder1
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */
/**
 * @typedef UsesRemaining1
 * @property {number} [total]
 * @property {number} [user]
 */
/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [maximum]
 * @property {UsesRemaining1} [remaining]
 */
/**
 * @typedef UserRegistered
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef Restrictions1
 * @property {number[]} [user_groups]
 * @property {string[]} [platforms]
 * @property {number} [order_quantity]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {PostOrder1} [post_order]
 * @property {UsesRestriction1} uses
 * @property {string[]} [user_id]
 * @property {UserRegistered} [user_registered]
 * @property {boolean} [anonymous_users]
 */
/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */
/**
 * @typedef PromotionSchedule
 * @property {string} [cron]
 * @property {boolean} published
 * @property {string} start
 * @property {Object[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} [end]
 */
/**
 * @typedef Ownership1
 * @property {string} payable_category
 * @property {string} payable_by
 */
/**
 * @typedef DisplayMeta1
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [offer_text]
 */
/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */
/**
 * @typedef PromotionDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */
/**
 * @typedef PromotionListItem
 * @property {boolean} [stackable]
 * @property {DiscountRule[]} discount_rules
 * @property {Object} buy_rules
 * @property {PromotionAuthor} [author]
 * @property {string} promo_group
 * @property {Restrictions1} [restrictions]
 * @property {string} application_id
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} mode
 * @property {string} [apply_exclusive]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {string} promotion_type
 * @property {boolean} [apply_all_discount]
 * @property {number} [apply_priority]
 * @property {Ownership1} ownership
 * @property {string} [currency]
 * @property {DisplayMeta1} display_meta
 * @property {Visibility} [visiblility]
 * @property {PromotionDateMeta} [date_meta]
 */
/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PromotionAdd
 * @property {boolean} [stackable]
 * @property {DiscountRule[]} discount_rules
 * @property {Object} buy_rules
 * @property {PromotionAuthor} [author]
 * @property {string} promo_group
 * @property {Restrictions1} [restrictions]
 * @property {string} application_id
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} mode
 * @property {string} [apply_exclusive]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {string} promotion_type
 * @property {boolean} [apply_all_discount]
 * @property {number} [apply_priority]
 * @property {Ownership1} ownership
 * @property {string} [currency]
 * @property {DisplayMeta1} display_meta
 * @property {Visibility} [visiblility]
 * @property {PromotionDateMeta} [date_meta]
 */
/**
 * @typedef PromotionUpdate
 * @property {boolean} [stackable]
 * @property {DiscountRule[]} discount_rules
 * @property {Object} buy_rules
 * @property {PromotionAuthor} [author]
 * @property {string} promo_group
 * @property {Restrictions1} [restrictions]
 * @property {string} application_id
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} mode
 * @property {string} [apply_exclusive]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {string} promotion_type
 * @property {boolean} [apply_all_discount]
 * @property {number} [apply_priority]
 * @property {Ownership1} ownership
 * @property {string} [currency]
 * @property {DisplayMeta1} display_meta
 * @property {Visibility} [visiblility]
 * @property {PromotionDateMeta} [date_meta]
 */
/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */
/**
 * @typedef CartItem
 * @property {number} [quantity]
 * @property {string} product_id
 * @property {string} size
 */
/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */
/**
 * @typedef CouponBreakup
 * @property {boolean} [is_applied]
 * @property {string} [code]
 * @property {string} [type]
 * @property {string} [message]
 * @property {number} [value]
 * @property {string} [uid]
 */
/**
 * @typedef LoyaltyPoints
 * @property {boolean} [is_applied]
 * @property {number} [total]
 * @property {number} [applicable]
 * @property {string} [description]
 */
/**
 * @typedef RawBreakup
 * @property {number} [convenience_fee]
 * @property {number} [cod_charge]
 * @property {number} [gst_charges]
 * @property {number} [fynd_cash]
 * @property {number} [mrp_total]
 * @property {number} [discount]
 * @property {number} [coupon]
 * @property {number} [total]
 * @property {number} [you_saved]
 * @property {number} [vog]
 * @property {number} [subtotal]
 * @property {number} [delivery_charge]
 */
/**
 * @typedef DisplayBreakup
 * @property {string} [currency_symbol]
 * @property {string} [key]
 * @property {string[]} [message]
 * @property {string} [currency_code]
 * @property {string} [display]
 * @property {number} [value]
 */
/**
 * @typedef CartBreakup
 * @property {CouponBreakup} [coupon]
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {RawBreakup} [raw]
 * @property {DisplayBreakup[]} [display]
 */
/**
 * @typedef PromoMeta
 * @property {string} [message]
 */
/**
 * @typedef ProductPrice
 * @property {number} [selling]
 * @property {string} [currency_symbol]
 * @property {number} [add_on]
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {number} [marked]
 */
/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */
/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */
/**
 * @typedef ProductAvailability
 * @property {boolean} [is_valid]
 * @property {boolean} [out_of_stock]
 * @property {number} [other_store_quantity]
 * @property {boolean} [deliverable]
 * @property {string[]} [sizes]
 */
/**
 * @typedef BasePrice
 * @property {number} [effective]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {number} [marked]
 */
/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */
/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef ProductArticle
 * @property {string} [size]
 * @property {ArticlePriceInfo} [price]
 * @property {number} [quantity]
 * @property {Object} [extra_meta]
 * @property {BaseInfo} [store]
 * @property {string} [type]
 * @property {BaseInfo} [seller]
 * @property {string[]} [product_group_tags]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [uid]
 */
/**
 * @typedef ProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 * @property {string} [url]
 */
/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */
/**
 * @typedef ProductAction
 * @property {string} [type]
 * @property {ActionQuery} [query]
 * @property {string} [url]
 */
/**
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef CartProduct
 * @property {BaseInfo} [brand]
 * @property {ProductImage[]} [images]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {ProductAction} [action]
 * @property {CategoryInfo[]} [categories]
 * @property {number} [uid]
 */
/**
 * @typedef AppliedPromotion
 * @property {boolean} [mrp_promotion]
 * @property {string} [offer_text]
 * @property {string} [promo_id]
 * @property {string} [promotion_type]
 * @property {number} [amount]
 * @property {number} [article_quantity]
 */
/**
 * @typedef CartProductInfo
 * @property {PromoMeta} [promo_meta]
 * @property {Object} [bulk_offer]
 * @property {ProductPriceInfo} [price]
 * @property {number} [quantity]
 * @property {string} [key]
 * @property {CartProductIdentifer} identifiers
 * @property {ProductAvailability} [availability]
 * @property {string} [discount]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {ProductArticle} [article]
 * @property {string} [message]
 * @property {CartProduct} [product]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {boolean} [is_set]
 * @property {string} [coupon_message]
 * @property {Object} [parent_item_identifiers]
 */
/**
 * @typedef OpenapiCartDetailsResponse
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [is_valid]
 */
/**
 * @typedef OpenApiErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {Object} [errors]
 */
/**
 * @typedef ShippingAddress
 * @property {string} [city]
 * @property {string} [address_type]
 * @property {string} [area_code_slug]
 * @property {string} [state]
 * @property {string} [country]
 * @property {number} [pincode]
 * @property {string} [area]
 * @property {string} [name]
 * @property {number} [phone]
 * @property {string} [landmark]
 * @property {string} [address]
 * @property {string} [country_code]
 * @property {string} area_code
 * @property {string} [email]
 * @property {Object} [meta]
 */
/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {ShippingAddress} shipping_address
 * @property {CartItem} [cart_items]
 */
/**
 * @typedef PromiseTimestamp
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef PromiseFormatted
 * @property {string} [max]
 * @property {string} [min]
 */
/**
 * @typedef ShipmentPromise
 * @property {PromiseTimestamp} [timestamp]
 * @property {PromiseFormatted} [formatted]
 */
/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 */
/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [payment_id]
 * @property {Object} [extra_meta]
 * @property {string} [order_id]
 * @property {string} [current_status]
 * @property {string} [payment_gateway]
 */
/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} [name]
 * @property {number} amount
 * @property {string} mode
 * @property {MultiTenderPaymentMeta} [meta]
 */
/**
 * @typedef OpenApiFiles
 * @property {string} key
 * @property {string[]} values
 */
/**
 * @typedef CartItemMeta
 * @property {string} [group_id]
 * @property {boolean} [primary_item]
 */
/**
 * @typedef OpenApiOrderItem
 * @property {Object} [extra_meta]
 * @property {number} [quantity]
 * @property {number} price_effective
 * @property {OpenApiFiles[]} [files]
 * @property {number} cashback_applied
 * @property {number} amount_paid
 * @property {number} product_id
 * @property {number} delivery_charges
 * @property {number} discount
 * @property {string} size
 * @property {number} price_marked
 * @property {number} [employee_discount]
 * @property {number} cod_charges
 * @property {number} [loyalty_discount]
 * @property {number} coupon_effective_discount
 * @property {CartItemMeta} [meta]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 */
/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {number} coupon_value
 * @property {string} [order_id]
 * @property {number} delivery_charges
 * @property {string} [coupon]
 * @property {string} [payment_mode]
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [currency_code]
 * @property {number} cod_charges
 * @property {string} [affiliate_order_id]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} coupon_code
 * @property {OpenApiFiles[]} [files]
 * @property {number} cashback_applied
 * @property {number} cart_value
 * @property {number} [loyalty_discount]
 * @property {ShippingAddress} billing_address
 * @property {Object} [employee_discount]
 * @property {OpenApiOrderItem[]} cart_items
 */
/**
 * @typedef OpenApiCheckoutResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} order_id
 * @property {string} [order_ref_id]
 */
/**
 * @typedef AppUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [block_reason]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [user_id]
 */
/**
 * @typedef E
 * @property {Object} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */
/**
 * @typedef Giveaway
 * @property {string} [_id]
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {RewardsAudience} [audience]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {RewardsRule} [rule]
 * @property {string} [title]
 * @property {string} [updated_at]
 */
/**
 * @typedef GiveawayResponse
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef HistoryPretty
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {boolean} [claimed]
 * @property {string} [created_at]
 * @property {string} [expires_on]
 * @property {number} [points]
 * @property {number} [remaining_points]
 * @property {string} [text_1]
 * @property {string} [text_2]
 * @property {string} [text_3]
 * @property {string} [txn_name]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 */
/**
 * @typedef HistoryRes
 * @property {HistoryPretty[]} [items]
 * @property {Page} [page]
 * @property {number} [points]
 */
/**
 * @typedef Offer
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {Object} [rule]
 * @property {ShareMessages} [share]
 * @property {string} [sub_text]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [url]
 */
/**
 * @typedef Points
 * @property {number} [available]
 */
/**
 * @typedef Referral
 * @property {string} [code]
 */
/**
 * @typedef RewardUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {Referral} [referral]
 * @property {number} [uid]
 * @property {string} [updated_at]
 * @property {string} [user_block_reason]
 * @property {string} [user_id]
 */
/**
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */
/**
 * @typedef RewardsRule
 * @property {number} [amount]
 */
/**
 * @typedef ShareMessages
 * @property {string} [email]
 * @property {string} [facebook]
 * @property {string} [fallback]
 * @property {string} [message]
 * @property {string} [messenger]
 * @property {string} [sms]
 * @property {string} [text]
 * @property {string} [twitter]
 * @property {string} [whatsapp]
 */
/**
 * @typedef UserRes
 * @property {Points} [points]
 * @property {RewardUser} [user]
 */
/**
 * @typedef StatGroup
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 */
/**
 * @typedef StatsGroups
 * @property {StatGroup[]} [groups]
 */
/**
 * @typedef StatsGroupComponent
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [filters]
 */
/**
 * @typedef StatsGroupComponents
 * @property {string} [title]
 * @property {StatsGroupComponent[]} [components]
 */
/**
 * @typedef StatsRes
 * @property {string} [key]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [data]
 */
/**
 * @typedef ReceivedAt
 * @property {string} [value]
 */
/**
 * @typedef AbandonCartsDetail
 * @property {string} [properties_cart_id]
 * @property {string} [context_traits_first_name]
 * @property {string} [context_traits_last_name]
 * @property {string} [context_traits_phone_number]
 * @property {string} [context_traits_email]
 * @property {string} [context_app_application_id]
 * @property {string} [properties_breakup_values_raw_total]
 * @property {ReceivedAt} [received_at]
 */
/**
 * @typedef AbandonCartsList
 * @property {AbandonCartsDetail[]} [items]
 * @property {string} [cart_total]
 * @property {Page} [page]
 */
/**
 * @typedef AbandonCartDetail
 * @property {string} [_id]
 * @property {string} [user_id]
 * @property {string} [cart_value]
 * @property {Object[]} [articles]
 * @property {Object} [breakup]
 * @property {Object} [address]
 */
/**
 * @typedef ExportJobReq
 * @property {string} [marketplace_name]
 * @property {string} [start_time]
 * @property {string} [end_time]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 */
/**
 * @typedef ExportJobRes
 * @property {string} [status]
 * @property {string} [job_id]
 */
/**
 * @typedef ExportJobStatusRes
 * @property {string} [status]
 * @property {string} [job_id]
 * @property {string} [download_url]
 */
/**
 * @typedef GetLogsListReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 */
/**
 * @typedef MkpLogsResp
 * @property {string} [start_time_iso]
 * @property {string} [end_time_iso]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 * @property {string} [count]
 * @property {string} [status]
 */
/**
 * @typedef GetLogsListRes
 * @property {MkpLogsResp[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SearchLogReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 * @property {string} [identifier]
 * @property {string} [identifier_value]
 */
/**
 * @typedef LogInfo
 * @property {string} [_id]
 * @property {string} [status]
 * @property {string} [event_type]
 * @property {string} [marketplace_name]
 * @property {string} [event]
 * @property {string} [trace_id]
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {number} [item_id]
 * @property {string} [article_id]
 * @property {string} [seller_identifier]
 */
/**
 * @typedef SearchLogRes
 * @property {LogInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ValidityObject
 * @property {string} start
 * @property {string} end
 */
/**
 * @typedef CreateUpdateDiscount
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} app_ids
 * @property {string[]} extension_ids
 * @property {string} job_type
 * @property {string} discount_type
 * @property {string} discount_level
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 */
/**
 * @typedef DiscountJob
 * @property {string} _id
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} [app_ids]
 * @property {string} [job_type]
 * @property {string} [discount_type]
 * @property {string} [discount_level]
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {string} created_on
 * @property {string} modified_on
 * @property {UserDetails} created_by
 * @property {UserDetails} modified_by
 * @property {Object} [meta]
 */
/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items
 * @property {Page} page
 */
/**
 * @typedef FileJobResponse
 * @property {string} stage
 * @property {number} total
 * @property {number} failed
 * @property {number} company_id
 * @property {Object} [body]
 * @property {string} type
 * @property {string} file_type
 */
/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef CancelJobResponse
 * @property {boolean} success
 */
/**
 * @typedef UserDetails
 * @property {string} username
 * @property {string} user_id
 */
/**
 * @typedef BadRequestObject
 * @property {string} message
 */
/**
 * @typedef AddProxyReq
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 */
/**
 * @typedef AddProxyResponse
 * @property {string} [_id]
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [extension_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {Object} [meta]
 */
/**
 * @typedef RemoveProxyResponse
 * @property {string} [message]
 * @property {Object} [data]
 */
/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 */
/**
 * @typedef EventConfigList
 * @property {EventConfig[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EventProcessedStatus
 * @property {number} [id]
 * @property {string} [subscriber_id]
 * @property {number} [attempt]
 * @property {string} [response_code]
 * @property {string} [response_message]
 * @property {string} [created_on]
 * @property {string} [processed_on]
 * @property {boolean} [status]
 */
/**
 * @typedef EventPayload
 * @property {number} [id]
 * @property {string} [event_trace_id]
 * @property {string} [message_id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 * @property {boolean} [status]
 */
/**
 * @typedef SubscriberConfig
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id]
 */
/**
 * @typedef SubscriberResponse
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {SubscriberStatus} [status]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef SubscriberEvent
 * @property {number} [id]
 * @property {number} [subscriber_id]
 * @property {number} [event_id]
 * @property {string} [created_date]
 */
/**
 * @typedef AuthMeta
 * @property {string} [type]
 * @property {string} [secret]
 */
/**
 * @typedef Association
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
 */
/**
 * @typedef EventConfigBase
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */
/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */
/**
 * @typedef CreateLogResponse
 * @property {string} [message]
 * @property {string} [internal_message]
 */
/**
 * @typedef LogMetaObj
 * @property {Object} [modifier]
 * @property {string} [application]
 * @property {EntityObject} [entity]
 * @property {Object} [device_info]
 * @property {Object} [location]
 */
/**
 * @typedef EntityObject
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 */
/**
 * @typedef LogSchemaResponse
 * @property {LogDocs[]} [docs]
 */
/**
 * @typedef LogDocs
 * @property {EntityObj} [entity]
 * @property {Modifier} [modifier]
 * @property {DeviceInfo} [device_info]
 * @property {Location} [location]
 * @property {string} [_id]
 * @property {string} [company]
 * @property {string} [application]
 * @property {string} [sessions]
 * @property {string} [date]
 * @property {Object} [logs]
 */
/**
 * @typedef EntityObj
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 * @property {Object} [entity_details]
 */
/**
 * @typedef Modifier
 * @property {string} [user_id]
 * @property {boolean} [as_administrator]
 * @property {Object} [user_details]
 */
/**
 * @typedef DeviceInfo
 * @property {string} [user_agent]
 * @property {Object} [extra_meta]
 */
/**
 * @typedef Location
 * @property {Object} [extra_meta]
 */
/**
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */
/**
 * @typedef EntityTypeObj
 * @property {string} [entity_value]
 * @property {string} [display_name]
 */
declare class Common {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.authorization] -
     * @param {string} [arg.query] - Provide application name
     * @summary: Search Application
     * @description: Provide application name or domain url
     */
    searchApplication({ authorization, query }?: {
        authorization?: string;
        query?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.locationType] - Provide location type to query on.
     *   Possible values : country, state, city
     * @param {string} [arg.id] - Field is optional when location_type is
     *   country. If querying for state, provide id of country. If querying for
     *   city, provide id of state.
     * @summary: Get countries, states, cities
     * @description:
     */
    getLocations({ locationType, id }?: {
        locationType?: string;
        id?: string;
    }): globalThis.Promise<any>;
}
declare class Lead {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.items] - Decides that the reponse will contain the
     *   list of tickets
     * @param {boolean} [arg.filters] - Decides that the reponse will contain
     *   the ticket filters
     * @param {string} [arg.q] - Search through ticket titles and description
     * @param {string} [arg.status] - Filter tickets on status
     * @param {PriorityEnum} [arg.priority] - Filter tickets on priority
     * @param {string} [arg.category] - Filter tickets on category
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
     * @description: Gets the list of company level tickets and/or ticket filters
     */
    getTickets({ items, filters, q, status, priority, category, pageNo, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: any;
        category?: string;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.items] - Decides that the reponse will contain the
     *   list of tickets
     * @param {boolean} [arg.filters] - Decides that the reponse will contain
     *   the ticket filters
     * @param {string} [arg.q] - Search through ticket titles and description
     * @param {string} [arg.status] - Filter tickets on status
     * @param {PriorityEnum} [arg.priority] - Filter tickets on priority
     * @param {string} [arg.category] - Filter tickets on category
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
     * @description: Gets the list of company level tickets and/or ticket filters
     */
    getTicketsPaginator({ items, filters, q, status, priority, category, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: any;
        category?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddTicketPayload} arg.body
     * @summary: Creates a company level ticket
     * @description: Creates a company level ticket
     */
    createTicket({ body }?: {
        body: AddTicketPayload;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Tiket ID of the ticket to be fetched
     * @summary: Retreives ticket details of a company level ticket with ticket ID
     * @description: Retreives ticket details of a company level ticket
     */
    getTicket({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     * @summary: Edits ticket details of a company level ticket
     * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     */
    editTicket({ id, body }?: {
        id: string;
        body: EditTicketPayload;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     * @summary: Create history for specific company level ticket
     * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    createHistory({ id, body }?: {
        id: string;
        body: TicketHistoryPayload;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is to be fetched
     * @summary: Gets history list for specific company level ticket
     * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    getTicketHistory({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which feedbacks are to be fetched
     * @summary: Gets a list of feedback submitted against that ticket
     * @description: Gets a list of feedback submitted against that ticket
     */
    getFeedbacks({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which feedback is to be submitted
     * @param {TicketFeedbackPayload} arg.body
     * @summary: Submit a response for feeback form against that ticket
     * @description: Submit a response for feeback form against that ticket
     */
    submitFeedback({ id, body }?: {
        id: string;
        body: TicketFeedbackPayload;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of video room
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     */
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     */
    getVideoParticipants({ uniqueName }?: {
        uniqueName: string;
    }): globalThis.Promise<any>;
}
declare class Billing {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.plan - ID of the plan.
     * @param {string} arg.couponCode - Coupon code.
     * @summary: Check coupon validity
     * @description: Check coupon validity.
     */
    checkCouponValidity({ plan, couponCode }?: {
        plan: string;
        couponCode: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension _id
     * @param {CreateSubscriptionCharge} arg.body
     * @summary: Create subscription charge
     * @description: Register subscription charge for a seller of your extension.
     */
    createSubscriptionCharge({ extensionId, body }?: {
        extensionId: string;
        body: CreateSubscriptionCharge;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension _id
     * @param {string} arg.subscriptionId - Subscription charge _id
     * @summary: Get subscription charge details
     * @description: Get created subscription charge details
     */
    getSubscriptionCharge({ extensionId, subscriptionId }?: {
        extensionId: string;
        subscriptionId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension _id
     * @param {string} arg.subscriptionId - Subscription charge _id
     * @summary: Cancel subscription charge
     * @description: Cancel subscription and attached charges.
     */
    cancelSubscriptionCharge({ extensionId, subscriptionId }?: {
        extensionId: string;
        subscriptionId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get invoices
     * @description: Get invoices.
     */
    getInvoices({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.invoiceId - Invoice id
     * @summary: Get invoice by id
     * @description: Get invoice by id.
     */
    getInvoiceById({ invoiceId }?: {
        invoiceId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get subscription customer detail
     * @description: Get subscription customer detail.
     */
    getCustomerDetail({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SubscriptionCustomerCreate} arg.body
     * @summary: Upsert subscription customer detail
     * @description: Upsert subscription customer detail.
     */
    upsertCustomerDetail({ body }?: {
        body: SubscriptionCustomerCreate;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get current subscription detail
     * @description: If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.
     */
    getSubscription({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get subscription subscription limits
     * @description: Get subscription subscription limits.
     */
    getFeatureLimitConfig({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SubscriptionActivateReq} arg.body
     * @summary: Activate subscription
     * @description: It will activate subscription plan for customer
     */
    activateSubscriptionPlan({ body }?: {
        body: SubscriptionActivateReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CancelSubscriptionReq} arg.body
     * @summary: Cancel subscription
     * @description: It will cancel current active subscription.
     */
    cancelSubscriptionPlan({ body }?: {
        body: CancelSubscriptionReq;
    }): globalThis.Promise<any>;
}
declare class Communication {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @summary: Get system notifications
     * @description: Get system notifications
     */
    getSystemNotifications({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] -
     * @summary: Get system notifications
     * @description: Get system notifications
     */
    getSystemNotificationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
}
declare class Payment {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.uniqueExternalId] - Fetch payouts using unique external id
     * @summary: Get All Payouts
     * @description: Get All Payouts
     */
    getAllPayouts({ uniqueExternalId }?: {
        uniqueExternalId?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PayoutRequest} arg.body
     * @summary: Save Payout
     * @description: Save Payout
     */
    savePayout({ body }?: {
        body: PayoutRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {PayoutRequest} arg.body
     * @summary: Update Payout
     * @description: Update Payout
     */
    updatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: PayoutRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {UpdatePayoutRequest} arg.body
     * @summary: Partial Update Payout
     * @description: Partial Update Payout
     */
    activateAndDectivatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: UpdatePayoutRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @summary: Delete Payout
     * @description: Delete Payout
     */
    deletePayout({ uniqueTransferNo }?: {
        uniqueTransferNo: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.uniqueExternalId] - Unique external id
     * @summary: List Subscription Payment Method
     * @description: Get all  Subscription  Payment Method
     */
    getSubscriptionPaymentMethod({ uniqueExternalId }?: {
        uniqueExternalId?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueExternalId -
     * @param {string} arg.paymentMethodId -
     * @summary: Delete Subscription Payment Method
     * @description: Uses this api to Delete Subscription Payment Method
     */
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId }?: {
        uniqueExternalId: string;
        paymentMethodId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List Subscription Config
     * @description: Get all  Subscription Config details
     */
    getSubscriptionConfig({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SaveSubscriptionSetupIntentRequest} arg.body
     * @summary: Save Subscription Setup Intent
     * @description: Uses this api to Save Subscription Setup Intent
     */
    saveSubscriptionSetupIntent({ body }?: {
        body: SaveSubscriptionSetupIntentRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.ifscCode] -
     * @summary: Ifsc Code Verification
     * @description: Get True/False for correct IFSC Code for adding bank details for refund
     */
    verifyIfscCode({ ifscCode }?: {
        ifscCode?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Payout config for penny drop and cancel cheque upload
     * @description: Payout config for penny drop and cancel cheque upload
     */
    getPayoutPennyDropAndChequeConfig({}?: any): globalThis.Promise<any>;
}
declare class Order {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateShipmentStatusBody} arg.body
     * @summary: Update status of Shipment
     * @description: Update Shipment Status
     */
    shipmentStatusUpdate({ body }?: {
        body: UpdateShipmentStatusBody;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.bagId - Bag Id
     * @summary: Get Activity Status
     * @description: Get Activity Status
     */
    activityStatus({ bagId }?: {
        bagId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateProcessShipmenstRequestBody} arg.body
     * @summary: Update Store Process-Shipment
     * @description: Update Store Process-Shipment
     */
    storeProcessShipmentUpdate({ body }?: {
        body: UpdateProcessShipmenstRequestBody;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - Shipment Id
     * @summary: Check Refund is available or not
     * @description: Check Refund is available or not
     */
    checkRefund({ shipmentId }?: {
        shipmentId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CanBreakRequestBody} arg.body
     * @summary: Decides if Shipment bags can break
     * @description: Decides if Shipment bags can break
     */
    shipmentBagsCanBreak({ body }?: {
        body: CanBreakRequestBody;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageNo] - Current page number
     * @param {string} [arg.pageSize] - Page limit
     * @param {string} [arg.fromDate] - From Date
     * @param {string} [arg.toDate] - To Date
     * @param {boolean} [arg.isPrioritySort] - Sorting Order
     * @param {boolean} [arg.lockStatus] - Hide Lock Status
     * @param {string} [arg.q] - Keyword for Search
     * @param {string} [arg.stage] - Specefic Order Stage
     * @param {string} [arg.salesChannels] - Selected Sales Channel
     * @param {string} [arg.orderId] - Order Id
     * @param {string} [arg.stores] - Selected Stores
     * @param {string} [arg.deploymentStores] - Selected Deployment Stores
     * @param {string} [arg.status] - Status of order
     * @param {string} [arg.dp] - Delivery Partners
     * @param {boolean} [arg.shortenUrls] - Shorten URL option
     * @param {string} [arg.filterType] - Filters
     * @summary: Get Orders for company based on Company Id
     * @description: Get Orders
     */
    getOrdersByCompanyId({ pageNo, pageSize, fromDate, toDate, isPrioritySort, lockStatus, q, stage, salesChannels, orderId, stores, deploymentStores, status, dp, shortenUrls, filterType, }?: {
        pageNo?: string;
        pageSize?: string;
        fromDate?: string;
        toDate?: string;
        isPrioritySort?: boolean;
        lockStatus?: boolean;
        q?: string;
        stage?: string;
        salesChannels?: string;
        orderId?: string;
        stores?: string;
        deploymentStores?: string;
        status?: string;
        dp?: string;
        shortenUrls?: boolean;
        filterType?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
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
     * @summary: Get Order Lanes Count for company based on Company Id
     * @description: Get Orders Seperate Lane Count
     */
    getOrderLanesCountByCompanyId({ pageNo, pageSize, fromDate, toDate, q, stage, salesChannels, orderId, stores, status, shortenUrls, filterType, }?: {
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
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.orderId] - Order Id
     * @param {string} [arg.next] - Next
     * @param {string} [arg.previous] - Previous
     * @summary: Get Order Details for company based on Company Id and Order Id
     * @description: Get Orders
     */
    getOrderDetails({ orderId, next, previous }?: {
        orderId?: string;
        next?: string;
        previous?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
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
     * @summary: Get Orders for company based on Company Id
     * @description: Get Orders
     */
    getPicklistOrdersByCompanyId({ pageNo, pageSize, fromDate, toDate, q, stage, salesChannels, orderId, stores, status, shortenUrls, filterType, }?: {
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
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {string} arg.addressCategory - Category of the address it falls
     *   into(billing or delivery).
     * @summary: Use this API to get address of a shipment using its shipment ID and Address Category.
     * @description: Get Shipment Address
     */
    getShipmentAddress({ shipmentId, addressCategory }?: {
        shipmentId: string;
        addressCategory: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - ID of the shipment. An order may contain
     *   multiple items and may get divided into one or more shipment, each
     *   having its own ID.
     * @param {string} arg.addressCategory - Category of the address it falls
     *   into(billing or delivery).
     * @param {UpdateShipmentAddressRequest} arg.body
     * @summary: Use this API to update address of a shipment using its shipment ID and Address Category.
     * @description: Update Shipment Address
     */
    updateShipmentAddress({ shipmentId, addressCategory, body }?: {
        shipmentId: string;
        addressCategory: string;
        body: UpdateShipmentAddressRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get Ping
     * @description: Get Ping
     */
    getPing({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get Voice Callback
     * @description: Voice Callback
     */
    voiceCallback({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.caller - Caller contact number
     * @param {string} arg.receiver - Receiver contact number
     * @summary: Get Voice Click to Call
     * @description: Voice Click to Call
     */
    voiceClickToCall({ caller, receiver }?: {
        caller: string;
        receiver: string;
    }): globalThis.Promise<any>;
}
declare class Catalog {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - A search string that is searched with product
     *   bundle name.
     * @param {string[]} [arg.slug] - Slugs of bundles to be retrieved.
     * @summary: List all Product Bundles
     * @description: Get all product bundles for a particular company
     */
    getProductBundle({ q, slug }?: {
        q?: string;
        slug?: string[];
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ProductBundleRequest} arg.body
     * @summary: Create Product Bundle
     * @description: Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id
     */
    createProductBundle({ body }?: {
        body: ProductBundleRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to retrieve.
     * @summary: Get a particular Product Bundle details
     * @description: Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`
     */
    getProductBundleDetail({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @param {ProductBundleUpdateRequest} arg.body
     * @summary: Update a Product Bundle
     * @description: Update a Product Bundle by its id. On successful request, returns the updated product bundle
     */
    updateProductBundle({ id, body }?: {
        id: string;
        body: ProductBundleUpdateRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.active] - Filter size guide on basis of active, in-active
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.tag] - To filter size guide on basis of tag.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @summary: Get list of size guides
     * @description: This API allows to view all the size guides associated to the seller.
     */
    getSizeGuides({ active, q, tag, pageNo, pageSize }?: {
        active?: boolean;
        q?: string;
        tag?: string;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ValidateSizeGuide} arg.body
     * @summary: Create a size guide.
     * @description: This API allows to create a size guide associated to a brand.
     */
    createSizeGuide({ body }?: {
        body: ValidateSizeGuide;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Id of the size guide to be viewed.
     * @summary: Get a single size guide.
     * @description: This API helps to get data associated to a size guide.
     */
    getSizeGuide({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Mongo id of the size guide to be edited
     * @param {ValidateSizeGuide} arg.body
     * @summary: Edit a size guide.
     * @description: This API allows to edit a size guide.
     */
    updateSizeGuide({ id, body }?: {
        id: string;
        body: ValidateSizeGuide;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.sellerAppId - Id of the seller application which is
     *   serving the invetory/catalog of the company
     * @summary: Analytics data of catalog and inventory that are being cross-selled.
     * @description: Analytics data of catalog and inventory that are being cross-selled.
     */
    getSellerInsights({ sellerAppId }?: {
        sellerAppId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.marketplace - The marketplace for which the detail
     *   needs to be retrieved.
     * @param {OptInPostRequest} arg.body
     * @summary: Create/Update opt-in infomation.
     * @description: Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`
     */
    createMarketplaceOptin({ marketplace, body }?: {
        marketplace: string;
        body: OptInPostRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get opt-in infomation.
     * @description: Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`
     */
    getMarketplaceOptinDetail({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get the Company details.
     * @description: Get the details of the company associated with the given company_id passed.
     */
    getCompanyDetail({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.isActive] - The is_active status for the optin id.
     * @param {boolean} [arg.q] - The search value to filter the list.
     * @param {number} [arg.pageNo] - The number of page for the company id.
     * @param {number} [arg.pageSize] - Number of records that can be seen on
     *   the page for the company id.
     * @param {string} [arg.marketplace] - The marketplace platform associated
     *   with the company id.
     * @summary: Get the Company Brand details of Optin.
     * @description: Get the details of the Brands associated with the given company_id passed.
     */
    getCompanyBrandDetail({ isActive, q, pageNo, pageSize, marketplace }?: {
        isActive?: boolean;
        q?: boolean;
        pageNo?: number;
        pageSize?: number;
        marketplace?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get the Company metrics
     * @description: Get the Company metrics associated with the company ID passed.
     */
    getCompanyMetrics({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search related the store for the company id.
     * @param {number} [arg.pageNo] - The number of page for the company id.
     * @param {number} [arg.pageSize] - Number of records that can be seen on
     *   the page for the company id.
     * @summary: Get the Store details.
     * @description: Get the details of the store associated with the company ID passed.
     */
    getStoreDetail({ q, pageNo, pageSize }?: {
        q?: string;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.attributeSlug - Slug of the attribute for which you
     *   want to view the genders
     * @summary: Get gender attribute details
     * @description: This API allows to view the gender attribute details.
     */
    getGenderAttribute({ attributeSlug }?: {
        attributeSlug: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.departments - A `department` is name of a departments
     *   whose category needs to be listed. Can specify multiple departments.
     * @param {string} arg.itemType - An `item_type` is the type of item, it can
     *   be `set`, `standard`, `digital`, etc.
     * @summary: List Department specifiec product categories
     * @description: Allows you to list all product categories values for the departments specified
     */
    listProductTemplateCategories({ departments, itemType }?: {
        departments: string;
        itemType: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.name] - Can search departments by passing name.
     * @param {string} [arg.search] - Can search departments by passing name of
     *   the department in search parameter.
     * @param {boolean} [arg.isActive] - Can query for departments based on
     *   whether they are active or inactive.
     * @summary: List all Departments.
     * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type.
     */
    listDepartmentsData({ pageNo, pageSize, name, search, isActive }?: {
        pageNo?: number;
        pageSize?: number;
        name?: string;
        search?: string;
        isActive?: boolean;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DepartmentCreateUpdate} arg.body
     * @summary: Create the department.
     * @description: Create departments using the API.
     */
    createDepartments({ body }?: {
        body: DepartmentCreateUpdate;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - A `uid` is a unique identifier of a department.
     * @summary: Get specific departments details by passing in unique id of the department.
     * @description: Allows you to get department data, by uid.
     */
    getDepartmentData({ uid }?: {
        uid: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - A `uid` is a unique identifier of a department.
     * @param {DepartmentCreateUpdate} arg.body
     * @summary: Update the department by their uid.
     * @description: Update the department by their uid using this API.
     */
    updateDepartment({ uid, body }?: {
        uid: string;
        body: DepartmentCreateUpdate;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.department - A `department` is the name of a
     *   particular department.
     * @summary: List all Templates
     * @description: Allows you to list all product templates, also can filter by department
     */
    listProductTemplate({ department }?: {
        department: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A `slug` is a unique identifier for a
     *   particular template.
     * @summary: Validate Product Template Schema
     * @description: Allows you to list all product templates validation values for all the fields present in the database
     */
    validateProductTemplate({ slug }?: {
        slug: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A `slug` is a unique identifier for a
     *   particular template.
     * @summary: Download Product Template View
     * @description: Allows you to download product template data
     */
    downloadProductTemplateViews({ slug }?: {
        slug: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.itemType - An `item_type` defines the type of item.
     * @summary: Download Product Template View
     * @description: Allows you to download product template data
     */
    downloadProductTemplateView({ itemType }?: {
        itemType: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.itemType - An `item_type` defines the type of item.
     *   The default value is standard.
     * @summary: Validate Product Template Schema
     * @description: Allows you to list all product templates validation values for all the fields present in the database
     */
    validateProductTemplateSchema({ itemType }?: {
        itemType: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List HSN Codes
     * @description: Allows you to list all hsn Codes
     */
    listHSNCodes({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Allows you to list all product templates export list details
     * @description: Can view details including trigger data, task id , etc.
     */
    listProductTemplateExportDetails({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.filter - A `filter` is the unique identifier of the
     *   type of value required.
     * @summary: Allows you to list all values for Templates, Brands or Type
     * @description: The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same
     */
    listTemplateBrandTypeValues({ filter }?: {
        filter: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.level] - Get category for multiple levels
     * @param {string} [arg.departments] - Get category for multiple departments filtered
     * @param {string} [arg.q] - Get multiple categories filtered by search string
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @summary: Get product categories list
     * @description: This API gets meta associated to product categories.
     */
    listCategories({ level, departments, q, pageNo, pageSize }?: {
        level?: string;
        departments?: string;
        q?: string;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CategoryRequestBody} arg.body
     * @summary: Create product categories
     * @description: This API lets user create product categories
     */
    createCategories({ body }?: {
        body: CategoryRequestBody;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - Category unique id
     * @summary: Get product category by uid
     * @description: This API gets meta associated to product categories.
     */
    getCategoryData({ uid }?: {
        uid: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uid - Category unique id
     * @param {CategoryRequestBody} arg.body
     * @summary: Update product categories
     * @description: Update a product category using this apu
     */
    updateCategory({ uid, body }?: {
        uid: string;
        body: CategoryRequestBody;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number[]} [arg.brandIds] - Get multiple products filtered by Brand Ids
     * @param {number[]} [arg.categoryIds] - Get multiple products filtered by
     *   Category Ids
     * @param {number[]} [arg.itemIds] - Get multiple products filtered by Item Ids
     * @param {number[]} [arg.departmentIds] - Get multiple products filtered by
     *   Department Ids
     * @param {string[]} [arg.itemCode] - Get multiple products filtered by Item Code
     * @param {string} [arg.q] - Get multiple products filtered by q string
     * @param {string[]} [arg.tags] - Get multiple products filtered by tags
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @summary: Get product list
     * @description: This API gets meta associated to products.
     */
    getProducts({ brandIds, categoryIds, itemIds, departmentIds, itemCode, q, tags, pageNo, pageSize, }?: {
        brandIds?: number[];
        categoryIds?: number[];
        itemIds?: number[];
        departmentIds?: number[];
        itemCode?: string[];
        q?: string;
        tags?: string[];
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ProductCreateUpdate} arg.body
     * @summary: Create a product.
     * @description: This API allows to create product.
     */
    createProduct({ body }?: {
        body: ProductCreateUpdate;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.category - It is the name of the l3 cateogry
     * @param {boolean} [arg.filter] - If true, returns filtered values, else
     *   returns all the attributes
     * @summary: Get list of all the attributes by their l3_categories
     * @description: This API allows to list all the attributes by their l3_categories.
     */
    getProductAttributes({ category, filter }?: {
        category: string;
        filter?: boolean;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.itemCode] - Item code of the product.
     * @param {number} arg.itemId - Item Id of the product.
     * @param {number} [arg.brandUid] - Brand Id of the product.
     * @summary: Get a single product.
     * @description: This API helps to get data associated to a particular product.
     */
    getProduct({ itemId, itemCode, brandUid }?: {
        itemCode?: string;
        itemId: number;
        brandUid?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Id of the product to be updated.
     * @param {ProductCreateUpdate} arg.body
     * @summary: Edit a product.
     * @description: This API allows to edit product.
     */
    editProduct({ itemId, body }?: {
        itemId: number;
        body: ProductCreateUpdate;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Id of the product to be updated.
     * @summary: Delete a product.
     * @description: This API allows to delete product.
     */
    deleteProduct({ itemId }?: {
        itemId: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Validate product/size data
     * @description: This API validates product data.
     */
    getProductValidation({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.itemCode] - Item code of the product size.
     * @param {number} arg.itemId - Item Id of the product size.
     * @param {number} [arg.brandUid] - Brand Id of the product size.
     * @param {number} [arg.uid] - Id of the product size.
     * @summary: Get a single product size.
     * @description: This API helps to get data associated to a particular product size.
     */
    getProductSize({ itemId, itemCode, brandUid, uid }?: {
        itemCode?: string;
        itemId: number;
        brandUid?: number;
        uid?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: Get a list of all bulk product upload jobs.
     * @description: This API helps to get bulk product upload jobs data.
     */
    getProductBulkUploadHistory({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BulkJob} arg.body
     * @summary: Create a Bulk product to upload job.
     * @description: This API helps to create a bulk products upload job.
     */
    createBulkProductUploadJob({ body }?: {
        body: BulkJob;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.batchId - Batch Id in which assets to be uploaded.
     * @param {BulkProductRequest} arg.body
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     */
    createProductsInBulk({ batchId, body }?: {
        batchId: string;
        body: BulkProductRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.batchId - Batch Id of the bulk product job to be deleted.
     * @summary: Delete Bulk product job.
     * @description: This API allows to delete bulk product job associated with company.
     */
    deleteProductBulkJob({ batchId }?: {
        batchId: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get a list of all tags associated with company.
     * @description: This API helps to get tags data associated to a particular company.
     */
    getProductTags({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: Get a list of all bulk asset jobs.
     * @description: This API helps to get bulk asset jobs data associated to a particular company.
     */
    getProductAssetsInBulk({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ProductBulkAssets} arg.body
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job.
     */
    createProductAssetsInBulk({ body }?: {
        body: ProductBulkAssets;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item Id of the product associated with size
     *   to be deleted.
     * @param {number} arg.size - Size to be deleted.
     * @summary: Delete a Size associated with product.
     * @description: This API allows to delete size associated with product.
     */
    deleteSize({ itemId, size }?: {
        itemId: number;
        size: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.size - Size of which inventory is to get.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search with help of store code.
     * @param {boolean} [arg.sellable] - Filter on whether product is in stock or not.
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store.
     */
    getInventoryBySize({ itemId, size, pageNo, pageSize, q, sellable }?: {
        itemId: string;
        size: string;
        pageNo?: number;
        pageSize?: number;
        q?: string;
        sellable?: boolean;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.size - Size in which inventory is to be added.
     * @param {InventoryRequest} arg.body
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     */
    addInventory({ itemId, size, body }?: {
        itemId: number;
        size: string;
        body: InventoryRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.sizeIdentifier - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search with help of store code.
     * @param {number[]} [arg.locationIds] - Search by store ids.
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store.
     */
    getInventoryBySizeIdentifier({ itemId, sizeIdentifier, pageNo, pageSize, q, locationIds, }?: {
        itemId: string;
        sizeIdentifier: string;
        pageNo?: number;
        pageSize?: number;
        q?: string;
        locationIds?: number[];
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.size - Size that is to be deleted.
     * @param {number} arg.itemId - Id of the product associated with Inventory
     *   to be deleted.
     * @param {number} arg.locationId - Location ID of store of which inventory
     *   is to be deleted.
     * @summary: Delete a Inventory.
     * @description: This API allows to delete inventory of a particular product for particular company.
     */
    deleteInventory({ size, itemId, locationId }?: {
        size: string;
        itemId: number;
        locationId: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: Get a list of all bulk Inventory upload jobs.
     * @description: This API helps to get bulk Inventory upload jobs data.
     */
    getInventoryBulkUploadHistory({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BulkJob} arg.body
     * @summary: Create a Bulk Inventory upload Job.
     * @description: This API helps to create a bulk Inventory upload job.
     */
    createBulkInventoryJob({ body }?: {
        body: BulkJob;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.batchId - Batch Id of the bulk create job.
     * @param {InventoryBulkRequest} arg.body
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     */
    createBulkInventory({ batchId, body }?: {
        batchId: string;
        body: InventoryBulkRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.batchId - Batch Id of the bulk delete job.
     * @summary: Delete Bulk Inventory job.
     * @description: This API allows to delete bulk Inventory job associated with company.
     */
    deleteBulkInventoryJob({ batchId }?: {
        batchId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get Inventory export history.
     * @description: This API helps to get Inventory export history.
     */
    getInventoryExport({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {InventoryExportRequest} arg.body
     * @summary: Create a Inventory export Job.
     * @description: This API helps to create a Inventory export job.
     */
    createInventoryExportJob({ body }?: {
        body: InventoryExportRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.filterType] - Filter type from any one of ['brand',
     *   'store', 'type']
     * @summary: Get List of different filters for inventory export
     * @description: This API allows get List of different filters like brand, store, and type for inventory export.
     */
    exportInventoryConfig({ filterType }?: {
        filterType?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.sellerIdentifier - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @param {InventoryRequestSchemaV2} arg.body
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     */
    updateRealtimeInventory({ itemId, sellerIdentifier, body }?: {
        itemId: number;
        sellerIdentifier: string;
        body: InventoryRequestSchemaV2;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.sellerIdentifier - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @param {InventoryRequestSchemaV2} arg.body
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     */
    deleteRealtimeInventory({ itemId, sellerIdentifier, body }?: {
        itemId: number;
        sellerIdentifier: string;
        body: InventoryRequestSchemaV2;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {InventoryRequestSchemaV2} arg.body
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     */
    updateInventories({ body }?: {
        body: InventoryRequestSchemaV2;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Page no
     * @param {number} [arg.pageSize] - Page size
     * @param {string} [arg.q] - Search using hsn code.
     * @summary: Hsn Code List.
     * @description: Hsn Code List.
     */
    getAllHsnCodes({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {HsnUpsert} arg.body
     * @summary: Create Hsn Code.
     * @description: Create Hsn Code.
     */
    createHsnCode({ body }?: {
        body: HsnUpsert;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Unique id
     * @summary: Fetch Hsn Code.
     * @description: Fetch Hsn Code.
     */
    getHsnCode({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Unique id
     * @param {HsnUpsert} arg.body
     * @summary: Update Hsn Code.
     * @description: Update Hsn Code.
     */
    updateHsnCode({ id, body }?: {
        id: string;
        body: HsnUpsert;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BulkHsnUpsert} arg.body
     * @summary: Bulk Create or Update Hsn Code.
     * @description: Bulk Create or Update Hsn Code.
     */
    bulkHsnCode({ body }?: {
        body: BulkHsnUpsert;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Page no
     * @param {number} [arg.pageSize] - Page size
     * @param {string} [arg.q] - Search using hsn code, description, reporting_hsn
     * @param {string} [arg.type] - Search using type
     * @summary: Hsn Code List.
     * @description: Hsn Code List.
     */
    getAllProductHsnCodes({ pageNo, pageSize, q, type }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
        type?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.reportingHsn - Reporting_hsn
     * @summary: Hsn Code List.
     * @description: Hsn Code List.
     */
    getSingleProductHSNCode({ reportingHsn }?: {
        reportingHsn: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AssignStore} arg.body
     * @summary: Location Reassignment
     * @description:
     */
    getOptimalLocations({ body }?: {
        body: AssignStore;
    }): globalThis.Promise<any>;
}
declare class CompanyProfile {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get company profile
     * @description: This API allows to view the company profile of the seller account.
     */
    cbsOnboardGet({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateCompany} arg.body
     * @summary: Edit company profile
     * @description: This API allows to edit the company profile of the seller account.
     */
    updateCompany({ body }?: {
        body: UpdateCompany;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get company metrics
     * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
     */
    getCompanyMetrics({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.brandId - Id of the brand to be viewed.
     * @summary: Get a single brand.
     * @description: This API helps to get data associated to a particular brand.
     */
    getBrand({ brandId }?: {
        brandId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.brandId - Id of the brand to be viewed.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     * @summary: Edit a brand.
     * @description: This API allows to edit meta of a brand.
     */
    editBrand({ brandId, body }?: {
        brandId: string;
        body: CreateUpdateBrandRequestSerializer;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     * @summary: Create a Brand.
     * @description: This API allows to create a brand associated to a company.
     */
    createBrand({ body }?: {
        body: CreateUpdateBrandRequestSerializer;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.q] - Search term for name.
     * @summary: Get brands associated to a company
     * @description: This API helps to get view brands associated to a particular company.
     */
    getBrands({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.q] - Search term for name.
     * @summary: Get brands associated to a company
     * @description: This API helps to get view brands associated to a particular company.
     */
    getBrandsPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {CompanyBrandPostRequestSerializer} arg.body
     * @summary: Create a company brand mapping.
     * @description: This API allows to create a company brand mapping, for a already existing brand in the system.
     */
    createCompanyBrandMapping({ body }?: {
        body: CompanyBrandPostRequestSerializer;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @summary: Get list of locations
     * @description: This API allows to view all the locations associated to a company.
     */
    getLocations({ storeType, q, stage, pageNo, pageSize }?: {
        storeType?: string;
        q?: string;
        stage?: string;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @summary: Get list of locations
     * @description: This API allows to view all the locations associated to a company.
     */
    getLocationsPaginator({ storeType, q, stage, pageSize }?: {
        storeType?: string;
        q?: string;
        stage?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {LocationSerializer} arg.body
     * @summary: Create a location associated to a company.
     * @description: This API allows to edit a location associated to a company.
     */
    createLocation({ body }?: {
        body: LocationSerializer;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.locationId - Id of the location which you want to view.
     * @summary: Get details of a specific location.
     * @description: This API helps to get data associated to a specific location.
     */
    getLocationDetail({ locationId }?: {
        locationId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.locationId - Id of the location which you want to edit.
     * @param {LocationSerializer} arg.body
     * @summary: Edit a location asscoiated to a company.
     * @description: This API allows to edit a location associated to a company.
     */
    updateLocation({ locationId, body }?: {
        locationId: string;
        body: LocationSerializer;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BulkLocationSerializer} arg.body
     * @summary: Create a location asscoiated to a company in bulk.
     * @description: This API allows to create a location associated to a company.
     */
    createLocationBulk({ body }?: {
        body: BulkLocationSerializer;
    }): globalThis.Promise<any>;
}
declare class FileStorage {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {StartRequest} arg.body
     * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `startUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `completeUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    startUpload({ namespace, body }?: {
        namespace: string;
        body: StartRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {StartResponse} arg.body
     * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `startUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `completeUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    completeUpload({ namespace, body }?: {
        namespace: string;
        body: StartResponse;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SignUrlRequest} arg.body
     * @summary: Explain here
     * @description: Describe here
     */
    getSignUrls({ body }?: {
        body: SignUrlRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.sync] - Sync
     * @param {BulkRequest} arg.body
     * @summary: Copy Files
     * @description: Copy Files
     */
    copyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {number} [arg.pageNo] - Page no
     * @summary: Browse Files
     * @description: Browse Files
     */
    browse({ namespace, pageNo }?: {
        namespace: string;
        pageNo?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @summary: Browse Files
     * @description: Browse Files
     */
    browsePaginator({ namespace }?: {
        namespace: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.url - Url
     * @summary: Proxy
     * @description: Proxy
     */
    proxy({ url }?: {
        url: string;
    }): globalThis.Promise<any>;
    upload({ data, file_name, content_type, namespace, size, tags, }?: {
        data: any;
        file_name: any;
        content_type: any;
        namespace: any;
        size: any;
        tags: any;
    }): globalThis.Promise<any>;
}
declare class Inventory {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns all configuration detail of a company
     */
    getConfigByCompany({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SuppressStorePayload} arg.body
     * @summary: Get Slingshot Configuration Of  A Company
     * @description: REST Endpoint that returns all configuration detail of a company
     */
    suppressStores({ body }?: {
        body: SuppressStorePayload;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @summary: Get Job Configs For A Company
     * @description: REST Endpoint that returns all job configs for a company
     */
    getJobsByCompany({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {JobConfigDTO} arg.body
     * @summary: Updates An Existing Job Config
     * @description: REST Endpoint that updates a job config
     */
    updateJob({ body }?: {
        body: JobConfigDTO;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {JobConfigDTO} arg.body
     * @summary: Creates A New Job Config
     * @description: REST Endpoint that creates a new job config
     */
    createJob({ body }?: {
        body: JobConfigDTO;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.jobId - Job Id
     * @summary: Get Job Code Steps
     * @description: REST Endpoint that returns Inventory Job Steps
     */
    getJobSteps({ jobId }?: {
        jobId: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.integrationId - Integration Id
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @summary: Get Job Configs By Company And Integration
     * @description: REST Endpoint that returns all job configs by company And integration
     */
    getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.integrationId - IntegrationId
     * @summary: Disable Job Config
     * @description: REST Endpoint that disables Inventory Job Config
     */
    disable({ integrationId }?: {
        integrationId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get Job Configs Defaults
     * @description: REST Endpoint that returns default fields job configs by company And integration
     */
    getJobConfigDefaults({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.code - Job Code
     * @summary: Get Job Config By Code
     * @description: REST Endpoint that returns job config by code
     */
    getJobByCode({ code }?: {
        code: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.code - Code
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @param {string} [arg.status] - Status
     * @param {string} [arg.date] - From Date
     * @summary: Get Job Metrics
     * @description: REST Endpoint that returns Inventory Run History For A Job Code
     */
    getJobCodeMetrics({ code, pageNo, pageSize, status, date }?: {
        code: string;
        pageNo?: number;
        pageSize?: number;
        status?: string;
        date?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.integrationId - Integration Id
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @summary: Get Job Codes By Company And Integration
     * @description: REST Endpoint that returns all job codes by company And integration
     */
    getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
}
declare class Configuration {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateApplicationRequest} arg.body
     * @summary: Create application
     * @description: Create new application
     */
    createApplication({ body }?: {
        body: CreateApplicationRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] - Url encoded object used as mongodb query
     * @summary: Get list of application under company
     * @description: Get list of application under company
     */
    getApplications({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] - Url encoded object used as mongodb query
     * @summary: Get list of application under company
     * @description: Get list of application under company
     */
    getApplicationsPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all currencies
     * @description: Get all currencies
     */
    getCurrencies({}?: any): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DomainSuggestionsRequest} arg.body
     * @summary: Check domain availibility before linking to application
     * @description: Check domain availibility before linking to application. Also sends domain suggestions with similar to queried domain. \ Custom domain search is currently powered by GoDaddy provider.
     */
    getDomainAvailibility({ body }?: {
        body: DomainSuggestionsRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.id - Integration id
     * @summary: Get integration data
     * @description: Get integration data
     */
    getIntegrationById({ id }?: {
        id: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Get all available integration opt-ins
     * @description: Get all available integration opt-ins
     */
    getAvailableOptIns({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Get all available integration opt-ins
     * @description: Get all available integration opt-ins
     */
    getAvailableOptInsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.level - Integration level
     * @param {number} arg.uid - Integration level uid
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Get company/store level integration opt-ins
     * @description: Get company/store level integration opt-ins
     */
    getSelectedOptIns({ level, uid, pageNo, pageSize }?: {
        level: string;
        uid: number;
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.level - Integration level
     * @param {number} arg.uid - Integration level uid
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Get company/store level integration opt-ins
     * @description: Get company/store level integration opt-ins
     */
    getSelectedOptInsPaginator({ level, uid, pageSize }?: {
        level: string;
        uid: number;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Integration id
     * @param {string} arg.level - Integration level
     * @param {boolean} [arg.opted] - Filter on opted stores
     * @param {boolean} [arg.checkPermission] - Filter on if permissions are present
     * @summary: Get integration level config
     * @description: Get integration/integration-opt-in level config
     */
    getIntegrationLevelConfig({ id, level, opted, checkPermission }?: {
        id: string;
        level: string;
        opted?: boolean;
        checkPermission?: boolean;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Integration id
     * @param {string} arg.level - Integration level
     * @param {UpdateIntegrationLevelRequest} arg.body
     * @summary: Update a store level opt-in for integration
     * @description: Update a store level opt-in for integration
     */
    updateLevelIntegration({ id, level, body }?: {
        id: string;
        level: string;
        body: UpdateIntegrationLevelRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Integration id
     * @param {string} arg.level - Integration level
     * @param {number} arg.uid - Integration level uid
     * @summary: Get level data for integration
     * @description: Get level data for integration
     */
    getIntegrationByLevelId({ id, level, uid }?: {
        id: string;
        level: string;
        uid: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Integration id
     * @param {string} arg.level - Integration level
     * @param {number} arg.uid - Integration level uid
     * @param {IntegrationLevel} arg.body
     * @summary: Update a store level opt-in for integration
     * @description: Update a store level opt-in for integration
     */
    updateLevelUidIntegration({ id, level, uid, body }?: {
        id: string;
        level: string;
        uid: number;
        body: IntegrationLevel;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Integration id
     * @param {string} arg.level - Integration level
     * @param {number} arg.uid - Integration level uid
     * @param {string} [arg.permission] - Check opt-in for specific integration
     *   permissions
     * @summary: Check store has active integration
     * @description: API checks if a store is already opted in any other integrations
     */
    getLevelActiveIntegrations({ id, level, uid, permission }?: {
        id: string;
        level: string;
        uid: number;
        permission?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - Search text for brand name
     * @summary: Get brands by company
     * @description: Get brands by company
     */
    getBrandsByCompany({ q }?: {
        q?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {CompanyByBrandsRequest} arg.body
     * @summary: Get company by brand uids
     * @description: Get company by brand uids
     */
    getCompanyByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: CompanyByBrandsRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Current request items count
     * @param {CompanyByBrandsRequest} arg.body
     * @summary: Get company by brand uids
     * @description: Get company by brand uids
     */
    getCompanyByBrandsPaginator({ pageSize, body }?: {
        pageSize?: number;
        body: CompanyByBrandsRequest;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {StoreByBrandsRequest} arg.body
     * @summary: Get stores by brand uids
     * @description: Get stores by brand uids
     */
    getStoreByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: StoreByBrandsRequest;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Current request items count
     * @param {StoreByBrandsRequest} arg.body
     * @summary: Get stores by brand uids
     * @description: Get stores by brand uids
     */
    getStoreByBrandsPaginator({ pageSize, body }?: {
        pageSize?: number;
        body: StoreByBrandsRequest;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Get other seller applications
     * @description: Get other seller applications who has opted current company as inventory
     */
    getOtherSellerApplications({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Get other seller applications
     * @description: Get other seller applications who has opted current company as inventory
     */
    getOtherSellerApplicationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Application Id
     * @summary: Get other seller applications
     * @description: Get other seller application
     */
    getOtherSellerApplicationById({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Application Id
     * @param {OptOutInventory} arg.body
     * @summary: Opt out company or store from other seller application
     * @description: Opt out company or store from other seller application
     */
    optOutFromApplication({ id, body }?: {
        id: string;
        body: OptOutInventory;
    }): globalThis.Promise<any>;
}
declare class Analytics {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.exportType - Export type / format
     * @param {ExportJobReq} arg.body
     * @summary: Create data export job in required format
     * @description: Create data export job in required format
     */
    createExportJob({ exportType, body }?: {
        exportType: string;
        body: ExportJobReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.exportType - Export type / format
     * @param {string} arg.jobId - Export job id
     * @summary: Get data export job status
     * @description: Get data export job status
     */
    getExportJobStatus({ exportType, jobId }?: {
        exportType: string;
        jobId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.logType - Log type
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @param {GetLogsListReq} arg.body
     * @summary: Get logs list
     * @description: Get logs list
     */
    getLogsList({ logType, body, pageNo, pageSize }?: {
        logType: string;
        pageNo?: number;
        pageSize?: number;
        body: GetLogsListReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.logType - Log type
     * @param {number} [arg.pageSize] - Current page size
     * @param {GetLogsListReq} arg.body
     * @summary: Get logs list
     * @description: Get logs list
     */
    getLogsListPaginator({ logType, pageSize, body }?: {
        logType: string;
        pageSize?: number;
        body: GetLogsListReq;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} arg.logType - Log type
     * @param {SearchLogReq} arg.body
     * @summary: Search logs
     * @description: Search logs
     */
    searchLogs({ logType, body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        logType: string;
        body: SearchLogReq;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} arg.logType - Log type
     * @param {SearchLogReq} arg.body
     * @summary: Search logs
     * @description: Search logs
     */
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
     * @param {Object} arg - Arg object.
     * @param {string} [arg.view] - Listing or calender. Default is listing.
     * @param {string} [arg.q] - The search query. This can be a partial or
     *   complete name of a discount.
     * @param {number} [arg.pageNo] - Page number. Default is 1.
     * @param {number} [arg.pageSize] - Page size. Default is 12.
     * @param {boolean} [arg.archived] - Archived. Default is false.
     * @param {number} [arg.month] - Month. Default is current month.
     * @param {number} [arg.year] - Year. Default is current year.
     * @param {string} [arg.type] - Basic or custom.
     * @param {string[]} [arg.appIds] - Application ids.
     * @summary: Fetch discount list.
     * @description: Fetch discount list.
     */
    getDiscounts({ view, q, pageNo, pageSize, archived, month, year, type, appIds, }?: {
        view?: string;
        q?: string;
        pageNo?: number;
        pageSize?: number;
        archived?: boolean;
        month?: number;
        year?: number;
        type?: string;
        appIds?: string[];
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUpdateDiscount} arg.body
     * @summary: Create Discount.
     * @description: Create Discount.
     */
    createDiscount({ body }?: {
        body: CreateUpdateDiscount;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Unique id.
     * @summary: Fetch discount.
     * @description: Fetch discount.
     */
    getDiscount({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Id
     * @param {CreateUpdateDiscount} arg.body
     * @summary: Create Discount.
     * @description: Create Discount.
     */
    updateDiscount({ id, body }?: {
        id: string;
        body: CreateUpdateDiscount;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.discount] - Discount
     * @param {DiscountJob} arg.body
     * @summary: Validate File.
     * @description: Validate File.
     */
    validateDiscountFile({ body, discount }?: {
        discount?: string;
        body: DiscountJob;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.type - Type
     * @param {DownloadFileJob} arg.body
     * @summary: Validate File.
     * @description: Validate File.
     */
    downloadDiscountFile({ type, body }?: {
        type: string;
        body: DownloadFileJob;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Id
     * @summary: Validate File Job.
     * @description: Validate File Job.
     */
    getValidationJob({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Id
     * @summary: Cancel Validation Job.
     * @description: Cancel Validation Job.
     */
    cancelValidationJob({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Id
     * @summary: Download File Job.
     * @description: Download File Job.
     */
    getDownloadJob({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Id
     * @summary: Cancel Download Job.
     * @description: Cancel Download Job.
     */
    cancelDownloadJob({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
}
declare class Webhook {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @param {string} [arg.extensionId] - Extension ID
     * @summary: Get Subscribers By Company ID
     * @description: Get Subscribers By CompanyId
     */
    getSubscribersByCompany({ pageNo, pageSize, extensionId }?: {
        pageNo?: number;
        pageSize?: number;
        extensionId?: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SubscriberConfig} arg.body
     * @summary: Register Subscriber
     * @description: Register Subscriber
     */
    registerSubscriberToEvent({ body }?: {
        body: SubscriberConfig;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SubscriberConfig} arg.body
     * @summary: Update Subscriber
     * @description: Update Subscriber
     */
    updateSubscriberConfig({ body }?: {
        body: SubscriberConfig;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Page Number
     * @param {number} [arg.pageSize] - Page Size
     * @param {string} arg.extensionId - Extension ID
     * @summary: Get Subscribers By Extension ID
     * @description: Get Subscribers By ExtensionID
     */
    getSubscribersByExtensionId({ extensionId, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        extensionId: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.subscriberId - Subscriber ID
     * @summary: Get Subscriber By Subscriber ID
     * @description: Get Subscriber By Subscriber ID
     */
    getSubscriberById({ subscriberId }?: {
        subscriberId: number;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get All Webhook Events
     * @description: Get All Webhook Events
     */
    fetchAllEventConfigurations({}?: any): globalThis.Promise<any>;
}
declare class AuditTrail {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.qs - Logs Query
     * @summary: Get paginated audit logs
     * @description: Get audit logs
     */
    getAuditLogs({ qs }?: {
        qs: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RequestBodyAuditLog} arg.body
     * @summary: Create logs for auditing later on
     * @description: Create a Audit log
     */
    createAuditLog({ body }?: {
        body: RequestBodyAuditLog;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Log uuid
     * @summary: Get audit log
     * @description: Get audit logs by logs uuid
     */
    getAuditLog({ id }?: {
        id: string;
    }): globalThis.Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get entity types
     * @description: Get entity types
     */
    getEntityTypes({}?: any): globalThis.Promise<any>;
}
import PlatformApplicationClient = require("./PlatformApplicationClient");
type ApplicationResponse = {
    application?: Application;
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
    is_shortlink?: boolean;
    _id?: string;
    name?: string;
};
type ApplicationWebsite = {
    enabled?: boolean;
    basepath?: string;
};
type ApplicationCors = {
    domains?: string[];
};
type ApplicationAuth = {
    enabled?: boolean;
};
type ApplicationRedirections = {
    redirect_from?: string;
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
    redirections?: ApplicationRedirections[];
    meta?: ApplicationMeta[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Domain[];
    app_type?: string;
    mobile_logo?: SecureUrl;
    domain?: Domain;
};
type NotFound = {
    message?: string;
};
type BadRequest = {
    message?: string;
};
type LocationDefaultLanguage = {
    name?: string;
    code?: string;
};
type LocationDefaultCurrency = {
    name?: string;
    symbol?: string;
    code?: string;
};
type LocationCountry = {
    capital?: string;
    currency?: string;
    iso2?: string;
    iso3?: string;
    name?: string;
    parent?: string;
    phone_code?: string;
    type?: string;
    uid?: number;
    __v?: number;
    _id?: string;
    default_currency?: LocationDefaultCurrency;
    default_language?: LocationDefaultLanguage;
};
type Locations = {
    items?: any[];
};
type TicketList = {
    items?: Ticket[];
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
    items?: TicketHistory[];
    page?: Page;
};
type CustomFormList = {
    items?: CustomForm[];
    page?: Page;
};
type CreateCustomFormPayload = {
    slug: string;
    title: string;
    inputs: any[];
    description?: string;
    header_image?: string;
    priority: any;
    should_notify?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: any[];
    description?: string;
    priority: any;
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
    priority?: any;
    assigned_to?: AgentChangePayload;
    tags?: string[];
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
    notify?: NotifyUser[];
};
type NotifyUser = {
    country_code: string;
    phone_number: string;
};
type Filter = {
    priorities: Priority[];
    categories?: TicketCategory[];
    statuses: Status[];
    assignees: any[];
};
type TicketHistoryPayload = {
    value: any;
    type: any;
};
type CustomFormSubmissionPayload = {
    response: any[];
    attachments?: TicketAsset[];
};
type GetTokenForVideoRoomResponse = {
    access_token: string;
};
type GetParticipantsInsideVideoRoomResponse = {
    participants: Participant[];
};
type Participant = {
    user?: UserSchema;
    identity?: string;
    status?: string;
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
    message: string;
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
    type: any;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: TicketAsset[];
};
type AddTicketPayload = {
    created_by?: any;
    status?: string;
    priority?: any;
    category: string;
    content: TicketContent;
};
type Priority = {
    key: any;
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
    sub_categories?: TicketSubCategory[];
    feedback_form?: TicketFeedbackForm;
};
type TicketSubCategory = {
    key: string;
    display: string;
};
type TicketFeedbackForm = {
    title: string;
    display?: any[];
};
type TicketFeedbackList = {
    items?: TicketFeedback[];
};
type TicketFeedbackPayload = {
    form_response?: any;
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
    priority: Priority;
    login_required: boolean;
    should_notify: boolean;
    success_message?: string;
    submit_button?: SubmitButton;
    inputs: any[];
    created_on?: CreatedOn;
    poll_for_assignment?: PollForAssignment;
    _id: string;
};
type FeedbackResponseItem = {
    display: string;
    key: string;
    value: string;
};
type TicketFeedback = {
    _id: string;
    ticket_id: string;
    company_id: string;
    response: FeedbackResponseItem[];
    category?: string;
    user?: any;
    updated_at?: string;
    created_at?: string;
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
    source: any;
    status: Status;
    priority: Priority;
    created_by?: any;
    assigned_to?: any;
    tags?: string[];
    _custom_json?: any;
    is_feedback_pending?: boolean;
    _id: string;
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
    media_list?: AddMediaRequest[];
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
    tags?: string[];
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
    tags?: TagMeta[];
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
    tags?: TagMeta[];
};
type CursorGetResponse = {
    items?: any[];
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
    items?: Attribute[];
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
    facets?: ReviewFacet[];
    items?: any[];
    page?: Page;
    sort?: SortMethod[];
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
    items?: any[];
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
    attributes?: Attribute[];
    attributes_slugs?: string[];
    ui?: UI;
};
type RatingRequest = {
    attributes: string[];
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
    media?: MediaMeta[];
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
    tags?: TagMeta[];
};
type TemplateGetResponse = {
    items?: Template[];
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
    template_list: TemplateRequest[];
};
type UI = {
    feedback_question?: string[];
    icon?: UIIcon;
    text?: string[];
    type?: string;
};
type UIIcon = {
    active?: string;
    inactive?: string;
    selected?: string[];
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
    attributes_rating?: AttributeObject[];
    description?: string;
    device_meta?: DeviceMeta;
    entity_id?: string;
    entity_type?: string;
    media_resource?: MediaMeta[];
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
type AvailablePageSchema = {
    value?: string;
    text?: string;
    path?: string;
    type?: string;
    sections?: AvailablePageSchemaSections[];
    sections_meta?: AvailablePageSectionMetaAttributes[];
    theme?: string;
    seo?: AvailablePageSeo;
    props?: any[];
    _id?: string;
};
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
type AvailablePageSeo = {
    title?: string;
    description?: string;
    _id?: string;
};
type AvailablePageSchemaSections = {
    name?: string;
    label?: string;
    props?: any;
    blocks?: any[];
    preset?: any;
    predicate?: AvailablePagePredicate;
};
type AvailablePageScreenPredicate = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
type AvailablePageUserPredicate = {
    authenticated?: boolean;
    anonymous?: boolean;
};
type AvailablePageRoutePredicate = {
    selected?: string;
    exact_url?: string;
    query?: any;
};
type AvailablePagePredicate = {
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
    route?: AvailablePageRoutePredicate;
};
type AllAvailablePageSchema = {
    pages?: AvailablePageSchema[];
};
type PaginationSchema = {
    size?: number;
    item_total?: number;
    has_next?: boolean;
    type?: string;
    current?: number;
};
type ThemesListingResponseSchema = {
    items?: ThemesSchema[];
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
    variants?: string[];
    subsets?: string[];
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
    tags?: string[];
    src?: Src;
    assets?: AssetsSchema;
    available_sections?: availableSectionSchema[];
    styles?: any;
    config?: Config;
    font?: Font;
    _id?: string;
    __v?: number;
    colors?: Colors;
};
type availableSectionSchema = {
    blocks?: Blocks[];
    name?: string;
    label?: string;
    props?: BlocksProps[];
};
type Information = {
    images?: Images;
    features?: string[];
    name?: string;
    description?: string;
};
type Images = {
    desktop?: string[];
    android?: string[];
    ios?: string[];
    thumbnail?: string[];
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
    links?: string[];
};
type CommonJs = {
    link?: string;
};
type Css = {
    link?: string;
    links?: string[];
};
type Sections = {
    attributes?: string;
};
type Config = {
    preset?: Preset;
    global_schema?: GlobalSchema;
    current?: string;
    list?: ListSchemaItem[];
};
type Preset = {
    pages?: AvailablePageSchema[];
};
type GlobalSchema = {
    props?: GlobalSchemaProps[];
};
type ListSchemaItem = {
    global_config?: any;
    page?: ConfigPage[];
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
    props?: BlocksProps[];
};
type GlobalSchemaProps = {
    id?: string;
    label?: string;
    type?: string;
    category?: string;
};
type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type BlockUserRequestSchema = {
    status?: boolean;
    user_id?: string[];
    reason?: string;
};
type ArchiveUserRequestSchema = {
    user_id?: string;
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
    mobile?: EditProfileMobileSchema;
    country_code?: string;
    email?: string;
    gender?: string;
    dob?: string;
    profile_pic_url?: string;
    android_hash?: string;
    sender?: string;
    register_token?: string;
};
type EditProfileMobileSchema = {
    phone?: string;
    country_code?: string;
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
type OAuthRequestAppleSchema = {
    user_identifier?: string;
    oauth?: OAuthRequestAppleSchemaOauth;
    profile?: OAuthRequestAppleSchemaProfile;
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
type ProfileEditSuccess = {
    user?: UserSchema;
    register_token?: string;
    resend_email_token?: string;
    user_exists?: boolean;
    verify_email_link?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    email?: string;
    request_id?: string;
    country_code?: string;
    mobile?: string;
    success?: boolean;
    message?: string;
    resend_timer?: number;
    resend_token?: string;
};
type LoginSuccess = {
    user?: UserSchema;
    request_id?: string;
    register_token?: string;
};
type VerifyOtpSuccess = {
    user?: UserSchema;
    user_exists?: boolean;
    register_token?: string;
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
type BlockUserSuccess = {
    success?: boolean;
};
type ArchiveUserSuccess = {
    success?: boolean;
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
    success?: boolean;
};
type SessionListSuccess = {
    sessions?: string[];
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
    users?: UserSchema[];
};
type CustomerListResponseSchema = {
    items?: UserSchema[];
    page?: PaginationSchema;
};
type SessionListResponseSchema = {
    items?: string[];
};
type SessionDeleteResponseSchema = {
    items?: string[];
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
type AuthenticationInternalServerErrorSchema = {
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
type OAuthRequestAppleSchemaOauth = {
    identity_token?: string;
};
type OAuthRequestAppleSchemaProfile = {
    last_name?: string;
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
type CreateUserRequestSchema = {
    phone_number: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    gender?: string;
    username: string;
    meta?: any;
};
type CreateUserResponseSchema = {
    user?: UserSchema;
};
type CreateUserSessionRequestSchema = {
    domain?: string;
    max_age?: number;
    user_id?: string;
};
type CreateUserSessionResponseSchema = {
    domain?: string;
    max_age?: number;
    secure?: boolean;
    http_only?: boolean;
    cookie?: any;
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
    apple?: boolean;
};
type RequiredFields = {
    email?: PlatformEmail;
    mobile?: PlatformMobile;
};
type PlatformEmail = {
    is_required?: boolean;
    level?: string;
};
type PlatformMobile = {
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
type UpdateUserRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    external_id?: string;
    meta?: any;
};
type UserSchema = {
    application_id?: string;
    user_id?: string;
    first_name?: string;
    meta?: any;
    last_name?: string;
    phone_numbers?: PhoneNumber[];
    emails?: Email[];
    gender?: string;
    dob?: string;
    active?: boolean;
    profile_pic_url?: string;
    username?: string;
    account_type?: string;
    debug?: Debug;
    has_old_password_hash?: boolean;
    _id?: string;
    created_at?: string;
    updated_at?: string;
};
type PhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    country_code?: number;
};
type ApplicationLegal = {
    application?: string;
    tnc?: string;
    policy?: string;
    shipping?: string;
    faq?: ApplicationLegalFAQ[];
    _id?: string;
    updated_at?: string;
    created_at?: string;
};
type ApplicationLegalFAQ = {
    question?: string;
    answer?: string;
};
type PathMappingSchema = {
    application?: string;
    redirections?: RedirectionSchema[];
    _id?: string;
    updated_at?: string;
    created_at?: string;
};
type RedirectionSchema = {
    redirect_from?: string;
    redirect_to?: string;
};
type SeoComponent = {
    seo?: SeoSchema;
};
type SeoSchema = {
    app?: string;
    _id?: string;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    custom_meta_tags?: any[];
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
    platforms?: string[];
    title?: string;
    announcement?: string;
    pages?: AnnouncementPageSchema[];
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
    next_schedule?: any[];
};
type NextSchedule = {
    start?: string;
    end?: string;
};
type AnnouncementSchema = {
    announcement?: string;
    schedule?: ScheduleStartSchema;
};
type ScheduleStartSchema = {
    start?: string;
    end?: string;
};
type BlogGetResponse = {
    items?: BlogSchema[];
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
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
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
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    title?: string;
    seo?: SEO;
    _schedule?: CronSchedule;
};
type GetAnnouncementListSchema = {
    items?: AdminAnnouncementSchema[];
    page?: Page;
};
type CreateAnnouncementSchema = {
    message?: string;
    data?: AdminAnnouncementSchema;
};
type DataLoaderResponseSchema = {
    application?: string;
    company?: string;
    _id?: string;
    name?: string;
    service?: string;
    operation_id?: string;
    type?: string;
    url?: string;
    content?: string;
    __source?: DataLoaderSourceSchema;
};
type DataLoaderResetResponseSchema = {
    reset?: string;
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
    type: any;
};
type NavigationReference = {
    acl?: string[];
    tags?: string[];
    _locale_language?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sort_order?: number;
    sub_navigation?: NavigationReference[];
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
    refresh_pages?: string[];
};
type FaqResponseSchema = {
    faqs?: FaqSchema[];
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
    tags?: string[];
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
    tags?: CreateTagSchema[];
};
type DataLoaderSchema = {
    name?: string;
    service?: string;
    operation_id?: string;
    type?: string;
    url?: string;
    content?: string;
    __source?: DataLoaderSourceSchema;
};
type DataLoaderSourceSchema = {
    type?: string;
    id?: string;
};
type DataLoadersSchema = {
    items?: DataLoaderSchema[];
};
type TagDeleteSuccessResponse = {
    success?: boolean;
};
type ContentAPIError = {
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
    title?: string;
    description?: string;
    children?: string[];
    _id?: string;
    slug?: string;
    application?: string;
    icon_url?: string;
    _custom_json?: any;
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
    children?: ChildrenSchema[];
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
    faqs?: any[];
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
    categories?: CategorySchema[];
};
type GetFaqCategoryBySlugSchema = {
    category?: FAQCategorySchema;
};
type LandingPageGetResponse = {
    items?: LandingPageSchema[];
    page?: Page;
};
type LandingPageSchema = {
    slug?: string;
    action?: Action;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    application?: string;
    archived?: boolean;
    _custom_json?: any;
};
type DefaultNavigationResponse = {
    items?: NavigationSchema[];
};
type NavigationGetResponse = {
    items?: NavigationSchema[];
    page?: Page;
};
type Orientation = {
    portrait?: string[];
    landscape?: string[];
};
type NavigationSchema = {
    _id?: string;
    application?: string;
    archived?: boolean;
    name?: string;
    slug?: string;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    orientation?: Orientation;
    version?: number;
    navigation?: NavigationReference[];
};
type NavigationRequest = {
    name?: string;
    slug?: string;
    platform?: string[];
    orientation?: Orientation;
    navigation?: NavigationReference[];
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
    tags?: string[];
    content?: any[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _schedule?: ScheduleSchema;
};
type ContentSchema = {
    type?: string;
    value?: any;
};
type CustomPage = {
    data?: CustomPageSchema;
};
type FeatureImage = {
    secure_url?: string;
};
type PageGetResponse = {
    items?: PageSchema[];
    page?: Page;
};
type PageSpec = {
    specifications?: any[];
};
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
type PageSpecItem = {
    page_type?: string;
    display_name?: string;
    params?: PageSpecParam[];
    query?: PageSpecParam[];
};
type PageSchema = {
    _id?: string;
    application?: string;
    component_ids?: string[];
    content?: any[];
    content_path?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    description?: string;
    feature_image?: Asset;
    page_meta?: any[];
    _schedule?: ScheduleSchema;
    _custom_json?: any;
    orientation?: string;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: string[];
    title?: string;
    type?: string;
    seo?: SEO;
    visibility?: any;
    archived?: boolean;
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
    content?: any[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
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
    system_pages?: NavigationSchema[];
    custom_pages?: PageSchema[];
    application_id?: string;
};
type SlideshowGetResponse = {
    items?: SlideshowSchema[];
    page?: Page;
};
type SlideshowSchema = {
    _id?: string;
    slug?: string;
    date_meta?: DateMeta;
    application?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia[];
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
    phone?: PhoneProperties[];
};
type EmailProperties = {
    key?: string;
    value?: string;
};
type EmailSchema = {
    active?: boolean;
    email?: EmailProperties[];
};
type ContactSchema = {
    phone?: PhoneSchema;
    email?: EmailSchema;
};
type TagsSchema = {
    application?: string;
    _id?: string;
    tags?: TagSchema[];
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
    __source?: TagSourceSchema;
};
type TagSourceSchema = {
    type?: string;
    id?: string;
};
type UnauthenticatedUser = {
    message?: string;
};
type UnauthenticatedApplication = {
    message?: string;
};
type ResourceNotFound = {
    message?: string;
};
type InternalServerError = {
    message?: string;
    code?: string;
};
type CheckValidityResponse = {
    is_valid?: boolean;
    discount_amount?: number;
};
type PlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type Plan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
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
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
    components?: DetailedPlanComponents[];
};
type SubscriptionTrialPeriod = {
    start_date?: string;
    end_date?: string;
};
type EntityChargePrice = {
    amount: number;
    currency_code: string;
};
type EntityChargeRecurring = {
    interval: string;
};
type ChargeLineItem = {
    name: string;
    term: string;
    pricing_type: string;
    price: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    trial_days?: number;
    is_test?: boolean;
    metadata?: any;
};
type CreateSubscriptionCharge = {
    name: string;
    trial_days?: number;
    line_items: ChargeLineItem[];
    is_test?: boolean;
    return_url: string;
};
type CurrentPeriod = {
    start_date?: string;
    end_date?: string;
};
type SubscriptionCharge = {
    _id?: string;
    name?: string;
    term?: string;
    pricing_type?: string;
    price?: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    activated_on?: string;
    cancelled_on?: string;
    billing_date?: string;
    current_period?: CurrentPeriod;
    status?: string;
    is_test?: boolean;
    metadata?: any;
};
type EntitySubscription = {
    _id?: string;
    name?: string;
    status?: string;
    company_id?: number;
    activated_on?: string;
    cancelled_on?: string;
    trial_days?: number;
    trial_period?: SubscriptionTrialPeriod;
    metadata?: any;
    line_items?: SubscriptionCharge[];
};
type CreateSubscriptionResponse = {
    subscription?: EntitySubscription;
    confirm_url?: string;
};
type InvoiceDetailsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceDetailsClient = {
    address_lines?: string[];
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
    available?: string[];
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
    status_trail?: InvoiceDetailsStatusTrail[];
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
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
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
    invoice_items?: InvoiceItems[];
};
type InvoicesDataClient = {
    name?: string;
    email?: string;
    phone?: string;
    address_lines?: string[];
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
    status_trail?: InvoiceDetailsStatusTrail[];
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicesDataPaymentMethod;
    invoice_items?: InvoiceItems[];
};
type Invoices = {
    data?: InvoicesData[];
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
    items?: Stats[];
};
type CampaignReq = {
    description?: string;
    tags?: string[];
    headers?: string[];
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
    tags?: any[];
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
    items?: Campaign[];
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
    headers?: BigqueryHeadersResHeaders[];
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
    items?: GetNRecordsCsvResItems[];
};
type AudienceReq = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
};
type Audience = {
    description?: string;
    tags?: string[];
    headers?: string[];
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
    items?: Audience[];
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
    from_address?: EmailProviderReqFrom[];
};
type EmailProvider = {
    type?: string;
    provider?: string;
    from_address?: EmailProviderReqFrom[];
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
    items?: EmailProvider[];
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
    static_to?: string[];
    static_cc?: string[];
    static_bcc?: string[];
    reply_to?: string;
    headers?: EmailTemplateHeaders[];
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: any[];
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
    static_to?: string[];
    static_cc?: string[];
    static_bcc?: string[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    name?: string;
    keys?: EmailTemplateKeys;
    reply_to?: string;
    headers?: EmailTemplateHeaders[];
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type EmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: any[];
    static_cc?: any[];
    static_bcc?: any[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: any[];
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SystemEmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: any[];
    static_cc?: any[];
    static_bcc?: any[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: any[];
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type EmailTemplates = {
    items?: EmailTemplate[];
    page?: Page;
};
type SystemEmailTemplates = {
    items?: SystemEmailTemplate[];
    page?: Page;
};
type PayloadEmailTemplateStructure = {
    key?: string;
    value?: string;
};
type PayloadEmailProviderStructure = {
    _id?: string;
};
type PayloadEmailStructure = {
    template?: PayloadEmailTemplateStructure;
    provider?: PayloadEmailProviderStructure;
};
type PayloadSmsTemplateStructure = {
    key?: string;
    value?: string;
};
type PayloadSmsProviderStructure = {
    _id?: string;
};
type PayloadSmsStructure = {
    template?: PayloadSmsTemplateStructure;
    provider?: PayloadSmsProviderStructure;
};
type PayloadStructure = {
    data?: any[];
    email?: PayloadEmailStructure;
    sms?: PayloadSmsStructure;
    application?: string;
};
type MetaStructure = {
    job_type?: string;
    action?: string;
    trace?: string;
    timestamp?: string;
};
type EngineRequest = {
    payload?: PayloadStructure;
    meta?: MetaStructure;
};
type EngineResponse = {
    success?: boolean;
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
    items?: EventSubscription[];
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
    items?: Job[];
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
    items?: JobLog[];
    page?: Page;
};
type LogEmail = {
    template?: string;
};
type LogPushnotification = {
    pushtokens?: string[];
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
    items?: Log[];
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
    items?: SmsProvider[];
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
    attachments?: any[];
    priority?: string;
};
type SmsTemplateRes = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    tags?: any[];
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
    tags?: any[];
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
    tags?: any[];
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
    items?: SmsTemplate[];
    page?: Page;
};
type SystemSmsTemplates = {
    items?: SystemSmsTemplate[];
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
    items?: SystemNotification[];
    last_read_anchor?: number;
    page?: Page;
};
type PaymentGatewayConfigResponse = {
    excluded_fields: string[];
    app_id: string;
    aggregators?: any[];
    created: boolean;
    success: boolean;
    display_fields: string[];
};
type ErrorCodeDescription = {
    description: string;
    success: boolean;
    code: string;
};
type PaymentGatewayConfig = {
    is_active?: boolean;
    config_type: string;
    merchant_salt: string;
    key: string;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
    is_active?: boolean;
};
type PaymentGatewayToBeReviewed = {
    success: boolean;
    aggregator: string[];
};
type ErrorCodeAndDescription = {
    description: string;
    code: string;
};
type HttpErrorCodeAndResponse = {
    success: boolean;
    error: ErrorCodeAndDescription;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type IntentApp = {
    package_name?: string;
    display_name?: string;
    logos?: PaymentModeLogo;
    code?: string;
};
type PaymentModeList = {
    intent_app_error_list?: string[];
    name?: string;
    logo_url?: PaymentModeLogo;
    card_issuer?: string;
    intent_flow?: boolean;
    card_id?: string;
    exp_year?: number;
    timeout?: number;
    fynd_vpa?: string;
    display_priority?: number;
    card_brand?: string;
    card_isin?: string;
    retry_count?: number;
    intent_app_error_dict_list?: IntentAppErrorList[];
    expired?: boolean;
    card_token?: string;
    intent_app?: IntentApp[];
    merchant_code?: string;
    aggregator_name: string;
    card_type?: string;
    card_number?: string;
    code?: string;
    exp_month?: number;
    card_reference?: string;
    card_fingerprint?: string;
    card_name?: string;
    nickname?: string;
    display_name?: string;
    card_brand_image?: string;
};
type RootPaymentMode = {
    list?: PaymentModeList[];
    add_card_enabled?: boolean;
    display_priority: number;
    aggregator_name?: string;
    name: string;
    display_name: string;
    anonymous_enable?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    payouts_aggregators: any[];
    is_active: boolean;
    customers: any;
    unique_transfer_no: any;
    is_default: boolean;
    more_attributes: any;
    transfer_type: string;
};
type PayoutBankDetails = {
    account_holder?: string;
    branch_name?: string;
    account_no?: string;
    pincode?: number;
    country?: string;
    bank_name?: string;
    city?: string;
    account_type: string;
    state?: string;
    ifsc_code: string;
};
type PayoutRequest = {
    is_active: boolean;
    bank_details: PayoutBankDetails;
    aggregator: string;
    transfer_type: string;
    unique_external_id: string;
    users: any;
};
type PayoutResponse = {
    is_active: boolean;
    payouts: any;
    bank_details: any;
    payment_status: string;
    unique_transfer_no: string;
    aggregator: string;
    created: boolean;
    success: boolean;
    transfer_type: string;
    users: any;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_active: boolean;
    is_default: boolean;
};
type UpdatePayoutRequest = {
    is_active: boolean;
    unique_external_id: string;
    is_default: boolean;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    success: boolean;
    data: any[];
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    success: boolean;
    config: any;
    aggregator: string;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    success: boolean;
    data: any;
};
type BeneficiaryModeDetails = {
    account_holder: string;
    address?: string;
    branch_name: string;
    email: string;
    account_no: string;
    mobile: string;
    bank_name: string;
    vpa?: string;
    wallet?: string;
    ifsc_code: string;
    comment?: string;
};
type AddBeneficiaryDetailsRequest = {
    shipment_id: string;
    details: BeneficiaryModeDetails;
    request_id?: string;
    transfer_mode: string;
    delights: boolean;
    otp?: string;
    order_id: string;
};
type RefundAccountResponse = {
    success: boolean;
    message: string;
    is_verified_flag?: boolean;
    data?: any;
};
type NotFoundResourceError = {
    description: string;
    success: boolean;
    code: string;
};
type IfscCodeResponse = {
    bank_name: string;
    success?: boolean;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    account_holder: string;
    email: string;
    account_no: string;
    mobile?: string;
    ifsc_code: string;
    beneficiary_id: string;
    transfer_mode: string;
    subtitle: string;
    created_on: string;
    delights_user_name?: string;
    comment?: string;
    address: string;
    bank_name: string;
    id: number;
    is_active: boolean;
    branch_name?: string;
    modified_on: string;
    title: string;
    display_name: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type PaymentConfirmationMode = {
    meta?: any;
    mode: string;
    name?: string;
    amount: number;
};
type PaymentConfirmationRequest = {
    payment_methods: PaymentConfirmationMode[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    success: boolean;
    message: string;
    order_id: string;
};
type PennyDropPayload = {
    enabled: boolean;
    service_provider?: string;
};
type CancelledChequePayload = {
    enabled: boolean;
    document_mandatory?: boolean;
};
type PayoutPennyDropAndChequePayload = {
    penny_drop: PennyDropPayload;
    cancelled_cheque: CancelledChequePayload;
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
type CanBreakRequestBody = {
    shipment_ids: string[];
};
type CanBreakResponse = {
    status: boolean;
    valid_actions: any;
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
    payment_gateway_names?: any[];
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
    shipping_address?: OrderShippingAddress;
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
    latitude?: number;
    longitude?: number;
    province_code?: string;
    phone?: string;
    company?: string;
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
type OrderShippingAddress = {
    address1?: string;
    zip?: string;
    address2?: string;
    country_code?: string;
    country?: string;
    last_name?: string;
    province_code?: string;
    first_name?: string;
    phone?: string;
    province?: string;
    latitude?: number;
    longitude?: number;
    city?: string;
    company?: string;
    name?: string;
};
type OrderListing = {
    items: OrderItems[];
    filters: Filters;
    next_order_status: any;
    page: PlatformOrderPage;
    applied_filters: AppliedFilters;
};
type OrderItems = {
    user?: PlatformOrderUserInfo;
    delivery_address?: PlatformDeliveryAddress;
    channel?: Channel;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipment;
    created_at?: string;
    total_shipments_in_order?: number;
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
    updated_at?: string;
    city?: string;
    landmark?: string;
    created_at?: string;
    name?: string;
    address?: string;
    phone?: string;
    latitude?: number;
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
type PlatformApplication = {
    id?: string;
};
type PlatformShipment = {
    status?: PlatformShipmentStatus;
    bags?: Bags;
    prices?: ShipmentPrices;
    id?: string;
    gst?: ShipmentGst;
    priority?: number;
    priority_text?: string;
    lock_status?: boolean;
    ordering_channel?: string;
    total_shipment_bags?: number;
};
type PlatformShipmentStatus = {
    id?: number;
    bag_list?: number[];
    created_at?: string;
    status?: string;
    name?: string;
    progress?: number;
    shipment_id?: string;
    current_shipment_status?: string;
    color_code?: string;
};
type Bags = {
    item?: BagItem;
    id?: number;
};
type BagItem = {
    id?: number;
    size?: string;
    slug_key?: string;
    can_return?: boolean;
    brand_id?: number;
    l2_category?: string[];
    name?: string;
    code?: string;
    can_cancel?: boolean;
    attributes?: BagItemAttributes;
    l3_category_name?: string;
    l3_category?: number;
    l1_category?: string[];
    image?: string[];
    brand?: string;
    last_updated_at?: string;
};
type BagItemAttributes = {
    item_code?: string;
    brand_name?: string;
    country_of_origin?: string;
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
type Filters = {
    stage?: Stage;
    stages?: Stages;
};
type Stage = {
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
type PlatformOrderPage = {
    next?: string;
    previous?: string;
    type?: string;
    size?: number;
    current?: number;
    has_next?: boolean;
    total?: number;
    item_total?: ItemTotal;
};
type AppliedFilters = {
    stage?: string;
    stores?: string[];
    deployment_stores?: string[];
    dp?: number[];
    from_date?: string;
    to_date?: string;
};
type OrderDetails = {
    items: OrderPicklistListing[];
    page: PlatformOrderPage;
    filters: Filters;
    next_order_status: any;
    applied_filters: AppliedFilters;
};
type OrderDetailsItem = {
    user?: PlatformOrderUserInfo;
    delivery_address?: PlatformDeliveryAddress;
    channel?: Channel;
    fyndstore_emp?: any;
    ordering_store?: any;
    breakup_values?: PlatformBreakupValues;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipmentDetails;
    created_at?: string;
    total_shipments_in_order?: number;
    payments?: ItemsPayments;
    payment_methods?: any;
};
type PlatformBreakupValues = {
    display?: string;
    value?: number;
    name?: string;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type PlatformShipmentDetails = {
    status?: PlatformShipmentDetailsStatus;
    bags?: BagsDetails;
    prices?: ShipmentPrices;
    breakup_values?: ShipmentBreakupValues;
    id?: string;
    dp_details?: DpDetails;
    payment_methods?: any;
    invoice?: ShipmentInvoice;
    fulfilling_store?: PlatformFulfillingStore;
    payments?: Payments;
    gst?: ShipmentGst;
    company?: Company;
    brand?: PlatformShipmentDetailsBrand;
    coupon?: any;
    order_source?: string;
    is_not_fynd_source?: boolean;
    can_break?: any;
    comment?: string;
    promise?: Promise;
    tracking_details?: ShipmentTrackingDetails;
    is_fynd_coupon?: boolean;
    order_type?: string;
    total_shipment_bags?: number;
    pod?: any;
    lock_status?: boolean;
    priority?: number;
    priority_text?: string;
    ordering_channel?: string;
    credit_note_id?: string;
    auto_trigger_dp_assignment?: boolean;
    packaging_type?: string;
    dates?: ShipmentDates;
};
type PlatformShipmentDetailsStatus = {
    id?: number;
    bag_list?: number[];
    created_at?: string;
    status?: string;
    name?: string;
    progress?: number;
    shipment_id?: string;
    current_shipment_status?: string;
    color_code?: string;
};
type BagsDetails = {
    financial_breakup?: BagFinancialBreakup[];
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
    can_cancel?: boolean;
    can_return?: boolean;
    payment_methods?: any;
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
    updated_at?: string;
    area?: string;
    state?: string;
    address_type?: string;
    city?: string;
    pincode?: string;
    address1?: string;
    address2?: string;
    latitude?: number;
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
    brand_store_tags?: string[];
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
    number?: string[];
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
type ShipmentGst = {
    brand_calculated_amount?: number;
    value_of_good?: number;
    gst_fee?: number;
};
type PlatformShipmentDetailsBrand = {
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
type PlatformOrderDetailsPage = {
    next?: string;
    previous?: string;
};
type ShipmentDates = {
    due_date?: string;
};
type OrderLanesCount = {
    stages: StageItem[];
};
type StageItem = {
    count?: number;
    text?: string;
    value?: string;
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
type OrderPicklistListing = {
    user?: PlatformOrderUserInfo;
    delivery_address?: PlatformDeliveryAddress;
    channel?: Channel;
    fyndstore_emp?: any;
    ordering_store?: any;
    breakup_values?: PlatformBreakupValues;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipmentDetails;
    created_at?: string;
    total_shipments_in_order?: number;
    payments?: ItemsPayments;
    payment_methods?: any;
};
type Stages = {
    text?: string;
    value?: string;
    is_default?: boolean;
    filters?: StagesFilters;
};
type ItemTotal = {
    new?: number;
    processing?: number;
    returns?: number;
    all?: number;
};
type GetPingResponse = {
    ping: string;
};
type GetShipmentAddressResponse = {
    message: string;
    data: DataShipmentAddress;
    success: boolean;
};
type DataShipmentAddress = {
    city?: string;
    country?: string;
    pincode?: string;
    phone?: string;
    area?: string;
    address?: string;
    landmark?: string;
    state?: string;
    address_type?: string;
    address_category?: string;
    email?: string;
    name?: string;
};
type UpdateShipmentAddressRequest = {
    email: string;
    address: string;
    pincode: string;
    state: string;
    address_type: string;
    country: string;
    name: string;
    phone: string;
    area: string;
    landmark: string;
    city: string;
};
type UpdateShipmentAddressResponse = {
    success: boolean;
    message: string;
};
type ShipmentTrackResponse = {
    bag_list: ShipmentTrackResponseBagListItem[];
    message: string;
    order_value: number;
};
type ShipmentTrackResponseBagListItem = {
    enable_tracking?: boolean;
    price?: string;
    time_slot?: string;
    product_name?: string;
    can_return?: boolean;
    order_date?: string;
    is_try_at_home?: boolean;
    breakup_values?: ShipmentTrackResponseBagListItemBreakValues[];
    statuses?: ShipmentTrackResponseBagListItemStatuses[];
    is_active?: boolean;
    bag_id?: string;
    order_id?: string;
    size?: string;
    payment_mode_source?: string;
    dp_details?: ShipmentTrackResponseBagListItemDpDetails;
    product_id?: number;
    product_image?: ShipmentTrackResponseBagListItemsProductImage;
    brand_name?: string;
    price_marked?: string;
    status?: string;
    can_cancel?: boolean;
    payment_mode?: string;
    fynd_cash_msg?: string;
    delivery_address?: string;
};
type ShipmentTrackResponseBagListItemBreakValues = {
    name?: string;
    display?: string;
    value?: string;
};
type ShipmentTrackResponseBagListItemStatuses = {
    nps_rating?: number;
    nps_string?: string;
    progress_status?: ShipmentTrackResponseBagListItemStatusesProgress[];
    flow_type?: string;
    status_progress?: number;
    is_nps_done?: boolean;
    header_message?: string;
    is_delayed?: string;
    tracking_list?: ShipmentTrackResponseBagListItemStatusesTrack[];
};
type ShipmentTrackResponseBagListItemStatusesProgress = {
    title?: string;
    type?: string;
    state?: boolean;
};
type ShipmentTrackResponseBagListItemStatusesTrack = {
    status?: string;
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
};
type ShipmentTrackResponseBagListItemDpDetails = {
    tracking_no?: string;
    courier?: string;
};
type ShipmentTrackResponseBagListItemsProductImage = {
    aspect_ratio?: string;
    url?: string;
};
type UpdateShipmentStatusResponse = {
    shipments: any;
    error_shipments?: any[];
};
type UpdateShipmentStatusBody = {
    shipments: any;
    force_transition: boolean;
    task: boolean;
};
type ShipmentReasonsResponse = {
    success: boolean;
    message: string;
    reasons: ShipmentResponseReasons[];
};
type ShipmentResponseReasons = {
    reason_id?: number;
    reason?: string;
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
type ShipmentUpdateRequest = {
    bags: string[];
    reason: any;
    comments: string;
    action: string;
};
type ShipmentUpdateResponse = {
    success: boolean;
    message: string;
};
type UpdateProcessShipmenstRequestBody = {
    shipment_ids: string[];
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
    result?: any;
    _custom_json?: any;
    words?: string[];
    is_active?: boolean;
    uid?: string;
    app_id?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type ErrorResponse = {
    status?: number;
    meta?: any;
    message?: string;
    code?: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    _custom_json?: any;
    words?: string[];
    is_active?: boolean;
    app_id?: string;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    results?: any[];
    words?: string[];
    uid?: string;
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type AutocompletePageAction = {
    query?: any;
    params?: any;
    url?: string;
    type?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type Media = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type AutocompleteResult = {
    _custom_json?: any;
    action?: AutocompleteAction;
    logo?: Media;
    display?: string;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    results?: AutocompleteResult[];
    words?: string[];
    is_active?: boolean;
    app_id?: string;
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    words?: string[];
    results?: any[];
    app_id?: string;
};
type ProductBundleItem = {
    min_quantity: number;
    product_uid: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    max_quantity: number;
    allow_remove?: boolean;
};
type GetProductBundleCreateResponse = {
    created_by?: any;
    name: string;
    id?: string;
    choice: string;
    created_on?: string;
    slug: string;
    company_id?: number;
    modified_on?: string;
    page_visibility?: string[];
    logo?: string;
    products: ProductBundleItem[];
    modified_by?: any;
    is_active: boolean;
    meta?: any;
    same_store_assignment?: boolean;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    created_by?: any;
    name: string;
    choice: string;
    created_on?: string;
    slug: string;
    company_id?: number;
    modified_on?: string;
    page_visibility?: string[];
    logo?: string;
    products: ProductBundleItem[];
    modified_by?: any;
    is_active: boolean;
    meta?: any;
    same_store_assignment?: boolean;
};
type LimitedProductData = {
    item_code?: string;
    attributes?: any;
    name?: string;
    images?: string[];
    short_description?: string;
    country_of_origin?: string;
    slug?: string;
    sizes?: string[];
    quantity?: number;
    identifier?: any;
    uid?: number;
    price?: any;
};
type Size = {
    value?: string;
    is_available?: boolean;
    quantity?: number;
    display?: string;
};
type Price = {
    max_marked?: number;
    max_effective?: number;
    min_effective?: number;
    min_marked?: number;
    currency?: string;
};
type GetProducts = {
    min_quantity?: number;
    product_details?: LimitedProductData;
    product_uid?: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    sizes?: Size[];
    max_quantity?: number;
    price?: Price;
    allow_remove?: boolean;
};
type GetProductBundleResponse = {
    name?: string;
    choice?: string;
    slug?: string;
    company_id?: number;
    page_visibility?: string[];
    products?: GetProducts[];
    logo?: string;
    is_active?: boolean;
    meta?: any;
    same_store_assignment?: boolean;
};
type ProductBundleUpdateRequest = {
    name: string;
    choice: string;
    slug: string;
    company_id?: number;
    modified_on?: string;
    page_visibility?: string[];
    logo?: string;
    products: ProductBundleItem[];
    modified_by?: any;
    is_active: boolean;
    meta?: any;
    same_store_assignment?: boolean;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Meta = {
    values?: any[];
    headers?: any;
    unit?: string;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    created_by?: any;
    name: string;
    brand_id?: number;
    id?: string;
    image?: string;
    created_on?: string;
    title: string;
    tag?: string;
    active?: boolean;
    description?: string;
    company_id?: number;
    modified_on?: string;
    guide?: Guide;
    modified_by?: any;
    subtitle?: string;
};
type SuccessResponse = {
    success?: boolean;
};
type SizeGuideResponse = {
    created_by?: any;
    name?: string;
    brand_id?: number;
    id?: string;
    created_on?: string;
    title?: string;
    tag?: string;
    active?: boolean;
    modified_on?: string;
    company_id?: number;
    guide?: any;
    modified_by?: any;
    subtitle?: string;
};
type MetaFields = {
    value: string;
    key: string;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    _custom_meta?: MetaFields[];
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type GetConfigMetadataResponse = {
    values?: any[];
    data: any[];
    condition?: any[];
};
type PageResponseType = {
    has_next: boolean;
    next: number;
    current: number;
    total_count: number;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    unit?: string;
    name: string;
    slug?: string;
    key?: string;
    logo?: string;
    is_active: boolean;
    priority: number;
    display_type: string;
};
type AppConfigurationDetail = {
    attributes?: AttributeDetailsGroup[];
    name?: string;
    slug: string;
    logo?: string;
    is_default: boolean;
    template_slugs?: string[];
    priority: number;
    is_active: boolean;
    app_id: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    name?: string;
    default_key: string;
    key: string;
    logo?: string;
    is_default: boolean;
    priority: number;
    is_active: boolean;
    app_id: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    variant?: any;
    detail?: any;
    compare?: any;
    similar?: any;
};
type MetaDataListingFilterMetaResponse = {
    filter_types?: string[];
    key?: string;
    units?: any[];
    display?: string;
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingSortMetaResponse = {
    key?: string;
    display?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingResponse = {
    filter: MetaDataListingFilterResponse;
    sort: MetaDataListingSortResponse;
};
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    name: string;
    size: ProductSize;
    key: string;
    logo?: string;
    is_active: boolean;
    priority: number;
    display_type: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    title?: string;
    size?: ProductSize;
    key: string;
    logo?: string;
    is_active: boolean;
    priority: number;
    subtitle?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    map_values?: any[];
    map?: any;
    value?: string;
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    type: string;
    name?: string;
    display_name?: string;
    key: string;
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    is_active: boolean;
    priority: number;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    name?: string;
    key: string;
    logo?: string;
    is_active: boolean;
    priority: number;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type AppCatalogConfiguration = {
    type?: string;
    config_id?: string;
    created_by?: any;
    id?: string;
    config_type: string;
    created_on?: string;
    modified_on?: string;
    modified_by?: any;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    app_id: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    type?: string;
    config_id?: string;
    created_by?: any;
    config_type: string;
    created_on?: string;
    modified_on?: string;
    modified_by?: any;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    app_id: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    config_id?: string;
    id?: string;
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersValue = {
    currency_code?: string;
    min?: number;
    query_format?: string;
    value: any;
    selected_min?: number;
    currency_symbol?: string;
    is_selected: boolean;
    display: string;
    count?: number;
    display_format?: string;
    max?: number;
    selected_max?: number;
};
type ProductFiltersKey = {
    name: string;
    operators?: string[];
    logo?: string;
    display: string;
    kind?: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type ProductSortOn = {
    value?: string;
    name?: string;
    is_selected?: boolean;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
};
type CollectionListingFilterType = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilterTag = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type BannerImage = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type Media1 = {
    type?: string;
    meta?: any;
    url: string;
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type GetCollectionDetailNest = {
    banners?: ImageUrls;
    logo?: Media1;
    is_active?: boolean;
    uid?: string;
    _schedule?: any;
    type?: string;
    query?: CollectionQuery[];
    action?: Action;
    priority?: number;
    visible_facets_keys?: string[];
    name?: string;
    badge?: any;
    tag?: string[];
    allow_sort?: boolean;
    cron?: any;
    allow_facets?: boolean;
    slug?: string;
    description?: string;
    meta?: any;
    app_id?: string;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type UserInfo = {
    username?: string;
    user_id?: string;
    uid?: string;
    email?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type Schedule = {
    cron?: string;
    next_schedule?: NextSchedule[];
    end?: string;
    start?: string;
    duration?: number;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CreateCollection = {
    created_by?: UserInfo;
    banners: CollectionBanner;
    logo: CollectionImage;
    is_active?: boolean;
    _schedule?: Schedule;
    tags?: string[];
    type: string;
    is_visible?: boolean;
    query?: CollectionQuery[];
    _locale_language?: any;
    seo?: SeoDetail;
    sort_on?: string;
    priority?: number;
    visible_facets_keys?: string[];
    name: string;
    badge?: CollectionBadge;
    allow_sort?: boolean;
    _custom_json?: any;
    allow_facets?: boolean;
    slug: string;
    published?: boolean;
    description?: string;
    modified_by?: UserInfo;
    meta?: any;
    app_id: string;
};
type CollectionCreateResponse = {
    banners?: ImageUrls;
    logo?: BannerImage;
    is_active?: boolean;
    _schedule?: any;
    type?: string;
    query?: CollectionQuery[];
    sort_on?: string;
    priority?: number;
    visible_facets_keys?: string[];
    name?: string;
    badge?: any;
    tag?: string[];
    allow_sort?: boolean;
    cron?: any;
    allow_facets?: boolean;
    slug?: string;
    description?: string;
    meta?: any;
    app_id?: string;
};
type CollectionDetailResponse = {
    cron?: any;
    type?: string;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    name?: string;
    query?: CollectionQuery[];
    meta?: any;
    badge?: any;
    slug?: string;
    tag?: string[];
    description?: string;
    allow_sort?: boolean;
    banners?: ImageUrls;
    logo?: Media1;
    is_active?: boolean;
    priority?: number;
    _schedule?: any;
    app_id?: string;
};
type UpdateCollection = {
    banners?: CollectionBanner;
    logo?: CollectionImage;
    is_active?: boolean;
    _schedule?: Schedule;
    tags?: string[];
    type?: string;
    is_visible?: boolean;
    query?: CollectionQuery[];
    _locale_language?: any;
    seo?: SeoDetail;
    sort_on?: string;
    priority?: number;
    visible_facets_keys?: string[];
    name?: string;
    badge?: CollectionBadge;
    allow_sort?: boolean;
    _custom_json?: any;
    allow_facets?: boolean;
    slug?: string;
    published?: boolean;
    description?: string;
    modified_by?: UserInfo;
    meta?: any;
};
type Price1 = {
    currency_code?: string;
    max?: number;
    currency_symbol?: string;
    min?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductBrand = {
    action?: Action;
    uid?: number;
    name?: string;
    logo?: Media1;
};
type ProductDetailAttribute = {
    type?: string;
    value?: string;
    key?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductListingDetail = {
    discount?: string;
    color?: string;
    product_online_date?: string;
    promo_meta?: any;
    item_type?: string;
    uid?: number;
    price?: ProductListingPrice;
    type?: string;
    medias?: Media1[];
    image_nature?: string;
    brand?: ProductBrand;
    tryouts?: string[];
    rating?: number;
    rating_count?: number;
    similars?: string[];
    has_variant?: boolean;
    item_code?: string;
    name?: string;
    teaser_tag?: any;
    attributes?: any;
    highlights?: string[];
    sellable?: boolean;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    short_description?: string;
    slug: string;
    description?: string;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    page?: Page;
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    type?: string;
    query?: CollectionQuery[];
    item?: ItemQueryForUserCollection[];
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightItem = {
    count?: number;
    sellable_count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightBrand = {
    available_articles?: number;
    name?: string;
    article_freshness?: number;
    total_articles?: number;
    available_sizes?: number;
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
    store_ids?: number[];
    brand_ids?: number[];
    opt_level: string;
    company_id?: number;
    platform?: string;
    enabled?: boolean;
};
type CompanyOptIn = {
    created_by?: any;
    store_ids: number[];
    brand_ids: number[];
    created_on: number;
    opt_level: string;
    company_id: number;
    modified_on: number;
    platform: string;
    modified_by?: any;
    enabled: boolean;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    company_type?: string;
    uid?: number;
    name?: string;
    business_type?: string;
};
type CompanyBrandDetail = {
    company_id?: number;
    total_article?: number;
    brand_id?: number;
    brand_name?: string;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    company?: string;
    brand?: number;
    store?: number;
};
type StoreDetail = {
    additional_contacts?: any[];
    name?: string;
    display_name?: string;
    manager?: any;
    store_code?: string;
    created_on?: string;
    store_type?: string;
    modified_on?: string;
    company_id?: number;
    timing?: any;
    documents?: any[];
    uid?: number;
    address?: any;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    type: string;
    format?: string;
    multi?: boolean;
    range?: AttributeSchemaRange;
    mandatory?: boolean;
    allowed_values?: string[];
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type GenderDetail = {
    schema?: AttributeMaster;
    name?: string;
    enabled_for_end_consumer?: boolean;
    is_nested?: boolean;
    id?: string;
    slug?: string;
    details?: AttributeMasterDetails;
    filters?: AttributeMasterFilter;
    description?: string;
    logo?: string;
    departments?: string[];
    meta?: AttributeMasterMeta;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    status?: number;
    message?: string;
    code?: string;
    errors?: any;
    meta?: any;
};
type UserSerializer = {
    user_id?: string;
    username?: string;
    uid?: string;
    contact?: string;
    _id?: string;
};
type GetDepartment = {
    created_by?: UserSerializer;
    name?: string;
    page_size?: number;
    synonyms?: string[];
    created_on?: string;
    modified_by?: UserSerializer;
    slug?: string;
    search?: string;
    item_type?: string;
    modified_on?: string;
    logo?: string;
    priority_order?: number;
    page_no?: number;
    is_active?: boolean;
    uid?: number;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    status?: number;
    message?: string;
    code?: string;
    errors?: any;
    meta?: any;
};
type DepartmentCreateUpdate = {
    _custom_json?: any;
    name: string;
    synonyms?: string[];
    _cls?: string;
    slug?: string;
    logo: string;
    priority_order: number;
    is_active?: boolean;
    uid?: number;
    platforms?: any;
    tags?: string[];
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    username: string;
    super_user?: boolean;
    user_id: string;
    contact?: string;
};
type DepartmentModel = {
    _custom_json?: any;
    created_by?: UserDetail;
    name: any;
    verified_on?: string;
    verified_by?: UserDetail;
    synonyms?: any[];
    created_on: string;
    _cls?: any;
    slug?: any;
    modified_on: string;
    logo: string;
    priority_order: number;
    modified_by?: UserDetail;
    is_active?: boolean;
    uid?: number;
    _id?: any;
};
type ProductTemplate = {
    attributes?: string[];
    created_by?: any;
    name?: string;
    is_physical: boolean;
    categories?: string[];
    modified_by?: any;
    slug: string;
    created_on?: string;
    tag?: string;
    description?: string;
    modified_on?: string;
    is_expirable: boolean;
    logo?: string;
    is_archived?: boolean;
    is_active?: boolean;
    departments?: string[];
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type TemplateDetails = {
    attributes?: string[];
    name?: string;
    is_physical: boolean;
    id?: string;
    categories?: string[];
    slug: string;
    tag?: string;
    description?: string;
    is_expirable: boolean;
    logo?: string;
    is_archived?: boolean;
    is_active?: boolean;
    departments?: string[];
};
type Properties = {
    brand_uid?: any;
    no_of_boxes?: any;
    country_of_origin?: any;
    multi_size?: any;
    product_group_tag?: any;
    return_config?: any;
    item_type?: any;
    moq?: any;
    is_active?: any;
    media?: any;
    currency?: any;
    tags?: any;
    size_guide?: any;
    custom_order?: any;
    trader?: any;
    hsn_code?: any;
    item_code?: any;
    name?: any;
    trader_type?: any;
    teaser_tag?: any;
    command?: any;
    is_dependent?: any;
    highlights?: any;
    short_description?: any;
    slug?: any;
    description?: any;
    variants?: any;
    sizes?: any;
    product_publish?: any;
    category_slug?: any;
};
type GlobalValidation = {
    type?: string;
    required?: string[];
    properties?: Properties;
    title?: string;
    description?: string;
    definitions?: any;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplatesValidationResponse = {
    template_details?: TemplateDetails;
    data?: TemplateValidationData;
};
type InventoryValidationResponse = {
    data?: any;
    message?: string;
};
type HSNData = {
    country_of_origin?: string[];
    hsn_code?: string[];
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadItemsData = {
    type?: string;
    brand?: string[];
    templates?: string[];
};
type ProductDownloadsItems = {
    created_by?: VerifiedBy;
    url?: string;
    id?: string;
    template_tags?: any;
    status?: string;
    trigger_on?: string;
    task_id?: string;
    data?: ProductDownloadItemsData;
    seller_id?: number;
    completed_on?: string;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Hierarchy = {
    department: number;
    l2: number;
    l1: number;
};
type Media2 = {
    landscape: string;
    portrait: string;
    logo: string;
};
type Category = {
    created_by?: any;
    priority?: number;
    name: string;
    id?: string;
    synonyms?: string[];
    created_on?: string;
    slug?: string;
    tryouts?: string[];
    modified_on?: string;
    departments: number[];
    modified_by?: any;
    is_active: boolean;
    marketplaces?: CategoryMapping;
    level: number;
    uid?: number;
    hierarchy?: Hierarchy[];
    media?: Media2;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    priority?: number;
    name: string;
    synonyms?: string[];
    slug?: string;
    tryouts?: string[];
    is_active: boolean;
    marketplaces?: CategoryMapping;
    level: number;
    departments: number[];
    hierarchy?: Hierarchy[];
    media?: Media2;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type Logo = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
    secure_url?: string;
};
type Brand = {
    uid?: number;
    name?: string;
    logo?: Logo;
};
type Image = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
    secure_url?: string;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Product = {
    brand_uid?: number;
    color?: string;
    template_tag?: string;
    is_set?: boolean;
    is_physical?: boolean;
    country_of_origin?: string;
    multi_size?: boolean;
    item_type?: string;
    primary_color?: string;
    is_expirable?: boolean;
    moq?: any;
    is_active?: boolean;
    uid?: number;
    media?: Media1[];
    currency?: string;
    size_guide?: string;
    image_nature?: string;
    brand?: Brand;
    custom_order?: any;
    hsn_code?: string;
    item_code?: string;
    name?: string;
    all_sizes?: any[];
    category_uid?: number;
    is_dependent?: boolean;
    departments?: number[];
    l3_mapping?: string[];
    _custom_json?: any;
    highlights?: string[];
    id?: string;
    images?: Image[];
    short_description?: string;
    slug?: string;
    description?: string;
    variants?: any;
    sizes?: any[];
    product_publish?: ProductPublished;
    category_slug?: string;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type ReturnConfig = {
    returnable: boolean;
    time: number;
    unit: string;
};
type OrderQuantity = {
    is_set?: boolean;
    maximum?: number;
    minimum?: number;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    hsn_code?: string;
    reporting_hsn?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type Trader = {
    type?: string;
    name?: string;
    address?: string[];
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type ProductCreateUpdate = {
    brand_uid: number;
    template_tag: string;
    is_set?: boolean;
    requester?: string;
    no_of_boxes?: number;
    country_of_origin: string;
    multi_size?: boolean;
    product_group_tag?: string[];
    return_config: ReturnConfig;
    item_type: string;
    moq?: OrderQuantity;
    is_active?: boolean;
    bulk_job_id?: string;
    uid?: number;
    media?: Media1[];
    currency: string;
    tags?: string[];
    tax_identifier: TaxIdentifier;
    size_guide?: string;
    custom_order?: CustomOrder;
    trader: Trader[];
    action?: string;
    item_code: any;
    is_image_less_product?: boolean;
    name: string;
    teaser_tag?: TeaserTag;
    change_request_id?: any;
    is_dependent?: boolean;
    departments: number[];
    _custom_json?: any;
    highlights?: string[];
    short_description?: string;
    slug: string;
    company_id: number;
    variants?: any;
    description?: string;
    product_publish?: ProductPublish;
    category_slug: string;
};
type AttributeMasterSerializer = {
    variant?: boolean;
    created_by?: any;
    schema: AttributeMaster;
    filters: AttributeMasterFilter;
    modified_on?: string;
    logo?: string;
    tags?: string[];
    is_nested?: boolean;
    synonyms?: any;
    name?: string;
    departments: string[];
    unit?: string;
    enabled_for_end_consumer?: boolean;
    created_on?: string;
    slug: string;
    details: AttributeMasterDetails;
    description?: string;
    raw_key?: string;
    modified_by?: any;
    suggestion?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    username?: string;
    user_id?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    created_by?: UserDetail1;
    template_tag?: string;
    file_path?: string;
    cancelled?: number;
    succeed?: number;
    failed?: number;
    created_on?: string;
    cancelled_records?: string[];
    company_id?: number;
    modified_on?: string;
    template?: ProductTemplate;
    modified_by?: UserDetail1;
    is_active?: boolean;
    failed_records?: string[];
    total?: number;
    stage?: string;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    username?: string;
    user_id?: string;
    uid?: string;
    email?: string;
};
type BulkJob = {
    created_by?: UserInfo1;
    template_tag?: string;
    file_path?: string;
    cancelled?: number;
    succeed?: number;
    created_on: string;
    failed?: number;
    cancelled_records?: any[];
    tracking_url?: string;
    custom_template_tag?: string;
    modified_on?: string;
    company_id: number;
    modified_by?: UserInfo1;
    is_active?: boolean;
    failed_records?: any[];
    total: number;
    stage?: string;
};
type BulkResponse = {
    created_by?: UserInfo1;
    created_on: string;
    modified_on?: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    batch_id: string;
};
type BulkProductRequest = {
    data: any[];
    company_id: number;
    template_tag: string;
    batch_id: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type UserCommon = {
    username?: string;
    user_id?: string;
    company_id?: number;
};
type Items = {
    created_by?: UserCommon;
    retry?: number;
    id?: string;
    cancelled?: number;
    succeed?: number;
    created_on?: string;
    failed?: number;
    cancelled_records?: string[];
    tracking_url?: string;
    modified_on?: string;
    company_id?: number;
    failed_records?: string[];
    modified_by?: UserCommon;
    is_active?: boolean;
    file_path?: string;
    total?: number;
    stage?: string;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    company_id?: number;
    user: any;
    url: string;
};
type ProductSizeDeleteDataResponse = {
    company_id?: number;
    size?: string;
    item_id?: number;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    price_effective?: number;
    seller_identifier?: string;
    inventory_updated_on?: string;
    sellable_quantity?: number;
    item_id?: number;
    store?: any;
    currency?: string;
    size?: string;
    quantity?: number;
    price_transfer?: number;
    uid?: string;
    price?: number;
    identifiers?: any;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type SetSize = {
    size: string;
    pieces: number;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    name?: string;
    size_distribution: SizeDistribution;
    quantity?: number;
};
type GTIN = {
    gtin_value: string;
    gtin_type: string;
    primary?: boolean;
};
type InvSize = {
    price_effective: number;
    set?: InventorySet;
    item_width?: number;
    is_set?: boolean;
    item_dimensions_unit_of_measure?: string;
    item_weight?: number;
    store_code: string;
    item_weight_unit_of_measure?: string;
    currency: string;
    size: string;
    item_length?: number;
    quantity: number;
    item_height?: number;
    price_transfer?: number;
    expiration_date?: string;
    price?: number;
    identifiers: GTIN[];
};
type ItemQuery = {
    brand_uid?: number;
    item_code?: string;
    uid?: number;
};
type InventoryRequest = {
    company_id: number;
    sizes: InvSize[];
    item: ItemQuery;
};
type CompanyMeta = {
    id: number;
};
type ReturnConfig1 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type DimensionResponse = {
    unit: string;
    height: number;
    width: number;
    is_default: boolean;
    length: number;
};
type PriceMeta = {
    marked: number;
    effective: number;
    updated_at?: string;
    tp_notes?: any;
    transfer: number;
    currency: string;
};
type BrandMeta = {
    name: string;
    id: number;
};
type ManufacturerResponse = {
    is_default: boolean;
    name: string;
    address: string;
};
type Trader1 = {
    type: string;
    name: string;
    address: string[];
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type StoreMeta = {
    id: number;
};
type WeightResponse = {
    is_default: boolean;
    unit: string;
    shipping: number;
};
type InventorySellerResponse = {
    raw_meta?: any;
    set?: InventorySet;
    company: CompanyMeta;
    is_set?: boolean;
    created_by?: UserSerializer;
    country_of_origin: string;
    item_id: number;
    return_config?: ReturnConfig1;
    fynd_article_code: string;
    dimension: DimensionResponse;
    is_active?: boolean;
    total_quantity: number;
    uid: string;
    price: PriceMeta;
    expiration_date?: string;
    added_on_store?: string;
    track_inventory?: boolean;
    fynd_meta?: any;
    tax_identifier?: any;
    brand: BrandMeta;
    modified_by?: UserSerializer;
    manufacturer: ManufacturerResponse;
    trader?: Trader1[];
    meta?: any;
    stage?: string;
    fragile: boolean;
    identifier: any;
    quantities?: Quantities;
    _custom_json?: any;
    seller_identifier: string;
    store: StoreMeta;
    size: string;
    fynd_item_code: string;
    weight: WeightResponse;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    created_by?: any;
    id?: string;
    file_path?: string;
    cancelled?: number;
    succeed?: number;
    created_on?: string;
    failed?: number;
    cancelled_records?: string[];
    company_id?: number;
    modified_on?: string;
    modified_by?: any;
    is_active?: boolean;
    failed_records?: string[];
    total?: number;
    stage?: string;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    price_effective?: number;
    seller_identifier: string;
    price_marked?: number;
    store_code: string;
    item_weight_unit_of_measure?: string;
    quantity?: number;
    item_dimensions_unit_of_measure?: string;
    total_quantity?: number;
    expiration_date?: string;
    price?: number;
    currency?: string;
};
type InventoryBulkRequest = {
    company_id: number;
    user?: any;
    sizes: InventoryJobPayload[];
    batch_id: string;
};
type InventoryExportJob = {
    url?: string;
    request_params?: any;
    status?: string;
    trigger_on?: string;
    task_id: string;
    seller_id: number;
    completed_on?: string;
};
type InventoryExportRequest = {
    type?: string;
    brand?: number[];
    store?: number[];
};
type InventoryExportResponse = {
    request_params?: any;
    status?: string;
    trigger_on?: string;
    task_id: string;
    seller_id: number;
};
type FilerList = {
    value?: string;
    display?: string;
};
type InventoryConfig = {
    data?: FilerList[];
    multivalues?: boolean;
};
type InventoryPayload = {
    price_effective?: number;
    seller_identifier: string;
    price_marked?: number;
    store_id: number;
    total_quantity?: number;
    expiration_date?: string;
};
type InventoryRequestSchemaV2 = {
    company_id: number;
    meta?: any;
    payload?: InventoryPayload[];
};
type InventoryFailedReason = {
    errors?: string;
    message: string;
};
type InventoryResponseItem = {
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    message: string;
    items?: InventoryResponseItem[];
};
type PageResponse = {
    has_next?: boolean;
    item_total?: number;
    current?: string;
    has_previous?: boolean;
    size?: number;
};
type HsnCodesObject = {
    threshold2?: number;
    id?: string;
    tax2?: number;
    hs2_code?: string;
    company_id?: number;
    tax_on_mrp?: boolean;
    modified_on?: string;
    hsn_code?: string;
    threshold1?: number;
    tax_on_esp?: boolean;
    tax1?: number;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    threshold2?: number;
    tax2?: number;
    hs2_code: string;
    company_id: number;
    tax_on_mrp: boolean;
    hsn_code: string;
    threshold1: number;
    is_active?: boolean;
    tax_on_esp?: boolean;
    uid?: number;
    tax1: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    cess?: number;
    effective_date: string;
    threshold: number;
    rate: number;
};
type HSNDataInsertV2 = {
    type: string;
    created_by?: any;
    created_on?: string;
    description: string;
    modified_on?: string;
    hsn_code: string;
    modified_by?: any;
    taxes: TaxSlab[];
    reporting_hsn: string;
    country_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    discount?: string;
    name?: string;
    slug?: string;
    departments?: string[];
    banners?: ImageUrls;
    action?: Action;
    logo?: Media;
    uid?: number;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    name?: string;
    slug?: string;
    logo?: Media;
    priority_order?: number;
    uid?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    _custom_json?: any;
    name?: string;
    slug?: string;
    childs?: any[];
    banners?: ImageUrls;
    action?: Action;
    uid?: number;
};
type SecondLevelChild = {
    _custom_json?: any;
    name?: string;
    slug?: string;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    action?: Action;
    uid?: number;
};
type Child = {
    _custom_json?: any;
    name?: string;
    slug?: string;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    action?: Action;
    uid?: number;
};
type CategoryItems = {
    name?: string;
    slug?: string;
    childs?: Child[];
    banners?: ImageUrls;
    action?: Action;
    uid?: number;
};
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
};
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
type CategoryListingResponse = {
    data?: DepartmentCategoryTree[];
    departments?: DepartmentIdentifier[];
};
type ApplicationProductListingResponse = {
    page: Page;
    operators?: any;
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
};
type ProductDetail = {
    color?: string;
    product_online_date?: string;
    promo_meta?: any;
    item_type?: string;
    uid?: number;
    type?: string;
    medias?: Media1[];
    image_nature?: string;
    brand?: ProductBrand;
    tryouts?: string[];
    rating?: number;
    rating_count?: number;
    similars?: string[];
    has_variant?: boolean;
    item_code?: string;
    name?: string;
    teaser_tag?: any;
    attributes?: any;
    highlights?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    short_description?: string;
    slug: string;
    description?: string;
};
type InventoryPage = {
    type: string;
    has_next?: boolean;
    next_id?: string;
    item_total: number;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type ArticleQuery = {
    size: string;
    item_id: number;
    ignored_stores?: number[];
};
type AssignStoreArticle = {
    group_id?: string;
    query?: ArticleQuery;
    quantity?: number;
    meta?: any;
    article_assignment?: ArticleAssignment;
};
type AssignStore = {
    channel_type?: string;
    channel_identifier?: string;
    store_ids?: number[];
    pincode: string;
    company_id?: number;
    articles: AssignStoreArticle[];
    app_id: string;
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    price_effective?: number;
    strategy_wise_listing?: any[];
    price_marked?: number;
    s_city?: string;
    index?: number;
    store_pincode?: number;
    group_id?: string;
    item_id: number;
    status: boolean;
    company_id?: number;
    size: string;
    store_id?: number;
    quantity: number;
    uid?: string;
    meta?: any;
    article_assignment: ArticleAssignment1;
    _id?: string;
};
type UserSerializer1 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type UserSerializer2 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetAddressSerializer = {
    address_type?: string;
    state?: string;
    address2?: string;
    pincode?: number;
    address1?: string;
    longitude?: number;
    country?: string;
    landmark?: string;
    latitude?: number;
    country_code?: string;
    city?: string;
};
type GetCompanySerializer = {
    created_by?: UserSerializer2;
    company_type?: string;
    name?: string;
    business_type?: string;
    verified_on?: string;
    verified_by?: UserSerializer2;
    reject_reason?: string;
    addresses?: GetAddressSerializer[];
    created_on?: string;
    modified_on?: string;
    modified_by?: UserSerializer2;
    uid?: number;
    stage?: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    email?: string;
    name?: string;
};
type Document = {
    type: string;
    legal_name?: string;
    url?: string;
    verified?: boolean;
    value: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type InvoiceCredSerializer = {
    username?: string;
    password?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
    closing?: LocationTimingSerializer;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetLocationSerializer = {
    created_by?: UserSerializer1;
    company?: GetCompanySerializer;
    manager?: LocationManagerSerializer;
    verified_on?: string;
    store_type?: string;
    modified_on?: string;
    notification_emails?: string[];
    uid?: number;
    warnings?: any;
    address: GetAddressSerializer;
    phone_number: string;
    code: string;
    documents?: Document[];
    stage?: string;
    name: string;
    product_return_config?: ProductReturnConfigSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    timing?: LocationDayWiseSerializer[];
    _custom_json?: any;
    display_name: string;
    verified_by?: UserSerializer1;
    created_on?: string;
    contact_numbers?: SellerPhoneNumber[];
    modified_by?: UserSerializer1;
    integration_type?: LocationIntegrationType;
};
type LocationListSerializer = {
    page?: Page;
    items?: GetLocationSerializer[];
};
type ApplicationBrandJson = {
    _custom_json: any;
};
type ApplicationCategoryJson = {
    _custom_json: any;
};
type ApplicationStoreJson = {
    _custom_json: any;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type GetCompanyProfileSerializerResponse = {
    business_details?: BusinessDetails;
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    documents?: Document[];
    franchise_enabled?: boolean;
    notification_emails?: string[];
    verified_on?: string;
    uid: number;
    stage?: string;
    business_country_info?: BusinessCountryInfo;
    modified_on?: string;
    mode?: string;
    contact_details?: ContactDetails;
    company_type: string;
    created_on?: string;
    name?: string;
    business_info?: string;
    warnings?: any;
    business_type: string;
    taxes?: CompanyTaxesSerializer[];
};
type CreateUpdateAddressSerializer = {
    longitude: number;
    country: string;
    latitude: number;
    city: string;
    address_type: string;
    state: string;
    country_code?: string;
    landmark?: string;
    pincode: number;
    address2?: string;
    address1: string;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type UpdateCompany = {
    name?: string;
    business_details?: BusinessDetails;
    documents?: Document[];
    business_info?: string;
    franchise_enabled?: boolean;
    warnings?: any;
    contact_details?: ContactDetails;
    _custom_json?: any;
    notification_emails?: string[];
    addresses?: CreateUpdateAddressSerializer[];
    reject_reason?: string;
    company_type?: string;
    business_type?: string;
    taxes?: CompanyTaxesSerializer1[];
};
type ProfileSuccessResponse = {
    success?: boolean;
    uid?: number;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    store_documents?: DocumentsObj;
    product?: DocumentsObj;
    store?: DocumentsObj;
    uid?: number;
    stage?: string;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    slug_key?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    synonyms?: string[];
    _custom_json?: any;
    verified_on?: string;
    uid?: number;
    logo?: string;
    stage?: string;
    description?: string;
    modified_on?: string;
    mode?: string;
    created_on?: string;
    name: string;
    banner?: BrandBannerSerializer;
    _locale_language?: any;
    warnings?: any;
    reject_reason?: string;
};
type CreateUpdateBrandRequestSerializer = {
    name: string;
    banner?: BrandBannerSerializer;
    description?: string;
    _locale_language?: any;
    synonyms?: string[];
    _custom_json?: any;
    uid?: number;
    brand_tier?: string;
    logo: string;
    company_id?: number;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanyDetails = {
    socials?: CompanySocialAccounts[];
    website_url?: string;
};
type CompanySerializer = {
    name?: string;
    details?: CompanyDetails;
    modified_on?: string;
    business_country_info?: BusinessCountryInfo;
    stage?: string;
    _custom_json?: any;
    notification_emails?: string[];
    verified_on?: string;
    uid?: number;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    company_type: string;
    business_type: string;
    created_on?: string;
    created_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    market_channels?: string[];
    reject_reason?: string;
};
type CompanyBrandSerializer = {
    modified_on?: string;
    warnings?: any;
    verified_on?: string;
    uid?: number;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    company?: CompanySerializer;
    reject_reason?: string;
    created_on?: string;
    created_by?: UserSerializer;
    stage?: string;
    brand?: GetBrandResponseSerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    uid?: number;
    company: number;
    brands: number[];
};
type LocationSerializer = {
    name: string;
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    warnings?: any;
    code: string;
    stage?: string;
    _custom_json?: any;
    contact_numbers?: SellerPhoneNumber[];
    notification_emails?: string[];
    uid?: number;
    address: GetAddressSerializer;
    manager?: LocationManagerSerializer;
    company: number;
    timing?: LocationDayWiseSerializer[];
    display_name: string;
    store_type?: string;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
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
    method?: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    tags?: string[];
};
type StartRequest = {
    file_name: string;
    content_type: string;
    size: number;
    tags?: string[];
    params?: any;
};
type CompleteResponse = {
    _id: string;
    file_name: string;
    file_path: string;
    content_type: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: boolean;
    tags?: string[];
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
    stacktrace?: string[];
    finished_on: number;
    processed_on: number;
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
    urls: string[];
    destination: Destination;
    configuration?: ReqConfiguration;
};
type Urls = {
    url: string;
    signed_url: string;
    expiry: number;
};
type SignUrlResponse = {
    urls: Urls[];
};
type SignUrlRequest = {
    expiry: number;
    urls: string[];
};
type DbRecord = {
    success: boolean;
    tags: string[];
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
    items: DbRecord[];
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
    meta?: any;
    updated_at?: string;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    count?: number;
};
type ShortLinkList = {
    items?: ShortLinkRes[];
    page?: Page;
};
type ErrorRes = {
    message?: string;
};
type GCompany = {
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    name?: string;
    stores?: GStore[];
    gstores?: GStore[];
};
type GStore = {
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    code?: string;
    name?: string;
    data?: StoreData;
};
type Metum = {
    _id?: string;
    name?: string;
    value?: string;
};
type ResponseEnvelopeListSlingshotConfigurationDetail = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: SlingshotConfigurationDetail[];
    payload?: SlingshotConfigurationDetail[];
    trace_id?: string;
    page?: Page;
};
type SlingshotConfigurationDetail = {
    integration?: SlingshotIntegration;
    companies?: GCompany[];
};
type SlingshotIntegration = {
    _id?: string;
    description?: string;
    name?: string;
    slug?: string;
    meta?: Metum[];
};
type StoreData = {
    location_id?: string;
};
type KafkaMetaModel = {
    job_type?: string;
    batch_id?: number;
    action?: string;
    trace?: string[];
    created_on?: string;
    created_timestamp?: number;
};
type SuppressStoreModel = {
    stores?: number[];
};
type SuppressStorePayload = {
    payload?: SuppressStoreModel[];
    meta?: KafkaMetaModel;
};
type KafkaResponse = {
    offset?: number;
    partition?: number;
};
type ResponseEnvelopeKafkaResponse = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: KafkaResponse;
    payload?: KafkaResponse;
    trace_id?: string;
    page?: Page;
};
type DataTresholdDTO = {
    min_price?: number;
    safe_stock?: number;
    period_threshold?: number;
    period_threshold_type?: string;
    period_type_list?: GenericDTO[];
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
    group_list?: GenericDTO[];
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
    exclude_steps?: number[];
    hidden_closet_keys?: string[];
    open_tags?: any;
    tax_identifiers?: string[];
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
    prop_bean_configs?: PropBeanConfig[];
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
    folder_name_hierarchies?: string[];
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
    header_array?: string[];
    data_start_index?: number;
    prop_bean_configs?: PropBeanConfig[];
    junk_data_threshold_count?: number;
    file_type?: string;
    line_validity_check?: boolean;
    sheet_names?: string[];
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
    store_config?: StoreConfig[];
    properties?: any;
    immediate_first_run?: boolean;
    disable?: boolean;
    dependent_job_codes?: string[];
    company_config?: CompanyConfig[];
    company_ids?: number[];
    tax_identifiers?: string[];
    priority?: string;
    period_threshold?: number;
    period_threshold_type?: string;
    db_connection_profile?: DBConnectionProfile;
    params?: any;
    open_tags?: any;
    delete_quantity_threshold?: number;
    catalog_master_config?: CatalogMasterConfig;
    aggregator_types?: string[];
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
    prop_bean_configs?: PropBeanConfig[];
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
    prop_bean_configs?: PropBeanConfig[];
    aggregate_pipeline?: any[];
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
    validations?: any[];
    values?: string[];
    include?: boolean;
    source_field?: string;
    source_fields?: string[];
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
    source_fields?: string[];
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
    items?: JobConfigRawDTO[];
    payload?: JobConfigRawDTO[];
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
    include_tags?: string[];
    exclude_tags?: string[];
    query?: any;
};
type TaskConfig = {
    name?: string;
    task_config_id?: number;
    task_params?: TaskParam[];
};
type TaskParam = {
    name?: string;
    value?: any;
};
type TaskStepConfig = {
    task_configs?: TaskConfig[];
    task_config_ids?: number[];
    task_config_group_ids?: number[];
};
type JobStepsDTO = {
    step_name?: string;
    type?: string;
    step_execution_time?: number;
    start_count?: number;
    end_count?: number;
    deleted_count?: number;
    processed_start_time?: string;
    processed_at?: string;
};
type ResponseEnvelopeListJobStepsDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobStepsDTO[];
    payload?: JobStepsDTO[];
    trace_id?: string;
    page?: Page;
};
type ResponseEnvelopeListJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigDTO[];
    payload?: JobConfigDTO[];
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
type JobHistoryDto = {
    total_added_count?: number;
    total_updated_count?: number;
    total_suppressed_count?: number;
    total_initial_count?: number;
    job_id?: number;
    status?: string;
    job_code?: string;
    processed_on?: string;
    filename?: string[];
    error_type?: string;
    message?: string;
};
type JobMetricsDto = {
    job_code?: string;
    is_run_more_than_usual?: string;
    job_history?: JobHistoryDto[];
    total_success_count?: number;
    total_failure_count?: number;
    total_warning_count?: number;
    total_suppressed_count?: number;
    total_job_runs?: number;
};
type ResponseEnvelopeJobMetricsDto = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobMetricsDto;
    payload?: JobMetricsDto;
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
    items?: JobConfigListDTO[];
    payload?: JobConfigListDTO[];
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
    platforms?: string[];
    _id?: string;
    loyalty_points?: LoyaltyPointsConfig;
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
    only_verified_products?: boolean;
    franchise_enabled?: boolean;
    exclude_category?: any[];
    image?: string[];
    company_store?: any[];
};
type InventoryBrand = {
    criteria?: string;
    brands?: any[];
};
type InventoryStore = {
    criteria?: string;
    stores?: any[];
    rules?: AppStoreRules;
};
type AppStoreRules = {
    companies?: number[];
    brands?: any[];
};
type InventoryCategory = {
    criteria?: string;
    categories?: any[];
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
};
type ArticleAssignmentRules = {
    store_priority?: StorePriority;
};
type StorePriority = {
    enabled?: boolean;
    storetype_order?: any[];
};
type AppCartConfig = {
    delivery_charges?: DeliveryCharges;
    enabled?: boolean;
    max_cart_items?: number;
    min_cart_value?: number;
    bulk_coupons?: boolean;
    revenue_engine_coupon?: boolean;
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
    message?: string;
};
type AppLogisticsConfig = {
    logistics_by_seller?: boolean;
    serviceability_check?: boolean;
    same_day_delivery?: boolean;
    dp_assignment?: boolean;
};
type LoyaltyPointsConfig = {
    enabled?: boolean;
    auto_apply?: boolean;
};
type AppInventoryPartialUpdate = {
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    loyalty_points?: LoyaltyPointsConfig;
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
    items?: BrandCompanyInfo[];
    page?: Page;
};
type StoreByBrandsRequest = {
    company_id?: number;
    brands: number;
    search_text?: string;
};
type StoreByBrandsResponse = {
    items?: BrandStoreInfo[];
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
    items?: Application[];
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
    supported_currency?: string[];
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
    domains?: Domain[];
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
    status?: DomainStatus[];
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
    domains?: DomainSuggestion[];
};
type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn[];
    page?: Page;
};
type IntegrationOptIn = {
    validators?: Validators;
    description?: string;
    description_html?: string;
    constants?: string;
    companies?: any[];
    support?: string[];
    _id?: string;
    name?: string;
    meta?: IntegrationMeta[];
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
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type JsonSchema = {
    display?: string;
    key?: string;
    type?: string;
    tooltip?: string;
};
type StoreValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type InventoryValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type OrderValidator = {
    json_schema?: JsonSchema[];
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
    companies?: any[];
    support?: string[];
    _id?: string;
    name?: string;
    meta?: IntegrationMeta[];
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type IntegrationConfigResponse = {
    items?: IntegrationLevel[];
};
type IntegrationLevel = {
    opted?: boolean;
    permissions?: any[];
    last_patch?: LastPatch[];
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    meta?: IntegrationMeta[];
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    data?: any;
};
type UpdateIntegrationLevelRequest = {
    items?: IntegrationLevel[];
};
type OptedStoreIntegration = {
    other_opted?: boolean;
    other_integration?: IntegrationOptIn;
    other_entity?: OtherEntity;
};
type OtherEntity = {
    opted?: boolean;
    permissions?: string[];
    last_patch?: LastPatch[];
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    data?: OtherEntityData;
    meta?: any[];
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
    image?: string[];
    franchise_enabled?: boolean;
    out_of_stock?: boolean;
    only_verified_products?: boolean;
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
    deployed_stores?: number[];
    q?: string;
};
type DeploymentMeta = {
    deployed_stores?: number[];
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
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
    items?: OtherSellerApplication[];
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
    store: number[];
    company: number[];
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
type GoogleMap = {
    credentials?: GoogleMapCredentials;
};
type GoogleMapCredentials = {
    api_key?: string;
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
type ProductDetailFeature = {
    similar?: string[];
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
    currency?: CurrencyFeature;
    revenue_engine?: RevenueEngineFeature;
    feedback?: FeedbackFeature;
    compare_products?: CompareProductsFeature;
    reward_points?: RewardPointsConfig;
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
};
type CurrencyFeature = {
    value?: string[];
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
    revenue_engine_coupon?: boolean;
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
    brands?: number[];
};
type StoreCriteriaRule = {
    companies?: number[];
    brands?: number[];
};
type InventoryStoreRule = {
    criteria?: string;
    rules?: StoreCriteriaRule[];
    stores?: number[];
};
type InventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type StorePriorityRule = {
    enabled?: boolean;
    storetype_order?: string[];
};
type ArticleAssignmentRule = {
    store_priority?: StorePriorityRule;
};
type InventoryArticleAssignment = {
    post_order_reassignment?: boolean;
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
    address_line?: string[];
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
    phone?: string[];
    email?: string[];
    timing?: string;
};
type SocialLinks = {
    facebook?: FacebookLink;
    instagram?: InstagramLink;
    twitter?: TwitterLink;
    pinterest?: PinterestLink;
    google_plus?: GooglePlusLink;
    youtube?: YoutubeLink;
    linked_in?: LinkedInLink;
    vimeo?: VimeoLink;
    blog_link?: BlogLink;
};
type FacebookLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type InstagramLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type TwitterLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type PinterestLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type GooglePlusLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type YoutubeLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type LinkedInLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type VimeoLink = {
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
    domains?: Domain[];
    _id?: string;
};
type CurrenciesResponse = {
    items?: Currency[];
};
type AppCurrencyResponse = {
    application?: string;
    default_currency?: DefaultCurrency;
    supported_currency?: Currency[];
};
type StoreLatLong = {
    type?: string;
    coordinates?: number[];
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
    items?: OrderingStore[];
    deployed_stores?: number[];
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
    __v?: number;
};
type OrderingStoresResponse = {
    page?: Page;
    items?: OrderingStore[];
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type State = {
    is_public?: boolean;
    is_display?: boolean;
    is_archived?: boolean;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    subtitle?: string;
    description?: string;
    remove?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    title?: string;
    auto?: DisplayMetaDict;
};
type Identifier = {
    collection_id?: string[];
    article_id?: string[];
    item_id?: number[];
    store_id?: number[];
    category_id?: number[];
    user_id?: string[];
    brand_id?: number[];
    company_id?: number[];
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Validity = {
    priority?: number;
};
type CouponSchedule = {
    cron?: string;
    start?: string;
    next_schedule?: any[];
    duration?: number;
    end?: string;
};
type RuleDefinition = {
    applicable_on: string;
    auto_apply?: boolean;
    scope?: string[];
    type: string;
    currency_code?: string;
    value_type: string;
    is_exact?: boolean;
    calculate_on: string;
};
type Validation = {
    user_registered_after?: string;
    app_id?: string[];
    anonymous?: boolean;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    types?: string[];
    uses?: PaymentAllowValue;
    networks?: string[];
    codes?: string[];
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UsesRemaining = {
    app?: number;
    total?: number;
    user?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type Restrictions = {
    bulk_bundle?: BulkBundleRestriction;
    user_groups?: number[];
    price_range?: PriceRange;
    platforms?: string[];
    coupon_allowed?: boolean;
    payments?: any;
    post_order?: PostOrder;
    uses?: UsesRestriction;
    ordering_stores?: number[];
};
type Rule = {
    max?: number;
    key?: number;
    discount_qty?: number;
    value?: number;
    min?: number;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponAdd = {
    author?: CouponAuthor;
    type_slug: string;
    code: string;
    state?: State;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
    validity: Validity;
    tags?: string[];
    _schedule?: CouponSchedule;
    rule_definition: RuleDefinition;
    validation?: Validation;
    restrictions?: Restrictions;
    rule: Rule[];
    action?: CouponAction;
    ownership: Ownership;
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
    author?: CouponAuthor;
    type_slug: string;
    code: string;
    state?: State;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
    validity: Validity;
    tags?: string[];
    _schedule?: CouponSchedule;
    rule_definition: RuleDefinition;
    validation?: Validation;
    restrictions?: Restrictions;
    rule: Rule[];
    action?: CouponAction;
    ownership: Ownership;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type CompareObject = {
    greater_than?: number;
    less_than_equals?: number;
    less_than?: number;
    greater_than_equals?: number;
    equals?: number;
};
type ItemCriteria = {
    item_brand?: number[];
    item_exclude_sku?: string[];
    item_sku?: string[];
    cart_quantity?: CompareObject;
    buy_rules?: string[];
    item_store?: number[];
    item_exclude_store?: number[];
    item_exclude_category?: number[];
    all_items?: boolean;
    item_id?: number[];
    item_size?: string[];
    item_exclude_brand?: number[];
    item_category?: number[];
    item_company?: number[];
    item_exclude_company?: number[];
    cart_total?: CompareObject;
};
type DiscountOffer = {
    code?: string;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    min_offer_quantity?: number;
    discount_price?: number;
    discount_percentage?: number;
    discount_amount?: number;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
    discount_type: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    uses?: PaymentAllowValue1;
    codes?: string[];
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type Restrictions1 = {
    user_groups?: number[];
    platforms?: string[];
    order_quantity?: number;
    payments?: PromotionPaymentModes[];
    post_order?: PostOrder1;
    uses: UsesRestriction1;
    user_id?: string[];
    user_registered?: UserRegistered;
    anonymous_users?: boolean;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionSchedule = {
    cron?: string;
    published: boolean;
    start: string;
    next_schedule?: any[];
    duration?: number;
    end?: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type DisplayMeta1 = {
    name?: string;
    description?: string;
    offer_text?: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PromotionListItem = {
    stackable?: boolean;
    discount_rules: DiscountRule[];
    buy_rules: any;
    author?: PromotionAuthor;
    promo_group: string;
    restrictions?: Restrictions1;
    application_id: string;
    post_order_action?: PromotionAction;
    _schedule?: PromotionSchedule;
    mode: string;
    apply_exclusive?: string;
    _custom_json?: any;
    code?: string;
    promotion_type: string;
    apply_all_discount?: boolean;
    apply_priority?: number;
    ownership: Ownership1;
    currency?: string;
    display_meta: DisplayMeta1;
    visiblility?: Visibility;
    date_meta?: PromotionDateMeta;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    stackable?: boolean;
    discount_rules: DiscountRule[];
    buy_rules: any;
    author?: PromotionAuthor;
    promo_group: string;
    restrictions?: Restrictions1;
    application_id: string;
    post_order_action?: PromotionAction;
    _schedule?: PromotionSchedule;
    mode: string;
    apply_exclusive?: string;
    _custom_json?: any;
    code?: string;
    promotion_type: string;
    apply_all_discount?: boolean;
    apply_priority?: number;
    ownership: Ownership1;
    currency?: string;
    display_meta: DisplayMeta1;
    visiblility?: Visibility;
    date_meta?: PromotionDateMeta;
};
type PromotionUpdate = {
    stackable?: boolean;
    discount_rules: DiscountRule[];
    buy_rules: any;
    author?: PromotionAuthor;
    promo_group: string;
    restrictions?: Restrictions1;
    application_id: string;
    post_order_action?: PromotionAction;
    _schedule?: PromotionSchedule;
    mode: string;
    apply_exclusive?: string;
    _custom_json?: any;
    code?: string;
    promotion_type: string;
    apply_all_discount?: boolean;
    apply_priority?: number;
    ownership: Ownership1;
    currency?: string;
    display_meta: DisplayMeta1;
    visiblility?: Visibility;
    date_meta?: PromotionDateMeta;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type CartItem = {
    quantity?: number;
    product_id: string;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type CouponBreakup = {
    is_applied?: boolean;
    code?: string;
    type?: string;
    message?: string;
    value?: number;
    uid?: string;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    total?: number;
    applicable?: number;
    description?: string;
};
type RawBreakup = {
    convenience_fee?: number;
    cod_charge?: number;
    gst_charges?: number;
    fynd_cash?: number;
    mrp_total?: number;
    discount?: number;
    coupon?: number;
    total?: number;
    you_saved?: number;
    vog?: number;
    subtotal?: number;
    delivery_charge?: number;
};
type DisplayBreakup = {
    currency_symbol?: string;
    key?: string;
    message?: string[];
    currency_code?: string;
    display?: string;
    value?: number;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    display?: DisplayBreakup[];
};
type PromoMeta = {
    message?: string;
};
type ProductPrice = {
    selling?: number;
    currency_symbol?: string;
    add_on?: number;
    effective?: number;
    currency_code?: string;
    marked?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductAvailability = {
    is_valid?: boolean;
    out_of_stock?: boolean;
    other_store_quantity?: number;
    deliverable?: boolean;
    sizes?: string[];
};
type BasePrice = {
    effective?: number;
    currency_symbol?: string;
    currency_code?: string;
    marked?: number;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type ProductArticle = {
    size?: string;
    price?: ArticlePriceInfo;
    quantity?: number;
    extra_meta?: any;
    store?: BaseInfo;
    type?: string;
    seller?: BaseInfo;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    uid?: string;
};
type ProductImage = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    type?: string;
    query?: ActionQuery;
    url?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type CartProduct = {
    brand?: BaseInfo;
    images?: ProductImage[];
    type?: string;
    name?: string;
    slug?: string;
    action?: ProductAction;
    categories?: CategoryInfo[];
    uid?: number;
};
type AppliedPromotion = {
    mrp_promotion?: boolean;
    offer_text?: string;
    promo_id?: string;
    promotion_type?: string;
    amount?: number;
    article_quantity?: number;
};
type CartProductInfo = {
    promo_meta?: PromoMeta;
    bulk_offer?: any;
    price?: ProductPriceInfo;
    quantity?: number;
    key?: string;
    identifiers: CartProductIdentifer;
    availability?: ProductAvailability;
    discount?: string;
    price_per_unit?: ProductPriceInfo;
    article?: ProductArticle;
    message?: string;
    product?: CartProduct;
    promotions_applied?: AppliedPromotion[];
    is_set?: boolean;
    coupon_message?: string;
    parent_item_identifiers?: any;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    message?: string;
    items?: CartProductInfo[];
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    city?: string;
    address_type?: string;
    area_code_slug?: string;
    state?: string;
    country?: string;
    pincode?: number;
    area?: string;
    name?: string;
    phone?: number;
    landmark?: string;
    address?: string;
    country_code?: string;
    area_code: string;
    email?: string;
    meta?: any;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
};
type PromiseTimestamp = {
    max?: number;
    min?: number;
};
type PromiseFormatted = {
    max?: string;
    min?: string;
};
type ShipmentPromise = {
    timestamp?: PromiseTimestamp;
    formatted?: PromiseFormatted;
};
type OpenApiCartServiceabilityResponse = {
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    message?: string;
    items?: CartProductInfo[];
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    extra_meta?: any;
    order_id?: string;
    current_status?: string;
    payment_gateway?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    amount: number;
    mode: string;
    meta?: MultiTenderPaymentMeta;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiOrderItem = {
    extra_meta?: any;
    quantity?: number;
    price_effective: number;
    files?: OpenApiFiles[];
    cashback_applied: number;
    amount_paid: number;
    product_id: number;
    delivery_charges: number;
    discount: number;
    size: string;
    price_marked: number;
    employee_discount?: number;
    cod_charges: number;
    loyalty_discount?: number;
    coupon_effective_discount: number;
    meta?: CartItemMeta;
    payment_methods: MultiTenderPaymentMethod[];
};
type OpenApiPlatformCheckoutReq = {
    coupon_value: number;
    order_id?: string;
    delivery_charges: number;
    coupon?: string;
    payment_mode?: string;
    shipping_address?: ShippingAddress;
    currency_code?: string;
    cod_charges: number;
    affiliate_order_id?: string;
    payment_methods: MultiTenderPaymentMethod[];
    coupon_code: string;
    files?: OpenApiFiles[];
    cashback_applied: number;
    cart_value: number;
    loyalty_discount?: number;
    billing_address: ShippingAddress;
    employee_discount?: any;
    cart_items: OpenApiOrderItem[];
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    message?: string;
    order_id: string;
    order_ref_id?: string;
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
    name?: string;
    rule?: RewardsRule;
    title?: string;
    updated_at?: string;
};
type GiveawayResponse = {
    items?: Giveaway[];
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
    items?: HistoryPretty[];
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
    groups?: StatGroup[];
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
    components?: StatsGroupComponent[];
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
    items?: AbandonCartsDetail[];
    cart_total?: string;
    page?: Page;
};
type AbandonCartDetail = {
    _id?: string;
    user_id?: string;
    cart_value?: string;
    articles?: any[];
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
    items?: MkpLogsResp[];
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
    items?: LogInfo[];
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
    app_ids: string[];
    extension_ids: string[];
    job_type: string;
    discount_type: string;
    discount_level: string;
    value?: number;
    file_path?: string;
    brand_ids?: number[];
    store_ids?: number[];
    validity: ValidityObject;
};
type DiscountJob = {
    _id: string;
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids?: string[];
    job_type?: string;
    discount_type?: string;
    discount_level?: string;
    value?: number;
    file_path?: string;
    brand_ids?: number[];
    store_ids?: number[];
    validity: ValidityObject;
    created_on: string;
    modified_on: string;
    created_by: UserDetails;
    modified_by: UserDetails;
    meta?: any;
};
type ListOrCalender = {
    items: DiscountJob[];
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
    brand_ids?: number[];
    store_ids?: number[];
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
type APIError = {
    code?: string;
    message?: string;
    info?: string;
    request_id?: string;
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
    event_category?: string;
    version?: string;
    display_name?: string;
    description?: string;
    created_on?: string;
};
type EventConfigList = {
    items?: EventConfig[];
    page?: Page;
};
type EventConfigResponse = {
    event_configs?: EventConfig[];
};
type SubscriberConfigList = {
    items?: SubscriberResponse[];
    page?: Page;
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
    message_id?: string;
    event_name?: string;
    event_type?: string;
    version?: string;
    status?: boolean;
};
type SubscriberConfig = {
    id?: number;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    status?: any;
    email_id?: string;
    auth_meta?: AuthMeta;
    event_id?: number[];
};
type SubscriberResponse = {
    id?: number;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    email_id?: string;
    status?: any;
    auth_meta?: AuthMeta;
    created_on?: string;
    updated_on?: string;
    event_configs?: EventConfig[];
};
type SubscriberEvent = {
    id?: number;
    subscriber_id?: number;
    event_id?: number;
    created_date?: string;
};
type AuthMeta = {
    type?: string;
    secret?: string;
};
type Association = {
    company_id?: number;
    application_id?: string[];
    extension_id?: string;
    criteria?: string;
};
type EventConfigBase = {
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
};
type RequestBodyAuditLog = {
    log_meta: LogMetaObj;
    log_payload: any;
};
type CreateLogResponse = {
    message?: string;
    internal_message?: string;
};
type LogMetaObj = {
    modifier?: any;
    application?: string;
    entity?: EntityObject;
    device_info?: any;
    location?: any;
};
type EntityObject = {
    id?: string;
    type?: string;
    action?: string;
};
type LogSchemaResponse = {
    docs?: LogDocs[];
};
type LogDocs = {
    entity?: EntityObj;
    modifier?: Modifier;
    device_info?: DeviceInfo;
    location?: Location;
    _id?: string;
    company?: string;
    application?: string;
    sessions?: string;
    date?: string;
    logs?: any;
};
type EntityObj = {
    id?: string;
    type?: string;
    action?: string;
    entity_details?: any;
};
type Modifier = {
    user_id?: string;
    as_administrator?: boolean;
    user_details?: any;
};
type DeviceInfo = {
    user_agent?: string;
    extra_meta?: any;
};
type Location = {
    extra_meta?: any;
};
type EntityTypesResponse = {
    items?: EntityTypeObj[];
};
type EntityTypeObj = {
    entity_value?: string;
    display_name?: string;
};
import Paginator = require("../common/Paginator");
import { InventoryValidator } from "./PlatformModels";
import { OrderValidator } from "./PlatformModels";
