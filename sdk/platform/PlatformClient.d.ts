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
    documentEngine: DocumentEngine;
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, UserDataInfo, Prices, PlatformItem, GSTDetailsData, BagUnit, PaymentModeInfo, ShipmentItemFulFillingStore, ShipmentStatus, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, Dimensions, Meta, ShipmentPayments, OrderDetailsData, FulfillingStore, ShipmentStatusData, TrackingList, UserDetailsData, DPDetailsData, OrderingStoreDetails, BagConfigs, OrderBrandName, OrderBagArticle, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagStateMapper, CurrentStatus, PlatformDeliveryAddress, Identifier, FinancialBreakup, BagGST, OrderBags, DebugInfo, EInvoice, EinvoiceInfo, ShipmentTimeStamp, BuyerDetails, Formatted, LockData, ShipmentMeta, PDFLinks, AffiliateMeta, AffiliateDetails, BagStatusHistory, PlatformShipment, ShipmentInfoResponse, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, B2BPODetails, BagMeta, Brand, ReturnConfig, Weight, Article, Attributes, Item, BagReturnableCancelableStatus, AffiliateBagDetails, StoreEwaybill, StoreEinvoice, StoreGstCredentials, EInvoicePortalDetails, Document, StoreDocuments, StoreMeta, StoreAddress, Store, ArticleDetails, Dates, BagGSTDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, Products, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryStoreConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, MarketPlacePdf, AffiliateBag, OrderUser, UserData, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, OrderPriority, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, Meta1, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ProcessingDates, Tax, Charge, LineItem, Shipment, TaxInfo, PaymentMethod, PaymentInfo, ShippingInfo, BillingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, CollectionQuery, BannerImage, ImageUrls, GetCollectionDetailNest, GetCollectionListingResponse, UserInfo, CollectionSchedule, CollectionImage, CollectionBadge, CollectionBanner, SeoDetail, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, Price1, ProductListingPrice, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, CategoryMappingValues, CategoryMapping, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Trader, Logo, ProductPublish, ReturnConfigResponse, Image, NetQuantityResponse, ProductSchemaV2, ProductListingResponseV2, CustomOrder, ProductPublish1, TeaserTag, TaxIdentifier, NetQuantity, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, WeightResponse, Trader1, PriceMeta, BrandMeta, ReturnConfig1, DimensionResponse, CompanyMeta, QuantityBase, Quantities, ManufacturerResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, WeightResponse1, Trader2, PriceArticle, ArticleStoreResponse, BrandMeta1, ReturnConfig2, DimensionResponse1, CompanyMeta1, Quantity, QuantitiesArticle, ManufacturerResponse1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, PageResponse, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, LocationIntegrationType, SellerPhoneNumber, LocationManagerSerializer, UserSerializer1, GetAddressSerializer, UserSerializer2, GetCompanySerializer, ProductReturnConfigSerializer, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, Website, BusinessDetails, CompanyTaxesSerializer, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponAuthor, PostOrder, PriceRange, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, BulkBundleRestriction, Restrictions, RuleDefinition, CouponSchedule, DisplayMetaDict, DisplayMeta, CouponDateMeta, Rule, State, Validity, Validation, Ownership, CouponAction, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PostOrder1, UserRegistered, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, PromotionDateMeta, Ownership1, PromotionAuthor, PromotionAction, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, DisplayMeta1, PromotionSchedule, Visibility, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CouponBreakup, RawBreakup, LoyaltyPoints, DisplayBreakup, CartBreakup, BasePrice, ArticlePriceInfo, BaseInfo, ProductArticle, ProductPrice, ProductPriceInfo, Ownership2, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, ProductImage, CategoryInfo, ActionQuery, ProductAction, CartProduct, ProductAvailability, PromoMeta, CartProductIdentifer, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, Files, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, GenerateBulkInvoiceLabelShipment, GenerateBulkInvoiceOrLabelUrl, DocumentType, BulkListBadRequestResponse, BulkListFailedResponse, SuccessResponseGenerateBulkShipment, SuccessResponseBulkStatus, GenerateBulkUrlSuccessResponse, InternalErrorResponseGenerateBulkShipment, BadRequestResponseGenerateBulkUrl, InternalErrorResponseGenerateBulkUrl, GenerateBulkShipment, GenerateBulkUrl, GetBulkStatusRequest, BadRequestResponseGenerateBulkItemParameters, BadRequestResponseGenerateBulkItem, SuccessResponseGenerateBulk, BadRequestResponseGenerateBulk, InternalErrorResponseGenerateBulk, ShippingToAddress, SellerAddress, BoxDetails, GenerateBulkBoxLabel, GenerateBulkShipmentLabel, GenerateNoc, PackageDetails, PackageItemDetails, GenerateBulkPackageLabel, SignedSuccessResponse, BulkPresignedSuccessResponse, SignedBadRequestResponse, SignedFailedResponse, StatusSuccessResponse, StatusBadRequestResponse, StatusFailedResponse, GenerateManifest, GeneratePresignedManifestUrl, ManifestLink, GenerateManifestUrlSuccessResponse, ManifestListFailedResponse, InvoiceLabelPresignedRequestBody, GeneratePOSReceipts, SuccessResponseGeneratePOSReceipts, BadRequestResponseGeneratePOSReceipts, InternalErrorResponseGeneratePOSReceipts, InvoiceInfo };
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
import DocumentEngine = require("./DocumentEngine/DocumentEnginePlatformClient");
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
    aggregators?: any[];
    excluded_fields: string[];
    app_id: string;
    success: boolean;
    display_fields: string[];
    created: boolean;
};
type ErrorCodeDescription = {
    success: boolean;
    code: string;
    description: string;
};
type PaymentGatewayConfig = {
    key: string;
    secret: string;
    config_type: string;
    merchant_salt: string;
    is_active?: boolean;
};
type PaymentGatewayConfigRequest = {
    is_active?: boolean;
    app_id: string;
    aggregator_name?: PaymentGatewayConfig;
};
type PaymentGatewayToBeReviewed = {
    success: boolean;
    aggregator: string[];
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
    package_name?: string;
    logos?: PaymentModeLogo;
    display_name?: string;
    code?: string;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    card_type?: string;
    card_issuer?: string;
    cod_limit_per_order?: number;
    card_brand_image?: string;
    card_isin?: string;
    merchant_code?: string;
    exp_month?: number;
    card_id?: string;
    nickname?: string;
    card_fingerprint?: string;
    timeout?: number;
    display_name?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    intent_app?: IntentApp[];
    cod_limit?: number;
    fynd_vpa?: string;
    exp_year?: number;
    code?: string;
    retry_count?: number;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_token?: string;
    aggregator_name: string;
    card_brand?: string;
    intent_app_error_list?: string[];
    intent_flow?: boolean;
    name?: string;
    expired?: boolean;
    display_priority?: number;
    card_number?: string;
    card_reference?: string;
    logo_url?: PaymentModeLogo;
    card_name?: string;
    remaining_limit?: number;
};
type RootPaymentMode = {
    save_card?: boolean;
    display_name: string;
    aggregator_name?: string;
    list?: PaymentModeList[];
    anonymous_enable?: boolean;
    add_card_enabled?: boolean;
    name: string;
    is_pay_by_card_pl?: boolean;
    display_priority: number;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type Payout = {
    transfer_type: string;
    more_attributes: any;
    is_active: boolean;
    payouts_aggregators: any[];
    is_default: boolean;
    unique_transfer_no: any;
    customers: any;
};
type PayoutsResponse = {
    items: Payout[];
    success: boolean;
};
type PayoutBankDetails = {
    ifsc_code: string;
    account_holder?: string;
    state?: string;
    account_type: string;
    branch_name?: string;
    bank_name?: string;
    country?: string;
    pincode?: number;
    account_no?: string;
    city?: string;
};
type PayoutRequest = {
    transfer_type: string;
    bank_details: PayoutBankDetails;
    unique_external_id: string;
    aggregator: string;
    is_active: boolean;
    users: any;
};
type PayoutResponse = {
    payouts: any;
    payment_status: string;
    transfer_type: string;
    success: boolean;
    bank_details: any;
    aggregator: string;
    is_active: boolean;
    unique_transfer_no: string;
    users: any;
    created: boolean;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    success: boolean;
    is_active: boolean;
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
    is_verified_flag?: boolean;
    success: boolean;
    data?: any;
    message: string;
};
type NotFoundResourceError = {
    success: boolean;
    code: string;
    description: string;
};
type BankDetailsForOTP = {
    ifsc_code: string;
    account_holder: string;
    branch_name: string;
    bank_name: string;
    account_no: string;
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
    delights_user_name?: string;
    title: string;
    account_holder: string;
    subtitle: string;
    bank_name: string;
    account_no: string;
    modified_on: string;
    beneficiary_id: string;
    transfer_mode: string;
    display_name: string;
    email: string;
    comment?: string;
    ifsc_code: string;
    mobile?: string;
    created_on: string;
    id: number;
    branch_name?: string;
    is_active: boolean;
    address: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    payment_id?: string;
    extra_meta?: any;
    payment_gateway?: string;
    current_status?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    mode: string;
    amount: number;
    name?: string;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    order_id: string;
    success: boolean;
    message: string;
};
type PlatformPaymentOptions = {
    methods: any;
    anonymous_cod?: boolean;
    cod_charges?: number;
    enabled: boolean;
    payment_selection_lock?: any;
    mode_of_payment: string;
    callback_url?: any;
    cod_amount_limit?: number;
    source: string;
};
type PlatfromPaymentConfig = {
    success: boolean;
    message: string;
    data: PlatformPaymentOptions;
};
type UpdatePlatformPaymentConfig = {
    methods: any;
    anonymous_cod?: boolean;
    cod_charges?: number;
    cod_amount_limit?: number;
    payment_selection_lock?: any;
};
type CODdata = {
    usages: number;
    is_active: boolean;
    limit: number;
    user_id: string;
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
    inactive_device_count: number;
    active_device_count: number;
};
type EdcDeviceStatsResponse = {
    success: boolean;
    statistics: StatisticsData;
};
type EdcAddRequest = {
    terminal_serial_no: string;
    device_tag?: string;
    store_id: number;
    aggregator_id: number;
    edc_model: string;
    edc_device_serial_no: string;
};
type EdcDevice = {
    terminal_serial_no: string;
    aggregator_name?: string;
    application_id: string;
    terminal_unique_identifier: string;
    device_tag: string;
    edc_model?: string;
    store_id: number;
    is_active: boolean;
    aggregator_id: number;
    merchant_store_pos_code?: string;
    edc_device_serial_no: string;
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
    device_tag?: string;
    edc_model?: string;
    store_id?: number;
    is_active?: string;
    aggregator_id?: number;
    merchant_store_pos_code?: string;
    edc_device_serial_no?: string;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    success: boolean;
    items: EdcDevice[];
    page: Page;
};
type PaymentInitializationRequest = {
    order_id: string;
    merchant_order_id: string;
    device_id?: string;
    amount: number;
    razorpay_payment_id?: string;
    timeout?: number;
    customer_id: string;
    aggregator: string;
    contact: string;
    method: string;
    email: string;
    currency: string;
    vpa?: string;
};
type PaymentInitializationResponse = {
    merchant_order_id: string;
    device_id?: string;
    amount?: number;
    razorpay_payment_id?: string;
    upi_poll_url?: string;
    virtual_id?: string;
    timeout?: number;
    bqr_image?: string;
    success: boolean;
    customer_id?: string;
    aggregator: string;
    aggregator_order_id?: string;
    status?: string;
    polling_url: string;
    method: string;
    currency?: string;
    vpa?: string;
};
type PaymentStatusUpdateRequest = {
    order_id: string;
    merchant_order_id: string;
    device_id?: string;
    amount: number;
    customer_id: string;
    aggregator: string;
    contact: string;
    status: string;
    method: string;
    email: string;
    currency: string;
    vpa?: string;
};
type PaymentStatusUpdateResponse = {
    aggregator_name: string;
    success?: boolean;
    retry: boolean;
    status: string;
    redirect_url?: string;
};
type ResendOrCancelPaymentRequest = {
    order_id: string;
    device_id?: string;
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
    text: string;
    value?: string;
    name?: string;
};
type FiltersInfo = {
    text: string;
    value: string;
    options?: FilterInfoOption[];
    type: string;
};
type UserDataInfo = {
    avis_user_id?: string;
    gender?: string;
    uid?: number;
    name?: string;
    mobile?: string;
    is_anonymous_user?: boolean;
    email?: string;
    last_name?: string;
    first_name?: string;
};
type Prices = {
    discount?: number;
    cashback_applied?: number;
    refund_amount?: number;
    fynd_credits?: number;
    price_effective?: number;
    tax_collected_at_source?: number;
    coupon_value?: number;
    promotion_effective_discount?: number;
    price_marked?: number;
    cod_charges?: number;
    delivery_charge?: number;
    amount_paid?: number;
    cashback?: number;
    refund_credit?: number;
    value_of_good?: number;
    amount_paid_roundoff?: number;
};
type PlatformItem = {
    images?: string[];
    can_cancel?: boolean;
    department_id?: number;
    id?: number;
    l3_category_name?: string;
    l3_category?: number;
    name?: string;
    code?: string;
    color?: string;
    size?: string;
    image?: string[];
    l1_category?: string[];
    can_return?: boolean;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    gstin_code: string;
    gst_fee: number;
    brand_calculated_amount: number;
    value_of_good: number;
};
type BagUnit = {
    prices?: Prices;
    can_cancel?: boolean;
    can_return?: boolean;
    item_quantity: number;
    ordering_channel: string;
    total_shipment_bags: number;
    item?: PlatformItem;
    bag_id: number;
    status: any;
    gst?: GSTDetailsData;
    shipment_id: string;
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
    title: string;
    ops_status: string;
    actual_status: string;
    hex_code: string;
    status: string;
};
type ShipmentItem = {
    user?: UserDataInfo;
    prices?: Prices;
    bags?: BagUnit[];
    created_at: string;
    application?: any;
    payment_methods?: any;
    id: string;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_centre: string;
    channel?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    sla?: any;
    total_bags_count: number;
    total_shipments_in_order: number;
    company?: any;
    shipment_status?: ShipmentStatus;
    shipment_created_at: number;
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
type Dimensions = {
    unit?: string;
    length?: number;
    height?: number;
    is_default?: boolean;
    width?: number;
};
type Meta = {
    dimension?: Dimensions;
};
type ShipmentPayments = {
    mode?: string;
    logo?: string;
    source?: string;
};
type OrderDetailsData = {
    tax_details?: any;
    fynd_order_id: string;
    cod_charges?: string;
    source?: string;
    order_value?: string;
    affiliate_id?: string;
    ordering_channel?: string;
    order_date?: string;
    ordering_channel_logo?: any;
};
type FulfillingStore = {
    address: string;
    meta: any;
    id: number;
    contact_person: string;
    country: string;
    fulfillment_channel: string;
    store_name: string;
    state: string;
    pincode: string;
    city: string;
    code: string;
    phone: string;
};
type ShipmentStatusData = {
    created_at?: string;
    bag_list?: string[];
    id?: number;
    status?: string;
    shipment_id?: string;
};
type TrackingList = {
    time?: string;
    text: string;
    is_passed?: boolean;
    is_current?: boolean;
    status: string;
};
type UserDetailsData = {
    address: string;
    country: string;
    state: string;
    pincode: string;
    name: string;
    city: string;
    email?: string;
    phone: string;
};
type DPDetailsData = {
    track_url?: string;
    gst_tag?: string;
    id?: number;
    eway_bill_id?: string;
    country?: string;
    pincode?: string;
    awb_no?: string;
    name?: string;
};
type OrderingStoreDetails = {
    address: string;
    meta: any;
    id: number;
    contact_person: string;
    country: string;
    store_name: string;
    state: string;
    pincode: string;
    city: string;
    code: string;
    phone: string;
};
type BagConfigs = {
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
    allow_force_return: boolean;
    enable_tracking: boolean;
    is_active: boolean;
};
type OrderBrandName = {
    brand_name: string;
    modified_on?: string;
    id: number;
    logo: string;
    created_on: string;
    company: string;
};
type OrderBagArticle = {
    return_config?: any;
    identifiers?: any;
    uid?: string;
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
    promo_id?: string;
    promotion_name?: string;
    promotion_type?: string;
    amount?: number;
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
    article_quantity?: number;
    discount_rules?: DiscountRules[];
};
type BagStateMapper = {
    display_name: string;
    journey_type: string;
    app_facing?: boolean;
    bs_id: number;
    state_type: string;
    app_state_name?: string;
    notify_customer?: boolean;
    name: string;
    app_display_name?: string;
    is_active?: boolean;
};
type CurrentStatus = {
    current_status_id: number;
    created_at?: string;
    kafka_sync?: boolean;
    delivery_awb_number?: string;
    store_id?: number;
    state_type?: string;
    delivery_partner_id?: number;
    bag_id?: number;
    bag_state_mapper?: BagStateMapper;
    state_id?: number;
    updated_at?: number;
    status?: string;
    shipment_id?: string;
};
type PlatformDeliveryAddress = {
    created_at?: string;
    address1?: string;
    address_type?: string;
    address_category?: string;
    country?: string;
    landmark?: string;
    contact_person?: string;
    area?: string;
    address2?: string;
    latitude?: number;
    state?: string;
    pincode?: string;
    longitude?: number;
    version?: string;
    city?: string;
    updated_at?: string;
    email?: string;
    phone?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    coupon_value: number;
    brand_calculated_amount: number;
    value_of_good: number;
    discount: number;
    fynd_credits: number;
    gst_fee: number;
    promotion_effective_discount: number;
    total_units: number;
    amount_paid: number;
    refund_credit: number;
    amount_paid_roundoff?: number;
    gst_tax_percentage: number;
    item_name: string;
    price_effective: number;
    coupon_effective_discount: number;
    gst_tag: string;
    delivery_charge: number;
    cod_charges: number;
    price_marked: number;
    cashback: number;
    hsn_code: string;
    identifiers: Identifier;
    added_to_fynd_cash: boolean;
    tax_collected_at_source?: number;
    cashback_applied: number;
    transfer_price: number;
    size: string;
};
type BagGST = {
    gst_tag?: string;
    gstin_code?: string;
    gst_fee?: number;
    is_default_hsn_code?: boolean;
    brand_calculated_amount?: number;
    hsn_code?: string;
    value_of_good?: number;
    gst_tax_percentage?: number;
};
type OrderBags = {
    prices?: Prices;
    bag_configs?: BagConfigs;
    brand?: OrderBrandName;
    article?: OrderBagArticle;
    seller_identifier?: string;
    applied_promos?: AppliedPromos[];
    identifier?: string;
    item?: PlatformItem;
    current_status?: CurrentStatus;
    parent_promo_bags?: any;
    can_return?: boolean;
    display_name?: string;
    delivery_address?: PlatformDeliveryAddress;
    financial_breakup?: FinancialBreakup;
    bag_id: number;
    quantity?: number;
    line_number?: number;
    can_cancel?: boolean;
    gst_details?: BagGST;
    entity_type?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type EInvoice = {
    error_code?: string;
    signed_invoice?: string;
    error_message?: string;
    signed_qr_code?: string;
    acknowledge_no?: number;
    irn?: string;
    acknowledge_date?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type BuyerDetails = {
    address: string;
    gstin: string;
    state: string;
    pincode: number;
    name: string;
    city: string;
    ajio_site_id?: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type ShipmentMeta = {
    assign_dp_from_sb?: boolean;
    auto_trigger_dp_assignment_acf: boolean;
    debug_info?: DebugInfo;
    dp_options?: any;
    return_details?: any;
    einvoice_info?: EinvoiceInfo;
    shipment_weight?: number;
    dp_name?: string;
    forward_affiliate_shipment_id?: string;
    marketplace_store_id?: string;
    weight: number;
    return_store_node?: number;
    order_type?: string;
    box_type?: string;
    timestamp?: ShipmentTimeStamp;
    b2c_buyer_details?: any;
    ewaybill_info?: any;
    external?: any;
    return_affiliate_order_id?: string;
    dp_sort_key?: string;
    awb_number?: string;
    return_affiliate_shipment_id?: string;
    b2b_buyer_details?: BuyerDetails;
    return_awb_number?: string;
    store_invoice_updated_date?: string;
    same_store_available: boolean;
    po_number?: string;
    packaging_name?: string;
    formatted?: Formatted;
    fulfilment_priority_text?: string;
    dp_id?: string;
    due_date?: string;
    shipment_volumetric_weight?: number;
    lock_data?: LockData;
    forward_affiliate_order_id?: string;
    bag_weight?: any;
};
type PDFLinks = {
    credit_note_url?: string;
    invoice_type: string;
    label_a6?: string;
    invoice?: string;
    invoice_a4?: string;
    b2b?: string;
    label_pos?: string;
    label_a4?: string;
    po_invoice?: string;
    label?: string;
    label_type: string;
    invoice_a6?: string;
    invoice_pos?: string;
};
type AffiliateMeta = {
    channel_order_id?: string;
    coupon_code?: string;
    due_date?: string;
    is_priority?: boolean;
    channel_shipment_id?: string;
    loyalty_discount?: number;
    size_level_total_qty?: number;
    employee_discount?: number;
    quantity?: number;
    order_item_id?: string;
    box_type?: string;
};
type AffiliateDetails = {
    ad_id?: string;
    affiliate_shipment_id: string;
    shipment_meta: ShipmentMeta;
    affiliate_order_id: string;
    pdf_links?: PDFLinks;
    company_affiliate_tag?: string;
    affiliate_id?: string;
    affiliate_bag_id: string;
    affiliate_store_id: string;
    affiliate_meta: AffiliateMeta;
};
type BagStatusHistory = {
    display_name?: string;
    created_at?: string;
    kafka_sync?: boolean;
    forward?: boolean;
    delivery_awb_number?: string;
    store_id?: number;
    state_type?: string;
    app_display_name?: string;
    delivery_partner_id?: number;
    bsh_id?: number;
    bag_id?: number;
    state_id?: number;
    updated_at?: string;
    status: string;
    bag_state_mapper?: BagStateMapper;
    reasons?: any[];
    shipment_id?: string;
};
type PlatformShipment = {
    vertical?: string;
    prices?: Prices;
    shipment_images?: string[];
    operational_status?: string;
    meta?: Meta;
    enable_dp_tracking?: boolean;
    payments?: ShipmentPayments;
    invoice_id?: string;
    order?: OrderDetailsData;
    shipment_id: string;
    shipment_quantity?: number;
    journey_type?: string;
    packaging_type?: string;
    fulfilling_store?: FulfillingStore;
    priority_text?: string;
    coupon?: any;
    status?: ShipmentStatusData;
    shipment_status?: string;
    tracking_list?: TrackingList[];
    billing_details?: UserDetailsData;
    user_agent?: string;
    dp_details?: DPDetailsData;
    ordering_store?: OrderingStoreDetails;
    payment_mode?: string;
    delivery_details?: UserDetailsData;
    fulfilment_priority?: number;
    total_bags?: number;
    platform_logo?: string;
    bags?: OrderBags[];
    custom_meta?: any[];
    picked_date?: string;
    affiliate_details?: AffiliateDetails;
    invoice?: EinvoiceInfo;
    gst_details?: GSTDetailsData;
    total_items?: number;
    bag_status_history?: BagStatusHistory[];
    delivery_slot?: any;
};
type ShipmentInfoResponse = {
    message?: string;
    success: boolean;
    shipments?: PlatformShipment[];
};
type OrderMeta = {
    order_type?: string;
    customer_note?: string;
    payment_type?: string;
    extra_meta?: any;
    cart_id?: number;
    comment?: string;
    employee_id?: number;
    mongo_cart_id?: number;
    order_tags?: any[];
    ordering_store?: number;
    files?: any[];
    order_child_entities?: string[];
    order_platform?: string;
    currency_symbol?: string;
    staff?: any;
};
type OrderDict = {
    prices?: Prices;
    meta?: OrderMeta;
    tax_details?: any;
    payment_methods?: any;
    fynd_order_id: string;
    order_date: string;
};
type ShipmentDetailsResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    order?: OrderDict;
};
type SubLane = {
    value?: string;
    index?: number;
    text?: string;
    actions?: any[];
    total_items?: number;
};
type SuperLane = {
    text: string;
    value: string;
    total_items?: number;
    options?: SubLane[];
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformBreakupValues = {
    value?: string;
    display?: string;
    name?: string;
};
type PlatformOrderItems = {
    meta?: any;
    shipments?: PlatformShipment[];
    order_id?: string;
    channel?: PlatformChannel;
    order_created_time?: string;
    order_value?: number;
    payment_mode?: string;
    breakup_values?: PlatformBreakupValues[];
    total_order_value?: number;
    user_info?: UserDataInfo;
};
type OrderListingResponse = {
    message?: string;
    page?: Page;
    lane?: string;
    items?: PlatformOrderItems[];
    total_count?: number;
    success?: boolean;
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    text: string;
    value: number;
    key: string;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    meta?: any;
    raw_status?: string;
    account_name?: string;
    updated_time?: string;
    reason?: string;
    last_location_recieved_at?: string;
    updated_at?: string;
    shipment_type?: string;
    status?: string;
    awb?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    filters?: FiltersInfo[];
    returned?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    processed?: FiltersInfo[];
};
type FiltersResponse = {
    global_filter?: FiltersInfo[];
    advance_filter?: AdvanceFilterInfo;
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    report_name?: string;
    display_name?: string;
    report_requested_at?: string;
    report_created_at?: string;
    report_id?: string;
    report_type?: string;
    s3_key?: string;
    request_details?: any;
    status?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    item_id?: string;
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
    trace_id?: string;
    error?: NestedErrorSchemaDataSet[];
    identifier?: string;
    data?: any[];
    success?: boolean;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    company_id?: string;
    store_id?: string;
    invoice?: any;
    store_name?: string;
    batch_id: string;
    do_invoice_label_generated: boolean;
    label?: any;
    data?: any;
    store_code?: string;
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
    file_path?: string;
    namespace?: string;
    operation?: string;
    upload?: FileUploadResponse;
    method?: string;
    content_type?: string;
    cdn?: URL;
    size?: number;
    tags?: string[];
    file_name?: string;
};
type bulkListingData = {
    uploaded_on?: string;
    store_id?: number;
    store_name?: string;
    batch_id?: string;
    successful?: number;
    failed?: number;
    user_id?: string;
    status?: string;
    excel_url?: string;
    user_name?: string;
    processing_shipments?: string[];
    total?: number;
    store_code?: string;
    successful_shipments?: any[];
    id?: string;
    failed_shipments?: any[];
    processing?: number;
    company_id?: number;
    file_name?: string;
};
type BulkListingPage = {
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    total?: number;
    size?: number;
    type?: string;
};
type BulkListingResponse = {
    error?: string;
    data?: bulkListingData[];
    page?: BulkListingPage;
    success?: boolean;
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    display_name?: string;
    question_set?: QuestionSet[];
    qc_type?: string[];
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
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    successful_shipment_ids?: string[];
    batch_id?: string;
    processing_shipments_count?: number;
    company_id?: string;
    total_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    message?: string;
    uploaded_on?: string;
    uploaded_by?: string;
    status?: boolean;
    error?: string[];
    user_id?: string;
    data?: BulkActionDetailsDataField[];
    success?: string;
    failed_records?: string[];
};
type B2BPODetails = {
    po_line_amount?: number;
    total_gst_percentage?: number;
    docker_number?: string;
    item_base_price?: number;
    po_tax_amount?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Brand = {
    credit_note_expiry_days?: number;
    start_date?: string;
    brand_name: string;
    modified_on?: number;
    script_last_ran?: string;
    logo?: string;
    created_on?: number;
    pickup_location?: string;
    credit_note_allowed?: boolean;
    invoice_prefix?: string;
    brand_id: number;
    is_virtual_invoice?: boolean;
    company: string;
};
type ReturnConfig = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Weight = {
    is_default?: boolean;
    unit?: string;
    shipping?: number;
};
type Article = {
    _id: string;
    dimensions?: Dimensions;
    return_config?: ReturnConfig;
    is_set?: boolean;
    raw_meta?: any;
    identifiers: Identifier;
    esp_modified?: any;
    a_set?: any;
    uid: string;
    code?: string;
    weight?: Weight;
    size: string;
    seller_identifier: string;
    child_details?: any;
};
type Attributes = {
    primary_color_hex?: string;
    essential?: string;
    brand_name?: string;
    primary_color?: string;
    marketer_address?: string;
    primary_material?: string;
    gender?: string[];
    name?: string;
    marketer_name?: string;
};
type Item = {
    meta?: any;
    l1_category_id?: number;
    l2_category?: string[];
    l3_category_name?: string;
    brand: string;
    attributes: Attributes;
    name: string;
    image: string[];
    item_id: number;
    l3_category?: number;
    last_updated_at?: string;
    l2_category_id?: number;
    can_return?: boolean;
    department_id?: number;
    slug_key: string;
    code?: string;
    brand_id: number;
    color?: string;
    can_cancel?: boolean;
    webstore_product_url?: string;
    branch_url?: string;
    gender?: string;
    l1_category?: string[];
    size: string;
};
type BagReturnableCancelableStatus = {
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    is_active: boolean;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    affiliate_order_id: string;
    employee_discount?: number;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    password?: string;
    user?: string;
    username?: string;
    enabled: boolean;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type EInvoicePortalDetails = {
    password?: string;
    user?: string;
    username?: string;
};
type Document = {
    value: string;
    verified: boolean;
    url?: string;
    legal_name: string;
    ds_type: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    display_name: string;
    additional_contact_details?: any;
    ewaybill_portal_details?: any;
    gst_credentials: StoreGstCredentials;
    einvoice_portal_details?: EInvoicePortalDetails;
    documents?: StoreDocuments;
    gst_number?: string;
    notification_emails?: string[];
    timing?: any[];
    stage: string;
    product_return_config?: any;
};
type StoreAddress = {
    address_category: string;
    country_code: string;
    state: string;
    city: string;
    email?: string;
    address1: string;
    country: string;
    area?: string;
    latitude: number;
    pincode: number;
    version?: string;
    created_at: string;
    address_type: string;
    contact_person: string;
    address2?: string;
    updated_at: string;
    phone: string;
    landmark?: string;
    longitude: number;
};
type Store = {
    meta: StoreMeta;
    is_enabled_for_recon?: boolean;
    location_type: string;
    state: string;
    name: string;
    city: string;
    is_active?: boolean;
    store_active_from?: string;
    vat_no?: string;
    address1: string;
    country: string;
    brand_store_tags?: string[];
    latitude: number;
    pincode: string;
    alohomora_user_id?: number;
    packaging_material_count?: number;
    order_integration_id?: string;
    mall_name?: string;
    created_at: string;
    store_email: string;
    parent_store_id?: number;
    contact_person: string;
    address2?: string;
    store_address_json?: StoreAddress;
    code?: string;
    brand_id?: any;
    updated_at?: string;
    s_id: string;
    phone: number;
    mall_area?: string;
    fulfillment_channel: string;
    longitude: number;
    is_archived?: boolean;
    login_username: string;
    company_id: number;
};
type ArticleDetails = {
    status?: any;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type BagGSTDetails = {
    gst_tag: string;
    tax_collected_at_source: number;
    gstin_code?: string;
    gst_fee: number;
    is_default_hsn_code?: boolean;
    brand_calculated_amount: number;
    cgst_gst_fee: string;
    hsn_code_id: string;
    cgst_tax_percentage: number;
    igst_tax_percentage: number;
    igst_gst_fee: string;
    sgst_tax_percentage: number;
    hsn_code: string;
    value_of_good: number;
    gst_tax_percentage: number;
    sgst_gst_fee: string;
};
type BagDetailsPlatformResponse = {
    bag_update_time?: number;
    prices: Prices;
    meta?: BagMeta;
    operational_status?: string;
    b_id: number;
    brand: Brand;
    article: Article;
    bag_status: BagStatusHistory[];
    seller_identifier?: string;
    reasons?: any[];
    shipment_id?: string;
    journey_type: string;
    qc_required?: any;
    applied_promos?: any[];
    restore_coupon?: boolean;
    identifier?: string;
    item: Item;
    restore_promos?: any;
    current_status: BagStatusHistory;
    status: BagReturnableCancelableStatus;
    parent_promo_bags?: any;
    order_integration_id?: string;
    affiliate_bag_details: AffiliateBagDetails;
    tags?: string[];
    display_name?: string;
    b_type?: string;
    financial_breakup: FinancialBreakup[];
    no_of_bags_order?: number;
    line_number?: number;
    ordering_store?: Store;
    quantity?: number;
    current_operational_status: BagStatusHistory;
    article_details?: ArticleDetails;
    dates?: Dates;
    affiliate_details?: AffiliateDetails;
    gst_details: BagGSTDetails;
    entity_type?: string;
    original_bag_list?: number[];
    bag_status_history?: BagStatusHistory;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    item_total: number;
    current: number;
    has_next: boolean;
    size: number;
    page_type: string;
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
    error?: string;
    shipment_id?: string;
    status?: number;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    message: string;
    error_trace?: string;
    status: number;
};
type StoreReassign = {
    store_id: number;
    affiliate_order_id?: string;
    set_id?: string;
    affiliate_bag_id?: string;
    fynd_order_id?: string;
    affiliate_id?: string;
    mongo_article_id?: string;
    bag_id?: number;
    item_id?: string;
    reason_ids?: number[];
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    id?: string;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    reason_text: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    action_type: string;
    entities: Entities[];
    entity_type: string;
};
type Bags = {
    affiliate_order_id?: string;
    is_locked?: boolean;
    bag_id?: number;
    affiliate_bag_id?: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    bags?: Bags[];
    is_shipment_locked?: boolean;
    lock_status?: boolean;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    original_filter?: OriginalFilter;
    is_bag_locked?: boolean;
    shipment_id?: string;
    status?: string;
};
type UpdateShipmentLockResponse = {
    message?: string;
    check_response?: CheckResponse[];
    success?: boolean;
};
type AnnouncementResponse = {
    description?: string;
    created_at?: string;
    id: number;
    to_datetime?: string;
    from_datetime?: string;
    company_id?: number;
    title?: string;
    logo_url?: string;
    platform_id?: string;
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
    status: boolean;
    call_id: string;
};
type ProductsDataUpdatesFilters = {
    line_number?: number;
    identifier?: string;
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
    quantity?: number;
    line_number?: number;
    identifier?: string;
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
type EntityReasonData = {
    reason_text?: string;
    reason_id?: number;
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
    reasons?: ReasonsData;
    identifier: string;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    lock_after_transition?: boolean;
    task?: boolean;
    statuses?: StatuesRequest[];
    unlock_before_transition?: boolean;
};
type ShipmentsResponse = {
    meta?: any;
    code?: string;
    stack_trace?: string;
    final_state?: any;
    status?: number;
    identifier?: string;
    exception?: string;
    message?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    description?: string;
    meta?: AffiliateAppConfigMeta[];
    created_at: string;
    owner: string;
    id: string;
    name: string;
    updated_at: string;
    secret: string;
    token: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
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
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    config?: AffiliateConfig;
    id: string;
    token: string;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    create_user?: boolean;
    affiliate: Affiliate;
    article_lookup?: string;
    store_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    bag_end_state?: string;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    quantity: number;
    price_marked: number;
    seller_identifier: string;
    company_id: number;
    identifier: any;
    item_size: string;
    fynd_store_id: string;
    pdf_links?: MarketPlacePdf;
    hsn_code_id: string;
    price_effective: number;
    discount: number;
    avl_qty: number;
    transfer_price: number;
    unit_price: number;
    store_id: number;
    _id: string;
    amount_paid: number;
    sku: string;
    affiliate_store_id: string;
    delivery_charge: number;
    item_id: number;
    affiliate_meta: any;
    modified_on: string;
};
type OrderUser = {
    last_name: string;
    first_name: string;
    city: string;
    state: string;
    phone: number;
    address1?: string;
    country: string;
    pincode: string;
    email: string;
    mobile: number;
    address2?: string;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type ArticleDetails1 = {
    _id: string;
    quantity: number;
    category: any;
    dimension: any;
    attributes: any;
    brand_id: number;
    weight: any;
};
type ShipmentDetails = {
    meta?: any;
    shipments: number;
    box_type?: string;
    affiliate_shipment_id: string;
    dp_id?: number;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentConfig = {
    action: string;
    journey: string;
    location_details?: LocationDetails;
    payment_mode: string;
    shipment: ShipmentDetails[];
    identifier: string;
    to_pincode: string;
    source: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderPriority = {
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
};
type OrderInfo = {
    bags: AffiliateBag[];
    items: any;
    affiliate_order_id?: string;
    cod_charges: number;
    shipping_address: OrderUser;
    user: UserData;
    payment_mode: string;
    order_value: number;
    delivery_charges: number;
    coupon?: string;
    shipment?: ShipmentData;
    billing_address: OrderUser;
    discount: number;
    order_priority?: OrderPriority;
    payment?: any;
};
type CreateOrderPayload = {
    order_config: OrderConfig;
    order_info: OrderInfo;
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
    id: number;
    display_text: string;
    slug: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l2_detail?: string;
    user: string;
    createdat: string;
    ticket_id?: string;
    ticket_url?: string;
    type: string;
    l3_detail?: string;
    l1_detail?: string;
    bag_id?: number;
    message: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type PostHistoryFilters = {
    line_number?: string;
    shipment_id: string;
    identifier?: string;
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
type SmsDataPayload = {
    customer_name: string;
    order_id: string;
    country_code: string;
    amount_paid: number;
    brand_name: string;
    payment_mode: string;
    shipment_id: number;
    phone_number: number;
    message: string;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    bag_id: number;
    slug: string;
};
type Meta1 = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    meta: Meta1;
    remarks?: string;
    id: number;
    shipment_id?: string;
    status?: string;
    bag_list?: number[];
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
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    dp_id: number;
    order_type: string;
    qc_required: string;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type ProcessingDates = {
    dp_pickup_slot?: any;
    dispatch_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_after_date?: string;
    pack_by_date?: string;
    confirm_by_date?: string;
};
type Tax = {
    name: string;
    amount: any;
    rate: number;
    breakup?: any[];
};
type Charge = {
    tax?: Tax;
    code?: string;
    type: string;
    amount: any;
    name: string;
};
type LineItem = {
    quantity?: number;
    meta?: any;
    external_line_id?: string;
    charges?: Charge[];
    seller_identifier: string;
    custom_messasge?: string;
};
type Shipment = {
    external_shipment_id?: string;
    location_id: number;
    processing_dates?: ProcessingDates;
    priority?: number;
    meta?: any;
    line_items: LineItem[];
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type PaymentMethod = {
    mode: string;
    meta?: any;
    transaction_data?: any;
    collect_by: string;
    refund_by: string;
    amount: number;
    name: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type ShippingInfo = {
    shipping_type?: string;
    state: string;
    middle_name?: string;
    address_type?: string;
    last_name?: string;
    city: string;
    house_no?: string;
    title?: string;
    country: string;
    customer_code?: string;
    pincode: string;
    external_customer_code?: string;
    floor_no?: string;
    primary_email: string;
    geo_location?: any;
    landmark?: string;
    address1: string;
    state_code?: string;
    alternate_email?: string;
    slot?: any[];
    alternate_mobile_number?: string;
    primary_mobile_number: string;
    country_code?: string;
    first_name: string;
    gender?: string;
    address2?: string;
};
type BillingInfo = {
    state: string;
    middle_name?: string;
    last_name?: string;
    city: string;
    house_no?: string;
    title?: string;
    country: string;
    customer_code?: string;
    pincode: string;
    external_customer_code?: string;
    floor_no?: string;
    primary_email: string;
    address1: string;
    state_code?: string;
    alternate_email?: string;
    alternate_mobile_number?: string;
    primary_mobile_number: string;
    country_code?: string;
    first_name: string;
    gender?: string;
    address2?: string;
};
type CreateOrderAPI = {
    meta?: any;
    shipments: Shipment[];
    external_creation_date?: string;
    tax_info?: TaxInfo;
    payment_info: PaymentInfo;
    charges?: Charge[];
    shipping_info: ShippingInfo;
    billing_info: BillingInfo;
    currency_info?: any;
    external_order_id?: string;
};
type CreateOrderErrorReponse = {
    meta?: string;
    code?: string;
    info?: any;
    stack_trace?: string;
    request_id?: string;
    status: number;
    exception?: string;
    message: string;
};
type PaymentMethods = {
    mode?: string;
    refund_by?: string;
    collect_by?: string;
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
    payment_info?: CreateChannelPaymentInfo;
    logo_url?: any;
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
    lock_states?: string[];
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    is_upserted?: boolean;
    is_inserted?: boolean;
    acknowledged?: boolean;
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
type GetSearchWordsData = {
    app_id?: string;
    result?: any;
    uid?: string;
    _custom_json?: any;
    words?: string[];
    is_active?: boolean;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    app_id?: string;
    result: SearchKeywordResult;
    _custom_json?: any;
    words?: string[];
    is_active?: boolean;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    app_id?: string;
    uid?: string;
    _custom_json?: any;
    results?: any[];
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
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
type Media = {
    type?: string;
    url?: string;
    aspect_ratio?: string;
};
type AutocompleteResult = {
    display?: string;
    action?: AutocompleteAction;
    _custom_json?: any;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    results?: AutocompleteResult[];
    _custom_json?: any;
    words?: string[];
    is_active?: boolean;
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    _custom_json?: any;
    results?: any[];
    words?: string[];
};
type ProductBundleItem = {
    allow_remove?: boolean;
    product_uid: number;
    min_quantity: number;
    max_quantity: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
};
type GetProductBundleCreateResponse = {
    page_visibility?: string[];
    name: string;
    logo?: string;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    id?: string;
    modified_by?: any;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    choice: string;
    meta?: any;
    is_active: boolean;
    slug: string;
    company_id?: number;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    page_visibility?: string[];
    name: string;
    logo?: string;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    modified_by?: any;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    choice: string;
    meta?: any;
    is_active: boolean;
    slug: string;
    company_id?: number;
};
type Size = {
    display?: string;
    value?: string;
    quantity?: number;
    is_available?: boolean;
};
type LimitedProductData = {
    attributes?: any;
    name?: string;
    images?: string[];
    short_description?: string;
    item_code?: string;
    uid?: number;
    identifier?: any;
    sizes?: string[];
    quantity?: number;
    country_of_origin?: string;
    slug?: string;
    price?: any;
};
type Price = {
    max_effective?: number;
    min_marked?: number;
    max_marked?: number;
    min_effective?: number;
    currency?: string;
};
type GetProducts = {
    allow_remove?: boolean;
    product_uid?: number;
    min_quantity?: number;
    max_quantity?: number;
    sizes?: Size[];
    product_details?: LimitedProductData;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    price?: Price;
};
type GetProductBundleResponse = {
    page_visibility?: string[];
    name?: string;
    logo?: string;
    products?: GetProducts[];
    same_store_assignment?: boolean;
    choice?: string;
    meta?: any;
    is_active?: boolean;
    slug?: string;
    company_id?: number;
};
type ProductBundleUpdateRequest = {
    page_visibility?: string[];
    name: string;
    logo?: string;
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    modified_by?: any;
    modified_on?: string;
    choice: string;
    meta?: any;
    is_active: boolean;
    slug: string;
    company_id?: number;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    name: string;
    title: string;
    guide?: Guide;
    description?: string;
    tag?: string;
    subtitle?: string;
    image?: string;
    id?: string;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    active?: boolean;
    modified_by?: any;
    brand_id?: number;
    company_id?: number;
};
type SizeGuideResponse = {
    name?: string;
    title?: string;
    guide?: any;
    tag?: string;
    subtitle?: string;
    id?: string;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    active?: boolean;
    modified_by?: any;
    brand_id?: number;
    company_id?: number;
};
type MOQData = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type SEOData = {
    description?: any;
    title?: any;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    moq?: MOQData;
    is_cod?: boolean;
    is_gift?: boolean;
    seo?: SEOData;
};
type ApplicationItemMOQ = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationItemMeta = {
    alt_text?: any;
    moq?: ApplicationItemMOQ;
    _custom_meta?: MetaFields[];
    is_cod?: boolean;
    _custom_json?: any;
    is_gift?: boolean;
    seo?: ApplicationItemSEO;
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
type PageResponseType = {
    has_next: boolean;
    total_count: number;
    next: number;
    current: number;
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
    name: string;
    logo?: string;
    priority: number;
    display_type: string;
    key?: string;
    is_active: boolean;
    slug?: string;
};
type AppConfigurationDetail = {
    attributes?: AttributeDetailsGroup[];
    name?: string;
    app_id: string;
    logo?: string;
    template_slugs?: string[];
    is_default: boolean;
    priority: number;
    is_active: boolean;
    slug: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    name?: string;
    app_id: string;
    logo?: string;
    is_default: boolean;
    priority: number;
    key: string;
    is_active: boolean;
    default_key: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    detail?: any;
    similar?: any;
    variant?: any;
    compare?: any;
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
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ConfigurationListingSortConfig = {
    name?: string;
    logo?: string;
    priority: number;
    key: string;
    is_active: boolean;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationBucketPoints = {
    display?: string;
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    condition?: string;
    map?: any;
    value?: string;
    map_values?: any[];
    bucket_points?: ConfigurationBucketPoints[];
};
type ConfigurationListingFilterConfig = {
    name?: string;
    type: string;
    logo?: string;
    priority: number;
    value_config?: ConfigurationListingFilterValue;
    display_name?: string;
    key: string;
    is_active: boolean;
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
type ConfigurationProductConfig = {
    title?: string;
    logo?: string;
    priority: number;
    subtitle?: string;
    key: string;
    is_active: boolean;
    size?: ProductSize;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    name: string;
    logo?: string;
    priority: number;
    display_type: string;
    key: string;
    is_active: boolean;
    size: ProductSize;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppCatalogConfiguration = {
    config_id?: string;
    type?: string;
    app_id: string;
    listing?: ConfigurationListing;
    id?: string;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
    config_type: string;
    product?: ConfigurationProduct;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    config_id?: string;
    type?: string;
    app_id: string;
    listing?: ConfigurationListing;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
    config_type: string;
    product?: ConfigurationProduct;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    config_id?: string;
    app_id: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
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
type ProductFiltersKey = {
    name: string;
    logo?: string;
    display: string;
    operators?: string[];
    kind?: string;
};
type ProductFiltersValue = {
    display_format?: string;
    query_format?: string;
    display: string;
    is_selected: boolean;
    selected_max?: number;
    value: any;
    currency_symbol?: string;
    max?: number;
    currency_code?: string;
    min?: number;
    count?: number;
    selected_min?: number;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type GetCollectionQueryOptionResponse = {
    sort_on?: ProductSortOn[];
    operators: any;
    filters?: ProductFilters[];
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
    type?: string;
    meta?: any;
    url: string;
};
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type BannerImage = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type GetCollectionDetailNest = {
    app_id?: string;
    cron?: any;
    name?: string;
    description?: string;
    allow_facets?: boolean;
    tag?: string[];
    allow_sort?: boolean;
    type?: string;
    _schedule?: any;
    logo?: Media1;
    uid?: string;
    query?: CollectionQuery[];
    meta?: any;
    badge?: any;
    is_active?: boolean;
    slug?: string;
    visible_facets_keys?: string[];
    action?: Action;
    banners?: ImageUrls;
    priority?: number;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type UserInfo = {
    email?: string;
    user_id?: string;
    uid?: string;
    username?: string;
};
type CollectionSchedule = {
    cron?: string;
    start?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
    end?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CreateCollection = {
    app_id: string;
    modified_by?: UserInfo;
    name: string;
    is_visible?: boolean;
    description?: string;
    allow_facets?: boolean;
    _custom_json?: any;
    allow_sort?: boolean;
    tags?: string[];
    type: string;
    _schedule?: CollectionSchedule;
    logo: CollectionImage;
    sort_on?: string;
    query?: CollectionQuery[];
    meta?: any;
    badge?: CollectionBadge;
    is_active?: boolean;
    _locale_language?: any;
    slug: string;
    published?: boolean;
    visible_facets_keys?: string[];
    banners: CollectionBanner;
    priority?: number;
    created_by?: UserInfo;
    seo?: SeoDetail;
};
type CollectionCreateResponse = {
    app_id?: string;
    cron?: any;
    name?: string;
    description?: string;
    allow_facets?: boolean;
    tag?: string[];
    allow_sort?: boolean;
    type?: string;
    _schedule?: any;
    logo?: BannerImage;
    sort_on?: string;
    query?: CollectionQuery[];
    meta?: any;
    badge?: any;
    is_active?: boolean;
    slug?: string;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    priority?: number;
};
type CollectionDetailResponse = {
    app_id?: string;
    cron?: any;
    name?: string;
    description?: string;
    allow_facets?: boolean;
    tag?: string[];
    allow_sort?: boolean;
    type?: string;
    _schedule?: any;
    logo?: Media1;
    uid?: string;
    query?: CollectionQuery[];
    meta?: any;
    badge?: any;
    is_active?: boolean;
    slug?: string;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    priority?: number;
};
type UpdateCollection = {
    modified_by?: UserInfo;
    name?: string;
    is_visible?: boolean;
    description?: string;
    allow_facets?: boolean;
    _custom_json?: any;
    allow_sort?: boolean;
    tags?: string[];
    type?: string;
    _schedule?: CollectionSchedule;
    logo?: CollectionImage;
    sort_on?: string;
    query?: CollectionQuery[];
    meta?: any;
    badge?: CollectionBadge;
    _locale_language?: any;
    is_active?: boolean;
    slug?: string;
    published?: boolean;
    visible_facets_keys?: string[];
    banners?: CollectionBanner;
    priority?: number;
    seo?: SeoDetail;
};
type Price1 = {
    max?: number;
    currency_code?: string;
    min?: number;
    currency_symbol?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductBrand = {
    action?: Action;
    name?: string;
    uid?: number;
    logo?: Media1;
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
    item_code?: string;
    product_online_date?: string;
    rating_count?: number;
    image_nature?: string;
    item_type?: string;
    price?: ProductListingPrice;
    name?: string;
    color?: string;
    medias?: Media1[];
    description?: string;
    brand?: ProductBrand;
    highlights?: string[];
    type?: string;
    tryouts?: string[];
    uid?: number;
    sellable?: boolean;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    slug: string;
    attributes?: any;
    short_description?: string;
    similars?: string[];
    teaser_tag?: any;
    promo_meta?: any;
    rating?: number;
    discount?: string;
    has_variant?: boolean;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page?: Page;
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
type CatalogInsightItem = {
    sellable_count?: number;
    out_of_stock_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    available_sizes?: number;
    name?: string;
    total_sizes?: number;
    total_articles?: number;
    available_articles?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    enabled?: boolean;
    brand_ids?: number[];
    platform?: string;
    store_ids?: number[];
    opt_level: string;
    company_id?: number;
};
type CompanyOptIn = {
    enabled: boolean;
    brand_ids: number[];
    platform: string;
    modified_on: number;
    store_ids: number[];
    created_on: number;
    created_by?: any;
    opt_level: string;
    modified_by?: any;
    company_id: number;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    business_type?: string;
    name?: string;
    company_type?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    brand_name?: string;
    brand_id?: number;
    total_article?: number;
    company_id?: number;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    brand?: number;
    store?: number;
    company?: string;
};
type StoreDetail = {
    name?: string;
    additional_contacts?: any[];
    store_type?: string;
    address?: any;
    uid?: number;
    store_code?: string;
    timing?: any;
    modified_on?: string;
    created_on?: string;
    display_name?: string;
    documents?: any[];
    manager?: any;
    company_id?: number;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    type: string;
    allowed_values?: string[];
    range?: AttributeSchemaRange;
    multi?: boolean;
    mandatory?: boolean;
    format?: string;
};
type AttributeMasterFilter = {
    priority?: number;
    depends_on?: string[];
    indexing: boolean;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type GenderDetail = {
    name?: string;
    logo?: string;
    details?: AttributeMasterDetails;
    description?: string;
    schema?: AttributeMaster;
    id?: string;
    enabled_for_end_consumer?: boolean;
    filters?: AttributeMasterFilter;
    departments?: string[];
    meta?: AttributeMasterMeta;
    is_nested?: boolean;
    slug?: string;
};
type CategoriesResponse = {
    template_slug?: string;
    name?: string;
    uid?: number;
    slug_key?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: CategoriesResponse[];
    page?: Page;
};
type PTErrorResponse = {
    errors?: any;
    code?: string;
    status?: number;
    meta?: any;
    message?: string;
};
type UserSerializer = {
    user_id?: string;
    uid?: string;
    username?: string;
    _id?: string;
    contact?: string;
};
type GetDepartment = {
    name?: string;
    page_size?: number;
    logo?: string;
    uid?: number;
    search?: string;
    modified_on?: string;
    priority_order?: number;
    created_on?: string;
    synonyms?: string[];
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    page_no?: number;
    is_active?: boolean;
    item_type?: string;
    slug?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    errors?: any;
    code?: string;
    status?: number;
    meta?: any;
    message?: string;
};
type DepartmentCreateUpdate = {
    name: string;
    _cls?: string;
    logo: string;
    uid?: number;
    platforms?: any;
    _custom_json?: any;
    tags?: string[];
    priority_order: number;
    synonyms?: string[];
    is_active?: boolean;
    slug?: string;
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
    super_user?: boolean;
    user_id: string;
    username: string;
};
type DepartmentModel = {
    name: any;
    _cls?: any;
    logo: string;
    verified_by?: UserDetail;
    verified_on?: string;
    uid?: number;
    _custom_json?: any;
    modified_on: string;
    created_by?: UserDetail;
    _id?: any;
    created_on: string;
    priority_order: number;
    synonyms?: any[];
    modified_by?: UserDetail;
    is_active?: boolean;
    slug?: any;
};
type ProductTemplate = {
    attributes?: string[];
    name?: string;
    logo?: string;
    description?: string;
    tag?: string;
    departments?: string[];
    is_expirable: boolean;
    is_physical: boolean;
    created_by?: any;
    modified_by?: any;
    created_on?: string;
    is_archived?: boolean;
    modified_on?: string;
    categories?: string[];
    is_active?: boolean;
    slug: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    item_code?: any;
    trader?: any;
    custom_order?: any;
    trader_type?: any;
    item_type?: any;
    multi_size?: any;
    name?: any;
    product_group_tag?: any;
    description?: any;
    brand_uid?: any;
    product_publish?: any;
    variants?: any;
    media?: any;
    country_of_origin?: any;
    tags?: any;
    return_config?: any;
    highlights?: any;
    no_of_boxes?: any;
    hsn_code?: any;
    command?: any;
    size_guide?: any;
    is_active?: any;
    currency?: any;
    slug?: any;
    short_description?: any;
    teaser_tag?: any;
    sizes?: any;
    category_slug?: any;
    is_dependent?: any;
};
type GlobalValidation = {
    required?: string[];
    type?: string;
    title?: string;
    description?: string;
    definitions?: any;
    properties?: Properties;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    attributes?: string[];
    name?: string;
    logo?: string;
    description?: string;
    tag?: string;
    id?: string;
    departments?: string[];
    is_expirable: boolean;
    is_physical: boolean;
    is_archived?: boolean;
    categories?: string[];
    is_active?: boolean;
    slug: string;
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
    brand?: string[];
    templates?: string[];
    type?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    completed_on?: string;
    data?: ProductDownloadItemsData;
    url?: string;
    id?: string;
    trigger_on?: string;
    template_tags?: any;
    seller_id?: number;
    created_by?: VerifiedBy;
    status?: string;
    task_id?: string;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Hierarchy = {
    department: number;
    l2: number;
    l1: number;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type Media2 = {
    portrait: string;
    landscape: string;
    logo: string;
};
type Category = {
    name: string;
    tryouts?: string[];
    hierarchy?: Hierarchy[];
    priority?: number;
    id?: string;
    uid?: number;
    departments: number[];
    modified_by?: any;
    marketplaces?: CategoryMapping;
    created_by?: any;
    synonyms?: string[];
    created_on?: string;
    modified_on?: string;
    is_active: boolean;
    media?: Media2;
    level: number;
    slug?: string;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    name: string;
    tryouts?: string[];
    hierarchy?: Hierarchy[];
    priority?: number;
    departments: number[];
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    is_active: boolean;
    media?: Media2;
    level: number;
    slug?: string;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type Trader = {
    name: any;
    address?: string[];
    type?: string;
};
type Logo = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type ReturnConfigResponse = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Image = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type ProductSchemaV2 = {
    item_code?: string;
    template_tag?: string;
    category?: any;
    id?: string;
    trader?: Trader[];
    departments?: number[];
    verified_on?: string;
    custom_order?: any;
    modified_by?: any;
    image_nature?: string;
    item_type?: string;
    multi_size?: boolean;
    company_id?: number;
    name?: string;
    color?: string;
    product_group_tag?: string[];
    description?: string;
    moq?: any;
    verified_by?: VerifiedBy;
    brand_uid?: number;
    _custom_json?: any;
    brand?: Brand;
    product_publish?: ProductPublish;
    created_on?: string;
    variants?: any;
    primary_color?: string;
    media?: Media1[];
    country_of_origin?: string;
    tags?: string[];
    return_config?: ReturnConfigResponse;
    all_identifiers?: string[];
    highlights?: string[];
    no_of_boxes?: number;
    variant_media?: any;
    hsn_code?: string;
    uid?: number;
    all_sizes?: any[];
    size_guide?: string;
    is_active?: boolean;
    slug?: string;
    currency?: string;
    l3_mapping?: string[];
    attributes?: any;
    is_image_less_product?: boolean;
    short_description?: string;
    category_uid?: number;
    images?: Image[];
    stage?: string;
    pending?: string;
    sizes?: any[];
    teaser_tag?: any;
    is_expirable?: boolean;
    all_company_ids?: number[];
    is_physical?: boolean;
    is_set?: boolean;
    created_by?: any;
    modified_on?: string;
    tax_identifier?: any;
    variant_group?: any;
    net_quantity?: NetQuantityResponse;
    category_slug?: string;
    is_dependent?: boolean;
};
type ProductListingResponseV2 = {
    items?: ProductSchemaV2[];
    page?: Page;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type ProductPublish1 = {
    product_online_date?: string;
    is_set?: boolean;
};
type TeaserTag = {
    url?: string;
    tag?: string;
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
type ProductCreateUpdateSchemaV2 = {
    item_code: string;
    template_tag: string;
    trader: Trader[];
    departments: number[];
    custom_order?: CustomOrder;
    requester?: string;
    item_type: string;
    multi_size?: boolean;
    company_id: number;
    bulk_job_id?: string;
    name: string;
    product_group_tag?: string[];
    description?: string;
    brand_uid: number;
    _custom_json?: any;
    product_publish?: ProductPublish1;
    variants?: any;
    media?: Media1[];
    country_of_origin: string;
    tags?: string[];
    return_config: ReturnConfig;
    highlights?: string[];
    no_of_boxes?: number;
    variant_media?: any;
    uid?: number;
    size_guide?: string;
    change_request_id?: any;
    is_active?: boolean;
    currency: string;
    slug: string;
    is_image_less_product?: boolean;
    attributes?: any;
    short_description?: string;
    action?: string;
    teaser_tag?: TeaserTag;
    sizes: any[];
    is_set?: boolean;
    tax_identifier: TaxIdentifier;
    variant_group?: any;
    net_quantity?: NetQuantity;
    category_slug: string;
    is_dependent?: boolean;
};
type ProductVariants = {
    name?: string;
    category_uid?: number;
    item_code?: string;
    uid?: number;
    brand_uid?: number;
    media?: Media1[];
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    enabled_for_end_consumer?: boolean;
    departments: string[];
    synonyms?: any;
    modified_by?: any;
    unit?: string;
    name?: string;
    description?: string;
    created_on?: string;
    filters: AttributeMasterFilter;
    tags?: string[];
    logo?: string;
    details: AttributeMasterDetails;
    suggestion?: string;
    slug: string;
    raw_key?: string;
    schema: AttributeMaster;
    modified_on?: string;
    created_by?: any;
    variant?: boolean;
    is_nested?: boolean;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: ProductSchemaV2;
};
type ValidateIdentifier = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: string;
};
type AllSizes = {
    item_weight: number;
    item_weight_unit_of_measure: any;
    item_width: number;
    item_length: number;
    item_dimensions_unit_of_measure: string;
    size: any;
    identifiers?: ValidateIdentifier[];
    item_height: number;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Product = {
    item_code?: string;
    template_tag?: string;
    category?: any;
    id?: string;
    trader?: Trader[];
    departments?: number[];
    verified_on?: string;
    custom_order?: any;
    modified_by?: any;
    image_nature?: string;
    item_type?: string;
    multi_size?: boolean;
    company_id?: number;
    name?: string;
    color?: string;
    product_group_tag?: string[];
    description?: string;
    moq?: any;
    verified_by?: VerifiedBy;
    brand_uid?: number;
    _custom_json?: any;
    brand?: Brand;
    product_publish?: ProductPublished;
    created_on?: string;
    variants?: any;
    primary_color?: string;
    media?: Media1[];
    country_of_origin?: string;
    tags?: string[];
    return_config?: ReturnConfigResponse;
    all_identifiers?: string[];
    highlights?: string[];
    no_of_boxes?: number;
    variant_media?: any;
    hsn_code?: string;
    uid?: number;
    all_sizes?: any[];
    size_guide?: string;
    is_active?: boolean;
    slug?: string;
    currency?: string;
    l3_mapping?: string[];
    attributes?: any;
    is_image_less_product?: boolean;
    short_description?: string;
    category_uid?: number;
    images?: Image[];
    stage?: string;
    pending?: string;
    sizes?: any[];
    teaser_tag?: any;
    is_expirable?: boolean;
    all_company_ids?: number[];
    is_physical?: boolean;
    is_set?: boolean;
    created_by?: any;
    modified_on?: string;
    tax_identifier?: any;
    variant_group?: any;
    net_quantity?: NetQuantityResponse;
    category_slug?: string;
    is_dependent?: boolean;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    total?: number;
    failed?: number;
    template_tag?: string;
    stage?: string;
    failed_records?: string[];
    file_path?: string;
    cancelled?: number;
    modified_on?: string;
    created_by?: UserDetail1;
    created_on?: string;
    template?: ProductTemplate;
    succeed?: number;
    modified_by?: UserDetail1;
    is_active?: boolean;
    cancelled_records?: string[];
    company_id?: number;
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
    total?: number;
    tracking_url?: string;
    failed?: number;
    failed_records?: any[];
    stage?: string;
    template_tag?: string;
    file_path?: string;
    custom_template_tag?: string;
    cancelled?: number;
    modified_on?: string;
    created_by?: UserInfo1;
    created_on: string;
    succeed?: number;
    modified_by?: UserInfo1;
    is_active?: boolean;
    cancelled_records?: any[];
    company_id: number;
};
type BulkResponse = {
    batch_id: string;
    modified_on?: string;
    created_by?: UserInfo1;
    created_on: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
};
type BulkProductRequest = {
    template_tag: string;
    data: any[];
    batch_id: string;
    company_id: number;
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
    tracking_url?: string;
    failed?: number;
    failed_records?: string[];
    stage?: string;
    file_path?: string;
    id?: string;
    company_id?: number;
    cancelled?: number;
    modified_on?: string;
    created_by?: UserCommon;
    created_on?: string;
    succeed?: number;
    modified_by?: UserCommon;
    is_active?: boolean;
    cancelled_records?: string[];
    retry?: number;
    total?: number;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductBulkAssets = {
    user: any;
    url: string;
    company_id?: number;
};
type ProductSizeDeleteDataResponse = {
    company_id?: number;
    item_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    item_id?: number;
    inventory_updated_on?: string;
    price_transfer?: number;
    seller_identifier?: string;
    store?: any;
    sellable_quantity?: number;
    uid?: string;
    price_effective?: number;
    quantity?: number;
    size?: string;
    identifiers?: any;
    currency?: string;
    price?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
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
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    size_distribution: SizeDistribution;
    name?: string;
    quantity?: number;
};
type InvSize = {
    price_transfer?: number;
    item_weight?: number;
    item_weight_unit_of_measure?: string;
    item_width?: number;
    item_length?: number;
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    price_effective: number;
    quantity: number;
    is_set?: boolean;
    size: any;
    identifiers: GTIN[];
    item_height?: number;
    expiration_date?: string;
    set?: InventorySet;
    currency: string;
    price?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type WeightResponse = {
    unit: string;
    is_default: boolean;
    shipping: number;
};
type Trader1 = {
    name: string;
    address: string[];
    type: string;
};
type PriceMeta = {
    marked: number;
    transfer: number;
    effective: number;
    updated_at?: string;
    tp_notes?: any;
    currency: string;
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
type DimensionResponse = {
    unit: string;
    height: number;
    is_default: boolean;
    length: number;
    width: number;
};
type CompanyMeta = {
    id: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    sellable?: QuantityBase;
    damaged?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
};
type ManufacturerResponse = {
    name: string;
    address: string;
    is_default: boolean;
};
type InventorySellerResponse = {
    weight: WeightResponse;
    trader?: Trader1[];
    fynd_article_code: string;
    fragile: boolean;
    modified_by?: UserSerializer;
    price: PriceMeta;
    size: string;
    store: StoreMeta;
    _custom_json?: any;
    brand: BrandMeta;
    country_of_origin: string;
    return_config?: ReturnConfig1;
    tags?: string[];
    total_quantity: number;
    fynd_meta?: any;
    dimension: DimensionResponse;
    uid: string;
    identifier: any;
    fynd_item_code: string;
    track_inventory?: boolean;
    expiration_date?: string;
    meta?: any;
    is_active?: boolean;
    company: CompanyMeta;
    item_id: number;
    raw_meta?: any;
    added_on_store?: string;
    stage?: string;
    quantities?: Quantities;
    trace_id?: string;
    is_set?: boolean;
    created_by?: UserSerializer;
    tax_identifier?: any;
    manufacturer: ManufacturerResponse;
    set?: InventorySet;
    seller_identifier: string;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type Trader2 = {
    name?: string;
    address?: string[];
    type?: string;
};
type PriceArticle = {
    marked?: number;
    transfer?: number;
    effective?: number;
    tp_notes?: any;
    currency?: string;
};
type ArticleStoreResponse = {
    store_type?: string;
    name?: string;
    uid?: number;
    store_code?: string;
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
type DimensionResponse1 = {
    unit?: string;
    height?: number;
    length?: number;
    width?: number;
};
type CompanyMeta1 = {
    id?: number;
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
type ManufacturerResponse1 = {
    name?: string;
    address?: string;
    is_default?: boolean;
};
type GetInventories = {
    weight?: WeightResponse1;
    id?: string;
    trader?: Trader2[];
    platforms?: any;
    modified_by?: UserSerializer;
    price?: PriceArticle;
    size?: string;
    store?: ArticleStoreResponse;
    brand?: BrandMeta1;
    tags?: string[];
    return_config?: ReturnConfig2;
    country_of_origin?: string;
    inventory_updated_on?: string;
    total_quantity?: number;
    date_meta?: DateMeta;
    dimension?: DimensionResponse1;
    uid?: string;
    identifier?: any;
    track_inventory?: boolean;
    expiration_date?: string;
    company?: CompanyMeta1;
    item_id?: number;
    stage?: string;
    quantities?: QuantitiesArticle;
    trace_id?: string;
    is_set?: boolean;
    created_by?: UserSerializer;
    tax_identifier?: any;
    manufacturer?: ManufacturerResponse1;
    seller_identifier?: string;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    total?: number;
    failed?: number;
    failed_records?: string[];
    stage?: string;
    file_path?: string;
    id?: string;
    cancelled?: number;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    succeed?: number;
    modified_by?: any;
    is_active?: boolean;
    cancelled_records?: string[];
    company_id?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    total_quantity?: number;
    item_weight_unit_of_measure?: string;
    item_dimensions_unit_of_measure?: string;
    trace_id?: string;
    store_code: string;
    price?: number;
    price_effective?: number;
    quantity?: number;
    price_marked?: number;
    expiration_date?: string;
    tags?: string[];
    currency?: string;
    seller_identifier: string;
};
type InventoryBulkRequest = {
    user?: any;
    sizes: InventoryJobPayload[];
    batch_id: string;
    company_id: number;
};
type InventoryExportJob = {
    completed_on?: string;
    url?: string;
    trigger_on?: string;
    seller_id: number;
    request_params?: any;
    status?: string;
    task_id: string;
};
type InventoryExportRequest = {
    brand?: number[];
    store?: number[];
    type?: string;
};
type InventoryExportResponse = {
    trigger_on?: string;
    seller_id: number;
    request_params?: any;
    status?: string;
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
    trace_id?: string;
    price_effective?: number;
    price_marked?: number;
    store_id: number;
    expiration_date?: string;
    tags?: string[];
    seller_identifier: string;
};
type InventoryRequestSchemaV2 = {
    meta?: any;
    payload?: InventoryPayload[];
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
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    threshold2?: number;
    hs2_code?: string;
    tax1?: number;
    tax_on_esp?: boolean;
    hsn_code?: string;
    id?: string;
    tax2?: number;
    modified_on?: string;
    tax_on_mrp?: boolean;
    threshold1?: number;
    company_id?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    threshold2?: number;
    hs2_code: string;
    tax1: number;
    tax_on_esp?: boolean;
    hsn_code: string;
    uid?: number;
    tax2?: number;
    tax_on_mrp: boolean;
    is_active?: boolean;
    threshold1: number;
    company_id: number;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    effective_date: string;
    cess?: number;
    threshold: number;
    rate: number;
};
type HSNDataInsertV2 = {
    type: string;
    reporting_hsn: string;
    country_code: string;
    hsn_code: string;
    description: string;
    hsn_code_id?: string;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
    taxes: TaxSlab[];
};
type PageResponse = {
    has_next?: boolean;
    item_total?: number;
    has_previous?: boolean;
    current?: string;
    size?: number;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    name?: string;
    logo?: Media;
    action?: Action;
    banners?: ImageUrls;
    uid?: number;
    departments?: string[];
    discount?: string;
    slug?: string;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    name?: string;
    logo?: Media;
    uid?: number;
    priority_order?: number;
    slug?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    name?: string;
    action?: Action;
    childs?: any[];
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
    slug?: string;
};
type SecondLevelChild = {
    name?: string;
    action?: Action;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
    slug?: string;
};
type Child = {
    name?: string;
    action?: Action;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
    slug?: string;
};
type CategoryItems = {
    name?: string;
    action?: Action;
    childs?: Child[];
    banners?: ImageUrls;
    uid?: number;
    slug?: string;
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
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page: Page;
    operators?: any;
    filters?: ProductFilters[];
};
type ProductDetail = {
    item_code?: string;
    product_online_date?: string;
    rating_count?: number;
    image_nature?: string;
    item_type?: string;
    name?: string;
    color?: string;
    medias?: Media1[];
    description?: string;
    brand?: ProductBrand;
    highlights?: string[];
    type?: string;
    tryouts?: string[];
    uid?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    slug: string;
    attributes?: any;
    short_description?: string;
    similars?: string[];
    teaser_tag?: any;
    promo_meta?: any;
    rating?: number;
    has_variant?: boolean;
};
type InventoryPage = {
    has_next?: boolean;
    type: string;
    item_total: number;
    has_previous?: boolean;
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
    item_id: number;
    ignored_stores?: number[];
    size: string;
};
type AssignStoreArticle = {
    article_assignment?: ArticleAssignment;
    group_id?: string;
    quantity?: number;
    query?: ArticleQuery;
    meta?: any;
};
type AssignStore = {
    channel_type?: string;
    app_id: string;
    pincode: string;
    channel_identifier?: string;
    store_ids?: number[];
    articles: AssignStoreArticle[];
    company_id?: number;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    item_id: number;
    article_assignment: ArticleAssignment1;
    store_pincode?: number;
    strategy_wise_listing?: any[];
    index?: number;
    group_id?: string;
    uid?: string;
    company_id?: number;
    price_effective?: number;
    s_city?: string;
    _id?: string;
    price_marked?: number;
    status: boolean;
    store_id?: number;
    quantity: number;
    meta?: any;
    size: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetAddressSerializer = {
    country?: string;
    landmark?: string;
    country_code?: string;
    pincode?: number;
    longitude?: number;
    latitude?: number;
    state?: string;
    address1?: string;
    address2?: string;
    city?: string;
    address_type?: string;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetCompanySerializer = {
    name?: string;
    verified_by?: UserSerializer2;
    stage?: string;
    verified_on?: string;
    uid?: number;
    reject_reason?: string;
    modified_on?: string;
    created_by?: UserSerializer2;
    created_on?: string;
    company_type?: string;
    modified_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    business_type?: string;
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
    weekday: string;
    closing?: LocationTimingSerializer;
    open: boolean;
    opening?: LocationTimingSerializer;
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
type GetLocationSerializer = {
    code: string;
    verified_on?: string;
    integration_type?: LocationIntegrationType;
    manager?: LocationManagerSerializer;
    modified_by?: UserSerializer1;
    phone_number: string;
    name: string;
    contact_numbers?: SellerPhoneNumber[];
    store_type?: string;
    verified_by?: UserSerializer1;
    _custom_json?: any;
    notification_emails?: string[];
    created_on?: string;
    documents?: Document[];
    address: GetAddressSerializer;
    uid?: number;
    warnings?: any;
    company?: GetCompanySerializer;
    product_return_config?: ProductReturnConfigSerializer;
    stage?: string;
    timing?: LocationDayWiseSerializer[];
    modified_on?: string;
    created_by?: UserSerializer1;
    display_name: string;
    gst_credentials?: InvoiceDetailsSerializer;
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
    app_id: string;
    logo?: string;
    uid: number;
    _custom_json?: any;
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
type CompanyTaxesSerializer = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type GetCompanyProfileSerializerResponse = {
    business_info?: string;
    addresses?: GetAddressSerializer[];
    mode?: string;
    _custom_json?: any;
    business_country_info?: BusinessCountryInfo;
    warnings?: any;
    business_details?: BusinessDetails;
    business_type: string;
    verified_by?: UserSerializer;
    created_on?: string;
    uid: number;
    modified_on?: string;
    taxes?: CompanyTaxesSerializer[];
    created_by?: UserSerializer;
    notification_emails?: string[];
    verified_on?: string;
    name?: string;
    contact_details?: ContactDetails;
    franchise_enabled?: boolean;
    stage?: string;
    documents?: Document[];
    modified_by?: UserSerializer;
    company_type: string;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type CreateUpdateAddressSerializer = {
    city: string;
    country: string;
    pincode: number;
    landmark?: string;
    address2?: string;
    address1: string;
    longitude: number;
    country_code?: string;
    state: string;
    address_type: string;
    latitude: number;
};
type UpdateCompany = {
    business_info?: string;
    contact_details?: ContactDetails;
    business_details?: BusinessDetails;
    taxes?: CompanyTaxesSerializer1[];
    franchise_enabled?: boolean;
    business_type?: string;
    company_type?: string;
    addresses?: CreateUpdateAddressSerializer[];
    _custom_json?: any;
    documents?: Document[];
    notification_emails?: string[];
    reject_reason?: string;
    name?: string;
    warnings?: any;
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
    brand?: DocumentsObj;
    store?: DocumentsObj;
    stage?: string;
    product?: DocumentsObj;
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
    uid?: number;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    logo?: string;
    _locale_language?: any;
    reject_reason?: string;
    mode?: string;
    _custom_json?: any;
    warnings?: any;
    verified_by?: UserSerializer;
    created_on?: string;
    uid?: number;
    modified_on?: string;
    created_by?: UserSerializer;
    slug_key?: string;
    verified_on?: string;
    name: string;
    banner?: BrandBannerSerializer;
    synonyms?: string[];
    stage?: string;
    description?: string;
    modified_by?: UserSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    banner?: BrandBannerSerializer;
    company_id?: number;
    synonyms?: string[];
    _custom_json?: any;
    logo: string;
    description?: string;
    brand_tier?: string;
    _locale_language?: any;
    name: string;
    uid?: number;
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
    business_country_info?: BusinessCountryInfo;
    modified_on?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    reject_reason?: string;
    business_type: string;
    company_type: string;
    addresses?: GetAddressSerializer[];
    market_channels?: string[];
    stage?: string;
    _custom_json?: any;
    verified_by?: UserSerializer;
    notification_emails?: string[];
    verified_on?: string;
    name?: string;
    created_on?: string;
    details?: CompanyDetails;
    uid?: number;
};
type CompanyBrandSerializer = {
    modified_on?: string;
    brand?: GetBrandResponseSerializer;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    reject_reason?: string;
    stage?: string;
    company?: CompanySerializer;
    verified_by?: UserSerializer;
    verified_on?: string;
    created_on?: string;
    uid?: number;
    warnings?: any;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
};
type CompanyBrandPostRequestSerializer = {
    company: number;
    brands: number[];
    uid?: number;
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
    country?: string;
    city?: string;
    pincode?: number;
    landmark?: string;
    address2?: string;
    address1?: string;
    longitude: number;
    country_code?: string;
    state?: string;
    address_type?: string;
    latitude: number;
};
type LocationSerializer = {
    code: string;
    display_name: string;
    address: AddressSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    holiday?: HolidaySchemaSerializer[];
    stage?: string;
    _custom_json?: any;
    store_type?: string;
    timing?: LocationDayWiseSerializer[];
    company: number;
    documents?: Document[];
    manager?: LocationManagerSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    notification_emails?: string[];
    contact_numbers?: SellerPhoneNumber[];
    name: string;
    uid?: number;
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
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
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
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    types?: string[];
    uses?: PaymentAllowValue;
    networks?: string[];
    codes?: string[];
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    user_type?: string;
    coupon_allowed?: boolean;
    post_order?: PostOrder;
    price_range?: PriceRange;
    uses?: UsesRestriction;
    payments?: any;
    platforms?: string[];
    ordering_stores?: number[];
    bulk_bundle?: BulkBundleRestriction;
    user_groups?: number[];
};
type RuleDefinition = {
    value_type: string;
    is_exact?: boolean;
    calculate_on: string;
    scope?: string[];
    auto_apply?: boolean;
    currency_code?: string;
    type: string;
    applicable_on: string;
};
type CouponSchedule = {
    end?: string;
    start?: string;
    next_schedule?: any[];
    cron?: string;
    duration?: number;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    subtitle?: string;
    description?: string;
    remove?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    title?: string;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Rule = {
    key?: number;
    discount_qty?: number;
    min?: number;
    value?: number;
    max?: number;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type Validity = {
    priority?: number;
};
type Validation = {
    anonymous?: boolean;
    user_registered_after?: string;
    app_id?: string[];
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type CouponAdd = {
    code: string;
    author?: CouponAuthor;
    restrictions?: Restrictions;
    type_slug: string;
    rule_definition: RuleDefinition;
    _schedule?: CouponSchedule;
    display_meta: DisplayMeta;
    date_meta?: CouponDateMeta;
    rule: Rule[];
    state?: State;
    validity: Validity;
    validation?: Validation;
    tags?: string[];
    ownership: Ownership;
    identifiers: Identifier;
    action?: CouponAction;
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
    code: string;
    author?: CouponAuthor;
    restrictions?: Restrictions;
    type_slug: string;
    rule_definition: RuleDefinition;
    _schedule?: CouponSchedule;
    display_meta: DisplayMeta;
    date_meta?: CouponDateMeta;
    rule: Rule[];
    state?: State;
    validity: Validity;
    validation?: Validation;
    tags?: string[];
    ownership: Ownership;
    identifiers: Identifier;
    action?: CouponAction;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
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
    user_registered?: UserRegistered;
    uses: UsesRestriction1;
    payments?: PromotionPaymentModes[];
    platforms?: string[];
    order_quantity?: number;
    anonymous_users?: boolean;
    user_id?: string[];
    user_groups?: number[];
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type DiscountOffer = {
    code?: string;
    max_usage_per_transaction?: number;
    apportion_discount?: boolean;
    max_offer_quantity?: number;
    max_discount_amount?: number;
    partial_can_ret?: boolean;
    discount_price?: number;
    discount_percentage?: number;
    discount_amount?: number;
    min_offer_quantity?: number;
};
type CompareObject = {
    greater_than?: number;
    greater_than_equals?: number;
    less_than_equals?: number;
    less_than?: number;
    equals?: number;
};
type ItemCriteria = {
    cart_unique_item_amount?: CompareObject;
    item_brand?: number[];
    item_exclude_category?: number[];
    item_exclude_id?: number[];
    cart_quantity?: CompareObject;
    item_category?: number[];
    product_tags?: string[];
    available_zones?: string[];
    item_exclude_sku?: string[];
    buy_rules?: string[];
    item_id?: number[];
    cart_total?: CompareObject;
    item_exclude_store?: number[];
    item_company?: number[];
    item_sku?: string[];
    item_store?: number[];
    item_exclude_brand?: number[];
    item_size?: string[];
    item_exclude_company?: number[];
    cart_unique_item_quantity?: CompareObject;
    all_items?: boolean;
};
type DiscountRule = {
    buy_condition: string;
    offer: DiscountOffer;
    discount_type: string;
    item_criteria: ItemCriteria;
};
type DisplayMeta1 = {
    offer_label?: string;
    name?: string;
    offer_text?: string;
    description?: string;
};
type PromotionSchedule = {
    published: boolean;
    end?: string;
    start: string;
    next_schedule?: any[];
    cron?: string;
    duration?: number;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionListItem = {
    code?: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    date_meta?: PromotionDateMeta;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    stackable?: boolean;
    apply_exclusive?: string;
    mode: string;
    author?: PromotionAuthor;
    post_order_action?: PromotionAction;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    currency?: string;
    buy_rules: any;
    calculate_on?: string;
    display_meta: DisplayMeta1;
    apply_priority?: number;
    _schedule?: PromotionSchedule;
    application_id: string;
    promo_group: string;
    visiblility?: Visibility;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    code?: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    date_meta?: PromotionDateMeta;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    stackable?: boolean;
    apply_exclusive?: string;
    mode: string;
    author?: PromotionAuthor;
    post_order_action?: PromotionAction;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    currency?: string;
    buy_rules: any;
    calculate_on?: string;
    display_meta: DisplayMeta1;
    apply_priority?: number;
    _schedule?: PromotionSchedule;
    application_id: string;
    promo_group: string;
    visiblility?: Visibility;
};
type PromotionUpdate = {
    code?: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    date_meta?: PromotionDateMeta;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    stackable?: boolean;
    apply_exclusive?: string;
    mode: string;
    author?: PromotionAuthor;
    post_order_action?: PromotionAction;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    currency?: string;
    buy_rules: any;
    calculate_on?: string;
    display_meta: DisplayMeta1;
    apply_priority?: number;
    _schedule?: PromotionSchedule;
    application_id: string;
    promo_group: string;
    visiblility?: Visibility;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    is_hidden?: boolean;
    example?: string;
    modified_on?: string;
    entity_slug?: string;
    description?: string;
    created_on?: string;
    entity_type?: string;
    type?: string;
    subtitle?: string;
    title?: string;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type CouponBreakup = {
    code?: string;
    coupon_value?: number;
    sub_title?: string;
    uid?: string;
    max_discount_value?: number;
    is_applied?: boolean;
    coupon_type?: string;
    message?: string;
    minimum_cart_value?: number;
    description?: string;
    type?: string;
    value?: number;
    title?: string;
};
type RawBreakup = {
    cod_charge?: number;
    total?: number;
    fynd_cash?: number;
    gst_charges?: number;
    mrp_total?: number;
    convenience_fee?: number;
    vog?: number;
    coupon?: number;
    you_saved?: number;
    subtotal?: number;
    discount?: number;
    delivery_charge?: number;
};
type LoyaltyPoints = {
    total?: number;
    is_applied?: boolean;
    description?: string;
    applicable?: number;
};
type DisplayBreakup = {
    currency_symbol?: string;
    display?: string;
    key?: string;
    message?: string[];
    currency_code?: string;
    value?: number;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    raw?: RawBreakup;
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
};
type BasePrice = {
    currency_symbol?: string;
    effective?: number;
    marked?: number;
    currency_code?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type ProductArticle = {
    uid?: string;
    price?: ArticlePriceInfo;
    parent_item_identifiers?: any;
    store?: BaseInfo;
    _custom_json?: any;
    quantity?: number;
    extra_meta?: any;
    type?: string;
    product_group_tags?: string[];
    seller?: BaseInfo;
    size?: string;
};
type ProductPrice = {
    currency_symbol?: string;
    marked?: number;
    selling?: number;
    effective?: number;
    currency_code?: string;
    add_on?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type DiscountRulesApp = {
    raw_offer?: any;
    offer?: any;
    matched_buy_rules?: string[];
    item_criteria?: any;
};
type FreeGiftItem = {
    item_brand_name?: string;
    item_id?: number;
    item_slug?: string;
    item_price_details?: any;
    item_name?: string;
    item_images_url?: string[];
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
    quantity?: number;
    article_id?: string;
};
type AppliedPromotion = {
    promotion_type?: string;
    buy_rules?: BuyRules[];
    mrp_promotion?: boolean;
    ownership?: Ownership2;
    promo_id?: string;
    promotion_name?: string;
    promotion_group?: string;
    discount_rules?: DiscountRulesApp[];
    applied_free_articles?: AppliedFreeArticles[];
    amount?: number;
    article_quantity?: number;
    offer_text?: string;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
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
    images?: ProductImage[];
    net_quantity?: NetQuantity;
    slug?: string;
    uid?: number;
    categories?: CategoryInfo[];
    type?: string;
    name?: string;
    action?: ProductAction;
    brand?: BaseInfo;
};
type ProductAvailability = {
    is_valid?: boolean;
    out_of_stock?: boolean;
    sizes?: string[];
    deliverable?: boolean;
    other_store_quantity?: number;
};
type PromoMeta = {
    message?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    coupon_message?: string;
    key?: string;
    article?: ProductArticle;
    price?: ProductPriceInfo;
    parent_item_identifiers?: any;
    price_per_unit?: ProductPriceInfo;
    promotions_applied?: AppliedPromotion[];
    product?: CartProduct;
    bulk_offer?: any;
    quantity?: number;
    message?: string;
    availability?: ProductAvailability;
    discount?: string;
    promo_meta?: PromoMeta;
    is_set?: boolean;
    identifiers: CartProductIdentifer;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    phone?: number;
    area_code_slug?: string;
    address?: string;
    meta?: any;
    country_code?: string;
    landmark?: string;
    pincode?: number;
    city?: string;
    area?: string;
    email?: string;
    country_iso_code?: string;
    address_type?: string;
    country_phone_code?: string;
    state?: string;
    country?: string;
    name?: string;
    area_code: string;
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
    is_valid?: boolean;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    message?: string;
    breakup_values?: CartBreakup;
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
    price_effective: number;
    product_id: number;
    amount_paid: number;
    price_marked: number;
    loyalty_discount?: number;
    quantity?: number;
    extra_meta?: any;
    cashback_applied: number;
    size: string;
    files?: OpenApiFiles[];
    discount: number;
    cod_charges: number;
    coupon_effective_discount: number;
    employee_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    meta?: CartItemMeta;
    delivery_charges: number;
};
type OpenApiPlatformCheckoutReq = {
    coupon_value: number;
    coupon_code: string;
    affiliate_order_id?: string;
    shipping_address?: ShippingAddress;
    loyalty_discount?: number;
    comment?: string;
    cart_items: OpenApiOrderItem[];
    coupon?: string;
    cart_value: number;
    cashback_applied: number;
    gstin?: string;
    payment_methods: MultiTenderPaymentMethod[];
    delivery_charges: number;
    payment_mode?: string;
    billing_address: ShippingAddress;
    order_id?: string;
    files?: OpenApiFiles[];
    cod_charges: number;
    employee_discount?: any;
    currency_code?: string;
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    message?: string;
    order_ref_id?: string;
    order_id: string;
};
type AbandonedCart = {
    fc_index_map?: number[];
    comment?: string;
    shipments?: any[];
    checkout_mode?: string;
    cart_value?: number;
    gstin?: string;
    bulk_coupon_discount?: number;
    last_modified: string;
    payment_methods?: any[];
    delivery_charges?: any;
    uid: number;
    discount?: number;
    cod_charges?: any;
    meta?: any;
    articles: any[];
    app_id?: string;
    fynd_credits?: any;
    is_default: boolean;
    _id: string;
    pick_up_customer_details?: any;
    cashback: any;
    payments?: any;
    coupon?: any;
    created_on: string;
    buy_now?: boolean;
    is_active?: boolean;
    expire_at: string;
    payment_mode?: string;
    promotion?: any;
    order_id?: string;
    merge_qty?: boolean;
    user_id: string;
    is_archive?: boolean;
};
type AbandonedCartResponse = {
    items?: AbandonedCart[];
    result?: any;
    success?: boolean;
    message?: string;
    page?: Page;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    items?: CartProductInfo[];
    is_valid?: boolean;
    restrict_checkout?: boolean;
    coupon_text?: string;
    pan_no?: string;
    id?: string;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    message?: string;
    checkout_mode?: string;
    gstin?: string;
    currency?: CartCurrency;
    breakup_values?: CartBreakup;
    delivery_charge_info?: string;
    payment_selection_lock?: PaymentSelectionLock;
    last_modified?: string;
    buy_now?: boolean;
};
type AddProductCart = {
    article_assignment?: any;
    display?: string;
    item_id?: number;
    article_id?: string;
    parent_item_identifiers?: any;
    pos?: boolean;
    _custom_json?: any;
    quantity?: number;
    extra_meta?: any;
    item_size?: string;
    product_group_tags?: string[];
    store_id?: number;
    seller_id?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
    new_cart?: boolean;
};
type AddCartDetailResponse = {
    success?: boolean;
    message?: string;
    partial?: boolean;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    item_index?: number;
    item_id?: number;
    article_id?: string;
    parent_item_identifiers?: any;
    _custom_json?: any;
    quantity?: number;
    extra_meta?: any;
    item_size?: string;
    identifiers: CartProductIdentifer;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
type UpdateCartDetailResponse = {
    success?: boolean;
    message?: string;
    cart?: CartDetailResponse;
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
    user?: any;
    token?: string;
    created_on?: string;
    source?: any;
    meta?: any;
};
type SharedCart = {
    restrict_checkout?: boolean;
    coupon_text?: string;
    comment?: string;
    checkout_mode?: string;
    gstin?: string;
    last_modified?: string;
    items?: CartProductInfo[];
    shared_cart_details?: SharedCartDetails;
    uid?: string;
    breakup_values?: CartBreakup;
    cart_id?: number;
    currency?: CartCurrency;
    id?: string;
    delivery_promise?: ShipmentPromise;
    message?: string;
    payment_selection_lock?: PaymentSelectionLock;
    buy_now?: boolean;
    is_valid?: boolean;
    delivery_charge_info?: string;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    item_counts?: string;
    cart_value?: string;
    created_on?: string;
    cart_id?: string;
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
    items?: CartProductInfo[];
    is_valid?: boolean;
    user?: UserInfo;
    restrict_checkout?: boolean;
    coupon_text?: string;
    pan_no?: string;
    id?: string;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    message?: string;
    checkout_mode?: string;
    gstin?: string;
    currency?: CartCurrency;
    breakup_values?: CartBreakup;
    delivery_charge_info?: string;
    payment_selection_lock?: PaymentSelectionLock;
    last_modified?: string;
    buy_now?: boolean;
};
type DeleteCartDetailResponse = {
    success?: boolean;
    message?: string;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type PageCoupon = {
    total?: number;
    total_item_count?: number;
    has_previous?: boolean;
    current?: number;
    has_next?: boolean;
};
type Coupon = {
    coupon_value?: number;
    coupon_code?: string;
    sub_title?: string;
    max_discount_value?: number;
    coupon_type?: string;
    is_applied?: boolean;
    message?: string;
    minimum_cart_value?: number;
    description?: string;
    is_applicable?: boolean;
    expires_on?: string;
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
    longitude?: number;
    latitude?: number;
};
type PlatformAddress = {
    phone?: string;
    country_code?: string;
    checkout_mode?: string;
    name?: string;
    city?: string;
    created_by_user_id?: string;
    is_default_address?: boolean;
    address_type?: string;
    country?: string;
    cart_id?: string;
    meta?: any;
    google_map_point?: any;
    id?: string;
    tags?: string[];
    is_active?: boolean;
    area_code_slug?: string;
    address?: string;
    landmark?: string;
    area?: string;
    state?: string;
    email?: string;
    user_id?: string;
    area_code?: string;
    geo_location?: GeoLocation;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type SaveAddressResponse = {
    success?: boolean;
    is_default_address?: boolean;
    id?: string;
};
type UpdateAddressResponse = {
    success?: boolean;
    is_default_address?: boolean;
    id?: string;
    is_updated?: boolean;
};
type DeleteAddressResponse = {
    id?: string;
    is_deleted?: boolean;
};
type PlatformSelectCartAddressRequest = {
    cart_id?: string;
    checkout_mode?: string;
    id?: string;
    billing_address_id?: string;
};
type ShipmentResponse = {
    fulfillment_id?: number;
    fulfillment_type?: string;
    shipment_type?: string;
    items?: CartProductInfo[];
    box_type?: string;
    promise?: ShipmentPromise;
    shipments?: number;
    dp_id?: string;
    order_type?: string;
    dp_options?: any;
};
type CartShipmentsResponse = {
    restrict_checkout?: boolean;
    coupon_text?: string;
    error?: boolean;
    id?: string;
    comment?: string;
    shipments?: ShipmentResponse[];
    delivery_promise?: ShipmentPromise;
    checkout_mode?: string;
    gstin?: string;
    message?: string;
    payment_selection_lock?: PaymentSelectionLock;
    last_modified?: string;
    buy_now?: boolean;
    is_valid?: boolean;
    uid?: string;
    breakup_values?: CartBreakup;
    delivery_charge_info?: string;
    cart_id?: number;
    currency?: CartCurrency;
};
type UpdateCartShipmentItem = {
    quantity?: number;
    shipment_type: string;
    article_uid: string;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    pan_no?: string;
    pick_up_customer_details?: any;
    comment?: string;
    checkout_mode?: string;
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
    user: string;
    first_name: string;
    _id: string;
    last_name: string;
    employee_code?: string;
};
type PlatformCartCheckoutDetailRequest = {
    callback_url?: string;
    merchant_code?: string;
    pos?: boolean;
    delivery_address?: any;
    billing_address_id?: string;
    aggregator?: string;
    billing_address?: any;
    extra_meta?: any;
    files?: Files[];
    meta?: any;
    order_type: string;
    address_id?: string;
    id: string;
    payment_params?: any;
    payment_auto_confirm?: boolean;
    staff?: StaffCheckout;
    ordering_store?: number;
    payment_mode: string;
    pick_at_store_uid?: number;
    payment_identifier?: string;
    user_id: string;
};
type CheckCart = {
    cod_message?: string;
    restrict_checkout?: boolean;
    coupon_text?: string;
    cod_available?: boolean;
    comment?: string;
    checkout_mode?: string;
    gstin?: string;
    last_modified?: string;
    store_emps?: any[];
    delivery_charges?: number;
    items?: CartProductInfo[];
    store_code?: string;
    uid?: string;
    breakup_values?: CartBreakup;
    cod_charges?: number;
    cart_id?: number;
    currency?: CartCurrency;
    user_type?: string;
    id?: string;
    delivery_charge_order_value?: number;
    delivery_promise?: ShipmentPromise;
    message?: string;
    payment_selection_lock?: PaymentSelectionLock;
    buy_now?: boolean;
    is_valid?: boolean;
    error_message?: string;
    order_id?: string;
    success?: boolean;
    delivery_charge_info?: string;
};
type CartCheckoutResponse = {
    callback_url?: string;
    app_intercept_url?: string;
    order_id?: string;
    success?: boolean;
    message?: string;
    cart?: CheckCart;
    payment_confirm_url?: string;
    data?: any;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    phone?: string;
    area_code_slug?: string;
    address?: string;
    store_code?: string;
    uid?: number;
    landmark?: string;
    id?: number;
    pincode?: number;
    city?: string;
    email?: string;
    area?: string;
    state?: string;
    address_type?: string;
    country?: string;
    name?: string;
    area_code?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    address_id?: string;
    aggregator_name?: string;
    payment_mode?: string;
    merchant_code?: string;
    id?: string;
    payment_identifier?: string;
};
type CouponValidity = {
    code?: string;
    valid?: boolean;
    display_message_en?: string;
    discount?: number;
    title?: string;
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
type GenerateBulkInvoiceLabelShipment = {
    store_id: number;
    from_date: string;
    to_date: string;
    document_type: string;
    shipment_ids?: string[];
};
type GenerateBulkInvoiceOrLabelUrl = {
    uid: string;
    document_type: string;
    batch_id: number;
};
type DocumentType = {
    invoice: string;
    label: string;
};
type BulkListBadRequestResponse = {
    success?: boolean;
    error?: string;
};
type BulkListFailedResponse = {
    success?: boolean;
    error?: string;
};
type SuccessResponseGenerateBulkShipment = {
    success: boolean;
    job_id: number;
    trace_id?: string;
};
type SuccessResponseBulkStatus = {
    success: boolean;
    status: string;
    trace_id?: string;
};
type GenerateBulkUrlSuccessResponse = {
    url: string;
    uid: string;
    expires_in: number;
    presigned_type: string;
};
type InternalErrorResponseGenerateBulkShipment = {
    success: boolean;
    error: string;
};
type BadRequestResponseGenerateBulkUrl = {
    success: boolean;
    message: string;
    request_id?: string;
    exception?: string;
    stack_trace?: string;
    meta?: any;
};
type InternalErrorResponseGenerateBulkUrl = {
    success: boolean;
    message: string;
};
type GenerateBulkShipment = {
    uid: string;
    store_code: string;
    batch_id: string;
    document_type: string;
};
type GenerateBulkUrl = {
    expires_in?: number;
    document_type: string;
    batch_id: string;
};
type GetBulkStatusRequest = {
    batch_id: string;
};
type BadRequestResponseGenerateBulkItemParameters = {
    missing_property?: string;
    type?: string;
};
type BadRequestResponseGenerateBulkItem = {
    keyword?: string;
    data_path?: string;
    schema_path?: string;
    parameters?: BadRequestResponseGenerateBulkItemParameters;
    message?: string;
};
type SuccessResponseGenerateBulk = {
    success: boolean;
};
type BadRequestResponseGenerateBulk = {
    success: boolean;
    error_message: BadRequestResponseGenerateBulkItem[];
};
type InternalErrorResponseGenerateBulk = {
    success: boolean;
    error_message?: string;
};
type ShippingToAddress = {
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
};
type SellerAddress = {
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
};
type BoxDetails = {
    box_id: string;
    total_quantity: string;
    package_count: string;
    dimension: string;
    weight: string;
};
type GenerateBulkBoxLabel = {
    stock_transfer_id: string;
    label_type: string;
    uid: string;
    seller_name: string;
    template_id: number;
    box_details: BoxDetails[];
};
type GenerateBulkShipmentLabel = {
    label_type: string;
    uid: string;
    template_id: number;
    shipments: ShipmentDetails[];
};
type GenerateNoc = {
    uid: string;
    seller_name: string;
    seller_gstin: string;
    fc_gstin: string;
    template_id: number;
    fc_address: SellerAddress;
    seller_address: SellerAddress;
};
type PackageDetails = {
    package_id: string;
    item_quantity: string;
    package_type: string;
    packaging_type: string;
    dimension: string;
    weight: string;
};
type PackageItemDetails = {
    jio_code: string;
    item_name: string;
    mrp: string;
    country_of_origin: string;
    best_before_date: string;
    ean: string;
    package_details: PackageDetails[];
};
type GenerateBulkPackageLabel = {
    stock_transfer_id: string;
    label_type: string;
    uid: string;
    seller_name: string;
    template_id: number;
    item_details: PackageItemDetails[];
};
type SignedSuccessResponse = {
    uid?: string;
    url?: string;
    expires_in?: number;
};
type BulkPresignedSuccessResponse = {
    success: string;
    batch_id?: string;
    presigned_type?: string;
    presigned_url: string;
    expires_in?: number;
};
type SignedBadRequestResponse = {
    success?: boolean;
    error_message?: string;
};
type SignedFailedResponse = {
    success?: boolean;
    error_message?: string;
};
type StatusSuccessResponse = {
    success?: boolean;
    status?: string;
};
type StatusBadRequestResponse = {
    success?: boolean;
    error_message?: string;
};
type StatusFailedResponse = {
    success?: boolean;
    error_message?: string;
};
type GenerateManifest = {
    store_id: number;
    from_date: string;
    to_date: string;
    shipment_ids?: string[];
};
type GeneratePresignedManifestUrl = {
    manifest_id: string;
    uid: string;
};
type ManifestLink = {
    name: string;
    manifest_id: string;
};
type GenerateManifestUrlSuccessResponse = {
    url: string;
    uid: string;
    manifest_id: string;
    expires_in: number;
    presigned_type: string;
};
type ManifestListFailedResponse = {
    success?: boolean;
    error?: string;
};
type InvoiceLabelPresignedRequestBody = {
    document_type: string;
    entity_id: string;
    expires_in?: number;
};
type GeneratePOSReceipts = {
    order: OrderDict;
    shipments: PlatformShipment[];
};
type SuccessResponseGeneratePOSReceipts = {
    success: boolean;
    order_id: string;
    invoice_receipt: string;
    payment_receipt: string;
};
type BadRequestResponseGeneratePOSReceipts = {
    success: boolean;
    error: any[];
};
type InternalErrorResponseGeneratePOSReceipts = {
    success: boolean;
    message: string;
    error: string;
};
type InvoiceInfo = {
    store_invoice_id?: string;
    credit_note_id?: string;
    updated_date?: string;
    label_url?: string;
    invoice_url?: string;
};
