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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, SessionListResponseInfo, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserEmails, UserPhoneNumbers, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutCustomer, PayoutMoreAttributes, PayoutAggregator, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, ShipmentStatus, UserDataInfo, Prices, GSTDetailsData, PlatformItem, BagUnit, PaymentModeInfo, ShipmentItemFulFillingStore, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, BagStateMapper, BagStatusHistory, ShipmentPayments, OrderDetailsData, BagGST, CurrentStatus, BagConfigs, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, Identifier, FinancialBreakup, OrderBrandName, OrderBagArticle, PlatformDeliveryAddress, OrderBags, TrackingList, Dimensions, Meta, PDFLinks, Formatted, EinvoiceInfo, ShipmentTimeStamp, LockData, BuyerDetails, DebugInfo, ShipmentMeta, AffiliateMeta, AffiliateDetails, UserDetailsData, OrderingStoreDetails, FulfillingStore, InvoiceInfo, ShipmentStatusData, CompanyDetails, DPDetailsData, PlatformShipment, ShipmentInfoResponse, TransactionData, BillingStaffDetails, PlatformUserDetails, OrderMeta, TaxDetails, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, BagGSTDetails, B2BPODetails, BagMeta, AffiliateBagDetails, Attributes, Item, ArticleDetails, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, StoreMeta, StoreAddress, Store, Dates, Brand, Weight, ReturnConfig, Article, BagReturnableCancelableStatus, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, UserData, MarketPlacePdf, AffiliateBag, OrderPriority, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, AffiliateStoreIdMapping, AffiliateInventoryPaymentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, PaymentMethod, PaymentInfo, BillingInfo, ShippingInfo, Tax, Charge, ProcessingDates, LineItem, Shipment, TaxInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemSEO, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, SEOData, MOQData, OwnerAppItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, CollectionBadge, CollectionQuery, UserInfo, SeoDetail, CollectionImage, CollectionBanner, CollectionSchedule, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, NetQuantity, TaxIdentifier, ProductPublish, CustomOrder, TeaserTag, Trader, ProductCreateUpdateSchemaV2, NetQuantityResponse, Image, ProductPublished, Logo, ReturnConfigResponse, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, CompanyMeta, QuantityBase, Quantities, DimensionResponse, ManufacturerResponse, WeightResponse, BrandMeta, PriceMeta, Trader1, ReturnConfig1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, CompanyMeta1, Quantity, QuantitiesArticle, DimensionResponse1, ManufacturerResponse1, WeightResponse1, BrandMeta1, PriceArticle, ArticleStoreResponse, Trader2, ReturnConfig2, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, BulkHsnUpsert, BulkHsnResponse, PageResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, SellerPhoneNumber, LocationManagerSerializer, UserSerializer1, GetAddressSerializer, GetCompanySerializer, LocationIntegrationType, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer2, ProductReturnConfigSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, ContactDetails, BusinessCountryInfo, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponDateMeta, CouponAction, RuleDefinition, CouponAuthor, DisplayMetaDict, DisplayMeta, Ownership, Validity, CouponSchedule, Rule, PaymentAllowValue, PaymentModes, PriceRange, BulkBundleRestriction, UsesRemaining, UsesRestriction, PostOrder, Restrictions, State, Validation, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Visibility, PromotionAuthor, PromotionDateMeta, PromotionAction, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, DisplayMeta1, Ownership1, PromotionSchedule, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, UserRegistered, PostOrder1, Restrictions1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ProductPrice, ProductPriceInfo, PromoMeta, DiscountRulesApp, Ownership2, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, ActionQuery, ProductAction, BaseInfo, ProductImage, CategoryInfo, CartProduct, BasePrice, ArticlePriceInfo, ProductArticle, CartProductIdentifer, ProductAvailability, CartProductInfo, RawBreakup, DisplayBreakup, LoyaltyPoints, CouponBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartRequest, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, Files, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    success: boolean;
    excluded_fields: string[];
    aggregators?: any[];
    app_id: string;
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
    config_type: string;
    is_active?: boolean;
    merchant_salt: string;
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
    code: string;
    description: string;
};
type HttpErrorCodeAndResponse = {
    success: boolean;
    error: ErrorCodeAndDescription;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentApp = {
    logos?: PaymentModeLogo;
    code?: string;
    display_name?: string;
    package_name?: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    timeout?: number;
    exp_year?: number;
    name?: string;
    remaining_limit?: number;
    card_name?: string;
    merchant_code?: string;
    aggregator_name: string;
    intent_flow?: boolean;
    logo_url?: PaymentModeLogo;
    code?: string;
    display_priority?: number;
    card_token?: string;
    card_issuer?: string;
    card_reference?: string;
    card_brand?: string;
    intent_app?: IntentApp[];
    card_number?: string;
    cod_limit?: number;
    expired?: boolean;
    card_fingerprint?: string;
    exp_month?: number;
    nickname?: string;
    cod_limit_per_order?: number;
    retry_count?: number;
    card_id?: string;
    fynd_vpa?: string;
    intent_app_error_list?: string[];
    card_type?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    display_name?: string;
    card_isin?: string;
    card_brand_image?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
};
type RootPaymentMode = {
    name: string;
    add_card_enabled?: boolean;
    is_pay_by_card_pl?: boolean;
    anonymous_enable?: boolean;
    save_card?: boolean;
    display_priority: number;
    display_name: string;
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
    name?: string;
    unique_external_id?: string;
    mobile?: string;
    id?: number;
};
type PayoutMoreAttributes = {
    branch_name?: string;
    account_holder?: string;
    city?: string;
    bank_name?: string;
    state?: string;
    ifsc_code?: string;
    country?: string;
    account_no?: string;
    account_type?: string;
};
type PayoutAggregator = {
    payout_details_id?: number;
    aggregator_fund_id?: number;
    aggregator_id?: number;
};
type Payout = {
    transfer_type: string;
    customers: PayoutCustomer;
    is_default: boolean;
    unique_transfer_no: string;
    more_attributes: PayoutMoreAttributes;
    is_active: boolean;
    payouts_aggregators?: PayoutAggregator[];
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    branch_name?: string;
    account_holder?: string;
    bank_name?: string;
    city?: string;
    state?: string;
    ifsc_code: string;
    country?: string;
    account_no?: string;
    account_type: string;
    pincode?: number;
};
type PayoutRequest = {
    transfer_type: string;
    users: any;
    unique_external_id: string;
    is_active: boolean;
    aggregator: string;
    bank_details: PayoutBankDetails;
};
type PayoutResponse = {
    success: boolean;
    transfer_type: string;
    users: any;
    payouts: any;
    unique_transfer_no: string;
    payment_status: string;
    created: boolean;
    is_active: boolean;
    aggregator: string;
    bank_details: any;
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
    success: boolean;
    aggregator: string;
    config: any;
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
    code: string;
    description: string;
};
type BankDetailsForOTP = {
    account_holder: string;
    branch_name: string;
    bank_name: string;
    ifsc_code: string;
    account_no: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    bank_name: string;
    success?: boolean;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    account_holder: string;
    created_on: string;
    beneficiary_id: string;
    delights_user_name?: string;
    id: number;
    transfer_mode: string;
    ifsc_code: string;
    bank_name: string;
    address: string;
    is_active: boolean;
    title: string;
    mobile?: string;
    subtitle: string;
    modified_on: string;
    branch_name?: string;
    email: string;
    comment?: string;
    display_name: string;
    account_no: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    current_status?: string;
    payment_gateway?: string;
    order_id?: string;
    payment_id?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    meta?: MultiTenderPaymentMeta;
    amount: number;
    mode: string;
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
    source: string;
    cod_charges?: number;
    anonymous_cod?: boolean;
    cod_amount_limit?: number;
    enabled: boolean;
    methods: any;
    callback_url?: any;
    payment_selection_lock?: any;
    mode_of_payment: string;
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
    usages: number;
    limit: number;
    user_id: string;
    remaining_limit: number;
    is_active: boolean;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
};
type SetCODForUserRequest = {
    mobileno: string;
    is_active: boolean;
    merchant_user_id: string;
};
type SetCODOptionResponse = {
    success: boolean;
    message: string;
};
type EdcModelData = {
    aggregator: string;
    models: string[];
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
    statistics: StatisticsData;
    success: boolean;
};
type EdcAddRequest = {
    edc_device_serial_no: string;
    edc_model: string;
    aggregator_id: number;
    store_id: number;
    device_tag?: string;
    terminal_serial_no: string;
};
type EdcDevice = {
    edc_device_serial_no: string;
    merchant_store_pos_code?: string;
    edc_model?: string;
    store_id: number;
    aggregator_id: number;
    terminal_unique_identifier: string;
    device_tag: string;
    is_active: boolean;
    aggregator_name?: string;
    application_id: string;
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
    edc_device_serial_no?: string;
    merchant_store_pos_code?: string;
    edc_model?: string;
    aggregator_id?: number;
    device_tag?: string;
    is_active?: string;
    store_id?: number;
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
    timeout?: number;
    contact: string;
    aggregator: string;
    currency: string;
    method: string;
    merchant_order_id: string;
    email: string;
    razorpay_payment_id?: string;
    vpa?: string;
    customer_id: string;
    order_id: string;
    device_id?: string;
    amount: number;
};
type PaymentInitializationResponse = {
    upi_poll_url?: string;
    success: boolean;
    polling_url: string;
    virtual_id?: string;
    timeout?: number;
    currency?: string;
    merchant_order_id: string;
    status?: string;
    aggregator_order_id?: string;
    amount?: number;
    razorpay_payment_id?: string;
    bqr_image?: string;
    vpa?: string;
    customer_id?: string;
    method: string;
    device_id?: string;
    aggregator: string;
};
type PaymentStatusUpdateRequest = {
    contact: string;
    currency: string;
    method: string;
    merchant_order_id: string;
    email: string;
    status: string;
    amount: number;
    vpa?: string;
    customer_id: string;
    order_id: string;
    device_id?: string;
    aggregator: string;
};
type PaymentStatusUpdateResponse = {
    success?: boolean;
    status: string;
    redirect_url?: string;
    aggregator_name: string;
    retry: boolean;
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
type ShipmentStatus = {
    title: string;
    status: string;
    hex_code: string;
    actual_status: string;
    ops_status: string;
};
type UserDataInfo = {
    email?: string;
    gender?: string;
    last_name?: string;
    uid?: number;
    is_anonymous_user?: boolean;
    avis_user_id?: string;
    first_name?: string;
    name?: string;
    mobile?: string;
};
type Prices = {
    cashback_applied?: number;
    price_effective?: number;
    discount?: number;
    delivery_charge?: number;
    transfer_price?: number;
    price_marked?: number;
    cod_charges?: number;
    refund_credit?: number;
    refund_amount?: number;
    fynd_credits?: number;
    amount_paid_roundoff?: number;
    coupon_value?: number;
    amount_paid?: number;
    value_of_good?: number;
    tax_collected_at_source?: number;
    cashback?: number;
    promotion_effective_discount?: number;
};
type GSTDetailsData = {
    gst_fee: number;
    brand_calculated_amount: number;
    gstin_code: string;
    value_of_good: number;
    tax_collected_at_source: number;
};
type PlatformItem = {
    department_id?: number;
    l1_category?: string[];
    l3_category_name?: string;
    can_return?: boolean;
    can_cancel?: boolean;
    color?: string;
    images?: string[];
    size?: string;
    l3_category?: number;
    image?: string[];
    name?: string;
    id?: number;
    code?: string;
};
type BagUnit = {
    total_shipment_bags: number;
    can_cancel?: boolean;
    can_return?: boolean;
    prices?: Prices;
    shipment_id: string;
    item_quantity: number;
    status: any;
    gst?: GSTDetailsData;
    ordering_channel: string;
    item?: PlatformItem;
    bag_id: number;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type ShipmentItem = {
    company?: any;
    payment_methods?: any;
    shipment_status?: ShipmentStatus;
    user?: UserDataInfo;
    total_bags_count: number;
    prices?: Prices;
    bags?: BagUnit[];
    shipment_id?: string;
    shipment_created_at: string;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_centre: string;
    sla?: any;
    channel?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    created_at: string;
    application?: any;
    id: string;
    total_shipments_in_order: number;
};
type FilterInfoOption = {
    value?: string;
    name?: string;
    text: string;
};
type FiltersInfo = {
    value: string;
    options?: FilterInfoOption[];
    type: string;
    text: string;
};
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
    applied_filters?: any;
    page?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type BagStateMapper = {
    app_display_name?: string;
    bs_id: number;
    app_state_name?: string;
    journey_type: string;
    state_type: string;
    is_active?: boolean;
    name: string;
    app_facing?: boolean;
    notify_customer?: boolean;
    display_name: string;
};
type BagStatusHistory = {
    app_display_name?: string;
    store_id?: number;
    bsh_id?: number;
    reasons?: any[];
    bag_state_mapper?: BagStateMapper;
    forward?: boolean;
    shipment_id?: string;
    status: string;
    state_type?: string;
    updated_at?: string;
    delivery_awb_number?: string;
    delivery_partner_id?: number;
    created_at?: string;
    kafka_sync?: boolean;
    state_id?: number;
    bag_id?: number;
    display_name?: string;
};
type ShipmentPayments = {
    logo?: string;
    mode?: string;
    source?: string;
};
type OrderDetailsData = {
    source?: string;
    affiliate_id?: string;
    order_date?: string;
    ordering_channel_logo?: any;
    cod_charges?: string;
    fynd_order_id: string;
    ordering_channel?: string;
    tax_details?: any;
    order_value?: string;
};
type BagGST = {
    gst_fee?: number;
    gst_tax_percentage?: number;
    brand_calculated_amount?: number;
    gstin_code?: string;
    gst_tag?: string;
    hsn_code?: string;
    is_default_hsn_code?: boolean;
    value_of_good?: number;
};
type CurrentStatus = {
    state_id?: number;
    store_id?: number;
    bag_state_mapper?: BagStateMapper;
    shipment_id?: string;
    status?: string;
    state_type?: string;
    updated_at?: string;
    delivery_partner_id?: number;
    created_at?: string;
    kafka_sync?: boolean;
    delivery_awb_number?: string;
    bag_id?: number;
    current_status_id: number;
};
type BagConfigs = {
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
    allow_force_return: boolean;
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
    discount_rules?: DiscountRules[];
    amount?: number;
    promotion_name?: string;
    mrp_promotion?: boolean;
    promotion_type?: string;
    buy_rules?: BuyRules[];
    article_quantity?: number;
    promo_id?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    cashback_applied: number;
    discount: number;
    added_to_fynd_cash: boolean;
    brand_calculated_amount: number;
    item_name: string;
    cod_charges: number;
    amount_paid_roundoff?: number;
    total_units: number;
    tax_collected_at_source?: number;
    gst_fee: number;
    refund_credit: number;
    hsn_code: string;
    amount_paid: number;
    value_of_good: number;
    cashback: number;
    promotion_effective_discount: number;
    price_effective: number;
    coupon_effective_discount: number;
    gst_tax_percentage: number;
    transfer_price: number;
    size: string;
    gst_tag: string;
    fynd_credits: number;
    coupon_value: number;
    delivery_charge: number;
    identifiers: Identifier;
    price_marked: number;
};
type OrderBrandName = {
    brand_name: string;
    company: string;
    modified_on?: string;
    logo: string;
    created_on: string;
    id: number;
};
type OrderBagArticle = {
    return_config?: any;
    identifiers?: any;
    uid?: string;
};
type PlatformDeliveryAddress = {
    email?: string;
    latitude?: number;
    version?: string;
    pincode?: string;
    address2?: string;
    longitude?: number;
    country?: string;
    state?: string;
    updated_at?: string;
    city?: string;
    area?: string;
    created_at?: string;
    address_category?: string;
    address1?: string;
    contact_person?: string;
    phone?: string;
    address_type?: string;
    landmark?: string;
};
type OrderBags = {
    can_cancel?: boolean;
    identifier?: string;
    gst_details?: BagGST;
    quantity?: number;
    seller_identifier?: string;
    bag_id: number;
    current_status?: CurrentStatus;
    bag_configs?: BagConfigs;
    item?: PlatformItem;
    display_name?: string;
    prices?: Prices;
    line_number?: number;
    applied_promos?: AppliedPromos[];
    financial_breakup?: FinancialBreakup;
    entity_type?: string;
    brand?: OrderBrandName;
    can_return?: boolean;
    article?: OrderBagArticle;
    delivery_address?: PlatformDeliveryAddress;
    parent_promo_bags?: any;
};
type TrackingList = {
    time?: string;
    is_current?: boolean;
    status: string;
    is_passed?: boolean;
    text: string;
};
type Dimensions = {
    unit?: string;
    height?: number;
    is_default?: boolean;
    length?: number;
    width?: number;
};
type Meta = {
    dimension?: Dimensions;
};
type PDFLinks = {
    po_invoice?: string;
    invoice_a6?: string;
    credit_note_url?: string;
    invoice?: string;
    label?: string;
    label_a6?: string;
    label_a4?: string;
    b2b?: string;
    invoice_a4?: string;
    invoice_type: string;
    label_pos?: string;
    label_type: string;
    invoice_pos?: string;
    delivery_challan_a4?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type EinvoiceInfo = {
    credit_note?: any;
    invoice?: any;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type LockData = {
    locked?: boolean;
    mto?: boolean;
    lock_message?: string;
};
type BuyerDetails = {
    address: string;
    pincode: number;
    ajio_site_id?: string;
    state: string;
    gstin: string;
    name: string;
    city: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentMeta = {
    return_affiliate_shipment_id?: string;
    due_date?: string;
    formatted?: Formatted;
    einvoice_info?: EinvoiceInfo;
    assign_dp_from_sb?: boolean;
    weight: number;
    packaging_name?: string;
    dp_sort_key?: string;
    dp_options?: any;
    auto_trigger_dp_assignment_acf: boolean;
    timestamp?: ShipmentTimeStamp;
    ewaybill_info?: any;
    awb_number?: string;
    box_type?: string;
    order_type?: string;
    po_number?: string;
    lock_data?: LockData;
    shipment_weight?: number;
    b2b_buyer_details?: BuyerDetails;
    marketplace_store_id?: string;
    same_store_available: boolean;
    fulfilment_priority_text?: string;
    forward_affiliate_shipment_id?: string;
    forward_affiliate_order_id?: string;
    return_details?: any;
    external?: any;
    shipment_volumetric_weight?: number;
    return_awb_number?: string;
    debug_info?: DebugInfo;
    b2c_buyer_details?: any;
    dp_id?: string;
    return_affiliate_order_id?: string;
    dp_name?: string;
    bag_weight?: any;
    store_invoice_updated_date?: string;
    return_store_node?: number;
};
type AffiliateMeta = {
    channel_shipment_id?: string;
    channel_order_id?: string;
    due_date?: string;
    coupon_code?: string;
    is_priority?: boolean;
    order_item_id?: string;
    box_type?: string;
    size_level_total_qty?: number;
    employee_discount?: number;
    loyalty_discount?: number;
    quantity?: number;
};
type AffiliateDetails = {
    pdf_links?: PDFLinks;
    company_affiliate_tag?: string;
    shipment_meta: ShipmentMeta;
    affiliate_id?: string;
    affiliate_store_id: string;
    affiliate_order_id: string;
    affiliate_shipment_id: string;
    ad_id?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
};
type UserDetailsData = {
    email?: string;
    address: string;
    pincode: string;
    country: string;
    state: string;
    name: string;
    city: string;
    phone: string;
};
type OrderingStoreDetails = {
    address: string;
    store_name: string;
    pincode: string;
    country: string;
    state: string;
    meta: any;
    city: string;
    ordering_store_id: number;
    contact_person: string;
    phone: string;
    code: string;
};
type FulfillingStore = {
    address: string;
    store_name: string;
    pincode: string;
    phone: string;
    country: string;
    state: string;
    fulfillment_channel: string;
    meta: any;
    city: string;
    contact_person: string;
    id: number;
    code: string;
};
type InvoiceInfo = {
    store_invoice_id?: string;
    label_url?: string;
    invoice_url?: string;
    credit_note_id?: string;
    updated_date?: string;
};
type ShipmentStatusData = {
    shipment_id?: string;
    status?: string;
    bag_list?: string[];
    created_at?: string;
    id?: number;
};
type CompanyDetails = {
    company_cin?: string;
    company_name?: string;
    address?: any;
    company_id?: number;
};
type DPDetailsData = {
    pincode?: string;
    track_url?: string;
    gst_tag?: string;
    country?: string;
    eway_bill_id?: string;
    awb_no?: string;
    name?: string;
    id?: number;
};
type PlatformShipment = {
    shipment_images?: string[];
    user_agent?: string;
    journey_type?: string;
    vertical?: string;
    gst_details?: GSTDetailsData;
    bag_status_history?: BagStatusHistory[];
    payments?: ShipmentPayments;
    custom_meta?: any[];
    coupon?: any;
    order?: OrderDetailsData;
    shipment_quantity?: number;
    fulfilment_priority?: number;
    lock_status?: boolean;
    payment_methods?: any;
    user?: UserDataInfo;
    bags?: OrderBags[];
    total_items?: number;
    tracking_list?: TrackingList[];
    priority_text?: string;
    meta?: Meta;
    affiliate_details?: AffiliateDetails;
    forward_shipment_id?: string;
    packaging_type?: string;
    delivery_slot?: any;
    enable_dp_tracking?: boolean;
    total_bags?: number;
    delivery_details?: UserDetailsData;
    ordering_store?: OrderingStoreDetails;
    prices?: Prices;
    shipment_id: string;
    operational_status?: string;
    payment_mode?: string;
    platform_logo?: string;
    picked_date?: string;
    fulfilling_store?: FulfillingStore;
    invoice_id?: string;
    billing_details?: UserDetailsData;
    shipment_status?: string;
    invoice?: InvoiceInfo;
    status?: ShipmentStatusData;
    company_details?: CompanyDetails;
    dp_details?: DPDetailsData;
};
type ShipmentInfoResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    message?: string;
};
type TransactionData = {
    terminal_id?: string;
    transaction_id?: string;
    currency?: string;
    status?: string;
    payment_id?: string;
    entity?: string;
    amount_paid?: string;
    unique_reference_number?: string;
};
type BillingStaffDetails = {
    first_name?: string;
    last_name?: string;
    user?: string;
    staff_id?: number;
};
type PlatformUserDetails = {
    platform_user_first_name?: string;
    platform_user_id?: string;
    platform_user_last_name?: string;
};
type OrderMeta = {
    extra_meta?: any;
    transaction_data?: TransactionData;
    order_platform?: string;
    comment?: string;
    customer_note?: string;
    payment_type?: string;
    order_child_entities?: string[];
    staff?: any;
    billing_staff_details?: BillingStaffDetails;
    platform_user_details?: PlatformUserDetails;
    cart_id?: number;
    mongo_cart_id?: number;
    ordering_store?: number;
    order_type?: string;
    company_logo?: string;
    order_tags?: any[];
    employee_id?: number;
    currency_symbol?: string;
    files?: any[];
};
type TaxDetails = {
    gstin?: string;
    pan_no?: string;
};
type OrderDict = {
    payment_methods?: any;
    prices?: Prices;
    meta?: OrderMeta;
    order_date: string;
    fynd_order_id: string;
    tax_details?: TaxDetails;
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    success: boolean;
    shipments?: PlatformShipment[];
};
type SubLane = {
    value?: string;
    index?: number;
    total_items?: number;
    actions?: any[];
    text?: string;
};
type SuperLane = {
    total_items?: number;
    value: string;
    options?: SubLane[];
    text: string;
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
    order_id?: string;
    breakup_values?: PlatformBreakupValues[];
    user_info?: UserDataInfo;
    total_order_value?: number;
    payment_mode?: string;
    order_created_time?: string;
    meta?: any;
    channel?: PlatformChannel;
    shipments?: PlatformShipment[];
    order_value?: number;
};
type OrderListingResponse = {
    items?: PlatformOrderItems[];
    success?: boolean;
    message?: string;
    total_count?: number;
    page?: Page;
    lane?: string;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    value: number;
    options?: Options[];
    key: string;
    text: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    last_location_recieved_at?: string;
    updated_time?: string;
    account_name?: string;
    reason?: string;
    shipment_type?: string;
    status?: string;
    meta?: any;
    updated_at?: string;
    raw_status?: string;
    awb?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    action_centre?: FiltersInfo[];
    processed?: FiltersInfo[];
    returned?: FiltersInfo[];
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
    s3_key?: string;
    report_id?: string;
    request_details?: any;
    status?: string;
    report_type?: string;
    report_created_at?: string;
    report_name?: string;
    report_requested_at?: string;
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
    value?: string;
    type?: string;
    message?: string;
};
type JioCodeUpsertResponse = {
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
    trace_id?: string;
    identifier?: string;
    data?: any[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    invoice_status?: string;
    store_code?: string;
    store_id?: string;
    invoice?: any;
    store_name?: string;
    label?: any;
    company_id?: string;
    do_invoice_label_generated: boolean;
    batch_id: string;
    data?: any;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type URL = {
    url?: string;
};
type FileResponse = {
    file_name?: string;
    operation?: string;
    tags?: string[];
    content_type?: string;
    size?: number;
    upload?: FileUploadResponse;
    method?: string;
    cdn?: URL;
    namespace?: string;
    file_path?: string;
};
type bulkListingData = {
    excel_url?: string;
    company_id?: number;
    successful_shipments?: any[];
    uploaded_on?: string;
    failed?: number;
    failed_shipments?: any[];
    id?: string;
    store_id?: number;
    processing?: number;
    store_name?: string;
    successful?: number;
    total?: number;
    processing_shipments?: string[];
    user_id?: string;
    file_name?: string;
    user_name?: string;
    store_code?: string;
    status?: string;
    batch_id?: string;
};
type BulkListingPage = {
    has_next?: boolean;
    total?: number;
    size?: number;
    type?: string;
    has_previous?: boolean;
    current?: number;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    success?: boolean;
    page?: BulkListingPage;
    error?: string;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    question_set?: QuestionSet[];
    qc_type?: string[];
    id?: number;
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
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    company_id?: string;
    total_shipments_count?: number;
    processing_shipments_count?: number;
    batch_id?: string;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    error?: string[];
    success?: string;
    uploaded_by?: string;
    message?: string;
    status?: boolean;
    user_id?: string;
    uploaded_on?: string;
    data?: BulkActionDetailsDataField[];
    failed_records?: string[];
};
type BagGSTDetails = {
    gst_fee: number;
    igst_gst_fee: string;
    sgst_tax_percentage: number;
    gst_tax_percentage: number;
    brand_calculated_amount: number;
    hsn_code_id: string;
    gstin_code?: string;
    cgst_tax_percentage: number;
    gst_tag: string;
    sgst_gst_fee: string;
    hsn_code: string;
    is_default_hsn_code?: boolean;
    value_of_good: number;
    tax_collected_at_source: number;
    cgst_gst_fee: string;
    igst_tax_percentage: number;
};
type B2BPODetails = {
    partial_can_ret?: boolean;
    item_base_price?: number;
    po_tax_amount?: number;
    docker_number?: string;
    po_line_amount?: number;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type AffiliateBagDetails = {
    employee_discount?: number;
    affiliate_order_id: string;
    loyalty_discount?: number;
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
};
type Attributes = {
    essential?: string;
    gender?: string[];
    brand_name?: string;
    primary_material?: string;
    primary_color?: string;
    name?: string;
    marketer_name?: string;
    primary_color_hex?: string;
    marketer_address?: string;
};
type Item = {
    department_id?: number;
    branch_url?: string;
    can_cancel?: boolean;
    l3_category?: number;
    slug_key: string;
    last_updated_at?: string;
    meta?: any;
    l2_category_id?: number;
    brand_id: number;
    name: string;
    attributes: Attributes;
    l3_category_name?: string;
    l2_category?: string[];
    size: string;
    image: string[];
    gender?: string;
    l1_category?: string[];
    can_return?: boolean;
    brand: string;
    color?: string;
    webstore_product_url?: string;
    l1_category_id?: number;
    item_id: number;
    code?: string;
};
type ArticleDetails = {
    status?: any;
};
type EInvoicePortalDetails = {
    password?: string;
    username?: string;
    user?: string;
};
type StoreEinvoice = {
    enabled: boolean;
    username?: string;
    user?: string;
    password?: string;
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
    value: string;
    verified: boolean;
    ds_type: string;
    legal_name: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    product_return_config?: any;
    ewaybill_portal_details?: any;
    notification_emails?: string[];
    einvoice_portal_details?: EInvoicePortalDetails;
    additional_contact_details?: any;
    gst_credentials: StoreGstCredentials;
    stage: string;
    gst_number?: string;
    timing?: any[];
    documents?: StoreDocuments;
    display_name: string;
};
type StoreAddress = {
    email?: string;
    latitude: number;
    version?: string;
    pincode: number;
    country: string;
    state: string;
    area?: string;
    created_at: string;
    landmark?: string;
    address2?: string;
    updated_at: string;
    country_code: string;
    longitude: number;
    address_category: string;
    address1: string;
    contact_person: string;
    city: string;
    phone: string;
    address_type: string;
};
type Store = {
    latitude: number;
    pincode: string;
    country: string;
    state: string;
    is_active?: boolean;
    mall_name?: string;
    created_at: string;
    store_email: string;
    address2?: string;
    company_id: number;
    login_username: string;
    vat_no?: string;
    meta: StoreMeta;
    brand_id?: any;
    fulfillment_channel: string;
    name: string;
    updated_at?: string;
    longitude: number;
    is_archived?: boolean;
    order_integration_id?: string;
    packaging_material_count?: number;
    store_active_from?: string;
    location_type: string;
    address1: string;
    contact_person: string;
    brand_store_tags?: string[];
    alohomora_user_id?: number;
    parent_store_id?: number;
    s_id: string;
    store_address_json?: StoreAddress;
    city: string;
    mall_area?: string;
    is_enabled_for_recon?: boolean;
    phone: number;
    code?: string;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type Brand = {
    company: string;
    brand_name: string;
    modified_on?: number;
    logo?: string;
    start_date?: string;
    created_on?: number;
    brand_id: number;
    credit_note_expiry_days?: number;
    invoice_prefix?: string;
    is_virtual_invoice?: boolean;
    script_last_ran?: string;
    pickup_location?: string;
    credit_note_allowed?: boolean;
};
type Weight = {
    unit?: string;
    shipping?: number;
    is_default?: boolean;
};
type ReturnConfig = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Article = {
    uid: string;
    a_set?: any;
    weight?: Weight;
    raw_meta?: any;
    dimensions?: Dimensions;
    identifiers: Identifier;
    size: string;
    is_set?: boolean;
    return_config?: ReturnConfig;
    child_details?: any;
    _id: string;
    seller_identifier: string;
    code?: string;
    esp_modified?: any;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
};
type BagDetailsPlatformResponse = {
    bag_update_time?: number;
    current_operational_status: BagStatusHistory;
    identifier?: string;
    journey_type: string;
    gst_details: BagGSTDetails;
    restore_promos?: any;
    bag_status_history?: BagStatusHistory;
    quantity?: number;
    current_status: BagStatusHistory;
    seller_identifier?: string;
    meta?: BagMeta;
    affiliate_bag_details: AffiliateBagDetails;
    affiliate_details?: AffiliateDetails;
    original_bag_list?: number[];
    item: Item;
    display_name?: string;
    bag_status: BagStatusHistory[];
    qc_required?: any;
    article_details?: ArticleDetails;
    ordering_store?: Store;
    prices: Prices;
    dates?: Dates;
    line_number?: number;
    operational_status?: string;
    applied_promos?: any[];
    shipment_id?: string;
    order_integration_id?: string;
    b_id: number;
    restore_coupon?: boolean;
    financial_breakup: FinancialBreakup[];
    entity_type?: string;
    reasons?: any[];
    tags?: string[];
    brand: Brand;
    article: Article;
    b_type?: string;
    status: BagReturnableCancelableStatus;
    parent_promo_bags?: any;
    no_of_bags_order?: number;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    has_next: boolean;
    size: number;
    item_total: number;
    page_type: string;
    current: number;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type GeneratePosOrderReceiptResponse = {
    order_id?: string;
    success?: boolean;
    payment_receipt?: string;
    invoice_receipt?: string;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    shipment_id?: string;
    message?: string;
    status?: number;
    error?: string;
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
    affiliate_id?: string;
    item_id?: string;
    reason_ids?: number[];
    affiliate_order_id?: string;
    store_id: number;
    bag_id?: number;
    affiliate_bag_id?: string;
    set_id?: string;
    mongo_article_id?: string;
    fynd_order_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_id?: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
    affiliate_shipment_id?: string;
    id?: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    entities: Entities[];
    entity_type: string;
    action: string;
};
type Bags = {
    bag_id?: number;
    affiliate_bag_id?: string;
    is_locked?: boolean;
    affiliate_order_id?: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    affiliate_id?: string;
    is_bag_locked?: boolean;
    bags?: Bags[];
    is_shipment_locked?: boolean;
    shipment_id?: string;
    affiliate_shipment_id?: string;
    lock_status?: boolean;
    original_filter?: OriginalFilter;
    status?: string;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    message?: string;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    platform_name?: string;
    description?: string;
    from_datetime?: string;
    logo_url?: string;
    created_at?: string;
    platform_id?: string;
    id: number;
    company_id?: number;
    to_datetime?: string;
    title?: string;
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
    identifier?: string;
    line_number?: number;
};
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
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
    reason_text?: string;
    reason_id?: number;
};
type ProductsReasonsFilters = {
    quantity?: number;
    identifier?: string;
    line_number?: number;
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
type ShipmentsRequest = {
    products?: Products[];
    data_updates?: DataUpdates;
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
    force_transition?: boolean;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    exception?: string;
    code?: string;
    stack_trace?: string;
    final_state?: any;
    identifier?: string;
    message?: string;
    status?: number;
    meta?: any;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    first_name: string;
    state: string;
    email: string;
    last_name: string;
    mobile: number;
    address2?: string;
    address1?: string;
    phone: number;
    country: string;
    city: string;
    pincode: string;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    transfer_price: number;
    price_marked: number;
    item_size: string;
    discount: number;
    company_id: number;
    modified_on: string;
    hsn_code_id: string;
    quantity: number;
    amount_paid: number;
    item_id: number;
    fynd_store_id: string;
    avl_qty: number;
    identifier: any;
    seller_identifier: string;
    sku: string;
    affiliate_meta: any;
    _id: string;
    store_id: number;
    price_effective: number;
    delivery_charge: number;
    unit_price: number;
    pdf_links?: MarketPlacePdf;
    affiliate_store_id: string;
};
type OrderPriority = {
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
};
type ArticleDetails1 = {
    quantity: number;
    brand_id: number;
    _id: string;
    weight: any;
    category: any;
    attributes: any;
    dimension: any;
};
type ShipmentDetails = {
    box_type?: string;
    articles: ArticleDetails1[];
    dp_id?: number;
    affiliate_shipment_id: string;
    shipments: number;
    meta?: any;
    fulfillment_id: number;
};
type ShipmentConfig = {
    payment_mode: string;
    action: string;
    location_details?: LocationDetails;
    source: string;
    identifier: string;
    shipment: ShipmentDetails[];
    journey: string;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    items: any;
    payment?: any;
    discount: number;
    user: UserData;
    bags: AffiliateBag[];
    affiliate_order_id?: string;
    coupon?: string;
    payment_mode: string;
    order_priority?: OrderPriority;
    billing_address: OrderUser;
    delivery_charges: number;
    shipment?: ShipmentData;
    order_value: number;
    cod_charges: number;
    shipping_address: OrderUser;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
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
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryConfig = {
    payment?: AffiliateInventoryPaymentConfig;
    order?: AffiliateInventoryOrderConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    token: string;
    description?: string;
    secret: string;
    created_at: string;
    updated_at: string;
    owner: string;
    id: string;
    meta?: AffiliateAppConfigMeta[];
    name: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    token: string;
    config?: AffiliateConfig;
    id: string;
};
type OrderConfig = {
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    store_lookup?: string;
    bag_end_state?: string;
    affiliate: Affiliate;
    article_lookup?: string;
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
    description: string;
    slug: string;
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
    shipment_id: string;
    identifier?: string;
    line_number?: string;
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
    l2_detail?: string;
    l3_detail?: string;
    ticket_url?: string;
    type: string;
    user: string;
    bag_id?: number;
    ticket_id?: string;
    message: string;
    l1_detail?: string;
    createdat: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    country_code: string;
    phone_number: number;
    payment_mode: string;
    order_id: string;
    shipment_id: number;
    brand_name: string;
    message: string;
    customer_name: string;
    amount_paid: number;
};
type SendSmsPayload = {
    bag_id: number;
    slug: string;
    data?: SmsDataPayload;
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
    bag_list?: number[];
    shipment_id?: string;
    remarks?: string;
    status?: string;
    id: number;
    meta: Meta1;
};
type OrderStatusData = {
    order_details: OrderDetails;
    shipment_details?: ShipmentDetail[];
    errors?: string[];
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    order_type: string;
    dp_id: number;
    qc_required: string;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type PaymentMethod = {
    refund_by: string;
    amount: number;
    meta?: any;
    transaction_data?: any;
    mode: string;
    collect_by: string;
    name: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type BillingInfo = {
    alternate_email?: string;
    primary_mobile_number: string;
    title?: string;
    state: string;
    middle_name?: string;
    address2?: string;
    address1: string;
    gender?: string;
    first_name: string;
    floor_no?: string;
    state_code?: string;
    alternate_mobile_number?: string;
    customer_code?: string;
    external_customer_code?: string;
    country_code?: string;
    primary_email: string;
    last_name?: string;
    house_no?: string;
    country: string;
    city: string;
    pincode: string;
};
type ShippingInfo = {
    alternate_email?: string;
    primary_mobile_number: string;
    shipping_type?: string;
    title?: string;
    state: string;
    middle_name?: string;
    address2?: string;
    address1: string;
    landmark?: string;
    gender?: string;
    first_name: string;
    floor_no?: string;
    state_code?: string;
    alternate_mobile_number?: string;
    customer_code?: string;
    slot?: any[];
    external_customer_code?: string;
    country_code?: string;
    primary_email: string;
    last_name?: string;
    house_no?: string;
    country: string;
    geo_location?: any;
    address_type?: string;
    city: string;
    pincode: string;
};
type Tax = {
    amount: any;
    breakup?: any[];
    rate: number;
    name: string;
};
type Charge = {
    type: string;
    code?: string;
    amount: any;
    tax?: Tax;
    name: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
    pack_by_date?: string;
    dispatch_by_date?: string;
};
type LineItem = {
    quantity?: number;
    custom_messasge?: string;
    external_line_id?: string;
    charges?: Charge[];
    seller_identifier: string;
    meta?: any;
};
type Shipment = {
    processing_dates?: ProcessingDates;
    priority?: number;
    location_id: number;
    line_items: LineItem[];
    external_shipment_id?: string;
    meta?: any;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type CreateOrderAPI = {
    payment_info: PaymentInfo;
    billing_info: BillingInfo;
    shipping_info: ShippingInfo;
    external_order_id?: string;
    charges?: Charge[];
    currency_info?: any;
    external_creation_date?: string;
    shipments: Shipment[];
    tax_info?: TaxInfo;
    meta?: any;
};
type CreateOrderErrorReponse = {
    exception?: string;
    code?: string;
    stack_trace?: string;
    info?: any;
    request_id?: string;
    message: string;
    status: number;
    meta?: string;
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
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
    shipment_assignment?: string;
    logo_url?: any;
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
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
    mobile: number;
    end_date: string;
    order_details?: FyndOrderIdList[];
    start_date: string;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    app_id?: string;
    result: SearchKeywordResult;
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
};
type GetSearchWordsData = {
    app_id?: string;
    result?: any;
    uid?: string;
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type AutocompletePageAction = {
    query?: any;
    url?: string;
    type?: string;
    params?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type Media = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type AutocompleteResult = {
    _custom_json?: any;
    display?: string;
    action?: AutocompleteAction;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    results?: AutocompleteResult[];
    is_active?: boolean;
    _custom_json?: any;
    words?: string[];
};
type GetAutocompleteWordsData = {
    app_id?: string;
    uid?: string;
    results?: any[];
    _custom_json?: any;
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    results?: any[];
    app_id?: string;
    words?: string[];
};
type ProductBundleItem = {
    min_quantity: number;
    max_quantity: number;
    product_uid: number;
    auto_select?: boolean;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
};
type ProductBundleRequest = {
    same_store_assignment?: boolean;
    choice: string;
    meta?: any;
    created_on?: string;
    page_visibility?: string[];
    name: string;
    created_by?: any;
    is_active: boolean;
    logo?: string;
    modified_on?: string;
    modified_by?: any;
    products: ProductBundleItem[];
    company_id?: number;
    slug: string;
};
type GetProductBundleCreateResponse = {
    same_store_assignment?: boolean;
    choice: string;
    meta?: any;
    created_on?: string;
    page_visibility?: string[];
    name: string;
    created_by?: any;
    is_active: boolean;
    logo?: string;
    modified_on?: string;
    modified_by?: any;
    id?: string;
    products: ProductBundleItem[];
    company_id?: number;
    slug: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleUpdateRequest = {
    same_store_assignment?: boolean;
    choice: string;
    meta?: any;
    page_visibility?: string[];
    name: string;
    is_active: boolean;
    logo?: string;
    modified_on?: string;
    modified_by?: any;
    products: ProductBundleItem[];
    company_id?: number;
    slug: string;
};
type Size = {
    display?: string;
    quantity?: number;
    value?: string;
    is_available?: boolean;
};
type Price = {
    max_marked?: number;
    max_effective?: number;
    min_effective?: number;
    currency?: string;
    min_marked?: number;
};
type LimitedProductData = {
    images?: string[];
    item_code?: string;
    attributes?: any;
    quantity?: number;
    sizes?: string[];
    uid?: number;
    name?: string;
    price?: any;
    short_description?: string;
    country_of_origin?: string;
    slug?: string;
    identifier?: any;
};
type GetProducts = {
    min_quantity?: number;
    max_quantity?: number;
    sizes?: Size[];
    product_uid?: number;
    auto_select?: boolean;
    allow_remove?: boolean;
    price?: Price;
    auto_add_to_cart?: boolean;
    product_details?: LimitedProductData;
};
type GetProductBundleResponse = {
    same_store_assignment?: boolean;
    choice?: string;
    meta?: any;
    name?: string;
    is_active?: boolean;
    logo?: string;
    page_visibility?: string[];
    products?: GetProducts[];
    company_id?: number;
    slug?: string;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    company_id?: number;
    title: string;
    image?: string;
    created_on?: string;
    subtitle?: string;
    brand_id?: number;
    name: string;
    tag?: string;
    created_by?: any;
    modified_on?: string;
    active?: boolean;
    modified_by?: any;
    id?: string;
    guide?: Guide;
    description?: string;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type SizeGuideResponse = {
    created_on?: string;
    title?: string;
    subtitle?: string;
    brand_id?: number;
    modified_by?: any;
    created_by?: any;
    name?: string;
    tag?: string;
    active?: boolean;
    modified_on?: string;
    id?: string;
    guide?: any;
    company_id?: number;
};
type MetaFields = {
    key: string;
    value: string;
};
type ApplicationItemSEO = {
    title?: string;
    description?: string;
};
type ApplicationItemMOQ = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type ApplicationItemMeta = {
    is_cod?: boolean;
    _custom_meta?: MetaFields[];
    is_gift?: boolean;
    alt_text?: any;
    seo?: ApplicationItemSEO;
    _custom_json?: any;
    moq?: ApplicationItemMOQ;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type SEOData = {
    title?: string;
    description?: string;
};
type MOQData = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type OwnerAppItemResponse = {
    is_cod?: boolean;
    is_gift?: boolean;
    alt_text?: any;
    seo?: SEOData;
    moq?: MOQData;
};
type GetConfigMetadataResponse = {
    values?: any[];
    condition?: any[];
    data: any[];
};
type AttributeDetailsGroup = {
    priority: number;
    display_type: string;
    name: string;
    is_active: boolean;
    logo?: string;
    unit?: string;
    key?: string;
    slug?: string;
};
type AppConfigurationDetail = {
    priority: number;
    app_id: string;
    attributes?: AttributeDetailsGroup[];
    is_default: boolean;
    name?: string;
    template_slugs?: string[];
    is_active: boolean;
    logo?: string;
    slug: string;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    current: number;
    has_next: boolean;
    next: number;
    total_count: number;
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
    app_id: string;
    is_default: boolean;
    name?: string;
    is_active: boolean;
    logo?: string;
    key: string;
    default_key: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
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
    filter_types?: string[];
    display?: string;
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
    similar?: any;
    variant?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductConfig = {
    priority: number;
    title?: string;
    subtitle?: string;
    is_active: boolean;
    logo?: string;
    size?: ProductSize;
    key: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    priority: number;
    display_type: string;
    name: string;
    is_active: boolean;
    logo?: string;
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
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    map_values?: any[];
    map?: any;
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
    value?: string;
};
type ConfigurationListingFilterConfig = {
    priority: number;
    value_config?: ConfigurationListingFilterValue;
    name?: string;
    is_active: boolean;
    logo?: string;
    display_name?: string;
    key: string;
    type: string;
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
    config_id?: string;
    app_id: string;
    product?: ConfigurationProduct;
    config_type: string;
    created_on?: string;
    modified_by?: any;
    created_by?: any;
    modified_on?: string;
    listing?: ConfigurationListing;
    type?: string;
};
type AppCatalogConfiguration = {
    config_id?: string;
    app_id: string;
    product?: ConfigurationProduct;
    config_type: string;
    created_on?: string;
    modified_by?: any;
    created_by?: any;
    id?: string;
    modified_on?: string;
    listing?: ConfigurationListing;
    type?: string;
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
    config_id?: string;
    app_id: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_type: string;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
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
    currency_symbol?: string;
    selected_max?: number;
    selected_min?: number;
    count?: number;
    is_selected: boolean;
    display: string;
    query_format?: string;
    display_format?: string;
    value: any;
    min?: number;
    max?: number;
    currency_code?: string;
};
type ProductFiltersKey = {
    kind?: string;
    display: string;
    name: string;
    logo?: string;
    operators?: string[];
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
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type UserInfo = {
    email?: string;
    user_id?: string;
    username?: string;
    uid?: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionSchedule = {
    end?: string;
    cron?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
    start?: string;
};
type CreateCollection = {
    priority?: number;
    app_id: string;
    badge?: CollectionBadge;
    allow_sort?: boolean;
    meta?: any;
    tags?: string[];
    _locale_language?: any;
    description?: string;
    visible_facets_keys?: string[];
    slug: string;
    query?: CollectionQuery[];
    sort_on?: string;
    allow_facets?: boolean;
    is_active?: boolean;
    name: string;
    created_by?: UserInfo;
    is_visible?: boolean;
    modified_by?: UserInfo;
    _custom_json?: any;
    seo?: SeoDetail;
    type: string;
    logo: CollectionImage;
    banners: CollectionBanner;
    _schedule?: CollectionSchedule;
    published?: boolean;
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
type CollectionCreateResponse = {
    priority?: number;
    app_id?: string;
    badge?: any;
    allow_sort?: boolean;
    meta?: any;
    description?: string;
    visible_facets_keys?: string[];
    slug?: string;
    query?: CollectionQuery[];
    sort_on?: string;
    allow_facets?: boolean;
    tag?: string[];
    is_active?: boolean;
    cron?: any;
    name?: string;
    type?: string;
    logo?: BannerImage;
    banners?: ImageUrls;
    _schedule?: any;
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
    url: string;
    meta?: any;
    type?: string;
};
type GetCollectionDetailNest = {
    priority?: number;
    app_id?: string;
    badge?: any;
    allow_sort?: boolean;
    meta?: any;
    description?: string;
    visible_facets_keys?: string[];
    slug?: string;
    query?: CollectionQuery[];
    allow_facets?: boolean;
    uid?: string;
    tag?: string[];
    is_active?: boolean;
    cron?: any;
    name?: string;
    action?: Action;
    type?: string;
    logo?: Media1;
    banners?: ImageUrls;
    _schedule?: any;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    page?: Page;
    items?: GetCollectionDetailNest[];
};
type CollectionDetailResponse = {
    priority?: number;
    app_id?: string;
    badge?: any;
    allow_sort?: boolean;
    meta?: any;
    description?: string;
    visible_facets_keys?: string[];
    slug?: string;
    query?: CollectionQuery[];
    allow_facets?: boolean;
    uid?: string;
    tag?: string[];
    is_active?: boolean;
    cron?: any;
    name?: string;
    type?: string;
    logo?: Media1;
    banners?: ImageUrls;
    _schedule?: any;
};
type UpdateCollection = {
    priority?: number;
    badge?: CollectionBadge;
    allow_sort?: boolean;
    meta?: any;
    tags?: string[];
    _locale_language?: any;
    description?: string;
    visible_facets_keys?: string[];
    slug?: string;
    query?: CollectionQuery[];
    sort_on?: string;
    allow_facets?: boolean;
    is_active?: boolean;
    name?: string;
    is_visible?: boolean;
    modified_by?: UserInfo;
    _custom_json?: any;
    seo?: SeoDetail;
    type?: string;
    logo?: CollectionImage;
    banners?: CollectionBanner;
    _schedule?: CollectionSchedule;
    published?: boolean;
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    item?: ItemQueryForUserCollection[];
    query?: CollectionQuery[];
    type?: string;
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type ProductBrand = {
    name?: string;
    action?: Action;
    logo?: Media1;
    uid?: number;
};
type Price1 = {
    min?: number;
    currency_symbol?: string;
    max?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductDetailAttribute = {
    key?: string;
    type?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductListingDetail = {
    color?: string;
    highlights?: string[];
    sellable?: boolean;
    description?: string;
    slug: string;
    rating?: number;
    uid?: number;
    similars?: string[];
    promo_meta?: any;
    image_nature?: string;
    product_online_date?: string;
    tryouts?: string[];
    teaser_tag?: any;
    medias?: Media1[];
    name?: string;
    brand?: ProductBrand;
    price?: ProductListingPrice;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    short_description?: string;
    type?: string;
    item_code?: string;
    item_type?: string;
    rating_count?: number;
    attributes?: any;
    discount?: string;
    has_variant?: boolean;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    page?: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    sellable_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    available_sizes?: number;
    article_freshness?: number;
    total_articles?: number;
    available_articles?: number;
    name?: string;
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
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    store_ids?: number[];
    platform?: string;
    brand_ids?: number[];
    enabled?: boolean;
    opt_level: string;
    company_id?: number;
};
type CompanyOptIn = {
    store_ids: number[];
    platform: string;
    brand_ids: number[];
    enabled: boolean;
    opt_level: string;
    created_on: number;
    modified_by?: any;
    created_by?: any;
    modified_on: number;
    company_id: number;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    business_type?: string;
    name?: string;
    company_type?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    brand_id?: number;
    company_id?: number;
    total_article?: number;
    brand_name?: string;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    company?: string;
    brand?: number;
    store?: number;
};
type StoreDetail = {
    additional_contacts?: any[];
    timing?: any;
    manager?: any;
    created_on?: string;
    store_type?: string;
    address?: any;
    documents?: any[];
    uid?: number;
    store_code?: string;
    name?: string;
    display_name?: string;
    modified_on?: string;
    company_id?: number;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
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
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    range?: AttributeSchemaRange;
    multi?: boolean;
    mandatory?: boolean;
    format?: string;
    allowed_values?: string[];
    type: string;
};
type AttributeMasterFilter = {
    priority?: number;
    depends_on?: string[];
    indexing: boolean;
};
type GenderDetail = {
    departments?: string[];
    is_nested?: boolean;
    meta?: AttributeMasterMeta;
    details?: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    name?: string;
    logo?: string;
    id?: string;
    schema?: AttributeMaster;
    description?: string;
    slug?: string;
    filters?: AttributeMasterFilter;
};
type CategoriesResponse = {
    uid?: number;
    slug_key?: string;
    name?: string;
    template_slug?: string;
    slug?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: CategoriesResponse[];
};
type PTErrorResponse = {
    message?: string;
    status?: number;
    meta?: any;
    errors?: any;
    code?: string;
};
type DepartmentCreateUpdate = {
    synonyms?: string[];
    priority_order: number;
    tags?: string[];
    uid?: number;
    _cls?: string;
    name: string;
    is_active?: boolean;
    logo: string;
    _custom_json?: any;
    platforms?: any;
    slug?: string;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    contact?: string;
    _id?: string;
    uid?: string;
    username?: string;
    user_id?: string;
};
type GetDepartment = {
    synonyms?: string[];
    item_type?: string;
    priority_order?: number;
    created_on?: string;
    uid?: number;
    page_size?: number;
    name?: string;
    search?: string;
    is_active?: boolean;
    logo?: string;
    created_by?: UserSerializer;
    modified_on?: string;
    modified_by?: UserSerializer;
    page_no?: number;
    slug?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    message?: string;
    status?: number;
    meta?: any;
    errors?: any;
    code?: string;
};
type UserDetail = {
    contact?: string;
    super_user?: boolean;
    user_id: string;
    username: string;
};
type DepartmentModel = {
    synonyms?: string[];
    verified_by?: UserDetail;
    created_on: string;
    priority_order: number;
    verified_on?: string;
    _id?: any;
    uid: number;
    _cls?: string;
    modified_by?: UserDetail;
    created_by?: UserDetail;
    name: string;
    logo: string;
    is_active?: boolean;
    modified_on: string;
    _custom_json?: any;
    slug: string;
};
type ProductTemplate = {
    attributes?: string[];
    departments?: string[];
    categories?: string[];
    created_on?: string;
    is_archived?: boolean;
    tag?: string;
    name?: string;
    is_active?: boolean;
    logo?: string;
    is_physical: boolean;
    created_by?: any;
    modified_by?: any;
    modified_on?: string;
    description?: string;
    slug: string;
    is_expirable: boolean;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    highlights?: any;
    sizes?: any;
    tags?: any;
    size_guide?: any;
    brand_uid?: any;
    command?: any;
    multi_size?: any;
    country_of_origin?: any;
    description?: any;
    slug?: any;
    hsn_code?: any;
    no_of_boxes?: any;
    product_publish?: any;
    trader_type?: any;
    is_active?: any;
    is_dependent?: any;
    custom_order?: any;
    teaser_tag?: any;
    currency?: any;
    name?: any;
    product_group_tag?: any;
    category_slug?: any;
    short_description?: any;
    media?: any;
    item_code?: any;
    item_type?: any;
    trader?: any;
    variants?: any;
    return_config?: any;
};
type GlobalValidation = {
    title?: string;
    description?: string;
    properties?: Properties;
    type?: string;
    definitions?: any;
    required?: string[];
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    attributes?: string[];
    departments?: string[];
    categories?: string[];
    is_archived?: boolean;
    tag?: string;
    name?: string;
    is_active?: boolean;
    logo?: string;
    is_physical: boolean;
    id?: string;
    description?: string;
    slug: string;
    is_expirable: boolean;
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
type ProductDownloadItemsData = {
    templates?: string[];
    brand?: string[];
    type?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    template_tags?: any;
    status?: string;
    data?: ProductDownloadItemsData;
    task_id?: string;
    completed_on?: string;
    seller_id?: number;
    trigger_on?: string;
    url?: string;
    created_by?: VerifiedBy;
    id?: string;
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
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type Media2 = {
    portrait: string;
    logo: string;
    landscape: string;
};
type CategoryRequestBody = {
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    priority?: number;
    slug?: string;
    tryouts?: string[];
    level: number;
    hierarchy?: Hierarchy[];
    name: string;
    is_active: boolean;
    departments: number[];
    media?: Media2;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    priority?: number;
    slug?: string;
    tryouts?: string[];
    created_on?: string;
    uid?: number;
    hierarchy?: Hierarchy[];
    name: string;
    created_by?: any;
    is_active: boolean;
    modified_on?: string;
    id?: string;
    modified_by?: any;
    media?: Media2;
    departments: number[];
    level: number;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type NetQuantity = {
    unit?: string;
    value?: number;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    hsn_code?: string;
    reporting_hsn?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type Trader = {
    name: string;
    type?: string;
    address?: string[];
};
type ProductCreateUpdateSchemaV2 = {
    net_quantity?: NetQuantity;
    highlights?: string[];
    sizes: any[];
    tags?: string[];
    size_guide?: string;
    brand_uid: number;
    variant_media?: any;
    multi_size?: boolean;
    description?: string;
    country_of_origin: string;
    slug: string;
    tax_identifier: TaxIdentifier;
    no_of_boxes?: number;
    bulk_job_id?: string;
    product_publish?: ProductPublish;
    uid?: number;
    is_active?: boolean;
    company_id: number;
    is_image_less_product?: boolean;
    variant_group?: any;
    is_dependent?: boolean;
    custom_order?: CustomOrder;
    teaser_tag?: TeaserTag;
    change_request_id?: any;
    currency: string;
    name: string;
    product_group_tag?: string[];
    template_tag: string;
    category_slug: string;
    _custom_json?: any;
    action?: string;
    short_description?: string;
    departments: number[];
    media?: Media1[];
    item_code: string;
    item_type: string;
    trader: Trader[];
    is_set?: boolean;
    attributes?: any;
    variants?: any;
    return_config: ReturnConfig;
    requester?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Image = {
    url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Logo = {
    url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type ReturnConfigResponse = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Product = {
    color?: string;
    net_quantity?: NetQuantityResponse;
    highlights?: string[];
    sizes?: any[];
    size_guide?: string;
    tags?: string[];
    brand_uid?: number;
    variant_media?: any;
    multi_size?: boolean;
    description?: string;
    country_of_origin?: string;
    slug?: string;
    hsn_code?: string;
    images?: Image[];
    all_company_ids?: number[];
    tax_identifier?: any;
    no_of_boxes?: number;
    product_publish?: ProductPublished;
    uid?: number;
    is_physical?: boolean;
    category_uid?: number;
    is_active?: boolean;
    id?: string;
    modified_on?: string;
    image_nature?: string;
    company_id?: number;
    is_image_less_product?: boolean;
    category?: any;
    is_dependent?: boolean;
    is_expirable?: boolean;
    variant_group?: any;
    moq?: any;
    stage?: string;
    custom_order?: any;
    teaser_tag?: any;
    created_on?: string;
    primary_color?: string;
    verified_on?: string;
    currency?: string;
    name?: string;
    product_group_tag?: string[];
    brand?: Brand;
    created_by?: any;
    template_tag?: string;
    l3_mapping?: string[];
    category_slug?: string;
    _custom_json?: any;
    modified_by?: any;
    short_description?: string;
    departments?: number[];
    media?: Media1[];
    item_code?: string;
    item_type?: string;
    trader?: Trader[];
    is_set?: boolean;
    attributes?: any;
    verified_by?: VerifiedBy;
    all_sizes?: any[];
    variants?: any;
    return_config?: ReturnConfigResponse;
    all_identifiers?: string[];
    pending?: string;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type ProductVariants = {
    item_code?: string;
    uid?: number;
    brand_uid?: number;
    name?: string;
    category_uid?: number;
    media?: Media1[];
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    suggestion?: string;
    tags?: string[];
    enabled_for_end_consumer?: boolean;
    description?: string;
    slug: string;
    variant?: boolean;
    details: AttributeMasterDetails;
    modified_on?: string;
    filters: AttributeMasterFilter;
    raw_key?: string;
    created_on?: string;
    name?: string;
    created_by?: any;
    modified_by?: any;
    unit?: string;
    departments: string[];
    synonyms?: any;
    is_nested?: boolean;
    logo?: string;
    schema: AttributeMaster;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    primary?: boolean;
    gtin_type: string;
    gtin_value: string;
};
type AllSizes = {
    item_weight: number;
    item_height: number;
    item_length: number;
    size: string;
    item_dimensions_unit_of_measure: string;
    item_width: number;
    item_weight_unit_of_measure: string;
    identifiers?: ValidateIdentifier[];
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    email?: string;
    user_id?: string;
    username?: string;
    uid?: string;
};
type BulkJob = {
    failed_records?: any[];
    succeed?: number;
    stage?: string;
    cancelled?: number;
    created_on: string;
    file_path?: string;
    cancelled_records?: any[];
    failed?: number;
    custom_template_tag?: string;
    modified_by?: UserInfo1;
    created_by?: UserInfo1;
    is_active?: boolean;
    template_tag?: string;
    modified_on?: string;
    tracking_url?: string;
    company_id: number;
    total?: number;
};
type BulkResponse = {
    created_on: string;
    modified_by?: UserInfo1;
    created_by?: UserInfo1;
    is_active?: boolean;
    batch_id: string;
    modified_on?: string;
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    failed_records?: string[];
    total?: number;
    succeed?: number;
    stage?: string;
    cancelled?: number;
    created_on?: string;
    file_path?: string;
    failed?: number;
    modified_by?: UserDetail1;
    created_by?: UserDetail1;
    is_active?: boolean;
    template_tag?: string;
    modified_on?: string;
    company_id?: number;
    template?: ProductTemplate;
    cancelled_records?: string[];
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkProductRequest = {
    batch_id: string;
    company_id: number;
    data: any[];
    template_tag: string;
};
type ProductTagsViewResponse = {
    items?: string[];
};
type ProductBulkAssets = {
    url: string;
    company_id?: number;
    user: any;
};
type UserCommon = {
    company_id?: number;
    user_id?: string;
    username?: string;
};
type Items = {
    retry?: number;
    company_id?: number;
    failed_records?: string[];
    succeed?: number;
    total?: number;
    stage?: string;
    cancelled?: number;
    created_on?: string;
    failed?: number;
    created_by?: UserCommon;
    is_active?: boolean;
    modified_on?: string;
    tracking_url?: string;
    modified_by?: UserCommon;
    id?: string;
    file_path?: string;
    cancelled_records?: string[];
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
    size_distribution: SizeDistribution;
    name?: string;
    quantity?: number;
};
type GTIN = {
    primary?: boolean;
    gtin_type: string;
    gtin_value: string;
};
type InvSize = {
    price_transfer?: number;
    item_weight?: number;
    is_set?: boolean;
    item_height?: number;
    quantity: number;
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    set?: InventorySet;
    currency: string;
    price?: number;
    size: string;
    item_length?: number;
    price_effective: number;
    expiration_date?: string;
    item_width?: number;
    item_weight_unit_of_measure?: string;
    identifiers: GTIN[];
};
type InventoryRequest = {
    item: ItemQuery;
    company_id: number;
    sizes: InvSize[];
};
type InventoryResponse = {
    price_transfer?: number;
    seller_identifier?: string;
    quantity?: number;
    item_id?: number;
    inventory_updated_on?: string;
    uid?: string;
    currency?: string;
    price?: number;
    size?: string;
    sellable_quantity?: number;
    price_effective?: number;
    store?: any;
    identifiers?: any;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
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
    length: number;
    height: number;
    is_default: boolean;
    unit: string;
    width: number;
};
type ManufacturerResponse = {
    name: string;
    address: string;
    is_default: boolean;
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type BrandMeta = {
    name: string;
    id: number;
};
type PriceMeta = {
    updated_at?: string;
    tp_notes?: any;
    currency: string;
    effective: number;
    transfer: number;
    marked: number;
};
type Trader1 = {
    name: string;
    type: string;
    address: string[];
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type InventorySellerResponse = {
    added_on_store?: string;
    fynd_article_code: string;
    trace_id?: string;
    company: CompanyMeta;
    fynd_meta?: any;
    fynd_item_code: string;
    meta?: any;
    quantities?: Quantities;
    total_quantity: number;
    tags?: string[];
    seller_identifier: string;
    dimension: DimensionResponse;
    country_of_origin: string;
    manufacturer: ManufacturerResponse;
    tax_identifier?: any;
    uid: string;
    fragile: boolean;
    is_active?: boolean;
    weight: WeightResponse;
    raw_meta?: any;
    stage?: string;
    set?: InventorySet;
    created_by?: UserSerializer;
    brand: BrandMeta;
    price: PriceMeta;
    size: string;
    modified_by?: UserSerializer;
    _custom_json?: any;
    store: StoreMeta;
    identifier: any;
    trader?: Trader1[];
    is_set?: boolean;
    track_inventory?: boolean;
    item_id: number;
    return_config?: ReturnConfig1;
    expiration_date?: string;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
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
    unit?: string;
    width?: number;
    height?: number;
    length?: number;
};
type ManufacturerResponse1 = {
    name?: string;
    address?: string;
    is_default?: boolean;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type PriceArticle = {
    tp_notes?: any;
    currency?: string;
    effective?: number;
    transfer?: number;
    marked?: number;
};
type ArticleStoreResponse = {
    store_code?: string;
    name?: string;
    store_type?: string;
    uid?: number;
};
type Trader2 = {
    name?: string;
    type?: string;
    address?: string[];
};
type ReturnConfig2 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type GetInventories = {
    trace_id?: string;
    company?: CompanyMeta1;
    quantities?: QuantitiesArticle;
    inventory_updated_on?: string;
    total_quantity?: number;
    date_meta?: DateMeta;
    tags?: string[];
    seller_identifier?: string;
    dimension?: DimensionResponse1;
    country_of_origin?: string;
    manufacturer?: ManufacturerResponse1;
    tax_identifier?: any;
    uid?: string;
    weight?: WeightResponse1;
    id?: string;
    stage?: string;
    created_by?: UserSerializer;
    brand?: BrandMeta1;
    price?: PriceArticle;
    size?: string;
    modified_by?: UserSerializer;
    store?: ArticleStoreResponse;
    identifier?: any;
    trader?: Trader2[];
    is_set?: boolean;
    track_inventory?: boolean;
    item_id?: number;
    return_config?: ReturnConfig2;
    expiration_date?: string;
    platforms?: any;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    failed_records?: string[];
    succeed?: number;
    total?: number;
    stage?: string;
    cancelled?: number;
    created_on?: string;
    file_path?: string;
    failed?: number;
    modified_by?: any;
    created_by?: any;
    is_active?: boolean;
    modified_on?: string;
    id?: string;
    company_id?: number;
    cancelled_records?: string[];
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    quantity?: number;
    trace_id?: string;
    price_marked?: number;
    item_dimensions_unit_of_measure?: string;
    total_quantity?: number;
    tags?: string[];
    store_code: string;
    currency?: string;
    price?: number;
    seller_identifier: string;
    price_effective?: number;
    expiration_date?: string;
    item_weight_unit_of_measure?: string;
};
type InventoryBulkRequest = {
    batch_id: string;
    company_id: number;
    sizes: InventoryJobPayload[];
    user?: any;
};
type InventoryExportRequest = {
    brand?: number[];
    type?: string;
    store?: number[];
};
type InventoryExportResponse = {
    status?: string;
    task_id: string;
    seller_id: number;
    trigger_on?: string;
    request_params?: any;
};
type InventoryExportJob = {
    status?: string;
    task_id: string;
    completed_on?: string;
    seller_id: number;
    trigger_on?: string;
    url?: string;
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
    trace_id?: string;
    price_marked?: number;
    store_id: number;
    total_quantity?: number;
    tags?: string[];
    seller_identifier: string;
    price_effective?: number;
    expiration_date?: string;
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
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    message: string;
    items?: InventoryResponseItem[];
};
type HsnUpsert = {
    tax1: number;
    tax_on_esp?: boolean;
    threshold1: number;
    uid?: number;
    threshold2?: number;
    is_active?: boolean;
    tax2?: number;
    tax_on_mrp: boolean;
    company_id: number;
    hs2_code: string;
    hsn_code: string;
};
type HsnCodesObject = {
    tax1?: number;
    tax_on_esp?: boolean;
    threshold1?: number;
    threshold2?: number;
    modified_on?: string;
    tax2?: number;
    id?: string;
    tax_on_mrp?: boolean;
    company_id?: number;
    hs2_code?: string;
    hsn_code?: string;
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
type PageResponse = {
    has_previous?: boolean;
    current?: string;
    has_next?: boolean;
    item_total?: number;
    size?: number;
};
type TaxSlab = {
    threshold: number;
    effective_date: string;
    cess?: number;
    rate: number;
};
type HSNDataInsertV2 = {
    country_code: string;
    reporting_hsn: string;
    created_on?: string;
    taxes: TaxSlab[];
    type: string;
    created_by?: any;
    modified_on?: string;
    modified_by?: any;
    hsn_code_id?: string;
    description: string;
    hsn_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    discount?: string;
    slug?: string;
    uid?: number;
    name?: string;
    logo?: Media;
    banners?: ImageUrls;
    action?: Action;
    departments?: string[];
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    priority_order?: number;
    uid?: number;
    name?: string;
    logo?: Media;
    slug?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    uid?: number;
    name?: string;
    banners?: ImageUrls;
    _custom_json?: any;
    action?: Action;
    childs?: any[];
    slug?: string;
};
type SecondLevelChild = {
    uid?: number;
    name?: string;
    banners?: ImageUrls;
    _custom_json?: any;
    action?: Action;
    childs?: ThirdLevelChild[];
    slug?: string;
};
type Child = {
    uid?: number;
    name?: string;
    banners?: ImageUrls;
    _custom_json?: any;
    action?: Action;
    childs?: SecondLevelChild[];
    slug?: string;
};
type CategoryItems = {
    uid?: number;
    name?: string;
    banners?: ImageUrls;
    action?: Action;
    childs?: Child[];
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
    page: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    operators?: any;
};
type ProductDetail = {
    color?: string;
    highlights?: string[];
    description?: string;
    slug: string;
    rating?: number;
    uid?: number;
    similars?: string[];
    promo_meta?: any;
    image_nature?: string;
    product_online_date?: string;
    tryouts?: string[];
    teaser_tag?: any;
    medias?: Media1[];
    name?: string;
    brand?: ProductBrand;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    short_description?: string;
    type?: string;
    item_code?: string;
    item_type?: string;
    rating_count?: number;
    attributes?: any;
    has_variant?: boolean;
};
type InventoryPage = {
    has_previous?: boolean;
    has_next?: boolean;
    item_total: number;
    type: string;
    next_id?: string;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type ArticleQuery = {
    item_id: number;
    size: string;
    ignored_stores?: number[];
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type AssignStoreArticle = {
    query?: ArticleQuery;
    group_id?: string;
    quantity?: number;
    meta?: any;
    article_assignment?: ArticleAssignment;
};
type AssignStore = {
    channel_identifier?: string;
    app_id: string;
    pincode: string;
    store_ids?: number[];
    articles: AssignStoreArticle[];
    channel_type?: string;
    company_id?: number;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    group_id?: string;
    status: boolean;
    quantity: number;
    price_marked?: number;
    meta?: any;
    store_id?: number;
    strategy_wise_listing?: any[];
    item_id: number;
    _id?: string;
    uid?: string;
    s_city?: string;
    store_pincode?: number;
    size: string;
    price_effective?: number;
    article_assignment: ArticleAssignment1;
    company_id?: number;
    index?: number;
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
    country_code?: string;
    pincode?: number;
    state?: string;
    city?: string;
    longitude?: number;
    address1?: string;
    latitude?: number;
    landmark?: string;
    address_type?: string;
    country?: string;
    address2?: string;
};
type GetCompanySerializer = {
    business_type?: string;
    reject_reason?: string;
    verified_by?: UserSerializer1;
    stage?: string;
    created_on?: string;
    verified_on?: string;
    uid?: number;
    modified_by?: UserSerializer1;
    created_by?: UserSerializer1;
    name?: string;
    modified_on?: string;
    company_type?: string;
    addresses?: GetAddressSerializer[];
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    weekday: string;
    closing?: LocationTimingSerializer;
    opening?: LocationTimingSerializer;
    open: boolean;
};
type InvoiceCredSerializer = {
    password?: string;
    enabled?: boolean;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetLocationSerializer = {
    contact_numbers?: SellerPhoneNumber[];
    manager?: LocationManagerSerializer;
    company?: GetCompanySerializer;
    integration_type?: LocationIntegrationType;
    address: GetAddressSerializer;
    phone_number: string;
    notification_emails?: string[];
    timing?: LocationDayWiseSerializer[];
    uid?: number;
    modified_on?: string;
    stage?: string;
    created_on?: string;
    verified_on?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    name: string;
    created_by?: UserSerializer2;
    display_name: string;
    modified_by?: UserSerializer2;
    _custom_json?: any;
    code: string;
    warnings?: any;
    product_return_config?: ProductReturnConfigSerializer;
    verified_by?: UserSerializer2;
    store_type?: string;
    documents?: Document[];
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
    uid: number;
    name?: string;
    is_active?: boolean;
    logo?: string;
    _custom_json?: any;
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
    rate?: number;
    effective_date?: string;
    enable?: boolean;
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
type GetCompanyProfileSerializerResponse = {
    stage?: string;
    franchise_enabled?: boolean;
    business_type: string;
    documents?: Document[];
    mode?: string;
    company_type: string;
    modified_by?: UserSerializer;
    created_on?: string;
    verified_on?: string;
    uid: number;
    modified_on?: string;
    warnings?: any;
    taxes?: CompanyTaxesSerializer[];
    name?: string;
    created_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer;
    _custom_json?: any;
    business_info?: string;
    contact_details?: ContactDetails;
    business_country_info?: BusinessCountryInfo;
    business_details?: BusinessDetails;
    notification_emails?: string[];
};
type CreateUpdateAddressSerializer = {
    state: string;
    country: string;
    latitude: number;
    landmark?: string;
    address2?: string;
    country_code?: string;
    address_type: string;
    city: string;
    pincode: number;
    longitude: number;
    address1: string;
};
type UpdateCompany = {
    company_type?: string;
    addresses?: CreateUpdateAddressSerializer[];
    taxes?: CompanyTaxesSerializer[];
    notification_emails?: string[];
    _custom_json?: any;
    business_info?: string;
    reject_reason?: string;
    contact_details?: ContactDetails;
    warnings?: any;
    franchise_enabled?: boolean;
    business_type?: string;
    business_details?: BusinessDetails;
    documents?: Document[];
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
    company_documents?: DocumentsObj;
    product?: DocumentsObj;
    stage?: string;
    uid?: number;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    brand?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait: string;
    landscape: string;
};
type GetBrandResponseSerializer = {
    stage?: string;
    slug_key?: string;
    description?: string;
    mode?: string;
    modified_by?: UserSerializer;
    created_on?: string;
    verified_on?: string;
    reject_reason?: string;
    synonyms?: string[];
    uid?: number;
    modified_on?: string;
    warnings?: any;
    _locale_language?: any;
    logo?: string;
    name: string;
    created_by?: UserSerializer;
    verified_by?: UserSerializer;
    _custom_json?: any;
    banner?: BrandBannerSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    company_id?: number;
    _custom_json?: any;
    uid?: number;
    synonyms?: string[];
    description?: string;
    _locale_language?: any;
    banner: BrandBannerSerializer;
    brand_tier?: string;
    logo: string;
    name: string;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanySerializer = {
    company_type: string;
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    created_on?: string;
    notification_emails?: string[];
    _custom_json?: any;
    verified_on?: string;
    uid?: number;
    modified_on?: string;
    reject_reason?: string;
    stage?: string;
    business_type: string;
    business_country_info?: BusinessCountryInfo;
    details?: CompanyDetails;
    market_channels?: string[];
    name?: string;
    created_by?: UserSerializer;
};
type CompanyBrandSerializer = {
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    created_on?: string;
    company?: CompanySerializer;
    verified_on?: string;
    uid?: number;
    modified_on?: string;
    stage?: string;
    reject_reason?: string;
    warnings?: any;
    brand?: GetBrandResponseSerializer;
    created_by?: UserSerializer;
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
    end_date: string;
    start_date: string;
};
type HolidaySchemaSerializer = {
    date: HolidayDateSerializer;
    holiday_type: string;
    title: string;
};
type AddressSerializer = {
    state?: string;
    country?: string;
    latitude: number;
    landmark?: string;
    address2?: string;
    country_code?: string;
    city?: string;
    pincode?: number;
    longitude: number;
    address_type?: string;
    address1?: string;
};
type LocationSerializer = {
    code: string;
    company: number;
    notification_emails?: string[];
    manager?: LocationManagerSerializer;
    display_name: string;
    stage?: string;
    uid?: number;
    _custom_json?: any;
    timing?: LocationDayWiseSerializer[];
    warnings?: any;
    product_return_config?: ProductReturnConfigSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    contact_numbers?: SellerPhoneNumber[];
    holiday?: HolidaySchemaSerializer[];
    store_type?: string;
    address: AddressSerializer;
    documents?: Document[];
    name: string;
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
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type RuleDefinition = {
    auto_apply?: boolean;
    type: string;
    applicable_on: string;
    calculate_on: string;
    currency_code?: string;
    value_type: string;
    is_exact?: boolean;
    scope?: string[];
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
    auto?: DisplayMetaDict;
    title?: string;
    apply?: DisplayMetaDict;
    subtitle?: string;
    remove?: DisplayMetaDict;
    description?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type Validity = {
    priority?: number;
};
type CouponSchedule = {
    start?: string;
    next_schedule?: any[];
    end?: string;
    cron?: string;
    duration?: number;
};
type Rule = {
    value?: number;
    key?: number;
    max?: number;
    min?: number;
    discount_qty?: number;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    networks?: string[];
    types?: string[];
    uses?: PaymentAllowValue;
    codes?: string[];
};
type PriceRange = {
    max?: number;
    min?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
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
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type Restrictions = {
    payments?: any;
    price_range?: PriceRange;
    platforms?: string[];
    coupon_allowed?: boolean;
    bulk_bundle?: BulkBundleRestriction;
    user_type?: string;
    uses?: UsesRestriction;
    user_groups?: number[];
    post_order?: PostOrder;
    ordering_stores?: number[];
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type CouponAdd = {
    type_slug: string;
    date_meta?: CouponDateMeta;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    author?: CouponAuthor;
    display_meta: DisplayMeta;
    ownership: Ownership;
    validity: Validity;
    code: string;
    tags?: string[];
    _schedule?: CouponSchedule;
    rule: Rule[];
    identifiers: Identifier;
    restrictions?: Restrictions;
    state?: State;
    validation?: Validation;
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
    type_slug: string;
    date_meta?: CouponDateMeta;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    author?: CouponAuthor;
    display_meta: DisplayMeta;
    ownership: Ownership;
    validity: Validity;
    code: string;
    tags?: string[];
    _schedule?: CouponSchedule;
    rule: Rule[];
    identifiers: Identifier;
    restrictions?: Restrictions;
    state?: State;
    validation?: Validation;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type CompareObject = {
    less_than?: number;
    equals?: number;
    less_than_equals?: number;
    greater_than_equals?: number;
    greater_than?: number;
};
type ItemCriteria = {
    cart_total?: CompareObject;
    available_zones?: string[];
    item_brand?: number[];
    item_store?: number[];
    item_sku?: string[];
    item_company?: number[];
    item_exclude_id?: number[];
    cart_unique_item_quantity?: CompareObject;
    all_items?: boolean;
    item_size?: string[];
    item_exclude_sku?: string[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_brand?: number[];
    item_id?: number[];
    item_exclude_company?: number[];
    cart_quantity?: CompareObject;
    item_exclude_store?: number[];
    product_tags?: string[];
    buy_rules?: string[];
    item_category?: number[];
    item_exclude_category?: number[];
};
type DiscountOffer = {
    discount_amount?: number;
    max_offer_quantity?: number;
    discount_percentage?: number;
    partial_can_ret?: boolean;
    discount_price?: number;
    code?: string;
    max_usage_per_transaction?: number;
    apportion_discount?: boolean;
    min_offer_quantity?: number;
    max_discount_amount?: number;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
    discount_type: string;
};
type DisplayMeta1 = {
    offer_label?: string;
    description?: string;
    name?: string;
    offer_text?: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionSchedule = {
    published: boolean;
    start: string;
    next_schedule?: any[];
    end?: string;
    cron?: string;
    duration?: number;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    uses?: PaymentAllowValue1;
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
type UserRegistered = {
    start?: string;
    end?: string;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type Restrictions1 = {
    payments?: PromotionPaymentModes[];
    order_quantity?: number;
    platforms?: string[];
    anonymous_users?: boolean;
    user_id?: string[];
    uses: UsesRestriction1;
    user_registered?: UserRegistered;
    user_groups?: number[];
    post_order?: PostOrder1;
};
type PromotionListItem = {
    visiblility?: Visibility;
    apply_priority?: number;
    author?: PromotionAuthor;
    date_meta?: PromotionDateMeta;
    calculate_on?: string;
    _custom_json?: any;
    mode: string;
    post_order_action?: PromotionAction;
    currency?: string;
    promotion_type: string;
    application_id: string;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    buy_rules: any;
    ownership: Ownership1;
    code?: string;
    promo_group: string;
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    stackable?: boolean;
    restrictions?: Restrictions1;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    visiblility?: Visibility;
    apply_priority?: number;
    author?: PromotionAuthor;
    date_meta?: PromotionDateMeta;
    calculate_on?: string;
    _custom_json?: any;
    mode: string;
    post_order_action?: PromotionAction;
    currency?: string;
    promotion_type: string;
    application_id: string;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    buy_rules: any;
    ownership: Ownership1;
    code?: string;
    promo_group: string;
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    stackable?: boolean;
    restrictions?: Restrictions1;
};
type PromotionUpdate = {
    visiblility?: Visibility;
    apply_priority?: number;
    author?: PromotionAuthor;
    date_meta?: PromotionDateMeta;
    calculate_on?: string;
    _custom_json?: any;
    mode: string;
    post_order_action?: PromotionAction;
    currency?: string;
    promotion_type: string;
    application_id: string;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    buy_rules: any;
    ownership: Ownership1;
    code?: string;
    promo_group: string;
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    stackable?: boolean;
    restrictions?: Restrictions1;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    entity_slug?: string;
    type?: string;
    is_hidden?: boolean;
    created_on?: string;
    entity_type?: string;
    example?: string;
    title?: string;
    subtitle?: string;
    modified_on?: string;
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
    marked?: number;
    add_on?: number;
    currency_symbol?: string;
    currency_code?: string;
    effective?: number;
    selling?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type DiscountRulesApp = {
    raw_offer?: any;
    item_criteria?: any;
    offer?: any;
    matched_buy_rules?: string[];
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type FreeGiftItem = {
    item_slug?: string;
    item_images_url?: string[];
    item_name?: string;
    item_id?: number;
    item_price_details?: any;
    item_brand_name?: string;
};
type AppliedFreeArticles = {
    quantity?: number;
    article_id?: string;
    parent_item_identifier?: string;
    free_gift_item_details?: FreeGiftItem;
};
type AppliedPromotion = {
    promotion_name?: string;
    discount_rules?: DiscountRulesApp[];
    promotion_group?: string;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    ownership?: Ownership2;
    promotion_type?: string;
    amount?: number;
    mrp_promotion?: boolean;
    offer_text?: string;
    promo_id?: string;
    applied_free_articles?: AppliedFreeArticles[];
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    type?: string;
    url?: string;
    query?: ActionQuery;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ProductImage = {
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    action?: ProductAction;
    type?: string;
    item_code?: string;
    brand?: BaseInfo;
    images?: ProductImage[];
    categories?: CategoryInfo[];
    uid?: number;
    net_quantity?: NetQuantity;
    name?: string;
    slug?: string;
};
type BasePrice = {
    marked?: number;
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    quantity?: number;
    price?: ArticlePriceInfo;
    type?: string;
    seller?: BaseInfo;
    _custom_json?: any;
    extra_meta?: any;
    uid?: string;
    size?: string;
    store?: BaseInfo;
    parent_item_identifiers?: any;
    product_group_tags?: string[];
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductAvailability = {
    is_valid?: boolean;
    other_store_quantity?: number;
    out_of_stock?: boolean;
    sizes?: string[];
    deliverable?: boolean;
};
type CartProductInfo = {
    quantity?: number;
    price?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    key?: string;
    coupon_message?: string;
    promotions_applied?: AppliedPromotion[];
    product?: CartProduct;
    article?: ProductArticle;
    bulk_offer?: any;
    discount?: string;
    price_per_unit?: ProductPriceInfo;
    identifiers: CartProductIdentifer;
    availability?: ProductAvailability;
    message?: string;
    is_set?: boolean;
    parent_item_identifiers?: any;
};
type RawBreakup = {
    you_saved?: number;
    convenience_fee?: number;
    coupon?: number;
    delivery_charge?: number;
    cod_charge?: number;
    mrp_total?: number;
    gst_charges?: number;
    vog?: number;
    discount?: number;
    fynd_cash?: number;
    subtotal?: number;
    total?: number;
};
type DisplayBreakup = {
    value?: number;
    key?: string;
    currency_symbol?: string;
    display?: string;
    currency_code?: string;
    message?: string[];
};
type LoyaltyPoints = {
    applicable?: number;
    is_applied?: boolean;
    total?: number;
    description?: string;
};
type CouponBreakup = {
    type?: string;
    value?: number;
    minimum_cart_value?: number;
    title?: string;
    sub_title?: string;
    uid?: string;
    code?: string;
    is_applied?: boolean;
    coupon_value?: number;
    max_discount_value?: number;
    description?: string;
    message?: string;
    coupon_type?: string;
};
type CartBreakup = {
    raw?: RawBreakup;
    display?: DisplayBreakup[];
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
    errors?: any;
    message?: string;
    success?: boolean;
};
type ShippingAddress = {
    area?: string;
    country_code?: string;
    area_code: string;
    country_phone_code?: string;
    country_iso_code?: string;
    city?: string;
    address?: string;
    phone?: number;
    country?: string;
    email?: string;
    meta?: any;
    state?: string;
    address_type?: string;
    area_code_slug?: string;
    name?: string;
    landmark?: string;
    pincode?: number;
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
    items?: CartProductInfo[];
    message?: string;
    delivery_promise?: ShipmentPromise;
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
    quantity?: number;
    cod_charges: number;
    amount_paid: number;
    loyalty_discount?: number;
    extra_meta?: any;
    files?: OpenApiFiles[];
    meta?: CartItemMeta;
    discount: number;
    cashback_applied: number;
    price_marked: number;
    employee_discount?: number;
    product_id: number;
    delivery_charges: number;
    coupon_effective_discount: number;
    price_effective: number;
    payment_methods: MultiTenderPaymentMethod[];
    size: string;
};
type OpenApiPlatformCheckoutReq = {
    billing_address: ShippingAddress;
    coupon?: string;
    gstin?: string;
    files?: OpenApiFiles[];
    coupon_value: number;
    currency_code?: string;
    employee_discount?: any;
    shipping_address?: ShippingAddress;
    cart_value: number;
    cod_charges: number;
    comment?: string;
    order_id?: string;
    loyalty_discount?: number;
    affiliate_order_id?: string;
    coupon_code: string;
    payment_methods: MultiTenderPaymentMethod[];
    cashback_applied: number;
    cart_items: OpenApiOrderItem[];
    delivery_charges: number;
    payment_mode?: string;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    message?: string;
    order_ref_id?: string;
    success?: boolean;
};
type AbandonedCart = {
    promotion?: any;
    payments?: any;
    is_active?: boolean;
    bulk_coupon_discount?: number;
    user_id: string;
    gstin?: string;
    meta?: any;
    discount?: number;
    pick_up_customer_details?: any;
    expire_at: string;
    checkout_mode?: string;
    order_id?: string;
    shipments?: any[];
    fc_index_map?: number[];
    last_modified: string;
    payment_mode?: string;
    created_on: string;
    is_archive?: boolean;
    coupon?: any;
    app_id?: string;
    fynd_credits?: any;
    merge_qty?: boolean;
    uid: number;
    is_default: boolean;
    buy_now?: boolean;
    _id: string;
    cart_value?: number;
    cod_charges?: any;
    articles: any[];
    comment?: string;
    payment_methods?: any[];
    delivery_charges?: any;
    cashback: any;
};
type AbandonedCartResponse = {
    success?: boolean;
    items?: AbandonedCart[];
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
    delivery_charge_info?: string;
    pan_config?: any;
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    currency?: CartCurrency;
    id?: string;
    coupon_text?: string;
    gstin?: string;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    items?: CartProductInfo[];
    last_modified?: string;
    message?: string;
    restrict_checkout?: boolean;
    buy_now?: boolean;
};
type AddProductCart = {
    quantity?: number;
    parent_item_identifiers?: any;
    pos?: boolean;
    store_id?: number;
    _custom_json?: any;
    display?: string;
    extra_meta?: any;
    article_assignment?: any;
    seller_id?: number;
    item_id?: number;
    article_id?: string;
    item_size?: string;
    product_group_tags?: string[];
};
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    partial?: boolean;
    cart?: CartDetailResponse;
    message?: string;
    success?: boolean;
};
type UpdateProductCart = {
    quantity?: number;
    _custom_json?: any;
    item_size?: string;
    identifiers: CartProductIdentifer;
    extra_meta?: any;
    item_id?: number;
    article_id?: string;
    item_index?: number;
    parent_item_identifiers?: any;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    message?: string;
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
    token?: string;
    meta?: any;
    user?: any;
    source?: any;
};
type SharedCart = {
    gstin?: string;
    delivery_promise?: ShipmentPromise;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    last_modified?: string;
    restrict_checkout?: boolean;
    currency?: CartCurrency;
    id?: string;
    coupon_text?: string;
    uid?: string;
    items?: CartProductInfo[];
    shared_cart_details?: SharedCartDetails;
    buy_now?: boolean;
    is_valid?: boolean;
    delivery_charge_info?: string;
    comment?: string;
    payment_selection_lock?: PaymentSelectionLock;
    cart_id?: number;
    message?: string;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    cart_value?: number;
    item_counts?: number;
    created_on?: string;
    user_id?: string;
    pick_up_customer_details?: any;
    cart_id?: string;
};
type MultiCartResponse = {
    data?: CartList[];
    success?: boolean;
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    gstin?: string;
    delivery_promise?: ShipmentPromise;
    pan_config?: any;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    last_modified?: string;
    restrict_checkout?: boolean;
    currency?: CartCurrency;
    id?: string;
    coupon_text?: string;
    items?: CartProductInfo[];
    user?: UserInfo;
    buy_now?: boolean;
    pan_no?: string;
    is_valid?: boolean;
    delivery_charge_info?: string;
    comment?: string;
    payment_selection_lock?: PaymentSelectionLock;
    message?: string;
};
type DeleteCartRequest = {
    cart_id_list?: string[];
};
type DeleteCartDetailResponse = {
    message?: string;
    success?: boolean;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type PageCoupon = {
    total_item_count?: number;
    has_next?: boolean;
    has_previous?: boolean;
    current?: number;
    total?: number;
};
type Coupon = {
    minimum_cart_value?: number;
    title?: string;
    sub_title?: string;
    expires_on?: string;
    is_applicable?: boolean;
    coupon_code?: string;
    is_applied?: boolean;
    coupon_value?: number;
    max_discount_value?: number;
    description?: string;
    message?: string;
    coupon_type?: string;
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
    area?: string;
    is_active?: boolean;
    user_id?: string;
    tags?: string[];
    meta?: any;
    geo_location?: GeoLocation;
    google_map_point?: any;
    checkout_mode?: string;
    address?: string;
    country?: string;
    address_type?: string;
    created_by_user_id?: string;
    id?: string;
    city?: string;
    area_code_slug?: string;
    landmark?: string;
    country_code?: string;
    area_code?: string;
    phone?: string;
    email?: string;
    cart_id?: string;
    is_default_address?: boolean;
    name?: string;
    state?: string;
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
    is_default_address?: boolean;
    id?: string;
    is_updated?: boolean;
    success?: boolean;
};
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
type PlatformSelectCartAddressRequest = {
    cart_id?: string;
    billing_address_id?: string;
    id?: string;
    checkout_mode?: string;
};
type ShipmentResponse = {
    order_type?: string;
    promise?: ShipmentPromise;
    dp_options?: any;
    fulfillment_id?: number;
    fulfillment_type?: string;
    shipment_type?: string;
    shipments?: number;
    items?: CartProductInfo[];
    dp_id?: string;
    box_type?: string;
};
type CartShipmentsResponse = {
    error?: boolean;
    gstin?: string;
    id?: string;
    coupon_text?: string;
    uid?: string;
    delivery_promise?: ShipmentPromise;
    buy_now?: boolean;
    is_valid?: boolean;
    checkout_mode?: string;
    delivery_charge_info?: string;
    breakup_values?: CartBreakup;
    comment?: string;
    shipments?: ShipmentResponse[];
    payment_selection_lock?: PaymentSelectionLock;
    cart_id?: number;
    last_modified?: string;
    message?: string;
    restrict_checkout?: boolean;
    currency?: CartCurrency;
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
    comment?: string;
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
    order_type: string;
    billing_address?: any;
    delivery_address?: any;
    payment_identifier?: string;
    user_id: string;
    meta?: any;
    files?: Files[];
    callback_url?: string;
    payment_auto_confirm?: boolean;
    billing_address_id?: string;
    checkout_mode?: string;
    employee_code?: string;
    merchant_code?: string;
    extra_meta?: any;
    payment_mode: string;
    payment_params?: any;
    pos?: boolean;
    aggregator?: string;
    id: string;
    address_id?: string;
    ordering_store?: number;
    staff?: StaffCheckout;
    pick_at_store_uid?: number;
    device_id?: string;
};
type CheckCart = {
    gstin?: string;
    cod_message?: string;
    delivery_promise?: ShipmentPromise;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    order_id?: string;
    success?: boolean;
    delivery_charges?: number;
    last_modified?: string;
    restrict_checkout?: boolean;
    currency?: CartCurrency;
    id?: string;
    coupon_text?: string;
    uid?: string;
    items?: CartProductInfo[];
    buy_now?: boolean;
    is_valid?: boolean;
    store_code?: string;
    cod_charges?: number;
    cod_available?: boolean;
    delivery_charge_info?: string;
    comment?: string;
    error_message?: string;
    user_type?: string;
    payment_selection_lock?: PaymentSelectionLock;
    store_emps?: any[];
    cart_id?: number;
    message?: string;
    delivery_charge_order_value?: number;
};
type CartCheckoutResponse = {
    data?: any;
    order_id?: string;
    message?: string;
    success?: boolean;
    callback_url?: string;
    payment_confirm_url?: string;
    cart?: CheckCart;
    app_intercept_url?: string;
};
type CartDeliveryModesResponse = {
    available_modes?: string[];
    pickup_stores?: number[];
};
type PickupStoreDetail = {
    store_code?: string;
    area?: string;
    area_code?: string;
    city?: string;
    id?: number;
    address?: string;
    phone?: string;
    country?: string;
    email?: string;
    state?: string;
    uid?: number;
    address_type?: string;
    area_code_slug?: string;
    name?: string;
    landmark?: string;
    pincode?: number;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    aggregator_name?: string;
    payment_identifier?: string;
    id?: string;
    merchant_code?: string;
    address_id?: string;
    payment_mode?: string;
};
type CouponValidity = {
    display_message_en?: string;
    valid?: boolean;
    title?: string;
    code?: string;
    discount?: number;
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
