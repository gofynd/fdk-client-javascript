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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, PaymentModeInfo, Prices, ShipmentItemFulFillingStore, ShipmentStatus, UserDataInfo, GSTDetailsData, PlatformItem, BagUnit, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, Dimensions, Meta, OrderDetailsData, BagStateMapper, BagStatusHistory, UserDetailsData, TrackingList, OrderingStoreDetails, AffiliateMeta, LockData, ShipmentTimeStamp, Formatted, BuyerDetails, DebugInfo, EInvoice, EinvoiceInfo, ShipmentMeta, PDFLinks, AffiliateDetails, ShipmentStatusData, FulfillingStore, ShipmentPayments, DPDetailsData, CurrentStatus, BagConfigs, PlatformDeliveryAddress, BagGST, Identifier, FinancialBreakup, OrderBagArticle, OrderBrandName, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBags, InvoiceInfo, PlatformShipment, ShipmentInfoResponse, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, B2BPODetails, BagMeta, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, AffiliateBagDetails, BagGSTDetails, BagReturnableCancelableStatus, Dates, Weight, ReturnConfig, Article, Attributes, Item, Brand, ArticleDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, MarketPlacePdf, AffiliateBag, OrderUser, OrderPriority, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, UserData, OrderInfo, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, Meta1, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, LineItem, ProcessingDates, Shipment, BillingInfo, ShippingInfo, TaxInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, Price, Size, LimitedProductData, GetProducts, GetProductBundleResponse, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, MOQData, SEOData, OwnerAppItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, BannerImage, ImageUrls, CollectionQuery, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionImage, CollectionBanner, CollectionBadge, UserInfo, SeoDetail, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, Price1, ProductListingPrice, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, GenderDetail, ProductTemplateCategory, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, Image, ProductPublished, Logo, NetQuantityResponse, ReturnConfigResponse, Product, ProductListingResponse, CustomOrder, Trader, ProductPublish, NetQuantity, TaxIdentifier, TeaserTag, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, CompanyMeta, PriceMeta, Trader1, QuantityBase, Quantities, BrandMeta, WeightResponse, ManufacturerResponse, DimensionResponse, ReturnConfig1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ArticleStoreResponse, PriceArticle, CompanyMeta1, Quantity, QuantitiesArticle, Trader2, BrandMeta1, WeightResponse1, ManufacturerResponse1, DimensionResponse1, ReturnConfig2, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, UserSerializer1, GetAddressSerializer, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer2, LocationTimingSerializer, LocationDayWiseSerializer, SellerPhoneNumber, ProductReturnConfigSerializer, LocationManagerSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, CompanyTaxesSerializer, Website, BusinessDetails, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Ownership, DisplayMetaDict, DisplayMeta, Validity, CouponSchedule, Rule, RuleDefinition, CouponAction, CouponDateMeta, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, PriceRange, BulkBundleRestriction, PostOrder, Restrictions, CouponAuthor, State, Validation, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionSchedule, PromotionAuthor, Visibility, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, PostOrder1, Restrictions1, PromotionAction, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionDateMeta, Ownership1, DisplayMeta1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, ProductPrice, ProductPriceInfo, Ownership2, AppliedPromotion, PromoMeta, CartProductIdentifer, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, CategoryInfo, ActionQuery, ProductAction, ProductImage, CartProduct, ProductAvailability, CartProductInfo, LoyaltyPoints, DisplayBreakup, RawBreakup, CouponBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    app_id: string;
    created: boolean;
    display_fields: string[];
    excluded_fields: string[];
    success: boolean;
    aggregators?: any[];
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    key: string;
    merchant_salt: string;
    config_type: string;
    secret: string;
    is_active?: boolean;
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
    error: ErrorCodeAndDescription;
    success: boolean;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentApp = {
    logos?: PaymentModeLogo;
    code?: string;
    package_name?: string;
    display_name?: string;
};
type PaymentModeList = {
    card_token?: string;
    card_number?: string;
    card_fingerprint?: string;
    nickname?: string;
    remaining_limit?: number;
    card_brand_image?: string;
    display_name?: string;
    retry_count?: number;
    expired?: boolean;
    card_id?: string;
    display_priority?: number;
    timeout?: number;
    card_isin?: string;
    aggregator_name: string;
    card_reference?: string;
    card_brand?: string;
    exp_year?: number;
    intent_flow?: boolean;
    compliant_with_tokenisation_guidelines?: boolean;
    code?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    name?: string;
    logo_url?: PaymentModeLogo;
    fynd_vpa?: string;
    intent_app?: IntentApp[];
    intent_app_error_list?: string[];
    cod_limit?: number;
    merchant_code?: string;
    card_type?: string;
    cod_limit_per_order?: number;
    exp_month?: number;
    card_issuer?: string;
    card_name?: string;
};
type RootPaymentMode = {
    is_pay_by_card_pl?: boolean;
    display_priority: number;
    save_card?: boolean;
    add_card_enabled?: boolean;
    list?: PaymentModeList[];
    aggregator_name?: string;
    display_name: string;
    anonymous_enable?: boolean;
    name: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    payouts_aggregators: any[];
    transfer_type: string;
    more_attributes: any;
    customers: any;
    unique_transfer_no: any;
    is_default: boolean;
    is_active: boolean;
};
type PayoutBankDetails = {
    city?: string;
    pincode?: number;
    bank_name?: string;
    branch_name?: string;
    account_no?: string;
    country?: string;
    account_holder?: string;
    ifsc_code: string;
    account_type: string;
    state?: string;
};
type PayoutRequest = {
    transfer_type: string;
    unique_external_id: string;
    bank_details: PayoutBankDetails;
    aggregator: string;
    is_active: boolean;
    users: any;
};
type PayoutResponse = {
    transfer_type: string;
    bank_details: any;
    payouts: any;
    unique_transfer_no: string;
    aggregator: string;
    created: boolean;
    payment_status: string;
    is_active: boolean;
    success: boolean;
    users: any;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    is_active: boolean;
    success: boolean;
};
type UpdatePayoutRequest = {
    unique_external_id: string;
    is_active: boolean;
    is_default: boolean;
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
    data?: any;
    is_verified_flag?: boolean;
    message: string;
    success: boolean;
};
type NotFoundResourceError = {
    code: string;
    description: string;
    success: boolean;
};
type BankDetailsForOTP = {
    bank_name: string;
    branch_name: string;
    account_no: string;
    account_holder: string;
    ifsc_code: string;
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
    id: number;
    address: string;
    branch_name?: string;
    account_no: string;
    account_holder: string;
    subtitle: string;
    ifsc_code: string;
    display_name: string;
    created_on: string;
    mobile?: string;
    is_active: boolean;
    transfer_mode: string;
    email: string;
    beneficiary_id: string;
    title: string;
    bank_name: string;
    delights_user_name?: string;
    modified_on: string;
    comment?: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    current_status?: string;
    extra_meta?: any;
    payment_gateway?: string;
    order_id?: string;
    payment_id?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    mode: string;
    name?: string;
    amount: number;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    order_id: string;
    message: string;
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
    merchant_user_id: string;
    is_active: boolean;
    mobileno: string;
};
type SetCODOptionResponse = {
    message: string;
    success: boolean;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type Prices = {
    refund_amount?: number;
    value_of_good?: number;
    cashback?: number;
    price_marked?: number;
    amount_paid?: number;
    refund_credit?: number;
    transfer_price?: number;
    discount?: number;
    price_effective?: number;
    cod_charges?: number;
    tax_collected_at_source?: number;
    coupon_value?: number;
    promotion_effective_discount?: number;
    fynd_credits?: number;
    cashback_applied?: number;
    amount_paid_roundoff?: number;
    delivery_charge?: number;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentStatus = {
    status: string;
    actual_status: string;
    hex_code: string;
    ops_status: string;
    title: string;
};
type UserDataInfo = {
    is_anonymous_user?: boolean;
    uid?: number;
    email?: string;
    name?: string;
    gender?: string;
    first_name?: string;
    last_name?: string;
    avis_user_id?: string;
    mobile?: string;
};
type GSTDetailsData = {
    value_of_good: number;
    brand_calculated_amount: number;
    gst_fee: number;
    tax_collected_at_source: number;
    gstin_code: string;
};
type PlatformItem = {
    image?: string[];
    color?: string;
    code?: string;
    can_cancel?: boolean;
    size?: string;
    name?: string;
    can_return?: boolean;
    l3_category_name?: string;
    l1_category?: string[];
    images?: string[];
    id?: number;
    department_id?: number;
    l3_category?: number;
};
type BagUnit = {
    status: any;
    prices?: Prices;
    can_cancel?: boolean;
    can_return?: boolean;
    bag_id: number;
    total_shipment_bags: number;
    shipment_id: string;
    gst?: GSTDetailsData;
    item_quantity: number;
    ordering_channel: string;
    item?: PlatformItem;
};
type ShipmentItem = {
    total_shipments_in_order: number;
    payment_mode_info?: PaymentModeInfo;
    channel?: any;
    prices?: Prices;
    application?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    shipment_status?: ShipmentStatus;
    user?: UserDataInfo;
    shipment_created_at: string;
    bags?: BagUnit[];
    shipment_id?: string;
    sla?: any;
    total_bags_count: number;
    created_at: string;
    id: string;
    fulfilling_centre: string;
    payment_methods?: any;
};
type FilterInfoOption = {
    name?: string;
    value?: string;
    text: string;
};
type FiltersInfo = {
    type: string;
    options?: FilterInfoOption[];
    value: string;
    text: string;
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
    page?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type Dimensions = {
    unit?: string;
    height?: number;
    length?: number;
    is_default?: boolean;
    width?: number;
};
type Meta = {
    dimension?: Dimensions;
};
type OrderDetailsData = {
    source?: string;
    order_value?: string;
    order_date?: string;
    cod_charges?: string;
    fynd_order_id: string;
    ordering_channel_logo?: any;
    tax_details?: any;
    affiliate_id?: string;
    ordering_channel?: string;
};
type BagStateMapper = {
    bs_id: number;
    state_type: string;
    name: string;
    display_name: string;
    is_active?: boolean;
    app_display_name?: string;
    app_facing?: boolean;
    app_state_name?: string;
    journey_type: string;
    notify_customer?: boolean;
};
type BagStatusHistory = {
    delivery_partner_id?: number;
    status: string;
    delivery_awb_number?: string;
    reasons?: any[];
    updated_at?: string;
    bsh_id?: number;
    state_type?: string;
    forward?: boolean;
    bag_state_mapper?: BagStateMapper;
    bag_id?: number;
    state_id?: number;
    shipment_id?: string;
    display_name?: string;
    app_display_name?: string;
    created_at?: string;
    kafka_sync?: boolean;
    store_id?: number;
};
type UserDetailsData = {
    address: string;
    country: string;
    city: string;
    email?: string;
    phone: string;
    name: string;
    pincode: string;
    state: string;
};
type TrackingList = {
    status: string;
    time?: string;
    is_current?: boolean;
    text: string;
    is_passed?: boolean;
};
type OrderingStoreDetails = {
    meta: any;
    address: string;
    store_name: string;
    country: string;
    city: string;
    code: string;
    phone: string;
    contact_person: string;
    pincode: string;
    state: string;
    ordering_store_id: number;
};
type AffiliateMeta = {
    loyalty_discount?: number;
    due_date?: string;
    order_item_id?: string;
    channel_order_id?: string;
    is_priority?: boolean;
    quantity?: number;
    box_type?: string;
    coupon_code?: string;
    channel_shipment_id?: string;
    employee_discount?: number;
    size_level_total_qty?: number;
};
type LockData = {
    mto?: boolean;
    lock_message?: string;
    locked?: boolean;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type BuyerDetails = {
    address: string;
    city: string;
    ajio_site_id?: string;
    name: string;
    pincode: number;
    gstin: string;
    state: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type EInvoice = {
    signed_qr_code?: string;
    error_code?: string;
    signed_invoice?: string;
    acknowledge_no?: number;
    irn?: string;
    acknowledge_date?: string;
    error_message?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type ShipmentMeta = {
    return_details?: any;
    auto_trigger_dp_assignment_acf: boolean;
    return_store_node?: number;
    dp_sort_key?: string;
    lock_data?: LockData;
    bag_weight?: any;
    box_type?: string;
    timestamp?: ShipmentTimeStamp;
    dp_name?: string;
    return_affiliate_shipment_id?: string;
    order_type?: string;
    same_store_available: boolean;
    b2c_buyer_details?: any;
    assign_dp_from_sb?: boolean;
    dp_id?: string;
    formatted?: Formatted;
    external?: any;
    weight: number;
    ewaybill_info?: any;
    due_date?: string;
    shipment_volumetric_weight?: number;
    return_awb_number?: string;
    b2b_buyer_details?: BuyerDetails;
    marketplace_store_id?: string;
    packaging_name?: string;
    awb_number?: string;
    forward_affiliate_shipment_id?: string;
    debug_info?: DebugInfo;
    forward_affiliate_order_id?: string;
    store_invoice_updated_date?: string;
    shipment_weight?: number;
    fulfilment_priority_text?: string;
    return_affiliate_order_id?: string;
    po_number?: string;
    dp_options?: any;
    einvoice_info?: EinvoiceInfo;
};
type PDFLinks = {
    invoice_a6?: string;
    invoice_pos?: string;
    invoice_type: string;
    label_a6?: string;
    label_type: string;
    po_invoice?: string;
    label_a4?: string;
    label?: string;
    b2b?: string;
    label_pos?: string;
    invoice_a4?: string;
    delivery_challan_a4?: string;
    invoice?: string;
    credit_note_url?: string;
};
type AffiliateDetails = {
    ad_id?: string;
    affiliate_shipment_id: string;
    company_affiliate_tag?: string;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_store_id: string;
    affiliate_bag_id: string;
    shipment_meta: ShipmentMeta;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
};
type ShipmentStatusData = {
    status?: string;
    shipment_id?: string;
    created_at?: string;
    id?: number;
    bag_list?: string[];
};
type FulfillingStore = {
    meta: any;
    address: string;
    store_name: string;
    country: string;
    city: string;
    code: string;
    contact_person: string;
    phone: string;
    pincode: string;
    fulfillment_channel: string;
    id: number;
    state: string;
};
type ShipmentPayments = {
    logo?: string;
    source?: string;
    mode?: string;
};
type DPDetailsData = {
    track_url?: string;
    eway_bill_id?: string;
    country?: string;
    gst_tag?: string;
    name?: string;
    pincode?: string;
    awb_no?: string;
    id?: number;
};
type CurrentStatus = {
    delivery_partner_id?: number;
    delivery_awb_number?: string;
    status?: string;
    state_type?: string;
    updated_at?: string;
    current_status_id: number;
    bag_state_mapper?: BagStateMapper;
    bag_id?: number;
    state_id?: number;
    shipment_id?: string;
    created_at?: string;
    kafka_sync?: boolean;
    store_id?: number;
};
type BagConfigs = {
    can_be_cancelled: boolean;
    allow_force_return: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    is_active: boolean;
    enable_tracking: boolean;
};
type PlatformDeliveryAddress = {
    country?: string;
    area?: string;
    updated_at?: string;
    city?: string;
    email?: string;
    longitude?: number;
    phone?: string;
    version?: string;
    pincode?: string;
    address_type?: string;
    contact_person?: string;
    latitude?: number;
    address_category?: string;
    created_at?: string;
    landmark?: string;
    state?: string;
    address1?: string;
    address2?: string;
};
type BagGST = {
    value_of_good?: number;
    brand_calculated_amount?: number;
    gst_fee?: number;
    hsn_code?: string;
    gst_tag?: string;
    gst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    identifiers: Identifier;
    item_name: string;
    refund_credit: number;
    gst_fee: number;
    hsn_code: string;
    price_effective: number;
    tax_collected_at_source?: number;
    cashback_applied: number;
    value_of_good: number;
    coupon_effective_discount: number;
    price_marked: number;
    gst_tag: string;
    total_units: number;
    promotion_effective_discount: number;
    fynd_credits: number;
    amount_paid_roundoff?: number;
    delivery_charge: number;
    brand_calculated_amount: number;
    added_to_fynd_cash: boolean;
    cod_charges: number;
    coupon_value: number;
    transfer_price: number;
    cashback: number;
    amount_paid: number;
    size: string;
    discount: number;
    gst_tax_percentage: number;
};
type OrderBagArticle = {
    return_config?: any;
    identifiers?: any;
    uid?: string;
};
type OrderBrandName = {
    created_on: string;
    modified_on?: string;
    brand_name: string;
    logo: string;
    id: number;
    company: string;
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
    article_quantity?: number;
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
    buy_rules?: BuyRules[];
    promotion_name?: string;
    amount?: number;
    promotion_type?: string;
    promo_id?: string;
};
type OrderBags = {
    identifier?: string;
    prices?: Prices;
    quantity?: number;
    display_name?: string;
    current_status?: CurrentStatus;
    line_number?: number;
    bag_configs?: BagConfigs;
    entity_type?: string;
    seller_identifier?: string;
    delivery_address?: PlatformDeliveryAddress;
    gst_details?: BagGST;
    financial_breakup?: FinancialBreakup;
    article?: OrderBagArticle;
    parent_promo_bags?: any;
    item?: PlatformItem;
    brand?: OrderBrandName;
    can_cancel?: boolean;
    can_return?: boolean;
    bag_id: number;
    applied_promos?: AppliedPromos[];
};
type InvoiceInfo = {
    updated_date?: string;
    credit_note_id?: string;
    store_invoice_id?: string;
    label_url?: string;
    invoice_url?: string;
};
type PlatformShipment = {
    meta?: Meta;
    order?: OrderDetailsData;
    vertical?: string;
    prices?: Prices;
    user_agent?: string;
    bag_status_history?: BagStatusHistory[];
    operational_status?: string;
    custom_meta?: any[];
    delivery_details?: UserDetailsData;
    invoice_id?: string;
    coupon?: any;
    packaging_type?: string;
    billing_details?: UserDetailsData;
    tracking_list?: TrackingList[];
    priority_text?: string;
    ordering_store?: OrderingStoreDetails;
    affiliate_details?: AffiliateDetails;
    shipment_quantity?: number;
    shipment_status?: string;
    delivery_slot?: any;
    payment_mode?: string;
    gst_details?: GSTDetailsData;
    status?: ShipmentStatusData;
    platform_logo?: string;
    fulfilling_store?: FulfillingStore;
    shipment_images?: string[];
    enable_dp_tracking?: boolean;
    lock_status?: boolean;
    shipment_id: string;
    forward_shipment_id?: string;
    journey_type?: string;
    payments?: ShipmentPayments;
    dp_details?: DPDetailsData;
    fulfilment_priority?: number;
    bags?: OrderBags[];
    total_items?: number;
    total_bags?: number;
    picked_date?: string;
    invoice?: InvoiceInfo;
    payment_methods?: any;
};
type ShipmentInfoResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    message?: string;
};
type OrderMeta = {
    staff?: any;
    ordering_store?: number;
    order_tags?: any[];
    customer_note?: string;
    currency_symbol?: string;
    files?: any[];
    order_type?: string;
    order_child_entities?: string[];
    order_platform?: string;
    cart_id?: number;
    employee_id?: number;
    comment?: string;
    payment_type?: string;
    mongo_cart_id?: number;
    extra_meta?: any;
};
type OrderDict = {
    meta?: OrderMeta;
    prices?: Prices;
    order_date: string;
    fynd_order_id: string;
    tax_details?: any;
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
    index?: number;
    value?: string;
    actions?: any[];
};
type SuperLane = {
    total_items?: number;
    options?: SubLane[];
    value: string;
    text: string;
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
    value?: string;
    display?: string;
};
type PlatformOrderItems = {
    meta?: any;
    shipments?: PlatformShipment[];
    total_order_value?: number;
    channel?: PlatformChannel;
    breakup_values?: PlatformBreakupValues[];
    payment_mode?: string;
    order_id?: string;
    user_info?: UserDataInfo;
    order_created_time?: string;
    order_value?: number;
};
type OrderListingResponse = {
    page?: Page;
    items?: PlatformOrderItems[];
    message?: string;
    total_count?: number;
    success?: boolean;
    lane?: string;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    key: string;
    options?: Options[];
    text: string;
    value: number;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    meta?: any;
    shipment_type?: string;
    awb?: string;
    reason?: string;
    status?: string;
    updated_at?: string;
    last_location_recieved_at?: string;
    updated_time?: string;
    raw_status?: string;
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
    success?: boolean;
    message?: string;
};
type OmsReports = {
    status?: string;
    report_type?: string;
    report_requested_at?: string;
    display_name?: string;
    report_name?: string;
    report_id?: string;
    request_details?: any;
    report_created_at?: string;
    s3_key?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    item_id?: string;
    company_id?: string;
    article_id?: string;
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
    identifier?: string;
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
    data?: any[];
    trace_id?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    invoice_status?: string;
    store_name?: string;
    do_invoice_label_generated: boolean;
    company_id?: string;
    store_code?: string;
    label?: any;
    batch_id: string;
    store_id?: string;
    data?: any;
    invoice?: any;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type URL = {
    url?: string;
};
type FileResponse = {
    size?: number;
    file_path?: string;
    namespace?: string;
    upload?: FileUploadResponse;
    cdn?: URL;
    operation?: string;
    tags?: string[];
    file_name?: string;
    content_type?: string;
    method?: string;
};
type bulkListingData = {
    successful?: number;
    total?: number;
    store_id?: number;
    processing_shipments?: string[];
    user_name?: string;
    excel_url?: string;
    processing?: number;
    status?: string;
    company_id?: number;
    failed?: number;
    uploaded_on?: string;
    id?: string;
    failed_shipments?: any[];
    store_name?: string;
    successful_shipments?: any[];
    store_code?: string;
    user_id?: string;
    batch_id?: string;
    file_name?: string;
};
type BulkListingPage = {
    has_previous?: boolean;
    current?: number;
    size?: number;
    type?: string;
    total?: number;
    has_next?: boolean;
};
type BulkListingResponse = {
    success?: boolean;
    error?: string;
    data?: bulkListingData[];
    page?: BulkListingPage;
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
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    company_id?: string;
    total_shipments_count?: number;
    batch_id?: string;
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    status?: boolean;
    message?: string;
    success?: string;
    uploaded_on?: string;
    uploaded_by?: string;
    user_id?: string;
    failed_records?: string[];
    error?: string[];
    data?: BulkActionDetailsDataField[];
};
type B2BPODetails = {
    docker_number?: string;
    po_line_amount?: number;
    partial_can_ret?: boolean;
    po_tax_amount?: number;
    item_base_price?: number;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type StoreEinvoice = {
    password?: string;
    username?: string;
    user?: string;
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
    verified: boolean;
    ds_type: string;
    legal_name: string;
    value: string;
    url?: string;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    password?: string;
    username?: string;
    user?: string;
};
type StoreMeta = {
    gst_credentials: StoreGstCredentials;
    notification_emails?: string[];
    stage: string;
    documents?: StoreDocuments;
    ewaybill_portal_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    display_name: string;
    gst_number?: string;
    product_return_config?: any;
    additional_contact_details?: any;
    timing?: any[];
};
type StoreAddress = {
    country: string;
    address_type: string;
    city: string;
    pincode: number;
    country_code: string;
    landmark?: string;
    contact_person: string;
    latitude: number;
    state: string;
    address1: string;
    area?: string;
    longitude: number;
    phone: string;
    version?: string;
    address2?: string;
    updated_at: string;
    email?: string;
    created_at: string;
    address_category: string;
};
type Store = {
    meta: StoreMeta;
    parent_store_id?: number;
    country: string;
    store_address_json?: StoreAddress;
    city: string;
    mall_name?: string;
    name: string;
    pincode: string;
    vat_no?: string;
    is_active?: boolean;
    location_type: string;
    store_active_from?: string;
    is_enabled_for_recon?: boolean;
    contact_person: string;
    login_username: string;
    is_archived?: boolean;
    order_integration_id?: string;
    alohomora_user_id?: number;
    latitude: number;
    state: string;
    address1: string;
    longitude: number;
    phone: number;
    company_id: number;
    fulfillment_channel: string;
    brand_store_tags?: string[];
    address2?: string;
    updated_at?: string;
    code?: string;
    mall_area?: string;
    brand_id?: any;
    created_at: string;
    store_email: string;
    packaging_material_count?: number;
    s_id: string;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
    employee_discount?: number;
};
type BagGSTDetails = {
    value_of_good: number;
    cgst_tax_percentage: number;
    brand_calculated_amount: number;
    igst_gst_fee: string;
    gst_fee: number;
    hsn_code: string;
    gst_tag: string;
    hsn_code_id: string;
    gst_tax_percentage: number;
    cgst_gst_fee: string;
    tax_collected_at_source: number;
    igst_tax_percentage: number;
    is_default_hsn_code?: boolean;
    sgst_gst_fee: string;
    gstin_code?: string;
    sgst_tax_percentage: number;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    is_active: boolean;
    enable_tracking: boolean;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
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
    weight?: Weight;
    identifiers: Identifier;
    seller_identifier: string;
    return_config?: ReturnConfig;
    code?: string;
    size: string;
    _id: string;
    uid: string;
    dimensions?: Dimensions;
    raw_meta?: any;
    esp_modified?: any;
    is_set?: boolean;
    child_details?: any;
    a_set?: any;
};
type Attributes = {
    marketer_address?: string;
    primary_color?: string;
    primary_color_hex?: string;
    name?: string;
    essential?: string;
    primary_material?: string;
    brand_name?: string;
    gender?: string[];
    marketer_name?: string;
};
type Item = {
    meta?: any;
    l2_category?: string[];
    name: string;
    gender?: string;
    image: string[];
    webstore_product_url?: string;
    slug_key: string;
    l1_category_id?: number;
    attributes: Attributes;
    l3_category?: number;
    item_id: number;
    branch_url?: string;
    l2_category_id?: number;
    department_id?: number;
    color?: string;
    last_updated_at?: string;
    brand: string;
    can_cancel?: boolean;
    code?: string;
    size: string;
    can_return?: boolean;
    l3_category_name?: string;
    l1_category?: string[];
    brand_id: number;
};
type Brand = {
    script_last_ran?: string;
    invoice_prefix?: string;
    start_date?: string;
    created_on?: number;
    modified_on?: number;
    credit_note_expiry_days?: number;
    brand_id: number;
    pickup_location?: string;
    logo?: string;
    brand_name: string;
    is_virtual_invoice?: boolean;
    company: string;
    credit_note_allowed?: boolean;
};
type ArticleDetails = {
    status?: any;
};
type BagDetailsPlatformResponse = {
    meta?: BagMeta;
    identifier?: string;
    prices: Prices;
    bag_status_history?: BagStatusHistory;
    b_id: number;
    display_name?: string;
    operational_status?: string;
    quantity?: number;
    current_status: BagStatusHistory;
    line_number?: number;
    original_bag_list?: number[];
    entity_type?: string;
    seller_identifier?: string;
    bag_status: BagStatusHistory[];
    affiliate_details?: AffiliateDetails;
    ordering_store?: Store;
    order_integration_id?: string;
    affiliate_bag_details: AffiliateBagDetails;
    current_operational_status: BagStatusHistory;
    gst_details: BagGSTDetails;
    financial_breakup: FinancialBreakup[];
    status: BagReturnableCancelableStatus;
    dates?: Dates;
    reasons?: any[];
    article: Article;
    qc_required?: any;
    restore_coupon?: boolean;
    shipment_id?: string;
    journey_type: string;
    parent_promo_bags?: any;
    restore_promos?: any;
    item: Item;
    brand: Brand;
    b_type?: string;
    bag_update_time?: number;
    applied_promos?: any[];
    no_of_bags_order?: number;
    tags?: string[];
    article_details?: ArticleDetails;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    page_type: string;
    current: number;
    size: number;
    item_total: number;
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
    error?: string;
    status?: number;
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
    affiliate_id?: string;
    affiliate_bag_id?: string;
    reason_ids?: number[];
    fynd_order_id?: string;
    store_id: number;
    mongo_article_id?: string;
    affiliate_order_id?: string;
    item_id?: string;
    set_id?: string;
    bag_id?: number;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    action: string;
    entity_type: string;
    entities: Entities[];
};
type Bags = {
    is_locked?: boolean;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    bag_id?: number;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    is_bag_locked?: boolean;
    shipment_id?: string;
    bags?: Bags[];
    is_shipment_locked?: boolean;
    lock_status?: boolean;
    original_filter?: OriginalFilter;
    affiliate_shipment_id?: string;
    status?: string;
    affiliate_id?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    title?: string;
    description?: string;
    id: number;
    from_datetime?: string;
    created_at?: string;
    platform_id?: string;
    logo_url?: string;
    platform_name?: string;
    company_id?: number;
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
type Products = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
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
type ShipmentsRequest = {
    products?: Products[];
    data_updates?: DataUpdates;
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
    statuses?: StatuesRequest[];
    unlock_before_transition?: boolean;
    force_transition?: boolean;
};
type ShipmentsResponse = {
    code?: string;
    message?: string;
    final_state?: any;
    stack_trace?: string;
    meta?: any;
    status?: number;
    identifier?: string;
    exception?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    quantity: number;
    hsn_code_id: string;
    affiliate_store_id: string;
    pdf_links?: MarketPlacePdf;
    avl_qty: number;
    sku: string;
    delivery_charge: number;
    identifier: any;
    store_id: number;
    modified_on: string;
    transfer_price: number;
    company_id: number;
    amount_paid: number;
    discount: number;
    price_effective: number;
    seller_identifier: string;
    unit_price: number;
    affiliate_meta: any;
    item_id: number;
    price_marked: number;
    item_size: string;
    _id: string;
    fynd_store_id: string;
};
type OrderUser = {
    last_name: string;
    email: string;
    country: string;
    pincode: string;
    first_name: string;
    state: string;
    address1?: string;
    address2?: string;
    city: string;
    phone: number;
    mobile: number;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type ArticleDetails1 = {
    _id: string;
    quantity: number;
    brand_id: number;
    dimension: any;
    weight: any;
    category: any;
    attributes: any;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_type: string;
    fulfillment_id: number;
};
type ShipmentDetails = {
    shipments: number;
    fulfillment_id: number;
    box_type?: string;
    dp_id?: number;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    meta?: any;
};
type ShipmentConfig = {
    action: string;
    payment_mode: string;
    source: string;
    to_pincode: string;
    identifier: string;
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
    journey: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type OrderInfo = {
    bags: AffiliateBag[];
    shipping_address: OrderUser;
    payment_mode: string;
    order_priority?: OrderPriority;
    payment?: any;
    coupon?: string;
    cod_charges: number;
    billing_address: OrderUser;
    affiliate_order_id?: string;
    delivery_charges: number;
    shipment?: ShipmentData;
    user: UserData;
    order_value: number;
    items: any;
    discount: number;
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
    description?: string;
    token: string;
    id: string;
    secret: string;
    name: string;
    created_at: string;
    updated_at: string;
    meta?: AffiliateAppConfigMeta[];
    owner: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
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
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
    payment?: AffiliateInventoryPaymentConfig;
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
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    affiliate: Affiliate;
    store_lookup?: string;
    create_user?: boolean;
    article_lookup?: string;
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
    ticket_id?: string;
    message: string;
    createdat: string;
    l2_detail?: string;
    l1_detail?: string;
    l3_detail?: string;
    ticket_url?: string;
    user: string;
    type: string;
    bag_id?: number;
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
    message: string;
    phone_number: number;
    shipment_id: number;
    payment_mode: string;
    customer_name: string;
    country_code: string;
    order_id: string;
    brand_name: string;
    amount_paid: number;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    slug: string;
    bag_id: number;
};
type Meta1 = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    id: number;
    shipment_id?: string;
    status?: string;
    bag_list?: number[];
    remarks?: string;
    meta: Meta1;
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
    order_type: string;
    dp_id: number;
    shipment_ids?: string[];
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type Tax = {
    breakup?: any[];
    name: string;
    amount: any;
    rate: number;
};
type Charge = {
    code?: string;
    type: string;
    name: string;
    tax?: Tax;
    amount: any;
};
type LineItem = {
    seller_identifier: string;
    quantity?: number;
    meta?: any;
    charges?: Charge[];
    custom_messasge?: string;
    external_line_id?: string;
};
type ProcessingDates = {
    pack_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    confirm_by_date?: string;
    dispatch_after_date?: string;
};
type Shipment = {
    priority?: number;
    external_shipment_id?: string;
    line_items: LineItem[];
    meta?: any;
    processing_dates?: ProcessingDates;
    location_id: number;
};
type BillingInfo = {
    middle_name?: string;
    house_no?: string;
    alternate_mobile_number?: string;
    external_customer_code?: string;
    gender?: string;
    first_name: string;
    primary_mobile_number: string;
    title?: string;
    primary_email: string;
    country: string;
    state_code?: string;
    address2?: string;
    address1: string;
    alternate_email?: string;
    last_name?: string;
    floor_no?: string;
    pincode: string;
    state: string;
    country_code?: string;
    city: string;
    customer_code?: string;
};
type ShippingInfo = {
    geo_location?: any;
    middle_name?: string;
    house_no?: string;
    alternate_mobile_number?: string;
    external_customer_code?: string;
    gender?: string;
    first_name: string;
    landmark?: string;
    primary_mobile_number: string;
    title?: string;
    primary_email: string;
    slot?: any[];
    address_type?: string;
    country: string;
    state_code?: string;
    address2?: string;
    shipping_type?: string;
    address1: string;
    alternate_email?: string;
    last_name?: string;
    floor_no?: string;
    pincode: string;
    state: string;
    country_code?: string;
    city: string;
    customer_code?: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type PaymentMethod = {
    refund_by: string;
    name: string;
    mode: string;
    collect_by: string;
    amount: number;
    meta?: any;
    transaction_data?: any;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type CreateOrderAPI = {
    shipments: Shipment[];
    billing_info: BillingInfo;
    currency_info?: any;
    shipping_info: ShippingInfo;
    charges?: Charge[];
    external_order_id?: string;
    tax_info?: TaxInfo;
    external_creation_date?: string;
    meta?: any;
    payment_info: PaymentInfo;
};
type CreateOrderErrorReponse = {
    code?: string;
    message: string;
    stack_trace?: string;
    request_id?: string;
    meta?: string;
    status: number;
    exception?: string;
    info?: any;
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
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
    lock_states?: string[];
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
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
    start_date: string;
    end_date: string;
    order_details?: FyndOrderIdList[];
    mobile: number;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
    app_id?: string;
};
type GetSearchWordsData = {
    uid?: string;
    result?: any;
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
    app_id?: string;
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
    display?: string;
    logo?: Media;
    action?: AutocompleteAction;
    _custom_json?: any;
};
type CreateAutocompleteKeyword = {
    results?: AutocompleteResult[];
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
    app_id?: string;
};
type GetAutocompleteWordsData = {
    results?: any[];
    uid?: string;
    _custom_json?: any;
    words?: string[];
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    results?: any[];
    _custom_json?: any;
    app_id?: string;
};
type ProductBundleItem = {
    min_quantity: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    allow_remove?: boolean;
    product_uid: number;
    max_quantity: number;
};
type GetProductBundleCreateResponse = {
    slug: string;
    modified_on?: string;
    created_on?: string;
    company_id?: number;
    logo?: string;
    page_visibility?: string[];
    meta?: any;
    is_active: boolean;
    choice: string;
    modified_by?: any;
    created_by?: any;
    id?: string;
    name: string;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    slug: string;
    modified_on?: string;
    created_on?: string;
    company_id?: number;
    logo?: string;
    page_visibility?: string[];
    meta?: any;
    is_active: boolean;
    choice: string;
    modified_by?: any;
    created_by?: any;
    name: string;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
};
type ProductBundleUpdateRequest = {
    slug: string;
    modified_on?: string;
    company_id?: number;
    logo?: string;
    page_visibility?: string[];
    meta?: any;
    is_active: boolean;
    choice: string;
    modified_by?: any;
    name: string;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
};
type Price = {
    max_marked?: number;
    min_effective?: number;
    min_marked?: number;
    max_effective?: number;
    currency?: string;
};
type Size = {
    display?: string;
    is_available?: boolean;
    quantity?: number;
    value?: string;
};
type LimitedProductData = {
    price?: any;
    slug?: string;
    uid?: number;
    sizes?: string[];
    short_description?: string;
    attributes?: any;
    item_code?: string;
    images?: string[];
    country_of_origin?: string;
    quantity?: number;
    name?: string;
    identifier?: any;
};
type GetProducts = {
    price?: Price;
    min_quantity?: number;
    sizes?: Size[];
    product_details?: LimitedProductData;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    allow_remove?: boolean;
    product_uid?: number;
    max_quantity?: number;
};
type GetProductBundleResponse = {
    slug?: string;
    company_id?: number;
    logo?: string;
    page_visibility?: string[];
    meta?: any;
    is_active?: boolean;
    choice?: string;
    name?: string;
    same_store_assignment?: boolean;
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
    title: string;
    modified_on?: string;
    image?: string;
    company_id?: number;
    guide?: Guide;
    brand_id?: number;
    subtitle?: string;
    created_by?: any;
    modified_by?: any;
    id?: string;
    tag?: string;
    active?: boolean;
    name: string;
    description?: string;
    created_on?: string;
};
type SizeGuideResponse = {
    title?: string;
    modified_on?: string;
    company_id?: number;
    guide?: any;
    brand_id?: number;
    subtitle?: string;
    created_by?: any;
    modified_by?: any;
    id?: string;
    tag?: string;
    active?: boolean;
    name?: string;
    created_on?: string;
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
    title?: any;
    description?: any;
};
type ApplicationItemMeta = {
    moq?: ApplicationItemMOQ;
    is_cod?: boolean;
    alt_text?: any;
    is_gift?: boolean;
    _custom_json?: any;
    _custom_meta?: MetaFields[];
    seo?: ApplicationItemSEO;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type MOQData = {
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
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
    values?: any[];
    data: any[];
};
type PageResponseType = {
    current: number;
    total_count: number;
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
    slug?: string;
    priority: number;
    key?: string;
    logo?: string;
    unit?: string;
    is_active: boolean;
    name: string;
    display_type: string;
};
type AppConfigurationDetail = {
    slug: string;
    attributes?: AttributeDetailsGroup[];
    is_default: boolean;
    priority: number;
    logo?: string;
    is_active: boolean;
    template_slugs?: string[];
    name?: string;
    app_id: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_default: boolean;
    key: string;
    logo?: string;
    priority: number;
    is_active: boolean;
    name?: string;
    default_key: string;
    app_id: string;
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
    filter_types?: string[];
    key?: string;
    units?: any[];
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationDetailsProduct = {
    compare?: any;
    similar?: any;
    variant?: any;
    detail?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    title?: string;
    priority: number;
    key: string;
    logo?: string;
    subtitle?: string;
    is_active: boolean;
    size?: ProductSize;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    priority: number;
    key: string;
    logo?: string;
    is_active: boolean;
    name: string;
    size: ProductSize;
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
    priority: number;
    key: string;
    logo?: string;
    is_active: boolean;
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
    sort?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map_values?: any[];
    condition?: string;
    map?: any;
    value?: string;
};
type ConfigurationListingFilterConfig = {
    type: string;
    display_name?: string;
    value_config?: ConfigurationListingFilterValue;
    priority: number;
    key: string;
    logo?: string;
    is_active: boolean;
    name?: string;
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
    type?: string;
    config_type: string;
    modified_on?: string;
    created_on?: string;
    config_id?: string;
    product?: ConfigurationProduct;
    id?: string;
    created_by?: any;
    modified_by?: any;
    listing?: ConfigurationListing;
    app_id: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    type?: string;
    config_type: string;
    modified_on?: string;
    created_on?: string;
    config_id?: string;
    product?: ConfigurationProduct;
    created_by?: any;
    modified_by?: any;
    listing?: ConfigurationListing;
    app_id: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    config_type: string;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    is_selected?: boolean;
    name?: string;
    value?: string;
};
type ProductFiltersValue = {
    selected_min?: number;
    currency_symbol?: string;
    min?: number;
    selected_max?: number;
    count?: number;
    currency_code?: string;
    is_selected: boolean;
    query_format?: string;
    display_format?: string;
    display: string;
    max?: number;
    value: any;
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
type BannerImage = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
};
type Media1 = {
    type?: string;
    url: string;
    meta?: any;
};
type GetCollectionDetailNest = {
    priority?: number;
    action?: Action;
    meta?: any;
    banners?: ImageUrls;
    name?: string;
    uid?: string;
    query?: CollectionQuery[];
    description?: string;
    badge?: any;
    is_active?: boolean;
    tag?: string[];
    allow_facets?: boolean;
    type?: string;
    slug?: string;
    visible_facets_keys?: string[];
    logo?: Media1;
    allow_sort?: boolean;
    _schedule?: any;
    cron?: any;
    app_id?: string;
};
type CollectionListingFilterType = {
    is_selected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilterTag = {
    is_selected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    page?: Page;
    filters?: CollectionListingFilter;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type UserInfo = {
    email?: string;
    user_id?: string;
    uid?: string;
    username?: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionSchedule = {
    end?: string;
    start?: string;
    duration?: number;
    cron?: string;
    next_schedule?: NextSchedule[];
};
type CreateCollection = {
    priority?: number;
    meta?: any;
    _custom_json?: any;
    name: string;
    banners: CollectionBanner;
    tags?: string[];
    _locale_language?: any;
    query?: CollectionQuery[];
    description?: string;
    published?: boolean;
    badge?: CollectionBadge;
    created_by?: UserInfo;
    modified_by?: UserInfo;
    is_active?: boolean;
    sort_on?: string;
    allow_facets?: boolean;
    seo?: SeoDetail;
    type: string;
    slug: string;
    visible_facets_keys?: string[];
    is_visible?: boolean;
    logo: CollectionImage;
    allow_sort?: boolean;
    _schedule?: CollectionSchedule;
    app_id: string;
};
type CollectionCreateResponse = {
    priority?: number;
    meta?: any;
    banners?: ImageUrls;
    name?: string;
    query?: CollectionQuery[];
    description?: string;
    badge?: any;
    is_active?: boolean;
    tag?: string[];
    allow_facets?: boolean;
    sort_on?: string;
    type?: string;
    slug?: string;
    visible_facets_keys?: string[];
    logo?: BannerImage;
    allow_sort?: boolean;
    _schedule?: any;
    cron?: any;
    app_id?: string;
};
type CollectionDetailResponse = {
    priority?: number;
    meta?: any;
    banners?: ImageUrls;
    name?: string;
    uid?: string;
    query?: CollectionQuery[];
    description?: string;
    badge?: any;
    is_active?: boolean;
    tag?: string[];
    allow_facets?: boolean;
    type?: string;
    slug?: string;
    visible_facets_keys?: string[];
    logo?: Media1;
    allow_sort?: boolean;
    _schedule?: any;
    cron?: any;
    app_id?: string;
};
type UpdateCollection = {
    priority?: number;
    meta?: any;
    _custom_json?: any;
    name?: string;
    banners?: CollectionBanner;
    _locale_language?: any;
    tags?: string[];
    query?: CollectionQuery[];
    description?: string;
    published?: boolean;
    badge?: CollectionBadge;
    modified_by?: UserInfo;
    is_active?: boolean;
    sort_on?: string;
    allow_facets?: boolean;
    seo?: SeoDetail;
    type?: string;
    slug?: string;
    visible_facets_keys?: string[];
    is_visible?: boolean;
    logo?: CollectionImage;
    allow_sort?: boolean;
    _schedule?: CollectionSchedule;
};
type Price1 = {
    max?: number;
    min?: number;
    currency_symbol?: string;
    currency_code?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductBrand = {
    action?: Action;
    uid?: number;
    name?: string;
    logo?: Media1;
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
    price?: ProductListingPrice;
    discount?: string;
    short_description?: string;
    attributes?: any;
    has_variant?: boolean;
    medias?: Media1[];
    item_code?: string;
    item_type?: string;
    name?: string;
    brand?: ProductBrand;
    rating?: number;
    uid?: number;
    product_online_date?: string;
    color?: string;
    tryouts?: string[];
    promo_meta?: any;
    description?: string;
    rating_count?: number;
    sellable?: boolean;
    similars?: string[];
    highlights?: string[];
    type?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    image_nature?: string;
    slug: string;
    teaser_tag?: any;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    page?: Page;
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
    total_articles?: number;
    available_sizes?: number;
    name?: string;
    article_freshness?: number;
    total_sizes?: number;
    available_articles?: number;
};
type CatalogInsightItem = {
    sellable_count?: number;
    out_of_stock_count?: number;
    count?: number;
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
    brand_ids?: number[];
    company_id?: number;
    platform?: string;
    enabled?: boolean;
    opt_level: string;
    store_ids?: number[];
};
type CompanyOptIn = {
    brand_ids: number[];
    modified_on: number;
    company_id: number;
    created_by?: any;
    platform: string;
    modified_by?: any;
    enabled: boolean;
    opt_level: string;
    store_ids: number[];
    created_on: number;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    business_type?: string;
    company_type?: string;
    uid?: number;
    name?: string;
};
type CompanyBrandDetail = {
    company_id?: number;
    total_article?: number;
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
    timing?: any;
    display_name?: string;
    uid?: number;
    modified_on?: string;
    company_id?: number;
    additional_contacts?: any[];
    address?: any;
    store_code?: string;
    store_type?: string;
    manager?: any;
    documents?: any[];
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
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    type: string;
    mandatory?: boolean;
    allowed_values?: string[];
    multi?: boolean;
    range?: AttributeSchemaRange;
    format?: string;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    priority?: number;
    indexing: boolean;
    depends_on?: string[];
};
type GenderDetail = {
    slug?: string;
    departments?: string[];
    is_nested?: boolean;
    logo?: string;
    id?: string;
    meta?: AttributeMasterMeta;
    name?: string;
    description?: string;
    schema?: AttributeMaster;
    details?: AttributeMasterDetails;
    filters?: AttributeMasterFilter;
    enabled_for_end_consumer?: boolean;
};
type ProductTemplateCategory = {
    slug?: string;
    slug_key?: string;
    uid?: number;
    name?: string;
    template_slug?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: ProductTemplateCategory[];
};
type PTErrorResponse = {
    status?: number;
    meta?: any;
    message?: string;
    errors?: any;
    code?: string;
};
type UserSerializer = {
    uid?: string;
    contact?: string;
    user_id?: string;
    _id?: string;
    username?: string;
};
type GetDepartment = {
    slug?: string;
    uid?: number;
    modified_on?: string;
    page_no?: number;
    logo?: string;
    created_by?: UserSerializer;
    is_active?: boolean;
    page_size?: number;
    modified_by?: UserSerializer;
    item_type?: string;
    name?: string;
    synonyms?: string[];
    priority_order?: number;
    search?: string;
    created_on?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    status?: number;
    meta?: any;
    message?: string;
    errors?: any;
    code?: string;
};
type DepartmentCreateUpdate = {
    platforms?: any;
    slug?: string;
    uid?: number;
    _cls?: string;
    logo: string;
    is_active?: boolean;
    _custom_json?: any;
    name: string;
    synonyms?: string[];
    priority_order: number;
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
    contact?: string;
    user_id: string;
    super_user?: boolean;
    username: string;
};
type DepartmentModel = {
    verified_on?: string;
    slug?: any;
    uid?: number;
    modified_on: string;
    _cls?: any;
    logo: string;
    created_by?: UserDetail;
    modified_by?: UserDetail;
    is_active?: boolean;
    priority_order: number;
    _custom_json?: any;
    name: any;
    verified_by?: UserDetail;
    synonyms?: any[];
    _id?: any;
    created_on: string;
};
type ProductTemplate = {
    slug: string;
    is_archived?: boolean;
    is_physical: boolean;
    departments?: string[];
    attributes?: string[];
    categories?: string[];
    is_expirable: boolean;
    modified_on?: string;
    logo?: string;
    created_by?: any;
    is_active?: boolean;
    modified_by?: any;
    tag?: string;
    name?: string;
    description?: string;
    created_on?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    custom_order?: any;
    sizes?: any;
    short_description?: any;
    trader?: any;
    command?: any;
    multi_size?: any;
    item_code?: any;
    brand_uid?: any;
    item_type?: any;
    name?: any;
    product_publish?: any;
    tags?: any;
    variants?: any;
    trader_type?: any;
    size_guide?: any;
    category_slug?: any;
    description?: any;
    no_of_boxes?: any;
    media?: any;
    is_dependent?: any;
    highlights?: any;
    is_active?: any;
    country_of_origin?: any;
    hsn_code?: any;
    currency?: any;
    slug?: any;
    return_config?: any;
    product_group_tag?: any;
    teaser_tag?: any;
};
type GlobalValidation = {
    type?: string;
    required?: string[];
    title?: string;
    definitions?: any;
    properties?: Properties;
    description?: string;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    slug: string;
    is_archived?: boolean;
    is_physical: boolean;
    departments?: string[];
    attributes?: string[];
    categories?: string[];
    is_expirable: boolean;
    logo?: string;
    id?: string;
    is_active?: boolean;
    tag?: string;
    name?: string;
    description?: string;
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
    type?: string;
    brand?: string[];
    templates?: string[];
};
type ProductDownloadsItems = {
    trigger_on?: string;
    id?: string;
    created_by?: VerifiedBy;
    completed_on?: string;
    url?: string;
    template_tags?: any;
    task_id?: string;
    seller_id?: number;
    data?: ProductDownloadItemsData;
    status?: string;
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
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Category = {
    media?: Media2;
    slug?: string;
    level: number;
    uid?: number;
    modified_on?: string;
    hierarchy?: Hierarchy[];
    priority?: number;
    id?: string;
    marketplaces?: CategoryMapping;
    created_by?: any;
    is_active: boolean;
    modified_by?: any;
    tryouts?: string[];
    name: string;
    departments: number[];
    synonyms?: string[];
    created_on?: string;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    media?: Media2;
    slug?: string;
    level: number;
    hierarchy?: Hierarchy[];
    priority?: number;
    marketplaces?: CategoryMapping;
    is_active: boolean;
    tryouts?: string[];
    name: string;
    departments: number[];
    synonyms?: string[];
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type Image = {
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Logo = {
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type ReturnConfigResponse = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Product = {
    template_tag?: string;
    custom_order?: any;
    sizes?: any[];
    short_description?: string;
    trader?: any[];
    attributes?: any;
    is_expirable?: boolean;
    company_id?: number;
    multi_size?: boolean;
    is_image_less_product?: boolean;
    item_code?: string;
    brand_uid?: number;
    images?: Image[];
    _custom_json?: any;
    name?: string;
    item_type?: string;
    product_publish?: ProductPublished;
    tags?: string[];
    moq?: any;
    brand?: Brand;
    verified_on?: string;
    uid?: number;
    all_sizes?: any[];
    is_set?: boolean;
    variants?: any;
    category_uid?: number;
    size_guide?: string;
    category_slug?: string;
    color?: string;
    description?: string;
    variant_media?: any;
    no_of_boxes?: number;
    stage?: string;
    all_company_ids?: number[];
    verified_by?: VerifiedBy;
    media?: Media1[];
    pending?: string;
    modified_on?: string;
    all_identifiers?: string[];
    is_dependent?: boolean;
    highlights?: string[];
    created_by?: any;
    is_active?: boolean;
    country_of_origin?: string;
    modified_by?: any;
    hsn_code?: string;
    net_quantity?: NetQuantityResponse;
    tax_identifier?: any;
    currency?: string;
    variant_group?: any;
    image_nature?: string;
    slug?: string;
    category?: any;
    is_physical?: boolean;
    l3_mapping?: string[];
    primary_color?: string;
    return_config?: ReturnConfigResponse;
    id?: string;
    departments?: number[];
    product_group_tag?: string[];
    teaser_tag?: any;
    created_on?: string;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type Trader = {
    type?: string;
    address?: string[];
    name: any;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductCreateUpdateSchemaV2 = {
    template_tag: string;
    custom_order?: CustomOrder;
    sizes: any[];
    short_description?: string;
    trader: Trader[];
    company_id: number;
    is_image_less_product?: boolean;
    attributes?: any;
    multi_size?: boolean;
    action?: string;
    item_code: string;
    brand_uid: number;
    _custom_json?: any;
    name: string;
    item_type: string;
    product_publish?: ProductPublish;
    tags?: string[];
    uid?: number;
    is_set?: boolean;
    variants?: any;
    change_request_id?: any;
    size_guide?: string;
    category_slug: string;
    variant_media?: any;
    description?: string;
    requester?: string;
    no_of_boxes?: number;
    bulk_job_id?: string;
    media?: Media1[];
    is_dependent?: boolean;
    highlights?: string[];
    is_active?: boolean;
    country_of_origin: string;
    net_quantity?: NetQuantity;
    tax_identifier: TaxIdentifier;
    currency: string;
    variant_group?: any;
    slug: string;
    return_config: ReturnConfig;
    departments: number[];
    product_group_tag?: string[];
    teaser_tag?: TeaserTag;
};
type ProductVariants = {
    media?: Media1[];
    uid?: number;
    category_uid?: number;
    item_code?: string;
    brand_uid?: number;
    name?: string;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    name?: string;
    variant?: boolean;
    enabled_for_end_consumer?: boolean;
    tags?: string[];
    suggestion?: string;
    description?: string;
    details: AttributeMasterDetails;
    schema: AttributeMaster;
    modified_on?: string;
    raw_key?: string;
    created_by?: any;
    modified_by?: any;
    slug: string;
    is_nested?: boolean;
    logo?: string;
    unit?: string;
    filters: AttributeMasterFilter;
    departments: string[];
    synonyms?: any;
    created_on?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    gtin_value: string;
    primary?: boolean;
    gtin_type: string;
};
type AllSizes = {
    item_width: number;
    item_length: number;
    item_weight: number;
    item_height: number;
    size: any;
    item_weight_unit_of_measure: any;
    identifiers?: ValidateIdentifier[];
    item_dimensions_unit_of_measure: string;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
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
    template_tag?: string;
    failed_records?: string[];
    file_path?: string;
    modified_on?: string;
    company_id?: number;
    total?: number;
    created_by?: UserDetail1;
    is_active?: boolean;
    modified_by?: UserDetail1;
    cancelled_records?: string[];
    failed?: number;
    succeed?: number;
    stage?: string;
    template?: ProductTemplate;
    cancelled?: number;
    created_on?: string;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    email?: string;
    user_id?: string;
    uid?: string;
    username?: string;
};
type BulkJob = {
    template_tag?: string;
    failed_records?: any[];
    file_path?: string;
    modified_on?: string;
    company_id: number;
    total?: number;
    created_by?: UserInfo1;
    is_active?: boolean;
    modified_by?: UserInfo1;
    custom_template_tag?: string;
    cancelled_records?: any[];
    succeed?: number;
    failed?: number;
    stage?: string;
    cancelled?: number;
    tracking_url?: string;
    created_on: string;
};
type BulkResponse = {
    modified_on?: string;
    created_by?: UserInfo1;
    is_active?: boolean;
    modified_by?: UserInfo1;
    batch_id: string;
    created_on: string;
};
type BulkProductRequest = {
    template_tag: string;
    company_id: number;
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
    user_id?: string;
    company_id?: number;
    username?: string;
};
type Items = {
    failed_records?: string[];
    file_path?: string;
    modified_on?: string;
    company_id?: number;
    total?: number;
    retry?: number;
    id?: string;
    created_by?: UserCommon;
    modified_by?: UserCommon;
    is_active?: boolean;
    cancelled_records?: string[];
    succeed?: number;
    failed?: number;
    stage?: string;
    cancelled?: number;
    tracking_url?: string;
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
    size?: string;
    company_id?: number;
    item_id?: number;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    seller_identifier?: string;
    sellable_quantity?: number;
    price?: number;
    store?: any;
    uid?: string;
    identifiers?: any;
    price_effective?: number;
    item_id?: number;
    price_transfer?: number;
    quantity?: number;
    inventory_updated_on?: string;
    size?: string;
    currency?: string;
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
    quantity?: number;
    name?: string;
};
type GTIN = {
    gtin_value: any;
    primary?: boolean;
    gtin_type: string;
};
type InvSize = {
    currency: string;
    price?: number;
    set?: InventorySet;
    item_width?: number;
    price_effective: number;
    is_set?: boolean;
    item_length?: number;
    item_weight?: number;
    expiration_date?: string;
    store_code: string;
    price_transfer?: number;
    item_height?: number;
    quantity: number;
    size: any;
    item_weight_unit_of_measure?: string;
    identifiers: GTIN[];
    item_dimensions_unit_of_measure?: string;
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
type PriceMeta = {
    tp_notes?: any;
    effective: number;
    marked: number;
    updated_at?: string;
    currency: string;
    transfer: number;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    sellable?: QuantityBase;
    order_committed?: QuantityBase;
};
type BrandMeta = {
    id: number;
    name: string;
};
type WeightResponse = {
    shipping: number;
    is_default: boolean;
    unit: string;
};
type ManufacturerResponse = {
    is_default: boolean;
    address: string;
    name: string;
};
type DimensionResponse = {
    is_default: boolean;
    height: number;
    unit: string;
    length: number;
    width: number;
};
type ReturnConfig1 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type InventorySellerResponse = {
    seller_identifier: string;
    store: StoreMeta;
    company: CompanyMeta;
    price: PriceMeta;
    total_quantity: number;
    fragile: boolean;
    trader?: Trader1[];
    quantities?: Quantities;
    expiration_date?: string;
    meta?: any;
    fynd_item_code: string;
    _custom_json?: any;
    tags?: string[];
    brand: BrandMeta;
    uid: string;
    set?: InventorySet;
    fynd_meta?: any;
    fynd_article_code: string;
    is_set?: boolean;
    item_id: number;
    weight: WeightResponse;
    manufacturer: ManufacturerResponse;
    stage?: string;
    track_inventory?: boolean;
    created_by?: UserSerializer;
    is_active?: boolean;
    country_of_origin: string;
    modified_by?: UserSerializer;
    raw_meta?: any;
    size: string;
    trace_id?: string;
    tax_identifier?: any;
    dimension: DimensionResponse;
    added_on_store?: string;
    return_config?: ReturnConfig1;
    identifier: any;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type ArticleStoreResponse = {
    store_type?: string;
    store_code?: string;
    uid?: number;
    name?: string;
};
type PriceArticle = {
    tp_notes?: any;
    effective?: number;
    marked?: number;
    currency?: string;
    transfer?: number;
};
type CompanyMeta1 = {
    id?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    not_available?: Quantity;
    damaged?: Quantity;
    sellable?: Quantity;
    order_committed?: Quantity;
};
type Trader2 = {
    type?: string;
    address?: string[];
    name?: string;
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
type DimensionResponse1 = {
    length?: number;
    width?: number;
    height?: number;
    unit?: string;
};
type ReturnConfig2 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type GetInventories = {
    seller_identifier?: string;
    store?: ArticleStoreResponse;
    price?: PriceArticle;
    total_quantity?: number;
    company?: CompanyMeta1;
    quantities?: QuantitiesArticle;
    trader?: Trader2[];
    expiration_date?: string;
    tags?: string[];
    brand?: BrandMeta1;
    platforms?: any;
    uid?: string;
    weight?: WeightResponse1;
    is_set?: boolean;
    item_id?: number;
    manufacturer?: ManufacturerResponse1;
    stage?: string;
    track_inventory?: boolean;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    country_of_origin?: string;
    inventory_updated_on?: string;
    size?: string;
    trace_id?: string;
    dimension?: DimensionResponse1;
    tax_identifier?: any;
    return_config?: ReturnConfig2;
    id?: string;
    date_meta?: DateMeta;
    identifier?: any;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    failed_records?: string[];
    file_path?: string;
    modified_on?: string;
    company_id?: number;
    total?: number;
    id?: string;
    created_by?: any;
    is_active?: boolean;
    modified_by?: any;
    cancelled_records?: string[];
    failed?: number;
    succeed?: number;
    stage?: string;
    cancelled?: number;
    created_on?: string;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    seller_identifier: string;
    total_quantity?: number;
    price?: number;
    price_effective?: number;
    expiration_date?: string;
    store_code: string;
    price_marked?: number;
    tags?: string[];
    quantity?: number;
    trace_id?: string;
    item_weight_unit_of_measure?: string;
    currency?: string;
    item_dimensions_unit_of_measure?: string;
};
type InventoryBulkRequest = {
    batch_id: string;
    company_id: number;
    user?: any;
    sizes: InventoryJobPayload[];
};
type InventoryExportJob = {
    trigger_on?: string;
    request_params?: any;
    completed_on?: string;
    url?: string;
    task_id: string;
    seller_id: number;
    status?: string;
};
type InventoryExportRequest = {
    type?: string;
    brand?: number[];
    store?: number[];
};
type InventoryExportResponse = {
    trigger_on?: string;
    request_params?: any;
    task_id: string;
    seller_id: number;
    status?: string;
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
    seller_identifier: string;
    total_quantity?: number;
    price_effective?: number;
    expiration_date?: string;
    price_marked?: number;
    store_id: number;
    trace_id?: string;
    tags?: string[];
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
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    hs2_code?: string;
    tax_on_mrp?: boolean;
    threshold1?: number;
    threshold2?: number;
    modified_on?: string;
    company_id?: number;
    tax_on_esp?: boolean;
    id?: string;
    tax1?: number;
    hsn_code?: string;
    tax2?: number;
};
type PageResponse = {
    has_previous?: boolean;
    item_total?: number;
    current?: string;
    size?: number;
    has_next?: boolean;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    hs2_code: string;
    tax_on_mrp: boolean;
    uid?: number;
    threshold1: number;
    threshold2?: number;
    company_id: number;
    tax_on_esp?: boolean;
    is_active?: boolean;
    tax1: number;
    hsn_code: string;
    tax2?: number;
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
    threshold: number;
    cess?: number;
    rate: number;
};
type HSNDataInsertV2 = {
    type: string;
    reporting_hsn: string;
    modified_on?: string;
    created_by?: any;
    taxes: TaxSlab[];
    modified_by?: any;
    country_code: string;
    hsn_code: string;
    description: string;
    created_on?: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    slug?: string;
    discount?: string;
    uid?: number;
    departments?: string[];
    logo?: Media;
    action?: Action;
    name?: string;
    banners?: ImageUrls;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    slug?: string;
    uid?: number;
    logo?: Media;
    name?: string;
    priority_order?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    slug?: string;
    uid?: number;
    action?: Action;
    _custom_json?: any;
    banners?: ImageUrls;
    name?: string;
    childs?: any[];
};
type SecondLevelChild = {
    slug?: string;
    uid?: number;
    action?: Action;
    _custom_json?: any;
    banners?: ImageUrls;
    name?: string;
    childs?: ThirdLevelChild[];
};
type Child = {
    slug?: string;
    uid?: number;
    action?: Action;
    _custom_json?: any;
    banners?: ImageUrls;
    name?: string;
    childs?: SecondLevelChild[];
};
type CategoryItems = {
    slug?: string;
    uid?: number;
    action?: Action;
    banners?: ImageUrls;
    name?: string;
    childs?: Child[];
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
    items?: ProductListingDetail[];
    operators?: any;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    page: Page;
};
type ProductDetail = {
    short_description?: string;
    attributes?: any;
    has_variant?: boolean;
    medias?: Media1[];
    item_code?: string;
    item_type?: string;
    name?: string;
    brand?: ProductBrand;
    rating?: number;
    uid?: number;
    product_online_date?: string;
    color?: string;
    tryouts?: string[];
    promo_meta?: any;
    description?: string;
    rating_count?: number;
    similars?: string[];
    highlights?: string[];
    type?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    image_nature?: string;
    slug: string;
    teaser_tag?: any;
};
type InventoryPage = {
    type: string;
    has_previous?: boolean;
    item_total: number;
    next_id?: string;
    has_next?: boolean;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type ArticleQuery = {
    size: string;
    item_id: number;
    ignored_stores?: number[];
};
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type AssignStoreArticle = {
    query?: ArticleQuery;
    meta?: any;
    group_id?: string;
    quantity?: number;
    article_assignment?: ArticleAssignment;
};
type AssignStore = {
    channel_type?: string;
    pincode: string;
    company_id?: number;
    articles: AssignStoreArticle[];
    channel_identifier?: string;
    store_ids?: number[];
    app_id: string;
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    uid?: string;
    index?: number;
    company_id?: number;
    item_id: number;
    _id?: string;
    price_effective?: number;
    s_city?: string;
    meta?: any;
    strategy_wise_listing?: any[];
    group_id?: string;
    price_marked?: number;
    store_id?: number;
    quantity: number;
    size: string;
    store_pincode?: number;
    status: boolean;
    article_assignment: ArticleAssignment1;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetAddressSerializer = {
    longitude?: number;
    address_type?: string;
    state?: string;
    landmark?: string;
    pincode?: number;
    latitude?: number;
    address2?: string;
    country_code?: string;
    address1?: string;
    city?: string;
    country?: string;
};
type GetCompanySerializer = {
    verified_on?: string;
    uid?: number;
    modified_on?: string;
    reject_reason?: string;
    company_type?: string;
    created_by?: UserSerializer1;
    modified_by?: UserSerializer1;
    business_type?: string;
    name?: string;
    stage?: string;
    verified_by?: UserSerializer1;
    addresses?: GetAddressSerializer[];
    created_on?: string;
};
type InvoiceCredSerializer = {
    enabled?: boolean;
    password?: string;
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
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type LocationManagerSerializer = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type GetLocationSerializer = {
    company?: GetCompanySerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    _custom_json?: any;
    name: string;
    warnings?: any;
    verified_on?: string;
    display_name: string;
    uid?: number;
    phone_number: string;
    documents?: Document[];
    stage?: string;
    verified_by?: UserSerializer2;
    notification_emails?: string[];
    timing?: LocationDayWiseSerializer[];
    modified_on?: string;
    address: GetAddressSerializer;
    created_by?: UserSerializer2;
    modified_by?: UserSerializer2;
    contact_numbers?: SellerPhoneNumber[];
    product_return_config?: ProductReturnConfigSerializer;
    store_type?: string;
    manager?: LocationManagerSerializer;
    integration_type?: LocationIntegrationType;
    code: string;
    created_on?: string;
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
    uid: number;
    logo?: string;
    is_active?: boolean;
    _custom_json?: any;
    name?: string;
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
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
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
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type GetCompanyProfileSerializerResponse = {
    business_country_info?: BusinessCountryInfo;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    stage?: string;
    modified_on?: string;
    company_type: string;
    business_info?: string;
    uid: number;
    _custom_json?: any;
    created_on?: string;
    name?: string;
    business_type: string;
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer[];
    business_details?: BusinessDetails;
    addresses?: GetAddressSerializer[];
    warnings?: any;
    documents?: Document[];
    franchise_enabled?: boolean;
    verified_on?: string;
    mode?: string;
    contact_details?: ContactDetails;
    modified_by?: UserSerializer;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type CreateUpdateAddressSerializer = {
    country_code?: string;
    address2?: string;
    state: string;
    longitude: number;
    address_type: string;
    city: string;
    pincode: number;
    landmark?: string;
    country: string;
    latitude: number;
    address1: string;
};
type UpdateCompany = {
    business_info?: string;
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer1[];
    _custom_json?: any;
    reject_reason?: string;
    business_details?: BusinessDetails;
    addresses?: CreateUpdateAddressSerializer[];
    name?: string;
    warnings?: any;
    franchise_enabled?: boolean;
    documents?: Document[];
    contact_details?: ContactDetails;
    business_type?: string;
    company_type?: string;
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
    uid?: number;
    stage?: string;
    store_documents?: DocumentsObj;
    brand?: DocumentsObj;
    store?: DocumentsObj;
    product?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    stage?: string;
    modified_on?: string;
    synonyms?: string[];
    _locale_language?: any;
    _custom_json?: any;
    uid?: number;
    reject_reason?: string;
    created_on?: string;
    name: string;
    slug_key?: string;
    logo?: string;
    warnings?: any;
    verified_on?: string;
    mode?: string;
    banner?: BrandBannerSerializer;
    description?: string;
    modified_by?: UserSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    logo: string;
    _locale_language?: any;
    _custom_json?: any;
    brand_tier?: string;
    name: string;
    banner?: BrandBannerSerializer;
    description?: string;
    synonyms?: string[];
    uid?: number;
    company_id?: number;
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
    notification_emails?: string[];
    business_country_info?: BusinessCountryInfo;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    _custom_json?: any;
    reject_reason?: string;
    details?: CompanyDetails;
    created_on?: string;
    verified_by?: UserSerializer;
    modified_on?: string;
    name?: string;
    addresses?: GetAddressSerializer[];
    verified_on?: string;
    stage?: string;
    business_type: string;
    uid?: number;
    market_channels?: string[];
    company_type: string;
};
type CompanyBrandSerializer = {
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    reject_reason?: string;
    created_on?: string;
    verified_by?: UserSerializer;
    modified_on?: string;
    brand?: GetBrandResponseSerializer;
    stage?: string;
    verified_on?: string;
    warnings?: any;
    uid?: number;
    company?: CompanySerializer;
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
type HolidayDateSerializer = {
    end_date: string;
    start_date: string;
};
type HolidaySchemaSerializer = {
    holiday_type: string;
    title: string;
    date: HolidayDateSerializer;
};
type AddressSerializer = {
    country_code?: string;
    address2?: string;
    state?: string;
    longitude: number;
    address_type?: string;
    city?: string;
    pincode?: number;
    landmark?: string;
    country?: string;
    latitude: number;
    address1?: string;
};
type LocationSerializer = {
    notification_emails?: string[];
    address: AddressSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    timing?: LocationDayWiseSerializer[];
    _custom_json?: any;
    store_type?: string;
    display_name: string;
    contact_numbers?: SellerPhoneNumber[];
    stage?: string;
    product_return_config?: ProductReturnConfigSerializer;
    name: string;
    documents?: Document[];
    holiday?: HolidaySchemaSerializer[];
    warnings?: any;
    manager?: LocationManagerSerializer;
    uid?: number;
    company: number;
    code: string;
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
