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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, ShipmentStatus, Prices, PaymentModeInfo, ShipmentItemFulFillingStore, PlatformItem, GSTDetailsData, BagUnit, UserDataInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, TrackingList, FulfillingStore, Identifier, FinancialBreakup, OrderBrandName, BagStateMapper, CurrentStatus, BagConfigs, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagGST, OrderBagArticle, PlatformDeliveryAddress, OrderBags, OrderDetailsData, UserDetailsData, BagStatusHistory, Dimensions, Meta, CompanyDetails, DPDetailsData, ShipmentStatusData, InvoiceInfo, AffiliateMeta, ShipmentTimeStamp, DebugInfo, EinvoiceInfo, Formatted, BuyerDetails, LockData, ShipmentMeta, PDFLinks, AffiliateDetails, OrderingStoreDetails, ShipmentPayments, PlatformShipment, ShipmentInfoResponse, BillingStaffDetails, PlatformUserDetails, TransactionData, OrderMeta, TaxDetails, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Brand, B2BPODetails, BagMeta, AffiliateBagDetails, BagReturnableCancelableStatus, Dates, Attributes, Item, BagGSTDetails, StoreAddress, Document, StoreDocuments, EInvoicePortalDetails, StoreEwaybill, StoreEinvoice, StoreGstCredentials, StoreMeta, Store, ReturnConfig, Weight, Article, ArticleDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, Products, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderPriority, MarketPlacePdf, AffiliateBag, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderUser, UserData, OrderInfo, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, TaxInfo, ProcessingDates, LineItem, Shipment, ShippingInfo, BillingInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, ApplicationItemMOQ, MetaFields, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionQuery, BannerImage, ImageUrls, Media1, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponse, UserInfo, CollectionImage, CollectionBanner, CollectionBadge, CollectionSchedule, SeoDetail, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, Image, NetQuantityResponse, ProductPublished, ReturnConfigResponse, Trader, Logo, Product, ProductListingResponse, TaxIdentifier, NetQuantity, TeaserTag, ProductPublish, CustomOrder, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, CompanyMeta, QuantityBase, Quantities, DimensionResponse, PriceMeta, WeightResponse, ManufacturerResponse, ReturnConfig1, Trader1, BrandMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, CompanyMeta1, Quantity, QuantitiesArticle, DimensionResponse1, PriceArticle, ArticleStoreResponse, WeightResponse1, ManufacturerResponse1, ReturnConfig2, Trader2, BrandMeta1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, PageResponse, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, GetAddressSerializer, UserSerializer1, GetCompanySerializer, UserSerializer2, SellerPhoneNumber, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, ContactDetails, BusinessCountryInfo, Website, BusinessDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponDateMeta, Ownership, CouponAction, RuleDefinition, Validity, State, DisplayMetaDict, DisplayMeta, CouponSchedule, Rule, PostOrder, UsesRemaining, UsesRestriction, BulkBundleRestriction, PaymentAllowValue, PaymentModes, PriceRange, Restrictions, Validation, CouponAuthor, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, DisplayMeta1, PromotionAuthor, Ownership1, PromotionAction, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, Visibility, PromotionSchedule, PostOrder1, UsesRemaining1, UsesRestriction1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, PromotionDateMeta, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, ProductAvailability, CartProductIdentifer, ActionQuery, ProductAction, ProductImage, CategoryInfo, CartProduct, ProductPrice, ProductPriceInfo, Ownership2, AppliedPromotion, PromoMeta, CartProductInfo, DisplayBreakup, RawBreakup, LoyaltyPoints, CouponBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    title: string;
    ops_status: string;
    hex_code: string;
    status: string;
    actual_status: string;
};
type Prices = {
    price_marked?: number;
    price_effective?: number;
    transfer_price?: number;
    amount_paid_roundoff?: number;
    cashback?: number;
    fynd_credits?: number;
    cod_charges?: number;
    cashback_applied?: number;
    tax_collected_at_source?: number;
    refund_amount?: number;
    coupon_value?: number;
    discount?: number;
    refund_credit?: number;
    amount_paid?: number;
    value_of_good?: number;
    delivery_charge?: number;
    promotion_effective_discount?: number;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type PlatformItem = {
    l1_category?: string[];
    size?: string;
    image?: string[];
    can_cancel?: boolean;
    images?: string[];
    name?: string;
    code?: string;
    id?: number;
    can_return?: boolean;
    l3_category?: number;
    l3_category_name?: string;
    color?: string;
    department_id?: number;
};
type GSTDetailsData = {
    gstin_code: string;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    gst_fee: number;
    value_of_good: number;
};
type BagUnit = {
    ordering_channel: string;
    bag_id: number;
    total_shipment_bags: number;
    shipment_id: string;
    prices?: Prices;
    item?: PlatformItem;
    can_cancel?: boolean;
    can_return?: boolean;
    item_quantity: number;
    status: any;
    gst?: GSTDetailsData;
};
type UserDataInfo = {
    is_anonymous_user?: boolean;
    first_name?: string;
    gender?: string;
    email?: string;
    last_name?: string;
    mobile?: string;
    name?: string;
    uid?: number;
    avis_user_id?: string;
};
type ShipmentItem = {
    channel?: any;
    total_bags_count: number;
    payment_methods?: any;
    shipment_id?: string;
    shipment_status?: ShipmentStatus;
    prices?: Prices;
    shipment_created_at: string;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    fulfilling_centre: string;
    sla?: any;
    created_at: string;
    application?: any;
    id: string;
    bags?: BagUnit[];
    total_shipments_in_order: number;
    user?: UserDataInfo;
};
type FilterInfoOption = {
    name?: string;
    value?: string;
    text: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    value: string;
    type: string;
    text: string;
};
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
    page?: any;
    applied_filters?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type TrackingList = {
    is_current?: boolean;
    time?: string;
    text: string;
    is_passed?: boolean;
    status: string;
};
type FulfillingStore = {
    address: string;
    pincode: string;
    city: string;
    phone: string;
    code: string;
    country: string;
    id: number;
    state: string;
    meta: any;
    contact_person: string;
    store_name: string;
    fulfillment_channel: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    transfer_price: number;
    amount_paid_roundoff?: number;
    identifiers: Identifier;
    discount: number;
    coupon_effective_discount: number;
    coupon_value: number;
    refund_credit: number;
    amount_paid: number;
    gst_tag: string;
    cashback: number;
    cashback_applied: number;
    size: string;
    gst_tax_percentage: number;
    total_units: number;
    delivery_charge: number;
    price_marked: number;
    cod_charges: number;
    brand_calculated_amount: number;
    tax_collected_at_source?: number;
    hsn_code: string;
    fynd_credits: number;
    promotion_effective_discount: number;
    price_effective: number;
    item_name: string;
    gst_fee: number;
    added_to_fynd_cash: boolean;
    value_of_good: number;
};
type OrderBrandName = {
    company: string;
    brand_name: string;
    id: number;
    created_on: string;
    logo: string;
    modified_on?: string;
};
type BagStateMapper = {
    journey_type: string;
    app_facing?: boolean;
    bs_id: number;
    is_active?: boolean;
    notify_customer?: boolean;
    app_display_name?: string;
    state_type: string;
    name: string;
    app_state_name?: string;
    display_name: string;
};
type CurrentStatus = {
    bag_id?: number;
    shipment_id?: string;
    state_type?: string;
    delivery_partner_id?: number;
    created_at?: string;
    store_id?: number;
    delivery_awb_number?: string;
    bag_state_mapper?: BagStateMapper;
    state_id?: number;
    kafka_sync?: boolean;
    updated_at?: string;
    current_status_id: number;
    status?: string;
};
type BagConfigs = {
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    allow_force_return: boolean;
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
    mrp_promotion?: boolean;
    promotion_type?: string;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRules[];
    promo_id?: string;
    amount?: number;
    article_quantity?: number;
    promotion_name?: string;
};
type BagGST = {
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    brand_calculated_amount?: number;
    gst_fee?: number;
    hsn_code?: string;
    gst_tax_percentage?: number;
    value_of_good?: number;
    gst_tag?: string;
};
type OrderBagArticle = {
    uid?: string;
    return_config?: any;
    identifiers?: any;
};
type PlatformDeliveryAddress = {
    version?: string;
    pincode?: string;
    email?: string;
    address1?: string;
    address_category?: string;
    city?: string;
    phone?: string;
    contact_person?: string;
    country?: string;
    address2?: string;
    longitude?: number;
    state?: string;
    area?: string;
    latitude?: number;
    created_at?: string;
    updated_at?: string;
    landmark?: string;
    address_type?: string;
};
type OrderBags = {
    bag_id: number;
    financial_breakup?: FinancialBreakup;
    brand?: OrderBrandName;
    identifier?: string;
    seller_identifier?: string;
    can_cancel?: boolean;
    current_status?: CurrentStatus;
    bag_configs?: BagConfigs;
    entity_type?: string;
    quantity?: number;
    applied_promos?: AppliedPromos[];
    item?: PlatformItem;
    parent_promo_bags?: any;
    gst_details?: BagGST;
    article?: OrderBagArticle;
    delivery_address?: PlatformDeliveryAddress;
    prices?: Prices;
    line_number?: number;
    can_return?: boolean;
    display_name?: string;
};
type OrderDetailsData = {
    source?: string;
    ordering_channel?: string;
    fynd_order_id: string;
    order_date?: string;
    cod_charges?: string;
    order_value?: string;
    ordering_channel_logo?: any;
    affiliate_id?: string;
    tax_details?: any;
};
type UserDetailsData = {
    address: string;
    pincode: string;
    email?: string;
    city: string;
    phone: string;
    name: string;
    country: string;
    state: string;
};
type BagStatusHistory = {
    bag_id?: number;
    shipment_id?: string;
    state_type?: string;
    delivery_partner_id?: number;
    app_display_name?: string;
    forward?: boolean;
    reasons?: any[];
    created_at?: string;
    store_id?: number;
    bsh_id?: number;
    delivery_awb_number?: string;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    display_name?: string;
    kafka_sync?: boolean;
    updated_at?: string;
    status: string;
};
type Dimensions = {
    height?: number;
    length?: number;
    width?: number;
    unit?: string;
    is_default?: boolean;
};
type Meta = {
    dimension?: Dimensions;
};
type CompanyDetails = {
    company_id?: number;
    company_name?: string;
    company_cin?: string;
    manufacturer_address?: any;
};
type DPDetailsData = {
    pincode?: string;
    eway_bill_id?: string;
    name?: string;
    country?: string;
    id?: number;
    awb_no?: string;
    track_url?: string;
    gst_tag?: string;
};
type ShipmentStatusData = {
    bag_list?: string[];
    shipment_id?: string;
    created_at?: string;
    id?: number;
    status?: string;
};
type InvoiceInfo = {
    credit_note_id?: string;
    label_url?: string;
    invoice_url?: string;
    store_invoice_id?: string;
    updated_date?: string;
};
type AffiliateMeta = {
    is_priority?: boolean;
    channel_shipment_id?: string;
    size_level_total_qty?: number;
    employee_discount?: number;
    quantity?: number;
    box_type?: string;
    due_date?: string;
    coupon_code?: string;
    channel_order_id?: string;
    loyalty_discount?: number;
    order_item_id?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type EinvoiceInfo = {
    invoice?: any;
    credit_note?: any;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type BuyerDetails = {
    address: string;
    pincode: number;
    city: string;
    name: string;
    gstin: string;
    state: string;
    ajio_site_id?: string;
};
type LockData = {
    lock_message?: string;
    locked?: boolean;
    mto?: boolean;
};
type ShipmentMeta = {
    timestamp?: ShipmentTimeStamp;
    debug_info?: DebugInfo;
    return_awb_number?: string;
    external?: any;
    box_type?: string;
    einvoice_info?: EinvoiceInfo;
    marketplace_store_id?: string;
    formatted?: Formatted;
    dp_id?: string;
    shipment_weight?: number;
    dp_sort_key?: string;
    auto_trigger_dp_assignment_acf: boolean;
    assign_dp_from_sb?: boolean;
    return_details?: any;
    return_affiliate_shipment_id?: string;
    forward_affiliate_order_id?: string;
    bag_weight?: any;
    awb_number?: string;
    return_affiliate_order_id?: string;
    due_date?: string;
    b2c_buyer_details?: any;
    b2b_buyer_details?: BuyerDetails;
    fulfilment_priority_text?: string;
    weight: number;
    ewaybill_info?: any;
    lock_data?: LockData;
    forward_affiliate_shipment_id?: string;
    po_number?: string;
    dp_name?: string;
    store_invoice_updated_date?: string;
    order_type?: string;
    same_store_available: boolean;
    return_store_node?: number;
    packaging_name?: string;
    dp_options?: any;
    shipment_volumetric_weight?: number;
};
type PDFLinks = {
    b2b?: string;
    invoice_pos?: string;
    invoice?: string;
    label_a4?: string;
    invoice_a6?: string;
    delivery_challan_a4?: string;
    po_invoice?: string;
    label_a6?: string;
    label_type: string;
    label_pos?: string;
    invoice_type: string;
    label?: string;
    credit_note_url?: string;
    invoice_a4?: string;
};
type AffiliateDetails = {
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    shipment_meta: ShipmentMeta;
    affiliate_bag_id: string;
    affiliate_shipment_id: string;
    company_affiliate_tag?: string;
    affiliate_id?: string;
    affiliate_store_id: string;
    pdf_links?: PDFLinks;
    ad_id?: string;
};
type OrderingStoreDetails = {
    address: string;
    pincode: string;
    city: string;
    phone: string;
    code: string;
    country: string;
    meta: any;
    state: string;
    ordering_store_id: number;
    contact_person: string;
    store_name: string;
};
type ShipmentPayments = {
    mode?: string;
    source?: string;
    logo?: string;
};
type PlatformShipment = {
    tracking_list?: TrackingList[];
    delivery_slot?: any;
    fulfilling_store?: FulfillingStore;
    bags?: OrderBags[];
    total_items?: number;
    order?: OrderDetailsData;
    operational_status?: string;
    user_agent?: string;
    custom_meta?: any[];
    enable_dp_tracking?: boolean;
    billing_details?: UserDetailsData;
    shipment_id: string;
    bag_status_history?: BagStatusHistory[];
    meta?: Meta;
    company_details?: CompanyDetails;
    dp_details?: DPDetailsData;
    status?: ShipmentStatusData;
    payment_mode?: string;
    priority_text?: string;
    total_bags?: number;
    shipment_status?: string;
    invoice_id?: string;
    coupon?: any;
    platform_logo?: string;
    gst_details?: GSTDetailsData;
    packaging_type?: string;
    user?: UserDataInfo;
    shipment_quantity?: number;
    shipment_images?: string[];
    journey_type?: string;
    forward_shipment_id?: string;
    invoice?: InvoiceInfo;
    affiliate_details?: AffiliateDetails;
    ordering_store?: OrderingStoreDetails;
    picked_date?: string;
    prices?: Prices;
    lock_status?: boolean;
    vertical?: string;
    payments?: ShipmentPayments;
    fulfilment_priority?: number;
    payment_methods?: any;
    delivery_details?: UserDetailsData;
};
type ShipmentInfoResponse = {
    shipments?: PlatformShipment[];
    message?: string;
    success: boolean;
};
type BillingStaffDetails = {
    first_name?: string;
    user?: string;
    staff_id?: number;
    last_name?: string;
};
type PlatformUserDetails = {
    platform_user_last_name?: string;
    platform_user_first_name?: string;
    platform_user_id?: string;
};
type TransactionData = {
    unique_reference_number?: string;
    currency?: string;
    entity?: string;
    transaction_id?: string;
    payment_id?: string;
    terminal_id?: string;
    amount_paid?: string;
    status?: string;
};
type OrderMeta = {
    company_logo?: string;
    mongo_cart_id?: number;
    cart_id?: number;
    order_platform?: string;
    payment_type?: string;
    currency_symbol?: string;
    customer_note?: string;
    comment?: string;
    billing_staff_details?: BillingStaffDetails;
    files?: any[];
    staff?: any;
    platform_user_details?: PlatformUserDetails;
    transaction_data?: TransactionData;
    order_tags?: any[];
    ordering_store?: number;
    order_type?: string;
    extra_meta?: any;
    employee_id?: number;
    order_child_entities?: string[];
};
type TaxDetails = {
    gstin?: string;
    pan_no?: string;
};
type OrderDict = {
    fynd_order_id: string;
    order_date: string;
    prices?: Prices;
    meta?: OrderMeta;
    payment_methods?: any;
    tax_details?: TaxDetails;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    order?: OrderDict;
    success: boolean;
};
type SubLane = {
    text?: string;
    index?: number;
    total_items?: number;
    value?: string;
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
    display?: string;
    name?: string;
    value?: string;
};
type PlatformOrderItems = {
    channel?: PlatformChannel;
    payment_mode?: string;
    user_info?: UserDataInfo;
    order_created_time?: string;
    shipments?: PlatformShipment[];
    meta?: any;
    order_value?: number;
    total_order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    order_id?: string;
};
type OrderListingResponse = {
    message?: string;
    page?: Page;
    items?: PlatformOrderItems[];
    success?: boolean;
    total_count?: number;
    lane?: string;
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
    account_name?: string;
    last_location_recieved_at?: string;
    raw_status?: string;
    updated_time?: string;
    meta?: any;
    awb?: string;
    updated_at?: string;
    status?: string;
    reason?: string;
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
    s3_key?: string;
    request_details?: any;
    report_requested_at?: string;
    status?: string;
    report_id?: string;
    report_created_at?: string;
    report_type?: string;
    report_name?: string;
    display_name?: string;
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
    value?: string;
    type?: string;
};
type JioCodeUpsertResponse = {
    identifier?: string;
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
    success?: boolean;
    data?: any[];
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    company_id?: string;
    invoice?: any;
    store_code?: string;
    invoice_status?: string;
    batch_id: string;
    store_id?: string;
    do_invoice_label_generated: boolean;
    data?: any;
    label?: any;
    store_name?: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type FileResponse = {
    file_path?: string;
    tags?: string[];
    method?: string;
    cdn?: URL;
    content_type?: string;
    operation?: string;
    upload?: FileUploadResponse;
    size?: number;
    file_name?: string;
    namespace?: string;
};
type bulkListingData = {
    user_id?: string;
    store_id?: number;
    company_id?: number;
    uploaded_on?: string;
    store_code?: string;
    batch_id?: string;
    user_name?: string;
    id?: string;
    file_name?: string;
    excel_url?: string;
    total?: number;
    successful_shipments?: any[];
    status?: string;
    processing?: number;
    failed_shipments?: any[];
    failed?: number;
    processing_shipments?: string[];
    store_name?: string;
    successful?: number;
};
type BulkListingPage = {
    has_previous?: boolean;
    current?: number;
    total?: number;
    type?: string;
    size?: number;
    has_next?: boolean;
};
type BulkListingResponse = {
    error?: string;
    data?: bulkListingData[];
    page?: BulkListingPage;
    success?: boolean;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    qc_type?: string[];
    id?: number;
    display_name?: string;
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
    total_shipments_count?: number;
    company_id?: string;
    successful_shipment_ids?: string[];
    successful_shipments_count?: number;
    batch_id?: string;
    processing_shipments_count?: number;
    failed_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    failed_records?: string[];
    error?: string[];
    message?: string;
    user_id?: string;
    uploaded_on?: string;
    uploaded_by?: string;
    success?: string;
    data?: BulkActionDetailsDataField[];
    status?: boolean;
};
type Brand = {
    brand_id: number;
    credit_note_allowed?: boolean;
    invoice_prefix?: string;
    company: string;
    script_last_ran?: string;
    brand_name: string;
    is_virtual_invoice?: boolean;
    start_date?: string;
    created_on?: number;
    credit_note_expiry_days?: number;
    pickup_location?: string;
    logo?: string;
    modified_on?: number;
};
type B2BPODetails = {
    po_line_amount?: number;
    docker_number?: string;
    item_base_price?: number;
    po_tax_amount?: number;
    total_gst_percentage?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type AffiliateBagDetails = {
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    employee_discount?: number;
    affiliate_bag_id: string;
    loyalty_discount?: number;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type Attributes = {
    primary_material?: string;
    primary_color_hex?: string;
    gender?: string[];
    marketer_name?: string;
    primary_color?: string;
    brand_name?: string;
    marketer_address?: string;
    name?: string;
    essential?: string;
};
type Item = {
    l2_category?: string[];
    webstore_product_url?: string;
    brand: string;
    l3_category?: number;
    gender?: string;
    item_id: number;
    l1_category?: string[];
    image: string[];
    can_cancel?: boolean;
    meta?: any;
    l1_category_id?: number;
    size: string;
    attributes: Attributes;
    name: string;
    code?: string;
    brand_id: number;
    slug_key: string;
    color?: string;
    can_return?: boolean;
    branch_url?: string;
    l3_category_name?: string;
    l2_category_id?: number;
    last_updated_at?: string;
    department_id?: number;
};
type BagGSTDetails = {
    is_default_hsn_code?: boolean;
    igst_tax_percentage: number;
    sgst_tax_percentage: number;
    hsn_code_id: string;
    gstin_code?: string;
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    gst_fee: number;
    cgst_gst_fee: string;
    igst_gst_fee: string;
    hsn_code: string;
    sgst_gst_fee: string;
    gst_tax_percentage: number;
    cgst_tax_percentage: number;
    value_of_good: number;
    gst_tag: string;
};
type StoreAddress = {
    email?: string;
    address2?: string;
    longitude: number;
    state: string;
    updated_at: string;
    address1: string;
    area?: string;
    address_type: string;
    contact_person: string;
    phone: string;
    version?: string;
    pincode: number;
    address_category: string;
    city: string;
    country_code: string;
    country: string;
    created_at: string;
    latitude: number;
    landmark?: string;
};
type Document = {
    verified: boolean;
    ds_type: string;
    url?: string;
    legal_name: string;
    value: string;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    password?: string;
    user?: string;
    username?: string;
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
type StoreMeta = {
    documents?: StoreDocuments;
    timing?: any[];
    einvoice_portal_details?: EInvoicePortalDetails;
    notification_emails?: string[];
    ewaybill_portal_details?: any;
    gst_number?: string;
    product_return_config?: any;
    gst_credentials: StoreGstCredentials;
    additional_contact_details?: any;
    stage: string;
    display_name: string;
};
type Store = {
    vat_no?: string;
    s_id: string;
    address2?: string;
    location_type: string;
    longitude: number;
    state: string;
    updated_at?: string;
    brand_store_tags?: string[];
    fulfillment_channel: string;
    store_address_json?: StoreAddress;
    company_id: number;
    login_username: string;
    address1: string;
    meta: StoreMeta;
    store_email: string;
    contact_person: string;
    store_active_from?: string;
    alohomora_user_id?: number;
    is_active?: boolean;
    phone: number;
    mall_name?: string;
    name: string;
    code?: string;
    is_archived?: boolean;
    brand_id?: any;
    order_integration_id?: string;
    packaging_material_count?: number;
    pincode: string;
    city: string;
    mall_area?: string;
    country: string;
    created_at: string;
    is_enabled_for_recon?: boolean;
    latitude: number;
    parent_store_id?: number;
};
type ReturnConfig = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type Weight = {
    unit?: string;
    shipping?: number;
    is_default?: boolean;
};
type Article = {
    dimensions?: Dimensions;
    return_config?: ReturnConfig;
    weight?: Weight;
    raw_meta?: any;
    seller_identifier: string;
    is_set?: boolean;
    a_set?: any;
    identifiers: Identifier;
    _id: string;
    code?: string;
    uid: string;
    size: string;
    child_details?: any;
    esp_modified?: any;
};
type ArticleDetails = {
    status?: any;
};
type BagDetailsPlatformResponse = {
    financial_breakup: FinancialBreakup[];
    original_bag_list?: number[];
    brand: Brand;
    operational_status?: string;
    b_type?: string;
    restore_promos?: any;
    identifier?: string;
    tags?: string[];
    seller_identifier?: string;
    shipment_id?: string;
    b_id: number;
    bag_update_time?: number;
    current_status: BagStatusHistory;
    meta?: BagMeta;
    bag_status_history?: BagStatusHistory;
    current_operational_status: BagStatusHistory;
    affiliate_bag_details: AffiliateBagDetails;
    status: BagReturnableCancelableStatus;
    entity_type?: string;
    dates?: Dates;
    no_of_bags_order?: number;
    applied_promos?: any[];
    parent_promo_bags?: any;
    item: Item;
    quantity?: number;
    reasons?: any[];
    bag_status: BagStatusHistory[];
    qc_required?: any;
    gst_details: BagGSTDetails;
    journey_type: string;
    order_integration_id?: string;
    restore_coupon?: boolean;
    affiliate_details?: AffiliateDetails;
    ordering_store?: Store;
    article: Article;
    prices: Prices;
    line_number?: number;
    article_details?: ArticleDetails;
    display_name?: string;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    page_type: string;
    current: number;
    item_total: number;
    size: number;
    has_next: boolean;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    message?: string;
    error?: string;
    status?: number;
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
    reason_ids?: number[];
    store_id: number;
    affiliate_id?: string;
    item_id?: string;
    bag_id?: number;
    mongo_article_id?: string;
    fynd_order_id?: string;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    set_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    reason_text: string;
    affiliate_id?: string;
    id?: string;
    affiliate_bag_id?: string;
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    entities: Entities[];
    action: string;
    entity_type: string;
};
type Bags = {
    affiliate_bag_id?: string;
    bag_id?: number;
    affiliate_order_id?: string;
    is_locked?: boolean;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    bags?: Bags[];
    shipment_id?: string;
    is_bag_locked?: boolean;
    affiliate_id?: string;
    status?: string;
    is_shipment_locked?: boolean;
    lock_status?: boolean;
    affiliate_shipment_id?: string;
    original_filter?: OriginalFilter;
};
type UpdateShipmentLockResponse = {
    message?: string;
    check_response?: CheckResponse[];
    success?: boolean;
};
type AnnouncementResponse = {
    description?: string;
    created_at?: string;
    logo_url?: string;
    to_datetime?: string;
    platform_id?: string;
    company_id?: number;
    title?: string;
    id: number;
    from_datetime?: string;
    platform_name?: string;
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
    identifier: string;
    data_updates?: DataUpdates;
    products?: Products[];
    reasons?: ReasonsData;
};
type StatuesRequest = {
    status?: string;
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    task?: boolean;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    meta?: any;
    status?: number;
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
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    affiliate_store_id: string;
    price_marked: number;
    transfer_price: number;
    identifier: any;
    hsn_code_id: string;
    amount_paid: number;
    fynd_store_id: string;
    store_id: number;
    item_size: string;
    quantity: number;
    discount: number;
    seller_identifier: string;
    avl_qty: number;
    item_id: number;
    modified_on: string;
    _id: string;
    unit_price: number;
    price_effective: number;
    affiliate_meta: any;
    sku: string;
    company_id: number;
    pdf_links?: MarketPlacePdf;
    delivery_charge: number;
};
type ArticleDetails1 = {
    dimension: any;
    attributes: any;
    _id: string;
    brand_id: number;
    quantity: number;
    weight: any;
    category: any;
};
type ShipmentDetails = {
    meta?: any;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    dp_id?: number;
    shipments: number;
    fulfillment_id: number;
    box_type?: string;
};
type LocationDetails = {
    fulfillment_id: number;
    fulfillment_type: string;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    source: string;
    shipment: ShipmentDetails[];
    action: string;
    identifier: string;
    payment_mode: string;
    journey: string;
    location_details?: LocationDetails;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderUser = {
    city: string;
    phone: number;
    state: string;
    email: string;
    country: string;
    address2?: string;
    mobile: number;
    address1?: string;
    pincode: string;
    last_name: string;
    first_name: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderInfo = {
    coupon?: string;
    order_priority?: OrderPriority;
    bags: AffiliateBag[];
    delivery_charges: number;
    shipment?: ShipmentData;
    order_value: number;
    items: any;
    payment?: any;
    cod_charges: number;
    payment_mode: string;
    user: UserData;
    billing_address: OrderUser;
    discount: number;
    affiliate_order_id?: string;
    shipping_address: OrderUser;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    created_at: string;
    meta?: AffiliateAppConfigMeta[];
    description?: string;
    secret: string;
    token: string;
    owner: string;
    name: string;
    id: string;
    updated_at: string;
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
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
    inventory?: AffiliateInventoryStoreConfig;
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
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    affiliate: Affiliate;
    create_user?: boolean;
    article_lookup?: string;
    store_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    bag_end_state?: string;
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
    id: number;
    slug: string;
    display_text: string;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l1_detail?: string;
    l3_detail?: string;
    type: string;
    ticket_id?: string;
    message: string;
    l2_detail?: string;
    createdat: string;
    bag_id?: number;
    user: string;
    ticket_url?: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type PostHistoryData = {
    message: string;
    user_name: string;
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
    order_id: string;
    shipment_id: number;
    phone_number: number;
    customer_name: string;
    message: string;
    payment_mode: string;
    country_code: string;
    amount_paid: number;
    brand_name: string;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    slug: string;
    bag_id: number;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type Meta1 = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    meta: Meta1;
    remarks?: string;
    shipment_id?: string;
    status?: string;
    bag_list?: number[];
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
    shipment_ids?: string[];
    qc_required: string;
    order_type: string;
    dp_id: number;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type Tax = {
    breakup?: any[];
    amount: any;
    name: string;
    rate: number;
};
type Charge = {
    tax?: Tax;
    type: string;
    amount: any;
    code?: string;
    name: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type ProcessingDates = {
    dispatch_by_date?: string;
    pack_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_after_date?: string;
    confirm_by_date?: string;
    dp_pickup_slot?: any;
};
type LineItem = {
    charges?: Charge[];
    meta?: any;
    seller_identifier: string;
    external_line_id?: string;
    custom_messasge?: string;
    quantity?: number;
};
type Shipment = {
    external_shipment_id?: string;
    meta?: any;
    processing_dates?: ProcessingDates;
    location_id: number;
    priority?: number;
    line_items: LineItem[];
};
type ShippingInfo = {
    gender?: string;
    last_name?: string;
    landmark?: string;
    city: string;
    address_type?: string;
    state: string;
    address2?: string;
    house_no?: string;
    state_code?: string;
    title?: string;
    first_name: string;
    external_customer_code?: string;
    country: string;
    alternate_email?: string;
    middle_name?: string;
    address1: string;
    pincode: string;
    primary_mobile_number: string;
    country_code?: string;
    primary_email: string;
    floor_no?: string;
    customer_code?: string;
    geo_location?: any;
    alternate_mobile_number?: string;
    shipping_type?: string;
    slot?: any[];
};
type BillingInfo = {
    gender?: string;
    last_name?: string;
    city: string;
    state: string;
    address2?: string;
    house_no?: string;
    state_code?: string;
    title?: string;
    first_name: string;
    external_customer_code?: string;
    country: string;
    alternate_email?: string;
    middle_name?: string;
    address1: string;
    pincode: string;
    primary_mobile_number: string;
    country_code?: string;
    primary_email: string;
    floor_no?: string;
    customer_code?: string;
    alternate_mobile_number?: string;
};
type PaymentMethod = {
    meta?: any;
    refund_by: string;
    amount: number;
    mode: string;
    name: string;
    transaction_data?: any;
    collect_by: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type CreateOrderAPI = {
    charges?: Charge[];
    meta?: any;
    tax_info?: TaxInfo;
    external_creation_date?: string;
    currency_info?: any;
    shipments: Shipment[];
    shipping_info: ShippingInfo;
    billing_info: BillingInfo;
    payment_info: PaymentInfo;
    external_order_id?: string;
};
type CreateOrderErrorReponse = {
    meta?: string;
    info?: any;
    status: number;
    request_id?: string;
    message: string;
    stack_trace?: string;
    code?: string;
    exception?: string;
};
type PaymentMethods = {
    refund_by?: string;
    collect_by?: string;
    mode?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    logo_url?: any;
    lock_states?: string[];
    location_reassignment?: boolean;
    payment_info?: CreateChannelPaymentInfo;
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
    message?: string[];
    success?: boolean;
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
    app_id?: string;
    _custom_json?: any;
    result: SearchKeywordResult;
    is_active?: boolean;
    words?: string[];
};
type GetSearchWordsData = {
    app_id?: string;
    _custom_json?: any;
    result?: any;
    is_active?: boolean;
    words?: string[];
    uid?: string;
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
    params?: any;
    query?: any;
    url?: string;
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
    logo?: Media;
    display?: string;
    _custom_json?: any;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    _custom_json?: any;
    is_active?: boolean;
    words?: string[];
    results?: AutocompleteResult[];
};
type GetAutocompleteWordsData = {
    app_id?: string;
    _custom_json?: any;
    words?: string[];
    results?: any[];
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    results?: any[];
};
type ProductBundleItem = {
    product_uid: number;
    allow_remove?: boolean;
    auto_select?: boolean;
    max_quantity: number;
    min_quantity: number;
    auto_add_to_cart?: boolean;
};
type GetProductBundleCreateResponse = {
    company_id?: number;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    modified_by?: any;
    meta?: any;
    created_by?: any;
    name: string;
    is_active: boolean;
    created_on?: string;
    logo?: string;
    slug: string;
    id?: string;
    choice: string;
    modified_on?: string;
    products: ProductBundleItem[];
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    company_id?: number;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    modified_by?: any;
    meta?: any;
    created_by?: any;
    name: string;
    is_active: boolean;
    created_on?: string;
    logo?: string;
    slug: string;
    choice: string;
    modified_on?: string;
    products: ProductBundleItem[];
};
type ProductBundleUpdateRequest = {
    company_id?: number;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    modified_by?: any;
    meta?: any;
    name: string;
    is_active: boolean;
    logo?: string;
    slug: string;
    choice: string;
    modified_on?: string;
    products: ProductBundleItem[];
};
type Size = {
    quantity?: number;
    value?: string;
    is_available?: boolean;
    display?: string;
};
type Price = {
    max_marked?: number;
    max_effective?: number;
    min_marked?: number;
    currency?: string;
    min_effective?: number;
};
type LimitedProductData = {
    item_code?: string;
    quantity?: number;
    country_of_origin?: string;
    attributes?: any;
    name?: string;
    sizes?: string[];
    price?: any;
    images?: string[];
    slug?: string;
    short_description?: string;
    identifier?: any;
    uid?: number;
};
type GetProducts = {
    product_uid?: number;
    allow_remove?: boolean;
    auto_select?: boolean;
    max_quantity?: number;
    min_quantity?: number;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    price?: Price;
    product_details?: LimitedProductData;
};
type GetProductBundleResponse = {
    company_id?: number;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    meta?: any;
    name?: string;
    is_active?: boolean;
    logo?: string;
    slug?: string;
    choice?: string;
    products?: GetProducts[];
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
    title: string;
    description?: string;
    modified_by?: any;
    subtitle?: string;
    active?: boolean;
    name: string;
    guide?: Guide;
    created_by?: any;
    created_on?: string;
    image?: string;
    id?: string;
    brand_id?: number;
    modified_on?: string;
    tag?: string;
};
type SizeGuideResponse = {
    company_id?: number;
    title?: string;
    modified_by?: any;
    subtitle?: string;
    active?: boolean;
    created_by?: any;
    name?: string;
    guide?: any;
    created_on?: string;
    id?: string;
    brand_id?: number;
    modified_on?: string;
    tag?: string;
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
    moq?: MOQData;
    alt_text?: any;
    is_gift?: boolean;
    is_cod?: boolean;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
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
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    _custom_json?: any;
    moq?: ApplicationItemMOQ;
    _custom_meta?: MetaFields[];
    alt_text?: any;
    is_gift?: boolean;
    is_cod?: boolean;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    data: any[];
    condition?: any[];
    values?: any[];
};
type PageResponseType = {
    current: number;
    next: number;
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
    unit?: string;
    key?: string;
    name: string;
    is_active: boolean;
    logo?: string;
    slug?: string;
    priority: number;
    display_type: string;
};
type AppConfigurationDetail = {
    app_id: string;
    name?: string;
    attributes?: AttributeDetailsGroup[];
    is_active: boolean;
    template_slugs?: string[];
    logo?: string;
    slug: string;
    is_default: boolean;
    priority: number;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    app_id: string;
    key: string;
    name?: string;
    is_active: boolean;
    logo?: string;
    is_default: boolean;
    default_key: string;
    priority: number;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    compare?: any;
    variant?: any;
    detail?: any;
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
    display?: string;
    filter_types?: string[];
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
type ConfigurationProductConfig = {
    title?: string;
    subtitle?: string;
    key: string;
    is_active: boolean;
    logo?: string;
    size?: ProductSize;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    key: string;
    name: string;
    is_active: boolean;
    logo?: string;
    size: ProductSize;
    priority: number;
    display_type: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationListingSortConfig = {
    key: string;
    name?: string;
    is_active: boolean;
    logo?: string;
    priority: number;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
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
    key: string;
    name?: string;
    type: string;
    is_active: boolean;
    value_config?: ConfigurationListingFilterValue;
    logo?: string;
    display_name?: string;
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
type AppCatalogConfiguration = {
    app_id: string;
    config_id?: string;
    modified_by?: any;
    product?: ConfigurationProduct;
    created_by?: any;
    listing?: ConfigurationListing;
    type?: string;
    created_on?: string;
    id?: string;
    modified_on?: string;
    config_type: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    app_id: string;
    config_id?: string;
    modified_by?: any;
    product?: ConfigurationProduct;
    created_by?: any;
    listing?: ConfigurationListing;
    type?: string;
    created_on?: string;
    modified_on?: string;
    config_type: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    app_id: string;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
    config_type: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    is_selected?: boolean;
    value?: string;
    name?: string;
};
type ProductFiltersKey = {
    name: string;
    kind?: string;
    logo?: string;
    display: string;
    operators?: string[];
};
type ProductFiltersValue = {
    min?: number;
    count?: number;
    currency_symbol?: string;
    max?: number;
    selected_min?: number;
    currency_code?: string;
    display_format?: string;
    value: any;
    is_selected: boolean;
    display: string;
    query_format?: string;
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
type CollectionQuery = {
    value: any[];
    op: string;
    attribute: string;
};
type BannerImage = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type Media1 = {
    url: string;
    type?: string;
    meta?: any;
};
type GetCollectionDetailNest = {
    meta?: any;
    visible_facets_keys?: string[];
    query?: CollectionQuery[];
    priority?: number;
    tag?: string[];
    allow_facets?: boolean;
    name?: string;
    is_active?: boolean;
    banners?: ImageUrls;
    slug?: string;
    description?: string;
    badge?: any;
    type?: string;
    logo?: Media1;
    _schedule?: any;
    uid?: string;
    app_id?: string;
    action?: Action;
    allow_sort?: boolean;
    cron?: any;
};
type CollectionListingFilterTag = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilterType = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    page?: Page;
    filters?: CollectionListingFilter;
};
type UserInfo = {
    email?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
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
    cron?: string;
    end?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
    start?: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CreateCollection = {
    meta?: any;
    created_by?: UserInfo;
    visible_facets_keys?: string[];
    query?: CollectionQuery[];
    priority?: number;
    allow_facets?: boolean;
    name: string;
    is_active?: boolean;
    banners: CollectionBanner;
    slug: string;
    description?: string;
    modified_by?: UserInfo;
    badge?: CollectionBadge;
    _locale_language?: any;
    type: string;
    logo: CollectionImage;
    _schedule?: CollectionSchedule;
    is_visible?: boolean;
    sort_on?: string;
    app_id: string;
    seo?: SeoDetail;
    _custom_json?: any;
    published?: boolean;
    tags?: string[];
    allow_sort?: boolean;
};
type CollectionCreateResponse = {
    meta?: any;
    visible_facets_keys?: string[];
    query?: CollectionQuery[];
    priority?: number;
    tag?: string[];
    allow_facets?: boolean;
    name?: string;
    is_active?: boolean;
    banners?: ImageUrls;
    slug?: string;
    description?: string;
    badge?: any;
    type?: string;
    logo?: BannerImage;
    _schedule?: any;
    sort_on?: string;
    app_id?: string;
    allow_sort?: boolean;
    cron?: any;
};
type CollectionDetailResponse = {
    meta?: any;
    visible_facets_keys?: string[];
    query?: CollectionQuery[];
    priority?: number;
    tag?: string[];
    allow_facets?: boolean;
    name?: string;
    is_active?: boolean;
    banners?: ImageUrls;
    slug?: string;
    description?: string;
    badge?: any;
    type?: string;
    logo?: Media1;
    _schedule?: any;
    uid?: string;
    app_id?: string;
    allow_sort?: boolean;
    cron?: any;
};
type UpdateCollection = {
    meta?: any;
    visible_facets_keys?: string[];
    query?: CollectionQuery[];
    priority?: number;
    allow_facets?: boolean;
    name?: string;
    is_active?: boolean;
    banners?: CollectionBanner;
    slug?: string;
    description?: string;
    modified_by?: UserInfo;
    badge?: CollectionBadge;
    _locale_language?: any;
    type?: string;
    logo?: CollectionImage;
    _schedule?: CollectionSchedule;
    is_visible?: boolean;
    sort_on?: string;
    seo?: SeoDetail;
    _custom_json?: any;
    published?: boolean;
    tags?: string[];
    allow_sort?: boolean;
};
type Price1 = {
    min?: number;
    currency_symbol?: string;
    max?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductDetailAttribute = {
    value?: string;
    key?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductBrand = {
    action?: Action;
    logo?: Media1;
    uid?: number;
    name?: string;
};
type ProductListingDetail = {
    item_code?: string;
    similars?: string[];
    attributes?: any;
    rating?: number;
    medias?: Media1[];
    highlights?: string[];
    image_nature?: string;
    tryouts?: string[];
    name?: string;
    price?: ProductListingPrice;
    color?: string;
    teaser_tag?: any;
    slug: string;
    discount?: string;
    description?: string;
    product_online_date?: string;
    type?: string;
    rating_count?: number;
    has_variant?: boolean;
    uid?: number;
    promo_meta?: any;
    sellable?: boolean;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_type?: string;
    short_description?: string;
    brand?: ProductBrand;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    page?: Page;
    filters?: ProductFilters[];
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
    total_articles?: number;
    article_freshness?: number;
    name?: string;
    available_sizes?: number;
    total_sizes?: number;
    available_articles?: number;
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
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    company_id?: number;
    platform?: string;
    brand_ids?: number[];
    store_ids?: number[];
    opt_level: string;
    enabled?: boolean;
};
type CompanyOptIn = {
    company_id: number;
    modified_by?: any;
    created_by?: any;
    platform: string;
    created_on: number;
    brand_ids: number[];
    store_ids: number[];
    opt_level: string;
    enabled: boolean;
    modified_on: number;
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
    store?: number;
    brand?: number;
    company?: string;
};
type StoreDetail = {
    documents?: any[];
    company_id?: number;
    additional_contacts?: any[];
    store_code?: string;
    name?: string;
    address?: any;
    created_on?: string;
    store_type?: string;
    timing?: any;
    display_name?: string;
    manager?: any;
    uid?: number;
    modified_on?: string;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeMasterFilter = {
    priority?: number;
    depends_on?: string[];
    indexing: boolean;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    format?: string;
    mandatory?: boolean;
    allowed_values?: string[];
    type: string;
    multi?: boolean;
    range?: AttributeSchemaRange;
};
type GenderDetail = {
    details?: AttributeMasterDetails;
    description?: string;
    meta?: AttributeMasterMeta;
    is_nested?: boolean;
    name?: string;
    logo?: string;
    departments?: string[];
    slug?: string;
    enabled_for_end_consumer?: boolean;
    id?: string;
    filters?: AttributeMasterFilter;
    schema?: AttributeMaster;
};
type CategoriesResponse = {
    slug_key?: string;
    name?: string;
    template_slug?: string;
    slug?: string;
    uid?: number;
};
type ProdcutTemplateCategoriesResponse = {
    items?: CategoriesResponse[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    status?: number;
    meta?: any;
    code?: string;
    errors?: any;
};
type UserSerializer = {
    user_id?: string;
    username?: string;
    contact?: string;
    uid?: string;
    _id?: string;
};
type GetDepartment = {
    synonyms?: string[];
    page_no?: number;
    modified_by?: UserSerializer;
    priority_order?: number;
    search?: string;
    page_size?: number;
    created_by?: UserSerializer;
    name?: string;
    is_active?: boolean;
    created_on?: string;
    logo?: string;
    item_type?: string;
    slug?: string;
    uid?: number;
    modified_on?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    status?: number;
    meta?: any;
    code?: string;
    errors?: any;
};
type DepartmentCreateUpdate = {
    synonyms?: string[];
    slug?: string;
    _custom_json?: any;
    priority_order: number;
    name: string;
    _cls?: string;
    is_active?: boolean;
    logo: string;
    tags?: string[];
    platforms?: any;
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
    contact?: string;
    user_id: string;
    username: string;
};
type DepartmentModel = {
    synonyms?: any[];
    slug?: any;
    modified_by?: UserDetail;
    _custom_json?: any;
    priority_order: number;
    created_by?: UserDetail;
    name: any;
    _id?: any;
    _cls?: any;
    is_active?: boolean;
    created_on: string;
    logo: string;
    verified_by?: UserDetail;
    verified_on?: string;
    uid?: number;
    modified_on: string;
};
type ProductTemplate = {
    description?: string;
    is_expirable: boolean;
    modified_by?: any;
    created_by?: any;
    name?: string;
    attributes?: string[];
    is_active?: boolean;
    created_on?: string;
    logo?: string;
    departments?: string[];
    categories?: string[];
    slug: string;
    is_archived?: boolean;
    is_physical: boolean;
    modified_on?: string;
    tag?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    item_code?: any;
    command?: any;
    highlights?: any;
    country_of_origin?: any;
    name?: any;
    currency?: any;
    is_active?: any;
    teaser_tag?: any;
    slug?: any;
    product_publish?: any;
    product_group_tag?: any;
    trader_type?: any;
    size_guide?: any;
    description?: any;
    media?: any;
    multi_size?: any;
    hsn_code?: any;
    custom_order?: any;
    is_dependent?: any;
    category_slug?: any;
    variants?: any;
    trader?: any;
    return_config?: any;
    no_of_boxes?: any;
    item_type?: any;
    tags?: any;
    sizes?: any;
    short_description?: any;
    brand_uid?: any;
};
type GlobalValidation = {
    definitions?: any;
    title?: string;
    description?: string;
    properties?: Properties;
    type?: string;
    required?: string[];
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    description?: string;
    is_expirable: boolean;
    name?: string;
    attributes?: string[];
    is_active?: boolean;
    logo?: string;
    departments?: string[];
    categories?: string[];
    slug: string;
    id?: string;
    is_archived?: boolean;
    is_physical: boolean;
    tag?: string;
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
    template_tags?: any;
    task_id?: string;
    status?: string;
    completed_on?: string;
    created_by?: VerifiedBy;
    seller_id?: number;
    data?: ProductDownloadItemsData;
    trigger_on?: string;
    id?: string;
    url?: string;
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
    landscape: string;
    logo: string;
    portrait: string;
};
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type Category = {
    synonyms?: string[];
    modified_on?: string;
    modified_by?: any;
    media?: Media2;
    tryouts?: string[];
    created_by?: any;
    name: string;
    hierarchy?: Hierarchy[];
    marketplaces?: CategoryMapping;
    is_active: boolean;
    created_on?: string;
    departments: number[];
    level: number;
    slug?: string;
    id?: string;
    uid?: number;
    priority?: number;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    synonyms?: string[];
    media?: Media2;
    tryouts?: string[];
    name: string;
    hierarchy?: Hierarchy[];
    marketplaces?: CategoryMapping;
    is_active: boolean;
    departments: number[];
    level: number;
    slug?: string;
    priority?: number;
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
type Image = {
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
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
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Trader = {
    name: any;
    type?: string;
    address?: string[];
};
type Logo = {
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type Product = {
    item_code?: string;
    tax_identifier?: any;
    is_image_less_product?: boolean;
    created_by?: any;
    attributes?: any;
    created_on?: string;
    images?: Image[];
    category_uid?: number;
    verified_by?: VerifiedBy;
    highlights?: string[];
    all_identifiers?: string[];
    image_nature?: string;
    all_sizes?: any[];
    country_of_origin?: string;
    net_quantity?: NetQuantityResponse;
    variant_group?: any;
    name?: string;
    currency?: string;
    is_active?: boolean;
    color?: string;
    slug?: string;
    teaser_tag?: any;
    verified_on?: string;
    id?: string;
    product_publish?: ProductPublished;
    modified_on?: string;
    product_group_tag?: string[];
    company_id?: number;
    template_tag?: string;
    size_guide?: string;
    description?: string;
    modified_by?: any;
    all_company_ids?: number[];
    media?: Media1[];
    multi_size?: boolean;
    moq?: any;
    stage?: string;
    departments?: number[];
    custom_order?: any;
    hsn_code?: string;
    variant_media?: any;
    is_dependent?: boolean;
    uid?: number;
    category_slug?: string;
    is_physical?: boolean;
    is_set?: boolean;
    l3_mapping?: string[];
    is_expirable?: boolean;
    _custom_json?: any;
    variants?: any;
    category?: any;
    pending?: string;
    primary_color?: string;
    return_config?: ReturnConfigResponse;
    trader?: Trader[];
    no_of_boxes?: number;
    item_type?: string;
    sizes?: any[];
    tags?: string[];
    short_description?: string;
    brand_uid?: number;
    brand?: Brand;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    reporting_hsn?: string;
    hsn_code?: string;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
    manufacturing_time?: number;
};
type ProductCreateUpdateSchemaV2 = {
    item_code: string;
    bulk_job_id?: string;
    tax_identifier: TaxIdentifier;
    is_image_less_product?: boolean;
    attributes?: any;
    highlights?: string[];
    change_request_id?: any;
    country_of_origin: string;
    net_quantity?: NetQuantity;
    variant_group?: any;
    name: string;
    currency: string;
    is_active?: boolean;
    slug: string;
    teaser_tag?: TeaserTag;
    product_publish?: ProductPublish;
    product_group_tag?: string[];
    company_id: number;
    template_tag: string;
    size_guide?: string;
    description?: string;
    media?: Media1[];
    multi_size?: boolean;
    custom_order?: CustomOrder;
    departments: number[];
    variant_media?: any;
    is_dependent?: boolean;
    uid?: number;
    category_slug: string;
    is_set?: boolean;
    variants?: any;
    _custom_json?: any;
    trader: Trader[];
    return_config: ReturnConfig;
    no_of_boxes?: number;
    action?: string;
    requester?: string;
    item_type: string;
    tags?: string[];
    sizes: any[];
    short_description?: string;
    brand_uid: number;
};
type ProductVariants = {
    item_code?: string;
    media?: Media1[];
    name?: string;
    category_uid?: number;
    brand_uid?: number;
    uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    synonyms?: any;
    unit?: string;
    created_by?: any;
    created_on?: string;
    name?: string;
    slug: string;
    enabled_for_end_consumer?: boolean;
    filters: AttributeMasterFilter;
    modified_on?: string;
    schema: AttributeMaster;
    suggestion?: string;
    details: AttributeMasterDetails;
    description?: string;
    modified_by?: any;
    logo?: string;
    departments: string[];
    variant?: boolean;
    raw_key?: string;
    is_nested?: boolean;
    tags?: string[];
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: string;
};
type AllSizes = {
    item_weight_unit_of_measure: any;
    identifiers?: ValidateIdentifier[];
    item_width: number;
    item_dimensions_unit_of_measure: string;
    item_height: number;
    item_weight: number;
    item_length: number;
    size: any;
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
    company_id?: number;
    template_tag?: string;
    modified_by?: UserDetail1;
    cancelled?: number;
    created_by?: UserDetail1;
    cancelled_records?: string[];
    total?: number;
    is_active?: boolean;
    failed?: number;
    created_on?: string;
    stage?: string;
    file_path?: string;
    template?: ProductTemplate;
    succeed?: number;
    failed_records?: string[];
    modified_on?: string;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    email?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type BulkJob = {
    company_id: number;
    template_tag?: string;
    modified_by?: UserInfo1;
    cancelled?: number;
    created_by?: UserInfo1;
    tracking_url?: string;
    cancelled_records?: any[];
    total?: number;
    is_active?: boolean;
    created_on: string;
    failed?: number;
    stage?: string;
    file_path?: string;
    custom_template_tag?: string;
    succeed?: number;
    failed_records?: any[];
    modified_on?: string;
};
type BulkResponse = {
    modified_by?: UserInfo1;
    created_by?: UserInfo1;
    is_active?: boolean;
    created_on: string;
    batch_id: string;
    modified_on?: string;
};
type BulkProductRequest = {
    company_id: number;
    data: any[];
    template_tag: string;
    batch_id: string;
};
type ProductTagsViewResponse = {
    items?: string[];
};
type UserCommon = {
    company_id?: number;
    user_id?: string;
    username?: string;
};
type Items = {
    company_id?: number;
    modified_by?: UserCommon;
    cancelled?: number;
    retry?: number;
    created_by?: UserCommon;
    tracking_url?: string;
    cancelled_records?: string[];
    total?: number;
    file_path?: string;
    created_on?: string;
    failed?: number;
    stage?: string;
    is_active?: boolean;
    succeed?: number;
    id?: string;
    failed_records?: string[];
    modified_on?: string;
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
    item_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    quantity?: number;
    identifiers?: any;
    store?: any;
    sellable_quantity?: number;
    price_effective?: number;
    currency?: string;
    seller_identifier?: string;
    inventory_updated_on?: string;
    price?: number;
    size?: string;
    price_transfer?: number;
    item_id?: number;
    uid?: string;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type GTIN = {
    gtin_type: string;
    primary?: boolean;
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
    is_set?: boolean;
    quantity: number;
    item_weight_unit_of_measure?: string;
    identifiers: GTIN[];
    set?: InventorySet;
    item_width?: number;
    item_dimensions_unit_of_measure?: string;
    price_effective: number;
    item_height?: number;
    store_code: string;
    currency: string;
    price?: number;
    size: any;
    item_length?: number;
    item_weight?: number;
    price_transfer?: number;
    expiration_date?: string;
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
type CompanyMeta = {
    id: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    damaged?: QuantityBase;
    sellable?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
};
type DimensionResponse = {
    unit: string;
    width: number;
    height: number;
    length: number;
    is_default: boolean;
};
type PriceMeta = {
    transfer: number;
    tp_notes?: any;
    marked: number;
    currency: string;
    updated_at?: string;
    effective: number;
};
type WeightResponse = {
    is_default: boolean;
    shipping: number;
    unit: string;
};
type ManufacturerResponse = {
    is_default: boolean;
    name: string;
    address: string;
};
type ReturnConfig1 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Trader1 = {
    name: string;
    type: string;
    address: string[];
};
type BrandMeta = {
    id: number;
    name: string;
};
type InventorySellerResponse = {
    total_quantity: number;
    company: CompanyMeta;
    tax_identifier?: any;
    meta?: any;
    track_inventory?: boolean;
    created_by?: UserSerializer;
    quantities?: Quantities;
    identifier: any;
    country_of_origin: string;
    fynd_meta?: any;
    trace_id?: string;
    is_active?: boolean;
    dimension: DimensionResponse;
    price: PriceMeta;
    size: string;
    expiration_date?: string;
    item_id: number;
    fynd_article_code: string;
    modified_by?: UserSerializer;
    store: StoreMeta;
    seller_identifier: string;
    added_on_store?: string;
    weight: WeightResponse;
    stage?: string;
    fynd_item_code: string;
    uid: string;
    fragile: boolean;
    manufacturer: ManufacturerResponse;
    is_set?: boolean;
    _custom_json?: any;
    set?: InventorySet;
    return_config?: ReturnConfig1;
    trader?: Trader1[];
    tags?: string[];
    brand: BrandMeta;
    raw_meta?: any;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type CompanyMeta1 = {
    id?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    damaged?: Quantity;
    sellable?: Quantity;
    not_available?: Quantity;
    order_committed?: Quantity;
};
type DimensionResponse1 = {
    length?: number;
    unit?: string;
    height?: number;
    width?: number;
};
type PriceArticle = {
    transfer?: number;
    tp_notes?: any;
    marked?: number;
    currency?: string;
    effective?: number;
};
type ArticleStoreResponse = {
    store_code?: string;
    uid?: number;
    name?: string;
    store_type?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    name?: string;
    address?: string;
};
type ReturnConfig2 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Trader2 = {
    name?: string;
    type?: string;
    address?: string[];
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type GetInventories = {
    total_quantity?: number;
    tax_identifier?: any;
    company?: CompanyMeta1;
    track_inventory?: boolean;
    created_by?: UserSerializer;
    quantities?: QuantitiesArticle;
    identifier?: any;
    country_of_origin?: string;
    trace_id?: string;
    dimension?: DimensionResponse1;
    price?: PriceArticle;
    size?: string;
    expiration_date?: string;
    item_id?: number;
    id?: string;
    modified_by?: UserSerializer;
    store?: ArticleStoreResponse;
    seller_identifier?: string;
    inventory_updated_on?: string;
    weight?: WeightResponse1;
    stage?: string;
    date_meta?: DateMeta;
    platforms?: any;
    manufacturer?: ManufacturerResponse1;
    uid?: string;
    is_set?: boolean;
    return_config?: ReturnConfig2;
    trader?: Trader2[];
    tags?: string[];
    brand?: BrandMeta1;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    company_id?: number;
    modified_by?: any;
    cancelled?: number;
    created_by?: any;
    cancelled_records?: string[];
    total?: number;
    file_path?: string;
    created_on?: string;
    failed?: number;
    is_active?: boolean;
    stage?: string;
    succeed?: number;
    id?: string;
    failed_records?: string[];
    modified_on?: string;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    quantity?: number;
    total_quantity?: number;
    item_weight_unit_of_measure?: string;
    store_code: string;
    seller_identifier: string;
    price_effective?: number;
    currency?: string;
    item_dimensions_unit_of_measure?: string;
    trace_id?: string;
    tags?: string[];
    price?: number;
    expiration_date?: string;
    price_marked?: number;
};
type InventoryBulkRequest = {
    company_id: number;
    sizes: InventoryJobPayload[];
    batch_id: string;
    user?: any;
};
type InventoryExportJob = {
    task_id: string;
    status?: string;
    completed_on?: string;
    request_params?: any;
    seller_id: number;
    trigger_on?: string;
    url?: string;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    task_id: string;
    status?: string;
    request_params?: any;
    seller_id: number;
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
    store_id: number;
    total_quantity?: number;
    seller_identifier: string;
    price_effective?: number;
    trace_id?: string;
    tags?: string[];
    expiration_date?: string;
    price_marked?: number;
};
type InventoryRequestSchemaV2 = {
    company_id: number;
    payload?: InventoryPayload[];
    meta?: any;
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
    company_id: number;
    tax1: number;
    threshold1: number;
    threshold2?: number;
    hs2_code: string;
    tax2?: number;
    tax_on_esp?: boolean;
    is_active?: boolean;
    hsn_code: string;
    uid?: number;
};
type HsnCodesObject = {
    tax_on_mrp?: boolean;
    company_id?: number;
    tax1?: number;
    threshold1?: number;
    threshold2?: number;
    hs2_code?: string;
    tax2?: number;
    tax_on_esp?: boolean;
    hsn_code?: string;
    id?: string;
    modified_on?: string;
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
    rate: number;
    effective_date: string;
    threshold: number;
};
type HSNDataInsertV2 = {
    hsn_code_id?: string;
    description: string;
    modified_by?: any;
    created_by?: any;
    taxes: TaxSlab[];
    type: string;
    created_on?: string;
    reporting_hsn: string;
    hsn_code: string;
    modified_on?: string;
    country_code: string;
};
type PageResponse = {
    has_previous?: boolean;
    item_total?: number;
    size?: number;
    current?: string;
    has_next?: boolean;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    uid?: number;
    name?: string;
    action?: Action;
    logo?: Media;
    departments?: string[];
    banners?: ImageUrls;
    slug?: string;
    discount?: string;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    priority_order?: number;
    name?: string;
    logo?: Media;
    slug?: string;
    uid?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    _custom_json?: any;
    name?: string;
    action?: Action;
    banners?: ImageUrls;
    slug?: string;
    childs?: any[];
    uid?: number;
};
type SecondLevelChild = {
    _custom_json?: any;
    name?: string;
    action?: Action;
    banners?: ImageUrls;
    slug?: string;
    childs?: ThirdLevelChild[];
    uid?: number;
};
type Child = {
    _custom_json?: any;
    name?: string;
    action?: Action;
    banners?: ImageUrls;
    slug?: string;
    childs?: SecondLevelChild[];
    uid?: number;
};
type CategoryItems = {
    name?: string;
    action?: Action;
    banners?: ImageUrls;
    slug?: string;
    childs?: Child[];
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
    sort_on?: ProductSortOn[];
    operators?: any;
    items?: ProductListingDetail[];
    page: Page;
    filters?: ProductFilters[];
};
type ProductDetail = {
    item_code?: string;
    similars?: string[];
    attributes?: any;
    rating?: number;
    medias?: Media1[];
    highlights?: string[];
    image_nature?: string;
    tryouts?: string[];
    name?: string;
    color?: string;
    teaser_tag?: any;
    slug: string;
    description?: string;
    product_online_date?: string;
    type?: string;
    rating_count?: number;
    has_variant?: boolean;
    uid?: number;
    promo_meta?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_type?: string;
    short_description?: string;
    brand?: ProductBrand;
};
type InventoryPage = {
    has_previous?: boolean;
    item_total: number;
    type: string;
    next_id?: string;
    has_next?: boolean;
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
    item_id: number;
    ignored_stores?: number[];
    size: string;
};
type AssignStoreArticle = {
    quantity?: number;
    article_assignment?: ArticleAssignment;
    meta?: any;
    group_id?: string;
    query?: ArticleQuery;
};
type AssignStore = {
    company_id?: number;
    app_id: string;
    pincode: string;
    articles: AssignStoreArticle[];
    channel_type?: string;
    store_ids?: number[];
    channel_identifier?: string;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    quantity: number;
    company_id?: number;
    article_assignment: ArticleAssignment1;
    store_id?: number;
    status: boolean;
    meta?: any;
    strategy_wise_listing?: any[];
    group_id?: string;
    price_effective?: number;
    size: string;
    index?: number;
    store_pincode?: number;
    price_marked?: number;
    item_id: number;
    uid?: string;
    _id?: string;
    s_city?: string;
};
type GetAddressSerializer = {
    address2?: string;
    state?: string;
    address_type?: string;
    pincode?: number;
    longitude?: number;
    landmark?: string;
    latitude?: number;
    city?: string;
    address1?: string;
    country?: string;
    country_code?: string;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetCompanySerializer = {
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer1;
    business_type?: string;
    created_by?: UserSerializer1;
    name?: string;
    company_type?: string;
    reject_reason?: string;
    created_on?: string;
    stage?: string;
    verified_by?: UserSerializer1;
    verified_on?: string;
    uid?: number;
    modified_on?: string;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
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
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
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
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type GetLocationSerializer = {
    company?: GetCompanySerializer;
    created_by?: UserSerializer2;
    address: GetAddressSerializer;
    created_on?: string;
    store_type?: string;
    verified_by?: UserSerializer2;
    manager?: LocationManagerSerializer;
    name: string;
    warnings?: any;
    timing?: LocationDayWiseSerializer[];
    verified_on?: string;
    modified_on?: string;
    documents?: Document[];
    modified_by?: UserSerializer2;
    contact_numbers?: SellerPhoneNumber[];
    stage?: string;
    phone_number: string;
    display_name: string;
    product_return_config?: ProductReturnConfigSerializer;
    uid?: number;
    _custom_json?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    code: string;
    notification_emails?: string[];
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
type ApplicationDepartment = {
    app_id: string;
    _custom_json?: any;
    name?: string;
    is_active?: boolean;
    logo?: string;
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
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
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
type CompanyTaxesSerializer = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type GetCompanyProfileSerializerResponse = {
    business_info?: string;
    mode?: string;
    _custom_json?: any;
    contact_details?: ContactDetails;
    business_country_info?: BusinessCountryInfo;
    modified_on?: string;
    verified_by?: UserSerializer;
    verified_on?: string;
    business_type: string;
    documents?: Document[];
    created_on?: string;
    uid: number;
    business_details?: BusinessDetails;
    taxes?: CompanyTaxesSerializer[];
    warnings?: any;
    stage?: string;
    name?: string;
    notification_emails?: string[];
    franchise_enabled?: boolean;
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    company_type: string;
};
type CreateUpdateAddressSerializer = {
    latitude: number;
    address1: string;
    country: string;
    address_type: string;
    longitude: number;
    city: string;
    state: string;
    address2?: string;
    country_code?: string;
    landmark?: string;
    pincode: number;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type UpdateCompany = {
    business_info?: string;
    _custom_json?: any;
    warnings?: any;
    contact_details?: ContactDetails;
    business_details?: BusinessDetails;
    business_type?: string;
    documents?: Document[];
    name?: string;
    reject_reason?: string;
    notification_emails?: string[];
    franchise_enabled?: boolean;
    addresses?: CreateUpdateAddressSerializer[];
    taxes?: CompanyTaxesSerializer1[];
    company_type?: string;
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
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
    store_documents?: DocumentsObj;
    stage?: string;
    product?: DocumentsObj;
    uid?: number;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    mode?: string;
    _custom_json?: any;
    modified_on?: string;
    logo?: string;
    verified_by?: UserSerializer;
    verified_on?: string;
    description?: string;
    banner?: BrandBannerSerializer;
    created_on?: string;
    slug_key?: string;
    uid?: number;
    _locale_language?: any;
    warnings?: any;
    stage?: string;
    name: string;
    reject_reason?: string;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    synonyms?: string[];
};
type CreateUpdateBrandRequestSerializer = {
    _locale_language?: any;
    description?: string;
    _custom_json?: any;
    banner?: BrandBannerSerializer;
    brand_tier?: string;
    name: string;
    synonyms?: string[];
    company_id?: number;
    logo: string;
    uid?: number;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanySerializer = {
    modified_by?: UserSerializer;
    details?: CompanyDetails;
    verified_on?: string;
    _custom_json?: any;
    business_type: string;
    created_by?: UserSerializer;
    name?: string;
    market_channels?: string[];
    addresses?: GetAddressSerializer[];
    notification_emails?: string[];
    reject_reason?: string;
    stage?: string;
    business_country_info?: BusinessCountryInfo;
    created_on?: string;
    modified_on?: string;
    verified_by?: UserSerializer;
    uid?: number;
    company_type: string;
};
type CompanyBrandSerializer = {
    modified_by?: UserSerializer;
    verified_on?: string;
    warnings?: any;
    brand?: GetBrandResponseSerializer;
    created_by?: UserSerializer;
    stage?: string;
    reject_reason?: string;
    company?: CompanySerializer;
    created_on?: string;
    modified_on?: string;
    verified_by?: UserSerializer;
    uid?: number;
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
    latitude: number;
    country?: string;
    address1?: string;
    address_type?: string;
    longitude: number;
    city?: string;
    state?: string;
    address2?: string;
    country_code?: string;
    landmark?: string;
    pincode?: number;
};
type LocationSerializer = {
    address: AddressSerializer;
    display_name: string;
    _custom_json?: any;
    warnings?: any;
    manager?: LocationManagerSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    holiday?: HolidaySchemaSerializer[];
    documents?: Document[];
    name: string;
    contact_numbers?: SellerPhoneNumber[];
    stage?: string;
    timing?: LocationDayWiseSerializer[];
    company: number;
    notification_emails?: string[];
    code: string;
    gst_credentials?: InvoiceDetailsSerializer;
    store_type?: string;
    uid?: number;
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
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type RuleDefinition = {
    scope?: string[];
    applicable_on: string;
    auto_apply?: boolean;
    currency_code?: string;
    value_type: string;
    type: string;
    is_exact?: boolean;
    calculate_on: string;
};
type Validity = {
    priority?: number;
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    description?: string;
    apply?: DisplayMetaDict;
    subtitle?: string;
    remove?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    title?: string;
};
type CouponSchedule = {
    end?: string;
    start?: string;
    next_schedule?: any[];
    duration?: number;
    cron?: string;
};
type Rule = {
    value?: number;
    key?: number;
    min?: number;
    max?: number;
    discount_qty?: number;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UsesRemaining = {
    total?: number;
    user?: number;
    app?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    types?: string[];
    networks?: string[];
    uses?: PaymentAllowValue;
    codes?: string[];
};
type PriceRange = {
    max?: number;
    min?: number;
};
type Restrictions = {
    post_order?: PostOrder;
    coupon_allowed?: boolean;
    uses?: UsesRestriction;
    user_groups?: number[];
    platforms?: string[];
    ordering_stores?: number[];
    bulk_bundle?: BulkBundleRestriction;
    payments?: any;
    price_range?: PriceRange;
};
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CouponAdd = {
    date_meta?: CouponDateMeta;
    ownership: Ownership;
    action?: CouponAction;
    tags?: string[];
    rule_definition: RuleDefinition;
    validity: Validity;
    identifiers: Identifier;
    state?: State;
    display_meta: DisplayMeta;
    _schedule?: CouponSchedule;
    rule: Rule[];
    restrictions?: Restrictions;
    code: string;
    validation?: Validation;
    author?: CouponAuthor;
    type_slug: string;
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
    date_meta?: CouponDateMeta;
    ownership: Ownership;
    action?: CouponAction;
    tags?: string[];
    rule_definition: RuleDefinition;
    validity: Validity;
    identifiers: Identifier;
    state?: State;
    display_meta: DisplayMeta;
    _schedule?: CouponSchedule;
    rule: Rule[];
    restrictions?: Restrictions;
    code: string;
    validation?: Validation;
    author?: CouponAuthor;
    type_slug: string;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
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
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type CompareObject = {
    greater_than?: number;
    greater_than_equals?: number;
    less_than_equals?: number;
    equals?: number;
    less_than?: number;
};
type ItemCriteria = {
    item_id?: number[];
    item_company?: number[];
    item_exclude_brand?: number[];
    item_store?: number[];
    item_brand?: number[];
    item_size?: string[];
    cart_quantity?: CompareObject;
    item_exclude_category?: number[];
    buy_rules?: string[];
    item_exclude_sku?: string[];
    item_sku?: string[];
    cart_total?: CompareObject;
    all_items?: boolean;
    item_exclude_store?: number[];
    item_category?: number[];
    item_exclude_company?: number[];
};
type DiscountOffer = {
    min_offer_quantity?: number;
    discount_price?: number;
    code?: string;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    discount_percentage?: number;
    discount_amount?: number;
};
type DiscountRule = {
    item_criteria: ItemCriteria;
    discount_type: string;
    offer: DiscountOffer;
    buy_condition: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionSchedule = {
    published: boolean;
    end?: string;
    start: string;
    duration?: number;
    next_schedule?: any[];
    cron?: string;
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
    end?: string;
    start?: string;
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
    uses: UsesRestriction1;
    user_groups?: number[];
    platforms?: string[];
    order_quantity?: number;
    anonymous_users?: boolean;
    user_registered?: UserRegistered;
    user_id?: string[];
    payments?: PromotionPaymentModes[];
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PromotionListItem = {
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    author?: PromotionAuthor;
    application_id: string;
    promo_group: string;
    ownership: Ownership1;
    currency?: string;
    promotion_type: string;
    apply_all_discount?: boolean;
    code?: string;
    _custom_json?: any;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    visiblility?: Visibility;
    mode: string;
    apply_priority?: number;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    restrictions?: Restrictions1;
    stackable?: boolean;
    date_meta?: PromotionDateMeta;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    author?: PromotionAuthor;
    application_id: string;
    promo_group: string;
    ownership: Ownership1;
    currency?: string;
    promotion_type: string;
    apply_all_discount?: boolean;
    code?: string;
    _custom_json?: any;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    visiblility?: Visibility;
    mode: string;
    apply_priority?: number;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    restrictions?: Restrictions1;
    stackable?: boolean;
    date_meta?: PromotionDateMeta;
};
type PromotionUpdate = {
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    author?: PromotionAuthor;
    application_id: string;
    promo_group: string;
    ownership: Ownership1;
    currency?: string;
    promotion_type: string;
    apply_all_discount?: boolean;
    code?: string;
    _custom_json?: any;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    visiblility?: Visibility;
    mode: string;
    apply_priority?: number;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    restrictions?: Restrictions1;
    stackable?: boolean;
    date_meta?: PromotionDateMeta;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type CartItem = {
    quantity?: number;
    product_id: string;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type BasePrice = {
    marked?: number;
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    uid?: string;
    quantity?: number;
    product_group_tags?: string[];
    store?: BaseInfo;
    price?: ArticlePriceInfo;
    parent_item_identifiers?: any;
    type?: string;
    _custom_json?: any;
    extra_meta?: any;
    seller?: BaseInfo;
    size?: string;
};
type ProductAvailability = {
    sizes?: string[];
    is_valid?: boolean;
    other_store_quantity?: number;
    out_of_stock?: boolean;
    deliverable?: boolean;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    type?: string;
    url?: string;
    query?: ActionQuery;
};
type ProductImage = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    uid?: number;
    action?: ProductAction;
    name?: string;
    slug?: string;
    images?: ProductImage[];
    type?: string;
    categories?: CategoryInfo[];
    brand?: BaseInfo;
};
type ProductPrice = {
    currency_code?: string;
    selling?: number;
    currency_symbol?: string;
    marked?: number;
    add_on?: number;
    effective?: number;
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
    amount?: number;
    ownership?: Ownership2;
    promotion_type?: string;
    promo_id?: string;
    mrp_promotion?: boolean;
    article_quantity?: number;
    offer_text?: string;
};
type PromoMeta = {
    message?: string;
};
type CartProductInfo = {
    article?: ProductArticle;
    quantity?: number;
    availability?: ProductAvailability;
    message?: string;
    key?: string;
    bulk_offer?: any;
    identifiers: CartProductIdentifer;
    product?: CartProduct;
    price_per_unit?: ProductPriceInfo;
    coupon_message?: string;
    price?: ProductPriceInfo;
    parent_item_identifiers?: any;
    discount?: string;
    promotions_applied?: AppliedPromotion[];
    is_set?: boolean;
    promo_meta?: PromoMeta;
};
type DisplayBreakup = {
    value?: number;
    message?: string[];
    currency_code?: string;
    key?: string;
    currency_symbol?: string;
    display?: string;
};
type RawBreakup = {
    total?: number;
    gst_charges?: number;
    mrp_total?: number;
    you_saved?: number;
    coupon?: number;
    delivery_charge?: number;
    cod_charge?: number;
    convenience_fee?: number;
    discount?: number;
    subtotal?: number;
    fynd_cash?: number;
    vog?: number;
};
type LoyaltyPoints = {
    total?: number;
    applicable?: number;
    is_applied?: boolean;
    description?: string;
};
type CouponBreakup = {
    uid?: string;
    value?: number;
    is_applied?: boolean;
    message?: string;
    code?: string;
    type?: string;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    raw?: RawBreakup;
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
};
type OpenApiErrorResponse = {
    message?: string;
    success?: boolean;
    errors?: any;
};
type ShippingAddress = {
    name?: string;
    area_code: string;
    pincode?: number;
    country_code?: string;
    state?: string;
    city?: string;
    country?: string;
    address?: string;
    email?: string;
    address_type?: string;
    landmark?: string;
    meta?: any;
    area?: string;
    phone?: number;
    area_code_slug?: string;
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
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
};
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type OpenApiOrderItem = {
    quantity?: number;
    product_id: number;
    amount_paid: number;
    extra_meta?: any;
    meta?: CartItemMeta;
    files?: OpenApiFiles[];
    price_marked: number;
    employee_discount?: number;
    size: string;
    delivery_charges: number;
    loyalty_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    cashback_applied: number;
    discount: number;
    cod_charges: number;
    price_effective: number;
    coupon_effective_discount: number;
};
type OpenApiPlatformCheckoutReq = {
    currency_code?: string;
    comment?: string;
    affiliate_order_id?: string;
    payment_methods: MultiTenderPaymentMethod[];
    cashback_applied: number;
    loyalty_discount?: number;
    coupon_value: number;
    payment_mode?: string;
    coupon_code: string;
    cart_items: OpenApiOrderItem[];
    files?: OpenApiFiles[];
    employee_discount?: any;
    coupon?: string;
    delivery_charges: number;
    billing_address: ShippingAddress;
    gstin?: string;
    cod_charges: number;
    order_id?: string;
    cart_value: number;
    shipping_address?: ShippingAddress;
};
type OpenApiCheckoutResponse = {
    message?: string;
    success?: boolean;
    order_id: string;
    order_ref_id?: string;
};
type AbandonedCart = {
    articles: any[];
    is_default: boolean;
    fynd_credits?: any;
    payment_methods?: any[];
    last_modified: string;
    meta?: any;
    payment_mode?: string;
    delivery_charges?: any;
    shipments?: any[];
    user_id: string;
    cod_charges?: any;
    is_active?: boolean;
    fc_index_map?: number[];
    created_on: string;
    cart_value?: number;
    uid: number;
    comment?: string;
    pick_up_customer_details?: any;
    expire_at: string;
    buy_now?: boolean;
    cashback: any;
    discount?: number;
    is_archive?: boolean;
    promotion?: any;
    bulk_coupon_discount?: number;
    checkout_mode?: string;
    app_id?: string;
    coupon?: any;
    _id: string;
    merge_qty?: boolean;
    gstin?: string;
    payments?: any;
    order_id?: string;
};
type AbandonedCartResponse = {
    message?: string;
    result?: any;
    success?: boolean;
    items?: AbandonedCart[];
    page?: Page;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    message?: string;
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    currency?: CartCurrency;
    comment?: string;
    payment_selection_lock?: PaymentSelectionLock;
    buy_now?: boolean;
    delivery_charge_info?: string;
    coupon_text?: string;
    items?: CartProductInfo[];
    id?: string;
    gstin?: string;
    is_valid?: boolean;
    restrict_checkout?: boolean;
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
};
type AddProductCart = {
    quantity?: number;
    item_id?: number;
    seller_id?: number;
    article_assignment?: any;
    article_id?: string;
    pos?: boolean;
    product_group_tags?: string[];
    item_size?: string;
    parent_item_identifiers?: any;
    _custom_json?: any;
    extra_meta?: any;
    display?: string;
    store_id?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    message?: string;
    success?: boolean;
    partial?: boolean;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    quantity?: number;
    item_id?: number;
    article_id?: string;
    item_index?: number;
    item_size?: string;
    identifiers: CartProductIdentifer;
    parent_item_identifiers?: any;
    _custom_json?: any;
    extra_meta?: any;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    message?: string;
    success?: boolean;
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
