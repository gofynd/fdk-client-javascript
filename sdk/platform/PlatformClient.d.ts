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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, PaymentModeInfo, ShipmentItemFulFillingStore, Prices, GSTDetailsData, PlatformItem, BagUnit, ShipmentStatus, UserDataInfo, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagStateMapper, CurrentStatus, OrderBagArticle, PlatformDeliveryAddress, Identifier, FinancialBreakup, BagConfigs, BagGST, OrderBrandName, OrderBags, OrderingStoreDetails, OrderDetailsData, UserDetailsData, DPDetailsData, FulfillingStore, TrackingList, ShipmentPayments, BagStatusHistory, ShipmentStatusData, PlatformShipment, ShipmentInfoResponse, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, ArticleDetails, AffiliateMeta, AffiliateBagDetails, Attributes, Item, ReturnConfig, Dimensions, Weight, Article, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, BagGSTDetails, B2BPODetails, BagMeta, Brand, EInvoice, EinvoiceInfo, BuyerDetails, ShipmentTimeStamp, DebugInfo, Formatted, LockData, ShipmentMeta, PDFLinks, AffiliateDetails, Dates, BagReturnableCancelableStatus, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, MarketPlacePdf, AffiliateBag, OrderUser, UserData, OrderPriority, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, PaymentMethod, PaymentInfo, BillingInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, ShippingInfo, TaxInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, LimitedProductData, Price, Size, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, GetMultiSizeGuide, ListSizeGuide, SizeGuideResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, MOQData, SEOData, OwnerAppItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, SeoDetail, CollectionBadge, CollectionSchedule, CollectionImage, CollectionBanner, UserInfo, CollectionQuery, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, NetQuantity, TeaserTag, ProductPublish, CustomOrder, TaxIdentifier, Trader, ProductCreateUpdateSchemaV2, NetQuantityResponse, Logo, Image, ProductPublished, ReturnConfigResponse, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, ProductCreateUpdate, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, BrandMeta, CompanyMeta, ManufacturerResponse, QuantityBase, Quantities, WeightResponse, PriceMeta, DimensionResponse, ReturnConfig1, Trader1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportQuantityFilter, InventoryExportFilter, InventoryExportRequest, InventoryExportResponse, InventoryExportAdvanceOption, InventoryExportJob, BrandMeta1, ArticleStoreResponse, CompanyMeta1, ManufacturerResponse1, Quantity, QuantitiesArticle, WeightResponse1, PriceArticle, DimensionResponse1, ReturnConfig2, Trader2, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, PageResponse, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, GetAddressSerializer, UserSerializer1, GetCompanySerializer, SellerPhoneNumber, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, UserSerializer2, ProductReturnConfigSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, ContactDetails, CompanyTaxesSerializer, BusinessCountryInfo, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validation, CouponDateMeta, Rule, CouponAction, CouponSchedule, Ownership, PaymentAllowValue, PaymentModes, PriceRange, UsesRemaining, UsesRestriction, BulkBundleRestriction, PostOrder, Restrictions, State, RuleDefinition, Validity, CouponAuthor, DisplayMetaDict, DisplayMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, PromotionAction, DisplayMeta1, PromotionDateMeta, PromotionSchedule, PromotionAuthor, CompareObject, ItemCriteria, Visibility, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, PostOrder1, UserRegistered, Restrictions1, DiscountOffer, DiscountRule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CartProductIdentifer, ProductPrice, ProductPriceInfo, DiscountRulesApp, Ownership2, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, BasePrice, ArticlePriceInfo, BaseInfo, ProductArticle, ProductImage, ActionQuery, ProductAction, CategoryInfo, CartProduct, PromoMeta, ProductAvailability, CartProductInfo, LoyaltyPoints, RawBreakup, CouponBreakup, DisplayBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, Files, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    application?: ApplicationData;
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
type ApplicationData = {
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
    slug?: string;
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
type LocationDetails = {
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
    state_code?: string;
    country_code?: string;
    latitude?: string;
    longitude?: string;
};
type Locations = {
    items?: LocationDetails[];
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
type Activity = {
    current_state?: any;
    document_id?: string;
    previous_state?: any;
};
type ActivityDump = {
    activity?: Activity;
    created_by?: CreatedBy;
    date_meta?: DateMeta;
    id?: string;
    type?: string;
};
type AddMediaListRequest = {
    entity_id?: string;
    entity_type?: string;
    media_list?: AddMediaRequest[];
    ref_id?: string;
    ref_type?: string;
};
type AddMediaRequest = {
    cloud_id?: string;
    cloud_name?: string;
    cloud_provider?: string;
    entity_id?: string;
    entity_type?: string;
    media_url?: string;
    ref_id?: string;
    ref_type?: string;
    tags?: string[];
    thumbnail_url?: string;
    type?: string;
};
type ApproveRequest = {
    approve?: boolean;
    entity_type?: string;
    id: string;
    reason?: string;
};
type Attribute = {
    date_meta?: DateMeta;
    description?: string;
    id?: string;
    name?: string;
    slug?: string;
    tags?: TagMeta[];
};
type AttributeObject = {
    description?: string;
    name: string;
    slug?: string;
    title?: string;
    type: string;
    value: number;
};
type CreatedBy = {
    id?: string;
    name?: string;
    tags?: TagMeta[];
};
type CursorGetResponse = {
    items?: any[];
    page?: Page;
};
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DeviceMeta = {
    app_version?: string;
    platform?: string;
};
type Entity = {
    id?: string;
    type?: string;
};
type EntityRequest = {
    entity_id?: string;
    entity_type?: string;
};
type FeedbackAttributes = {
    items?: Attribute[];
    page?: Page;
};
type FeedbackError = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
type FeedbackState = {
    active?: boolean;
    archive?: boolean;
    media?: string;
    qna?: boolean;
    rating?: boolean;
    review?: boolean;
};
type GetResponse = {
    data?: any;
    page?: Page;
};
type GetReviewResponse = {
    facets?: ReviewFacet[];
    items?: any[];
    page?: Page;
    sort?: SortMethod[];
};
type InsertResponse = {
    count?: number;
};
type MediaMeta = {
    max_count?: number;
    size?: number;
    type?: string;
};
type MediaMetaRequest = {
    max_count: number;
    size: number;
};
type NumberGetResponse = {
    items?: any[];
    page?: Page;
};
type PageCursor = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size: number;
    type: string;
};
type PageNumber = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
type Rating = {
    attributes?: Attribute[];
    attributes_slugs?: string[];
    ui?: UI;
};
type RatingRequest = {
    attributes: string[];
    ui?: UI;
};
type ReportAbuseRequest = {
    description?: string;
    entity_id: string;
    entity_type: string;
};
type Review = {
    description?: string;
    header?: string;
    image_meta?: MediaMeta;
    title?: string;
    video_meta?: MediaMeta;
    vote_allowed?: boolean;
};
type ReviewFacet = {
    display?: string;
    name?: string;
    selected?: boolean;
    slug?: string;
    type?: string;
};
type ReviewRequest = {
    description: string;
    header: string;
    image_meta: MediaMetaRequest;
    is_vote_allowed: boolean;
    title: string;
    video_meta: MediaMetaRequest;
};
type SaveAttributeRequest = {
    description?: string;
    name: string;
    slug: string;
};
type SortMethod = {
    name?: string;
    selected?: boolean;
    type?: string;
};
type TagMeta = {
    media?: MediaMeta[];
    name?: string;
    type?: string;
};
type Template = {
    date_meta?: DateMeta;
    entity?: Entity;
    id?: string;
    name?: string;
    rating?: Rating;
    review?: Review;
    state?: FeedbackState;
    tags?: TagMeta[];
};
type TemplateGetResponse = {
    items?: Template[];
    page?: Page;
};
type TemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type TemplateRequestList = {
    template_list: TemplateRequest[];
};
type UI = {
    feedback_question?: string[];
    icon?: UIIcon;
    text?: string[];
    type?: string;
};
type UIIcon = {
    active?: string;
    inactive?: string;
    selected?: string[];
};
type UpdateAttributeRequest = {
    description?: string;
    name: string;
    slug?: string;
};
type UpdateResponse = {
    count?: number;
};
type UpdateReviewRequest = {
    active?: boolean;
    application?: string;
    approve?: boolean;
    archive?: boolean;
    attributes_rating?: AttributeObject[];
    description?: string;
    device_meta?: DeviceMeta;
    entity_id?: string;
    entity_type?: string;
    media_resource?: MediaMeta[];
    rating?: number;
    review_id?: string;
    template_id?: string;
    title?: string;
};
type UpdateTemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type UpdateTemplateStatusRequest = {
    active?: boolean;
    archive?: boolean;
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
type OneTimeChargeItem = {
    name: string;
    term?: string;
    pricing_type: string;
    price: EntityChargePrice;
    capped_amount?: number;
    is_test?: boolean;
    metadata?: any;
};
type CreateOneTimeCharge = {
    name: string;
    charge: OneTimeChargeItem;
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
type OneTimeChargeEntity = {
    _id?: string;
    name?: string;
    status?: string;
    activated_on?: string;
    cancelled_on?: string;
    metadata?: any;
    return_url?: string;
    is_test?: boolean;
    pricing_type?: string;
    subscriber_id?: string;
    entity_type?: string;
    entity_id?: string;
    meta?: any;
    price?: EntityChargePrice;
};
type CreateOneTimeChargeResponse = {
    charge?: OneTimeChargeEntity;
    confirm_url?: string;
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
    credit_balance?: number;
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
    created: boolean;
    excluded_fields: string[];
    success: boolean;
    aggregators?: any[];
    display_fields: string[];
    app_id: string;
};
type ErrorCodeDescription = {
    description: string;
    success: boolean;
    code: string;
};
type PaymentGatewayConfig = {
    is_active?: boolean;
    key: string;
    secret: string;
    config_type: string;
    merchant_salt: string;
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
    small: string;
    large: string;
};
type IntentApp = {
    package_name?: string;
    logos?: PaymentModeLogo;
    display_name?: string;
    code?: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    card_reference?: string;
    fynd_vpa?: string;
    name?: string;
    cod_limit?: number;
    card_id?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_name?: string;
    intent_app?: IntentApp[];
    display_name?: string;
    nickname?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    timeout?: number;
    card_number?: string;
    card_fingerprint?: string;
    card_token?: string;
    cod_limit_per_order?: number;
    merchant_code?: string;
    card_brand?: string;
    card_type?: string;
    code?: string;
    card_issuer?: string;
    intent_app_error_list?: string[];
    retry_count?: number;
    intent_flow?: boolean;
    aggregator_name: string;
    display_priority?: number;
    logo_url?: PaymentModeLogo;
    exp_month?: number;
    card_isin?: string;
    card_brand_image?: string;
    expired?: boolean;
    remaining_limit?: number;
    exp_year?: number;
};
type RootPaymentMode = {
    list?: PaymentModeList[];
    aggregator_name?: string;
    name: string;
    anonymous_enable?: boolean;
    display_priority: number;
    add_card_enabled?: boolean;
    is_pay_by_card_pl?: boolean;
    display_name: string;
    save_card?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type Payout = {
    more_attributes: any;
    is_active: boolean;
    transfer_type: string;
    is_default: boolean;
    payouts_aggregators: any[];
    customers: any;
    unique_transfer_no: any;
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    state?: string;
    bank_name?: string;
    pincode?: number;
    branch_name?: string;
    account_holder?: string;
    account_type: string;
    country?: string;
    account_no?: string;
    ifsc_code: string;
    city?: string;
};
type PayoutRequest = {
    bank_details: PayoutBankDetails;
    aggregator: string;
    is_active: boolean;
    users: any;
    transfer_type: string;
    unique_external_id: string;
};
type PayoutResponse = {
    bank_details: any;
    aggregator: string;
    created: boolean;
    success: boolean;
    is_active: boolean;
    users: any;
    transfer_type: string;
    payouts: any;
    payment_status: string;
    unique_transfer_no: string;
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
    description: string;
    success: boolean;
    code: string;
};
type BankDetailsForOTP = {
    bank_name: string;
    branch_name: string;
    account_holder: string;
    account_no: string;
    ifsc_code: string;
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
    account_holder: string;
    comment?: string;
    delights_user_name?: string;
    subtitle: string;
    account_no: string;
    beneficiary_id: string;
    display_name: string;
    bank_name: string;
    email: string;
    is_active: boolean;
    address: string;
    ifsc_code: string;
    id: number;
    created_on: string;
    branch_name?: string;
    transfer_mode: string;
    title: string;
    modified_on: string;
    mobile?: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    payment_gateway?: string;
    payment_id?: string;
    extra_meta?: any;
    order_id?: string;
    current_status?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    name?: string;
    mode: string;
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
type PlatformPaymentOptions = {
    mode_of_payment: string;
    cod_charges?: number;
    callback_url?: any;
    methods: any;
    anonymous_cod?: boolean;
    payment_selection_lock?: any;
    enabled: boolean;
    cod_amount_limit?: number;
    source: string;
};
type PlatfromPaymentConfig = {
    data: PlatformPaymentOptions;
    message: string;
    success: boolean;
};
type UpdatePlatformPaymentConfig = {
    cod_charges?: number;
    methods: any;
    anonymous_cod?: boolean;
    payment_selection_lock?: any;
    cod_amount_limit?: number;
};
type CODdata = {
    user_id: string;
    is_active: boolean;
    usages: number;
    limit: number;
    remaining_limit: number;
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
type EdcModelData = {
    aggregator: string;
    models: string[];
    aggregator_id: number;
};
type EdcAggregatorAndModelListResponse = {
    data: EdcModelData[];
    success: boolean;
};
type StatisticsData = {
    inactive_device_count: number;
    active_device_count: number;
};
type EdcDeviceStatsResponse = {
    statistics: StatisticsData;
    success: boolean;
};
type EdcAddRequest = {
    device_tag?: string;
    store_id: number;
    terminal_serial_no: string;
    edc_device_serial_no: string;
    edc_model: string;
    aggregator_id: number;
};
type EdcDevice = {
    aggregator_name?: string;
    device_tag: string;
    store_id: number;
    is_active: boolean;
    terminal_serial_no: string;
    edc_device_serial_no: string;
    terminal_unique_identifier: string;
    edc_model?: string;
    merchant_store_pos_code?: string;
    aggregator_id: number;
    application_id: string;
};
type EdcDeviceAddResponse = {
    data: EdcDevice;
    success: boolean;
};
type EdcDeviceDetailsResponse = {
    data: EdcDevice;
    success: boolean;
};
type EdcUpdateRequest = {
    device_tag?: string;
    store_id?: number;
    is_active?: string;
    edc_device_serial_no?: string;
    edc_model?: string;
    merchant_store_pos_code?: string;
    aggregator_id?: number;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    page: Page;
    success: boolean;
    items: EdcDevice[];
};
type PaymentInitializationRequest = {
    aggregator: string;
    contact: string;
    email: string;
    device_id?: string;
    timeout?: number;
    vpa?: string;
    razorpay_payment_id?: string;
    amount: number;
    currency: string;
    customer_id: string;
    order_id: string;
    merchant_order_id: string;
    method: string;
};
type PaymentInitializationResponse = {
    aggregator: string;
    bqr_image?: string;
    status?: string;
    upi_poll_url?: string;
    success: boolean;
    vpa?: string;
    virtual_id?: string;
    timeout?: number;
    device_id?: string;
    razorpay_payment_id?: string;
    polling_url: string;
    amount?: number;
    aggregator_order_id?: string;
    currency?: string;
    customer_id?: string;
    merchant_order_id: string;
    method: string;
};
type PaymentStatusUpdateRequest = {
    aggregator: string;
    contact: string;
    status: string;
    email: string;
    device_id?: string;
    vpa?: string;
    amount: number;
    currency: string;
    customer_id: string;
    order_id: string;
    merchant_order_id: string;
    method: string;
};
type PaymentStatusUpdateResponse = {
    status: string;
    aggregator_name: string;
    success?: boolean;
    retry: boolean;
    redirect_url?: string;
};
type ResendOrCancelPaymentRequest = {
    order_id: string;
    request_type: string;
    device_id?: string;
};
type LinkStatus = {
    status: boolean;
    message: string;
};
type ResendOrCancelPaymentResponse = {
    data: LinkStatus;
    success: boolean;
};
type FilterInfoOption = {
    name?: string;
    text: string;
    value?: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    text: string;
    type: string;
    value: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type Prices = {
    delivery_charge?: number;
    fynd_credits?: number;
    refund_credit?: number;
    price_effective?: number;
    cashback?: number;
    promotion_effective_discount?: number;
    amount_paid_roundoff?: number;
    coupon_value?: number;
    cod_charges?: number;
    value_of_good?: number;
    cashback_applied?: number;
    discount?: number;
    tax_collected_at_source?: number;
    amount_paid?: number;
    price_marked?: number;
    refund_amount?: number;
};
type GSTDetailsData = {
    gstin_code: string;
    brand_calculated_amount: number;
    value_of_good: number;
    gst_fee: number;
    tax_collected_at_source: number;
};
type PlatformItem = {
    color?: string;
    name?: string;
    image?: string[];
    can_return?: boolean;
    department_id?: number;
    can_cancel?: boolean;
    l3_category?: number;
    l1_category?: string[];
    code?: string;
    images?: string[];
    id?: number;
    l3_category_name?: string;
    size?: string;
};
type BagUnit = {
    shipment_id: string;
    ordering_channel: string;
    bag_id: number;
    total_shipment_bags: number;
    gst?: GSTDetailsData;
    can_return?: boolean;
    prices?: Prices;
    status: any;
    can_cancel?: boolean;
    item_quantity: number;
    item?: PlatformItem;
};
type ShipmentStatus = {
    title: string;
    hex_code: string;
    actual_status: string;
    status: string;
    ops_status: string;
};
type UserDataInfo = {
    first_name?: string;
    is_anonymous_user?: boolean;
    last_name?: string;
    name?: string;
    uid?: number;
    mobile?: string;
    avis_user_id?: string;
    email?: string;
    gender?: string;
};
type ShipmentItem = {
    sla?: any;
    payment_mode_info?: PaymentModeInfo;
    total_bags_count: number;
    payment_methods?: any;
    created_at: string;
    application?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    total_shipments_in_order: number;
    prices?: Prices;
    bags?: BagUnit[];
    channel?: any;
    shipment_status?: ShipmentStatus;
    company?: any;
    shipment_created_at: number;
    id: string;
    user?: UserDataInfo;
    fulfilling_centre: string;
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    page?: any;
    items?: ShipmentItem[];
    applied_filters?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    item_criteria?: ItemCriterias;
    cart_conditions?: any;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type AppliedPromos = {
    buy_rules?: BuyRules[];
    article_quantity?: number;
    amount?: number;
    mrp_promotion?: boolean;
    promo_id?: string;
    promotion_name?: string;
    promotion_type?: string;
    discount_rules?: DiscountRules[];
};
type BagStateMapper = {
    is_active?: boolean;
    journey_type: string;
    name: string;
    notify_customer?: boolean;
    state_type: string;
    app_display_name?: string;
    bs_id: number;
    app_state_name?: string;
    display_name: string;
    app_facing?: boolean;
};
type CurrentStatus = {
    state_id?: number;
    updated_at?: number;
    delivery_awb_number?: string;
    current_status_id: number;
    created_at?: string;
    bag_id?: number;
    shipment_id?: string;
    delivery_partner_id?: number;
    state_type?: string;
    status?: string;
    bag_state_mapper?: BagStateMapper;
    store_id?: number;
    kafka_sync?: boolean;
};
type OrderBagArticle = {
    return_config?: any;
    uid?: string;
    identifiers?: any;
};
type PlatformDeliveryAddress = {
    pincode?: string;
    updated_at?: string;
    phone?: string;
    contact_person?: string;
    created_at?: string;
    address_type?: string;
    city?: string;
    address2?: string;
    landmark?: string;
    address1?: string;
    address_category?: string;
    version?: string;
    longitude?: number;
    email?: string;
    country?: string;
    area?: string;
    latitude?: number;
    state?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    gst_tax_percentage: number;
    identifiers: Identifier;
    cashback: number;
    coupon_value: number;
    cashback_applied: number;
    promotion_effective_discount: number;
    amount_paid: number;
    price_marked: number;
    item_name: string;
    brand_calculated_amount: number;
    price_effective: number;
    cod_charges: number;
    transfer_price: number;
    added_to_fynd_cash: boolean;
    gst_fee: number;
    gst_tag: string;
    discount: number;
    tax_collected_at_source?: number;
    delivery_charge: number;
    size: string;
    total_units: number;
    fynd_credits: number;
    refund_credit: number;
    coupon_effective_discount: number;
    value_of_good: number;
    hsn_code: string;
    amount_paid_roundoff?: number;
};
type BagConfigs = {
    is_active: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    allow_force_return: boolean;
    can_be_cancelled: boolean;
};
type BagGST = {
    gstin_code?: string;
    gst_tax_percentage?: number;
    brand_calculated_amount?: number;
    is_default_hsn_code?: boolean;
    value_of_good?: number;
    gst_tag?: string;
    gst_fee?: number;
    hsn_code?: string;
};
type OrderBrandName = {
    brand_name: string;
    logo: string;
    id: number;
    created_on: string;
    company: string;
    modified_on?: string;
};
type OrderBags = {
    applied_promos?: AppliedPromos[];
    can_return?: boolean;
    current_status?: CurrentStatus;
    item?: PlatformItem;
    display_name?: string;
    quantity?: number;
    article?: OrderBagArticle;
    delivery_address?: PlatformDeliveryAddress;
    financial_breakup?: FinancialBreakup;
    seller_identifier?: string;
    bag_configs?: BagConfigs;
    prices?: Prices;
    gst_details?: BagGST;
    entity_type?: string;
    can_cancel?: boolean;
    parent_promo_bags?: any;
    line_number?: number;
    brand?: OrderBrandName;
    bag_id: number;
    identifier?: string;
};
type OrderingStoreDetails = {
    pincode: string;
    phone: string;
    store_name: string;
    city: string;
    country: string;
    address: string;
    code: string;
    contact_person: string;
    id: number;
    meta: any;
    state: string;
};
type OrderDetailsData = {
    fynd_order_id: string;
    ordering_channel?: string;
    cod_charges?: string;
    source?: string;
    order_value?: string;
    ordering_channel_logo?: any;
    tax_details?: any;
    affiliate_id?: string;
    order_date?: string;
};
type UserDetailsData = {
    pincode: string;
    phone: string;
    city: string;
    name: string;
    address: string;
    email?: string;
    country: string;
    state: string;
};
type DPDetailsData = {
    awb_no?: string;
    eway_bill_id?: string;
    pincode?: string;
    name?: string;
    gst_tag?: string;
    track_url?: string;
    country?: string;
    id?: number;
};
type FulfillingStore = {
    pincode: string;
    phone: string;
    store_name: string;
    city: string;
    code: string;
    country: string;
    address: string;
    fulfillment_channel: string;
    contact_person: string;
    id: number;
    meta: any;
    state: string;
};
type TrackingList = {
    time?: string;
    status: string;
    text: string;
    is_current?: boolean;
    is_passed?: boolean;
};
type ShipmentPayments = {
    mode?: string;
    logo?: string;
    source?: string;
};
type BagStatusHistory = {
    state_id?: number;
    updated_at?: string;
    delivery_awb_number?: string;
    shipment_id?: string;
    created_at?: string;
    bag_id?: number;
    delivery_partner_id?: number;
    state_type?: string;
    app_display_name?: string;
    status: string;
    bag_state_mapper?: BagStateMapper;
    store_id?: number;
    bsh_id?: number;
    display_name?: string;
    kafka_sync?: boolean;
    forward?: boolean;
    reasons?: any[];
};
type ShipmentStatusData = {
    shipment_id?: string;
    created_at?: string;
    status?: string;
    bag_list?: string[];
    id?: number;
};
type PlatformShipment = {
    platform_logo?: string;
    bags?: OrderBags[];
    vertical?: string;
    shipment_status?: string;
    user_agent?: string;
    shipment_id: string;
    ordering_store?: OrderingStoreDetails;
    order?: OrderDetailsData;
    prices?: Prices;
    payment_mode?: string;
    delivery_details?: UserDetailsData;
    total_bags?: number;
    coupon?: any;
    gst_details?: GSTDetailsData;
    priority_text?: string;
    shipment_quantity?: number;
    total_items?: number;
    billing_details?: UserDetailsData;
    enable_dp_tracking?: boolean;
    shipment_images?: string[];
    dp_details?: DPDetailsData;
    operational_status?: string;
    fulfilling_store?: FulfillingStore;
    packaging_type?: string;
    tracking_list?: TrackingList[];
    payments?: ShipmentPayments;
    picked_date?: string;
    custom_meta?: any[];
    journey_type?: string;
    bag_status_history?: BagStatusHistory[];
    status?: ShipmentStatusData;
    delivery_slot?: any;
};
type ShipmentInfoResponse = {
    success: boolean;
    message?: string;
    shipments?: PlatformShipment[];
};
type OrderMeta = {
    mongo_cart_id?: number;
    currency_symbol?: string;
    order_tags?: any[];
    files?: any[];
    cart_id?: number;
    order_type?: string;
    employee_id?: number;
    ordering_store?: number;
    payment_type?: string;
    customer_note?: string;
    comment?: string;
    extra_meta?: any;
    staff?: any;
    order_platform?: string;
    order_child_entities?: string[];
};
type OrderDict = {
    fynd_order_id: string;
    payment_methods?: any;
    prices?: Prices;
    tax_details?: any;
    order_date: string;
    meta?: OrderMeta;
};
type ShipmentDetailsResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    order?: OrderDict;
};
type SubLane = {
    index?: number;
    value?: string;
    text?: string;
    actions?: any[];
    total_items?: number;
};
type SuperLane = {
    options?: SubLane[];
    text: string;
    total_items?: number;
    value: string;
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
    name?: string;
    logo?: string;
};
type PlatformOrderItems = {
    breakup_values?: PlatformBreakupValues[];
    user_info?: UserDataInfo;
    order_value?: number;
    shipments?: PlatformShipment[];
    channel?: PlatformChannel;
    payment_mode?: string;
    order_created_time?: string;
    total_order_value?: number;
    meta?: any;
    order_id?: string;
};
type OrderListingResponse = {
    total_count?: number;
    success?: boolean;
    page?: Page;
    lane?: string;
    message?: string;
    items?: PlatformOrderItems[];
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    options?: Options[];
    key: string;
    text: string;
    value: number;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    updated_at?: string;
    shipment_type?: string;
    awb?: string;
    raw_status?: string;
    account_name?: string;
    last_location_recieved_at?: string;
    status?: string;
    meta?: any;
    updated_time?: string;
    reason?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    returned?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    processed?: FiltersInfo[];
    filters?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
};
type FiltersResponse = {
    global_filter?: FiltersInfo[];
    advance_filter?: AdvanceFilterInfo;
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    report_requested_at?: string;
    request_details?: any;
    report_id?: string;
    report_type?: string;
    status?: string;
    report_name?: string;
    report_created_at?: string;
    display_name?: string;
    s3_key?: string;
};
type JioCodeUpsertDataSet = {
    item_id?: string;
    company_id?: string;
    article_id?: string;
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
    data?: any[];
    trace_id?: string;
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
    identifier?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    label?: any;
    data?: any;
    store_name?: string;
    batch_id: string;
    invoice_status?: string;
    company_id?: string;
    store_code?: string;
    store_id?: string;
    do_invoice_label_generated: boolean;
    invoice?: any;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type FileResponse = {
    cdn?: URL;
    namespace?: string;
    tags?: string[];
    content_type?: string;
    upload?: FileUploadResponse;
    file_path?: string;
    file_name?: string;
    method?: string;
    size?: number;
    operation?: string;
};
type BulkListingPage = {
    total?: number;
    has_previous?: boolean;
    type?: string;
    has_next?: boolean;
    size?: number;
    current?: number;
};
type bulkListingData = {
    store_code?: string;
    successful_shipments?: any[];
    user_name?: string;
    user_id?: string;
    excel_url?: string;
    processing_shipments?: string[];
    file_name?: string;
    failed?: number;
    successful?: number;
    uploaded_on?: string;
    failed_shipments?: any[];
    processing?: number;
    total?: number;
    store_name?: string;
    batch_id?: string;
    company_id?: number;
    status?: string;
    store_id?: number;
    id?: string;
};
type BulkListingResponse = {
    success?: boolean;
    error?: string;
    page?: BulkListingPage;
    data?: bulkListingData[];
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    qc_type?: string[];
    id?: number;
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
    status?: boolean;
    message?: string;
};
type BulkActionDetailsDataField = {
    batch_id?: string;
    successful_shipment_ids?: string[];
    company_id?: string;
    successful_shipments_count?: number;
    total_shipments_count?: number;
    failed_shipments_count?: number;
    processing_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    uploaded_on?: string;
    data?: BulkActionDetailsDataField[];
    success?: string;
    user_id?: string;
    status?: boolean;
    error?: string[];
    failed_records?: string[];
    message?: string;
    uploaded_by?: string;
};
type ArticleDetails = {
    status?: any;
};
type AffiliateMeta = {
    coupon_code?: string;
    employee_discount?: number;
    channel_order_id?: string;
    is_priority?: boolean;
    box_type?: string;
    order_item_id?: string;
    size_level_total_qty?: number;
    quantity?: number;
    channel_shipment_id?: string;
    due_date?: string;
    loyalty_discount?: number;
};
type AffiliateBagDetails = {
    employee_discount?: number;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    loyalty_discount?: number;
    affiliate_meta: AffiliateMeta;
};
type Attributes = {
    brand_name?: string;
    marketer_address?: string;
    name?: string;
    primary_color?: string;
    primary_color_hex?: string;
    essential?: string;
    primary_material?: string;
    marketer_name?: string;
    gender?: string[];
};
type Item = {
    attributes: Attributes;
    image: string[];
    can_return?: boolean;
    brand_id: number;
    department_id?: number;
    branch_url?: string;
    code?: string;
    l1_category_id?: number;
    last_updated_at?: string;
    slug_key: string;
    meta?: any;
    gender?: string;
    webstore_product_url?: string;
    can_cancel?: boolean;
    l1_category?: string[];
    l2_category_id?: number;
    size: string;
    color?: string;
    l2_category?: string[];
    brand: string;
    name: string;
    l3_category?: number;
    item_id: number;
    l3_category_name?: string;
};
type ReturnConfig = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type Dimensions = {
    height?: number;
    unit?: string;
    is_default?: boolean;
    length?: number;
    width?: number;
};
type Weight = {
    is_default?: boolean;
    unit?: string;
    shipping?: number;
};
type Article = {
    child_details?: any;
    identifiers: Identifier;
    seller_identifier: string;
    _id: string;
    esp_modified?: any;
    return_config?: ReturnConfig;
    uid: string;
    code?: string;
    dimensions?: Dimensions;
    weight?: Weight;
    raw_meta?: any;
    is_set?: boolean;
    a_set?: any;
    size: string;
};
type Document = {
    value: string;
    verified: boolean;
    legal_name: string;
    url?: string;
    ds_type: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    user?: string;
    password?: string;
    enabled: boolean;
    username?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type EInvoicePortalDetails = {
    username?: string;
    password?: string;
    user?: string;
};
type StoreMeta = {
    stage: string;
    additional_contact_details?: any;
    documents?: StoreDocuments;
    product_return_config?: any;
    gst_credentials: StoreGstCredentials;
    ewaybill_portal_details?: any;
    notification_emails?: string[];
    display_name: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    timing?: any[];
    gst_number?: string;
};
type StoreAddress = {
    country_code: string;
    contact_person: string;
    country: string;
    area?: string;
    latitude: number;
    pincode: number;
    address2?: string;
    updated_at: string;
    phone: string;
    created_at: string;
    address_type: string;
    address_category: string;
    email?: string;
    version?: string;
    longitude: number;
    address1: string;
    city: string;
    landmark?: string;
    state: string;
};
type Store = {
    order_integration_id?: string;
    s_id: string;
    contact_person: string;
    country: string;
    store_email: string;
    latitude: number;
    pincode: string;
    location_type: string;
    login_username: string;
    vat_no?: string;
    brand_id?: any;
    address2?: string;
    code?: string;
    fulfillment_channel: string;
    meta: StoreMeta;
    is_active?: boolean;
    brand_store_tags?: string[];
    mall_area?: string;
    phone: number;
    updated_at?: string;
    created_at: string;
    packaging_material_count?: number;
    store_active_from?: string;
    mall_name?: string;
    parent_store_id?: number;
    longitude: number;
    address1: string;
    is_archived?: boolean;
    store_address_json?: StoreAddress;
    city: string;
    name: string;
    company_id: number;
    is_enabled_for_recon?: boolean;
    alohomora_user_id?: number;
    state: string;
};
type BagGSTDetails = {
    gstin_code?: string;
    gst_tax_percentage: number;
    brand_calculated_amount: number;
    is_default_hsn_code?: boolean;
    value_of_good: number;
    gst_tag: string;
    gst_fee: number;
    sgst_tax_percentage: number;
    cgst_gst_fee: string;
    igst_gst_fee: string;
    cgst_tax_percentage: number;
    tax_collected_at_source: number;
    hsn_code: string;
    hsn_code_id: string;
    igst_tax_percentage: number;
    sgst_gst_fee: string;
};
type B2BPODetails = {
    partial_can_ret?: boolean;
    po_line_amount?: number;
    item_base_price?: number;
    po_tax_amount?: number;
    docker_number?: string;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Brand = {
    brand_name: string;
    start_date?: string;
    script_last_ran?: string;
    logo?: string;
    brand_id: number;
    created_on?: number;
    company: string;
    is_virtual_invoice?: boolean;
    credit_note_expiry_days?: number;
    credit_note_allowed?: boolean;
    modified_on?: number;
    pickup_location?: string;
    invoice_prefix?: string;
};
type EInvoice = {
    irn?: string;
    error_message?: string;
    signed_invoice?: string;
    signed_qr_code?: string;
    acknowledge_date?: string;
    acknowledge_no?: number;
    error_code?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type BuyerDetails = {
    pincode: number;
    city: string;
    name: string;
    address: string;
    gstin: string;
    ajio_site_id?: string;
    state: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type LockData = {
    mto?: boolean;
    lock_message?: string;
    locked?: boolean;
};
type ShipmentMeta = {
    bag_weight?: any;
    einvoice_info?: EinvoiceInfo;
    box_type?: string;
    auto_trigger_dp_assignment_acf: boolean;
    return_affiliate_shipment_id?: string;
    dp_options?: any;
    dp_sort_key?: string;
    b2b_buyer_details?: BuyerDetails;
    return_affiliate_order_id?: string;
    assign_dp_from_sb?: boolean;
    po_number?: string;
    order_type?: string;
    shipment_volumetric_weight?: number;
    shipment_weight?: number;
    external?: any;
    fulfilment_priority_text?: string;
    packaging_name?: string;
    return_awb_number?: string;
    marketplace_store_id?: string;
    timestamp?: ShipmentTimeStamp;
    return_details?: any;
    debug_info?: DebugInfo;
    awb_number?: string;
    formatted?: Formatted;
    weight: number;
    same_store_available: boolean;
    dp_name?: string;
    due_date?: string;
    forward_affiliate_shipment_id?: string;
    store_invoice_updated_date?: string;
    return_store_node?: number;
    forward_affiliate_order_id?: string;
    ewaybill_info?: any;
    dp_id?: string;
    lock_data?: LockData;
    b2c_buyer_details?: any;
};
type PDFLinks = {
    label?: string;
    po_invoice?: string;
    b2b?: string;
    label_a4?: string;
    credit_note_url?: string;
    label_pos?: string;
    invoice?: string;
    label_type: string;
    label_a6?: string;
    invoice_type: string;
    invoice_a4?: string;
    invoice_pos?: string;
    invoice_a6?: string;
};
type AffiliateDetails = {
    shipment_meta: ShipmentMeta;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    affiliate_store_id: string;
    affiliate_shipment_id: string;
    affiliate_id?: string;
    pdf_links?: PDFLinks;
    ad_id?: string;
    company_affiliate_tag?: string;
    affiliate_meta: AffiliateMeta;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    can_be_cancelled: boolean;
};
type BagDetailsPlatformResponse = {
    applied_promos?: any[];
    tags?: string[];
    no_of_bags_order?: number;
    article_details?: ArticleDetails;
    order_integration_id?: string;
    current_status: BagStatusHistory;
    b_type?: string;
    affiliate_bag_details: AffiliateBagDetails;
    display_name?: string;
    item: Item;
    quantity?: number;
    article: Article;
    financial_breakup: FinancialBreakup[];
    restore_coupon?: boolean;
    seller_identifier?: string;
    ordering_store?: Store;
    shipment_id?: string;
    prices: Prices;
    gst_details: BagGSTDetails;
    current_operational_status: BagStatusHistory;
    meta?: BagMeta;
    bag_status: BagStatusHistory[];
    qc_required?: any;
    operational_status?: string;
    b_id: number;
    entity_type?: string;
    parent_promo_bags?: any;
    line_number?: number;
    reasons?: any[];
    bag_update_time?: number;
    brand: Brand;
    affiliate_details?: AffiliateDetails;
    journey_type: string;
    bag_status_history?: BagStatusHistory;
    restore_promos?: any;
    dates?: Dates;
    status: BagReturnableCancelableStatus;
    original_bag_list?: number[];
    identifier?: string;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    item_total: number;
    has_next: boolean;
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
    message?: string;
    shipment_id?: string;
    status?: number;
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
    mongo_article_id?: string;
    affiliate_id?: string;
    bag_id?: number;
    set_id?: string;
    reason_ids?: number[];
    fynd_order_id?: string;
    store_id: number;
    affiliate_bag_id?: string;
    item_id?: string;
    affiliate_order_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
    id?: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    entities: Entities[];
    action: string;
    action_type: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    is_locked?: boolean;
    bag_id?: number;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
};
type CheckResponse = {
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    bags?: Bags[];
    shipment_id?: string;
    affiliate_id?: string;
    is_bag_locked?: boolean;
    status?: string;
    is_shipment_locked?: boolean;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    message?: string;
    success?: boolean;
};
type AnnouncementResponse = {
    company_id?: number;
    to_datetime?: string;
    from_datetime?: string;
    description?: string;
    platform_id?: string;
    title?: string;
    logo_url?: string;
    created_at?: string;
    platform_name?: string;
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
type Products = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
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
    line_number?: number;
    quantity?: number;
    identifier?: string;
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
    products?: Products[];
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
};
type StatuesRequest = {
    status?: string;
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
    force_transition?: boolean;
    unlock_before_transition?: boolean;
};
type ShipmentsResponse = {
    identifier?: string;
    message?: string;
    code?: string;
    stack_trace?: string;
    final_state?: any;
    status?: number;
    meta?: any;
    exception?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
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
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    payment?: AffiliateInventoryPaymentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    name: string;
    owner: string;
    token: string;
    secret: string;
    updated_at: string;
    meta?: AffiliateAppConfigMeta[];
    description?: string;
    created_at: string;
    id: string;
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
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    store_lookup?: string;
    create_user?: boolean;
    article_lookup?: string;
    affiliate: Affiliate;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    bag_end_state?: string;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    identifier: any;
    avl_qty: number;
    amount_paid: number;
    affiliate_meta: any;
    affiliate_store_id: string;
    hsn_code_id: string;
    sku: string;
    item_id: number;
    modified_on: string;
    pdf_links?: MarketPlacePdf;
    price_effective: number;
    fynd_store_id: string;
    item_size: string;
    store_id: number;
    unit_price: number;
    quantity: number;
    seller_identifier: string;
    company_id: number;
    discount: number;
    delivery_charge: number;
    price_marked: number;
    _id: string;
    transfer_price: number;
};
type OrderUser = {
    first_name: string;
    pincode: string;
    address2?: string;
    mobile: number;
    state: string;
    last_name: string;
    country: string;
    address1?: string;
    phone: number;
    city: string;
    email: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
};
type ArticleDetails1 = {
    quantity: number;
    brand_id: number;
    category: any;
    attributes: any;
    weight: any;
    dimension: any;
    _id: string;
};
type ShipmentDetails = {
    shipments: number;
    dp_id?: number;
    fulfillment_id: number;
    articles: ArticleDetails1[];
    meta?: any;
    affiliate_shipment_id: string;
    box_type?: string;
};
type ShipmentConfig = {
    identifier: string;
    location_details?: LocationDetails;
    action: string;
    shipment: ShipmentDetails[];
    source: string;
    payment_mode: string;
    to_pincode: string;
    journey: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    bags: AffiliateBag[];
    coupon?: string;
    items: any;
    discount: number;
    payment?: any;
    delivery_charges: number;
    user: UserData;
    billing_address: OrderUser;
    order_priority?: OrderPriority;
    cod_charges: number;
    shipment?: ShipmentData;
    payment_mode: string;
    shipping_address: OrderUser;
    affiliate_order_id?: string;
    order_value: number;
};
type CreateOrderPayload = {
    order_config: OrderConfig;
    affiliate_id: string;
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
    slug: string;
    description: string;
    display_text: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type PostHistoryData = {
    message: string;
    user_name: string;
};
type PostHistoryFilters = {
    line_number?: string;
    shipment_id: string;
    identifier?: string;
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
type HistoryDict = {
    message: string;
    l1_detail?: string;
    type: string;
    ticket_url?: string;
    user: string;
    bag_id?: number;
    ticket_id?: string;
    l3_detail?: string;
    createdat: string;
    l2_detail?: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    message: string;
    country_code: string;
    amount_paid: number;
    order_id: string;
    customer_name: string;
    brand_name: string;
    shipment_id: number;
    phone_number: number;
    payment_mode: string;
};
type SendSmsPayload = {
    slug: string;
    bag_id: number;
    data?: SmsDataPayload;
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
    shipment_id?: string;
    bag_list?: number[];
    id: number;
    status?: string;
    meta: Meta;
    remarks?: string;
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
    dp_id: number;
    qc_required: string;
    shipment_ids?: string[];
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type PaymentMethod = {
    name: string;
    refund_by: string;
    mode: string;
    collect_by: string;
    amount: number;
    meta?: any;
    transaction_data?: any;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type BillingInfo = {
    first_name: string;
    external_customer_code?: string;
    middle_name?: string;
    address2?: string;
    country_code?: string;
    state_code?: string;
    pincode: string;
    last_name?: string;
    house_no?: string;
    state: string;
    primary_mobile_number: string;
    alternate_mobile_number?: string;
    country: string;
    alternate_email?: string;
    floor_no?: string;
    title?: string;
    customer_code?: string;
    gender?: string;
    address1: string;
    primary_email: string;
    city: string;
};
type Tax = {
    name: string;
    amount: any;
    breakup?: any[];
    rate: number;
};
type Charge = {
    code?: string;
    name: string;
    type: string;
    amount: any;
    tax?: Tax;
};
type LineItem = {
    quantity?: number;
    seller_identifier: string;
    custom_messasge?: string;
    meta?: any;
    charges?: Charge[];
    external_line_id?: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    customer_pickup_slot?: any;
    pack_by_date?: string;
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
    dispatch_by_date?: string;
};
type Shipment = {
    external_shipment_id?: string;
    line_items: LineItem[];
    meta?: any;
    processing_dates?: ProcessingDates;
    priority?: number;
    location_id: number;
};
type ShippingInfo = {
    first_name: string;
    external_customer_code?: string;
    middle_name?: string;
    address2?: string;
    country_code?: string;
    state_code?: string;
    pincode: string;
    landmark?: string;
    last_name?: string;
    house_no?: string;
    slot?: any[];
    state: string;
    primary_mobile_number: string;
    alternate_mobile_number?: string;
    country: string;
    address_type?: string;
    geo_location?: any;
    alternate_email?: string;
    floor_no?: string;
    shipping_type?: string;
    title?: string;
    customer_code?: string;
    gender?: string;
    address1: string;
    primary_email: string;
    city: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type CreateOrderAPI = {
    payment_info: PaymentInfo;
    billing_info: BillingInfo;
    external_creation_date?: string;
    shipments: Shipment[];
    external_order_id?: string;
    shipping_info: ShippingInfo;
    meta?: any;
    charges?: Charge[];
    currency_info?: any;
    tax_info?: TaxInfo;
};
type CreateOrderErrorReponse = {
    code?: string;
    message: string;
    stack_trace?: string;
    info?: any;
    status: number;
    meta?: string;
    request_id?: string;
    exception?: string;
};
type PaymentMethods = {
    mode?: string;
    collect_by?: string;
    refund_by?: string;
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
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
    shipment_assignment?: string;
    logo_url?: any;
    dp_configuration?: DpConfiguration;
    location_reassignment?: boolean;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    is_inserted?: boolean;
    is_upserted?: boolean;
    acknowledged?: boolean;
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
    start_date: string;
    order_details?: FyndOrderIdList[];
    end_date: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    words?: string[];
    app_id?: string;
    result: SearchKeywordResult;
    _custom_json?: any;
    is_active?: boolean;
};
type GetSearchWordsData = {
    words?: string[];
    uid?: string;
    app_id?: string;
    result?: any;
    _custom_json?: any;
    is_active?: boolean;
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
    words?: string[];
    results?: AutocompleteResult[];
    app_id?: string;
    _custom_json?: any;
    is_active?: boolean;
};
type GetAutocompleteWordsData = {
    words?: string[];
    results?: any[];
    uid?: string;
    app_id?: string;
    _custom_json?: any;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    _custom_json?: any;
    app_id?: string;
    words?: string[];
};
type ProductBundleItem = {
    min_quantity: number;
    max_quantity: number;
    allow_remove?: boolean;
    product_uid: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
};
type ProductBundleRequest = {
    slug: string;
    modified_by?: any;
    page_visibility?: string[];
    created_on?: string;
    name: string;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    created_by?: any;
    choice: string;
    modified_on?: string;
    company_id?: number;
    meta?: any;
    logo?: string;
    is_active: boolean;
};
type GetProductBundleCreateResponse = {
    id?: string;
    slug: string;
    modified_by?: any;
    page_visibility?: string[];
    created_on?: string;
    name: string;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    created_by?: any;
    choice: string;
    modified_on?: string;
    company_id?: number;
    meta?: any;
    logo?: string;
    is_active: boolean;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    slug: string;
    modified_by?: any;
    page_visibility?: string[];
    name: string;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    choice: string;
    modified_on?: string;
    company_id?: number;
    meta?: any;
    logo?: string;
    is_active: boolean;
};
type LimitedProductData = {
    quantity?: number;
    short_description?: string;
    slug?: string;
    country_of_origin?: string;
    name?: string;
    identifier?: any;
    uid?: number;
    item_code?: string;
    price?: any;
    images?: string[];
    sizes?: string[];
    attributes?: any;
};
type Price = {
    currency?: string;
    max_marked?: number;
    min_effective?: number;
    min_marked?: number;
    max_effective?: number;
};
type Size = {
    quantity?: number;
    is_available?: boolean;
    value?: string;
    display?: string;
};
type GetProducts = {
    min_quantity?: number;
    max_quantity?: number;
    allow_remove?: boolean;
    product_details?: LimitedProductData;
    product_uid?: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    price?: Price;
    sizes?: Size[];
};
type GetProductBundleResponse = {
    slug?: string;
    page_visibility?: string[];
    name?: string;
    products?: GetProducts[];
    same_store_assignment?: boolean;
    choice?: string;
    company_id?: number;
    meta?: any;
    logo?: string;
    is_active?: boolean;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    brand_id?: number;
    id?: string;
    active?: boolean;
    title: string;
    image?: string;
    created_on?: string;
    name: string;
    created_by?: any;
    description?: string;
    modified_on?: string;
    subtitle?: string;
    guide?: Guide;
    company_id?: number;
    tag?: string;
    modified_by?: any;
};
type GetMultiSizeGuide = {
    brand_id?: number;
    active?: boolean;
    title?: string;
    image?: string;
    created_on?: string;
    name?: string;
    _id?: string;
    created_by?: any;
    description?: string;
    modified_on?: string;
    subtitle?: string;
    guide?: any;
    company_id?: number;
    tag?: string;
    modified_by?: any;
};
type ListSizeGuide = {
    items?: GetMultiSizeGuide[];
    page?: any;
};
type SizeGuideResponse = {
    brand_id?: number;
    id?: string;
    active?: boolean;
    title?: string;
    subtitle?: string;
    name?: string;
    created_by?: any;
    modified_by?: any;
    modified_on?: string;
    company_id?: number;
    guide?: any;
    tag?: string;
    created_on?: string;
};
type ApplicationItemMOQ = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationItemMeta = {
    alt_text?: any;
    moq?: ApplicationItemMOQ;
    _custom_meta?: MetaFields[];
    is_gift?: boolean;
    seo?: ApplicationItemSEO;
    is_cod?: boolean;
    _custom_json?: any;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type MOQData = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type SEOData = {
    description?: any;
    title?: any;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    moq?: MOQData;
    is_gift?: boolean;
    seo?: SEOData;
    is_cod?: boolean;
};
type GetConfigMetadataResponse = {
    values?: any[];
    condition?: any[];
    data: any[];
};
type AttributeDetailsGroup = {
    key?: string;
    slug?: string;
    unit?: string;
    name: string;
    priority: number;
    logo?: string;
    display_type: string;
    is_active: boolean;
};
type AppConfigurationDetail = {
    slug: string;
    name?: string;
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    is_default: boolean;
    app_id: string;
    priority: number;
    logo?: string;
    is_active: boolean;
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
    page: PageResponseType;
    data: any[];
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    key: string;
    name?: string;
    is_default: boolean;
    app_id: string;
    default_key: string;
    priority: number;
    logo?: string;
    is_active: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    filter_types?: string[];
    units?: any[];
    display?: string;
    key?: string;
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
type GetCatalogConfigurationDetailsProduct = {
    detail?: any;
    variant?: any;
    similar?: any;
    compare?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    map_values?: any[];
    condition?: string;
    map?: any;
    value?: string;
    sort?: string;
    bucket_points?: ConfigurationBucketPoints[];
};
type ConfigurationListingFilterConfig = {
    key: string;
    type: string;
    name?: string;
    value_config?: ConfigurationListingFilterValue;
    display_name?: string;
    priority: number;
    logo?: string;
    is_active: boolean;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    key: string;
    name?: string;
    priority: number;
    logo?: string;
    is_active: boolean;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductVariantConfig = {
    key: string;
    size: ProductSize;
    name: string;
    priority: number;
    logo?: string;
    display_type: string;
    is_active: boolean;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    title?: string;
    key: string;
    size?: ProductSize;
    subtitle?: string;
    priority: number;
    logo?: string;
    is_active: boolean;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppConfiguration = {
    type?: string;
    config_type: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    created_by?: any;
    config_id?: string;
    app_id: string;
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
};
type AppCatalogConfiguration = {
    id?: string;
    type?: string;
    config_type: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    created_by?: any;
    config_id?: string;
    app_id: string;
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
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
    id?: string;
    config_type: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    product?: GetCatalogConfigurationDetailsProduct;
    config_id?: string;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    value?: string;
    is_selected?: boolean;
    name?: string;
};
type ProductFiltersValue = {
    display_format?: string;
    selected_min?: number;
    display: string;
    min?: number;
    selected_max?: number;
    currency_symbol?: string;
    query_format?: string;
    value: any;
    count?: number;
    currency_code?: string;
    max?: number;
    is_selected: boolean;
};
type ProductFiltersKey = {
    operators?: string[];
    kind?: string;
    name: string;
    display: string;
    logo?: string;
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
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionSchedule = {
    next_schedule?: NextSchedule[];
    end?: string;
    cron?: string;
    duration?: number;
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
type UserInfo = {
    email?: string;
    uid?: string;
    username?: string;
    user_id?: string;
};
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
};
type CreateCollection = {
    type: string;
    slug: string;
    sort_on?: string;
    seo?: SeoDetail;
    app_id: string;
    badge?: CollectionBadge;
    _locale_language?: any;
    tags?: string[];
    visible_facets_keys?: string[];
    priority?: number;
    published?: boolean;
    is_active?: boolean;
    _schedule?: CollectionSchedule;
    banners: CollectionBanner;
    allow_sort?: boolean;
    name: string;
    created_by?: UserInfo;
    _custom_json?: any;
    logo: CollectionImage;
    query?: CollectionQuery[];
    description?: string;
    is_visible?: boolean;
    meta?: any;
    allow_facets?: boolean;
    modified_by?: UserInfo;
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
    type?: string;
    slug?: string;
    sort_on?: string;
    app_id?: string;
    badge?: any;
    visible_facets_keys?: string[];
    priority?: number;
    tag?: string[];
    is_active?: boolean;
    _schedule?: any;
    banners?: ImageUrls;
    allow_sort?: boolean;
    name?: string;
    cron?: any;
    logo?: BannerImage;
    query?: CollectionQuery[];
    description?: string;
    meta?: any;
    allow_facets?: boolean;
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
    meta?: any;
    url: string;
    type?: string;
};
type GetCollectionDetailNest = {
    type?: string;
    slug?: string;
    action?: Action;
    app_id?: string;
    badge?: any;
    uid?: string;
    visible_facets_keys?: string[];
    priority?: number;
    tag?: string[];
    is_active?: boolean;
    _schedule?: any;
    banners?: ImageUrls;
    allow_sort?: boolean;
    name?: string;
    cron?: any;
    logo?: Media1;
    query?: CollectionQuery[];
    description?: string;
    meta?: any;
    allow_facets?: boolean;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionDetailResponse = {
    type?: string;
    slug?: string;
    app_id?: string;
    badge?: any;
    uid?: string;
    visible_facets_keys?: string[];
    priority?: number;
    tag?: string[];
    is_active?: boolean;
    _schedule?: any;
    banners?: ImageUrls;
    allow_sort?: boolean;
    name?: string;
    cron?: any;
    logo?: Media1;
    query?: CollectionQuery[];
    description?: string;
    meta?: any;
    allow_facets?: boolean;
};
type UpdateCollection = {
    type?: string;
    slug?: string;
    sort_on?: string;
    seo?: SeoDetail;
    badge?: CollectionBadge;
    _locale_language?: any;
    tags?: string[];
    visible_facets_keys?: string[];
    priority?: number;
    published?: boolean;
    is_active?: boolean;
    _schedule?: CollectionSchedule;
    banners?: CollectionBanner;
    allow_sort?: boolean;
    name?: string;
    allow_facets?: boolean;
    logo?: CollectionImage;
    query?: CollectionQuery[];
    description?: string;
    is_visible?: boolean;
    meta?: any;
    _custom_json?: any;
    modified_by?: UserInfo;
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
type ProductBrand = {
    uid?: number;
    action?: Action;
    logo?: Media1;
    name?: string;
};
type Price1 = {
    min?: number;
    currency_symbol?: string;
    currency_code?: string;
    max?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductDetailAttribute = {
    type?: string;
    value?: string;
    key?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductListingDetail = {
    type?: string;
    slug: string;
    has_variant?: boolean;
    brand?: ProductBrand;
    rating?: number;
    teaser_tag?: any;
    sellable?: boolean;
    tryouts?: string[];
    item_type?: string;
    rating_count?: number;
    uid?: number;
    item_code?: string;
    attributes?: any;
    similars?: string[];
    short_description?: string;
    image_nature?: string;
    name?: string;
    color?: string;
    medias?: Media1[];
    discount?: string;
    price?: ProductListingPrice;
    highlights?: string[];
    product_online_date?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    promo_meta?: any;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page?: Page;
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    count?: number;
    sellable_count?: number;
};
type CatalogInsightBrand = {
    total_articles?: number;
    article_freshness?: number;
    name?: string;
    available_sizes?: number;
    total_sizes?: number;
    available_articles?: number;
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
    opt_level: string;
    store_ids?: number[];
    brand_ids?: number[];
    platform?: string;
    enabled?: boolean;
    company_id?: number;
};
type CompanyOptIn = {
    opt_level: string;
    modified_by?: any;
    store_ids: number[];
    created_by?: any;
    brand_ids: number[];
    platform: string;
    enabled: boolean;
    modified_on: number;
    company_id: number;
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
    brand_id?: number;
    total_article?: number;
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
    store_type?: string;
    store_code?: string;
    additional_contacts?: any[];
    address?: any;
    manager?: any;
    name?: string;
    uid?: number;
    display_name?: string;
    modified_on?: string;
    documents?: any[];
    company_id?: number;
    created_on?: string;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterDetails = {
    display_type: string;
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
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    type: string;
    range?: AttributeSchemaRange;
    allowed_values?: string[];
    format?: string;
    mandatory?: boolean;
    multi?: boolean;
};
type GenderDetail = {
    details?: AttributeMasterDetails;
    id?: string;
    is_nested?: boolean;
    slug?: string;
    name?: string;
    description?: string;
    filters?: AttributeMasterFilter;
    logo?: string;
    departments?: string[];
    meta?: AttributeMasterMeta;
    schema?: AttributeMaster;
    enabled_for_end_consumer?: boolean;
};
type CategoriesResponse = {
    slug_key?: string;
    uid?: number;
    name?: string;
    template_slug?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: CategoriesResponse[];
    page?: Page;
};
type PTErrorResponse = {
    errors?: any;
    status?: number;
    code?: string;
    message?: string;
    meta?: any;
};
type DepartmentCreateUpdate = {
    priority_order: number;
    slug?: string;
    name: string;
    _cls?: string;
    tags?: string[];
    uid?: number;
    platforms?: any;
    synonyms?: string[];
    _custom_json?: any;
    logo: string;
    is_active?: boolean;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    contact?: string;
    user_id?: string;
    _id?: string;
    uid?: string;
    username?: string;
};
type GetDepartment = {
    search?: string;
    priority_order?: number;
    page_size?: number;
    slug?: string;
    page_no?: number;
    created_on?: string;
    name?: string;
    created_by?: UserSerializer;
    uid?: number;
    synonyms?: string[];
    modified_by?: UserSerializer;
    modified_on?: string;
    item_type?: string;
    logo?: string;
    is_active?: boolean;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    errors?: any;
    status?: number;
    code?: string;
    message?: string;
    meta?: any;
};
type UserDetail = {
    contact?: string;
    username: string;
    user_id: string;
    super_user?: boolean;
};
type DepartmentModel = {
    priority_order: number;
    slug?: any;
    is_active?: boolean;
    verified_by?: UserDetail;
    name: any;
    _id?: any;
    created_by?: UserDetail;
    logo: any;
    uid?: number;
    _cls?: any;
    synonyms?: any[];
    modified_by?: UserDetail;
    modified_on: string;
    _custom_json?: any;
    verified_on?: string;
    created_on: string;
};
type ProductTemplate = {
    is_expirable?: boolean;
    categories?: string[];
    attributes_schema?: any[];
    modified_on?: string;
    slug: string;
    is_physical: boolean;
    created_on?: string;
    name?: string;
    is_archived?: boolean;
    created_by?: any;
    description?: string;
    attributes?: string[];
    modified_by?: any;
    logo?: string;
    departments?: string[];
    tag?: string;
    is_active?: boolean;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    is_expirable?: boolean;
    categories?: string[];
    id?: string;
    attributes_schema?: any[];
    slug: string;
    is_physical: boolean;
    name?: string;
    is_archived?: boolean;
    description?: string;
    attributes?: string[];
    logo?: string;
    departments?: string[];
    tag?: string;
    is_active?: boolean;
};
type Properties = {
    slug?: any;
    product_group_tag?: any;
    teaser_tag?: any;
    no_of_boxes?: any;
    sizes?: any;
    item_type?: any;
    product_publish?: any;
    custom_order?: any;
    country_of_origin?: any;
    hsn_code?: any;
    variants?: any;
    is_dependent?: any;
    command?: any;
    tags?: any;
    item_code?: any;
    media?: any;
    multi_size?: any;
    is_active?: any;
    short_description?: any;
    currency?: any;
    size_guide?: any;
    name?: any;
    trader_type?: any;
    highlights?: any;
    return_config?: any;
    description?: any;
    brand_uid?: any;
    trader?: any;
    category_slug?: any;
};
type GlobalValidation = {
    type?: string;
    title?: string;
    definitions?: any;
    description?: string;
    required?: string[];
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
    templates?: string[];
    brand?: string[];
    type?: string;
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadsItems = {
    id?: string;
    task_id?: string;
    url?: string;
    status?: string;
    data?: ProductDownloadItemsData;
    created_by?: VerifiedBy;
    completed_on?: string;
    template_tags?: any;
    seller_id?: number;
    trigger_on?: string;
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
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type Media2 = {
    landscape: string;
    portrait: string;
    logo: string;
};
type CategoryRequestBody = {
    slug?: string;
    marketplaces?: CategoryMapping;
    hierarchy?: Hierarchy[];
    level: number;
    name: string;
    synonyms?: string[];
    media?: Media2;
    tryouts?: string[];
    priority?: number;
    departments: number[];
    is_active: boolean;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type Category = {
    id?: string;
    slug?: string;
    marketplaces?: CategoryMapping;
    created_on?: string;
    hierarchy?: Hierarchy[];
    level: number;
    name: string;
    created_by?: any;
    uid?: number;
    synonyms?: string[];
    modified_by?: any;
    modified_on?: string;
    media?: Media2;
    tryouts?: string[];
    priority?: number;
    departments: number[];
    is_active: boolean;
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
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type Trader = {
    address?: string[];
    name: any;
    type?: string;
};
type ProductCreateUpdateSchemaV2 = {
    variant_media?: any;
    slug: string;
    product_group_tag?: string[];
    net_quantity?: NetQuantity;
    is_set?: boolean;
    action?: string;
    teaser_tag?: TeaserTag;
    no_of_boxes?: number;
    sizes: any[];
    item_type: string;
    product_publish?: ProductPublish;
    departments: number[];
    custom_order?: CustomOrder;
    variants?: any;
    country_of_origin: string;
    is_dependent?: boolean;
    requester?: string;
    tags?: string[];
    item_code: string;
    uid?: number;
    media?: Media1[];
    multi_size?: boolean;
    attributes?: any;
    change_request_id?: any;
    is_active?: boolean;
    short_description?: string;
    currency: string;
    variant_group?: any;
    tax_identifier: TaxIdentifier;
    size_guide?: string;
    name: string;
    bulk_job_id?: string;
    company_id: number;
    highlights?: string[];
    return_config: ReturnConfig;
    is_image_less_product?: boolean;
    description?: string;
    template_tag: string;
    brand_uid: number;
    trader: Trader[];
    _custom_json?: any;
    category_slug: string;
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
type ReturnConfigResponse = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Product = {
    moq?: any;
    variant_media?: any;
    slug?: string;
    product_group_tag?: string[];
    created_on?: string;
    net_quantity?: NetQuantityResponse;
    brand?: Brand;
    is_set?: boolean;
    category?: any;
    teaser_tag?: any;
    images?: Image[];
    sizes?: any[];
    no_of_boxes?: number;
    departments?: number[];
    product_publish?: ProductPublished;
    is_physical?: boolean;
    item_type?: string;
    category_uid?: number;
    all_identifiers?: string[];
    verified_on?: string;
    custom_order?: any;
    all_company_ids?: number[];
    country_of_origin?: string;
    variants?: any;
    is_dependent?: boolean;
    hsn_code?: string;
    tags?: string[];
    item_code?: string;
    uid?: number;
    l3_mapping?: string[];
    primary_color?: string;
    media?: Media1[];
    multi_size?: boolean;
    attributes?: any;
    is_active?: boolean;
    is_expirable?: boolean;
    id?: string;
    short_description?: string;
    currency?: string;
    tax_identifier?: any;
    variant_group?: any;
    size_guide?: string;
    image_nature?: string;
    name?: string;
    color?: string;
    created_by?: any;
    modified_on?: string;
    company_id?: number;
    highlights?: string[];
    pending?: string;
    return_config?: ReturnConfigResponse;
    all_sizes?: any[];
    verified_by?: VerifiedBy;
    stage?: string;
    is_image_less_product?: boolean;
    description?: string;
    template_tag?: string;
    brand_uid?: number;
    trader?: Trader[];
    _custom_json?: any;
    category_slug?: string;
    modified_by?: any;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductVariants = {
    media?: Media1[];
    name?: string;
    item_code?: string;
    uid?: number;
    brand_uid?: number;
    category_uid?: number;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    variant?: boolean;
    slug: string;
    suggestion?: string;
    filters: AttributeMasterFilter;
    schema: AttributeMaster;
    departments: string[];
    details: AttributeMasterDetails;
    tags?: string[];
    raw_key?: string;
    is_nested?: boolean;
    unit?: string;
    name?: string;
    created_by?: any;
    modified_on?: string;
    logo?: string;
    description?: string;
    synonyms?: any;
    modified_by?: any;
    enabled_for_end_consumer?: boolean;
    created_on?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ProductCreateUpdate = {
    variant_media?: any;
    slug: string;
    product_group_tag?: string[];
    net_quantity?: NetQuantity;
    is_set?: boolean;
    action?: string;
    teaser_tag?: TeaserTag;
    no_of_boxes?: number;
    item_type: string;
    product_publish?: ProductPublish;
    departments: number[];
    custom_order?: CustomOrder;
    variants?: any;
    country_of_origin: string;
    is_dependent?: boolean;
    requester?: string;
    tags?: string[];
    item_code: any;
    uid?: number;
    media?: Media1[];
    multi_size?: boolean;
    change_request_id?: any;
    is_active?: boolean;
    short_description?: string;
    currency: string;
    variant_group?: any;
    tax_identifier: TaxIdentifier;
    size_guide?: string;
    name: any;
    bulk_job_id?: string;
    company_id: number;
    highlights?: string[];
    return_config: ReturnConfig;
    is_image_less_product?: boolean;
    description?: string;
    template_tag: string;
    brand_uid: number;
    trader: Trader[];
    _custom_json?: any;
    category_slug: string;
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
    identifiers?: ValidateIdentifier[];
    item_weight: number;
    size: any;
    item_width: number;
    item_dimensions_unit_of_measure: string;
    item_length: number;
    item_height: number;
    item_weight_unit_of_measure: any;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    email?: string;
    uid?: string;
    username?: string;
    user_id?: string;
};
type BulkJob = {
    cancelled?: number;
    is_active?: boolean;
    file_path?: string;
    tracking_url?: string;
    succeed?: number;
    stage?: string;
    cancelled_records?: any[];
    created_by?: UserInfo1;
    failed?: number;
    template_tag?: string;
    total?: number;
    custom_template_tag?: string;
    modified_by?: UserInfo1;
    modified_on?: string;
    company_id: number;
    failed_records?: any[];
    created_on: string;
};
type BulkResponse = {
    batch_id: string;
    is_active?: boolean;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
    modified_on?: string;
    created_on: string;
};
type UserDetail1 = {
    full_name?: string;
    username?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    cancelled?: number;
    file_path?: string;
    created_on?: string;
    modified_by?: UserDetail1;
    succeed?: number;
    template?: ProductTemplate;
    stage?: string;
    cancelled_records?: string[];
    failed?: number;
    created_by?: UserDetail1;
    template_tag?: string;
    total?: number;
    modified_on?: string;
    company_id?: number;
    failed_records?: string[];
    is_active?: boolean;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    batch_id: string;
    company_id: number;
    template_tag: string;
    data: any[];
};
type ProductTagsViewResponse = {
    items?: string[];
};
type ProductBulkAssets = {
    company_id?: number;
    user: any;
    url: string;
};
type UserCommon = {
    company_id?: number;
    username?: string;
    user_id?: string;
};
type Items = {
    id?: string;
    cancelled?: number;
    file_path?: string;
    is_active?: boolean;
    created_on?: string;
    tracking_url?: string;
    succeed?: number;
    stage?: string;
    cancelled_records?: string[];
    created_by?: UserCommon;
    failed?: number;
    retry?: number;
    total?: number;
    modified_on?: string;
    company_id?: number;
    failed_records?: string[];
    modified_by?: UserCommon;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
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
type ItemQuery = {
    brand_uid?: number;
    uid?: number;
    item_code?: string;
};
type GTIN = {
    gtin_value: any;
    primary?: boolean;
    gtin_type: string;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    size_distribution: SizeDistribution;
    quantity?: number;
    name?: string;
};
type InvSize = {
    identifiers: GTIN[];
    item_weight?: number;
    quantity: number;
    currency: string;
    store_code: string;
    size: any;
    item_width?: number;
    price_transfer?: number;
    item_length?: number;
    is_set?: boolean;
    item_height?: number;
    item_dimensions_unit_of_measure?: string;
    price_effective: number;
    item_weight_unit_of_measure?: string;
    expiration_date?: string;
    price?: number;
    set?: InventorySet;
};
type InventoryRequest = {
    company_id: number;
    item: ItemQuery;
    sizes: InvSize[];
};
type InventoryResponse = {
    identifiers?: any;
    quantity?: number;
    currency?: string;
    size?: string;
    inventory_updated_on?: string;
    price_transfer?: number;
    store?: any;
    item_id?: number;
    uid?: string;
    sellable_quantity?: number;
    price_effective?: number;
    seller_identifier?: string;
    price?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type BrandMeta = {
    id: number;
    name: string;
};
type CompanyMeta = {
    id: number;
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    sellable?: QuantityBase;
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    damaged?: QuantityBase;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type PriceMeta = {
    tp_notes?: any;
    currency: string;
    updated_at?: string;
    marked: number;
    transfer: number;
    effective: number;
};
type DimensionResponse = {
    height: number;
    unit: string;
    width: number;
    is_default: boolean;
    length: number;
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type InventorySellerResponse = {
    fynd_meta?: any;
    brand: BrandMeta;
    store: StoreMeta;
    is_set?: boolean;
    item_id: number;
    identifier: any;
    company: CompanyMeta;
    total_quantity: number;
    manufacturer: ManufacturerResponse;
    country_of_origin: string;
    tags?: string[];
    uid: string;
    added_on_store?: string;
    fynd_item_code: string;
    quantities?: Quantities;
    set?: InventorySet;
    is_active?: boolean;
    weight: WeightResponse;
    fynd_article_code: string;
    tax_identifier?: any;
    size: string;
    track_inventory?: boolean;
    created_by?: UserSerializer;
    seller_identifier: string;
    price: PriceMeta;
    fragile: boolean;
    dimension: DimensionResponse;
    meta?: any;
    raw_meta?: any;
    return_config?: ReturnConfig1;
    trace_id?: string;
    stage?: string;
    expiration_date?: string;
    trader?: Trader1[];
    _custom_json?: any;
    modified_by?: UserSerializer;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    id?: string;
    cancelled?: number;
    file_path?: string;
    is_active?: boolean;
    succeed?: number;
    stage?: string;
    cancelled_records?: string[];
    created_by?: any;
    failed?: number;
    total?: number;
    modified_by?: any;
    modified_on?: string;
    company_id?: number;
    failed_records?: string[];
    created_on?: string;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    quantity?: number;
    total_quantity?: number;
    currency?: string;
    store_code: string;
    trace_id?: string;
    price_marked?: number;
    item_dimensions_unit_of_measure?: string;
    tags?: string[];
    item_weight_unit_of_measure?: string;
    price_effective?: number;
    seller_identifier: string;
    expiration_date?: string;
    price?: number;
};
type InventoryBulkRequest = {
    batch_id: string;
    company_id: number;
    sizes: InventoryJobPayload[];
    user?: any;
};
type InventoryExportQuantityFilter = {
    min?: number;
    operators: string;
    max?: number;
};
type InventoryExportFilter = {
    from_date?: string;
    to_date?: string;
    store_ids?: number[];
    brand_ids?: number[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryExportRequest = {
    notification_emails?: string[];
    filters: InventoryExportFilter;
    data?: string[];
    type?: string;
};
type InventoryExportResponse = {
    task_id: string;
    status?: string;
    created_on?: string;
    _id?: string;
    seller_id: number;
    trigger_on?: string;
    request_params?: any;
};
type InventoryExportAdvanceOption = {
    notification?: boolean;
    from_date?: string;
    to_date?: string;
    store_ids?: number[];
    brand_ids?: number[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryExportJob = {
    task_id: string;
    url?: string;
    type: string;
    status?: string;
    notification_emails?: string[];
    completed_on?: string;
    filters?: InventoryExportAdvanceOption;
    seller_id: number;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type ArticleStoreResponse = {
    store_code?: string;
    store_type?: string;
    uid?: number;
    name?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    sellable?: Quantity;
    order_committed?: Quantity;
    not_available?: Quantity;
    damaged?: Quantity;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type PriceArticle = {
    tp_notes?: any;
    currency?: string;
    marked?: number;
    transfer?: number;
    effective?: number;
};
type DimensionResponse1 = {
    length?: number;
    width?: number;
    unit?: string;
    height?: number;
};
type ReturnConfig2 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type GetInventories = {
    date_meta?: DateMeta;
    brand?: BrandMeta1;
    store?: ArticleStoreResponse;
    is_set?: boolean;
    item_id?: number;
    identifier?: any;
    company?: CompanyMeta1;
    total_quantity?: number;
    manufacturer?: ManufacturerResponse1;
    country_of_origin?: string;
    inventory_updated_on?: string;
    tags?: string[];
    uid?: string;
    quantities?: QuantitiesArticle;
    weight?: WeightResponse1;
    id?: string;
    tax_identifier?: any;
    size?: string;
    track_inventory?: boolean;
    created_by?: UserSerializer;
    platforms?: any;
    seller_identifier?: string;
    price?: PriceArticle;
    dimension?: DimensionResponse1;
    trace_id?: string;
    return_config?: ReturnConfig2;
    stage?: string;
    expiration_date?: string;
    trader?: Trader2[];
    modified_by?: UserSerializer;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
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
    total_quantity?: number;
    trace_id?: string;
    store_id: number;
    price_marked?: number;
    tags?: string[];
    price_effective?: number;
    seller_identifier: string;
    expiration_date?: string;
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
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnUpsert = {
    threshold1: number;
    tax2?: number;
    threshold2?: number;
    hsn_code: string;
    hs2_code: string;
    tax1: number;
    tax_on_esp?: boolean;
    uid?: number;
    company_id: number;
    tax_on_mrp: boolean;
    is_active?: boolean;
};
type HsnCodesObject = {
    threshold1?: number;
    id?: string;
    tax2?: number;
    threshold2?: number;
    hsn_code?: string;
    hs2_code?: string;
    tax1?: number;
    tax_on_esp?: boolean;
    modified_on?: string;
    company_id?: number;
    tax_on_mrp?: boolean;
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
    effective_date: string;
    threshold: number;
    rate: number;
};
type HSNDataInsertV2 = {
    country_code: string;
    type: string;
    created_on?: string;
    taxes: TaxSlab[];
    hsn_code: string;
    created_by?: any;
    description: string;
    modified_by?: any;
    modified_on?: string;
    hsn_code_id?: string;
    reporting_hsn: string;
};
type PageResponse = {
    has_previous?: boolean;
    current?: string;
    item_total?: number;
    size?: number;
    has_next?: boolean;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    slug?: string;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    action?: Action;
    discount?: string;
    departments?: string[];
    logo?: Media;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    priority_order?: number;
    slug?: string;
    name?: string;
    uid?: number;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    slug?: string;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    action?: Action;
    childs?: any[];
    _custom_json?: any;
};
type SecondLevelChild = {
    slug?: string;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    action?: Action;
    childs?: ThirdLevelChild[];
    _custom_json?: any;
};
type Child = {
    slug?: string;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    action?: Action;
    childs?: SecondLevelChild[];
    _custom_json?: any;
};
type CategoryItems = {
    slug?: string;
    banners?: ImageUrls;
    name?: string;
    uid?: number;
    action?: Action;
    childs?: Child[];
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
    items?: ProductListingDetail[];
    operators?: any;
    page: Page;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
};
type ProductDetail = {
    type?: string;
    slug: string;
    has_variant?: boolean;
    brand?: ProductBrand;
    rating?: number;
    teaser_tag?: any;
    tryouts?: string[];
    item_type?: string;
    rating_count?: number;
    uid?: number;
    item_code?: string;
    attributes?: any;
    similars?: string[];
    short_description?: string;
    image_nature?: string;
    name?: string;
    color?: string;
    medias?: Media1[];
    highlights?: string[];
    product_online_date?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    promo_meta?: any;
};
type InventoryPage = {
    has_previous?: boolean;
    next_id?: string;
    type: string;
    item_total: number;
    has_next?: boolean;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type GetAddressSerializer = {
    country_code?: string;
    state?: string;
    landmark?: string;
    pincode?: number;
    country?: string;
    city?: string;
    longitude?: number;
    latitude?: number;
    address2?: string;
    address_type?: string;
    address1?: string;
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetCompanySerializer = {
    reject_reason?: string;
    company_type?: string;
    business_type?: string;
    verified_by?: UserSerializer1;
    name?: string;
    stage?: string;
    addresses?: GetAddressSerializer[];
    created_by?: UserSerializer1;
    uid?: number;
    modified_by?: UserSerializer1;
    modified_on?: string;
    verified_on?: string;
    created_on?: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    weekday: string;
    open: boolean;
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
};
type InvoiceCredSerializer = {
    password?: string;
    username?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type UserSerializer2 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetLocationSerializer = {
    store_type?: string;
    address: GetAddressSerializer;
    created_on?: string;
    verified_on?: string;
    company?: GetCompanySerializer;
    phone_number?: string;
    store_code?: string;
    code: string;
    uid?: number;
    manager?: LocationManagerSerializer;
    documents?: Document[];
    timing?: LocationDayWiseSerializer[];
    gst_credentials?: InvoiceDetailsSerializer;
    integration_type?: LocationIntegrationType;
    name: string;
    created_by?: UserSerializer2;
    warnings?: any;
    modified_on?: string;
    notification_emails?: string[];
    verified_by?: UserSerializer2;
    stage?: string;
    product_return_config?: ProductReturnConfigSerializer;
    contact_numbers?: SellerPhoneNumber[];
    modified_by?: UserSerializer2;
    _custom_json?: any;
    display_name: string;
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
    name?: string;
    uid: number;
    app_id: string;
    _custom_json?: any;
    logo?: string;
    is_active?: boolean;
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
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type CompanyTaxesSerializer = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
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
    mode?: string;
    stage?: string;
    name?: string;
    business_type: string;
    business_info?: string;
    company_type: string;
    modified_on?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    franchise_enabled?: boolean;
    notification_emails?: string[];
    contact_details?: ContactDetails;
    taxes?: CompanyTaxesSerializer[];
    business_country_info?: BusinessCountryInfo;
    created_by?: UserSerializer;
    documents?: Document[];
    uid: number;
    created_on?: string;
    business_details?: BusinessDetails;
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    verified_on?: string;
    warnings?: any;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type CreateUpdateAddressSerializer = {
    country: string;
    city: string;
    latitude: number;
    address1: string;
    longitude: number;
    pincode: number;
    country_code?: string;
    address_type: string;
    state: string;
    address2?: string;
    landmark?: string;
};
type UpdateCompany = {
    business_details?: BusinessDetails;
    documents?: Document[];
    taxes?: CompanyTaxesSerializer1[];
    business_type?: string;
    reject_reason?: string;
    business_info?: string;
    addresses?: CreateUpdateAddressSerializer[];
    _custom_json?: any;
    company_type?: string;
    warnings?: any;
    franchise_enabled?: boolean;
    contact_details?: ContactDetails;
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
    uid?: number;
    company_documents?: DocumentsObj;
    product?: DocumentsObj;
    store?: DocumentsObj;
    stage?: string;
    brand?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    mode?: string;
    reject_reason?: string;
    description?: string;
    banner?: BrandBannerSerializer;
    _locale_language?: any;
    logo?: string;
    stage?: string;
    synonyms?: string[];
    name: string;
    slug_key?: string;
    modified_on?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    uid?: number;
    created_on?: string;
    _custom_json?: any;
    verified_on?: string;
    warnings?: any;
};
type CreateUpdateBrandRequestSerializer = {
    uid?: number;
    brand_tier?: string;
    description?: string;
    _custom_json?: any;
    banner?: BrandBannerSerializer;
    company_id?: number;
    _locale_language?: any;
    logo: string;
    synonyms?: string[];
    name: string;
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
    market_channels?: string[];
    uid?: number;
    created_on?: string;
    business_type: string;
    reject_reason?: string;
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    verified_on?: string;
    business_country_info?: BusinessCountryInfo;
    company_type: string;
    modified_on?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    notification_emails?: string[];
    stage?: string;
    details?: CompanyDetails;
    name?: string;
};
type CompanyBrandSerializer = {
    uid?: number;
    created_on?: string;
    company?: CompanySerializer;
    reject_reason?: string;
    verified_on?: string;
    modified_on?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    warnings?: any;
    stage?: string;
    brand?: GetBrandResponseSerializer;
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
    country?: string;
    city?: string;
    latitude: number;
    address1?: string;
    longitude: number;
    pincode?: number;
    country_code?: string;
    address_type?: string;
    state?: string;
    address2?: string;
    landmark?: string;
};
type LocationSerializer = {
    timing?: LocationDayWiseSerializer[];
    documents?: Document[];
    uid?: number;
    company: number;
    manager?: LocationManagerSerializer;
    code: string;
    display_name: string;
    _custom_json?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    contact_numbers?: SellerPhoneNumber[];
    holiday?: HolidaySchemaSerializer[];
    store_type?: string;
    warnings?: any;
    address: AddressSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    notification_emails?: string[];
    stage?: string;
    name: string;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type _ArticleQuery = {
    item_id?: number;
    ignored_stores?: number[];
    size?: string;
};
type _AssignStoreArticle = {
    article_assignment?: _ArticleAssignment;
    query?: _ArticleQuery;
    quantity?: number;
    group_id?: string;
    meta?: any;
};
type AssignStoreRequestValidator = {
    app_id?: string;
    channel_type?: string;
    store_ids?: number[];
    channel_identifier?: string;
    pincode?: string;
    company_id?: number;
    articles?: _AssignStoreArticle[];
};
type AssignStoreResponseSerializer = {
    uid?: string;
    article_assignment?: _ArticleAssignment;
    price_marked?: number;
    quantity?: number;
    store_pincode?: string;
    status?: boolean;
    _id?: string;
    company_id?: number;
    item_id?: number;
    index?: number;
    store_id?: number;
    meta?: any;
    size?: string;
    s_city?: string;
    price_effective?: number;
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
    only_deployed?: boolean;
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
    slug?: string;
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
    phone?: InformationPhone[];
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
    name?: string;
    description?: string;
    logo?: SecureUrl;
    mobile_logo?: SecureUrl;
    favicon?: SecureUrl;
    banner?: SecureUrl;
    domain?: Domain;
    domains?: Domain[];
    _id?: string;
    slug?: string;
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
type Validation = {
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: string[];
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Rule = {
    min?: number;
    discount_qty?: number;
    max?: number;
    value?: number;
    key?: number;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type CouponSchedule = {
    start?: string;
    end?: string;
    duration?: number;
    next_schedule?: any[];
    cron?: string;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    networks?: string[];
    uses?: PaymentAllowValue;
    codes?: string[];
    types?: string[];
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
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type Restrictions = {
    payments?: any;
    coupon_allowed?: boolean;
    price_range?: PriceRange;
    uses?: UsesRestriction;
    ordering_stores?: number[];
    bulk_bundle?: BulkBundleRestriction;
    user_groups?: number[];
    user_type?: string;
    post_order?: PostOrder;
    platforms?: string[];
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type RuleDefinition = {
    is_exact?: boolean;
    type: string;
    auto_apply?: boolean;
    calculate_on: string;
    scope?: string[];
    currency_code?: string;
    applicable_on: string;
    value_type: string;
};
type Validity = {
    priority?: number;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    remove?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    subtitle?: string;
    title?: string;
    auto?: DisplayMetaDict;
    description?: string;
};
type CouponAdd = {
    identifiers: Identifier;
    validation?: Validation;
    date_meta?: CouponDateMeta;
    rule: Rule[];
    action?: CouponAction;
    _schedule?: CouponSchedule;
    ownership: Ownership;
    restrictions?: Restrictions;
    state?: State;
    rule_definition: RuleDefinition;
    tags?: string[];
    validity: Validity;
    type_slug: string;
    author?: CouponAuthor;
    display_meta: DisplayMeta;
    code: string;
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
    identifiers: Identifier;
    validation?: Validation;
    date_meta?: CouponDateMeta;
    rule: Rule[];
    action?: CouponAction;
    _schedule?: CouponSchedule;
    ownership: Ownership;
    restrictions?: Restrictions;
    state?: State;
    rule_definition: RuleDefinition;
    tags?: string[];
    validity: Validity;
    type_slug: string;
    author?: CouponAuthor;
    display_meta: DisplayMeta;
    code: string;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type DisplayMeta1 = {
    offer_text?: string;
    offer_label?: string;
    description?: string;
    name?: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PromotionSchedule = {
    start: string;
    end?: string;
    duration?: number;
    next_schedule?: any[];
    cron?: string;
    published: boolean;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CompareObject = {
    less_than?: number;
    greater_than_equals?: number;
    equals?: number;
    greater_than?: number;
    less_than_equals?: number;
};
type ItemCriteria = {
    item_exclude_brand?: number[];
    item_size?: string[];
    item_sku?: string[];
    item_id?: number[];
    item_brand?: number[];
    available_zones?: string[];
    item_company?: number[];
    item_store?: number[];
    cart_quantity?: CompareObject;
    item_exclude_company?: number[];
    cart_total?: CompareObject;
    buy_rules?: string[];
    cart_unique_item_amount?: CompareObject;
    item_category?: number[];
    item_exclude_store?: number[];
    cart_unique_item_quantity?: CompareObject;
    product_tags?: string[];
    item_exclude_sku?: string[];
    all_items?: boolean;
    item_exclude_category?: number[];
    item_exclude_id?: number[];
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
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
    start?: string;
    end?: string;
};
type Restrictions1 = {
    payments?: PromotionPaymentModes[];
    order_quantity?: number;
    user_id?: string[];
    uses: UsesRestriction1;
    anonymous_users?: boolean;
    user_groups?: number[];
    post_order?: PostOrder1;
    platforms?: string[];
    user_registered?: UserRegistered;
};
type DiscountOffer = {
    discount_amount?: number;
    partial_can_ret?: boolean;
    max_usage_per_transaction?: number;
    apportion_discount?: boolean;
    discount_price?: number;
    discount_percentage?: number;
    min_offer_quantity?: number;
    code?: string;
    max_discount_amount?: number;
    max_offer_quantity?: number;
};
type DiscountRule = {
    buy_condition: string;
    discount_type: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
};
type PromotionListItem = {
    apply_all_discount?: boolean;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    date_meta?: PromotionDateMeta;
    currency?: string;
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    apply_exclusive?: string;
    author?: PromotionAuthor;
    buy_rules: any;
    promotion_type: string;
    application_id: string;
    visiblility?: Visibility;
    stackable?: boolean;
    mode: string;
    restrictions?: Restrictions1;
    code?: string;
    discount_rules: DiscountRule[];
    promo_group: string;
    calculate_on?: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    apply_all_discount?: boolean;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    date_meta?: PromotionDateMeta;
    currency?: string;
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    apply_exclusive?: string;
    author?: PromotionAuthor;
    buy_rules: any;
    promotion_type: string;
    application_id: string;
    visiblility?: Visibility;
    stackable?: boolean;
    mode: string;
    restrictions?: Restrictions1;
    code?: string;
    discount_rules: DiscountRule[];
    promo_group: string;
    calculate_on?: string;
};
type PromotionUpdate = {
    apply_all_discount?: boolean;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    date_meta?: PromotionDateMeta;
    currency?: string;
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    apply_exclusive?: string;
    author?: PromotionAuthor;
    buy_rules: any;
    promotion_type: string;
    application_id: string;
    visiblility?: Visibility;
    stackable?: boolean;
    mode: string;
    restrictions?: Restrictions1;
    code?: string;
    discount_rules: DiscountRule[];
    promo_group: string;
    calculate_on?: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    modified_on?: string;
    example?: string;
    subtitle?: string;
    title?: string;
    entity_slug?: string;
    type?: string;
    is_hidden?: boolean;
    created_on?: string;
    description?: string;
    entity_type?: string;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductPrice = {
    selling?: number;
    add_on?: number;
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
    marked?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    raw_offer?: any;
    offer?: any;
    item_criteria?: any;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type FreeGiftItem = {
    item_name?: string;
    item_slug?: string;
    item_images_url?: string[];
    item_price_details?: any;
    item_id?: number;
    item_brand_name?: string;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    quantity?: number;
};
type AppliedPromotion = {
    offer_text?: string;
    promotion_type?: string;
    discount_rules?: DiscountRulesApp[];
    promotion_group?: string;
    promotion_name?: string;
    mrp_promotion?: boolean;
    amount?: number;
    ownership?: Ownership2;
    applied_free_articles?: AppliedFreeArticles[];
    article_quantity?: number;
    promo_id?: string;
    buy_rules?: BuyRules[];
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
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ProductArticle = {
    uid?: string;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
    size?: string;
    seller?: BaseInfo;
    parent_item_identifiers?: any;
    quantity?: number;
    type?: string;
    _custom_json?: any;
    store?: BaseInfo;
    extra_meta?: any;
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
    query?: ActionQuery;
    url?: string;
    type?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    images?: ProductImage[];
    uid?: number;
    slug?: string;
    brand?: BaseInfo;
    action?: ProductAction;
    type?: string;
    net_quantity?: NetQuantity;
    categories?: CategoryInfo[];
    name?: string;
};
type PromoMeta = {
    message?: string;
};
type ProductAvailability = {
    out_of_stock?: boolean;
    is_valid?: boolean;
    other_store_quantity?: number;
    deliverable?: boolean;
    sizes?: string[];
};
type CartProductInfo = {
    identifiers: CartProductIdentifer;
    bulk_offer?: any;
    price?: ProductPriceInfo;
    promotions_applied?: AppliedPromotion[];
    article?: ProductArticle;
    product?: CartProduct;
    is_set?: boolean;
    discount?: string;
    parent_item_identifiers?: any;
    quantity?: number;
    message?: string;
    promo_meta?: PromoMeta;
    price_per_unit?: ProductPriceInfo;
    coupon_message?: string;
    availability?: ProductAvailability;
    key?: string;
};
type LoyaltyPoints = {
    applicable?: number;
    description?: string;
    is_applied?: boolean;
    total?: number;
};
type RawBreakup = {
    vog?: number;
    you_saved?: number;
    convenience_fee?: number;
    mrp_total?: number;
    total?: number;
    fynd_cash?: number;
    discount?: number;
    delivery_charge?: number;
    gst_charges?: number;
    subtotal?: number;
    cod_charge?: number;
    coupon?: number;
};
type CouponBreakup = {
    max_discount_value?: number;
    uid?: string;
    coupon_type?: string;
    value?: number;
    title?: string;
    message?: string;
    type?: string;
    sub_title?: string;
    is_applied?: boolean;
    minimum_cart_value?: number;
    coupon_value?: number;
    description?: string;
    code?: string;
};
type DisplayBreakup = {
    display?: string;
    value?: number;
    message?: string[];
    currency_code?: string;
    currency_symbol?: string;
    key?: string;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
};
type OpenapiCartDetailsResponse = {
    message?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
};
type OpenApiErrorResponse = {
    message?: string;
    success?: boolean;
    errors?: any;
};
type ShippingAddress = {
    address_type?: string;
    meta?: any;
    country_iso_code?: string;
    country_phone_code?: string;
    area_code: string;
    area_code_slug?: string;
    landmark?: string;
    country?: string;
    city?: string;
    email?: string;
    state?: string;
    phone?: number;
    pincode?: number;
    country_code?: string;
    address?: string;
    area?: string;
    name?: string;
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
    is_valid?: boolean;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    message?: string;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type OpenApiOrderItem = {
    price_marked: number;
    meta?: CartItemMeta;
    employee_discount?: number;
    extra_meta?: any;
    coupon_effective_discount: number;
    cod_charges: number;
    discount: number;
    quantity?: number;
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    price_effective: number;
    amount_paid: number;
    size: string;
    loyalty_discount?: number;
    delivery_charges: number;
    cashback_applied: number;
    product_id: number;
};
type OpenApiPlatformCheckoutReq = {
    coupon_code: string;
    cart_value: number;
    billing_address: ShippingAddress;
    currency_code?: string;
    coupon_value: number;
    gstin?: string;
    shipping_address?: ShippingAddress;
    cart_items: OpenApiOrderItem[];
    order_id?: string;
    affiliate_order_id?: string;
    comment?: string;
    employee_discount?: any;
    payment_mode?: string;
    cod_charges: number;
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
    delivery_charges: number;
    coupon?: string;
    cashback_applied: number;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    message?: string;
    success?: boolean;
    order_ref_id?: string;
};
type AbandonedCart = {
    articles: any[];
    merge_qty?: boolean;
    fc_index_map?: number[];
    discount?: number;
    checkout_mode?: string;
    shipments?: any[];
    meta?: any;
    uid: number;
    is_default: boolean;
    cod_charges?: any;
    cashback: any;
    payment_methods?: any[];
    buy_now?: boolean;
    delivery_charges?: any;
    is_archive?: boolean;
    cart_value?: number;
    user_id: string;
    is_active?: boolean;
    expire_at: string;
    created_on: string;
    promotion?: any;
    app_id?: string;
    pick_up_customer_details?: any;
    last_modified: string;
    gstin?: string;
    _id: string;
    order_id?: string;
    payments?: any;
    comment?: string;
    bulk_coupon_discount?: number;
    payment_mode?: string;
    fynd_credits?: any;
    coupon?: any;
};
type AbandonedCartResponse = {
    items?: AbandonedCart[];
    success?: boolean;
    result?: any;
    message?: string;
    page?: Page;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    pan_no?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    coupon_text?: string;
    restrict_checkout?: boolean;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    breakup_values?: CartBreakup;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    message?: string;
    id?: string;
    buy_now?: boolean;
    checkout_mode?: string;
    last_modified?: string;
    gstin?: string;
};
type AddProductCart = {
    article_id?: string;
    product_group_tags?: string[];
    store_id?: number;
    display?: string;
    extra_meta?: any;
    pos?: boolean;
    parent_item_identifiers?: any;
    quantity?: number;
    _custom_json?: any;
    item_size?: string;
    article_assignment?: any;
    seller_id?: number;
    item_id?: number;
};
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    message?: string;
    partial?: boolean;
    success?: boolean;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    item_index?: number;
    identifiers: CartProductIdentifer;
    article_id?: string;
    parent_item_identifiers?: any;
    quantity?: number;
    _custom_json?: any;
    item_size?: string;
    extra_meta?: any;
    item_id?: number;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
type UpdateCartDetailResponse = {
    message?: string;
    success?: boolean;
    cart?: CartDetailResponse;
};
type GetShareCartLinkRequest = {
    meta?: any;
    id?: string;
};
type GetShareCartLinkResponse = {
    share_url?: string;
    token?: string;
};
type SharedCartDetails = {
    meta?: any;
    token?: string;
    source?: any;
    created_on?: string;
    user?: any;
};
type SharedCart = {
    coupon_text?: string;
    delivery_promise?: ShipmentPromise;
    cart_id?: number;
    checkout_mode?: string;
    shared_cart_details?: SharedCartDetails;
    uid?: string;
    payment_selection_lock?: PaymentSelectionLock;
    currency?: CartCurrency;
    id?: string;
    buy_now?: boolean;
    restrict_checkout?: boolean;
    breakup_values?: CartBreakup;
    last_modified?: string;
    gstin?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    comment?: string;
    delivery_charge_info?: string;
    message?: string;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    cart_value?: string;
    user_id?: string;
    cart_id?: string;
    created_on?: string;
    item_counts?: string;
};
type MultiCartResponse = {
    success?: boolean;
    data?: CartList[];
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    pan_no?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    coupon_text?: string;
    restrict_checkout?: boolean;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    breakup_values?: CartBreakup;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    message?: string;
    id?: string;
    buy_now?: boolean;
    user?: UserInfo;
    checkout_mode?: string;
    last_modified?: string;
    gstin?: string;
};
type DeleteCartDetailResponse = {
    message?: string;
    success?: boolean;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type PageCoupon = {
    has_next?: boolean;
    total?: number;
    has_previous?: boolean;
    total_item_count?: number;
    current?: number;
};
type Coupon = {
    coupon_code?: string;
    max_discount_value?: number;
    coupon_type?: string;
    title?: string;
    message?: string;
    sub_title?: string;
    minimum_cart_value?: number;
    is_applied?: boolean;
    expires_on?: string;
    coupon_value?: number;
    description?: string;
    is_applicable?: boolean;
};
type GetCouponResponse = {
    page?: PageCoupon;
    available_coupon_list?: Coupon[];
};
type ApplyCouponRequest = {
    coupon_code: string;
};
type GeoLocation = {
    latitude?: number;
    longitude?: number;
};
type PlatformAddress = {
    cart_id?: string;
    email?: string;
    checkout_mode?: string;
    state?: string;
    meta?: any;
    country?: string;
    landmark?: string;
    geo_location?: GeoLocation;
    phone?: string;
    id?: string;
    google_map_point?: any;
    country_code?: string;
    area?: string;
    name?: string;
    user_id?: string;
    area_code?: string;
    is_active?: boolean;
    address?: string;
    is_default_address?: boolean;
    address_type?: string;
    created_by_user_id?: string;
    city?: string;
    tags?: string[];
    area_code_slug?: string;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type SaveAddressResponse = {
    id?: string;
    success?: boolean;
    is_default_address?: boolean;
};
type UpdateAddressResponse = {
    is_default_address?: boolean;
    is_updated?: boolean;
    success?: boolean;
    id?: string;
};
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
type PlatformSelectCartAddressRequest = {
    billing_address_id?: string;
    checkout_mode?: string;
    cart_id?: string;
    id?: string;
};
type ShipmentResponse = {
    shipment_type?: string;
    items?: CartProductInfo[];
    fulfillment_id?: number;
    order_type?: string;
    box_type?: string;
    fulfillment_type?: string;
    dp_id?: string;
    dp_options?: any;
    promise?: ShipmentPromise;
    shipments?: number;
};
type CartShipmentsResponse = {
    coupon_text?: string;
    delivery_promise?: ShipmentPromise;
    restrict_checkout?: boolean;
    cart_id?: number;
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    last_modified?: string;
    gstin?: string;
    shipments?: ShipmentResponse[];
    uid?: string;
    is_valid?: boolean;
    error?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    comment?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    message?: string;
    id?: string;
    buy_now?: boolean;
};
type UpdateCartShipmentItem = {
    shipment_type: string;
    article_uid: string;
    quantity?: number;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    pan_no?: string;
    comment?: string;
    checkout_mode?: string;
    gstin?: string;
    pick_up_customer_details?: any;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type Files = {
    key: string;
    values: string[];
};
type StaffCheckout = {
    _id: string;
    first_name: string;
    employee_code?: string;
    user: string;
    last_name: string;
};
type PlatformCartCheckoutDetailRequest = {
    billing_address?: any;
    ordering_store?: number;
    payment_params?: any;
    payment_identifier?: string;
    merchant_code?: string;
    meta?: any;
    delivery_address?: any;
    pos?: boolean;
    id: string;
    aggregator?: string;
    user_id: string;
    address_id?: string;
    pick_at_store_uid?: number;
    callback_url?: string;
    billing_address_id?: string;
    extra_meta?: any;
    payment_auto_confirm?: boolean;
    order_type: string;
    payment_mode: string;
    files?: Files[];
    staff?: StaffCheckout;
};
type CheckCart = {
    error_message?: string;
    coupon_text?: string;
    delivery_promise?: ShipmentPromise;
    cart_id?: number;
    store_code?: string;
    store_emps?: any[];
    checkout_mode?: string;
    uid?: string;
    success?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    cod_charges?: number;
    currency?: CartCurrency;
    id?: string;
    buy_now?: boolean;
    delivery_charges?: number;
    restrict_checkout?: boolean;
    breakup_values?: CartBreakup;
    user_type?: string;
    last_modified?: string;
    gstin?: string;
    order_id?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    comment?: string;
    cod_available?: boolean;
    cod_message?: string;
    delivery_charge_info?: string;
    message?: string;
    delivery_charge_order_value?: number;
};
type CartCheckoutResponse = {
    order_id?: string;
    success?: boolean;
    payment_confirm_url?: string;
    app_intercept_url?: string;
    data?: any;
    message?: string;
    callback_url?: string;
    cart?: CheckCart;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    address_type?: string;
    store_code?: string;
    uid?: number;
    area_code?: string;
    area_code_slug?: string;
    landmark?: string;
    country?: string;
    city?: string;
    email?: string;
    state?: string;
    phone?: string;
    pincode?: number;
    id?: number;
    address?: string;
    area?: string;
    name?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    payment_mode?: string;
    aggregator_name?: string;
    address_id?: string;
    id?: string;
    payment_identifier?: string;
    merchant_code?: string;
};
type CouponValidity = {
    discount?: number;
    title?: string;
    valid?: boolean;
    display_message_en?: string;
    code?: string;
};
type PaymentCouponValidate = {
    coupon_validity?: CouponValidity;
    message?: string;
    success: boolean;
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
