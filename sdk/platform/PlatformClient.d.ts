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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, Code, PaymentCode, GetPaymentCode, getPaymentCodeResponse, FilterInfoOption, FiltersInfo, PlatformItem, Prices, GSTDetailsData, BagUnit, PaymentModeInfo, UserDataInfo, ShipmentStatus, ShipmentItemFulFillingStore, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, BagGST, OrderBagArticle, BagConfigs, Identifier, FinancialBreakup, OrderBrandName, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, PlatformDeliveryAddress, OrderBags, OrderDetailsData, BagStateMapper, BagStatusHistory, ShipmentPayments, ShipmentStatusData, TrackingList, DPDetailsData, UserDetailsData, FulfillingStore, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailItem, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, AffiliateMeta, AffiliateBagDetails, BagGSTDetails, Attributes, Item, Dates, Weight, ReturnConfig, Dimensions, Article, B2BPODetails, BagMeta, Brand, ArticleDetails, BagReturnableCancelableStatus, StoreAddress, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, StoreMeta, Store, EInvoice, EinvoiceInfo, ShipmentTimeStamp, BuyerDetails, Formatted, LockData, DebugInfo, ShipmentMeta, PDFLinks, AffiliateDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryStoreConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, OrderPriority, OrderUser, UserData, MarketPlacePdf, AffiliateBag, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ShippingInfo, BillingInfo, PaymentMethod, PaymentInfo, ProcessingDates, Tax, Charge, LineItem, Shipment, TaxInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemMeta, SuccessResponse1, MOQ, ApplicationItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, UserInfo, CollectionSchedule, CollectionBadge, CollectionQuery, CollectionImage, CollectionBanner, SeoDetail, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, TaxIdentifier, Trader, TeaserTag, ProductPublish, NetQuantity, CustomOrder, ProductCreateUpdate, ProductPublished, Image, Logo, Product, ProductListingResponse, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, CompanyMeta, PriceMeta, ManufacturerResponse, WeightResponse, Trader1, ReturnConfig1, BrandMeta, DimensionResponse, QuantityBase, Quantities, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ProductReturnConfigSerializer, UserSerializer1, GetAddressSerializer, GetCompanySerializer, SellerPhoneNumber, LocationTimingSerializer, LocationDayWiseSerializer, UserSerializer2, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationManagerSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, CompanyTaxesSerializer, ContactDetails, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, UsesRemaining, UsesRestriction, PostOrder, PriceRange, BulkBundleRestriction, PaymentAllowValue, PaymentModes, Restrictions, CouponDateMeta, Rule, Ownership, DisplayMetaDict, DisplayMeta, Validation, Validity, CouponAction, CouponSchedule, RuleDefinition, CouponAuthor, State, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, DisplayMeta1, PromotionDateMeta, CompareObject, ItemCriteria, Ownership1, Visibility, DiscountOffer, DiscountRule, PromotionAuthor, UsesRemaining1, UsesRestriction1, UserRegistered, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, PromotionAction, PromotionSchedule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CouponBreakup, DisplayBreakup, LoyaltyPoints, RawBreakup, CartBreakup, ProductPrice, ProductPriceInfo, PromoMeta, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, BasePrice, ArticlePriceInfo, BaseInfo, ProductArticle, ProductImage, CategoryInfo, ActionQuery, ProductAction, CartProduct, ProductAvailability, CartProductIdentifer, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    session_config?: any;
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
type SessionExpiry = {
    duration?: number;
    type?: string;
    is_rolling?: boolean;
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
    excluded_fields: string[];
    app_id: string;
    created: boolean;
    aggregators?: any[];
    display_fields: string[];
    success: boolean;
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
type PaymentGatewayConfig = {
    config_type: string;
    merchant_salt: string;
    is_active?: boolean;
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
type IntentApp = {
    logos?: PaymentModeLogo;
    code?: string;
    display_name?: string;
    outage?: any;
    package_name?: string;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    card_isin?: string;
    card_fingerprint?: string;
    logo_url?: PaymentModeLogo;
    retry_count?: number;
    timeout?: number;
    code?: string;
    nickname?: string;
    aggregator_name: string;
    fynd_vpa?: string;
    card_issuer?: string;
    exp_year?: number;
    card_brand_image?: string;
    card_brand?: string;
    card_number?: string;
    intent_flow?: boolean;
    intent_app_error_list?: string[];
    expired?: boolean;
    merchant_code?: string;
    display_name?: string;
    outage?: any;
    name?: string;
    display_priority?: number;
    card_name?: string;
    card_reference?: string;
    intent_app?: IntentApp[];
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_id?: string;
    card_token?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    exp_month?: number;
    card_type?: string;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    anonymous_enable?: boolean;
    save_card?: boolean;
    logo_url?: PaymentModeLogo;
    logo?: string;
    is_pay_by_card_pl?: boolean;
    display_name: string;
    list?: PaymentModeList[];
    name: string;
    aggregator_name?: string;
    display_priority: number;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    is_default: boolean;
    more_attributes: any;
    transfer_type: string;
    is_active: boolean;
    customers: any;
    unique_transfer_no: any;
    payouts_aggregators: any[];
};
type PayoutBankDetails = {
    state?: string;
    city?: string;
    account_holder?: string;
    pincode?: number;
    country?: string;
    ifsc_code: string;
    account_no?: string;
    account_type: string;
    branch_name?: string;
    bank_name?: string;
};
type PayoutRequest = {
    bank_details: PayoutBankDetails;
    users: any;
    unique_external_id: string;
    is_active: boolean;
    transfer_type: string;
    aggregator: string;
};
type PayoutResponse = {
    bank_details: any;
    users: any;
    payouts: any;
    transfer_type: string;
    is_active: boolean;
    aggregator: string;
    created: boolean;
    payment_status: string;
    unique_transfer_no: string;
    success: boolean;
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
type BankDetailsForOTP = {
    account_holder: string;
    ifsc_code: string;
    account_no: string;
    branch_name: string;
    bank_name: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    success?: boolean;
    branch_name: string;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    id: number;
    email: string;
    comment?: string;
    address: string;
    is_active: boolean;
    ifsc_code: string;
    modified_on: string;
    beneficiary_id: string;
    display_name: string;
    account_no: string;
    branch_name?: string;
    transfer_mode: string;
    account_holder: string;
    created_on: string;
    title: string;
    mobile?: string;
    subtitle: string;
    delights_user_name?: string;
    bank_name: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    current_status?: string;
    payment_gateway?: string;
    order_id?: string;
    extra_meta?: any;
};
type MultiTenderPaymentMethod = {
    name?: string;
    amount: number;
    meta?: MultiTenderPaymentMeta;
    mode: string;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    message: string;
    success: boolean;
    order_id: string;
};
type Code = {
    code: string;
    merchant_code: string;
    name: string;
};
type PaymentCode = {
    name: string;
    networks: string;
    codes: Code;
    types: string;
};
type GetPaymentCode = {
    method_code: PaymentCode;
};
type getPaymentCodeResponse = {
    data: GetPaymentCode;
    success: boolean;
};
type FilterInfoOption = {
    value?: string;
    name?: string;
    text: string;
};
type FiltersInfo = {
    type: string;
    options?: FilterInfoOption[];
    value: string;
    text: string;
};
type PlatformItem = {
    can_cancel?: boolean;
    l3_category_name?: string;
    name?: string;
    can_return?: boolean;
    images?: string[];
    id?: number;
    size?: string;
    image?: string[];
    color?: string;
    department_id?: number;
    l1_category?: string[];
    l3_category?: number;
    code?: string;
};
type Prices = {
    cashback_applied?: number;
    cashback?: number;
    cod_charges?: number;
    price_effective?: number;
    value_of_good?: number;
    amount_paid_roundoff?: number;
    tax_collected_at_source?: number;
    refund_amount?: number;
    amount_paid?: number;
    coupon_value?: number;
    delivery_charge?: number;
    refund_credit?: number;
    promotion_effective_discount?: number;
    fynd_credits?: number;
    discount?: number;
    price_marked?: number;
};
type GSTDetailsData = {
    gst_fee: number;
    gstin_code: string;
    value_of_good: number;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
};
type BagUnit = {
    item?: PlatformItem;
    can_cancel?: boolean;
    parent_promo_bags?: any;
    bag_id: number;
    can_return?: boolean;
    total_shipment_bags: number;
    ordering_channel: string;
    group_id?: string;
    applied_promos?: any;
    prices?: Prices;
    line_number: number;
    quantity: number;
    status: any;
    gst?: GSTDetailsData;
    identifier: string;
    shipment_id: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type UserDataInfo = {
    mobile?: string;
    is_anonymous_user?: boolean;
    name?: string;
    uid?: number;
    email?: string;
    gender?: string;
    avis_user_id?: string;
    last_name?: string;
    first_name?: string;
};
type ShipmentStatus = {
    title: string;
    actual_status: string;
    ops_status: string;
    status: string;
    hex_code: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type ShipmentItem = {
    total_bags_count: number;
    bags?: BagUnit[];
    payment_mode_info?: PaymentModeInfo;
    sla?: any;
    id: string;
    created_at: string;
    total_shipments_in_order: number;
    prices?: Prices;
    user?: UserDataInfo;
    channel?: any;
    application?: any;
    shipment_created_at: number;
    shipment_status?: ShipmentStatus;
    fulfilling_centre: string;
    payment_methods?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    page?: any;
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type BagGST = {
    gst_fee?: number;
    gstin_code?: string;
    gst_tag?: string;
    hsn_code?: string;
    value_of_good?: number;
    gst_tax_percentage?: number;
    brand_calculated_amount?: number;
    is_default_hsn_code?: boolean;
};
type OrderBagArticle = {
    identifiers?: any;
    return_config?: any;
    uid?: string;
};
type BagConfigs = {
    is_customer_return_allowed: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    allow_force_return: boolean;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    cashback: number;
    cashback_applied: number;
    pm_price_split: any;
    price_effective: number;
    coupon_effective_discount: number;
    amount_paid_roundoff?: number;
    size: string;
    item_name: string;
    delivery_charge: number;
    promotion_effective_discount: number;
    added_to_fynd_cash: boolean;
    cod_charges: number;
    gst_tax_percentage: number;
    brand_calculated_amount: number;
    coupon_value: number;
    refund_credit: number;
    identifiers: Identifier;
    price_marked: number;
    gst_fee: string;
    total_units: number;
    value_of_good: number;
    tax_collected_at_source?: number;
    transfer_price: number;
    fynd_credits: number;
    gst_tag: string;
    hsn_code: string;
    amount_paid: number;
    discount: number;
};
type OrderBrandName = {
    created_on: number;
    modified_on?: number;
    id: number;
    brand_name: string;
    logo: string;
    company: string;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type AppliedPromos = {
    promotion_name?: string;
    discount_rules?: DiscountRules[];
    amount?: number;
    article_quantity?: number;
    promotion_type?: string;
    promo_id?: string;
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
};
type PlatformDeliveryAddress = {
    phone?: string;
    address_type?: string;
    latitude?: number;
    country?: string;
    pincode?: string;
    email?: string;
    landmark?: string;
    created_at?: string;
    state?: string;
    address2?: string;
    version?: string;
    area?: string;
    updated_at?: string;
    contact_person?: string;
    address1?: string;
    longitude?: number;
    address_category?: string;
    city?: string;
};
type OrderBags = {
    can_return?: boolean;
    gst_details?: BagGST;
    display_name?: string;
    line_number?: number;
    identifier?: string;
    current_status?: string;
    item?: PlatformItem;
    seller_identifier?: string;
    bag_id: number;
    entity_type?: string;
    article?: OrderBagArticle;
    bag_configs?: BagConfigs;
    parent_promo_bags?: any;
    prices?: Prices;
    financial_breakup?: FinancialBreakup[];
    brand?: OrderBrandName;
    can_cancel?: boolean;
    applied_promos?: AppliedPromos[];
    delivery_address?: PlatformDeliveryAddress;
    quantity?: number;
};
type OrderDetailsData = {
    affiliate_id?: string;
    cod_charges?: string;
    order_date?: string;
    ordering_channel?: string;
    tax_details?: any;
    source?: string;
    order_value?: string;
    ordering_channel_logo?: any;
    fynd_order_id: string;
};
type BagStateMapper = {
    notify_customer?: boolean;
    name: string;
    is_active?: boolean;
    bs_id: number;
    app_facing?: boolean;
    display_name: string;
    app_state_name?: string;
    journey_type: string;
    state_type: string;
    app_display_name?: string;
};
type BagStatusHistory = {
    kafka_sync?: boolean;
    delivery_awb_number?: string;
    bag_state_mapper: BagStateMapper;
    app_display_name?: boolean;
    store_id: number;
    bag_id: number;
    forward?: boolean;
    created_at: string;
    delivery_partner_id?: number;
    bsh_id: number;
    display_name?: boolean;
    updated_at?: string;
    reasons?: any[];
    state_type?: string;
    status: string;
    state_id: number;
    shipment_id: string;
};
type ShipmentPayments = {
    source?: string;
    logo?: string;
    mode: string;
};
type ShipmentStatusData = {
    created_at?: string;
    id?: number;
    bag_list?: number[];
    status?: string;
    shipment_id?: string;
};
type TrackingList = {
    text: string;
    is_passed?: boolean;
    time?: string;
    is_current?: boolean;
    status: string;
};
type DPDetailsData = {
    gst_tag?: string;
    name?: string;
    country?: string;
    eway_bill_id?: string;
    pincode?: string;
    id?: string;
    track_url?: string;
    awb_no?: string;
};
type UserDetailsData = {
    phone: string;
    name: string;
    country: string;
    email: string;
    pincode: string;
    state: string;
    address: string;
    city: string;
};
type FulfillingStore = {
    fulfillment_channel: string;
    phone: string;
    country: string;
    pincode: string;
    store_name: string;
    id: string;
    state: string;
    meta: any;
    contact_person: string;
    address: string;
    city: string;
    code: string;
};
type ShipmentInfoResponse = {
    bags?: OrderBags[];
    total_bags?: number;
    current_shipment_status: any;
    items: any[];
    can_return?: boolean;
    gst_details?: GSTDetailsData;
    order?: OrderDetailsData;
    is_fynd_store?: string;
    total_items?: number;
    shipment_quantity?: number;
    is_packaging_order: boolean;
    user_agent?: string;
    refund_text?: string;
    delivery_slot?: any;
    invoice: any;
    status_progress: number;
    journey_type?: string;
    bag_status_history?: BagStatusHistory[];
    affiliate_shipment_id: string;
    child_nodes?: string[];
    fyndstore_emp: any;
    refund_details?: any;
    priority_text?: string;
    lock_status: string;
    pay_button?: string;
    order_created_time?: string;
    picked_date?: string;
    user_info?: any;
    is_not_fynd_source: boolean;
    order_status: any;
    email_id: string;
    enable_tracking?: boolean;
    credit_note_id: string;
    shipment_images?: string[];
    escalation?: any;
    delivery_status: any[];
    payment_mode?: string;
    coupon?: any;
    can_break: string;
    shipment_id: string;
    forward_order_status?: any[];
    forward_shipment_status?: any[];
    payments?: ShipmentPayments;
    platform_logo: boolean;
    is_pdsr?: string;
    prices?: Prices;
    forward_tracking_list?: any[];
    go_green?: boolean;
    replacement_details?: string;
    shipment_status?: string;
    tracking_url: string;
    status?: ShipmentStatusData;
    tracking_list?: TrackingList[];
    dp_details?: DPDetailsData;
    company: any;
    custom_meta?: any[];
    beneficiary_details?: boolean;
    ordering_store: any;
    billing_details?: UserDetailsData;
    can_cancel?: boolean;
    order_type: string;
    kirana_store_id?: string;
    bank_data?: any;
    due_date?: string;
    user_id: string;
    packaging_type?: string;
    vertical?: string;
    operational_status?: string;
    enable_dp_tracking?: string;
    is_invoiced: boolean;
    mid?: string;
    is_fynd_coupon: boolean;
    fulfilling_store?: FulfillingStore;
    delivery_details?: UserDetailsData;
    secured_delivery_flag?: string;
};
type PlatformShipment = {
    bags?: OrderBags[];
    total_bags?: number;
    gst_details?: GSTDetailsData;
    order?: OrderDetailsData;
    total_items?: number;
    shipment_quantity?: number;
    user_agent?: string;
    delivery_slot?: any;
    journey_type?: string;
    bag_status_history?: BagStatusHistory[];
    priority_text?: string;
    picked_date?: string;
    shipment_images?: string[];
    payment_mode?: string;
    shipment_id: string;
    payments?: ShipmentPayments;
    platform_logo?: string;
    prices?: Prices;
    shipment_status?: string;
    status?: ShipmentStatusData;
    tracking_list?: TrackingList[];
    dp_details?: DPDetailsData;
    custom_meta?: any[];
    billing_details?: UserDetailsData;
    packaging_type?: string;
    vertical?: string;
    operational_status?: string;
    enable_dp_tracking?: string;
    fulfilling_store?: FulfillingStore;
    delivery_details?: UserDetailsData;
};
type OrderDict = {
    order_date: string;
    fynd_order_id: string;
    shipment_count: number;
};
type ShipmentDetailsResponse = {
    custom_meta?: any[];
    shipments?: PlatformShipment[];
    success: boolean;
    order?: OrderDict;
};
type SubLane = {
    text?: string;
    actions?: any[];
    total_items?: number;
    value?: string;
    index?: number;
};
type SuperLane = {
    total_items?: number;
    options?: SubLane[];
    value: string;
    text: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformBreakupValues = {
    value?: string;
    display?: string;
    name?: string;
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformOrderItems = {
    total_order_value?: number;
    order_id?: string;
    payment_mode?: string;
    meta?: any;
    order_created_time?: string;
    user_info?: UserDataInfo;
    breakup_values?: PlatformBreakupValues[];
    channel?: PlatformChannel;
    order_value?: number;
    shipments?: PlatformShipment[];
};
type OrderListingResponse = {
    items?: PlatformOrderItems[];
    total_count?: number;
    success?: boolean;
    lane?: string;
    page?: Page;
    message?: string;
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
    shipment_type?: string;
    reason?: string;
    meta?: any;
    awb?: string;
    raw_status?: string;
    updated_at?: string;
    updated_time?: string;
    account_name?: string;
    last_location_recieved_at?: string;
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
    report_created_at?: string;
    report_type?: string;
    request_details?: any;
    report_name?: string;
    display_name?: string;
    report_requested_at?: string;
    report_id?: string;
    s3_key?: string;
    status?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    company_id?: string;
    article_id?: string;
    item_id?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    type?: string;
    value?: string;
    message?: string;
};
type JioCodeUpsertResponse = {
    data?: any[];
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
    identifier?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    label?: any;
    do_invoice_label_generated: boolean;
    company_id?: string;
    store_id?: string;
    store_name?: string;
    data?: any;
    invoice_status?: string;
    batch_id: string;
    invoice?: any;
    store_code?: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type FileResponse = {
    method?: string;
    operation?: string;
    cdn?: URL;
    tags?: string[];
    content_type?: string;
    size?: number;
    upload?: FileUploadResponse;
    file_name?: string;
    namespace?: string;
    file_path?: string;
};
type bulkListingData = {
    store_id?: number;
    total?: number;
    successful?: number;
    batch_id?: string;
    processing?: number;
    failed?: number;
    excel_url?: string;
    processing_shipments?: string[];
    successful_shipments?: any[];
    store_name?: string;
    failed_shipments?: any[];
    file_name?: string;
    status?: string;
    company_id?: number;
    user_id?: string;
    id?: string;
    uploaded_on?: string;
    user_name?: string;
    store_code?: string;
};
type BulkListingPage = {
    type?: string;
    has_next?: boolean;
    size?: number;
    total?: number;
    has_previous?: boolean;
    current?: number;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    success?: boolean;
    page?: BulkListingPage;
    error?: string;
};
type ManifestPage = {
    type?: string;
    has_next?: boolean;
    size?: string;
    total?: number;
    has_previous?: boolean;
    current?: string;
};
type DateRange = {
    to_date?: string;
    from_date?: string;
};
type ManifestFilter = {
    dp_name?: string;
    date_range?: DateRange;
    sales_channel_name?: string;
    store_name?: string;
    dp_ids?: string;
    stores?: string;
    sales_channels?: string;
    lane?: string;
};
type GeneratedManifestItem = {
    company_id?: number;
    manifest_id?: string;
    filters?: ManifestFilter;
    is_active?: boolean;
    created_at?: string;
    created_by?: string;
    status?: string;
};
type GeneratedManifestResponse = {
    page?: ManifestPage;
    items?: GeneratedManifestItem[];
};
type ManifestDetailTotalShipmentPricesCount = {
    total_price?: number;
    shipment_count?: number;
};
type ManifestDetailMeta = {
    filters?: ManifestFilter;
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
};
type ManifestDetail = {
    company_id?: number;
    manifest_id?: string;
    filters?: ManifestFilter;
    is_active?: boolean;
    uid?: number;
    created_at?: string;
    user_id?: number;
    id?: number;
    meta?: ManifestDetailMeta;
    created_by?: string;
    status?: string;
};
type ManifestDetailItem = {
    order_id?: string;
    item_qty?: number;
    awb?: string;
    invoice_id?: string;
    shipment_id?: string;
};
type ManifestDetailResponse = {
    manifest_details?: ManifestDetail[];
    page?: ManifestPage;
    additional_shipment_count?: number;
    items?: ManifestDetailItem[];
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    question_set?: QuestionSet[];
    display_name?: string;
    id?: number;
    qc_type?: string[];
};
type PlatformShipmentReasonsResponse = {
    reasons?: Reason[];
    success?: boolean;
};
type BulkActionPayload = {
    url: string;
};
type BulkActionResponse = {
    status?: boolean;
    message?: string;
};
type BulkActionDetailsDataField = {
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
    company_id?: string;
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    batch_id?: string;
    total_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    failed_records?: string[];
    data?: BulkActionDetailsDataField[];
    user_id?: string;
    success?: string;
    uploaded_on?: string;
    uploaded_by?: string;
    error?: string[];
    status?: boolean;
    message?: string;
};
type AffiliateMeta = {
    size_level_total_qty?: number;
    channel_order_id?: string;
    coupon_code?: string;
    due_date?: string;
    channel_shipment_id?: string;
    loyalty_discount?: number;
    is_priority?: boolean;
    quantity?: number;
    employee_discount?: number;
    order_item_id?: string;
    box_type?: string;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    loyalty_discount?: number;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    employee_discount?: number;
};
type BagGSTDetails = {
    gst_fee: number;
    gstin_code?: string;
    gst_tag: string;
    hsn_code: string;
    sgst_gst_fee: string;
    cgst_tax_percentage: number;
    value_of_good: number;
    igst_tax_percentage: number;
    gst_tax_percentage: number;
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    cgst_gst_fee: string;
    hsn_code_id: string;
    igst_gst_fee: string;
    is_default_hsn_code?: boolean;
    sgst_tax_percentage: number;
};
type Attributes = {
    primary_material?: string;
    name?: string;
    essential?: string;
    marketer_address?: string;
    gender?: string[];
    brand_name?: string;
    marketer_name?: string;
    primary_color_hex?: string;
    primary_color?: string;
};
type Item = {
    can_return?: boolean;
    size: string;
    color?: string;
    department_id?: number;
    l3_category?: number;
    l1_category_id?: number;
    item_id: number;
    meta?: any;
    gender?: string;
    webstore_product_url?: string;
    l2_category?: string[];
    branch_url?: string;
    name: string;
    l3_category_name?: string;
    brand: string;
    l2_category_id?: number;
    l1_category?: string[];
    slug_key: string;
    code?: string;
    last_updated_at?: string;
    can_cancel?: boolean;
    attributes: Attributes;
    image: string[];
    brand_id: number;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Dimensions = {
    width?: number;
    length?: number;
    unit?: string;
    is_default?: boolean;
    height?: number;
};
type Article = {
    seller_identifier: string;
    a_set?: any;
    _id: string;
    raw_meta?: any;
    esp_modified?: any;
    uid: string;
    weight?: Weight;
    size: string;
    return_config?: ReturnConfig;
    is_set?: boolean;
    child_details?: any;
    identifiers: Identifier;
    dimensions?: Dimensions;
    code?: string;
};
type B2BPODetails = {
    po_line_amount?: number;
    partial_can_ret?: boolean;
    po_tax_amount?: number;
    item_base_price?: number;
    docker_number?: string;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Brand = {
    credit_note_expiry_days?: number;
    invoice_prefix?: string;
    is_virtual_invoice?: boolean;
    credit_note_allowed?: boolean;
    created_on?: number;
    modified_on?: number;
    pickup_location?: string;
    script_last_ran?: string;
    brand_name: string;
    start_date?: string;
    logo?: string;
    brand_id: number;
    company: string;
};
type ArticleDetails = {
    status?: any;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
};
type StoreAddress = {
    phone: string;
    pincode: number;
    state: string;
    contact_person: string;
    landmark?: string;
    version?: string;
    area?: string;
    longitude: number;
    city: string;
    address_type: string;
    latitude: number;
    country: string;
    email?: string;
    created_at: string;
    address2?: string;
    country_code: string;
    updated_at: string;
    address_category: string;
    address1: string;
};
type EInvoicePortalDetails = {
    password?: string;
    user?: string;
    username?: string;
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
type Document = {
    ds_type: string;
    verified: boolean;
    legal_name: string;
    value: string;
    url?: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    timing?: any[];
    additional_contact_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    product_return_config?: any;
    ewaybill_portal_details?: any;
    gst_credentials: StoreGstCredentials;
    stage: string;
    display_name: string;
    notification_emails?: string[];
    gst_number?: string;
    documents?: StoreDocuments;
};
type Store = {
    phone: number;
    brand_store_tags?: string[];
    pincode: string;
    is_archived?: boolean;
    location_type: string;
    state: string;
    contact_person: string;
    login_username: string;
    store_address_json?: StoreAddress;
    mall_name?: string;
    meta: StoreMeta;
    longitude: number;
    city: string;
    latitude: number;
    country: string;
    alohomora_user_id?: number;
    is_active?: boolean;
    name: string;
    created_at: string;
    vat_no?: string;
    address2?: string;
    order_integration_id?: string;
    updated_at?: string;
    store_active_from?: string;
    store_email: string;
    parent_store_id?: number;
    code?: string;
    fulfillment_channel: string;
    company_id: number;
    address1: string;
    is_enabled_for_recon?: boolean;
    brand_id?: any;
    packaging_material_count?: number;
    s_id: string;
    mall_area?: string;
};
type EInvoice = {
    error_message?: string;
    acknowledge_no?: number;
    signed_invoice?: string;
    irn?: string;
    acknowledge_date?: string;
    signed_qr_code?: string;
    error_code?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type BuyerDetails = {
    gstin: string;
    name: string;
    pincode: number;
    state: string;
    address: string;
    city: string;
    ajio_site_id?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentMeta = {
    auto_trigger_dp_assignment_acf: boolean;
    dp_sort_key?: string;
    einvoice_info?: EinvoiceInfo;
    assign_dp_from_sb?: boolean;
    return_store_node?: number;
    shipment_volumetric_weight?: number;
    dp_options?: any;
    dp_id?: string;
    box_type?: string;
    return_affiliate_shipment_id?: string;
    shipment_weight?: number;
    packaging_name?: string;
    weight: number;
    store_invoice_updated_date?: string;
    po_number?: string;
    dp_name?: string;
    timestamp?: ShipmentTimeStamp;
    external?: any;
    same_store_available: boolean;
    ewaybill_info?: any;
    return_details?: any;
    awb_number?: string;
    return_awb_number?: string;
    bag_weight?: any;
    fulfilment_priority_text?: string;
    forward_affiliate_shipment_id?: string;
    forward_affiliate_order_id?: string;
    b2b_buyer_details?: BuyerDetails;
    order_type?: string;
    due_date?: string;
    formatted?: Formatted;
    lock_data?: LockData;
    b2c_buyer_details?: any;
    return_affiliate_order_id?: string;
    marketplace_store_id?: string;
    debug_info?: DebugInfo;
};
type PDFLinks = {
    label?: string;
    invoice_a4?: string;
    invoice_a6?: string;
    label_pos?: string;
    b2b?: string;
    label_type: string;
    invoice_pos?: string;
    label_a6?: string;
    label_a4?: string;
    credit_note_url?: string;
    invoice?: string;
    invoice_type: string;
    po_invoice?: string;
};
type AffiliateDetails = {
    affiliate_id?: string;
    company_affiliate_tag?: string;
    affiliate_store_id: string;
    affiliate_order_id: string;
    shipment_meta: ShipmentMeta;
    affiliate_shipment_id: string;
    pdf_links?: PDFLinks;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    ad_id?: string;
};
type BagDetailsPlatformResponse = {
    affiliate_bag_details: AffiliateBagDetails;
    bag_status: BagStatusHistory[];
    restore_promos?: any;
    gst_details: BagGSTDetails;
    current_operational_status: BagStatusHistory;
    display_name?: string;
    original_bag_list?: number[];
    line_number?: number;
    identifier?: string;
    journey_type: string;
    current_status: BagStatusHistory;
    item: Item;
    dates?: Dates;
    bag_status_history?: BagStatusHistory;
    seller_identifier?: string;
    no_of_bags_order?: number;
    entity_type?: string;
    article: Article;
    meta?: BagMeta;
    qc_required?: any;
    shipment_id?: string;
    parent_promo_bags?: any;
    b_id: number;
    bag_update_time?: number;
    order_integration_id?: string;
    brand: Brand;
    financial_breakup: FinancialBreakup[];
    prices: Prices;
    article_details?: ArticleDetails;
    b_type?: string;
    status: BagReturnableCancelableStatus;
    ordering_store?: Store;
    restore_coupon?: boolean;
    tags?: string[];
    applied_promos?: any[];
    operational_status?: string;
    quantity?: number;
    reasons?: any[];
    affiliate_details?: AffiliateDetails;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    has_next: boolean;
    size: number;
    item_total: number;
    page_type: string;
    current: number;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    error?: string;
    status?: number;
    shipment_id?: string;
    message?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    status: number;
    error_trace?: string;
    message: string;
};
type StoreReassign = {
    affiliate_id?: string;
    bag_id?: number;
    store_id: number;
    mongo_article_id?: string;
    reason_ids?: number[];
    fynd_order_id?: string;
    item_id?: string;
    set_id?: string;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    reason_text: string;
    id?: string;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    entities: Entities[];
    action_type: string;
    action: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    affiliate_bag_id?: string;
    bag_id?: number;
    is_locked?: boolean;
    affiliate_order_id?: string;
};
type CheckResponse = {
    original_filter?: OriginalFilter;
    is_shipment_locked?: boolean;
    lock_status?: boolean;
    affiliate_id?: string;
    status?: string;
    affiliate_shipment_id?: string;
    bags?: Bags[];
    shipment_id?: string;
    is_bag_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    check_response?: CheckResponse[];
    message?: string;
};
type AnnouncementResponse = {
    from_datetime?: string;
    logo_url?: string;
    platform_name?: string;
    description?: string;
    to_datetime?: string;
    id: number;
    created_at?: string;
    company_id?: number;
    platform_id?: string;
    title?: string;
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
type Products = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
type ProductsReasonsData = {
    reason_text?: string;
    reason_id?: number;
};
type ProductsReasonsFilters = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
type EntityReasonData = {
    reason_text?: string;
    reason_id?: number;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
type ReasonsData = {
    products?: ProductsReasons[];
    entities?: EntitiesReasons[];
};
type ProductsDataUpdatesFilters = {
    line_number?: number;
    identifier?: string;
};
type ProductsDataUpdates = {
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
};
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
type DataUpdates = {
    products?: ProductsDataUpdates[];
    entities?: EntitiesDataUpdates[];
};
type ShipmentsRequest = {
    products?: Products[];
    identifier: string;
    reasons?: ReasonsData;
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    status?: string;
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
    force_transition?: boolean;
    lock_after_transition?: boolean;
    task?: boolean;
};
type ShipmentsResponse = {
    status?: number;
    meta?: any;
    identifier?: string;
    message?: string;
    stack_trace?: string;
    code?: string;
    exception?: string;
    final_state?: any;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    meta?: AffiliateAppConfigMeta[];
    updated_at: string;
    name: string;
    description?: string;
    secret: string;
    id: string;
    owner: string;
    token: string;
    created_at: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
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
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    id: string;
    config?: AffiliateConfig;
    token: string;
};
type OrderConfig = {
    article_lookup?: string;
    store_lookup?: string;
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    affiliate: Affiliate;
    bag_end_state?: string;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
};
type OrderUser = {
    email: string;
    address2?: string;
    mobile: number;
    city: string;
    country: string;
    state: string;
    phone: number;
    pincode: string;
    address1?: string;
    last_name: string;
    first_name: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    _id: string;
    amount_paid: number;
    affiliate_store_id: string;
    transfer_price: number;
    seller_identifier: string;
    delivery_charge: number;
    price_marked: number;
    avl_qty: number;
    affiliate_meta: any;
    fynd_store_id: string;
    sku: string;
    price_effective: number;
    unit_price: number;
    company_id: number;
    quantity: number;
    identifier: any;
    item_size: string;
    pdf_links?: MarketPlacePdf;
    store_id: number;
    hsn_code_id: string;
    modified_on: string;
    discount: number;
    item_id: number;
};
type ArticleDetails1 = {
    category: any;
    _id: string;
    attributes: any;
    dimension: any;
    quantity: number;
    weight: any;
    brand_id: number;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_id: number;
    fulfillment_type: string;
};
type ShipmentDetails = {
    dp_id?: number;
    meta?: any;
    fulfillment_id: number;
    affiliate_shipment_id: string;
    shipments: number;
    box_type?: string;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    location_details?: LocationDetails;
    identifier: string;
    to_pincode: string;
    payment_mode: string;
    shipment: ShipmentDetails[];
    journey: string;
    source: string;
    action: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    order_priority?: OrderPriority;
    cod_charges: number;
    user: UserData;
    payment?: any;
    coupon?: string;
    discount: number;
    bags: AffiliateBag[];
    payment_mode: string;
    items: any;
    order_value: number;
    delivery_charges: number;
    shipment?: ShipmentData;
    billing_address: OrderUser;
    affiliate_order_id?: string;
    shipping_address: OrderUser;
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
    success?: boolean;
    message?: string;
};
type ActionInfo = {
    id: number;
    slug: string;
    description: string;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    createdat: string;
    l1_detail?: string;
    bag_id?: number;
    message: string;
    user: string;
    type: string;
    ticket_url?: string;
    ticket_id?: string;
    l3_detail?: string;
    l2_detail?: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    phone_number: number;
    message: string;
    amount_paid: number;
    customer_name: string;
    country_code: string;
    order_id: string;
    payment_mode: string;
    shipment_id: number;
    brand_name: string;
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
    status?: string;
    meta: Meta;
    bag_list?: number[];
    remarks?: string;
    id: number;
    shipment_id?: string;
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
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    order_type: string;
    dp_id: number;
    shipment_ids?: string[];
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type ShippingInfo = {
    state_code: string;
    primary_mobile_number: string;
    city: string;
    country_code: string;
    landmark?: string;
    geo_location?: any;
    customer_code?: string;
    floor_no?: string;
    address2?: string;
    gender?: string;
    house_no?: string;
    slot?: any[];
    shipping_type?: string;
    pincode: string;
    last_name?: string;
    address_type?: string;
    title?: string;
    middle_name?: string;
    alternate_email?: string;
    external_customer_code?: string;
    country: string;
    primary_email: string;
    address1: string;
    alternate_mobile_number?: string;
    first_name: string;
    state: string;
};
type BillingInfo = {
    state_code: string;
    primary_mobile_number: string;
    city: string;
    country_code: string;
    customer_code?: string;
    floor_no: string;
    address2?: string;
    gender?: string;
    house_no: string;
    pincode: string;
    last_name?: string;
    title?: string;
    middle_name?: string;
    alternate_email?: string;
    external_customer_code?: string;
    country: string;
    primary_email: string;
    alternate_mobile_number?: string;
    address1: string;
    first_name: string;
    state: string;
};
type PaymentMethod = {
    meta?: any;
    name: string;
    amount: number;
    refund_by: string;
    mode: string;
    transaction_data?: any;
    collect_by: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type ProcessingDates = {
    dp_pickup_slot?: any;
    dispatch_by_date?: string;
    pack_by_date?: string;
    dispatch_after_date?: string;
    customer_pickup_slot?: any;
    confirm_by_date?: string;
};
type Tax = {
    breakup: any[];
    amount: any;
    name: string;
    tax_exempt: boolean;
};
type Charge = {
    name: string;
    type: string;
    code?: string;
    amount: any;
    tax: Tax;
};
type LineItem = {
    external_line_id?: string;
    meta?: any;
    seller_identifier: string;
    charges: Charge[];
    custom_messasge?: string;
    quantity?: number;
};
type Shipment = {
    location_id: number;
    meta?: any;
    priority?: number;
    processing_dates?: ProcessingDates;
    line_items: LineItem[];
    external_shipment_id?: number;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type CreateOrderAPI = {
    shipping_info: ShippingInfo;
    external_order_id?: string;
    meta?: any;
    billing_info: BillingInfo;
    payment_info: PaymentInfo;
    application_id?: string;
    currency_info: any;
    external_creation_date?: string;
    shipments: Shipment[];
    tax_info?: TaxInfo;
    charges: Charge[];
};
type CreateOrderErrorReponse = {
    info?: any;
    status: number;
    meta?: string;
    message: string;
    stack_trace?: string;
    code?: string;
    exception?: string;
    request_id?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    mode?: string;
    refund_by?: string;
    collect_by?: string;
};
type CreateChannelPaymentInfo = {
    payment_methods?: PaymentMethods[];
    source?: string;
    mode_of_payment?: string;
};
type CreateChannelConfig = {
    dp_configuration?: DpConfiguration;
    lock_states?: string[];
    logo_url?: any;
    shipment_assignment?: string;
    payment_info?: CreateChannelPaymentInfo;
    location_reassignment?: boolean;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    is_upserted?: boolean;
    acknowledged?: boolean;
    is_inserted?: boolean;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type UploadConsent = {
    consent_url: string;
    manifest_id: string;
};
type PlatformOrderUpdate = {
    order_id: string;
};
type ResponseDetail = {
    success?: boolean;
    message?: string[];
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    end_date: string;
    start_date: string;
    order_details?: FyndOrderIdList[];
    mobile: number;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
    app_id?: string;
};
type GetSearchWordsData = {
    result?: any;
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
    app_id?: string;
    uid?: string;
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
    query?: any;
    url?: string;
    params?: any;
    type?: string;
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
    action?: AutocompleteAction;
    logo?: Media;
    _custom_json?: any;
    display?: string;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
    app_id?: string;
    results?: AutocompleteResult[];
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    words?: string[];
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
    results?: any[];
    _custom_json?: any;
    words?: string[];
};
type ProductBundleItem = {
    allow_remove?: boolean;
    product_uid: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    max_quantity: number;
    min_quantity: number;
};
type ProductBundleRequest = {
    same_store_assignment?: boolean;
    page_visibility?: string[];
    modified_on?: string;
    modified_by?: any;
    is_active: boolean;
    logo?: string;
    slug: string;
    choice: string;
    products: ProductBundleItem[];
    created_on?: string;
    created_by?: any;
    name: string;
    company_id?: number;
    meta?: any;
};
type GetProductBundleCreateResponse = {
    same_store_assignment?: boolean;
    page_visibility?: string[];
    modified_on?: string;
    modified_by?: any;
    is_active: boolean;
    logo?: string;
    slug: string;
    choice: string;
    products: ProductBundleItem[];
    created_on?: string;
    id?: string;
    created_by?: any;
    name: string;
    company_id?: number;
    meta?: any;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    same_store_assignment?: boolean;
    page_visibility?: string[];
    modified_on?: string;
    modified_by?: any;
    is_active: boolean;
    logo?: string;
    slug: string;
    choice: string;
    products: ProductBundleItem[];
    name: string;
    company_id?: number;
    meta?: any;
};
type LimitedProductData = {
    quantity?: number;
    name?: string;
    sizes?: string[];
    attributes?: any;
    price?: any;
    identifier?: any;
    item_code?: string;
    country_of_origin?: string;
    short_description?: string;
    images?: string[];
    uid?: number;
    slug?: string;
};
type Size = {
    quantity?: number;
    is_available?: boolean;
    value?: string;
    display?: string;
};
type Price = {
    max_effective?: number;
    min_marked?: number;
    min_effective?: number;
    currency?: string;
    max_marked?: number;
};
type GetProducts = {
    allow_remove?: boolean;
    product_details?: LimitedProductData;
    product_uid?: number;
    sizes?: Size[];
    auto_add_to_cart?: boolean;
    price?: Price;
    auto_select?: boolean;
    max_quantity?: number;
    min_quantity?: number;
};
type GetProductBundleResponse = {
    meta?: any;
    same_store_assignment?: boolean;
    is_active?: boolean;
    logo?: string;
    slug?: string;
    choice?: string;
    products?: GetProducts[];
    name?: string;
    company_id?: number;
    page_visibility?: string[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    brand_id?: number;
    modified_on?: string;
    modified_by?: any;
    subtitle?: string;
    title: string;
    guide?: Guide;
    active?: boolean;
    description?: string;
    id?: string;
    created_on?: string;
    image?: string;
    created_by?: any;
    tag?: string;
    name: string;
    company_id?: number;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    brand_id?: number;
    modified_on?: string;
    modified_by?: any;
    title?: string;
    subtitle?: string;
    guide?: any;
    company_id?: number;
    active?: boolean;
    id?: string;
    created_on?: string;
    tag?: string;
    name?: string;
    created_by?: any;
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
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type ApplicationItemResponse = {
    seo?: SEO;
    moq?: MOQ;
    alt_text?: any;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    values?: any[];
    data: any[];
};
type AttributeDetailsGroup = {
    name: string;
    is_active: boolean;
    logo?: string;
    display_type: string;
    priority: number;
    unit?: string;
    slug?: string;
    key?: string;
};
type AppConfigurationDetail = {
    is_active: boolean;
    logo?: string;
    attributes?: AttributeDetailsGroup[];
    slug: string;
    app_id: string;
    template_slugs?: string[];
    is_default: boolean;
    priority: number;
    name?: string;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    total_count: number;
    current: number;
    has_next: boolean;
    next: number;
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
    default_key: string;
    is_active: boolean;
    logo?: string;
    app_id: string;
    is_default: boolean;
    priority: number;
    key: string;
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
type MetaDataListingSortMetaResponse = {
    key?: string;
    display?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
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
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
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
    title?: string;
    is_active: boolean;
    subtitle?: string;
    size?: ProductSize;
    logo?: string;
    priority: number;
    key: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    is_active: boolean;
    size: ProductSize;
    logo?: string;
    display_type: string;
    priority: number;
    name: string;
    key: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    logo?: string;
    priority: number;
    name?: string;
    key: string;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    start?: number;
    display?: string;
    end?: number;
};
type ConfigurationListingFilterValue = {
    map?: any;
    map_values?: any[];
    sort?: string;
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    value?: string;
};
type ConfigurationListingFilterConfig = {
    is_active: boolean;
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    type: string;
    display_name?: string;
    priority: number;
    name?: string;
    key: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type AppConfiguration = {
    product?: ConfigurationProduct;
    modified_on?: string;
    modified_by?: any;
    type?: string;
    app_id: string;
    created_on?: string;
    config_type: string;
    config_id?: string;
    created_by?: any;
    listing?: ConfigurationListing;
};
type AppCatalogConfiguration = {
    product?: ConfigurationProduct;
    modified_on?: string;
    modified_by?: any;
    type?: string;
    app_id: string;
    created_on?: string;
    id?: string;
    config_type: string;
    config_id?: string;
    created_by?: any;
    listing?: ConfigurationListing;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    product?: GetCatalogConfigurationDetailsProduct;
    app_id: string;
    id?: string;
    config_type: string;
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersValue = {
    is_selected: boolean;
    query_format?: string;
    selected_min?: number;
    currency_code?: string;
    display: string;
    count?: number;
    max?: number;
    currency_symbol?: string;
    selected_max?: number;
    min?: number;
    value: any;
    display_format?: string;
};
type ProductFiltersKey = {
    kind?: string;
    operators?: string[];
    logo?: string;
    display: string;
    name: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type ProductSortOn = {
    is_selected?: boolean;
    name?: string;
    value?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
};
type UserInfo = {
    email?: string;
    user_id?: string;
    username?: string;
    uid?: string;
};
type CollectionSchedule = {
    next_schedule?: NextSchedule[];
    start?: string;
    duration?: number;
    cron?: string;
    end?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionQuery = {
    value: any[];
    attribute: string;
    op: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CreateCollection = {
    tags?: string[];
    allow_facets?: boolean;
    description?: string;
    modified_by?: UserInfo;
    sort_on?: string;
    _schedule?: CollectionSchedule;
    app_id: string;
    badge?: CollectionBadge;
    priority?: number;
    name: string;
    type: string;
    _custom_json?: any;
    visible_facets_keys?: string[];
    is_visible?: boolean;
    created_by?: UserInfo;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    _locale_language?: any;
    banners: CollectionBanner;
    is_active?: boolean;
    published?: boolean;
    logo: CollectionImage;
    seo?: SeoDetail;
    slug: string;
    meta?: any;
};
type BannerImage = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionCreateResponse = {
    allow_facets?: boolean;
    description?: string;
    sort_on?: string;
    _schedule?: any;
    app_id?: string;
    priority?: number;
    badge?: any;
    tag?: string[];
    name?: string;
    cron?: any;
    type?: string;
    visible_facets_keys?: string[];
    allow_sort?: boolean;
    query?: CollectionQuery[];
    is_active?: boolean;
    banners?: ImageUrls;
    logo?: BannerImage;
    slug?: string;
    meta?: any;
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
type Media1 = {
    url: string;
    type?: string;
    meta?: any;
};
type GetCollectionDetailNest = {
    allow_facets?: boolean;
    description?: string;
    _schedule?: any;
    app_id?: string;
    badge?: any;
    priority?: number;
    tag?: string[];
    name?: string;
    cron?: any;
    action?: Action;
    type?: string;
    visible_facets_keys?: string[];
    uid?: string;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    is_active?: boolean;
    banners?: ImageUrls;
    logo?: Media1;
    slug?: string;
    meta?: any;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionDetailResponse = {
    query?: CollectionQuery[];
    meta?: any;
    badge?: any;
    allow_facets?: boolean;
    is_active?: boolean;
    banners?: ImageUrls;
    logo?: Media1;
    slug?: string;
    type?: string;
    visible_facets_keys?: string[];
    description?: string;
    _schedule?: any;
    app_id?: string;
    priority?: number;
    tag?: string[];
    name?: string;
    cron?: any;
    allow_sort?: boolean;
};
type UpdateCollection = {
    tags?: string[];
    allow_facets?: boolean;
    description?: string;
    modified_by?: UserInfo;
    sort_on?: string;
    _schedule?: CollectionSchedule;
    badge?: CollectionBadge;
    priority?: number;
    name?: string;
    is_visible?: boolean;
    _custom_json?: any;
    visible_facets_keys?: string[];
    type?: string;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    _locale_language?: any;
    banners?: CollectionBanner;
    is_active?: boolean;
    published?: boolean;
    logo?: CollectionImage;
    seo?: SeoDetail;
    slug?: string;
    meta?: any;
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
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
type Price1 = {
    max?: number;
    min?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductDetailAttribute = {
    value?: string;
    type?: string;
    key?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductBrand = {
    action?: Action;
    logo?: Media1;
    name?: string;
    uid?: number;
};
type ProductListingDetail = {
    highlights?: string[];
    attributes?: any;
    price?: ProductListingPrice;
    description?: string;
    tryouts?: string[];
    medias?: Media1[];
    image_nature?: string;
    sellable?: boolean;
    teaser_tag?: any;
    product_online_date?: string;
    short_description?: string;
    has_variant?: boolean;
    name?: string;
    rating_count?: number;
    rating?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    type?: string;
    promo_meta?: any;
    brand?: ProductBrand;
    uid?: number;
    similars?: string[];
    color?: string;
    item_code?: string;
    item_type?: string;
    slug: string;
    discount?: string;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page?: Page;
    sort_on?: ProductSortOn[];
};
type CatalogInsightItem = {
    count?: number;
    out_of_stock_count?: number;
    sellable_count?: number;
};
type CatalogInsightBrand = {
    available_articles?: number;
    available_sizes?: number;
    total_sizes?: number;
    total_articles?: number;
    article_freshness?: number;
    name?: string;
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
    enabled?: boolean;
    company_id?: number;
    brand_ids?: number[];
    opt_level: string;
    store_ids?: number[];
    platform?: string;
};
type CompanyOptIn = {
    modified_on: number;
    enabled: boolean;
    modified_by?: any;
    platform: string;
    created_on: number;
    brand_ids: number[];
    opt_level: string;
    created_by?: any;
    store_ids: number[];
    company_id: number;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    company_type?: string;
    name?: string;
    business_type?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    brand_id?: number;
    total_article?: number;
    brand_name?: string;
    company_id?: number;
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
    modified_on?: string;
    address?: any;
    documents?: any[];
    manager?: any;
    additional_contacts?: any[];
    display_name?: string;
    created_on?: string;
    timing?: any;
    uid?: number;
    store_type?: string;
    name?: string;
    company_id?: number;
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
    format?: string;
    allowed_values?: string[];
    type: string;
    mandatory?: boolean;
    range?: AttributeSchemaRange;
    multi?: boolean;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    indexing: boolean;
    depends_on?: string[];
    priority?: number;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type GenderDetail = {
    enabled_for_end_consumer?: boolean;
    is_nested?: boolean;
    schema?: AttributeMaster;
    logo?: string;
    slug?: string;
    description?: string;
    id?: string;
    details?: AttributeMasterDetails;
    departments?: string[];
    filters?: AttributeMasterFilter;
    name?: string;
    meta?: AttributeMasterMeta;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    errors?: any;
    status?: number;
    code?: string;
    meta?: any;
};
type DepartmentCreateUpdate = {
    tags?: string[];
    is_active?: boolean;
    logo: string;
    slug?: string;
    _custom_json?: any;
    platforms?: any;
    _cls?: string;
    priority_order: number;
    uid?: number;
    synonyms?: string[];
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
    _id?: string;
    uid?: string;
    user_id?: string;
};
type GetDepartment = {
    name?: string;
    modified_on?: string;
    modified_by?: UserSerializer;
    is_active?: boolean;
    logo?: string;
    page_no?: number;
    priority_order?: number;
    created_on?: string;
    page_size?: number;
    item_type?: string;
    uid?: number;
    created_by?: UserSerializer;
    synonyms?: string[];
    slug?: string;
    search?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    errors?: any;
    status?: number;
    code?: string;
    meta?: any;
};
type UserDetail = {
    super_user?: boolean;
    user_id: string;
    contact?: string;
    username: string;
};
type DepartmentModel = {
    name: any;
    modified_on: string;
    modified_by?: UserDetail;
    is_active?: boolean;
    logo: string;
    verified_by?: UserDetail;
    _custom_json?: any;
    verified_on?: string;
    _cls?: any;
    priority_order: number;
    created_on: string;
    _id?: any;
    uid?: number;
    synonyms?: any[];
    slug?: any;
    created_by?: UserDetail;
};
type ProductTemplate = {
    modified_on?: string;
    modified_by?: any;
    is_active?: boolean;
    logo?: string;
    attributes?: string[];
    slug: string;
    description?: string;
    categories?: string[];
    is_expirable: boolean;
    is_archived?: boolean;
    created_on?: string;
    departments?: string[];
    is_physical: boolean;
    tag?: string;
    name?: string;
    created_by?: any;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    highlights?: any;
    tags?: any;
    description?: any;
    currency?: any;
    command?: any;
    multi_size?: any;
    country_of_origin?: any;
    short_description?: any;
    trader?: any;
    teaser_tag?: any;
    hsn_code?: any;
    product_publish?: any;
    brand_uid?: any;
    name?: any;
    no_of_boxes?: any;
    product_group_tag?: any;
    sizes?: any;
    variants?: any;
    return_config?: any;
    trader_type?: any;
    is_active?: any;
    media?: any;
    custom_order?: any;
    item_code?: any;
    item_type?: any;
    size_guide?: any;
    is_dependent?: any;
    slug?: any;
    category_slug?: any;
};
type GlobalValidation = {
    title?: string;
    definitions?: any;
    type?: string;
    description?: string;
    required?: string[];
    properties?: Properties;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    is_active?: boolean;
    logo?: string;
    attributes?: string[];
    slug: string;
    description?: string;
    categories?: string[];
    is_expirable: boolean;
    id?: string;
    is_archived?: boolean;
    departments?: string[];
    is_physical: boolean;
    tag?: string;
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
    templates?: string[];
    brand?: string[];
    type?: string;
};
type ProductDownloadsItems = {
    completed_on?: string;
    task_id?: string;
    seller_id?: number;
    url?: string;
    trigger_on?: string;
    id?: string;
    template_tags?: any;
    created_by?: VerifiedBy;
    status?: string;
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
    l1: number;
    l2: number;
    department: number;
};
type CategoryRequestBody = {
    name: string;
    level: number;
    is_active: boolean;
    media?: Media2;
    slug?: string;
    tryouts?: string[];
    departments: number[];
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    priority?: number;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    name: string;
    modified_on?: string;
    modified_by?: any;
    level: number;
    is_active: boolean;
    media?: Media2;
    slug?: string;
    tryouts?: string[];
    created_on?: string;
    id?: string;
    departments: number[];
    uid?: number;
    marketplaces?: CategoryMapping;
    created_by?: any;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    priority?: number;
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
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type Trader = {
    name?: string;
    type?: string;
    address?: string[];
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type ProductCreateUpdate = {
    highlights?: string[];
    tags?: string[];
    bulk_job_id?: string;
    tax_identifier: TaxIdentifier;
    description?: string;
    currency: string;
    multi_size?: boolean;
    country_of_origin: string;
    short_description?: string;
    trader: Trader[];
    teaser_tag?: TeaserTag;
    product_publish?: ProductPublish;
    brand_uid: number;
    name: string;
    net_quantity?: NetQuantity;
    no_of_boxes?: number;
    template_tag: string;
    product_group_tag?: string[];
    action?: string;
    variants?: any;
    _custom_json?: any;
    return_config: ReturnConfig;
    requester?: string;
    uid?: number;
    company_id: number;
    is_active?: boolean;
    change_request_id?: any;
    media?: Media1[];
    custom_order?: CustomOrder;
    item_code: any;
    item_type: string;
    is_set?: boolean;
    departments: number[];
    is_image_less_product?: boolean;
    size_guide?: string;
    is_dependent?: boolean;
    slug: string;
    category_slug: string;
    variant_media?: any;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Image = {
    secure_url?: string;
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
};
type Logo = {
    secure_url?: string;
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
};
type Product = {
    highlights?: string[];
    l3_mapping?: string[];
    tax_identifier?: any;
    description?: string;
    id?: string;
    image_nature?: string;
    currency?: string;
    multi_size?: boolean;
    category_uid?: number;
    country_of_origin?: string;
    short_description?: string;
    product_publish?: ProductPublished;
    images?: Image[];
    hsn_code?: string;
    is_physical?: boolean;
    is_expirable?: boolean;
    brand_uid?: number;
    name?: string;
    template_tag?: string;
    sizes?: any[];
    _custom_json?: any;
    variants?: any;
    brand?: Brand;
    uid?: number;
    all_sizes?: any[];
    color?: string;
    is_active?: boolean;
    media?: Media1[];
    custom_order?: any;
    primary_color?: string;
    item_code?: string;
    item_type?: string;
    is_set?: boolean;
    departments?: number[];
    size_guide?: string;
    is_dependent?: boolean;
    slug?: string;
    category_slug?: string;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type AttributeMasterSerializer = {
    enabled_for_end_consumer?: boolean;
    tags?: string[];
    description?: string;
    created_on?: string;
    synonyms?: any;
    modified_on?: string;
    modified_by?: any;
    raw_key?: string;
    details: AttributeMasterDetails;
    filters: AttributeMasterFilter;
    name?: string;
    schema: AttributeMaster;
    suggestion?: string;
    variant?: boolean;
    unit?: string;
    created_by?: any;
    is_nested?: boolean;
    logo?: string;
    departments: string[];
    slug: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    email?: string;
    user_id?: string;
    username?: string;
    uid?: string;
};
type BulkJob = {
    modified_on?: string;
    modified_by?: UserInfo1;
    failed?: number;
    is_active?: boolean;
    cancelled_records?: any[];
    company_id: number;
    template_tag?: string;
    cancelled?: number;
    file_path?: string;
    total: number;
    custom_template_tag?: string;
    created_on: string;
    stage?: string;
    failed_records?: any[];
    tracking_url?: string;
    created_by?: UserInfo1;
    succeed?: number;
};
type BulkResponse = {
    modified_on?: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    batch_id: string;
    created_on: string;
    created_by?: UserInfo1;
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    failed?: number;
    modified_on?: string;
    modified_by?: UserDetail1;
    is_active?: boolean;
    template_tag?: string;
    template?: ProductTemplate;
    cancelled?: number;
    file_path?: string;
    total?: number;
    created_on?: string;
    succeed?: number;
    stage?: string;
    failed_records?: string[];
    created_by?: UserDetail1;
    company_id?: number;
    cancelled_records?: string[];
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    template_tag: string;
    data: any[];
    company_id: number;
    batch_id: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    url: string;
    company_id?: number;
    user: any;
};
type UserCommon = {
    user_id?: string;
    company_id?: number;
    username?: string;
};
type Items = {
    modified_on?: string;
    modified_by?: UserCommon;
    failed?: number;
    is_active?: boolean;
    cancelled_records?: string[];
    company_id?: number;
    cancelled?: number;
    file_path?: string;
    retry?: number;
    total?: number;
    id?: string;
    created_on?: string;
    stage?: string;
    failed_records?: string[];
    tracking_url?: string;
    created_by?: UserCommon;
    succeed?: number;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
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
    brand_uid?: number;
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
    name?: string;
    size_distribution: SizeDistribution;
};
type GTIN = {
    primary?: boolean;
    gtin_type: string;
    gtin_value: string;
};
type InvSize = {
    store_code: string;
    quantity: number;
    set?: InventorySet;
    price_effective: number;
    item_weight?: number;
    item_weight_unit_of_measure?: string;
    size: string;
    price?: number;
    item_width?: number;
    expiration_date?: string;
    item_length?: number;
    is_set?: boolean;
    price_transfer?: number;
    currency: string;
    item_height?: number;
    item_dimensions_unit_of_measure?: string;
    identifiers: GTIN[];
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type InventoryResponse = {
    quantity?: number;
    uid?: string;
    price_effective?: number;
    store?: any;
    size?: string;
    item_id?: number;
    sellable_quantity?: number;
    price?: number;
    inventory_updated_on?: string;
    currency?: string;
    price_transfer?: number;
    identifiers?: any;
    seller_identifier?: string;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type CompanyMeta = {
    id: number;
};
type PriceMeta = {
    marked: number;
    transfer: number;
    tp_notes?: any;
    effective: number;
    currency: string;
    updated_at?: string;
};
type ManufacturerResponse = {
    is_default: boolean;
    name: string;
    address: string;
};
type WeightResponse = {
    is_default: boolean;
    unit: string;
    shipping: number;
};
type Trader1 = {
    name: string;
    type: string;
    address: string[];
};
type ReturnConfig1 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type BrandMeta = {
    id: number;
    name: string;
};
type DimensionResponse = {
    length: number;
    width: number;
    height: number;
    is_default: boolean;
    unit: string;
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
type InventorySellerResponse = {
    set?: InventorySet;
    tags?: string[];
    store: StoreMeta;
    company: CompanyMeta;
    price: PriceMeta;
    tax_identifier?: any;
    manufacturer: ManufacturerResponse;
    identifier: any;
    stage?: string;
    fynd_article_code: string;
    fragile: boolean;
    modified_by?: UserSerializer;
    country_of_origin: string;
    weight: WeightResponse;
    trader?: Trader1[];
    expiration_date?: string;
    total_quantity: number;
    raw_meta?: any;
    size: string;
    added_on_store?: string;
    fynd_meta?: any;
    return_config?: ReturnConfig1;
    _custom_json?: any;
    brand: BrandMeta;
    uid: string;
    created_by?: UserSerializer;
    seller_identifier: string;
    dimension: DimensionResponse;
    is_active?: boolean;
    item_id: number;
    track_inventory?: boolean;
    trace_id?: string;
    is_set?: boolean;
    quantities?: Quantities;
    fynd_item_code: string;
    meta?: any;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    failed?: number;
    modified_by?: any;
    modified_on?: string;
    is_active?: boolean;
    cancelled?: number;
    file_path?: string;
    total?: number;
    id?: string;
    created_on?: string;
    succeed?: number;
    stage?: string;
    failed_records?: string[];
    created_by?: any;
    company_id?: number;
    cancelled_records?: string[];
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    store_code: string;
    quantity?: number;
    price_effective?: number;
    tags?: string[];
    item_weight_unit_of_measure?: string;
    price?: number;
    expiration_date?: string;
    trace_id?: string;
    price_marked?: number;
    currency?: string;
    total_quantity?: number;
    item_dimensions_unit_of_measure?: string;
    seller_identifier: string;
};
type InventoryBulkRequest = {
    user?: any;
    sizes: InventoryJobPayload[];
    company_id: number;
    batch_id: string;
};
type InventoryExportRequest = {
    brand?: number[];
    type?: string;
    store?: number[];
};
type InventoryExportResponse = {
    request_params?: any;
    task_id: string;
    seller_id: number;
    trigger_on?: string;
    status?: string;
};
type InventoryExportJob = {
    completed_on?: string;
    request_params?: any;
    task_id: string;
    seller_id: number;
    url?: string;
    trigger_on?: string;
    status?: string;
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
    tags?: string[];
    store_id: number;
    expiration_date?: string;
    trace_id?: string;
    price_marked?: number;
    total_quantity?: number;
    seller_identifier: string;
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    company_id: number;
    meta?: any;
};
type InventoryFailedReason = {
    message: string;
    errors?: string;
};
type InventoryResponseItem = {
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    message: string;
    items?: InventoryResponseItem[];
};
type HsnUpsert = {
    uid?: number;
    tax_on_mrp: boolean;
    is_active?: boolean;
    tax1: number;
    tax_on_esp?: boolean;
    threshold1: number;
    tax2?: number;
    hsn_code: string;
    threshold2?: number;
    hs2_code: string;
    company_id: number;
};
type HsnCodesObject = {
    tax_on_mrp?: boolean;
    modified_on?: string;
    tax1?: number;
    tax_on_esp?: boolean;
    threshold1?: number;
    id?: string;
    tax2?: number;
    hsn_code?: string;
    threshold2?: number;
    hs2_code?: string;
    company_id?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    size?: number;
    has_previous?: boolean;
    current?: string;
    has_next?: boolean;
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
    effective_date: string;
    rate: number;
    cess?: number;
    threshold: number;
};
type HSNDataInsertV2 = {
    taxes: TaxSlab[];
    modified_by?: any;
    modified_on?: string;
    type: string;
    country_code: string;
    description: string;
    created_on?: string;
    hsn_code: string;
    reporting_hsn: string;
    created_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    banners?: ImageUrls;
    action?: Action;
    logo?: Media;
    slug?: string;
    departments?: string[];
    uid?: number;
    name?: string;
    discount?: string;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    name?: string;
    logo?: Media;
    priority_order?: number;
    uid?: number;
    slug?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    name?: string;
    banners?: ImageUrls;
    childs?: any[];
    action?: Action;
    _custom_json?: any;
    uid?: number;
    slug?: string;
};
type SecondLevelChild = {
    name?: string;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
    action?: Action;
    _custom_json?: any;
    uid?: number;
    slug?: string;
};
type Child = {
    name?: string;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
    action?: Action;
    _custom_json?: any;
    uid?: number;
    slug?: string;
};
type CategoryItems = {
    name?: string;
    banners?: ImageUrls;
    childs?: Child[];
    action?: Action;
    uid?: number;
    slug?: string;
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
    items?: ProductListingDetail[];
    operators?: any;
    sort_on?: ProductSortOn[];
    page: Page;
    filters?: ProductFilters[];
};
type ProductDetail = {
    highlights?: string[];
    attributes?: any;
    description?: string;
    tryouts?: string[];
    medias?: Media1[];
    image_nature?: string;
    teaser_tag?: any;
    product_online_date?: string;
    short_description?: string;
    has_variant?: boolean;
    name?: string;
    rating_count?: number;
    rating?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    type?: string;
    promo_meta?: any;
    brand?: ProductBrand;
    uid?: number;
    similars?: string[];
    color?: string;
    item_code?: string;
    item_type?: string;
    slug: string;
};
type InventoryPage = {
    has_previous?: boolean;
    type: string;
    next_id?: string;
    has_next?: boolean;
    item_total: number;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type UserSerializer1 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetAddressSerializer = {
    country?: string;
    latitude?: number;
    landmark?: string;
    address2?: string;
    address1?: string;
    country_code?: string;
    city?: string;
    state?: string;
    longitude?: number;
    pincode?: number;
    address_type?: string;
};
type GetCompanySerializer = {
    modified_on?: string;
    modified_by?: UserSerializer1;
    business_type?: string;
    verified_on?: string;
    stage?: string;
    reject_reason?: string;
    addresses?: GetAddressSerializer[];
    created_on?: string;
    uid?: number;
    company_type?: string;
    created_by?: UserSerializer1;
    name?: string;
    verified_by?: UserSerializer1;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    weekday: string;
    closing?: LocationTimingSerializer;
    open: boolean;
    opening?: LocationTimingSerializer;
};
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type InvoiceCredSerializer = {
    password?: string;
    enabled?: boolean;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobile_no: SellerPhoneNumber;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type GetLocationSerializer = {
    product_return_config?: ProductReturnConfigSerializer;
    company?: GetCompanySerializer;
    contact_numbers?: SellerPhoneNumber[];
    verified_on?: string;
    created_on?: string;
    timing?: LocationDayWiseSerializer[];
    store_type?: string;
    notification_emails?: string[];
    stage?: string;
    verified_by?: UserSerializer2;
    phone_number: string;
    gst_credentials?: InvoiceDetailsSerializer;
    modified_on?: string;
    modified_by?: UserSerializer2;
    name: string;
    code: string;
    documents?: Document[];
    manager?: LocationManagerSerializer;
    _custom_json?: any;
    uid?: number;
    created_by?: UserSerializer2;
    address: GetAddressSerializer;
    display_name: string;
    warnings?: any;
    integration_type?: LocationIntegrationType;
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
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type GetCompanyProfileSerializerResponse = {
    notification_emails?: string[];
    stage?: string;
    business_details?: BusinessDetails;
    company_type: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    business_info?: string;
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer;
    taxes?: CompanyTaxesSerializer[];
    uid: number;
    name?: string;
    _custom_json?: any;
    modified_on?: string;
    documents?: Document[];
    mode?: string;
    franchise_enabled?: boolean;
    verified_on?: string;
    business_type: string;
    created_on?: string;
    contact_details?: ContactDetails;
    warnings?: any;
};
type CreateUpdateAddressSerializer = {
    address2?: string;
    longitude: number;
    country_code?: string;
    landmark?: string;
    city: string;
    address_type: string;
    address1: string;
    latitude: number;
    country: string;
    pincode: number;
    state: string;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type UpdateCompany = {
    business_info?: string;
    name?: string;
    _custom_json?: any;
    notification_emails?: string[];
    franchise_enabled?: boolean;
    contact_details?: ContactDetails;
    business_details?: BusinessDetails;
    company_type?: string;
    business_type?: string;
    documents?: Document[];
    reject_reason?: string;
    addresses?: CreateUpdateAddressSerializer[];
    warnings?: any;
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
    uid?: number;
    store?: DocumentsObj;
    stage?: string;
    product?: DocumentsObj;
    brand?: DocumentsObj;
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    _locale_language?: any;
    stage?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    slug_key?: string;
    banner?: BrandBannerSerializer;
    synonyms?: string[];
    reject_reason?: string;
    logo?: string;
    verified_by?: UserSerializer;
    uid?: number;
    name: string;
    _custom_json?: any;
    modified_on?: string;
    mode?: string;
    verified_on?: string;
    created_on?: string;
    warnings?: any;
    description?: string;
};
type CreateUpdateBrandRequestSerializer = {
    uid?: number;
    name: string;
    brand_tier?: string;
    synonyms?: string[];
    banner?: BrandBannerSerializer;
    _custom_json?: any;
    _locale_language?: any;
    company_id?: number;
    logo: string;
    description?: string;
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
    business_country_info?: BusinessCountryInfo;
    uid?: number;
    name?: string;
    details?: CompanyDetails;
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    notification_emails?: string[];
    stage?: string;
    verified_on?: string;
    modified_on?: string;
    company_type: string;
    business_type: string;
    created_by?: UserSerializer;
    market_channels?: string[];
    reject_reason?: string;
    modified_by?: UserSerializer;
    created_on?: string;
    verified_by?: UserSerializer;
};
type CompanyBrandSerializer = {
    uid?: number;
    stage?: string;
    verified_on?: string;
    modified_on?: string;
    brand?: GetBrandResponseSerializer;
    created_by?: UserSerializer;
    reject_reason?: string;
    company?: CompanySerializer;
    modified_by?: UserSerializer;
    created_on?: string;
    verified_by?: UserSerializer;
    warnings?: any;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
};
type CompanyBrandPostRequestSerializer = {
    uid?: number;
    brands: number[];
    company: number;
};
type LocationSerializer = {
    uid?: number;
    name: string;
    timing?: LocationDayWiseSerializer[];
    store_type?: string;
    _custom_json?: any;
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigSerializer;
    stage?: string;
    contact_numbers?: SellerPhoneNumber[];
    documents?: Document[];
    address: GetAddressSerializer;
    code: string;
    gst_credentials?: InvoiceDetailsSerializer;
    company: number;
    manager?: LocationManagerSerializer;
    warnings?: any;
    display_name: string;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type _ArticleQuery = {
    item_id?: number;
    size?: string;
    ignored_stores?: number[];
};
type _AssignStoreArticle = {
    article_assignment?: _ArticleAssignment;
    query?: _ArticleQuery;
    meta?: any;
    quantity?: number;
    group_id?: string;
};
type AssignStoreRequestValidator = {
    app_id?: string;
    company_id?: number;
    store_ids?: number[];
    channel_identifier?: string;
    articles?: _AssignStoreArticle[];
    channel_type?: string;
    pincode?: string;
};
type AssignStoreResponseSerializer = {
    uid?: string;
    s_city?: string;
    item_id?: number;
    preice_effective?: number;
    index?: number;
    store_pincode?: string;
    price_marked?: number;
    size?: string;
    article_assignment?: _ArticleAssignment;
    status?: boolean;
    _id?: string;
    company_id?: number;
    store_id?: number;
    meta?: any;
    quantity?: number;
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
    empty_cart?: boolean;
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
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue;
    iins?: string[];
    types?: string[];
    networks?: string[];
};
type Restrictions = {
    platforms?: string[];
    uses?: UsesRestriction;
    post_order?: PostOrder;
    coupon_allowed?: boolean;
    ordering_stores?: number[];
    price_range?: PriceRange;
    bulk_bundle?: BulkBundleRestriction;
    user_groups?: number[];
    payments?: any;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Rule = {
    discount_qty?: number;
    value?: number;
    max?: number;
    min?: number;
    key?: number;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    subtitle?: string;
    auto?: DisplayMetaDict;
    description?: string;
    apply?: DisplayMetaDict;
    title?: string;
    remove?: DisplayMetaDict;
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type Validity = {
    priority?: number;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type CouponSchedule = {
    end?: string;
    duration?: number;
    start?: string;
    cron?: string;
    next_schedule?: any[];
};
type RuleDefinition = {
    currency_code?: string;
    type: string;
    auto_apply?: boolean;
    calculate_on: string;
    is_exact?: boolean;
    scope?: string[];
    value_type: string;
    applicable_on: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type State = {
    is_archived?: boolean;
    is_display?: boolean;
    is_public?: boolean;
};
type CouponAdd = {
    restrictions?: Restrictions;
    type_slug: string;
    date_meta?: CouponDateMeta;
    rule: Rule[];
    ownership: Ownership;
    display_meta: DisplayMeta;
    validation?: Validation;
    identifiers: Identifier;
    validity: Validity;
    action?: CouponAction;
    tags?: string[];
    _schedule?: CouponSchedule;
    rule_definition: RuleDefinition;
    author?: CouponAuthor;
    state?: State;
    code: string;
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
    type_slug: string;
    date_meta?: CouponDateMeta;
    rule: Rule[];
    ownership: Ownership;
    display_meta: DisplayMeta;
    validation?: Validation;
    identifiers: Identifier;
    validity: Validity;
    action?: CouponAction;
    tags?: string[];
    _schedule?: CouponSchedule;
    rule_definition: RuleDefinition;
    author?: CouponAuthor;
    state?: State;
    code: string;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type DisplayMeta1 = {
    offer_text?: string;
    name?: string;
    description?: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CompareObject = {
    greater_than_equals?: number;
    less_than_equals?: number;
    greater_than?: number;
    less_than?: number;
    equals?: number;
};
type ItemCriteria = {
    cart_total?: CompareObject;
    item_size?: string[];
    item_brand?: number[];
    cart_unique_item_amount?: CompareObject;
    item_sku?: string[];
    item_exclude_category?: number[];
    all_items?: boolean;
    cart_quantity?: CompareObject;
    buy_rules?: string[];
    item_exclude_store?: number[];
    available_zones?: string[];
    item_id?: number[];
    item_category?: number[];
    item_exclude_sku?: string[];
    item_exclude_company?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_company?: number[];
    item_store?: number[];
    item_exclude_brand?: number[];
    item_exclude_id?: number[];
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type DiscountOffer = {
    discount_percentage?: number;
    partial_can_ret?: boolean;
    min_offer_quantity?: number;
    max_usage_per_transaction?: number;
    max_discount_amount?: number;
    discount_amount?: number;
    max_offer_quantity?: number;
    discount_price?: number;
    apportion_discount?: boolean;
    code?: string;
};
type DiscountRule = {
    buy_condition: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
    discount_type: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
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
    start?: string;
    end?: string;
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
    uses?: PaymentAllowValue1;
    type: string;
};
type Restrictions1 = {
    platforms?: string[];
    uses: UsesRestriction1;
    user_registered?: UserRegistered;
    post_order?: PostOrder1;
    order_quantity?: number;
    anonymous_users?: boolean;
    user_id?: string[];
    user_groups?: number[];
    payments?: PromotionPaymentModes[];
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionSchedule = {
    end?: string;
    duration?: number;
    start: string;
    published: boolean;
    cron?: string;
    next_schedule?: any[];
};
type PromotionListItem = {
    stackable?: boolean;
    display_meta: DisplayMeta1;
    apply_all_discount?: boolean;
    code?: string;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    ownership: Ownership1;
    visiblility?: Visibility;
    promotion_type: string;
    mode: string;
    promo_group: string;
    discount_rules: DiscountRule[];
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    application_id: string;
    post_order_action?: PromotionAction;
    calculate_on?: string;
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    apply_priority?: number;
    currency?: string;
    apply_exclusive?: string;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    stackable?: boolean;
    display_meta: DisplayMeta1;
    apply_all_discount?: boolean;
    code?: string;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    ownership: Ownership1;
    visiblility?: Visibility;
    promotion_type: string;
    mode: string;
    promo_group: string;
    discount_rules: DiscountRule[];
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    application_id: string;
    post_order_action?: PromotionAction;
    calculate_on?: string;
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    apply_priority?: number;
    currency?: string;
    apply_exclusive?: string;
};
type PromotionUpdate = {
    stackable?: boolean;
    display_meta: DisplayMeta1;
    apply_all_discount?: boolean;
    code?: string;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    ownership: Ownership1;
    visiblility?: Visibility;
    promotion_type: string;
    mode: string;
    promo_group: string;
    discount_rules: DiscountRule[];
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    application_id: string;
    post_order_action?: PromotionAction;
    calculate_on?: string;
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    apply_priority?: number;
    currency?: string;
    apply_exclusive?: string;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    subtitle?: string;
    description?: string;
    modified_on?: string;
    type?: string;
    entity_type?: string;
    created_on?: string;
    entity_slug?: string;
    title?: string;
    example?: string;
    is_hidden?: boolean;
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
    coupon_type?: string;
    is_applied?: boolean;
    message?: string;
    description?: string;
    type?: string;
    value?: number;
    coupon_value?: number;
    uid?: string;
    sub_title?: string;
    max_discount_value?: number;
    title?: string;
    code?: string;
    minimum_cart_value?: number;
};
type DisplayBreakup = {
    currency_code?: string;
    message?: string[];
    value?: number;
    currency_symbol?: string;
    key?: string;
    display?: string;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    applicable?: number;
    total?: number;
    description?: string;
};
type RawBreakup = {
    convenience_fee?: number;
    cod_charge?: number;
    total?: number;
    vog?: number;
    coupon?: number;
    mrp_total?: number;
    fynd_cash?: number;
    subtotal?: number;
    discount?: number;
    gst_charges?: number;
    delivery_charge?: number;
    you_saved?: number;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
};
type ProductPrice = {
    currency_code?: string;
    add_on?: number;
    selling?: number;
    currency_symbol?: string;
    effective?: number;
    marked?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type FreeGiftItem = {
    item_images_url?: string[];
    item_slug?: string;
    item_price_details?: any;
    item_brand_name?: string;
    item_id?: number;
    item_name?: string;
};
type AppliedFreeArticles = {
    quantity?: number;
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
    article_id?: string;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    raw_offer?: any;
    offer?: any;
    item_criteria?: any;
};
type AppliedPromotion = {
    offer_text?: string;
    amount?: number;
    promotion_name?: string;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    applied_free_articles?: AppliedFreeArticles[];
    promotion_group?: string;
    promotion_type?: string;
    promo_id?: string;
    discount_rules?: DiscountRulesApp[];
    mrp_promotion?: boolean;
};
type BasePrice = {
    currency_code?: string;
    marked?: number;
    effective?: number;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ProductArticle = {
    extra_meta?: any;
    price?: ArticlePriceInfo;
    store?: BaseInfo;
    type?: string;
    size?: string;
    uid?: string;
    seller?: BaseInfo;
    product_group_tags?: string[];
    quantity?: number;
    parent_item_identifiers?: any;
};
type ProductImage = {
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
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
    images?: ProductImage[];
    categories?: CategoryInfo[];
    type?: string;
    name?: string;
    uid?: number;
    slug?: string;
    action?: ProductAction;
    brand?: BaseInfo;
};
type ProductAvailability = {
    other_store_quantity?: number;
    deliverable?: boolean;
    out_of_stock?: boolean;
    sizes?: string[];
    is_valid?: boolean;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    message?: string;
    bulk_offer?: any;
    is_set?: boolean;
    price?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    promotions_applied?: AppliedPromotion[];
    article?: ProductArticle;
    product?: CartProduct;
    availability?: ProductAvailability;
    coupon_message?: string;
    identifiers: CartProductIdentifer;
    discount?: string;
    key?: string;
    quantity?: number;
    parent_item_identifiers?: any;
    price_per_unit?: ProductPriceInfo;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    area?: string;
    country?: string;
    country_code?: string;
    pincode?: number;
    name?: string;
    phone?: number;
    area_code_slug?: string;
    meta?: any;
    email?: string;
    address?: string;
    address_type?: string;
    city?: string;
    area_code: string;
    state?: string;
    landmark?: string;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
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
    message?: string;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
type OpenApiOrderItem = {
    cod_charges: number;
    price_effective: number;
    coupon_effective_discount: number;
    product_id: number;
    size: string;
    files?: OpenApiFiles[];
    extra_meta?: any;
    payment_methods: MultiTenderPaymentMethod[];
    cashback_applied: number;
    price_marked: number;
    loyalty_discount?: number;
    meta?: CartItemMeta;
    discount: number;
    employee_discount?: number;
    delivery_charges: number;
    quantity?: number;
    amount_paid: number;
};
type OpenApiPlatformCheckoutReq = {
    currency_code?: string;
    cod_charges: number;
    files?: OpenApiFiles[];
    coupon?: string;
    coupon_value: number;
    shipping_address?: ShippingAddress;
    employee_discount?: any;
    cart_value: number;
    affiliate_order_id?: string;
    coupon_code: string;
    billing_address: ShippingAddress;
    cart_items: OpenApiOrderItem[];
    payment_methods: MultiTenderPaymentMethod[];
    cashback_applied: number;
    gstin?: string;
    loyalty_discount?: number;
    comment?: string;
    order_id?: string;
    delivery_charges: number;
    payment_mode?: string;
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    success?: boolean;
    message?: string;
    order_id: string;
};
type AbandonedCart = {
    fynd_credits?: any;
    cod_charges?: any;
    coupon?: any;
    pick_up_customer_details?: any;
    is_default: boolean;
    discount?: number;
    articles: any[];
    shipments?: any[];
    merge_qty?: boolean;
    cashback: any;
    created_on: string;
    delivery_charges?: any;
    payment_mode?: string;
    last_modified: string;
    meta?: any;
    user_id: string;
    uid: number;
    app_id?: string;
    cart_value?: number;
    is_active?: boolean;
    buy_now?: boolean;
    _id: string;
    checkout_mode?: string;
    bulk_coupon_discount?: number;
    promotion?: any;
    is_archive?: boolean;
    payment_methods?: any[];
    gstin?: string;
    comment?: string;
    fc_index_map?: number[];
    order_id?: string;
    expire_at: string;
    payments?: any;
};
type AbandonedCartResponse = {
    success?: boolean;
    message?: string;
    result?: any;
    items?: AbandonedCart[];
    page?: Page;
};
type AddProductCart = {
    pos?: boolean;
    quantity?: number;
    extra_meta?: any;
    item_size?: string;
    article_id?: string;
    seller_id?: number;
    store_id?: number;
    article_assignment?: any;
    display?: string;
    product_group_tags?: string[];
    item_id?: number;
    parent_item_identifiers?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    message?: string;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    restrict_checkout?: boolean;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    gstin?: string;
    last_modified?: string;
    comment?: string;
    currency?: CartCurrency;
    is_valid?: boolean;
    id?: string;
    coupon_text?: string;
    buy_now?: boolean;
};
type AddCartDetailResponse = {
    cart?: CartDetailResponse;
    success?: boolean;
    message?: string;
    partial?: boolean;
};
type UpdateProductCart = {
    extra_meta?: any;
    item_id?: number;
    article_id?: string;
    item_size?: string;
    item_index?: number;
    identifiers: CartProductIdentifer;
    quantity?: number;
    parent_item_identifiers?: any;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    success?: boolean;
    message?: string;
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
