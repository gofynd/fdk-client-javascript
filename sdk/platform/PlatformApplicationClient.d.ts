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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, ShipmentStatus, UserDataInfo, PaymentModeInfo, GSTDetailsData, Prices, PlatformItem, BagUnit, ShipmentItemFulFillingStore, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, InvoiceInfo, Dimensions, Meta, UserDetailsData, TrackingList, ShipmentPayments, DPDetailsData, OrderDetailsData, AffiliateMeta, PDFLinks, Formatted, LockData, DebugInfo, ShipmentTimeStamp, EInvoice, EinvoiceInfo, BuyerDetails, ShipmentMeta, AffiliateDetails, FulfillingStore, BagStateMapper, BagStatusHistory, OrderingStoreDetails, ShipmentStatusData, BagGST, PlatformDeliveryAddress, BagConfigs, CurrentStatus, Identifier, FinancialBreakup, OrderBrandName, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, OrderBagArticle, OrderBags, PlatformShipment, ShipmentInfoResponse, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, B2BPODetails, BagMeta, BagGSTDetails, Dates, ArticleDetails, Attributes, Item, AffiliateBagDetails, Brand, BagReturnableCancelableStatus, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, Weight, ReturnConfig, Article, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderUser, MarketPlacePdf, AffiliateBag, UserData, OrderPriority, OrderInfo, AffiliateStoreIdMapping, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, Meta1, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ShippingInfo, Tax, Charge, TaxInfo, BillingInfo, ProcessingDates, LineItem, Shipment, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, ApplicationItemMOQ, MetaFields, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, UserInfo, CollectionImage, SeoDetail, CollectionBanner, CollectionSchedule, CollectionQuery, CollectionBadge, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, Price1, ProductListingPrice, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, GenderDetail, ProductTemplateCategory, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Media2, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, TaxIdentifier, NetQuantity, TeaserTag, ProductPublish, Trader, CustomOrder, ProductCreateUpdateSchemaV2, NetQuantityResponse, Logo, ReturnConfigResponse, Image, ProductPublished, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, CompanyMeta, PriceMeta, ManufacturerResponse, BrandMeta, ReturnConfig1, QuantityBase, Quantities, Trader1, DimensionResponse, WeightResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, CompanyMeta1, PriceArticle, ManufacturerResponse1, BrandMeta1, ReturnConfig2, ArticleStoreResponse, Quantity, QuantitiesArticle, Trader2, DimensionResponse1, WeightResponse1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, UserSerializer1, GetAddressSerializer, UserSerializer2, GetCompanySerializer, ProductReturnConfigSerializer, SellerPhoneNumber, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, ContactDetails, CompanyTaxesSerializer, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Ownership, DisplayMetaDict, DisplayMeta, Validity, CouponSchedule, Rule, RuleDefinition, CouponAction, CouponDateMeta, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, PriceRange, BulkBundleRestriction, PostOrder, Restrictions, CouponAuthor, State, Validation, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionSchedule, PromotionAuthor, Visibility, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, PostOrder1, Restrictions1, PromotionAction, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionDateMeta, Ownership1, DisplayMeta1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, ProductPrice, ProductPriceInfo, Ownership2, AppliedPromotion, PromoMeta, CartProductIdentifer, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, CategoryInfo, ActionQuery, ProductAction, ProductImage, CartProduct, ProductAvailability, CartProductInfo, LoyaltyPoints, DisplayBreakup, RawBreakup, CouponBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    excluded_fields: string[];
    created: boolean;
    aggregators?: any[];
    success: boolean;
    app_id: string;
    display_fields: string[];
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    secret: string;
    config_type: string;
    key: string;
    merchant_salt: string;
    is_active?: boolean;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    is_active?: boolean;
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
    small: string;
    large: string;
};
type IntentApp = {
    code?: string;
    logos?: PaymentModeLogo;
    package_name?: string;
    display_name?: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    merchant_code?: string;
    card_token?: string;
    nickname?: string;
    intent_app?: IntentApp[];
    timeout?: number;
    card_isin?: string;
    intent_flow?: boolean;
    cod_limit_per_order?: number;
    intent_app_error_dict_list?: IntentAppErrorList[];
    cod_limit?: number;
    expired?: boolean;
    exp_year?: number;
    retry_count?: number;
    card_number?: string;
    card_name?: string;
    card_brand?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    code?: string;
    aggregator_name: string;
    card_fingerprint?: string;
    card_reference?: string;
    card_issuer?: string;
    exp_month?: number;
    card_type?: string;
    intent_app_error_list?: string[];
    card_brand_image?: string;
    display_priority?: number;
    remaining_limit?: number;
    display_name?: string;
    fynd_vpa?: string;
    logo_url?: PaymentModeLogo;
    name?: string;
    card_id?: string;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    display_priority: number;
    anonymous_enable?: boolean;
    save_card?: boolean;
    display_name: string;
    aggregator_name?: string;
    name: string;
    is_pay_by_card_pl?: boolean;
    list?: PaymentModeList[];
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
    transfer_type: string;
    customers: any;
    more_attributes: any;
    unique_transfer_no: any;
    is_active: boolean;
    payouts_aggregators: any[];
};
type PayoutBankDetails = {
    account_type: string;
    city?: string;
    country?: string;
    account_holder?: string;
    state?: string;
    account_no?: string;
    pincode?: number;
    branch_name?: string;
    ifsc_code: string;
    bank_name?: string;
};
type PayoutRequest = {
    unique_external_id: string;
    users: any;
    transfer_type: string;
    aggregator: string;
    bank_details: PayoutBankDetails;
    is_active: boolean;
};
type PayoutResponse = {
    payment_status: string;
    payouts: any;
    users: any;
    transfer_type: string;
    created: boolean;
    aggregator: string;
    unique_transfer_no: string;
    bank_details: any;
    is_active: boolean;
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
    account_holder: string;
    account_no: string;
    branch_name: string;
    ifsc_code: string;
    bank_name: string;
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
    title: string;
    email: string;
    beneficiary_id: string;
    id: number;
    delights_user_name?: string;
    transfer_mode: string;
    mobile?: string;
    comment?: string;
    account_no: string;
    ifsc_code: string;
    subtitle: string;
    account_holder: string;
    created_on: string;
    display_name: string;
    address: string;
    modified_on: string;
    branch_name?: string;
    is_active: boolean;
    bank_name: string;
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
    name?: string;
    meta?: MultiTenderPaymentMeta;
    amount: number;
    mode: string;
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
type CODdata = {
    user_id: string;
    usages: number;
    remaining_limit: number;
    is_active: boolean;
    limit: number;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    mobileno: string;
    merchant_user_id: string;
    is_active: boolean;
};
type SetCODOptionResponse = {
    message: string;
    success: boolean;
};
type ShipmentStatus = {
    hex_code: string;
    title: string;
    status: string;
    actual_status: string;
    ops_status: string;
};
type UserDataInfo = {
    name?: string;
    first_name?: string;
    is_anonymous_user?: boolean;
    mobile?: string;
    email?: string;
    gender?: string;
    uid?: number;
    avis_user_id?: string;
    last_name?: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type GSTDetailsData = {
    gst_fee: number;
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    value_of_good: number;
    gstin_code: string;
};
type Prices = {
    cod_charges?: number;
    fynd_credits?: number;
    refund_amount?: number;
    transfer_price?: number;
    cashback?: number;
    refund_credit?: number;
    amount_paid_roundoff?: number;
    price_marked?: number;
    tax_collected_at_source?: number;
    discount?: number;
    promotion_effective_discount?: number;
    value_of_good?: number;
    price_effective?: number;
    delivery_charge?: number;
    coupon_value?: number;
    cashback_applied?: number;
    amount_paid?: number;
};
type PlatformItem = {
    size?: string;
    name?: string;
    can_cancel?: boolean;
    images?: string[];
    l3_category_name?: string;
    image?: string[];
    l1_category?: string[];
    l3_category?: number;
    id?: number;
    department_id?: number;
    can_return?: boolean;
    code?: string;
    color?: string;
};
type BagUnit = {
    total_shipment_bags: number;
    can_cancel?: boolean;
    ordering_channel: string;
    status: any;
    item_quantity: number;
    gst?: GSTDetailsData;
    bag_id: number;
    shipment_id: string;
    prices?: Prices;
    can_return?: boolean;
    item?: PlatformItem;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentItem = {
    shipment_status?: ShipmentStatus;
    user?: UserDataInfo;
    application?: any;
    payment_mode_info?: PaymentModeInfo;
    created_at: string;
    total_shipments_in_order: number;
    sla?: any;
    fulfilling_centre: string;
    bags?: BagUnit[];
    id: string;
    shipment_id?: string;
    channel?: any;
    prices?: Prices;
    fulfilling_store?: ShipmentItemFulFillingStore;
    total_bags_count: number;
    payment_methods?: any;
    shipment_created_at: string;
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
type InvoiceInfo = {
    invoice_url?: string;
    updated_date?: string;
    label_url?: string;
    credit_note_id?: string;
    store_invoice_id?: string;
};
type Dimensions = {
    is_default?: boolean;
    length?: number;
    unit?: string;
    width?: number;
    height?: number;
};
type Meta = {
    dimension?: Dimensions;
};
type UserDetailsData = {
    phone: string;
    name: string;
    city: string;
    address: string;
    email?: string;
    pincode: string;
    state: string;
    country: string;
};
type TrackingList = {
    status: string;
    time?: string;
    is_passed?: boolean;
    text: string;
    is_current?: boolean;
};
type ShipmentPayments = {
    source?: string;
    logo?: string;
    mode?: string;
};
type DPDetailsData = {
    name?: string;
    eway_bill_id?: string;
    id?: number;
    track_url?: string;
    awb_no?: string;
    pincode?: string;
    country?: string;
    gst_tag?: string;
};
type OrderDetailsData = {
    order_value?: string;
    order_date?: string;
    source?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    tax_details?: any;
    cod_charges?: string;
    fynd_order_id: string;
    affiliate_id?: string;
};
type AffiliateMeta = {
    quantity?: number;
    channel_shipment_id?: string;
    box_type?: string;
    size_level_total_qty?: number;
    loyalty_discount?: number;
    due_date?: string;
    channel_order_id?: string;
    coupon_code?: string;
    employee_discount?: number;
    is_priority?: boolean;
    order_item_id?: string;
};
type PDFLinks = {
    invoice?: string;
    invoice_type: string;
    label?: string;
    label_type: string;
    credit_note_url?: string;
    b2b?: string;
    label_a6?: string;
    invoice_a6?: string;
    invoice_a4?: string;
    po_invoice?: string;
    label_a4?: string;
    delivery_challan_a4?: string;
    invoice_pos?: string;
    label_pos?: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type LockData = {
    mto?: boolean;
    lock_message?: string;
    locked?: boolean;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type EInvoice = {
    acknowledge_date?: string;
    acknowledge_no?: number;
    error_code?: string;
    irn?: string;
    signed_qr_code?: string;
    signed_invoice?: string;
    error_message?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type BuyerDetails = {
    name: string;
    city: string;
    address: string;
    pincode: number;
    state: string;
    gstin: string;
    ajio_site_id?: string;
};
type ShipmentMeta = {
    weight: number;
    formatted?: Formatted;
    packaging_name?: string;
    return_store_node?: number;
    lock_data?: LockData;
    dp_options?: any;
    dp_id?: string;
    due_date?: string;
    auto_trigger_dp_assignment_acf: boolean;
    same_store_available: boolean;
    ewaybill_info?: any;
    order_type?: string;
    shipment_weight?: number;
    assign_dp_from_sb?: boolean;
    awb_number?: string;
    store_invoice_updated_date?: string;
    dp_name?: string;
    debug_info?: DebugInfo;
    shipment_volumetric_weight?: number;
    fulfilment_priority_text?: string;
    external?: any;
    timestamp?: ShipmentTimeStamp;
    marketplace_store_id?: string;
    einvoice_info?: EinvoiceInfo;
    return_affiliate_shipment_id?: string;
    dp_sort_key?: string;
    box_type?: string;
    po_number?: string;
    forward_affiliate_shipment_id?: string;
    return_details?: any;
    return_affiliate_order_id?: string;
    bag_weight?: any;
    b2c_buyer_details?: any;
    b2b_buyer_details?: BuyerDetails;
    forward_affiliate_order_id?: string;
    return_awb_number?: string;
};
type AffiliateDetails = {
    company_affiliate_tag?: string;
    ad_id?: string;
    affiliate_shipment_id: string;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_store_id: string;
    pdf_links?: PDFLinks;
    shipment_meta: ShipmentMeta;
    affiliate_id?: string;
};
type FulfillingStore = {
    store_name: string;
    phone: string;
    meta: any;
    contact_person: string;
    city: string;
    fulfillment_channel: string;
    id: number;
    address: string;
    pincode: string;
    state: string;
    code: string;
    country: string;
};
type BagStateMapper = {
    journey_type: string;
    name: string;
    app_state_name?: string;
    app_display_name?: string;
    notify_customer?: boolean;
    is_active?: boolean;
    display_name: string;
    bs_id: number;
    app_facing?: boolean;
    state_type: string;
};
type BagStatusHistory = {
    updated_at?: string;
    created_at?: string;
    app_display_name?: string;
    bag_state_mapper?: BagStateMapper;
    bsh_id?: number;
    status: string;
    display_name?: string;
    bag_id?: number;
    shipment_id?: string;
    store_id?: number;
    delivery_awb_number?: string;
    forward?: boolean;
    delivery_partner_id?: number;
    state_type?: string;
    kafka_sync?: boolean;
    state_id?: number;
    reasons?: any[];
};
type OrderingStoreDetails = {
    phone: string;
    store_name: string;
    meta: any;
    contact_person: string;
    city: string;
    ordering_store_id: number;
    address: string;
    pincode: string;
    state: string;
    code: string;
    country: string;
};
type ShipmentStatusData = {
    created_at?: string;
    status?: string;
    id?: number;
    bag_list?: string[];
    shipment_id?: string;
};
type BagGST = {
    is_default_hsn_code?: boolean;
    gst_tag?: string;
    gst_fee?: number;
    brand_calculated_amount?: number;
    gst_tax_percentage?: number;
    value_of_good?: number;
    gstin_code?: string;
    hsn_code?: string;
};
type PlatformDeliveryAddress = {
    phone?: string;
    latitude?: number;
    updated_at?: string;
    created_at?: string;
    city?: string;
    longitude?: number;
    contact_person?: string;
    address_category?: string;
    address_type?: string;
    pincode?: string;
    email?: string;
    version?: string;
    state?: string;
    address2?: string;
    landmark?: string;
    address1?: string;
    area?: string;
    country?: string;
};
type BagConfigs = {
    enable_tracking: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
    can_be_cancelled: boolean;
};
type CurrentStatus = {
    updated_at?: string;
    created_at?: string;
    bag_state_mapper?: BagStateMapper;
    status?: string;
    bag_id?: number;
    delivery_awb_number?: string;
    store_id?: number;
    shipment_id?: string;
    delivery_partner_id?: number;
    state_type?: string;
    kafka_sync?: boolean;
    state_id?: number;
    current_status_id: number;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    size: string;
    identifiers: Identifier;
    tax_collected_at_source?: number;
    discount: number;
    coupon_effective_discount: number;
    price_effective: number;
    value_of_good: number;
    cod_charges: number;
    transfer_price: number;
    amount_paid: number;
    hsn_code: string;
    amount_paid_roundoff?: number;
    price_marked: number;
    fynd_credits: number;
    cashback: number;
    coupon_value: number;
    promotion_effective_discount: number;
    delivery_charge: number;
    cashback_applied: number;
    gst_tag: string;
    refund_credit: number;
    gst_fee: number;
    item_name: string;
    brand_calculated_amount: number;
    added_to_fynd_cash: boolean;
    gst_tax_percentage: number;
    total_units: number;
};
type OrderBrandName = {
    created_on: string;
    company: string;
    brand_name: string;
    logo: string;
    modified_on?: string;
    id: number;
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
    promo_id?: string;
    article_quantity?: number;
    promotion_name?: string;
    amount?: number;
    buy_rules?: BuyRules[];
    promotion_type?: string;
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type OrderBags = {
    identifier?: string;
    line_number?: number;
    display_name?: string;
    bag_id: number;
    gst_details?: BagGST;
    delivery_address?: PlatformDeliveryAddress;
    can_cancel?: boolean;
    bag_configs?: BagConfigs;
    prices?: Prices;
    item?: PlatformItem;
    seller_identifier?: string;
    quantity?: number;
    parent_promo_bags?: any;
    current_status?: CurrentStatus;
    financial_breakup?: FinancialBreakup;
    brand?: OrderBrandName;
    applied_promos?: AppliedPromos[];
    entity_type?: string;
    can_return?: boolean;
    article?: OrderBagArticle;
};
type PlatformShipment = {
    invoice?: InvoiceInfo;
    meta?: Meta;
    billing_details?: UserDetailsData;
    platform_logo?: string;
    tracking_list?: TrackingList[];
    forward_shipment_id?: string;
    payments?: ShipmentPayments;
    gst_details?: GSTDetailsData;
    dp_details?: DPDetailsData;
    priority_text?: string;
    enable_dp_tracking?: boolean;
    payment_methods?: any;
    journey_type?: string;
    order?: OrderDetailsData;
    delivery_details?: UserDetailsData;
    vertical?: string;
    total_items?: number;
    shipment_quantity?: number;
    invoice_id?: string;
    shipment_id: string;
    coupon?: any;
    prices?: Prices;
    total_bags?: number;
    fulfilment_priority?: number;
    affiliate_details?: AffiliateDetails;
    payment_mode?: string;
    delivery_slot?: any;
    picked_date?: string;
    user_agent?: string;
    fulfilling_store?: FulfillingStore;
    bag_status_history?: BagStatusHistory[];
    shipment_status?: string;
    shipment_images?: string[];
    ordering_store?: OrderingStoreDetails;
    status?: ShipmentStatusData;
    bags?: OrderBags[];
    custom_meta?: any[];
    operational_status?: string;
    lock_status?: boolean;
    packaging_type?: string;
};
type ShipmentInfoResponse = {
    shipments?: PlatformShipment[];
    message?: string;
    success: boolean;
};
type OrderMeta = {
    order_type?: string;
    order_child_entities?: string[];
    currency_symbol?: string;
    order_tags?: any[];
    ordering_store?: number;
    mongo_cart_id?: number;
    order_platform?: string;
    customer_note?: string;
    employee_id?: number;
    staff?: any;
    comment?: string;
    files?: any[];
    extra_meta?: any;
    cart_id?: number;
    payment_type?: string;
};
type OrderDict = {
    order_date: string;
    meta?: OrderMeta;
    prices?: Prices;
    tax_details?: any;
    payment_methods?: any;
    fynd_order_id: string;
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    shipments?: PlatformShipment[];
    success: boolean;
};
type SubLane = {
    total_items?: number;
    actions?: any[];
    value?: string;
    index?: number;
    text?: string;
};
type SuperLane = {
    total_items?: number;
    value: string;
    text: string;
    options?: SubLane[];
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
    name?: string;
    logo?: string;
};
type PlatformOrderItems = {
    total_order_value?: number;
    meta?: any;
    user_info?: UserDataInfo;
    payment_mode?: string;
    breakup_values?: PlatformBreakupValues[];
    channel?: PlatformChannel;
    shipments?: PlatformShipment[];
    order_value?: number;
    order_created_time?: string;
    order_id?: string;
};
type OrderListingResponse = {
    page?: Page;
    lane?: string;
    items?: PlatformOrderItems[];
    success?: boolean;
    total_count?: number;
    message?: string;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    text: string;
    value: number;
    options?: Options[];
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    last_location_recieved_at?: string;
    updated_at?: string;
    raw_status?: string;
    meta?: any;
    status?: string;
    updated_time?: string;
    account_name?: string;
    awb?: string;
    shipment_type?: string;
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
    report_created_at?: string;
    report_name?: string;
    s3_key?: string;
    request_details?: any;
    status?: string;
    report_requested_at?: string;
    report_id?: string;
    report_type?: string;
    display_name?: string;
};
type JioCodeUpsertDataSet = {
    item_id?: string;
    jio_code?: string;
    article_id?: string;
    company_id?: string;
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
    identifier?: string;
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
    data?: any[];
    trace_id?: string;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    batch_id: string;
    store_name?: string;
    invoice?: any;
    label?: any;
    do_invoice_label_generated: boolean;
    invoice_status?: string;
    store_code?: string;
    store_id?: string;
    data?: any;
    company_id?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type URL = {
    url?: string;
};
type FileResponse = {
    size?: number;
    operation?: string;
    method?: string;
    tags?: string[];
    content_type?: string;
    upload?: FileUploadResponse;
    cdn?: URL;
    file_name?: string;
    namespace?: string;
    file_path?: string;
};
type BulkListingPage = {
    size?: number;
    type?: string;
    current?: number;
    has_next?: boolean;
    total?: number;
    has_previous?: boolean;
};
type bulkListingData = {
    id?: string;
    failed?: number;
    successful_shipments?: any[];
    failed_shipments?: any[];
    user_name?: string;
    file_name?: string;
    company_id?: number;
    store_name?: string;
    batch_id?: string;
    store_code?: string;
    total?: number;
    processing?: number;
    successful?: number;
    status?: string;
    uploaded_on?: string;
    processing_shipments?: string[];
    excel_url?: string;
    store_id?: number;
    user_id?: string;
};
type BulkListingResponse = {
    page?: BulkListingPage;
    data?: bulkListingData[];
    error?: string;
    success?: boolean;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    question_set?: QuestionSet[];
    qc_type?: string[];
    id?: number;
    display_name?: string;
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
    batch_id?: string;
    processing_shipments_count?: number;
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    company_id?: string;
    successful_shipment_ids?: string[];
    total_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    status?: boolean;
    error?: string[];
    uploaded_on?: string;
    success?: string;
    failed_records?: string[];
    data?: BulkActionDetailsDataField[];
    message?: string;
    user_id?: string;
    uploaded_by?: string;
};
type B2BPODetails = {
    item_base_price?: number;
    total_gst_percentage?: number;
    po_line_amount?: number;
    partial_can_ret?: boolean;
    po_tax_amount?: number;
    docker_number?: string;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type BagGSTDetails = {
    igst_gst_fee: string;
    is_default_hsn_code?: boolean;
    gst_tag: string;
    cgst_gst_fee: string;
    gst_fee: number;
    sgst_tax_percentage: number;
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    gst_tax_percentage: number;
    value_of_good: number;
    sgst_gst_fee: string;
    hsn_code_id: string;
    cgst_tax_percentage: number;
    gstin_code?: string;
    igst_tax_percentage: number;
    hsn_code: string;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type ArticleDetails = {
    status?: any;
};
type Attributes = {
    primary_material?: string;
    marketer_address?: string;
    name?: string;
    brand_name?: string;
    primary_color_hex?: string;
    primary_color?: string;
    essential?: string;
    gender?: string[];
    marketer_name?: string;
};
type Item = {
    size: string;
    branch_url?: string;
    l2_category?: string[];
    meta?: any;
    brand_id: number;
    webstore_product_url?: string;
    name: string;
    can_cancel?: boolean;
    l3_category_name?: string;
    l1_category?: string[];
    l2_category_id?: number;
    color?: string;
    item_id: number;
    l3_category?: number;
    slug_key: string;
    gender?: string;
    code?: string;
    l1_category_id?: number;
    brand: string;
    image: string[];
    attributes: Attributes;
    last_updated_at?: string;
    department_id?: number;
    can_return?: boolean;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    loyalty_discount?: number;
    employee_discount?: number;
};
type Brand = {
    created_on?: number;
    invoice_prefix?: string;
    company: string;
    brand_id: number;
    brand_name: string;
    logo?: string;
    start_date?: string;
    modified_on?: number;
    script_last_ran?: string;
    pickup_location?: string;
    is_virtual_invoice?: boolean;
    credit_note_expiry_days?: number;
    credit_note_allowed?: boolean;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    can_be_cancelled: boolean;
};
type Document = {
    url?: string;
    value: string;
    legal_name: string;
    verified: boolean;
    ds_type: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEinvoice = {
    enabled: boolean;
    username?: string;
    password?: string;
    user?: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
type EInvoicePortalDetails = {
    user?: string;
    username?: string;
    password?: string;
};
type StoreMeta = {
    documents?: StoreDocuments;
    notification_emails?: string[];
    stage: string;
    product_return_config?: any;
    gst_credentials: StoreGstCredentials;
    einvoice_portal_details?: EInvoicePortalDetails;
    display_name: string;
    gst_number?: string;
    timing?: any[];
    additional_contact_details?: any;
    ewaybill_portal_details?: any;
};
type StoreAddress = {
    address_type: string;
    version?: string;
    email?: string;
    state: string;
    phone: string;
    latitude: number;
    updated_at: string;
    created_at: string;
    city: string;
    contact_person: string;
    landmark?: string;
    country: string;
    address2?: string;
    longitude: number;
    address_category: string;
    address1: string;
    country_code: string;
    pincode: number;
    area?: string;
};
type Store = {
    brand_id?: any;
    meta: StoreMeta;
    parent_store_id?: number;
    fulfillment_channel: string;
    s_id: string;
    state: string;
    is_enabled_for_recon?: boolean;
    phone: number;
    latitude: number;
    updated_at?: string;
    mall_name?: string;
    created_at: string;
    name: string;
    city: string;
    contact_person: string;
    country: string;
    address2?: string;
    company_id: number;
    order_integration_id?: string;
    brand_store_tags?: string[];
    longitude: number;
    vat_no?: string;
    store_active_from?: string;
    code?: string;
    address1: string;
    mall_area?: string;
    alohomora_user_id?: number;
    is_active?: boolean;
    location_type: string;
    store_email: string;
    is_archived?: boolean;
    pincode: string;
    store_address_json?: StoreAddress;
    login_username: string;
    packaging_material_count?: number;
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
    is_set?: boolean;
    seller_identifier: string;
    identifiers: Identifier;
    size: string;
    weight?: Weight;
    raw_meta?: any;
    dimensions?: Dimensions;
    a_set?: any;
    esp_modified?: any;
    _id: string;
    child_details?: any;
    code?: string;
    uid: string;
    return_config?: ReturnConfig;
};
type BagDetailsPlatformResponse = {
    b_id: number;
    meta?: BagMeta;
    identifier?: string;
    line_number?: number;
    display_name?: string;
    gst_details: BagGSTDetails;
    bag_status: BagStatusHistory[];
    dates?: Dates;
    article_details?: ArticleDetails;
    original_bag_list?: number[];
    journey_type: string;
    b_type?: string;
    shipment_id?: string;
    prices: Prices;
    qc_required?: any;
    affiliate_details?: AffiliateDetails;
    item: Item;
    restore_promos?: any;
    seller_identifier?: string;
    reasons?: any[];
    quantity?: number;
    tags?: string[];
    order_integration_id?: string;
    parent_promo_bags?: any;
    current_status: BagStatusHistory;
    no_of_bags_order?: number;
    affiliate_bag_details: AffiliateBagDetails;
    bag_status_history?: BagStatusHistory;
    financial_breakup: FinancialBreakup[];
    applied_promos?: any[];
    brand: Brand;
    bag_update_time?: number;
    current_operational_status: BagStatusHistory;
    status: BagReturnableCancelableStatus;
    ordering_store?: Store;
    entity_type?: string;
    operational_status?: string;
    restore_coupon?: boolean;
    article: Article;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    size: number;
    current: number;
    has_next: boolean;
    page_type: string;
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
    status?: number;
    error?: string;
    message?: string;
    shipment_id?: string;
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
    store_id: number;
    mongo_article_id?: string;
    affiliate_order_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
    set_id?: string;
    reason_ids?: number[];
    item_id?: string;
    affiliate_id?: string;
    fynd_order_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_order_id?: string;
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
    id?: string;
    affiliate_id?: string;
    reason_text: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    action: string;
    action_type: string;
    entities: Entities[];
};
type Bags = {
    affiliate_order_id?: string;
    bag_id?: number;
    is_locked?: boolean;
    affiliate_bag_id?: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    lock_status?: boolean;
    status?: string;
    shipment_id?: string;
    affiliate_shipment_id?: string;
    is_bag_locked?: boolean;
    bags?: Bags[];
    affiliate_id?: string;
    original_filter?: OriginalFilter;
    is_shipment_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    message?: string;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    description?: string;
    to_datetime?: string;
    id: number;
    from_datetime?: string;
    title?: string;
    company_id?: number;
    logo_url?: string;
    platform_name?: string;
    platform_id?: string;
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
    status: boolean;
    call_id: string;
};
type Products = {
    line_number?: number;
    identifier?: string;
    quantity?: number;
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
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
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
type ShipmentsRequest = {
    identifier: string;
    products?: Products[];
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    task?: boolean;
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    stack_trace?: string;
    message?: string;
    identifier?: string;
    meta?: any;
    final_state?: any;
    exception?: string;
    code?: string;
    status?: number;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type ArticleDetails1 = {
    weight: any;
    brand_id: number;
    dimension: any;
    category: any;
    _id: string;
    quantity: number;
    attributes: any;
};
type LocationDetails = {
    fulfillment_id: number;
    fulfillment_type: string;
    articles: ArticleDetails1[];
};
type ShipmentDetails = {
    affiliate_shipment_id: string;
    meta?: any;
    fulfillment_id: number;
    box_type?: string;
    dp_id?: number;
    articles: ArticleDetails1[];
    shipments: number;
};
type ShipmentConfig = {
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
    payment_mode: string;
    journey: string;
    identifier: string;
    action: string;
    to_pincode: string;
    source: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderUser = {
    first_name: string;
    last_name: string;
    pincode: string;
    mobile: number;
    address2?: string;
    address1?: string;
    email: string;
    country: string;
    phone: number;
    city: string;
    state: string;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    avl_qty: number;
    modified_on: string;
    sku: string;
    price_marked: number;
    quantity: number;
    transfer_price: number;
    identifier: any;
    seller_identifier: string;
    company_id: number;
    affiliate_store_id: string;
    item_id: number;
    pdf_links?: MarketPlacePdf;
    store_id: number;
    discount: number;
    affiliate_meta: any;
    delivery_charge: number;
    _id: string;
    fynd_store_id: string;
    amount_paid: number;
    item_size: string;
    price_effective: number;
    hsn_code_id: string;
    unit_price: number;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
};
type OrderInfo = {
    affiliate_order_id?: string;
    shipment?: ShipmentData;
    payment_mode: string;
    cod_charges: number;
    billing_address: OrderUser;
    order_value: number;
    delivery_charges: number;
    shipping_address: OrderUser;
    discount: number;
    bags: AffiliateBag[];
    user: UserData;
    payment?: any;
    order_priority?: OrderPriority;
    items: any;
    coupon?: string;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
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
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    updated_at: string;
    meta?: AffiliateAppConfigMeta[];
    description?: string;
    id: string;
    secret: string;
    name: string;
    token: string;
    owner: string;
    created_at: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    token: string;
    id: string;
    config?: AffiliateConfig;
};
type OrderConfig = {
    store_lookup?: string;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
    create_user?: boolean;
    affiliate: Affiliate;
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
    id: number;
    slug: string;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l1_detail?: string;
    ticket_id?: string;
    message: string;
    l3_detail?: string;
    createdat: string;
    bag_id?: number;
    type: string;
    user: string;
    ticket_url?: string;
    l2_detail?: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type PostHistoryData = {
    user_name: string;
    message: string;
};
type PostHistoryFilters = {
    line_number?: string;
    identifier?: string;
    shipment_id: string;
};
type PostActivityHistory = {
    data: PostHistoryData;
    filters: PostHistoryFilters[];
};
type PostHistoryDict = {
    activity_history: PostActivityHistory;
};
type PostShipmentHistory = {
    activity_history?: PostHistoryDict[];
};
type SmsDataPayload = {
    country_code: string;
    payment_mode: string;
    message: string;
    phone_number: number;
    shipment_id: number;
    brand_name: string;
    amount_paid: number;
    customer_name: string;
    order_id: string;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    bag_id: number;
    slug: string;
};
type Meta1 = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    shipment_id?: string;
    meta: Meta1;
    id: number;
    remarks?: string;
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
    qc_required: string;
    shipment_ids?: string[];
    dp_id: number;
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type ShippingInfo = {
    alternate_email?: string;
    floor_no?: string;
    primary_email: string;
    primary_mobile_number: string;
    address_type?: string;
    state_code?: string;
    shipping_type?: string;
    pincode: string;
    address1: string;
    country: string;
    landmark?: string;
    title?: string;
    alternate_mobile_number?: string;
    customer_code?: string;
    country_code?: string;
    last_name?: string;
    gender?: string;
    address2?: string;
    slot?: any[];
    city: string;
    middle_name?: string;
    house_no?: string;
    first_name: string;
    geo_location?: any;
    external_customer_code?: string;
    state: string;
};
type Tax = {
    rate: number;
    amount: any;
    breakup?: any[];
    name: string;
};
type Charge = {
    amount: any;
    tax?: Tax;
    name: string;
    code?: string;
    type: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type BillingInfo = {
    alternate_email?: string;
    floor_no?: string;
    primary_email: string;
    primary_mobile_number: string;
    state_code?: string;
    pincode: string;
    address1: string;
    country: string;
    title?: string;
    alternate_mobile_number?: string;
    customer_code?: string;
    country_code?: string;
    last_name?: string;
    gender?: string;
    address2?: string;
    city: string;
    middle_name?: string;
    house_no?: string;
    first_name: string;
    external_customer_code?: string;
    state: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    dispatch_by_date?: string;
    dispatch_after_date?: string;
    pack_by_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
};
type LineItem = {
    charges?: Charge[];
    meta?: any;
    external_line_id?: string;
    seller_identifier: string;
    quantity?: number;
    custom_messasge?: string;
};
type Shipment = {
    external_shipment_id?: string;
    meta?: any;
    processing_dates?: ProcessingDates;
    location_id: number;
    priority?: number;
    line_items: LineItem[];
};
type PaymentMethod = {
    amount: number;
    meta?: any;
    name: string;
    collect_by: string;
    transaction_data?: any;
    refund_by: string;
    mode: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type CreateOrderAPI = {
    shipping_info: ShippingInfo;
    charges?: Charge[];
    meta?: any;
    tax_info?: TaxInfo;
    currency_info?: any;
    external_creation_date?: string;
    external_order_id?: string;
    billing_info: BillingInfo;
    shipments: Shipment[];
    payment_info: PaymentInfo;
};
type CreateOrderErrorReponse = {
    stack_trace?: string;
    message: string;
    meta?: string;
    info?: any;
    exception?: string;
    code?: string;
    status: number;
    request_id?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    mode?: string;
    collect_by?: string;
    refund_by?: string;
};
type CreateChannelPaymentInfo = {
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
    source?: string;
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
    order_details?: FyndOrderIdList[];
    mobile: number;
    end_date: string;
    start_date: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    words?: string[];
    app_id?: string;
    is_active?: boolean;
    result: SearchKeywordResult;
    _custom_json?: any;
};
type GetSearchWordsData = {
    words?: string[];
    app_id?: string;
    is_active?: boolean;
    result?: any;
    uid?: string;
    _custom_json?: any;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type Media = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type AutocompletePageAction = {
    type?: string;
    params?: any;
    url?: string;
    query?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type AutocompleteResult = {
    logo?: Media;
    _custom_json?: any;
    action?: AutocompleteAction;
    display?: string;
};
type CreateAutocompleteKeyword = {
    words?: string[];
    app_id?: string;
    results?: AutocompleteResult[];
    is_active?: boolean;
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
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    results?: any[];
};
type ProductBundleItem = {
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    max_quantity: number;
    product_uid: number;
    min_quantity: number;
};
type ProductBundleRequest = {
    created_by?: any;
    products: ProductBundleItem[];
    page_visibility?: string[];
    modified_by?: any;
    logo?: string;
    meta?: any;
    company_id?: number;
    slug: string;
    created_on?: string;
    choice: string;
    is_active: boolean;
    same_store_assignment?: boolean;
    modified_on?: string;
    name: string;
};
type GetProductBundleCreateResponse = {
    created_by?: any;
    products: ProductBundleItem[];
    page_visibility?: string[];
    modified_by?: any;
    logo?: string;
    meta?: any;
    company_id?: number;
    slug: string;
    id?: string;
    created_on?: string;
    choice: string;
    is_active: boolean;
    same_store_assignment?: boolean;
    modified_on?: string;
    name: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleUpdateRequest = {
    products: ProductBundleItem[];
    page_visibility?: string[];
    modified_by?: any;
    logo?: string;
    meta?: any;
    company_id?: number;
    slug: string;
    choice: string;
    is_active: boolean;
    same_store_assignment?: boolean;
    modified_on?: string;
    name: string;
};
type Size = {
    value?: string;
    quantity?: number;
    is_available?: boolean;
    display?: string;
};
type Price = {
    max_effective?: number;
    max_marked?: number;
    currency?: string;
    min_marked?: number;
    min_effective?: number;
};
type LimitedProductData = {
    images?: string[];
    quantity?: number;
    country_of_origin?: string;
    identifier?: any;
    sizes?: string[];
    attributes?: any;
    slug?: string;
    price?: any;
    short_description?: string;
    uid?: number;
    item_code?: string;
    name?: string;
};
type GetProducts = {
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    max_quantity?: number;
    sizes?: Size[];
    price?: Price;
    product_details?: LimitedProductData;
    product_uid?: number;
    min_quantity?: number;
};
type GetProductBundleResponse = {
    products?: GetProducts[];
    page_visibility?: string[];
    meta?: any;
    company_id?: number;
    logo?: string;
    slug?: string;
    choice?: string;
    is_active?: boolean;
    same_store_assignment?: boolean;
    name?: string;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    brand_id?: number;
    tag?: string;
    created_by?: any;
    title: string;
    modified_by?: any;
    company_id?: number;
    id?: string;
    modified_on?: string;
    created_on?: string;
    subtitle?: string;
    description?: string;
    guide?: Guide;
    image?: string;
    name: string;
    active?: boolean;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type SizeGuideResponse = {
    brand_id?: number;
    created_by?: any;
    tag?: string;
    title?: string;
    modified_by?: any;
    company_id?: number;
    id?: string;
    created_on?: string;
    subtitle?: string;
    guide?: any;
    modified_on?: string;
    name?: string;
    active?: boolean;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    moq?: MOQData;
    is_gift?: boolean;
    alt_text?: any;
    is_cod?: boolean;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    moq?: ApplicationItemMOQ;
    alt_text?: any;
    is_gift?: boolean;
    _custom_meta?: MetaFields[];
    is_cod?: boolean;
    _custom_json?: any;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type GetConfigMetadataResponse = {
    data: any[];
    values?: any[];
    condition?: any[];
};
type AttributeDetailsGroup = {
    priority: number;
    unit?: string;
    logo?: string;
    slug?: string;
    display_type: string;
    key?: string;
    is_active: boolean;
    name: string;
};
type AppConfigurationDetail = {
    priority: number;
    logo?: string;
    template_slugs?: string[];
    app_id: string;
    slug: string;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    name?: string;
    is_default: boolean;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    next: number;
    has_next: boolean;
    total_count: number;
    current: number;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    priority: number;
    default_key: string;
    logo?: string;
    app_id: string;
    key: string;
    is_active: boolean;
    name?: string;
    is_default: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    units?: any[];
    filter_types?: string[];
    key?: string;
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
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductConfig = {
    priority: number;
    title?: string;
    logo?: string;
    subtitle?: string;
    key: string;
    is_active: boolean;
    size?: ProductSize;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    priority: number;
    logo?: string;
    display_type: string;
    key: string;
    is_active: boolean;
    size: ProductSize;
    name: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    condition?: string;
    map_values?: any[];
    map?: any;
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
    value?: string;
};
type ConfigurationListingFilterConfig = {
    type: string;
    priority: number;
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    display_name?: string;
    key: string;
    is_active: boolean;
    name?: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    priority: number;
    logo?: string;
    key: string;
    is_active: boolean;
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
    type?: string;
    created_by?: any;
    modified_by?: any;
    product?: ConfigurationProduct;
    app_id: string;
    listing?: ConfigurationListing;
    created_on?: string;
    config_type: string;
    config_id?: string;
    modified_on?: string;
};
type AppCatalogConfiguration = {
    type?: string;
    created_by?: any;
    modified_by?: any;
    product?: ConfigurationProduct;
    app_id: string;
    id?: string;
    listing?: ConfigurationListing;
    created_on?: string;
    config_type: string;
    config_id?: string;
    modified_on?: string;
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
    product?: GetCatalogConfigurationDetailsProduct;
    app_id: string;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
    config_id?: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersValue = {
    currency_code?: string;
    display_format?: string;
    count?: number;
    max?: number;
    selected_max?: number;
    query_format?: string;
    is_selected: boolean;
    display: string;
    currency_symbol?: string;
    min?: number;
    selected_min?: number;
    value: any;
};
type ProductFiltersKey = {
    logo?: string;
    operators?: string[];
    kind?: string;
    display: string;
    name: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type ProductSortOn = {
    name?: string;
    is_selected?: boolean;
    value?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    operators: any;
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
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionSchedule = {
    duration?: number;
    cron?: string;
    end?: string;
    next_schedule?: NextSchedule[];
    start?: string;
};
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CreateCollection = {
    _custom_json?: any;
    priority?: number;
    modified_by?: UserInfo;
    logo: CollectionImage;
    meta?: any;
    sort_on?: string;
    published?: boolean;
    type: string;
    allow_sort?: boolean;
    seo?: SeoDetail;
    visible_facets_keys?: string[];
    banners: CollectionBanner;
    app_id: string;
    slug: string;
    allow_facets?: boolean;
    is_visible?: boolean;
    _schedule?: CollectionSchedule;
    tags?: string[];
    created_by?: UserInfo;
    _locale_language?: any;
    name: string;
    is_active?: boolean;
    query?: CollectionQuery[];
    badge?: CollectionBadge;
    description?: string;
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
type CollectionCreateResponse = {
    priority?: number;
    logo?: BannerImage;
    meta?: any;
    sort_on?: string;
    type?: string;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    app_id?: string;
    slug?: string;
    allow_facets?: boolean;
    _schedule?: any;
    name?: string;
    tag?: string[];
    cron?: any;
    is_active?: boolean;
    query?: CollectionQuery[];
    badge?: any;
    description?: string;
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
type Media1 = {
    type?: string;
    meta?: any;
    url: string;
};
type GetCollectionDetailNest = {
    priority?: number;
    logo?: Media1;
    meta?: any;
    type?: string;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    app_id?: string;
    slug?: string;
    allow_facets?: boolean;
    _schedule?: any;
    uid?: string;
    name?: string;
    tag?: string[];
    cron?: any;
    action?: Action;
    is_active?: boolean;
    query?: CollectionQuery[];
    badge?: any;
    description?: string;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    page?: Page;
    items?: GetCollectionDetailNest[];
};
type CollectionDetailResponse = {
    priority?: number;
    logo?: Media1;
    meta?: any;
    type?: string;
    allow_sort?: boolean;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    app_id?: string;
    slug?: string;
    allow_facets?: boolean;
    _schedule?: any;
    uid?: string;
    name?: string;
    tag?: string[];
    cron?: any;
    is_active?: boolean;
    query?: CollectionQuery[];
    badge?: any;
    description?: string;
};
type UpdateCollection = {
    priority?: number;
    modified_by?: UserInfo;
    logo?: CollectionImage;
    meta?: any;
    sort_on?: string;
    published?: boolean;
    type?: string;
    allow_sort?: boolean;
    seo?: SeoDetail;
    visible_facets_keys?: string[];
    banners?: CollectionBanner;
    slug?: string;
    allow_facets?: boolean;
    is_visible?: boolean;
    badge?: CollectionBadge;
    _schedule?: CollectionSchedule;
    tags?: string[];
    _locale_language?: any;
    name?: string;
    is_active?: boolean;
    query?: CollectionQuery[];
    _custom_json?: any;
    description?: string;
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
    message?: string;
    items_not_updated?: number[];
};
type Price1 = {
    currency_symbol?: string;
    min?: number;
    max?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductBrand = {
    logo?: Media1;
    uid?: number;
    name?: string;
    action?: Action;
};
type ProductDetailAttribute = {
    type?: string;
    key?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductListingDetail = {
    medias?: Media1[];
    image_nature?: string;
    discount?: string;
    price?: ProductListingPrice;
    brand?: ProductBrand;
    product_online_date?: string;
    type?: string;
    teaser_tag?: any;
    slug: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    short_description?: string;
    item_type?: string;
    rating_count?: number;
    rating?: number;
    promo_meta?: any;
    color?: string;
    sellable?: boolean;
    attributes?: any;
    uid?: number;
    tryouts?: string[];
    name?: string;
    highlights?: string[];
    similars?: string[];
    has_variant?: boolean;
    item_code?: string;
    description?: string;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    page?: Page;
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    count?: number;
    sellable_count?: number;
};
type CatalogInsightBrand = {
    article_freshness?: number;
    total_articles?: number;
    available_sizes?: number;
    total_sizes?: number;
    available_articles?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    opt_level: string;
    enabled?: boolean;
    brand_ids?: number[];
    company_id?: number;
    store_ids?: number[];
    platform?: string;
};
type CompanyOptIn = {
    opt_level: string;
    enabled: boolean;
    brand_ids: number[];
    created_by?: any;
    modified_by?: any;
    company_id: number;
    store_ids: number[];
    created_on: number;
    platform: string;
    modified_on: number;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    company_type?: string;
    uid?: number;
    name?: string;
    business_type?: string;
};
type CompanyBrandDetail = {
    company_id?: number;
    brand_id?: number;
    brand_name?: string;
    total_article?: number;
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
    timing?: any;
    address?: any;
    store_code?: string;
    company_id?: number;
    documents?: any[];
    display_name?: string;
    manager?: any;
    additional_contacts?: any[];
    created_on?: string;
    store_type?: string;
    uid?: number;
    modified_on?: string;
    name?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
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
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    type: string;
    format?: string;
    mandatory?: boolean;
    allowed_values?: string[];
    multi?: boolean;
    range?: AttributeSchemaRange;
};
type AttributeMasterDetails = {
    display_type: string;
};
type GenderDetail = {
    filters?: AttributeMasterFilter;
    meta?: AttributeMasterMeta;
    enabled_for_end_consumer?: boolean;
    departments?: string[];
    schema?: AttributeMaster;
    logo?: string;
    slug?: string;
    id?: string;
    is_nested?: boolean;
    description?: string;
    details?: AttributeMasterDetails;
    name?: string;
};
type ProductTemplateCategory = {
    template_slug?: string;
    slug?: string;
    slug_key?: string;
    uid?: number;
    name?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: ProductTemplateCategory[];
};
type PTErrorResponse = {
    message?: string;
    meta?: any;
    status?: number;
    errors?: any;
    code?: string;
};
type DepartmentCreateUpdate = {
    logo: string;
    priority_order: number;
    slug?: string;
    synonyms?: string[];
    _cls?: string;
    is_active?: boolean;
    uid?: number;
    tags?: string[];
    _custom_json?: any;
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
    username?: string;
    user_id?: string;
    _id?: string;
    contact?: string;
    uid?: string;
};
type GetDepartment = {
    page_size?: number;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    logo?: string;
    item_type?: string;
    priority_order?: number;
    slug?: string;
    synonyms?: string[];
    search?: string;
    created_on?: string;
    is_active?: boolean;
    uid?: number;
    page_no?: number;
    modified_on?: string;
    name?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    message?: string;
    meta?: any;
    status?: number;
    errors?: any;
    code?: string;
};
type UserDetail = {
    username: string;
    user_id: string;
    super_user?: boolean;
    contact?: string;
};
type DepartmentModel = {
    _custom_json?: any;
    created_by?: UserDetail;
    verified_on?: string;
    modified_by?: UserDetail;
    logo: string;
    priority_order: number;
    slug?: any;
    synonyms?: any[];
    _id?: any;
    created_on: string;
    _cls?: any;
    is_active?: boolean;
    verified_by?: UserDetail;
    uid?: number;
    modified_on: string;
    name: any;
};
type ProductTemplate = {
    tag?: string;
    created_by?: any;
    is_physical: boolean;
    modified_by?: any;
    departments?: string[];
    is_archived?: boolean;
    logo?: string;
    is_expirable: boolean;
    slug: string;
    categories?: string[];
    created_on?: string;
    description?: string;
    is_active?: boolean;
    attributes?: string[];
    modified_on?: string;
    name?: string;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    country_of_origin?: any;
    category_slug?: any;
    currency?: any;
    return_config?: any;
    teaser_tag?: any;
    multi_size?: any;
    no_of_boxes?: any;
    size_guide?: any;
    brand_uid?: any;
    product_publish?: any;
    slug?: any;
    short_description?: any;
    item_type?: any;
    tags?: any;
    product_group_tag?: any;
    hsn_code?: any;
    trader?: any;
    variants?: any;
    name?: any;
    sizes?: any;
    custom_order?: any;
    is_dependent?: any;
    highlights?: any;
    trader_type?: any;
    description?: any;
    is_active?: any;
    media?: any;
    item_code?: any;
    command?: any;
};
type GlobalValidation = {
    type?: string;
    properties?: Properties;
    definitions?: any;
    title?: string;
    required?: string[];
    description?: string;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    tag?: string;
    is_physical: boolean;
    departments?: string[];
    is_archived?: boolean;
    logo?: string;
    is_expirable: boolean;
    slug: string;
    categories?: string[];
    id?: string;
    description?: string;
    is_active?: boolean;
    attributes?: string[];
    name?: string;
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
    brand?: string[];
    templates?: string[];
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadsItems = {
    data?: ProductDownloadItemsData;
    created_by?: VerifiedBy;
    task_id?: string;
    status?: string;
    id?: string;
    seller_id?: number;
    completed_on?: string;
    url?: string;
    template_tags?: any;
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
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Media2 = {
    portrait: string;
    logo: string;
    landscape: string;
};
type Hierarchy = {
    department: number;
    l2: number;
    l1: number;
};
type CategoryRequestBody = {
    priority?: number;
    departments: number[];
    marketplaces?: CategoryMapping;
    level: number;
    slug?: string;
    synonyms?: string[];
    tryouts?: string[];
    is_active: boolean;
    media?: Media2;
    name: string;
    hierarchy?: Hierarchy[];
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    priority?: number;
    created_by?: any;
    modified_by?: any;
    departments: number[];
    marketplaces?: CategoryMapping;
    level: number;
    slug?: string;
    synonyms?: string[];
    modified_on?: string;
    id?: string;
    created_on?: string;
    tryouts?: string[];
    is_active: boolean;
    media?: Media2;
    uid?: number;
    name: string;
    hierarchy?: Hierarchy[];
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
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
    reporting_hsn?: string;
    hsn_code_id?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type Trader = {
    type?: string;
    address?: string[];
    name: any;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type ProductCreateUpdateSchemaV2 = {
    _custom_json?: any;
    tax_identifier: TaxIdentifier;
    country_of_origin: string;
    category_slug: string;
    net_quantity?: NetQuantity;
    template_tag: string;
    currency: string;
    variant_media?: any;
    return_config: ReturnConfig;
    variant_group?: any;
    is_image_less_product?: boolean;
    change_request_id?: any;
    teaser_tag?: TeaserTag;
    multi_size?: boolean;
    no_of_boxes?: number;
    size_guide?: string;
    brand_uid: number;
    product_publish?: ProductPublish;
    slug: string;
    short_description?: string;
    item_type: string;
    tags?: string[];
    product_group_tag?: string[];
    is_set?: boolean;
    requester?: string;
    trader: Trader[];
    variants?: any;
    uid?: number;
    name: string;
    attributes?: any;
    sizes: any[];
    custom_order?: CustomOrder;
    is_dependent?: boolean;
    departments: number[];
    company_id: number;
    highlights?: string[];
    action?: string;
    bulk_job_id?: string;
    is_active?: boolean;
    media?: Media1[];
    item_code: string;
    description?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Logo = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
};
type ReturnConfigResponse = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Image = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Product = {
    image_nature?: string;
    tax_identifier?: any;
    country_of_origin?: string;
    modified_by?: any;
    moq?: any;
    category?: any;
    category_slug?: string;
    net_quantity?: NetQuantityResponse;
    template_tag?: string;
    currency?: string;
    variant_media?: any;
    brand?: Brand;
    return_config?: ReturnConfigResponse;
    category_uid?: number;
    images?: Image[];
    variant_group?: any;
    is_image_less_product?: boolean;
    all_sizes?: any[];
    teaser_tag?: any;
    multi_size?: boolean;
    size_guide?: string;
    no_of_boxes?: number;
    brand_uid?: number;
    product_publish?: ProductPublished;
    slug?: string;
    id?: string;
    primary_color?: string;
    short_description?: string;
    item_type?: string;
    tags?: string[];
    product_group_tag?: string[];
    hsn_code?: string;
    is_set?: boolean;
    created_by?: any;
    pending?: string;
    created_on?: string;
    color?: string;
    stage?: string;
    verified_by?: VerifiedBy;
    uid?: number;
    variants?: any;
    trader?: any[];
    name?: string;
    sizes?: any[];
    attributes?: any;
    custom_order?: any;
    modified_on?: string;
    item_code?: string;
    verified_on?: string;
    is_dependent?: boolean;
    is_physical?: boolean;
    all_identifiers?: string[];
    departments?: number[];
    company_id?: number;
    is_expirable?: boolean;
    highlights?: string[];
    all_company_ids?: number[];
    description?: string;
    is_active?: boolean;
    media?: Media1[];
    _custom_json?: any;
    l3_mapping?: string[];
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type ProductVariants = {
    category_uid?: number;
    brand_uid?: number;
    media?: Media1[];
    uid?: number;
    item_code?: string;
    name?: string;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    unit?: string;
    modified_by?: any;
    logo?: string;
    schema: AttributeMaster;
    raw_key?: string;
    variant?: boolean;
    enabled_for_end_consumer?: boolean;
    slug: string;
    tags?: string[];
    created_by?: any;
    created_on?: string;
    modified_on?: string;
    name?: string;
    filters: AttributeMasterFilter;
    departments: string[];
    suggestion?: string;
    synonyms?: any;
    is_nested?: boolean;
    details: AttributeMasterDetails;
    description?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    primary?: boolean;
    gtin_type: string;
    gtin_value: string;
};
type AllSizes = {
    item_height: number;
    item_dimensions_unit_of_measure: string;
    identifiers?: ValidateIdentifier[];
    item_weight: number;
    item_weight_unit_of_measure: any;
    item_length: number;
    size: any;
    item_width: number;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
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
    custom_template_tag?: string;
    created_by?: UserInfo1;
    file_path?: string;
    cancelled_records?: any[];
    modified_by?: UserInfo1;
    failed?: number;
    failed_records?: any[];
    company_id: number;
    total?: number;
    created_on: string;
    stage?: string;
    template_tag?: string;
    is_active?: boolean;
    cancelled?: number;
    succeed?: number;
    tracking_url?: string;
    modified_on?: string;
};
type BulkResponse = {
    created_by?: UserInfo1;
    batch_id: string;
    modified_by?: UserInfo1;
    created_on: string;
    is_active?: boolean;
    modified_on?: string;
};
type UserDetail1 = {
    username?: string;
    user_id?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    created_by?: UserDetail1;
    file_path?: string;
    cancelled_records?: string[];
    template?: ProductTemplate;
    failed?: number;
    failed_records?: string[];
    modified_by?: UserDetail1;
    company_id?: number;
    total?: number;
    created_on?: string;
    stage?: string;
    template_tag?: string;
    is_active?: boolean;
    cancelled?: number;
    succeed?: number;
    modified_on?: string;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkProductRequest = {
    data: any[];
    company_id: number;
    batch_id: string;
    template_tag: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    company_id?: number;
    user: any;
    url: string;
};
type UserCommon = {
    username?: string;
    user_id?: string;
    company_id?: number;
};
type Items = {
    created_by?: UserCommon;
    file_path?: string;
    cancelled_records?: string[];
    modified_by?: UserCommon;
    failed?: number;
    failed_records?: string[];
    company_id?: number;
    total?: number;
    id?: string;
    created_on?: string;
    stage?: string;
    is_active?: boolean;
    cancelled?: number;
    succeed?: number;
    tracking_url?: string;
    modified_on?: string;
    retry?: number;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
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
type ItemQuery = {
    uid?: number;
    brand_uid?: number;
    item_code?: string;
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
    size_distribution: SizeDistribution;
    name?: string;
};
type InvSize = {
    item_height?: number;
    is_set?: boolean;
    price_transfer?: number;
    quantity: number;
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    identifiers: GTIN[];
    item_weight?: number;
    expiration_date?: string;
    set?: InventorySet;
    item_weight_unit_of_measure?: string;
    price?: number;
    price_effective: number;
    item_length?: number;
    currency: string;
    size: any;
    item_width?: number;
};
type InventoryRequest = {
    company_id: number;
    item: ItemQuery;
    sizes: InvSize[];
};
type InventoryResponse = {
    price_transfer?: number;
    quantity?: number;
    identifiers?: any;
    sellable_quantity?: number;
    seller_identifier?: string;
    store?: any;
    inventory_updated_on?: string;
    price?: number;
    price_effective?: number;
    item_id?: number;
    currency?: string;
    uid?: string;
    size?: string;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type CompanyMeta = {
    id: number;
};
type PriceMeta = {
    marked: number;
    updated_at?: string;
    tp_notes?: any;
    currency: string;
    effective: number;
    transfer: number;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type BrandMeta = {
    name: string;
    id: number;
};
type ReturnConfig1 = {
    time?: number;
    returnable?: boolean;
    unit?: string;
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
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type DimensionResponse = {
    length: number;
    unit: string;
    width: number;
    height: number;
    is_default: boolean;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type InventorySellerResponse = {
    tax_identifier?: any;
    country_of_origin: string;
    modified_by?: UserSerializer;
    meta?: any;
    company: CompanyMeta;
    price: PriceMeta;
    manufacturer: ManufacturerResponse;
    size: string;
    brand: BrandMeta;
    return_config?: ReturnConfig1;
    identifier: any;
    set?: InventorySet;
    store: StoreMeta;
    fynd_article_code: string;
    tags?: string[];
    is_set?: boolean;
    created_by?: UserSerializer;
    quantities?: Quantities;
    track_inventory?: boolean;
    fynd_meta?: any;
    total_quantity: number;
    stage?: string;
    fynd_item_code: string;
    uid: string;
    trader?: Trader1[];
    trace_id?: string;
    added_on_store?: string;
    dimension: DimensionResponse;
    weight: WeightResponse;
    fragile: boolean;
    seller_identifier: string;
    expiration_date?: string;
    item_id: number;
    is_active?: boolean;
    raw_meta?: any;
    _custom_json?: any;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type CompanyMeta1 = {
    id?: number;
};
type PriceArticle = {
    marked?: number;
    tp_notes?: any;
    currency?: string;
    effective?: number;
    transfer?: number;
};
type ManufacturerResponse1 = {
    address?: string;
    name?: string;
    is_default?: boolean;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type ReturnConfig2 = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type ArticleStoreResponse = {
    uid?: number;
    store_code?: string;
    name?: string;
    store_type?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    damaged?: Quantity;
    order_committed?: Quantity;
    sellable?: Quantity;
    not_available?: Quantity;
};
type Trader2 = {
    type?: string;
    address?: string[];
    name?: string;
};
type DimensionResponse1 = {
    height?: number;
    length?: number;
    width?: number;
    unit?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type GetInventories = {
    tax_identifier?: any;
    modified_by?: UserSerializer;
    country_of_origin?: string;
    company?: CompanyMeta1;
    price?: PriceArticle;
    manufacturer?: ManufacturerResponse1;
    size?: string;
    brand?: BrandMeta1;
    return_config?: ReturnConfig2;
    platforms?: any;
    identifier?: any;
    id?: string;
    date_meta?: DateMeta;
    store?: ArticleStoreResponse;
    tags?: string[];
    is_set?: boolean;
    created_by?: UserSerializer;
    quantities?: QuantitiesArticle;
    track_inventory?: boolean;
    inventory_updated_on?: string;
    total_quantity?: number;
    stage?: string;
    trader?: Trader2[];
    uid?: string;
    trace_id?: string;
    dimension?: DimensionResponse1;
    weight?: WeightResponse1;
    seller_identifier?: string;
    expiration_date?: string;
    item_id?: number;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    created_by?: any;
    file_path?: string;
    cancelled_records?: string[];
    failed?: number;
    failed_records?: string[];
    modified_by?: any;
    company_id?: number;
    id?: string;
    total?: number;
    created_on?: string;
    stage?: string;
    is_active?: boolean;
    cancelled?: number;
    succeed?: number;
    modified_on?: string;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    quantity?: number;
    store_code: string;
    item_dimensions_unit_of_measure?: string;
    seller_identifier: string;
    expiration_date?: string;
    price_marked?: number;
    total_quantity?: number;
    price?: number;
    price_effective?: number;
    item_weight_unit_of_measure?: string;
    currency?: string;
    tags?: string[];
    trace_id?: string;
};
type InventoryBulkRequest = {
    company_id: number;
    batch_id: string;
    sizes: InventoryJobPayload[];
    user?: any;
};
type InventoryExportRequest = {
    type?: string;
    store?: number[];
    brand?: number[];
};
type InventoryExportResponse = {
    task_id: string;
    status?: string;
    seller_id: number;
    request_params?: any;
    trigger_on?: string;
};
type InventoryExportJob = {
    task_id: string;
    status?: string;
    seller_id: number;
    completed_on?: string;
    url?: string;
    request_params?: any;
    trigger_on?: string;
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
    store_id: number;
    seller_identifier: string;
    expiration_date?: string;
    price_marked?: number;
    total_quantity?: number;
    price_effective?: number;
    tags?: string[];
    trace_id?: string;
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    meta?: any;
    company_id: number;
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
    message: string;
    items?: InventoryResponseItem[];
};
type HsnUpsert = {
    tax_on_mrp: boolean;
    tax1: number;
    tax_on_esp?: boolean;
    company_id: number;
    hs2_code: string;
    threshold1: number;
    tax2?: number;
    is_active?: boolean;
    uid?: number;
    threshold2?: number;
    hsn_code: string;
};
type HsnCodesObject = {
    tax_on_mrp?: boolean;
    tax1?: number;
    tax_on_esp?: boolean;
    company_id?: number;
    id?: string;
    hs2_code?: string;
    threshold1?: number;
    tax2?: number;
    modified_on?: string;
    threshold2?: number;
    hsn_code?: string;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    has_next?: boolean;
    item_total?: number;
    has_previous?: boolean;
    current?: string;
    size?: number;
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
    type: string;
    created_by?: any;
    reporting_hsn: string;
    modified_by?: any;
    taxes: TaxSlab[];
    country_code: string;
    created_on?: string;
    modified_on?: string;
    description: string;
    hsn_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    banners?: ImageUrls;
    logo?: Media;
    discount?: string;
    departments?: string[];
    action?: Action;
    slug?: string;
    uid?: number;
    name?: string;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    logo?: Media;
    priority_order?: number;
    slug?: string;
    uid?: number;
    name?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    banners?: ImageUrls;
    childs?: any[];
    slug?: string;
    action?: Action;
    uid?: number;
    _custom_json?: any;
    name?: string;
};
type SecondLevelChild = {
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
    slug?: string;
    action?: Action;
    uid?: number;
    _custom_json?: any;
    name?: string;
};
type Child = {
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
    slug?: string;
    action?: Action;
    uid?: number;
    _custom_json?: any;
    name?: string;
};
type CategoryItems = {
    banners?: ImageUrls;
    childs?: Child[];
    action?: Action;
    slug?: string;
    uid?: number;
    name?: string;
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
    page: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    operators?: any;
    sort_on?: ProductSortOn[];
};
type ProductDetail = {
    medias?: Media1[];
    image_nature?: string;
    brand?: ProductBrand;
    product_online_date?: string;
    type?: string;
    teaser_tag?: any;
    slug: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    short_description?: string;
    item_type?: string;
    rating_count?: number;
    rating?: number;
    promo_meta?: any;
    color?: string;
    attributes?: any;
    uid?: number;
    tryouts?: string[];
    name?: string;
    highlights?: string[];
    similars?: string[];
    has_variant?: boolean;
    item_code?: string;
    description?: string;
};
type InventoryPage = {
    type: string;
    has_next?: boolean;
    item_total: number;
    has_previous?: boolean;
    next_id?: string;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type ArticleQuery = {
    ignored_stores?: number[];
    size: string;
    item_id: number;
};
type AssignStoreArticle = {
    quantity?: number;
    meta?: any;
    article_assignment?: ArticleAssignment;
    query?: ArticleQuery;
    group_id?: string;
};
type AssignStore = {
    channel_identifier?: string;
    company_id?: number;
    app_id: string;
    channel_type?: string;
    store_ids?: number[];
    pincode: string;
    articles: AssignStoreArticle[];
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    quantity: number;
    s_city?: string;
    store_id?: number;
    status: boolean;
    meta?: any;
    company_id?: number;
    store_pincode?: number;
    price_marked?: number;
    _id?: string;
    price_effective?: number;
    item_id: number;
    article_assignment: ArticleAssignment1;
    strategy_wise_listing?: any[];
    group_id?: string;
    uid?: string;
    size: string;
    index?: number;
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
    country_code?: string;
    address_type?: string;
    pincode?: number;
    address1?: string;
    landmark?: string;
    country?: string;
    longitude?: number;
    address2?: string;
};
type UserSerializer2 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetCompanySerializer = {
    addresses?: GetAddressSerializer[];
    created_by?: UserSerializer2;
    verified_on?: string;
    modified_by?: UserSerializer2;
    business_type?: string;
    company_type?: string;
    created_on?: string;
    stage?: string;
    reject_reason?: string;
    verified_by?: UserSerializer2;
    uid?: number;
    modified_on?: string;
    name?: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    email?: string;
    name?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    weekday: string;
    closing?: LocationTimingSerializer;
    opening?: LocationTimingSerializer;
    open: boolean;
};
type InvoiceCredSerializer = {
    username?: string;
    enabled?: boolean;
    password?: string;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetLocationSerializer = {
    _custom_json?: any;
    phone_number: string;
    modified_by?: UserSerializer1;
    documents?: Document[];
    company?: GetCompanySerializer;
    product_return_config?: ProductReturnConfigSerializer;
    address: GetAddressSerializer;
    manager?: LocationManagerSerializer;
    notification_emails?: string[];
    timing?: LocationDayWiseSerializer[];
    created_by?: UserSerializer1;
    created_on?: string;
    stage?: string;
    verified_by?: UserSerializer1;
    uid?: number;
    modified_on?: string;
    name: string;
    verified_on?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    display_name: string;
    integration_type?: LocationIntegrationType;
    warnings?: any;
    code: string;
    store_type?: string;
    contact_numbers?: SellerPhoneNumber[];
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
    logo?: string;
    app_id: string;
    is_active?: boolean;
    uid: number;
    _custom_json?: any;
    name?: string;
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
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type CompanyTaxesSerializer = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type GetCompanyProfileSerializerResponse = {
    company_type: string;
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    notification_emails?: string[];
    warnings?: any;
    modified_on?: string;
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    mode?: string;
    created_on?: string;
    verified_on?: string;
    uid: number;
    stage?: string;
    created_by?: UserSerializer;
    contact_details?: ContactDetails;
    verified_by?: UserSerializer;
    taxes?: CompanyTaxesSerializer[];
    documents?: Document[];
    business_details?: BusinessDetails;
    business_info?: string;
    name?: string;
    modified_by?: UserSerializer;
    franchise_enabled?: boolean;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type CreateUpdateAddressSerializer = {
    latitude: number;
    city: string;
    longitude: number;
    country_code?: string;
    address_type: string;
    state: string;
    pincode: number;
    address2?: string;
    landmark?: string;
    address1: string;
    country: string;
};
type UpdateCompany = {
    business_info?: string;
    company_type?: string;
    name?: string;
    reject_reason?: string;
    documents?: Document[];
    _custom_json?: any;
    business_type?: string;
    contact_details?: ContactDetails;
    taxes?: CompanyTaxesSerializer1[];
    franchise_enabled?: boolean;
    business_details?: BusinessDetails;
    addresses?: CreateUpdateAddressSerializer[];
    notification_emails?: string[];
    warnings?: any;
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
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
    product?: DocumentsObj;
    store_documents?: DocumentsObj;
    uid?: number;
    store?: DocumentsObj;
    stage?: string;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    _custom_json?: any;
    _locale_language?: any;
    banner?: BrandBannerSerializer;
    warnings?: any;
    modified_on?: string;
    mode?: string;
    created_on?: string;
    description?: string;
    verified_on?: string;
    logo?: string;
    uid?: number;
    stage?: string;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    name: string;
    reject_reason?: string;
    modified_by?: UserSerializer;
    synonyms?: string[];
    slug_key?: string;
};
type CreateUpdateBrandRequestSerializer = {
    name: string;
    brand_tier?: string;
    _custom_json?: any;
    synonyms?: string[];
    _locale_language?: any;
    banner?: BrandBannerSerializer;
    description?: string;
    logo: string;
    uid?: number;
    company_id?: number;
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
    company_type: string;
    name?: string;
    reject_reason?: string;
    market_channels?: string[];
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    _custom_json?: any;
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    verified_by?: UserSerializer;
    stage?: string;
    created_on?: string;
    details?: CompanyDetails;
    verified_on?: string;
    uid?: number;
    addresses?: GetAddressSerializer[];
    notification_emails?: string[];
    modified_on?: string;
};
type CompanyBrandSerializer = {
    reject_reason?: string;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    company?: CompanySerializer;
    created_on?: string;
    verified_on?: string;
    uid?: number;
    warnings?: any;
    stage?: string;
    modified_on?: string;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
};
type CompanyBrandPostRequestSerializer = {
    company: number;
    uid?: number;
    brands: number[];
};
type HolidayDateSerializer = {
    end_date: string;
    start_date: string;
};
type HolidaySchemaSerializer = {
    date: HolidayDateSerializer;
    title: string;
    holiday_type: string;
};
type AddressSerializer = {
    latitude: number;
    city?: string;
    longitude: number;
    country_code?: string;
    address_type?: string;
    state?: string;
    pincode?: number;
    address2?: string;
    landmark?: string;
    address1?: string;
    country?: string;
};
type LocationSerializer = {
    timing?: LocationDayWiseSerializer[];
    product_return_config?: ProductReturnConfigSerializer;
    name: string;
    manager?: LocationManagerSerializer;
    store_type?: string;
    holiday?: HolidaySchemaSerializer[];
    _custom_json?: any;
    address: AddressSerializer;
    notification_emails?: string[];
    gst_credentials?: InvoiceDetailsSerializer;
    stage?: string;
    code: string;
    company: number;
    documents?: Document[];
    uid?: number;
    display_name: string;
    contact_numbers?: SellerPhoneNumber[];
    warnings?: any;
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
