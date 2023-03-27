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
    order: Order;
    catalog: Catalog;
    fileStorage: FileStorage;
    share: Share;
    configuration: Configuration;
    cart: Cart;
    rewards: Rewards;
    analytics: Analytics;
    partner: Partner;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformApplicationClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, Code, PaymentCode, GetPaymentCode, GetPaymentCodeResponse, Prices, ShipmentItemFulFillingStore, UserDataInfo, ShipmentStatus, PaymentModeInfo, PlatformItem, GSTDetailsData, BagUnit, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, FulfillingStore, ShipmentStatusData, UserDetailsData, BagStateMapper, BagStatusHistory, OrderDetailsData, TrackingList, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, BagConfigs, BagGST, OrderBrandName, Identifier, FinancialBreakup, PlatformDeliveryAddress, OrderBagArticle, OrderBags, ShipmentPayments, DPDetailsData, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, BagReturnableCancelableStatus, AffiliateMeta, AffiliateBagDetails, BagGSTDetails, Dates, B2BPODetails, BagMeta, Attributes, Item, Brand, ArticleDetails, PDFLinks, DebugInfo, EInvoice, EinvoiceInfo, LockData, BuyerDetails, Formatted, ShipmentTimeStamp, ShipmentMeta, AffiliateDetails, StoreAddress, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, Store, Dimensions, Weight, ReturnConfig, Article, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, UserData, MarketPlacePdf, AffiliateBag, OrderPriority, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderInfo, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, PaymentMethod, PaymentInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, TaxInfo, ShippingInfo, BillingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, DeleteResponse, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, Price, Size, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemMeta, SuccessResponse1, MOQ, ApplicationItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionImage, CollectionBanner, CollectionBadge, CollectionSchedule, UserInfo, SeoDetail, CollectionQuery, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, SingleCategoryResponse, CategoryUpdateResponse, TeaserTag, ProductPublish, CustomOrder, NetQuantity, TaxIdentifier, Trader, ProductCreateUpdate, ProductPublished, Image, Logo, Product, ProductListingResponse, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, PriceMeta, WeightResponse, QuantityBase, Quantities, CompanyMeta, ManufacturerResponse, Trader1, ReturnConfig1, BrandMeta, DimensionResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer1, GetAddressSerializer, UserSerializer2, GetCompanySerializer, LocationTimingSerializer, LocationDayWiseSerializer, SellerPhoneNumber, LocationManagerSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, CompanyTaxesSerializer, ContactDetails, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, DisplayMetaDict, DisplayMeta, Ownership, State, CouponSchedule, PostOrder, UsesRemaining, UsesRestriction, BulkBundleRestriction, PaymentAllowValue, PaymentModes, PriceRange, Restrictions, RuleDefinition, CouponAction, Rule, CouponDateMeta, CouponAuthor, Validation, Validity, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PostOrder1, UserRegistered, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, CompareObject, ItemCriteria, Visibility, DisplayMeta1, PromotionSchedule, DiscountOffer, DiscountRule, Ownership1, PromotionAction, PromotionDateMeta, PromotionAuthor, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, DisplayBreakup, CouponBreakup, RawBreakup, LoyaltyPoints, CartBreakup, ProductAvailability, CartProductIdentifer, ProductPrice, ProductPriceInfo, PromoMeta, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, CategoryInfo, BaseInfo, ProductImage, ActionQuery, ProductAction, CartProduct, BasePrice, ArticlePriceInfo, ProductArticle, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
}
import Lead = require("./Lead/LeadPlatformApplicationClient");
import Theme = require("./Theme/ThemePlatformApplicationClient");
import User = require("./User/UserPlatformApplicationClient");
import Content = require("./Content/ContentPlatformApplicationClient");
import Communication = require("./Communication/CommunicationPlatformApplicationClient");
import Payment = require("./Payment/PaymentPlatformApplicationClient");
import Order = require("./Order/OrderPlatformApplicationClient");
import Catalog = require("./Catalog/CatalogPlatformApplicationClient");
import FileStorage = require("./FileStorage/FileStoragePlatformApplicationClient");
import Share = require("./Share/SharePlatformApplicationClient");
import Configuration = require("./Configuration/ConfigurationPlatformApplicationClient");
import Cart = require("./Cart/CartPlatformApplicationClient");
import Rewards = require("./Rewards/RewardsPlatformApplicationClient");
import Analytics = require("./Analytics/AnalyticsPlatformApplicationClient");
import Partner = require("./Partner/PartnerPlatformApplicationClient");
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
    display_fields: string[];
    app_id: string;
    excluded_fields: string[];
    created: boolean;
    success: boolean;
};
type ErrorCodeDescription = {
    description: string;
    code: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    merchant_salt: string;
    key: string;
    is_active?: boolean;
    config_type: string;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    aggregator_name?: PaymentGatewayConfig;
    is_active?: boolean;
};
type PaymentGatewayToBeReviewed = {
    aggregator: string[];
    success: boolean;
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
    large: string;
    small: string;
};
type IntentApp = {
    logos?: PaymentModeLogo;
    package_name?: string;
    outage?: any;
    display_name?: string;
    code?: string;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    compliant_with_tokenisation_guidelines?: boolean;
    card_isin?: string;
    card_id?: string;
    aggregator_name: string;
    logo_url?: PaymentModeLogo;
    timeout?: number;
    card_reference?: string;
    outage?: any;
    card_name?: string;
    code?: string;
    card_fingerprint?: string;
    exp_year?: number;
    nickname?: string;
    merchant_code?: string;
    expired?: boolean;
    card_type?: string;
    intent_app_error_list?: string[];
    display_name?: string;
    name?: string;
    display_priority?: number;
    card_number?: string;
    card_token?: string;
    intent_flow?: boolean;
    card_brand?: string;
    intent_app?: IntentApp[];
    retry_count?: number;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_brand_image?: string;
    fynd_vpa?: string;
    card_issuer?: string;
    exp_month?: number;
};
type RootPaymentMode = {
    logo?: string;
    list?: PaymentModeList[];
    anonymous_enable?: boolean;
    is_pay_by_card_pl?: boolean;
    add_card_enabled?: boolean;
    aggregator_name?: string;
    logo_url?: PaymentModeLogo;
    display_name: string;
    name: string;
    save_card?: boolean;
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
    unique_transfer_no: any;
    payouts_aggregators: any[];
    customers: any;
    is_default: boolean;
    transfer_type: string;
    is_active: boolean;
    more_attributes: any;
};
type PayoutBankDetails = {
    city?: string;
    country?: string;
    ifsc_code: string;
    account_holder?: string;
    account_no?: string;
    state?: string;
    pincode?: number;
    branch_name?: string;
    bank_name?: string;
    account_type: string;
};
type PayoutRequest = {
    unique_external_id: string;
    bank_details: PayoutBankDetails;
    transfer_type: string;
    users: any;
    is_active: boolean;
    aggregator: string;
};
type PayoutResponse = {
    unique_transfer_no: string;
    payment_status: string;
    bank_details: any;
    payouts: any;
    created: boolean;
    transfer_type: string;
    users: any;
    is_active: boolean;
    aggregator: string;
    success: boolean;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    is_active: boolean;
    success: boolean;
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
    data: any[];
    success: boolean;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    aggregator: string;
    config: any;
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
    data?: any;
    message: string;
    success: boolean;
};
type NotFoundResourceError = {
    description: string;
    code: string;
    success: boolean;
};
type BankDetailsForOTP = {
    ifsc_code: string;
    account_holder: string;
    account_no: string;
    branch_name: string;
    bank_name: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    branch_name: string;
    bank_name: string;
    success?: boolean;
};
type OrderBeneficiaryDetails = {
    account_holder: string;
    delights_user_name?: string;
    beneficiary_id: string;
    created_on: string;
    modified_on: string;
    email: string;
    comment?: string;
    address: string;
    is_active: boolean;
    mobile?: string;
    title: string;
    branch_name?: string;
    bank_name: string;
    subtitle: string;
    display_name: string;
    ifsc_code: string;
    account_no: string;
    id: number;
    transfer_mode: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    current_status?: string;
    payment_id?: string;
    extra_meta?: any;
    payment_gateway?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    name?: string;
    mode: string;
    amount: number;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    order_id: string;
    message: string;
    success: boolean;
};
type Code = {
    name: string;
    code: string;
    merchant_code: string;
};
type PaymentCode = {
    codes: Code;
    networks: string;
    name: string;
    types: string;
};
type GetPaymentCode = {
    method_code: PaymentCode;
};
type GetPaymentCodeResponse = {
    data: GetPaymentCode;
    success: boolean;
};
type Prices = {
    cashback_applied?: number;
    amount_paid?: number;
    price_effective?: number;
    discount?: number;
    refund_credit?: number;
    amount_paid_roundoff?: number;
    fynd_credits?: number;
    cashback?: number;
    value_of_good?: number;
    tax_collected_at_source?: number;
    delivery_charge?: number;
    cod_charges?: number;
    promotion_effective_discount?: number;
    price_marked?: number;
    refund_amount?: number;
    coupon_value?: number;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type UserDataInfo = {
    mobile?: string;
    avis_user_id?: string;
    email?: string;
    last_name?: string;
    first_name?: string;
    is_anonymous_user?: boolean;
    uid?: number;
    name?: string;
    gender?: string;
};
type ShipmentStatus = {
    actual_status: string;
    hex_code: string;
    title: string;
    status: string;
    ops_status: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type PlatformItem = {
    l1_category?: string[];
    size?: string;
    color?: string;
    l3_category_name?: string;
    id?: number;
    can_cancel?: boolean;
    can_return?: boolean;
    l3_category?: number;
    images?: string[];
    code?: string;
    department_id?: number;
    image?: string[];
    name?: string;
};
type GSTDetailsData = {
    brand_calculated_amount: number;
    gst_fee: number;
    value_of_good: number;
    tax_collected_at_source: number;
    gstin_code: string;
};
type BagUnit = {
    shipment_id: string;
    applied_promos?: any;
    prices?: Prices;
    parent_promo_bags?: any;
    line_number: number;
    group_id?: string;
    ordering_channel: string;
    total_shipment_bags: number;
    bag_id: number;
    can_return?: boolean;
    can_cancel?: boolean;
    status: any;
    identifier: string;
    item?: PlatformItem;
    gst?: GSTDetailsData;
    quantity: number;
};
type ShipmentItem = {
    shipment_created_at: number;
    application?: any;
    prices?: Prices;
    fulfilling_store?: ShipmentItemFulFillingStore;
    fulfilling_centre: string;
    id: string;
    created_at: string;
    sla?: any;
    total_shipments_in_order: number;
    channel?: any;
    user?: UserDataInfo;
    shipment_status?: ShipmentStatus;
    payment_mode_info?: PaymentModeInfo;
    bags?: BagUnit[];
    total_bags_count: number;
    payment_methods?: any;
};
type FilterInfoOption = {
    text: string;
    value?: string;
    name?: string;
};
type FiltersInfo = {
    text: string;
    type: string;
    options?: FilterInfoOption[];
    value: string;
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    applied_filters?: any;
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
};
type Error = {
    message?: string;
    success?: boolean;
};
type FulfillingStore = {
    address: string;
    fulfillment_channel: string;
    pincode: string;
    phone: string;
    state: string;
    store_name: string;
    id: string;
    city: string;
    country: string;
    meta: any;
    code: string;
    contact_person: string;
};
type ShipmentStatusData = {
    shipment_id?: string;
    bag_list?: number[];
    id?: number;
    created_at?: string;
    status?: string;
};
type UserDetailsData = {
    address: string;
    pincode: string;
    phone: string;
    state: string;
    city: string;
    email: string;
    country: string;
    name: string;
};
type BagStateMapper = {
    bs_id: number;
    journey_type: string;
    display_name: string;
    app_display_name?: string;
    is_active?: boolean;
    name: string;
    notify_customer?: boolean;
    app_state_name?: string;
    app_facing?: boolean;
    state_type: string;
};
type BagStatusHistory = {
    shipment_id: string;
    delivery_partner_id?: number;
    kafka_sync?: boolean;
    state_type?: string;
    updated_at?: string;
    display_name?: boolean;
    app_display_name?: boolean;
    delivery_awb_number?: string;
    created_at: string;
    state_id: number;
    bag_id: number;
    bag_state_mapper: BagStateMapper;
    reasons?: any[];
    status: string;
    forward?: boolean;
    store_id: number;
    bsh_id: number;
};
type OrderDetailsData = {
    ordering_channel_logo?: any;
    tax_details?: any;
    source?: string;
    ordering_channel?: string;
    affiliate_id?: string;
    fynd_order_id: string;
    order_value?: string;
    order_date?: string;
    cod_charges?: string;
};
type TrackingList = {
    is_passed?: boolean;
    is_current?: boolean;
    status: string;
    time?: string;
    text: string;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    item_criteria?: ItemCriterias;
    cart_conditions?: any;
};
type AppliedPromos = {
    amount?: number;
    promo_id?: string;
    discount_rules?: DiscountRules[];
    article_quantity?: number;
    promotion_type?: string;
    promotion_name?: string;
    buy_rules?: BuyRules[];
    mrp_promotion?: boolean;
};
type BagConfigs = {
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    allow_force_return: boolean;
    is_active: boolean;
};
type BagGST = {
    brand_calculated_amount?: number;
    gst_fee?: number;
    gst_tag?: string;
    gst_tax_percentage?: number;
    value_of_good?: number;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    hsn_code?: string;
};
type OrderBrandName = {
    created_on: number;
    modified_on?: number;
    id: number;
    logo: string;
    brand_name: string;
    company: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    amount_paid_roundoff?: number;
    size: string;
    fynd_credits: number;
    value_of_good: number;
    hsn_code: string;
    added_to_fynd_cash: boolean;
    cashback_applied: number;
    amount_paid: number;
    discount: number;
    gst_tag: string;
    gst_tax_percentage: number;
    pm_price_split: any;
    promotion_effective_discount: number;
    coupon_value: number;
    price_effective: number;
    total_units: number;
    refund_credit: number;
    identifiers: Identifier;
    brand_calculated_amount: number;
    gst_fee: string;
    cashback: number;
    tax_collected_at_source?: number;
    cod_charges: number;
    coupon_effective_discount: number;
    item_name: string;
    transfer_price: number;
    delivery_charge: number;
    price_marked: number;
};
type PlatformDeliveryAddress = {
    area?: string;
    state?: string;
    phone?: string;
    pincode?: string;
    updated_at?: string;
    city?: string;
    created_at?: string;
    address_type?: string;
    email?: string;
    address1?: string;
    version?: string;
    country?: string;
    address2?: string;
    landmark?: string;
    contact_person?: string;
    address_category?: string;
    latitude?: number;
    longitude?: number;
};
type OrderBagArticle = {
    identifiers?: any;
    uid?: string;
    return_config?: any;
};
type OrderBags = {
    applied_promos?: AppliedPromos[];
    line_number?: number;
    entity_type?: string;
    bag_configs?: BagConfigs;
    parent_promo_bags?: any;
    gst_details?: BagGST;
    bag_id: number;
    can_cancel?: boolean;
    seller_identifier?: string;
    item?: PlatformItem;
    quantity?: number;
    brand?: OrderBrandName;
    current_status?: string;
    display_name?: string;
    can_return?: boolean;
    financial_breakup?: FinancialBreakup[];
    delivery_address?: PlatformDeliveryAddress;
    prices?: Prices;
    identifier?: string;
    article?: OrderBagArticle;
};
type ShipmentPayments = {
    source?: string;
    logo?: string;
    mode: string;
};
type DPDetailsData = {
    track_url?: string;
    pincode?: string;
    id?: string;
    gst_tag?: string;
    awb_no?: string;
    eway_bill_id?: string;
    country?: string;
    name?: string;
};
type ShipmentInfoResponse = {
    journey_type?: string;
    fulfilling_store?: FulfillingStore;
    vertical?: string;
    replacement_details?: string;
    order_status: any;
    can_break: string;
    refund_text?: string;
    is_pdsr?: string;
    forward_order_status?: any[];
    go_green?: boolean;
    forward_tracking_list?: any[];
    status?: ShipmentStatusData;
    fyndstore_emp: any;
    delivery_details?: UserDetailsData;
    company: any;
    child_nodes?: string[];
    shipment_id: string;
    order_type: string;
    total_items?: number;
    status_progress: number;
    shipment_quantity?: number;
    secured_delivery_flag?: string;
    bag_status_history?: BagStatusHistory[];
    enable_tracking?: boolean;
    kirana_store_id?: string;
    credit_note_id: string;
    gst_details?: GSTDetailsData;
    order?: OrderDetailsData;
    user_agent?: string;
    delivery_slot?: any;
    can_cancel?: boolean;
    items: any[];
    pay_button?: string;
    tracking_list?: TrackingList[];
    pdf_links?: any;
    forward_shipment_status?: any[];
    platform_logo: boolean;
    bags?: OrderBags[];
    refund_details?: any;
    invoice: any;
    enable_dp_tracking?: string;
    beneficiary_details?: boolean;
    operational_status?: string;
    user_info?: any;
    user_id: string;
    mid?: string;
    billing_details?: UserDetailsData;
    total_bags?: number;
    can_return?: boolean;
    is_fynd_store?: string;
    shipment_images?: string[];
    picked_date?: string;
    lock_status: string;
    is_invoiced: boolean;
    custom_meta?: any[];
    payment_mode?: string;
    priority_text?: string;
    escalation?: any;
    email_id: string;
    packaging_type?: string;
    ordering_store: any;
    prices?: Prices;
    affiliate_shipment_id: string;
    coupon?: any;
    is_packaging_order: boolean;
    bank_data?: any;
    payments?: ShipmentPayments;
    tracking_url: string;
    delivery_status: any[];
    due_date?: string;
    order_created_time?: string;
    is_not_fynd_source: boolean;
    current_shipment_status: any;
    dp_details?: DPDetailsData;
    shipment_status?: string;
    is_fynd_coupon: boolean;
};
type PlatformShipment = {
    journey_type?: string;
    fulfilling_store?: FulfillingStore;
    vertical?: string;
    status?: ShipmentStatusData;
    delivery_details?: UserDetailsData;
    shipment_id: string;
    total_items?: number;
    shipment_quantity?: number;
    bag_status_history?: BagStatusHistory[];
    gst_details?: GSTDetailsData;
    order?: OrderDetailsData;
    user_agent?: string;
    delivery_slot?: any;
    tracking_list?: TrackingList[];
    pdf_links?: any;
    platform_logo?: string;
    bags?: OrderBags[];
    enable_dp_tracking?: string;
    operational_status?: string;
    billing_details?: UserDetailsData;
    total_bags?: number;
    shipment_images?: string[];
    picked_date?: string;
    custom_meta?: any[];
    payment_mode?: string;
    priority_text?: string;
    packaging_type?: string;
    prices?: Prices;
    payments?: ShipmentPayments;
    dp_details?: DPDetailsData;
    shipment_status?: string;
};
type OrderDict = {
    shipment_count: number;
    order_date: string;
    fynd_order_id: string;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    custom_meta?: any[];
    success: boolean;
    order?: OrderDict;
};
type SubLane = {
    total_items?: number;
    actions?: any[];
    value?: string;
    index?: number;
    text?: string;
};
type SuperLane = {
    text: string;
    options?: SubLane[];
    value: string;
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
    display?: string;
    name?: string;
    value?: string;
};
type PlatformOrderItems = {
    total_order_value?: number;
    user_info?: UserDataInfo;
    order_created_time?: string;
    channel?: PlatformChannel;
    order_value?: number;
    shipments?: PlatformShipment[];
    meta?: any;
    breakup_values?: PlatformBreakupValues[];
    payment_mode?: string;
    order_id?: string;
};
type OrderListingResponse = {
    page?: Page;
    total_count?: number;
    lane?: string;
    items?: PlatformOrderItems[];
    success?: boolean;
    message?: string;
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    text: string;
    options?: Options[];
    value: number;
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    updated_at?: string;
    last_location_recieved_at?: string;
    status?: string;
    reason?: string;
    raw_status?: string;
    updated_time?: string;
    meta?: any;
    awb?: string;
    shipment_type?: string;
    account_name?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type FiltersResponse = {
    advance?: any[];
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    report_name?: string;
    report_requested_at?: string;
    display_name?: string;
    request_details?: any;
    report_created_at?: string;
    s3_key?: string;
    status?: string;
    report_type?: string;
    report_id?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    article_id?: string;
    item_id?: string;
    company_id?: string;
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
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
    trace_id?: string;
    identifier?: string;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    invoice?: any;
    label?: any;
    store_code?: string;
    store_name?: string;
    invoice_status?: string;
    batch_id: string;
    company_id?: string;
    data?: any;
    do_invoice_label_generated: boolean;
    store_id?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type URL = {
    url?: string;
};
type FileResponse = {
    content_type?: string;
    size?: number;
    file_path?: string;
    upload?: FileUploadResponse;
    namespace?: string;
    cdn?: URL;
    method?: string;
    file_name?: string;
    operation?: string;
    tags?: string[];
};
type BulkListingPage = {
    has_previous?: boolean;
    size?: number;
    total?: number;
    has_next?: boolean;
    type?: string;
    current?: number;
};
type bulkListingData = {
    batch_id?: string;
    excel_url?: string;
    file_name?: string;
    status?: string;
    failed_shipments?: any[];
    store_code?: string;
    uploaded_on?: string;
    id?: string;
    failed?: number;
    processing?: number;
    store_name?: string;
    company_id?: number;
    user_id?: string;
    successful?: number;
    successful_shipments?: any[];
    store_id?: number;
    processing_shipments?: string[];
    total?: number;
    user_name?: string;
};
type BulkListingResponse = {
    page?: BulkListingPage;
    data?: bulkListingData[];
    error?: string;
    success?: boolean;
};
type ManifestPage = {
    has_previous?: boolean;
    total?: number;
    size?: string;
    has_next?: boolean;
    type?: string;
    current?: string;
};
type DateRange = {
    to_date?: string;
    from_date?: string;
};
type ManifestFilter = {
    dp_name?: string;
    sales_channels?: string;
    dp_ids?: string;
    store_name?: string;
    lane?: string;
    date_range?: DateRange;
    sales_channel_name?: string;
    stores?: string;
};
type GeneratedManifestItem = {
    manifest_id?: string;
    created_by?: string;
    created_at?: string;
    company_id?: number;
    status?: string;
    is_active?: boolean;
    filters?: ManifestFilter;
};
type GeneratedManifestResponse = {
    page?: ManifestPage;
    items?: GeneratedManifestItem[];
};
type ManifestDetailItem = {
    shipment_id?: string;
    item_qty?: number;
    invoice_id?: string;
    awb?: string;
    order_id?: string;
};
type ManifestDetailTotalShipmentPricesCount = {
    total_price?: number;
    shipment_count?: number;
};
type ManifestDetailMeta = {
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
    filters?: ManifestFilter;
};
type ManifestDetail = {
    manifest_id?: string;
    created_by?: string;
    created_at?: string;
    id?: number;
    company_id?: number;
    status?: string;
    is_active?: boolean;
    user_id?: number;
    meta?: ManifestDetailMeta;
    filters?: ManifestFilter;
    uid?: number;
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
    successful_shipment_ids?: string[];
    failed_shipments_count?: number;
    processing_shipments_count?: number;
    batch_id?: string;
    company_id?: string;
    total_shipments_count?: number;
    successful_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    failed_records?: string[];
    uploaded_on?: string;
    user_id?: string;
    data?: BulkActionDetailsDataField[];
    uploaded_by?: string;
    error?: string[];
    success?: string;
    status?: boolean;
    message?: string;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
};
type AffiliateMeta = {
    is_priority?: boolean;
    channel_order_id?: string;
    coupon_code?: string;
    loyalty_discount?: number;
    due_date?: string;
    size_level_total_qty?: number;
    box_type?: string;
    channel_shipment_id?: string;
    order_item_id?: string;
    employee_discount?: number;
    quantity?: number;
};
type AffiliateBagDetails = {
    affiliate_meta: AffiliateMeta;
    loyalty_discount?: number;
    affiliate_bag_id: string;
    affiliate_order_id: string;
    employee_discount?: number;
};
type BagGSTDetails = {
    hsn_code_id: string;
    sgst_tax_percentage: number;
    cgst_tax_percentage: number;
    brand_calculated_amount: number;
    gst_fee: number;
    igst_tax_percentage: number;
    sgst_gst_fee: string;
    gst_tag: string;
    gst_tax_percentage: number;
    value_of_good: number;
    cgst_gst_fee: string;
    tax_collected_at_source: number;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    igst_gst_fee: string;
    hsn_code: string;
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
type Attributes = {
    primary_color?: string;
    marketer_name?: string;
    essential?: string;
    primary_material?: string;
    marketer_address?: string;
    brand_name?: string;
    primary_color_hex?: string;
    name?: string;
    gender?: string[];
};
type Item = {
    l1_category?: string[];
    last_updated_at?: string;
    size: string;
    attributes: Attributes;
    department_id?: number;
    branch_url?: string;
    webstore_product_url?: string;
    name: string;
    l2_category?: string[];
    l1_category_id?: number;
    l2_category_id?: number;
    can_cancel?: boolean;
    l3_category?: number;
    meta?: any;
    item_id: number;
    gender?: string;
    brand: string;
    color?: string;
    can_return?: boolean;
    image: string[];
    brand_id: number;
    l3_category_name?: string;
    slug_key: string;
    code?: string;
};
type Brand = {
    created_on?: number;
    credit_note_expiry_days?: number;
    script_last_ran?: string;
    brand_id: number;
    modified_on?: number;
    credit_note_allowed?: boolean;
    logo?: string;
    is_virtual_invoice?: boolean;
    invoice_prefix?: string;
    brand_name: string;
    pickup_location?: string;
    start_date?: string;
    company: string;
};
type ArticleDetails = {
    status?: any;
};
type PDFLinks = {
    invoice?: string;
    label_type: string;
    po_invoice?: string;
    invoice_pos?: string;
    label?: string;
    label_a6?: string;
    label_pos?: string;
    label_a4?: string;
    credit_note_url?: string;
    invoice_a4?: string;
    invoice_type: string;
    invoice_a6?: string;
    b2b?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type EInvoice = {
    error_message?: string;
    error_code?: string;
    irn?: string;
    signed_qr_code?: string;
    signed_invoice?: string;
    acknowledge_date?: string;
    acknowledge_no?: number;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type BuyerDetails = {
    address: string;
    pincode: number;
    state: string;
    city: string;
    ajio_site_id?: string;
    gstin: string;
    name: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type ShipmentMeta = {
    debug_info?: DebugInfo;
    einvoice_info?: EinvoiceInfo;
    return_affiliate_order_id?: string;
    lock_data?: LockData;
    ewaybill_info?: any;
    store_invoice_updated_date?: string;
    order_type?: string;
    return_awb_number?: string;
    return_details?: any;
    bag_weight?: any;
    b2c_buyer_details?: any;
    box_type?: string;
    b2b_buyer_details?: BuyerDetails;
    return_store_node?: number;
    return_affiliate_shipment_id?: string;
    external?: any;
    shipment_volumetric_weight?: number;
    formatted?: Formatted;
    dp_name?: string;
    timestamp?: ShipmentTimeStamp;
    fulfilment_priority_text?: string;
    weight: number;
    po_number?: string;
    packaging_name?: string;
    shipment_weight?: number;
    auto_trigger_dp_assignment_acf: boolean;
    forward_affiliate_order_id?: string;
    dp_options?: any;
    marketplace_store_id?: string;
    same_store_available: boolean;
    awb_number?: string;
    dp_id?: string;
    due_date?: string;
    dp_sort_key?: string;
    forward_affiliate_shipment_id?: string;
    assign_dp_from_sb?: boolean;
};
type AffiliateDetails = {
    affiliate_shipment_id: string;
    affiliate_meta: AffiliateMeta;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    affiliate_bag_id: string;
    affiliate_order_id: string;
    shipment_meta: ShipmentMeta;
    ad_id?: string;
};
type StoreAddress = {
    state: string;
    address_type: string;
    address2?: string;
    address_category: string;
    pincode: number;
    phone: string;
    email?: string;
    country: string;
    country_code: string;
    contact_person: string;
    latitude: number;
    area?: string;
    updated_at: string;
    city: string;
    landmark?: string;
    longitude: number;
    created_at: string;
    address1: string;
    version?: string;
};
type Document = {
    value: string;
    ds_type: string;
    legal_name: string;
    verified: boolean;
    url?: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEinvoice = {
    password?: string;
    enabled: boolean;
    user?: string;
    username?: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
type EInvoicePortalDetails = {
    password?: string;
    user?: string;
    username?: string;
};
type StoreMeta = {
    gst_number?: string;
    ewaybill_portal_details?: any;
    display_name: string;
    stage: string;
    product_return_config?: any;
    timing?: any[];
    additional_contact_details?: any;
    documents?: StoreDocuments;
    gst_credentials: StoreGstCredentials;
    einvoice_portal_details?: EInvoicePortalDetails;
    notification_emails?: string[];
};
type Store = {
    state: string;
    brand_store_tags?: string[];
    alohomora_user_id?: number;
    address2?: string;
    packaging_material_count?: number;
    name: string;
    pincode: string;
    phone: number;
    store_address_json?: StoreAddress;
    mall_area?: string;
    country: string;
    meta: StoreMeta;
    store_active_from?: string;
    contact_person: string;
    order_integration_id?: string;
    store_email: string;
    latitude: number;
    s_id: string;
    updated_at?: string;
    city: string;
    is_archived?: boolean;
    company_id: number;
    is_active?: boolean;
    parent_store_id?: number;
    vat_no?: string;
    location_type: string;
    longitude: number;
    fulfillment_channel: string;
    brand_id?: any;
    created_at: string;
    address1: string;
    mall_name?: string;
    code?: string;
    is_enabled_for_recon?: boolean;
    login_username: string;
};
type Dimensions = {
    unit?: string;
    width?: number;
    is_default?: boolean;
    length?: number;
    height?: number;
};
type Weight = {
    unit?: string;
    shipping?: number;
    is_default?: boolean;
};
type ReturnConfig = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type Article = {
    is_set?: boolean;
    a_set?: any;
    esp_modified?: any;
    size: string;
    dimensions?: Dimensions;
    identifiers: Identifier;
    weight?: Weight;
    return_config?: ReturnConfig;
    child_details?: any;
    seller_identifier: string;
    code?: string;
    uid: string;
    raw_meta?: any;
    _id: string;
};
type BagDetailsPlatformResponse = {
    applied_promos?: any[];
    journey_type: string;
    line_number?: number;
    entity_type?: string;
    bag_status: BagStatusHistory[];
    status: BagReturnableCancelableStatus;
    affiliate_bag_details: AffiliateBagDetails;
    shipment_id?: string;
    parent_promo_bags?: any;
    current_operational_status: BagStatusHistory;
    bag_status_history?: BagStatusHistory;
    restore_promos?: any;
    bag_update_time?: number;
    gst_details: BagGSTDetails;
    restore_coupon?: boolean;
    dates?: Dates;
    seller_identifier?: string;
    meta?: BagMeta;
    order_integration_id?: string;
    item: Item;
    quantity?: number;
    brand: Brand;
    current_status: BagStatusHistory;
    operational_status?: string;
    article_details?: ArticleDetails;
    display_name?: string;
    reasons?: any[];
    financial_breakup: FinancialBreakup[];
    affiliate_details?: AffiliateDetails;
    qc_required?: any;
    ordering_store?: Store;
    prices: Prices;
    b_type?: string;
    original_bag_list?: number[];
    b_id: number;
    identifier?: string;
    article: Article;
    tags?: string[];
    no_of_bags_order?: number;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    item_total: number;
    size: number;
    page_type: string;
    has_next: boolean;
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
    message?: string;
    status?: number;
    error?: string;
    shipment_id?: string;
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
    affiliate_order_id?: string;
    fynd_order_id?: string;
    bag_id?: number;
    item_id?: string;
    affiliate_bag_id?: string;
    mongo_article_id?: string;
    affiliate_id?: string;
    reason_ids?: number[];
    store_id: number;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
    id?: string;
    affiliate_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    entity_type: string;
    entities: Entities[];
    action_type: string;
};
type Bags = {
    affiliate_order_id?: string;
    bag_id?: number;
    is_locked?: boolean;
    affiliate_bag_id?: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    affiliate_shipment_id?: string;
    bags?: Bags[];
    status?: string;
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    is_bag_locked?: boolean;
    shipment_id?: string;
    affiliate_id?: string;
    is_shipment_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    message?: string;
    check_response?: CheckResponse[];
    success?: boolean;
};
type AnnouncementResponse = {
    to_datetime?: string;
    company_id?: number;
    title?: string;
    platform_id?: string;
    platform_name?: string;
    created_at?: string;
    from_datetime?: string;
    description?: string;
    logo_url?: string;
    id: number;
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
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
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
    reason_id?: number;
    reason_text?: string;
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
type Products = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
type ShipmentsRequest = {
    reasons?: ReasonsData;
    data_updates?: DataUpdates;
    products?: Products[];
    identifier: string;
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    status?: string;
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    task?: boolean;
    force_transition?: boolean;
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    status?: number;
    final_state?: any;
    meta?: any;
    identifier?: string;
    message?: string;
    stack_trace?: string;
    code?: string;
    exception?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    address1?: string;
    last_name: string;
    mobile: number;
    phone: number;
    address2?: string;
    city: string;
    state: string;
    email: string;
    country: string;
    pincode: string;
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
    company_id: number;
    fynd_store_id: string;
    amount_paid: number;
    avl_qty: number;
    hsn_code_id: string;
    modified_on: string;
    affiliate_meta: any;
    _id: string;
    seller_identifier: string;
    transfer_price: number;
    price_marked: number;
    delivery_charge: number;
    affiliate_store_id: string;
    discount: number;
    unit_price: number;
    store_id: number;
    quantity: number;
    sku: string;
    price_effective: number;
    item_id: number;
    item_size: string;
    identifier: any;
    pdf_links?: MarketPlacePdf;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
};
type ArticleDetails1 = {
    quantity: number;
    _id: string;
    brand_id: number;
    weight: any;
    attributes: any;
    dimension: any;
    category: any;
};
type ShipmentDetails = {
    affiliate_shipment_id: string;
    fulfillment_id: number;
    dp_id?: number;
    meta?: any;
    box_type?: string;
    shipments: number;
    articles: ArticleDetails1[];
};
type LocationDetails = {
    fulfillment_type: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    payment_mode: string;
    to_pincode: string;
    journey: string;
    identifier: string;
    action: string;
    shipment: ShipmentDetails[];
    location_details?: LocationDetails;
    source: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    user: UserData;
    bags: AffiliateBag[];
    order_priority?: OrderPriority;
    payment_mode: string;
    delivery_charges: number;
    affiliate_order_id?: string;
    items: any;
    payment?: any;
    shipping_address: OrderUser;
    cod_charges: number;
    shipment?: ShipmentData;
    coupon?: string;
    discount: number;
    order_value: number;
    billing_address: OrderUser;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    updated_at: string;
    meta?: AffiliateAppConfigMeta[];
    created_at: string;
    secret: string;
    owner: string;
    description?: string;
    name: string;
    id: string;
    token: string;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    payment?: AffiliateInventoryPaymentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    id: string;
    token: string;
    config?: AffiliateConfig;
};
type OrderConfig = {
    article_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    bag_end_state?: string;
    create_user?: boolean;
    affiliate: Affiliate;
    store_lookup?: string;
};
type CreateOrderPayload = {
    order_info: OrderInfo;
    affiliate_id: string;
    order_config: OrderConfig;
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
    slug: string;
    id: number;
    display_text: string;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    ticket_url?: string;
    user: string;
    l1_detail?: string;
    ticket_id?: string;
    l2_detail?: string;
    bag_id?: number;
    message: string;
    type: string;
    createdat: string;
    l3_detail?: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    payment_mode: string;
    brand_name: string;
    phone_number: number;
    message: string;
    shipment_id: number;
    country_code: string;
    customer_name: string;
    order_id: string;
    amount_paid: number;
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
    status?: string;
    meta: Meta;
    shipment_id?: string;
    id: number;
    bag_list?: number[];
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
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
    qc_required: string;
    shipment_ids?: string[];
    dp_id: number;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type PaymentMethod = {
    meta?: any;
    mode: string;
    refund_by: string;
    transaction_data?: any;
    collect_by: string;
    name: string;
    amount: number;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type Tax = {
    name: string;
    amount: any;
    breakup: any[];
    tax_exempt: boolean;
};
type Charge = {
    tax: Tax;
    code?: string;
    type: string;
    name: string;
    amount: any;
};
type LineItem = {
    quantity?: number;
    custom_messasge?: string;
    seller_identifier: string;
    meta?: any;
    charges: Charge[];
    external_line_id?: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
    dispatch_by_date?: string;
    pack_by_date?: string;
    customer_pickup_slot?: any;
};
type Shipment = {
    priority?: number;
    external_shipment_id?: number;
    meta?: any;
    line_items: LineItem[];
    location_id: number;
    processing_dates?: ProcessingDates;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ShippingInfo = {
    primary_mobile_number: string;
    state: string;
    gender?: string;
    address_type?: string;
    pincode: string;
    alternate_mobile_number?: string;
    primary_email: string;
    slot?: any[];
    last_name?: string;
    customer_code?: string;
    address2?: string;
    country_code: string;
    middle_name?: string;
    country: string;
    external_customer_code?: string;
    state_code: string;
    title?: string;
    floor_no?: string;
    city: string;
    first_name: string;
    address1: string;
    shipping_type?: string;
    landmark?: string;
    geo_location?: any;
    alternate_email?: string;
    house_no?: string;
};
type BillingInfo = {
    primary_mobile_number: string;
    state: string;
    gender?: string;
    pincode: string;
    alternate_mobile_number?: string;
    primary_email: string;
    last_name?: string;
    customer_code?: string;
    address2?: string;
    country_code: string;
    middle_name?: string;
    country: string;
    external_customer_code?: string;
    state_code: string;
    title?: string;
    floor_no: string;
    city: string;
    first_name: string;
    address1: string;
    alternate_email?: string;
    house_no: string;
};
type CreateOrderAPI = {
    application_id?: string;
    external_order_id?: string;
    meta?: any;
    payment_info: PaymentInfo;
    shipments: Shipment[];
    charges: Charge[];
    tax_info?: TaxInfo;
    shipping_info: ShippingInfo;
    currency_info: any;
    billing_info: BillingInfo;
    external_creation_date?: string;
};
type CreateOrderErrorReponse = {
    status: number;
    meta?: string;
    info?: any;
    message: string;
    request_id?: string;
    stack_trace?: string;
    code?: string;
    exception?: string;
};
type PaymentMethods = {
    mode?: string;
    refund_by?: string;
    collect_by?: string;
};
type CreateChannelPaymentInfo = {
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
    source?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
    logo_url?: any;
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_inserted?: boolean;
    is_upserted?: boolean;
};
type UploadConsent = {
    consent_url: string;
    manifest_id: string;
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
    end_date: string;
    start_date: string;
    order_details?: FyndOrderIdList[];
};
type GetSearchWordsData = {
    _custom_json?: any;
    words?: string[];
    app_id?: string;
    is_active?: boolean;
    result?: any;
    uid?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    words?: string[];
    app_id?: string;
    is_active?: boolean;
    result: SearchKeywordResult;
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
type Media = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
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
type AutocompleteResult = {
    logo?: Media;
    _custom_json?: any;
    display?: string;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    words?: string[];
    results?: AutocompleteResult[];
    app_id?: string;
    is_active?: boolean;
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    words?: string[];
    results?: any[];
    app_id?: string;
};
type ProductBundleItem = {
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    max_quantity: number;
    min_quantity: number;
    product_uid: number;
    auto_select?: boolean;
};
type ProductBundleRequest = {
    logo?: string;
    page_visibility?: string[];
    products: ProductBundleItem[];
    meta?: any;
    slug: string;
    name: string;
    same_store_assignment?: boolean;
    choice: string;
    modified_on?: string;
    is_active: boolean;
    created_on?: string;
    modified_by?: any;
    created_by?: any;
    company_id?: number;
};
type GetProductBundleCreateResponse = {
    logo?: string;
    page_visibility?: string[];
    products: ProductBundleItem[];
    meta?: any;
    slug: string;
    name: string;
    same_store_assignment?: boolean;
    choice: string;
    modified_on?: string;
    is_active: boolean;
    created_on?: string;
    modified_by?: any;
    created_by?: any;
    id?: string;
    company_id?: number;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type Price = {
    max_effective?: number;
    currency?: string;
    max_marked?: number;
    min_effective?: number;
    min_marked?: number;
};
type Size = {
    is_available?: boolean;
    quantity?: number;
    display?: string;
    value?: string;
};
type LimitedProductData = {
    country_of_origin?: string;
    identifier?: any;
    price?: any;
    images?: string[];
    slug?: string;
    short_description?: string;
    name?: string;
    quantity?: number;
    uid?: number;
    attributes?: any;
    item_code?: string;
    sizes?: string[];
};
type GetProducts = {
    allow_remove?: boolean;
    price?: Price;
    auto_add_to_cart?: boolean;
    max_quantity?: number;
    min_quantity?: number;
    product_uid?: number;
    auto_select?: boolean;
    sizes?: Size[];
    product_details?: LimitedProductData;
};
type GetProductBundleResponse = {
    logo?: string;
    page_visibility?: string[];
    products?: GetProducts[];
    meta?: any;
    slug?: string;
    name?: string;
    same_store_assignment?: boolean;
    choice?: string;
    is_active?: boolean;
    company_id?: number;
};
type ProductBundleUpdateRequest = {
    logo?: string;
    page_visibility?: string[];
    products: ProductBundleItem[];
    meta?: any;
    slug: string;
    name: string;
    same_store_assignment?: boolean;
    choice: string;
    modified_on?: string;
    is_active: boolean;
    modified_by?: any;
    company_id?: number;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    tag?: string;
    name: string;
    brand_id?: number;
    guide?: Guide;
    modified_on?: string;
    description?: string;
    active?: boolean;
    title: string;
    created_on?: string;
    modified_by?: any;
    created_by?: any;
    id?: string;
    company_id?: number;
    image?: string;
    subtitle?: string;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type SizeGuideResponse = {
    tag?: string;
    brand_id?: number;
    name?: string;
    guide?: any;
    modified_by?: any;
    active?: boolean;
    title?: string;
    created_on?: string;
    modified_on?: string;
    created_by?: any;
    id?: string;
    company_id?: number;
    subtitle?: string;
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
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type ApplicationItemResponse = {
    seo?: SEO;
    alt_text?: any;
    moq?: MOQ;
};
type GetConfigMetadataResponse = {
    values?: any[];
    data: any[];
    condition?: any[];
};
type AttributeDetailsGroup = {
    logo?: string;
    unit?: string;
    slug?: string;
    name: string;
    priority: number;
    display_type: string;
    is_active: boolean;
    key?: string;
};
type AppConfigurationDetail = {
    logo?: string;
    slug: string;
    name?: string;
    priority: number;
    app_id: string;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    is_default: boolean;
    template_slugs?: string[];
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
    data: any[];
    page: PageResponseType;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    logo?: string;
    default_key: string;
    name?: string;
    priority: number;
    app_id: string;
    is_active: boolean;
    key: string;
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
    filter_types?: string[];
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
    similar?: any;
    variant?: any;
    compare?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationBucketPoints = {
    display?: string;
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    sort?: string;
    value?: string;
    map?: any;
    map_values?: any[];
};
type ConfigurationListingFilterConfig = {
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    name?: string;
    priority: number;
    is_active: boolean;
    display_name?: string;
    type: string;
    key: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    logo?: string;
    name?: string;
    priority: number;
    is_active: boolean;
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
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    logo?: string;
    priority: number;
    is_active: boolean;
    size?: ProductSize;
    title?: string;
    key: string;
    subtitle?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    logo?: string;
    name: string;
    priority: number;
    display_type: string;
    is_active: boolean;
    size: ProductSize;
    key: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    config_type: string;
    modified_on?: string;
    app_id: string;
    modified_by?: any;
    created_on?: string;
    type?: string;
    product?: ConfigurationProduct;
    created_by?: any;
    config_id?: string;
};
type AppCatalogConfiguration = {
    listing?: ConfigurationListing;
    config_type: string;
    modified_on?: string;
    app_id: string;
    modified_by?: any;
    created_on?: string;
    type?: string;
    product?: ConfigurationProduct;
    created_by?: any;
    id?: string;
    config_id?: string;
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
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
    app_id: string;
    product?: GetCatalogConfigurationDetailsProduct;
    id?: string;
    config_id?: string;
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
    logo?: string;
    operators?: string[];
    name: string;
    kind?: string;
    display: string;
};
type ProductFiltersValue = {
    count?: number;
    currency_symbol?: string;
    selected_max?: number;
    currency_code?: string;
    value: any;
    min?: number;
    is_selected: boolean;
    selected_min?: number;
    display_format?: string;
    query_format?: string;
    max?: number;
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
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionSchedule = {
    duration?: number;
    cron?: string;
    next_schedule?: NextSchedule[];
    start?: string;
    end?: string;
};
type UserInfo = {
    username?: string;
    user_id?: string;
    uid?: string;
    email?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type CreateCollection = {
    logo: CollectionImage;
    meta?: any;
    visible_facets_keys?: string[];
    priority?: number;
    banners: CollectionBanner;
    is_active?: boolean;
    slug: string;
    sort_on?: string;
    published?: boolean;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    name: string;
    allow_facets?: boolean;
    _schedule?: CollectionSchedule;
    app_id: string;
    type: string;
    modified_by?: UserInfo;
    tags?: string[];
    _locale_language?: any;
    _custom_json?: any;
    is_visible?: boolean;
    description?: string;
    seo?: SeoDetail;
    query?: CollectionQuery[];
    created_by?: UserInfo;
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
    logo?: BannerImage;
    meta?: any;
    visible_facets_keys?: string[];
    priority?: number;
    is_active?: boolean;
    banners?: ImageUrls;
    tag?: string[];
    slug?: string;
    sort_on?: string;
    allow_sort?: boolean;
    badge?: any;
    name?: string;
    allow_facets?: boolean;
    _schedule?: any;
    app_id?: string;
    type?: string;
    cron?: any;
    description?: string;
    query?: CollectionQuery[];
};
type CollectionListingFilterTag = {
    is_selected?: boolean;
    name?: string;
    display?: string;
};
type CollectionListingFilterType = {
    is_selected?: boolean;
    name?: string;
    display?: string;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type Media1 = {
    url: string;
    meta?: any;
    type?: string;
};
type GetCollectionDetailNest = {
    logo?: Media1;
    meta?: any;
    visible_facets_keys?: string[];
    priority?: number;
    is_active?: boolean;
    banners?: ImageUrls;
    action?: Action;
    tag?: string[];
    slug?: string;
    allow_sort?: boolean;
    badge?: any;
    name?: string;
    allow_facets?: boolean;
    _schedule?: any;
    app_id?: string;
    type?: string;
    cron?: any;
    description?: string;
    uid?: string;
    query?: CollectionQuery[];
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    page?: Page;
    items?: GetCollectionDetailNest[];
};
type CollectionDetailResponse = {
    logo?: Media1;
    tag?: string[];
    allow_sort?: boolean;
    cron?: any;
    meta?: any;
    badge?: any;
    slug?: string;
    name?: string;
    allow_facets?: boolean;
    priority?: number;
    app_id?: string;
    is_active?: boolean;
    banners?: ImageUrls;
    description?: string;
    visible_facets_keys?: string[];
    _schedule?: any;
    type?: string;
    query?: CollectionQuery[];
};
type UpdateCollection = {
    logo?: CollectionImage;
    meta?: any;
    visible_facets_keys?: string[];
    priority?: number;
    banners?: CollectionBanner;
    is_active?: boolean;
    slug?: string;
    sort_on?: string;
    published?: boolean;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    name?: string;
    _schedule?: CollectionSchedule;
    allow_facets?: boolean;
    type?: string;
    modified_by?: UserInfo;
    tags?: string[];
    _locale_language?: any;
    _custom_json?: any;
    is_visible?: boolean;
    description?: string;
    seo?: SeoDetail;
    query?: CollectionQuery[];
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
    items_not_updated?: number[];
    message?: string;
};
type Price1 = {
    max?: number;
    min?: number;
    currency_code?: string;
    currency_symbol?: string;
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
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductBrand = {
    logo?: Media1;
    name?: string;
    uid?: number;
    action?: Action;
};
type ProductListingDetail = {
    price?: ProductListingPrice;
    teaser_tag?: any;
    has_variant?: boolean;
    discount?: string;
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    sellable?: boolean;
    slug: string;
    similars?: string[];
    name?: string;
    short_description?: string;
    item_type?: string;
    tryouts?: string[];
    type?: string;
    attributes?: any;
    rating_count?: number;
    image_nature?: string;
    highlights?: string[];
    rating?: number;
    medias?: Media1[];
    promo_meta?: any;
    description?: string;
    product_online_date?: string;
    uid?: number;
    brand?: ProductBrand;
    item_code?: string;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page?: Page;
    filters?: ProductFilters[];
};
type CatalogInsightItem = {
    count?: number;
    sellable_count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightBrand = {
    available_articles?: number;
    name?: string;
    available_sizes?: number;
    total_articles?: number;
    total_sizes?: number;
    article_freshness?: number;
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
    brand_ids?: number[];
    enabled?: boolean;
    opt_level: string;
    store_ids?: number[];
    platform?: string;
    company_id?: number;
};
type CompanyOptIn = {
    brand_ids: number[];
    enabled: boolean;
    modified_on: number;
    modified_by?: any;
    opt_level: string;
    created_on: number;
    store_ids: number[];
    platform: string;
    created_by?: any;
    company_id: number;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    company_type?: string;
    name?: string;
    business_type?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    brand_name?: string;
    brand_id?: number;
    company_id?: number;
    total_article?: number;
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
    name?: string;
    store_type?: string;
    documents?: any[];
    store_code?: string;
    timing?: any;
    display_name?: string;
    address?: any;
    created_on?: string;
    uid?: number;
    modified_on?: string;
    manager?: any;
    additional_contacts?: any[];
    company_id?: number;
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
type AttributeMasterFilter = {
    priority?: number;
    indexing: boolean;
    depends_on?: string[];
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    allowed_values?: string[];
    range?: AttributeSchemaRange;
    format?: string;
    multi?: boolean;
    mandatory?: boolean;
    type: string;
};
type GenderDetail = {
    logo?: string;
    meta?: AttributeMasterMeta;
    filters?: AttributeMasterFilter;
    slug?: string;
    name?: string;
    is_nested?: boolean;
    description?: string;
    details?: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    id?: string;
    departments?: string[];
    schema?: AttributeMaster;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    status?: number;
    meta?: any;
    code?: string;
    errors?: any;
    message?: string;
};
type DepartmentCreateUpdate = {
    logo: string;
    _custom_json?: any;
    _cls?: string;
    slug?: string;
    name: string;
    is_active?: boolean;
    synonyms?: string[];
    priority_order: number;
    uid?: number;
    tags?: string[];
    platforms?: any;
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
    user_id?: string;
    uid?: string;
    _id?: string;
    contact?: string;
};
type GetDepartment = {
    logo?: string;
    slug?: string;
    name?: string;
    modified_on?: string;
    modified_by?: UserSerializer;
    is_active?: boolean;
    item_type?: string;
    synonyms?: string[];
    priority_order?: number;
    uid?: number;
    search?: string;
    created_on?: string;
    page_no?: number;
    created_by?: UserSerializer;
    page_size?: number;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    status?: number;
    meta?: any;
    code?: string;
    errors?: any;
    message?: string;
};
type UserDetail = {
    username: string;
    super_user?: boolean;
    user_id: string;
    contact?: string;
};
type DepartmentModel = {
    logo: string;
    _custom_json?: any;
    _cls?: any;
    slug?: any;
    name: any;
    modified_by?: UserDetail;
    verified_by?: UserDetail;
    verified_on?: string;
    is_active?: boolean;
    synonyms?: any[];
    created_on: string;
    uid?: number;
    modified_on: string;
    priority_order: number;
    created_by?: UserDetail;
    _id?: any;
};
type ProductTemplate = {
    categories?: string[];
    tag?: string;
    logo?: string;
    is_physical: boolean;
    slug: string;
    is_archived?: boolean;
    name?: string;
    modified_on?: string;
    is_active?: boolean;
    description?: string;
    created_on?: string;
    modified_by?: any;
    attributes?: string[];
    created_by?: any;
    departments?: string[];
    is_expirable: boolean;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    teaser_tag?: any;
    currency?: any;
    is_active?: any;
    trader_type?: any;
    multi_size?: any;
    command?: any;
    sizes?: any;
    slug?: any;
    no_of_boxes?: any;
    product_publish?: any;
    custom_order?: any;
    is_dependent?: any;
    category_slug?: any;
    name?: any;
    short_description?: any;
    item_type?: any;
    variants?: any;
    tags?: any;
    country_of_origin?: any;
    brand_uid?: any;
    highlights?: any;
    size_guide?: any;
    media?: any;
    trader?: any;
    product_group_tag?: any;
    description?: any;
    hsn_code?: any;
    return_config?: any;
    item_code?: any;
};
type GlobalValidation = {
    properties?: Properties;
    description?: string;
    required?: string[];
    definitions?: any;
    title?: string;
    type?: string;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    categories?: string[];
    tag?: string;
    logo?: string;
    is_physical: boolean;
    slug: string;
    is_archived?: boolean;
    name?: string;
    is_active?: boolean;
    description?: string;
    id?: string;
    attributes?: string[];
    departments?: string[];
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
    status?: string;
    template_tags?: any;
    data?: ProductDownloadItemsData;
    completed_on?: string;
    seller_id?: number;
    id?: string;
    created_by?: VerifiedBy;
    trigger_on?: string;
    url?: string;
    task_id?: string;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type Media2 = {
    logo: string;
    landscape: string;
    portrait: string;
};
type Hierarchy = {
    l2: number;
    l1: number;
    department: number;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type CategoryRequestBody = {
    slug?: string;
    name: string;
    media?: Media2;
    priority?: number;
    is_active: boolean;
    level: number;
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    synonyms?: string[];
    departments: number[];
    marketplaces?: CategoryMapping;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    slug?: string;
    name: string;
    media?: Media2;
    priority?: number;
    is_active: boolean;
    level: number;
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    synonyms?: string[];
    modified_on?: string;
    created_on?: string;
    uid?: number;
    modified_by?: any;
    id?: string;
    created_by?: any;
    departments: number[];
    marketplaces?: CategoryMapping;
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
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    reporting_hsn?: string;
    hsn_code?: string;
};
type Trader = {
    name?: string;
    type?: string;
    address?: string[];
};
type ProductCreateUpdate = {
    teaser_tag?: TeaserTag;
    currency: string;
    is_active?: boolean;
    multi_size?: boolean;
    action?: string;
    change_request_id?: any;
    slug: string;
    no_of_boxes?: number;
    product_publish?: ProductPublish;
    variant_media?: any;
    custom_order?: CustomOrder;
    is_dependent?: boolean;
    bulk_job_id?: string;
    category_slug: string;
    name: string;
    short_description?: string;
    is_image_less_product?: boolean;
    item_type: string;
    net_quantity?: NetQuantity;
    variants?: any;
    tags?: string[];
    company_id: number;
    requester?: string;
    _custom_json?: any;
    brand_uid: number;
    country_of_origin: string;
    highlights?: string[];
    template_tag: string;
    is_set?: boolean;
    tax_identifier: TaxIdentifier;
    media?: Media1[];
    trader: Trader[];
    product_group_tag?: string[];
    size_guide?: string;
    description?: string;
    uid?: number;
    return_config: ReturnConfig;
    departments: number[];
    item_code: any;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Image = {
    secure_url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
};
type Logo = {
    secure_url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
};
type Product = {
    currency?: string;
    is_active?: boolean;
    multi_size?: boolean;
    category_uid?: number;
    sizes?: any[];
    color?: string;
    slug?: string;
    product_publish?: ProductPublished;
    id?: string;
    custom_order?: any;
    is_dependent?: boolean;
    category_slug?: string;
    name?: string;
    short_description?: string;
    all_sizes?: any[];
    item_type?: string;
    primary_color?: string;
    variants?: any;
    _custom_json?: any;
    image_nature?: string;
    country_of_origin?: string;
    brand_uid?: number;
    is_physical?: boolean;
    l3_mapping?: string[];
    images?: Image[];
    highlights?: string[];
    template_tag?: string;
    is_set?: boolean;
    tax_identifier?: any;
    media?: Media1[];
    size_guide?: string;
    description?: string;
    hsn_code?: string;
    uid?: number;
    brand?: Brand;
    departments?: number[];
    is_expirable?: boolean;
    item_code?: string;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type AttributeMasterSerializer = {
    logo?: string;
    unit?: string;
    is_nested?: boolean;
    details: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    slug: string;
    created_on?: string;
    modified_on?: string;
    filters: AttributeMasterFilter;
    name?: string;
    synonyms?: any;
    raw_key?: string;
    modified_by?: any;
    tags?: string[];
    schema: AttributeMaster;
    description?: string;
    variant?: boolean;
    suggestion?: string;
    created_by?: any;
    departments: string[];
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
    uid?: string;
    email?: string;
};
type BulkJob = {
    total: number;
    tracking_url?: string;
    file_path?: string;
    succeed?: number;
    failed_records?: any[];
    stage?: string;
    template_tag?: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    failed?: number;
    created_on: string;
    cancelled_records?: any[];
    modified_on?: string;
    created_by?: UserInfo1;
    company_id: number;
    cancelled?: number;
    custom_template_tag?: string;
};
type BulkResponse = {
    modified_by?: UserInfo1;
    is_active?: boolean;
    created_on: string;
    modified_on?: string;
    created_by?: UserInfo1;
    batch_id: string;
};
type UserDetail1 = {
    username?: string;
    user_id?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    total?: number;
    file_path?: string;
    stage?: string;
    failed_records?: string[];
    succeed?: number;
    template_tag?: string;
    modified_by?: UserDetail1;
    is_active?: boolean;
    template?: ProductTemplate;
    failed?: number;
    created_on?: string;
    cancelled_records?: string[];
    modified_on?: string;
    created_by?: UserDetail1;
    company_id?: number;
    cancelled?: number;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkProductRequest = {
    data: any[];
    template_tag: string;
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
    user: any;
    url: string;
    company_id?: number;
};
type UserCommon = {
    username?: string;
    company_id?: number;
    user_id?: string;
};
type Items = {
    total?: number;
    tracking_url?: string;
    succeed?: number;
    failed_records?: string[];
    stage?: string;
    retry?: number;
    modified_on?: string;
    modified_by?: UserCommon;
    is_active?: boolean;
    failed?: number;
    created_on?: string;
    cancelled_records?: string[];
    file_path?: string;
    created_by?: UserCommon;
    id?: string;
    company_id?: number;
    cancelled?: number;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductSizeDeleteDataResponse = {
    size?: string;
    item_id?: number;
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
type GTIN = {
    gtin_type: string;
    gtin_value: string;
    primary?: boolean;
};
type InvSize = {
    item_weight?: number;
    item_weight_unit_of_measure?: string;
    price?: number;
    set?: InventorySet;
    item_width?: number;
    item_length?: number;
    item_height?: number;
    is_set?: boolean;
    currency: string;
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    size: string;
    quantity: number;
    store_code: string;
    price_effective: number;
    price_transfer?: number;
    identifiers: GTIN[];
};
type InventoryRequest = {
    item: ItemQuery;
    company_id: number;
    sizes: InvSize[];
};
type InventoryResponse = {
    sellable_quantity?: number;
    store?: any;
    seller_identifier?: string;
    price?: number;
    inventory_updated_on?: string;
    currency?: string;
    size?: string;
    quantity?: number;
    price_effective?: number;
    uid?: string;
    item_id?: number;
    price_transfer?: number;
    identifiers?: any;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type PriceMeta = {
    transfer: number;
    updated_at?: string;
    currency: string;
    marked: number;
    effective: number;
    tp_notes?: any;
};
type WeightResponse = {
    is_default: boolean;
    unit: string;
    shipping: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    order_committed?: QuantityBase;
    damaged?: QuantityBase;
    sellable?: QuantityBase;
    not_available?: QuantityBase;
};
type CompanyMeta = {
    id: number;
};
type ManufacturerResponse = {
    is_default: boolean;
    name: string;
    address: string;
};
type Trader1 = {
    name: string;
    type: string;
    address: string[];
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type BrandMeta = {
    name: string;
    id: number;
};
type DimensionResponse = {
    height: number;
    unit: string;
    length: number;
    width: number;
    is_default: boolean;
};
type InventorySellerResponse = {
    seller_identifier: string;
    meta?: any;
    set?: InventorySet;
    price: PriceMeta;
    weight: WeightResponse;
    is_active?: boolean;
    fynd_meta?: any;
    item_id: number;
    track_inventory?: boolean;
    fynd_item_code: string;
    quantities?: Quantities;
    fragile: boolean;
    total_quantity: number;
    store: StoreMeta;
    company: CompanyMeta;
    raw_meta?: any;
    expiration_date?: string;
    modified_by?: UserSerializer;
    tags?: string[];
    fynd_article_code: string;
    _custom_json?: any;
    country_of_origin: string;
    identifier: any;
    added_on_store?: string;
    stage?: string;
    tax_identifier?: any;
    is_set?: boolean;
    manufacturer: ManufacturerResponse;
    trader?: Trader1[];
    size: string;
    uid: string;
    return_config?: ReturnConfig1;
    brand: BrandMeta;
    created_by?: UserSerializer;
    trace_id?: string;
    dimension: DimensionResponse;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    total?: number;
    file_path?: string;
    failed_records?: string[];
    stage?: string;
    succeed?: number;
    modified_on?: string;
    modified_by?: any;
    is_active?: boolean;
    failed?: number;
    created_on?: string;
    cancelled_records?: string[];
    cancelled?: number;
    created_by?: any;
    id?: string;
    company_id?: number;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    seller_identifier: string;
    item_weight_unit_of_measure?: string;
    price?: number;
    currency?: string;
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    store_code: string;
    quantity?: number;
    price_effective?: number;
    tags?: string[];
    trace_id?: string;
    price_marked?: number;
    total_quantity?: number;
};
type InventoryBulkRequest = {
    user?: any;
    company_id: number;
    sizes: InventoryJobPayload[];
    batch_id: string;
};
type InventoryExportRequest = {
    brand?: number[];
    type?: string;
    store?: number[];
};
type InventoryExportResponse = {
    status?: string;
    request_params?: any;
    seller_id: number;
    trigger_on?: string;
    task_id: string;
};
type InventoryExportJob = {
    status?: string;
    request_params?: any;
    seller_id: number;
    completed_on?: string;
    trigger_on?: string;
    url?: string;
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
    seller_identifier: string;
    expiration_date?: string;
    price_effective?: number;
    tags?: string[];
    trace_id?: string;
    price_marked?: number;
    store_id: number;
    total_quantity?: number;
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
type HsnUpsert = {
    tax1: number;
    tax2?: number;
    threshold1: number;
    is_active?: boolean;
    hsn_code: string;
    uid?: number;
    tax_on_mrp: boolean;
    tax_on_esp?: boolean;
    company_id: number;
    hs2_code: string;
    threshold2?: number;
};
type HsnCodesObject = {
    tax1?: number;
    tax2?: number;
    threshold1?: number;
    modified_on?: string;
    hsn_code?: string;
    id?: string;
    tax_on_mrp?: boolean;
    tax_on_esp?: boolean;
    company_id?: number;
    hs2_code?: string;
    threshold2?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    has_previous?: boolean;
    size?: number;
    current?: string;
    has_next?: boolean;
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
    threshold: number;
    cess?: number;
    rate: number;
};
type HSNDataInsertV2 = {
    country_code: string;
    modified_on?: string;
    reporting_hsn: string;
    description: string;
    hsn_code: string;
    taxes: TaxSlab[];
    type: string;
    modified_by?: any;
    created_on?: string;
    created_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    logo?: Media;
    slug?: string;
    name?: string;
    banners?: ImageUrls;
    uid?: number;
    action?: Action;
    departments?: string[];
    discount?: string;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    logo?: Media;
    slug?: string;
    name?: string;
    priority_order?: number;
    uid?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    _custom_json?: any;
    slug?: string;
    name?: string;
    banners?: ImageUrls;
    childs?: any[];
    uid?: number;
    action?: Action;
};
type SecondLevelChild = {
    _custom_json?: any;
    slug?: string;
    name?: string;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
    uid?: number;
    action?: Action;
};
type Child = {
    _custom_json?: any;
    slug?: string;
    name?: string;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
    uid?: number;
    action?: Action;
};
type CategoryItems = {
    slug?: string;
    name?: string;
    banners?: ImageUrls;
    childs?: Child[];
    uid?: number;
    action?: Action;
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
    sort_on?: ProductSortOn[];
    page: Page;
    items?: ProductListingDetail[];
};
type ProductDetail = {
    teaser_tag?: any;
    has_variant?: boolean;
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    slug: string;
    similars?: string[];
    name?: string;
    short_description?: string;
    item_type?: string;
    tryouts?: string[];
    type?: string;
    attributes?: any;
    rating_count?: number;
    image_nature?: string;
    highlights?: string[];
    rating?: number;
    medias?: Media1[];
    promo_meta?: any;
    description?: string;
    product_online_date?: string;
    uid?: number;
    brand?: ProductBrand;
    item_code?: string;
};
type InventoryPage = {
    has_previous?: boolean;
    next_id?: string;
    has_next?: boolean;
    type: string;
    item_total: number;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
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
type UserSerializer1 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetAddressSerializer = {
    landmark?: string;
    address_type?: string;
    country_code?: string;
    city?: string;
    address1?: string;
    state?: string;
    longitude?: number;
    address2?: string;
    latitude?: number;
    country?: string;
    pincode?: number;
};
type UserSerializer2 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetCompanySerializer = {
    addresses?: GetAddressSerializer[];
    business_type?: string;
    stage?: string;
    name?: string;
    modified_by?: UserSerializer2;
    verified_by?: UserSerializer2;
    verified_on?: string;
    company_type?: string;
    reject_reason?: string;
    created_on?: string;
    uid?: number;
    modified_on?: string;
    created_by?: UserSerializer2;
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
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    name?: string;
    mobile_no: SellerPhoneNumber;
    email?: string;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type GetLocationSerializer = {
    product_return_config?: ProductReturnConfigSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    documents?: Document[];
    verified_by?: UserSerializer1;
    verified_on?: string;
    phone_number: string;
    created_on?: string;
    address: GetAddressSerializer;
    modified_on?: string;
    company?: GetCompanySerializer;
    name: string;
    store_type?: string;
    timing?: LocationDayWiseSerializer[];
    modified_by?: UserSerializer1;
    _custom_json?: any;
    notification_emails?: string[];
    contact_numbers?: SellerPhoneNumber[];
    stage?: string;
    code: string;
    display_name: string;
    manager?: LocationManagerSerializer;
    uid?: number;
    integration_type?: LocationIntegrationType;
    warnings?: any;
    created_by?: UserSerializer1;
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
type CompanyTaxesSerializer = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type GetCompanyProfileSerializerResponse = {
    verified_on?: string;
    documents?: Document[];
    notification_emails?: string[];
    business_info?: string;
    uid: number;
    franchise_enabled?: boolean;
    name?: string;
    company_type: string;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    business_details?: BusinessDetails;
    warnings?: any;
    modified_by?: UserSerializer;
    modified_on?: string;
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    mode?: string;
    business_country_info?: BusinessCountryInfo;
    created_on?: string;
    taxes?: CompanyTaxesSerializer[];
    contact_details?: ContactDetails;
    business_type: string;
    stage?: string;
};
type CreateUpdateAddressSerializer = {
    city: string;
    address1: string;
    address2?: string;
    country: string;
    state: string;
    landmark?: string;
    country_code?: string;
    address_type: string;
    longitude: number;
    latitude: number;
    pincode: number;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type UpdateCompany = {
    name?: string;
    documents?: Document[];
    _custom_json?: any;
    reject_reason?: string;
    addresses?: CreateUpdateAddressSerializer[];
    company_type?: string;
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer1[];
    business_info?: string;
    contact_details?: ContactDetails;
    business_details?: BusinessDetails;
    business_type?: string;
    warnings?: any;
    franchise_enabled?: boolean;
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
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
    brand?: DocumentsObj;
    store?: DocumentsObj;
    uid?: number;
    product?: DocumentsObj;
    stage?: string;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    verified_on?: string;
    _locale_language?: any;
    uid?: number;
    name: string;
    created_by?: UserSerializer;
    slug_key?: string;
    verified_by?: UserSerializer;
    warnings?: any;
    modified_by?: UserSerializer;
    modified_on?: string;
    description?: string;
    _custom_json?: any;
    mode?: string;
    banner?: BrandBannerSerializer;
    reject_reason?: string;
    created_on?: string;
    logo?: string;
    synonyms?: string[];
    stage?: string;
};
type CreateUpdateBrandRequestSerializer = {
    name: string;
    company_id?: number;
    _custom_json?: any;
    description?: string;
    brand_tier?: string;
    logo: string;
    synonyms?: string[];
    _locale_language?: any;
    uid?: number;
    banner?: BrandBannerSerializer;
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
    name?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    verified_on?: string;
    _custom_json?: any;
    reject_reason?: string;
    created_on?: string;
    stage?: string;
    addresses?: GetAddressSerializer[];
    business_country_info?: BusinessCountryInfo;
    company_type: string;
    created_by?: UserSerializer;
    market_channels?: string[];
    notification_emails?: string[];
    details?: CompanyDetails;
    verified_by?: UserSerializer;
    business_type: string;
    uid?: number;
};
type CompanyBrandSerializer = {
    modified_by?: UserSerializer;
    modified_on?: string;
    verified_on?: string;
    reject_reason?: string;
    created_on?: string;
    stage?: string;
    brand?: GetBrandResponseSerializer;
    created_by?: UserSerializer;
    warnings?: any;
    verified_by?: UserSerializer;
    uid?: number;
    company?: CompanySerializer;
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
type HolidayDateSerializer = {
    start_date: string;
    end_date: string;
};
type HolidaySchemaSerializer = {
    date: HolidayDateSerializer;
    title: string;
    holiday_type: string;
};
type AddressSerializer = {
    city?: string;
    address1?: string;
    address2?: string;
    country?: string;
    state?: string;
    landmark?: string;
    country_code?: string;
    address_type?: string;
    longitude: number;
    latitude: number;
    pincode?: number;
};
type LocationSerializer = {
    name: string;
    gst_credentials?: InvoiceDetailsSerializer;
    documents?: Document[];
    holiday?: HolidaySchemaSerializer[];
    store_type?: string;
    stage?: string;
    _custom_json?: any;
    product_return_config?: ProductReturnConfigSerializer;
    timing?: LocationDayWiseSerializer[];
    notification_emails?: string[];
    uid?: number;
    warnings?: any;
    address: AddressSerializer;
    manager?: LocationManagerSerializer;
    code: string;
    contact_numbers?: SellerPhoneNumber[];
    display_name: string;
    company: number;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
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
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    remove?: DisplayMetaDict;
    subtitle?: string;
    apply?: DisplayMetaDict;
    title?: string;
    description?: string;
    auto?: DisplayMetaDict;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type CouponSchedule = {
    start?: string;
    end?: string;
    cron?: string;
    next_schedule?: any[];
    duration?: number;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
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
type PriceRange = {
    max?: number;
    min?: number;
};
type Restrictions = {
    post_order?: PostOrder;
    uses?: UsesRestriction;
    bulk_bundle?: BulkBundleRestriction;
    payments?: any;
    user_groups?: number[];
    platforms?: string[];
    coupon_allowed?: boolean;
    price_range?: PriceRange;
    ordering_stores?: number[];
};
type RuleDefinition = {
    calculate_on: string;
    type: string;
    applicable_on: string;
    value_type: string;
    is_exact?: boolean;
    scope?: string[];
    auto_apply?: boolean;
    currency_code?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Rule = {
    discount_qty?: number;
    key?: number;
    value?: number;
    max?: number;
    min?: number;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Validation = {
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: string[];
};
type Validity = {
    priority?: number;
};
type CouponAdd = {
    display_meta: DisplayMeta;
    ownership: Ownership;
    code: string;
    state?: State;
    _schedule?: CouponSchedule;
    tags?: string[];
    restrictions?: Restrictions;
    rule_definition: RuleDefinition;
    action?: CouponAction;
    rule: Rule[];
    type_slug: string;
    date_meta?: CouponDateMeta;
    author?: CouponAuthor;
    identifiers: Identifier;
    validation?: Validation;
    validity: Validity;
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
    display_meta: DisplayMeta;
    ownership: Ownership;
    code: string;
    state?: State;
    _schedule?: CouponSchedule;
    tags?: string[];
    restrictions?: Restrictions;
    rule_definition: RuleDefinition;
    action?: CouponAction;
    rule: Rule[];
    type_slug: string;
    date_meta?: CouponDateMeta;
    author?: CouponAuthor;
    identifiers: Identifier;
    validation?: Validation;
    validity: Validity;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
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
type Restrictions1 = {
    post_order?: PostOrder1;
    user_registered?: UserRegistered;
    user_id?: string[];
    anonymous_users?: boolean;
    uses: UsesRestriction1;
    order_quantity?: number;
    payments?: PromotionPaymentModes[];
    user_groups?: number[];
    platforms?: string[];
};
type CompareObject = {
    less_than?: number;
    greater_than_equals?: number;
    less_than_equals?: number;
    greater_than?: number;
    equals?: number;
};
type ItemCriteria = {
    cart_unique_item_amount?: CompareObject;
    all_items?: boolean;
    cart_unique_item_quantity?: CompareObject;
    item_exclude_brand?: number[];
    item_exclude_store?: number[];
    item_exclude_sku?: string[];
    buy_rules?: string[];
    cart_quantity?: CompareObject;
    item_exclude_company?: number[];
    item_company?: number[];
    item_brand?: number[];
    item_category?: number[];
    cart_total?: CompareObject;
    item_size?: string[];
    item_store?: number[];
    item_sku?: string[];
    item_id?: number[];
    item_exclude_id?: number[];
    item_exclude_category?: number[];
    available_zones?: string[];
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type DisplayMeta1 = {
    name?: string;
    description?: string;
    offer_text?: string;
};
type PromotionSchedule = {
    start: string;
    end?: string;
    published: boolean;
    cron?: string;
    next_schedule?: any[];
    duration?: number;
};
type DiscountOffer = {
    discount_amount?: number;
    max_offer_quantity?: number;
    apportion_discount?: boolean;
    partial_can_ret?: boolean;
    discount_percentage?: number;
    code?: string;
    discount_price?: number;
    max_discount_amount?: number;
    min_offer_quantity?: number;
    max_usage_per_transaction?: number;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    discount_type: string;
    offer: DiscountOffer;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type PromotionListItem = {
    promotion_type: string;
    restrictions?: Restrictions1;
    currency?: string;
    promo_group: string;
    _custom_json?: any;
    buy_rules: any;
    apply_exclusive?: string;
    mode: string;
    application_id: string;
    visiblility?: Visibility;
    calculate_on?: string;
    display_meta: DisplayMeta1;
    code?: string;
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    stackable?: boolean;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    promotion_type: string;
    restrictions?: Restrictions1;
    currency?: string;
    promo_group: string;
    _custom_json?: any;
    buy_rules: any;
    apply_exclusive?: string;
    mode: string;
    application_id: string;
    visiblility?: Visibility;
    calculate_on?: string;
    display_meta: DisplayMeta1;
    code?: string;
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    stackable?: boolean;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
};
type PromotionUpdate = {
    promotion_type: string;
    restrictions?: Restrictions1;
    currency?: string;
    promo_group: string;
    _custom_json?: any;
    buy_rules: any;
    apply_exclusive?: string;
    mode: string;
    application_id: string;
    visiblility?: Visibility;
    calculate_on?: string;
    display_meta: DisplayMeta1;
    code?: string;
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    stackable?: boolean;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    modified_on?: string;
    created_on?: string;
    subtitle?: string;
    type?: string;
    entity_slug?: string;
    entity_type?: string;
    is_hidden?: boolean;
    title?: string;
    example?: string;
    description?: string;
};
type CartItem = {
    size: string;
    product_id: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type DisplayBreakup = {
    message?: string[];
    key?: string;
    value?: number;
    currency_code?: string;
    display?: string;
    currency_symbol?: string;
};
type CouponBreakup = {
    uid?: string;
    message?: string;
    max_discount_value?: number;
    code?: string;
    type?: string;
    minimum_cart_value?: number;
    value?: number;
    sub_title?: string;
    coupon_value?: number;
    title?: string;
    coupon_type?: string;
    is_applied?: boolean;
    description?: string;
};
type RawBreakup = {
    mrp_total?: number;
    you_saved?: number;
    gst_charges?: number;
    total?: number;
    discount?: number;
    vog?: number;
    delivery_charge?: number;
    subtotal?: number;
    coupon?: number;
    convenience_fee?: number;
    cod_charge?: number;
    fynd_cash?: number;
};
type LoyaltyPoints = {
    total?: number;
    is_applied?: boolean;
    applicable?: number;
    description?: string;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
    raw?: RawBreakup;
    loyalty_points?: LoyaltyPoints;
};
type ProductAvailability = {
    other_store_quantity?: number;
    sizes?: string[];
    is_valid?: boolean;
    deliverable?: boolean;
    out_of_stock?: boolean;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductPrice = {
    add_on?: number;
    effective?: number;
    selling?: number;
    currency_code?: string;
    currency_symbol?: string;
    marked?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    item_criteria?: any;
    raw_offer?: any;
    offer?: any;
};
type FreeGiftItem = {
    item_name?: string;
    item_id?: number;
    item_images_url?: string[];
    item_price_details?: any;
    item_brand_name?: string;
    item_slug?: string;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    quantity?: number;
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
};
type AppliedPromotion = {
    promotion_name?: string;
    discount_rules?: DiscountRulesApp[];
    promotion_type?: string;
    offer_text?: string;
    promo_id?: string;
    promotion_group?: string;
    article_quantity?: number;
    applied_free_articles?: AppliedFreeArticles[];
    amount?: number;
    buy_rules?: BuyRules[];
    mrp_promotion?: boolean;
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
    url?: string;
    aspect_ratio?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    type?: string;
    query?: ActionQuery;
    url?: string;
};
type CartProduct = {
    uid?: number;
    categories?: CategoryInfo[];
    brand?: BaseInfo;
    type?: string;
    name?: string;
    images?: ProductImage[];
    action?: ProductAction;
    slug?: string;
};
type BasePrice = {
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
    marked?: number;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    quantity?: number;
    uid?: string;
    product_group_tags?: string[];
    type?: string;
    size?: string;
    extra_meta?: any;
    seller?: BaseInfo;
    price?: ArticlePriceInfo;
    parent_item_identifiers?: any;
    store?: BaseInfo;
};
type CartProductInfo = {
    quantity?: number;
    message?: string;
    is_set?: boolean;
    key?: string;
    availability?: ProductAvailability;
    discount?: string;
    identifiers: CartProductIdentifer;
    coupon_message?: string;
    bulk_offer?: any;
    price_per_unit?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    promotions_applied?: AppliedPromotion[];
    product?: CartProduct;
    price?: ProductPriceInfo;
    article?: ProductArticle;
    parent_item_identifiers?: any;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    message?: string;
    items?: CartProductInfo[];
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    message?: string;
    errors?: any;
    success?: boolean;
};
type ShippingAddress = {
    landmark?: string;
    email?: string;
    area_code: string;
    city?: string;
    phone?: number;
    name?: string;
    area?: string;
    area_code_slug?: string;
    address_type?: string;
    pincode?: number;
    country?: string;
    country_code?: string;
    state?: string;
    address?: string;
    meta?: any;
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
    message?: string;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    breakup_values?: CartBreakup;
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
    quantity?: number;
    coupon_effective_discount: number;
    files?: OpenApiFiles[];
    size: string;
    delivery_charges: number;
    amount_paid: number;
    discount: number;
    employee_discount?: number;
    loyalty_discount?: number;
    extra_meta?: any;
    product_id: number;
    payment_methods: MultiTenderPaymentMethod[];
    price_effective: number;
    cashback_applied: number;
    price_marked: number;
    cod_charges: number;
    meta?: CartItemMeta;
};
type OpenApiPlatformCheckoutReq = {
    billing_address: ShippingAddress;
    employee_discount?: any;
    loyalty_discount?: number;
    gstin?: string;
    payment_mode?: string;
    shipping_address?: ShippingAddress;
    comment?: string;
    affiliate_order_id?: string;
    cart_value: number;
    coupon_code: string;
    delivery_charges: number;
    files?: OpenApiFiles[];
    order_id?: string;
    payment_methods: MultiTenderPaymentMethod[];
    coupon_value: number;
    cashback_applied: number;
    coupon?: string;
    cod_charges: number;
    currency_code?: string;
    cart_items: OpenApiOrderItem[];
};
type OpenApiCheckoutResponse = {
    message?: string;
    order_ref_id?: string;
    order_id: string;
    success?: boolean;
};
type AbandonedCart = {
    uid: number;
    bulk_coupon_discount?: number;
    discount?: number;
    gstin?: string;
    payment_mode?: string;
    payments?: any;
    merge_qty?: boolean;
    promotion?: any;
    fc_index_map?: number[];
    fynd_credits?: any;
    user_id: string;
    order_id?: string;
    app_id?: string;
    last_modified: string;
    cod_charges?: any;
    delivery_charges?: any;
    expire_at: string;
    checkout_mode?: string;
    meta?: any;
    is_archive?: boolean;
    created_on: string;
    is_active?: boolean;
    articles: any[];
    is_default: boolean;
    comment?: string;
    pick_up_customer_details?: any;
    cashback: any;
    shipments?: any[];
    cart_value?: number;
    buy_now?: boolean;
    payment_methods?: any[];
    coupon?: any;
    _id: string;
};
type AbandonedCartResponse = {
    message?: string;
    page?: Page;
    items?: AbandonedCart[];
    success?: boolean;
    result?: any;
};
type AddProductCart = {
    quantity?: number;
    item_size?: string;
    store_id?: number;
    product_group_tags?: string[];
    article_id?: string;
    extra_meta?: any;
    item_id?: number;
    article_assignment?: any;
    seller_id?: number;
    display?: string;
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
    buy_now?: boolean;
    message?: string;
    items?: CartProductInfo[];
    coupon_text?: string;
    id?: string;
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
    gstin?: string;
    currency?: CartCurrency;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    comment?: string;
    last_modified?: string;
    payment_selection_lock?: PaymentSelectionLock;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
};
type AddCartDetailResponse = {
    partial?: boolean;
    message?: string;
    cart?: CartDetailResponse;
    success?: boolean;
};
type UpdateProductCart = {
    quantity?: number;
    item_size?: string;
    article_id?: string;
    item_index?: number;
    extra_meta?: any;
    identifiers: CartProductIdentifer;
    item_id?: number;
    parent_item_identifiers?: any;
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
type ConfigurationRes = {
    valid_android_packages?: string[];
    terms_conditions_link?: string;
    application_id?: string;
    success?: boolean;
};
type SetConfigurationRes = {
    success?: boolean;
};
type ConfigurationRequest = {
    valid_android_packages?: string[];
    terms_conditions_link?: string;
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
