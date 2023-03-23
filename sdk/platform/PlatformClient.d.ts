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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserEmails, UserPhoneNumbers, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutMoreAttributes, PayoutAggregator, PayoutCustomer, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, Prices, PaymentModeInfo, UserDataInfo, ShipmentItemFulFillingStore, PlatformItem, GSTDetailsData, BagUnit, ShipmentStatus, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, OrderDetailsData, ShipmentStatusData, AffiliateMeta, ShipmentTimeStamp, DebugInfo, BuyerDetails, EInvoice, EinvoiceInfo, Formatted, LockData, ShipmentMeta, PDFLinks, AffiliateDetails, UserDetailsData, InvoiceInfo, FulfillingStore, Dimensions, Meta, TrackingList, OrderingStoreDetails, DPDetailsData, ShipmentPayments, BagStateMapper, BagStatusHistory, OrderBrandName, BagGST, CurrentStatus, OrderBagArticle, Identifier, FinancialBreakup, PlatformDeliveryAddress, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, BagConfigs, OrderBags, PlatformShipment, ShipmentInfoResponse, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, BagReturnableCancelableStatus, Brand, BagGSTDetails, B2BPODetails, BagMeta, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, ReturnConfig, Weight, Article, Dates, ArticleDetails, Attributes, Item, AffiliateBagDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateStoreIdMapping, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, OrderUser, UserData, OrderPriority, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ProcessingDates, Tax, Charge, LineItem, Shipment, ShippingInfo, PaymentMethod, PaymentInfo, BillingInfo, TaxInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, ApplicationItemMOQ, MetaFields, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionSchedule, CollectionBadge, UserInfo, CollectionImage, CollectionBanner, CollectionQuery, SeoDetail, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, Media1, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, CategoryMappingValues, CategoryMapping, Media2, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, CustomOrder, NetQuantity, Trader, TaxIdentifier, ProductPublish, TeaserTag, ProductCreateUpdateSchemaV2, Image, Logo, NetQuantityResponse, ProductPublished, ReturnConfigResponse, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, BrandMeta, CompanyMeta, DimensionResponse, PriceMeta, Trader1, ManufacturerResponse, WeightResponse, ReturnConfig1, QuantityBase, Quantities, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BrandMeta1, ArticleStoreResponse, CompanyMeta1, DimensionResponse1, PriceArticle, Trader2, ManufacturerResponse1, WeightResponse1, ReturnConfig2, Quantity, QuantitiesArticle, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, PageResponse, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, SellerPhoneNumber, GetAddressSerializer, UserSerializer1, UserSerializer2, GetCompanySerializer, ProductReturnConfigSerializer, LocationTimingSerializer, LocationDayWiseSerializer, LocationManagerSerializer, LocationIntegrationType, InvoiceCredSerializer, InvoiceDetailsSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, ContactDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponSchedule, Ownership, Rule, DisplayMetaDict, DisplayMeta, CouponAuthor, CouponDateMeta, Validation, CouponAction, RuleDefinition, Validity, PriceRange, UsesRemaining, UsesRestriction, PostOrder, PaymentAllowValue, PaymentModes, BulkBundleRestriction, Restrictions, State, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, UsesRemaining1, UsesRestriction1, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, Restrictions1, DisplayMeta1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionAction, Visibility, PromotionAuthor, PromotionDateMeta, PromotionSchedule, Ownership1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, Ownership2, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, CategoryInfo, ProductImage, BaseInfo, ActionQuery, ProductAction, CartProduct, PromoMeta, ProductPrice, ProductPriceInfo, CartProductIdentifer, ProductAvailability, BasePrice, ArticlePriceInfo, ProductArticle, CartProductInfo, RawBreakup, DisplayBreakup, CouponBreakup, LoyaltyPoints, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartDetailResponse, CartItemCountResponse, Coupon, PageCoupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, Files, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    phone_numbers?: UserPhoneNumbers[];
    emails?: UserEmails[];
};
type UserEmails = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    email?: string;
};
type UserPhoneNumbers = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    country_code?: string;
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
    __source?: PathSourceSchema;
};
type PathSourceSchema = {
    type?: string;
    id?: string;
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
    success: boolean;
    created: boolean;
    app_id: string;
    display_fields: string[];
    aggregators?: any[];
    excluded_fields: string[];
};
type ErrorCodeDescription = {
    success: boolean;
    description: string;
    code: string;
};
type PaymentGatewayConfig = {
    config_type: string;
    secret: string;
    key: string;
    is_active?: boolean;
    merchant_salt: string;
};
type PaymentGatewayConfigRequest = {
    is_active?: boolean;
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
};
type PaymentGatewayToBeReviewed = {
    success: boolean;
    aggregator: string[];
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
    large: string;
    small: string;
};
type IntentApp = {
    package_name?: string;
    display_name?: string;
    code?: string;
    logos?: PaymentModeLogo;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    card_token?: string;
    retry_count?: number;
    card_reference?: string;
    card_issuer?: string;
    card_name?: string;
    name?: string;
    display_name?: string;
    nickname?: string;
    display_priority?: number;
    card_brand_image?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_fingerprint?: string;
    fynd_vpa?: string;
    cod_limit?: number;
    intent_app?: IntentApp[];
    card_brand?: string;
    exp_year?: number;
    card_number?: string;
    intent_flow?: boolean;
    cod_limit_per_order?: number;
    exp_month?: number;
    card_type?: string;
    logo_url?: PaymentModeLogo;
    card_isin?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    merchant_code?: string;
    expired?: boolean;
    code?: string;
    timeout?: number;
    intent_app_error_list?: string[];
    aggregator_name: string;
    remaining_limit?: number;
    card_id?: string;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    list?: PaymentModeList[];
    is_pay_by_card_pl?: boolean;
    aggregator_name?: string;
    save_card?: boolean;
    display_name: string;
    name: string;
    display_priority: number;
    anonymous_enable?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutMoreAttributes = {
    ifsc_code?: string;
    bank_name?: string;
    state?: string;
    country?: string;
    account_no?: string;
    account_holder?: string;
    account_type?: string;
    city?: string;
    branch_name?: string;
};
type PayoutAggregator = {
    aggregator_fund_id?: number;
    payout_details_id?: number;
    aggregator_id?: number;
};
type PayoutCustomer = {
    unique_external_id?: string;
    id?: number;
    name?: string;
    mobile?: string;
};
type Payout = {
    is_active: boolean;
    transfer_type: string;
    is_default: boolean;
    more_attributes: PayoutMoreAttributes;
    payouts_aggregators?: PayoutAggregator[];
    customers: PayoutCustomer;
    unique_transfer_no: string;
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    ifsc_code: string;
    bank_name?: string;
    state?: string;
    country?: string;
    account_no?: string;
    account_holder?: string;
    account_type: string;
    city?: string;
    pincode?: number;
    branch_name?: string;
};
type PayoutRequest = {
    unique_external_id: string;
    transfer_type: string;
    bank_details: PayoutBankDetails;
    aggregator: string;
    users: any;
    is_active: boolean;
};
type PayoutResponse = {
    success: boolean;
    bank_details: any;
    transfer_type: string;
    created: boolean;
    aggregator: string;
    payment_status: string;
    users: any;
    unique_transfer_no: string;
    payouts: any;
    is_active: boolean;
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
    success: boolean;
    is_verified_flag?: boolean;
    data?: any;
    message: string;
};
type NotFoundResourceError = {
    success: boolean;
    description: string;
    code: string;
};
type BankDetailsForOTP = {
    ifsc_code: string;
    bank_name: string;
    account_no: string;
    account_holder: string;
    branch_name: string;
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
    ifsc_code: string;
    beneficiary_id: string;
    bank_name: string;
    display_name: string;
    modified_on: string;
    delights_user_name?: string;
    address: string;
    account_no: string;
    email: string;
    is_active: boolean;
    transfer_mode: string;
    id: number;
    mobile?: string;
    branch_name?: string;
    subtitle: string;
    title: string;
    account_holder: string;
    created_on: string;
    comment?: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    payment_id?: string;
    payment_gateway?: string;
    current_status?: string;
    extra_meta?: any;
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
    success: boolean;
    order_id: string;
    message: string;
};
type PlatformPaymentOptions = {
    methods: any;
    callback_url?: any;
    source: string;
    cod_charges?: number;
    mode_of_payment: string;
    payment_selection_lock?: any;
    enabled: boolean;
    anonymous_cod?: boolean;
    cod_amount_limit?: number;
};
type PlatfromPaymentConfig = {
    success: boolean;
    message: string;
    data: PlatformPaymentOptions;
};
type UpdatePlatformPaymentConfig = {
    methods: any;
    cod_charges?: number;
    payment_selection_lock?: any;
    anonymous_cod?: boolean;
    cod_amount_limit?: number;
};
type CODdata = {
    user_id: string;
    usages: number;
    limit: number;
    is_active: boolean;
    remaining_limit: number;
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
    success: boolean;
    message: string;
};
type EdcModelData = {
    models: string[];
    aggregator: string;
    aggregator_id: number;
};
type EdcAggregatorAndModelListResponse = {
    success: boolean;
    data: EdcModelData[];
};
type StatisticsData = {
    active_device_count: number;
    inactive_device_count: number;
};
type EdcDeviceStatsResponse = {
    success: boolean;
    statistics: StatisticsData;
};
type EdcAddRequest = {
    edc_model: string;
    store_id: number;
    device_tag?: string;
    aggregator_id: number;
    edc_device_serial_no: string;
    terminal_serial_no: string;
};
type EdcDevice = {
    edc_model?: string;
    store_id: number;
    device_tag: string;
    terminal_unique_identifier: string;
    merchant_store_pos_code?: string;
    aggregator_name?: string;
    application_id: string;
    aggregator_id: number;
    is_active: boolean;
    edc_device_serial_no: string;
    terminal_serial_no: string;
};
type EdcDeviceAddResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcDeviceDetailsResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcUpdateRequest = {
    edc_model?: string;
    store_id?: number;
    device_tag?: string;
    merchant_store_pos_code?: string;
    aggregator_id?: number;
    is_active?: string;
    edc_device_serial_no?: string;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    success: boolean;
    page: Page;
    items: EdcDevice[];
};
type PaymentInitializationRequest = {
    currency: string;
    amount: number;
    order_id: string;
    customer_id: string;
    merchant_order_id: string;
    method: string;
    vpa?: string;
    device_id?: string;
    contact: string;
    aggregator: string;
    timeout?: number;
    email: string;
    razorpay_payment_id?: string;
};
type PaymentInitializationResponse = {
    aggregator_order_id?: string;
    success: boolean;
    merchant_order_id: string;
    amount?: number;
    currency?: string;
    customer_id?: string;
    vpa?: string;
    method: string;
    polling_url: string;
    virtual_id?: string;
    bqr_image?: string;
    device_id?: string;
    aggregator: string;
    timeout?: number;
    status?: string;
    upi_poll_url?: string;
    razorpay_payment_id?: string;
};
type PaymentStatusUpdateRequest = {
    currency: string;
    order_id: string;
    amount: number;
    customer_id: string;
    merchant_order_id: string;
    method: string;
    vpa?: string;
    device_id?: string;
    contact: string;
    aggregator: string;
    status: string;
    email: string;
};
type PaymentStatusUpdateResponse = {
    success?: boolean;
    redirect_url?: string;
    retry: boolean;
    aggregator_name: string;
    status: string;
};
type ResendOrCancelPaymentRequest = {
    device_id?: string;
    order_id: string;
    request_type: string;
};
type LinkStatus = {
    status: boolean;
    message: string;
};
type ResendOrCancelPaymentResponse = {
    success: boolean;
    data: LinkStatus;
};
type FilterInfoOption = {
    name?: string;
    value?: string;
    text: string;
};
type FiltersInfo = {
    type: string;
    value: string;
    text: string;
    options?: FilterInfoOption[];
};
type Prices = {
    discount?: number;
    refund_credit?: number;
    coupon_value?: number;
    value_of_good?: number;
    cashback?: number;
    tax_collected_at_source?: number;
    price_effective?: number;
    fynd_credits?: number;
    amount_paid_roundoff?: number;
    amount_paid?: number;
    transfer_price?: number;
    cod_charges?: number;
    refund_amount?: number;
    cashback_applied?: number;
    promotion_effective_discount?: number;
    delivery_charge?: number;
    price_marked?: number;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type UserDataInfo = {
    uid?: number;
    first_name?: string;
    mobile?: string;
    gender?: string;
    last_name?: string;
    email?: string;
    is_anonymous_user?: boolean;
    name?: string;
    avis_user_id?: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type PlatformItem = {
    code?: string;
    color?: string;
    id?: number;
    l1_category?: string[];
    department_id?: number;
    size?: string;
    l3_category_name?: string;
    can_cancel?: boolean;
    l3_category?: number;
    image?: string[];
    name?: string;
    can_return?: boolean;
    images?: string[];
};
type GSTDetailsData = {
    gst_fee: number;
    value_of_good: number;
    tax_collected_at_source: number;
    gstin_code: string;
    brand_calculated_amount: number;
};
type BagUnit = {
    item?: PlatformItem;
    status: any;
    ordering_channel: string;
    total_shipment_bags: number;
    prices?: Prices;
    bag_id: number;
    gst?: GSTDetailsData;
    item_quantity: number;
    can_cancel?: boolean;
    shipment_id: string;
    can_return?: boolean;
};
type ShipmentStatus = {
    title: string;
    status: string;
    hex_code: string;
    actual_status: string;
    ops_status: string;
};
type ShipmentItem = {
    payment_methods?: any;
    prices?: Prices;
    fulfilling_centre: string;
    payment_mode_info?: PaymentModeInfo;
    id: string;
    sla?: any;
    total_shipments_in_order: number;
    application?: any;
    user?: UserDataInfo;
    total_bags_count: number;
    created_at: string;
    channel?: any;
    shipment_created_at: string;
    shipment_id?: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    bags?: BagUnit[];
    shipment_status?: ShipmentStatus;
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    page?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type OrderDetailsData = {
    ordering_channel?: string;
    affiliate_id?: string;
    ordering_channel_logo?: any;
    tax_details?: any;
    source?: string;
    cod_charges?: string;
    fynd_order_id: string;
    order_date?: string;
    order_value?: string;
};
type ShipmentStatusData = {
    status?: string;
    id?: number;
    bag_list?: string[];
    created_at?: string;
    shipment_id?: string;
};
type AffiliateMeta = {
    size_level_total_qty?: number;
    order_item_id?: string;
    box_type?: string;
    coupon_code?: string;
    channel_order_id?: string;
    loyalty_discount?: number;
    quantity?: number;
    is_priority?: boolean;
    employee_discount?: number;
    due_date?: string;
    channel_shipment_id?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type BuyerDetails = {
    pincode: number;
    gstin: string;
    address: string;
    city: string;
    ajio_site_id?: string;
    name: string;
    state: string;
};
type EInvoice = {
    irn?: string;
    acknowledge_no?: number;
    signed_qr_code?: string;
    acknowledge_date?: string;
    error_code?: string;
    signed_invoice?: string;
    error_message?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type LockData = {
    lock_message?: string;
    locked?: boolean;
    mto?: boolean;
};
type ShipmentMeta = {
    dp_sort_key?: string;
    return_awb_number?: string;
    dp_id?: string;
    po_number?: string;
    return_details?: any;
    forward_affiliate_order_id?: string;
    weight: number;
    timestamp?: ShipmentTimeStamp;
    awb_number?: string;
    marketplace_store_id?: string;
    box_type?: string;
    packaging_name?: string;
    shipment_volumetric_weight?: number;
    same_store_available: boolean;
    forward_affiliate_shipment_id?: string;
    b2c_buyer_details?: any;
    fulfilment_priority_text?: string;
    auto_trigger_dp_assignment_acf: boolean;
    debug_info?: DebugInfo;
    dp_name?: string;
    shipment_weight?: number;
    external?: any;
    dp_options?: any;
    store_invoice_updated_date?: string;
    return_affiliate_shipment_id?: string;
    ewaybill_info?: any;
    b2b_buyer_details?: BuyerDetails;
    order_type?: string;
    bag_weight?: any;
    einvoice_info?: EinvoiceInfo;
    return_store_node?: number;
    assign_dp_from_sb?: boolean;
    formatted?: Formatted;
    due_date?: string;
    lock_data?: LockData;
    return_affiliate_order_id?: string;
};
type PDFLinks = {
    label?: string;
    delivery_challan_a4?: string;
    invoice_a4?: string;
    invoice_a6?: string;
    label_a4?: string;
    invoice_type: string;
    label_type: string;
    po_invoice?: string;
    invoice_pos?: string;
    invoice?: string;
    b2b?: string;
    label_pos?: string;
    credit_note_url?: string;
    label_a6?: string;
};
type AffiliateDetails = {
    affiliate_id?: string;
    affiliate_shipment_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_store_id: string;
    shipment_meta: ShipmentMeta;
    ad_id?: string;
    company_affiliate_tag?: string;
    affiliate_bag_id: string;
    pdf_links?: PDFLinks;
    affiliate_order_id: string;
};
type UserDetailsData = {
    pincode: string;
    address: string;
    email?: string;
    city: string;
    country: string;
    name: string;
    phone: string;
    state: string;
};
type InvoiceInfo = {
    store_invoice_id?: string;
    updated_date?: string;
    label_url?: string;
    invoice_url?: string;
    credit_note_id?: string;
};
type FulfillingStore = {
    pincode: string;
    code: string;
    id: number;
    address: string;
    meta: any;
    phone: string;
    contact_person: string;
    city: string;
    country: string;
    fulfillment_channel: string;
    state: string;
    store_name: string;
};
type Dimensions = {
    is_default?: boolean;
    width?: number;
    height?: number;
    length?: number;
    unit?: string;
};
type Meta = {
    dimension?: Dimensions;
};
type TrackingList = {
    status: string;
    time?: string;
    text: string;
    is_passed?: boolean;
    is_current?: boolean;
};
type OrderingStoreDetails = {
    ordering_store_id: number;
    pincode: string;
    code: string;
    address: string;
    meta: any;
    contact_person: string;
    city: string;
    country: string;
    phone: string;
    state: string;
    store_name: string;
};
type DPDetailsData = {
    pincode?: string;
    id?: number;
    eway_bill_id?: string;
    gst_tag?: string;
    awb_no?: string;
    track_url?: string;
    name?: string;
    country?: string;
};
type ShipmentPayments = {
    mode?: string;
    source?: string;
    logo?: string;
};
type BagStateMapper = {
    display_name: string;
    app_display_name?: string;
    state_type: string;
    app_state_name?: string;
    name: string;
    notify_customer?: boolean;
    journey_type: string;
    app_facing?: boolean;
    bs_id: number;
    is_active?: boolean;
};
type BagStatusHistory = {
    delivery_partner_id?: number;
    status: string;
    store_id?: number;
    display_name?: string;
    app_display_name?: string;
    bsh_id?: number;
    state_type?: string;
    bag_id?: number;
    reasons?: any[];
    created_at?: string;
    forward?: boolean;
    updated_at?: string;
    shipment_id?: string;
    delivery_awb_number?: string;
    kafka_sync?: boolean;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
};
type OrderBrandName = {
    id: number;
    logo: string;
    brand_name: string;
    modified_on?: string;
    company: string;
    created_on: string;
};
type BagGST = {
    gst_fee?: number;
    value_of_good?: number;
    gst_tax_percentage?: number;
    gst_tag?: string;
    gstin_code?: string;
    hsn_code?: string;
    is_default_hsn_code?: boolean;
    brand_calculated_amount?: number;
};
type CurrentStatus = {
    delivery_partner_id?: number;
    status?: string;
    store_id?: number;
    bag_id?: number;
    created_at?: string;
    shipment_id?: string;
    updated_at?: string;
    current_status_id: number;
    delivery_awb_number?: string;
    state_type?: string;
    kafka_sync?: boolean;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
};
type OrderBagArticle = {
    identifiers?: any;
    return_config?: any;
    uid?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    total_units: number;
    refund_credit: number;
    value_of_good: number;
    tax_collected_at_source?: number;
    size: string;
    hsn_code: string;
    brand_calculated_amount: number;
    gst_tax_percentage: number;
    price_effective: number;
    fynd_credits: number;
    amount_paid_roundoff?: number;
    transfer_price: number;
    promotion_effective_discount: number;
    discount: number;
    gst_fee: number;
    coupon_value: number;
    amount_paid: number;
    cod_charges: number;
    cashback_applied: number;
    price_marked: number;
    cashback: number;
    item_name: string;
    gst_tag: string;
    coupon_effective_discount: number;
    identifiers: Identifier;
    delivery_charge: number;
    added_to_fynd_cash: boolean;
};
type PlatformDeliveryAddress = {
    pincode?: string;
    address_type?: string;
    version?: string;
    address1?: string;
    address_category?: string;
    area?: string;
    latitude?: number;
    created_at?: string;
    landmark?: string;
    email?: string;
    address2?: string;
    city?: string;
    updated_at?: string;
    contact_person?: string;
    longitude?: number;
    country?: string;
    phone?: string;
    state?: string;
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
    discount_rules?: DiscountRules[];
    buy_rules?: BuyRules[];
    article_quantity?: number;
    promo_id?: string;
    promotion_type?: string;
    mrp_promotion?: boolean;
    amount?: number;
};
type BagConfigs = {
    is_returnable: boolean;
    allow_force_return: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_active: boolean;
};
type OrderBags = {
    prices?: Prices;
    brand?: OrderBrandName;
    seller_identifier?: string;
    can_cancel?: boolean;
    can_return?: boolean;
    display_name?: string;
    gst_details?: BagGST;
    line_number?: number;
    current_status?: CurrentStatus;
    article?: OrderBagArticle;
    financial_breakup?: FinancialBreakup;
    parent_promo_bags?: any;
    delivery_address?: PlatformDeliveryAddress;
    item?: PlatformItem;
    entity_type?: string;
    bag_id: number;
    quantity?: number;
    applied_promos?: AppliedPromos[];
    identifier?: string;
    bag_configs?: BagConfigs;
};
type PlatformShipment = {
    order?: OrderDetailsData;
    status?: ShipmentStatusData;
    shipment_images?: string[];
    payment_methods?: any;
    prices?: Prices;
    packaging_type?: string;
    affiliate_details?: AffiliateDetails;
    total_bags?: number;
    delivery_details?: UserDetailsData;
    invoice?: InvoiceInfo;
    fulfilling_store?: FulfillingStore;
    custom_meta?: any[];
    payment_mode?: string;
    picked_date?: string;
    gst_details?: GSTDetailsData;
    shipment_quantity?: number;
    meta?: Meta;
    tracking_list?: TrackingList[];
    ordering_store?: OrderingStoreDetails;
    vertical?: string;
    dp_details?: DPDetailsData;
    operational_status?: string;
    billing_details?: UserDetailsData;
    lock_status?: boolean;
    coupon?: any;
    payments?: ShipmentPayments;
    fulfilment_priority?: number;
    shipment_id: string;
    journey_type?: string;
    priority_text?: string;
    delivery_slot?: any;
    forward_shipment_id?: string;
    invoice_id?: string;
    total_items?: number;
    shipment_status?: string;
    user_agent?: string;
    bag_status_history?: BagStatusHistory[];
    enable_dp_tracking?: boolean;
    platform_logo?: string;
    bags?: OrderBags[];
};
type ShipmentInfoResponse = {
    shipments?: PlatformShipment[];
    message?: string;
    success: boolean;
};
type OrderMeta = {
    currency_symbol?: string;
    order_type?: string;
    extra_meta?: any;
    mongo_cart_id?: number;
    cart_id?: number;
    employee_id?: number;
    order_platform?: string;
    comment?: string;
    payment_type?: string;
    ordering_store?: number;
    staff?: any;
    files?: any[];
    order_child_entities?: string[];
    order_tags?: any[];
    customer_note?: string;
};
type OrderDict = {
    payment_methods?: any;
    prices?: Prices;
    tax_details?: any;
    meta?: OrderMeta;
    fynd_order_id: string;
    order_date: string;
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    shipments?: PlatformShipment[];
    success: boolean;
};
type SubLane = {
    actions?: any[];
    index?: number;
    value?: string;
    text?: string;
    total_items?: number;
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
    name?: string;
    value?: string;
    display?: string;
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformOrderItems = {
    order_id?: string;
    order_created_time?: string;
    total_order_value?: number;
    meta?: any;
    user_info?: UserDataInfo;
    breakup_values?: PlatformBreakupValues[];
    channel?: PlatformChannel;
    shipments?: PlatformShipment[];
    payment_mode?: string;
    order_value?: number;
};
type OrderListingResponse = {
    success?: boolean;
    total_count?: number;
    items?: PlatformOrderItems[];
    message?: string;
    page?: Page;
    lane?: string;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    key: string;
    value: number;
    text: string;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    status?: string;
    raw_status?: string;
    account_name?: string;
    reason?: string;
    meta?: any;
    last_location_recieved_at?: string;
    awb?: string;
    updated_time?: string;
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
    status?: string;
    display_name?: string;
    request_details?: any;
    report_type?: string;
    s3_key?: string;
    report_id?: string;
    report_created_at?: string;
    report_name?: string;
    report_requested_at?: string;
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
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
    trace_id?: string;
    data?: any[];
    identifier?: string;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    store_id?: string;
    batch_id: string;
    company_id?: string;
    store_code?: string;
    data?: any;
    invoice?: any;
    invoice_status?: string;
    label?: any;
    do_invoice_label_generated: boolean;
    store_name?: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type FileResponse = {
    content_type?: string;
    namespace?: string;
    tags?: string[];
    file_name?: string;
    size?: number;
    cdn?: URL;
    file_path?: string;
    upload?: FileUploadResponse;
    operation?: string;
    method?: string;
};
type BulkListingPage = {
    type?: string;
    current?: number;
    total?: number;
    has_previous?: boolean;
    size?: number;
    has_next?: boolean;
};
type bulkListingData = {
    status?: string;
    store_id?: number;
    uploaded_on?: string;
    batch_id?: string;
    successful?: number;
    id?: string;
    user_id?: string;
    failed?: number;
    failed_shipments?: any[];
    company_id?: number;
    store_code?: string;
    user_name?: string;
    processing_shipments?: string[];
    processing?: number;
    store_name?: string;
    successful_shipments?: any[];
    total?: number;
    excel_url?: string;
    file_name?: string;
};
type BulkListingResponse = {
    error?: string;
    success?: boolean;
    page?: BulkListingPage;
    data?: bulkListingData[];
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
    status?: boolean;
    message?: string;
};
type BulkActionDetailsDataField = {
    successful_shipments_count?: number;
    batch_id?: string;
    total_shipments_count?: number;
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
    company_id?: string;
    failed_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    error?: string[];
    status?: boolean;
    success?: string;
    uploaded_on?: string;
    user_id?: string;
    message?: string;
    uploaded_by?: string;
    data?: BulkActionDetailsDataField[];
    failed_records?: string[];
};
type BagReturnableCancelableStatus = {
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_active: boolean;
};
type Brand = {
    brand_id: number;
    credit_note_allowed?: boolean;
    pickup_location?: string;
    is_virtual_invoice?: boolean;
    invoice_prefix?: string;
    logo?: string;
    start_date?: string;
    modified_on?: number;
    brand_name: string;
    company: string;
    script_last_ran?: string;
    credit_note_expiry_days?: number;
    created_on?: number;
};
type BagGSTDetails = {
    igst_gst_fee: string;
    sgst_tax_percentage: number;
    gst_fee: number;
    value_of_good: number;
    tax_collected_at_source: number;
    gst_tax_percentage: number;
    hsn_code_id: string;
    igst_tax_percentage: number;
    cgst_tax_percentage: number;
    gst_tag: string;
    cgst_gst_fee: string;
    gstin_code?: string;
    hsn_code: string;
    sgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    brand_calculated_amount: number;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    item_base_price?: number;
    po_line_amount?: number;
    po_tax_amount?: number;
    docker_number?: string;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Document = {
    value: string;
    url?: string;
    ds_type: string;
    legal_name: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    username?: string;
    user?: string;
    password?: string;
    enabled: boolean;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type EInvoicePortalDetails = {
    username?: string;
    user?: string;
    password?: string;
};
type StoreMeta = {
    display_name: string;
    documents?: StoreDocuments;
    gst_credentials: StoreGstCredentials;
    gst_number?: string;
    ewaybill_portal_details?: any;
    product_return_config?: any;
    additional_contact_details?: any;
    stage: string;
    timing?: any[];
    notification_emails?: string[];
    einvoice_portal_details?: EInvoicePortalDetails;
};
type StoreAddress = {
    address_type: string;
    address_category: string;
    landmark?: string;
    state: string;
    pincode: number;
    version?: string;
    address1: string;
    created_at: string;
    address2?: string;
    city: string;
    longitude: number;
    country: string;
    latitude: number;
    updated_at: string;
    phone: string;
    area?: string;
    email?: string;
    contact_person: string;
    country_code: string;
};
type Store = {
    store_active_from?: string;
    store_email: string;
    order_integration_id?: string;
    company_id: number;
    vat_no?: string;
    location_type: string;
    brand_store_tags?: string[];
    state: string;
    parent_store_id?: number;
    pincode: string;
    address1: string;
    meta: StoreMeta;
    created_at: string;
    login_username: string;
    address2?: string;
    city: string;
    longitude: number;
    country: string;
    fulfillment_channel: string;
    packaging_material_count?: number;
    brand_id?: any;
    code?: string;
    latitude: number;
    store_address_json?: StoreAddress;
    updated_at?: string;
    name: string;
    phone: number;
    alohomora_user_id?: number;
    mall_name?: string;
    is_archived?: boolean;
    contact_person: string;
    mall_area?: string;
    is_enabled_for_recon?: boolean;
    s_id: string;
    is_active?: boolean;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type Article = {
    _id: string;
    return_config?: ReturnConfig;
    code?: string;
    uid: string;
    a_set?: any;
    child_details?: any;
    size: string;
    seller_identifier: string;
    dimensions?: Dimensions;
    weight?: Weight;
    raw_meta?: any;
    identifiers: Identifier;
    is_set?: boolean;
    esp_modified?: any;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type ArticleDetails = {
    status?: any;
};
type Attributes = {
    primary_color?: string;
    gender?: string[];
    primary_material?: string;
    brand_name?: string;
    marketer_address?: string;
    essential?: string;
    name?: string;
    primary_color_hex?: string;
    marketer_name?: string;
};
type Item = {
    l2_category?: string[];
    brand: string;
    size: string;
    can_cancel?: boolean;
    can_return?: boolean;
    attributes: Attributes;
    meta?: any;
    l1_category?: string[];
    slug_key: string;
    l3_category?: number;
    l2_category_id?: number;
    department_id?: number;
    image: string[];
    last_updated_at?: string;
    brand_id: number;
    color?: string;
    code?: string;
    branch_url?: string;
    webstore_product_url?: string;
    gender?: string;
    l3_category_name?: string;
    name: string;
    l1_category_id?: number;
    item_id: number;
};
type AffiliateBagDetails = {
    affiliate_meta: AffiliateMeta;
    loyalty_discount?: number;
    affiliate_bag_id: string;
    affiliate_order_id: string;
    employee_discount?: number;
};
type BagDetailsPlatformResponse = {
    status: BagReturnableCancelableStatus;
    prices: Prices;
    brand: Brand;
    reasons?: any[];
    order_integration_id?: string;
    affiliate_details?: AffiliateDetails;
    seller_identifier?: string;
    identifier?: string;
    bag_update_time?: number;
    display_name?: string;
    gst_details: BagGSTDetails;
    line_number?: number;
    meta?: BagMeta;
    current_status: BagStatusHistory;
    ordering_store?: Store;
    restore_promos?: any;
    b_type?: string;
    operational_status?: string;
    article: Article;
    restore_coupon?: boolean;
    dates?: Dates;
    financial_breakup: FinancialBreakup[];
    parent_promo_bags?: any;
    qc_required?: any;
    current_operational_status: BagStatusHistory;
    article_details?: ArticleDetails;
    journey_type: string;
    shipment_id?: string;
    bag_status: BagStatusHistory[];
    item: Item;
    entity_type?: string;
    original_bag_list?: number[];
    quantity?: number;
    applied_promos?: any[];
    b_id: number;
    no_of_bags_order?: number;
    tags?: string[];
    bag_status_history?: BagStatusHistory;
    affiliate_bag_details: AffiliateBagDetails;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    item_total: number;
    current: number;
    size: number;
    has_next: boolean;
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
    message?: string;
    shipment_id?: string;
    error?: string;
    status?: number;
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
    mongo_article_id?: string;
    reason_ids?: number[];
    set_id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    fynd_order_id?: string;
    item_id?: string;
    affiliate_order_id?: string;
    bag_id?: number;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    reason_text: string;
    affiliate_order_id?: string;
    id?: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    action: string;
    entity_type: string;
    entities: Entities[];
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    bag_id?: number;
    is_locked?: boolean;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
};
type CheckResponse = {
    is_shipment_locked?: boolean;
    original_filter?: OriginalFilter;
    shipment_id?: string;
    affiliate_shipment_id?: string;
    status?: string;
    lock_status?: boolean;
    affiliate_id?: string;
    is_bag_locked?: boolean;
    bags?: Bags[];
};
type UpdateShipmentLockResponse = {
    message?: string;
    check_response?: CheckResponse[];
    success?: boolean;
};
type AnnouncementResponse = {
    company_id?: number;
    from_datetime?: string;
    platform_id?: string;
    platform_name?: string;
    logo_url?: string;
    description?: string;
    created_at?: string;
    title?: string;
    id: number;
    to_datetime?: string;
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
    identifier?: string;
    line_number?: number;
    quantity?: number;
};
type ProductsReasonsFilters = {
    identifier?: string;
    line_number?: number;
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
type ShipmentsRequest = {
    identifier: string;
    products?: Products[];
    reasons?: ReasonsData;
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
type UpdateShipmentStatusRequest = {
    statuses?: StatuesRequest[];
    force_transition?: boolean;
    task?: boolean;
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
};
type ShipmentsResponse = {
    stack_trace?: string;
    identifier?: string;
    status?: number;
    message?: string;
    final_state?: any;
    exception?: string;
    code?: string;
    meta?: any;
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
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    updated_at: string;
    token: string;
    meta?: AffiliateAppConfigMeta[];
    created_at: string;
    description?: string;
    name: string;
    owner: string;
    secret: string;
    id: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    id: string;
    token: string;
    config?: AffiliateConfig;
};
type OrderConfig = {
    create_user?: boolean;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    store_lookup?: string;
    affiliate: Affiliate;
    article_lookup?: string;
};
type OrderUser = {
    first_name: string;
    country: string;
    mobile: number;
    address1?: string;
    last_name: string;
    city: string;
    pincode: string;
    phone: number;
    email: string;
    state: string;
    address2?: string;
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
type ArticleDetails1 = {
    brand_id: number;
    attributes: any;
    weight: any;
    category: any;
    _id: string;
    dimension: any;
    quantity: number;
};
type ShipmentDetails = {
    dp_id?: number;
    shipments: number;
    affiliate_shipment_id: string;
    meta?: any;
    articles: ArticleDetails1[];
    fulfillment_id: number;
    box_type?: string;
};
type ShipmentConfig = {
    journey: string;
    identifier: string;
    location_details?: LocationDetails;
    source: string;
    to_pincode: string;
    action: string;
    shipment: ShipmentDetails[];
    payment_mode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    company_id: number;
    hsn_code_id: string;
    sku: string;
    affiliate_meta: any;
    delivery_charge: number;
    unit_price: number;
    fynd_store_id: string;
    price_marked: number;
    seller_identifier: string;
    item_size: string;
    item_id: number;
    _id: string;
    price_effective: number;
    pdf_links?: MarketPlacePdf;
    affiliate_store_id: string;
    transfer_price: number;
    store_id: number;
    identifier: any;
    avl_qty: number;
    amount_paid: number;
    modified_on: string;
    discount: number;
    quantity: number;
};
type OrderInfo = {
    affiliate_order_id?: string;
    items: any;
    billing_address: OrderUser;
    order_value: number;
    user: UserData;
    delivery_charges: number;
    cod_charges: number;
    coupon?: string;
    discount: number;
    shipping_address: OrderUser;
    order_priority?: OrderPriority;
    shipment?: ShipmentData;
    payment_mode: string;
    payment?: any;
    bags: AffiliateBag[];
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
    id: number;
    slug: string;
    description: string;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    ticket_id?: string;
    type: string;
    l1_detail?: string;
    user: string;
    l2_detail?: string;
    message: string;
    createdat: string;
    bag_id?: number;
    l3_detail?: string;
    ticket_url?: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type PostHistoryFilters = {
    shipment_id: string;
    line_number?: string;
    identifier?: string;
};
type PostHistoryData = {
    message: string;
    user_name: string;
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
type SmsDataPayload = {
    brand_name: string;
    customer_name: string;
    country_code: string;
    shipment_id: number;
    order_id: string;
    message: string;
    phone_number: number;
    amount_paid: number;
    payment_mode: string;
};
type SendSmsPayload = {
    bag_id: number;
    slug: string;
    data?: SmsDataPayload;
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
};
type Meta1 = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    bag_list?: number[];
    shipment_id?: string;
    id: number;
    status?: string;
    remarks?: string;
    meta: Meta1;
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
    shipment_ids?: string[];
    order_type: string;
    dp_id: number;
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type ProcessingDates = {
    customer_pickup_slot?: any;
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
    pack_by_date?: string;
    dispatch_by_date?: string;
    confirm_by_date?: string;
};
type Tax = {
    name: string;
    amount: any;
    breakup?: any[];
    rate: number;
};
type Charge = {
    type: string;
    name: string;
    amount: any;
    code?: string;
    tax?: Tax;
};
type LineItem = {
    charges?: Charge[];
    custom_messasge?: string;
    external_line_id?: string;
    seller_identifier: string;
    meta?: any;
    quantity?: number;
};
type Shipment = {
    external_shipment_id?: string;
    meta?: any;
    processing_dates?: ProcessingDates;
    line_items: LineItem[];
    location_id: number;
    priority?: number;
};
type ShippingInfo = {
    customer_code?: string;
    country: string;
    country_code?: string;
    shipping_type?: string;
    house_no?: string;
    address2?: string;
    middle_name?: string;
    floor_no?: string;
    landmark?: string;
    last_name?: string;
    city: string;
    title?: string;
    gender?: string;
    state: string;
    primary_email: string;
    first_name: string;
    slot?: any[];
    address1: string;
    alternate_email?: string;
    pincode: string;
    external_customer_code?: string;
    alternate_mobile_number?: string;
    state_code?: string;
    address_type?: string;
    geo_location?: any;
    primary_mobile_number: string;
};
type PaymentMethod = {
    refund_by: string;
    name: string;
    collect_by: string;
    mode: string;
    amount: number;
    meta?: any;
    transaction_data?: any;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type BillingInfo = {
    customer_code?: string;
    country: string;
    country_code?: string;
    house_no?: string;
    address2?: string;
    middle_name?: string;
    floor_no?: string;
    last_name?: string;
    city: string;
    title?: string;
    gender?: string;
    state: string;
    primary_email: string;
    first_name: string;
    address1: string;
    alternate_email?: string;
    pincode: string;
    external_customer_code?: string;
    alternate_mobile_number?: string;
    state_code?: string;
    primary_mobile_number: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type CreateOrderAPI = {
    shipments: Shipment[];
    shipping_info: ShippingInfo;
    payment_info: PaymentInfo;
    billing_info: BillingInfo;
    charges?: Charge[];
    external_creation_date?: string;
    external_order_id?: string;
    meta?: any;
    tax_info?: TaxInfo;
    currency_info?: any;
};
type CreateOrderErrorReponse = {
    stack_trace?: string;
    status: number;
    message: string;
    exception?: string;
    request_id?: string;
    code?: string;
    meta?: string;
    info?: any;
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
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    payment_info?: CreateChannelPaymentInfo;
    logo_url?: any;
    location_reassignment?: boolean;
    lock_states?: string[];
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
    acknowledged?: boolean;
    is_upserted?: boolean;
    is_inserted?: boolean;
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
    order_details?: FyndOrderIdList[];
    mobile: number;
    start_date: string;
    end_date: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    is_active?: boolean;
    app_id?: string;
    _custom_json?: any;
    words?: string[];
};
type GetSearchWordsData = {
    is_active?: boolean;
    result?: any;
    _custom_json?: any;
    words?: string[];
    app_id?: string;
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
type Media = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type AutocompletePageAction = {
    params?: any;
    type?: string;
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
    _custom_json?: any;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    app_id?: string;
    _custom_json?: any;
    results?: AutocompleteResult[];
    words?: string[];
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    results?: any[];
    words?: string[];
    app_id?: string;
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    words?: string[];
    _custom_json?: any;
    results?: any[];
};
type ProductBundleItem = {
    min_quantity: number;
    max_quantity: number;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    product_uid: number;
};
type ProductBundleRequest = {
    created_on?: string;
    modified_on?: string;
    name: string;
    is_active: boolean;
    created_by?: any;
    meta?: any;
    choice: string;
    modified_by?: any;
    slug: string;
    company_id?: number;
    page_visibility?: string[];
    products: ProductBundleItem[];
    logo?: string;
    same_store_assignment?: boolean;
};
type GetProductBundleCreateResponse = {
    created_on?: string;
    modified_on?: string;
    name: string;
    is_active: boolean;
    created_by?: any;
    id?: string;
    meta?: any;
    choice: string;
    modified_by?: any;
    slug: string;
    company_id?: number;
    page_visibility?: string[];
    products: ProductBundleItem[];
    logo?: string;
    same_store_assignment?: boolean;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    modified_on?: string;
    name: string;
    is_active: boolean;
    meta?: any;
    choice: string;
    modified_by?: any;
    slug: string;
    company_id?: number;
    page_visibility?: string[];
    products: ProductBundleItem[];
    logo?: string;
    same_store_assignment?: boolean;
};
type LimitedProductData = {
    images?: string[];
    name?: string;
    sizes?: string[];
    attributes?: any;
    price?: any;
    item_code?: string;
    quantity?: number;
    country_of_origin?: string;
    slug?: string;
    uid?: number;
    short_description?: string;
    identifier?: any;
};
type Size = {
    display?: string;
    is_available?: boolean;
    quantity?: number;
    value?: string;
};
type Price = {
    max_marked?: number;
    currency?: string;
    min_effective?: number;
    min_marked?: number;
    max_effective?: number;
};
type GetProducts = {
    min_quantity?: number;
    product_details?: LimitedProductData;
    max_quantity?: number;
    allow_remove?: boolean;
    sizes?: Size[];
    auto_add_to_cart?: boolean;
    price?: Price;
    auto_select?: boolean;
    product_uid?: number;
};
type GetProductBundleResponse = {
    name?: string;
    is_active?: boolean;
    meta?: any;
    choice?: string;
    slug?: string;
    company_id?: number;
    page_visibility?: string[];
    products?: GetProducts[];
    logo?: string;
    same_store_assignment?: boolean;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    created_on?: string;
    modified_on?: string;
    name: string;
    image?: string;
    brand_id?: number;
    created_by?: any;
    title: string;
    tag?: string;
    id?: string;
    description?: string;
    guide?: Guide;
    modified_by?: any;
    subtitle?: string;
    active?: boolean;
    company_id?: number;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    created_on?: string;
    modified_on?: string;
    name?: string;
    brand_id?: number;
    created_by?: any;
    tag?: string;
    title?: string;
    id?: string;
    modified_by?: any;
    guide?: any;
    subtitle?: string;
    active?: boolean;
    company_id?: number;
};
type SEOData = {
    title?: any;
    description?: any;
};
type MOQData = {
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    seo?: SEOData;
    is_cod?: boolean;
    is_gift?: boolean;
    moq?: MOQData;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
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
type ApplicationItemMeta = {
    alt_text?: any;
    _custom_json?: any;
    seo?: ApplicationItemSEO;
    is_cod?: boolean;
    is_gift?: boolean;
    moq?: ApplicationItemMOQ;
    _custom_meta?: MetaFields[];
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
type AttributeDetailsGroup = {
    name: string;
    key?: string;
    priority: number;
    unit?: string;
    is_active: boolean;
    logo?: string;
    display_type: string;
    slug?: string;
};
type AppConfigurationDetail = {
    name?: string;
    is_default: boolean;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    priority: number;
    app_id: string;
    logo?: string;
    slug: string;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    has_next: boolean;
    current: number;
    total_count: number;
    next: number;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    name?: string;
    is_default: boolean;
    is_active: boolean;
    key: string;
    priority: number;
    default_key: string;
    app_id: string;
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
    units?: any[];
    display?: string;
    key?: string;
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
    similar?: any;
    detail?: any;
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
type ConfigurationProductVariantConfig = {
    name: string;
    key: string;
    size: ProductSize;
    priority: number;
    is_active: boolean;
    logo?: string;
    display_type: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    key: string;
    title?: string;
    size?: ProductSize;
    priority: number;
    subtitle?: string;
    is_active: boolean;
    logo?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type ConfigurationListingSortConfig = {
    name?: string;
    key: string;
    priority: number;
    is_active: boolean;
    logo?: string;
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
    map_values?: any[];
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    sort?: string;
    map?: any;
};
type ConfigurationListingFilterConfig = {
    name?: string;
    key: string;
    value_config?: ConfigurationListingFilterValue;
    display_name?: string;
    priority: number;
    type: string;
    is_active: boolean;
    logo?: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type AppConfiguration = {
    created_on?: string;
    modified_on?: string;
    product?: ConfigurationProduct;
    config_type: string;
    config_id?: string;
    created_by?: any;
    listing?: ConfigurationListing;
    type?: string;
    modified_by?: any;
    app_id: string;
};
type AppCatalogConfiguration = {
    created_on?: string;
    modified_on?: string;
    product?: ConfigurationProduct;
    config_type: string;
    config_id?: string;
    created_by?: any;
    id?: string;
    listing?: ConfigurationListing;
    type?: string;
    modified_by?: any;
    app_id: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    product?: GetCatalogConfigurationDetailsProduct;
    config_type: string;
    config_id?: string;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersValue = {
    currency_symbol?: string;
    selected_min?: number;
    selected_max?: number;
    value: any;
    min?: number;
    display_format?: string;
    query_format?: string;
    display: string;
    is_selected: boolean;
    currency_code?: string;
    max?: number;
    count?: number;
};
type ProductFiltersKey = {
    name: string;
    kind?: string;
    display: string;
    operators?: string[];
    logo?: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type ProductSortOn = {
    is_selected?: boolean;
    name?: string;
    value?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    operators: any;
};
type CollectionSchedule = {
    end?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
    start?: string;
    cron?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type UserInfo = {
    uid?: string;
    username?: string;
    user_id?: string;
    email?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CreateCollection = {
    _schedule?: CollectionSchedule;
    visible_facets_keys?: string[];
    badge?: CollectionBadge;
    modified_by?: UserInfo;
    type: string;
    priority?: number;
    published?: boolean;
    is_active?: boolean;
    app_id: string;
    is_visible?: boolean;
    name: string;
    banners: CollectionBanner;
    _custom_json?: any;
    description?: string;
    tags?: string[];
    allow_facets?: boolean;
    _locale_language?: any;
    meta?: any;
    query?: CollectionQuery[];
    slug: string;
    logo: CollectionImage;
    created_by?: UserInfo;
    seo?: SeoDetail;
    allow_sort?: boolean;
    sort_on?: string;
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
type CollectionCreateResponse = {
    _schedule?: any;
    visible_facets_keys?: string[];
    badge?: any;
    priority?: number;
    type?: string;
    is_active?: boolean;
    app_id?: string;
    name?: string;
    banners?: ImageUrls;
    description?: string;
    allow_facets?: boolean;
    tag?: string[];
    meta?: any;
    query?: CollectionQuery[];
    slug?: string;
    logo?: BannerImage;
    allow_sort?: boolean;
    sort_on?: string;
    cron?: any;
};
type Media1 = {
    meta?: any;
    type?: string;
    url: string;
};
type GetCollectionDetailNest = {
    _schedule?: any;
    visible_facets_keys?: string[];
    badge?: any;
    priority?: number;
    type?: string;
    is_active?: boolean;
    app_id?: string;
    name?: string;
    action?: Action;
    banners?: ImageUrls;
    description?: string;
    uid?: string;
    allow_facets?: boolean;
    tag?: string[];
    meta?: any;
    query?: CollectionQuery[];
    slug?: string;
    logo?: Media1;
    allow_sort?: boolean;
    cron?: any;
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
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
    page?: Page;
};
type CollectionDetailResponse = {
    _schedule?: any;
    visible_facets_keys?: string[];
    badge?: any;
    priority?: number;
    type?: string;
    is_active?: boolean;
    app_id?: string;
    name?: string;
    banners?: ImageUrls;
    description?: string;
    uid?: string;
    allow_facets?: boolean;
    tag?: string[];
    meta?: any;
    query?: CollectionQuery[];
    slug?: string;
    logo?: Media1;
    allow_sort?: boolean;
    cron?: any;
};
type UpdateCollection = {
    _schedule?: CollectionSchedule;
    visible_facets_keys?: string[];
    badge?: CollectionBadge;
    modified_by?: UserInfo;
    priority?: number;
    type?: string;
    published?: boolean;
    is_active?: boolean;
    is_visible?: boolean;
    name?: string;
    banners?: CollectionBanner;
    _custom_json?: any;
    description?: string;
    tags?: string[];
    allow_facets?: boolean;
    _locale_language?: any;
    meta?: any;
    query?: CollectionQuery[];
    slug?: string;
    logo?: CollectionImage;
    seo?: SeoDetail;
    allow_sort?: boolean;
    sort_on?: string;
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
type ProductBrand = {
    uid?: number;
    name?: string;
    logo?: Media1;
    action?: Action;
};
type Price1 = {
    min?: number;
    currency_code?: string;
    currency_symbol?: string;
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
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductListingDetail = {
    tryouts?: string[];
    brand?: ProductBrand;
    attributes?: any;
    medias?: Media1[];
    product_online_date?: string;
    type?: string;
    rating_count?: number;
    name?: string;
    price?: ProductListingPrice;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    item_code?: string;
    uid?: number;
    item_type?: string;
    discount?: string;
    image_nature?: string;
    slug: string;
    short_description?: string;
    teaser_tag?: any;
    sellable?: boolean;
    has_variant?: boolean;
    similars?: string[];
    color?: string;
    highlights?: string[];
    promo_meta?: any;
    rating?: number;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    page?: Page;
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    sellable_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    available_articles?: number;
    name?: string;
    available_sizes?: number;
    total_sizes?: number;
    article_freshness?: number;
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
    opt_level: string;
    store_ids?: number[];
    brand_ids?: number[];
    company_id?: number;
    enabled?: boolean;
};
type CompanyOptIn = {
    platform: string;
    modified_on: number;
    created_on: number;
    created_by?: any;
    opt_level: string;
    enabled: boolean;
    modified_by?: any;
    store_ids: number[];
    brand_ids: number[];
    company_id: number;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    name?: string;
    uid?: number;
    business_type?: string;
    company_type?: string;
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
    company?: string;
    store?: number;
    brand?: number;
};
type StoreDetail = {
    created_on?: string;
    modified_on?: string;
    name?: string;
    timing?: any;
    store_type?: string;
    manager?: any;
    display_name?: string;
    additional_contacts?: any[];
    store_code?: string;
    address?: any;
    company_id?: number;
    documents?: any[];
    uid?: number;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    mandatory?: boolean;
    format?: string;
    multi?: boolean;
    allowed_values?: string[];
    type: string;
    range?: AttributeSchemaRange;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type AttributeMasterFilter = {
    priority?: number;
    depends_on?: string[];
    indexing: boolean;
};
type GenderDetail = {
    name?: string;
    details?: AttributeMasterDetails;
    schema?: AttributeMaster;
    id?: string;
    description?: string;
    meta?: AttributeMasterMeta;
    is_nested?: boolean;
    enabled_for_end_consumer?: boolean;
    filters?: AttributeMasterFilter;
    departments?: string[];
    slug?: string;
    logo?: string;
};
type CategoriesResponse = {
    template_slug?: string;
    name?: string;
    slug_key?: string;
    slug?: string;
    uid?: number;
};
type ProdcutTemplateCategoriesResponse = {
    items?: CategoriesResponse[];
    page?: Page;
};
type PTErrorResponse = {
    code?: string;
    status?: number;
    errors?: any;
    meta?: any;
    message?: string;
};
type DepartmentCreateUpdate = {
    tags?: string[];
    name: string;
    platforms?: any;
    _custom_json?: any;
    _cls?: string;
    synonyms?: string[];
    is_active?: boolean;
    uid?: number;
    priority_order: number;
    logo: string;
    slug?: string;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    username?: string;
    user_id?: string;
    _id?: string;
    uid?: string;
    contact?: string;
};
type GetDepartment = {
    created_on?: string;
    modified_on?: string;
    name?: string;
    item_type?: string;
    created_by?: UserSerializer;
    search?: string;
    modified_by?: UserSerializer;
    page_size?: number;
    synonyms?: string[];
    is_active?: boolean;
    uid?: number;
    priority_order?: number;
    logo?: string;
    page_no?: number;
    slug?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    code?: string;
    status?: number;
    errors?: any;
    meta?: any;
    message?: string;
};
type UserDetail = {
    username: string;
    contact?: string;
    super_user?: boolean;
    user_id: string;
};
type DepartmentModel = {
    created_on: string;
    modified_on: string;
    name: any;
    is_active?: boolean;
    created_by?: UserDetail;
    verified_on?: string;
    _custom_json?: any;
    modified_by?: UserDetail;
    _id?: any;
    _cls?: any;
    synonyms?: any[];
    logo: string;
    slug: any;
    uid: number;
    priority_order: number;
    verified_by?: UserDetail;
};
type ProductTemplate = {
    created_on?: string;
    modified_on?: string;
    name?: string;
    is_active?: boolean;
    attributes?: string[];
    is_expirable: boolean;
    created_by?: any;
    tag?: string;
    categories?: string[];
    is_physical: boolean;
    description?: string;
    departments?: string[];
    modified_by?: any;
    is_archived?: boolean;
    slug: string;
    logo?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    command?: any;
    trader_type?: any;
    is_active?: any;
    category_slug?: any;
    variants?: any;
    name?: any;
    currency?: any;
    brand_uid?: any;
    custom_order?: any;
    multi_size?: any;
    is_dependent?: any;
    hsn_code?: any;
    trader?: any;
    description?: any;
    item_code?: any;
    media?: any;
    tags?: any;
    item_type?: any;
    sizes?: any;
    no_of_boxes?: any;
    product_publish?: any;
    size_guide?: any;
    slug?: any;
    short_description?: any;
    teaser_tag?: any;
    product_group_tag?: any;
    return_config?: any;
    country_of_origin?: any;
    highlights?: any;
};
type GlobalValidation = {
    definitions?: any;
    title?: string;
    required?: string[];
    description?: string;
    type?: string;
    properties?: Properties;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    name?: string;
    is_active?: boolean;
    attributes?: string[];
    is_expirable: boolean;
    tag?: string;
    categories?: string[];
    is_physical: boolean;
    id?: string;
    description?: string;
    departments?: string[];
    is_archived?: boolean;
    slug: string;
    logo?: string;
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
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadItemsData = {
    templates?: string[];
    type?: string;
    brand?: string[];
};
type ProductDownloadsItems = {
    created_by?: VerifiedBy;
    seller_id?: number;
    status?: string;
    id?: string;
    trigger_on?: string;
    url?: string;
    task_id?: string;
    completed_on?: string;
    data?: ProductDownloadItemsData;
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
type Hierarchy = {
    l2: number;
    l1: number;
    department: number;
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
    landscape: string;
    logo: string;
    portrait: string;
};
type CategoryRequestBody = {
    tryouts?: string[];
    name: string;
    is_active: boolean;
    hierarchy?: Hierarchy[];
    departments: number[];
    priority?: number;
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    media?: Media2;
    slug?: string;
    level: number;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type Category = {
    created_on?: string;
    tryouts?: string[];
    name: string;
    modified_on?: string;
    is_active: boolean;
    created_by?: any;
    hierarchy?: Hierarchy[];
    id?: string;
    departments: number[];
    priority?: number;
    modified_by?: any;
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    media?: Media2;
    slug?: string;
    uid?: number;
    level: number;
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
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type Trader = {
    type?: string;
    name: any;
    address?: string[];
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductCreateUpdateSchemaV2 = {
    requester?: string;
    attributes?: any;
    is_active?: boolean;
    category_slug: string;
    variants?: any;
    name: string;
    currency: string;
    action?: string;
    custom_order?: CustomOrder;
    multi_size?: boolean;
    is_dependent?: boolean;
    net_quantity?: NetQuantity;
    trader: Trader[];
    variant_group?: any;
    variant_media?: any;
    _custom_json?: any;
    item_code: string;
    description?: string;
    departments: number[];
    template_tag: string;
    media?: Media1[];
    company_id: number;
    uid?: number;
    country_of_origin: string;
    tax_identifier: TaxIdentifier;
    tags?: string[];
    item_type: string;
    sizes: any[];
    no_of_boxes?: number;
    bulk_job_id?: string;
    is_image_less_product?: boolean;
    product_publish?: ProductPublish;
    size_guide?: string;
    change_request_id?: any;
    short_description?: string;
    slug: string;
    teaser_tag?: TeaserTag;
    product_group_tag?: string[];
    return_config: ReturnConfig;
    brand_uid: number;
    is_set?: boolean;
    highlights?: string[];
};
type Image = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type Logo = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
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
    time?: number;
    unit?: string;
};
type Product = {
    primary_color?: string;
    images?: Image[];
    brand?: Brand;
    attributes?: any;
    pending?: string;
    all_sizes?: any[];
    stage?: string;
    modified_by?: any;
    all_company_ids?: number[];
    is_active?: boolean;
    category_slug?: string;
    variants?: any;
    verified_by?: VerifiedBy;
    name?: string;
    currency?: string;
    custom_order?: any;
    multi_size?: boolean;
    is_dependent?: boolean;
    net_quantity?: NetQuantityResponse;
    hsn_code?: string;
    is_physical?: boolean;
    variant_group?: any;
    variant_media?: any;
    _custom_json?: any;
    trader?: Trader[];
    description?: string;
    item_code?: string;
    departments?: number[];
    category_uid?: number;
    template_tag?: string;
    verified_on?: string;
    media?: Media1[];
    company_id?: number;
    uid?: number;
    country_of_origin?: string;
    tax_identifier?: any;
    tags?: string[];
    item_type?: string;
    modified_on?: string;
    sizes?: any[];
    no_of_boxes?: number;
    category?: any;
    image_nature?: string;
    product_publish?: ProductPublished;
    size_guide?: string;
    is_image_less_product?: boolean;
    short_description?: string;
    slug?: string;
    moq?: any;
    teaser_tag?: any;
    created_on?: string;
    product_group_tag?: string[];
    all_identifiers?: string[];
    created_by?: any;
    id?: string;
    return_config?: ReturnConfigResponse;
    color?: string;
    brand_uid?: number;
    is_set?: boolean;
    l3_mapping?: string[];
    highlights?: string[];
    is_expirable?: boolean;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductVariants = {
    name?: string;
    media?: Media1[];
    item_code?: string;
    category_uid?: number;
    brand_uid?: number;
    uid?: number;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    modified_by?: any;
    filters: AttributeMasterFilter;
    synonyms?: any;
    variant?: boolean;
    name?: string;
    details: AttributeMasterDetails;
    suggestion?: string;
    is_nested?: boolean;
    description?: string;
    departments: string[];
    raw_key?: string;
    tags?: string[];
    modified_on?: string;
    enabled_for_end_consumer?: boolean;
    slug: string;
    logo?: string;
    created_on?: string;
    created_by?: any;
    schema: AttributeMaster;
    unit?: string;
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
    identifiers?: ValidateIdentifier[];
    item_length: number;
    item_dimensions_unit_of_measure: string;
    size: any;
    item_height: number;
    item_width: number;
    item_weight: number;
    item_weight_unit_of_measure: any;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    uid?: string;
    username?: string;
    user_id?: string;
    email?: string;
};
type BulkJob = {
    created_on: string;
    modified_on?: string;
    file_path?: string;
    total?: number;
    created_by?: UserInfo1;
    cancelled_records?: any[];
    succeed?: number;
    failed?: number;
    stage?: string;
    modified_by?: UserInfo1;
    tracking_url?: string;
    template_tag?: string;
    is_active?: boolean;
    company_id: number;
    custom_template_tag?: string;
    failed_records?: any[];
    cancelled?: number;
};
type BulkResponse = {
    created_on: string;
    modified_on?: string;
    created_by?: UserInfo1;
    batch_id: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
};
type UserDetail1 = {
    username?: string;
    full_name?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    created_on?: string;
    modified_on?: string;
    file_path?: string;
    template?: ProductTemplate;
    total?: number;
    created_by?: UserDetail1;
    cancelled_records?: string[];
    failed?: number;
    stage?: string;
    succeed?: number;
    modified_by?: UserDetail1;
    template_tag?: string;
    is_active?: boolean;
    company_id?: number;
    failed_records?: string[];
    cancelled?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    company_id: number;
    template_tag: string;
    data: any[];
    batch_id: string;
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
    created_on?: string;
    modified_on?: string;
    file_path?: string;
    total?: number;
    created_by?: UserCommon;
    succeed?: number;
    failed?: number;
    stage?: string;
    modified_by?: UserCommon;
    tracking_url?: string;
    id?: string;
    company_id?: number;
    is_active?: boolean;
    cancelled_records?: string[];
    retry?: number;
    failed_records?: string[];
    cancelled?: number;
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
    uid?: number;
    brand_uid?: number;
    item_code?: string;
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
    name?: string;
    quantity?: number;
    size_distribution: SizeDistribution;
};
type InvSize = {
    expiration_date?: string;
    item_width?: number;
    item_length?: number;
    identifiers: GTIN[];
    currency: string;
    price?: number;
    item_dimensions_unit_of_measure?: string;
    size: any;
    price_transfer?: number;
    store_code: string;
    set?: InventorySet;
    price_effective: number;
    quantity: number;
    is_set?: boolean;
    item_height?: number;
    item_weight?: number;
    item_weight_unit_of_measure?: string;
};
type InventoryRequest = {
    company_id: number;
    item: ItemQuery;
    sizes: InvSize[];
};
type InventoryResponse = {
    item_id?: number;
    identifiers?: any;
    currency?: string;
    sellable_quantity?: number;
    price?: number;
    store?: any;
    size?: string;
    price_transfer?: number;
    price_effective?: number;
    seller_identifier?: string;
    quantity?: number;
    inventory_updated_on?: string;
    uid?: string;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type BrandMeta = {
    name: string;
    id: number;
};
type CompanyMeta = {
    id: number;
};
type DimensionResponse = {
    height: number;
    width: number;
    unit: string;
    length: number;
    is_default: boolean;
};
type PriceMeta = {
    currency: string;
    effective: number;
    tp_notes?: any;
    transfer: number;
    updated_at?: string;
    marked: number;
};
type Trader1 = {
    type: string;
    name: string;
    address: string[];
};
type ManufacturerResponse = {
    is_default: boolean;
    name: string;
    address: string;
};
type WeightResponse = {
    is_default: boolean;
    shipping: number;
    unit: string;
};
type ReturnConfig1 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
    damaged?: QuantityBase;
    sellable?: QuantityBase;
};
type InventorySellerResponse = {
    fragile: boolean;
    item_id: number;
    brand: BrandMeta;
    added_on_store?: string;
    store: StoreMeta;
    size: string;
    stage?: string;
    set?: InventorySet;
    modified_by?: UserSerializer;
    company: CompanyMeta;
    is_active?: boolean;
    identifier: any;
    dimension: DimensionResponse;
    price: PriceMeta;
    trader?: Trader1[];
    trace_id?: string;
    _custom_json?: any;
    total_quantity: number;
    uid: string;
    tax_identifier?: any;
    tags?: string[];
    fynd_meta?: any;
    track_inventory?: boolean;
    manufacturer: ManufacturerResponse;
    meta?: any;
    weight: WeightResponse;
    expiration_date?: string;
    created_by?: UserSerializer;
    return_config?: ReturnConfig1;
    seller_identifier: string;
    fynd_item_code: string;
    fynd_article_code: string;
    quantities?: Quantities;
    country_of_origin: string;
    is_set?: boolean;
    raw_meta?: any;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type ArticleStoreResponse = {
    uid?: number;
    name?: string;
    store_type?: string;
    store_code?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type DimensionResponse1 = {
    width?: number;
    height?: number;
    unit?: string;
    length?: number;
};
type PriceArticle = {
    currency?: string;
    effective?: number;
    tp_notes?: any;
    transfer?: number;
    marked?: number;
};
type Trader2 = {
    type?: string;
    name?: string;
    address?: string[];
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    name?: string;
    address?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type ReturnConfig2 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    not_available?: Quantity;
    order_committed?: Quantity;
    damaged?: Quantity;
    sellable?: Quantity;
};
type GetInventories = {
    item_id?: number;
    brand?: BrandMeta1;
    store?: ArticleStoreResponse;
    size?: string;
    stage?: string;
    modified_by?: UserSerializer;
    company?: CompanyMeta1;
    platforms?: any;
    identifier?: any;
    dimension?: DimensionResponse1;
    price?: PriceArticle;
    trader?: Trader2[];
    trace_id?: string;
    total_quantity?: number;
    date_meta?: DateMeta;
    uid?: string;
    tax_identifier?: any;
    tags?: string[];
    track_inventory?: boolean;
    manufacturer?: ManufacturerResponse1;
    inventory_updated_on?: string;
    weight?: WeightResponse1;
    expiration_date?: string;
    created_by?: UserSerializer;
    id?: string;
    return_config?: ReturnConfig2;
    seller_identifier?: string;
    quantities?: QuantitiesArticle;
    country_of_origin?: string;
    is_set?: boolean;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    created_on?: string;
    modified_on?: string;
    file_path?: string;
    total?: number;
    created_by?: any;
    failed?: number;
    id?: string;
    stage?: string;
    modified_by?: any;
    succeed?: number;
    company_id?: number;
    is_active?: boolean;
    cancelled_records?: string[];
    failed_records?: string[];
    cancelled?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    tags?: string[];
    expiration_date?: string;
    currency?: string;
    price?: number;
    item_dimensions_unit_of_measure?: string;
    price_marked?: number;
    trace_id?: string;
    total_quantity?: number;
    store_code: string;
    seller_identifier: string;
    price_effective?: number;
    quantity?: number;
    item_weight_unit_of_measure?: string;
};
type InventoryBulkRequest = {
    company_id: number;
    user?: any;
    batch_id: string;
    sizes: InventoryJobPayload[];
};
type InventoryExportRequest = {
    type?: string;
    store?: number[];
    brand?: number[];
};
type InventoryExportResponse = {
    request_params?: any;
    seller_id: number;
    status?: string;
    trigger_on?: string;
    task_id: string;
};
type InventoryExportJob = {
    request_params?: any;
    seller_id: number;
    status?: string;
    trigger_on?: string;
    url?: string;
    task_id: string;
    completed_on?: string;
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
    tags?: string[];
    expiration_date?: string;
    trace_id?: string;
    price_marked?: number;
    total_quantity?: number;
    seller_identifier: string;
    price_effective?: number;
    store_id: number;
};
type InventoryRequestSchemaV2 = {
    meta?: any;
    company_id: number;
    payload?: InventoryPayload[];
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
    is_active?: boolean;
    threshold1: number;
    hsn_code: string;
    hs2_code: string;
    tax_on_mrp: boolean;
    tax2?: number;
    threshold2?: number;
    company_id: number;
    uid?: number;
    tax_on_esp?: boolean;
    tax1: number;
};
type HsnCodesObject = {
    modified_on?: string;
    threshold1?: number;
    hsn_code?: string;
    hs2_code?: string;
    tax_on_mrp?: boolean;
    id?: string;
    tax2?: number;
    threshold2?: number;
    company_id?: number;
    tax_on_esp?: boolean;
    tax1?: number;
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
    threshold: number;
    cess?: number;
    rate: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    created_on?: string;
    modified_on?: string;
    hsn_code_id?: string;
    created_by?: any;
    hsn_code: string;
    country_code: string;
    taxes: TaxSlab[];
    description: string;
    type: string;
    modified_by?: any;
    reporting_hsn: string;
};
type PageResponse = {
    item_total?: number;
    has_next?: boolean;
    size?: number;
    has_previous?: boolean;
    current?: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    name?: string;
    action?: Action;
    banners?: ImageUrls;
    discount?: string;
    departments?: string[];
    slug?: string;
    uid?: number;
    logo?: Media;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    name?: string;
    slug?: string;
    uid?: number;
    priority_order?: number;
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
    name?: string;
    action?: Action;
    banners?: ImageUrls;
    childs?: any[];
    _custom_json?: any;
    slug?: string;
    uid?: number;
};
type SecondLevelChild = {
    name?: string;
    action?: Action;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
    _custom_json?: any;
    slug?: string;
    uid?: number;
};
type Child = {
    name?: string;
    action?: Action;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
    _custom_json?: any;
    slug?: string;
    uid?: number;
};
type CategoryItems = {
    name?: string;
    action?: Action;
    banners?: ImageUrls;
    childs?: Child[];
    slug?: string;
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
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    operators?: any;
    page: Page;
};
type ProductDetail = {
    tryouts?: string[];
    brand?: ProductBrand;
    attributes?: any;
    medias?: Media1[];
    product_online_date?: string;
    type?: string;
    rating_count?: number;
    name?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    item_code?: string;
    uid?: number;
    item_type?: string;
    image_nature?: string;
    slug: string;
    short_description?: string;
    teaser_tag?: any;
    has_variant?: boolean;
    similars?: string[];
    color?: string;
    highlights?: string[];
    promo_meta?: any;
    rating?: number;
};
type InventoryPage = {
    item_total: number;
    has_next?: boolean;
    has_previous?: boolean;
    type: string;
    next_id?: string;
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
    ignored_stores?: number[];
    item_id: number;
    size: string;
};
type AssignStoreArticle = {
    group_id?: string;
    article_assignment?: ArticleAssignment;
    meta?: any;
    quantity?: number;
    query?: ArticleQuery;
};
type AssignStore = {
    channel_identifier?: string;
    channel_type?: string;
    store_ids?: number[];
    app_id: string;
    company_id?: number;
    articles: AssignStoreArticle[];
    pincode: string;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    group_id?: string;
    article_assignment: ArticleAssignment1;
    item_id: number;
    index?: number;
    strategy_wise_listing?: any[];
    status: boolean;
    size: string;
    price_marked?: number;
    store_id?: number;
    store_pincode?: number;
    meta?: any;
    price_effective?: number;
    _id?: string;
    quantity: number;
    s_city?: string;
    company_id?: number;
    uid?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type GetAddressSerializer = {
    country?: string;
    landmark?: string;
    address1?: string;
    latitude?: number;
    state?: string;
    country_code?: string;
    address_type?: string;
    longitude?: number;
    city?: string;
    address2?: string;
    pincode?: number;
};
type UserSerializer1 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type UserSerializer2 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetCompanySerializer = {
    created_on?: string;
    modified_on?: string;
    name?: string;
    created_by?: UserSerializer2;
    business_type?: string;
    verified_on?: string;
    stage?: string;
    modified_by?: UserSerializer2;
    company_type?: string;
    addresses?: GetAddressSerializer[];
    reject_reason?: string;
    uid?: number;
    verified_by?: UserSerializer2;
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
    opening?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
    closing?: LocationTimingSerializer;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
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
type GetLocationSerializer = {
    contact_numbers?: SellerPhoneNumber[];
    phone_number: string;
    stage?: string;
    address: GetAddressSerializer;
    modified_by?: UserSerializer1;
    warnings?: any;
    company?: GetCompanySerializer;
    product_return_config?: ProductReturnConfigSerializer;
    verified_by?: UserSerializer1;
    name: string;
    timing?: LocationDayWiseSerializer[];
    manager?: LocationManagerSerializer;
    verified_on?: string;
    _custom_json?: any;
    notification_emails?: string[];
    integration_type?: LocationIntegrationType;
    uid?: number;
    modified_on?: string;
    code: string;
    gst_credentials?: InvoiceDetailsSerializer;
    documents?: Document[];
    created_on?: string;
    store_type?: string;
    created_by?: UserSerializer1;
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
    is_active?: boolean;
    _custom_json?: any;
    app_id: string;
    uid: number;
    logo?: string;
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
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type GetCompanyProfileSerializerResponse = {
    franchise_enabled?: boolean;
    business_details?: BusinessDetails;
    mode?: string;
    modified_on?: string;
    created_by?: UserSerializer;
    created_on?: string;
    business_info?: string;
    business_type: string;
    warnings?: any;
    business_country_info?: BusinessCountryInfo;
    notification_emails?: string[];
    company_type: string;
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    uid: number;
    contact_details?: ContactDetails;
    verified_on?: string;
    modified_by?: UserSerializer;
    stage?: string;
    verified_by?: UserSerializer;
    taxes?: CompanyTaxesSerializer[];
    name?: string;
    documents?: Document[];
};
type CreateUpdateAddressSerializer = {
    address_type: string;
    country_code?: string;
    pincode: number;
    country: string;
    address1: string;
    state: string;
    longitude: number;
    city: string;
    landmark?: string;
    address2?: string;
    latitude: number;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type UpdateCompany = {
    franchise_enabled?: boolean;
    business_details?: BusinessDetails;
    addresses?: CreateUpdateAddressSerializer[];
    company_type?: string;
    _custom_json?: any;
    business_info?: string;
    business_type?: string;
    contact_details?: ContactDetails;
    reject_reason?: string;
    warnings?: any;
    taxes?: CompanyTaxesSerializer1[];
    documents?: Document[];
    name?: string;
    notification_emails?: string[];
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
    brand?: DocumentsObj;
    store?: DocumentsObj;
    product?: DocumentsObj;
    store_documents?: DocumentsObj;
    company_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    mode?: string;
    description?: string;
    modified_on?: string;
    created_by?: UserSerializer;
    created_on?: string;
    warnings?: any;
    synonyms?: string[];
    _custom_json?: any;
    _locale_language?: any;
    uid?: number;
    verified_on?: string;
    logo?: string;
    modified_by?: UserSerializer;
    stage?: string;
    verified_by?: UserSerializer;
    banner?: BrandBannerSerializer;
    slug_key?: string;
    reject_reason?: string;
    name: string;
};
type CreateUpdateBrandRequestSerializer = {
    description?: string;
    _custom_json?: any;
    uid?: number;
    banner?: BrandBannerSerializer;
    brand_tier?: string;
    company_id?: number;
    logo: string;
    name: string;
    synonyms?: string[];
    _locale_language?: any;
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
    addresses?: GetAddressSerializer[];
    company_type: string;
    modified_on?: string;
    uid?: number;
    created_by?: UserSerializer;
    created_on?: string;
    verified_by?: UserSerializer;
    market_channels?: string[];
    business_type: string;
    details?: CompanyDetails;
    stage?: string;
    _custom_json?: any;
    reject_reason?: string;
    verified_on?: string;
    name?: string;
    modified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    notification_emails?: string[];
};
type CompanyBrandSerializer = {
    stage?: string;
    modified_on?: string;
    uid?: number;
    created_by?: UserSerializer;
    created_on?: string;
    verified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    company?: CompanySerializer;
    reject_reason?: string;
    verified_on?: string;
    warnings?: any;
    modified_by?: UserSerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    uid?: number;
    company: number;
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
type AddressSerializer = {
    country_code?: string;
    pincode?: number;
    country?: string;
    address1?: string;
    state?: string;
    longitude: number;
    city?: string;
    landmark?: string;
    latitude: number;
    address2?: string;
    address_type?: string;
};
type LocationSerializer = {
    address: AddressSerializer;
    stage?: string;
    code: string;
    uid?: number;
    _custom_json?: any;
    notification_emails?: string[];
    display_name: string;
    company: number;
    timing?: LocationDayWiseSerializer[];
    holiday?: HolidaySchemaSerializer[];
    warnings?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    store_type?: string;
    manager?: LocationManagerSerializer;
    name: string;
    contact_numbers?: SellerPhoneNumber[];
    product_return_config?: ProductReturnConfigSerializer;
    documents?: Document[];
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
    empty_cart?: boolean;
    pan_card?: PanCardConfig;
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
type PanCardConfig = {
    enabled?: boolean;
    threshold_amount?: number;
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
type CouponSchedule = {
    next_schedule?: any[];
    start?: string;
    duration?: number;
    end?: string;
    cron?: string;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type Rule = {
    discount_qty?: number;
    value?: number;
    max?: number;
    min?: number;
    key?: number;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    subtitle?: string;
    auto?: DisplayMetaDict;
    title?: string;
    description?: string;
    remove?: DisplayMetaDict;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type RuleDefinition = {
    calculate_on: string;
    is_exact?: boolean;
    scope?: string[];
    auto_apply?: boolean;
    value_type: string;
    applicable_on: string;
    type: string;
    currency_code?: string;
};
type Validity = {
    priority?: number;
};
type PriceRange = {
    max?: number;
    min?: number;
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
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    networks?: string[];
    types?: string[];
    codes?: string[];
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    price_range?: PriceRange;
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    post_order?: PostOrder;
    ordering_stores?: number[];
    payments?: any;
    bulk_bundle?: BulkBundleRestriction;
    user_groups?: number[];
    user_type?: string;
    platforms?: string[];
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type CouponAdd = {
    _schedule?: CouponSchedule;
    tags?: string[];
    ownership: Ownership;
    code: string;
    rule: Rule[];
    display_meta: DisplayMeta;
    author?: CouponAuthor;
    date_meta?: CouponDateMeta;
    type_slug: string;
    validation?: Validation;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    identifiers: Identifier;
    validity: Validity;
    restrictions?: Restrictions;
    state?: State;
};
type CouponsResponse = {
    items?: CouponAdd;
    page?: Page;
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
    _schedule?: CouponSchedule;
    tags?: string[];
    ownership: Ownership;
    code: string;
    rule: Rule[];
    display_meta: DisplayMeta;
    author?: CouponAuthor;
    date_meta?: CouponDateMeta;
    type_slug: string;
    validation?: Validation;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    identifiers: Identifier;
    validity: Validity;
    restrictions?: Restrictions;
    state?: State;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
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
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    uses?: PaymentAllowValue1;
    codes?: string[];
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type Restrictions1 = {
    uses: UsesRestriction1;
    post_order?: PostOrder1;
    order_quantity?: number;
    user_id?: string[];
    anonymous_users?: boolean;
    payments?: PromotionPaymentModes[];
    user_registered?: UserRegistered;
    user_groups?: number[];
    platforms?: string[];
};
type DisplayMeta1 = {
    description?: string;
    offer_label?: string;
    offer_text?: string;
    name?: string;
};
type CompareObject = {
    equals?: number;
    greater_than?: number;
    less_than_equals?: number;
    greater_than_equals?: number;
    less_than?: number;
};
type ItemCriteria = {
    item_id?: number[];
    item_brand?: number[];
    item_category?: number[];
    item_exclude_company?: number[];
    product_tags?: string[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_store?: number[];
    cart_unique_item_quantity?: CompareObject;
    buy_rules?: string[];
    available_zones?: string[];
    item_exclude_category?: number[];
    item_size?: string[];
    item_company?: number[];
    cart_quantity?: CompareObject;
    item_exclude_brand?: number[];
    all_items?: boolean;
    item_store?: number[];
    cart_total?: CompareObject;
    item_sku?: string[];
    item_exclude_sku?: string[];
    item_exclude_id?: number[];
};
type DiscountOffer = {
    apportion_discount?: boolean;
    code?: string;
    discount_percentage?: number;
    max_discount_amount?: number;
    min_offer_quantity?: number;
    partial_can_ret?: boolean;
    max_usage_per_transaction?: number;
    discount_amount?: number;
    discount_price?: number;
    max_offer_quantity?: number;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
    discount_type: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionSchedule = {
    next_schedule?: any[];
    start: string;
    duration?: number;
    end?: string;
    cron?: string;
    published: boolean;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionListItem = {
    currency?: string;
    code?: string;
    promo_group: string;
    stackable?: boolean;
    apply_all_discount?: boolean;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    discount_rules: DiscountRule[];
    apply_exclusive?: string;
    post_order_action?: PromotionAction;
    mode: string;
    visiblility?: Visibility;
    author?: PromotionAuthor;
    buy_rules: any;
    date_meta?: PromotionDateMeta;
    _schedule?: PromotionSchedule;
    calculate_on?: string;
    ownership: Ownership1;
    application_id: string;
    apply_priority?: number;
    _custom_json?: any;
    promotion_type: string;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    currency?: string;
    code?: string;
    promo_group: string;
    stackable?: boolean;
    apply_all_discount?: boolean;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    discount_rules: DiscountRule[];
    apply_exclusive?: string;
    post_order_action?: PromotionAction;
    mode: string;
    visiblility?: Visibility;
    author?: PromotionAuthor;
    buy_rules: any;
    date_meta?: PromotionDateMeta;
    _schedule?: PromotionSchedule;
    calculate_on?: string;
    ownership: Ownership1;
    application_id: string;
    apply_priority?: number;
    _custom_json?: any;
    promotion_type: string;
};
type PromotionUpdate = {
    currency?: string;
    code?: string;
    promo_group: string;
    stackable?: boolean;
    apply_all_discount?: boolean;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    discount_rules: DiscountRule[];
    apply_exclusive?: string;
    post_order_action?: PromotionAction;
    mode: string;
    visiblility?: Visibility;
    author?: PromotionAuthor;
    buy_rules: any;
    date_meta?: PromotionDateMeta;
    _schedule?: PromotionSchedule;
    calculate_on?: string;
    ownership: Ownership1;
    application_id: string;
    apply_priority?: number;
    _custom_json?: any;
    promotion_type: string;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    created_on?: string;
    subtitle?: string;
    entity_type?: string;
    example?: string;
    modified_on?: string;
    title?: string;
    type?: string;
    entity_slug?: string;
    description?: string;
    is_hidden?: boolean;
};
type CartItem = {
    product_id: string;
    size: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type FreeGiftItem = {
    item_id?: number;
    item_name?: string;
    item_slug?: string;
    item_brand_name?: string;
    item_price_details?: any;
    item_images_url?: string[];
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
    article_id?: string;
    quantity?: number;
};
type DiscountRulesApp = {
    raw_offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
    offer?: any;
};
type AppliedPromotion = {
    promo_id?: string;
    promotion_group?: string;
    ownership?: Ownership2;
    offer_text?: string;
    buy_rules?: BuyRules[];
    applied_free_articles?: AppliedFreeArticles[];
    article_quantity?: number;
    discount_rules?: DiscountRulesApp[];
    promotion_name?: string;
    mrp_promotion?: boolean;
    amount?: number;
    promotion_type?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type ProductImage = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    type?: string;
    query?: ActionQuery;
    url?: string;
};
type CartProduct = {
    categories?: CategoryInfo[];
    images?: ProductImage[];
    brand?: BaseInfo;
    action?: ProductAction;
    name?: string;
    item_code?: string;
    uid?: number;
    type?: string;
    net_quantity?: NetQuantity;
    slug?: string;
};
type PromoMeta = {
    message?: string;
};
type ProductPrice = {
    marked?: number;
    selling?: number;
    currency_symbol?: string;
    add_on?: number;
    currency_code?: string;
    effective?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductAvailability = {
    other_store_quantity?: number;
    deliverable?: boolean;
    sizes?: string[];
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
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    seller?: BaseInfo;
    size?: string;
    extra_meta?: any;
    price?: ArticlePriceInfo;
    uid?: string;
    store?: BaseInfo;
    type?: string;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    _custom_json?: any;
    quantity?: number;
};
type CartProductInfo = {
    bulk_offer?: any;
    promotions_applied?: AppliedPromotion[];
    is_set?: boolean;
    product?: CartProduct;
    promo_meta?: PromoMeta;
    discount?: string;
    price_per_unit?: ProductPriceInfo;
    message?: string;
    price?: ProductPriceInfo;
    identifiers: CartProductIdentifer;
    availability?: ProductAvailability;
    coupon_message?: string;
    key?: string;
    article?: ProductArticle;
    parent_item_identifiers?: any;
    quantity?: number;
};
type RawBreakup = {
    you_saved?: number;
    mrp_total?: number;
    convenience_fee?: number;
    discount?: number;
    coupon?: number;
    cod_charge?: number;
    delivery_charge?: number;
    total?: number;
    fynd_cash?: number;
    gst_charges?: number;
    subtotal?: number;
    vog?: number;
};
type DisplayBreakup = {
    value?: number;
    currency_symbol?: string;
    message?: string[];
    currency_code?: string;
    display?: string;
    key?: string;
};
type CouponBreakup = {
    coupon_type?: string;
    code?: string;
    value?: number;
    sub_title?: string;
    is_applied?: boolean;
    title?: string;
    uid?: string;
    max_discount_value?: number;
    type?: string;
    coupon_value?: number;
    minimum_cart_value?: number;
    message?: string;
    description?: string;
};
type LoyaltyPoints = {
    total?: number;
    description?: string;
    applicable?: number;
    is_applied?: boolean;
};
type CartBreakup = {
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
};
type OpenapiCartDetailsResponse = {
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    message?: string;
    errors?: any;
    success?: boolean;
};
type ShippingAddress = {
    meta?: any;
    area_code: string;
    area_code_slug?: string;
    country?: string;
    email?: string;
    pincode?: number;
    country_phone_code?: string;
    name?: string;
    country_code?: string;
    landmark?: string;
    country_iso_code?: string;
    phone?: number;
    address_type?: string;
    address?: string;
    state?: string;
    city?: string;
    area?: string;
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
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    message?: string;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiOrderItem = {
    product_id: number;
    extra_meta?: any;
    delivery_charges: number;
    meta?: CartItemMeta;
    cashback_applied: number;
    discount: number;
    amount_paid: number;
    price_marked: number;
    employee_discount?: number;
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    price_effective: number;
    cod_charges: number;
    loyalty_discount?: number;
    coupon_effective_discount: number;
    quantity?: number;
    size: string;
};
type OpenApiPlatformCheckoutReq = {
    payment_mode?: string;
    affiliate_order_id?: string;
    files?: OpenApiFiles[];
    shipping_address?: ShippingAddress;
    coupon_code: string;
    order_id?: string;
    currency_code?: string;
    employee_discount?: any;
    cod_charges: number;
    billing_address: ShippingAddress;
    cashback_applied: number;
    coupon?: string;
    payment_methods: MultiTenderPaymentMethod[];
    cart_value: number;
    comment?: string;
    coupon_value: number;
    cart_items: OpenApiOrderItem[];
    loyalty_discount?: number;
    gstin?: string;
    delivery_charges: number;
};
type OpenApiCheckoutResponse = {
    message?: string;
    order_ref_id?: string;
    order_id: string;
    success?: boolean;
};
type AbandonedCart = {
    pick_up_customer_details?: any;
    payment_mode?: string;
    bulk_coupon_discount?: number;
    promotion?: any;
    meta?: any;
    payments?: any;
    order_id?: string;
    fc_index_map?: number[];
    articles: any[];
    checkout_mode?: string;
    merge_qty?: boolean;
    _id: string;
    cart_value?: number;
    app_id?: string;
    delivery_charges?: any;
    cashback: any;
    last_modified: string;
    expire_at: string;
    user_id: string;
    is_default: boolean;
    buy_now?: boolean;
    cod_charges?: any;
    created_on: string;
    is_active?: boolean;
    discount?: number;
    coupon?: any;
    payment_methods?: any[];
    uid: number;
    comment?: string;
    is_archive?: boolean;
    gstin?: string;
    shipments?: any[];
    fynd_credits?: any;
};
type AbandonedCartResponse = {
    result?: any;
    items?: AbandonedCart[];
    success?: boolean;
    message?: string;
    page?: Page;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    checkout_mode?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    payment_selection_lock?: PaymentSelectionLock;
    pan_config?: any;
    pan_no?: string;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    last_modified?: string;
    comment?: string;
    breakup_values?: CartBreakup;
    id?: string;
    is_valid?: boolean;
    message?: string;
    coupon_text?: string;
    buy_now?: boolean;
    gstin?: string;
    restrict_checkout?: boolean;
};
type AddProductCart = {
    item_id?: number;
    article_id?: string;
    article_assignment?: any;
    extra_meta?: any;
    seller_id?: number;
    store_id?: number;
    pos?: boolean;
    product_group_tags?: string[];
    display?: string;
    parent_item_identifiers?: any;
    _custom_json?: any;
    quantity?: number;
    item_size?: string;
};
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    message?: string;
    cart?: CartDetailResponse;
    partial?: boolean;
    success?: boolean;
};
type UpdateProductCart = {
    item_id?: number;
    article_id?: string;
    extra_meta?: any;
    item_index?: number;
    identifiers: CartProductIdentifer;
    parent_item_identifiers?: any;
    _custom_json?: any;
    quantity?: number;
    item_size?: string;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    message?: string;
    cart?: CartDetailResponse;
    success?: boolean;
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
    created_on?: string;
    source?: any;
    meta?: any;
    token?: string;
    user?: any;
};
type SharedCart = {
    currency?: CartCurrency;
    shared_cart_details?: SharedCartDetails;
    message?: string;
    checkout_mode?: string;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    last_modified?: string;
    buy_now?: boolean;
    delivery_charge_info?: string;
    uid?: string;
    comment?: string;
    breakup_values?: CartBreakup;
    id?: string;
    is_valid?: boolean;
    cart_id?: number;
    coupon_text?: string;
    gstin?: string;
};
type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
type CartList = {
    created_on?: string;
    pick_up_customer_details?: any;
    user_id?: string;
    cart_value?: number;
    cart_id?: string;
    item_counts?: number;
};
type MultiCartResponse = {
    success?: boolean;
    data?: CartList[];
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    currency?: CartCurrency;
    message?: string;
    pan_config?: any;
    checkout_mode?: string;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    last_modified?: string;
    user?: UserInfo;
    buy_now?: boolean;
    delivery_charge_info?: string;
    pan_no?: string;
    comment?: string;
    breakup_values?: CartBreakup;
    id?: string;
    is_valid?: boolean;
    coupon_text?: string;
    gstin?: string;
};
type DeleteCartDetailResponse = {
    message?: string;
    success?: boolean;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type Coupon = {
    coupon_type?: string;
    sub_title?: string;
    is_applied?: boolean;
    coupon_code?: string;
    title?: string;
    max_discount_value?: number;
    is_applicable?: boolean;
    expires_on?: string;
    coupon_value?: number;
    minimum_cart_value?: number;
    message?: string;
    description?: string;
};
type PageCoupon = {
    total_item_count?: number;
    total?: number;
    has_previous?: boolean;
    current?: number;
    has_next?: boolean;
};
type GetCouponResponse = {
    available_coupon_list?: Coupon[];
    page?: PageCoupon;
};
type ApplyCouponRequest = {
    coupon_code: string;
};
type GeoLocation = {
    latitude?: number;
    longitude?: number;
};
type PlatformAddress = {
    tags?: string[];
    meta?: any;
    is_default_address?: boolean;
    checkout_mode?: string;
    area_code_slug?: string;
    email?: string;
    phone?: string;
    address_type?: string;
    area?: string;
    area_code?: string;
    name?: string;
    user_id?: string;
    is_active?: boolean;
    country?: string;
    google_map_point?: any;
    created_by_user_id?: string;
    country_code?: string;
    landmark?: string;
    id?: string;
    cart_id?: string;
    address?: string;
    state?: string;
    city?: string;
    geo_location?: GeoLocation;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type SaveAddressResponse = {
    id?: string;
    is_default_address?: boolean;
    success?: boolean;
};
type UpdateAddressResponse = {
    is_updated?: boolean;
    is_default_address?: boolean;
    id?: string;
    success?: boolean;
};
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
type PlatformSelectCartAddressRequest = {
    cart_id?: string;
    checkout_mode?: string;
    billing_address_id?: string;
    id?: string;
};
type ShipmentResponse = {
    dp_id?: string;
    fulfillment_id?: number;
    box_type?: string;
    order_type?: string;
    shipment_type?: string;
    fulfillment_type?: string;
    dp_options?: any;
    items?: CartProductInfo[];
    promise?: ShipmentPromise;
    shipments?: number;
};
type CartShipmentsResponse = {
    currency?: CartCurrency;
    error?: boolean;
    last_modified?: string;
    message?: string;
    buy_now?: boolean;
    checkout_mode?: string;
    shipments?: ShipmentResponse[];
    is_valid?: boolean;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    uid?: string;
    comment?: string;
    breakup_values?: CartBreakup;
    id?: string;
    payment_selection_lock?: PaymentSelectionLock;
    cart_id?: number;
    coupon_text?: string;
    gstin?: string;
    restrict_checkout?: boolean;
};
type UpdateCartShipmentItem = {
    article_uid: string;
    quantity?: number;
    shipment_type: string;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    checkout_mode?: string;
    pick_up_customer_details?: any;
    pan_no?: string;
    comment?: string;
    gstin?: string;
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
    _id: string;
    employee_code?: string;
    first_name: string;
    user: string;
    last_name: string;
};
type PlatformCartCheckoutDetailRequest = {
    delivery_address?: any;
    payment_mode: string;
    meta?: any;
    files?: Files[];
    pos?: boolean;
    merchant_code?: string;
    billing_address?: any;
    checkout_mode?: string;
    aggregator?: string;
    ordering_store?: number;
    pick_at_store_uid?: number;
    billing_address_id?: string;
    user_id: string;
    staff?: StaffCheckout;
    payment_identifier?: string;
    order_type: string;
    extra_meta?: any;
    callback_url?: string;
    address_id?: string;
    payment_auto_confirm?: boolean;
    device_id?: string;
    id: string;
    payment_params?: any;
};
type CheckCart = {
    currency?: CartCurrency;
    error_message?: string;
    cod_available?: boolean;
    order_id?: string;
    success?: boolean;
    message?: string;
    checkout_mode?: string;
    store_emps?: any[];
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    user_type?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
    delivery_charges?: number;
    cod_message?: string;
    last_modified?: string;
    buy_now?: boolean;
    cod_charges?: number;
    delivery_charge_info?: string;
    delivery_charge_order_value?: number;
    uid?: string;
    comment?: string;
    breakup_values?: CartBreakup;
    id?: string;
    is_valid?: boolean;
    cart_id?: number;
    coupon_text?: string;
    store_code?: string;
    gstin?: string;
};
type CartCheckoutResponse = {
    app_intercept_url?: string;
    payment_confirm_url?: string;
    callback_url?: string;
    cart?: CheckCart;
    order_id?: string;
    success?: boolean;
    message?: string;
    data?: any;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    area_code?: string;
    area_code_slug?: string;
    country?: string;
    email?: string;
    pincode?: number;
    name?: string;
    uid?: number;
    landmark?: string;
    store_code?: string;
    id?: number;
    phone?: string;
    address_type?: string;
    address?: string;
    state?: string;
    city?: string;
    area?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    payment_mode?: string;
    address_id?: string;
    id?: string;
    aggregator_name?: string;
    merchant_code?: string;
    payment_identifier?: string;
};
type CouponValidity = {
    code?: string;
    discount?: number;
    title?: string;
    display_message_en?: string;
    valid?: boolean;
};
type PaymentCouponValidate = {
    message?: string;
    coupon_validity?: CouponValidity;
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
type RemoveProxyResponse = {
    message?: string;
    data?: any;
};
type APIError = {
    code?: string;
    message?: string;
    info?: string;
    request_id?: string;
    meta?: any;
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
