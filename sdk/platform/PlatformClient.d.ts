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
    serviceability: Serviceability;
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, GenerateSEOContent, GeneratedSEOContent, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, Code, PaymentCode, GetPaymentCode, GetPaymentCodeResponse, PaymentModeInfo, ShipmentStatus, ShipmentItemFulFillingStore, PlatformItem, GSTDetailsData, Prices, BagUnit, UserDataInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, ShipmentPayments, InvoiceInfo, PhoneDetails, ContactDetails, CompanyDetails, Formatted, LockData, BuyerDetails, ShipmentTimeStamp, DebugInfo, EinvoiceInfo, ShipmentMeta, AffiliateMeta, PDFLinks, AffiliateDetails, OrderDetailsData, FulfillingStore, UserDetailsData, BagStateMapper, BagStatusHistory, OrderBrandName, BagGST, PlatformDeliveryAddress, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, CurrentStatus, BagConfigs, OrderBagArticle, Identifier, FinancialBreakup, OrderBags, ShipmentStatusData, DPDetailsData, Dimensions, Meta, TrackingList, OrderingStoreDetails, PlatformShipment, ShipmentInfoResponse, TaxDetails, PlatformUserDetails, BillingStaffDetails, TransactionData, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Brand, BagGSTDetails, BagReturnableCancelableStatus, ArticleDetails, B2BPODetails, BagMeta, Weight, ReturnConfig, Article, Dates, Attributes, Item, AffiliateBagDetails, StoreAddress, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, EInvoicePortalDetails, StoreMeta, Store, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, UserData, OrderPriority, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ShippingInfo, TaxInfo, ProcessingDates, Tax, Charge, LineItem, Shipment, BillingInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, ApplicationItemMOQ, ApplicationItemSEO, MetaFields, ApplicationItemMeta, SuccessResponse1, MOQData, SEOData, OwnerAppItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, UserInfo, CollectionBadge, SeoDetail, CollectionQuery, CollectionImage, CollectionSchedule, CollectionBanner, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, CollectionItem, CollectionItemUpdate, UpdatedResponse, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, UserInfo1, ProductTemplateExportResponse, ProductDownloadsResponse, ProductTemplateExportFilterRequest, ProductTemplateDownloadsExport, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, NetQuantity, TeaserTag, ProductPublish, TaxIdentifier, Trader, CustomOrder, ProductCreateUpdateSchemaV2, VerifiedBy, NetQuantityResponse, ReturnConfigResponse, Logo, ProductPublish1, Image, ProductSchemaV2, ProductListingResponseV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, InventoryResponse, InventoryResponsePaginated, WeightResponse, ReturnConfig1, ManufacturerResponse, BrandMeta, PriceMeta, DimensionResponse, QuantityBase, Quantities, CompanyMeta, Trader1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, WeightResponse1, ArticleStoreResponse, ReturnConfig2, ManufacturerResponse1, BrandMeta1, PriceArticle, DimensionResponse1, Quantity, QuantitiesArticle, CompanyMeta1, Trader2, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportQuantityFilter, InventoryExportAdvanceOption, InventoryExportJob, InventoryExportFilter, InventoryCreateRequest, InventoryJobFilters, InventoryJobDetailResponse, InventoryExportJobListResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, PageResponse, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, UserSerializer1, ProductReturnConfigSerializer, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, SellerPhoneNumber, GetAddressSerializer, LocationManagerSerializer, LocationIntegrationType, UserSerializer2, GetCompanySerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, CompanyTaxesSerializer, BusinessCountryInfo, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, RuleDefinition, Rule, PostOrder, UsesRemaining, UsesRestriction, BulkBundleRestriction, PriceRange, PaymentAllowValue, PaymentModes, Restrictions, Validation, DisplayMetaDict, DisplayMeta, CouponDateMeta, CouponAuthor, Ownership, CouponSchedule, State, CouponAction, Validity, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, DisplayMeta1, PromotionDateMeta, Ownership1, PostOrder1, UsesRemaining1, UsesRestriction1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, PromotionAuthor, CompareObject, ItemCriteria, Visibility, PromotionAction, DiscountOffer, DiscountRule, PromotionSchedule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, DisplayBreakup, LoyaltyPoints, CouponBreakup, RawBreakup, CartBreakup, ProductPrice, ProductPriceInfo, CartProductIdentifer, ProductAvailability, PromoMeta, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, BasePrice, ArticlePriceInfo, BaseInfo, ProductArticle, CouponDetails, Tags, ProductImage, ActionQuery, ProductAction, CategoryInfo, CartProduct, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartRequest, DeleteCartDetailResponse, CartItemCountResponse, Coupon, PageCoupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, GiftDetail, ArticleGiftDetail, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, Files, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, ServiceabilityrErrorResponse, ApplicationServiceabilityConfig, ApplicationServiceabilityConfigResponse, EntityRegionView_Request, EntityRegionView_Error, EntityRegionView_Items, EntityRegionView_page, EntityRegionView_Response, ListViewSummary, ZoneDataItem, ListViewProduct, ListViewChannels, ListViewItems, ListViewResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, UpdateZoneData, ZoneUpdateRequest, ZoneSuccessResponse, GetZoneDataViewItems, GetSingleZoneDataViewResponse, CreateZoneData, ZoneRequest, ZoneResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, OpeningClosing, TimmingResponse, ModifiedByResponse, Dp, LogisticsResponse, MobileNo, ManagerResponse, DocumentsResponse, IntegrationTypeResponse, ContactNumberResponse, WarningsResponse, AddressResponse, EinvoiceResponse, EwayBillResponse, GstCredentialsResponse, CreatedByResponse, ProductReturnConfigResponse, ItemResponse, GetStoresViewResponse };
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
import Serviceability = require("./Serviceability/ServiceabilityPlatformClient");
import PlatformApplicationClient = require("./PlatformApplicationClient");
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
    app_id: string;
    display_fields: string[];
    created: boolean;
    excluded_fields: string[];
    success: boolean;
    aggregators?: any[];
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
type PaymentGatewayConfig = {
    secret: string;
    merchant_salt: string;
    is_active?: boolean;
    key: string;
    config_type: string;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    is_active?: boolean;
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
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentApp = {
    logos?: PaymentModeLogo;
    code?: string;
    package_name?: string;
    display_name?: string;
};
type PaymentModeList = {
    card_brand_image?: string;
    expired?: boolean;
    card_token?: string;
    card_brand?: string;
    card_type?: string;
    card_fingerprint?: string;
    retry_count?: number;
    card_issuer?: string;
    display_priority?: number;
    card_reference?: string;
    card_id?: string;
    exp_year?: number;
    intent_app_error_dict_list?: IntentAppErrorList[];
    compliant_with_tokenisation_guidelines?: boolean;
    cod_limit_per_order?: number;
    timeout?: number;
    card_number?: string;
    remaining_limit?: number;
    intent_flow?: boolean;
    code?: string;
    intent_app?: IntentApp[];
    name?: string;
    display_name?: string;
    card_name?: string;
    exp_month?: number;
    cod_limit?: number;
    intent_app_error_list?: string[];
    merchant_code?: string;
    card_isin?: string;
    fynd_vpa?: string;
    aggregator_name: string;
    nickname?: string;
    logo_url?: PaymentModeLogo;
};
type RootPaymentMode = {
    anonymous_enable?: boolean;
    add_card_enabled?: boolean;
    save_card?: boolean;
    name: string;
    aggregator_name?: string;
    display_name: string;
    list?: PaymentModeList[];
    display_priority: number;
    is_pay_by_card_pl?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    transfer_type: string;
    customers: any;
    is_active: boolean;
    payouts_aggregators: any[];
    unique_transfer_no: any;
    more_attributes: any;
    is_default: boolean;
};
type PayoutBankDetails = {
    bank_name?: string;
    city?: string;
    account_type: string;
    ifsc_code: string;
    country?: string;
    account_holder?: string;
    pincode?: number;
    branch_name?: string;
    account_no?: string;
    state?: string;
};
type PayoutRequest = {
    transfer_type: string;
    is_active: boolean;
    unique_external_id: string;
    aggregator: string;
    bank_details: PayoutBankDetails;
    users: any;
};
type PayoutResponse = {
    transfer_type: string;
    payment_status: string;
    is_active: boolean;
    created: boolean;
    aggregator: string;
    payouts: any;
    success: boolean;
    bank_details: any;
    unique_transfer_no: string;
    users: any;
};
type UpdatePayoutResponse = {
    is_active: boolean;
    success: boolean;
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
    data: any[];
    success: boolean;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    aggregator: string;
    success: boolean;
    config: any;
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
    data?: any;
    success: boolean;
    is_verified_flag?: boolean;
};
type NotFoundResourceError = {
    code: string;
    success: boolean;
    description: string;
};
type BankDetailsForOTP = {
    bank_name: string;
    ifsc_code: string;
    account_holder: string;
    branch_name: string;
    account_no: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    bank_name: string;
    success?: boolean;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    beneficiary_id: string;
    ifsc_code: string;
    title: string;
    delights_user_name?: string;
    transfer_mode: string;
    mobile?: string;
    email: string;
    is_active: boolean;
    created_on: string;
    account_no: string;
    branch_name?: string;
    address: string;
    display_name: string;
    bank_name: string;
    comment?: string;
    modified_on: string;
    account_holder: string;
    id: number;
    subtitle: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    payment_gateway?: string;
    payment_id?: string;
    current_status?: string;
    extra_meta?: any;
    order_id?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    meta?: MultiTenderPaymentMeta;
    mode: string;
    amount: number;
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
    is_active: boolean;
    usages: number;
    limit: number;
    remaining_limit: number;
    user_id: string;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
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
    models: string[];
    aggregator: string;
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
    success: boolean;
    statistics: StatisticsData;
};
type EdcAddRequest = {
    device_tag?: string;
    store_id: number;
    edc_model: string;
    aggregator_id: number;
    edc_device_serial_no: string;
    terminal_serial_no: string;
};
type EdcDevice = {
    application_id: string;
    device_tag: string;
    terminal_unique_identifier: string;
    store_id: number;
    edc_model?: string;
    merchant_store_pos_code?: string;
    is_active: boolean;
    aggregator_id: number;
    edc_device_serial_no: string;
    aggregator_name?: string;
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
    device_tag?: string;
    store_id?: number;
    edc_model?: string;
    merchant_store_pos_code?: string;
    is_active?: boolean;
    aggregator_id?: number;
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
    method: string;
    device_id?: string;
    email: string;
    currency: string;
    aggregator: string;
    merchant_order_id: string;
    razorpay_payment_id?: string;
    customer_id: string;
    timeout?: number;
    vpa?: string;
    contact: string;
    amount: number;
    order_id: string;
};
type PaymentInitializationResponse = {
    method: string;
    bqr_image?: string;
    virtual_id?: string;
    device_id?: string;
    currency?: string;
    aggregator_order_id?: string;
    status?: string;
    aggregator: string;
    merchant_order_id: string;
    success: boolean;
    customer_id?: string;
    vpa?: string;
    polling_url: string;
    upi_poll_url?: string;
    razorpay_payment_id?: string;
    timeout?: number;
    amount?: number;
};
type PaymentStatusUpdateRequest = {
    method: string;
    device_id?: string;
    email: string;
    currency: string;
    status: string;
    aggregator: string;
    merchant_order_id: string;
    customer_id: string;
    vpa?: string;
    contact: string;
    amount: number;
    order_id: string;
};
type PaymentStatusUpdateResponse = {
    retry: boolean;
    status: string;
    redirect_url?: string;
    success?: boolean;
    aggregator_name: string;
};
type ResendOrCancelPaymentRequest = {
    device_id?: string;
    request_type: string;
    order_id: string;
};
type LinkStatus = {
    message: string;
    status: boolean;
};
type ResendOrCancelPaymentResponse = {
    data: LinkStatus;
    success: boolean;
};
type Code = {
    name: string;
    code: string;
    merchant_code: string;
};
type PaymentCode = {
    types: string;
    codes: Code;
    networks: string;
    name: string;
};
type GetPaymentCode = {
    method_code: PaymentCode;
};
type GetPaymentCodeResponse = {
    data: GetPaymentCode;
    success: boolean;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentStatus = {
    status: string;
    title: string;
    actual_status: string;
    ops_status: string;
    hex_code: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type PlatformItem = {
    image?: string[];
    can_return?: boolean;
    department_id?: number;
    l1_category?: string[];
    l3_category?: number;
    l3_category_name?: string;
    color?: string;
    size?: string;
    id?: number;
    name?: string;
    can_cancel?: boolean;
    code?: string;
    images?: string[];
};
type GSTDetailsData = {
    value_of_good: number;
    gstin_code: string;
    brand_calculated_amount: number;
    gst_fee: number;
    tax_collected_at_source: number;
};
type Prices = {
    fynd_credits?: number;
    amount_paid_roundoff?: number;
    price_marked?: number;
    transfer_price?: number;
    cod_charges?: number;
    cashback?: number;
    refund_credit?: number;
    value_of_good?: number;
    refund_amount?: number;
    price_effective?: number;
    coupon_value?: number;
    delivery_charge?: number;
    cashback_applied?: number;
    discount?: number;
    promotion_effective_discount?: number;
    amount_paid?: number;
    tax_collected_at_source?: number;
};
type BagUnit = {
    can_return?: boolean;
    item_quantity: number;
    status: any;
    bag_id: number;
    total_shipment_bags: number;
    item?: PlatformItem;
    shipment_id: string;
    can_cancel?: boolean;
    gst?: GSTDetailsData;
    prices?: Prices;
    ordering_channel: string;
};
type UserDataInfo = {
    last_name?: string;
    avis_user_id?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    first_name?: string;
    name?: string;
    uid?: number;
    mobile?: string;
    email?: string;
};
type ShipmentItem = {
    total_bags_count: number;
    channel?: any;
    shipment_created_at: string;
    created_at: string;
    total_shipments_in_order: number;
    fulfilling_centre: string;
    payment_methods?: any;
    id: string;
    payment_mode_info?: PaymentModeInfo;
    sla?: any;
    shipment_id?: string;
    shipment_status?: ShipmentStatus;
    fulfilling_store?: ShipmentItemFulFillingStore;
    bags?: BagUnit[];
    prices?: Prices;
    application?: any;
    user?: UserDataInfo;
};
type FilterInfoOption = {
    name?: string;
    text: string;
    value?: string;
};
type FiltersInfo = {
    text: string;
    type: string;
    options?: FilterInfoOption[];
    value: string;
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    items?: ShipmentItem[];
    page?: any;
    filters?: FiltersInfo[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type ShipmentPayments = {
    source?: string;
    logo?: string;
    mode?: string;
};
type InvoiceInfo = {
    updated_date?: string;
    store_invoice_id?: string;
    label_url?: string;
    invoice_url?: string;
    credit_note_id?: string;
};
type PhoneDetails = {
    mobile_number?: string;
    country_code?: number;
};
type ContactDetails = {
    emails?: string[];
    phone?: PhoneDetails[];
};
type CompanyDetails = {
    company_name?: string;
    company_cin?: string;
    company_id?: number;
    address?: any;
    company_gst?: string;
    company_contact?: ContactDetails;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type LockData = {
    locked?: boolean;
    mto?: boolean;
    lock_message?: string;
};
type BuyerDetails = {
    city: string;
    gstin: string;
    ajio_site_id?: string;
    state: string;
    name: string;
    address: string;
    pincode: number;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type EinvoiceInfo = {
    invoice?: any;
    credit_note?: any;
};
type ShipmentMeta = {
    dp_sort_key?: string;
    packaging_name?: string;
    forward_affiliate_order_id?: string;
    shipment_volumetric_weight?: number;
    dp_name?: string;
    marketplace_store_id?: string;
    dp_options?: any;
    shipment_weight?: number;
    order_type?: string;
    return_affiliate_shipment_id?: string;
    ewaybill_info?: any;
    formatted?: Formatted;
    store_invoice_updated_date?: string;
    return_details?: any;
    return_store_node?: number;
    forward_affiliate_shipment_id?: string;
    box_type?: string;
    lock_data?: LockData;
    dp_id?: string;
    same_store_available: boolean;
    fulfilment_priority_text?: string;
    b2c_buyer_details?: any;
    awb_number?: string;
    weight: number;
    b2b_buyer_details?: BuyerDetails;
    timestamp?: ShipmentTimeStamp;
    debug_info?: DebugInfo;
    due_date?: string;
    return_awb_number?: string;
    return_affiliate_order_id?: string;
    auto_trigger_dp_assignment_acf: boolean;
    assign_dp_from_sb?: boolean;
    bag_weight?: any;
    po_number?: string;
    einvoice_info?: EinvoiceInfo;
    external?: any;
};
type AffiliateMeta = {
    due_date?: string;
    loyalty_discount?: number;
    channel_shipment_id?: string;
    order_item_id?: string;
    quantity?: number;
    box_type?: string;
    channel_order_id?: string;
    size_level_total_qty?: number;
    is_priority?: boolean;
    employee_discount?: number;
    coupon_code?: string;
};
type PDFLinks = {
    invoice_pos?: string;
    invoice?: string;
    label_a4?: string;
    invoice_a6?: string;
    b2b?: string;
    label_type: string;
    label_a6?: string;
    label?: string;
    po_invoice?: string;
    invoice_a4?: string;
    invoice_type: string;
    credit_note_url?: string;
    label_pos?: string;
    delivery_challan_a4?: string;
};
type AffiliateDetails = {
    shipment_meta: ShipmentMeta;
    affiliate_id?: string;
    affiliate_bag_id: string;
    ad_id?: string;
    company_affiliate_tag?: string;
    affiliate_store_id: string;
    affiliate_order_id: string;
    affiliate_shipment_id: string;
    affiliate_meta: AffiliateMeta;
    pdf_links?: PDFLinks;
};
type OrderDetailsData = {
    cod_charges?: string;
    affiliate_id?: string;
    tax_details?: any;
    source?: string;
    order_value?: string;
    ordering_channel_logo?: any;
    fynd_order_id: string;
    order_date?: string;
    ordering_channel?: string;
};
type FulfillingStore = {
    city: string;
    fulfillment_channel: string;
    contact_person: string;
    store_name: string;
    state: string;
    country: string;
    id: number;
    phone: string;
    meta: any;
    code: string;
    address: string;
    pincode: string;
};
type UserDetailsData = {
    city: string;
    area?: string;
    state: string;
    country: string;
    name: string;
    phone: string;
    address: string;
    pincode: string;
    address1?: string;
    email?: string;
    landmark?: string;
    address_type?: string;
};
type BagStateMapper = {
    app_facing?: boolean;
    display_name: string;
    journey_type: string;
    state_type: string;
    app_display_name?: string;
    name: string;
    app_state_name?: string;
    bs_id: number;
    notify_customer?: boolean;
    is_active?: boolean;
};
type BagStatusHistory = {
    state_id?: number;
    created_at?: string;
    display_name?: string;
    store_id?: number;
    state_type?: string;
    status: string;
    bag_id?: number;
    delivery_awb_number?: string;
    delivery_partner_id?: number;
    bag_state_mapper?: BagStateMapper;
    app_display_name?: string;
    forward?: boolean;
    updated_at?: string;
    reasons?: any[];
    shipment_id?: string;
    kafka_sync?: boolean;
    bsh_id?: number;
};
type OrderBrandName = {
    company: string;
    modified_on?: string;
    brand_name: string;
    id: number;
    logo: string;
    created_on: string;
};
type BagGST = {
    gst_fee?: number;
    gst_tag?: string;
    value_of_good?: number;
    gstin_code?: string;
    hsn_code?: string;
    brand_calculated_amount?: number;
    is_default_hsn_code?: boolean;
    gst_tax_percentage?: number;
};
type PlatformDeliveryAddress = {
    created_at?: string;
    city?: string;
    area?: string;
    contact_person?: string;
    state?: string;
    version?: string;
    country?: string;
    longitude?: number;
    updated_at?: string;
    address_category?: string;
    phone?: string;
    address2?: string;
    address_type?: string;
    pincode?: string;
    address1?: string;
    email?: string;
    landmark?: string;
    latitude?: number;
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
    amount?: number;
    mrp_promotion?: boolean;
    promo_id?: string;
    buy_rules?: BuyRules[];
    article_quantity?: number;
    discount_rules?: DiscountRules[];
    promotion_name?: string;
    promotion_type?: string;
};
type CurrentStatus = {
    state_id?: number;
    created_at?: string;
    store_id?: number;
    state_type?: string;
    status?: string;
    bag_id?: number;
    delivery_awb_number?: string;
    current_status_id: number;
    delivery_partner_id?: number;
    bag_state_mapper?: BagStateMapper;
    updated_at?: string;
    shipment_id?: string;
    kafka_sync?: boolean;
};
type BagConfigs = {
    allow_force_return: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
};
type OrderBagArticle = {
    identifiers?: any;
    uid?: string;
    return_config?: any;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    cashback: number;
    value_of_good: number;
    promotion_effective_discount: number;
    gst_fee: number;
    gst_tag: string;
    total_units: number;
    price_effective: number;
    coupon_value: number;
    identifiers: Identifier;
    cashback_applied: number;
    amount_paid_roundoff?: number;
    discount: number;
    amount_paid: number;
    gst_tax_percentage: number;
    fynd_credits: number;
    price_marked: number;
    refund_credit: number;
    item_name: string;
    delivery_charge: number;
    coupon_effective_discount: number;
    transfer_price: number;
    added_to_fynd_cash: boolean;
    cod_charges: number;
    size: string;
    hsn_code: string;
    brand_calculated_amount: number;
    tax_collected_at_source?: number;
};
type OrderBags = {
    brand?: OrderBrandName;
    quantity?: number;
    identifier?: string;
    can_cancel?: boolean;
    gst_details?: BagGST;
    delivery_address?: PlatformDeliveryAddress;
    applied_promos?: AppliedPromos[];
    line_number?: number;
    entity_type?: string;
    seller_identifier?: string;
    current_status?: CurrentStatus;
    bag_configs?: BagConfigs;
    parent_promo_bags?: any;
    prices?: Prices;
    can_return?: boolean;
    display_name?: string;
    article?: OrderBagArticle;
    bag_id: number;
    financial_breakup?: FinancialBreakup;
    item?: PlatformItem;
};
type ShipmentStatusData = {
    created_at?: string;
    bag_list?: string[];
    status?: string;
    id?: number;
    shipment_id?: string;
};
type DPDetailsData = {
    awb_no?: string;
    gst_tag?: string;
    eway_bill_id?: string;
    country?: string;
    id?: number;
    name?: string;
    pincode?: string;
    track_url?: string;
};
type Dimensions = {
    is_default?: boolean;
    unit?: string;
    width?: number;
    height?: number;
    length?: number;
};
type Meta = {
    dimension?: Dimensions;
};
type TrackingList = {
    is_current?: boolean;
    status: string;
    is_passed?: boolean;
    text: string;
    time?: string;
};
type OrderingStoreDetails = {
    ordering_store_id: number;
    city: string;
    contact_person: string;
    store_name: string;
    state: string;
    country: string;
    phone: string;
    meta: any;
    code: string;
    address: string;
    pincode: string;
};
type PlatformShipment = {
    payments?: ShipmentPayments;
    invoice?: InvoiceInfo;
    enable_dp_tracking?: boolean;
    payment_mode?: string;
    shipment_quantity?: number;
    company_details?: CompanyDetails;
    affiliate_details?: AffiliateDetails;
    order?: OrderDetailsData;
    shipment_id: string;
    shipment_status?: string;
    fulfilling_store?: FulfillingStore;
    coupon?: any;
    gst_details?: GSTDetailsData;
    packaging_type?: string;
    custom_meta?: any[];
    shipment_images?: string[];
    invoice_id?: string;
    billing_details?: UserDetailsData;
    bag_status_history?: BagStatusHistory[];
    vertical?: string;
    fulfilment_priority?: number;
    platform_logo?: string;
    bags?: OrderBags[];
    user?: UserDataInfo;
    total_bags?: number;
    journey_type?: string;
    user_agent?: string;
    status?: ShipmentStatusData;
    priority_text?: string;
    dp_details?: DPDetailsData;
    delivery_slot?: any;
    meta?: Meta;
    prices?: Prices;
    lock_status?: boolean;
    tracking_list?: TrackingList[];
    picked_date?: string;
    payment_methods?: any;
    delivery_details?: UserDetailsData;
    total_items?: number;
    operational_status?: string;
    forward_shipment_id?: string;
    ordering_store?: OrderingStoreDetails;
};
type ShipmentInfoResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    message?: string;
};
type TaxDetails = {
    pan_no?: string;
    gstin?: string;
};
type PlatformUserDetails = {
    platform_user_last_name?: string;
    platform_user_id?: string;
    platform_user_first_name?: string;
    platform_user_employee_code?: string;
};
type BillingStaffDetails = {
    last_name?: string;
    staff_id?: number;
    first_name?: string;
    employee_code?: string;
    user?: string;
};
type TransactionData = {
    entity?: string;
    status?: string;
    terminal_id?: string;
    currency?: string;
    transaction_id?: string;
    payment_id?: string;
    amount_paid?: string;
    unique_reference_number?: string;
};
type OrderMeta = {
    customer_note?: string;
    order_platform?: string;
    payment_type?: string;
    order_type?: string;
    cart_id?: number;
    platform_user_details?: PlatformUserDetails;
    comment?: string;
    staff?: any;
    employee_id?: number;
    files?: any[];
    billing_staff_details?: BillingStaffDetails;
    extra_meta?: any;
    order_child_entities?: string[];
    transaction_data?: TransactionData;
    currency_symbol?: string;
    order_tags?: any[];
    company_logo?: string;
    mongo_cart_id?: number;
    ordering_store?: number;
};
type OrderDict = {
    payment_methods?: any;
    order_date: string;
    tax_details?: TaxDetails;
    meta?: OrderMeta;
    fynd_order_id: string;
    prices?: Prices;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    order?: OrderDict;
    success: boolean;
};
type SubLane = {
    index?: number;
    value?: string;
    total_items?: number;
    text?: string;
    actions?: any[];
};
type SuperLane = {
    text: string;
    options?: SubLane[];
    total_items?: number;
    value: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformBreakupValues = {
    value?: string;
    name?: string;
    display?: string;
};
type PlatformOrderItems = {
    channel?: PlatformChannel;
    breakup_values?: PlatformBreakupValues[];
    user_info?: UserDataInfo;
    order_created_time?: string;
    payment_mode?: string;
    order_id?: string;
    shipments?: PlatformShipment[];
    meta?: any;
    total_order_value?: number;
    order_value?: number;
};
type OrderListingResponse = {
    lane?: string;
    success?: boolean;
    message?: string;
    total_count?: number;
    page?: Page;
    items?: PlatformOrderItems[];
};
type Options = {
    text?: string;
    value?: number;
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
    awb?: string;
    raw_status?: string;
    reason?: string;
    status?: string;
    updated_time?: string;
    updated_at?: string;
    meta?: any;
    account_name?: string;
    shipment_type?: string;
    last_location_recieved_at?: string;
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
    display_name?: string;
    report_created_at?: string;
    report_id?: string;
    status?: string;
    report_type?: string;
    report_name?: string;
    report_requested_at?: string;
    s3_key?: string;
    request_details?: any;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    jio_code?: string;
    item_id?: string;
    article_id?: string;
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
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
    identifier?: string;
    data?: any[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    invoice?: any;
    do_invoice_label_generated: boolean;
    store_id?: string;
    store_name?: string;
    store_code?: string;
    batch_id: string;
    label?: any;
    company_id?: string;
    data?: any;
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
    namespace?: string;
    file_name?: string;
    upload?: FileUploadResponse;
    size?: number;
    method?: string;
    content_type?: string;
    operation?: string;
    tags?: string[];
    file_path?: string;
    cdn?: URL;
};
type bulkListingData = {
    processing?: number;
    store_name?: string;
    file_name?: string;
    total?: number;
    batch_id?: string;
    company_id?: number;
    user_name?: string;
    successful_shipments?: any[];
    successful?: number;
    status?: string;
    store_code?: string;
    failed?: number;
    processing_shipments?: string[];
    store_id?: number;
    id?: string;
    excel_url?: string;
    user_id?: string;
    failed_shipments?: any[];
    uploaded_on?: string;
};
type BulkListingPage = {
    size?: number;
    type?: string;
    total?: number;
    has_previous?: boolean;
    has_next?: boolean;
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
    status?: boolean;
    message?: string;
};
type BulkActionDetailsDataField = {
    failed_shipments_count?: number;
    batch_id?: string;
    processing_shipments_count?: number;
    successful_shipments_count?: number;
    successful_shipment_ids?: string[];
    company_id?: string;
    total_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    success?: string;
    error?: string[];
    status?: boolean;
    failed_records?: string[];
    message?: string;
    user_id?: string;
    uploaded_by?: string;
    data?: BulkActionDetailsDataField[];
    uploaded_on?: string;
};
type Brand = {
    credit_note_allowed?: boolean;
    brand_id: number;
    company: string;
    invoice_prefix?: string;
    script_last_ran?: string;
    modified_on?: number;
    pickup_location?: string;
    brand_name: string;
    start_date?: string;
    is_virtual_invoice?: boolean;
    logo?: string;
    created_on?: number;
    credit_note_expiry_days?: number;
};
type BagGSTDetails = {
    gst_fee: number;
    cgst_tax_percentage: number;
    sgst_tax_percentage: number;
    gst_tag: string;
    value_of_good: number;
    igst_gst_fee: string;
    gstin_code?: string;
    hsn_code: string;
    hsn_code_id: string;
    cgst_gst_fee: string;
    sgst_gst_fee: string;
    igst_tax_percentage: number;
    brand_calculated_amount: number;
    is_default_hsn_code?: boolean;
    gst_tax_percentage: number;
    tax_collected_at_source: number;
};
type BagReturnableCancelableStatus = {
    is_returnable: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
};
type ArticleDetails = {
    status?: any;
};
type B2BPODetails = {
    po_line_amount?: number;
    total_gst_percentage?: number;
    docker_number?: string;
    item_base_price?: number;
    partial_can_ret?: boolean;
    po_tax_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type ReturnConfig = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Article = {
    is_set?: boolean;
    raw_meta?: any;
    weight?: Weight;
    dimensions?: Dimensions;
    seller_identifier: string;
    _id: string;
    size: string;
    return_config?: ReturnConfig;
    child_details?: any;
    identifiers: Identifier;
    a_set?: any;
    esp_modified?: any;
    code?: string;
    uid: string;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type Attributes = {
    primary_color_hex?: string;
    gender?: string[];
    primary_color?: string;
    brand_name?: string;
    name?: string;
    marketer_address?: string;
    essential?: string;
    primary_material?: string;
    marketer_name?: string;
};
type Item = {
    department_id?: number;
    l1_category?: string[];
    l3_category?: number;
    brand: string;
    color?: string;
    branch_url?: string;
    can_cancel?: boolean;
    brand_id: number;
    attributes: Attributes;
    webstore_product_url?: string;
    item_id: number;
    gender?: string;
    l2_category?: string[];
    last_updated_at?: string;
    l2_category_id?: number;
    meta?: any;
    code?: string;
    image: string[];
    can_return?: boolean;
    size: string;
    slug_key: string;
    name: string;
    l3_category_name?: string;
    l1_category_id?: number;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    affiliate_bag_id: string;
    employee_discount?: number;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
};
type StoreAddress = {
    state: string;
    version?: string;
    country_code: string;
    area?: string;
    contact_person: string;
    address_category: string;
    address2?: string;
    phone: string;
    latitude: number;
    created_at: string;
    city: string;
    country: string;
    longitude: number;
    updated_at: string;
    pincode: number;
    address1: string;
    email?: string;
    landmark?: string;
    address_type: string;
};
type StoreEinvoice = {
    user?: string;
    username?: string;
    enabled: boolean;
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
    value: string;
    legal_name: string;
    verified: boolean;
    url?: string;
    ds_type: string;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    username?: string;
    password?: string;
    user?: string;
};
type StoreMeta = {
    gst_number?: string;
    display_name: string;
    ewaybill_portal_details?: any;
    product_return_config?: any;
    gst_credentials: StoreGstCredentials;
    timing?: any[];
    documents?: StoreDocuments;
    additional_contact_details?: any;
    notification_emails?: string[];
    einvoice_portal_details?: EInvoicePortalDetails;
    stage: string;
};
type Store = {
    order_integration_id?: string;
    parent_store_id?: number;
    alohomora_user_id?: number;
    packaging_material_count?: number;
    state: string;
    is_archived?: boolean;
    store_active_from?: string;
    address1: string;
    brand_id?: any;
    contact_person: string;
    company_id: number;
    is_enabled_for_recon?: boolean;
    fulfillment_channel: string;
    store_address_json?: StoreAddress;
    store_email: string;
    vat_no?: string;
    address2?: string;
    meta: StoreMeta;
    code?: string;
    phone: number;
    is_active?: boolean;
    s_id: string;
    latitude: number;
    created_at: string;
    city: string;
    mall_area?: string;
    country: string;
    login_username: string;
    longitude: number;
    mall_name?: string;
    name: string;
    updated_at?: string;
    pincode: string;
    location_type: string;
    brand_store_tags?: string[];
};
type BagDetailsPlatformResponse = {
    order_integration_id?: string;
    brand: Brand;
    quantity?: number;
    identifier?: string;
    affiliate_details?: AffiliateDetails;
    qc_required?: any;
    shipment_id?: string;
    b_type?: string;
    gst_details: BagGSTDetails;
    tags?: string[];
    applied_promos?: any[];
    line_number?: number;
    entity_type?: string;
    restore_coupon?: boolean;
    seller_identifier?: string;
    current_status: BagStatusHistory;
    bag_status_history?: BagStatusHistory;
    current_operational_status: BagStatusHistory;
    no_of_bags_order?: number;
    reasons?: any[];
    b_id: number;
    restore_promos?: any;
    journey_type: string;
    status: BagReturnableCancelableStatus;
    article_details?: ArticleDetails;
    parent_promo_bags?: any;
    original_bag_list?: number[];
    meta?: BagMeta;
    prices: Prices;
    display_name?: string;
    article: Article;
    financial_breakup: FinancialBreakup[];
    dates?: Dates;
    item: Item;
    operational_status?: string;
    bag_status: BagStatusHistory[];
    affiliate_bag_details: AffiliateBagDetails;
    bag_update_time?: number;
    ordering_store?: Store;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    item_total: number;
    size: number;
    has_next: boolean;
    current: number;
    page_type: string;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type GeneratePosOrderReceiptResponse = {
    payment_receipt?: string;
    invoice_receipt?: string;
    order_id?: string;
    success?: boolean;
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
    error_trace?: string;
    status: number;
};
type StoreReassign = {
    affiliate_bag_id?: string;
    item_id?: string;
    bag_id?: number;
    reason_ids?: number[];
    affiliate_order_id?: string;
    mongo_article_id?: string;
    store_id: number;
    set_id?: string;
    fynd_order_id?: string;
    affiliate_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    id?: string;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    reason_text: string;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    entities: Entities[];
    action: string;
    entity_type: string;
};
type Bags = {
    affiliate_order_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
    is_locked?: boolean;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    status?: string;
    shipment_id?: string;
    bags?: Bags[];
    lock_status?: boolean;
    is_bag_locked?: boolean;
    is_shipment_locked?: boolean;
    affiliate_shipment_id?: string;
    original_filter?: OriginalFilter;
    affiliate_id?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    message?: string;
    success?: boolean;
};
type AnnouncementResponse = {
    id: number;
    platform_name?: string;
    platform_id?: string;
    title?: string;
    company_id?: number;
    created_at?: string;
    from_datetime?: string;
    logo_url?: string;
    to_datetime?: string;
    description?: string;
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
type Products = {
    quantity?: number;
    line_number?: number;
    identifier?: string;
};
type ShipmentsRequest = {
    reasons?: ReasonsData;
    data_updates?: DataUpdates;
    products?: Products[];
    identifier: string;
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
    status?: string;
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    task?: boolean;
    statuses?: StatuesRequest[];
    force_transition?: boolean;
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    identifier?: string;
    status?: number;
    message?: string;
    stack_trace?: string;
    meta?: any;
    code?: string;
    final_state?: any;
    exception?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryConfig = {
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    id: string;
    name: string;
    secret: string;
    token: string;
    owner: string;
    created_at: string;
    meta?: AffiliateAppConfigMeta[];
    description?: string;
    updated_at: string;
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
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    affiliate: Affiliate;
    article_lookup?: string;
    create_user?: boolean;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    store_lookup?: string;
};
type OrderUser = {
    last_name: string;
    address1?: string;
    mobile: number;
    first_name: string;
    city: string;
    address2?: string;
    email: string;
    state: string;
    country: string;
    pincode: string;
    phone: number;
};
type ArticleDetails1 = {
    quantity: number;
    _id: string;
    weight: any;
    attributes: any;
    category: any;
    dimension: any;
    brand_id: number;
};
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentDetails = {
    shipments: number;
    dp_id?: number;
    meta?: any;
    articles: ArticleDetails1[];
    fulfillment_id: number;
    affiliate_shipment_id: string;
    box_type?: string;
};
type ShipmentConfig = {
    payment_mode: string;
    identifier: string;
    location_details?: LocationDetails;
    source: string;
    shipment: ShipmentDetails[];
    to_pincode: string;
    journey: string;
    action: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    affiliate_meta: any;
    modified_on: string;
    item_id: number;
    seller_identifier: string;
    _id: string;
    price_marked: number;
    company_id: number;
    store_id: number;
    delivery_charge: number;
    hsn_code_id: string;
    identifier: any;
    sku: string;
    quantity: number;
    item_size: string;
    avl_qty: number;
    amount_paid: number;
    discount: number;
    fynd_store_id: string;
    unit_price: number;
    transfer_price: number;
    pdf_links?: MarketPlacePdf;
    price_effective: number;
    affiliate_store_id: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderPriority = {
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
};
type OrderInfo = {
    payment_mode: string;
    discount: number;
    payment?: any;
    coupon?: string;
    delivery_charges: number;
    billing_address: OrderUser;
    order_value: number;
    shipment?: ShipmentData;
    bags: AffiliateBag[];
    affiliate_order_id?: string;
    cod_charges: number;
    user: UserData;
    order_priority?: OrderPriority;
    items: any;
    shipping_address: OrderUser;
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
    id: number;
    slug: string;
    description: string;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l2_detail?: string;
    l1_detail?: string;
    bag_id?: number;
    message: string;
    ticket_id?: string;
    type: string;
    l3_detail?: string;
    user: string;
    ticket_url?: string;
    createdat: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
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
type SmsDataPayload = {
    payment_mode: string;
    phone_number: number;
    shipment_id: number;
    message: string;
    customer_name: string;
    country_code: string;
    amount_paid: number;
    order_id: string;
    brand_name: string;
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
    id: number;
    status?: string;
    shipment_id?: string;
    remarks?: string;
    meta: Meta1;
    bag_list?: number[];
};
type OrderStatusData = {
    errors?: string[];
    order_details: OrderDetails;
    shipment_details?: ShipmentDetail[];
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    order_type: string;
    dp_id: number;
    shipment_ids?: string[];
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type ShippingInfo = {
    last_name?: string;
    address1: string;
    first_name: string;
    primary_mobile_number: string;
    state_code?: string;
    alternate_email?: string;
    city: string;
    alternate_mobile_number?: string;
    shipping_type?: string;
    state: string;
    gender?: string;
    pincode: string;
    house_no?: string;
    address_type?: string;
    floor_no?: string;
    address2?: string;
    title?: string;
    country_code?: string;
    geo_location?: any;
    middle_name?: string;
    external_customer_code?: string;
    primary_email: string;
    landmark?: string;
    slot?: any[];
    customer_code?: string;
    country: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ProcessingDates = {
    pack_by_date?: string;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
    confirm_by_date?: string;
    dispatch_after_date?: string;
};
type Tax = {
    amount: any;
    breakup?: any[];
    rate: number;
    name: string;
};
type Charge = {
    name: string;
    amount: any;
    type: string;
    tax?: Tax;
    code?: string;
};
type LineItem = {
    quantity?: number;
    seller_identifier: string;
    charges?: Charge[];
    meta?: any;
    custom_messasge?: string;
    external_line_id?: string;
};
type Shipment = {
    location_id: number;
    external_shipment_id?: string;
    priority?: number;
    meta?: any;
    processing_dates?: ProcessingDates;
    line_items: LineItem[];
};
type BillingInfo = {
    last_name?: string;
    address1: string;
    first_name: string;
    primary_mobile_number: string;
    state_code?: string;
    alternate_email?: string;
    city: string;
    alternate_mobile_number?: string;
    state: string;
    gender?: string;
    pincode: string;
    house_no?: string;
    floor_no?: string;
    address2?: string;
    title?: string;
    country_code?: string;
    middle_name?: string;
    external_customer_code?: string;
    primary_email: string;
    customer_code?: string;
    country: string;
};
type PaymentMethod = {
    refund_by: string;
    mode: string;
    name: string;
    amount: number;
    transaction_data?: any;
    meta?: any;
    collect_by: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type CreateOrderAPI = {
    shipping_info: ShippingInfo;
    tax_info?: TaxInfo;
    external_creation_date?: string;
    shipments: Shipment[];
    charges?: Charge[];
    currency_info?: any;
    meta?: any;
    billing_info: BillingInfo;
    payment_info: PaymentInfo;
    external_order_id?: string;
};
type CreateOrderErrorReponse = {
    status: number;
    message: string;
    info?: any;
    stack_trace?: string;
    meta?: string;
    code?: string;
    request_id?: string;
    exception?: string;
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
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
    payment_info?: CreateChannelPaymentInfo;
    logo_url?: any;
    lock_states?: string[];
    shipment_assignment?: string;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    is_upserted?: boolean;
    acknowledged?: boolean;
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
    message?: string[];
    success?: boolean;
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    end_date: string;
    mobile: number;
    order_details?: FyndOrderIdList[];
    start_date: string;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    words?: string[];
    _custom_json?: any;
    result: SearchKeywordResult;
    app_id?: string;
    is_active?: boolean;
};
type GetSearchWordsData = {
    words?: string[];
    _custom_json?: any;
    result?: any;
    app_id?: string;
    is_active?: boolean;
    uid?: string;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
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
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    results?: AutocompleteResult[];
};
type GetAutocompleteWordsData = {
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    results?: any[];
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    words?: string[];
    results?: any[];
    app_id?: string;
};
type ProductBundleItem = {
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    max_quantity: number;
    auto_select?: boolean;
    min_quantity: number;
    product_uid: number;
};
type ProductBundleRequest = {
    logo?: string;
    modified_by?: any;
    choice: string;
    slug: string;
    is_active: boolean;
    page_visibility?: string[];
    company_id?: number;
    same_store_assignment?: boolean;
    name: string;
    products: ProductBundleItem[];
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    meta?: any;
};
type GetProductBundleCreateResponse = {
    logo?: string;
    modified_by?: any;
    id?: string;
    choice: string;
    slug: string;
    is_active: boolean;
    page_visibility?: string[];
    company_id?: number;
    same_store_assignment?: boolean;
    name: string;
    products: ProductBundleItem[];
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    meta?: any;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    logo?: string;
    modified_by?: any;
    choice: string;
    slug: string;
    is_active: boolean;
    page_visibility?: string[];
    company_id?: number;
    same_store_assignment?: boolean;
    name: string;
    products: ProductBundleItem[];
    modified_on?: string;
    meta?: any;
};
type Size = {
    display?: string;
    is_available?: boolean;
    quantity?: number;
    value?: string;
};
type LimitedProductData = {
    sizes?: string[];
    country_of_origin?: string;
    attributes?: any;
    slug?: string;
    short_description?: string;
    images?: string[];
    identifier?: any;
    price?: any;
    name?: string;
    item_code?: string;
    quantity?: number;
    uid?: number;
};
type Price = {
    min_marked?: number;
    currency?: string;
    max_marked?: number;
    max_effective?: number;
    min_effective?: number;
};
type GetProducts = {
    sizes?: Size[];
    product_details?: LimitedProductData;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    price?: Price;
    max_quantity?: number;
    auto_select?: boolean;
    min_quantity?: number;
    product_uid?: number;
};
type GetProductBundleResponse = {
    logo?: string;
    choice?: string;
    slug?: string;
    is_active?: boolean;
    page_visibility?: string[];
    company_id?: number;
    same_store_assignment?: boolean;
    name?: string;
    products?: GetProducts[];
    meta?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    modified_by?: any;
    brand_id?: number;
    subtitle?: string;
    image?: string;
    id?: string;
    active?: boolean;
    company_id?: number;
    tag?: string;
    name: string;
    description?: string;
    created_by?: any;
    modified_on?: string;
    guide?: Guide;
    created_on?: string;
    title: string;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    modified_by?: any;
    brand_id?: number;
    subtitle?: string;
    id?: string;
    active?: boolean;
    company_id?: number;
    tag?: string;
    modified_on?: string;
    created_by?: any;
    name?: string;
    guide?: any;
    created_on?: string;
    title?: string;
};
type ApplicationItemMOQ = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    is_gift?: boolean;
    moq?: ApplicationItemMOQ;
    alt_text?: any;
    seo?: ApplicationItemSEO;
    _custom_meta?: MetaFields[];
    is_cod?: boolean;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
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
    is_gift?: boolean;
    moq?: MOQData;
    alt_text?: any;
    seo?: SEOData;
    is_cod?: boolean;
};
type GetConfigMetadataResponse = {
    values?: any[];
    condition?: any[];
    data: any[];
};
type AttributeDetailsGroup = {
    logo?: string;
    unit?: string;
    display_type: string;
    key?: string;
    priority: number;
    slug?: string;
    is_active: boolean;
    name: string;
};
type AppConfigurationDetail = {
    logo?: string;
    app_id: string;
    template_slugs?: string[];
    attributes?: AttributeDetailsGroup[];
    priority: number;
    slug: string;
    is_default: boolean;
    is_active: boolean;
    name?: string;
};
type ConfigErrorResponse = {
    message: string;
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
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    logo?: string;
    app_id: string;
    key: string;
    priority: number;
    default_key: string;
    is_default: boolean;
    is_active: boolean;
    name?: string;
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
    display?: string;
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
    variant?: any;
    similar?: any;
    detail?: any;
    compare?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationListingSortConfig = {
    logo?: string;
    key: string;
    priority: number;
    is_active: boolean;
    name?: string;
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
    sort?: string;
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map_values?: any[];
    condition?: string;
    map?: any;
};
type ConfigurationListingFilterConfig = {
    logo?: string;
    type: string;
    key: string;
    priority: number;
    is_active: boolean;
    display_name?: string;
    name?: string;
    value_config?: ConfigurationListingFilterValue;
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
    logo?: string;
    size: ProductSize;
    display_type: string;
    key: string;
    priority: number;
    is_active: boolean;
    name: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    logo?: string;
    size?: ProductSize;
    subtitle?: string;
    key: string;
    priority: number;
    is_active: boolean;
    title?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppConfiguration = {
    config_id?: string;
    config_type: string;
    modified_by?: any;
    app_id: string;
    type?: string;
    listing?: ConfigurationListing;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    product?: ConfigurationProduct;
};
type AppCatalogConfiguration = {
    config_id?: string;
    config_type: string;
    modified_by?: any;
    app_id: string;
    type?: string;
    id?: string;
    listing?: ConfigurationListing;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    product?: ConfigurationProduct;
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
    config_type: string;
    id?: string;
    app_id: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
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
    logo?: string;
    operators?: string[];
    kind?: string;
    display: string;
    name: string;
};
type ProductFiltersValue = {
    count?: number;
    selected_min?: number;
    is_selected: boolean;
    value: any;
    selected_max?: number;
    min?: number;
    display_format?: string;
    display: string;
    currency_symbol?: string;
    query_format?: string;
    max?: number;
    currency_code?: string;
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
type UserInfo = {
    username?: string;
    user_id?: string;
    email?: string;
    uid?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionSchedule = {
    end?: string;
    cron?: string;
    start?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CreateCollection = {
    _custom_json?: any;
    modified_by?: UserInfo;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    seo?: SeoDetail;
    is_visible?: boolean;
    query?: CollectionQuery[];
    logo: CollectionImage;
    slug: string;
    is_active?: boolean;
    _schedule?: CollectionSchedule;
    description?: string;
    created_by?: UserInfo;
    _locale_language?: any;
    sort_on?: string;
    type: string;
    priority?: number;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    tags?: string[];
    banners: CollectionBanner;
    published?: boolean;
    app_id: string;
    name: string;
    meta?: any;
};
type BannerImage = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionCreateResponse = {
    allow_sort?: boolean;
    badge?: any;
    query?: CollectionQuery[];
    logo?: BannerImage;
    slug?: string;
    is_active?: boolean;
    _schedule?: any;
    tag?: string[];
    description?: string;
    sort_on?: string;
    type?: string;
    priority?: number;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    app_id?: string;
    cron?: any;
    name?: string;
    meta?: any;
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
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type GetCollectionDetailNest = {
    allow_sort?: boolean;
    badge?: any;
    action?: Action;
    query?: CollectionQuery[];
    logo?: Media1;
    slug?: string;
    is_active?: boolean;
    _schedule?: any;
    tag?: string[];
    description?: string;
    uid?: string;
    type?: string;
    priority?: number;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    app_id?: string;
    cron?: any;
    name?: string;
    meta?: any;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionDetailResponse = {
    allow_sort?: boolean;
    badge?: any;
    query?: CollectionQuery[];
    logo?: Media1;
    slug?: string;
    is_active?: boolean;
    _schedule?: any;
    tag?: string[];
    description?: string;
    uid?: string;
    type?: string;
    priority?: number;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    app_id?: string;
    cron?: any;
    name?: string;
    meta?: any;
};
type UpdateCollection = {
    _custom_json?: any;
    modified_by?: UserInfo;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    seo?: SeoDetail;
    is_visible?: boolean;
    query?: CollectionQuery[];
    logo?: CollectionImage;
    slug?: string;
    is_active?: boolean;
    _schedule?: CollectionSchedule;
    description?: string;
    _locale_language?: any;
    sort_on?: string;
    type?: string;
    priority?: number;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    tags?: string[];
    banners?: CollectionBanner;
    published?: boolean;
    name?: string;
    meta?: any;
};
type CollectionItem = {
    priority?: number;
    item_id: number;
    action: string;
};
type CollectionItemUpdate = {
    allow_sort?: boolean;
    type?: string;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    items?: CollectionItem[];
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type ProductBrand = {
    logo?: Media1;
    name?: string;
    action?: Action;
    uid?: number;
};
type Price1 = {
    currency_symbol?: string;
    min?: number;
    max?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductDetailAttribute = {
    key?: string;
    value?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductListingDetail = {
    sellable?: boolean;
    item_type?: string;
    tryouts?: string[];
    medias?: Media1[];
    slug: string;
    discount?: string;
    brand?: ProductBrand;
    price?: ProductListingPrice;
    description?: string;
    item_code?: string;
    has_variant?: boolean;
    product_online_date?: string;
    rating_count?: number;
    uid?: number;
    image_nature?: string;
    type?: string;
    rating?: number;
    teaser_tag?: any;
    short_description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    similars?: string[];
    attributes?: any;
    promo_meta?: any;
    color?: string;
    name?: string;
    highlights?: string[];
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    page?: Page;
};
type CatalogInsightItem = {
    count?: number;
    sellable_count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightBrand = {
    available_articles?: number;
    total_articles?: number;
    article_freshness?: number;
    available_sizes?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    enabled?: boolean;
    platform?: string;
    company_id?: number;
    opt_level: string;
    brand_ids?: number[];
    store_ids?: number[];
};
type CompanyOptIn = {
    created_on: number;
    enabled: boolean;
    modified_by?: any;
    platform: string;
    company_id: number;
    modified_on: number;
    created_by?: any;
    opt_level: string;
    brand_ids: number[];
    store_ids: number[];
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    company_type?: string;
    business_type?: string;
    name?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    company_id?: number;
    brand_name?: string;
    brand_id?: number;
    total_article?: number;
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
    documents?: any[];
    display_name?: string;
    company_id?: number;
    manager?: any;
    timing?: any;
    name?: string;
    modified_on?: string;
    store_type?: string;
    additional_contacts?: any[];
    store_code?: string;
    address?: any;
    created_on?: string;
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
    range?: AttributeSchemaRange;
    format?: string;
    type: string;
    mandatory?: boolean;
    multi?: boolean;
    allowed_values?: string[];
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
    logo?: string;
    enabled_for_end_consumer?: boolean;
    details?: AttributeMasterDetails;
    schema?: AttributeMaster;
    filters?: AttributeMasterFilter;
    id?: string;
    is_nested?: boolean;
    slug?: string;
    name?: string;
    description?: string;
    departments?: string[];
    meta?: AttributeMasterMeta;
};
type CategoriesResponse = {
    slug?: string;
    slug_key?: string;
    template_slug?: string;
    name?: string;
    uid?: number;
};
type ProdcutTemplateCategoriesResponse = {
    items?: CategoriesResponse[];
    page?: Page;
};
type PTErrorResponse = {
    status?: number;
    code?: string;
    message?: string;
    errors?: any;
    meta?: any;
};
type DepartmentCreateUpdate = {
    logo: string;
    _cls?: string;
    _custom_json?: any;
    synonyms?: string[];
    platforms?: any;
    slug?: string;
    priority_order: number;
    is_active?: boolean;
    name: string;
    tags?: string[];
    uid?: number;
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
    username?: string;
    user_id?: string;
    uid?: string;
};
type GetDepartment = {
    logo?: string;
    modified_by?: UserSerializer;
    page_no?: number;
    synonyms?: string[];
    slug?: string;
    is_active?: boolean;
    priority_order?: number;
    search?: string;
    page_size?: number;
    item_type?: string;
    name?: string;
    created_by?: UserSerializer;
    modified_on?: string;
    created_on?: string;
    uid?: number;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    status?: number;
    code?: string;
    message?: string;
    errors?: any;
    meta?: any;
};
type UserDetail = {
    contact?: string;
    user_id: string;
    username: string;
    super_user?: boolean;
};
type DepartmentModel = {
    logo: string;
    _cls?: any;
    _custom_json?: any;
    modified_by?: UserDetail;
    verified_on?: string;
    _id?: any;
    slug: any;
    is_active?: boolean;
    priority_order: number;
    synonyms?: any[];
    modified_on: string;
    created_by?: UserDetail;
    name: any;
    verified_by?: UserDetail;
    created_on: string;
    uid: number;
};
type ProductTemplate = {
    logo?: string;
    is_expirable: boolean;
    modified_by?: any;
    is_archived?: boolean;
    attributes?: string[];
    slug: string;
    is_active?: boolean;
    tag?: string;
    name?: string;
    description?: string;
    categories?: string[];
    is_physical: boolean;
    created_by?: any;
    departments?: string[];
    modified_on?: string;
    created_on?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    logo?: string;
    is_expirable: boolean;
    id?: string;
    is_archived?: boolean;
    attributes?: string[];
    slug: string;
    is_active?: boolean;
    tag?: string;
    name?: string;
    description?: string;
    categories?: string[];
    is_physical: boolean;
    departments?: string[];
};
type Properties = {
    trader_type?: any;
    multi_size?: any;
    media?: any;
    is_dependent?: any;
    item_type?: any;
    size_guide?: any;
    category_slug?: any;
    brand_uid?: any;
    currency?: any;
    return_config?: any;
    slug?: any;
    is_active?: any;
    command?: any;
    description?: any;
    no_of_boxes?: any;
    item_code?: any;
    sizes?: any;
    hsn_code?: any;
    short_description?: any;
    teaser_tag?: any;
    product_publish?: any;
    tags?: any;
    country_of_origin?: any;
    variants?: any;
    product_group_tag?: any;
    trader?: any;
    name?: any;
    custom_order?: any;
    highlights?: any;
};
type GlobalValidation = {
    properties?: Properties;
    definitions?: any;
    type?: string;
    description?: string;
    required?: string[];
    title?: string;
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
type UserInfo1 = {
    username?: string;
    user_id?: string;
    email?: string;
    uid?: string;
};
type ProductTemplateExportResponse = {
    status?: string;
    completed_on?: string;
    notification_emails?: string[];
    filters?: any;
    url?: string;
    type?: string;
    modified_on?: string;
    created_by?: UserInfo1;
    task_id: string;
    seller_id: number;
};
type ProductDownloadsResponse = {
    items?: ProductTemplateExportResponse[];
};
type ProductTemplateExportFilterRequest = {
    brands?: string[];
    to_date?: string;
    catalogue_types: string[];
    templates: string[];
    from_date?: string;
};
type ProductTemplateDownloadsExport = {
    notification_emails?: string[];
    filters?: ProductTemplateExportFilterRequest;
    type?: string;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
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
    marketplaces?: CategoryMapping;
    hierarchy?: Hierarchy[];
    level: number;
    synonyms?: string[];
    priority?: number;
    slug?: string;
    is_active: boolean;
    media?: Media2;
    name: string;
    tryouts?: string[];
    departments: number[];
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    marketplaces?: CategoryMapping;
    modified_by?: any;
    id?: string;
    hierarchy?: Hierarchy[];
    level: number;
    synonyms?: string[];
    priority?: number;
    slug?: string;
    is_active: boolean;
    media?: Media2;
    name: string;
    created_by?: any;
    tryouts?: string[];
    modified_on?: string;
    departments: number[];
    created_on?: string;
    uid?: number;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type Trader = {
    address?: string[];
    name: any;
    type?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
};
type ProductCreateUpdateSchemaV2 = {
    requester?: string;
    _custom_json?: any;
    multi_size?: boolean;
    is_image_less_product?: boolean;
    media?: Media1[];
    is_dependent?: boolean;
    item_type: string;
    size_guide?: string;
    action?: string;
    category_slug: string;
    change_request_id?: any;
    brand_uid: number;
    net_quantity?: NetQuantity;
    variant_group?: any;
    currency: string;
    return_config: ReturnConfig;
    slug: string;
    is_active?: boolean;
    description?: string;
    no_of_boxes?: number;
    item_code: string;
    uid?: number;
    sizes: any[];
    short_description?: string;
    teaser_tag?: TeaserTag;
    product_publish?: ProductPublish;
    company_id: number;
    template_tag: string;
    departments: number[];
    is_set?: boolean;
    tags?: string[];
    country_of_origin: string;
    bulk_job_id?: string;
    variants?: any;
    product_group_tag?: string[];
    attributes?: any;
    tax_identifier: TaxIdentifier;
    variant_media?: any;
    trader: Trader[];
    name: string;
    custom_order?: CustomOrder;
    highlights?: string[];
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type ReturnConfigResponse = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Logo = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type ProductPublish1 = {
    is_set?: boolean;
    product_online_date?: string;
};
type Image = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type ProductSchemaV2 = {
    l3_mapping?: string[];
    _custom_json?: any;
    modified_by?: any;
    multi_size?: boolean;
    verified_on?: string;
    is_image_less_product?: boolean;
    all_identifiers?: string[];
    media?: Media1[];
    is_dependent?: boolean;
    item_type?: string;
    size_guide?: string;
    is_physical?: boolean;
    modified_on?: string;
    category_slug?: string;
    verified_by?: VerifiedBy;
    brand_uid?: number;
    category?: any;
    created_on?: string;
    net_quantity?: NetQuantityResponse;
    currency?: string;
    variant_group?: any;
    id?: string;
    return_config?: ReturnConfigResponse;
    moq?: any;
    slug?: string;
    is_active?: boolean;
    brand?: Brand;
    description?: string;
    created_by?: any;
    no_of_boxes?: number;
    item_code?: string;
    category_uid?: number;
    all_company_ids?: number[];
    uid?: number;
    image_nature?: string;
    sizes?: any[];
    is_expirable?: boolean;
    hsn_code?: string;
    all_sizes?: any[];
    short_description?: string;
    product_publish?: ProductPublish1;
    primary_color?: string;
    teaser_tag?: any;
    company_id?: number;
    template_tag?: string;
    departments?: number[];
    is_set?: boolean;
    tags?: string[];
    country_of_origin?: string;
    variants?: any;
    product_group_tag?: string[];
    attributes?: any;
    stage?: string;
    tax_identifier?: any;
    images?: Image[];
    color?: string;
    variant_media?: any;
    trader?: Trader[];
    name?: string;
    pending?: string;
    custom_order?: any;
    highlights?: string[];
};
type ProductListingResponseV2 = {
    items?: ProductSchemaV2[];
    page?: Page;
};
type ProductVariants = {
    media?: Media1[];
    name?: string;
    category_uid?: number;
    item_code?: string;
    brand_uid?: number;
    uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    modified_by?: any;
    filters: AttributeMasterFilter;
    is_nested?: boolean;
    modified_on?: string;
    created_on?: string;
    logo?: string;
    variant?: boolean;
    synonyms?: any;
    slug: string;
    description?: string;
    created_by?: any;
    raw_key?: string;
    details: AttributeMasterDetails;
    unit?: string;
    schema: AttributeMaster;
    departments: string[];
    tags?: string[];
    enabled_for_end_consumer?: boolean;
    name?: string;
    suggestion?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: ProductSchemaV2;
};
type ValidateIdentifier = {
    gtin_type: string;
    gtin_value: string;
    primary?: boolean;
};
type AllSizes = {
    size: any;
    item_weight_unit_of_measure: any;
    item_length: number;
    item_weight: number;
    item_dimensions_unit_of_measure: string;
    identifiers?: ValidateIdentifier[];
    item_width: number;
    item_height: number;
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
    l3_mapping?: string[];
    _custom_json?: any;
    modified_by?: any;
    multi_size?: boolean;
    verified_on?: string;
    is_image_less_product?: boolean;
    all_identifiers?: string[];
    media?: Media1[];
    is_dependent?: boolean;
    item_type?: string;
    size_guide?: string;
    is_physical?: boolean;
    modified_on?: string;
    category_slug?: string;
    verified_by?: VerifiedBy;
    brand_uid?: number;
    category?: any;
    created_on?: string;
    net_quantity?: NetQuantityResponse;
    currency?: string;
    variant_group?: any;
    id?: string;
    return_config?: ReturnConfigResponse;
    moq?: any;
    slug?: string;
    is_active?: boolean;
    brand?: Brand;
    description?: string;
    created_by?: any;
    no_of_boxes?: number;
    item_code?: string;
    category_uid?: number;
    all_company_ids?: number[];
    uid?: number;
    image_nature?: string;
    sizes?: any[];
    is_expirable?: boolean;
    hsn_code?: string;
    all_sizes?: any[];
    short_description?: string;
    product_publish?: ProductPublished;
    primary_color?: string;
    teaser_tag?: any;
    company_id?: number;
    template_tag?: string;
    departments?: number[];
    is_set?: boolean;
    tags?: string[];
    country_of_origin?: string;
    variants?: any;
    product_group_tag?: string[];
    attributes?: any;
    stage?: string;
    tax_identifier?: any;
    images?: Image[];
    color?: string;
    variant_media?: any;
    trader?: Trader[];
    name?: string;
    pending?: string;
    custom_order?: any;
    highlights?: string[];
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type BulkJob = {
    file_path?: string;
    modified_by?: UserInfo1;
    failed_records?: any[];
    stage?: string;
    tracking_url?: string;
    total?: number;
    is_active?: boolean;
    cancelled_records?: any[];
    company_id: number;
    cancelled?: number;
    modified_on?: string;
    created_by?: UserInfo1;
    template_tag?: string;
    succeed?: number;
    custom_template_tag?: string;
    created_on: string;
    failed?: number;
};
type BulkResponse = {
    batch_id: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    modified_on?: string;
    created_by?: UserInfo1;
    created_on: string;
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    file_path?: string;
    modified_by?: UserDetail1;
    failed_records?: string[];
    stage?: string;
    total?: number;
    is_active?: boolean;
    cancelled_records?: string[];
    company_id?: number;
    cancelled?: number;
    modified_on?: string;
    created_by?: UserDetail1;
    template?: ProductTemplate;
    template_tag?: string;
    succeed?: number;
    created_on?: string;
    failed?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    company_id: number;
    template_tag: string;
    batch_id: string;
    data: any[];
};
type ProductTagsViewResponse = {
    items?: string[];
};
type ProductBulkAssets = {
    company_id?: number;
    url: string;
    user: any;
};
type UserCommon = {
    company_id?: number;
    user_id?: string;
    username?: string;
};
type Items = {
    file_path?: string;
    modified_by?: UserCommon;
    id?: string;
    failed_records?: string[];
    stage?: string;
    tracking_url?: string;
    total?: number;
    is_active?: boolean;
    cancelled_records?: string[];
    company_id?: number;
    retry?: number;
    cancelled?: number;
    modified_on?: string;
    created_by?: UserCommon;
    succeed?: number;
    created_on?: string;
    failed?: number;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
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
type GTIN = {
    gtin_type: string;
    gtin_value: any;
    primary?: boolean;
};
type InvSize = {
    size: any;
    item_weight_unit_of_measure?: string;
    currency: string;
    item_height?: number;
    set?: InventorySet;
    item_length?: number;
    item_weight?: number;
    item_dimensions_unit_of_measure?: string;
    quantity: number;
    store_code: string;
    price?: number;
    identifiers: GTIN[];
    expiration_date?: string;
    is_set?: boolean;
    item_width?: number;
    price_effective: number;
    price_transfer?: number;
};
type ItemQuery = {
    item_code?: string;
    brand_uid?: number;
    uid?: number;
};
type InventoryRequest = {
    company_id: number;
    sizes: InvSize[];
    item: ItemQuery;
};
type InventoryResponse = {
    inventory_updated_on?: string;
    uid?: string;
    currency?: string;
    seller_identifier?: string;
    size?: string;
    item_id?: number;
    price?: number;
    identifiers?: any;
    sellable_quantity?: number;
    store?: any;
    quantity?: number;
    price_effective?: number;
    price_transfer?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
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
type PriceMeta = {
    currency: string;
    updated_at?: string;
    effective: number;
    transfer: number;
    tp_notes?: any;
    marked: number;
};
type DimensionResponse = {
    length: number;
    unit: string;
    width: number;
    is_default: boolean;
    height: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    damaged?: QuantityBase;
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
    not_available?: QuantityBase;
};
type CompanyMeta = {
    id: number;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type InventorySellerResponse = {
    size: string;
    seller_identifier: string;
    _custom_json?: any;
    track_inventory?: boolean;
    modified_by?: UserSerializer;
    fynd_item_code: string;
    weight: WeightResponse;
    trace_id?: string;
    added_on_store?: string;
    store: StoreMeta;
    total_quantity: number;
    return_config?: ReturnConfig1;
    manufacturer: ManufacturerResponse;
    is_active?: boolean;
    brand: BrandMeta;
    price: PriceMeta;
    created_by?: UserSerializer;
    dimension: DimensionResponse;
    uid: string;
    expiration_date?: string;
    quantities?: Quantities;
    set?: InventorySet;
    item_id: number;
    raw_meta?: any;
    is_set?: boolean;
    tags?: string[];
    country_of_origin: string;
    stage?: string;
    fynd_article_code: string;
    tax_identifier?: any;
    company: CompanyMeta;
    identifier: any;
    fynd_meta?: any;
    trader?: Trader1[];
    fragile: boolean;
    meta?: any;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type ArticleStoreResponse = {
    store_code?: string;
    store_type?: string;
    name?: string;
    uid?: number;
};
type ReturnConfig2 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
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
type PriceArticle = {
    currency?: string;
    effective?: number;
    transfer?: number;
    tp_notes?: any;
    marked?: number;
};
type DimensionResponse1 = {
    length?: number;
    unit?: string;
    height?: number;
    width?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    damaged?: Quantity;
    order_committed?: Quantity;
    sellable?: Quantity;
    not_available?: Quantity;
};
type CompanyMeta1 = {
    id?: number;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type GetInventories = {
    size?: string;
    seller_identifier?: string;
    track_inventory?: boolean;
    modified_by?: UserSerializer;
    weight?: WeightResponse1;
    trace_id?: string;
    store?: ArticleStoreResponse;
    inventory_updated_on?: string;
    id?: string;
    total_quantity?: number;
    return_config?: ReturnConfig2;
    manufacturer?: ManufacturerResponse1;
    platforms?: any;
    brand?: BrandMeta1;
    price?: PriceArticle;
    created_by?: UserSerializer;
    dimension?: DimensionResponse1;
    expiration_date?: string;
    uid?: string;
    quantities?: QuantitiesArticle;
    item_id?: number;
    is_set?: boolean;
    tags?: string[];
    country_of_origin?: string;
    stage?: string;
    date_meta?: DateMeta;
    tax_identifier?: any;
    company?: CompanyMeta1;
    identifier?: any;
    trader?: Trader2[];
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    file_path?: string;
    modified_by?: any;
    id?: string;
    failed_records?: string[];
    stage?: string;
    total?: number;
    is_active?: boolean;
    cancelled_records?: string[];
    company_id?: number;
    cancelled?: number;
    modified_on?: string;
    created_by?: any;
    succeed?: number;
    created_on?: string;
    failed?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    seller_identifier: string;
    currency?: string;
    item_weight_unit_of_measure?: string;
    total_quantity?: number;
    item_dimensions_unit_of_measure?: string;
    price_marked?: number;
    price?: number;
    trace_id?: string;
    store_code: string;
    tags?: string[];
    quantity?: number;
    price_effective?: number;
    expiration_date?: string;
};
type InventoryBulkRequest = {
    company_id: number;
    sizes: InventoryJobPayload[];
    batch_id: string;
    user?: any;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    status?: string;
    notification_emails?: string[];
    filters?: any;
    type?: string;
    modified_on?: string;
    created_by?: string;
    task_id: string;
    created_on?: string;
    seller_id: number;
};
type InventoryExportQuantityFilter = {
    operators: string;
    min?: number;
    max?: number;
};
type InventoryExportAdvanceOption = {
    to_date?: string;
    from_date?: string;
    brand_ids?: number[];
    store_ids?: number[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryExportJob = {
    status?: string;
    completed_on?: string;
    notification_emails?: string[];
    filters?: InventoryExportAdvanceOption;
    url?: string;
    type: string;
    task_id: string;
    seller_id: number;
};
type InventoryExportFilter = {
    to_date?: string;
    from_date?: string;
    brand_ids?: number[];
    store_ids: number[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryCreateRequest = {
    data?: string[];
    notification_emails?: string[];
    filters: InventoryExportFilter;
    type?: string;
};
type InventoryJobFilters = {
    brands?: string[];
    stores?: string[];
    to_date?: string;
    quantity?: InventoryExportQuantityFilter;
    from_date?: string;
};
type InventoryJobDetailResponse = {
    status?: any;
    completed_on?: string;
    notification_emails?: string[];
    filters: InventoryJobFilters;
    url: string;
    type?: string;
    id: string;
    cancelled_by?: UserDetail;
    modified_on?: string;
    created_by?: UserDetail;
    task_id: string;
    cancelled_on?: string;
    created_on?: string;
    seller_id: number;
};
type InventoryExportJobListResponse = {
    items: InventoryJobDetailResponse;
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
    total_quantity?: number;
    store_id: number;
    price_marked?: number;
    trace_id?: string;
    tags?: string[];
    price_effective?: number;
    expiration_date?: string;
};
type InventoryRequestSchemaV2 = {
    company_id: number;
    meta?: any;
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
    tax1: number;
    uid?: number;
    tax_on_mrp: boolean;
    hsn_code: string;
    is_active?: boolean;
    threshold1: number;
    company_id: number;
    hs2_code: string;
    threshold2?: number;
    tax_on_esp?: boolean;
    tax2?: number;
};
type HsnCodesObject = {
    tax1?: number;
    tax_on_mrp?: boolean;
    id?: string;
    hsn_code?: string;
    threshold1?: number;
    company_id?: number;
    hs2_code?: string;
    threshold2?: number;
    modified_on?: string;
    tax_on_esp?: boolean;
    tax2?: number;
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
    effective_date: string;
    rate: number;
    threshold: number;
    cess?: number;
};
type HSNDataInsertV2 = {
    modified_by?: any;
    reporting_hsn: string;
    type: string;
    hsn_code: string;
    country_code: string;
    description: string;
    created_by?: any;
    modified_on?: string;
    hsn_code_id?: string;
    taxes: TaxSlab[];
    created_on?: string;
};
type PageResponse = {
    size?: number;
    item_total?: number;
    current?: string;
    has_next?: boolean;
    has_previous?: boolean;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    logo?: Media;
    discount?: string;
    slug?: string;
    name?: string;
    action?: Action;
    departments?: string[];
    banners?: ImageUrls;
    uid?: number;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    logo?: Media;
    slug?: string;
    priority_order?: number;
    name?: string;
    uid?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    _custom_json?: any;
    slug?: string;
    name?: string;
    action?: Action;
    childs?: any[];
    banners?: ImageUrls;
    uid?: number;
};
type SecondLevelChild = {
    _custom_json?: any;
    slug?: string;
    name?: string;
    action?: Action;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    uid?: number;
};
type Child = {
    _custom_json?: any;
    slug?: string;
    name?: string;
    action?: Action;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    uid?: number;
};
type CategoryItems = {
    slug?: string;
    name?: string;
    action?: Action;
    childs?: Child[];
    banners?: ImageUrls;
    uid?: number;
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
    sort_on?: ProductSortOn[];
    operators?: any;
    filters?: ProductFilters[];
    page: Page;
    items?: ProductListingDetail[];
};
type ProductDetail = {
    item_type?: string;
    tryouts?: string[];
    medias?: Media1[];
    slug: string;
    brand?: ProductBrand;
    description?: string;
    item_code?: string;
    has_variant?: boolean;
    product_online_date?: string;
    rating_count?: number;
    uid?: number;
    image_nature?: string;
    type?: string;
    rating?: number;
    teaser_tag?: any;
    short_description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    similars?: string[];
    attributes?: any;
    promo_meta?: any;
    color?: string;
    name?: string;
    highlights?: string[];
};
type InventoryPage = {
    next_id?: string;
    item_total: number;
    type: string;
    has_next?: boolean;
    has_previous?: boolean;
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
    size: string;
    ignored_stores?: number[];
    item_id: number;
};
type AssignStoreArticle = {
    meta?: any;
    quantity?: number;
    article_assignment?: ArticleAssignment;
    group_id?: string;
    query?: ArticleQuery;
};
type AssignStore = {
    pincode: string;
    app_id: string;
    channel_type?: string;
    company_id?: number;
    articles: AssignStoreArticle[];
    channel_identifier?: string;
    store_ids?: number[];
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    strategy_wise_listing?: any[];
    status: boolean;
    size: string;
    store_pincode?: number;
    group_id?: string;
    _id?: string;
    store_id?: number;
    item_id: number;
    quantity: number;
    company_id?: number;
    price_marked?: number;
    s_city?: string;
    index?: number;
    article_assignment: ArticleAssignment1;
    meta?: any;
    price_effective?: number;
    uid?: string;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
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
type InvoiceCredSerializer = {
    enabled?: boolean;
    password?: string;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type GetAddressSerializer = {
    state?: string;
    address_type?: string;
    pincode?: number;
    longitude?: number;
    address1?: string;
    address2?: string;
    landmark?: string;
    country_code?: string;
    city?: string;
    country?: string;
    latitude?: number;
};
type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobile_no: SellerPhoneNumber;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetCompanySerializer = {
    business_type?: string;
    modified_by?: UserSerializer2;
    stage?: string;
    verified_on?: string;
    company_type?: string;
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    created_by?: UserSerializer2;
    name?: string;
    reject_reason?: string;
    verified_by?: UserSerializer2;
    created_on?: string;
    uid?: number;
};
type GetLocationSerializer = {
    _custom_json?: any;
    modified_by?: UserSerializer1;
    notification_emails?: string[];
    verified_on?: string;
    modified_on?: string;
    product_return_config?: ProductReturnConfigSerializer;
    verified_by?: UserSerializer1;
    warnings?: any;
    created_on?: string;
    code: string;
    phone_number: string;
    display_name: string;
    timing?: LocationDayWiseSerializer[];
    store_type?: string;
    created_by?: UserSerializer1;
    gst_credentials?: InvoiceDetailsSerializer;
    contact_numbers?: SellerPhoneNumber[];
    address: GetAddressSerializer;
    uid?: number;
    manager?: LocationManagerSerializer;
    integration_type?: LocationIntegrationType;
    stage?: string;
    documents?: Document[];
    company?: GetCompanySerializer;
    name: string;
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
    _custom_json?: any;
    app_id: string;
    is_active?: boolean;
    name?: string;
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
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type GetCompanyProfileSerializerResponse = {
    business_info?: string;
    modified_on?: string;
    created_on?: string;
    business_details?: BusinessDetails;
    uid: number;
    taxes?: CompanyTaxesSerializer[];
    company_type: string;
    name?: string;
    business_type: string;
    contact_details?: ContactDetails;
    franchise_enabled?: boolean;
    business_country_info?: BusinessCountryInfo;
    notification_emails?: string[];
    _custom_json?: any;
    stage?: string;
    mode?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    documents?: Document[];
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer;
    warnings?: any;
    verified_on?: string;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type CreateUpdateAddressSerializer = {
    address2?: string;
    state: string;
    latitude: number;
    landmark?: string;
    pincode: number;
    longitude: number;
    address_type: string;
    country_code?: string;
    city: string;
    country: string;
    address1: string;
};
type UpdateCompany = {
    business_info?: string;
    reject_reason?: string;
    _custom_json?: any;
    taxes?: CompanyTaxesSerializer1[];
    documents?: Document[];
    addresses?: CreateUpdateAddressSerializer[];
    name?: string;
    business_type?: string;
    business_details?: BusinessDetails;
    contact_details?: ContactDetails;
    warnings?: any;
    franchise_enabled?: boolean;
    company_type?: string;
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
    brand?: DocumentsObj;
    company_documents?: DocumentsObj;
    uid?: number;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    product?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    modified_on?: string;
    created_on?: string;
    uid?: number;
    synonyms?: string[];
    name: string;
    reject_reason?: string;
    _custom_json?: any;
    stage?: string;
    mode?: string;
    created_by?: UserSerializer;
    banner?: BrandBannerSerializer;
    description?: string;
    slug_key?: string;
    modified_by?: UserSerializer;
    verified_by?: UserSerializer;
    warnings?: any;
    verified_on?: string;
    logo?: string;
    _locale_language?: any;
};
type CreateUpdateBrandRequestSerializer = {
    _custom_json?: any;
    synonyms?: string[];
    name: string;
    _locale_language?: any;
    brand_tier?: string;
    uid?: number;
    company_id?: number;
    description?: string;
    logo: string;
    banner?: BrandBannerSerializer;
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanySerializer = {
    reject_reason?: string;
    modified_on?: string;
    created_on?: string;
    company_type: string;
    notification_emails?: string[];
    _custom_json?: any;
    business_country_info?: BusinessCountryInfo;
    stage?: string;
    addresses?: GetAddressSerializer[];
    name?: string;
    business_type: string;
    market_channels?: string[];
    created_by?: UserSerializer;
    uid?: number;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    verified_on?: string;
    details?: CompanyDetails;
};
type CompanyBrandSerializer = {
    reject_reason?: string;
    modified_on?: string;
    created_on?: string;
    company?: CompanySerializer;
    brand?: GetBrandResponseSerializer;
    stage?: string;
    created_by?: UserSerializer;
    uid?: number;
    verified_by?: UserSerializer;
    warnings?: any;
    modified_by?: UserSerializer;
    verified_on?: string;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    company: number;
    uid?: number;
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
    address2?: string;
    state?: string;
    latitude: number;
    landmark?: string;
    pincode?: number;
    longitude: number;
    address_type?: string;
    country_code?: string;
    city?: string;
    country?: string;
    address1?: string;
};
type LocationSerializer = {
    _custom_json?: any;
    holiday?: HolidaySchemaSerializer[];
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigSerializer;
    code: string;
    company: number;
    stage?: string;
    name: string;
    store_type?: string;
    address: AddressSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    uid?: number;
    timing?: LocationDayWiseSerializer[];
    manager?: LocationManagerSerializer;
    warnings?: any;
    display_name: string;
    documents?: Document[];
    contact_numbers?: SellerPhoneNumber[];
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
    cod_threshold_amount?: number;
    online_threshold_amount?: number;
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
type RuleDefinition = {
    currency_code?: string;
    type: string;
    auto_apply?: boolean;
    applicable_on: string;
    calculate_on: string;
    scope?: string[];
    value_type: string;
    is_exact?: boolean;
};
type Rule = {
    max?: number;
    discount_qty?: number;
    value?: number;
    key?: number;
    min?: number;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
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
type PriceRange = {
    min?: number;
    max?: number;
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
type Restrictions = {
    coupon_allowed?: boolean;
    user_type?: string;
    post_order?: PostOrder;
    uses?: UsesRestriction;
    bulk_bundle?: BulkBundleRestriction;
    price_range?: PriceRange;
    user_groups?: number[];
    payments?: any;
    ordering_stores?: number[];
    platforms?: string[];
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    title?: string;
    remove?: DisplayMetaDict;
    subtitle?: string;
    description?: string;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponSchedule = {
    start?: string;
    next_schedule?: any[];
    duration?: number;
    end?: string;
    cron?: string;
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type Validity = {
    priority?: number;
};
type CouponAdd = {
    rule_definition: RuleDefinition;
    identifiers: Identifier;
    rule: Rule[];
    restrictions?: Restrictions;
    validation?: Validation;
    display_meta: DisplayMeta;
    type_slug: string;
    date_meta?: CouponDateMeta;
    author?: CouponAuthor;
    ownership: Ownership;
    tags?: string[];
    _schedule?: CouponSchedule;
    state?: State;
    action?: CouponAction;
    code: string;
    validity: Validity;
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
    rule_definition: RuleDefinition;
    identifiers: Identifier;
    rule: Rule[];
    restrictions?: Restrictions;
    validation?: Validation;
    display_meta: DisplayMeta;
    type_slug: string;
    date_meta?: CouponDateMeta;
    author?: CouponAuthor;
    ownership: Ownership;
    tags?: string[];
    _schedule?: CouponSchedule;
    state?: State;
    action?: CouponAction;
    code: string;
    validity: Validity;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type DisplayMeta1 = {
    description?: string;
    offer_text?: string;
    name?: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
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
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue1;
    type: string;
};
type Restrictions1 = {
    post_order?: PostOrder1;
    anonymous_users?: boolean;
    uses: UsesRestriction1;
    user_groups?: number[];
    user_registered?: UserRegistered;
    payments?: PromotionPaymentModes[];
    platforms?: string[];
    order_quantity?: number;
    user_id?: string[];
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CompareObject = {
    less_than_equals?: number;
    less_than?: number;
    greater_than?: number;
    equals?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    item_store?: number[];
    available_zones?: string[];
    all_items?: boolean;
    item_size?: string[];
    item_id?: number[];
    item_exclude_category?: number[];
    item_exclude_store?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_brand?: number[];
    cart_quantity?: CompareObject;
    buy_rules?: string[];
    cart_total?: CompareObject;
    item_company?: number[];
    item_exclude_sku?: string[];
    item_brand?: number[];
    item_exclude_id?: number[];
    item_exclude_company?: number[];
    cart_unique_item_amount?: CompareObject;
    item_sku?: string[];
    item_category?: number[];
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type DiscountOffer = {
    min_offer_quantity?: number;
    discount_amount?: number;
    discount_percentage?: number;
    partial_can_ret?: boolean;
    max_usage_per_transaction?: number;
    max_offer_quantity?: number;
    discount_price?: number;
    max_discount_amount?: number;
    code?: string;
    apportion_discount?: boolean;
};
type DiscountRule = {
    item_criteria: ItemCriteria;
    discount_type: string;
    buy_condition: string;
    offer: DiscountOffer;
};
type PromotionSchedule = {
    start: string;
    next_schedule?: any[];
    duration?: number;
    published: boolean;
    end?: string;
    cron?: string;
};
type PromotionListItem = {
    display_meta: DisplayMeta1;
    currency?: string;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    promotion_type: string;
    stackable?: boolean;
    apply_priority?: number;
    _custom_json?: any;
    restrictions?: Restrictions1;
    calculate_on?: string;
    author?: PromotionAuthor;
    code?: string;
    buy_rules: any;
    visiblility?: Visibility;
    application_id: string;
    post_order_action?: PromotionAction;
    promo_group: string;
    discount_rules: DiscountRule[];
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    mode: string;
    apply_exclusive?: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    display_meta: DisplayMeta1;
    currency?: string;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    promotion_type: string;
    stackable?: boolean;
    apply_priority?: number;
    _custom_json?: any;
    restrictions?: Restrictions1;
    calculate_on?: string;
    author?: PromotionAuthor;
    code?: string;
    buy_rules: any;
    visiblility?: Visibility;
    application_id: string;
    post_order_action?: PromotionAction;
    promo_group: string;
    discount_rules: DiscountRule[];
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    mode: string;
    apply_exclusive?: string;
};
type PromotionUpdate = {
    display_meta: DisplayMeta1;
    currency?: string;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    promotion_type: string;
    stackable?: boolean;
    apply_priority?: number;
    _custom_json?: any;
    restrictions?: Restrictions1;
    calculate_on?: string;
    author?: PromotionAuthor;
    code?: string;
    buy_rules: any;
    visiblility?: Visibility;
    application_id: string;
    post_order_action?: PromotionAction;
    promo_group: string;
    discount_rules: DiscountRule[];
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    mode: string;
    apply_exclusive?: string;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    entity_type?: string;
    title?: string;
    type?: string;
    subtitle?: string;
    created_on?: string;
    example?: string;
    entity_slug?: string;
    description?: string;
    is_hidden?: boolean;
    modified_on?: string;
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
    currency_code?: string;
    currency_symbol?: string;
    message?: string[];
    value?: number;
    display?: string;
    key?: string;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    description?: string;
    total?: number;
    applicable?: number;
};
type CouponBreakup = {
    is_applied?: boolean;
    title?: string;
    max_discount_value?: number;
    type?: string;
    coupon_value?: number;
    coupon_type?: string;
    message?: string;
    sub_title?: string;
    uid?: string;
    minimum_cart_value?: number;
    value?: number;
    description?: string;
    code?: string;
};
type RawBreakup = {
    cod_charge?: number;
    subtotal?: number;
    gift_card?: number;
    gst_charges?: number;
    mrp_total?: number;
    delivery_charge?: number;
    total?: number;
    coupon?: number;
    discount?: number;
    convenience_fee?: number;
    vog?: number;
    fynd_cash?: number;
    you_saved?: number;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
    raw?: RawBreakup;
};
type ProductPrice = {
    currency_code?: string;
    add_on?: number;
    marked?: number;
    currency_symbol?: string;
    effective?: number;
    selling?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductAvailability = {
    sizes?: string[];
    is_valid?: boolean;
    deliverable?: boolean;
    out_of_stock?: boolean;
    other_store_quantity?: number;
};
type PromoMeta = {
    message?: string;
};
type FreeGiftItem = {
    item_name?: string;
    item_price_details?: any;
    item_images_url?: string[];
    item_brand_name?: string;
    item_id?: number;
    item_slug?: string;
};
type AppliedFreeArticles = {
    quantity?: number;
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
    article_id?: string;
};
type DiscountRulesApp = {
    item_criteria?: any;
    matched_buy_rules?: string[];
    offer?: any;
    raw_offer?: any;
};
type AppliedPromotion = {
    promotion_group?: string;
    promotion_name?: string;
    amount?: number;
    applied_free_articles?: AppliedFreeArticles[];
    article_quantity?: number;
    discount_rules?: DiscountRulesApp[];
    promo_id?: string;
    offer_text?: string;
    promotion_type?: string;
    buy_rules?: BuyRules[];
    mrp_promotion?: boolean;
};
type BasePrice = {
    marked?: number;
    currency_symbol?: string;
    effective?: number;
    currency_code?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type ProductArticle = {
    price?: ArticlePriceInfo;
    is_gift_visible?: boolean;
    extra_meta?: any;
    size?: string;
    type?: string;
    gift_card?: any;
    seller?: BaseInfo;
    parent_item_identifiers?: any;
    uid?: string;
    product_group_tags?: string[];
    store?: BaseInfo;
    seller_identifier?: string;
    quantity?: number;
    cart_item_meta?: any;
    identifier?: any;
};
type CouponDetails = {
    discount_total_quantity?: number;
    discount_single_quantity?: number;
    code?: string;
};
type Tags = {
    tags?: any;
};
type ProductImage = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    query?: ActionQuery;
    url?: string;
    type?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type CartProduct = {
    _custom_json?: any;
    type?: string;
    teaser_tag?: Tags;
    brand?: BaseInfo;
    uid?: number;
    images?: ProductImage[];
    action?: ProductAction;
    tags?: string[];
    name?: string;
    categories?: CategoryInfo[];
    slug?: string;
    item_code?: string;
};
type CartProductInfo = {
    price?: ProductPriceInfo;
    is_set?: boolean;
    identifiers: CartProductIdentifer;
    availability?: ProductAvailability;
    message?: string;
    coupon_message?: string;
    bulk_offer?: any;
    promo_meta?: PromoMeta;
    promotions_applied?: AppliedPromotion[];
    parent_item_identifiers?: any;
    price_per_unit?: ProductPriceInfo;
    article?: ProductArticle;
    quantity?: number;
    discount?: string;
    key?: string;
    coupon?: CouponDetails;
    product?: CartProduct;
};
type OpenapiCartDetailsResponse = {
    message?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    message?: string;
    errors?: any;
    success?: boolean;
};
type ShippingAddress = {
    phone?: number;
    meta?: any;
    address_type?: string;
    landmark?: string;
    country_code?: string;
    pincode?: number;
    area_code_slug?: string;
    address?: string;
    area?: string;
    email?: string;
    area_code: string;
    city?: string;
    name?: string;
    state?: string;
    country?: string;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
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
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
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
    price_effective: number;
    extra_meta?: any;
    meta?: CartItemMeta;
    coupon_effective_discount: number;
    loyalty_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    price_marked: number;
    amount_paid: number;
    size: string;
    cashback_applied: number;
    cod_charges: number;
    product_id: number;
    quantity?: number;
    files?: OpenApiFiles[];
    employee_discount?: number;
    discount: number;
    delivery_charges: number;
};
type OpenApiPlatformCheckoutReq = {
    coupon_value: number;
    payment_methods: MultiTenderPaymentMethod[];
    comment?: string;
    cart_items: OpenApiOrderItem[];
    cashback_applied: number;
    cod_charges: number;
    coupon?: string;
    cart_value: number;
    shipping_address?: ShippingAddress;
    order_id?: string;
    delivery_charges: number;
    currency_code?: string;
    gstin?: string;
    billing_address: ShippingAddress;
    coupon_code: string;
    affiliate_order_id?: string;
    files?: OpenApiFiles[];
    employee_discount?: any;
    payment_mode?: string;
    loyalty_discount?: number;
};
type OpenApiCheckoutResponse = {
    message?: string;
    order_ref_id?: string;
    success?: boolean;
    order_id: string;
};
type AbandonedCart = {
    comment?: string;
    promotion?: any;
    merge_qty?: boolean;
    created_on: string;
    cod_charges?: any;
    app_id?: string;
    order_id?: string;
    is_default: boolean;
    pick_up_customer_details?: any;
    checkout_mode?: string;
    is_archive?: boolean;
    discount?: number;
    fc_index_map?: number[];
    shipments?: any[];
    is_active?: boolean;
    payment_mode?: string;
    coupon?: any;
    _id: string;
    articles: any[];
    payment_methods?: any[];
    expire_at: string;
    payments?: any;
    buy_now?: boolean;
    cart_value?: number;
    cashback: any;
    user_id: string;
    delivery_charges?: any;
    last_modified: string;
    meta?: any;
    gstin?: string;
    uid: number;
    bulk_coupon_discount?: number;
    fynd_credits?: any;
};
type AbandonedCartResponse = {
    message?: string;
    success?: boolean;
    items?: AbandonedCart[];
    page?: Page;
    result?: any;
};
type AddProductCart = {
    extra_meta?: any;
    pos?: boolean;
    seller_id?: number;
    parent_item_identifiers?: any;
    article_assignment?: any;
    product_group_tags?: string[];
    item_size?: string;
    article_id?: string;
    item_id?: number;
    quantity?: number;
    display?: string;
    store_id?: number;
};
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    is_valid?: boolean;
    coupon_text?: string;
    pan_no?: string;
    comment?: string;
    message?: string;
    gstin?: string;
    breakup_values?: CartBreakup;
    id?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
    items?: CartProductInfo[];
    restrict_checkout?: boolean;
    buy_now?: boolean;
    delivery_charge_info?: string;
    pan_config?: any;
};
type AddCartDetailResponse = {
    message?: string;
    success?: boolean;
    cart?: CartDetailResponse;
    partial?: boolean;
};
type UpdateProductCart = {
    item_index?: number;
    identifiers: CartProductIdentifer;
    extra_meta?: any;
    parent_item_identifiers?: any;
    article_id?: string;
    item_size?: string;
    item_id?: number;
    quantity?: number;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
type UpdateCartDetailResponse = {
    message?: string;
    success?: boolean;
    cart?: CartDetailResponse;
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
    meta?: any;
    created_on?: string;
    user?: any;
    token?: string;
    source?: any;
};
type SharedCart = {
    is_valid?: boolean;
    comment?: string;
    message?: string;
    breakup_values?: CartBreakup;
    id?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    checkout_mode?: string;
    items?: CartProductInfo[];
    coupon_text?: string;
    restrict_checkout?: boolean;
    buy_now?: boolean;
    cart_id?: number;
    last_modified?: string;
    gstin?: string;
    uid?: string;
    shared_cart_details?: SharedCartDetails;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    pick_up_customer_details?: any;
    created_on?: string;
    item_counts?: number;
    cart_value?: number;
    user_id?: string;
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
    is_valid?: boolean;
    comment?: string;
    message?: string;
    breakup_values?: CartBreakup;
    id?: string;
    currency?: CartCurrency;
    user?: UserInfo;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    pan_no?: string;
    checkout_mode?: string;
    items?: CartProductInfo[];
    pan_config?: any;
    coupon_text?: string;
    restrict_checkout?: boolean;
    buy_now?: boolean;
    last_modified?: string;
    gstin?: string;
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
type Coupon = {
    max_discount_value?: number;
    coupon_value?: number;
    title?: string;
    is_applied?: boolean;
    coupon_type?: string;
    message?: string;
    sub_title?: string;
    coupon_code?: string;
    minimum_cart_value?: number;
    description?: string;
    is_applicable?: boolean;
    expires_on?: string;
};
type PageCoupon = {
    total_item_count?: number;
    current?: number;
    total?: number;
    has_next?: boolean;
    has_previous?: boolean;
};
type GetCouponResponse = {
    available_coupon_list?: Coupon[];
    page?: PageCoupon;
};
type ApplyCouponRequest = {
    coupon_code: string;
};
type GeoLocation = {
    longitude?: number;
    latitude?: number;
};
type PlatformAddress = {
    is_default_address?: boolean;
    id?: string;
    country?: string;
    phone?: string;
    geo_location?: GeoLocation;
    country_code?: string;
    checkout_mode?: string;
    address?: string;
    area?: string;
    area_code?: string;
    is_active?: boolean;
    created_by_user_id?: string;
    city?: string;
    tags?: string[];
    name?: string;
    user_id?: string;
    cart_id?: string;
    meta?: any;
    address_type?: string;
    landmark?: string;
    area_code_slug?: string;
    email?: string;
    state?: string;
    google_map_point?: any;
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
    success?: boolean;
    is_updated?: boolean;
};
type DeleteAddressResponse = {
    id?: string;
    is_deleted?: boolean;
};
type PlatformSelectCartAddressRequest = {
    id?: string;
    checkout_mode?: string;
    billing_address_id?: string;
    user_id?: string;
    cart_id?: string;
};
type ShipmentResponse = {
    fulfillment_id?: number;
    shipment_type?: string;
    promise?: ShipmentPromise;
    items?: CartProductInfo[];
    fulfillment_type?: string;
    order_type?: string;
    dp_id?: string;
    shipments?: number;
    dp_options?: any;
    box_type?: string;
};
type CartShipmentsResponse = {
    error?: boolean;
    is_valid?: boolean;
    comment?: string;
    coupon_text?: string;
    message?: string;
    breakup_values?: CartBreakup;
    id?: string;
    currency?: CartCurrency;
    restrict_checkout?: boolean;
    buy_now?: boolean;
    delivery_charge_info?: string;
    cart_id?: number;
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    gstin?: string;
    checkout_mode?: string;
    uid?: string;
    shipments?: ShipmentResponse[];
};
type UpdateCartShipmentItem = {
    article_uid: string;
    quantity?: number;
    shipment_type: string;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type GiftDetail = {
    gift_message?: string;
    is_gift_applied?: boolean;
};
type ArticleGiftDetail = {
    article_id?: GiftDetail;
};
type PlatformCartMetaRequest = {
    comment?: string;
    pan_no?: string;
    pick_up_customer_details?: any;
    gstin?: string;
    checkout_mode?: string;
    gift_details?: ArticleGiftDetail;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type StaffCheckout = {
    _id: string;
    employee_code?: string;
    first_name: string;
    user: string;
    last_name: string;
};
type Files = {
    key: string;
    values: string[];
};
type PlatformCartCheckoutDetailRequest = {
    extra_meta?: any;
    device_id?: string;
    id: string;
    employee_code?: string;
    payment_auto_confirm?: boolean;
    pick_at_store_uid?: number;
    delivery_address?: any;
    billing_address?: any;
    checkout_mode?: string;
    order_type: string;
    ordering_store?: number;
    payment_params?: any;
    payment_mode: string;
    staff?: StaffCheckout;
    address_id?: string;
    callback_url?: string;
    aggregator?: string;
    user_id: string;
    payment_identifier?: string;
    merchant_code?: string;
    meta?: any;
    pos?: boolean;
    files?: Files[];
    billing_address_id?: string;
};
type CheckCart = {
    is_valid?: boolean;
    comment?: string;
    message?: string;
    breakup_values?: CartBreakup;
    id?: string;
    currency?: CartCurrency;
    cod_message?: string;
    error_message?: string;
    cod_charges?: number;
    store_emps?: any[];
    delivery_charge_info?: string;
    order_id?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    cod_available?: boolean;
    checkout_mode?: string;
    items?: CartProductInfo[];
    coupon_text?: string;
    success?: boolean;
    restrict_checkout?: boolean;
    buy_now?: boolean;
    delivery_charges?: number;
    cart_id?: number;
    last_modified?: string;
    user_type?: string;
    gstin?: string;
    store_code?: string;
    uid?: string;
    delivery_charge_order_value?: number;
};
type CartCheckoutResponse = {
    message?: string;
    order_id?: string;
    success?: boolean;
    callback_url?: string;
    data?: any;
    payment_confirm_url?: string;
    app_intercept_url?: string;
    cart?: CheckCart;
};
type CartDeliveryModesResponse = {
    available_modes?: string[];
    pickup_stores?: number[];
};
type PickupStoreDetail = {
    phone?: string;
    address_type?: string;
    landmark?: string;
    pincode?: number;
    store_code?: string;
    area_code_slug?: string;
    address?: string;
    id?: number;
    email?: string;
    area?: string;
    uid?: number;
    area_code?: string;
    city?: string;
    name?: string;
    state?: string;
    country?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    aggregator_name?: string;
    merchant_code?: string;
    payment_mode?: string;
    id?: string;
    address_id?: string;
    payment_identifier?: string;
};
type CouponValidity = {
    display_message_en?: string;
    title?: string;
    valid?: boolean;
    discount?: number;
    code?: string;
};
type PaymentCouponValidate = {
    message?: string;
    success: boolean;
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
type ServiceabilityrErrorResponse = {
    value: string;
    type: string;
    message: string;
};
type ApplicationServiceabilityConfig = {
    channel_id: string;
    serviceability_type: string;
    channel_type: string;
};
type ApplicationServiceabilityConfigResponse = {
    error?: ServiceabilityrErrorResponse;
    data?: ApplicationServiceabilityConfig;
    success: boolean;
};
type EntityRegionView_Request = {
    parent_id?: string[];
    sub_type: string[];
};
type EntityRegionView_Error = {
    value?: string;
    type?: string;
    message?: string;
};
type EntityRegionView_Items = {
    sub_type: string;
    name: string;
    uid: string;
};
type EntityRegionView_page = {
    current: number;
    type: string;
    item_total: number;
    size: number;
    has_next: boolean;
};
type EntityRegionView_Response = {
    error: EntityRegionView_Error;
    data: EntityRegionView_Items[];
    success: boolean;
    page: EntityRegionView_page;
};
type ListViewSummary = {
    total_pincodes_served: number;
    total_zones: number;
    total_active_zones: number;
};
type ZoneDataItem = {
    current: number;
    item_total: number;
    size: number;
    has_next: boolean;
    type: string;
};
type ListViewProduct = {
    type: string;
    count: number;
};
type ListViewChannels = {
    channel_id: string;
    channel_type: string;
};
type ListViewItems = {
    is_active: boolean;
    name: string;
    company_id: number;
    slug: string;
    stores_count: number;
    product: ListViewProduct;
    zone_id: string;
    pincodes_count: number;
    channels: ListViewChannels;
};
type ListViewResponse = {
    summary: ListViewSummary[];
    page: ZoneDataItem[];
    items: ListViewItems[];
};
type CompanyStoreView_PageItems = {
    current: number;
    type: string;
    item_total: number;
    size: number;
    has_next: boolean;
};
type CompanyStoreView_Response = {
    page: CompanyStoreView_PageItems[];
    items?: any[];
};
type GetZoneDataViewChannels = {
    channel_id: string;
    channel_type: string;
};
type ZoneProductTypes = {
    tags: string[];
    type: string;
};
type ZoneMappingType = {
    state?: string[];
    country: string;
    pincode?: string[];
};
type UpdateZoneData = {
    zone_id: string;
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
type ZoneUpdateRequest = {
    identifier: string;
    data: UpdateZoneData;
};
type ZoneSuccessResponse = {
    status_code: number;
    success: boolean;
};
type GetZoneDataViewItems = {
    zone_id: string;
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
    stores_count: number;
    pincodes_count: number;
};
type GetSingleZoneDataViewResponse = {
    data: GetZoneDataViewItems;
};
type CreateZoneData = {
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
type ZoneRequest = {
    identifier: string;
    data: CreateZoneData;
};
type ZoneResponse = {
    status_code: number;
    zone_id: string;
    success: boolean;
};
type GetZoneFromPincodeViewRequest = {
    country: string;
    pincode: string;
};
type GetZoneFromPincodeViewResponse = {
    zones: string[];
    serviceability_type: string;
};
type OpeningClosing = {
    minute?: number;
    hour?: number;
};
type TimmingResponse = {
    opening?: OpeningClosing;
    open?: boolean;
    weekday?: string;
    closing?: OpeningClosing;
};
type ModifiedByResponse = {
    user_id?: string;
    username?: string;
};
type Dp = {
    internal_account_id?: string;
    operations?: string[];
    assign_dp_from_sb?: boolean;
    lm_priority?: number;
    fm_priority?: number;
    area_code?: number;
    external_account_id?: string;
    payment_mode?: string;
    rvp_priority?: number;
    transport_mode?: string;
};
type LogisticsResponse = {
    override?: boolean;
    dp?: Dp;
};
type MobileNo = {
    number?: string;
    country_code?: number;
};
type ManagerResponse = {
    mobile_no?: MobileNo;
    email?: string;
    name?: string;
};
type DocumentsResponse = {
    value?: string;
    legal_name?: string;
    type?: string;
    verified?: boolean;
};
type IntegrationTypeResponse = {
    order?: string;
    inventory?: string;
};
type ContactNumberResponse = {
    number?: string;
    country_code?: number;
};
type WarningsResponse = {
    store_address?: string;
};
type AddressResponse = {
    latitude?: number;
    longitude?: number;
    landmark?: string;
    country?: string;
    address1?: string;
    city?: string;
    address2?: string;
    pincode?: number;
    state?: string;
};
type EinvoiceResponse = {
    enabled?: boolean;
};
type EwayBillResponse = {
    enabled?: boolean;
};
type GstCredentialsResponse = {
    e_invoice?: EinvoiceResponse;
    e_waybill?: EwayBillResponse;
};
type CreatedByResponse = {
    user_id?: string;
    username?: string;
};
type ProductReturnConfigResponse = {
    on_same_store?: boolean;
};
type ItemResponse = {
    name?: string;
    modified_on?: string;
    display_name?: string;
    _cls?: string;
    created_on?: string;
    timing?: TimmingResponse[];
    verified_by?: ModifiedByResponse;
    logistics?: LogisticsResponse;
    stage?: string;
    code?: string;
    manager?: ManagerResponse;
    documents?: DocumentsResponse[];
    integration_type?: IntegrationTypeResponse;
    contact_numbers?: ContactNumberResponse[];
    warnings?: WarningsResponse;
    store_type?: string;
    address?: AddressResponse;
    company_id?: number;
    verified_on?: string;
    gst_credentials?: GstCredentialsResponse;
    notification_emails?: string[];
    _custom_json?: any;
    sub_type?: string;
    company?: number;
    created_by?: CreatedByResponse;
    uid?: number;
    modified_by?: ModifiedByResponse;
    product_return_config?: ProductReturnConfigResponse;
};
type GetStoresViewResponse = {
    page: PageResponse;
    items?: ItemResponse[];
};
