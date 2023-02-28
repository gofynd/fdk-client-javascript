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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, Prices, GSTDetailsData, PlatformItem, BagUnit, UserDataInfo, PaymentModeInfo, ShipmentItemFulFillingStore, ShipmentStatus, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, BagStateMapper, BagStatusHistory, FulfillingStore, TrackingList, ShipmentStatusData, UserDetailsData, BagGST, OrderBagArticle, BagConfigs, PlatformDeliveryAddress, CurrentStatus, Identifier, FinancialBreakup, OrderBrandName, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBags, ShipmentPayments, DPDetailsData, OrderDetailsData, ShipmentInfoResponse, OrderMeta, OrderDict, OrderingStore, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Document, StoreDocuments, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, StoreAddress, Store, BagGSTDetails, Attributes, Item, BagReturnableCancelableStatus, B2BPODetails, BagMeta, Dimensions, Weight, ReturnConfig, Article, DebugInfo, LockData, EInvoice, EinvoiceInfo, ShipmentTimeStamp, BuyerDetails, Formatted, ShipmentMeta, PDFLinks, AffiliateMeta, AffiliateDetails, AffiliateBagDetails, Dates, ArticleDetails, Brand, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, OrderPriority, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, UserData, MarketPlacePdf, AffiliateBag, OrderInfo, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ShippingInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, BillingInfo, TaxInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, GetMultiSizeGuide, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, MetaFields, ApplicationItemMOQ, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, BannerImage, ImageUrls, Media1, CollectionQuery, GetCollectionDetailNest, GetCollectionListingResponse, UserInfo, CollectionBadge, CollectionImage, CollectionBanner, CollectionSchedule, SeoDetail, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, Media2, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, NetQuantityResponse, ProductPublished, ReturnConfigResponse, Logo, Image, Product, ProductListingResponse, CustomOrder, TeaserTag, TaxIdentifier, NetQuantity, ProductPublish, Trader, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ProductCreateUpdate, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, WeightResponse, ManufacturerResponse, PriceMeta, ReturnConfig1, BrandMeta, QuantityBase, Quantities, CompanyMeta, Trader1, DimensionResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportQuantityFilter, InventoryExportAdvanceOption, InventoryExportJob, InventoryExportFilter, InventoryExportRequest, InventoryExportResponse, WeightResponse1, ManufacturerResponse1, ArticleStoreResponse, PriceArticle, ReturnConfig2, BrandMeta1, Quantity, QuantitiesArticle, CompanyMeta1, Trader2, DimensionResponse1, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, PageResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, UserSerializer1, SellerPhoneNumber, LocationManagerSerializer, GetAddressSerializer, ProductReturnConfigSerializer, LocationIntegrationType, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer2, GetCompanySerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, Website, BusinessDetails, ContactDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStores, OrderingStoresResponse, CouponAction, CouponAuthor, Validation, RuleDefinition, State, CouponDateMeta, CouponSchedule, DisplayMetaDict, DisplayMeta, BulkBundleRestriction, PaymentAllowValue, PaymentModes, PriceRange, PostOrder, UsesRemaining, UsesRestriction, Restrictions, Validity, Ownership, Rule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionDateMeta, CompareObject, ItemCriteria, PromotionSchedule, DisplayMeta1, PromotionAuthor, Ownership1, PromotionAction, Visibility, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, UsesRemaining1, UsesRestriction1, Restrictions1, DiscountOffer, DiscountRule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CouponBreakup, LoyaltyPoints, RawBreakup, DisplayBreakup, CartBreakup, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, ProductAvailability, PromoMeta, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, Ownership2, AppliedPromotion, ProductPrice, ProductPriceInfo, ActionQuery, ProductAction, ProductImage, CategoryInfo, CartProduct, CartProductIdentifer, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, Files, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    excluded_fields: string[];
    app_id: string;
    aggregators?: any[];
    created: boolean;
    display_fields: string[];
    success: boolean;
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    is_active?: boolean;
    merchant_salt: string;
    secret: string;
    key: string;
    config_type: string;
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
    logos?: PaymentModeLogo;
    package_name?: string;
    display_name?: string;
    code?: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    merchant_code?: string;
    cod_limit?: number;
    remaining_limit?: number;
    timeout?: number;
    card_number?: string;
    card_isin?: string;
    expired?: boolean;
    compliant_with_tokenisation_guidelines?: boolean;
    nickname?: string;
    card_type?: string;
    retry_count?: number;
    card_fingerprint?: string;
    fynd_vpa?: string;
    card_id?: string;
    card_token?: string;
    intent_app?: IntentApp[];
    card_brand?: string;
    card_brand_image?: string;
    cod_limit_per_order?: number;
    exp_year?: number;
    name?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    intent_flow?: boolean;
    logo_url?: PaymentModeLogo;
    exp_month?: number;
    intent_app_error_list?: string[];
    aggregator_name: string;
    card_name?: string;
    display_name?: string;
    card_issuer?: string;
    display_priority?: number;
    code?: string;
    card_reference?: string;
};
type RootPaymentMode = {
    anonymous_enable?: boolean;
    aggregator_name?: string;
    save_card?: boolean;
    is_pay_by_card_pl?: boolean;
    display_name: string;
    name: string;
    display_priority: number;
    add_card_enabled?: boolean;
    list?: PaymentModeList[];
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type Payout = {
    is_default: boolean;
    more_attributes: any;
    is_active: boolean;
    customers: any;
    unique_transfer_no: any;
    transfer_type: string;
    payouts_aggregators: any[];
};
type PayoutsResponse = {
    items: Payout[];
    success: boolean;
};
type PayoutBankDetails = {
    branch_name?: string;
    account_holder?: string;
    country?: string;
    account_no?: string;
    bank_name?: string;
    state?: string;
    account_type: string;
    pincode?: number;
    ifsc_code: string;
    city?: string;
};
type PayoutRequest = {
    aggregator: string;
    is_active: boolean;
    unique_external_id: string;
    transfer_type: string;
    bank_details: PayoutBankDetails;
    users: any;
};
type PayoutResponse = {
    aggregator: string;
    is_active: boolean;
    payment_status: string;
    unique_transfer_no: string;
    payouts: any;
    transfer_type: string;
    created: boolean;
    bank_details: any;
    users: any;
    success: boolean;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    is_active: boolean;
    success: boolean;
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
    message: string;
    is_verified_flag?: boolean;
    data?: any;
    success: boolean;
};
type NotFoundResourceError = {
    code: string;
    description: string;
    success: boolean;
};
type BankDetailsForOTP = {
    branch_name: string;
    account_holder: string;
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
    created_on: string;
    id: number;
    subtitle: string;
    beneficiary_id: string;
    account_holder: string;
    modified_on: string;
    bank_name: string;
    mobile?: string;
    comment?: string;
    branch_name?: string;
    title: string;
    address: string;
    delights_user_name?: string;
    email: string;
    ifsc_code: string;
    display_name: string;
    is_active: boolean;
    account_no: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    payment_gateway?: string;
    order_id?: string;
    extra_meta?: any;
    payment_id?: string;
    current_status?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    amount: number;
    meta?: MultiTenderPaymentMeta;
    mode: string;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    message: string;
    order_id: string;
    success: boolean;
};
type PlatformPaymentOptions = {
    anonymous_cod?: boolean;
    payment_selection_lock?: any;
    methods: any;
    source: string;
    callback_url?: any;
    cod_amount_limit?: number;
    cod_charges?: number;
    enabled: boolean;
    mode_of_payment: string;
};
type PlatfromPaymentConfig = {
    message: string;
    data: PlatformPaymentOptions;
    success: boolean;
};
type UpdatePlatformPaymentConfig = {
    anonymous_cod?: boolean;
    payment_selection_lock?: any;
    methods: any;
    cod_amount_limit?: number;
    cod_charges?: number;
};
type CODdata = {
    user_id: string;
    is_active: boolean;
    remaining_limit: number;
    limit: number;
    usages: number;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    merchant_user_id: string;
    mobileno: string;
    is_active: boolean;
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
    active_device_count: number;
    inactive_device_count: number;
};
type EdcDeviceStatsResponse = {
    statistics: StatisticsData;
    success: boolean;
};
type EdcAddRequest = {
    edc_device_serial_no: string;
    device_tag?: string;
    aggregator_id: number;
    store_id: number;
    edc_model: string;
    terminal_serial_no: string;
};
type EdcDevice = {
    application_id: string;
    aggregator_name?: string;
    is_active: boolean;
    edc_device_serial_no: string;
    device_tag: string;
    terminal_unique_identifier: string;
    merchant_store_pos_code?: string;
    aggregator_id: number;
    store_id: number;
    edc_model?: string;
    terminal_serial_no: string;
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
    is_active?: string;
    edc_device_serial_no?: string;
    device_tag?: string;
    merchant_store_pos_code?: string;
    aggregator_id?: number;
    store_id?: number;
    edc_model?: string;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    page: Page;
    items: EdcDevice[];
    success: boolean;
};
type PaymentInitializationRequest = {
    aggregator: string;
    currency: string;
    contact: string;
    order_id: string;
    vpa?: string;
    device_id?: string;
    razorpay_payment_id?: string;
    timeout?: number;
    method: string;
    customer_id: string;
    email: string;
    amount: number;
    merchant_order_id: string;
};
type PaymentInitializationResponse = {
    aggregator: string;
    currency?: string;
    polling_url: string;
    vpa?: string;
    device_id?: string;
    status?: string;
    razorpay_payment_id?: string;
    timeout?: number;
    bqr_image?: string;
    aggregator_order_id?: string;
    method: string;
    customer_id?: string;
    amount?: number;
    virtual_id?: string;
    upi_poll_url?: string;
    merchant_order_id: string;
    success: boolean;
};
type PaymentStatusUpdateRequest = {
    aggregator: string;
    currency: string;
    contact: string;
    order_id: string;
    vpa?: string;
    device_id?: string;
    status: string;
    method: string;
    customer_id: string;
    email: string;
    amount: number;
    merchant_order_id: string;
};
type PaymentStatusUpdateResponse = {
    aggregator_name: string;
    retry: boolean;
    status: string;
    redirect_url?: string;
    success?: boolean;
};
type ResendOrCancelPaymentRequest = {
    request_type: string;
    order_id: string;
    device_id?: string;
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
    text: string;
    name?: string;
    value?: string;
};
type FiltersInfo = {
    text: string;
    value: string;
    options?: FilterInfoOption[];
    type: string;
};
type Prices = {
    fynd_credits?: number;
    cashback?: number;
    delivery_charge?: number;
    price_marked?: number;
    refund_credit?: number;
    promotion_effective_discount?: number;
    tax_collected_at_source?: number;
    amount_paid?: number;
    refund_amount?: number;
    value_of_good?: number;
    cashback_applied?: number;
    discount?: number;
    amount_paid_roundoff?: number;
    price_effective?: number;
    cod_charges?: number;
    coupon_value?: number;
};
type GSTDetailsData = {
    gst_fee: number;
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    value_of_good: number;
    gstin_code: string;
};
type PlatformItem = {
    size?: string;
    code?: string;
    l3_category_name?: string;
    can_return?: boolean;
    can_cancel?: boolean;
    l1_category?: string[];
    image?: string[];
    id?: number;
    department_id?: number;
    l3_category?: number;
    color?: string;
    name?: string;
    images?: string[];
};
type BagUnit = {
    ordering_channel: string;
    shipment_id: string;
    can_return?: boolean;
    can_cancel?: boolean;
    bag_id: number;
    item_quantity: number;
    prices?: Prices;
    total_shipment_bags: number;
    gst?: GSTDetailsData;
    status: any;
    item?: PlatformItem;
};
type UserDataInfo = {
    is_anonymous_user?: boolean;
    email?: string;
    uid?: number;
    avis_user_id?: string;
    gender?: string;
    last_name?: string;
    first_name?: string;
    name?: string;
    mobile?: string;
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
    actual_status: string;
    ops_status: string;
    hex_code: string;
    title: string;
    status: string;
};
type ShipmentItem = {
    shipment_created_at: number;
    bags?: BagUnit[];
    created_at: string;
    total_shipments_in_order: number;
    payment_methods?: any;
    fulfilling_centre: string;
    application?: any;
    id: string;
    user?: UserDataInfo;
    payment_mode_info?: PaymentModeInfo;
    company?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    total_bags_count: number;
    prices?: Prices;
    shipment_status?: ShipmentStatus;
    sla?: any;
    channel?: any;
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    applied_filters?: any;
    page?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type BagStateMapper = {
    is_active?: boolean;
    notify_customer?: boolean;
    app_state_name?: string;
    bs_id: number;
    display_name: string;
    name: string;
    state_type: string;
    journey_type: string;
    app_display_name?: string;
    app_facing?: boolean;
};
type BagStatusHistory = {
    delivery_awb_number?: string;
    delivery_partner_id?: number;
    created_at?: string;
    shipment_id?: string;
    reasons?: any[];
    app_display_name?: string;
    store_id?: number;
    display_name?: string;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    forward?: boolean;
    updated_at?: string;
    bag_id?: number;
    state_type?: string;
    kafka_sync?: boolean;
    bsh_id?: number;
    status: string;
};
type FulfillingStore = {
    code: string;
    phone: string;
    country: string;
    fulfillment_channel: string;
    id: number;
    city: string;
    contact_person: string;
    address: string;
    meta: any;
    state: string;
    store_name: string;
    pincode: string;
};
type TrackingList = {
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
    text: string;
    status: string;
};
type ShipmentStatusData = {
    bag_list?: string[];
    created_at?: string;
    shipment_id?: string;
    id?: number;
    status?: string;
};
type UserDetailsData = {
    email?: string;
    phone: string;
    country: string;
    city: string;
    address: string;
    state: string;
    name: string;
    pincode: string;
};
type BagGST = {
    gst_fee?: number;
    gst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
    brand_calculated_amount?: number;
    gst_tag?: string;
    value_of_good?: number;
    gstin_code?: string;
    hsn_code?: string;
};
type OrderBagArticle = {
    identifiers?: any;
    return_config?: any;
    uid?: string;
};
type BagConfigs = {
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    allow_force_return: boolean;
    can_be_cancelled: boolean;
};
type PlatformDeliveryAddress = {
    address1?: string;
    version?: string;
    email?: string;
    created_at?: string;
    phone?: string;
    landmark?: string;
    latitude?: number;
    country?: string;
    city?: string;
    contact_person?: string;
    address2?: string;
    updated_at?: string;
    longitude?: number;
    address_category?: string;
    pincode?: string;
    state?: string;
    address_type?: string;
    area?: string;
};
type CurrentStatus = {
    delivery_awb_number?: string;
    delivery_partner_id?: number;
    created_at?: string;
    current_status_id: number;
    shipment_id?: string;
    store_id?: number;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    bag_id?: number;
    updated_at?: number;
    state_type?: string;
    kafka_sync?: boolean;
    status?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    tax_collected_at_source?: number;
    cashback_applied: number;
    size: string;
    brand_calculated_amount: number;
    amount_paid: number;
    transfer_price: number;
    gst_tax_percentage: number;
    identifiers: Identifier;
    price_effective: number;
    coupon_value: number;
    price_marked: number;
    delivery_charge: number;
    refund_credit: number;
    gst_tag: string;
    amount_paid_roundoff?: number;
    cashback: number;
    fynd_credits: number;
    hsn_code: string;
    item_name: string;
    coupon_effective_discount: number;
    gst_fee: number;
    added_to_fynd_cash: boolean;
    promotion_effective_discount: number;
    value_of_good: number;
    discount: number;
    total_units: number;
    cod_charges: number;
};
type OrderBrandName = {
    brand_name: string;
    modified_on?: string;
    company?: string;
    id: number;
    logo: string;
    created_on: string;
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
    promotion_type?: string;
    mrp_promotion?: boolean;
    promotion_name?: string;
    amount?: number;
    discount_rules?: DiscountRules[];
    buy_rules?: BuyRules[];
    promo_id?: string;
    article_quantity?: number;
};
type OrderBags = {
    can_cancel?: boolean;
    prices?: Prices;
    parent_promo_bags?: any;
    gst_details?: BagGST;
    item?: PlatformItem;
    seller_identifier?: string;
    article?: OrderBagArticle;
    bag_configs?: BagConfigs;
    can_return?: boolean;
    entity_type?: string;
    line_number?: number;
    delivery_address?: PlatformDeliveryAddress;
    current_status?: CurrentStatus;
    quantity?: number;
    bag_id: number;
    identifier?: string;
    financial_breakup?: FinancialBreakup;
    display_name?: string;
    brand?: OrderBrandName;
    applied_promos?: AppliedPromos[];
};
type ShipmentPayments = {
    logo?: string;
    source?: string;
    mode?: string;
};
type DPDetailsData = {
    eway_bill_id?: string;
    country?: string;
    awb_no?: string;
    track_url?: string;
    id?: number;
    gst_tag?: string;
    name?: string;
    pincode?: string;
};
type OrderDetailsData = {
    order_date?: string;
    ordering_channel?: string;
    fynd_order_id: string;
    ordering_channel_logo?: any;
    source?: string;
    order_value?: string;
    affiliate_id?: string;
    cod_charges?: string;
    tax_details?: any;
};
type ShipmentInfoResponse = {
    forward_shipment_status?: any[];
    is_invoiced: boolean;
    platform_logo: boolean;
    ordering_store: any;
    shipment_quantity?: number;
    enable_dp_tracking?: boolean;
    picked_date?: string;
    bag_status_history?: BagStatusHistory[];
    delivery_slot?: any;
    can_cancel?: boolean;
    user_id: string;
    can_break: string;
    enable_tracking?: boolean;
    is_pdsr?: string;
    fulfilling_store?: FulfillingStore;
    credit_note_id: string;
    prices?: Prices;
    refund_text?: string;
    total_bags?: number;
    forward_tracking_list?: any[];
    coupon?: any;
    journey_type?: string;
    vertical?: string;
    affiliate_shipment_id: string;
    gst_details?: GSTDetailsData;
    custom_meta?: any[];
    tracking_list?: TrackingList[];
    status?: ShipmentStatusData;
    priority_text?: string;
    billing_details?: UserDetailsData;
    order_created_time?: string;
    replacement_details?: string;
    shipment_id: string;
    due_date?: string;
    beneficiary_details?: boolean;
    secured_delivery_flag?: string;
    order_status: any;
    items: any[];
    company: any;
    current_shipment_status: any;
    total_items?: number;
    shipment_status?: string;
    email_id: string;
    escalation?: any;
    delivery_details?: UserDetailsData;
    lock_status: string;
    can_return?: boolean;
    delivery_status: any[];
    fyndstore_emp: any;
    is_fynd_store?: string;
    kirana_store_id?: string;
    payment_mode?: string;
    tracking_url: string;
    bank_data?: any;
    refund_details?: any;
    pay_button?: string;
    is_fynd_coupon: boolean;
    is_packaging_order: boolean;
    packaging_type?: string;
    bags?: OrderBags[];
    order_type: string;
    status_progress: number;
    user_agent?: string;
    user_info?: any;
    invoice: any;
    operational_status?: string;
    is_not_fynd_source: boolean;
    go_green?: boolean;
    forward_order_status?: any[];
    mid?: string;
    payments?: ShipmentPayments;
    dp_details?: DPDetailsData;
    order?: OrderDetailsData;
    child_nodes?: string[];
    shipment_images?: string[];
};
type OrderMeta = {
    order_tags?: any[];
    payment_type?: string;
    mongo_cart_id?: number;
    employee_id?: number;
    staff?: any;
    ordering_store?: number;
    order_type?: string;
    order_platform?: string;
    extra_meta?: any;
    customer_note?: string;
    cart_id?: number;
    order_child_entities?: string[];
    files?: any[];
    comment?: string;
    currency_symbol?: string;
};
type OrderDict = {
    order_date: string;
    fynd_order_id: string;
    payment_methods?: any;
    meta?: OrderMeta;
    prices?: Prices;
    tax_details?: any;
};
type OrderingStore = {
    code: string;
    phone: string;
    country: string;
    id: string;
    city: string;
    contact_person: string;
    address: string;
    meta: any;
    state: string;
    store_name: string;
    pincode: string;
};
type PlatformShipment = {
    platform_logo?: string;
    ordering_store?: OrderingStore;
    shipment_quantity?: number;
    enable_dp_tracking?: boolean;
    picked_date?: string;
    bag_status_history?: BagStatusHistory[];
    delivery_slot?: any;
    fulfilling_store?: FulfillingStore;
    prices?: Prices;
    total_bags?: number;
    coupon?: any;
    journey_type?: string;
    vertical?: string;
    gst_details?: GSTDetailsData;
    custom_meta?: any[];
    tracking_list?: TrackingList[];
    status?: ShipmentStatusData;
    priority_text?: string;
    billing_details?: UserDetailsData;
    shipment_id: string;
    total_items?: number;
    shipment_status?: string;
    delivery_details?: UserDetailsData;
    payment_mode?: string;
    packaging_type?: string;
    bags?: OrderBags[];
    user_agent?: string;
    operational_status?: string;
    payments?: ShipmentPayments;
    dp_details?: DPDetailsData;
    order?: OrderDetailsData;
    shipment_images?: string[];
};
type ShipmentDetailsResponse = {
    success: boolean;
    order?: OrderDict;
    shipments?: PlatformShipment[];
};
type SubLane = {
    value?: string;
    index?: number;
    actions?: any[];
    total_items?: number;
    text?: string;
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
type PlatformBreakupValues = {
    display?: string;
    name?: string;
    value?: string;
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformOrderItems = {
    order_id?: string;
    total_order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    user_info?: UserDataInfo;
    meta?: any;
    payment_mode?: string;
    order_value?: number;
    shipments?: PlatformShipment[];
    channel?: PlatformChannel;
    order_created_time?: string;
};
type OrderListingResponse = {
    success?: boolean;
    page?: Page;
    items?: PlatformOrderItems[];
    lane?: string;
    total_count?: number;
    message?: string;
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    options?: Options[];
    text: string;
    key: string;
    value: number;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    shipment_type?: string;
    account_name?: string;
    raw_status?: string;
    last_location_recieved_at?: string;
    updated_at?: string;
    reason?: string;
    meta?: any;
    awb?: string;
    updated_time?: string;
    status?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type AdvanceFilterInfo = {
    returned?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    processed?: FiltersInfo[];
    filters?: FiltersInfo[];
    action_centre?: FiltersInfo[];
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
    report_name?: string;
    display_name?: string;
    report_requested_at?: string;
    report_created_at?: string;
    s3_key?: string;
    report_id?: string;
    request_details?: any;
    report_type?: string;
    status?: string;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    article_id?: string;
    jio_code?: string;
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
    trace_id?: string;
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
    identifier?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    batch_id: string;
    store_id?: string;
    data?: any;
    invoice?: any;
    store_code?: string;
    label?: any;
    company_id?: string;
    do_invoice_label_generated: boolean;
    invoice_status?: string;
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
    namespace?: string;
    size?: number;
    tags?: string[];
    cdn?: URL;
    file_name?: string;
    operation?: string;
    upload?: FileUploadResponse;
    file_path?: string;
    method?: string;
    content_type?: string;
};
type bulkListingData = {
    file_name?: string;
    user_id?: string;
    store_code?: string;
    successful?: number;
    processing?: number;
    status?: string;
    successful_shipments?: any[];
    total?: number;
    store_name?: string;
    processing_shipments?: string[];
    batch_id?: string;
    store_id?: number;
    company_id?: number;
    failed_shipments?: any[];
    excel_url?: string;
    user_name?: string;
    id?: string;
    failed?: number;
    uploaded_on?: string;
};
type BulkListingPage = {
    size?: number;
    has_next?: boolean;
    total?: number;
    has_previous?: boolean;
    type?: string;
    current?: number;
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
    id?: number;
    question_set?: QuestionSet[];
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
    processing_shipments_count?: number;
    batch_id?: string;
    total_shipments_count?: number;
    successful_shipments_count?: number;
    failed_shipments_count?: number;
    company_id?: string;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    success?: string;
    uploaded_by?: string;
    data?: BulkActionDetailsDataField[];
    user_id?: string;
    error?: string[];
    failed_records?: string[];
    status?: boolean;
    uploaded_on?: string;
    message?: string;
};
type Document = {
    ds_type: string;
    url?: string;
    value: string;
    legal_name: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    password?: string;
    user?: string;
    username?: string;
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
    documents?: StoreDocuments;
    display_name: string;
    ewaybill_portal_details?: any;
    stage: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    additional_contact_details?: any;
    product_return_config?: any;
    gst_credentials: StoreGstCredentials;
    gst_number?: string;
    timing?: any[];
};
type StoreAddress = {
    email?: string;
    latitude: number;
    created_at: string;
    phone: string;
    address_category: string;
    longitude: number;
    pincode: number;
    version?: string;
    city: string;
    contact_person: string;
    address2?: string;
    updated_at: string;
    state: string;
    area?: string;
    address1: string;
    country_code: string;
    landmark?: string;
    country: string;
    address_type: string;
};
type Store = {
    is_enabled_for_recon?: boolean;
    is_active?: boolean;
    latitude: number;
    mall_name?: string;
    store_active_from?: string;
    created_at: string;
    phone: number;
    location_type: string;
    meta: StoreMeta;
    longitude: number;
    store_address_json?: StoreAddress;
    pincode: string;
    packaging_material_count?: number;
    city: string;
    brand_store_tags?: string[];
    address2?: string;
    company_id: number;
    contact_person: string;
    s_id: string;
    parent_store_id?: number;
    store_email: string;
    updated_at?: string;
    vat_no?: string;
    state: string;
    login_username: string;
    brand_id?: any;
    address1: string;
    code?: string;
    order_integration_id?: string;
    country: string;
    fulfillment_channel: string;
    is_archived?: boolean;
    mall_area?: string;
    alohomora_user_id?: number;
    name: string;
};
type BagGSTDetails = {
    cgst_tax_percentage: number;
    gst_fee: number;
    sgst_tax_percentage: number;
    gst_tax_percentage: number;
    is_default_hsn_code?: boolean;
    brand_calculated_amount: number;
    cgst_gst_fee: string;
    igst_gst_fee: string;
    sgst_gst_fee: string;
    gst_tag: string;
    tax_collected_at_source: number;
    hsn_code_id: string;
    value_of_good: number;
    igst_tax_percentage: number;
    gstin_code?: string;
    hsn_code: string;
};
type Attributes = {
    brand_name?: string;
    primary_color?: string;
    marketer_name?: string;
    marketer_address?: string;
    primary_material?: string;
    essential?: string;
    gender?: string[];
    primary_color_hex?: string;
    name?: string;
};
type Item = {
    can_cancel?: boolean;
    gender?: string;
    department_id?: number;
    l3_category?: number;
    branch_url?: string;
    size: string;
    meta?: any;
    slug_key: string;
    l2_category_id?: number;
    color?: string;
    attributes: Attributes;
    l3_category_name?: string;
    can_return?: boolean;
    l1_category?: string[];
    image: string[];
    item_id: number;
    brand_id: number;
    l2_category?: string[];
    code?: string;
    webstore_product_url?: string;
    brand: string;
    l1_category_id?: number;
    name: string;
    last_updated_at?: string;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
};
type B2BPODetails = {
    item_base_price?: number;
    partial_can_ret?: boolean;
    po_line_amount?: number;
    docker_number?: string;
    total_gst_percentage?: number;
    po_tax_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Dimensions = {
    width?: number;
    height?: number;
    is_default?: boolean;
    length?: number;
    unit?: string;
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
type Article = {
    size: string;
    code?: string;
    _id: string;
    raw_meta?: any;
    a_set?: any;
    dimensions?: Dimensions;
    esp_modified?: any;
    seller_identifier: string;
    uid: string;
    child_details?: any;
    is_set?: boolean;
    weight?: Weight;
    identifiers: Identifier;
    return_config?: ReturnConfig;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type LockData = {
    mto?: boolean;
    lock_message?: string;
    locked?: boolean;
};
type EInvoice = {
    error_code?: string;
    acknowledge_date?: string;
    irn?: string;
    acknowledge_no?: number;
    signed_qr_code?: string;
    error_message?: string;
    signed_invoice?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type BuyerDetails = {
    ajio_site_id?: string;
    city: string;
    address: string;
    state: string;
    gstin: string;
    name: string;
    pincode: number;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentMeta = {
    debug_info?: DebugInfo;
    lock_data?: LockData;
    po_number?: string;
    awb_number?: string;
    return_awb_number?: string;
    return_affiliate_order_id?: string;
    due_date?: string;
    shipment_weight?: number;
    assign_dp_from_sb?: boolean;
    dp_id?: string;
    return_affiliate_shipment_id?: string;
    return_details?: any;
    return_store_node?: number;
    dp_sort_key?: string;
    dp_name?: string;
    dp_options?: any;
    external?: any;
    fulfilment_priority_text?: string;
    ewaybill_info?: any;
    auto_trigger_dp_assignment_acf: boolean;
    einvoice_info?: EinvoiceInfo;
    forward_affiliate_order_id?: string;
    store_invoice_updated_date?: string;
    timestamp?: ShipmentTimeStamp;
    packaging_name?: string;
    box_type?: string;
    shipment_volumetric_weight?: number;
    b2b_buyer_details?: BuyerDetails;
    formatted?: Formatted;
    forward_affiliate_shipment_id?: string;
    bag_weight?: any;
    order_type?: string;
    same_store_available: boolean;
    marketplace_store_id?: string;
    weight: number;
    b2c_buyer_details?: any;
};
type PDFLinks = {
    credit_note_url?: string;
    invoice_type: string;
    label_a6?: string;
    label_pos?: string;
    invoice_a6?: string;
    label_a4?: string;
    invoice_a4?: string;
    invoice?: string;
    label?: string;
    invoice_pos?: string;
    po_invoice?: string;
    label_type: string;
    b2b?: string;
};
type AffiliateMeta = {
    loyalty_discount?: number;
    order_item_id?: string;
    size_level_total_qty?: number;
    employee_discount?: number;
    quantity?: number;
    channel_shipment_id?: string;
    channel_order_id?: string;
    is_priority?: boolean;
    coupon_code?: string;
    box_type?: string;
    due_date?: string;
};
type AffiliateDetails = {
    shipment_meta: ShipmentMeta;
    affiliate_shipment_id: string;
    affiliate_order_id: string;
    pdf_links?: PDFLinks;
    affiliate_store_id: string;
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
    company_affiliate_tag?: string;
    ad_id?: string;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    affiliate_order_id: string;
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type ArticleDetails = {
    status?: any;
};
type Brand = {
    brand_name: string;
    credit_note_expiry_days?: number;
    start_date?: string;
    invoice_prefix?: string;
    modified_on?: number;
    company: string;
    logo?: string;
    script_last_ran?: string;
    is_virtual_invoice?: boolean;
    credit_note_allowed?: boolean;
    pickup_location?: string;
    brand_id: number;
    created_on?: number;
};
type BagDetailsPlatformResponse = {
    qc_required?: any;
    tags?: string[];
    b_type?: string;
    ordering_store?: Store;
    bag_status_history?: BagStatusHistory;
    no_of_bags_order?: number;
    prices: Prices;
    parent_promo_bags?: any;
    journey_type: string;
    gst_details: BagGSTDetails;
    item: Item;
    status: BagReturnableCancelableStatus;
    shipment_id?: string;
    bag_status: BagStatusHistory[];
    seller_identifier?: string;
    meta?: BagMeta;
    bag_update_time?: number;
    article: Article;
    current_operational_status: BagStatusHistory;
    reasons?: any[];
    entity_type?: string;
    affiliate_details?: AffiliateDetails;
    line_number?: number;
    original_bag_list?: number[];
    current_status: BagStatusHistory;
    quantity?: number;
    affiliate_bag_details: AffiliateBagDetails;
    identifier?: string;
    dates?: Dates;
    article_details?: ArticleDetails;
    order_integration_id?: string;
    restore_coupon?: boolean;
    b_id: number;
    financial_breakup: FinancialBreakup[];
    display_name?: string;
    restore_promos?: any;
    operational_status?: string;
    brand: Brand;
    applied_promos?: any[];
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    size: number;
    has_next: boolean;
    page_type: string;
    item_total: number;
    current: number;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    shipment_id?: string;
    status?: number;
    error?: string;
    message?: string;
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
    mongo_article_id?: string;
    affiliate_bag_id?: string;
    bag_id?: number;
    set_id?: string;
    item_id?: string;
    fynd_order_id?: string;
    affiliate_order_id?: string;
    store_id: number;
    affiliate_id?: string;
    reason_ids?: number[];
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    id?: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    action: string;
    entities: Entities[];
    entity_type: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    is_locked?: boolean;
    bag_id?: number;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
};
type CheckResponse = {
    is_bag_locked?: boolean;
    affiliate_shipment_id?: string;
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    status?: string;
    shipment_id?: string;
    affiliate_id?: string;
    is_shipment_locked?: boolean;
    bags?: Bags[];
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    check_response?: CheckResponse[];
    message?: string;
};
type AnnouncementResponse = {
    platform_id?: string;
    to_datetime?: string;
    description?: string;
    logo_url?: string;
    created_at?: string;
    platform_name?: string;
    title?: string;
    company_id?: number;
    from_datetime?: string;
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
type Products = {
    quantity?: number;
    line_number?: number;
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
    quantity?: number;
    line_number?: number;
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
    products?: Products[];
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
    identifier: string;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    status?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
    task?: boolean;
    unlock_before_transition?: boolean;
};
type ShipmentsResponse = {
    exception?: string;
    stack_trace?: string;
    message?: string;
    meta?: any;
    identifier?: string;
    status?: number;
    final_state?: any;
    code?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    country: string;
    pincode: string;
    email: string;
    city: string;
    first_name: string;
    phone: number;
    last_name: string;
    state: string;
    address2?: string;
    address1?: string;
    mobile: number;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
};
type ArticleDetails1 = {
    dimension: any;
    quantity: number;
    attributes: any;
    weight: any;
    _id: string;
    category: any;
    brand_id: number;
};
type ShipmentDetails = {
    box_type?: string;
    dp_id?: number;
    shipments: number;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    meta?: any;
    fulfillment_id: number;
};
type ShipmentConfig = {
    identifier: string;
    location_details?: LocationDetails;
    to_pincode: string;
    source: string;
    payment_mode: string;
    journey: string;
    shipment: ShipmentDetails[];
    action: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    avl_qty: number;
    modified_on: string;
    amount_paid: number;
    price_marked: number;
    pdf_links?: MarketPlacePdf;
    quantity: number;
    affiliate_store_id: string;
    item_id: number;
    item_size: string;
    seller_identifier: string;
    unit_price: number;
    transfer_price: number;
    price_effective: number;
    identifier: any;
    company_id: number;
    _id: string;
    affiliate_meta: any;
    sku: string;
    fynd_store_id: string;
    delivery_charge: number;
    discount: number;
    hsn_code_id: string;
    store_id: number;
};
type OrderInfo = {
    cod_charges: number;
    delivery_charges: number;
    discount: number;
    billing_address: OrderUser;
    shipping_address: OrderUser;
    payment?: any;
    coupon?: string;
    items: any;
    order_value: number;
    order_priority?: OrderPriority;
    affiliate_order_id?: string;
    payment_mode: string;
    shipment?: ShipmentData;
    user: UserData;
    bags: AffiliateBag[];
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    description?: string;
    updated_at: string;
    owner: string;
    name: string;
    meta?: AffiliateAppConfigMeta[];
    created_at: string;
    token: string;
    secret: string;
    id: string;
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
    token: string;
    config?: AffiliateConfig;
    id: string;
};
type OrderConfig = {
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    create_user?: boolean;
    article_lookup?: string;
    bag_end_state?: string;
    store_lookup?: string;
    affiliate: Affiliate;
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
    slug: string;
    description: string;
    display_text: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type PostHistoryData = {
    user_name: string;
    message: string;
};
type PostHistoryFilters = {
    shipment_id: string;
    line_number?: string;
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
    l3_detail?: string;
    bag_id?: number;
    createdat: string;
    l2_detail?: string;
    ticket_url?: string;
    user: string;
    ticket_id?: string;
    type: string;
    l1_detail?: string;
    message: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    phone_number: number;
    brand_name: string;
    amount_paid: number;
    customer_name: string;
    country_code: string;
    shipment_id: number;
    payment_mode: string;
    order_id: string;
    message: string;
};
type SendSmsPayload = {
    slug: string;
    data?: SmsDataPayload;
    bag_id: number;
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
    remarks?: string;
    meta: Meta;
    bag_list?: number[];
    shipment_id?: string;
    status?: string;
    id: number;
};
type OrderStatusData = {
    order_details: OrderDetails;
    shipment_details?: ShipmentDetail[];
    errors?: string[];
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    dp_id: number;
    shipment_ids?: string[];
    order_type: string;
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type ShippingInfo = {
    customer_code?: string;
    first_name: string;
    shipping_type?: string;
    alternate_email?: string;
    external_customer_code?: string;
    gender?: string;
    city: string;
    country_code?: string;
    geo_location?: any;
    slot?: any[];
    country: string;
    house_no?: string;
    floor_no?: string;
    landmark?: string;
    alternate_mobile_number?: string;
    middle_name?: string;
    pincode: string;
    primary_email: string;
    title?: string;
    last_name?: string;
    address_type?: string;
    state: string;
    primary_mobile_number: string;
    address2?: string;
    address1: string;
    state_code?: string;
};
type Tax = {
    name: string;
    rate: number;
    breakup?: any[];
    amount: any;
};
type Charge = {
    name: string;
    tax?: Tax;
    amount: any;
    type: string;
    code?: string;
};
type LineItem = {
    charges?: Charge[];
    seller_identifier: string;
    meta?: any;
    external_line_id?: string;
    quantity?: number;
    custom_messasge?: string;
};
type ProcessingDates = {
    dispatch_by_date?: string;
    confirm_by_date?: string;
    dp_pickup_slot?: any;
    pack_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_after_date?: string;
};
type Shipment = {
    line_items: LineItem[];
    meta?: any;
    location_id: number;
    processing_dates?: ProcessingDates;
    external_shipment_id?: string;
    priority?: number;
};
type BillingInfo = {
    customer_code?: string;
    first_name: string;
    alternate_email?: string;
    external_customer_code?: string;
    gender?: string;
    city: string;
    country_code?: string;
    country: string;
    house_no?: string;
    floor_no?: string;
    alternate_mobile_number?: string;
    middle_name?: string;
    pincode: string;
    primary_email: string;
    title?: string;
    last_name?: string;
    state: string;
    primary_mobile_number: string;
    address2?: string;
    address1: string;
    state_code?: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type PaymentMethod = {
    refund_by: string;
    transaction_data?: any;
    collect_by: string;
    name: string;
    meta?: any;
    amount: number;
    mode: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type CreateOrderAPI = {
    shipping_info: ShippingInfo;
    shipments: Shipment[];
    external_creation_date?: string;
    charges?: Charge[];
    external_order_id?: string;
    meta?: any;
    billing_info: BillingInfo;
    currency_info?: any;
    tax_info?: TaxInfo;
    payment_info: PaymentInfo;
};
type CreateOrderErrorReponse = {
    exception?: string;
    stack_trace?: string;
    info?: any;
    request_id?: string;
    message: string;
    meta?: string;
    status: number;
    code?: string;
};
type PaymentMethods = {
    mode?: string;
    collect_by?: string;
    refund_by?: string;
};
type CreateChannelPaymentInfo = {
    mode_of_payment?: string;
    source?: string;
    payment_methods?: PaymentMethods[];
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    logo_url?: any;
    shipment_assignment?: string;
    payment_info?: CreateChannelPaymentInfo;
    dp_configuration?: DpConfiguration;
    lock_states?: string[];
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
    success?: boolean;
    message?: string[];
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    start_date: string;
    order_details?: FyndOrderIdList[];
    end_date: string;
    mobile: number;
};
type GetSearchWordsData = {
    uid?: string;
    _custom_json?: any;
    result?: any;
    app_id?: string;
    is_active?: boolean;
    words?: string[];
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    result: SearchKeywordResult;
    app_id?: string;
    is_active?: boolean;
    words?: string[];
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    results?: any[];
    _custom_json?: any;
    uid?: string;
    app_id?: string;
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type Media = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type AutocompletePageAction = {
    type?: string;
    url?: string;
    params?: any;
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
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    words?: string[];
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    _custom_json?: any;
    app_id?: string;
    words?: string[];
};
type ProductBundleItem = {
    min_quantity: number;
    allow_remove?: boolean;
    product_uid: number;
    max_quantity: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
};
type GetProductBundleCreateResponse = {
    page_visibility?: string[];
    products: ProductBundleItem[];
    created_on?: string;
    company_id?: number;
    choice: string;
    same_store_assignment?: boolean;
    modified_on?: string;
    meta?: any;
    created_by?: any;
    is_active: boolean;
    slug: string;
    name: string;
    logo?: string;
    id?: string;
    modified_by?: any;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    page_visibility?: string[];
    products: ProductBundleItem[];
    created_on?: string;
    company_id?: number;
    choice: string;
    same_store_assignment?: boolean;
    modified_on?: string;
    meta?: any;
    created_by?: any;
    is_active: boolean;
    slug: string;
    name: string;
    logo?: string;
    modified_by?: any;
};
type Size = {
    quantity?: number;
    display?: string;
    value?: string;
    is_available?: boolean;
};
type Price = {
    max_effective?: number;
    max_marked?: number;
    currency?: string;
    min_marked?: number;
    min_effective?: number;
};
type LimitedProductData = {
    uid?: number;
    sizes?: string[];
    item_code?: string;
    identifier?: any;
    attributes?: any;
    price?: any;
    images?: string[];
    country_of_origin?: string;
    slug?: string;
    name?: string;
    quantity?: number;
    short_description?: string;
};
type GetProducts = {
    min_quantity?: number;
    allow_remove?: boolean;
    sizes?: Size[];
    price?: Price;
    product_uid?: number;
    product_details?: LimitedProductData;
    max_quantity?: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
};
type GetProductBundleResponse = {
    page_visibility?: string[];
    products?: GetProducts[];
    company_id?: number;
    choice?: string;
    same_store_assignment?: boolean;
    meta?: any;
    is_active?: boolean;
    slug?: string;
    name?: string;
    logo?: string;
};
type ProductBundleUpdateRequest = {
    page_visibility?: string[];
    products: ProductBundleItem[];
    company_id?: number;
    choice: string;
    same_store_assignment?: boolean;
    modified_on?: string;
    meta?: any;
    is_active: boolean;
    slug: string;
    name: string;
    logo?: string;
    modified_by?: any;
};
type GetMultiSizeGuide = {
    modified_by?: any;
    created_on?: string;
    company_id?: number;
    created_by?: any;
    modified_on?: string;
    title?: string;
    _id?: string;
    tag?: string;
    description?: string;
    brand_id?: number;
    guide?: any;
    name?: string;
    active?: boolean;
    subtitle?: string;
    image?: string;
};
type ListSizeGuide = {
    page?: any;
    items?: GetMultiSizeGuide[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    modified_by?: any;
    created_on?: string;
    company_id?: number;
    created_by?: any;
    modified_on?: string;
    title: string;
    id?: string;
    tag?: string;
    description?: string;
    brand_id?: number;
    guide?: Guide;
    name: string;
    active?: boolean;
    subtitle?: string;
    image?: string;
};
type SizeGuideResponse = {
    created_on?: string;
    modified_by?: any;
    created_by?: any;
    company_id?: number;
    subtitle?: string;
    title?: string;
    id?: string;
    guide?: any;
    tag?: string;
    brand_id?: number;
    name?: string;
    active?: boolean;
    modified_on?: string;
};
type MOQData = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type SEOData = {
    title?: any;
    description?: any;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    is_cod?: boolean;
    moq?: MOQData;
    seo?: SEOData;
    is_gift?: boolean;
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
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type ApplicationItemMeta = {
    _custom_meta?: MetaFields[];
    _custom_json?: any;
    alt_text?: any;
    is_cod?: boolean;
    moq?: ApplicationItemMOQ;
    seo?: ApplicationItemSEO;
    is_gift?: boolean;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    values?: any[];
    data: any[];
    condition?: any[];
};
type PageResponseType = {
    current: number;
    total_count: number;
    has_next: boolean;
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
    priority: number;
    is_active: boolean;
    key?: string;
    display_type: string;
    slug?: string;
    name: string;
    logo?: string;
    unit?: string;
};
type AppConfigurationDetail = {
    priority: number;
    app_id: string;
    attributes?: AttributeDetailsGroup[];
    is_active: boolean;
    template_slugs?: string[];
    slug: string;
    is_default: boolean;
    name?: string;
    logo?: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    priority: number;
    app_id: string;
    default_key: string;
    is_active: boolean;
    key: string;
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
type MetaDataListingFilterMetaResponse = {
    key?: string;
    display?: string;
    filter_types?: string[];
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
    display?: string;
    start?: number;
};
type ConfigurationListingFilterValue = {
    condition?: string;
    map_values?: any[];
    value?: string;
    sort?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map?: any;
};
type ConfigurationListingFilterConfig = {
    priority: number;
    display_name?: string;
    is_active: boolean;
    key: string;
    type: string;
    value_config?: ConfigurationListingFilterValue;
    name?: string;
    logo?: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    priority: number;
    is_active: boolean;
    key: string;
    name?: string;
    logo?: string;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    priority: number;
    is_active: boolean;
    key: string;
    display_type: string;
    size: ProductSize;
    name: string;
    logo?: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    priority: number;
    title?: string;
    is_active: boolean;
    key: string;
    size?: ProductSize;
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
type AppCatalogConfiguration = {
    created_on?: string;
    modified_by?: any;
    listing?: ConfigurationListing;
    created_by?: any;
    app_id: string;
    config_type: string;
    config_id?: string;
    type?: string;
    id?: string;
    modified_on?: string;
    product?: ConfigurationProduct;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    created_on?: string;
    modified_by?: any;
    listing?: ConfigurationListing;
    created_by?: any;
    app_id: string;
    config_type: string;
    config_id?: string;
    type?: string;
    modified_on?: string;
    product?: ConfigurationProduct;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    app_id: string;
    config_type: string;
    config_id?: string;
    id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersKey = {
    display: string;
    kind?: string;
    name: string;
    logo?: string;
    operators?: string[];
};
type ProductFiltersValue = {
    max?: number;
    display: string;
    selected_max?: number;
    min?: number;
    query_format?: string;
    value: any;
    selected_min?: number;
    currency_code?: string;
    count?: number;
    currency_symbol?: string;
    is_selected: boolean;
    display_format?: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type ProductSortOn = {
    name?: string;
    value?: string;
    is_selected?: boolean;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
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
type BannerImage = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type Media1 = {
    type?: string;
    meta?: any;
    url: string;
};
type CollectionQuery = {
    value: any[];
    attribute: string;
    op: string;
};
type GetCollectionDetailNest = {
    badge?: any;
    action?: Action;
    banners?: ImageUrls;
    name?: string;
    _schedule?: any;
    cron?: any;
    app_id?: string;
    visible_facets_keys?: string[];
    slug?: string;
    is_active?: boolean;
    priority?: number;
    uid?: string;
    meta?: any;
    allow_facets?: boolean;
    allow_sort?: boolean;
    description?: string;
    tag?: string[];
    type?: string;
    logo?: Media1;
    query?: CollectionQuery[];
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    page?: Page;
    items?: GetCollectionDetailNest[];
};
type UserInfo = {
    username?: string;
    uid?: string;
    user_id?: string;
    email?: string;
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
type CollectionSchedule = {
    duration?: number;
    next_schedule?: NextSchedule[];
    cron?: string;
    end?: string;
    start?: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CreateCollection = {
    tags?: string[];
    created_by?: UserInfo;
    badge?: CollectionBadge;
    banners: CollectionBanner;
    name: string;
    _schedule?: CollectionSchedule;
    _custom_json?: any;
    app_id: string;
    visible_facets_keys?: string[];
    seo?: SeoDetail;
    slug: string;
    modified_by?: UserInfo;
    is_active?: boolean;
    published?: boolean;
    _locale_language?: any;
    sort_on?: string;
    is_visible?: boolean;
    priority?: number;
    meta?: any;
    allow_facets?: boolean;
    allow_sort?: boolean;
    description?: string;
    type: string;
    logo: CollectionImage;
    query?: CollectionQuery[];
};
type CollectionCreateResponse = {
    badge?: any;
    banners?: ImageUrls;
    name?: string;
    _schedule?: any;
    cron?: any;
    app_id?: string;
    visible_facets_keys?: string[];
    slug?: string;
    is_active?: boolean;
    sort_on?: string;
    priority?: number;
    meta?: any;
    allow_facets?: boolean;
    allow_sort?: boolean;
    description?: string;
    tag?: string[];
    type?: string;
    logo?: BannerImage;
    query?: CollectionQuery[];
};
type CollectionDetailResponse = {
    badge?: any;
    banners?: ImageUrls;
    name?: string;
    _schedule?: any;
    cron?: any;
    app_id?: string;
    visible_facets_keys?: string[];
    slug?: string;
    is_active?: boolean;
    priority?: number;
    uid?: string;
    meta?: any;
    allow_facets?: boolean;
    allow_sort?: boolean;
    description?: string;
    tag?: string[];
    type?: string;
    logo?: Media1;
    query?: CollectionQuery[];
};
type UpdateCollection = {
    tags?: string[];
    badge?: CollectionBadge;
    banners?: CollectionBanner;
    name?: string;
    _schedule?: CollectionSchedule;
    _custom_json?: any;
    visible_facets_keys?: string[];
    seo?: SeoDetail;
    slug?: string;
    modified_by?: UserInfo;
    is_active?: boolean;
    published?: boolean;
    _locale_language?: any;
    sort_on?: string;
    is_visible?: boolean;
    priority?: number;
    meta?: any;
    allow_facets?: boolean;
    allow_sort?: boolean;
    description?: string;
    type?: string;
    logo?: CollectionImage;
    query?: CollectionQuery[];
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
type Price1 = {
    max?: number;
    currency_code?: string;
    currency_symbol?: string;
    min?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductBrand = {
    uid?: number;
    name?: string;
    logo?: Media1;
    action?: Action;
};
type ProductListingDetail = {
    item_code?: string;
    promo_meta?: any;
    product_online_date?: string;
    medias?: Media1[];
    has_variant?: boolean;
    similars?: string[];
    name?: string;
    teaser_tag?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    slug: string;
    tryouts?: string[];
    color?: string;
    item_type?: string;
    sellable?: boolean;
    discount?: string;
    attributes?: any;
    rating_count?: number;
    price?: ProductListingPrice;
    brand?: ProductBrand;
    rating?: number;
    uid?: number;
    highlights?: string[];
    image_nature?: string;
    description?: string;
    type?: string;
    short_description?: string;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    page?: Page;
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
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
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    count?: number;
    sellable_count?: number;
};
type CatalogInsightBrand = {
    total_articles?: number;
    article_freshness?: number;
    available_sizes?: number;
    total_sizes?: number;
    name?: string;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    platform?: string;
    company_id?: number;
    brand_ids?: number[];
    opt_level: string;
    enabled?: boolean;
    store_ids?: number[];
};
type CompanyOptIn = {
    platform: string;
    created_on: number;
    modified_by?: any;
    company_id: number;
    created_by?: any;
    brand_ids: number[];
    opt_level: string;
    enabled: boolean;
    store_ids: number[];
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
    brand_name?: string;
    total_article?: number;
    brand_id?: number;
    company_id?: number;
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
    uid?: number;
    display_name?: string;
    created_on?: string;
    store_code?: string;
    additional_contacts?: any[];
    company_id?: number;
    documents?: any[];
    manager?: any;
    store_type?: string;
    timing?: any;
    name?: string;
    address?: any;
    modified_on?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    multi?: boolean;
    range?: AttributeSchemaRange;
    mandatory?: boolean;
    allowed_values?: string[];
    format?: string;
    type: string;
};
type GenderDetail = {
    details?: AttributeMasterDetails;
    is_nested?: boolean;
    meta?: AttributeMasterMeta;
    filters?: AttributeMasterFilter;
    departments?: string[];
    description?: string;
    slug?: string;
    name?: string;
    enabled_for_end_consumer?: boolean;
    schema?: AttributeMaster;
    logo?: string;
    id?: string;
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
    username?: string;
    uid?: string;
    _id?: string;
    user_id?: string;
    contact?: string;
};
type GetDepartment = {
    uid?: number;
    synonyms?: string[];
    item_type?: string;
    created_on?: string;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    is_active?: boolean;
    page_size?: number;
    priority_order?: number;
    slug?: string;
    search?: string;
    name?: string;
    logo?: string;
    page_no?: number;
    modified_on?: string;
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
    uid?: number;
    synonyms?: string[];
    _custom_json?: any;
    tags?: string[];
    _cls?: string;
    is_active?: boolean;
    platforms?: any;
    priority_order: number;
    slug?: string;
    name: string;
    logo: string;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    contact?: string;
    username: string;
    super_user?: boolean;
    user_id: string;
};
type DepartmentModel = {
    uid?: number;
    synonyms?: any[];
    _custom_json?: any;
    created_on: string;
    modified_by?: UserDetail;
    created_by?: UserDetail;
    verified_by?: UserDetail;
    _cls?: any;
    is_active?: boolean;
    _id?: any;
    priority_order: number;
    verified_on?: string;
    slug?: any;
    name: any;
    logo: any;
    modified_on: string;
};
type ProductTemplate = {
    created_on?: string;
    created_by?: any;
    categories?: string[];
    modified_on?: string;
    attributes?: string[];
    is_active?: boolean;
    departments?: string[];
    attributes_schema?: any[];
    description?: string;
    tag?: string;
    slug: string;
    is_expirable?: boolean;
    is_physical: boolean;
    name?: string;
    logo?: string;
    is_archived?: boolean;
    modified_by?: any;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    item_code?: any;
    hsn_code?: any;
    tags?: any;
    custom_order?: any;
    name?: any;
    teaser_tag?: any;
    sizes?: any;
    no_of_boxes?: any;
    trader_type?: any;
    media?: any;
    brand_uid?: any;
    product_group_tag?: any;
    command?: any;
    slug?: any;
    size_guide?: any;
    item_type?: any;
    product_publish?: any;
    multi_size?: any;
    is_active?: any;
    category_slug?: any;
    return_config?: any;
    variants?: any;
    highlights?: any;
    country_of_origin?: any;
    trader?: any;
    is_dependent?: any;
    description?: any;
    currency?: any;
    short_description?: any;
};
type GlobalValidation = {
    definitions?: any;
    title?: string;
    properties?: Properties;
    required?: string[];
    description?: string;
    type?: string;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    categories?: string[];
    attributes?: string[];
    is_active?: boolean;
    departments?: string[];
    id?: string;
    attributes_schema?: any[];
    description?: string;
    tag?: string;
    slug: string;
    is_expirable?: boolean;
    is_physical: boolean;
    name?: string;
    logo?: string;
    is_archived?: boolean;
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
    task_id?: string;
    data?: ProductDownloadItemsData;
    created_by?: VerifiedBy;
    url?: string;
    trigger_on?: string;
    template_tags?: any;
    completed_on?: string;
    seller_id?: number;
    id?: string;
    status?: string;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
};
type Media2 = {
    landscape: string;
    logo: string;
    portrait: string;
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
type Category = {
    uid?: number;
    hierarchy?: Hierarchy[];
    synonyms?: string[];
    priority?: number;
    created_on?: string;
    created_by?: any;
    modified_on?: string;
    media?: Media2;
    is_active: boolean;
    departments: number[];
    slug?: string;
    marketplaces?: CategoryMapping;
    tryouts?: string[];
    level: number;
    name: string;
    id?: string;
    modified_by?: any;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    hierarchy?: Hierarchy[];
    synonyms?: string[];
    priority?: number;
    media?: Media2;
    is_active: boolean;
    departments: number[];
    slug?: string;
    marketplaces?: CategoryMapping;
    tryouts?: string[];
    level: number;
    name: string;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
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
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Logo = {
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
type Image = {
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
type Product = {
    item_code?: string;
    hsn_code?: string;
    tags?: string[];
    category?: any;
    created_by?: any;
    stage?: string;
    pending?: string;
    custom_order?: any;
    is_set?: boolean;
    verified_on?: string;
    name?: string;
    teaser_tag?: any;
    _custom_json?: any;
    sizes?: any[];
    variant_media?: any;
    no_of_boxes?: number;
    company_id?: number;
    all_identifiers?: string[];
    media?: Media1[];
    brand_uid?: number;
    category_uid?: number;
    product_group_tag?: string[];
    all_company_ids?: number[];
    moq?: any;
    departments?: number[];
    slug?: string;
    tax_identifier?: any;
    color?: string;
    modified_by?: any;
    size_guide?: string;
    item_type?: string;
    net_quantity?: NetQuantityResponse;
    product_publish?: ProductPublished;
    verified_by?: VerifiedBy;
    attributes?: any;
    multi_size?: boolean;
    is_active?: boolean;
    all_sizes?: any[];
    category_slug?: string;
    return_config?: ReturnConfigResponse;
    brand?: Brand;
    is_physical?: boolean;
    is_expirable?: boolean;
    id?: string;
    template_tag?: string;
    l3_mapping?: string[];
    uid?: number;
    created_on?: string;
    variants?: any;
    variant_group?: any;
    is_image_less_product?: boolean;
    highlights?: string[];
    country_of_origin?: string;
    images?: Image[];
    trader?: any[];
    image_nature?: string;
    is_dependent?: boolean;
    description?: string;
    currency?: string;
    primary_color?: string;
    short_description?: string;
    modified_on?: string;
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
type TeaserTag = {
    tag?: string;
    url?: string;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    hsn_code?: string;
    reporting_hsn?: string;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type Trader = {
    type?: string;
    name: any;
    address?: string[];
};
type ProductCreateUpdateSchemaV2 = {
    item_code: string;
    tags?: string[];
    action?: string;
    custom_order?: CustomOrder;
    is_set?: boolean;
    name: string;
    teaser_tag?: TeaserTag;
    _custom_json?: any;
    variant_media?: any;
    no_of_boxes?: number;
    sizes: any[];
    company_id: number;
    media?: Media1[];
    brand_uid: number;
    product_group_tag?: string[];
    requester?: string;
    change_request_id?: any;
    departments: number[];
    slug: string;
    tax_identifier: TaxIdentifier;
    size_guide?: string;
    item_type: string;
    net_quantity?: NetQuantity;
    product_publish?: ProductPublish;
    attributes?: any;
    is_active?: boolean;
    multi_size?: boolean;
    category_slug: string;
    return_config: ReturnConfig;
    template_tag: string;
    uid?: number;
    variants?: any;
    variant_group?: any;
    is_image_less_product?: boolean;
    highlights?: string[];
    bulk_job_id?: string;
    country_of_origin: string;
    trader: Trader[];
    is_dependent?: boolean;
    description?: string;
    currency: string;
    short_description?: string;
};
type ProductVariants = {
    uid?: number;
    item_code?: string;
    media?: Media1[];
    brand_uid?: number;
    category_uid?: number;
    name?: string;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    raw_key?: string;
    tags?: string[];
    created_by?: any;
    suggestion?: string;
    name?: string;
    details: AttributeMasterDetails;
    is_nested?: boolean;
    departments: string[];
    filters: AttributeMasterFilter;
    slug: string;
    schema: AttributeMaster;
    modified_by?: any;
    synonyms?: any;
    enabled_for_end_consumer?: boolean;
    variant?: boolean;
    unit?: string;
    created_on?: string;
    description?: string;
    logo?: string;
    modified_on?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ProductCreateUpdate = {
    item_code: any;
    tags?: string[];
    action?: string;
    custom_order?: CustomOrder;
    is_set?: boolean;
    name: any;
    teaser_tag?: TeaserTag;
    _custom_json?: any;
    variant_media?: any;
    no_of_boxes?: number;
    company_id: number;
    media?: Media1[];
    brand_uid: number;
    product_group_tag?: string[];
    requester?: string;
    change_request_id?: any;
    departments: number[];
    slug: string;
    tax_identifier: TaxIdentifier;
    size_guide?: string;
    item_type: string;
    net_quantity?: NetQuantity;
    product_publish?: ProductPublish;
    is_active?: boolean;
    multi_size?: boolean;
    category_slug: string;
    return_config: ReturnConfig;
    template_tag: string;
    uid?: number;
    variants?: any;
    variant_group?: any;
    is_image_less_product?: boolean;
    highlights?: string[];
    bulk_job_id?: string;
    country_of_origin: string;
    trader: Trader[];
    is_dependent?: boolean;
    description?: string;
    currency: string;
    short_description?: string;
};
type ValidateIdentifier = {
    gtin_type: string;
    gtin_value: string;
    primary?: boolean;
};
type AllSizes = {
    item_weight: number;
    item_dimensions_unit_of_measure: string;
    item_weight_unit_of_measure: any;
    identifiers?: ValidateIdentifier[];
    item_width: number;
    item_height: number;
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
    username?: string;
    full_name?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    created_on?: string;
    modified_by?: UserDetail1;
    company_id?: number;
    stage?: string;
    created_by?: UserDetail1;
    succeed?: number;
    template?: ProductTemplate;
    file_path?: string;
    is_active?: boolean;
    failed_records?: string[];
    total?: number;
    cancelled_records?: string[];
    cancelled?: number;
    failed?: number;
    modified_on?: string;
    template_tag?: string;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    username?: string;
    uid?: string;
    user_id?: string;
    email?: string;
};
type BulkJob = {
    created_on: string;
    modified_by?: UserInfo1;
    created_by?: UserInfo1;
    company_id: number;
    succeed?: number;
    stage?: string;
    tracking_url?: string;
    file_path?: string;
    is_active?: boolean;
    failed_records?: any[];
    custom_template_tag?: string;
    total?: number;
    cancelled_records?: any[];
    cancelled?: number;
    failed?: number;
    modified_on?: string;
    template_tag?: string;
};
type BulkResponse = {
    created_on: string;
    modified_by?: UserInfo1;
    created_by?: UserInfo1;
    batch_id: string;
    is_active?: boolean;
    modified_on?: string;
};
type BulkProductRequest = {
    batch_id: string;
    data: any[];
    company_id: number;
    template_tag: string;
};
type ProductTagsViewResponse = {
    items?: string[];
};
type UserCommon = {
    company_id?: number;
    username?: string;
    user_id?: string;
};
type Items = {
    created_on?: string;
    modified_on?: string;
    created_by?: UserCommon;
    succeed?: number;
    stage?: string;
    company_id?: number;
    tracking_url?: string;
    file_path?: string;
    failed_records?: string[];
    is_active?: boolean;
    retry?: number;
    id?: string;
    total?: number;
    cancelled_records?: string[];
    cancelled?: number;
    failed?: number;
    modified_by?: UserCommon;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
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
    uid?: string;
    store?: any;
    item_id?: number;
    identifiers?: any;
    sellable_quantity?: number;
    price?: number;
    price_effective?: number;
    currency?: string;
    seller_identifier?: string;
    inventory_updated_on?: string;
    quantity?: number;
    price_transfer?: number;
    size?: string;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type ItemQuery = {
    uid?: number;
    item_code?: string;
    brand_uid?: number;
};
type GTIN = {
    gtin_type: string;
    gtin_value: any;
    primary?: boolean;
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
type InvSize = {
    item_weight?: number;
    item_dimensions_unit_of_measure?: string;
    item_weight_unit_of_measure?: string;
    store_code: string;
    expiration_date?: string;
    identifiers: GTIN[];
    price?: number;
    item_width?: number;
    price_effective: number;
    item_length?: number;
    is_set?: boolean;
    item_height?: number;
    currency: string;
    set?: InventorySet;
    size: any;
    quantity: number;
    price_transfer?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type ManufacturerResponse = {
    name: string;
    address: string;
    is_default: boolean;
};
type PriceMeta = {
    updated_at?: string;
    effective: number;
    transfer: number;
    tp_notes?: any;
    currency: string;
    marked: number;
};
type ReturnConfig1 = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type BrandMeta = {
    name: string;
    id: number;
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
type CompanyMeta = {
    id: number;
};
type Trader1 = {
    type: string;
    name: string;
    address: string[];
};
type DimensionResponse = {
    height: number;
    length: number;
    width: number;
    is_default: boolean;
    unit: string;
};
type InventorySellerResponse = {
    tags?: string[];
    created_by?: UserSerializer;
    stage?: string;
    expiration_date?: string;
    fynd_meta?: any;
    raw_meta?: any;
    is_set?: boolean;
    fragile: boolean;
    seller_identifier: string;
    size: string;
    weight: WeightResponse;
    manufacturer: ManufacturerResponse;
    _custom_json?: any;
    track_inventory?: boolean;
    store: StoreMeta;
    item_id: number;
    trace_id?: string;
    total_quantity: number;
    tax_identifier?: any;
    modified_by?: UserSerializer;
    price: PriceMeta;
    is_active?: boolean;
    return_config?: ReturnConfig1;
    brand: BrandMeta;
    quantities?: Quantities;
    set?: InventorySet;
    fynd_article_code: string;
    uid: string;
    identifier: any;
    meta?: any;
    fynd_item_code: string;
    company: CompanyMeta;
    trader?: Trader1[];
    country_of_origin: string;
    added_on_store?: string;
    dimension: DimensionResponse;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    created_on?: string;
    company_id?: number;
    created_by?: any;
    modified_on?: string;
    stage?: string;
    succeed?: number;
    file_path?: string;
    failed_records?: string[];
    id?: string;
    is_active?: boolean;
    total?: number;
    cancelled_records?: string[];
    cancelled?: number;
    failed?: number;
    modified_by?: any;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    quantity?: number;
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    item_weight_unit_of_measure?: string;
    tags?: string[];
    expiration_date?: string;
    trace_id?: string;
    price?: number;
    price_effective?: number;
    currency?: string;
    total_quantity?: number;
    seller_identifier: string;
    price_marked?: number;
};
type InventoryBulkRequest = {
    batch_id: string;
    sizes: InventoryJobPayload[];
    company_id: number;
    user?: any;
};
type InventoryExportQuantityFilter = {
    max?: number;
    min?: number;
    operators: string;
};
type InventoryExportAdvanceOption = {
    to_date?: string;
    from_date?: string;
    brand_ids?: number[];
    notification?: boolean;
    quantity?: InventoryExportQuantityFilter;
    store_ids?: number[];
};
type InventoryExportJob = {
    notification_emails?: string[];
    task_id: string;
    url?: string;
    filters?: InventoryExportAdvanceOption;
    type: string;
    completed_on?: string;
    seller_id: number;
    status?: string;
};
type InventoryExportFilter = {
    brand_ids?: number[];
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    store_ids?: number[];
    to_date?: string;
};
type InventoryExportRequest = {
    type?: string;
    filters: InventoryExportFilter;
    data?: string[];
    notification_emails?: string[];
};
type InventoryExportResponse = {
    request_params?: any;
    task_id: string;
    created_on?: string;
    trigger_on?: string;
    _id?: string;
    seller_id: number;
    status?: string;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type ManufacturerResponse1 = {
    name?: string;
    address?: string;
    is_default?: boolean;
};
type ArticleStoreResponse = {
    uid?: number;
    name?: string;
    store_code?: string;
    store_type?: string;
};
type PriceArticle = {
    effective?: number;
    transfer?: number;
    tp_notes?: any;
    currency?: string;
    marked?: number;
};
type ReturnConfig2 = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
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
type CompanyMeta1 = {
    id?: number;
};
type Trader2 = {
    type?: string;
    name?: string;
    address?: string[];
};
type DimensionResponse1 = {
    width?: number;
    height?: number;
    length?: number;
    unit?: string;
};
type GetInventories = {
    tags?: string[];
    created_by?: UserSerializer;
    stage?: string;
    expiration_date?: string;
    is_set?: boolean;
    seller_identifier?: string;
    size?: string;
    weight?: WeightResponse1;
    manufacturer?: ManufacturerResponse1;
    track_inventory?: boolean;
    store?: ArticleStoreResponse;
    item_id?: number;
    trace_id?: string;
    total_quantity?: number;
    tax_identifier?: any;
    inventory_updated_on?: string;
    modified_by?: UserSerializer;
    price?: PriceArticle;
    platforms?: any;
    return_config?: ReturnConfig2;
    brand?: BrandMeta1;
    quantities?: QuantitiesArticle;
    id?: string;
    uid?: string;
    identifier?: any;
    company?: CompanyMeta1;
    country_of_origin?: string;
    trader?: Trader2[];
    date_meta?: DateMeta;
    dimension?: DimensionResponse1;
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
    multivalues?: boolean;
    data?: FilerList[];
};
type InventoryPayload = {
    tags?: string[];
    trace_id?: string;
    expiration_date?: string;
    price_effective?: number;
    total_quantity?: number;
    seller_identifier: string;
    price_marked?: number;
    store_id: number;
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
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    hs2_code?: string;
    hsn_code?: string;
    company_id?: number;
    tax2?: number;
    tax1?: number;
    threshold2?: number;
    id?: string;
    tax_on_mrp?: boolean;
    threshold1?: number;
    tax_on_esp?: boolean;
    modified_on?: string;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    uid?: number;
    hs2_code: string;
    hsn_code: string;
    company_id: number;
    tax2?: number;
    tax1: number;
    threshold2?: number;
    is_active?: boolean;
    tax_on_mrp: boolean;
    threshold1: number;
    tax_on_esp?: boolean;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type PageResponse = {
    has_next?: boolean;
    current?: string;
    item_total?: number;
    size?: number;
    has_previous?: boolean;
};
type TaxSlab = {
    threshold: number;
    cess?: number;
    rate: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    reporting_hsn: string;
    hsn_code: string;
    created_on?: string;
    created_by?: any;
    modified_on?: string;
    country_code: string;
    taxes: TaxSlab[];
    hsn_code_id?: string;
    description: string;
    type: string;
    modified_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    uid?: number;
    discount?: string;
    action?: Action;
    banners?: ImageUrls;
    departments?: string[];
    slug?: string;
    name?: string;
    logo?: Media;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    uid?: number;
    priority_order?: number;
    slug?: string;
    name?: string;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
type ThirdLevelChild = {
    uid?: number;
    _custom_json?: any;
    childs?: any[];
    action?: Action;
    banners?: ImageUrls;
    slug?: string;
    name?: string;
};
type SecondLevelChild = {
    uid?: number;
    _custom_json?: any;
    childs?: ThirdLevelChild[];
    action?: Action;
    banners?: ImageUrls;
    slug?: string;
    name?: string;
};
type Child = {
    uid?: number;
    _custom_json?: any;
    childs?: SecondLevelChild[];
    action?: Action;
    banners?: ImageUrls;
    slug?: string;
    name?: string;
};
type CategoryItems = {
    uid?: number;
    childs?: Child[];
    action?: Action;
    banners?: ImageUrls;
    slug?: string;
    name?: string;
};
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
};
type CategoryListingResponse = {
    departments?: DepartmentIdentifier[];
    data?: DepartmentCategoryTree[];
};
type ApplicationProductListingResponse = {
    page: Page;
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    operators?: any;
};
type ProductDetail = {
    item_code?: string;
    promo_meta?: any;
    product_online_date?: string;
    medias?: Media1[];
    has_variant?: boolean;
    similars?: string[];
    name?: string;
    teaser_tag?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    slug: string;
    tryouts?: string[];
    color?: string;
    item_type?: string;
    attributes?: any;
    rating_count?: number;
    brand?: ProductBrand;
    rating?: number;
    uid?: number;
    highlights?: string[];
    image_nature?: string;
    description?: string;
    type?: string;
    short_description?: string;
};
type InventoryPage = {
    has_next?: boolean;
    next_id?: string;
    item_total: number;
    type: string;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    user_id?: string;
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
type GetAddressSerializer = {
    address1?: string;
    latitude?: number;
    longitude?: number;
    pincode?: number;
    state?: string;
    landmark?: string;
    country_code?: string;
    city?: string;
    address2?: string;
    country?: string;
    address_type?: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type InvoiceCredSerializer = {
    username?: string;
    password?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type UserSerializer2 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetCompanySerializer = {
    uid?: number;
    addresses?: GetAddressSerializer[];
    created_on?: string;
    modified_by?: UserSerializer2;
    verified_by?: UserSerializer2;
    created_by?: UserSerializer2;
    stage?: string;
    company_type?: string;
    verified_on?: string;
    reject_reason?: string;
    name?: string;
    business_type?: string;
    modified_on?: string;
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
type GetLocationSerializer = {
    store_code?: string;
    created_by?: UserSerializer1;
    code: string;
    stage?: string;
    manager?: LocationManagerSerializer;
    verified_on?: string;
    name: string;
    address: GetAddressSerializer;
    _custom_json?: any;
    documents?: Document[];
    warnings?: any;
    product_return_config?: ProductReturnConfigSerializer;
    contact_numbers?: SellerPhoneNumber[];
    modified_by?: UserSerializer1;
    integration_type?: LocationIntegrationType;
    gst_credentials?: InvoiceDetailsSerializer;
    verified_by?: UserSerializer1;
    notification_emails?: string[];
    uid?: number;
    display_name: string;
    created_on?: string;
    company?: GetCompanySerializer;
    store_type?: string;
    timing?: LocationDayWiseSerializer[];
    phone_number?: string;
    modified_on?: string;
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
    uid: number;
    _custom_json?: any;
    app_id: string;
    is_active?: boolean;
    name?: string;
    logo?: string;
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
type CompanyTaxesSerializer = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
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
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type GetCompanyProfileSerializerResponse = {
    uid: number;
    created_by?: UserSerializer;
    taxes?: CompanyTaxesSerializer[];
    business_info?: string;
    warnings?: any;
    business_type: string;
    business_details?: BusinessDetails;
    stage?: string;
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer;
    modified_on?: string;
    contact_details?: ContactDetails;
    notification_emails?: string[];
    _custom_json?: any;
    verified_by?: UserSerializer;
    name?: string;
    business_country_info?: BusinessCountryInfo;
    company_type: string;
    mode?: string;
    created_on?: string;
    documents?: Document[];
    verified_on?: string;
    franchise_enabled?: boolean;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    state: string;
    latitude: number;
    address1: string;
    city: string;
    country: string;
    country_code?: string;
    address2?: string;
    address_type: string;
    longitude: number;
    landmark?: string;
    pincode: number;
};
type UpdateCompany = {
    _custom_json?: any;
    documents?: Document[];
    taxes?: CompanyTaxesSerializer1[];
    reject_reason?: string;
    contact_details?: ContactDetails;
    notification_emails?: string[];
    name?: string;
    business_info?: string;
    warnings?: any;
    business_type?: string;
    company_type?: string;
    business_details?: BusinessDetails;
    franchise_enabled?: boolean;
    addresses?: CreateUpdateAddressSerializer[];
};
type ProfileSuccessResponse = {
    uid?: number;
    success?: boolean;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    uid?: number;
    brand?: DocumentsObj;
    product?: DocumentsObj;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    stage?: string;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    uid?: number;
    slug_key?: string;
    created_by?: UserSerializer;
    warnings?: any;
    stage?: string;
    description?: string;
    modified_by?: UserSerializer;
    _locale_language?: any;
    logo?: string;
    modified_on?: string;
    banner?: BrandBannerSerializer;
    _custom_json?: any;
    verified_by?: UserSerializer;
    name: string;
    synonyms?: string[];
    mode?: string;
    created_on?: string;
    verified_on?: string;
    reject_reason?: string;
};
type CreateUpdateBrandRequestSerializer = {
    _locale_language?: any;
    _custom_json?: any;
    uid?: number;
    banner?: BrandBannerSerializer;
    logo: string;
    brand_tier?: string;
    name: string;
    synonyms?: string[];
    company_id?: number;
    description?: string;
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
    modified_by?: UserSerializer;
    _custom_json?: any;
    uid?: number;
    created_on?: string;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    modified_on?: string;
    verified_on?: string;
    details?: CompanyDetails;
    reject_reason?: string;
    notification_emails?: string[];
    name?: string;
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    company_type: string;
    stage?: string;
    market_channels?: string[];
    addresses?: GetAddressSerializer[];
};
type CompanyBrandSerializer = {
    modified_by?: UserSerializer;
    uid?: number;
    created_on?: string;
    brand?: GetBrandResponseSerializer;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    modified_on?: string;
    verified_on?: string;
    company?: CompanySerializer;
    reject_reason?: string;
    warnings?: any;
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
    title: string;
    holiday_type: string;
    date: HolidayDateSerializer;
};
type AddressSerializer = {
    state?: string;
    latitude: number;
    address1?: string;
    country?: string;
    city?: string;
    country_code?: string;
    address2?: string;
    address_type?: string;
    longitude: number;
    landmark?: string;
    pincode?: number;
};
type LocationSerializer = {
    code: string;
    uid?: number;
    _custom_json?: any;
    product_return_config?: ProductReturnConfigSerializer;
    contact_numbers?: SellerPhoneNumber[];
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSerializer;
    timing?: LocationDayWiseSerializer[];
    holiday?: HolidaySchemaSerializer[];
    company: number;
    manager?: LocationManagerSerializer;
    notification_emails?: string[];
    name: string;
    address: AddressSerializer;
    store_type?: string;
    warnings?: any;
    stage?: string;
    display_name: string;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type _ArticleQuery = {
    item_id?: number;
    ignored_stores?: number[];
    size?: string;
};
type _AssignStoreArticle = {
    quantity?: number;
    article_assignment?: _ArticleAssignment;
    group_id?: string;
    query?: _ArticleQuery;
    meta?: any;
};
type AssignStoreRequestValidator = {
    channel_type?: string;
    channel_identifier?: string;
    app_id?: string;
    articles?: _AssignStoreArticle[];
    company_id?: number;
    store_ids?: number[];
    pincode?: string;
};
type AssignStoreResponseSerializer = {
    uid?: string;
    status?: boolean;
    _id?: string;
    item_id?: number;
    price_effective?: number;
    s_city?: string;
    quantity?: number;
    store_pincode?: string;
    size?: string;
    article_assignment?: _ArticleAssignment;
    company_id?: number;
    meta?: any;
    price_marked?: number;
    store_id?: number;
    index?: number;
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
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type RuleDefinition = {
    is_exact?: boolean;
    scope?: string[];
    applicable_on: string;
    currency_code?: string;
    type: string;
    calculate_on: string;
    auto_apply?: boolean;
    value_type: string;
};
type State = {
    is_public?: boolean;
    is_archived?: boolean;
    is_display?: boolean;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponSchedule = {
    cron?: string;
    duration?: number;
    start?: string;
    end?: string;
    next_schedule?: any[];
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    title?: string;
    apply?: DisplayMetaDict;
    description?: string;
    subtitle?: string;
    remove?: DisplayMetaDict;
    auto?: DisplayMetaDict;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    networks?: string[];
    uses?: PaymentAllowValue;
    types?: string[];
};
type PriceRange = {
    min?: number;
    max?: number;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UsesRemaining = {
    user?: number;
    total?: number;
    app?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type Restrictions = {
    user_groups?: number[];
    bulk_bundle?: BulkBundleRestriction;
    user_type?: string;
    platforms?: string[];
    payments?: any;
    price_range?: PriceRange;
    post_order?: PostOrder;
    coupon_allowed?: boolean;
    uses?: UsesRestriction;
    ordering_stores?: number[];
};
type Validity = {
    priority?: number;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type Rule = {
    value?: number;
    key?: number;
    min?: number;
    discount_qty?: number;
    max?: number;
};
type CouponAdd = {
    action?: CouponAction;
    author?: CouponAuthor;
    validation?: Validation;
    rule_definition: RuleDefinition;
    type_slug: string;
    state?: State;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    code: string;
    tags?: string[];
    display_meta: DisplayMeta;
    restrictions?: Restrictions;
    identifiers: Identifier;
    validity: Validity;
    ownership: Ownership;
    rule: Rule[];
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
    author?: CouponAuthor;
    validation?: Validation;
    rule_definition: RuleDefinition;
    type_slug: string;
    state?: State;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    code: string;
    tags?: string[];
    display_meta: DisplayMeta;
    restrictions?: Restrictions;
    identifiers: Identifier;
    validity: Validity;
    ownership: Ownership;
    rule: Rule[];
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CompareObject = {
    greater_than_equals?: number;
    less_than_equals?: number;
    less_than?: number;
    equals?: number;
    greater_than?: number;
};
type ItemCriteria = {
    item_exclude_id?: number[];
    item_exclude_category?: number[];
    available_zones?: string[];
    buy_rules?: string[];
    cart_unique_item_quantity?: CompareObject;
    cart_quantity?: CompareObject;
    cart_total?: CompareObject;
    item_id?: number[];
    all_items?: boolean;
    item_company?: number[];
    item_sku?: string[];
    item_size?: string[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_brand?: number[];
    item_exclude_sku?: string[];
    item_exclude_company?: number[];
    item_category?: number[];
    item_exclude_store?: number[];
    product_tags?: string[];
    item_brand?: number[];
    item_store?: number[];
};
type PromotionSchedule = {
    cron?: string;
    duration?: number;
    start: string;
    end?: string;
    published: boolean;
    next_schedule?: any[];
};
type DisplayMeta1 = {
    offer_text?: string;
    name?: string;
    description?: string;
    offer_label?: string;
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
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type UserRegistered = {
    end?: string;
    start?: string;
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
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type Restrictions1 = {
    user_groups?: number[];
    platforms?: string[];
    user_registered?: UserRegistered;
    payments?: PromotionPaymentModes[];
    post_order?: PostOrder1;
    order_quantity?: number;
    user_id?: string[];
    uses: UsesRestriction1;
    anonymous_users?: boolean;
};
type DiscountOffer = {
    min_offer_quantity?: number;
    partial_can_ret?: boolean;
    max_usage_per_transaction?: number;
    discount_price?: number;
    max_discount_amount?: number;
    code?: string;
    discount_percentage?: number;
    max_offer_quantity?: number;
    discount_amount?: number;
    apportion_discount?: boolean;
};
type DiscountRule = {
    discount_type: string;
    buy_condition: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
};
type PromotionListItem = {
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    promo_group: string;
    apply_priority?: number;
    _schedule?: PromotionSchedule;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    author?: PromotionAuthor;
    stackable?: boolean;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    visiblility?: Visibility;
    promotion_type: string;
    code?: string;
    restrictions?: Restrictions1;
    mode: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    calculate_on?: string;
    currency?: string;
    application_id: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    promo_group: string;
    apply_priority?: number;
    _schedule?: PromotionSchedule;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    author?: PromotionAuthor;
    stackable?: boolean;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    visiblility?: Visibility;
    promotion_type: string;
    code?: string;
    restrictions?: Restrictions1;
    mode: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    calculate_on?: string;
    currency?: string;
    application_id: string;
};
type PromotionUpdate = {
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    promo_group: string;
    apply_priority?: number;
    _schedule?: PromotionSchedule;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    author?: PromotionAuthor;
    stackable?: boolean;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    visiblility?: Visibility;
    promotion_type: string;
    code?: string;
    restrictions?: Restrictions1;
    mode: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    calculate_on?: string;
    currency?: string;
    application_id: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    created_on?: string;
    modified_on?: string;
    title?: string;
    type?: string;
    is_hidden?: boolean;
    description?: string;
    subtitle?: string;
    entity_type?: string;
    example?: string;
    entity_slug?: string;
};
type CartItem = {
    quantity?: number;
    size: string;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type CouponBreakup = {
    message?: string;
    title?: string;
    uid?: string;
    is_applied?: boolean;
    value?: number;
    max_discount_value?: number;
    type?: string;
    minimum_cart_value?: number;
    code?: string;
    description?: string;
    coupon_type?: string;
    coupon_value?: number;
    sub_title?: string;
};
type LoyaltyPoints = {
    applicable?: number;
    is_applied?: boolean;
    total?: number;
    description?: string;
};
type RawBreakup = {
    convenience_fee?: number;
    total?: number;
    subtotal?: number;
    mrp_total?: number;
    discount?: number;
    coupon?: number;
    fynd_cash?: number;
    you_saved?: number;
    vog?: number;
    delivery_charge?: number;
    cod_charge?: number;
    gst_charges?: number;
};
type DisplayBreakup = {
    message?: string[];
    value?: number;
    key?: string;
    display?: string;
    currency_code?: string;
    currency_symbol?: string;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    display?: DisplayBreakup[];
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type BasePrice = {
    effective?: number;
    currency_symbol?: string;
    currency_code?: string;
    marked?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    store?: BaseInfo;
    seller?: BaseInfo;
    parent_item_identifiers?: any;
    extra_meta?: any;
    uid?: string;
    type?: string;
    quantity?: number;
    _custom_json?: any;
    size?: string;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
};
type ProductAvailability = {
    out_of_stock?: boolean;
    sizes?: string[];
    is_valid?: boolean;
    other_store_quantity?: number;
    deliverable?: boolean;
};
type PromoMeta = {
    message?: string;
};
type FreeGiftItem = {
    item_id?: number;
    item_name?: string;
    item_price_details?: any;
    item_brand_name?: string;
    item_slug?: string;
    item_images_url?: string[];
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    quantity?: number;
    parent_item_identifier?: string;
};
type DiscountRulesApp = {
    offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
    raw_offer?: any;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type AppliedPromotion = {
    applied_free_articles?: AppliedFreeArticles[];
    article_quantity?: number;
    promotion_type?: string;
    amount?: number;
    promotion_name?: string;
    offer_text?: string;
    discount_rules?: DiscountRulesApp[];
    promotion_group?: string;
    buy_rules?: BuyRules[];
    mrp_promotion?: boolean;
    promo_id?: string;
    ownership?: Ownership2;
};
type ProductPrice = {
    add_on?: number;
    currency_code?: string;
    currency_symbol?: string;
    selling?: number;
    marked?: number;
    effective?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    query?: ActionQuery;
    type?: string;
    url?: string;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    action?: ProductAction;
    brand?: BaseInfo;
    name?: string;
    uid?: number;
    slug?: string;
    images?: ProductImage[];
    type?: string;
    net_quantity?: NetQuantity;
    categories?: CategoryInfo[];
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    article?: ProductArticle;
    availability?: ProductAvailability;
    message?: string;
    promo_meta?: PromoMeta;
    promotions_applied?: AppliedPromotion[];
    parent_item_identifiers?: any;
    price_per_unit?: ProductPriceInfo;
    bulk_offer?: any;
    is_set?: boolean;
    key?: string;
    product?: CartProduct;
    quantity?: number;
    discount?: string;
    price?: ProductPriceInfo;
    coupon_message?: string;
    identifiers: CartProductIdentifer;
};
type OpenapiCartDetailsResponse = {
    message?: string;
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    city?: string;
    pincode?: number;
    name?: string;
    country_iso_code?: string;
    state?: string;
    landmark?: string;
    area_code_slug?: string;
    country_code?: string;
    meta?: any;
    address?: string;
    phone?: number;
    area?: string;
    email?: string;
    area_code: string;
    country_phone_code?: string;
    country?: string;
    address_type?: string;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
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
    message?: string;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
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
    files?: OpenApiFiles[];
    cod_charges: number;
    product_id: number;
    extra_meta?: any;
    amount_paid: number;
    quantity?: number;
    discount: number;
    coupon_effective_discount: number;
    price_effective: number;
    meta?: CartItemMeta;
    payment_methods: MultiTenderPaymentMethod[];
    price_marked: number;
    loyalty_discount?: number;
    employee_discount?: number;
    delivery_charges: number;
    cashback_applied: number;
    size: string;
};
type OpenApiPlatformCheckoutReq = {
    files?: OpenApiFiles[];
    billing_address: ShippingAddress;
    coupon_code: string;
    cart_value: number;
    currency_code?: string;
    loyalty_discount?: number;
    delivery_charges: number;
    coupon_value: number;
    cashback_applied: number;
    comment?: string;
    cod_charges: number;
    affiliate_order_id?: string;
    cart_items: OpenApiOrderItem[];
    shipping_address?: ShippingAddress;
    coupon?: string;
    payment_methods: MultiTenderPaymentMethod[];
    employee_discount?: any;
    order_id?: string;
    payment_mode?: string;
    gstin?: string;
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    message?: string;
    order_id: string;
    order_ref_id?: string;
};
type AbandonedCart = {
    shipments?: any[];
    articles: any[];
    app_id?: string;
    payments?: any;
    cart_value?: number;
    is_archive?: boolean;
    checkout_mode?: string;
    last_modified: string;
    merge_qty?: boolean;
    promotion?: any;
    is_active?: boolean;
    comment?: string;
    discount?: number;
    coupon?: any;
    buy_now?: boolean;
    order_id?: string;
    bulk_coupon_discount?: number;
    payment_mode?: string;
    gstin?: string;
    cashback: any;
    created_on: string;
    is_default: boolean;
    meta?: any;
    delivery_charges?: any;
    _id: string;
    expire_at: string;
    pick_up_customer_details?: any;
    cod_charges?: any;
    uid: number;
    fynd_credits?: any;
    payment_methods?: any[];
    user_id: string;
    fc_index_map?: number[];
};
type AbandonedCartResponse = {
    message?: string;
    success?: boolean;
    result?: any;
    page?: Page;
    items?: AbandonedCart[];
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    message?: string;
    coupon_text?: string;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    id?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    buy_now?: boolean;
    pan_no?: string;
    restrict_checkout?: boolean;
    is_valid?: boolean;
    last_modified?: string;
    gstin?: string;
    currency?: CartCurrency;
    comment?: string;
    items?: CartProductInfo[];
};
type AddProductCart = {
    store_id?: number;
    pos?: boolean;
    seller_id?: number;
    item_id?: number;
    parent_item_identifiers?: any;
    article_assignment?: any;
    extra_meta?: any;
    display?: string;
    quantity?: number;
    _custom_json?: any;
    item_size?: string;
    article_id?: string;
    product_group_tags?: string[];
};
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
    message?: string;
    partial?: boolean;
};
type UpdateProductCart = {
    item_id?: number;
    parent_item_identifiers?: any;
    extra_meta?: any;
    quantity?: number;
    _custom_json?: any;
    identifiers: CartProductIdentifer;
    item_index?: number;
    item_size?: string;
    article_id?: string;
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
type GetShareCartLinkRequest = {
    meta?: any;
    id?: string;
};
type GetShareCartLinkResponse = {
    token?: string;
    share_url?: string;
};
type SharedCartDetails = {
    token?: string;
    user?: any;
    created_on?: string;
    source?: any;
    meta?: any;
};
type SharedCart = {
    checkout_mode?: string;
    id?: string;
    last_modified?: string;
    comment?: string;
    message?: string;
    coupon_text?: string;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    cart_id?: number;
    delivery_charge_info?: string;
    buy_now?: boolean;
    is_valid?: boolean;
    gstin?: string;
    items?: CartProductInfo[];
    uid?: string;
    payment_selection_lock?: PaymentSelectionLock;
    currency?: CartCurrency;
    restrict_checkout?: boolean;
    shared_cart_details?: SharedCartDetails;
};
type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
type CartList = {
    created_on?: string;
    cart_value?: string;
    cart_id?: string;
    item_counts?: string;
    user_id?: string;
};
type MultiCartResponse = {
    success?: boolean;
    data?: CartList[];
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    message?: string;
    coupon_text?: string;
    user?: UserInfo;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    id?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    buy_now?: boolean;
    pan_no?: string;
    restrict_checkout?: boolean;
    is_valid?: boolean;
    last_modified?: string;
    gstin?: string;
    currency?: CartCurrency;
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
    has_next?: boolean;
    total?: number;
    current?: number;
    total_item_count?: number;
    has_previous?: boolean;
};
type Coupon = {
    message?: string;
    title?: string;
    coupon_code?: string;
    is_applicable?: boolean;
    is_applied?: boolean;
    expires_on?: string;
    max_discount_value?: number;
    minimum_cart_value?: number;
    description?: string;
    coupon_type?: string;
    coupon_value?: number;
    sub_title?: string;
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
    city?: string;
    is_default_address?: boolean;
    checkout_mode?: string;
    id?: string;
    area_code_slug?: string;
    is_active?: boolean;
    country?: string;
    address_type?: string;
    state?: string;
    cart_id?: string;
    country_code?: string;
    area_code?: string;
    geo_location?: GeoLocation;
    created_by_user_id?: string;
    landmark?: string;
    meta?: any;
    address?: string;
    phone?: string;
    area?: string;
    email?: string;
    name?: string;
    google_map_point?: any;
    tags?: string[];
    user_id?: string;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type SaveAddressResponse = {
    success?: boolean;
    id?: string;
    is_default_address?: boolean;
};
type UpdateAddressResponse = {
    success?: boolean;
    id?: string;
    is_default_address?: boolean;
    is_updated?: boolean;
};
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
type PlatformSelectCartAddressRequest = {
    cart_id?: string;
    checkout_mode?: string;
    id?: string;
    billing_address_id?: string;
};
type ShipmentResponse = {
    shipments?: number;
    dp_options?: any;
    fulfillment_id?: number;
    box_type?: string;
    shipment_type?: string;
    dp_id?: string;
    promise?: ShipmentPromise;
    order_type?: string;
    items?: CartProductInfo[];
    fulfillment_type?: string;
};
type CartShipmentsResponse = {
    shipments?: ShipmentResponse[];
    checkout_mode?: string;
    id?: string;
    last_modified?: string;
    comment?: string;
    message?: string;
    coupon_text?: string;
    uid?: string;
    breakup_values?: CartBreakup;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_promise?: ShipmentPromise;
    cart_id?: number;
    delivery_charge_info?: string;
    buy_now?: boolean;
    is_valid?: boolean;
    currency?: CartCurrency;
    restrict_checkout?: boolean;
    error?: boolean;
    gstin?: string;
};
type UpdateCartShipmentItem = {
    article_uid: string;
    shipment_type: string;
    quantity?: number;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    checkout_mode?: string;
    pan_no?: string;
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
type Files = {
    values: string[];
    key: string;
};
type StaffCheckout = {
    user: string;
    first_name: string;
    employee_code?: string;
    _id: string;
    last_name: string;
};
type PlatformCartCheckoutDetailRequest = {
    files?: Files[];
    pick_at_store_uid?: number;
    extra_meta?: any;
    id: string;
    callback_url?: string;
    billing_address_id?: string;
    merchant_code?: string;
    ordering_store?: number;
    order_type: string;
    payment_mode: string;
    address_id?: string;
    staff?: StaffCheckout;
    billing_address?: any;
    payment_identifier?: string;
    meta?: any;
    aggregator?: string;
    payment_auto_confirm?: boolean;
    delivery_address?: any;
    pos?: boolean;
    payment_params?: any;
    user_id: string;
};
type CheckCart = {
    checkout_mode?: string;
    id?: string;
    error_message?: string;
    last_modified?: string;
    comment?: string;
    user_type?: string;
    message?: string;
    coupon_text?: string;
    delivery_charge_order_value?: number;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    cart_id?: number;
    delivery_charge_info?: string;
    buy_now?: boolean;
    is_valid?: boolean;
    order_id?: string;
    gstin?: string;
    cod_available?: boolean;
    store_emps?: any[];
    delivery_charges?: number;
    cod_message?: string;
    items?: CartProductInfo[];
    cod_charges?: number;
    uid?: string;
    success?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    store_code?: string;
    currency?: CartCurrency;
    restrict_checkout?: boolean;
};
type CartCheckoutResponse = {
    message?: string;
    success?: boolean;
    payment_confirm_url?: string;
    app_intercept_url?: string;
    callback_url?: string;
    cart?: CheckCart;
    order_id?: string;
    data?: any;
};
type CartDeliveryModesResponse = {
    available_modes?: string[];
    pickup_stores?: number[];
};
type PickupStoreDetail = {
    city?: string;
    pincode?: number;
    name?: string;
    uid?: number;
    state?: string;
    area_code_slug?: string;
    landmark?: string;
    id?: number;
    store_code?: string;
    address?: string;
    phone?: string;
    area?: string;
    email?: string;
    area_code?: string;
    country?: string;
    address_type?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    merchant_code?: string;
    aggregator_name?: string;
    payment_identifier?: string;
    id?: string;
    payment_mode?: string;
    address_id?: string;
};
type CouponValidity = {
    title?: string;
    valid?: boolean;
    discount?: number;
    code?: string;
    display_message_en?: string;
};
type PaymentCouponValidate = {
    success: boolean;
    message?: string;
    coupon_validity?: CouponValidity;
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
