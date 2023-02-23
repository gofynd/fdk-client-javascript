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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcAggregatorListResponse, StatisticsData, EdcDeviceStatsResponse, EdcDevice, EdcDeviceDetailsResponse, EdcAddRequest, EdcDeviceAddResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, PaymentModeInfo, Prices, ShipmentStatus, UserDataInfo, ShipmentItemFulFillingStore, GSTDetailsData, PlatformItem, BagUnit, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, TrackingList, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagGST, Identifier, FinancialBreakup, OrderBrandName, BagConfigs, BagStateMapper, CurrentStatus, OrderBagArticle, PlatformDeliveryAddress, OrderBags, ShipmentStatusData, UserDetailsData, DPDetailsData, FulfillingStore, ShipmentPayments, BagStatusHistory, OrderDetailsData, ShipmentInfoResponse, PlatformShipment, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, BagGSTDetails, Attributes, Item, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, Document, StoreDocuments, StoreMeta, StoreAddress, Store, AffiliateMeta, AffiliateBagDetails, B2BPODetails, BagMeta, PDFLinks, EInvoice, EinvoiceInfo, DebugInfo, Formatted, BuyerDetails, ShipmentTimeStamp, LockData, ShipmentMeta, AffiliateDetails, Dates, BagReturnableCancelableStatus, Brand, ArticleDetails, ReturnConfig, Weight, Dimensions, Article, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderPriority, OrderUser, MarketPlacePdf, AffiliateBag, UserData, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, LineItem, ProcessingDates, Shipment, ShippingInfo, BillingInfo, TaxInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, Media1, BannerImage, ImageUrls, CollectionQuery, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionImage, CollectionBanner, UserInfo, CollectionBadge, CollectionSchedule, SeoDetail, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Image, Logo, NetQuantityResponse, ProductPublished, ReturnConfigResponse, Product, ProductListingResponse, TaxIdentifier, CustomOrder, TeaserTag, Trader, NetQuantity, ProductPublish, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ProductCreateUpdate, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, ManufacturerResponse, BrandMeta, CompanyMeta, PriceMeta, Trader1, WeightResponse, ReturnConfig1, DimensionResponse, QuantityBase, Quantities, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, ManufacturerResponse1, BrandMeta1, CompanyMeta1, PriceArticle, Trader2, ArticleStoreResponse, WeightResponse1, ReturnConfig2, DimensionResponse1, Quantity, QuantitiesArticle, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, UserSerializer1, SellerPhoneNumber, LocationManagerSerializer, UserSerializer2, GetAddressSerializer, GetCompanySerializer, LocationTimingSerializer, LocationDayWiseSerializer, LocationIntegrationType, InvoiceCredSerializer, InvoiceDetailsSerializer, ProductReturnConfigSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, ContactDetails, Website, BusinessDetails, CompanyTaxesSerializer, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, PaymentAllowValue, PaymentModes, BulkBundleRestriction, PostOrder, UsesRemaining, UsesRestriction, PriceRange, Restrictions, Validity, Ownership, State, CouponDateMeta, CouponAction, Validation, CouponAuthor, Rule, RuleDefinition, DisplayMetaDict, DisplayMeta, CouponSchedule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, PromotionDateMeta, PromotionAction, DisplayMeta1, PromotionAuthor, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, UsesRemaining1, UsesRestriction1, UserRegistered, Restrictions1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionSchedule, Visibility, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ProductPrice, ProductPriceInfo, PromoMeta, CartProductIdentifer, ProductAvailability, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, DiscountRulesApp, Ownership2, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, ActionQuery, ProductAction, ProductImage, CategoryInfo, CartProduct, CartProductInfo, CouponBreakup, DisplayBreakup, RawBreakup, LoyaltyPoints, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, UserCartMappingResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, CartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    sub_navigation?: SubNavigationReference[];
};
type SubNavigationReference = {
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
    app_id: string;
    aggregators?: any[];
    display_fields: string[];
    success: boolean;
};
type ErrorCodeDescription = {
    description: string;
    success: boolean;
    code: string;
};
type PaymentGatewayConfig = {
    is_active?: boolean;
    config_type: string;
    key: string;
    merchant_salt: string;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    is_active?: boolean;
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
    error: ErrorCodeAndDescription;
    success: boolean;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentApp = {
    package_name?: string;
    code?: string;
    logos?: PaymentModeLogo;
    display_name?: string;
};
type PaymentModeList = {
    card_type?: string;
    card_issuer?: string;
    intent_flow?: boolean;
    exp_month?: number;
    remaining_limit?: number;
    compliant_with_tokenisation_guidelines?: boolean;
    card_isin?: string;
    card_brand?: string;
    cod_limit_per_order?: number;
    name?: string;
    card_fingerprint?: string;
    retry_count?: number;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_number?: string;
    card_name?: string;
    intent_app_error_list?: string[];
    expired?: boolean;
    merchant_code?: string;
    card_token?: string;
    code?: string;
    display_priority?: number;
    display_name?: string;
    logo_url?: PaymentModeLogo;
    card_brand_image?: string;
    intent_app?: IntentApp[];
    aggregator_name: string;
    cod_limit?: number;
    card_id?: string;
    fynd_vpa?: string;
    timeout?: number;
    exp_year?: number;
    nickname?: string;
    card_reference?: string;
};
type RootPaymentMode = {
    name: string;
    list?: PaymentModeList[];
    aggregator_name?: string;
    save_card?: boolean;
    display_priority: number;
    anonymous_enable?: boolean;
    display_name: string;
    add_card_enabled?: boolean;
    is_pay_by_card_pl?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type Payout = {
    customers: any;
    unique_transfer_no: any;
    is_active: boolean;
    transfer_type: string;
    payouts_aggregators: any[];
    is_default: boolean;
    more_attributes: any;
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    country?: string;
    state?: string;
    ifsc_code: string;
    account_holder?: string;
    branch_name?: string;
    bank_name?: string;
    account_type: string;
    pincode?: number;
    account_no?: string;
    city?: string;
};
type PayoutRequest = {
    unique_external_id: string;
    users: any;
    is_active: boolean;
    transfer_type: string;
    bank_details: PayoutBankDetails;
    aggregator: string;
};
type PayoutResponse = {
    unique_transfer_no: string;
    users: any;
    is_active: boolean;
    created: boolean;
    transfer_type: string;
    payouts: any;
    bank_details: any;
    payment_status: string;
    aggregator: string;
    success: boolean;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_active: boolean;
    is_default: boolean;
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
    success: boolean;
    data: any[];
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    config: any;
    success: boolean;
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
    data?: any;
    success: boolean;
    message: string;
    is_verified_flag?: boolean;
};
type NotFoundResourceError = {
    description: string;
    success: boolean;
    code: string;
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
    success?: boolean;
    branch_name: string;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    is_active: boolean;
    ifsc_code: string;
    comment?: string;
    created_on: string;
    account_holder: string;
    bank_name: string;
    email: string;
    delights_user_name?: string;
    transfer_mode: string;
    subtitle: string;
    title: string;
    display_name: string;
    modified_on: string;
    address: string;
    branch_name?: string;
    id: number;
    mobile?: string;
    beneficiary_id: string;
    account_no: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    payment_gateway?: string;
    current_status?: string;
    extra_meta?: any;
    payment_id?: string;
    order_id?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    amount: number;
    mode: string;
    name?: string;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    order_id: string;
    success: boolean;
    message: string;
};
type PlatformPaymentOptions = {
    payment_selection_lock?: any;
    source: string;
    cod_charges?: number;
    enabled: boolean;
    anonymous_cod?: boolean;
    mode_of_payment: string;
    callback_url?: any;
    cod_amount_limit?: number;
    methods: any;
};
type PlatfromPaymentConfig = {
    message: string;
    success: boolean;
    data: PlatformPaymentOptions;
};
type UpdatePlatformPaymentConfig = {
    payment_selection_lock?: any;
    cod_charges?: number;
    anonymous_cod?: boolean;
    cod_amount_limit?: number;
    methods: any;
};
type CODdata = {
    is_active: boolean;
    limit: number;
    remaining_limit: number;
    usages: number;
    user_id: string;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
};
type SetCODForUserRequest = {
    merchant_user_id: string;
    is_active: boolean;
    mobileno: string;
};
type SetCODOptionResponse = {
    success: boolean;
    message: string;
};
type EdcAggregatorListResponse = {
    success: boolean;
    aggregators: any;
};
type StatisticsData = {
    filter_options: any;
    inactive_device_count: number;
    store_count: number;
    active_device_count: number;
};
type EdcDeviceStatsResponse = {
    success: boolean;
    statistics: StatisticsData;
};
type EdcDevice = {
    terminal_serial_no: string;
    is_active: string;
    terminal_unique_identifier: string;
    device_tag: string;
    store_name: string;
    aggregator_name?: string;
    merchant_store_pos_code?: string;
    application_id: string;
    edc_device_serial_no: string;
    aggregator_id: number;
    store_id: number;
};
type EdcDeviceDetailsResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcAddRequest = {
    terminal_serial_no: string;
    device_tag?: string;
    store_name: string;
    edc_device_serial_no: string;
    aggregator_id: number;
    store_id: number;
};
type EdcDeviceAddResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcUpdateRequest = {
    terminal_serial_no: string;
    is_active?: string;
    device_tag?: string;
    store_name?: string;
    merchant_store_pos_code?: string;
    edc_device_serial_no?: string;
    aggregator_id?: number;
    store_id?: number;
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
    contact: string;
    currency: string;
    vpa?: string;
    device_id?: string;
    merchant_order_id: string;
    method: string;
    amount: number;
    email: string;
    aggregator: string;
    timeout?: number;
    razorpay_payment_id?: string;
    order_id: string;
    customer_id: string;
};
type PaymentInitializationResponse = {
    currency?: string;
    vpa?: string;
    device_id?: string;
    aggregator_order_id?: string;
    merchant_order_id: string;
    polling_url: string;
    method: string;
    razorpay_payment_id?: string;
    amount?: number;
    bqr_image?: string;
    aggregator: string;
    virtual_id?: string;
    timeout?: number;
    status?: string;
    success: boolean;
    upi_poll_url?: string;
    customer_id?: string;
};
type PaymentStatusUpdateRequest = {
    contact: string;
    currency: string;
    vpa?: string;
    device_id?: string;
    merchant_order_id: string;
    amount: number;
    email: string;
    aggregator: string;
    status: string;
    method: string;
    order_id: string;
    customer_id: string;
};
type PaymentStatusUpdateResponse = {
    retry: boolean;
    redirect_url?: string;
    aggregator_name: string;
    status: string;
    success?: boolean;
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
    value?: string;
    text: string;
    name?: string;
};
type FiltersInfo = {
    type: string;
    value: string;
    text: string;
    options?: FilterInfoOption[];
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type Prices = {
    cod_charges?: number;
    fynd_credits?: number;
    tax_collected_at_source?: number;
    discount?: number;
    amount_paid?: number;
    delivery_charge?: number;
    refund_credit?: number;
    value_of_good?: number;
    coupon_value?: number;
    promotion_effective_discount?: number;
    cashback_applied?: number;
    amount_paid_roundoff?: number;
    cashback?: number;
    refund_amount?: number;
    price_marked?: number;
    price_effective?: number;
};
type ShipmentStatus = {
    title: string;
    status: string;
    hex_code: string;
    ops_status: string;
    actual_status: string;
};
type UserDataInfo = {
    first_name?: string;
    is_anonymous_user?: boolean;
    name?: string;
    last_name?: string;
    mobile?: string;
    avis_user_id?: string;
    gender?: string;
    uid?: number;
    email?: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    gstin_code: string;
    brand_calculated_amount: number;
    value_of_good: number;
    gst_fee: number;
};
type PlatformItem = {
    code?: string;
    l3_category?: number;
    can_cancel?: boolean;
    department_id?: number;
    name?: string;
    can_return?: boolean;
    l1_category?: string[];
    images?: string[];
    id?: number;
    l3_category_name?: string;
    image?: string[];
    size?: string;
    color?: string;
};
type BagUnit = {
    bag_id: number;
    can_cancel?: boolean;
    gst?: GSTDetailsData;
    status: any;
    prices?: Prices;
    ordering_channel: string;
    can_return?: boolean;
    item?: PlatformItem;
    item_quantity: number;
    total_shipment_bags: number;
    shipment_id: string;
};
type ShipmentItem = {
    sla?: any;
    total_shipments_in_order: number;
    payment_mode_info?: PaymentModeInfo;
    application?: any;
    created_at: string;
    channel?: any;
    prices?: Prices;
    shipment_status?: ShipmentStatus;
    payment_methods?: any;
    shipment_created_at: number;
    user?: UserDataInfo;
    fulfilling_centre: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    id: string;
    total_bags_count: number;
    bags?: BagUnit[];
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
type TrackingList = {
    status: string;
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
    text: string;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type AppliedPromos = {
    mrp_promotion?: boolean;
    promo_id?: string;
    buy_rules?: BuyRules[];
    amount?: number;
    promotion_type?: string;
    article_quantity?: number;
    discount_rules?: DiscountRules[];
    promotion_name?: string;
};
type BagGST = {
    gstin_code?: string;
    brand_calculated_amount?: number;
    value_of_good?: number;
    hsn_code?: string;
    gst_tax_percentage?: number;
    gst_fee?: number;
    gst_tag?: string;
    is_default_hsn_code?: boolean;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    discount: number;
    amount_paid: number;
    brand_calculated_amount: number;
    coupon_value: number;
    gst_tax_percentage: number;
    cashback_applied: number;
    price_marked: number;
    tax_collected_at_source?: number;
    added_to_fynd_cash: boolean;
    transfer_price: number;
    hsn_code: string;
    amount_paid_roundoff?: number;
    gst_fee: number;
    size: string;
    cod_charges: number;
    total_units: number;
    refund_credit: number;
    value_of_good: number;
    gst_tag: string;
    fynd_credits: number;
    delivery_charge: number;
    identifiers: Identifier;
    promotion_effective_discount: number;
    cashback: number;
    item_name: string;
    coupon_effective_discount: number;
    price_effective: number;
};
type OrderBrandName = {
    modified_on?: string;
    company?: string;
    created_on: string;
    logo: string;
    brand_name: string;
    id: number;
};
type BagConfigs = {
    is_active: boolean;
    allow_force_return: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
};
type BagStateMapper = {
    display_name: string;
    app_display_name?: string;
    is_active?: boolean;
    app_state_name?: string;
    app_facing?: boolean;
    name: string;
    notify_customer?: boolean;
    state_type: string;
    bs_id: number;
    journey_type: string;
};
type CurrentStatus = {
    bag_id?: number;
    bag_state_mapper?: BagStateMapper;
    created_at?: string;
    updated_at?: number;
    store_id?: number;
    status?: string;
    delivery_awb_number?: string;
    state_type?: string;
    state_id?: number;
    kafka_sync?: boolean;
    current_status_id: number;
    shipment_id?: string;
    delivery_partner_id?: number;
};
type OrderBagArticle = {
    uid?: string;
    return_config?: any;
    identifiers?: any;
};
type PlatformDeliveryAddress = {
    country?: string;
    address_category?: string;
    created_at?: string;
    updated_at?: string;
    phone?: string;
    city?: string;
    pincode?: string;
    version?: string;
    address1?: string;
    address2?: string;
    area?: string;
    longitude?: number;
    address_type?: string;
    email?: string;
    state?: string;
    latitude?: number;
    landmark?: string;
    contact_person?: string;
};
type OrderBags = {
    bag_id: number;
    seller_identifier?: string;
    applied_promos?: AppliedPromos[];
    gst_details?: BagGST;
    parent_promo_bags?: any;
    identifier?: string;
    financial_breakup?: FinancialBreakup;
    item?: PlatformItem;
    quantity?: number;
    line_number?: number;
    brand?: OrderBrandName;
    bag_configs?: BagConfigs;
    can_cancel?: boolean;
    prices?: Prices;
    can_return?: boolean;
    entity_type?: string;
    current_status?: CurrentStatus;
    display_name?: string;
    article?: OrderBagArticle;
    delivery_address?: PlatformDeliveryAddress;
};
type ShipmentStatusData = {
    created_at?: string;
    status?: string;
    bag_list?: string[];
    id?: number;
    shipment_id?: string;
};
type UserDetailsData = {
    country: string;
    address: string;
    phone: string;
    name: string;
    city: string;
    pincode: string;
    email?: string;
    state: string;
};
type DPDetailsData = {
    country?: string;
    track_url?: string;
    name?: string;
    awb_no?: string;
    eway_bill_id?: string;
    pincode?: string;
    gst_tag?: string;
    id?: number;
};
type FulfillingStore = {
    country: string;
    code: string;
    address: string;
    phone: string;
    city: string;
    pincode: string;
    store_name: string;
    fulfillment_channel: string;
    meta: any;
    state: string;
    id: number;
    contact_person: string;
};
type ShipmentPayments = {
    logo?: string;
    source?: string;
    mode?: string;
};
type BagStatusHistory = {
    bag_id?: number;
    bag_state_mapper?: BagStateMapper;
    created_at?: string;
    forward?: boolean;
    display_name?: string;
    app_display_name?: string;
    updated_at?: string;
    store_id?: number;
    status: string;
    delivery_awb_number?: string;
    state_type?: string;
    bsh_id?: number;
    state_id?: number;
    kafka_sync?: boolean;
    reasons?: any[];
    shipment_id?: string;
    delivery_partner_id?: number;
};
type OrderDetailsData = {
    cod_charges?: string;
    order_value?: string;
    tax_details?: any;
    affiliate_id?: string;
    ordering_channel_logo?: any;
    ordering_channel?: string;
    order_date?: string;
    fynd_order_id: string;
    source?: string;
};
type ShipmentInfoResponse = {
    due_date?: string;
    user_agent?: string;
    gst_details?: GSTDetailsData;
    company: any;
    refund_details?: any;
    tracking_list?: TrackingList[];
    tracking_url: string;
    coupon?: any;
    order_type: string;
    replacement_details?: string;
    is_fynd_store?: string;
    enable_tracking?: boolean;
    beneficiary_details?: boolean;
    invoice: any;
    ordering_store: any;
    is_fynd_coupon: boolean;
    bags?: OrderBags[];
    email_id: string;
    escalation?: any;
    order_created_time?: string;
    go_green?: boolean;
    status?: ShipmentStatusData;
    total_bags?: number;
    picked_date?: string;
    current_shipment_status: any;
    is_not_fynd_source: boolean;
    delivery_details?: UserDetailsData;
    bank_data?: any;
    credit_note_id: string;
    mid?: string;
    dp_details?: DPDetailsData;
    forward_shipment_status?: any[];
    shipment_images?: string[];
    can_cancel?: boolean;
    fyndstore_emp: any;
    shipment_status?: string;
    total_items?: number;
    prices?: Prices;
    shipment_quantity?: number;
    delivery_slot?: any;
    is_invoiced: boolean;
    status_progress: number;
    can_return?: boolean;
    secured_delivery_flag?: string;
    fulfilling_store?: FulfillingStore;
    items: any[];
    payments?: ShipmentPayments;
    order_status: any;
    billing_details?: UserDetailsData;
    payment_mode?: string;
    vertical?: string;
    user_info?: any;
    operational_status?: string;
    packaging_type?: string;
    is_packaging_order: boolean;
    child_nodes?: string[];
    kirana_store_id?: string;
    forward_order_status?: any[];
    priority_text?: string;
    delivery_status: any[];
    bag_status_history?: BagStatusHistory[];
    is_pdsr?: string;
    custom_meta?: any[];
    order?: OrderDetailsData;
    user_id: string;
    affiliate_shipment_id: string;
    can_break: string;
    enable_dp_tracking?: boolean;
    refund_text?: string;
    forward_tracking_list?: any[];
    shipment_id: string;
    platform_logo: boolean;
    lock_status: string;
    pay_button?: string;
    journey_type?: string;
};
type PlatformShipment = {
    user_agent?: string;
    gst_details?: GSTDetailsData;
    tracking_list?: TrackingList[];
    coupon?: any;
    bags?: OrderBags[];
    status?: ShipmentStatusData;
    total_bags?: number;
    picked_date?: string;
    delivery_details?: UserDetailsData;
    dp_details?: DPDetailsData;
    shipment_images?: string[];
    shipment_status?: string;
    total_items?: number;
    prices?: Prices;
    shipment_quantity?: number;
    delivery_slot?: any;
    fulfilling_store?: FulfillingStore;
    payments?: ShipmentPayments;
    billing_details?: UserDetailsData;
    payment_mode?: string;
    vertical?: string;
    operational_status?: string;
    packaging_type?: string;
    priority_text?: string;
    bag_status_history?: BagStatusHistory[];
    custom_meta?: any[];
    order?: OrderDetailsData;
    enable_dp_tracking?: boolean;
    shipment_id: string;
    platform_logo?: string;
    journey_type?: string;
};
type OrderMeta = {
    currency_symbol?: string;
    cart_id?: number;
    extra_meta?: any;
    staff?: any;
    customer_note?: string;
    mongo_cart_id?: number;
    comment?: string;
    order_type?: string;
    order_tags?: any[];
    order_child_entities?: string[];
    files?: any[];
    ordering_store?: number;
    payment_type?: string;
    employee_id?: number;
    order_platform?: string;
};
type OrderDict = {
    prices?: Prices;
    payment_methods?: any;
    order_date: string;
    meta?: OrderMeta;
    fynd_order_id: string;
};
type ShipmentDetailsResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    order?: OrderDict;
};
type SubLane = {
    index?: number;
    actions?: any[];
    total_items?: number;
    value?: string;
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
    display?: string;
    name?: string;
    value?: string;
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformOrderItems = {
    order_value?: number;
    order_created_time?: string;
    total_order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    channel?: PlatformChannel;
    order_id?: string;
    shipments?: PlatformShipment[];
    meta?: any;
    user_info?: UserDataInfo;
    payment_mode?: string;
};
type OrderListingResponse = {
    message?: string;
    lane?: string;
    success?: boolean;
    page?: Page;
    total_count?: number;
    items?: PlatformOrderItems[];
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    key: string;
    value: number;
    options?: Options[];
    text: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    reason?: string;
    updated_at?: string;
    status?: string;
    raw_status?: string;
    shipment_type?: string;
    account_name?: string;
    updated_time?: string;
    awb?: string;
    meta?: any;
    last_location_recieved_at?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type AdvanceFilterInfo = {
    processed?: FiltersInfo[];
    filters?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    returned?: FiltersInfo[];
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
    request_details?: any;
    display_name?: string;
    report_id?: string;
    report_requested_at?: string;
    report_created_at?: string;
    status?: string;
    report_name?: string;
    report_type?: string;
    s3_key?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    article_id?: string;
    item_id?: string;
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
    data?: any[];
    identifier?: string;
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    batch_id: string;
    store_code?: string;
    invoice_status?: string;
    label?: any;
    store_id?: string;
    data?: any;
    do_invoice_label_generated: boolean;
    invoice?: any;
    store_name?: string;
    company_id?: string;
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
    cdn?: URL;
    file_path?: string;
    operation?: string;
    tags?: string[];
    file_name?: string;
    method?: string;
    upload?: FileUploadResponse;
    size?: number;
    content_type?: string;
};
type bulkListingData = {
    excel_url?: string;
    store_name?: string;
    status?: string;
    failed_shipments?: any[];
    file_name?: string;
    company_id?: number;
    processing?: number;
    store_code?: string;
    successful?: number;
    total?: number;
    failed?: number;
    processing_shipments?: string[];
    batch_id?: string;
    uploaded_on?: string;
    user_name?: string;
    store_id?: number;
    user_id?: string;
    id?: string;
    successful_shipments?: any[];
};
type BulkListingPage = {
    has_previous?: boolean;
    current?: number;
    total?: number;
    has_next?: boolean;
    type?: string;
    size?: number;
};
type BulkListingResponse = {
    success?: boolean;
    data?: bulkListingData[];
    error?: string;
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
    batch_id?: string;
    successful_shipments_count?: number;
    total_shipments_count?: number;
    failed_shipments_count?: number;
    processing_shipments_count?: number;
    company_id?: string;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    message?: string;
    uploaded_by?: string;
    uploaded_on?: string;
    data?: BulkActionDetailsDataField[];
    status?: boolean;
    success?: string;
    error?: string[];
    failed_records?: string[];
    user_id?: string;
};
type BagGSTDetails = {
    tax_collected_at_source: number;
    igst_gst_fee: string;
    gstin_code?: string;
    cgst_tax_percentage: number;
    brand_calculated_amount: number;
    value_of_good: number;
    hsn_code: string;
    sgst_gst_fee: string;
    sgst_tax_percentage: number;
    gst_tax_percentage: number;
    gst_fee: number;
    gst_tag: string;
    is_default_hsn_code?: boolean;
    hsn_code_id: string;
    igst_tax_percentage: number;
    cgst_gst_fee: string;
};
type Attributes = {
    marketer_name?: string;
    essential?: string;
    name?: string;
    marketer_address?: string;
    primary_material?: string;
    brand_name?: string;
    gender?: string[];
    primary_color_hex?: string;
    primary_color?: string;
};
type Item = {
    code?: string;
    l1_category_id?: number;
    attributes: Attributes;
    gender?: string;
    meta?: any;
    brand_id: number;
    name: string;
    l2_category?: string[];
    l3_category_name?: string;
    brand: string;
    size: string;
    can_cancel?: boolean;
    webstore_product_url?: string;
    slug_key: string;
    can_return?: boolean;
    item_id: number;
    color?: string;
    branch_url?: string;
    l3_category?: number;
    department_id?: number;
    last_updated_at?: string;
    l1_category?: string[];
    image: string[];
    l2_category_id?: number;
};
type StoreEinvoice = {
    username?: string;
    password?: string;
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
type EInvoicePortalDetails = {
    username?: string;
    password?: string;
    user?: string;
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
type StoreMeta = {
    display_name: string;
    gst_credentials: StoreGstCredentials;
    product_return_config?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    stage: string;
    additional_contact_details?: any;
    notification_emails?: string[];
    ewaybill_portal_details?: any;
    documents?: StoreDocuments;
    gst_number?: string;
    timing?: any[];
};
type StoreAddress = {
    country: string;
    address_category: string;
    address1: string;
    landmark?: string;
    area?: string;
    email?: string;
    state: string;
    phone: string;
    pincode: number;
    version?: string;
    longitude: number;
    latitude: number;
    contact_person: string;
    created_at: string;
    updated_at: string;
    city: string;
    country_code: string;
    address2?: string;
    address_type: string;
};
type Store = {
    country: string;
    code?: string;
    is_archived?: boolean;
    mall_name?: string;
    is_active?: boolean;
    address1: string;
    fulfillment_channel: string;
    meta: StoreMeta;
    brand_id?: any;
    state: string;
    phone: number;
    name: string;
    location_type: string;
    pincode: string;
    company_id: number;
    longitude: number;
    latitude: number;
    is_enabled_for_recon?: boolean;
    brand_store_tags?: string[];
    contact_person: string;
    created_at: string;
    store_active_from?: string;
    updated_at?: string;
    login_username: string;
    city: string;
    store_address_json?: StoreAddress;
    packaging_material_count?: number;
    store_email: string;
    parent_store_id?: number;
    s_id: string;
    alohomora_user_id?: number;
    vat_no?: string;
    address2?: string;
    order_integration_id?: string;
    mall_area?: string;
};
type AffiliateMeta = {
    is_priority?: boolean;
    due_date?: string;
    size_level_total_qty?: number;
    employee_discount?: number;
    channel_order_id?: string;
    box_type?: string;
    loyalty_discount?: number;
    channel_shipment_id?: string;
    coupon_code?: string;
    order_item_id?: string;
    quantity?: number;
};
type AffiliateBagDetails = {
    affiliate_bag_id: string;
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
    loyalty_discount?: number;
    affiliate_order_id: string;
};
type B2BPODetails = {
    item_base_price?: number;
    po_tax_amount?: number;
    po_line_amount?: number;
    total_gst_percentage?: number;
    partial_can_ret?: boolean;
    docker_number?: string;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type PDFLinks = {
    label_type: string;
    credit_note_url?: string;
    label_pos?: string;
    label?: string;
    invoice_a6?: string;
    b2b?: string;
    invoice_type: string;
    invoice?: string;
    label_a4?: string;
    invoice_a4?: string;
    po_invoice?: string;
    invoice_pos?: string;
    label_a6?: string;
};
type EInvoice = {
    irn?: string;
    signed_qr_code?: string;
    signed_invoice?: string;
    acknowledge_date?: string;
    error_code?: string;
    acknowledge_no?: number;
    error_message?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type BuyerDetails = {
    address: string;
    name: string;
    city: string;
    gstin: string;
    pincode: number;
    state: string;
    ajio_site_id?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type LockData = {
    lock_message?: string;
    locked?: boolean;
    mto?: boolean;
};
type ShipmentMeta = {
    due_date?: string;
    einvoice_info?: EinvoiceInfo;
    forward_affiliate_order_id?: string;
    order_type?: string;
    dp_sort_key?: string;
    debug_info?: DebugInfo;
    po_number?: string;
    formatted?: Formatted;
    external?: any;
    assign_dp_from_sb?: boolean;
    fulfilment_priority_text?: string;
    b2b_buyer_details?: BuyerDetails;
    weight: number;
    return_affiliate_order_id?: string;
    shipment_volumetric_weight?: number;
    bag_weight?: any;
    forward_affiliate_shipment_id?: string;
    timestamp?: ShipmentTimeStamp;
    packaging_name?: string;
    return_details?: any;
    b2c_buyer_details?: any;
    return_affiliate_shipment_id?: string;
    return_store_node?: number;
    awb_number?: string;
    box_type?: string;
    shipment_weight?: number;
    dp_options?: any;
    auto_trigger_dp_assignment_acf: boolean;
    return_awb_number?: string;
    lock_data?: LockData;
    marketplace_store_id?: string;
    same_store_available: boolean;
    store_invoice_updated_date?: string;
    dp_name?: string;
    ewaybill_info?: any;
    dp_id?: string;
};
type AffiliateDetails = {
    ad_id?: string;
    affiliate_bag_id: string;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    shipment_meta: ShipmentMeta;
    affiliate_order_id: string;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
};
type Brand = {
    modified_on?: number;
    company: string;
    created_on?: number;
    start_date?: string;
    credit_note_expiry_days?: number;
    pickup_location?: string;
    credit_note_allowed?: boolean;
    logo?: string;
    script_last_ran?: string;
    brand_name: string;
    is_virtual_invoice?: boolean;
    brand_id: number;
    invoice_prefix?: string;
};
type ArticleDetails = {
    status?: any;
};
type ReturnConfig = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Weight = {
    shipping?: number;
    is_default?: boolean;
    unit?: string;
};
type Dimensions = {
    length?: number;
    unit?: string;
    is_default?: boolean;
    width?: number;
    height?: number;
};
type Article = {
    code?: string;
    seller_identifier: string;
    return_config?: ReturnConfig;
    identifiers: Identifier;
    weight?: Weight;
    child_details?: any;
    is_set?: boolean;
    raw_meta?: any;
    dimensions?: Dimensions;
    _id: string;
    esp_modified?: any;
    uid: string;
    a_set?: any;
    size: string;
};
type BagDetailsPlatformResponse = {
    restore_promos?: any;
    seller_identifier?: string;
    applied_promos?: any[];
    restore_coupon?: boolean;
    gst_details: BagGSTDetails;
    parent_promo_bags?: any;
    identifier?: string;
    financial_breakup: FinancialBreakup[];
    item: Item;
    tags?: string[];
    qc_required?: any;
    reasons?: any[];
    ordering_store?: Store;
    affiliate_bag_details: AffiliateBagDetails;
    meta?: BagMeta;
    b_id: number;
    quantity?: number;
    affiliate_details?: AffiliateDetails;
    line_number?: number;
    dates?: Dates;
    status: BagReturnableCancelableStatus;
    current_operational_status: BagStatusHistory;
    bag_update_time?: number;
    brand: Brand;
    original_bag_list?: number[];
    prices: Prices;
    entity_type?: string;
    bag_status: BagStatusHistory[];
    current_status: BagStatusHistory;
    article_details?: ArticleDetails;
    operational_status?: string;
    display_name?: string;
    b_type?: string;
    bag_status_history?: BagStatusHistory;
    article: Article;
    no_of_bags_order?: number;
    shipment_id?: string;
    order_integration_id?: string;
    journey_type: string;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    item_total: number;
    current: number;
    page_type: string;
    has_next: boolean;
    size: number;
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
    error_trace?: string;
    status: number;
    message: string;
};
type StoreReassign = {
    affiliate_order_id?: string;
    fynd_order_id?: string;
    item_id?: string;
    affiliate_id?: string;
    mongo_article_id?: string;
    store_id: number;
    bag_id?: number;
    affiliate_bag_id?: string;
    reason_ids?: number[];
    set_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_order_id?: string;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
    id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    action_type: string;
    entities: Entities[];
    entity_type: string;
};
type Bags = {
    affiliate_bag_id?: string;
    is_locked?: boolean;
    affiliate_order_id?: string;
    bag_id?: number;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    lock_status?: boolean;
    is_bag_locked?: boolean;
    affiliate_id?: string;
    bags?: Bags[];
    status?: string;
    is_shipment_locked?: boolean;
    affiliate_shipment_id?: string;
    original_filter?: OriginalFilter;
    shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    platform_name?: string;
    description?: string;
    created_at?: string;
    from_datetime?: string;
    logo_url?: string;
    company_id?: number;
    title?: string;
    id: number;
    to_datetime?: string;
    platform_id?: string;
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
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
type ProductsReasonsData = {
    reason_text?: string;
    reason_id?: number;
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
    reason_text?: string;
    reason_id?: number;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
type ReasonsData = {
    products?: ProductsReasons[];
    entities?: EntitiesReasons[];
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
type ShipmentsRequest = {
    products?: Products[];
    reasons?: ReasonsData;
    identifier: string;
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    force_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    exception?: string;
    message?: string;
    stack_trace?: string;
    final_state?: any;
    identifier?: string;
    status?: number;
    meta?: any;
    code?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderPriority = {
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
};
type OrderUser = {
    mobile: number;
    pincode: string;
    address1?: string;
    city: string;
    email: string;
    phone: number;
    last_name: string;
    state: string;
    first_name: string;
    address2?: string;
    country: string;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    avl_qty: number;
    identifier: any;
    hsn_code_id: string;
    unit_price: number;
    seller_identifier: string;
    affiliate_store_id: string;
    item_size: string;
    pdf_links?: MarketPlacePdf;
    delivery_charge: number;
    sku: string;
    modified_on: string;
    company_id: number;
    discount: number;
    price_effective: number;
    transfer_price: number;
    item_id: number;
    quantity: number;
    store_id: number;
    price_marked: number;
    fynd_store_id: string;
    _id: string;
    affiliate_meta: any;
    amount_paid: number;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type ArticleDetails1 = {
    attributes: any;
    brand_id: number;
    quantity: number;
    _id: string;
    weight: any;
    category: any;
    dimension: any;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_type: string;
    fulfillment_id: number;
};
type ShipmentDetails = {
    shipments: number;
    box_type?: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
    affiliate_shipment_id: string;
    dp_id?: number;
    meta?: any;
};
type ShipmentConfig = {
    location_details?: LocationDetails;
    journey: string;
    identifier: string;
    source: string;
    payment_mode: string;
    action: string;
    to_pincode: string;
    shipment: ShipmentDetails[];
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    affiliate_order_id?: string;
    order_priority?: OrderPriority;
    items: any;
    shipping_address: OrderUser;
    delivery_charges: number;
    coupon?: string;
    bags: AffiliateBag[];
    order_value: number;
    user: UserData;
    payment_mode: string;
    billing_address: OrderUser;
    discount: number;
    shipment?: ShipmentData;
    payment?: any;
    cod_charges: number;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    name: string;
    owner: string;
    token: string;
    description?: string;
    updated_at: string;
    secret: string;
    created_at: string;
    id: string;
    meta?: AffiliateAppConfigMeta[];
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
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    id: string;
    token: string;
    config?: AffiliateConfig;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    affiliate: Affiliate;
    article_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    create_user?: boolean;
    bag_end_state?: string;
    store_lookup?: string;
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
    id: number;
    display_text: string;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    createdat: string;
    type: string;
    message: string;
    l3_detail?: string;
    user: string;
    l2_detail?: string;
    ticket_url?: string;
    l1_detail?: string;
    bag_id?: number;
    ticket_id?: string;
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
    customer_name: string;
    message: string;
    country_code: string;
    phone_number: number;
    brand_name: string;
    order_id: string;
    payment_mode: string;
    shipment_id: number;
    amount_paid: number;
};
type SendSmsPayload = {
    slug: string;
    data?: SmsDataPayload;
    bag_id: number;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    bag_list?: number[];
    status?: string;
    id: number;
    remarks?: string;
    meta: Meta;
    shipment_id?: string;
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
    shipment_ids?: string[];
    order_type: string;
    dp_id: number;
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type Tax = {
    amount: any;
    breakup?: any[];
    name: string;
    rate: number;
};
type Charge = {
    name: string;
    type: string;
    tax?: Tax;
    amount: any;
    code?: string;
};
type LineItem = {
    quantity?: number;
    charges?: Charge[];
    external_line_id?: string;
    custom_messasge?: string;
    meta?: any;
    seller_identifier: string;
};
type ProcessingDates = {
    customer_pickup_slot?: any;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
    confirm_by_date?: string;
    pack_by_date?: string;
};
type Shipment = {
    external_shipment_id?: string;
    meta?: any;
    priority?: number;
    line_items: LineItem[];
    location_id: number;
    processing_dates?: ProcessingDates;
};
type ShippingInfo = {
    house_no?: string;
    address1: string;
    address_type?: string;
    title?: string;
    address2?: string;
    pincode: string;
    primary_mobile_number: string;
    slot?: any[];
    last_name?: string;
    state: string;
    landmark?: string;
    alternate_mobile_number?: string;
    shipping_type?: string;
    gender?: string;
    geo_location?: any;
    state_code?: string;
    customer_code?: string;
    primary_email: string;
    country: string;
    floor_no?: string;
    middle_name?: string;
    city: string;
    country_code?: string;
    external_customer_code?: string;
    alternate_email?: string;
    first_name: string;
};
type BillingInfo = {
    house_no?: string;
    address1: string;
    title?: string;
    address2?: string;
    pincode: string;
    primary_mobile_number: string;
    last_name?: string;
    state: string;
    alternate_mobile_number?: string;
    gender?: string;
    state_code?: string;
    customer_code?: string;
    primary_email: string;
    country: string;
    floor_no?: string;
    middle_name?: string;
    city: string;
    country_code?: string;
    external_customer_code?: string;
    alternate_email?: string;
    first_name: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
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
type CreateOrderAPI = {
    shipments: Shipment[];
    shipping_info: ShippingInfo;
    billing_info: BillingInfo;
    external_creation_date?: string;
    charges?: Charge[];
    external_order_id?: string;
    tax_info?: TaxInfo;
    payment_info: PaymentInfo;
    meta?: any;
    currency_info?: any;
};
type CreateOrderErrorReponse = {
    info?: any;
    exception?: string;
    message: string;
    stack_trace?: string;
    request_id?: string;
    status: number;
    meta?: string;
    code?: string;
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
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
    source?: string;
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
    logo_url?: any;
    lock_states?: string[];
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
    is_upserted?: boolean;
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
    success?: boolean;
    message?: string[];
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    start_date: string;
    mobile: number;
    order_details?: FyndOrderIdList[];
    end_date: string;
};
type GetSearchWordsData = {
    words?: string[];
    is_active?: boolean;
    app_id?: string;
    uid?: string;
    _custom_json?: any;
    result?: any;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    words?: string[];
    is_active?: boolean;
    app_id?: string;
    _custom_json?: any;
    result: SearchKeywordResult;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    words?: string[];
    app_id?: string;
    uid?: string;
    results?: any[];
    _custom_json?: any;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type AutocompletePageAction = {
    query?: any;
    params?: any;
    type?: string;
    url?: string;
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
    _custom_json?: any;
    action?: AutocompleteAction;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    words?: string[];
    is_active?: boolean;
    app_id?: string;
    results?: AutocompleteResult[];
    _custom_json?: any;
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    words?: string[];
    _custom_json?: any;
    app_id?: string;
};
type ProductBundleItem = {
    allow_remove?: boolean;
    product_uid: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    max_quantity: number;
    min_quantity: number;
};
type GetProductBundleCreateResponse = {
    same_store_assignment?: boolean;
    is_active: boolean;
    slug: string;
    page_visibility?: string[];
    created_by?: any;
    name: string;
    modified_by?: any;
    meta?: any;
    company_id?: number;
    created_on?: string;
    products: ProductBundleItem[];
    logo?: string;
    modified_on?: string;
    choice: string;
    id?: string;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    same_store_assignment?: boolean;
    is_active: boolean;
    slug: string;
    page_visibility?: string[];
    created_by?: any;
    name: string;
    modified_by?: any;
    meta?: any;
    company_id?: number;
    created_on?: string;
    products: ProductBundleItem[];
    logo?: string;
    modified_on?: string;
    choice: string;
};
type LimitedProductData = {
    country_of_origin?: string;
    item_code?: string;
    sizes?: string[];
    slug?: string;
    attributes?: any;
    name?: string;
    uid?: number;
    images?: string[];
    quantity?: number;
    identifier?: any;
    short_description?: string;
    price?: any;
};
type Size = {
    display?: string;
    is_available?: boolean;
    value?: string;
    quantity?: number;
};
type Price = {
    min_marked?: number;
    max_effective?: number;
    max_marked?: number;
    min_effective?: number;
    currency?: string;
};
type GetProducts = {
    allow_remove?: boolean;
    product_details?: LimitedProductData;
    product_uid?: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    max_quantity?: number;
    sizes?: Size[];
    price?: Price;
    min_quantity?: number;
};
type GetProductBundleResponse = {
    same_store_assignment?: boolean;
    is_active?: boolean;
    page_visibility?: string[];
    slug?: string;
    name?: string;
    meta?: any;
    company_id?: number;
    products?: GetProducts[];
    logo?: string;
    choice?: string;
};
type ProductBundleUpdateRequest = {
    same_store_assignment?: boolean;
    is_active: boolean;
    slug: string;
    page_visibility?: string[];
    name: string;
    modified_by?: any;
    meta?: any;
    company_id?: number;
    products: ProductBundleItem[];
    logo?: string;
    modified_on?: string;
    choice: string;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    tag?: string;
    created_by?: any;
    name: string;
    image?: string;
    active?: boolean;
    brand_id?: number;
    company_id?: number;
    modified_by?: any;
    created_on?: string;
    subtitle?: string;
    description?: string;
    guide?: Guide;
    modified_on?: string;
    id?: string;
    title: string;
};
type SizeGuideResponse = {
    tag?: string;
    created_by?: any;
    name?: string;
    modified_by?: any;
    created_on?: string;
    active?: boolean;
    brand_id?: number;
    company_id?: number;
    subtitle?: string;
    guide?: any;
    modified_on?: string;
    id?: string;
    title?: string;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    is_gift?: boolean;
    alt_text?: any;
    is_cod?: boolean;
    moq?: MOQData;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
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
    alt_text?: any;
    _custom_json?: any;
    is_gift?: boolean;
    is_cod?: boolean;
    moq?: ApplicationItemMOQ;
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
type PageResponseType = {
    total_count: number;
    next: number;
    has_next: boolean;
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
    is_active: boolean;
    unit?: string;
    slug?: string;
    name: string;
    priority: number;
    logo?: string;
    display_type: string;
    key?: string;
};
type AppConfigurationDetail = {
    is_active: boolean;
    slug: string;
    app_id: string;
    attributes?: AttributeDetailsGroup[];
    name?: string;
    template_slugs?: string[];
    priority: number;
    is_default: boolean;
    logo?: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_active: boolean;
    app_id: string;
    name?: string;
    priority: number;
    is_default: boolean;
    logo?: string;
    default_key: string;
    key: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    detail?: any;
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
    units?: any[];
    filter_types?: string[];
    key?: string;
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
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    is_active: boolean;
    key: string;
    priority: number;
    size?: ProductSize;
    subtitle?: string;
    logo?: string;
    title?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    is_active: boolean;
    name: string;
    priority: number;
    size: ProductSize;
    logo?: string;
    display_type: string;
    key: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    name?: string;
    priority: number;
    logo?: string;
    key: string;
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
    bucket_points?: ConfigurationBucketPoints[];
    map?: any;
    sort?: string;
    condition?: string;
    map_values?: any[];
    value?: string;
};
type ConfigurationListingFilterConfig = {
    is_active: boolean;
    name?: string;
    priority: number;
    value_config?: ConfigurationListingFilterValue;
    type: string;
    display_name?: string;
    logo?: string;
    key: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type AppCatalogConfiguration = {
    product?: ConfigurationProduct;
    app_id: string;
    created_by?: any;
    modified_by?: any;
    created_on?: string;
    config_type: string;
    type?: string;
    listing?: ConfigurationListing;
    modified_on?: string;
    id?: string;
    config_id?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    product?: ConfigurationProduct;
    app_id: string;
    created_by?: any;
    modified_by?: any;
    created_on?: string;
    config_type: string;
    type?: string;
    listing?: ConfigurationListing;
    modified_on?: string;
    config_id?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    product?: GetCatalogConfigurationDetailsProduct;
    app_id: string;
    config_type: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
    config_id?: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    name?: string;
    is_selected?: boolean;
    value?: string;
};
type ProductFiltersValue = {
    currency_code?: string;
    count?: number;
    selected_min?: number;
    currency_symbol?: string;
    query_format?: string;
    min?: number;
    max?: number;
    display_format?: string;
    display: string;
    selected_max?: number;
    is_selected: boolean;
    value: any;
};
type ProductFiltersKey = {
    name: string;
    logo?: string;
    display: string;
    operators?: string[];
    kind?: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type GetCollectionQueryOptionResponse = {
    sort_on?: ProductSortOn[];
    operators: any;
    filters?: ProductFilters[];
};
type Media1 = {
    type?: string;
    url: string;
    meta?: any;
};
type BannerImage = {
    type?: string;
    url?: string;
    aspect_ratio?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
};
type GetCollectionDetailNest = {
    slug?: string;
    app_id?: string;
    meta?: any;
    uid?: string;
    type?: string;
    allow_facets?: boolean;
    description?: string;
    logo?: Media1;
    action?: Action;
    banners?: ImageUrls;
    allow_sort?: boolean;
    cron?: any;
    badge?: any;
    is_active?: boolean;
    _schedule?: any;
    query?: CollectionQuery[];
    tag?: string[];
    name?: string;
    priority?: number;
    visible_facets_keys?: string[];
};
type CollectionListingFilterType = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilterTag = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
    page?: Page;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type UserInfo = {
    user_id?: string;
    email?: string;
    uid?: string;
    username?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionSchedule = {
    duration?: number;
    start?: string;
    next_schedule?: NextSchedule[];
    end?: string;
    cron?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CreateCollection = {
    slug: string;
    app_id: string;
    meta?: any;
    type: string;
    allow_facets?: boolean;
    description?: string;
    published?: boolean;
    logo: CollectionImage;
    _locale_language?: any;
    banners: CollectionBanner;
    is_visible?: boolean;
    allow_sort?: boolean;
    created_by?: UserInfo;
    _custom_json?: any;
    badge?: CollectionBadge;
    is_active?: boolean;
    _schedule?: CollectionSchedule;
    query?: CollectionQuery[];
    tags?: string[];
    seo?: SeoDetail;
    name: string;
    modified_by?: UserInfo;
    priority?: number;
    sort_on?: string;
    visible_facets_keys?: string[];
};
type CollectionCreateResponse = {
    slug?: string;
    app_id?: string;
    meta?: any;
    type?: string;
    allow_facets?: boolean;
    description?: string;
    logo?: BannerImage;
    banners?: ImageUrls;
    allow_sort?: boolean;
    cron?: any;
    badge?: any;
    is_active?: boolean;
    _schedule?: any;
    query?: CollectionQuery[];
    tag?: string[];
    name?: string;
    priority?: number;
    sort_on?: string;
    visible_facets_keys?: string[];
};
type CollectionDetailResponse = {
    slug?: string;
    app_id?: string;
    meta?: any;
    uid?: string;
    type?: string;
    allow_facets?: boolean;
    description?: string;
    logo?: Media1;
    banners?: ImageUrls;
    allow_sort?: boolean;
    cron?: any;
    badge?: any;
    is_active?: boolean;
    _schedule?: any;
    query?: CollectionQuery[];
    tag?: string[];
    name?: string;
    priority?: number;
    visible_facets_keys?: string[];
};
type UpdateCollection = {
    slug?: string;
    meta?: any;
    allow_facets?: boolean;
    type?: string;
    description?: string;
    published?: boolean;
    logo?: CollectionImage;
    _locale_language?: any;
    banners?: CollectionBanner;
    is_visible?: boolean;
    allow_sort?: boolean;
    _custom_json?: any;
    badge?: CollectionBadge;
    is_active?: boolean;
    _schedule?: CollectionSchedule;
    query?: CollectionQuery[];
    tags?: string[];
    seo?: SeoDetail;
    name?: string;
    modified_by?: UserInfo;
    priority?: number;
    sort_on?: string;
    visible_facets_keys?: string[];
};
type ProductBrand = {
    action?: Action;
    name?: string;
    uid?: number;
    logo?: Media1;
};
type Price1 = {
    currency_code?: string;
    max?: number;
    min?: number;
    currency_symbol?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
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
    promo_meta?: any;
    slug: string;
    highlights?: string[];
    uid?: number;
    item_type?: string;
    color?: string;
    type?: string;
    description?: string;
    medias?: Media1[];
    brand?: ProductBrand;
    short_description?: string;
    price?: ProductListingPrice;
    teaser_tag?: any;
    sellable?: boolean;
    similars?: string[];
    attributes?: any;
    rating?: number;
    discount?: string;
    tryouts?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    has_variant?: boolean;
    item_code?: string;
    name?: string;
    rating_count?: number;
    image_nature?: string;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    page?: Page;
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    query?: CollectionQuery[];
    type?: string;
    item?: ItemQueryForUserCollection[];
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type CatalogInsightBrand = {
    total_articles?: number;
    total_sizes?: number;
    available_articles?: number;
    name?: string;
    available_sizes?: number;
    article_freshness?: number;
};
type CatalogInsightItem = {
    sellable_count?: number;
    count?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    store_ids?: number[];
    company_id?: number;
    opt_level: string;
    enabled?: boolean;
    platform?: string;
    brand_ids?: number[];
};
type CompanyOptIn = {
    created_by?: any;
    store_ids: number[];
    modified_by?: any;
    created_on: number;
    company_id: number;
    opt_level: string;
    enabled: boolean;
    modified_on: number;
    platform: string;
    brand_ids: number[];
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    name?: string;
    business_type?: string;
    uid?: number;
    company_type?: string;
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
    company?: string;
    store?: number;
};
type StoreDetail = {
    store_type?: string;
    store_code?: string;
    additional_contacts?: any[];
    name?: string;
    documents?: any[];
    created_on?: string;
    uid?: number;
    company_id?: number;
    display_name?: string;
    manager?: any;
    address?: any;
    modified_on?: string;
    timing?: any;
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
    range?: AttributeSchemaRange;
    multi?: boolean;
    allowed_values?: string[];
    mandatory?: boolean;
    type: string;
    format?: string;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
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
    schema?: AttributeMaster;
    is_nested?: boolean;
    slug?: string;
    enabled_for_end_consumer?: boolean;
    name?: string;
    filters?: AttributeMasterFilter;
    meta?: AttributeMasterMeta;
    departments?: string[];
    description?: string;
    logo?: string;
    details?: AttributeMasterDetails;
    id?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    meta?: any;
    code?: string;
    message?: string;
    errors?: any;
    status?: number;
};
type UserSerializer = {
    contact?: string;
    uid?: string;
    username?: string;
    _id?: string;
    user_id?: string;
};
type GetDepartment = {
    modified_on?: string;
    is_active?: boolean;
    slug?: string;
    synonyms?: string[];
    created_by?: UserSerializer;
    name?: string;
    modified_by?: UserSerializer;
    created_on?: string;
    uid?: number;
    priority_order?: number;
    page_no?: number;
    item_type?: string;
    page_size?: number;
    logo?: string;
    search?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    meta?: any;
    code?: string;
    message?: string;
    errors?: any;
    status?: number;
};
type DepartmentCreateUpdate = {
    _cls?: string;
    is_active?: boolean;
    platforms?: any;
    slug?: string;
    synonyms?: string[];
    name: string;
    uid?: number;
    priority_order: number;
    _custom_json?: any;
    tags?: string[];
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
    super_user?: boolean;
    user_id: string;
    contact?: string;
    username: string;
};
type DepartmentModel = {
    _cls?: any;
    is_active?: boolean;
    slug?: any;
    synonyms?: any[];
    created_by?: UserDetail;
    name: any;
    modified_by?: UserDetail;
    created_on: string;
    uid?: number;
    priority_order: number;
    _id?: any;
    verified_on?: string;
    verified_by?: UserDetail;
    _custom_json?: any;
    logo: any;
    modified_on: string;
};
type ProductTemplate = {
    modified_on?: string;
    is_physical: boolean;
    is_active?: boolean;
    tag?: string;
    is_archived?: boolean;
    slug: string;
    attributes_schema?: any[];
    attributes?: string[];
    created_by?: any;
    name?: string;
    departments?: string[];
    modified_by?: any;
    created_on?: string;
    description?: string;
    categories?: string[];
    logo?: string;
    is_expirable?: boolean;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    slug?: any;
    highlights?: any;
    item_type?: any;
    brand_uid?: any;
    description?: any;
    custom_order?: any;
    country_of_origin?: any;
    trader_type?: any;
    variants?: any;
    currency?: any;
    short_description?: any;
    teaser_tag?: any;
    trader?: any;
    is_active?: any;
    hsn_code?: any;
    is_dependent?: any;
    no_of_boxes?: any;
    command?: any;
    product_publish?: any;
    tags?: any;
    sizes?: any;
    category_slug?: any;
    item_code?: any;
    media?: any;
    multi_size?: any;
    return_config?: any;
    product_group_tag?: any;
    size_guide?: any;
    name?: any;
};
type GlobalValidation = {
    required?: string[];
    type?: string;
    description?: string;
    definitions?: any;
    properties?: Properties;
    title?: string;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    is_physical: boolean;
    is_active?: boolean;
    tag?: string;
    is_archived?: boolean;
    slug: string;
    attributes_schema?: any[];
    attributes?: string[];
    name?: string;
    departments?: string[];
    description?: string;
    categories?: string[];
    logo?: string;
    is_expirable?: boolean;
    id?: string;
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
    country_of_origin?: string[];
    hsn_code?: string[];
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
    type?: string;
    brand?: string[];
    templates?: string[];
};
type ProductDownloadsItems = {
    completed_on?: string;
    created_by?: VerifiedBy;
    seller_id?: number;
    task_id?: string;
    trigger_on?: string;
    id?: string;
    data?: ProductDownloadItemsData;
    template_tags?: any;
    url?: string;
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
    landscape: string;
    portrait: string;
    logo: string;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Hierarchy = {
    l2: number;
    l1: number;
    department: number;
};
type Category = {
    modified_on?: string;
    media?: Media2;
    is_active: boolean;
    slug?: string;
    synonyms?: string[];
    created_by?: any;
    name: string;
    departments: number[];
    created_on?: string;
    uid?: number;
    marketplaces?: CategoryMapping;
    priority?: number;
    modified_by?: any;
    hierarchy?: Hierarchy[];
    level: number;
    id?: string;
    tryouts?: string[];
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    media?: Media2;
    is_active: boolean;
    slug?: string;
    synonyms?: string[];
    name: string;
    departments: number[];
    marketplaces?: CategoryMapping;
    priority?: number;
    hierarchy?: Hierarchy[];
    level: number;
    tryouts?: string[];
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
type Image = {
    secure_url?: string;
    url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
};
type Logo = {
    secure_url?: string;
    url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type ReturnConfigResponse = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Product = {
    slug?: string;
    highlights?: string[];
    tax_identifier?: any;
    uid?: number;
    created_on?: string;
    images?: Image[];
    item_type?: string;
    color?: string;
    company_id?: number;
    verified_by?: VerifiedBy;
    brand_uid?: number;
    description?: string;
    category_uid?: number;
    l3_mapping?: string[];
    variant_media?: any;
    custom_order?: any;
    country_of_origin?: string;
    created_by?: any;
    _custom_json?: any;
    variants?: any;
    brand?: Brand;
    currency?: string;
    moq?: any;
    short_description?: string;
    teaser_tag?: any;
    trader?: any[];
    is_active?: boolean;
    is_dependent?: boolean;
    hsn_code?: string;
    primary_color?: string;
    attributes?: any;
    no_of_boxes?: number;
    stage?: string;
    is_set?: boolean;
    net_quantity?: NetQuantityResponse;
    variant_group?: any;
    verified_on?: string;
    product_publish?: ProductPublished;
    tags?: string[];
    all_sizes?: any[];
    sizes?: any[];
    is_expirable?: boolean;
    modified_on?: string;
    category_slug?: string;
    item_code?: string;
    media?: Media1[];
    is_physical?: boolean;
    multi_size?: boolean;
    return_config?: ReturnConfigResponse;
    product_group_tag?: string[];
    pending?: string;
    size_guide?: string;
    name?: string;
    departments?: number[];
    modified_by?: any;
    is_image_less_product?: boolean;
    all_company_ids?: number[];
    all_identifiers?: string[];
    template_tag?: string;
    image_nature?: string;
    id?: string;
    category?: any;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    hsn_code?: string;
    reporting_hsn?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
    manufacturing_time?: number;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type Trader = {
    address?: string[];
    type?: string;
    name: any;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type ProductCreateUpdateSchemaV2 = {
    slug: string;
    highlights?: string[];
    tax_identifier: TaxIdentifier;
    company_id: number;
    uid?: number;
    item_type: string;
    brand_uid: number;
    description?: string;
    action?: string;
    variant_media?: any;
    change_request_id?: any;
    custom_order?: CustomOrder;
    country_of_origin: string;
    variants?: any;
    _custom_json?: any;
    currency: string;
    short_description?: string;
    teaser_tag?: TeaserTag;
    trader: Trader[];
    is_active?: boolean;
    is_dependent?: boolean;
    attributes?: any;
    no_of_boxes?: number;
    is_set?: boolean;
    requester?: string;
    variant_group?: any;
    bulk_job_id?: string;
    net_quantity?: NetQuantity;
    product_publish?: ProductPublish;
    tags?: string[];
    sizes: any[];
    category_slug: string;
    item_code: string;
    media?: Media1[];
    multi_size?: boolean;
    product_group_tag?: string[];
    return_config: ReturnConfig;
    size_guide?: string;
    name: string;
    departments: number[];
    is_image_less_product?: boolean;
    template_tag: string;
};
type ProductVariants = {
    media?: Media1[];
    item_code?: string;
    name?: string;
    uid?: number;
    brand_uid?: number;
    category_uid?: number;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    unit?: string;
    slug: string;
    created_on?: string;
    description?: string;
    logo?: string;
    variant?: boolean;
    created_by?: any;
    suggestion?: string;
    schema: AttributeMaster;
    synonyms?: any;
    enabled_for_end_consumer?: boolean;
    tags?: string[];
    modified_on?: string;
    is_nested?: boolean;
    raw_key?: string;
    name?: string;
    departments: string[];
    filters: AttributeMasterFilter;
    modified_by?: any;
    details: AttributeMasterDetails;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ProductCreateUpdate = {
    slug: string;
    highlights?: string[];
    tax_identifier: TaxIdentifier;
    company_id: number;
    uid?: number;
    item_type: string;
    brand_uid: number;
    description?: string;
    action?: string;
    variant_media?: any;
    change_request_id?: any;
    custom_order?: CustomOrder;
    country_of_origin: string;
    variants?: any;
    _custom_json?: any;
    currency: string;
    short_description?: string;
    teaser_tag?: TeaserTag;
    trader: Trader[];
    is_active?: boolean;
    is_dependent?: boolean;
    no_of_boxes?: number;
    is_set?: boolean;
    requester?: string;
    variant_group?: any;
    bulk_job_id?: string;
    net_quantity?: NetQuantity;
    product_publish?: ProductPublish;
    tags?: string[];
    category_slug: string;
    item_code: any;
    media?: Media1[];
    multi_size?: boolean;
    product_group_tag?: string[];
    return_config: ReturnConfig;
    size_guide?: string;
    name: any;
    departments: number[];
    is_image_less_product?: boolean;
    template_tag: string;
};
type ValidateIdentifier = {
    primary?: boolean;
    gtin_type: string;
    gtin_value: string;
};
type AllSizes = {
    item_weight_unit_of_measure: any;
    item_length: number;
    identifiers?: ValidateIdentifier[];
    size: any;
    item_dimensions_unit_of_measure: string;
    item_height: number;
    item_weight: number;
    item_width: number;
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
    cancelled_records?: string[];
    is_active?: boolean;
    stage?: string;
    created_by?: UserDetail1;
    file_path?: string;
    created_on?: string;
    company_id?: number;
    failed_records?: string[];
    cancelled?: number;
    template_tag?: string;
    modified_by?: UserDetail1;
    template?: ProductTemplate;
    succeed?: number;
    total?: number;
    modified_on?: string;
    failed?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    user_id?: string;
    email?: string;
    uid?: string;
    username?: string;
};
type BulkJob = {
    cancelled_records?: any[];
    is_active?: boolean;
    created_by?: UserInfo1;
    stage?: string;
    modified_by?: UserInfo1;
    created_on: string;
    company_id: number;
    cancelled?: number;
    failed_records?: any[];
    file_path?: string;
    template_tag?: string;
    custom_template_tag?: string;
    succeed?: number;
    total?: number;
    modified_on?: string;
    failed?: number;
    tracking_url?: string;
};
type BulkResponse = {
    is_active?: boolean;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
    created_on: string;
    batch_id: string;
    modified_on?: string;
};
type BulkProductRequest = {
    template_tag: string;
    data: any[];
    company_id: number;
    batch_id: string;
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
    cancelled_records?: string[];
    is_active?: boolean;
    created_by?: UserCommon;
    file_path?: string;
    modified_by?: UserCommon;
    created_on?: string;
    failed_records?: string[];
    stage?: string;
    total?: number;
    company_id?: number;
    cancelled?: number;
    succeed?: number;
    retry?: number;
    modified_on?: string;
    failed?: number;
    id?: string;
    tracking_url?: string;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductBulkAssets = {
    url: string;
    company_id?: number;
    user: any;
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    company_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    item_id?: number;
    seller_identifier?: string;
    price_transfer?: number;
    identifiers?: any;
    uid?: string;
    price_effective?: number;
    quantity?: number;
    size?: string;
    sellable_quantity?: number;
    store?: any;
    inventory_updated_on?: string;
    currency?: string;
    price?: number;
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
    store_code: string;
    item_width?: number;
    item_weight_unit_of_measure?: string;
    price_transfer?: number;
    item_length?: number;
    is_set?: boolean;
    identifiers: GTIN[];
    set?: InventorySet;
    price_effective: number;
    size: any;
    item_height?: number;
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    quantity: number;
    currency: string;
    item_weight?: number;
    price?: number;
};
type ItemQuery = {
    item_code?: string;
    brand_uid?: number;
    uid?: number;
};
type InventoryRequest = {
    sizes: InvSize[];
    company_id: number;
    item: ItemQuery;
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
type CompanyMeta = {
    id: number;
};
type PriceMeta = {
    transfer: number;
    updated_at?: string;
    tp_notes?: any;
    marked: number;
    effective: number;
    currency: string;
};
type Trader1 = {
    address: string[];
    type: string;
    name: string;
};
type WeightResponse = {
    shipping: number;
    is_default: boolean;
    unit: string;
};
type ReturnConfig1 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type DimensionResponse = {
    unit: string;
    width: number;
    height: number;
    is_default: boolean;
    length: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    sellable?: QuantityBase;
};
type InventorySellerResponse = {
    item_id: number;
    raw_meta?: any;
    tax_identifier?: any;
    set?: InventorySet;
    uid: string;
    size: string;
    meta?: any;
    manufacturer: ManufacturerResponse;
    identifier: any;
    added_on_store?: string;
    country_of_origin: string;
    total_quantity: number;
    created_by?: UserSerializer;
    fynd_meta?: any;
    brand: BrandMeta;
    _custom_json?: any;
    track_inventory?: boolean;
    trace_id?: string;
    company: CompanyMeta;
    price: PriceMeta;
    trader?: Trader1[];
    is_active?: boolean;
    seller_identifier: string;
    fynd_article_code: string;
    stage?: string;
    is_set?: boolean;
    fragile: boolean;
    expiration_date?: string;
    tags?: string[];
    store: StoreMeta;
    weight: WeightResponse;
    return_config?: ReturnConfig1;
    modified_by?: UserSerializer;
    dimension: DimensionResponse;
    fynd_item_code: string;
    quantities?: Quantities;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    cancelled_records?: string[];
    is_active?: boolean;
    created_by?: any;
    file_path?: string;
    cancelled?: number;
    created_on?: string;
    company_id?: number;
    failed_records?: string[];
    modified_by?: any;
    stage?: string;
    succeed?: number;
    total?: number;
    modified_on?: string;
    failed?: number;
    id?: string;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    total_quantity?: number;
    store_code: string;
    seller_identifier: string;
    item_weight_unit_of_measure?: string;
    price_effective?: number;
    expiration_date?: string;
    item_dimensions_unit_of_measure?: string;
    quantity?: number;
    tags?: string[];
    price_marked?: number;
    trace_id?: string;
    currency?: string;
    price?: number;
};
type InventoryBulkRequest = {
    user?: any;
    sizes: InventoryJobPayload[];
    company_id: number;
    batch_id: string;
};
type InventoryExportJob = {
    completed_on?: string;
    request_params?: any;
    seller_id: number;
    task_id: string;
    trigger_on?: string;
    url?: string;
    status?: string;
};
type InventoryExportRequest = {
    type?: string;
    brand?: number[];
    store?: number[];
};
type InventoryExportResponse = {
    request_params?: any;
    seller_id: number;
    task_id: string;
    trigger_on?: string;
    status?: string;
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
type CompanyMeta1 = {
    id?: number;
};
type PriceArticle = {
    transfer?: number;
    tp_notes?: any;
    marked?: number;
    effective?: number;
    currency?: string;
};
type Trader2 = {
    address?: string[];
    type?: string;
    name?: string;
};
type ArticleStoreResponse = {
    name?: string;
    store_code?: string;
    store_type?: string;
    uid?: number;
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
type DimensionResponse1 = {
    height?: number;
    unit?: string;
    width?: number;
    length?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    order_committed?: Quantity;
    not_available?: Quantity;
    damaged?: Quantity;
    sellable?: Quantity;
};
type GetInventories = {
    item_id?: number;
    platforms?: any;
    tax_identifier?: any;
    uid?: string;
    size?: string;
    manufacturer?: ManufacturerResponse1;
    date_meta?: DateMeta;
    identifier?: any;
    country_of_origin?: string;
    total_quantity?: number;
    created_by?: UserSerializer;
    brand?: BrandMeta1;
    track_inventory?: boolean;
    trace_id?: string;
    company?: CompanyMeta1;
    price?: PriceArticle;
    trader?: Trader2[];
    seller_identifier?: string;
    stage?: string;
    is_set?: boolean;
    expiration_date?: string;
    tags?: string[];
    store?: ArticleStoreResponse;
    weight?: WeightResponse1;
    return_config?: ReturnConfig2;
    modified_by?: UserSerializer;
    inventory_updated_on?: string;
    dimension?: DimensionResponse1;
    quantities?: QuantitiesArticle;
    id?: string;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
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
    expiration_date?: string;
    tags?: string[];
    price_marked?: number;
    trace_id?: string;
    store_id: number;
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    meta?: any;
    company_id: number;
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
type HsnCodesObject = {
    modified_on?: string;
    threshold2?: number;
    hsn_code?: string;
    tax_on_mrp?: boolean;
    tax1?: number;
    threshold1?: number;
    company_id?: number;
    tax2?: number;
    id?: string;
    tax_on_esp?: boolean;
    hs2_code?: string;
};
type PageResponse = {
    has_next?: boolean;
    size?: number;
    current?: string;
    has_previous?: boolean;
    item_total?: number;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    threshold2?: number;
    is_active?: boolean;
    hsn_code: string;
    tax_on_mrp: boolean;
    tax1: number;
    threshold1: number;
    company_id: number;
    uid?: number;
    tax2?: number;
    tax_on_esp?: boolean;
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
    cess?: number;
    rate: number;
    effective_date: string;
    threshold: number;
};
type HSNDataInsertV2 = {
    hsn_code: string;
    created_by?: any;
    modified_by?: any;
    taxes: TaxSlab[];
    created_on?: string;
    reporting_hsn: string;
    type: string;
    country_code: string;
    description: string;
    modified_on?: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    banners?: ImageUrls;
    slug?: string;
    name?: string;
    departments?: string[];
    uid?: number;
    discount?: string;
    logo?: Media;
    action?: Action;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    slug?: string;
    name?: string;
    uid?: number;
    priority_order?: number;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    childs?: any[];
    banners?: ImageUrls;
    slug?: string;
    name?: string;
    uid?: number;
    _custom_json?: any;
    action?: Action;
};
type SecondLevelChild = {
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    slug?: string;
    name?: string;
    uid?: number;
    _custom_json?: any;
    action?: Action;
};
type Child = {
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    slug?: string;
    name?: string;
    uid?: number;
    _custom_json?: any;
    action?: Action;
};
type CategoryItems = {
    childs?: Child[];
    banners?: ImageUrls;
    slug?: string;
    name?: string;
    uid?: number;
    action?: Action;
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
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    operators?: any;
    page: Page;
};
type ProductDetail = {
    promo_meta?: any;
    slug: string;
    highlights?: string[];
    uid?: number;
    item_type?: string;
    color?: string;
    type?: string;
    description?: string;
    medias?: Media1[];
    brand?: ProductBrand;
    short_description?: string;
    teaser_tag?: any;
    similars?: string[];
    attributes?: any;
    rating?: number;
    tryouts?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    has_variant?: boolean;
    item_code?: string;
    name?: string;
    rating_count?: number;
    image_nature?: string;
};
type InventoryPage = {
    has_next?: boolean;
    next_id?: string;
    type: string;
    has_previous?: boolean;
    item_total: number;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type UserSerializer1 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    name?: string;
    mobile_no: SellerPhoneNumber;
    email?: string;
};
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetAddressSerializer = {
    longitude?: number;
    latitude?: number;
    country?: string;
    address2?: string;
    city?: string;
    address1?: string;
    state?: string;
    landmark?: string;
    country_code?: string;
    pincode?: number;
    address_type?: string;
};
type GetCompanySerializer = {
    reject_reason?: string;
    created_by?: UserSerializer2;
    name?: string;
    modified_by?: UserSerializer2;
    created_on?: string;
    uid?: number;
    stage?: string;
    company_type?: string;
    verified_on?: string;
    verified_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    business_type?: string;
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
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
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
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetLocationSerializer = {
    created_on?: string;
    uid?: number;
    code: string;
    verified_by?: UserSerializer1;
    manager?: LocationManagerSerializer;
    warnings?: any;
    phone_number?: string;
    store_type?: string;
    created_by?: UserSerializer1;
    documents?: Document[];
    _custom_json?: any;
    company?: GetCompanySerializer;
    timing?: LocationDayWiseSerializer[];
    integration_type?: LocationIntegrationType;
    stage?: string;
    verified_on?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    modified_on?: string;
    product_return_config?: ProductReturnConfigSerializer;
    name: string;
    modified_by?: UserSerializer1;
    notification_emails?: string[];
    display_name: string;
    address: GetAddressSerializer;
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
    is_active?: boolean;
    app_id: string;
    name?: string;
    uid: number;
    _custom_json?: any;
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
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type GetCompanyProfileSerializerResponse = {
    warnings?: any;
    addresses?: GetAddressSerializer[];
    documents?: Document[];
    franchise_enabled?: boolean;
    name?: string;
    verified_on?: string;
    _custom_json?: any;
    created_by?: UserSerializer;
    modified_on?: string;
    business_type: string;
    stage?: string;
    modified_by?: UserSerializer;
    business_info?: string;
    mode?: string;
    uid: number;
    contact_details?: ContactDetails;
    company_type: string;
    created_on?: string;
    business_details?: BusinessDetails;
    taxes?: CompanyTaxesSerializer[];
    notification_emails?: string[];
    verified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
};
type CreateUpdateAddressSerializer = {
    city: string;
    latitude: number;
    country: string;
    address1: string;
    address2?: string;
    longitude: number;
    state: string;
    pincode: number;
    landmark?: string;
    country_code?: string;
    address_type: string;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type UpdateCompany = {
    name?: string;
    warnings?: any;
    contact_details?: ContactDetails;
    addresses?: CreateUpdateAddressSerializer[];
    company_type?: string;
    business_type?: string;
    reject_reason?: string;
    business_info?: string;
    business_details?: BusinessDetails;
    taxes?: CompanyTaxesSerializer1[];
    _custom_json?: any;
    notification_emails?: string[];
    documents?: Document[];
    franchise_enabled?: boolean;
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
    store_documents?: DocumentsObj;
    stage?: string;
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    uid?: number;
    brand?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    warnings?: any;
    banner?: BrandBannerSerializer;
    reject_reason?: string;
    name: string;
    verified_on?: string;
    synonyms?: string[];
    description?: string;
    _custom_json?: any;
    created_by?: UserSerializer;
    modified_on?: string;
    stage?: string;
    _locale_language?: any;
    modified_by?: UserSerializer;
    mode?: string;
    uid?: number;
    slug_key?: string;
    logo?: string;
    created_on?: string;
    verified_by?: UserSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    name: string;
    synonyms?: string[];
    logo: string;
    banner?: BrandBannerSerializer;
    brand_tier?: string;
    company_id?: number;
    _locale_language?: any;
    description?: string;
    _custom_json?: any;
    uid?: number;
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
    name?: string;
    business_country_info?: BusinessCountryInfo;
    uid?: number;
    notification_emails?: string[];
    verified_on?: string;
    addresses?: GetAddressSerializer[];
    company_type: string;
    business_type: string;
    market_channels?: string[];
    reject_reason?: string;
    stage?: string;
    created_on?: string;
    modified_by?: UserSerializer;
    _custom_json?: any;
    created_by?: UserSerializer;
    details?: CompanyDetails;
    verified_by?: UserSerializer;
    modified_on?: string;
};
type CompanyBrandSerializer = {
    warnings?: any;
    uid?: number;
    verified_on?: string;
    stage?: string;
    reject_reason?: string;
    created_on?: string;
    modified_by?: UserSerializer;
    company?: CompanySerializer;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    modified_on?: string;
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
    end_date: string;
    start_date: string;
};
type HolidaySchemaSerializer = {
    title: string;
    date: HolidayDateSerializer;
    holiday_type: string;
};
type AddressSerializer = {
    city?: string;
    latitude: number;
    address1?: string;
    address2?: string;
    country?: string;
    longitude: number;
    state?: string;
    pincode?: number;
    landmark?: string;
    country_code?: string;
    address_type?: string;
};
type LocationSerializer = {
    name: string;
    manager?: LocationManagerSerializer;
    warnings?: any;
    display_name: string;
    timing?: LocationDayWiseSerializer[];
    product_return_config?: ProductReturnConfigSerializer;
    store_type?: string;
    stage?: string;
    contact_numbers?: SellerPhoneNumber[];
    gst_credentials?: InvoiceDetailsSerializer;
    holiday?: HolidaySchemaSerializer[];
    company: number;
    address: AddressSerializer;
    _custom_json?: any;
    notification_emails?: string[];
    documents?: Document[];
    uid?: number;
    code: string;
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
    group_id?: string;
    article_assignment?: _ArticleAssignment;
    query?: _ArticleQuery;
    meta?: any;
};
type AssignStoreRequestValidator = {
    channel_identifier?: string;
    channel_type?: string;
    articles?: _AssignStoreArticle[];
    company_id?: number;
    pincode?: string;
    store_ids?: number[];
    app_id?: string;
};
type AssignStoreResponseSerializer = {
    store_pincode?: string;
    price_effective?: number;
    uid?: string;
    quantity?: number;
    company_id?: number;
    s_city?: string;
    _id?: string;
    price_marked?: number;
    store_id?: number;
    article_assignment?: _ArticleAssignment;
    item_id?: number;
    meta?: any;
    status?: boolean;
    index?: number;
    size?: string;
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
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    types?: string[];
    codes?: string[];
    networks?: string[];
    uses?: PaymentAllowValue;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type UsesRemaining = {
    user?: number;
    app?: number;
    total?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type Restrictions = {
    payments?: any;
    platforms?: string[];
    bulk_bundle?: BulkBundleRestriction;
    post_order?: PostOrder;
    uses?: UsesRestriction;
    ordering_stores?: number[];
    user_type?: string;
    coupon_allowed?: boolean;
    user_groups?: number[];
    price_range?: PriceRange;
};
type Validity = {
    priority?: number;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type State = {
    is_public?: boolean;
    is_archived?: boolean;
    is_display?: boolean;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Validation = {
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: string[];
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Rule = {
    value?: number;
    discount_qty?: number;
    max?: number;
    min?: number;
    key?: number;
};
type RuleDefinition = {
    is_exact?: boolean;
    calculate_on: string;
    type: string;
    scope?: string[];
    auto_apply?: boolean;
    value_type: string;
    applicable_on: string;
    currency_code?: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    remove?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    subtitle?: string;
    title?: string;
    description?: string;
};
type CouponSchedule = {
    duration?: number;
    start?: string;
    end?: string;
    cron?: string;
    next_schedule?: any[];
};
type CouponAdd = {
    restrictions?: Restrictions;
    validity: Validity;
    ownership: Ownership;
    state?: State;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
    action?: CouponAction;
    validation?: Validation;
    tags?: string[];
    author?: CouponAuthor;
    type_slug: string;
    rule: Rule[];
    code: string;
    rule_definition: RuleDefinition;
    display_meta: DisplayMeta;
    _schedule?: CouponSchedule;
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
    restrictions?: Restrictions;
    validity: Validity;
    ownership: Ownership;
    state?: State;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
    action?: CouponAction;
    validation?: Validation;
    tags?: string[];
    author?: CouponAuthor;
    type_slug: string;
    rule: Rule[];
    code: string;
    rule_definition: RuleDefinition;
    display_meta: DisplayMeta;
    _schedule?: CouponSchedule;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type DisplayMeta1 = {
    name?: string;
    offer_text?: string;
    offer_label?: string;
    description?: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    uses?: PaymentAllowValue1;
    codes?: string[];
    type: string;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type Restrictions1 = {
    user_id?: string[];
    anonymous_users?: boolean;
    payments?: PromotionPaymentModes[];
    platforms?: string[];
    post_order?: PostOrder1;
    uses: UsesRestriction1;
    user_registered?: UserRegistered;
    order_quantity?: number;
    user_groups?: number[];
};
type CompareObject = {
    equals?: number;
    greater_than_equals?: number;
    less_than?: number;
    less_than_equals?: number;
    greater_than?: number;
};
type ItemCriteria = {
    item_exclude_brand?: number[];
    cart_quantity?: CompareObject;
    item_exclude_category?: number[];
    item_sku?: string[];
    available_zones?: string[];
    item_size?: string[];
    item_exclude_store?: number[];
    product_tags?: string[];
    item_exclude_company?: number[];
    item_store?: number[];
    item_id?: number[];
    item_exclude_sku?: string[];
    cart_unique_item_quantity?: CompareObject;
    item_category?: number[];
    cart_total?: CompareObject;
    cart_unique_item_amount?: CompareObject;
    all_items?: boolean;
    buy_rules?: string[];
    item_company?: number[];
    item_exclude_id?: number[];
    item_brand?: number[];
};
type DiscountOffer = {
    discount_amount?: number;
    apportion_discount?: boolean;
    discount_percentage?: number;
    discount_price?: number;
    max_discount_amount?: number;
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
    code?: string;
    max_offer_quantity?: number;
    partial_can_ret?: boolean;
};
type DiscountRule = {
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
    discount_type: string;
    buy_condition: string;
};
type PromotionSchedule = {
    duration?: number;
    start: string;
    end?: string;
    cron?: string;
    published: boolean;
    next_schedule?: any[];
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionListItem = {
    ownership: Ownership1;
    promo_group: string;
    currency?: string;
    mode: string;
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    post_order_action?: PromotionAction;
    application_id: string;
    code?: string;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    promotion_type: string;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    visiblility?: Visibility;
    buy_rules: any;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    ownership: Ownership1;
    promo_group: string;
    currency?: string;
    mode: string;
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    post_order_action?: PromotionAction;
    application_id: string;
    code?: string;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    promotion_type: string;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    visiblility?: Visibility;
    buy_rules: any;
};
type PromotionUpdate = {
    ownership: Ownership1;
    promo_group: string;
    currency?: string;
    mode: string;
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    post_order_action?: PromotionAction;
    application_id: string;
    code?: string;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    promotion_type: string;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    visiblility?: Visibility;
    buy_rules: any;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    is_hidden?: boolean;
    type?: string;
    modified_on?: string;
    entity_type?: string;
    entity_slug?: string;
    subtitle?: string;
    example?: string;
    title?: string;
    created_on?: string;
    description?: string;
};
type CartItem = {
    quantity?: number;
    product_id: string;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductPrice = {
    effective?: number;
    add_on?: number;
    currency_symbol?: string;
    selling?: number;
    marked?: number;
    currency_code?: string;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductAvailability = {
    other_store_quantity?: number;
    out_of_stock?: boolean;
    is_valid?: boolean;
    deliverable?: boolean;
    sizes?: string[];
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    currency_code?: string;
    currency_symbol?: string;
    marked?: number;
    effective?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    type?: string;
    extra_meta?: any;
    uid?: string;
    parent_item_identifiers?: any;
    quantity?: number;
    seller?: BaseInfo;
    store?: BaseInfo;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
    size?: string;
    _custom_json?: any;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    offer?: any;
    raw_offer?: any;
    item_criteria?: any;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type FreeGiftItem = {
    item_name?: string;
    item_slug?: string;
    item_id?: number;
    item_images_url?: string[];
    item_brand_name?: string;
    item_price_details?: any;
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
    parent_item_identifier?: string;
    article_id?: string;
};
type AppliedPromotion = {
    discount_rules?: DiscountRulesApp[];
    offer_text?: string;
    promo_id?: string;
    ownership?: Ownership2;
    applied_free_articles?: AppliedFreeArticles[];
    buy_rules?: BuyRules[];
    promotion_type?: string;
    promotion_name?: string;
    amount?: number;
    promotion_group?: string;
    article_quantity?: number;
    mrp_promotion?: boolean;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    query?: ActionQuery;
    url?: string;
    type?: string;
};
type ProductImage = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type CartProduct = {
    type?: string;
    uid?: number;
    name?: string;
    action?: ProductAction;
    images?: ProductImage[];
    net_quantity?: NetQuantity;
    brand?: BaseInfo;
    slug?: string;
    categories?: CategoryInfo[];
};
type CartProductInfo = {
    price_per_unit?: ProductPriceInfo;
    bulk_offer?: any;
    is_set?: boolean;
    promo_meta?: PromoMeta;
    identifiers: CartProductIdentifer;
    parent_item_identifiers?: any;
    quantity?: number;
    availability?: ProductAvailability;
    price?: ProductPriceInfo;
    article?: ProductArticle;
    key?: string;
    coupon_message?: string;
    promotions_applied?: AppliedPromotion[];
    product?: CartProduct;
    discount?: string;
    message?: string;
};
type CouponBreakup = {
    value?: number;
    minimum_cart_value?: number;
    type?: string;
    is_applied?: boolean;
    max_discount_value?: number;
    uid?: string;
    coupon_type?: string;
    sub_title?: string;
    code?: string;
    title?: string;
    message?: string;
    coupon_value?: number;
    description?: string;
};
type DisplayBreakup = {
    value?: number;
    key?: string;
    currency_symbol?: string;
    display?: string;
    currency_code?: string;
    message?: string[];
};
type RawBreakup = {
    mrp_total?: number;
    delivery_charge?: number;
    cod_charge?: number;
    coupon?: number;
    vog?: number;
    total?: number;
    you_saved?: number;
    convenience_fee?: number;
    fynd_cash?: number;
    gst_charges?: number;
    discount?: number;
    subtotal?: number;
};
type LoyaltyPoints = {
    applicable?: number;
    total?: number;
    description?: string;
    is_applied?: boolean;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    raw?: RawBreakup;
    loyalty_points?: LoyaltyPoints;
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
    country_phone_code?: string;
    area?: string;
    meta?: any;
    address_type?: string;
    state?: string;
    name?: string;
    phone?: number;
    address?: string;
    city?: string;
    country?: string;
    country_iso_code?: string;
    area_code: string;
    area_code_slug?: string;
    country_code?: string;
    landmark?: string;
    email?: string;
    pincode?: number;
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
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
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
    loyalty_discount?: number;
    cashback_applied: number;
    meta?: CartItemMeta;
    extra_meta?: any;
    size: string;
    quantity?: number;
    product_id: number;
    files?: OpenApiFiles[];
    cod_charges: number;
    amount_paid: number;
    employee_discount?: number;
    coupon_effective_discount: number;
    delivery_charges: number;
    price_marked: number;
    payment_methods: MultiTenderPaymentMethod[];
    discount: number;
    price_effective: number;
};
type OpenApiPlatformCheckoutReq = {
    loyalty_discount?: number;
    gstin?: string;
    employee_discount?: any;
    payment_mode?: string;
    delivery_charges: number;
    cart_items: OpenApiOrderItem[];
    currency_code?: string;
    coupon_value: number;
    affiliate_order_id?: string;
    comment?: string;
    cashback_applied: number;
    order_id?: string;
    cart_value: number;
    coupon?: string;
    files?: OpenApiFiles[];
    cod_charges: number;
    payment_methods: MultiTenderPaymentMethod[];
    billing_address: ShippingAddress;
    shipping_address?: ShippingAddress;
    coupon_code: string;
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    message?: string;
    success?: boolean;
    order_id: string;
};
type AbandonedCart = {
    meta?: any;
    uid: number;
    payments?: any;
    payment_mode?: string;
    delivery_charges?: any;
    fc_index_map?: number[];
    _id: string;
    is_active?: boolean;
    last_modified: string;
    comment?: string;
    user_id: string;
    expire_at: string;
    order_id?: string;
    coupon?: any;
    app_id?: string;
    promotion?: any;
    cashback: any;
    pick_up_customer_details?: any;
    is_archive?: boolean;
    gstin?: string;
    articles: any[];
    discount?: number;
    merge_qty?: boolean;
    shipments?: any[];
    fynd_credits?: any;
    is_default: boolean;
    cart_value?: number;
    cod_charges?: any;
    payment_methods?: any[];
    bulk_coupon_discount?: number;
    buy_now?: boolean;
    checkout_mode?: string;
    created_on: string;
};
type AbandonedCartResponse = {
    result?: any;
    success?: boolean;
    items?: AbandonedCart[];
    page?: Page;
    message?: string;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    comment?: string;
    currency?: CartCurrency;
    breakup_values?: CartBreakup;
    restrict_checkout?: boolean;
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    gstin?: string;
    id?: string;
    buy_now?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
    checkout_mode?: string;
    message?: string;
    coupon_text?: string;
    delivery_charge_info?: string;
};
type AddProductCart = {
    extra_meta?: any;
    parent_item_identifiers?: any;
    item_size?: string;
    item_id?: number;
    quantity?: number;
    store_id?: number;
    product_group_tags?: string[];
    display?: string;
    article_assignment?: any;
    article_id?: string;
    seller_id?: number;
    _custom_json?: any;
    pos?: boolean;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    message?: string;
    cart?: CartDetailResponse;
    success?: boolean;
    partial?: boolean;
};
type UpdateProductCart = {
    extra_meta?: any;
    item_index?: number;
    item_size?: string;
    quantity?: number;
    item_id?: number;
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
    article_id?: string;
    _custom_json?: any;
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
    meta?: any;
    user?: any;
    source?: any;
    token?: string;
    created_on?: string;
};
type SharedCart = {
    uid?: string;
    shared_cart_details?: SharedCartDetails;
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    cart_id?: number;
    currency?: CartCurrency;
    last_modified?: string;
    comment?: string;
    restrict_checkout?: boolean;
    message?: string;
    delivery_charge_info?: string;
    gstin?: string;
    id?: string;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    items?: CartProductInfo[];
    checkout_mode?: string;
    coupon_text?: string;
};
type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
type CartList = {
    user_id?: string;
    cart_value?: string;
    item_counts?: string;
    cart_id?: string;
    created_on?: string;
};
type UserCartMappingResponse = {
    comment?: string;
    user?: UserInfo;
    currency?: CartCurrency;
    breakup_values?: CartBreakup;
    restrict_checkout?: boolean;
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    gstin?: string;
    id?: string;
    buy_now?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
    checkout_mode?: string;
    message?: string;
    coupon_text?: string;
    delivery_charge_info?: string;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type PageCoupon = {
    current?: number;
    total?: number;
    has_next?: boolean;
    has_previous?: boolean;
    total_item_count?: number;
};
type Coupon = {
    minimum_cart_value?: number;
    coupon_type?: string;
    max_discount_value?: number;
    message?: string;
    is_applied?: boolean;
    sub_title?: string;
    is_applicable?: boolean;
    title?: string;
    expires_on?: string;
    coupon_value?: number;
    coupon_code?: string;
    description?: string;
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
    area?: string;
    meta?: any;
    address_type?: string;
    phone?: string;
    google_map_point?: any;
    cart_id?: string;
    area_code?: string;
    country_code?: string;
    is_active?: boolean;
    email?: string;
    user_id?: string;
    name?: string;
    landmark?: string;
    is_default_address?: boolean;
    tags?: string[];
    id?: string;
    geo_location?: GeoLocation;
    state?: string;
    address?: string;
    created_by_user_id?: string;
    country?: string;
    city?: string;
    area_code_slug?: string;
    checkout_mode?: string;
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
    is_updated?: boolean;
    id?: string;
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
    order_type?: string;
    dp_options?: any;
    box_type?: string;
    fulfillment_type?: string;
    dp_id?: string;
    fulfillment_id?: number;
    shipment_type?: string;
    items?: CartProductInfo[];
    promise?: ShipmentPromise;
    shipments?: number;
};
type CartShipmentsResponse = {
    uid?: string;
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    gstin?: string;
    id?: string;
    cart_id?: number;
    error?: boolean;
    delivery_promise?: ShipmentPromise;
    currency?: CartCurrency;
    last_modified?: string;
    shipments?: ShipmentResponse[];
    comment?: string;
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    buy_now?: boolean;
    restrict_checkout?: boolean;
    message?: string;
    coupon_text?: string;
    delivery_charge_info?: string;
};
type UpdateCartShipmentItem = {
    article_uid: string;
    quantity?: number;
    shipment_type: string;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type CartMetaRequest = {
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
type StaffCheckout = {
    user: string;
    last_name: string;
    first_name: string;
    _id: string;
    employee_code?: string;
};
type PlatformCartCheckoutDetailRequest = {
    address_id?: string;
    user_id: string;
    payment_params?: any;
    meta?: any;
    extra_meta?: any;
    staff?: StaffCheckout;
    payment_auto_confirm?: boolean;
    billing_address_id?: string;
    id: string;
    merchant_code?: string;
    payment_mode: string;
    billing_address?: any;
    payment_identifier?: string;
    aggregator?: string;
    delivery_address?: any;
    callback_url?: string;
    ordering_store?: number;
};
type CheckCart = {
    uid?: string;
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    cart_id?: number;
    delivery_charges?: number;
    currency?: CartCurrency;
    last_modified?: string;
    cod_available?: boolean;
    comment?: string;
    success?: boolean;
    order_id?: string;
    store_code?: string;
    user_type?: string;
    error_message?: string;
    restrict_checkout?: boolean;
    message?: string;
    delivery_charge_info?: string;
    gstin?: string;
    id?: string;
    store_emps?: any[];
    delivery_promise?: ShipmentPromise;
    delivery_charge_order_value?: number;
    breakup_values?: CartBreakup;
    cod_charges?: number;
    buy_now?: boolean;
    items?: CartProductInfo[];
    cod_message?: string;
    checkout_mode?: string;
    coupon_text?: string;
};
type CartCheckoutResponse = {
    success?: boolean;
    order_id?: string;
    cart?: CheckCart;
    app_intercept_url?: string;
    callback_url?: string;
    message?: string;
    data?: any;
    payment_confirm_url?: string;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    area?: string;
    address_type?: string;
    state?: string;
    uid?: number;
    name?: string;
    phone?: string;
    address?: string;
    country?: string;
    city?: string;
    store_code?: string;
    id?: number;
    area_code?: string;
    area_code_slug?: string;
    landmark?: string;
    email?: string;
    pincode?: number;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    address_id?: string;
    id?: string;
    aggregator_name?: string;
    payment_mode?: string;
    payment_identifier?: string;
    merchant_code?: string;
};
type CouponValidity = {
    display_message_en?: string;
    valid?: boolean;
    code?: string;
    discount?: number;
    title?: string;
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
