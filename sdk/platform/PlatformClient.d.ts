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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, FilterInfoOption, FiltersInfo, PaymentModeInfo, PlatformItem, Prices, GSTDetailsData, BagUnit, ShipmentStatus, ShipmentItemFulFillingStore, UserDataInfo, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, ShipmentStatusData, PlatformDeliveryAddress, OrderBagArticle, BagGST, BagConfigs, Identifier, FinancialBreakup, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, OrderBrandName, OrderBags, FulfillingStore, TrackingList, DPDetailsData, BagStateMapper, BagStatusHistory, UserDetailsData, ShipmentPayments, OrderDetailsData, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Attributes, Item, BagReturnableCancelableStatus, Dimensions, Weight, ReturnConfig, Article, B2BPODetails, BagMeta, ArticleDetails, BagGSTDetails, AffiliateMeta, BuyerDetails, Formatted, ShipmentTimeStamp, DebugInfo, LockData, EInvoice, EinvoiceInfo, ShipmentMeta, PDFLinks, AffiliateDetails, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, Dates, AffiliateBagDetails, Brand, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, Products, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderUser, MarketPlacePdf, AffiliateBag, UserData, OrderPriority, OrderInfo, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, TaxInfo, BillingInfo, PaymentMethod, PaymentInfo, ProcessingDates, Tax, Charge, LineItem, Shipment, ShippingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Price, Size, LimitedProductData, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemSEO, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, SEOData, MOQData, OwnerAppItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionImage, CollectionBanner, UserInfo, SeoDetail, CollectionQuery, CollectionBadge, CollectionSchedule, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, Media1, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, ProductPublish, TeaserTag, Trader, NetQuantity, CustomOrder, TaxIdentifier, ProductCreateUpdate, ProductPublished, Image, Logo, Product, ProductListingResponse, ProductCreateUpdateSchemaV2, AttributeMasterSerializer, ProductAttributesResponse, ValidateIdentifier, ALLSizes, ListALLSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, ReturnConfig1, ManufacturerResponse, Trader1, QuantityBase, Quantities, PriceMeta, CompanyMeta, DimensionResponse, BrandMeta, WeightResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, SellerPhoneNumber, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, LocationIntegrationType, UserSerializer1, InvoiceCredSerializer, InvoiceDetailsSerializer, GetAddressSerializer, UserSerializer2, GetCompanySerializer, ProductReturnConfigSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, ContactDetails, BusinessCountryInfo, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponAction, CouponDateMeta, Validity, State, Rule, Ownership, RuleDefinition, CouponAuthor, CouponSchedule, Validation, PostOrder, PaymentAllowValue, PaymentModes, BulkBundleRestriction, PriceRange, UsesRemaining, UsesRestriction, Restrictions, DisplayMetaDict, DisplayMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Visibility, PromotionAction, PromotionDateMeta, Ownership1, PromotionSchedule, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, PostOrder1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, Restrictions1, DisplayMeta1, PromotionAuthor, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CartProductIdentifer, ActionQuery, ProductAction, CategoryInfo, ProductImage, BaseInfo, CartProduct, ProductPrice, ProductPriceInfo, ProductAvailability, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, BasePrice, ArticlePriceInfo, ProductArticle, PromoMeta, CartProductInfo, DisplayBreakup, LoyaltyPoints, CouponBreakup, RawBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, Schedule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    success: boolean;
    excluded_fields: string[];
    created: boolean;
    aggregators?: any[];
    app_id: string;
    display_fields: string[];
};
type ErrorCodeDescription = {
    success: boolean;
    description: string;
    code: string;
};
type PaymentGatewayConfig = {
    is_active?: boolean;
    config_type: string;
    secret: string;
    key: string;
    merchant_salt: string;
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
    description: string;
    code: string;
};
type HttpErrorCodeAndResponse = {
    success: boolean;
    error: ErrorCodeAndDescription;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentApp = {
    package_name?: string;
    logos?: PaymentModeLogo;
    display_name?: string;
    code?: string;
};
type PaymentModeList = {
    card_fingerprint?: string;
    aggregator_name: string;
    card_brand_image?: string;
    name?: string;
    retry_count?: number;
    card_number?: string;
    exp_year?: number;
    fynd_vpa?: string;
    expired?: boolean;
    display_name?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    display_priority?: number;
    card_isin?: string;
    card_name?: string;
    exp_month?: number;
    card_type?: string;
    card_brand?: string;
    merchant_code?: string;
    intent_app_error_list?: string[];
    card_issuer?: string;
    nickname?: string;
    timeout?: number;
    card_token?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    logo_url?: PaymentModeLogo;
    card_id?: string;
    code?: string;
    intent_app?: IntentApp[];
    card_reference?: string;
    intent_flow?: boolean;
};
type RootPaymentMode = {
    list?: PaymentModeList[];
    anonymous_enable?: boolean;
    aggregator_name?: string;
    display_name: string;
    name: string;
    save_card?: boolean;
    is_pay_by_card_pl?: boolean;
    display_priority: number;
    add_card_enabled?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    is_active: boolean;
    payouts_aggregators: any[];
    transfer_type: string;
    customers: any;
    more_attributes: any;
    is_default: boolean;
    unique_transfer_no: any;
};
type PayoutBankDetails = {
    account_no?: string;
    country?: string;
    account_type: string;
    state?: string;
    ifsc_code: string;
    bank_name?: string;
    branch_name?: string;
    account_holder?: string;
    city?: string;
    pincode?: number;
};
type PayoutRequest = {
    is_active: boolean;
    unique_external_id: string;
    aggregator: string;
    transfer_type: string;
    users: any;
    bank_details: PayoutBankDetails;
};
type PayoutResponse = {
    payouts: any;
    is_active: boolean;
    success: boolean;
    aggregator: string;
    transfer_type: string;
    created: boolean;
    users: any;
    payment_status: string;
    bank_details: any;
    unique_transfer_no: string;
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
type RefundAccountResponse = {
    message: string;
    success: boolean;
    is_verified_flag?: boolean;
    data?: any;
};
type NotFoundResourceError = {
    success: boolean;
    description: string;
    code: string;
};
type BankDetailsForOTP = {
    account_no: string;
    ifsc_code: string;
    bank_name: string;
    branch_name: string;
    account_holder: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    branch_name: string;
    success?: boolean;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    email: string;
    beneficiary_id: string;
    bank_name: string;
    created_on: string;
    title: string;
    delights_user_name?: string;
    modified_on: string;
    display_name: string;
    is_active: boolean;
    comment?: string;
    address: string;
    subtitle: string;
    transfer_mode: string;
    account_no: string;
    mobile?: string;
    ifsc_code: string;
    id: number;
    branch_name?: string;
    account_holder: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    extra_meta?: any;
    current_status?: string;
    payment_gateway?: string;
    payment_id?: string;
};
type MultiTenderPaymentMethod = {
    amount: number;
    mode: string;
    meta?: MultiTenderPaymentMeta;
    name?: string;
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
type FilterInfoOption = {
    value?: string;
    text: string;
    name?: string;
};
type FiltersInfo = {
    value: string;
    text: string;
    options?: FilterInfoOption[];
    type: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type PlatformItem = {
    can_return?: boolean;
    id?: number;
    image?: string[];
    l1_category?: string[];
    l3_category_name?: string;
    code?: string;
    name?: string;
    images?: string[];
    department_id?: number;
    color?: string;
    l3_category?: number;
    can_cancel?: boolean;
    size?: string;
};
type Prices = {
    cod_charges?: number;
    discount?: number;
    cashback?: number;
    promotion_effective_discount?: number;
    cashback_applied?: number;
    fynd_credits?: number;
    tax_collected_at_source?: number;
    amount_paid_roundoff?: number;
    coupon_value?: number;
    value_of_good?: number;
    amount_paid?: number;
    price_effective?: number;
    refund_credit?: number;
    price_marked?: number;
    refund_amount?: number;
    delivery_charge?: number;
};
type GSTDetailsData = {
    gst_fee: number;
    gstin_code: string;
    tax_collected_at_source: number;
    value_of_good: number;
    brand_calculated_amount: number;
};
type BagUnit = {
    can_return?: boolean;
    item_quantity: number;
    ordering_channel: string;
    item?: PlatformItem;
    total_shipment_bags: number;
    prices?: Prices;
    can_cancel?: boolean;
    bag_id: number;
    shipment_id: string;
    gst?: GSTDetailsData;
    status: any;
};
type ShipmentStatus = {
    actual_status: string;
    ops_status: string;
    title: string;
    hex_code: string;
    status: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type UserDataInfo = {
    email?: string;
    gender?: string;
    name?: string;
    mobile?: string;
    is_anonymous_user?: boolean;
    last_name?: string;
    avis_user_id?: string;
    first_name?: string;
    uid?: number;
};
type ShipmentItem = {
    fulfilling_centre: string;
    payment_mode_info?: PaymentModeInfo;
    total_bags_count: number;
    id: string;
    bags?: BagUnit[];
    created_at: string;
    application?: any;
    shipment_created_at: number;
    total_shipments_in_order: number;
    shipment_status?: ShipmentStatus;
    channel?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    payment_methods?: any;
    prices?: Prices;
    user?: UserDataInfo;
    sla?: any;
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    filters?: FiltersInfo[];
    page?: any;
    items?: ShipmentItem[];
};
type Error = {
    message?: string;
    success?: boolean;
};
type ShipmentStatusData = {
    id?: number;
    bag_list?: number[];
    created_at?: string;
    shipment_id?: string;
    status?: string;
};
type PlatformDeliveryAddress = {
    area?: string;
    longitude?: number;
    pincode?: string;
    landmark?: string;
    created_at?: string;
    address_type?: string;
    email?: string;
    phone?: string;
    address1?: string;
    latitude?: number;
    contact_person?: string;
    city?: string;
    country?: string;
    address_category?: string;
    state?: string;
    address2?: string;
    version?: string;
    updated_at?: string;
};
type OrderBagArticle = {
    identifiers?: any;
    return_config?: any;
    uid?: string;
};
type BagGST = {
    gst_fee?: number;
    gstin_code?: string;
    is_default_hsn_code?: boolean;
    gst_tag?: string;
    value_of_good?: number;
    gst_tax_percentage?: number;
    brand_calculated_amount?: number;
    hsn_code?: string;
};
type BagConfigs = {
    is_returnable: boolean;
    allow_force_return: boolean;
    is_active: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    item_name: string;
    hsn_code: string;
    coupon_value: number;
    gst_tax_percentage: number;
    price_effective: number;
    total_units: number;
    gst_fee: string;
    transfer_price: number;
    fynd_credits: number;
    gst_tag: string;
    amount_paid_roundoff?: number;
    value_of_good: number;
    identifiers: Identifier;
    cashback: number;
    coupon_effective_discount: number;
    discount: number;
    cashback_applied: number;
    tax_collected_at_source?: number;
    added_to_fynd_cash: boolean;
    cod_charges: number;
    promotion_effective_discount: number;
    pm_price_split: any;
    brand_calculated_amount: number;
    amount_paid: number;
    refund_credit: number;
    price_marked: number;
    size: string;
    delivery_charge: number;
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
    promotion_type?: string;
    promo_id?: string;
    buy_rules?: BuyRules[];
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
    article_quantity?: number;
    promotion_name?: string;
    amount?: number;
};
type OrderBrandName = {
    created_on: number;
    id: number;
    logo: string;
    modified_on?: number;
    company: string;
    brand_name: string;
};
type OrderBags = {
    current_status?: string;
    entity_type?: string;
    item?: PlatformItem;
    delivery_address?: PlatformDeliveryAddress;
    can_return?: boolean;
    seller_identifier?: string;
    article?: OrderBagArticle;
    gst_details?: BagGST;
    parent_promo_bags?: any;
    prices?: Prices;
    identifier?: string;
    bag_configs?: BagConfigs;
    can_cancel?: boolean;
    display_name?: string;
    quantity?: number;
    line_number?: number;
    bag_id: number;
    financial_breakup?: FinancialBreakup[];
    applied_promos?: AppliedPromos[];
    brand?: OrderBrandName;
};
type FulfillingStore = {
    fulfillment_channel: string;
    id: string;
    pincode: string;
    state: string;
    phone: string;
    code: string;
    contact_person: string;
    meta: any;
    store_name: string;
    city: string;
    country: string;
    address: string;
};
type TrackingList = {
    text: string;
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
    status: string;
};
type DPDetailsData = {
    eway_bill_id?: string;
    id?: string;
    awb_no?: string;
    pincode?: string;
    track_url?: string;
    gst_tag?: string;
    name?: string;
    country?: string;
};
type BagStateMapper = {
    state_type: string;
    is_active?: boolean;
    app_facing?: boolean;
    notify_customer?: boolean;
    display_name: string;
    name: string;
    app_display_name?: string;
    journey_type: string;
    bs_id: number;
    app_state_name?: string;
};
type BagStatusHistory = {
    state_type?: string;
    status: string;
    kafka_sync?: boolean;
    created_at: string;
    bag_state_mapper: BagStateMapper;
    state_id: number;
    display_name?: boolean;
    forward?: boolean;
    reasons?: any[];
    bsh_id: number;
    delivery_partner_id?: number;
    app_display_name?: boolean;
    delivery_awb_number?: string;
    bag_id: number;
    shipment_id: string;
    store_id: number;
    updated_at?: string;
};
type UserDetailsData = {
    pincode: string;
    state: string;
    email: string;
    phone: string;
    name: string;
    city: string;
    country: string;
    address: string;
};
type ShipmentPayments = {
    logo?: string;
    mode: string;
    source?: string;
};
type OrderDetailsData = {
    fynd_order_id: string;
    affiliate_id?: string;
    cod_charges?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    source?: string;
    tax_details?: any;
    order_value?: string;
    order_date?: string;
};
type ShipmentInfoResponse = {
    shipment_quantity?: number;
    order_created_time?: string;
    is_not_fynd_source: boolean;
    user_id: string;
    can_break: string;
    credit_note_id: string;
    forward_order_status?: any[];
    escalation?: any;
    order_status: any;
    affiliate_shipment_id: string;
    priority_text?: string;
    items: any[];
    pay_button?: string;
    user_agent?: string;
    child_nodes?: string[];
    packaging_type?: string;
    status?: ShipmentStatusData;
    mid?: string;
    can_return?: boolean;
    lock_status: string;
    is_pdsr?: string;
    bags?: OrderBags[];
    order_type: string;
    operational_status?: string;
    invoice: any;
    is_invoiced: boolean;
    platform_logo: boolean;
    status_progress: number;
    shipment_status?: string;
    due_date?: string;
    fulfilling_store?: FulfillingStore;
    custom_meta?: any[];
    gst_details?: GSTDetailsData;
    prices?: Prices;
    forward_tracking_list?: any[];
    total_bags?: number;
    total_items?: number;
    ordering_store: any;
    can_cancel?: boolean;
    email_id: string;
    go_green?: boolean;
    secured_delivery_flag?: string;
    beneficiary_details?: boolean;
    bank_data?: any;
    tracking_url: string;
    coupon?: any;
    is_fynd_store?: string;
    picked_date?: string;
    refund_text?: string;
    delivery_slot?: any;
    vertical?: string;
    enable_dp_tracking?: string;
    fyndstore_emp: any;
    shipment_id: string;
    tracking_list?: TrackingList[];
    company: any;
    is_packaging_order: boolean;
    current_shipment_status: any;
    dp_details?: DPDetailsData;
    payment_mode?: string;
    enable_tracking?: boolean;
    bag_status_history?: BagStatusHistory[];
    refund_details?: any;
    delivery_details?: UserDetailsData;
    billing_details?: UserDetailsData;
    forward_shipment_status?: any[];
    journey_type?: string;
    delivery_status: any[];
    shipment_images?: string[];
    user_info?: any;
    replacement_details?: string;
    payments?: ShipmentPayments;
    is_fynd_coupon: boolean;
    order?: OrderDetailsData;
    kirana_store_id?: string;
};
type PlatformShipment = {
    shipment_quantity?: number;
    priority_text?: string;
    user_agent?: string;
    packaging_type?: string;
    status?: ShipmentStatusData;
    bags?: OrderBags[];
    operational_status?: string;
    platform_logo?: string;
    shipment_status?: string;
    fulfilling_store?: FulfillingStore;
    custom_meta?: any[];
    gst_details?: GSTDetailsData;
    prices?: Prices;
    total_bags?: number;
    total_items?: number;
    picked_date?: string;
    delivery_slot?: any;
    vertical?: string;
    enable_dp_tracking?: string;
    shipment_id: string;
    tracking_list?: TrackingList[];
    dp_details?: DPDetailsData;
    payment_mode?: string;
    bag_status_history?: BagStatusHistory[];
    delivery_details?: UserDetailsData;
    billing_details?: UserDetailsData;
    journey_type?: string;
    shipment_images?: string[];
    payments?: ShipmentPayments;
    order?: OrderDetailsData;
};
type OrderDict = {
    fynd_order_id: string;
    shipment_count: number;
    order_date: string;
};
type ShipmentDetailsResponse = {
    custom_meta?: any[];
    shipments?: PlatformShipment[];
    order?: OrderDict;
    success: boolean;
};
type SubLane = {
    value?: string;
    text?: string;
    index?: number;
    total_items?: number;
    actions?: any[];
};
type SuperLane = {
    value: string;
    text: string;
    options?: SubLane[];
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
    order_created_time?: string;
    payment_mode?: string;
    meta?: any;
    channel?: PlatformChannel;
    shipments?: PlatformShipment[];
    order_value?: number;
    user_info?: UserDataInfo;
    total_order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    order_id?: string;
};
type OrderListingResponse = {
    message?: string;
    lane?: string;
    page?: Page;
    items?: PlatformOrderItems[];
    total_count?: number;
    success?: boolean;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    value: number;
    text: string;
    options?: Options[];
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    status?: string;
    account_name?: string;
    meta?: any;
    raw_status?: string;
    updated_time?: string;
    last_location_recieved_at?: string;
    updated_at?: string;
    shipment_type?: string;
    awb?: string;
    reason?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type FiltersResponse = {
    advance?: any[];
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    report_id?: string;
    display_name?: string;
    s3_key?: string;
    report_name?: string;
    report_requested_at?: string;
    report_created_at?: string;
    request_details?: any;
    report_type?: string;
    status?: string;
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
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
    data?: any[];
    identifier?: string;
    success?: boolean;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    label?: any;
    store_code?: string;
    do_invoice_label_generated: boolean;
    company_id?: string;
    invoice?: any;
    invoice_status?: string;
    store_name?: string;
    data?: any;
    batch_id: string;
    store_id?: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type FileResponse = {
    content_type?: string;
    namespace?: string;
    operation?: string;
    cdn?: URL;
    method?: string;
    tags?: string[];
    file_path?: string;
    size?: number;
    file_name?: string;
    upload?: FileUploadResponse;
};
type bulkListingData = {
    user_id?: string;
    store_code?: string;
    failed_shipments?: any[];
    store_name?: string;
    status?: string;
    total?: number;
    uploaded_on?: string;
    file_name?: string;
    processing?: number;
    id?: string;
    successful?: number;
    company_id?: number;
    user_name?: string;
    failed?: number;
    store_id?: number;
    excel_url?: string;
    processing_shipments?: string[];
    batch_id?: string;
    successful_shipments?: any[];
};
type BulkListingPage = {
    total?: number;
    has_previous?: boolean;
    current?: number;
    size?: number;
    has_next?: boolean;
    type?: string;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    page?: BulkListingPage;
    success?: boolean;
    error?: string;
};
type ManifestPage = {
    total?: number;
    has_previous?: boolean;
    current?: string;
    size?: string;
    has_next?: boolean;
    type?: string;
};
type DateRange = {
    from_date?: string;
    to_date?: string;
};
type ManifestFilter = {
    stores?: string;
    dp_name?: string;
    sales_channel_name?: string;
    lane?: string;
    sales_channels?: string;
    store_name?: string;
    dp_ids?: string;
    date_range?: DateRange;
};
type GeneratedManifestItem = {
    created_by?: string;
    is_active?: boolean;
    created_at?: string;
    company_id?: number;
    filters?: ManifestFilter;
    manifest_id?: string;
    status?: string;
};
type GeneratedManifestResponse = {
    page?: ManifestPage;
    items?: GeneratedManifestItem[];
};
type ManifestDetailItem = {
    item_qty?: number;
    invoice_id?: string;
    awb?: string;
    shipment_id?: string;
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
    created_by?: string;
    user_id?: number;
    id?: number;
    is_active?: boolean;
    created_at?: string;
    company_id?: number;
    meta?: ManifestDetailMeta;
    uid?: number;
    filters?: ManifestFilter;
    manifest_id?: string;
    status?: string;
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
    display_name?: string;
    id?: number;
    qc_type?: string[];
    question_set?: QuestionSet[];
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
    company_id?: string;
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    successful_shipment_ids?: string[];
    batch_id?: string;
    total_shipments_count?: number;
    processing_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    uploaded_by?: string;
    user_id?: string;
    message?: string;
    error?: string[];
    data?: BulkActionDetailsDataField[];
    failed_records?: string[];
    uploaded_on?: string;
    success?: string;
    status?: boolean;
};
type Attributes = {
    essential?: string;
    primary_color_hex?: string;
    gender?: string[];
    name?: string;
    primary_material?: string;
    marketer_name?: string;
    primary_color?: string;
    marketer_address?: string;
    brand_name?: string;
};
type Item = {
    item_id: number;
    code?: string;
    attributes: Attributes;
    color?: string;
    can_return?: boolean;
    meta?: any;
    l2_category?: string[];
    l3_category?: number;
    can_cancel?: boolean;
    branch_url?: string;
    slug_key: string;
    image: string[];
    gender?: string;
    last_updated_at?: string;
    department_id?: number;
    l2_category_id?: number;
    l1_category?: string[];
    l3_category_name?: string;
    brand_id: number;
    name: string;
    l1_category_id?: number;
    webstore_product_url?: string;
    brand: string;
    size: string;
};
type BagReturnableCancelableStatus = {
    is_returnable: boolean;
    is_active: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
};
type Dimensions = {
    height?: number;
    is_default?: boolean;
    width?: number;
    length?: number;
    unit?: string;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type ReturnConfig = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Article = {
    seller_identifier: string;
    dimensions?: Dimensions;
    child_details?: any;
    esp_modified?: any;
    code?: string;
    a_set?: any;
    _id: string;
    weight?: Weight;
    identifiers: Identifier;
    is_set?: boolean;
    raw_meta?: any;
    size: string;
    return_config?: ReturnConfig;
    uid: string;
};
type B2BPODetails = {
    item_base_price?: number;
    docker_number?: string;
    po_line_amount?: number;
    po_tax_amount?: number;
    partial_can_ret?: boolean;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type ArticleDetails = {
    status?: any;
};
type BagGSTDetails = {
    gst_fee: number;
    gstin_code?: string;
    igst_tax_percentage: number;
    cgst_gst_fee: string;
    hsn_code_id: string;
    is_default_hsn_code?: boolean;
    igst_gst_fee: string;
    gst_tag: string;
    tax_collected_at_source: number;
    value_of_good: number;
    gst_tax_percentage: number;
    sgst_tax_percentage: number;
    brand_calculated_amount: number;
    sgst_gst_fee: string;
    hsn_code: string;
    cgst_tax_percentage: number;
};
type AffiliateMeta = {
    loyalty_discount?: number;
    employee_discount?: number;
    order_item_id?: string;
    is_priority?: boolean;
    channel_order_id?: string;
    quantity?: number;
    due_date?: string;
    coupon_code?: string;
    box_type?: string;
    channel_shipment_id?: string;
    size_level_total_qty?: number;
};
type BuyerDetails = {
    pincode: number;
    name: string;
    city: string;
    ajio_site_id?: string;
    state: string;
    address: string;
    gstin: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type LockData = {
    locked?: boolean;
    mto?: boolean;
    lock_message?: string;
};
type EInvoice = {
    error_code?: string;
    acknowledge_date?: string;
    signed_qr_code?: string;
    acknowledge_no?: number;
    signed_invoice?: string;
    irn?: string;
    error_message?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type ShipmentMeta = {
    auto_trigger_dp_assignment_acf: boolean;
    b2b_buyer_details?: BuyerDetails;
    formatted?: Formatted;
    return_awb_number?: string;
    ewaybill_info?: any;
    awb_number?: string;
    return_store_node?: number;
    box_type?: string;
    dp_sort_key?: string;
    forward_affiliate_order_id?: string;
    order_type?: string;
    return_affiliate_shipment_id?: string;
    dp_options?: any;
    b2c_buyer_details?: any;
    due_date?: string;
    return_details?: any;
    assign_dp_from_sb?: boolean;
    store_invoice_updated_date?: string;
    timestamp?: ShipmentTimeStamp;
    fulfilment_priority_text?: string;
    debug_info?: DebugInfo;
    po_number?: string;
    bag_weight?: any;
    shipment_weight?: number;
    marketplace_store_id?: string;
    dp_id?: string;
    same_store_available: boolean;
    dp_name?: string;
    return_affiliate_order_id?: string;
    lock_data?: LockData;
    packaging_name?: string;
    shipment_volumetric_weight?: number;
    weight: number;
    einvoice_info?: EinvoiceInfo;
    forward_affiliate_shipment_id?: string;
    external?: any;
};
type PDFLinks = {
    label?: string;
    label_pos?: string;
    invoice_type: string;
    credit_note_url?: string;
    invoice?: string;
    po_invoice?: string;
    invoice_pos?: string;
    label_a4?: string;
    label_type: string;
    label_a6?: string;
    b2b?: string;
    invoice_a4?: string;
    invoice_a6?: string;
};
type AffiliateDetails = {
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
    shipment_meta: ShipmentMeta;
    ad_id?: string;
    affiliate_order_id: string;
    pdf_links?: PDFLinks;
    affiliate_bag_id: string;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
};
type Document = {
    ds_type: string;
    value: string;
    url?: string;
    verified: boolean;
    legal_name: string;
};
type StoreDocuments = {
    gst?: Document;
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
type EInvoicePortalDetails = {
    password?: string;
    user?: string;
    username?: string;
};
type StoreMeta = {
    timing?: any[];
    ewaybill_portal_details?: any;
    stage: string;
    display_name: string;
    documents?: StoreDocuments;
    notification_emails?: string[];
    gst_credentials: StoreGstCredentials;
    einvoice_portal_details?: EInvoicePortalDetails;
    gst_number?: string;
    additional_contact_details?: any;
    product_return_config?: any;
};
type StoreAddress = {
    area?: string;
    address_type: string;
    state: string;
    updated_at: string;
    version?: string;
    address2?: string;
    country_code: string;
    created_at: string;
    email?: string;
    phone: string;
    contact_person: string;
    country: string;
    address_category: string;
    longitude: number;
    pincode: number;
    landmark?: string;
    address1: string;
    latitude: number;
    city: string;
};
type Store = {
    fulfillment_channel: string;
    brand_store_tags?: string[];
    store_active_from?: string;
    code?: string;
    login_username: string;
    state: string;
    is_archived?: boolean;
    updated_at?: string;
    is_active?: boolean;
    is_enabled_for_recon?: boolean;
    location_type: string;
    meta: StoreMeta;
    address2?: string;
    packaging_material_count?: number;
    created_at: string;
    company_id: number;
    s_id: string;
    phone: number;
    store_address_json?: StoreAddress;
    contact_person: string;
    mall_name?: string;
    country: string;
    order_integration_id?: string;
    mall_area?: string;
    longitude: number;
    alohomora_user_id?: number;
    pincode: string;
    vat_no?: string;
    address1: string;
    brand_id?: any;
    latitude: number;
    name: string;
    parent_store_id?: number;
    city: string;
    store_email: string;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    affiliate_bag_id: string;
};
type Brand = {
    company: string;
    created_on?: number;
    credit_note_expiry_days?: number;
    brand_id: number;
    script_last_ran?: string;
    is_virtual_invoice?: boolean;
    start_date?: string;
    modified_on?: number;
    logo?: string;
    invoice_prefix?: string;
    credit_note_allowed?: boolean;
    pickup_location?: string;
    brand_name: string;
};
type BagDetailsPlatformResponse = {
    qc_required?: any;
    current_status: BagStatusHistory;
    entity_type?: string;
    b_type?: string;
    reasons?: any[];
    item: Item;
    b_id: number;
    tags?: string[];
    status: BagReturnableCancelableStatus;
    seller_identifier?: string;
    operational_status?: string;
    article: Article;
    meta?: BagMeta;
    article_details?: ArticleDetails;
    gst_details: BagGSTDetails;
    parent_promo_bags?: any;
    prices: Prices;
    affiliate_details?: AffiliateDetails;
    identifier?: string;
    ordering_store?: Store;
    current_operational_status: BagStatusHistory;
    restore_promos?: any;
    display_name?: string;
    bag_status: BagStatusHistory[];
    quantity?: number;
    line_number?: number;
    restore_coupon?: boolean;
    original_bag_list?: number[];
    order_integration_id?: string;
    financial_breakup: FinancialBreakup[];
    no_of_bags_order?: number;
    dates?: Dates;
    affiliate_bag_details: AffiliateBagDetails;
    bag_status_history?: BagStatusHistory;
    journey_type: string;
    applied_promos?: any[];
    bag_update_time?: number;
    brand: Brand;
    shipment_id?: string;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    current: number;
    page_type: string;
    item_total: number;
    size: number;
    has_next: boolean;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    status?: number;
    shipment_id?: string;
    error?: string;
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
    bag_id?: number;
    set_id?: string;
    affiliate_id?: string;
    store_id: number;
    item_id?: string;
    affiliate_bag_id?: string;
    mongo_article_id?: string;
    reason_ids?: number[];
    fynd_order_id?: string;
    affiliate_order_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_id?: string;
    reason_text: string;
    id?: string;
    affiliate_bag_id?: string;
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    entity_type: string;
    action: string;
    action_type: string;
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
    original_filter?: OriginalFilter;
    status?: string;
    lock_status?: boolean;
    shipment_id?: string;
    is_bag_locked?: boolean;
    affiliate_shipment_id?: string;
    is_shipment_locked?: boolean;
    bags?: Bags[];
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    to_datetime?: string;
    id: number;
    company_id?: number;
    from_datetime?: string;
    platform_name?: string;
    description?: string;
    platform_id?: string;
    created_at?: string;
    title?: string;
    logo_url?: string;
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
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
type ProductsDataUpdatesFilters = {
    line_number?: number;
    identifier?: string;
};
type ProductsDataUpdates = {
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
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
    data?: EntityReasonData;
    filters?: any[];
};
type ProductsReasonsData = {
    reason_text?: string;
    reason_id?: number;
};
type ProductsReasonsFilters = {
    line_number?: number;
    identifier?: string;
    quantity?: number;
};
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
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
    status?: string;
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
    force_transition?: boolean;
};
type ShipmentsResponse = {
    code?: string;
    final_state?: any;
    status?: number;
    stack_trace?: string;
    message?: string;
    exception?: string;
    identifier?: string;
    meta?: any;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type ArticleDetails1 = {
    quantity: number;
    weight: any;
    dimension: any;
    attributes: any;
    brand_id: number;
    category: any;
    _id: string;
};
type ShipmentDetails = {
    box_type?: string;
    articles: ArticleDetails1[];
    shipments: number;
    dp_id?: number;
    affiliate_shipment_id: string;
    fulfillment_id: number;
    meta?: any;
};
type LocationDetails = {
    fulfillment_id: number;
    articles: ArticleDetails1[];
    fulfillment_type: string;
};
type ShipmentConfig = {
    payment_mode: string;
    journey: string;
    to_pincode: string;
    source: string;
    shipment: ShipmentDetails[];
    action: string;
    identifier: string;
    location_details?: LocationDetails;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderUser = {
    last_name: string;
    address1?: string;
    first_name: string;
    pincode: string;
    city: string;
    state: string;
    email: string;
    mobile: number;
    phone: number;
    country: string;
    address2?: string;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    item_size: string;
    pdf_links?: MarketPlacePdf;
    seller_identifier: string;
    _id: string;
    unit_price: number;
    item_id: number;
    store_id: number;
    modified_on: string;
    avl_qty: number;
    hsn_code_id: string;
    amount_paid: number;
    affiliate_store_id: string;
    discount: number;
    company_id: number;
    delivery_charge: number;
    transfer_price: number;
    sku: string;
    price_marked: number;
    identifier: any;
    quantity: number;
    affiliate_meta: any;
    fynd_store_id: string;
    price_effective: number;
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
type OrderInfo = {
    payment_mode: string;
    order_value: number;
    cod_charges: number;
    items: any;
    payment?: any;
    discount: number;
    shipment?: ShipmentData;
    delivery_charges: number;
    billing_address: OrderUser;
    coupon?: string;
    shipping_address: OrderUser;
    bags: AffiliateBag[];
    user: UserData;
    order_priority?: OrderPriority;
    affiliate_order_id?: string;
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
    name: string;
    owner: string;
    id: string;
    secret: string;
    description?: string;
    token: string;
    updated_at: string;
    created_at: string;
    meta?: AffiliateAppConfigMeta[];
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
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryConfig = {
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    token: string;
    id: string;
    config?: AffiliateConfig;
};
type OrderConfig = {
    store_lookup?: string;
    article_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    affiliate: Affiliate;
    bag_end_state?: string;
    create_user?: boolean;
};
type CreateOrderPayload = {
    affiliate_id: string;
    order_info: OrderInfo;
    order_config: OrderConfig;
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
    description: string;
    slug: string;
    id: number;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l3_detail?: string;
    bag_id?: number;
    type: string;
    ticket_url?: string;
    ticket_id?: string;
    createdat: string;
    l2_detail?: string;
    message: string;
    l1_detail?: string;
    user: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    customer_name: string;
    payment_mode: string;
    amount_paid: number;
    shipment_id: number;
    order_id: string;
    message: string;
    phone_number: number;
    country_code: string;
    brand_name: string;
};
type SendSmsPayload = {
    bag_id: number;
    data?: SmsDataPayload;
    slug: string;
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
    remarks?: string;
    id: number;
    status?: string;
    shipment_id?: string;
    bag_list?: number[];
    meta: Meta;
};
type OrderStatusData = {
    order_details: OrderDetails;
    errors?: string[];
    shipment_details?: ShipmentDetail[];
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    order_type: string;
    shipment_ids?: string[];
    qc_required: string;
    dp_id: number;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type BillingInfo = {
    primary_email: string;
    pincode: string;
    state: string;
    customer_code?: string;
    country_code: string;
    alternate_email?: string;
    first_name: string;
    gender?: string;
    house_no: string;
    city: string;
    country: string;
    last_name?: string;
    middle_name?: string;
    address1: string;
    primary_mobile_number: string;
    state_code: string;
    floor_no: string;
    title?: string;
    address2?: string;
    alternate_mobile_number?: string;
    external_customer_code?: string;
};
type PaymentMethod = {
    name: string;
    transaction_data?: any;
    mode: string;
    collect_by: string;
    amount: number;
    refund_by: string;
    meta?: any;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type ProcessingDates = {
    customer_pickup_slot?: any;
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
    confirm_by_date?: string;
    dispatch_by_date?: string;
    pack_by_date?: string;
};
type Tax = {
    name: string;
    amount: any;
    breakup: any[];
    tax_exempt: boolean;
};
type Charge = {
    name: string;
    code?: string;
    type: string;
    tax: Tax;
    amount: any;
};
type LineItem = {
    external_line_id?: string;
    quantity?: number;
    charges: Charge[];
    custom_messasge?: string;
    seller_identifier: string;
    meta?: any;
};
type Shipment = {
    external_shipment_id?: number;
    meta?: any;
    processing_dates?: ProcessingDates;
    location_id: number;
    priority?: number;
    line_items: LineItem[];
};
type ShippingInfo = {
    primary_email: string;
    pincode: string;
    state: string;
    address_type?: string;
    customer_code?: string;
    country_code: string;
    alternate_email?: string;
    first_name: string;
    gender?: string;
    house_no?: string;
    landmark?: string;
    city: string;
    country: string;
    last_name?: string;
    middle_name?: string;
    address1: string;
    primary_mobile_number: string;
    state_code: string;
    slot?: any[];
    floor_no?: string;
    title?: string;
    address2?: string;
    alternate_mobile_number?: string;
    shipping_type?: string;
    external_customer_code?: string;
    geo_location?: any;
};
type CreateOrderAPI = {
    tax_info?: TaxInfo;
    currency_info: any;
    application_id?: string;
    billing_info: BillingInfo;
    external_creation_date?: string;
    external_order_id?: string;
    payment_info: PaymentInfo;
    shipments: Shipment[];
    charges: Charge[];
    shipping_info: ShippingInfo;
    meta?: any;
};
type CreateOrderErrorReponse = {
    code?: string;
    status: number;
    stack_trace?: string;
    request_id?: string;
    info?: any;
    message: string;
    exception?: string;
    meta?: string;
};
type PaymentMethods = {
    collect_by?: string;
    refund_by?: string;
    mode?: string;
};
type CreateChannelPaymentInfo = {
    payment_methods?: PaymentMethods[];
    source?: string;
    mode_of_payment?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
    dp_configuration?: DpConfiguration;
    logo_url?: any;
    shipment_assignment?: string;
    location_reassignment?: boolean;
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
    order_details?: FyndOrderIdList[];
    end_date: string;
    start_date: string;
    mobile: number;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    app_id?: string;
    words?: string[];
    is_active?: boolean;
    result: SearchKeywordResult;
};
type GetSearchWordsData = {
    _custom_json?: any;
    app_id?: string;
    uid?: string;
    words?: string[];
    is_active?: boolean;
    result?: any;
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
    url?: string;
    params?: any;
    type?: string;
    query?: any;
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
    _custom_json?: any;
    action?: AutocompleteAction;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    app_id?: string;
    words?: string[];
    is_active?: boolean;
    results?: AutocompleteResult[];
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    app_id?: string;
    uid?: string;
    words?: string[];
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    results?: any[];
    words?: string[];
    app_id?: string;
};
type ProductBundleItem = {
    product_uid: number;
    max_quantity: number;
    allow_remove?: boolean;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    min_quantity: number;
};
type ProductBundleRequest = {
    meta?: any;
    slug: string;
    products: ProductBundleItem[];
    modified_on?: string;
    name: string;
    choice: string;
    same_store_assignment?: boolean;
    is_active: boolean;
    company_id?: number;
    page_visibility?: string[];
    modified_by?: any;
    created_by?: any;
    created_on?: string;
    logo?: string;
};
type GetProductBundleCreateResponse = {
    meta?: any;
    slug: string;
    products: ProductBundleItem[];
    modified_on?: string;
    id?: string;
    name: string;
    choice: string;
    same_store_assignment?: boolean;
    is_active: boolean;
    company_id?: number;
    page_visibility?: string[];
    modified_by?: any;
    created_by?: any;
    created_on?: string;
    logo?: string;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    meta?: any;
    slug: string;
    products: ProductBundleItem[];
    modified_on?: string;
    name: string;
    choice: string;
    same_store_assignment?: boolean;
    is_active: boolean;
    company_id?: number;
    page_visibility?: string[];
    modified_by?: any;
    logo?: string;
};
type Price = {
    currency?: string;
    min_marked?: number;
    max_marked?: number;
    max_effective?: number;
    min_effective?: number;
};
type Size = {
    display?: string;
    value?: string;
    quantity?: number;
    is_available?: boolean;
};
type LimitedProductData = {
    slug?: string;
    price?: any;
    quantity?: number;
    images?: string[];
    country_of_origin?: string;
    uid?: number;
    name?: string;
    sizes?: string[];
    short_description?: string;
    identifier?: any;
    item_code?: string;
    attributes?: any;
};
type GetProducts = {
    product_uid?: number;
    max_quantity?: number;
    price?: Price;
    allow_remove?: boolean;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    product_details?: LimitedProductData;
    min_quantity?: number;
};
type GetProductBundleResponse = {
    meta?: any;
    slug?: string;
    products?: GetProducts[];
    name?: string;
    choice?: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    company_id?: number;
    is_active?: boolean;
    logo?: string;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    image?: string;
    modified_on?: string;
    brand_id?: number;
    id?: string;
    name: string;
    tag?: string;
    guide?: Guide;
    modified_by?: any;
    description?: string;
    company_id?: number;
    created_by?: any;
    created_on?: string;
    subtitle?: string;
    title: string;
    active?: boolean;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    modified_on?: string;
    brand_id?: number;
    id?: string;
    name?: string;
    guide?: any;
    tag?: string;
    title?: string;
    company_id?: number;
    created_on?: string;
    modified_by?: any;
    subtitle?: string;
    created_by?: any;
    active?: boolean;
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
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type ApplicationItemMeta = {
    _custom_meta?: MetaFields[];
    _custom_json?: any;
    seo?: ApplicationItemSEO;
    is_cod?: boolean;
    is_gift?: boolean;
    alt_text?: any;
    moq?: ApplicationItemMOQ;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    is_cod?: boolean;
    is_gift?: boolean;
    alt_text?: any;
    moq?: MOQData;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    values?: any[];
    data: any[];
};
type AttributeDetailsGroup = {
    key?: string;
    slug?: string;
    logo?: string;
    display_type: string;
    name: string;
    is_active: boolean;
    unit?: string;
    priority: number;
};
type AppConfigurationDetail = {
    slug: string;
    priority: number;
    app_id: string;
    name?: string;
    template_slugs?: string[];
    is_default: boolean;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    logo?: string;
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
    priority: number;
    app_id: string;
    name?: string;
    is_default: boolean;
    is_active: boolean;
    default_key: string;
    logo?: string;
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
    similar?: any;
    compare?: any;
    variant?: any;
    detail?: any;
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
    bucket_points?: ConfigurationBucketPoints[];
    value?: string;
    condition?: string;
    map_values?: any[];
    map?: any;
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    key: string;
    logo?: string;
    display_name?: string;
    value_config?: ConfigurationListingFilterValue;
    type: string;
    name?: string;
    is_active: boolean;
    priority: number;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    key: string;
    logo?: string;
    name?: string;
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
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    key: string;
    logo?: string;
    size?: ProductSize;
    is_active: boolean;
    title?: string;
    subtitle?: string;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    key: string;
    logo?: string;
    size: ProductSize;
    display_type: string;
    name: string;
    is_active: boolean;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppConfiguration = {
    modified_on?: string;
    config_type: string;
    listing?: ConfigurationListing;
    type?: string;
    app_id: string;
    config_id?: string;
    modified_by?: any;
    created_on?: string;
    product?: ConfigurationProduct;
    created_by?: any;
};
type AppCatalogConfiguration = {
    modified_on?: string;
    config_type: string;
    listing?: ConfigurationListing;
    id?: string;
    type?: string;
    app_id: string;
    config_id?: string;
    modified_by?: any;
    created_on?: string;
    product?: ConfigurationProduct;
    created_by?: any;
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
    config_type: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
    app_id: string;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
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
type ProductFiltersKey = {
    display: string;
    name: string;
    operators?: string[];
    logo?: string;
    kind?: string;
};
type ProductFiltersValue = {
    display: string;
    is_selected: boolean;
    value: any;
    currency_code?: string;
    display_format?: string;
    query_format?: string;
    currency_symbol?: string;
    count?: number;
    selected_min?: number;
    min?: number;
    max?: number;
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
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type UserInfo = {
    user_id?: string;
    uid?: string;
    email?: string;
    username?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionQuery = {
    value: any[];
    attribute: string;
    op: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionSchedule = {
    end?: string;
    cron?: string;
    start?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
};
type CreateCollection = {
    meta?: any;
    banners: CollectionBanner;
    type: string;
    allow_sort?: boolean;
    is_visible?: boolean;
    created_by?: UserInfo;
    priority?: number;
    _custom_json?: any;
    allow_facets?: boolean;
    seo?: SeoDetail;
    _locale_language?: any;
    is_active?: boolean;
    query?: CollectionQuery[];
    modified_by?: UserInfo;
    published?: boolean;
    sort_on?: string;
    tags?: string[];
    visible_facets_keys?: string[];
    app_id: string;
    name: string;
    slug: string;
    badge?: CollectionBadge;
    description?: string;
    _schedule?: CollectionSchedule;
    logo: CollectionImage;
};
type BannerImage = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionCreateResponse = {
    meta?: any;
    banners?: ImageUrls;
    type?: string;
    allow_sort?: boolean;
    logo?: BannerImage;
    allow_facets?: boolean;
    tag?: string[];
    is_active?: boolean;
    query?: CollectionQuery[];
    sort_on?: string;
    visible_facets_keys?: string[];
    app_id?: string;
    name?: string;
    slug?: string;
    cron?: any;
    badge?: any;
    description?: string;
    _schedule?: any;
    priority?: number;
};
type Media1 = {
    url: string;
    type?: string;
    meta?: any;
};
type GetCollectionDetailNest = {
    meta?: any;
    banners?: ImageUrls;
    type?: string;
    uid?: string;
    allow_sort?: boolean;
    logo?: Media1;
    allow_facets?: boolean;
    tag?: string[];
    is_active?: boolean;
    query?: CollectionQuery[];
    visible_facets_keys?: string[];
    app_id?: string;
    action?: Action;
    name?: string;
    slug?: string;
    cron?: any;
    badge?: any;
    description?: string;
    _schedule?: any;
    priority?: number;
};
type CollectionListingFilterTag = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilterType = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
    page?: Page;
};
type CollectionDetailResponse = {
    meta?: any;
    slug?: string;
    banners?: ImageUrls;
    cron?: any;
    priority?: number;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    type?: string;
    app_id?: string;
    name?: string;
    tag?: string[];
    is_active?: boolean;
    description?: string;
    query?: CollectionQuery[];
    allow_sort?: boolean;
    _schedule?: any;
    badge?: any;
    logo?: Media1;
};
type UpdateCollection = {
    meta?: any;
    banners?: CollectionBanner;
    type?: string;
    allow_sort?: boolean;
    is_visible?: boolean;
    priority?: number;
    _custom_json?: any;
    allow_facets?: boolean;
    seo?: SeoDetail;
    _locale_language?: any;
    is_active?: boolean;
    query?: CollectionQuery[];
    modified_by?: UserInfo;
    published?: boolean;
    sort_on?: string;
    tags?: string[];
    visible_facets_keys?: string[];
    name?: string;
    slug?: string;
    badge?: CollectionBadge;
    _schedule?: CollectionSchedule;
    description?: string;
    logo?: CollectionImage;
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    item?: ItemQueryForUserCollection[];
    type?: string;
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
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
type Price1 = {
    currency_symbol?: string;
    currency_code?: string;
    max?: number;
    min?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductBrand = {
    action?: Action;
    name?: string;
    logo?: Media1;
    uid?: number;
};
type ProductListingDetail = {
    grouped_attributes?: ProductDetailGroupedAttribute[];
    type?: string;
    similars?: string[];
    uid?: number;
    product_online_date?: string;
    rating?: number;
    teaser_tag?: any;
    highlights?: string[];
    sellable?: boolean;
    medias?: Media1[];
    item_code?: string;
    attributes?: any;
    rating_count?: number;
    image_nature?: string;
    name?: string;
    color?: string;
    slug: string;
    price?: ProductListingPrice;
    brand?: ProductBrand;
    discount?: string;
    has_variant?: boolean;
    description?: string;
    short_description?: string;
    promo_meta?: any;
    tryouts?: string[];
    item_type?: string;
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
    article_freshness?: number;
    name?: string;
    total_articles?: number;
    available_sizes?: number;
    available_articles?: number;
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
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    platform?: string;
    store_ids?: number[];
    opt_level: string;
    enabled?: boolean;
    company_id?: number;
    brand_ids?: number[];
};
type CompanyOptIn = {
    modified_on: number;
    platform: string;
    store_ids: number[];
    opt_level: string;
    enabled: boolean;
    company_id: number;
    created_on: number;
    modified_by?: any;
    brand_ids: number[];
    created_by?: any;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    name?: string;
    uid?: number;
    business_type?: string;
    company_type?: string;
};
type CompanyBrandDetail = {
    total_article?: number;
    brand_id?: number;
    company_id?: number;
    brand_name?: string;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    brand?: number;
    company?: string;
    store?: number;
};
type StoreDetail = {
    modified_on?: string;
    manager?: any;
    additional_contacts?: any[];
    display_name?: string;
    store_type?: string;
    address?: any;
    name?: string;
    store_code?: string;
    documents?: any[];
    uid?: number;
    company_id?: number;
    created_on?: string;
    timing?: any;
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
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    mandatory?: boolean;
    range?: AttributeSchemaRange;
    type: string;
    format?: string;
    multi?: boolean;
    allowed_values?: string[];
};
type AttributeMasterFilter = {
    priority?: number;
    depends_on?: string[];
    indexing: boolean;
};
type GenderDetail = {
    meta?: AttributeMasterMeta;
    slug?: string;
    details?: AttributeMasterDetails;
    is_nested?: boolean;
    id?: string;
    schema?: AttributeMaster;
    name?: string;
    description?: string;
    departments?: string[];
    filters?: AttributeMasterFilter;
    logo?: string;
    enabled_for_end_consumer?: boolean;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    meta?: any;
    code?: string;
    status?: number;
    message?: string;
    errors?: any;
};
type DepartmentCreateUpdate = {
    slug?: string;
    tags?: string[];
    _cls?: string;
    _custom_json?: any;
    platforms?: any;
    name: string;
    uid?: number;
    is_active?: boolean;
    synonyms?: string[];
    logo: string;
    priority_order: number;
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
    uid?: string;
    contact?: string;
    user_id?: string;
    _id?: string;
};
type GetDepartment = {
    modified_on?: string;
    slug?: string;
    page_size?: number;
    name?: string;
    uid?: number;
    modified_by?: UserSerializer;
    is_active?: boolean;
    page_no?: number;
    created_on?: string;
    synonyms?: string[];
    created_by?: UserSerializer;
    item_type?: string;
    search?: string;
    logo?: string;
    priority_order?: number;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    meta?: any;
    code?: string;
    status?: number;
    message?: string;
    errors?: any;
};
type UserDetail = {
    user_id: string;
    super_user?: boolean;
    contact?: string;
    username: string;
};
type DepartmentModel = {
    modified_on: string;
    slug?: any;
    logo: string;
    _cls?: any;
    _custom_json?: any;
    verified_on?: string;
    verified_by?: UserDetail;
    uid?: number;
    name: any;
    is_active?: boolean;
    created_on: string;
    modified_by?: UserDetail;
    synonyms?: any[];
    created_by?: UserDetail;
    priority_order: number;
    _id?: any;
};
type ProductTemplate = {
    modified_on?: string;
    slug: string;
    is_archived?: boolean;
    name?: string;
    tag?: string;
    is_active?: boolean;
    description?: string;
    created_by?: any;
    modified_by?: any;
    created_on?: string;
    is_physical: boolean;
    departments?: string[];
    is_expirable: boolean;
    attributes?: string[];
    logo?: string;
    categories?: string[];
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    slug: string;
    id?: string;
    is_archived?: boolean;
    name?: string;
    tag?: string;
    is_active?: boolean;
    description?: string;
    is_physical: boolean;
    departments?: string[];
    is_expirable: boolean;
    attributes?: string[];
    logo?: string;
    categories?: string[];
};
type Properties = {
    return_config?: any;
    currency?: any;
    category_slug?: any;
    product_publish?: any;
    teaser_tag?: any;
    no_of_boxes?: any;
    highlights?: any;
    size_guide?: any;
    multi_size?: any;
    variants?: any;
    is_active?: any;
    sizes?: any;
    item_code?: any;
    tags?: any;
    command?: any;
    trader?: any;
    brand_uid?: any;
    trader_type?: any;
    country_of_origin?: any;
    name?: any;
    custom_order?: any;
    product_group_tag?: any;
    slug?: any;
    media?: any;
    is_dependent?: any;
    description?: any;
    short_description?: any;
    hsn_code?: any;
    item_type?: any;
};
type GlobalValidation = {
    definitions?: any;
    required?: string[];
    type?: string;
    description?: string;
    title?: string;
    properties?: Properties;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
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
type ProductDownloadItemsData = {
    brand?: string[];
    templates?: string[];
    type?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    template_tags?: any;
    data?: ProductDownloadItemsData;
    id?: string;
    task_id?: string;
    url?: string;
    completed_on?: string;
    seller_id?: number;
    status?: string;
    created_by?: VerifiedBy;
    trigger_on?: string;
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
    portrait: string;
    landscape: string;
    logo: string;
};
type Hierarchy = {
    l2: number;
    l1: number;
    department: number;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type CategoryRequestBody = {
    slug?: string;
    media?: Media2;
    hierarchy?: Hierarchy[];
    level: number;
    marketplaces?: CategoryMapping;
    name: string;
    is_active: boolean;
    synonyms?: string[];
    tryouts?: string[];
    departments: number[];
    priority?: number;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    modified_on?: string;
    slug?: string;
    id?: string;
    media?: Media2;
    hierarchy?: Hierarchy[];
    level: number;
    marketplaces?: CategoryMapping;
    name: string;
    uid?: number;
    modified_by?: any;
    is_active: boolean;
    created_by?: any;
    synonyms?: string[];
    created_on?: string;
    tryouts?: string[];
    departments: number[];
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
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type Trader = {
    name: any;
    type?: string;
    address?: string[];
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type CustomOrder = {
    manufacturing_time?: number;
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
};
type ProductCreateUpdate = {
    return_config: ReturnConfig;
    currency: string;
    uid?: number;
    category_slug: string;
    variants_group?: any;
    product_publish?: ProductPublish;
    departments: number[];
    teaser_tag?: TeaserTag;
    requester?: string;
    no_of_boxes?: number;
    highlights?: string[];
    _custom_json?: any;
    size_guide?: string;
    multi_size?: boolean;
    variants?: any;
    template_tag: string;
    company_id: number;
    is_active?: boolean;
    is_image_less_product?: boolean;
    item_code: any;
    is_set?: boolean;
    tags?: string[];
    trader: Trader[];
    brand_uid: number;
    bulk_job_id?: string;
    net_quantity?: NetQuantity;
    country_of_origin: string;
    action?: string;
    name: any;
    custom_order?: CustomOrder;
    product_group_tag?: string[];
    slug: string;
    media?: Media1[];
    change_request_id?: any;
    is_dependent?: boolean;
    description?: string;
    variant_media?: any;
    short_description?: string;
    item_type: string;
    tax_identifier: TaxIdentifier;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Image = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type Logo = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type Product = {
    currency?: string;
    uid?: number;
    category_slug?: string;
    product_publish?: ProductPublished;
    departments?: number[];
    is_expirable?: boolean;
    highlights?: string[];
    images?: Image[];
    _custom_json?: any;
    size_guide?: string;
    multi_size?: boolean;
    variants?: any;
    variant_group?: any;
    template_tag?: string;
    sizes?: any[];
    is_active?: boolean;
    item_code?: string;
    is_set?: boolean;
    brand_uid?: number;
    id?: string;
    all_sizes?: any[];
    country_of_origin?: string;
    image_nature?: string;
    name?: string;
    l3_mapping?: string[];
    custom_order?: any;
    is_physical?: boolean;
    color?: string;
    slug?: string;
    category_uid?: number;
    primary_color?: string;
    media?: Media1[];
    brand?: Brand;
    is_dependent?: boolean;
    description?: string;
    short_description?: string;
    hsn_code?: string;
    item_type?: string;
    tax_identifier?: any;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductCreateUpdateSchemaV2 = {
    return_config: ReturnConfig;
    currency: string;
    uid?: number;
    category_slug: string;
    variants_group?: any;
    product_publish?: ProductPublish;
    departments: number[];
    teaser_tag?: TeaserTag;
    requester?: string;
    no_of_boxes?: number;
    highlights?: string[];
    _custom_json?: any;
    size_guide?: string;
    multi_size?: boolean;
    variants?: any;
    template_tag: string;
    company_id: number;
    is_active?: boolean;
    is_image_less_product?: boolean;
    item_code: any;
    attributes: any;
    is_set?: boolean;
    tags?: string[];
    trader: Trader[];
    brand_uid: number;
    bulk_job_id?: string;
    net_quantity?: NetQuantity;
    country_of_origin: string;
    action?: string;
    name: any;
    custom_order?: CustomOrder;
    product_group_tag?: string[];
    slug: string;
    media?: Media1[];
    change_request_id?: any;
    is_dependent?: boolean;
    description?: string;
    variant_media?: any;
    short_description?: string;
    item_type: string;
    tax_identifier: TaxIdentifier;
};
type AttributeMasterSerializer = {
    unit?: string;
    departments: string[];
    created_by?: any;
    schema: AttributeMaster;
    suggestion?: string;
    raw_key?: string;
    modified_by?: any;
    filters: AttributeMasterFilter;
    tags?: string[];
    name?: string;
    created_on?: string;
    synonyms?: any;
    is_nested?: boolean;
    slug: string;
    details: AttributeMasterDetails;
    modified_on?: string;
    variant?: boolean;
    description?: string;
    logo?: string;
    enabled_for_end_consumer?: boolean;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateIdentifier = {
    gtin_value: string;
    gtin_type: string;
    primary?: boolean;
};
type ALLSizes = {
    item_weight_unit_of_measure: any;
    item_height: number;
    item_dimensions_unit_of_measure: string;
    item_weight: number;
    size: any;
    item_width: number;
    item_length: number;
    identifiers?: ValidateIdentifier[];
};
type ListALLSizes = {
    all_sizes?: ALLSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    user_id?: string;
    uid?: string;
    email?: string;
    username?: string;
};
type BulkJob = {
    stage?: string;
    file_path?: string;
    created_by?: UserInfo1;
    tracking_url?: string;
    failed?: number;
    is_active?: boolean;
    company_id: number;
    template_tag?: string;
    modified_by?: UserInfo1;
    cancelled_records?: any[];
    product_type?: string;
    department?: string;
    custom_template_tag?: string;
    total: number;
    created_on: string;
    modified_on?: string;
    failed_records?: any[];
    succeed?: number;
    cancelled?: number;
};
type BulkResponse = {
    modified_on?: string;
    is_active?: boolean;
    created_on: string;
    modified_by?: UserInfo1;
    batch_id: string;
    created_by?: UserInfo1;
};
type UserDetail1 = {
    user_id?: string;
    full_name?: string;
    username?: string;
};
type ProductBulkRequest = {
    stage?: string;
    modified_on?: string;
    failed_records?: string[];
    cancelled_records?: string[];
    succeed?: number;
    file_path?: string;
    failed?: number;
    total?: number;
    is_active?: boolean;
    company_id?: number;
    template_tag?: string;
    created_on?: string;
    cancelled?: number;
    modified_by?: UserDetail1;
    template?: ProductTemplate;
    created_by?: UserDetail1;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
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
    url: string;
    user: any;
    company_id?: number;
};
type UserCommon = {
    user_id?: string;
    company_id?: number;
    username?: string;
};
type Items = {
    modified_on?: string;
    failed_records?: string[];
    stage?: string;
    cancelled_records?: string[];
    id?: string;
    succeed?: number;
    tracking_url?: string;
    file_path?: string;
    failed?: number;
    retry?: number;
    is_active?: boolean;
    total?: number;
    created_on?: string;
    modified_by?: UserCommon;
    company_id?: number;
    cancelled?: number;
    created_by?: UserCommon;
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
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type ItemQuery = {
    uid?: number;
    item_code?: string;
    brand_uid?: number;
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
    item_weight_unit_of_measure?: string;
    price?: number;
    item_height?: number;
    item_dimensions_unit_of_measure?: string;
    quantity: number;
    currency: string;
    set?: InventorySet;
    item_weight?: number;
    size: any;
    store_code: string;
    item_width?: number;
    price_transfer?: number;
    expiration_date?: string;
    item_length?: number;
    price_effective: number;
    identifiers: GTIN[];
    is_set?: boolean;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type InventoryResponse = {
    price?: number;
    currency?: string;
    quantity?: number;
    seller_identifier?: string;
    inventory_updated_on?: string;
    store?: any;
    size?: string;
    sellable_quantity?: number;
    uid?: string;
    item_id?: number;
    price_transfer?: number;
    price_effective?: number;
    identifiers?: any;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ReturnConfig1 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type ManufacturerResponse = {
    name: string;
    is_default: boolean;
    address: string;
};
type Trader1 = {
    name: string;
    type: string;
    address: string[];
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    damaged?: QuantityBase;
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
    not_available?: QuantityBase;
};
type PriceMeta = {
    currency: string;
    effective: number;
    transfer: number;
    updated_at?: string;
    marked: number;
    tp_notes?: any;
};
type CompanyMeta = {
    id: number;
};
type DimensionResponse = {
    length: number;
    width: number;
    is_default: boolean;
    unit: string;
    height: number;
};
type BrandMeta = {
    name: string;
    id: number;
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type InventorySellerResponse = {
    meta?: any;
    stage?: string;
    return_config?: ReturnConfig1;
    size: string;
    manufacturer: ManufacturerResponse;
    uid: string;
    raw_meta?: any;
    identifier: any;
    created_by?: UserSerializer;
    track_inventory?: boolean;
    fragile: boolean;
    _custom_json?: any;
    is_active?: boolean;
    fynd_item_code: string;
    total_quantity: number;
    modified_by?: UserSerializer;
    added_on_store?: string;
    is_set?: boolean;
    tags?: string[];
    trader?: Trader1[];
    set?: InventorySet;
    store: StoreMeta;
    fynd_meta?: any;
    country_of_origin: string;
    quantities?: Quantities;
    item_id: number;
    price: PriceMeta;
    company: CompanyMeta;
    seller_identifier: string;
    dimension: DimensionResponse;
    brand: BrandMeta;
    weight: WeightResponse;
    fynd_article_code: string;
    expiration_date?: string;
    trace_id?: string;
    tax_identifier?: any;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    failed_records?: string[];
    modified_on?: string;
    stage?: string;
    cancelled_records?: string[];
    id?: string;
    succeed?: number;
    file_path?: string;
    failed?: number;
    modified_by?: any;
    is_active?: boolean;
    company_id?: number;
    created_on?: string;
    cancelled?: number;
    total?: number;
    created_by?: any;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    price_marked?: number;
    item_weight_unit_of_measure?: string;
    price?: number;
    currency?: string;
    seller_identifier: string;
    item_dimensions_unit_of_measure?: string;
    quantity?: number;
    tags?: string[];
    store_code: string;
    total_quantity?: number;
    expiration_date?: string;
    trace_id?: string;
    price_effective?: number;
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
    status?: string;
    trigger_on?: string;
};
type InventoryExportJob = {
    request_params?: any;
    url?: string;
    task_id: string;
    completed_on?: string;
    seller_id: number;
    status?: string;
    trigger_on?: string;
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
    price_marked?: number;
    tags?: string[];
    seller_identifier: string;
    store_id: number;
    total_quantity?: number;
    expiration_date?: string;
    trace_id?: string;
    price_effective?: number;
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
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    message: string;
    items?: InventoryResponseItem[];
};
type HsnUpsert = {
    tax2?: number;
    threshold1: number;
    hs2_code: string;
    uid?: number;
    threshold2?: number;
    is_active?: boolean;
    company_id: number;
    tax1: number;
    hsn_code: string;
    tax_on_mrp: boolean;
    tax_on_esp?: boolean;
};
type HsnCodesObject = {
    modified_on?: string;
    id?: string;
    tax2?: number;
    threshold1?: number;
    hs2_code?: string;
    threshold2?: number;
    company_id?: number;
    tax1?: number;
    hsn_code?: string;
    tax_on_mrp?: boolean;
    tax_on_esp?: boolean;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    has_next?: boolean;
    item_total?: number;
    size?: number;
    current?: string;
    has_previous?: boolean;
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
    rate: number;
    effective_date: string;
    threshold: number;
};
type HSNDataInsertV2 = {
    modified_on?: string;
    taxes: TaxSlab[];
    reporting_hsn: string;
    type: string;
    description: string;
    hsn_code: string;
    modified_by?: any;
    created_on?: string;
    country_code: string;
    created_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    slug?: string;
    banners?: ImageUrls;
    discount?: string;
    action?: Action;
    name?: string;
    uid?: number;
    departments?: string[];
    logo?: Media;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    slug?: string;
    name?: string;
    uid?: number;
    logo?: Media;
    priority_order?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
type ThirdLevelChild = {
    slug?: string;
    childs?: any[];
    banners?: ImageUrls;
    _custom_json?: any;
    action?: Action;
    name?: string;
    uid?: number;
};
type SecondLevelChild = {
    slug?: string;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    _custom_json?: any;
    action?: Action;
    name?: string;
    uid?: number;
};
type Child = {
    slug?: string;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    _custom_json?: any;
    action?: Action;
    name?: string;
    uid?: number;
};
type CategoryItems = {
    slug?: string;
    childs?: Child[];
    banners?: ImageUrls;
    action?: Action;
    name?: string;
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
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    page: Page;
    operators?: any;
    filters?: ProductFilters[];
};
type ProductDetail = {
    grouped_attributes?: ProductDetailGroupedAttribute[];
    type?: string;
    similars?: string[];
    uid?: number;
    product_online_date?: string;
    rating?: number;
    teaser_tag?: any;
    highlights?: string[];
    medias?: Media1[];
    item_code?: string;
    attributes?: any;
    rating_count?: number;
    image_nature?: string;
    name?: string;
    color?: string;
    slug: string;
    brand?: ProductBrand;
    has_variant?: boolean;
    description?: string;
    short_description?: string;
    promo_meta?: any;
    tryouts?: string[];
    item_type?: string;
};
type InventoryPage = {
    has_next?: boolean;
    item_total: number;
    type: string;
    next_id?: string;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    name?: string;
    email?: string;
    mobile_no: SellerPhoneNumber;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type UserSerializer1 = {
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
type GetAddressSerializer = {
    address2?: string;
    pincode?: number;
    country?: string;
    state?: string;
    landmark?: string;
    address1?: string;
    latitude?: number;
    city?: string;
    address_type?: string;
    country_code?: string;
    longitude?: number;
};
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetCompanySerializer = {
    modified_on?: string;
    stage?: string;
    business_type?: string;
    verified_on?: string;
    addresses?: GetAddressSerializer[];
    company_type?: string;
    verified_by?: UserSerializer2;
    uid?: number;
    name?: string;
    created_on?: string;
    modified_by?: UserSerializer2;
    created_by?: UserSerializer2;
    reject_reason?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetLocationSerializer = {
    stage?: string;
    notification_emails?: string[];
    manager?: LocationManagerSerializer;
    store_type?: string;
    uid?: number;
    timing?: LocationDayWiseSerializer[];
    integration_type?: LocationIntegrationType;
    created_by?: UserSerializer1;
    phone_number: string;
    _custom_json?: any;
    warnings?: any;
    modified_by?: UserSerializer1;
    display_name: string;
    gst_credentials?: InvoiceDetailsSerializer;
    verified_on?: string;
    verified_by?: UserSerializer1;
    name: string;
    code: string;
    documents?: Document[];
    created_on?: string;
    contact_numbers?: SellerPhoneNumber[];
    modified_on?: string;
    company?: GetCompanySerializer;
    product_return_config?: ProductReturnConfigSerializer;
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
type ApplicationDepartment = {
    _custom_json?: any;
    app_id: string;
    name?: string;
    uid: number;
    is_active?: boolean;
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
type CompanyTaxesSerializer = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
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
type GetCompanyProfileSerializerResponse = {
    _custom_json?: any;
    company_type: string;
    verified_on?: string;
    business_type: string;
    taxes?: CompanyTaxesSerializer[];
    modified_on?: string;
    addresses?: GetAddressSerializer[];
    contact_details?: ContactDetails;
    warnings?: any;
    name?: string;
    documents?: Document[];
    franchise_enabled?: boolean;
    modified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    created_by?: UserSerializer;
    notification_emails?: string[];
    created_on?: string;
    mode?: string;
    verified_by?: UserSerializer;
    business_info?: string;
    business_details?: BusinessDetails;
    uid: number;
    stage?: string;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type CreateUpdateAddressSerializer = {
    address2?: string;
    country: string;
    country_code?: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
    pincode: number;
    address1: string;
    landmark?: string;
    address_type: string;
};
type UpdateCompany = {
    franchise_enabled?: boolean;
    documents?: Document[];
    business_type?: string;
    _custom_json?: any;
    company_type?: string;
    taxes?: CompanyTaxesSerializer1[];
    addresses?: CreateUpdateAddressSerializer[];
    contact_details?: ContactDetails;
    reject_reason?: string;
    warnings?: any;
    business_info?: string;
    business_details?: BusinessDetails;
    notification_emails?: string[];
    name?: string;
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
    store_documents?: DocumentsObj;
    product?: DocumentsObj;
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
    uid?: number;
    stage?: string;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    _custom_json?: any;
    logo?: string;
    synonyms?: string[];
    _locale_language?: any;
    verified_on?: string;
    slug_key?: string;
    modified_on?: string;
    warnings?: any;
    name: string;
    modified_by?: UserSerializer;
    banner?: BrandBannerSerializer;
    created_by?: UserSerializer;
    description?: string;
    created_on?: string;
    mode?: string;
    verified_by?: UserSerializer;
    reject_reason?: string;
    uid?: number;
    stage?: string;
};
type CreateUpdateBrandRequestSerializer = {
    description?: string;
    company_id?: number;
    _custom_json?: any;
    logo: string;
    brand_tier?: string;
    banner?: BrandBannerSerializer;
    synonyms?: string[];
    _locale_language?: any;
    name: string;
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
    verified_on?: string;
    created_on?: string;
    business_type: string;
    market_channels?: string[];
    modified_by?: UserSerializer;
    company_type: string;
    _custom_json?: any;
    business_country_info?: BusinessCountryInfo;
    modified_on?: string;
    verified_by?: UserSerializer;
    details?: CompanyDetails;
    created_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    reject_reason?: string;
    notification_emails?: string[];
    name?: string;
    uid?: number;
    stage?: string;
};
type CompanyBrandSerializer = {
    verified_on?: string;
    created_on?: string;
    modified_by?: UserSerializer;
    company?: CompanySerializer;
    modified_on?: string;
    verified_by?: UserSerializer;
    reject_reason?: string;
    created_by?: UserSerializer;
    warnings?: any;
    brand?: GetBrandResponseSerializer;
    uid?: number;
    stage?: string;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    uid?: number;
    company: number;
};
type LocationSerializer = {
    display_name: string;
    timing?: LocationDayWiseSerializer[];
    documents?: Document[];
    product_return_config?: ProductReturnConfigSerializer;
    _custom_json?: any;
    code: string;
    company: number;
    gst_credentials?: InvoiceDetailsSerializer;
    manager?: LocationManagerSerializer;
    store_type?: string;
    address: GetAddressSerializer;
    notification_emails?: string[];
    warnings?: any;
    contact_numbers?: SellerPhoneNumber[];
    name: string;
    uid?: number;
    stage?: string;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleQuery = {
    item_id?: number;
    ignored_stores?: number[];
    size?: string;
};
type _ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type _AssignStoreArticle = {
    query?: _ArticleQuery;
    quantity?: number;
    meta?: any;
    group_id?: string;
    article_assignment?: _ArticleAssignment;
};
type AssignStoreRequestValidator = {
    company_id?: number;
    channel_type?: string;
    store_ids?: number[];
    articles?: _AssignStoreArticle[];
    app_id?: string;
    pincode?: string;
    channel_identifier?: string;
};
type AssignStoreResponseSerializer = {
    item_id?: number;
    store_id?: number;
    company_id?: number;
    price_marked?: number;
    quantity?: number;
    meta?: any;
    store_pincode?: string;
    index?: number;
    size?: string;
    s_city?: string;
    preice_effective?: number;
    status?: boolean;
    _id?: string;
    article_assignment?: _ArticleAssignment;
    uid?: string;
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
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Validity = {
    priority?: number;
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type Rule = {
    min?: number;
    value?: number;
    key?: number;
    discount_qty?: number;
    max?: number;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type RuleDefinition = {
    value_type: string;
    scope?: string[];
    currency_code?: string;
    type: string;
    is_exact?: boolean;
    applicable_on: string;
    calculate_on: string;
    auto_apply?: boolean;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CouponSchedule = {
    cron?: string;
    end?: string;
    next_schedule?: any[];
    duration?: number;
    start?: string;
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    codes?: string[];
    types?: string[];
    networks?: string[];
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type UsesRemaining = {
    app?: number;
    user?: number;
    total?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type Restrictions = {
    ordering_stores?: number[];
    post_order?: PostOrder;
    user_groups?: number[];
    platforms?: string[];
    coupon_allowed?: boolean;
    payments?: any;
    bulk_bundle?: BulkBundleRestriction;
    price_range?: PriceRange;
    uses?: UsesRestriction;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    description?: string;
    auto?: DisplayMetaDict;
    title?: string;
    remove?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    subtitle?: string;
};
type CouponAdd = {
    action?: CouponAction;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
    validity: Validity;
    state?: State;
    rule: Rule[];
    type_slug: string;
    ownership: Ownership;
    rule_definition: RuleDefinition;
    author?: CouponAuthor;
    tags?: string[];
    _schedule?: CouponSchedule;
    validation?: Validation;
    code: string;
    restrictions?: Restrictions;
    display_meta: DisplayMeta;
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
    action?: CouponAction;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
    validity: Validity;
    state?: State;
    rule: Rule[];
    type_slug: string;
    ownership: Ownership;
    rule_definition: RuleDefinition;
    author?: CouponAuthor;
    tags?: string[];
    _schedule?: CouponSchedule;
    validation?: Validation;
    code: string;
    restrictions?: Restrictions;
    display_meta: DisplayMeta;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionSchedule = {
    cron?: string;
    end?: string;
    published: boolean;
    next_schedule?: any[];
    duration?: number;
    start: string;
};
type DiscountOffer = {
    discount_amount?: number;
    min_offer_quantity?: number;
    discount_percentage?: number;
    max_discount_amount?: number;
    partial_can_ret?: boolean;
    max_usage_per_transaction?: number;
    discount_price?: number;
    apportion_discount?: boolean;
    max_offer_quantity?: number;
    code?: string;
};
type CompareObject = {
    greater_than_equals?: number;
    less_than_equals?: number;
    greater_than?: number;
    equals?: number;
    less_than?: number;
};
type ItemCriteria = {
    available_zones?: string[];
    item_sku?: string[];
    item_exclude_brand?: number[];
    item_id?: number[];
    item_exclude_sku?: string[];
    item_brand?: number[];
    cart_quantity?: CompareObject;
    item_exclude_id?: number[];
    item_exclude_store?: number[];
    item_category?: number[];
    cart_unique_item_amount?: CompareObject;
    buy_rules?: string[];
    all_items?: boolean;
    item_size?: string[];
    item_exclude_company?: number[];
    cart_unique_item_quantity?: CompareObject;
    cart_total?: CompareObject;
    item_company?: number[];
    item_store?: number[];
    item_exclude_category?: number[];
};
type DiscountRule = {
    offer: DiscountOffer;
    discount_type: string;
    item_criteria: ItemCriteria;
    buy_condition: string;
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
    uses?: PaymentAllowValue1;
    type: string;
    codes?: string[];
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type Restrictions1 = {
    user_id?: string[];
    post_order?: PostOrder1;
    user_registered?: UserRegistered;
    user_groups?: number[];
    platforms?: string[];
    payments?: PromotionPaymentModes[];
    anonymous_users?: boolean;
    uses: UsesRestriction1;
    order_quantity?: number;
};
type DisplayMeta1 = {
    description?: string;
    name?: string;
    offer_text?: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionListItem = {
    _custom_json?: any;
    visiblility?: Visibility;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    _schedule?: PromotionSchedule;
    application_id: string;
    mode: string;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    promotion_type: string;
    promo_group: string;
    apply_all_discount?: boolean;
    buy_rules: any;
    apply_exclusive?: string;
    code?: string;
    currency?: string;
    stackable?: boolean;
    author?: PromotionAuthor;
    calculate_on?: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    _custom_json?: any;
    visiblility?: Visibility;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    _schedule?: PromotionSchedule;
    application_id: string;
    mode: string;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    promotion_type: string;
    promo_group: string;
    apply_all_discount?: boolean;
    buy_rules: any;
    apply_exclusive?: string;
    code?: string;
    currency?: string;
    stackable?: boolean;
    author?: PromotionAuthor;
    calculate_on?: string;
};
type PromotionUpdate = {
    _custom_json?: any;
    visiblility?: Visibility;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    _schedule?: PromotionSchedule;
    application_id: string;
    mode: string;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    promotion_type: string;
    promo_group: string;
    apply_all_discount?: boolean;
    buy_rules: any;
    apply_exclusive?: string;
    code?: string;
    currency?: string;
    stackable?: boolean;
    author?: PromotionAuthor;
    calculate_on?: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    entity_slug?: string;
    description?: string;
    created_on?: string;
    title?: string;
    type?: string;
    entity_type?: string;
    modified_on?: string;
    example?: string;
    subtitle?: string;
    is_hidden?: boolean;
};
type CartItem = {
    size: string;
    quantity?: number;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
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
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    action?: ProductAction;
    slug?: string;
    type?: string;
    categories?: CategoryInfo[];
    images?: ProductImage[];
    uid?: number;
    brand?: BaseInfo;
    name?: string;
};
type ProductPrice = {
    effective?: number;
    currency_code?: string;
    add_on?: number;
    currency_symbol?: string;
    marked?: number;
    selling?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type ProductAvailability = {
    other_store_quantity?: number;
    is_valid?: boolean;
    deliverable?: boolean;
    out_of_stock?: boolean;
    sizes?: string[];
};
type FreeGiftItem = {
    item_name?: string;
    item_id?: number;
    item_price_details?: any;
    item_brand_name?: string;
    item_slug?: string;
    item_images_url?: string[];
};
type AppliedFreeArticles = {
    article_id?: string;
    quantity?: number;
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
};
type DiscountRulesApp = {
    raw_offer?: any;
    matched_buy_rules?: string[];
    offer?: any;
    item_criteria?: any;
};
type AppliedPromotion = {
    promotion_group?: string;
    promotion_type?: string;
    applied_free_articles?: AppliedFreeArticles[];
    promotion_name?: string;
    offer_text?: string;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRulesApp[];
    promo_id?: string;
    amount?: number;
    mrp_promotion?: boolean;
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
    store?: BaseInfo;
    extra_meta?: any;
    type?: string;
    product_group_tags?: string[];
    seller?: BaseInfo;
    parent_item_identifiers?: any;
    quantity?: number;
    price?: ArticlePriceInfo;
    uid?: string;
    size?: string;
};
type PromoMeta = {
    message?: string;
};
type CartProductInfo = {
    discount?: string;
    identifiers: CartProductIdentifer;
    product?: CartProduct;
    price?: ProductPriceInfo;
    availability?: ProductAvailability;
    is_set?: boolean;
    key?: string;
    message?: string;
    promotions_applied?: AppliedPromotion[];
    price_per_unit?: ProductPriceInfo;
    parent_item_identifiers?: any;
    article?: ProductArticle;
    quantity?: number;
    bulk_offer?: any;
    promo_meta?: PromoMeta;
    coupon_message?: string;
};
type DisplayBreakup = {
    value?: number;
    currency_code?: string;
    currency_symbol?: string;
    key?: string;
    message?: string[];
    display?: string;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    total?: number;
    description?: string;
    applicable?: number;
};
type CouponBreakup = {
    description?: string;
    max_discount_value?: number;
    value?: number;
    title?: string;
    coupon_type?: string;
    type?: string;
    message?: string;
    sub_title?: string;
    minimum_cart_value?: number;
    is_applied?: boolean;
    uid?: string;
    coupon_value?: number;
    code?: string;
};
type RawBreakup = {
    discount?: number;
    mrp_total?: number;
    you_saved?: number;
    vog?: number;
    fynd_cash?: number;
    coupon?: number;
    convenience_fee?: number;
    delivery_charge?: number;
    gst_charges?: number;
    subtotal?: number;
    total?: number;
    cod_charge?: number;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
    raw?: RawBreakup;
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
    phone?: number;
    country_code?: string;
    meta?: any;
    landmark?: string;
    area_code_slug?: string;
    city?: string;
    area_code: string;
    area?: string;
    address?: string;
    pincode?: number;
    state?: string;
    country?: string;
    name?: string;
    email?: string;
    address_type?: string;
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
    is_valid?: boolean;
    message?: string;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
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
    extra_meta?: any;
    size: string;
    cod_charges: number;
    meta?: CartItemMeta;
    product_id: number;
    payment_methods: MultiTenderPaymentMethod[];
    coupon_effective_discount: number;
    employee_discount?: number;
    delivery_charges: number;
    price_marked: number;
    quantity?: number;
    loyalty_discount?: number;
    price_effective: number;
    files?: OpenApiFiles[];
    amount_paid: number;
    cashback_applied: number;
};
type OpenApiPlatformCheckoutReq = {
    coupon_code: string;
    billing_address: ShippingAddress;
    cod_charges: number;
    currency_code?: string;
    cart_items: OpenApiOrderItem[];
    coupon?: string;
    delivery_charges: number;
    shipping_address?: ShippingAddress;
    files?: OpenApiFiles[];
    affiliate_order_id?: string;
    comment?: string;
    order_id?: string;
    payment_mode?: string;
    employee_discount?: any;
    loyalty_discount?: number;
    cart_value: number;
    payment_methods: MultiTenderPaymentMethod[];
    coupon_value: number;
    gstin?: string;
    cashback_applied: number;
};
type OpenApiCheckoutResponse = {
    message?: string;
    order_id: string;
    order_ref_id?: string;
    success?: boolean;
};
type AbandonedCart = {
    last_modified: string;
    created_on: string;
    cod_charges?: any;
    is_archive?: boolean;
    coupon?: any;
    checkout_mode?: string;
    promotion?: any;
    delivery_charges?: any;
    buy_now?: boolean;
    meta?: any;
    cashback: any;
    comment?: string;
    fynd_credits?: any;
    shipments?: any[];
    is_active?: boolean;
    cart_value?: number;
    payment_methods?: any[];
    expire_at: string;
    user_id: string;
    articles: any[];
    _id: string;
    uid: number;
    discount?: number;
    fc_index_map?: number[];
    pick_up_customer_details?: any;
    app_id?: string;
    order_id?: string;
    payment_mode?: string;
    payments?: any;
    merge_qty?: boolean;
    bulk_coupon_discount?: number;
    gstin?: string;
    is_default: boolean;
};
type AbandonedCartResponse = {
    message?: string;
    result?: any;
    items?: AbandonedCart[];
    success?: boolean;
    page?: Page;
};
type AddProductCart = {
    display?: string;
    extra_meta?: any;
    item_size?: string;
    pos?: boolean;
    item_id?: number;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    quantity?: number;
    article_id?: string;
    seller_id?: number;
    article_assignment?: any;
    store_id?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    coupon_text?: string;
    last_modified?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    breakup_values?: CartBreakup;
    comment?: string;
    is_valid?: boolean;
    message?: string;
    delivery_promise?: ShipmentPromise;
    checkout_mode?: string;
    id?: string;
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    buy_now?: boolean;
    gstin?: string;
    restrict_checkout?: boolean;
};
type AddCartDetailResponse = {
    partial?: boolean;
    message?: string;
    cart?: CartDetailResponse;
    success?: boolean;
};
type UpdateProductCart = {
    extra_meta?: any;
    identifiers: CartProductIdentifer;
    item_size?: string;
    item_id?: number;
    item_index?: number;
    quantity?: number;
    parent_item_identifiers?: any;
    article_id?: string;
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
