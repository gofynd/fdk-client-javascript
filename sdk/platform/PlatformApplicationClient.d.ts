export = PlatformApplicationClient;
declare class PlatformApplicationClient {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    theme: Theme;
    user: User;
    content: Content;
    communication: Communication;
    payment: Payment;
    catalog: Catalog;
    fileStorage: FileStorage;
    share: Share;
    configuration: Configuration;
    cart: Cart;
    rewards: Rewards;
    analytics: Analytics;
    partner: Partner;
    serviceability: Serviceability;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformApplicationClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, TicketSubCategory, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, BeneficiaryModeDetails, AddBeneficiaryDetailsRequest, RefundAccountResponse, NotFoundResourceError, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, PaymentConfirmationMode, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, RepaymentRequestDetails, RepaymentDetailsSerialiserPayAll, RepaymentResponse, MerchantOnBoardingRequest, MerchantOnBoardingResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, ErrorResponse, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, Meta, Guide, ValidateSizeGuide, SuccessResponse, ListSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemSEO, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, SEOData, MOQData, OwnerAppItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, CollectionSchedule, SeoDetail, CollectionImage, CollectionBanner, UserInfo, CollectionBadge, CollectionQuery, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Media2, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, ReturnConfig, NetQuantity, CustomOrder, Trader, TeaserTag, ProductPublish, TaxIdentifier, ProductCreateUpdateSchemaV2, Logo, Brand, ReturnConfigResponse, Image, NetQuantityResponse, ProductPublished, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, ManufacturerResponse, BrandMeta, ReturnConfig1, StoreMeta, WeightResponse, PriceMeta, QuantityBase, Quantities, CompanyMeta, Trader1, DimensionResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ManufacturerResponse1, BrandMeta1, ReturnConfig2, ArticleStoreResponse, WeightResponse1, PriceArticle, Quantity, QuantitiesArticle, Trader2, CompanyMeta1, DimensionResponse1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ProductReturnConfigSerializer, UserSerializer1, GetAddressSerializer, SellerPhoneNumber, InvoiceCredSerializer, InvoiceDetailsSerializer, Document, UserSerializer2, GetCompanySerializer, LocationTimingSerializer, LocationDayWiseSerializer, LocationManagerSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, CompanyTaxesSerializer, ContactDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Identifier, RuleDefinition, Validity, Rule, PriceRange, PostOrder, BulkBundleRestriction, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, Restrictions, CouponSchedule, Validation, DisplayMetaDict, DisplayMeta, CouponDateMeta, Ownership, CouponAction, CouponAuthor, State, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, PromotionSchedule, PostOrder1, UsesRemaining1, UsesRestriction1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, DisplayMeta1, PromotionDateMeta, Ownership1, PromotionAuthor, PromotionAction, Visibility, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, PromoMeta, CartProductIdentifer, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, BuyRules, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, CategoryInfo, ProductImage, ActionQuery, ProductAction, CartProduct, ProductPrice, ProductPriceInfo, ProductAvailability, CartProductInfo, RawBreakup, DisplayBreakup, CouponBreakup, LoyaltyPoints, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, MultiTenderPaymentMeta, MultiTenderPaymentMethod, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, Schedule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, ApplicationServiceabilityConfig, ServiceabilityErrorResponse, ApplicationServiceabilityResponse, ApplicationServiceabilityConfigResponse, EntityRegionViewRequest, EntityRegionViewPage, EntityRegionViewError, EntityRegionViewItems, EntityRegionViewResponse, ZoneDataItem, ListViewSummary, ListViewChannels, ListViewProduct, ListViewItems, ListViewResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, GetZoneDataViewItems, GetSingleZoneDataViewResponse, UpdateZoneData, ZoneUpdateRequest, ZoneSuccessResponse, CreateZoneData, ZoneRequest, ZoneResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, GetZoneFromApplicationIdViewResponse, PincodeMopData, PincodeMopUpdateResponse, PincodeMOPresponse, PincodeMopBulkData, PincodeBulkViewResponse, PincodeCodStatusListingRequest, PincodeCodStatusListingResponse, Error, PincodeCodStatusListingPage, PincodeCodStatusListingSummary, PincodeMopUpdateAuditHistoryRequest, PincodeMopUpdateAuditHistoryPaging, PincodeMopUpdateAuditHistoryResponse, PincodeMopUpdateAuditHistoryResponseData };
}
import Lead = require("./Lead/LeadPlatformApplicationClient");
import Theme = require("./Theme/ThemePlatformApplicationClient");
import User = require("./User/UserPlatformApplicationClient");
import Content = require("./Content/ContentPlatformApplicationClient");
import Communication = require("./Communication/CommunicationPlatformApplicationClient");
import Payment = require("./Payment/PaymentPlatformApplicationClient");
import Catalog = require("./Catalog/CatalogPlatformApplicationClient");
import FileStorage = require("./FileStorage/FileStoragePlatformApplicationClient");
import Share = require("./Share/SharePlatformApplicationClient");
import Configuration = require("./Configuration/ConfigurationPlatformApplicationClient");
import Cart = require("./Cart/CartPlatformApplicationClient");
import Rewards = require("./Rewards/RewardsPlatformApplicationClient");
import Analytics = require("./Analytics/AnalyticsPlatformApplicationClient");
import Partner = require("./Partner/PartnerPlatformApplicationClient");
import Serviceability = require("./Serviceability/ServiceabilityPlatformApplicationClient");
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
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
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
    priority: PriorityEnum;
    should_notify?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: any[];
    description?: string;
    priority: PriorityEnum;
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
    priority?: PriorityEnum;
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
    type: HistoryTypeEnum;
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
    type: TicketAssetTypeEnum;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: TicketAsset[];
};
type AddTicketPayload = {
    created_by?: any;
    status?: string;
    priority?: PriorityEnum;
    category: string;
    content: TicketContent;
    _custom_json?: any;
};
type Priority = {
    key: PriorityEnum;
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
type CommunicationDetails = {
    value?: string;
    description?: string;
    enabled?: boolean;
};
type SupportGeneralConfig = {
    _id?: string;
    support_email?: CommunicationDetails;
    support_phone?: CommunicationDetails;
    support_faq?: CommunicationDetails;
    show_communication_info?: boolean;
    show_support_dris?: boolean;
    integration?: any;
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
    source: TicketSourceEnum;
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
type DeleteApplicationUserRequestSchema = {
    user_id?: string;
    reason?: string;
    reason_id?: string;
    request_id?: string;
    otp?: string;
};
type UnDeleteUserRequestSchema = {
    user_id?: string;
    reason?: string;
    reason_id?: string;
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
type SendResetPasswordMobileRequestSchema = {
    country_code?: string;
    mobile?: string;
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
type DeleteUserSuccess = {
    success?: boolean;
};
type UnDeleteUserSuccess = {
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
    delete_account_day?: number;
    delete_account_reasons?: DeleteAccountReasons[];
    delete_account_consent?: any;
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
type DeleteAccountReasons = {
    reason_text?: string;
    reason_id?: string;
    show_text_area?: boolean;
};
type DeleteAccountConsent = {
    consent_text?: string;
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
type ApplicationLegal = {
    application?: string;
    tnc?: string;
    policy?: string;
    shipping?: string;
    returns?: string;
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
    _id?: string;
    redirect_from?: string;
    redirect_to?: string;
    updated_at?: string;
    created_at?: string;
    __source?: PathSourceSchema;
};
type PathSourceSchema = {
    type?: string;
    id?: string;
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
type DateMeta = {
    created_on?: string;
    modified_on?: string;
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
    type: PageType;
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
    pages?: any[];
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
    _id?: string;
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
type CommonError = {
    message?: string;
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
    tags?: string[];
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
    faqs?: FaqSchema[];
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
    pages?: any[];
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
    value?: any;
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
type SendOtpSmsCommsTemplate = {
    key?: string;
    value?: any;
};
type SendOtpSmsCommsProvider = {
    slug?: string;
    _id?: string;
};
type SendOtpEmailCommsTemplate = {
    key?: string;
    value?: any;
};
type SendOtpCommsReqData = {
    send_same_otp_to_channel?: boolean;
    mobile?: string;
    country_code?: string;
    to?: string;
};
type SendOtpCommsReqSms = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpSmsCommsTemplate;
    provider?: SendOtpSmsCommsProvider;
};
type SendOtpCommsReqEmail = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpEmailCommsTemplate;
};
type SendOtpCommsResSms = {
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    resend_timer?: number;
};
type SendOtpCommsResEmail = {
    success?: boolean;
    request_id?: string;
    message?: string;
    to?: string;
    resend_timer?: number;
};
type SendOtpCommsReq = {
    data?: SendOtpCommsReqData;
    sms?: SendOtpCommsReqSms;
    email?: SendOtpCommsReqEmail;
};
type SendOtpCommsRes = {
    sms?: SendOtpCommsResSms;
    email?: SendOtpCommsResEmail;
};
type VerifyOtpCommsReq = {
    request_id?: string;
    otp?: string;
};
type VerifyOtpCommsSuccessRes = {
    success?: boolean;
    mobile?: string;
    country_code?: string;
    message?: string;
};
type VerifyOtpCommsErrorRes = {
    success?: boolean;
    message?: string;
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
    app_id: string;
    display_fields: string[];
    success: boolean;
    excluded_fields: string[];
    aggregators?: any[];
    created: boolean;
};
type ErrorCodeDescription = {
    success: boolean;
    code: string;
    description: string;
};
type PaymentGatewayConfig = {
    key: string;
    is_active?: boolean;
    secret: string;
    merchant_salt: string;
    config_type: string;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    is_active?: boolean;
    aggregator_name?: PaymentGatewayConfig;
};
type PaymentGatewayToBeReviewed = {
    aggregator: string[];
    success: boolean;
};
type ErrorCodeAndDescription = {
    code: string;
    description: string;
};
type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
    success: boolean;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentApp = {
    display_name?: string;
    logos?: PaymentModeLogo;
    code?: string;
    package_name?: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    exp_month?: number;
    card_number?: string;
    merchant_code?: string;
    expired?: boolean;
    logo_url?: PaymentModeLogo;
    intent_app_error_list?: string[];
    exp_year?: number;
    intent_flow?: boolean;
    name?: string;
    timeout?: number;
    cod_limit?: number;
    card_name?: string;
    nickname?: string;
    card_issuer?: string;
    card_id?: string;
    display_priority?: number;
    display_name?: string;
    card_brand?: string;
    card_isin?: string;
    retry_count?: number;
    card_fingerprint?: string;
    remaining_limit?: number;
    card_type?: string;
    intent_app?: IntentApp[];
    cod_limit_per_order?: number;
    card_brand_image?: string;
    card_token?: string;
    card_reference?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    code?: string;
    fynd_vpa?: string;
    aggregator_name: string;
};
type RootPaymentMode = {
    list?: PaymentModeList[];
    display_priority: number;
    display_name: string;
    anonymous_enable?: boolean;
    add_card_enabled?: boolean;
    name: string;
    aggregator_name?: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    payouts_aggregators: any[];
    is_active: boolean;
    transfer_type: string;
    is_default: boolean;
    customers: any;
    unique_transfer_no: any;
    more_attributes: any;
};
type PayoutBankDetails = {
    account_no?: string;
    ifsc_code: string;
    city?: string;
    pincode?: number;
    bank_name?: string;
    state?: string;
    account_type: string;
    country?: string;
    account_holder?: string;
    branch_name?: string;
};
type PayoutRequest = {
    users: any;
    bank_details: PayoutBankDetails;
    unique_external_id: string;
    is_active: boolean;
    transfer_type: string;
    aggregator: string;
};
type PayoutResponse = {
    bank_details: any;
    users: any;
    payouts: any;
    is_active: boolean;
    transfer_type: string;
    created: boolean;
    success: boolean;
    aggregator: string;
    payment_status: string;
    unique_transfer_no: string;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    success: boolean;
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
    success: boolean;
    data: any[];
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    aggregator: string;
    success: boolean;
    config: any;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    success: boolean;
    data: any;
};
type BeneficiaryModeDetails = {
    vpa?: string;
    account_no: string;
    ifsc_code: string;
    address?: string;
    comment?: string;
    wallet?: string;
    bank_name: string;
    email: string;
    mobile: string;
    account_holder: string;
    branch_name: string;
};
type AddBeneficiaryDetailsRequest = {
    shipment_id: string;
    details: BeneficiaryModeDetails;
    transfer_mode: string;
    order_id: string;
    request_id?: string;
    delights: boolean;
    otp?: string;
};
type RefundAccountResponse = {
    success: boolean;
    message: string;
    data?: any;
    is_verified_flag?: boolean;
};
type NotFoundResourceError = {
    success: boolean;
    code: string;
    description: string;
};
type IfscCodeResponse = {
    success?: boolean;
    branch_name: string;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    comment?: string;
    id: number;
    mobile?: string;
    account_holder: string;
    branch_name?: string;
    transfer_mode: string;
    title: string;
    bank_name: string;
    modified_on: string;
    delights_user_name?: string;
    beneficiary_id: string;
    ifsc_code: string;
    address: string;
    created_on: string;
    is_active: boolean;
    display_name: string;
    account_no: string;
    subtitle: string;
    email: string;
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
    order_id: string;
    payment_methods: PaymentConfirmationMode[];
};
type PaymentConfirmationResponse = {
    order_id: string;
    success: boolean;
    message: string;
};
type CODdata = {
    usages: number;
    limit: number;
    user_id: string;
    is_active: boolean;
    remaining_limit: number;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    merchant_user_id: string;
    mobileno: string;
    is_active: boolean;
};
type SetCODOptionResponse = {
    success: boolean;
    message: string;
};
type RepaymentRequestDetails = {
    outstanding_details_id: number;
    amount: number;
    aggregator_order_id: string;
    fwd_shipment_id: string;
    current_status: string;
    aggregator: string;
    payment_mode: string;
    payment_mode_identifier: string;
    merchant_order_id: string;
    aggregator_transaction_id: string;
};
type RepaymentDetailsSerialiserPayAll = {
    aggregator_order_id: string;
    extension_order_id: string;
    shipment_details?: RepaymentRequestDetails[];
    aggregator_transaction_id: string;
    total_amount: number;
};
type RepaymentResponse = {
    success: boolean;
    data: any;
};
type MerchantOnBoardingRequest = {
    app_id: string;
    user_id: string;
    status: string;
    aggregator: string;
    credit_line_id: string;
};
type MerchantOnBoardingResponse = {
    success: boolean;
    data: any;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    words?: string[];
    result: SearchKeywordResult;
};
type GetSearchWordsData = {
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    words?: string[];
    result?: any;
    uid?: string;
};
type ErrorResponse = {
    status?: number;
    meta?: any;
    error?: string;
    message?: string;
    code?: string;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type AutocompletePageAction = {
    type?: string;
    query?: any;
    url?: string;
    params?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type Media = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type AutocompleteResult = {
    _custom_json?: any;
    action?: AutocompleteAction;
    display?: string;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    words?: string[];
    results?: AutocompleteResult[];
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    app_id?: string;
    words?: string[];
    results?: any[];
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    app_id?: string;
    words?: string[];
    results?: any[];
};
type ProductBundleItem = {
    max_quantity: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    min_quantity: number;
    product_uid: number;
};
type ProductBundleRequest = {
    slug: string;
    company_id?: number;
    name: string;
    is_active: boolean;
    page_visibility?: string[];
    created_by?: any;
    meta?: any;
    same_store_assignment?: boolean;
    modified_on?: string;
    created_on?: string;
    choice: string;
    modified_by?: any;
    products: ProductBundleItem[];
    logo?: string;
};
type GetProductBundleCreateResponse = {
    slug: string;
    company_id?: number;
    name: string;
    is_active: boolean;
    page_visibility?: string[];
    created_by?: any;
    meta?: any;
    same_store_assignment?: boolean;
    modified_on?: string;
    id?: string;
    created_on?: string;
    choice: string;
    modified_by?: any;
    products: ProductBundleItem[];
    logo?: string;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    slug: string;
    company_id?: number;
    name: string;
    is_active: boolean;
    page_visibility?: string[];
    meta?: any;
    same_store_assignment?: boolean;
    modified_on?: string;
    choice: string;
    modified_by?: any;
    products: ProductBundleItem[];
    logo?: string;
};
type LimitedProductData = {
    slug?: string;
    name?: string;
    country_of_origin?: string;
    item_code?: string;
    sizes?: string[];
    attributes?: any;
    short_description?: string;
    identifier?: any;
    price?: any;
    quantity?: number;
    uid?: number;
    images?: string[];
};
type Size = {
    quantity?: number;
    display?: string;
    is_available?: boolean;
    value?: string;
};
type Price = {
    max_effective?: number;
    currency?: string;
    max_marked?: number;
    min_effective?: number;
    min_marked?: number;
};
type GetProducts = {
    product_details?: LimitedProductData;
    max_quantity?: number;
    sizes?: Size[];
    price?: Price;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    min_quantity?: number;
    product_uid?: number;
};
type GetProductBundleResponse = {
    slug?: string;
    company_id?: number;
    page_visibility?: string[];
    name?: string;
    is_active?: boolean;
    meta?: any;
    same_store_assignment?: boolean;
    choice?: string;
    products?: GetProducts[];
    logo?: string;
};
type Meta = {
    unit?: string;
    values?: any[];
    headers?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    name: string;
    description?: string;
    company_id?: number;
    guide?: Guide;
    created_by?: any;
    modified_by?: any;
    modified_on?: string;
    title: string;
    image?: string;
    id?: string;
    created_on?: string;
    brand_id?: number;
    active?: boolean;
    tag?: string;
    subtitle?: string;
};
type SuccessResponse = {
    success?: boolean;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    created_by?: any;
    name?: string;
    company_id?: number;
    guide?: any;
    modified_on?: string;
    title?: string;
    tag?: string;
    id?: string;
    created_on?: string;
    brand_id?: number;
    active?: boolean;
    modified_by?: any;
    subtitle?: string;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationItemMOQ = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    alt_text?: any;
    is_gift?: boolean;
    _custom_meta?: MetaFields[];
    seo?: ApplicationItemSEO;
    moq?: ApplicationItemMOQ;
    is_cod?: boolean;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    is_gift?: boolean;
    seo?: SEOData;
    moq?: MOQData;
    is_cod?: boolean;
};
type GetConfigMetadataResponse = {
    values?: any[];
    condition?: any[];
    data: any[];
};
type AttributeDetailsGroup = {
    slug?: string;
    unit?: string;
    is_active: boolean;
    name: string;
    display_type: string;
    priority: number;
    key?: string;
    logo?: string;
};
type AppConfigurationDetail = {
    slug: string;
    app_id: string;
    is_active: boolean;
    name?: string;
    priority: number;
    is_default: boolean;
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    logo?: string;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    current: number;
    has_next: boolean;
    next: number;
    total_count: number;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    name?: string;
    app_id: string;
    is_active: boolean;
    default_key: string;
    priority: number;
    is_default: boolean;
    key: string;
    logo?: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    units?: any[];
    display?: string;
    key?: string;
    filter_types?: string[];
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
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
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    map_values?: any[];
    condition?: string;
    map?: any;
    sort?: string;
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
};
type ConfigurationListingFilterConfig = {
    name?: string;
    type: string;
    is_active: boolean;
    display_name?: string;
    priority: number;
    value_config?: ConfigurationListingFilterValue;
    key: string;
    logo?: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    name?: string;
    is_active: boolean;
    priority: number;
    key: string;
    logo?: string;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
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
    is_active: boolean;
    subtitle?: string;
    priority: number;
    title?: string;
    size?: ProductSize;
    key: string;
    logo?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    name: string;
    is_active: boolean;
    display_type: string;
    priority: number;
    size: ProductSize;
    key: string;
    logo?: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppConfiguration = {
    type?: string;
    app_id: string;
    created_by?: any;
    modified_on?: string;
    created_on?: string;
    listing?: ConfigurationListing;
    config_id?: string;
    product?: ConfigurationProduct;
    modified_by?: any;
    config_type: string;
};
type AppCatalogConfiguration = {
    type?: string;
    app_id: string;
    created_by?: any;
    modified_on?: string;
    id?: string;
    created_on?: string;
    listing?: ConfigurationListing;
    config_id?: string;
    product?: ConfigurationProduct;
    modified_by?: any;
    config_type: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    app_id: string;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_type: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    name?: string;
    is_selected?: boolean;
    value?: string;
};
type ProductFiltersValue = {
    currency_symbol?: string;
    selected_max?: number;
    is_selected: boolean;
    display_format?: string;
    min?: number;
    count?: number;
    display: string;
    query_format?: string;
    max?: number;
    currency_code?: string;
    value: any;
    selected_min?: number;
};
type ProductFiltersKey = {
    name: string;
    operators?: string[];
    display: string;
    kind?: string;
    logo?: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type GetCollectionQueryOptionResponse = {
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    operators: any;
};
type CollectionSchedule = {
    cron?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
    start?: string;
    end?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type UserInfo = {
    user_id?: string;
    email?: string;
    uid?: string;
    username?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
};
type CreateCollection = {
    type: string;
    slug: string;
    app_id: string;
    _custom_json?: any;
    _schedule?: CollectionSchedule;
    meta?: any;
    seo?: SeoDetail;
    banners: CollectionBanner;
    _locale_language?: any;
    allow_facets?: boolean;
    logo: CollectionImage;
    created_by?: UserInfo;
    visible_facets_keys?: string[];
    badge?: CollectionBadge;
    tags?: string[];
    priority?: number;
    is_visible?: boolean;
    description?: string;
    allow_sort?: boolean;
    name: string;
    published?: boolean;
    is_active?: boolean;
    query?: CollectionQuery[];
    sort_on?: string;
    modified_by?: UserInfo;
};
type BannerImage = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionCreateResponse = {
    slug?: string;
    app_id?: string;
    type?: string;
    _schedule?: any;
    meta?: any;
    banners?: ImageUrls;
    allow_facets?: boolean;
    logo?: BannerImage;
    visible_facets_keys?: string[];
    badge?: any;
    priority?: number;
    description?: string;
    tag?: string[];
    allow_sort?: boolean;
    name?: string;
    is_active?: boolean;
    cron?: any;
    query?: CollectionQuery[];
    sort_on?: string;
};
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type GetCollectionDetailNest = {
    slug?: string;
    app_id?: string;
    type?: string;
    _schedule?: any;
    meta?: any;
    banners?: ImageUrls;
    allow_facets?: boolean;
    logo?: Media1;
    visible_facets_keys?: string[];
    badge?: any;
    priority?: number;
    description?: string;
    tag?: string[];
    allow_sort?: boolean;
    name?: string;
    is_active?: boolean;
    cron?: any;
    query?: CollectionQuery[];
    action?: Action;
    uid?: string;
};
type CollectionListingFilterType = {
    name?: string;
    display?: string;
    is_selected?: boolean;
};
type CollectionListingFilterTag = {
    name?: string;
    display?: string;
    is_selected?: boolean;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
    page?: Page;
};
type CollectionDetailResponse = {
    slug?: string;
    app_id?: string;
    type?: string;
    _schedule?: any;
    meta?: any;
    banners?: ImageUrls;
    allow_facets?: boolean;
    logo?: Media1;
    visible_facets_keys?: string[];
    badge?: any;
    priority?: number;
    description?: string;
    tag?: string[];
    allow_sort?: boolean;
    name?: string;
    is_active?: boolean;
    cron?: any;
    query?: CollectionQuery[];
    uid?: string;
};
type UpdateCollection = {
    slug?: string;
    _custom_json?: any;
    type?: string;
    _schedule?: CollectionSchedule;
    meta?: any;
    seo?: SeoDetail;
    banners?: CollectionBanner;
    _locale_language?: any;
    allow_facets?: boolean;
    logo?: CollectionImage;
    visible_facets_keys?: string[];
    badge?: CollectionBadge;
    tags?: string[];
    priority?: number;
    is_visible?: boolean;
    description?: string;
    allow_sort?: boolean;
    name?: string;
    published?: boolean;
    is_active?: boolean;
    query?: CollectionQuery[];
    sort_on?: string;
    modified_by?: UserInfo;
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
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
type ProductBrand = {
    name?: string;
    action?: Action;
    uid?: number;
    logo?: Media1;
};
type Price1 = {
    min?: number;
    max?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductDetailAttribute = {
    type?: string;
    key?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductListingDetail = {
    type?: string;
    slug: string;
    discount?: string;
    highlights?: string[];
    has_variant?: boolean;
    brand?: ProductBrand;
    similars?: string[];
    product_online_date?: string;
    rating?: number;
    promo_meta?: any;
    medias?: Media1[];
    image_nature?: string;
    short_description?: string;
    price?: ProductListingPrice;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    color?: string;
    item_type?: string;
    item_code?: string;
    tryouts?: string[];
    description?: string;
    rating_count?: number;
    name?: string;
    teaser_tag?: any;
    attributes?: any;
    sellable?: boolean;
    uid?: number;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    page?: Page;
};
type CatalogInsightItem = {
    sellable_count?: number;
    count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightBrand = {
    name?: string;
    available_sizes?: number;
    total_sizes?: number;
    available_articles?: number;
    article_freshness?: number;
    total_articles?: number;
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
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    company_id?: number;
    opt_level: string;
    store_ids?: number[];
    enabled?: boolean;
    brand_ids?: number[];
    platform?: string;
};
type CompanyOptIn = {
    created_by?: any;
    company_id: number;
    opt_level: string;
    modified_on: number;
    store_ids: number[];
    enabled: boolean;
    created_on: number;
    brand_ids: number[];
    modified_by?: any;
    platform: string;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    name?: string;
    business_type?: string;
    uid?: number;
    company_type?: string;
};
type CompanyBrandDetail = {
    total_article?: number;
    company_id?: number;
    brand_id?: number;
    brand_name?: string;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    store?: number;
    company?: string;
    brand?: number;
};
type StoreDetail = {
    name?: string;
    company_id?: number;
    store_type?: string;
    display_name?: string;
    modified_on?: string;
    timing?: any;
    manager?: any;
    created_on?: string;
    documents?: any[];
    additional_contacts?: any[];
    address?: any;
    uid?: number;
    store_code?: string;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    indexing: boolean;
    priority?: number;
    depends_on?: string[];
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    type: string;
    mandatory?: boolean;
    format?: string;
    allowed_values?: string[];
    multi?: boolean;
    range?: AttributeSchemaRange;
};
type GenderDetail = {
    slug?: string;
    name?: string;
    meta?: AttributeMasterMeta;
    details?: AttributeMasterDetails;
    id?: string;
    departments?: string[];
    is_nested?: boolean;
    filters?: AttributeMasterFilter;
    schema?: AttributeMaster;
    description?: string;
    enabled_for_end_consumer?: boolean;
    logo?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    status?: number;
    meta?: any;
    errors?: any;
    message?: string;
    code?: string;
};
type DepartmentCreateUpdate = {
    name: string;
    slug?: string;
    is_active?: boolean;
    _custom_json?: any;
    synonyms?: string[];
    tags?: string[];
    _cls?: string;
    priority_order: number;
    platforms?: any;
    uid?: number;
    logo: string;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    contact?: string;
    _id?: string;
    user_id?: string;
    username?: string;
    uid?: string;
};
type GetDepartment = {
    name?: string;
    slug?: string;
    is_active?: boolean;
    page_size?: number;
    synonyms?: string[];
    created_by?: UserSerializer;
    page_no?: number;
    item_type?: string;
    priority_order?: number;
    modified_on?: string;
    search?: string;
    created_on?: string;
    modified_by?: UserSerializer;
    uid?: number;
    logo?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    status?: number;
    meta?: any;
    errors?: any;
    message?: string;
    code?: string;
};
type UserDetail = {
    contact?: string;
    super_user?: boolean;
    user_id: string;
    username: string;
};
type DepartmentModel = {
    created_by?: UserDetail;
    slug?: any;
    name: any;
    is_active?: boolean;
    synonyms?: any[];
    _id?: any;
    _custom_json?: any;
    _cls?: any;
    priority_order: number;
    modified_on: string;
    verified_by?: UserDetail;
    verified_on?: string;
    created_on: string;
    modified_by?: UserDetail;
    uid?: number;
    logo: string;
};
type ProductTemplate = {
    slug: string;
    name?: string;
    is_active?: boolean;
    created_by?: any;
    is_expirable: boolean;
    modified_by?: any;
    attributes?: string[];
    modified_on?: string;
    departments?: string[];
    created_on?: string;
    description?: string;
    categories?: string[];
    tag?: string;
    is_archived?: boolean;
    is_physical: boolean;
    logo?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    slug: string;
    name?: string;
    is_active?: boolean;
    is_expirable: boolean;
    attributes?: string[];
    id?: string;
    departments?: string[];
    description?: string;
    categories?: string[];
    tag?: string;
    is_archived?: boolean;
    is_physical: boolean;
    logo?: string;
};
type Properties = {
    slug?: any;
    country_of_origin?: any;
    highlights?: any;
    multi_size?: any;
    media?: any;
    sizes?: any;
    currency?: any;
    return_config?: any;
    product_group_tag?: any;
    command?: any;
    item_type?: any;
    tags?: any;
    size_guide?: any;
    item_code?: any;
    category_slug?: any;
    brand_uid?: any;
    no_of_boxes?: any;
    variants?: any;
    custom_order?: any;
    description?: any;
    name?: any;
    trader?: any;
    teaser_tag?: any;
    hsn_code?: any;
    is_active?: any;
    product_publish?: any;
    is_dependent?: any;
    trader_type?: any;
    short_description?: any;
};
type GlobalValidation = {
    type?: string;
    properties?: Properties;
    required?: string[];
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
    message?: string;
    data?: any;
};
type HSNData = {
    country_of_origin?: string[];
    hsn_code?: string[];
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadItemsData = {
    type?: string;
    brand?: string[];
    templates?: string[];
};
type ProductDownloadsItems = {
    created_by?: VerifiedBy;
    trigger_on?: string;
    seller_id?: number;
    status?: string;
    completed_on?: string;
    id?: string;
    task_id?: string;
    url?: string;
    template_tags?: any;
    data?: ProductDownloadItemsData;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Media2 = {
    portrait: string;
    landscape: string;
    logo: string;
};
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type CategoryRequestBody = {
    name: string;
    slug?: string;
    marketplaces?: CategoryMapping;
    is_active: boolean;
    synonyms?: string[];
    media?: Media2;
    priority?: number;
    hierarchy?: Hierarchy[];
    departments: number[];
    tryouts?: string[];
    level: number;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type Category = {
    name: string;
    slug?: string;
    marketplaces?: CategoryMapping;
    is_active: boolean;
    synonyms?: string[];
    created_by?: any;
    media?: Media2;
    priority?: number;
    modified_on?: string;
    id?: string;
    hierarchy?: Hierarchy[];
    departments: number[];
    tryouts?: string[];
    created_on?: string;
    level: number;
    modified_by?: any;
    uid?: number;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type ReturnConfig = {
    returnable: boolean;
    unit: string;
    time: number;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type Trader = {
    type?: string;
    address?: string[];
    name: any;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
};
type ProductCreateUpdateSchemaV2 = {
    slug: string;
    company_id: number;
    _custom_json?: any;
    highlights?: string[];
    country_of_origin: string;
    is_image_less_product?: boolean;
    multi_size?: boolean;
    media?: Media1[];
    sizes: any[];
    currency: string;
    return_config: ReturnConfig;
    uid?: number;
    variant_group?: any;
    departments: number[];
    is_set?: boolean;
    requester?: string;
    product_group_tag?: string[];
    bulk_job_id?: string;
    item_type: string;
    tags?: string[];
    size_guide?: string;
    item_code: string;
    category_slug: string;
    brand_uid: number;
    no_of_boxes?: number;
    variants?: any;
    net_quantity?: NetQuantity;
    template_tag: string;
    description?: string;
    custom_order?: CustomOrder;
    name: string;
    trader: Trader[];
    change_request_id?: any;
    teaser_tag?: TeaserTag;
    is_active?: boolean;
    action?: string;
    attributes?: any;
    variant_media?: any;
    product_publish?: ProductPublish;
    is_dependent?: boolean;
    tax_identifier: TaxIdentifier;
    short_description?: string;
};
type Logo = {
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type Brand = {
    name?: string;
    uid?: number;
    logo?: Logo;
};
type ReturnConfigResponse = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Image = {
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
    url?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Product = {
    slug?: string;
    _custom_json?: any;
    primary_color?: string;
    country_of_origin?: string;
    highlights?: string[];
    all_company_ids?: number[];
    multi_size?: boolean;
    media?: Media1[];
    company_id?: number;
    is_image_less_product?: boolean;
    sizes?: any[];
    modified_on?: string;
    verified_on?: string;
    all_sizes?: any[];
    currency?: string;
    brand?: Brand;
    return_config?: ReturnConfigResponse;
    variant_group?: any;
    images?: Image[];
    created_by?: any;
    category?: any;
    image_nature?: string;
    verified_by?: VerifiedBy;
    short_description?: string;
    id?: string;
    departments?: number[];
    is_set?: boolean;
    all_identifiers?: string[];
    color?: string;
    product_group_tag?: string[];
    pending?: string;
    item_type?: string;
    tags?: string[];
    size_guide?: string;
    item_code?: string;
    category_slug?: string;
    brand_uid?: number;
    no_of_boxes?: number;
    created_on?: string;
    variants?: any;
    category_uid?: number;
    net_quantity?: NetQuantityResponse;
    template_tag?: string;
    description?: string;
    custom_order?: any;
    is_expirable?: boolean;
    stage?: string;
    l3_mapping?: string[];
    is_physical?: boolean;
    name?: string;
    is_active?: boolean;
    trader?: any[];
    hsn_code?: string;
    teaser_tag?: any;
    attributes?: any;
    moq?: any;
    variant_media?: any;
    product_publish?: ProductPublished;
    is_dependent?: boolean;
    tax_identifier?: any;
    modified_by?: any;
    uid?: number;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductVariants = {
    name?: string;
    media?: Media1[];
    item_code?: string;
    brand_uid?: number;
    category_uid?: number;
    uid?: number;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    slug: string;
    unit?: string;
    modified_on?: string;
    logo?: string;
    created_by?: any;
    synonyms?: any;
    departments: string[];
    is_nested?: boolean;
    variant?: boolean;
    raw_key?: string;
    schema: AttributeMaster;
    filters: AttributeMasterFilter;
    enabled_for_end_consumer?: boolean;
    tags?: string[];
    created_on?: string;
    description?: string;
    name?: string;
    details: AttributeMasterDetails;
    suggestion?: string;
    modified_by?: any;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    gtin_value: string;
    gtin_type: string;
    primary?: boolean;
};
type AllSizes = {
    item_weight: number;
    item_weight_unit_of_measure: any;
    item_dimensions_unit_of_measure: string;
    item_height: number;
    item_length: number;
    size: any;
    identifiers?: ValidateIdentifier[];
    item_width: number;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    user_id?: string;
    email?: string;
    uid?: string;
    username?: string;
};
type BulkJob = {
    created_by?: UserInfo1;
    company_id: number;
    is_active?: boolean;
    template_tag?: string;
    tracking_url?: string;
    failed?: number;
    modified_on?: string;
    custom_template_tag?: string;
    succeed?: number;
    total?: number;
    created_on: string;
    cancelled?: number;
    cancelled_records?: any[];
    failed_records?: any[];
    stage?: string;
    file_path?: string;
    modified_by?: UserInfo1;
};
type BulkResponse = {
    created_by?: UserInfo1;
    is_active?: boolean;
    modified_on?: string;
    created_on: string;
    modified_by?: UserInfo1;
    batch_id: string;
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    created_by?: UserDetail1;
    company_id?: number;
    is_active?: boolean;
    failed?: number;
    template?: ProductTemplate;
    modified_on?: string;
    succeed?: number;
    total?: number;
    created_on?: string;
    cancelled?: number;
    cancelled_records?: string[];
    template_tag?: string;
    failed_records?: string[];
    stage?: string;
    file_path?: string;
    modified_by?: UserDetail1;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    company_id: number;
    batch_id: string;
    data: any[];
    template_tag: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    company_id?: number;
    user: any;
    url: string;
};
type UserCommon = {
    company_id?: number;
    user_id?: string;
    username?: string;
};
type Items = {
    created_by?: UserCommon;
    company_id?: number;
    is_active?: boolean;
    tracking_url?: string;
    failed?: number;
    modified_on?: string;
    id?: string;
    succeed?: number;
    total?: number;
    created_on?: string;
    retry?: number;
    cancelled?: number;
    cancelled_records?: string[];
    failed_records?: string[];
    stage?: string;
    file_path?: string;
    modified_by?: UserCommon;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductSizeDeleteDataResponse = {
    size?: string;
    company_id?: number;
    item_id?: number;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type ItemQuery = {
    item_code?: string;
    brand_uid?: number;
    uid?: number;
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
    gtin_value: any;
    gtin_type: string;
    primary?: boolean;
};
type InvSize = {
    item_weight?: number;
    set?: InventorySet;
    item_weight_unit_of_measure?: string;
    item_dimensions_unit_of_measure?: string;
    item_height?: number;
    item_length?: number;
    price?: number;
    size: any;
    is_set?: boolean;
    currency: string;
    identifiers: GTIN[];
    price_transfer?: number;
    price_effective: number;
    quantity: number;
    item_width?: number;
    expiration_date?: string;
    store_code: string;
};
type InventoryRequest = {
    item: ItemQuery;
    company_id: number;
    sizes: InvSize[];
};
type InventoryResponse = {
    item_id?: number;
    sellable_quantity?: number;
    seller_identifier?: string;
    price?: number;
    size?: string;
    currency?: string;
    inventory_updated_on?: string;
    identifiers?: any;
    price_transfer?: number;
    price_effective?: number;
    quantity?: number;
    store?: any;
    uid?: string;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ManufacturerResponse = {
    name: string;
    address: string;
    is_default: boolean;
};
type BrandMeta = {
    name: string;
    id: number;
};
type ReturnConfig1 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type StoreMeta = {
    id: number;
};
type WeightResponse = {
    unit: string;
    is_default: boolean;
    shipping: number;
};
type PriceMeta = {
    marked: number;
    tp_notes?: any;
    updated_at?: string;
    currency: string;
    transfer: number;
    effective: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
    damaged?: QuantityBase;
    not_available?: QuantityBase;
};
type CompanyMeta = {
    id: number;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type DimensionResponse = {
    unit: string;
    width: number;
    is_default: boolean;
    length: number;
    height: number;
};
type InventorySellerResponse = {
    fynd_item_code: string;
    _custom_json?: any;
    country_of_origin: string;
    meta?: any;
    seller_identifier: string;
    size: string;
    manufacturer: ManufacturerResponse;
    brand: BrandMeta;
    return_config?: ReturnConfig1;
    fragile: boolean;
    store: StoreMeta;
    created_by?: UserSerializer;
    weight: WeightResponse;
    price: PriceMeta;
    track_inventory?: boolean;
    is_set?: boolean;
    fynd_meta?: any;
    expiration_date?: string;
    total_quantity: number;
    set?: InventorySet;
    tags?: string[];
    raw_meta?: any;
    stage?: string;
    added_on_store?: string;
    quantities?: Quantities;
    fynd_article_code: string;
    company: CompanyMeta;
    is_active?: boolean;
    trader?: Trader1[];
    item_id: number;
    identifier: any;
    dimension: DimensionResponse;
    trace_id?: string;
    tax_identifier?: any;
    modified_by?: UserSerializer;
    uid: string;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type ManufacturerResponse1 = {
    name?: string;
    address?: string;
    is_default?: boolean;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type ReturnConfig2 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type ArticleStoreResponse = {
    name?: string;
    store_type?: string;
    uid?: number;
    store_code?: string;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type PriceArticle = {
    marked?: number;
    tp_notes?: any;
    currency?: string;
    transfer?: number;
    effective?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    order_committed?: Quantity;
    sellable?: Quantity;
    damaged?: Quantity;
    not_available?: Quantity;
};
type Trader2 = {
    type?: string;
    address?: string[];
    name?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type DimensionResponse1 = {
    unit?: string;
    height?: number;
    width?: number;
    length?: number;
};
type GetInventories = {
    country_of_origin?: string;
    seller_identifier?: string;
    size?: string;
    manufacturer?: ManufacturerResponse1;
    brand?: BrandMeta1;
    return_config?: ReturnConfig2;
    store?: ArticleStoreResponse;
    platforms?: any;
    date_meta?: DateMeta;
    created_by?: UserSerializer;
    weight?: WeightResponse1;
    id?: string;
    price?: PriceArticle;
    track_inventory?: boolean;
    is_set?: boolean;
    inventory_updated_on?: string;
    expiration_date?: string;
    total_quantity?: number;
    tags?: string[];
    stage?: string;
    quantities?: QuantitiesArticle;
    trader?: Trader2[];
    company?: CompanyMeta1;
    item_id?: number;
    identifier?: any;
    dimension?: DimensionResponse1;
    trace_id?: string;
    tax_identifier?: any;
    modified_by?: UserSerializer;
    uid?: string;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    created_by?: any;
    company_id?: number;
    is_active?: boolean;
    failed?: number;
    modified_on?: string;
    id?: string;
    cancelled?: number;
    succeed?: number;
    created_on?: string;
    total?: number;
    cancelled_records?: string[];
    failed_records?: string[];
    stage?: string;
    file_path?: string;
    modified_by?: any;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    total_quantity?: number;
    tags?: string[];
    item_weight_unit_of_measure?: string;
    item_dimensions_unit_of_measure?: string;
    seller_identifier: string;
    price?: number;
    currency?: string;
    price_marked?: number;
    trace_id?: string;
    price_effective?: number;
    quantity?: number;
    expiration_date?: string;
    store_code: string;
};
type InventoryBulkRequest = {
    company_id: number;
    sizes: InventoryJobPayload[];
    user?: any;
    batch_id: string;
};
type InventoryExportRequest = {
    type?: string;
    brand?: number[];
    store?: number[];
};
type InventoryExportResponse = {
    seller_id: number;
    trigger_on?: string;
    status?: string;
    task_id: string;
    request_params?: any;
};
type InventoryExportJob = {
    seller_id: number;
    trigger_on?: string;
    status?: string;
    completed_on?: string;
    task_id: string;
    url?: string;
    request_params?: any;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    multivalues?: boolean;
    data?: FilerList[];
};
type InventoryPayload = {
    total_quantity?: number;
    tags?: string[];
    seller_identifier: string;
    trace_id?: string;
    price_marked?: number;
    price_effective?: number;
    store_id: number;
    expiration_date?: string;
};
type InventoryRequestSchemaV2 = {
    meta?: any;
    company_id: number;
    payload?: InventoryPayload[];
};
type InventoryFailedReason = {
    errors?: string;
    message: string;
};
type InventoryResponseItem = {
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnUpsert = {
    company_id: number;
    hs2_code: string;
    threshold1: number;
    hsn_code: string;
    tax_on_esp?: boolean;
    is_active?: boolean;
    tax1: number;
    threshold2?: number;
    tax_on_mrp: boolean;
    tax2?: number;
    uid?: number;
};
type HsnCodesObject = {
    company_id?: number;
    hs2_code?: string;
    threshold1?: number;
    hsn_code?: string;
    tax_on_esp?: boolean;
    modified_on?: string;
    tax1?: number;
    id?: string;
    threshold2?: number;
    tax_on_mrp?: boolean;
    tax2?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    has_previous?: boolean;
    current?: string;
    has_next?: boolean;
    size?: number;
    item_total?: number;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    cess?: number;
    threshold: number;
    effective_date: string;
    rate: number;
};
type HSNDataInsertV2 = {
    type: string;
    created_by?: any;
    hsn_code: string;
    modified_on?: string;
    taxes: TaxSlab[];
    created_on?: string;
    description: string;
    reporting_hsn: string;
    modified_by?: any;
    country_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    name?: string;
    discount?: string;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    departments?: string[];
    uid?: number;
    logo?: Media;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    name?: string;
    slug?: string;
    priority_order?: number;
    uid?: number;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    name?: string;
    _custom_json?: any;
    slug?: string;
    action?: Action;
    childs?: any[];
    banners?: ImageUrls;
    uid?: number;
};
type SecondLevelChild = {
    name?: string;
    _custom_json?: any;
    slug?: string;
    action?: Action;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    uid?: number;
};
type Child = {
    name?: string;
    _custom_json?: any;
    slug?: string;
    action?: Action;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    uid?: number;
};
type CategoryItems = {
    name?: string;
    slug?: string;
    action?: Action;
    childs?: Child[];
    banners?: ImageUrls;
    uid?: number;
};
type DepartmentCategoryTree = {
    items?: CategoryItems[];
    department?: string;
};
type CategoryListingResponse = {
    departments?: DepartmentIdentifier[];
    data?: DepartmentCategoryTree[];
};
type ApplicationProductListingResponse = {
    operators?: any;
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    page: Page;
};
type ProductDetail = {
    type?: string;
    slug: string;
    highlights?: string[];
    has_variant?: boolean;
    brand?: ProductBrand;
    similars?: string[];
    product_online_date?: string;
    rating?: number;
    promo_meta?: any;
    medias?: Media1[];
    image_nature?: string;
    short_description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    color?: string;
    item_type?: string;
    item_code?: string;
    tryouts?: string[];
    description?: string;
    rating_count?: number;
    name?: string;
    teaser_tag?: any;
    attributes?: any;
    uid?: number;
};
type InventoryPage = {
    type: string;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    item_total: number;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetAddressSerializer = {
    pincode?: number;
    city?: string;
    country_code?: string;
    latitude?: number;
    longitude?: number;
    address_type?: string;
    state?: string;
    landmark?: string;
    address1?: string;
    address2?: string;
    country?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type InvoiceCredSerializer = {
    enabled?: boolean;
    password?: string;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type Document = {
    type: string;
    legal_name?: string;
    url?: string;
    verified?: boolean;
    value: string;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetCompanySerializer = {
    created_by?: UserSerializer2;
    name?: string;
    business_type?: string;
    modified_on?: string;
    verified_by?: UserSerializer2;
    verified_on?: string;
    created_on?: string;
    reject_reason?: string;
    addresses?: GetAddressSerializer[];
    company_type?: string;
    stage?: string;
    modified_by?: UserSerializer2;
    uid?: number;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
    weekday: string;
};
type LocationManagerSerializer = {
    name?: string;
    email?: string;
    mobile_no: SellerPhoneNumber;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type GetLocationSerializer = {
    _custom_json?: any;
    product_return_config?: ProductReturnConfigSerializer;
    modified_on?: string;
    verified_on?: string;
    uid?: number;
    created_by?: UserSerializer1;
    notification_emails?: string[];
    verified_by?: UserSerializer1;
    address: GetAddressSerializer;
    contact_numbers?: SellerPhoneNumber[];
    display_name: string;
    gst_credentials?: InvoiceDetailsSerializer;
    created_on?: string;
    documents?: Document[];
    stage?: string;
    name: string;
    store_type?: string;
    company?: GetCompanySerializer;
    phone_number: string;
    timing?: LocationDayWiseSerializer[];
    manager?: LocationManagerSerializer;
    warnings?: any;
    integration_type?: LocationIntegrationType;
    modified_by?: UserSerializer1;
    code: string;
};
type LocationListSerializer = {
    items?: GetLocationSerializer[];
    page?: Page;
};
type ApplicationBrandJson = {
    _custom_json: any;
};
type ApplicationCategoryJson = {
    _custom_json: any;
};
type ApplicationDepartment = {
    name?: string;
    app_id: string;
    is_active?: boolean;
    _custom_json?: any;
    uid: number;
    logo?: string;
};
type ApplicationDepartmentListingResponse = {
    items?: ApplicationDepartment[];
    page: Page;
};
type ApplicationDepartmentJson = {
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
type CompanyTaxesSerializer = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type GetCompanyProfileSerializerResponse = {
    business_info?: string;
    business_type: string;
    verified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    documents?: Document[];
    stage?: string;
    franchise_enabled?: boolean;
    modified_by?: UserSerializer;
    verified_on?: string;
    business_details?: BusinessDetails;
    name?: string;
    uid: number;
    taxes?: CompanyTaxesSerializer[];
    created_on?: string;
    contact_details?: ContactDetails;
    mode?: string;
    _custom_json?: any;
    modified_on?: string;
    company_type: string;
    business_country_info?: BusinessCountryInfo;
    created_by?: UserSerializer;
    warnings?: any;
    notification_emails?: string[];
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type CreateUpdateAddressSerializer = {
    country: string;
    address_type: string;
    address1: string;
    state: string;
    pincode: number;
    longitude: number;
    address2?: string;
    latitude: number;
    city: string;
    country_code?: string;
    landmark?: string;
};
type UpdateCompany = {
    taxes?: CompanyTaxesSerializer1[];
    business_info?: string;
    company_type?: string;
    franchise_enabled?: boolean;
    contact_details?: ContactDetails;
    business_type?: string;
    warnings?: any;
    reject_reason?: string;
    addresses?: CreateUpdateAddressSerializer[];
    _custom_json?: any;
    documents?: Document[];
    business_details?: BusinessDetails;
    name?: string;
    notification_emails?: string[];
};
type ProfileSuccessResponse = {
    uid?: number;
    success?: boolean;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    company_documents?: DocumentsObj;
    product?: DocumentsObj;
    brand?: DocumentsObj;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    uid?: number;
    stage?: string;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    synonyms?: string[];
    description?: string;
    logo?: string;
    verified_by?: UserSerializer;
    _locale_language?: any;
    stage?: string;
    modified_by?: UserSerializer;
    slug_key?: string;
    verified_on?: string;
    name: string;
    created_on?: string;
    mode?: string;
    _custom_json?: any;
    banner?: BrandBannerSerializer;
    modified_on?: string;
    created_by?: UserSerializer;
    warnings?: any;
    reject_reason?: string;
    uid?: number;
};
type CreateUpdateBrandRequestSerializer = {
    synonyms?: string[];
    brand_tier?: string;
    company_id?: number;
    description?: string;
    logo: string;
    _custom_json?: any;
    banner?: BrandBannerSerializer;
    name: string;
    _locale_language?: any;
    uid?: number;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanyDetails = {
    website_url?: string;
    socials?: CompanySocialAccounts[];
};
type CompanySerializer = {
    modified_on?: string;
    company_type: string;
    details?: CompanyDetails;
    business_country_info?: BusinessCountryInfo;
    notification_emails?: string[];
    created_on?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    business_type: string;
    reject_reason?: string;
    verified_by?: UserSerializer;
    verified_on?: string;
    market_channels?: string[];
    addresses?: GetAddressSerializer[];
    _custom_json?: any;
    name?: string;
    uid?: number;
    stage?: string;
};
type CompanyBrandSerializer = {
    modified_on?: string;
    created_on?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    warnings?: any;
    reject_reason?: string;
    verified_by?: UserSerializer;
    verified_on?: string;
    company?: CompanySerializer;
    uid?: number;
    stage?: string;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    company: number;
    uid?: number;
    brands: number[];
};
type HolidayDateSerializer = {
    start_date: string;
    end_date: string;
};
type HolidaySchemaSerializer = {
    date: HolidayDateSerializer;
    holiday_type: string;
    title: string;
};
type AddressSerializer = {
    country?: string;
    address_type?: string;
    address1?: string;
    pincode?: number;
    state?: string;
    longitude: number;
    address2?: string;
    latitude: number;
    city?: string;
    country_code?: string;
    landmark?: string;
};
type LocationSerializer = {
    manager?: LocationManagerSerializer;
    code: string;
    address: AddressSerializer;
    timing?: LocationDayWiseSerializer[];
    notification_emails?: string[];
    warnings?: any;
    product_return_config?: ProductReturnConfigSerializer;
    display_name: string;
    _custom_json?: any;
    contact_numbers?: SellerPhoneNumber[];
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSerializer;
    holiday?: HolidaySchemaSerializer[];
    store_type?: string;
    name: string;
    company: number;
    uid?: number;
    stage?: string;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleQuery = {
    ignored_stores?: number[];
    item_id?: number;
    size?: string;
};
type _ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type _AssignStoreArticle = {
    query?: _ArticleQuery;
    quantity?: number;
    group_id?: string;
    article_assignment?: _ArticleAssignment;
    meta?: any;
};
type AssignStoreRequestValidator = {
    app_id?: string;
    store_ids?: number[];
    articles?: _AssignStoreArticle[];
    company_id?: number;
    pincode?: string;
    channel_identifier?: string;
    channel_type?: string;
};
type AssignStoreResponseSerializer = {
    company_id?: number;
    _id?: string;
    s_city?: string;
    index?: number;
    item_id?: number;
    quantity?: number;
    article_assignment?: _ArticleAssignment;
    status?: boolean;
    meta?: any;
    size?: string;
    store_id?: number;
    price_marked?: number;
    store_pincode?: string;
    uid?: string;
    preice_effective?: number;
};
type FailedResponse = {
    message: string;
};
type CDN = {
    url: string;
    absolute_url?: string;
    relative_url?: string;
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
type BulkUploadResponse = {
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
type Identifier = {
    collection_id?: string[];
    user_id?: string[];
    company_id?: number[];
    article_id?: string[];
    category_id?: number[];
    brand_id?: number[];
    item_id?: number[];
    store_id?: number[];
};
type RuleDefinition = {
    applicable_on: string;
    auto_apply?: boolean;
    scope?: string[];
    type: string;
    is_exact?: boolean;
    calculate_on: string;
    currency_code?: string;
    value_type: string;
};
type Validity = {
    priority?: number;
};
type Rule = {
    max?: number;
    value?: number;
    discount_qty?: number;
    min?: number;
    key?: number;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
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
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    networks?: string[];
    types?: string[];
    codes?: string[];
    uses?: PaymentAllowValue;
};
type Restrictions = {
    price_range?: PriceRange;
    post_order?: PostOrder;
    bulk_bundle?: BulkBundleRestriction;
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    user_groups?: number[];
    platforms?: string[];
    payments?: any;
    ordering_stores?: number[];
};
type CouponSchedule = {
    cron?: string;
    next_schedule?: any[];
    start?: string;
    end?: string;
    duration?: number;
};
type Validation = {
    user_registered_after?: string;
    app_id?: string[];
    anonymous?: boolean;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    description?: string;
    title?: string;
    remove?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    subtitle?: string;
    apply?: DisplayMetaDict;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type State = {
    is_public?: boolean;
    is_display?: boolean;
    is_archived?: boolean;
};
type CouponAdd = {
    identifiers: Identifier;
    code: string;
    rule_definition: RuleDefinition;
    validity: Validity;
    rule: Rule[];
    restrictions?: Restrictions;
    _schedule?: CouponSchedule;
    tags?: string[];
    validation?: Validation;
    display_meta: DisplayMeta;
    date_meta?: CouponDateMeta;
    type_slug: string;
    ownership: Ownership;
    action?: CouponAction;
    author?: CouponAuthor;
    state?: State;
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
    identifiers: Identifier;
    code: string;
    rule_definition: RuleDefinition;
    validity: Validity;
    rule: Rule[];
    restrictions?: Restrictions;
    _schedule?: CouponSchedule;
    tags?: string[];
    validation?: Validation;
    display_meta: DisplayMeta;
    date_meta?: CouponDateMeta;
    type_slug: string;
    ownership: Ownership;
    action?: CouponAction;
    author?: CouponAuthor;
    state?: State;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type DiscountOffer = {
    discount_price?: number;
    discount_amount?: number;
    max_discount_amount?: number;
    code?: string;
    min_offer_quantity?: number;
    discount_percentage?: number;
    apportion_discount?: boolean;
    max_usage_per_transaction?: number;
    partial_can_ret?: boolean;
    max_offer_quantity?: number;
};
type CompareObject = {
    less_than_equals?: number;
    less_than?: number;
    greater_than_equals?: number;
    equals?: number;
    greater_than?: number;
};
type ItemCriteria = {
    cart_unique_item_quantity?: CompareObject;
    item_exclude_sku?: string[];
    item_exclude_brand?: number[];
    item_l2_category?: number[];
    item_exclude_department?: number[];
    cart_unique_item_amount?: CompareObject;
    item_id?: number[];
    item_company?: number[];
    item_department?: number[];
    item_size?: string[];
    item_exclude_category?: number[];
    cart_quantity?: CompareObject;
    item_store?: number[];
    item_l1_category?: number[];
    item_sku?: string[];
    item_exclude_id?: number[];
    item_exclude_l2_category?: number[];
    item_exclude_store?: number[];
    item_category?: number[];
    item_tags?: string[];
    item_exclude_l1_category?: number[];
    item_exclude_company?: number[];
    available_zones?: string[];
    buy_rules?: string[];
    all_items?: boolean;
    cart_total?: CompareObject;
    item_brand?: number[];
};
type DiscountRule = {
    offer: DiscountOffer;
    buy_condition: string;
    discount_type: string;
    item_criteria: ItemCriteria;
};
type PromotionSchedule = {
    cron?: string;
    next_schedule?: any[];
    published: boolean;
    start: string;
    end?: string;
    duration?: number;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    codes?: string[];
    uses?: PaymentAllowValue1;
};
type Restrictions1 = {
    post_order?: PostOrder1;
    anonymous_users?: boolean;
    user_id?: string[];
    uses: UsesRestriction1;
    user_registered?: UserRegistered;
    order_quantity?: number;
    user_groups?: number[];
    platforms?: string[];
    payments?: PromotionPaymentModes[];
};
type DisplayMeta1 = {
    name?: string;
    description?: string;
    offer_label?: string;
    offer_text?: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionListItem = {
    apply_exclusive?: string;
    _custom_json?: any;
    promotion_type: string;
    apply_all_discount?: boolean;
    apply_priority?: number;
    application_id: string;
    discount_rules: DiscountRule[];
    code?: string;
    _schedule?: PromotionSchedule;
    stackable?: boolean;
    calculate_on?: string;
    mode: string;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    currency?: string;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    author?: PromotionAuthor;
    promo_group: string;
    post_order_action?: PromotionAction;
    buy_rules: any;
    visiblility?: Visibility;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    apply_exclusive?: string;
    _custom_json?: any;
    promotion_type: string;
    apply_all_discount?: boolean;
    apply_priority?: number;
    application_id: string;
    discount_rules: DiscountRule[];
    code?: string;
    _schedule?: PromotionSchedule;
    stackable?: boolean;
    calculate_on?: string;
    mode: string;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    currency?: string;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    author?: PromotionAuthor;
    promo_group: string;
    post_order_action?: PromotionAction;
    buy_rules: any;
    visiblility?: Visibility;
};
type PromotionUpdate = {
    apply_exclusive?: string;
    _custom_json?: any;
    promotion_type: string;
    apply_all_discount?: boolean;
    apply_priority?: number;
    application_id: string;
    discount_rules: DiscountRule[];
    code?: string;
    _schedule?: PromotionSchedule;
    stackable?: boolean;
    calculate_on?: string;
    mode: string;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    currency?: string;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    author?: PromotionAuthor;
    promo_group: string;
    post_order_action?: PromotionAction;
    buy_rules: any;
    visiblility?: Visibility;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    is_hidden?: boolean;
    created_on?: string;
    description?: string;
    type?: string;
    title?: string;
    subtitle?: string;
    modified_on?: string;
    entity_type?: string;
    example?: string;
    entity_slug?: string;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type PromoMeta = {
    message?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    currency_symbol?: string;
    effective?: number;
    currency_code?: string;
    marked?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    extra_meta?: any;
    seller?: BaseInfo;
    store?: BaseInfo;
    type?: string;
    size?: string;
    parent_item_identifiers?: any;
    product_group_tags?: string[];
    quantity?: number;
    price?: ArticlePriceInfo;
    uid?: string;
};
type BuyRules = {
    item_criteria?: any;
    cart_conditions?: any;
};
type FreeGiftItem = {
    item_slug?: string;
    item_name?: string;
    item_brand_name?: string;
    item_images_url?: string[];
    item_price_details?: any;
    item_id?: number;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    quantity?: number;
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
};
type DiscountRulesApp = {
    offer?: any;
    item_criteria?: any;
    raw_offer?: any;
    matched_buy_rules?: string[];
};
type AppliedPromotion = {
    offer_text?: string;
    promotion_type?: string;
    promotion_name?: string;
    amount?: number;
    mrp_promotion?: boolean;
    article_quantity?: number;
    promo_id?: string;
    buy_rules?: BuyRules[];
    applied_free_articles?: AppliedFreeArticles[];
    promotion_group?: string;
    discount_rules?: DiscountRulesApp[];
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type ProductImage = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    type?: string;
    url?: string;
    query?: ActionQuery;
};
type CartProduct = {
    categories?: CategoryInfo[];
    type?: string;
    brand?: BaseInfo;
    name?: string;
    images?: ProductImage[];
    action?: ProductAction;
    uid?: number;
    slug?: string;
};
type ProductPrice = {
    marked?: number;
    add_on?: number;
    currency_symbol?: string;
    selling?: number;
    effective?: number;
    currency_code?: string;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type ProductAvailability = {
    other_store_quantity?: number;
    sizes?: string[];
    is_valid?: boolean;
    out_of_stock?: boolean;
    deliverable?: boolean;
};
type CartProductInfo = {
    promo_meta?: PromoMeta;
    identifiers: CartProductIdentifer;
    message?: string;
    is_set?: boolean;
    article?: ProductArticle;
    promotions_applied?: AppliedPromotion[];
    coupon_message?: string;
    bulk_offer?: any;
    parent_item_identifiers?: any;
    product?: CartProduct;
    discount?: string;
    price_per_unit?: ProductPriceInfo;
    price?: ProductPriceInfo;
    key?: string;
    quantity?: number;
    availability?: ProductAvailability;
};
type RawBreakup = {
    delivery_charge?: number;
    you_saved?: number;
    subtotal?: number;
    total?: number;
    coupon?: number;
    convenience_fee?: number;
    cod_charge?: number;
    vog?: number;
    mrp_total?: number;
    discount?: number;
    fynd_cash?: number;
    gst_charges?: number;
};
type DisplayBreakup = {
    message?: string[];
    currency_symbol?: string;
    value?: number;
    key?: string;
    display?: string;
    currency_code?: string;
};
type CouponBreakup = {
    code?: string;
    message?: string;
    type?: string;
    value?: number;
    uid?: string;
    is_applied?: boolean;
};
type LoyaltyPoints = {
    applicable?: number;
    is_applied?: boolean;
    total?: number;
    description?: string;
};
type CartBreakup = {
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
};
type OpenapiCartDetailsResponse = {
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    message?: string;
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    address_type?: string;
    state?: string;
    area?: string;
    address?: string;
    email?: string;
    area_code_slug?: string;
    area_code: string;
    country_code?: string;
    name?: string;
    phone?: number;
    meta?: any;
    landmark?: string;
    country?: string;
    pincode?: number;
    city?: string;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
};
type PromiseFormatted = {
    max?: string;
    min?: string;
};
type PromiseTimestamp = {
    max?: number;
    min?: number;
};
type ShipmentPromise = {
    formatted?: PromiseFormatted;
    timestamp?: PromiseTimestamp;
};
type OpenApiCartServiceabilityResponse = {
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    message?: string;
    items?: CartProductInfo[];
    is_valid?: boolean;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    current_status?: string;
    payment_gateway?: string;
    order_id?: string;
    payment_id?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    meta?: MultiTenderPaymentMeta;
    mode: string;
    amount: number;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiOrderItem = {
    price_effective: number;
    extra_meta?: any;
    files?: OpenApiFiles[];
    cashback_applied: number;
    size: string;
    coupon_effective_discount: number;
    cod_charges: number;
    employee_discount?: number;
    amount_paid: number;
    loyalty_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    meta?: CartItemMeta;
    delivery_charges: number;
    discount: number;
    quantity?: number;
    product_id: number;
    price_marked: number;
};
type OpenApiPlatformCheckoutReq = {
    files?: OpenApiFiles[];
    cashback_applied: number;
    employee_discount?: any;
    payment_methods: MultiTenderPaymentMethod[];
    delivery_charges: number;
    coupon?: string;
    billing_address: ShippingAddress;
    currency_code?: string;
    coupon_code: string;
    affiliate_order_id?: string;
    payment_mode?: string;
    cod_charges: number;
    order_id?: string;
    loyalty_discount?: number;
    shipping_address?: ShippingAddress;
    cart_value: number;
    cart_items: OpenApiOrderItem[];
    coupon_value: number;
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    success?: boolean;
    order_id: string;
    message?: string;
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
type Schedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
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
type DiscountItems = {
    item_code?: string;
    brand_uid?: number;
    seller_identifier?: string;
    discount_type: string;
    value: number;
};
type BulkDiscount = {
    company_id: number;
    items: DiscountItems[];
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
    status?: SubscriberStatus;
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
    status?: SubscriberStatus;
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
type ApplicationServiceabilityConfig = {
    serviceability_type: string;
};
type ServiceabilityErrorResponse = {
    type: string;
    value: string;
    message: string;
};
type ApplicationServiceabilityResponse = {
    channel_type: string;
    channel_id: string;
    serviceability_type: string;
};
type ApplicationServiceabilityConfigResponse = {
    error?: ServiceabilityErrorResponse;
    success: boolean;
    data?: ApplicationServiceabilityResponse;
};
type EntityRegionViewRequest = {
    sub_type: string[];
    parent_id?: string[];
};
type EntityRegionViewPage = {
    type: string;
    size: number;
    current: number;
    item_total: number;
    has_next: boolean;
};
type EntityRegionViewError = {
    type?: string;
    value?: string;
    message?: string;
};
type EntityRegionViewItems = {
    uid: string;
    sub_type: string;
    name: string;
};
type EntityRegionViewResponse = {
    page: EntityRegionViewPage;
    error: EntityRegionViewError;
    success: boolean;
    data: EntityRegionViewItems[];
};
type ZoneDataItem = {
    size: number;
    current: number;
    item_total: number;
    has_next: boolean;
    type: string;
};
type ListViewSummary = {
    total_active_zones: number;
    total_zones: number;
    total_pincodes_served: number;
};
type ListViewChannels = {
    channel_type: string;
    channel_id: string;
};
type ListViewProduct = {
    type: string;
    count: number;
};
type ListViewItems = {
    slug: string;
    channels: ListViewChannels;
    pincodes_count: number;
    product: ListViewProduct;
    name: string;
    stores_count: number;
    is_active: boolean;
    zone_id: string;
    company_id: number;
};
type ListViewResponse = {
    page: ZoneDataItem[];
    summary: ListViewSummary[];
    items: ListViewItems[];
};
type CompanyStoreView_PageItems = {
    type: string;
    size: number;
    current: number;
    item_total: number;
    has_next: boolean;
};
type CompanyStoreView_Response = {
    page: CompanyStoreView_PageItems[];
    items?: any[];
};
type GetZoneDataViewChannels = {
    channel_type: string;
    channel_id: string;
};
type ZoneProductTypes = {
    type: string;
    tags: string[];
};
type ZoneMappingType = {
    state?: string[];
    pincode?: string[];
    country: string;
};
type GetZoneDataViewItems = {
    zone_id: string;
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
    stores_count: number;
    pincodes_count: number;
};
type GetSingleZoneDataViewResponse = {
    data: GetZoneDataViewItems;
};
type UpdateZoneData = {
    zone_id: string;
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
type ZoneUpdateRequest = {
    identifier: string;
    data: UpdateZoneData;
};
type ZoneSuccessResponse = {
    status_code: number;
    success: boolean;
};
type CreateZoneData = {
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
type ZoneRequest = {
    identifier: string;
    data: CreateZoneData;
};
type ZoneResponse = {
    status_code: number;
    success: boolean;
    zone_id: string;
};
type GetZoneFromPincodeViewRequest = {
    pincode: string;
    country: string;
};
type GetZoneFromPincodeViewResponse = {
    serviceability_type: string;
    zones: string[];
};
type GetZoneFromApplicationIdViewResponse = {
    page: ZoneDataItem[];
    items: ListViewItems[];
};
type PincodeMopData = {
    pincodes: number[];
    country: string;
    action: string;
};
type PincodeMopUpdateResponse = {
    pincode: number;
    channel_id: string;
    country: string;
    is_active: boolean;
};
type PincodeMOPresponse = {
    success: boolean;
    status_code: number;
    batch_id: string;
    country: string;
    action: string;
    pincodes?: number[];
    updated_pincodes?: PincodeMopUpdateResponse[];
};
type PincodeMopBulkData = {
    batch_id: string;
    s3_url: string;
};
type PincodeBulkViewResponse = {
    batch_id: string;
    s3_url: string;
};
type PincodeCodStatusListingRequest = {
    country?: string;
    is_active?: boolean;
    pincode?: number;
    current_page_number?: number;
    page_size?: number;
};
type PincodeCodStatusListingResponse = {
    country: string;
    data: PincodeCodStatusListingResponse[];
    success: boolean;
    errors?: Error[];
    page: PincodeCodStatusListingPage;
    summary: PincodeCodStatusListingSummary;
};
type Error = {
    type?: string;
    value?: string;
    message?: string;
};
type PincodeCodStatusListingPage = {
    type: string;
    size: number;
    current_page_number: number;
    item_total: number;
    has_next: boolean;
};
type PincodeCodStatusListingSummary = {
    total_active_pincodes: number;
    total_inactive_pincodes: number;
};
type PincodeMopUpdateAuditHistoryRequest = {
    entity_type: string;
    file_name?: string;
};
type PincodeMopUpdateAuditHistoryPaging = {
    type?: string;
    size?: number;
    current?: number;
    has_next?: boolean;
    item_total?: number;
};
type PincodeMopUpdateAuditHistoryResponse = {
    batch_id?: string;
    entity_type?: string;
    error_file_s3_url?: string;
    s3_url?: string;
    file_name?: string;
    updated_at?: string;
    updated_by?: string;
    success?: boolean;
};
type PincodeMopUpdateAuditHistoryResponseData = {
    entity_type?: string;
    page: PincodeMopUpdateAuditHistoryPaging;
    data: PincodeMopUpdateAuditHistoryResponse[];
};
