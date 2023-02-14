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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, FilterInfoOption, FiltersInfo, GSTDetailsData, Prices, PlatformItem, BagUnit, ShipmentStatus, UserDataInfo, ShipmentItemFulFillingStore, PaymentModeInfo, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, BagStateMapper, BagStatusHistory, UserDetailsData, DPDetailsData, TrackingList, OrderBrandName, PlatformDeliveryAddress, BagGST, OrderBagArticle, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, Identifier, FinancialBreakup, BagConfigs, OrderBags, ShipmentPayments, ShipmentStatusData, OrderDetailsData, FulfillingStore, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailItem, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Document, StoreDocuments, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, StoreAddress, Store, Dimensions, ReturnConfig, Weight, Article, AffiliateMeta, LockData, ShipmentTimeStamp, EInvoice, EinvoiceInfo, Formatted, BuyerDetails, DebugInfo, ShipmentMeta, PDFLinks, AffiliateDetails, Dates, Brand, BagGSTDetails, B2BPODetails, BagMeta, Attributes, Item, AffiliateBagDetails, BagReturnableCancelableStatus, ArticleDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, Products, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, OrderPriority, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, UserData, MarketPlacePdf, AffiliateBag, OrderInfo, AffiliateStoreIdMapping, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, BillingInfo, PaymentMethod, PaymentInfo, ProcessingDates, Tax, Charge, LineItem, Shipment, ShippingInfo, TaxInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, DeleteResponse, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, BannerImage, ImageUrls, CollectionQuery, GetCollectionDetailNest, GetCollectionListingResponse, UserInfo, CollectionImage, CollectionSchedule, SeoDetail, CollectionBanner, CollectionBadge, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, ProductPublished, Logo, Image, Product, ProductListingResponse, Trader, ProductPublish, CustomOrder, NetQuantity, TeaserTag, TaxIdentifier, ProductCreateUpdate, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, PriceMeta, Trader1, DimensionResponse, BrandMeta, WeightResponse, ManufacturerResponse, QuantityBase, Quantities, CompanyMeta, ReturnConfig1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ArticleStoreResponse, PriceArticle, Trader2, DimensionResponse1, BrandMeta1, WeightResponse1, ManufacturerResponse1, Quantity, QuantitiesArticle, CompanyMeta1, ReturnConfig2, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, LocationTimingSerializer, LocationDayWiseSerializer, LocationIntegrationType, UserSerializer1, GetAddressSerializer, ProductReturnConfigSerializer, SellerPhoneNumber, UserSerializer2, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationManagerSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, BusinessCountryInfo, ContactDetails, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponSchedule, Ownership, CouponAction, State, CouponAuthor, RuleDefinition, PriceRange, PostOrder, BulkBundleRestriction, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, Restrictions, Validity, DisplayMetaDict, DisplayMeta, CouponDateMeta, Rule, Validation, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, PromotionDateMeta, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, UserRegistered, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, Restrictions1, PromotionSchedule, PromotionAuthor, PromotionAction, Visibility, DisplayMeta1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, DisplayBreakup, RawBreakup, LoyaltyPoints, CouponBreakup, CartBreakup, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, ProductImage, ActionQuery, ProductAction, CategoryInfo, CartProduct, ProductAvailability, AppliedPromotion, PromoMeta, ProductPrice, ProductPriceInfo, CartProductIdentifer, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    category: TicketCategory;
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
    app_id: string;
    aggregators?: any[];
    success: boolean;
    created: boolean;
    excluded_fields: string[];
    display_fields: string[];
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    config_type: string;
    secret: string;
    is_active?: boolean;
    key: string;
    merchant_salt: string;
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
    code?: string;
    package_name?: string;
    display_name?: string;
    logos?: PaymentModeLogo;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    intent_app?: IntentApp[];
    remaining_limit?: number;
    exp_month?: number;
    exp_year?: number;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_id?: string;
    code?: string;
    card_isin?: string;
    card_type?: string;
    nickname?: string;
    logo_url?: PaymentModeLogo;
    cod_limit_per_order?: number;
    card_reference?: string;
    name?: string;
    expired?: boolean;
    retry_count?: number;
    cod_limit?: number;
    card_name?: string;
    card_brand_image?: string;
    fynd_vpa?: string;
    intent_app_error_list?: string[];
    display_priority?: number;
    card_token?: string;
    display_name?: string;
    card_number?: string;
    card_brand?: string;
    merchant_code?: string;
    card_fingerprint?: string;
    aggregator_name: string;
    timeout?: number;
    compliant_with_tokenisation_guidelines?: boolean;
    intent_flow?: boolean;
    card_issuer?: string;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    name: string;
    save_card?: boolean;
    list?: PaymentModeList[];
    aggregator_name?: string;
    display_priority: number;
    is_pay_by_card_pl?: boolean;
    anonymous_enable?: boolean;
    display_name: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    payouts_aggregators: any[];
    is_active: boolean;
    customers: any;
    transfer_type: string;
    unique_transfer_no: any;
    more_attributes: any;
    is_default: boolean;
};
type PayoutBankDetails = {
    bank_name?: string;
    branch_name?: string;
    state?: string;
    ifsc_code: string;
    account_no?: string;
    pincode?: number;
    country?: string;
    city?: string;
    account_holder?: string;
    account_type: string;
};
type PayoutRequest = {
    aggregator: string;
    bank_details: PayoutBankDetails;
    is_active: boolean;
    transfer_type: string;
    users: any;
    unique_external_id: string;
};
type PayoutResponse = {
    bank_details: any;
    aggregator: string;
    is_active: boolean;
    success: boolean;
    created: boolean;
    payouts: any;
    transfer_type: string;
    unique_transfer_no: string;
    users: any;
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
    aggregator: string;
    config: any;
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
    message: string;
    is_verified_flag?: boolean;
    success: boolean;
    data?: any;
};
type NotFoundResourceError = {
    code: string;
    description: string;
    success: boolean;
};
type BankDetailsForOTP = {
    bank_name: string;
    branch_name: string;
    ifsc_code: string;
    account_no: string;
    account_holder: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    bank_name: string;
    success?: boolean;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    email: string;
    subtitle: string;
    delights_user_name?: string;
    branch_name?: string;
    id: number;
    is_active: boolean;
    ifsc_code: string;
    transfer_mode: string;
    bank_name: string;
    account_no: string;
    modified_on: string;
    account_holder: string;
    title: string;
    display_name: string;
    created_on: string;
    beneficiary_id: string;
    address: string;
    mobile?: string;
    comment?: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    order_id?: string;
    payment_id?: string;
    current_status?: string;
    payment_gateway?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    mode: string;
    name?: string;
    amount: number;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    message: string;
    success: boolean;
    order_id: string;
};
type CODdata = {
    user_id: string;
    limit: number;
    is_active: boolean;
    remaining_limit: number;
    usages: number;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
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
type FilterInfoOption = {
    name?: string;
    text: string;
    value?: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    type: string;
    text: string;
    value: string;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    value_of_good: number;
    gstin_code: string;
    gst_fee: number;
    brand_calculated_amount: number;
};
type Prices = {
    cashback_applied?: number;
    amount_paid_roundoff?: number;
    tax_collected_at_source?: number;
    fynd_credits?: number;
    promotion_effective_discount?: number;
    refund_amount?: number;
    amount_paid?: number;
    price_marked?: number;
    cod_charges?: number;
    value_of_good?: number;
    coupon_value?: number;
    refund_credit?: number;
    cashback?: number;
    delivery_charge?: number;
    discount?: number;
    price_effective?: number;
};
type PlatformItem = {
    can_return?: boolean;
    can_cancel?: boolean;
    l3_category?: number;
    color?: string;
    department_id?: number;
    images?: string[];
    id?: number;
    size?: string;
    code?: string;
    name?: string;
    l3_category_name?: string;
    image?: string[];
    l1_category?: string[];
};
type BagUnit = {
    total_shipment_bags: number;
    shipment_id: string;
    status: any;
    gst?: GSTDetailsData;
    ordering_channel: string;
    bag_id: number;
    item_quantity: number;
    prices?: Prices;
    item?: PlatformItem;
};
type ShipmentStatus = {
    ops_status: string;
    status: string;
    hex_code: string;
    title: string;
    actual_status: string;
};
type UserDataInfo = {
    avis_user_id?: string;
    email?: string;
    gender?: string;
    mobile?: string;
    is_anonymous_user?: boolean;
    first_name?: string;
    uid?: number;
    name?: string;
    last_name?: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItem = {
    total_bags_count: number;
    channel?: any;
    bags?: BagUnit[];
    sla?: any;
    shipment_status?: ShipmentStatus;
    payment_methods?: any;
    id: string;
    created_at: string;
    application?: any;
    shipment_created_at: number;
    fulfilling_centre: string;
    user?: UserDataInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    prices?: Prices;
    payment_mode_info?: PaymentModeInfo;
    total_shipments_in_order: number;
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    filters?: FiltersInfo[];
    applied_filters?: any;
    items?: ShipmentItem[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type BagStateMapper = {
    journey_type: string;
    notify_customer?: boolean;
    app_display_name?: string;
    app_state_name?: string;
    state_type: string;
    is_active?: boolean;
    display_name: string;
    name: string;
    bs_id: number;
    app_facing?: boolean;
};
type BagStatusHistory = {
    updated_at?: string;
    delivery_partner_id?: number;
    shipment_id: string;
    status: string;
    bag_state_mapper: BagStateMapper;
    reasons?: any[];
    store_id: number;
    bsh_id: number;
    app_display_name?: boolean;
    state_type?: string;
    forward?: boolean;
    created_at: string;
    bag_id: number;
    delivery_awb_number?: string;
    kafka_sync?: boolean;
    display_name?: boolean;
    state_id: number;
};
type UserDetailsData = {
    city: string;
    country: string;
    state: string;
    email: string;
    address: string;
    pincode: string;
    name: string;
    phone: string;
};
type DPDetailsData = {
    track_url?: string;
    country?: string;
    awb_no?: string;
    eway_bill_id?: string;
    id?: string;
    gst_tag?: string;
    pincode?: string;
    name?: string;
};
type TrackingList = {
    status: string;
    is_current?: boolean;
    is_passed?: boolean;
    time?: string;
    text: string;
};
type OrderBrandName = {
    brand_name: string;
    modified_on?: number;
    company: string;
    logo: string;
    created_on: number;
    id: number;
};
type PlatformDeliveryAddress = {
    updated_at?: string;
    address2?: string;
    landmark?: string;
    country?: string;
    state?: string;
    email?: string;
    address_type?: string;
    contact_person?: string;
    version?: string;
    created_at?: string;
    pincode?: string;
    address_category?: string;
    latitude?: number;
    address1?: string;
    city?: string;
    longitude?: number;
    area?: string;
    phone?: string;
};
type BagGST = {
    hsn_code?: string;
    gst_tax_percentage?: number;
    value_of_good?: number;
    gstin_code?: string;
    gst_fee?: number;
    gst_tag?: string;
    is_default_hsn_code?: boolean;
    brand_calculated_amount?: number;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
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
    promo_id?: string;
    discount_rules?: DiscountRules[];
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
    article_quantity?: number;
    promotion_name?: string;
    amount?: number;
    promotion_type?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    cashback_applied: number;
    amount_paid: number;
    item_name: string;
    added_to_fynd_cash: boolean;
    gst_fee: string;
    size: string;
    coupon_effective_discount: number;
    price_effective: number;
    brand_calculated_amount: number;
    hsn_code: string;
    fynd_credits: number;
    value_of_good: number;
    cod_charges: number;
    pm_price_split: any;
    coupon_value: number;
    gst_tag: string;
    promotion_effective_discount: number;
    delivery_charge: number;
    discount: number;
    total_units: number;
    transfer_price: number;
    amount_paid_roundoff?: number;
    tax_collected_at_source?: number;
    gst_tax_percentage: number;
    identifiers: Identifier;
    price_marked: number;
    refund_credit: number;
    cashback: number;
};
type BagConfigs = {
    is_returnable: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    allow_force_return: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
};
type OrderBags = {
    parent_promo_bags?: any;
    brand?: OrderBrandName;
    delivery_address?: PlatformDeliveryAddress;
    gst_details?: BagGST;
    seller_identifier?: string;
    article?: OrderBagArticle;
    quantity?: number;
    applied_promos?: AppliedPromos[];
    line_number?: number;
    financial_breakup?: FinancialBreakup[];
    entity_type?: string;
    bag_id: number;
    current_status?: string;
    display_name?: string;
    prices?: Prices;
    item?: PlatformItem;
    bag_configs?: BagConfigs;
    identifier?: string;
};
type ShipmentPayments = {
    logo?: string;
    mode: string;
    source?: string;
};
type ShipmentStatusData = {
    shipment_id?: string;
    status?: string;
    id?: number;
    created_at?: string;
    bag_list?: number[];
};
type OrderDetailsData = {
    source?: string;
    tax_details?: any;
    order_date?: string;
    order_value?: string;
    cod_charges?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    fynd_order_id: string;
    affiliate_id?: string;
};
type FulfillingStore = {
    country: string;
    state: string;
    fulfillment_channel: string;
    contact_person: string;
    id: string;
    address: string;
    pincode: string;
    store_name: string;
    code: string;
    city: string;
    meta: any;
    phone: string;
};
type ShipmentInfoResponse = {
    affiliate_shipment_id: string;
    journey_type?: string;
    can_cancel?: boolean;
    bag_status_history?: BagStatusHistory[];
    company: any;
    vertical?: string;
    coupon?: any;
    ordering_store: any;
    escalation?: any;
    user_id: string;
    refund_details?: any;
    refund_text?: string;
    beneficiary_details?: boolean;
    is_pdsr?: string;
    tracking_url: string;
    pay_button?: string;
    is_invoiced: boolean;
    platform_logo: boolean;
    order_created_time?: string;
    is_fynd_coupon: boolean;
    user_agent?: string;
    email_id: string;
    fyndstore_emp: any;
    gst_details?: GSTDetailsData;
    is_packaging_order: boolean;
    current_shipment_status: any;
    custom_meta?: any[];
    is_fynd_store?: string;
    mid?: string;
    invoice: any;
    shipment_quantity?: number;
    enable_dp_tracking?: string;
    secured_delivery_flag?: string;
    billing_details?: UserDetailsData;
    delivery_details?: UserDetailsData;
    dp_details?: DPDetailsData;
    items: any[];
    kirana_store_id?: string;
    delivery_status: any[];
    replacement_details?: string;
    tracking_list?: TrackingList[];
    due_date?: string;
    forward_order_status?: any[];
    lock_status: string;
    user_info?: any;
    order_type: string;
    status_progress: number;
    payment_mode?: string;
    prices?: Prices;
    bags?: OrderBags[];
    operational_status?: string;
    payments?: ShipmentPayments;
    total_bags?: number;
    can_break: string;
    shipment_id: string;
    status?: ShipmentStatusData;
    packaging_type?: string;
    order_status: any;
    credit_note_id: string;
    child_nodes?: string[];
    can_return?: boolean;
    shipment_images?: string[];
    bank_data?: any;
    shipment_status?: string;
    total_items?: number;
    delivery_slot?: any;
    forward_shipment_status?: any[];
    forward_tracking_list?: any[];
    order?: OrderDetailsData;
    priority_text?: string;
    fulfilling_store?: FulfillingStore;
    go_green?: boolean;
    picked_date?: string;
    enable_tracking?: boolean;
    is_not_fynd_source: boolean;
};
type PlatformShipment = {
    journey_type?: string;
    bag_status_history?: BagStatusHistory[];
    vertical?: string;
    platform_logo?: string;
    user_agent?: string;
    gst_details?: GSTDetailsData;
    custom_meta?: any[];
    shipment_quantity?: number;
    enable_dp_tracking?: string;
    billing_details?: UserDetailsData;
    delivery_details?: UserDetailsData;
    dp_details?: DPDetailsData;
    tracking_list?: TrackingList[];
    payment_mode?: string;
    prices?: Prices;
    bags?: OrderBags[];
    operational_status?: string;
    payments?: ShipmentPayments;
    total_bags?: number;
    shipment_id: string;
    status?: ShipmentStatusData;
    packaging_type?: string;
    shipment_images?: string[];
    shipment_status?: string;
    total_items?: number;
    delivery_slot?: any;
    order?: OrderDetailsData;
    priority_text?: string;
    fulfilling_store?: FulfillingStore;
    picked_date?: string;
};
type OrderDict = {
    fynd_order_id: string;
    shipment_count: number;
    order_date: string;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    custom_meta?: any[];
    order?: OrderDict;
    success: boolean;
};
type SubLane = {
    total_items?: number;
    index?: number;
    actions?: any[];
    value?: string;
    text?: string;
};
type SuperLane = {
    total_items?: number;
    options?: SubLane[];
    text: string;
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
    name?: string;
    display?: string;
    value?: string;
};
type PlatformOrderItems = {
    channel?: PlatformChannel;
    total_order_value?: number;
    order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    shipments?: PlatformShipment[];
    user_info?: UserDataInfo;
    payment_mode?: string;
    order_created_time?: string;
    order_id?: string;
    meta?: any;
};
type OrderListingResponse = {
    lane?: string;
    total_count?: number;
    success?: boolean;
    page?: Page;
    message?: string;
    items?: PlatformOrderItems[];
};
type Options = {
    text?: string;
    value?: number;
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
    updated_at?: string;
    status?: string;
    reason?: string;
    account_name?: string;
    last_location_recieved_at?: string;
    updated_time?: string;
    meta?: any;
    raw_status?: string;
    awb?: string;
    shipment_type?: string;
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
    status?: string;
    s3_key?: string;
    report_id?: string;
    report_name?: string;
    report_requested_at?: string;
    report_created_at?: string;
    request_details?: any;
    display_name?: string;
    report_type?: string;
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
    type?: string;
    message?: string;
    value?: string;
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
    label?: any;
    batch_id: string;
    do_invoice_label_generated: boolean;
    store_id?: string;
    invoice?: any;
    invoice_status?: string;
    data?: any;
    company_id?: string;
    store_name?: string;
    store_code?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type URL = {
    url?: string;
};
type FileResponse = {
    namespace?: string;
    file_name?: string;
    file_path?: string;
    upload?: FileUploadResponse;
    cdn?: URL;
    tags?: string[];
    operation?: string;
    content_type?: string;
    size?: number;
    method?: string;
};
type BulkListingPage = {
    has_next?: boolean;
    has_previous?: boolean;
    type?: string;
    size?: number;
    current?: number;
    total?: number;
};
type bulkListingData = {
    store_id?: number;
    user_id?: string;
    successful_shipments?: any[];
    excel_url?: string;
    uploaded_on?: string;
    failed?: number;
    file_name?: string;
    processing_shipments?: string[];
    id?: string;
    company_id?: number;
    store_name?: string;
    total?: number;
    store_code?: string;
    status?: string;
    batch_id?: string;
    user_name?: string;
    successful?: number;
    failed_shipments?: any[];
    processing?: number;
};
type BulkListingResponse = {
    error?: string;
    page?: BulkListingPage;
    success?: boolean;
    data?: bulkListingData[];
};
type ManifestPage = {
    has_next?: boolean;
    has_previous?: boolean;
    type?: string;
    size?: string;
    current?: string;
    total?: number;
};
type DateRange = {
    to_date?: string;
    from_date?: string;
};
type ManifestFilter = {
    lane?: string;
    sales_channel_name?: string;
    dp_ids?: string;
    sales_channels?: string;
    date_range?: DateRange;
    dp_name?: string;
    store_name?: string;
    stores?: string;
};
type GeneratedManifestItem = {
    status?: string;
    filters?: ManifestFilter;
    created_by?: string;
    is_active?: boolean;
    manifest_id?: string;
    company_id?: number;
    created_at?: string;
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
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
    filters?: ManifestFilter;
};
type ManifestDetail = {
    status?: string;
    filters?: ManifestFilter;
    uid?: number;
    created_by?: string;
    user_id?: number;
    id?: number;
    is_active?: boolean;
    manifest_id?: string;
    company_id?: number;
    created_at?: string;
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
    additional_shipment_count?: number;
    page?: ManifestPage;
    manifest_details?: ManifestDetail[];
    items?: ManifestDetailItem[];
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
    batch_id?: string;
    successful_shipments_count?: number;
    failed_shipments_count?: number;
    company_id?: string;
    total_shipments_count?: number;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    status?: boolean;
    failed_records?: string[];
    error?: string[];
    user_id?: string;
    uploaded_on?: string;
    success?: string;
    data?: BulkActionDetailsDataField[];
    uploaded_by?: string;
    message?: string;
};
type Document = {
    ds_type: string;
    value: string;
    url?: string;
    legal_name: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    password?: string;
    username?: string;
    user?: string;
};
type StoreEinvoice = {
    enabled: boolean;
    user?: string;
    username?: string;
    password?: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
type StoreMeta = {
    timing?: any[];
    documents?: StoreDocuments;
    ewaybill_portal_details?: any;
    additional_contact_details?: any;
    notification_emails?: string[];
    stage: string;
    product_return_config?: any;
    gst_number?: string;
    display_name: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    gst_credentials: StoreGstCredentials;
};
type StoreAddress = {
    updated_at: string;
    address_type: string;
    longitude: number;
    address1: string;
    country: string;
    email?: string;
    contact_person: string;
    created_at: string;
    phone: string;
    pincode: number;
    landmark?: string;
    area?: string;
    address2?: string;
    state: string;
    version?: string;
    country_code: string;
    address_category: string;
    latitude: number;
    city: string;
};
type Store = {
    store_email: string;
    updated_at?: string;
    is_archived?: boolean;
    fulfillment_channel: string;
    code?: string;
    address1: string;
    longitude: number;
    parent_store_id?: number;
    mall_name?: string;
    brand_id?: any;
    country: string;
    brand_store_tags?: string[];
    is_enabled_for_recon?: boolean;
    contact_person: string;
    packaging_material_count?: number;
    location_type: string;
    created_at: string;
    meta: StoreMeta;
    phone: number;
    mall_area?: string;
    vat_no?: string;
    company_id: number;
    pincode: string;
    login_username: string;
    s_id: string;
    name: string;
    address2?: string;
    alohomora_user_id?: number;
    store_address_json?: StoreAddress;
    state: string;
    is_active?: boolean;
    order_integration_id?: string;
    latitude: number;
    store_active_from?: string;
    city: string;
};
type Dimensions = {
    length?: number;
    unit?: string;
    height?: number;
    is_default?: boolean;
    width?: number;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
type Article = {
    is_set?: boolean;
    dimensions?: Dimensions;
    child_details?: any;
    identifiers: Identifier;
    uid: string;
    return_config?: ReturnConfig;
    raw_meta?: any;
    weight?: Weight;
    a_set?: any;
    size: string;
    esp_modified?: any;
    code?: string;
    seller_identifier: string;
    _id: string;
};
type AffiliateMeta = {
    box_type?: string;
    channel_order_id?: string;
    is_priority?: boolean;
    loyalty_discount?: number;
    size_level_total_qty?: number;
    employee_discount?: number;
    due_date?: string;
    order_item_id?: string;
    channel_shipment_id?: string;
    quantity?: number;
    coupon_code?: string;
};
type LockData = {
    locked?: boolean;
    lock_message?: string;
    mto?: boolean;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type EInvoice = {
    error_message?: string;
    signed_qr_code?: string;
    error_code?: string;
    acknowledge_no?: number;
    signed_invoice?: string;
    irn?: string;
    acknowledge_date?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type BuyerDetails = {
    ajio_site_id?: string;
    state: string;
    address: string;
    name: string;
    pincode: number;
    gstin: string;
    city: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentMeta = {
    box_type?: string;
    forward_affiliate_order_id?: string;
    store_invoice_updated_date?: string;
    b2c_buyer_details?: any;
    external?: any;
    auto_trigger_dp_assignment_acf: boolean;
    lock_data?: LockData;
    dp_name?: string;
    forward_affiliate_shipment_id?: string;
    timestamp?: ShipmentTimeStamp;
    awb_number?: string;
    return_store_node?: number;
    assign_dp_from_sb?: boolean;
    shipment_weight?: number;
    marketplace_store_id?: string;
    same_store_available: boolean;
    einvoice_info?: EinvoiceInfo;
    weight: number;
    fulfilment_priority_text?: string;
    dp_options?: any;
    dp_id?: string;
    return_affiliate_shipment_id?: string;
    packaging_name?: string;
    dp_sort_key?: string;
    due_date?: string;
    formatted?: Formatted;
    return_details?: any;
    order_type?: string;
    b2b_buyer_details?: BuyerDetails;
    shipment_volumetric_weight?: number;
    po_number?: string;
    return_affiliate_order_id?: string;
    debug_info?: DebugInfo;
    ewaybill_info?: any;
    bag_weight?: any;
    return_awb_number?: string;
};
type PDFLinks = {
    label?: string;
    label_a4?: string;
    invoice_a4?: string;
    invoice_type: string;
    label_a6?: string;
    invoice?: string;
    po_invoice?: string;
    invoice_a6?: string;
    label_pos?: string;
    invoice_pos?: string;
    credit_note_url?: string;
    b2b?: string;
    label_type: string;
};
type AffiliateDetails = {
    ad_id?: string;
    affiliate_shipment_id: string;
    affiliate_bag_id: string;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
    shipment_meta: ShipmentMeta;
    affiliate_store_id: string;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    company_affiliate_tag?: string;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type Brand = {
    brand_name: string;
    modified_on?: number;
    script_last_ran?: string;
    company: string;
    pickup_location?: string;
    credit_note_expiry_days?: number;
    credit_note_allowed?: boolean;
    created_on?: number;
    logo?: string;
    is_virtual_invoice?: boolean;
    start_date?: string;
    brand_id: number;
    invoice_prefix?: string;
};
type BagGSTDetails = {
    hsn_code: string;
    cgst_gst_fee: string;
    tax_collected_at_source: number;
    gst_tax_percentage: number;
    igst_tax_percentage: number;
    value_of_good: number;
    gstin_code?: string;
    igst_gst_fee: string;
    gst_fee: number;
    sgst_gst_fee: string;
    gst_tag: string;
    hsn_code_id: string;
    cgst_tax_percentage: number;
    sgst_tax_percentage: number;
    is_default_hsn_code?: boolean;
    brand_calculated_amount: number;
};
type B2BPODetails = {
    docker_number?: string;
    item_base_price?: number;
    po_tax_amount?: number;
    partial_can_ret?: boolean;
    po_line_amount?: number;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Attributes = {
    brand_name?: string;
    marketer_name?: string;
    essential?: string;
    gender?: string[];
    primary_color?: string;
    marketer_address?: string;
    name?: string;
    primary_color_hex?: string;
    primary_material?: string;
};
type Item = {
    can_cancel?: boolean;
    webstore_product_url?: string;
    l3_category?: number;
    attributes: Attributes;
    last_updated_at?: string;
    code?: string;
    item_id: number;
    slug_key: string;
    l3_category_name?: string;
    brand_id: number;
    l2_category?: string[];
    color?: string;
    brand: string;
    department_id?: number;
    branch_url?: string;
    l2_category_id?: number;
    size: string;
    meta?: any;
    l1_category?: string[];
    name: string;
    can_return?: boolean;
    gender?: string;
    l1_category_id?: number;
    image: string[];
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    affiliate_bag_id: string;
    employee_discount?: number;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
};
type BagReturnableCancelableStatus = {
    is_returnable: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
};
type ArticleDetails = {
    status?: any;
};
type BagDetailsPlatformResponse = {
    parent_promo_bags?: any;
    journey_type: string;
    restore_promos?: any;
    bag_status_history?: BagStatusHistory;
    reasons?: any[];
    ordering_store?: Store;
    article: Article;
    affiliate_details?: AffiliateDetails;
    line_number?: number;
    financial_breakup: FinancialBreakup[];
    current_operational_status: BagStatusHistory;
    dates?: Dates;
    b_type?: string;
    identifier?: string;
    brand: Brand;
    gst_details: BagGSTDetails;
    original_bag_list?: number[];
    no_of_bags_order?: number;
    tags?: string[];
    seller_identifier?: string;
    meta?: BagMeta;
    restore_coupon?: boolean;
    current_status: BagStatusHistory;
    display_name?: string;
    prices: Prices;
    item: Item;
    affiliate_bag_details: AffiliateBagDetails;
    operational_status?: string;
    quantity?: number;
    status: BagReturnableCancelableStatus;
    shipment_id?: string;
    article_details?: ArticleDetails;
    bag_update_time?: number;
    applied_promos?: any[];
    b_id: number;
    entity_type?: string;
    bag_status: BagStatusHistory[];
    qc_required?: any;
    order_integration_id?: string;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    has_next: boolean;
    item_total: number;
    page_type: string;
    size: number;
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
    affiliate_order_id?: string;
    affiliate_id?: string;
    reason_ids?: number[];
    store_id: number;
    set_id?: string;
    mongo_article_id?: string;
    affiliate_bag_id?: string;
    item_id?: string;
    bag_id?: number;
    fynd_order_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    reason_text: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    id?: string;
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    entities: Entities[];
    action_type: string;
    entity_type: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    affiliate_order_id?: string;
    bag_id?: number;
    is_locked?: boolean;
    affiliate_bag_id?: string;
};
type CheckResponse = {
    affiliate_id?: string;
    shipment_id?: string;
    lock_status?: boolean;
    is_shipment_locked?: boolean;
    affiliate_shipment_id?: string;
    original_filter?: OriginalFilter;
    is_bag_locked?: boolean;
    status?: string;
    bags?: Bags[];
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    title?: string;
    created_at?: string;
    logo_url?: string;
    from_datetime?: string;
    id: number;
    description?: string;
    to_datetime?: string;
    company_id?: number;
    platform_name?: string;
    platform_id?: string;
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
type EntityReasonData = {
    reason_text?: string;
    reason_id?: number;
};
type EntitiesReasons = {
    filters?: any[];
    data?: EntityReasonData;
};
type ProductsReasonsFilters = {
    identifier?: string;
    line_number?: number;
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
type Products = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
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
type ShipmentsRequest = {
    identifier: string;
    reasons?: ReasonsData;
    products?: Products[];
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
    status?: string;
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    task?: boolean;
    force_transition?: boolean;
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    final_state?: any;
    message?: string;
    exception?: string;
    identifier?: string;
    stack_trace?: string;
    meta?: any;
    status?: number;
    code?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    address1?: string;
    first_name: string;
    country: string;
    city: string;
    email: string;
    pincode: string;
    phone: number;
    last_name: string;
    address2?: string;
    state: string;
    mobile: number;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type ArticleDetails1 = {
    category: any;
    quantity: number;
    attributes: any;
    dimension: any;
    weight: any;
    _id: string;
    brand_id: number;
};
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentDetails = {
    dp_id?: number;
    articles: ArticleDetails1[];
    fulfillment_id: number;
    affiliate_shipment_id: string;
    meta?: any;
    shipments: number;
    box_type?: string;
};
type ShipmentConfig = {
    identifier: string;
    action: string;
    payment_mode: string;
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
    journey: string;
    source: string;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    quantity: number;
    identifier: any;
    _id: string;
    price_marked: number;
    unit_price: number;
    item_size: string;
    discount: number;
    delivery_charge: number;
    hsn_code_id: string;
    transfer_price: number;
    fynd_store_id: string;
    affiliate_store_id: string;
    store_id: number;
    seller_identifier: string;
    price_effective: number;
    modified_on: string;
    sku: string;
    avl_qty: number;
    affiliate_meta: any;
    pdf_links?: MarketPlacePdf;
    item_id: number;
    company_id: number;
    amount_paid: number;
};
type OrderInfo = {
    cod_charges: number;
    affiliate_order_id?: string;
    discount: number;
    delivery_charges: number;
    shipping_address: OrderUser;
    billing_address: OrderUser;
    payment_mode: string;
    order_priority?: OrderPriority;
    shipment?: ShipmentData;
    items: any;
    payment?: any;
    user: UserData;
    bags: AffiliateBag[];
    order_value: number;
    coupon?: string;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
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
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryConfig = {
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
    payment?: AffiliateInventoryPaymentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    updated_at: string;
    token: string;
    owner: string;
    created_at: string;
    id: string;
    meta?: AffiliateAppConfigMeta[];
    description?: string;
    secret: string;
    name: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    config?: AffiliateConfig;
    token: string;
    id: string;
};
type OrderConfig = {
    store_lookup?: string;
    bag_end_state?: string;
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
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
    id: number;
    display_text: string;
    slug: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    ticket_url?: string;
    message: string;
    l2_detail?: string;
    type: string;
    ticket_id?: string;
    createdat: string;
    user: string;
    l3_detail?: string;
    bag_id?: number;
    l1_detail?: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    country_code: string;
    message: string;
    brand_name: string;
    phone_number: number;
    payment_mode: string;
    shipment_id: number;
    order_id: string;
    customer_name: string;
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
    shipment_id?: string;
    remarks?: string;
    id: number;
    meta: Meta;
    status?: string;
    bag_list?: number[];
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
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    shipment_ids?: string[];
    dp_id: number;
    order_type: string;
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type BillingInfo = {
    floor_no?: string;
    primary_mobile_number: string;
    first_name: string;
    alternate_email?: string;
    gender?: string;
    pincode: string;
    alternate_mobile_number?: string;
    customer_code?: string;
    country_code?: string;
    address1: string;
    country: string;
    middle_name?: string;
    address2?: string;
    state_code?: string;
    title?: string;
    city: string;
    last_name?: string;
    primary_email: string;
    external_customer_code?: string;
    state: string;
    house_no?: string;
};
type PaymentMethod = {
    refund_by: string;
    transaction_data?: any;
    meta?: any;
    collect_by: string;
    amount: number;
    mode: string;
    name: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type ProcessingDates = {
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
    dispatch_by_date?: string;
    customer_pickup_slot?: any;
    confirm_by_date?: string;
    pack_by_date?: string;
};
type Tax = {
    rate: number;
    amount: any;
    name: string;
    breakup?: any[];
};
type Charge = {
    type: string;
    tax?: Tax;
    amount: any;
    code?: string;
    name: string;
};
type LineItem = {
    custom_messasge?: string;
    quantity?: number;
    meta?: any;
    seller_identifier: string;
    external_line_id?: string;
    charges: Charge[];
};
type Shipment = {
    processing_dates?: ProcessingDates;
    meta?: any;
    external_shipment_id?: number;
    line_items: LineItem[];
    location_id: number;
    priority?: number;
};
type ShippingInfo = {
    floor_no?: string;
    primary_mobile_number: string;
    first_name: string;
    alternate_email?: string;
    gender?: string;
    pincode: string;
    alternate_mobile_number?: string;
    customer_code?: string;
    country_code?: string;
    address1: string;
    country: string;
    middle_name?: string;
    landmark?: string;
    address2?: string;
    state_code?: string;
    title?: string;
    slot?: any[];
    address_type?: string;
    city: string;
    geo_location?: any;
    last_name?: string;
    primary_email: string;
    external_customer_code?: string;
    state: string;
    house_no?: string;
    shipping_type?: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type CreateOrderAPI = {
    billing_info: BillingInfo;
    payment_info: PaymentInfo;
    currency_info?: any;
    meta?: any;
    shipments: Shipment[];
    shipping_info: ShippingInfo;
    tax_info?: TaxInfo;
    external_creation_date?: string;
    charges: Charge[];
    external_order_id?: string;
};
type CreateOrderErrorReponse = {
    message: string;
    exception?: string;
    stack_trace?: string;
    info?: any;
    meta?: string;
    request_id?: string;
    status: number;
    code?: string;
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
    mode_of_payment?: string;
    source?: string;
    payment_methods?: PaymentMethods[];
};
type CreateChannelConfig = {
    dp_configuration?: DpConfiguration;
    payment_info?: CreateChannelPaymentInfo;
    shipment_assignment?: string;
    location_reassignment?: boolean;
    lock_states?: string[];
    logo_url?: any;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    is_inserted?: boolean;
    acknowledged?: boolean;
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
    end_date: string;
    start_date: string;
    order_details?: FyndOrderIdList[];
    mobile: number;
};
type GetSearchWordsData = {
    words?: string[];
    is_active?: boolean;
    result?: any;
    uid?: string;
    _custom_json?: any;
    app_id?: string;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    words?: string[];
    is_active?: boolean;
    result: SearchKeywordResult;
    _custom_json?: any;
    app_id?: string;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    words?: string[];
    results?: any[];
    uid?: string;
    _custom_json?: any;
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type AutocompletePageAction = {
    params?: any;
    url?: string;
    type?: string;
    query?: any;
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
    logo?: Media;
    _custom_json?: any;
    display?: string;
};
type CreateAutocompleteKeyword = {
    words?: string[];
    is_active?: boolean;
    results?: AutocompleteResult[];
    _custom_json?: any;
    app_id?: string;
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    _custom_json?: any;
    results?: any[];
    app_id?: string;
};
type ProductBundleItem = {
    auto_select?: boolean;
    max_quantity: number;
    product_uid: number;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    min_quantity: number;
};
type GetProductBundleCreateResponse = {
    logo?: string;
    company_id?: number;
    is_active: boolean;
    name: string;
    choice: string;
    created_by?: any;
    slug: string;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
    id?: string;
    meta?: any;
    page_visibility?: string[];
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    logo?: string;
    company_id?: number;
    is_active: boolean;
    name: string;
    choice: string;
    created_by?: any;
    slug: string;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
    meta?: any;
    page_visibility?: string[];
};
type Size = {
    quantity?: number;
    value?: string;
    is_available?: boolean;
    display?: string;
};
type Price = {
    min_marked?: number;
    max_effective?: number;
    currency?: string;
    max_marked?: number;
    min_effective?: number;
};
type LimitedProductData = {
    images?: string[];
    quantity?: number;
    country_of_origin?: string;
    name?: string;
    short_description?: string;
    sizes?: string[];
    slug?: string;
    identifier?: any;
    item_code?: string;
    price?: any;
    uid?: number;
    attributes?: any;
};
type GetProducts = {
    auto_select?: boolean;
    max_quantity?: number;
    product_uid?: number;
    sizes?: Size[];
    allow_remove?: boolean;
    price?: Price;
    auto_add_to_cart?: boolean;
    min_quantity?: number;
    product_details?: LimitedProductData;
};
type GetProductBundleResponse = {
    company_id?: number;
    logo?: string;
    is_active?: boolean;
    name?: string;
    choice?: string;
    slug?: string;
    products?: GetProducts[];
    same_store_assignment?: boolean;
    meta?: any;
    page_visibility?: string[];
};
type ProductBundleUpdateRequest = {
    logo?: string;
    company_id?: number;
    is_active: boolean;
    name: string;
    choice: string;
    slug: string;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    modified_by?: any;
    modified_on?: string;
    meta?: any;
    page_visibility?: string[];
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    company_id?: number;
    subtitle?: string;
    tag?: string;
    active?: boolean;
    name: string;
    description?: string;
    created_by?: any;
    brand_id?: number;
    modified_by?: any;
    modified_on?: string;
    guide?: Guide;
    created_on?: string;
    title: string;
    id?: string;
    image?: string;
};
type SizeGuideResponse = {
    company_id?: number;
    tag?: string;
    subtitle?: string;
    created_by?: any;
    active?: boolean;
    name?: string;
    brand_id?: number;
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
    guide?: any;
    title?: string;
    id?: string;
};
type SEOData = {
    title?: any;
    description?: any;
};
type MOQData = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    is_gift?: boolean;
    is_cod?: boolean;
    alt_text?: any;
    moq?: MOQData;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemMOQ = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    _custom_meta?: MetaFields[];
    is_gift?: boolean;
    is_cod?: boolean;
    alt_text?: any;
    _custom_json?: any;
    moq?: ApplicationItemMOQ;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    values?: any[];
    data: any[];
};
type PageResponseType = {
    total_count: number;
    next: number;
    current: number;
    has_next: boolean;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    logo?: string;
    is_active: boolean;
    key?: string;
    name: string;
    slug?: string;
    unit?: string;
    display_type: string;
    priority: number;
};
type AppConfigurationDetail = {
    logo?: string;
    is_active: boolean;
    name?: string;
    slug: string;
    is_default: boolean;
    priority: number;
    template_slugs?: string[];
    attributes?: AttributeDetailsGroup[];
    app_id: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    logo?: string;
    is_active: boolean;
    key: string;
    name?: string;
    default_key: string;
    is_default: boolean;
    priority: number;
    app_id: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    compare?: any;
    variant?: any;
    detail?: any;
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
    units?: any[];
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
type ConfigurationListingSortConfig = {
    logo?: string;
    is_active: boolean;
    key: string;
    name?: string;
    priority: number;
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
    sort?: string;
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    map?: any;
    map_values?: any[];
};
type ConfigurationListingFilterConfig = {
    logo?: string;
    is_active: boolean;
    key: string;
    name?: string;
    display_name?: string;
    type: string;
    value_config?: ConfigurationListingFilterValue;
    priority: number;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    logo?: string;
    is_active: boolean;
    key: string;
    name: string;
    display_type: string;
    priority: number;
    size: ProductSize;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    logo?: string;
    is_active: boolean;
    key: string;
    subtitle?: string;
    priority: number;
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
type AppCatalogConfiguration = {
    listing?: ConfigurationListing;
    created_by?: any;
    config_id?: string;
    type?: string;
    modified_by?: any;
    config_type: string;
    created_on?: string;
    product?: ConfigurationProduct;
    modified_on?: string;
    id?: string;
    app_id: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    created_by?: any;
    config_id?: string;
    type?: string;
    modified_by?: any;
    config_type: string;
    created_on?: string;
    product?: ConfigurationProduct;
    modified_on?: string;
    app_id: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_id?: string;
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
    id?: string;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersValue = {
    max?: number;
    value: any;
    query_format?: string;
    display_format?: string;
    currency_symbol?: string;
    selected_min?: number;
    min?: number;
    count?: number;
    selected_max?: number;
    display: string;
    is_selected: boolean;
    currency_code?: string;
};
type ProductFiltersKey = {
    logo?: string;
    kind?: string;
    name: string;
    display: string;
    operators?: string[];
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type ProductSortOn = {
    is_selected?: boolean;
    value?: string;
    name?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
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
    meta?: any;
    type?: string;
};
type BannerImage = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type GetCollectionDetailNest = {
    tag?: string[];
    action?: Action;
    cron?: any;
    meta?: any;
    description?: string;
    allow_sort?: boolean;
    slug?: string;
    app_id?: string;
    is_active?: boolean;
    type?: string;
    logo?: Media1;
    _schedule?: any;
    name?: string;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    priority?: number;
    query?: CollectionQuery[];
    uid?: string;
    badge?: any;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type UserInfo = {
    username?: string;
    email?: string;
    user_id?: string;
    uid?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionSchedule = {
    duration?: number;
    start?: string;
    cron?: string;
    next_schedule?: NextSchedule[];
    end?: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CreateCollection = {
    created_by?: UserInfo;
    sort_on?: string;
    meta?: any;
    description?: string;
    allow_sort?: boolean;
    slug: string;
    published?: boolean;
    app_id: string;
    is_active?: boolean;
    type: string;
    is_visible?: boolean;
    _locale_language?: any;
    tags?: string[];
    logo: CollectionImage;
    _schedule?: CollectionSchedule;
    seo?: SeoDetail;
    name: string;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    modified_by?: UserInfo;
    banners: CollectionBanner;
    priority?: number;
    query?: CollectionQuery[];
    badge?: CollectionBadge;
    _custom_json?: any;
};
type CollectionCreateResponse = {
    tag?: string[];
    sort_on?: string;
    cron?: any;
    meta?: any;
    description?: string;
    allow_sort?: boolean;
    slug?: string;
    app_id?: string;
    is_active?: boolean;
    type?: string;
    logo?: BannerImage;
    _schedule?: any;
    name?: string;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    priority?: number;
    query?: CollectionQuery[];
    badge?: any;
};
type CollectionDetailResponse = {
    logo?: Media1;
    _schedule?: any;
    is_active?: boolean;
    tag?: string[];
    name?: string;
    description?: string;
    allow_sort?: boolean;
    allow_facets?: boolean;
    slug?: string;
    type?: string;
    visible_facets_keys?: string[];
    cron?: any;
    banners?: ImageUrls;
    priority?: number;
    query?: CollectionQuery[];
    badge?: any;
    meta?: any;
    app_id?: string;
};
type UpdateCollection = {
    sort_on?: string;
    meta?: any;
    description?: string;
    allow_sort?: boolean;
    slug?: string;
    published?: boolean;
    is_active?: boolean;
    type?: string;
    is_visible?: boolean;
    _locale_language?: any;
    tags?: string[];
    logo?: CollectionImage;
    _schedule?: CollectionSchedule;
    seo?: SeoDetail;
    name?: string;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    modified_by?: UserInfo;
    banners?: CollectionBanner;
    priority?: number;
    query?: CollectionQuery[];
    badge?: CollectionBadge;
    _custom_json?: any;
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
    max?: number;
    currency_symbol?: string;
    currency_code?: string;
    min?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductBrand = {
    action?: Action;
    logo?: Media1;
    name?: string;
    uid?: number;
};
type ProductListingDetail = {
    highlights?: string[];
    discount?: string;
    product_online_date?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    slug: string;
    image_nature?: string;
    price?: ProductListingPrice;
    color?: string;
    has_variant?: boolean;
    item_type?: string;
    brand?: ProductBrand;
    short_description?: string;
    type?: string;
    rating?: number;
    rating_count?: number;
    attributes?: any;
    sellable?: boolean;
    medias?: Media1[];
    name?: string;
    tryouts?: string[];
    item_code?: string;
    teaser_tag?: any;
    promo_meta?: any;
    uid?: number;
    similars?: string[];
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page?: Page;
    sort_on?: ProductSortOn[];
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    query?: CollectionQuery[];
    item?: ItemQueryForUserCollection[];
    type?: string;
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type CatalogInsightBrand = {
    name?: string;
    available_articles?: number;
    article_freshness?: number;
    total_sizes?: number;
    total_articles?: number;
    available_sizes?: number;
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
    store_ids?: number[];
    opt_level: string;
    platform?: string;
    enabled?: boolean;
    brand_ids?: number[];
};
type CompanyOptIn = {
    company_id: number;
    store_ids: number[];
    opt_level: string;
    platform: string;
    created_by?: any;
    enabled: boolean;
    modified_by?: any;
    modified_on: number;
    created_on: number;
    brand_ids: number[];
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    company_type?: string;
    name?: string;
    uid?: number;
    business_type?: string;
};
type CompanyBrandDetail = {
    total_article?: number;
    company_id?: number;
    brand_id?: number;
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
    store_type?: string;
    timing?: any;
    company_id?: number;
    name?: string;
    documents?: any[];
    display_name?: string;
    additional_contacts?: any[];
    address?: any;
    modified_on?: string;
    created_on?: string;
    manager?: any;
    store_code?: string;
    uid?: number;
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
    allowed_values?: string[];
    range?: AttributeSchemaRange;
    type: string;
    multi?: boolean;
    mandatory?: boolean;
    format?: string;
};
type AttributeMasterFilter = {
    priority?: number;
    indexing: boolean;
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
    logo?: string;
    schema?: AttributeMaster;
    enabled_for_end_consumer?: boolean;
    is_nested?: boolean;
    name?: string;
    description?: string;
    filters?: AttributeMasterFilter;
    slug?: string;
    departments?: string[];
    meta?: AttributeMasterMeta;
    id?: string;
    details?: AttributeMasterDetails;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    errors?: any;
    code?: string;
    message?: string;
    status?: number;
    meta?: any;
};
type UserSerializer = {
    _id?: string;
    uid?: string;
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetDepartment = {
    search?: string;
    logo?: string;
    is_active?: boolean;
    name?: string;
    priority_order?: number;
    created_by?: UserSerializer;
    slug?: string;
    page_size?: number;
    modified_on?: string;
    created_on?: string;
    modified_by?: UserSerializer;
    item_type?: string;
    synonyms?: string[];
    uid?: number;
    page_no?: number;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    errors?: any;
    code?: string;
    message?: string;
    status?: number;
    meta?: any;
};
type DepartmentCreateUpdate = {
    logo: string;
    is_active?: boolean;
    priority_order: number;
    name: string;
    slug?: string;
    platforms?: any;
    synonyms?: string[];
    uid?: number;
    _cls?: string;
    _custom_json?: any;
    tags?: string[];
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    username: string;
    user_id: string;
    super_user?: boolean;
    contact?: string;
};
type DepartmentModel = {
    logo: string;
    is_active?: boolean;
    created_by?: UserDetail;
    name: any;
    priority_order: number;
    _custom_json?: any;
    slug?: any;
    _id?: any;
    modified_by?: UserDetail;
    modified_on: string;
    created_on: string;
    synonyms?: any[];
    uid?: number;
    _cls?: any;
    verified_by?: UserDetail;
    verified_on?: string;
};
type ProductTemplate = {
    logo?: string;
    tag?: string;
    is_active?: boolean;
    name?: string;
    description?: string;
    created_by?: any;
    slug: string;
    is_expirable: boolean;
    is_archived?: boolean;
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
    is_physical: boolean;
    categories?: string[];
    attributes?: string[];
    departments?: string[];
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    logo?: string;
    tag?: string;
    is_active?: boolean;
    name?: string;
    description?: string;
    slug: string;
    is_expirable: boolean;
    is_archived?: boolean;
    is_physical: boolean;
    categories?: string[];
    id?: string;
    attributes?: string[];
    departments?: string[];
};
type Properties = {
    highlights?: any;
    category_slug?: any;
    trader_type?: any;
    media?: any;
    size_guide?: any;
    description?: any;
    is_dependent?: any;
    command?: any;
    slug?: any;
    trader?: any;
    item_type?: any;
    product_publish?: any;
    currency?: any;
    country_of_origin?: any;
    no_of_boxes?: any;
    is_active?: any;
    short_description?: any;
    sizes?: any;
    custom_order?: any;
    hsn_code?: any;
    multi_size?: any;
    tags?: any;
    product_group_tag?: any;
    name?: any;
    brand_uid?: any;
    return_config?: any;
    item_code?: any;
    teaser_tag?: any;
    variants?: any;
};
type GlobalValidation = {
    description?: string;
    type?: string;
    required?: string[];
    properties?: Properties;
    definitions?: any;
    title?: string;
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
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadItemsData = {
    brand?: string[];
    templates?: string[];
    type?: string;
};
type ProductDownloadsItems = {
    trigger_on?: string;
    url?: string;
    created_by?: VerifiedBy;
    status?: string;
    data?: ProductDownloadItemsData;
    completed_on?: string;
    task_id?: string;
    seller_id?: number;
    id?: string;
    template_tags?: any;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
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
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Hierarchy = {
    l1: number;
    department: number;
    l2: number;
};
type Media2 = {
    logo: string;
    portrait: string;
    landscape: string;
};
type Category = {
    is_active: boolean;
    marketplaces?: CategoryMapping;
    name: string;
    created_by?: any;
    slug?: string;
    tryouts?: string[];
    level: number;
    modified_by?: any;
    modified_on?: string;
    priority?: number;
    created_on?: string;
    id?: string;
    synonyms?: string[];
    uid?: number;
    hierarchy?: Hierarchy[];
    media?: Media2;
    departments: number[];
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    is_active: boolean;
    marketplaces?: CategoryMapping;
    name: string;
    slug?: string;
    tryouts?: string[];
    level: number;
    priority?: number;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    media?: Media2;
    departments: number[];
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Logo = {
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type Image = {
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type Product = {
    highlights?: string[];
    category_slug?: string;
    media?: Media1[];
    all_sizes?: any[];
    size_guide?: string;
    description?: string;
    is_dependent?: boolean;
    slug?: string;
    is_expirable?: boolean;
    image_nature?: string;
    color?: string;
    is_set?: boolean;
    item_type?: string;
    primary_color?: string;
    currency?: string;
    product_publish?: ProductPublished;
    brand?: Brand;
    variant_group?: any;
    country_of_origin?: string;
    is_active?: boolean;
    short_description?: string;
    sizes?: any[];
    custom_order?: any;
    hsn_code?: string;
    id?: string;
    multi_size?: boolean;
    departments?: number[];
    images?: Image[];
    template_tag?: string;
    name?: string;
    category_uid?: number;
    brand_uid?: number;
    item_code?: string;
    l3_mapping?: string[];
    uid?: number;
    variants?: any;
    is_physical?: boolean;
    tax_identifier?: any;
    _custom_json?: any;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type Trader = {
    name: any;
    address?: string[];
    type?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
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
type ProductCreateUpdate = {
    highlights?: string[];
    category_slug: string;
    variant_media?: any;
    action?: string;
    requester?: string;
    media?: Media1[];
    size_guide?: string;
    bulk_job_id?: string;
    description?: string;
    is_dependent?: boolean;
    slug: string;
    is_set?: boolean;
    trader: Trader[];
    item_type: string;
    currency: string;
    product_publish?: ProductPublish;
    variant_group?: any;
    country_of_origin: string;
    no_of_boxes?: number;
    is_active?: boolean;
    short_description?: string;
    change_request_id?: any;
    custom_order?: CustomOrder;
    net_quantity?: NetQuantity;
    multi_size?: boolean;
    tags?: string[];
    departments: number[];
    company_id: number;
    product_group_tag?: string[];
    template_tag: string;
    name: any;
    brand_uid: number;
    is_image_less_product?: boolean;
    return_config: ReturnConfig;
    item_code: any;
    teaser_tag?: TeaserTag;
    variants?: any;
    uid?: number;
    tax_identifier: TaxIdentifier;
    _custom_json?: any;
};
type ProductVariants = {
    name?: string;
    category_uid?: number;
    brand_uid?: number;
    item_code?: string;
    uid?: number;
    media?: Media1[];
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    created_by?: any;
    modified_on?: string;
    filters: AttributeMasterFilter;
    schema: AttributeMaster;
    description?: string;
    slug: string;
    unit?: string;
    variant?: boolean;
    suggestion?: string;
    is_nested?: boolean;
    raw_key?: string;
    tags?: string[];
    departments: string[];
    logo?: string;
    enabled_for_end_consumer?: boolean;
    name?: string;
    modified_by?: any;
    created_on?: string;
    synonyms?: any;
    details: AttributeMasterDetails;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    username?: string;
    user_id?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    company_id?: number;
    is_active?: boolean;
    template_tag?: string;
    created_by?: UserDetail1;
    template?: ProductTemplate;
    stage?: string;
    file_path?: string;
    modified_on?: string;
    created_on?: string;
    modified_by?: UserDetail1;
    cancelled_records?: string[];
    total?: number;
    failed_records?: string[];
    succeed?: number;
    cancelled?: number;
    failed?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    username?: string;
    email?: string;
    user_id?: string;
    uid?: string;
};
type BulkJob = {
    company_id: number;
    is_active?: boolean;
    template_tag?: string;
    created_by?: UserInfo1;
    stage?: string;
    modified_by?: UserInfo1;
    modified_on?: string;
    created_on: string;
    file_path?: string;
    cancelled_records?: any[];
    total?: number;
    failed_records?: any[];
    tracking_url?: string;
    succeed?: number;
    custom_template_tag?: string;
    cancelled?: number;
    failed?: number;
};
type BulkResponse = {
    is_active?: boolean;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
    modified_on?: string;
    created_on: string;
    batch_id: string;
};
type BulkProductRequest = {
    company_id: number;
    template_tag: string;
    batch_id: string;
    data: any[];
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type UserCommon = {
    username?: string;
    company_id?: number;
    user_id?: string;
};
type Items = {
    company_id?: number;
    is_active?: boolean;
    created_by?: UserCommon;
    stage?: string;
    modified_by?: UserCommon;
    modified_on?: string;
    created_on?: string;
    file_path?: string;
    cancelled_records?: string[];
    total?: number;
    failed_records?: string[];
    tracking_url?: string;
    succeed?: number;
    retry?: number;
    id?: string;
    cancelled?: number;
    failed?: number;
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
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    quantity?: number;
    item_id?: number;
    store?: any;
    price?: number;
    price_effective?: number;
    price_transfer?: number;
    uid?: string;
    sellable_quantity?: number;
    currency?: string;
    seller_identifier?: string;
    inventory_updated_on?: string;
    size?: string;
    identifiers?: any;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type GTIN = {
    primary?: boolean;
    gtin_type: string;
    gtin_value: any;
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
    quantity: number;
    expiration_date?: string;
    identifiers: GTIN[];
    item_dimensions_unit_of_measure?: string;
    price?: number;
    price_effective: number;
    price_transfer?: number;
    item_height?: number;
    item_weight_unit_of_measure?: string;
    is_set?: boolean;
    item_length?: number;
    item_width?: number;
    store_code: string;
    currency: string;
    set?: InventorySet;
    size: any;
    item_weight?: number;
};
type ItemQuery = {
    brand_uid?: number;
    item_code?: string;
    uid?: number;
};
type InventoryRequest = {
    sizes: InvSize[];
    company_id: number;
    item: ItemQuery;
};
type PriceMeta = {
    updated_at?: string;
    tp_notes?: any;
    transfer: number;
    marked: number;
    currency: string;
    effective: number;
};
type Trader1 = {
    name: string;
    address: string[];
    type: string;
};
type DimensionResponse = {
    length: number;
    unit: string;
    is_default: boolean;
    width: number;
    height: number;
};
type BrandMeta = {
    id: number;
    name: string;
};
type WeightResponse = {
    is_default: boolean;
    shipping: number;
    unit: string;
};
type ManufacturerResponse = {
    is_default: boolean;
    address: string;
    name: string;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    sellable?: QuantityBase;
    damaged?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
};
type CompanyMeta = {
    id: number;
};
type ReturnConfig1 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type InventorySellerResponse = {
    expiration_date?: string;
    created_by?: UserSerializer;
    store: StoreMeta;
    stage?: string;
    fynd_article_code: string;
    identifier: any;
    track_inventory?: boolean;
    meta?: any;
    size: string;
    trace_id?: string;
    total_quantity: number;
    added_on_store?: string;
    fynd_item_code: string;
    price: PriceMeta;
    is_set?: boolean;
    trader?: Trader1[];
    dimension: DimensionResponse;
    brand: BrandMeta;
    raw_meta?: any;
    is_active?: boolean;
    country_of_origin: string;
    weight: WeightResponse;
    manufacturer: ManufacturerResponse;
    quantities?: Quantities;
    set?: InventorySet;
    tags?: string[];
    company: CompanyMeta;
    item_id: number;
    return_config?: ReturnConfig1;
    modified_by?: UserSerializer;
    uid: string;
    _custom_json?: any;
    fynd_meta?: any;
    tax_identifier?: any;
    fragile: boolean;
    seller_identifier: string;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type ArticleStoreResponse = {
    store_type?: string;
    store_code?: string;
    name?: string;
    uid?: number;
};
type PriceArticle = {
    tp_notes?: any;
    transfer?: number;
    marked?: number;
    currency?: string;
    effective?: number;
};
type Trader2 = {
    name?: string;
    address?: string[];
    type?: string;
};
type DimensionResponse1 = {
    length?: number;
    width?: number;
    unit?: string;
    height?: number;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    address?: string;
    name?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    sellable?: Quantity;
    damaged?: Quantity;
    not_available?: Quantity;
    order_committed?: Quantity;
};
type CompanyMeta1 = {
    id?: number;
};
type ReturnConfig2 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type GetInventories = {
    expiration_date?: string;
    created_by?: UserSerializer;
    store?: ArticleStoreResponse;
    stage?: string;
    identifier?: any;
    track_inventory?: boolean;
    inventory_updated_on?: string;
    size?: string;
    trace_id?: string;
    total_quantity?: number;
    date_meta?: DateMeta;
    price?: PriceArticle;
    is_set?: boolean;
    trader?: Trader2[];
    dimension?: DimensionResponse1;
    brand?: BrandMeta1;
    country_of_origin?: string;
    weight?: WeightResponse1;
    platforms?: any;
    manufacturer?: ManufacturerResponse1;
    quantities?: QuantitiesArticle;
    tags?: string[];
    company?: CompanyMeta1;
    item_id?: number;
    return_config?: ReturnConfig2;
    modified_by?: UserSerializer;
    uid?: string;
    tax_identifier?: any;
    id?: string;
    seller_identifier?: string;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    company_id?: number;
    is_active?: boolean;
    created_by?: any;
    stage?: string;
    file_path?: string;
    modified_by?: any;
    created_on?: string;
    modified_on?: string;
    cancelled_records?: string[];
    total?: number;
    failed_records?: string[];
    succeed?: number;
    id?: string;
    cancelled?: number;
    failed?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    total_quantity?: number;
    quantity?: number;
    expiration_date?: string;
    tags?: string[];
    trace_id?: string;
    item_dimensions_unit_of_measure?: string;
    price?: number;
    price_effective?: number;
    price_marked?: number;
    item_weight_unit_of_measure?: string;
    store_code: string;
    currency?: string;
    seller_identifier: string;
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    company_id: number;
    batch_id: string;
    user?: any;
};
type InventoryExportJob = {
    trigger_on?: string;
    url?: string;
    request_params?: any;
    status?: string;
    completed_on?: string;
    task_id: string;
    seller_id: number;
};
type InventoryExportRequest = {
    brand?: number[];
    type?: string;
    store?: number[];
};
type InventoryExportResponse = {
    trigger_on?: string;
    request_params?: any;
    status?: string;
    task_id: string;
    seller_id: number;
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
    total_quantity?: number;
    store_id: number;
    expiration_date?: string;
    tags?: string[];
    trace_id?: string;
    price_effective?: number;
    price_marked?: number;
    seller_identifier: string;
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
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    message: string;
    items?: InventoryResponseItem[];
};
type HsnCodesObject = {
    company_id?: number;
    threshold1?: number;
    tax1?: number;
    hsn_code?: string;
    modified_on?: string;
    tax_on_esp?: boolean;
    tax_on_mrp?: boolean;
    threshold2?: number;
    tax2?: number;
    hs2_code?: string;
    id?: string;
};
type PageResponse = {
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    size?: number;
    current?: string;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    company_id: number;
    is_active?: boolean;
    threshold1: number;
    tax1: number;
    hsn_code: string;
    tax_on_esp?: boolean;
    tax_on_mrp: boolean;
    threshold2?: number;
    tax2?: number;
    uid?: number;
    hs2_code: string;
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
    effective_date: string;
    rate: number;
    cess?: number;
    threshold: number;
};
type HSNDataInsertV2 = {
    created_by?: any;
    description: string;
    reporting_hsn: string;
    type: string;
    modified_by?: any;
    modified_on?: string;
    hsn_code: string;
    created_on?: string;
    country_code: string;
    taxes: TaxSlab[];
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    logo?: Media;
    discount?: string;
    name?: string;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    uid?: number;
    departments?: string[];
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    logo?: Media;
    priority_order?: number;
    name?: string;
    slug?: string;
    uid?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    name?: string;
    slug?: string;
    action?: Action;
    childs?: any[];
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
};
type SecondLevelChild = {
    name?: string;
    slug?: string;
    action?: Action;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
};
type Child = {
    name?: string;
    slug?: string;
    action?: Action;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
};
type CategoryItems = {
    name?: string;
    slug?: string;
    action?: Action;
    childs?: Child[];
    banners?: ImageUrls;
    uid?: number;
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
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page: Page;
    sort_on?: ProductSortOn[];
    operators?: any;
};
type ProductDetail = {
    highlights?: string[];
    product_online_date?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    slug: string;
    image_nature?: string;
    color?: string;
    has_variant?: boolean;
    item_type?: string;
    brand?: ProductBrand;
    short_description?: string;
    type?: string;
    rating?: number;
    rating_count?: number;
    attributes?: any;
    medias?: Media1[];
    name?: string;
    tryouts?: string[];
    item_code?: string;
    teaser_tag?: any;
    promo_meta?: any;
    uid?: number;
    similars?: string[];
};
type InventoryPage = {
    has_next?: boolean;
    has_previous?: boolean;
    type: string;
    next_id?: string;
    item_total: number;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type ArticleQuery = {
    size: string;
    ignored_stores?: number[];
    item_id: number;
};
type AssignStoreArticle = {
    quantity?: number;
    group_id?: string;
    article_assignment?: ArticleAssignment;
    query?: ArticleQuery;
    meta?: any;
};
type AssignStore = {
    company_id?: number;
    store_ids?: number[];
    channel_identifier?: string;
    pincode: string;
    channel_type?: string;
    articles: AssignStoreArticle[];
    app_id: string;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    strategy_wise_listing?: any[];
    company_id?: number;
    index?: number;
    s_city?: string;
    store_id?: number;
    quantity: number;
    item_id: number;
    status: boolean;
    group_id?: string;
    _id?: string;
    price_effective?: number;
    article_assignment: ArticleAssignment1;
    price_marked?: number;
    uid?: string;
    store_pincode?: number;
    meta?: any;
    size: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type UserSerializer1 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetAddressSerializer = {
    city?: string;
    state?: string;
    latitude?: number;
    country?: string;
    longitude?: number;
    address1?: string;
    address_type?: string;
    pincode?: number;
    landmark?: string;
    country_code?: string;
    address2?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type UserSerializer2 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetCompanySerializer = {
    created_by?: UserSerializer2;
    name?: string;
    business_type?: string;
    stage?: string;
    company_type?: string;
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer2;
    modified_on?: string;
    created_on?: string;
    reject_reason?: string;
    uid?: number;
    verified_by?: UserSerializer2;
    verified_on?: string;
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
type LocationManagerSerializer = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
};
type GetLocationSerializer = {
    timing?: LocationDayWiseSerializer[];
    integration_type?: LocationIntegrationType;
    created_by?: UserSerializer1;
    stage?: string;
    display_name: string;
    address: GetAddressSerializer;
    modified_on?: string;
    product_return_config?: ProductReturnConfigSerializer;
    contact_numbers?: SellerPhoneNumber[];
    documents?: Document[];
    code: string;
    notification_emails?: string[];
    phone_number: string;
    verified_by?: UserSerializer1;
    store_type?: string;
    warnings?: any;
    company?: GetCompanySerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    name: string;
    modified_by?: UserSerializer1;
    created_on?: string;
    manager?: LocationManagerSerializer;
    uid?: number;
    _custom_json?: any;
    verified_on?: string;
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
    name?: string;
    uid: number;
    _custom_json?: any;
    app_id: string;
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
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
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
type GetCompanyProfileSerializerResponse = {
    created_by?: UserSerializer;
    taxes?: CompanyTaxesSerializer[];
    business_country_info?: BusinessCountryInfo;
    modified_by?: UserSerializer;
    warnings?: any;
    created_on?: string;
    franchise_enabled?: boolean;
    business_info?: string;
    business_type: string;
    name?: string;
    addresses?: GetAddressSerializer[];
    uid: number;
    verified_on?: string;
    modified_on?: string;
    contact_details?: ContactDetails;
    mode?: string;
    company_type: string;
    stage?: string;
    notification_emails?: string[];
    _custom_json?: any;
    business_details?: BusinessDetails;
    verified_by?: UserSerializer;
    documents?: Document[];
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type CreateUpdateAddressSerializer = {
    country: string;
    pincode: number;
    landmark?: string;
    address_type: string;
    latitude: number;
    country_code?: string;
    state: string;
    address1: string;
    address2?: string;
    city: string;
    longitude: number;
};
type UpdateCompany = {
    taxes?: CompanyTaxesSerializer1[];
    addresses?: CreateUpdateAddressSerializer[];
    warnings?: any;
    company_type?: string;
    notification_emails?: string[];
    contact_details?: ContactDetails;
    franchise_enabled?: boolean;
    business_info?: string;
    business_type?: string;
    name?: string;
    _custom_json?: any;
    business_details?: BusinessDetails;
    reject_reason?: string;
    documents?: Document[];
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
    product?: DocumentsObj;
    uid?: number;
    store?: DocumentsObj;
    stage?: string;
    store_documents?: DocumentsObj;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    logo?: string;
    warnings?: any;
    created_on?: string;
    name: string;
    _locale_language?: any;
    uid?: number;
    verified_on?: string;
    description?: string;
    modified_on?: string;
    synonyms?: string[];
    reject_reason?: string;
    mode?: string;
    stage?: string;
    banner?: BrandBannerSerializer;
    _custom_json?: any;
    slug_key?: string;
    verified_by?: UserSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    uid?: number;
    logo: string;
    banner?: BrandBannerSerializer;
    _custom_json?: any;
    company_id?: number;
    brand_tier?: string;
    name: string;
    description?: string;
    _locale_language?: any;
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
    created_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    business_country_info?: BusinessCountryInfo;
    modified_by?: UserSerializer;
    uid?: number;
    details?: CompanyDetails;
    company_type: string;
    modified_on?: string;
    created_on?: string;
    verified_on?: string;
    notification_emails?: string[];
    stage?: string;
    _custom_json?: any;
    business_type: string;
    name?: string;
    market_channels?: string[];
    verified_by?: UserSerializer;
    reject_reason?: string;
};
type CompanyBrandSerializer = {
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    uid?: number;
    warnings?: any;
    stage?: string;
    modified_on?: string;
    created_on?: string;
    verified_on?: string;
    company?: CompanySerializer;
    verified_by?: UserSerializer;
    reject_reason?: string;
    brand?: GetBrandResponseSerializer;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
};
type CompanyBrandPostRequestSerializer = {
    uid?: number;
    company: number;
    brands: number[];
};
type HolidayDateSerializer = {
    start_date: string;
    end_date: string;
};
type HolidaySchemaSerializer = {
    holiday_type: string;
    title: string;
    date: HolidayDateSerializer;
};
type LocationSerializer = {
    display_name: string;
    code: string;
    contact_numbers?: SellerPhoneNumber[];
    timing?: LocationDayWiseSerializer[];
    uid?: number;
    warnings?: any;
    holiday?: HolidaySchemaSerializer[];
    stage?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    notification_emails?: string[];
    _custom_json?: any;
    manager?: LocationManagerSerializer;
    address: GetAddressSerializer;
    name: string;
    product_return_config?: ProductReturnConfigSerializer;
    store_type?: string;
    company: number;
    documents?: Document[];
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type _ArticleQuery = {
    ignored_stores?: number[];
    size?: string;
    item_id?: number;
};
type _AssignStoreArticle = {
    quantity?: number;
    article_assignment?: _ArticleAssignment;
    meta?: any;
    group_id?: string;
    query?: _ArticleQuery;
};
type AssignStoreRequestValidator = {
    channel_type?: string;
    pincode?: string;
    app_id?: string;
    company_id?: number;
    store_ids?: number[];
    articles?: _AssignStoreArticle[];
    channel_identifier?: string;
};
type AssignStoreResponseSerializer = {
    quantity?: number;
    preice_effective?: number;
    article_assignment?: _ArticleAssignment;
    uid?: string;
    meta?: any;
    s_city?: string;
    store_id?: number;
    status?: boolean;
    item_id?: number;
    index?: number;
    company_id?: number;
    _id?: string;
    store_pincode?: string;
    price_marked?: number;
    size?: string;
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
type CouponSchedule = {
    start?: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    cron?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type RuleDefinition = {
    currency_code?: string;
    auto_apply?: boolean;
    applicable_on: string;
    scope?: string[];
    type: string;
    value_type: string;
    is_exact?: boolean;
    calculate_on: string;
};
type PriceRange = {
    max?: number;
    min?: number;
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
    types?: string[];
    codes?: string[];
    uses?: PaymentAllowValue;
    networks?: string[];
};
type UsesRemaining = {
    app?: number;
    total?: number;
    user?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type Restrictions = {
    platforms?: string[];
    ordering_stores?: number[];
    coupon_allowed?: boolean;
    price_range?: PriceRange;
    post_order?: PostOrder;
    bulk_bundle?: BulkBundleRestriction;
    payments?: any;
    user_groups?: number[];
    uses?: UsesRestriction;
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
    auto?: DisplayMetaDict;
    description?: string;
    title?: string;
    subtitle?: string;
    remove?: DisplayMetaDict;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Rule = {
    key?: number;
    max?: number;
    discount_qty?: number;
    min?: number;
    value?: number;
};
type Validation = {
    user_registered_after?: string;
    app_id?: string[];
    anonymous?: boolean;
};
type CouponAdd = {
    _schedule?: CouponSchedule;
    ownership: Ownership;
    action?: CouponAction;
    state?: State;
    code: string;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
    restrictions?: Restrictions;
    validity: Validity;
    display_meta: DisplayMeta;
    date_meta?: CouponDateMeta;
    type_slug: string;
    rule: Rule[];
    identifiers: Identifier;
    validation?: Validation;
    tags?: string[];
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
    _schedule?: CouponSchedule;
    ownership: Ownership;
    action?: CouponAction;
    state?: State;
    code: string;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
    restrictions?: Restrictions;
    validity: Validity;
    display_meta: DisplayMeta;
    date_meta?: CouponDateMeta;
    type_slug: string;
    rule: Rule[];
    identifiers: Identifier;
    validation?: Validation;
    tags?: string[];
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CompareObject = {
    greater_than_equals?: number;
    less_than?: number;
    equals?: number;
    greater_than?: number;
    less_than_equals?: number;
};
type ItemCriteria = {
    item_exclude_store?: number[];
    item_company?: number[];
    cart_quantity?: CompareObject;
    item_size?: string[];
    all_items?: boolean;
    item_sku?: string[];
    item_store?: number[];
    item_exclude_company?: number[];
    buy_rules?: string[];
    item_id?: number[];
    item_exclude_brand?: number[];
    item_exclude_sku?: string[];
    item_brand?: number[];
    cart_total?: CompareObject;
    item_category?: number[];
    item_exclude_category?: number[];
};
type DiscountOffer = {
    min_offer_quantity?: number;
    discount_price?: number;
    discount_amount?: number;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    discount_percentage?: number;
    code?: string;
};
type DiscountRule = {
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
    discount_type: string;
    buy_condition: string;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    uses?: PaymentAllowValue1;
    codes?: string[];
    type: string;
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
    platforms?: string[];
    user_registered?: UserRegistered;
    post_order?: PostOrder1;
    anonymous_users?: boolean;
    payments?: PromotionPaymentModes[];
    user_groups?: number[];
    order_quantity?: number;
    user_id?: string[];
    uses: UsesRestriction1;
};
type PromotionSchedule = {
    start: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    cron?: string;
    published: boolean;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type DisplayMeta1 = {
    description?: string;
    name?: string;
    offer_text?: string;
};
type PromotionListItem = {
    promotion_type: string;
    promo_group: string;
    ownership: Ownership1;
    application_id: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    mode: string;
    post_order_action?: PromotionAction;
    buy_rules: any;
    _custom_json?: any;
    stackable?: boolean;
    code?: string;
    visiblility?: Visibility;
    currency?: string;
    display_meta: DisplayMeta1;
    apply_all_discount?: boolean;
    apply_priority?: number;
    apply_exclusive?: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    promotion_type: string;
    promo_group: string;
    ownership: Ownership1;
    application_id: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    mode: string;
    post_order_action?: PromotionAction;
    buy_rules: any;
    _custom_json?: any;
    stackable?: boolean;
    code?: string;
    visiblility?: Visibility;
    currency?: string;
    display_meta: DisplayMeta1;
    apply_all_discount?: boolean;
    apply_priority?: number;
    apply_exclusive?: string;
};
type PromotionUpdate = {
    promotion_type: string;
    promo_group: string;
    ownership: Ownership1;
    application_id: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    mode: string;
    post_order_action?: PromotionAction;
    buy_rules: any;
    _custom_json?: any;
    stackable?: boolean;
    code?: string;
    visiblility?: Visibility;
    currency?: string;
    display_meta: DisplayMeta1;
    apply_all_discount?: boolean;
    apply_priority?: number;
    apply_exclusive?: string;
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
type DisplayBreakup = {
    currency_symbol?: string;
    currency_code?: string;
    key?: string;
    message?: string[];
    value?: number;
    display?: string;
};
type RawBreakup = {
    coupon?: number;
    you_saved?: number;
    mrp_total?: number;
    fynd_cash?: number;
    delivery_charge?: number;
    cod_charge?: number;
    subtotal?: number;
    convenience_fee?: number;
    total?: number;
    gst_charges?: number;
    vog?: number;
    discount?: number;
};
type LoyaltyPoints = {
    total?: number;
    description?: string;
    is_applied?: boolean;
    applicable?: number;
};
type CouponBreakup = {
    uid?: string;
    message?: string;
    code?: string;
    type?: string;
    value?: number;
    is_applied?: boolean;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    raw?: RawBreakup;
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type BasePrice = {
    currency_code?: string;
    effective?: number;
    marked?: number;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    extra_meta?: any;
    size?: string;
    uid?: string;
    quantity?: number;
    product_group_tags?: string[];
    store?: BaseInfo;
    parent_item_identifiers?: any;
    price?: ArticlePriceInfo;
    type?: string;
    seller?: BaseInfo;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    query?: ActionQuery;
    type?: string;
    url?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    uid?: number;
    images?: ProductImage[];
    brand?: BaseInfo;
    slug?: string;
    action?: ProductAction;
    type?: string;
    categories?: CategoryInfo[];
    name?: string;
};
type ProductAvailability = {
    other_store_quantity?: number;
    deliverable?: boolean;
    is_valid?: boolean;
    out_of_stock?: boolean;
    sizes?: string[];
};
type AppliedPromotion = {
    promo_id?: string;
    promotion_type?: string;
    amount?: number;
    article_quantity?: number;
    offer_text?: string;
    mrp_promotion?: boolean;
};
type PromoMeta = {
    message?: string;
};
type ProductPrice = {
    selling?: number;
    currency_code?: string;
    effective?: number;
    currency_symbol?: string;
    add_on?: number;
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
    is_set?: boolean;
    key?: string;
    quantity?: number;
    article?: ProductArticle;
    product?: CartProduct;
    coupon_message?: string;
    availability?: ProductAvailability;
    promotions_applied?: AppliedPromotion[];
    promo_meta?: PromoMeta;
    message?: string;
    parent_item_identifiers?: any;
    price_per_unit?: ProductPriceInfo;
    price?: ProductPriceInfo;
    bulk_offer?: any;
    identifiers: CartProductIdentifer;
    discount?: string;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    is_valid?: boolean;
    message?: string;
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    area_code: string;
    country_code?: string;
    pincode?: number;
    state?: string;
    email?: string;
    phone?: number;
    meta?: any;
    country?: string;
    landmark?: string;
    city?: string;
    address?: string;
    area_code_slug?: string;
    name?: string;
    address_type?: string;
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
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    message?: string;
    delivery_promise?: ShipmentPromise;
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
    extra_meta?: any;
    files?: OpenApiFiles[];
    quantity?: number;
    size: string;
    cod_charges: number;
    price_effective: number;
    payment_methods: MultiTenderPaymentMethod[];
    amount_paid: number;
    price_marked: number;
    meta?: CartItemMeta;
    employee_discount?: number;
    coupon_effective_discount: number;
    cashback_applied: number;
    product_id: number;
    loyalty_discount?: number;
    discount: number;
    delivery_charges: number;
};
type OpenApiPlatformCheckoutReq = {
    currency_code?: string;
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    gstin?: string;
    employee_discount?: any;
    cashback_applied: number;
    cart_value: number;
    coupon_value: number;
    delivery_charges: number;
    cart_items: OpenApiOrderItem[];
    order_id?: string;
    coupon_code: string;
    billing_address: ShippingAddress;
    coupon?: string;
    cod_charges: number;
    payment_mode?: string;
    comment?: string;
    shipping_address?: ShippingAddress;
    affiliate_order_id?: string;
    loyalty_discount?: number;
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    order_id: string;
    success?: boolean;
    message?: string;
};
type AbandonedCart = {
    is_default: boolean;
    _id: string;
    promotion?: any;
    last_modified: string;
    gstin?: string;
    is_archive?: boolean;
    delivery_charges?: any;
    buy_now?: boolean;
    coupon?: any;
    payment_mode?: string;
    created_on: string;
    checkout_mode?: string;
    meta?: any;
    fc_index_map?: number[];
    user_id: string;
    app_id?: string;
    expire_at: string;
    bulk_coupon_discount?: number;
    payment_methods?: any[];
    is_active?: boolean;
    merge_qty?: boolean;
    fynd_credits?: any;
    articles: any[];
    order_id?: string;
    shipments?: any[];
    uid: number;
    pick_up_customer_details?: any;
    cod_charges?: any;
    comment?: string;
    cashback: any;
    payments?: any;
    cart_value?: number;
    discount?: number;
};
type AbandonedCartResponse = {
    result?: any;
    success?: boolean;
    items?: AbandonedCart[];
    message?: string;
    page?: Page;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    restrict_checkout?: boolean;
    buy_now?: boolean;
    delivery_charge_info?: string;
    coupon_text?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    message?: string;
    checkout_mode?: string;
    gstin?: string;
    is_valid?: boolean;
    last_modified?: string;
    comment?: string;
    currency?: CartCurrency;
    id?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
};
type AddProductCart = {
    article_assignment?: any;
    article_id?: string;
    quantity?: number;
    item_size?: string;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    pos?: boolean;
    seller_id?: number;
    store_id?: number;
    item_id?: number;
    display?: string;
    extra_meta?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    partial?: boolean;
    success?: boolean;
    cart?: CartDetailResponse;
    message?: string;
};
type UpdateProductCart = {
    quantity?: number;
    item_size?: string;
    parent_item_identifiers?: any;
    item_index?: number;
    item_id?: number;
    identifiers: CartProductIdentifer;
    article_id?: string;
    extra_meta?: any;
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
