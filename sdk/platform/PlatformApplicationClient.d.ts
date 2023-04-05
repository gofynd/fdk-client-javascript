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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, GenerateSEOContent, GeneratedSEOContent, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, ShipmentItemFulFillingStore, PaymentModeInfo, Prices, ShipmentStatus, GSTDetailsData, PlatformItem, BagUnit, UserDataInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, InvoiceInfo, OrderDetailsData, TrackingList, UserDetailsData, DPDetailsData, FulfillingStore, OrderingStoreDetails, CompanyDetails, BagStateMapper, BagStatusHistory, ShipmentPayments, Dimensions, Meta, PDFLinks, AffiliateMeta, Formatted, BuyerDetails, EinvoiceInfo, ShipmentTimeStamp, LockData, DebugInfo, ShipmentMeta, AffiliateDetails, ShipmentStatusData, CurrentStatus, PlatformDeliveryAddress, BagConfigs, Identifier, FinancialBreakup, OrderBrandName, BagGST, OrderBagArticle, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBags, PlatformShipment, ShipmentInfoResponse, TaxDetails, TransactionData, BillingStaffDetails, PlatformUserDetails, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, ArticleDetails, AffiliateBagDetails, Dates, StoreAddress, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, StoreMeta, Store, B2BPODetails, BagMeta, Attributes, Item, Brand, Weight, ReturnConfig, Article, BagGSTDetails, BagReturnableCancelableStatus, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, OrderPriority, UserData, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, OrderInfo, AffiliateStoreIdMapping, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, Meta1, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ProcessingDates, Tax, Charge, LineItem, Shipment, BillingInfo, TaxInfo, PaymentMethod, PaymentInfo, ShippingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, DeleteResponse, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Price, Size, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, MOQData, SEOData, OwnerAppItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, Media1, BannerImage, ImageUrls, CollectionQuery, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionImage, UserInfo, CollectionBanner, CollectionBadge, CollectionSchedule, SeoDetail, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Media2, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, ReturnConfigResponse, Logo, NetQuantityResponse, Trader, Image, ProductPublished, Product, ProductListingResponse, CustomOrder, TeaserTag, NetQuantity, TaxIdentifier, ProductPublish, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, WeightResponse, ManufacturerResponse, ReturnConfig1, BrandMeta, PriceMeta, Trader1, CompanyMeta, DimensionResponse, QuantityBase, Quantities, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, WeightResponse1, ManufacturerResponse1, ReturnConfig2, BrandMeta1, PriceArticle, Trader2, CompanyMeta1, DimensionResponse1, Quantity, QuantitiesArticle, ArticleStoreResponse, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, PageResponse, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, ProductReturnConfigSerializer, GetAddressSerializer, UserSerializer1, LocationIntegrationType, UserSerializer2, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, SellerPhoneNumber, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, CompanyTaxesSerializer, Website, BusinessDetails, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validation, RuleDefinition, State, CouponAuthor, Validity, CouponDateMeta, PaymentAllowValue, PaymentModes, BulkBundleRestriction, UsesRemaining, UsesRestriction, PostOrder, PriceRange, Restrictions, CouponAction, CouponSchedule, Rule, Ownership, DisplayMetaDict, DisplayMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, CompareObject, ItemCriteria, Ownership1, PromotionAction, PromotionAuthor, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, UserRegistered, PostOrder1, Restrictions1, DiscountOffer, DiscountRule, PromotionDateMeta, Visibility, PromotionSchedule, DisplayMeta1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, ProductImage, ActionQuery, ProductAction, CategoryInfo, BaseInfo, CartProduct, BasePrice, ArticlePriceInfo, ProductArticle, ProductAvailability, PromoMeta, Ownership2, AppliedPromotion, ProductPrice, ProductPriceInfo, CartProductIdentifer, CartProductInfo, LoyaltyPoints, RawBreakup, DisplayBreakup, CouponBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
type GenerateSEOContent = {
    text?: string;
    existing_text?: string;
    keywords?: string[];
    type?: string;
};
type GeneratedSEOContent = {
    title?: string;
    description?: string;
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
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    config_type: string;
    merchant_salt: string;
    secret: string;
    is_active?: boolean;
    key: string;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    is_active?: boolean;
    app_id: string;
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
type IntentApp = {
    code?: string;
    package_name?: string;
    logos?: PaymentModeLogo;
    display_name?: string;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    card_brand_image?: string;
    aggregator_name: string;
    remaining_limit?: number;
    logo_url?: PaymentModeLogo;
    retry_count?: number;
    merchant_code?: string;
    card_type?: string;
    display_name?: string;
    card_issuer?: string;
    cod_limit?: number;
    expired?: boolean;
    intent_app?: IntentApp[];
    name?: string;
    card_fingerprint?: string;
    intent_flow?: boolean;
    fynd_vpa?: string;
    nickname?: string;
    display_priority?: number;
    card_number?: string;
    card_id?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_name?: string;
    cod_limit_per_order?: number;
    code?: string;
    card_reference?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_brand?: string;
    exp_year?: number;
    exp_month?: number;
    card_token?: string;
    intent_app_error_list?: string[];
    card_isin?: string;
    timeout?: number;
};
type RootPaymentMode = {
    aggregator_name?: string;
    list?: PaymentModeList[];
    anonymous_enable?: boolean;
    save_card?: boolean;
    add_card_enabled?: boolean;
    name: string;
    display_priority: number;
    display_name: string;
    is_pay_by_card_pl?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    is_default: boolean;
    unique_transfer_no: any;
    transfer_type: string;
    is_active: boolean;
    payouts_aggregators: any[];
    more_attributes: any;
    customers: any;
};
type PayoutBankDetails = {
    state?: string;
    pincode?: number;
    branch_name?: string;
    account_holder?: string;
    city?: string;
    bank_name?: string;
    ifsc_code: string;
    country?: string;
    account_no?: string;
    account_type: string;
};
type PayoutRequest = {
    bank_details: PayoutBankDetails;
    unique_external_id: string;
    transfer_type: string;
    aggregator: string;
    users: any;
    is_active: boolean;
};
type PayoutResponse = {
    bank_details: any;
    payouts: any;
    created: boolean;
    unique_transfer_no: string;
    transfer_type: string;
    success: boolean;
    users: any;
    aggregator: string;
    is_active: boolean;
    payment_status: string;
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
    config: any;
    aggregator: string;
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
    branch_name: string;
    account_holder: string;
    bank_name: string;
    ifsc_code: string;
    account_no: string;
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
    address: string;
    display_name: string;
    delights_user_name?: string;
    created_on: string;
    email: string;
    comment?: string;
    branch_name?: string;
    account_no: string;
    subtitle: string;
    modified_on: string;
    bank_name: string;
    mobile?: string;
    account_holder: string;
    beneficiary_id: string;
    id: number;
    is_active: boolean;
    ifsc_code: string;
    title: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    payment_gateway?: string;
    current_status?: string;
    payment_id?: string;
    order_id?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    amount: number;
    mode: string;
    meta?: MultiTenderPaymentMeta;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    message: string;
    success: boolean;
    order_id: string;
};
type CODdata = {
    remaining_limit: number;
    user_id: string;
    usages: number;
    is_active: boolean;
    limit: number;
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
    message: string;
    success: boolean;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type Prices = {
    coupon_value?: number;
    transfer_price?: number;
    price_marked?: number;
    cashback_applied?: number;
    fynd_credits?: number;
    cashback?: number;
    tax_collected_at_source?: number;
    refund_credit?: number;
    promotion_effective_discount?: number;
    delivery_charge?: number;
    amount_paid_roundoff?: number;
    cod_charges?: number;
    discount?: number;
    value_of_good?: number;
    amount_paid?: number;
    price_effective?: number;
    refund_amount?: number;
};
type ShipmentStatus = {
    actual_status: string;
    hex_code: string;
    status: string;
    title: string;
    ops_status: string;
};
type GSTDetailsData = {
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    gst_fee: number;
    gstin_code: string;
    value_of_good: number;
};
type PlatformItem = {
    code?: string;
    id?: number;
    l1_category?: string[];
    l3_category_name?: string;
    color?: string;
    size?: string;
    name?: string;
    images?: string[];
    can_cancel?: boolean;
    can_return?: boolean;
    l3_category?: number;
    department_id?: number;
    image?: string[];
};
type BagUnit = {
    item_quantity: number;
    bag_id: number;
    gst?: GSTDetailsData;
    item?: PlatformItem;
    total_shipment_bags: number;
    prices?: Prices;
    shipment_id: string;
    can_cancel?: boolean;
    can_return?: boolean;
    status: any;
    ordering_channel: string;
};
type UserDataInfo = {
    email?: string;
    uid?: number;
    first_name?: string;
    mobile?: string;
    name?: string;
    avis_user_id?: string;
    last_name?: string;
    gender?: string;
    is_anonymous_user?: boolean;
};
type ShipmentItem = {
    sla?: any;
    created_at: string;
    payment_methods?: any;
    shipment_created_at: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    id: string;
    application?: any;
    total_shipments_in_order: number;
    payment_mode_info?: PaymentModeInfo;
    prices?: Prices;
    total_bags_count: number;
    shipment_id?: string;
    shipment_status?: ShipmentStatus;
    bags?: BagUnit[];
    fulfilling_centre: string;
    user?: UserDataInfo;
    channel?: any;
};
type FilterInfoOption = {
    name?: string;
    text: string;
    value?: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    text: string;
    value: string;
    type: string;
};
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
    page?: any;
    applied_filters?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type InvoiceInfo = {
    invoice_url?: string;
    store_invoice_id?: string;
    label_url?: string;
    updated_date?: string;
    credit_note_id?: string;
};
type OrderDetailsData = {
    source?: string;
    order_value?: string;
    ordering_channel_logo?: any;
    fynd_order_id: string;
    tax_details?: any;
    order_date?: string;
    affiliate_id?: string;
    cod_charges?: string;
    ordering_channel?: string;
};
type TrackingList = {
    is_passed?: boolean;
    is_current?: boolean;
    time?: string;
    status: string;
    text: string;
};
type UserDetailsData = {
    email?: string;
    city: string;
    pincode: string;
    address: string;
    name: string;
    country: string;
    state: string;
    phone: string;
};
type DPDetailsData = {
    track_url?: string;
    pincode?: string;
    eway_bill_id?: string;
    id?: number;
    name?: string;
    country?: string;
    awb_no?: string;
    gst_tag?: string;
};
type FulfillingStore = {
    contact_person: string;
    code: string;
    store_name: string;
    city: string;
    address: string;
    pincode: string;
    id: number;
    fulfillment_channel: string;
    country: string;
    state: string;
    meta: any;
    phone: string;
};
type OrderingStoreDetails = {
    contact_person: string;
    code: string;
    store_name: string;
    city: string;
    address: string;
    pincode: string;
    ordering_store_id: number;
    country: string;
    state: string;
    meta: any;
    phone: string;
};
type CompanyDetails = {
    company_id?: number;
    company_cin?: string;
    manufacturer_address?: any;
    company_name?: string;
};
type BagStateMapper = {
    app_facing?: boolean;
    display_name: string;
    app_display_name?: string;
    notify_customer?: boolean;
    name: string;
    app_state_name?: string;
    state_type: string;
    journey_type: string;
    is_active?: boolean;
    bs_id: number;
};
type BagStatusHistory = {
    created_at?: string;
    updated_at?: string;
    bag_id?: number;
    display_name?: string;
    bag_state_mapper?: BagStateMapper;
    bsh_id?: number;
    kafka_sync?: boolean;
    delivery_awb_number?: string;
    delivery_partner_id?: number;
    state_id?: number;
    state_type?: string;
    reasons?: any[];
    shipment_id?: string;
    app_display_name?: string;
    forward?: boolean;
    status: string;
    store_id?: number;
};
type ShipmentPayments = {
    logo?: string;
    source?: string;
    mode?: string;
};
type Dimensions = {
    height?: number;
    is_default?: boolean;
    length?: number;
    unit?: string;
    width?: number;
};
type Meta = {
    dimension?: Dimensions;
};
type PDFLinks = {
    invoice_pos?: string;
    invoice?: string;
    po_invoice?: string;
    label_a6?: string;
    label_type: string;
    delivery_challan_a4?: string;
    invoice_type: string;
    label_pos?: string;
    label?: string;
    invoice_a4?: string;
    b2b?: string;
    label_a4?: string;
    invoice_a6?: string;
    credit_note_url?: string;
};
type AffiliateMeta = {
    quantity?: number;
    due_date?: string;
    is_priority?: boolean;
    channel_shipment_id?: string;
    loyalty_discount?: number;
    employee_discount?: number;
    coupon_code?: string;
    order_item_id?: string;
    channel_order_id?: string;
    size_level_total_qty?: number;
    box_type?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type BuyerDetails = {
    ajio_site_id?: string;
    city: string;
    pincode: number;
    address: string;
    gstin: string;
    name: string;
    state: string;
};
type EinvoiceInfo = {
    invoice?: any;
    credit_note?: any;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentMeta = {
    formatted?: Formatted;
    b2c_buyer_details?: any;
    dp_name?: string;
    assign_dp_from_sb?: boolean;
    b2b_buyer_details?: BuyerDetails;
    bag_weight?: any;
    return_affiliate_shipment_id?: string;
    return_awb_number?: string;
    return_details?: any;
    forward_affiliate_order_id?: string;
    dp_options?: any;
    packaging_name?: string;
    fulfilment_priority_text?: string;
    forward_affiliate_shipment_id?: string;
    shipment_volumetric_weight?: number;
    dp_sort_key?: string;
    external?: any;
    auto_trigger_dp_assignment_acf: boolean;
    store_invoice_updated_date?: string;
    return_store_node?: number;
    order_type?: string;
    dp_id?: string;
    weight: number;
    po_number?: string;
    einvoice_info?: EinvoiceInfo;
    same_store_available: boolean;
    return_affiliate_order_id?: string;
    ewaybill_info?: any;
    timestamp?: ShipmentTimeStamp;
    lock_data?: LockData;
    debug_info?: DebugInfo;
    box_type?: string;
    due_date?: string;
    awb_number?: string;
    marketplace_store_id?: string;
    shipment_weight?: number;
};
type AffiliateDetails = {
    affiliate_bag_id: string;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    affiliate_shipment_id: string;
    affiliate_order_id: string;
    pdf_links?: PDFLinks;
    ad_id?: string;
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
    shipment_meta: ShipmentMeta;
};
type ShipmentStatusData = {
    created_at?: string;
    id?: number;
    shipment_id?: string;
    bag_list?: string[];
    status?: string;
};
type CurrentStatus = {
    created_at?: string;
    updated_at?: string;
    bag_id?: number;
    current_status_id: number;
    bag_state_mapper?: BagStateMapper;
    kafka_sync?: boolean;
    delivery_awb_number?: string;
    delivery_partner_id?: number;
    state_id?: number;
    state_type?: string;
    shipment_id?: string;
    status?: string;
    store_id?: number;
};
type PlatformDeliveryAddress = {
    email?: string;
    created_at?: string;
    landmark?: string;
    updated_at?: string;
    city?: string;
    pincode?: string;
    contact_person?: string;
    address1?: string;
    address2?: string;
    country?: string;
    longitude?: number;
    address_type?: string;
    state?: string;
    area?: string;
    version?: string;
    address_category?: string;
    latitude?: number;
    phone?: string;
};
type BagConfigs = {
    is_customer_return_allowed: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
    is_active: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    price_marked: number;
    item_name: string;
    brand_calculated_amount: number;
    coupon_effective_discount: number;
    promotion_effective_discount: number;
    gst_fee: number;
    transfer_price: number;
    price_effective: number;
    fynd_credits: number;
    identifiers: Identifier;
    cod_charges: number;
    added_to_fynd_cash: boolean;
    value_of_good: number;
    amount_paid: number;
    gst_tag: string;
    coupon_value: number;
    cashback_applied: number;
    tax_collected_at_source?: number;
    refund_credit: number;
    hsn_code: string;
    delivery_charge: number;
    amount_paid_roundoff?: number;
    size: string;
    gst_tax_percentage: number;
    cashback: number;
    total_units: number;
    discount: number;
};
type OrderBrandName = {
    logo: string;
    created_on: string;
    id: number;
    brand_name: string;
    company: string;
    modified_on?: string;
};
type BagGST = {
    gst_tax_percentage?: number;
    brand_calculated_amount?: number;
    gst_fee?: number;
    hsn_code?: string;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    value_of_good?: number;
    gst_tag?: string;
};
type OrderBagArticle = {
    uid?: string;
    return_config?: any;
    identifiers?: any;
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
    promotion_name?: string;
    discount_rules?: DiscountRules[];
    promotion_type?: string;
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
    promo_id?: string;
    amount?: number;
    article_quantity?: number;
};
type OrderBags = {
    prices?: Prices;
    line_number?: number;
    seller_identifier?: string;
    quantity?: number;
    display_name?: string;
    current_status?: CurrentStatus;
    delivery_address?: PlatformDeliveryAddress;
    bag_configs?: BagConfigs;
    parent_promo_bags?: any;
    entity_type?: string;
    identifier?: string;
    can_cancel?: boolean;
    can_return?: boolean;
    bag_id: number;
    item?: PlatformItem;
    financial_breakup?: FinancialBreakup;
    brand?: OrderBrandName;
    gst_details?: BagGST;
    article?: OrderBagArticle;
    applied_promos?: AppliedPromos[];
};
type PlatformShipment = {
    invoice?: InvoiceInfo;
    custom_meta?: any[];
    payment_methods?: any;
    order?: OrderDetailsData;
    lock_status?: boolean;
    tracking_list?: TrackingList[];
    prices?: Prices;
    total_bags?: number;
    shipment_id: string;
    delivery_details?: UserDetailsData;
    payment_mode?: string;
    dp_details?: DPDetailsData;
    fulfilling_store?: FulfillingStore;
    operational_status?: string;
    ordering_store?: OrderingStoreDetails;
    company_details?: CompanyDetails;
    priority_text?: string;
    packaging_type?: string;
    platform_logo?: string;
    coupon?: any;
    shipment_quantity?: number;
    bag_status_history?: BagStatusHistory[];
    payments?: ShipmentPayments;
    total_items?: number;
    forward_shipment_id?: string;
    vertical?: string;
    enable_dp_tracking?: boolean;
    journey_type?: string;
    user_agent?: string;
    meta?: Meta;
    user?: UserDataInfo;
    affiliate_details?: AffiliateDetails;
    delivery_slot?: any;
    gst_details?: GSTDetailsData;
    shipment_status?: string;
    shipment_images?: string[];
    status?: ShipmentStatusData;
    bags?: OrderBags[];
    fulfilment_priority?: number;
    picked_date?: string;
    invoice_id?: string;
    billing_details?: UserDetailsData;
};
type ShipmentInfoResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    message?: string;
};
type TaxDetails = {
    pan_no?: string;
    gstin?: string;
};
type TransactionData = {
    entity?: string;
    terminal_id?: string;
    transaction_id?: string;
    currency?: string;
    status?: string;
    unique_reference_number?: string;
    amount_paid?: string;
    payment_id?: string;
};
type BillingStaffDetails = {
    user?: string;
    last_name?: string;
    staff_id?: number;
    first_name?: string;
};
type PlatformUserDetails = {
    platform_user_first_name?: string;
    platform_user_id?: string;
    platform_user_last_name?: string;
};
type OrderMeta = {
    transaction_data?: TransactionData;
    cart_id?: number;
    billing_staff_details?: BillingStaffDetails;
    comment?: string;
    order_tags?: any[];
    ordering_store?: number;
    staff?: any;
    mongo_cart_id?: number;
    company_logo?: string;
    order_type?: string;
    customer_note?: string;
    currency_symbol?: string;
    employee_id?: number;
    payment_type?: string;
    platform_user_details?: PlatformUserDetails;
    files?: any[];
    order_platform?: string;
    extra_meta?: any;
    order_child_entities?: string[];
};
type OrderDict = {
    payment_methods?: any;
    fynd_order_id: string;
    prices?: Prices;
    tax_details?: TaxDetails;
    order_date: string;
    meta?: OrderMeta;
};
type ShipmentDetailsResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    order?: OrderDict;
};
type SubLane = {
    actions?: any[];
    index?: number;
    total_items?: number;
    text?: string;
    value?: string;
};
type SuperLane = {
    text: string;
    total_items?: number;
    value: string;
    options?: SubLane[];
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
    order_value?: number;
    total_order_value?: number;
    user_info?: UserDataInfo;
    order_created_time?: string;
    breakup_values?: PlatformBreakupValues[];
    payment_mode?: string;
    meta?: any;
    shipments?: PlatformShipment[];
    order_id?: string;
    channel?: PlatformChannel;
};
type OrderListingResponse = {
    success?: boolean;
    items?: PlatformOrderItems[];
    message?: string;
    lane?: string;
    page?: Page;
    total_count?: number;
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
    updated_at?: string;
    awb?: string;
    raw_status?: string;
    updated_time?: string;
    last_location_recieved_at?: string;
    account_name?: string;
    status?: string;
    meta?: any;
    shipment_type?: string;
    reason?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type FiltersResponse = {
    advance?: any[];
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    report_created_at?: string;
    report_type?: string;
    s3_key?: string;
    report_requested_at?: string;
    request_details?: any;
    display_name?: string;
    report_name?: string;
    report_id?: string;
    status?: string;
};
type JioCodeUpsertDataSet = {
    item_id?: string;
    article_id?: string;
    jio_code?: string;
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
    success?: boolean;
    data?: any[];
    identifier?: string;
    trace_id?: string;
    error?: NestedErrorSchemaDataSet[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    invoice?: any;
    store_name?: string;
    company_id?: string;
    store_code?: string;
    invoice_status?: string;
    do_invoice_label_generated: boolean;
    data?: any;
    batch_id: string;
    label?: any;
    store_id?: string;
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
    namespace?: string;
    file_name?: string;
    tags?: string[];
    content_type?: string;
    file_path?: string;
    method?: string;
    size?: number;
    cdn?: URL;
    operation?: string;
};
type BulkListingPage = {
    has_next?: boolean;
    type?: string;
    size?: number;
    has_previous?: boolean;
    current?: number;
    total?: number;
};
type bulkListingData = {
    store_name?: string;
    store_code?: string;
    user_name?: string;
    batch_id?: string;
    failed?: number;
    failed_shipments?: any[];
    excel_url?: string;
    company_id?: number;
    user_id?: string;
    file_name?: string;
    total?: number;
    store_id?: number;
    successful?: number;
    successful_shipments?: any[];
    processing_shipments?: string[];
    processing?: number;
    id?: string;
    uploaded_on?: string;
    status?: string;
};
type BulkListingResponse = {
    success?: boolean;
    page?: BulkListingPage;
    data?: bulkListingData[];
    error?: string;
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    display_name?: string;
    qc_type?: string[];
    id?: number;
    question_set?: QuestionSet[];
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
    successful_shipment_ids?: string[];
    successful_shipments_count?: number;
    company_id?: string;
    total_shipments_count?: number;
    processing_shipments_count?: number;
    batch_id?: string;
    failed_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    message?: string;
    success?: string;
    uploaded_by?: string;
    data?: BulkActionDetailsDataField[];
    user_id?: string;
    uploaded_on?: string;
    failed_records?: string[];
    error?: string[];
    status?: boolean;
};
type ArticleDetails = {
    status?: any;
};
type AffiliateBagDetails = {
    affiliate_bag_id: string;
    loyalty_discount?: number;
    affiliate_order_id: string;
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type StoreAddress = {
    latitude: number;
    created_at: string;
    contact_person: string;
    email?: string;
    pincode: number;
    address_type: string;
    state: string;
    version?: string;
    landmark?: string;
    updated_at: string;
    address2?: string;
    country_code: string;
    address_category: string;
    city: string;
    address1: string;
    country: string;
    longitude: number;
    area?: string;
    phone: string;
};
type EInvoicePortalDetails = {
    username?: string;
    user?: string;
    password?: string;
};
type StoreEinvoice = {
    username?: string;
    password?: string;
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
type Document = {
    ds_type: string;
    legal_name: string;
    url?: string;
    verified: boolean;
    value: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    display_name: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    additional_contact_details?: any;
    stage: string;
    gst_credentials: StoreGstCredentials;
    ewaybill_portal_details?: any;
    timing?: any[];
    gst_number?: string;
    notification_emails?: string[];
    documents?: StoreDocuments;
    product_return_config?: any;
};
type Store = {
    store_active_from?: string;
    store_address_json?: StoreAddress;
    brand_store_tags?: string[];
    name: string;
    is_enabled_for_recon?: boolean;
    mall_name?: string;
    is_active?: boolean;
    location_type: string;
    packaging_material_count?: number;
    latitude: number;
    store_email: string;
    created_at: string;
    contact_person: string;
    pincode: string;
    company_id: number;
    fulfillment_channel: string;
    vat_no?: string;
    login_username: string;
    state: string;
    s_id: string;
    updated_at?: string;
    alohomora_user_id?: number;
    brand_id?: any;
    address2?: string;
    meta: StoreMeta;
    order_integration_id?: string;
    code?: string;
    city: string;
    mall_area?: string;
    address1: string;
    country: string;
    is_archived?: boolean;
    longitude: number;
    parent_store_id?: number;
    phone: number;
};
type B2BPODetails = {
    docker_number?: string;
    item_base_price?: number;
    partial_can_ret?: boolean;
    po_tax_amount?: number;
    po_line_amount?: number;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Attributes = {
    marketer_name?: string;
    primary_color?: string;
    primary_color_hex?: string;
    primary_material?: string;
    marketer_address?: string;
    brand_name?: string;
    name?: string;
    gender?: string[];
    essential?: string;
};
type Item = {
    branch_url?: string;
    l2_category?: string[];
    color?: string;
    slug_key: string;
    name: string;
    last_updated_at?: string;
    l3_category?: number;
    webstore_product_url?: string;
    brand_id: number;
    l3_category_name?: string;
    can_cancel?: boolean;
    can_return?: boolean;
    size: string;
    meta?: any;
    attributes: Attributes;
    image: string[];
    code?: string;
    l1_category?: string[];
    brand: string;
    l1_category_id?: number;
    item_id: number;
    l2_category_id?: number;
    department_id?: number;
    gender?: string;
};
type Brand = {
    script_last_ran?: string;
    start_date?: string;
    created_on?: number;
    logo?: string;
    brand_id: number;
    brand_name: string;
    credit_note_allowed?: boolean;
    credit_note_expiry_days?: number;
    pickup_location?: string;
    invoice_prefix?: string;
    company: string;
    is_virtual_invoice?: boolean;
    modified_on?: number;
};
type Weight = {
    unit?: string;
    is_default?: boolean;
    shipping?: number;
};
type ReturnConfig = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Article = {
    uid: string;
    weight?: Weight;
    code?: string;
    is_set?: boolean;
    dimensions?: Dimensions;
    raw_meta?: any;
    a_set?: any;
    child_details?: any;
    seller_identifier: string;
    _id: string;
    identifiers: Identifier;
    size: string;
    return_config?: ReturnConfig;
    esp_modified?: any;
};
type BagGSTDetails = {
    hsn_code_id: string;
    gst_tax_percentage: number;
    cgst_gst_fee: string;
    sgst_tax_percentage: number;
    sgst_gst_fee: string;
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    igst_gst_fee: string;
    gst_fee: number;
    hsn_code: string;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    value_of_good: number;
    igst_tax_percentage: number;
    cgst_tax_percentage: number;
    gst_tag: string;
};
type BagReturnableCancelableStatus = {
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    is_active: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
};
type BagDetailsPlatformResponse = {
    article_details?: ArticleDetails;
    original_bag_list?: number[];
    affiliate_bag_details: AffiliateBagDetails;
    dates?: Dates;
    bag_status: BagStatusHistory[];
    prices: Prices;
    reasons?: any[];
    line_number?: number;
    seller_identifier?: string;
    shipment_id?: string;
    current_operational_status: BagStatusHistory;
    tags?: string[];
    quantity?: number;
    b_type?: string;
    b_id: number;
    operational_status?: string;
    display_name?: string;
    current_status: BagStatusHistory;
    ordering_store?: Store;
    parent_promo_bags?: any;
    bag_status_history?: BagStatusHistory;
    no_of_bags_order?: number;
    entity_type?: string;
    restore_coupon?: boolean;
    bag_update_time?: number;
    identifier?: string;
    journey_type: string;
    qc_required?: any;
    meta?: BagMeta;
    order_integration_id?: string;
    restore_promos?: any;
    affiliate_details?: AffiliateDetails;
    item: Item;
    brand: Brand;
    article: Article;
    financial_breakup: FinancialBreakup[];
    gst_details: BagGSTDetails;
    applied_promos?: any[];
    status: BagReturnableCancelableStatus;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    has_next: boolean;
    page_type: string;
    item_total: number;
    size: number;
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
    message?: string;
    status?: number;
    shipment_id?: string;
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
    store_id: number;
    item_id?: string;
    affiliate_id?: string;
    mongo_article_id?: string;
    bag_id?: number;
    reason_ids?: number[];
    affiliate_order_id?: string;
    fynd_order_id?: string;
    set_id?: string;
    affiliate_bag_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    reason_text: string;
    affiliate_id?: string;
    affiliate_order_id?: string;
    id?: string;
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    action_type: string;
    entity_type: string;
    entities: Entities[];
};
type Bags = {
    bag_id?: number;
    is_locked?: boolean;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    is_shipment_locked?: boolean;
    shipment_id?: string;
    is_bag_locked?: boolean;
    affiliate_id?: string;
    lock_status?: boolean;
    status?: string;
    bags?: Bags[];
    affiliate_shipment_id?: string;
    original_filter?: OriginalFilter;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    message?: string;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    from_datetime?: string;
    title?: string;
    created_at?: string;
    platform_name?: string;
    id: number;
    to_datetime?: string;
    logo_url?: string;
    company_id?: number;
    platform_id?: string;
    description?: string;
};
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
};
type BaseResponse = {
    success: boolean;
    message: string;
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
    identifier?: string;
    line_number?: number;
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
    reason_text?: string;
    reason_id?: number;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
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
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type Products = {
    quantity?: number;
    identifier?: string;
    line_number?: number;
};
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    identifier: string;
    reasons?: ReasonsData;
    products?: Products[];
};
type StatuesRequest = {
    status?: string;
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    statuses?: StatuesRequest[];
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    task?: boolean;
    force_transition?: boolean;
};
type ShipmentsResponse = {
    exception?: string;
    stack_trace?: string;
    code?: string;
    status?: number;
    final_state?: any;
    meta?: any;
    message?: string;
    identifier?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    city: string;
    last_name: string;
    state: string;
    email: string;
    mobile: number;
    pincode: string;
    country: string;
    address2?: string;
    address1?: string;
    phone: number;
    first_name: string;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type ArticleDetails1 = {
    brand_id: number;
    weight: any;
    category: any;
    quantity: number;
    attributes: any;
    _id: string;
    dimension: any;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_type: string;
    fulfillment_id: number;
};
type ShipmentDetails = {
    box_type?: string;
    shipments: number;
    dp_id?: number;
    meta?: any;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    fulfillment_id: number;
};
type ShipmentConfig = {
    journey: string;
    source: string;
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
    action: string;
    to_pincode: string;
    identifier: string;
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
    fynd_store_id: string;
    item_id: number;
    delivery_charge: number;
    affiliate_store_id: string;
    pdf_links?: MarketPlacePdf;
    discount: number;
    modified_on: string;
    quantity: number;
    affiliate_meta: any;
    _id: string;
    avl_qty: number;
    company_id: number;
    price_marked: number;
    item_size: string;
    store_id: number;
    seller_identifier: string;
    hsn_code_id: string;
    sku: string;
    transfer_price: number;
    price_effective: number;
    amount_paid: number;
    unit_price: number;
    identifier: any;
};
type OrderInfo = {
    discount: number;
    shipping_address: OrderUser;
    coupon?: string;
    delivery_charges: number;
    payment?: any;
    billing_address: OrderUser;
    order_priority?: OrderPriority;
    cod_charges: number;
    user: UserData;
    items: any;
    shipment?: ShipmentData;
    affiliate_order_id?: string;
    bags: AffiliateBag[];
    order_value: number;
    payment_mode: string;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
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
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryConfig = {
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    owner: string;
    created_at: string;
    secret: string;
    updated_at: string;
    meta?: AffiliateAppConfigMeta[];
    token: string;
    id: string;
    name: string;
    description?: string;
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
type OrderConfig = {
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
    create_user?: boolean;
    store_lookup?: string;
    bag_end_state?: string;
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
    display_text: string;
    description: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l3_detail?: string;
    ticket_id?: string;
    l2_detail?: string;
    user: string;
    ticket_url?: string;
    bag_id?: number;
    createdat: string;
    message: string;
    l1_detail?: string;
    type: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
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
type SmsDataPayload = {
    phone_number: number;
    shipment_id: number;
    customer_name: string;
    brand_name: string;
    country_code: string;
    amount_paid: number;
    order_id: string;
    message: string;
    payment_mode: string;
};
type SendSmsPayload = {
    bag_id: number;
    data?: SmsDataPayload;
    slug: string;
};
type Meta1 = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    remarks?: string;
    shipment_id?: string;
    status?: string;
    meta: Meta1;
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
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    qc_required: string;
    dp_id: number;
    shipment_ids?: string[];
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type ProcessingDates = {
    confirm_by_date?: string;
    dp_pickup_slot?: any;
    pack_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_by_date?: string;
    dispatch_after_date?: string;
};
type Tax = {
    rate: number;
    name: string;
    breakup?: any[];
    amount: any;
};
type Charge = {
    amount: any;
    code?: string;
    tax?: Tax;
    name: string;
    type: string;
};
type LineItem = {
    external_line_id?: string;
    seller_identifier: string;
    custom_messasge?: string;
    quantity?: number;
    meta?: any;
    charges?: Charge[];
};
type Shipment = {
    processing_dates?: ProcessingDates;
    location_id: number;
    line_items: LineItem[];
    external_shipment_id?: string;
    meta?: any;
    priority?: number;
};
type BillingInfo = {
    primary_mobile_number: string;
    title?: string;
    country: string;
    city: string;
    alternate_mobile_number?: string;
    address2?: string;
    primary_email: string;
    alternate_email?: string;
    first_name: string;
    customer_code?: string;
    last_name?: string;
    state_code?: string;
    gender?: string;
    country_code?: string;
    address1: string;
    floor_no?: string;
    middle_name?: string;
    house_no?: string;
    state: string;
    pincode: string;
    external_customer_code?: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type PaymentMethod = {
    amount: number;
    collect_by: string;
    transaction_data?: any;
    meta?: any;
    mode: string;
    name: string;
    refund_by: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type ShippingInfo = {
    primary_mobile_number: string;
    title?: string;
    country: string;
    city: string;
    address_type?: string;
    alternate_mobile_number?: string;
    slot?: any[];
    address2?: string;
    primary_email: string;
    alternate_email?: string;
    first_name: string;
    customer_code?: string;
    last_name?: string;
    state_code?: string;
    gender?: string;
    country_code?: string;
    address1: string;
    floor_no?: string;
    landmark?: string;
    middle_name?: string;
    house_no?: string;
    state: string;
    geo_location?: any;
    shipping_type?: string;
    pincode: string;
    external_customer_code?: string;
};
type CreateOrderAPI = {
    external_order_id?: string;
    shipments: Shipment[];
    billing_info: BillingInfo;
    tax_info?: TaxInfo;
    payment_info: PaymentInfo;
    currency_info?: any;
    meta?: any;
    external_creation_date?: string;
    shipping_info: ShippingInfo;
    charges?: Charge[];
};
type CreateOrderErrorReponse = {
    exception?: string;
    stack_trace?: string;
    info?: any;
    code?: string;
    status: number;
    meta?: string;
    request_id?: string;
    message: string;
};
type PaymentMethods = {
    refund_by?: string;
    collect_by?: string;
    mode?: string;
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
    shipment_assignment?: string;
    location_reassignment?: boolean;
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
    dp_configuration?: DpConfiguration;
    logo_url?: any;
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
    start_date: string;
    end_date: string;
    mobile: number;
};
type GetSearchWordsData = {
    words?: string[];
    app_id?: string;
    is_active?: boolean;
    _custom_json?: any;
    uid?: string;
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
    words?: string[];
    app_id?: string;
    is_active?: boolean;
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
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    uid?: string;
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type Media = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type AutocompletePageAction = {
    query?: any;
    type?: string;
    url?: string;
    params?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type AutocompleteResult = {
    logo?: Media;
    _custom_json?: any;
    display?: string;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    words?: string[];
    app_id?: string;
    is_active?: boolean;
    _custom_json?: any;
    results?: AutocompleteResult[];
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    _custom_json?: any;
    words?: string[];
    app_id?: string;
};
type ProductBundleItem = {
    auto_select?: boolean;
    min_quantity: number;
    max_quantity: number;
    auto_add_to_cart?: boolean;
    product_uid: number;
    allow_remove?: boolean;
};
type GetProductBundleCreateResponse = {
    id?: string;
    same_store_assignment?: boolean;
    page_visibility?: string[];
    name: string;
    slug: string;
    meta?: any;
    logo?: string;
    created_on?: string;
    choice: string;
    is_active: boolean;
    modified_by?: any;
    created_by?: any;
    modified_on?: string;
    products: ProductBundleItem[];
    company_id?: number;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    same_store_assignment?: boolean;
    page_visibility?: string[];
    name: string;
    slug: string;
    meta?: any;
    logo?: string;
    created_on?: string;
    choice: string;
    is_active: boolean;
    modified_by?: any;
    created_by?: any;
    modified_on?: string;
    products: ProductBundleItem[];
    company_id?: number;
};
type Price = {
    max_marked?: number;
    min_marked?: number;
    max_effective?: number;
    currency?: string;
    min_effective?: number;
};
type Size = {
    is_available?: boolean;
    display?: string;
    quantity?: number;
    value?: string;
};
type LimitedProductData = {
    price?: any;
    quantity?: number;
    slug?: string;
    identifier?: any;
    name?: string;
    attributes?: any;
    images?: string[];
    sizes?: string[];
    uid?: number;
    short_description?: string;
    item_code?: string;
    country_of_origin?: string;
};
type GetProducts = {
    price?: Price;
    auto_select?: boolean;
    sizes?: Size[];
    min_quantity?: number;
    max_quantity?: number;
    auto_add_to_cart?: boolean;
    product_uid?: number;
    allow_remove?: boolean;
    product_details?: LimitedProductData;
};
type GetProductBundleResponse = {
    same_store_assignment?: boolean;
    page_visibility?: string[];
    name?: string;
    slug?: string;
    meta?: any;
    logo?: string;
    choice?: string;
    is_active?: boolean;
    products?: GetProducts[];
    company_id?: number;
};
type ProductBundleUpdateRequest = {
    same_store_assignment?: boolean;
    page_visibility?: string[];
    name: string;
    slug: string;
    meta?: any;
    logo?: string;
    choice: string;
    is_active: boolean;
    modified_by?: any;
    modified_on?: string;
    products: ProductBundleItem[];
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
    company_id?: number;
    id?: string;
    subtitle?: string;
    name: string;
    created_on?: string;
    title: string;
    created_by?: any;
    modified_by?: any;
    active?: boolean;
    tag?: string;
    brand_id?: number;
    modified_on?: string;
    image?: string;
    description?: string;
    guide?: Guide;
};
type SizeGuideResponse = {
    id?: string;
    subtitle?: string;
    name?: string;
    created_on?: string;
    title?: string;
    created_by?: any;
    modified_by?: any;
    active?: boolean;
    tag?: string;
    brand_id?: number;
    modified_on?: string;
    company_id?: number;
    guide?: any;
};
type ApplicationItemMOQ = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type ApplicationItemMeta = {
    moq?: ApplicationItemMOQ;
    is_gift?: boolean;
    is_cod?: boolean;
    alt_text?: any;
    _custom_json?: any;
    _custom_meta?: MetaFields[];
    seo?: ApplicationItemSEO;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type MOQData = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type SEOData = {
    title?: any;
    description?: any;
};
type OwnerAppItemResponse = {
    moq?: MOQData;
    is_gift?: boolean;
    is_cod?: boolean;
    alt_text?: any;
    seo?: SEOData;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    values?: any[];
    data: any[];
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
    slug?: string;
    name: string;
    logo?: string;
    key?: string;
    is_active: boolean;
    unit?: string;
    display_type: string;
    priority: number;
};
type AppConfigurationDetail = {
    is_default: boolean;
    name?: string;
    slug: string;
    logo?: string;
    app_id: string;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    priority: number;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_default: boolean;
    name?: string;
    logo?: string;
    app_id: string;
    is_active: boolean;
    key: string;
    default_key: string;
    priority: number;
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
    filter_types?: string[];
    units?: any[];
    display?: string;
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
    compare?: any;
    variant?: any;
    similar?: any;
    detail?: any;
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
    key: string;
    is_active: boolean;
    display_type: string;
    size: ProductSize;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    subtitle?: string;
    logo?: string;
    title?: string;
    key: string;
    is_active: boolean;
    size?: ProductSize;
    priority: number;
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
    logo?: string;
    key: string;
    is_active: boolean;
    priority: number;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    map_values?: any[];
    condition?: string;
    value?: string;
    map?: any;
    bucket_points?: ConfigurationBucketPoints[];
};
type ConfigurationListingFilterConfig = {
    name?: string;
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    key: string;
    is_active: boolean;
    type: string;
    display_name?: string;
    priority: number;
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
    id?: string;
    product?: ConfigurationProduct;
    created_on?: string;
    app_id: string;
    created_by?: any;
    modified_by?: any;
    config_type: string;
    config_id?: string;
    modified_on?: string;
    listing?: ConfigurationListing;
    type?: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    product?: ConfigurationProduct;
    created_on?: string;
    app_id: string;
    created_by?: any;
    modified_by?: any;
    config_type: string;
    config_id?: string;
    modified_on?: string;
    listing?: ConfigurationListing;
    type?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    app_id: string;
    config_type: string;
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersValue = {
    max?: number;
    selected_min?: number;
    selected_max?: number;
    min?: number;
    display: string;
    value: any;
    currency_code?: string;
    count?: number;
    display_format?: string;
    currency_symbol?: string;
    query_format?: string;
    is_selected: boolean;
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
type ProductSortOn = {
    value?: string;
    name?: string;
    is_selected?: boolean;
};
type GetCollectionQueryOptionResponse = {
    operators: any;
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
};
type Media1 = {
    type?: string;
    url: string;
    meta?: any;
};
type BannerImage = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type GetCollectionDetailNest = {
    action?: Action;
    meta?: any;
    app_id?: string;
    tag?: string[];
    type?: string;
    visible_facets_keys?: string[];
    logo?: Media1;
    banners?: ImageUrls;
    badge?: any;
    slug?: string;
    query?: CollectionQuery[];
    _schedule?: any;
    description?: string;
    allow_sort?: boolean;
    allow_facets?: boolean;
    name?: string;
    is_active?: boolean;
    cron?: any;
    uid?: string;
    priority?: number;
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
    aspect_ratio: string;
    url: string;
};
type UserInfo = {
    username?: string;
    uid?: string;
    user_id?: string;
    email?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionSchedule = {
    start?: string;
    end?: string;
    cron?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CreateCollection = {
    meta?: any;
    app_id: string;
    published?: boolean;
    tags?: string[];
    type: string;
    visible_facets_keys?: string[];
    logo: CollectionImage;
    modified_by?: UserInfo;
    _custom_json?: any;
    banners: CollectionBanner;
    _locale_language?: any;
    badge?: CollectionBadge;
    slug: string;
    is_visible?: boolean;
    query?: CollectionQuery[];
    _schedule?: CollectionSchedule;
    description?: string;
    seo?: SeoDetail;
    allow_sort?: boolean;
    allow_facets?: boolean;
    name: string;
    sort_on?: string;
    created_by?: UserInfo;
    is_active?: boolean;
    priority?: number;
};
type CollectionCreateResponse = {
    meta?: any;
    app_id?: string;
    tag?: string[];
    type?: string;
    visible_facets_keys?: string[];
    logo?: BannerImage;
    banners?: ImageUrls;
    badge?: any;
    slug?: string;
    query?: CollectionQuery[];
    _schedule?: any;
    description?: string;
    allow_sort?: boolean;
    allow_facets?: boolean;
    name?: string;
    sort_on?: string;
    is_active?: boolean;
    cron?: any;
    priority?: number;
};
type CollectionDetailResponse = {
    meta?: any;
    app_id?: string;
    tag?: string[];
    type?: string;
    visible_facets_keys?: string[];
    logo?: Media1;
    banners?: ImageUrls;
    badge?: any;
    slug?: string;
    query?: CollectionQuery[];
    _schedule?: any;
    description?: string;
    allow_sort?: boolean;
    allow_facets?: boolean;
    name?: string;
    is_active?: boolean;
    cron?: any;
    uid?: string;
    priority?: number;
};
type UpdateCollection = {
    meta?: any;
    published?: boolean;
    tags?: string[];
    type?: string;
    visible_facets_keys?: string[];
    logo?: CollectionImage;
    modified_by?: UserInfo;
    _custom_json?: any;
    banners?: CollectionBanner;
    _locale_language?: any;
    badge?: CollectionBadge;
    slug?: string;
    is_visible?: boolean;
    _schedule?: CollectionSchedule;
    query?: CollectionQuery[];
    description?: string;
    seo?: SeoDetail;
    allow_sort?: boolean;
    allow_facets?: boolean;
    name?: string;
    sort_on?: string;
    is_active?: boolean;
    priority?: number;
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
type ProductBrand = {
    logo?: Media1;
    uid?: number;
    action?: Action;
    name?: string;
};
type Price1 = {
    max?: number;
    currency_symbol?: string;
    min?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    promo_meta?: any;
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    image_nature?: string;
    discount?: string;
    teaser_tag?: any;
    item_code?: string;
    type?: string;
    brand?: ProductBrand;
    price?: ProductListingPrice;
    sellable?: boolean;
    attributes?: any;
    has_variant?: boolean;
    item_type?: string;
    product_online_date?: string;
    slug: string;
    highlights?: string[];
    medias?: Media1[];
    short_description?: string;
    rating_count?: number;
    rating?: number;
    description?: string;
    name?: string;
    tryouts?: string[];
    uid?: number;
    similars?: string[];
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    page?: Page;
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    query?: CollectionQuery[];
    type?: string;
    item?: ItemQueryForUserCollection[];
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightBrand = {
    available_sizes?: number;
    name?: string;
    article_freshness?: number;
    total_sizes?: number;
    total_articles?: number;
    available_articles?: number;
};
type CatalogInsightItem = {
    count?: number;
    sellable_count?: number;
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
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    platform?: string;
    brand_ids?: number[];
    enabled?: boolean;
    store_ids?: number[];
    opt_level: string;
    company_id?: number;
};
type CompanyOptIn = {
    brand_ids: number[];
    platform: string;
    created_on: number;
    created_by?: any;
    enabled: boolean;
    modified_by?: any;
    modified_on: number;
    store_ids: number[];
    opt_level: string;
    company_id: number;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    business_type?: string;
    company_type?: string;
    name?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    brand_id?: number;
    total_article?: number;
    brand_name?: string;
    company_id?: number;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    store?: number;
    company?: string;
    brand?: number;
};
type StoreDetail = {
    address?: any;
    name?: string;
    created_on?: string;
    store_code?: string;
    additional_contacts?: any[];
    timing?: any;
    store_type?: string;
    modified_on?: string;
    uid?: number;
    documents?: any[];
    display_name?: string;
    company_id?: number;
    manager?: any;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
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
    indexing: boolean;
    priority?: number;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    allowed_values?: string[];
    range?: AttributeSchemaRange;
    multi?: boolean;
    format?: string;
    type: string;
    mandatory?: boolean;
};
type GenderDetail = {
    id?: string;
    enabled_for_end_consumer?: boolean;
    details?: AttributeMasterDetails;
    name?: string;
    meta?: AttributeMasterMeta;
    slug?: string;
    filters?: AttributeMasterFilter;
    logo?: string;
    schema?: AttributeMaster;
    departments?: string[];
    is_nested?: boolean;
    description?: string;
};
type CategoriesResponse = {
    name?: string;
    slug?: string;
    slug_key?: string;
    uid?: number;
    template_slug?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: CategoriesResponse[];
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
    username?: string;
    user_id?: string;
    _id?: string;
    uid?: string;
    contact?: string;
};
type GetDepartment = {
    slug?: string;
    name?: string;
    search?: string;
    logo?: string;
    created_on?: string;
    page_size?: number;
    created_by?: UserSerializer;
    is_active?: boolean;
    modified_by?: UserSerializer;
    modified_on?: string;
    priority_order?: number;
    uid?: number;
    synonyms?: string[];
    item_type?: string;
    page_no?: number;
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
    name: string;
    slug?: string;
    logo: string;
    is_active?: boolean;
    _cls?: string;
    _custom_json?: any;
    priority_order: number;
    uid?: number;
    synonyms?: string[];
    tags?: string[];
    platforms?: any;
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
    username: string;
    user_id: string;
    contact?: string;
};
type DepartmentModel = {
    slug?: any;
    created_on: string;
    name: any;
    verified_by?: UserDetail;
    logo: string;
    _id?: any;
    created_by?: UserDetail;
    modified_by?: UserDetail;
    is_active?: boolean;
    _cls?: any;
    _custom_json?: any;
    modified_on: string;
    priority_order: number;
    uid?: number;
    synonyms?: any[];
    verified_on?: string;
};
type ProductTemplate = {
    categories?: string[];
    name?: string;
    slug: string;
    created_on?: string;
    logo?: string;
    is_expirable: boolean;
    created_by?: any;
    is_active?: boolean;
    attributes?: string[];
    is_archived?: boolean;
    tag?: string;
    departments?: string[];
    is_physical: boolean;
    modified_by?: any;
    modified_on?: string;
    description?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    is_dependent?: any;
    custom_order?: any;
    size_guide?: any;
    tags?: any;
    teaser_tag?: any;
    item_code?: any;
    return_config?: any;
    currency?: any;
    brand_uid?: any;
    trader?: any;
    hsn_code?: any;
    sizes?: any;
    category_slug?: any;
    variants?: any;
    item_type?: any;
    no_of_boxes?: any;
    country_of_origin?: any;
    slug?: any;
    multi_size?: any;
    trader_type?: any;
    highlights?: any;
    media?: any;
    short_description?: any;
    description?: any;
    product_group_tag?: any;
    name?: any;
    is_active?: any;
    command?: any;
    product_publish?: any;
};
type GlobalValidation = {
    definitions?: any;
    title?: string;
    properties?: Properties;
    required?: string[];
    type?: string;
    description?: string;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    id?: string;
    categories?: string[];
    name?: string;
    slug: string;
    logo?: string;
    is_expirable: boolean;
    is_active?: boolean;
    attributes?: string[];
    is_archived?: boolean;
    tag?: string;
    departments?: string[];
    is_physical: boolean;
    description?: string;
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
    type?: string;
    brand?: string[];
    templates?: string[];
};
type ProductDownloadsItems = {
    id?: string;
    seller_id?: number;
    url?: string;
    trigger_on?: string;
    task_id?: string;
    created_by?: VerifiedBy;
    template_tags?: any;
    completed_on?: string;
    data?: ProductDownloadItemsData;
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
    logo: string;
    portrait: string;
    landscape: string;
};
type Hierarchy = {
    l1: number;
    department: number;
    l2: number;
};
type Category = {
    id?: string;
    marketplaces?: CategoryMapping;
    name: string;
    slug?: string;
    created_on?: string;
    tryouts?: string[];
    created_by?: any;
    is_active: boolean;
    modified_by?: any;
    media?: Media2;
    level: number;
    modified_on?: string;
    uid?: number;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    departments: number[];
    priority?: number;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    marketplaces?: CategoryMapping;
    name: string;
    slug?: string;
    tryouts?: string[];
    is_active: boolean;
    media?: Media2;
    level: number;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    departments: number[];
    priority?: number;
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
type ReturnConfigResponse = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Logo = {
    secure_url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Trader = {
    type?: string;
    address?: string[];
    name: any;
};
type Image = {
    secure_url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Product = {
    is_dependent?: boolean;
    custom_order?: any;
    size_guide?: string;
    color?: string;
    all_identifiers?: string[];
    image_nature?: string;
    modified_on?: string;
    tags?: string[];
    return_config?: ReturnConfigResponse;
    item_code?: string;
    l3_mapping?: string[];
    teaser_tag?: any;
    currency?: string;
    brand?: Brand;
    primary_color?: string;
    brand_uid?: number;
    is_expirable?: boolean;
    is_physical?: boolean;
    attributes?: any;
    net_quantity?: NetQuantityResponse;
    hsn_code?: string;
    _custom_json?: any;
    sizes?: any[];
    trader?: Trader[];
    variant_media?: any;
    modified_by?: any;
    category_slug?: string;
    variants?: any;
    item_type?: string;
    no_of_boxes?: number;
    all_sizes?: any[];
    country_of_origin?: string;
    pending?: string;
    slug?: string;
    template_tag?: string;
    multi_size?: boolean;
    highlights?: string[];
    media?: Media1[];
    is_image_less_product?: boolean;
    short_description?: string;
    is_set?: boolean;
    description?: string;
    company_id?: number;
    verified_on?: string;
    category_uid?: number;
    id?: string;
    all_company_ids?: number[];
    product_group_tag?: string[];
    category?: any;
    moq?: any;
    name?: string;
    created_on?: string;
    stage?: string;
    verified_by?: VerifiedBy;
    created_by?: any;
    is_active?: boolean;
    images?: Image[];
    product_publish?: ProductPublished;
    uid?: number;
    tax_identifier?: any;
    variant_group?: any;
    departments?: number[];
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type CustomOrder = {
    manufacturing_time?: number;
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code_id?: string;
    hsn_code?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductCreateUpdateSchemaV2 = {
    is_dependent?: boolean;
    action?: string;
    custom_order?: CustomOrder;
    size_guide?: string;
    tags?: string[];
    teaser_tag?: TeaserTag;
    item_code: string;
    return_config: ReturnConfig;
    currency: string;
    bulk_job_id?: string;
    brand_uid: number;
    attributes?: any;
    trader: Trader[];
    net_quantity?: NetQuantity;
    _custom_json?: any;
    sizes: any[];
    variant_media?: any;
    category_slug: string;
    variants?: any;
    item_type: string;
    no_of_boxes?: number;
    country_of_origin: string;
    slug: string;
    template_tag: string;
    multi_size?: boolean;
    highlights?: string[];
    media?: Media1[];
    is_image_less_product?: boolean;
    short_description?: string;
    is_set?: boolean;
    description?: string;
    company_id: number;
    change_request_id?: any;
    product_group_tag?: string[];
    name: string;
    requester?: string;
    is_active?: boolean;
    variant_group?: any;
    tax_identifier: TaxIdentifier;
    uid?: number;
    product_publish?: ProductPublish;
    departments: number[];
};
type ProductVariants = {
    category_uid?: number;
    brand_uid?: number;
    name?: string;
    media?: Media1[];
    uid?: number;
    item_code?: string;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    enabled_for_end_consumer?: boolean;
    variant?: boolean;
    modified_on?: string;
    tags?: string[];
    synonyms?: any;
    details: AttributeMasterDetails;
    raw_key?: string;
    filters: AttributeMasterFilter;
    logo?: string;
    modified_by?: any;
    is_nested?: boolean;
    slug: string;
    unit?: string;
    description?: string;
    name?: string;
    created_on?: string;
    schema: AttributeMaster;
    created_by?: any;
    suggestion?: string;
    departments: string[];
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
    item_height: number;
    item_dimensions_unit_of_measure: string;
    identifiers?: ValidateIdentifier[];
    item_weight_unit_of_measure: any;
    item_length: number;
    item_width: number;
    size: any;
    item_weight: number;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    username?: string;
    user_id?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    failed?: number;
    succeed?: number;
    stage?: string;
    total?: number;
    template_tag?: string;
    created_on?: string;
    failed_records?: string[];
    created_by?: UserDetail1;
    is_active?: boolean;
    file_path?: string;
    modified_by?: UserDetail1;
    modified_on?: string;
    cancelled_records?: string[];
    template?: ProductTemplate;
    cancelled?: number;
    company_id?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    username?: string;
    uid?: string;
    user_id?: string;
    email?: string;
};
type BulkJob = {
    failed?: number;
    succeed?: number;
    total?: number;
    stage?: string;
    created_on: string;
    template_tag?: string;
    failed_records?: any[];
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
    is_active?: boolean;
    file_path?: string;
    custom_template_tag?: string;
    tracking_url?: string;
    modified_on?: string;
    cancelled_records?: any[];
    cancelled?: number;
    company_id: number;
};
type BulkResponse = {
    batch_id: string;
    created_on: string;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
    is_active?: boolean;
    modified_on?: string;
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
type UserCommon = {
    username?: string;
    user_id?: string;
    company_id?: number;
};
type Items = {
    failed?: number;
    id?: string;
    succeed?: number;
    stage?: string;
    total?: number;
    created_on?: string;
    failed_records?: string[];
    retry?: number;
    file_path?: string;
    created_by?: UserCommon;
    modified_by?: UserCommon;
    is_active?: boolean;
    tracking_url?: string;
    modified_on?: string;
    cancelled_records?: string[];
    cancelled?: number;
    company_id?: number;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductBulkAssets = {
    company_id?: number;
    url: string;
    user: any;
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
    price?: number;
    quantity?: number;
    seller_identifier?: string;
    item_id?: number;
    identifiers?: any;
    store?: any;
    price_effective?: number;
    uid?: string;
    sellable_quantity?: number;
    currency?: string;
    size?: string;
    inventory_updated_on?: string;
    price_transfer?: number;
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
    quantity?: number;
    name?: string;
    size_distribution: SizeDistribution;
};
type InvSize = {
    price?: number;
    quantity: number;
    item_height?: number;
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    item_weight?: number;
    identifiers: GTIN[];
    item_weight_unit_of_measure?: string;
    currency: string;
    expiration_date?: string;
    price_effective: number;
    item_length?: number;
    set?: InventorySet;
    is_set?: boolean;
    item_width?: number;
    size: any;
    price_transfer?: number;
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
type WeightResponse = {
    is_default: boolean;
    unit: string;
    shipping: number;
};
type ManufacturerResponse = {
    is_default: boolean;
    address: string;
    name: string;
};
type ReturnConfig1 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type BrandMeta = {
    id: number;
    name: string;
};
type PriceMeta = {
    effective: number;
    marked: number;
    updated_at?: string;
    tp_notes?: any;
    currency: string;
    transfer: number;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type CompanyMeta = {
    id: number;
};
type DimensionResponse = {
    is_default: boolean;
    height: number;
    unit: string;
    length: number;
    width: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    sellable?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
    damaged?: QuantityBase;
};
type InventorySellerResponse = {
    weight: WeightResponse;
    manufacturer: ManufacturerResponse;
    meta?: any;
    added_on_store?: string;
    return_config?: ReturnConfig1;
    tags?: string[];
    brand: BrandMeta;
    fynd_meta?: any;
    raw_meta?: any;
    price: PriceMeta;
    fynd_article_code: string;
    fragile: boolean;
    trace_id?: string;
    total_quantity: number;
    item_id: number;
    modified_by?: UserSerializer;
    trader?: Trader1[];
    _custom_json?: any;
    company: CompanyMeta;
    expiration_date?: string;
    size: string;
    country_of_origin: string;
    identifier: any;
    dimension: DimensionResponse;
    is_set?: boolean;
    stage?: string;
    seller_identifier: string;
    created_by?: UserSerializer;
    is_active?: boolean;
    quantities?: Quantities;
    store: StoreMeta;
    fynd_item_code: string;
    track_inventory?: boolean;
    uid: string;
    set?: InventorySet;
    tax_identifier?: any;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    address?: string;
    name?: string;
};
type ReturnConfig2 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type PriceArticle = {
    effective?: number;
    marked?: number;
    tp_notes?: any;
    currency?: string;
    transfer?: number;
};
type Trader2 = {
    type?: string;
    address?: string[];
    name?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type DimensionResponse1 = {
    length?: number;
    height?: number;
    width?: number;
    unit?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    sellable?: Quantity;
    not_available?: Quantity;
    order_committed?: Quantity;
    damaged?: Quantity;
};
type ArticleStoreResponse = {
    store_code?: string;
    store_type?: string;
    uid?: number;
    name?: string;
};
type GetInventories = {
    weight?: WeightResponse1;
    manufacturer?: ManufacturerResponse1;
    return_config?: ReturnConfig2;
    tags?: string[];
    brand?: BrandMeta1;
    price?: PriceArticle;
    trace_id?: string;
    total_quantity?: number;
    item_id?: number;
    modified_by?: UserSerializer;
    trader?: Trader2[];
    company?: CompanyMeta1;
    expiration_date?: string;
    size?: string;
    country_of_origin?: string;
    identifier?: any;
    dimension?: DimensionResponse1;
    date_meta?: DateMeta;
    is_set?: boolean;
    inventory_updated_on?: string;
    platforms?: any;
    id?: string;
    stage?: string;
    seller_identifier?: string;
    created_by?: UserSerializer;
    quantities?: QuantitiesArticle;
    store?: ArticleStoreResponse;
    track_inventory?: boolean;
    tax_identifier?: any;
    uid?: string;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    failed?: number;
    id?: string;
    succeed?: number;
    stage?: string;
    total?: number;
    created_on?: string;
    failed_records?: string[];
    created_by?: any;
    file_path?: string;
    is_active?: boolean;
    modified_by?: any;
    modified_on?: string;
    cancelled_records?: string[];
    cancelled?: number;
    company_id?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    price?: number;
    quantity?: number;
    seller_identifier: string;
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    total_quantity?: number;
    trace_id?: string;
    item_weight_unit_of_measure?: string;
    expiration_date?: string;
    price_effective?: number;
    tags?: string[];
    currency?: string;
    price_marked?: number;
};
type InventoryBulkRequest = {
    batch_id: string;
    sizes: InventoryJobPayload[];
    company_id: number;
    user?: any;
};
type InventoryExportJob = {
    seller_id: number;
    url?: string;
    trigger_on?: string;
    completed_on?: string;
    task_id: string;
    request_params?: any;
    status?: string;
};
type InventoryExportRequest = {
    type?: string;
    brand?: number[];
    store?: number[];
};
type InventoryExportResponse = {
    seller_id: number;
    trigger_on?: string;
    task_id: string;
    request_params?: any;
    status?: string;
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
    seller_identifier: string;
    trace_id?: string;
    total_quantity?: number;
    store_id: number;
    expiration_date?: string;
    price_effective?: number;
    tags?: string[];
    price_marked?: number;
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
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    id?: string;
    tax_on_esp?: boolean;
    hs2_code?: string;
    threshold2?: number;
    threshold1?: number;
    tax_on_mrp?: boolean;
    hsn_code?: string;
    modified_on?: string;
    tax2?: number;
    tax1?: number;
    company_id?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    tax_on_esp?: boolean;
    hs2_code: string;
    threshold2?: number;
    threshold1: number;
    is_active?: boolean;
    tax_on_mrp: boolean;
    hsn_code: string;
    uid?: number;
    tax2?: number;
    tax1: number;
    company_id: number;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    cess?: number;
    threshold: number;
    rate: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    reporting_hsn: string;
    created_on?: string;
    country_code: string;
    hsn_code_id?: string;
    created_by?: any;
    modified_by?: any;
    hsn_code: string;
    modified_on?: string;
    taxes: TaxSlab[];
    type: string;
    description: string;
};
type PageResponse = {
    has_previous?: boolean;
    has_next?: boolean;
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
    slug?: string;
    logo?: Media;
    discount?: string;
    banners?: ImageUrls;
    uid?: number;
    departments?: string[];
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    slug?: string;
    name?: string;
    logo?: Media;
    priority_order?: number;
    uid?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    slug?: string;
    name?: string;
    action?: Action;
    childs?: any[];
    _custom_json?: any;
    banners?: ImageUrls;
    uid?: number;
};
type SecondLevelChild = {
    slug?: string;
    name?: string;
    action?: Action;
    childs?: ThirdLevelChild[];
    _custom_json?: any;
    banners?: ImageUrls;
    uid?: number;
};
type Child = {
    slug?: string;
    name?: string;
    action?: Action;
    childs?: SecondLevelChild[];
    _custom_json?: any;
    banners?: ImageUrls;
    uid?: number;
};
type CategoryItems = {
    action?: Action;
    slug?: string;
    name?: string;
    childs?: Child[];
    banners?: ImageUrls;
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
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    page: Page;
    operators?: any;
    items?: ProductListingDetail[];
};
type ProductDetail = {
    promo_meta?: any;
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    image_nature?: string;
    teaser_tag?: any;
    item_code?: string;
    type?: string;
    brand?: ProductBrand;
    attributes?: any;
    has_variant?: boolean;
    item_type?: string;
    product_online_date?: string;
    slug: string;
    highlights?: string[];
    medias?: Media1[];
    short_description?: string;
    rating_count?: number;
    rating?: number;
    description?: string;
    name?: string;
    tryouts?: string[];
    uid?: number;
    similars?: string[];
};
type InventoryPage = {
    has_previous?: boolean;
    has_next?: boolean;
    next_id?: string;
    type: string;
    item_total: number;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type ArticleQuery = {
    item_id: number;
    ignored_stores?: number[];
    size: string;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type AssignStoreArticle = {
    quantity?: number;
    meta?: any;
    query?: ArticleQuery;
    group_id?: string;
    article_assignment?: ArticleAssignment;
};
type AssignStore = {
    pincode: string;
    app_id: string;
    articles: AssignStoreArticle[];
    channel_type?: string;
    channel_identifier?: string;
    store_ids?: number[];
    company_id?: number;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    company_id?: number;
    quantity: number;
    meta?: any;
    article_assignment: ArticleAssignment1;
    item_id: number;
    _id?: string;
    store_id?: number;
    s_city?: string;
    strategy_wise_listing?: any[];
    index?: number;
    price_effective?: number;
    uid?: string;
    store_pincode?: number;
    group_id?: string;
    price_marked?: number;
    size: string;
    status: boolean;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetAddressSerializer = {
    landmark?: string;
    pincode?: number;
    country?: string;
    state?: string;
    longitude?: number;
    address2?: string;
    country_code?: string;
    city?: string;
    address1?: string;
    latitude?: number;
    address_type?: string;
};
type UserSerializer1 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type UserSerializer2 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetCompanySerializer = {
    stage?: string;
    addresses?: GetAddressSerializer[];
    name?: string;
    created_on?: string;
    company_type?: string;
    verified_by?: UserSerializer2;
    business_type?: string;
    created_by?: UserSerializer2;
    modified_by?: UserSerializer2;
    reject_reason?: string;
    modified_on?: string;
    uid?: number;
    verified_on?: string;
};
type InvoiceCredSerializer = {
    username?: string;
    password?: string;
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
    mobile_no: SellerPhoneNumber;
    name?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
};
type GetLocationSerializer = {
    store_type?: string;
    modified_on?: string;
    documents?: Document[];
    product_return_config?: ProductReturnConfigSerializer;
    address: GetAddressSerializer;
    modified_by?: UserSerializer1;
    integration_type?: LocationIntegrationType;
    _custom_json?: any;
    company?: GetCompanySerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    notification_emails?: string[];
    manager?: LocationManagerSerializer;
    timing?: LocationDayWiseSerializer[];
    phone_number: string;
    display_name: string;
    verified_on?: string;
    code: string;
    contact_numbers?: SellerPhoneNumber[];
    stage?: string;
    warnings?: any;
    name: string;
    created_on?: string;
    verified_by?: UserSerializer1;
    created_by?: UserSerializer1;
    uid?: number;
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
    logo?: string;
    app_id: string;
    is_active?: boolean;
    _custom_json?: any;
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
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
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
type GetCompanyProfileSerializerResponse = {
    business_info?: string;
    company_type: string;
    notification_emails?: string[];
    addresses?: GetAddressSerializer[];
    stage?: string;
    modified_by?: UserSerializer;
    verified_by?: UserSerializer;
    documents?: Document[];
    franchise_enabled?: boolean;
    modified_on?: string;
    verified_on?: string;
    business_type: string;
    mode?: string;
    uid: number;
    created_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    taxes?: CompanyTaxesSerializer[];
    name?: string;
    _custom_json?: any;
    created_on?: string;
    business_details?: BusinessDetails;
    warnings?: any;
    contact_details?: ContactDetails;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    country: string;
    city: string;
    state: string;
    country_code?: string;
    address1: string;
    longitude: number;
    address_type: string;
    latitude: number;
    landmark?: string;
    address2?: string;
    pincode: number;
};
type UpdateCompany = {
    franchise_enabled?: boolean;
    business_info?: string;
    taxes?: CompanyTaxesSerializer1[];
    name?: string;
    company_type?: string;
    notification_emails?: string[];
    addresses?: CreateUpdateAddressSerializer[];
    business_details?: BusinessDetails;
    _custom_json?: any;
    business_type?: string;
    warnings?: any;
    documents?: Document[];
    reject_reason?: string;
    contact_details?: ContactDetails;
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
    stage?: string;
    product?: DocumentsObj;
    brand?: DocumentsObj;
    company_documents?: DocumentsObj;
    uid?: number;
    store?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    stage?: string;
    slug_key?: string;
    _locale_language?: any;
    modified_by?: UserSerializer;
    description?: string;
    logo?: string;
    verified_by?: UserSerializer;
    reject_reason?: string;
    banner?: BrandBannerSerializer;
    modified_on?: string;
    verified_on?: string;
    mode?: string;
    uid?: number;
    created_by?: UserSerializer;
    name: string;
    _custom_json?: any;
    created_on?: string;
    synonyms?: string[];
    warnings?: any;
};
type CreateUpdateBrandRequestSerializer = {
    brand_tier?: string;
    _locale_language?: any;
    name: string;
    _custom_json?: any;
    banner?: BrandBannerSerializer;
    description?: string;
    company_id?: number;
    synonyms?: string[];
    logo: string;
    uid?: number;
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanySerializer = {
    market_channels?: string[];
    modified_by?: UserSerializer;
    name?: string;
    company_type: string;
    notification_emails?: string[];
    created_on?: string;
    addresses?: GetAddressSerializer[];
    _custom_json?: any;
    modified_on?: string;
    details?: CompanyDetails;
    verified_on?: string;
    stage?: string;
    business_type: string;
    verified_by?: UserSerializer;
    reject_reason?: string;
    uid?: number;
    created_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
};
type CompanyBrandSerializer = {
    modified_by?: UserSerializer;
    created_on?: string;
    modified_on?: string;
    company?: CompanySerializer;
    verified_on?: string;
    stage?: string;
    warnings?: any;
    verified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    reject_reason?: string;
    uid?: number;
    created_by?: UserSerializer;
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
    start_date: string;
    end_date: string;
};
type HolidaySchemaSerializer = {
    title: string;
    date: HolidayDateSerializer;
    holiday_type: string;
};
type AddressSerializer = {
    country?: string;
    city?: string;
    state?: string;
    country_code?: string;
    address_type?: string;
    address1?: string;
    longitude: number;
    latitude: number;
    landmark?: string;
    address2?: string;
    pincode?: number;
};
type LocationSerializer = {
    product_return_config?: ProductReturnConfigSerializer;
    contact_numbers?: SellerPhoneNumber[];
    name: string;
    notification_emails?: string[];
    _custom_json?: any;
    holiday?: HolidaySchemaSerializer[];
    manager?: LocationManagerSerializer;
    stage?: string;
    code: string;
    address: AddressSerializer;
    warnings?: any;
    display_name: string;
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSerializer;
    store_type?: string;
    uid?: number;
    company: number;
    timing?: LocationDayWiseSerializer[];
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
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: string[];
};
type RuleDefinition = {
    type: string;
    currency_code?: string;
    scope?: string[];
    calculate_on: string;
    is_exact?: boolean;
    auto_apply?: boolean;
    value_type: string;
    applicable_on: string;
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Validity = {
    priority?: number;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    codes?: string[];
    networks?: string[];
    types?: string[];
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type UsesRemaining = {
    total?: number;
    user?: number;
    app?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type Restrictions = {
    payments?: any;
    bulk_bundle?: BulkBundleRestriction;
    uses?: UsesRestriction;
    platforms?: string[];
    post_order?: PostOrder;
    coupon_allowed?: boolean;
    ordering_stores?: number[];
    user_groups?: number[];
    price_range?: PriceRange;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type CouponSchedule = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    next_schedule?: any[];
};
type Rule = {
    value?: number;
    key?: number;
    max?: number;
    min?: number;
    discount_qty?: number;
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
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    title?: string;
    description?: string;
    subtitle?: string;
};
type CouponAdd = {
    validation?: Validation;
    rule_definition: RuleDefinition;
    state?: State;
    tags?: string[];
    code: string;
    author?: CouponAuthor;
    validity: Validity;
    date_meta?: CouponDateMeta;
    restrictions?: Restrictions;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    rule: Rule[];
    ownership: Ownership;
    display_meta: DisplayMeta;
    type_slug: string;
    identifiers: Identifier;
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
    validation?: Validation;
    rule_definition: RuleDefinition;
    state?: State;
    tags?: string[];
    code: string;
    author?: CouponAuthor;
    validity: Validity;
    date_meta?: CouponDateMeta;
    restrictions?: Restrictions;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    rule: Rule[];
    ownership: Ownership;
    display_meta: DisplayMeta;
    type_slug: string;
    identifiers: Identifier;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type CompareObject = {
    greater_than?: number;
    less_than_equals?: number;
    equals?: number;
    less_than?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    buy_rules?: string[];
    item_exclude_brand?: number[];
    item_exclude_category?: number[];
    item_category?: number[];
    item_exclude_sku?: string[];
    all_items?: boolean;
    item_id?: number[];
    item_store?: number[];
    cart_quantity?: CompareObject;
    cart_total?: CompareObject;
    item_brand?: number[];
    item_company?: number[];
    item_sku?: string[];
    item_exclude_store?: number[];
    item_exclude_company?: number[];
    item_size?: string[];
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
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
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
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
    uses: UsesRestriction1;
    platforms?: string[];
    user_id?: string[];
    user_registered?: UserRegistered;
    order_quantity?: number;
    post_order?: PostOrder1;
    user_groups?: number[];
    anonymous_users?: boolean;
};
type DiscountOffer = {
    discount_price?: number;
    min_offer_quantity?: number;
    discount_percentage?: number;
    code?: string;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    discount_amount?: number;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    discount_type: string;
    offer: DiscountOffer;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionSchedule = {
    cron?: string;
    start: string;
    end?: string;
    duration?: number;
    next_schedule?: any[];
    published: boolean;
};
type DisplayMeta1 = {
    offer_text?: string;
    description?: string;
    name?: string;
};
type PromotionListItem = {
    buy_rules: any;
    _custom_json?: any;
    ownership: Ownership1;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    promotion_type: string;
    apply_all_discount?: boolean;
    application_id: string;
    currency?: string;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    mode: string;
    apply_exclusive?: string;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    promo_group: string;
    code?: string;
    visiblility?: Visibility;
    _schedule?: PromotionSchedule;
    display_meta: DisplayMeta1;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    buy_rules: any;
    _custom_json?: any;
    ownership: Ownership1;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    promotion_type: string;
    apply_all_discount?: boolean;
    application_id: string;
    currency?: string;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    mode: string;
    apply_exclusive?: string;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    promo_group: string;
    code?: string;
    visiblility?: Visibility;
    _schedule?: PromotionSchedule;
    display_meta: DisplayMeta1;
};
type PromotionUpdate = {
    buy_rules: any;
    _custom_json?: any;
    ownership: Ownership1;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    promotion_type: string;
    apply_all_discount?: boolean;
    application_id: string;
    currency?: string;
    author?: PromotionAuthor;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    mode: string;
    apply_exclusive?: string;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    promo_group: string;
    code?: string;
    visiblility?: Visibility;
    _schedule?: PromotionSchedule;
    display_meta: DisplayMeta1;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type CartItem = {
    size: string;
    product_id: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
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
type BaseInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    images?: ProductImage[];
    name?: string;
    type?: string;
    uid?: number;
    action?: ProductAction;
    categories?: CategoryInfo[];
    brand?: BaseInfo;
    slug?: string;
};
type BasePrice = {
    currency_code?: string;
    marked?: number;
    effective?: number;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    size?: string;
    parent_item_identifiers?: any;
    product_group_tags?: string[];
    _custom_json?: any;
    type?: string;
    store?: BaseInfo;
    extra_meta?: any;
    uid?: string;
    price?: ArticlePriceInfo;
    seller?: BaseInfo;
    quantity?: number;
};
type ProductAvailability = {
    deliverable?: boolean;
    other_store_quantity?: number;
    sizes?: string[];
    is_valid?: boolean;
    out_of_stock?: boolean;
};
type PromoMeta = {
    message?: string;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type AppliedPromotion = {
    amount?: number;
    offer_text?: string;
    promotion_type?: string;
    ownership?: Ownership2;
    article_quantity?: number;
    mrp_promotion?: boolean;
    promo_id?: string;
};
type ProductPrice = {
    selling?: number;
    currency_code?: string;
    add_on?: number;
    currency_symbol?: string;
    marked?: number;
    effective?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    parent_item_identifiers?: any;
    product?: CartProduct;
    article?: ProductArticle;
    bulk_offer?: any;
    availability?: ProductAvailability;
    coupon_message?: string;
    promo_meta?: PromoMeta;
    key?: string;
    is_set?: boolean;
    discount?: string;
    promotions_applied?: AppliedPromotion[];
    price?: ProductPriceInfo;
    message?: string;
    price_per_unit?: ProductPriceInfo;
    quantity?: number;
    identifiers: CartProductIdentifer;
};
type LoyaltyPoints = {
    total?: number;
    description?: string;
    applicable?: number;
    is_applied?: boolean;
};
type RawBreakup = {
    coupon?: number;
    total?: number;
    delivery_charge?: number;
    mrp_total?: number;
    convenience_fee?: number;
    discount?: number;
    you_saved?: number;
    vog?: number;
    gst_charges?: number;
    cod_charge?: number;
    fynd_cash?: number;
    subtotal?: number;
};
type DisplayBreakup = {
    value?: number;
    display?: string;
    currency_code?: string;
    key?: string;
    message?: string[];
    currency_symbol?: string;
};
type CouponBreakup = {
    value?: number;
    type?: string;
    code?: string;
    uid?: string;
    message?: string;
    is_applied?: boolean;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
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
    address_type?: string;
    phone?: number;
    name?: string;
    address?: string;
    pincode?: number;
    landmark?: string;
    area_code: string;
    state?: string;
    country?: string;
    country_code?: string;
    area_code_slug?: string;
    meta?: any;
    area?: string;
    email?: string;
    city?: string;
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
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    message?: string;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
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
    amount_paid: number;
    extra_meta?: any;
    loyalty_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    product_id: number;
    delivery_charges: number;
    discount: number;
    price_marked: number;
    employee_discount?: number;
    files?: OpenApiFiles[];
    cashback_applied: number;
    cod_charges: number;
    meta?: CartItemMeta;
    price_effective: number;
    coupon_effective_discount: number;
    quantity?: number;
    size: string;
};
type OpenApiPlatformCheckoutReq = {
    order_id?: string;
    currency_code?: string;
    cart_items: OpenApiOrderItem[];
    delivery_charges: number;
    files?: OpenApiFiles[];
    comment?: string;
    coupon?: string;
    coupon_value: number;
    affiliate_order_id?: string;
    payment_mode?: string;
    cart_value: number;
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
    billing_address: ShippingAddress;
    employee_discount?: any;
    cashback_applied: number;
    cod_charges: number;
    coupon_code: string;
    shipping_address?: ShippingAddress;
    gstin?: string;
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    message?: string;
    success?: boolean;
    order_id: string;
};
type AbandonedCart = {
    buy_now?: boolean;
    uid: number;
    created_on: string;
    articles: any[];
    coupon?: any;
    promotion?: any;
    payment_methods?: any[];
    fynd_credits?: any;
    app_id?: string;
    checkout_mode?: string;
    order_id?: string;
    payments?: any;
    merge_qty?: boolean;
    delivery_charges?: any;
    bulk_coupon_discount?: number;
    is_archive?: boolean;
    comment?: string;
    pick_up_customer_details?: any;
    _id: string;
    is_active?: boolean;
    payment_mode?: string;
    last_modified: string;
    cart_value?: number;
    is_default: boolean;
    discount?: number;
    user_id: string;
    cashback: any;
    fc_index_map?: number[];
    shipments?: any[];
    cod_charges?: any;
    expire_at: string;
    meta?: any;
    gstin?: string;
};
type AbandonedCartResponse = {
    page?: Page;
    items?: AbandonedCart[];
    message?: string;
    success?: boolean;
    result?: any;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    coupon_text?: string;
    checkout_mode?: string;
    last_modified?: string;
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    items?: CartProductInfo[];
    message?: string;
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    currency?: CartCurrency;
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    gstin?: string;
    id?: string;
};
type AddProductCart = {
    parent_item_identifiers?: any;
    product_group_tags?: string[];
    _custom_json?: any;
    display?: string;
    extra_meta?: any;
    item_id?: number;
    article_assignment?: any;
    store_id?: number;
    seller_id?: number;
    article_id?: string;
    pos?: boolean;
    quantity?: number;
    item_size?: string;
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
    parent_item_identifiers?: any;
    _custom_json?: any;
    extra_meta?: any;
    item_id?: number;
    item_index?: number;
    article_id?: string;
    quantity?: number;
    item_size?: string;
    identifiers: CartProductIdentifer;
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
