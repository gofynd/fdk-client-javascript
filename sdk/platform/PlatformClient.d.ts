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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, Code, PaymentCode, GetPaymentCode, getPaymentCodeResponse, ShipmentStatus, PaymentModeInfo, Prices, PlatformItem, GSTDetailsData, BagUnit, ShipmentItemFulFillingStore, UserDataInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, DPDetailsData, TrackingList, ShipmentPayments, UserDetailsData, ShipmentStatusData, OrderDetailsData, Identifier, FinancialBreakup, PlatformDeliveryAddress, OrderBagArticle, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagGST, BagConfigs, OrderBrandName, OrderBags, BagStateMapper, BagStatusHistory, FulfillingStore, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Weight, ReturnConfig, Dimensions, Article, Dates, B2BPODetails, BagMeta, PDFLinks, AffiliateMeta, ShipmentTimeStamp, Formatted, BuyerDetails, LockData, EInvoice, EinvoiceInfo, DebugInfo, ShipmentMeta, AffiliateDetails, BagReturnableCancelableStatus, ArticleDetails, BagGSTDetails, StoreAddress, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, EInvoicePortalDetails, StoreMeta, Store, AffiliateBagDetails, Brand, Attributes, Item, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateStoreIdMapping, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, OrderUser, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, UserData, OrderPriority, MarketPlacePdf, AffiliateBag, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ProcessingDates, Tax, Charge, LineItem, Shipment, ShippingInfo, TaxInfo, BillingInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemMeta, SuccessResponse1, MOQ, ApplicationItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, BannerImage, ImageUrls, CollectionQuery, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionImage, CollectionBanner, CollectionSchedule, SeoDetail, UserInfo, CollectionBadge, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, Media2, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, ProductPublished, Logo, Image, Product, ProductListingResponse, TaxIdentifier, ProductPublish, CustomOrder, TeaserTag, NetQuantity, Trader, ProductCreateUpdate, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, ReturnConfig1, CompanyMeta, QuantityBase, Quantities, BrandMeta, ManufacturerResponse, PriceMeta, Trader1, DimensionResponse, WeightResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, InvoiceCredSerializer, InvoiceDetailsSerializer, GetAddressSerializer, UserSerializer1, GetCompanySerializer, SellerPhoneNumber, LocationTimingSerializer, LocationDayWiseSerializer, ProductReturnConfigSerializer, UserSerializer2, LocationIntegrationType, LocationManagerSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationStoreJson, CompanyTaxesSerializer, ContactDetails, Website, BusinessDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponDateMeta, Rule, Validity, Ownership, DisplayMetaDict, DisplayMeta, State, Validation, CouponSchedule, UsesRemaining, UsesRestriction, PostOrder, PaymentAllowValue, PaymentModes, PriceRange, BulkBundleRestriction, Restrictions, CouponAction, CouponAuthor, RuleDefinition, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionAction, PromotionDateMeta, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, PromotionAuthor, Ownership1, DisplayMeta1, UsesRemaining1, UsesRestriction1, UserRegistered, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, Visibility, PromotionSchedule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CouponBreakup, LoyaltyPoints, DisplayBreakup, RawBreakup, CartBreakup, ProductPrice, ProductPriceInfo, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, CartProductIdentifer, BaseInfo, ActionQuery, ProductAction, ProductImage, CategoryInfo, CartProduct, PromoMeta, BasePrice, ArticlePriceInfo, ProductArticle, ProductAvailability, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    source: TicketSourceEnum;
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
    app_id: string;
    aggregators?: any[];
    success: boolean;
    excluded_fields: string[];
    created: boolean;
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    is_active?: boolean;
    key: string;
    merchant_salt: string;
    config_type: string;
    secret: string;
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
    error: ErrorCodeAndDescription;
    success: boolean;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type IntentApp = {
    package_name?: string;
    display_name?: string;
    outage?: any;
    logos?: PaymentModeLogo;
    code?: string;
};
type PaymentModeList = {
    name?: string;
    logo_url?: PaymentModeLogo;
    card_token?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_name?: string;
    exp_month?: number;
    card_id?: string;
    intent_flow?: boolean;
    card_fingerprint?: string;
    expired?: boolean;
    fynd_vpa?: string;
    timeout?: number;
    intent_app_error_list?: string[];
    card_isin?: string;
    aggregator_name: string;
    card_issuer?: string;
    display_name?: string;
    outage?: any;
    intent_app_error_dict_list?: IntentAppErrorList[];
    display_priority?: number;
    card_number?: string;
    card_brand_image?: string;
    exp_year?: number;
    nickname?: string;
    code?: string;
    intent_app?: IntentApp[];
    card_reference?: string;
    card_type?: string;
    retry_count?: number;
    merchant_code?: string;
    card_brand?: string;
};
type RootPaymentMode = {
    logo?: string;
    name: string;
    logo_url?: PaymentModeLogo;
    aggregator_name?: string;
    save_card?: boolean;
    is_pay_by_card_pl?: boolean;
    display_name: string;
    display_priority: number;
    add_card_enabled?: boolean;
    list?: PaymentModeList[];
    anonymous_enable?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    unique_transfer_no: any;
    transfer_type: string;
    is_active: boolean;
    customers: any;
    payouts_aggregators: any[];
    is_default: boolean;
    more_attributes: any;
};
type PayoutBankDetails = {
    ifsc_code: string;
    account_holder?: string;
    branch_name?: string;
    bank_name?: string;
    account_type: string;
    city?: string;
    pincode?: number;
    country?: string;
    account_no?: string;
    state?: string;
};
type PayoutRequest = {
    transfer_type: string;
    is_active: boolean;
    users: any;
    unique_external_id: string;
    aggregator: string;
    bank_details: PayoutBankDetails;
};
type PayoutResponse = {
    unique_transfer_no: string;
    transfer_type: string;
    is_active: boolean;
    users: any;
    payouts: any;
    payment_status: string;
    bank_details: any;
    success: boolean;
    aggregator: string;
    created: boolean;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    is_active: boolean;
    success: boolean;
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
    data: any[];
    success: boolean;
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
    data: any;
    success: boolean;
};
type RefundAccountResponse = {
    is_verified_flag?: boolean;
    message: string;
    data?: any;
    success: boolean;
};
type NotFoundResourceError = {
    code: string;
    description: string;
    success: boolean;
};
type BankDetailsForOTP = {
    ifsc_code: string;
    account_holder: string;
    bank_name: string;
    branch_name: string;
    account_no: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    branch_name: string;
    bank_name: string;
    success?: boolean;
};
type OrderBeneficiaryDetails = {
    account_holder: string;
    ifsc_code: string;
    created_on: string;
    subtitle: string;
    modified_on: string;
    title: string;
    id: number;
    account_no: string;
    address: string;
    is_active: boolean;
    beneficiary_id: string;
    display_name: string;
    bank_name: string;
    email: string;
    branch_name?: string;
    transfer_mode: string;
    comment?: string;
    mobile?: string;
    delights_user_name?: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    payment_gateway?: string;
    order_id?: string;
    payment_id?: string;
    current_status?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    amount: number;
    name?: string;
    mode: string;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    message: string;
    order_id: string;
    success: boolean;
};
type Code = {
    name: string;
    code: string;
    merchant_code: string;
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
type ShipmentStatus = {
    hex_code: string;
    status: string;
    title: string;
    actual_status: string;
    ops_status: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type Prices = {
    amount_paid?: number;
    delivery_charge?: number;
    promotion_effective_discount?: number;
    value_of_good?: number;
    tax_collected_at_source?: number;
    amount_paid_roundoff?: number;
    coupon_value?: number;
    cashback_applied?: number;
    refund_credit?: number;
    discount?: number;
    price_marked?: number;
    cod_charges?: number;
    cashback?: number;
    fynd_credits?: number;
    refund_amount?: number;
    price_effective?: number;
};
type PlatformItem = {
    code?: string;
    size?: string;
    l1_category?: string[];
    name?: string;
    color?: string;
    images?: string[];
    l3_category?: number;
    department_id?: number;
    l3_category_name?: string;
    image?: string[];
    id?: number;
    can_cancel?: boolean;
    can_return?: boolean;
};
type GSTDetailsData = {
    value_of_good: number;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    gstin_code: string;
    gst_fee: number;
};
type BagUnit = {
    ordering_channel: string;
    line_number: number;
    shipment_id: string;
    bag_id: number;
    status: any;
    applied_promos?: any;
    quantity: number;
    total_shipment_bags: number;
    prices?: Prices;
    group_id?: string;
    parent_promo_bags?: any;
    item?: PlatformItem;
    can_cancel?: boolean;
    gst?: GSTDetailsData;
    can_return?: boolean;
    identifier: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type UserDataInfo = {
    first_name?: string;
    uid?: number;
    mobile?: string;
    name?: string;
    email?: string;
    is_anonymous_user?: boolean;
    avis_user_id?: string;
    gender?: string;
    last_name?: string;
};
type ShipmentItem = {
    shipment_status?: ShipmentStatus;
    application?: any;
    total_bags_count: number;
    created_at: string;
    total_shipments_in_order: number;
    shipment_created_at: number;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_centre: string;
    sla?: any;
    prices?: Prices;
    bags?: BagUnit[];
    channel?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    user?: UserDataInfo;
    id: string;
    payment_methods?: any;
};
type FilterInfoOption = {
    value?: string;
    name?: string;
    text: string;
};
type FiltersInfo = {
    value: string;
    options?: FilterInfoOption[];
    text: string;
    type: string;
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
    applied_filters?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type DPDetailsData = {
    track_url?: string;
    country?: string;
    name?: string;
    gst_tag?: string;
    eway_bill_id?: string;
    id?: string;
    pincode?: string;
    awb_no?: string;
};
type TrackingList = {
    is_current?: boolean;
    status: string;
    time?: string;
    is_passed?: boolean;
    text: string;
};
type ShipmentPayments = {
    source?: string;
    mode: string;
    logo?: string;
};
type UserDetailsData = {
    state: string;
    phone: string;
    name: string;
    country: string;
    email: string;
    address: string;
    pincode: string;
    city: string;
};
type ShipmentStatusData = {
    shipment_id?: string;
    created_at?: string;
    status?: string;
    bag_list?: number[];
    id?: number;
};
type OrderDetailsData = {
    ordering_channel?: string;
    source?: string;
    fynd_order_id: string;
    tax_details?: any;
    cod_charges?: string;
    ordering_channel_logo?: any;
    order_date?: string;
    affiliate_id?: string;
    order_value?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    transfer_price: number;
    tax_collected_at_source?: number;
    discount: number;
    price_marked: number;
    total_units: number;
    identifiers: Identifier;
    item_name: string;
    cod_charges: number;
    cashback: number;
    added_to_fynd_cash: boolean;
    cashback_applied: number;
    pm_price_split: any;
    fynd_credits: number;
    price_effective: number;
    size: string;
    amount_paid: number;
    delivery_charge: number;
    brand_calculated_amount: number;
    coupon_value: number;
    gst_tax_percentage: number;
    amount_paid_roundoff?: number;
    refund_credit: number;
    promotion_effective_discount: number;
    value_of_good: number;
    gst_tag: string;
    gst_fee: string;
    coupon_effective_discount: number;
    hsn_code: string;
};
type PlatformDeliveryAddress = {
    longitude?: number;
    latitude?: number;
    address_category?: string;
    address2?: string;
    created_at?: string;
    state?: string;
    phone?: string;
    country?: string;
    address1?: string;
    contact_person?: string;
    email?: string;
    updated_at?: string;
    landmark?: string;
    pincode?: string;
    address_type?: string;
    city?: string;
    area?: string;
    version?: string;
};
type OrderBagArticle = {
    return_config?: any;
    uid?: string;
    identifiers?: any;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type DiscountRules = {
    value?: number;
    type?: string;
};
type AppliedPromos = {
    promotion_name?: string;
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
    amount?: number;
    article_quantity?: number;
    promotion_type?: string;
    promo_id?: string;
    discount_rules?: DiscountRules[];
};
type BagGST = {
    is_default_hsn_code?: boolean;
    value_of_good?: number;
    brand_calculated_amount?: number;
    gst_tax_percentage?: number;
    gst_tag?: string;
    gstin_code?: string;
    gst_fee?: number;
    hsn_code?: string;
};
type BagConfigs = {
    is_returnable: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    allow_force_return: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
};
type OrderBrandName = {
    created_on: number;
    brand_name: string;
    modified_on?: number;
    id: number;
    company: string;
    logo: string;
};
type OrderBags = {
    line_number?: number;
    financial_breakup?: FinancialBreakup[];
    delivery_address?: PlatformDeliveryAddress;
    article?: OrderBagArticle;
    current_status?: string;
    prices?: Prices;
    can_cancel?: boolean;
    can_return?: boolean;
    applied_promos?: AppliedPromos[];
    quantity?: number;
    gst_details?: BagGST;
    identifier?: string;
    bag_id: number;
    seller_identifier?: string;
    display_name?: string;
    bag_configs?: BagConfigs;
    brand?: OrderBrandName;
    entity_type?: string;
    item?: PlatformItem;
    parent_promo_bags?: any;
};
type BagStateMapper = {
    app_display_name?: string;
    state_type: string;
    is_active?: boolean;
    bs_id: number;
    name: string;
    app_facing?: boolean;
    journey_type: string;
    display_name: string;
    app_state_name?: string;
    notify_customer?: boolean;
};
type BagStatusHistory = {
    store_id: number;
    state_type?: string;
    app_display_name?: boolean;
    state_id: number;
    shipment_id: string;
    bag_id: number;
    delivery_awb_number?: string;
    created_at: string;
    bsh_id: number;
    status: string;
    bag_state_mapper: BagStateMapper;
    delivery_partner_id?: number;
    updated_at?: string;
    kafka_sync?: boolean;
    display_name?: boolean;
    forward?: boolean;
    reasons?: any[];
};
type FulfillingStore = {
    code: string;
    store_name: string;
    contact_person: string;
    phone: string;
    state: string;
    fulfillment_channel: string;
    country: string;
    address: string;
    pincode: string;
    id: string;
    city: string;
    meta: any;
};
type ShipmentInfoResponse = {
    shipment_images?: string[];
    dp_details?: DPDetailsData;
    coupon?: any;
    is_not_fynd_source: boolean;
    affiliate_shipment_id: string;
    current_shipment_status: any;
    replacement_details?: string;
    lock_status: string;
    enable_tracking?: boolean;
    forward_tracking_list?: any[];
    custom_meta?: any[];
    secured_delivery_flag?: string;
    platform_logo: boolean;
    prices?: Prices;
    tracking_list?: TrackingList[];
    can_break: string;
    payments?: ShipmentPayments;
    delivery_details?: UserDetailsData;
    can_cancel?: boolean;
    can_return?: boolean;
    pay_button?: string;
    shipment_status?: string;
    order_status: any;
    shipment_id: string;
    bank_data?: any;
    status?: ShipmentStatusData;
    priority_text?: string;
    ordering_store: any;
    order?: OrderDetailsData;
    gst_details?: GSTDetailsData;
    is_invoiced: boolean;
    packaging_type?: string;
    bags?: OrderBags[];
    bag_status_history?: BagStatusHistory[];
    is_fynd_store?: string;
    total_items?: number;
    escalation?: any;
    is_pdsr?: string;
    delivery_slot?: any;
    total_bags?: number;
    is_packaging_order: boolean;
    items: any[];
    mid?: string;
    user_id: string;
    tracking_url: string;
    beneficiary_details?: boolean;
    vertical?: string;
    invoice: any;
    order_created_time?: string;
    fulfilling_store?: FulfillingStore;
    go_green?: boolean;
    picked_date?: string;
    refund_details?: any;
    forward_shipment_status?: any[];
    billing_details?: UserDetailsData;
    refund_text?: string;
    user_info?: any;
    operational_status?: string;
    payment_mode?: string;
    order_type: string;
    status_progress: number;
    fyndstore_emp: any;
    user_agent?: string;
    email_id: string;
    child_nodes?: string[];
    is_fynd_coupon: boolean;
    forward_order_status?: any[];
    journey_type?: string;
    enable_dp_tracking?: string;
    credit_note_id: string;
    due_date?: string;
    kirana_store_id?: string;
    delivery_status: any[];
    shipment_quantity?: number;
    company: any;
};
type PlatformShipment = {
    shipment_images?: string[];
    dp_details?: DPDetailsData;
    custom_meta?: any[];
    platform_logo?: string;
    prices?: Prices;
    tracking_list?: TrackingList[];
    payments?: ShipmentPayments;
    delivery_details?: UserDetailsData;
    shipment_status?: string;
    shipment_id: string;
    status?: ShipmentStatusData;
    priority_text?: string;
    order?: OrderDetailsData;
    gst_details?: GSTDetailsData;
    packaging_type?: string;
    bags?: OrderBags[];
    bag_status_history?: BagStatusHistory[];
    total_items?: number;
    delivery_slot?: any;
    total_bags?: number;
    vertical?: string;
    fulfilling_store?: FulfillingStore;
    picked_date?: string;
    billing_details?: UserDetailsData;
    operational_status?: string;
    payment_mode?: string;
    user_agent?: string;
    journey_type?: string;
    enable_dp_tracking?: string;
    shipment_quantity?: number;
};
type OrderDict = {
    shipment_count: number;
    order_date: string;
    fynd_order_id: string;
};
type ShipmentDetailsResponse = {
    custom_meta?: any[];
    success: boolean;
    shipments?: PlatformShipment[];
    order?: OrderDict;
};
type SubLane = {
    actions?: any[];
    value?: string;
    index?: number;
    total_items?: number;
    text?: string;
};
type SuperLane = {
    value: string;
    total_items?: number;
    text: string;
    options?: SubLane[];
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformBreakupValues = {
    display?: string;
    value?: string;
    name?: string;
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformOrderItems = {
    user_info?: UserDataInfo;
    payment_mode?: string;
    meta?: any;
    shipments?: PlatformShipment[];
    breakup_values?: PlatformBreakupValues[];
    total_order_value?: number;
    order_created_time?: string;
    channel?: PlatformChannel;
    order_id?: string;
    order_value?: number;
};
type OrderListingResponse = {
    items?: PlatformOrderItems[];
    message?: string;
    total_count?: number;
    page?: Page;
    lane?: string;
    success?: boolean;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    value: number;
    key: string;
    text: string;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    updated_time?: string;
    last_location_recieved_at?: string;
    shipment_type?: string;
    reason?: string;
    status?: string;
    updated_at?: string;
    raw_status?: string;
    account_name?: string;
    awb?: string;
    meta?: any;
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
    status?: string;
    report_requested_at?: string;
    report_name?: string;
    display_name?: string;
    report_type?: string;
    s3_key?: string;
    report_created_at?: string;
    request_details?: any;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    item_id?: string;
    article_id?: string;
    jio_code?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    value?: string;
    message?: string;
    type?: string;
};
type JioCodeUpsertResponse = {
    trace_id?: string;
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
    data?: any[];
    identifier?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    store_id?: string;
    company_id?: string;
    label?: any;
    store_name?: string;
    data?: any;
    invoice?: any;
    invoice_status?: string;
    do_invoice_label_generated: boolean;
    batch_id: string;
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
    size?: number;
    content_type?: string;
    method?: string;
    tags?: string[];
    operation?: string;
    cdn?: URL;
    upload?: FileUploadResponse;
    file_path?: string;
    file_name?: string;
    namespace?: string;
};
type BulkListingPage = {
    size?: number;
    current?: number;
    has_previous?: boolean;
    total?: number;
    type?: string;
    has_next?: boolean;
};
type bulkListingData = {
    failed_shipments?: any[];
    store_name?: string;
    processing?: number;
    uploaded_on?: string;
    store_code?: string;
    store_id?: number;
    status?: string;
    file_name?: string;
    user_name?: string;
    user_id?: string;
    successful?: number;
    batch_id?: string;
    company_id?: number;
    successful_shipments?: any[];
    processing_shipments?: string[];
    failed?: number;
    excel_url?: string;
    total?: number;
    id?: string;
};
type BulkListingResponse = {
    page?: BulkListingPage;
    error?: string;
    success?: boolean;
    data?: bulkListingData[];
};
type ManifestPage = {
    size?: string;
    current?: string;
    has_previous?: boolean;
    total?: number;
    type?: string;
    has_next?: boolean;
};
type DateRange = {
    from_date?: string;
    to_date?: string;
};
type ManifestFilter = {
    store_name?: string;
    dp_ids?: string;
    date_range?: DateRange;
    stores?: string;
    lane?: string;
    sales_channel_name?: string;
    dp_name?: string;
    sales_channels?: string;
};
type GeneratedManifestItem = {
    company_id?: number;
    created_at?: string;
    is_active?: boolean;
    status?: string;
    manifest_id?: string;
    filters?: ManifestFilter;
    created_by?: string;
};
type GeneratedManifestResponse = {
    page?: ManifestPage;
    items?: GeneratedManifestItem[];
};
type ManifestDetailItem = {
    invoice_id?: string;
    shipment_id?: string;
    item_qty?: number;
    order_id?: string;
    awb?: string;
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
    company_id?: number;
    uid?: number;
    created_at?: string;
    is_active?: boolean;
    status?: string;
    user_id?: number;
    manifest_id?: string;
    id?: number;
    filters?: ManifestFilter;
    meta?: ManifestDetailMeta;
    created_by?: string;
};
type ManifestDetailResponse = {
    page?: ManifestPage;
    items?: ManifestDetailItem[];
    manifest_details?: ManifestDetail[];
    additional_shipment_count?: number;
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    qc_type?: string[];
    display_name?: string;
    question_set?: QuestionSet[];
    id?: number;
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
    company_id?: string;
    total_shipments_count?: number;
    successful_shipment_ids?: string[];
    processing_shipments_count?: number;
    failed_shipments_count?: number;
    batch_id?: string;
    successful_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    message?: string;
    user_id?: string;
    status?: boolean;
    error?: string[];
    failed_records?: string[];
    success?: string;
    uploaded_by?: string;
    uploaded_on?: string;
    data?: BulkActionDetailsDataField[];
};
type Weight = {
    unit?: string;
    is_default?: boolean;
    shipping?: number;
};
type ReturnConfig = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Dimensions = {
    unit?: string;
    height?: number;
    is_default?: boolean;
    length?: number;
    width?: number;
};
type Article = {
    code?: string;
    size: string;
    weight?: Weight;
    uid: string;
    _id: string;
    return_config?: ReturnConfig;
    dimensions?: Dimensions;
    seller_identifier: string;
    is_set?: boolean;
    child_details?: any;
    esp_modified?: any;
    identifiers: Identifier;
    raw_meta?: any;
    a_set?: any;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type B2BPODetails = {
    docker_number?: string;
    po_tax_amount?: number;
    total_gst_percentage?: number;
    partial_can_ret?: boolean;
    item_base_price?: number;
    po_line_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type PDFLinks = {
    invoice_type: string;
    label?: string;
    b2b?: string;
    po_invoice?: string;
    label_pos?: string;
    credit_note_url?: string;
    label_a6?: string;
    invoice_a6?: string;
    invoice?: string;
    invoice_a4?: string;
    label_a4?: string;
    invoice_pos?: string;
    label_type: string;
};
type AffiliateMeta = {
    box_type?: string;
    order_item_id?: string;
    size_level_total_qty?: number;
    channel_shipment_id?: string;
    employee_discount?: number;
    quantity?: number;
    channel_order_id?: string;
    coupon_code?: string;
    due_date?: string;
    is_priority?: boolean;
    loyalty_discount?: number;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type BuyerDetails = {
    state: string;
    name: string;
    ajio_site_id?: string;
    address: string;
    pincode: number;
    city: string;
    gstin: string;
};
type LockData = {
    locked?: boolean;
    lock_message?: string;
    mto?: boolean;
};
type EInvoice = {
    acknowledge_no?: number;
    signed_invoice?: string;
    signed_qr_code?: string;
    error_message?: string;
    error_code?: string;
    irn?: string;
    acknowledge_date?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentMeta = {
    weight: number;
    dp_options?: any;
    fulfilment_priority_text?: string;
    dp_id?: string;
    same_store_available: boolean;
    return_awb_number?: string;
    timestamp?: ShipmentTimeStamp;
    box_type?: string;
    formatted?: Formatted;
    b2b_buyer_details?: BuyerDetails;
    lock_data?: LockData;
    shipment_weight?: number;
    packaging_name?: string;
    einvoice_info?: EinvoiceInfo;
    b2c_buyer_details?: any;
    debug_info?: DebugInfo;
    assign_dp_from_sb?: boolean;
    forward_affiliate_order_id?: string;
    dp_sort_key?: string;
    po_number?: string;
    return_store_node?: number;
    forward_affiliate_shipment_id?: string;
    return_affiliate_shipment_id?: string;
    bag_weight?: any;
    shipment_volumetric_weight?: number;
    auto_trigger_dp_assignment_acf: boolean;
    return_affiliate_order_id?: string;
    ewaybill_info?: any;
    return_details?: any;
    awb_number?: string;
    order_type?: string;
    dp_name?: string;
    external?: any;
    due_date?: string;
    marketplace_store_id?: string;
    store_invoice_updated_date?: string;
};
type AffiliateDetails = {
    affiliate_shipment_id: string;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    pdf_links?: PDFLinks;
    affiliate_meta: AffiliateMeta;
    affiliate_store_id: string;
    shipment_meta: ShipmentMeta;
    company_affiliate_tag?: string;
    affiliate_id?: string;
    ad_id?: string;
};
type BagReturnableCancelableStatus = {
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
};
type ArticleDetails = {
    status?: any;
};
type BagGSTDetails = {
    sgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    igst_gst_fee: string;
    value_of_good: number;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    igst_tax_percentage: number;
    gst_tax_percentage: number;
    gst_tag: string;
    hsn_code_id: string;
    gstin_code?: string;
    sgst_tax_percentage: number;
    cgst_gst_fee: string;
    gst_fee: number;
    hsn_code: string;
    cgst_tax_percentage: number;
};
type StoreAddress = {
    address_category: string;
    address1: string;
    area?: string;
    latitude: number;
    address2?: string;
    country: string;
    state: string;
    phone: string;
    address_type: string;
    pincode: number;
    version?: string;
    longitude: number;
    created_at: string;
    email?: string;
    landmark?: string;
    city: string;
    contact_person: string;
    updated_at: string;
    country_code: string;
};
type StoreEinvoice = {
    password?: string;
    user?: string;
    username?: string;
    enabled: boolean;
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
    value: string;
    verified: boolean;
    url?: string;
    legal_name: string;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    username?: string;
    user?: string;
    password?: string;
};
type StoreMeta = {
    gst_credentials: StoreGstCredentials;
    gst_number?: string;
    ewaybill_portal_details?: any;
    timing?: any[];
    additional_contact_details?: any;
    notification_emails?: string[];
    documents?: StoreDocuments;
    display_name: string;
    stage: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    product_return_config?: any;
};
type Store = {
    brand_id?: any;
    is_active?: boolean;
    address1: string;
    store_address_json?: StoreAddress;
    brand_store_tags?: string[];
    store_active_from?: string;
    meta: StoreMeta;
    s_id: string;
    code?: string;
    mall_name?: string;
    is_archived?: boolean;
    latitude: number;
    address2?: string;
    country: string;
    phone: number;
    state: string;
    fulfillment_channel: string;
    mall_area?: string;
    store_email: string;
    login_username: string;
    pincode: string;
    longitude: number;
    alohomora_user_id?: number;
    location_type: string;
    order_integration_id?: string;
    created_at: string;
    name: string;
    packaging_material_count?: number;
    city: string;
    parent_store_id?: number;
    company_id: number;
    is_enabled_for_recon?: boolean;
    contact_person: string;
    updated_at?: string;
    vat_no?: string;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    affiliate_bag_id: string;
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
    loyalty_discount?: number;
};
type Brand = {
    start_date?: string;
    brand_id: number;
    script_last_ran?: string;
    created_on?: number;
    invoice_prefix?: string;
    credit_note_allowed?: boolean;
    brand_name: string;
    modified_on?: number;
    pickup_location?: string;
    is_virtual_invoice?: boolean;
    credit_note_expiry_days?: number;
    company: string;
    logo?: string;
};
type Attributes = {
    essential?: string;
    primary_color_hex?: string;
    name?: string;
    primary_material?: string;
    primary_color?: string;
    marketer_name?: string;
    marketer_address?: string;
    brand_name?: string;
    gender?: string[];
};
type Item = {
    brand_id: number;
    l2_category_id?: number;
    l1_category?: string[];
    color?: string;
    department_id?: number;
    can_cancel?: boolean;
    last_updated_at?: string;
    can_return?: boolean;
    meta?: any;
    code?: string;
    webstore_product_url?: string;
    l3_category?: number;
    gender?: string;
    slug_key: string;
    size: string;
    attributes: Attributes;
    item_id: number;
    name: string;
    image: string[];
    l3_category_name?: string;
    l2_category?: string[];
    branch_url?: string;
    brand: string;
    l1_category_id?: number;
};
type BagDetailsPlatformResponse = {
    line_number?: number;
    financial_breakup: FinancialBreakup[];
    b_type?: string;
    article: Article;
    current_status: BagStatusHistory;
    prices: Prices;
    restore_promos?: any;
    reasons?: any[];
    dates?: Dates;
    b_id: number;
    current_operational_status: BagStatusHistory;
    meta?: BagMeta;
    affiliate_details?: AffiliateDetails;
    restore_coupon?: boolean;
    shipment_id?: string;
    bag_status: BagStatusHistory[];
    applied_promos?: any[];
    status: BagReturnableCancelableStatus;
    article_details?: ArticleDetails;
    gst_details: BagGSTDetails;
    ordering_store?: Store;
    quantity?: number;
    tags?: string[];
    bag_status_history?: BagStatusHistory;
    identifier?: string;
    affiliate_bag_details: AffiliateBagDetails;
    order_integration_id?: string;
    seller_identifier?: string;
    display_name?: string;
    original_bag_list?: number[];
    qc_required?: any;
    operational_status?: string;
    brand: Brand;
    bag_update_time?: number;
    entity_type?: string;
    journey_type: string;
    item: Item;
    no_of_bags_order?: number;
    parent_promo_bags?: any;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    size: number;
    current: number;
    page_type: string;
    has_next: boolean;
    item_total: number;
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
    shipment_id?: string;
    status?: number;
    message?: string;
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
    fynd_order_id?: string;
    set_id?: string;
    item_id?: string;
    affiliate_order_id?: string;
    store_id: number;
    affiliate_id?: string;
    bag_id?: number;
    reason_ids?: number[];
    affiliate_bag_id?: string;
    mongo_article_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    id?: string;
    affiliate_order_id?: string;
    reason_text: string;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    action_type: string;
    entities: Entities[];
    action: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    is_locked?: boolean;
    affiliate_bag_id?: string;
    bag_id?: number;
    affiliate_order_id?: string;
};
type CheckResponse = {
    lock_status?: boolean;
    is_bag_locked?: boolean;
    status?: string;
    is_shipment_locked?: boolean;
    affiliate_id?: string;
    original_filter?: OriginalFilter;
    affiliate_shipment_id?: string;
    bags?: Bags[];
    shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    platform_id?: string;
    created_at?: string;
    description?: string;
    company_id?: number;
    from_datetime?: string;
    id: number;
    platform_name?: string;
    logo_url?: string;
    title?: string;
    to_datetime?: string;
};
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
};
type BaseResponse = {
    success: boolean;
    message: string;
};
type Click2CallResponse = {
    status: boolean;
    call_id: string;
};
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
};
type ProductsDataUpdates = {
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
};
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    products?: ProductsDataUpdates[];
};
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasonsFilters = {
    identifier?: string;
    quantity?: number;
    line_number?: number;
};
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type Products = {
    identifier?: string;
    quantity?: number;
    line_number?: number;
};
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    identifier: string;
    reasons?: ReasonsData;
    products?: Products[];
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
    status?: string;
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    force_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    status?: number;
    stack_trace?: string;
    exception?: string;
    message?: string;
    final_state?: any;
    meta?: any;
    identifier?: string;
    code?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    created_at: string;
    owner: string;
    description?: string;
    token: string;
    id: string;
    updated_at: string;
    meta?: AffiliateAppConfigMeta[];
    secret: string;
    name: string;
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
type OrderConfig = {
    bag_end_state?: string;
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
    affiliate: Affiliate;
    store_lookup?: string;
};
type OrderUser = {
    address1?: string;
    phone: number;
    pincode: string;
    city: string;
    email: string;
    mobile: number;
    address2?: string;
    country: string;
    first_name: string;
    last_name: string;
    state: string;
};
type ArticleDetails1 = {
    brand_id: number;
    attributes: any;
    dimension: any;
    category: any;
    _id: string;
    quantity: number;
    weight: any;
};
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentDetails = {
    shipments: number;
    articles: ArticleDetails1[];
    box_type?: string;
    dp_id?: number;
    affiliate_shipment_id: string;
    meta?: any;
    fulfillment_id: number;
};
type ShipmentConfig = {
    source: string;
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
    to_pincode: string;
    journey: string;
    identifier: string;
    action: string;
    payment_mode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    price_effective: number;
    delivery_charge: number;
    company_id: number;
    unit_price: number;
    modified_on: string;
    discount: number;
    item_id: number;
    transfer_price: number;
    amount_paid: number;
    _id: string;
    item_size: string;
    sku: string;
    identifier: any;
    seller_identifier: string;
    pdf_links?: MarketPlacePdf;
    store_id: number;
    price_marked: number;
    fynd_store_id: string;
    quantity: number;
    avl_qty: number;
    affiliate_meta: any;
    affiliate_store_id: string;
    hsn_code_id: string;
};
type OrderInfo = {
    order_value: number;
    billing_address: OrderUser;
    delivery_charges: number;
    shipment?: ShipmentData;
    user: UserData;
    affiliate_order_id?: string;
    items: any;
    payment?: any;
    shipping_address: OrderUser;
    order_priority?: OrderPriority;
    bags: AffiliateBag[];
    coupon?: string;
    cod_charges: number;
    discount: number;
    payment_mode: string;
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
    display_text: string;
    slug: string;
    id: number;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    createdat: string;
    l3_detail?: string;
    user: string;
    type: string;
    message: string;
    ticket_id?: string;
    l1_detail?: string;
    ticket_url?: string;
    bag_id?: number;
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
    brand_name: string;
    phone_number: number;
    order_id: string;
    message: string;
    amount_paid: number;
    country_code: string;
    shipment_id: number;
    payment_mode: string;
    customer_name: string;
};
type SendSmsPayload = {
    slug: string;
    data?: SmsDataPayload;
    bag_id: number;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    status?: string;
    bag_list?: number[];
    id: number;
    meta: Meta;
    shipment_id?: string;
    remarks?: string;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type OrderStatusData = {
    shipment_details?: ShipmentDetail[];
    order_details: OrderDetails;
    errors?: string[];
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    qc_required: string;
    shipment_ids?: string[];
    order_type: string;
    dp_id: number;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type ProcessingDates = {
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
    pack_by_date?: string;
    confirm_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_by_date?: string;
};
type Tax = {
    amount: any;
    rate: number;
    name: string;
    breakup?: any[];
};
type Charge = {
    amount: any;
    name: string;
    type: string;
    code?: string;
    tax?: Tax;
};
type LineItem = {
    external_line_id?: string;
    charges: Charge[];
    custom_messasge?: string;
    quantity?: number;
    meta?: any;
    seller_identifier: string;
};
type Shipment = {
    external_shipment_id?: number;
    processing_dates?: ProcessingDates;
    priority?: number;
    location_id: number;
    meta?: any;
    line_items: LineItem[];
};
type ShippingInfo = {
    state_code?: string;
    address1: string;
    customer_code?: string;
    address2?: string;
    alternate_mobile_number?: string;
    slot?: any[];
    address_type?: string;
    house_no?: string;
    pincode: string;
    alternate_email?: string;
    first_name: string;
    external_customer_code?: string;
    primary_mobile_number: string;
    landmark?: string;
    middle_name?: string;
    floor_no?: string;
    shipping_type?: string;
    last_name?: string;
    gender?: string;
    primary_email: string;
    geo_location?: any;
    city: string;
    state: string;
    country: string;
    title?: string;
    country_code?: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type BillingInfo = {
    state_code?: string;
    address1: string;
    customer_code?: string;
    address2?: string;
    alternate_mobile_number?: string;
    house_no?: string;
    pincode: string;
    alternate_email?: string;
    first_name: string;
    external_customer_code?: string;
    primary_mobile_number: string;
    middle_name?: string;
    floor_no?: string;
    last_name?: string;
    gender?: string;
    primary_email: string;
    city: string;
    state: string;
    country: string;
    title?: string;
    country_code?: string;
};
type PaymentMethod = {
    meta?: any;
    amount: number;
    transaction_data?: any;
    collect_by: string;
    mode: string;
    refund_by: string;
    name: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type CreateOrderAPI = {
    external_creation_date?: string;
    shipments: Shipment[];
    currency_info?: any;
    charges: Charge[];
    shipping_info: ShippingInfo;
    external_order_id?: string;
    tax_info?: TaxInfo;
    meta?: any;
    billing_info: BillingInfo;
    payment_info: PaymentInfo;
};
type CreateOrderErrorReponse = {
    meta?: string;
    status: number;
    stack_trace?: string;
    exception?: string;
    message: string;
    info?: any;
    code?: string;
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
    mode_of_payment?: string;
    source?: string;
    payment_methods?: PaymentMethods[];
};
type CreateChannelConfig = {
    dp_configuration?: DpConfiguration;
    location_reassignment?: boolean;
    shipment_assignment?: string;
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_inserted?: boolean;
    is_upserted?: boolean;
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
    success?: boolean;
    message?: string[];
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
type GetSearchWordsData = {
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
    uid?: string;
    result?: any;
    app_id?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
    result: SearchKeywordResult;
    app_id?: string;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    words?: string[];
    uid?: string;
    results?: any[];
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type Media = {
    type?: string;
    url?: string;
    aspect_ratio?: string;
};
type AutocompletePageAction = {
    type?: string;
    url?: string;
    query?: any;
    params?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type AutocompleteResult = {
    logo?: Media;
    action?: AutocompleteAction;
    _custom_json?: any;
    display?: string;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
    results?: AutocompleteResult[];
    app_id?: string;
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    results?: any[];
    words?: string[];
    _custom_json?: any;
};
type ProductBundleItem = {
    product_uid: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    allow_remove?: boolean;
    min_quantity: number;
    max_quantity: number;
};
type GetProductBundleCreateResponse = {
    modified_by?: any;
    company_id?: number;
    products: ProductBundleItem[];
    is_active: boolean;
    slug: string;
    logo?: string;
    meta?: any;
    choice: string;
    name: string;
    id?: string;
    modified_on?: string;
    created_on?: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    created_by?: any;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    modified_by?: any;
    company_id?: number;
    products: ProductBundleItem[];
    is_active: boolean;
    slug: string;
    logo?: string;
    meta?: any;
    choice: string;
    name: string;
    modified_on?: string;
    created_on?: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    created_by?: any;
};
type LimitedProductData = {
    identifier?: any;
    attributes?: any;
    quantity?: number;
    slug?: string;
    country_of_origin?: string;
    name?: string;
    uid?: number;
    sizes?: string[];
    short_description?: string;
    price?: any;
    item_code?: string;
    images?: string[];
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
    max_marked?: number;
    currency?: string;
    min_effective?: number;
};
type GetProducts = {
    product_details?: LimitedProductData;
    product_uid?: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    allow_remove?: boolean;
    sizes?: Size[];
    price?: Price;
    min_quantity?: number;
    max_quantity?: number;
};
type GetProductBundleResponse = {
    company_id?: number;
    products?: GetProducts[];
    is_active?: boolean;
    slug?: string;
    logo?: string;
    meta?: any;
    choice?: string;
    name?: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
};
type ProductBundleUpdateRequest = {
    modified_by?: any;
    company_id?: number;
    products: ProductBundleItem[];
    is_active: boolean;
    slug: string;
    logo?: string;
    meta?: any;
    choice: string;
    name: string;
    modified_on?: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    active?: boolean;
    tag?: string;
    company_id?: number;
    modified_by?: any;
    created_by?: any;
    guide?: Guide;
    name: string;
    subtitle?: string;
    description?: string;
    created_on?: string;
    title: string;
    modified_on?: string;
    id?: string;
    image?: string;
    brand_id?: number;
};
type SizeGuideResponse = {
    active?: boolean;
    modified_by?: any;
    company_id?: number;
    tag?: string;
    guide?: any;
    name?: string;
    subtitle?: string;
    id?: string;
    modified_on?: string;
    created_on?: string;
    brand_id?: number;
    title?: string;
    created_by?: any;
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
    maximum?: number;
    increment_unit?: number;
};
type ApplicationItemResponse = {
    seo?: SEO;
    alt_text?: any;
    moq?: MOQ;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
};
type PageResponseType = {
    total_count: number;
    next: number;
    has_next: boolean;
    current: number;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    display_type: string;
    key?: string;
    is_active: boolean;
    unit?: string;
    priority: number;
    logo?: string;
    slug?: string;
    name: string;
};
type AppConfigurationDetail = {
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    slug: string;
    logo?: string;
    priority: number;
    name?: string;
    is_default: boolean;
    template_slugs?: string[];
    app_id: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    key: string;
    is_active: boolean;
    default_key: string;
    priority: number;
    logo?: string;
    name?: string;
    is_default: boolean;
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
    similar?: any;
    compare?: any;
};
type MetaDataListingSortMetaResponse = {
    key?: string;
    display?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingFilterMetaResponse = {
    units?: any[];
    key?: string;
    filter_types?: string[];
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
    min: number;
    max: number;
};
type ConfigurationProductVariantConfig = {
    display_type: string;
    key: string;
    is_active: boolean;
    priority: number;
    logo?: string;
    name: string;
    size: ProductSize;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    key: string;
    is_active: boolean;
    priority: number;
    logo?: string;
    subtitle?: string;
    title?: string;
    size?: ProductSize;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type ConfigurationListingSortConfig = {
    key: string;
    is_active: boolean;
    priority: number;
    logo?: string;
    name?: string;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    map?: any;
    value?: string;
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map_values?: any[];
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    key: string;
    is_active: boolean;
    value_config?: ConfigurationListingFilterValue;
    priority: number;
    logo?: string;
    name?: string;
    type: string;
    display_name?: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type AppCatalogConfiguration = {
    modified_by?: any;
    config_type: string;
    created_by?: any;
    product?: ConfigurationProduct;
    config_id?: string;
    id?: string;
    type?: string;
    created_on?: string;
    modified_on?: string;
    app_id: string;
    listing?: ConfigurationListing;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    modified_by?: any;
    config_type: string;
    created_by?: any;
    product?: ConfigurationProduct;
    config_id?: string;
    type?: string;
    created_on?: string;
    modified_on?: string;
    app_id: string;
    listing?: ConfigurationListing;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_id?: string;
    id?: string;
    app_id: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    value?: string;
    is_selected?: boolean;
    name?: string;
};
type ProductFiltersValue = {
    display_format?: string;
    query_format?: string;
    value: any;
    selected_min?: number;
    currency_code?: string;
    selected_max?: number;
    is_selected: boolean;
    min?: number;
    max?: number;
    count?: number;
    currency_symbol?: string;
    display: string;
};
type ProductFiltersKey = {
    logo?: string;
    name: string;
    operators?: string[];
    kind?: string;
    display: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type GetCollectionQueryOptionResponse = {
    operators: any;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
};
type BannerImage = {
    type?: string;
    url?: string;
    aspect_ratio?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type Media1 = {
    type?: string;
    url: string;
    meta?: any;
};
type GetCollectionDetailNest = {
    allow_facets?: boolean;
    action?: Action;
    name?: string;
    uid?: string;
    banners?: ImageUrls;
    tag?: string[];
    priority?: number;
    meta?: any;
    _schedule?: any;
    is_active?: boolean;
    cron?: any;
    type?: string;
    visible_facets_keys?: string[];
    query?: CollectionQuery[];
    slug?: string;
    logo?: Media1;
    allow_sort?: boolean;
    description?: string;
    app_id?: string;
    badge?: any;
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
    page?: Page;
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionSchedule = {
    next_schedule?: NextSchedule[];
    start?: string;
    cron?: string;
    duration?: number;
    end?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type UserInfo = {
    email?: string;
    user_id?: string;
    uid?: string;
    username?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CreateCollection = {
    allow_facets?: boolean;
    name: string;
    banners: CollectionBanner;
    tags?: string[];
    priority?: number;
    meta?: any;
    published?: boolean;
    _locale_language?: any;
    _schedule?: CollectionSchedule;
    is_active?: boolean;
    _custom_json?: any;
    type: string;
    seo?: SeoDetail;
    sort_on?: string;
    is_visible?: boolean;
    visible_facets_keys?: string[];
    modified_by?: UserInfo;
    query?: CollectionQuery[];
    slug: string;
    logo: CollectionImage;
    allow_sort?: boolean;
    description?: string;
    app_id: string;
    badge?: CollectionBadge;
    created_by?: UserInfo;
};
type CollectionCreateResponse = {
    allow_facets?: boolean;
    name?: string;
    banners?: ImageUrls;
    tag?: string[];
    priority?: number;
    meta?: any;
    _schedule?: any;
    is_active?: boolean;
    cron?: any;
    type?: string;
    sort_on?: string;
    visible_facets_keys?: string[];
    query?: CollectionQuery[];
    slug?: string;
    logo?: BannerImage;
    allow_sort?: boolean;
    description?: string;
    app_id?: string;
    badge?: any;
};
type CollectionDetailResponse = {
    allow_facets?: boolean;
    tag?: string[];
    badge?: any;
    is_active?: boolean;
    query?: CollectionQuery[];
    priority?: number;
    cron?: any;
    logo?: Media1;
    slug?: string;
    allow_sort?: boolean;
    name?: string;
    description?: string;
    type?: string;
    meta?: any;
    _schedule?: any;
    banners?: ImageUrls;
    app_id?: string;
    visible_facets_keys?: string[];
};
type UpdateCollection = {
    allow_facets?: boolean;
    name?: string;
    banners?: CollectionBanner;
    tags?: string[];
    priority?: number;
    meta?: any;
    published?: boolean;
    _locale_language?: any;
    _schedule?: CollectionSchedule;
    is_active?: boolean;
    _custom_json?: any;
    type?: string;
    seo?: SeoDetail;
    sort_on?: string;
    is_visible?: boolean;
    visible_facets_keys?: string[];
    modified_by?: UserInfo;
    query?: CollectionQuery[];
    slug?: string;
    logo?: CollectionImage;
    allow_sort?: boolean;
    description?: string;
    badge?: CollectionBadge;
};
type ProductBrand = {
    uid?: number;
    logo?: Media1;
    action?: Action;
    name?: string;
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
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductListingDetail = {
    sellable?: boolean;
    item_type?: string;
    name?: string;
    uid?: number;
    highlights?: string[];
    has_variant?: boolean;
    tryouts?: string[];
    teaser_tag?: any;
    discount?: string;
    brand?: ProductBrand;
    attributes?: any;
    similars?: string[];
    rating?: number;
    promo_meta?: any;
    medias?: Media1[];
    type?: string;
    short_description?: string;
    product_online_date?: string;
    price?: ProductListingPrice;
    item_code?: string;
    rating_count?: number;
    slug: string;
    color?: string;
    image_nature?: string;
    description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
};
type GetCollectionItemsResponse = {
    page?: Page;
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
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
type CatalogInsightBrand = {
    total_sizes?: number;
    available_articles?: number;
    available_sizes?: number;
    name?: string;
    total_articles?: number;
    article_freshness?: number;
};
type CatalogInsightItem = {
    count?: number;
    out_of_stock_count?: number;
    sellable_count?: number;
};
type CatalogInsightResponse = {
    brand_distribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
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
    enabled?: boolean;
    company_id?: number;
    opt_level: string;
    store_ids?: number[];
    platform?: string;
    brand_ids?: number[];
};
type CompanyOptIn = {
    enabled: boolean;
    modified_by?: any;
    company_id: number;
    opt_level: string;
    modified_on: number;
    created_on: number;
    store_ids: number[];
    platform: string;
    brand_ids: number[];
    created_by?: any;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    company_type?: string;
    uid?: number;
    business_type?: string;
    name?: string;
};
type CompanyBrandDetail = {
    brand_name?: string;
    total_article?: number;
    company_id?: number;
    brand_id?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    store?: number;
    company?: string;
    brand?: number;
};
type StoreDetail = {
    documents?: any[];
    additional_contacts?: any[];
    timing?: any;
    company_id?: number;
    address?: any;
    store_type?: string;
    name?: string;
    uid?: number;
    created_on?: string;
    modified_on?: string;
    display_name?: string;
    store_code?: string;
    manager?: any;
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
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    format?: string;
    multi?: boolean;
    type: string;
    allowed_values?: string[];
    mandatory?: boolean;
    range?: AttributeSchemaRange;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type GenderDetail = {
    departments?: string[];
    is_nested?: boolean;
    slug?: string;
    logo?: string;
    meta?: AttributeMasterMeta;
    name?: string;
    description?: string;
    enabled_for_end_consumer?: boolean;
    details?: AttributeMasterDetails;
    id?: string;
    schema?: AttributeMaster;
    filters?: AttributeMasterFilter;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    status?: number;
    code?: string;
    meta?: any;
    errors?: any;
    message?: string;
};
type UserSerializer = {
    user_id?: string;
    _id?: string;
    uid?: string;
    username?: string;
    contact?: string;
};
type GetDepartment = {
    modified_by?: UserSerializer;
    item_type?: string;
    is_active?: boolean;
    page_size?: number;
    slug?: string;
    logo?: string;
    name?: string;
    search?: string;
    uid?: number;
    page_no?: number;
    created_on?: string;
    modified_on?: string;
    synonyms?: string[];
    priority_order?: number;
    created_by?: UserSerializer;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    status?: number;
    code?: string;
    meta?: any;
    errors?: any;
    message?: string;
};
type DepartmentCreateUpdate = {
    is_active?: boolean;
    slug?: string;
    logo: string;
    platforms?: any;
    _custom_json?: any;
    name: string;
    uid?: number;
    _cls?: string;
    synonyms?: string[];
    tags?: string[];
    priority_order: number;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    user_id: string;
    contact?: string;
    super_user?: boolean;
    username: string;
};
type DepartmentModel = {
    modified_by?: UserDetail;
    is_active?: boolean;
    slug?: any;
    logo: string;
    _custom_json?: any;
    verified_on?: string;
    verified_by?: UserDetail;
    _id?: any;
    created_on: string;
    modified_on: string;
    uid?: number;
    name: any;
    synonyms?: any[];
    _cls?: any;
    priority_order: number;
    created_by?: UserDetail;
};
type ProductTemplate = {
    is_archived?: boolean;
    is_physical: boolean;
    tag?: string;
    modified_by?: any;
    is_active?: boolean;
    departments?: string[];
    attributes?: string[];
    slug: string;
    logo?: string;
    categories?: string[];
    name?: string;
    description?: string;
    created_on?: string;
    modified_on?: string;
    is_expirable: boolean;
    created_by?: any;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    item_type?: any;
    product_group_tag?: any;
    multi_size?: any;
    return_config?: any;
    trader_type?: any;
    product_publish?: any;
    currency?: any;
    name?: any;
    custom_order?: any;
    highlights?: any;
    tags?: any;
    teaser_tag?: any;
    media?: any;
    size_guide?: any;
    is_active?: any;
    category_slug?: any;
    hsn_code?: any;
    sizes?: any;
    short_description?: any;
    item_code?: any;
    trader?: any;
    brand_uid?: any;
    is_dependent?: any;
    variants?: any;
    slug?: any;
    country_of_origin?: any;
    description?: any;
    command?: any;
    no_of_boxes?: any;
};
type GlobalValidation = {
    definitions?: any;
    properties?: Properties;
    required?: string[];
    description?: string;
    type?: string;
    title?: string;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    is_archived?: boolean;
    is_physical: boolean;
    tag?: string;
    is_active?: boolean;
    departments?: string[];
    attributes?: string[];
    slug: string;
    logo?: string;
    categories?: string[];
    name?: string;
    description?: string;
    id?: string;
    is_expirable: boolean;
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
    hsn_code?: string[];
    country_of_origin?: string[];
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type ProductDownloadItemsData = {
    type?: string;
    templates?: string[];
    brand?: string[];
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    status?: string;
    task_id?: string;
    url?: string;
    id?: string;
    trigger_on?: string;
    seller_id?: number;
    data?: ProductDownloadItemsData;
    template_tags?: any;
    completed_on?: string;
    created_by?: VerifiedBy;
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
    department: number;
    l1: number;
    l2: number;
};
type Media2 = {
    logo: string;
    portrait: string;
    landscape: string;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Category = {
    hierarchy?: Hierarchy[];
    modified_by?: any;
    is_active: boolean;
    departments: number[];
    media?: Media2;
    slug?: string;
    priority?: number;
    name: string;
    id?: string;
    uid?: number;
    marketplaces?: CategoryMapping;
    created_on?: string;
    level: number;
    synonyms?: string[];
    modified_on?: string;
    tryouts?: string[];
    created_by?: any;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    hierarchy?: Hierarchy[];
    is_active: boolean;
    media?: Media2;
    departments: number[];
    slug?: string;
    priority?: number;
    name: string;
    marketplaces?: CategoryMapping;
    level: number;
    synonyms?: string[];
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
    message?: string;
    success?: boolean;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Logo = {
    url?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
};
type Image = {
    url?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
};
type Product = {
    is_physical?: boolean;
    item_type?: string;
    multi_size?: boolean;
    tax_identifier?: any;
    product_publish?: ProductPublished;
    currency?: string;
    name?: string;
    uid?: number;
    custom_order?: any;
    highlights?: string[];
    is_expirable?: boolean;
    media?: Media1[];
    brand?: Brand;
    template_tag?: string;
    l3_mapping?: string[];
    size_guide?: string;
    is_active?: boolean;
    _custom_json?: any;
    category_slug?: string;
    hsn_code?: string;
    sizes?: any[];
    short_description?: string;
    item_code?: string;
    brand_uid?: number;
    category_uid?: number;
    is_set?: boolean;
    departments?: number[];
    is_dependent?: boolean;
    variants?: any;
    primary_color?: string;
    slug?: string;
    country_of_origin?: string;
    id?: string;
    description?: string;
    image_nature?: string;
    color?: string;
    all_sizes?: any[];
    images?: Image[];
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
    manufacturing_time?: number;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type Trader = {
    type?: string;
    address?: string[];
    name?: string;
};
type ProductCreateUpdate = {
    company_id: number;
    item_type: string;
    multi_size?: boolean;
    product_group_tag?: string[];
    tax_identifier: TaxIdentifier;
    return_config: ReturnConfig;
    action?: string;
    product_publish?: ProductPublish;
    currency: string;
    name: string;
    uid?: number;
    custom_order?: CustomOrder;
    highlights?: string[];
    tags?: string[];
    teaser_tag?: TeaserTag;
    media?: Media1[];
    requester?: string;
    template_tag: string;
    bulk_job_id?: string;
    is_image_less_product?: boolean;
    size_guide?: string;
    is_active?: boolean;
    _custom_json?: any;
    category_slug: string;
    short_description?: string;
    net_quantity?: NetQuantity;
    item_code: any;
    trader: Trader[];
    brand_uid: number;
    is_set?: boolean;
    is_dependent?: boolean;
    departments: number[];
    variants?: any;
    variant_media?: any;
    slug: string;
    country_of_origin: string;
    description?: string;
    change_request_id?: any;
    no_of_boxes?: number;
};
type AttributeMasterSerializer = {
    variant?: boolean;
    suggestion?: string;
    name?: string;
    tags?: string[];
    raw_key?: string;
    is_nested?: boolean;
    enabled_for_end_consumer?: boolean;
    schema: AttributeMaster;
    synonyms?: any;
    created_on?: string;
    modified_by?: any;
    unit?: string;
    departments: string[];
    slug: string;
    logo?: string;
    details: AttributeMasterDetails;
    description?: string;
    modified_on?: string;
    filters: AttributeMasterFilter;
    created_by?: any;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    user_id?: string;
    full_name?: string;
    username?: string;
};
type ProductBulkRequest = {
    file_path?: string;
    company_id?: number;
    modified_by?: UserDetail1;
    is_active?: boolean;
    failed?: number;
    stage?: string;
    cancelled_records?: string[];
    template_tag?: string;
    modified_on?: string;
    created_on?: string;
    succeed?: number;
    template?: ProductTemplate;
    failed_records?: string[];
    total?: number;
    cancelled?: number;
    created_by?: UserDetail1;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    email?: string;
    user_id?: string;
    uid?: string;
    username?: string;
};
type BulkJob = {
    modified_by?: UserInfo1;
    company_id: number;
    file_path?: string;
    is_active?: boolean;
    tracking_url?: string;
    failed?: number;
    stage?: string;
    cancelled_records?: any[];
    template_tag?: string;
    custom_template_tag?: string;
    created_on: string;
    modified_on?: string;
    succeed?: number;
    failed_records?: any[];
    total: number;
    cancelled?: number;
    created_by?: UserInfo1;
};
type BulkResponse = {
    modified_by?: UserInfo1;
    is_active?: boolean;
    batch_id: string;
    created_on: string;
    modified_on?: string;
    created_by?: UserInfo1;
};
type BulkProductRequest = {
    batch_id: string;
    data: any[];
    company_id: number;
    template_tag: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type UserCommon = {
    user_id?: string;
    company_id?: number;
    username?: string;
};
type Items = {
    modified_by?: UserCommon;
    file_path?: string;
    company_id?: number;
    is_active?: boolean;
    tracking_url?: string;
    failed?: number;
    stage?: string;
    cancelled_records?: string[];
    id?: string;
    created_on?: string;
    modified_on?: string;
    succeed?: number;
    failed_records?: string[];
    total?: number;
    retry?: number;
    cancelled?: number;
    created_by?: UserCommon;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    url: string;
    company_id?: number;
    user: any;
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    company_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    item_id?: number;
    store?: any;
    sellable_quantity?: number;
    quantity?: number;
    price_effective?: number;
    identifiers?: any;
    currency?: string;
    uid?: string;
    price_transfer?: number;
    size?: string;
    inventory_updated_on?: string;
    seller_identifier?: string;
    price?: number;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type ItemQuery = {
    brand_uid?: number;
    uid?: number;
    item_code?: string;
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
    gtin_value: string;
    gtin_type: string;
};
type InvSize = {
    set?: InventorySet;
    is_set?: boolean;
    item_length?: number;
    item_dimensions_unit_of_measure?: string;
    item_height?: number;
    quantity: number;
    price_effective: number;
    item_weight?: number;
    identifiers: GTIN[];
    currency: string;
    item_width?: number;
    price_transfer?: number;
    size: string;
    item_weight_unit_of_measure?: string;
    store_code: string;
    price?: number;
    expiration_date?: string;
};
type InventoryRequest = {
    company_id: number;
    item: ItemQuery;
    sizes: InvSize[];
};
type ReturnConfig1 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type CompanyMeta = {
    id: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    sellable?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
    damaged?: QuantityBase;
};
type BrandMeta = {
    name: string;
    id: number;
};
type ManufacturerResponse = {
    is_default: boolean;
    address: string;
    name: string;
};
type PriceMeta = {
    marked: number;
    transfer: number;
    effective: number;
    currency: string;
    updated_at?: string;
    tp_notes?: any;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type DimensionResponse = {
    unit: string;
    height: number;
    width: number;
    is_default: boolean;
    length: number;
};
type WeightResponse = {
    is_default: boolean;
    unit: string;
    shipping: number;
};
type InventorySellerResponse = {
    fynd_meta?: any;
    tax_identifier?: any;
    return_config?: ReturnConfig1;
    company: CompanyMeta;
    stage?: string;
    quantities?: Quantities;
    uid: string;
    total_quantity: number;
    tags?: string[];
    store: StoreMeta;
    brand: BrandMeta;
    identifier: any;
    meta?: any;
    track_inventory?: boolean;
    manufacturer: ManufacturerResponse;
    seller_identifier: string;
    fynd_article_code: string;
    item_id: number;
    is_active?: boolean;
    _custom_json?: any;
    fynd_item_code: string;
    price: PriceMeta;
    fragile: boolean;
    trader?: Trader1[];
    expiration_date?: string;
    trace_id?: string;
    set?: InventorySet;
    modified_by?: UserSerializer;
    is_set?: boolean;
    dimension: DimensionResponse;
    added_on_store?: string;
    country_of_origin: string;
    weight: WeightResponse;
    size: string;
    raw_meta?: any;
    created_by?: UserSerializer;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    file_path?: string;
    company_id?: number;
    modified_by?: any;
    is_active?: boolean;
    failed?: number;
    stage?: string;
    cancelled_records?: string[];
    id?: string;
    created_on?: string;
    modified_on?: string;
    succeed?: number;
    failed_records?: string[];
    total?: number;
    cancelled?: number;
    created_by?: any;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    item_dimensions_unit_of_measure?: string;
    trace_id?: string;
    quantity?: number;
    price_effective?: number;
    currency?: string;
    total_quantity?: number;
    item_weight_unit_of_measure?: string;
    seller_identifier: string;
    price?: number;
    expiration_date?: string;
    price_marked?: number;
    store_code: string;
    tags?: string[];
};
type InventoryBulkRequest = {
    batch_id: string;
    user?: any;
    company_id: number;
    sizes: InventoryJobPayload[];
};
type InventoryExportJob = {
    status?: string;
    task_id: string;
    url?: string;
    seller_id: number;
    trigger_on?: string;
    request_params?: any;
    completed_on?: string;
};
type InventoryExportRequest = {
    type?: string;
    store?: number[];
    brand?: number[];
};
type InventoryExportResponse = {
    status?: string;
    task_id: string;
    seller_id: number;
    trigger_on?: string;
    request_params?: any;
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
    trace_id?: string;
    price_effective?: number;
    total_quantity?: number;
    store_id: number;
    seller_identifier: string;
    tags?: string[];
    expiration_date?: string;
    price_marked?: number;
};
type InventoryRequestSchemaV2 = {
    company_id: number;
    meta?: any;
    payload?: InventoryPayload[];
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
type PageResponse = {
    has_previous?: boolean;
    has_next?: boolean;
    size?: number;
    item_total?: number;
    current?: string;
};
type HsnCodesObject = {
    tax2?: number;
    tax_on_mrp?: boolean;
    tax1?: number;
    company_id?: number;
    tax_on_esp?: boolean;
    hs2_code?: string;
    id?: string;
    hsn_code?: string;
    modified_on?: string;
    threshold2?: number;
    threshold1?: number;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    tax2?: number;
    tax_on_mrp: boolean;
    tax1: number;
    company_id: number;
    is_active?: boolean;
    tax_on_esp?: boolean;
    hs2_code: string;
    hsn_code: string;
    uid?: number;
    threshold2?: number;
    threshold1: number;
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
    threshold: number;
    cess?: number;
    effective_date: string;
    rate: number;
};
type HSNDataInsertV2 = {
    taxes: TaxSlab[];
    modified_by?: any;
    country_code: string;
    description: string;
    hsn_code: string;
    type: string;
    created_on?: string;
    modified_on?: string;
    reporting_hsn: string;
    created_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    discount?: string;
    departments?: string[];
    slug?: string;
    logo?: Media;
    action?: Action;
    name?: string;
    uid?: number;
    banners?: ImageUrls;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    slug?: string;
    logo?: Media;
    name?: string;
    uid?: number;
    priority_order?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    slug?: string;
    _custom_json?: any;
    action?: Action;
    childs?: any[];
    name?: string;
    uid?: number;
    banners?: ImageUrls;
};
type SecondLevelChild = {
    slug?: string;
    _custom_json?: any;
    action?: Action;
    childs?: ThirdLevelChild[];
    name?: string;
    uid?: number;
    banners?: ImageUrls;
};
type Child = {
    slug?: string;
    _custom_json?: any;
    action?: Action;
    childs?: SecondLevelChild[];
    name?: string;
    uid?: number;
    banners?: ImageUrls;
};
type CategoryItems = {
    slug?: string;
    childs?: Child[];
    action?: Action;
    name?: string;
    uid?: number;
    banners?: ImageUrls;
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
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    operators?: any;
    sort_on?: ProductSortOn[];
    page: Page;
};
type ProductDetail = {
    item_type?: string;
    name?: string;
    uid?: number;
    highlights?: string[];
    has_variant?: boolean;
    tryouts?: string[];
    teaser_tag?: any;
    brand?: ProductBrand;
    attributes?: any;
    similars?: string[];
    rating?: number;
    promo_meta?: any;
    medias?: Media1[];
    type?: string;
    short_description?: string;
    product_online_date?: string;
    item_code?: string;
    rating_count?: number;
    slug: string;
    color?: string;
    image_nature?: string;
    description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
};
type InventoryPage = {
    has_previous?: boolean;
    has_next?: boolean;
    type: string;
    item_total: number;
    next_id?: string;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
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
type GetAddressSerializer = {
    pincode?: number;
    address2?: string;
    longitude?: number;
    country?: string;
    city?: string;
    address1?: string;
    country_code?: string;
    latitude?: number;
    landmark?: string;
    state?: string;
    address_type?: string;
};
type UserSerializer1 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetCompanySerializer = {
    modified_by?: UserSerializer1;
    reject_reason?: string;
    addresses?: GetAddressSerializer[];
    company_type?: string;
    stage?: string;
    verified_on?: string;
    verified_by?: UserSerializer1;
    name?: string;
    uid?: number;
    modified_on?: string;
    created_on?: string;
    business_type?: string;
    created_by?: UserSerializer1;
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
    open: boolean;
    closing?: LocationTimingSerializer;
    opening?: LocationTimingSerializer;
    weekday: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type LocationManagerSerializer = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
};
type GetLocationSerializer = {
    gst_credentials?: InvoiceDetailsSerializer;
    address: GetAddressSerializer;
    company?: GetCompanySerializer;
    stage?: string;
    notification_emails?: string[];
    name: string;
    uid?: number;
    contact_numbers?: SellerPhoneNumber[];
    documents?: Document[];
    timing?: LocationDayWiseSerializer[];
    product_return_config?: ProductReturnConfigSerializer;
    display_name: string;
    warnings?: any;
    code: string;
    store_type?: string;
    _custom_json?: any;
    created_on?: string;
    modified_by?: UserSerializer2;
    verified_on?: string;
    verified_by?: UserSerializer2;
    modified_on?: string;
    integration_type?: LocationIntegrationType;
    manager?: LocationManagerSerializer;
    phone_number: string;
    created_by?: UserSerializer2;
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
type CompanyTaxesSerializer = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
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
    taxes?: CompanyTaxesSerializer[];
    warnings?: any;
    uid: number;
    stage?: string;
    documents?: Document[];
    modified_on?: string;
    business_info?: string;
    _custom_json?: any;
    contact_details?: ContactDetails;
    name?: string;
    franchise_enabled?: boolean;
    addresses?: GetAddressSerializer[];
    business_type: string;
    notification_emails?: string[];
    created_on?: string;
    business_details?: BusinessDetails;
    created_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    company_type: string;
    verified_on?: string;
    mode?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type CreateUpdateAddressSerializer = {
    latitude: number;
    longitude: number;
    address2?: string;
    state: string;
    country: string;
    country_code?: string;
    pincode: number;
    address_type: string;
    landmark?: string;
    city: string;
    address1: string;
};
type UpdateCompany = {
    taxes?: CompanyTaxesSerializer1[];
    notification_emails?: string[];
    warnings?: any;
    contact_details?: ContactDetails;
    name?: string;
    business_details?: BusinessDetails;
    reject_reason?: string;
    franchise_enabled?: boolean;
    addresses?: CreateUpdateAddressSerializer[];
    documents?: Document[];
    business_info?: string;
    business_type?: string;
    company_type?: string;
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
    uid?: number;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
    stage?: string;
    product?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    warnings?: any;
    logo?: string;
    banner?: BrandBannerSerializer;
    stage?: string;
    uid?: number;
    modified_on?: string;
    _custom_json?: any;
    _locale_language?: any;
    name: string;
    reject_reason?: string;
    slug_key?: string;
    synonyms?: string[];
    created_on?: string;
    created_by?: UserSerializer;
    verified_on?: string;
    mode?: string;
    verified_by?: UserSerializer;
    description?: string;
    modified_by?: UserSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    synonyms?: string[];
    uid?: number;
    _locale_language?: any;
    description?: string;
    company_id?: number;
    name: string;
    logo: string;
    banner?: BrandBannerSerializer;
    brand_tier?: string;
    _custom_json?: any;
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
    verified_on?: string;
    details?: CompanyDetails;
    stage?: string;
    verified_by?: UserSerializer;
    notification_emails?: string[];
    name?: string;
    addresses?: GetAddressSerializer[];
    created_on?: string;
    modified_by?: UserSerializer;
    market_channels?: string[];
    reject_reason?: string;
    uid?: number;
    modified_on?: string;
    created_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    company_type: string;
    _custom_json?: any;
};
type CompanyBrandSerializer = {
    verified_on?: string;
    stage?: string;
    verified_by?: UserSerializer;
    warnings?: any;
    company?: CompanySerializer;
    created_on?: string;
    modified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    reject_reason?: string;
    uid?: number;
    modified_on?: string;
    created_by?: UserSerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    company: number;
    uid?: number;
};
type LocationSerializer = {
    code: string;
    stage?: string;
    store_type?: string;
    timing?: LocationDayWiseSerializer[];
    uid?: number;
    notification_emails?: string[];
    warnings?: any;
    name: string;
    contact_numbers?: SellerPhoneNumber[];
    manager?: LocationManagerSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    company: number;
    documents?: Document[];
    address: GetAddressSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    display_name: string;
    _custom_json?: any;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type _ArticleQuery = {
    size?: string;
    item_id?: number;
    ignored_stores?: number[];
};
type _AssignStoreArticle = {
    article_assignment?: _ArticleAssignment;
    quantity?: number;
    meta?: any;
    query?: _ArticleQuery;
    group_id?: string;
};
type AssignStoreRequestValidator = {
    channel_identifier?: string;
    app_id?: string;
    articles?: _AssignStoreArticle[];
    channel_type?: string;
    pincode?: string;
    store_ids?: number[];
    company_id?: number;
};
type AssignStoreResponseSerializer = {
    store_pincode?: string;
    _id?: string;
    article_assignment?: _ArticleAssignment;
    index?: number;
    preice_effective?: number;
    quantity?: number;
    status?: boolean;
    item_id?: number;
    price_marked?: number;
    store_id?: number;
    s_city?: string;
    meta?: any;
    uid?: string;
    size?: string;
    company_id?: number;
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
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Rule = {
    discount_qty?: number;
    key?: number;
    max?: number;
    value?: number;
    min?: number;
};
type Validity = {
    priority?: number;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    subtitle?: string;
    title?: string;
    description?: string;
    remove?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type Validation = {
    app_id?: string[];
    user_registered_after?: string;
    anonymous?: boolean;
};
type CouponSchedule = {
    end?: string;
    next_schedule?: any[];
    duration?: number;
    cron?: string;
    start?: string;
};
type UsesRemaining = {
    total?: number;
    app?: number;
    user?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue;
    networks?: string[];
    iins?: string[];
    types?: string[];
};
type PriceRange = {
    max?: number;
    min?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    uses?: UsesRestriction;
    platforms?: string[];
    user_groups?: number[];
    post_order?: PostOrder;
    ordering_stores?: number[];
    coupon_allowed?: boolean;
    payments?: any;
    price_range?: PriceRange;
    bulk_bundle?: BulkBundleRestriction;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type RuleDefinition = {
    type: string;
    currency_code?: string;
    calculate_on: string;
    scope?: string[];
    applicable_on: string;
    value_type: string;
    auto_apply?: boolean;
    is_exact?: boolean;
};
type CouponAdd = {
    date_meta?: CouponDateMeta;
    type_slug: string;
    rule: Rule[];
    validity: Validity;
    tags?: string[];
    ownership: Ownership;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    state?: State;
    validation?: Validation;
    _schedule?: CouponSchedule;
    restrictions?: Restrictions;
    action?: CouponAction;
    code: string;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
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
    date_meta?: CouponDateMeta;
    type_slug: string;
    rule: Rule[];
    validity: Validity;
    tags?: string[];
    ownership: Ownership;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    state?: State;
    validation?: Validation;
    _schedule?: CouponSchedule;
    restrictions?: Restrictions;
    action?: CouponAction;
    code: string;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DiscountOffer = {
    code?: string;
    discount_percentage?: number;
    apportion_discount?: boolean;
    discount_amount?: number;
    max_offer_quantity?: number;
    discount_price?: number;
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
    max_discount_amount?: number;
    partial_can_ret?: boolean;
};
type CompareObject = {
    greater_than_equals?: number;
    greater_than?: number;
    equals?: number;
    less_than?: number;
    less_than_equals?: number;
};
type ItemCriteria = {
    item_category?: number[];
    all_items?: boolean;
    item_sku?: string[];
    item_size?: string[];
    item_exclude_store?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_id?: number[];
    item_exclude_brand?: number[];
    available_zones?: string[];
    cart_quantity?: CompareObject;
    cart_total?: CompareObject;
    item_company?: number[];
    item_brand?: number[];
    item_store?: number[];
    item_exclude_company?: number[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_category?: number[];
    buy_rules?: string[];
    item_exclude_id?: number[];
    item_exclude_sku?: string[];
};
type DiscountRule = {
    buy_condition: string;
    discount_type: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type DisplayMeta1 = {
    name?: string;
    description?: string;
    offer_text?: string;
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
    end?: string;
    start?: string;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    uses?: PaymentAllowValue1;
    codes?: string[];
};
type Restrictions1 = {
    uses: UsesRestriction1;
    platforms?: string[];
    user_registered?: UserRegistered;
    anonymous_users?: boolean;
    user_groups?: number[];
    user_id?: string[];
    post_order?: PostOrder1;
    payments?: PromotionPaymentModes[];
    order_quantity?: number;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionSchedule = {
    end?: string;
    next_schedule?: any[];
    duration?: number;
    cron?: string;
    published: boolean;
    start: string;
};
type PromotionListItem = {
    post_order_action?: PromotionAction;
    apply_all_discount?: boolean;
    calculate_on?: string;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    discount_rules: DiscountRule[];
    currency?: string;
    code?: string;
    author?: PromotionAuthor;
    mode: string;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    _custom_json?: any;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    apply_priority?: number;
    visiblility?: Visibility;
    stackable?: boolean;
    application_id: string;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    promotion_type: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    post_order_action?: PromotionAction;
    apply_all_discount?: boolean;
    calculate_on?: string;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    discount_rules: DiscountRule[];
    currency?: string;
    code?: string;
    author?: PromotionAuthor;
    mode: string;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    _custom_json?: any;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    apply_priority?: number;
    visiblility?: Visibility;
    stackable?: boolean;
    application_id: string;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    promotion_type: string;
};
type PromotionUpdate = {
    post_order_action?: PromotionAction;
    apply_all_discount?: boolean;
    calculate_on?: string;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    discount_rules: DiscountRule[];
    currency?: string;
    code?: string;
    author?: PromotionAuthor;
    mode: string;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    _custom_json?: any;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    apply_priority?: number;
    visiblility?: Visibility;
    stackable?: boolean;
    application_id: string;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    promotion_type: string;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    type?: string;
    subtitle?: string;
    entity_type?: string;
    title?: string;
    is_hidden?: boolean;
    created_on?: string;
    description?: string;
    entity_slug?: string;
    modified_on?: string;
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
type CouponBreakup = {
    uid?: string;
    type?: string;
    title?: string;
    message?: string;
    description?: string;
    minimum_cart_value?: number;
    coupon_type?: string;
    coupon_value?: number;
    is_applied?: boolean;
    sub_title?: string;
    max_discount_value?: number;
    value?: number;
    code?: string;
};
type LoyaltyPoints = {
    description?: string;
    total?: number;
    is_applied?: boolean;
    applicable?: number;
};
type DisplayBreakup = {
    currency_code?: string;
    currency_symbol?: string;
    message?: string[];
    key?: string;
    display?: string;
    value?: number;
};
type RawBreakup = {
    gst_charges?: number;
    fynd_cash?: number;
    mrp_total?: number;
    vog?: number;
    cod_charge?: number;
    convenience_fee?: number;
    delivery_charge?: number;
    discount?: number;
    you_saved?: number;
    total?: number;
    coupon?: number;
    subtotal?: number;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
    raw?: RawBreakup;
};
type ProductPrice = {
    currency_code?: string;
    currency_symbol?: string;
    marked?: number;
    selling?: number;
    add_on?: number;
    effective?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type DiscountRulesApp = {
    raw_offer?: any;
    matched_buy_rules?: string[];
    offer?: any;
    item_criteria?: any;
};
type FreeGiftItem = {
    item_price_details?: any;
    item_id?: number;
    item_name?: string;
    item_slug?: string;
    item_images_url?: string[];
    item_brand_name?: string;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    quantity?: number;
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
};
type AppliedPromotion = {
    promotion_group?: string;
    amount?: number;
    discount_rules?: DiscountRulesApp[];
    offer_text?: string;
    promotion_name?: string;
    article_quantity?: number;
    mrp_promotion?: boolean;
    applied_free_articles?: AppliedFreeArticles[];
    promo_id?: string;
    buy_rules?: BuyRules[];
    promotion_type?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    type?: string;
    query?: ActionQuery;
    url?: string;
};
type ProductImage = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    uid?: number;
    type?: string;
    brand?: BaseInfo;
    name?: string;
    action?: ProductAction;
    images?: ProductImage[];
    slug?: string;
    categories?: CategoryInfo[];
};
type PromoMeta = {
    message?: string;
};
type BasePrice = {
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
    marked?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    uid?: string;
    type?: string;
    seller?: BaseInfo;
    quantity?: number;
    size?: string;
    store?: BaseInfo;
    extra_meta?: any;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
};
type ProductAvailability = {
    out_of_stock?: boolean;
    other_store_quantity?: number;
    sizes?: string[];
    deliverable?: boolean;
    is_valid?: boolean;
};
type CartProductInfo = {
    bulk_offer?: any;
    price_per_unit?: ProductPriceInfo;
    quantity?: number;
    message?: string;
    coupon_message?: string;
    promotions_applied?: AppliedPromotion[];
    key?: string;
    identifiers: CartProductIdentifer;
    product?: CartProduct;
    promo_meta?: PromoMeta;
    article?: ProductArticle;
    discount?: string;
    is_set?: boolean;
    price?: ProductPriceInfo;
    parent_item_identifiers?: any;
    availability?: ProductAvailability;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    message?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    city?: string;
    area_code: string;
    phone?: number;
    name?: string;
    address?: string;
    country_code?: string;
    email?: string;
    state?: string;
    meta?: any;
    country?: string;
    address_type?: string;
    area_code_slug?: string;
    landmark?: string;
    pincode?: number;
    area?: string;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
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
    items?: CartProductInfo[];
    message?: string;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiOrderItem = {
    payment_methods: MultiTenderPaymentMethod[];
    quantity?: number;
    product_id: number;
    loyalty_discount?: number;
    size: string;
    meta?: CartItemMeta;
    price_marked: number;
    employee_discount?: number;
    amount_paid: number;
    discount: number;
    cashback_applied: number;
    price_effective: number;
    extra_meta?: any;
    files?: OpenApiFiles[];
    coupon_effective_discount: number;
    cod_charges: number;
    delivery_charges: number;
};
type OpenApiPlatformCheckoutReq = {
    loyalty_discount?: number;
    coupon_code: string;
    employee_discount?: any;
    affiliate_order_id?: string;
    payment_methods: MultiTenderPaymentMethod[];
    files?: OpenApiFiles[];
    billing_address: ShippingAddress;
    cod_charges: number;
    delivery_charges: number;
    currency_code?: string;
    cart_items: OpenApiOrderItem[];
    shipping_address?: ShippingAddress;
    cart_value: number;
    comment?: string;
    coupon_value: number;
    gstin?: string;
    payment_mode?: string;
    cashback_applied: number;
    order_id?: string;
    coupon?: string;
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    message?: string;
    order_id: string;
    order_ref_id?: string;
};
type AbandonedCart = {
    _id: string;
    fc_index_map?: number[];
    buy_now?: boolean;
    user_id: string;
    discount?: number;
    articles: any[];
    payment_methods?: any[];
    is_default: boolean;
    cod_charges?: any;
    expire_at: string;
    delivery_charges?: any;
    bulk_coupon_discount?: number;
    payments?: any;
    comment?: string;
    meta?: any;
    gstin?: string;
    is_archive?: boolean;
    checkout_mode?: string;
    payment_mode?: string;
    cashback: any;
    app_id?: string;
    merge_qty?: boolean;
    order_id?: string;
    pick_up_customer_details?: any;
    is_active?: boolean;
    promotion?: any;
    uid: number;
    fynd_credits?: any;
    created_on: string;
    cart_value?: number;
    shipments?: any[];
    coupon?: any;
    last_modified: string;
};
type AbandonedCartResponse = {
    items?: AbandonedCart[];
    success?: boolean;
    message?: string;
    page?: Page;
    result?: any;
};
type AddProductCart = {
    article_assignment?: any;
    item_id?: number;
    quantity?: number;
    seller_id?: number;
    item_size?: string;
    article_id?: string;
    display?: string;
    extra_meta?: any;
    store_id?: number;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    pos?: boolean;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    restrict_checkout?: boolean;
    items?: CartProductInfo[];
    id?: string;
    message?: string;
    buy_now?: boolean;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    comment?: string;
    gstin?: string;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    coupon_text?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    is_valid?: boolean;
    last_modified?: string;
};
type AddCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
    partial?: boolean;
    message?: string;
};
type UpdateProductCart = {
    quantity?: number;
    item_id?: number;
    item_index?: number;
    item_size?: string;
    article_id?: string;
    identifiers: CartProductIdentifer;
    extra_meta?: any;
    parent_item_identifiers?: any;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
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
