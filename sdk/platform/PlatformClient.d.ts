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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, BeneficiaryModeDetails, AddBeneficiaryDetailsRequest, RefundAccountResponse, NotFoundResourceError, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, PaymentConfirmationMode, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformItem, Prices, GSTDetailsData, BagUnit, ShipmentStatus, PaymentModeInfo, ShipmentItemFulFillingStore, UserDataInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, OrderDetailsData, Identifier, FinancialBreakup, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagStateMapper, CurrentStatus, OrderBagArticle, OrderBrandName, BagGST, BagConfigs, PlatformDeliveryAddress, OrderBags, UserDetailsData, DPDetailsData, ShipmentPayments, BagStatusHistory, FulfillingStore, ShipmentStatusData, TrackingList, ShipmentInfoResponse, OrderMeta, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, StoreAddress, EInvoicePortalDetails, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, Store, Dimensions, Weight, ReturnConfig, Article, Brand, Dates, B2BPODetails, BagMeta, Attributes, Item, AffiliateMeta, AffiliateBagDetails, ArticleDetails, BagGSTDetails, PDFLinks, EInvoice, EinvoiceInfo, BuyerDetails, LockData, DebugInfo, Formatted, ShipmentTimeStamp, ShipmentMeta, AffiliateDetails, BagReturnableCancelableStatus, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryStoreConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, OrderPriority, MarketPlacePdf, AffiliateBag, UserData, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, BillingInfo, LineItem, ProcessingDates, Shipment, TaxInfo, ShippingInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemMeta, SuccessResponse1, MOQ, ApplicationItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionBadge, UserInfo, CollectionImage, CollectionBanner, SeoDetail, CollectionSchedule, CollectionQuery, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, CategoryMappingValues, CategoryMapping, Media2, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, NetQuantity, TeaserTag, TaxIdentifier, Trader, CustomOrder, ProductPublish, ProductCreateUpdate, ProductPublished, Logo, Image, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, DimensionResponse, CompanyMeta, ReturnConfig1, QuantityBase, Quantities, BrandMeta, PriceMeta, WeightResponse, Trader1, ManufacturerResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, UserSerializer1, LocationTimingSerializer, LocationDayWiseSerializer, UserSerializer2, GetAddressSerializer, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, ProductReturnConfigSerializer, SellerPhoneNumber, LocationIntegrationType, LocationManagerSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, ContactDetails, Website, BusinessDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, BulkBundleRestriction, UsesRemaining, UsesRestriction, PriceRange, PaymentAllowValue, PaymentModes, PostOrder, Restrictions, CouponAction, State, Validation, CouponAuthor, Rule, Ownership, CouponDateMeta, RuleDefinition, CouponSchedule, Validity, DisplayMetaDict, DisplayMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, CompareObject, ItemCriteria, Ownership1, DisplayMeta1, UserRegistered, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, Restrictions1, DiscountOffer, DiscountRule, PromotionSchedule, PromotionAuthor, Visibility, PromotionDateMeta, PromotionAction, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, LoyaltyPoints, DisplayBreakup, RawBreakup, CouponBreakup, CartBreakup, ProductAvailability, ProductPrice, ProductPriceInfo, ActionQuery, ProductAction, CategoryInfo, BaseInfo, ProductImage, CartProduct, BasePrice, ArticlePriceInfo, ProductArticle, CartProductIdentifer, PromoMeta, AppliedPromotion, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, Schedule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    is_predefined?: boolean;
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
    type?: string;
    title?: string;
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
    support_communication?: CommunicationDetails;
    show_support_dris?: boolean;
    integration?: any;
};
type FeedbackForm = {
    inputs?: any;
    title?: string;
    timestamps?: any;
};
type TicketSubCategory = {
    key: string;
    display: string;
    sub_categories?: TicketSubCategory;
};
type TicketCategory = {
    display: string;
    key: string;
    sub_categories?: TicketCategory;
    group_id?: number;
    feedback_form?: FeedbackForm;
};
type CategoryData = {
    list?: TicketCategory;
};
type IntegrationConfig = {
    _id?: string;
    integration_type: string;
    base_url?: string;
    create_ticket_apikey?: string;
    update_ticket_apikey?: string;
    category_sync_apikey?: string;
    category_data?: CategoryData;
    webhook_apikey?: string;
    config_completed?: boolean;
    allow_ticket_creation: boolean;
    show_listing: boolean;
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
    category: string;
    sub_category?: string;
    source: any;
    status: Status;
    priority: Priority;
    created_by?: any;
    assigned_to?: any;
    tags?: string[];
    _custom_json?: any;
    is_feedback_pending?: boolean;
    integration?: any;
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
    android_hash?: string;
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
type BadRequestSchema = {
    status?: string;
    message?: string;
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
    value?: any;
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
    aggregators?: any[];
    app_id: string;
    created: boolean;
    display_fields: string[];
    success: boolean;
    excluded_fields: string[];
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
type PaymentGatewayConfig = {
    merchant_salt: string;
    key: string;
    is_active?: boolean;
    config_type: string;
    secret: string;
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
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
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
type PaymentModeList = {
    nickname?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    merchant_code?: string;
    card_id?: string;
    card_brand?: string;
    card_issuer?: string;
    name?: string;
    display_priority?: number;
    exp_month?: number;
    display_name?: string;
    card_isin?: string;
    card_brand_image?: string;
    aggregator_name: string;
    code?: string;
    card_name?: string;
    logo_url?: PaymentModeLogo;
    card_number?: string;
    card_type?: string;
    timeout?: number;
    fynd_vpa?: string;
    card_token?: string;
    intent_app?: IntentApp[];
    card_reference?: string;
    expired?: boolean;
    exp_year?: number;
    intent_flow?: boolean;
    intent_app_error_list?: string[];
    card_fingerprint?: string;
    retry_count?: number;
};
type RootPaymentMode = {
    display_name: string;
    anonymous_enable?: boolean;
    add_card_enabled?: boolean;
    list?: PaymentModeList[];
    aggregator_name?: string;
    name: string;
    display_priority: number;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    unique_transfer_no: any;
    transfer_type: string;
    is_default: boolean;
    is_active: boolean;
    more_attributes: any;
    payouts_aggregators: any[];
    customers: any;
};
type PayoutBankDetails = {
    bank_name?: string;
    country?: string;
    pincode?: number;
    branch_name?: string;
    ifsc_code: string;
    state?: string;
    account_type: string;
    account_holder?: string;
    city?: string;
    account_no?: string;
};
type PayoutRequest = {
    transfer_type: string;
    unique_external_id: string;
    is_active: boolean;
    bank_details: PayoutBankDetails;
    users: any;
    aggregator: string;
};
type PayoutResponse = {
    payment_status: string;
    unique_transfer_no: string;
    transfer_type: string;
    payouts: any;
    is_active: boolean;
    created: boolean;
    success: boolean;
    bank_details: any;
    users: any;
    aggregator: string;
};
type UpdatePayoutResponse = {
    is_active: boolean;
    is_default: boolean;
    success: boolean;
};
type UpdatePayoutRequest = {
    unique_external_id: string;
    is_active: boolean;
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
    config: any;
    success: boolean;
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
    bank_name: string;
    branch_name: string;
    ifsc_code: string;
    comment?: string;
    vpa?: string;
    account_holder: string;
    email: string;
    wallet?: string;
    mobile: string;
    account_no: string;
    address?: string;
};
type AddBeneficiaryDetailsRequest = {
    shipment_id: string;
    delights: boolean;
    details: BeneficiaryModeDetails;
    transfer_mode: string;
    otp?: string;
    order_id: string;
    request_id?: string;
};
type RefundAccountResponse = {
    is_verified_flag?: boolean;
    success: boolean;
    message: string;
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
    beneficiary_id: string;
    created_on: string;
    ifsc_code: string;
    comment?: string;
    subtitle: string;
    bank_name: string;
    display_name: string;
    branch_name?: string;
    is_active: boolean;
    account_holder: string;
    mobile?: string;
    modified_on: string;
    delights_user_name?: string;
    transfer_mode: string;
    account_no: string;
    address: string;
    title: string;
    id: number;
    email: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type PaymentConfirmationMode = {
    name?: string;
    amount: number;
    mode: string;
    meta?: any;
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
type PlatformItem = {
    size?: string;
    can_return?: boolean;
    name?: string;
    department_id?: number;
    can_cancel?: boolean;
    l3_category_name?: string;
    id?: number;
    images?: string[];
    code?: string;
    l3_category?: number;
    l1_category?: string[];
    image?: string[];
    color?: string;
};
type Prices = {
    delivery_charge?: number;
    tax_collected_at_source?: number;
    refund_amount?: number;
    price_marked?: number;
    cashback_applied?: number;
    discount?: number;
    coupon_value?: number;
    fynd_credits?: number;
    price_effective?: number;
    refund_credit?: number;
    promotion_effective_discount?: number;
    cashback?: number;
    amount_paid_roundoff?: number;
    amount_paid?: number;
    cod_charges?: number;
    value_of_good?: number;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    gst_fee: number;
    gstin_code: string;
    brand_calculated_amount: number;
    value_of_good: number;
};
type BagUnit = {
    item_quantity: number;
    item?: PlatformItem;
    shipment_id: string;
    can_return?: boolean;
    ordering_channel: string;
    total_shipment_bags: number;
    status: any;
    prices?: Prices;
    gst?: GSTDetailsData;
    can_cancel?: boolean;
    bag_id: number;
};
type ShipmentStatus = {
    title: string;
    ops_status: string;
    actual_status: string;
    status: string;
    hex_code: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type UserDataInfo = {
    uid?: number;
    avis_user_id?: string;
    name?: string;
    email?: string;
    last_name?: string;
    is_anonymous_user?: boolean;
    mobile?: string;
    first_name?: string;
    gender?: string;
};
type ShipmentItem = {
    bags?: BagUnit[];
    created_at: string;
    channel?: any;
    shipment_status?: ShipmentStatus;
    payment_methods?: any;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    shipment_created_at: number;
    application?: any;
    total_bags_count: number;
    id: string;
    prices?: Prices;
    sla?: any;
    total_shipments_in_order: number;
    user?: UserDataInfo;
    fulfilling_centre: string;
};
type FilterInfoOption = {
    name?: string;
    value?: string;
    text: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    type: string;
    value: string;
    text: string;
};
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    applied_filters?: any;
    page?: any;
    filters?: FiltersInfo[];
};
type Error = {
    message?: string;
    success?: boolean;
};
type OrderDetailsData = {
    ordering_channel_logo?: any;
    affiliate_id?: string;
    fynd_order_id: string;
    ordering_channel?: string;
    source?: string;
    tax_details?: any;
    order_value?: string;
    cod_charges?: string;
    order_date?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    gst_tax_percentage: number;
    price_marked: number;
    transfer_price: number;
    hsn_code: string;
    fynd_credits: number;
    gst_tag: string;
    coupon_effective_discount: number;
    amount_paid: number;
    cod_charges: number;
    pm_price_split: any;
    tax_collected_at_source?: number;
    gst_fee: string;
    price_effective: number;
    amount_paid_roundoff?: number;
    identifiers: Identifier;
    coupon_value: number;
    item_name: string;
    added_to_fynd_cash: boolean;
    refund_credit: number;
    promotion_effective_discount: number;
    total_units: number;
    brand_calculated_amount: number;
    value_of_good: number;
    delivery_charge: number;
    cashback_applied: number;
    discount: number;
    size: string;
    cashback: number;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type AppliedPromos = {
    buy_rules?: BuyRules[];
    promotion_type?: string;
    discount_rules?: DiscountRules[];
    amount?: number;
    promo_id?: string;
    article_quantity?: number;
    promotion_name?: string;
    mrp_promotion?: boolean;
};
type BagStateMapper = {
    app_facing?: boolean;
    app_state_name?: string;
    name: string;
    notify_customer?: boolean;
    is_active?: boolean;
    bs_id: number;
    journey_type: string;
    state_type: string;
    display_name: string;
    app_display_name?: string;
};
type CurrentStatus = {
    created_at?: string;
    delivery_partner_id?: number;
    kafka_sync?: boolean;
    shipment_id?: string;
    current_status_id: number;
    store_id?: number;
    updated_at?: number;
    status?: string;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    state_type?: string;
    bag_id?: number;
    delivery_awb_number?: number;
};
type OrderBagArticle = {
    identifiers?: any;
    uid?: string;
    return_config?: any;
};
type OrderBrandName = {
    modified_on?: number;
    brand_name: string;
    id: number;
    created_on: number;
    logo: string;
    company: string;
};
type BagGST = {
    gst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
    gst_fee?: number;
    hsn_code?: string;
    gst_tag?: string;
    gstin_code?: string;
    brand_calculated_amount?: number;
    value_of_good?: number;
};
type BagConfigs = {
    can_be_cancelled: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
};
type PlatformDeliveryAddress = {
    address_type?: string;
    phone?: string;
    area?: string;
    address2?: string;
    created_at?: string;
    address_category?: string;
    landmark?: string;
    updated_at?: string;
    email?: string;
    latitude?: number;
    contact_person?: string;
    longitude?: number;
    city?: string;
    state?: string;
    address1?: string;
    pincode?: string;
    version?: string;
    country?: string;
};
type OrderBags = {
    can_return?: boolean;
    identifier?: string;
    financial_breakup?: FinancialBreakup[];
    applied_promos?: AppliedPromos[];
    quantity?: number;
    current_status?: CurrentStatus;
    article?: OrderBagArticle;
    line_number?: number;
    parent_promo_bags?: any;
    brand?: OrderBrandName;
    prices?: Prices;
    entity_type?: string;
    item?: PlatformItem;
    can_cancel?: boolean;
    bag_id: number;
    gst_details?: BagGST;
    bag_configs?: BagConfigs;
    display_name?: string;
    delivery_address?: PlatformDeliveryAddress;
    seller_identifier?: string;
};
type UserDetailsData = {
    phone: string;
    address: string;
    name: string;
    email: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
};
type DPDetailsData = {
    name?: string;
    gst_tag?: string;
    track_url?: string;
    eway_bill_id?: string;
    id?: string;
    pincode?: string;
    country?: string;
    awb_no?: string;
};
type ShipmentPayments = {
    mode: string;
    logo?: string;
    source?: string;
};
type BagStatusHistory = {
    delivery_partner_id?: number;
    created_at: string;
    forward?: boolean;
    kafka_sync?: boolean;
    shipment_id: string;
    app_display_name?: boolean;
    store_id: number;
    updated_at?: string;
    status: string;
    display_name?: boolean;
    state_id: number;
    bag_state_mapper: BagStateMapper;
    state_type?: string;
    bsh_id: number;
    bag_id: number;
    reasons?: any[];
    delivery_awb_number?: string;
};
type FulfillingStore = {
    phone: string;
    meta: any;
    address: string;
    contact_person: string;
    city: string;
    state: string;
    id: string;
    pincode: string;
    code: string;
    fulfillment_channel: string;
    country: string;
    store_name: string;
};
type ShipmentStatusData = {
    created_at?: string;
    shipment_id?: string;
    status?: string;
    id?: number;
    bag_list?: number[];
};
type TrackingList = {
    time?: string;
    is_passed?: boolean;
    status: string;
    is_current?: boolean;
    text: string;
};
type ShipmentInfoResponse = {
    user_id: string;
    user_info?: any;
    order_type: string;
    refund_details?: any;
    can_return?: boolean;
    order?: OrderDetailsData;
    lock_status: string;
    total_bags?: number;
    child_nodes?: string[];
    order_created_time?: string;
    status_progress: number;
    items: any[];
    go_green?: boolean;
    shipment_quantity?: number;
    journey_type?: string;
    platform_logo: boolean;
    priority_text?: string;
    company: any;
    secured_delivery_flag?: string;
    bags?: OrderBags[];
    packaging_type?: string;
    delivery_details?: UserDetailsData;
    is_pdsr?: string;
    shipment_status?: string;
    dp_details?: DPDetailsData;
    is_invoiced: boolean;
    replacement_details?: string;
    billing_details?: UserDetailsData;
    refund_text?: string;
    forward_shipment_status?: any[];
    total_items?: number;
    prices?: Prices;
    payments?: ShipmentPayments;
    is_fynd_coupon: boolean;
    order_status: any;
    picked_date?: string;
    operational_status?: string;
    bank_data?: any;
    due_date?: string;
    coupon?: any;
    enable_tracking?: boolean;
    email_id: string;
    beneficiary_details?: boolean;
    mid?: string;
    forward_tracking_list?: any[];
    custom_meta?: any[];
    pay_button?: string;
    bag_status_history?: BagStatusHistory[];
    payment_mode?: string;
    affiliate_shipment_id: string;
    can_cancel?: boolean;
    can_break: string;
    is_packaging_order: boolean;
    gst_details?: GSTDetailsData;
    delivery_status: any[];
    kirana_store_id?: string;
    forward_order_status?: any[];
    shipment_images?: string[];
    shipment_id: string;
    fulfilling_store?: FulfillingStore;
    vertical?: string;
    invoice: any;
    tracking_url: string;
    fyndstore_emp: any;
    current_shipment_status: any;
    is_fynd_store?: string;
    enable_dp_tracking?: string;
    status?: ShipmentStatusData;
    delivery_slot?: any;
    credit_note_id: string;
    is_not_fynd_source: boolean;
    ordering_store: any;
    tracking_list?: TrackingList[];
    escalation?: any;
    user_agent?: string;
};
type OrderMeta = {
    ordering_store?: number;
    order_type?: string;
    currency_symbol?: string;
    mongo_cart_id?: number;
    cart_id?: number;
    order_child_entities?: string[];
    order_platform?: string;
    customer_note?: string;
    comment?: string;
    payment_type?: string;
    staff?: any;
    extra_meta?: any;
    employee_id?: number;
    files?: any[];
    order_tags?: any[];
};
type OrderDict = {
    meta?: OrderMeta;
    payment_methods?: any;
    fynd_order_id: string;
    shipment_count: number;
    order_date: string;
};
type PlatformShipment = {
    order?: OrderDetailsData;
    total_bags?: number;
    shipment_quantity?: number;
    journey_type?: string;
    platform_logo?: string;
    priority_text?: string;
    bags?: OrderBags[];
    packaging_type?: string;
    delivery_details?: UserDetailsData;
    shipment_status?: string;
    dp_details?: DPDetailsData;
    billing_details?: UserDetailsData;
    total_items?: number;
    prices?: Prices;
    payments?: ShipmentPayments;
    picked_date?: string;
    operational_status?: string;
    coupon?: any;
    custom_meta?: any[];
    bag_status_history?: BagStatusHistory[];
    payment_mode?: string;
    gst_details?: GSTDetailsData;
    shipment_images?: string[];
    shipment_id: string;
    fulfilling_store?: FulfillingStore;
    vertical?: string;
    enable_dp_tracking?: string;
    status?: ShipmentStatusData;
    delivery_slot?: any;
    tracking_list?: TrackingList[];
    user_agent?: string;
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    custom_meta?: any[];
    shipments?: PlatformShipment[];
    success: boolean;
};
type SubLane = {
    actions?: any[];
    text?: string;
    index?: number;
    total_items?: number;
    value?: string;
};
type SuperLane = {
    options?: SubLane[];
    total_items?: number;
    value: string;
    text: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformBreakupValues = {
    name?: string;
    display?: string;
    value?: string;
};
type PlatformOrderItems = {
    user_info?: UserDataInfo;
    meta?: any;
    channel?: PlatformChannel;
    order_id?: string;
    total_order_value?: number;
    order_created_time?: string;
    order_value?: number;
    shipments?: PlatformShipment[];
    payment_mode?: string;
    breakup_values?: PlatformBreakupValues[];
};
type OrderListingResponse = {
    message?: string;
    total_count?: number;
    items?: PlatformOrderItems[];
    lane?: string;
    page?: Page;
    success?: boolean;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    options?: Options[];
    value: number;
    key: string;
    text: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    meta?: any;
    reason?: string;
    last_location_recieved_at?: string;
    updated_at?: string;
    updated_time?: string;
    status?: string;
    shipment_type?: string;
    raw_status?: string;
    account_name?: string;
    awb?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type AdvanceFilterInfo = {
    action_centre?: FiltersInfo[];
    processed?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    filters?: FiltersInfo[];
    returned?: FiltersInfo[];
};
type FiltersResponse = {
    advance_filter?: AdvanceFilterInfo;
    global_filter?: FiltersInfo[];
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    report_type?: string;
    report_id?: string;
    report_created_at?: string;
    report_requested_at?: string;
    s3_key?: string;
    request_details?: any;
    status?: string;
    display_name?: string;
    report_name?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    article_id?: string;
    company_id?: string;
    item_id?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    message?: string;
    type?: string;
    value?: string;
};
type JioCodeUpsertResponse = {
    trace_id?: string;
    data?: any[];
    identifier?: string;
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    data?: any;
    invoice?: any;
    batch_id: string;
    store_id?: string;
    do_invoice_label_generated: boolean;
    store_code?: string;
    invoice_status?: string;
    label?: any;
    company_id?: string;
    store_name?: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type FileResponse = {
    namespace?: string;
    size?: number;
    method?: string;
    operation?: string;
    cdn?: URL;
    upload?: FileUploadResponse;
    content_type?: string;
    tags?: string[];
    file_path?: string;
    file_name?: string;
};
type BulkListingPage = {
    size?: number;
    current?: number;
    total?: number;
    has_previous?: boolean;
    has_next?: boolean;
    type?: string;
};
type bulkListingData = {
    user_id?: string;
    successful_shipments?: any[];
    id?: string;
    failed_shipments?: any[];
    failed?: number;
    excel_url?: string;
    processing?: number;
    user_name?: string;
    batch_id?: string;
    store_code?: string;
    store_name?: string;
    company_id?: number;
    file_name?: string;
    store_id?: number;
    total?: number;
    processing_shipments?: string[];
    successful?: number;
    status?: string;
    uploaded_on?: string;
};
type BulkListingResponse = {
    page?: BulkListingPage;
    error?: string;
    data?: bulkListingData[];
    success?: boolean;
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    qc_type?: string[];
    display_name?: string;
    id?: number;
    question_set?: QuestionSet[];
};
type PlatformShipmentReasonsResponse = {
    reasons?: Reason[];
    success?: boolean;
};
type BulkActionPayload = {
    url: string;
};
type BulkActionResponse = {
    message?: string;
    status?: boolean;
};
type BulkActionDetailsDataField = {
    failed_shipments_count?: number;
    successful_shipment_ids?: string[];
    batch_id?: string;
    successful_shipments_count?: number;
    processing_shipments_count?: number;
    total_shipments_count?: number;
    company_id?: string;
};
type BulkActionDetailsResponse = {
    message?: string;
    user_id?: string;
    data?: BulkActionDetailsDataField[];
    failed_records?: string[];
    status?: boolean;
    uploaded_on?: string;
    error?: string[];
    uploaded_by?: string;
    success?: string;
};
type StoreAddress = {
    created_at: string;
    phone: string;
    address2?: string;
    latitude: number;
    longitude: number;
    city: string;
    address_type: string;
    address_category: string;
    landmark?: string;
    updated_at: string;
    state: string;
    country_code: string;
    pincode: number;
    area?: string;
    email?: string;
    contact_person: string;
    address1: string;
    version?: string;
    country: string;
};
type EInvoicePortalDetails = {
    password?: string;
    username?: string;
    user?: string;
};
type Document = {
    legal_name: string;
    url?: string;
    ds_type: string;
    value: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEinvoice = {
    password?: string;
    enabled: boolean;
    username?: string;
    user?: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
type StoreMeta = {
    ewaybill_portal_details?: any;
    timing?: any[];
    einvoice_portal_details?: EInvoicePortalDetails;
    notification_emails?: string[];
    stage: string;
    additional_contact_details?: any;
    documents?: StoreDocuments;
    display_name: string;
    gst_number?: string;
    product_return_config?: any;
    gst_credentials: StoreGstCredentials;
};
type Store = {
    created_at: string;
    phone: number;
    address2?: string;
    store_address_json?: StoreAddress;
    brand_store_tags?: string[];
    is_archived?: boolean;
    latitude: number;
    vat_no?: string;
    longitude: number;
    city: string;
    is_enabled_for_recon?: boolean;
    parent_store_id?: number;
    is_active?: boolean;
    store_email: string;
    s_id: string;
    updated_at?: string;
    alohomora_user_id?: number;
    brand_id?: any;
    state: string;
    store_active_from?: string;
    mall_area?: string;
    meta: StoreMeta;
    packaging_material_count?: number;
    location_type: string;
    login_username: string;
    pincode: string;
    code?: string;
    fulfillment_channel: string;
    company_id: number;
    name: string;
    contact_person: string;
    address1: string;
    order_integration_id?: string;
    mall_name?: string;
    country: string;
};
type Dimensions = {
    height?: number;
    is_default?: boolean;
    length?: number;
    width?: number;
    unit?: string;
};
type Weight = {
    shipping?: number;
    is_default?: boolean;
    unit?: string;
};
type ReturnConfig = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Article = {
    is_set?: boolean;
    size: string;
    raw_meta?: any;
    uid: string;
    a_set?: any;
    dimensions?: Dimensions;
    identifiers: Identifier;
    esp_modified?: any;
    child_details?: any;
    weight?: Weight;
    _id: string;
    code?: string;
    seller_identifier: string;
    return_config?: ReturnConfig;
};
type Brand = {
    credit_note_expiry_days?: number;
    created_on?: number;
    modified_on?: number;
    logo?: string;
    start_date?: string;
    pickup_location?: string;
    brand_id: number;
    brand_name: string;
    script_last_ran?: string;
    is_virtual_invoice?: boolean;
    invoice_prefix?: string;
    company: string;
    credit_note_allowed?: boolean;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type B2BPODetails = {
    po_line_amount?: number;
    item_base_price?: number;
    po_tax_amount?: number;
    docker_number?: string;
    total_gst_percentage?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Attributes = {
    marketer_name?: string;
    primary_material?: string;
    name?: string;
    essential?: string;
    marketer_address?: string;
    primary_color_hex?: string;
    brand_name?: string;
    gender?: string[];
    primary_color?: string;
};
type Item = {
    slug_key: string;
    can_return?: boolean;
    attributes: Attributes;
    branch_url?: string;
    l2_category?: string[];
    department_id?: number;
    webstore_product_url?: string;
    gender?: string;
    image: string[];
    l1_category_id?: number;
    brand: string;
    l2_category_id?: number;
    brand_id: number;
    meta?: any;
    l3_category_name?: string;
    last_updated_at?: string;
    item_id: number;
    l1_category?: string[];
    code?: string;
    can_cancel?: boolean;
    size: string;
    name: string;
    l3_category?: number;
    color?: string;
};
type AffiliateMeta = {
    channel_order_id?: string;
    due_date?: string;
    coupon_code?: string;
    is_priority?: boolean;
    size_level_total_qty?: number;
    channel_shipment_id?: string;
    order_item_id?: string;
    loyalty_discount?: number;
    employee_discount?: number;
    quantity?: number;
    box_type?: string;
};
type AffiliateBagDetails = {
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_order_id: string;
};
type ArticleDetails = {
    status?: any;
};
type BagGSTDetails = {
    tax_collected_at_source: number;
    gst_tax_percentage: number;
    is_default_hsn_code?: boolean;
    hsn_code_id: string;
    gst_fee: number;
    hsn_code: string;
    sgst_tax_percentage: number;
    cgst_gst_fee: string;
    gst_tag: string;
    igst_gst_fee: string;
    gstin_code?: string;
    igst_tax_percentage: number;
    cgst_tax_percentage: number;
    brand_calculated_amount: number;
    sgst_gst_fee: string;
    value_of_good: number;
};
type PDFLinks = {
    b2b?: string;
    label_a6?: string;
    po_invoice?: string;
    invoice?: string;
    label_type: string;
    label_a4?: string;
    invoice_pos?: string;
    invoice_a6?: string;
    invoice_a4?: string;
    label?: string;
    invoice_type: string;
    credit_note_url?: string;
    label_pos?: string;
};
type EInvoice = {
    signed_invoice?: string;
    signed_qr_code?: string;
    acknowledge_date?: string;
    acknowledge_no?: number;
    irn?: string;
    error_code?: string;
    error_message?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type BuyerDetails = {
    address: string;
    gstin: string;
    name: string;
    city: string;
    state: string;
    pincode: number;
    ajio_site_id?: string;
};
type LockData = {
    locked?: boolean;
    mto?: boolean;
    lock_message?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type ShipmentMeta = {
    order_type?: string;
    shipment_volumetric_weight?: number;
    forward_affiliate_shipment_id?: string;
    einvoice_info?: EinvoiceInfo;
    fulfilment_priority_text?: string;
    return_details?: any;
    b2b_buyer_details?: BuyerDetails;
    return_store_node?: number;
    b2c_buyer_details?: any;
    lock_data?: LockData;
    dp_sort_key?: string;
    marketplace_store_id?: string;
    forward_affiliate_order_id?: string;
    dp_options?: any;
    return_affiliate_shipment_id?: string;
    dp_id?: string;
    packaging_name?: string;
    ewaybill_info?: any;
    auto_trigger_dp_assignment_acf: boolean;
    due_date?: string;
    return_affiliate_order_id?: string;
    assign_dp_from_sb?: boolean;
    external?: any;
    debug_info?: DebugInfo;
    dp_name?: string;
    awb_number?: string;
    shipment_weight?: number;
    weight: number;
    po_number?: string;
    bag_weight?: any;
    return_awb_number?: string;
    same_store_available: boolean;
    formatted?: Formatted;
    box_type?: string;
    store_invoice_updated_date?: string;
    timestamp?: ShipmentTimeStamp;
};
type AffiliateDetails = {
    affiliate_bag_id: string;
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    pdf_links?: PDFLinks;
    shipment_meta: ShipmentMeta;
    affiliate_shipment_id: string;
    affiliate_order_id: string;
    ad_id?: string;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
};
type BagDetailsPlatformResponse = {
    ordering_store?: Store;
    restore_coupon?: boolean;
    bag_status: BagStatusHistory[];
    identifier?: string;
    financial_breakup: FinancialBreakup[];
    applied_promos?: any[];
    current_operational_status: BagStatusHistory;
    journey_type: string;
    quantity?: number;
    no_of_bags_order?: number;
    current_status: BagStatusHistory;
    article: Article;
    line_number?: number;
    qc_required?: any;
    restore_promos?: any;
    b_type?: string;
    parent_promo_bags?: any;
    brand: Brand;
    prices: Prices;
    entity_type?: string;
    dates?: Dates;
    meta?: BagMeta;
    operational_status?: string;
    item: Item;
    original_bag_list?: number[];
    tags?: string[];
    bag_update_time?: number;
    bag_status_history?: BagStatusHistory;
    affiliate_bag_details: AffiliateBagDetails;
    article_details?: ArticleDetails;
    gst_details: BagGSTDetails;
    reasons?: any[];
    affiliate_details?: AffiliateDetails;
    shipment_id?: string;
    status: BagReturnableCancelableStatus;
    order_integration_id?: string;
    b_id: number;
    display_name?: string;
    seller_identifier?: string;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    size: number;
    current: number;
    item_total: number;
    has_next: boolean;
    page_type: string;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    error?: string;
    shipment_id?: string;
    message?: string;
    status?: number;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    message: string;
    status: number;
    error_trace?: string;
};
type StoreReassign = {
    set_id?: string;
    affiliate_id?: string;
    mongo_article_id?: string;
    bag_id?: number;
    item_id?: string;
    fynd_order_id?: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    store_id: number;
    reason_ids?: number[];
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    id?: string;
    affiliate_order_id?: string;
    reason_text: string;
    affiliate_bag_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    entity_type: string;
    action_type: string;
    entities: Entities[];
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    bag_id?: number;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    is_locked?: boolean;
};
type CheckResponse = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    original_filter?: OriginalFilter;
    shipment_id?: string;
    is_bag_locked?: boolean;
    bags?: Bags[];
    status?: string;
    is_shipment_locked?: boolean;
    lock_status?: boolean;
};
type UpdateShipmentLockResponse = {
    message?: string;
    success?: boolean;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    from_datetime?: string;
    platform_name?: string;
    title?: string;
    description?: string;
    id: number;
    logo_url?: string;
    company_id?: number;
    platform_id?: string;
    to_datetime?: string;
    created_at?: string;
};
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
};
type BaseResponse = {
    message: string;
    success: boolean;
};
type Click2CallResponse = {
    call_id: string;
    status: boolean;
};
type Products = {
    quantity?: number;
    identifier?: string;
    line_number?: number;
};
type EntitiesDataUpdates = {
    filters?: any[];
    data?: any;
};
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
};
type ProductsDataUpdates = {
    filters?: ProductsDataUpdatesFilters[];
    data?: any;
};
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    products?: ProductsDataUpdates[];
};
type EntityReasonData = {
    reason_text?: string;
    reason_id?: number;
};
type EntitiesReasons = {
    filters?: any[];
    data?: EntityReasonData;
};
type ProductsReasonsFilters = {
    quantity?: number;
    identifier?: string;
    line_number?: number;
};
type ProductsReasonsData = {
    reason_text?: string;
    reason_id?: number;
};
type ProductsReasons = {
    filters?: ProductsReasonsFilters[];
    data?: ProductsReasonsData;
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type ShipmentsRequest = {
    products?: Products[];
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
    identifier: string;
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
    status?: string;
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    task?: boolean;
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    exception?: string;
    meta?: any;
    code?: string;
    final_state?: any;
    message?: string;
    status?: number;
    stack_trace?: string;
    identifier?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    owner: string;
    meta?: AffiliateAppConfigMeta[];
    description?: string;
    name: string;
    id: string;
    updated_at: string;
    secret: string;
    token: string;
    created_at: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
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
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    inventory?: AffiliateInventoryStoreConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
    order?: AffiliateInventoryOrderConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    config?: AffiliateConfig;
    token: string;
    id: string;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    affiliate: Affiliate;
    create_user?: boolean;
    article_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    store_lookup?: string;
    bag_end_state?: string;
};
type OrderUser = {
    address1?: string;
    state: string;
    address2?: string;
    city: string;
    email: string;
    phone: number;
    mobile: number;
    first_name: string;
    last_name: string;
    pincode: string;
    country: string;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    avl_qty: number;
    _id: string;
    company_id: number;
    store_id: number;
    hsn_code_id: string;
    transfer_price: number;
    item_id: number;
    quantity: number;
    delivery_charge: number;
    price_effective: number;
    sku: string;
    discount: number;
    unit_price: number;
    fynd_store_id: string;
    pdf_links?: MarketPlacePdf;
    amount_paid: number;
    price_marked: number;
    seller_identifier: string;
    identifier: any;
    affiliate_store_id: string;
    item_size: string;
    modified_on: string;
    affiliate_meta: any;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type ArticleDetails1 = {
    brand_id: number;
    weight: any;
    category: any;
    _id: string;
    quantity: number;
    dimension: any;
    attributes: any;
};
type LocationDetails = {
    fulfillment_type: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
};
type ShipmentDetails = {
    box_type?: string;
    affiliate_shipment_id: string;
    meta?: any;
    articles: ArticleDetails1[];
    shipments: number;
    dp_id?: number;
    fulfillment_id: number;
};
type ShipmentConfig = {
    to_pincode: string;
    action: string;
    source: string;
    journey: string;
    payment_mode: string;
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
    identifier: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    coupon?: string;
    shipping_address: OrderUser;
    items: any;
    order_priority?: OrderPriority;
    billing_address: OrderUser;
    order_value: number;
    delivery_charges: number;
    affiliate_order_id?: string;
    bags: AffiliateBag[];
    cod_charges: number;
    payment_mode: string;
    payment?: any;
    user: UserData;
    discount: number;
    shipment?: ShipmentData;
};
type CreateOrderPayload = {
    order_config: OrderConfig;
    affiliate_id: string;
    order_info: OrderInfo;
};
type CreateOrderResponse = {
    fynd_order_id: string;
};
type DispatchManifest = {
    manifest_id: string;
};
type SuccessResponse = {
    message?: string;
    success?: boolean;
};
type ActionInfo = {
    display_text: string;
    slug: string;
    description: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    ticket_url?: string;
    ticket_id?: string;
    l1_detail?: string;
    bag_id?: number;
    type: string;
    message: string;
    l2_detail?: string;
    l3_detail?: string;
    user: string;
    createdat: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    customer_name: string;
    brand_name: string;
    amount_paid: number;
    phone_number: number;
    shipment_id: number;
    message: string;
    payment_mode: string;
    country_code: string;
    order_id: string;
};
type SendSmsPayload = {
    slug: string;
    bag_id: number;
    data?: SmsDataPayload;
};
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    remarks?: string;
    meta: Meta;
    id: number;
    bag_list?: number[];
    shipment_id?: string;
    status?: string;
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
};
type OrderStatusData = {
    errors?: string[];
    shipment_details?: ShipmentDetail[];
    order_details: OrderDetails;
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    order_type: string;
    qc_required: string;
    dp_id: number;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type Tax = {
    amount: any;
    breakup?: any[];
    rate: number;
    name: string;
};
type Charge = {
    amount: any;
    code?: string;
    name: string;
    type: string;
    tax?: Tax;
};
type BillingInfo = {
    address1: string;
    primary_mobile_number: string;
    external_customer_code?: string;
    country_code?: string;
    house_no?: string;
    state_code?: string;
    state: string;
    customer_code?: string;
    middle_name?: string;
    primary_email: string;
    address2?: string;
    title?: string;
    city: string;
    floor_no?: string;
    gender?: string;
    alternate_email?: string;
    first_name: string;
    last_name?: string;
    pincode: string;
    alternate_mobile_number?: string;
    country: string;
};
type LineItem = {
    charges?: Charge[];
    meta?: any;
    quantity?: number;
    seller_identifier: string;
    custom_messasge?: string;
    external_line_id?: string;
};
type ProcessingDates = {
    dispatch_after_date?: string;
    customer_pickup_slot?: any;
    dp_pickup_slot?: any;
    dispatch_by_date?: string;
    pack_by_date?: string;
    confirm_by_date?: string;
};
type Shipment = {
    location_id: number;
    external_shipment_id?: string;
    meta?: any;
    line_items: LineItem[];
    processing_dates?: ProcessingDates;
    priority?: number;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ShippingInfo = {
    address1: string;
    slot?: any[];
    primary_mobile_number: string;
    external_customer_code?: string;
    geo_location?: any;
    country_code?: string;
    house_no?: string;
    state_code?: string;
    state: string;
    customer_code?: string;
    middle_name?: string;
    shipping_type?: string;
    primary_email: string;
    address2?: string;
    title?: string;
    city: string;
    landmark?: string;
    floor_no?: string;
    gender?: string;
    alternate_email?: string;
    first_name: string;
    last_name?: string;
    pincode: string;
    address_type?: string;
    alternate_mobile_number?: string;
    country: string;
};
type PaymentMethod = {
    amount: number;
    transaction_data?: any;
    meta?: any;
    name: string;
    mode: string;
    refund_by: string;
    collect_by: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type CreateOrderAPI = {
    charges: Charge[];
    meta?: any;
    billing_info: BillingInfo;
    currency_info?: any;
    shipments: Shipment[];
    tax_info?: TaxInfo;
    external_order_id?: string;
    shipping_info: ShippingInfo;
    external_creation_date?: string;
    payment_info: PaymentInfo;
};
type CreateOrderErrorReponse = {
    exception?: string;
    meta?: string;
    code?: string;
    info?: any;
    request_id?: string;
    message: string;
    status: number;
    stack_trace?: string;
};
type PaymentMethods = {
    refund_by?: string;
    mode?: string;
    collect_by?: string;
};
type CreateChannelPaymentInfo = {
    mode_of_payment?: string;
    source?: string;
    payment_methods?: PaymentMethods[];
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    payment_info?: CreateChannelPaymentInfo;
    location_reassignment?: boolean;
    logo_url?: any;
    lock_states?: string[];
    shipment_assignment?: string;
    dp_configuration?: DpConfiguration;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    is_inserted?: boolean;
    is_upserted?: boolean;
    acknowledged?: boolean;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type UploadConsent = {
    manifest_id: string;
    consent_url: string;
};
type PlatformOrderUpdate = {
    order_id: string;
};
type ResponseDetail = {
    message?: string[];
    success?: boolean;
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    mobile: number;
    order_details?: FyndOrderIdList[];
    start_date: string;
    end_date: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    is_active?: boolean;
    app_id?: string;
    _custom_json?: any;
    result: SearchKeywordResult;
    words?: string[];
};
type GetSearchWordsData = {
    is_active?: boolean;
    app_id?: string;
    _custom_json?: any;
    uid?: string;
    result?: any;
    words?: string[];
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
    items?: GetSearchWordsData[];
};
type AutocompletePageAction = {
    url?: string;
    type?: string;
    query?: any;
    params?: any;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type Media = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type AutocompleteResult = {
    display?: string;
    action?: AutocompleteAction;
    _custom_json?: any;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    results?: AutocompleteResult[];
    app_id?: string;
    _custom_json?: any;
    words?: string[];
};
type GetAutocompleteWordsData = {
    results?: any[];
    app_id?: string;
    _custom_json?: any;
    uid?: string;
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    words?: string[];
    results?: any[];
    _custom_json?: any;
};
type ProductBundleItem = {
    product_uid: number;
    auto_select?: boolean;
    min_quantity: number;
    max_quantity: number;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
};
type ProductBundleRequest = {
    company_id?: number;
    is_active: boolean;
    created_on?: string;
    page_visibility?: string[];
    meta?: any;
    modified_on?: string;
    products: ProductBundleItem[];
    created_by?: any;
    modified_by?: any;
    logo?: string;
    slug: string;
    same_store_assignment?: boolean;
    name: string;
    choice: string;
};
type GetProductBundleCreateResponse = {
    company_id?: number;
    is_active: boolean;
    created_on?: string;
    page_visibility?: string[];
    meta?: any;
    modified_on?: string;
    id?: string;
    products: ProductBundleItem[];
    created_by?: any;
    modified_by?: any;
    logo?: string;
    slug: string;
    same_store_assignment?: boolean;
    name: string;
    choice: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleUpdateRequest = {
    company_id?: number;
    is_active: boolean;
    page_visibility?: string[];
    meta?: any;
    modified_on?: string;
    products: ProductBundleItem[];
    modified_by?: any;
    logo?: string;
    slug: string;
    same_store_assignment?: boolean;
    name: string;
    choice: string;
};
type Size = {
    quantity?: number;
    display?: string;
    value?: string;
    is_available?: boolean;
};
type LimitedProductData = {
    short_description?: string;
    identifier?: any;
    images?: string[];
    name?: string;
    item_code?: string;
    sizes?: string[];
    country_of_origin?: string;
    uid?: number;
    slug?: string;
    quantity?: number;
    price?: any;
    attributes?: any;
};
type Price = {
    max_effective?: number;
    max_marked?: number;
    min_effective?: number;
    currency?: string;
    min_marked?: number;
};
type GetProducts = {
    product_uid?: number;
    auto_select?: boolean;
    min_quantity?: number;
    max_quantity?: number;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    product_details?: LimitedProductData;
    price?: Price;
    allow_remove?: boolean;
};
type GetProductBundleResponse = {
    company_id?: number;
    is_active?: boolean;
    page_visibility?: string[];
    meta?: any;
    products?: GetProducts[];
    logo?: string;
    slug?: string;
    same_store_assignment?: boolean;
    name?: string;
    choice?: string;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    company_id?: number;
    created_on?: string;
    modified_on?: string;
    id?: string;
    created_by?: any;
    image?: string;
    subtitle?: string;
    title: string;
    active?: boolean;
    name: string;
    guide?: Guide;
    brand_id?: number;
    description?: string;
    modified_by?: any;
    tag?: string;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type SizeGuideResponse = {
    created_on?: string;
    company_id?: number;
    modified_on?: string;
    id?: string;
    created_by?: any;
    modified_by?: any;
    active?: boolean;
    guide?: any;
    title?: string;
    subtitle?: string;
    brand_id?: number;
    name?: string;
    tag?: string;
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
    success?: boolean;
    uid?: number;
};
type MOQ = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type ApplicationItemResponse = {
    moq?: MOQ;
    seo?: SEO;
    alt_text?: any;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
};
type AttributeDetailsGroup = {
    is_active: boolean;
    priority: number;
    key?: string;
    display_type: string;
    logo?: string;
    slug?: string;
    unit?: string;
    name: string;
};
type AppConfigurationDetail = {
    is_active: boolean;
    priority: number;
    app_id: string;
    attributes?: AttributeDetailsGroup[];
    logo?: string;
    slug: string;
    template_slugs?: string[];
    name?: string;
    is_default: boolean;
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
    is_active: boolean;
    priority: number;
    default_key: string;
    key: string;
    app_id: string;
    logo?: string;
    name?: string;
    is_default: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    key?: string;
    display?: string;
    filter_types?: string[];
    units?: any[];
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
type GetCatalogConfigurationDetailsProduct = {
    variant?: any;
    detail?: any;
    compare?: any;
    similar?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductVariantConfig = {
    size: ProductSize;
    is_active: boolean;
    priority: number;
    key: string;
    display_type: string;
    logo?: string;
    name: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    size?: ProductSize;
    is_active: boolean;
    priority: number;
    key: string;
    subtitle?: string;
    title?: string;
    logo?: string;
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
    display?: string;
    start?: number;
};
type ConfigurationListingFilterValue = {
    map_values?: any[];
    condition?: string;
    map?: any;
    bucket_points?: ConfigurationBucketPoints[];
    value?: string;
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    is_active: boolean;
    priority: number;
    value_config?: ConfigurationListingFilterValue;
    type: string;
    display_name?: string;
    key: string;
    logo?: string;
    name?: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    priority: number;
    key: string;
    logo?: string;
    name?: string;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
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
    created_by?: any;
    app_id: string;
    modified_by?: any;
    config_type: string;
    listing?: ConfigurationListing;
    config_id?: string;
};
type AppCatalogConfiguration = {
    created_on?: string;
    type?: string;
    product?: ConfigurationProduct;
    modified_on?: string;
    id?: string;
    created_by?: any;
    app_id: string;
    modified_by?: any;
    config_type: string;
    listing?: ConfigurationListing;
    config_id?: string;
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
    id?: string;
    app_id: string;
    config_type: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_id?: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    is_selected?: boolean;
    value?: string;
    name?: string;
};
type ProductFiltersKey = {
    kind?: string;
    display: string;
    logo?: string;
    name: string;
    operators?: string[];
};
type ProductFiltersValue = {
    max?: number;
    display_format?: string;
    display: string;
    is_selected: boolean;
    selected_min?: number;
    currency_symbol?: string;
    value: any;
    currency_code?: string;
    query_format?: string;
    min?: number;
    count?: number;
    selected_max?: number;
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
type CollectionBadge = {
    text?: string;
    color?: string;
};
type UserInfo = {
    username?: string;
    user_id?: string;
    email?: string;
    uid?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionSchedule = {
    duration?: number;
    end?: string;
    start?: string;
    next_schedule?: NextSchedule[];
    cron?: string;
};
type CollectionQuery = {
    value: any[];
    op: string;
    attribute: string;
};
type CreateCollection = {
    badge?: CollectionBadge;
    type: string;
    created_by?: UserInfo;
    allow_facets?: boolean;
    modified_by?: UserInfo;
    banners: CollectionBanner;
    is_active?: boolean;
    _locale_language?: any;
    seo?: SeoDetail;
    _custom_json?: any;
    description?: string;
    tags?: string[];
    name: string;
    _schedule?: CollectionSchedule;
    app_id: string;
    slug: string;
    allow_sort?: boolean;
    priority?: number;
    query?: CollectionQuery[];
    visible_facets_keys?: string[];
    sort_on?: string;
    meta?: any;
    is_visible?: boolean;
    logo: CollectionImage;
    published?: boolean;
};
type BannerImage = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionCreateResponse = {
    badge?: any;
    type?: string;
    allow_facets?: boolean;
    banners?: ImageUrls;
    is_active?: boolean;
    cron?: any;
    description?: string;
    name?: string;
    _schedule?: any;
    app_id?: string;
    slug?: string;
    allow_sort?: boolean;
    priority?: number;
    query?: CollectionQuery[];
    visible_facets_keys?: string[];
    meta?: any;
    sort_on?: string;
    logo?: BannerImage;
    tag?: string[];
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
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type GetCollectionDetailNest = {
    action?: Action;
    badge?: any;
    type?: string;
    allow_facets?: boolean;
    banners?: ImageUrls;
    is_active?: boolean;
    uid?: string;
    cron?: any;
    description?: string;
    name?: string;
    _schedule?: any;
    app_id?: string;
    slug?: string;
    allow_sort?: boolean;
    priority?: number;
    query?: CollectionQuery[];
    visible_facets_keys?: string[];
    meta?: any;
    logo?: Media1;
    tag?: string[];
};
type GetCollectionListingResponse = {
    page?: Page;
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
};
type CollectionDetailResponse = {
    is_active?: boolean;
    allow_sort?: boolean;
    priority?: number;
    _schedule?: any;
    query?: CollectionQuery[];
    visible_facets_keys?: string[];
    meta?: any;
    badge?: any;
    type?: string;
    allow_facets?: boolean;
    app_id?: string;
    logo?: Media1;
    slug?: string;
    cron?: any;
    tag?: string[];
    description?: string;
    banners?: ImageUrls;
    name?: string;
};
type UpdateCollection = {
    badge?: CollectionBadge;
    type?: string;
    allow_facets?: boolean;
    modified_by?: UserInfo;
    banners?: CollectionBanner;
    is_active?: boolean;
    _locale_language?: any;
    seo?: SeoDetail;
    _custom_json?: any;
    description?: string;
    tags?: string[];
    name?: string;
    _schedule?: CollectionSchedule;
    slug?: string;
    allow_sort?: boolean;
    priority?: number;
    query?: CollectionQuery[];
    visible_facets_keys?: string[];
    sort_on?: string;
    meta?: any;
    is_visible?: boolean;
    logo?: CollectionImage;
    published?: boolean;
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    query?: CollectionQuery[];
    type?: string;
    item?: ItemQueryForUserCollection[];
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type ProductBrand = {
    logo?: Media1;
    name?: string;
    uid?: number;
    action?: Action;
};
type Price1 = {
    min?: number;
    currency_symbol?: string;
    max?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductDetailAttribute = {
    key?: string;
    value?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductListingDetail = {
    type?: string;
    product_online_date?: string;
    attributes?: any;
    teaser_tag?: any;
    similars?: string[];
    highlights?: string[];
    uid?: number;
    description?: string;
    name?: string;
    color?: string;
    sellable?: boolean;
    short_description?: string;
    medias?: Media1[];
    item_code?: string;
    rating?: number;
    brand?: ProductBrand;
    slug: string;
    rating_count?: number;
    price?: ProductListingPrice;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    tryouts?: string[];
    discount?: string;
    has_variant?: boolean;
    item_type?: string;
    promo_meta?: any;
    image_nature?: string;
};
type GetCollectionItemsResponse = {
    page?: Page;
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
};
type CatalogInsightBrand = {
    total_articles?: number;
    article_freshness?: number;
    name?: string;
    available_sizes?: number;
    total_sizes?: number;
    available_articles?: number;
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
    company_id?: number;
    opt_level: string;
    platform?: string;
    brand_ids?: number[];
    enabled?: boolean;
    store_ids?: number[];
};
type CompanyOptIn = {
    company_id: number;
    created_on: number;
    opt_level: string;
    platform: string;
    modified_on: number;
    created_by?: any;
    brand_ids: number[];
    modified_by?: any;
    enabled: boolean;
    store_ids: number[];
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    company_type?: string;
    business_type?: string;
    name?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    total_article?: number;
    brand_id?: number;
    company_id?: number;
    brand_name?: string;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    brand?: number;
    company?: string;
    store?: number;
};
type StoreDetail = {
    created_on?: string;
    timing?: any;
    company_id?: number;
    documents?: any[];
    store_code?: string;
    modified_on?: string;
    store_type?: string;
    display_name?: string;
    additional_contacts?: any[];
    address?: any;
    uid?: number;
    manager?: any;
    name?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    multi?: boolean;
    range?: AttributeSchemaRange;
    type: string;
    mandatory?: boolean;
    format?: string;
    allowed_values?: string[];
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    indexing: boolean;
    priority?: number;
    depends_on?: string[];
};
type GenderDetail = {
    enabled_for_end_consumer?: boolean;
    meta?: AttributeMasterMeta;
    schema?: AttributeMaster;
    id?: string;
    details?: AttributeMasterDetails;
    is_nested?: boolean;
    departments?: string[];
    logo?: string;
    slug?: string;
    filters?: AttributeMasterFilter;
    description?: string;
    name?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    meta?: any;
    code?: string;
    errors?: any;
    status?: number;
    message?: string;
};
type DepartmentCreateUpdate = {
    _cls?: string;
    is_active?: boolean;
    tags?: string[];
    synonyms?: string[];
    slug?: string;
    priority_order: number;
    logo: string;
    uid?: number;
    _custom_json?: any;
    platforms?: any;
    name: string;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    username?: string;
    contact?: string;
    uid?: string;
    user_id?: string;
    _id?: string;
};
type GetDepartment = {
    is_active?: boolean;
    search?: string;
    created_on?: string;
    page_size?: number;
    synonyms?: string[];
    modified_on?: string;
    created_by?: UserSerializer;
    slug?: string;
    modified_by?: UserSerializer;
    priority_order?: number;
    logo?: string;
    uid?: number;
    item_type?: string;
    page_no?: number;
    name?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    meta?: any;
    code?: string;
    errors?: any;
    status?: number;
    message?: string;
};
type UserDetail = {
    contact?: string;
    username: string;
    user_id: string;
    super_user?: boolean;
};
type DepartmentModel = {
    _cls?: any;
    created_on: string;
    is_active?: boolean;
    synonyms?: any[];
    modified_on: string;
    verified_on?: string;
    created_by?: UserDetail;
    modified_by?: UserDetail;
    priority_order: number;
    uid?: number;
    slug?: any;
    logo: string;
    _custom_json?: any;
    name: any;
    _id?: any;
    verified_by?: UserDetail;
};
type ProductTemplate = {
    categories?: string[];
    is_active?: boolean;
    created_on?: string;
    modified_on?: string;
    is_archived?: boolean;
    created_by?: any;
    modified_by?: any;
    departments?: string[];
    logo?: string;
    slug: string;
    is_physical: boolean;
    tag?: string;
    description?: string;
    is_expirable: boolean;
    name?: string;
    attributes?: string[];
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    category_slug?: any;
    sizes?: any;
    country_of_origin?: any;
    trader_type?: any;
    product_group_tag?: any;
    is_active?: any;
    size_guide?: any;
    teaser_tag?: any;
    hsn_code?: any;
    highlights?: any;
    return_config?: any;
    media?: any;
    description?: any;
    name?: any;
    tags?: any;
    no_of_boxes?: any;
    variants?: any;
    short_description?: any;
    item_code?: any;
    multi_size?: any;
    command?: any;
    slug?: any;
    brand_uid?: any;
    trader?: any;
    is_dependent?: any;
    custom_order?: any;
    currency?: any;
    item_type?: any;
    product_publish?: any;
};
type GlobalValidation = {
    definitions?: any;
    properties?: Properties;
    type?: string;
    title?: string;
    description?: string;
    required?: string[];
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    categories?: string[];
    is_active?: boolean;
    id?: string;
    is_archived?: boolean;
    departments?: string[];
    logo?: string;
    slug: string;
    is_physical: boolean;
    tag?: string;
    description?: string;
    is_expirable: boolean;
    name?: string;
    attributes?: string[];
};
type TemplatesValidationResponse = {
    data?: TemplateValidationData;
    template_details?: TemplateDetails;
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
    brand?: string[];
    type?: string;
    templates?: string[];
};
type ProductDownloadsItems = {
    trigger_on?: string;
    url?: string;
    completed_on?: string;
    id?: string;
    seller_id?: number;
    created_by?: VerifiedBy;
    template_tags?: any;
    status?: string;
    task_id?: string;
    data?: ProductDownloadItemsData;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type Media2 = {
    landscape: string;
    portrait: string;
    logo: string;
};
type CategoryRequestBody = {
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    is_active: boolean;
    priority?: number;
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    departments: number[];
    slug?: string;
    level: number;
    media?: Media2;
    name: string;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    is_active: boolean;
    priority?: number;
    created_on?: string;
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    modified_on?: string;
    id?: string;
    created_by?: any;
    modified_by?: any;
    departments: number[];
    uid?: number;
    slug?: string;
    level: number;
    media?: Media2;
    name: string;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type Trader = {
    type?: string;
    name: any;
    address?: string[];
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductCreateUpdate = {
    action?: string;
    category_slug: string;
    country_of_origin: string;
    departments: number[];
    product_group_tag?: string[];
    net_quantity?: NetQuantity;
    is_active?: boolean;
    size_guide?: string;
    teaser_tag?: TeaserTag;
    variant_media?: any;
    requester?: string;
    highlights?: string[];
    return_config: ReturnConfig;
    _custom_json?: any;
    uid?: number;
    is_image_less_product?: boolean;
    description?: string;
    media?: Media1[];
    name: any;
    tags?: string[];
    no_of_boxes?: number;
    variants?: any;
    short_description?: string;
    variants_group?: any;
    item_code: any;
    change_request_id?: any;
    multi_size?: boolean;
    slug: string;
    is_set?: boolean;
    brand_uid: number;
    company_id: number;
    tax_identifier: TaxIdentifier;
    trader: Trader[];
    is_dependent?: boolean;
    bulk_job_id?: string;
    custom_order?: CustomOrder;
    currency: string;
    item_type: string;
    template_tag: string;
    product_publish?: ProductPublish;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Logo = {
    aspect_ratio_f?: number;
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type Image = {
    aspect_ratio_f?: number;
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type Product = {
    category_slug?: string;
    id?: string;
    sizes?: any[];
    country_of_origin?: string;
    departments?: number[];
    product_publish?: ProductPublished;
    is_active?: boolean;
    size_guide?: string;
    hsn_code?: string;
    highlights?: string[];
    _custom_json?: any;
    uid?: number;
    media?: Media1[];
    description?: string;
    is_expirable?: boolean;
    name?: string;
    color?: string;
    variants?: any;
    short_description?: string;
    variant_group?: any;
    item_code?: string;
    l3_mapping?: string[];
    multi_size?: boolean;
    brand?: Brand;
    slug?: string;
    is_set?: boolean;
    brand_uid?: number;
    tax_identifier?: any;
    all_sizes?: any[];
    primary_color?: string;
    images?: Image[];
    is_dependent?: boolean;
    category_uid?: number;
    custom_order?: any;
    currency?: string;
    item_type?: string;
    template_tag?: string;
    image_nature?: string;
    is_physical?: boolean;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type ProductVariants = {
    brand_uid?: number;
    item_code?: string;
    uid?: number;
    media?: Media1[];
    category_uid?: number;
    name?: string;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    created_by?: any;
    modified_by?: any;
    departments: string[];
    raw_key?: string;
    suggestion?: string;
    unit?: string;
    created_on?: string;
    description?: string;
    tags?: string[];
    name?: string;
    details: AttributeMasterDetails;
    slug: string;
    filters: AttributeMasterFilter;
    enabled_for_end_consumer?: boolean;
    schema: AttributeMaster;
    synonyms?: any;
    modified_on?: string;
    is_nested?: boolean;
    logo?: string;
    variant?: boolean;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    username?: string;
    user_id?: string;
    email?: string;
    uid?: string;
};
type BulkJob = {
    failed?: number;
    file_path?: string;
    is_active?: boolean;
    created_on: string;
    company_id: number;
    total: number;
    failed_records?: any[];
    stage?: string;
    cancelled?: number;
    modified_on?: string;
    succeed?: number;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
    cancelled_records?: any[];
    custom_template_tag?: string;
    template_tag?: string;
    tracking_url?: string;
};
type BulkResponse = {
    is_active?: boolean;
    created_on: string;
    modified_on?: string;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
    batch_id: string;
};
type UserDetail1 = {
    username?: string;
    user_id?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    failed?: number;
    file_path?: string;
    company_id?: number;
    stage?: string;
    is_active?: boolean;
    created_on?: string;
    failed_records?: string[];
    total?: number;
    template?: ProductTemplate;
    cancelled?: number;
    modified_on?: string;
    succeed?: number;
    created_by?: UserDetail1;
    modified_by?: UserDetail1;
    cancelled_records?: string[];
    template_tag?: string;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkProductRequest = {
    template_tag: string;
    batch_id: string;
    company_id: number;
    data: any[];
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    user: any;
    url: string;
    company_id?: number;
};
type UserCommon = {
    username?: string;
    user_id?: string;
    company_id?: number;
};
type Items = {
    failed?: number;
    file_path?: string;
    created_on?: string;
    stage?: string;
    is_active?: boolean;
    total?: number;
    failed_records?: string[];
    retry?: number;
    company_id?: number;
    cancelled?: number;
    modified_on?: string;
    succeed?: number;
    id?: string;
    created_by?: UserCommon;
    modified_by?: UserCommon;
    cancelled_records?: string[];
    tracking_url?: string;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    size?: string;
    company_id?: number;
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
type GTIN = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: any;
};
type SetSize = {
    size: string;
    pieces: number;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    quantity?: number;
    name?: string;
    size_distribution: SizeDistribution;
};
type InvSize = {
    price_transfer?: number;
    size: any;
    quantity: number;
    item_weight?: number;
    item_height?: number;
    identifiers: GTIN[];
    set?: InventorySet;
    store_code: string;
    item_length?: number;
    item_weight_unit_of_measure?: string;
    item_width?: number;
    currency: string;
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    price?: number;
    is_set?: boolean;
    price_effective: number;
};
type InventoryRequest = {
    company_id: number;
    item: ItemQuery;
    sizes: InvSize[];
};
type InventoryResponse = {
    price_transfer?: number;
    size?: string;
    seller_identifier?: string;
    sellable_quantity?: number;
    store?: any;
    inventory_updated_on?: string;
    item_id?: number;
    currency?: string;
    uid?: string;
    quantity?: number;
    price?: number;
    identifiers?: any;
    price_effective?: number;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type DimensionResponse = {
    height: number;
    unit: string;
    width: number;
    is_default: boolean;
    length: number;
};
type CompanyMeta = {
    id: number;
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
    sellable?: QuantityBase;
    order_committed?: QuantityBase;
    damaged?: QuantityBase;
    not_available?: QuantityBase;
};
type BrandMeta = {
    id: number;
    name: string;
};
type PriceMeta = {
    effective: number;
    updated_at?: string;
    tp_notes?: any;
    marked: number;
    transfer: number;
    currency: string;
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type Trader1 = {
    type: string;
    name: string;
    address: string[];
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type InventorySellerResponse = {
    seller_identifier: string;
    set?: InventorySet;
    country_of_origin: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    fynd_item_code: string;
    dimension: DimensionResponse;
    is_active?: boolean;
    stage?: string;
    identifier: any;
    company: CompanyMeta;
    trace_id?: string;
    fynd_article_code: string;
    return_config?: ReturnConfig1;
    _custom_json?: any;
    uid: string;
    raw_meta?: any;
    tags?: string[];
    size: string;
    total_quantity: number;
    store: StoreMeta;
    track_inventory?: boolean;
    item_id: number;
    quantities?: Quantities;
    brand: BrandMeta;
    expiration_date?: string;
    price: PriceMeta;
    is_set?: boolean;
    weight: WeightResponse;
    tax_identifier?: any;
    trader?: Trader1[];
    meta?: any;
    manufacturer: ManufacturerResponse;
    fragile: boolean;
    fynd_meta?: any;
    added_on_store?: string;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    failed?: number;
    file_path?: string;
    company_id?: number;
    created_on?: string;
    is_active?: boolean;
    stage?: string;
    failed_records?: string[];
    total?: number;
    cancelled?: number;
    id?: string;
    modified_on?: string;
    succeed?: number;
    created_by?: any;
    modified_by?: any;
    cancelled_records?: string[];
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    quantity?: number;
    total_quantity?: number;
    seller_identifier: string;
    store_code: string;
    trace_id?: string;
    price_marked?: number;
    currency?: string;
    item_weight_unit_of_measure?: string;
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    price?: number;
    price_effective?: number;
    tags?: string[];
};
type InventoryBulkRequest = {
    user?: any;
    batch_id: string;
    company_id: number;
    sizes: InventoryJobPayload[];
};
type InventoryExportRequest = {
    brand?: number[];
    type?: string;
    store?: number[];
};
type InventoryExportResponse = {
    trigger_on?: string;
    request_params?: any;
    seller_id: number;
    status?: string;
    task_id: string;
};
type InventoryExportJob = {
    url?: string;
    request_params?: any;
    trigger_on?: string;
    completed_on?: string;
    seller_id: number;
    status?: string;
    task_id: string;
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
    seller_identifier: string;
    trace_id?: string;
    price_marked?: number;
    store_id: number;
    expiration_date?: string;
    price_effective?: number;
    tags?: string[];
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
    tax2?: number;
    company_id: number;
    is_active?: boolean;
    hsn_code: string;
    threshold1: number;
    tax_on_mrp: boolean;
    threshold2?: number;
    hs2_code: string;
    tax1: number;
    uid?: number;
    tax_on_esp?: boolean;
};
type HsnCodesObject = {
    tax2?: number;
    company_id?: number;
    hsn_code?: string;
    threshold1?: number;
    tax_on_mrp?: boolean;
    threshold2?: number;
    id?: string;
    modified_on?: string;
    hs2_code?: string;
    tax1?: number;
    tax_on_esp?: boolean;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    size?: number;
    has_next?: boolean;
    has_previous?: boolean;
    current?: string;
    item_total?: number;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    threshold: number;
    rate: number;
    effective_date: string;
    cess?: number;
};
type HSNDataInsertV2 = {
    created_on?: string;
    hsn_code: string;
    country_code: string;
    type: string;
    modified_on?: string;
    created_by?: any;
    reporting_hsn: string;
    taxes: TaxSlab[];
    modified_by?: any;
    description: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    discount?: string;
    action?: Action;
    slug?: string;
    departments?: string[];
    logo?: Media;
    uid?: number;
    banners?: ImageUrls;
    name?: string;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    slug?: string;
    priority_order?: number;
    logo?: Media;
    uid?: number;
    name?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    action?: Action;
    _custom_json?: any;
    uid?: number;
    slug?: string;
    banners?: ImageUrls;
    name?: string;
    childs?: any[];
};
type SecondLevelChild = {
    action?: Action;
    _custom_json?: any;
    uid?: number;
    slug?: string;
    banners?: ImageUrls;
    name?: string;
    childs?: ThirdLevelChild[];
};
type Child = {
    action?: Action;
    _custom_json?: any;
    uid?: number;
    slug?: string;
    banners?: ImageUrls;
    name?: string;
    childs?: SecondLevelChild[];
};
type CategoryItems = {
    action?: Action;
    uid?: number;
    slug?: string;
    banners?: ImageUrls;
    name?: string;
    childs?: Child[];
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
    sort_on?: ProductSortOn[];
    page: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    operators?: any;
};
type ProductDetail = {
    type?: string;
    product_online_date?: string;
    attributes?: any;
    teaser_tag?: any;
    similars?: string[];
    highlights?: string[];
    uid?: number;
    description?: string;
    name?: string;
    color?: string;
    short_description?: string;
    medias?: Media1[];
    item_code?: string;
    rating?: number;
    brand?: ProductBrand;
    slug: string;
    rating_count?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    tryouts?: string[];
    has_variant?: boolean;
    item_type?: string;
    promo_meta?: any;
    image_nature?: string;
};
type InventoryPage = {
    next_id?: string;
    type: string;
    has_next?: boolean;
    has_previous?: boolean;
    item_total: number;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type ArticleQuery = {
    item_id: number;
    size: string;
    ignored_stores?: number[];
};
type AssignStoreArticle = {
    article_assignment?: ArticleAssignment;
    group_id?: string;
    query?: ArticleQuery;
    meta?: any;
    quantity?: number;
};
type AssignStore = {
    channel_type?: string;
    company_id?: number;
    channel_identifier?: string;
    articles: AssignStoreArticle[];
    pincode: string;
    app_id: string;
    store_ids?: number[];
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    article_assignment: ArticleAssignment1;
    size: string;
    index?: number;
    company_id?: number;
    quantity: number;
    group_id?: string;
    item_id: number;
    meta?: any;
    price_marked?: number;
    store_pincode?: number;
    status: boolean;
    uid?: string;
    s_city?: string;
    store_id?: number;
    strategy_wise_listing?: any[];
    price_effective?: number;
    _id?: string;
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
    closing?: LocationTimingSerializer;
};
type UserSerializer2 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetAddressSerializer = {
    longitude?: number;
    address2?: string;
    city?: string;
    latitude?: number;
    country_code?: string;
    country?: string;
    address1?: string;
    state?: string;
    pincode?: number;
    landmark?: string;
    address_type?: string;
};
type GetCompanySerializer = {
    company_type?: string;
    created_on?: string;
    stage?: string;
    business_type?: string;
    modified_on?: string;
    verified_on?: string;
    created_by?: UserSerializer2;
    modified_by?: UserSerializer2;
    uid?: number;
    addresses?: GetAddressSerializer[];
    reject_reason?: string;
    name?: string;
    verified_by?: UserSerializer2;
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
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobile_no: SellerPhoneNumber;
};
type GetLocationSerializer = {
    warnings?: any;
    documents?: Document[];
    created_by?: UserSerializer1;
    display_name: string;
    modified_by?: UserSerializer1;
    verified_by?: UserSerializer1;
    created_on?: string;
    timing?: LocationDayWiseSerializer[];
    stage?: string;
    code: string;
    company?: GetCompanySerializer;
    store_type?: string;
    address: GetAddressSerializer;
    _custom_json?: any;
    uid?: number;
    phone_number: string;
    notification_emails?: string[];
    name: string;
    gst_credentials?: InvoiceDetailsSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    verified_on?: string;
    contact_numbers?: SellerPhoneNumber[];
    integration_type?: LocationIntegrationType;
    modified_on?: string;
    manager?: LocationManagerSerializer;
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
type ApplicationDepartment = {
    is_active?: boolean;
    app_id: string;
    _custom_json?: any;
    uid: number;
    logo?: string;
    name?: string;
};
type ApplicationDepartmentListingResponse = {
    page: Page;
    items?: ApplicationDepartment[];
};
type ApplicationDepartmentJson = {
    _custom_json: any;
};
type ApplicationStoreJson = {
    _custom_json: any;
};
type CompanyTaxesSerializer = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
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
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type GetCompanyProfileSerializerResponse = {
    warnings?: any;
    documents?: Document[];
    addresses?: GetAddressSerializer[];
    taxes?: CompanyTaxesSerializer[];
    notification_emails?: string[];
    contact_details?: ContactDetails;
    name?: string;
    business_info?: string;
    modified_on?: string;
    verified_by?: UserSerializer;
    company_type: string;
    franchise_enabled?: boolean;
    mode?: string;
    business_type: string;
    uid: number;
    business_details?: BusinessDetails;
    created_by?: UserSerializer;
    verified_on?: string;
    _custom_json?: any;
    modified_by?: UserSerializer;
    stage?: string;
    created_on?: string;
    business_country_info?: BusinessCountryInfo;
};
type CreateUpdateAddressSerializer = {
    address1: string;
    longitude: number;
    state: string;
    landmark?: string;
    address2?: string;
    country_code?: string;
    pincode: number;
    latitude: number;
    city: string;
    country: string;
    address_type: string;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type UpdateCompany = {
    warnings?: any;
    documents?: Document[];
    addresses?: CreateUpdateAddressSerializer[];
    taxes?: CompanyTaxesSerializer1[];
    business_details?: BusinessDetails;
    reject_reason?: string;
    notification_emails?: string[];
    contact_details?: ContactDetails;
    name?: string;
    company_type?: string;
    franchise_enabled?: boolean;
    business_info?: string;
    business_type?: string;
    _custom_json?: any;
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
    uid?: number;
    stage?: string;
    brand?: DocumentsObj;
    product?: DocumentsObj;
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    warnings?: any;
    name: string;
    synonyms?: string[];
    modified_on?: string;
    verified_by?: UserSerializer;
    banner?: BrandBannerSerializer;
    _locale_language?: any;
    slug_key?: string;
    mode?: string;
    uid?: number;
    reject_reason?: string;
    created_by?: UserSerializer;
    description?: string;
    verified_on?: string;
    _custom_json?: any;
    modified_by?: UserSerializer;
    stage?: string;
    created_on?: string;
    logo?: string;
};
type CreateUpdateBrandRequestSerializer = {
    _custom_json?: any;
    uid?: number;
    logo: string;
    description?: string;
    name: string;
    banner?: BrandBannerSerializer;
    _locale_language?: any;
    company_id?: number;
    synonyms?: string[];
    brand_tier?: string;
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
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    verified_by?: UserSerializer;
    uid?: number;
    _custom_json?: any;
    notification_emails?: string[];
    reject_reason?: string;
    created_by?: UserSerializer;
    created_on?: string;
    name?: string;
    market_channels?: string[];
    stage?: string;
    verified_on?: string;
    company_type: string;
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    details?: CompanyDetails;
};
type CompanyBrandSerializer = {
    modified_by?: UserSerializer;
    warnings?: any;
    modified_on?: string;
    verified_by?: UserSerializer;
    uid?: number;
    reject_reason?: string;
    stage?: string;
    created_by?: UserSerializer;
    created_on?: string;
    company?: CompanySerializer;
    brand?: GetBrandResponseSerializer;
    verified_on?: string;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    company: number;
    uid?: number;
};
type LocationSerializer = {
    warnings?: any;
    manager?: LocationManagerSerializer;
    documents?: Document[];
    timing?: LocationDayWiseSerializer[];
    code: string;
    store_type?: string;
    uid?: number;
    _custom_json?: any;
    product_return_config?: ProductReturnConfigSerializer;
    notification_emails?: string[];
    stage?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    company: number;
    name: string;
    contact_numbers?: SellerPhoneNumber[];
    display_name: string;
    address: GetAddressSerializer;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type _ArticleQuery = {
    size?: string;
    item_id?: number;
    ignored_stores?: number[];
};
type _AssignStoreArticle = {
    quantity?: number;
    meta?: any;
    group_id?: string;
    article_assignment?: _ArticleAssignment;
    query?: _ArticleQuery;
};
type AssignStoreRequestValidator = {
    articles?: _AssignStoreArticle[];
    channel_type?: string;
    channel_identifier?: string;
    app_id?: string;
    pincode?: string;
    store_ids?: number[];
    company_id?: number;
};
type AssignStoreResponseSerializer = {
    status?: boolean;
    _id?: string;
    price_marked?: number;
    quantity?: number;
    uid?: string;
    preice_effective?: number;
    s_city?: string;
    meta?: any;
    store_pincode?: string;
    item_id?: number;
    index?: number;
    size?: string;
    company_id?: number;
    store_id?: number;
    article_assignment?: _ArticleAssignment;
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
    integration_data?: any;
    company_name?: string;
    integration: string;
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
    company_name: string;
    integration: string;
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
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type UsesRemaining = {
    total?: number;
    user?: number;
    app?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue;
    networks?: string[];
    types?: string[];
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions = {
    bulk_bundle?: BulkBundleRestriction;
    ordering_stores?: number[];
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    platforms?: string[];
    user_groups?: number[];
    price_range?: PriceRange;
    payments?: any;
    post_order?: PostOrder;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type State = {
    is_public?: boolean;
    is_display?: boolean;
    is_archived?: boolean;
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Rule = {
    discount_qty?: number;
    value?: number;
    min?: number;
    key?: number;
    max?: number;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type RuleDefinition = {
    currency_code?: string;
    auto_apply?: boolean;
    scope?: string[];
    is_exact?: boolean;
    applicable_on: string;
    type: string;
    value_type: string;
    calculate_on: string;
};
type CouponSchedule = {
    duration?: number;
    next_schedule?: any[];
    cron?: string;
    start?: string;
    end?: string;
};
type Validity = {
    priority?: number;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    description?: string;
    title?: string;
    auto?: DisplayMetaDict;
    subtitle?: string;
};
type CouponAdd = {
    restrictions?: Restrictions;
    action?: CouponAction;
    state?: State;
    validation?: Validation;
    author?: CouponAuthor;
    tags?: string[];
    type_slug: string;
    rule: Rule[];
    ownership: Ownership;
    date_meta?: CouponDateMeta;
    rule_definition: RuleDefinition;
    code: string;
    _schedule?: CouponSchedule;
    identifiers: Identifier;
    validity: Validity;
    display_meta: DisplayMeta;
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
    restrictions?: Restrictions;
    action?: CouponAction;
    state?: State;
    validation?: Validation;
    author?: CouponAuthor;
    tags?: string[];
    type_slug: string;
    rule: Rule[];
    ownership: Ownership;
    date_meta?: CouponDateMeta;
    rule_definition: RuleDefinition;
    code: string;
    _schedule?: CouponSchedule;
    identifiers: Identifier;
    validity: Validity;
    display_meta: DisplayMeta;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type CompareObject = {
    less_than_equals?: number;
    equals?: number;
    greater_than?: number;
    greater_than_equals?: number;
    less_than?: number;
};
type ItemCriteria = {
    item_id?: number[];
    item_size?: string[];
    all_items?: boolean;
    item_category?: number[];
    item_exclude_sku?: string[];
    buy_rules?: string[];
    item_sku?: string[];
    cart_quantity?: CompareObject;
    item_exclude_category?: number[];
    item_exclude_brand?: number[];
    item_company?: number[];
    cart_total?: CompareObject;
    item_exclude_company?: number[];
    item_store?: number[];
    item_exclude_store?: number[];
    item_brand?: number[];
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type DisplayMeta1 = {
    description?: string;
    offer_text?: string;
    name?: string;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
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
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions1 = {
    order_quantity?: number;
    user_registered?: UserRegistered;
    uses: UsesRestriction1;
    anonymous_users?: boolean;
    platforms?: string[];
    user_groups?: number[];
    user_id?: string[];
    payments?: PromotionPaymentModes[];
    post_order?: PostOrder1;
};
type DiscountOffer = {
    min_offer_quantity?: number;
    discount_percentage?: number;
    code?: string;
    max_discount_amount?: number;
    discount_amount?: number;
    max_offer_quantity?: number;
    discount_price?: number;
};
type DiscountRule = {
    offer: DiscountOffer;
    discount_type: string;
    item_criteria: ItemCriteria;
    buy_condition: string;
};
type PromotionSchedule = {
    duration?: number;
    next_schedule?: any[];
    published: boolean;
    cron?: string;
    start: string;
    end?: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionListItem = {
    buy_rules: any;
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    apply_priority?: number;
    promo_group: string;
    display_meta: DisplayMeta1;
    mode: string;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    stackable?: boolean;
    currency?: string;
    code?: string;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    date_meta?: PromotionDateMeta;
    post_order_action?: PromotionAction;
    _custom_json?: any;
    promotion_type: string;
    application_id: string;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    buy_rules: any;
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    apply_priority?: number;
    promo_group: string;
    display_meta: DisplayMeta1;
    mode: string;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    stackable?: boolean;
    currency?: string;
    code?: string;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    date_meta?: PromotionDateMeta;
    post_order_action?: PromotionAction;
    _custom_json?: any;
    promotion_type: string;
    application_id: string;
};
type PromotionUpdate = {
    buy_rules: any;
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    apply_priority?: number;
    promo_group: string;
    display_meta: DisplayMeta1;
    mode: string;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    stackable?: boolean;
    currency?: string;
    code?: string;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    date_meta?: PromotionDateMeta;
    post_order_action?: PromotionAction;
    _custom_json?: any;
    promotion_type: string;
    application_id: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type LoyaltyPoints = {
    total?: number;
    description?: string;
    is_applied?: boolean;
    applicable?: number;
};
type DisplayBreakup = {
    currency_code?: string;
    message?: string[];
    value?: number;
    display?: string;
    currency_symbol?: string;
    key?: string;
};
type RawBreakup = {
    mrp_total?: number;
    coupon?: number;
    delivery_charge?: number;
    convenience_fee?: number;
    total?: number;
    vog?: number;
    subtotal?: number;
    you_saved?: number;
    fynd_cash?: number;
    cod_charge?: number;
    gst_charges?: number;
    discount?: number;
};
type CouponBreakup = {
    uid?: string;
    message?: string;
    value?: number;
    is_applied?: boolean;
    type?: string;
    code?: string;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
    raw?: RawBreakup;
    coupon?: CouponBreakup;
};
type ProductAvailability = {
    sizes?: string[];
    out_of_stock?: boolean;
    other_store_quantity?: number;
    deliverable?: boolean;
    is_valid?: boolean;
};
type ProductPrice = {
    currency_code?: string;
    currency_symbol?: string;
    selling?: number;
    add_on?: number;
    effective?: number;
    marked?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
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
    uid?: number;
    name?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type CartProduct = {
    uid?: number;
    action?: ProductAction;
    categories?: CategoryInfo[];
    brand?: BaseInfo;
    type?: string;
    slug?: string;
    images?: ProductImage[];
    name?: string;
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
    uid?: string;
    price?: ArticlePriceInfo;
    seller?: BaseInfo;
    store?: BaseInfo;
    quantity?: number;
    extra_meta?: any;
    parent_item_identifiers?: any;
    size?: string;
    type?: string;
    product_group_tags?: string[];
};
type CartProductIdentifer = {
    identifier?: string;
};
type PromoMeta = {
    message?: string;
};
type AppliedPromotion = {
    mrp_promotion?: boolean;
    amount?: number;
    promo_id?: string;
    promotion_type?: string;
    offer_text?: string;
    article_quantity?: number;
};
type CartProductInfo = {
    availability?: ProductAvailability;
    price?: ProductPriceInfo;
    message?: string;
    is_set?: boolean;
    coupon_message?: string;
    product?: CartProduct;
    article?: ProductArticle;
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
    bulk_offer?: any;
    price_per_unit?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    key?: string;
    promotions_applied?: AppliedPromotion[];
    quantity?: number;
    discount?: string;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    message?: string;
    items?: CartProductInfo[];
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    errors?: any;
    message?: string;
    success?: boolean;
};
type ShippingAddress = {
    state?: string;
    email?: string;
    area_code: string;
    pincode?: number;
    city?: string;
    address_type?: string;
    area_code_slug?: string;
    meta?: any;
    phone?: number;
    area?: string;
    landmark?: string;
    country?: string;
    address?: string;
    country_code?: string;
    name?: string;
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
    message?: string;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    is_valid?: boolean;
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    extra_meta?: any;
    payment_id?: string;
    payment_gateway?: string;
    current_status?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    meta?: MultiTenderPaymentMeta;
    amount: number;
    mode: string;
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
    product_id: number;
    size: string;
    cashback_applied: number;
    amount_paid: number;
    price_marked: number;
    delivery_charges: number;
    employee_discount?: number;
    extra_meta?: any;
    price_effective: number;
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
    meta?: CartItemMeta;
    files?: OpenApiFiles[];
    cod_charges: number;
    coupon_effective_discount: number;
    quantity?: number;
    discount: number;
};
type OpenApiPlatformCheckoutReq = {
    shipping_address?: ShippingAddress;
    currency_code?: string;
    order_id?: string;
    coupon_code: string;
    cashback_applied: number;
    delivery_charges: number;
    employee_discount?: any;
    comment?: string;
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
    files?: OpenApiFiles[];
    coupon_value: number;
    payment_mode?: string;
    cod_charges: number;
    cart_items: OpenApiOrderItem[];
    coupon?: string;
    gstin?: string;
    affiliate_order_id?: string;
    billing_address: ShippingAddress;
    cart_value: number;
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
