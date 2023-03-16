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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, FilterInfoOption, FiltersInfo, ShipmentItemFulFillingStore, ShipmentStatus, PaymentModeInfo, PlatformItem, Prices, GSTDetailsData, BagUnit, UserDataInfo, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, FulfillingStore, BagConfigs, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, BagGST, OrderBagArticle, BagStateMapper, CurrentStatus, Identifier, FinancialBreakup, PlatformDeliveryAddress, OrderBrandName, OrderBags, ShipmentPayments, UserDetailsData, BagStatusHistory, OrderDetailsData, TrackingList, DPDetailsData, ShipmentStatusData, ShipmentInfoResponse, OrderingStoreDetails, PlatformShipment, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, AffiliateMeta, AffiliateBagDetails, BagGSTDetails, ReturnConfig, Dimensions, Weight, Article, ArticleDetails, EInvoice, EinvoiceInfo, LockData, ShipmentTimeStamp, BuyerDetails, DebugInfo, Formatted, ShipmentMeta, PDFLinks, AffiliateDetails, StoreAddress, EInvoicePortalDetails, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, Store, Attributes, Item, B2BPODetails, BagMeta, Dates, Brand, BagReturnableCancelableStatus, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, UserData, OrderPriority, MarketPlacePdf, AffiliateBag, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, TaxInfo, ShippingInfo, Tax, Charge, ProcessingDates, LineItem, Shipment, PaymentMethod, PaymentInfo, BillingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, MOQData, SEOData, OwnerAppItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, CollectionQuery, BannerImage, ImageUrls, Media1, GetCollectionDetailNest, GetCollectionListingResponse, SeoDetail, UserInfo, CollectionSchedule, CollectionImage, CollectionBanner, CollectionBadge, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Media2, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, NetQuantityResponse, ProductPublished, ReturnConfigResponse, Logo, Image, Product, ProductListingResponse, CustomOrder, NetQuantity, ProductPublish, TeaserTag, Trader, TaxIdentifier, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, ManufacturerResponse, WeightResponse, DimensionResponse, ReturnConfig1, QuantityBase, Quantities, PriceMeta, Trader1, BrandMeta, CompanyMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ManufacturerResponse1, WeightResponse1, DimensionResponse1, Quantity, QuantitiesArticle, ArticleStoreResponse, ReturnConfig2, PriceArticle, Trader2, BrandMeta1, CompanyMeta1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, LocationIntegrationType, SellerPhoneNumber, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer1, LocationTimingSerializer, LocationDayWiseSerializer, LocationManagerSerializer, ProductReturnConfigSerializer, GetAddressSerializer, UserSerializer2, GetCompanySerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, ContactDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Ownership, DisplayMetaDict, DisplayMeta, Validity, CouponSchedule, Rule, RuleDefinition, CouponAction, CouponDateMeta, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, PriceRange, BulkBundleRestriction, PostOrder, Restrictions, CouponAuthor, State, Validation, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionSchedule, PromotionAuthor, Visibility, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, PostOrder1, Restrictions1, PromotionAction, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionDateMeta, Ownership1, DisplayMeta1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, ProductPrice, ProductPriceInfo, Ownership2, AppliedPromotion, PromoMeta, CartProductIdentifer, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, CategoryInfo, ActionQuery, ProductAction, ProductImage, CartProduct, ProductAvailability, CartProductInfo, LoyaltyPoints, DisplayBreakup, RawBreakup, CouponBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    ticket?: Ticket;
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
    category: TicketCategory;
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
    display_fields: string[];
    excluded_fields: string[];
    aggregators?: any[];
    created: boolean;
    app_id: string;
    success: boolean;
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
type PaymentGatewayConfig = {
    key: string;
    merchant_salt: string;
    secret: string;
    is_active?: boolean;
    config_type: string;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    is_active?: boolean;
    aggregator_name?: PaymentGatewayConfig;
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
    success: boolean;
    error: ErrorCodeAndDescription;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentApp = {
    display_name?: string;
    code?: string;
    package_name?: string;
    logos?: PaymentModeLogo;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    exp_year?: number;
    card_reference?: string;
    intent_app?: IntentApp[];
    cod_limit?: number;
    fynd_vpa?: string;
    timeout?: number;
    aggregator_name: string;
    card_issuer?: string;
    display_name?: string;
    name?: string;
    card_fingerprint?: string;
    code?: string;
    card_brand?: string;
    intent_flow?: boolean;
    display_priority?: number;
    intent_app_error_list?: string[];
    retry_count?: number;
    nickname?: string;
    cod_limit_per_order?: number;
    card_number?: string;
    card_id?: string;
    card_name?: string;
    remaining_limit?: number;
    card_isin?: string;
    card_type?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    logo_url?: PaymentModeLogo;
    exp_month?: number;
    card_brand_image?: string;
    card_token?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    merchant_code?: string;
    expired?: boolean;
};
type RootPaymentMode = {
    is_pay_by_card_pl?: boolean;
    display_priority: number;
    save_card?: boolean;
    add_card_enabled?: boolean;
    list?: PaymentModeList[];
    aggregator_name?: string;
    display_name: string;
    name: string;
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
    transfer_type: string;
    unique_transfer_no: any;
    more_attributes: any;
    payouts_aggregators: any[];
    is_default: boolean;
    is_active: boolean;
};
type PayoutBankDetails = {
    account_no?: string;
    ifsc_code: string;
    country?: string;
    state?: string;
    account_holder?: string;
    pincode?: number;
    city?: string;
    branch_name?: string;
    account_type: string;
    bank_name?: string;
};
type PayoutRequest = {
    transfer_type: string;
    aggregator: string;
    bank_details: PayoutBankDetails;
    users: any;
    is_active: boolean;
    unique_external_id: string;
};
type PayoutResponse = {
    payouts: any;
    transfer_type: string;
    aggregator: string;
    unique_transfer_no: string;
    created: boolean;
    payment_status: string;
    bank_details: any;
    users: any;
    is_active: boolean;
    success: boolean;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    is_active: boolean;
    success: boolean;
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
type RefundAccountResponse = {
    message: string;
    is_verified_flag?: boolean;
    success: boolean;
    data?: any;
};
type NotFoundResourceError = {
    code: string;
    success: boolean;
    description: string;
};
type BankDetailsForOTP = {
    account_no: string;
    ifsc_code: string;
    account_holder: string;
    branch_name: string;
    bank_name: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    branch_name: string;
    success?: boolean;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    account_no: string;
    beneficiary_id: string;
    account_holder: string;
    title: string;
    is_active: boolean;
    display_name: string;
    modified_on: string;
    id: number;
    delights_user_name?: string;
    bank_name: string;
    address: string;
    ifsc_code: string;
    mobile?: string;
    branch_name?: string;
    subtitle: string;
    transfer_mode: string;
    comment?: string;
    created_on: string;
    email: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    extra_meta?: any;
    payment_gateway?: string;
    order_id?: string;
    current_status?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    amount: number;
    name?: string;
    mode: string;
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
type CODdata = {
    limit: number;
    user_id: string;
    remaining_limit: number;
    usages: number;
    is_active: boolean;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    mobileno: string;
    is_active: boolean;
    merchant_user_id: string;
};
type SetCODOptionResponse = {
    message: string;
    success: boolean;
};
type FilterInfoOption = {
    text: string;
    value?: string;
    name?: string;
};
type FiltersInfo = {
    text: string;
    options?: FilterInfoOption[];
    type: string;
    value: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentStatus = {
    title: string;
    status: string;
    actual_status: string;
    ops_status: string;
    hex_code: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type PlatformItem = {
    can_cancel?: boolean;
    l1_category?: string[];
    name?: string;
    l3_category_name?: string;
    color?: string;
    size?: string;
    images?: string[];
    l3_category?: number;
    id?: number;
    image?: string[];
    can_return?: boolean;
    code?: string;
    department_id?: number;
};
type Prices = {
    cashback?: number;
    coupon_value?: number;
    price_effective?: number;
    amount_paid?: number;
    discount?: number;
    cashback_applied?: number;
    cod_charges?: number;
    fynd_credits?: number;
    refund_amount?: number;
    price_marked?: number;
    tax_collected_at_source?: number;
    delivery_charge?: number;
    amount_paid_roundoff?: number;
    promotion_effective_discount?: number;
    refund_credit?: number;
    value_of_good?: number;
};
type GSTDetailsData = {
    gst_fee: number;
    tax_collected_at_source: number;
    value_of_good: number;
    gstin_code: string;
    brand_calculated_amount: number;
};
type BagUnit = {
    can_cancel?: boolean;
    shipment_id: string;
    item?: PlatformItem;
    status: any;
    ordering_channel: string;
    total_shipment_bags: number;
    item_quantity: number;
    can_return?: boolean;
    prices?: Prices;
    gst?: GSTDetailsData;
    bag_id: number;
};
type UserDataInfo = {
    last_name?: string;
    mobile?: string;
    name?: string;
    is_anonymous_user?: boolean;
    uid?: number;
    avis_user_id?: string;
    email?: string;
    first_name?: string;
    gender?: string;
};
type ShipmentItem = {
    fulfilling_store?: ShipmentItemFulFillingStore;
    application?: any;
    shipment_status?: ShipmentStatus;
    payment_mode_info?: PaymentModeInfo;
    total_bags_count: number;
    channel?: any;
    bags?: BagUnit[];
    created_at: string;
    total_shipments_in_order: number;
    sla?: any;
    shipment_created_at: number;
    id: string;
    user?: UserDataInfo;
    fulfilling_centre: string;
    prices?: Prices;
    payment_methods?: any;
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    applied_filters?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type FulfillingStore = {
    state: string;
    phone: string;
    store_name: string;
    pincode: string;
    fulfillment_channel: string;
    city: string;
    address: string;
    id: number;
    meta: any;
    contact_person: string;
    code: string;
    country: string;
};
type BagConfigs = {
    is_returnable: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    allow_force_return: boolean;
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
    promotion_type?: string;
    amount?: number;
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
    promo_id?: string;
    article_quantity?: number;
    buy_rules?: BuyRules[];
};
type BagGST = {
    gst_fee?: number;
    is_default_hsn_code?: boolean;
    brand_calculated_amount?: number;
    gst_tag?: string;
    gst_tax_percentage?: number;
    gstin_code?: string;
    hsn_code?: string;
    value_of_good?: number;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type BagStateMapper = {
    app_display_name?: string;
    name: string;
    display_name: string;
    app_state_name?: string;
    bs_id: number;
    is_active?: boolean;
    app_facing?: boolean;
    state_type: string;
    journey_type: string;
    notify_customer?: boolean;
};
type CurrentStatus = {
    current_status_id: number;
    store_id?: number;
    bag_state_mapper?: BagStateMapper;
    kafka_sync?: boolean;
    shipment_id?: string;
    state_id?: number;
    status?: string;
    delivery_awb_number?: string;
    state_type?: string;
    delivery_partner_id?: number;
    updated_at?: number;
    bag_id?: number;
    created_at?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    price_effective: number;
    item_name: string;
    cashback: number;
    discount: number;
    amount_paid: number;
    identifiers: Identifier;
    cod_charges: number;
    promotion_effective_discount: number;
    refund_credit: number;
    brand_calculated_amount: number;
    gst_fee: number;
    size: string;
    coupon_effective_discount: number;
    tax_collected_at_source?: number;
    delivery_charge: number;
    added_to_fynd_cash: boolean;
    coupon_value: number;
    cashback_applied: number;
    fynd_credits: number;
    total_units: number;
    price_marked: number;
    gst_tag: string;
    gst_tax_percentage: number;
    amount_paid_roundoff?: number;
    transfer_price: number;
    hsn_code: string;
    value_of_good: number;
};
type PlatformDeliveryAddress = {
    address1?: string;
    landmark?: string;
    state?: string;
    address_type?: string;
    address2?: string;
    phone?: string;
    longitude?: number;
    area?: string;
    pincode?: string;
    email?: string;
    version?: string;
    city?: string;
    created_at?: string;
    latitude?: number;
    address_category?: string;
    updated_at?: string;
    contact_person?: string;
    country?: string;
};
type OrderBrandName = {
    logo: string;
    modified_on?: string;
    brand_name: string;
    id: number;
    company?: string;
    created_on: string;
};
type OrderBags = {
    line_number?: number;
    parent_promo_bags?: any;
    bag_configs?: BagConfigs;
    identifier?: string;
    seller_identifier?: string;
    applied_promos?: AppliedPromos[];
    quantity?: number;
    bag_id: number;
    gst_details?: BagGST;
    entity_type?: string;
    display_name?: string;
    article?: OrderBagArticle;
    current_status?: CurrentStatus;
    financial_breakup?: FinancialBreakup;
    can_cancel?: boolean;
    item?: PlatformItem;
    delivery_address?: PlatformDeliveryAddress;
    can_return?: boolean;
    brand?: OrderBrandName;
    prices?: Prices;
};
type ShipmentPayments = {
    source?: string;
    logo?: string;
    mode?: string;
};
type UserDetailsData = {
    state: string;
    name: string;
    phone: string;
    pincode: string;
    email?: string;
    city: string;
    address: string;
    country: string;
};
type BagStatusHistory = {
    app_display_name?: string;
    store_id?: number;
    bag_state_mapper?: BagStateMapper;
    forward?: boolean;
    kafka_sync?: boolean;
    shipment_id?: string;
    display_name?: string;
    state_id?: number;
    status: string;
    delivery_awb_number?: string;
    reasons?: any[];
    state_type?: string;
    delivery_partner_id?: number;
    bsh_id?: number;
    updated_at?: string;
    bag_id?: number;
    created_at?: string;
};
type OrderDetailsData = {
    fynd_order_id: string;
    affiliate_id?: string;
    ordering_channel_logo?: any;
    tax_details?: any;
    cod_charges?: string;
    order_date?: string;
    ordering_channel?: string;
    source?: string;
    order_value?: string;
};
type TrackingList = {
    text: string;
    is_current?: boolean;
    status: string;
    time?: string;
    is_passed?: boolean;
};
type DPDetailsData = {
    awb_no?: string;
    name?: string;
    eway_bill_id?: string;
    pincode?: string;
    id?: number;
    track_url?: string;
    gst_tag?: string;
    country?: string;
};
type ShipmentStatusData = {
    shipment_id?: string;
    bag_list?: string[];
    status?: string;
    id?: number;
    created_at?: string;
};
type ShipmentInfoResponse = {
    pay_button?: string;
    order_status: any;
    fulfilling_store?: FulfillingStore;
    order_created_time?: string;
    bags?: OrderBags[];
    is_packaging_order: boolean;
    is_not_fynd_source: boolean;
    payments?: ShipmentPayments;
    user_id: string;
    tracking_url: string;
    forward_order_status?: any[];
    credit_note_id: string;
    coupon?: any;
    affiliate_shipment_id: string;
    is_fynd_coupon: boolean;
    is_invoiced: boolean;
    refund_text?: string;
    payment_mode?: string;
    due_date?: string;
    delivery_details?: UserDetailsData;
    priority_text?: string;
    gst_details?: GSTDetailsData;
    forward_tracking_list?: any[];
    platform_logo: boolean;
    forward_shipment_status?: any[];
    lock_status: string;
    shipment_status?: string;
    bag_status_history?: BagStatusHistory[];
    picked_date?: string;
    order?: OrderDetailsData;
    secured_delivery_flag?: string;
    current_shipment_status: any;
    user_agent?: string;
    email_id: string;
    billing_details?: UserDetailsData;
    escalation?: any;
    ordering_store: any;
    enable_dp_tracking?: boolean;
    can_cancel?: boolean;
    is_fynd_store?: string;
    status_progress: number;
    packaging_type?: string;
    refund_details?: any;
    delivery_slot?: any;
    vertical?: string;
    shipment_images?: string[];
    can_break: string;
    mid?: string;
    items: any[];
    enable_tracking?: boolean;
    tracking_list?: TrackingList[];
    shipment_quantity?: number;
    order_type: string;
    can_return?: boolean;
    is_pdsr?: string;
    invoice: any;
    bank_data?: any;
    fyndstore_emp: any;
    kirana_store_id?: string;
    total_items?: number;
    shipment_id: string;
    delivery_status: any[];
    beneficiary_details?: boolean;
    user_info?: any;
    child_nodes?: string[];
    custom_meta?: any[];
    dp_details?: DPDetailsData;
    status?: ShipmentStatusData;
    total_bags?: number;
    company: any;
    journey_type?: string;
    go_green?: boolean;
    replacement_details?: string;
    prices?: Prices;
    operational_status?: string;
};
type OrderingStoreDetails = {
    state: string;
    phone: string;
    code: string;
    store_name: string;
    pincode: string;
    city: string;
    address: string;
    meta: any;
    contact_person: string;
    ordering_store_id: number;
    country: string;
};
type PlatformShipment = {
    fulfilling_store?: FulfillingStore;
    bags?: OrderBags[];
    payments?: ShipmentPayments;
    coupon?: any;
    payment_mode?: string;
    delivery_details?: UserDetailsData;
    priority_text?: string;
    gst_details?: GSTDetailsData;
    platform_logo?: string;
    shipment_status?: string;
    bag_status_history?: BagStatusHistory[];
    picked_date?: string;
    order?: OrderDetailsData;
    user_agent?: string;
    billing_details?: UserDetailsData;
    ordering_store?: OrderingStoreDetails;
    enable_dp_tracking?: boolean;
    packaging_type?: string;
    delivery_slot?: any;
    vertical?: string;
    shipment_images?: string[];
    tracking_list?: TrackingList[];
    shipment_quantity?: number;
    total_items?: number;
    shipment_id: string;
    custom_meta?: any[];
    dp_details?: DPDetailsData;
    status?: ShipmentStatusData;
    total_bags?: number;
    journey_type?: string;
    prices?: Prices;
    operational_status?: string;
};
type OrderMeta = {
    comment?: string;
    ordering_store?: number;
    mongo_cart_id?: number;
    order_child_entities?: string[];
    customer_note?: string;
    order_tags?: any[];
    staff?: any;
    order_platform?: string;
    currency_symbol?: string;
    files?: any[];
    employee_id?: number;
    payment_type?: string;
    order_type?: string;
    cart_id?: number;
    extra_meta?: any;
};
type OrderDict = {
    fynd_order_id: string;
    tax_details?: any;
    order_date: string;
    meta?: OrderMeta;
    prices?: Prices;
    payment_methods?: any;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    order?: OrderDict;
};
type SubLane = {
    text?: string;
    total_items?: number;
    value?: string;
    index?: number;
    actions?: any[];
};
type SuperLane = {
    text: string;
    options?: SubLane[];
    total_items?: number;
    value: string;
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
    value?: string;
    name?: string;
};
type PlatformOrderItems = {
    payment_mode?: string;
    shipments?: PlatformShipment[];
    user_info?: UserDataInfo;
    order_created_time?: string;
    channel?: PlatformChannel;
    total_order_value?: number;
    order_id?: string;
    breakup_values?: PlatformBreakupValues[];
    meta?: any;
    order_value?: number;
};
type OrderListingResponse = {
    lane?: string;
    page?: Page;
    total_count?: number;
    success?: boolean;
    message?: string;
    items?: PlatformOrderItems[];
};
type Options = {
    text?: string;
    value?: number;
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
    awb?: string;
    updated_time?: string;
    account_name?: string;
    status?: string;
    last_location_recieved_at?: string;
    raw_status?: string;
    meta?: any;
    reason?: string;
    updated_at?: string;
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
    request_details?: any;
    display_name?: string;
    report_id?: string;
    status?: string;
    s3_key?: string;
    report_name?: string;
    report_type?: string;
    report_created_at?: string;
    report_requested_at?: string;
};
type JioCodeUpsertDataSet = {
    article_id?: string;
    item_id?: string;
    jio_code?: string;
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
    trace_id?: string;
    identifier?: string;
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
    data?: any[];
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    batch_id: string;
    store_id?: string;
    store_code?: string;
    invoice_status?: string;
    store_name?: string;
    company_id?: string;
    data?: any;
    invoice?: any;
    label?: any;
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
    operation?: string;
    method?: string;
    cdn?: URL;
    size?: number;
    file_path?: string;
    tags?: string[];
    content_type?: string;
    upload?: FileUploadResponse;
    namespace?: string;
    file_name?: string;
};
type BulkListingPage = {
    has_previous?: boolean;
    size?: number;
    type?: string;
    total?: number;
    has_next?: boolean;
    current?: number;
};
type bulkListingData = {
    batch_id?: string;
    store_id?: number;
    store_code?: string;
    failed?: number;
    store_name?: string;
    user_id?: string;
    excel_url?: string;
    file_name?: string;
    processing_shipments?: string[];
    successful?: number;
    id?: string;
    user_name?: string;
    successful_shipments?: any[];
    uploaded_on?: string;
    company_id?: number;
    status?: string;
    total?: number;
    failed_shipments?: any[];
    processing?: number;
};
type BulkListingResponse = {
    error?: string;
    page?: BulkListingPage;
    success?: boolean;
    data?: bulkListingData[];
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
    total_shipments_count?: number;
    batch_id?: string;
    successful_shipment_ids?: string[];
    company_id?: string;
    successful_shipments_count?: number;
    failed_shipments_count?: number;
    processing_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    failed_records?: string[];
    uploaded_on?: string;
    success?: string;
    status?: boolean;
    error?: string[];
    uploaded_by?: string;
    user_id?: string;
    data?: BulkActionDetailsDataField[];
    message?: string;
};
type AffiliateMeta = {
    box_type?: string;
    order_item_id?: string;
    coupon_code?: string;
    employee_discount?: number;
    channel_shipment_id?: string;
    is_priority?: boolean;
    channel_order_id?: string;
    loyalty_discount?: number;
    quantity?: number;
    due_date?: string;
    size_level_total_qty?: number;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    employee_discount?: number;
    loyalty_discount?: number;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
};
type BagGSTDetails = {
    gst_fee: number;
    igst_tax_percentage: number;
    hsn_code_id: string;
    cgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    brand_calculated_amount: number;
    sgst_tax_percentage: number;
    sgst_gst_fee: string;
    igst_gst_fee: string;
    gst_tag: string;
    gst_tax_percentage: number;
    tax_collected_at_source: number;
    cgst_tax_percentage: number;
    gstin_code?: string;
    hsn_code: string;
    value_of_good: number;
};
type ReturnConfig = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Dimensions = {
    length?: number;
    unit?: string;
    width?: number;
    height?: number;
    is_default?: boolean;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type Article = {
    raw_meta?: any;
    child_details?: any;
    uid: string;
    identifiers: Identifier;
    size: string;
    _id: string;
    seller_identifier: string;
    a_set?: any;
    return_config?: ReturnConfig;
    dimensions?: Dimensions;
    weight?: Weight;
    esp_modified?: any;
    code?: string;
    is_set?: boolean;
};
type ArticleDetails = {
    status?: any;
};
type EInvoice = {
    signed_invoice?: string;
    acknowledge_date?: string;
    acknowledge_no?: number;
    error_message?: string;
    irn?: string;
    error_code?: string;
    signed_qr_code?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type LockData = {
    mto?: boolean;
    locked?: boolean;
    lock_message?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type BuyerDetails = {
    state: string;
    gstin: string;
    name: string;
    pincode: number;
    ajio_site_id?: string;
    city: string;
    address: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentMeta = {
    ewaybill_info?: any;
    einvoice_info?: EinvoiceInfo;
    return_affiliate_shipment_id?: string;
    lock_data?: LockData;
    bag_weight?: any;
    forward_affiliate_shipment_id?: string;
    timestamp?: ShipmentTimeStamp;
    dp_name?: string;
    due_date?: string;
    forward_affiliate_order_id?: string;
    shipment_volumetric_weight?: number;
    assign_dp_from_sb?: boolean;
    fulfilment_priority_text?: string;
    auto_trigger_dp_assignment_acf: boolean;
    weight: number;
    awb_number?: string;
    same_store_available: boolean;
    return_awb_number?: string;
    box_type?: string;
    store_invoice_updated_date?: string;
    return_store_node?: number;
    shipment_weight?: number;
    order_type?: string;
    external?: any;
    return_details?: any;
    b2b_buyer_details?: BuyerDetails;
    dp_sort_key?: string;
    po_number?: string;
    packaging_name?: string;
    dp_id?: string;
    dp_options?: any;
    debug_info?: DebugInfo;
    formatted?: Formatted;
    b2c_buyer_details?: any;
    return_affiliate_order_id?: string;
    marketplace_store_id?: string;
};
type PDFLinks = {
    label_type: string;
    label_a6?: string;
    po_invoice?: string;
    label_a4?: string;
    invoice_a6?: string;
    label_pos?: string;
    invoice_a4?: string;
    credit_note_url?: string;
    invoice_pos?: string;
    b2b?: string;
    invoice?: string;
    label?: string;
    invoice_type: string;
};
type AffiliateDetails = {
    affiliate_order_id: string;
    affiliate_id?: string;
    affiliate_store_id: string;
    shipment_meta: ShipmentMeta;
    company_affiliate_tag?: string;
    affiliate_shipment_id: string;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    ad_id?: string;
    pdf_links?: PDFLinks;
};
type StoreAddress = {
    country_code: string;
    address_category: string;
    pincode: number;
    country: string;
    phone: string;
    area?: string;
    version?: string;
    city: string;
    contact_person: string;
    created_at: string;
    landmark?: string;
    state: string;
    longitude: number;
    latitude: number;
    address1: string;
    address_type: string;
    address2?: string;
    email?: string;
    updated_at: string;
};
type EInvoicePortalDetails = {
    user?: string;
    username?: string;
    password?: string;
};
type Document = {
    ds_type: string;
    url?: string;
    value: string;
    verified: boolean;
    legal_name: string;
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
    einvoice_portal_details?: EInvoicePortalDetails;
    notification_emails?: string[];
    display_name: string;
    additional_contact_details?: any;
    documents?: StoreDocuments;
    stage: string;
    gst_credentials: StoreGstCredentials;
    ewaybill_portal_details?: any;
    timing?: any[];
    product_return_config?: any;
    gst_number?: string;
};
type Store = {
    brand_store_tags?: string[];
    store_address_json?: StoreAddress;
    order_integration_id?: string;
    pincode: string;
    parent_store_id?: number;
    code?: string;
    country: string;
    login_username: string;
    mall_name?: string;
    phone: number;
    is_archived?: boolean;
    alohomora_user_id?: number;
    is_active?: boolean;
    city: string;
    mall_area?: string;
    packaging_material_count?: number;
    vat_no?: string;
    brand_id?: any;
    contact_person: string;
    created_at: string;
    state: string;
    is_enabled_for_recon?: boolean;
    store_email: string;
    location_type: string;
    longitude: number;
    latitude: number;
    meta: StoreMeta;
    address1: string;
    address2?: string;
    s_id: string;
    name: string;
    company_id: number;
    fulfillment_channel: string;
    store_active_from?: string;
    updated_at?: string;
};
type Attributes = {
    primary_color_hex?: string;
    name?: string;
    primary_color?: string;
    brand_name?: string;
    marketer_name?: string;
    primary_material?: string;
    gender?: string[];
    essential?: string;
    marketer_address?: string;
};
type Item = {
    l2_category?: string[];
    webstore_product_url?: string;
    gender?: string;
    code?: string;
    attributes: Attributes;
    l1_category_id?: number;
    l1_category?: string[];
    slug_key: string;
    brand_id: number;
    item_id: number;
    l3_category?: number;
    branch_url?: string;
    can_cancel?: boolean;
    size: string;
    l2_category_id?: number;
    meta?: any;
    can_return?: boolean;
    last_updated_at?: string;
    department_id?: number;
    color?: string;
    name: string;
    l3_category_name?: string;
    brand: string;
    image: string[];
};
type B2BPODetails = {
    po_line_amount?: number;
    docker_number?: string;
    partial_can_ret?: boolean;
    po_tax_amount?: number;
    total_gst_percentage?: number;
    item_base_price?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type Brand = {
    credit_note_allowed?: boolean;
    is_virtual_invoice?: boolean;
    script_last_ran?: string;
    logo?: string;
    created_on?: number;
    modified_on?: number;
    pickup_location?: string;
    start_date?: string;
    brand_name: string;
    company: string;
    brand_id: number;
    credit_note_expiry_days?: number;
    invoice_prefix?: string;
};
type BagReturnableCancelableStatus = {
    is_returnable: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
};
type BagDetailsPlatformResponse = {
    line_number?: number;
    parent_promo_bags?: any;
    identifier?: string;
    affiliate_bag_details: AffiliateBagDetails;
    qc_required?: any;
    order_integration_id?: string;
    seller_identifier?: string;
    applied_promos?: any[];
    quantity?: number;
    reasons?: any[];
    no_of_bags_order?: number;
    b_type?: string;
    gst_details: BagGSTDetails;
    entity_type?: string;
    display_name?: string;
    article: Article;
    article_details?: ArticleDetails;
    affiliate_details?: AffiliateDetails;
    bag_status_history?: BagStatusHistory;
    b_id: number;
    restore_promos?: any;
    current_operational_status: BagStatusHistory;
    bag_update_time?: number;
    current_status: BagStatusHistory;
    financial_breakup: FinancialBreakup[];
    ordering_store?: Store;
    item: Item;
    meta?: BagMeta;
    bag_status: BagStatusHistory[];
    dates?: Dates;
    restore_coupon?: boolean;
    shipment_id?: string;
    brand: Brand;
    tags?: string[];
    status: BagReturnableCancelableStatus;
    original_bag_list?: number[];
    journey_type: string;
    prices: Prices;
    operational_status?: string;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    page_type: string;
    size: number;
    has_next: boolean;
    item_total: number;
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
    shipment_id?: string;
    error?: string;
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
    store_id: number;
    fynd_order_id?: string;
    affiliate_bag_id?: string;
    item_id?: string;
    reason_ids?: number[];
    affiliate_id?: string;
    bag_id?: number;
    set_id?: string;
    mongo_article_id?: string;
    affiliate_order_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    reason_text: string;
    affiliate_bag_id?: string;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    id?: string;
    affiliate_order_id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    entity_type: string;
    action: string;
    action_type: string;
};
type Bags = {
    affiliate_bag_id?: string;
    is_locked?: boolean;
    bag_id?: number;
    affiliate_order_id?: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    status?: string;
    affiliate_shipment_id?: string;
    bags?: Bags[];
    affiliate_id?: string;
    original_filter?: OriginalFilter;
    shipment_id?: string;
    is_bag_locked?: boolean;
    lock_status?: boolean;
    is_shipment_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    message?: string;
    check_response?: CheckResponse[];
    success?: boolean;
};
type AnnouncementResponse = {
    logo_url?: string;
    platform_id?: string;
    company_id?: number;
    title?: string;
    to_datetime?: string;
    description?: string;
    platform_name?: string;
    id: number;
    from_datetime?: string;
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
    status: boolean;
    call_id: string;
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
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
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
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasons = {
    filters?: ProductsReasonsFilters[];
    data?: ProductsReasonsData;
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type Products = {
    line_number?: number;
    identifier?: string;
    quantity?: number;
};
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    identifier: string;
    reasons?: ReasonsData;
    products?: Products[];
};
type StatuesRequest = {
    status?: string;
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    force_transition?: boolean;
    statuses?: StatuesRequest[];
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    final_state?: any;
    status?: number;
    meta?: any;
    identifier?: string;
    code?: string;
    message?: string;
    stack_trace?: string;
    exception?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    payment?: AffiliateInventoryPaymentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    secret: string;
    meta?: AffiliateAppConfigMeta[];
    name: string;
    updated_at: string;
    description?: string;
    owner: string;
    id: string;
    token: string;
    created_at: string;
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
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    affiliate: Affiliate;
    create_user?: boolean;
    bag_end_state?: string;
    store_lookup?: string;
    article_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
};
type OrderUser = {
    phone: number;
    city: string;
    state: string;
    last_name: string;
    mobile: number;
    email: string;
    address1?: string;
    address2?: string;
    country: string;
    pincode: string;
    first_name: string;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
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
    avl_qty: number;
    store_id: number;
    fynd_store_id: string;
    unit_price: number;
    identifier: any;
    affiliate_store_id: string;
    amount_paid: number;
    affiliate_meta: any;
    price_effective: number;
    item_id: number;
    seller_identifier: string;
    modified_on: string;
    delivery_charge: number;
    discount: number;
    pdf_links?: MarketPlacePdf;
    price_marked: number;
    company_id: number;
    transfer_price: number;
    quantity: number;
    hsn_code_id: string;
    item_size: string;
    sku: string;
    _id: string;
};
type ArticleDetails1 = {
    brand_id: number;
    attributes: any;
    category: any;
    quantity: number;
    dimension: any;
    weight: any;
    _id: string;
};
type ShipmentDetails = {
    dp_id?: number;
    meta?: any;
    affiliate_shipment_id: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
    shipments: number;
    box_type?: string;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_type: string;
    fulfillment_id: number;
};
type ShipmentConfig = {
    action: string;
    to_pincode: string;
    shipment: ShipmentDetails[];
    payment_mode: string;
    identifier: string;
    journey: string;
    location_details?: LocationDetails;
    source: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    cod_charges: number;
    coupon?: string;
    discount: number;
    user: UserData;
    delivery_charges: number;
    order_priority?: OrderPriority;
    bags: AffiliateBag[];
    shipment?: ShipmentData;
    payment_mode: string;
    billing_address: OrderUser;
    payment?: any;
    shipping_address: OrderUser;
    items: any;
    order_value: number;
    affiliate_order_id?: string;
};
type CreateOrderPayload = {
    affiliate_id: string;
    order_config: OrderConfig;
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
    id: number;
    slug: string;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    ticket_id?: string;
    ticket_url?: string;
    user: string;
    type: string;
    createdat: string;
    bag_id?: number;
    l2_detail?: string;
    l1_detail?: string;
    message: string;
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
    order_id: string;
    customer_name: string;
    phone_number: number;
    payment_mode: string;
    shipment_id: number;
    brand_name: string;
    message: string;
    amount_paid: number;
    country_code: string;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    bag_id: number;
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
    bag_list?: number[];
    status?: string;
    meta: Meta;
    remarks?: string;
    shipment_id?: string;
    id: number;
};
type OrderStatusData = {
    order_details: OrderDetails;
    errors?: string[];
    shipment_details?: ShipmentDetail[];
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    qc_required: string;
    dp_id: number;
    shipment_ids?: string[];
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type ShippingInfo = {
    address_type?: string;
    alternate_email?: string;
    customer_code?: string;
    first_name: string;
    country_code?: string;
    title?: string;
    house_no?: string;
    state: string;
    geo_location?: any;
    state_code?: string;
    last_name?: string;
    gender?: string;
    pincode: string;
    address1: string;
    alternate_mobile_number?: string;
    external_customer_code?: string;
    primary_email: string;
    slot?: any[];
    primary_mobile_number: string;
    middle_name?: string;
    city: string;
    floor_no?: string;
    shipping_type?: string;
    address2?: string;
    country: string;
    landmark?: string;
};
type Tax = {
    rate: number;
    name: string;
    breakup?: any[];
    amount: any;
};
type Charge = {
    tax?: Tax;
    type: string;
    name: string;
    amount: any;
    code?: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    pack_by_date?: string;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
    customer_pickup_slot?: any;
};
type LineItem = {
    custom_messasge?: string;
    meta?: any;
    seller_identifier: string;
    quantity?: number;
    charges?: Charge[];
    external_line_id?: string;
};
type Shipment = {
    processing_dates?: ProcessingDates;
    external_shipment_id?: string;
    meta?: any;
    location_id: number;
    priority?: number;
    line_items: LineItem[];
};
type PaymentMethod = {
    collect_by: string;
    transaction_data?: any;
    name: string;
    meta?: any;
    refund_by: string;
    amount: number;
    mode: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type BillingInfo = {
    alternate_email?: string;
    customer_code?: string;
    first_name: string;
    country_code?: string;
    title?: string;
    house_no?: string;
    state: string;
    state_code?: string;
    last_name?: string;
    gender?: string;
    pincode: string;
    address1: string;
    alternate_mobile_number?: string;
    external_customer_code?: string;
    primary_email: string;
    primary_mobile_number: string;
    middle_name?: string;
    city: string;
    floor_no?: string;
    address2?: string;
    country: string;
};
type CreateOrderAPI = {
    external_creation_date?: string;
    tax_info?: TaxInfo;
    currency_info?: any;
    meta?: any;
    external_order_id?: string;
    shipping_info: ShippingInfo;
    charges?: Charge[];
    shipments: Shipment[];
    payment_info: PaymentInfo;
    billing_info: BillingInfo;
};
type CreateOrderErrorReponse = {
    request_id?: string;
    status: number;
    meta?: string;
    info?: any;
    code?: string;
    message: string;
    stack_trace?: string;
    exception?: string;
};
type PaymentMethods = {
    collect_by?: string;
    refund_by?: string;
    mode?: string;
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
    logo_url?: any;
    lock_states?: string[];
    location_reassignment?: boolean;
    payment_info?: CreateChannelPaymentInfo;
    shipment_assignment?: string;
    dp_configuration?: DpConfiguration;
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
    app_id?: string;
    _custom_json?: any;
    result: SearchKeywordResult;
    words?: string[];
    is_active?: boolean;
};
type GetSearchWordsData = {
    app_id?: string;
    _custom_json?: any;
    result?: any;
    words?: string[];
    is_active?: boolean;
    uid?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type AutocompletePageAction = {
    url?: string;
    query?: any;
    params?: any;
    type?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type Media = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type AutocompleteResult = {
    action?: AutocompleteAction;
    _custom_json?: any;
    display?: string;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    _custom_json?: any;
    words?: string[];
    results?: AutocompleteResult[];
    is_active?: boolean;
};
type GetAutocompleteWordsData = {
    app_id?: string;
    _custom_json?: any;
    words?: string[];
    results?: any[];
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    results?: any[];
    app_id?: string;
    _custom_json?: any;
};
type ProductBundleItem = {
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    min_quantity: number;
    allow_remove?: boolean;
    product_uid: number;
    max_quantity: number;
};
type GetProductBundleCreateResponse = {
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    company_id?: number;
    slug: string;
    created_by?: any;
    logo?: string;
    created_on?: string;
    page_visibility?: string[];
    choice: string;
    meta?: any;
    is_active: boolean;
    name: string;
    modified_by?: any;
    id?: string;
    modified_on?: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    company_id?: number;
    slug: string;
    created_by?: any;
    logo?: string;
    created_on?: string;
    page_visibility?: string[];
    choice: string;
    meta?: any;
    is_active: boolean;
    name: string;
    modified_by?: any;
    modified_on?: string;
};
type ProductBundleUpdateRequest = {
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    company_id?: number;
    slug: string;
    logo?: string;
    page_visibility?: string[];
    choice: string;
    meta?: any;
    is_active: boolean;
    name: string;
    modified_by?: any;
    modified_on?: string;
};
type LimitedProductData = {
    short_description?: string;
    attributes?: any;
    name?: string;
    sizes?: string[];
    slug?: string;
    country_of_origin?: string;
    quantity?: number;
    identifier?: any;
    item_code?: string;
    uid?: number;
    images?: string[];
    price?: any;
};
type Size = {
    value?: string;
    is_available?: boolean;
    display?: string;
    quantity?: number;
};
type Price = {
    max_effective?: number;
    min_effective?: number;
    max_marked?: number;
    currency?: string;
    min_marked?: number;
};
type GetProducts = {
    auto_select?: boolean;
    product_uid?: number;
    product_details?: LimitedProductData;
    sizes?: Size[];
    price?: Price;
    min_quantity?: number;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    max_quantity?: number;
};
type GetProductBundleResponse = {
    products?: GetProducts[];
    same_store_assignment?: boolean;
    company_id?: number;
    slug?: string;
    logo?: string;
    page_visibility?: string[];
    choice?: string;
    meta?: any;
    is_active?: boolean;
    name?: string;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    tag?: string;
    guide?: Guide;
    brand_id?: number;
    modified_on?: string;
    company_id?: number;
    created_by?: any;
    created_on?: string;
    title: string;
    subtitle?: string;
    image?: string;
    name: string;
    modified_by?: any;
    description?: string;
    id?: string;
    active?: boolean;
};
type SizeGuideResponse = {
    tag?: string;
    guide?: any;
    brand_id?: number;
    company_id?: number;
    created_on?: string;
    created_by?: any;
    title?: string;
    subtitle?: string;
    name?: string;
    modified_by?: any;
    active?: boolean;
    id?: string;
    modified_on?: string;
};
type ApplicationItemMOQ = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type ApplicationItemMeta = {
    moq?: ApplicationItemMOQ;
    _custom_json?: any;
    _custom_meta?: MetaFields[];
    is_cod?: boolean;
    alt_text?: any;
    is_gift?: boolean;
    seo?: ApplicationItemSEO;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type MOQData = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type SEOData = {
    title?: any;
    description?: any;
};
type OwnerAppItemResponse = {
    moq?: MOQData;
    is_cod?: boolean;
    alt_text?: any;
    is_gift?: boolean;
    seo?: SEOData;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
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
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    unit?: string;
    display_type: string;
    slug?: string;
    logo?: string;
    key?: string;
    is_active: boolean;
    name: string;
    priority: number;
};
type AppConfigurationDetail = {
    app_id: string;
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    slug: string;
    logo?: string;
    is_active: boolean;
    is_default: boolean;
    name?: string;
    priority: number;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    app_id: string;
    logo?: string;
    default_key: string;
    key: string;
    is_active: boolean;
    is_default: boolean;
    name?: string;
    priority: number;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    key?: string;
    units?: any[];
    filter_types?: string[];
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationDetailsProduct = {
    variant?: any;
    compare?: any;
    detail?: any;
    similar?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationListingSortConfig = {
    logo?: string;
    key: string;
    is_active: boolean;
    name?: string;
    priority: number;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    end?: number;
    display?: string;
    start?: number;
};
type ConfigurationListingFilterValue = {
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    map?: any;
    sort?: string;
    map_values?: any[];
};
type ConfigurationListingFilterConfig = {
    value_config?: ConfigurationListingFilterValue;
    logo?: string;
    type: string;
    key: string;
    is_active: boolean;
    name?: string;
    display_name?: string;
    priority: number;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductVariantConfig = {
    display_type: string;
    logo?: string;
    key: string;
    is_active: boolean;
    size: ProductSize;
    name: string;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    logo?: string;
    title?: string;
    key: string;
    is_active: boolean;
    subtitle?: string;
    size?: ProductSize;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppCatalogConfiguration = {
    app_id: string;
    config_id?: string;
    modified_on?: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    created_by?: any;
    type?: string;
    modified_by?: any;
    config_type: string;
    id?: string;
    created_on?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    app_id: string;
    config_id?: string;
    modified_on?: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    created_by?: any;
    type?: string;
    modified_by?: any;
    config_type: string;
    created_on?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    app_id: string;
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    product?: GetCatalogConfigurationDetailsProduct;
    config_type: string;
    id?: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    value?: string;
    is_selected?: boolean;
    name?: string;
};
type ProductFiltersValue = {
    value: any;
    count?: number;
    display_format?: string;
    selected_max?: number;
    currency_symbol?: string;
    is_selected: boolean;
    currency_code?: string;
    min?: number;
    display: string;
    query_format?: string;
    selected_min?: number;
    max?: number;
};
type ProductFiltersKey = {
    logo?: string;
    operators?: string[];
    display: string;
    kind?: string;
    name: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type GetCollectionQueryOptionResponse = {
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    operators: any;
};
type CollectionListingFilterTag = {
    is_selected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilterType = {
    is_selected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type CollectionQuery = {
    value: any[];
    op: string;
    attribute: string;
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
type Media1 = {
    meta?: any;
    type?: string;
    url: string;
};
type GetCollectionDetailNest = {
    type?: string;
    meta?: any;
    priority?: number;
    tag?: string[];
    app_id?: string;
    _schedule?: any;
    query?: CollectionQuery[];
    name?: string;
    action?: Action;
    cron?: any;
    banners?: ImageUrls;
    badge?: any;
    is_active?: boolean;
    uid?: string;
    description?: string;
    allow_facets?: boolean;
    slug?: string;
    logo?: Media1;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
};
type GetCollectionListingResponse = {
    page?: Page;
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type UserInfo = {
    email?: string;
    user_id?: string;
    username?: string;
    uid?: string;
};
type CollectionSchedule = {
    end?: string;
    cron?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
    start?: string;
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
    color?: string;
    text?: string;
};
type CreateCollection = {
    _locale_language?: any;
    type: string;
    meta?: any;
    seo?: SeoDetail;
    tags?: string[];
    priority?: number;
    app_id: string;
    sort_on?: string;
    created_by?: UserInfo;
    _schedule?: CollectionSchedule;
    query?: CollectionQuery[];
    published?: boolean;
    name: string;
    modified_by?: UserInfo;
    is_visible?: boolean;
    banners: CollectionBanner;
    badge?: CollectionBadge;
    is_active?: boolean;
    description?: string;
    _custom_json?: any;
    allow_facets?: boolean;
    slug: string;
    logo: CollectionImage;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
};
type CollectionCreateResponse = {
    type?: string;
    meta?: any;
    priority?: number;
    tag?: string[];
    app_id?: string;
    sort_on?: string;
    _schedule?: any;
    query?: CollectionQuery[];
    name?: string;
    cron?: any;
    banners?: ImageUrls;
    badge?: any;
    is_active?: boolean;
    description?: string;
    allow_facets?: boolean;
    slug?: string;
    logo?: BannerImage;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
};
type CollectionDetailResponse = {
    type?: string;
    meta?: any;
    priority?: number;
    tag?: string[];
    app_id?: string;
    _schedule?: any;
    query?: CollectionQuery[];
    name?: string;
    cron?: any;
    banners?: ImageUrls;
    badge?: any;
    is_active?: boolean;
    uid?: string;
    description?: string;
    allow_facets?: boolean;
    slug?: string;
    logo?: Media1;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
};
type UpdateCollection = {
    _locale_language?: any;
    type?: string;
    meta?: any;
    seo?: SeoDetail;
    tags?: string[];
    priority?: number;
    sort_on?: string;
    _schedule?: CollectionSchedule;
    query?: CollectionQuery[];
    published?: boolean;
    name?: string;
    modified_by?: UserInfo;
    is_visible?: boolean;
    banners?: CollectionBanner;
    badge?: CollectionBadge;
    is_active?: boolean;
    description?: string;
    _custom_json?: any;
    allow_facets?: boolean;
    slug?: string;
    logo?: CollectionImage;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
};
type ProductDetailAttribute = {
    value?: string;
    key?: string;
    type?: string;
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
    marked?: Price1;
    effective?: Price1;
};
type ProductBrand = {
    action?: Action;
    uid?: number;
    logo?: Media1;
    name?: string;
};
type ProductListingDetail = {
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_type?: string;
    type?: string;
    discount?: string;
    rating?: number;
    tryouts?: string[];
    medias?: Media1[];
    similars?: string[];
    product_online_date?: string;
    name?: string;
    sellable?: boolean;
    promo_meta?: any;
    teaser_tag?: any;
    uid?: number;
    item_code?: string;
    description?: string;
    price?: ProductListingPrice;
    short_description?: string;
    attributes?: any;
    slug: string;
    brand?: ProductBrand;
    has_variant?: boolean;
    image_nature?: string;
    color?: string;
    highlights?: string[];
    rating_count?: number;
};
type GetCollectionItemsResponse = {
    page?: Page;
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
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
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightItem = {
    sellable_count?: number;
    out_of_stock_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    total_sizes?: number;
    article_freshness?: number;
    name?: string;
    total_articles?: number;
    available_articles?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    platform?: string;
    store_ids?: number[];
    opt_level: string;
    company_id?: number;
    brand_ids?: number[];
    enabled?: boolean;
};
type CompanyOptIn = {
    platform: string;
    store_ids: number[];
    opt_level: string;
    company_id: number;
    brand_ids: number[];
    created_on: number;
    created_by?: any;
    modified_by?: any;
    enabled: boolean;
    modified_on: number;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    business_type?: string;
    name?: string;
    company_type?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    company_id?: number;
    total_article?: number;
    brand_name?: string;
    brand_id?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    company?: string;
    store?: number;
    brand?: number;
};
type StoreDetail = {
    manager?: any;
    store_type?: string;
    modified_on?: string;
    store_code?: string;
    name?: string;
    company_id?: number;
    documents?: any[];
    additional_contacts?: any[];
    uid?: number;
    address?: any;
    display_name?: string;
    timing?: any;
    created_on?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    multi?: boolean;
    type: string;
    format?: string;
    range?: AttributeSchemaRange;
    mandatory?: boolean;
    allowed_values?: string[];
};
type AttributeMasterFilter = {
    indexing: boolean;
    priority?: number;
    depends_on?: string[];
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
    is_nested?: boolean;
    id?: string;
    schema?: AttributeMaster;
    slug?: string;
    logo?: string;
    filters?: AttributeMasterFilter;
    meta?: AttributeMasterMeta;
    name?: string;
    details?: AttributeMasterDetails;
    description?: string;
    enabled_for_end_consumer?: boolean;
    departments?: string[];
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    errors?: any;
    code?: string;
    message?: string;
    meta?: any;
    status?: number;
};
type UserSerializer = {
    _id?: string;
    contact?: string;
    username?: string;
    uid?: string;
    user_id?: string;
};
type GetDepartment = {
    modified_on?: string;
    search?: string;
    slug?: string;
    priority_order?: number;
    logo?: string;
    created_on?: string;
    created_by?: UserSerializer;
    item_type?: string;
    is_active?: boolean;
    page_no?: number;
    name?: string;
    modified_by?: UserSerializer;
    uid?: number;
    page_size?: number;
    synonyms?: string[];
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    errors?: any;
    code?: string;
    message?: string;
    meta?: any;
    status?: number;
};
type DepartmentCreateUpdate = {
    _custom_json?: any;
    priority_order: number;
    slug?: string;
    logo: string;
    is_active?: boolean;
    name: string;
    platforms?: any;
    uid?: number;
    tags?: string[];
    _cls?: string;
    synonyms?: string[];
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    contact?: string;
    user_id: string;
    username: string;
    super_user?: boolean;
};
type DepartmentModel = {
    verified_on?: string;
    _cls?: any;
    _custom_json?: any;
    modified_on: string;
    name: any;
    _id?: any;
    slug?: any;
    created_by?: UserDetail;
    logo: string;
    priority_order: number;
    is_active?: boolean;
    synonyms?: any[];
    uid?: number;
    modified_by?: UserDetail;
    verified_by?: UserDetail;
    created_on: string;
};
type ProductTemplate = {
    tag?: string;
    modified_on?: string;
    attributes?: string[];
    is_archived?: boolean;
    slug: string;
    created_by?: any;
    logo?: string;
    created_on?: string;
    is_physical: boolean;
    is_active?: boolean;
    modified_by?: any;
    name?: string;
    is_expirable: boolean;
    categories?: string[];
    description?: string;
    departments?: string[];
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    brand_uid?: any;
    item_type?: any;
    tags?: any;
    multi_size?: any;
    hsn_code?: any;
    sizes?: any;
    size_guide?: any;
    trader_type?: any;
    product_group_tag?: any;
    currency?: any;
    name?: any;
    custom_order?: any;
    product_publish?: any;
    country_of_origin?: any;
    media?: any;
    teaser_tag?: any;
    is_active?: any;
    return_config?: any;
    item_code?: any;
    no_of_boxes?: any;
    description?: any;
    is_dependent?: any;
    command?: any;
    short_description?: any;
    trader?: any;
    slug?: any;
    category_slug?: any;
    highlights?: any;
    variants?: any;
};
type GlobalValidation = {
    required?: string[];
    type?: string;
    title?: string;
    definitions?: any;
    description?: string;
    properties?: Properties;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    tag?: string;
    attributes?: string[];
    is_archived?: boolean;
    slug: string;
    logo?: string;
    is_physical: boolean;
    is_active?: boolean;
    name?: string;
    is_expirable: boolean;
    categories?: string[];
    description?: string;
    id?: string;
    departments?: string[];
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
type ProductDownloadItemsData = {
    templates?: string[];
    brand?: string[];
    type?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    task_id?: string;
    completed_on?: string;
    seller_id?: number;
    url?: string;
    data?: ProductDownloadItemsData;
    created_by?: VerifiedBy;
    template_tags?: any;
    status?: string;
    id?: string;
    trigger_on?: string;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Media2 = {
    landscape: string;
    logo: string;
    portrait: string;
};
type Hierarchy = {
    l2: number;
    l1: number;
    department: number;
};
type Category = {
    tryouts?: string[];
    marketplaces?: CategoryMapping;
    modified_on?: string;
    slug?: string;
    created_by?: any;
    created_on?: string;
    media?: Media2;
    is_active: boolean;
    name: string;
    modified_by?: any;
    level: number;
    uid?: number;
    departments: number[];
    priority?: number;
    id?: string;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    tryouts?: string[];
    marketplaces?: CategoryMapping;
    slug?: string;
    media?: Media2;
    is_active: boolean;
    name: string;
    level: number;
    departments: number[];
    priority?: number;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type ReturnConfigResponse = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Logo = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type Image = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type Product = {
    moq?: any;
    pending?: string;
    category?: any;
    brand_uid?: number;
    item_type?: string;
    variant_media?: any;
    tags?: string[];
    multi_size?: boolean;
    hsn_code?: string;
    sizes?: any[];
    category_uid?: number;
    size_guide?: string;
    company_id?: number;
    template_tag?: string;
    created_by?: any;
    product_group_tag?: string[];
    all_identifiers?: string[];
    currency?: string;
    name?: string;
    modified_by?: any;
    custom_order?: any;
    verified_by?: VerifiedBy;
    modified_on?: string;
    created_on?: string;
    is_image_less_product?: boolean;
    verified_on?: string;
    net_quantity?: NetQuantityResponse;
    product_publish?: ProductPublished;
    country_of_origin?: string;
    all_sizes?: any[];
    all_company_ids?: number[];
    media?: Media1[];
    teaser_tag?: any;
    is_active?: boolean;
    primary_color?: string;
    return_config?: ReturnConfigResponse;
    item_code?: string;
    uid?: number;
    stage?: string;
    no_of_boxes?: number;
    departments?: number[];
    description?: string;
    is_dependent?: boolean;
    short_description?: string;
    _custom_json?: any;
    trader?: any[];
    attributes?: any;
    slug?: string;
    tax_identifier?: any;
    l3_mapping?: string[];
    category_slug?: string;
    brand?: Brand;
    is_set?: boolean;
    is_physical?: boolean;
    image_nature?: string;
    variant_group?: any;
    color?: string;
    highlights?: string[];
    is_expirable?: boolean;
    variants?: any;
    images?: Image[];
    id?: string;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type Trader = {
    name: any;
    address?: string[];
    type?: string;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code_id?: string;
    hsn_code?: string;
};
type ProductCreateUpdateSchemaV2 = {
    brand_uid: number;
    item_type: string;
    variant_media?: any;
    tags?: string[];
    multi_size?: boolean;
    size_guide?: string;
    sizes: any[];
    company_id: number;
    template_tag: string;
    product_group_tag?: string[];
    bulk_job_id?: string;
    currency: string;
    name: string;
    custom_order?: CustomOrder;
    action?: string;
    is_image_less_product?: boolean;
    net_quantity?: NetQuantity;
    product_publish?: ProductPublish;
    country_of_origin: string;
    media?: Media1[];
    teaser_tag?: TeaserTag;
    is_active?: boolean;
    return_config: ReturnConfig;
    item_code: string;
    uid?: number;
    no_of_boxes?: number;
    departments: number[];
    description?: string;
    is_dependent?: boolean;
    short_description?: string;
    _custom_json?: any;
    trader: Trader[];
    attributes?: any;
    slug: string;
    tax_identifier: TaxIdentifier;
    category_slug: string;
    is_set?: boolean;
    variant_group?: any;
    highlights?: string[];
    requester?: string;
    variants?: any;
    change_request_id?: any;
};
type ProductVariants = {
    name?: string;
    category_uid?: number;
    brand_uid?: number;
    media?: Media1[];
    item_code?: string;
    uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    unit?: string;
    raw_key?: string;
    schema: AttributeMaster;
    tags?: string[];
    enabled_for_end_consumer?: boolean;
    is_nested?: boolean;
    created_by?: any;
    name?: string;
    modified_by?: any;
    variant?: boolean;
    details: AttributeMasterDetails;
    modified_on?: string;
    created_on?: string;
    suggestion?: string;
    synonyms?: any;
    departments: string[];
    description?: string;
    slug: string;
    logo?: string;
    filters: AttributeMasterFilter;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    gtin_value: string;
    gtin_type: string;
    primary?: boolean;
};
type AllSizes = {
    item_weight_unit_of_measure: any;
    item_width: number;
    identifiers?: ValidateIdentifier[];
    item_weight: number;
    item_length: number;
    item_dimensions_unit_of_measure: string;
    size: any;
    item_height: number;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    cancelled?: number;
    company_id?: number;
    template_tag?: string;
    failed_records?: string[];
    created_on?: string;
    created_by?: UserDetail1;
    cancelled_records?: string[];
    succeed?: number;
    stage?: string;
    is_active?: boolean;
    file_path?: string;
    modified_by?: UserDetail1;
    template?: ProductTemplate;
    total?: number;
    modified_on?: string;
    failed?: number;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    email?: string;
    user_id?: string;
    username?: string;
    uid?: string;
};
type BulkJob = {
    tracking_url?: string;
    cancelled?: number;
    company_id: number;
    failed_records?: any[];
    template_tag?: string;
    created_on: string;
    created_by?: UserInfo1;
    total?: number;
    succeed?: number;
    cancelled_records?: any[];
    custom_template_tag?: string;
    stage?: string;
    is_active?: boolean;
    file_path?: string;
    modified_by?: UserInfo1;
    modified_on?: string;
    failed?: number;
};
type BulkResponse = {
    batch_id: string;
    created_on: string;
    created_by?: UserInfo1;
    is_active?: boolean;
    modified_by?: UserInfo1;
    modified_on?: string;
};
type BulkProductRequest = {
    batch_id: string;
    company_id: number;
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
    user_id?: string;
    username?: string;
};
type Items = {
    tracking_url?: string;
    cancelled?: number;
    company_id?: number;
    failed_records?: string[];
    created_by?: UserCommon;
    created_on?: string;
    total?: number;
    succeed?: number;
    cancelled_records?: string[];
    retry?: number;
    stage?: string;
    is_active?: boolean;
    file_path?: string;
    modified_by?: UserCommon;
    id?: string;
    modified_on?: string;
    failed?: number;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    company_id?: number;
    user: any;
    url: string;
};
type ProductSizeDeleteDataResponse = {
    company_id?: number;
    item_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    price_effective?: number;
    price_transfer?: number;
    identifiers?: any;
    inventory_updated_on?: string;
    item_id?: number;
    quantity?: number;
    seller_identifier?: string;
    currency?: string;
    store?: any;
    size?: string;
    sellable_quantity?: number;
    uid?: string;
    price?: number;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type ItemQuery = {
    brand_uid?: number;
    item_code?: string;
    uid?: number;
};
type GTIN = {
    gtin_value: any;
    gtin_type: string;
    primary?: boolean;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    name?: string;
    size_distribution: SizeDistribution;
    quantity?: number;
};
type InvSize = {
    price_effective: number;
    item_weight_unit_of_measure?: string;
    price_transfer?: number;
    item_width?: number;
    identifiers: GTIN[];
    store_code: string;
    item_weight?: number;
    expiration_date?: string;
    set?: InventorySet;
    is_set?: boolean;
    item_length?: number;
    item_dimensions_unit_of_measure?: string;
    quantity: number;
    currency: string;
    size: any;
    item_height?: number;
    price?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    company_id: number;
    sizes: InvSize[];
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type WeightResponse = {
    unit: string;
    is_default: boolean;
    shipping: number;
};
type DimensionResponse = {
    unit: string;
    width: number;
    height: number;
    is_default: boolean;
    length: number;
};
type ReturnConfig1 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    order_committed?: QuantityBase;
    damaged?: QuantityBase;
    not_available?: QuantityBase;
    sellable?: QuantityBase;
};
type PriceMeta = {
    updated_at?: string;
    tp_notes?: any;
    effective: number;
    marked: number;
    currency: string;
    transfer: number;
};
type Trader1 = {
    name: string;
    address: string[];
    type: string;
};
type BrandMeta = {
    id: number;
    name: string;
};
type CompanyMeta = {
    id: number;
};
type InventorySellerResponse = {
    total_quantity: number;
    trace_id?: string;
    item_id: number;
    identifier: any;
    raw_meta?: any;
    manufacturer: ManufacturerResponse;
    meta?: any;
    track_inventory?: boolean;
    size: string;
    tags?: string[];
    weight: WeightResponse;
    added_on_store?: string;
    fynd_meta?: any;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    fragile: boolean;
    dimension: DimensionResponse;
    country_of_origin: string;
    set?: InventorySet;
    fynd_item_code: string;
    return_config?: ReturnConfig1;
    store: StoreMeta;
    is_active?: boolean;
    uid: string;
    stage?: string;
    quantities?: Quantities;
    price: PriceMeta;
    _custom_json?: any;
    trader?: Trader1[];
    tax_identifier?: any;
    expiration_date?: string;
    brand: BrandMeta;
    seller_identifier: string;
    is_set?: boolean;
    fynd_article_code: string;
    company: CompanyMeta;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type DimensionResponse1 = {
    height?: number;
    unit?: string;
    width?: number;
    length?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    order_committed?: Quantity;
    damaged?: Quantity;
    not_available?: Quantity;
    sellable?: Quantity;
};
type ArticleStoreResponse = {
    store_type?: string;
    uid?: number;
    store_code?: string;
    name?: string;
};
type ReturnConfig2 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type PriceArticle = {
    tp_notes?: any;
    effective?: number;
    marked?: number;
    currency?: string;
    transfer?: number;
};
type Trader2 = {
    name?: string;
    address?: string[];
    type?: string;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type GetInventories = {
    total_quantity?: number;
    date_meta?: DateMeta;
    trace_id?: string;
    item_id?: number;
    identifier?: any;
    manufacturer?: ManufacturerResponse1;
    track_inventory?: boolean;
    size?: string;
    platforms?: any;
    tags?: string[];
    weight?: WeightResponse1;
    inventory_updated_on?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    dimension?: DimensionResponse1;
    country_of_origin?: string;
    stage?: string;
    quantities?: QuantitiesArticle;
    store?: ArticleStoreResponse;
    return_config?: ReturnConfig2;
    uid?: string;
    price?: PriceArticle;
    trader?: Trader2[];
    tax_identifier?: any;
    expiration_date?: string;
    brand?: BrandMeta1;
    seller_identifier?: string;
    is_set?: boolean;
    company?: CompanyMeta1;
    id?: string;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    modified_on?: string;
    cancelled?: number;
    company_id?: number;
    failed_records?: string[];
    created_by?: any;
    total?: number;
    cancelled_records?: string[];
    succeed?: number;
    stage?: string;
    is_active?: boolean;
    file_path?: string;
    modified_by?: any;
    id?: string;
    created_on?: string;
    failed?: number;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    price_effective?: number;
    item_weight_unit_of_measure?: string;
    store_code: string;
    total_quantity?: number;
    price_marked?: number;
    expiration_date?: string;
    trace_id?: string;
    seller_identifier: string;
    item_dimensions_unit_of_measure?: string;
    quantity?: number;
    currency?: string;
    tags?: string[];
    price?: number;
};
type InventoryBulkRequest = {
    batch_id: string;
    company_id: number;
    user?: any;
    sizes: InventoryJobPayload[];
};
type InventoryExportJob = {
    task_id: string;
    completed_on?: string;
    trigger_on?: string;
    url?: string;
    request_params?: any;
    status?: string;
    seller_id: number;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    task_id: string;
    seller_id: number;
    request_params?: any;
    status?: string;
    trigger_on?: string;
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
    total_quantity?: number;
    price_marked?: number;
    expiration_date?: string;
    trace_id?: string;
    seller_identifier: string;
    store_id: number;
    tags?: string[];
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
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    message: string;
    items?: InventoryResponseItem[];
};
type PageResponse = {
    current?: string;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    has_previous?: boolean;
};
type HsnCodesObject = {
    tax_on_esp?: boolean;
    hs2_code?: string;
    modified_on?: string;
    threshold1?: number;
    tax_on_mrp?: boolean;
    company_id?: number;
    tax1?: number;
    threshold2?: number;
    id?: string;
    tax2?: number;
    hsn_code?: string;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    tax_on_esp?: boolean;
    hs2_code: string;
    threshold1: number;
    tax_on_mrp: boolean;
    company_id: number;
    is_active?: boolean;
    uid?: number;
    tax1: number;
    threshold2?: number;
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
    effective_date: string;
    rate: number;
};
type HSNDataInsertV2 = {
    modified_on?: string;
    created_by?: any;
    type: string;
    country_code: string;
    taxes: TaxSlab[];
    reporting_hsn: string;
    modified_by?: any;
    description: string;
    created_on?: string;
    hsn_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    uid?: number;
    slug?: string;
    logo?: Media;
    banners?: ImageUrls;
    discount?: string;
    name?: string;
    action?: Action;
    departments?: string[];
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    priority_order?: number;
    slug?: string;
    logo?: Media;
    name?: string;
    uid?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    _custom_json?: any;
    name?: string;
    childs?: any[];
    slug?: string;
    banners?: ImageUrls;
    uid?: number;
    action?: Action;
};
type SecondLevelChild = {
    _custom_json?: any;
    name?: string;
    childs?: ThirdLevelChild[];
    slug?: string;
    banners?: ImageUrls;
    uid?: number;
    action?: Action;
};
type Child = {
    _custom_json?: any;
    name?: string;
    childs?: SecondLevelChild[];
    slug?: string;
    banners?: ImageUrls;
    uid?: number;
    action?: Action;
};
type CategoryItems = {
    name?: string;
    childs?: Child[];
    slug?: string;
    banners?: ImageUrls;
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
    sort_on?: ProductSortOn[];
    page: Page;
    filters?: ProductFilters[];
    operators?: any;
    items?: ProductListingDetail[];
};
type ProductDetail = {
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_type?: string;
    type?: string;
    rating?: number;
    tryouts?: string[];
    medias?: Media1[];
    similars?: string[];
    product_online_date?: string;
    name?: string;
    promo_meta?: any;
    teaser_tag?: any;
    uid?: number;
    item_code?: string;
    description?: string;
    short_description?: string;
    attributes?: any;
    slug: string;
    brand?: ProductBrand;
    has_variant?: boolean;
    image_nature?: string;
    color?: string;
    highlights?: string[];
    rating_count?: number;
};
type InventoryPage = {
    next_id?: string;
    has_next?: boolean;
    type: string;
    item_total: number;
    has_previous?: boolean;
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
    ignored_stores?: number[];
    item_id: number;
    size: string;
};
type AssignStoreArticle = {
    quantity?: number;
    article_assignment?: ArticleAssignment;
    group_id?: string;
    meta?: any;
    query?: ArticleQuery;
};
type AssignStore = {
    app_id: string;
    store_ids?: number[];
    channel_type?: string;
    articles: AssignStoreArticle[];
    company_id?: number;
    pincode: string;
    channel_identifier?: string;
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    price_effective?: number;
    _id?: string;
    store_pincode?: number;
    company_id?: number;
    price_marked?: number;
    s_city?: string;
    item_id: number;
    quantity: number;
    article_assignment: ArticleAssignment1;
    strategy_wise_listing?: any[];
    index?: number;
    meta?: any;
    group_id?: string;
    size: string;
    uid?: string;
    store_id?: number;
    status: boolean;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type InvoiceCredSerializer = {
    enabled?: boolean;
    username?: string;
    password?: string;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    closing?: LocationTimingSerializer;
    weekday: string;
    opening?: LocationTimingSerializer;
};
type LocationManagerSerializer = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetAddressSerializer = {
    landmark?: string;
    city?: string;
    state?: string;
    address_type?: string;
    pincode?: number;
    longitude?: number;
    address1?: string;
    country_code?: string;
    country?: string;
    latitude?: number;
    address2?: string;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetCompanySerializer = {
    verified_on?: string;
    name?: string;
    business_type?: string;
    created_on?: string;
    created_by?: UserSerializer2;
    reject_reason?: string;
    addresses?: GetAddressSerializer[];
    stage?: string;
    uid?: number;
    modified_by?: UserSerializer2;
    company_type?: string;
    verified_by?: UserSerializer2;
    modified_on?: string;
};
type GetLocationSerializer = {
    integration_type?: LocationIntegrationType;
    phone_number: string;
    contact_numbers?: SellerPhoneNumber[];
    gst_credentials?: InvoiceDetailsSerializer;
    created_by?: UserSerializer1;
    documents?: Document[];
    name: string;
    modified_by?: UserSerializer1;
    timing?: LocationDayWiseSerializer[];
    verified_by?: UserSerializer1;
    created_on?: string;
    modified_on?: string;
    verified_on?: string;
    store_type?: string;
    warnings?: any;
    stage?: string;
    uid?: number;
    notification_emails?: string[];
    manager?: LocationManagerSerializer;
    _custom_json?: any;
    product_return_config?: ProductReturnConfigSerializer;
    code: string;
    address: GetAddressSerializer;
    display_name: string;
    company?: GetCompanySerializer;
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
    app_id: string;
    _custom_json?: any;
    logo?: string;
    is_active?: boolean;
    name?: string;
    uid: number;
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
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type GetCompanyProfileSerializerResponse = {
    verified_by?: UserSerializer;
    company_type: string;
    notification_emails?: string[];
    warnings?: any;
    franchise_enabled?: boolean;
    name?: string;
    business_info?: string;
    stage?: string;
    created_on?: string;
    created_by?: UserSerializer;
    verified_on?: string;
    _custom_json?: any;
    documents?: Document[];
    business_details?: BusinessDetails;
    business_country_info?: BusinessCountryInfo;
    modified_by?: UserSerializer;
    contact_details?: ContactDetails;
    uid: number;
    modified_on?: string;
    mode?: string;
    taxes?: CompanyTaxesSerializer[];
    business_type: string;
    addresses?: GetAddressSerializer[];
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type CreateUpdateAddressSerializer = {
    country_code?: string;
    pincode: number;
    longitude: number;
    landmark?: string;
    latitude: number;
    country: string;
    state: string;
    address_type: string;
    address2?: string;
    city: string;
    address1: string;
};
type UpdateCompany = {
    contact_details?: ContactDetails;
    company_type?: string;
    reject_reason?: string;
    notification_emails?: string[];
    _custom_json?: any;
    warnings?: any;
    taxes?: CompanyTaxesSerializer1[];
    documents?: Document[];
    franchise_enabled?: boolean;
    business_details?: BusinessDetails;
    name?: string;
    business_info?: string;
    business_type?: string;
    addresses?: CreateUpdateAddressSerializer[];
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
    stage?: string;
    uid?: number;
    store_documents?: DocumentsObj;
    brand?: DocumentsObj;
    company_documents?: DocumentsObj;
    store?: DocumentsObj;
    product?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    verified_by?: UserSerializer;
    slug_key?: string;
    banner?: BrandBannerSerializer;
    logo?: string;
    warnings?: any;
    _locale_language?: any;
    name: string;
    stage?: string;
    created_on?: string;
    synonyms?: string[];
    created_by?: UserSerializer;
    verified_on?: string;
    _custom_json?: any;
    modified_by?: UserSerializer;
    uid?: number;
    modified_on?: string;
    mode?: string;
    reject_reason?: string;
    description?: string;
};
type CreateUpdateBrandRequestSerializer = {
    banner?: BrandBannerSerializer;
    synonyms?: string[];
    uid?: number;
    logo: string;
    _custom_json?: any;
    company_id?: number;
    description?: string;
    brand_tier?: string;
    _locale_language?: any;
    name: string;
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
    modified_by?: UserSerializer;
    stage?: string;
    company_type: string;
    created_by?: UserSerializer;
    uid?: number;
    modified_on?: string;
    verified_on?: string;
    reject_reason?: string;
    notification_emails?: string[];
    _custom_json?: any;
    business_country_info?: BusinessCountryInfo;
    market_channels?: string[];
    created_on?: string;
    details?: CompanyDetails;
    name?: string;
    business_type: string;
    addresses?: GetAddressSerializer[];
};
type CompanyBrandSerializer = {
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    stage?: string;
    created_by?: UserSerializer;
    uid?: number;
    modified_on?: string;
    verified_on?: string;
    reject_reason?: string;
    warnings?: any;
    brand?: GetBrandResponseSerializer;
    created_on?: string;
    company?: CompanySerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    company: number;
    brands: number[];
    uid?: number;
};
type HolidayDateSerializer = {
    end_date: string;
    start_date: string;
};
type HolidaySchemaSerializer = {
    date: HolidayDateSerializer;
    holiday_type: string;
    title: string;
};
type AddressSerializer = {
    country_code?: string;
    pincode?: number;
    longitude: number;
    landmark?: string;
    latitude: number;
    country?: string;
    address_type?: string;
    state?: string;
    address2?: string;
    city?: string;
    address1?: string;
};
type LocationSerializer = {
    address: AddressSerializer;
    stage?: string;
    uid?: number;
    timing?: LocationDayWiseSerializer[];
    product_return_config?: ProductReturnConfigSerializer;
    manager?: LocationManagerSerializer;
    code: string;
    notification_emails?: string[];
    _custom_json?: any;
    warnings?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    display_name: string;
    store_type?: string;
    documents?: Document[];
    contact_numbers?: SellerPhoneNumber[];
    name: string;
    holiday?: HolidaySchemaSerializer[];
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
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    description?: string;
    remove?: DisplayMetaDict;
    title?: string;
    subtitle?: string;
    auto?: DisplayMetaDict;
};
type Validity = {
    priority?: number;
};
type CouponSchedule = {
    start?: string;
    next_schedule?: any[];
    duration?: number;
    end?: string;
    cron?: string;
};
type Rule = {
    max?: number;
    min?: number;
    discount_qty?: number;
    key?: number;
    value?: number;
};
type RuleDefinition = {
    applicable_on: string;
    is_exact?: boolean;
    currency_code?: string;
    value_type: string;
    scope?: string[];
    auto_apply?: boolean;
    calculate_on: string;
    type: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
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
type UsesRemaining = {
    app?: number;
    total?: number;
    user?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type Restrictions = {
    ordering_stores?: number[];
    user_groups?: number[];
    payments?: any;
    platforms?: string[];
    uses?: UsesRestriction;
    price_range?: PriceRange;
    coupon_allowed?: boolean;
    bulk_bundle?: BulkBundleRestriction;
    post_order?: PostOrder;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type State = {
    is_public?: boolean;
    is_archived?: boolean;
    is_display?: boolean;
};
type Validation = {
    anonymous?: boolean;
    user_registered_after?: string;
    app_id?: string[];
};
type CouponAdd = {
    ownership: Ownership;
    display_meta: DisplayMeta;
    validity: Validity;
    _schedule?: CouponSchedule;
    rule: Rule[];
    rule_definition: RuleDefinition;
    code: string;
    action?: CouponAction;
    date_meta?: CouponDateMeta;
    identifiers: Identifier;
    type_slug: string;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    state?: State;
    validation?: Validation;
    tags?: string[];
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
    display_meta: DisplayMeta;
    validity: Validity;
    _schedule?: CouponSchedule;
    rule: Rule[];
    rule_definition: RuleDefinition;
    code: string;
    action?: CouponAction;
    date_meta?: CouponDateMeta;
    identifiers: Identifier;
    type_slug: string;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    state?: State;
    validation?: Validation;
    tags?: string[];
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type PromotionSchedule = {
    start: string;
    next_schedule?: any[];
    duration?: number;
    end?: string;
    published: boolean;
    cron?: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue1;
    type: string;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
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
    user_groups?: number[];
    user_id?: string[];
    payments?: PromotionPaymentModes[];
    platforms?: string[];
    uses: UsesRestriction1;
    order_quantity?: number;
    anonymous_users?: boolean;
    post_order?: PostOrder1;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type CompareObject = {
    greater_than?: number;
    less_than?: number;
    equals?: number;
    greater_than_equals?: number;
    less_than_equals?: number;
};
type ItemCriteria = {
    cart_quantity?: CompareObject;
    item_exclude_company?: number[];
    item_brand?: number[];
    item_sku?: string[];
    item_id?: number[];
    item_company?: number[];
    item_exclude_sku?: string[];
    buy_rules?: string[];
    item_exclude_store?: number[];
    item_size?: string[];
    item_category?: number[];
    item_exclude_category?: number[];
    cart_total?: CompareObject;
    all_items?: boolean;
    item_exclude_brand?: number[];
    item_store?: number[];
};
type DiscountOffer = {
    discount_percentage?: number;
    max_offer_quantity?: number;
    max_discount_amount?: number;
    code?: string;
    min_offer_quantity?: number;
    discount_amount?: number;
    discount_price?: number;
};
type DiscountRule = {
    item_criteria: ItemCriteria;
    buy_condition: string;
    offer: DiscountOffer;
    discount_type: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type DisplayMeta1 = {
    offer_text?: string;
    name?: string;
    description?: string;
};
type PromotionListItem = {
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    application_id: string;
    author?: PromotionAuthor;
    apply_priority?: number;
    stackable?: boolean;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    _custom_json?: any;
    mode: string;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    buy_rules: any;
    code?: string;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    currency?: string;
    promo_group: string;
    apply_exclusive?: string;
    promotion_type: string;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    application_id: string;
    author?: PromotionAuthor;
    apply_priority?: number;
    stackable?: boolean;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    _custom_json?: any;
    mode: string;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    buy_rules: any;
    code?: string;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    currency?: string;
    promo_group: string;
    apply_exclusive?: string;
    promotion_type: string;
};
type PromotionUpdate = {
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    application_id: string;
    author?: PromotionAuthor;
    apply_priority?: number;
    stackable?: boolean;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    _custom_json?: any;
    mode: string;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    buy_rules: any;
    code?: string;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    currency?: string;
    promo_group: string;
    apply_exclusive?: string;
    promotion_type: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type CartItem = {
    size: string;
    quantity?: number;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductPrice = {
    currency_symbol?: string;
    marked?: number;
    currency_code?: string;
    add_on?: number;
    effective?: number;
    selling?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type AppliedPromotion = {
    article_quantity?: number;
    ownership?: Ownership2;
    promo_id?: string;
    amount?: number;
    promotion_type?: string;
    mrp_promotion?: boolean;
    offer_text?: string;
};
type PromoMeta = {
    message?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    effective?: number;
    currency_symbol?: string;
    marked?: number;
    currency_code?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    extra_meta?: any;
    quantity?: number;
    product_group_tags?: string[];
    store?: BaseInfo;
    seller?: BaseInfo;
    price?: ArticlePriceInfo;
    size?: string;
    uid?: string;
    _custom_json?: any;
    parent_item_identifiers?: any;
    type?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    url?: string;
    query?: ActionQuery;
    type?: string;
};
type ProductImage = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type CartProduct = {
    categories?: CategoryInfo[];
    action?: ProductAction;
    images?: ProductImage[];
    slug?: string;
    uid?: number;
    name?: string;
    brand?: BaseInfo;
    type?: string;
};
type ProductAvailability = {
    out_of_stock?: boolean;
    other_store_quantity?: number;
    deliverable?: boolean;
    is_valid?: boolean;
    sizes?: string[];
};
type CartProductInfo = {
    price_per_unit?: ProductPriceInfo;
    coupon_message?: string;
    is_set?: boolean;
    promotions_applied?: AppliedPromotion[];
    quantity?: number;
    discount?: string;
    promo_meta?: PromoMeta;
    price?: ProductPriceInfo;
    identifiers: CartProductIdentifer;
    article?: ProductArticle;
    message?: string;
    bulk_offer?: any;
    product?: CartProduct;
    key?: string;
    parent_item_identifiers?: any;
    availability?: ProductAvailability;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    applicable?: number;
    description?: string;
    total?: number;
};
type DisplayBreakup = {
    currency_symbol?: string;
    currency_code?: string;
    display?: string;
    message?: string[];
    key?: string;
    value?: number;
};
type RawBreakup = {
    subtotal?: number;
    discount?: number;
    gst_charges?: number;
    total?: number;
    vog?: number;
    you_saved?: number;
    fynd_cash?: number;
    coupon?: number;
    cod_charge?: number;
    delivery_charge?: number;
    mrp_total?: number;
    convenience_fee?: number;
};
type CouponBreakup = {
    code?: string;
    message?: string;
    is_applied?: boolean;
    uid?: string;
    value?: number;
    type?: string;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
    raw?: RawBreakup;
    coupon?: CouponBreakup;
};
type OpenapiCartDetailsResponse = {
    items?: CartProductInfo[];
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    message?: string;
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    address_type?: string;
    phone?: number;
    pincode?: number;
    area?: string;
    country?: string;
    email?: string;
    meta?: any;
    landmark?: string;
    area_code_slug?: string;
    area_code: string;
    city?: string;
    country_code?: string;
    state?: string;
    name?: string;
    address?: string;
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
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    message?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
type OpenApiOrderItem = {
    coupon_effective_discount: number;
    cashback_applied: number;
    product_id: number;
    files?: OpenApiFiles[];
    cod_charges: number;
    extra_meta?: any;
    quantity?: number;
    discount: number;
    size: string;
    employee_discount?: number;
    meta?: CartItemMeta;
    payment_methods: MultiTenderPaymentMethod[];
    price_effective: number;
    price_marked: number;
    delivery_charges: number;
    amount_paid: number;
    loyalty_discount?: number;
};
type OpenApiPlatformCheckoutReq = {
    cod_charges: number;
    affiliate_order_id?: string;
    comment?: string;
    coupon?: string;
    coupon_value: number;
    shipping_address?: ShippingAddress;
    gstin?: string;
    delivery_charges: number;
    coupon_code: string;
    loyalty_discount?: number;
    payment_mode?: string;
    cashback_applied: number;
    files?: OpenApiFiles[];
    currency_code?: string;
    order_id?: string;
    cart_value: number;
    employee_discount?: any;
    payment_methods: MultiTenderPaymentMethod[];
    cart_items: OpenApiOrderItem[];
    billing_address: ShippingAddress;
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    order_id: string;
    message?: string;
    order_ref_id?: string;
};
type AbandonedCart = {
    cod_charges?: any;
    checkout_mode?: string;
    coupon?: any;
    meta?: any;
    gstin?: string;
    user_id: string;
    discount?: number;
    fynd_credits?: any;
    is_archive?: boolean;
    cart_value?: number;
    order_id?: string;
    expire_at: string;
    app_id?: string;
    merge_qty?: boolean;
    last_modified: string;
    _id: string;
    created_on: string;
    articles: any[];
    comment?: string;
    is_active?: boolean;
    delivery_charges?: any;
    cashback: any;
    payment_mode?: string;
    bulk_coupon_discount?: number;
    fc_index_map?: number[];
    payments?: any;
    promotion?: any;
    payment_methods?: any[];
    shipments?: any[];
    uid: number;
    pick_up_customer_details?: any;
    is_default: boolean;
    buy_now?: boolean;
};
type AbandonedCartResponse = {
    items?: AbandonedCart[];
    message?: string;
    page?: Page;
    success?: boolean;
    result?: any;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    currency?: CartCurrency;
    last_modified?: string;
    delivery_charge_info?: string;
    items?: CartProductInfo[];
    checkout_mode?: string;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    is_valid?: boolean;
    message?: string;
    restrict_checkout?: boolean;
    coupon_text?: string;
    breakup_values?: CartBreakup;
    id?: string;
    gstin?: string;
    buy_now?: boolean;
};
type AddProductCart = {
    seller_id?: number;
    item_id?: number;
    extra_meta?: any;
    quantity?: number;
    product_group_tags?: string[];
    item_size?: string;
    display?: string;
    store_id?: number;
    _custom_json?: any;
    parent_item_identifiers?: any;
    article_id?: string;
    pos?: boolean;
    article_assignment?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    success?: boolean;
    partial?: boolean;
    cart?: CartDetailResponse;
    message?: string;
};
type UpdateProductCart = {
    item_id?: number;
    extra_meta?: any;
    quantity?: number;
    item_size?: string;
    identifiers: CartProductIdentifer;
    item_index?: number;
    _custom_json?: any;
    parent_item_identifiers?: any;
    article_id?: string;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
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
