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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, SessionListResponseInfo, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserEmails, UserPhoneNumbers, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutCustomer, PayoutMoreAttributes, PayoutAggregator, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, UserDataInfo, Prices, PaymentModeInfo, ShipmentStatus, PlatformItem, GSTDetailsData, BagUnit, ShipmentItemFulFillingStore, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, Dimensions, Meta, OrderingStoreDetails, OrderBagArticle, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, PlatformDeliveryAddress, Identifier, FinancialBreakup, BagStateMapper, CurrentStatus, OrderBrandName, BagGST, BagConfigs, OrderBags, DPDetailsData, UserDetailsData, InvoiceInfo, ShipmentPayments, FulfillingStore, CompanyDetails, BagStatusHistory, PDFLinks, AffiliateMeta, DebugInfo, LockData, BuyerDetails, EinvoiceInfo, ShipmentTimeStamp, Formatted, ShipmentMeta, AffiliateDetails, ShipmentStatusData, TrackingList, OrderDetailsData, PlatformShipment, ShipmentInfoResponse, PlatformUserDetails, TransactionData, BillingStaffDetails, OrderMeta, TaxDetails, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Weight, ReturnConfig, Article, B2BPODetails, BagMeta, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, StoreMeta, StoreAddress, Store, Dates, Attributes, Item, ArticleDetails, Brand, BagGSTDetails, BagReturnableCancelableStatus, AffiliateBagDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryStoreConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, UserData, OrderPriority, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, LineItem, ProcessingDates, Shipment, TaxInfo, BillingInfo, PaymentMethod, PaymentInfo, ShippingInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, DeleteResponse, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, ApplicationItemMOQ, ApplicationItemSEO, MetaFields, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, CollectionQuery, Media1, BannerImage, ImageUrls, GetCollectionDetailNest, GetCollectionListingResponse, CollectionBadge, UserInfo, CollectionSchedule, CollectionImage, SeoDetail, CollectionBanner, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, Price1, ProductListingPrice, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, CategoryMappingValues, CategoryMapping, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Logo, ProductPublished, NetQuantityResponse, Image, Trader, ReturnConfigResponse, Product, ProductListingResponse, CustomOrder, ProductPublish, TaxIdentifier, NetQuantity, TeaserTag, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, ManufacturerResponse, PriceMeta, BrandMeta, CompanyMeta, QuantityBase, Quantities, DimensionResponse, ReturnConfig1, Trader1, WeightResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ManufacturerResponse1, PriceArticle, BrandMeta1, ArticleStoreResponse, CompanyMeta1, Quantity, QuantitiesArticle, DimensionResponse1, ReturnConfig2, Trader2, WeightResponse1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, PageResponse, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer1, LocationIntegrationType, GetAddressSerializer, ProductReturnConfigSerializer, SellerPhoneNumber, LocationManagerSerializer, UserSerializer2, GetCompanySerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, CompanyTaxesSerializer, ContactDetails, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Ownership, DisplayMetaDict, DisplayMeta, RuleDefinition, State, CouponAction, Validity, CouponSchedule, CouponDateMeta, Validation, CouponAuthor, PostOrder, PriceRange, BulkBundleRestriction, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, Restrictions, Rule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionSchedule, PromotionAuthor, PromotionAction, PostOrder1, UserRegistered, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, DisplayMeta1, Ownership1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionDateMeta, Visibility, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ProductPrice, ProductPriceInfo, Ownership2, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, CartProductIdentifer, PromoMeta, ProductAvailability, ActionQuery, ProductAction, CategoryInfo, ProductImage, CartProduct, CartProductInfo, RawBreakup, LoyaltyPoints, CouponBreakup, DisplayBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, Files, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    items?: SessionListResponseInfo[];
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
type SessionListResponseInfo = {
    session_id?: string;
    user_agent?: string;
    ip?: string;
    domain?: string;
    expire_in?: string;
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
    mandate_amount?: number;
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
    app_id: string;
    success: boolean;
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
    is_active?: boolean;
    merchant_salt: string;
    key: string;
    config_type: string;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    is_active?: boolean;
    aggregator_name?: PaymentGatewayConfig;
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
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentApp = {
    logos?: PaymentModeLogo;
    package_name?: string;
    code?: string;
    display_name?: string;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    card_issuer?: string;
    nickname?: string;
    display_priority?: number;
    exp_year?: number;
    merchant_code?: string;
    intent_app?: IntentApp[];
    intent_flow?: boolean;
    display_name?: string;
    expired?: boolean;
    intent_app_error_dict_list?: IntentAppErrorList[];
    name?: string;
    fynd_vpa?: string;
    card_fingerprint?: string;
    remaining_limit?: number;
    logo_url?: PaymentModeLogo;
    aggregator_name: string;
    card_isin?: string;
    code?: string;
    cod_limit_per_order?: number;
    intent_app_error_list?: string[];
    retry_count?: number;
    card_type?: string;
    card_id?: string;
    cod_limit?: number;
    card_name?: string;
    card_brand?: string;
    timeout?: number;
    exp_month?: number;
    card_number?: string;
    card_reference?: string;
    card_token?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_brand_image?: string;
};
type RootPaymentMode = {
    display_priority: number;
    name: string;
    add_card_enabled?: boolean;
    save_card?: boolean;
    is_pay_by_card_pl?: boolean;
    display_name: string;
    anonymous_enable?: boolean;
    aggregator_name?: string;
    list?: PaymentModeList[];
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutCustomer = {
    mobile?: string;
    unique_external_id?: string;
    name?: string;
    id?: number;
};
type PayoutMoreAttributes = {
    bank_name?: string;
    country?: string;
    account_holder?: string;
    account_no?: string;
    branch_name?: string;
    account_type?: string;
    city?: string;
    state?: string;
    ifsc_code?: string;
};
type PayoutAggregator = {
    payout_details_id?: number;
    aggregator_id?: number;
    aggregator_fund_id?: number;
};
type Payout = {
    unique_transfer_no: string;
    customers: PayoutCustomer;
    is_active: boolean;
    is_default: boolean;
    more_attributes: PayoutMoreAttributes;
    transfer_type: string;
    payouts_aggregators?: PayoutAggregator[];
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    account_type: string;
    bank_name?: string;
    country?: string;
    account_no?: string;
    branch_name?: string;
    account_holder?: string;
    city?: string;
    pincode?: number;
    state?: string;
    ifsc_code: string;
};
type PayoutRequest = {
    users: any;
    is_active: boolean;
    aggregator: string;
    bank_details: PayoutBankDetails;
    transfer_type: string;
    unique_external_id: string;
};
type PayoutResponse = {
    unique_transfer_no: string;
    created: boolean;
    users: any;
    is_active: boolean;
    success: boolean;
    payouts: any;
    aggregator: string;
    bank_details: any;
    transfer_type: string;
    payment_status: string;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    success: boolean;
    is_active: boolean;
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
    success: boolean;
    data?: any;
    is_verified_flag?: boolean;
    message: string;
};
type NotFoundResourceError = {
    success: boolean;
    description: string;
    code: string;
};
type BankDetailsForOTP = {
    bank_name: string;
    account_no: string;
    branch_name: string;
    account_holder: string;
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
    transfer_mode: string;
    delights_user_name?: string;
    display_name: string;
    beneficiary_id: string;
    mobile?: string;
    subtitle: string;
    id: number;
    is_active: boolean;
    address: string;
    account_no: string;
    ifsc_code: string;
    title: string;
    bank_name: string;
    comment?: string;
    branch_name?: string;
    modified_on: string;
    email: string;
    account_holder: string;
    created_on: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    order_id?: string;
    payment_gateway?: string;
    payment_id?: string;
    current_status?: string;
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
    success: boolean;
    order_id: string;
    message: string;
};
type PlatformPaymentOptions = {
    cod_charges?: number;
    enabled: boolean;
    callback_url?: any;
    anonymous_cod?: boolean;
    mode_of_payment: string;
    cod_amount_limit?: number;
    methods: any;
    source: string;
    payment_selection_lock?: any;
};
type PlatfromPaymentConfig = {
    success: boolean;
    data: PlatformPaymentOptions;
    message: string;
};
type UpdatePlatformPaymentConfig = {
    cod_charges?: number;
    anonymous_cod?: boolean;
    cod_amount_limit?: number;
    methods: any;
    payment_selection_lock?: any;
};
type CODdata = {
    is_active: boolean;
    user_id: string;
    limit: number;
    remaining_limit: number;
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
    success: boolean;
    message: string;
};
type EdcModelData = {
    aggregator_id: number;
    aggregator: string;
    models: string[];
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
    device_tag?: string;
    edc_device_serial_no: string;
    store_id: number;
    terminal_serial_no: string;
    aggregator_id: number;
    edc_model: string;
};
type EdcDevice = {
    terminal_unique_identifier: string;
    device_tag: string;
    is_active: boolean;
    edc_device_serial_no: string;
    terminal_serial_no: string;
    store_id: number;
    aggregator_id: number;
    edc_model?: string;
    application_id: string;
    merchant_store_pos_code?: string;
    aggregator_name?: string;
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
    is_active?: string;
    edc_device_serial_no?: string;
    store_id?: number;
    edc_model?: string;
    aggregator_id?: number;
    merchant_store_pos_code?: string;
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
    device_id?: string;
    vpa?: string;
    customer_id: string;
    method: string;
    timeout?: number;
    merchant_order_id: string;
    razorpay_payment_id?: string;
    contact: string;
    aggregator: string;
    order_id: string;
    email: string;
    amount: number;
    currency: string;
};
type PaymentInitializationResponse = {
    device_id?: string;
    vpa?: string;
    upi_poll_url?: string;
    aggregator_order_id?: string;
    success: boolean;
    customer_id?: string;
    virtual_id?: string;
    method: string;
    timeout?: number;
    merchant_order_id: string;
    polling_url: string;
    razorpay_payment_id?: string;
    status?: string;
    aggregator: string;
    bqr_image?: string;
    amount?: number;
    currency?: string;
};
type PaymentStatusUpdateRequest = {
    device_id?: string;
    vpa?: string;
    customer_id: string;
    method: string;
    merchant_order_id: string;
    contact: string;
    status: string;
    aggregator: string;
    order_id: string;
    email: string;
    amount: number;
    currency: string;
};
type PaymentStatusUpdateResponse = {
    success?: boolean;
    redirect_url?: string;
    status: string;
    aggregator_name: string;
    retry: boolean;
};
type ResendOrCancelPaymentRequest = {
    device_id?: string;
    request_type: string;
    order_id: string;
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
    type: string;
    options?: FilterInfoOption[];
    text: string;
    value: string;
};
type UserDataInfo = {
    email?: string;
    gender?: string;
    last_name?: string;
    mobile?: string;
    uid?: number;
    name?: string;
    is_anonymous_user?: boolean;
    avis_user_id?: string;
    first_name?: string;
};
type Prices = {
    cashback_applied?: number;
    tax_collected_at_source?: number;
    amount_paid?: number;
    coupon_value?: number;
    delivery_charge?: number;
    refund_credit?: number;
    price_effective?: number;
    amount_paid_roundoff?: number;
    refund_amount?: number;
    price_marked?: number;
    discount?: number;
    promotion_effective_discount?: number;
    cashback?: number;
    fynd_credits?: number;
    cod_charges?: number;
    value_of_good?: number;
    transfer_price?: number;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentStatus = {
    status: string;
    ops_status: string;
    title: string;
    actual_status: string;
    hex_code: string;
};
type PlatformItem = {
    can_cancel?: boolean;
    images?: string[];
    can_return?: boolean;
    department_id?: number;
    color?: string;
    l3_category?: number;
    l1_category?: string[];
    id?: number;
    name?: string;
    code?: string;
    l3_category_name?: string;
    size?: string;
    image?: string[];
};
type GSTDetailsData = {
    gst_fee: number;
    tax_collected_at_source: number;
    gstin_code: string;
    brand_calculated_amount: number;
    value_of_good: number;
};
type BagUnit = {
    can_cancel?: boolean;
    can_return?: boolean;
    prices?: Prices;
    status: any;
    total_shipment_bags: number;
    bag_id: number;
    item_quantity: number;
    shipment_id: string;
    ordering_channel: string;
    item?: PlatformItem;
    gst?: GSTDetailsData;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentItem = {
    payment_methods?: any;
    sla?: any;
    user?: UserDataInfo;
    prices?: Prices;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_centre: string;
    id: string;
    shipment_status?: ShipmentStatus;
    total_bags_count: number;
    shipment_created_at: string;
    company?: any;
    bags?: BagUnit[];
    created_at: string;
    application?: any;
    shipment_id?: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    total_shipments_in_order: number;
    channel?: any;
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
type Dimensions = {
    is_default?: boolean;
    length?: number;
    width?: number;
    height?: number;
    unit?: string;
};
type Meta = {
    dimension?: Dimensions;
};
type OrderingStoreDetails = {
    country: string;
    city: string;
    ordering_store_id: number;
    meta: any;
    pincode: string;
    store_name: string;
    phone: string;
    code: string;
    contact_person: string;
    state: string;
    address: string;
};
type OrderBagArticle = {
    return_config?: any;
    uid?: string;
    identifiers?: any;
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
    promotion_name?: string;
    promotion_type?: string;
    article_quantity?: number;
    mrp_promotion?: boolean;
    amount?: number;
    promo_id?: string;
    discount_rules?: DiscountRules[];
};
type PlatformDeliveryAddress = {
    email?: string;
    country?: string;
    city?: string;
    landmark?: string;
    updated_at?: string;
    address1?: string;
    address_category?: string;
    area?: string;
    address_type?: string;
    pincode?: string;
    longitude?: number;
    version?: string;
    phone?: string;
    latitude?: number;
    contact_person?: string;
    address2?: string;
    created_at?: string;
    state?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    gst_tax_percentage: number;
    gst_fee: number;
    tax_collected_at_source?: number;
    amount_paid: number;
    coupon_value: number;
    amount_paid_roundoff?: number;
    gst_tag: string;
    cod_charges: number;
    delivery_charge: number;
    identifiers: Identifier;
    promotion_effective_discount: number;
    total_units: number;
    cashback_applied: number;
    price_effective: number;
    coupon_effective_discount: number;
    item_name: string;
    size: string;
    added_to_fynd_cash: boolean;
    refund_credit: number;
    hsn_code: string;
    discount: number;
    price_marked: number;
    cashback: number;
    fynd_credits: number;
    brand_calculated_amount: number;
    value_of_good: number;
    transfer_price: number;
};
type BagStateMapper = {
    is_active?: boolean;
    app_display_name?: string;
    journey_type: string;
    notify_customer?: boolean;
    name: string;
    bs_id: number;
    state_type: string;
    display_name: string;
    app_state_name?: string;
    app_facing?: boolean;
};
type CurrentStatus = {
    bag_state_mapper?: BagStateMapper;
    status?: string;
    delivery_partner_id?: number;
    kafka_sync?: boolean;
    store_id?: number;
    bag_id?: number;
    current_status_id: number;
    delivery_awb_number?: string;
    state_type?: string;
    created_at?: string;
    updated_at?: string;
    shipment_id?: string;
    state_id?: number;
};
type OrderBrandName = {
    modified_on?: string;
    created_on: string;
    brand_name: string;
    id: number;
    company: string;
    logo: string;
};
type BagGST = {
    gst_tax_percentage?: number;
    gst_fee?: number;
    is_default_hsn_code?: boolean;
    gst_tag?: string;
    hsn_code?: string;
    gstin_code?: string;
    brand_calculated_amount?: number;
    value_of_good?: number;
};
type BagConfigs = {
    is_active: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    allow_force_return: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
};
type OrderBags = {
    article?: OrderBagArticle;
    seller_identifier?: string;
    applied_promos?: AppliedPromos[];
    delivery_address?: PlatformDeliveryAddress;
    identifier?: string;
    entity_type?: string;
    financial_breakup?: FinancialBreakup;
    can_cancel?: boolean;
    parent_promo_bags?: any;
    current_status?: CurrentStatus;
    display_name?: string;
    item?: PlatformItem;
    can_return?: boolean;
    bag_id: number;
    line_number?: number;
    brand?: OrderBrandName;
    gst_details?: BagGST;
    prices?: Prices;
    bag_configs?: BagConfigs;
    quantity?: number;
};
type DPDetailsData = {
    country?: string;
    gst_tag?: string;
    track_url?: string;
    id?: number;
    name?: string;
    awb_no?: string;
    eway_bill_id?: string;
    pincode?: string;
};
type UserDetailsData = {
    email?: string;
    country: string;
    city: string;
    name: string;
    pincode: string;
    phone: string;
    state: string;
    address: string;
};
type InvoiceInfo = {
    invoice_url?: string;
    credit_note_id?: string;
    label_url?: string;
    updated_date?: string;
    store_invoice_id?: string;
};
type ShipmentPayments = {
    mode?: string;
    logo?: string;
    source?: string;
};
type FulfillingStore = {
    country: string;
    city: string;
    fulfillment_channel: string;
    id: number;
    pincode: string;
    meta: any;
    store_name: string;
    phone: string;
    code: string;
    contact_person: string;
    state: string;
    address: string;
};
type CompanyDetails = {
    company_name?: string;
    company_cin?: string;
    address?: any;
    company_id?: number;
};
type BagStatusHistory = {
    bag_state_mapper?: BagStateMapper;
    app_display_name?: string;
    status: string;
    forward?: boolean;
    delivery_partner_id?: number;
    display_name?: string;
    bsh_id?: number;
    store_id?: number;
    kafka_sync?: boolean;
    bag_id?: number;
    delivery_awb_number?: string;
    state_type?: string;
    created_at?: string;
    updated_at?: string;
    shipment_id?: string;
    state_id?: number;
    reasons?: any[];
};
type PDFLinks = {
    invoice_pos?: string;
    invoice_type: string;
    label_a6?: string;
    b2b?: string;
    label_type: string;
    delivery_challan_a4?: string;
    invoice?: string;
    invoice_a6?: string;
    credit_note_url?: string;
    label_pos?: string;
    label_a4?: string;
    po_invoice?: string;
    label?: string;
    invoice_a4?: string;
};
type AffiliateMeta = {
    channel_shipment_id?: string;
    loyalty_discount?: number;
    quantity?: number;
    due_date?: string;
    is_priority?: boolean;
    size_level_total_qty?: number;
    channel_order_id?: string;
    employee_discount?: number;
    order_item_id?: string;
    coupon_code?: string;
    box_type?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type LockData = {
    locked?: boolean;
    lock_message?: string;
    mto?: boolean;
};
type BuyerDetails = {
    city: string;
    gstin: string;
    name: string;
    pincode: number;
    ajio_site_id?: string;
    state: string;
    address: string;
};
type EinvoiceInfo = {
    credit_note?: any;
    invoice?: any;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type ShipmentMeta = {
    return_affiliate_shipment_id?: string;
    packaging_name?: string;
    weight: number;
    dp_id?: string;
    debug_info?: DebugInfo;
    fulfilment_priority_text?: string;
    external?: any;
    forward_affiliate_order_id?: string;
    po_number?: string;
    return_affiliate_order_id?: string;
    return_awb_number?: string;
    store_invoice_updated_date?: string;
    shipment_weight?: number;
    lock_data?: LockData;
    b2b_buyer_details?: BuyerDetails;
    return_store_node?: number;
    dp_sort_key?: string;
    shipment_volumetric_weight?: number;
    auto_trigger_dp_assignment_acf: boolean;
    bag_weight?: any;
    forward_affiliate_shipment_id?: string;
    b2c_buyer_details?: any;
    return_details?: any;
    einvoice_info?: EinvoiceInfo;
    order_type?: string;
    marketplace_store_id?: string;
    awb_number?: string;
    timestamp?: ShipmentTimeStamp;
    ewaybill_info?: any;
    box_type?: string;
    due_date?: string;
    assign_dp_from_sb?: boolean;
    dp_options?: any;
    formatted?: Formatted;
    dp_name?: string;
    same_store_available: boolean;
};
type AffiliateDetails = {
    affiliate_shipment_id: string;
    affiliate_bag_id: string;
    pdf_links?: PDFLinks;
    affiliate_order_id: string;
    affiliate_store_id: string;
    ad_id?: string;
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
    company_affiliate_tag?: string;
    shipment_meta: ShipmentMeta;
};
type ShipmentStatusData = {
    status?: string;
    id?: number;
    bag_list?: string[];
    created_at?: string;
    shipment_id?: string;
};
type TrackingList = {
    is_passed?: boolean;
    status: string;
    time?: string;
    text: string;
    is_current?: boolean;
};
type OrderDetailsData = {
    fynd_order_id: string;
    order_date?: string;
    tax_details?: any;
    order_value?: string;
    source?: string;
    affiliate_id?: string;
    cod_charges?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
};
type PlatformShipment = {
    user_agent?: string;
    journey_type?: string;
    total_items?: number;
    meta?: Meta;
    shipment_status?: string;
    ordering_store?: OrderingStoreDetails;
    lock_status?: boolean;
    bags?: OrderBags[];
    dp_details?: DPDetailsData;
    total_bags?: number;
    user?: UserDataInfo;
    platform_logo?: string;
    delivery_details?: UserDetailsData;
    forward_shipment_id?: string;
    invoice?: InvoiceInfo;
    delivery_slot?: any;
    payments?: ShipmentPayments;
    packaging_type?: string;
    priority_text?: string;
    vertical?: string;
    shipment_id: string;
    fulfilling_store?: FulfillingStore;
    company_details?: CompanyDetails;
    shipment_quantity?: number;
    bag_status_history?: BagStatusHistory[];
    shipment_images?: string[];
    operational_status?: string;
    affiliate_details?: AffiliateDetails;
    payment_methods?: any;
    gst_details?: GSTDetailsData;
    prices?: Prices;
    custom_meta?: any[];
    status?: ShipmentStatusData;
    coupon?: any;
    invoice_id?: string;
    enable_dp_tracking?: boolean;
    billing_details?: UserDetailsData;
    tracking_list?: TrackingList[];
    payment_mode?: string;
    picked_date?: string;
    order?: OrderDetailsData;
    fulfilment_priority?: number;
};
type ShipmentInfoResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    message?: string;
};
type PlatformUserDetails = {
    platform_user_id?: string;
    platform_user_last_name?: string;
    platform_user_first_name?: string;
};
type TransactionData = {
    transaction_id?: string;
    payment_id?: string;
    unique_reference_number?: string;
    status?: string;
    amount_paid?: string;
    entity?: string;
    currency?: string;
    terminal_id?: string;
};
type BillingStaffDetails = {
    first_name?: string;
    staff_id?: number;
    last_name?: string;
    user?: string;
};
type OrderMeta = {
    cart_id?: number;
    customer_note?: string;
    staff?: any;
    comment?: string;
    ordering_store?: number;
    order_child_entities?: string[];
    platform_user_details?: PlatformUserDetails;
    payment_type?: string;
    employee_id?: number;
    transaction_data?: TransactionData;
    company_logo?: string;
    order_type?: string;
    order_platform?: string;
    extra_meta?: any;
    order_tags?: any[];
    currency_symbol?: string;
    mongo_cart_id?: number;
    billing_staff_details?: BillingStaffDetails;
    files?: any[];
};
type TaxDetails = {
    pan_no?: string;
    gstin?: string;
};
type OrderDict = {
    payment_methods?: any;
    fynd_order_id: string;
    prices?: Prices;
    order_date: string;
    meta?: OrderMeta;
    tax_details?: TaxDetails;
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    success: boolean;
    shipments?: PlatformShipment[];
};
type SubLane = {
    index?: number;
    text?: string;
    total_items?: number;
    value?: string;
    actions?: any[];
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
    display?: string;
    value?: string;
    name?: string;
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformOrderItems = {
    breakup_values?: PlatformBreakupValues[];
    total_order_value?: number;
    meta?: any;
    shipments?: PlatformShipment[];
    user_info?: UserDataInfo;
    payment_mode?: string;
    order_value?: number;
    order_id?: string;
    channel?: PlatformChannel;
    order_created_time?: string;
};
type OrderListingResponse = {
    lane?: string;
    page?: Page;
    total_count?: number;
    message?: string;
    items?: PlatformOrderItems[];
    success?: boolean;
};
type Options = {
    text?: string;
    value?: number;
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
    last_location_recieved_at?: string;
    updated_time?: string;
    status?: string;
    shipment_type?: string;
    meta?: any;
    awb?: string;
    account_name?: string;
    updated_at?: string;
    raw_status?: string;
    reason?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    unfulfilled?: FiltersInfo[];
    filters?: FiltersInfo[];
    returned?: FiltersInfo[];
    processed?: FiltersInfo[];
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
    report_type?: string;
    status?: string;
    report_created_at?: string;
    s3_key?: string;
    request_details?: any;
    display_name?: string;
    report_id?: string;
    report_requested_at?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    article_id?: string;
    company_id?: string;
    item_id?: string;
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
    trace_id?: string;
    error?: NestedErrorSchemaDataSet[];
    data?: any[];
    success?: boolean;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    store_code?: string;
    label?: any;
    do_invoice_label_generated: boolean;
    invoice?: any;
    store_id?: string;
    batch_id: string;
    store_name?: string;
    data?: any;
    invoice_status?: string;
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
    tags?: string[];
    upload?: FileUploadResponse;
    file_path?: string;
    file_name?: string;
    operation?: string;
    content_type?: string;
    method?: string;
    cdn?: URL;
    size?: number;
    namespace?: string;
};
type BulkListingPage = {
    has_next?: boolean;
    current?: number;
    has_previous?: boolean;
    total?: number;
    type?: string;
    size?: number;
};
type bulkListingData = {
    file_name?: string;
    id?: string;
    batch_id?: string;
    total?: number;
    failed?: number;
    processing?: number;
    excel_url?: string;
    store_code?: string;
    successful?: number;
    store_id?: number;
    company_id?: number;
    failed_shipments?: any[];
    processing_shipments?: string[];
    successful_shipments?: any[];
    store_name?: string;
    status?: string;
    user_name?: string;
    user_id?: string;
    uploaded_on?: string;
};
type BulkListingResponse = {
    page?: BulkListingPage;
    success?: boolean;
    error?: string;
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
    message?: string;
    status?: boolean;
};
type BulkActionDetailsDataField = {
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
    failed_shipments_count?: number;
    company_id?: string;
    batch_id?: string;
    total_shipments_count?: number;
    successful_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    uploaded_by?: string;
    status?: boolean;
    failed_records?: string[];
    message?: string;
    user_id?: string;
    error?: string[];
    data?: BulkActionDetailsDataField[];
    success?: string;
    uploaded_on?: string;
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
    esp_modified?: any;
    raw_meta?: any;
    a_set?: any;
    dimensions?: Dimensions;
    weight?: Weight;
    return_config?: ReturnConfig;
    seller_identifier: string;
    _id: string;
    is_set?: boolean;
    identifiers: Identifier;
    uid: string;
    code?: string;
    size: string;
    child_details?: any;
};
type B2BPODetails = {
    po_line_amount?: number;
    total_gst_percentage?: number;
    item_base_price?: number;
    docker_number?: string;
    po_tax_amount?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type EInvoicePortalDetails = {
    password?: string;
    username?: string;
    user?: string;
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
    url?: string;
    verified: boolean;
    value: string;
    ds_type: string;
    legal_name: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    product_return_config?: any;
    additional_contact_details?: any;
    notification_emails?: string[];
    stage: string;
    ewaybill_portal_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    gst_credentials: StoreGstCredentials;
    gst_number?: string;
    timing?: any[];
    display_name: string;
    documents?: StoreDocuments;
};
type StoreAddress = {
    city: string;
    address_type: string;
    phone: string;
    latitude: number;
    updated_at: string;
    email?: string;
    landmark?: string;
    address1: string;
    longitude: number;
    pincode: number;
    version?: string;
    address2?: string;
    created_at: string;
    country: string;
    address_category: string;
    area?: string;
    country_code: string;
    contact_person: string;
    state: string;
};
type Store = {
    location_type: string;
    city: string;
    parent_store_id?: number;
    meta: StoreMeta;
    name: string;
    phone: number;
    latitude: number;
    updated_at?: string;
    address1: string;
    packaging_material_count?: number;
    longitude: number;
    pincode: string;
    mall_name?: string;
    address2?: string;
    s_id: string;
    created_at: string;
    mall_area?: string;
    is_enabled_for_recon?: boolean;
    store_email: string;
    vat_no?: string;
    company_id: number;
    country: string;
    fulfillment_channel: string;
    order_integration_id?: string;
    is_archived?: boolean;
    is_active?: boolean;
    login_username: string;
    alohomora_user_id?: number;
    brand_store_tags?: string[];
    store_address_json?: StoreAddress;
    code?: string;
    contact_person: string;
    store_active_from?: string;
    brand_id?: any;
    state: string;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type Attributes = {
    gender?: string[];
    primary_color_hex?: string;
    marketer_name?: string;
    primary_color?: string;
    brand_name?: string;
    marketer_address?: string;
    essential?: string;
    name?: string;
    primary_material?: string;
};
type Item = {
    department_id?: number;
    meta?: any;
    name: string;
    l3_category_name?: string;
    can_cancel?: boolean;
    attributes: Attributes;
    slug_key: string;
    webstore_product_url?: string;
    gender?: string;
    can_return?: boolean;
    l1_category_id?: number;
    l2_category?: string[];
    size: string;
    image: string[];
    brand: string;
    l2_category_id?: number;
    item_id: number;
    color?: string;
    l3_category?: number;
    l1_category?: string[];
    code?: string;
    brand_id: number;
    last_updated_at?: string;
    branch_url?: string;
};
type ArticleDetails = {
    status?: any;
};
type Brand = {
    modified_on?: number;
    created_on?: number;
    credit_note_expiry_days?: number;
    brand_name: string;
    invoice_prefix?: string;
    start_date?: string;
    company: string;
    credit_note_allowed?: boolean;
    script_last_ran?: string;
    brand_id: number;
    logo?: string;
    pickup_location?: string;
    is_virtual_invoice?: boolean;
};
type BagGSTDetails = {
    gst_tax_percentage: number;
    hsn_code_id: string;
    gst_fee: number;
    is_default_hsn_code?: boolean;
    tax_collected_at_source: number;
    igst_tax_percentage: number;
    sgst_tax_percentage: number;
    gst_tag: string;
    hsn_code: string;
    gstin_code?: string;
    sgst_gst_fee: string;
    cgst_gst_fee: string;
    igst_gst_fee: string;
    brand_calculated_amount: number;
    cgst_tax_percentage: number;
    value_of_good: number;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    affiliate_bag_id: string;
    affiliate_order_id: string;
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
};
type BagDetailsPlatformResponse = {
    tags?: string[];
    article: Article;
    journey_type: string;
    seller_identifier?: string;
    applied_promos?: any[];
    meta?: BagMeta;
    ordering_store?: Store;
    identifier?: string;
    entity_type?: string;
    no_of_bags_order?: number;
    financial_breakup: FinancialBreakup[];
    restore_coupon?: boolean;
    quantity?: number;
    dates?: Dates;
    parent_promo_bags?: any;
    current_status: BagStatusHistory;
    qc_required?: any;
    display_name?: string;
    bag_status: BagStatusHistory[];
    item: Item;
    b_id: number;
    article_details?: ArticleDetails;
    original_bag_list?: number[];
    order_integration_id?: string;
    current_operational_status: BagStatusHistory;
    shipment_id?: string;
    affiliate_details?: AffiliateDetails;
    bag_status_history?: BagStatusHistory;
    line_number?: number;
    operational_status?: string;
    brand: Brand;
    gst_details: BagGSTDetails;
    prices: Prices;
    status: BagReturnableCancelableStatus;
    bag_update_time?: number;
    b_type?: string;
    affiliate_bag_details: AffiliateBagDetails;
    restore_promos?: any;
    reasons?: any[];
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    has_next: boolean;
    item_total: number;
    current: number;
    page_type: string;
    size: number;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
};
type GeneratePosOrderReceiptResponse = {
    success?: boolean;
    invoice_receipt?: string;
    order_id?: string;
    payment_receipt?: string;
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
    mongo_article_id?: string;
    affiliate_id?: string;
    store_id: number;
    affiliate_order_id?: string;
    bag_id?: number;
    reason_ids?: number[];
    affiliate_bag_id?: string;
    item_id?: string;
    fynd_order_id?: string;
    set_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    id?: string;
    affiliate_order_id?: string;
    reason_text: string;
    affiliate_bag_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    entity_type: string;
    action_type: string;
    entities: Entities[];
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    affiliate_bag_id?: string;
    is_locked?: boolean;
    affiliate_order_id?: string;
    bag_id?: number;
};
type CheckResponse = {
    shipment_id?: string;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    lock_status?: boolean;
    is_bag_locked?: boolean;
    original_filter?: OriginalFilter;
    is_shipment_locked?: boolean;
    bags?: Bags[];
    status?: string;
};
type UpdateShipmentLockResponse = {
    message?: string;
    success?: boolean;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    description?: string;
    company_id?: number;
    logo_url?: string;
    platform_name?: string;
    id: number;
    title?: string;
    from_datetime?: string;
    to_datetime?: string;
    created_at?: string;
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
    products?: Products[];
    identifier: string;
    reasons?: ReasonsData;
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
type UpdateShipmentStatusRequest = {
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
    unlock_before_transition?: boolean;
    force_transition?: boolean;
};
type ShipmentsResponse = {
    identifier?: string;
    stack_trace?: string;
    code?: string;
    final_state?: any;
    message?: string;
    meta?: any;
    exception?: string;
    status?: number;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    inventory?: AffiliateInventoryStoreConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    description?: string;
    name: string;
    owner: string;
    token: string;
    id: string;
    secret: string;
    updated_at: string;
    meta?: AffiliateAppConfigMeta[];
    created_at: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    config?: AffiliateConfig;
    token: string;
    id: string;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    bag_end_state?: string;
    article_lookup?: string;
    store_lookup?: string;
    affiliate: Affiliate;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    create_user?: boolean;
};
type OrderUser = {
    email: string;
    state: string;
    address2?: string;
    city: string;
    address1?: string;
    mobile: number;
    phone: number;
    last_name: string;
    first_name: string;
    country: string;
    pincode: string;
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
type ArticleDetails1 = {
    attributes: any;
    category: any;
    dimension: any;
    quantity: number;
    weight: any;
    _id: string;
    brand_id: number;
};
type ShipmentDetails = {
    dp_id?: number;
    affiliate_shipment_id: string;
    shipments: number;
    fulfillment_id: number;
    articles: ArticleDetails1[];
    meta?: any;
    box_type?: string;
};
type ShipmentConfig = {
    identifier: string;
    journey: string;
    action: string;
    source: string;
    payment_mode: string;
    shipment: ShipmentDetails[];
    location_details?: LocationDetails;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    identifier: any;
    company_id: number;
    price_effective: number;
    affiliate_meta: any;
    _id: string;
    transfer_price: number;
    amount_paid: number;
    avl_qty: number;
    item_id: number;
    fynd_store_id: string;
    unit_price: number;
    hsn_code_id: string;
    modified_on: string;
    delivery_charge: number;
    pdf_links?: MarketPlacePdf;
    item_size: string;
    seller_identifier: string;
    store_id: number;
    discount: number;
    affiliate_store_id: string;
    price_marked: number;
    sku: string;
    quantity: number;
};
type OrderInfo = {
    shipping_address: OrderUser;
    user: UserData;
    items: any;
    delivery_charges: number;
    order_priority?: OrderPriority;
    billing_address: OrderUser;
    affiliate_order_id?: string;
    payment?: any;
    shipment?: ShipmentData;
    coupon?: string;
    bags: AffiliateBag[];
    payment_mode: string;
    discount: number;
    cod_charges: number;
    order_value: number;
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
    display_text: string;
    id: number;
    slug: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    createdat: string;
    user: string;
    l2_detail?: string;
    l1_detail?: string;
    ticket_id?: string;
    bag_id?: number;
    message: string;
    type: string;
    ticket_url?: string;
    l3_detail?: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type PostHistoryFilters = {
    identifier?: string;
    shipment_id: string;
    line_number?: string;
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
    shipment_id: number;
    phone_number: number;
    amount_paid: number;
    customer_name: string;
    country_code: string;
    order_id: string;
    message: string;
    payment_mode: string;
};
type SendSmsPayload = {
    slug: string;
    data?: SmsDataPayload;
    bag_id: number;
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
    id: number;
    meta: Meta1;
    bag_list?: number[];
    remarks?: string;
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
    qc_required: string;
    order_type: string;
    dp_id: number;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type Tax = {
    amount: any;
    breakup?: any[];
    rate: number;
    name: string;
};
type Charge = {
    name: string;
    code?: string;
    amount: any;
    tax?: Tax;
    type: string;
};
type LineItem = {
    quantity?: number;
    charges?: Charge[];
    meta?: any;
    external_line_id?: string;
    seller_identifier: string;
    custom_messasge?: string;
};
type ProcessingDates = {
    dispatch_by_date?: string;
    dispatch_after_date?: string;
    pack_by_date?: string;
    confirm_by_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
};
type Shipment = {
    line_items: LineItem[];
    meta?: any;
    priority?: number;
    external_shipment_id?: string;
    location_id: number;
    processing_dates?: ProcessingDates;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type BillingInfo = {
    address2?: string;
    alternate_mobile_number?: string;
    address1: string;
    country_code?: string;
    floor_no?: string;
    customer_code?: string;
    pincode: string;
    state: string;
    middle_name?: string;
    first_name: string;
    last_name?: string;
    state_code?: string;
    gender?: string;
    alternate_email?: string;
    city: string;
    primary_email: string;
    title?: string;
    country: string;
    house_no?: string;
    primary_mobile_number: string;
    external_customer_code?: string;
};
type PaymentMethod = {
    refund_by: string;
    name: string;
    collect_by: string;
    transaction_data?: any;
    mode: string;
    amount: number;
    meta?: any;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type ShippingInfo = {
    address2?: string;
    alternate_mobile_number?: string;
    address1: string;
    country_code?: string;
    floor_no?: string;
    customer_code?: string;
    pincode: string;
    state: string;
    landmark?: string;
    middle_name?: string;
    first_name: string;
    geo_location?: any;
    slot?: any[];
    last_name?: string;
    state_code?: string;
    gender?: string;
    address_type?: string;
    alternate_email?: string;
    city: string;
    primary_email: string;
    shipping_type?: string;
    title?: string;
    country: string;
    house_no?: string;
    primary_mobile_number: string;
    external_customer_code?: string;
};
type CreateOrderAPI = {
    shipments: Shipment[];
    tax_info?: TaxInfo;
    external_creation_date?: string;
    charges?: Charge[];
    billing_info: BillingInfo;
    meta?: any;
    currency_info?: any;
    payment_info: PaymentInfo;
    shipping_info: ShippingInfo;
    external_order_id?: string;
};
type CreateOrderErrorReponse = {
    stack_trace?: string;
    code?: string;
    request_id?: string;
    info?: any;
    message: string;
    meta?: string;
    exception?: string;
    status: number;
};
type DpConfiguration = {
    shipping_by?: string;
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
type CreateChannelConfig = {
    dp_configuration?: DpConfiguration;
    logo_url?: any;
    location_reassignment?: boolean;
    shipment_assignment?: string;
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
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
    end_date: string;
    order_details?: FyndOrderIdList[];
    start_date: string;
    mobile: number;
};
type GetSearchWordsData = {
    is_active?: boolean;
    app_id?: string;
    uid?: string;
    words?: string[];
    _custom_json?: any;
    result?: any;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    is_active?: boolean;
    app_id?: string;
    words?: string[];
    _custom_json?: any;
    result: SearchKeywordResult;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    app_id?: string;
    uid?: string;
    words?: string[];
    _custom_json?: any;
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type Media = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type AutocompletePageAction = {
    params?: any;
    query?: any;
    url?: string;
    type?: string;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type AutocompleteResult = {
    logo?: Media;
    display?: string;
    _custom_json?: any;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    app_id?: string;
    words?: string[];
    _custom_json?: any;
    results?: AutocompleteResult[];
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    results?: any[];
};
type ProductBundleItem = {
    auto_add_to_cart?: boolean;
    max_quantity: number;
    auto_select?: boolean;
    product_uid: number;
    min_quantity: number;
    allow_remove?: boolean;
};
type GetProductBundleCreateResponse = {
    logo?: string;
    is_active: boolean;
    page_visibility?: string[];
    created_on?: string;
    choice: string;
    products: ProductBundleItem[];
    modified_on?: string;
    slug: string;
    name: string;
    created_by?: any;
    meta?: any;
    id?: string;
    same_store_assignment?: boolean;
    modified_by?: any;
    company_id?: number;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    logo?: string;
    is_active: boolean;
    page_visibility?: string[];
    created_on?: string;
    choice: string;
    products: ProductBundleItem[];
    modified_on?: string;
    slug: string;
    name: string;
    created_by?: any;
    meta?: any;
    same_store_assignment?: boolean;
    modified_by?: any;
    company_id?: number;
};
type Size = {
    is_available?: boolean;
    display?: string;
    quantity?: number;
    value?: string;
};
type Price = {
    min_effective?: number;
    currency?: string;
    min_marked?: number;
    max_marked?: number;
    max_effective?: number;
};
type LimitedProductData = {
    item_code?: string;
    attributes?: any;
    sizes?: string[];
    uid?: number;
    short_description?: string;
    quantity?: number;
    identifier?: any;
    country_of_origin?: string;
    slug?: string;
    name?: string;
    price?: any;
    images?: string[];
};
type GetProducts = {
    sizes?: Size[];
    auto_add_to_cart?: boolean;
    max_quantity?: number;
    auto_select?: boolean;
    min_quantity?: number;
    product_uid?: number;
    price?: Price;
    product_details?: LimitedProductData;
    allow_remove?: boolean;
};
type GetProductBundleResponse = {
    logo?: string;
    is_active?: boolean;
    page_visibility?: string[];
    choice?: string;
    products?: GetProducts[];
    slug?: string;
    name?: string;
    meta?: any;
    same_store_assignment?: boolean;
    company_id?: number;
};
type ProductBundleUpdateRequest = {
    logo?: string;
    is_active: boolean;
    page_visibility?: string[];
    choice: string;
    products: ProductBundleItem[];
    modified_on?: string;
    slug: string;
    name: string;
    meta?: any;
    same_store_assignment?: boolean;
    modified_by?: any;
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
    guide?: Guide;
    created_on?: string;
    image?: string;
    title: string;
    subtitle?: string;
    brand_id?: number;
    active?: boolean;
    description?: string;
    modified_on?: string;
    name: string;
    created_by?: any;
    id?: string;
    tag?: string;
    modified_by?: any;
    company_id?: number;
};
type SizeGuideResponse = {
    created_on?: string;
    guide?: any;
    title?: string;
    subtitle?: string;
    brand_id?: number;
    active?: boolean;
    modified_on?: string;
    name?: string;
    created_by?: any;
    id?: string;
    tag?: string;
    modified_by?: any;
    company_id?: number;
};
type MOQData = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type SEOData = {
    description?: string;
    title?: string;
};
type OwnerAppItemResponse = {
    is_cod?: boolean;
    is_gift?: boolean;
    moq?: MOQData;
    seo?: SEOData;
    alt_text?: any;
};
type ApplicationItemMOQ = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type ApplicationItemSEO = {
    description?: string;
    title?: string;
};
type MetaFields = {
    key: string;
    value: string;
};
type ApplicationItemMeta = {
    is_cod?: boolean;
    is_gift?: boolean;
    _custom_json?: any;
    moq?: ApplicationItemMOQ;
    seo?: ApplicationItemSEO;
    _custom_meta?: MetaFields[];
    alt_text?: any;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type GetConfigMetadataResponse = {
    values?: any[];
    condition?: any[];
    data: any[];
};
type PageResponseType = {
    current: number;
    has_next: boolean;
    next: number;
    total_count: number;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    is_active: boolean;
    logo?: string;
    priority: number;
    display_type: string;
    key?: string;
    slug?: string;
    name: string;
    unit?: string;
};
type AppConfigurationDetail = {
    is_active: boolean;
    logo?: string;
    attributes?: AttributeDetailsGroup[];
    app_id: string;
    priority: number;
    template_slugs?: string[];
    slug: string;
    name?: string;
    is_default: boolean;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_active: boolean;
    logo?: string;
    app_id: string;
    priority: number;
    default_key: string;
    key: string;
    name?: string;
    is_default: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    compare?: any;
    similar?: any;
    detail?: any;
    variant?: any;
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
    units?: any[];
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
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    is_active: boolean;
    logo?: string;
    priority: number;
    title?: string;
    size?: ProductSize;
    subtitle?: string;
    key: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    is_active: boolean;
    logo?: string;
    priority: number;
    display_type: string;
    size: ProductSize;
    key: string;
    name: string;
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
    logo?: string;
    priority: number;
    key: string;
    name?: string;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationBucketPoints = {
    start?: number;
    display?: string;
    end?: number;
};
type ConfigurationListingFilterValue = {
    value?: string;
    map?: any;
    map_values?: any[];
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
    condition?: string;
};
type ConfigurationListingFilterConfig = {
    is_active: boolean;
    logo?: string;
    priority: number;
    display_name?: string;
    type: string;
    key: string;
    value_config?: ConfigurationListingFilterValue;
    name?: string;
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
    created_on?: string;
    app_id: string;
    config_id?: string;
    config_type: string;
    type?: string;
    modified_on?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    created_by?: any;
    modified_by?: any;
    id?: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    created_on?: string;
    app_id: string;
    config_id?: string;
    config_type: string;
    type?: string;
    modified_on?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    created_by?: any;
    modified_by?: any;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    app_id: string;
    config_id?: string;
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersKey = {
    logo?: string;
    display: string;
    operators?: string[];
    name: string;
    kind?: string;
};
type ProductFiltersValue = {
    display: string;
    selected_min?: number;
    count?: number;
    is_selected: boolean;
    selected_max?: number;
    currency_code?: string;
    query_format?: string;
    value: any;
    min?: number;
    display_format?: string;
    max?: number;
    currency_symbol?: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
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
type CollectionListingFilterTag = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilterType = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
};
type Media1 = {
    url: string;
    type?: string;
    meta?: any;
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
type GetCollectionDetailNest = {
    priority?: number;
    type?: string;
    description?: string;
    visible_facets_keys?: string[];
    name?: string;
    badge?: any;
    app_id?: string;
    uid?: string;
    action?: Action;
    allow_sort?: boolean;
    slug?: string;
    meta?: any;
    _schedule?: any;
    query?: CollectionQuery[];
    tag?: string[];
    is_active?: boolean;
    logo?: Media1;
    banners?: ImageUrls;
    cron?: any;
    allow_facets?: boolean;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type UserInfo = {
    user_id?: string;
    username?: string;
    email?: string;
    uid?: string;
};
type CollectionSchedule = {
    next_schedule?: NextSchedule[];
    duration?: number;
    start?: string;
    end?: string;
    cron?: string;
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
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CreateCollection = {
    priority?: number;
    sort_on?: string;
    type: string;
    is_visible?: boolean;
    description?: string;
    visible_facets_keys?: string[];
    name: string;
    badge?: CollectionBadge;
    modified_by?: UserInfo;
    tags?: string[];
    app_id: string;
    _locale_language?: any;
    allow_sort?: boolean;
    slug: string;
    _schedule?: CollectionSchedule;
    meta?: any;
    query?: CollectionQuery[];
    logo: CollectionImage;
    is_active?: boolean;
    published?: boolean;
    seo?: SeoDetail;
    banners: CollectionBanner;
    allow_facets?: boolean;
    _custom_json?: any;
    created_by?: UserInfo;
};
type CollectionCreateResponse = {
    priority?: number;
    sort_on?: string;
    type?: string;
    description?: string;
    visible_facets_keys?: string[];
    name?: string;
    badge?: any;
    app_id?: string;
    allow_sort?: boolean;
    slug?: string;
    meta?: any;
    _schedule?: any;
    query?: CollectionQuery[];
    tag?: string[];
    is_active?: boolean;
    logo?: BannerImage;
    banners?: ImageUrls;
    cron?: any;
    allow_facets?: boolean;
};
type CollectionDetailResponse = {
    priority?: number;
    type?: string;
    description?: string;
    visible_facets_keys?: string[];
    name?: string;
    badge?: any;
    app_id?: string;
    uid?: string;
    allow_sort?: boolean;
    slug?: string;
    meta?: any;
    _schedule?: any;
    query?: CollectionQuery[];
    tag?: string[];
    is_active?: boolean;
    logo?: Media1;
    banners?: ImageUrls;
    cron?: any;
    allow_facets?: boolean;
};
type UpdateCollection = {
    priority?: number;
    sort_on?: string;
    type?: string;
    is_visible?: boolean;
    description?: string;
    visible_facets_keys?: string[];
    name?: string;
    badge?: CollectionBadge;
    modified_by?: UserInfo;
    tags?: string[];
    _locale_language?: any;
    allow_sort?: boolean;
    slug?: string;
    meta?: any;
    _schedule?: CollectionSchedule;
    query?: CollectionQuery[];
    logo?: CollectionImage;
    is_active?: boolean;
    published?: boolean;
    seo?: SeoDetail;
    banners?: CollectionBanner;
    allow_facets?: boolean;
    _custom_json?: any;
};
type Price1 = {
    currency_symbol?: string;
    max?: number;
    min?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductBrand = {
    logo?: Media1;
    name?: string;
    action?: Action;
    uid?: number;
};
type ProductDetailAttribute = {
    key?: string;
    value?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductListingDetail = {
    medias?: Media1[];
    color?: string;
    short_description?: string;
    similars?: string[];
    type?: string;
    description?: string;
    name?: string;
    price?: ProductListingPrice;
    brand?: ProductBrand;
    has_variant?: boolean;
    attributes?: any;
    promo_meta?: any;
    uid?: number;
    image_nature?: string;
    slug: string;
    tryouts?: string[];
    item_type?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    discount?: string;
    rating_count?: number;
    product_online_date?: string;
    item_code?: string;
    teaser_tag?: any;
    sellable?: boolean;
    rating?: number;
    highlights?: string[];
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page?: Page;
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    query?: CollectionQuery[];
    item?: ItemQueryForUserCollection[];
    type?: string;
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightBrand = {
    available_sizes?: number;
    total_sizes?: number;
    article_freshness?: number;
    total_articles?: number;
    available_articles?: number;
    name?: string;
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
    products?: number;
    articles?: number;
};
type CrossSellingResponse = {
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    company_id?: number;
    platform?: string;
    store_ids?: number[];
    brand_ids?: number[];
    opt_level: string;
    enabled?: boolean;
};
type CompanyOptIn = {
    created_on: number;
    platform: string;
    store_ids: number[];
    brand_ids: number[];
    modified_on: number;
    created_by?: any;
    modified_by?: any;
    company_id: number;
    opt_level: string;
    enabled: boolean;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    company_type?: string;
    name?: string;
    business_type?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    total_article?: number;
    brand_name?: string;
    company_id?: number;
    brand_id?: number;
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
    manager?: any;
    store_type?: string;
    uid?: number;
    display_name?: string;
    modified_on?: string;
    name?: string;
    address?: any;
    store_code?: string;
    additional_contacts?: any[];
    timing?: any;
    company_id?: number;
    documents?: any[];
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
    mandatory?: boolean;
    allowed_values?: string[];
    format?: string;
    type: string;
    multi?: boolean;
    range?: AttributeSchemaRange;
};
type AttributeMasterFilter = {
    indexing: boolean;
    priority?: number;
    depends_on?: string[];
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
type GenderDetail = {
    logo?: string;
    schema?: AttributeMaster;
    filters?: AttributeMasterFilter;
    departments?: string[];
    is_nested?: boolean;
    enabled_for_end_consumer?: boolean;
    description?: string;
    slug?: string;
    name?: string;
    details?: AttributeMasterDetails;
    meta?: AttributeMasterMeta;
    id?: string;
};
type CategoriesResponse = {
    uid?: number;
    slug?: string;
    name?: string;
    slug_key?: string;
    template_slug?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: CategoriesResponse[];
    page?: Page;
};
type PTErrorResponse = {
    code?: string;
    message?: string;
    meta?: any;
    status?: number;
    errors?: any;
};
type UserSerializer = {
    _id?: string;
    uid?: string;
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetDepartment = {
    logo?: string;
    is_active?: boolean;
    created_on?: string;
    priority_order?: number;
    uid?: number;
    search?: string;
    modified_on?: string;
    slug?: string;
    name?: string;
    created_by?: UserSerializer;
    page_size?: number;
    item_type?: string;
    page_no?: number;
    modified_by?: UserSerializer;
    synonyms?: string[];
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    code?: string;
    message?: string;
    meta?: any;
    status?: number;
    errors?: any;
};
type DepartmentCreateUpdate = {
    logo: string;
    is_active?: boolean;
    tags?: string[];
    priority_order: number;
    platforms?: any;
    uid?: number;
    _custom_json?: any;
    slug?: string;
    name: string;
    _cls?: string;
    synonyms?: string[];
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    user_id: string;
    contact?: string;
    super_user?: boolean;
    username: string;
};
type DepartmentModel = {
    logo: string;
    _id?: any;
    created_on: string;
    is_active?: boolean;
    priority_order: number;
    uid: number;
    _custom_json?: any;
    modified_on: string;
    slug: string;
    name: string;
    verified_on?: string;
    created_by?: UserDetail;
    _cls?: string;
    verified_by?: UserDetail;
    modified_by?: UserDetail;
    synonyms?: string[];
};
type ProductTemplate = {
    is_active?: boolean;
    attributes?: string[];
    logo?: string;
    is_physical: boolean;
    created_on?: string;
    categories?: string[];
    is_expirable: boolean;
    departments?: string[];
    description?: string;
    modified_on?: string;
    slug: string;
    name?: string;
    created_by?: any;
    is_archived?: boolean;
    tag?: string;
    modified_by?: any;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    is_active?: boolean;
    attributes?: string[];
    logo?: string;
    is_physical: boolean;
    categories?: string[];
    is_expirable: boolean;
    departments?: string[];
    description?: string;
    slug: string;
    name?: string;
    is_archived?: boolean;
    tag?: string;
    id?: string;
};
type Properties = {
    command?: any;
    short_description?: any;
    no_of_boxes?: any;
    description?: any;
    name?: any;
    tags?: any;
    is_dependent?: any;
    custom_order?: any;
    product_publish?: any;
    currency?: any;
    country_of_origin?: any;
    slug?: any;
    item_type?: any;
    variants?: any;
    trader_type?: any;
    is_active?: any;
    sizes?: any;
    multi_size?: any;
    brand_uid?: any;
    item_code?: any;
    teaser_tag?: any;
    size_guide?: any;
    category_slug?: any;
    trader?: any;
    return_config?: any;
    media?: any;
    highlights?: any;
    hsn_code?: any;
    product_group_tag?: any;
};
type GlobalValidation = {
    title?: string;
    definitions?: any;
    type?: string;
    description?: string;
    required?: string[];
    properties?: Properties;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
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
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadItemsData = {
    templates?: string[];
    type?: string;
    brand?: string[];
};
type ProductDownloadsItems = {
    task_id?: string;
    seller_id?: number;
    trigger_on?: string;
    template_tags?: any;
    completed_on?: string;
    url?: string;
    created_by?: VerifiedBy;
    data?: ProductDownloadItemsData;
    status?: string;
    id?: string;
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
    l2: number;
    department: number;
    l1: number;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Media2 = {
    logo: string;
    landscape: string;
    portrait: string;
};
type Category = {
    hierarchy?: Hierarchy[];
    is_active: boolean;
    created_on?: string;
    priority?: number;
    uid?: number;
    departments: number[];
    marketplaces?: CategoryMapping;
    modified_on?: string;
    slug?: string;
    name: string;
    tryouts?: string[];
    media?: Media2;
    created_by?: any;
    level: number;
    modified_by?: any;
    id?: string;
    synonyms?: string[];
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    hierarchy?: Hierarchy[];
    is_active: boolean;
    priority?: number;
    departments: number[];
    marketplaces?: CategoryMapping;
    slug?: string;
    name: string;
    tryouts?: string[];
    media?: Media2;
    level: number;
    synonyms?: string[];
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
type Logo = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
    secure_url?: string;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Image = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
    secure_url?: string;
};
type Trader = {
    name: string;
    address?: string[];
    type?: string;
};
type ReturnConfigResponse = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Product = {
    short_description?: string;
    color?: string;
    no_of_boxes?: number;
    description?: string;
    name?: string;
    brand?: Brand;
    category_uid?: number;
    modified_by?: any;
    primary_color?: string;
    attributes?: any;
    variant_group?: any;
    product_publish?: ProductPublished;
    is_dependent?: boolean;
    custom_order?: any;
    tags?: string[];
    is_set?: boolean;
    uid?: number;
    is_expirable?: boolean;
    currency?: string;
    created_on?: string;
    departments?: number[];
    image_nature?: string;
    tax_identifier?: any;
    all_identifiers?: string[];
    country_of_origin?: string;
    modified_on?: string;
    slug?: string;
    item_type?: string;
    variants?: any;
    is_image_less_product?: boolean;
    verified_by?: VerifiedBy;
    net_quantity?: NetQuantityResponse;
    pending?: string;
    is_active?: boolean;
    sizes?: any[];
    all_sizes?: any[];
    stage?: string;
    multi_size?: boolean;
    brand_uid?: number;
    variant_media?: any;
    images?: Image[];
    id?: string;
    item_code?: string;
    is_physical?: boolean;
    teaser_tag?: any;
    size_guide?: string;
    all_company_ids?: number[];
    category_slug?: string;
    _custom_json?: any;
    moq?: any;
    trader?: Trader[];
    return_config?: ReturnConfigResponse;
    category?: any;
    l3_mapping?: string[];
    verified_on?: string;
    template_tag?: string;
    highlights?: string[];
    media?: Media1[];
    created_by?: any;
    hsn_code?: string;
    company_id?: number;
    product_group_tag?: string[];
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    hsn_code?: string;
    reporting_hsn?: string;
};
type NetQuantity = {
    unit?: string;
    value?: number;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductCreateUpdateSchemaV2 = {
    short_description?: string;
    no_of_boxes?: number;
    description?: string;
    name: string;
    bulk_job_id?: string;
    attributes?: any;
    variant_group?: any;
    is_dependent?: boolean;
    custom_order?: CustomOrder;
    product_publish?: ProductPublish;
    tags?: string[];
    is_set?: boolean;
    uid?: number;
    action?: string;
    currency: string;
    departments: number[];
    tax_identifier: TaxIdentifier;
    country_of_origin: string;
    slug: string;
    is_image_less_product?: boolean;
    variants?: any;
    item_type: string;
    net_quantity?: NetQuantity;
    is_active?: boolean;
    sizes: any[];
    multi_size?: boolean;
    brand_uid: number;
    variant_media?: any;
    item_code: string;
    teaser_tag?: TeaserTag;
    requester?: string;
    size_guide?: string;
    category_slug: string;
    _custom_json?: any;
    trader: Trader[];
    return_config: ReturnConfig;
    change_request_id?: any;
    template_tag: string;
    highlights?: string[];
    media?: Media1[];
    company_id: number;
    product_group_tag?: string[];
};
type ProductVariants = {
    item_code?: string;
    uid?: number;
    name?: string;
    brand_uid?: number;
    media?: Media1[];
    category_uid?: number;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    is_nested?: boolean;
    description?: string;
    raw_key?: string;
    name?: string;
    modified_by?: any;
    synonyms?: any;
    tags?: string[];
    created_on?: string;
    departments: string[];
    enabled_for_end_consumer?: boolean;
    modified_on?: string;
    slug: string;
    logo?: string;
    schema: AttributeMaster;
    suggestion?: string;
    details: AttributeMasterDetails;
    filters: AttributeMasterFilter;
    created_by?: any;
    unit?: string;
    variant?: boolean;
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
    item_weight_unit_of_measure: string;
    identifiers?: ValidateIdentifier[];
    item_dimensions_unit_of_measure: string;
    item_length: number;
    item_height: number;
    item_width: number;
    size: string;
    item_weight: number;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    user_id?: string;
    username?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    is_active?: boolean;
    created_on?: string;
    stage?: string;
    failed_records?: string[];
    failed?: number;
    succeed?: number;
    total?: number;
    cancelled_records?: string[];
    modified_on?: string;
    cancelled?: number;
    template?: ProductTemplate;
    template_tag?: string;
    created_by?: UserDetail1;
    file_path?: string;
    modified_by?: UserDetail1;
    company_id?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    user_id?: string;
    username?: string;
    email?: string;
    uid?: string;
};
type BulkJob = {
    is_active?: boolean;
    created_on: string;
    failed_records?: any[];
    stage?: string;
    custom_template_tag?: string;
    tracking_url?: string;
    failed?: number;
    succeed?: number;
    total?: number;
    cancelled_records?: any[];
    modified_on?: string;
    cancelled?: number;
    created_by?: UserInfo1;
    template_tag?: string;
    file_path?: string;
    modified_by?: UserInfo1;
    company_id: number;
};
type BulkResponse = {
    is_active?: boolean;
    created_on: string;
    batch_id: string;
    modified_on?: string;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
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
type UserCommon = {
    user_id?: string;
    username?: string;
    company_id?: number;
};
type Items = {
    is_active?: boolean;
    company_id?: number;
    created_on?: string;
    failed_records?: string[];
    stage?: string;
    retry?: number;
    tracking_url?: string;
    failed?: number;
    total?: number;
    cancelled_records?: string[];
    modified_on?: string;
    cancelled?: number;
    created_by?: UserCommon;
    id?: string;
    file_path?: string;
    modified_by?: UserCommon;
    succeed?: number;
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
    item_id?: number;
    size?: string;
    company_id?: number;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    identifiers?: any;
    seller_identifier?: string;
    price_effective?: number;
    uid?: string;
    currency?: string;
    item_id?: number;
    size?: string;
    quantity?: number;
    store?: any;
    price_transfer?: number;
    sellable_quantity?: number;
    inventory_updated_on?: string;
    price?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type GTIN = {
    gtin_value: string;
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
    size_distribution: SizeDistribution;
    name?: string;
    quantity?: number;
};
type InvSize = {
    item_weight_unit_of_measure?: string;
    identifiers: GTIN[];
    item_dimensions_unit_of_measure?: string;
    item_length?: number;
    price_effective: number;
    item_height?: number;
    is_set?: boolean;
    item_width?: number;
    expiration_date?: string;
    currency: string;
    set?: InventorySet;
    size: string;
    quantity: number;
    price_transfer?: number;
    price?: number;
    store_code: string;
    item_weight?: number;
};
type ItemQuery = {
    item_code?: string;
    brand_uid?: number;
    uid?: number;
};
type InventoryRequest = {
    sizes: InvSize[];
    item: ItemQuery;
    company_id: number;
};
type ManufacturerResponse = {
    is_default: boolean;
    name: string;
    address: string;
};
type PriceMeta = {
    transfer: number;
    marked: number;
    updated_at?: string;
    currency: string;
    tp_notes?: any;
    effective: number;
};
type BrandMeta = {
    name: string;
    id: number;
};
type CompanyMeta = {
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
type DimensionResponse = {
    length: number;
    height: number;
    width: number;
    is_default: boolean;
    unit: string;
};
type ReturnConfig1 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Trader1 = {
    name: string;
    address: string[];
    type: string;
};
type WeightResponse = {
    is_default: boolean;
    unit: string;
    shipping: number;
};
type InventorySellerResponse = {
    manufacturer: ManufacturerResponse;
    seller_identifier: string;
    fragile: boolean;
    price: PriceMeta;
    added_on_store?: string;
    brand: BrandMeta;
    raw_meta?: any;
    modified_by?: UserSerializer;
    tags?: string[];
    stage?: string;
    uid: string;
    is_set?: boolean;
    tax_identifier?: any;
    country_of_origin: string;
    trace_id?: string;
    meta?: any;
    is_active?: boolean;
    store: StoreMeta;
    fynd_meta?: any;
    track_inventory?: boolean;
    company: CompanyMeta;
    fynd_article_code: string;
    quantities?: Quantities;
    dimension: DimensionResponse;
    expiration_date?: string;
    item_id: number;
    set?: InventorySet;
    size: string;
    _custom_json?: any;
    identifier: any;
    return_config?: ReturnConfig1;
    trader?: Trader1[];
    created_by?: UserSerializer;
    fynd_item_code: string;
    weight: WeightResponse;
    total_quantity: number;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    name?: string;
    address?: string;
};
type PriceArticle = {
    transfer?: number;
    marked?: number;
    currency?: string;
    tp_notes?: any;
    effective?: number;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type ArticleStoreResponse = {
    store_code?: string;
    name?: string;
    store_type?: string;
    uid?: number;
};
type CompanyMeta1 = {
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
type DimensionResponse1 = {
    width?: number;
    unit?: string;
    length?: number;
    height?: number;
};
type ReturnConfig2 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Trader2 = {
    name?: string;
    address?: string[];
    type?: string;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type GetInventories = {
    manufacturer?: ManufacturerResponse1;
    seller_identifier?: string;
    price?: PriceArticle;
    brand?: BrandMeta1;
    date_meta?: DateMeta;
    modified_by?: UserSerializer;
    tags?: string[];
    stage?: string;
    is_set?: boolean;
    uid?: string;
    tax_identifier?: any;
    country_of_origin?: string;
    trace_id?: string;
    store?: ArticleStoreResponse;
    track_inventory?: boolean;
    company?: CompanyMeta1;
    inventory_updated_on?: string;
    quantities?: QuantitiesArticle;
    id?: string;
    dimension?: DimensionResponse1;
    platforms?: any;
    expiration_date?: string;
    item_id?: number;
    size?: string;
    identifier?: any;
    return_config?: ReturnConfig2;
    trader?: Trader2[];
    created_by?: UserSerializer;
    weight?: WeightResponse1;
    total_quantity?: number;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    is_active?: boolean;
    created_on?: string;
    failed_records?: string[];
    stage?: string;
    failed?: number;
    succeed?: number;
    total?: number;
    cancelled_records?: string[];
    cancelled?: number;
    modified_on?: string;
    created_by?: any;
    id?: string;
    file_path?: string;
    modified_by?: any;
    company_id?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    item_weight_unit_of_measure?: string;
    item_dimensions_unit_of_measure?: string;
    tags?: string[];
    seller_identifier: string;
    price_effective?: number;
    expiration_date?: string;
    currency?: string;
    quantity?: number;
    price_marked?: number;
    trace_id?: string;
    price?: number;
    store_code: string;
    total_quantity?: number;
};
type InventoryBulkRequest = {
    user?: any;
    sizes: InventoryJobPayload[];
    batch_id: string;
    company_id: number;
};
type InventoryExportJob = {
    task_id: string;
    seller_id: number;
    trigger_on?: string;
    url?: string;
    completed_on?: string;
    status?: string;
    request_params?: any;
};
type InventoryExportRequest = {
    store?: number[];
    type?: string;
    brand?: number[];
};
type InventoryExportResponse = {
    task_id: string;
    seller_id: number;
    trigger_on?: string;
    status?: string;
    request_params?: any;
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
    seller_identifier: string;
    price_effective?: number;
    expiration_date?: string;
    price_marked?: number;
    trace_id?: string;
    store_id: number;
    total_quantity?: number;
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    company_id: number;
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
    threshold2?: number;
    threshold1?: number;
    tax_on_mrp?: boolean;
    tax_on_esp?: boolean;
    modified_on?: string;
    id?: string;
    tax2?: number;
    hsn_code?: string;
    company_id?: number;
    tax1?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    is_active?: boolean;
    hs2_code: string;
    threshold2?: number;
    threshold1: number;
    tax_on_mrp: boolean;
    tax_on_esp?: boolean;
    uid?: number;
    tax2?: number;
    hsn_code: string;
    company_id: number;
    tax1: number;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    rate: number;
    cess?: number;
    threshold: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    created_on?: string;
    modified_by?: any;
    reporting_hsn: string;
    type: string;
    description: string;
    modified_on?: string;
    country_code: string;
    created_by?: any;
    taxes: TaxSlab[];
    hsn_code_id?: string;
    hsn_code: string;
};
type PageResponse = {
    item_total?: number;
    has_previous?: boolean;
    size?: number;
    current?: string;
    has_next?: boolean;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    logo?: Media;
    action?: Action;
    uid?: number;
    discount?: string;
    departments?: string[];
    slug?: string;
    name?: string;
    banners?: ImageUrls;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    logo?: Media;
    priority_order?: number;
    uid?: number;
    slug?: string;
    name?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    childs?: any[];
    uid?: number;
    action?: Action;
    _custom_json?: any;
    slug?: string;
    name?: string;
    banners?: ImageUrls;
};
type SecondLevelChild = {
    childs?: ThirdLevelChild[];
    uid?: number;
    action?: Action;
    _custom_json?: any;
    slug?: string;
    name?: string;
    banners?: ImageUrls;
};
type Child = {
    childs?: SecondLevelChild[];
    uid?: number;
    action?: Action;
    _custom_json?: any;
    slug?: string;
    name?: string;
    banners?: ImageUrls;
};
type CategoryItems = {
    childs?: Child[];
    action?: Action;
    uid?: number;
    slug?: string;
    name?: string;
    banners?: ImageUrls;
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
    operators?: any;
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page: Page;
};
type ProductDetail = {
    medias?: Media1[];
    color?: string;
    short_description?: string;
    similars?: string[];
    type?: string;
    description?: string;
    name?: string;
    brand?: ProductBrand;
    has_variant?: boolean;
    attributes?: any;
    promo_meta?: any;
    uid?: number;
    image_nature?: string;
    slug: string;
    tryouts?: string[];
    item_type?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    rating_count?: number;
    product_online_date?: string;
    item_code?: string;
    teaser_tag?: any;
    rating?: number;
    highlights?: string[];
};
type InventoryPage = {
    item_total: number;
    has_previous?: boolean;
    type: string;
    next_id?: string;
    has_next?: boolean;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type ArticleQuery = {
    item_id: number;
    size: string;
    ignored_stores?: number[];
};
type AssignStoreArticle = {
    article_assignment?: ArticleAssignment;
    group_id?: string;
    quantity?: number;
    meta?: any;
    query?: ArticleQuery;
};
type AssignStore = {
    app_id: string;
    channel_type?: string;
    store_ids?: number[];
    pincode: string;
    channel_identifier?: string;
    articles: AssignStoreArticle[];
    company_id?: number;
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    _id?: string;
    price_effective?: number;
    store_id?: number;
    uid?: string;
    item_id: number;
    article_assignment: ArticleAssignment1;
    size: string;
    quantity: number;
    price_marked?: number;
    store_pincode?: number;
    group_id?: string;
    meta?: any;
    index?: number;
    status: boolean;
    s_city?: string;
    strategy_wise_listing?: any[];
    company_id?: number;
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
type UserSerializer1 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetAddressSerializer = {
    address_type?: string;
    pincode?: number;
    longitude?: number;
    latitude?: number;
    address2?: string;
    address1?: string;
    country_code?: string;
    country?: string;
    state?: string;
    city?: string;
    landmark?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
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
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetCompanySerializer = {
    created_on?: string;
    stage?: string;
    business_type?: string;
    uid?: number;
    company_type?: string;
    reject_reason?: string;
    modified_on?: string;
    name?: string;
    verified_on?: string;
    created_by?: UserSerializer2;
    verified_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer2;
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
type GetLocationSerializer = {
    store_type?: string;
    warnings?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    name: string;
    modified_by?: UserSerializer1;
    integration_type?: LocationIntegrationType;
    created_on?: string;
    stage?: string;
    uid?: number;
    display_name: string;
    modified_on?: string;
    address: GetAddressSerializer;
    verified_by?: UserSerializer1;
    product_return_config?: ProductReturnConfigSerializer;
    documents?: Document[];
    manager?: LocationManagerSerializer;
    company?: GetCompanySerializer;
    phone_number: string;
    _custom_json?: any;
    notification_emails?: string[];
    contact_numbers?: SellerPhoneNumber[];
    verified_on?: string;
    created_by?: UserSerializer1;
    code: string;
    timing?: LocationDayWiseSerializer[];
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
    logo?: string;
    is_active?: boolean;
    app_id: string;
    uid: number;
    _custom_json?: any;
    name?: string;
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
type CompanyTaxesSerializer = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type GetCompanyProfileSerializerResponse = {
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    warnings?: any;
    documents?: Document[];
    business_type: string;
    verified_by?: UserSerializer;
    mode?: string;
    modified_by?: UserSerializer;
    business_details?: BusinessDetails;
    created_by?: UserSerializer;
    company_type: string;
    business_country_info?: BusinessCountryInfo;
    created_on?: string;
    taxes?: CompanyTaxesSerializer[];
    name?: string;
    _custom_json?: any;
    notification_emails?: string[];
    business_info?: string;
    stage?: string;
    franchise_enabled?: boolean;
    verified_on?: string;
    uid: number;
    contact_details?: ContactDetails;
};
type CreateUpdateAddressSerializer = {
    address2?: string;
    country_code?: string;
    country: string;
    address_type: string;
    latitude: number;
    longitude: number;
    address1: string;
    city: string;
    state: string;
    landmark?: string;
    pincode: number;
};
type UpdateCompany = {
    company_type?: string;
    _custom_json?: any;
    addresses?: CreateUpdateAddressSerializer[];
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer[];
    business_info?: string;
    reject_reason?: string;
    warnings?: any;
    business_details?: BusinessDetails;
    franchise_enabled?: boolean;
    documents?: Document[];
    business_type?: string;
    name?: string;
    contact_details?: ContactDetails;
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
    product?: DocumentsObj;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
    stage?: string;
    uid?: number;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape: string;
    portrait: string;
};
type GetBrandResponseSerializer = {
    modified_on?: string;
    warnings?: any;
    verified_by?: UserSerializer;
    description?: string;
    _locale_language?: any;
    mode?: string;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    created_on?: string;
    logo?: string;
    banner?: BrandBannerSerializer;
    reject_reason?: string;
    slug_key?: string;
    name: string;
    _custom_json?: any;
    stage?: string;
    verified_on?: string;
    synonyms?: string[];
    uid?: number;
};
type CreateUpdateBrandRequestSerializer = {
    _custom_json?: any;
    description?: string;
    _locale_language?: any;
    logo: string;
    banner: BrandBannerSerializer;
    company_id?: number;
    brand_tier?: string;
    synonyms?: string[];
    name: string;
    uid?: number;
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanySerializer = {
    company_type: string;
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    business_country_info?: BusinessCountryInfo;
    modified_on?: string;
    created_on?: string;
    notification_emails?: string[];
    reject_reason?: string;
    modified_by?: UserSerializer;
    name?: string;
    stage?: string;
    details?: CompanyDetails;
    created_by?: UserSerializer;
    verified_on?: string;
    uid?: number;
    market_channels?: string[];
    verified_by?: UserSerializer;
    business_type: string;
};
type CompanyBrandSerializer = {
    company?: CompanySerializer;
    modified_on?: string;
    created_on?: string;
    reject_reason?: string;
    modified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    warnings?: any;
    stage?: string;
    created_by?: UserSerializer;
    verified_on?: string;
    uid?: number;
    verified_by?: UserSerializer;
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
    title: string;
    date: HolidayDateSerializer;
    holiday_type: string;
};
type AddressSerializer = {
    address2?: string;
    country_code?: string;
    country?: string;
    address_type?: string;
    latitude: number;
    longitude: number;
    address1?: string;
    city?: string;
    state?: string;
    landmark?: string;
    pincode?: number;
};
type LocationSerializer = {
    company: number;
    contact_numbers?: SellerPhoneNumber[];
    holiday?: HolidaySchemaSerializer[];
    _custom_json?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    address: AddressSerializer;
    timing?: LocationDayWiseSerializer[];
    notification_emails?: string[];
    code: string;
    store_type?: string;
    warnings?: any;
    manager?: LocationManagerSerializer;
    stage?: string;
    documents?: Document[];
    product_return_config?: ProductReturnConfigSerializer;
    name: string;
    uid?: number;
    display_name: string;
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
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    auto?: DisplayMetaDict;
    subtitle?: string;
    description?: string;
    remove?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    title?: string;
};
type RuleDefinition = {
    value_type: string;
    is_exact?: boolean;
    auto_apply?: boolean;
    scope?: string[];
    calculate_on: string;
    type: string;
    applicable_on: string;
    currency_code?: string;
};
type State = {
    is_archived?: boolean;
    is_public?: boolean;
    is_display?: boolean;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type Validity = {
    priority?: number;
};
type CouponSchedule = {
    next_schedule?: any[];
    cron?: string;
    end?: string;
    duration?: number;
    start?: string;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Validation = {
    app_id?: string[];
    user_registered_after?: string;
    anonymous?: boolean;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
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
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    networks?: string[];
    uses?: PaymentAllowValue;
    types?: string[];
    codes?: string[];
};
type Restrictions = {
    platforms?: string[];
    post_order?: PostOrder;
    coupon_allowed?: boolean;
    user_groups?: number[];
    price_range?: PriceRange;
    bulk_bundle?: BulkBundleRestriction;
    ordering_stores?: number[];
    uses?: UsesRestriction;
    user_type?: string;
    payments?: any;
};
type Rule = {
    key?: number;
    min?: number;
    discount_qty?: number;
    max?: number;
    value?: number;
};
type CouponAdd = {
    ownership: Ownership;
    display_meta: DisplayMeta;
    rule_definition: RuleDefinition;
    state?: State;
    tags?: string[];
    action?: CouponAction;
    validity: Validity;
    _schedule?: CouponSchedule;
    identifiers: Identifier;
    type_slug: string;
    date_meta?: CouponDateMeta;
    validation?: Validation;
    code: string;
    author?: CouponAuthor;
    restrictions?: Restrictions;
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
    ownership: Ownership;
    display_meta: DisplayMeta;
    rule_definition: RuleDefinition;
    state?: State;
    tags?: string[];
    action?: CouponAction;
    validity: Validity;
    _schedule?: CouponSchedule;
    identifiers: Identifier;
    type_slug: string;
    date_meta?: CouponDateMeta;
    validation?: Validation;
    code: string;
    author?: CouponAuthor;
    restrictions?: Restrictions;
    rule: Rule[];
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type PromotionSchedule = {
    next_schedule?: any[];
    cron?: string;
    published: boolean;
    end?: string;
    duration?: number;
    start: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    uses?: PaymentAllowValue1;
    codes?: string[];
    type: string;
};
type Restrictions1 = {
    platforms?: string[];
    post_order?: PostOrder1;
    user_groups?: number[];
    anonymous_users?: boolean;
    order_quantity?: number;
    user_registered?: UserRegistered;
    user_id?: string[];
    uses: UsesRestriction1;
    payments?: PromotionPaymentModes[];
};
type DisplayMeta1 = {
    offer_label?: string;
    offer_text?: string;
    name?: string;
    description?: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type CompareObject = {
    less_than?: number;
    less_than_equals?: number;
    greater_than_equals?: number;
    greater_than?: number;
    equals?: number;
};
type ItemCriteria = {
    item_company?: number[];
    cart_total?: CompareObject;
    item_exclude_brand?: number[];
    all_items?: boolean;
    item_exclude_id?: number[];
    cart_unique_item_amount?: CompareObject;
    item_store?: number[];
    item_exclude_sku?: string[];
    item_exclude_company?: number[];
    item_brand?: number[];
    product_tags?: string[];
    available_zones?: string[];
    item_size?: string[];
    cart_quantity?: CompareObject;
    item_id?: number[];
    item_sku?: string[];
    buy_rules?: string[];
    item_exclude_store?: number[];
    item_exclude_category?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_category?: number[];
};
type DiscountOffer = {
    max_offer_quantity?: number;
    discount_amount?: number;
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
    max_discount_amount?: number;
    apportion_discount?: boolean;
    code?: string;
    discount_percentage?: number;
    partial_can_ret?: boolean;
    discount_price?: number;
};
type DiscountRule = {
    discount_type: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
    buy_condition: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionListItem = {
    currency?: string;
    application_id: string;
    apply_priority?: number;
    apply_exclusive?: string;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    mode: string;
    post_order_action?: PromotionAction;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    promo_group: string;
    code?: string;
    ownership: Ownership1;
    _custom_json?: any;
    buy_rules: any;
    stackable?: boolean;
    discount_rules: DiscountRule[];
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    promotion_type: string;
    visiblility?: Visibility;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    currency?: string;
    application_id: string;
    apply_priority?: number;
    apply_exclusive?: string;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    mode: string;
    post_order_action?: PromotionAction;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    promo_group: string;
    code?: string;
    ownership: Ownership1;
    _custom_json?: any;
    buy_rules: any;
    stackable?: boolean;
    discount_rules: DiscountRule[];
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    promotion_type: string;
    visiblility?: Visibility;
};
type PromotionUpdate = {
    currency?: string;
    application_id: string;
    apply_priority?: number;
    apply_exclusive?: string;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    mode: string;
    post_order_action?: PromotionAction;
    restrictions?: Restrictions1;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    promo_group: string;
    code?: string;
    ownership: Ownership1;
    _custom_json?: any;
    buy_rules: any;
    stackable?: boolean;
    discount_rules: DiscountRule[];
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    promotion_type: string;
    visiblility?: Visibility;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    entity_slug?: string;
    created_on?: string;
    modified_on?: string;
    subtitle?: string;
    example?: string;
    is_hidden?: boolean;
    entity_type?: string;
    description?: string;
    type?: string;
    title?: string;
};
type CartItem = {
    quantity?: number;
    size: string;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductPrice = {
    marked?: number;
    currency_symbol?: string;
    effective?: number;
    selling?: number;
    add_on?: number;
    currency_code?: string;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type DiscountRulesApp = {
    offer?: any;
    raw_offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
};
type FreeGiftItem = {
    item_name?: string;
    item_price_details?: any;
    item_slug?: string;
    item_brand_name?: string;
    item_id?: number;
    item_images_url?: string[];
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
    parent_item_identifier?: string;
    article_id?: string;
};
type AppliedPromotion = {
    ownership?: Ownership2;
    promotion_name?: string;
    article_quantity?: number;
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRulesApp[];
    promo_id?: string;
    amount?: number;
    applied_free_articles?: AppliedFreeArticles[];
    promotion_group?: string;
    promotion_type?: string;
    offer_text?: string;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    effective?: number;
    marked?: number;
    currency_symbol?: string;
    currency_code?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    store?: BaseInfo;
    _custom_json?: any;
    seller?: BaseInfo;
    price?: ArticlePriceInfo;
    parent_item_identifiers?: any;
    type?: string;
    product_group_tags?: string[];
    quantity?: number;
    size?: string;
    uid?: string;
    extra_meta?: any;
};
type CartProductIdentifer = {
    identifier?: string;
};
type PromoMeta = {
    message?: string;
};
type ProductAvailability = {
    deliverable?: boolean;
    is_valid?: boolean;
    sizes?: string[];
    other_store_quantity?: number;
    out_of_stock?: boolean;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    url?: string;
    query?: ActionQuery;
    type?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type ProductImage = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type CartProduct = {
    brand?: BaseInfo;
    slug?: string;
    type?: string;
    action?: ProductAction;
    name?: string;
    uid?: number;
    categories?: CategoryInfo[];
    images?: ProductImage[];
    item_code?: string;
    net_quantity?: NetQuantity;
};
type CartProductInfo = {
    price_per_unit?: ProductPriceInfo;
    promotions_applied?: AppliedPromotion[];
    key?: string;
    price?: ProductPriceInfo;
    parent_item_identifiers?: any;
    message?: string;
    discount?: string;
    coupon_message?: string;
    bulk_offer?: any;
    quantity?: number;
    article?: ProductArticle;
    identifiers: CartProductIdentifer;
    is_set?: boolean;
    promo_meta?: PromoMeta;
    availability?: ProductAvailability;
    product?: CartProduct;
};
type RawBreakup = {
    delivery_charge?: number;
    gst_charges?: number;
    fynd_cash?: number;
    total?: number;
    cod_charge?: number;
    discount?: number;
    vog?: number;
    subtotal?: number;
    coupon?: number;
    convenience_fee?: number;
    you_saved?: number;
    mrp_total?: number;
};
type LoyaltyPoints = {
    applicable?: number;
    description?: string;
    is_applied?: boolean;
    total?: number;
};
type CouponBreakup = {
    message?: string;
    minimum_cart_value?: number;
    type?: string;
    description?: string;
    sub_title?: string;
    coupon_value?: number;
    uid?: string;
    is_applied?: boolean;
    max_discount_value?: number;
    coupon_type?: string;
    code?: string;
    value?: number;
    title?: string;
};
type DisplayBreakup = {
    key?: string;
    currency_symbol?: string;
    message?: string[];
    display?: string;
    value?: number;
    currency_code?: string;
};
type CartBreakup = {
    raw?: RawBreakup;
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    message?: string;
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    country_iso_code?: string;
    area?: string;
    city?: string;
    area_code: string;
    area_code_slug?: string;
    state?: string;
    phone?: number;
    address_type?: string;
    meta?: any;
    email?: string;
    name?: string;
    landmark?: string;
    country?: string;
    country_phone_code?: string;
    country_code?: string;
    pincode?: number;
    address?: string;
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
    breakup_values?: CartBreakup;
    message?: string;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
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
    delivery_charges: number;
    loyalty_discount?: number;
    files?: OpenApiFiles[];
    price_marked: number;
    payment_methods: MultiTenderPaymentMethod[];
    discount: number;
    coupon_effective_discount: number;
    meta?: CartItemMeta;
    amount_paid: number;
    quantity?: number;
    cod_charges: number;
    employee_discount?: number;
    size: string;
    cashback_applied: number;
    product_id: number;
    price_effective: number;
    extra_meta?: any;
};
type OpenApiPlatformCheckoutReq = {
    delivery_charges: number;
    cart_items: OpenApiOrderItem[];
    comment?: string;
    order_id?: string;
    cart_value: number;
    payment_methods: MultiTenderPaymentMethod[];
    affiliate_order_id?: string;
    payment_mode?: string;
    cod_charges: number;
    employee_discount?: any;
    cashback_applied: number;
    loyalty_discount?: number;
    coupon_code: string;
    files?: OpenApiFiles[];
    coupon_value: number;
    shipping_address?: ShippingAddress;
    billing_address: ShippingAddress;
    coupon?: string;
    gstin?: string;
    currency_code?: string;
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    order_ref_id?: string;
    order_id: string;
    message?: string;
};
type AbandonedCart = {
    delivery_charges?: any;
    payment_methods?: any[];
    cart_value?: number;
    is_archive?: boolean;
    promotion?: any;
    is_active?: boolean;
    cod_charges?: any;
    shipments?: any[];
    is_default: boolean;
    articles: any[];
    created_on: string;
    checkout_mode?: string;
    buy_now?: boolean;
    discount?: number;
    expire_at: string;
    pick_up_customer_details?: any;
    fynd_credits?: any;
    coupon?: any;
    last_modified: string;
    order_id?: string;
    payment_mode?: string;
    app_id?: string;
    cashback: any;
    bulk_coupon_discount?: number;
    merge_qty?: boolean;
    meta?: any;
    uid: number;
    fc_index_map?: number[];
    user_id: string;
    _id: string;
    comment?: string;
    payments?: any;
    gstin?: string;
};
type AbandonedCartResponse = {
    message?: string;
    page?: Page;
    items?: AbandonedCart[];
    result?: any;
    success?: boolean;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    currency?: CartCurrency;
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    payment_selection_lock?: PaymentSelectionLock;
    buy_now?: boolean;
    message?: string;
    pan_no?: string;
    pan_config?: any;
    coupon_text?: string;
    delivery_charge_info?: string;
    items?: CartProductInfo[];
    checkout_mode?: string;
    id?: string;
    restrict_checkout?: boolean;
    comment?: string;
    gstin?: string;
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
};
type AddProductCart = {
    store_id?: number;
    _custom_json?: any;
    parent_item_identifiers?: any;
    pos?: boolean;
    article_assignment?: any;
    article_id?: string;
    product_group_tags?: string[];
    quantity?: number;
    seller_id?: number;
    display?: string;
    item_size?: string;
    item_id?: number;
    extra_meta?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
    new_cart?: boolean;
};
type AddCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
    partial?: boolean;
    message?: string;
};
type UpdateProductCart = {
    _custom_json?: any;
    parent_item_identifiers?: any;
    item_index?: number;
    article_id?: string;
    quantity?: number;
    identifiers: CartProductIdentifer;
    item_size?: string;
    item_id?: number;
    extra_meta?: any;
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
    meta?: any;
    source?: any;
    token?: string;
    user?: any;
};
type SharedCart = {
    currency?: CartCurrency;
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    buy_now?: boolean;
    checkout_mode?: string;
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    message?: string;
    shared_cart_details?: SharedCartDetails;
    coupon_text?: string;
    items?: CartProductInfo[];
    delivery_charge_info?: string;
    id?: string;
    restrict_checkout?: boolean;
    uid?: string;
    cart_id?: number;
    comment?: string;
    gstin?: string;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    created_on?: string;
    cart_value?: number;
    item_counts?: number;
    pick_up_customer_details?: any;
    user_id?: string;
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
    currency?: CartCurrency;
    pan_no?: string;
    user?: UserInfo;
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    buy_now?: boolean;
    checkout_mode?: string;
    gstin?: string;
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    message?: string;
    coupon_text?: string;
    items?: CartProductInfo[];
    delivery_charge_info?: string;
    id?: string;
    restrict_checkout?: boolean;
    comment?: string;
    pan_config?: any;
};
type DeleteCartDetailResponse = {
    success?: boolean;
    message?: string;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type PageCoupon = {
    current?: number;
    total_item_count?: number;
    total?: number;
    has_previous?: boolean;
    has_next?: boolean;
};
type Coupon = {
    coupon_code?: string;
    is_applicable?: boolean;
    expires_on?: string;
    message?: string;
    minimum_cart_value?: number;
    description?: string;
    sub_title?: string;
    coupon_value?: number;
    is_applied?: boolean;
    max_discount_value?: number;
    coupon_type?: string;
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
    is_default_address?: boolean;
    area_code_slug?: string;
    state?: string;
    is_active?: boolean;
    landmark?: string;
    checkout_mode?: string;
    created_by_user_id?: string;
    name?: string;
    city?: string;
    address?: string;
    area?: string;
    area_code?: string;
    geo_location?: GeoLocation;
    email?: string;
    tags?: string[];
    phone?: string;
    id?: string;
    meta?: any;
    address_type?: string;
    country?: string;
    google_map_point?: any;
    user_id?: string;
    cart_id?: string;
    country_code?: string;
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
    is_updated?: boolean;
    success?: boolean;
    is_default_address?: boolean;
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
    shipments?: number;
    items?: CartProductInfo[];
    promise?: ShipmentPromise;
    fulfillment_type?: string;
    fulfillment_id?: number;
    shipment_type?: string;
    order_type?: string;
    box_type?: string;
    dp_options?: any;
    dp_id?: string;
};
type CartShipmentsResponse = {
    currency?: CartCurrency;
    breakup_values?: CartBreakup;
    message?: string;
    error?: boolean;
    coupon_text?: string;
    shipments?: ShipmentResponse[];
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    buy_now?: boolean;
    checkout_mode?: string;
    delivery_charge_info?: string;
    id?: string;
    restrict_checkout?: boolean;
    uid?: string;
    cart_id?: number;
    comment?: string;
    gstin?: string;
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
};
type UpdateCartShipmentItem = {
    shipment_type: string;
    quantity?: number;
    article_uid: string;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    pan_no?: string;
    checkout_mode?: string;
    pick_up_customer_details?: any;
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
    key: string;
    values: string[];
};
type StaffCheckout = {
    employee_code?: string;
    first_name: string;
    _id: string;
    last_name: string;
    user: string;
};
type PlatformCartCheckoutDetailRequest = {
    address_id?: string;
    device_id?: string;
    payment_auto_confirm?: boolean;
    pick_at_store_uid?: number;
    files?: Files[];
    checkout_mode?: string;
    staff?: StaffCheckout;
    ordering_store?: number;
    billing_address?: any;
    payment_identifier?: string;
    payment_params?: any;
    merchant_code?: string;
    payment_mode: string;
    billing_address_id?: string;
    extra_meta?: any;
    pos?: boolean;
    id: string;
    meta?: any;
    order_type: string;
    delivery_address?: any;
    callback_url?: string;
    user_id: string;
    aggregator?: string;
};
type CheckCart = {
    currency?: CartCurrency;
    delivery_charges?: number;
    cod_charges?: number;
    success?: boolean;
    is_valid?: boolean;
    store_code?: string;
    payment_selection_lock?: PaymentSelectionLock;
    buy_now?: boolean;
    checkout_mode?: string;
    error_message?: string;
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    message?: string;
    order_id?: string;
    coupon_text?: string;
    items?: CartProductInfo[];
    cod_message?: string;
    delivery_charge_order_value?: number;
    user_type?: string;
    store_emps?: any[];
    cod_available?: boolean;
    delivery_charge_info?: string;
    id?: string;
    restrict_checkout?: boolean;
    uid?: string;
    cart_id?: number;
    comment?: string;
    gstin?: string;
};
type CartCheckoutResponse = {
    payment_confirm_url?: string;
    message?: string;
    order_id?: string;
    cart?: CheckCart;
    data?: any;
    callback_url?: string;
    app_intercept_url?: string;
    success?: boolean;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    area?: string;
    city?: string;
    store_code?: string;
    area_code?: string;
    area_code_slug?: string;
    state?: string;
    address_type?: string;
    phone?: string;
    id?: number;
    email?: string;
    name?: string;
    landmark?: string;
    country?: string;
    uid?: number;
    pincode?: number;
    address?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    address_id?: string;
    id?: string;
    payment_identifier?: string;
    merchant_code?: string;
    payment_mode?: string;
    aggregator_name?: string;
};
type CouponValidity = {
    valid?: boolean;
    discount?: number;
    display_message_en?: string;
    code?: string;
    title?: string;
};
type PaymentCouponValidate = {
    success: boolean;
    coupon_validity?: CouponValidity;
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
