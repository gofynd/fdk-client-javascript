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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, Prices, PlatformItem, GSTDetailsData, BagUnit, ShipmentStatus, UserDataInfo, PaymentModeInfo, ShipmentItemFulFillingStore, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, BagStateMapper, BagStatusHistory, OrderDetailsData, UserDetailsData, DPDetailsData, ShipmentStatusData, BagGST, OrderBrandName, PlatformDeliveryAddress, BagConfigs, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, Identifier, FinancialBreakup, OrderBagArticle, CurrentStatus, OrderBags, FulfillingStore, TrackingList, ShipmentPayments, ShipmentInfoResponse, OrderingStore, PlatformShipment, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, ArticleDetails, PDFLinks, AffiliateMeta, ShipmentTimeStamp, Formatted, EInvoice, EinvoiceInfo, LockData, DebugInfo, BuyerDetails, ShipmentMeta, AffiliateDetails, BagGSTDetails, Dates, BagReturnableCancelableStatus, Attributes, Item, Brand, B2BPODetails, BagMeta, EInvoicePortalDetails, StoreEwaybill, StoreEinvoice, StoreGstCredentials, Document, StoreDocuments, StoreMeta, StoreAddress, Store, ReturnConfig, Dimensions, Weight, Article, AffiliateBagDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, Products, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, UserData, MarketPlacePdf, AffiliateBag, OrderPriority, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryStoreConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ProcessingDates, Tax, Charge, LineItem, Shipment, ShippingInfo, PaymentMethod, PaymentInfo, TaxInfo, BillingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, Price, LimitedProductData, Size, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, Guide, ValidateSizeGuide, GetMultiSizeGuide, ListSizeGuide, SizeGuideResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, SEOData, MOQData, OwnerAppItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, UserInfo, CollectionSchedule, CollectionQuery, SeoDetail, CollectionBadge, CollectionImage, CollectionBanner, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterDetails, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, SingleCategoryResponse, CategoryUpdateResponse, TeaserTag, Trader, ProductPublish, NetQuantity, TaxIdentifier, CustomOrder, ProductCreateUpdateSchemaV2, ReturnConfigResponse, Logo, ProductPublished, Image, NetQuantityResponse, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, ProductCreateUpdate, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, CompanyMeta, ReturnConfig1, Trader1, BrandMeta, QuantityBase, Quantities, ManufacturerResponse, PriceMeta, WeightResponse, DimensionResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportQuantityFilter, InventoryExportFilter, InventoryExportRequest, InventoryExportResponse, InventoryExportAdvanceOption, InventoryExportJob, CompanyMeta1, ReturnConfig2, Trader2, BrandMeta1, Quantity, QuantitiesArticle, ArticleStoreResponse, ManufacturerResponse1, PriceArticle, WeightResponse1, DimensionResponse1, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, PageResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, UserSerializer1, GetAddressSerializer, GetCompanySerializer, UserSerializer2, ProductReturnConfigSerializer, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, SellerPhoneNumber, LocationManagerSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, ContactDetails, CompanyTaxesSerializer, BusinessCountryInfo, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStores, OrderingStoresResponse, CouponAction, RuleDefinition, CouponSchedule, Ownership, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, BulkBundleRestriction, PostOrder, PriceRange, Restrictions, DisplayMetaDict, DisplayMeta, State, Validity, CouponAuthor, Validation, Rule, CouponDateMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, PromotionDateMeta, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, UsesRemaining1, UsesRestriction1, PostOrder1, Restrictions1, DisplayMeta1, Visibility, PromotionAction, PromotionAuthor, PromotionSchedule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, DisplayBreakup, CouponBreakup, RawBreakup, LoyaltyPoints, CartBreakup, ActionQuery, ProductAction, CategoryInfo, BaseInfo, ProductImage, CartProduct, BasePrice, ArticlePriceInfo, ProductArticle, ProductAvailability, Ownership2, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, CartProductIdentifer, ProductPrice, ProductPriceInfo, PromoMeta, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, Files, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    display_fields: string[];
    created: boolean;
    excluded_fields: string[];
    aggregators?: any[];
    app_id: string;
    success: boolean;
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    merchant_salt: string;
    key: string;
    is_active?: boolean;
    secret: string;
    config_type: string;
};
type PaymentGatewayConfigRequest = {
    is_active?: boolean;
    app_id: string;
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
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type IntentApp = {
    logos?: PaymentModeLogo;
    code?: string;
    package_name?: string;
    display_name?: string;
};
type PaymentModeList = {
    merchant_code?: string;
    logo_url?: PaymentModeLogo;
    card_isin?: string;
    exp_year?: number;
    card_type?: string;
    card_issuer?: string;
    card_fingerprint?: string;
    retry_count?: number;
    aggregator_name: string;
    nickname?: string;
    fynd_vpa?: string;
    card_name?: string;
    card_id?: string;
    intent_app_error_list?: string[];
    intent_flow?: boolean;
    name?: string;
    timeout?: number;
    compliant_with_tokenisation_guidelines?: boolean;
    cod_limit_per_order?: number;
    exp_month?: number;
    intent_app_error_dict_list?: IntentAppErrorList[];
    cod_limit?: number;
    card_number?: string;
    card_brand?: string;
    display_name?: string;
    expired?: boolean;
    card_reference?: string;
    code?: string;
    remaining_limit?: number;
    card_token?: string;
    card_brand_image?: string;
    display_priority?: number;
    intent_app?: IntentApp[];
};
type RootPaymentMode = {
    anonymous_enable?: boolean;
    name: string;
    display_name: string;
    save_card?: boolean;
    display_priority: number;
    list?: PaymentModeList[];
    is_pay_by_card_pl?: boolean;
    aggregator_name?: string;
    add_card_enabled?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type Payout = {
    payouts_aggregators: any[];
    is_active: boolean;
    transfer_type: string;
    unique_transfer_no: any;
    customers: any;
    is_default: boolean;
    more_attributes: any;
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    ifsc_code: string;
    country?: string;
    city?: string;
    bank_name?: string;
    account_type: string;
    state?: string;
    account_holder?: string;
    account_no?: string;
    pincode?: number;
    branch_name?: string;
};
type PayoutRequest = {
    aggregator: string;
    unique_external_id: string;
    is_active: boolean;
    users: any;
    transfer_type: string;
    bank_details: PayoutBankDetails;
};
type PayoutResponse = {
    aggregator: string;
    payment_status: string;
    created: boolean;
    payouts: any;
    is_active: boolean;
    users: any;
    transfer_type: string;
    unique_transfer_no: string;
    bank_details: any;
    success: boolean;
};
type UpdatePayoutResponse = {
    is_active: boolean;
    is_default: boolean;
    success: boolean;
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
    ifsc_code: string;
    bank_name: string;
    account_holder: string;
    account_no: string;
    branch_name: string;
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
    address: string;
    mobile?: string;
    subtitle: string;
    beneficiary_id: string;
    branch_name?: string;
    comment?: string;
    modified_on: string;
    title: string;
    ifsc_code: string;
    bank_name: string;
    display_name: string;
    id: number;
    created_on: string;
    delights_user_name?: string;
    transfer_mode: string;
    account_holder: string;
    account_no: string;
    is_active: boolean;
    email: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    current_status?: string;
    order_id?: string;
    payment_gateway?: string;
    extra_meta?: any;
    payment_id?: string;
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
    order_id: string;
    message: string;
    success: boolean;
};
type PlatformPaymentOptions = {
    enabled: boolean;
    payment_selection_lock?: any;
    mode_of_payment: string;
    cod_charges?: number;
    anonymous_cod?: boolean;
    callback_url?: any;
    source: string;
    cod_amount_limit?: number;
    methods: any;
};
type PlatfromPaymentConfig = {
    message: string;
    data: PlatformPaymentOptions;
    success: boolean;
};
type UpdatePlatformPaymentConfig = {
    payment_selection_lock?: any;
    cod_charges?: number;
    anonymous_cod?: boolean;
    cod_amount_limit?: number;
    methods: any;
};
type CODdata = {
    remaining_limit: number;
    limit: number;
    user_id: string;
    usages: number;
    is_active: boolean;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    is_active: boolean;
    mobileno: string;
    merchant_user_id: string;
};
type SetCODOptionResponse = {
    message: string;
    success: boolean;
};
type EdcModelData = {
    aggregator: string;
    aggregator_id: number;
    models: string[];
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
    terminal_serial_no: string;
    edc_model: string;
    edc_device_serial_no: string;
    aggregator_id: number;
    device_tag?: string;
    store_id: number;
};
type EdcDevice = {
    terminal_serial_no: string;
    application_id: string;
    edc_model?: string;
    edc_device_serial_no: string;
    merchant_store_pos_code?: string;
    is_active: boolean;
    terminal_unique_identifier: string;
    aggregator_id: number;
    device_tag: string;
    store_id: number;
    aggregator_name?: string;
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
    edc_model?: string;
    edc_device_serial_no?: string;
    merchant_store_pos_code?: string;
    is_active?: string;
    aggregator_id?: number;
    device_tag?: string;
    store_id?: number;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    items: EdcDevice[];
    page: Page;
    success: boolean;
};
type PaymentInitializationRequest = {
    aggregator: string;
    merchant_order_id: string;
    razorpay_payment_id?: string;
    amount: number;
    method: string;
    order_id: string;
    timeout?: number;
    customer_id: string;
    contact: string;
    vpa?: string;
    email: string;
    currency: string;
    device_id?: string;
};
type PaymentInitializationResponse = {
    aggregator: string;
    merchant_order_id: string;
    amount?: number;
    method: string;
    razorpay_payment_id?: string;
    status?: string;
    polling_url: string;
    customer_id?: string;
    timeout?: number;
    aggregator_order_id?: string;
    vpa?: string;
    virtual_id?: string;
    upi_poll_url?: string;
    bqr_image?: string;
    currency?: string;
    device_id?: string;
    success: boolean;
};
type PaymentStatusUpdateRequest = {
    aggregator: string;
    merchant_order_id: string;
    amount: number;
    method: string;
    status: string;
    order_id: string;
    customer_id: string;
    contact: string;
    vpa?: string;
    email: string;
    currency: string;
    device_id?: string;
};
type PaymentStatusUpdateResponse = {
    status: string;
    redirect_url?: string;
    aggregator_name: string;
    retry: boolean;
    success?: boolean;
};
type ResendOrCancelPaymentRequest = {
    device_id?: string;
    order_id: string;
    request_type: string;
};
type LinkStatus = {
    message: string;
    status: boolean;
};
type ResendOrCancelPaymentResponse = {
    data: LinkStatus;
    success: boolean;
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
type Prices = {
    refund_credit?: number;
    cashback_applied?: number;
    fynd_credits?: number;
    value_of_good?: number;
    refund_amount?: number;
    amount_paid_roundoff?: number;
    discount?: number;
    delivery_charge?: number;
    tax_collected_at_source?: number;
    cod_charges?: number;
    price_effective?: number;
    amount_paid?: number;
    price_marked?: number;
    promotion_effective_discount?: number;
    cashback?: number;
    coupon_value?: number;
};
type PlatformItem = {
    code?: string;
    size?: string;
    image?: string[];
    images?: string[];
    can_cancel?: boolean;
    l3_category?: number;
    department_id?: number;
    can_return?: boolean;
    color?: string;
    name?: string;
    l3_category_name?: string;
    l1_category?: string[];
    id?: number;
};
type GSTDetailsData = {
    gst_fee: number;
    value_of_good: number;
    gstin_code: string;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
};
type BagUnit = {
    total_shipment_bags: number;
    shipment_id: string;
    status: any;
    bag_id: number;
    ordering_channel: string;
    prices?: Prices;
    item?: PlatformItem;
    can_cancel?: boolean;
    gst?: GSTDetailsData;
    can_return?: boolean;
    item_quantity: number;
};
type ShipmentStatus = {
    status: string;
    ops_status: string;
    hex_code: string;
    title: string;
    actual_status: string;
};
type UserDataInfo = {
    email?: string;
    is_anonymous_user?: boolean;
    avis_user_id?: string;
    gender?: string;
    first_name?: string;
    mobile?: string;
    name?: string;
    uid?: number;
    last_name?: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentItem = {
    company?: any;
    total_bags_count: number;
    created_at: string;
    prices?: Prices;
    bags?: BagUnit[];
    total_shipments_in_order: number;
    shipment_status?: ShipmentStatus;
    sla?: any;
    user?: UserDataInfo;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_centre: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    shipment_created_at: number;
    payment_methods?: any;
    id: string;
    channel?: any;
    application?: any;
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    page?: any;
    applied_filters?: any;
    items?: ShipmentItem[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type BagStateMapper = {
    app_facing?: boolean;
    display_name: string;
    state_type: string;
    is_active?: boolean;
    app_state_name?: string;
    app_display_name?: string;
    journey_type: string;
    bs_id: number;
    name: string;
    notify_customer?: boolean;
};
type BagStatusHistory = {
    bsh_id?: number;
    state_id?: number;
    state_type?: string;
    shipment_id?: string;
    status: string;
    bag_id?: number;
    reasons?: any[];
    display_name?: string;
    store_id?: number;
    forward?: boolean;
    bag_state_mapper?: BagStateMapper;
    delivery_awb_number?: string;
    updated_at?: string;
    app_display_name?: string;
    created_at?: string;
    delivery_partner_id?: number;
    kafka_sync?: boolean;
};
type OrderDetailsData = {
    ordering_channel?: string;
    fynd_order_id: string;
    ordering_channel_logo?: any;
    tax_details?: any;
    cod_charges?: string;
    order_date?: string;
    source?: string;
    order_value?: string;
    affiliate_id?: string;
};
type UserDetailsData = {
    email?: string;
    phone: string;
    state: string;
    country: string;
    pincode: string;
    city: string;
    name: string;
    address: string;
};
type DPDetailsData = {
    gst_tag?: string;
    country?: string;
    eway_bill_id?: string;
    track_url?: string;
    name?: string;
    pincode?: string;
    id?: number;
    awb_no?: string;
};
type ShipmentStatusData = {
    shipment_id?: string;
    status?: string;
    bag_list?: string[];
    created_at?: string;
    id?: number;
};
type BagGST = {
    is_default_hsn_code?: boolean;
    gst_fee?: number;
    value_of_good?: number;
    gst_tag?: string;
    gstin_code?: string;
    hsn_code?: string;
    gst_tax_percentage?: number;
    brand_calculated_amount?: number;
};
type OrderBrandName = {
    company?: string;
    brand_name: string;
    created_on: string;
    logo: string;
    modified_on?: string;
    id: number;
};
type PlatformDeliveryAddress = {
    address2?: string;
    email?: string;
    address_category?: string;
    phone?: string;
    contact_person?: string;
    version?: string;
    state?: string;
    landmark?: string;
    country?: string;
    latitude?: number;
    area?: string;
    pincode?: string;
    updated_at?: string;
    address1?: string;
    address_type?: string;
    created_at?: string;
    city?: string;
    longitude?: number;
};
type BagConfigs = {
    can_be_cancelled: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
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
    buy_rules?: BuyRules[];
    mrp_promotion?: boolean;
    article_quantity?: number;
    promo_id?: string;
    promotion_type?: string;
    promotion_name?: string;
    amount?: number;
    discount_rules?: DiscountRules[];
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    gst_tag: string;
    total_units: number;
    price_effective: number;
    price_marked: number;
    fynd_credits: number;
    amount_paid_roundoff?: number;
    tax_collected_at_source?: number;
    added_to_fynd_cash: boolean;
    coupon_effective_discount: number;
    gst_tax_percentage: number;
    amount_paid: number;
    promotion_effective_discount: number;
    identifiers: Identifier;
    coupon_value: number;
    gst_fee: number;
    size: string;
    cashback_applied: number;
    delivery_charge: number;
    hsn_code: string;
    brand_calculated_amount: number;
    refund_credit: number;
    value_of_good: number;
    discount: number;
    item_name: string;
    cod_charges: number;
    transfer_price: number;
    cashback: number;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type CurrentStatus = {
    state_id?: number;
    state_type?: string;
    shipment_id?: string;
    status?: string;
    bag_id?: number;
    store_id?: number;
    bag_state_mapper?: BagStateMapper;
    delivery_awb_number?: string;
    updated_at?: number;
    current_status_id: number;
    created_at?: string;
    delivery_partner_id?: number;
    kafka_sync?: boolean;
};
type OrderBags = {
    identifier?: string;
    display_name?: string;
    can_return?: boolean;
    gst_details?: BagGST;
    bag_id: number;
    seller_identifier?: string;
    item?: PlatformItem;
    brand?: OrderBrandName;
    delivery_address?: PlatformDeliveryAddress;
    bag_configs?: BagConfigs;
    line_number?: number;
    prices?: Prices;
    parent_promo_bags?: any;
    can_cancel?: boolean;
    applied_promos?: AppliedPromos[];
    financial_breakup?: FinancialBreakup;
    article?: OrderBagArticle;
    quantity?: number;
    entity_type?: string;
    current_status?: CurrentStatus;
};
type FulfillingStore = {
    code: string;
    phone: string;
    fulfillment_channel: string;
    contact_person: string;
    state: string;
    country: string;
    store_name: string;
    pincode: string;
    city: string;
    address: string;
    meta: any;
    id: number;
};
type TrackingList = {
    status: string;
    text: string;
    is_current?: boolean;
    time?: string;
    is_passed?: boolean;
};
type ShipmentPayments = {
    source?: string;
    mode?: string;
    logo?: string;
};
type ShipmentInfoResponse = {
    priority_text?: string;
    company: any;
    is_not_fynd_source: boolean;
    is_pdsr?: string;
    can_break: string;
    bag_status_history?: BagStatusHistory[];
    order?: OrderDetailsData;
    escalation?: any;
    enable_dp_tracking?: boolean;
    can_return?: boolean;
    gst_details?: GSTDetailsData;
    user_agent?: string;
    mid?: string;
    invoice: any;
    vertical?: string;
    order_status: any;
    billing_details?: UserDetailsData;
    coupon?: any;
    order_type: string;
    dp_details?: DPDetailsData;
    enable_tracking?: boolean;
    status?: ShipmentStatusData;
    affiliate_shipment_id: string;
    refund_details?: any;
    tracking_url: string;
    bags?: OrderBags[];
    delivery_details?: UserDetailsData;
    is_fynd_store?: string;
    fulfilling_store?: FulfillingStore;
    total_bags?: number;
    shipment_quantity?: number;
    is_packaging_order: boolean;
    items: any[];
    secured_delivery_flag?: string;
    refund_text?: string;
    shipment_id: string;
    fyndstore_emp: any;
    prices?: Prices;
    go_green?: boolean;
    ordering_store: any;
    user_id: string;
    credit_note_id: string;
    delivery_status: any[];
    lock_status: string;
    can_cancel?: boolean;
    pay_button?: string;
    bank_data?: any;
    operational_status?: string;
    tracking_list?: TrackingList[];
    is_fynd_coupon: boolean;
    user_info?: any;
    shipment_images?: string[];
    custom_meta?: any[];
    total_items?: number;
    status_progress: number;
    picked_date?: string;
    replacement_details?: string;
    platform_logo: boolean;
    forward_shipment_status?: any[];
    forward_tracking_list?: any[];
    beneficiary_details?: boolean;
    packaging_type?: string;
    payment_mode?: string;
    order_created_time?: string;
    child_nodes?: string[];
    due_date?: string;
    shipment_status?: string;
    payments?: ShipmentPayments;
    current_shipment_status: any;
    is_invoiced: boolean;
    kirana_store_id?: string;
    forward_order_status?: any[];
    journey_type?: string;
    email_id: string;
    delivery_slot?: any;
};
type OrderingStore = {
    code: string;
    phone: string;
    contact_person: string;
    state: string;
    country: string;
    store_name: string;
    pincode: string;
    city: string;
    address: string;
    meta: any;
    id: string;
};
type PlatformShipment = {
    priority_text?: string;
    bag_status_history?: BagStatusHistory[];
    order?: OrderDetailsData;
    enable_dp_tracking?: boolean;
    gst_details?: GSTDetailsData;
    user_agent?: string;
    vertical?: string;
    billing_details?: UserDetailsData;
    coupon?: any;
    dp_details?: DPDetailsData;
    status?: ShipmentStatusData;
    bags?: OrderBags[];
    delivery_details?: UserDetailsData;
    fulfilling_store?: FulfillingStore;
    total_bags?: number;
    shipment_quantity?: number;
    shipment_id: string;
    prices?: Prices;
    ordering_store?: OrderingStore;
    operational_status?: string;
    tracking_list?: TrackingList[];
    shipment_images?: string[];
    custom_meta?: any[];
    total_items?: number;
    picked_date?: string;
    platform_logo?: string;
    packaging_type?: string;
    payment_mode?: string;
    shipment_status?: string;
    payments?: ShipmentPayments;
    journey_type?: string;
    delivery_slot?: any;
};
type OrderMeta = {
    mongo_cart_id?: number;
    order_platform?: string;
    currency_symbol?: string;
    payment_type?: string;
    customer_note?: string;
    ordering_store?: number;
    extra_meta?: any;
    staff?: any;
    employee_id?: number;
    order_tags?: any[];
    cart_id?: number;
    order_child_entities?: string[];
    files?: any[];
    comment?: string;
    order_type?: string;
};
type OrderDict = {
    fynd_order_id: string;
    prices?: Prices;
    tax_details?: any;
    order_date: string;
    payment_methods?: any;
    meta?: OrderMeta;
};
type ShipmentDetailsResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    order?: OrderDict;
};
type SubLane = {
    text?: string;
    index?: number;
    value?: string;
    actions?: any[];
    total_items?: number;
};
type SuperLane = {
    options?: SubLane[];
    value: string;
    total_items?: number;
    text: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformBreakupValues = {
    name?: string;
    value?: string;
    display?: string;
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformOrderItems = {
    order_created_time?: string;
    payment_mode?: string;
    breakup_values?: PlatformBreakupValues[];
    order_value?: number;
    user_info?: UserDataInfo;
    order_id?: string;
    shipments?: PlatformShipment[];
    meta?: any;
    total_order_value?: number;
    channel?: PlatformChannel;
};
type OrderListingResponse = {
    page?: Page;
    message?: string;
    total_count?: number;
    success?: boolean;
    items?: PlatformOrderItems[];
    lane?: string;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    options?: Options[];
    key: string;
    value: number;
    text: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    updated_time?: string;
    reason?: string;
    raw_status?: string;
    status?: string;
    account_name?: string;
    last_location_recieved_at?: string;
    shipment_type?: string;
    updated_at?: string;
    awb?: string;
    meta?: any;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    processed?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    filters?: FiltersInfo[];
    returned?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
};
type FiltersResponse = {
    advance_filter?: AdvanceFilterInfo;
    global_filter?: FiltersInfo[];
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    display_name?: string;
    report_requested_at?: string;
    status?: string;
    s3_key?: string;
    report_created_at?: string;
    request_details?: any;
    report_id?: string;
    report_name?: string;
    report_type?: string;
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
    identifier?: string;
    trace_id?: string;
    data?: any[];
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    store_code?: string;
    store_id?: string;
    data?: any;
    company_id?: string;
    store_name?: string;
    label?: any;
    batch_id: string;
    do_invoice_label_generated: boolean;
    invoice?: any;
    invoice_status?: string;
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
    namespace?: string;
    file_name?: string;
    file_path?: string;
    operation?: string;
    upload?: FileUploadResponse;
    cdn?: URL;
    method?: string;
    content_type?: string;
    tags?: string[];
};
type bulkListingData = {
    successful?: number;
    failed_shipments?: any[];
    file_name?: string;
    uploaded_on?: string;
    store_name?: string;
    excel_url?: string;
    successful_shipments?: any[];
    user_name?: string;
    id?: string;
    store_code?: string;
    status?: string;
    company_id?: number;
    processing?: number;
    total?: number;
    store_id?: number;
    user_id?: string;
    failed?: number;
    batch_id?: string;
    processing_shipments?: string[];
};
type BulkListingPage = {
    size?: number;
    total?: number;
    type?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
};
type BulkListingResponse = {
    success?: boolean;
    data?: bulkListingData[];
    page?: BulkListingPage;
    error?: string;
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    question_set?: QuestionSet[];
    qc_type?: string[];
    display_name?: string;
    id?: number;
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
    successful_shipment_ids?: string[];
    company_id?: string;
    batch_id?: string;
    processing_shipments_count?: number;
    failed_shipments_count?: number;
    total_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    status?: boolean;
    uploaded_on?: string;
    user_id?: string;
    data?: BulkActionDetailsDataField[];
    failed_records?: string[];
    message?: string;
    success?: string;
    uploaded_by?: string;
    error?: string[];
};
type ArticleDetails = {
    status?: any;
};
type PDFLinks = {
    label_type: string;
    label_a6?: string;
    b2b?: string;
    invoice_a4?: string;
    label?: string;
    po_invoice?: string;
    invoice_type: string;
    credit_note_url?: string;
    label_pos?: string;
    invoice_pos?: string;
    label_a4?: string;
    invoice?: string;
    invoice_a6?: string;
};
type AffiliateMeta = {
    coupon_code?: string;
    loyalty_discount?: number;
    employee_discount?: number;
    due_date?: string;
    channel_order_id?: string;
    box_type?: string;
    order_item_id?: string;
    is_priority?: boolean;
    quantity?: number;
    size_level_total_qty?: number;
    channel_shipment_id?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type EInvoice = {
    acknowledge_date?: string;
    signed_invoice?: string;
    error_code?: string;
    error_message?: string;
    signed_qr_code?: string;
    irn?: string;
    acknowledge_no?: number;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type BuyerDetails = {
    gstin: string;
    state: string;
    pincode: number;
    address: string;
    ajio_site_id?: string;
    name: string;
    city: string;
};
type ShipmentMeta = {
    timestamp?: ShipmentTimeStamp;
    packaging_name?: string;
    shipment_volumetric_weight?: number;
    box_type?: string;
    ewaybill_info?: any;
    store_invoice_updated_date?: string;
    formatted?: Formatted;
    awb_number?: string;
    assign_dp_from_sb?: boolean;
    forward_affiliate_shipment_id?: string;
    einvoice_info?: EinvoiceInfo;
    return_affiliate_shipment_id?: string;
    order_type?: string;
    bag_weight?: any;
    fulfilment_priority_text?: string;
    po_number?: string;
    same_store_available: boolean;
    marketplace_store_id?: string;
    lock_data?: LockData;
    return_awb_number?: string;
    return_details?: any;
    return_store_node?: number;
    external?: any;
    debug_info?: DebugInfo;
    dp_id?: string;
    weight: number;
    dp_name?: string;
    forward_affiliate_order_id?: string;
    dp_sort_key?: string;
    b2c_buyer_details?: any;
    due_date?: string;
    b2b_buyer_details?: BuyerDetails;
    dp_options?: any;
    auto_trigger_dp_assignment_acf: boolean;
    shipment_weight?: number;
    return_affiliate_order_id?: string;
};
type AffiliateDetails = {
    affiliate_shipment_id: string;
    company_affiliate_tag?: string;
    affiliate_bag_id: string;
    affiliate_store_id: string;
    pdf_links?: PDFLinks;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
    ad_id?: string;
    shipment_meta: ShipmentMeta;
    affiliate_id?: string;
};
type BagGSTDetails = {
    is_default_hsn_code?: boolean;
    hsn_code_id: string;
    gst_fee: number;
    igst_tax_percentage: number;
    value_of_good: number;
    gst_tag: string;
    gstin_code?: string;
    tax_collected_at_source: number;
    sgst_tax_percentage: number;
    cgst_gst_fee: string;
    sgst_gst_fee: string;
    igst_gst_fee: string;
    hsn_code: string;
    gst_tax_percentage: number;
    cgst_tax_percentage: number;
    brand_calculated_amount: number;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
};
type Attributes = {
    brand_name?: string;
    primary_color?: string;
    marketer_name?: string;
    gender?: string[];
    primary_color_hex?: string;
    marketer_address?: string;
    name?: string;
    essential?: string;
    primary_material?: string;
};
type Item = {
    l2_category_id?: number;
    l2_category?: string[];
    branch_url?: string;
    can_return?: boolean;
    code?: string;
    brand: string;
    last_updated_at?: string;
    department_id?: number;
    meta?: any;
    l1_category?: string[];
    size: string;
    image: string[];
    attributes: Attributes;
    slug_key: string;
    can_cancel?: boolean;
    color?: string;
    gender?: string;
    name: string;
    l3_category?: number;
    l3_category_name?: string;
    item_id: number;
    brand_id: number;
    l1_category_id?: number;
    webstore_product_url?: string;
};
type Brand = {
    company: string;
    brand_name: string;
    pickup_location?: string;
    created_on?: number;
    credit_note_allowed?: boolean;
    credit_note_expiry_days?: number;
    is_virtual_invoice?: boolean;
    start_date?: string;
    script_last_ran?: string;
    logo?: string;
    brand_id: number;
    modified_on?: number;
    invoice_prefix?: string;
};
type B2BPODetails = {
    docker_number?: string;
    partial_can_ret?: boolean;
    po_line_amount?: number;
    item_base_price?: number;
    po_tax_amount?: number;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type EInvoicePortalDetails = {
    user?: string;
    username?: string;
    password?: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    user?: string;
    username?: string;
    password?: string;
    enabled: boolean;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type Document = {
    legal_name: string;
    ds_type: string;
    value: string;
    url?: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    display_name: string;
    product_return_config?: any;
    timing?: any[];
    einvoice_portal_details?: EInvoicePortalDetails;
    gst_credentials: StoreGstCredentials;
    gst_number?: string;
    notification_emails?: string[];
    documents?: StoreDocuments;
    ewaybill_portal_details?: any;
    additional_contact_details?: any;
    stage: string;
};
type StoreAddress = {
    email?: string;
    phone: string;
    version?: string;
    state: string;
    address2?: string;
    address_category: string;
    area?: string;
    address_type: string;
    pincode: number;
    city: string;
    landmark?: string;
    address1: string;
    created_at: string;
    country_code: string;
    longitude: number;
    contact_person: string;
    country: string;
    updated_at: string;
    latitude: number;
};
type Store = {
    phone: number;
    store_active_from?: string;
    state: string;
    login_username: string;
    is_enabled_for_recon?: boolean;
    mall_name?: string;
    address2?: string;
    code?: string;
    is_active?: boolean;
    brand_store_tags?: string[];
    parent_store_id?: number;
    company_id: number;
    mall_area?: string;
    city: string;
    pincode: string;
    meta: StoreMeta;
    store_email: string;
    is_archived?: boolean;
    s_id: string;
    order_integration_id?: string;
    location_type: string;
    address1: string;
    created_at: string;
    name: string;
    longitude: number;
    packaging_material_count?: number;
    fulfillment_channel: string;
    contact_person: string;
    country: string;
    updated_at?: string;
    vat_no?: string;
    brand_id?: any;
    store_address_json?: StoreAddress;
    alohomora_user_id?: number;
    latitude: number;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Dimensions = {
    length?: number;
    height?: number;
    width?: number;
    unit?: string;
    is_default?: boolean;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type Article = {
    code?: string;
    size: string;
    return_config?: ReturnConfig;
    _id: string;
    dimensions?: Dimensions;
    seller_identifier: string;
    esp_modified?: any;
    a_set?: any;
    is_set?: boolean;
    child_details?: any;
    weight?: Weight;
    uid: string;
    identifiers: Identifier;
    raw_meta?: any;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_bag_id: string;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
};
type BagDetailsPlatformResponse = {
    identifier?: string;
    display_name?: string;
    bag_status_history?: BagStatusHistory;
    article_details?: ArticleDetails;
    affiliate_details?: AffiliateDetails;
    gst_details: BagGSTDetails;
    b_id: number;
    dates?: Dates;
    tags?: string[];
    status: BagReturnableCancelableStatus;
    seller_identifier?: string;
    item: Item;
    b_type?: string;
    brand: Brand;
    bag_status: BagStatusHistory[];
    restore_coupon?: boolean;
    meta?: BagMeta;
    line_number?: number;
    reasons?: any[];
    shipment_id?: string;
    bag_update_time?: number;
    prices: Prices;
    parent_promo_bags?: any;
    order_integration_id?: string;
    ordering_store?: Store;
    applied_promos?: any[];
    operational_status?: string;
    financial_breakup: FinancialBreakup[];
    article: Article;
    quantity?: number;
    affiliate_bag_details: AffiliateBagDetails;
    no_of_bags_order?: number;
    original_bag_list?: number[];
    current_operational_status: BagStatusHistory;
    restore_promos?: any;
    journey_type: string;
    qc_required?: any;
    entity_type?: string;
    current_status: BagStatusHistory;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    size: number;
    item_total: number;
    has_next: boolean;
    page_type: string;
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
    fynd_order_id?: string;
    mongo_article_id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    set_id?: string;
    reason_ids?: number[];
    item_id?: string;
    store_id: number;
    bag_id?: number;
    affiliate_order_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    reason_text: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    id?: string;
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    entity_type: string;
    action: string;
    action_type: string;
};
type Bags = {
    is_locked?: boolean;
    affiliate_bag_id?: string;
    bag_id?: number;
    affiliate_order_id?: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    shipment_id?: string;
    is_shipment_locked?: boolean;
    status?: string;
    lock_status?: boolean;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    is_bag_locked?: boolean;
    bags?: Bags[];
    original_filter?: OriginalFilter;
};
type UpdateShipmentLockResponse = {
    message?: string;
    success?: boolean;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    created_at?: string;
    from_datetime?: string;
    title?: string;
    description?: string;
    logo_url?: string;
    id: number;
    company_id?: number;
    platform_name?: string;
    to_datetime?: string;
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
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
};
type ProductsDataUpdates = {
    filters?: ProductsDataUpdatesFilters[];
    data?: any;
};
type EntitiesDataUpdates = {
    filters?: any[];
    data?: any;
};
type DataUpdates = {
    products?: ProductsDataUpdates[];
    entities?: EntitiesDataUpdates[];
};
type Products = {
    identifier?: string;
    quantity?: number;
    line_number?: number;
};
type ProductsReasonsFilters = {
    identifier?: string;
    quantity?: number;
    line_number?: number;
};
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasons = {
    filters?: ProductsReasonsFilters[];
    data?: ProductsReasonsData;
};
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
type EntitiesReasons = {
    filters?: any[];
    data?: EntityReasonData;
};
type ReasonsData = {
    products?: ProductsReasons[];
    entities?: EntitiesReasons[];
};
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    products?: Products[];
    identifier: string;
    reasons?: ReasonsData;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    lock_after_transition?: boolean;
    force_transition?: boolean;
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    status?: number;
    meta?: any;
    code?: string;
    stack_trace?: string;
    exception?: string;
    final_state?: any;
    identifier?: string;
    message?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    address1?: string;
    city: string;
    country: string;
    pincode: string;
    first_name: string;
    phone: number;
    mobile: number;
    state: string;
    address2?: string;
    last_name: string;
    email: string;
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
    affiliate_meta: any;
    transfer_price: number;
    pdf_links?: MarketPlacePdf;
    item_id: number;
    delivery_charge: number;
    modified_on: string;
    unit_price: number;
    quantity: number;
    fynd_store_id: string;
    seller_identifier: string;
    price_marked: number;
    price_effective: number;
    avl_qty: number;
    company_id: number;
    affiliate_store_id: string;
    _id: string;
    identifier: any;
    sku: string;
    hsn_code_id: string;
    discount: number;
    amount_paid: number;
    item_size: string;
    store_id: number;
};
type OrderPriority = {
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
};
type ArticleDetails1 = {
    quantity: number;
    weight: any;
    attributes: any;
    brand_id: number;
    dimension: any;
    category: any;
    _id: string;
};
type ShipmentDetails = {
    dp_id?: number;
    shipments: number;
    box_type?: string;
    meta?: any;
    affiliate_shipment_id: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    location_details?: LocationDetails;
    to_pincode: string;
    payment_mode: string;
    action: string;
    journey: string;
    identifier: string;
    source: string;
    shipment: ShipmentDetails[];
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    items: any;
    user: UserData;
    payment?: any;
    billing_address: OrderUser;
    order_value: number;
    delivery_charges: number;
    discount: number;
    cod_charges: number;
    bags: AffiliateBag[];
    coupon?: string;
    payment_mode: string;
    order_priority?: OrderPriority;
    shipping_address: OrderUser;
    affiliate_order_id?: string;
    shipment?: ShipmentData;
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
    created_at: string;
    description?: string;
    meta?: AffiliateAppConfigMeta[];
    id: string;
    secret: string;
    updated_at: string;
    name: string;
    owner: string;
    token: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
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
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    inventory?: AffiliateInventoryStoreConfig;
    payment?: AffiliateInventoryPaymentConfig;
    order?: AffiliateInventoryOrderConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
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
    article_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    store_lookup?: string;
    bag_end_state?: string;
    create_user?: boolean;
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
    message?: string;
    success?: boolean;
};
type ActionInfo = {
    description: string;
    slug: string;
    display_text: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type PostHistoryFilters = {
    shipment_id: string;
    identifier?: string;
    line_number?: string;
};
type PostHistoryData = {
    user_name: string;
    message: string;
};
type PostActivityHistory = {
    filters: PostHistoryFilters[];
    data: PostHistoryData;
};
type PostHistoryDict = {
    activity_history: PostActivityHistory;
};
type PostShipmentHistory = {
    activity_history?: PostHistoryDict[];
};
type HistoryDict = {
    user: string;
    bag_id?: number;
    type: string;
    l1_detail?: string;
    ticket_id?: string;
    l3_detail?: string;
    ticket_url?: string;
    createdat: string;
    l2_detail?: string;
    message: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    shipment_id: number;
    phone_number: number;
    country_code: string;
    amount_paid: number;
    payment_mode: string;
    brand_name: string;
    customer_name: string;
    message: string;
    order_id: string;
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
    status?: string;
    meta: Meta;
    id: number;
    bag_list?: number[];
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type OrderStatusData = {
    shipment_details?: ShipmentDetail[];
    errors?: string[];
    order_details: OrderDetails;
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    dp_id: number;
    qc_required: string;
    order_type: string;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    dispatch_after_date?: string;
    customer_pickup_slot?: any;
    dp_pickup_slot?: any;
    dispatch_by_date?: string;
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
    code?: string;
    amount: any;
    name: string;
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
    priority?: number;
    processing_dates?: ProcessingDates;
    location_id: number;
    line_items: LineItem[];
    meta?: any;
    external_shipment_id?: string;
};
type ShippingInfo = {
    address1: string;
    title?: string;
    external_customer_code?: string;
    city: string;
    shipping_type?: string;
    first_name: string;
    state: string;
    geo_location?: any;
    state_code?: string;
    primary_email: string;
    middle_name?: string;
    address_type?: string;
    house_no?: string;
    floor_no?: string;
    alternate_mobile_number?: string;
    address2?: string;
    primary_mobile_number: string;
    landmark?: string;
    customer_code?: string;
    country: string;
    pincode: string;
    country_code?: string;
    gender?: string;
    alternate_email?: string;
    last_name?: string;
    slot?: any[];
};
type PaymentMethod = {
    collect_by: string;
    meta?: any;
    transaction_data?: any;
    refund_by: string;
    amount: number;
    name: string;
    mode: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type BillingInfo = {
    address1: string;
    title?: string;
    external_customer_code?: string;
    city: string;
    first_name: string;
    state: string;
    state_code?: string;
    primary_email: string;
    middle_name?: string;
    house_no?: string;
    floor_no?: string;
    alternate_mobile_number?: string;
    address2?: string;
    primary_mobile_number: string;
    customer_code?: string;
    country: string;
    pincode: string;
    country_code?: string;
    gender?: string;
    alternate_email?: string;
    last_name?: string;
};
type CreateOrderAPI = {
    shipments: Shipment[];
    external_creation_date?: string;
    shipping_info: ShippingInfo;
    external_order_id?: string;
    payment_info: PaymentInfo;
    tax_info?: TaxInfo;
    meta?: any;
    charges?: Charge[];
    currency_info?: any;
    billing_info: BillingInfo;
};
type CreateOrderErrorReponse = {
    info?: any;
    status: number;
    request_id?: string;
    meta?: string;
    code?: string;
    stack_trace?: string;
    exception?: string;
    message: string;
};
type PaymentMethods = {
    mode?: string;
    refund_by?: string;
    collect_by?: string;
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
    payment_info?: CreateChannelPaymentInfo;
    shipment_assignment?: string;
    logo_url?: any;
    dp_configuration?: DpConfiguration;
    lock_states?: string[];
    location_reassignment?: boolean;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    is_upserted?: boolean;
    is_inserted?: boolean;
    acknowledged?: boolean;
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
    message?: string[];
    success?: boolean;
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    end_date: string;
    start_date: string;
    mobile: number;
    order_details?: FyndOrderIdList[];
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsData = {
    result?: any;
    words?: string[];
    app_id?: string;
    is_active?: boolean;
    _custom_json?: any;
    uid?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    words?: string[];
    app_id?: string;
    is_active?: boolean;
    _custom_json?: any;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    words?: string[];
    app_id?: string;
    results?: any[];
    _custom_json?: any;
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type Media = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type AutocompletePageAction = {
    url?: string;
    type?: string;
    query?: any;
    params?: any;
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
    words?: string[];
    app_id?: string;
    is_active?: boolean;
    results?: AutocompleteResult[];
    _custom_json?: any;
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    results?: any[];
    _custom_json?: any;
    words?: string[];
};
type ProductBundleItem = {
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    allow_remove?: boolean;
    product_uid: number;
    min_quantity: number;
    max_quantity: number;
};
type ProductBundleRequest = {
    meta?: any;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    modified_on?: string;
    slug: string;
    modified_by?: any;
    choice: string;
    is_active: boolean;
    company_id?: number;
    created_by?: any;
    name: string;
    page_visibility?: string[];
    logo?: string;
    created_on?: string;
};
type GetProductBundleCreateResponse = {
    meta?: any;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    modified_on?: string;
    slug: string;
    modified_by?: any;
    choice: string;
    is_active: boolean;
    company_id?: number;
    created_by?: any;
    name: string;
    page_visibility?: string[];
    logo?: string;
    created_on?: string;
    id?: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type Price = {
    max_effective?: number;
    currency?: string;
    min_effective?: number;
    max_marked?: number;
    min_marked?: number;
};
type LimitedProductData = {
    short_description?: string;
    quantity?: number;
    slug?: string;
    item_code?: string;
    price?: any;
    country_of_origin?: string;
    identifier?: any;
    images?: string[];
    name?: string;
    attributes?: any;
    uid?: number;
    sizes?: string[];
};
type Size = {
    display?: string;
    is_available?: boolean;
    value?: string;
    quantity?: number;
};
type GetProducts = {
    price?: Price;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    allow_remove?: boolean;
    product_details?: LimitedProductData;
    product_uid?: number;
    min_quantity?: number;
    max_quantity?: number;
    sizes?: Size[];
};
type GetProductBundleResponse = {
    meta?: any;
    same_store_assignment?: boolean;
    products?: GetProducts[];
    slug?: string;
    choice?: string;
    is_active?: boolean;
    company_id?: number;
    name?: string;
    page_visibility?: string[];
    logo?: string;
};
type ProductBundleUpdateRequest = {
    meta?: any;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    modified_on?: string;
    slug: string;
    modified_by?: any;
    choice: string;
    is_active: boolean;
    company_id?: number;
    name: string;
    page_visibility?: string[];
    logo?: string;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    brand_id?: number;
    title: string;
    description?: string;
    modified_by?: any;
    modified_on?: string;
    image?: string;
    active?: boolean;
    company_id?: number;
    tag?: string;
    created_by?: any;
    name: string;
    created_on?: string;
    subtitle?: string;
    guide?: Guide;
    id?: string;
};
type GetMultiSizeGuide = {
    brand_id?: number;
    title?: string;
    description?: string;
    modified_by?: any;
    modified_on?: string;
    image?: string;
    active?: boolean;
    company_id?: number;
    tag?: string;
    created_by?: any;
    name?: string;
    created_on?: string;
    subtitle?: string;
    guide?: any;
    _id?: string;
};
type ListSizeGuide = {
    page?: any;
    items?: GetMultiSizeGuide[];
};
type SizeGuideResponse = {
    modified_on?: string;
    brand_id?: number;
    title?: string;
    modified_by?: any;
    active?: boolean;
    created_by?: any;
    company_id?: number;
    guide?: any;
    name?: string;
    tag?: string;
    subtitle?: string;
    created_on?: string;
    id?: string;
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
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    alt_text?: any;
    is_cod?: boolean;
    is_gift?: boolean;
    _custom_meta?: MetaFields[];
    _custom_json?: any;
    moq?: ApplicationItemMOQ;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    alt_text?: any;
    is_cod?: boolean;
    is_gift?: boolean;
    moq?: MOQData;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    values?: any[];
    data: any[];
};
type AttributeDetailsGroup = {
    priority: number;
    slug?: string;
    unit?: string;
    is_active: boolean;
    key?: string;
    display_type: string;
    name: string;
    logo?: string;
};
type AppConfigurationDetail = {
    priority: number;
    slug: string;
    template_slugs?: string[];
    app_id: string;
    is_active: boolean;
    name?: string;
    is_default: boolean;
    attributes?: AttributeDetailsGroup[];
    logo?: string;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    total_count: number;
    next: number;
    current: number;
    has_next: boolean;
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
    app_id: string;
    key: string;
    is_active: boolean;
    is_default: boolean;
    name?: string;
    logo?: string;
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
    filter_types?: string[];
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
    detail?: any;
    variant?: any;
    similar?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationListingSortConfig = {
    priority: number;
    is_active: boolean;
    key: string;
    name?: string;
    logo?: string;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    start?: number;
    display?: string;
    end?: number;
};
type ConfigurationListingFilterValue = {
    map_values?: any[];
    value?: string;
    condition?: string;
    map?: any;
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    type: string;
    priority: number;
    is_active: boolean;
    key: string;
    value_config?: ConfigurationListingFilterValue;
    name?: string;
    logo?: string;
    display_name?: string;
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
    min: number;
    max: number;
};
type ConfigurationProductVariantConfig = {
    priority: number;
    size: ProductSize;
    is_active: boolean;
    key: string;
    display_type: string;
    name: string;
    logo?: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    priority: number;
    title?: string;
    size?: ProductSize;
    is_active: boolean;
    key: string;
    logo?: string;
    subtitle?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppConfiguration = {
    modified_on?: string;
    listing?: ConfigurationListing;
    config_type: string;
    modified_by?: any;
    config_id?: string;
    product?: ConfigurationProduct;
    app_id: string;
    created_by?: any;
    type?: string;
    created_on?: string;
};
type AppCatalogConfiguration = {
    modified_on?: string;
    listing?: ConfigurationListing;
    config_type: string;
    modified_by?: any;
    config_id?: string;
    product?: ConfigurationProduct;
    app_id: string;
    created_by?: any;
    type?: string;
    created_on?: string;
    id?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    app_id: string;
    id?: string;
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
    display: string;
    operators?: string[];
    name: string;
    logo?: string;
    kind?: string;
};
type ProductFiltersValue = {
    is_selected: boolean;
    value: any;
    display_format?: string;
    min?: number;
    max?: number;
    currency_code?: string;
    query_format?: string;
    selected_min?: number;
    display: string;
    count?: number;
    currency_symbol?: string;
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
type UserInfo = {
    user_id?: string;
    email?: string;
    uid?: string;
    username?: string;
};
type CollectionSchedule = {
    end?: string;
    start?: string;
    duration?: number;
    cron?: string;
    next_schedule?: NextSchedule[];
};
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CreateCollection = {
    sort_on?: string;
    modified_by?: UserInfo;
    name: string;
    allow_sort?: boolean;
    allow_facets?: boolean;
    _schedule?: CollectionSchedule;
    slug: string;
    query?: CollectionQuery[];
    is_active?: boolean;
    tags?: string[];
    _custom_json?: any;
    visible_facets_keys?: string[];
    published?: boolean;
    seo?: SeoDetail;
    badge?: CollectionBadge;
    created_by?: UserInfo;
    _locale_language?: any;
    logo: CollectionImage;
    type: string;
    meta?: any;
    priority?: number;
    banners: CollectionBanner;
    description?: string;
    is_visible?: boolean;
    app_id: string;
};
type BannerImage = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionCreateResponse = {
    sort_on?: string;
    name?: string;
    allow_sort?: boolean;
    allow_facets?: boolean;
    _schedule?: any;
    slug?: string;
    query?: CollectionQuery[];
    is_active?: boolean;
    visible_facets_keys?: string[];
    badge?: any;
    type?: string;
    logo?: BannerImage;
    meta?: any;
    priority?: number;
    banners?: ImageUrls;
    description?: string;
    app_id?: string;
    tag?: string[];
    cron?: any;
};
type CollectionListingFilterType = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilterTag = {
    display?: string;
    is_selected?: boolean;
    name?: string;
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
type GetCollectionDetailNest = {
    name?: string;
    allow_sort?: boolean;
    action?: Action;
    allow_facets?: boolean;
    _schedule?: any;
    slug?: string;
    query?: CollectionQuery[];
    is_active?: boolean;
    uid?: string;
    visible_facets_keys?: string[];
    badge?: any;
    type?: string;
    logo?: Media1;
    priority?: number;
    meta?: any;
    banners?: ImageUrls;
    description?: string;
    app_id?: string;
    tag?: string[];
    cron?: any;
};
type GetCollectionListingResponse = {
    page?: Page;
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
};
type CollectionDetailResponse = {
    name?: string;
    allow_sort?: boolean;
    allow_facets?: boolean;
    _schedule?: any;
    slug?: string;
    query?: CollectionQuery[];
    is_active?: boolean;
    uid?: string;
    visible_facets_keys?: string[];
    badge?: any;
    type?: string;
    logo?: Media1;
    priority?: number;
    meta?: any;
    banners?: ImageUrls;
    description?: string;
    app_id?: string;
    tag?: string[];
    cron?: any;
};
type UpdateCollection = {
    sort_on?: string;
    modified_by?: UserInfo;
    name?: string;
    allow_sort?: boolean;
    _schedule?: CollectionSchedule;
    allow_facets?: boolean;
    slug?: string;
    query?: CollectionQuery[];
    is_active?: boolean;
    tags?: string[];
    _custom_json?: any;
    visible_facets_keys?: string[];
    published?: boolean;
    seo?: SeoDetail;
    badge?: CollectionBadge;
    _locale_language?: any;
    logo?: CollectionImage;
    type?: string;
    meta?: any;
    priority?: number;
    banners?: CollectionBanner;
    description?: string;
    is_visible?: boolean;
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
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
type ProductBrand = {
    logo?: Media1;
    action?: Action;
    uid?: number;
    name?: string;
};
type Price1 = {
    currency_code?: string;
    currency_symbol?: string;
    min?: number;
    max?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
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
    item_type?: string;
    short_description?: string;
    teaser_tag?: any;
    has_variant?: boolean;
    item_code?: string;
    similars?: string[];
    name?: string;
    attributes?: any;
    brand?: ProductBrand;
    product_online_date?: string;
    slug: string;
    highlights?: string[];
    rating_count?: number;
    discount?: string;
    uid?: number;
    medias?: Media1[];
    sellable?: boolean;
    price?: ProductListingPrice;
    type?: string;
    rating?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    color?: string;
    tryouts?: string[];
    image_nature?: string;
    description?: string;
    promo_meta?: any;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    page?: Page;
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
};
type CatalogInsightItem = {
    count?: number;
    out_of_stock_count?: number;
    sellable_count?: number;
};
type CatalogInsightBrand = {
    article_freshness?: number;
    available_articles?: number;
    available_sizes?: number;
    name?: string;
    total_sizes?: number;
    total_articles?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    platform?: string;
    enabled?: boolean;
    brand_ids?: number[];
    store_ids?: number[];
    company_id?: number;
    opt_level: string;
};
type CompanyOptIn = {
    platform: string;
    enabled: boolean;
    modified_on: number;
    modified_by?: any;
    brand_ids: number[];
    store_ids: number[];
    company_id: number;
    created_by?: any;
    opt_level: string;
    created_on: number;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    business_type?: string;
    company_type?: string;
    uid?: number;
    name?: string;
};
type CompanyBrandDetail = {
    company_id?: number;
    brand_name?: string;
    total_article?: number;
    brand_id?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    brand?: number;
    company?: string;
    store?: number;
};
type StoreDetail = {
    store_code?: string;
    documents?: any[];
    modified_on?: string;
    manager?: any;
    store_type?: string;
    address?: any;
    timing?: any;
    company_id?: number;
    name?: string;
    uid?: number;
    additional_contacts?: any[];
    display_name?: string;
    created_on?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
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
    mandatory?: boolean;
    format?: string;
    multi?: boolean;
    range?: AttributeSchemaRange;
    allowed_values?: string[];
    type: string;
};
type AttributeMasterFilter = {
    priority?: number;
    depends_on?: string[];
    indexing: boolean;
};
type AttributeMasterDetails = {
    display_type: string;
};
type GenderDetail = {
    meta?: AttributeMasterMeta;
    description?: string;
    slug?: string;
    schema?: AttributeMaster;
    filters?: AttributeMasterFilter;
    departments?: string[];
    is_nested?: boolean;
    details?: AttributeMasterDetails;
    name?: string;
    logo?: string;
    enabled_for_end_consumer?: boolean;
    id?: string;
};
type CategoriesResponse = {
    slug?: string;
    uid?: number;
    name?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: CategoriesResponse[];
};
type PTErrorResponse = {
    meta?: any;
    code?: string;
    message?: string;
    errors?: any;
    status?: number;
};
type DepartmentCreateUpdate = {
    _cls?: string;
    priority_order: number;
    slug?: string;
    synonyms?: string[];
    is_active?: boolean;
    tags?: string[];
    name: string;
    logo: string;
    _custom_json?: any;
    uid?: number;
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
    user_id?: string;
    username?: string;
    contact?: string;
    uid?: string;
    _id?: string;
};
type GetDepartment = {
    item_type?: string;
    priority_order?: number;
    modified_on?: string;
    slug?: string;
    synonyms?: string[];
    modified_by?: UserSerializer;
    page_size?: number;
    is_active?: boolean;
    created_by?: UserSerializer;
    name?: string;
    search?: string;
    created_on?: string;
    logo?: string;
    page_no?: number;
    uid?: number;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    meta?: any;
    code?: string;
    message?: string;
    errors?: any;
    status?: number;
};
type UserDetail = {
    super_user?: boolean;
    user_id: string;
    contact?: string;
    username: string;
};
type DepartmentModel = {
    _cls?: any;
    priority_order: number;
    modified_on: string;
    verified_on?: string;
    modified_by?: UserDetail;
    slug?: any;
    verified_by?: UserDetail;
    synonyms?: any[];
    is_active?: boolean;
    created_by?: UserDetail;
    name: any;
    uid?: number;
    logo: any;
    _custom_json?: any;
    created_on: string;
    _id?: any;
};
type ProductTemplate = {
    modified_on?: string;
    description?: string;
    slug: string;
    modified_by?: any;
    attributes_schema?: any[];
    departments?: string[];
    is_expirable?: boolean;
    categories?: string[];
    is_active?: boolean;
    created_by?: any;
    tag?: string;
    name?: string;
    attributes?: string[];
    logo?: string;
    is_archived?: boolean;
    created_on?: string;
    is_physical: boolean;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    short_description?: any;
    item_type?: any;
    teaser_tag?: any;
    item_code?: any;
    return_config?: any;
    name?: any;
    trader?: any;
    brand_uid?: any;
    category_slug?: any;
    slug?: any;
    highlights?: any;
    no_of_boxes?: any;
    is_active?: any;
    tags?: any;
    command?: any;
    sizes?: any;
    trader_type?: any;
    product_publish?: any;
    country_of_origin?: any;
    size_guide?: any;
    hsn_code?: any;
    variants?: any;
    product_group_tag?: any;
    description?: any;
    currency?: any;
    multi_size?: any;
    custom_order?: any;
    is_dependent?: any;
    media?: any;
};
type GlobalValidation = {
    title?: string;
    description?: string;
    required?: string[];
    properties?: Properties;
    type?: string;
    definitions?: any;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    id?: string;
    description?: string;
    slug: string;
    attributes_schema?: any[];
    departments?: string[];
    is_expirable?: boolean;
    categories?: string[];
    is_active?: boolean;
    tag?: string;
    name?: string;
    attributes?: string[];
    logo?: string;
    is_archived?: boolean;
    is_physical: boolean;
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
    hsn_code?: string[];
    country_of_origin?: string[];
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
    brand?: string[];
    type?: string;
    templates?: string[];
};
type ProductDownloadsItems = {
    template_tags?: any;
    id?: string;
    url?: string;
    completed_on?: string;
    seller_id?: number;
    task_id?: string;
    created_by?: VerifiedBy;
    trigger_on?: string;
    data?: ProductDownloadItemsData;
    status?: string;
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
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Hierarchy = {
    department: number;
    l2: number;
    l1: number;
};
type Media2 = {
    logo: string;
    landscape: string;
    portrait: string;
};
type CategoryRequestBody = {
    priority?: number;
    tryouts?: string[];
    slug?: string;
    synonyms?: string[];
    departments: number[];
    is_active: boolean;
    level: number;
    marketplaces?: CategoryMapping;
    name: string;
    hierarchy?: Hierarchy[];
    media?: Media2;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    priority?: number;
    id?: string;
    modified_on?: string;
    tryouts?: string[];
    slug?: string;
    synonyms?: string[];
    modified_by?: any;
    departments: number[];
    is_active: boolean;
    level: number;
    created_by?: any;
    marketplaces?: CategoryMapping;
    name: string;
    hierarchy?: Hierarchy[];
    created_on?: string;
    uid?: number;
    media?: Media2;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type Trader = {
    type?: string;
    name: any;
    address?: string[];
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
    manufacturing_time?: number;
};
type ProductCreateUpdateSchemaV2 = {
    short_description?: string;
    item_type: string;
    teaser_tag?: TeaserTag;
    item_code: string;
    variant_group?: any;
    return_config: ReturnConfig;
    name: string;
    trader: Trader[];
    attributes?: any;
    action?: string;
    requester?: string;
    brand_uid: number;
    category_slug: string;
    bulk_job_id?: string;
    slug: string;
    highlights?: string[];
    no_of_boxes?: number;
    is_active?: boolean;
    tags?: string[];
    company_id: number;
    template_tag: string;
    _custom_json?: any;
    uid?: number;
    sizes: any[];
    product_publish?: ProductPublish;
    country_of_origin: string;
    size_guide?: string;
    is_set?: boolean;
    variants?: any;
    is_image_less_product?: boolean;
    product_group_tag?: string[];
    variant_media?: any;
    net_quantity?: NetQuantity;
    tax_identifier: TaxIdentifier;
    description?: string;
    currency: string;
    multi_size?: boolean;
    custom_order?: CustomOrder;
    change_request_id?: any;
    departments: number[];
    is_dependent?: boolean;
    media?: Media1[];
};
type ReturnConfigResponse = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Logo = {
    url?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
    aspect_ratio?: string;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Image = {
    url?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
    aspect_ratio?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Product = {
    short_description?: string;
    item_type?: string;
    teaser_tag?: any;
    category?: any;
    all_company_ids?: number[];
    item_code?: string;
    modified_by?: any;
    variant_group?: any;
    return_config?: ReturnConfigResponse;
    all_identifiers?: string[];
    name?: string;
    trader?: Trader[];
    brand?: Brand;
    attributes?: any;
    brand_uid?: number;
    created_on?: string;
    category_slug?: string;
    verified_by?: VerifiedBy;
    modified_on?: string;
    slug?: string;
    stage?: string;
    highlights?: string[];
    no_of_boxes?: number;
    is_active?: boolean;
    tags?: string[];
    company_id?: number;
    template_tag?: string;
    primary_color?: string;
    _custom_json?: any;
    uid?: number;
    sizes?: any[];
    id?: string;
    pending?: string;
    moq?: any;
    all_sizes?: any[];
    product_publish?: ProductPublished;
    country_of_origin?: string;
    size_guide?: string;
    is_set?: boolean;
    is_expirable?: boolean;
    images?: Image[];
    created_by?: any;
    variants?: any;
    hsn_code?: string;
    is_image_less_product?: boolean;
    is_physical?: boolean;
    l3_mapping?: string[];
    category_uid?: number;
    product_group_tag?: string[];
    color?: string;
    variant_media?: any;
    net_quantity?: NetQuantityResponse;
    tax_identifier?: any;
    description?: string;
    currency?: string;
    image_nature?: string;
    verified_on?: string;
    departments?: number[];
    custom_order?: any;
    multi_size?: boolean;
    is_dependent?: boolean;
    media?: Media1[];
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type ProductVariants = {
    category_uid?: number;
    item_code?: string;
    name?: string;
    brand_uid?: number;
    uid?: number;
    media?: Media1[];
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    modified_by?: any;
    unit?: string;
    variant?: boolean;
    name?: string;
    created_on?: string;
    suggestion?: string;
    modified_on?: string;
    slug: string;
    synonyms?: any;
    schema: AttributeMaster;
    filters: AttributeMasterFilter;
    tags?: string[];
    details: AttributeMasterDetails;
    created_by?: any;
    logo?: string;
    description?: string;
    departments: string[];
    is_nested?: boolean;
    enabled_for_end_consumer?: boolean;
    raw_key?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ProductCreateUpdate = {
    short_description?: string;
    item_type: string;
    teaser_tag?: TeaserTag;
    item_code: any;
    variant_group?: any;
    return_config: ReturnConfig;
    name: any;
    trader: Trader[];
    action?: string;
    requester?: string;
    brand_uid: number;
    category_slug: string;
    bulk_job_id?: string;
    slug: string;
    highlights?: string[];
    no_of_boxes?: number;
    is_active?: boolean;
    tags?: string[];
    company_id: number;
    template_tag: string;
    _custom_json?: any;
    uid?: number;
    product_publish?: ProductPublish;
    country_of_origin: string;
    size_guide?: string;
    is_set?: boolean;
    variants?: any;
    is_image_less_product?: boolean;
    product_group_tag?: string[];
    variant_media?: any;
    net_quantity?: NetQuantity;
    tax_identifier: TaxIdentifier;
    description?: string;
    currency: string;
    multi_size?: boolean;
    custom_order?: CustomOrder;
    change_request_id?: any;
    departments: number[];
    is_dependent?: boolean;
    media?: Media1[];
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
    item_length: number;
    item_weight_unit_of_measure: any;
    size: any;
    item_height: number;
    item_weight: number;
    item_width: number;
    item_dimensions_unit_of_measure: string;
    identifiers?: ValidateIdentifier[];
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    user_id?: string;
    email?: string;
    uid?: string;
    username?: string;
};
type BulkJob = {
    cancelled?: number;
    file_path?: string;
    tracking_url?: string;
    modified_on?: string;
    succeed?: number;
    failed?: number;
    modified_by?: UserInfo1;
    stage?: string;
    failed_records?: any[];
    total?: number;
    is_active?: boolean;
    created_by?: UserInfo1;
    company_id: number;
    template_tag?: string;
    cancelled_records?: any[];
    created_on: string;
    custom_template_tag?: string;
};
type BulkResponse = {
    modified_on?: string;
    modified_by?: UserInfo1;
    batch_id: string;
    is_active?: boolean;
    created_by?: UserInfo1;
    created_on: string;
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    cancelled?: number;
    file_path?: string;
    modified_on?: string;
    failed?: number;
    succeed?: number;
    stage?: string;
    modified_by?: UserDetail1;
    failed_records?: string[];
    total?: number;
    is_active?: boolean;
    company_id?: number;
    created_by?: UserDetail1;
    template_tag?: string;
    cancelled_records?: string[];
    template?: ProductTemplate;
    created_on?: string;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkProductRequest = {
    data: any[];
    batch_id: string;
    company_id: number;
    template_tag: string;
};
type ProductTagsViewResponse = {
    items?: string[];
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
    cancelled?: number;
    file_path?: string;
    tracking_url?: string;
    modified_on?: string;
    succeed?: number;
    failed?: number;
    modified_by?: UserCommon;
    stage?: string;
    failed_records?: string[];
    total?: number;
    is_active?: boolean;
    created_by?: UserCommon;
    company_id?: number;
    cancelled_records?: string[];
    retry?: number;
    created_on?: string;
    id?: string;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    company_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type ItemQuery = {
    item_code?: string;
    brand_uid?: number;
    uid?: number;
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
type GTIN = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: any;
};
type InvSize = {
    set?: InventorySet;
    item_length?: number;
    store_code: string;
    price_transfer?: number;
    size: any;
    item_weight_unit_of_measure?: string;
    quantity: number;
    currency: string;
    item_height?: number;
    price?: number;
    item_weight?: number;
    is_set?: boolean;
    expiration_date?: string;
    item_width?: number;
    item_dimensions_unit_of_measure?: string;
    identifiers: GTIN[];
    price_effective: number;
};
type InventoryRequest = {
    item: ItemQuery;
    company_id: number;
    sizes: InvSize[];
};
type InventoryResponse = {
    store?: any;
    price_transfer?: number;
    quantity?: number;
    currency?: string;
    size?: string;
    price?: number;
    inventory_updated_on?: string;
    seller_identifier?: string;
    item_id?: number;
    sellable_quantity?: number;
    identifiers?: any;
    price_effective?: number;
    uid?: string;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type CompanyMeta = {
    id: number;
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Trader1 = {
    type: string;
    name: string;
    address: string[];
};
type BrandMeta = {
    name: string;
    id: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    sellable?: QuantityBase;
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    order_committed?: QuantityBase;
};
type ManufacturerResponse = {
    name: string;
    is_default: boolean;
    address: string;
};
type PriceMeta = {
    currency: string;
    transfer: number;
    effective: number;
    updated_at?: string;
    tp_notes?: any;
    marked: number;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type DimensionResponse = {
    height: number;
    unit: string;
    width: number;
    is_default: boolean;
    length: number;
};
type InventorySellerResponse = {
    set?: InventorySet;
    company: CompanyMeta;
    modified_by?: UserSerializer;
    seller_identifier: string;
    expiration_date?: string;
    item_id: number;
    fynd_article_code: string;
    return_config?: ReturnConfig1;
    trader?: Trader1[];
    brand: BrandMeta;
    fragile: boolean;
    trace_id?: string;
    raw_meta?: any;
    stage?: string;
    identifier: any;
    is_active?: boolean;
    tags?: string[];
    quantities?: Quantities;
    added_on_store?: string;
    _custom_json?: any;
    uid: string;
    store: StoreMeta;
    track_inventory?: boolean;
    manufacturer: ManufacturerResponse;
    price: PriceMeta;
    country_of_origin: string;
    is_set?: boolean;
    created_by?: UserSerializer;
    fynd_item_code: string;
    meta?: any;
    size: string;
    tax_identifier?: any;
    weight: WeightResponse;
    dimension: DimensionResponse;
    fynd_meta?: any;
    total_quantity: number;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    cancelled?: number;
    file_path?: string;
    modified_on?: string;
    failed?: number;
    succeed?: number;
    modified_by?: any;
    stage?: string;
    failed_records?: string[];
    total?: number;
    is_active?: boolean;
    company_id?: number;
    created_by?: any;
    cancelled_records?: string[];
    created_on?: string;
    id?: string;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    store_code: string;
    item_weight_unit_of_measure?: string;
    quantity?: number;
    currency?: string;
    trace_id?: string;
    price?: number;
    seller_identifier: string;
    expiration_date?: string;
    tags?: string[];
    price_marked?: number;
    item_dimensions_unit_of_measure?: string;
    total_quantity?: number;
    price_effective?: number;
};
type InventoryBulkRequest = {
    batch_id: string;
    company_id: number;
    user?: any;
    sizes: InventoryJobPayload[];
};
type InventoryExportQuantityFilter = {
    operators: string;
    min?: number;
    max?: number;
};
type InventoryExportFilter = {
    quantity?: InventoryExportQuantityFilter;
    to_date?: string;
    from_date?: string;
    brand_ids?: number[];
    store_ids?: number[];
};
type InventoryExportRequest = {
    type?: string;
    notification_emails?: string[];
    data?: string[];
    filters: InventoryExportFilter;
};
type InventoryExportResponse = {
    seller_id: number;
    request_params?: any;
    task_id: string;
    trigger_on?: string;
    created_on?: string;
    status?: string;
    _id?: string;
};
type InventoryExportAdvanceOption = {
    quantity?: InventoryExportQuantityFilter;
    to_date?: string;
    from_date?: string;
    brand_ids?: number[];
    notification?: boolean;
    store_ids?: number[];
};
type InventoryExportJob = {
    url?: string;
    completed_on?: string;
    seller_id: number;
    filters?: InventoryExportAdvanceOption;
    notification_emails?: string[];
    task_id: string;
    type: string;
    status?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type ReturnConfig2 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Trader2 = {
    type?: string;
    name?: string;
    address?: string[];
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    sellable?: Quantity;
    not_available?: Quantity;
    damaged?: Quantity;
    order_committed?: Quantity;
};
type ArticleStoreResponse = {
    store_type?: string;
    store_code?: string;
    uid?: number;
    name?: string;
};
type ManufacturerResponse1 = {
    name?: string;
    is_default?: boolean;
    address?: string;
};
type PriceArticle = {
    currency?: string;
    transfer?: number;
    effective?: number;
    tp_notes?: any;
    marked?: number;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type DimensionResponse1 = {
    width?: number;
    height?: number;
    unit?: string;
    length?: number;
};
type GetInventories = {
    company?: CompanyMeta1;
    modified_by?: UserSerializer;
    seller_identifier?: string;
    expiration_date?: string;
    item_id?: number;
    return_config?: ReturnConfig2;
    trader?: Trader2[];
    brand?: BrandMeta1;
    trace_id?: string;
    stage?: string;
    identifier?: any;
    quantities?: QuantitiesArticle;
    tags?: string[];
    uid?: string;
    id?: string;
    store?: ArticleStoreResponse;
    track_inventory?: boolean;
    manufacturer?: ManufacturerResponse1;
    price?: PriceArticle;
    country_of_origin?: string;
    is_set?: boolean;
    created_by?: UserSerializer;
    platforms?: any;
    tax_identifier?: any;
    size?: string;
    weight?: WeightResponse1;
    inventory_updated_on?: string;
    dimension?: DimensionResponse1;
    date_meta?: DateMeta;
    total_quantity?: number;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
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
    trace_id?: string;
    seller_identifier: string;
    expiration_date?: string;
    tags?: string[];
    price_marked?: number;
    total_quantity?: number;
    store_id: number;
    price_effective?: number;
};
type InventoryRequestSchemaV2 = {
    meta?: any;
    company_id: number;
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
type HsnCodesObject = {
    threshold1?: number;
    id?: string;
    modified_on?: string;
    threshold2?: number;
    tax2?: number;
    tax_on_mrp?: boolean;
    tax_on_esp?: boolean;
    company_id?: number;
    hsn_code?: string;
    hs2_code?: string;
    tax1?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    threshold1: number;
    threshold2?: number;
    tax2?: number;
    tax_on_mrp: boolean;
    tax_on_esp?: boolean;
    company_id: number;
    is_active?: boolean;
    uid?: number;
    hsn_code: string;
    hs2_code: string;
    tax1: number;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type PageResponse = {
    current?: string;
    size?: number;
    has_previous?: boolean;
    has_next?: boolean;
    item_total?: number;
};
type TaxSlab = {
    threshold: number;
    effective_date: string;
    cess?: number;
    rate: number;
};
type HSNDataInsertV2 = {
    type: string;
    reporting_hsn: string;
    modified_on?: string;
    description: string;
    modified_by?: any;
    country_code: string;
    created_by?: any;
    hsn_code_id?: string;
    hsn_code: string;
    taxes: TaxSlab[];
    created_on?: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    banners?: ImageUrls;
    slug?: string;
    departments?: string[];
    discount?: string;
    name?: string;
    logo?: Media;
    action?: Action;
    uid?: number;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    priority_order?: number;
    slug?: string;
    name?: string;
    logo?: Media;
    uid?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    banners?: ImageUrls;
    slug?: string;
    childs?: any[];
    name?: string;
    action?: Action;
    _custom_json?: any;
    uid?: number;
};
type SecondLevelChild = {
    banners?: ImageUrls;
    slug?: string;
    childs?: ThirdLevelChild[];
    name?: string;
    action?: Action;
    _custom_json?: any;
    uid?: number;
};
type Child = {
    banners?: ImageUrls;
    slug?: string;
    childs?: SecondLevelChild[];
    name?: string;
    action?: Action;
    _custom_json?: any;
    uid?: number;
};
type CategoryItems = {
    banners?: ImageUrls;
    slug?: string;
    childs?: Child[];
    name?: string;
    action?: Action;
    uid?: number;
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
    sort_on?: ProductSortOn[];
    page: Page;
    filters?: ProductFilters[];
    operators?: any;
    items?: ProductListingDetail[];
};
type ProductDetail = {
    item_type?: string;
    short_description?: string;
    teaser_tag?: any;
    has_variant?: boolean;
    item_code?: string;
    similars?: string[];
    name?: string;
    attributes?: any;
    brand?: ProductBrand;
    product_online_date?: string;
    slug: string;
    highlights?: string[];
    rating_count?: number;
    uid?: number;
    medias?: Media1[];
    type?: string;
    rating?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    color?: string;
    tryouts?: string[];
    image_nature?: string;
    description?: string;
    promo_meta?: any;
};
type InventoryPage = {
    next_id?: string;
    has_previous?: boolean;
    type: string;
    has_next?: boolean;
    item_total: number;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type UserSerializer1 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetAddressSerializer = {
    address_type?: string;
    landmark?: string;
    latitude?: number;
    city?: string;
    pincode?: number;
    country?: string;
    state?: string;
    longitude?: number;
    address1?: string;
    country_code?: string;
    address2?: string;
};
type GetCompanySerializer = {
    company_type?: string;
    modified_on?: string;
    verified_on?: string;
    modified_by?: UserSerializer1;
    stage?: string;
    reject_reason?: string;
    created_by?: UserSerializer1;
    addresses?: GetAddressSerializer[];
    created_on?: string;
    name?: string;
    business_type?: string;
    uid?: number;
    verified_by?: UserSerializer1;
};
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    opening?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
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
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobile_no: SellerPhoneNumber;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetLocationSerializer = {
    company?: GetCompanySerializer;
    modified_by?: UserSerializer2;
    name: string;
    created_on?: string;
    verified_by?: UserSerializer2;
    code: string;
    modified_on?: string;
    product_return_config?: ProductReturnConfigSerializer;
    stage?: string;
    store_type?: string;
    phone_number?: string;
    timing?: LocationDayWiseSerializer[];
    _custom_json?: any;
    uid?: number;
    gst_credentials?: InvoiceDetailsSerializer;
    contact_numbers?: SellerPhoneNumber[];
    store_code?: string;
    manager?: LocationManagerSerializer;
    address: GetAddressSerializer;
    warnings?: any;
    notification_emails?: string[];
    created_by?: UserSerializer2;
    integration_type?: LocationIntegrationType;
    documents?: Document[];
    verified_on?: string;
    display_name: string;
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
    is_active?: boolean;
    name?: string;
    logo?: string;
    _custom_json?: any;
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
    action_date?: string;
    txn_mode?: string;
};
type RuleDefinition = {
    is_exact?: boolean;
    currency_code?: string;
    value_type: string;
    calculate_on: string;
    applicable_on: string;
    type: string;
    auto_apply?: boolean;
    scope?: string[];
};
type CouponSchedule = {
    start?: string;
    cron?: string;
    end?: string;
    duration?: number;
    next_schedule?: any[];
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    types?: string[];
    codes?: string[];
    networks?: string[];
    uses?: PaymentAllowValue;
};
type UsesRemaining = {
    user?: number;
    app?: number;
    total?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type Restrictions = {
    payments?: any;
    user_groups?: number[];
    uses?: UsesRestriction;
    bulk_bundle?: BulkBundleRestriction;
    platforms?: string[];
    post_order?: PostOrder;
    ordering_stores?: number[];
    price_range?: PriceRange;
    user_type?: string;
    coupon_allowed?: boolean;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    subtitle?: string;
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    title?: string;
    description?: string;
    remove?: DisplayMetaDict;
};
type State = {
    is_public?: boolean;
    is_archived?: boolean;
    is_display?: boolean;
};
type Validity = {
    priority?: number;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type Rule = {
    max?: number;
    key?: number;
    min?: number;
    discount_qty?: number;
    value?: number;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponAdd = {
    action?: CouponAction;
    rule_definition: RuleDefinition;
    _schedule?: CouponSchedule;
    ownership: Ownership;
    tags?: string[];
    restrictions?: Restrictions;
    code: string;
    type_slug: string;
    identifiers: Identifier;
    display_meta: DisplayMeta;
    state?: State;
    validity: Validity;
    author?: CouponAuthor;
    validation?: Validation;
    rule: Rule[];
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
    action?: CouponAction;
    rule_definition: RuleDefinition;
    _schedule?: CouponSchedule;
    ownership: Ownership;
    tags?: string[];
    restrictions?: Restrictions;
    code: string;
    type_slug: string;
    identifiers: Identifier;
    display_meta: DisplayMeta;
    state?: State;
    validity: Validity;
    author?: CouponAuthor;
    validation?: Validation;
    rule: Rule[];
    date_meta?: CouponDateMeta;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
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
    greater_than?: number;
    less_than_equals?: number;
    greater_than_equals?: number;
    less_than?: number;
    equals?: number;
};
type ItemCriteria = {
    product_tags?: string[];
    item_company?: number[];
    item_exclude_sku?: string[];
    item_exclude_id?: number[];
    item_exclude_company?: number[];
    all_items?: boolean;
    item_category?: number[];
    item_brand?: number[];
    cart_unique_item_quantity?: CompareObject;
    cart_total?: CompareObject;
    cart_quantity?: CompareObject;
    cart_unique_item_amount?: CompareObject;
    item_store?: number[];
    item_sku?: string[];
    item_id?: number[];
    item_exclude_brand?: number[];
    available_zones?: string[];
    buy_rules?: string[];
    item_size?: string[];
    item_exclude_store?: number[];
    item_exclude_category?: number[];
};
type DiscountOffer = {
    max_usage_per_transaction?: number;
    discount_price?: number;
    apportion_discount?: boolean;
    max_offer_quantity?: number;
    code?: string;
    discount_percentage?: number;
    min_offer_quantity?: number;
    max_discount_amount?: number;
    discount_amount?: number;
    partial_can_ret?: boolean;
};
type DiscountRule = {
    discount_type: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
    buy_condition: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    codes?: string[];
    uses?: PaymentAllowValue1;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions1 = {
    payments?: PromotionPaymentModes[];
    user_id?: string[];
    user_groups?: number[];
    user_registered?: UserRegistered;
    uses: UsesRestriction1;
    platforms?: string[];
    post_order?: PostOrder1;
    anonymous_users?: boolean;
    order_quantity?: number;
};
type DisplayMeta1 = {
    name?: string;
    offer_text?: string;
    description?: string;
    offer_label?: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type PromotionSchedule = {
    start: string;
    cron?: string;
    end?: string;
    duration?: number;
    next_schedule?: any[];
    published: boolean;
};
type PromotionListItem = {
    promo_group: string;
    _custom_json?: any;
    ownership: Ownership1;
    code?: string;
    promotion_type: string;
    application_id: string;
    mode: string;
    calculate_on?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    apply_all_discount?: boolean;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    visiblility?: Visibility;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    _schedule?: PromotionSchedule;
    stackable?: boolean;
    buy_rules: any;
    apply_exclusive?: string;
    currency?: string;
    apply_priority?: number;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    promo_group: string;
    _custom_json?: any;
    ownership: Ownership1;
    code?: string;
    promotion_type: string;
    application_id: string;
    mode: string;
    calculate_on?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    apply_all_discount?: boolean;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    visiblility?: Visibility;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    _schedule?: PromotionSchedule;
    stackable?: boolean;
    buy_rules: any;
    apply_exclusive?: string;
    currency?: string;
    apply_priority?: number;
};
type PromotionUpdate = {
    promo_group: string;
    _custom_json?: any;
    ownership: Ownership1;
    code?: string;
    promotion_type: string;
    application_id: string;
    mode: string;
    calculate_on?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    apply_all_discount?: boolean;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    visiblility?: Visibility;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    _schedule?: PromotionSchedule;
    stackable?: boolean;
    buy_rules: any;
    apply_exclusive?: string;
    currency?: string;
    apply_priority?: number;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    entity_type?: string;
    subtitle?: string;
    created_on?: string;
    example?: string;
    modified_on?: string;
    is_hidden?: boolean;
    description?: string;
    type?: string;
    entity_slug?: string;
    title?: string;
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
    key?: string;
    currency_code?: string;
    currency_symbol?: string;
    display?: string;
    value?: number;
    message?: string[];
};
type CouponBreakup = {
    type?: string;
    code?: string;
    sub_title?: string;
    coupon_value?: number;
    title?: string;
    coupon_type?: string;
    max_discount_value?: number;
    is_applied?: boolean;
    description?: string;
    uid?: string;
    value?: number;
    minimum_cart_value?: number;
    message?: string;
};
type RawBreakup = {
    discount?: number;
    delivery_charge?: number;
    gst_charges?: number;
    subtotal?: number;
    vog?: number;
    mrp_total?: number;
    coupon?: number;
    you_saved?: number;
    convenience_fee?: number;
    cod_charge?: number;
    fynd_cash?: number;
    total?: number;
};
type LoyaltyPoints = {
    description?: string;
    is_applied?: boolean;
    total?: number;
    applicable?: number;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
    raw?: RawBreakup;
    loyalty_points?: LoyaltyPoints;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    type?: string;
    query?: ActionQuery;
    url?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type ProductImage = {
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type CartProduct = {
    action?: ProductAction;
    type?: string;
    categories?: CategoryInfo[];
    brand?: BaseInfo;
    name?: string;
    net_quantity?: NetQuantity;
    images?: ProductImage[];
    uid?: number;
    slug?: string;
};
type BasePrice = {
    currency_code?: string;
    effective?: number;
    currency_symbol?: string;
    marked?: number;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    type?: string;
    product_group_tags?: string[];
    quantity?: number;
    store?: BaseInfo;
    parent_item_identifiers?: any;
    _custom_json?: any;
    extra_meta?: any;
    size?: string;
    seller?: BaseInfo;
    uid?: string;
    price?: ArticlePriceInfo;
};
type ProductAvailability = {
    other_store_quantity?: number;
    deliverable?: boolean;
    sizes?: string[];
    out_of_stock?: boolean;
    is_valid?: boolean;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type FreeGiftItem = {
    item_id?: number;
    item_slug?: string;
    item_name?: string;
    item_price_details?: any;
    item_images_url?: string[];
    item_brand_name?: string;
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    quantity?: number;
    parent_item_identifier?: string;
};
type DiscountRulesApp = {
    item_criteria?: any;
    offer?: any;
    raw_offer?: any;
    matched_buy_rules?: string[];
};
type AppliedPromotion = {
    article_quantity?: number;
    promo_id?: string;
    promotion_name?: string;
    offer_text?: string;
    ownership?: Ownership2;
    buy_rules?: BuyRules[];
    promotion_group?: string;
    promotion_type?: string;
    amount?: number;
    applied_free_articles?: AppliedFreeArticles[];
    discount_rules?: DiscountRulesApp[];
    mrp_promotion?: boolean;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductPrice = {
    marked?: number;
    currency_code?: string;
    currency_symbol?: string;
    add_on?: number;
    selling?: number;
    effective?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type CartProductInfo = {
    product?: CartProduct;
    key?: string;
    quantity?: number;
    bulk_offer?: any;
    parent_item_identifiers?: any;
    article?: ProductArticle;
    availability?: ProductAvailability;
    is_set?: boolean;
    promotions_applied?: AppliedPromotion[];
    identifiers: CartProductIdentifer;
    price_per_unit?: ProductPriceInfo;
    discount?: string;
    promo_meta?: PromoMeta;
    coupon_message?: string;
    price?: ProductPriceInfo;
    message?: string;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    message?: string;
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    success?: boolean;
    errors?: any;
    message?: string;
};
type ShippingAddress = {
    phone?: number;
    country_iso_code?: string;
    pincode?: number;
    area_code_slug?: string;
    address_type?: string;
    country_code?: string;
    country_phone_code?: string;
    address?: string;
    email?: string;
    city?: string;
    name?: string;
    area_code: string;
    country?: string;
    meta?: any;
    area?: string;
    landmark?: string;
    state?: string;
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
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    items?: CartProductInfo[];
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
    coupon_effective_discount: number;
    product_id: number;
    quantity?: number;
    payment_methods: MultiTenderPaymentMethod[];
    size: string;
    extra_meta?: any;
    price_marked: number;
    cod_charges: number;
    amount_paid: number;
    price_effective: number;
    loyalty_discount?: number;
    delivery_charges: number;
    meta?: CartItemMeta;
    files?: OpenApiFiles[];
    discount: number;
    employee_discount?: number;
    cashback_applied: number;
};
type OpenApiPlatformCheckoutReq = {
    shipping_address?: ShippingAddress;
    affiliate_order_id?: string;
    coupon_value: number;
    cod_charges: number;
    gstin?: string;
    currency_code?: string;
    coupon_code: string;
    delivery_charges: number;
    cart_items: OpenApiOrderItem[];
    files?: OpenApiFiles[];
    comment?: string;
    payment_methods: MultiTenderPaymentMethod[];
    order_id?: string;
    payment_mode?: string;
    loyalty_discount?: number;
    coupon?: string;
    cart_value: number;
    employee_discount?: any;
    cashback_applied: number;
    billing_address: ShippingAddress;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    success?: boolean;
    message?: string;
    order_ref_id?: string;
};
type AbandonedCart = {
    is_active?: boolean;
    checkout_mode?: string;
    cod_charges?: any;
    pick_up_customer_details?: any;
    fynd_credits?: any;
    delivery_charges?: any;
    merge_qty?: boolean;
    promotion?: any;
    payments?: any;
    is_archive?: boolean;
    payment_methods?: any[];
    order_id?: string;
    meta?: any;
    cart_value?: number;
    articles: any[];
    last_modified: string;
    user_id: string;
    created_on: string;
    shipments?: any[];
    bulk_coupon_discount?: number;
    gstin?: string;
    app_id?: string;
    uid: number;
    comment?: string;
    expire_at: string;
    fc_index_map?: number[];
    is_default: boolean;
    buy_now?: boolean;
    cashback: any;
    payment_mode?: string;
    coupon?: any;
    discount?: number;
    _id: string;
};
type AbandonedCartResponse = {
    result?: any;
    message?: string;
    page?: Page;
    success?: boolean;
    items?: AbandonedCart[];
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    restrict_checkout?: boolean;
    last_modified?: string;
    id?: string;
    message?: string;
    pan_no?: string;
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    checkout_mode?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    gstin?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_promise?: ShipmentPromise;
    coupon_text?: string;
    is_valid?: boolean;
    comment?: string;
    items?: CartProductInfo[];
};
type AddProductCart = {
    item_id?: number;
    product_group_tags?: string[];
    quantity?: number;
    article_id?: string;
    parent_item_identifiers?: any;
    seller_id?: number;
    item_size?: string;
    extra_meta?: any;
    _custom_json?: any;
    pos?: boolean;
    article_assignment?: any;
    display?: string;
    store_id?: number;
};
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    cart?: CartDetailResponse;
    success?: boolean;
    message?: string;
    partial?: boolean;
};
type UpdateProductCart = {
    item_id?: number;
    quantity?: number;
    article_id?: string;
    parent_item_identifiers?: any;
    _custom_json?: any;
    item_size?: string;
    extra_meta?: any;
    identifiers: CartProductIdentifer;
    item_index?: number;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    success?: boolean;
    message?: string;
};
type GetShareCartLinkRequest = {
    id?: string;
    meta?: any;
};
type GetShareCartLinkResponse = {
    token?: string;
    share_url?: string;
};
type SharedCartDetails = {
    token?: string;
    source?: any;
    created_on?: string;
    meta?: any;
    user?: any;
};
type SharedCart = {
    id?: string;
    checkout_mode?: string;
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
    shared_cart_details?: SharedCartDetails;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    cart_id?: number;
    last_modified?: string;
    gstin?: string;
    comment?: string;
    uid?: string;
    items?: CartProductInfo[];
    buy_now?: boolean;
    currency?: CartCurrency;
    payment_selection_lock?: PaymentSelectionLock;
    coupon_text?: string;
    is_valid?: boolean;
    message?: string;
};
type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
type CartList = {
    user_id?: string;
    created_on?: string;
    item_counts?: string;
    cart_value?: string;
    cart_id?: string;
};
type MultiCartResponse = {
    success?: boolean;
    data?: CartList[];
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    restrict_checkout?: boolean;
    last_modified?: string;
    id?: string;
    message?: string;
    pan_no?: string;
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    checkout_mode?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    gstin?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_promise?: ShipmentPromise;
    coupon_text?: string;
    user?: UserInfo;
    is_valid?: boolean;
    comment?: string;
    items?: CartProductInfo[];
};
type DeleteCartDetailResponse = {
    success?: boolean;
    message?: string;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type PageCoupon = {
    has_previous?: boolean;
    total_item_count?: number;
    has_next?: boolean;
    current?: number;
    total?: number;
};
type Coupon = {
    message?: string;
    expires_on?: string;
    is_applicable?: boolean;
    coupon_value?: number;
    sub_title?: string;
    coupon_type?: string;
    coupon_code?: string;
    max_discount_value?: number;
    is_applied?: boolean;
    description?: string;
    minimum_cart_value?: number;
    title?: string;
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
    phone?: string;
    id?: string;
    area_code_slug?: string;
    is_active?: boolean;
    country_code?: string;
    checkout_mode?: string;
    city?: string;
    name?: string;
    area?: string;
    google_map_point?: any;
    geo_location?: GeoLocation;
    area_code?: string;
    state?: string;
    meta?: any;
    cart_id?: string;
    user_id?: string;
    address_type?: string;
    address?: string;
    country?: string;
    landmark?: string;
    is_default_address?: boolean;
    tags?: string[];
    email?: string;
    created_by_user_id?: string;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type SaveAddressResponse = {
    is_default_address?: boolean;
    id?: string;
    success?: boolean;
};
type UpdateAddressResponse = {
    id?: string;
    success?: boolean;
    is_updated?: boolean;
    is_default_address?: boolean;
};
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
type PlatformSelectCartAddressRequest = {
    id?: string;
    checkout_mode?: string;
    billing_address_id?: string;
    cart_id?: string;
};
type ShipmentResponse = {
    dp_options?: any;
    order_type?: string;
    dp_id?: string;
    fulfillment_type?: string;
    shipments?: number;
    fulfillment_id?: number;
    shipment_type?: string;
    promise?: ShipmentPromise;
    box_type?: string;
    items?: CartProductInfo[];
};
type CartShipmentsResponse = {
    last_modified?: string;
    id?: string;
    shipments?: ShipmentResponse[];
    checkout_mode?: string;
    delivery_charge_info?: string;
    gstin?: string;
    comment?: string;
    uid?: string;
    restrict_checkout?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    currency?: CartCurrency;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_promise?: ShipmentPromise;
    coupon_text?: string;
    is_valid?: boolean;
    error?: boolean;
    cart_id?: number;
};
type UpdateCartShipmentItem = {
    quantity?: number;
    article_uid: string;
    shipment_type: string;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    pan_no?: string;
    checkout_mode?: string;
    gstin?: string;
    pick_up_customer_details?: any;
    comment?: string;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type StaffCheckout = {
    employee_code?: string;
    first_name: string;
    user: string;
    last_name: string;
    _id: string;
};
type Files = {
    key: string;
    values: string[];
};
type PlatformCartCheckoutDetailRequest = {
    id: string;
    billing_address_id?: string;
    delivery_address?: any;
    extra_meta?: any;
    aggregator?: string;
    payment_auto_confirm?: boolean;
    ordering_store?: number;
    payment_identifier?: string;
    pos?: boolean;
    meta?: any;
    user_id: string;
    payment_params?: any;
    merchant_code?: string;
    callback_url?: string;
    pick_at_store_uid?: number;
    staff?: StaffCheckout;
    order_type: string;
    address_id?: string;
    payment_mode: string;
    files?: Files[];
    billing_address?: any;
};
type CheckCart = {
    id?: string;
    checkout_mode?: string;
    cod_charges?: number;
    delivery_charge_info?: string;
    delivery_charges?: number;
    delivery_charge_order_value?: number;
    success?: boolean;
    restrict_checkout?: boolean;
    store_code?: string;
    breakup_values?: CartBreakup;
    order_id?: string;
    delivery_promise?: ShipmentPromise;
    error_message?: string;
    cart_id?: number;
    last_modified?: string;
    gstin?: string;
    comment?: string;
    uid?: string;
    user_type?: string;
    items?: CartProductInfo[];
    store_emps?: any[];
    buy_now?: boolean;
    currency?: CartCurrency;
    payment_selection_lock?: PaymentSelectionLock;
    cod_message?: string;
    coupon_text?: string;
    is_valid?: boolean;
    message?: string;
    cod_available?: boolean;
};
type CartCheckoutResponse = {
    cart?: CheckCart;
    data?: any;
    callback_url?: string;
    payment_confirm_url?: string;
    order_id?: string;
    app_intercept_url?: string;
    success?: boolean;
    message?: string;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    phone?: string;
    store_code?: string;
    id?: number;
    pincode?: number;
    area_code_slug?: string;
    address_type?: string;
    address?: string;
    email?: string;
    country?: string;
    name?: string;
    area_code?: string;
    city?: string;
    state?: string;
    area?: string;
    landmark?: string;
    uid?: number;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    id?: string;
    merchant_code?: string;
    payment_identifier?: string;
    aggregator_name?: string;
    payment_mode?: string;
    address_id?: string;
};
type CouponValidity = {
    display_message_en?: string;
    code?: string;
    discount?: number;
    valid?: boolean;
    title?: string;
};
type PaymentCouponValidate = {
    coupon_validity?: CouponValidity;
    success: boolean;
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
