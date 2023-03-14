export = PlatformApplicationClient;
declare class PlatformApplicationClient {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, FilterInfoOption, FiltersInfo, PaymentModeInfo, ShipmentItemFulFillingStore, UserDataInfo, ShipmentStatus, PlatformItem, GSTDetailsData, Prices, BagUnit, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, FulfillingStore, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, PlatformDeliveryAddress, Identifier, FinancialBreakup, BagConfigs, OrderBagArticle, OrderBrandName, BagGST, OrderBags, TrackingList, UserDetailsData, BagStateMapper, BagStatusHistory, ShipmentStatusData, ShipmentPayments, OrderDetailsData, DPDetailsData, ShipmentInfoResponse, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, DateRange, ManifestFilter, GeneratedManifestItem, ManifestPage, GeneratedManifestResponse, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailItem, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Dates, Attributes, Item, B2BPODetails, BagMeta, AffiliateMeta, AffiliateBagDetails, ArticleDetails, ReturnConfig, Weight, Dimensions, Article, BagReturnableCancelableStatus, PDFLinks, LockData, Formatted, ShipmentTimeStamp, EInvoice, EinvoiceInfo, BuyerDetails, DebugInfo, ShipmentMeta, AffiliateDetails, StoreAddress, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, Store, Brand, BagGSTDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateInventoryPaymentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, UserData, OrderPriority, MarketPlacePdf, AffiliateBag, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, PaymentMethod, PaymentInfo, TaxInfo, BillingInfo, ProcessingDates, LineItem, Shipment, ShippingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, ApplicationItemSEO, ApplicationItemMOQ, MetaFields, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, Media1, BannerImage, ImageUrls, CollectionQuery, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionImage, CollectionSchedule, CollectionBanner, SeoDetail, CollectionBadge, UserInfo, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterFilter, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, Media2, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Image, Logo, ProductPublished, NetQuantityResponse, ReturnConfigResponse, Product, ProductListingResponse, TeaserTag, ProductPublish, NetQuantity, CustomOrder, TaxIdentifier, Trader, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, BrandMeta, ManufacturerResponse, PriceMeta, WeightResponse, ReturnConfig1, QuantityBase, Quantities, DimensionResponse, Trader1, CompanyMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BrandMeta1, ManufacturerResponse1, PriceArticle, WeightResponse1, ReturnConfig2, ArticleStoreResponse, Quantity, QuantitiesArticle, DimensionResponse1, Trader2, CompanyMeta1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, UserSerializer1, GetAddressSerializer, SellerPhoneNumber, LocationManagerSerializer, ProductReturnConfigSerializer, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, UserSerializer2, GetCompanySerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, CompanyTaxesSerializer, ContactDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validation, Ownership, PriceRange, PostOrder, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, BulkBundleRestriction, Restrictions, CouponDateMeta, Rule, State, CouponSchedule, Validity, DisplayMetaDict, DisplayMeta, CouponAuthor, CouponAction, RuleDefinition, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Visibility, PromotionSchedule, PromotionAuthor, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, DisplayMeta1, PromotionAction, Ownership1, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, UserRegistered, Restrictions1, PromotionDateMeta, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CartProductIdentifer, ProductAvailability, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, ProductPrice, ProductPriceInfo, PromoMeta, CategoryInfo, ProductImage, Tags, ActionQuery, ProductAction, CartProduct, CouponDetails, CartProductInfo, CouponBreakup, LoyaltyPoints, DisplayBreakup, RawBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
}
import Lead = require("./Lead/LeadPlatformApplicationClient");
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
    ticket: Ticket;
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
    category: string;
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
    value?: string;
};
type SendOtpEmailCommsTemplate = {
    key?: string;
    value?: string;
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
};
type SendOtpCommsReqEmail = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpSmsCommsTemplate;
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
    created: boolean;
    display_fields: string[];
    app_id: string;
    aggregators?: any[];
};
type ErrorCodeDescription = {
    description: string;
    success: boolean;
    code: string;
};
type PaymentGatewayConfig = {
    merchant_salt: string;
    key: string;
    config_type: string;
    secret: string;
    is_active?: boolean;
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
    small: string;
    large: string;
};
type IntentApp = {
    logos?: PaymentModeLogo;
    display_name?: string;
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    fynd_vpa?: string;
    intent_app_error_list?: string[];
    display_name?: string;
    nickname?: string;
    display_priority?: number;
    card_name?: string;
    card_number?: string;
    name?: string;
    cod_limit?: number;
    card_reference?: string;
    cod_limit_per_order?: number;
    retry_count?: number;
    code?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    exp_month?: number;
    card_type?: string;
    card_id?: string;
    card_brand_image?: string;
    logo_url?: PaymentModeLogo;
    card_isin?: string;
    card_issuer?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    expired?: boolean;
    aggregator_name: string;
    card_fingerprint?: string;
    exp_year?: number;
    remaining_limit?: number;
    merchant_code?: string;
    timeout?: number;
    card_brand?: string;
    intent_app?: IntentApp[];
    intent_flow?: boolean;
    card_token?: string;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    anonymous_enable?: boolean;
    display_name: string;
    is_pay_by_card_pl?: boolean;
    display_priority: number;
    name: string;
    list?: PaymentModeList[];
    aggregator_name?: string;
    save_card?: boolean;
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
    customers: any;
    unique_transfer_no: any;
    transfer_type: string;
    is_default: boolean;
    is_active: boolean;
    more_attributes: any;
};
type PayoutBankDetails = {
    account_type: string;
    country?: string;
    state?: string;
    account_no?: string;
    bank_name?: string;
    city?: string;
    account_holder?: string;
    ifsc_code: string;
    branch_name?: string;
    pincode?: number;
};
type PayoutRequest = {
    users: any;
    aggregator: string;
    transfer_type: string;
    unique_external_id: string;
    bank_details: PayoutBankDetails;
    is_active: boolean;
};
type PayoutResponse = {
    users: any;
    success: boolean;
    aggregator: string;
    created: boolean;
    payment_status: string;
    unique_transfer_no: string;
    transfer_type: string;
    payouts: any;
    bank_details: any;
    is_active: boolean;
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
    success: boolean;
    is_verified_flag?: boolean;
    data?: any;
    message: string;
};
type NotFoundResourceError = {
    description: string;
    success: boolean;
    code: string;
};
type BankDetailsForOTP = {
    account_no: string;
    bank_name: string;
    account_holder: string;
    ifsc_code: string;
    branch_name: string;
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
    display_name: string;
    email: string;
    beneficiary_id: string;
    title: string;
    comment?: string;
    modified_on: string;
    bank_name: string;
    created_on: string;
    account_holder: string;
    ifsc_code: string;
    branch_name?: string;
    account_no: string;
    id: number;
    transfer_mode: string;
    subtitle: string;
    delights_user_name?: string;
    address: string;
    mobile?: string;
    is_active: boolean;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    payment_gateway?: string;
    payment_id?: string;
    current_status?: string;
    extra_meta?: any;
};
type MultiTenderPaymentMethod = {
    amount: number;
    name?: string;
    meta?: MultiTenderPaymentMeta;
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
type CODdata = {
    limit: number;
    usages: number;
    remaining_limit: number;
    user_id: string;
    is_active: boolean;
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
type FilterInfoOption = {
    text: string;
    value?: string;
    name?: string;
};
type FiltersInfo = {
    type: string;
    text: string;
    value: string;
    options?: FilterInfoOption[];
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type UserDataInfo = {
    mobile?: string;
    is_anonymous_user?: boolean;
    name?: string;
    uid?: number;
    first_name?: string;
    gender?: string;
    last_name?: string;
    email?: string;
    avis_user_id?: string;
};
type ShipmentStatus = {
    actual_status: string;
    title: string;
    ops_status: string;
    hex_code: string;
    status: string;
};
type PlatformItem = {
    color?: string;
    name?: string;
    department_id?: number;
    l3_category?: number;
    images?: string[];
    l3_category_name?: string;
    can_cancel?: boolean;
    size?: string;
    l1_category?: string[];
    image?: string[];
    id?: number;
    code?: string;
    can_return?: boolean;
};
type GSTDetailsData = {
    value_of_good: number;
    gstin_code: string;
    tax_collected_at_source: number;
    gst_fee: number;
    brand_calculated_amount: number;
};
type Prices = {
    amount_paid?: number;
    discount?: number;
    refund_amount?: number;
    price_effective?: number;
    promotion_effective_discount?: number;
    cashback?: number;
    refund_credit?: number;
    tax_collected_at_source?: number;
    value_of_good?: number;
    delivery_charge?: number;
    cashback_applied?: number;
    price_marked?: number;
    coupon_value?: number;
    fynd_credits?: number;
    cod_charges?: number;
    amount_paid_roundoff?: number;
};
type BagUnit = {
    bag_id: number;
    ordering_channel: string;
    can_return?: boolean;
    item_quantity: number;
    shipment_id: string;
    item?: PlatformItem;
    gst?: GSTDetailsData;
    can_cancel?: boolean;
    total_shipment_bags: number;
    prices?: Prices;
    status: any;
};
type ShipmentItem = {
    application?: any;
    channel?: any;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    created_at: string;
    user?: UserDataInfo;
    shipment_status?: ShipmentStatus;
    total_bags_count: number;
    bags?: BagUnit[];
    fulfilling_centre: string;
    total_shipments_in_order: number;
    id: string;
    payment_methods?: any;
    shipment_created_at: number;
    prices?: Prices;
    sla?: any;
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    page?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type FulfillingStore = {
    state: string;
    fulfillment_channel: string;
    city: string;
    phone: string;
    country: string;
    address: string;
    contact_person: string;
    meta: any;
    id: string;
    store_name: string;
    code: string;
    pincode: string;
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
    promo_id?: string;
    article_quantity?: number;
    discount_rules?: DiscountRules[];
    buy_rules?: BuyRules[];
    mrp_promotion?: boolean;
    promotion_name?: string;
    amount?: number;
    promotion_type?: string;
};
type PlatformDeliveryAddress = {
    state?: string;
    landmark?: string;
    version?: string;
    address_type?: string;
    address2?: string;
    latitude?: number;
    longitude?: number;
    created_at?: string;
    address_category?: string;
    city?: string;
    phone?: string;
    country?: string;
    address1?: string;
    contact_person?: string;
    area?: string;
    email?: string;
    updated_at?: string;
    pincode?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    discount: number;
    delivery_charge: number;
    cashback_applied: number;
    gst_tax_percentage: number;
    coupon_value: number;
    promotion_effective_discount: number;
    cashback: number;
    added_to_fynd_cash: boolean;
    amount_paid: number;
    coupon_effective_discount: number;
    value_of_good: number;
    gst_tag: string;
    size: string;
    price_marked: number;
    identifiers: Identifier;
    tax_collected_at_source?: number;
    cod_charges: number;
    gst_fee: string;
    brand_calculated_amount: number;
    total_units: number;
    price_effective: number;
    item_name: string;
    transfer_price: number;
    fynd_credits: number;
    pm_price_split: any;
    amount_paid_roundoff?: number;
    refund_credit: number;
    hsn_code: string;
};
type BagConfigs = {
    enable_tracking: boolean;
    is_active: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
};
type OrderBagArticle = {
    uid?: string;
    return_config?: any;
    identifiers?: any;
};
type OrderBrandName = {
    created_on: number;
    logo: string;
    brand_name: string;
    company: string;
    id: number;
    modified_on?: number;
};
type BagGST = {
    value_of_good?: number;
    hsn_code?: string;
    gst_tag?: string;
    gstin_code?: string;
    is_default_hsn_code?: boolean;
    gst_tax_percentage?: number;
    gst_fee?: number;
    brand_calculated_amount?: number;
};
type OrderBags = {
    parent_promo_bags?: any;
    current_status?: string;
    bag_id: number;
    applied_promos?: AppliedPromos[];
    line_number?: number;
    item?: PlatformItem;
    delivery_address?: PlatformDeliveryAddress;
    financial_breakup?: FinancialBreakup[];
    entity_type?: string;
    display_name?: string;
    bag_configs?: BagConfigs;
    quantity?: number;
    can_cancel?: boolean;
    prices?: Prices;
    article?: OrderBagArticle;
    identifier?: string;
    seller_identifier?: string;
    can_return?: boolean;
    brand?: OrderBrandName;
    gst_details?: BagGST;
};
type TrackingList = {
    text: string;
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
    status: string;
};
type UserDetailsData = {
    state: string;
    name: string;
    city: string;
    phone: string;
    country: string;
    address: string;
    email: string;
    pincode: string;
};
type BagStateMapper = {
    state_type: string;
    display_name: string;
    journey_type: string;
    name: string;
    is_active?: boolean;
    app_facing?: boolean;
    app_state_name?: string;
    bs_id: number;
    app_display_name?: string;
    notify_customer?: boolean;
};
type BagStatusHistory = {
    kafka_sync?: boolean;
    state_type?: string;
    bag_id: number;
    created_at: string;
    display_name?: boolean;
    delivery_partner_id?: number;
    delivery_awb_number?: string;
    store_id: number;
    shipment_id: string;
    reasons?: any[];
    state_id: number;
    forward?: boolean;
    bag_state_mapper: BagStateMapper;
    updated_at?: string;
    bsh_id: number;
    app_display_name?: boolean;
    status: string;
};
type ShipmentStatusData = {
    created_at?: string;
    shipment_id?: string;
    id?: number;
    bag_list?: number[];
    status?: string;
};
type ShipmentPayments = {
    source?: string;
    mode: string;
    logo?: string;
};
type OrderDetailsData = {
    source?: string;
    order_date?: string;
    affiliate_id?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    fynd_order_id: string;
    order_value?: string;
    tax_details?: any;
    cod_charges?: string;
};
type DPDetailsData = {
    name?: string;
    country?: string;
    gst_tag?: string;
    eway_bill_id?: string;
    awb_no?: string;
    track_url?: string;
    id?: string;
    pincode?: string;
};
type ShipmentInfoResponse = {
    status_progress: number;
    fulfilling_store?: FulfillingStore;
    refund_details?: any;
    go_green?: boolean;
    bags?: OrderBags[];
    email_id: string;
    custom_meta?: any[];
    tracking_url: string;
    child_nodes?: string[];
    forward_tracking_list?: any[];
    is_fynd_coupon: boolean;
    shipment_images?: string[];
    vertical?: string;
    tracking_list?: TrackingList[];
    is_packaging_order: boolean;
    priority_text?: string;
    is_invoiced: boolean;
    delivery_details?: UserDetailsData;
    payment_mode?: string;
    picked_date?: string;
    enable_tracking?: boolean;
    replacement_details?: string;
    is_not_fynd_source: boolean;
    is_pdsr?: string;
    delivery_slot?: any;
    fyndstore_emp: any;
    bag_status_history?: BagStatusHistory[];
    kirana_store_id?: string;
    credit_note_id: string;
    user_info?: any;
    company: any;
    invoice: any;
    can_break: string;
    refund_text?: string;
    total_bags?: number;
    platform_logo: boolean;
    enable_dp_tracking?: string;
    can_cancel?: boolean;
    due_date?: string;
    order_type: string;
    prices?: Prices;
    status?: ShipmentStatusData;
    user_id: string;
    journey_type?: string;
    user_agent?: string;
    affiliate_shipment_id: string;
    current_shipment_status: any;
    shipment_id: string;
    pay_button?: string;
    coupon?: any;
    payments?: ShipmentPayments;
    items: any[];
    shipment_quantity?: number;
    ordering_store: any;
    lock_status: string;
    secured_delivery_flag?: string;
    can_return?: boolean;
    bank_data?: any;
    gst_details?: GSTDetailsData;
    billing_details?: UserDetailsData;
    shipment_status?: string;
    escalation?: any;
    is_fynd_store?: string;
    delivery_status: any[];
    operational_status?: string;
    order?: OrderDetailsData;
    order_status: any;
    packaging_type?: string;
    total_items?: number;
    mid?: string;
    forward_order_status?: any[];
    dp_details?: DPDetailsData;
    forward_shipment_status?: any[];
    beneficiary_details?: boolean;
    order_created_time?: string;
};
type OrderDict = {
    order_date: string;
    fynd_order_id: string;
    shipment_count: number;
};
type PlatformShipment = {
    fulfilling_store?: FulfillingStore;
    bags?: OrderBags[];
    custom_meta?: any[];
    shipment_images?: string[];
    vertical?: string;
    tracking_list?: TrackingList[];
    priority_text?: string;
    delivery_details?: UserDetailsData;
    payment_mode?: string;
    picked_date?: string;
    delivery_slot?: any;
    bag_status_history?: BagStatusHistory[];
    total_bags?: number;
    platform_logo?: string;
    enable_dp_tracking?: string;
    prices?: Prices;
    status?: ShipmentStatusData;
    journey_type?: string;
    user_agent?: string;
    shipment_id: string;
    coupon?: any;
    payments?: ShipmentPayments;
    shipment_quantity?: number;
    gst_details?: GSTDetailsData;
    billing_details?: UserDetailsData;
    shipment_status?: string;
    operational_status?: string;
    order?: OrderDetailsData;
    packaging_type?: string;
    total_items?: number;
    dp_details?: DPDetailsData;
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    success: boolean;
    custom_meta?: any[];
    shipments?: PlatformShipment[];
};
type SubLane = {
    text?: string;
    actions?: any[];
    value?: string;
    total_items?: number;
    index?: number;
};
type SuperLane = {
    total_items?: number;
    text: string;
    value: string;
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
    channel?: PlatformChannel;
    breakup_values?: PlatformBreakupValues[];
    user_info?: UserDataInfo;
    order_value?: number;
    meta?: any;
    total_order_value?: number;
    shipments?: PlatformShipment[];
    order_id?: string;
    order_created_time?: string;
    payment_mode?: string;
};
type OrderListingResponse = {
    success?: boolean;
    message?: string;
    total_count?: number;
    lane?: string;
    items?: PlatformOrderItems[];
    page?: Page;
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    key: string;
    text: string;
    value: number;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    reason?: string;
    raw_status?: string;
    account_name?: string;
    shipment_type?: string;
    meta?: any;
    updated_time?: string;
    updated_at?: string;
    awb?: string;
    last_location_recieved_at?: string;
    status?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type FiltersResponse = {
    advance?: any[];
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    display_name?: string;
    report_requested_at?: string;
    report_created_at?: string;
    report_type?: string;
    report_id?: string;
    request_details?: any;
    report_name?: string;
    s3_key?: string;
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
    type?: string;
    message?: string;
    value?: string;
};
type JioCodeUpsertResponse = {
    success?: boolean;
    trace_id?: string;
    identifier?: string;
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    company_id?: string;
    batch_id: string;
    do_invoice_label_generated: boolean;
    store_id?: string;
    invoice?: any;
    store_code?: string;
    data?: any;
    invoice_status?: string;
    store_name?: string;
    label?: any;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type URL = {
    url?: string;
};
type FileResponse = {
    namespace?: string;
    upload?: FileUploadResponse;
    size?: number;
    content_type?: string;
    operation?: string;
    file_name?: string;
    file_path?: string;
    tags?: string[];
    cdn?: URL;
    method?: string;
};
type bulkListingData = {
    excel_url?: string;
    failed?: number;
    store_id?: number;
    uploaded_on?: string;
    successful?: number;
    user_name?: string;
    failed_shipments?: any[];
    store_code?: string;
    successful_shipments?: any[];
    status?: string;
    company_id?: number;
    user_id?: string;
    total?: number;
    id?: string;
    batch_id?: string;
    processing?: number;
    processing_shipments?: string[];
    file_name?: string;
    store_name?: string;
};
type BulkListingPage = {
    total?: number;
    type?: string;
    current?: number;
    size?: number;
    has_previous?: boolean;
    has_next?: boolean;
};
type BulkListingResponse = {
    success?: boolean;
    data?: bulkListingData[];
    error?: string;
    page?: BulkListingPage;
};
type DateRange = {
    to_date?: string;
    from_date?: string;
};
type ManifestFilter = {
    lane?: string;
    date_range?: DateRange;
    dp_name?: string;
    sales_channels?: string;
    dp_ids?: string;
    store_name?: string;
    sales_channel_name?: string;
    stores?: string;
};
type GeneratedManifestItem = {
    company_id?: number;
    created_at?: string;
    manifest_id?: string;
    is_active?: boolean;
    filters?: ManifestFilter;
    created_by?: string;
    status?: string;
};
type ManifestPage = {
    total?: number;
    type?: string;
    current?: string;
    size?: string;
    has_previous?: boolean;
    has_next?: boolean;
};
type GeneratedManifestResponse = {
    items?: GeneratedManifestItem[];
    page?: ManifestPage;
};
type ManifestDetailTotalShipmentPricesCount = {
    total_price?: number;
    shipment_count?: number;
};
type ManifestDetailMeta = {
    filters?: ManifestFilter;
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
};
type ManifestDetail = {
    company_id?: number;
    user_id?: number;
    created_at?: string;
    manifest_id?: string;
    is_active?: boolean;
    uid?: number;
    filters?: ManifestFilter;
    meta?: ManifestDetailMeta;
    id?: number;
    created_by?: string;
    status?: string;
};
type ManifestDetailItem = {
    invoice_id?: string;
    awb?: string;
    shipment_id?: string;
    item_qty?: number;
    order_id?: string;
};
type ManifestDetailResponse = {
    manifest_details?: ManifestDetail[];
    additional_shipment_count?: number;
    items?: ManifestDetailItem[];
    page?: ManifestPage;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    id?: number;
    question_set?: QuestionSet[];
    display_name?: string;
    qc_type?: string[];
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
    company_id?: string;
    batch_id?: string;
    successful_shipments_count?: number;
    successful_shipment_ids?: string[];
    failed_shipments_count?: number;
    total_shipments_count?: number;
    processing_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    user_id?: string;
    success?: string;
    message?: string;
    status?: boolean;
    data?: BulkActionDetailsDataField[];
    failed_records?: string[];
    uploaded_on?: string;
    error?: string[];
    uploaded_by?: string;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type Attributes = {
    name?: string;
    primary_material?: string;
    brand_name?: string;
    primary_color_hex?: string;
    essential?: string;
    marketer_name?: string;
    primary_color?: string;
    marketer_address?: string;
    gender?: string[];
};
type Item = {
    l3_category_name?: string;
    meta?: any;
    l1_category_id?: number;
    l2_category?: string[];
    attributes: Attributes;
    department_id?: number;
    brand_id: number;
    size: string;
    image: string[];
    can_cancel?: boolean;
    gender?: string;
    webstore_product_url?: string;
    name: string;
    branch_url?: string;
    code?: string;
    last_updated_at?: string;
    can_return?: boolean;
    brand: string;
    color?: string;
    l2_category_id?: number;
    l3_category?: number;
    l1_category?: string[];
    item_id: number;
    slug_key: string;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    docker_number?: string;
    po_line_amount?: number;
    item_base_price?: number;
    po_tax_amount?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type AffiliateMeta = {
    loyalty_discount?: number;
    box_type?: string;
    quantity?: number;
    is_priority?: boolean;
    size_level_total_qty?: number;
    coupon_code?: string;
    channel_order_id?: string;
    due_date?: string;
    channel_shipment_id?: string;
    order_item_id?: string;
    employee_discount?: number;
};
type AffiliateBagDetails = {
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    loyalty_discount?: number;
    employee_discount?: number;
};
type ArticleDetails = {
    status?: any;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Weight = {
    is_default?: boolean;
    unit?: string;
    shipping?: number;
};
type Dimensions = {
    is_default?: boolean;
    unit?: string;
    height?: number;
    length?: number;
    width?: number;
};
type Article = {
    return_config?: ReturnConfig;
    weight?: Weight;
    a_set?: any;
    uid: string;
    seller_identifier: string;
    _id: string;
    esp_modified?: any;
    size: string;
    is_set?: boolean;
    identifiers: Identifier;
    dimensions?: Dimensions;
    raw_meta?: any;
    code?: string;
    child_details?: any;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    is_active: boolean;
    is_returnable: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
};
type PDFLinks = {
    label_pos?: string;
    invoice_a4?: string;
    b2b?: string;
    label_type: string;
    invoice_a6?: string;
    po_invoice?: string;
    credit_note_url?: string;
    invoice?: string;
    label_a6?: string;
    invoice_pos?: string;
    invoice_type: string;
    label?: string;
    label_a4?: string;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type EInvoice = {
    signed_invoice?: string;
    error_message?: string;
    acknowledge_date?: string;
    error_code?: string;
    acknowledge_no?: number;
    signed_qr_code?: string;
    irn?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type BuyerDetails = {
    state: string;
    name: string;
    city: string;
    address: string;
    ajio_site_id?: string;
    pincode: number;
    gstin: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentMeta = {
    lock_data?: LockData;
    packaging_name?: string;
    dp_options?: any;
    formatted?: Formatted;
    timestamp?: ShipmentTimeStamp;
    external?: any;
    po_number?: string;
    same_store_available: boolean;
    bag_weight?: any;
    marketplace_store_id?: string;
    forward_affiliate_order_id?: string;
    ewaybill_info?: any;
    return_store_node?: number;
    store_invoice_updated_date?: string;
    return_affiliate_order_id?: string;
    shipment_weight?: number;
    dp_sort_key?: string;
    due_date?: string;
    return_awb_number?: string;
    order_type?: string;
    dp_id?: string;
    einvoice_info?: EinvoiceInfo;
    forward_affiliate_shipment_id?: string;
    return_details?: any;
    box_type?: string;
    fulfilment_priority_text?: string;
    b2b_buyer_details?: BuyerDetails;
    auto_trigger_dp_assignment_acf: boolean;
    assign_dp_from_sb?: boolean;
    shipment_volumetric_weight?: number;
    return_affiliate_shipment_id?: string;
    weight: number;
    debug_info?: DebugInfo;
    awb_number?: string;
    b2c_buyer_details?: any;
    dp_name?: string;
};
type AffiliateDetails = {
    affiliate_bag_id: string;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    ad_id?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    shipment_meta: ShipmentMeta;
    company_affiliate_tag?: string;
};
type StoreAddress = {
    created_at: string;
    longitude: number;
    city: string;
    area?: string;
    address2?: string;
    version?: string;
    country_code: string;
    contact_person: string;
    state: string;
    landmark?: string;
    address_type: string;
    latitude: number;
    phone: string;
    country: string;
    email?: string;
    address_category: string;
    address1: string;
    updated_at: string;
    pincode: number;
};
type Document = {
    url?: string;
    verified: boolean;
    legal_name: string;
    value: string;
    ds_type: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEinvoice = {
    password?: string;
    username?: string;
    enabled: boolean;
    user?: string;
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
type StoreMeta = {
    documents?: StoreDocuments;
    display_name: string;
    stage: string;
    product_return_config?: any;
    gst_number?: string;
    timing?: any[];
    notification_emails?: string[];
    ewaybill_portal_details?: any;
    gst_credentials: StoreGstCredentials;
    additional_contact_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
};
type Store = {
    store_address_json?: StoreAddress;
    parent_store_id?: number;
    packaging_material_count?: number;
    created_at: string;
    longitude: number;
    city: string;
    login_username: string;
    meta: StoreMeta;
    address2?: string;
    location_type: string;
    mall_area?: string;
    brand_store_tags?: string[];
    is_active?: boolean;
    brand_id?: any;
    alohomora_user_id?: number;
    contact_person: string;
    pincode: string;
    company_id: number;
    state: string;
    latitude: number;
    fulfillment_channel: string;
    name: string;
    phone: number;
    country: string;
    is_archived?: boolean;
    s_id: string;
    is_enabled_for_recon?: boolean;
    code?: string;
    order_integration_id?: string;
    store_email: string;
    address1: string;
    store_active_from?: string;
    vat_no?: string;
    updated_at?: string;
    mall_name?: string;
};
type Brand = {
    credit_note_expiry_days?: number;
    created_on?: number;
    logo?: string;
    script_last_ran?: string;
    brand_id: number;
    is_virtual_invoice?: boolean;
    brand_name: string;
    company: string;
    start_date?: string;
    credit_note_allowed?: boolean;
    pickup_location?: string;
    invoice_prefix?: string;
    modified_on?: number;
};
type BagGSTDetails = {
    cgst_tax_percentage: number;
    value_of_good: number;
    hsn_code: string;
    gst_tag: string;
    gstin_code?: string;
    is_default_hsn_code?: boolean;
    hsn_code_id: string;
    sgst_tax_percentage: number;
    gst_tax_percentage: number;
    igst_tax_percentage: number;
    sgst_gst_fee: string;
    tax_collected_at_source: number;
    cgst_gst_fee: string;
    gst_fee: number;
    brand_calculated_amount: number;
    igst_gst_fee: string;
};
type BagDetailsPlatformResponse = {
    parent_promo_bags?: any;
    current_status: BagStatusHistory;
    dates?: Dates;
    current_operational_status: BagStatusHistory;
    applied_promos?: any[];
    line_number?: number;
    item: Item;
    meta?: BagMeta;
    no_of_bags_order?: number;
    tags?: string[];
    financial_breakup: FinancialBreakup[];
    entity_type?: string;
    display_name?: string;
    original_bag_list?: number[];
    bag_status_history?: BagStatusHistory;
    quantity?: number;
    affiliate_bag_details: AffiliateBagDetails;
    reasons?: any[];
    article_details?: ArticleDetails;
    restore_promos?: any;
    prices: Prices;
    article: Article;
    status: BagReturnableCancelableStatus;
    journey_type: string;
    identifier?: string;
    qc_required?: any;
    b_type?: string;
    seller_identifier?: string;
    affiliate_details?: AffiliateDetails;
    shipment_id?: string;
    ordering_store?: Store;
    order_integration_id?: string;
    brand: Brand;
    gst_details: BagGSTDetails;
    operational_status?: string;
    bag_update_time?: number;
    restore_coupon?: boolean;
    bag_status: BagStatusHistory[];
    b_id: number;
};
type ErrorResponse = {
    message: string;
    error: string;
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
    shipment_id?: string;
    message?: string;
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
    fynd_order_id?: string;
    set_id?: string;
    store_id: number;
    item_id?: string;
    bag_id?: number;
    reason_ids?: number[];
    affiliate_id?: string;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    mongo_article_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    reason_text: string;
    id?: string;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    action: string;
    action_type: string;
    entities: Entities[];
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    is_locked?: boolean;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    bag_id?: number;
};
type CheckResponse = {
    shipment_id?: string;
    affiliate_id?: string;
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    affiliate_shipment_id?: string;
    status?: string;
    is_bag_locked?: boolean;
    bags?: Bags[];
    is_shipment_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    message?: string;
    success?: boolean;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    platform_id?: string;
    id: number;
    title?: string;
    platform_name?: string;
    description?: string;
    from_datetime?: string;
    to_datetime?: string;
    created_at?: string;
    company_id?: number;
    logo_url?: string;
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
type Products = {
    quantity?: number;
    line_number?: number;
    identifier?: string;
};
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
    identifier: string;
    products?: Products[];
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
    force_transition?: boolean;
    task?: boolean;
};
type ShipmentsResponse = {
    stack_trace?: string;
    message?: string;
    exception?: string;
    status?: number;
    identifier?: string;
    final_state?: any;
    code?: string;
    meta?: any;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
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
type AffiliateInventoryConfig = {
    payment?: AffiliateInventoryPaymentConfig;
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    id: string;
    updated_at: string;
    secret: string;
    description?: string;
    created_at: string;
    token: string;
    owner: string;
    name: string;
    meta?: AffiliateAppConfigMeta[];
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
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    store_lookup?: string;
    article_lookup?: string;
    affiliate: Affiliate;
    create_user?: boolean;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
};
type OrderUser = {
    mobile: number;
    address1?: string;
    city: string;
    pincode: string;
    address2?: string;
    state: string;
    phone: number;
    last_name: string;
    first_name: string;
    email: string;
    country: string;
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
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    amount_paid: number;
    modified_on: string;
    item_size: string;
    seller_identifier: string;
    affiliate_meta: any;
    delivery_charge: number;
    quantity: number;
    item_id: number;
    avl_qty: number;
    unit_price: number;
    price_effective: number;
    fynd_store_id: string;
    affiliate_store_id: string;
    transfer_price: number;
    identifier: any;
    hsn_code_id: string;
    pdf_links?: MarketPlacePdf;
    company_id: number;
    sku: string;
    store_id: number;
    _id: string;
    discount: number;
    price_marked: number;
};
type ArticleDetails1 = {
    category: any;
    brand_id: number;
    attributes: any;
    quantity: number;
    _id: string;
    dimension: any;
    weight: any;
};
type ShipmentDetails = {
    dp_id?: number;
    affiliate_shipment_id: string;
    shipments: number;
    box_type?: string;
    articles: ArticleDetails1[];
    meta?: any;
    fulfillment_id: number;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_type: string;
    fulfillment_id: number;
};
type ShipmentConfig = {
    shipment: ShipmentDetails[];
    to_pincode: string;
    location_details?: LocationDetails;
    payment_mode: string;
    identifier: string;
    journey: string;
    action: string;
    source: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    shipping_address: OrderUser;
    items: any;
    user: UserData;
    billing_address: OrderUser;
    payment?: any;
    payment_mode: string;
    order_priority?: OrderPriority;
    coupon?: string;
    discount: number;
    order_value: number;
    cod_charges: number;
    bags: AffiliateBag[];
    shipment?: ShipmentData;
    affiliate_order_id?: string;
    delivery_charges: number;
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
    description: string;
    display_text: string;
    slug: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    ticket_id?: string;
    user: string;
    type: string;
    l1_detail?: string;
    message: string;
    l2_detail?: string;
    l3_detail?: string;
    ticket_url?: string;
    bag_id?: number;
    createdat: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    country_code: string;
    amount_paid: number;
    shipment_id: number;
    customer_name: string;
    message: string;
    brand_name: string;
    order_id: string;
    payment_mode: string;
    phone_number: number;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    slug: string;
    bag_id: number;
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    shipment_id?: string;
    id: number;
    bag_list?: number[];
    remarks?: string;
    status?: string;
    meta: Meta;
};
type OrderStatusData = {
    errors?: string[];
    order_details: OrderDetails;
    shipment_details?: ShipmentDetail[];
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    qc_required: string;
    dp_id: number;
    order_type: string;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type Tax = {
    name: string;
    amount: any;
    breakup?: any[];
    rate: number;
};
type Charge = {
    tax?: Tax;
    type: string;
    amount: any;
    name: string;
    code?: string;
};
type PaymentMethod = {
    transaction_data?: any;
    mode: string;
    refund_by: string;
    collect_by: string;
    amount: number;
    name: string;
    meta?: any;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type BillingInfo = {
    country_code?: string;
    first_name: string;
    gender?: string;
    country: string;
    address1: string;
    pincode: string;
    address2?: string;
    state: string;
    alternate_mobile_number?: string;
    last_name?: string;
    city: string;
    primary_mobile_number: string;
    external_customer_code?: string;
    primary_email: string;
    state_code?: string;
    floor_no?: string;
    customer_code?: string;
    house_no?: string;
    alternate_email?: string;
    title?: string;
    middle_name?: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    dispatch_by_date?: string;
    dispatch_after_date?: string;
    customer_pickup_slot?: any;
    dp_pickup_slot?: any;
    pack_by_date?: string;
};
type LineItem = {
    charges?: Charge[];
    quantity?: number;
    custom_messasge?: string;
    seller_identifier: string;
    meta?: any;
    external_line_id?: string;
};
type Shipment = {
    location_id: number;
    processing_dates?: ProcessingDates;
    priority?: number;
    external_shipment_id?: string;
    meta?: any;
    line_items: LineItem[];
};
type ShippingInfo = {
    country_code?: string;
    geo_location?: any;
    slot?: any[];
    first_name: string;
    gender?: string;
    country: string;
    landmark?: string;
    address1: string;
    pincode: string;
    shipping_type?: string;
    address2?: string;
    state: string;
    alternate_mobile_number?: string;
    last_name?: string;
    address_type?: string;
    city: string;
    primary_mobile_number: string;
    external_customer_code?: string;
    primary_email: string;
    state_code?: string;
    floor_no?: string;
    customer_code?: string;
    house_no?: string;
    alternate_email?: string;
    title?: string;
    middle_name?: string;
};
type CreateOrderAPI = {
    external_creation_date?: string;
    charges?: Charge[];
    payment_info: PaymentInfo;
    tax_info?: TaxInfo;
    external_order_id?: string;
    billing_info: BillingInfo;
    currency_info?: any;
    shipments: Shipment[];
    shipping_info: ShippingInfo;
    meta?: any;
};
type CreateOrderErrorReponse = {
    info?: any;
    stack_trace?: string;
    message: string;
    exception?: string;
    status: number;
    request_id?: string;
    meta?: string;
    code?: string;
};
type PaymentMethods = {
    collect_by?: string;
    mode?: string;
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
    payment_info?: CreateChannelPaymentInfo;
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
    lock_states?: string[];
    location_reassignment?: boolean;
    logo_url?: any;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_upserted?: boolean;
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
    message?: string[];
    success?: boolean;
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    start_date: string;
    order_details?: FyndOrderIdList[];
    mobile: number;
    end_date: string;
};
type GetSearchWordsData = {
    result?: any;
    app_id?: string;
    is_active?: boolean;
    words?: string[];
    uid?: string;
    _custom_json?: any;
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
    words?: string[];
    _custom_json?: any;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    app_id?: string;
    uid?: string;
    words?: string[];
    results?: any[];
    _custom_json?: any;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type AutocompletePageAction = {
    type?: string;
    url?: string;
    query?: any;
    params?: any;
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
    action?: AutocompleteAction;
    logo?: Media;
    _custom_json?: any;
    display?: string;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    is_active?: boolean;
    words?: string[];
    results?: AutocompleteResult[];
    _custom_json?: any;
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    app_id?: string;
    _custom_json?: any;
    words?: string[];
};
type ProductBundleItem = {
    auto_add_to_cart?: boolean;
    min_quantity: number;
    product_uid: number;
    max_quantity: number;
    auto_select?: boolean;
    allow_remove?: boolean;
};
type GetProductBundleCreateResponse = {
    same_store_assignment?: boolean;
    name: string;
    company_id?: number;
    created_on?: string;
    created_by?: any;
    choice: string;
    id?: string;
    modified_on?: string;
    products: ProductBundleItem[];
    logo?: string;
    is_active: boolean;
    modified_by?: any;
    page_visibility?: string[];
    slug: string;
    meta?: any;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    same_store_assignment?: boolean;
    name: string;
    company_id?: number;
    created_on?: string;
    created_by?: any;
    choice: string;
    modified_on?: string;
    products: ProductBundleItem[];
    logo?: string;
    is_active: boolean;
    modified_by?: any;
    page_visibility?: string[];
    slug: string;
    meta?: any;
};
type LimitedProductData = {
    name?: string;
    images?: string[];
    sizes?: string[];
    item_code?: string;
    short_description?: string;
    price?: any;
    attributes?: any;
    country_of_origin?: string;
    uid?: number;
    identifier?: any;
    slug?: string;
    quantity?: number;
};
type Size = {
    quantity?: number;
    is_available?: boolean;
    value?: string;
    display?: string;
};
type Price = {
    max_effective?: number;
    currency?: string;
    min_effective?: number;
    max_marked?: number;
    min_marked?: number;
};
type GetProducts = {
    auto_add_to_cart?: boolean;
    min_quantity?: number;
    product_details?: LimitedProductData;
    product_uid?: number;
    sizes?: Size[];
    price?: Price;
    max_quantity?: number;
    auto_select?: boolean;
    allow_remove?: boolean;
};
type GetProductBundleResponse = {
    same_store_assignment?: boolean;
    name?: string;
    company_id?: number;
    choice?: string;
    products?: GetProducts[];
    logo?: string;
    is_active?: boolean;
    page_visibility?: string[];
    slug?: string;
    meta?: any;
};
type ProductBundleUpdateRequest = {
    same_store_assignment?: boolean;
    name: string;
    company_id?: number;
    choice: string;
    modified_on?: string;
    products: ProductBundleItem[];
    logo?: string;
    is_active: boolean;
    modified_by?: any;
    page_visibility?: string[];
    slug: string;
    meta?: any;
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
    description?: string;
    subtitle?: string;
    company_id?: number;
    guide?: Guide;
    created_on?: string;
    tag?: string;
    created_by?: any;
    title: string;
    id?: string;
    modified_on?: string;
    image?: string;
    brand_id?: number;
    modified_by?: any;
    active?: boolean;
};
type SizeGuideResponse = {
    name?: string;
    created_on?: string;
    company_id?: number;
    guide?: any;
    subtitle?: string;
    created_by?: any;
    tag?: string;
    title?: string;
    id?: string;
    modified_on?: string;
    brand_id?: number;
    modified_by?: any;
    active?: boolean;
};
type MOQData = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type SEOData = {
    title?: any;
    description?: any;
};
type OwnerAppItemResponse = {
    moq?: MOQData;
    seo?: SEOData;
    is_gift?: boolean;
    is_cod?: boolean;
    alt_text?: any;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    moq?: ApplicationItemMOQ;
    is_gift?: boolean;
    is_cod?: boolean;
    _custom_meta?: MetaFields[];
    _custom_json?: any;
    alt_text?: any;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    values?: any[];
    condition?: any[];
    data: any[];
};
type PageResponseType = {
    has_next: boolean;
    current: number;
    total_count: number;
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
    name: string;
    unit?: string;
    logo?: string;
    display_type: string;
    is_active: boolean;
    priority: number;
    slug?: string;
    key?: string;
};
type AppConfigurationDetail = {
    name?: string;
    app_id: string;
    is_default: boolean;
    template_slugs?: string[];
    logo?: string;
    attributes?: AttributeDetailsGroup[];
    is_active: boolean;
    priority: number;
    slug: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    name?: string;
    app_id: string;
    is_default: boolean;
    logo?: string;
    is_active: boolean;
    default_key: string;
    priority: number;
    key: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    units?: any[];
    filter_types?: string[];
    key?: string;
    display?: string;
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
    compare?: any;
    variant?: any;
    detail?: any;
    similar?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    name: string;
    logo?: string;
    display_type: string;
    is_active: boolean;
    priority: number;
    size: ProductSize;
    key: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    subtitle?: string;
    title?: string;
    logo?: string;
    is_active: boolean;
    priority: number;
    size?: ProductSize;
    key: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    value?: string;
    sort?: string;
    map_values?: any[];
    condition?: string;
    map?: any;
    bucket_points?: ConfigurationBucketPoints[];
};
type ConfigurationListingFilterConfig = {
    name?: string;
    logo?: string;
    display_name?: string;
    is_active: boolean;
    value_config?: ConfigurationListingFilterValue;
    priority: number;
    type: string;
    key: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    name?: string;
    logo?: string;
    is_active: boolean;
    priority: number;
    key: string;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type AppCatalogConfiguration = {
    created_on?: string;
    product?: ConfigurationProduct;
    app_id: string;
    created_by?: any;
    id?: string;
    modified_on?: string;
    config_type: string;
    config_id?: string;
    listing?: ConfigurationListing;
    type?: string;
    modified_by?: any;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    created_on?: string;
    product?: ConfigurationProduct;
    app_id: string;
    created_by?: any;
    modified_on?: string;
    config_type: string;
    config_id?: string;
    listing?: ConfigurationListing;
    type?: string;
    modified_by?: any;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    product?: GetCatalogConfigurationDetailsProduct;
    app_id: string;
    id?: string;
    config_type: string;
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    is_selected?: boolean;
    name?: string;
    value?: string;
};
type ProductFiltersValue = {
    selected_min?: number;
    display_format?: string;
    value: any;
    count?: number;
    currency_symbol?: string;
    currency_code?: string;
    selected_max?: number;
    max?: number;
    display: string;
    is_selected: boolean;
    min?: number;
    query_format?: string;
};
type ProductFiltersKey = {
    name: string;
    operators?: string[];
    kind?: string;
    display: string;
    logo?: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type GetCollectionQueryOptionResponse = {
    operators: any;
    sort_on?: ProductSortOn[];
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
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
};
type GetCollectionDetailNest = {
    priority?: number;
    slug?: string;
    cron?: any;
    description?: string;
    tag?: string[];
    logo?: Media1;
    _schedule?: any;
    type?: string;
    banners?: ImageUrls;
    meta?: any;
    action?: Action;
    allow_sort?: boolean;
    is_active?: boolean;
    query?: CollectionQuery[];
    name?: string;
    badge?: any;
    app_id?: string;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    uid?: string;
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
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    page?: Page;
    filters?: CollectionListingFilter;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionSchedule = {
    start?: string;
    end?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
    cron?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type UserInfo = {
    user_id?: string;
    uid?: string;
    username?: string;
    email?: string;
};
type CreateCollection = {
    priority?: number;
    _custom_json?: any;
    slug: string;
    description?: string;
    tags?: string[];
    logo: CollectionImage;
    _schedule?: CollectionSchedule;
    type: string;
    sort_on?: string;
    banners: CollectionBanner;
    meta?: any;
    seo?: SeoDetail;
    allow_sort?: boolean;
    is_active?: boolean;
    is_visible?: boolean;
    query?: CollectionQuery[];
    _locale_language?: any;
    name: string;
    badge?: CollectionBadge;
    published?: boolean;
    created_by?: UserInfo;
    app_id: string;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    modified_by?: UserInfo;
};
type CollectionCreateResponse = {
    priority?: number;
    slug?: string;
    cron?: any;
    description?: string;
    tag?: string[];
    logo?: BannerImage;
    _schedule?: any;
    type?: string;
    sort_on?: string;
    banners?: ImageUrls;
    meta?: any;
    allow_sort?: boolean;
    is_active?: boolean;
    query?: CollectionQuery[];
    name?: string;
    badge?: any;
    app_id?: string;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
};
type CollectionDetailResponse = {
    visible_facets_keys?: string[];
    name?: string;
    description?: string;
    slug?: string;
    badge?: any;
    app_id?: string;
    tag?: string[];
    allow_sort?: boolean;
    allow_facets?: boolean;
    logo?: Media1;
    _schedule?: any;
    is_active?: boolean;
    priority?: number;
    type?: string;
    query?: CollectionQuery[];
    banners?: ImageUrls;
    meta?: any;
    cron?: any;
};
type UpdateCollection = {
    priority?: number;
    _custom_json?: any;
    slug?: string;
    description?: string;
    tags?: string[];
    logo?: CollectionImage;
    _schedule?: CollectionSchedule;
    type?: string;
    sort_on?: string;
    banners?: CollectionBanner;
    meta?: any;
    seo?: SeoDetail;
    allow_sort?: boolean;
    is_active?: boolean;
    is_visible?: boolean;
    query?: CollectionQuery[];
    _locale_language?: any;
    name?: string;
    badge?: CollectionBadge;
    published?: boolean;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    modified_by?: UserInfo;
};
type ProductBrand = {
    action?: Action;
    logo?: Media1;
    uid?: number;
    name?: string;
};
type Price1 = {
    currency_symbol?: string;
    currency_code?: string;
    max?: number;
    min?: number;
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
    rating_count?: number;
    teaser_tag?: any;
    brand?: ProductBrand;
    tryouts?: string[];
    item_type?: string;
    price?: ProductListingPrice;
    color?: string;
    rating?: number;
    product_online_date?: string;
    image_nature?: string;
    slug: string;
    medias?: Media1[];
    description?: string;
    similars?: string[];
    short_description?: string;
    item_code?: string;
    type?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    discount?: string;
    has_variant?: boolean;
    name?: string;
    promo_meta?: any;
    attributes?: any;
    highlights?: string[];
    uid?: number;
    sellable?: boolean;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    page?: Page;
    filters?: ProductFilters[];
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
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightBrand = {
    name?: string;
    total_sizes?: number;
    available_articles?: number;
    article_freshness?: number;
    available_sizes?: number;
    total_articles?: number;
};
type CatalogInsightItem = {
    count?: number;
    out_of_stock_count?: number;
    sellable_count?: number;
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
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    opt_level: string;
    store_ids?: number[];
    company_id?: number;
    brand_ids?: number[];
    platform?: string;
    enabled?: boolean;
};
type CompanyOptIn = {
    opt_level: string;
    company_id: number;
    store_ids: number[];
    created_on: number;
    created_by?: any;
    modified_on: number;
    brand_ids: number[];
    platform: string;
    enabled: boolean;
    modified_by?: any;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    business_type?: string;
    uid?: number;
    company_type?: string;
    name?: string;
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
    brand?: number;
    store?: number;
    company?: string;
};
type StoreDetail = {
    documents?: any[];
    name?: string;
    created_on?: string;
    company_id?: number;
    address?: any;
    store_code?: string;
    store_type?: string;
    modified_on?: string;
    display_name?: string;
    timing?: any;
    uid?: number;
    additional_contacts?: any[];
    manager?: any;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    indexing: boolean;
    priority?: number;
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
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    format?: string;
    mandatory?: boolean;
    multi?: boolean;
    allowed_values?: string[];
    type: string;
    range?: AttributeSchemaRange;
};
type GenderDetail = {
    name?: string;
    description?: string;
    id?: string;
    filters?: AttributeMasterFilter;
    is_nested?: boolean;
    departments?: string[];
    enabled_for_end_consumer?: boolean;
    details?: AttributeMasterDetails;
    logo?: string;
    slug?: string;
    meta?: AttributeMasterMeta;
    schema?: AttributeMaster;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    code?: string;
    errors?: any;
    status?: number;
    message?: string;
    meta?: any;
};
type UserSerializer = {
    user_id?: string;
    _id?: string;
    contact?: string;
    username?: string;
    uid?: string;
};
type GetDepartment = {
    synonyms?: string[];
    search?: string;
    name?: string;
    page_no?: number;
    page_size?: number;
    created_on?: string;
    created_by?: UserSerializer;
    priority_order?: number;
    modified_on?: string;
    item_type?: string;
    logo?: string;
    is_active?: boolean;
    uid?: number;
    modified_by?: UserSerializer;
    slug?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    code?: string;
    errors?: any;
    status?: number;
    message?: string;
    meta?: any;
};
type DepartmentCreateUpdate = {
    synonyms?: string[];
    name: string;
    tags?: string[];
    priority_order: number;
    platforms?: any;
    logo: string;
    _cls?: string;
    _custom_json?: any;
    is_active?: boolean;
    uid?: number;
    slug?: string;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    user_id: string;
    contact?: string;
    username: string;
    super_user?: boolean;
};
type DepartmentModel = {
    synonyms?: any[];
    verified_by?: UserDetail;
    created_on: string;
    slug?: any;
    name: any;
    _id?: any;
    created_by?: UserDetail;
    priority_order: number;
    modified_on: string;
    logo: string;
    _cls?: any;
    _custom_json?: any;
    is_active?: boolean;
    uid?: number;
    modified_by?: UserDetail;
    verified_on?: string;
};
type ProductTemplate = {
    name?: string;
    description?: string;
    created_on?: string;
    tag?: string;
    created_by?: any;
    departments?: string[];
    modified_on?: string;
    attributes?: string[];
    logo?: string;
    categories?: string[];
    is_expirable: boolean;
    is_active?: boolean;
    is_archived?: boolean;
    is_physical: boolean;
    modified_by?: any;
    slug: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    name?: string;
    description?: string;
    tag?: string;
    id?: string;
    departments?: string[];
    attributes?: string[];
    logo?: string;
    categories?: string[];
    is_expirable: boolean;
    is_active?: boolean;
    is_archived?: boolean;
    is_physical: boolean;
    slug: string;
};
type Properties = {
    teaser_tag?: any;
    size_guide?: any;
    hsn_code?: any;
    no_of_boxes?: any;
    item_type?: any;
    product_publish?: any;
    slug?: any;
    variants?: any;
    description?: any;
    currency?: any;
    item_code?: any;
    short_description?: any;
    custom_order?: any;
    tags?: any;
    is_dependent?: any;
    country_of_origin?: any;
    return_config?: any;
    command?: any;
    is_active?: any;
    name?: any;
    sizes?: any;
    brand_uid?: any;
    category_slug?: any;
    trader?: any;
    trader_type?: any;
    highlights?: any;
    media?: any;
    multi_size?: any;
    product_group_tag?: any;
};
type GlobalValidation = {
    description?: string;
    definitions?: any;
    required?: string[];
    title?: string;
    properties?: Properties;
    type?: string;
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
    brand?: string[];
    type?: string;
    templates?: string[];
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    data?: ProductDownloadItemsData;
    created_by?: VerifiedBy;
    status?: string;
    id?: string;
    seller_id?: number;
    completed_on?: string;
    url?: string;
    template_tags?: any;
    task_id?: string;
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
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
};
type Media2 = {
    logo: string;
    portrait: string;
    landscape: string;
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
type Category = {
    synonyms?: string[];
    name: string;
    created_on?: string;
    hierarchy?: Hierarchy[];
    created_by?: any;
    tryouts?: string[];
    id?: string;
    departments: number[];
    modified_by?: any;
    modified_on?: string;
    media?: Media2;
    is_active: boolean;
    priority?: number;
    marketplaces?: CategoryMapping;
    uid?: number;
    level: number;
    slug?: string;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    synonyms?: string[];
    name: string;
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    departments: number[];
    media?: Media2;
    is_active: boolean;
    priority?: number;
    marketplaces?: CategoryMapping;
    level: number;
    slug?: string;
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
    aspect_ratio_f?: number;
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type Logo = {
    aspect_ratio_f?: number;
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type ReturnConfigResponse = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Product = {
    teaser_tag?: any;
    verified_by?: VerifiedBy;
    images?: Image[];
    all_sizes?: any[];
    size_guide?: string;
    brand?: Brand;
    hsn_code?: string;
    id?: string;
    no_of_boxes?: number;
    departments?: number[];
    item_type?: string;
    template_tag?: string;
    color?: string;
    is_image_less_product?: boolean;
    l3_mapping?: string[];
    is_physical?: boolean;
    image_nature?: string;
    product_publish?: ProductPublished;
    _custom_json?: any;
    category_uid?: number;
    pending?: string;
    slug?: string;
    all_identifiers?: string[];
    variants?: any;
    description?: string;
    moq?: any;
    is_set?: boolean;
    net_quantity?: NetQuantityResponse;
    company_id?: number;
    currency?: string;
    item_code?: string;
    short_description?: string;
    custom_order?: any;
    tags?: string[];
    is_dependent?: boolean;
    primary_color?: string;
    stage?: string;
    country_of_origin?: string;
    return_config?: ReturnConfigResponse;
    verified_on?: string;
    created_on?: string;
    all_company_ids?: number[];
    variant_group?: any;
    is_expirable?: boolean;
    variant_media?: any;
    is_active?: boolean;
    category?: any;
    name?: string;
    tax_identifier?: any;
    sizes?: any[];
    created_by?: any;
    brand_uid?: number;
    modified_on?: string;
    category_slug?: string;
    trader?: any[];
    attributes?: any;
    highlights?: string[];
    media?: Media1[];
    multi_size?: boolean;
    uid?: number;
    modified_by?: any;
    product_group_tag?: string[];
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
};
type Trader = {
    type?: string;
    name: any;
    address?: string[];
};
type ProductCreateUpdateSchemaV2 = {
    teaser_tag?: TeaserTag;
    size_guide?: string;
    bulk_job_id?: string;
    is_image_less_product?: boolean;
    no_of_boxes?: number;
    item_type: string;
    departments: number[];
    template_tag: string;
    requester?: string;
    product_publish?: ProductPublish;
    _custom_json?: any;
    slug: string;
    variants?: any;
    company_id: number;
    description?: string;
    is_set?: boolean;
    net_quantity?: NetQuantity;
    currency: string;
    item_code: string;
    short_description?: string;
    custom_order?: CustomOrder;
    tags?: string[];
    is_dependent?: boolean;
    country_of_origin: string;
    return_config: ReturnConfig;
    action?: string;
    variant_group?: any;
    variant_media?: any;
    is_active?: boolean;
    name: string;
    tax_identifier: TaxIdentifier;
    sizes: any[];
    brand_uid: number;
    category_slug: string;
    trader: Trader[];
    attributes: any;
    highlights?: string[];
    media?: Media1[];
    multi_size?: boolean;
    change_request_id?: any;
    uid?: number;
    product_group_tag?: string[];
};
type ProductVariants = {
    name?: string;
    item_code?: string;
    brand_uid?: number;
    media?: Media1[];
    category_uid?: number;
    uid?: number;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    departments: string[];
    details: AttributeMasterDetails;
    slug: string;
    description?: string;
    tags?: string[];
    is_nested?: boolean;
    logo?: string;
    suggestion?: string;
    enabled_for_end_consumer?: boolean;
    created_on?: string;
    raw_key?: string;
    variant?: boolean;
    synonyms?: any;
    name?: string;
    unit?: string;
    created_by?: any;
    filters: AttributeMasterFilter;
    modified_on?: string;
    modified_by?: any;
    schema: AttributeMaster;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    gtin_type: string;
    gtin_value: string;
    primary?: boolean;
};
type AllSizes = {
    item_weight_unit_of_measure: any;
    item_length: number;
    identifiers?: ValidateIdentifier[];
    item_weight: number;
    item_dimensions_unit_of_measure: string;
    size: any;
    item_height: number;
    item_width: number;
};
type ListALLSizes = {
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
    company_id?: number;
    created_on?: string;
    failed?: number;
    file_path?: string;
    created_by?: UserDetail1;
    template?: ProductTemplate;
    modified_on?: string;
    template_tag?: string;
    failed_records?: string[];
    cancelled_records?: string[];
    cancelled?: number;
    is_active?: boolean;
    stage?: string;
    total?: number;
    modified_by?: UserDetail1;
    succeed?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    user_id?: string;
    uid?: string;
    username?: string;
    email?: string;
};
type BulkJob = {
    created_on: string;
    company_id: number;
    failed?: number;
    file_path?: string;
    created_by?: UserInfo1;
    tracking_url?: string;
    custom_template_tag?: string;
    modified_on?: string;
    cancelled?: number;
    failed_records?: any[];
    cancelled_records?: any[];
    template_tag?: string;
    is_active?: boolean;
    stage?: string;
    total?: number;
    modified_by?: UserInfo1;
    succeed?: number;
};
type BulkResponse = {
    created_on: string;
    created_by?: UserInfo1;
    modified_on?: string;
    batch_id: string;
    is_active?: boolean;
    modified_by?: UserInfo1;
};
type BulkProductRequest = {
    template_tag: string;
    batch_id: string;
    company_id: number;
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
    username?: string;
    company_id?: number;
};
type Items = {
    retry?: number;
    created_on?: string;
    company_id?: number;
    failed?: number;
    file_path?: string;
    created_by?: UserCommon;
    tracking_url?: string;
    id?: string;
    modified_on?: string;
    failed_records?: string[];
    cancelled?: number;
    cancelled_records?: string[];
    is_active?: boolean;
    stage?: string;
    total?: number;
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
    company_id?: number;
    size?: string;
    item_id?: number;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    seller_identifier?: string;
    identifiers?: any;
    currency?: string;
    store?: any;
    sellable_quantity?: number;
    item_id?: number;
    price?: number;
    inventory_updated_on?: string;
    size?: string;
    uid?: string;
    price_effective?: number;
    price_transfer?: number;
    quantity?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type GTIN = {
    gtin_type: string;
    gtin_value: any;
    primary?: boolean;
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
    expiration_date?: string;
    item_weight_unit_of_measure?: string;
    is_set?: boolean;
    item_length?: number;
    identifiers: GTIN[];
    store_code: string;
    currency: string;
    price?: number;
    item_weight?: number;
    set?: InventorySet;
    item_dimensions_unit_of_measure?: string;
    item_width?: number;
    price_transfer?: number;
    price_effective: number;
    item_height?: number;
    size: any;
    quantity: number;
};
type ItemQuery = {
    uid?: number;
    item_code?: string;
    brand_uid?: number;
};
type InventoryRequest = {
    sizes: InvSize[];
    company_id: number;
    item: ItemQuery;
};
type BrandMeta = {
    name: string;
    id: number;
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type PriceMeta = {
    transfer: number;
    currency: string;
    tp_notes?: any;
    effective: number;
    updated_at?: string;
    marked: number;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type ReturnConfig1 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
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
type DimensionResponse = {
    length: number;
    width: number;
    height: number;
    unit: string;
    is_default: boolean;
};
type Trader1 = {
    type: string;
    name: string;
    address: string[];
};
type CompanyMeta = {
    id: number;
};
type InventorySellerResponse = {
    fynd_meta?: any;
    brand: BrandMeta;
    manufacturer: ManufacturerResponse;
    raw_meta?: any;
    price: PriceMeta;
    fragile: boolean;
    weight: WeightResponse;
    _custom_json?: any;
    expiration_date?: string;
    added_on_store?: string;
    is_set?: boolean;
    track_inventory?: boolean;
    tags?: string[];
    total_quantity: number;
    stage?: string;
    country_of_origin: string;
    return_config?: ReturnConfig1;
    identifier: any;
    size: string;
    meta?: any;
    seller_identifier: string;
    store: StoreMeta;
    is_active?: boolean;
    quantities?: Quantities;
    fynd_article_code: string;
    dimension: DimensionResponse;
    tax_identifier?: any;
    created_by?: UserSerializer;
    item_id: number;
    trader?: Trader1[];
    fynd_item_code: string;
    trace_id?: string;
    set?: InventorySet;
    company: CompanyMeta;
    uid: string;
    modified_by?: UserSerializer;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
type PriceArticle = {
    transfer?: number;
    currency?: string;
    tp_notes?: any;
    effective?: number;
    marked?: number;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type ReturnConfig2 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type ArticleStoreResponse = {
    store_type?: string;
    uid?: number;
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
type DimensionResponse1 = {
    height?: number;
    unit?: string;
    length?: number;
    width?: number;
};
type Trader2 = {
    type?: string;
    name?: string;
    address?: string[];
};
type CompanyMeta1 = {
    id?: number;
};
type GetInventories = {
    brand?: BrandMeta1;
    manufacturer?: ManufacturerResponse1;
    id?: string;
    price?: PriceArticle;
    weight?: WeightResponse1;
    expiration_date?: string;
    is_set?: boolean;
    track_inventory?: boolean;
    tags?: string[];
    inventory_updated_on?: string;
    total_quantity?: number;
    stage?: string;
    country_of_origin?: string;
    return_config?: ReturnConfig2;
    identifier?: any;
    size?: string;
    seller_identifier?: string;
    store?: ArticleStoreResponse;
    date_meta?: DateMeta;
    quantities?: QuantitiesArticle;
    dimension?: DimensionResponse1;
    tax_identifier?: any;
    created_by?: UserSerializer;
    item_id?: number;
    trader?: Trader2[];
    platforms?: any;
    trace_id?: string;
    company?: CompanyMeta1;
    uid?: string;
    modified_by?: UserSerializer;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    created_on?: string;
    company_id?: number;
    failed?: number;
    file_path?: string;
    created_by?: any;
    id?: string;
    modified_on?: string;
    cancelled?: number;
    failed_records?: string[];
    cancelled_records?: string[];
    is_active?: boolean;
    stage?: string;
    total?: number;
    modified_by?: any;
    succeed?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    expiration_date?: string;
    item_weight_unit_of_measure?: string;
    seller_identifier: string;
    store_code: string;
    currency?: string;
    tags?: string[];
    price?: number;
    price_marked?: number;
    total_quantity?: number;
    trace_id?: string;
    item_dimensions_unit_of_measure?: string;
    price_effective?: number;
    quantity?: number;
};
type InventoryBulkRequest = {
    user?: any;
    sizes: InventoryJobPayload[];
    batch_id: string;
    company_id: number;
};
type InventoryExportJob = {
    status?: string;
    seller_id: number;
    completed_on?: string;
    url?: string;
    request_params?: any;
    task_id: string;
    trigger_on?: string;
};
type InventoryExportRequest = {
    brand?: number[];
    type?: string;
    store?: number[];
};
type InventoryExportResponse = {
    status?: string;
    seller_id: number;
    request_params?: any;
    task_id: string;
    trigger_on?: string;
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
    expiration_date?: string;
    seller_identifier: string;
    tags?: string[];
    store_id: number;
    price_marked?: number;
    total_quantity?: number;
    trace_id?: string;
    price_effective?: number;
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    company_id: number;
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
type HsnCodesObject = {
    company_id?: number;
    threshold1?: number;
    hsn_code?: string;
    tax_on_esp?: boolean;
    id?: string;
    modified_on?: string;
    tax2?: number;
    threshold2?: number;
    tax_on_mrp?: boolean;
    tax1?: number;
    hs2_code?: string;
};
type PageResponse = {
    item_total?: number;
    has_next?: boolean;
    current?: string;
    size?: number;
    has_previous?: boolean;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    company_id: number;
    threshold1: number;
    hsn_code: string;
    tax_on_esp?: boolean;
    tax2?: number;
    threshold2?: number;
    tax_on_mrp: boolean;
    is_active?: boolean;
    uid?: number;
    tax1: number;
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
    threshold: number;
    rate: number;
    effective_date: string;
    cess?: number;
};
type HSNDataInsertV2 = {
    country_code: string;
    description: string;
    created_on?: string;
    taxes: TaxSlab[];
    created_by?: any;
    hsn_code: string;
    modified_on?: string;
    type: string;
    reporting_hsn: string;
    modified_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type ArticleQuery = {
    ignored_stores?: number[];
    size: string;
    item_id: number;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type AssignStoreArticle = {
    group_id?: string;
    query?: ArticleQuery;
    article_assignment?: ArticleAssignment;
    meta?: any;
    quantity?: number;
};
type AssignStore = {
    channel_identifier?: string;
    company_id?: number;
    store_ids?: number[];
    pincode: string;
    app_id: string;
    articles: AssignStoreArticle[];
    channel_type?: string;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    article_assignment: ArticleAssignment1;
    company_id?: number;
    group_id?: string;
    _id?: string;
    status: boolean;
    index?: number;
    store_pincode?: number;
    item_id: number;
    store_id?: number;
    price_marked?: number;
    s_city?: string;
    strategy_wise_listing?: any[];
    uid?: string;
    price_effective?: number;
    size: string;
    meta?: any;
    quantity: number;
};
type BrandItem = {
    name?: string;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    departments?: string[];
    logo?: Media;
    uid?: number;
    discount?: string;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    name?: string;
    priority_order?: number;
    logo?: Media;
    uid?: number;
    slug?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
type ThirdLevelChild = {
    name?: string;
    slug?: string;
    action?: Action;
    childs?: any[];
    _custom_json?: any;
    uid?: number;
    banners?: ImageUrls;
};
type SecondLevelChild = {
    name?: string;
    slug?: string;
    action?: Action;
    childs?: ThirdLevelChild[];
    _custom_json?: any;
    uid?: number;
    banners?: ImageUrls;
};
type Child = {
    name?: string;
    slug?: string;
    action?: Action;
    childs?: SecondLevelChild[];
    _custom_json?: any;
    uid?: number;
    banners?: ImageUrls;
};
type CategoryItems = {
    name?: string;
    slug?: string;
    action?: Action;
    childs?: Child[];
    uid?: number;
    banners?: ImageUrls;
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
    operators?: any;
    page: Page;
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
};
type ProductDetail = {
    rating_count?: number;
    teaser_tag?: any;
    brand?: ProductBrand;
    tryouts?: string[];
    item_type?: string;
    color?: string;
    rating?: number;
    product_online_date?: string;
    image_nature?: string;
    slug: string;
    medias?: Media1[];
    description?: string;
    similars?: string[];
    short_description?: string;
    item_code?: string;
    type?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    has_variant?: boolean;
    name?: string;
    promo_meta?: any;
    attributes?: any;
    highlights?: string[];
    uid?: number;
};
type InventoryPage = {
    item_total: number;
    has_next?: boolean;
    next_id?: string;
    type: string;
    has_previous?: boolean;
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
type GetAddressSerializer = {
    latitude?: number;
    country_code?: string;
    address_type?: string;
    city?: string;
    longitude?: number;
    pincode?: number;
    address2?: string;
    country?: string;
    state?: string;
    address1?: string;
    landmark?: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    name?: string;
    email?: string;
    mobile_no: SellerPhoneNumber;
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
type InvoiceCredSerializer = {
    enabled?: boolean;
    username?: string;
    password?: string;
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
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetCompanySerializer = {
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer2;
    created_on?: string;
    name?: string;
    created_by?: UserSerializer2;
    reject_reason?: string;
    modified_on?: string;
    business_type?: string;
    company_type?: string;
    stage?: string;
    uid?: number;
    modified_by?: UserSerializer2;
    verified_on?: string;
};
type GetLocationSerializer = {
    verified_by?: UserSerializer1;
    phone_number: string;
    address: GetAddressSerializer;
    warnings?: any;
    _custom_json?: any;
    notification_emails?: string[];
    store_type?: string;
    contact_numbers?: SellerPhoneNumber[];
    stage?: string;
    verified_on?: string;
    manager?: LocationManagerSerializer;
    created_on?: string;
    product_return_config?: ProductReturnConfigSerializer;
    documents?: Document[];
    code: string;
    name: string;
    created_by?: UserSerializer1;
    modified_on?: string;
    display_name: string;
    timing?: LocationDayWiseSerializer[];
    gst_credentials?: InvoiceDetailsSerializer;
    integration_type?: LocationIntegrationType;
    company?: GetCompanySerializer;
    uid?: number;
    modified_by?: UserSerializer1;
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
    _custom_json?: any;
    is_active?: boolean;
    uid: number;
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
type CompanyTaxesSerializer = {
    effective_date?: string;
    rate?: number;
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
type GetCompanyProfileSerializerResponse = {
    _custom_json?: any;
    franchise_enabled?: boolean;
    created_by?: UserSerializer;
    modified_on?: string;
    business_details?: BusinessDetails;
    addresses?: GetAddressSerializer[];
    taxes?: CompanyTaxesSerializer[];
    modified_by?: UserSerializer;
    contact_details?: ContactDetails;
    warnings?: any;
    verified_by?: UserSerializer;
    business_info?: string;
    name?: string;
    mode?: string;
    created_on?: string;
    uid: number;
    documents?: Document[];
    stage?: string;
    company_type: string;
    business_country_info?: BusinessCountryInfo;
    notification_emails?: string[];
    verified_on?: string;
    business_type: string;
};
type CreateUpdateAddressSerializer = {
    country_code?: string;
    address1: string;
    landmark?: string;
    address_type: string;
    longitude: number;
    address2?: string;
    pincode: number;
    city: string;
    latitude: number;
    state: string;
    country: string;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type UpdateCompany = {
    business_details?: BusinessDetails;
    business_info?: string;
    franchise_enabled?: boolean;
    _custom_json?: any;
    name?: string;
    addresses?: CreateUpdateAddressSerializer[];
    taxes?: CompanyTaxesSerializer1[];
    documents?: Document[];
    contact_details?: ContactDetails;
    company_type?: string;
    notification_emails?: string[];
    reject_reason?: string;
    warnings?: any;
    business_type?: string;
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
    store_documents?: DocumentsObj;
    brand?: DocumentsObj;
    product?: DocumentsObj;
    company_documents?: DocumentsObj;
    stage?: string;
    store?: DocumentsObj;
    uid?: number;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    _custom_json?: any;
    created_by?: UserSerializer;
    description?: string;
    slug_key?: string;
    modified_on?: string;
    modified_by?: UserSerializer;
    logo?: string;
    warnings?: any;
    verified_by?: UserSerializer;
    synonyms?: string[];
    name: string;
    mode?: string;
    _locale_language?: any;
    created_on?: string;
    uid?: number;
    stage?: string;
    banner?: BrandBannerSerializer;
    verified_on?: string;
    reject_reason?: string;
};
type CreateUpdateBrandRequestSerializer = {
    _custom_json?: any;
    synonyms?: string[];
    name: string;
    description?: string;
    _locale_language?: any;
    company_id?: number;
    banner?: BrandBannerSerializer;
    logo: string;
    brand_tier?: string;
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
    verified_by?: UserSerializer;
    market_channels?: string[];
    _custom_json?: any;
    name?: string;
    business_type: string;
    created_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    details?: CompanyDetails;
    modified_by?: UserSerializer;
    company_type: string;
    stage?: string;
    created_on?: string;
    business_country_info?: BusinessCountryInfo;
    modified_on?: string;
    notification_emails?: string[];
    verified_on?: string;
    reject_reason?: string;
    uid?: number;
};
type CompanyBrandSerializer = {
    verified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    stage?: string;
    company?: CompanySerializer;
    created_on?: string;
    modified_on?: string;
    verified_on?: string;
    reject_reason?: string;
    warnings?: any;
    uid?: number;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
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
    date: HolidayDateSerializer;
    title: string;
    holiday_type: string;
};
type LocationSerializer = {
    _custom_json?: any;
    manager?: LocationManagerSerializer;
    display_name: string;
    product_return_config?: ProductReturnConfigSerializer;
    holiday?: HolidaySchemaSerializer[];
    name: string;
    code: string;
    address: GetAddressSerializer;
    documents?: Document[];
    stage?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    company: number;
    store_type?: string;
    timing?: LocationDayWiseSerializer[];
    notification_emails?: string[];
    contact_numbers?: SellerPhoneNumber[];
    warnings?: any;
    uid?: number;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleQuery = {
    item_id?: number;
    ignored_stores?: number[];
    size?: string;
};
type _ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type _AssignStoreArticle = {
    query?: _ArticleQuery;
    group_id?: string;
    article_assignment?: _ArticleAssignment;
    meta?: any;
    quantity?: number;
};
type AssignStoreRequestValidator = {
    channel_identifier?: string;
    store_ids?: number[];
    app_id?: string;
    company_id?: number;
    articles?: _AssignStoreArticle[];
    channel_type?: string;
    pincode?: string;
};
type AssignStoreResponseSerializer = {
    status?: boolean;
    s_city?: string;
    store_id?: number;
    index?: number;
    _id?: string;
    store_pincode?: string;
    company_id?: number;
    article_assignment?: _ArticleAssignment;
    size?: string;
    meta?: any;
    item_id?: number;
    price_marked?: number;
    preice_effective?: number;
    quantity?: number;
    uid?: string;
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
    gstores?: GStore[];
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
    integration: string;
    integration_data?: any;
    company_name?: string;
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
    integration: string;
    company_name: string;
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
    mapping?: any;
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
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    codes?: string[];
    types?: string[];
    networks?: string[];
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
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    ordering_stores?: number[];
    price_range?: PriceRange;
    post_order?: PostOrder;
    user_groups?: number[];
    payments?: any;
    user_type?: string;
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    platforms?: string[];
    bulk_bundle?: BulkBundleRestriction;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Rule = {
    discount_qty?: number;
    min?: number;
    value?: number;
    key?: number;
    max?: number;
};
type State = {
    is_public?: boolean;
    is_archived?: boolean;
    is_display?: boolean;
};
type CouponSchedule = {
    cron?: string;
    next_schedule?: any[];
    end?: string;
    start?: string;
    duration?: number;
};
type Validity = {
    priority?: number;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    title?: string;
    subtitle?: string;
    apply?: DisplayMetaDict;
    description?: string;
    auto?: DisplayMetaDict;
    remove?: DisplayMetaDict;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type RuleDefinition = {
    type: string;
    value_type: string;
    auto_apply?: boolean;
    is_exact?: boolean;
    applicable_on: string;
    currency_code?: string;
    scope?: string[];
    calculate_on: string;
};
type CouponAdd = {
    identifiers: Identifier;
    validation?: Validation;
    ownership: Ownership;
    restrictions?: Restrictions;
    code: string;
    type_slug: string;
    date_meta?: CouponDateMeta;
    rule: Rule[];
    state?: State;
    _schedule?: CouponSchedule;
    validity: Validity;
    display_meta: DisplayMeta;
    author?: CouponAuthor;
    tags?: string[];
    action?: CouponAction;
    rule_definition: RuleDefinition;
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
    identifiers: Identifier;
    validation?: Validation;
    ownership: Ownership;
    restrictions?: Restrictions;
    code: string;
    type_slug: string;
    date_meta?: CouponDateMeta;
    rule: Rule[];
    state?: State;
    _schedule?: CouponSchedule;
    validity: Validity;
    display_meta: DisplayMeta;
    author?: CouponAuthor;
    tags?: string[];
    action?: CouponAction;
    rule_definition: RuleDefinition;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionSchedule = {
    published: boolean;
    cron?: string;
    next_schedule?: any[];
    end?: string;
    start: string;
    duration?: number;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type DiscountOffer = {
    discount_price?: number;
    apportion_discount?: boolean;
    discount_percentage?: number;
    partial_can_ret?: boolean;
    max_usage_per_transaction?: number;
    max_offer_quantity?: number;
    code?: string;
    max_discount_amount?: number;
    min_offer_quantity?: number;
    discount_amount?: number;
};
type CompareObject = {
    less_than?: number;
    less_than_equals?: number;
    greater_than?: number;
    equals?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    item_store?: number[];
    item_category?: number[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_brand?: number[];
    cart_total?: CompareObject;
    item_id?: number[];
    item_exclude_sku?: string[];
    item_exclude_company?: number[];
    item_exclude_id?: number[];
    item_company?: number[];
    item_size?: string[];
    buy_rules?: string[];
    cart_unique_item_quantity?: CompareObject;
    available_zones?: string[];
    cart_quantity?: CompareObject;
    item_sku?: string[];
    item_exclude_category?: number[];
    item_brand?: number[];
    all_items?: boolean;
    item_exclude_store?: number[];
};
type DiscountRule = {
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
    buy_condition: string;
    discount_type: string;
};
type DisplayMeta1 = {
    name?: string;
    offer_text?: string;
    description?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    codes?: string[];
    uses?: PaymentAllowValue1;
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
    post_order?: PostOrder1;
    user_groups?: number[];
    user_id?: string[];
    order_quantity?: number;
    payments?: PromotionPaymentModes[];
    uses: UsesRestriction1;
    user_registered?: UserRegistered;
    platforms?: string[];
    anonymous_users?: boolean;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionListItem = {
    promotion_type: string;
    visiblility?: Visibility;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    calculate_on?: string;
    stackable?: boolean;
    application_id: string;
    _custom_json?: any;
    apply_all_discount?: boolean;
    apply_priority?: number;
    mode: string;
    buy_rules: any;
    promo_group: string;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    apply_exclusive?: string;
    ownership: Ownership1;
    restrictions?: Restrictions1;
    code?: string;
    date_meta?: PromotionDateMeta;
    currency?: string;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    promotion_type: string;
    visiblility?: Visibility;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    calculate_on?: string;
    stackable?: boolean;
    application_id: string;
    _custom_json?: any;
    apply_all_discount?: boolean;
    apply_priority?: number;
    mode: string;
    buy_rules: any;
    promo_group: string;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    apply_exclusive?: string;
    ownership: Ownership1;
    restrictions?: Restrictions1;
    code?: string;
    date_meta?: PromotionDateMeta;
    currency?: string;
};
type PromotionUpdate = {
    promotion_type: string;
    visiblility?: Visibility;
    _schedule?: PromotionSchedule;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    calculate_on?: string;
    stackable?: boolean;
    application_id: string;
    _custom_json?: any;
    apply_all_discount?: boolean;
    apply_priority?: number;
    mode: string;
    buy_rules: any;
    promo_group: string;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    apply_exclusive?: string;
    ownership: Ownership1;
    restrictions?: Restrictions1;
    code?: string;
    date_meta?: PromotionDateMeta;
    currency?: string;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    type?: string;
    modified_on?: string;
    title?: string;
    subtitle?: string;
    entity_slug?: string;
    description?: string;
    entity_type?: string;
    created_on?: string;
    example?: string;
    is_hidden?: boolean;
};
type CartItem = {
    quantity?: number;
    size: string;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductAvailability = {
    other_store_quantity?: number;
    deliverable?: boolean;
    is_valid?: boolean;
    out_of_stock?: boolean;
    sizes?: string[];
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
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    type?: string;
    seller?: BaseInfo;
    gift_card?: any;
    cart_item_meta?: any;
    price?: ArticlePriceInfo;
    is_gift_visible?: boolean;
    seller_identifier?: string;
    store?: BaseInfo;
    identifier?: any;
    uid?: string;
    product_group_tags?: string[];
    extra_meta?: any;
    parent_item_identifiers?: any;
    quantity?: number;
    size?: string;
};
type DiscountRulesApp = {
    raw_offer?: any;
    offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
};
type FreeGiftItem = {
    item_images_url?: string[];
    item_brand_name?: string;
    item_price_details?: any;
    item_slug?: string;
    item_name?: string;
    item_id?: number;
};
type AppliedFreeArticles = {
    quantity?: number;
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
};
type AppliedPromotion = {
    promo_id?: string;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    promotion_group?: string;
    promotion_type?: string;
    offer_text?: string;
    mrp_promotion?: boolean;
    promotion_name?: string;
    discount_rules?: DiscountRulesApp[];
    applied_free_articles?: AppliedFreeArticles[];
    amount?: number;
};
type ProductPrice = {
    add_on?: number;
    effective?: number;
    selling?: number;
    currency_code?: string;
    marked?: number;
    currency_symbol?: string;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type ProductImage = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type Tags = {
    tags?: any;
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
    type?: string;
    categories?: CategoryInfo[];
    images?: ProductImage[];
    teaser_tag?: Tags;
    slug?: string;
    brand?: BaseInfo;
    name?: string;
    tags?: string[];
    _custom_json?: any;
    uid?: number;
    action?: ProductAction;
};
type CouponDetails = {
    code?: string;
    discount_total_quantity?: number;
    discount_single_quantity?: number;
};
type CartProductInfo = {
    is_set?: boolean;
    identifiers: CartProductIdentifer;
    availability?: ProductAvailability;
    article?: ProductArticle;
    promotions_applied?: AppliedPromotion[];
    key?: string;
    price?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    bulk_offer?: any;
    product?: CartProduct;
    discount?: string;
    coupon?: CouponDetails;
    price_per_unit?: ProductPriceInfo;
    quantity?: number;
    coupon_message?: string;
    parent_item_identifiers?: any;
    message?: string;
};
type CouponBreakup = {
    type?: string;
    minimum_cart_value?: number;
    value?: number;
    title?: string;
    is_applied?: boolean;
    max_discount_value?: number;
    code?: string;
    coupon_value?: number;
    coupon_type?: string;
    description?: string;
    sub_title?: string;
    uid?: string;
    message?: string;
};
type LoyaltyPoints = {
    total?: number;
    is_applied?: boolean;
    description?: string;
    applicable?: number;
};
type DisplayBreakup = {
    value?: number;
    key?: string;
    display?: string;
    currency_code?: string;
    message?: string[];
    currency_symbol?: string;
};
type RawBreakup = {
    cod_charge?: number;
    gift_card?: number;
    mrp_total?: number;
    gst_charges?: number;
    fynd_cash?: number;
    delivery_charge?: number;
    discount?: number;
    coupon?: number;
    convenience_fee?: number;
    vog?: number;
    total?: number;
    subtotal?: number;
    you_saved?: number;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
    raw?: RawBreakup;
};
type OpenapiCartDetailsResponse = {
    items?: CartProductInfo[];
    message?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    area?: string;
    landmark?: string;
    meta?: any;
    country_code?: string;
    pincode?: number;
    state?: string;
    name?: string;
    area_code: string;
    city?: string;
    phone?: number;
    country?: string;
    address?: string;
    address_type?: string;
    area_code_slug?: string;
    email?: string;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
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
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    message?: string;
    delivery_promise?: ShipmentPromise;
};
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type OpenApiOrderItem = {
    size: string;
    price_effective: number;
    amount_paid: number;
    price_marked: number;
    meta?: CartItemMeta;
    delivery_charges: number;
    coupon_effective_discount: number;
    discount: number;
    files?: OpenApiFiles[];
    cashback_applied: number;
    quantity?: number;
    employee_discount?: number;
    cod_charges: number;
    extra_meta?: any;
    product_id: number;
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
};
type OpenApiPlatformCheckoutReq = {
    cart_items: OpenApiOrderItem[];
    delivery_charges: number;
    gstin?: string;
    coupon?: string;
    comment?: string;
    cashback_applied: number;
    currency_code?: string;
    coupon_code: string;
    employee_discount?: any;
    payment_methods: MultiTenderPaymentMethod[];
    cod_charges: number;
    shipping_address?: ShippingAddress;
    affiliate_order_id?: string;
    billing_address: ShippingAddress;
    payment_mode?: string;
    order_id?: string;
    files?: OpenApiFiles[];
    cart_value: number;
    coupon_value: number;
    loyalty_discount?: number;
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    message?: string;
    order_id: string;
    order_ref_id?: string;
};
type AbandonedCart = {
    merge_qty?: boolean;
    _id: string;
    meta?: any;
    delivery_charges?: any;
    gstin?: string;
    payments?: any;
    buy_now?: boolean;
    coupon?: any;
    comment?: string;
    uid: number;
    created_on: string;
    payment_methods?: any[];
    fynd_credits?: any;
    user_id: string;
    articles: any[];
    cart_value?: number;
    is_default: boolean;
    discount?: number;
    bulk_coupon_discount?: number;
    is_active?: boolean;
    promotion?: any;
    cod_charges?: any;
    checkout_mode?: string;
    expire_at: string;
    cashback: any;
    shipments?: any[];
    payment_mode?: string;
    last_modified: string;
    order_id?: string;
    app_id?: string;
    fc_index_map?: number[];
    is_archive?: boolean;
    pick_up_customer_details?: any;
};
type AbandonedCartResponse = {
    success?: boolean;
    items?: AbandonedCart[];
    page?: Page;
    result?: any;
    message?: string;
};
type AddProductCart = {
    article_id?: string;
    item_size?: string;
    store_id?: number;
    pos?: boolean;
    seller_id?: number;
    display?: string;
    article_assignment?: any;
    product_group_tags?: string[];
    quantity?: number;
    extra_meta?: any;
    parent_item_identifiers?: any;
    item_id?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    payment_selection_lock?: PaymentSelectionLock;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    coupon_text?: string;
    gstin?: string;
    last_modified?: string;
    restrict_checkout?: boolean;
    is_valid?: boolean;
    buy_now?: boolean;
    id?: string;
    delivery_charge_info?: string;
    comment?: string;
    currency?: CartCurrency;
    checkout_mode?: string;
    message?: string;
    delivery_promise?: ShipmentPromise;
};
type AddCartDetailResponse = {
    partial?: boolean;
    cart?: CartDetailResponse;
    message?: string;
    success?: boolean;
};
type UpdateProductCart = {
    identifiers: CartProductIdentifer;
    article_id?: string;
    item_size?: string;
    item_index?: number;
    extra_meta?: any;
    quantity?: number;
    parent_item_identifiers?: any;
    item_id?: number;
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
