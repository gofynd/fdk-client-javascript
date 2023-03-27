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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, TicketSubCategory, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, Code, PaymentCode, GetPaymentCode, GetPaymentCodeResponse, PaymentModeInfo, ShipmentStatus, UserDataInfo, Prices, ShipmentItemFulFillingStore, PlatformItem, GSTDetailsData, BagUnit, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, UserDetailsData, TrackingList, BagStateMapper, BagStatusHistory, OrderDetailsData, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagGST, OrderBrandName, BagConfigs, PlatformDeliveryAddress, OrderBagArticle, Identifier, FinancialBreakup, OrderBags, ShipmentPayments, FulfillingStore, ShipmentStatusData, DPDetailsData, ShipmentInfoResponse, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, DateRange, ManifestFilter, GeneratedManifestItem, ManifestPage, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, ArticleDetails, AffiliateMeta, AffiliateBagDetails, BagGSTDetails, Brand, Dates, Attributes, Item, PDFLinks, ShipmentTimeStamp, LockData, DebugInfo, Formatted, BuyerDetails, EInvoice, EinvoiceInfo, ShipmentMeta, AffiliateDetails, B2BPODetails, BagMeta, Dimensions, Weight, ReturnConfig, Article, StoreAddress, EInvoicePortalDetails, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, StoreMeta, Store, BagReturnableCancelableStatus, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, Products, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, MarketPlacePdf, AffiliateBag, OrderUser, UserData, OrderPriority, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, BillingInfo, TaxInfo, ShippingInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, DeleteResponse, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, Price, Size, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemMeta, SuccessResponse1, MOQ, ApplicationItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionBadge, SeoDetail, UserInfo, CollectionImage, CollectionBanner, CollectionSchedule, CollectionQuery, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, SingleCategoryResponse, CategoryUpdateResponse, CustomOrder, Trader, TaxIdentifier, NetQuantity, ProductPublish, TeaserTag, ProductCreateUpdate, Image, Logo, ProductPublished, Product, ProductListingResponse, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, Trader1, PriceMeta, DimensionResponse, QuantityBase, Quantities, WeightResponse, ReturnConfig1, CompanyMeta, BrandMeta, ManufacturerResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, UserSerializer1, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, SellerPhoneNumber, LocationManagerSerializer, UserSerializer2, GetAddressSerializer, GetCompanySerializer, LocationIntegrationType, ProductReturnConfigSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationStoreJson, ContactDetails, BusinessCountryInfo, Website, BusinessDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Rule, Validation, CouponDateMeta, State, CouponAuthor, CouponAction, CouponSchedule, PriceRange, PostOrder, PaymentAllowValue, PaymentModes, BulkBundleRestriction, UsesRemaining, UsesRestriction, Restrictions, DisplayMetaDict, DisplayMeta, RuleDefinition, Validity, Ownership, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, CompareObject, ItemCriteria, PromotionDateMeta, PromotionAuthor, DiscountOffer, DiscountRule, Ownership1, PromotionSchedule, PostOrder1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, Restrictions1, DisplayMeta1, Visibility, PromotionAction, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CouponBreakup, LoyaltyPoints, DisplayBreakup, RawBreakup, CartBreakup, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, ProductPrice, ProductPriceInfo, ProductAvailability, CartProductIdentifer, PromoMeta, ActionQuery, ProductAction, CategoryInfo, ProductImage, CartProduct, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
}
import Common = require("./Common/CommonPlatformClient");
import Lead = require("./Lead/LeadPlatformClient");
import Billing = require("./Billing/BillingPlatformClient");
import Communication = require("./Communication/CommunicationPlatformClient");
import Payment = require("./Payment/PaymentPlatformClient");
import Order = require("./Order/OrderPlatformClient");
import Catalog = require("./Catalog/CatalogPlatformClient");
import CompanyProfile = require("./CompanyProfile/CompanyProfilePlatformClient");
import FileStorage = require("./FileStorage/FileStoragePlatformClient");
import Inventory = require("./Inventory/InventoryPlatformClient");
import Configuration = require("./Configuration/ConfigurationPlatformClient");
import Analytics = require("./Analytics/AnalyticsPlatformClient");
import Discount = require("./Discount/DiscountPlatformClient");
import Webhook = require("./Webhook/WebhookPlatformClient");
import AuditTrail = require("./AuditTrail/AuditTrailPlatformClient");
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
    display_fields: string[];
    aggregators?: any[];
    created: boolean;
    excluded_fields: string[];
    success: boolean;
    app_id: string;
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
type PaymentGatewayConfig = {
    secret: string;
    merchant_salt: string;
    config_type: string;
    is_active?: boolean;
    key: string;
};
type PaymentGatewayConfigRequest = {
    is_active?: boolean;
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
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
    large: string;
    small: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type IntentApp = {
    display_name?: string;
    code?: string;
    package_name?: string;
    logos?: PaymentModeLogo;
};
type PaymentModeList = {
    exp_month?: number;
    card_fingerprint?: string;
    fynd_vpa?: string;
    nickname?: string;
    aggregator_name: string;
    intent_flow?: boolean;
    logo_url?: PaymentModeLogo;
    compliant_with_tokenisation_guidelines?: boolean;
    intent_app_error_list?: string[];
    card_issuer?: string;
    timeout?: number;
    card_brand?: string;
    expired?: boolean;
    display_priority?: number;
    card_id?: string;
    exp_year?: number;
    card_token?: string;
    name?: string;
    card_isin?: string;
    card_brand_image?: string;
    card_number?: string;
    display_name?: string;
    card_type?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    merchant_code?: string;
    intent_app?: IntentApp[];
    retry_count?: number;
    code?: string;
    card_reference?: string;
    card_name?: string;
};
type RootPaymentMode = {
    name: string;
    add_card_enabled?: boolean;
    save_card?: boolean;
    display_priority: number;
    aggregator_name?: string;
    is_pay_by_card_pl?: boolean;
    list?: PaymentModeList[];
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
    customers: any;
    unique_transfer_no: any;
    transfer_type: string;
    payouts_aggregators: any[];
    more_attributes: any;
    is_active: boolean;
    is_default: boolean;
};
type PayoutBankDetails = {
    account_no?: string;
    account_type: string;
    ifsc_code: string;
    bank_name?: string;
    country?: string;
    account_holder?: string;
    branch_name?: string;
    city?: string;
    pincode?: number;
    state?: string;
};
type PayoutRequest = {
    aggregator: string;
    bank_details: PayoutBankDetails;
    users: any;
    transfer_type: string;
    is_active: boolean;
    unique_external_id: string;
};
type PayoutResponse = {
    bank_details: any;
    aggregator: string;
    unique_transfer_no: string;
    created: boolean;
    users: any;
    success: boolean;
    transfer_type: string;
    is_active: boolean;
    payouts: any;
    payment_status: string;
};
type UpdatePayoutResponse = {
    is_active: boolean;
    success: boolean;
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
    config: any;
    aggregator: string;
    success: boolean;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    success: boolean;
    data: any;
};
type RefundAccountResponse = {
    is_verified_flag?: boolean;
    success: boolean;
    data?: any;
    message: string;
};
type NotFoundResourceError = {
    code: string;
    success: boolean;
    description: string;
};
type BankDetailsForOTP = {
    account_no: string;
    ifsc_code: string;
    bank_name: string;
    account_holder: string;
    branch_name: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    bank_name: string;
    branch_name: string;
    success?: boolean;
};
type OrderBeneficiaryDetails = {
    transfer_mode: string;
    comment?: string;
    title: string;
    beneficiary_id: string;
    branch_name?: string;
    subtitle: string;
    bank_name: string;
    address: string;
    modified_on: string;
    is_active: boolean;
    email: string;
    account_no: string;
    id: number;
    display_name: string;
    created_on: string;
    delights_user_name?: string;
    ifsc_code: string;
    account_holder: string;
    mobile?: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    payment_gateway?: string;
    current_status?: string;
    payment_id?: string;
    order_id?: string;
};
type MultiTenderPaymentMethod = {
    amount: number;
    meta?: MultiTenderPaymentMeta;
    name?: string;
    mode: string;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    success: boolean;
    order_id: string;
    message: string;
};
type Code = {
    code: string;
    merchant_code: string;
    name: string;
};
type PaymentCode = {
    types: string;
    networks: string;
    codes: Code;
    name: string;
};
type GetPaymentCode = {
    method_code: PaymentCode;
};
type GetPaymentCodeResponse = {
    success: boolean;
    data: GetPaymentCode;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentStatus = {
    title: string;
    ops_status: string;
    hex_code: string;
    actual_status: string;
    status: string;
};
type UserDataInfo = {
    email?: string;
    last_name?: string;
    avis_user_id?: string;
    mobile?: string;
    name?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    first_name?: string;
    uid?: number;
};
type Prices = {
    cashback?: number;
    promotion_effective_discount?: number;
    cashback_applied?: number;
    cod_charges?: number;
    discount?: number;
    refund_credit?: number;
    amount_paid_roundoff?: number;
    amount_paid?: number;
    delivery_charge?: number;
    tax_collected_at_source?: number;
    price_effective?: number;
    refund_amount?: number;
    coupon_value?: number;
    value_of_good?: number;
    price_marked?: number;
    fynd_credits?: number;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type PlatformItem = {
    id?: number;
    l1_category?: string[];
    l3_category_name?: string;
    color?: string;
    name?: string;
    can_cancel?: boolean;
    department_id?: number;
    size?: string;
    images?: string[];
    code?: string;
    image?: string[];
    can_return?: boolean;
    l3_category?: number;
};
type GSTDetailsData = {
    gst_fee: number;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    gstin_code: string;
    value_of_good: number;
};
type BagUnit = {
    applied_promos?: any;
    total_shipment_bags: number;
    identifier: string;
    quantity: number;
    line_number: number;
    ordering_channel: string;
    can_cancel?: boolean;
    group_id?: string;
    shipment_id: string;
    prices?: Prices;
    can_return?: boolean;
    parent_promo_bags?: any;
    bag_id: number;
    status: any;
    item?: PlatformItem;
    gst?: GSTDetailsData;
};
type ShipmentItem = {
    id: string;
    payment_methods?: any;
    application?: any;
    payment_mode_info?: PaymentModeInfo;
    channel?: any;
    shipment_status?: ShipmentStatus;
    created_at: string;
    total_bags_count: number;
    user?: UserDataInfo;
    prices?: Prices;
    shipment_created_at: number;
    sla?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    total_shipments_in_order: number;
    fulfilling_centre: string;
    bags?: BagUnit[];
};
type FilterInfoOption = {
    value?: string;
    name?: string;
    text: string;
};
type FiltersInfo = {
    value: string;
    type: string;
    options?: FilterInfoOption[];
    text: string;
};
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
    applied_filters?: any;
    page?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type UserDetailsData = {
    email: string;
    address: string;
    pincode: string;
    name: string;
    state: string;
    phone: string;
    city: string;
    country: string;
};
type TrackingList = {
    time?: string;
    is_passed?: boolean;
    text: string;
    is_current?: boolean;
    status: string;
};
type BagStateMapper = {
    app_display_name?: string;
    name: string;
    journey_type: string;
    display_name: string;
    app_state_name?: string;
    notify_customer?: boolean;
    is_active?: boolean;
    app_facing?: boolean;
    state_type: string;
    bs_id: number;
};
type BagStatusHistory = {
    updated_at?: string;
    kafka_sync?: boolean;
    store_id: number;
    delivery_awb_number?: string;
    app_display_name?: boolean;
    bsh_id: number;
    bag_state_mapper: BagStateMapper;
    created_at: string;
    state_id: number;
    state_type?: string;
    shipment_id: string;
    display_name?: boolean;
    forward?: boolean;
    delivery_partner_id?: number;
    bag_id: number;
    status: string;
    reasons?: any[];
};
type OrderDetailsData = {
    fynd_order_id: string;
    tax_details?: any;
    cod_charges?: string;
    order_date?: string;
    ordering_channel_logo?: any;
    order_value?: string;
    ordering_channel?: string;
    source?: string;
    affiliate_id?: string;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    item_criteria?: ItemCriterias;
    cart_conditions?: any;
};
type DiscountRules = {
    value?: number;
    type?: string;
};
type AppliedPromos = {
    mrp_promotion?: boolean;
    promo_id?: string;
    article_quantity?: number;
    promotion_name?: string;
    amount?: number;
    buy_rules?: BuyRules[];
    promotion_type?: string;
    discount_rules?: DiscountRules[];
};
type BagGST = {
    gst_fee?: number;
    gst_tax_percentage?: number;
    hsn_code?: string;
    is_default_hsn_code?: boolean;
    gst_tag?: string;
    brand_calculated_amount?: number;
    gstin_code?: string;
    value_of_good?: number;
};
type OrderBrandName = {
    id: number;
    logo: string;
    created_on: number;
    company: string;
    brand_name: string;
    modified_on?: number;
};
type BagConfigs = {
    is_returnable: boolean;
    allow_force_return: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
};
type PlatformDeliveryAddress = {
    updated_at?: string;
    landmark?: string;
    email?: string;
    pincode?: string;
    address_type?: string;
    version?: string;
    address1?: string;
    state?: string;
    longitude?: number;
    created_at?: string;
    phone?: string;
    latitude?: number;
    contact_person?: string;
    address_category?: string;
    address2?: string;
    area?: string;
    city?: string;
    country?: string;
};
type OrderBagArticle = {
    return_config?: any;
    identifiers?: any;
    uid?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    amount_paid: number;
    hsn_code: string;
    fynd_credits: number;
    gst_fee: string;
    cashback: number;
    pm_price_split: any;
    promotion_effective_discount: number;
    coupon_effective_discount: number;
    price_effective: number;
    total_units: number;
    brand_calculated_amount: number;
    cashback_applied: number;
    cod_charges: number;
    discount: number;
    item_name: string;
    size: string;
    value_of_good: number;
    price_marked: number;
    transfer_price: number;
    refund_credit: number;
    gst_tax_percentage: number;
    amount_paid_roundoff?: number;
    delivery_charge: number;
    added_to_fynd_cash: boolean;
    tax_collected_at_source?: number;
    gst_tag: string;
    coupon_value: number;
    identifiers: Identifier;
};
type OrderBags = {
    applied_promos?: AppliedPromos[];
    identifier?: string;
    line_number?: number;
    seller_identifier?: string;
    gst_details?: BagGST;
    brand?: OrderBrandName;
    bag_configs?: BagConfigs;
    bag_id: number;
    delivery_address?: PlatformDeliveryAddress;
    can_cancel?: boolean;
    prices?: Prices;
    parent_promo_bags?: any;
    item?: PlatformItem;
    article?: OrderBagArticle;
    entity_type?: string;
    quantity?: number;
    display_name?: string;
    financial_breakup?: FinancialBreakup[];
    can_return?: boolean;
    current_status?: string;
};
type ShipmentPayments = {
    logo?: string;
    mode: string;
    source?: string;
};
type FulfillingStore = {
    id: string;
    store_name: string;
    address: string;
    pincode: string;
    fulfillment_channel: string;
    state: string;
    code: string;
    meta: any;
    country: string;
    phone: string;
    city: string;
    contact_person: string;
};
type ShipmentStatusData = {
    id?: number;
    created_at?: string;
    shipment_id?: string;
    bag_list?: number[];
    status?: string;
};
type DPDetailsData = {
    id?: string;
    awb_no?: string;
    pincode?: string;
    eway_bill_id?: string;
    name?: string;
    gst_tag?: string;
    track_url?: string;
    country?: string;
};
type ShipmentInfoResponse = {
    is_not_fynd_source: boolean;
    delivery_status: any[];
    delivery_details?: UserDetailsData;
    credit_note_id: string;
    forward_order_status?: any[];
    lock_status: string;
    email_id: string;
    order_type: string;
    pay_button?: string;
    total_bags?: number;
    gst_details?: GSTDetailsData;
    operational_status?: string;
    tracking_list?: TrackingList[];
    refund_text?: string;
    due_date?: string;
    beneficiary_details?: boolean;
    bank_data?: any;
    status_progress: number;
    items: any[];
    picked_date?: string;
    shipment_quantity?: number;
    user_info?: any;
    payment_mode?: string;
    billing_details?: UserDetailsData;
    can_cancel?: boolean;
    bag_status_history?: BagStatusHistory[];
    priority_text?: string;
    invoice: any;
    refund_details?: any;
    secured_delivery_flag?: string;
    is_pdsr?: string;
    is_invoiced: boolean;
    shipment_id: string;
    prices?: Prices;
    delivery_slot?: any;
    order_status: any;
    tracking_url: string;
    escalation?: any;
    enable_tracking?: boolean;
    forward_tracking_list?: any[];
    order?: OrderDetailsData;
    bags?: OrderBags[];
    is_packaging_order: boolean;
    forward_shipment_status?: any[];
    fyndstore_emp: any;
    vertical?: string;
    is_fynd_store?: string;
    kirana_store_id?: string;
    can_break: string;
    payments?: ShipmentPayments;
    child_nodes?: string[];
    platform_logo: boolean;
    custom_meta?: any[];
    company: any;
    total_items?: number;
    current_shipment_status: any;
    fulfilling_store?: FulfillingStore;
    shipment_images?: string[];
    status?: ShipmentStatusData;
    coupon?: any;
    enable_dp_tracking?: string;
    ordering_store: any;
    dp_details?: DPDetailsData;
    is_fynd_coupon: boolean;
    order_created_time?: string;
    user_id: string;
    affiliate_shipment_id: string;
    go_green?: boolean;
    shipment_status?: string;
    replacement_details?: string;
    packaging_type?: string;
    mid?: string;
    journey_type?: string;
    can_return?: boolean;
    user_agent?: string;
};
type OrderDict = {
    fynd_order_id: string;
    order_date: string;
    shipment_count: number;
};
type PlatformShipment = {
    delivery_details?: UserDetailsData;
    total_bags?: number;
    gst_details?: GSTDetailsData;
    operational_status?: string;
    tracking_list?: TrackingList[];
    picked_date?: string;
    shipment_quantity?: number;
    payment_mode?: string;
    billing_details?: UserDetailsData;
    bag_status_history?: BagStatusHistory[];
    priority_text?: string;
    shipment_id: string;
    prices?: Prices;
    delivery_slot?: any;
    order?: OrderDetailsData;
    bags?: OrderBags[];
    vertical?: string;
    payments?: ShipmentPayments;
    platform_logo?: string;
    custom_meta?: any[];
    total_items?: number;
    fulfilling_store?: FulfillingStore;
    shipment_images?: string[];
    status?: ShipmentStatusData;
    enable_dp_tracking?: string;
    dp_details?: DPDetailsData;
    shipment_status?: string;
    packaging_type?: string;
    journey_type?: string;
    user_agent?: string;
};
type ShipmentDetailsResponse = {
    success: boolean;
    custom_meta?: any[];
    order?: OrderDict;
    shipments?: PlatformShipment[];
};
type SubLane = {
    actions?: any[];
    value?: string;
    text?: string;
    total_items?: number;
    index?: number;
};
type SuperLane = {
    total_items?: number;
    value: string;
    options?: SubLane[];
    text: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformBreakupValues = {
    value?: string;
    name?: string;
    display?: string;
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformOrderItems = {
    total_order_value?: number;
    order_created_time?: string;
    breakup_values?: PlatformBreakupValues[];
    user_info?: UserDataInfo;
    channel?: PlatformChannel;
    payment_mode?: string;
    order_id?: string;
    meta?: any;
    order_value?: number;
    shipments?: PlatformShipment[];
};
type OrderListingResponse = {
    items?: PlatformOrderItems[];
    success?: boolean;
    total_count?: number;
    lane?: string;
    message?: string;
    page?: Page;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    value: number;
    key: string;
    options?: Options[];
    text: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    updated_at?: string;
    updated_time?: string;
    account_name?: string;
    reason?: string;
    awb?: string;
    shipment_type?: string;
    raw_status?: string;
    last_location_recieved_at?: string;
    meta?: any;
    status?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type FiltersResponse = {
    advance?: any[];
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    report_id?: string;
    report_name?: string;
    request_details?: any;
    s3_key?: string;
    display_name?: string;
    report_type?: string;
    report_requested_at?: string;
    report_created_at?: string;
    status?: string;
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
    identifier?: string;
    trace_id?: string;
    error?: NestedErrorSchemaDataSet[];
    data?: any[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    store_id?: string;
    store_name?: string;
    company_id?: string;
    invoice_status?: string;
    store_code?: string;
    do_invoice_label_generated: boolean;
    label?: any;
    batch_id: string;
    invoice?: any;
    data?: any;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type FileResponse = {
    method?: string;
    content_type?: string;
    cdn?: URL;
    file_path?: string;
    file_name?: string;
    size?: number;
    namespace?: string;
    upload?: FileUploadResponse;
    operation?: string;
    tags?: string[];
};
type bulkListingData = {
    store_name?: string;
    successful?: number;
    total?: number;
    processing_shipments?: string[];
    id?: string;
    store_code?: string;
    processing?: number;
    failed_shipments?: any[];
    failed?: number;
    store_id?: number;
    uploaded_on?: string;
    user_id?: string;
    status?: string;
    user_name?: string;
    excel_url?: string;
    company_id?: number;
    file_name?: string;
    batch_id?: string;
    successful_shipments?: any[];
};
type BulkListingPage = {
    current?: number;
    total?: number;
    has_previous?: boolean;
    size?: number;
    type?: string;
    has_next?: boolean;
};
type BulkListingResponse = {
    success?: boolean;
    data?: bulkListingData[];
    error?: string;
    page?: BulkListingPage;
};
type DateRange = {
    to_date?: string;
    from_date?: string;
};
type ManifestFilter = {
    date_range?: DateRange;
    store_name?: string;
    sales_channel_name?: string;
    dp_name?: string;
    dp_ids?: string;
    lane?: string;
    sales_channels?: string;
    stores?: string;
};
type GeneratedManifestItem = {
    created_by?: string;
    manifest_id?: string;
    company_id?: number;
    created_at?: string;
    filters?: ManifestFilter;
    is_active?: boolean;
    status?: string;
};
type ManifestPage = {
    current?: string;
    has_previous?: boolean;
    size?: string;
    type?: string;
    total?: number;
    has_next?: boolean;
};
type GeneratedManifestResponse = {
    items?: GeneratedManifestItem[];
    page?: ManifestPage;
};
type ManifestDetailItem = {
    item_qty?: number;
    invoice_id?: string;
    awb?: string;
    order_id?: string;
    shipment_id?: string;
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
    created_by?: string;
    id?: number;
    manifest_id?: string;
    company_id?: number;
    created_at?: string;
    meta?: ManifestDetailMeta;
    filters?: ManifestFilter;
    is_active?: boolean;
    user_id?: number;
    status?: string;
    uid?: number;
};
type ManifestDetailResponse = {
    items?: ManifestDetailItem[];
    additional_shipment_count?: number;
    manifest_details?: ManifestDetail[];
    page?: ManifestPage;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    question_set?: QuestionSet[];
    id?: number;
    display_name?: string;
    qc_type?: string[];
};
type PlatformShipmentReasonsResponse = {
    success?: boolean;
    reasons?: Reason[];
};
type BulkActionPayload = {
    url: string;
};
type BulkActionResponse = {
    message?: string;
    status?: boolean;
};
type BulkActionDetailsDataField = {
    successful_shipments_count?: number;
    company_id?: string;
    total_shipments_count?: number;
    batch_id?: string;
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
    failed_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    success?: string;
    uploaded_by?: string;
    error?: string[];
    message?: string;
    failed_records?: string[];
    uploaded_on?: string;
    data?: BulkActionDetailsDataField[];
    user_id?: string;
    status?: boolean;
};
type ArticleDetails = {
    status?: any;
};
type AffiliateMeta = {
    employee_discount?: number;
    is_priority?: boolean;
    loyalty_discount?: number;
    order_item_id?: string;
    channel_shipment_id?: string;
    quantity?: number;
    size_level_total_qty?: number;
    coupon_code?: string;
    channel_order_id?: string;
    box_type?: string;
    due_date?: string;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
};
type BagGSTDetails = {
    gst_fee: number;
    hsn_code_id: string;
    igst_tax_percentage: number;
    sgst_tax_percentage: number;
    sgst_gst_fee: string;
    gst_tax_percentage: number;
    cgst_gst_fee: string;
    tax_collected_at_source: number;
    hsn_code: string;
    cgst_tax_percentage: number;
    igst_gst_fee: string;
    is_default_hsn_code?: boolean;
    gst_tag: string;
    brand_calculated_amount: number;
    gstin_code?: string;
    value_of_good: number;
};
type Brand = {
    start_date?: string;
    logo?: string;
    invoice_prefix?: string;
    credit_note_allowed?: boolean;
    pickup_location?: string;
    brand_name: string;
    created_on?: number;
    company: string;
    brand_id: number;
    script_last_ran?: string;
    is_virtual_invoice?: boolean;
    modified_on?: number;
    credit_note_expiry_days?: number;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type Attributes = {
    essential?: string;
    marketer_name?: string;
    name?: string;
    primary_color?: string;
    primary_color_hex?: string;
    primary_material?: string;
    gender?: string[];
    brand_name?: string;
    marketer_address?: string;
};
type Item = {
    branch_url?: string;
    l2_category?: string[];
    brand: string;
    last_updated_at?: string;
    attributes: Attributes;
    slug_key: string;
    l1_category_id?: number;
    can_cancel?: boolean;
    department_id?: number;
    webstore_product_url?: string;
    image: string[];
    l2_category_id?: number;
    color?: string;
    name: string;
    size: string;
    meta?: any;
    code?: string;
    l1_category?: string[];
    l3_category_name?: string;
    item_id: number;
    brand_id: number;
    gender?: string;
    can_return?: boolean;
    l3_category?: number;
};
type PDFLinks = {
    label_type: string;
    label_a6?: string;
    credit_note_url?: string;
    invoice_a4?: string;
    invoice_a6?: string;
    invoice_pos?: string;
    invoice_type: string;
    label?: string;
    label_a4?: string;
    b2b?: string;
    invoice?: string;
    po_invoice?: string;
    label_pos?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type BuyerDetails = {
    address: string;
    pincode: number;
    name: string;
    state: string;
    ajio_site_id?: string;
    city: string;
    gstin: string;
};
type EInvoice = {
    error_message?: string;
    acknowledge_no?: number;
    irn?: string;
    signed_qr_code?: string;
    signed_invoice?: string;
    error_code?: string;
    acknowledge_date?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type ShipmentMeta = {
    weight: number;
    marketplace_store_id?: string;
    return_awb_number?: string;
    dp_options?: any;
    dp_name?: string;
    order_type?: string;
    awb_number?: string;
    b2c_buyer_details?: any;
    forward_affiliate_order_id?: string;
    due_date?: string;
    po_number?: string;
    external?: any;
    timestamp?: ShipmentTimeStamp;
    lock_data?: LockData;
    auto_trigger_dp_assignment_acf: boolean;
    debug_info?: DebugInfo;
    dp_sort_key?: string;
    formatted?: Formatted;
    b2b_buyer_details?: BuyerDetails;
    shipment_volumetric_weight?: number;
    return_details?: any;
    return_affiliate_order_id?: string;
    assign_dp_from_sb?: boolean;
    bag_weight?: any;
    return_affiliate_shipment_id?: string;
    return_store_node?: number;
    same_store_available: boolean;
    shipment_weight?: number;
    packaging_name?: string;
    forward_affiliate_shipment_id?: string;
    einvoice_info?: EinvoiceInfo;
    fulfilment_priority_text?: string;
    ewaybill_info?: any;
    dp_id?: string;
    store_invoice_updated_date?: string;
    box_type?: string;
};
type AffiliateDetails = {
    affiliate_order_id: string;
    ad_id?: string;
    company_affiliate_tag?: string;
    affiliate_store_id: string;
    pdf_links?: PDFLinks;
    shipment_meta: ShipmentMeta;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_id?: string;
    affiliate_shipment_id: string;
};
type B2BPODetails = {
    docker_number?: string;
    partial_can_ret?: boolean;
    po_line_amount?: number;
    item_base_price?: number;
    total_gst_percentage?: number;
    po_tax_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Dimensions = {
    unit?: string;
    height?: number;
    width?: number;
    length?: number;
    is_default?: boolean;
};
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
type ReturnConfig = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Article = {
    raw_meta?: any;
    dimensions?: Dimensions;
    weight?: Weight;
    uid: string;
    a_set?: any;
    size: string;
    esp_modified?: any;
    seller_identifier: string;
    return_config?: ReturnConfig;
    code?: string;
    is_set?: boolean;
    child_details?: any;
    identifiers: Identifier;
    _id: string;
};
type StoreAddress = {
    landmark?: string;
    longitude: number;
    city: string;
    pincode: number;
    version?: string;
    country_code: string;
    phone: string;
    address_type: string;
    contact_person: string;
    updated_at: string;
    country: string;
    email?: string;
    address1: string;
    latitude: number;
    state: string;
    created_at: string;
    address_category: string;
    address2?: string;
    area?: string;
};
type EInvoicePortalDetails = {
    user?: string;
    password?: string;
    username?: string;
};
type Document = {
    legal_name: string;
    verified: boolean;
    value: string;
    ds_type: string;
    url?: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    username?: string;
    enabled: boolean;
    password?: string;
    user?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type StoreMeta = {
    gst_number?: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    ewaybill_portal_details?: any;
    additional_contact_details?: any;
    timing?: any[];
    documents?: StoreDocuments;
    notification_emails?: string[];
    display_name: string;
    gst_credentials: StoreGstCredentials;
    stage: string;
    product_return_config?: any;
};
type Store = {
    store_address_json?: StoreAddress;
    s_id: string;
    store_email: string;
    packaging_material_count?: number;
    vat_no?: string;
    longitude: number;
    city: string;
    alohomora_user_id?: number;
    login_username: string;
    pincode: string;
    is_archived?: boolean;
    brand_store_tags?: string[];
    is_active?: boolean;
    mall_area?: string;
    phone: number;
    country: string;
    contact_person: string;
    updated_at?: string;
    store_active_from?: string;
    address1: string;
    name: string;
    is_enabled_for_recon?: boolean;
    code?: string;
    meta: StoreMeta;
    latitude: number;
    parent_store_id?: number;
    order_integration_id?: string;
    company_id: number;
    fulfillment_channel: string;
    state: string;
    created_at: string;
    location_type: string;
    mall_name?: string;
    brand_id?: any;
    address2?: string;
};
type BagReturnableCancelableStatus = {
    is_returnable: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
};
type BagDetailsPlatformResponse = {
    applied_promos?: any[];
    b_type?: string;
    article_details?: ArticleDetails;
    original_bag_list?: number[];
    identifier?: string;
    line_number?: number;
    seller_identifier?: string;
    affiliate_bag_details: AffiliateBagDetails;
    bag_status: BagStatusHistory[];
    gst_details: BagGSTDetails;
    operational_status?: string;
    brand: Brand;
    bag_update_time?: number;
    dates?: Dates;
    b_id: number;
    bag_status_history?: BagStatusHistory;
    qc_required?: any;
    no_of_bags_order?: number;
    shipment_id?: string;
    prices: Prices;
    parent_promo_bags?: any;
    tags?: string[];
    item: Item;
    affiliate_details?: AffiliateDetails;
    current_operational_status: BagStatusHistory;
    meta?: BagMeta;
    restore_coupon?: boolean;
    article: Article;
    restore_promos?: any;
    order_integration_id?: string;
    ordering_store?: Store;
    status: BagReturnableCancelableStatus;
    reasons?: any[];
    entity_type?: string;
    quantity?: number;
    display_name?: string;
    journey_type: string;
    financial_breakup: FinancialBreakup[];
    current_status: BagStatusHistory;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    page_type: string;
    current: number;
    size: number;
    item_total: number;
    has_next: boolean;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    shipment_id?: string;
    status?: number;
    message?: string;
    error?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    error_trace?: string;
    status: number;
    message: string;
};
type StoreReassign = {
    affiliate_id?: string;
    set_id?: string;
    affiliate_order_id?: string;
    fynd_order_id?: string;
    mongo_article_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
    item_id?: string;
    store_id: number;
    reason_ids?: number[];
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_id?: string;
    affiliate_order_id?: string;
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
    id?: string;
    reason_text: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    action_type: string;
    action: string;
    entity_type: string;
};
type Bags = {
    is_locked?: boolean;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    bag_id?: number;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    affiliate_id?: string;
    shipment_id?: string;
    is_shipment_locked?: boolean;
    bags?: Bags[];
    affiliate_shipment_id?: string;
    is_bag_locked?: boolean;
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    status?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    message?: string;
    success?: boolean;
};
type AnnouncementResponse = {
    company_id?: number;
    description?: string;
    to_datetime?: string;
    platform_id?: string;
    id: number;
    title?: string;
    created_at?: string;
    logo_url?: string;
    from_datetime?: string;
    platform_name?: string;
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
type EntitiesDataUpdates = {
    filters?: any[];
    data?: any;
};
type ProductsDataUpdatesFilters = {
    line_number?: number;
    identifier?: string;
};
type ProductsDataUpdates = {
    filters?: ProductsDataUpdatesFilters[];
    data?: any;
};
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    products?: ProductsDataUpdates[];
};
type Products = {
    line_number?: number;
    identifier?: string;
    quantity?: number;
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
    line_number?: number;
    identifier?: string;
    quantity?: number;
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
    data_updates?: DataUpdates;
    identifier: string;
    products?: Products[];
    reasons?: ReasonsData;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    status?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    statuses?: StatuesRequest[];
    unlock_before_transition?: boolean;
    task?: boolean;
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    code?: string;
    identifier?: string;
    final_state?: any;
    message?: string;
    meta?: any;
    exception?: string;
    stack_trace?: string;
    status?: number;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    item_size: string;
    price_marked: number;
    seller_identifier: string;
    sku: string;
    identifier: any;
    avl_qty: number;
    modified_on: string;
    _id: string;
    discount: number;
    pdf_links?: MarketPlacePdf;
    affiliate_store_id: string;
    transfer_price: number;
    unit_price: number;
    company_id: number;
    item_id: number;
    quantity: number;
    affiliate_meta: any;
    fynd_store_id: string;
    price_effective: number;
    amount_paid: number;
    store_id: number;
    hsn_code_id: string;
    delivery_charge: number;
};
type OrderUser = {
    first_name: string;
    pincode: string;
    city: string;
    address2?: string;
    address1?: string;
    country: string;
    mobile: number;
    last_name: string;
    phone: number;
    state: string;
    email: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderPriority = {
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
};
type ArticleDetails1 = {
    _id: string;
    attributes: any;
    weight: any;
    dimension: any;
    category: any;
    brand_id: number;
    quantity: number;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_type: string;
    fulfillment_id: number;
};
type ShipmentDetails = {
    dp_id?: number;
    shipments: number;
    affiliate_shipment_id: string;
    box_type?: string;
    meta?: any;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentConfig = {
    journey: string;
    to_pincode: string;
    identifier: string;
    payment_mode: string;
    source: string;
    action: string;
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    affiliate_order_id?: string;
    bags: AffiliateBag[];
    payment_mode: string;
    order_value: number;
    coupon?: string;
    user: UserData;
    billing_address: OrderUser;
    order_priority?: OrderPriority;
    discount: number;
    shipping_address: OrderUser;
    cod_charges: number;
    items: any;
    delivery_charges: number;
    payment?: any;
    shipment?: ShipmentData;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    secret: string;
    description?: string;
    name: string;
    token: string;
    meta?: AffiliateAppConfigMeta[];
    id: string;
    owner: string;
    created_at: string;
    updated_at: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    id: string;
    config?: AffiliateConfig;
    token: string;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    article_lookup?: string;
    bag_end_state?: string;
    affiliate: Affiliate;
    store_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    create_user?: boolean;
};
type CreateOrderPayload = {
    order_info: OrderInfo;
    order_config: OrderConfig;
    affiliate_id: string;
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
    id: number;
    description: string;
    slug: string;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l3_detail?: string;
    l1_detail?: string;
    ticket_id?: string;
    createdat: string;
    message: string;
    ticket_url?: string;
    bag_id?: number;
    type: string;
    l2_detail?: string;
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
    shipment_id: number;
    payment_mode: string;
    customer_name: string;
    message: string;
    brand_name: string;
    country_code: string;
    amount_paid: number;
    order_id: string;
    phone_number: number;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    slug: string;
    bag_id: number;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    shipment_id?: string;
    remarks?: string;
    meta: Meta;
    id: number;
    bag_list?: number[];
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
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    dp_id: number;
    shipment_ids?: string[];
    qc_required: string;
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type BillingInfo = {
    house_no: string;
    state: string;
    address2?: string;
    alternate_mobile_number?: string;
    country_code: string;
    title?: string;
    alternate_email?: string;
    pincode: string;
    customer_code?: string;
    primary_email: string;
    floor_no: string;
    first_name: string;
    city: string;
    gender?: string;
    address1: string;
    country: string;
    external_customer_code?: string;
    last_name?: string;
    state_code: string;
    middle_name?: string;
    primary_mobile_number: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ShippingInfo = {
    address_type?: string;
    slot?: any[];
    house_no?: string;
    state: string;
    address2?: string;
    alternate_mobile_number?: string;
    country_code: string;
    shipping_type?: string;
    title?: string;
    alternate_email?: string;
    pincode: string;
    customer_code?: string;
    primary_email: string;
    floor_no?: string;
    first_name: string;
    landmark?: string;
    city: string;
    gender?: string;
    address1: string;
    country: string;
    external_customer_code?: string;
    geo_location?: any;
    last_name?: string;
    state_code: string;
    middle_name?: string;
    primary_mobile_number: string;
};
type Tax = {
    amount: any;
    tax_exempt: boolean;
    name: string;
    breakup: any[];
};
type Charge = {
    code?: string;
    name: string;
    amount: any;
    type: string;
    tax: Tax;
};
type LineItem = {
    custom_messasge?: string;
    external_line_id?: string;
    charges: Charge[];
    meta?: any;
    seller_identifier: string;
    quantity?: number;
};
type ProcessingDates = {
    pack_by_date?: string;
    confirm_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_after_date?: string;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
};
type Shipment = {
    location_id: number;
    line_items: LineItem[];
    processing_dates?: ProcessingDates;
    meta?: any;
    priority?: number;
    external_shipment_id?: number;
};
type PaymentMethod = {
    transaction_data?: any;
    name: string;
    meta?: any;
    amount: number;
    refund_by: string;
    collect_by: string;
    mode: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type CreateOrderAPI = {
    currency_info: any;
    billing_info: BillingInfo;
    tax_info?: TaxInfo;
    shipping_info: ShippingInfo;
    charges: Charge[];
    external_creation_date?: string;
    meta?: any;
    shipments: Shipment[];
    application_id?: string;
    external_order_id?: string;
    payment_info: PaymentInfo;
};
type CreateOrderErrorReponse = {
    code?: string;
    request_id?: string;
    message: string;
    meta?: string;
    exception?: string;
    stack_trace?: string;
    status: number;
    info?: any;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    refund_by?: string;
    collect_by?: string;
    mode?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
};
type CreateChannelConfig = {
    shipment_assignment?: string;
    dp_configuration?: DpConfiguration;
    logo_url?: any;
    lock_states?: string[];
    location_reassignment?: boolean;
    payment_info?: CreateChannelPaymentInfo;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    is_upserted?: boolean;
    is_inserted?: boolean;
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
    end_date: string;
    mobile: number;
    start_date: string;
    order_details?: FyndOrderIdList[];
};
type GetSearchWordsData = {
    _custom_json?: any;
    words?: string[];
    result?: any;
    app_id?: string;
    is_active?: boolean;
    uid?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    words?: string[];
    result: SearchKeywordResult;
    app_id?: string;
    is_active?: boolean;
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
    words?: string[];
    results?: any[];
    app_id?: string;
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
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
    _custom_json?: any;
    action?: AutocompleteAction;
    logo?: Media;
    display?: string;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    words?: string[];
    results?: AutocompleteResult[];
    app_id?: string;
    is_active?: boolean;
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    results?: any[];
    _custom_json?: any;
    app_id?: string;
};
type ProductBundleItem = {
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    product_uid: number;
    auto_select?: boolean;
    max_quantity: number;
    min_quantity: number;
};
type ProductBundleRequest = {
    name: string;
    meta?: any;
    created_by?: any;
    slug: string;
    modified_by?: any;
    created_on?: string;
    logo?: string;
    products: ProductBundleItem[];
    choice: string;
    same_store_assignment?: boolean;
    page_visibility?: string[];
    is_active: boolean;
    company_id?: number;
    modified_on?: string;
};
type GetProductBundleCreateResponse = {
    name: string;
    meta?: any;
    created_by?: any;
    slug: string;
    modified_by?: any;
    created_on?: string;
    logo?: string;
    products: ProductBundleItem[];
    choice: string;
    same_store_assignment?: boolean;
    page_visibility?: string[];
    id?: string;
    is_active: boolean;
    company_id?: number;
    modified_on?: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type Price = {
    max_effective?: number;
    min_effective?: number;
    min_marked?: number;
    max_marked?: number;
    currency?: string;
};
type Size = {
    value?: string;
    quantity?: number;
    display?: string;
    is_available?: boolean;
};
type LimitedProductData = {
    images?: string[];
    name?: string;
    identifier?: any;
    price?: any;
    short_description?: string;
    slug?: string;
    sizes?: string[];
    attributes?: any;
    quantity?: number;
    item_code?: string;
    country_of_origin?: string;
    uid?: number;
};
type GetProducts = {
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    price?: Price;
    product_uid?: number;
    sizes?: Size[];
    auto_select?: boolean;
    product_details?: LimitedProductData;
    max_quantity?: number;
    min_quantity?: number;
};
type GetProductBundleResponse = {
    name?: string;
    meta?: any;
    slug?: string;
    logo?: string;
    products?: GetProducts[];
    choice?: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    is_active?: boolean;
    company_id?: number;
};
type ProductBundleUpdateRequest = {
    name: string;
    meta?: any;
    slug: string;
    modified_by?: any;
    logo?: string;
    products: ProductBundleItem[];
    choice: string;
    same_store_assignment?: boolean;
    page_visibility?: string[];
    is_active: boolean;
    company_id?: number;
    modified_on?: string;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    subtitle?: string;
    name: string;
    tag?: string;
    created_by?: any;
    brand_id?: number;
    created_on?: string;
    active?: boolean;
    image?: string;
    guide?: Guide;
    id?: string;
    title: string;
    modified_by?: any;
    description?: string;
    company_id?: number;
    modified_on?: string;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type SizeGuideResponse = {
    subtitle?: string;
    name?: string;
    created_by?: any;
    tag?: string;
    brand_id?: number;
    created_on?: string;
    active?: boolean;
    guide?: any;
    id?: string;
    title?: string;
    modified_by?: any;
    company_id?: number;
    modified_on?: string;
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
type MOQ = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
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
    key?: string;
    name: string;
    display_type: string;
    slug?: string;
    logo?: string;
    is_active: boolean;
    unit?: string;
    priority: number;
};
type AppConfigurationDetail = {
    name?: string;
    template_slugs?: string[];
    slug: string;
    attributes?: AttributeDetailsGroup[];
    logo?: string;
    app_id: string;
    is_default: boolean;
    is_active: boolean;
    priority: number;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    has_next: boolean;
    current: number;
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
    key: string;
    name?: string;
    logo?: string;
    app_id: string;
    is_default: boolean;
    is_active: boolean;
    default_key: string;
    priority: number;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
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
type GetCatalogConfigurationDetailsProduct = {
    detail?: any;
    variant?: any;
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
    key: string;
    name: string;
    size: ProductSize;
    display_type: string;
    logo?: string;
    is_active: boolean;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    key: string;
    subtitle?: string;
    size?: ProductSize;
    logo?: string;
    title?: string;
    is_active: boolean;
    priority: number;
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
    value?: string;
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
    map?: any;
    map_values?: any[];
};
type ConfigurationListingFilterConfig = {
    key: string;
    name?: string;
    display_name?: string;
    type: string;
    logo?: string;
    is_active: boolean;
    value_config?: ConfigurationListingFilterValue;
    priority: number;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    key: string;
    name?: string;
    logo?: string;
    is_active: boolean;
    priority: number;
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
    created_by?: any;
    product?: ConfigurationProduct;
    type?: string;
    created_on?: string;
    app_id: string;
    config_type: string;
    modified_by?: any;
    listing?: ConfigurationListing;
    config_id?: string;
    modified_on?: string;
};
type AppCatalogConfiguration = {
    created_by?: any;
    product?: ConfigurationProduct;
    type?: string;
    created_on?: string;
    app_id: string;
    config_type: string;
    id?: string;
    modified_by?: any;
    listing?: ConfigurationListing;
    config_id?: string;
    modified_on?: string;
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
    product?: GetCatalogConfigurationDetailsProduct;
    app_id: string;
    config_type: string;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_id?: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    value?: string;
    name?: string;
    is_selected?: boolean;
};
type ProductFiltersKey = {
    name: string;
    operators?: string[];
    logo?: string;
    kind?: string;
    display: string;
};
type ProductFiltersValue = {
    value: any;
    query_format?: string;
    selected_min?: number;
    count?: number;
    selected_max?: number;
    max?: number;
    is_selected: boolean;
    currency_code?: string;
    currency_symbol?: string;
    display_format?: string;
    min?: number;
    display: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type GetCollectionQueryOptionResponse = {
    sort_on?: ProductSortOn[];
    operators: any;
    filters?: ProductFilters[];
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type UserInfo = {
    username?: string;
    uid?: string;
    email?: string;
    user_id?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CollectionSchedule = {
    next_schedule?: NextSchedule[];
    end?: string;
    duration?: number;
    start?: string;
    cron?: string;
};
type CollectionQuery = {
    op: string;
    value: any[];
    attribute: string;
};
type CreateCollection = {
    name: string;
    badge?: CollectionBadge;
    seo?: SeoDetail;
    is_visible?: boolean;
    allow_sort?: boolean;
    slug: string;
    app_id: string;
    is_active?: boolean;
    description?: string;
    _custom_json?: any;
    meta?: any;
    created_by?: UserInfo;
    sort_on?: string;
    banners: CollectionBanner;
    _locale_language?: any;
    type: string;
    visible_facets_keys?: string[];
    _schedule?: CollectionSchedule;
    query?: CollectionQuery[];
    published?: boolean;
    tags?: string[];
    logo: CollectionImage;
    allow_facets?: boolean;
    modified_by?: UserInfo;
    priority?: number;
};
type BannerImage = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionCreateResponse = {
    name?: string;
    badge?: any;
    tag?: string[];
    allow_sort?: boolean;
    slug?: string;
    app_id?: string;
    cron?: any;
    is_active?: boolean;
    description?: string;
    meta?: any;
    sort_on?: string;
    banners?: ImageUrls;
    type?: string;
    visible_facets_keys?: string[];
    _schedule?: any;
    query?: CollectionQuery[];
    logo?: BannerImage;
    allow_facets?: boolean;
    priority?: number;
};
type Media1 = {
    type?: string;
    meta?: any;
    url: string;
};
type GetCollectionDetailNest = {
    name?: string;
    badge?: any;
    tag?: string[];
    allow_sort?: boolean;
    slug?: string;
    app_id?: string;
    cron?: any;
    is_active?: boolean;
    description?: string;
    uid?: string;
    meta?: any;
    banners?: ImageUrls;
    type?: string;
    visible_facets_keys?: string[];
    action?: Action;
    _schedule?: any;
    query?: CollectionQuery[];
    logo?: Media1;
    allow_facets?: boolean;
    priority?: number;
};
type CollectionListingFilterType = {
    is_selected?: boolean;
    name?: string;
    display?: string;
};
type CollectionListingFilterTag = {
    is_selected?: boolean;
    name?: string;
    display?: string;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type GetCollectionListingResponse = {
    page?: Page;
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
};
type CollectionDetailResponse = {
    name?: string;
    meta?: any;
    tag?: string[];
    badge?: any;
    type?: string;
    _schedule?: any;
    banners?: ImageUrls;
    allow_sort?: boolean;
    slug?: string;
    visible_facets_keys?: string[];
    logo?: Media1;
    app_id?: string;
    cron?: any;
    allow_facets?: boolean;
    is_active?: boolean;
    query?: CollectionQuery[];
    description?: string;
    priority?: number;
};
type UpdateCollection = {
    name?: string;
    badge?: CollectionBadge;
    seo?: SeoDetail;
    is_visible?: boolean;
    allow_sort?: boolean;
    slug?: string;
    is_active?: boolean;
    description?: string;
    _custom_json?: any;
    meta?: any;
    sort_on?: string;
    banners?: CollectionBanner;
    _locale_language?: any;
    type?: string;
    visible_facets_keys?: string[];
    _schedule?: CollectionSchedule;
    query?: CollectionQuery[];
    published?: boolean;
    tags?: string[];
    logo?: CollectionImage;
    allow_facets?: boolean;
    modified_by?: UserInfo;
    priority?: number;
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
type ProductDetailAttribute = {
    type?: string;
    key?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type Price1 = {
    currency_code?: string;
    min?: number;
    currency_symbol?: string;
    max?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductBrand = {
    action?: Action;
    name?: string;
    logo?: Media1;
    uid?: number;
};
type ProductListingDetail = {
    name?: string;
    slug: string;
    has_variant?: boolean;
    image_nature?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    uid?: number;
    similars?: string[];
    price?: ProductListingPrice;
    attributes?: any;
    sellable?: boolean;
    item_code?: string;
    tryouts?: string[];
    rating?: number;
    item_type?: string;
    type?: string;
    short_description?: string;
    medias?: Media1[];
    product_online_date?: string;
    color?: string;
    brand?: ProductBrand;
    rating_count?: number;
    discount?: string;
    highlights?: string[];
    promo_meta?: any;
    teaser_tag?: any;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    page?: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
};
type CatalogInsightItem = {
    sellable_count?: number;
    count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightBrand = {
    name?: string;
    article_freshness?: number;
    total_sizes?: number;
    available_sizes?: number;
    available_articles?: number;
    total_articles?: number;
};
type CatalogInsightResponse = {
    item?: CatalogInsightItem;
    brand_distribution?: CatalogInsightBrand;
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
    store_ids?: number[];
    platform?: string;
    opt_level: string;
    enabled?: boolean;
    brand_ids?: number[];
    company_id?: number;
};
type CompanyOptIn = {
    created_by?: any;
    store_ids: number[];
    platform: string;
    opt_level: string;
    created_on: number;
    enabled: boolean;
    modified_by?: any;
    brand_ids: number[];
    company_id: number;
    modified_on: number;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    name?: string;
    uid?: number;
    business_type?: string;
    company_type?: string;
};
type CompanyBrandDetail = {
    brand_name?: string;
    total_article?: number;
    brand_id?: number;
    company_id?: number;
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
    name?: string;
    company_id?: number;
    display_name?: string;
    store_type?: string;
    created_on?: string;
    uid?: number;
    timing?: any;
    address?: any;
    documents?: any[];
    manager?: any;
    store_code?: string;
    additional_contacts?: any[];
    modified_on?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    range?: AttributeSchemaRange;
    allowed_values?: string[];
    type: string;
    format?: string;
    mandatory?: boolean;
    multi?: boolean;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type AttributeMasterDetails = {
    display_type: string;
};
type GenderDetail = {
    name?: string;
    meta?: AttributeMasterMeta;
    schema?: AttributeMaster;
    departments?: string[];
    slug?: string;
    logo?: string;
    is_nested?: boolean;
    filters?: AttributeMasterFilter;
    enabled_for_end_consumer?: boolean;
    id?: string;
    details?: AttributeMasterDetails;
    description?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    meta?: any;
    code?: string;
    errors?: any;
    message?: string;
    status?: number;
};
type DepartmentCreateUpdate = {
    name: string;
    _custom_json?: any;
    slug?: string;
    _cls?: string;
    synonyms?: string[];
    tags?: string[];
    logo: string;
    priority_order: number;
    platforms?: any;
    is_active?: boolean;
    uid?: number;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    username?: string;
    _id?: string;
    user_id?: string;
    contact?: string;
    uid?: string;
};
type GetDepartment = {
    item_type?: string;
    name?: string;
    search?: string;
    created_by?: UserSerializer;
    slug?: string;
    created_on?: string;
    modified_by?: UserSerializer;
    synonyms?: string[];
    logo?: string;
    page_no?: number;
    priority_order?: number;
    page_size?: number;
    is_active?: boolean;
    uid?: number;
    modified_on?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    meta?: any;
    code?: string;
    errors?: any;
    message?: string;
    status?: number;
};
type UserDetail = {
    contact?: string;
    super_user?: boolean;
    username: string;
    user_id: string;
};
type DepartmentModel = {
    name: any;
    _custom_json?: any;
    created_by?: UserDetail;
    _id?: any;
    slug?: any;
    created_on: string;
    _cls?: any;
    verified_by?: UserDetail;
    synonyms?: any[];
    logo: string;
    is_active?: boolean;
    priority_order: number;
    verified_on?: string;
    modified_by?: UserDetail;
    uid?: number;
    modified_on: string;
};
type ProductTemplate = {
    name?: string;
    tag?: string;
    is_expirable: boolean;
    created_by?: any;
    is_archived?: boolean;
    departments?: string[];
    slug: string;
    modified_by?: any;
    created_on?: string;
    attributes?: string[];
    categories?: string[];
    logo?: string;
    is_physical: boolean;
    is_active?: boolean;
    description?: string;
    modified_on?: string;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    name?: any;
    slug?: any;
    multi_size?: any;
    no_of_boxes?: any;
    custom_order?: any;
    is_active?: any;
    command?: any;
    hsn_code?: any;
    description?: any;
    trader_type?: any;
    trader?: any;
    brand_uid?: any;
    item_code?: any;
    size_guide?: any;
    item_type?: any;
    return_config?: any;
    short_description?: any;
    product_group_tag?: any;
    is_dependent?: any;
    country_of_origin?: any;
    media?: any;
    highlights?: any;
    category_slug?: any;
    variants?: any;
    sizes?: any;
    currency?: any;
    tags?: any;
    product_publish?: any;
    teaser_tag?: any;
};
type GlobalValidation = {
    properties?: Properties;
    type?: string;
    definitions?: any;
    title?: string;
    description?: string;
    required?: string[];
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    name?: string;
    tag?: string;
    is_expirable: boolean;
    is_archived?: boolean;
    departments?: string[];
    slug: string;
    attributes?: string[];
    categories?: string[];
    logo?: string;
    id?: string;
    is_physical: boolean;
    is_active?: boolean;
    description?: string;
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
    type?: string;
    brand?: string[];
    templates?: string[];
};
type ProductDownloadsItems = {
    created_by?: VerifiedBy;
    trigger_on?: string;
    seller_id?: number;
    completed_on?: string;
    template_tags?: any;
    status?: string;
    url?: string;
    id?: string;
    task_id?: string;
    data?: ProductDownloadItemsData;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Media2 = {
    landscape: string;
    logo: string;
    portrait: string;
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
type Hierarchy = {
    department: number;
    l2: number;
    l1: number;
};
type CategoryRequestBody = {
    name: string;
    media?: Media2;
    departments: number[];
    slug?: string;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
    level: number;
    hierarchy?: Hierarchy[];
    is_active: boolean;
    tryouts?: string[];
    priority?: number;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type Category = {
    name: string;
    created_by?: any;
    media?: Media2;
    departments: number[];
    slug?: string;
    created_on?: string;
    priority?: number;
    synonyms?: string[];
    modified_by?: any;
    modified_on?: string;
    marketplaces?: CategoryMapping;
    level: number;
    id?: string;
    hierarchy?: Hierarchy[];
    is_active: boolean;
    uid?: number;
    tryouts?: string[];
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
    manufacturing_time?: number;
};
type Trader = {
    type?: string;
    name?: string;
    address?: string[];
};
type TaxIdentifier = {
    hsn_code?: string;
    reporting_hsn?: string;
    hsn_code_id?: string;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductCreateUpdate = {
    name: string;
    departments: number[];
    slug: string;
    multi_size?: boolean;
    no_of_boxes?: number;
    is_image_less_product?: boolean;
    custom_order?: CustomOrder;
    is_active?: boolean;
    description?: string;
    template_tag: string;
    uid?: number;
    variant_media?: any;
    trader: Trader[];
    _custom_json?: any;
    change_request_id?: any;
    brand_uid: number;
    item_code: any;
    size_guide?: string;
    is_set?: boolean;
    item_type: string;
    return_config: ReturnConfig;
    short_description?: string;
    product_group_tag?: string[];
    tax_identifier: TaxIdentifier;
    requester?: string;
    is_dependent?: boolean;
    action?: string;
    bulk_job_id?: string;
    country_of_origin: string;
    company_id: number;
    media?: Media1[];
    category_slug: string;
    highlights?: string[];
    net_quantity?: NetQuantity;
    variants?: any;
    currency: string;
    tags?: string[];
    product_publish?: ProductPublish;
    teaser_tag?: TeaserTag;
};
type Image = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type Logo = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Product = {
    name?: string;
    departments?: number[];
    slug?: string;
    multi_size?: boolean;
    image_nature?: string;
    is_physical?: boolean;
    custom_order?: any;
    is_expirable?: boolean;
    category_uid?: number;
    is_active?: boolean;
    template_tag?: string;
    uid?: number;
    description?: string;
    hsn_code?: string;
    _custom_json?: any;
    brand_uid?: number;
    item_code?: string;
    l3_mapping?: string[];
    size_guide?: string;
    is_set?: boolean;
    item_type?: string;
    images?: Image[];
    short_description?: string;
    all_sizes?: any[];
    primary_color?: string;
    tax_identifier?: any;
    is_dependent?: boolean;
    id?: string;
    color?: string;
    country_of_origin?: string;
    brand?: Brand;
    media?: Media1[];
    highlights?: string[];
    category_slug?: string;
    variants?: any;
    sizes?: any[];
    currency?: string;
    product_publish?: ProductPublished;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type AttributeMasterSerializer = {
    name?: string;
    departments: string[];
    slug: string;
    synonyms?: any;
    enabled_for_end_consumer?: boolean;
    variant?: boolean;
    description?: string;
    unit?: string;
    modified_on?: string;
    created_by?: any;
    schema: AttributeMaster;
    created_on?: string;
    raw_key?: string;
    filters: AttributeMasterFilter;
    details: AttributeMasterDetails;
    tags?: string[];
    logo?: string;
    is_nested?: boolean;
    suggestion?: string;
    modified_by?: any;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    username?: string;
    uid?: string;
    email?: string;
    user_id?: string;
};
type BulkJob = {
    created_by?: UserInfo1;
    cancelled?: number;
    tracking_url?: string;
    total: number;
    cancelled_records?: any[];
    stage?: string;
    failed?: number;
    created_on: string;
    modified_by?: UserInfo1;
    succeed?: number;
    failed_records?: any[];
    file_path?: string;
    custom_template_tag?: string;
    is_active?: boolean;
    template_tag?: string;
    company_id: number;
    modified_on?: string;
};
type BulkResponse = {
    batch_id: string;
    created_by?: UserInfo1;
    created_on: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    modified_on?: string;
};
type UserDetail1 = {
    full_name?: string;
    username?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    created_by?: UserDetail1;
    cancelled?: number;
    cancelled_records?: string[];
    total?: number;
    template?: ProductTemplate;
    stage?: string;
    failed?: number;
    created_on?: string;
    succeed?: number;
    failed_records?: string[];
    modified_by?: UserDetail1;
    file_path?: string;
    is_active?: boolean;
    template_tag?: string;
    company_id?: number;
    modified_on?: string;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkProductRequest = {
    batch_id: string;
    template_tag: string;
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
    company_id?: number;
    url: string;
};
type UserCommon = {
    company_id?: number;
    username?: string;
    user_id?: string;
};
type Items = {
    created_by?: UserCommon;
    company_id?: number;
    cancelled?: number;
    retry?: number;
    tracking_url?: string;
    cancelled_records?: string[];
    stage?: string;
    failed?: number;
    created_on?: string;
    succeed?: number;
    failed_records?: string[];
    is_active?: boolean;
    file_path?: string;
    id?: string;
    modified_by?: UserCommon;
    total?: number;
    modified_on?: string;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    company_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type ItemQuery = {
    item_code?: string;
    uid?: number;
    brand_uid?: number;
};
type GTIN = {
    gtin_value: string;
    primary?: boolean;
    gtin_type: string;
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
type InvSize = {
    size: string;
    price?: number;
    identifiers: GTIN[];
    price_effective: number;
    set?: InventorySet;
    item_dimensions_unit_of_measure?: string;
    item_weight?: number;
    currency: string;
    price_transfer?: number;
    quantity: number;
    item_height?: number;
    expiration_date?: string;
    item_weight_unit_of_measure?: string;
    item_width?: number;
    item_length?: number;
    store_code: string;
    is_set?: boolean;
};
type InventoryRequest = {
    item: ItemQuery;
    company_id: number;
    sizes: InvSize[];
};
type InventoryResponse = {
    size?: string;
    price?: number;
    identifiers?: any;
    inventory_updated_on?: string;
    price_effective?: number;
    sellable_quantity?: number;
    currency?: string;
    price_transfer?: number;
    quantity?: number;
    seller_identifier?: string;
    item_id?: number;
    store?: any;
    uid?: string;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type Trader1 = {
    type: string;
    name: string;
    address: string[];
};
type PriceMeta = {
    tp_notes?: any;
    transfer: number;
    effective: number;
    currency: string;
    marked: number;
    updated_at?: string;
};
type DimensionResponse = {
    height: number;
    length: number;
    is_default: boolean;
    unit: string;
    width: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
    damaged?: QuantityBase;
    sellable?: QuantityBase;
};
type WeightResponse = {
    is_default: boolean;
    shipping: number;
    unit: string;
};
type ReturnConfig1 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type CompanyMeta = {
    id: number;
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
type InventorySellerResponse = {
    identifier: any;
    fynd_item_code: string;
    set?: InventorySet;
    expiration_date?: string;
    trace_id?: string;
    is_active?: boolean;
    uid: string;
    trader?: Trader1[];
    _custom_json?: any;
    fragile: boolean;
    meta?: any;
    created_by?: UserSerializer;
    price: PriceMeta;
    stage?: string;
    dimension: DimensionResponse;
    modified_by?: UserSerializer;
    quantities?: Quantities;
    weight: WeightResponse;
    track_inventory?: boolean;
    seller_identifier: string;
    raw_meta?: any;
    is_set?: boolean;
    return_config?: ReturnConfig1;
    added_on_store?: string;
    company: CompanyMeta;
    tax_identifier?: any;
    brand: BrandMeta;
    country_of_origin: string;
    manufacturer: ManufacturerResponse;
    size: string;
    tags?: string[];
    total_quantity: number;
    item_id: number;
    store: StoreMeta;
    fynd_meta?: any;
    fynd_article_code: string;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    cancelled?: number;
    created_by?: any;
    cancelled_records?: string[];
    total?: number;
    stage?: string;
    failed?: number;
    created_on?: string;
    modified_by?: any;
    failed_records?: string[];
    succeed?: number;
    file_path?: string;
    id?: string;
    is_active?: boolean;
    company_id?: number;
    modified_on?: string;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    price?: number;
    price_effective?: number;
    item_dimensions_unit_of_measure?: string;
    currency?: string;
    quantity?: number;
    tags?: string[];
    total_quantity?: number;
    expiration_date?: string;
    trace_id?: string;
    seller_identifier: string;
    item_weight_unit_of_measure?: string;
    store_code: string;
    price_marked?: number;
};
type InventoryBulkRequest = {
    batch_id: string;
    user?: any;
    company_id: number;
    sizes: InventoryJobPayload[];
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
    completed_on?: string;
    status?: string;
    url?: string;
    task_id: string;
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
    price_effective?: number;
    store_id: number;
    tags?: string[];
    total_quantity?: number;
    expiration_date?: string;
    trace_id?: string;
    seller_identifier: string;
    price_marked?: number;
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
    tax_on_esp?: boolean;
    tax1: number;
    threshold1: number;
    tax_on_mrp: boolean;
    tax2?: number;
    hs2_code: string;
    uid?: number;
    threshold2?: number;
    is_active?: boolean;
    hsn_code: string;
    company_id: number;
};
type HsnCodesObject = {
    tax_on_esp?: boolean;
    tax1?: number;
    threshold1?: number;
    tax_on_mrp?: boolean;
    tax2?: number;
    hs2_code?: string;
    id?: string;
    threshold2?: number;
    hsn_code?: string;
    company_id?: number;
    modified_on?: string;
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
    effective_date: string;
    cess?: number;
    threshold: number;
    rate: number;
};
type HSNDataInsertV2 = {
    created_by?: any;
    type: string;
    created_on?: string;
    country_code: string;
    reporting_hsn: string;
    taxes: TaxSlab[];
    modified_by?: any;
    hsn_code: string;
    description: string;
    modified_on?: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    name?: string;
    discount?: string;
    banners?: ImageUrls;
    departments?: string[];
    slug?: string;
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
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    _custom_json?: any;
    name?: string;
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
    childs?: any[];
    uid?: number;
};
type SecondLevelChild = {
    _custom_json?: any;
    name?: string;
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
    childs?: ThirdLevelChild[];
    uid?: number;
};
type Child = {
    _custom_json?: any;
    name?: string;
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
    childs?: SecondLevelChild[];
    uid?: number;
};
type CategoryItems = {
    name?: string;
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
    childs?: Child[];
    uid?: number;
};
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
};
type CategoryListingResponse = {
    departments?: DepartmentIdentifier[];
    data?: DepartmentCategoryTree[];
};
type ApplicationProductListingResponse = {
    page: Page;
    sort_on?: ProductSortOn[];
    operators?: any;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
};
type ProductDetail = {
    name?: string;
    slug: string;
    has_variant?: boolean;
    image_nature?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    uid?: number;
    similars?: string[];
    attributes?: any;
    item_code?: string;
    tryouts?: string[];
    rating?: number;
    item_type?: string;
    type?: string;
    short_description?: string;
    medias?: Media1[];
    product_online_date?: string;
    color?: string;
    brand?: ProductBrand;
    rating_count?: number;
    highlights?: string[];
    promo_meta?: any;
    teaser_tag?: any;
};
type InventoryPage = {
    type: string;
    next_id?: string;
    has_next?: boolean;
    has_previous?: boolean;
    item_total: number;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
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
type InvoiceCredSerializer = {
    enabled?: boolean;
    username?: string;
    password?: string;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    name?: string;
    mobile_no: SellerPhoneNumber;
    email?: string;
};
type UserSerializer2 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetAddressSerializer = {
    pincode?: number;
    address1?: string;
    latitude?: number;
    country?: string;
    landmark?: string;
    address_type?: string;
    address2?: string;
    country_code?: string;
    longitude?: number;
    city?: string;
    state?: string;
};
type GetCompanySerializer = {
    name?: string;
    created_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    stage?: string;
    company_type?: string;
    created_on?: string;
    business_type?: string;
    verified_by?: UserSerializer2;
    reject_reason?: string;
    verified_on?: string;
    modified_by?: UserSerializer2;
    uid?: number;
    modified_on?: string;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetLocationSerializer = {
    name: string;
    verified_on?: string;
    uid?: number;
    modified_on?: string;
    _custom_json?: any;
    created_by?: UserSerializer1;
    display_name: string;
    warnings?: any;
    stage?: string;
    timing?: LocationDayWiseSerializer[];
    gst_credentials?: InvoiceDetailsSerializer;
    manager?: LocationManagerSerializer;
    documents?: Document[];
    store_type?: string;
    contact_numbers?: SellerPhoneNumber[];
    created_on?: string;
    verified_by?: UserSerializer1;
    company?: GetCompanySerializer;
    notification_emails?: string[];
    address: GetAddressSerializer;
    phone_number: string;
    integration_type?: LocationIntegrationType;
    code: string;
    product_return_config?: ProductReturnConfigSerializer;
    modified_by?: UserSerializer1;
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
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type GetCompanyProfileSerializerResponse = {
    warnings?: any;
    verified_on?: string;
    verified_by?: UserSerializer;
    contact_details?: ContactDetails;
    mode?: string;
    documents?: Document[];
    addresses?: GetAddressSerializer[];
    business_info?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    created_by?: UserSerializer;
    name?: string;
    franchise_enabled?: boolean;
    uid: number;
    created_on?: string;
    business_country_info?: BusinessCountryInfo;
    business_details?: BusinessDetails;
    notification_emails?: string[];
    business_type: string;
    stage?: string;
    company_type: string;
    taxes?: CompanyTaxesSerializer[];
};
type CreateUpdateAddressSerializer = {
    country: string;
    landmark?: string;
    address_type: string;
    latitude: number;
    state: string;
    address2?: string;
    longitude: number;
    pincode: number;
    city: string;
    address1: string;
    country_code?: string;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type UpdateCompany = {
    business_info?: string;
    notification_emails?: string[];
    warnings?: any;
    franchise_enabled?: boolean;
    name?: string;
    business_type?: string;
    _custom_json?: any;
    contact_details?: ContactDetails;
    reject_reason?: string;
    documents?: Document[];
    addresses?: CreateUpdateAddressSerializer[];
    business_details?: BusinessDetails;
    company_type?: string;
    taxes?: CompanyTaxesSerializer1[];
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
    product?: DocumentsObj;
    store_documents?: DocumentsObj;
    stage?: string;
    uid?: number;
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    warnings?: any;
    verified_on?: string;
    verified_by?: UserSerializer;
    mode?: string;
    description?: string;
    modified_by?: UserSerializer;
    _custom_json?: any;
    modified_on?: string;
    created_by?: UserSerializer;
    name: string;
    _locale_language?: any;
    logo?: string;
    uid?: number;
    created_on?: string;
    banner?: BrandBannerSerializer;
    stage?: string;
    slug_key?: string;
    reject_reason?: string;
    synonyms?: string[];
};
type CreateUpdateBrandRequestSerializer = {
    description?: string;
    _custom_json?: any;
    name: string;
    _locale_language?: any;
    logo: string;
    uid?: number;
    company_id?: number;
    brand_tier?: string;
    banner?: BrandBannerSerializer;
    synonyms?: string[];
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
    notification_emails?: string[];
    modified_on?: string;
    created_by?: UserSerializer;
    name?: string;
    verified_by?: UserSerializer;
    business_type: string;
    _custom_json?: any;
    stage?: string;
    uid?: number;
    details?: CompanyDetails;
    market_channels?: string[];
    reject_reason?: string;
    created_on?: string;
    addresses?: GetAddressSerializer[];
    business_country_info?: BusinessCountryInfo;
    verified_on?: string;
    company_type: string;
};
type CompanyBrandSerializer = {
    modified_by?: UserSerializer;
    warnings?: any;
    modified_on?: string;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    stage?: string;
    uid?: number;
    reject_reason?: string;
    created_on?: string;
    brand?: GetBrandResponseSerializer;
    company?: CompanySerializer;
    verified_on?: string;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    uid?: number;
    brands: number[];
    company: number;
};
type LocationSerializer = {
    notification_emails?: string[];
    _custom_json?: any;
    warnings?: any;
    display_name: string;
    name: string;
    timing?: LocationDayWiseSerializer[];
    gst_credentials?: InvoiceDetailsSerializer;
    stage?: string;
    uid?: number;
    product_return_config?: ProductReturnConfigSerializer;
    code: string;
    store_type?: string;
    documents?: Document[];
    contact_numbers?: SellerPhoneNumber[];
    company: number;
    address: GetAddressSerializer;
    manager?: LocationManagerSerializer;
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
type Rule = {
    key?: number;
    discount_qty?: number;
    max?: number;
    min?: number;
    value?: number;
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type CouponSchedule = {
    end?: string;
    next_schedule?: any[];
    duration?: number;
    cron?: string;
    start?: string;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    types?: string[];
    codes?: string[];
    uses?: PaymentAllowValue;
    networks?: string[];
    iins?: string[];
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
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type Restrictions = {
    price_range?: PriceRange;
    post_order?: PostOrder;
    user_groups?: number[];
    ordering_stores?: number[];
    payments?: any;
    coupon_allowed?: boolean;
    bulk_bundle?: BulkBundleRestriction;
    uses?: UsesRestriction;
    platforms?: string[];
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    description?: string;
    subtitle?: string;
    remove?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    title?: string;
};
type RuleDefinition = {
    is_exact?: boolean;
    applicable_on: string;
    auto_apply?: boolean;
    scope?: string[];
    value_type: string;
    currency_code?: string;
    type: string;
    calculate_on: string;
};
type Validity = {
    priority?: number;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponAdd = {
    rule: Rule[];
    validation?: Validation;
    type_slug: string;
    date_meta?: CouponDateMeta;
    state?: State;
    author?: CouponAuthor;
    identifiers: Identifier;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    tags?: string[];
    code: string;
    restrictions?: Restrictions;
    display_meta: DisplayMeta;
    rule_definition: RuleDefinition;
    validity: Validity;
    ownership: Ownership;
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
    rule: Rule[];
    validation?: Validation;
    type_slug: string;
    date_meta?: CouponDateMeta;
    state?: State;
    author?: CouponAuthor;
    identifiers: Identifier;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    tags?: string[];
    code: string;
    restrictions?: Restrictions;
    display_meta: DisplayMeta;
    rule_definition: RuleDefinition;
    validity: Validity;
    ownership: Ownership;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type CompareObject = {
    less_than?: number;
    less_than_equals?: number;
    greater_than_equals?: number;
    greater_than?: number;
    equals?: number;
};
type ItemCriteria = {
    cart_unique_item_quantity?: CompareObject;
    cart_quantity?: CompareObject;
    item_size?: string[];
    buy_rules?: string[];
    item_category?: number[];
    item_store?: number[];
    item_id?: number[];
    item_sku?: string[];
    item_exclude_category?: number[];
    cart_unique_item_amount?: CompareObject;
    available_zones?: string[];
    item_exclude_store?: number[];
    item_brand?: number[];
    item_exclude_company?: number[];
    item_company?: number[];
    item_exclude_sku?: string[];
    item_exclude_id?: number[];
    cart_total?: CompareObject;
    item_exclude_brand?: number[];
    all_items?: boolean;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type DiscountOffer = {
    max_offer_quantity?: number;
    discount_percentage?: number;
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
    apportion_discount?: boolean;
    code?: string;
    discount_price?: number;
    discount_amount?: number;
    max_discount_amount?: number;
    partial_can_ret?: boolean;
};
type DiscountRule = {
    buy_condition: string;
    offer: DiscountOffer;
    discount_type: string;
    item_criteria: ItemCriteria;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionSchedule = {
    end?: string;
    next_schedule?: any[];
    duration?: number;
    published: boolean;
    cron?: string;
    start: string;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
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
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type Restrictions1 = {
    anonymous_users?: boolean;
    user_groups?: number[];
    post_order?: PostOrder1;
    order_quantity?: number;
    user_registered?: UserRegistered;
    payments?: PromotionPaymentModes[];
    user_id?: string[];
    uses: UsesRestriction1;
    platforms?: string[];
};
type DisplayMeta1 = {
    description?: string;
    offer_text?: string;
    name?: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionListItem = {
    buy_rules: any;
    promotion_type: string;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    code?: string;
    stackable?: boolean;
    currency?: string;
    apply_priority?: number;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    mode: string;
    _custom_json?: any;
    apply_exclusive?: string;
    application_id: string;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    visiblility?: Visibility;
    promo_group: string;
    post_order_action?: PromotionAction;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    buy_rules: any;
    promotion_type: string;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    code?: string;
    stackable?: boolean;
    currency?: string;
    apply_priority?: number;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    mode: string;
    _custom_json?: any;
    apply_exclusive?: string;
    application_id: string;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    visiblility?: Visibility;
    promo_group: string;
    post_order_action?: PromotionAction;
};
type PromotionUpdate = {
    buy_rules: any;
    promotion_type: string;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    code?: string;
    stackable?: boolean;
    currency?: string;
    apply_priority?: number;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    mode: string;
    _custom_json?: any;
    apply_exclusive?: string;
    application_id: string;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    visiblility?: Visibility;
    promo_group: string;
    post_order_action?: PromotionAction;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    description?: string;
    example?: string;
    subtitle?: string;
    entity_slug?: string;
    entity_type?: string;
    is_hidden?: boolean;
    modified_on?: string;
    title?: string;
    type?: string;
    created_on?: string;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type CouponBreakup = {
    description?: string;
    max_discount_value?: number;
    sub_title?: string;
    coupon_value?: number;
    message?: string;
    is_applied?: boolean;
    minimum_cart_value?: number;
    coupon_type?: string;
    code?: string;
    title?: string;
    type?: string;
    uid?: string;
    value?: number;
};
type LoyaltyPoints = {
    applicable?: number;
    total?: number;
    description?: string;
    is_applied?: boolean;
};
type DisplayBreakup = {
    key?: string;
    display?: string;
    message?: string[];
    currency_symbol?: string;
    currency_code?: string;
    value?: number;
};
type RawBreakup = {
    vog?: number;
    subtotal?: number;
    delivery_charge?: number;
    you_saved?: number;
    convenience_fee?: number;
    gst_charges?: number;
    fynd_cash?: number;
    discount?: number;
    cod_charge?: number;
    coupon?: number;
    total?: number;
    mrp_total?: number;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
    raw?: RawBreakup;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type BasePrice = {
    marked?: number;
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    seller?: BaseInfo;
    product_group_tags?: string[];
    price?: ArticlePriceInfo;
    parent_item_identifiers?: any;
    store?: BaseInfo;
    quantity?: number;
    type?: string;
    uid?: string;
    extra_meta?: any;
    size?: string;
};
type ProductPrice = {
    selling?: number;
    add_on?: number;
    effective?: number;
    marked?: number;
    currency_symbol?: string;
    currency_code?: string;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type ProductAvailability = {
    is_valid?: boolean;
    other_store_quantity?: number;
    out_of_stock?: boolean;
    sizes?: string[];
    deliverable?: boolean;
};
type CartProductIdentifer = {
    identifier?: string;
};
type PromoMeta = {
    message?: string;
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
type ProductImage = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type CartProduct = {
    name?: string;
    action?: ProductAction;
    categories?: CategoryInfo[];
    slug?: string;
    images?: ProductImage[];
    type?: string;
    uid?: number;
    brand?: BaseInfo;
};
type FreeGiftItem = {
    item_id?: number;
    item_images_url?: string[];
    item_slug?: string;
    item_brand_name?: string;
    item_price_details?: any;
    item_name?: string;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
};
type DiscountRulesApp = {
    raw_offer?: any;
    matched_buy_rules?: string[];
    offer?: any;
    item_criteria?: any;
};
type AppliedPromotion = {
    promotion_type?: string;
    mrp_promotion?: boolean;
    article_quantity?: number;
    applied_free_articles?: AppliedFreeArticles[];
    offer_text?: string;
    discount_rules?: DiscountRulesApp[];
    promotion_name?: string;
    promotion_group?: string;
    amount?: number;
    buy_rules?: BuyRules[];
    promo_id?: string;
};
type CartProductInfo = {
    key?: string;
    article?: ProductArticle;
    price?: ProductPriceInfo;
    is_set?: boolean;
    price_per_unit?: ProductPriceInfo;
    availability?: ProductAvailability;
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
    message?: string;
    bulk_offer?: any;
    promo_meta?: PromoMeta;
    discount?: string;
    product?: CartProduct;
    quantity?: number;
    promotions_applied?: AppliedPromotion[];
    coupon_message?: string;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    items?: CartProductInfo[];
    message?: string;
};
type OpenApiErrorResponse = {
    message?: string;
    errors?: any;
    success?: boolean;
};
type ShippingAddress = {
    area?: string;
    city?: string;
    address?: string;
    name?: string;
    landmark?: string;
    email?: string;
    state?: string;
    meta?: any;
    area_code_slug?: string;
    country_code?: string;
    address_type?: string;
    phone?: number;
    country?: string;
    area_code: string;
    pincode?: number;
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
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    message?: string;
    items?: CartProductInfo[];
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
    price_effective: number;
    product_id: number;
    loyalty_discount?: number;
    employee_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    delivery_charges: number;
    cod_charges: number;
    amount_paid: number;
    price_marked: number;
    discount: number;
    meta?: CartItemMeta;
    quantity?: number;
    size: string;
    coupon_effective_discount: number;
    files?: OpenApiFiles[];
    cashback_applied: number;
    extra_meta?: any;
};
type OpenApiPlatformCheckoutReq = {
    payment_methods: MultiTenderPaymentMethod[];
    delivery_charges: number;
    cart_value: number;
    coupon_value: number;
    files?: OpenApiFiles[];
    cashback_applied: number;
    billing_address: ShippingAddress;
    shipping_address?: ShippingAddress;
    loyalty_discount?: number;
    employee_discount?: any;
    cart_items: OpenApiOrderItem[];
    cod_charges: number;
    coupon_code: string;
    affiliate_order_id?: string;
    payment_mode?: string;
    comment?: string;
    coupon?: string;
    currency_code?: string;
    order_id?: string;
    gstin?: string;
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    message?: string;
    order_id: string;
    success?: boolean;
};
type AbandonedCart = {
    _id: string;
    cashback: any;
    articles: any[];
    payment_methods?: any[];
    buy_now?: boolean;
    fc_index_map?: number[];
    bulk_coupon_discount?: number;
    uid: number;
    last_modified: string;
    payment_mode?: string;
    checkout_mode?: string;
    is_default: boolean;
    shipments?: any[];
    created_on: string;
    is_archive?: boolean;
    expire_at: string;
    delivery_charges?: any;
    cart_value?: number;
    discount?: number;
    user_id: string;
    app_id?: string;
    promotion?: any;
    pick_up_customer_details?: any;
    is_active?: boolean;
    fynd_credits?: any;
    cod_charges?: any;
    payments?: any;
    merge_qty?: boolean;
    meta?: any;
    comment?: string;
    coupon?: any;
    order_id?: string;
    gstin?: string;
};
type AbandonedCartResponse = {
    success?: boolean;
    message?: string;
    items?: AbandonedCart[];
    page?: Page;
    result?: any;
};
type AddProductCart = {
    product_group_tags?: string[];
    display?: string;
    item_id?: number;
    pos?: boolean;
    article_id?: string;
    parent_item_identifiers?: any;
    article_assignment?: any;
    seller_id?: number;
    quantity?: number;
    item_size?: string;
    extra_meta?: any;
    store_id?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    last_modified?: string;
    coupon_text?: string;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    restrict_checkout?: boolean;
    message?: string;
    buy_now?: boolean;
    items?: CartProductInfo[];
    comment?: string;
    checkout_mode?: string;
    delivery_charge_info?: string;
    currency?: CartCurrency;
    gstin?: string;
    id?: string;
};
type AddCartDetailResponse = {
    partial?: boolean;
    message?: string;
    cart?: CartDetailResponse;
    success?: boolean;
};
type UpdateProductCart = {
    item_id?: number;
    item_index?: number;
    article_id?: string;
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
    quantity?: number;
    item_size?: string;
    extra_meta?: any;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    message?: string;
    cart?: CartDetailResponse;
    success?: boolean;
};
type E = {
    code?: number;
    exception?: string;
    info?: string;
    message?: string;
};
type GiveawayResponse = {
    items?: Giveaway[];
    page?: Page;
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
type Schedule = {
    duration?: number;
    end?: string;
    start?: string;
    cron?: string;
};
type RewardsAudience = {
    header_user_id?: string;
    id?: string;
};
type RewardsRule = {
    amount?: number;
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
type Points = {
    available?: number;
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
type Referral = {
    code?: string;
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
type GiveawayAudience = {
    audience_id?: string;
    current_count?: number;
};
type HistoryRes = {
    items?: PointsHistory[];
    page?: Page;
    points?: number;
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
