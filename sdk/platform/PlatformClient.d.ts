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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, UserDataInfo, Prices, PaymentModeInfo, ShipmentItemFulFillingStore, ShipmentStatus, PlatformItem, GSTDetailsData, BagUnit, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, ShipmentStatusData, ShipmentPayments, BagStateMapper, BagStatusHistory, OrderBrandName, BagConfigs, OrderBagArticle, Identifier, FinancialBreakup, BagGST, PlatformDeliveryAddress, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBags, UserDetailsData, FulfillingStore, TrackingList, DPDetailsData, OrderDetailsData, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, BagReturnableCancelableStatus, Attributes, Item, AffiliateMeta, AffiliateBagDetails, Brand, Dates, PDFLinks, DebugInfo, LockData, BuyerDetails, Formatted, ShipmentTimeStamp, EInvoice, EinvoiceInfo, ShipmentMeta, AffiliateDetails, Dimensions, Weight, ReturnConfig, Article, BagGSTDetails, B2BPODetails, BagMeta, EInvoicePortalDetails, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, StoreAddress, Store, ArticleDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, Products, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, OrderPriority, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, UserData, OrderInfo, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, BillingInfo, ShippingInfo, PaymentMethod, PaymentInfo, TaxInfo, ProcessingDates, Tax, Charge, LineItem, Shipment, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, BannerImage, ImageUrls, CollectionQuery, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, UserInfo, CollectionBadge, CollectionImage, CollectionBanner, SeoDetail, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Media2, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, Logo, ProductPublished, Image, Product, ProductListingResponse, TaxIdentifier, ProductPublish, NetQuantity, TeaserTag, Trader, CustomOrder, ProductCreateUpdateSchemaV2, AttributeMasterSerializer, ProductAttributesResponse, ProductResponse, ValidateIdentifier, ALLSizes, ListALLSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, BrandMeta, CompanyMeta, WeightResponse, DimensionResponse, ReturnConfig1, PriceMeta, QuantityBase, Quantities, ManufacturerResponse, Trader1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, SellerPhoneNumber, LocationManagerSerializer, UserSerializer1, GetAddressSerializer, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer2, LocationIntegrationType, ProductReturnConfigSerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, Website, BusinessDetails, ContactDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponSchedule, Validity, CouponAuthor, CouponAction, Ownership, UsesRemaining, UsesRestriction, PostOrder, BulkBundleRestriction, PaymentAllowValue, PaymentModes, PriceRange, Restrictions, Rule, DisplayMetaDict, DisplayMeta, RuleDefinition, State, Validation, CouponDateMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionSchedule, Ownership1, PromotionAction, UsesRemaining1, UsesRestriction1, PostOrder1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, DisplayMeta1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionAuthor, Visibility, PromotionDateMeta, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, DisplayBreakup, LoyaltyPoints, CouponBreakup, RawBreakup, CartBreakup, CartProductIdentifer, ProductAvailability, ProductPrice, ProductPriceInfo, PromoMeta, CategoryInfo, ProductImage, BaseInfo, ActionQuery, ProductAction, CartProduct, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, BasePrice, ArticlePriceInfo, ProductArticle, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    display_fields: string[];
    app_id: string;
    created: boolean;
    excluded_fields: string[];
    success: boolean;
    aggregators?: any[];
};
type ErrorCodeDescription = {
    success: boolean;
    code: string;
    description: string;
};
type PaymentGatewayConfig = {
    key: string;
    secret: string;
    merchant_salt: string;
    is_active?: boolean;
    config_type: string;
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
    small: string;
    large: string;
};
type IntentApp = {
    code?: string;
    outage?: any;
    display_name?: string;
    package_name?: string;
    logos?: PaymentModeLogo;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    fynd_vpa?: string;
    name?: string;
    code?: string;
    card_id?: string;
    card_isin?: string;
    card_brand_image?: string;
    retry_count?: number;
    compliant_with_tokenisation_guidelines?: boolean;
    expired?: boolean;
    intent_flow?: boolean;
    outage?: any;
    exp_month?: number;
    card_name?: string;
    exp_year?: number;
    display_name?: string;
    intent_app?: IntentApp[];
    display_priority?: number;
    card_type?: string;
    logo_url?: PaymentModeLogo;
    intent_app_error_dict_list?: IntentAppErrorList[];
    timeout?: number;
    nickname?: string;
    card_issuer?: string;
    intent_app_error_list?: string[];
    aggregator_name: string;
    card_reference?: string;
    card_number?: string;
    card_fingerprint?: string;
    card_token?: string;
    card_brand?: string;
    merchant_code?: string;
};
type RootPaymentMode = {
    name: string;
    anonymous_enable?: boolean;
    logo_url?: PaymentModeLogo;
    save_card?: boolean;
    display_name: string;
    list?: PaymentModeList[];
    aggregator_name?: string;
    logo?: string;
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
    is_default: boolean;
    customers: any;
    more_attributes: any;
    unique_transfer_no: any;
    is_active: boolean;
    payouts_aggregators: any[];
    transfer_type: string;
};
type PayoutBankDetails = {
    account_holder?: string;
    city?: string;
    branch_name?: string;
    pincode?: number;
    account_type: string;
    account_no?: string;
    country?: string;
    bank_name?: string;
    state?: string;
    ifsc_code: string;
};
type PayoutRequest = {
    unique_external_id: string;
    bank_details: PayoutBankDetails;
    aggregator: string;
    is_active: boolean;
    transfer_type: string;
    users: any;
};
type PayoutResponse = {
    payouts: any;
    bank_details: any;
    aggregator: string;
    payment_status: string;
    unique_transfer_no: string;
    created: boolean;
    is_active: boolean;
    success: boolean;
    transfer_type: string;
    users: any;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_default: boolean;
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
type BankDetailsForOTP = {
    account_holder: string;
    branch_name: string;
    account_no: string;
    bank_name: string;
    ifsc_code: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    success?: boolean;
    branch_name: string;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    transfer_mode: string;
    ifsc_code: string;
    subtitle: string;
    delights_user_name?: string;
    beneficiary_id: string;
    address: string;
    branch_name?: string;
    title: string;
    display_name: string;
    account_no: string;
    modified_on: string;
    mobile?: string;
    comment?: string;
    account_holder: string;
    is_active: boolean;
    bank_name: string;
    email: string;
    id: number;
    created_on: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    current_status?: string;
    payment_gateway?: string;
    extra_meta?: any;
    order_id?: string;
    payment_id?: string;
};
type MultiTenderPaymentMethod = {
    mode: string;
    name?: string;
    amount: number;
    meta?: MultiTenderPaymentMeta;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    success: boolean;
    message: string;
    order_id: string;
};
type UserDataInfo = {
    uid?: number;
    first_name?: string;
    email?: string;
    last_name?: string;
    avis_user_id?: string;
    gender?: string;
    mobile?: string;
    is_anonymous_user?: boolean;
    name?: string;
};
type Prices = {
    cod_charges?: number;
    tax_collected_at_source?: number;
    promotion_effective_discount?: number;
    price_effective?: number;
    refund_amount?: number;
    amount_paid_roundoff?: number;
    price_marked?: number;
    fynd_credits?: number;
    delivery_charge?: number;
    refund_credit?: number;
    amount_paid?: number;
    cashback?: number;
    discount?: number;
    cashback_applied?: number;
    value_of_good?: number;
    coupon_value?: number;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentStatus = {
    status: string;
    title: string;
    ops_status: string;
    actual_status: string;
    hex_code: string;
};
type PlatformItem = {
    department_id?: number;
    images?: string[];
    id?: number;
    code?: string;
    can_cancel?: boolean;
    l3_category_name?: string;
    color?: string;
    can_return?: boolean;
    image?: string[];
    size?: string;
    l1_category?: string[];
    name?: string;
    l3_category?: number;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    gst_fee: number;
    gstin_code: string;
    value_of_good: number;
    brand_calculated_amount: number;
};
type BagUnit = {
    group_id?: string;
    status: any;
    total_shipment_bags: number;
    prices?: Prices;
    ordering_channel: string;
    item?: PlatformItem;
    quantity: number;
    parent_promo_bags?: any;
    can_cancel?: boolean;
    line_number: number;
    gst?: GSTDetailsData;
    can_return?: boolean;
    shipment_id: string;
    applied_promos?: any;
    bag_id: number;
    identifier: string;
};
type ShipmentItem = {
    user?: UserDataInfo;
    fulfilling_centre: string;
    payment_methods?: any;
    total_bags_count: number;
    prices?: Prices;
    id: string;
    channel?: any;
    payment_mode_info?: PaymentModeInfo;
    application?: any;
    sla?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    created_at: string;
    shipment_created_at: number;
    total_shipments_in_order: number;
    shipment_status?: ShipmentStatus;
    bags?: BagUnit[];
};
type FilterInfoOption = {
    text: string;
    value?: string;
    name?: string;
};
type FiltersInfo = {
    text: string;
    value: string;
    type: string;
    options?: FilterInfoOption[];
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
    applied_filters?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type ShipmentStatusData = {
    status?: string;
    id?: number;
    bag_list?: number[];
    created_at?: string;
    shipment_id?: string;
};
type ShipmentPayments = {
    logo?: string;
    mode: string;
    source?: string;
};
type BagStateMapper = {
    app_state_name?: string;
    app_facing?: boolean;
    display_name: string;
    notify_customer?: boolean;
    journey_type: string;
    state_type: string;
    bs_id: number;
    app_display_name?: string;
    is_active?: boolean;
    name: string;
};
type BagStatusHistory = {
    delivery_awb_number?: string;
    bsh_id: number;
    status: string;
    display_name?: boolean;
    updated_at?: string;
    bag_state_mapper: BagStateMapper;
    state_id: number;
    reasons?: any[];
    forward?: boolean;
    state_type?: string;
    created_at: string;
    app_display_name?: boolean;
    store_id: number;
    shipment_id: string;
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    bag_id: number;
};
type OrderBrandName = {
    id: number;
    logo: string;
    brand_name: string;
    modified_on?: number;
    company: string;
    created_on: number;
};
type BagConfigs = {
    enable_tracking: boolean;
    is_active: boolean;
    is_returnable: boolean;
    allow_force_return: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
};
type OrderBagArticle = {
    return_config?: any;
    uid?: string;
    identifiers?: any;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    amount_paid_roundoff?: number;
    transfer_price: number;
    hsn_code: string;
    size: string;
    cashback_applied: number;
    coupon_value: number;
    tax_collected_at_source?: number;
    added_to_fynd_cash: boolean;
    total_units: number;
    gst_tag: string;
    price_effective: number;
    gst_tax_percentage: number;
    fynd_credits: number;
    delivery_charge: number;
    cashback: number;
    item_name: string;
    pm_price_split: any;
    price_marked: number;
    amount_paid: number;
    discount: number;
    brand_calculated_amount: number;
    cod_charges: number;
    coupon_effective_discount: number;
    promotion_effective_discount: number;
    gst_fee: string;
    refund_credit: number;
    value_of_good: number;
    identifiers: Identifier;
};
type BagGST = {
    gst_tag?: string;
    gst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
    gst_fee?: number;
    hsn_code?: string;
    gstin_code?: string;
    value_of_good?: number;
    brand_calculated_amount?: number;
};
type PlatformDeliveryAddress = {
    address1?: string;
    pincode?: string;
    landmark?: string;
    version?: string;
    state?: string;
    phone?: string;
    area?: string;
    city?: string;
    address_type?: string;
    contact_person?: string;
    address2?: string;
    updated_at?: string;
    email?: string;
    address_category?: string;
    longitude?: number;
    created_at?: string;
    latitude?: number;
    country?: string;
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
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
    promo_id?: string;
    promotion_type?: string;
    buy_rules?: BuyRules[];
    amount?: number;
    promotion_name?: string;
    article_quantity?: number;
};
type OrderBags = {
    item?: PlatformItem;
    line_number?: number;
    quantity?: number;
    display_name?: string;
    current_status?: string;
    brand?: OrderBrandName;
    bag_configs?: BagConfigs;
    seller_identifier?: string;
    can_cancel?: boolean;
    identifier?: string;
    parent_promo_bags?: any;
    article?: OrderBagArticle;
    financial_breakup?: FinancialBreakup[];
    entity_type?: string;
    gst_details?: BagGST;
    bag_id: number;
    prices?: Prices;
    delivery_address?: PlatformDeliveryAddress;
    can_return?: boolean;
    applied_promos?: AppliedPromos[];
};
type UserDetailsData = {
    pincode: string;
    phone: string;
    state: string;
    city: string;
    address: string;
    country: string;
    email: string;
    name: string;
};
type FulfillingStore = {
    pincode: string;
    fulfillment_channel: string;
    id: string;
    phone: string;
    contact_person: string;
    state: string;
    city: string;
    address: string;
    code: string;
    store_name: string;
    country: string;
    meta: any;
};
type TrackingList = {
    text: string;
    is_current?: boolean;
    status: string;
    time?: string;
    is_passed?: boolean;
};
type DPDetailsData = {
    pincode?: string;
    id?: string;
    awb_no?: string;
    gst_tag?: string;
    country?: string;
    track_url?: string;
    eway_bill_id?: string;
    name?: string;
};
type OrderDetailsData = {
    cod_charges?: string;
    order_date?: string;
    affiliate_id?: string;
    ordering_channel?: string;
    fynd_order_id: string;
    source?: string;
    tax_details?: any;
    ordering_channel_logo?: any;
    order_value?: string;
};
type ShipmentInfoResponse = {
    is_invoiced: boolean;
    custom_meta?: any[];
    status?: ShipmentStatusData;
    shipment_quantity?: number;
    user_agent?: string;
    due_date?: string;
    user_id: string;
    payments?: ShipmentPayments;
    forward_tracking_list?: any[];
    journey_type?: string;
    company: any;
    bag_status_history?: BagStatusHistory[];
    total_items?: number;
    escalation?: any;
    beneficiary_details?: boolean;
    is_pdsr?: string;
    refund_text?: string;
    can_break: string;
    user_info?: any;
    shipment_status?: string;
    bags?: OrderBags[];
    is_packaging_order: boolean;
    replacement_details?: string;
    mid?: string;
    delivery_details?: UserDetailsData;
    tracking_url: string;
    lock_status: string;
    affiliate_shipment_id: string;
    secured_delivery_flag?: string;
    fulfilling_store?: FulfillingStore;
    credit_note_id: string;
    can_cancel?: boolean;
    shipment_id: string;
    tracking_list?: TrackingList[];
    operational_status?: string;
    is_not_fynd_source: boolean;
    dp_details?: DPDetailsData;
    refund_details?: any;
    status_progress: number;
    forward_shipment_status?: any[];
    pay_button?: string;
    order_created_time?: string;
    order?: OrderDetailsData;
    order_type: string;
    delivery_slot?: any;
    enable_tracking?: boolean;
    total_bags?: number;
    billing_details?: UserDetailsData;
    delivery_status: any[];
    order_status: any;
    coupon?: any;
    forward_order_status?: any[];
    items: any[];
    packaging_type?: string;
    gst_details?: GSTDetailsData;
    picked_date?: string;
    invoice: any;
    vertical?: string;
    platform_logo: boolean;
    child_nodes?: string[];
    is_fynd_store?: string;
    priority_text?: string;
    fyndstore_emp: any;
    payment_mode?: string;
    prices?: Prices;
    ordering_store: any;
    bank_data?: any;
    is_fynd_coupon: boolean;
    can_return?: boolean;
    shipment_images?: string[];
    enable_dp_tracking?: string;
    go_green?: boolean;
    email_id: string;
    kirana_store_id?: string;
    current_shipment_status: any;
};
type PlatformShipment = {
    custom_meta?: any[];
    status?: ShipmentStatusData;
    shipment_quantity?: number;
    user_agent?: string;
    payments?: ShipmentPayments;
    journey_type?: string;
    bag_status_history?: BagStatusHistory[];
    total_items?: number;
    shipment_status?: string;
    bags?: OrderBags[];
    delivery_details?: UserDetailsData;
    fulfilling_store?: FulfillingStore;
    shipment_id: string;
    tracking_list?: TrackingList[];
    operational_status?: string;
    dp_details?: DPDetailsData;
    order?: OrderDetailsData;
    delivery_slot?: any;
    total_bags?: number;
    billing_details?: UserDetailsData;
    packaging_type?: string;
    gst_details?: GSTDetailsData;
    picked_date?: string;
    vertical?: string;
    platform_logo?: string;
    priority_text?: string;
    payment_mode?: string;
    prices?: Prices;
    shipment_images?: string[];
    enable_dp_tracking?: string;
};
type OrderDict = {
    order_date: string;
    fynd_order_id: string;
    shipment_count: number;
};
type ShipmentDetailsResponse = {
    custom_meta?: any[];
    shipments?: PlatformShipment[];
    order?: OrderDict;
    success: boolean;
};
type SubLane = {
    text?: string;
    value?: string;
    index?: number;
    total_items?: number;
    actions?: any[];
};
type SuperLane = {
    text: string;
    value: string;
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
    name?: string;
    display?: string;
};
type PlatformOrderItems = {
    order_created_time?: string;
    payment_mode?: string;
    order_id?: string;
    channel?: PlatformChannel;
    shipments?: PlatformShipment[];
    user_info?: UserDataInfo;
    breakup_values?: PlatformBreakupValues[];
    order_value?: number;
    total_order_value?: number;
    meta?: any;
};
type OrderListingResponse = {
    total_count?: number;
    lane?: string;
    success?: boolean;
    page?: Page;
    items?: PlatformOrderItems[];
    message?: string;
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    text: string;
    key: string;
    value: number;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    awb?: string;
    status?: string;
    account_name?: string;
    raw_status?: string;
    updated_at?: string;
    updated_time?: string;
    reason?: string;
    last_location_recieved_at?: string;
    meta?: any;
    shipment_type?: string;
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
    status?: string;
    report_created_at?: string;
    display_name?: string;
    report_type?: string;
    s3_key?: string;
    report_name?: string;
    report_requested_at?: string;
    request_details?: any;
    report_id?: string;
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
    message?: string;
    value?: string;
    type?: string;
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
    data?: any;
    do_invoice_label_generated: boolean;
    company_id?: string;
    invoice_status?: string;
    store_code?: string;
    label?: any;
    store_name?: string;
    invoice?: any;
    store_id?: string;
    batch_id: string;
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
    cdn?: URL;
    tags?: string[];
    file_path?: string;
    file_name?: string;
    size?: number;
    namespace?: string;
    operation?: string;
    content_type?: string;
    upload?: FileUploadResponse;
};
type BulkListingPage = {
    current?: number;
    total?: number;
    type?: string;
    size?: number;
    has_previous?: boolean;
    has_next?: boolean;
};
type bulkListingData = {
    status?: string;
    user_id?: string;
    user_name?: string;
    file_name?: string;
    batch_id?: string;
    failed_shipments?: any[];
    id?: string;
    processing?: number;
    store_name?: string;
    successful?: number;
    failed?: number;
    excel_url?: string;
    store_id?: number;
    company_id?: number;
    successful_shipments?: any[];
    total?: number;
    store_code?: string;
    uploaded_on?: string;
    processing_shipments?: string[];
};
type BulkListingResponse = {
    page?: BulkListingPage;
    data?: bulkListingData[];
    error?: string;
    success?: boolean;
};
type ManifestPage = {
    current?: string;
    total?: number;
    type?: string;
    size?: string;
    has_previous?: boolean;
    has_next?: boolean;
};
type DateRange = {
    from_date?: string;
    to_date?: string;
};
type ManifestFilter = {
    sales_channel_name?: string;
    date_range?: DateRange;
    sales_channels?: string;
    dp_ids?: string;
    lane?: string;
    dp_name?: string;
    stores?: string;
    store_name?: string;
};
type GeneratedManifestItem = {
    status?: string;
    created_by?: string;
    manifest_id?: string;
    created_at?: string;
    company_id?: number;
    is_active?: boolean;
    filters?: ManifestFilter;
};
type GeneratedManifestResponse = {
    page?: ManifestPage;
    items?: GeneratedManifestItem[];
};
type ManifestDetailItem = {
    awb?: string;
    order_id?: string;
    invoice_id?: string;
    shipment_id?: string;
    item_qty?: number;
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
    status?: string;
    uid?: number;
    id?: number;
    user_id?: number;
    created_by?: string;
    manifest_id?: string;
    created_at?: string;
    company_id?: number;
    is_active?: boolean;
    meta?: ManifestDetailMeta;
    filters?: ManifestFilter;
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
    message?: string;
    status?: boolean;
};
type BulkActionDetailsDataField = {
    processing_shipments_count?: number;
    successful_shipments_count?: number;
    failed_shipments_count?: number;
    total_shipments_count?: number;
    company_id?: string;
    batch_id?: string;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    data?: BulkActionDetailsDataField[];
    failed_records?: string[];
    status?: boolean;
    user_id?: string;
    error?: string[];
    uploaded_by?: string;
    success?: string;
    uploaded_on?: string;
    message?: string;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    is_active: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
};
type Attributes = {
    gender?: string[];
    brand_name?: string;
    marketer_name?: string;
    marketer_address?: string;
    primary_color_hex?: string;
    essential?: string;
    primary_color?: string;
    primary_material?: string;
    name?: string;
};
type Item = {
    webstore_product_url?: string;
    slug_key: string;
    l2_category_id?: number;
    code?: string;
    size: string;
    name: string;
    item_id: number;
    department_id?: number;
    brand: string;
    can_cancel?: boolean;
    l3_category_name?: string;
    last_updated_at?: string;
    image: string[];
    l1_category?: string[];
    brand_id: number;
    meta?: any;
    l1_category_id?: number;
    attributes: Attributes;
    branch_url?: string;
    color?: string;
    can_return?: boolean;
    gender?: string;
    l2_category?: string[];
    l3_category?: number;
};
type AffiliateMeta = {
    loyalty_discount?: number;
    due_date?: string;
    size_level_total_qty?: number;
    employee_discount?: number;
    order_item_id?: string;
    channel_order_id?: string;
    box_type?: string;
    coupon_code?: string;
    channel_shipment_id?: string;
    quantity?: number;
    is_priority?: boolean;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
};
type Brand = {
    script_last_ran?: string;
    start_date?: string;
    logo?: string;
    credit_note_allowed?: boolean;
    brand_name: string;
    modified_on?: number;
    pickup_location?: string;
    company: string;
    is_virtual_invoice?: boolean;
    created_on?: number;
    brand_id: number;
    invoice_prefix?: string;
    credit_note_expiry_days?: number;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type PDFLinks = {
    credit_note_url?: string;
    invoice_a6?: string;
    label_a4?: string;
    label_a6?: string;
    label?: string;
    label_pos?: string;
    po_invoice?: string;
    invoice_a4?: string;
    b2b?: string;
    invoice_pos?: string;
    invoice?: string;
    invoice_type: string;
    label_type: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type LockData = {
    mto?: boolean;
    lock_message?: string;
    locked?: boolean;
};
type BuyerDetails = {
    pincode: number;
    state: string;
    city: string;
    address: string;
    gstin: string;
    ajio_site_id?: string;
    name: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type EInvoice = {
    acknowledge_date?: string;
    acknowledge_no?: number;
    error_message?: string;
    error_code?: string;
    irn?: string;
    signed_invoice?: string;
    signed_qr_code?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type ShipmentMeta = {
    fulfilment_priority_text?: string;
    forward_affiliate_order_id?: string;
    awb_number?: string;
    due_date?: string;
    weight: number;
    return_details?: any;
    debug_info?: DebugInfo;
    lock_data?: LockData;
    ewaybill_info?: any;
    auto_trigger_dp_assignment_acf: boolean;
    forward_affiliate_shipment_id?: string;
    return_affiliate_shipment_id?: string;
    dp_name?: string;
    marketplace_store_id?: string;
    b2b_buyer_details?: BuyerDetails;
    bag_weight?: any;
    return_store_node?: number;
    po_number?: string;
    external?: any;
    assign_dp_from_sb?: boolean;
    dp_options?: any;
    order_type?: string;
    formatted?: Formatted;
    store_invoice_updated_date?: string;
    b2c_buyer_details?: any;
    same_store_available: boolean;
    packaging_name?: string;
    shipment_weight?: number;
    timestamp?: ShipmentTimeStamp;
    dp_id?: string;
    box_type?: string;
    return_affiliate_order_id?: string;
    shipment_volumetric_weight?: number;
    return_awb_number?: string;
    dp_sort_key?: string;
    einvoice_info?: EinvoiceInfo;
};
type AffiliateDetails = {
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    affiliate_shipment_id: string;
    affiliate_bag_id: string;
    company_affiliate_tag?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_store_id: string;
    affiliate_order_id: string;
    shipment_meta: ShipmentMeta;
    ad_id?: string;
};
type Dimensions = {
    width?: number;
    length?: number;
    height?: number;
    is_default?: boolean;
    unit?: string;
};
type Weight = {
    is_default?: boolean;
    unit?: string;
    shipping?: number;
};
type ReturnConfig = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Article = {
    a_set?: any;
    uid: string;
    _id: string;
    seller_identifier: string;
    code?: string;
    is_set?: boolean;
    esp_modified?: any;
    child_details?: any;
    dimensions?: Dimensions;
    weight?: Weight;
    size: string;
    return_config?: ReturnConfig;
    raw_meta?: any;
    identifiers: Identifier;
};
type BagGSTDetails = {
    tax_collected_at_source: number;
    cgst_tax_percentage: number;
    hsn_code_id: string;
    gst_tag: string;
    igst_tax_percentage: number;
    cgst_gst_fee: string;
    sgst_gst_fee: string;
    gst_tax_percentage: number;
    is_default_hsn_code?: boolean;
    gst_fee: number;
    sgst_tax_percentage: number;
    igst_gst_fee: string;
    hsn_code: string;
    gstin_code?: string;
    value_of_good: number;
    brand_calculated_amount: number;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    po_tax_amount?: number;
    item_base_price?: number;
    po_line_amount?: number;
    partial_can_ret?: boolean;
    docker_number?: string;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type EInvoicePortalDetails = {
    password?: string;
    user?: string;
    username?: string;
};
type Document = {
    ds_type: string;
    value: string;
    legal_name: string;
    url?: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEinvoice = {
    enabled: boolean;
    password?: string;
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
type StoreMeta = {
    notification_emails?: string[];
    gst_number?: string;
    display_name: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    timing?: any[];
    documents?: StoreDocuments;
    ewaybill_portal_details?: any;
    gst_credentials: StoreGstCredentials;
    product_return_config?: any;
    additional_contact_details?: any;
    stage: string;
};
type StoreAddress = {
    address1: string;
    address2?: string;
    country_code: string;
    latitude: number;
    landmark?: string;
    pincode: number;
    phone: string;
    email?: string;
    address_category: string;
    longitude: number;
    version?: string;
    state: string;
    contact_person: string;
    area?: string;
    updated_at: string;
    created_at: string;
    address_type: string;
    city: string;
    country: string;
};
type Store = {
    address1: string;
    address2?: string;
    code?: string;
    packaging_material_count?: number;
    latitude: number;
    name: string;
    brand_store_tags?: string[];
    mall_name?: string;
    pincode: string;
    store_active_from?: string;
    s_id: string;
    parent_store_id?: number;
    phone: number;
    store_email: string;
    longitude: number;
    is_active?: boolean;
    order_integration_id?: string;
    location_type: string;
    alohomora_user_id?: number;
    contact_person: string;
    state: string;
    vat_no?: string;
    updated_at?: string;
    mall_area?: string;
    created_at: string;
    is_enabled_for_recon?: boolean;
    company_id: number;
    brand_id?: any;
    meta: StoreMeta;
    login_username: string;
    fulfillment_channel: string;
    city: string;
    store_address_json?: StoreAddress;
    country: string;
    is_archived?: boolean;
};
type ArticleDetails = {
    status?: any;
};
type BagDetailsPlatformResponse = {
    status: BagReturnableCancelableStatus;
    item: Item;
    affiliate_bag_details: AffiliateBagDetails;
    line_number?: number;
    restore_coupon?: boolean;
    journey_type: string;
    bag_status_history?: BagStatusHistory;
    b_type?: string;
    quantity?: number;
    display_name?: string;
    brand: Brand;
    current_status: BagStatusHistory;
    dates?: Dates;
    b_id: number;
    bag_status: BagStatusHistory[];
    seller_identifier?: string;
    shipment_id?: string;
    operational_status?: string;
    identifier?: string;
    bag_update_time?: number;
    order_integration_id?: string;
    tags?: string[];
    affiliate_details?: AffiliateDetails;
    parent_promo_bags?: any;
    article: Article;
    financial_breakup: FinancialBreakup[];
    entity_type?: string;
    original_bag_list?: number[];
    gst_details: BagGSTDetails;
    qc_required?: any;
    current_operational_status: BagStatusHistory;
    meta?: BagMeta;
    restore_promos?: any;
    ordering_store?: Store;
    prices: Prices;
    no_of_bags_order?: number;
    reasons?: any[];
    article_details?: ArticleDetails;
    applied_promos?: any[];
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    current: number;
    item_total: number;
    page_type: string;
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
    shipment_id?: string;
    error?: string;
    message?: string;
    status?: number;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    error_trace?: string;
    message: string;
    status: number;
};
type StoreReassign = {
    item_id?: string;
    affiliate_order_id?: string;
    set_id?: string;
    mongo_article_id?: string;
    affiliate_id?: string;
    bag_id?: number;
    fynd_order_id?: string;
    store_id: number;
    reason_ids?: number[];
    affiliate_bag_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    reason_text: string;
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    id?: string;
    affiliate_bag_id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    entity_type: string;
    action_type: string;
    action: string;
};
type Bags = {
    bag_id?: number;
    is_locked?: boolean;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    shipment_id?: string;
    affiliate_shipment_id?: string;
    lock_status?: boolean;
    is_shipment_locked?: boolean;
    bags?: Bags[];
    original_filter?: OriginalFilter;
    affiliate_id?: string;
    is_bag_locked?: boolean;
    status?: string;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    check_response?: CheckResponse[];
    message?: string;
};
type AnnouncementResponse = {
    title?: string;
    logo_url?: string;
    platform_id?: string;
    company_id?: number;
    to_datetime?: string;
    description?: string;
    id: number;
    platform_name?: string;
    from_datetime?: string;
    created_at?: string;
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
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    products?: Products[];
    reasons?: ReasonsData;
    identifier: string;
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
    status?: string;
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
    force_transition?: boolean;
};
type ShipmentsResponse = {
    meta?: any;
    final_state?: any;
    message?: string;
    stack_trace?: string;
    identifier?: string;
    status?: number;
    exception?: string;
    code?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    phone: number;
    state: string;
    pincode: string;
    address2?: string;
    country: string;
    mobile: number;
    email: string;
    city: string;
    first_name: string;
    address1?: string;
    last_name: string;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type ArticleDetails1 = {
    _id: string;
    brand_id: number;
    attributes: any;
    dimension: any;
    quantity: number;
    weight: any;
    category: any;
};
type ShipmentDetails = {
    affiliate_shipment_id: string;
    meta?: any;
    box_type?: string;
    articles: ArticleDetails1[];
    shipments: number;
    fulfillment_id: number;
    dp_id?: number;
};
type LocationDetails = {
    fulfillment_id: number;
    fulfillment_type: string;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    source: string;
    to_pincode: string;
    journey: string;
    shipment: ShipmentDetails[];
    action: string;
    identifier: string;
    location_details?: LocationDetails;
    payment_mode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    hsn_code_id: string;
    transfer_price: number;
    seller_identifier: string;
    pdf_links?: MarketPlacePdf;
    modified_on: string;
    price_effective: number;
    store_id: number;
    identifier: any;
    company_id: number;
    avl_qty: number;
    fynd_store_id: string;
    amount_paid: number;
    sku: string;
    _id: string;
    item_id: number;
    unit_price: number;
    price_marked: number;
    discount: number;
    item_size: string;
    quantity: number;
    affiliate_store_id: string;
    delivery_charge: number;
    affiliate_meta: any;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderInfo = {
    order_value: number;
    shipping_address: OrderUser;
    order_priority?: OrderPriority;
    shipment?: ShipmentData;
    delivery_charges: number;
    affiliate_order_id?: string;
    coupon?: string;
    bags: AffiliateBag[];
    discount: number;
    cod_charges: number;
    user: UserData;
    billing_address: OrderUser;
    items: any;
    payment?: any;
    payment_mode: string;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    meta?: AffiliateAppConfigMeta[];
    owner: string;
    token: string;
    updated_at: string;
    name: string;
    secret: string;
    description?: string;
    id: string;
    created_at: string;
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
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
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
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    create_user?: boolean;
    bag_end_state?: string;
    article_lookup?: string;
    store_lookup?: string;
    affiliate: Affiliate;
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
    success?: boolean;
    message?: string;
};
type ActionInfo = {
    description: string;
    display_text: string;
    id: number;
    slug: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l3_detail?: string;
    ticket_id?: string;
    l2_detail?: string;
    createdat: string;
    message: string;
    l1_detail?: string;
    user: string;
    bag_id?: number;
    ticket_url?: string;
    type: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    shipment_id: number;
    country_code: string;
    message: string;
    order_id: string;
    phone_number: number;
    customer_name: string;
    brand_name: string;
    amount_paid: number;
    payment_mode: string;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    bag_id: number;
    slug: string;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    shipment_id?: string;
    meta: Meta;
    bag_list?: number[];
    status?: string;
    remarks?: string;
    id: number;
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
};
type OrderStatusData = {
    shipment_details?: ShipmentDetail[];
    order_details: OrderDetails;
    errors?: string[];
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    shipment_ids?: string[];
    order_type: string;
    qc_required: string;
    dp_id: number;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type BillingInfo = {
    house_no: string;
    gender?: string;
    country_code: string;
    state: string;
    address2?: string;
    primary_mobile_number: string;
    alternate_mobile_number?: string;
    city: string;
    title?: string;
    state_code: string;
    pincode: string;
    country: string;
    alternate_email?: string;
    first_name: string;
    last_name?: string;
    floor_no: string;
    middle_name?: string;
    address1: string;
    primary_email: string;
    customer_code?: string;
    external_customer_code?: string;
};
type ShippingInfo = {
    slot?: any[];
    house_no?: string;
    gender?: string;
    country_code: string;
    landmark?: string;
    state: string;
    geo_location?: any;
    address2?: string;
    primary_mobile_number: string;
    alternate_mobile_number?: string;
    city: string;
    title?: string;
    state_code: string;
    shipping_type?: string;
    country: string;
    pincode: string;
    alternate_email?: string;
    first_name: string;
    last_name?: string;
    floor_no?: string;
    middle_name?: string;
    address_type?: string;
    address1: string;
    primary_email: string;
    customer_code?: string;
    external_customer_code?: string;
};
type PaymentMethod = {
    collect_by: string;
    meta?: any;
    refund_by: string;
    name: string;
    transaction_data?: any;
    mode: string;
    amount: number;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
    pack_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_by_date?: string;
};
type Tax = {
    amount: any;
    breakup: any[];
    tax_exempt: boolean;
    name: string;
};
type Charge = {
    tax: Tax;
    name: string;
    amount: any;
    type: string;
    code?: string;
};
type LineItem = {
    meta?: any;
    charges: Charge[];
    seller_identifier: string;
    quantity?: number;
    external_line_id?: string;
    custom_messasge?: string;
};
type Shipment = {
    meta?: any;
    priority?: number;
    external_shipment_id?: number;
    processing_dates?: ProcessingDates;
    location_id: number;
    line_items: LineItem[];
};
type CreateOrderAPI = {
    billing_info: BillingInfo;
    meta?: any;
    shipping_info: ShippingInfo;
    payment_info: PaymentInfo;
    tax_info?: TaxInfo;
    shipments: Shipment[];
    charges: Charge[];
    external_order_id?: string;
    application_id?: string;
    currency_info: any;
    external_creation_date?: string;
};
type CreateOrderErrorReponse = {
    info?: any;
    meta?: string;
    message: string;
    stack_trace?: string;
    request_id?: string;
    status: number;
    exception?: string;
    code?: string;
};
type PaymentMethods = {
    collect_by?: string;
    mode?: string;
    refund_by?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    shipment_assignment?: string;
    payment_info?: CreateChannelPaymentInfo;
    location_reassignment?: boolean;
    logo_url?: any;
    lock_states?: string[];
    dp_configuration?: DpConfiguration;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_upserted?: boolean;
    is_inserted?: boolean;
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
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    is_active?: boolean;
    words?: string[];
    result: SearchKeywordResult;
    app_id?: string;
    _custom_json?: any;
};
type GetSearchWordsData = {
    is_active?: boolean;
    words?: string[];
    result?: any;
    app_id?: string;
    uid?: string;
    _custom_json?: any;
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
    type?: string;
    url?: string;
    params?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type Media = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type AutocompleteResult = {
    display?: string;
    _custom_json?: any;
    action?: AutocompleteAction;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    words?: string[];
    app_id?: string;
    results?: AutocompleteResult[];
    _custom_json?: any;
};
type GetAutocompleteWordsData = {
    words?: string[];
    app_id?: string;
    results?: any[];
    uid?: string;
    _custom_json?: any;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    results?: any[];
    words?: string[];
    _custom_json?: any;
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
    is_active: boolean;
    meta?: any;
    choice: string;
    company_id?: number;
    name: string;
    created_on?: string;
    page_visibility?: string[];
    created_by?: any;
    modified_on?: string;
    modified_by?: any;
    id?: string;
    logo?: string;
    slug: string;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    is_active: boolean;
    meta?: any;
    choice: string;
    company_id?: number;
    name: string;
    created_on?: string;
    page_visibility?: string[];
    created_by?: any;
    modified_on?: string;
    modified_by?: any;
    logo?: string;
    slug: string;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
};
type ProductBundleUpdateRequest = {
    is_active: boolean;
    meta?: any;
    choice: string;
    company_id?: number;
    name: string;
    page_visibility?: string[];
    modified_on?: string;
    modified_by?: any;
    logo?: string;
    slug: string;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
};
type LimitedProductData = {
    short_description?: string;
    attributes?: any;
    item_code?: string;
    name?: string;
    price?: any;
    images?: string[];
    slug?: string;
    identifier?: any;
    sizes?: string[];
    uid?: number;
    country_of_origin?: string;
    quantity?: number;
};
type Size = {
    is_available?: boolean;
    display?: string;
    value?: string;
    quantity?: number;
};
type Price = {
    min_effective?: number;
    max_effective?: number;
    max_marked?: number;
    currency?: string;
    min_marked?: number;
};
type GetProducts = {
    max_quantity?: number;
    product_details?: LimitedProductData;
    auto_add_to_cart?: boolean;
    product_uid?: number;
    allow_remove?: boolean;
    sizes?: Size[];
    min_quantity?: number;
    price?: Price;
    auto_select?: boolean;
};
type GetProductBundleResponse = {
    is_active?: boolean;
    meta?: any;
    choice?: string;
    company_id?: number;
    name?: string;
    page_visibility?: string[];
    logo?: string;
    slug?: string;
    products?: GetProducts[];
    same_store_assignment?: boolean;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    brand_id?: number;
    subtitle?: string;
    company_id?: number;
    name: string;
    guide?: Guide;
    title: string;
    tag?: string;
    description?: string;
    image?: string;
    created_by?: any;
    modified_on?: string;
    modified_by?: any;
    id?: string;
    created_on?: string;
    active?: boolean;
};
type SizeGuideResponse = {
    brand_id?: number;
    guide?: any;
    company_id?: number;
    name?: string;
    subtitle?: string;
    title?: string;
    tag?: string;
    created_by?: any;
    modified_on?: string;
    modified_by?: any;
    id?: string;
    created_on?: string;
    active?: boolean;
};
type MOQData = {
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
};
type SEOData = {
    description?: any;
    title?: any;
};
type OwnerAppItemResponse = {
    moq?: MOQData;
    alt_text?: any;
    is_gift?: boolean;
    seo?: SEOData;
    is_cod?: boolean;
};
type ApplicationItemMOQ = {
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationItemMeta = {
    moq?: ApplicationItemMOQ;
    _custom_meta?: MetaFields[];
    alt_text?: any;
    is_gift?: boolean;
    seo?: ApplicationItemSEO;
    is_cod?: boolean;
    _custom_json?: any;
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
    current: number;
    total_count: number;
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
    is_active: boolean;
    name: string;
    unit?: string;
    priority: number;
    logo?: string;
    slug?: string;
    key?: string;
    display_type: string;
};
type AppConfigurationDetail = {
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    name?: string;
    template_slugs?: string[];
    app_id: string;
    priority: number;
    logo?: string;
    slug: string;
    is_default: boolean;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_active: boolean;
    name?: string;
    default_key: string;
    app_id: string;
    priority: number;
    logo?: string;
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
    filter_types?: string[];
    key?: string;
    display?: string;
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
    similar?: any;
    compare?: any;
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
    name: string;
    priority: number;
    logo?: string;
    key: string;
    display_type: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    size?: ProductSize;
    is_active: boolean;
    subtitle?: string;
    title?: string;
    priority: number;
    logo?: string;
    key: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type ConfigurationBucketPoints = {
    start?: number;
    display?: string;
    end?: number;
};
type ConfigurationListingFilterValue = {
    map?: any;
    map_values?: any[];
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    is_active: boolean;
    type: string;
    value_config?: ConfigurationListingFilterValue;
    name?: string;
    priority: number;
    logo?: string;
    display_name?: string;
    key: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    name?: string;
    priority: number;
    logo?: string;
    key: string;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type AppCatalogConfiguration = {
    type?: string;
    config_type: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    config_id?: string;
    created_by?: any;
    app_id: string;
    modified_on?: string;
    modified_by?: any;
    id?: string;
    created_on?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    type?: string;
    config_type: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    config_id?: string;
    created_by?: any;
    app_id: string;
    modified_on?: string;
    modified_by?: any;
    created_on?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_id?: string;
    app_id: string;
    id?: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    name?: string;
    value?: string;
    is_selected?: boolean;
};
type ProductFiltersKey = {
    kind?: string;
    display: string;
    name: string;
    logo?: string;
    operators?: string[];
};
type ProductFiltersValue = {
    display: string;
    min?: number;
    is_selected: boolean;
    value: any;
    count?: number;
    selected_max?: number;
    max?: number;
    query_format?: string;
    currency_symbol?: string;
    display_format?: string;
    currency_code?: string;
    selected_min?: number;
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
type BannerImage = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type Media1 = {
    type?: string;
    meta?: any;
    url: string;
};
type GetCollectionDetailNest = {
    allow_facets?: boolean;
    description?: string;
    meta?: any;
    visible_facets_keys?: string[];
    tag?: string[];
    badge?: any;
    app_id?: string;
    action?: Action;
    slug?: string;
    is_active?: boolean;
    type?: string;
    allow_sort?: boolean;
    name?: string;
    banners?: ImageUrls;
    query?: CollectionQuery[];
    cron?: any;
    priority?: number;
    logo?: Media1;
    uid?: string;
    _schedule?: any;
};
type CollectionListingFilterType = {
    name?: string;
    is_selected?: boolean;
    display?: string;
};
type CollectionListingFilterTag = {
    name?: string;
    is_selected?: boolean;
    display?: string;
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
type UserInfo = {
    uid?: string;
    email?: string;
    user_id?: string;
    username?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionSchedule = {
    duration?: number;
    next_schedule?: NextSchedule[];
    start?: string;
    end?: string;
    cron?: string;
};
type CreateCollection = {
    allow_facets?: boolean;
    is_visible?: boolean;
    description?: string;
    published?: boolean;
    _custom_json?: any;
    meta?: any;
    visible_facets_keys?: string[];
    _locale_language?: any;
    created_by?: UserInfo;
    badge?: CollectionBadge;
    app_id: string;
    modified_by?: UserInfo;
    slug: string;
    type: string;
    is_active?: boolean;
    allow_sort?: boolean;
    name: string;
    banners: CollectionBanner;
    query?: CollectionQuery[];
    seo?: SeoDetail;
    tags?: string[];
    priority?: number;
    logo: CollectionImage;
    sort_on?: string;
    _schedule?: CollectionSchedule;
};
type CollectionCreateResponse = {
    allow_facets?: boolean;
    description?: string;
    meta?: any;
    visible_facets_keys?: string[];
    tag?: string[];
    badge?: any;
    app_id?: string;
    slug?: string;
    is_active?: boolean;
    type?: string;
    allow_sort?: boolean;
    name?: string;
    banners?: ImageUrls;
    query?: CollectionQuery[];
    cron?: any;
    priority?: number;
    logo?: BannerImage;
    sort_on?: string;
    _schedule?: any;
};
type CollectionDetailResponse = {
    is_active?: boolean;
    type?: string;
    allow_sort?: boolean;
    allow_facets?: boolean;
    meta?: any;
    name?: string;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    tag?: string[];
    description?: string;
    query?: CollectionQuery[];
    app_id?: string;
    badge?: any;
    priority?: number;
    logo?: Media1;
    slug?: string;
    _schedule?: any;
    cron?: any;
};
type UpdateCollection = {
    allow_facets?: boolean;
    is_visible?: boolean;
    description?: string;
    _custom_json?: any;
    published?: boolean;
    meta?: any;
    visible_facets_keys?: string[];
    _locale_language?: any;
    badge?: CollectionBadge;
    modified_by?: UserInfo;
    slug?: string;
    is_active?: boolean;
    allow_sort?: boolean;
    type?: string;
    name?: string;
    banners?: CollectionBanner;
    query?: CollectionQuery[];
    seo?: SeoDetail;
    tags?: string[];
    priority?: number;
    logo?: CollectionImage;
    sort_on?: string;
    _schedule?: CollectionSchedule;
};
type ProductBrand = {
    name?: string;
    uid?: number;
    action?: Action;
    logo?: Media1;
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
    min?: number;
    max?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingDetail = {
    brand?: ProductBrand;
    rating_count?: number;
    description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    similars?: string[];
    promo_meta?: any;
    attributes?: any;
    rating?: number;
    highlights?: string[];
    image_nature?: string;
    slug: string;
    item_type?: string;
    type?: string;
    color?: string;
    teaser_tag?: any;
    short_description?: string;
    discount?: string;
    medias?: Media1[];
    name?: string;
    tryouts?: string[];
    sellable?: boolean;
    price?: ProductListingPrice;
    item_code?: string;
    product_online_date?: string;
    has_variant?: boolean;
    uid?: number;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    page?: Page;
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
    message?: string;
    items_not_updated?: number[];
};
type CatalogInsightItem = {
    count?: number;
    out_of_stock_count?: number;
    sellable_count?: number;
};
type CatalogInsightBrand = {
    available_articles?: number;
    total_sizes?: number;
    total_articles?: number;
    name?: string;
    available_sizes?: number;
    article_freshness?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    brand_ids?: number[];
    platform?: string;
    company_id?: number;
    store_ids?: number[];
    enabled?: boolean;
    opt_level: string;
};
type CompanyOptIn = {
    brand_ids: number[];
    platform: string;
    company_id: number;
    store_ids: number[];
    enabled: boolean;
    opt_level: string;
    created_by?: any;
    modified_on: number;
    modified_by?: any;
    created_on: number;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    name?: string;
    uid?: number;
    company_type?: string;
    business_type?: string;
};
type CompanyBrandDetail = {
    company_id?: number;
    brand_name?: string;
    total_article?: number;
    brand_id?: number;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    store?: number;
    brand?: number;
    company?: string;
};
type StoreDetail = {
    documents?: any[];
    address?: any;
    store_code?: string;
    name?: string;
    additional_contacts?: any[];
    store_type?: string;
    company_id?: number;
    manager?: any;
    modified_on?: string;
    display_name?: string;
    timing?: any;
    uid?: number;
    created_on?: string;
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
type AttributeMasterFilter = {
    indexing: boolean;
    depends_on?: string[];
    priority?: number;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    type: string;
    mandatory?: boolean;
    range?: AttributeSchemaRange;
    multi?: boolean;
    format?: string;
    allowed_values?: string[];
};
type GenderDetail = {
    meta?: AttributeMasterMeta;
    filters?: AttributeMasterFilter;
    details?: AttributeMasterDetails;
    name?: string;
    schema?: AttributeMaster;
    description?: string;
    id?: string;
    is_nested?: boolean;
    logo?: string;
    slug?: string;
    enabled_for_end_consumer?: boolean;
    departments?: string[];
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    meta?: any;
    code?: string;
    errors?: any;
    status?: number;
};
type UserSerializer = {
    contact?: string;
    _id?: string;
    user_id?: string;
    uid?: string;
    username?: string;
};
type GetDepartment = {
    synonyms?: string[];
    item_type?: string;
    is_active?: boolean;
    page_no?: number;
    name?: string;
    page_size?: number;
    search?: string;
    created_by?: UserSerializer;
    slug?: string;
    modified_on?: string;
    modified_by?: UserSerializer;
    priority_order?: number;
    logo?: string;
    uid?: number;
    created_on?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    meta?: any;
    code?: string;
    errors?: any;
    status?: number;
};
type DepartmentCreateUpdate = {
    _cls?: string;
    synonyms?: string[];
    is_active?: boolean;
    tags?: string[];
    platforms?: any;
    name: string;
    slug?: string;
    priority_order: number;
    logo: string;
    uid?: number;
    _custom_json?: any;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    super_user?: boolean;
    contact?: string;
    user_id: string;
    username: string;
};
type DepartmentModel = {
    _cls?: any;
    synonyms?: any[];
    uid?: number;
    verified_on?: string;
    is_active?: boolean;
    name: any;
    _id?: any;
    verified_by?: UserDetail;
    created_by?: UserDetail;
    modified_on: string;
    modified_by?: UserDetail;
    priority_order: number;
    logo: string;
    slug?: any;
    created_on: string;
    _custom_json?: any;
};
type ProductTemplate = {
    is_active?: boolean;
    attributes?: string[];
    is_archived?: boolean;
    name?: string;
    is_physical: boolean;
    tag?: string;
    description?: string;
    created_by?: any;
    modified_on?: string;
    modified_by?: any;
    logo?: string;
    slug: string;
    created_on?: string;
    categories?: string[];
    is_expirable: boolean;
    departments?: string[];
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    is_active?: boolean;
    attributes?: string[];
    is_archived?: boolean;
    name?: string;
    is_physical: boolean;
    tag?: string;
    description?: string;
    id?: string;
    logo?: string;
    slug: string;
    categories?: string[];
    is_expirable: boolean;
    departments?: string[];
};
type Properties = {
    no_of_boxes?: any;
    hsn_code?: any;
    description?: any;
    product_publish?: any;
    size_guide?: any;
    highlights?: any;
    command?: any;
    sizes?: any;
    slug?: any;
    media?: any;
    currency?: any;
    item_type?: any;
    short_description?: any;
    teaser_tag?: any;
    is_active?: any;
    multi_size?: any;
    name?: any;
    return_config?: any;
    variants?: any;
    trader_type?: any;
    is_dependent?: any;
    category_slug?: any;
    tags?: any;
    product_group_tag?: any;
    item_code?: any;
    brand_uid?: any;
    country_of_origin?: any;
    trader?: any;
    custom_order?: any;
};
type GlobalValidation = {
    type?: string;
    properties?: Properties;
    title?: string;
    definitions?: any;
    description?: string;
    required?: string[];
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
    template_tags?: any;
    seller_id?: number;
    task_id?: string;
    completed_on?: string;
    created_by?: VerifiedBy;
    data?: ProductDownloadItemsData;
    url?: string;
    id?: string;
    trigger_on?: string;
    status?: string;
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
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Media2 = {
    landscape: string;
    portrait: string;
    logo: string;
};
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type Category = {
    synonyms?: string[];
    is_active: boolean;
    marketplaces?: CategoryMapping;
    name: string;
    level: number;
    departments: number[];
    tryouts?: string[];
    created_on?: string;
    created_by?: any;
    slug?: string;
    modified_by?: any;
    modified_on?: string;
    priority?: number;
    id?: string;
    uid?: number;
    media?: Media2;
    hierarchy?: Hierarchy[];
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    synonyms?: string[];
    is_active: boolean;
    marketplaces?: CategoryMapping;
    name: string;
    level: number;
    departments: number[];
    tryouts?: string[];
    priority?: number;
    slug?: string;
    media?: Media2;
    hierarchy?: Hierarchy[];
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type Logo = {
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Image = {
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type Product = {
    is_set?: boolean;
    tax_identifier?: any;
    hsn_code?: string;
    brand?: Brand;
    custom_order?: any;
    description?: string;
    product_publish?: ProductPublished;
    _custom_json?: any;
    primary_color?: string;
    size_guide?: string;
    is_physical?: boolean;
    all_sizes?: any[];
    highlights?: string[];
    image_nature?: string;
    sizes?: any[];
    slug?: string;
    media?: Media1[];
    is_expirable?: boolean;
    currency?: string;
    item_type?: string;
    short_description?: string;
    is_active?: boolean;
    color?: string;
    multi_size?: boolean;
    name?: string;
    images?: Image[];
    variants?: any;
    is_dependent?: boolean;
    category_slug?: string;
    item_code?: string;
    brand_uid?: number;
    template_tag?: string;
    l3_mapping?: string[];
    id?: string;
    uid?: number;
    country_of_origin?: string;
    variant_group?: any;
    category_uid?: number;
    departments?: number[];
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code_id?: string;
    hsn_code?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
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
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
};
type ProductCreateUpdateSchemaV2 = {
    is_set?: boolean;
    tax_identifier: TaxIdentifier;
    no_of_boxes?: number;
    description?: string;
    product_publish?: ProductPublish;
    _custom_json?: any;
    bulk_job_id?: string;
    attributes: any;
    company_id: number;
    size_guide?: string;
    highlights?: string[];
    action?: string;
    sizes: any[];
    slug: string;
    media?: Media1[];
    currency: string;
    net_quantity?: NetQuantity;
    item_type: string;
    short_description?: string;
    teaser_tag?: TeaserTag;
    is_active?: boolean;
    multi_size?: boolean;
    variant_media?: any;
    name: string;
    requester?: string;
    change_request_id?: any;
    return_config: ReturnConfig;
    variants?: any;
    is_dependent?: boolean;
    is_image_less_product?: boolean;
    category_slug: string;
    tags?: string[];
    product_group_tag?: string[];
    item_code: string;
    brand_uid: number;
    template_tag: string;
    uid?: number;
    country_of_origin: string;
    variant_group?: any;
    trader: Trader[];
    custom_order?: CustomOrder;
    departments: number[];
};
type AttributeMasterSerializer = {
    synonyms?: any;
    schema: AttributeMaster;
    description?: string;
    raw_key?: string;
    details: AttributeMasterDetails;
    created_by?: any;
    modified_by?: any;
    slug: string;
    created_on?: string;
    unit?: string;
    is_nested?: boolean;
    variant?: boolean;
    name?: string;
    tags?: string[];
    filters: AttributeMasterFilter;
    suggestion?: string;
    modified_on?: string;
    logo?: string;
    enabled_for_end_consumer?: boolean;
    departments: string[];
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ProductResponse = {
    data: any;
};
type ValidateIdentifier = {
    primary?: boolean;
    gtin_value: string;
    gtin_type: string;
};
type ALLSizes = {
    size: any;
    item_weight_unit_of_measure: any;
    item_height: number;
    item_length: number;
    item_dimensions_unit_of_measure: string;
    item_weight: number;
    identifiers?: ValidateIdentifier[];
    item_width: number;
};
type ListALLSizes = {
    all_sizes?: ALLSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    user_id?: string;
    username?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    failed?: number;
    failed_records?: string[];
    is_active?: boolean;
    total?: number;
    file_path?: string;
    cancelled?: number;
    template?: ProductTemplate;
    company_id?: number;
    succeed?: number;
    template_tag?: string;
    created_by?: UserDetail1;
    modified_on?: string;
    modified_by?: UserDetail1;
    stage?: string;
    cancelled_records?: string[];
    created_on?: string;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    uid?: string;
    email?: string;
    user_id?: string;
    username?: string;
};
type BulkJob = {
    total?: number;
    failed?: number;
    is_active?: boolean;
    cancelled?: number;
    failed_records?: any[];
    file_path?: string;
    company_id: number;
    succeed?: number;
    template_tag?: string;
    tracking_url?: string;
    created_by?: UserInfo1;
    modified_on?: string;
    modified_by?: UserInfo1;
    stage?: string;
    cancelled_records?: any[];
    created_on: string;
    custom_template_tag?: string;
};
type BulkResponse = {
    batch_id: string;
    is_active?: boolean;
    created_by?: UserInfo1;
    modified_on?: string;
    modified_by?: UserInfo1;
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
    user_id?: string;
    username?: string;
};
type Items = {
    failed?: number;
    file_path?: string;
    failed_records?: string[];
    is_active?: boolean;
    total?: number;
    cancelled?: number;
    company_id?: number;
    succeed?: number;
    tracking_url?: string;
    created_by?: UserCommon;
    retry?: number;
    modified_on?: string;
    modified_by?: UserCommon;
    id?: string;
    stage?: string;
    cancelled_records?: string[];
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
    item_id?: number;
    size?: string;
    company_id?: number;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    size?: string;
    uid?: string;
    item_id?: number;
    price_transfer?: number;
    inventory_updated_on?: string;
    sellable_quantity?: number;
    store?: any;
    identifiers?: any;
    price?: number;
    quantity?: number;
    currency?: string;
    seller_identifier?: string;
    price_effective?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ItemQuery = {
    uid?: number;
    brand_uid?: number;
    item_code?: string;
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
    primary?: boolean;
    gtin_value: any;
    gtin_type: string;
};
type InvSize = {
    size: any;
    is_set?: boolean;
    price_transfer?: number;
    store_code: string;
    item_weight_unit_of_measure?: string;
    item_height?: number;
    expiration_date?: string;
    item_length?: number;
    set?: InventorySet;
    item_dimensions_unit_of_measure?: string;
    item_weight?: number;
    identifiers: GTIN[];
    price?: number;
    quantity: number;
    currency: string;
    item_width?: number;
    price_effective: number;
};
type InventoryRequest = {
    company_id: number;
    item: ItemQuery;
    sizes: InvSize[];
};
type BrandMeta = {
    name: string;
    id: number;
};
type CompanyMeta = {
    id: number;
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type DimensionResponse = {
    height: number;
    width: number;
    unit: string;
    is_default: boolean;
    length: number;
};
type ReturnConfig1 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type PriceMeta = {
    transfer: number;
    tp_notes?: any;
    updated_at?: string;
    effective: number;
    marked: number;
    currency: string;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
    damaged?: QuantityBase;
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
type InventorySellerResponse = {
    is_set?: boolean;
    tax_identifier?: any;
    brand: BrandMeta;
    fragile: boolean;
    track_inventory?: boolean;
    set?: InventorySet;
    store: StoreMeta;
    company: CompanyMeta;
    trace_id?: string;
    weight: WeightResponse;
    dimension: DimensionResponse;
    _custom_json?: any;
    size: string;
    meta?: any;
    fynd_meta?: any;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    stage?: string;
    seller_identifier: string;
    added_on_store?: string;
    is_active?: boolean;
    total_quantity: number;
    return_config?: ReturnConfig1;
    identifier: any;
    item_id: number;
    price: PriceMeta;
    expiration_date?: string;
    tags?: string[];
    fynd_item_code: string;
    quantities?: Quantities;
    raw_meta?: any;
    uid: string;
    country_of_origin: string;
    manufacturer: ManufacturerResponse;
    trader?: Trader1[];
    fynd_article_code: string;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    failed?: number;
    failed_records?: string[];
    file_path?: string;
    cancelled?: number;
    is_active?: boolean;
    total?: number;
    company_id?: number;
    succeed?: number;
    created_by?: any;
    modified_on?: string;
    modified_by?: any;
    id?: string;
    stage?: string;
    cancelled_records?: string[];
    created_on?: string;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    tags?: string[];
    price_marked?: number;
    store_code: string;
    item_weight_unit_of_measure?: string;
    total_quantity?: number;
    price?: number;
    item_dimensions_unit_of_measure?: string;
    trace_id?: string;
    expiration_date?: string;
    quantity?: number;
    currency?: string;
    seller_identifier: string;
    price_effective?: number;
};
type InventoryBulkRequest = {
    company_id: number;
    user?: any;
    batch_id: string;
    sizes: InventoryJobPayload[];
};
type InventoryExportJob = {
    seller_id: number;
    task_id: string;
    completed_on?: string;
    request_params?: any;
    url?: string;
    trigger_on?: string;
    status?: string;
};
type InventoryExportRequest = {
    store?: number[];
    type?: string;
    brand?: number[];
};
type InventoryExportResponse = {
    seller_id: number;
    task_id: string;
    request_params?: any;
    trigger_on?: string;
    status?: string;
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
    tags?: string[];
    price_marked?: number;
    total_quantity?: number;
    store_id: number;
    expiration_date?: string;
    trace_id?: string;
    seller_identifier: string;
    price_effective?: number;
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
type HsnCodesObject = {
    threshold2?: number;
    hs2_code?: string;
    hsn_code?: string;
    company_id?: number;
    tax2?: number;
    tax_on_mrp?: boolean;
    tax_on_esp?: boolean;
    modified_on?: string;
    id?: string;
    tax1?: number;
    threshold1?: number;
};
type PageResponse = {
    size?: number;
    current?: string;
    has_previous?: boolean;
    has_next?: boolean;
    item_total?: number;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    threshold2?: number;
    is_active?: boolean;
    hs2_code: string;
    hsn_code: string;
    company_id: number;
    tax2?: number;
    tax_on_mrp: boolean;
    tax_on_esp?: boolean;
    tax1: number;
    uid?: number;
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
    rate: number;
    effective_date: string;
    cess?: number;
    threshold: number;
};
type HSNDataInsertV2 = {
    type: string;
    hsn_code: string;
    taxes: TaxSlab[];
    country_code: string;
    description: string;
    created_by?: any;
    modified_on?: string;
    modified_by?: any;
    created_on?: string;
    reporting_hsn: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    discount?: string;
    name?: string;
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
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
    priority_order?: number;
    logo?: Media;
    uid?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    name?: string;
    banners?: ImageUrls;
    slug?: string;
    childs?: any[];
    action?: Action;
    uid?: number;
    _custom_json?: any;
};
type SecondLevelChild = {
    name?: string;
    banners?: ImageUrls;
    slug?: string;
    childs?: ThirdLevelChild[];
    action?: Action;
    uid?: number;
    _custom_json?: any;
};
type Child = {
    name?: string;
    banners?: ImageUrls;
    slug?: string;
    childs?: SecondLevelChild[];
    action?: Action;
    uid?: number;
    _custom_json?: any;
};
type CategoryItems = {
    name?: string;
    banners?: ImageUrls;
    slug?: string;
    childs?: Child[];
    action?: Action;
    uid?: number;
};
type DepartmentCategoryTree = {
    items?: CategoryItems[];
    department?: string;
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
    page: Page;
    sort_on?: ProductSortOn[];
    operators?: any;
};
type ProductDetail = {
    brand?: ProductBrand;
    rating_count?: number;
    description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    similars?: string[];
    promo_meta?: any;
    attributes?: any;
    rating?: number;
    highlights?: string[];
    image_nature?: string;
    slug: string;
    item_type?: string;
    type?: string;
    color?: string;
    teaser_tag?: any;
    short_description?: string;
    medias?: Media1[];
    name?: string;
    tryouts?: string[];
    item_code?: string;
    product_online_date?: string;
    has_variant?: boolean;
    uid?: number;
};
type InventoryPage = {
    type: string;
    has_previous?: boolean;
    next_id?: string;
    has_next?: boolean;
    item_total: number;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    name?: string;
    email?: string;
    mobile_no: SellerPhoneNumber;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetAddressSerializer = {
    city?: string;
    state?: string;
    latitude?: number;
    landmark?: string;
    country_code?: string;
    longitude?: number;
    address_type?: string;
    country?: string;
    pincode?: number;
    address1?: string;
    address2?: string;
};
type GetCompanySerializer = {
    verified_on?: string;
    business_type?: string;
    name?: string;
    company_type?: string;
    reject_reason?: string;
    verified_by?: UserSerializer1;
    created_by?: UserSerializer1;
    modified_on?: string;
    modified_by?: UserSerializer1;
    addresses?: GetAddressSerializer[];
    stage?: string;
    uid?: number;
    created_on?: string;
};
type InvoiceCredSerializer = {
    password?: string;
    enabled?: boolean;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    weekday: string;
    opening?: LocationTimingSerializer;
    open: boolean;
};
type GetLocationSerializer = {
    documents?: Document[];
    manager?: LocationManagerSerializer;
    company?: GetCompanySerializer;
    _custom_json?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    notification_emails?: string[];
    warnings?: any;
    created_by?: UserSerializer2;
    modified_by?: UserSerializer2;
    stage?: string;
    display_name: string;
    created_on?: string;
    verified_on?: string;
    address: GetAddressSerializer;
    name: string;
    integration_type?: LocationIntegrationType;
    phone_number: string;
    verified_by?: UserSerializer2;
    contact_numbers?: SellerPhoneNumber[];
    code: string;
    store_type?: string;
    modified_on?: string;
    product_return_config?: ProductReturnConfigSerializer;
    timing?: LocationDayWiseSerializer[];
    uid?: number;
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
    is_active?: boolean;
    name?: string;
    app_id: string;
    logo?: string;
    uid: number;
    _custom_json?: any;
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
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
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
    stage?: string;
    modified_by?: UserSerializer;
    mode?: string;
    uid: number;
    modified_on?: string;
    franchise_enabled?: boolean;
    business_type: string;
    taxes?: CompanyTaxesSerializer[];
    created_on?: string;
    verified_on?: string;
    business_details?: BusinessDetails;
    business_info?: string;
    notification_emails?: string[];
    _custom_json?: any;
    documents?: Document[];
    name?: string;
    addresses?: GetAddressSerializer[];
    warnings?: any;
    company_type: string;
    contact_details?: ContactDetails;
    business_country_info?: BusinessCountryInfo;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
};
type CreateUpdateAddressSerializer = {
    city: string;
    country: string;
    longitude: number;
    address2?: string;
    address1: string;
    pincode: number;
    state: string;
    latitude: number;
    landmark?: string;
    country_code?: string;
    address_type: string;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type UpdateCompany = {
    name?: string;
    documents?: Document[];
    business_details?: BusinessDetails;
    addresses?: CreateUpdateAddressSerializer[];
    reject_reason?: string;
    warnings?: any;
    company_type?: string;
    franchise_enabled?: boolean;
    business_info?: string;
    contact_details?: ContactDetails;
    business_type?: string;
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer1[];
    _custom_json?: any;
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
    brand?: DocumentsObj;
    uid?: number;
    company_documents?: DocumentsObj;
    store?: DocumentsObj;
    product?: DocumentsObj;
    store_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    stage?: string;
    modified_by?: UserSerializer;
    banner?: BrandBannerSerializer;
    mode?: string;
    uid?: number;
    modified_on?: string;
    logo?: string;
    slug_key?: string;
    created_on?: string;
    reject_reason?: string;
    synonyms?: string[];
    description?: string;
    verified_on?: string;
    _locale_language?: any;
    _custom_json?: any;
    name: string;
    warnings?: any;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    name: string;
    banner?: BrandBannerSerializer;
    uid?: number;
    logo: string;
    synonyms?: string[];
    company_id?: number;
    _locale_language?: any;
    brand_tier?: string;
    description?: string;
    _custom_json?: any;
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanyDetails = {
    website_url?: string;
    socials?: CompanySocialAccounts[];
};
type CompanySerializer = {
    verified_on?: string;
    created_on?: string;
    name?: string;
    modified_by?: UserSerializer;
    market_channels?: string[];
    stage?: string;
    addresses?: GetAddressSerializer[];
    uid?: number;
    reject_reason?: string;
    company_type: string;
    modified_on?: string;
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    notification_emails?: string[];
    created_by?: UserSerializer;
    details?: CompanyDetails;
    verified_by?: UserSerializer;
    _custom_json?: any;
};
type CompanyBrandSerializer = {
    verified_on?: string;
    created_on?: string;
    stage?: string;
    modified_by?: UserSerializer;
    company?: CompanySerializer;
    brand?: GetBrandResponseSerializer;
    uid?: number;
    reject_reason?: string;
    warnings?: any;
    modified_on?: string;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    uid?: number;
    company: number;
    brands: number[];
};
type LocationSerializer = {
    stage?: string;
    name: string;
    documents?: Document[];
    company: number;
    uid?: number;
    warnings?: any;
    store_type?: string;
    code: string;
    contact_numbers?: SellerPhoneNumber[];
    address: GetAddressSerializer;
    manager?: LocationManagerSerializer;
    display_name: string;
    notification_emails?: string[];
    gst_credentials?: InvoiceDetailsSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    _custom_json?: any;
    timing?: LocationDayWiseSerializer[];
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
    strategy?: string;
    level?: string;
};
type _AssignStoreArticle = {
    quantity?: number;
    group_id?: string;
    query?: _ArticleQuery;
    article_assignment?: _ArticleAssignment;
    meta?: any;
};
type AssignStoreRequestValidator = {
    articles?: _AssignStoreArticle[];
    pincode?: string;
    app_id?: string;
    company_id?: number;
    channel_identifier?: string;
    channel_type?: string;
    store_ids?: number[];
};
type AssignStoreResponseSerializer = {
    store_id?: number;
    preice_effective?: number;
    index?: number;
    s_city?: string;
    quantity?: number;
    uid?: string;
    _id?: string;
    article_assignment?: _ArticleAssignment;
    item_id?: number;
    company_id?: number;
    size?: string;
    price_marked?: number;
    meta?: any;
    status?: boolean;
    store_pincode?: string;
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
type CouponSchedule = {
    duration?: number;
    cron?: string;
    start?: string;
    end?: string;
    next_schedule?: any[];
};
type Validity = {
    priority?: number;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type UsesRemaining = {
    user?: number;
    app?: number;
    total?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    types?: string[];
    networks?: string[];
    codes?: string[];
    iins?: string[];
};
type PriceRange = {
    min?: number;
    max?: number;
};
type Restrictions = {
    uses?: UsesRestriction;
    platforms?: string[];
    post_order?: PostOrder;
    bulk_bundle?: BulkBundleRestriction;
    user_groups?: number[];
    coupon_allowed?: boolean;
    payments?: any;
    ordering_stores?: number[];
    price_range?: PriceRange;
};
type Rule = {
    min?: number;
    max?: number;
    value?: number;
    discount_qty?: number;
    key?: number;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    title?: string;
    remove?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    description?: string;
    subtitle?: string;
    auto?: DisplayMetaDict;
};
type RuleDefinition = {
    auto_apply?: boolean;
    scope?: string[];
    is_exact?: boolean;
    currency_code?: string;
    applicable_on: string;
    type: string;
    calculate_on: string;
    value_type: string;
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
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CouponAdd = {
    identifiers: Identifier;
    _schedule?: CouponSchedule;
    validity: Validity;
    author?: CouponAuthor;
    action?: CouponAction;
    ownership: Ownership;
    restrictions?: Restrictions;
    type_slug: string;
    rule: Rule[];
    display_meta: DisplayMeta;
    rule_definition: RuleDefinition;
    code: string;
    state?: State;
    tags?: string[];
    validation?: Validation;
    date_meta?: CouponDateMeta;
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
    identifiers: Identifier;
    _schedule?: CouponSchedule;
    validity: Validity;
    author?: CouponAuthor;
    action?: CouponAction;
    ownership: Ownership;
    restrictions?: Restrictions;
    type_slug: string;
    rule: Rule[];
    display_meta: DisplayMeta;
    rule_definition: RuleDefinition;
    code: string;
    state?: State;
    tags?: string[];
    validation?: Validation;
    date_meta?: CouponDateMeta;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type PromotionSchedule = {
    duration?: number;
    cron?: string;
    published: boolean;
    start: string;
    end?: string;
    next_schedule?: any[];
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
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
type UserRegistered = {
    end?: string;
    start?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    uses?: PaymentAllowValue1;
    codes?: string[];
    type: string;
};
type Restrictions1 = {
    uses: UsesRestriction1;
    platforms?: string[];
    post_order?: PostOrder1;
    user_id?: string[];
    user_registered?: UserRegistered;
    anonymous_users?: boolean;
    user_groups?: number[];
    payments?: PromotionPaymentModes[];
    order_quantity?: number;
};
type DisplayMeta1 = {
    description?: string;
    name?: string;
    offer_text?: string;
};
type CompareObject = {
    greater_than?: number;
    less_than?: number;
    less_than_equals?: number;
    greater_than_equals?: number;
    equals?: number;
};
type ItemCriteria = {
    cart_quantity?: CompareObject;
    cart_total?: CompareObject;
    item_brand?: number[];
    item_exclude_store?: number[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_brand?: number[];
    all_items?: boolean;
    item_id?: number[];
    item_exclude_sku?: string[];
    available_zones?: string[];
    item_category?: number[];
    cart_unique_item_quantity?: CompareObject;
    buy_rules?: string[];
    item_exclude_category?: number[];
    item_size?: string[];
    item_store?: number[];
    item_company?: number[];
    item_exclude_id?: number[];
    item_sku?: string[];
    item_exclude_company?: number[];
};
type DiscountOffer = {
    min_offer_quantity?: number;
    discount_amount?: number;
    max_usage_per_transaction?: number;
    code?: string;
    discount_percentage?: number;
    apportion_discount?: boolean;
    max_offer_quantity?: number;
    discount_price?: number;
    max_discount_amount?: number;
    partial_can_ret?: boolean;
};
type DiscountRule = {
    item_criteria: ItemCriteria;
    buy_condition: string;
    discount_type: string;
    offer: DiscountOffer;
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
type PromotionListItem = {
    _schedule?: PromotionSchedule;
    apply_exclusive?: string;
    ownership: Ownership1;
    _custom_json?: any;
    code?: string;
    post_order_action?: PromotionAction;
    restrictions?: Restrictions1;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    buy_rules: any;
    stackable?: boolean;
    currency?: string;
    apply_all_discount?: boolean;
    discount_rules: DiscountRule[];
    promo_group: string;
    mode: string;
    author?: PromotionAuthor;
    promotion_type: string;
    application_id: string;
    visiblility?: Visibility;
    date_meta?: PromotionDateMeta;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    _schedule?: PromotionSchedule;
    apply_exclusive?: string;
    ownership: Ownership1;
    _custom_json?: any;
    code?: string;
    post_order_action?: PromotionAction;
    restrictions?: Restrictions1;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    buy_rules: any;
    stackable?: boolean;
    currency?: string;
    apply_all_discount?: boolean;
    discount_rules: DiscountRule[];
    promo_group: string;
    mode: string;
    author?: PromotionAuthor;
    promotion_type: string;
    application_id: string;
    visiblility?: Visibility;
    date_meta?: PromotionDateMeta;
};
type PromotionUpdate = {
    _schedule?: PromotionSchedule;
    apply_exclusive?: string;
    ownership: Ownership1;
    _custom_json?: any;
    code?: string;
    post_order_action?: PromotionAction;
    restrictions?: Restrictions1;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    buy_rules: any;
    stackable?: boolean;
    currency?: string;
    apply_all_discount?: boolean;
    discount_rules: DiscountRule[];
    promo_group: string;
    mode: string;
    author?: PromotionAuthor;
    promotion_type: string;
    application_id: string;
    visiblility?: Visibility;
    date_meta?: PromotionDateMeta;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    modified_on?: string;
    title?: string;
    entity_type?: string;
    entity_slug?: string;
    description?: string;
    subtitle?: string;
    is_hidden?: boolean;
    example?: string;
    type?: string;
    created_on?: string;
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
    currency_symbol?: string;
    value?: number;
    message?: string[];
    display?: string;
    key?: string;
    currency_code?: string;
};
type LoyaltyPoints = {
    description?: string;
    is_applied?: boolean;
    total?: number;
    applicable?: number;
};
type CouponBreakup = {
    coupon_value?: number;
    coupon_type?: string;
    message?: string;
    value?: number;
    title?: string;
    is_applied?: boolean;
    code?: string;
    description?: string;
    type?: string;
    uid?: string;
    minimum_cart_value?: number;
    max_discount_value?: number;
    sub_title?: string;
};
type RawBreakup = {
    total?: number;
    mrp_total?: number;
    convenience_fee?: number;
    cod_charge?: number;
    gst_charges?: number;
    delivery_charge?: number;
    you_saved?: number;
    discount?: number;
    vog?: number;
    coupon?: number;
    subtotal?: number;
    fynd_cash?: number;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
    raw?: RawBreakup;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductAvailability = {
    other_store_quantity?: number;
    deliverable?: boolean;
    sizes?: string[];
    out_of_stock?: boolean;
    is_valid?: boolean;
};
type ProductPrice = {
    currency_symbol?: string;
    effective?: number;
    selling?: number;
    add_on?: number;
    marked?: number;
    currency_code?: string;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    query?: ActionQuery;
    url?: string;
    type?: string;
};
type CartProduct = {
    categories?: CategoryInfo[];
    images?: ProductImage[];
    name?: string;
    slug?: string;
    type?: string;
    uid?: number;
    brand?: BaseInfo;
    action?: ProductAction;
};
type FreeGiftItem = {
    item_slug?: string;
    item_name?: string;
    item_price_details?: any;
    item_brand_name?: string;
    item_images_url?: string[];
    item_id?: number;
};
type AppliedFreeArticles = {
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
    quantity?: number;
};
type DiscountRulesApp = {
    item_criteria?: any;
    raw_offer?: any;
    offer?: any;
    matched_buy_rules?: string[];
};
type AppliedPromotion = {
    offer_text?: string;
    amount?: number;
    applied_free_articles?: AppliedFreeArticles[];
    promo_id?: string;
    buy_rules?: BuyRules[];
    promotion_name?: string;
    promotion_type?: string;
    discount_rules?: DiscountRulesApp[];
    article_quantity?: number;
    mrp_promotion?: boolean;
    promotion_group?: string;
};
type BasePrice = {
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
    marked?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    extra_meta?: any;
    quantity?: number;
    seller?: BaseInfo;
    store?: BaseInfo;
    size?: string;
    type?: string;
    uid?: string;
    price?: ArticlePriceInfo;
};
type CartProductInfo = {
    identifiers: CartProductIdentifer;
    parent_item_identifiers?: any;
    message?: string;
    availability?: ProductAvailability;
    quantity?: number;
    price_per_unit?: ProductPriceInfo;
    bulk_offer?: any;
    promo_meta?: PromoMeta;
    key?: string;
    price?: ProductPriceInfo;
    product?: CartProduct;
    discount?: string;
    promotions_applied?: AppliedPromotion[];
    coupon_message?: string;
    is_set?: boolean;
    article?: ProductArticle;
};
type OpenapiCartDetailsResponse = {
    message?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    phone?: number;
    country?: string;
    address_type?: string;
    email?: string;
    country_code?: string;
    name?: string;
    area?: string;
    address?: string;
    landmark?: string;
    pincode?: number;
    meta?: any;
    area_code_slug?: string;
    city?: string;
    state?: string;
    area_code: string;
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
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
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
    cashback_applied: number;
    delivery_charges: number;
    price_effective: number;
    extra_meta?: any;
    cod_charges: number;
    loyalty_discount?: number;
    quantity?: number;
    coupon_effective_discount: number;
    price_marked: number;
    employee_discount?: number;
    files?: OpenApiFiles[];
    meta?: CartItemMeta;
    payment_methods: MultiTenderPaymentMethod[];
    discount: number;
    amount_paid: number;
    size: string;
    product_id: number;
};
type OpenApiPlatformCheckoutReq = {
    delivery_charges: number;
    cod_charges: number;
    cart_items: OpenApiOrderItem[];
    files?: OpenApiFiles[];
    currency_code?: string;
    coupon_value: number;
    billing_address: ShippingAddress;
    payment_mode?: string;
    coupon?: string;
    cashback_applied: number;
    loyalty_discount?: number;
    cart_value: number;
    comment?: string;
    order_id?: string;
    employee_discount?: any;
    payment_methods: MultiTenderPaymentMethod[];
    shipping_address?: ShippingAddress;
    affiliate_order_id?: string;
    coupon_code: string;
    gstin?: string;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    success?: boolean;
    order_ref_id?: string;
    message?: string;
};
type AbandonedCart = {
    fc_index_map?: number[];
    cashback: any;
    cod_charges?: any;
    promotion?: any;
    is_default: boolean;
    articles: any[];
    checkout_mode?: string;
    pick_up_customer_details?: any;
    payment_mode?: string;
    fynd_credits?: any;
    is_active?: boolean;
    cart_value?: number;
    comment?: string;
    payment_methods?: any[];
    uid: number;
    discount?: number;
    buy_now?: boolean;
    gstin?: string;
    delivery_charges?: any;
    last_modified: string;
    merge_qty?: boolean;
    bulk_coupon_discount?: number;
    expire_at: string;
    meta?: any;
    coupon?: any;
    created_on: string;
    is_archive?: boolean;
    app_id?: string;
    order_id?: string;
    user_id: string;
    payments?: any;
    _id: string;
    shipments?: any[];
};
type AbandonedCartResponse = {
    result?: any;
    page?: Page;
    message?: string;
    success?: boolean;
    items?: AbandonedCart[];
};
type AddProductCart = {
    article_id?: string;
    parent_item_identifiers?: any;
    product_group_tags?: string[];
    extra_meta?: any;
    pos?: boolean;
    quantity?: number;
    store_id?: number;
    article_assignment?: any;
    display?: string;
    item_size?: string;
    seller_id?: number;
    item_id?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    last_modified?: string;
    message?: string;
    comment?: string;
    payment_selection_lock?: PaymentSelectionLock;
    breakup_values?: CartBreakup;
    gstin?: string;
    id?: string;
    checkout_mode?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    currency?: CartCurrency;
    delivery_promise?: ShipmentPromise;
    buy_now?: boolean;
    coupon_text?: string;
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
};
type AddCartDetailResponse = {
    success?: boolean;
    partial?: boolean;
    message?: string;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    identifiers: CartProductIdentifer;
    article_id?: string;
    parent_item_identifiers?: any;
    extra_meta?: any;
    quantity?: number;
    item_index?: number;
    item_size?: string;
    item_id?: number;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    success?: boolean;
    message?: string;
    cart?: CartDetailResponse;
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
