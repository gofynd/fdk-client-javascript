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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, FilterInfoOption, FiltersInfo, Prices, ShipmentStatus, PaymentModeInfo, UserDataInfo, ShipmentItemFulFillingStore, PlatformItem, GSTDetailsData, BagUnit, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, ShipmentStatusData, PlatformDeliveryAddress, Identifier, FinancialBreakup, BagGST, BagConfigs, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBrandName, OrderBagArticle, OrderBags, UserDetailsData, OrderDetailsData, TrackingList, DPDetailsData, ShipmentPayments, BagStateMapper, BagStatusHistory, FulfillingStore, ShipmentInfoResponse, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, AffiliateMeta, AffiliateBagDetails, BagReturnableCancelableStatus, PDFLinks, ShipmentTimeStamp, LockData, BuyerDetails, EInvoice, EinvoiceInfo, DebugInfo, Formatted, ShipmentMeta, AffiliateDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, BagGSTDetails, B2BPODetails, BagMeta, ArticleDetails, Dates, Attributes, Item, Brand, Weight, Dimensions, ReturnConfig, Article, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, UserData, OrderPriority, MarketPlacePdf, AffiliateBag, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderInfo, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, BillingInfo, TaxInfo, ProcessingDates, Tax, Charge, LineItem, Shipment, PaymentMethod, PaymentInfo, ShippingInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionQuery, CollectionSchedule, UserInfo, CollectionImage, CollectionBanner, SeoDetail, CollectionBadge, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, TaxIdentifier, Trader, CustomOrder, NetQuantity, TeaserTag, ProductPublish, ProductCreateUpdate, Image, ProductPublished, Logo, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, ManufacturerResponse, DimensionResponse, Trader1, WeightResponse, QuantityBase, Quantities, CompanyMeta, BrandMeta, PriceMeta, ReturnConfig1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ManufacturerResponse1, DimensionResponse1, Trader2, WeightResponse1, ArticleStoreResponse, Quantity, QuantitiesArticle, CompanyMeta1, BrandMeta1, PriceArticle, ReturnConfig2, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, UserSerializer1, GetAddressSerializer, LocationIntegrationType, LocationTimingSerializer, LocationDayWiseSerializer, UserSerializer2, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, ProductReturnConfigSerializer, SellerPhoneNumber, LocationManagerSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, BusinessCountryInfo, Website, BusinessDetails, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Ownership, Validity, DisplayMetaDict, DisplayMeta, CouponDateMeta, Validation, RuleDefinition, PriceRange, PaymentAllowValue, PaymentModes, PostOrder, UsesRemaining, UsesRestriction, BulkBundleRestriction, Restrictions, State, CouponAction, CouponSchedule, CouponAuthor, Rule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionDateMeta, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, UsesRemaining1, UsesRestriction1, UserRegistered, Restrictions1, PromotionAction, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, DisplayMeta1, Ownership1, Visibility, PromotionSchedule, PromotionAuthor, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, CouponBreakup, DisplayBreakup, LoyaltyPoints, RawBreakup, CartBreakup, ProductPrice, ProductPriceInfo, PromoMeta, Ownership2, AppliedPromotion, CategoryInfo, BaseInfo, ActionQuery, ProductAction, ProductImage, CartProduct, ProductAvailability, CartProductIdentifer, BasePrice, ArticlePriceInfo, ProductArticle, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    value?: string;
    name?: string;
    text: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    value: string;
    type: string;
    text: string;
};
type Prices = {
    amount_paid?: number;
    refund_credit?: number;
    tax_collected_at_source?: number;
    amount_paid_roundoff?: number;
    delivery_charge?: number;
    fynd_credits?: number;
    value_of_good?: number;
    coupon_value?: number;
    price_marked?: number;
    cashback_applied?: number;
    price_effective?: number;
    refund_amount?: number;
    discount?: number;
    cashback?: number;
    promotion_effective_discount?: number;
    cod_charges?: number;
};
type ShipmentStatus = {
    actual_status: string;
    status: string;
    hex_code: string;
    title: string;
    ops_status: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type UserDataInfo = {
    first_name?: string;
    name?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    avis_user_id?: string;
    mobile?: string;
    uid?: number;
    last_name?: string;
    email?: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type PlatformItem = {
    name?: string;
    images?: string[];
    l3_category_name?: string;
    can_cancel?: boolean;
    size?: string;
    image?: string[];
    color?: string;
    l1_category?: string[];
    can_return?: boolean;
    code?: string;
    id?: number;
    department_id?: number;
    l3_category?: number;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    value_of_good: number;
    gst_fee: number;
    gstin_code: string;
    brand_calculated_amount: number;
};
type BagUnit = {
    status: any;
    can_cancel?: boolean;
    prices?: Prices;
    total_shipment_bags: number;
    item?: PlatformItem;
    item_quantity: number;
    shipment_id: string;
    gst?: GSTDetailsData;
    can_return?: boolean;
    bag_id: number;
    ordering_channel: string;
};
type ShipmentItem = {
    application?: any;
    shipment_created_at: number;
    sla?: any;
    total_bags_count: number;
    prices?: Prices;
    shipment_status?: ShipmentStatus;
    payment_mode_info?: PaymentModeInfo;
    payment_methods?: any;
    created_at: string;
    fulfilling_centre: string;
    total_shipments_in_order: number;
    channel?: any;
    user?: UserDataInfo;
    id: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    bags?: BagUnit[];
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    applied_filters?: any;
    page?: any;
    items?: ShipmentItem[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type ShipmentStatusData = {
    status?: string;
    bag_list?: number[];
    created_at?: string;
    shipment_id?: string;
    id?: number;
};
type PlatformDeliveryAddress = {
    area?: string;
    latitude?: number;
    address_category?: string;
    address1?: string;
    pincode?: string;
    phone?: string;
    city?: string;
    country?: string;
    longitude?: number;
    created_at?: string;
    state?: string;
    landmark?: string;
    version?: string;
    contact_person?: string;
    address_type?: string;
    updated_at?: string;
    email?: string;
    address2?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    amount_paid: number;
    added_to_fynd_cash: boolean;
    value_of_good: number;
    amount_paid_roundoff?: number;
    gst_tax_percentage: number;
    identifiers: Identifier;
    gst_tag: string;
    delivery_charge: number;
    fynd_credits: number;
    transfer_price: number;
    coupon_value: number;
    hsn_code: string;
    cashback_applied: number;
    item_name: string;
    discount: number;
    cashback: number;
    refund_credit: number;
    pm_price_split: any;
    gst_fee: string;
    price_effective: number;
    brand_calculated_amount: number;
    cod_charges: number;
    coupon_effective_discount: number;
    tax_collected_at_source?: number;
    total_units: number;
    price_marked: number;
    promotion_effective_discount: number;
    size: string;
};
type BagGST = {
    value_of_good?: number;
    gst_fee?: number;
    hsn_code?: string;
    gst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    gst_tag?: string;
    brand_calculated_amount?: number;
};
type BagConfigs = {
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    allow_force_return: boolean;
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
    discount_rules?: DiscountRules[];
    amount?: number;
    mrp_promotion?: boolean;
    article_quantity?: number;
    promotion_name?: string;
    promo_id?: string;
    buy_rules?: BuyRules[];
    promotion_type?: string;
};
type OrderBrandName = {
    brand_name: string;
    modified_on?: number;
    logo: string;
    company: string;
    id: number;
    created_on: number;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type OrderBags = {
    prices?: Prices;
    delivery_address?: PlatformDeliveryAddress;
    financial_breakup?: FinancialBreakup[];
    gst_details?: BagGST;
    bag_id: number;
    bag_configs?: BagConfigs;
    seller_identifier?: string;
    identifier?: string;
    display_name?: string;
    parent_promo_bags?: any;
    quantity?: number;
    can_cancel?: boolean;
    item?: PlatformItem;
    line_number?: number;
    current_status?: string;
    can_return?: boolean;
    applied_promos?: AppliedPromos[];
    brand?: OrderBrandName;
    entity_type?: string;
    article?: OrderBagArticle;
};
type UserDetailsData = {
    name: string;
    pincode: string;
    phone: string;
    city: string;
    country: string;
    address: string;
    state: string;
    email: string;
};
type OrderDetailsData = {
    order_date?: string;
    order_value?: string;
    source?: string;
    fynd_order_id: string;
    affiliate_id?: string;
    cod_charges?: string;
    tax_details?: any;
    ordering_channel_logo?: any;
    ordering_channel?: string;
};
type TrackingList = {
    status: string;
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
    text: string;
};
type DPDetailsData = {
    track_url?: string;
    name?: string;
    pincode?: string;
    awb_no?: string;
    country?: string;
    eway_bill_id?: string;
    gst_tag?: string;
    id?: string;
};
type ShipmentPayments = {
    mode: string;
    logo?: string;
    source?: string;
};
type BagStateMapper = {
    name: string;
    notify_customer?: boolean;
    state_type: string;
    bs_id: number;
    app_state_name?: string;
    app_facing?: boolean;
    display_name: string;
    is_active?: boolean;
    app_display_name?: string;
    journey_type: string;
};
type BagStatusHistory = {
    state_type?: string;
    status: string;
    created_at: string;
    bsh_id: number;
    bag_state_mapper: BagStateMapper;
    delivery_partner_id?: number;
    store_id: number;
    shipment_id: string;
    state_id: number;
    display_name?: boolean;
    forward?: boolean;
    delivery_awb_number?: string;
    app_display_name?: boolean;
    updated_at?: string;
    kafka_sync?: boolean;
    bag_id: number;
    reasons?: any[];
};
type FulfillingStore = {
    fulfillment_channel: string;
    pincode: string;
    store_name: string;
    phone: string;
    city: string;
    country: string;
    id: string;
    address: string;
    state: string;
    meta: any;
    contact_person: string;
    code: string;
};
type ShipmentInfoResponse = {
    total_items?: number;
    secured_delivery_flag?: string;
    status?: ShipmentStatusData;
    escalation?: any;
    prices?: Prices;
    shipment_status?: string;
    total_bags?: number;
    status_progress: number;
    ordering_store: any;
    beneficiary_details?: boolean;
    affiliate_shipment_id: string;
    invoice: any;
    current_shipment_status: any;
    child_nodes?: string[];
    refund_text?: string;
    due_date?: string;
    credit_note_id: string;
    pay_button?: string;
    journey_type?: string;
    gst_details?: GSTDetailsData;
    packaging_type?: string;
    user_agent?: string;
    is_pdsr?: string;
    bags?: OrderBags[];
    forward_tracking_list?: any[];
    platform_logo: boolean;
    is_not_fynd_source: boolean;
    delivery_details?: UserDetailsData;
    replacement_details?: string;
    lock_status: string;
    user_info?: any;
    custom_meta?: any[];
    can_break: string;
    shipment_quantity?: number;
    picked_date?: string;
    coupon?: any;
    shipment_images?: string[];
    order_status: any;
    delivery_slot?: any;
    email_id: string;
    enable_dp_tracking?: string;
    company: any;
    order_type: string;
    kirana_store_id?: string;
    vertical?: string;
    forward_order_status?: any[];
    go_green?: boolean;
    enable_tracking?: boolean;
    payment_mode?: string;
    operational_status?: string;
    is_invoiced: boolean;
    refund_details?: any;
    can_cancel?: boolean;
    is_fynd_store?: string;
    user_id: string;
    shipment_id: string;
    order?: OrderDetailsData;
    tracking_list?: TrackingList[];
    dp_details?: DPDetailsData;
    payments?: ShipmentPayments;
    can_return?: boolean;
    mid?: string;
    bag_status_history?: BagStatusHistory[];
    tracking_url: string;
    fulfilling_store?: FulfillingStore;
    delivery_status: any[];
    fyndstore_emp: any;
    billing_details?: UserDetailsData;
    priority_text?: string;
    order_created_time?: string;
    is_fynd_coupon: boolean;
    bank_data?: any;
    items: any[];
    forward_shipment_status?: any[];
    is_packaging_order: boolean;
};
type OrderDict = {
    prices?: Prices;
    order_date: string;
    shipment_count: number;
    fynd_order_id: string;
};
type PlatformShipment = {
    total_items?: number;
    status?: ShipmentStatusData;
    prices?: Prices;
    shipment_status?: string;
    total_bags?: number;
    journey_type?: string;
    gst_details?: GSTDetailsData;
    packaging_type?: string;
    user_agent?: string;
    bags?: OrderBags[];
    platform_logo?: string;
    delivery_details?: UserDetailsData;
    custom_meta?: any[];
    shipment_quantity?: number;
    picked_date?: string;
    coupon?: any;
    shipment_images?: string[];
    delivery_slot?: any;
    enable_dp_tracking?: string;
    vertical?: string;
    payment_mode?: string;
    operational_status?: string;
    shipment_id: string;
    order?: OrderDetailsData;
    tracking_list?: TrackingList[];
    dp_details?: DPDetailsData;
    payments?: ShipmentPayments;
    bag_status_history?: BagStatusHistory[];
    fulfilling_store?: FulfillingStore;
    billing_details?: UserDetailsData;
    priority_text?: string;
};
type ShipmentDetailsResponse = {
    success: boolean;
    order?: OrderDict;
    shipments?: PlatformShipment[];
    custom_meta?: any[];
};
type SubLane = {
    total_items?: number;
    text?: string;
    value?: string;
    index?: number;
    actions?: any[];
};
type SuperLane = {
    options?: SubLane[];
    value: string;
    text: string;
    total_items?: number;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformBreakupValues = {
    value?: string;
    name?: string;
    display?: string;
};
type PlatformOrderItems = {
    order_id?: string;
    order_value?: number;
    order_created_time?: string;
    payment_mode?: string;
    user_info?: UserDataInfo;
    channel?: PlatformChannel;
    meta?: any;
    total_order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    shipments?: PlatformShipment[];
};
type OrderListingResponse = {
    success?: boolean;
    total_count?: number;
    message?: string;
    items?: PlatformOrderItems[];
    lane?: string;
    page?: Page;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    options?: Options[];
    value: number;
    text: string;
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    reason?: string;
    account_name?: string;
    status?: string;
    updated_time?: string;
    raw_status?: string;
    awb?: string;
    last_location_recieved_at?: string;
    meta?: any;
    updated_at?: string;
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
    request_details?: any;
    report_name?: string;
    status?: string;
    report_type?: string;
    s3_key?: string;
    report_requested_at?: string;
    report_created_at?: string;
    display_name?: string;
    report_id?: string;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    jio_code?: string;
    article_id?: string;
    item_id?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    value?: string;
    type?: string;
    message?: string;
};
type JioCodeUpsertResponse = {
    success?: boolean;
    identifier?: string;
    error?: NestedErrorSchemaDataSet[];
    data?: any[];
    trace_id?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    do_invoice_label_generated: boolean;
    label?: any;
    store_name?: string;
    invoice_status?: string;
    store_code?: string;
    store_id?: string;
    invoice?: any;
    data?: any;
    batch_id: string;
    company_id?: string;
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
    file_path?: string;
    method?: string;
    size?: number;
    file_name?: string;
    upload?: FileUploadResponse;
    cdn?: URL;
    content_type?: string;
    operation?: string;
    tags?: string[];
};
type bulkListingData = {
    successful_shipments?: any[];
    status?: string;
    uploaded_on?: string;
    successful?: number;
    excel_url?: string;
    processing_shipments?: string[];
    file_name?: string;
    store_code?: string;
    store_id?: number;
    user_name?: string;
    failed_shipments?: any[];
    failed?: number;
    user_id?: string;
    total?: number;
    store_name?: string;
    batch_id?: string;
    id?: string;
    processing?: number;
    company_id?: number;
};
type BulkListingPage = {
    size?: number;
    has_previous?: boolean;
    has_next?: boolean;
    total?: number;
    type?: string;
    current?: number;
};
type BulkListingResponse = {
    success?: boolean;
    data?: bulkListingData[];
    page?: BulkListingPage;
    error?: string;
};
type ManifestPage = {
    type?: string;
    size?: string;
    has_previous?: boolean;
    total?: number;
    has_next?: boolean;
    current?: string;
};
type DateRange = {
    from_date?: string;
    to_date?: string;
};
type ManifestFilter = {
    sales_channel_name?: string;
    dp_name?: string;
    store_name?: string;
    dp_ids?: string;
    date_range?: DateRange;
    stores?: string;
    sales_channels?: string;
    lane?: string;
};
type GeneratedManifestItem = {
    status?: string;
    created_at?: string;
    is_active?: boolean;
    manifest_id?: string;
    filters?: ManifestFilter;
    created_by?: string;
    company_id?: number;
};
type GeneratedManifestResponse = {
    page?: ManifestPage;
    items?: GeneratedManifestItem[];
};
type ManifestDetailItem = {
    order_id?: string;
    awb?: string;
    shipment_id?: string;
    invoice_id?: string;
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
    created_at?: string;
    user_id?: number;
    is_active?: boolean;
    uid?: number;
    meta?: ManifestDetailMeta;
    manifest_id?: string;
    filters?: ManifestFilter;
    created_by?: string;
    id?: number;
    company_id?: number;
};
type ManifestDetailResponse = {
    additional_shipment_count?: number;
    page?: ManifestPage;
    items?: ManifestDetailItem[];
    manifest_details?: ManifestDetail[];
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
    total_shipments_count?: number;
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
    batch_id?: string;
    successful_shipments_count?: number;
    company_id?: string;
    failed_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    success?: string;
    message?: string;
    status?: boolean;
    uploaded_on?: string;
    uploaded_by?: string;
    user_id?: string;
    error?: string[];
    data?: BulkActionDetailsDataField[];
    failed_records?: string[];
};
type AffiliateMeta = {
    channel_shipment_id?: string;
    size_level_total_qty?: number;
    quantity?: number;
    loyalty_discount?: number;
    due_date?: string;
    box_type?: string;
    is_priority?: boolean;
    coupon_code?: string;
    order_item_id?: string;
    channel_order_id?: string;
    employee_discount?: number;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
    employee_discount?: number;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
};
type PDFLinks = {
    b2b?: string;
    label_type: string;
    invoice_pos?: string;
    label?: string;
    invoice_a6?: string;
    invoice_type: string;
    label_a4?: string;
    credit_note_url?: string;
    label_a6?: string;
    invoice_a4?: string;
    invoice?: string;
    label_pos?: string;
    po_invoice?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type LockData = {
    locked?: boolean;
    lock_message?: string;
    mto?: boolean;
};
type BuyerDetails = {
    name: string;
    pincode: number;
    city: string;
    ajio_site_id?: string;
    address: string;
    state: string;
    gstin: string;
};
type EInvoice = {
    error_message?: string;
    irn?: string;
    error_code?: string;
    acknowledge_no?: number;
    acknowledge_date?: string;
    signed_invoice?: string;
    signed_qr_code?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type ShipmentMeta = {
    weight: number;
    b2c_buyer_details?: any;
    po_number?: string;
    timestamp?: ShipmentTimeStamp;
    assign_dp_from_sb?: boolean;
    due_date?: string;
    packaging_name?: string;
    lock_data?: LockData;
    shipment_volumetric_weight?: number;
    external?: any;
    return_store_node?: number;
    auto_trigger_dp_assignment_acf: boolean;
    dp_name?: string;
    return_awb_number?: string;
    order_type?: string;
    forward_affiliate_order_id?: string;
    box_type?: string;
    return_affiliate_order_id?: string;
    marketplace_store_id?: string;
    fulfilment_priority_text?: string;
    return_affiliate_shipment_id?: string;
    dp_sort_key?: string;
    same_store_available: boolean;
    b2b_buyer_details?: BuyerDetails;
    ewaybill_info?: any;
    awb_number?: string;
    return_details?: any;
    forward_affiliate_shipment_id?: string;
    einvoice_info?: EinvoiceInfo;
    shipment_weight?: number;
    dp_options?: any;
    dp_id?: string;
    bag_weight?: any;
    debug_info?: DebugInfo;
    formatted?: Formatted;
    store_invoice_updated_date?: string;
};
type AffiliateDetails = {
    affiliate_store_id: string;
    affiliate_id?: string;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_shipment_id: string;
    pdf_links?: PDFLinks;
    shipment_meta: ShipmentMeta;
    affiliate_bag_id: string;
    company_affiliate_tag?: string;
    ad_id?: string;
};
type StoreEinvoice = {
    user?: string;
    password?: string;
    enabled: boolean;
    username?: string;
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
    legal_name: string;
    value: string;
    url?: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    user?: string;
    password?: string;
    username?: string;
};
type StoreMeta = {
    gst_number?: string;
    timing?: any[];
    notification_emails?: string[];
    gst_credentials: StoreGstCredentials;
    display_name: string;
    documents?: StoreDocuments;
    ewaybill_portal_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    product_return_config?: any;
    additional_contact_details?: any;
    stage: string;
};
type StoreAddress = {
    address1: string;
    pincode: number;
    phone: string;
    country: string;
    version?: string;
    latitude: number;
    country_code: string;
    area?: string;
    city: string;
    longitude: number;
    landmark?: string;
    contact_person: string;
    address_category: string;
    created_at: string;
    state: string;
    address_type: string;
    updated_at: string;
    email?: string;
    address2?: string;
};
type Store = {
    address1: string;
    pincode: string;
    phone: number;
    country: string;
    packaging_material_count?: number;
    is_enabled_for_recon?: boolean;
    mall_name?: string;
    store_active_from?: string;
    is_archived?: boolean;
    store_email: string;
    fulfillment_channel: string;
    latitude: number;
    name: string;
    vat_no?: string;
    is_active?: boolean;
    brand_id?: any;
    meta: StoreMeta;
    alohomora_user_id?: number;
    location_type: string;
    city: string;
    longitude: number;
    parent_store_id?: number;
    contact_person: string;
    code?: string;
    brand_store_tags?: string[];
    created_at: string;
    s_id: string;
    mall_area?: string;
    order_integration_id?: string;
    state: string;
    store_address_json?: StoreAddress;
    updated_at?: string;
    login_username: string;
    company_id: number;
    address2?: string;
};
type BagGSTDetails = {
    igst_tax_percentage: number;
    tax_collected_at_source: number;
    cgst_tax_percentage: number;
    value_of_good: number;
    gst_fee: number;
    hsn_code: string;
    igst_gst_fee: string;
    gst_tax_percentage: number;
    is_default_hsn_code?: boolean;
    sgst_gst_fee: string;
    gstin_code?: string;
    gst_tag: string;
    sgst_tax_percentage: number;
    hsn_code_id: string;
    brand_calculated_amount: number;
    cgst_gst_fee: string;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    po_line_amount?: number;
    po_tax_amount?: number;
    item_base_price?: number;
    docker_number?: string;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type ArticleDetails = {
    status?: any;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type Attributes = {
    name?: string;
    gender?: string[];
    primary_material?: string;
    primary_color?: string;
    brand_name?: string;
    marketer_address?: string;
    essential?: string;
    marketer_name?: string;
    primary_color_hex?: string;
};
type Item = {
    item_id: number;
    branch_url?: string;
    image: string[];
    color?: string;
    l3_category?: number;
    attributes: Attributes;
    name: string;
    l3_category_name?: string;
    department_id?: number;
    last_updated_at?: string;
    brand_id: number;
    meta?: any;
    l2_category?: string[];
    gender?: string;
    can_cancel?: boolean;
    webstore_product_url?: string;
    can_return?: boolean;
    brand: string;
    code?: string;
    size: string;
    slug_key: string;
    l1_category?: string[];
    l1_category_id?: number;
    l2_category_id?: number;
};
type Brand = {
    is_virtual_invoice?: boolean;
    script_last_ran?: string;
    credit_note_allowed?: boolean;
    brand_name: string;
    brand_id: number;
    credit_note_expiry_days?: number;
    modified_on?: number;
    start_date?: string;
    logo?: string;
    company: string;
    invoice_prefix?: string;
    created_on?: number;
    pickup_location?: string;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type Dimensions = {
    width?: number;
    unit?: string;
    is_default?: boolean;
    height?: number;
    length?: number;
};
type ReturnConfig = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Article = {
    child_details?: any;
    weight?: Weight;
    dimensions?: Dimensions;
    size: string;
    is_set?: boolean;
    seller_identifier: string;
    return_config?: ReturnConfig;
    esp_modified?: any;
    _id: string;
    identifiers: Identifier;
    uid: string;
    raw_meta?: any;
    code?: string;
    a_set?: any;
};
type BagDetailsPlatformResponse = {
    affiliate_bag_details: AffiliateBagDetails;
    status: BagReturnableCancelableStatus;
    affiliate_details?: AffiliateDetails;
    qc_required?: any;
    prices: Prices;
    b_id: number;
    ordering_store?: Store;
    financial_breakup: FinancialBreakup[];
    journey_type: string;
    gst_details: BagGSTDetails;
    restore_promos?: any;
    current_operational_status: BagStatusHistory;
    bag_update_time?: number;
    seller_identifier?: string;
    identifier?: string;
    no_of_bags_order?: number;
    display_name?: string;
    meta?: BagMeta;
    tags?: string[];
    b_type?: string;
    operational_status?: string;
    article_details?: ArticleDetails;
    dates?: Dates;
    parent_promo_bags?: any;
    quantity?: number;
    item: Item;
    shipment_id?: string;
    line_number?: number;
    applied_promos?: any[];
    current_status: BagStatusHistory;
    brand: Brand;
    bag_status_history?: BagStatusHistory;
    reasons?: any[];
    original_bag_list?: number[];
    bag_status: BagStatusHistory[];
    order_integration_id?: string;
    entity_type?: string;
    article: Article;
    restore_coupon?: boolean;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    page_type: string;
    item_total: number;
    size: number;
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
    status?: number;
    error?: string;
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
    set_id?: string;
    mongo_article_id?: string;
    store_id: number;
    bag_id?: number;
    affiliate_order_id?: string;
    reason_ids?: number[];
    affiliate_bag_id?: string;
    affiliate_id?: string;
    fynd_order_id?: string;
    item_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    id?: string;
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    reason_text: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    action_type: string;
    entities: Entities[];
    action: string;
};
type Bags = {
    affiliate_bag_id?: string;
    bag_id?: number;
    affiliate_order_id?: string;
    is_locked?: boolean;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    lock_status?: boolean;
    shipment_id?: string;
    bags?: Bags[];
    original_filter?: OriginalFilter;
    affiliate_shipment_id?: string;
    is_bag_locked?: boolean;
    status?: string;
    affiliate_id?: string;
    is_shipment_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    check_response?: CheckResponse[];
    message?: string;
};
type AnnouncementResponse = {
    company_id?: number;
    platform_name?: string;
    from_datetime?: string;
    id: number;
    description?: string;
    logo_url?: string;
    platform_id?: string;
    to_datetime?: string;
    created_at?: string;
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
    status: boolean;
    call_id: string;
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
    quantity?: number;
    line_number?: number;
    identifier?: string;
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
    quantity?: number;
    line_number?: number;
    identifier?: string;
};
type ShipmentsRequest = {
    reasons?: ReasonsData;
    data_updates?: DataUpdates;
    identifier: string;
    products?: Products[];
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    status?: string;
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    statuses?: StatuesRequest[];
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    task?: boolean;
};
type ShipmentsResponse = {
    stack_trace?: string;
    exception?: string;
    code?: string;
    status?: number;
    identifier?: string;
    message?: string;
    meta?: any;
    final_state?: any;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    city: string;
    phone: number;
    first_name: string;
    country: string;
    address1?: string;
    address2?: string;
    mobile: number;
    state: string;
    last_name: string;
    pincode: string;
    email: string;
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
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    company_id: number;
    _id: string;
    discount: number;
    price_effective: number;
    transfer_price: number;
    affiliate_meta: any;
    pdf_links?: MarketPlacePdf;
    identifier: any;
    delivery_charge: number;
    seller_identifier: string;
    hsn_code_id: string;
    modified_on: string;
    item_size: string;
    item_id: number;
    price_marked: number;
    avl_qty: number;
    fynd_store_id: string;
    unit_price: number;
    amount_paid: number;
    store_id: number;
    quantity: number;
    affiliate_store_id: string;
    sku: string;
};
type ArticleDetails1 = {
    category: any;
    _id: string;
    dimension: any;
    attributes: any;
    brand_id: number;
    quantity: number;
    weight: any;
};
type ShipmentDetails = {
    fulfillment_id: number;
    articles: ArticleDetails1[];
    box_type?: string;
    affiliate_shipment_id: string;
    shipments: number;
    meta?: any;
    dp_id?: number;
};
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentConfig = {
    journey: string;
    action: string;
    shipment: ShipmentDetails[];
    identifier: string;
    source: string;
    payment_mode: string;
    location_details?: LocationDetails;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    billing_address: OrderUser;
    user: UserData;
    order_priority?: OrderPriority;
    shipping_address: OrderUser;
    bags: AffiliateBag[];
    cod_charges: number;
    shipment?: ShipmentData;
    affiliate_order_id?: string;
    items: any;
    discount: number;
    delivery_charges: number;
    order_value: number;
    payment?: any;
    coupon?: string;
    payment_mode: string;
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
    owner: string;
    name: string;
    id: string;
    updated_at: string;
    description?: string;
    meta?: AffiliateAppConfigMeta[];
    created_at: string;
    token: string;
    secret: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    payment?: AffiliateInventoryPaymentConfig;
    order?: AffiliateInventoryOrderConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    token: string;
    config?: AffiliateConfig;
    id: string;
};
type OrderConfig = {
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    affiliate: Affiliate;
    article_lookup?: string;
    store_lookup?: string;
    bag_end_state?: string;
    create_user?: boolean;
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
    type: string;
    user: string;
    l1_detail?: string;
    l2_detail?: string;
    bag_id?: number;
    createdat: string;
    ticket_url?: string;
    message: string;
    ticket_id?: string;
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
    order_id: string;
    amount_paid: number;
    shipment_id: number;
    brand_name: string;
    country_code: string;
    message: string;
    payment_mode: string;
    customer_name: string;
};
type SendSmsPayload = {
    slug: string;
    bag_id: number;
    data?: SmsDataPayload;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    remarks?: string;
    shipment_id?: string;
    id: number;
    bag_list?: number[];
    status?: string;
    meta: Meta;
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
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    shipment_ids?: string[];
    dp_id: number;
    qc_required: string;
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type BillingInfo = {
    gender?: string;
    city: string;
    first_name: string;
    state: string;
    floor_no?: string;
    primary_email: string;
    country_code?: string;
    external_customer_code?: string;
    middle_name?: string;
    last_name?: string;
    pincode: string;
    primary_mobile_number: string;
    country: string;
    house_no?: string;
    alternate_mobile_number?: string;
    state_code?: string;
    customer_code?: string;
    alternate_email?: string;
    address1: string;
    address2?: string;
    title?: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ProcessingDates = {
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
    customer_pickup_slot?: any;
    confirm_by_date?: string;
    pack_by_date?: string;
};
type Tax = {
    name: string;
    amount: any;
    rate: number;
    breakup?: any[];
};
type Charge = {
    type: string;
    name: string;
    amount: any;
    code?: string;
    tax?: Tax;
};
type LineItem = {
    external_line_id?: string;
    quantity?: number;
    meta?: any;
    charges?: Charge[];
    custom_messasge?: string;
    seller_identifier: string;
};
type Shipment = {
    processing_dates?: ProcessingDates;
    external_shipment_id?: string;
    priority?: number;
    line_items: LineItem[];
    meta?: any;
    location_id: number;
};
type PaymentMethod = {
    name: string;
    amount: number;
    transaction_data?: any;
    collect_by: string;
    meta?: any;
    refund_by: string;
    mode: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type ShippingInfo = {
    gender?: string;
    city: string;
    first_name: string;
    state: string;
    floor_no?: string;
    geo_location?: any;
    primary_email: string;
    country_code?: string;
    external_customer_code?: string;
    middle_name?: string;
    last_name?: string;
    pincode: string;
    primary_mobile_number: string;
    address_type?: string;
    country: string;
    shipping_type?: string;
    house_no?: string;
    alternate_mobile_number?: string;
    slot?: any[];
    state_code?: string;
    customer_code?: string;
    landmark?: string;
    alternate_email?: string;
    address1: string;
    address2?: string;
    title?: string;
};
type CreateOrderAPI = {
    external_creation_date?: string;
    billing_info: BillingInfo;
    tax_info?: TaxInfo;
    external_order_id?: string;
    shipments: Shipment[];
    meta?: any;
    charges?: Charge[];
    payment_info: PaymentInfo;
    shipping_info: ShippingInfo;
    currency_info?: any;
};
type CreateOrderErrorReponse = {
    stack_trace?: string;
    exception?: string;
    code?: string;
    info?: any;
    request_id?: string;
    status: number;
    message: string;
    meta?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    refund_by?: string;
    mode?: string;
    collect_by?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    shipment_assignment?: string;
    dp_configuration?: DpConfiguration;
    logo_url?: any;
    lock_states?: string[];
    payment_info?: CreateChannelPaymentInfo;
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
    mobile: number;
    start_date: string;
    order_details?: FyndOrderIdList[];
    end_date: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    words?: string[];
    is_active?: boolean;
    result: SearchKeywordResult;
    app_id?: string;
};
type GetSearchWordsData = {
    uid?: string;
    _custom_json?: any;
    words?: string[];
    is_active?: boolean;
    result?: any;
    app_id?: string;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
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
    aspect_ratio?: string;
    url?: string;
    type?: string;
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
    is_active?: boolean;
    results?: AutocompleteResult[];
    app_id?: string;
};
type GetAutocompleteWordsData = {
    uid?: string;
    _custom_json?: any;
    words?: string[];
    results?: any[];
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    _custom_json?: any;
    words?: string[];
    results?: any[];
};
type ProductBundleItem = {
    min_quantity: number;
    max_quantity: number;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    product_uid: number;
    auto_select?: boolean;
};
type ProductBundleRequest = {
    page_visibility?: string[];
    logo?: string;
    modified_on?: string;
    created_on?: string;
    same_store_assignment?: boolean;
    created_by?: any;
    company_id?: number;
    is_active: boolean;
    meta?: any;
    slug: string;
    choice: string;
    modified_by?: any;
    name: string;
    products: ProductBundleItem[];
};
type GetProductBundleCreateResponse = {
    page_visibility?: string[];
    logo?: string;
    modified_on?: string;
    created_on?: string;
    same_store_assignment?: boolean;
    created_by?: any;
    company_id?: number;
    is_active: boolean;
    meta?: any;
    slug: string;
    choice: string;
    modified_by?: any;
    id?: string;
    name: string;
    products: ProductBundleItem[];
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    page_visibility?: string[];
    logo?: string;
    modified_on?: string;
    same_store_assignment?: boolean;
    company_id?: number;
    is_active: boolean;
    meta?: any;
    slug: string;
    choice: string;
    modified_by?: any;
    name: string;
    products: ProductBundleItem[];
};
type Size = {
    quantity?: number;
    is_available?: boolean;
    display?: string;
    value?: string;
};
type Price = {
    currency?: string;
    max_marked?: number;
    min_marked?: number;
    min_effective?: number;
    max_effective?: number;
};
type LimitedProductData = {
    item_code?: string;
    identifier?: any;
    sizes?: string[];
    price?: any;
    uid?: number;
    country_of_origin?: string;
    short_description?: string;
    quantity?: number;
    slug?: string;
    name?: string;
    images?: string[];
    attributes?: any;
};
type GetProducts = {
    min_quantity?: number;
    sizes?: Size[];
    price?: Price;
    max_quantity?: number;
    product_details?: LimitedProductData;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    product_uid?: number;
    auto_select?: boolean;
};
type GetProductBundleResponse = {
    page_visibility?: string[];
    logo?: string;
    same_store_assignment?: boolean;
    company_id?: number;
    is_active?: boolean;
    meta?: any;
    slug?: string;
    choice?: string;
    name?: string;
    products?: GetProducts[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    modified_on?: string;
    description?: string;
    brand_id?: number;
    created_by?: any;
    company_id?: number;
    subtitle?: string;
    guide?: Guide;
    active?: boolean;
    tag?: string;
    id?: string;
    modified_by?: any;
    title: string;
    image?: string;
    name: string;
    created_on?: string;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    modified_on?: string;
    brand_id?: number;
    title?: string;
    created_by?: any;
    company_id?: number;
    subtitle?: string;
    guide?: any;
    active?: boolean;
    id?: string;
    modified_by?: any;
    tag?: string;
    created_on?: string;
    name?: string;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    alt_text?: any;
    is_gift?: boolean;
    moq?: MOQData;
    is_cod?: boolean;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    _custom_json?: any;
    alt_text?: any;
    is_gift?: boolean;
    _custom_meta?: MetaFields[];
    moq?: ApplicationItemMOQ;
    is_cod?: boolean;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type GetConfigMetadataResponse = {
    data: any[];
    condition?: any[];
    values?: any[];
};
type AttributeDetailsGroup = {
    logo?: string;
    key?: string;
    is_active: boolean;
    priority: number;
    slug?: string;
    name: string;
    display_type: string;
    unit?: string;
};
type AppConfigurationDetail = {
    logo?: string;
    template_slugs?: string[];
    is_active: boolean;
    priority: number;
    slug: string;
    is_default: boolean;
    app_id: string;
    name?: string;
    attributes?: AttributeDetailsGroup[];
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    next: number;
    has_next: boolean;
    current: number;
    total_count: number;
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
    key: string;
    is_active: boolean;
    default_key: string;
    priority: number;
    is_default: boolean;
    app_id: string;
    name?: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    compare?: any;
    detail?: any;
    variant?: any;
    similar?: any;
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    units?: any[];
    key?: string;
    filter_types?: string[];
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingResponse = {
    filter: MetaDataListingFilterResponse;
    sort: MetaDataListingSortResponse;
};
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    logo?: string;
    key: string;
    size: ProductSize;
    is_active: boolean;
    priority: number;
    name: string;
    display_type: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    logo?: string;
    key: string;
    size?: ProductSize;
    is_active: boolean;
    subtitle?: string;
    priority: number;
    title?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type ConfigurationBucketPoints = {
    display?: string;
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    map?: any;
    map_values?: any[];
    condition?: string;
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    logo?: string;
    key: string;
    value_config?: ConfigurationListingFilterValue;
    is_active: boolean;
    display_name?: string;
    priority: number;
    type: string;
    name?: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    logo?: string;
    key: string;
    is_active: boolean;
    priority: number;
    name?: string;
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
    config_id?: string;
    modified_on?: string;
    product?: ConfigurationProduct;
    created_by?: any;
    modified_by?: any;
    type?: string;
    config_type: string;
    app_id: string;
    created_on?: string;
    listing?: ConfigurationListing;
};
type AppCatalogConfiguration = {
    config_id?: string;
    modified_on?: string;
    product?: ConfigurationProduct;
    created_by?: any;
    id?: string;
    modified_by?: any;
    type?: string;
    config_type: string;
    app_id: string;
    created_on?: string;
    listing?: ConfigurationListing;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    id?: string;
    config_type: string;
    app_id: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersKey = {
    logo?: string;
    operators?: string[];
    display: string;
    name: string;
    kind?: string;
};
type ProductFiltersValue = {
    query_format?: string;
    max?: number;
    currency_code?: string;
    count?: number;
    is_selected: boolean;
    value: any;
    display: string;
    min?: number;
    currency_symbol?: string;
    selected_min?: number;
    selected_max?: number;
    display_format?: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type ProductSortOn = {
    name?: string;
    is_selected?: boolean;
    value?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
};
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type CollectionSchedule = {
    start?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
    cron?: string;
    end?: string;
};
type UserInfo = {
    user_id?: string;
    username?: string;
    email?: string;
    uid?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CreateCollection = {
    query?: CollectionQuery[];
    _schedule?: CollectionSchedule;
    tags?: string[];
    modified_by?: UserInfo;
    name: string;
    banners: CollectionBanner;
    allow_facets?: boolean;
    logo: CollectionImage;
    sort_on?: string;
    seo?: SeoDetail;
    description?: string;
    created_by?: UserInfo;
    visible_facets_keys?: string[];
    type: string;
    allow_sort?: boolean;
    app_id: string;
    badge?: CollectionBadge;
    _locale_language?: any;
    priority?: number;
    _custom_json?: any;
    is_active?: boolean;
    meta?: any;
    published?: boolean;
    slug: string;
    is_visible?: boolean;
};
type BannerImage = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionCreateResponse = {
    query?: CollectionQuery[];
    _schedule?: any;
    name?: string;
    cron?: any;
    banners?: ImageUrls;
    allow_facets?: boolean;
    logo?: BannerImage;
    sort_on?: string;
    description?: string;
    visible_facets_keys?: string[];
    type?: string;
    allow_sort?: boolean;
    app_id?: string;
    badge?: any;
    priority?: number;
    tag?: string[];
    is_active?: boolean;
    meta?: any;
    slug?: string;
};
type CollectionListingFilterType = {
    name?: string;
    display?: string;
    is_selected?: boolean;
};
type CollectionListingFilterTag = {
    name?: string;
    display?: string;
    is_selected?: boolean;
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
    query?: CollectionQuery[];
    _schedule?: any;
    name?: string;
    cron?: any;
    banners?: ImageUrls;
    allow_facets?: boolean;
    logo?: Media1;
    description?: string;
    uid?: string;
    visible_facets_keys?: string[];
    type?: string;
    allow_sort?: boolean;
    app_id?: string;
    badge?: any;
    priority?: number;
    tag?: string[];
    is_active?: boolean;
    meta?: any;
    slug?: string;
    action?: Action;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionDetailResponse = {
    query?: CollectionQuery[];
    logo?: Media1;
    _schedule?: any;
    badge?: any;
    description?: string;
    is_active?: boolean;
    visible_facets_keys?: string[];
    meta?: any;
    priority?: number;
    slug?: string;
    cron?: any;
    type?: string;
    tag?: string[];
    app_id?: string;
    allow_sort?: boolean;
    name?: string;
    banners?: ImageUrls;
    allow_facets?: boolean;
};
type UpdateCollection = {
    _schedule?: CollectionSchedule;
    query?: CollectionQuery[];
    tags?: string[];
    modified_by?: UserInfo;
    name?: string;
    banners?: CollectionBanner;
    allow_facets?: boolean;
    logo?: CollectionImage;
    sort_on?: string;
    seo?: SeoDetail;
    description?: string;
    visible_facets_keys?: string[];
    allow_sort?: boolean;
    type?: string;
    badge?: CollectionBadge;
    _locale_language?: any;
    priority?: number;
    _custom_json?: any;
    is_active?: boolean;
    meta?: any;
    published?: boolean;
    slug?: string;
    is_visible?: boolean;
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
type ProductDetailAttribute = {
    key?: string;
    type?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductBrand = {
    action?: Action;
    name?: string;
    logo?: Media1;
    uid?: number;
};
type Price1 = {
    currency_symbol?: string;
    max?: number;
    min?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    item_code?: string;
    name?: string;
    uid?: number;
    color?: string;
    description?: string;
    short_description?: string;
    highlights?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    type?: string;
    promo_meta?: any;
    image_nature?: string;
    attributes?: any;
    product_online_date?: string;
    medias?: Media1[];
    rating_count?: number;
    teaser_tag?: any;
    tryouts?: string[];
    brand?: ProductBrand;
    price?: ProductListingPrice;
    item_type?: string;
    has_variant?: boolean;
    slug: string;
    similars?: string[];
    sellable?: boolean;
    rating?: number;
    discount?: string;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page?: Page;
    sort_on?: ProductSortOn[];
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    count?: number;
    sellable_count?: number;
};
type CatalogInsightBrand = {
    available_articles?: number;
    available_sizes?: number;
    total_sizes?: number;
    total_articles?: number;
    name?: string;
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
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    enabled?: boolean;
    company_id?: number;
    brand_ids?: number[];
    platform?: string;
    opt_level: string;
    store_ids?: number[];
};
type CompanyOptIn = {
    modified_on: number;
    created_by?: any;
    company_id: number;
    enabled: boolean;
    brand_ids: number[];
    platform: string;
    modified_by?: any;
    opt_level: string;
    created_on: number;
    store_ids: number[];
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    business_type?: string;
    name?: string;
    uid?: number;
    company_type?: string;
};
type CompanyBrandDetail = {
    brand_name?: string;
    total_article?: number;
    company_id?: number;
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
    address?: any;
    modified_on?: string;
    documents?: any[];
    uid?: number;
    manager?: any;
    company_id?: number;
    timing?: any;
    display_name?: string;
    store_type?: string;
    additional_contacts?: any[];
    store_code?: string;
    name?: string;
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
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    allowed_values?: string[];
    format?: string;
    mandatory?: boolean;
    range?: AttributeSchemaRange;
    type: string;
    multi?: boolean;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    priority?: number;
    depends_on?: string[];
    indexing: boolean;
};
type GenderDetail = {
    logo?: string;
    description?: string;
    enabled_for_end_consumer?: boolean;
    is_nested?: boolean;
    meta?: AttributeMasterMeta;
    schema?: AttributeMaster;
    slug?: string;
    departments?: string[];
    id?: string;
    details?: AttributeMasterDetails;
    filters?: AttributeMasterFilter;
    name?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    errors?: any;
    message?: string;
    status?: number;
    meta?: any;
    code?: string;
};
type DepartmentCreateUpdate = {
    logo: string;
    uid?: number;
    _cls?: string;
    synonyms?: string[];
    _custom_json?: any;
    is_active?: boolean;
    priority_order: number;
    tags?: string[];
    slug?: string;
    name: string;
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
    uid?: string;
    username?: string;
    _id?: string;
    user_id?: string;
    contact?: string;
};
type GetDepartment = {
    logo?: string;
    search?: string;
    page_size?: number;
    uid?: number;
    modified_on?: string;
    item_type?: string;
    synonyms?: string[];
    created_by?: UserSerializer;
    is_active?: boolean;
    priority_order?: number;
    slug?: string;
    modified_by?: UserSerializer;
    page_no?: number;
    name?: string;
    created_on?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    errors?: any;
    message?: string;
    status?: number;
    meta?: any;
    code?: string;
};
type UserDetail = {
    contact?: string;
    user_id: string;
    username: string;
    super_user?: boolean;
};
type DepartmentModel = {
    modified_on: string;
    logo: string;
    uid?: number;
    _cls?: any;
    verified_on?: string;
    _id?: any;
    created_by?: UserDetail;
    synonyms?: any[];
    is_active?: boolean;
    priority_order: number;
    _custom_json?: any;
    verified_by?: UserDetail;
    slug?: any;
    modified_by?: UserDetail;
    created_on: string;
    name: any;
};
type ProductTemplate = {
    logo?: string;
    modified_on?: string;
    is_physical: boolean;
    description?: string;
    is_expirable: boolean;
    categories?: string[];
    created_by?: any;
    is_active?: boolean;
    is_archived?: boolean;
    slug: string;
    departments?: string[];
    modified_by?: any;
    tag?: string;
    name?: string;
    created_on?: string;
    attributes?: string[];
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    logo?: string;
    is_physical: boolean;
    description?: string;
    is_expirable: boolean;
    categories?: string[];
    is_active?: boolean;
    is_archived?: boolean;
    slug: string;
    departments?: string[];
    id?: string;
    tag?: string;
    name?: string;
    attributes?: string[];
};
type Properties = {
    item_code?: any;
    sizes?: any;
    tags?: any;
    no_of_boxes?: any;
    name?: any;
    size_guide?: any;
    media?: any;
    description?: any;
    short_description?: any;
    highlights?: any;
    trader?: any;
    category_slug?: any;
    custom_order?: any;
    is_dependent?: any;
    brand_uid?: any;
    currency?: any;
    multi_size?: any;
    teaser_tag?: any;
    variants?: any;
    product_publish?: any;
    country_of_origin?: any;
    item_type?: any;
    command?: any;
    product_group_tag?: any;
    is_active?: any;
    slug?: any;
    return_config?: any;
    trader_type?: any;
    hsn_code?: any;
};
type GlobalValidation = {
    required?: string[];
    description?: string;
    properties?: Properties;
    definitions?: any;
    type?: string;
    title?: string;
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
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadItemsData = {
    brand?: string[];
    templates?: string[];
    type?: string;
};
type ProductDownloadsItems = {
    trigger_on?: string;
    seller_id?: number;
    status?: string;
    url?: string;
    created_by?: VerifiedBy;
    completed_on?: string;
    data?: ProductDownloadItemsData;
    task_id?: string;
    id?: string;
    template_tags?: any;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
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
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Hierarchy = {
    department: number;
    l2: number;
    l1: number;
};
type CategoryRequestBody = {
    media?: Media2;
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    is_active: boolean;
    level: number;
    priority?: number;
    hierarchy?: Hierarchy[];
    departments: number[];
    slug?: string;
    name: string;
    tryouts?: string[];
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    media?: Media2;
    modified_on?: string;
    uid?: number;
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    created_by?: any;
    is_active: boolean;
    level: number;
    priority?: number;
    hierarchy?: Hierarchy[];
    departments: number[];
    slug?: string;
    modified_by?: any;
    id?: string;
    name: string;
    created_on?: string;
    tryouts?: string[];
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
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
    name: any;
    address?: string[];
    type?: string;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductCreateUpdate = {
    item_code: any;
    tags?: string[];
    no_of_boxes?: number;
    tax_identifier: TaxIdentifier;
    variant_media?: any;
    name: any;
    is_image_less_product?: boolean;
    change_request_id?: any;
    size_guide?: string;
    is_set?: boolean;
    variant_group?: any;
    media?: Media1[];
    description?: string;
    uid?: number;
    requester?: string;
    short_description?: string;
    highlights?: string[];
    trader: Trader[];
    category_slug: string;
    custom_order?: CustomOrder;
    is_dependent?: boolean;
    brand_uid: number;
    currency: string;
    bulk_job_id?: string;
    company_id: number;
    departments: number[];
    net_quantity?: NetQuantity;
    multi_size?: boolean;
    teaser_tag?: TeaserTag;
    variants?: any;
    product_publish?: ProductPublish;
    country_of_origin: string;
    item_type: string;
    _custom_json?: any;
    product_group_tag?: string[];
    is_active?: boolean;
    slug: string;
    return_config: ReturnConfig;
    action?: string;
    template_tag: string;
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
    item_code?: string;
    sizes?: any[];
    is_physical?: boolean;
    id?: string;
    tax_identifier?: any;
    name?: string;
    size_guide?: string;
    images?: Image[];
    is_set?: boolean;
    l3_mapping?: string[];
    media?: Media1[];
    variant_group?: any;
    description?: string;
    uid?: number;
    color?: string;
    short_description?: string;
    highlights?: string[];
    category_slug?: string;
    custom_order?: any;
    image_nature?: string;
    is_dependent?: boolean;
    all_sizes?: any[];
    brand_uid?: number;
    is_expirable?: boolean;
    currency?: string;
    departments?: number[];
    multi_size?: boolean;
    primary_color?: string;
    variants?: any;
    product_publish?: ProductPublished;
    brand?: Brand;
    country_of_origin?: string;
    item_type?: string;
    _custom_json?: any;
    is_active?: boolean;
    slug?: string;
    hsn_code?: string;
    category_uid?: number;
    template_tag?: string;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductVariants = {
    item_code?: string;
    media?: Media1[];
    brand_uid?: number;
    uid?: number;
    name?: string;
    category_uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    tags?: string[];
    modified_by?: any;
    filters: AttributeMasterFilter;
    name?: string;
    logo?: string;
    description?: string;
    created_by?: any;
    created_on?: string;
    unit?: string;
    is_nested?: boolean;
    enabled_for_end_consumer?: boolean;
    variant?: boolean;
    schema: AttributeMaster;
    departments: string[];
    raw_key?: string;
    modified_on?: string;
    synonyms?: any;
    suggestion?: string;
    slug: string;
    details: AttributeMasterDetails;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    user_id?: string;
    username?: string;
    email?: string;
    uid?: string;
};
type BulkJob = {
    modified_on?: string;
    failed?: number;
    custom_template_tag?: string;
    file_path?: string;
    tracking_url?: string;
    cancelled?: number;
    created_by?: UserInfo1;
    company_id: number;
    is_active?: boolean;
    cancelled_records?: any[];
    total?: number;
    modified_by?: UserInfo1;
    failed_records?: any[];
    succeed?: number;
    stage?: string;
    created_on: string;
    template_tag?: string;
};
type BulkResponse = {
    modified_on?: string;
    created_by?: UserInfo1;
    is_active?: boolean;
    batch_id: string;
    modified_by?: UserInfo1;
    created_on: string;
};
type UserDetail1 = {
    user_id?: string;
    username?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    modified_on?: string;
    failed?: number;
    file_path?: string;
    cancelled?: number;
    created_by?: UserDetail1;
    company_id?: number;
    is_active?: boolean;
    cancelled_records?: string[];
    template?: ProductTemplate;
    total?: number;
    modified_by?: UserDetail1;
    failed_records?: string[];
    succeed?: number;
    stage?: string;
    created_on?: string;
    template_tag?: string;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    data: any[];
    batch_id: string;
    company_id: number;
    template_tag: string;
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
    user_id?: string;
    company_id?: number;
    username?: string;
};
type Items = {
    modified_on?: string;
    failed?: number;
    retry?: number;
    file_path?: string;
    tracking_url?: string;
    cancelled?: number;
    created_by?: UserCommon;
    company_id?: number;
    is_active?: boolean;
    cancelled_records?: string[];
    total?: number;
    id?: string;
    modified_by?: UserCommon;
    failed_records?: string[];
    succeed?: number;
    stage?: string;
    created_on?: string;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
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
type ItemQuery = {
    item_code?: string;
    brand_uid?: number;
    uid?: number;
};
type GTIN = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: any;
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
type InvSize = {
    is_set?: boolean;
    item_height?: number;
    price?: number;
    item_weight?: number;
    item_length?: number;
    price_effective: number;
    currency: string;
    size: any;
    price_transfer?: number;
    identifiers: GTIN[];
    quantity: number;
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    store_code: string;
    item_weight_unit_of_measure?: string;
    set?: InventorySet;
    item_width?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type InventoryResponse = {
    item_id?: number;
    price?: number;
    uid?: string;
    seller_identifier?: string;
    price_effective?: number;
    currency?: string;
    size?: string;
    price_transfer?: number;
    identifiers?: any;
    sellable_quantity?: number;
    quantity?: number;
    store?: any;
    inventory_updated_on?: string;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type DimensionResponse = {
    width: number;
    height: number;
    length: number;
    is_default: boolean;
    unit: string;
};
type Trader1 = {
    name: string;
    address: string[];
    type: string;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
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
type BrandMeta = {
    name: string;
    id: number;
};
type PriceMeta = {
    updated_at?: string;
    effective: number;
    currency: string;
    transfer: number;
    marked: number;
    tp_notes?: any;
};
type ReturnConfig1 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type InventorySellerResponse = {
    track_inventory?: boolean;
    tags?: string[];
    modified_by?: UserSerializer;
    tax_identifier?: any;
    expiration_date?: string;
    manufacturer: ManufacturerResponse;
    dimension: DimensionResponse;
    is_set?: boolean;
    item_id: number;
    fynd_article_code: string;
    uid: string;
    fynd_item_code: string;
    size: string;
    created_by?: UserSerializer;
    trace_id?: string;
    added_on_store?: string;
    trader?: Trader1[];
    weight: WeightResponse;
    identifier: any;
    total_quantity: number;
    seller_identifier: string;
    store: StoreMeta;
    fragile: boolean;
    quantities?: Quantities;
    company: CompanyMeta;
    set?: InventorySet;
    brand: BrandMeta;
    price: PriceMeta;
    raw_meta?: any;
    country_of_origin: string;
    _custom_json?: any;
    is_active?: boolean;
    meta?: any;
    return_config?: ReturnConfig1;
    stage?: string;
    fynd_meta?: any;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
type DimensionResponse1 = {
    width?: number;
    unit?: string;
    height?: number;
    length?: number;
};
type Trader2 = {
    name?: string;
    address?: string[];
    type?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type ArticleStoreResponse = {
    store_type?: string;
    name?: string;
    uid?: number;
    store_code?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    order_committed?: Quantity;
    damaged?: Quantity;
    sellable?: Quantity;
    not_available?: Quantity;
};
type CompanyMeta1 = {
    id?: number;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type PriceArticle = {
    effective?: number;
    currency?: string;
    transfer?: number;
    marked?: number;
    tp_notes?: any;
};
type ReturnConfig2 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type GetInventories = {
    track_inventory?: boolean;
    date_meta?: DateMeta;
    tags?: string[];
    id?: string;
    modified_by?: UserSerializer;
    tax_identifier?: any;
    expiration_date?: string;
    manufacturer?: ManufacturerResponse1;
    dimension?: DimensionResponse1;
    is_set?: boolean;
    item_id?: number;
    uid?: string;
    size?: string;
    created_by?: UserSerializer;
    trace_id?: string;
    trader?: Trader2[];
    weight?: WeightResponse1;
    inventory_updated_on?: string;
    platforms?: any;
    identifier?: any;
    total_quantity?: number;
    seller_identifier?: string;
    store?: ArticleStoreResponse;
    quantities?: QuantitiesArticle;
    company?: CompanyMeta1;
    brand?: BrandMeta1;
    price?: PriceArticle;
    country_of_origin?: string;
    return_config?: ReturnConfig2;
    stage?: string;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    modified_on?: string;
    failed?: number;
    file_path?: string;
    cancelled?: number;
    created_by?: any;
    company_id?: number;
    is_active?: boolean;
    cancelled_records?: string[];
    total?: number;
    id?: string;
    modified_by?: any;
    failed_records?: string[];
    succeed?: number;
    stage?: string;
    created_on?: string;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    total_quantity?: number;
    price?: number;
    seller_identifier: string;
    price_effective?: number;
    currency?: string;
    trace_id?: string;
    tags?: string[];
    quantity?: number;
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    store_code: string;
    item_weight_unit_of_measure?: string;
    price_marked?: number;
};
type InventoryBulkRequest = {
    user?: any;
    sizes: InventoryJobPayload[];
    batch_id: string;
    company_id: number;
};
type InventoryExportRequest = {
    brand?: number[];
    store?: number[];
    type?: string;
};
type InventoryExportResponse = {
    trigger_on?: string;
    seller_id: number;
    status?: string;
    request_params?: any;
    task_id: string;
};
type InventoryExportJob = {
    trigger_on?: string;
    seller_id: number;
    status?: string;
    url?: string;
    request_params?: any;
    completed_on?: string;
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
    total_quantity?: number;
    seller_identifier: string;
    price_effective?: number;
    trace_id?: string;
    tags?: string[];
    expiration_date?: string;
    store_id: number;
    price_marked?: number;
};
type InventoryRequestSchemaV2 = {
    company_id: number;
    payload?: InventoryPayload[];
    meta?: any;
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
    items?: InventoryResponseItem[];
    message: string;
};
type HsnUpsert = {
    uid?: number;
    threshold2?: number;
    tax2?: number;
    company_id: number;
    is_active?: boolean;
    tax_on_esp?: boolean;
    tax_on_mrp: boolean;
    threshold1: number;
    tax1: number;
    hsn_code: string;
    hs2_code: string;
};
type HsnCodesObject = {
    modified_on?: string;
    threshold2?: number;
    tax2?: number;
    company_id?: number;
    tax_on_esp?: boolean;
    tax_on_mrp?: boolean;
    threshold1?: number;
    id?: string;
    tax1?: number;
    hsn_code?: string;
    hs2_code?: string;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    current?: string;
    size?: number;
    has_next?: boolean;
    has_previous?: boolean;
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
    cess?: number;
    effective_date: string;
    threshold: number;
    rate: number;
};
type HSNDataInsertV2 = {
    hsn_code: string;
    modified_on?: string;
    description: string;
    reporting_hsn: string;
    created_by?: any;
    country_code: string;
    modified_by?: any;
    type: string;
    taxes: TaxSlab[];
    created_on?: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    logo?: Media;
    uid?: number;
    slug?: string;
    departments?: string[];
    action?: Action;
    name?: string;
    banners?: ImageUrls;
    discount?: string;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    logo?: Media;
    uid?: number;
    priority_order?: number;
    slug?: string;
    name?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    uid?: number;
    _custom_json?: any;
    childs?: any[];
    slug?: string;
    action?: Action;
    name?: string;
    banners?: ImageUrls;
};
type SecondLevelChild = {
    uid?: number;
    _custom_json?: any;
    childs?: ThirdLevelChild[];
    slug?: string;
    action?: Action;
    name?: string;
    banners?: ImageUrls;
};
type Child = {
    uid?: number;
    _custom_json?: any;
    childs?: SecondLevelChild[];
    slug?: string;
    action?: Action;
    name?: string;
    banners?: ImageUrls;
};
type CategoryItems = {
    uid?: number;
    childs?: Child[];
    slug?: string;
    action?: Action;
    name?: string;
    banners?: ImageUrls;
};
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
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
    sort_on?: ProductSortOn[];
    page: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
};
type ProductDetail = {
    item_code?: string;
    name?: string;
    uid?: number;
    color?: string;
    description?: string;
    short_description?: string;
    highlights?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    type?: string;
    promo_meta?: any;
    image_nature?: string;
    attributes?: any;
    product_online_date?: string;
    medias?: Media1[];
    rating_count?: number;
    teaser_tag?: any;
    tryouts?: string[];
    brand?: ProductBrand;
    item_type?: string;
    has_variant?: boolean;
    slug: string;
    similars?: string[];
    rating?: number;
};
type InventoryPage = {
    type: string;
    next_id?: string;
    has_next?: boolean;
    has_previous?: boolean;
    item_total: number;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type ArticleQuery = {
    item_id: number;
    size: string;
    ignored_stores?: number[];
};
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type AssignStoreArticle = {
    query?: ArticleQuery;
    meta?: any;
    quantity?: number;
    article_assignment?: ArticleAssignment;
    group_id?: string;
};
type AssignStore = {
    channel_type?: string;
    pincode: string;
    company_id?: number;
    articles: AssignStoreArticle[];
    channel_identifier?: string;
    app_id: string;
    store_ids?: number[];
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    item_id: number;
    index?: number;
    uid?: string;
    price_effective?: number;
    status: boolean;
    size: string;
    _id?: string;
    s_city?: string;
    company_id?: number;
    strategy_wise_listing?: any[];
    meta?: any;
    quantity: number;
    store_pincode?: number;
    article_assignment: ArticleAssignment1;
    group_id?: string;
    store_id?: number;
    price_marked?: number;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetAddressSerializer = {
    address_type?: string;
    state?: string;
    landmark?: string;
    latitude?: number;
    pincode?: number;
    country_code?: string;
    city?: string;
    longitude?: number;
    address1?: string;
    address2?: string;
    country?: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    weekday: string;
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetCompanySerializer = {
    modified_on?: string;
    uid?: number;
    verified_on?: string;
    stage?: string;
    addresses?: GetAddressSerializer[];
    created_by?: UserSerializer2;
    company_type?: string;
    verified_by?: UserSerializer2;
    modified_by?: UserSerializer2;
    business_type?: string;
    created_on?: string;
    reject_reason?: string;
    name?: string;
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
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type GetLocationSerializer = {
    documents?: Document[];
    modified_by?: UserSerializer1;
    name: string;
    address: GetAddressSerializer;
    phone_number: string;
    uid?: number;
    verified_on?: string;
    created_by?: UserSerializer1;
    store_type?: string;
    integration_type?: LocationIntegrationType;
    created_on?: string;
    notification_emails?: string[];
    warnings?: any;
    timing?: LocationDayWiseSerializer[];
    company?: GetCompanySerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    modified_on?: string;
    manager?: LocationManagerSerializer;
    _custom_json?: any;
    display_name: string;
    verified_by?: UserSerializer1;
    code: string;
    stage?: string;
    contact_numbers?: SellerPhoneNumber[];
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
    uid: number;
    _custom_json?: any;
    is_active?: boolean;
    app_id: string;
    name?: string;
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
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type GetCompanyProfileSerializerResponse = {
    created_on?: string;
    taxes?: CompanyTaxesSerializer[];
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    company_type: string;
    _custom_json?: any;
    notification_emails?: string[];
    business_info?: string;
    warnings?: any;
    modified_on?: string;
    mode?: string;
    stage?: string;
    business_type: string;
    verified_on?: string;
    created_by?: UserSerializer;
    uid: number;
    franchise_enabled?: boolean;
    name?: string;
    business_details?: BusinessDetails;
    documents?: Document[];
    contact_details?: ContactDetails;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type CreateUpdateAddressSerializer = {
    address1: string;
    landmark?: string;
    longitude: number;
    latitude: number;
    pincode: number;
    address2?: string;
    country_code?: string;
    state: string;
    country: string;
    city: string;
    address_type: string;
};
type UpdateCompany = {
    notification_emails?: string[];
    reject_reason?: string;
    taxes?: CompanyTaxesSerializer1[];
    business_info?: string;
    franchise_enabled?: boolean;
    addresses?: CreateUpdateAddressSerializer[];
    company_type?: string;
    name?: string;
    business_details?: BusinessDetails;
    _custom_json?: any;
    warnings?: any;
    documents?: Document[];
    business_type?: string;
    contact_details?: ContactDetails;
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
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    uid?: number;
    product?: DocumentsObj;
    brand?: DocumentsObj;
    stage?: string;
    company_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    created_on?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    synonyms?: string[];
    logo?: string;
    _locale_language?: any;
    _custom_json?: any;
    description?: string;
    mode?: string;
    modified_on?: string;
    warnings?: any;
    stage?: string;
    verified_on?: string;
    created_by?: UserSerializer;
    reject_reason?: string;
    uid?: number;
    slug_key?: string;
    name: string;
    banner?: BrandBannerSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    description?: string;
    uid?: number;
    _locale_language?: any;
    name: string;
    synonyms?: string[];
    company_id?: number;
    _custom_json?: any;
    logo: string;
    banner?: BrandBannerSerializer;
    brand_tier?: string;
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
    notification_emails?: string[];
    verified_on?: string;
    created_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    created_on?: string;
    reject_reason?: string;
    uid?: number;
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer;
    name?: string;
    modified_by?: UserSerializer;
    company_type: string;
    details?: CompanyDetails;
    market_channels?: string[];
    _custom_json?: any;
    modified_on?: string;
    stage?: string;
    business_type: string;
};
type CompanyBrandSerializer = {
    verified_on?: string;
    created_by?: UserSerializer;
    created_on?: string;
    reject_reason?: string;
    uid?: number;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    company?: CompanySerializer;
    brand?: GetBrandResponseSerializer;
    warnings?: any;
    modified_on?: string;
    stage?: string;
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
    date: HolidayDateSerializer;
    holiday_type: string;
    title: string;
};
type LocationSerializer = {
    notification_emails?: string[];
    address: GetAddressSerializer;
    timing?: LocationDayWiseSerializer[];
    product_return_config?: ProductReturnConfigSerializer;
    contact_numbers?: SellerPhoneNumber[];
    holiday?: HolidaySchemaSerializer[];
    uid?: number;
    manager?: LocationManagerSerializer;
    code: string;
    name: string;
    display_name: string;
    company: number;
    _custom_json?: any;
    warnings?: any;
    store_type?: string;
    documents?: Document[];
    stage?: string;
    gst_credentials?: InvoiceDetailsSerializer;
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
    group_id?: string;
    meta?: any;
    query?: _ArticleQuery;
    article_assignment?: _ArticleAssignment;
    quantity?: number;
};
type AssignStoreRequestValidator = {
    channel_identifier?: string;
    pincode?: string;
    channel_type?: string;
    store_ids?: number[];
    company_id?: number;
    articles?: _AssignStoreArticle[];
    app_id?: string;
};
type AssignStoreResponseSerializer = {
    preice_effective?: number;
    store_id?: number;
    store_pincode?: string;
    index?: number;
    meta?: any;
    price_marked?: number;
    uid?: string;
    s_city?: string;
    item_id?: number;
    company_id?: number;
    status?: boolean;
    size?: string;
    article_assignment?: _ArticleAssignment;
    quantity?: number;
    _id?: string;
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
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type Validity = {
    priority?: number;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    remove?: DisplayMetaDict;
    subtitle?: string;
    description?: string;
    apply?: DisplayMetaDict;
    title?: string;
    auto?: DisplayMetaDict;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type RuleDefinition = {
    is_exact?: boolean;
    auto_apply?: boolean;
    value_type: string;
    scope?: string[];
    currency_code?: string;
    calculate_on: string;
    applicable_on: string;
    type: string;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue;
    types?: string[];
    networks?: string[];
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
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    price_range?: PriceRange;
    payments?: any;
    ordering_stores?: number[];
    post_order?: PostOrder;
    user_groups?: number[];
    coupon_allowed?: boolean;
    uses?: UsesRestriction;
    platforms?: string[];
    bulk_bundle?: BulkBundleRestriction;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type CouponSchedule = {
    duration?: number;
    cron?: string;
    end?: string;
    next_schedule?: any[];
    start?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Rule = {
    max?: number;
    discount_qty?: number;
    value?: number;
    min?: number;
    key?: number;
};
type CouponAdd = {
    ownership: Ownership;
    validity: Validity;
    display_meta: DisplayMeta;
    date_meta?: CouponDateMeta;
    validation?: Validation;
    rule_definition: RuleDefinition;
    type_slug: string;
    restrictions?: Restrictions;
    state?: State;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    author?: CouponAuthor;
    tags?: string[];
    identifiers: Identifier;
    rule: Rule[];
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
    ownership: Ownership;
    validity: Validity;
    display_meta: DisplayMeta;
    date_meta?: CouponDateMeta;
    validation?: Validation;
    rule_definition: RuleDefinition;
    type_slug: string;
    restrictions?: Restrictions;
    state?: State;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    author?: CouponAuthor;
    tags?: string[];
    identifiers: Identifier;
    rule: Rule[];
    code: string;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue1;
    type: string;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type Restrictions1 = {
    order_quantity?: number;
    payments?: PromotionPaymentModes[];
    post_order?: PostOrder1;
    user_groups?: number[];
    anonymous_users?: boolean;
    uses: UsesRestriction1;
    platforms?: string[];
    user_id?: string[];
    user_registered?: UserRegistered;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type CompareObject = {
    greater_than?: number;
    less_than?: number;
    equals?: number;
    less_than_equals?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    item_sku?: string[];
    item_exclude_brand?: number[];
    item_exclude_company?: number[];
    buy_rules?: string[];
    item_exclude_store?: number[];
    item_brand?: number[];
    item_size?: string[];
    cart_quantity?: CompareObject;
    item_id?: number[];
    all_items?: boolean;
    item_company?: number[];
    item_exclude_sku?: string[];
    cart_total?: CompareObject;
    item_store?: number[];
    item_category?: number[];
    item_exclude_category?: number[];
};
type DiscountOffer = {
    discount_price?: number;
    discount_percentage?: number;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    discount_amount?: number;
    min_offer_quantity?: number;
    code?: string;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
    discount_type: string;
};
type DisplayMeta1 = {
    name?: string;
    offer_text?: string;
    description?: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionSchedule = {
    duration?: number;
    cron?: string;
    end?: string;
    published: boolean;
    next_schedule?: any[];
    start: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionListItem = {
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    restrictions?: Restrictions1;
    apply_priority?: number;
    code?: string;
    stackable?: boolean;
    mode: string;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    buy_rules: any;
    display_meta: DisplayMeta1;
    currency?: string;
    apply_exclusive?: string;
    ownership: Ownership1;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    promotion_type: string;
    _schedule?: PromotionSchedule;
    application_id: string;
    author?: PromotionAuthor;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    restrictions?: Restrictions1;
    apply_priority?: number;
    code?: string;
    stackable?: boolean;
    mode: string;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    buy_rules: any;
    display_meta: DisplayMeta1;
    currency?: string;
    apply_exclusive?: string;
    ownership: Ownership1;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    promotion_type: string;
    _schedule?: PromotionSchedule;
    application_id: string;
    author?: PromotionAuthor;
};
type PromotionUpdate = {
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    restrictions?: Restrictions1;
    apply_priority?: number;
    code?: string;
    stackable?: boolean;
    mode: string;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    buy_rules: any;
    display_meta: DisplayMeta1;
    currency?: string;
    apply_exclusive?: string;
    ownership: Ownership1;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    promotion_type: string;
    _schedule?: PromotionSchedule;
    application_id: string;
    author?: PromotionAuthor;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type CartItem = {
    product_id: string;
    size: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type CouponBreakup = {
    message?: string;
    is_applied?: boolean;
    uid?: string;
    value?: number;
    code?: string;
    type?: string;
};
type DisplayBreakup = {
    display?: string;
    message?: string[];
    currency_symbol?: string;
    value?: number;
    currency_code?: string;
    key?: string;
};
type LoyaltyPoints = {
    total?: number;
    is_applied?: boolean;
    description?: string;
    applicable?: number;
};
type RawBreakup = {
    convenience_fee?: number;
    cod_charge?: number;
    fynd_cash?: number;
    subtotal?: number;
    you_saved?: number;
    coupon?: number;
    total?: number;
    discount?: number;
    gst_charges?: number;
    vog?: number;
    mrp_total?: number;
    delivery_charge?: number;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
};
type ProductPrice = {
    add_on?: number;
    selling?: number;
    currency_symbol?: string;
    effective?: number;
    currency_code?: string;
    marked?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type AppliedPromotion = {
    promo_id?: string;
    mrp_promotion?: boolean;
    offer_text?: string;
    ownership?: Ownership2;
    amount?: number;
    promotion_type?: string;
    article_quantity?: number;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type BaseInfo = {
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
    name?: string;
    categories?: CategoryInfo[];
    slug?: string;
    brand?: BaseInfo;
    uid?: number;
    action?: ProductAction;
    type?: string;
    images?: ProductImage[];
};
type ProductAvailability = {
    deliverable?: boolean;
    out_of_stock?: boolean;
    is_valid?: boolean;
    sizes?: string[];
    other_store_quantity?: number;
};
type CartProductIdentifer = {
    identifier?: string;
};
type BasePrice = {
    currency_code?: string;
    marked?: number;
    effective?: number;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    parent_item_identifiers?: any;
    store?: BaseInfo;
    seller?: BaseInfo;
    product_group_tags?: string[];
    size?: string;
    uid?: string;
    quantity?: number;
    type?: string;
    extra_meta?: any;
    price?: ArticlePriceInfo;
};
type CartProductInfo = {
    price?: ProductPriceInfo;
    parent_item_identifiers?: any;
    promo_meta?: PromoMeta;
    bulk_offer?: any;
    message?: string;
    promotions_applied?: AppliedPromotion[];
    discount?: string;
    product?: CartProduct;
    is_set?: boolean;
    quantity?: number;
    availability?: ProductAvailability;
    identifiers: CartProductIdentifer;
    price_per_unit?: ProductPriceInfo;
    key?: string;
    coupon_message?: string;
    article?: ProductArticle;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    is_valid?: boolean;
    message?: string;
};
type OpenApiErrorResponse = {
    success?: boolean;
    errors?: any;
    message?: string;
};
type ShippingAddress = {
    name?: string;
    landmark?: string;
    country?: string;
    address_type?: string;
    email?: string;
    country_code?: string;
    area_code: string;
    state?: string;
    city?: string;
    area_code_slug?: string;
    meta?: any;
    area?: string;
    phone?: number;
    address?: string;
    pincode?: number;
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
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    message?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
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
    payment_methods: MultiTenderPaymentMethod[];
    price_effective: number;
    amount_paid: number;
    discount: number;
    coupon_effective_discount: number;
    loyalty_discount?: number;
    cashback_applied: number;
    size: string;
    files?: OpenApiFiles[];
    quantity?: number;
    product_id: number;
    delivery_charges: number;
    employee_discount?: number;
    meta?: CartItemMeta;
    extra_meta?: any;
    cod_charges: number;
    price_marked: number;
};
type OpenApiPlatformCheckoutReq = {
    payment_methods: MultiTenderPaymentMethod[];
    cart_items: OpenApiOrderItem[];
    coupon_value: number;
    affiliate_order_id?: string;
    payment_mode?: string;
    loyalty_discount?: number;
    cashback_applied: number;
    cod_charges: number;
    billing_address: ShippingAddress;
    comment?: string;
    currency_code?: string;
    employee_discount?: any;
    gstin?: string;
    shipping_address?: ShippingAddress;
    coupon_code: string;
    coupon?: string;
    files?: OpenApiFiles[];
    delivery_charges: number;
    order_id?: string;
    cart_value: number;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    success?: boolean;
    message?: string;
    order_ref_id?: string;
};
type AbandonedCart = {
    is_archive?: boolean;
    payment_methods?: any[];
    payment_mode?: string;
    comment?: string;
    articles: any[];
    promotion?: any;
    is_default: boolean;
    app_id?: string;
    discount?: number;
    coupon?: any;
    merge_qty?: boolean;
    cart_value?: number;
    buy_now?: boolean;
    order_id?: string;
    _id: string;
    cashback: any;
    meta?: any;
    is_active?: boolean;
    bulk_coupon_discount?: number;
    payments?: any;
    expire_at: string;
    user_id: string;
    checkout_mode?: string;
    pick_up_customer_details?: any;
    gstin?: string;
    shipments?: any[];
    last_modified: string;
    created_on: string;
    uid: number;
    fc_index_map?: number[];
    delivery_charges?: any;
    fynd_credits?: any;
    cod_charges?: any;
};
type AbandonedCartResponse = {
    message?: string;
    success?: boolean;
    items?: AbandonedCart[];
    result?: any;
    page?: Page;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    message?: string;
    id?: string;
    currency?: CartCurrency;
    last_modified?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
    buy_now?: boolean;
    comment?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    coupon_text?: string;
    checkout_mode?: string;
    gstin?: string;
};
type AddProductCart = {
    display?: string;
    parent_item_identifiers?: any;
    article_id?: string;
    article_assignment?: any;
    item_size?: string;
    product_group_tags?: string[];
    pos?: boolean;
    quantity?: number;
    item_id?: number;
    seller_id?: number;
    store_id?: number;
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
    parent_item_identifiers?: any;
    article_id?: string;
    item_size?: string;
    item_index?: number;
    quantity?: number;
    item_id?: number;
    identifiers: CartProductIdentifer;
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
