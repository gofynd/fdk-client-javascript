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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, Code, PaymentCode, GetPaymentCode, getPaymentCodeResponse, ShipmentStatus, UserDataInfo, Prices, PlatformItem, GSTDetailsData, BagUnit, ShipmentItemFulFillingStore, PaymentModeInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, ShipmentStatusData, DPDetailsData, TrackingList, OrderBrandName, BagConfigs, Identifier, FinancialBreakup, OrderBagArticle, BagGST, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, PlatformDeliveryAddress, OrderBags, FulfillingStore, BagStateMapper, BagStatusHistory, UserDetailsData, OrderDetailsData, ShipmentPayments, ShipmentInfoResponse, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, DateRange, ManifestFilter, GeneratedManifestItem, ManifestPage, GeneratedManifestResponse, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailItem, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Brand, StoreAddress, StoreEwaybill, StoreEinvoice, StoreGstCredentials, EInvoicePortalDetails, Document, StoreDocuments, StoreMeta, Store, BagReturnableCancelableStatus, PDFLinks, BuyerDetails, Formatted, EInvoice, EinvoiceInfo, ShipmentTimeStamp, DebugInfo, LockData, ShipmentMeta, AffiliateMeta, AffiliateDetails, Weight, ReturnConfig, Dimensions, Article, Dates, BagGSTDetails, B2BPODetails, BagMeta, Attributes, Item, AffiliateBagDetails, ArticleDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, Products, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, OrderUser, UserData, MarketPlacePdf, AffiliateBag, OrderPriority, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ProcessingDates, Tax, Charge, LineItem, Shipment, PaymentMethod, PaymentInfo, TaxInfo, BillingInfo, ShippingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, ApplicationItemSEO, ApplicationItemMOQ, MetaFields, ApplicationItemMeta, SuccessResponse1, SEOData, MOQData, OwnerAppItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionQuery, BannerImage, ImageUrls, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, UserInfo, CollectionSchedule, SeoDetail, CollectionBadge, CollectionImage, CollectionBanner, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Image, ProductPublished, Logo, Product, ProductListingResponse, TaxIdentifier, ProductPublish, NetQuantity, TeaserTag, CustomOrder, Trader, ProductCreateUpdateSchemaV2, AttributeMasterSerializer, ProductAttributesResponse, ProductResponse, ValidateIdentifier, ALLSizes, ListALLSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, QuantityBase, Quantities, WeightResponse, DimensionResponse, BrandMeta, ReturnConfig1, CompanyMeta, ManufacturerResponse, Trader1, PriceMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, SellerPhoneNumber, UserSerializer1, ProductReturnConfigSerializer, LocationIntegrationType, UserSerializer2, GetAddressSerializer, GetCompanySerializer, LocationTimingSerializer, LocationDayWiseSerializer, LocationManagerSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, Website, BusinessDetails, ContactDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Ownership, Rule, Validity, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, PostOrder, PriceRange, BulkBundleRestriction, Restrictions, State, CouponAction, CouponAuthor, RuleDefinition, DisplayMetaDict, DisplayMeta, CouponSchedule, CouponDateMeta, Validation, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Visibility, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, UserRegistered, Restrictions1, PromotionSchedule, Ownership1, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, DisplayMeta1, PromotionDateMeta, PromotionAction, PromotionAuthor, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, PromoMeta, ProductImage, BaseInfo, ActionQuery, ProductAction, CategoryInfo, CartProduct, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, ProductAvailability, BasePrice, ArticlePriceInfo, ProductArticle, ProductPrice, ProductPriceInfo, CartProductIdentifer, CartProductInfo, RawBreakup, DisplayBreakup, CouponBreakup, LoyaltyPoints, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    success: boolean;
    excluded_fields: string[];
    created: boolean;
    aggregators?: any[];
    display_fields: string[];
    app_id: string;
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
type PaymentGatewayConfig = {
    is_active?: boolean;
    config_type: string;
    merchant_salt: string;
    secret: string;
    key: string;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    aggregator_name?: PaymentGatewayConfig;
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
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type IntentApp = {
    code?: string;
    display_name?: string;
    outage?: any;
    logos?: PaymentModeLogo;
    package_name?: string;
};
type PaymentModeList = {
    code?: string;
    merchant_code?: string;
    card_brand?: string;
    display_priority?: number;
    nickname?: string;
    card_issuer?: string;
    card_brand_image?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    aggregator_name: string;
    fynd_vpa?: string;
    intent_flow?: boolean;
    intent_app_error_list?: string[];
    exp_year?: number;
    card_fingerprint?: string;
    card_name?: string;
    name?: string;
    card_type?: string;
    card_id?: string;
    card_token?: string;
    card_number?: string;
    outage?: any;
    card_isin?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    intent_app?: IntentApp[];
    timeout?: number;
    display_name?: string;
    retry_count?: number;
    logo_url?: PaymentModeLogo;
    exp_month?: number;
    card_reference?: string;
    expired?: boolean;
};
type RootPaymentMode = {
    anonymous_enable?: boolean;
    name: string;
    logo?: string;
    aggregator_name?: string;
    display_priority: number;
    display_name: string;
    save_card?: boolean;
    logo_url?: PaymentModeLogo;
    add_card_enabled?: boolean;
    is_pay_by_card_pl?: boolean;
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
    transfer_type: string;
    is_active: boolean;
    customers: any;
    is_default: boolean;
    unique_transfer_no: any;
    payouts_aggregators: any[];
    more_attributes: any;
};
type PayoutBankDetails = {
    bank_name?: string;
    country?: string;
    pincode?: number;
    account_type: string;
    account_no?: string;
    ifsc_code: string;
    state?: string;
    account_holder?: string;
    city?: string;
    branch_name?: string;
};
type PayoutRequest = {
    transfer_type: string;
    users: any;
    is_active: boolean;
    bank_details: PayoutBankDetails;
    aggregator: string;
    unique_external_id: string;
};
type PayoutResponse = {
    transfer_type: string;
    payment_status: string;
    success: boolean;
    users: any;
    is_active: boolean;
    created: boolean;
    bank_details: any;
    unique_transfer_no: string;
    payouts: any;
    aggregator: string;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_default: boolean;
    is_active: boolean;
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
    data?: any;
    success: boolean;
    message: string;
    is_verified_flag?: boolean;
};
type NotFoundResourceError = {
    code: string;
    success: boolean;
    description: string;
};
type BankDetailsForOTP = {
    bank_name: string;
    account_no: string;
    ifsc_code: string;
    account_holder: string;
    branch_name: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    success?: boolean;
    bank_name: string;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    transfer_mode: string;
    mobile?: string;
    bank_name: string;
    email: string;
    comment?: string;
    branch_name?: string;
    delights_user_name?: string;
    beneficiary_id: string;
    is_active: boolean;
    address: string;
    created_on: string;
    id: number;
    modified_on: string;
    account_no: string;
    ifsc_code: string;
    display_name: string;
    account_holder: string;
    title: string;
    subtitle: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    current_status?: string;
    payment_gateway?: string;
    extra_meta?: any;
    order_id?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    amount: number;
    mode: string;
    name?: string;
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
    merchant_code: string;
    code: string;
    name: string;
};
type PaymentCode = {
    codes: Code;
    networks: string;
    types: string;
    name: string;
};
type GetPaymentCode = {
    method_code: PaymentCode;
};
type getPaymentCodeResponse = {
    success: boolean;
    data: GetPaymentCode;
};
type ShipmentStatus = {
    status: string;
    actual_status: string;
    ops_status: string;
    hex_code: string;
    title: string;
};
type UserDataInfo = {
    name?: string;
    avis_user_id?: string;
    first_name?: string;
    last_name?: string;
    gender?: string;
    uid?: number;
    mobile?: string;
    is_anonymous_user?: boolean;
    email?: string;
};
type Prices = {
    cashback?: number;
    refund_credit?: number;
    cod_charges?: number;
    amount_paid?: number;
    cashback_applied?: number;
    coupon_value?: number;
    fynd_credits?: number;
    amount_paid_roundoff?: number;
    price_marked?: number;
    value_of_good?: number;
    refund_amount?: number;
    promotion_effective_discount?: number;
    tax_collected_at_source?: number;
    discount?: number;
    delivery_charge?: number;
    price_effective?: number;
};
type PlatformItem = {
    color?: string;
    image?: string[];
    name?: string;
    id?: number;
    can_return?: boolean;
    department_id?: number;
    can_cancel?: boolean;
    size?: string;
    l3_category_name?: string;
    images?: string[];
    l1_category?: string[];
    l3_category?: number;
    code?: string;
};
type GSTDetailsData = {
    gstin_code: string;
    brand_calculated_amount: number;
    value_of_good: number;
    gst_fee: number;
    tax_collected_at_source: number;
};
type BagUnit = {
    ordering_channel: string;
    total_shipment_bags: number;
    status: any;
    parent_promo_bags?: any;
    identifier: string;
    can_return?: boolean;
    shipment_id: string;
    can_cancel?: boolean;
    prices?: Prices;
    applied_promos?: any;
    item?: PlatformItem;
    bag_id: number;
    line_number: number;
    gst?: GSTDetailsData;
    quantity: number;
    group_id?: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItem = {
    shipment_status?: ShipmentStatus;
    id: string;
    user?: UserDataInfo;
    application?: any;
    fulfilling_centre: string;
    bags?: BagUnit[];
    prices?: Prices;
    total_bags_count: number;
    created_at: string;
    total_shipments_in_order: number;
    channel?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    payment_methods?: any;
    payment_mode_info?: PaymentModeInfo;
    sla?: any;
    shipment_created_at: number;
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
    page?: any;
    filters?: FiltersInfo[];
    applied_filters?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type ShipmentStatusData = {
    bag_list?: number[];
    status?: string;
    id?: number;
    shipment_id?: string;
    created_at?: string;
};
type DPDetailsData = {
    gst_tag?: string;
    name?: string;
    eway_bill_id?: string;
    awb_no?: string;
    id?: string;
    country?: string;
    track_url?: string;
    pincode?: string;
};
type TrackingList = {
    is_current?: boolean;
    is_passed?: boolean;
    status: string;
    text: string;
    time?: string;
};
type OrderBrandName = {
    id: number;
    company: string;
    brand_name: string;
    created_on: number;
    modified_on?: number;
    logo: string;
};
type BagConfigs = {
    is_returnable: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
    allow_force_return: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    cashback: number;
    transfer_price: number;
    gst_fee: string;
    delivery_charge: number;
    price_effective: number;
    brand_calculated_amount: number;
    total_units: number;
    cashback_applied: number;
    coupon_value: number;
    coupon_effective_discount: number;
    fynd_credits: number;
    amount_paid_roundoff?: number;
    price_marked: number;
    size: string;
    tax_collected_at_source?: number;
    identifiers: Identifier;
    pm_price_split: any;
    value_of_good: number;
    item_name: string;
    gst_tax_percentage: number;
    refund_credit: number;
    added_to_fynd_cash: boolean;
    gst_tag: string;
    amount_paid: number;
    cod_charges: number;
    hsn_code: string;
    promotion_effective_discount: number;
    discount: number;
};
type OrderBagArticle = {
    return_config?: any;
    identifiers?: any;
    uid?: string;
};
type BagGST = {
    gstin_code?: string;
    gst_tag?: string;
    brand_calculated_amount?: number;
    hsn_code?: string;
    is_default_hsn_code?: boolean;
    value_of_good?: number;
    gst_fee?: number;
    gst_tax_percentage?: number;
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
    amount?: number;
    discount_rules?: DiscountRules[];
    article_quantity?: number;
    promo_id?: string;
    promotion_name?: string;
    buy_rules?: BuyRules[];
    promotion_type?: string;
    mrp_promotion?: boolean;
};
type PlatformDeliveryAddress = {
    landmark?: string;
    country?: string;
    version?: string;
    address_type?: string;
    contact_person?: string;
    state?: string;
    created_at?: string;
    address_category?: string;
    phone?: string;
    address1?: string;
    latitude?: number;
    longitude?: number;
    city?: string;
    area?: string;
    updated_at?: string;
    address2?: string;
    pincode?: string;
    email?: string;
};
type OrderBags = {
    brand?: OrderBrandName;
    bag_configs?: BagConfigs;
    display_name?: string;
    can_cancel?: boolean;
    financial_breakup?: FinancialBreakup[];
    article?: OrderBagArticle;
    gst_details?: BagGST;
    line_number?: number;
    parent_promo_bags?: any;
    quantity?: number;
    can_return?: boolean;
    prices?: Prices;
    applied_promos?: AppliedPromos[];
    seller_identifier?: string;
    bag_id: number;
    entity_type?: string;
    identifier?: string;
    delivery_address?: PlatformDeliveryAddress;
    item?: PlatformItem;
    current_status?: string;
};
type FulfillingStore = {
    id: string;
    country: string;
    contact_person: string;
    fulfillment_channel: string;
    address: string;
    state: string;
    store_name: string;
    phone: string;
    city: string;
    meta: any;
    pincode: string;
    code: string;
};
type BagStateMapper = {
    name: string;
    is_active?: boolean;
    display_name: string;
    bs_id: number;
    notify_customer?: boolean;
    state_type: string;
    journey_type: string;
    app_facing?: boolean;
    app_state_name?: string;
    app_display_name?: string;
};
type BagStatusHistory = {
    status: string;
    forward?: boolean;
    state_id: number;
    bsh_id: number;
    store_id: number;
    shipment_id: string;
    display_name?: boolean;
    kafka_sync?: boolean;
    delivery_awb_number?: string;
    created_at: string;
    updated_at?: string;
    delivery_partner_id?: number;
    bag_id: number;
    state_type?: string;
    app_display_name?: boolean;
    reasons?: any[];
    bag_state_mapper: BagStateMapper;
};
type UserDetailsData = {
    name: string;
    country: string;
    address: string;
    state: string;
    phone: string;
    city: string;
    pincode: string;
    email: string;
};
type OrderDetailsData = {
    ordering_channel?: string;
    fynd_order_id: string;
    cod_charges?: string;
    tax_details?: any;
    affiliate_id?: string;
    source?: string;
    order_date?: string;
    order_value?: string;
    ordering_channel_logo?: any;
};
type ShipmentPayments = {
    mode: string;
    logo?: string;
    source?: string;
};
type ShipmentInfoResponse = {
    shipment_images?: string[];
    ordering_store: any;
    total_items?: number;
    is_packaging_order: boolean;
    status?: ShipmentStatusData;
    mid?: string;
    vertical?: string;
    company: any;
    escalation?: any;
    affiliate_shipment_id: string;
    secured_delivery_flag?: string;
    dp_details?: DPDetailsData;
    can_cancel?: boolean;
    lock_status: string;
    status_progress: number;
    tracking_list?: TrackingList[];
    is_fynd_store?: string;
    forward_tracking_list?: any[];
    is_invoiced: boolean;
    forward_order_status?: any[];
    journey_type?: string;
    invoice: any;
    custom_meta?: any[];
    tracking_url: string;
    bags?: OrderBags[];
    priority_text?: string;
    payment_mode?: string;
    coupon?: any;
    user_info?: any;
    is_fynd_coupon: boolean;
    total_bags?: number;
    shipment_status?: string;
    order_status: any;
    delivery_status: any[];
    order_type: string;
    user_id: string;
    gst_details?: GSTDetailsData;
    fulfilling_store?: FulfillingStore;
    current_shipment_status: any;
    go_green?: boolean;
    enable_tracking?: boolean;
    replacement_details?: string;
    due_date?: string;
    refund_text?: string;
    child_nodes?: string[];
    is_pdsr?: string;
    shipment_quantity?: number;
    bag_status_history?: BagStatusHistory[];
    delivery_details?: UserDetailsData;
    delivery_slot?: any;
    can_return?: boolean;
    shipment_id: string;
    prices?: Prices;
    order_created_time?: string;
    user_agent?: string;
    beneficiary_details?: boolean;
    can_break: string;
    pay_button?: string;
    enable_dp_tracking?: string;
    billing_details?: UserDetailsData;
    order?: OrderDetailsData;
    is_not_fynd_source: boolean;
    platform_logo: boolean;
    fyndstore_emp: any;
    payments?: ShipmentPayments;
    email_id: string;
    picked_date?: string;
    operational_status?: string;
    bank_data?: any;
    forward_shipment_status?: any[];
    kirana_store_id?: string;
    packaging_type?: string;
    refund_details?: any;
    items: any[];
    credit_note_id: string;
};
type OrderDict = {
    order_date: string;
    fynd_order_id: string;
    shipment_count: number;
};
type PlatformShipment = {
    shipment_images?: string[];
    total_items?: number;
    status?: ShipmentStatusData;
    vertical?: string;
    dp_details?: DPDetailsData;
    tracking_list?: TrackingList[];
    journey_type?: string;
    custom_meta?: any[];
    bags?: OrderBags[];
    priority_text?: string;
    payment_mode?: string;
    total_bags?: number;
    shipment_status?: string;
    gst_details?: GSTDetailsData;
    fulfilling_store?: FulfillingStore;
    shipment_quantity?: number;
    bag_status_history?: BagStatusHistory[];
    delivery_details?: UserDetailsData;
    delivery_slot?: any;
    shipment_id: string;
    prices?: Prices;
    user_agent?: string;
    enable_dp_tracking?: string;
    billing_details?: UserDetailsData;
    order?: OrderDetailsData;
    platform_logo?: string;
    payments?: ShipmentPayments;
    picked_date?: string;
    operational_status?: string;
    packaging_type?: string;
};
type ShipmentDetailsResponse = {
    success: boolean;
    custom_meta?: any[];
    order?: OrderDict;
    shipments?: PlatformShipment[];
};
type SubLane = {
    total_items?: number;
    text?: string;
    actions?: any[];
    index?: number;
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
type PlatformBreakupValues = {
    name?: string;
    display?: string;
    value?: string;
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformOrderItems = {
    breakup_values?: PlatformBreakupValues[];
    total_order_value?: number;
    user_info?: UserDataInfo;
    shipments?: PlatformShipment[];
    order_created_time?: string;
    channel?: PlatformChannel;
    order_value?: number;
    meta?: any;
    order_id?: string;
    payment_mode?: string;
};
type OrderListingResponse = {
    success?: boolean;
    lane?: string;
    page?: Page;
    total_count?: number;
    message?: string;
    items?: PlatformOrderItems[];
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
    reason?: string;
    status?: string;
    updated_time?: string;
    updated_at?: string;
    account_name?: string;
    raw_status?: string;
    shipment_type?: string;
    meta?: any;
    awb?: string;
    last_location_recieved_at?: string;
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
    report_name?: string;
    report_type?: string;
    display_name?: string;
    s3_key?: string;
    report_created_at?: string;
    report_requested_at?: string;
    request_details?: any;
};
type JioCodeUpsertDataSet = {
    article_id?: string;
    company_id?: string;
    item_id?: string;
    jio_code?: string;
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
    success?: boolean;
    identifier?: string;
    data?: any[];
    trace_id?: string;
    error?: NestedErrorSchemaDataSet[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    invoice_status?: string;
    data?: any;
    store_id?: string;
    store_name?: string;
    batch_id: string;
    label?: any;
    store_code?: string;
    invoice?: any;
    company_id?: string;
    do_invoice_label_generated: boolean;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type FileResponse = {
    cdn?: URL;
    file_path?: string;
    content_type?: string;
    size?: number;
    method?: string;
    tags?: string[];
    upload?: FileUploadResponse;
    namespace?: string;
    file_name?: string;
    operation?: string;
};
type bulkListingData = {
    successful?: number;
    status?: string;
    id?: string;
    failed?: number;
    batch_id?: string;
    failed_shipments?: any[];
    successful_shipments?: any[];
    user_id?: string;
    total?: number;
    store_name?: string;
    processing_shipments?: string[];
    user_name?: string;
    uploaded_on?: string;
    processing?: number;
    store_id?: number;
    company_id?: number;
    file_name?: string;
    excel_url?: string;
    store_code?: string;
};
type BulkListingPage = {
    current?: number;
    total?: number;
    size?: number;
    has_previous?: boolean;
    has_next?: boolean;
    type?: string;
};
type BulkListingResponse = {
    success?: boolean;
    data?: bulkListingData[];
    error?: string;
    page?: BulkListingPage;
};
type DateRange = {
    from_date?: string;
    to_date?: string;
};
type ManifestFilter = {
    dp_ids?: string;
    dp_name?: string;
    sales_channels?: string;
    sales_channel_name?: string;
    store_name?: string;
    date_range?: DateRange;
    lane?: string;
    stores?: string;
};
type GeneratedManifestItem = {
    created_by?: string;
    filters?: ManifestFilter;
    status?: string;
    is_active?: boolean;
    manifest_id?: string;
    created_at?: string;
    company_id?: number;
};
type ManifestPage = {
    current?: string;
    total?: number;
    size?: string;
    has_previous?: boolean;
    has_next?: boolean;
    type?: string;
};
type GeneratedManifestResponse = {
    items?: GeneratedManifestItem[];
    page?: ManifestPage;
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
    filters?: ManifestFilter;
    status?: string;
    is_active?: boolean;
    manifest_id?: string;
    id?: number;
    user_id?: number;
    created_at?: string;
    uid?: number;
    company_id?: number;
    meta?: ManifestDetailMeta;
};
type ManifestDetailItem = {
    shipment_id?: string;
    invoice_id?: string;
    awb?: string;
    order_id?: string;
    item_qty?: number;
};
type ManifestDetailResponse = {
    manifest_details?: ManifestDetail[];
    items?: ManifestDetailItem[];
    page?: ManifestPage;
    additional_shipment_count?: number;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    id?: number;
    qc_type?: string[];
    question_set?: QuestionSet[];
    display_name?: string;
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
    processing_shipments_count?: number;
    total_shipments_count?: number;
    failed_shipments_count?: number;
    batch_id?: string;
    successful_shipment_ids?: string[];
    company_id?: string;
};
type BulkActionDetailsResponse = {
    success?: string;
    status?: boolean;
    data?: BulkActionDetailsDataField[];
    uploaded_by?: string;
    user_id?: string;
    failed_records?: string[];
    error?: string[];
    message?: string;
    uploaded_on?: string;
};
type Brand = {
    is_virtual_invoice?: boolean;
    company: string;
    pickup_location?: string;
    created_on?: number;
    start_date?: string;
    logo?: string;
    modified_on?: number;
    script_last_ran?: string;
    brand_id: number;
    brand_name: string;
    credit_note_allowed?: boolean;
    credit_note_expiry_days?: number;
    invoice_prefix?: string;
};
type StoreAddress = {
    address_type: string;
    state: string;
    address1: string;
    landmark?: string;
    country: string;
    version?: string;
    latitude: number;
    area?: string;
    pincode: number;
    email?: string;
    country_code: string;
    phone: string;
    updated_at: string;
    longitude: number;
    address2?: string;
    address_category: string;
    contact_person: string;
    created_at: string;
    city: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    password?: string;
    user?: string;
    enabled: boolean;
    username?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type EInvoicePortalDetails = {
    user?: string;
    password?: string;
    username?: string;
};
type Document = {
    url?: string;
    verified: boolean;
    ds_type: string;
    legal_name: string;
    value: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    gst_credentials: StoreGstCredentials;
    einvoice_portal_details?: EInvoicePortalDetails;
    product_return_config?: any;
    notification_emails?: string[];
    documents?: StoreDocuments;
    gst_number?: string;
    display_name: string;
    ewaybill_portal_details?: any;
    stage: string;
    additional_contact_details?: any;
    timing?: any[];
};
type Store = {
    parent_store_id?: number;
    packaging_material_count?: number;
    s_id: string;
    fulfillment_channel: string;
    state: string;
    address1: string;
    order_integration_id?: string;
    is_archived?: boolean;
    vat_no?: string;
    store_active_from?: string;
    country: string;
    is_active?: boolean;
    is_enabled_for_recon?: boolean;
    latitude: number;
    store_address_json?: StoreAddress;
    mall_name?: string;
    meta: StoreMeta;
    pincode: string;
    login_username: string;
    name: string;
    phone: number;
    updated_at?: string;
    brand_id?: any;
    longitude: number;
    address2?: string;
    company_id: number;
    store_email: string;
    code?: string;
    location_type: string;
    brand_store_tags?: string[];
    contact_person: string;
    created_at: string;
    city: string;
    mall_area?: string;
    alohomora_user_id?: number;
};
type BagReturnableCancelableStatus = {
    is_returnable: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
};
type PDFLinks = {
    b2b?: string;
    invoice_a4?: string;
    label_pos?: string;
    label_a4?: string;
    label_a6?: string;
    credit_note_url?: string;
    invoice_type: string;
    label?: string;
    label_type: string;
    invoice_a6?: string;
    invoice?: string;
    po_invoice?: string;
    invoice_pos?: string;
};
type BuyerDetails = {
    name: string;
    gstin: string;
    ajio_site_id?: string;
    address: string;
    state: string;
    city: string;
    pincode: number;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type EInvoice = {
    error_code?: string;
    signed_qr_code?: string;
    acknowledge_no?: number;
    acknowledge_date?: string;
    signed_invoice?: string;
    error_message?: string;
    irn?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type LockData = {
    mto?: boolean;
    locked?: boolean;
    lock_message?: string;
};
type ShipmentMeta = {
    dp_name?: string;
    weight: number;
    marketplace_store_id?: string;
    external?: any;
    b2b_buyer_details?: BuyerDetails;
    auto_trigger_dp_assignment_acf: boolean;
    return_store_node?: number;
    return_details?: any;
    bag_weight?: any;
    formatted?: Formatted;
    shipment_weight?: number;
    shipment_volumetric_weight?: number;
    forward_affiliate_order_id?: string;
    dp_id?: string;
    order_type?: string;
    b2c_buyer_details?: any;
    einvoice_info?: EinvoiceInfo;
    return_affiliate_shipment_id?: string;
    due_date?: string;
    return_awb_number?: string;
    dp_options?: any;
    po_number?: string;
    assign_dp_from_sb?: boolean;
    timestamp?: ShipmentTimeStamp;
    ewaybill_info?: any;
    store_invoice_updated_date?: string;
    return_affiliate_order_id?: string;
    packaging_name?: string;
    forward_affiliate_shipment_id?: string;
    debug_info?: DebugInfo;
    dp_sort_key?: string;
    fulfilment_priority_text?: string;
    box_type?: string;
    lock_data?: LockData;
    awb_number?: string;
    same_store_available: boolean;
};
type AffiliateMeta = {
    channel_shipment_id?: string;
    order_item_id?: string;
    size_level_total_qty?: number;
    box_type?: string;
    employee_discount?: number;
    due_date?: string;
    coupon_code?: string;
    is_priority?: boolean;
    loyalty_discount?: number;
    quantity?: number;
    channel_order_id?: string;
};
type AffiliateDetails = {
    affiliate_order_id: string;
    pdf_links?: PDFLinks;
    ad_id?: string;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    affiliate_id?: string;
    shipment_meta: ShipmentMeta;
    company_affiliate_tag?: string;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
};
type Weight = {
    shipping?: number;
    is_default?: boolean;
    unit?: string;
};
type ReturnConfig = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Dimensions = {
    width?: number;
    height?: number;
    is_default?: boolean;
    unit?: string;
    length?: number;
};
type Article = {
    weight?: Weight;
    is_set?: boolean;
    uid: string;
    return_config?: ReturnConfig;
    _id: string;
    size: string;
    code?: string;
    seller_identifier: string;
    raw_meta?: any;
    child_details?: any;
    esp_modified?: any;
    dimensions?: Dimensions;
    identifiers: Identifier;
    a_set?: any;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type BagGSTDetails = {
    gstin_code?: string;
    igst_gst_fee: string;
    gst_tag: string;
    brand_calculated_amount: number;
    hsn_code: string;
    hsn_code_id: string;
    cgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    value_of_good: number;
    cgst_tax_percentage: number;
    gst_fee: number;
    tax_collected_at_source: number;
    igst_tax_percentage: number;
    gst_tax_percentage: number;
    sgst_gst_fee: string;
    sgst_tax_percentage: number;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    docker_number?: string;
    po_line_amount?: number;
    item_base_price?: number;
    po_tax_amount?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Attributes = {
    marketer_name?: string;
    name?: string;
    primary_color?: string;
    essential?: string;
    brand_name?: string;
    gender?: string[];
    marketer_address?: string;
    primary_color_hex?: string;
    primary_material?: string;
};
type Item = {
    color?: string;
    brand: string;
    l2_category?: string[];
    can_cancel?: boolean;
    gender?: string;
    last_updated_at?: string;
    size: string;
    l3_category?: number;
    l2_category_id?: number;
    meta?: any;
    webstore_product_url?: string;
    name: string;
    can_return?: boolean;
    department_id?: number;
    l3_category_name?: string;
    attributes: Attributes;
    brand_id: number;
    l1_category?: string[];
    code?: string;
    image: string[];
    slug_key: string;
    l1_category_id?: number;
    item_id: number;
    branch_url?: string;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    employee_discount?: number;
    loyalty_discount?: number;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
};
type ArticleDetails = {
    status?: any;
};
type BagDetailsPlatformResponse = {
    brand: Brand;
    ordering_store?: Store;
    status: BagReturnableCancelableStatus;
    b_id: number;
    display_name?: string;
    affiliate_details?: AffiliateDetails;
    order_integration_id?: string;
    journey_type: string;
    qc_required?: any;
    financial_breakup: FinancialBreakup[];
    article: Article;
    no_of_bags_order?: number;
    dates?: Dates;
    restore_coupon?: boolean;
    gst_details: BagGSTDetails;
    bag_update_time?: number;
    line_number?: number;
    current_operational_status: BagStatusHistory;
    reasons?: any[];
    meta?: BagMeta;
    parent_promo_bags?: any;
    quantity?: number;
    bag_status_history?: BagStatusHistory;
    shipment_id?: string;
    applied_promos?: any[];
    prices: Prices;
    seller_identifier?: string;
    b_type?: string;
    entity_type?: string;
    operational_status?: string;
    identifier?: string;
    original_bag_list?: number[];
    tags?: string[];
    item: Item;
    current_status: BagStatusHistory;
    affiliate_bag_details: AffiliateBagDetails;
    bag_status: BagStatusHistory[];
    restore_promos?: any;
    article_details?: ArticleDetails;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    current: number;
    size: number;
    has_next: boolean;
    item_total: number;
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
    status?: number;
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
    affiliate_bag_id?: string;
    item_id?: string;
    reason_ids?: number[];
    fynd_order_id?: string;
    set_id?: string;
    mongo_article_id?: string;
    store_id: number;
    affiliate_order_id?: string;
    bag_id?: number;
    affiliate_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_bag_id?: string;
    affiliate_shipment_id?: string;
    reason_text: string;
    id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    entity_type: string;
    entities: Entities[];
    action: string;
};
type Bags = {
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    bag_id?: number;
    is_locked?: boolean;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    shipment_id?: string;
    bags?: Bags[];
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    is_shipment_locked?: boolean;
    affiliate_shipment_id?: string;
    is_bag_locked?: boolean;
    status?: string;
    affiliate_id?: string;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    check_response?: CheckResponse[];
    message?: string;
};
type AnnouncementResponse = {
    company_id?: number;
    platform_id?: string;
    description?: string;
    from_datetime?: string;
    created_at?: string;
    logo_url?: string;
    platform_name?: string;
    title?: string;
    to_datetime?: string;
    id: number;
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
    quantity?: number;
    identifier?: string;
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
    quantity?: number;
    identifier?: string;
    line_number?: number;
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
type ShipmentsRequest = {
    reasons?: ReasonsData;
    products?: Products[];
    identifier: string;
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    status?: string;
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
    force_transition?: boolean;
};
type ShipmentsResponse = {
    final_state?: any;
    identifier?: string;
    stack_trace?: string;
    code?: string;
    meta?: any;
    status?: number;
    exception?: string;
    message?: string;
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
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    updated_at: string;
    description?: string;
    created_at: string;
    name: string;
    token: string;
    owner: string;
    meta?: AffiliateAppConfigMeta[];
    id: string;
    secret: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
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
type OrderConfig = {
    create_user?: boolean;
    bag_end_state?: string;
    article_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    affiliate: Affiliate;
    store_lookup?: string;
};
type OrderUser = {
    state: string;
    first_name: string;
    address2?: string;
    address1?: string;
    email: string;
    last_name: string;
    phone: number;
    country: string;
    pincode: string;
    mobile: number;
    city: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    sku: string;
    price_marked: number;
    quantity: number;
    store_id: number;
    amount_paid: number;
    seller_identifier: string;
    delivery_charge: number;
    affiliate_store_id: string;
    modified_on: string;
    company_id: number;
    hsn_code_id: string;
    _id: string;
    affiliate_meta: any;
    fynd_store_id: string;
    avl_qty: number;
    pdf_links?: MarketPlacePdf;
    identifier: any;
    discount: number;
    price_effective: number;
    transfer_price: number;
    item_id: number;
    unit_price: number;
    item_size: string;
};
type OrderPriority = {
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
};
type ArticleDetails1 = {
    _id: string;
    category: any;
    weight: any;
    attributes: any;
    quantity: number;
    brand_id: number;
    dimension: any;
};
type ShipmentDetails = {
    box_type?: string;
    shipments: number;
    fulfillment_id: number;
    affiliate_shipment_id: string;
    meta?: any;
    dp_id?: number;
    articles: ArticleDetails1[];
};
type LocationDetails = {
    fulfillment_type: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    identifier: string;
    action: string;
    shipment: ShipmentDetails[];
    source: string;
    journey: string;
    payment_mode: string;
    location_details?: LocationDetails;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    user: UserData;
    coupon?: string;
    bags: AffiliateBag[];
    order_priority?: OrderPriority;
    billing_address: OrderUser;
    discount: number;
    cod_charges: number;
    shipment?: ShipmentData;
    delivery_charges: number;
    payment?: any;
    order_value: number;
    payment_mode: string;
    shipping_address: OrderUser;
    affiliate_order_id?: string;
    items: any;
};
type CreateOrderPayload = {
    order_config: OrderConfig;
    order_info: OrderInfo;
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
    display_text: string;
    slug: string;
    description: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    user: string;
    l1_detail?: string;
    ticket_id?: string;
    type: string;
    l3_detail?: string;
    createdat: string;
    ticket_url?: string;
    bag_id?: number;
    l2_detail?: string;
    message: string;
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
    brand_name: string;
    country_code: string;
    customer_name: string;
    order_id: string;
    payment_mode: string;
    phone_number: number;
    amount_paid: number;
    message: string;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    bag_id: number;
    slug: string;
};
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    shipment_id?: string;
    remarks?: string;
    bag_list?: number[];
    meta: Meta;
    id: number;
    status?: string;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
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
    success: string;
    errors?: string[];
};
type ProcessingDates = {
    customer_pickup_slot?: any;
    confirm_by_date?: string;
    dispatch_by_date?: string;
    pack_by_date?: string;
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
};
type Tax = {
    tax_exempt: boolean;
    name: string;
    breakup: any[];
    amount: any;
};
type Charge = {
    tax: Tax;
    name: string;
    amount: any;
    type: string;
    code?: string;
};
type LineItem = {
    custom_messasge?: string;
    external_line_id?: string;
    charges: Charge[];
    quantity?: number;
    meta?: any;
    seller_identifier: string;
};
type Shipment = {
    processing_dates?: ProcessingDates;
    external_shipment_id?: number;
    location_id: number;
    priority?: number;
    line_items: LineItem[];
    meta?: any;
};
type PaymentMethod = {
    collect_by: string;
    name: string;
    amount: number;
    mode: string;
    meta?: any;
    refund_by: string;
    transaction_data?: any;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type BillingInfo = {
    country_code: string;
    primary_mobile_number: string;
    country: string;
    pincode: string;
    alternate_mobile_number?: string;
    state_code: string;
    state: string;
    first_name: string;
    external_customer_code?: string;
    middle_name?: string;
    primary_email: string;
    title?: string;
    house_no: string;
    customer_code?: string;
    gender?: string;
    address1: string;
    address2?: string;
    last_name?: string;
    alternate_email?: string;
    city: string;
    floor_no: string;
};
type ShippingInfo = {
    country_code: string;
    primary_mobile_number: string;
    country: string;
    pincode: string;
    alternate_mobile_number?: string;
    state_code: string;
    state: string;
    first_name: string;
    external_customer_code?: string;
    middle_name?: string;
    primary_email: string;
    geo_location?: any;
    title?: string;
    shipping_type?: string;
    address_type?: string;
    house_no?: string;
    customer_code?: string;
    gender?: string;
    address1: string;
    address2?: string;
    last_name?: string;
    alternate_email?: string;
    landmark?: string;
    city: string;
    slot?: any[];
    floor_no?: string;
};
type CreateOrderAPI = {
    application_id?: string;
    shipments: Shipment[];
    payment_info: PaymentInfo;
    external_creation_date?: string;
    tax_info?: TaxInfo;
    charges: Charge[];
    billing_info: BillingInfo;
    meta?: any;
    shipping_info: ShippingInfo;
    external_order_id?: string;
    currency_info: any;
};
type CreateOrderErrorReponse = {
    stack_trace?: string;
    request_id?: string;
    code?: string;
    message: string;
    meta?: string;
    status: number;
    exception?: string;
    info?: any;
};
type PaymentMethods = {
    mode?: string;
    collect_by?: string;
    refund_by?: string;
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
    payment_info?: CreateChannelPaymentInfo;
    dp_configuration?: DpConfiguration;
    logo_url?: any;
    shipment_assignment?: string;
    lock_states?: string[];
    location_reassignment?: boolean;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    is_inserted?: boolean;
    acknowledged?: boolean;
    is_upserted?: boolean;
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
    start_date: string;
    end_date: string;
    order_details?: FyndOrderIdList[];
    mobile: number;
};
type GetSearchWordsData = {
    result?: any;
    is_active?: boolean;
    uid?: string;
    words?: string[];
    _custom_json?: any;
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
    result: SearchKeywordResult;
    is_active?: boolean;
    words?: string[];
    _custom_json?: any;
    app_id?: string;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    app_id?: string;
    results?: any[];
    words?: string[];
    _custom_json?: any;
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type Media = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type AutocompletePageAction = {
    query?: any;
    url?: string;
    type?: string;
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
    results?: AutocompleteResult[];
    words?: string[];
    _custom_json?: any;
    app_id?: string;
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    words?: string[];
    _custom_json?: any;
    app_id?: string;
};
type ProductBundleItem = {
    min_quantity: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    max_quantity: number;
    product_uid: number;
    allow_remove?: boolean;
};
type GetProductBundleCreateResponse = {
    logo?: string;
    modified_by?: any;
    company_id?: number;
    created_on?: string;
    created_by?: any;
    is_active: boolean;
    same_store_assignment?: boolean;
    meta?: any;
    page_visibility?: string[];
    slug: string;
    modified_on?: string;
    products: ProductBundleItem[];
    choice: string;
    id?: string;
    name: string;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    logo?: string;
    modified_by?: any;
    company_id?: number;
    created_on?: string;
    created_by?: any;
    is_active: boolean;
    same_store_assignment?: boolean;
    meta?: any;
    page_visibility?: string[];
    slug: string;
    modified_on?: string;
    products: ProductBundleItem[];
    choice: string;
    name: string;
};
type LimitedProductData = {
    attributes?: any;
    identifier?: any;
    images?: string[];
    item_code?: string;
    quantity?: number;
    short_description?: string;
    sizes?: string[];
    slug?: string;
    country_of_origin?: string;
    price?: any;
    name?: string;
    uid?: number;
};
type Size = {
    is_available?: boolean;
    quantity?: number;
    display?: string;
    value?: string;
};
type Price = {
    max_effective?: number;
    max_marked?: number;
    min_marked?: number;
    min_effective?: number;
    currency?: string;
};
type GetProducts = {
    min_quantity?: number;
    product_details?: LimitedProductData;
    auto_select?: boolean;
    sizes?: Size[];
    auto_add_to_cart?: boolean;
    max_quantity?: number;
    allow_remove?: boolean;
    product_uid?: number;
    price?: Price;
};
type GetProductBundleResponse = {
    logo?: string;
    company_id?: number;
    is_active?: boolean;
    same_store_assignment?: boolean;
    meta?: any;
    page_visibility?: string[];
    slug?: string;
    products?: GetProducts[];
    choice?: string;
    name?: string;
};
type ProductBundleUpdateRequest = {
    logo?: string;
    modified_by?: any;
    company_id?: number;
    is_active: boolean;
    same_store_assignment?: boolean;
    meta?: any;
    page_visibility?: string[];
    slug: string;
    modified_on?: string;
    products: ProductBundleItem[];
    choice: string;
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
    description?: string;
    modified_by?: any;
    tag?: string;
    company_id?: number;
    created_by?: any;
    subtitle?: string;
    active?: boolean;
    modified_on?: string;
    brand_id?: number;
    created_on?: string;
    title: string;
    image?: string;
    id?: string;
    name: string;
    guide?: Guide;
};
type SizeGuideResponse = {
    modified_by?: any;
    title?: string;
    company_id?: number;
    tag?: string;
    created_by?: any;
    subtitle?: string;
    active?: boolean;
    modified_on?: string;
    brand_id?: number;
    id?: string;
    name?: string;
    created_on?: string;
    guide?: any;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type ApplicationItemMOQ = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    is_gift?: boolean;
    is_cod?: boolean;
    moq?: ApplicationItemMOQ;
    _custom_meta?: MetaFields[];
    alt_text?: any;
    _custom_json?: any;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type SEOData = {
    title?: any;
    description?: any;
};
type MOQData = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    is_gift?: boolean;
    is_cod?: boolean;
    moq?: MOQData;
    alt_text?: any;
};
type GetConfigMetadataResponse = {
    values?: any[];
    condition?: any[];
    data: any[];
};
type PageResponseType = {
    has_next: boolean;
    total_count: number;
    current: number;
    next: number;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    logo?: string;
    priority: number;
    unit?: string;
    display_type: string;
    is_active: boolean;
    key?: string;
    slug?: string;
    name: string;
};
type AppConfigurationDetail = {
    attributes?: AttributeDetailsGroup[];
    is_default: boolean;
    logo?: string;
    priority: number;
    template_slugs?: string[];
    is_active: boolean;
    slug: string;
    name?: string;
    app_id: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    logo?: string;
    is_default: boolean;
    priority: number;
    default_key: string;
    is_active: boolean;
    key: string;
    name?: string;
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
    compare?: any;
    variant?: any;
    similar?: any;
};
type MetaDataListingSortMetaResponse = {
    key?: string;
    display?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
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
    logo?: string;
    priority: number;
    display_type: string;
    is_active: boolean;
    key: string;
    size: ProductSize;
    name: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    logo?: string;
    priority: number;
    is_active: boolean;
    subtitle?: string;
    key: string;
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
    logo?: string;
    priority: number;
    is_active: boolean;
    key: string;
    name?: string;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    map?: any;
    sort?: string;
    value?: string;
    map_values?: any[];
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
};
type ConfigurationListingFilterConfig = {
    logo?: string;
    priority: number;
    display_name?: string;
    is_active: boolean;
    key: string;
    type: string;
    value_config?: ConfigurationListingFilterValue;
    name?: string;
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
    product?: ConfigurationProduct;
    modified_by?: any;
    listing?: ConfigurationListing;
    config_type: string;
    config_id?: string;
    created_by?: any;
    type?: string;
    modified_on?: string;
    id?: string;
    created_on?: string;
    app_id: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    product?: ConfigurationProduct;
    modified_by?: any;
    listing?: ConfigurationListing;
    config_type: string;
    config_id?: string;
    created_by?: any;
    type?: string;
    modified_on?: string;
    created_on?: string;
    app_id: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
    config_id?: string;
    id?: string;
    app_id: string;
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
    logo?: string;
    kind?: string;
    name: string;
    operators?: string[];
};
type ProductFiltersValue = {
    currency_code?: string;
    display_format?: string;
    value: any;
    query_format?: string;
    currency_symbol?: string;
    max?: number;
    is_selected: boolean;
    min?: number;
    selected_min?: number;
    count?: number;
    selected_max?: number;
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
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
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
    type?: string;
    url: string;
};
type GetCollectionDetailNest = {
    allow_sort?: boolean;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    priority?: number;
    _schedule?: any;
    is_active?: boolean;
    description?: string;
    badge?: any;
    tag?: string[];
    query?: CollectionQuery[];
    meta?: any;
    type?: string;
    slug?: string;
    banners?: ImageUrls;
    cron?: any;
    app_id?: string;
    logo?: Media1;
    action?: Action;
    name?: string;
    uid?: string;
};
type CollectionListingFilterType = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilterTag = {
    display?: string;
    name?: string;
    is_selected?: boolean;
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
    email?: string;
    username?: string;
    uid?: string;
    user_id?: string;
};
type CollectionSchedule = {
    start?: string;
    next_schedule?: NextSchedule[];
    end?: string;
    duration?: number;
    cron?: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
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
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CreateCollection = {
    allow_sort?: boolean;
    created_by?: UserInfo;
    tags?: string[];
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    _schedule?: CollectionSchedule;
    priority?: number;
    seo?: SeoDetail;
    is_active?: boolean;
    modified_by?: UserInfo;
    description?: string;
    published?: boolean;
    badge?: CollectionBadge;
    query?: CollectionQuery[];
    meta?: any;
    type: string;
    _locale_language?: any;
    slug: string;
    banners: CollectionBanner;
    sort_on?: string;
    _custom_json?: any;
    app_id: string;
    logo: CollectionImage;
    is_visible?: boolean;
    name: string;
};
type CollectionCreateResponse = {
    allow_sort?: boolean;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    _schedule?: any;
    priority?: number;
    is_active?: boolean;
    description?: string;
    badge?: any;
    tag?: string[];
    query?: CollectionQuery[];
    meta?: any;
    type?: string;
    slug?: string;
    banners?: ImageUrls;
    sort_on?: string;
    cron?: any;
    app_id?: string;
    logo?: BannerImage;
    name?: string;
};
type CollectionDetailResponse = {
    description?: string;
    logo?: Media1;
    priority?: number;
    visible_facets_keys?: string[];
    _schedule?: any;
    badge?: any;
    tag?: string[];
    allow_sort?: boolean;
    query?: CollectionQuery[];
    is_active?: boolean;
    meta?: any;
    type?: string;
    slug?: string;
    banners?: ImageUrls;
    name?: string;
    cron?: any;
    app_id?: string;
    allow_facets?: boolean;
};
type UpdateCollection = {
    allow_sort?: boolean;
    tags?: string[];
    allow_facets?: boolean;
    _schedule?: CollectionSchedule;
    visible_facets_keys?: string[];
    priority?: number;
    seo?: SeoDetail;
    is_active?: boolean;
    modified_by?: UserInfo;
    description?: string;
    published?: boolean;
    badge?: CollectionBadge;
    query?: CollectionQuery[];
    meta?: any;
    type?: string;
    _locale_language?: any;
    slug?: string;
    banners?: CollectionBanner;
    sort_on?: string;
    _custom_json?: any;
    logo?: CollectionImage;
    is_visible?: boolean;
    name?: string;
};
type ProductDetailAttribute = {
    key?: string;
    type?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductBrand = {
    logo?: Media1;
    action?: Action;
    name?: string;
    uid?: number;
};
type Price1 = {
    min?: number;
    currency_code?: string;
    max?: number;
    currency_symbol?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    attributes?: any;
    tryouts?: string[];
    highlights?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    short_description?: string;
    item_type?: string;
    has_variant?: boolean;
    discount?: string;
    rating_count?: number;
    rating?: number;
    brand?: ProductBrand;
    teaser_tag?: any;
    description?: string;
    similars?: string[];
    color?: string;
    medias?: Media1[];
    type?: string;
    promo_meta?: any;
    image_nature?: string;
    slug: string;
    sellable?: boolean;
    item_code?: string;
    price?: ProductListingPrice;
    name?: string;
    uid?: number;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    page?: Page;
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
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightItem = {
    sellable_count?: number;
    count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightBrand = {
    available_articles?: number;
    total_articles?: number;
    article_freshness?: number;
    total_sizes?: number;
    name?: string;
    available_sizes?: number;
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
    brand_ids?: number[];
    enabled?: boolean;
    company_id?: number;
    opt_level: string;
    platform?: string;
    store_ids?: number[];
};
type CompanyOptIn = {
    brand_ids: number[];
    modified_by?: any;
    enabled: boolean;
    company_id: number;
    platform: string;
    opt_level: string;
    created_by?: any;
    modified_on: number;
    store_ids: number[];
    created_on: number;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    company_type?: string;
    business_type?: string;
    name?: string;
    uid?: number;
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
    company?: string;
    brand?: number;
    store?: number;
};
type StoreDetail = {
    documents?: any[];
    display_name?: string;
    store_type?: string;
    store_code?: string;
    company_id?: number;
    address?: any;
    timing?: any;
    additional_contacts?: any[];
    modified_on?: string;
    manager?: any;
    name?: string;
    created_on?: string;
    uid?: number;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterFilter = {
    priority?: number;
    indexing: boolean;
    depends_on?: string[];
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    format?: string;
    type: string;
    multi?: boolean;
    allowed_values?: string[];
    range?: AttributeSchemaRange;
    mandatory?: boolean;
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
type GenderDetail = {
    description?: string;
    departments?: string[];
    logo?: string;
    is_nested?: boolean;
    filters?: AttributeMasterFilter;
    schema?: AttributeMaster;
    meta?: AttributeMasterMeta;
    slug?: string;
    details?: AttributeMasterDetails;
    id?: string;
    enabled_for_end_consumer?: boolean;
    name?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    code?: string;
    status?: number;
    meta?: any;
    errors?: any;
};
type UserSerializer = {
    user_id?: string;
    username?: string;
    _id?: string;
    contact?: string;
    uid?: string;
};
type GetDepartment = {
    logo?: string;
    modified_by?: UserSerializer;
    item_type?: string;
    priority_order?: number;
    created_by?: UserSerializer;
    is_active?: boolean;
    page_no?: number;
    slug?: string;
    search?: string;
    created_on?: string;
    synonyms?: string[];
    page_size?: number;
    modified_on?: string;
    name?: string;
    uid?: number;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    code?: string;
    status?: number;
    meta?: any;
    errors?: any;
};
type DepartmentCreateUpdate = {
    logo: string;
    _cls?: string;
    priority_order: number;
    is_active?: boolean;
    tags?: string[];
    slug?: string;
    platforms?: any;
    synonyms?: string[];
    _custom_json?: any;
    name: string;
    uid?: number;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    super_user?: boolean;
    username: string;
    contact?: string;
    user_id: string;
};
type DepartmentModel = {
    verified_on?: string;
    modified_by?: UserDetail;
    logo: string;
    _cls?: any;
    priority_order: number;
    created_by?: UserDetail;
    is_active?: boolean;
    _id?: any;
    slug?: any;
    modified_on: string;
    verified_by?: UserDetail;
    synonyms?: any[];
    name: any;
    _custom_json?: any;
    created_on: string;
    uid?: number;
};
type ProductTemplate = {
    attributes?: string[];
    description?: string;
    departments?: string[];
    is_archived?: boolean;
    logo?: string;
    modified_by?: any;
    tag?: string;
    created_by?: any;
    is_active?: boolean;
    slug: string;
    is_physical: boolean;
    created_on?: string;
    categories?: string[];
    modified_on?: string;
    name?: string;
    is_expirable: boolean;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    attributes?: string[];
    description?: string;
    departments?: string[];
    is_archived?: boolean;
    logo?: string;
    tag?: string;
    is_active?: boolean;
    slug: string;
    is_physical: boolean;
    id?: string;
    categories?: string[];
    name?: string;
    is_expirable: boolean;
};
type Properties = {
    is_dependent?: any;
    size_guide?: any;
    highlights?: any;
    multi_size?: any;
    tags?: any;
    sizes?: any;
    short_description?: any;
    product_publish?: any;
    item_type?: any;
    is_active?: any;
    brand_uid?: any;
    teaser_tag?: any;
    category_slug?: any;
    currency?: any;
    return_config?: any;
    custom_order?: any;
    description?: any;
    hsn_code?: any;
    product_group_tag?: any;
    slug?: any;
    no_of_boxes?: any;
    media?: any;
    command?: any;
    item_code?: any;
    variants?: any;
    country_of_origin?: any;
    trader?: any;
    name?: any;
    trader_type?: any;
};
type GlobalValidation = {
    description?: string;
    definitions?: any;
    type?: string;
    properties?: Properties;
    title?: string;
    required?: string[];
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
    templates?: string[];
    brand?: string[];
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadsItems = {
    template_tags?: any;
    seller_id?: number;
    data?: ProductDownloadItemsData;
    url?: string;
    trigger_on?: string;
    task_id?: string;
    created_by?: VerifiedBy;
    status?: string;
    completed_on?: string;
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
    logo: string;
    landscape: string;
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
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type Category = {
    departments: number[];
    media?: Media2;
    priority?: number;
    modified_by?: any;
    tryouts?: string[];
    level: number;
    created_by?: any;
    is_active: boolean;
    marketplaces?: CategoryMapping;
    slug?: string;
    hierarchy?: Hierarchy[];
    created_on?: string;
    synonyms?: string[];
    modified_on?: string;
    id?: string;
    name: string;
    uid?: number;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    departments: number[];
    media?: Media2;
    priority?: number;
    tryouts?: string[];
    level: number;
    is_active: boolean;
    marketplaces?: CategoryMapping;
    slug?: string;
    hierarchy?: Hierarchy[];
    synonyms?: string[];
    name: string;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type Image = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Logo = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type Product = {
    departments?: number[];
    tax_identifier?: any;
    is_dependent?: boolean;
    size_guide?: string;
    template_tag?: string;
    highlights?: string[];
    multi_size?: boolean;
    images?: Image[];
    sizes?: any[];
    is_physical?: boolean;
    short_description?: string;
    category_uid?: number;
    variant_group?: any;
    product_publish?: ProductPublished;
    item_type?: string;
    is_active?: boolean;
    all_sizes?: any[];
    brand_uid?: number;
    brand?: Brand;
    id?: string;
    category_slug?: string;
    currency?: string;
    custom_order?: any;
    description?: string;
    hsn_code?: string;
    color?: string;
    l3_mapping?: string[];
    is_set?: boolean;
    image_nature?: string;
    slug?: string;
    _custom_json?: any;
    media?: Media1[];
    is_expirable?: boolean;
    item_code?: string;
    variants?: any;
    country_of_origin?: string;
    name?: string;
    uid?: number;
    primary_color?: string;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
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
    tag?: string;
    url?: string;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type Trader = {
    address?: string[];
    type?: string;
    name: any;
};
type ProductCreateUpdateSchemaV2 = {
    attributes: any;
    departments: number[];
    tax_identifier: TaxIdentifier;
    is_dependent?: boolean;
    size_guide?: string;
    template_tag: string;
    highlights?: string[];
    multi_size?: boolean;
    tags?: string[];
    sizes: any[];
    short_description?: string;
    variant_group?: any;
    product_publish?: ProductPublish;
    item_type: string;
    net_quantity?: NetQuantity;
    is_active?: boolean;
    brand_uid: number;
    teaser_tag?: TeaserTag;
    category_slug: string;
    currency: string;
    return_config: ReturnConfig;
    custom_order?: CustomOrder;
    description?: string;
    change_request_id?: any;
    requester?: string;
    product_group_tag?: string[];
    is_set?: boolean;
    is_image_less_product?: boolean;
    slug: string;
    no_of_boxes?: number;
    _custom_json?: any;
    media?: Media1[];
    variant_media?: any;
    company_id: number;
    action?: string;
    item_code: string;
    variants?: any;
    country_of_origin: string;
    trader: Trader[];
    bulk_job_id?: string;
    name: string;
    uid?: number;
};
type AttributeMasterSerializer = {
    unit?: string;
    departments: string[];
    is_nested?: boolean;
    schema: AttributeMaster;
    created_by?: any;
    tags?: string[];
    raw_key?: string;
    filters: AttributeMasterFilter;
    suggestion?: string;
    enabled_for_end_consumer?: boolean;
    description?: string;
    modified_by?: any;
    slug: string;
    modified_on?: string;
    details: AttributeMasterDetails;
    synonyms?: any;
    created_on?: string;
    logo?: string;
    variant?: boolean;
    name?: string;
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
    item_length: number;
    item_weight_unit_of_measure: any;
    item_width: number;
    item_height: number;
    item_dimensions_unit_of_measure: string;
    identifiers?: ValidateIdentifier[];
    size: any;
    item_weight: number;
};
type ListALLSizes = {
    all_sizes?: ALLSizes[];
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
    modified_by?: UserDetail1;
    failed?: number;
    cancelled_records?: string[];
    file_path?: string;
    stage?: string;
    failed_records?: string[];
    company_id?: number;
    total?: number;
    succeed?: number;
    template_tag?: string;
    is_active?: boolean;
    created_by?: UserDetail1;
    cancelled?: number;
    modified_on?: string;
    template?: ProductTemplate;
    created_on?: string;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    email?: string;
    username?: string;
    uid?: string;
    user_id?: string;
};
type BulkJob = {
    modified_by?: UserInfo1;
    succeed?: number;
    cancelled_records?: any[];
    failed?: number;
    stage?: string;
    failed_records?: any[];
    company_id: number;
    total?: number;
    cancelled?: number;
    created_by?: UserInfo1;
    is_active?: boolean;
    template_tag?: string;
    tracking_url?: string;
    custom_template_tag?: string;
    modified_on?: string;
    file_path?: string;
    created_on: string;
};
type BulkResponse = {
    modified_by?: UserInfo1;
    created_by?: UserInfo1;
    is_active?: boolean;
    batch_id: string;
    modified_on?: string;
    created_on: string;
};
type BulkProductRequest = {
    company_id: number;
    batch_id: string;
    template_tag: string;
    data: any[];
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
    modified_by?: UserCommon;
    file_path?: string;
    succeed?: number;
    cancelled_records?: string[];
    failed?: number;
    failed_records?: string[];
    stage?: string;
    total?: number;
    company_id?: number;
    created_by?: UserCommon;
    is_active?: boolean;
    cancelled?: number;
    tracking_url?: string;
    modified_on?: string;
    id?: string;
    created_on?: string;
    retry?: number;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductBulkAssets = {
    company_id?: number;
    url: string;
    user: any;
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
    sellable_quantity?: number;
    price_transfer?: number;
    inventory_updated_on?: string;
    quantity?: number;
    item_id?: number;
    identifiers?: any;
    seller_identifier?: string;
    size?: string;
    price?: number;
    price_effective?: number;
    currency?: string;
    uid?: string;
    store?: any;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type SetSize = {
    size: string;
    pieces: number;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    size_distribution: SizeDistribution;
    name?: string;
    quantity?: number;
};
type GTIN = {
    primary?: boolean;
    gtin_value: any;
    gtin_type: string;
};
type InvSize = {
    expiration_date?: string;
    item_length?: number;
    price_transfer?: number;
    item_weight_unit_of_measure?: string;
    quantity: number;
    is_set?: boolean;
    item_height?: number;
    item_width?: number;
    item_dimensions_unit_of_measure?: string;
    size: any;
    set?: InventorySet;
    identifiers: GTIN[];
    price?: number;
    price_effective: number;
    item_weight?: number;
    currency: string;
    store_code: string;
};
type ItemQuery = {
    item_code?: string;
    brand_uid?: number;
    uid?: number;
};
type InventoryRequest = {
    company_id: number;
    sizes: InvSize[];
    item: ItemQuery;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    sellable?: QuantityBase;
};
type WeightResponse = {
    shipping: number;
    is_default: boolean;
    unit: string;
};
type DimensionResponse = {
    is_default: boolean;
    unit: string;
    width: number;
    length: number;
    height: number;
};
type BrandMeta = {
    id: number;
    name: string;
};
type ReturnConfig1 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type CompanyMeta = {
    id: number;
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type Trader1 = {
    address: string[];
    type: string;
    name: string;
};
type PriceMeta = {
    marked: number;
    updated_at?: string;
    effective: number;
    tp_notes?: any;
    transfer: number;
    currency: string;
};
type InventorySellerResponse = {
    quantities?: Quantities;
    tax_identifier?: any;
    fynd_item_code: string;
    total_quantity: number;
    created_by?: UserSerializer;
    tags?: string[];
    track_inventory?: boolean;
    fragile: boolean;
    trace_id?: string;
    item_id: number;
    weight: WeightResponse;
    added_on_store?: string;
    dimension: DimensionResponse;
    is_active?: boolean;
    brand: BrandMeta;
    seller_identifier: string;
    set?: InventorySet;
    raw_meta?: any;
    return_config?: ReturnConfig1;
    modified_by?: UserSerializer;
    stage?: string;
    company: CompanyMeta;
    fynd_meta?: any;
    meta?: any;
    is_set?: boolean;
    size: string;
    _custom_json?: any;
    expiration_date?: string;
    identifier: any;
    manufacturer: ManufacturerResponse;
    fynd_article_code: string;
    trader?: Trader1[];
    country_of_origin: string;
    price: PriceMeta;
    uid: string;
    store: StoreMeta;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    modified_by?: any;
    failed?: number;
    cancelled_records?: string[];
    file_path?: string;
    stage?: string;
    failed_records?: string[];
    company_id?: number;
    succeed?: number;
    cancelled?: number;
    created_by?: any;
    is_active?: boolean;
    total?: number;
    modified_on?: string;
    id?: string;
    created_on?: string;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    expiration_date?: string;
    price_marked?: number;
    total_quantity?: number;
    item_weight_unit_of_measure?: string;
    quantity?: number;
    tags?: string[];
    item_dimensions_unit_of_measure?: string;
    trace_id?: string;
    seller_identifier: string;
    price?: number;
    price_effective?: number;
    currency?: string;
    store_code: string;
};
type InventoryBulkRequest = {
    company_id: number;
    sizes: InventoryJobPayload[];
    batch_id: string;
    user?: any;
};
type InventoryExportJob = {
    seller_id: number;
    url?: string;
    trigger_on?: string;
    task_id: string;
    status?: string;
    request_params?: any;
    completed_on?: string;
};
type InventoryExportRequest = {
    type?: string;
    brand?: number[];
    store?: number[];
};
type InventoryExportResponse = {
    seller_id: number;
    trigger_on?: string;
    task_id: string;
    status?: string;
    request_params?: any;
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
    expiration_date?: string;
    price_marked?: number;
    total_quantity?: number;
    tags?: string[];
    trace_id?: string;
    store_id: number;
    seller_identifier: string;
    price_effective?: number;
};
type InventoryRequestSchemaV2 = {
    meta?: any;
    payload?: InventoryPayload[];
    company_id: number;
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
type HsnCodesObject = {
    hs2_code?: string;
    hsn_code?: string;
    tax2?: number;
    company_id?: number;
    threshold1?: number;
    tax_on_esp?: boolean;
    threshold2?: number;
    modified_on?: string;
    id?: string;
    tax1?: number;
    tax_on_mrp?: boolean;
};
type PageResponse = {
    has_next?: boolean;
    current?: string;
    has_previous?: boolean;
    item_total?: number;
    size?: number;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    hs2_code: string;
    hsn_code: string;
    tax2?: number;
    company_id: number;
    threshold1: number;
    is_active?: boolean;
    tax_on_esp?: boolean;
    threshold2?: number;
    tax1: number;
    tax_on_mrp: boolean;
    uid?: number;
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
    cess?: number;
    threshold: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    taxes: TaxSlab[];
    description: string;
    hsn_code: string;
    modified_by?: any;
    country_code: string;
    reporting_hsn: string;
    created_by?: any;
    type: string;
    modified_on?: string;
    created_on?: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    logo?: Media;
    departments?: string[];
    action?: Action;
    discount?: string;
    slug?: string;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    logo?: Media;
    priority_order?: number;
    slug?: string;
    name?: string;
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
    action?: Action;
    slug?: string;
    banners?: ImageUrls;
    childs?: any[];
    _custom_json?: any;
    name?: string;
    uid?: number;
};
type SecondLevelChild = {
    action?: Action;
    slug?: string;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
    _custom_json?: any;
    name?: string;
    uid?: number;
};
type Child = {
    action?: Action;
    slug?: string;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
    _custom_json?: any;
    name?: string;
    uid?: number;
};
type CategoryItems = {
    action?: Action;
    slug?: string;
    banners?: ImageUrls;
    childs?: Child[];
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
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page: Page;
    sort_on?: ProductSortOn[];
    operators?: any;
};
type ProductDetail = {
    attributes?: any;
    tryouts?: string[];
    highlights?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    short_description?: string;
    item_type?: string;
    has_variant?: boolean;
    rating_count?: number;
    rating?: number;
    brand?: ProductBrand;
    teaser_tag?: any;
    description?: string;
    similars?: string[];
    color?: string;
    medias?: Media1[];
    type?: string;
    promo_meta?: any;
    image_nature?: string;
    slug: string;
    item_code?: string;
    name?: string;
    uid?: number;
};
type InventoryPage = {
    has_next?: boolean;
    next_id?: string;
    has_previous?: boolean;
    type: string;
    item_total: number;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type UserSerializer1 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type UserSerializer2 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetAddressSerializer = {
    address2?: string;
    address1?: string;
    landmark?: string;
    country_code?: string;
    state?: string;
    country?: string;
    longitude?: number;
    address_type?: string;
    city?: string;
    pincode?: number;
    latitude?: number;
};
type GetCompanySerializer = {
    company_type?: string;
    verified_on?: string;
    modified_by?: UserSerializer2;
    reject_reason?: string;
    stage?: string;
    created_by?: UserSerializer2;
    modified_on?: string;
    verified_by?: UserSerializer2;
    name?: string;
    business_type?: string;
    addresses?: GetAddressSerializer[];
    created_on?: string;
    uid?: number;
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
type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobile_no: SellerPhoneNumber;
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
type GetLocationSerializer = {
    contact_numbers?: SellerPhoneNumber[];
    store_type?: string;
    created_by?: UserSerializer1;
    product_return_config?: ProductReturnConfigSerializer;
    phone_number: string;
    documents?: Document[];
    integration_type?: LocationIntegrationType;
    code: string;
    warnings?: any;
    verified_by?: UserSerializer1;
    verified_on?: string;
    modified_by?: UserSerializer1;
    display_name: string;
    stage?: string;
    company?: GetCompanySerializer;
    timing?: LocationDayWiseSerializer[];
    notification_emails?: string[];
    modified_on?: string;
    manager?: LocationManagerSerializer;
    _custom_json?: any;
    created_on?: string;
    address: GetAddressSerializer;
    name: string;
    uid?: number;
    gst_credentials?: InvoiceDetailsSerializer;
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
    logo?: string;
    is_active?: boolean;
    app_id: string;
    _custom_json?: any;
    name?: string;
    uid: number;
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
    effective_date?: string;
    enable?: boolean;
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
    country?: string;
    country_code?: string;
};
type GetCompanyProfileSerializerResponse = {
    created_by?: UserSerializer;
    taxes?: CompanyTaxesSerializer[];
    notification_emails?: string[];
    business_details?: BusinessDetails;
    warnings?: any;
    documents?: Document[];
    uid: number;
    verified_by?: UserSerializer;
    _custom_json?: any;
    franchise_enabled?: boolean;
    mode?: string;
    modified_on?: string;
    created_on?: string;
    business_info?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    business_type: string;
    stage?: string;
    addresses?: GetAddressSerializer[];
    company_type: string;
    contact_details?: ContactDetails;
    name?: string;
    business_country_info?: BusinessCountryInfo;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type CreateUpdateAddressSerializer = {
    address2?: string;
    city: string;
    address1: string;
    pincode: number;
    address_type: string;
    country: string;
    country_code?: string;
    latitude: number;
    landmark?: string;
    state: string;
    longitude: number;
};
type UpdateCompany = {
    name?: string;
    business_info?: string;
    _custom_json?: any;
    franchise_enabled?: boolean;
    taxes?: CompanyTaxesSerializer1[];
    business_type?: string;
    reject_reason?: string;
    notification_emails?: string[];
    addresses?: CreateUpdateAddressSerializer[];
    business_details?: BusinessDetails;
    company_type?: string;
    contact_details?: ContactDetails;
    warnings?: any;
    documents?: Document[];
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
    stage?: string;
    store?: DocumentsObj;
    product?: DocumentsObj;
    brand?: DocumentsObj;
    store_documents?: DocumentsObj;
    uid?: number;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    created_by?: UserSerializer;
    logo?: string;
    reject_reason?: string;
    description?: string;
    warnings?: any;
    _locale_language?: any;
    uid?: number;
    verified_by?: UserSerializer;
    _custom_json?: any;
    banner?: BrandBannerSerializer;
    synonyms?: string[];
    mode?: string;
    modified_on?: string;
    created_on?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    stage?: string;
    slug_key?: string;
    name: string;
};
type CreateUpdateBrandRequestSerializer = {
    name: string;
    _custom_json?: any;
    _locale_language?: any;
    logo: string;
    banner?: BrandBannerSerializer;
    description?: string;
    synonyms?: string[];
    brand_tier?: string;
    company_id?: number;
    uid?: number;
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
    verified_by?: UserSerializer;
    modified_on?: string;
    name?: string;
    market_channels?: string[];
    created_on?: string;
    created_by?: UserSerializer;
    _custom_json?: any;
    modified_by?: UserSerializer;
    verified_on?: string;
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    reject_reason?: string;
    stage?: string;
    notification_emails?: string[];
    addresses?: GetAddressSerializer[];
    company_type: string;
    details?: CompanyDetails;
    uid?: number;
};
type CompanyBrandSerializer = {
    verified_by?: UserSerializer;
    modified_on?: string;
    created_on?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    verified_on?: string;
    company?: CompanySerializer;
    stage?: string;
    reject_reason?: string;
    warnings?: any;
    brand?: GetBrandResponseSerializer;
    uid?: number;
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
    name: string;
    address: GetAddressSerializer;
    _custom_json?: any;
    product_return_config?: ProductReturnConfigSerializer;
    timing?: LocationDayWiseSerializer[];
    gst_credentials?: InvoiceDetailsSerializer;
    display_name: string;
    store_type?: string;
    manager?: LocationManagerSerializer;
    company: number;
    code: string;
    stage?: string;
    notification_emails?: string[];
    documents?: Document[];
    warnings?: any;
    contact_numbers?: SellerPhoneNumber[];
    uid?: number;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type _ArticleQuery = {
    ignored_stores?: number[];
    item_id?: number;
    size?: string;
};
type _AssignStoreArticle = {
    meta?: any;
    group_id?: string;
    article_assignment?: _ArticleAssignment;
    quantity?: number;
    query?: _ArticleQuery;
};
type AssignStoreRequestValidator = {
    articles?: _AssignStoreArticle[];
    channel_identifier?: string;
    pincode?: string;
    store_ids?: number[];
    channel_type?: string;
    app_id?: string;
    company_id?: number;
};
type AssignStoreResponseSerializer = {
    meta?: any;
    price_marked?: number;
    s_city?: string;
    status?: boolean;
    size?: string;
    store_id?: number;
    index?: number;
    _id?: string;
    article_assignment?: _ArticleAssignment;
    store_pincode?: string;
    preice_effective?: number;
    quantity?: number;
    company_id?: number;
    item_id?: number;
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
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type Rule = {
    key?: number;
    value?: number;
    discount_qty?: number;
    min?: number;
    max?: number;
};
type Validity = {
    priority?: number;
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
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    codes?: string[];
    types?: string[];
    iins?: string[];
    networks?: string[];
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    payments?: any;
    platforms?: string[];
    ordering_stores?: number[];
    post_order?: PostOrder;
    price_range?: PriceRange;
    user_groups?: number[];
    bulk_bundle?: BulkBundleRestriction;
};
type State = {
    is_archived?: boolean;
    is_public?: boolean;
    is_display?: boolean;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type RuleDefinition = {
    type: string;
    currency_code?: string;
    scope?: string[];
    value_type: string;
    applicable_on: string;
    calculate_on: string;
    auto_apply?: boolean;
    is_exact?: boolean;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    auto?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    title?: string;
    apply?: DisplayMetaDict;
    subtitle?: string;
    description?: string;
};
type CouponSchedule = {
    end?: string;
    start?: string;
    next_schedule?: any[];
    cron?: string;
    duration?: number;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Validation = {
    anonymous?: boolean;
    user_registered_after?: string;
    app_id?: string[];
};
type CouponAdd = {
    ownership: Ownership;
    type_slug: string;
    rule: Rule[];
    tags?: string[];
    validity: Validity;
    restrictions?: Restrictions;
    state?: State;
    action?: CouponAction;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    _schedule?: CouponSchedule;
    date_meta?: CouponDateMeta;
    code: string;
    validation?: Validation;
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
    ownership: Ownership;
    type_slug: string;
    rule: Rule[];
    tags?: string[];
    validity: Validity;
    restrictions?: Restrictions;
    state?: State;
    action?: CouponAction;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    _schedule?: CouponSchedule;
    date_meta?: CouponDateMeta;
    code: string;
    validation?: Validation;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    type: string;
    uses?: PaymentAllowValue1;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type Restrictions1 = {
    uses: UsesRestriction1;
    order_quantity?: number;
    payments?: PromotionPaymentModes[];
    platforms?: string[];
    user_id?: string[];
    anonymous_users?: boolean;
    post_order?: PostOrder1;
    user_registered?: UserRegistered;
    user_groups?: number[];
};
type PromotionSchedule = {
    end?: string;
    start: string;
    published: boolean;
    next_schedule?: any[];
    cron?: string;
    duration?: number;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type DiscountOffer = {
    apportion_discount?: boolean;
    discount_amount?: number;
    partial_can_ret?: boolean;
    max_offer_quantity?: number;
    max_usage_per_transaction?: number;
    discount_price?: number;
    max_discount_amount?: number;
    min_offer_quantity?: number;
    code?: string;
    discount_percentage?: number;
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
    all_items?: boolean;
    item_exclude_category?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_company?: number[];
    cart_total?: CompareObject;
    item_store?: number[];
    item_sku?: string[];
    cart_quantity?: CompareObject;
    item_category?: number[];
    item_size?: string[];
    item_brand?: number[];
    available_zones?: string[];
    cart_unique_item_amount?: CompareObject;
    buy_rules?: string[];
    item_exclude_company?: number[];
    item_exclude_id?: number[];
    item_exclude_sku?: string[];
    item_exclude_brand?: number[];
    item_exclude_store?: number[];
};
type DiscountRule = {
    offer: DiscountOffer;
    buy_condition: string;
    discount_type: string;
    item_criteria: ItemCriteria;
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
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionListItem = {
    visiblility?: Visibility;
    currency?: string;
    restrictions?: Restrictions1;
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    promo_group: string;
    promotion_type: string;
    ownership: Ownership1;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    apply_priority?: number;
    _custom_json?: any;
    application_id: string;
    calculate_on?: string;
    code?: string;
    buy_rules: any;
    stackable?: boolean;
    date_meta?: PromotionDateMeta;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    mode: string;
    apply_exclusive?: string;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    visiblility?: Visibility;
    currency?: string;
    restrictions?: Restrictions1;
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    promo_group: string;
    promotion_type: string;
    ownership: Ownership1;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    apply_priority?: number;
    _custom_json?: any;
    application_id: string;
    calculate_on?: string;
    code?: string;
    buy_rules: any;
    stackable?: boolean;
    date_meta?: PromotionDateMeta;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    mode: string;
    apply_exclusive?: string;
};
type PromotionUpdate = {
    visiblility?: Visibility;
    currency?: string;
    restrictions?: Restrictions1;
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    promo_group: string;
    promotion_type: string;
    ownership: Ownership1;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    apply_priority?: number;
    _custom_json?: any;
    application_id: string;
    calculate_on?: string;
    code?: string;
    buy_rules: any;
    stackable?: boolean;
    date_meta?: PromotionDateMeta;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    mode: string;
    apply_exclusive?: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    entity_type?: string;
    type?: string;
    entity_slug?: string;
    modified_on?: string;
    title?: string;
    subtitle?: string;
    created_on?: string;
    example?: string;
    description?: string;
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
type PromoMeta = {
    message?: string;
};
type ProductImage = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
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
type CartProduct = {
    images?: ProductImage[];
    type?: string;
    name?: string;
    slug?: string;
    uid?: number;
    brand?: BaseInfo;
    action?: ProductAction;
    categories?: CategoryInfo[];
};
type FreeGiftItem = {
    item_id?: number;
    item_price_details?: any;
    item_images_url?: string[];
    item_slug?: string;
    item_name?: string;
    item_brand_name?: string;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
};
type DiscountRulesApp = {
    offer?: any;
    raw_offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
};
type AppliedPromotion = {
    article_quantity?: number;
    buy_rules?: BuyRules[];
    promo_id?: string;
    applied_free_articles?: AppliedFreeArticles[];
    amount?: number;
    promotion_name?: string;
    discount_rules?: DiscountRulesApp[];
    mrp_promotion?: boolean;
    promotion_group?: string;
    offer_text?: string;
    promotion_type?: string;
};
type ProductAvailability = {
    deliverable?: boolean;
    sizes?: string[];
    other_store_quantity?: number;
    is_valid?: boolean;
    out_of_stock?: boolean;
};
type BasePrice = {
    marked?: number;
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    type?: string;
    quantity?: number;
    extra_meta?: any;
    product_group_tags?: string[];
    size?: string;
    price?: ArticlePriceInfo;
    uid?: string;
    store?: BaseInfo;
    seller?: BaseInfo;
    parent_item_identifiers?: any;
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
    converted?: ProductPrice;
    base?: ProductPrice;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    promo_meta?: PromoMeta;
    product?: CartProduct;
    quantity?: number;
    message?: string;
    promotions_applied?: AppliedPromotion[];
    key?: string;
    availability?: ProductAvailability;
    discount?: string;
    article?: ProductArticle;
    coupon_message?: string;
    price?: ProductPriceInfo;
    is_set?: boolean;
    identifiers: CartProductIdentifer;
    bulk_offer?: any;
    price_per_unit?: ProductPriceInfo;
    parent_item_identifiers?: any;
};
type RawBreakup = {
    subtotal?: number;
    vog?: number;
    delivery_charge?: number;
    convenience_fee?: number;
    gst_charges?: number;
    discount?: number;
    you_saved?: number;
    total?: number;
    coupon?: number;
    cod_charge?: number;
    mrp_total?: number;
    fynd_cash?: number;
};
type DisplayBreakup = {
    currency_code?: string;
    display?: string;
    key?: string;
    message?: string[];
    currency_symbol?: string;
    value?: number;
};
type CouponBreakup = {
    max_discount_value?: number;
    type?: string;
    message?: string;
    title?: string;
    sub_title?: string;
    minimum_cart_value?: number;
    coupon_type?: string;
    value?: number;
    coupon_value?: number;
    is_applied?: boolean;
    description?: string;
    uid?: string;
    code?: string;
};
type LoyaltyPoints = {
    applicable?: number;
    description?: string;
    is_applied?: boolean;
    total?: number;
};
type CartBreakup = {
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    items?: CartProductInfo[];
    message?: string;
    breakup_values?: CartBreakup;
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    meta?: any;
    area_code_slug?: string;
    pincode?: number;
    country?: string;
    address?: string;
    address_type?: string;
    email?: string;
    city?: string;
    area?: string;
    phone?: number;
    name?: string;
    area_code: string;
    state?: string;
    country_code?: string;
    landmark?: string;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
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
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type OpenApiOrderItem = {
    product_id: number;
    employee_discount?: number;
    meta?: CartItemMeta;
    quantity?: number;
    coupon_effective_discount: number;
    discount: number;
    price_effective: number;
    price_marked: number;
    extra_meta?: any;
    size: string;
    loyalty_discount?: number;
    files?: OpenApiFiles[];
    cod_charges: number;
    amount_paid: number;
    delivery_charges: number;
    payment_methods: MultiTenderPaymentMethod[];
    cashback_applied: number;
};
type OpenApiPlatformCheckoutReq = {
    currency_code?: string;
    cart_items: OpenApiOrderItem[];
    affiliate_order_id?: string;
    cod_charges: number;
    shipping_address?: ShippingAddress;
    delivery_charges: number;
    payment_mode?: string;
    cashback_applied: number;
    employee_discount?: any;
    order_id?: string;
    files?: OpenApiFiles[];
    comment?: string;
    coupon_code: string;
    coupon?: string;
    coupon_value: number;
    cart_value: number;
    billing_address: ShippingAddress;
    payment_methods: MultiTenderPaymentMethod[];
    gstin?: string;
    loyalty_discount?: number;
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    order_ref_id?: string;
    message?: string;
    order_id: string;
};
type AbandonedCart = {
    merge_qty?: boolean;
    _id: string;
    app_id?: string;
    payment_mode?: string;
    pick_up_customer_details?: any;
    discount?: number;
    order_id?: string;
    last_modified: string;
    comment?: string;
    coupon?: any;
    cart_value?: number;
    uid: number;
    bulk_coupon_discount?: number;
    articles: any[];
    payment_methods?: any[];
    promotion?: any;
    meta?: any;
    buy_now?: boolean;
    payments?: any;
    user_id: string;
    expire_at: string;
    created_on: string;
    fc_index_map?: number[];
    cod_charges?: any;
    shipments?: any[];
    is_archive?: boolean;
    delivery_charges?: any;
    fynd_credits?: any;
    is_default: boolean;
    is_active?: boolean;
    checkout_mode?: string;
    gstin?: string;
    cashback: any;
};
type AbandonedCartResponse = {
    message?: string;
    success?: boolean;
    page?: Page;
    items?: AbandonedCart[];
    result?: any;
};
type AddProductCart = {
    item_id?: number;
    quantity?: number;
    display?: string;
    extra_meta?: any;
    product_group_tags?: string[];
    article_assignment?: any;
    pos?: boolean;
    item_size?: string;
    article_id?: string;
    store_id?: number;
    seller_id?: number;
    parent_item_identifiers?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    payment_selection_lock?: PaymentSelectionLock;
    message?: string;
    restrict_checkout?: boolean;
    delivery_charge_info?: string;
    id?: string;
    currency?: CartCurrency;
    buy_now?: boolean;
    coupon_text?: string;
    checkout_mode?: string;
    is_valid?: boolean;
    last_modified?: string;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    gstin?: string;
};
type AddCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
    message?: string;
    partial?: boolean;
};
type UpdateProductCart = {
    item_id?: number;
    item_index?: number;
    quantity?: number;
    extra_meta?: any;
    item_size?: string;
    article_id?: string;
    identifiers: CartProductIdentifer;
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
