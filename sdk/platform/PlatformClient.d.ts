export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    common: Common;
    lead: Lead;
    billing: Billing;
    communication: Communication;
    payment: Payment;
    fileStorage: FileStorage;
    inventory: Inventory;
    configuration: Configuration;
    analytics: Analytics;
    webhook: Webhook;
    auditTrail: AuditTrail;
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { ApplicationAuth, ApplicationCors, ApplicationData, ApplicationMeta, ApplicationRedirections, ApplicationResponse, ApplicationWebsite, BadRequest, Currency, Domain, LocationDefaultCurrency, LocationDefaultLanguage, LocationDetails, Locations, NotFound, Page, SecureUrl, AddTicketPayload, AgentChangePayload, CategoryData, CloseVideoRoomResponse, CommunicationDetails, CreateCustomFormPayload, CreatedOn, CreateVideoRoomPayload, CreateVideoRoomResponse, CustomForm, CustomFormList, CustomFormSubmissionPayload, Debug, EditCustomFormPayload, EditTicketPayload, Email, FeedbackForm, FeedbackResponseItem, Filter, GetParticipantsInsideVideoRoomResponse, GetTokenForVideoRoomResponse, IntegrationConfig, NotifyUser, Participant, PhoneNumber, PollForAssignment, Priority, Status, SubmitButton, SubmitCustomFormResponse, SupportGeneralConfig, Ticket, TicketAsset, TicketCategory, TicketContent, TicketContext, TicketFeedback, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, TicketHistory, TicketHistoryList, TicketHistoryPayload, TicketList, TicketSubCategory, UserSchema, AddThemeRequestSchema, AllAvailablePageSchema, AssetsSchema, AvailablePagePredicate, AvailablePageRoutePredicate, AvailablePageSchema, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageUserPredicate, availableSectionSchema, BlitzkriegApiErrorSchema, BlitzkriegInternalServerErrorSchema, BlitzkriegNotFoundSchema, Blocks, BlocksProps, Bold, Colors, CommonJs, Config, ConfigPage, Css, Custom, Font, FontsSchema, FontsSchemaItems, FontsSchemaItemsFiles, GlobalSchema, GlobalSchemaProps, Images, Information, Light, ListSchemaItem, Medium, PaginationSchema, Preset, Regular, Sections, SemiBold, Src, ThemesListingResponseSchema, ThemesSchema, UmdJs, UpgradableThemeSchema, Variants, Accountkit, ArchiveUserRequestSchema, ArchiveUserSuccess, AuthenticationApiErrorSchema, AuthenticationInternalServerErrorSchema, AuthSuccess, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, BlockUserRequestSchema, BlockUserSuccess, CodeRequestBodySchema, CreateUserGroupSchema, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, CustomerListResponseSchema, DeleteAccountConsent, DeleteAccountReasons, DeleteApplicationUserRequestSchema, DeleteUserSuccess, EditEmailRequestSchema, EditMobileRequestSchema, EditProfileMobileSchema, EditProfileRequestSchema, EmailOtpSuccess, Facebook, FlashCard, ForgotPasswordRequestSchema, FormRegisterRequestSchema, FormRegisterRequestSchemaPhone, Google, HasPasswordSuccess, Login, LoginSuccess, LogoutSuccess, LookAndFeel, MetaSchema, NotFoundSchema, OAuthRequestAppleSchema, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, OAuthRequestSchema, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OtpSuccess, PasswordLoginRequestSchema, PlatformEmail, PlatformMobile, PlatformSchema, ProfileEditSuccess, ProfileEditSuccessSchema, RegisterFormSuccess, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, RequiredFields, ResetPasswordSuccess, SendEmailOtpRequestSchema, SendEmailVerifyLinkSuccess, SendMobileOtpRequestSchema, SendMobileVerifyLinkSuccess, SendOtpRequestSchema, SendOtpResponse, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, SendVerificationLinkMobileRequestSchema, SessionDeleteResponseSchema, SessionExpiry, SessionListResponseInfo, SessionListResponseSchema, SessionListSuccess, Social, SocialTokens, TokenRequestBodySchema, UnauthenticatedSchema, UnauthorizedSchema, UnDeleteUserRequestSchema, UnDeleteUserSuccess, UpdatePasswordRequestSchema, UpdateUserGroupSchema, UpdateUserRequestSchema, UserEmails, UserGroupListResponseSchema, UserGroupResponseSchema, UserObjectSchema, UserPhoneNumbers, UserSearchResponseSchema, VerifyEmailOtpRequestSchema, VerifyEmailOTPSuccess, VerifyEmailSuccess, VerifyMobileOTPSuccess, VerifyOtpRequestSchema, VerifyOtpSuccess, Action, ActionPage, AdminAnnouncementSchema, AnnouncementAuthorSchema, AnnouncementPageSchema, AnnouncementSchema, AnnouncementsResponseSchema, ApplicationLegal, ApplicationLegalFAQ, Asset, Author, BlogGetResponse, BlogRequest, BlogSchema, CategoryRequestSchema, CategorySchema, ChildrenSchema, CommonError, ConfigurationSchema, ContactSchema, ContentAPIError, ContentSchema, CreateAnnouncementSchema, CreatedBySchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, CreateFaqResponseSchema, CreateFaqSchema, CreateTagRequestSchema, CreateTagSchema, CronSchedule, CustomMetaTag, CustomPage, CustomPageSchema, DataLoaderResetResponseSchema, DataLoaderResponseSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, DateMeta, DefaultNavigationResponse, Detail, EditorMeta, EmailProperties, EmailSchema, FAQ, FAQCategorySchema, FaqResponseSchema, FaqSchema, FeatureImage, GeneratedSEOContent, GenerateSEOContent, GetAnnouncementListSchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, GetFaqSchema, HandpickedTagSchema, LandingPage, LandingPageGetResponse, LandingPageSchema, Language, LocaleLanguage, Navigation, NavigationGetResponse, NavigationReference, NavigationRequest, NavigationSchema, NextSchedule, Orientation, PageContent, PageGetResponse, PageMeta, PageMetaSchema, PagePublishRequest, PageRequest, PageSchema, PageSpec, PageSpecItem, PageSpecParam, PathMappingSchema, PathSourceSchema, PhoneProperties, PhoneSchema, RemoveHandpickedSchema, ResourceContent, ScheduleSchema, ScheduleStartSchema, SEO, SeoComponent, SEOImage, SeoSchema, Slideshow, SlideshowGetResponse, SlideshowMedia, SlideshowRequest, SlideshowSchema, Support, TagDeleteSuccessResponse, TagSchema, TagSourceSchema, TagsSchema, UpdateFaqCategoryRequestSchema, UpdateHandpickedSchema, CancelSubscriptionReq, CancelSubscriptionRes, ChargeLineItem, CheckValidityResponse, CreateOneTimeCharge, CreateOneTimeChargeResponse, CreateSubscriptionCharge, CreateSubscriptionResponse, CurrentPeriod, DetailedPlan, DetailedPlanComponents, EntityChargePrice, EntityChargeRecurring, EntitySubscription, InternalServerError, Invoice, InvoiceDetails, InvoiceDetailsClient, InvoiceDetailsPaymentMethods, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPeriod, InvoiceDetailsStatusTrail, InvoiceItems, InvoiceItemsPeriod, InvoiceItemsPlan, InvoiceItemsPlanRecurring, InvoicePaymentMethod, Invoices, InvoicesData, InvoicesDataClient, InvoicesDataPaymentMethod, InvoicesDataPeriod, OneTimeChargeEntity, OneTimeChargeItem, Phone, Plan, PlanRecurring, ResourceNotFound, Subscription, SubscriptionActivateReq, SubscriptionActivateRes, SubscriptionBillingAddress, SubscriptionCharge, SubscriptionCurrentPeriod, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionInvoiceSettings, SubscriptionLimit, SubscriptionLimitApplication, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitProducts, SubscriptionLimitTeam, SubscriptionPauseCollection, SubscriptionStatus, SubscriptionTrial, SubscriptionTrialPeriod, UnauthenticatedApplication, UnauthenticatedUser, Audience, AudienceReq, Audiences, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersRes, BigqueryHeadersResHeaders, Campaign, CampaignEmail, CampaignEmailTemplate, CampaignReq, Campaigns, CampignEmailProvider, EmailProvider, EmailProviderReq, EmailProviderReqFrom, EmailProviders, EmailTemplate, EmailTemplateDeleteFailureRes, EmailTemplateDeleteSuccessRes, EmailTemplateHeaders, EmailTemplateKeys, EmailTemplateReq, EmailTemplateRes, EmailTemplates, EngineRequest, EngineResponse, EventSubscription, EventSubscriptions, EventSubscriptionTemplate, EventSubscriptionTemplateEmail, EventSubscriptionTemplateSms, GetNRecordsCsvReq, GetNRecordsCsvRes, GetNRecordsCsvResItems, GetStats, Job, JobLog, JobLogs, Jobs, Log, LogEmail, LogMeta, LogPushnotification, Logs, MetaStructure, Notification, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadEmailTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadSmsTemplateStructure, PayloadStructure, PushtokenReq, PushtokenRes, RecipientHeaders, SendOtpCommsReq, SendOtpCommsReqData, SendOtpCommsReqEmail, SendOtpCommsReqSms, SendOtpCommsRes, SendOtpCommsResEmail, SendOtpCommsResSms, SendOtpEmailCommsTemplate, SendOtpSmsCommsProvider, SendOtpSmsCommsTemplate, SmsProvider, SmsProviderReq, SmsProviders, SmsTemplate, SmsTemplateDeleteFailureRes, SmsTemplateDeleteSuccessRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplates, Stats, StatsImported, StatsProcessed, StatsProcessedEmail, StatsProcessedSms, SystemEmailTemplate, SystemEmailTemplates, SystemNotification, SystemNotifications, SystemNotificationSettings, SystemNotificationsPage, SystemNotificationUser, SystemSmsTemplate, SystemSmsTemplates, TemplateAndType, TriggerJobRequest, TriggerJobResponse, VerifyOtpCommsErrorRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, AddBeneficiaryDetailsOTPRequest, BankDetailsForOTP, CODdata, DeletePayoutResponse, DeleteSubscriptionPaymentMethodResponse, EdcAddRequest, EdcAggregatorAndModelListResponse, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcDeviceListResponse, EdcDeviceStatsResponse, EdcDeviceUpdateResponse, EdcModelData, EdcUpdateRequest, ErrorCodeAndDescription, ErrorCodeDescription, GetUserCODLimitResponse, HttpErrorCodeAndResponse, IfscCodeResponse, IntentApp, IntentAppErrorList, LinkStatus, MultiTenderPaymentMeta, MultiTenderPaymentMethod, NotFoundResourceError, OrderBeneficiaryDetails, OrderBeneficiaryResponse, PaymentConfirmationRequest, PaymentConfirmationResponse, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayConfigResponse, PaymentGatewayToBeReviewed, PaymentInitializationRequest, PaymentInitializationResponse, PaymentModeList, PaymentModeLogo, PaymentOptions, PaymentOptionsResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, Payout, PayoutAggregator, PayoutBankDetails, PayoutCustomer, PayoutMoreAttributes, PayoutRequest, PayoutResponse, PayoutsResponse, PlatformPaymentOptions, PlatfromPaymentConfig, RefundAccountResponse, ResendOrCancelPaymentRequest, ResendOrCancelPaymentResponse, RootPaymentMode, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, SetCODForUserRequest, SetCODOptionResponse, StatisticsData, SubscriptionConfigResponse, SubscriptionPaymentMethodResponse, UpdatePayoutRequest, UpdatePayoutResponse, UpdatePlatformPaymentConfig, BrowseResponse, BulkRequest, BulkUploadResponse, CDN, CompleteResponse, CopyFileTask, DbRecord, Destination, FailedResponse, Opts, ReqConfiguration, SignUrlRequest, SignUrlResponse, StartRequest, StartResponse, Upload, Urls, Attribution, CampaignShortLink, ErrorRes, RedirectDevice, Redirects, ShortLinkList, ShortLinkReq, ShortLinkRes, SocialMediaTags, UrlInfo, WebRedirect, ArchiveConfig, Audit, AWSS3config, CatalogMasterConfig, CompanyConfig, DataTresholdDTO, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FileConfig, FTPConfig, GCompany, GenericDTO, GoogleSpreadSheetConfig, GStore, HttpConfig, JobConfig, JobConfigDTO, JobConfigListDTO, JobConfigRawDTO, JobHistoryDto, JobMetricsDto, JobStepsDTO, JsonDocConfig, KafkaMetaModel, KafkaResponse, LocalFileConfig, Metum, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeJobConfigDTO, ResponseEnvelopeJobMetricsDto, ResponseEnvelopeKafkaResponse, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeListJobConfigListDTO, ResponseEnvelopeListJobConfigRawDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListSlingshotConfigurationDetail, ResponseEnvelopeString, Send, SFTPConfig, SlingshotConfigurationDetail, SlingshotIntegration, StoreConfig, StoreData, StoreFilter, SuppressStoreModel, SuppressStorePayload, TaskConfig, TaskDTO, TaskParam, TaskStepConfig, Android, App, AppCartConfig, AppCurrencyResponse, AppDomain, AppFeature, AppFeatureRequest, AppFeatureResponse, AppInventory, AppInventoryCompanies, AppInventoryConfig, AppInventoryPartialUpdate, AppInventoryStores, Application, ApplicationDetail, ApplicationInformation, ApplicationInventory, ApplicationsResponse, AppLogisticsConfig, AppOrderConfig, AppPaymentConfig, AppStoreRules, AppSupportedCurrency, ArticleAssignmentConfig, ArticleAssignmentRule, ArticleAssignmentRules, AuthenticationConfig, BlogLink, BrandCompanyInfo, BrandsByCompanyResponse, BrandStoreInfo, BuildVersion, BuildVersionHistory, BusinessHighlights, CallbackUrl, CartFeature, Charges, CommonFeature, CommsConfig, CommunicationConfig, CommunicationOptinDialogFeature, CompaniesResponse, CompanyAboutAddress, CompanyBrandInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, CompanyValidator, CompareProductsFeature, CreateApplicationRequest, CreateAppResponse, Credentials, Credit, CurrenciesResponse, CurrencyConfig, CurrencyFeature, Debit, DefaultCurrency, DeliveryCharges, DeploymentMeta, DeploymentStoreSelectionFeature, DomainAdd, DomainAddRequest, DomainsResponse, DomainStatus, DomainStatusRequest, DomainStatusResponse, DomainSuggestion, DomainSuggestionsRequest, DomainSuggestionsResponse, FacebookLink, FeedbackFeature, FilterOrderingStoreRequest, Firebase, Freshchat, FreshchatCredentials, FyndRewards, FyndRewardsCredentials, GetIntegrationsOptInsResponse, GoogleMap, GoogleMapCredentials, GooglePlusLink, Gtm, GtmCredentials, HomePageFeature, InformationAddress, InformationPhone, InformationSupport, InstagramLink, Integration, IntegrationConfigResponse, IntegrationLevel, IntegrationMeta, IntegrationOptIn, InvalidPayloadRequest, InventoryArticleAssignment, InventoryBrand, InventoryBrandRule, InventoryCategory, InventoryDiscount, InventoryPaymentConfig, InventoryPrice, InventoryStore, InventoryStoreRule, InventoryValidator, Ios, JsonSchema, LandingImage, LandingPageFeature, LastPatch, LaunchPage, LinkedInLink, Links, ListingPriceFeature, LoyaltyPointsConfig, Methods, MobileAppConfigRequest, MobileAppConfiguration, Moengage, MoengageCredentials, OptedApplicationResponse, OptedCompany, OptedInventory, OptedStore, OptedStoreAddress, OptedStoreIntegration, OptOutInventory, OptType, OrderFeature, OrderingStore, OrderingStoreConfig, OrderingStores, OrderingStoresResponse, OrderValidator, OtherEntity, OtherEntityData, OtherSellerApplication, OtherSellerApplications, OtherSellerCompany, PanCardConfig, PaymentModeConfig, PaymentSelectionLock, PcrFeature, PinterestLink, ProductDetailFeature, QrFeature, RegistrationPageFeature, RevenueEngineFeature, RewardPointsConfig, Safetynet, SafetynetCredentials, Segment, SegmentCredentials, SocialLinks, SplashImage, StoreByBrandsRequest, StoreByBrandsResponse, StoreCriteriaRule, StoreLatLong, StorePriority, StorePriorityRule, StoresResponse, StoreValidator, SuccessMessageResponse, TokenResponse, Tokens, TwitterLink, UnhandledError, UpdateDomain, UpdateDomainTypeRequest, UpdateIntegrationLevelRequest, UserEmail, UserPhoneNumber, Validators, VimeoLink, YoutubeLink, AbandonedCart, AbandonedCartResponse, ActionQuery, ActivePromosResponse, AddCartDetailResponse, AddCartRequest, AddProductCart, AppliedFreeArticles, AppliedPromotion, ApplyCouponRequest, ArticlePriceInfo, BaseInfo, BasePrice, BulkBundleRestriction, BuyRules, CartBreakup, CartCheckoutResponse, CartCurrency, CartDeliveryModesResponse, CartDetailResponse, CartItem, CartItemCountResponse, CartItemMeta, CartList, CartMetaMissingResponse, CartMetaResponse, CartProduct, CartProductIdentifer, CartProductInfo, CartShipmentsResponse, CategoryInfo, CheckCart, CompareObject, Coupon, CouponAction, CouponAdd, CouponAuthor, CouponBreakup, CouponDateMeta, CouponPartialUpdate, CouponSchedule, CouponsResponse, CouponUpdate, CouponValidity, DeleteAddressResponse, DeleteCartDetailResponse, DeleteCartRequest, DiscountOffer, DiscountRule, DiscountRulesApp, DisplayBreakup, DisplayMeta, DisplayMeta1, DisplayMetaDict, Files, FreeGiftItem, GeoLocation, GetCouponResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, Identifier, ItemCriteria, LoyaltyPoints, MultiCartResponse, NetQuantity, OpenapiCartDetailsRequest, OpenapiCartDetailsResponse, OpenApiCartServiceabilityRequest, OpenApiCartServiceabilityResponse, OpenApiCheckoutResponse, OpenApiErrorResponse, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OperationErrorResponse, Ownership, Ownership1, Ownership2, PageCoupon, PaymentAllowValue, PaymentAllowValue1, PaymentCouponValidate, PaymentModes, PickupStoreDetail, PlatformAddress, PlatformCartCheckoutDetailRequest, PlatformCartMetaRequest, PlatformGetAddressesResponse, PlatformSelectCartAddressRequest, PostOrder, PostOrder1, PriceRange, ProductAction, ProductArticle, ProductAvailability, ProductAvailabilitySize, ProductImage, ProductPrice, ProductPriceInfo, PromiseFormatted, PromiseTimestamp, PromoMeta, PromotionAction, PromotionAdd, PromotionAuthor, PromotionDateMeta, PromotionListItem, PromotionPartialUpdate, PromotionPaymentModes, PromotionSchedule, PromotionsResponse, PromotionUpdate, RawBreakup, Restrictions, Restrictions1, Rule, RuleDefinition, SaveAddressResponse, SharedCart, SharedCartDetails, SharedCartResponse, ShipmentPromise, ShipmentResponse, ShippingAddress, StaffCheckout, State, StoreDetailsResponse, SuccessMessage, UpdateAddressResponse, UpdateCartDetailResponse, UpdateCartPaymentRequest, UpdateCartRequest, UpdateCartShipmentItem, UpdateCartShipmentRequest, UpdateProductCart, UpdateUserCartMapping, UserCartMappingResponse, UserInfo, UserRegistered, UsesRemaining, UsesRemaining1, UsesRestriction, UsesRestriction1, Validation, Validity, Visibility, AppUser, ConfigurationRequest, ConfigurationRes, E, Giveaway, GiveawayAudience, GiveawayResponse, HistoryRes, Offer, Points, PointsHistory, Referral, RewardsAudience, RewardsRule, RewardUser, Schedule, SetConfigurationRes, ShareMessages, UserRes, AbandonCartDetail, AbandonCartsDetail, AbandonCartsList, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, GetLogsListRes, LogInfo, MkpLogsResp, ReceivedAt, SearchLogReq, SearchLogRes, StatGroup, StatsGroupComponent, StatsGroupComponents, StatsGroups, StatsRes, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, Association, AuthMeta, EventConfig, EventConfigBase, EventConfigList, EventConfigResponse, EventPayload, EventProcessedStatus, SubscriberConfig, SubscriberConfigList, SubscriberEvent, SubscriberResponse, CreateLogResponse, DeviceInfo, EntityObj, EntityObject, EntityTypeObj, EntityTypesResponse, Location, LogDocs, LogMetaObj, LogSchemaResponse, Modifier, RequestBodyAuditLog };
}
import Common = require("./Common/CommonPlatformClient");
import Lead = require("./Lead/LeadPlatformClient");
import Billing = require("./Billing/BillingPlatformClient");
import Communication = require("./Communication/CommunicationPlatformClient");
import Payment = require("./Payment/PaymentPlatformClient");
import FileStorage = require("./FileStorage/FileStoragePlatformClient");
import Inventory = require("./Inventory/InventoryPlatformClient");
import Configuration = require("./Configuration/ConfigurationPlatformClient");
import Analytics = require("./Analytics/AnalyticsPlatformClient");
import Webhook = require("./Webhook/WebhookPlatformClient");
import AuditTrail = require("./AuditTrail/AuditTrailPlatformClient");
import PlatformApplicationClient = require("./PlatformApplicationClient");
type ApplicationAuth = {
    enabled?: boolean;
};
type ApplicationCors = {
    domains?: string[];
};
type ApplicationData = {
    __v?: number;
    _id?: string;
    app_type?: string;
    auth?: ApplicationAuth;
    banner?: SecureUrl;
    cache_ttl?: number;
    channel_type?: string;
    company_id?: number;
    cors?: ApplicationCors;
    created_at?: string;
    description?: string;
    domain?: Domain;
    domains?: Domain[];
    favicon?: SecureUrl;
    is_active?: boolean;
    is_internal?: boolean;
    logo?: SecureUrl;
    meta?: ApplicationMeta[];
    mobile_logo?: SecureUrl;
    name?: string;
    owner?: string;
    redirections?: ApplicationRedirections[];
    slug?: string;
    token?: string;
    updated_at?: string;
    website?: ApplicationWebsite;
};
type ApplicationMeta = {
    name?: string;
    value?: string;
};
type ApplicationRedirections = {
    redirect_from?: string;
    redirect_to?: string;
    type?: string;
};
type ApplicationResponse = {
    application?: ApplicationData;
};
type ApplicationWebsite = {
    basepath?: string;
    enabled?: boolean;
};
type BadRequest = {
    message?: string;
};
type Currency = {
    _id?: string;
    code?: string;
    created_at?: string;
    decimal_digits?: number;
    is_active?: boolean;
    name?: string;
    symbol?: string;
    updated_at?: string;
};
type Domain = {
    _id?: string;
    is_predefined?: boolean;
    is_primary?: boolean;
    is_shortlink?: boolean;
    name?: string;
    verified?: boolean;
};
type LocationDefaultCurrency = {
    code?: string;
    name?: string;
    symbol?: string;
};
type LocationDefaultLanguage = {
    code?: string;
    name?: string;
};
type LocationDetails = {
    __v?: number;
    _id?: string;
    capital?: string;
    country_code?: string;
    currency?: string;
    default_currency?: LocationDefaultCurrency;
    default_language?: LocationDefaultLanguage;
    iso2?: string;
    iso3?: string;
    latitude?: string;
    longitude?: string;
    name?: string;
    parent?: string;
    phone_code?: string;
    state_code?: string;
    type?: string;
    uid?: number;
};
type Locations = {
    items?: LocationDetails[];
};
type NotFound = {
    message?: string;
};
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
type SecureUrl = {
    secure_url?: string;
};
type AddTicketPayload = {
    _custom_json?: any;
    category: string;
    content: TicketContent;
    created_by?: any;
    priority?: PriorityEnum;
    status?: string;
};
type AgentChangePayload = {
    agent_id: string;
};
type CategoryData = {
    list?: TicketCategory;
};
type CloseVideoRoomResponse = {
    success: boolean;
};
type CommunicationDetails = {
    description?: string;
    enabled?: boolean;
    title?: string;
    type?: string;
    value?: string;
};
type CreateCustomFormPayload = {
    description?: string;
    header_image?: string;
    inputs: any[];
    poll_for_assignment?: PollForAssignment;
    priority: PriorityEnum;
    should_notify?: boolean;
    slug: string;
    success_message?: string;
    title: string;
};
type CreatedOn = {
    user_agent: string;
};
type CreateVideoRoomPayload = {
    notify?: NotifyUser[];
    unique_name: string;
};
type CreateVideoRoomResponse = {
    unique_name: string;
};
type CustomForm = {
    _id: string;
    application_id: string;
    created_on?: CreatedOn;
    description?: string;
    header_image?: string;
    inputs: any[];
    login_required: boolean;
    poll_for_assignment?: PollForAssignment;
    priority: Priority;
    should_notify: boolean;
    slug: string;
    submit_button?: SubmitButton;
    success_message?: string;
    title: string;
};
type CustomFormList = {
    items?: CustomForm[];
    page?: Page;
};
type CustomFormSubmissionPayload = {
    attachments?: TicketAsset[];
    response: any[];
};
type Debug = {
    platform?: string;
    source?: string;
};
type EditCustomFormPayload = {
    description?: string;
    header_image?: string;
    inputs: any[];
    login_required?: boolean;
    poll_for_assignment?: PollForAssignment;
    priority: PriorityEnum;
    should_notify?: boolean;
    success_message?: string;
    title: string;
};
type EditTicketPayload = {
    assigned_to?: AgentChangePayload;
    category?: string;
    content?: TicketContent;
    priority?: PriorityEnum;
    source?: string;
    status?: string;
    sub_category?: string;
    tags?: string[];
};
type Email = {
    active?: boolean;
    email?: string;
    primary?: boolean;
    verified?: boolean;
};
type FeedbackForm = {
    inputs?: any;
    timestamps?: any;
    title?: string;
};
type FeedbackResponseItem = {
    display: string;
    key: string;
    value: string;
};
type Filter = {
    assignees: any[];
    categories?: TicketCategory[];
    priorities: Priority[];
    statuses: Status[];
};
type GetParticipantsInsideVideoRoomResponse = {
    participants: Participant[];
};
type GetTokenForVideoRoomResponse = {
    access_token: string;
};
type IntegrationConfig = {
    _id?: string;
    allow_ticket_creation: boolean;
    base_url?: string;
    category_data?: CategoryData;
    category_sync_apikey?: string;
    config_completed?: boolean;
    create_ticket_apikey?: string;
    integration_type: string;
    show_listing: boolean;
    update_ticket_apikey?: string;
    webhook_apikey?: string;
};
type NotifyUser = {
    country_code: string;
    phone_number: string;
};
type Participant = {
    identity?: string;
    status?: string;
    user?: UserSchema;
};
type PhoneNumber = {
    active?: boolean;
    country_code?: number;
    phone?: string;
    primary?: boolean;
    verified?: boolean;
};
type PollForAssignment = {
    duration: number;
    failure_message: string;
    message: string;
    success_message: string;
};
type Priority = {
    color: string;
    display: string;
    key: PriorityEnum;
};
type Status = {
    color: string;
    display: string;
    key: string;
};
type SubmitButton = {
    background_color: string;
    title: string;
    title_color: string;
};
type SubmitCustomFormResponse = {
    message: string;
    ticket?: Ticket;
};
type SupportGeneralConfig = {
    _id?: string;
    integration?: any;
    show_communication_info?: boolean;
    show_support_dris?: boolean;
    support_communication?: CommunicationDetails;
    support_email?: CommunicationDetails;
    support_faq?: CommunicationDetails;
    support_phone?: CommunicationDetails;
};
type Ticket = {
    _custom_json?: any;
    _id: string;
    assigned_to?: any;
    category: TicketCategory;
    content?: TicketContent;
    context?: TicketContext;
    created_at?: string;
    created_by?: any;
    created_on?: CreatedOn;
    integration?: any;
    is_feedback_pending?: boolean;
    priority: Priority;
    response_id?: string;
    source: TicketSourceEnum;
    status: Status;
    sub_category?: string;
    tags?: string[];
    updated_at?: string;
};
type TicketAsset = {
    display?: string;
    type: TicketAssetTypeEnum;
    value: string;
};
type TicketCategory = {
    display: string;
    feedback_form?: FeedbackForm;
    group_id?: number;
    key: string;
    sub_categories?: TicketCategory;
};
type TicketContent = {
    attachments?: TicketAsset[];
    description?: string;
    title: string;
};
type TicketContext = {
    application_id?: string;
    company_id: string;
};
type TicketFeedback = {
    _id: string;
    category?: string;
    company_id: string;
    created_at?: string;
    response: FeedbackResponseItem[];
    ticket_id: string;
    updated_at?: string;
    user?: any;
};
type TicketFeedbackForm = {
    display?: any[];
    title: string;
};
type TicketFeedbackList = {
    items?: TicketFeedback[];
};
type TicketFeedbackPayload = {
    form_response?: any;
};
type TicketHistory = {
    _id: string;
    created_at?: string;
    created_by?: any;
    created_on?: CreatedOn;
    ticket_id: string;
    type: string;
    updated_at?: string;
    value: any;
};
type TicketHistoryList = {
    items?: TicketHistory[];
    page?: Page;
};
type TicketHistoryPayload = {
    type: HistoryTypeEnum;
    value: any;
};
type TicketList = {
    filters?: Filter;
    items?: Ticket[];
    page?: Page;
};
type TicketSubCategory = {
    display: string;
    key: string;
    sub_categories?: TicketSubCategory;
};
type UserSchema = {
    _id?: string;
    account_type?: string;
    active?: boolean;
    application_id?: string;
    created_at?: string;
    dob?: string;
    emails?: Email[];
    first_name?: string;
    gender?: string;
    last_name?: string;
    meta?: any;
    phone_numbers?: PhoneNumber[];
    profile_pic_url?: string;
    updated_at?: string;
    user_id?: string;
    username?: string;
};
type AddThemeRequestSchema = {
    theme_id?: string;
};
type AllAvailablePageSchema = {
    pages?: AvailablePageSchema[];
};
type AssetsSchema = {
    common_js?: CommonJs;
    css?: Css;
    umd_js?: UmdJs;
};
type AvailablePagePredicate = {
    route?: AvailablePageRoutePredicate;
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
};
type AvailablePageRoutePredicate = {
    exact_url?: string;
    query?: any;
    selected?: string;
};
type AvailablePageSchema = {
    _id?: string;
    path?: string;
    props?: any[];
    sections?: AvailablePageSchemaSections[];
    sections_meta?: AvailablePageSectionMetaAttributes[];
    seo?: AvailablePageSeo;
    text?: string;
    theme?: string;
    type?: string;
    value?: string;
};
type AvailablePageSchemaSections = {
    blocks?: any[];
    label?: string;
    name?: string;
    predicate?: AvailablePagePredicate;
    preset?: any;
    props?: any;
};
type AvailablePageScreenPredicate = {
    desktop?: boolean;
    mobile?: boolean;
    tablet?: boolean;
};
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
type AvailablePageSeo = {
    _id?: string;
    description?: string;
    title?: string;
};
type AvailablePageUserPredicate = {
    anonymous?: boolean;
    authenticated?: boolean;
};
type availableSectionSchema = {
    blocks?: Blocks[];
    label?: string;
    name?: string;
    props?: BlocksProps[];
};
type BlitzkriegApiErrorSchema = {
    message?: string;
};
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
type BlitzkriegNotFoundSchema = {
    message?: string;
};
type Blocks = {
    name?: string;
    props?: BlocksProps[];
    type?: string;
};
type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type Bold = {
    file?: string;
    name?: string;
};
type Colors = {
    accent_color?: string;
    bg_color?: string;
    button_secondary_color?: string;
    link_color?: string;
    primary_color?: string;
    secondary_color?: string;
};
type CommonJs = {
    link?: string;
};
type Config = {
    current?: string;
    global_schema?: GlobalSchema;
    list?: ListSchemaItem[];
    preset?: Preset;
};
type ConfigPage = {
    page?: string;
    settings?: any;
};
type Css = {
    link?: string;
    links?: string[];
};
type Custom = {
    props?: any;
};
type Font = {
    family?: string;
    variants?: Variants;
};
type FontsSchema = {
    items?: FontsSchemaItems;
    kind?: string;
};
type FontsSchemaItems = {
    category?: string;
    family?: string;
    files?: FontsSchemaItemsFiles;
    kind?: string;
    last_modified?: string;
    subsets?: string[];
    variants?: string[];
    version?: string;
};
type FontsSchemaItemsFiles = {
    bold?: string;
    italic?: string;
    regular?: string;
};
type GlobalSchema = {
    props?: GlobalSchemaProps[];
};
type GlobalSchemaProps = {
    category?: string;
    id?: string;
    label?: string;
    type?: string;
};
type Images = {
    android?: string[];
    desktop?: string[];
    ios?: string[];
    thumbnail?: string[];
};
type Information = {
    description?: string;
    features?: string[];
    images?: Images;
    name?: string;
};
type Light = {
    file?: string;
    name?: string;
};
type ListSchemaItem = {
    global_config?: any;
    name?: string;
    page?: ConfigPage[];
};
type Medium = {
    file?: string;
    name?: string;
};
type PaginationSchema = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
type Preset = {
    pages?: AvailablePageSchema[];
};
type Regular = {
    file?: string;
    name?: string;
};
type Sections = {
    attributes?: string;
};
type SemiBold = {
    file?: string;
    name?: string;
};
type Src = {
    link?: string;
};
type ThemesListingResponseSchema = {
    items?: ThemesSchema[];
    page?: PaginationSchema;
};
type ThemesSchema = {
    __v?: number;
    _id?: string;
    application?: string;
    applied?: boolean;
    archived?: boolean;
    assets?: AssetsSchema;
    available_sections?: availableSectionSchema[];
    colors?: Colors;
    config?: Config;
    created_at?: string;
    customized?: boolean;
    font?: Font;
    information?: Information;
    parent_theme?: string;
    parent_theme_version?: string;
    published?: boolean;
    src?: Src;
    styles?: any;
    tags?: string[];
    updated_at?: string;
    version?: string;
};
type UmdJs = {
    link?: string;
    links?: string[];
};
type UpgradableThemeSchema = {
    applied_theme?: string;
    parent_theme?: string;
    upgrade?: boolean;
};
type Variants = {
    bold?: Bold;
    light?: Light;
    medium?: Medium;
    regular?: Regular;
    semi_bold?: SemiBold;
};
type Accountkit = {
    app_id?: string;
};
type ArchiveUserRequestSchema = {
    user_id?: string;
};
type ArchiveUserSuccess = {
    success?: boolean;
};
type AuthenticationApiErrorSchema = {
    message?: string;
};
type AuthenticationInternalServerErrorSchema = {
    message?: string;
};
type AuthSuccess = {
    register_token?: string;
    user?: UserSchema;
    user_exists?: boolean;
};
type AuthSuccessUser = {
    active?: boolean;
    debug?: AuthSuccessUserDebug;
    emails?: AuthSuccessUserEmails;
    first_name?: string;
    last_name?: string;
};
type AuthSuccessUserDebug = {
    platform?: string;
};
type AuthSuccessUserEmails = {
    active?: boolean;
    email?: string;
    primary?: boolean;
    verified?: boolean;
};
type BlockUserRequestSchema = {
    reason?: string;
    status?: boolean;
    user_id?: string[];
};
type BlockUserSuccess = {
    success?: boolean;
};
type CodeRequestBodySchema = {
    code?: string;
};
type CreateUserGroupSchema = {
    description: string;
    file_url: string;
    name: string;
};
type CreateUserRequestSchema = {
    email?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    meta?: any;
    phone_number: string;
    username: string;
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
    cookie?: any;
    domain?: string;
    http_only?: boolean;
    max_age?: number;
    secure?: boolean;
};
type CustomerListResponseSchema = {
    items?: UserSchema[];
    page?: PaginationSchema;
};
type DeleteAccountConsent = {
    consent_text?: string;
};
type DeleteAccountReasons = {
    reason_id?: string;
    reason_text?: string;
    show_text_area?: boolean;
};
type DeleteApplicationUserRequestSchema = {
    otp?: string;
    reason?: string;
    reason_id?: string;
    request_id?: string;
    user_id?: string;
};
type DeleteUserSuccess = {
    success?: boolean;
};
type EditEmailRequestSchema = {
    email?: string;
};
type EditMobileRequestSchema = {
    country_code?: string;
    phone?: string;
};
type EditProfileMobileSchema = {
    country_code?: string;
    phone?: string;
};
type EditProfileRequestSchema = {
    android_hash?: string;
    country_code?: string;
    dob?: string;
    email?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    mobile?: EditProfileMobileSchema;
    profile_pic_url?: string;
    register_token?: string;
    sender?: string;
};
type EmailOtpSuccess = {
    success?: boolean;
};
type Facebook = {
    app_id?: string;
};
type FlashCard = {
    background_color?: string;
    text?: string;
    text_color?: string;
};
type ForgotPasswordRequestSchema = {
    code?: string;
    password?: string;
};
type FormRegisterRequestSchema = {
    email?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    register_token?: string;
};
type FormRegisterRequestSchemaPhone = {
    country_code?: string;
    mobile?: string;
};
type Google = {
    app_id?: string;
};
type HasPasswordSuccess = {
    result?: boolean;
};
type Login = {
    otp?: boolean;
    password?: boolean;
};
type LoginSuccess = {
    register_token?: string;
    request_id?: string;
    user?: UserSchema;
};
type LogoutSuccess = {
    logout?: boolean;
};
type LookAndFeel = {
    background_color?: string;
    card_position?: string;
};
type MetaSchema = {
    fynd_default?: boolean;
};
type NotFoundSchema = {
    message?: string;
};
type OAuthRequestAppleSchema = {
    oauth?: OAuthRequestAppleSchemaOauth;
    profile?: OAuthRequestAppleSchemaProfile;
    user_identifier?: string;
};
type OAuthRequestAppleSchemaOauth = {
    identity_token?: string;
};
type OAuthRequestAppleSchemaProfile = {
    first_name?: string;
    full_name?: string;
    last_name?: string;
};
type OAuthRequestSchema = {
    is_signed_in?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
type OAuthRequestSchemaOauth2 = {
    access_token?: string;
    expiry?: number;
    refresh_token?: string;
};
type OAuthRequestSchemaProfile = {
    email?: string;
    first_name?: string;
    full_name?: string;
    id?: string;
    image?: string;
    last_name?: string;
};
type OtpSuccess = {
    country_code?: string;
    message?: string;
    mobile?: string;
    register_token?: string;
    request_id?: string;
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
};
type PasswordLoginRequestSchema = {
    captcha_code?: string;
    password?: string;
    username?: string;
};
type PlatformEmail = {
    is_required?: boolean;
    level?: string;
};
type PlatformMobile = {
    is_required?: boolean;
    level?: string;
};
type PlatformSchema = {
    _id?: string;
    active?: boolean;
    created_at?: string;
    delete_account_consent?: any;
    delete_account_day?: number;
    delete_account_reasons?: DeleteAccountReasons[];
    desktop_image?: string;
    display?: string;
    flash_card?: FlashCard;
    forgot_password?: boolean;
    login?: Login;
    look_and_feel?: LookAndFeel;
    meta?: MetaSchema;
    mobile_image?: string;
    name?: string;
    register?: boolean;
    register_required_fields?: RegisterRequiredFields;
    required_fields?: RequiredFields;
    session_config?: any;
    skip_captcha?: boolean;
    skip_login?: boolean;
    social?: Social;
    social_tokens?: SocialTokens;
    subtext?: string;
    updated_at?: string;
};
type ProfileEditSuccess = {
    country_code?: string;
    email?: string;
    message?: string;
    mobile?: string;
    register_token?: string;
    request_id?: string;
    resend_email_token?: string;
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    user?: UserSchema;
    user_exists?: boolean;
    verify_email_link?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
};
type ProfileEditSuccessSchema = {
    email?: string;
    register_token?: string;
    user?: string;
    user_exists?: boolean;
    verify_email_link?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
};
type RegisterFormSuccess = {
    country_code?: string;
    email?: string;
    message?: string;
    mobile?: string;
    register_token?: string;
    request_id?: string;
    resend_email_token?: string;
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    user_exists?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
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
type RequiredFields = {
    email?: PlatformEmail;
    mobile?: PlatformMobile;
};
type ResetPasswordSuccess = {
    status?: string;
};
type SendEmailOtpRequestSchema = {
    action?: string;
    captcha_code?: string;
    email?: string;
    register_token?: string;
    token?: string;
};
type SendEmailVerifyLinkSuccess = {
    verify_email_link?: boolean;
};
type SendMobileOtpRequestSchema = {
    action?: string;
    android_hash?: string;
    captcha_code?: string;
    country_code?: string;
    force?: string;
    mobile?: string;
    token?: string;
};
type SendMobileVerifyLinkSuccess = {
    verify_mobile_link?: boolean;
};
type SendOtpRequestSchema = {
    android_hash?: string;
    captcha_code?: string;
    country_code?: string;
    mobile?: string;
};
type SendOtpResponse = {
    country_code?: string;
    email?: string;
    message?: string;
    mobile?: string;
    register_token?: string;
    request_id?: string;
    resend_email_token?: string;
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    user_exists?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
};
type SendResetPasswordEmailRequestSchema = {
    captcha_code?: string;
    email?: string;
};
type SendResetPasswordMobileRequestSchema = {
    captcha_code?: string;
    country_code?: string;
    mobile?: string;
};
type SendVerificationLinkMobileRequestSchema = {
    active?: boolean;
    country_code?: string;
    phone?: string;
    primary?: boolean;
    verified?: boolean;
};
type SessionDeleteResponseSchema = {
    items?: string[];
};
type SessionExpiry = {
    duration?: number;
    is_rolling?: boolean;
    type?: string;
};
type SessionListResponseInfo = {
    domain?: string;
    expire_in?: string;
    ip?: string;
    session_id?: string;
    user_agent?: string;
};
type SessionListResponseSchema = {
    items?: SessionListResponseInfo[];
};
type SessionListSuccess = {
    sessions?: string[];
};
type Social = {
    account_kit?: boolean;
    apple?: boolean;
    facebook?: boolean;
    google?: boolean;
};
type SocialTokens = {
    account_kit?: Accountkit;
    facebook?: Facebook;
    google?: Google;
};
type TokenRequestBodySchema = {
    token?: string;
};
type UnauthenticatedSchema = {
    authenticated?: boolean;
};
type UnauthorizedSchema = {
    message?: string;
};
type UnDeleteUserRequestSchema = {
    reason?: string;
    reason_id?: string;
    user_id?: string;
};
type UnDeleteUserSuccess = {
    success?: boolean;
};
type UpdatePasswordRequestSchema = {
    new_password?: string;
    old_password?: string;
};
type UpdateUserGroupSchema = {
    description?: string;
    file_url?: string;
    name?: string;
};
type UpdateUserRequestSchema = {
    emails?: UserEmails[];
    external_id?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    meta?: any;
    phone_numbers?: UserPhoneNumbers[];
};
type UserEmails = {
    active?: boolean;
    email?: string;
    primary?: boolean;
    verified?: boolean;
};
type UserGroupListResponseSchema = {
    items?: UserGroupResponseSchema[];
    page?: PaginationSchema;
};
type UserGroupResponseSchema = {
    __v?: number;
    _id?: string;
    application_id?: string;
    created_at?: string;
    description?: string;
    file_url?: string;
    modified_at?: string;
    name?: string;
    status?: string;
    uid?: number;
};
type UserObjectSchema = {
    user?: UserSchema;
};
type UserPhoneNumbers = {
    active?: boolean;
    country_code?: string;
    phone?: string;
    primary?: boolean;
    verified?: boolean;
};
type UserSearchResponseSchema = {
    users?: UserSchema[];
};
type VerifyEmailOtpRequestSchema = {
    action?: string;
    email?: string;
    otp?: string;
    register_token?: string;
};
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verify_email_link?: boolean;
};
type VerifyEmailSuccess = {
    message?: string;
};
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verify_mobile_link?: boolean;
};
type VerifyOtpRequestSchema = {
    otp?: string;
    register_token?: string;
    request_id?: string;
};
type VerifyOtpSuccess = {
    register_token?: string;
    user?: UserSchema;
    user_exists?: boolean;
};
type Action = {
    page?: ActionPage;
    popup?: ActionPage;
    type?: string;
};
type ActionPage = {
    params?: any;
    query?: any;
    type: PageType;
    url?: string;
};
type AdminAnnouncementSchema = {
    _id?: string;
    _schedule?: ScheduleSchema;
    announcement?: string;
    app?: string;
    author?: AnnouncementAuthorSchema;
    created_at?: string;
    editor_meta?: EditorMeta;
    modified_at?: string;
    pages?: AnnouncementPageSchema[];
    platforms?: string[];
    title?: string;
};
type AnnouncementAuthorSchema = {
    created_by?: string;
    modified_by?: string;
};
type AnnouncementPageSchema = {
    page_slug?: string;
    type?: string;
};
type AnnouncementSchema = {
    announcement?: string;
    schedule?: ScheduleStartSchema;
};
type AnnouncementsResponseSchema = {
    announcements?: any;
    refresh_pages?: string[];
    refresh_rate?: number;
};
type ApplicationLegal = {
    _id?: string;
    application?: string;
    created_at?: string;
    faq?: ApplicationLegalFAQ[];
    policy?: string;
    returns?: string;
    shipping?: string;
    tnc?: string;
    updated_at?: string;
};
type ApplicationLegalFAQ = {
    answer?: string;
    question?: string;
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
type BlogGetResponse = {
    items?: BlogSchema[];
    page?: Page;
};
type BlogRequest = {
    _custom_json?: any;
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
};
type BlogSchema = {
    _custom_json?: any;
    _id?: string;
    _schedule?: CronSchedule;
    application?: string;
    archived?: boolean;
    author?: Author;
    content?: ResourceContent[];
    date_meta?: DateMeta;
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
};
type CategoryRequestSchema = {
    slug?: string;
    title?: string;
};
type CategorySchema = {
    _custom_json?: any;
    _id?: string;
    application?: string;
    children?: string[];
    description?: string;
    icon_url?: string;
    index?: number;
    slug?: string;
    title?: string;
};
type ChildrenSchema = {
    _id?: string;
    answer?: string;
    application?: string;
    question?: string;
    slug?: string;
};
type CommonError = {
    message?: string;
};
type ConfigurationSchema = {
    duration?: number;
    sleep_time?: number;
    slide_direction?: string;
    start_on_launch?: boolean;
};
type ContactSchema = {
    email?: EmailSchema;
    phone?: PhoneSchema;
};
type ContentAPIError = {
    code?: string;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
type ContentSchema = {
    type?: string;
    value?: any;
};
type CreateAnnouncementSchema = {
    data?: AdminAnnouncementSchema;
    message?: string;
};
type CreatedBySchema = {
    id?: string;
};
type CreateFaqCategoryRequestSchema = {
    category?: CategoryRequestSchema;
};
type CreateFaqCategorySchema = {
    category?: CategorySchema;
};
type CreateFaqResponseSchema = {
    faq?: FaqSchema;
};
type CreateFaqSchema = {
    faq?: FAQ;
};
type CreateTagRequestSchema = {
    tags?: CreateTagSchema[];
};
type CreateTagSchema = {
    _id?: string;
    attributes?: any;
    content?: string;
    name?: string;
    pages?: any[];
    position?: string;
    sub_type?: string;
    type?: string;
    url?: string;
};
type CronSchedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
};
type CustomMetaTag = {
    _id?: string;
    content?: string;
    name?: string;
};
type CustomPage = {
    data?: CustomPageSchema;
};
type CustomPageSchema = {
    _id?: string;
    _schedule?: ScheduleSchema;
    application?: string;
    content?: any[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    description?: string;
    orientation?: string;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: string[];
    title?: string;
    type?: string;
};
type DataLoaderResetResponseSchema = {
    reset?: string;
};
type DataLoaderResponseSchema = {
    __source?: DataLoaderSourceSchema;
    _id?: string;
    application?: string;
    company?: string;
    content?: string;
    name?: string;
    operation_id?: string;
    service?: string;
    type?: string;
    url?: string;
};
type DataLoaderSchema = {
    __source?: DataLoaderSourceSchema;
    _id?: string;
    content?: string;
    name?: string;
    operation_id?: string;
    service?: string;
    type?: string;
    url?: string;
};
type DataLoaderSourceSchema = {
    id?: string;
    type?: string;
};
type DataLoadersSchema = {
    items?: DataLoaderSchema[];
};
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DefaultNavigationResponse = {
    items?: NavigationSchema[];
};
type Detail = {
    description?: string;
    title?: string;
};
type EditorMeta = {
    background_color?: string;
    content?: string;
    content_type?: string;
    foreground_color?: string;
};
type EmailProperties = {
    key?: string;
    value?: string;
};
type EmailSchema = {
    active?: boolean;
    email?: EmailProperties[];
};
type FAQ = {
    answer?: string;
    question?: string;
    slug?: string;
};
type FAQCategorySchema = {
    _custom_json?: any;
    _id?: string;
    application?: string;
    children?: ChildrenSchema[];
    description?: string;
    icon_url?: string;
    index?: number;
    slug?: string;
    title?: string;
};
type FaqResponseSchema = {
    faqs?: FaqSchema[];
};
type FaqSchema = {
    _id?: string;
    answer?: string;
    application?: string;
    question?: string;
    slug?: string;
    tags?: string[];
};
type FeatureImage = {
    secure_url?: string;
};
type GeneratedSEOContent = {
    description?: string;
    title?: string;
};
type GenerateSEOContent = {
    existing_text?: string;
    keywords?: string[];
    text?: string;
    type?: string;
};
type GetAnnouncementListSchema = {
    items?: AdminAnnouncementSchema[];
    page?: Page;
};
type GetFaqCategoriesSchema = {
    categories?: CategorySchema[];
};
type GetFaqCategoryBySlugSchema = {
    category?: FAQCategorySchema;
};
type GetFaqSchema = {
    faqs?: FaqSchema[];
};
type HandpickedTagSchema = {
    attributes?: any;
    content?: string;
    name?: string;
    position?: string;
    sub_type?: string;
    type?: string;
    url?: string;
};
type LandingPage = {
    data?: LandingPageSchema;
    success?: boolean;
};
type LandingPageGetResponse = {
    items?: LandingPageSchema[];
    page?: Page;
};
type LandingPageSchema = {
    _custom_json?: any;
    _id?: string;
    action?: Action;
    application?: string;
    archived?: boolean;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    platform?: string[];
    slug?: string;
};
type Language = {
    display?: string;
};
type LocaleLanguage = {
    ar?: Language;
    en_us?: Language;
    hi?: Language;
};
type Navigation = {
    _id?: string;
    application?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    name?: string;
    navigation?: NavigationReference;
    orientation?: string;
    platform?: string;
    position?: string;
    slug?: string;
};
type NavigationGetResponse = {
    items?: NavigationSchema[];
    page?: Page;
};
type NavigationReference = {
    _locale_language?: LocaleLanguage;
    acl?: string[];
    action?: Action;
    active?: boolean;
    display?: string;
    image?: string;
    sort_order?: number;
    sub_navigation?: NavigationReference[];
    tags?: string[];
    type?: string;
};
type NavigationRequest = {
    name?: string;
    navigation?: NavigationReference[];
    orientation?: Orientation;
    platform?: string[];
    slug?: string;
};
type NavigationSchema = {
    _id?: string;
    application?: string;
    archived?: boolean;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    name?: string;
    navigation?: NavigationReference[];
    orientation?: Orientation;
    platform?: string[];
    slug?: string;
    version?: number;
};
type NextSchedule = {
    end?: string;
    start?: string;
};
type Orientation = {
    landscape?: string[];
    portrait?: string[];
};
type PageContent = {
    type?: string;
    value?: any;
};
type PageGetResponse = {
    items?: PageSchema[];
    page?: Page;
};
type PageMeta = {
    key?: string;
    value?: any;
};
type PageMetaSchema = {
    application_id?: string;
    custom_pages?: PageSchema[];
    system_pages?: NavigationSchema[];
};
type PagePublishRequest = {
    publish?: boolean;
};
type PageRequest = {
    _custom_json?: any;
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    content?: any[];
    feature_image?: Asset;
    orientation?: string;
    published?: boolean;
    reading_time?: string;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
};
type PageSchema = {
    _custom_json?: any;
    _id?: string;
    _schedule?: ScheduleSchema;
    application?: string;
    archived?: boolean;
    component_ids?: string[];
    content?: any[];
    content_path?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    description?: string;
    feature_image?: Asset;
    orientation?: string;
    page_meta?: any[];
    platform?: string;
    published?: boolean;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
    type?: string;
    visibility?: any;
};
type PageSpec = {
    specifications?: any[];
};
type PageSpecItem = {
    display_name?: string;
    page_type?: string;
    params?: PageSpecParam[];
    query?: PageSpecParam[];
};
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
type PathMappingSchema = {
    __source?: PathSourceSchema;
    _id?: string;
    application?: string;
    created_at?: string;
    redirect_from?: string;
    redirect_to?: string;
    updated_at?: string;
};
type PathSourceSchema = {
    id?: string;
    type?: string;
};
type PhoneProperties = {
    code?: string;
    key?: string;
    number?: string;
};
type PhoneSchema = {
    active?: boolean;
    phone?: PhoneProperties[];
};
type RemoveHandpickedSchema = {
    tags?: string[];
};
type ResourceContent = {
    type?: string;
    value?: string;
};
type ScheduleSchema = {
    cron?: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    start?: string;
};
type ScheduleStartSchema = {
    end?: string;
    start?: string;
};
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
};
type SeoComponent = {
    seo?: SeoSchema;
};
type SEOImage = {
    url?: string;
};
type SeoSchema = {
    _id?: string;
    app?: string;
    cannonical_enabled?: boolean;
    created_at?: string;
    custom_meta_tags?: any[];
    details?: Detail;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    updated_at?: string;
};
type Slideshow = {
    data?: SlideshowSchema;
    success?: boolean;
};
type SlideshowGetResponse = {
    items?: SlideshowSchema[];
    page?: Page;
};
type SlideshowMedia = {
    action?: Action;
    auto_decide_duration?: boolean;
    bg_color?: string;
    duration?: number;
    type?: string;
    url?: string;
};
type SlideshowRequest = {
    active?: boolean;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia;
    platform?: string;
    slug?: string;
};
type SlideshowSchema = {
    _custom_json?: any;
    _id?: string;
    active?: boolean;
    application?: string;
    archived?: boolean;
    configuration?: ConfigurationSchema;
    date_meta?: DateMeta;
    media?: SlideshowMedia[];
    platform?: string;
    slug?: string;
};
type Support = {
    _id?: string;
    application?: string;
    config_type?: string;
    contact?: ContactSchema;
    created?: boolean;
    created_at?: string;
    updated_at?: string;
};
type TagDeleteSuccessResponse = {
    success?: boolean;
};
type TagSchema = {
    __source?: TagSourceSchema;
    _id?: string;
    attributes?: any;
    content?: string;
    name?: string;
    pages?: any[];
    position?: string;
    sub_type?: string;
    type?: string;
    url?: string;
};
type TagSourceSchema = {
    id?: string;
    type?: string;
};
type TagsSchema = {
    _id?: string;
    application?: string;
    tags?: TagSchema[];
};
type UpdateFaqCategoryRequestSchema = {
    category?: CategorySchema;
};
type UpdateHandpickedSchema = {
    tag?: HandpickedTagSchema;
};
type CancelSubscriptionReq = {
    product_suite?: string;
    subscription_id?: string;
    type?: string;
    unique_id?: string;
};
type CancelSubscriptionRes = {
    data?: Subscription;
    success?: boolean;
};
type ChargeLineItem = {
    capped_amount?: number;
    is_test?: boolean;
    metadata?: any;
    name: string;
    price: EntityChargePrice;
    pricing_type: string;
    recurring?: EntityChargeRecurring;
    term: string;
    trial_days?: number;
};
type CheckValidityResponse = {
    discount_amount?: number;
    is_valid?: boolean;
};
type CreateOneTimeCharge = {
    charge: OneTimeChargeItem;
    is_test?: boolean;
    name: string;
    return_url: string;
};
type CreateOneTimeChargeResponse = {
    charge?: OneTimeChargeEntity;
    confirm_url?: string;
};
type CreateSubscriptionCharge = {
    is_test?: boolean;
    line_items: ChargeLineItem[];
    name: string;
    return_url: string;
    trial_days?: number;
};
type CreateSubscriptionResponse = {
    confirm_url?: string;
    subscription?: EntitySubscription;
};
type CurrentPeriod = {
    end_date?: string;
    start_date?: string;
};
type DetailedPlan = {
    _id?: string;
    addons?: string[];
    amount?: number;
    components?: DetailedPlanComponents[];
    country?: string;
    created_at?: string;
    currency?: string;
    description?: string;
    is_active?: boolean;
    is_trial_plan?: boolean;
    is_visible?: boolean;
    modified_at?: string;
    name?: string;
    plan_group?: string;
    product_suite_id?: string;
    recurring?: PlanRecurring;
    tag_lines?: string[];
    tags?: string[];
    trial_period?: number;
    type?: string;
};
type DetailedPlanComponents = {
    description?: string;
    display_text?: string;
    enabled?: boolean;
    group?: string;
    icon?: string;
    links?: any;
    name?: string;
    slug?: string;
};
type EntityChargePrice = {
    amount: number;
    currency_code: string;
};
type EntityChargeRecurring = {
    interval: string;
};
type EntitySubscription = {
    _id?: string;
    activated_on?: string;
    cancelled_on?: string;
    company_id?: number;
    line_items?: SubscriptionCharge[];
    metadata?: any;
    name?: string;
    status?: string;
    trial_days?: number;
    trial_period?: SubscriptionTrialPeriod;
};
type InternalServerError = {
    code?: string;
    message?: string;
};
type Invoice = {
    invoice?: InvoiceDetails;
    invoice_items?: InvoiceItems[];
};
type InvoiceDetails = {
    _id?: string;
    attemp?: number;
    auto_advance?: boolean;
    client?: InvoiceDetailsClient;
    collection_method?: string;
    created_at?: string;
    currency?: string;
    current_status?: string;
    hash_identifier?: string;
    invoice_url?: string;
    modified_at?: string;
    next_action_time?: string;
    number?: string;
    paid?: boolean;
    payment_method?: InvoicePaymentMethod;
    period?: InvoiceDetailsPeriod;
    pg_data?: any;
    receipt_number?: string;
    statement_descriptor?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subscriber_id?: string;
    subscription?: string;
    subtotal?: number;
    total?: number;
};
type InvoiceDetailsClient = {
    address_lines?: string[];
    email?: string;
    name?: string;
    phone?: string;
};
type InvoiceDetailsPaymentMethods = {
    data?: InvoiceDetailsPaymentMethodsData;
    id?: number;
    is_default?: boolean;
    pg_payment_method_id?: string;
    type?: string;
};
type InvoiceDetailsPaymentMethodsData = {
    brand?: string;
    checks?: InvoiceDetailsPaymentMethodsDataChecks;
    country?: string;
    exp_month?: number;
    exp_year?: number;
    fingerprint?: string;
    funding?: string;
    generated_from?: string;
    last4?: string;
    networks?: InvoiceDetailsPaymentMethodsDataNetworks;
    three_d_secure_usage?: InvoiceDetailsPaymentMethodsDataThreeDSecureUsage;
    wallet?: string;
};
type InvoiceDetailsPaymentMethodsDataChecks = {
    address_line1_check?: string;
    address_postal_code_check?: string;
    cvc_check?: string;
};
type InvoiceDetailsPaymentMethodsDataNetworks = {
    available?: string[];
    preferred?: string;
};
type InvoiceDetailsPaymentMethodsDataThreeDSecureUsage = {
    supported?: boolean;
};
type InvoiceDetailsPeriod = {
    end?: string;
    start?: string;
};
type InvoiceDetailsStatusTrail = {
    _id?: string;
    timestamp?: string;
    value?: string;
};
type InvoiceItems = {
    _id?: string;
    amount?: number;
    created_at?: string;
    currency?: string;
    description?: string;
    invoice_id?: string;
    modified_at?: string;
    name?: string;
    period?: InvoiceItemsPeriod;
    plan?: InvoiceItemsPlan;
    quantity?: number;
    type?: string;
    unit_amount?: number;
};
type InvoiceItemsPeriod = {
    end?: string;
    start?: string;
};
type InvoiceItemsPlan = {
    _id?: string;
    addons?: string[];
    amount?: number;
    country?: string;
    created_at?: string;
    currency?: string;
    description?: string;
    is_active?: boolean;
    is_trial_plan?: boolean;
    is_visible?: boolean;
    modified_at?: string;
    name?: string;
    plan_group?: string;
    product_suite_id?: string;
    recurring?: InvoiceItemsPlanRecurring;
    tag_lines?: string[];
    tags?: string[];
    trial_period?: number;
    type?: string;
};
type InvoiceItemsPlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type InvoicePaymentMethod = {
    pg_payment_method_id?: string;
};
type Invoices = {
    data?: InvoicesData[];
    end?: number;
    limit?: number;
    page?: number;
    start?: number;
    total?: number;
};
type InvoicesData = {
    _id?: string;
    attemp?: number;
    auto_advance?: boolean;
    client?: InvoicesDataClient;
    collection_method?: string;
    created_at?: string;
    currency?: string;
    current_status?: string;
    hash_identifier?: string;
    invoice_items?: InvoiceItems[];
    invoice_url?: string;
    modified_at?: string;
    next_action_time?: string;
    number?: string;
    paid?: boolean;
    payment_method?: InvoicesDataPaymentMethod;
    period?: InvoicesDataPeriod;
    pg_data?: any;
    receipt_number?: string;
    statement_descriptor?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subscriber_id?: string;
    subscription?: string;
    subtotal?: number;
    total?: number;
};
type InvoicesDataClient = {
    address_lines?: string[];
    email?: string;
    name?: string;
    phone?: string;
};
type InvoicesDataPaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoicesDataPeriod = {
    end?: string;
    start?: string;
};
type OneTimeChargeEntity = {
    _id?: string;
    activated_on?: string;
    cancelled_on?: string;
    entity_id?: string;
    entity_type?: string;
    is_test?: boolean;
    meta?: any;
    metadata?: any;
    name?: string;
    price?: EntityChargePrice;
    pricing_type?: string;
    return_url?: string;
    status?: string;
    subscriber_id?: string;
};
type OneTimeChargeItem = {
    capped_amount?: number;
    is_test?: boolean;
    metadata?: any;
    name: string;
    price: EntityChargePrice;
    pricing_type: string;
    term?: string;
};
type Phone = {
    phone_country_code?: string;
    phone_number?: string;
};
type Plan = {
    _id?: string;
    addons?: string[];
    amount?: number;
    country?: string;
    created_at?: string;
    currency?: string;
    description?: string;
    is_active?: boolean;
    is_trial_plan?: boolean;
    is_visible?: boolean;
    modified_at?: string;
    name?: string;
    plan_group?: string;
    product_suite_id?: string;
    recurring?: PlanRecurring;
    tag_lines?: string[];
    tags?: string[];
    trial_period?: number;
    type?: string;
};
type PlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type ResourceNotFound = {
    message?: string;
};
type Subscription = {
    _id?: string;
    cancel_at_period_end?: boolean;
    collection_method?: string;
    created_at?: string;
    current_period?: SubscriptionCurrentPeriod;
    current_status?: string;
    invoice_settings?: SubscriptionInvoiceSettings;
    is_active?: boolean;
    latest_invoice?: string;
    modified_at?: string;
    pause_collection?: SubscriptionPauseCollection;
    plan_data?: Plan;
    plan_id?: string;
    product_suite_id?: string;
    subscriber_id?: string;
    trial?: SubscriptionTrial;
};
type SubscriptionActivateReq = {
    payment_method?: string;
    plan_id?: string;
    product_suite?: string;
    type?: string;
    unique_id?: string;
};
type SubscriptionActivateRes = {
    data?: Subscription;
    success?: boolean;
};
type SubscriptionBillingAddress = {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
    state?: string;
};
type SubscriptionCharge = {
    _id?: string;
    activated_on?: string;
    billing_date?: string;
    cancelled_on?: string;
    capped_amount?: number;
    current_period?: CurrentPeriod;
    is_test?: boolean;
    metadata?: any;
    name?: string;
    price?: EntityChargePrice;
    pricing_type?: string;
    recurring?: EntityChargeRecurring;
    status?: string;
    term?: string;
};
type SubscriptionCurrentPeriod = {
    end?: string;
    start?: string;
};
type SubscriptionCustomer = {
    _id?: string;
    billing_address?: SubscriptionBillingAddress;
    created_at?: string;
    credit_balance?: number;
    data?: any;
    email?: string;
    modified_at?: string;
    name?: string;
    phone?: Phone;
    type?: string;
    unique_id?: string;
};
type SubscriptionCustomerCreate = {
    billing_address?: SubscriptionBillingAddress;
    email?: string;
    name?: string;
    phone?: Phone;
    type?: string;
    unique_id?: string;
};
type SubscriptionInvoiceSettings = {
    charging?: boolean;
    generation?: boolean;
};
type SubscriptionLimit = {
    application?: SubscriptionLimitApplication;
    extensions?: SubscriptionLimitExtensions;
    integrations?: SubscriptionLimitIntegrations;
    is_trial_plan?: boolean;
    marketplace?: SubscriptionLimitMarketplace;
    other_platform?: SubscriptionLimitOtherPlatform;
    products?: SubscriptionLimitProducts;
    team?: SubscriptionLimitTeam;
};
type SubscriptionLimitApplication = {
    enabled?: boolean;
    hard_limit?: number;
    soft_limit?: number;
};
type SubscriptionLimitExtensions = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimitIntegrations = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimitMarketplace = {
    enabled?: boolean;
};
type SubscriptionLimitOtherPlatform = {
    enabled?: boolean;
};
type SubscriptionLimitProducts = {
    bulk?: boolean;
    limit?: number;
};
type SubscriptionLimitTeam = {
    limit?: number;
};
type SubscriptionPauseCollection = {
    behavior?: string;
    resume_at?: string;
};
type SubscriptionStatus = {
    is_enabled?: boolean;
    mandate_amount?: number;
    subscription?: Subscription;
};
type SubscriptionTrial = {
    end?: string;
    start?: string;
};
type SubscriptionTrialPeriod = {
    end_date?: string;
    start_date?: string;
};
type UnauthenticatedApplication = {
    message?: string;
};
type UnauthenticatedUser = {
    message?: string;
};
type Audience = {
    __v?: number;
    _id?: string;
    application?: string;
    created_at?: string;
    description?: string;
    file_url?: string;
    headers?: string[];
    is_active?: boolean;
    name?: string;
    records_count?: number;
    slug?: string;
    tags?: string[];
    type?: string;
    updated_at?: string;
};
type AudienceReq = {
    application?: string;
    description?: string;
    file_url?: string;
    headers?: string[];
    is_active?: boolean;
    name?: string;
    records_count?: number;
    tags?: string[];
    type?: string;
};
type Audiences = {
    items?: Audience[];
    page?: Page;
};
type BadRequestSchema = {
    message?: string;
    status?: string;
};
type BigqueryHeadersReq = {
    query?: string;
    type?: string;
};
type BigqueryHeadersRes = {
    headers?: BigqueryHeadersResHeaders[];
};
type BigqueryHeadersResHeaders = {
    name?: string;
    type?: string;
};
type Campaign = {
    __v?: number;
    _id?: string;
    application?: string;
    created_at?: string;
    datasource?: string;
    description?: string;
    email?: CampaignEmail;
    is_active?: boolean;
    name?: string;
    recipient_headers?: RecipientHeaders;
    slug?: string;
    tags?: any[];
    type?: string;
    updated_at?: string;
};
type CampaignEmail = {
    provider?: CampignEmailProvider;
    template?: CampaignEmailTemplate;
};
type CampaignEmailTemplate = {
    key?: string;
    value?: string;
};
type CampaignReq = {
    application?: string;
    description?: string;
    file_url?: string;
    headers?: string[];
    is_active?: boolean;
    name?: string;
    records_count?: number;
    tags?: string[];
    type?: string;
};
type Campaigns = {
    items?: Campaign[];
    page?: Page;
};
type CampignEmailProvider = {
    _id?: string;
    from_email?: string;
    from_name?: string;
};
type EmailProvider = {
    __v?: number;
    _id?: string;
    api_key?: string;
    application?: string;
    created_at?: string;
    description?: string;
    from_address?: EmailProviderReqFrom[];
    name?: string;
    provider?: string;
    slug?: string;
    type?: string;
    updated_at?: string;
};
type EmailProviderReq = {
    api_key?: string;
    description?: string;
    from_address?: EmailProviderReqFrom[];
    name?: string;
    provider?: string;
    type?: string;
};
type EmailProviderReqFrom = {
    email?: string;
    is_default?: boolean;
    name?: string;
};
type EmailProviders = {
    items?: EmailProvider[];
    page?: Page;
};
type EmailTemplate = {
    __v?: number;
    _id?: string;
    attachments?: any[];
    created_at?: string;
    description?: string;
    from_name?: string;
    headers?: any[];
    html?: TemplateAndType;
    is_internal?: boolean;
    is_system?: boolean;
    name?: string;
    priority?: string;
    published?: boolean;
    slug?: string;
    static_bcc?: any[];
    static_cc?: any[];
    static_to?: any[];
    subject?: TemplateAndType;
    tags?: any[];
    text?: TemplateAndType;
    updated_at?: string;
};
type EmailTemplateDeleteFailureRes = {
    message?: string;
    success?: boolean;
};
type EmailTemplateDeleteSuccessRes = {
    message?: string;
    success?: boolean;
};
type EmailTemplateHeaders = {
    key?: string;
    value?: string;
};
type EmailTemplateKeys = {
    bcc?: string;
    cc?: string;
    to?: string;
};
type EmailTemplateReq = {
    attachments?: any[];
    description?: string;
    headers?: EmailTemplateHeaders[];
    html?: TemplateAndType;
    keys?: EmailTemplateKeys;
    name?: string;
    priority?: string;
    reply_to?: string;
    static_bcc?: string[];
    static_cc?: string[];
    static_to?: string[];
    subject?: TemplateAndType;
    text?: TemplateAndType;
};
type EmailTemplateRes = {
    __v?: number;
    _id?: string;
    attachments?: any[];
    created_at?: string;
    description?: string;
    headers?: EmailTemplateHeaders[];
    html?: TemplateAndType;
    is_internal?: boolean;
    is_system?: boolean;
    keys?: EmailTemplateKeys;
    name?: string;
    priority?: string;
    published?: boolean;
    reply_to?: string;
    slug?: string;
    static_bcc?: string[];
    static_cc?: string[];
    static_to?: string[];
    subject?: TemplateAndType;
    tags?: any[];
    text?: TemplateAndType;
    updated_at?: string;
};
type EmailTemplates = {
    items?: EmailTemplate[];
    page?: Page;
};
type EngineRequest = {
    meta?: MetaStructure;
    payload?: PayloadStructure;
};
type EngineResponse = {
    success?: boolean;
};
type EventSubscription = {
    __v?: number;
    _id?: string;
    application?: string;
    created_at?: string;
    event?: string;
    is_default?: boolean;
    slug?: string;
    template?: EventSubscriptionTemplate;
    updated_at?: string;
};
type EventSubscriptions = {
    items?: EventSubscription[];
    page?: Page;
};
type EventSubscriptionTemplate = {
    email?: EventSubscriptionTemplateEmail;
    sms?: EventSubscriptionTemplateSms;
};
type EventSubscriptionTemplateEmail = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplateSms = {
    subscribed?: boolean;
    template?: string;
};
type GetNRecordsCsvReq = {
    count?: number;
    header?: boolean;
    url?: string;
};
type GetNRecordsCsvRes = {
    items?: GetNRecordsCsvResItems[];
};
type GetNRecordsCsvResItems = {
    email?: string;
    firstname?: string;
    lastname?: string;
    orderid?: string;
    phone_number?: string;
};
type GetStats = {
    items?: Stats[];
};
type Job = {
    __v?: number;
    _id?: string;
    application?: string;
    campaign?: string;
    completed?: boolean;
    created_at?: string;
    is_active?: boolean;
    updated_at?: string;
};
type JobLog = {
    __v?: number;
    _id?: string;
    campaign?: string;
    created_at?: string;
    imported?: any;
    job?: string;
    processed?: any;
    updated_at?: string;
};
type JobLogs = {
    items?: JobLog[];
    page?: Page;
};
type Jobs = {
    items?: Job[];
    page?: Page;
};
type Log = {
    _id?: string;
    application?: string;
    created_at?: string;
    data?: any;
    email?: LogEmail;
    expire_at?: string;
    meta?: LogMeta;
    pushnotification?: LogPushnotification;
    service?: string;
    status?: string;
    step?: string;
};
type LogEmail = {
    template?: string;
};
type LogMeta = {
    identifier?: string;
    key?: string;
    offset?: string;
    partition?: string;
    topic?: string;
    type?: string;
};
type LogPushnotification = {
    pushtokens?: string[];
};
type Logs = {
    items?: Log[];
    page?: Page;
};
type MetaStructure = {
    action?: string;
    job_type?: string;
    timestamp?: string;
    trace?: string;
};
type Notification = {
    body?: string;
    click_action?: string;
    deeplink?: string;
    icon?: string;
    subtitle?: string;
    title?: string;
};
type PayloadEmailProviderStructure = {
    _id?: string;
};
type PayloadEmailStructure = {
    provider?: PayloadEmailProviderStructure;
    template?: PayloadEmailTemplateStructure;
};
type PayloadEmailTemplateStructure = {
    key?: string;
    value?: any;
};
type PayloadSmsProviderStructure = {
    _id?: string;
};
type PayloadSmsStructure = {
    provider?: PayloadSmsProviderStructure;
    template?: PayloadSmsTemplateStructure;
};
type PayloadSmsTemplateStructure = {
    key?: string;
    value?: any;
};
type PayloadStructure = {
    application?: string;
    data?: any[];
    email?: PayloadEmailStructure;
    sms?: PayloadSmsStructure;
};
type PushtokenReq = {
    action?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
};
type PushtokenRes = {
    _id?: string;
    application_id?: string;
    bundle_identifier?: string;
    created_at?: string;
    expired_at?: string;
    platform?: string;
    push_token?: string;
    type?: string;
    unique_device_id?: string;
    updated_at?: string;
    user_id?: string;
};
type RecipientHeaders = {
    email?: string;
};
type SendOtpCommsReq = {
    data?: SendOtpCommsReqData;
    email?: SendOtpCommsReqEmail;
    sms?: SendOtpCommsReqSms;
};
type SendOtpCommsReqData = {
    country_code?: string;
    mobile?: string;
    send_same_otp_to_channel?: boolean;
    to?: string;
};
type SendOtpCommsReqEmail = {
    expiry?: number;
    otp_length?: number;
    template?: SendOtpEmailCommsTemplate;
};
type SendOtpCommsReqSms = {
    expiry?: number;
    otp_length?: number;
    provider?: SendOtpSmsCommsProvider;
    template?: SendOtpSmsCommsTemplate;
};
type SendOtpCommsRes = {
    email?: SendOtpCommsResEmail;
    sms?: SendOtpCommsResSms;
};
type SendOtpCommsResEmail = {
    message?: string;
    request_id?: string;
    resend_timer?: number;
    success?: boolean;
    to?: string;
};
type SendOtpCommsResSms = {
    country_code?: string;
    message?: string;
    mobile?: string;
    request_id?: string;
    resend_timer?: number;
    success?: boolean;
};
type SendOtpEmailCommsTemplate = {
    key?: string;
    value?: any;
};
type SendOtpSmsCommsProvider = {
    _id?: string;
    slug?: string;
};
type SendOtpSmsCommsTemplate = {
    key?: string;
    value?: any;
};
type SmsProvider = {
    __v?: number;
    _id?: string;
    application?: string;
    authkey?: string;
    created_at?: string;
    description?: string;
    name?: string;
    provider?: string;
    rpt?: number;
    sender?: string;
    slug?: string;
    type?: string;
    updated_at?: string;
    username?: string;
};
type SmsProviderReq = {
    authkey?: string;
    description?: string;
    name?: string;
    provider?: string;
    sender?: string;
    type?: string;
    username?: string;
};
type SmsProviders = {
    items?: SmsProvider[];
    page?: Page;
};
type SmsTemplate = {
    __v?: number;
    _id?: string;
    created_at?: string;
    description?: string;
    is_internal?: boolean;
    is_system?: boolean;
    message?: SmsTemplateMessage;
    name?: string;
    priority?: string;
    published?: boolean;
    slug?: string;
    tags?: any[];
    template_variables?: any;
    updated_at?: string;
};
type SmsTemplateDeleteFailureRes = {
    message?: string;
    success?: boolean;
};
type SmsTemplateDeleteSuccessRes = {
    message?: string;
    success?: boolean;
};
type SmsTemplateMessage = {
    template?: string;
    template_type?: string;
};
type SmsTemplateReq = {
    attachments?: any[];
    description?: string;
    message?: SmsTemplateMessage;
    name?: string;
    priority?: string;
    template_variables?: any;
};
type SmsTemplateRes = {
    __v?: number;
    _id?: string;
    created_at?: string;
    description?: string;
    is_internal?: boolean;
    is_system?: boolean;
    message?: SmsTemplateMessage;
    name?: string;
    priority?: string;
    published?: boolean;
    slug?: string;
    tags?: any[];
    template_variables?: any;
    updated_at?: string;
};
type SmsTemplates = {
    items?: SmsTemplate[];
    page?: Page;
};
type Stats = {
    _id?: string;
    imported?: any;
    processed?: any;
};
type StatsImported = {
    count?: number;
};
type StatsProcessed = {
    email?: StatsProcessedEmail;
    sms?: StatsProcessedSms;
};
type StatsProcessedEmail = {
    failed?: number;
    success?: number;
    suppressed?: number;
};
type StatsProcessedSms = {
    failed?: number;
    success?: number;
    suppressed?: number;
};
type SystemEmailTemplate = {
    __v?: number;
    _id?: string;
    attachments?: any[];
    created_at?: string;
    description?: string;
    from_name?: string;
    headers?: any[];
    html?: TemplateAndType;
    is_internal?: boolean;
    is_system?: boolean;
    name?: string;
    priority?: string;
    published?: boolean;
    slug?: string;
    static_bcc?: any[];
    static_cc?: any[];
    static_to?: any[];
    subject?: TemplateAndType;
    tags?: any[];
    text?: TemplateAndType;
    updated_at?: string;
};
type SystemEmailTemplates = {
    items?: SystemEmailTemplate[];
    page?: Page;
};
type SystemNotification = {
    _id?: string;
    created_at?: string;
    group?: string;
    notification?: Notification;
    settings?: SystemNotificationUser;
    user?: SystemNotificationUser;
};
type SystemNotifications = {
    items?: SystemNotification[];
    last_read_anchor?: number;
    page?: Page;
};
type SystemNotificationSettings = {
    priority?: string;
    sound?: boolean;
    time_to_live?: string;
};
type SystemNotificationsPage = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
type SystemNotificationUser = {
    type?: string;
    value?: string;
};
type SystemSmsTemplate = {
    __v?: number;
    _id?: string;
    created_at?: string;
    description?: string;
    is_internal?: boolean;
    is_system?: boolean;
    message?: SmsTemplateMessage;
    name?: string;
    priority?: string;
    published?: boolean;
    slug?: string;
    tags?: any[];
    template_variables?: any;
    updated_at?: string;
};
type SystemSmsTemplates = {
    items?: SystemSmsTemplate[];
    page?: Page;
};
type TemplateAndType = {
    template?: string;
    template_type?: string;
};
type TriggerJobRequest = {
    job_id?: string;
};
type TriggerJobResponse = {
    status?: number;
};
type VerifyOtpCommsErrorRes = {
    message?: string;
    success?: boolean;
};
type VerifyOtpCommsReq = {
    otp?: string;
    request_id?: string;
};
type VerifyOtpCommsSuccessRes = {
    country_code?: string;
    message?: string;
    mobile?: string;
    success?: boolean;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type BankDetailsForOTP = {
    account_holder: string;
    account_no: string;
    bank_name: string;
    branch_name: string;
    ifsc_code: string;
};
type CODdata = {
    is_active: boolean;
    limit: number;
    remaining_limit: number;
    usages: number;
    user_id: string;
};
type DeletePayoutResponse = {
    success: boolean;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type EdcAddRequest = {
    aggregator_id: number;
    device_tag?: string;
    edc_device_serial_no: string;
    edc_model: string;
    store_id: number;
    terminal_serial_no: string;
};
type EdcAggregatorAndModelListResponse = {
    data: EdcModelData[];
    success: boolean;
};
type EdcDevice = {
    aggregator_id: number;
    aggregator_name?: string;
    application_id: string;
    device_tag: string;
    edc_device_serial_no: string;
    edc_model?: string;
    is_active: boolean;
    merchant_store_pos_code?: string;
    store_id: number;
    terminal_serial_no: string;
    terminal_unique_identifier: string;
};
type EdcDeviceAddResponse = {
    data: EdcDevice;
    success: boolean;
};
type EdcDeviceDetailsResponse = {
    data: EdcDevice;
    success: boolean;
};
type EdcDeviceListResponse = {
    items: EdcDevice[];
    page: Page;
    success: boolean;
};
type EdcDeviceStatsResponse = {
    statistics: StatisticsData;
    success: boolean;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcModelData = {
    aggregator: string;
    aggregator_id: number;
    models: string[];
};
type EdcUpdateRequest = {
    aggregator_id?: number;
    device_tag?: string;
    edc_device_serial_no?: string;
    edc_model?: string;
    is_active?: boolean;
    merchant_store_pos_code?: string;
    store_id?: number;
};
type ErrorCodeAndDescription = {
    code: string;
    description: string;
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
};
type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
    success: boolean;
};
type IfscCodeResponse = {
    bank_name: string;
    branch_name: string;
    success?: boolean;
};
type IntentApp = {
    code?: string;
    display_name?: string;
    logos?: PaymentModeLogo;
    package_name?: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type LinkStatus = {
    message: string;
    status: boolean;
};
type MultiTenderPaymentMeta = {
    current_status?: string;
    extra_meta?: any;
    order_id?: string;
    payment_gateway?: string;
    payment_id?: string;
};
type MultiTenderPaymentMethod = {
    amount: number;
    meta?: MultiTenderPaymentMeta;
    mode: string;
    name?: string;
};
type NotFoundResourceError = {
    code: string;
    description: string;
    success: boolean;
};
type OrderBeneficiaryDetails = {
    account_holder: string;
    account_no: string;
    address: string;
    bank_name: string;
    beneficiary_id: string;
    branch_name?: string;
    comment?: string;
    created_on: string;
    delights_user_name?: string;
    display_name: string;
    email: string;
    id: number;
    ifsc_code: string;
    is_active: boolean;
    mobile?: string;
    modified_on: string;
    subtitle: string;
    title: string;
    transfer_mode: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    message: string;
    order_id: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    config_type: string;
    is_active?: boolean;
    key: string;
    merchant_salt: string;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
    is_active?: boolean;
};
type PaymentGatewayConfigResponse = {
    aggregators?: any[];
    app_id: string;
    created: boolean;
    display_fields: string[];
    excluded_fields: string[];
    success: boolean;
};
type PaymentGatewayToBeReviewed = {
    aggregator: string[];
    success: boolean;
};
type PaymentInitializationRequest = {
    aggregator: string;
    amount: number;
    contact: string;
    currency: string;
    customer_id: string;
    device_id?: string;
    email: string;
    merchant_order_id: string;
    method: string;
    order_id: string;
    razorpay_payment_id?: string;
    timeout?: number;
    vpa?: string;
};
type PaymentInitializationResponse = {
    aggregator: string;
    aggregator_order_id?: string;
    amount?: number;
    bqr_image?: string;
    contact?: string;
    currency?: string;
    customer_id?: string;
    device_id?: string;
    email?: string;
    merchant_order_id: string;
    method: string;
    order_id?: string;
    payment_id?: string;
    polling_url: string;
    razorpay_payment_id?: string;
    status?: string;
    success: boolean;
    timeout?: number;
    upi_poll_url?: string;
    virtual_id?: string;
    vpa?: string;
};
type PaymentModeList = {
    aggregator_name: string;
    card_brand?: string;
    card_brand_image?: string;
    card_fingerprint?: string;
    card_id?: string;
    card_isin?: string;
    card_issuer?: string;
    card_name?: string;
    card_number?: string;
    card_reference?: string;
    card_token?: string;
    card_type?: string;
    cod_limit?: number;
    cod_limit_per_order?: number;
    code?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    display_name?: string;
    display_priority?: number;
    exp_month?: number;
    exp_year?: number;
    expired?: boolean;
    fynd_vpa?: string;
    intent_app?: IntentApp[];
    intent_app_error_dict_list?: IntentAppErrorList[];
    intent_app_error_list?: string[];
    intent_flow?: boolean;
    logo_url?: PaymentModeLogo;
    merchant_code?: string;
    name?: string;
    nickname?: string;
    remaining_limit?: number;
    retry_count?: number;
    timeout?: number;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PaymentStatusUpdateRequest = {
    aggregator: string;
    amount: number;
    contact?: string;
    currency?: string;
    customer_id: string;
    device_id?: string;
    email?: string;
    merchant_order_id: string;
    method: string;
    order_id?: string;
    payment_id?: string;
    razorpay_payment_id?: string;
    status: string;
    vpa?: string;
};
type PaymentStatusUpdateResponse = {
    aggregator_name: string;
    redirect_url?: string;
    retry: boolean;
    status: string;
    success?: boolean;
};
type Payout = {
    customers: PayoutCustomer;
    is_active: boolean;
    is_default: boolean;
    more_attributes: PayoutMoreAttributes;
    payouts_aggregators?: PayoutAggregator[];
    transfer_type: string;
    unique_transfer_no: string;
};
type PayoutAggregator = {
    aggregator_fund_id?: number;
    aggregator_id?: number;
    payout_details_id?: number;
};
type PayoutBankDetails = {
    account_holder?: string;
    account_no?: string;
    account_type: string;
    bank_name?: string;
    branch_name?: string;
    city?: string;
    country?: string;
    ifsc_code: string;
    pincode?: number;
    state?: string;
};
type PayoutCustomer = {
    id?: number;
    mobile?: string;
    name?: string;
    unique_external_id?: string;
};
type PayoutMoreAttributes = {
    account_holder?: string;
    account_no?: string;
    account_type?: string;
    bank_name?: string;
    branch_name?: string;
    city?: string;
    country?: string;
    ifsc_code?: string;
    state?: string;
};
type PayoutRequest = {
    aggregator: string;
    bank_details: PayoutBankDetails;
    is_active: boolean;
    transfer_type: string;
    unique_external_id: string;
    users: any;
};
type PayoutResponse = {
    aggregator: string;
    bank_details: any;
    created: boolean;
    is_active: boolean;
    payment_status: string;
    payouts: any;
    success: boolean;
    transfer_type: string;
    unique_transfer_no: string;
    users: any;
};
type PayoutsResponse = {
    items: Payout[];
    success: boolean;
};
type PlatformPaymentOptions = {
    anonymous_cod?: boolean;
    callback_url?: any;
    cod_amount_limit?: number;
    cod_charges?: number;
    enabled: boolean;
    methods: any;
    mode_of_payment: string;
    payment_selection_lock?: any;
    source: string;
};
type PlatfromPaymentConfig = {
    data: PlatformPaymentOptions;
    message: string;
    success: boolean;
};
type RefundAccountResponse = {
    data?: any;
    is_verified_flag?: boolean;
    message: string;
    success: boolean;
};
type ResendOrCancelPaymentRequest = {
    device_id?: string;
    order_id: string;
    request_type: string;
};
type ResendOrCancelPaymentResponse = {
    data: LinkStatus;
    success: boolean;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    aggregator_name?: string;
    anonymous_enable?: boolean;
    display_name: string;
    display_priority: number;
    is_pay_by_card_pl?: boolean;
    list?: PaymentModeList[];
    name: string;
    save_card?: boolean;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    data: any;
    success: boolean;
};
type SetCODForUserRequest = {
    is_active: boolean;
    merchant_user_id: string;
    mobileno: string;
};
type SetCODOptionResponse = {
    message: string;
    success: boolean;
};
type StatisticsData = {
    active_device_count: number;
    inactive_device_count: number;
};
type SubscriptionConfigResponse = {
    aggregator: string;
    config: any;
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    data: any[];
    success: boolean;
};
type UpdatePayoutRequest = {
    is_active: boolean;
    is_default: boolean;
    unique_external_id: string;
};
type UpdatePayoutResponse = {
    is_active: boolean;
    is_default: boolean;
    success: boolean;
};
type UpdatePlatformPaymentConfig = {
    anonymous_cod?: boolean;
    cod_amount_limit?: number;
    cod_charges?: number;
    methods: any;
    payment_selection_lock?: any;
};
type BrowseResponse = {
    items: DbRecord[];
    page: Page;
};
type BulkRequest = {
    configuration?: ReqConfiguration;
    destination: Destination;
    urls: string[];
};
type BulkUploadResponse = {
    task: CopyFileTask;
    tracking_url: string;
};
type CDN = {
    absolute_url?: string;
    relative_url?: string;
    url: string;
};
type CompleteResponse = {
    _id: string;
    cdn: CDN;
    content_type: string;
    created_on: string;
    file_name: string;
    file_path: string;
    modified_on: string;
    namespace: string;
    operation: string;
    size: number;
    success: boolean;
    tags?: string[];
    upload: Upload;
};
type CopyFileTask = {
    attempts_made: number;
    data: BulkRequest;
    delay: number;
    finished_on: number;
    id: string;
    name: string;
    opts: Opts;
    processed_on: number;
    progress: number;
    stacktrace?: string[];
    timestamp: number;
};
type DbRecord = {
    _id: string;
    cdn: CDN;
    content_type: string;
    created_on: string;
    file_name: string;
    file_path: string;
    modified_on: string;
    namespace: string;
    operation?: string;
    success: boolean;
    tags: string[];
    upload: Upload;
};
type Destination = {
    basepath?: string;
    namespace: string;
    rewrite: string;
};
type FailedResponse = {
    message: string;
};
type Opts = {
    attempts?: number;
    delay?: number;
    timestamp?: number;
};
type ReqConfiguration = {
    concurrency?: number;
};
type SignUrlRequest = {
    expiry: number;
    urls: string[];
};
type SignUrlResponse = {
    urls: Urls[];
};
type StartRequest = {
    content_type: string;
    file_name: string;
    params?: any;
    size: number;
    tags?: string[];
};
type StartResponse = {
    cdn: CDN;
    content_type: string;
    file_name: string;
    file_path: string;
    method?: string;
    namespace: string;
    operation: string;
    size: number;
    tags?: string[];
    upload: Upload;
};
type Upload = {
    expiry: number;
    url: string;
};
type Urls = {
    expiry: number;
    signed_url: string;
    url: string;
};
type Attribution = {
    campaign_cookie_expiry?: string;
};
type CampaignShortLink = {
    medium?: string;
    source?: string;
};
type ErrorRes = {
    message?: string;
};
type RedirectDevice = {
    link?: string;
    type?: string;
};
type Redirects = {
    android?: RedirectDevice;
    force_web?: boolean;
    ios?: RedirectDevice;
    web?: WebRedirect;
};
type ShortLinkList = {
    items?: ShortLinkRes[];
    page?: Page;
};
type ShortLinkReq = {
    active?: boolean;
    attribution?: Attribution;
    campaign?: CampaignShortLink;
    count?: number;
    enable_tracking?: boolean;
    expire_at?: string;
    hash?: string;
    personalized?: boolean;
    redirects?: Redirects;
    social_media_tags?: SocialMediaTags;
    title: string;
    url: string;
};
type ShortLinkRes = {
    _id?: string;
    active?: boolean;
    app_redirect?: boolean;
    application?: string;
    attribution?: Attribution;
    campaign?: CampaignShortLink;
    count?: number;
    created_at?: string;
    created_by?: string;
    enable_tracking?: boolean;
    expire_at?: string;
    fallback?: string;
    meta?: any;
    personalized?: boolean;
    redirects?: Redirects;
    social_media_tags?: SocialMediaTags;
    title?: string;
    updated_at?: string;
    url?: UrlInfo;
    user_id?: string;
};
type SocialMediaTags = {
    description?: string;
    image?: string;
    title?: string;
};
type UrlInfo = {
    hash?: string;
    original?: string;
    short?: string;
};
type WebRedirect = {
    link?: string;
    type?: string;
};
type ArchiveConfig = {
    archive?: boolean;
    archive_dir?: string;
    delete?: boolean;
};
type Audit = {
    created_by?: string;
    created_on?: string;
    modified_by?: string;
    modified_on?: string;
};
type AWSS3config = {
    access_key?: string;
    archive?: boolean;
    archive_config?: ArchiveConfig;
    archive_path?: string;
    bucket?: string;
    delete?: boolean;
    dir?: string;
    file_regex?: string;
    local_file_path?: string;
    region?: string;
    secret_key?: string;
    unzip?: boolean;
    zip_format?: string;
};
type CatalogMasterConfig = {
    source_slug?: string;
};
type CompanyConfig = {
    company_id?: number;
    delete_quantity_threshold?: number;
    exclude_steps?: number[];
    hidden_closet_keys?: string[];
    open_tags?: any;
    tax_identifiers?: string[];
};
type DataTresholdDTO = {
    min_price?: number;
    period_threshold?: number;
    period_threshold_type?: string;
    period_type_list?: GenericDTO[];
    safe_stock?: number;
};
type DBConfig = {
    dbname?: string;
    driver_class?: string;
    host?: string;
    jdbc_url?: string;
    optional_properties?: any;
    password?: string;
    port?: number;
    procedure?: boolean;
    query?: string;
    username?: string;
    vendor?: string;
};
type DBConnectionProfile = {
    inventory?: string;
};
type DBParamConfig = {
    params?: any;
};
type DefaultHeadersDTO = {
    intf_article_id?: PropBeanDTO;
    price_effective?: PropBeanDTO;
    quantity?: PropBeanDTO;
    store?: PropBeanDTO;
};
type DocMappingConfig = {
    default_headers?: DefaultHeadersDTO;
    junk_data_threshold_count?: number;
    prop_bean_configs?: PropBeanConfig[];
    properties?: any;
    unwind_field?: string;
};
type EmailConfig = {
    archive_config?: ArchiveConfig;
    attachment_mandate?: boolean;
    attachment_regex?: string;
    body_content_regex?: string;
    content_type?: string;
    downloadable_link?: boolean;
    filter_based_on_recepients?: boolean;
    filter_files_after_extraction?: boolean;
    folder_name_hierarchies?: string[];
    host?: string;
    local_dir?: string;
    password?: string;
    password_protected?: boolean;
    pcol?: string;
    properties?: any;
    read_all_unread_mails?: boolean;
    read_from_content?: boolean;
    recepient?: string;
    sender_address?: string;
    subject_line_regex?: string;
    unzip?: boolean;
    username?: string;
    zip_format?: string;
};
type FileConfig = {
    charset?: string;
    data_start_index?: number;
    default_headers?: DefaultHeadersDTO;
    delimiter?: string;
    escape_char?: string;
    file_has_header?: boolean;
    file_type?: string;
    header_array?: string[];
    header_index?: number;
    junk_data_threshold_count?: number;
    line_validity_check?: boolean;
    prop_bean_configs?: PropBeanConfig[];
    properties?: any;
    quote_char?: string;
    read_all_sheets?: boolean;
    sheet_names?: string[];
};
type FTPConfig = {
    archive_config?: ArchiveConfig;
    file_regex?: string;
    host?: string;
    interval?: number;
    local_dir?: string;
    password?: string;
    port?: number;
    read_all_files?: boolean;
    remote_dir?: string;
    retries?: number;
    unzip?: boolean;
    username?: string;
    zip_file_regex?: string;
    zip_format?: string;
};
type GCompany = {
    _id?: string;
    integration?: string;
    level?: string;
    name?: string;
    opted?: boolean;
    permissions?: string[];
    stores?: GStore[];
    token?: string;
    uid?: number;
};
type GenericDTO = {
    text?: string;
    value?: any;
};
type GoogleSpreadSheetConfig = {
    archive_config?: ArchiveConfig;
    client_secret_location?: string;
    cred_storage_directory?: string;
    local_dir?: string;
    range?: string;
    sheet_id?: string;
};
type GStore = {
    _id?: string;
    code?: string;
    data?: StoreData;
    integration?: string;
    level?: string;
    name?: string;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    uid?: number;
};
type HttpConfig = {
    archive_config?: ArchiveConfig;
    hosturl?: string;
    http_method?: string;
    local_path?: string;
    password?: string;
    request_params?: any;
    request_payload?: string;
    username?: string;
};
type JobConfig = {
    _id?: number;
    aggregator_types?: string[];
    alias?: string;
    audit?: Audit;
    catalog_master_config?: CatalogMasterConfig;
    company_config?: CompanyConfig[];
    company_ids?: number[];
    cron_expression?: string;
    db_connection_profile?: DBConnectionProfile;
    delete_quantity_threshold?: number;
    dependent_job_codes?: string[];
    disable?: boolean;
    immediate_first_run?: boolean;
    integration_type?: string;
    job_code?: string;
    min_price?: number;
    open_tags?: any;
    params?: any;
    period_threshold?: number;
    period_threshold_type?: string;
    priority?: string;
    process_config?: ProcessConfig;
    properties?: any;
    store_config?: StoreConfig[];
    store_filter?: StoreFilter;
    sync_delay?: number;
    task_type?: string;
    tax_identifiers?: string[];
    version?: number;
};
type JobConfigDTO = {
    alias?: string;
    company_id: number;
    company_name?: string;
    integration: string;
    integration_data?: any;
    job_code?: string;
    task_details?: TaskDTO;
    threshold_details?: DataTresholdDTO;
};
type JobConfigListDTO = {
    active?: boolean;
    alias?: string;
    code?: string;
    created_by?: string;
    created_on?: string;
    modified_by?: string;
    modified_on?: string;
    type?: string;
};
type JobConfigRawDTO = {
    company_id: number;
    company_name: string;
    data?: JobConfig;
    integration: string;
};
type JobHistoryDto = {
    error_type?: string;
    filename?: string[];
    job_code?: string;
    job_id?: number;
    message?: string;
    processed_on?: string;
    status?: string;
    total_added_count?: number;
    total_initial_count?: number;
    total_suppressed_count?: number;
    total_updated_count?: number;
};
type JobMetricsDto = {
    is_run_more_than_usual?: string;
    job_code?: string;
    job_history?: JobHistoryDto[];
    total_failure_count?: number;
    total_job_runs?: number;
    total_success_count?: number;
    total_suppressed_count?: number;
    total_warning_count?: number;
};
type JobStepsDTO = {
    deleted_count?: number;
    end_count?: number;
    processed_at?: string;
    processed_start_time?: string;
    start_count?: number;
    step_execution_time?: number;
    step_name?: string;
    type?: string;
};
type JsonDocConfig = {
    prop_bean_configs?: PropBeanConfig[];
};
type KafkaMetaModel = {
    action?: string;
    batch_id?: number;
    created_on?: string;
    created_timestamp?: number;
    job_type?: string;
    trace?: string[];
};
type KafkaResponse = {
    offset?: number;
    partition?: number;
};
type LocalFileConfig = {
    archive_config?: ArchiveConfig;
    file_regex?: string;
    interval?: number;
    local_dir?: string;
    read_all_files?: boolean;
    retries?: number;
    unzip?: boolean;
    working_dir?: string;
    zip_file_regex?: string;
    zip_format?: string;
};
type Metum = {
    _id?: string;
    name?: string;
    value?: string;
};
type MongoDocConfig = {
    aggregate_pipeline?: any[];
    collection_name?: string;
    find_query?: any;
    projection_query?: any;
    prop_bean_configs?: PropBeanConfig[];
    skip_save?: boolean;
};
type OAuthConfig = {
    consumer_key?: string;
    consumer_secret?: string;
    function_name?: string;
    interval?: number;
    limit?: number;
    pages?: number;
    rest_base_url?: string;
    rest_url?: string;
    token?: string;
    token_secret?: string;
};
type ProcessConfig = {
    aws_s3_config?: AWSS3config;
    db_config?: DBConfig;
    db_param_config?: DBParamConfig;
    doc_mapping_config?: DocMappingConfig;
    email_config?: EmailConfig;
    file_config?: FileConfig;
    ftp_config?: FTPConfig;
    google_spreadsheet_config?: GoogleSpreadSheetConfig;
    http_config?: HttpConfig;
    json_doc_config?: JsonDocConfig;
    local_file_config?: LocalFileConfig;
    mongo_doc_config?: MongoDocConfig;
    oauth_config?: OAuthConfig;
    sftp_config?: SFTPConfig;
    task_step_config?: TaskStepConfig;
};
type PropBeanConfig = {
    all_param_function_name?: string;
    concat_str?: string;
    const_value?: any;
    data_type?: string;
    default_value?: any;
    destination_field?: string;
    enrich_from_master?: boolean;
    function_name?: string;
    identifier_type?: string;
    ignore_if_not_exists?: boolean;
    include?: boolean;
    index_field?: string;
    optional?: boolean;
    projection_query?: any;
    required?: boolean;
    send?: Send;
    source_field?: string;
    source_fields?: string[];
    sub_separator?: string;
    transformer_name?: string;
    validations?: any[];
    values?: string[];
};
type PropBeanDTO = {
    all_param_function_name?: string;
    concat_str?: string;
    const_value?: any;
    data_type?: string;
    default_value?: any;
    destination_field?: string;
    enrich_from_master?: boolean;
    function_name?: string;
    identifier_type?: string;
    ignore_if_not_exists?: boolean;
    include?: boolean;
    index_field?: string;
    optional?: boolean;
    projection_query?: any;
    required?: boolean;
    source_field?: string;
    source_fields?: string[];
    sub_separator?: string;
    transformer_name?: string;
};
type ResponseEnvelopeJobConfigDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigDTO;
    message?: string;
    page?: Page;
    payload?: JobConfigDTO;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeJobMetricsDto = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobMetricsDto;
    message?: string;
    page?: Page;
    payload?: JobMetricsDto;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeKafkaResponse = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: KafkaResponse;
    message?: string;
    page?: Page;
    payload?: KafkaResponse;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeListJobConfigDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigDTO[];
    message?: string;
    page?: Page;
    payload?: JobConfigDTO[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeListJobConfigListDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigListDTO[];
    message?: string;
    page?: Page;
    payload?: JobConfigListDTO[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeListJobConfigRawDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigRawDTO[];
    message?: string;
    page?: Page;
    payload?: JobConfigRawDTO[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeListJobStepsDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobStepsDTO[];
    message?: string;
    page?: Page;
    payload?: JobStepsDTO[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeListSlingshotConfigurationDetail = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: SlingshotConfigurationDetail[];
    message?: string;
    page?: Page;
    payload?: SlingshotConfigurationDetail[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeString = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: string;
    message?: string;
    page?: Page;
    payload?: string;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type Send = {
    processed?: boolean;
    raw?: boolean;
};
type SFTPConfig = {
    archive_config?: ArchiveConfig;
    file_regex?: string;
    host?: string;
    interval?: number;
    local_dir?: string;
    password?: string;
    password_protected?: boolean;
    port?: number;
    private_key_path?: string;
    read_all_files?: boolean;
    remote_dir?: string;
    retries?: number;
    strict_host_key_checking?: boolean;
    unzip?: boolean;
    username?: string;
    zip_file_regex?: string;
    zip_format?: string;
};
type SlingshotConfigurationDetail = {
    companies?: GCompany[];
    integration?: SlingshotIntegration;
};
type SlingshotIntegration = {
    _id?: string;
    description?: string;
    meta?: Metum[];
    name?: string;
    slug?: string;
};
type StoreConfig = {
    job_code?: string;
    process_config?: ProcessConfig;
    properties?: any;
    store_alias?: string;
    store_file_name?: string;
    store_file_regex?: string;
    storeid?: string;
};
type StoreData = {
    location_id?: string;
};
type StoreFilter = {
    exclude_tags?: string[];
    include_tags?: string[];
    query?: any;
};
type SuppressStoreModel = {
    stores?: number[];
};
type SuppressStorePayload = {
    meta?: KafkaMetaModel;
    payload?: SuppressStoreModel[];
};
type TaskConfig = {
    name?: string;
    task_config_id?: number;
    task_params?: TaskParam[];
};
type TaskDTO = {
    group_list?: GenericDTO[];
    type?: number;
};
type TaskParam = {
    name?: string;
    value?: any;
};
type TaskStepConfig = {
    task_config_group_ids?: number[];
    task_config_ids?: number[];
    task_configs?: TaskConfig[];
};
type Android = {
    api_key?: string;
    application_id?: string;
};
type App = {
    auth?: ApplicationAuth;
    channel_type?: string;
    company_id?: string;
    desc?: string;
    name?: string;
};
type AppCartConfig = {
    bulk_coupons?: boolean;
    delivery_charges?: DeliveryCharges;
    empty_cart?: boolean;
    enabled?: boolean;
    max_cart_items?: number;
    min_cart_value?: number;
    pan_card?: PanCardConfig;
    revenue_engine_coupon?: boolean;
};
type AppCurrencyResponse = {
    application?: string;
    default_currency?: DefaultCurrency;
    supported_currency?: Currency[];
};
type AppDomain = {
    name?: string;
};
type AppFeature = {
    __v?: number;
    _id?: string;
    app?: string;
    cart?: CartFeature;
    common?: CommonFeature;
    created_at?: string;
    home_page?: HomePageFeature;
    landing_page?: LandingPageFeature;
    order?: OrderFeature;
    pcr?: PcrFeature;
    product_detail?: ProductDetailFeature;
    qr?: QrFeature;
    registration_page?: RegistrationPageFeature;
    updated_at?: string;
};
type AppFeatureRequest = {
    feature?: AppFeature;
};
type AppFeatureResponse = {
    feature?: AppFeature;
};
type AppInventory = {
    article_assignment?: InventoryArticleAssignment;
    brand?: InventoryBrandRule;
    franchise_enabled?: boolean;
    image?: string[];
    only_verified_products?: boolean;
    out_of_stock?: boolean;
    payment?: InventoryPaymentConfig;
    store?: InventoryStoreRule;
};
type AppInventoryCompanies = {
    company_type?: string;
    name?: string;
    uid?: number;
};
type AppInventoryConfig = {
    brand?: InventoryBrand;
    category?: InventoryCategory;
    company_store?: any[];
    discount?: InventoryDiscount;
    exclude_category?: any[];
    franchise_enabled?: boolean;
    image?: string[];
    only_verified_products?: boolean;
    out_of_stock?: boolean;
    price?: InventoryPrice;
    store?: InventoryStore;
};
type AppInventoryPartialUpdate = {
    cart?: AppCartConfig;
    comms_enabled?: boolean;
    communication?: CommunicationConfig;
    loyalty_points?: LoyaltyPointsConfig;
    payment?: AppPaymentConfig;
    reward_points?: RewardPointsConfig;
};
type AppInventoryStores = {
    _id?: string;
    company_id?: number;
    display_name?: string;
    modified_on?: string;
    name?: string;
    store_code?: string;
    store_type?: string;
    uid?: number;
};
type Application = {
    __v?: number;
    _id?: string;
    app_type?: string;
    auth?: ApplicationAuth;
    banner?: SecureUrl;
    cache_ttl?: number;
    channel_type?: string;
    company_id?: number;
    cors?: ApplicationCors;
    created_at?: string;
    description?: string;
    domain?: Domain;
    domains?: Domain[];
    favicon?: SecureUrl;
    is_active?: boolean;
    is_internal?: boolean;
    logo?: SecureUrl;
    meta?: ApplicationMeta[];
    mobile_logo?: SecureUrl;
    name?: string;
    owner?: string;
    redirections?: ApplicationRedirections[];
    slug?: string;
    token?: string;
    updated_at?: string;
    website?: ApplicationWebsite;
};
type ApplicationDetail = {
    _id?: string;
    banner?: SecureUrl;
    description?: string;
    domain?: Domain;
    domains?: Domain[];
    favicon?: SecureUrl;
    logo?: SecureUrl;
    mobile_logo?: SecureUrl;
    name?: string;
    slug?: string;
};
type ApplicationInformation = {
    __v?: number;
    _id?: string;
    address?: InformationAddress;
    application?: string;
    business_highlights?: BusinessHighlights;
    copyright_text?: string;
    created_at?: string;
    links?: Links;
    social_links?: SocialLinks;
    support?: InformationSupport;
    updated_at?: string;
};
type ApplicationInventory = {
    _id?: string;
    app?: string;
    article_assignment?: ArticleAssignmentConfig;
    authentication?: AuthenticationConfig;
    business?: string;
    cart?: AppCartConfig;
    comms_enabled?: boolean;
    communication?: CommunicationConfig;
    created_at?: string;
    inventory?: AppInventoryConfig;
    logistics?: AppLogisticsConfig;
    loyalty_points?: LoyaltyPointsConfig;
    modified_by?: string;
    order?: AppOrderConfig;
    payment?: AppPaymentConfig;
    platforms?: string[];
    reward_points?: RewardPointsConfig;
    updated_at?: string;
};
type ApplicationsResponse = {
    items?: Application[];
    page?: Page;
};
type AppLogisticsConfig = {
    dp_assignment?: boolean;
    logistics_by_seller?: boolean;
    same_day_delivery?: boolean;
    serviceability_check?: boolean;
};
type AppOrderConfig = {
    enabled?: boolean;
    force_reassignment?: boolean;
    message?: string;
};
type AppPaymentConfig = {
    callback_url?: CallbackUrl;
    cod_amount_limit?: number;
    cod_charges?: number;
    enabled?: boolean;
    methods?: Methods;
    mode_of_payment?: string;
    payment_selection_lock?: PaymentSelectionLock;
    source?: string;
};
type AppStoreRules = {
    brands?: any[];
    companies?: number[];
};
type AppSupportedCurrency = {
    _id?: string;
    application?: string;
    created_at?: string;
    default_currency?: DefaultCurrency;
    supported_currency?: string[];
    updated_at?: string;
};
type ArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
    rules?: ArticleAssignmentRules;
};
type ArticleAssignmentRule = {
    store_priority?: StorePriorityRule;
};
type ArticleAssignmentRules = {
    store_priority?: StorePriority;
};
type AuthenticationConfig = {
    provider?: string;
    required?: boolean;
};
type BlogLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type BrandCompanyInfo = {
    company_id?: number;
    company_name?: string;
};
type BrandsByCompanyResponse = {
    brands?: CompanyBrandInfo;
};
type BrandStoreInfo = {
    company?: OptedCompany;
    store_address?: OptedStoreAddress;
    store_code?: string;
    store_id?: number;
    store_name?: string;
    store_type?: string;
};
type BuildVersion = {
    __v?: number;
    _id?: string;
    application?: string;
    build_status?: string;
    created_at?: string;
    platform_type?: string;
    updated_at?: string;
    version_code?: number;
    version_name?: string;
};
type BuildVersionHistory = {
    latest_available_version_name?: string;
    versions?: BuildVersion;
};
type BusinessHighlights = {
    _id?: string;
    icon?: string;
    sub_title?: string;
    title?: string;
};
type CallbackUrl = {
    app?: string;
    web?: string;
};
type CartFeature = {
    google_map?: boolean;
    gst_input?: boolean;
    placing_for_customer?: boolean;
    revenue_engine_coupon?: boolean;
    staff_selection?: boolean;
};
type Charges = {
    charges?: number;
    threshold?: number;
};
type CommonFeature = {
    communication_optin_dialog?: CommunicationOptinDialogFeature;
    compare_products?: CompareProductsFeature;
    currency?: CurrencyFeature;
    deployment_store_selection?: DeploymentStoreSelectionFeature;
    feedback?: FeedbackFeature;
    listing_price?: ListingPriceFeature;
    revenue_engine?: RevenueEngineFeature;
    reward_points?: RewardPointsConfig;
};
type CommsConfig = {
    enabled?: boolean;
};
type CommunicationConfig = {
    email?: CommsConfig;
    sms?: CommsConfig;
    voice?: CommsConfig;
};
type CommunicationOptinDialogFeature = {
    visibility?: boolean;
};
type CompaniesResponse = {
    items?: AppInventoryCompanies;
    page?: Page;
};
type CompanyAboutAddress = {
    address1?: string;
    address2?: string;
    address_type?: string;
    city?: string;
    country?: string;
    pincode?: number;
    state?: string;
};
type CompanyBrandInfo = {
    brand_banner_portrait_url?: string;
    brand_banner_url?: string;
    brand_logo_url?: string;
    name?: string;
    value?: number;
};
type CompanyByBrandsRequest = {
    brands: number;
    search_text?: string;
};
type CompanyByBrandsResponse = {
    items?: BrandCompanyInfo[];
    page?: Page;
};
type CompanyValidator = {
    browser_script?: string;
    json_schema?: JsonSchema[];
};
type CompareProductsFeature = {
    enabled?: boolean;
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
type Credentials = {
    android?: Android;
    api_key?: string;
    application_id?: string;
    gcm_sender_id?: string;
    ios?: Ios;
    project_id?: string;
};
type Credit = {
    enabled?: boolean;
};
type CurrenciesResponse = {
    items?: Currency[];
};
type CurrencyConfig = {
    _id?: string;
    code?: string;
    created_at?: string;
    decimal_digits?: number;
    is_active?: boolean;
    name?: string;
    symbol?: string;
    updated_at?: string;
};
type CurrencyFeature = {
    default_currency?: string;
    type?: string;
    value?: string[];
};
type Debit = {
    auto_apply?: boolean;
    enabled?: boolean;
    strategy_channel?: string;
};
type DefaultCurrency = {
    code?: string;
    ref?: string;
};
type DeliveryCharges = {
    charges?: Charges;
    enabled?: boolean;
};
type DeploymentMeta = {
    _id?: string;
    all_stores?: boolean;
    app?: string;
    deployed_stores?: number[];
    enabled?: boolean;
    type?: string;
};
type DeploymentStoreSelectionFeature = {
    enabled?: boolean;
    type?: string;
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
type DomainStatus = {
    display?: string;
    status?: boolean;
};
type DomainStatusRequest = {
    domain_url?: string;
};
type DomainStatusResponse = {
    connected?: boolean;
    status?: DomainStatus[];
};
type DomainSuggestion = {
    currency?: string;
    is_available: boolean;
    name: string;
    price?: number;
    unsupported?: boolean;
};
type DomainSuggestionsRequest = {
    custom?: boolean;
    domain_url?: string;
};
type DomainSuggestionsResponse = {
    domains?: DomainSuggestion[];
};
type FacebookLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type FeedbackFeature = {
    enabled?: boolean;
};
type FilterOrderingStoreRequest = {
    all_stores?: boolean;
    deployed_stores?: number[];
    only_deployed?: boolean;
    q?: string;
};
type Firebase = {
    credentials?: Credentials;
    enabled?: boolean;
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
type FyndRewards = {
    credentials?: FyndRewardsCredentials;
};
type FyndRewardsCredentials = {
    public_key?: string;
};
type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn[];
    page?: Page;
};
type GoogleMap = {
    credentials?: GoogleMapCredentials;
};
type GoogleMapCredentials = {
    api_key?: string;
};
type GooglePlusLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type Gtm = {
    credentials?: GtmCredentials;
    enabled?: boolean;
};
type GtmCredentials = {
    api_key?: string;
};
type HomePageFeature = {
    order_processing?: boolean;
};
type InformationAddress = {
    address_line?: string[];
    city?: string;
    country?: string;
    loc?: string;
    phone?: InformationPhone[];
    pincode?: number;
};
type InformationPhone = {
    code?: string;
    number?: string;
};
type InformationSupport = {
    email?: string[];
    phone?: string[];
    timing?: string;
};
type InstagramLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type Integration = {
    __v?: number;
    _id?: string;
    companies?: any[];
    constants?: any;
    created_at?: string;
    description?: string;
    description_html?: string;
    icon?: string;
    meta?: IntegrationMeta[];
    name?: string;
    owner?: string;
    secret?: string;
    support?: string[];
    token?: string;
    updated_at?: string;
    validators?: Validators;
};
type IntegrationConfigResponse = {
    items?: IntegrationLevel[];
};
type IntegrationLevel = {
    __v?: number;
    _id?: string;
    created_at?: string;
    data?: any;
    integration?: string;
    last_patch?: LastPatch[];
    level?: string;
    meta?: IntegrationMeta[];
    opted?: boolean;
    permissions?: any[];
    token?: string;
    uid?: number;
    updated_at?: string;
};
type IntegrationMeta = {
    _id?: string;
    is_public?: boolean;
    name?: string;
    value?: string;
};
type IntegrationOptIn = {
    __v?: number;
    _id?: string;
    companies?: any[];
    constants?: string;
    created_at?: string;
    description?: string;
    description_html?: string;
    icon?: string;
    meta?: IntegrationMeta[];
    name?: string;
    owner?: string;
    secret?: string;
    support?: string[];
    token?: string;
    updated_at?: string;
    validators?: Validators;
};
type InvalidPayloadRequest = {
    message?: string;
};
type InventoryArticleAssignment = {
    post_order_reassignment?: boolean;
    rules?: ArticleAssignmentRule;
};
type InventoryBrand = {
    brands?: any[];
    criteria?: string;
};
type InventoryBrandRule = {
    brands?: number[];
    criteria?: string;
};
type InventoryCategory = {
    categories?: any[];
    criteria?: string;
};
type InventoryDiscount = {
    max?: number;
    min?: number;
};
type InventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type InventoryPrice = {
    max?: number;
    min?: number;
};
type InventoryStore = {
    criteria?: string;
    rules?: AppStoreRules;
    stores?: any[];
};
type InventoryStoreRule = {
    criteria?: string;
    rules?: StoreCriteriaRule[];
    stores?: number[];
};
type InventoryValidator = {
    browser_script?: string;
    json_schema?: JsonSchema[];
};
type Ios = {
    api_key?: string;
    application_id?: string;
};
type JsonSchema = {
    display?: string;
    key?: string;
    tooltip?: string;
    type?: string;
};
type LandingImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type LandingPageFeature = {
    continue_as_guest?: boolean;
    launch_page?: LaunchPage;
    login_btn_text?: string;
    show_domain_textbox?: boolean;
    show_register_btn?: boolean;
};
type LastPatch = {
    op?: string;
    path?: string;
    value?: string;
};
type LaunchPage = {
    page_type?: string;
    params?: any;
    query?: any;
};
type LinkedInLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type Links = {
    link?: string;
    title?: string;
};
type ListingPriceFeature = {
    value?: string;
};
type LoyaltyPointsConfig = {
    auto_apply?: boolean;
    enabled?: boolean;
};
type Methods = {
    card?: PaymentModeConfig;
    cod?: PaymentModeConfig;
    fc?: PaymentModeConfig;
    jiopp?: PaymentModeConfig;
    jp?: PaymentModeConfig;
    juspaypg?: PaymentModeConfig;
    nb?: PaymentModeConfig;
    pac?: PaymentModeConfig;
    payubizpg?: PaymentModeConfig;
    payumoneypg?: PaymentModeConfig;
    pl?: PaymentModeConfig;
    pp?: PaymentModeConfig;
    ps?: PaymentModeConfig;
    qr?: PaymentModeConfig;
    rupifipg?: PaymentModeConfig;
    simpl?: PaymentModeConfig;
    stripepg?: PaymentModeConfig;
    upi?: PaymentModeConfig;
    wl?: PaymentModeConfig;
};
type MobileAppConfigRequest = {
    app_name?: string;
    is_active?: boolean;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
};
type MobileAppConfiguration = {
    __v?: number;
    _id?: string;
    app_name?: string;
    application?: string;
    created_at?: string;
    is_active?: boolean;
    landing_image?: LandingImage;
    package_name?: string;
    platform_type?: string;
    splash_image?: SplashImage;
    updated_at?: string;
};
type Moengage = {
    credentials?: MoengageCredentials;
    enabled?: boolean;
};
type MoengageCredentials = {
    app_id?: string;
};
type OptedApplicationResponse = {
    _id?: string;
    company?: OptedCompany;
    description?: string;
    domain?: string;
    name?: string;
    opt_out_inventory?: OptOutInventory;
    opted_inventory?: OptedInventory;
};
type OptedCompany = {
    name?: string;
    uid?: number;
};
type OptedInventory = {
    items?: any;
    opt_type?: OptType;
};
type OptedStore = {
    _id?: string;
    address?: OptedStoreAddress;
    company_id?: number;
    display_name?: string;
    modified_on?: string;
    name?: string;
    store_code?: string;
    store_type?: string;
    uid?: number;
};
type OptedStoreAddress = {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    lat_long?: StoreLatLong;
    pincode?: number;
    state?: string;
};
type OptedStoreIntegration = {
    other_entity?: OtherEntity;
    other_integration?: IntegrationOptIn;
    other_opted?: boolean;
};
type OptOutInventory = {
    company: number[];
    store: number[];
};
type OptType = {
    display?: string;
    key?: string;
};
type OrderFeature = {
    buy_again?: boolean;
};
type OrderingStore = {
    _id?: string;
    address?: OptedStoreAddress;
    code?: string;
    display_name?: string;
    name?: string;
    pincode?: number;
    store_code?: string;
    store_type?: string;
    uid?: number;
};
type OrderingStoreConfig = {
    deployment_meta?: DeploymentMeta;
};
type OrderingStores = {
    __v?: number;
    _id?: string;
    all_stores?: boolean;
    app?: string;
    deployed_stores?: number[];
    enabled?: boolean;
    items?: OrderingStore[];
    page?: Page;
    type?: string;
};
type OrderingStoresResponse = {
    items?: OrderingStore[];
    page?: Page;
};
type OrderValidator = {
    browser_script?: string;
    json_schema?: JsonSchema[];
};
type OtherEntity = {
    __v?: number;
    _id?: string;
    created_at?: string;
    data?: OtherEntityData;
    integration?: string;
    last_patch?: LastPatch[];
    level?: string;
    meta?: any[];
    opted?: boolean;
    permissions?: string[];
    token?: string;
    uid?: number;
    updated_at?: string;
};
type OtherEntityData = {
    article_identifier?: string;
};
type OtherSellerApplication = {
    _id?: string;
    company?: OtherSellerCompany;
    description?: string;
    domain?: string;
    name?: string;
    opt_type?: string;
};
type OtherSellerApplications = {
    items?: OtherSellerApplication[];
    page?: Page;
};
type OtherSellerCompany = {
    name?: string;
    uid?: number;
};
type PanCardConfig = {
    cod_threshold_amount?: number;
    enabled?: boolean;
    online_threshold_amount?: number;
};
type PaymentModeConfig = {
    enabled?: boolean;
};
type PaymentSelectionLock = {
    default_options?: string;
    enabled?: boolean;
    payment_identifier?: string;
};
type PcrFeature = {
    staff_selection?: boolean;
};
type PinterestLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type ProductDetailFeature = {
    request_product?: boolean;
    seller_selection?: boolean;
    similar?: string[];
    update_product_meta?: boolean;
};
type QrFeature = {
    application?: boolean;
    collections?: boolean;
    products?: boolean;
};
type RegistrationPageFeature = {
    ask_store_address?: boolean;
};
type RevenueEngineFeature = {
    enabled?: boolean;
};
type RewardPointsConfig = {
    credit?: Credit;
    debit?: Debit;
};
type Safetynet = {
    credentials?: SafetynetCredentials;
    enabled?: boolean;
};
type SafetynetCredentials = {
    api_key?: string;
};
type Segment = {
    credentials?: SegmentCredentials;
    enabled?: boolean;
};
type SegmentCredentials = {
    write_key?: string;
};
type SocialLinks = {
    blog_link?: BlogLink;
    facebook?: FacebookLink;
    google_plus?: GooglePlusLink;
    instagram?: InstagramLink;
    linked_in?: LinkedInLink;
    pinterest?: PinterestLink;
    twitter?: TwitterLink;
    vimeo?: VimeoLink;
    youtube?: YoutubeLink;
};
type SplashImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type StoreByBrandsRequest = {
    brands: number;
    company_id?: number;
    search_text?: string;
};
type StoreByBrandsResponse = {
    items?: BrandStoreInfo[];
    page?: Page;
};
type StoreCriteriaRule = {
    brands?: number[];
    companies?: number[];
};
type StoreLatLong = {
    coordinates?: number[];
    type?: string;
};
type StorePriority = {
    enabled?: boolean;
    storetype_order?: any[];
};
type StorePriorityRule = {
    enabled?: boolean;
    storetype_order?: string[];
};
type StoresResponse = {
    items?: AppInventoryStores;
    page?: Page;
};
type StoreValidator = {
    browser_script?: string;
    json_schema?: JsonSchema[];
};
type SuccessMessageResponse = {
    message?: string;
};
type TokenResponse = {
    __v?: number;
    _id?: string;
    application?: string;
    created_at?: string;
    tokens?: Tokens;
    updated_at?: string;
};
type Tokens = {
    firebase?: Firebase;
    freshchat?: Freshchat;
    fynd_rewards?: FyndRewards;
    google_map?: GoogleMap;
    gtm?: Gtm;
    moengage?: Moengage;
    safetynet?: Safetynet;
    segment?: Segment;
};
type TwitterLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type UnhandledError = {
    message?: string;
};
type UpdateDomain = {
    _id?: string;
};
type UpdateDomainTypeRequest = {
    action?: string;
    domain?: UpdateDomain;
};
type UpdateIntegrationLevelRequest = {
    items?: IntegrationLevel[];
};
type UserEmail = {
    active?: boolean;
    email?: string;
    primary?: boolean;
    verified?: boolean;
};
type UserPhoneNumber = {
    active?: boolean;
    country_code?: number;
    phone?: string;
    primary?: boolean;
    verified?: boolean;
};
type Validators = {
    company?: CompanyValidator;
    inventory?: InventoryValidator;
    order?: OrderValidator;
    store?: StoreValidator;
};
type VimeoLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type YoutubeLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type AbandonedCart = {
    _id: string;
    app_id?: string;
    articles: any[];
    bulk_coupon_discount?: number;
    buy_now?: boolean;
    cart_value?: number;
    cashback: any;
    checkout_mode?: string;
    cod_charges?: any;
    comment?: string;
    coupon?: any;
    created_on: string;
    delivery_charges?: any;
    discount?: number;
    expire_at: string;
    fc_index_map?: number[];
    fynd_credits?: any;
    gstin?: string;
    is_active?: boolean;
    is_archive?: boolean;
    is_default: boolean;
    last_modified: string;
    merge_qty?: boolean;
    meta?: any;
    order_id?: string;
    payment_methods?: any[];
    payment_mode?: string;
    payments?: any;
    pick_up_customer_details?: any;
    promotion?: any;
    shipments?: any[];
    uid: number;
    user_id: string;
};
type AbandonedCartResponse = {
    items?: AbandonedCart[];
    message?: string;
    page?: Page;
    result?: any;
    success?: boolean;
};
type ActionQuery = {
    product_slug?: string[];
};
type ActivePromosResponse = {
    created_on?: string;
    description?: string;
    entity_slug?: string;
    entity_type?: string;
    example?: string;
    is_hidden?: boolean;
    modified_on?: string;
    subtitle?: string;
    title?: string;
    type?: string;
};
type AddCartDetailResponse = {
    cart?: CartDetailResponse;
    message?: string;
    partial?: boolean;
    success?: boolean;
};
type AddCartRequest = {
    items?: AddProductCart[];
    new_cart?: boolean;
};
type AddProductCart = {
    _custom_json?: any;
    article_assignment?: any;
    article_id?: string;
    display?: string;
    extra_meta?: any;
    item_id?: number;
    item_size?: string;
    parent_item_identifiers?: any;
    pos?: boolean;
    product_group_tags?: string[];
    quantity?: number;
    seller_id?: number;
    store_id?: number;
};
type AppliedFreeArticles = {
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
    quantity?: number;
};
type AppliedPromotion = {
    amount?: number;
    applied_free_articles?: AppliedFreeArticles[];
    article_quantity?: number;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRulesApp[];
    mrp_promotion?: boolean;
    offer_text?: string;
    ownership?: Ownership2;
    promo_id?: string;
    promotion_group?: string;
    promotion_name?: string;
    promotion_type?: string;
};
type ApplyCouponRequest = {
    coupon_code: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
    marked?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: any;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
};
type CartCheckoutResponse = {
    app_intercept_url?: string;
    callback_url?: string;
    cart?: CheckCart;
    data?: any;
    message?: string;
    order_id?: string;
    payment_confirm_url?: string;
    success?: boolean;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDeliveryModesResponse = {
    available_modes?: string[];
    pickup_stores?: number[];
};
type CartDetailResponse = {
    applied_promo_details?: AppliedPromotion[];
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    checkout_mode?: string;
    comment?: string;
    coupon_text?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    gstin?: string;
    id?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    message?: string;
    pan_config?: any;
    pan_no?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type CartList = {
    cart_id?: string;
    cart_value?: number;
    created_on?: string;
    item_counts?: number;
    pick_up_customer_details?: any;
    user_id?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type CartMetaResponse = {
    message?: string;
};
type CartProduct = {
    action?: ProductAction;
    brand?: BaseInfo;
    categories?: CategoryInfo[];
    images?: ProductImage[];
    item_code?: string;
    name?: string;
    net_quantity?: NetQuantity;
    slug?: string;
    type?: string;
    uid?: number;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    article?: ProductArticle;
    availability?: ProductAvailability;
    bulk_offer?: any;
    coupon_message?: string;
    delivery_promise?: ShipmentPromise;
    discount?: string;
    identifiers: CartProductIdentifer;
    is_set?: boolean;
    key?: string;
    message?: string;
    moq?: any;
    parent_item_identifiers?: any;
    price?: ProductPriceInfo;
    price_per_unit?: ProductPriceInfo;
    product?: CartProduct;
    promo_meta?: PromoMeta;
    promotions_applied?: AppliedPromotion[];
    quantity?: number;
};
type CartShipmentsResponse = {
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    cart_id?: number;
    checkout_mode?: string;
    comment?: string;
    coupon_text?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    error?: boolean;
    gstin?: string;
    id?: string;
    is_valid?: boolean;
    last_modified?: string;
    message?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    shipments?: ShipmentResponse[];
    uid?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type CheckCart = {
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    cart_id?: number;
    checkout_mode?: string;
    cod_available?: boolean;
    cod_charges?: number;
    cod_message?: string;
    comment?: string;
    coupon_text?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    delivery_charge_order_value?: number;
    delivery_charges?: number;
    delivery_promise?: ShipmentPromise;
    error_message?: string;
    gstin?: string;
    id?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    message?: string;
    order_id?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    store_code?: string;
    store_emps?: any[];
    success?: boolean;
    uid?: string;
    user_type?: string;
};
type CompareObject = {
    equals?: number;
    greater_than?: number;
    greater_than_equals?: number;
    less_than?: number;
    less_than_equals?: number;
};
type Coupon = {
    coupon_code?: string;
    coupon_type?: string;
    coupon_value?: number;
    description?: string;
    expires_on?: string;
    is_applicable?: boolean;
    is_applied?: boolean;
    max_discount_value?: number;
    message?: string;
    minimum_cart_value?: number;
    sub_title?: string;
    title?: string;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type CouponAdd = {
    _schedule?: CouponSchedule;
    action?: CouponAction;
    author?: CouponAuthor;
    code: string;
    date_meta?: CouponDateMeta;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    ownership: Ownership;
    restrictions?: Restrictions;
    rule: Rule[];
    rule_definition: RuleDefinition;
    state?: State;
    tags?: string[];
    type_slug: string;
    validation?: Validation;
    validity: Validity;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CouponBreakup = {
    code?: string;
    coupon_type?: string;
    coupon_value?: number;
    description?: string;
    is_applied?: boolean;
    max_discount_value?: number;
    message?: string;
    minimum_cart_value?: number;
    sub_title?: string;
    title?: string;
    type?: string;
    uid?: string;
    value?: number;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type CouponSchedule = {
    cron?: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    start?: string;
};
type CouponsResponse = {
    items?: CouponAdd;
    page?: Page;
};
type CouponUpdate = {
    _schedule?: CouponSchedule;
    action?: CouponAction;
    author?: CouponAuthor;
    code: string;
    date_meta?: CouponDateMeta;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    ownership: Ownership;
    restrictions?: Restrictions;
    rule: Rule[];
    rule_definition: RuleDefinition;
    state?: State;
    tags?: string[];
    type_slug: string;
    validation?: Validation;
    validity: Validity;
};
type CouponValidity = {
    code?: string;
    discount?: number;
    display_message_en?: string;
    title?: string;
    valid?: boolean;
};
type DeleteAddressResponse = {
    id?: string;
    is_deleted?: boolean;
};
type DeleteCartDetailResponse = {
    message?: string;
    success?: boolean;
};
type DeleteCartRequest = {
    cart_id_list?: string[];
};
type DiscountOffer = {
    apportion_discount?: boolean;
    code?: string;
    discount_amount?: number;
    discount_percentage?: number;
    discount_price?: number;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
    partial_can_ret?: boolean;
};
type DiscountRule = {
    buy_condition: string;
    discount_type: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
};
type DiscountRulesApp = {
    item_criteria?: any;
    matched_buy_rules?: string[];
    offer?: any;
    raw_offer?: any;
};
type DisplayBreakup = {
    currency_code?: string;
    currency_symbol?: string;
    display?: string;
    key?: string;
    message?: string[];
    value?: number;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    description?: string;
    remove?: DisplayMetaDict;
    subtitle?: string;
    title?: string;
};
type DisplayMeta1 = {
    description?: string;
    name?: string;
    offer_label?: string;
    offer_text?: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type Files = {
    key: string;
    values: string[];
};
type FreeGiftItem = {
    item_brand_name?: string;
    item_id?: number;
    item_images_url?: string[];
    item_name?: string;
    item_price_details?: any;
    item_slug?: string;
};
type GeoLocation = {
    latitude?: number;
    longitude?: number;
};
type GetCouponResponse = {
    available_coupon_list?: Coupon[];
    page?: PageCoupon;
};
type GetShareCartLinkRequest = {
    id?: string;
    meta?: any;
};
type GetShareCartLinkResponse = {
    share_url?: string;
    token?: string;
};
type Identifier = {
    article_id?: string[];
    brand_id?: number[];
    category_id?: number[];
    collection_id?: string[];
    company_id?: number[];
    exclude_brand_id?: number[];
    item_id?: number[];
    store_id?: number[];
    user_id?: string[];
};
type ItemCriteria = {
    all_items?: boolean;
    available_zones?: string[];
    buy_rules?: string[];
    cart_quantity?: CompareObject;
    cart_total?: CompareObject;
    cart_unique_item_amount?: CompareObject;
    cart_unique_item_quantity?: CompareObject;
    item_brand?: number[];
    item_category?: number[];
    item_company?: number[];
    item_exclude_brand?: number[];
    item_exclude_category?: number[];
    item_exclude_company?: number[];
    item_exclude_id?: number[];
    item_exclude_sku?: string[];
    item_exclude_store?: number[];
    item_id?: number[];
    item_size?: string[];
    item_sku?: string[];
    item_store?: number[];
    product_tags?: string[];
};
type LoyaltyPoints = {
    applicable?: number;
    description?: string;
    is_applied?: boolean;
    total?: number;
};
type MultiCartResponse = {
    data?: CartList[];
    success?: boolean;
};
type NetQuantity = {
    unit?: string;
    value?: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    items?: CartProductInfo[];
    message?: string;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
};
type OpenApiCartServiceabilityResponse = {
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    items?: CartProductInfo[];
    message?: string;
};
type OpenApiCheckoutResponse = {
    message?: string;
    order_id: string;
    order_ref_id?: string;
    success?: boolean;
};
type OpenApiErrorResponse = {
    errors?: any;
    message?: string;
    success?: boolean;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type OpenApiOrderItem = {
    amount_paid: number;
    cashback_applied: number;
    cod_charges: number;
    coupon_effective_discount: number;
    delivery_charges: number;
    discount: number;
    employee_discount?: number;
    extra_meta?: any;
    files?: OpenApiFiles[];
    loyalty_discount?: number;
    meta?: CartItemMeta;
    payment_methods: MultiTenderPaymentMethod[];
    price_effective: number;
    price_marked: number;
    product_id: number;
    quantity?: number;
    size: string;
};
type OpenApiPlatformCheckoutReq = {
    affiliate_order_id?: string;
    billing_address: ShippingAddress;
    cart_items: OpenApiOrderItem[];
    cart_value: number;
    cashback_applied: number;
    cod_charges: number;
    comment?: string;
    coupon?: string;
    coupon_code: string;
    coupon_value: number;
    currency_code?: string;
    delivery_charges: number;
    employee_discount?: any;
    files?: OpenApiFiles[];
    gstin?: string;
    loyalty_discount?: number;
    order_id?: string;
    payment_methods: MultiTenderPaymentMethod[];
    payment_mode?: string;
    shipping_address?: ShippingAddress;
};
type OperationErrorResponse = {
    message?: string;
    success?: boolean;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type PageCoupon = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    total?: number;
    total_item_count?: number;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PaymentCouponValidate = {
    coupon_validity?: CouponValidity;
    message?: string;
    success: boolean;
};
type PaymentModes = {
    codes?: string[];
    networks?: string[];
    types?: string[];
    uses?: PaymentAllowValue;
};
type PickupStoreDetail = {
    address?: string;
    address_type?: string;
    area?: string;
    area_code?: string;
    area_code_slug?: string;
    city?: string;
    country?: string;
    email?: string;
    id?: number;
    landmark?: string;
    name?: string;
    phone?: string;
    pincode?: number;
    state?: string;
    store_code?: string;
    uid?: number;
};
type PlatformAddress = {
    address?: string;
    address_type?: string;
    area?: string;
    area_code?: string;
    area_code_slug?: string;
    cart_id?: string;
    checkout_mode?: string;
    city?: string;
    country?: string;
    country_code?: string;
    created_by_user_id?: string;
    email?: string;
    geo_location?: GeoLocation;
    google_map_point?: any;
    id?: string;
    is_active?: boolean;
    is_default_address?: boolean;
    landmark?: string;
    meta?: any;
    name?: string;
    phone?: string;
    state?: string;
    tags?: string[];
    user_id?: string;
};
type PlatformCartCheckoutDetailRequest = {
    address_id?: string;
    aggregator?: string;
    billing_address?: any;
    billing_address_id?: string;
    callback_url?: string;
    checkout_mode?: string;
    delivery_address?: any;
    device_id?: string;
    employee_code?: string;
    extra_meta?: any;
    files?: Files[];
    id: string;
    merchant_code?: string;
    meta?: any;
    order_type: string;
    ordering_store?: number;
    payment_auto_confirm?: boolean;
    payment_identifier?: string;
    payment_mode: string;
    payment_params?: any;
    pick_at_store_uid?: number;
    pos?: boolean;
    staff?: StaffCheckout;
    user_id: string;
};
type PlatformCartMetaRequest = {
    checkout_mode?: string;
    comment?: string;
    gstin?: string;
    pan_no?: string;
    pick_up_customer_details?: any;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type PlatformSelectCartAddressRequest = {
    billing_address_id?: string;
    cart_id?: string;
    checkout_mode?: string;
    id?: string;
    user_id?: string;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type ProductAction = {
    query?: ActionQuery;
    type?: string;
    url?: string;
};
type ProductArticle = {
    _custom_json?: any;
    extra_meta?: any;
    parent_item_identifiers?: any;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
    quantity?: number;
    seller?: BaseInfo;
    size?: string;
    store?: BaseInfo;
    type?: string;
    uid?: string;
};
type ProductAvailability = {
    available_sizes?: ProductAvailabilitySize[];
    deliverable?: boolean;
    is_valid?: boolean;
    other_store_quantity?: number;
    out_of_stock?: boolean;
    sizes?: string[];
};
type ProductAvailabilitySize = {
    display?: string;
    is_available?: boolean;
    value?: string;
};
type ProductImage = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
type ProductPrice = {
    add_on?: number;
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
    marked?: number;
    selling?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type PromiseFormatted = {
    max?: string;
    min?: string;
};
type PromiseTimestamp = {
    max?: number;
    min?: number;
};
type PromoMeta = {
    message?: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionAdd = {
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    application_id: string;
    apply_all_discount?: boolean;
    apply_exclusive?: string;
    apply_priority?: number;
    author?: PromotionAuthor;
    buy_rules: any;
    calculate_on?: string;
    code?: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    mode: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    promo_group: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    stackable?: boolean;
    visiblility?: Visibility;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionListItem = {
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    application_id: string;
    apply_all_discount?: boolean;
    apply_exclusive?: string;
    apply_priority?: number;
    author?: PromotionAuthor;
    buy_rules: any;
    calculate_on?: string;
    code?: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    mode: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    promo_group: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    stackable?: boolean;
    visiblility?: Visibility;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type PromotionPaymentModes = {
    codes?: string[];
    type: string;
    uses?: PaymentAllowValue1;
};
type PromotionSchedule = {
    cron?: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    published: boolean;
    start: string;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionUpdate = {
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    application_id: string;
    apply_all_discount?: boolean;
    apply_exclusive?: string;
    apply_priority?: number;
    author?: PromotionAuthor;
    buy_rules: any;
    calculate_on?: string;
    code?: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    mode: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    promo_group: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    stackable?: boolean;
    visiblility?: Visibility;
};
type RawBreakup = {
    cod_charge?: number;
    convenience_fee?: number;
    coupon?: number;
    delivery_charge?: number;
    discount?: number;
    fynd_cash?: number;
    gst_charges?: number;
    mrp_total?: number;
    subtotal?: number;
    total?: number;
    vog?: number;
    you_saved?: number;
};
type Restrictions = {
    bulk_bundle?: BulkBundleRestriction;
    coupon_allowed?: boolean;
    ordering_stores?: number[];
    payments?: any;
    platforms?: string[];
    post_order?: PostOrder;
    price_range?: PriceRange;
    user_groups?: number[];
    user_type?: string;
    uses?: UsesRestriction;
};
type Restrictions1 = {
    anonymous_users?: boolean;
    order_quantity?: number;
    payments?: PromotionPaymentModes[];
    platforms?: string[];
    post_order?: PostOrder1;
    user_groups?: number[];
    user_id?: string[];
    user_registered?: UserRegistered;
    uses: UsesRestriction1;
};
type Rule = {
    discount_qty?: number;
    key?: number;
    max?: number;
    min?: number;
    value?: number;
};
type RuleDefinition = {
    applicable_on: string;
    auto_apply?: boolean;
    calculate_on: string;
    currency_code?: string;
    is_exact?: boolean;
    scope?: string[];
    type: string;
    value_type: string;
};
type SaveAddressResponse = {
    id?: string;
    is_default_address?: boolean;
    success?: boolean;
};
type SharedCart = {
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    cart_id?: number;
    checkout_mode?: string;
    comment?: string;
    coupon_text?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    gstin?: string;
    id?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    message?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    shared_cart_details?: SharedCartDetails;
    uid?: string;
};
type SharedCartDetails = {
    created_on?: string;
    meta?: any;
    source?: any;
    token?: string;
    user?: any;
};
type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
type ShipmentPromise = {
    formatted?: PromiseFormatted;
    timestamp?: PromiseTimestamp;
};
type ShipmentResponse = {
    box_type?: string;
    dp_id?: string;
    dp_options?: any;
    fulfillment_id?: number;
    fulfillment_type?: string;
    items?: CartProductInfo[];
    order_type?: string;
    promise?: ShipmentPromise;
    shipment_type?: string;
    shipments?: number;
};
type ShippingAddress = {
    address?: string;
    address_type?: string;
    area?: string;
    area_code: string;
    area_code_slug?: string;
    city?: string;
    country?: string;
    country_code?: string;
    country_iso_code?: string;
    country_phone_code?: string;
    email?: string;
    landmark?: string;
    meta?: any;
    name?: string;
    phone?: number;
    pincode?: number;
    state?: string;
};
type StaffCheckout = {
    _id: string;
    employee_code?: string;
    first_name: string;
    last_name: string;
    user: string;
};
type State = {
    is_archived?: boolean;
    is_display?: boolean;
    is_public?: boolean;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type SuccessMessage = {
    message?: string;
    success?: boolean;
};
type UpdateAddressResponse = {
    id?: string;
    is_default_address?: boolean;
    is_updated?: boolean;
    success?: boolean;
};
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    message?: string;
    success?: boolean;
};
type UpdateCartPaymentRequest = {
    address_id?: string;
    aggregator_name?: string;
    id?: string;
    merchant_code?: string;
    payment_identifier?: string;
    payment_mode?: string;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
type UpdateCartShipmentItem = {
    article_uid: string;
    quantity?: number;
    shipment_type: string;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type UpdateProductCart = {
    _custom_json?: any;
    article_id?: string;
    extra_meta?: any;
    identifiers: CartProductIdentifer;
    item_id?: number;
    item_index?: number;
    item_size?: string;
    parent_item_identifiers?: any;
    quantity?: number;
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    applied_promo_details?: AppliedPromotion[];
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    checkout_mode?: string;
    comment?: string;
    coupon_text?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    gstin?: string;
    id?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    message?: string;
    pan_config?: any;
    pan_no?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    user?: UserInfo;
};
type UserInfo = {
    _id?: string;
    created_at?: string;
    external_id?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    mobile?: string;
    modified_on?: string;
    uid?: string;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type UsesRemaining = {
    app?: number;
    total?: number;
    user?: number;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type Validity = {
    priority?: number;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
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
type ConfigurationRequest = {
    terms_conditions_link?: string;
    valid_android_packages?: string[];
};
type ConfigurationRes = {
    application_id?: string;
    success?: boolean;
    terms_conditions_link?: string;
    valid_android_packages?: string[];
};
type E = {
    code?: number;
    exception?: string;
    info?: string;
    message?: string;
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
type GiveawayAudience = {
    audience_id?: string;
    current_count?: number;
};
type GiveawayResponse = {
    items?: Giveaway[];
    page?: Page;
};
type HistoryRes = {
    items?: PointsHistory[];
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
type PointsHistory = {
    _id?: string;
    application_id?: string;
    claimed?: boolean;
    created_at?: string;
    expires_on?: string;
    meta?: any;
    points?: number;
    remaining_points?: number;
    text_1?: string;
    text_2?: string;
    text_3?: string;
    txn_name?: string;
    updated_at?: string;
    user_id?: string;
};
type Referral = {
    code?: string;
};
type RewardsAudience = {
    header_user_id?: string;
    id?: string;
};
type RewardsRule = {
    amount?: number;
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
type Schedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
};
type SetConfigurationRes = {
    success?: boolean;
};
type ShareMessages = {
    email?: number;
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
type AbandonCartDetail = {
    _id?: string;
    address?: any;
    articles?: any[];
    breakup?: any;
    cart_value?: string;
    user_id?: string;
};
type AbandonCartsDetail = {
    context_app_application_id?: string;
    context_traits_email?: string;
    context_traits_first_name?: string;
    context_traits_last_name?: string;
    context_traits_phone_number?: string;
    properties_breakup_values_raw_total?: string;
    properties_cart_id?: string;
    received_at?: ReceivedAt;
};
type AbandonCartsList = {
    cart_total?: string;
    items?: AbandonCartsDetail[];
    page?: Page;
};
type ExportJobReq = {
    end_time?: string;
    event_type?: string;
    marketplace_name?: string;
    start_time?: string;
    trace_id?: string;
};
type ExportJobRes = {
    job_id?: string;
    status?: string;
};
type ExportJobStatusRes = {
    download_url?: string;
    job_id?: string;
    status?: string;
};
type GetLogsListReq = {
    company_id?: string;
    end_date?: string;
    marketplace_name?: string;
    start_date?: string;
};
type GetLogsListRes = {
    items?: MkpLogsResp[];
    page?: Page;
};
type LogInfo = {
    _id?: string;
    article_id?: string;
    brand_id?: number;
    company_id?: number;
    event?: string;
    event_type?: string;
    item_id?: number;
    marketplace_name?: string;
    seller_identifier?: string;
    status?: string;
    store_code?: string;
    store_id?: number;
    trace_id?: string;
};
type MkpLogsResp = {
    count?: string;
    end_time_iso?: string;
    event_type?: string;
    start_time_iso?: string;
    status?: string;
    trace_id?: string;
};
type ReceivedAt = {
    value?: string;
};
type SearchLogReq = {
    company_id?: string;
    end_date?: string;
    identifier?: string;
    identifier_value?: string;
    marketplace_name?: string;
    start_date?: string;
};
type SearchLogRes = {
    items?: LogInfo[];
    page?: Page;
};
type StatGroup = {
    key?: string;
    title?: string;
    url?: string;
};
type StatsGroupComponent = {
    filters?: any;
    key?: string;
    title?: string;
    type?: string;
    url?: string;
};
type StatsGroupComponents = {
    components?: StatsGroupComponent[];
    title?: string;
};
type StatsGroups = {
    groups?: StatGroup[];
};
type StatsRes = {
    data?: any;
    key?: string;
    title?: string;
    type?: string;
};
type AddProxyReq = {
    attached_path?: string;
    proxy_url?: string;
};
type AddProxyResponse = {
    _id?: string;
    application_id?: string;
    attached_path?: string;
    company_id?: string;
    created_at?: string;
    extension_id?: string;
    modified_at?: string;
    proxy_url?: string;
};
type APIError = {
    code?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
};
type RemoveProxyResponse = {
    data?: any;
    message?: string;
};
type Association = {
    application_id?: string[];
    company_id?: number;
    criteria?: string;
    extension_id?: string;
};
type AuthMeta = {
    secret?: string;
    type?: string;
};
type EventConfig = {
    created_on?: string;
    description?: string;
    display_name?: string;
    event_category?: string;
    event_name?: string;
    event_type?: string;
    id?: number;
    version?: string;
};
type EventConfigBase = {
    event_category?: string;
    event_name?: string;
    event_type?: string;
    version?: string;
};
type EventConfigList = {
    items?: EventConfig[];
    page?: Page;
};
type EventConfigResponse = {
    event_configs?: EventConfig[];
};
type EventPayload = {
    event_name?: string;
    event_trace_id?: string;
    event_type?: string;
    id?: number;
    message_id?: string;
    status?: boolean;
    version?: string;
};
type EventProcessedStatus = {
    attempt?: number;
    created_on?: string;
    id?: number;
    processed_on?: string;
    response_code?: string;
    response_message?: string;
    status?: boolean;
    subscriber_id?: string;
};
type SubscriberConfig = {
    association?: Association;
    auth_meta?: AuthMeta;
    custom_headers?: any;
    email_id?: string;
    event_id?: number[];
    id?: number;
    name?: string;
    status?: SubscriberStatus;
    webhook_url?: string;
};
type SubscriberConfigList = {
    items?: SubscriberResponse[];
    page?: Page;
};
type SubscriberEvent = {
    created_date?: string;
    event_id?: number;
    id?: number;
    subscriber_id?: number;
};
type SubscriberResponse = {
    association?: Association;
    auth_meta?: AuthMeta;
    created_on?: string;
    custom_headers?: any;
    email_id?: string;
    event_configs?: EventConfig[];
    id?: number;
    name?: string;
    status?: SubscriberStatus;
    updated_on?: string;
    webhook_url?: string;
};
type CreateLogResponse = {
    internal_message?: string;
    message?: string;
};
type DeviceInfo = {
    extra_meta?: any;
    user_agent?: string;
};
type EntityObj = {
    action?: string;
    entity_details?: any;
    id?: string;
    type?: string;
};
type EntityObject = {
    action?: string;
    id?: string;
    type?: string;
};
type EntityTypeObj = {
    display_name?: string;
    entity_value?: string;
};
type EntityTypesResponse = {
    items?: EntityTypeObj[];
};
type Location = {
    extra_meta?: any;
};
type LogDocs = {
    _id?: string;
    application?: string;
    company?: string;
    date?: string;
    device_info?: DeviceInfo;
    entity?: EntityObj;
    location?: Location;
    logs?: any;
    modifier?: Modifier;
    sessions?: string;
};
type LogMetaObj = {
    application?: string;
    device_info?: any;
    entity?: EntityObject;
    location?: any;
    modifier?: any;
};
type LogSchemaResponse = {
    docs?: LogDocs[];
};
type Modifier = {
    as_administrator?: boolean;
    user_details?: any;
    user_id?: string;
};
type RequestBodyAuditLog = {
    log_meta: LogMetaObj;
    log_payload: any;
};
