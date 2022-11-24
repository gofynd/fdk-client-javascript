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
    documentEngine: DocumentEngine;
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, TicketSubCategory, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, _NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, BeneficiaryModeDetails, AddBeneficiaryDetailsRequest, RefundAccountResponse, NotFoundResourceError, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, PaymentConfirmationMode, PaymentConfirmationRequest, PaymentConfirmationResponse, FilterInfoOption, FiltersInfo, ShipmentItemFulFillingStore, ShipmentStatus, Prices, PaymentModeInfo, GST, Item, BagUnit, UserDataInfo, ShipmentItem, ShipmentInternalPlatformViewResponse, DPDetails, OrderBrandName, FinancialBreakup, BagConfigs, OrderBagArticle, BagGST, OrderBagItem, OrderBags, UserDetailsData, BagStatusHistory, OrderDetailsData, TrackingList, ShipmentPayments, ShipmentStatusData, FulfillingStore, ShipmentInfoResponse, Shipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, OrderListingResponse, Options, MetricsCount, MetricCountResponse, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, OrderUser, ArticleDetails, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, OrderPriority, UserData, OrderInfo, AffiliateInventoryStoreConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, ErrorResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ShipmentsRequest, StatuesRequest, StatusUpdateInternalRequest, ShipmentidResponse, ShipmentsResponse, StatuesResponse, StatusUpdateInternalResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, FyndOrderIdList, OrderStatus, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, SuccessResponse, ListSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemMeta, SuccessResponse1, MOQ, ApplicationItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, SeoDetail, UserInfo, CollectionQuery, CollectionBadge, CollectionImage, CollectionSchedule, CollectionBanner, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, Price1, ProductListingPrice, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, TeaserTag, ReturnConfig, TaxIdentifier, CustomOrder, Trader, ProductPublish, NetQuantity, ProductCreateUpdate, Logo, Brand, Image, ProductPublished, Product, ProductListingResponse, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, PriceMeta, BrandMeta, ReturnConfig1, WeightResponse, DimensionResponse, QuantityBase, Quantities, StoreMeta, ManufacturerResponse, Trader1, CompanyMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, LocationIntegrationType, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer1, SellerPhoneNumber, LocationManagerSerializer, Document, ProductReturnConfigSerializer, UserSerializer2, GetAddressSerializer, GetCompanySerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, CompanyTaxesSerializer, ContactDetails, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, PriceRange, UsesRemaining, UsesRestriction, BulkBundleRestriction, PostOrder, PaymentAllowValue, PaymentModes, Restrictions, CouponAuthor, Identifier, Rule, CouponAction, State, Validation, Ownership, CouponDateMeta, CouponSchedule, DisplayMetaDict, DisplayMeta, RuleDefinition, Validity, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Visibility, Ownership1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, DisplayMeta1, PromotionAuthor, PromotionAction, PromotionDateMeta, PromotionSchedule, UserRegistered, UsesRemaining1, UsesRestriction1, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, ProductPrice, ProductPriceInfo, CartProductIdentifer, ActionQuery, ProductAction, BaseInfo, CategoryInfo, ProductImage, CartProduct, PromoMeta, BasePrice, ArticlePriceInfo, ProductArticle, FreeGiftItem, AppliedFreeArticles, DiscountRules, BuyRules, AppliedPromotion, ProductAvailability, CartProductInfo, DisplayBreakup, CouponBreakup, RawBreakup, LoyaltyPoints, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, MultiTenderPaymentMeta, MultiTenderPaymentMethod, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, Schedule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, GenerateBulkInvoiceLabelShipment, GenerateBulkInvoiceOrLabelUrl, DocumentType, BulkListBadRequestResponse, BulkListFailedResponse, SuccessResponseGenerateBulkShipment, SuccessResponseBulkStatus, GenerateBulkUrlSuccessResponse, InternalErrorResponseGenerateBulkShipment, BadRequestResponseGenerateBulkUrl, InternalErrorResponseGenerateBulkUrl, GenerateBulkShipment, GenerateBulkUrl, GetBulkStatusRequest, BadRequestResponseGenerateBulkItemParameters, BadRequestResponseGenerateBulkItem, SuccessResponseGenerateBulk, BadRequestResponseGenerateBulk, InternalErrorResponseGenerateBulk, ShippingToAddress, SellerAddress, BoxDetails, GenerateBulkBoxLabel, GenerateBulkShipmentLabel, GenerateNoc, PackageDetails, PackageItemDetails, GenerateBulkPackageLabel, SignedSuccessResponse, BulkPresignedSuccessResponse, SignedBadRequestResponse, SignedFailedResponse, StatusSuccessResponse, StatusBadRequestResponse, StatusFailedResponse, GenerateManifest, GeneratePresignedManifestUrl, ManifestLink, GenerateManifestUrlSuccessResponse, ManifestListFailedResponse, InvoiceLabelPresignedRequestBody, OrderInvoiceEngineError };
}
import Common = require("./client/CommonPlatformClient");
import Lead = require("./client/LeadPlatformClient");
import Billing = require("./client/BillingPlatformClient");
import Communication = require("./client/CommunicationPlatformClient");
import Payment = require("./client/PaymentPlatformClient");
import Order = require("./client/OrderPlatformClient");
import Catalog = require("./client/CatalogPlatformClient");
import CompanyProfile = require("./client/CompanyProfilePlatformClient");
import FileStorage = require("./client/FileStoragePlatformClient");
import Inventory = require("./client/InventoryPlatformClient");
import Configuration = require("./client/ConfigurationPlatformClient");
import Analytics = require("./client/AnalyticsPlatformClient");
import Discount = require("./client/DiscountPlatformClient");
import Webhook = require("./client/WebhookPlatformClient");
import AuditTrail = require("./client/AuditTrailPlatformClient");
import DocumentEngine = require("./client/DocumentEnginePlatformClient");
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
    _custom_json?: any;
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
    is_deleted?: boolean;
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
    __source?: TagSourceSchema;
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
    sub_navigation?: _NavigationReference[];
};
type _NavigationReference = {
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
    pages?: string[];
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
    pages?: string[];
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
    value?: string;
};
type SendOtpEmailCommsTemplate = {
    key?: string;
    value?: string;
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
};
type SendOtpCommsReqEmail = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpSmsCommsTemplate;
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
    display_fields: string[];
    success: boolean;
    app_id: string;
    aggregators?: any[];
    created: boolean;
    excluded_fields: string[];
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    merchant_salt: string;
    secret: string;
    key: string;
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
    aggregator: string[];
};
type ErrorCodeAndDescription = {
    code: string;
    description: string;
};
type HttpErrorCodeAndResponse = {
    success: boolean;
    error: ErrorCodeAndDescription;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type IntentApp = {
    code?: string;
    package_name?: string;
    logos?: PaymentModeLogo;
    display_name?: string;
};
type PaymentModeList = {
    exp_month?: number;
    card_issuer?: string;
    card_fingerprint?: string;
    card_name?: string;
    logo_url?: PaymentModeLogo;
    card_number?: string;
    timeout?: number;
    retry_count?: number;
    card_id?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    intent_app_error_list?: string[];
    expired?: boolean;
    card_brand?: string;
    fynd_vpa?: string;
    exp_year?: number;
    intent_app?: IntentApp[];
    card_isin?: string;
    card_brand_image?: string;
    merchant_code?: string;
    aggregator_name: string;
    code?: string;
    card_type?: string;
    display_name?: string;
    card_token?: string;
    intent_flow?: boolean;
    card_reference?: string;
    nickname?: string;
    display_priority?: number;
    name?: string;
};
type RootPaymentMode = {
    display_name: string;
    logo_url?: PaymentModeLogo;
    add_card_enabled?: boolean;
    aggregator_name?: string;
    logo?: string;
    anonymous_enable?: boolean;
    list?: PaymentModeList[];
    display_priority: number;
    name: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    is_default: boolean;
    unique_transfer_no: any;
    transfer_type: string;
    payouts_aggregators: any[];
    customers: any;
    is_active: boolean;
    more_attributes: any;
};
type PayoutBankDetails = {
    account_holder?: string;
    state?: string;
    ifsc_code: string;
    account_type: string;
    country?: string;
    pincode?: number;
    city?: string;
    account_no?: string;
    branch_name?: string;
    bank_name?: string;
};
type PayoutRequest = {
    unique_external_id: string;
    transfer_type: string;
    users: any;
    bank_details: PayoutBankDetails;
    aggregator: string;
    is_active: boolean;
};
type PayoutResponse = {
    success: boolean;
    unique_transfer_no: string;
    transfer_type: string;
    bank_details: any;
    users: any;
    payouts: any;
    aggregator: string;
    is_active: boolean;
    created: boolean;
    payment_status: string;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    is_active: boolean;
    success: boolean;
};
type UpdatePayoutRequest = {
    is_default: boolean;
    is_active: boolean;
    unique_external_id: string;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    data: any[];
    success: boolean;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    success: boolean;
    aggregator: string;
    config: any;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    data: any;
    success: boolean;
};
type BeneficiaryModeDetails = {
    vpa?: string;
    account_holder: string;
    ifsc_code: string;
    email: string;
    address?: string;
    wallet?: string;
    comment?: string;
    account_no: string;
    branch_name: string;
    bank_name: string;
    mobile: string;
};
type AddBeneficiaryDetailsRequest = {
    details: BeneficiaryModeDetails;
    request_id?: string;
    otp?: string;
    delights: boolean;
    transfer_mode: string;
    order_id: string;
    shipment_id: string;
};
type RefundAccountResponse = {
    message: string;
    is_verified_flag?: boolean;
    data?: any;
    success: boolean;
};
type NotFoundResourceError = {
    code: string;
    description: string;
    success: boolean;
};
type IfscCodeResponse = {
    success?: boolean;
    branch_name: string;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    email: string;
    address: string;
    comment?: string;
    account_holder: string;
    modified_on: string;
    transfer_mode: string;
    bank_name: string;
    id: number;
    beneficiary_id: string;
    ifsc_code: string;
    created_on: string;
    delights_user_name?: string;
    title: string;
    mobile?: string;
    display_name: string;
    account_no: string;
    branch_name?: string;
    subtitle: string;
    is_active: boolean;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type PaymentConfirmationMode = {
    meta?: any;
    amount: number;
    mode: string;
    name?: string;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: PaymentConfirmationMode[];
};
type PaymentConfirmationResponse = {
    message: string;
    success: boolean;
    order_id: string;
};
type FilterInfoOption = {
    text: string;
    value?: string;
    name?: string;
};
type FiltersInfo = {
    text: string;
    value: string;
    options?: FilterInfoOption[];
    type: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type ShipmentStatus = {
    title: string;
    status: string;
    ops_status: string;
    hex_code: string;
    actual_status: string;
};
type Prices = {
    fynd_credits: number;
    cod_charges: number;
    refund_credit: number;
    cashback: number;
    price_marked: number;
    tax_collected_at_source: number;
    price_effective: number;
    promotion_effective_discount: number;
    delivery_charge: number;
    coupon_value: number;
    amount_paid_roundoff: number;
    amount_paid: number;
    refund_amount: number;
    discount: number;
    cashback_applied: number;
    value_of_good: number;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type GST = {
    tax_collected_at_source: number;
    gst_fee: number;
    brand_calculated_amount: number;
    gstin_code: string;
    value_of_good: number;
};
type Item = {
    code: string;
    size: string;
    can_return: boolean;
    l3_category: number;
    can_cancel: boolean;
    color?: string;
    l1_category?: string[];
    name: string;
    department_id: number;
    l3_category_name: string;
    id: number;
    image?: string[];
};
type BagUnit = {
    item_quantity: number;
    status: any;
    shipment_id: string;
    prices?: Prices;
    ordering_channel: string;
    gst?: GST;
    item?: Item;
    total_shipment_bags: number;
    bag_id: number;
};
type UserDataInfo = {
    mobile: string;
    gender: string;
    is_anonymous_user: boolean;
    avis_user_id: string;
    last_name: string;
    uid: number;
    first_name: string;
    email: string;
};
type ShipmentItem = {
    total_bags_count: number;
    fulfilling_centre: string;
    shipment_created_at: number;
    fulfilling_store?: ShipmentItemFulFillingStore;
    shipment_status?: ShipmentStatus;
    total_shipments_in_order: number;
    prices?: Prices;
    payment_mode_info?: PaymentModeInfo;
    sla?: any;
    bags?: BagUnit[];
    created_at: string;
    application?: any;
    id: string;
    channel?: any;
    user?: UserDataInfo;
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    page?: any;
    applied_filters?: any;
};
type DPDetails = {
    awb_no?: string;
    pincode?: string;
    track_url?: string;
    eway_bill_id?: string;
    country?: string;
    name?: string;
    gst_tag?: string;
    id?: string;
};
type OrderBrandName = {
    company: string;
    brand_name: string;
    created_on: number;
    modified_on?: number;
    logo: string;
    id: number;
};
type FinancialBreakup = {
    identifiers: any;
    gst_tax_percentage: number;
    price_marked: number;
    price_effective: number;
    gst_fee: string;
    total_units: number;
    brand_calculated_amount: number;
    pm_price_split: any;
    value_of_good: number;
    hsn_code: string;
    coupon_effective_discount: number;
    cod_charges: number;
    refund_credit: number;
    size: string;
    gst_tag: string;
    amount_paid: number;
    cashback_applied: number;
    fynd_credits: number;
    cashback: number;
    delivery_charge: number;
    coupon_value: number;
    item_name: string;
    promotion_effective_discount: number;
    added_to_fynd_cash: boolean;
    discount: number;
    transfer_price: number;
};
type BagConfigs = {
    is_returnable: boolean;
    allow_force_return: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
};
type OrderBagArticle = {
    return_config?: any;
    identifiers?: any;
    uid?: string;
};
type BagGST = {
    hsn_code?: string;
    is_default_hsn_code?: boolean;
    gst_fee?: number;
    gst_tag?: string;
    brand_calculated_amount?: number;
    gstin_code?: string;
    gst_tax_percentage?: number;
    value_of_good?: number;
};
type OrderBagItem = {
    size: string;
    brand: string;
    l3_category: number;
    l1_category?: string[];
    name: string;
    slug_key: string;
    image?: string[];
};
type OrderBags = {
    current_status: string;
    display_name: string;
    brand?: OrderBrandName;
    financial_breakup?: FinancialBreakup[];
    bag_configs?: BagConfigs;
    article?: OrderBagArticle;
    quantity: number;
    entity_type: string;
    gst_details?: BagGST;
    item?: OrderBagItem;
    bag_id: number;
};
type UserDetailsData = {
    pincode: string;
    address: string;
    country: string;
    name: string;
    phone: string;
    city: string;
    email: string;
    state: string;
};
type BagStatusHistory = {
    forward?: boolean;
    app_display_name?: boolean;
    display_name?: boolean;
    status: string;
    updated_at?: string;
    state_type?: boolean;
};
type OrderDetailsData = {
    order_date?: string;
    cod_charges?: string;
    source?: string;
    tax_details?: any;
    affiliate_id?: string;
    ordering_channel?: string;
    fynd_order_id: string;
    ordering_channel_logo?: any;
    order_value?: string;
};
type TrackingList = {
    status: string;
    is_passed?: boolean;
    is_current?: boolean;
    time?: string;
};
type ShipmentPayments = {
    source?: string;
    mode: string;
    logo?: string;
};
type ShipmentStatusData = {
    bag_list?: number[];
    shipment_id?: string;
    status?: string;
    created_at?: string;
    id?: number;
};
type FulfillingStore = {
    store_name: string;
    code: string;
    pincode: string;
    address: string;
    city: string;
    country: string;
    phone: string;
    meta: any;
    contact_person: string;
    fulfillment_channel: string;
    state: string;
    id: string;
};
type ShipmentInfoResponse = {
    can_break: string;
    refund_details?: any;
    fyndstore_emp: any;
    items: any[];
    is_packaging_order: boolean;
    shipment_id: string;
    pay_button?: string;
    credit_note_id: string;
    beneficiary_details?: boolean;
    email_id: string;
    vertical?: string;
    order_status: any;
    user_info?: any;
    enable_tracking?: boolean;
    dp_details?: DPDetails;
    user_id: string;
    bags?: OrderBags;
    delivery_slot: any;
    company: any;
    shipment_quantity: number;
    forward_shipment_status?: any[];
    journey_type: string;
    can_cancel?: boolean;
    delivery_details?: UserDetailsData;
    coupon?: any;
    is_not_fynd_source: boolean;
    forward_tracking_list?: any[];
    is_fynd_store?: string;
    user_agent: string;
    bag_status_history?: BagStatusHistory[];
    gst_details?: GST;
    order?: OrderDetailsData;
    picked_date: string;
    status_progress: number;
    total_items?: number;
    delivery_status: any[];
    can_return?: boolean;
    escalation?: any;
    tracking_list?: TrackingList[];
    priority_text?: string;
    go_green?: boolean;
    bank_data?: any;
    forward_order_status?: any[];
    payments?: ShipmentPayments;
    refund_text?: string;
    secured_delivery_flag?: string;
    enable_dp_tracking: string;
    is_fynd_coupon: boolean;
    replacement_details?: string;
    packaging_type: string;
    mid?: string;
    affiliate_shipment_id: string;
    status?: ShipmentStatusData;
    due_date?: string;
    is_pdsr?: string;
    billing_details?: UserDetailsData;
    fulfilling_store?: FulfillingStore;
    ordering_store: any;
    invoice: any;
    prices?: Prices;
    tracking_url: string;
    current_shipment_status: any;
    lock_status: string;
    order_created_time?: string;
    kirana_store_id?: string;
    platform_logo: boolean;
    is_invoiced: boolean;
    payment_mode: string;
    order_type: string;
    child_nodes?: string[];
};
type Shipment = {
    shipment_id: string;
    vertical?: string;
    dp_details?: DPDetails;
    bags?: OrderBags;
    delivery_slot: any;
    shipment_quantity: number;
    journey_type: string;
    delivery_details?: UserDetailsData;
    user_agent: string;
    bag_status_history?: BagStatusHistory[];
    gst_details?: GST;
    order?: OrderDetailsData;
    picked_date: string;
    total_items?: number;
    tracking_list?: TrackingList[];
    priority_text?: string;
    payments?: ShipmentPayments;
    enable_dp_tracking: string;
    packaging_type: string;
    status?: ShipmentStatusData;
    billing_details?: UserDetailsData;
    fulfilling_store?: FulfillingStore;
    prices?: Prices;
    platform_logo: string;
    payment_mode: string;
};
type OrderDict = {
    fynd_order_id: string;
    shipment_count: number;
    order_date: string;
};
type ShipmentDetailsResponse = {
    shipments?: Shipment[];
    order?: OrderDict;
    success: boolean;
};
type SubLane = {
    current_state?: string[];
    total_shipments: number;
    next_state?: string[];
    text: string;
    index: number;
    value: string;
};
type SuperLane = {
    text: string;
    value: string;
    options?: SubLane[];
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type OrderListingResponse = {
    total_count: number;
    items: any[];
    success: boolean;
    message?: string;
    lane: string;
    page: any;
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    key: string;
    text: string;
    value: number;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type FiltersResponse = {
    channels?: FiltersInfo[];
    delivery_partners?: FiltersInfo[];
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    report_created_at?: string;
    report_name?: string;
    display_name?: string;
    status?: string;
    report_type?: string;
    report_id?: string;
    s3_key?: string;
    report_requested_at?: string;
    request_details?: any;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    company_id?: string;
    item_id?: string;
    article_id?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    message?: string;
    value?: string;
    type?: string;
};
type JioCodeUpsertResponse = {
    success?: boolean;
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
    identifier?: string;
    trace_id?: string;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkActionPayload = {
    url: string;
};
type BulkActionResponse = {
    status?: boolean;
    message?: string;
};
type BulkActionDetailsDataField = {
    company_id?: string;
    batch_id?: string;
    successful_shipments_count?: number;
    total_shipments_count?: number;
    successful_shipment_ids?: string[];
    failed_shipments_count?: number;
    processing_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    success?: string;
    status?: boolean;
    failed_records?: string[];
    data?: BulkActionDetailsDataField[];
    message?: string;
    uploaded_on?: string;
    error?: string[];
    user_id?: string;
    uploaded_by?: string;
};
type OrderUser = {
    phone: number;
    city: string;
    pincode: string;
    email: string;
    last_name: string;
    state: string;
    address1?: string;
    first_name: string;
    address2?: string;
    mobile: number;
    country: string;
};
type ArticleDetails = {
    attributes: any;
    _id: string;
    quantity: number;
    brand_id: number;
    dimension: any;
    category: any;
    weight: any;
};
type LocationDetails = {
    articles: ArticleDetails[];
    fulfillment_type: string;
    fulfillment_id: number;
};
type ShipmentDetails = {
    affiliate_shipment_id: string;
    articles: ArticleDetails[];
    shipments: number;
    box_type?: string;
    meta?: any;
    dp_id?: number;
    fulfillment_id: number;
};
type ShipmentConfig = {
    location_details?: LocationDetails;
    journey: string;
    action: string;
    shipment: ShipmentDetails[];
    to_pincode: string;
    payment_mode: string;
    identifier: string;
    source: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    quantity: number;
    _id: string;
    seller_identifier: string;
    affiliate_store_id: string;
    discount: number;
    hsn_code_id: string;
    company_id: number;
    identifier: any;
    unit_price: number;
    price_marked: number;
    store_id: number;
    pdf_links?: MarketPlacePdf;
    modified_on: string;
    price_effective: number;
    amount_paid: number;
    affiliate_meta: any;
    delivery_charge: number;
    sku: string;
    item_size: string;
    avl_qty: number;
    fynd_store_id: string;
    transfer_price: number;
    item_id: number;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderInfo = {
    delivery_charges: number;
    coupon?: string;
    billing_address: OrderUser;
    order_value: number;
    shipment?: ShipmentData;
    cod_charges: number;
    items: any;
    bags: AffiliateBag[];
    affiliate_order_id?: string;
    payment?: any;
    payment_mode: string;
    discount: number;
    shipping_address: OrderUser;
    order_priority?: OrderPriority;
    user: UserData;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    secret: string;
    name: string;
    meta?: AffiliateAppConfigMeta[];
    updated_at: string;
    id: string;
    token: string;
    created_at: string;
    owner: string;
    description?: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    token: string;
    config?: AffiliateConfig;
    id: string;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    bag_end_state?: string;
    create_user?: boolean;
    store_lookup?: string;
    affiliate: Affiliate;
    article_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
};
type CreateOrderPayload = {
    order_info: OrderInfo;
    order_config: OrderConfig;
    affiliate_id: string;
};
type CreateOrderResponse = {
    fynd_order_id: string;
};
type ErrorResponse = {
    status: number;
    message: string;
    error_trace?: string;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    status?: number;
    message?: string;
    error?: string;
    shipment_id?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type StoreReassign = {
    reason_ids?: number[];
    set_id?: string;
    item_id?: string;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    mongo_article_id?: string;
    store_id: number;
    fynd_order_id?: string;
    bag_id?: number;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    reason_text: string;
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    id?: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    entity_type: string;
    entities: Entities[];
    action: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    is_locked?: boolean;
    bag_id?: number;
};
type CheckResponse = {
    affiliate_shipment_id?: string;
    lock_status?: boolean;
    original_filter?: OriginalFilter;
    bags?: Bags[];
    is_bag_locked?: boolean;
    affiliate_id?: string;
    is_shipment_locked?: boolean;
    shipment_id?: string;
    status?: string;
};
type UpdateShipmentLockResponse = {
    message?: string;
    success?: boolean;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    to_datetime?: string;
    logo_url?: string;
    from_datetime?: string;
    platform_name?: string;
    platform_id?: string;
    id: number;
    title?: string;
    created_at?: string;
    company_id?: number;
    description?: string;
};
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
};
type BaseResponse = {
    message: string;
    success: boolean;
};
type Click2CallResponse = {
    status: boolean;
    call_id: string;
};
type Products = {
    quantity?: number;
    identifier?: string;
    line_number?: number;
};
type ShipmentsRequest = {
    reasons?: any[];
    products?: Products[];
};
type StatuesRequest = {
    status?: string;
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest;
};
type StatusUpdateInternalRequest = {
    force_transition?: boolean;
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
    task?: boolean;
    statues?: StatuesRequest[];
};
type ShipmentidResponse = {
    code?: string;
    stack_trace?: string;
    message?: string;
    status?: number;
    exception?: string;
};
type ShipmentsResponse = {
    shipment_id?: ShipmentidResponse;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse;
};
type StatusUpdateInternalResponse = {
    statuses?: StatuesResponse[];
};
type ActionInfo = {
    display_text: string;
    description: string;
    slug: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l3_detail?: string;
    l2_detail?: string;
    ticket_url?: string;
    type: string;
    createdat: string;
    message: string;
    ticket_id?: string;
    l1_detail?: string;
    user: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    amount_paid: number;
    brand_name: string;
    phone_number: number;
    message: string;
    payment_mode: string;
    customer_name: string;
    shipment_id: number;
    country_code: string;
    order_id: string;
};
type SendSmsPayload = {
    slug: string;
    data?: SmsDataPayload;
    bag_id: number;
};
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    remarks?: string;
    meta: Meta;
    shipment_id?: string;
    id: number;
    status?: string;
    bag_list?: number[];
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type OrderStatusData = {
    shipment_details?: ShipmentDetail[];
    errors?: string[];
    order_details: OrderDetails;
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    mobile: number;
    end_date: string;
    start_date: string;
    order_details?: FyndOrderIdList[];
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    is_active?: boolean;
    words?: string[];
    result: SearchKeywordResult;
    _custom_json?: any;
    app_id?: string;
};
type GetSearchWordsData = {
    is_active?: boolean;
    words?: string[];
    result?: any;
    _custom_json?: any;
    app_id?: string;
    uid?: string;
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
    params?: any;
    url?: string;
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
    action?: AutocompleteAction;
    display?: string;
    _custom_json?: any;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    results?: AutocompleteResult[];
};
type GetAutocompleteWordsData = {
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    results?: any[];
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    _custom_json?: any;
    results?: any[];
    words?: string[];
};
type ProductBundleItem = {
    auto_select?: boolean;
    max_quantity: number;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    min_quantity: number;
    product_uid: number;
};
type ProductBundleRequest = {
    meta?: any;
    company_id?: number;
    name: string;
    is_active: boolean;
    created_on?: string;
    modified_on?: string;
    slug: string;
    products: ProductBundleItem[];
    created_by?: any;
    logo?: string;
    modified_by?: any;
    choice: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
};
type GetProductBundleCreateResponse = {
    meta?: any;
    company_id?: number;
    name: string;
    is_active: boolean;
    created_on?: string;
    modified_on?: string;
    slug: string;
    products: ProductBundleItem[];
    created_by?: any;
    logo?: string;
    modified_by?: any;
    choice: string;
    id?: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    meta?: any;
    company_id?: number;
    name: string;
    is_active: boolean;
    modified_on?: string;
    slug: string;
    products: ProductBundleItem[];
    logo?: string;
    modified_by?: any;
    choice: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
};
type LimitedProductData = {
    name?: string;
    images?: string[];
    attributes?: any;
    country_of_origin?: string;
    short_description?: string;
    slug?: string;
    sizes?: string[];
    price?: any;
    quantity?: number;
    item_code?: string;
    uid?: number;
    identifier?: any;
};
type Size = {
    value?: string;
    display?: string;
    is_available?: boolean;
    quantity?: number;
};
type Price = {
    min_marked?: number;
    max_marked?: number;
    min_effective?: number;
    max_effective?: number;
    currency?: string;
};
type GetProducts = {
    auto_select?: boolean;
    max_quantity?: number;
    product_details?: LimitedProductData;
    allow_remove?: boolean;
    sizes?: Size[];
    price?: Price;
    auto_add_to_cart?: boolean;
    min_quantity?: number;
    product_uid?: number;
};
type GetProductBundleResponse = {
    meta?: any;
    company_id?: number;
    name?: string;
    is_active?: boolean;
    slug?: string;
    products?: GetProducts[];
    logo?: string;
    choice?: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    image?: string;
    company_id?: number;
    name: string;
    active?: boolean;
    created_on?: string;
    title: string;
    modified_on?: string;
    brand_id?: number;
    created_by?: any;
    modified_by?: any;
    description?: string;
    subtitle?: string;
    guide?: Guide;
    tag?: string;
    id?: string;
};
type SuccessResponse = {
    success?: boolean;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    created_on?: string;
    active?: boolean;
    name?: string;
    company_id?: number;
    title?: string;
    modified_on?: string;
    brand_id?: number;
    created_by?: any;
    modified_by?: any;
    subtitle?: string;
    guide?: any;
    tag?: string;
    id?: string;
};
type MetaFields = {
    key: string;
    value: string;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    _custom_meta?: MetaFields[];
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type MOQ = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type ApplicationItemResponse = {
    alt_text?: any;
    seo?: SEO;
    moq?: MOQ;
};
type GetConfigMetadataResponse = {
    values?: any[];
    data: any[];
    condition?: any[];
};
type AttributeDetailsGroup = {
    is_active: boolean;
    priority: number;
    name: string;
    slug?: string;
    logo?: string;
    display_type: string;
    key?: string;
    unit?: string;
};
type AppConfigurationDetail = {
    is_active: boolean;
    priority: number;
    name?: string;
    attributes?: AttributeDetailsGroup[];
    slug: string;
    logo?: string;
    is_default: boolean;
    template_slugs?: string[];
    app_id: string;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    total_count: number;
    current: number;
    next: number;
    has_next: boolean;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_active: boolean;
    priority: number;
    name?: string;
    logo?: string;
    is_default: boolean;
    key: string;
    default_key: string;
    app_id: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    detail?: any;
    similar?: any;
    compare?: any;
    variant?: any;
};
type MetaDataListingFilterMetaResponse = {
    key?: string;
    display?: string;
    units?: any[];
    filter_types?: string[];
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
type ConfigurationProductConfig = {
    is_active: boolean;
    priority: number;
    title?: string;
    logo?: string;
    key: string;
    subtitle?: string;
    size?: ProductSize;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    is_active: boolean;
    priority: number;
    name: string;
    logo?: string;
    display_type: string;
    key: string;
    size: ProductSize;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationBucketPoints = {
    display?: string;
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    map?: any;
    value?: string;
    sort?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map_values?: any[];
    condition?: string;
};
type ConfigurationListingFilterConfig = {
    is_active: boolean;
    priority: number;
    name?: string;
    type: string;
    display_name?: string;
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    key: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    priority: number;
    name?: string;
    logo?: string;
    key: string;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type AppConfiguration = {
    created_on?: string;
    type?: string;
    product?: ConfigurationProduct;
    modified_on?: string;
    config_id?: string;
    created_by?: any;
    modified_by?: any;
    app_id: string;
    listing?: ConfigurationListing;
    config_type: string;
};
type AppCatalogConfiguration = {
    created_on?: string;
    type?: string;
    product?: ConfigurationProduct;
    modified_on?: string;
    config_id?: string;
    created_by?: any;
    modified_by?: any;
    app_id: string;
    id?: string;
    listing?: ConfigurationListing;
    config_type: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    product?: GetCatalogConfigurationDetailsProduct;
    config_id?: string;
    app_id: string;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    value?: string;
    name?: string;
    is_selected?: boolean;
};
type ProductFiltersKey = {
    name: string;
    kind?: string;
    display: string;
    logo?: string;
    operators?: string[];
};
type ProductFiltersValue = {
    currency_symbol?: string;
    currency_code?: string;
    query_format?: string;
    max?: number;
    count?: number;
    display: string;
    min?: number;
    display_format?: string;
    value: any;
    selected_min?: number;
    selected_max?: number;
    is_selected: boolean;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type GetCollectionQueryOptionResponse = {
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    operators: any;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type UserInfo = {
    email?: string;
    username?: string;
    uid?: string;
    user_id?: string;
};
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionSchedule = {
    start?: string;
    next_schedule?: NextSchedule[];
    end?: string;
    cron?: string;
    duration?: number;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CreateCollection = {
    allow_facets?: boolean;
    is_visible?: boolean;
    seo?: SeoDetail;
    slug: string;
    created_by?: UserInfo;
    modified_by?: UserInfo;
    tags?: string[];
    is_active?: boolean;
    meta?: any;
    type: string;
    query?: CollectionQuery[];
    _locale_language?: any;
    app_id: string;
    sort_on?: string;
    badge?: CollectionBadge;
    logo: CollectionImage;
    description?: string;
    _custom_json?: any;
    priority?: number;
    name: string;
    _schedule?: CollectionSchedule;
    published?: boolean;
    visible_facets_keys?: string[];
    banners: CollectionBanner;
    allow_sort?: boolean;
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
    allow_facets?: boolean;
    slug?: string;
    is_active?: boolean;
    meta?: any;
    type?: string;
    query?: CollectionQuery[];
    app_id?: string;
    sort_on?: string;
    badge?: any;
    logo?: BannerImage;
    cron?: any;
    description?: string;
    priority?: number;
    name?: string;
    _schedule?: any;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    allow_sort?: boolean;
    tag?: string[];
};
type CollectionListingFilterTag = {
    name?: string;
    display?: string;
    is_selected?: boolean;
};
type CollectionListingFilterType = {
    name?: string;
    display?: string;
    is_selected?: boolean;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type Media1 = {
    meta?: any;
    type?: string;
    url: string;
};
type GetCollectionDetailNest = {
    allow_facets?: boolean;
    slug?: string;
    is_active?: boolean;
    meta?: any;
    type?: string;
    query?: CollectionQuery[];
    app_id?: string;
    badge?: any;
    logo?: Media1;
    cron?: any;
    description?: string;
    uid?: string;
    priority?: number;
    name?: string;
    _schedule?: any;
    action?: Action;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    allow_sort?: boolean;
    tag?: string[];
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionDetailResponse = {
    is_active?: boolean;
    priority?: number;
    name?: string;
    type?: string;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    _schedule?: any;
    meta?: any;
    badge?: any;
    slug?: string;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    logo?: Media1;
    cron?: any;
    description?: string;
    allow_sort?: boolean;
    tag?: string[];
    app_id?: string;
};
type UpdateCollection = {
    allow_facets?: boolean;
    is_visible?: boolean;
    seo?: SeoDetail;
    slug?: string;
    modified_by?: UserInfo;
    tags?: string[];
    is_active?: boolean;
    meta?: any;
    type?: string;
    query?: CollectionQuery[];
    _locale_language?: any;
    sort_on?: string;
    badge?: CollectionBadge;
    logo?: CollectionImage;
    description?: string;
    _custom_json?: any;
    priority?: number;
    name?: string;
    _schedule?: CollectionSchedule;
    published?: boolean;
    visible_facets_keys?: string[];
    banners?: CollectionBanner;
    allow_sort?: boolean;
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    type?: string;
    item?: ItemQueryForUserCollection[];
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type Price1 = {
    max?: number;
    currency_symbol?: string;
    currency_code?: string;
    min?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductBrand = {
    action?: Action;
    name?: string;
    uid?: number;
    logo?: Media1;
};
type ProductDetailAttribute = {
    key?: string;
    type?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductListingDetail = {
    item_type?: string;
    attributes?: any;
    slug: string;
    price?: ProductListingPrice;
    color?: string;
    item_code?: string;
    image_nature?: string;
    brand?: ProductBrand;
    teaser_tag?: any;
    type?: string;
    rating_count?: number;
    discount?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    similars?: string[];
    promo_meta?: any;
    product_online_date?: string;
    description?: string;
    tryouts?: string[];
    medias?: Media1[];
    uid?: number;
    name?: string;
    has_variant?: boolean;
    sellable?: boolean;
    short_description?: string;
    highlights?: string[];
    rating?: number;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page?: Page;
};
type CatalogInsightBrand = {
    name?: string;
    available_articles?: number;
    available_sizes?: number;
    total_articles?: number;
    article_freshness?: number;
    total_sizes?: number;
};
type CatalogInsightItem = {
    count?: number;
    sellable_count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightResponse = {
    brand_distribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
};
type CrossSellingData = {
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    platform?: string;
    company_id?: number;
    brand_ids?: number[];
    opt_level: string;
    store_ids?: number[];
    enabled?: boolean;
};
type CompanyOptIn = {
    company_id: number;
    platform: string;
    created_on: number;
    modified_on: number;
    created_by?: any;
    brand_ids: number[];
    modified_by?: any;
    opt_level: string;
    store_ids: number[];
    enabled: boolean;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    company_type?: string;
    name?: string;
    uid?: number;
    business_type?: string;
};
type CompanyBrandDetail = {
    brand_name?: string;
    company_id?: number;
    brand_id?: number;
    total_article?: number;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    brand?: number;
    store?: number;
    company?: string;
};
type StoreDetail = {
    display_name?: string;
    created_on?: string;
    name?: string;
    store_code?: string;
    company_id?: number;
    timing?: any;
    modified_on?: string;
    store_type?: string;
    manager?: any;
    address?: any;
    additional_contacts?: any[];
    documents?: any[];
    uid?: number;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    type: string;
    allowed_values?: string[];
    range?: AttributeSchemaRange;
    format?: string;
    mandatory?: boolean;
    multi?: boolean;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type GenderDetail = {
    meta?: AttributeMasterMeta;
    name?: string;
    details?: AttributeMasterDetails;
    slug?: string;
    logo?: string;
    description?: string;
    schema?: AttributeMaster;
    filters?: AttributeMasterFilter;
    enabled_for_end_consumer?: boolean;
    is_nested?: boolean;
    id?: string;
    departments?: string[];
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    meta?: any;
    code?: string;
    message?: string;
    status?: number;
    errors?: any;
};
type DepartmentCreateUpdate = {
    is_active?: boolean;
    name: string;
    _cls?: string;
    slug?: string;
    logo: string;
    _custom_json?: any;
    synonyms?: string[];
    priority_order: number;
    tags?: string[];
    uid?: number;
    platforms?: any;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    _id?: string;
    username?: string;
    user_id?: string;
    contact?: string;
    uid?: string;
};
type GetDepartment = {
    is_active?: boolean;
    created_on?: string;
    name?: string;
    item_type?: string;
    modified_on?: string;
    search?: string;
    slug?: string;
    created_by?: UserSerializer;
    page_no?: number;
    logo?: string;
    page_size?: number;
    modified_by?: UserSerializer;
    synonyms?: string[];
    priority_order?: number;
    uid?: number;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    meta?: any;
    code?: string;
    message?: string;
    status?: number;
    errors?: any;
};
type UserDetail = {
    super_user?: boolean;
    contact?: string;
    username: string;
    user_id: string;
};
type DepartmentModel = {
    is_active?: boolean;
    created_on: string;
    _id?: any;
    name: any;
    _cls?: any;
    modified_on: string;
    slug?: any;
    created_by?: UserDetail;
    logo: string;
    modified_by?: UserDetail;
    _custom_json?: any;
    synonyms?: any[];
    verified_on?: string;
    priority_order: number;
    verified_by?: UserDetail;
    uid?: number;
};
type ProductTemplate = {
    is_active?: boolean;
    created_on?: string;
    name?: string;
    attributes?: string[];
    modified_on?: string;
    slug: string;
    is_archived?: boolean;
    created_by?: any;
    logo?: string;
    modified_by?: any;
    description?: string;
    is_physical: boolean;
    is_expirable: boolean;
    tag?: string;
    categories?: string[];
    departments?: string[];
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    is_active?: boolean;
    name?: string;
    attributes?: string[];
    slug: string;
    is_archived?: boolean;
    logo?: string;
    description?: string;
    is_physical: boolean;
    is_expirable: boolean;
    tag?: string;
    categories?: string[];
    id?: string;
    departments?: string[];
};
type Properties = {
    item_type?: any;
    media?: any;
    slug?: any;
    trader_type?: any;
    category_slug?: any;
    product_group_tag?: any;
    tags?: any;
    item_code?: any;
    is_active?: any;
    teaser_tag?: any;
    return_config?: any;
    no_of_boxes?: any;
    brand_uid?: any;
    command?: any;
    custom_order?: any;
    multi_size?: any;
    country_of_origin?: any;
    description?: any;
    hsn_code?: any;
    size_guide?: any;
    name?: any;
    variants?: any;
    is_dependent?: any;
    short_description?: any;
    trader?: any;
    sizes?: any;
    product_publish?: any;
    highlights?: any;
    currency?: any;
};
type GlobalValidation = {
    properties?: Properties;
    type?: string;
    required?: string[];
    definitions?: any;
    title?: string;
    description?: string;
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
type ProductDownloadItemsData = {
    brand?: string[];
    templates?: string[];
    type?: string;
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadsItems = {
    seller_id?: number;
    data?: ProductDownloadItemsData;
    status?: string;
    completed_on?: string;
    created_by?: VerifiedBy;
    task_id?: string;
    url?: string;
    template_tags?: any;
    trigger_on?: string;
    id?: string;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Media2 = {
    portrait: string;
    landscape: string;
    logo: string;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type CategoryRequestBody = {
    is_active: boolean;
    priority?: number;
    name: string;
    media?: Media2;
    slug?: string;
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    marketplaces?: CategoryMapping;
    level: number;
    synonyms?: string[];
    departments: number[];
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type Category = {
    is_active: boolean;
    priority?: number;
    name: string;
    created_on?: string;
    media?: Media2;
    modified_on?: string;
    slug?: string;
    created_by?: any;
    modified_by?: any;
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    marketplaces?: CategoryMapping;
    level: number;
    synonyms?: string[];
    id?: string;
    uid?: number;
    departments: number[];
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ReturnConfig = {
    time: number;
    unit: string;
    returnable: boolean;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type Trader = {
    type?: string;
    address?: string[];
    name?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type ProductCreateUpdate = {
    item_type: string;
    media?: Media1[];
    slug: string;
    category_slug: string;
    product_group_tag?: string[];
    tags?: string[];
    item_code: any;
    is_active?: boolean;
    company_id: number;
    teaser_tag?: TeaserTag;
    return_config: ReturnConfig;
    no_of_boxes?: number;
    brand_uid: number;
    tax_identifier: TaxIdentifier;
    custom_order?: CustomOrder;
    multi_size?: boolean;
    is_image_less_product?: boolean;
    change_request_id?: any;
    country_of_origin: string;
    bulk_job_id?: string;
    description?: string;
    _custom_json?: any;
    variant_media?: any;
    uid?: number;
    size_guide?: string;
    name: string;
    variants?: any;
    requester?: string;
    is_dependent?: boolean;
    short_description?: string;
    trader: Trader[];
    action?: string;
    is_set?: boolean;
    product_publish?: ProductPublish;
    template_tag: string;
    net_quantity?: NetQuantity;
    highlights?: string[];
    currency: string;
    departments: number[];
};
type Logo = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type Brand = {
    name?: string;
    uid?: number;
    logo?: Logo;
};
type Image = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Product = {
    item_type?: string;
    media?: Media1[];
    l3_mapping?: string[];
    slug?: string;
    is_physical?: boolean;
    all_sizes?: any[];
    color?: string;
    item_code?: string;
    image_nature?: string;
    brand?: Brand;
    is_active?: boolean;
    highlights?: string[];
    brand_uid?: number;
    category_uid?: number;
    tax_identifier?: any;
    custom_order?: any;
    multi_size?: boolean;
    country_of_origin?: string;
    description?: string;
    _custom_json?: any;
    uid?: number;
    hsn_code?: string;
    size_guide?: string;
    name?: string;
    variants?: any;
    is_dependent?: boolean;
    images?: Image[];
    short_description?: string;
    is_set?: boolean;
    sizes?: any[];
    product_publish?: ProductPublished;
    primary_color?: string;
    is_expirable?: boolean;
    template_tag?: string;
    category_slug?: string;
    currency?: string;
    id?: string;
    departments?: number[];
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type AttributeMasterSerializer = {
    slug: string;
    created_by?: any;
    modified_by?: any;
    schema: AttributeMaster;
    synonyms?: any;
    tags?: string[];
    variant?: boolean;
    suggestion?: string;
    modified_on?: string;
    filters: AttributeMasterFilter;
    is_nested?: boolean;
    unit?: string;
    details: AttributeMasterDetails;
    logo?: string;
    description?: string;
    enabled_for_end_consumer?: boolean;
    created_on?: string;
    name?: string;
    raw_key?: string;
    departments: string[];
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    email?: string;
    username?: string;
    uid?: string;
    user_id?: string;
};
type BulkJob = {
    is_active?: boolean;
    created_on: string;
    company_id: number;
    modified_on?: string;
    custom_template_tag?: string;
    file_path?: string;
    created_by?: UserInfo1;
    cancelled_records?: any[];
    failed?: number;
    modified_by?: UserInfo1;
    total: number;
    tracking_url?: string;
    template_tag?: string;
    succeed?: number;
    cancelled?: number;
    failed_records?: any[];
    stage?: string;
};
type BulkResponse = {
    is_active?: boolean;
    created_on: string;
    modified_on?: string;
    batch_id: string;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
};
type UserDetail1 = {
    full_name?: string;
    username?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    is_active?: boolean;
    company_id?: number;
    created_on?: string;
    modified_on?: string;
    template?: ProductTemplate;
    file_path?: string;
    created_by?: UserDetail1;
    cancelled_records?: string[];
    failed?: number;
    modified_by?: UserDetail1;
    total?: number;
    template_tag?: string;
    succeed?: number;
    cancelled?: number;
    failed_records?: string[];
    stage?: string;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    company_id: number;
    template_tag: string;
    data: any[];
    batch_id: string;
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
    username?: string;
    user_id?: string;
};
type Items = {
    is_active?: boolean;
    created_on?: string;
    company_id?: number;
    id?: string;
    modified_on?: string;
    file_path?: string;
    created_by?: UserCommon;
    cancelled_records?: string[];
    failed?: number;
    modified_by?: UserCommon;
    retry?: number;
    total?: number;
    tracking_url?: string;
    succeed?: number;
    cancelled?: number;
    failed_records?: string[];
    stage?: string;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductSizeDeleteDataResponse = {
    company_id?: number;
    item_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type ItemQuery = {
    brand_uid?: number;
    item_code?: string;
    uid?: number;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    quantity?: number;
    size_distribution: SizeDistribution;
    name?: string;
};
type GTIN = {
    primary?: boolean;
    gtin_type: string;
    gtin_value: string;
};
type InvSize = {
    item_weight_unit_of_measure?: string;
    store_code: string;
    price_transfer?: number;
    item_height?: number;
    item_length?: number;
    set?: InventorySet;
    price_effective: number;
    expiration_date?: string;
    is_set?: boolean;
    item_width?: number;
    currency: string;
    identifiers: GTIN[];
    price?: number;
    item_weight?: number;
    item_dimensions_unit_of_measure?: string;
    quantity: number;
    size: string;
};
type InventoryRequest = {
    company_id: number;
    item: ItemQuery;
    sizes: InvSize[];
};
type InventoryResponse = {
    price_transfer?: number;
    seller_identifier?: string;
    quantity?: number;
    price_effective?: number;
    inventory_updated_on?: string;
    sellable_quantity?: number;
    identifiers?: any;
    item_id?: number;
    price?: number;
    store?: any;
    currency?: string;
    uid?: string;
    size?: string;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type PriceMeta = {
    transfer: number;
    effective: number;
    updated_at?: string;
    marked: number;
    currency: string;
    tp_notes?: any;
};
type BrandMeta = {
    name: string;
    id: number;
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type DimensionResponse = {
    width: number;
    height: number;
    length: number;
    is_default: boolean;
    unit: string;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    damaged?: QuantityBase;
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    sellable?: QuantityBase;
};
type StoreMeta = {
    id: number;
};
type ManufacturerResponse = {
    name: string;
    address: string;
    is_default: boolean;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type CompanyMeta = {
    id: number;
};
type InventorySellerResponse = {
    seller_identifier: string;
    fynd_item_code: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    price: PriceMeta;
    fragile: boolean;
    tags?: string[];
    expiration_date?: string;
    brand: BrandMeta;
    is_active?: boolean;
    meta?: any;
    return_config?: ReturnConfig1;
    raw_meta?: any;
    weight: WeightResponse;
    tax_identifier?: any;
    item_id: number;
    track_inventory?: boolean;
    stage?: string;
    size: string;
    country_of_origin: string;
    dimension: DimensionResponse;
    quantities?: Quantities;
    added_on_store?: string;
    _custom_json?: any;
    fynd_meta?: any;
    store: StoreMeta;
    uid: string;
    identifier: any;
    fynd_article_code: string;
    manufacturer: ManufacturerResponse;
    set?: InventorySet;
    trader?: Trader1[];
    is_set?: boolean;
    total_quantity: number;
    company: CompanyMeta;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    id?: string;
    company_id?: number;
    created_on?: string;
    is_active?: boolean;
    modified_on?: string;
    file_path?: string;
    created_by?: any;
    cancelled_records?: string[];
    failed?: number;
    modified_by?: any;
    total?: number;
    succeed?: number;
    cancelled?: number;
    failed_records?: string[];
    stage?: string;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    item_weight_unit_of_measure?: string;
    store_code: string;
    seller_identifier: string;
    quantity?: number;
    price_effective?: number;
    tags?: string[];
    total_quantity?: number;
    price_marked?: number;
    price?: number;
    item_dimensions_unit_of_measure?: string;
    currency?: string;
    expiration_date?: string;
};
type InventoryBulkRequest = {
    company_id: number;
    user?: any;
    batch_id: string;
    sizes: InventoryJobPayload[];
};
type InventoryExportRequest = {
    brand?: number[];
    store?: number[];
    type?: string;
};
type InventoryExportResponse = {
    seller_id: number;
    status?: string;
    task_id: string;
    trigger_on?: string;
    request_params?: any;
};
type InventoryExportJob = {
    seller_id: number;
    status?: string;
    completed_on?: string;
    task_id: string;
    url?: string;
    trigger_on?: string;
    request_params?: any;
};
type FilerList = {
    value?: string;
    display?: string;
};
type InventoryConfig = {
    multivalues?: boolean;
    data?: FilerList[];
};
type InventoryPayload = {
    seller_identifier: string;
    price_effective?: number;
    total_quantity?: number;
    price_marked?: number;
    tags?: string[];
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
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnUpsert = {
    is_active?: boolean;
    company_id: number;
    threshold2?: number;
    tax_on_mrp: boolean;
    tax1: number;
    threshold1: number;
    tax2?: number;
    tax_on_esp?: boolean;
    hs2_code: string;
    uid?: number;
    hsn_code: string;
};
type HsnCodesObject = {
    id?: string;
    company_id?: number;
    threshold2?: number;
    tax_on_mrp?: boolean;
    modified_on?: string;
    tax1?: number;
    threshold1?: number;
    tax2?: number;
    tax_on_esp?: boolean;
    hs2_code?: string;
    hsn_code?: string;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    has_previous?: boolean;
    current?: string;
    has_next?: boolean;
    item_total?: number;
    size?: number;
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
    effective_date: string;
    cess?: number;
    rate: number;
    threshold: number;
};
type HSNDataInsertV2 = {
    created_on?: string;
    type: string;
    reporting_hsn: string;
    modified_on?: string;
    country_code: string;
    created_by?: any;
    modified_by?: any;
    description: string;
    taxes: TaxSlab[];
    hsn_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    discount?: string;
    name?: string;
    action?: Action;
    slug?: string;
    banners?: ImageUrls;
    logo?: Media;
    uid?: number;
    departments?: string[];
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
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
    name?: string;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    _custom_json?: any;
    uid?: number;
    childs?: any[];
};
type SecondLevelChild = {
    name?: string;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    _custom_json?: any;
    uid?: number;
    childs?: ThirdLevelChild[];
};
type Child = {
    name?: string;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    _custom_json?: any;
    uid?: number;
    childs?: SecondLevelChild[];
};
type CategoryItems = {
    name?: string;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    uid?: number;
    childs?: Child[];
};
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type CategoryListingResponse = {
    data?: DepartmentCategoryTree[];
    departments?: DepartmentIdentifier[];
};
type ApplicationProductListingResponse = {
    sort_on?: ProductSortOn[];
    page: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    operators?: any;
};
type ProductDetail = {
    item_type?: string;
    attributes?: any;
    slug: string;
    color?: string;
    item_code?: string;
    image_nature?: string;
    brand?: ProductBrand;
    teaser_tag?: any;
    type?: string;
    rating_count?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    similars?: string[];
    promo_meta?: any;
    product_online_date?: string;
    description?: string;
    tryouts?: string[];
    medias?: Media1[];
    uid?: number;
    name?: string;
    has_variant?: boolean;
    short_description?: string;
    highlights?: string[];
    rating?: number;
};
type InventoryPage = {
    type: string;
    has_previous?: boolean;
    has_next?: boolean;
    item_total: number;
    next_id?: string;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    weekday: string;
    opening?: LocationTimingSerializer;
    open: boolean;
    closing?: LocationTimingSerializer;
};
type InvoiceCredSerializer = {
    username?: string;
    password?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobile_no: SellerPhoneNumber;
};
type Document = {
    type: string;
    legal_name?: string;
    url?: string;
    value: string;
    verified?: boolean;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type UserSerializer2 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetAddressSerializer = {
    address2?: string;
    address1?: string;
    state?: string;
    latitude?: number;
    longitude?: number;
    landmark?: string;
    country_code?: string;
    pincode?: number;
    country?: string;
    city?: string;
    address_type?: string;
};
type GetCompanySerializer = {
    company_type?: string;
    created_on?: string;
    name?: string;
    business_type?: string;
    modified_on?: string;
    reject_reason?: string;
    created_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer2;
    verified_on?: string;
    verified_by?: UserSerializer2;
    uid?: number;
    stage?: string;
};
type GetLocationSerializer = {
    integration_type?: LocationIntegrationType;
    timing?: LocationDayWiseSerializer[];
    gst_credentials?: InvoiceDetailsSerializer;
    created_by?: UserSerializer1;
    modified_by?: UserSerializer1;
    verified_by?: UserSerializer1;
    modified_on?: string;
    phone_number: string;
    code: string;
    manager?: LocationManagerSerializer;
    notification_emails?: string[];
    stage?: string;
    _custom_json?: any;
    verified_on?: string;
    documents?: Document[];
    uid?: number;
    contact_numbers?: SellerPhoneNumber[];
    display_name: string;
    created_on?: string;
    name: string;
    warnings?: any;
    store_type?: string;
    product_return_config?: ProductReturnConfigSerializer;
    company?: GetCompanySerializer;
    address: GetAddressSerializer;
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
type CompanyTaxesSerializer = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type GetCompanyProfileSerializerResponse = {
    modified_by?: UserSerializer;
    business_details?: BusinessDetails;
    verified_by?: UserSerializer;
    verified_on?: string;
    uid: number;
    business_country_info?: BusinessCountryInfo;
    franchise_enabled?: boolean;
    name?: string;
    warnings?: any;
    mode?: string;
    business_type: string;
    notification_emails?: string[];
    business_info?: string;
    taxes?: CompanyTaxesSerializer[];
    addresses?: GetAddressSerializer[];
    documents?: Document[];
    company_type: string;
    modified_on?: string;
    created_on?: string;
    created_by?: UserSerializer;
    stage?: string;
    contact_details?: ContactDetails;
};
type CreateUpdateAddressSerializer = {
    city: string;
    pincode: number;
    address2?: string;
    address1: string;
    landmark?: string;
    country: string;
    address_type: string;
    latitude: number;
    longitude: number;
    country_code?: string;
    state: string;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type UpdateCompany = {
    business_type?: string;
    notification_emails?: string[];
    addresses?: CreateUpdateAddressSerializer[];
    business_details?: BusinessDetails;
    franchise_enabled?: boolean;
    business_info?: string;
    warnings?: any;
    taxes?: CompanyTaxesSerializer1[];
    reject_reason?: string;
    name?: string;
    _custom_json?: any;
    contact_details?: ContactDetails;
    documents?: Document[];
    company_type?: string;
};
type ProfileSuccessResponse = {
    success?: boolean;
    uid?: number;
};
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
type MetricsSerializer = {
    brand?: DocumentsObj;
    store_documents?: DocumentsObj;
    uid?: number;
    company_documents?: DocumentsObj;
    product?: DocumentsObj;
    stage?: string;
    store?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    modified_by?: UserSerializer;
    synonyms?: string[];
    verified_by?: UserSerializer;
    verified_on?: string;
    uid?: number;
    description?: string;
    name: string;
    _custom_json?: any;
    warnings?: any;
    logo?: string;
    banner?: BrandBannerSerializer;
    mode?: string;
    slug_key?: string;
    modified_on?: string;
    created_on?: string;
    _locale_language?: any;
    stage?: string;
    created_by?: UserSerializer;
    reject_reason?: string;
};
type CreateUpdateBrandRequestSerializer = {
    company_id?: number;
    brand_tier?: string;
    synonyms?: string[];
    _locale_language?: any;
    uid?: number;
    logo: string;
    banner?: BrandBannerSerializer;
    description?: string;
    name: string;
    _custom_json?: any;
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
    business_type: string;
    notification_emails?: string[];
    modified_by?: UserSerializer;
    market_channels?: string[];
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    created_on?: string;
    verified_by?: UserSerializer;
    details?: CompanyDetails;
    stage?: string;
    verified_on?: string;
    uid?: number;
    created_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    reject_reason?: string;
    name?: string;
    _custom_json?: any;
    company_type: string;
};
type CompanyBrandSerializer = {
    brand?: GetBrandResponseSerializer;
    modified_by?: UserSerializer;
    reject_reason?: string;
    company?: CompanySerializer;
    modified_on?: string;
    created_on?: string;
    verified_by?: UserSerializer;
    verified_on?: string;
    uid?: number;
    warnings?: any;
    created_by?: UserSerializer;
    stage?: string;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    uid?: number;
    company: number;
};
type LocationSerializer = {
    notification_emails?: string[];
    contact_numbers?: SellerPhoneNumber[];
    company: number;
    manager?: LocationManagerSerializer;
    warnings?: any;
    uid?: number;
    code: string;
    store_type?: string;
    documents?: Document[];
    address: GetAddressSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    stage?: string;
    name: string;
    _custom_json?: any;
    timing?: LocationDayWiseSerializer[];
    display_name: string;
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
    jiopplink?: PaymentModeConfig;
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
type PriceRange = {
    min?: number;
    max?: number;
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
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    types?: string[];
    networks?: string[];
    uses?: PaymentAllowValue;
};
type Restrictions = {
    price_range?: PriceRange;
    uses?: UsesRestriction;
    bulk_bundle?: BulkBundleRestriction;
    ordering_stores?: number[];
    user_groups?: number[];
    post_order?: PostOrder;
    coupon_allowed?: boolean;
    payments?: any;
    platforms?: string[];
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Identifier = {
    brand_id?: number[];
    category_id?: number[];
    article_id?: string[];
    user_id?: string[];
    company_id?: number[];
    store_id?: number[];
    collection_id?: string[];
    item_id?: number[];
};
type Rule = {
    key?: number;
    discount_qty?: number;
    value?: number;
    min?: number;
    max?: number;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponSchedule = {
    start?: string;
    next_schedule?: any[];
    cron?: string;
    duration?: number;
    end?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    description?: string;
    title?: string;
    remove?: DisplayMetaDict;
    subtitle?: string;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
};
type RuleDefinition = {
    auto_apply?: boolean;
    type: string;
    calculate_on: string;
    is_exact?: boolean;
    currency_code?: string;
    value_type: string;
    applicable_on: string;
    scope?: string[];
};
type Validity = {
    priority?: number;
};
type CouponAdd = {
    restrictions?: Restrictions;
    author?: CouponAuthor;
    identifiers: Identifier;
    type_slug: string;
    code: string;
    rule: Rule[];
    action?: CouponAction;
    state?: State;
    validation?: Validation;
    tags?: string[];
    ownership: Ownership;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    display_meta: DisplayMeta;
    rule_definition: RuleDefinition;
    validity: Validity;
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
    restrictions?: Restrictions;
    author?: CouponAuthor;
    identifiers: Identifier;
    type_slug: string;
    code: string;
    rule: Rule[];
    action?: CouponAction;
    state?: State;
    validation?: Validation;
    tags?: string[];
    ownership: Ownership;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    display_meta: DisplayMeta;
    rule_definition: RuleDefinition;
    validity: Validity;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type CompareObject = {
    equals?: number;
    greater_than_equals?: number;
    greater_than?: number;
    less_than_equals?: number;
    less_than?: number;
};
type ItemCriteria = {
    all_items?: boolean;
    item_sku?: string[];
    item_size?: string[];
    item_exclude_company?: number[];
    item_category?: number[];
    cart_total?: CompareObject;
    cart_quantity?: CompareObject;
    item_exclude_sku?: string[];
    item_exclude_category?: number[];
    item_company?: number[];
    item_brand?: number[];
    item_exclude_brand?: number[];
    item_exclude_store?: number[];
    item_id?: number[];
    item_store?: number[];
    buy_rules?: string[];
};
type DiscountOffer = {
    max_discount_amount?: number;
    discount_price?: number;
    max_usage_per_transaction?: number;
    code?: string;
    apportion_discount?: boolean;
    min_offer_quantity?: number;
    discount_amount?: number;
    discount_percentage?: number;
    partial_can_ret?: boolean;
    max_offer_quantity?: number;
};
type DiscountRule = {
    discount_type: string;
    buy_condition: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
};
type DisplayMeta1 = {
    offer_text?: string;
    description?: string;
    name?: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionSchedule = {
    published: boolean;
    start: string;
    next_schedule?: any[];
    cron?: string;
    duration?: number;
    end?: string;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    type: string;
    uses?: PaymentAllowValue1;
};
type Restrictions1 = {
    user_registered?: UserRegistered;
    anonymous_users?: boolean;
    uses: UsesRestriction1;
    user_id?: string[];
    user_groups?: number[];
    post_order?: PostOrder1;
    payments?: PromotionPaymentModes[];
    order_quantity?: number;
    platforms?: string[];
};
type PromotionListItem = {
    code?: string;
    stackable?: boolean;
    mode: string;
    apply_exclusive?: string;
    visiblility?: Visibility;
    ownership: Ownership1;
    currency?: string;
    apply_priority?: number;
    apply_all_discount?: boolean;
    application_id: string;
    promo_group: string;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    author?: PromotionAuthor;
    post_order_action?: PromotionAction;
    promotion_type: string;
    date_meta?: PromotionDateMeta;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    restrictions?: Restrictions1;
    calculate_on?: string;
    _custom_json?: any;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    code?: string;
    stackable?: boolean;
    mode: string;
    apply_exclusive?: string;
    visiblility?: Visibility;
    ownership: Ownership1;
    currency?: string;
    apply_priority?: number;
    apply_all_discount?: boolean;
    application_id: string;
    promo_group: string;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    author?: PromotionAuthor;
    post_order_action?: PromotionAction;
    promotion_type: string;
    date_meta?: PromotionDateMeta;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    restrictions?: Restrictions1;
    calculate_on?: string;
    _custom_json?: any;
};
type PromotionUpdate = {
    code?: string;
    stackable?: boolean;
    mode: string;
    apply_exclusive?: string;
    visiblility?: Visibility;
    ownership: Ownership1;
    currency?: string;
    apply_priority?: number;
    apply_all_discount?: boolean;
    application_id: string;
    promo_group: string;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    author?: PromotionAuthor;
    post_order_action?: PromotionAction;
    promotion_type: string;
    date_meta?: PromotionDateMeta;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    restrictions?: Restrictions1;
    calculate_on?: string;
    _custom_json?: any;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type CartItem = {
    size: string;
    quantity?: number;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductPrice = {
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
    add_on?: number;
    selling?: number;
    marked?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    query?: ActionQuery;
    type?: string;
    url?: string;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type ProductImage = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
type CartProduct = {
    type?: string;
    action?: ProductAction;
    name?: string;
    slug?: string;
    brand?: BaseInfo;
    categories?: CategoryInfo[];
    images?: ProductImage[];
    uid?: number;
};
type PromoMeta = {
    message?: string;
};
type BasePrice = {
    currency_symbol?: string;
    marked?: number;
    currency_code?: string;
    effective?: number;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    product_group_tags?: string[];
    seller?: BaseInfo;
    type?: string;
    price?: ArticlePriceInfo;
    store?: BaseInfo;
    size?: string;
    parent_item_identifiers?: any;
    extra_meta?: any;
    quantity?: number;
    uid?: string;
};
type FreeGiftItem = {
    item_slug?: string;
    item_images_url?: string[];
    item_price_details?: any;
    item_name?: string;
    item_id?: number;
    item_brand_name?: string;
};
type AppliedFreeArticles = {
    free_gift_item_detials?: FreeGiftItem[];
    article_id?: string;
    parent_item_identifier?: string;
    quantity?: number;
};
type DiscountRules = {
    offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
    raw_offer?: any;
};
type BuyRules = {
    item_criteria?: any;
    cart_conditions?: any;
};
type AppliedPromotion = {
    offer_text?: string;
    article_quantity?: number;
    promotion_name?: string;
    applied_free_articles?: AppliedFreeArticles;
    discount_rules?: DiscountRules[];
    amount?: number;
    promotion_type?: string;
    mrp_promotion?: boolean;
    promo_id?: string;
    buy_rules?: BuyRules[];
};
type ProductAvailability = {
    other_store_quantity?: number;
    is_valid?: boolean;
    deliverable?: boolean;
    sizes?: string[];
    out_of_stock?: boolean;
};
type CartProductInfo = {
    price_per_unit?: ProductPriceInfo;
    key?: string;
    identifiers: CartProductIdentifer;
    discount?: string;
    coupon_message?: string;
    price?: ProductPriceInfo;
    bulk_offer?: any;
    is_set?: boolean;
    message?: string;
    product?: CartProduct;
    parent_item_identifiers?: any;
    promo_meta?: PromoMeta;
    article?: ProductArticle;
    promotions_applied?: AppliedPromotion[];
    availability?: ProductAvailability;
    quantity?: number;
};
type DisplayBreakup = {
    key?: string;
    currency_code?: string;
    currency_symbol?: string;
    display?: string;
    value?: number;
    message?: string[];
};
type CouponBreakup = {
    description?: string;
    code?: string;
    type?: string;
    is_applied?: boolean;
    value?: number;
    message?: string;
    title?: string;
    minimum_cart_value?: number;
    max_discount_value?: number;
    coupon_type?: string;
    sub_title?: string;
    coupon_value?: number;
    uid?: string;
};
type RawBreakup = {
    subtotal?: number;
    discount?: number;
    mrp_total?: number;
    delivery_charge?: number;
    you_saved?: number;
    convenience_fee?: number;
    total?: number;
    gst_charges?: number;
    fynd_cash?: number;
    coupon?: number;
    vog?: number;
    cod_charge?: number;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    applicable?: number;
    description?: string;
    total?: number;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
    raw?: RawBreakup;
    loyalty_points?: LoyaltyPoints;
};
type OpenapiCartDetailsResponse = {
    items?: CartProductInfo[];
    is_valid?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    address_type?: string;
    email?: string;
    area_code_slug?: string;
    address?: string;
    area?: string;
    name?: string;
    pincode?: number;
    state?: string;
    country?: string;
    meta?: any;
    city?: string;
    country_code?: string;
    area_code: string;
    phone?: number;
    landmark?: string;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
};
type PromiseTimestamp = {
    min?: number;
    max?: number;
};
type PromiseFormatted = {
    min?: string;
    max?: string;
};
type ShipmentPromise = {
    timestamp?: PromiseTimestamp;
    formatted?: PromiseFormatted;
};
type OpenApiCartServiceabilityResponse = {
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    message?: string;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    extra_meta?: any;
    payment_gateway?: string;
    current_status?: string;
    order_id?: string;
};
type MultiTenderPaymentMethod = {
    mode: string;
    amount: number;
    name?: string;
    meta?: MultiTenderPaymentMeta;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiOrderItem = {
    files?: OpenApiFiles[];
    discount: number;
    amount_paid: number;
    delivery_charges: number;
    price_effective: number;
    size: string;
    price_marked: number;
    loyalty_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    extra_meta?: any;
    cashback_applied: number;
    coupon_effective_discount: number;
    meta?: CartItemMeta;
    cod_charges: number;
    quantity?: number;
    product_id: number;
    employee_discount?: number;
};
type OpenApiPlatformCheckoutReq = {
    files?: OpenApiFiles[];
    coupon_code: string;
    affiliate_order_id?: string;
    coupon?: string;
    cod_charges: number;
    coupon_value: number;
    payment_methods: MultiTenderPaymentMethod[];
    employee_discount?: any;
    order_id?: string;
    loyalty_discount?: number;
    delivery_charges: number;
    currency_code?: string;
    payment_mode?: string;
    cart_value: number;
    billing_address: ShippingAddress;
    cashback_applied: number;
    shipping_address?: ShippingAddress;
    cart_items: OpenApiOrderItem[];
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    message?: string;
    order_ref_id?: string;
    order_id: string;
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
type GenerateBulkInvoiceLabelShipment = {
    store_id: number;
    from_date: string;
    to_date: string;
    document_type: string;
    shipment_ids?: string[];
};
type GenerateBulkInvoiceOrLabelUrl = {
    uid: string;
    document_type: string;
    batch_id: number;
};
type DocumentType = {
    invoice: string;
    label: string;
};
type BulkListBadRequestResponse = {
    success?: boolean;
    error?: string;
};
type BulkListFailedResponse = {
    success?: boolean;
    error?: string;
};
type SuccessResponseGenerateBulkShipment = {
    success: boolean;
    job_id: number;
    trace_id?: string;
};
type SuccessResponseBulkStatus = {
    success: boolean;
    status: string;
    trace_id?: string;
};
type GenerateBulkUrlSuccessResponse = {
    url: string;
    uid: string;
    expires_in: number;
    presigned_type: string;
};
type InternalErrorResponseGenerateBulkShipment = {
    success: boolean;
    error: string;
};
type BadRequestResponseGenerateBulkUrl = {
    success: boolean;
    message: string;
    request_id?: string;
    exception?: string;
    stack_trace?: string;
    meta?: any;
};
type InternalErrorResponseGenerateBulkUrl = {
    success: boolean;
    message: string;
};
type GenerateBulkShipment = {
    uid: string;
    store_code: string;
    batch_id: string;
    document_type: string;
};
type GenerateBulkUrl = {
    expires_in?: number;
    document_type: string;
    batch_id: string;
};
type GetBulkStatusRequest = {
    batch_id: string;
};
type BadRequestResponseGenerateBulkItemParameters = {
    missing_property?: string;
    type?: string;
};
type BadRequestResponseGenerateBulkItem = {
    keyword?: string;
    data_path?: string;
    schema_path?: string;
    parameters?: BadRequestResponseGenerateBulkItemParameters;
    message?: string;
};
type SuccessResponseGenerateBulk = {
    success: boolean;
};
type BadRequestResponseGenerateBulk = {
    success: boolean;
    error_message: BadRequestResponseGenerateBulkItem[];
};
type InternalErrorResponseGenerateBulk = {
    success: boolean;
    error_message?: string;
};
type ShippingToAddress = {
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
};
type SellerAddress = {
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
};
type BoxDetails = {
    box_id: string;
    total_quantity: string;
    package_count: string;
    dimension: string;
    weight: string;
};
type GenerateBulkBoxLabel = {
    stock_transfer_id: string;
    label_type: string;
    uid: string;
    seller_name: string;
    template_id: number;
    box_details: BoxDetails[];
};
type GenerateBulkShipmentLabel = {
    label_type: string;
    uid: string;
    template_id: number;
    shipments: ShipmentDetails[];
};
type GenerateNoc = {
    uid: string;
    seller_name: string;
    seller_gstin: string;
    fc_gstin: string;
    template_id: number;
    fc_address: SellerAddress;
    seller_address: SellerAddress;
};
type PackageDetails = {
    package_id: string;
    item_quantity: string;
    package_type: string;
    packaging_type: string;
    dimension: string;
    weight: string;
};
type PackageItemDetails = {
    jio_code: string;
    item_name: string;
    mrp: string;
    country_of_origin: string;
    best_before_date: string;
    ean: string;
    package_details: PackageDetails[];
};
type GenerateBulkPackageLabel = {
    stock_transfer_id: string;
    label_type: string;
    uid: string;
    seller_name: string;
    template_id: number;
    item_details: PackageItemDetails[];
};
type SignedSuccessResponse = {
    uid?: string;
    url?: string;
    expires_in?: number;
};
type BulkPresignedSuccessResponse = {
    success: string;
    batch_id?: string;
    presigned_type?: string;
    presigned_url: string;
    expires_in?: number;
};
type SignedBadRequestResponse = {
    success?: boolean;
    error_message?: string;
};
type SignedFailedResponse = {
    success?: boolean;
    error_message?: string;
};
type StatusSuccessResponse = {
    success?: boolean;
    status?: string;
};
type StatusBadRequestResponse = {
    success?: boolean;
    error_message?: string;
};
type StatusFailedResponse = {
    success?: boolean;
    error_message?: string;
};
type GenerateManifest = {
    store_id: number;
    from_date: string;
    to_date: string;
    shipment_ids?: string[];
};
type GeneratePresignedManifestUrl = {
    manifest_id: string;
    uid: string;
};
type ManifestLink = {
    name: string;
    manifest_id: string;
};
type GenerateManifestUrlSuccessResponse = {
    url: string;
    uid: string;
    manifest_id: string;
    expires_in: number;
    presigned_type: string;
};
type ManifestListFailedResponse = {
    success?: boolean;
    error?: string;
};
type InvoiceLabelPresignedRequestBody = {
    document_type: string;
    entity_id: string;
    expires_in?: number;
};
type OrderInvoiceEngineError = {
    message?: string;
    success?: boolean;
};
