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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, TicketSubCategory, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, RedirectionSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, BeneficiaryModeDetails, AddBeneficiaryDetailsRequest, RefundAccountResponse, NotFoundResourceError, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, PaymentConfirmationMode, PaymentConfirmationRequest, PaymentConfirmationResponse, FilterInfoOption, FiltersInfo, PaymentModeInfo, Prices, ShipmentStatus, GSTDetailsData, PlatformItem, BagUnit, UserDataInfo, ShipmentItemFulFillingStore, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, ShipmentPayments, UserDetailsData, OrderDetailsData, DPDetailsData, FulfillingStore, BagStateMapper, BagStatusHistory, TrackingList, ShipmentStatusData, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, Identifier, FinancialBreakup, BagGST, PlatformDeliveryAddress, OrderBrandName, OrderBagArticle, BagConfigs, OrderBags, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, DateRange, ManifestFilter, GeneratedManifestItem, ManifestPage, GeneratedManifestResponse, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailItem, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntitiesReasons, ProductsReasons, ReasonsData, Products, EntitiesDataUpdates, ProductsDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, StatusUpdateInternalRequest, ShipmentidResponse, ShipmentsResponse, StatuesResponse, StatusUpdateInternalResponse, AffiliateStoreIdMapping, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, MarketPlacePdf, AffiliateBag, OrderUser, UserData, ArticleDetails, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderPriority, OrderInfo, CreateOrderPayload, CreateOrderResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, CreateOrderErrorReponse, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SuccessResponse, SizeGuideResponse, MOQ, ApplicationItemResponse, MetaFields, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, BannerImage, ImageUrls, Media1, CollectionQuery, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionImage, CollectionBanner, UserInfo, SeoDetail, CollectionBadge, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Logo, Brand, ProductPublished, Image, Product, ProductListingResponse, NetQuantity, TaxIdentifier, CustomOrder, TeaserTag, ProductPublish, Trader, ReturnConfig, ProductCreateUpdate, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, WeightResponse, BrandMeta, StoreMeta, CompanyMeta, ManufacturerResponse, PriceMeta, Trader1, ReturnConfig1, QuantityBase, Quantities, DimensionResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, UserSerializer1, LocationIntegrationType, UserSerializer2, GetAddressSerializer, GetCompanySerializer, Document, SellerPhoneNumber, ProductReturnConfigSerializer, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationManagerSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationStoreJson, ContactDetails, Website, BusinessDetails, CompanyTaxesSerializer, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, BulkBundleRestriction, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, PriceRange, PostOrder, Restrictions, DisplayMetaDict, DisplayMeta, CouponAction, CouponAuthor, Validation, CouponSchedule, Validity, Ownership, RuleDefinition, CouponDateMeta, Rule, State, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, DisplayMeta1, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, PostOrder1, Restrictions1, PromotionSchedule, PromotionAction, PromotionDateMeta, Visibility, PromotionAuthor, Ownership1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, PromoMeta, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, ProductPrice, ProductPriceInfo, ProductAvailability, CartProductIdentifer, ActionQuery, ProductAction, CategoryInfo, ProductImage, CartProduct, CartProductInfo, RawBreakup, DisplayBreakup, LoyaltyPoints, CouponBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, Schedule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, GenerateBulkInvoiceLabelShipment, GenerateBulkInvoiceOrLabelUrl, DocumentType, BulkListBadRequestResponse, BulkListFailedResponse, SuccessResponseGenerateBulkShipment, SuccessResponseBulkStatus, GenerateBulkUrlSuccessResponse, InternalErrorResponseGenerateBulkShipment, BadRequestResponseGenerateBulkUrl, InternalErrorResponseGenerateBulkUrl, GenerateBulkShipment, GenerateBulkUrl, GetBulkStatusRequest, BadRequestResponseGenerateBulkItemParameters, BadRequestResponseGenerateBulkItem, SuccessResponseGenerateBulk, BadRequestResponseGenerateBulk, InternalErrorResponseGenerateBulk, ShippingToAddress, SellerAddress, BoxDetails, GenerateBulkBoxLabel, GenerateBulkShipmentLabel, GenerateNoc, PackageDetails, PackageItemDetails, GenerateBulkPackageLabel, SignedSuccessResponse, BulkPresignedSuccessResponse, SignedBadRequestResponse, SignedFailedResponse, StatusSuccessResponse, StatusBadRequestResponse, StatusFailedResponse, GenerateManifest, GeneratePresignedManifestUrl, ManifestLink, GenerateManifestUrlSuccessResponse, ManifestListFailedResponse, InvoiceLabelPresignedRequestBody };
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
    sub_navigation?: SubNavigationReference[];
};
type SubNavigationReference = {
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
    app_id: string;
    created: boolean;
    success: boolean;
    display_fields: string[];
    excluded_fields: string[];
    aggregators?: any[];
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
type PaymentGatewayConfig = {
    config_type: string;
    secret: string;
    is_active?: boolean;
    merchant_salt: string;
    key: string;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
    is_active?: boolean;
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
    logos?: PaymentModeLogo;
    code?: string;
    package_name?: string;
    display_name?: string;
};
type PaymentModeList = {
    display_priority?: number;
    expired?: boolean;
    card_brand_image?: string;
    card_isin?: string;
    retry_count?: number;
    merchant_code?: string;
    card_name?: string;
    nickname?: string;
    card_type?: string;
    aggregator_name: string;
    card_number?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_reference?: string;
    card_id?: string;
    card_issuer?: string;
    card_brand?: string;
    exp_year?: number;
    intent_flow?: boolean;
    card_fingerprint?: string;
    timeout?: number;
    logo_url?: PaymentModeLogo;
    display_name?: string;
    code?: string;
    intent_app?: IntentApp[];
    card_token?: string;
    intent_app_error_list?: string[];
    name?: string;
    exp_month?: number;
    fynd_vpa?: string;
};
type RootPaymentMode = {
    anonymous_enable?: boolean;
    display_priority: number;
    aggregator_name?: string;
    logo_url?: PaymentModeLogo;
    display_name: string;
    add_card_enabled?: boolean;
    name: string;
    logo?: string;
    list?: PaymentModeList[];
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
    unique_transfer_no: any;
    is_active: boolean;
    customers: any;
    is_default: boolean;
    transfer_type: string;
    more_attributes: any;
};
type PayoutBankDetails = {
    account_type: string;
    country?: string;
    ifsc_code: string;
    city?: string;
    pincode?: number;
    account_holder?: string;
    account_no?: string;
    bank_name?: string;
    state?: string;
    branch_name?: string;
};
type PayoutRequest = {
    aggregator: string;
    unique_external_id: string;
    users: any;
    bank_details: PayoutBankDetails;
    is_active: boolean;
    transfer_type: string;
};
type PayoutResponse = {
    payouts: any;
    aggregator: string;
    created: boolean;
    payment_status: string;
    unique_transfer_no: string;
    success: boolean;
    users: any;
    bank_details: any;
    is_active: boolean;
    transfer_type: string;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    success: boolean;
    is_active: boolean;
};
type UpdatePayoutRequest = {
    is_default: boolean;
    unique_external_id: string;
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
    ifsc_code: string;
    wallet?: string;
    account_holder: string;
    address?: string;
    account_no: string;
    email: string;
    bank_name: string;
    comment?: string;
    vpa?: string;
    mobile: string;
    branch_name: string;
};
type AddBeneficiaryDetailsRequest = {
    request_id?: string;
    shipment_id: string;
    order_id: string;
    details: BeneficiaryModeDetails;
    otp?: string;
    delights: boolean;
    transfer_mode: string;
};
type RefundAccountResponse = {
    message: string;
    success: boolean;
    is_verified_flag?: boolean;
    data?: any;
};
type NotFoundResourceError = {
    code: string;
    success: boolean;
    description: string;
};
type IfscCodeResponse = {
    bank_name: string;
    success?: boolean;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    subtitle: string;
    modified_on: string;
    email: string;
    beneficiary_id: string;
    created_on: string;
    delights_user_name?: string;
    bank_name: string;
    transfer_mode: string;
    branch_name?: string;
    id: number;
    address: string;
    account_no: string;
    ifsc_code: string;
    display_name: string;
    is_active: boolean;
    account_holder: string;
    comment?: string;
    mobile?: string;
    title: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type PaymentConfirmationMode = {
    mode: string;
    amount: number;
    name?: string;
    meta?: any;
};
type PaymentConfirmationRequest = {
    payment_methods: PaymentConfirmationMode[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    message: string;
    success: boolean;
    order_id: string;
};
type FilterInfoOption = {
    name?: string;
    value?: string;
    text: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    value: string;
    text: string;
    type: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type Prices = {
    tax_collected_at_source?: number;
    price_marked?: number;
    refund_amount?: number;
    cashback?: number;
    amount_paid_roundoff?: number;
    cod_charges?: number;
    fynd_credits?: number;
    amount_paid?: number;
    promotion_effective_discount?: number;
    discount?: number;
    cashback_applied?: number;
    refund_credit?: number;
    price_effective?: number;
    delivery_charge?: number;
    coupon_value?: number;
    value_of_good?: number;
};
type ShipmentStatus = {
    title: string;
    hex_code: string;
    status: string;
    actual_status: string;
    ops_status: string;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    gstin_code: string;
    gst_fee: number;
    brand_calculated_amount: number;
    value_of_good: number;
};
type PlatformItem = {
    image?: string[];
    can_return?: boolean;
    can_cancel?: boolean;
    color?: string;
    code?: string;
    l3_category_name?: string;
    department_id?: number;
    images?: string[];
    name?: string;
    size?: string;
    l3_category?: number;
    id?: number;
    l1_category?: string[];
};
type BagUnit = {
    status: any;
    item_quantity: number;
    total_shipment_bags: number;
    gst?: GSTDetailsData;
    bag_id: number;
    prices?: Prices;
    shipment_id: string;
    ordering_channel: string;
    item?: PlatformItem;
};
type UserDataInfo = {
    first_name?: string;
    last_name?: string;
    uid?: number;
    mobile?: string;
    avis_user_id?: string;
    name?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    email?: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentItem = {
    payment_mode_info?: PaymentModeInfo;
    total_shipments_in_order: number;
    shipment_created_at: number;
    application?: any;
    sla?: any;
    prices?: Prices;
    shipment_status?: ShipmentStatus;
    bags?: BagUnit[];
    total_bags_count: number;
    id: string;
    user?: UserDataInfo;
    channel?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    created_at: string;
    fulfilling_centre: string;
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    page?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type ShipmentPayments = {
    mode: string;
    source?: string;
    logo?: string;
};
type UserDetailsData = {
    city: string;
    address: string;
    pincode: string;
    country: string;
    name: string;
    email: string;
    phone: string;
    state: string;
};
type OrderDetailsData = {
    tax_details?: any;
    order_value?: string;
    source?: string;
    affiliate_id?: string;
    cod_charges?: string;
    fynd_order_id: string;
    order_date?: string;
    ordering_channel_logo?: any;
    ordering_channel?: string;
};
type DPDetailsData = {
    track_url?: string;
    eway_bill_id?: string;
    pincode?: string;
    country?: string;
    name?: string;
    gst_tag?: string;
    id?: string;
    awb_no?: string;
};
type FulfillingStore = {
    city: string;
    store_name: string;
    address: string;
    pincode: string;
    contact_person: string;
    country: string;
    fulfillment_channel: string;
    meta: any;
    code: string;
    phone: string;
    state: string;
    id: string;
};
type BagStateMapper = {
    display_name: string;
    journey_type: string;
    bs_id: number;
    app_state_name?: string;
    name: string;
    app_display_name?: string;
    state_type: string;
    app_facing?: boolean;
    is_active?: boolean;
    notify_customer?: boolean;
};
type BagStatusHistory = {
    display_name?: boolean;
    updated_at?: string;
    bsh_id: number;
    status: string;
    state_id: number;
    bag_id: number;
    delivery_awb_number?: string;
    bag_state_mapper: BagStateMapper;
    state_type?: string;
    app_display_name?: boolean;
    shipment_id: string;
    reasons?: any[];
    kafka_sync?: boolean;
    forward?: boolean;
    store_id: number;
    created_at: string;
    delivery_partner_id?: number;
};
type TrackingList = {
    text: string;
    status: string;
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
};
type ShipmentStatusData = {
    status?: string;
    shipment_id?: string;
    id?: number;
    created_at?: string;
    bag_list?: number[];
};
type DiscountRules = {
    value?: number;
    type?: string;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    item_criteria?: ItemCriterias;
    cart_conditions?: any;
};
type AppliedPromos = {
    promotion_name?: string;
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
    promotion_type?: string;
    article_quantity?: number;
    promo_id?: string;
    amount?: number;
    buy_rules?: BuyRules[];
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    price_marked: number;
    gst_fee: string;
    hsn_code: string;
    price_effective: number;
    delivery_charge: number;
    tax_collected_at_source?: number;
    cashback: number;
    pm_price_split: any;
    cashback_applied: number;
    gst_tag: string;
    identifiers: Identifier;
    item_name: string;
    amount_paid_roundoff?: number;
    fynd_credits: number;
    cod_charges: number;
    amount_paid: number;
    brand_calculated_amount: number;
    promotion_effective_discount: number;
    refund_credit: number;
    transfer_price: number;
    coupon_effective_discount: number;
    total_units: number;
    size: string;
    discount: number;
    gst_tax_percentage: number;
    added_to_fynd_cash: boolean;
    coupon_value: number;
    value_of_good: number;
};
type BagGST = {
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    gst_fee?: number;
    hsn_code?: string;
    brand_calculated_amount?: number;
    gst_tax_percentage?: number;
    gst_tag?: string;
    value_of_good?: number;
};
type PlatformDeliveryAddress = {
    address_type?: string;
    city?: string;
    updated_at?: string;
    address_category?: string;
    address1?: string;
    landmark?: string;
    pincode?: string;
    contact_person?: string;
    country?: string;
    address2?: string;
    area?: string;
    latitude?: number;
    longitude?: number;
    version?: string;
    email?: string;
    phone?: string;
    created_at?: string;
    state?: string;
};
type OrderBrandName = {
    brand_name: string;
    company: string;
    created_on: number;
    modified_on?: number;
    id: number;
    logo: string;
};
type OrderBagArticle = {
    identifiers?: any;
    uid?: string;
    return_config?: any;
};
type BagConfigs = {
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    allow_force_return: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
};
type OrderBags = {
    display_name?: string;
    quantity?: number;
    identifier?: string;
    applied_promos?: AppliedPromos[];
    financial_breakup?: FinancialBreakup[];
    gst_details?: BagGST;
    bag_id: number;
    prices?: Prices;
    delivery_address?: PlatformDeliveryAddress;
    parent_promo_bags?: any;
    seller_identifier?: string;
    line_number?: number;
    brand?: OrderBrandName;
    article?: OrderBagArticle;
    entity_type?: string;
    current_status?: string;
    bag_configs?: BagConfigs;
    item?: PlatformItem;
};
type ShipmentInfoResponse = {
    delivery_status: any[];
    journey_type?: string;
    payments?: ShipmentPayments;
    operational_status?: string;
    payment_mode?: string;
    delivery_details?: UserDetailsData;
    can_break: string;
    prices?: Prices;
    escalation?: any;
    coupon?: any;
    order_type: string;
    packaging_type?: string;
    enable_tracking?: boolean;
    lock_status: string;
    user_info?: any;
    order?: OrderDetailsData;
    go_green?: boolean;
    is_pdsr?: string;
    affiliate_shipment_id: string;
    secured_delivery_flag?: string;
    kirana_store_id?: string;
    vertical?: string;
    due_date?: string;
    company: any;
    can_return?: boolean;
    refund_text?: string;
    mid?: string;
    dp_details?: DPDetailsData;
    pay_button?: string;
    shipment_images?: string[];
    order_created_time?: string;
    is_not_fynd_source: boolean;
    enable_dp_tracking?: string;
    shipment_id: string;
    custom_meta?: any[];
    fulfilling_store?: FulfillingStore;
    user_agent?: string;
    platform_logo: boolean;
    fyndstore_emp: any;
    credit_note_id: string;
    is_invoiced: boolean;
    refund_details?: any;
    invoice: any;
    bag_status_history?: BagStatusHistory[];
    forward_shipment_status?: any[];
    tracking_url: string;
    gst_details?: GSTDetailsData;
    delivery_slot?: any;
    is_fynd_coupon: boolean;
    total_items?: number;
    order_status: any;
    total_bags?: number;
    tracking_list?: TrackingList[];
    bank_data?: any;
    picked_date?: string;
    is_fynd_store?: string;
    replacement_details?: string;
    beneficiary_details?: boolean;
    ordering_store: any;
    user_id: string;
    billing_details?: UserDetailsData;
    is_packaging_order: boolean;
    shipment_quantity?: number;
    current_shipment_status: any;
    can_cancel?: boolean;
    email_id: string;
    status_progress: number;
    items: any[];
    forward_order_status?: any[];
    status?: ShipmentStatusData;
    shipment_status?: string;
    priority_text?: string;
    child_nodes?: string[];
    bags?: OrderBags[];
    forward_tracking_list?: any[];
};
type PlatformShipment = {
    journey_type?: string;
    payments?: ShipmentPayments;
    operational_status?: string;
    payment_mode?: string;
    delivery_details?: UserDetailsData;
    prices?: Prices;
    packaging_type?: string;
    order?: OrderDetailsData;
    vertical?: string;
    dp_details?: DPDetailsData;
    shipment_images?: string[];
    enable_dp_tracking?: string;
    shipment_id: string;
    custom_meta?: any[];
    fulfilling_store?: FulfillingStore;
    user_agent?: string;
    platform_logo?: string;
    bag_status_history?: BagStatusHistory[];
    gst_details?: GSTDetailsData;
    delivery_slot?: any;
    total_items?: number;
    total_bags?: number;
    tracking_list?: TrackingList[];
    picked_date?: string;
    billing_details?: UserDetailsData;
    shipment_quantity?: number;
    status?: ShipmentStatusData;
    shipment_status?: string;
    priority_text?: string;
    bags?: OrderBags[];
};
type OrderDict = {
    order_date: string;
    shipment_count: number;
    fynd_order_id: string;
};
type ShipmentDetailsResponse = {
    custom_meta?: any[];
    shipments?: PlatformShipment[];
    success: boolean;
    order?: OrderDict;
};
type SubLane = {
    text?: string;
    index?: number;
    value?: string;
    total_items?: number;
    actions?: any[];
};
type SuperLane = {
    options?: SubLane[];
    value: string;
    text: string;
    total_items?: number;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformBreakupValues = {
    value?: string;
    display?: string;
    name?: string;
};
type PlatformOrderItems = {
    order_value?: number;
    payment_mode?: string;
    order_id?: string;
    order_created_time?: string;
    meta?: any;
    shipments?: PlatformShipment[];
    user_info?: UserDataInfo;
    total_order_value?: number;
    channel?: PlatformChannel;
    breakup_values?: PlatformBreakupValues[];
};
type OrderListingResponse = {
    items?: PlatformOrderItems[];
    message?: string;
    total_count?: number;
    lane?: string;
    success?: boolean;
    page?: Page;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    key: string;
    options?: Options[];
    value: number;
    text: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    account_name?: string;
    updated_at?: string;
    shipment_type?: string;
    raw_status?: string;
    status?: string;
    last_location_recieved_at?: string;
    reason?: string;
    meta?: any;
    awb?: string;
    updated_time?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type FiltersResponse = {
    advance?: any[];
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    display_name?: string;
    report_name?: string;
    report_id?: string;
    request_details?: any;
    report_requested_at?: string;
    status?: string;
    s3_key?: string;
    report_created_at?: string;
    report_type?: string;
};
type JioCodeUpsertDataSet = {
    item_id?: string;
    jio_code?: string;
    company_id?: string;
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
    error?: NestedErrorSchemaDataSet[];
    identifier?: string;
    data?: any[];
    trace_id?: string;
    success?: boolean;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    invoice_status?: string;
    invoice?: any;
    store_name?: string;
    label?: any;
    batch_id: string;
    do_invoice_label_generated: boolean;
    data?: any;
    company_id?: string;
    store_code?: string;
    store_id?: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type FileResponse = {
    operation?: string;
    method?: string;
    file_name?: string;
    namespace?: string;
    content_type?: string;
    cdn?: URL;
    file_path?: string;
    size?: number;
    tags?: string[];
    upload?: FileUploadResponse;
};
type bulkListingData = {
    excel_url?: string;
    uploaded_on?: string;
    total?: number;
    processing_shipments?: string[];
    store_code?: string;
    store_id?: number;
    failed?: number;
    successful_shipments?: any[];
    store_name?: string;
    file_name?: string;
    company_id?: number;
    processing?: number;
    user_id?: string;
    user_name?: string;
    status?: string;
    batch_id?: string;
    failed_shipments?: any[];
    id?: string;
    successful?: number;
};
type BulkListingPage = {
    has_previous?: boolean;
    current?: number;
    type?: string;
    has_next?: boolean;
    total?: number;
    size?: number;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    error?: string;
    success?: boolean;
    page?: BulkListingPage;
};
type DateRange = {
    from_date?: string;
    to_date?: string;
};
type ManifestFilter = {
    date_range?: DateRange;
    store_name?: string;
    sales_channel_name?: string;
    stores?: string;
    sales_channels?: string;
    lane?: string;
    dp_name?: string;
    dp_ids?: string;
};
type GeneratedManifestItem = {
    manifest_id?: string;
    status?: string;
    created_by?: string;
    company_id?: number;
    is_active?: boolean;
    filters?: ManifestFilter;
    created_at?: string;
};
type ManifestPage = {
    has_previous?: boolean;
    current?: string;
    type?: string;
    has_next?: boolean;
    total?: number;
    size?: string;
};
type GeneratedManifestResponse = {
    items?: GeneratedManifestItem[];
    page?: ManifestPage;
};
type ManifestDetailTotalShipmentPricesCount = {
    shipment_count?: number;
    total_price?: number;
};
type ManifestDetailMeta = {
    filters?: ManifestFilter;
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
};
type ManifestDetail = {
    manifest_id?: string;
    status?: string;
    created_by?: string;
    meta?: ManifestDetailMeta;
    company_id?: number;
    is_active?: boolean;
    id?: number;
    uid?: number;
    filters?: ManifestFilter;
    created_at?: string;
    user_id?: number;
};
type ManifestDetailItem = {
    order_id?: string;
    shipment_id?: string;
    awb?: string;
    invoice_id?: string;
    item_qty?: number;
};
type ManifestDetailResponse = {
    manifest_details?: ManifestDetail[];
    additional_shipment_count?: number;
    items?: ManifestDetailItem[];
    page?: ManifestPage;
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    display_name?: string;
    qc_type?: string[];
    question_set?: QuestionSet[];
    id?: number;
};
type PlatformShipmentReasonsResponse = {
    success?: boolean;
    reasons?: Reason[];
};
type BulkActionPayload = {
    url: string;
};
type BulkActionResponse = {
    status?: boolean;
    message?: string;
};
type BulkActionDetailsDataField = {
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    total_shipments_count?: number;
    batch_id?: string;
    processing_shipments_count?: number;
    company_id?: string;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    failed_records?: string[];
    error?: string[];
    uploaded_on?: string;
    status?: boolean;
    message?: string;
    data?: BulkActionDetailsDataField[];
    success?: string;
    user_id?: string;
    uploaded_by?: string;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    message?: string;
    error?: string;
    shipment_id?: string;
    status?: number;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse = {
    message: string;
    error_trace?: string;
    status: number;
};
type StoreReassign = {
    affiliate_bag_id?: string;
    reason_ids?: number[];
    set_id?: string;
    fynd_order_id?: string;
    bag_id?: number;
    store_id: number;
    affiliate_order_id?: string;
    item_id?: string;
    affiliate_id?: string;
    mongo_article_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    id?: string;
    reason_text: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    entity_type: string;
    entities: Entities[];
    action: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    affiliate_bag_id?: string;
    is_locked?: boolean;
    bag_id?: number;
    affiliate_order_id?: string;
};
type CheckResponse = {
    shipment_id?: string;
    original_filter?: OriginalFilter;
    status?: string;
    is_bag_locked?: boolean;
    bags?: Bags[];
    lock_status?: boolean;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    is_shipment_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    message?: string;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    to_datetime?: string;
    company_id?: number;
    from_datetime?: string;
    title?: string;
    logo_url?: string;
    created_at?: string;
    platform_name?: string;
    platform_id?: string;
    id: number;
    description?: string;
};
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
};
type BaseResponse = {
    success: boolean;
    message: string;
};
type Click2CallResponse = {
    call_id: string;
    status: boolean;
};
type EntitiesReasons = {
    filters?: any[];
    data?: any;
};
type ProductsReasons = {
    filters?: any[];
    data?: any;
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type Products = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
type EntitiesDataUpdates = {
    filters?: any[];
    data?: any;
};
type ProductsDataUpdates = {
    filters?: any[];
    data?: any;
};
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    products?: ProductsDataUpdates[];
};
type ShipmentsRequest = {
    reasons?: ReasonsData;
    identifier: string;
    products?: Products[];
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
    status?: string;
};
type StatusUpdateInternalRequest = {
    force_transition?: boolean;
    lock_after_transition?: boolean;
    task?: boolean;
    statues?: StatuesRequest[];
    unlock_before_transition?: boolean;
};
type ShipmentidResponse = {
    status?: number;
    exception?: string;
    stack_trace?: string;
    message?: string;
    code?: string;
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
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryConfig = {
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    secret: string;
    name: string;
    created_at: string;
    meta?: AffiliateAppConfigMeta[];
    owner: string;
    token: string;
    id: string;
    updated_at: string;
    description?: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    token: string;
    id: string;
    config?: AffiliateConfig;
};
type OrderConfig = {
    store_lookup?: string;
    article_lookup?: string;
    bag_end_state?: string;
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    affiliate: Affiliate;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    transfer_price: number;
    fynd_store_id: string;
    price_marked: number;
    unit_price: number;
    delivery_charge: number;
    quantity: number;
    amount_paid: number;
    store_id: number;
    identifier: any;
    seller_identifier: string;
    price_effective: number;
    avl_qty: number;
    discount: number;
    affiliate_meta: any;
    hsn_code_id: string;
    item_size: string;
    company_id: number;
    sku: string;
    affiliate_store_id: string;
    _id: string;
    item_id: number;
    pdf_links?: MarketPlacePdf;
    modified_on: string;
};
type OrderUser = {
    phone: number;
    mobile: number;
    country: string;
    state: string;
    address2?: string;
    first_name: string;
    last_name: string;
    city: string;
    email: string;
    address1?: string;
    pincode: string;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type ArticleDetails = {
    attributes: any;
    brand_id: number;
    dimension: any;
    _id: string;
    quantity: number;
    weight: any;
    category: any;
};
type LocationDetails = {
    fulfillment_type: string;
    fulfillment_id: number;
    articles: ArticleDetails[];
};
type ShipmentDetails = {
    articles: ArticleDetails[];
    affiliate_shipment_id: string;
    fulfillment_id: number;
    shipments: number;
    dp_id?: number;
    box_type?: string;
    meta?: any;
};
type ShipmentConfig = {
    to_pincode: string;
    location_details?: LocationDetails;
    action: string;
    identifier: string;
    journey: string;
    shipment: ShipmentDetails[];
    payment_mode: string;
    source: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
};
type OrderInfo = {
    discount: number;
    bags: AffiliateBag[];
    delivery_charges: number;
    affiliate_order_id?: string;
    shipping_address: OrderUser;
    order_value: number;
    cod_charges: number;
    user: UserData;
    items: any;
    billing_address: OrderUser;
    payment?: any;
    coupon?: string;
    shipment?: ShipmentData;
    payment_mode: string;
    order_priority?: OrderPriority;
};
type CreateOrderPayload = {
    affiliate_id: string;
    order_config: OrderConfig;
    order_info: OrderInfo;
};
type CreateOrderResponse = {
    fynd_order_id: string;
};
type ActionInfo = {
    slug: string;
    display_text: string;
    id: number;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    createdat: string;
    ticket_id?: string;
    type: string;
    bag_id?: number;
    l2_detail?: string;
    user: string;
    l3_detail?: string;
    message: string;
    l1_detail?: string;
    ticket_url?: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    order_id: string;
    phone_number: number;
    customer_name: string;
    shipment_id: number;
    amount_paid: number;
    country_code: string;
    message: string;
    brand_name: string;
    payment_mode: string;
};
type SendSmsPayload = {
    slug: string;
    bag_id: number;
    data?: SmsDataPayload;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    shipment_id?: string;
    status?: string;
    id: number;
    remarks?: string;
    bag_list?: number[];
    meta: Meta;
};
type OrderStatusData = {
    errors?: string[];
    order_details: OrderDetails;
    shipment_details?: ShipmentDetail[];
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    dp_id: number;
    qc_required: string;
    order_type: string;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type CreateOrderErrorReponse = {
    info?: any;
    status: number;
    exception?: string;
    request_id?: string;
    stack_trace?: string;
    message: string;
    meta?: string;
    code?: string;
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    mobile: number;
    start_date: string;
    end_date: string;
    order_details?: FyndOrderIdList[];
};
type GetSearchWordsData = {
    _custom_json?: any;
    result?: any;
    is_active?: boolean;
    words?: string[];
    uid?: string;
    app_id?: string;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    result: SearchKeywordResult;
    is_active?: boolean;
    words?: string[];
    app_id?: string;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    words?: string[];
    results?: any[];
    uid?: string;
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type Media = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type AutocompletePageAction = {
    url?: string;
    query?: any;
    type?: string;
    params?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type AutocompleteResult = {
    display?: string;
    logo?: Media;
    action?: AutocompleteAction;
    _custom_json?: any;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    is_active?: boolean;
    words?: string[];
    results?: AutocompleteResult[];
    app_id?: string;
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    words?: string[];
    app_id?: string;
    results?: any[];
};
type ProductBundleItem = {
    max_quantity: number;
    auto_add_to_cart?: boolean;
    product_uid: number;
    allow_remove?: boolean;
    min_quantity: number;
    auto_select?: boolean;
};
type GetProductBundleCreateResponse = {
    slug: string;
    meta?: any;
    is_active: boolean;
    same_store_assignment?: boolean;
    modified_on?: string;
    modified_by?: any;
    created_by?: any;
    choice: string;
    products: ProductBundleItem[];
    page_visibility?: string[];
    id?: string;
    company_id?: number;
    logo?: string;
    created_on?: string;
    name: string;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    slug: string;
    meta?: any;
    is_active: boolean;
    same_store_assignment?: boolean;
    modified_on?: string;
    modified_by?: any;
    created_by?: any;
    choice: string;
    products: ProductBundleItem[];
    page_visibility?: string[];
    company_id?: number;
    logo?: string;
    created_on?: string;
    name: string;
};
type LimitedProductData = {
    slug?: string;
    country_of_origin?: string;
    item_code?: string;
    uid?: number;
    attributes?: any;
    short_description?: string;
    identifier?: any;
    sizes?: string[];
    quantity?: number;
    name?: string;
    images?: string[];
    price?: any;
};
type Size = {
    display?: string;
    quantity?: number;
    is_available?: boolean;
    value?: string;
};
type Price = {
    max_marked?: number;
    max_effective?: number;
    min_effective?: number;
    currency?: string;
    min_marked?: number;
};
type GetProducts = {
    max_quantity?: number;
    product_details?: LimitedProductData;
    auto_add_to_cart?: boolean;
    product_uid?: number;
    allow_remove?: boolean;
    min_quantity?: number;
    sizes?: Size[];
    auto_select?: boolean;
    price?: Price;
};
type GetProductBundleResponse = {
    slug?: string;
    meta?: any;
    is_active?: boolean;
    same_store_assignment?: boolean;
    page_visibility?: string[];
    products?: GetProducts[];
    company_id?: number;
    choice?: string;
    name?: string;
    logo?: string;
};
type ProductBundleUpdateRequest = {
    slug: string;
    meta?: any;
    is_active: boolean;
    same_store_assignment?: boolean;
    modified_on?: string;
    modified_by?: any;
    choice: string;
    products: ProductBundleItem[];
    page_visibility?: string[];
    company_id?: number;
    logo?: string;
    name: string;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    guide?: Guide;
    brand_id?: number;
    description?: string;
    tag?: string;
    modified_on?: string;
    image?: string;
    modified_by?: any;
    title: string;
    active?: boolean;
    subtitle?: string;
    id?: string;
    company_id?: number;
    created_by?: any;
    created_on?: string;
    name: string;
};
type SuccessResponse = {
    success?: boolean;
};
type SizeGuideResponse = {
    guide?: any;
    brand_id?: number;
    tag?: string;
    created_by?: any;
    modified_by?: any;
    title?: string;
    active?: boolean;
    subtitle?: string;
    id?: string;
    company_id?: number;
    modified_on?: string;
    created_on?: string;
    name?: string;
};
type MOQ = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type ApplicationItemResponse = {
    moq?: MOQ;
    alt_text?: any;
    seo?: SEO;
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
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
};
type PageResponseType = {
    next: number;
    total_count: number;
    current: number;
    has_next: boolean;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    slug?: string;
    unit?: string;
    is_active: boolean;
    display_type: string;
    key?: string;
    priority: number;
    name: string;
    logo?: string;
};
type AppConfigurationDetail = {
    slug: string;
    is_active: boolean;
    is_default: boolean;
    name?: string;
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    priority: number;
    logo?: string;
    app_id: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_active: boolean;
    is_default: boolean;
    name?: string;
    key: string;
    priority: number;
    default_key: string;
    logo?: string;
    app_id: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    filter_types?: string[];
    key?: string;
    units?: any[];
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
    detail?: any;
    compare?: any;
    variant?: any;
    similar?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationBucketPoints = {
    display?: string;
    start?: number;
    end?: number;
};
type ConfigurationListingFilterValue = {
    map?: any;
    condition?: string;
    sort?: string;
    map_values?: any[];
    bucket_points?: ConfigurationBucketPoints[];
    value?: string;
};
type ConfigurationListingFilterConfig = {
    is_active: boolean;
    value_config?: ConfigurationListingFilterValue;
    display_name?: string;
    key: string;
    priority: number;
    type: string;
    name?: string;
    logo?: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    key: string;
    priority: number;
    name?: string;
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
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    is_active: boolean;
    size: ProductSize;
    display_type: string;
    key: string;
    priority: number;
    name: string;
    logo?: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    is_active: boolean;
    size?: ProductSize;
    title?: string;
    key: string;
    subtitle?: string;
    priority: number;
    logo?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppCatalogConfiguration = {
    listing?: ConfigurationListing;
    config_type: string;
    config_id?: string;
    modified_on?: string;
    modified_by?: any;
    product?: ConfigurationProduct;
    id?: string;
    created_by?: any;
    created_on?: string;
    type?: string;
    app_id: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    config_type: string;
    config_id?: string;
    modified_on?: string;
    modified_by?: any;
    product?: ConfigurationProduct;
    created_by?: any;
    created_on?: string;
    type?: string;
    app_id: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    id?: string;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    is_selected?: boolean;
    name?: string;
    value?: string;
};
type ProductFiltersKey = {
    display: string;
    kind?: string;
    operators?: string[];
    logo?: string;
    name: string;
};
type ProductFiltersValue = {
    display: string;
    max?: number;
    selected_min?: number;
    min?: number;
    query_format?: string;
    currency_code?: string;
    currency_symbol?: string;
    display_format?: string;
    count?: number;
    selected_max?: number;
    is_selected: boolean;
    value: any;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type GetCollectionQueryOptionResponse = {
    operators: any;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
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
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
};
type GetCollectionDetailNest = {
    slug?: string;
    action?: Action;
    description?: string;
    meta?: any;
    banners?: ImageUrls;
    allow_facets?: boolean;
    tag?: string[];
    cron?: any;
    logo?: Media1;
    type?: string;
    is_active?: boolean;
    uid?: string;
    badge?: any;
    _schedule?: any;
    allow_sort?: boolean;
    app_id?: string;
    query?: CollectionQuery[];
    priority?: number;
    name?: string;
    visible_facets_keys?: string[];
};
type CollectionListingFilterType = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilterTag = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    page?: Page;
    filters?: CollectionListingFilter;
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
    username?: string;
    uid?: string;
    email?: string;
    user_id?: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionSchedule = {
    start?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
    end?: string;
    cron?: string;
};
type CreateCollection = {
    slug: string;
    _custom_json?: any;
    description?: string;
    meta?: any;
    name: string;
    banners: CollectionBanner;
    modified_by?: UserInfo;
    allow_facets?: boolean;
    _locale_language?: any;
    created_by?: UserInfo;
    sort_on?: string;
    seo?: SeoDetail;
    logo: CollectionImage;
    type: string;
    is_active?: boolean;
    badge?: CollectionBadge;
    _schedule?: CollectionSchedule;
    allow_sort?: boolean;
    published?: boolean;
    is_visible?: boolean;
    query?: CollectionQuery[];
    tags?: string[];
    priority?: number;
    app_id: string;
    visible_facets_keys?: string[];
};
type CollectionCreateResponse = {
    slug?: string;
    description?: string;
    meta?: any;
    banners?: ImageUrls;
    allow_facets?: boolean;
    sort_on?: string;
    tag?: string[];
    cron?: any;
    logo?: BannerImage;
    type?: string;
    is_active?: boolean;
    badge?: any;
    _schedule?: any;
    allow_sort?: boolean;
    app_id?: string;
    query?: CollectionQuery[];
    priority?: number;
    name?: string;
    visible_facets_keys?: string[];
};
type CollectionDetailResponse = {
    allow_sort?: boolean;
    slug?: string;
    description?: string;
    tag?: string[];
    is_active?: boolean;
    query?: CollectionQuery[];
    meta?: any;
    name?: string;
    banners?: ImageUrls;
    allow_facets?: boolean;
    cron?: any;
    priority?: number;
    _schedule?: any;
    badge?: any;
    logo?: Media1;
    type?: string;
    app_id?: string;
    visible_facets_keys?: string[];
};
type UpdateCollection = {
    slug?: string;
    _custom_json?: any;
    description?: string;
    meta?: any;
    name?: string;
    banners?: CollectionBanner;
    modified_by?: UserInfo;
    allow_facets?: boolean;
    _locale_language?: any;
    sort_on?: string;
    seo?: SeoDetail;
    logo?: CollectionImage;
    type?: string;
    is_active?: boolean;
    badge?: CollectionBadge;
    _schedule?: CollectionSchedule;
    allow_sort?: boolean;
    published?: boolean;
    is_visible?: boolean;
    query?: CollectionQuery[];
    priority?: number;
    tags?: string[];
    visible_facets_keys?: string[];
};
type ProductDetailAttribute = {
    type?: string;
    key?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductBrand = {
    action?: Action;
    logo?: Media1;
    uid?: number;
    name?: string;
};
type Price1 = {
    currency_symbol?: string;
    max?: number;
    min?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingDetail = {
    slug: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    rating_count?: number;
    similars?: string[];
    brand?: ProductBrand;
    has_variant?: boolean;
    attributes?: any;
    discount?: string;
    promo_meta?: any;
    item_type?: string;
    medias?: Media1[];
    type?: string;
    price?: ProductListingPrice;
    color?: string;
    highlights?: string[];
    image_nature?: string;
    teaser_tag?: any;
    item_code?: string;
    uid?: number;
    sellable?: boolean;
    rating?: number;
    product_online_date?: string;
    short_description?: string;
    name?: string;
    tryouts?: string[];
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page?: Page;
    filters?: ProductFilters[];
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    item?: ItemQueryForUserCollection[];
    query?: CollectionQuery[];
    type?: string;
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type CatalogInsightItem = {
    sellable_count?: number;
    count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightBrand = {
    available_articles?: number;
    article_freshness?: number;
    available_sizes?: number;
    total_sizes?: number;
    total_articles?: number;
    name?: string;
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
    platform?: string;
    enabled?: boolean;
    company_id?: number;
    brand_ids?: number[];
    opt_level: string;
};
type CompanyOptIn = {
    store_ids: number[];
    platform: string;
    created_by?: any;
    modified_by?: any;
    enabled: boolean;
    company_id: number;
    modified_on: number;
    created_on: number;
    brand_ids: number[];
    opt_level: string;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
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
    brand_name?: string;
    brand_id?: number;
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
    store_code?: string;
    timing?: any;
    uid?: number;
    display_name?: string;
    manager?: any;
    additional_contacts?: any[];
    address?: any;
    company_id?: number;
    modified_on?: string;
    created_on?: string;
    store_type?: string;
    name?: string;
    documents?: any[];
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    range?: AttributeSchemaRange;
    allowed_values?: string[];
    multi?: boolean;
    mandatory?: boolean;
    type: string;
    format?: string;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeMasterFilter = {
    priority?: number;
    depends_on?: string[];
    indexing: boolean;
};
type AttributeMasterDetails = {
    display_type: string;
};
type GenderDetail = {
    schema?: AttributeMaster;
    slug?: string;
    departments?: string[];
    description?: string;
    meta?: AttributeMasterMeta;
    enabled_for_end_consumer?: boolean;
    is_nested?: boolean;
    filters?: AttributeMasterFilter;
    id?: string;
    logo?: string;
    name?: string;
    details?: AttributeMasterDetails;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    status?: number;
    code?: string;
    errors?: any;
    meta?: any;
    message?: string;
};
type UserSerializer = {
    _id?: string;
    username?: string;
    user_id?: string;
    uid?: string;
    contact?: string;
};
type GetDepartment = {
    synonyms?: string[];
    slug?: string;
    search?: string;
    page_size?: number;
    item_type?: string;
    is_active?: boolean;
    modified_on?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    uid?: number;
    priority_order?: number;
    created_on?: string;
    logo?: string;
    page_no?: number;
    name?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    status?: number;
    code?: string;
    errors?: any;
    meta?: any;
    message?: string;
};
type DepartmentCreateUpdate = {
    synonyms?: string[];
    platforms?: any;
    slug?: string;
    _custom_json?: any;
    is_active?: boolean;
    tags?: string[];
    uid?: number;
    priority_order: number;
    logo: string;
    name: string;
    _cls?: string;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    contact?: string;
    super_user?: boolean;
    username: string;
    user_id: string;
};
type DepartmentModel = {
    synonyms?: any[];
    slug?: any;
    _id?: any;
    _custom_json?: any;
    is_active?: boolean;
    verified_on?: string;
    created_by?: UserDetail;
    modified_by?: UserDetail;
    verified_by?: UserDetail;
    uid?: number;
    priority_order: number;
    modified_on: string;
    created_on: string;
    name: any;
    _cls?: any;
    logo: string;
};
type ProductTemplate = {
    slug: string;
    is_physical: boolean;
    is_archived?: boolean;
    is_expirable: boolean;
    departments?: string[];
    description?: string;
    tag?: string;
    is_active?: boolean;
    categories?: string[];
    modified_on?: string;
    created_by?: any;
    modified_by?: any;
    attributes?: string[];
    logo?: string;
    created_on?: string;
    name?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    slug?: any;
    category_slug?: any;
    media?: any;
    description?: any;
    sizes?: any;
    no_of_boxes?: any;
    size_guide?: any;
    item_type?: any;
    custom_order?: any;
    multi_size?: any;
    currency?: any;
    hsn_code?: any;
    highlights?: any;
    trader_type?: any;
    item_code?: any;
    teaser_tag?: any;
    product_publish?: any;
    is_active?: any;
    command?: any;
    is_dependent?: any;
    trader?: any;
    return_config?: any;
    variants?: any;
    brand_uid?: any;
    country_of_origin?: any;
    tags?: any;
    product_group_tag?: any;
    short_description?: any;
    name?: any;
};
type GlobalValidation = {
    properties?: Properties;
    description?: string;
    title?: string;
    definitions?: any;
    required?: string[];
    type?: string;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    slug: string;
    is_physical: boolean;
    is_archived?: boolean;
    is_expirable: boolean;
    departments?: string[];
    description?: string;
    tag?: string;
    is_active?: boolean;
    categories?: string[];
    attributes?: string[];
    id?: string;
    logo?: string;
    name?: string;
};
type TemplatesValidationResponse = {
    data?: TemplateValidationData;
    template_details?: TemplateDetails;
};
type InventoryValidationResponse = {
    message?: string;
    data?: any;
};
type HSNData = {
    hsn_code?: string[];
    country_of_origin?: string[];
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type ProductDownloadItemsData = {
    type?: string;
    brand?: string[];
    templates?: string[];
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadsItems = {
    status?: string;
    data?: ProductDownloadItemsData;
    completed_on?: string;
    template_tags?: any;
    trigger_on?: string;
    id?: string;
    created_by?: VerifiedBy;
    url?: string;
    seller_id?: number;
    task_id?: string;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type Media2 = {
    portrait: string;
    logo: string;
    landscape: string;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type Hierarchy = {
    l2: number;
    l1: number;
    department: number;
};
type Category = {
    synonyms?: string[];
    slug?: string;
    media?: Media2;
    departments: number[];
    is_active: boolean;
    modified_on?: string;
    created_by?: any;
    modified_by?: any;
    uid?: number;
    marketplaces?: CategoryMapping;
    priority?: number;
    level: number;
    hierarchy?: Hierarchy[];
    created_on?: string;
    id?: string;
    name: string;
    tryouts?: string[];
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    synonyms?: string[];
    slug?: string;
    media?: Media2;
    departments: number[];
    is_active: boolean;
    marketplaces?: CategoryMapping;
    priority?: number;
    level: number;
    hierarchy?: Hierarchy[];
    name: string;
    tryouts?: string[];
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
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type Brand = {
    logo?: Logo;
    uid?: number;
    name?: string;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Image = {
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type Product = {
    slug?: string;
    category_slug?: string;
    media?: Media1[];
    _custom_json?: any;
    description?: string;
    brand?: Brand;
    template_tag?: string;
    sizes?: any[];
    is_physical?: boolean;
    is_expirable?: boolean;
    tax_identifier?: any;
    item_type?: string;
    size_guide?: string;
    custom_order?: any;
    multi_size?: boolean;
    currency?: string;
    hsn_code?: string;
    color?: string;
    highlights?: string[];
    departments?: number[];
    item_code?: string;
    image_nature?: string;
    product_publish?: ProductPublished;
    is_active?: boolean;
    is_dependent?: boolean;
    primary_color?: string;
    uid?: number;
    all_sizes?: any[];
    category_uid?: number;
    images?: Image[];
    variants?: any;
    is_set?: boolean;
    country_of_origin?: string;
    brand_uid?: number;
    l3_mapping?: string[];
    short_description?: string;
    id?: string;
    name?: string;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type Trader = {
    type?: string;
    name?: string;
    address?: string[];
};
type ReturnConfig = {
    time: number;
    unit: string;
    returnable: boolean;
};
type ProductCreateUpdate = {
    net_quantity?: NetQuantity;
    category_slug: string;
    slug: string;
    media?: Media1[];
    _custom_json?: any;
    action?: string;
    description?: string;
    requester?: string;
    template_tag: string;
    company_id: number;
    no_of_boxes?: number;
    tax_identifier: TaxIdentifier;
    item_type: string;
    size_guide?: string;
    custom_order?: CustomOrder;
    multi_size?: boolean;
    currency: string;
    highlights?: string[];
    departments: number[];
    is_image_less_product?: boolean;
    item_code: any;
    teaser_tag?: TeaserTag;
    product_publish?: ProductPublish;
    change_request_id?: any;
    is_active?: boolean;
    is_dependent?: boolean;
    bulk_job_id?: string;
    uid?: number;
    trader: Trader[];
    return_config: ReturnConfig;
    variants?: any;
    brand_uid: number;
    is_set?: boolean;
    country_of_origin: string;
    tags?: string[];
    product_group_tag?: string[];
    short_description?: string;
    variant_media?: any;
    name: string;
};
type AttributeMasterSerializer = {
    slug: string;
    description?: string;
    name?: string;
    is_nested?: boolean;
    modified_by?: any;
    created_by?: any;
    created_on?: string;
    schema: AttributeMaster;
    raw_key?: string;
    modified_on?: string;
    logo?: string;
    synonyms?: any;
    departments: string[];
    suggestion?: string;
    filters: AttributeMasterFilter;
    variant?: boolean;
    unit?: string;
    enabled_for_end_consumer?: boolean;
    tags?: string[];
    details: AttributeMasterDetails;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    full_name?: string;
    username?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    cancelled_records?: string[];
    total?: number;
    is_active?: boolean;
    template?: ProductTemplate;
    stage?: string;
    created_by?: UserDetail1;
    succeed?: number;
    cancelled?: number;
    failed?: number;
    template_tag?: string;
    failed_records?: string[];
    file_path?: string;
    modified_by?: UserDetail1;
    company_id?: number;
    modified_on?: string;
    created_on?: string;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    username?: string;
    uid?: string;
    email?: string;
    user_id?: string;
};
type BulkJob = {
    cancelled_records?: any[];
    total: number;
    custom_template_tag?: string;
    is_active?: boolean;
    modified_by?: UserInfo1;
    created_by?: UserInfo1;
    succeed?: number;
    cancelled?: number;
    failed?: number;
    failed_records?: any[];
    stage?: string;
    file_path?: string;
    template_tag?: string;
    tracking_url?: string;
    company_id: number;
    modified_on?: string;
    created_on: string;
};
type BulkResponse = {
    batch_id: string;
    is_active?: boolean;
    modified_by?: UserInfo1;
    created_by?: UserInfo1;
    modified_on?: string;
    created_on: string;
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
type UserCommon = {
    company_id?: number;
    username?: string;
    user_id?: string;
};
type Items = {
    cancelled_records?: string[];
    total?: number;
    retry?: number;
    is_active?: boolean;
    modified_on?: string;
    modified_by?: UserCommon;
    succeed?: number;
    stage?: string;
    cancelled?: number;
    failed?: number;
    failed_records?: string[];
    file_path?: string;
    tracking_url?: string;
    id?: string;
    company_id?: number;
    created_by?: UserCommon;
    created_on?: string;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
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
    price_transfer?: number;
    identifiers?: any;
    size?: string;
    item_id?: number;
    uid?: string;
    store?: any;
    sellable_quantity?: number;
    currency?: string;
    seller_identifier?: string;
    quantity?: number;
    inventory_updated_on?: string;
    price?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
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
    name?: string;
    size_distribution: SizeDistribution;
};
type GTIN = {
    gtin_type: string;
    gtin_value: string;
    primary?: boolean;
};
type InvSize = {
    price_effective: number;
    expiration_date?: string;
    store_code: string;
    item_height?: number;
    price_transfer?: number;
    is_set?: boolean;
    item_weight_unit_of_measure?: string;
    currency: string;
    set?: InventorySet;
    identifiers: GTIN[];
    size: string;
    item_length?: number;
    item_weight?: number;
    item_width?: number;
    quantity: number;
    item_dimensions_unit_of_measure?: string;
    price?: number;
};
type ItemQuery = {
    item_code?: string;
    uid?: number;
    brand_uid?: number;
};
type InventoryRequest = {
    company_id: number;
    sizes: InvSize[];
    item: ItemQuery;
};
type WeightResponse = {
    is_default: boolean;
    shipping: number;
    unit: string;
};
type BrandMeta = {
    name: string;
    id: number;
};
type StoreMeta = {
    id: number;
};
type CompanyMeta = {
    id: number;
};
type ManufacturerResponse = {
    is_default: boolean;
    name: string;
    address: string;
};
type PriceMeta = {
    transfer: number;
    marked: number;
    tp_notes?: any;
    effective: number;
    updated_at?: string;
    currency: string;
};
type Trader1 = {
    type: string;
    name: string;
    address: string[];
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    damaged?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
};
type DimensionResponse = {
    unit: string;
    height: number;
    is_default: boolean;
    length: number;
    width: number;
};
type InventorySellerResponse = {
    _custom_json?: any;
    meta?: any;
    weight: WeightResponse;
    set?: InventorySet;
    brand: BrandMeta;
    modified_by?: UserSerializer;
    store: StoreMeta;
    created_by?: UserSerializer;
    company: CompanyMeta;
    manufacturer: ManufacturerResponse;
    tax_identifier?: any;
    size: string;
    item_id: number;
    track_inventory?: boolean;
    identifier: any;
    seller_identifier: string;
    price: PriceMeta;
    expiration_date?: string;
    is_active?: boolean;
    fynd_item_code: string;
    uid: string;
    trader?: Trader1[];
    added_on_store?: string;
    return_config?: ReturnConfig1;
    fynd_article_code: string;
    is_set?: boolean;
    country_of_origin: string;
    fragile: boolean;
    raw_meta?: any;
    fynd_meta?: any;
    stage?: string;
    total_quantity: number;
    quantities?: Quantities;
    dimension: DimensionResponse;
    tags?: string[];
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    cancelled_records?: string[];
    total?: number;
    is_active?: boolean;
    modified_on?: string;
    modified_by?: any;
    stage?: string;
    cancelled?: number;
    succeed?: number;
    failed?: number;
    failed_records?: string[];
    file_path?: string;
    id?: string;
    company_id?: number;
    created_by?: any;
    created_on?: string;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    store_code: string;
    price_effective?: number;
    expiration_date?: string;
    item_weight_unit_of_measure?: string;
    tags?: string[];
    total_quantity?: number;
    price_marked?: number;
    item_dimensions_unit_of_measure?: string;
    currency?: string;
    seller_identifier: string;
    quantity?: number;
    price?: number;
};
type InventoryBulkRequest = {
    company_id: number;
    sizes: InventoryJobPayload[];
    user?: any;
    batch_id: string;
};
type InventoryExportJob = {
    status?: string;
    completed_on?: string;
    request_params?: any;
    trigger_on?: string;
    url?: string;
    seller_id: number;
    task_id: string;
};
type InventoryExportRequest = {
    type?: string;
    brand?: number[];
    store?: number[];
};
type InventoryExportResponse = {
    status?: string;
    request_params?: any;
    trigger_on?: string;
    seller_id: number;
    task_id: string;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    data?: FilerList[];
    multivalues?: boolean;
};
type InventoryPayload = {
    price_effective?: number;
    expiration_date?: string;
    tags?: string[];
    store_id: number;
    total_quantity?: number;
    price_marked?: number;
    seller_identifier: string;
};
type InventoryRequestSchemaV2 = {
    meta?: any;
    payload?: InventoryPayload[];
    company_id: number;
};
type InventoryFailedReason = {
    message: string;
    errors?: string;
};
type InventoryResponseItem = {
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    tax_on_esp?: boolean;
    threshold2?: number;
    threshold1?: number;
    tax1?: number;
    hs2_code?: string;
    tax_on_mrp?: boolean;
    id?: string;
    company_id?: number;
    modified_on?: string;
    tax2?: number;
    hsn_code?: string;
};
type PageResponse = {
    has_next?: boolean;
    has_previous?: boolean;
    size?: number;
    item_total?: number;
    current?: string;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    tax_on_esp?: boolean;
    is_active?: boolean;
    threshold2?: number;
    threshold1: number;
    uid?: number;
    tax1: number;
    hs2_code: string;
    tax_on_mrp: boolean;
    company_id: number;
    tax2?: number;
    hsn_code: string;
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
    threshold: number;
    rate: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    reporting_hsn: string;
    taxes: TaxSlab[];
    description: string;
    modified_on?: string;
    modified_by?: any;
    country_code: string;
    created_by?: any;
    created_on?: string;
    type: string;
    hsn_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    action?: Action;
    slug?: string;
    departments?: string[];
    banners?: ImageUrls;
    uid?: number;
    discount?: string;
    logo?: Media;
    name?: string;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    slug?: string;
    uid?: number;
    priority_order?: number;
    logo?: Media;
    name?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    slug?: string;
    action?: Action;
    _custom_json?: any;
    childs?: any[];
    banners?: ImageUrls;
    uid?: number;
    name?: string;
};
type SecondLevelChild = {
    slug?: string;
    action?: Action;
    _custom_json?: any;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    uid?: number;
    name?: string;
};
type Child = {
    slug?: string;
    action?: Action;
    _custom_json?: any;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    uid?: number;
    name?: string;
};
type CategoryItems = {
    action?: Action;
    slug?: string;
    childs?: Child[];
    banners?: ImageUrls;
    uid?: number;
    name?: string;
};
type DepartmentCategoryTree = {
    items?: CategoryItems[];
    department?: string;
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
    operators?: any;
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page: Page;
    sort_on?: ProductSortOn[];
};
type ProductDetail = {
    slug: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    rating_count?: number;
    similars?: string[];
    brand?: ProductBrand;
    has_variant?: boolean;
    attributes?: any;
    promo_meta?: any;
    item_type?: string;
    medias?: Media1[];
    type?: string;
    color?: string;
    highlights?: string[];
    image_nature?: string;
    teaser_tag?: any;
    item_code?: string;
    uid?: number;
    rating?: number;
    product_online_date?: string;
    short_description?: string;
    name?: string;
    tryouts?: string[];
};
type InventoryPage = {
    has_next?: boolean;
    has_previous?: boolean;
    item_total: number;
    next_id?: string;
    type: string;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type UserSerializer2 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetAddressSerializer = {
    country?: string;
    longitude?: number;
    pincode?: number;
    country_code?: string;
    latitude?: number;
    address1?: string;
    state?: string;
    address_type?: string;
    address2?: string;
    landmark?: string;
    city?: string;
};
type GetCompanySerializer = {
    reject_reason?: string;
    business_type?: string;
    verified_on?: string;
    modified_by?: UserSerializer2;
    created_by?: UserSerializer2;
    stage?: string;
    company_type?: string;
    verified_by?: UserSerializer2;
    uid?: number;
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    created_on?: string;
    name?: string;
};
type Document = {
    verified?: boolean;
    legal_name?: string;
    url?: string;
    type: string;
    value: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
    opening?: LocationTimingSerializer;
};
type InvoiceCredSerializer = {
    password?: string;
    username?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type GetLocationSerializer = {
    _custom_json?: any;
    code: string;
    modified_by?: UserSerializer1;
    verified_by?: UserSerializer1;
    display_name: string;
    integration_type?: LocationIntegrationType;
    created_by?: UserSerializer1;
    created_on?: string;
    company?: GetCompanySerializer;
    documents?: Document[];
    contact_numbers?: SellerPhoneNumber[];
    product_return_config?: ProductReturnConfigSerializer;
    warnings?: any;
    modified_on?: string;
    timing?: LocationDayWiseSerializer[];
    uid?: number;
    store_type?: string;
    phone_number: string;
    verified_on?: string;
    stage?: string;
    notification_emails?: string[];
    address: GetAddressSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    manager?: LocationManagerSerializer;
    name: string;
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
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type GetCompanyProfileSerializerResponse = {
    modified_by?: UserSerializer;
    modified_on?: string;
    documents?: Document[];
    contact_details?: ContactDetails;
    uid: number;
    business_details?: BusinessDetails;
    name?: string;
    company_type: string;
    business_info?: string;
    stage?: string;
    created_by?: UserSerializer;
    franchise_enabled?: boolean;
    taxes?: CompanyTaxesSerializer[];
    verified_by?: UserSerializer;
    created_on?: string;
    mode?: string;
    addresses?: GetAddressSerializer[];
    notification_emails?: string[];
    verified_on?: string;
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    warnings?: any;
};
type CreateUpdateAddressSerializer = {
    state: string;
    pincode: number;
    address_type: string;
    latitude: number;
    country_code?: string;
    landmark?: string;
    address1: string;
    address2?: string;
    longitude: number;
    city: string;
    country: string;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type UpdateCompany = {
    _custom_json?: any;
    addresses?: CreateUpdateAddressSerializer[];
    reject_reason?: string;
    name?: string;
    franchise_enabled?: boolean;
    notification_emails?: string[];
    documents?: Document[];
    contact_details?: ContactDetails;
    taxes?: CompanyTaxesSerializer1[];
    business_type?: string;
    business_details?: BusinessDetails;
    company_type?: string;
    business_info?: string;
    warnings?: any;
};
type ProfileSuccessResponse = {
    uid?: number;
    success?: boolean;
};
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
type MetricsSerializer = {
    stage?: string;
    product?: DocumentsObj;
    store?: DocumentsObj;
    brand?: DocumentsObj;
    store_documents?: DocumentsObj;
    company_documents?: DocumentsObj;
    uid?: number;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    modified_by?: UserSerializer;
    modified_on?: string;
    logo?: string;
    synonyms?: string[];
    uid?: number;
    banner?: BrandBannerSerializer;
    name: string;
    description?: string;
    stage?: string;
    created_by?: UserSerializer;
    _locale_language?: any;
    verified_by?: UserSerializer;
    created_on?: string;
    mode?: string;
    slug_key?: string;
    _custom_json?: any;
    reject_reason?: string;
    verified_on?: string;
    warnings?: any;
};
type CreateUpdateBrandRequestSerializer = {
    _custom_json?: any;
    logo: string;
    synonyms?: string[];
    banner?: BrandBannerSerializer;
    name: string;
    _locale_language?: any;
    description?: string;
    uid?: number;
    brand_tier?: string;
    company_id?: number;
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanyDetails = {
    socials?: CompanySocialAccounts[];
    website_url?: string;
};
type CompanySerializer = {
    modified_by?: UserSerializer;
    modified_on?: string;
    created_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    reject_reason?: string;
    stage?: string;
    _custom_json?: any;
    market_channels?: string[];
    name?: string;
    notification_emails?: string[];
    verified_on?: string;
    business_country_info?: BusinessCountryInfo;
    verified_by?: UserSerializer;
    business_type: string;
    company_type: string;
    uid?: number;
    created_on?: string;
    details?: CompanyDetails;
};
type CompanyBrandSerializer = {
    modified_by?: UserSerializer;
    modified_on?: string;
    created_by?: UserSerializer;
    company?: CompanySerializer;
    stage?: string;
    reject_reason?: string;
    brand?: GetBrandResponseSerializer;
    verified_on?: string;
    verified_by?: UserSerializer;
    warnings?: any;
    uid?: number;
    created_on?: string;
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
    stage?: string;
    _custom_json?: any;
    company: number;
    warnings?: any;
    timing?: LocationDayWiseSerializer[];
    product_return_config?: ProductReturnConfigSerializer;
    name: string;
    address: GetAddressSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    notification_emails?: string[];
    documents?: Document[];
    code: string;
    contact_numbers?: SellerPhoneNumber[];
    uid?: number;
    display_name: string;
    manager?: LocationManagerSerializer;
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
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    networks?: string[];
    types?: string[];
    uses?: PaymentAllowValue;
    codes?: string[];
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
type PriceRange = {
    min?: number;
    max?: number;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type Restrictions = {
    ordering_stores?: number[];
    bulk_bundle?: BulkBundleRestriction;
    payments?: any;
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    platforms?: string[];
    price_range?: PriceRange;
    user_groups?: number[];
    post_order?: PostOrder;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    auto?: DisplayMetaDict;
    title?: string;
    description?: string;
    apply?: DisplayMetaDict;
    subtitle?: string;
    remove?: DisplayMetaDict;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Validation = {
    user_registered_after?: string;
    app_id?: string[];
    anonymous?: boolean;
};
type CouponSchedule = {
    next_schedule?: any[];
    end?: string;
    start?: string;
    duration?: number;
    cron?: string;
};
type Validity = {
    priority?: number;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type RuleDefinition = {
    auto_apply?: boolean;
    value_type: string;
    is_exact?: boolean;
    currency_code?: string;
    type: string;
    scope?: string[];
    calculate_on: string;
    applicable_on: string;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Rule = {
    min?: number;
    key?: number;
    max?: number;
    discount_qty?: number;
    value?: number;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type CouponAdd = {
    restrictions?: Restrictions;
    display_meta: DisplayMeta;
    action?: CouponAction;
    author?: CouponAuthor;
    validation?: Validation;
    _schedule?: CouponSchedule;
    validity: Validity;
    ownership: Ownership;
    tags?: string[];
    code: string;
    rule_definition: RuleDefinition;
    date_meta?: CouponDateMeta;
    type_slug: string;
    rule: Rule[];
    identifiers: Identifier;
    state?: State;
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
    restrictions?: Restrictions;
    display_meta: DisplayMeta;
    action?: CouponAction;
    author?: CouponAuthor;
    validation?: Validation;
    _schedule?: CouponSchedule;
    validity: Validity;
    ownership: Ownership;
    tags?: string[];
    code: string;
    rule_definition: RuleDefinition;
    date_meta?: CouponDateMeta;
    type_slug: string;
    rule: Rule[];
    identifiers: Identifier;
    state?: State;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type DisplayMeta1 = {
    offer_text?: string;
    description?: string;
    name?: string;
};
type DiscountOffer = {
    max_offer_quantity?: number;
    discount_amount?: number;
    apportion_discount?: boolean;
    partial_can_ret?: boolean;
    max_usage_per_transaction?: number;
    code?: string;
    min_offer_quantity?: number;
    discount_price?: number;
    discount_percentage?: number;
    max_discount_amount?: number;
};
type CompareObject = {
    equals?: number;
    less_than_equals?: number;
    greater_than_equals?: number;
    less_than?: number;
    greater_than?: number;
};
type ItemCriteria = {
    item_store?: number[];
    item_exclude_store?: number[];
    all_items?: boolean;
    item_company?: number[];
    item_exclude_category?: number[];
    item_sku?: string[];
    item_exclude_company?: number[];
    item_id?: number[];
    buy_rules?: string[];
    item_category?: number[];
    item_brand?: number[];
    cart_quantity?: CompareObject;
    item_exclude_sku?: string[];
    cart_total?: CompareObject;
    item_size?: string[];
    item_exclude_brand?: number[];
};
type DiscountRule = {
    buy_condition: string;
    offer: DiscountOffer;
    discount_type: string;
    item_criteria: ItemCriteria;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    uses?: PaymentAllowValue1;
    type: string;
    codes?: string[];
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
type Restrictions1 = {
    user_registered?: UserRegistered;
    payments?: PromotionPaymentModes[];
    uses: UsesRestriction1;
    order_quantity?: number;
    platforms?: string[];
    anonymous_users?: boolean;
    user_id?: string[];
    user_groups?: number[];
    post_order?: PostOrder1;
};
type PromotionSchedule = {
    next_schedule?: any[];
    end?: string;
    published: boolean;
    start: string;
    duration?: number;
    cron?: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionListItem = {
    display_meta: DisplayMeta1;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    post_order_action?: PromotionAction;
    code?: string;
    date_meta?: PromotionDateMeta;
    visiblility?: Visibility;
    apply_priority?: number;
    _custom_json?: any;
    currency?: string;
    author?: PromotionAuthor;
    stackable?: boolean;
    ownership: Ownership1;
    mode: string;
    calculate_on?: string;
    promotion_type: string;
    promo_group: string;
    application_id: string;
    buy_rules: any;
    apply_exclusive?: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    display_meta: DisplayMeta1;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    post_order_action?: PromotionAction;
    code?: string;
    date_meta?: PromotionDateMeta;
    visiblility?: Visibility;
    apply_priority?: number;
    _custom_json?: any;
    currency?: string;
    author?: PromotionAuthor;
    stackable?: boolean;
    ownership: Ownership1;
    mode: string;
    calculate_on?: string;
    promotion_type: string;
    promo_group: string;
    application_id: string;
    buy_rules: any;
    apply_exclusive?: string;
};
type PromotionUpdate = {
    display_meta: DisplayMeta1;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    post_order_action?: PromotionAction;
    code?: string;
    date_meta?: PromotionDateMeta;
    visiblility?: Visibility;
    apply_priority?: number;
    _custom_json?: any;
    currency?: string;
    author?: PromotionAuthor;
    stackable?: boolean;
    ownership: Ownership1;
    mode: string;
    calculate_on?: string;
    promotion_type: string;
    promo_group: string;
    application_id: string;
    buy_rules: any;
    apply_exclusive?: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    title?: string;
    created_on?: string;
    is_hidden?: boolean;
    description?: string;
    type?: string;
    modified_on?: string;
    entity_slug?: string;
    entity_type?: string;
    subtitle?: string;
    example?: string;
};
type CartItem = {
    quantity?: number;
    size: string;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type PromoMeta = {
    message?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type BasePrice = {
    currency_symbol?: string;
    marked?: number;
    currency_code?: string;
    effective?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    seller?: BaseInfo;
    extra_meta?: any;
    parent_item_identifiers?: any;
    size?: string;
    quantity?: number;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
    type?: string;
    store?: BaseInfo;
    uid?: string;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    offer?: any;
    raw_offer?: any;
    item_criteria?: any;
};
type FreeGiftItem = {
    item_images_url?: string[];
    item_brand_name?: string;
    item_slug?: string;
    item_id?: number;
    item_name?: string;
    item_price_details?: any;
};
type AppliedFreeArticles = {
    article_id?: string;
    quantity?: number;
    parent_item_identifier?: string;
    free_gift_item_details?: FreeGiftItem;
};
type AppliedPromotion = {
    promo_id?: string;
    mrp_promotion?: boolean;
    offer_text?: string;
    promotion_type?: string;
    discount_rules?: DiscountRulesApp[];
    buy_rules?: BuyRules[];
    article_quantity?: number;
    amount?: number;
    promotion_name?: string;
    applied_free_articles?: AppliedFreeArticles[];
};
type ProductPrice = {
    selling?: number;
    effective?: number;
    currency_symbol?: string;
    currency_code?: string;
    add_on?: number;
    marked?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type ProductAvailability = {
    out_of_stock?: boolean;
    is_valid?: boolean;
    deliverable?: boolean;
    sizes?: string[];
    other_store_quantity?: number;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    url?: string;
    type?: string;
    query?: ActionQuery;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type ProductImage = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type CartProduct = {
    brand?: BaseInfo;
    action?: ProductAction;
    name?: string;
    type?: string;
    slug?: string;
    categories?: CategoryInfo[];
    uid?: number;
    images?: ProductImage[];
};
type CartProductInfo = {
    key?: string;
    discount?: string;
    promo_meta?: PromoMeta;
    message?: string;
    article?: ProductArticle;
    promotions_applied?: AppliedPromotion[];
    parent_item_identifiers?: any;
    quantity?: number;
    coupon_message?: string;
    price?: ProductPriceInfo;
    is_set?: boolean;
    bulk_offer?: any;
    availability?: ProductAvailability;
    identifiers: CartProductIdentifer;
    product?: CartProduct;
    price_per_unit?: ProductPriceInfo;
};
type RawBreakup = {
    vog?: number;
    discount?: number;
    subtotal?: number;
    total?: number;
    convenience_fee?: number;
    delivery_charge?: number;
    coupon?: number;
    you_saved?: number;
    cod_charge?: number;
    gst_charges?: number;
    mrp_total?: number;
    fynd_cash?: number;
};
type DisplayBreakup = {
    key?: string;
    message?: string[];
    currency_symbol?: string;
    currency_code?: string;
    value?: number;
    display?: string;
};
type LoyaltyPoints = {
    applicable?: number;
    total?: number;
    description?: string;
    is_applied?: boolean;
};
type CouponBreakup = {
    sub_title?: string;
    message?: string;
    is_applied?: boolean;
    title?: string;
    max_discount_value?: number;
    coupon_type?: string;
    code?: string;
    description?: string;
    type?: string;
    minimum_cart_value?: number;
    uid?: string;
    coupon_value?: number;
    value?: number;
};
type CartBreakup = {
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
};
type OpenApiErrorResponse = {
    errors?: any;
    message?: string;
    success?: boolean;
};
type ShippingAddress = {
    area_code_slug?: string;
    meta?: any;
    phone?: number;
    address_type?: string;
    area?: string;
    email?: string;
    name?: string;
    address?: string;
    area_code: string;
    pincode?: number;
    city?: string;
    country?: string;
    country_code?: string;
    state?: string;
    landmark?: string;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
};
type PromiseFormatted = {
    min?: string;
    max?: string;
};
type PromiseTimestamp = {
    min?: number;
    max?: number;
};
type ShipmentPromise = {
    formatted?: PromiseFormatted;
    timestamp?: PromiseTimestamp;
};
type OpenApiCartServiceabilityResponse = {
    message?: string;
    items?: CartProductInfo[];
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    order_id?: string;
    payment_gateway?: string;
    current_status?: string;
    payment_id?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    mode: string;
    amount: number;
    name?: string;
};
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type OpenApiOrderItem = {
    discount: number;
    meta?: CartItemMeta;
    employee_discount?: number;
    extra_meta?: any;
    coupon_effective_discount: number;
    amount_paid: number;
    files?: OpenApiFiles[];
    delivery_charges: number;
    quantity?: number;
    price_marked: number;
    cod_charges: number;
    product_id: number;
    price_effective: number;
    payment_methods: MultiTenderPaymentMethod[];
    cashback_applied: number;
    size: string;
    loyalty_discount?: number;
};
type OpenApiPlatformCheckoutReq = {
    coupon_code: string;
    currency_code?: string;
    coupon?: string;
    payment_methods: MultiTenderPaymentMethod[];
    affiliate_order_id?: string;
    cod_charges: number;
    coupon_value: number;
    billing_address: ShippingAddress;
    loyalty_discount?: number;
    cart_items: OpenApiOrderItem[];
    cart_value: number;
    files?: OpenApiFiles[];
    delivery_charges: number;
    order_id?: string;
    cashback_applied: number;
    payment_mode?: string;
    shipping_address?: ShippingAddress;
    employee_discount?: any;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    message?: string;
    order_ref_id?: string;
    success?: boolean;
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
