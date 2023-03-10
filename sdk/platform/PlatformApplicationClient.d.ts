export = PlatformApplicationClient;
declare class PlatformApplicationClient {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    feedback: Feedback;
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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, UserDataInfo, PaymentModeInfo, ShipmentItemFulFillingStore, ShipmentStatus, PlatformItem, GSTDetailsData, Prices, BagUnit, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, OrderDetailsData, TrackingList, UserDetailsData, EInvoice, EinvoiceInfo, ShipmentPayments, Dimensions, Meta, FulfillingStore, ShipmentStatusData, BagStateMapper, BagStatusHistory, ShipmentTimeStamp, DebugInfo, Formatted, LockData, BuyerDetails, ShipmentMeta, PDFLinks, AffiliateMeta, AffiliateDetails, PlatformDeliveryAddress, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBagArticle, OrderBrandName, CurrentStatus, BagGST, Identifier, FinancialBreakup, BagConfigs, OrderBags, OrderingStoreDetails, DPDetailsData, PlatformShipment, ShipmentInfoResponse, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, AffiliateBagDetails, StoreAddress, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, Document, StoreDocuments, StoreMeta, Store, ArticleDetails, Weight, ReturnConfig, Article, Attributes, Item, Brand, BagGSTDetails, B2BPODetails, BagMeta, BagReturnableCancelableStatus, Dates, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, OrderPriority, UserData, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, OrderInfo, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, LineItem, ProcessingDates, Shipment, BillingInfo, PaymentMethod, PaymentInfo, ShippingInfo, TaxInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Price, Size, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, MetaFields, ApplicationItemMOQ, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, CollectionQuery, Media1, BannerImage, ImageUrls, GetCollectionDetailNest, GetCollectionListingResponse, CollectionSchedule, UserInfo, SeoDetail, CollectionImage, CollectionBadge, CollectionBanner, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, CategoryMappingValues, CategoryMapping, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Logo, ProductPublish, Trader, ReturnConfigResponse, NetQuantityResponse, Image, ProductSchemaV2, ProductListingResponseV2, TeaserTag, ProductPublish1, CustomOrder, NetQuantity, TaxIdentifier, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, DimensionResponse, BrandMeta, QuantityBase, Quantities, Trader1, ReturnConfig1, WeightResponse, CompanyMeta, ManufacturerResponse, PriceMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, DimensionResponse1, BrandMeta1, ArticleStoreResponse, Quantity, QuantitiesArticle, Trader2, ReturnConfig2, WeightResponse1, CompanyMeta1, ManufacturerResponse1, PriceArticle, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, PageResponse, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, InvoiceCredSerializer, InvoiceDetailsSerializer, ProductReturnConfigSerializer, LocationTimingSerializer, LocationDayWiseSerializer, UserSerializer1, SellerPhoneNumber, LocationManagerSerializer, GetAddressSerializer, UserSerializer2, GetCompanySerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, CompanyTaxesSerializer, ContactDetails, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponAction, CouponDateMeta, DisplayMetaDict, DisplayMeta, CouponSchedule, Ownership, CouponAuthor, Validity, Rule, Validation, PaymentAllowValue, PaymentModes, BulkBundleRestriction, UsesRemaining, UsesRestriction, PostOrder, PriceRange, Restrictions, RuleDefinition, State, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, DisplayMeta1, PromotionAction, CompareObject, ItemCriteria, PromotionAuthor, DiscountOffer, DiscountRule, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, PostOrder1, Restrictions1, PromotionDateMeta, PromotionSchedule, Visibility, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, LoyaltyPoints, RawBreakup, DisplayBreakup, CouponBreakup, CartBreakup, CartProductIdentifer, ActionQuery, ProductAction, CategoryInfo, ProductImage, BaseInfo, CartProduct, ProductPrice, ProductPriceInfo, PromoMeta, BasePrice, ArticlePriceInfo, ProductArticle, FreeGiftItem, AppliedFreeArticles, Ownership2, DiscountRulesApp, AppliedPromotion, ProductAvailability, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, Files, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
}
import Lead = require("./Lead/LeadPlatformApplicationClient");
import Feedback = require("./Feedback/FeedbackPlatformApplicationClient");
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
    name?: string;
    value?: string;
    text: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    value: string;
    text: string;
    type: string;
};
type UserDataInfo = {
    email?: string;
    uid?: number;
    avis_user_id?: string;
    mobile?: string;
    is_anonymous_user?: boolean;
    first_name?: string;
    name?: string;
    last_name?: string;
    gender?: string;
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
    status: string;
    title: string;
    ops_status: string;
    hex_code: string;
};
type PlatformItem = {
    image?: string[];
    id?: number;
    images?: string[];
    l1_category?: string[];
    color?: string;
    size?: string;
    l3_category_name?: string;
    can_cancel?: boolean;
    can_return?: boolean;
    l3_category?: number;
    name?: string;
    department_id?: number;
    code?: string;
};
type GSTDetailsData = {
    value_of_good: number;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    gst_fee: number;
    gstin_code: string;
};
type Prices = {
    price_marked?: number;
    cashback_applied?: number;
    amount_paid?: number;
    coupon_value?: number;
    refund_amount?: number;
    price_effective?: number;
    refund_credit?: number;
    fynd_credits?: number;
    value_of_good?: number;
    amount_paid_roundoff?: number;
    promotion_effective_discount?: number;
    tax_collected_at_source?: number;
    delivery_charge?: number;
    discount?: number;
    cashback?: number;
    cod_charges?: number;
};
type BagUnit = {
    item?: PlatformItem;
    ordering_channel: string;
    gst?: GSTDetailsData;
    status: any;
    item_quantity: number;
    can_cancel?: boolean;
    can_return?: boolean;
    prices?: Prices;
    total_shipment_bags: number;
    bag_id: number;
    shipment_id: string;
};
type ShipmentItem = {
    created_at: string;
    company?: any;
    total_bags_count: number;
    user?: UserDataInfo;
    id: string;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    shipment_created_at: number;
    payment_methods?: any;
    shipment_status?: ShipmentStatus;
    sla?: any;
    bags?: BagUnit[];
    fulfilling_centre: string;
    channel?: any;
    prices?: Prices;
    application?: any;
    total_shipments_in_order: number;
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    applied_filters?: any;
    page?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type OrderDetailsData = {
    tax_details?: any;
    source?: string;
    ordering_channel?: string;
    order_value?: string;
    affiliate_id?: string;
    ordering_channel_logo?: any;
    cod_charges?: string;
    fynd_order_id: string;
    order_date?: string;
};
type TrackingList = {
    status: string;
    time?: string;
    text: string;
    is_current?: boolean;
    is_passed?: boolean;
};
type UserDetailsData = {
    email?: string;
    country: string;
    state: string;
    address: string;
    city: string;
    pincode: string;
    name: string;
    phone: string;
};
type EInvoice = {
    irn?: string;
    acknowledge_no?: number;
    error_code?: string;
    error_message?: string;
    signed_qr_code?: string;
    signed_invoice?: string;
    acknowledge_date?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type ShipmentPayments = {
    mode?: string;
    logo?: string;
    source?: string;
};
type Dimensions = {
    height?: number;
    width?: number;
    unit?: string;
    is_default?: boolean;
    length?: number;
};
type Meta = {
    dimension?: Dimensions;
};
type FulfillingStore = {
    country: string;
    state: string;
    address: string;
    pincode: string;
    id: number;
    meta: any;
    fulfillment_channel: string;
    contact_person: string;
    city: string;
    store_name: string;
    phone: string;
    code: string;
};
type ShipmentStatusData = {
    created_at?: string;
    id?: number;
    status?: string;
    bag_list?: string[];
    shipment_id?: string;
};
type BagStateMapper = {
    bs_id: number;
    app_facing?: boolean;
    notify_customer?: boolean;
    app_display_name?: string;
    display_name: string;
    is_active?: boolean;
    name: string;
    app_state_name?: string;
    journey_type: string;
    state_type: string;
};
type BagStatusHistory = {
    created_at?: string;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    delivery_partner_id?: number;
    status: string;
    delivery_awb_number?: string;
    bsh_id?: number;
    store_id?: number;
    app_display_name?: string;
    kafka_sync?: boolean;
    reasons?: any[];
    display_name?: string;
    forward?: boolean;
    state_type?: string;
    updated_at?: string;
    bag_id?: number;
    shipment_id?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
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
type BuyerDetails = {
    pincode: number;
    state: string;
    address: string;
    city: string;
    ajio_site_id?: string;
    gstin: string;
    name: string;
};
type ShipmentMeta = {
    external?: any;
    auto_trigger_dp_assignment_acf: boolean;
    timestamp?: ShipmentTimeStamp;
    awb_number?: string;
    einvoice_info?: EinvoiceInfo;
    dp_id?: string;
    debug_info?: DebugInfo;
    assign_dp_from_sb?: boolean;
    shipment_weight?: number;
    po_number?: string;
    forward_affiliate_order_id?: string;
    return_awb_number?: string;
    b2c_buyer_details?: any;
    formatted?: Formatted;
    weight: number;
    lock_data?: LockData;
    marketplace_store_id?: string;
    dp_sort_key?: string;
    return_store_node?: number;
    dp_options?: any;
    shipment_volumetric_weight?: number;
    bag_weight?: any;
    fulfilment_priority_text?: string;
    due_date?: string;
    return_affiliate_shipment_id?: string;
    b2b_buyer_details?: BuyerDetails;
    forward_affiliate_shipment_id?: string;
    ewaybill_info?: any;
    return_affiliate_order_id?: string;
    dp_name?: string;
    order_type?: string;
    packaging_name?: string;
    box_type?: string;
    store_invoice_updated_date?: string;
    same_store_available: boolean;
    return_details?: any;
};
type PDFLinks = {
    po_invoice?: string;
    invoice_a6?: string;
    invoice?: string;
    credit_note_url?: string;
    invoice_pos?: string;
    label_a4?: string;
    label_type: string;
    label_a6?: string;
    label?: string;
    label_pos?: string;
    b2b?: string;
    invoice_a4?: string;
    invoice_type: string;
};
type AffiliateMeta = {
    employee_discount?: number;
    channel_shipment_id?: string;
    box_type?: string;
    size_level_total_qty?: number;
    due_date?: string;
    order_item_id?: string;
    quantity?: number;
    loyalty_discount?: number;
    channel_order_id?: string;
    is_priority?: boolean;
    coupon_code?: string;
};
type AffiliateDetails = {
    shipment_meta: ShipmentMeta;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    ad_id?: string;
    affiliate_bag_id: string;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    affiliate_order_id: string;
    affiliate_shipment_id: string;
    affiliate_meta: AffiliateMeta;
};
type PlatformDeliveryAddress = {
    email?: string;
    created_at?: string;
    country?: string;
    state?: string;
    pincode?: string;
    version?: string;
    address1?: string;
    address2?: string;
    longitude?: number;
    updated_at?: string;
    landmark?: string;
    address_category?: string;
    address_type?: string;
    area?: string;
    latitude?: number;
    city?: string;
    phone?: string;
    contact_person?: string;
};
type DiscountRules = {
    value?: number;
    type?: string;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type AppliedPromos = {
    promo_id?: string;
    amount?: number;
    discount_rules?: DiscountRules[];
    promotion_name?: string;
    buy_rules?: BuyRules[];
    promotion_type?: string;
    mrp_promotion?: boolean;
    article_quantity?: number;
};
type OrderBagArticle = {
    identifiers?: any;
    return_config?: any;
    uid?: string;
};
type OrderBrandName = {
    logo: string;
    company: string;
    id: number;
    created_on: string;
    brand_name: string;
    modified_on?: string;
};
type CurrentStatus = {
    created_at?: string;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    delivery_partner_id?: number;
    status?: string;
    shipment_id?: string;
    updated_at?: number;
    store_id?: number;
    kafka_sync?: boolean;
    current_status_id: number;
    delivery_awb_number?: string;
    bag_id?: number;
    state_type?: string;
};
type BagGST = {
    gst_tag?: string;
    gst_tax_percentage?: number;
    value_of_good?: number;
    hsn_code?: string;
    brand_calculated_amount?: number;
    gst_fee?: number;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    refund_credit: number;
    amount_paid_roundoff?: number;
    promotion_effective_discount: number;
    item_name: string;
    gst_tag: string;
    added_to_fynd_cash: boolean;
    size: string;
    tax_collected_at_source?: number;
    brand_calculated_amount: number;
    delivery_charge: number;
    discount: number;
    fynd_credits: number;
    price_marked: number;
    gst_tax_percentage: number;
    value_of_good: number;
    total_units: number;
    coupon_effective_discount: number;
    gst_fee: number;
    identifiers: Identifier;
    transfer_price: number;
    cod_charges: number;
    price_effective: number;
    cashback_applied: number;
    amount_paid: number;
    coupon_value: number;
    hsn_code: string;
    cashback: number;
};
type BagConfigs = {
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
    is_active: boolean;
};
type OrderBags = {
    line_number?: number;
    can_return?: boolean;
    prices?: Prices;
    bag_id: number;
    seller_identifier?: string;
    entity_type?: string;
    delivery_address?: PlatformDeliveryAddress;
    quantity?: number;
    applied_promos?: AppliedPromos[];
    article?: OrderBagArticle;
    parent_promo_bags?: any;
    item?: PlatformItem;
    display_name?: string;
    brand?: OrderBrandName;
    identifier?: string;
    current_status?: CurrentStatus;
    gst_details?: BagGST;
    can_cancel?: boolean;
    financial_breakup?: FinancialBreakup;
    bag_configs?: BagConfigs;
};
type OrderingStoreDetails = {
    country: string;
    state: string;
    address: string;
    pincode: string;
    id: number;
    meta: any;
    contact_person: string;
    city: string;
    store_name: string;
    phone: string;
    code: string;
};
type DPDetailsData = {
    gst_tag?: string;
    country?: string;
    pincode?: string;
    id?: number;
    track_url?: string;
    eway_bill_id?: string;
    name?: string;
    awb_no?: string;
};
type PlatformShipment = {
    order?: OrderDetailsData;
    picked_date?: string;
    custom_meta?: any[];
    fulfilment_priority?: number;
    tracking_list?: TrackingList[];
    vertical?: string;
    shipment_images?: string[];
    invoice_id?: string;
    prices?: Prices;
    journey_type?: string;
    delivery_details?: UserDetailsData;
    invoice?: EinvoiceInfo;
    shipment_status?: string;
    payment_mode?: string;
    priority_text?: string;
    total_bags?: number;
    coupon?: any;
    payments?: ShipmentPayments;
    billing_details?: UserDetailsData;
    shipment_quantity?: number;
    total_items?: number;
    user_agent?: string;
    operational_status?: string;
    gst_details?: GSTDetailsData;
    delivery_slot?: any;
    meta?: Meta;
    fulfilling_store?: FulfillingStore;
    status?: ShipmentStatusData;
    enable_dp_tracking?: boolean;
    bag_status_history?: BagStatusHistory[];
    affiliate_details?: AffiliateDetails;
    bags?: OrderBags[];
    packaging_type?: string;
    ordering_store?: OrderingStoreDetails;
    platform_logo?: string;
    dp_details?: DPDetailsData;
    shipment_id: string;
};
type ShipmentInfoResponse = {
    shipments?: PlatformShipment[];
    message?: string;
    success: boolean;
};
type OrderMeta = {
    customer_note?: string;
    payment_type?: string;
    order_type?: string;
    order_child_entities?: string[];
    files?: any[];
    comment?: string;
    staff?: any;
    order_platform?: string;
    employee_id?: number;
    cart_id?: number;
    currency_symbol?: string;
    extra_meta?: any;
    mongo_cart_id?: number;
    order_tags?: any[];
    ordering_store?: number;
};
type OrderDict = {
    tax_details?: any;
    meta?: OrderMeta;
    payment_methods?: any;
    prices?: Prices;
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
    value?: string;
    text?: string;
    index?: number;
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
    value?: string;
    name?: string;
    display?: string;
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformOrderItems = {
    shipments?: PlatformShipment[];
    order_created_time?: string;
    meta?: any;
    order_value?: number;
    user_info?: UserDataInfo;
    payment_mode?: string;
    total_order_value?: number;
    order_id?: string;
    breakup_values?: PlatformBreakupValues[];
    channel?: PlatformChannel;
};
type OrderListingResponse = {
    lane?: string;
    message?: string;
    total_count?: number;
    success?: boolean;
    page?: Page;
    items?: PlatformOrderItems[];
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    key: string;
    options?: Options[];
    value: number;
    text: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    reason?: string;
    raw_status?: string;
    meta?: any;
    status?: string;
    account_name?: string;
    awb?: string;
    shipment_type?: string;
    last_location_recieved_at?: string;
    updated_at?: string;
    updated_time?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    action_centre?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    returned?: FiltersInfo[];
    processed?: FiltersInfo[];
    filters?: FiltersInfo[];
};
type FiltersResponse = {
    advance_filter?: AdvanceFilterInfo;
    global_filter?: FiltersInfo[];
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    s3_key?: string;
    request_details?: any;
    status?: string;
    report_created_at?: string;
    report_type?: string;
    display_name?: string;
    report_id?: string;
    report_name?: string;
    report_requested_at?: string;
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
    message?: string;
    value?: string;
    type?: string;
};
type JioCodeUpsertResponse = {
    identifier?: string;
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
    trace_id?: string;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    batch_id: string;
    do_invoice_label_generated: boolean;
    label?: any;
    store_code?: string;
    invoice?: any;
    data?: any;
    store_id?: string;
    invoice_status?: string;
    store_name?: string;
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
    upload?: FileUploadResponse;
    operation?: string;
    size?: number;
    file_name?: string;
    namespace?: string;
    content_type?: string;
    method?: string;
    tags?: string[];
    file_path?: string;
    cdn?: URL;
};
type bulkListingData = {
    store_code?: string;
    successful?: number;
    user_name?: string;
    store_name?: string;
    company_id?: number;
    batch_id?: string;
    failed?: number;
    id?: string;
    total?: number;
    failed_shipments?: any[];
    processing_shipments?: string[];
    store_id?: number;
    user_id?: string;
    processing?: number;
    excel_url?: string;
    successful_shipments?: any[];
    status?: string;
    file_name?: string;
    uploaded_on?: string;
};
type BulkListingPage = {
    type?: string;
    total?: number;
    size?: number;
    has_next?: boolean;
    has_previous?: boolean;
    current?: number;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    error?: string;
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
    failed_shipments_count?: number;
    batch_id?: string;
    successful_shipments_count?: number;
    successful_shipment_ids?: string[];
    processing_shipments_count?: number;
    total_shipments_count?: number;
    company_id?: string;
};
type BulkActionDetailsResponse = {
    message?: string;
    failed_records?: string[];
    data?: BulkActionDetailsDataField[];
    error?: string[];
    status?: boolean;
    success?: string;
    user_id?: string;
    uploaded_by?: string;
    uploaded_on?: string;
};
type AffiliateBagDetails = {
    employee_discount?: number;
    affiliate_bag_id: string;
    loyalty_discount?: number;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
};
type StoreAddress = {
    created_at: string;
    address2?: string;
    city: string;
    landmark?: string;
    address_type: string;
    contact_person: string;
    country: string;
    pincode: number;
    latitude: number;
    email?: string;
    version?: string;
    country_code: string;
    address_category: string;
    phone: string;
    address1: string;
    state: string;
    longitude: number;
    area?: string;
    updated_at: string;
};
type StoreEinvoice = {
    password?: string;
    enabled: boolean;
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
type EInvoicePortalDetails = {
    password?: string;
    username?: string;
    user?: string;
};
type Document = {
    ds_type: string;
    value: string;
    legal_name: string;
    url?: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    gst_credentials: StoreGstCredentials;
    product_return_config?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    ewaybill_portal_details?: any;
    documents?: StoreDocuments;
    stage: string;
    display_name: string;
    timing?: any[];
    gst_number?: string;
    additional_contact_details?: any;
    notification_emails?: string[];
};
type Store = {
    s_id: string;
    created_at: string;
    address2?: string;
    vat_no?: string;
    login_username: string;
    is_active?: boolean;
    parent_store_id?: number;
    company_id: number;
    brand_id?: any;
    contact_person: string;
    store_address_json?: StoreAddress;
    country: string;
    pincode: string;
    location_type: string;
    order_integration_id?: string;
    updated_at?: string;
    latitude: number;
    alohomora_user_id?: number;
    packaging_material_count?: number;
    is_enabled_for_recon?: boolean;
    is_archived?: boolean;
    store_active_from?: string;
    fulfillment_channel: string;
    brand_store_tags?: string[];
    name: string;
    phone: number;
    mall_area?: string;
    address1: string;
    state: string;
    meta: StoreMeta;
    longitude: number;
    mall_name?: string;
    store_email: string;
    city: string;
    code?: string;
};
type ArticleDetails = {
    status?: any;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type ReturnConfig = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type Article = {
    child_details?: any;
    esp_modified?: any;
    a_set?: any;
    seller_identifier: string;
    uid: string;
    raw_meta?: any;
    weight?: Weight;
    size: string;
    dimensions?: Dimensions;
    return_config?: ReturnConfig;
    identifiers: Identifier;
    is_set?: boolean;
    _id: string;
    code?: string;
};
type Attributes = {
    marketer_address?: string;
    primary_color_hex?: string;
    primary_material?: string;
    brand_name?: string;
    marketer_name?: string;
    primary_color?: string;
    name?: string;
    gender?: string[];
    essential?: string;
};
type Item = {
    branch_url?: string;
    can_return?: boolean;
    brand_id: number;
    last_updated_at?: string;
    size: string;
    l2_category_id?: number;
    gender?: string;
    slug_key: string;
    webstore_product_url?: string;
    l1_category_id?: number;
    l3_category_name?: string;
    brand: string;
    attributes: Attributes;
    name: string;
    item_id: number;
    image: string[];
    l2_category?: string[];
    meta?: any;
    l1_category?: string[];
    can_cancel?: boolean;
    l3_category?: number;
    color?: string;
    department_id?: number;
    code?: string;
};
type Brand = {
    start_date?: string;
    company: string;
    is_virtual_invoice?: boolean;
    logo?: string;
    created_on?: number;
    credit_note_allowed?: boolean;
    script_last_ran?: string;
    invoice_prefix?: string;
    credit_note_expiry_days?: number;
    brand_name: string;
    pickup_location?: string;
    modified_on?: number;
    brand_id: number;
};
type BagGSTDetails = {
    gst_tag: string;
    igst_tax_percentage: number;
    gst_tax_percentage: number;
    hsn_code_id: string;
    value_of_good: number;
    hsn_code: string;
    cgst_gst_fee: string;
    igst_gst_fee: string;
    tax_collected_at_source: number;
    sgst_tax_percentage: number;
    brand_calculated_amount: number;
    gst_fee: number;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    sgst_gst_fee: string;
    cgst_tax_percentage: number;
};
type B2BPODetails = {
    docker_number?: string;
    po_line_amount?: number;
    partial_can_ret?: boolean;
    item_base_price?: number;
    po_tax_amount?: number;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
    is_returnable: boolean;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type BagDetailsPlatformResponse = {
    line_number?: number;
    affiliate_bag_details: AffiliateBagDetails;
    ordering_store?: Store;
    current_operational_status: BagStatusHistory;
    original_bag_list?: number[];
    prices: Prices;
    article_details?: ArticleDetails;
    journey_type: string;
    no_of_bags_order?: number;
    seller_identifier?: string;
    entity_type?: string;
    order_integration_id?: string;
    b_type?: string;
    quantity?: number;
    applied_promos?: any[];
    tags?: string[];
    article: Article;
    parent_promo_bags?: any;
    item: Item;
    restore_promos?: any;
    display_name?: string;
    reasons?: any[];
    brand: Brand;
    bag_status: BagStatusHistory[];
    identifier?: string;
    operational_status?: string;
    b_id: number;
    gst_details: BagGSTDetails;
    meta?: BagMeta;
    bag_update_time?: number;
    status: BagReturnableCancelableStatus;
    qc_required?: any;
    affiliate_details?: AffiliateDetails;
    restore_coupon?: boolean;
    dates?: Dates;
    financial_breakup: FinancialBreakup[];
    current_status: BagStatusHistory;
    bag_status_history?: BagStatusHistory;
    shipment_id?: string;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    size: number;
    page_type: string;
    has_next: boolean;
    item_total: number;
    current: number;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type GeneratePosOrderReceiptResponse = {
    order_id?: string;
    invoice_receipt?: string;
    payment_receipt?: string;
    success?: boolean;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    shipment_id?: string;
    message?: string;
    error?: string;
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
    set_id?: string;
    affiliate_id?: string;
    affiliate_bag_id?: string;
    reason_ids?: number[];
    item_id?: string;
    mongo_article_id?: string;
    fynd_order_id?: string;
    affiliate_order_id?: string;
    bag_id?: number;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    id?: string;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
    affiliate_order_id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    action_type: string;
    entity_type: string;
    action: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    is_locked?: boolean;
    affiliate_order_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
};
type CheckResponse = {
    shipment_id?: string;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    lock_status?: boolean;
    is_shipment_locked?: boolean;
    is_bag_locked?: boolean;
    original_filter?: OriginalFilter;
    bags?: Bags[];
    status?: string;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    check_response?: CheckResponse[];
    message?: string;
};
type AnnouncementResponse = {
    to_datetime?: string;
    id: number;
    from_datetime?: string;
    platform_id?: string;
    description?: string;
    logo_url?: string;
    created_at?: string;
    company_id?: number;
    platform_name?: string;
    title?: string;
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
type Products = {
    quantity?: number;
    identifier?: string;
    line_number?: number;
};
type EntitiesDataUpdates = {
    filters?: any[];
    data?: any;
};
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
};
type ProductsDataUpdates = {
    filters?: ProductsDataUpdatesFilters[];
    data?: any;
};
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    products?: ProductsDataUpdates[];
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
    identifier?: string;
    line_number?: number;
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
type ShipmentsRequest = {
    products?: Products[];
    identifier: string;
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
    status?: string;
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    force_transition?: boolean;
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
    task?: boolean;
};
type ShipmentsResponse = {
    message?: string;
    identifier?: string;
    stack_trace?: string;
    code?: string;
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
type OrderUser = {
    address2?: string;
    last_name: string;
    phone: number;
    pincode: string;
    country: string;
    address1?: string;
    first_name: string;
    email: string;
    mobile: number;
    state: string;
    city: string;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type ArticleDetails1 = {
    category: any;
    quantity: number;
    weight: any;
    dimension: any;
    attributes: any;
    _id: string;
    brand_id: number;
};
type ShipmentDetails = {
    shipments: number;
    fulfillment_id: number;
    affiliate_shipment_id: string;
    dp_id?: number;
    meta?: any;
    box_type?: string;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    location_details?: LocationDetails;
    to_pincode: string;
    payment_mode: string;
    identifier: string;
    shipment: ShipmentDetails[];
    source: string;
    action: string;
    journey: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    store_id: number;
    seller_identifier: string;
    avl_qty: number;
    amount_paid: number;
    discount: number;
    price_effective: number;
    fynd_store_id: string;
    hsn_code_id: string;
    modified_on: string;
    unit_price: number;
    affiliate_store_id: string;
    item_size: string;
    sku: string;
    transfer_price: number;
    company_id: number;
    item_id: number;
    delivery_charge: number;
    pdf_links?: MarketPlacePdf;
    affiliate_meta: any;
    identifier: any;
    quantity: number;
    _id: string;
    price_marked: number;
};
type OrderInfo = {
    billing_address: OrderUser;
    order_priority?: OrderPriority;
    payment_mode: string;
    order_value: number;
    user: UserData;
    shipping_address: OrderUser;
    items: any;
    delivery_charges: number;
    shipment?: ShipmentData;
    coupon?: string;
    bags: AffiliateBag[];
    payment?: any;
    cod_charges: number;
    affiliate_order_id?: string;
    discount: number;
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
    token: string;
    id: string;
    secret: string;
    updated_at: string;
    description?: string;
    created_at: string;
    name: string;
    meta?: AffiliateAppConfigMeta[];
    owner: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
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
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    order?: AffiliateInventoryOrderConfig;
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
    article_lookup?: string;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    store_lookup?: string;
    affiliate: Affiliate;
    create_user?: boolean;
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
    success?: boolean;
    message?: string;
};
type ActionInfo = {
    display_text: string;
    slug: string;
    id: number;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    message: string;
    ticket_url?: string;
    type: string;
    l2_detail?: string;
    bag_id?: number;
    user: string;
    createdat: string;
    l1_detail?: string;
    l3_detail?: string;
    ticket_id?: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
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
type SmsDataPayload = {
    shipment_id: number;
    message: string;
    payment_mode: string;
    amount_paid: number;
    customer_name: string;
    country_code: string;
    phone_number: number;
    order_id: string;
    brand_name: string;
};
type SendSmsPayload = {
    slug: string;
    bag_id: number;
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
    shipment_id?: string;
    bag_list?: number[];
    remarks?: string;
    id: number;
    meta: Meta1;
    status?: string;
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
    order_type: string;
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
    rate: number;
    amount: any;
};
type Charge = {
    type: string;
    tax?: Tax;
    name: string;
    code?: string;
    amount: any;
};
type LineItem = {
    charges?: Charge[];
    seller_identifier: string;
    quantity?: number;
    custom_messasge?: string;
    meta?: any;
    external_line_id?: string;
};
type ProcessingDates = {
    customer_pickup_slot?: any;
    dispatch_after_date?: string;
    pack_by_date?: string;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    confirm_by_date?: string;
};
type Shipment = {
    line_items: LineItem[];
    processing_dates?: ProcessingDates;
    location_id: number;
    external_shipment_id?: string;
    meta?: any;
    priority?: number;
};
type BillingInfo = {
    country_code?: string;
    address1: string;
    floor_no?: string;
    house_no?: string;
    external_customer_code?: string;
    alternate_mobile_number?: string;
    address2?: string;
    pincode: string;
    alternate_email?: string;
    country: string;
    first_name: string;
    state_code?: string;
    middle_name?: string;
    state: string;
    city: string;
    last_name?: string;
    primary_email: string;
    primary_mobile_number: string;
    gender?: string;
    customer_code?: string;
    title?: string;
};
type PaymentMethod = {
    refund_by: string;
    mode: string;
    collect_by: string;
    name: string;
    meta?: any;
    amount: number;
    transaction_data?: any;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type ShippingInfo = {
    shipping_type?: string;
    country_code?: string;
    address1: string;
    floor_no?: string;
    house_no?: string;
    geo_location?: any;
    external_customer_code?: string;
    alternate_mobile_number?: string;
    address2?: string;
    pincode: string;
    alternate_email?: string;
    country: string;
    address_type?: string;
    slot?: any[];
    first_name: string;
    state_code?: string;
    middle_name?: string;
    state: string;
    city: string;
    last_name?: string;
    primary_email: string;
    primary_mobile_number: string;
    gender?: string;
    customer_code?: string;
    landmark?: string;
    title?: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type CreateOrderAPI = {
    charges?: Charge[];
    currency_info?: any;
    shipments: Shipment[];
    billing_info: BillingInfo;
    payment_info: PaymentInfo;
    external_creation_date?: string;
    shipping_info: ShippingInfo;
    tax_info?: TaxInfo;
    meta?: any;
    external_order_id?: string;
};
type CreateOrderErrorReponse = {
    message: string;
    info?: any;
    stack_trace?: string;
    code?: string;
    status: number;
    meta?: string;
    exception?: string;
    request_id?: string;
};
type PaymentMethods = {
    mode?: string;
    refund_by?: string;
    collect_by?: string;
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
    payment_info?: CreateChannelPaymentInfo;
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
    logo_url?: any;
    lock_states?: string[];
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
    order_details?: FyndOrderIdList[];
    mobile: number;
    end_date: string;
    start_date: string;
};
type GetSearchWordsData = {
    result?: any;
    app_id?: string;
    uid?: string;
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
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
    result: SearchKeywordResult;
    app_id?: string;
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    app_id?: string;
    uid?: string;
    results?: any[];
    _custom_json?: any;
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type AutocompletePageAction = {
    type?: string;
    params?: any;
    query?: any;
    url?: string;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type Media = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type AutocompleteResult = {
    display?: string;
    action?: AutocompleteAction;
    logo?: Media;
    _custom_json?: any;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    is_active?: boolean;
    results?: AutocompleteResult[];
    _custom_json?: any;
    words?: string[];
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    app_id?: string;
    results?: any[];
    _custom_json?: any;
};
type ProductBundleItem = {
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    max_quantity: number;
    min_quantity: number;
    product_uid: number;
    allow_remove?: boolean;
};
type GetProductBundleCreateResponse = {
    page_visibility?: string[];
    same_store_assignment?: boolean;
    created_by?: any;
    name: string;
    created_on?: string;
    meta?: any;
    is_active: boolean;
    modified_by?: any;
    logo?: string;
    products: ProductBundleItem[];
    company_id?: number;
    choice: string;
    id?: string;
    modified_on?: string;
    slug: string;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    page_visibility?: string[];
    same_store_assignment?: boolean;
    created_by?: any;
    name: string;
    created_on?: string;
    meta?: any;
    is_active: boolean;
    modified_by?: any;
    logo?: string;
    products: ProductBundleItem[];
    company_id?: number;
    choice: string;
    modified_on?: string;
    slug: string;
};
type Price = {
    max_effective?: number;
    currency?: string;
    min_marked?: number;
    min_effective?: number;
    max_marked?: number;
};
type Size = {
    display?: string;
    quantity?: number;
    value?: string;
    is_available?: boolean;
};
type LimitedProductData = {
    slug?: string;
    short_description?: string;
    uid?: number;
    name?: string;
    sizes?: string[];
    item_code?: string;
    attributes?: any;
    country_of_origin?: string;
    identifier?: any;
    price?: any;
    quantity?: number;
    images?: string[];
};
type GetProducts = {
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    price?: Price;
    max_quantity?: number;
    sizes?: Size[];
    product_details?: LimitedProductData;
    min_quantity?: number;
    product_uid?: number;
    allow_remove?: boolean;
};
type GetProductBundleResponse = {
    page_visibility?: string[];
    same_store_assignment?: boolean;
    name?: string;
    meta?: any;
    is_active?: boolean;
    logo?: string;
    products?: GetProducts[];
    company_id?: number;
    choice?: string;
    slug?: string;
};
type ProductBundleUpdateRequest = {
    page_visibility?: string[];
    same_store_assignment?: boolean;
    name: string;
    meta?: any;
    is_active: boolean;
    modified_by?: any;
    logo?: string;
    products: ProductBundleItem[];
    company_id?: number;
    choice: string;
    modified_on?: string;
    slug: string;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    description?: string;
    image?: string;
    guide?: Guide;
    name: string;
    created_on?: string;
    modified_by?: any;
    title: string;
    subtitle?: string;
    company_id?: number;
    brand_id?: number;
    active?: boolean;
    modified_on?: string;
    created_by?: any;
    id?: string;
    tag?: string;
};
type SizeGuideResponse = {
    guide?: any;
    created_on?: string;
    name?: string;
    modified_by?: any;
    title?: string;
    subtitle?: string;
    company_id?: number;
    brand_id?: number;
    active?: boolean;
    modified_on?: string;
    created_by?: any;
    id?: string;
    tag?: string;
};
type MOQData = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type SEOData = {
    description?: any;
    title?: any;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    is_cod?: boolean;
    moq?: MOQData;
    is_gift?: boolean;
    seo?: SEOData;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationItemMeta = {
    alt_text?: any;
    is_cod?: boolean;
    _custom_meta?: MetaFields[];
    moq?: ApplicationItemMOQ;
    is_gift?: boolean;
    seo?: ApplicationItemSEO;
    _custom_json?: any;
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
    next: number;
    current: number;
    has_next: boolean;
    total_count: number;
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
    name: string;
    is_active: boolean;
    logo?: string;
    display_type: string;
    slug?: string;
    unit?: string;
    key?: string;
};
type AppConfigurationDetail = {
    template_slugs?: string[];
    priority: number;
    is_default: boolean;
    app_id: string;
    name?: string;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    logo?: string;
    slug: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    priority: number;
    is_default: boolean;
    app_id: string;
    name?: string;
    is_active: boolean;
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
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    detail?: any;
    compare?: any;
    variant?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationListingSortConfig = {
    priority: number;
    name?: string;
    is_active: boolean;
    logo?: string;
    key: string;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    display?: string;
    start?: number;
    end?: number;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    map_values?: any[];
    value?: string;
    map?: any;
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
};
type ConfigurationListingFilterConfig = {
    type: string;
    priority: number;
    name?: string;
    is_active: boolean;
    logo?: string;
    display_name?: string;
    value_config?: ConfigurationListingFilterValue;
    key: string;
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
type ConfigurationProductConfig = {
    priority: number;
    title?: string;
    is_active: boolean;
    subtitle?: string;
    logo?: string;
    size?: ProductSize;
    key: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    priority: number;
    name: string;
    is_active: boolean;
    logo?: string;
    display_type: string;
    size: ProductSize;
    key: string;
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
    created_by?: any;
    app_id: string;
    created_on?: string;
    modified_by?: any;
    config_type: string;
    id?: string;
    modified_on?: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    config_id?: string;
    type?: string;
    created_by?: any;
    app_id: string;
    created_on?: string;
    modified_by?: any;
    config_type: string;
    modified_on?: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    config_id?: string;
    app_id: string;
    config_type: string;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    product?: GetCatalogConfigurationDetailsProduct;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    value?: string;
    name?: string;
    is_selected?: boolean;
};
type ProductFiltersKey = {
    kind?: string;
    name: string;
    operators?: string[];
    logo?: string;
    display: string;
};
type ProductFiltersValue = {
    selected_max?: number;
    count?: number;
    value: any;
    is_selected: boolean;
    query_format?: string;
    min?: number;
    selected_min?: number;
    max?: number;
    currency_symbol?: string;
    display: string;
    currency_code?: string;
    display_format?: string;
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
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type Media1 = {
    type?: string;
    url: string;
    meta?: any;
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
type GetCollectionDetailNest = {
    query?: CollectionQuery[];
    priority?: number;
    description?: string;
    type?: string;
    cron?: any;
    _schedule?: any;
    action?: Action;
    name?: string;
    uid?: string;
    meta?: any;
    visible_facets_keys?: string[];
    slug?: string;
    allow_facets?: boolean;
    allow_sort?: boolean;
    is_active?: boolean;
    tag?: string[];
    app_id?: string;
    logo?: Media1;
    badge?: any;
    banners?: ImageUrls;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionSchedule = {
    cron?: string;
    end?: string;
    duration?: number;
    start?: string;
    next_schedule?: NextSchedule[];
};
type UserInfo = {
    email?: string;
    uid?: string;
    username?: string;
    user_id?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CreateCollection = {
    query?: CollectionQuery[];
    priority?: number;
    published?: boolean;
    tags?: string[];
    type: string;
    description?: string;
    _schedule?: CollectionSchedule;
    name: string;
    modified_by?: UserInfo;
    meta?: any;
    visible_facets_keys?: string[];
    is_visible?: boolean;
    seo?: SeoDetail;
    slug: string;
    allow_facets?: boolean;
    allow_sort?: boolean;
    is_active?: boolean;
    _custom_json?: any;
    created_by?: UserInfo;
    app_id: string;
    _locale_language?: any;
    logo: CollectionImage;
    badge?: CollectionBadge;
    banners: CollectionBanner;
    sort_on?: string;
};
type CollectionCreateResponse = {
    query?: CollectionQuery[];
    priority?: number;
    description?: string;
    type?: string;
    cron?: any;
    _schedule?: any;
    name?: string;
    meta?: any;
    visible_facets_keys?: string[];
    slug?: string;
    allow_facets?: boolean;
    allow_sort?: boolean;
    is_active?: boolean;
    tag?: string[];
    app_id?: string;
    logo?: BannerImage;
    badge?: any;
    banners?: ImageUrls;
    sort_on?: string;
};
type CollectionDetailResponse = {
    query?: CollectionQuery[];
    priority?: number;
    description?: string;
    type?: string;
    cron?: any;
    _schedule?: any;
    name?: string;
    uid?: string;
    meta?: any;
    visible_facets_keys?: string[];
    slug?: string;
    allow_facets?: boolean;
    allow_sort?: boolean;
    is_active?: boolean;
    tag?: string[];
    app_id?: string;
    logo?: Media1;
    badge?: any;
    banners?: ImageUrls;
};
type UpdateCollection = {
    query?: CollectionQuery[];
    priority?: number;
    published?: boolean;
    tags?: string[];
    description?: string;
    type?: string;
    _schedule?: CollectionSchedule;
    name?: string;
    modified_by?: UserInfo;
    meta?: any;
    visible_facets_keys?: string[];
    is_visible?: boolean;
    seo?: SeoDetail;
    slug?: string;
    allow_facets?: boolean;
    allow_sort?: boolean;
    is_active?: boolean;
    _custom_json?: any;
    _locale_language?: any;
    logo?: CollectionImage;
    badge?: CollectionBadge;
    banners?: CollectionBanner;
    sort_on?: string;
};
type ProductBrand = {
    uid?: number;
    action?: Action;
    name?: string;
    logo?: Media1;
};
type ProductDetailAttribute = {
    type?: string;
    value?: string;
    key?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type Price1 = {
    currency_symbol?: string;
    min?: number;
    currency_code?: string;
    max?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    tryouts?: string[];
    discount?: string;
    brand?: ProductBrand;
    rating_count?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    type?: string;
    description?: string;
    short_description?: string;
    promo_meta?: any;
    uid?: number;
    name?: string;
    medias?: Media1[];
    teaser_tag?: any;
    sellable?: boolean;
    slug: string;
    color?: string;
    image_nature?: string;
    has_variant?: boolean;
    attributes?: any;
    item_type?: string;
    similars?: string[];
    rating?: number;
    price?: ProductListingPrice;
    item_code?: string;
    highlights?: string[];
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    page?: Page;
    items?: ProductListingDetail[];
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    type?: string;
    query?: CollectionQuery[];
    item?: ItemQueryForUserCollection[];
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type CatalogInsightItem = {
    count?: number;
    sellable_count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightBrand = {
    available_articles?: number;
    article_freshness?: number;
    name?: string;
    total_articles?: number;
    available_sizes?: number;
    total_sizes?: number;
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
    brand_ids?: number[];
    opt_level: string;
    store_ids?: number[];
    platform?: string;
    enabled?: boolean;
    company_id?: number;
};
type CompanyOptIn = {
    brand_ids: number[];
    opt_level: string;
    store_ids: number[];
    created_on: number;
    modified_by?: any;
    platform: string;
    enabled: boolean;
    company_id: number;
    modified_on: number;
    created_by?: any;
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
    timing?: any;
    documents?: any[];
    display_name?: string;
    store_type?: string;
    uid?: number;
    name?: string;
    created_on?: string;
    additional_contacts?: any[];
    store_code?: string;
    company_id?: number;
    manager?: any;
    modified_on?: string;
    address?: any;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterFilter = {
    indexing: boolean;
    depends_on?: string[];
    priority?: number;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    type: string;
    allowed_values?: string[];
    range?: AttributeSchemaRange;
    multi?: boolean;
    format?: string;
    mandatory?: boolean;
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
    description?: string;
    filters?: AttributeMasterFilter;
    schema?: AttributeMaster;
    name?: string;
    meta?: AttributeMasterMeta;
    logo?: string;
    is_nested?: boolean;
    id?: string;
    details?: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    slug?: string;
    departments?: string[];
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
    message?: string;
    meta?: any;
    status?: number;
    errors?: any;
    code?: string;
};
type UserSerializer = {
    username?: string;
    uid?: string;
    user_id?: string;
    _id?: string;
    contact?: string;
};
type GetDepartment = {
    priority_order?: number;
    created_by?: UserSerializer;
    name?: string;
    uid?: number;
    synonyms?: string[];
    is_active?: boolean;
    created_on?: string;
    modified_on?: string;
    page_size?: number;
    modified_by?: UserSerializer;
    logo?: string;
    item_type?: string;
    page_no?: number;
    search?: string;
    slug?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    meta?: any;
    status?: number;
    errors?: any;
    code?: string;
};
type DepartmentCreateUpdate = {
    _cls?: string;
    priority_order: number;
    platforms?: any;
    name: string;
    uid?: number;
    synonyms?: string[];
    is_active?: boolean;
    logo: string;
    tags?: string[];
    _custom_json?: any;
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
    super_user?: boolean;
    contact?: string;
    username: string;
    user_id: string;
};
type DepartmentModel = {
    slug?: any;
    _cls?: any;
    priority_order: number;
    verified_by?: UserDetail;
    created_on: string;
    verified_on?: string;
    modified_by?: UserDetail;
    uid?: number;
    name: any;
    is_active?: boolean;
    synonyms?: any[];
    logo: string;
    _id?: any;
    modified_on: string;
    created_by?: UserDetail;
    _custom_json?: any;
};
type ProductTemplate = {
    description?: string;
    is_physical: boolean;
    created_by?: any;
    name?: string;
    is_expirable: boolean;
    modified_by?: any;
    is_active?: boolean;
    created_on?: string;
    attributes?: string[];
    logo?: string;
    categories?: string[];
    modified_on?: string;
    slug: string;
    is_archived?: boolean;
    departments?: string[];
    tag?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    size_guide?: any;
    multi_size?: any;
    product_group_tag?: any;
    hsn_code?: any;
    is_dependent?: any;
    tags?: any;
    media?: any;
    description?: any;
    category_slug?: any;
    short_description?: any;
    name?: any;
    currency?: any;
    teaser_tag?: any;
    product_publish?: any;
    slug?: any;
    trader?: any;
    command?: any;
    brand_uid?: any;
    sizes?: any;
    is_active?: any;
    return_config?: any;
    item_type?: any;
    country_of_origin?: any;
    custom_order?: any;
    trader_type?: any;
    variants?: any;
    item_code?: any;
    no_of_boxes?: any;
    highlights?: any;
};
type GlobalValidation = {
    description?: string;
    type?: string;
    properties?: Properties;
    definitions?: any;
    title?: string;
    required?: string[];
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    description?: string;
    is_physical: boolean;
    name?: string;
    is_expirable: boolean;
    is_active?: boolean;
    attributes?: string[];
    logo?: string;
    categories?: string[];
    id?: string;
    slug: string;
    is_archived?: boolean;
    departments?: string[];
    tag?: string;
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
    templates?: string[];
    brand?: string[];
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadsItems = {
    template_tags?: any;
    completed_on?: string;
    seller_id?: number;
    status?: string;
    data?: ProductDownloadItemsData;
    trigger_on?: string;
    id?: string;
    task_id?: string;
    created_by?: VerifiedBy;
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
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type Media2 = {
    portrait: string;
    logo: string;
    landscape: string;
};
type Category = {
    priority?: number;
    hierarchy?: Hierarchy[];
    created_by?: any;
    name: string;
    uid?: number;
    synonyms?: string[];
    tryouts?: string[];
    is_active: boolean;
    created_on?: string;
    modified_by?: any;
    id?: string;
    modified_on?: string;
    slug?: string;
    marketplaces?: CategoryMapping;
    level: number;
    departments: number[];
    media?: Media2;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    priority?: number;
    hierarchy?: Hierarchy[];
    name: string;
    synonyms?: string[];
    tryouts?: string[];
    is_active: boolean;
    slug?: string;
    marketplaces?: CategoryMapping;
    level: number;
    departments: number[];
    media?: Media2;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type Logo = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
    secure_url?: string;
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
type ReturnConfigResponse = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type Image = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
    secure_url?: string;
};
type ProductSchemaV2 = {
    size_guide?: string;
    multi_size?: boolean;
    is_expirable?: boolean;
    product_group_tag?: string[];
    is_dependent?: boolean;
    hsn_code?: string;
    tags?: string[];
    brand?: Brand;
    departments?: number[];
    highlights?: string[];
    description?: string;
    category_slug?: string;
    media?: Media1[];
    variant_group?: any;
    short_description?: string;
    name?: string;
    uid?: number;
    currency?: string;
    modified_by?: any;
    is_image_less_product?: boolean;
    pending?: string;
    verified_on?: string;
    teaser_tag?: any;
    product_publish?: ProductPublish;
    is_set?: boolean;
    id?: string;
    slug?: string;
    tax_identifier?: any;
    color?: string;
    image_nature?: string;
    trader?: Trader[];
    category_uid?: number;
    all_identifiers?: string[];
    brand_uid?: number;
    l3_mapping?: string[];
    all_company_ids?: number[];
    verified_by?: VerifiedBy;
    category?: any;
    created_on?: string;
    sizes?: any[];
    is_active?: boolean;
    return_config?: ReturnConfigResponse;
    item_type?: string;
    country_of_origin?: string;
    custom_order?: any;
    attributes?: any;
    moq?: any;
    _custom_json?: any;
    net_quantity?: NetQuantityResponse;
    modified_on?: string;
    images?: Image[];
    created_by?: any;
    company_id?: number;
    template_tag?: string;
    primary_color?: string;
    stage?: string;
    variants?: any;
    variant_media?: any;
    item_code?: string;
    no_of_boxes?: number;
    all_sizes?: any[];
    is_physical?: boolean;
};
type ProductListingResponseV2 = {
    items?: ProductSchemaV2[];
    page?: Page;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type ProductPublish1 = {
    is_set?: boolean;
    product_online_date?: string;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    hsn_code?: string;
    reporting_hsn?: string;
};
type ProductCreateUpdateSchemaV2 = {
    size_guide?: string;
    change_request_id?: any;
    multi_size?: boolean;
    product_group_tag?: string[];
    is_dependent?: boolean;
    tags?: string[];
    departments: number[];
    media?: Media1[];
    description?: string;
    category_slug: string;
    variant_group?: any;
    bulk_job_id?: string;
    short_description?: string;
    action?: string;
    name: string;
    uid?: number;
    currency: string;
    requester?: string;
    is_image_less_product?: boolean;
    teaser_tag?: TeaserTag;
    product_publish?: ProductPublish1;
    is_set?: boolean;
    slug: string;
    trader: Trader[];
    brand_uid: number;
    sizes: any[];
    is_active?: boolean;
    return_config: ReturnConfig;
    item_type: string;
    country_of_origin: string;
    custom_order?: CustomOrder;
    attributes?: any;
    company_id: number;
    _custom_json?: any;
    net_quantity?: NetQuantity;
    template_tag: string;
    variants?: any;
    variant_media?: any;
    item_code: string;
    no_of_boxes?: number;
    highlights?: string[];
    tax_identifier: TaxIdentifier;
};
type ProductVariants = {
    category_uid?: number;
    brand_uid?: number;
    uid?: number;
    name?: string;
    item_code?: string;
    media?: Media1[];
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    raw_key?: string;
    schema: AttributeMaster;
    synonyms?: any;
    is_nested?: boolean;
    tags?: string[];
    departments: string[];
    description?: string;
    filters: AttributeMasterFilter;
    name?: string;
    modified_by?: any;
    suggestion?: string;
    details: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    slug: string;
    created_on?: string;
    modified_on?: string;
    created_by?: any;
    unit?: string;
    logo?: string;
    variant?: boolean;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: ProductSchemaV2;
};
type ValidateIdentifier = {
    gtin_value: string;
    primary?: boolean;
    gtin_type: string;
};
type AllSizes = {
    item_dimensions_unit_of_measure: string;
    identifiers?: ValidateIdentifier[];
    item_height: number;
    item_weight_unit_of_measure: any;
    item_length: number;
    item_weight: number;
    item_width: number;
    size: any;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Product = {
    size_guide?: string;
    multi_size?: boolean;
    is_expirable?: boolean;
    product_group_tag?: string[];
    is_dependent?: boolean;
    hsn_code?: string;
    tags?: string[];
    brand?: Brand;
    departments?: number[];
    highlights?: string[];
    description?: string;
    category_slug?: string;
    media?: Media1[];
    variant_group?: any;
    short_description?: string;
    name?: string;
    uid?: number;
    currency?: string;
    modified_by?: any;
    is_image_less_product?: boolean;
    pending?: string;
    verified_on?: string;
    teaser_tag?: any;
    product_publish?: ProductPublished;
    is_set?: boolean;
    id?: string;
    slug?: string;
    tax_identifier?: any;
    color?: string;
    image_nature?: string;
    trader?: Trader[];
    category_uid?: number;
    all_identifiers?: string[];
    brand_uid?: number;
    l3_mapping?: string[];
    all_company_ids?: number[];
    verified_by?: VerifiedBy;
    category?: any;
    created_on?: string;
    sizes?: any[];
    is_active?: boolean;
    return_config?: ReturnConfigResponse;
    item_type?: string;
    country_of_origin?: string;
    custom_order?: any;
    attributes?: any;
    moq?: any;
    _custom_json?: any;
    net_quantity?: NetQuantityResponse;
    modified_on?: string;
    images?: Image[];
    created_by?: any;
    company_id?: number;
    template_tag?: string;
    primary_color?: string;
    stage?: string;
    variants?: any;
    variant_media?: any;
    item_code?: string;
    no_of_boxes?: number;
    all_sizes?: any[];
    is_physical?: boolean;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type UserDetail1 = {
    full_name?: string;
    username?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    succeed?: number;
    cancelled?: number;
    stage?: string;
    failed_records?: string[];
    created_on?: string;
    modified_by?: UserDetail1;
    is_active?: boolean;
    file_path?: string;
    cancelled_records?: string[];
    failed?: number;
    total?: number;
    company_id?: number;
    modified_on?: string;
    created_by?: UserDetail1;
    template_tag?: string;
    template?: ProductTemplate;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    email?: string;
    uid?: string;
    username?: string;
    user_id?: string;
};
type BulkJob = {
    succeed?: number;
    cancelled?: number;
    stage?: string;
    tracking_url?: string;
    failed_records?: any[];
    created_on: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    file_path?: string;
    total?: number;
    cancelled_records?: any[];
    failed?: number;
    company_id: number;
    modified_on?: string;
    created_by?: UserInfo1;
    custom_template_tag?: string;
    template_tag?: string;
};
type BulkResponse = {
    batch_id: string;
    created_on: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    modified_on?: string;
    created_by?: UserInfo1;
};
type BulkProductRequest = {
    data: any[];
    batch_id: string;
    template_tag: string;
    company_id: number;
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
    succeed?: number;
    cancelled?: number;
    stage?: string;
    tracking_url?: string;
    failed_records?: string[];
    created_on?: string;
    modified_by?: UserCommon;
    is_active?: boolean;
    file_path?: string;
    cancelled_records?: string[];
    failed?: number;
    retry?: number;
    total?: number;
    company_id?: number;
    id?: string;
    modified_on?: string;
    created_by?: UserCommon;
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
    size?: string;
    item_id?: number;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    price_effective?: number;
    store?: any;
    item_id?: number;
    inventory_updated_on?: string;
    sellable_quantity?: number;
    identifiers?: any;
    seller_identifier?: string;
    uid?: string;
    currency?: string;
    price?: number;
    price_transfer?: number;
    quantity?: number;
    size?: string;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ItemQuery = {
    item_code?: string;
    uid?: number;
    brand_uid?: number;
};
type GTIN = {
    gtin_value: any;
    primary?: boolean;
    gtin_type: string;
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
    size_distribution: SizeDistribution;
    name?: string;
};
type InvSize = {
    item_dimensions_unit_of_measure?: string;
    price_effective: number;
    identifiers: GTIN[];
    item_height?: number;
    item_width?: number;
    item_weight_unit_of_measure?: string;
    item_length?: number;
    expiration_date?: string;
    set?: InventorySet;
    store_code: string;
    currency: string;
    is_set?: boolean;
    item_weight?: number;
    price?: number;
    price_transfer?: number;
    quantity: number;
    size: any;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type DimensionResponse = {
    is_default: boolean;
    width: number;
    height: number;
    unit: string;
    length: number;
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
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    sellable?: QuantityBase;
    damaged?: QuantityBase;
};
type Trader1 = {
    type: string;
    name: string;
    address: string[];
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type CompanyMeta = {
    id: number;
};
type ManufacturerResponse = {
    name: string;
    address: string;
    is_default: boolean;
};
type PriceMeta = {
    updated_at?: string;
    transfer: number;
    currency: string;
    tp_notes?: any;
    marked: number;
    effective: number;
};
type InventorySellerResponse = {
    fynd_item_code: string;
    expiration_date?: string;
    dimension: DimensionResponse;
    tags?: string[];
    brand: BrandMeta;
    fragile: boolean;
    store: StoreMeta;
    item_id: number;
    seller_identifier: string;
    uid: string;
    meta?: any;
    modified_by?: UserSerializer;
    total_quantity: number;
    quantities?: Quantities;
    is_set?: boolean;
    fynd_article_code: string;
    raw_meta?: any;
    trader?: Trader1[];
    trace_id?: string;
    track_inventory?: boolean;
    return_config?: ReturnConfig1;
    fynd_meta?: any;
    set?: InventorySet;
    is_active?: boolean;
    country_of_origin: string;
    _custom_json?: any;
    weight: WeightResponse;
    size: string;
    created_by?: UserSerializer;
    company: CompanyMeta;
    stage?: string;
    manufacturer: ManufacturerResponse;
    identifier: any;
    price: PriceMeta;
    added_on_store?: string;
    tax_identifier?: any;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type DimensionResponse1 = {
    width?: number;
    unit?: string;
    height?: number;
    length?: number;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type ArticleStoreResponse = {
    uid?: number;
    store_type?: string;
    name?: string;
    store_code?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    order_committed?: Quantity;
    not_available?: Quantity;
    sellable?: Quantity;
    damaged?: Quantity;
};
type Trader2 = {
    type?: string;
    name?: string;
    address?: string[];
};
type ReturnConfig2 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type ManufacturerResponse1 = {
    name?: string;
    address?: string;
    is_default?: boolean;
};
type PriceArticle = {
    transfer?: number;
    currency?: string;
    tp_notes?: any;
    marked?: number;
    effective?: number;
};
type GetInventories = {
    expiration_date?: string;
    dimension?: DimensionResponse1;
    tags?: string[];
    brand?: BrandMeta1;
    store?: ArticleStoreResponse;
    inventory_updated_on?: string;
    item_id?: number;
    seller_identifier?: string;
    uid?: string;
    modified_by?: UserSerializer;
    total_quantity?: number;
    quantities?: QuantitiesArticle;
    is_set?: boolean;
    id?: string;
    trader?: Trader2[];
    trace_id?: string;
    track_inventory?: boolean;
    return_config?: ReturnConfig2;
    country_of_origin?: string;
    weight?: WeightResponse1;
    size?: string;
    created_by?: UserSerializer;
    company?: CompanyMeta1;
    stage?: string;
    platforms?: any;
    manufacturer?: ManufacturerResponse1;
    identifier?: any;
    date_meta?: DateMeta;
    price?: PriceArticle;
    tax_identifier?: any;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    succeed?: number;
    cancelled?: number;
    stage?: string;
    failed_records?: string[];
    created_on?: string;
    modified_by?: any;
    is_active?: boolean;
    file_path?: string;
    cancelled_records?: string[];
    failed?: number;
    total?: number;
    company_id?: number;
    id?: string;
    modified_on?: string;
    created_by?: any;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    trace_id?: string;
    item_dimensions_unit_of_measure?: string;
    price_effective?: number;
    seller_identifier: string;
    price_marked?: number;
    currency?: string;
    item_weight_unit_of_measure?: string;
    expiration_date?: string;
    total_quantity?: number;
    store_code: string;
    tags?: string[];
    price?: number;
    quantity?: number;
};
type InventoryBulkRequest = {
    user?: any;
    batch_id: string;
    sizes: InventoryJobPayload[];
    company_id: number;
};
type InventoryExportJob = {
    completed_on?: string;
    seller_id: number;
    status?: string;
    request_params?: any;
    trigger_on?: string;
    task_id: string;
    url?: string;
};
type InventoryExportRequest = {
    type?: string;
    store?: number[];
    brand?: number[];
};
type InventoryExportResponse = {
    seller_id: number;
    status?: string;
    request_params?: any;
    trigger_on?: string;
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
    trace_id?: string;
    price_effective?: number;
    seller_identifier: string;
    price_marked?: number;
    expiration_date?: string;
    total_quantity?: number;
    tags?: string[];
    store_id: number;
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
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    message: string;
    items?: InventoryResponseItem[];
};
type HsnCodesObject = {
    tax2?: number;
    tax_on_esp?: boolean;
    hs2_code?: string;
    threshold1?: number;
    threshold2?: number;
    hsn_code?: string;
    tax1?: number;
    company_id?: number;
    id?: string;
    modified_on?: string;
    tax_on_mrp?: boolean;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    tax2?: number;
    tax_on_esp?: boolean;
    hs2_code: string;
    uid?: number;
    threshold1: number;
    threshold2?: number;
    is_active?: boolean;
    hsn_code: string;
    tax1: number;
    company_id: number;
    tax_on_mrp: boolean;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    rate: number;
    effective_date: string;
    threshold: number;
    cess?: number;
};
type HSNDataInsertV2 = {
    description: string;
    type: string;
    hsn_code_id?: string;
    created_on?: string;
    modified_by?: any;
    hsn_code: string;
    taxes: TaxSlab[];
    modified_on?: string;
    created_by?: any;
    country_code: string;
    reporting_hsn: string;
};
type PageResponse = {
    has_next?: boolean;
    has_previous?: boolean;
    current?: string;
    size?: number;
    item_total?: number;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    action?: Action;
    name?: string;
    uid?: number;
    discount?: string;
    logo?: Media;
    banners?: ImageUrls;
    slug?: string;
    departments?: string[];
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    priority_order?: number;
    name?: string;
    uid?: number;
    logo?: Media;
    slug?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    action?: Action;
    uid?: number;
    name?: string;
    childs?: any[];
    _custom_json?: any;
    banners?: ImageUrls;
    slug?: string;
};
type SecondLevelChild = {
    action?: Action;
    uid?: number;
    name?: string;
    childs?: ThirdLevelChild[];
    _custom_json?: any;
    banners?: ImageUrls;
    slug?: string;
};
type Child = {
    action?: Action;
    uid?: number;
    name?: string;
    childs?: SecondLevelChild[];
    _custom_json?: any;
    banners?: ImageUrls;
    slug?: string;
};
type CategoryItems = {
    action?: Action;
    uid?: number;
    name?: string;
    childs?: Child[];
    banners?: ImageUrls;
    slug?: string;
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
    filters?: ProductFilters[];
    page: Page;
    operators?: any;
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
};
type ProductDetail = {
    tryouts?: string[];
    brand?: ProductBrand;
    rating_count?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    type?: string;
    description?: string;
    short_description?: string;
    promo_meta?: any;
    uid?: number;
    name?: string;
    medias?: Media1[];
    teaser_tag?: any;
    slug: string;
    color?: string;
    image_nature?: string;
    has_variant?: boolean;
    attributes?: any;
    item_type?: string;
    similars?: string[];
    rating?: number;
    item_code?: string;
    highlights?: string[];
};
type InventoryPage = {
    type: string;
    has_next?: boolean;
    has_previous?: boolean;
    next_id?: string;
    item_total: number;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type ArticleQuery = {
    size: string;
    ignored_stores?: number[];
    item_id: number;
};
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type AssignStoreArticle = {
    query?: ArticleQuery;
    article_assignment?: ArticleAssignment;
    meta?: any;
    group_id?: string;
    quantity?: number;
};
type AssignStore = {
    articles: AssignStoreArticle[];
    channel_type?: string;
    pincode: string;
    app_id: string;
    store_ids?: number[];
    channel_identifier?: string;
    company_id?: number;
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    price_effective?: number;
    article_assignment: ArticleAssignment1;
    item_id: number;
    price_marked?: number;
    uid?: string;
    strategy_wise_listing?: any[];
    meta?: any;
    status: boolean;
    index?: number;
    group_id?: string;
    s_city?: string;
    company_id?: number;
    _id?: string;
    quantity: number;
    size: string;
    store_pincode?: number;
    store_id?: number;
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
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
    closing?: LocationTimingSerializer;
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    email?: string;
    name?: string;
};
type GetAddressSerializer = {
    pincode?: number;
    city?: string;
    address1?: string;
    address2?: string;
    latitude?: number;
    address_type?: string;
    country_code?: string;
    state?: string;
    landmark?: string;
    longitude?: number;
    country?: string;
};
type UserSerializer2 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetCompanySerializer = {
    verified_by?: UserSerializer2;
    stage?: string;
    business_type?: string;
    uid?: number;
    verified_on?: string;
    created_on?: string;
    modified_by?: UserSerializer2;
    name?: string;
    addresses?: GetAddressSerializer[];
    company_type?: string;
    reject_reason?: string;
    modified_on?: string;
    created_by?: UserSerializer2;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type GetLocationSerializer = {
    gst_credentials?: InvoiceDetailsSerializer;
    documents?: Document[];
    product_return_config?: ProductReturnConfigSerializer;
    timing?: LocationDayWiseSerializer[];
    warnings?: any;
    uid?: number;
    verified_on?: string;
    modified_by?: UserSerializer1;
    name: string;
    contact_numbers?: SellerPhoneNumber[];
    verified_by?: UserSerializer1;
    created_on?: string;
    notification_emails?: string[];
    manager?: LocationManagerSerializer;
    _custom_json?: any;
    modified_on?: string;
    created_by?: UserSerializer1;
    address: GetAddressSerializer;
    code: string;
    company?: GetCompanySerializer;
    stage?: string;
    integration_type?: LocationIntegrationType;
    store_type?: string;
    phone_number: string;
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
    app_id: string;
    name?: string;
    uid: number;
    is_active?: boolean;
    logo?: string;
    _custom_json?: any;
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
type CompanyTaxesSerializer = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type GetCompanyProfileSerializerResponse = {
    addresses?: GetAddressSerializer[];
    business_country_info?: BusinessCountryInfo;
    verified_on?: string;
    franchise_enabled?: boolean;
    modified_on?: string;
    taxes?: CompanyTaxesSerializer[];
    _custom_json?: any;
    stage?: string;
    company_type: string;
    created_on?: string;
    business_type: string;
    business_info?: string;
    name?: string;
    contact_details?: ContactDetails;
    business_details?: BusinessDetails;
    notification_emails?: string[];
    warnings?: any;
    uid: number;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    documents?: Document[];
    verified_by?: UserSerializer;
    mode?: string;
};
type CreateUpdateAddressSerializer = {
    landmark?: string;
    country: string;
    address_type: string;
    country_code?: string;
    city: string;
    pincode: number;
    address2?: string;
    address1: string;
    state: string;
    longitude: number;
    latitude: number;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type UpdateCompany = {
    _custom_json?: any;
    reject_reason?: string;
    franchise_enabled?: boolean;
    addresses?: CreateUpdateAddressSerializer[];
    documents?: Document[];
    company_type?: string;
    contact_details?: ContactDetails;
    business_type?: string;
    business_details?: BusinessDetails;
    business_info?: string;
    notification_emails?: string[];
    warnings?: any;
    name?: string;
    taxes?: CompanyTaxesSerializer1[];
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
    stage?: string;
    brand?: DocumentsObj;
    product?: DocumentsObj;
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    uid?: number;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    verified_on?: string;
    description?: string;
    mode?: string;
    modified_on?: string;
    _custom_json?: any;
    reject_reason?: string;
    stage?: string;
    created_on?: string;
    name: string;
    banner?: BrandBannerSerializer;
    _locale_language?: any;
    slug_key?: string;
    warnings?: any;
    uid?: number;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    logo?: string;
    verified_by?: UserSerializer;
    synonyms?: string[];
};
type CreateUpdateBrandRequestSerializer = {
    _custom_json?: any;
    brand_tier?: string;
    logo: string;
    _locale_language?: any;
    description?: string;
    company_id?: number;
    name: string;
    banner?: BrandBannerSerializer;
    uid?: number;
    synonyms?: string[];
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
    _custom_json?: any;
    reject_reason?: string;
    created_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    business_country_info?: BusinessCountryInfo;
    stage?: string;
    company_type: string;
    verified_on?: string;
    created_on?: string;
    business_type: string;
    details?: CompanyDetails;
    notification_emails?: string[];
    verified_by?: UserSerializer;
    name?: string;
    uid?: number;
    market_channels?: string[];
    modified_by?: UserSerializer;
    modified_on?: string;
};
type CompanyBrandSerializer = {
    reject_reason?: string;
    created_by?: UserSerializer;
    stage?: string;
    brand?: GetBrandResponseSerializer;
    verified_on?: string;
    created_on?: string;
    company?: CompanySerializer;
    warnings?: any;
    verified_by?: UserSerializer;
    uid?: number;
    modified_by?: UserSerializer;
    modified_on?: string;
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
    start_date: string;
    end_date: string;
};
type HolidaySchemaSerializer = {
    title: string;
    date: HolidayDateSerializer;
    holiday_type: string;
};
type AddressSerializer = {
    address_type?: string;
    country?: string;
    landmark?: string;
    country_code?: string;
    city?: string;
    address2?: string;
    pincode?: number;
    address1?: string;
    state?: string;
    longitude: number;
    latitude: number;
};
type LocationSerializer = {
    _custom_json?: any;
    store_type?: string;
    documents?: Document[];
    timing?: LocationDayWiseSerializer[];
    holiday?: HolidaySchemaSerializer[];
    code: string;
    product_return_config?: ProductReturnConfigSerializer;
    display_name: string;
    stage?: string;
    manager?: LocationManagerSerializer;
    address: AddressSerializer;
    company: number;
    notification_emails?: string[];
    warnings?: any;
    contact_numbers?: SellerPhoneNumber[];
    name: string;
    uid?: number;
    gst_credentials?: InvoiceDetailsSerializer;
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
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    remove?: DisplayMetaDict;
    title?: string;
    subtitle?: string;
    auto?: DisplayMetaDict;
    description?: string;
    apply?: DisplayMetaDict;
};
type CouponSchedule = {
    next_schedule?: any[];
    end?: string;
    duration?: number;
    start?: string;
    cron?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Validity = {
    priority?: number;
};
type Rule = {
    value?: number;
    key?: number;
    min?: number;
    max?: number;
    discount_qty?: number;
};
type Validation = {
    app_id?: string[];
    user_registered_after?: string;
    anonymous?: boolean;
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
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
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
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type Restrictions = {
    user_groups?: number[];
    platforms?: string[];
    user_type?: string;
    payments?: any;
    bulk_bundle?: BulkBundleRestriction;
    uses?: UsesRestriction;
    ordering_stores?: number[];
    coupon_allowed?: boolean;
    post_order?: PostOrder;
    price_range?: PriceRange;
};
type RuleDefinition = {
    value_type: string;
    applicable_on: string;
    currency_code?: string;
    type: string;
    scope?: string[];
    calculate_on: string;
    is_exact?: boolean;
    auto_apply?: boolean;
};
type State = {
    is_archived?: boolean;
    is_display?: boolean;
    is_public?: boolean;
};
type CouponAdd = {
    action?: CouponAction;
    date_meta?: CouponDateMeta;
    type_slug: string;
    identifiers: Identifier;
    display_meta: DisplayMeta;
    _schedule?: CouponSchedule;
    ownership: Ownership;
    author?: CouponAuthor;
    tags?: string[];
    validity: Validity;
    rule: Rule[];
    validation?: Validation;
    restrictions?: Restrictions;
    rule_definition: RuleDefinition;
    state?: State;
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
    action?: CouponAction;
    date_meta?: CouponDateMeta;
    type_slug: string;
    identifiers: Identifier;
    display_meta: DisplayMeta;
    _schedule?: CouponSchedule;
    ownership: Ownership;
    author?: CouponAuthor;
    tags?: string[];
    validity: Validity;
    rule: Rule[];
    validation?: Validation;
    restrictions?: Restrictions;
    rule_definition: RuleDefinition;
    state?: State;
    code: string;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type DisplayMeta1 = {
    name?: string;
    description?: string;
    offer_label?: string;
    offer_text?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type CompareObject = {
    less_than_equals?: number;
    less_than?: number;
    greater_than?: number;
    equals?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    item_exclude_sku?: string[];
    item_exclude_category?: number[];
    item_sku?: string[];
    item_store?: number[];
    item_exclude_brand?: number[];
    item_exclude_company?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_category?: number[];
    cart_quantity?: CompareObject;
    item_id?: number[];
    available_zones?: string[];
    buy_rules?: string[];
    item_size?: string[];
    item_exclude_id?: number[];
    cart_unique_item_amount?: CompareObject;
    all_items?: boolean;
    item_brand?: number[];
    item_exclude_store?: number[];
    cart_total?: CompareObject;
    product_tags?: string[];
    item_company?: number[];
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type DiscountOffer = {
    discount_amount?: number;
    discount_price?: number;
    max_offer_quantity?: number;
    apportion_discount?: boolean;
    min_offer_quantity?: number;
    discount_percentage?: number;
    max_discount_amount?: number;
    max_usage_per_transaction?: number;
    partial_can_ret?: boolean;
    code?: string;
};
type DiscountRule = {
    buy_condition: string;
    discount_type: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
};
type UserRegistered = {
    end?: string;
    start?: string;
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
type Restrictions1 = {
    user_groups?: number[];
    platforms?: string[];
    anonymous_users?: boolean;
    order_quantity?: number;
    user_registered?: UserRegistered;
    payments?: PromotionPaymentModes[];
    uses: UsesRestriction1;
    post_order?: PostOrder1;
    user_id?: string[];
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionSchedule = {
    next_schedule?: any[];
    end?: string;
    duration?: number;
    start: string;
    cron?: string;
    published: boolean;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionListItem = {
    ownership: Ownership1;
    promotion_type: string;
    calculate_on?: string;
    mode: string;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    buy_rules: any;
    currency?: string;
    code?: string;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    promo_group: string;
    date_meta?: PromotionDateMeta;
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    visiblility?: Visibility;
    _custom_json?: any;
    application_id: string;
    stackable?: boolean;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    ownership: Ownership1;
    promotion_type: string;
    calculate_on?: string;
    mode: string;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    buy_rules: any;
    currency?: string;
    code?: string;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    promo_group: string;
    date_meta?: PromotionDateMeta;
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    visiblility?: Visibility;
    _custom_json?: any;
    application_id: string;
    stackable?: boolean;
};
type PromotionUpdate = {
    ownership: Ownership1;
    promotion_type: string;
    calculate_on?: string;
    mode: string;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    buy_rules: any;
    currency?: string;
    code?: string;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    promo_group: string;
    date_meta?: PromotionDateMeta;
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    visiblility?: Visibility;
    _custom_json?: any;
    application_id: string;
    stackable?: boolean;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    example?: string;
    is_hidden?: boolean;
    modified_on?: string;
    title?: string;
    subtitle?: string;
    type?: string;
    created_on?: string;
    entity_type?: string;
    description?: string;
    entity_slug?: string;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    applicable?: number;
    description?: string;
    total?: number;
};
type RawBreakup = {
    mrp_total?: number;
    total?: number;
    convenience_fee?: number;
    discount?: number;
    gst_charges?: number;
    vog?: number;
    coupon?: number;
    delivery_charge?: number;
    subtotal?: number;
    cod_charge?: number;
    fynd_cash?: number;
    you_saved?: number;
};
type DisplayBreakup = {
    currency_symbol?: string;
    message?: string[];
    value?: number;
    key?: string;
    currency_code?: string;
    display?: string;
};
type CouponBreakup = {
    message?: string;
    coupon_value?: number;
    value?: number;
    uid?: string;
    coupon_type?: string;
    type?: string;
    title?: string;
    max_discount_value?: number;
    minimum_cart_value?: number;
    is_applied?: boolean;
    description?: string;
    sub_title?: string;
    code?: string;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    query?: ActionQuery;
    type?: string;
    url?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type ProductImage = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    action?: ProductAction;
    net_quantity?: NetQuantity;
    categories?: CategoryInfo[];
    uid?: number;
    type?: string;
    slug?: string;
    images?: ProductImage[];
    brand?: BaseInfo;
    name?: string;
};
type ProductPrice = {
    currency_symbol?: string;
    effective?: number;
    add_on?: number;
    selling?: number;
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
type BasePrice = {
    currency_code?: string;
    effective?: number;
    marked?: number;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    extra_meta?: any;
    uid?: string;
    size?: string;
    type?: string;
    store?: BaseInfo;
    quantity?: number;
    price?: ArticlePriceInfo;
    _custom_json?: any;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    seller?: BaseInfo;
};
type FreeGiftItem = {
    item_name?: string;
    item_id?: number;
    item_slug?: string;
    item_brand_name?: string;
    item_price_details?: any;
    item_images_url?: string[];
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
    parent_item_identifier?: string;
    article_id?: string;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type DiscountRulesApp = {
    raw_offer?: any;
    matched_buy_rules?: string[];
    offer?: any;
    item_criteria?: any;
};
type AppliedPromotion = {
    promo_id?: string;
    mrp_promotion?: boolean;
    applied_free_articles?: AppliedFreeArticles[];
    offer_text?: string;
    promotion_name?: string;
    ownership?: Ownership2;
    promotion_type?: string;
    article_quantity?: number;
    discount_rules?: DiscountRulesApp[];
    promotion_group?: string;
    amount?: number;
    buy_rules?: BuyRules[];
};
type ProductAvailability = {
    deliverable?: boolean;
    other_store_quantity?: number;
    out_of_stock?: boolean;
    is_valid?: boolean;
    sizes?: string[];
};
type CartProductInfo = {
    message?: string;
    coupon_message?: string;
    identifiers: CartProductIdentifer;
    discount?: string;
    bulk_offer?: any;
    is_set?: boolean;
    product?: CartProduct;
    key?: string;
    quantity?: number;
    price?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    article?: ProductArticle;
    promotions_applied?: AppliedPromotion[];
    parent_item_identifiers?: any;
    price_per_unit?: ProductPriceInfo;
    availability?: ProductAvailability;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    message?: string;
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    country_phone_code?: string;
    state?: string;
    meta?: any;
    pincode?: number;
    landmark?: string;
    email?: string;
    country?: string;
    area_code: string;
    area_code_slug?: string;
    phone?: number;
    country_code?: string;
    address?: string;
    area?: string;
    name?: string;
    country_iso_code?: string;
    address_type?: string;
    city?: string;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
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
    items?: CartProductInfo[];
    message?: string;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type OpenApiOrderItem = {
    payment_methods: MultiTenderPaymentMethod[];
    amount_paid: number;
    extra_meta?: any;
    product_id: number;
    cashback_applied: number;
    discount: number;
    loyalty_discount?: number;
    meta?: CartItemMeta;
    delivery_charges: number;
    cod_charges: number;
    quantity?: number;
    price_effective: number;
    employee_discount?: number;
    coupon_effective_discount: number;
    price_marked: number;
    files?: OpenApiFiles[];
    size: string;
};
type OpenApiPlatformCheckoutReq = {
    coupon_value: number;
    coupon_code: string;
    employee_discount?: any;
    cart_value: number;
    order_id?: string;
    currency_code?: string;
    payment_mode?: string;
    affiliate_order_id?: string;
    cart_items: OpenApiOrderItem[];
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    cashback_applied: number;
    loyalty_discount?: number;
    gstin?: string;
    delivery_charges: number;
    coupon?: string;
    billing_address: ShippingAddress;
    cod_charges: number;
    shipping_address?: ShippingAddress;
    comment?: string;
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    success?: boolean;
    message?: string;
    order_id: string;
};
type AbandonedCart = {
    articles: any[];
    fynd_credits?: any;
    checkout_mode?: string;
    shipments?: any[];
    created_on: string;
    cart_value?: number;
    payment_mode?: string;
    meta?: any;
    uid: number;
    delivery_charges?: any;
    coupon?: any;
    merge_qty?: boolean;
    payments?: any;
    pick_up_customer_details?: any;
    expire_at: string;
    is_archive?: boolean;
    app_id?: string;
    buy_now?: boolean;
    bulk_coupon_discount?: number;
    promotion?: any;
    order_id?: string;
    _id: string;
    user_id: string;
    is_active?: boolean;
    payment_methods?: any[];
    cashback: any;
    discount?: number;
    gstin?: string;
    cod_charges?: any;
    is_default: boolean;
    last_modified: string;
    fc_index_map?: number[];
    comment?: string;
};
type AbandonedCartResponse = {
    items?: AbandonedCart[];
    message?: string;
    page?: Page;
    result?: any;
    success?: boolean;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    message?: string;
    id?: string;
    checkout_mode?: string;
    coupon_text?: string;
    buy_now?: boolean;
    gstin?: string;
    pan_no?: string;
    delivery_charge_info?: string;
    is_valid?: boolean;
    restrict_checkout?: boolean;
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
    comment?: string;
    currency?: CartCurrency;
    payment_selection_lock?: PaymentSelectionLock;
};
type AddProductCart = {
    seller_id?: number;
    extra_meta?: any;
    item_id?: number;
    store_id?: number;
    article_id?: string;
    quantity?: number;
    _custom_json?: any;
    pos?: boolean;
    product_group_tags?: string[];
    article_assignment?: any;
    parent_item_identifiers?: any;
    display?: string;
    item_size?: string;
};
type AddCartRequest = {
    items?: AddProductCart[];
    new_cart?: boolean;
};
type AddCartDetailResponse = {
    partial?: boolean;
    success?: boolean;
    message?: string;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    extra_meta?: any;
    item_id?: number;
    item_index?: number;
    identifiers: CartProductIdentifer;
    article_id?: string;
    quantity?: number;
    _custom_json?: any;
    parent_item_identifiers?: any;
    item_size?: string;
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
    id?: string;
    meta?: any;
};
type GetShareCartLinkResponse = {
    share_url?: string;
    token?: string;
};
type SharedCartDetails = {
    meta?: any;
    user?: any;
    token?: string;
    source?: any;
    created_on?: string;
};
type SharedCart = {
    items?: CartProductInfo[];
    id?: string;
    checkout_mode?: string;
    coupon_text?: string;
    cart_id?: number;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    message?: string;
    uid?: string;
    delivery_charge_info?: string;
    currency?: CartCurrency;
    buy_now?: boolean;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    gstin?: string;
    shared_cart_details?: SharedCartDetails;
    last_modified?: string;
    comment?: string;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    cart_id?: string;
    created_on?: string;
    cart_value?: string;
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
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    message?: string;
    id?: string;
    checkout_mode?: string;
    coupon_text?: string;
    buy_now?: boolean;
    gstin?: string;
    pan_no?: string;
    user?: UserInfo;
    delivery_charge_info?: string;
    is_valid?: boolean;
    restrict_checkout?: boolean;
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
    comment?: string;
    currency?: CartCurrency;
    payment_selection_lock?: PaymentSelectionLock;
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
    current?: number;
    has_previous?: boolean;
    has_next?: boolean;
};
type Coupon = {
    message?: string;
    coupon_value?: number;
    coupon_code?: string;
    is_applied?: boolean;
    coupon_type?: string;
    title?: string;
    max_discount_value?: number;
    minimum_cart_value?: number;
    is_applicable?: boolean;
    description?: string;
    expires_on?: string;
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
    id?: string;
    checkout_mode?: string;
    cart_id?: string;
    created_by_user_id?: string;
    area?: string;
    name?: string;
    tags?: string[];
    meta?: any;
    country?: string;
    google_map_point?: any;
    area_code?: string;
    geo_location?: GeoLocation;
    address?: string;
    city?: string;
    email?: string;
    area_code_slug?: string;
    address_type?: string;
    user_id?: string;
    is_active?: boolean;
    landmark?: string;
    phone?: string;
    country_code?: string;
    state?: string;
    is_default_address?: boolean;
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
    is_updated?: boolean;
    success?: boolean;
    id?: string;
    is_default_address?: boolean;
};
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
type PlatformSelectCartAddressRequest = {
    id?: string;
    billing_address_id?: string;
    checkout_mode?: string;
    cart_id?: string;
};
type ShipmentResponse = {
    order_type?: string;
    fulfillment_id?: number;
    items?: CartProductInfo[];
    shipments?: number;
    dp_options?: any;
    dp_id?: string;
    promise?: ShipmentPromise;
    box_type?: string;
    shipment_type?: string;
    fulfillment_type?: string;
};
type CartShipmentsResponse = {
    id?: string;
    checkout_mode?: string;
    coupon_text?: string;
    shipments?: ShipmentResponse[];
    cart_id?: number;
    error?: boolean;
    buy_now?: boolean;
    is_valid?: boolean;
    restrict_checkout?: boolean;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    breakup_values?: CartBreakup;
    message?: string;
    uid?: string;
    gstin?: string;
    delivery_charge_info?: string;
    last_modified?: string;
    comment?: string;
    currency?: CartCurrency;
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
    gstin?: string;
    pan_no?: string;
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
    first_name: string;
    user: string;
    last_name: string;
    employee_code?: string;
    _id: string;
};
type PlatformCartCheckoutDetailRequest = {
    id: string;
    delivery_address?: any;
    aggregator?: string;
    pos?: boolean;
    payment_mode: string;
    order_type: string;
    pick_at_store_uid?: number;
    meta?: any;
    files?: Files[];
    payment_params?: any;
    extra_meta?: any;
    payment_identifier?: string;
    address_id?: string;
    staff?: StaffCheckout;
    merchant_code?: string;
    payment_auto_confirm?: boolean;
    user_id: string;
    billing_address_id?: string;
    billing_address?: any;
    callback_url?: string;
    ordering_store?: number;
};
type CheckCart = {
    items?: CartProductInfo[];
    id?: string;
    store_code?: string;
    checkout_mode?: string;
    coupon_text?: string;
    cart_id?: number;
    cod_message?: string;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    user_type?: string;
    message?: string;
    uid?: string;
    delivery_charges?: number;
    delivery_charge_info?: string;
    currency?: CartCurrency;
    buy_now?: boolean;
    delivery_charge_order_value?: number;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    order_id?: string;
    success?: boolean;
    cod_available?: boolean;
    breakup_values?: CartBreakup;
    gstin?: string;
    error_message?: string;
    cod_charges?: number;
    store_emps?: any[];
    last_modified?: string;
    comment?: string;
};
type CartCheckoutResponse = {
    message?: string;
    data?: any;
    payment_confirm_url?: string;
    app_intercept_url?: string;
    callback_url?: string;
    order_id?: string;
    cart?: CheckCart;
    success?: boolean;
};
type CartDeliveryModesResponse = {
    available_modes?: string[];
    pickup_stores?: number[];
};
type PickupStoreDetail = {
    state?: string;
    id?: number;
    store_code?: string;
    email?: string;
    pincode?: number;
    landmark?: string;
    country?: string;
    uid?: number;
    area_code?: string;
    area_code_slug?: string;
    phone?: string;
    address?: string;
    area?: string;
    name?: string;
    address_type?: string;
    city?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    id?: string;
    payment_identifier?: string;
    merchant_code?: string;
    address_id?: string;
    aggregator_name?: string;
    payment_mode?: string;
};
type CouponValidity = {
    discount?: number;
    title?: string;
    display_message_en?: string;
    valid?: boolean;
    code?: string;
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
