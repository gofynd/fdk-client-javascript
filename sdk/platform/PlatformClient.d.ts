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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, GenerateSEOContent, GeneratedSEOContent, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, ShipmentStatus, PaymentModeInfo, UserDataInfo, Prices, ShipmentItemFulFillingStore, PlatformItem, GSTDetailsData, BagUnit, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, Dimensions, Meta, Formatted, LockData, BuyerDetails, EinvoiceInfo, DebugInfo, ShipmentTimeStamp, ShipmentMeta, PDFLinks, AffiliateMeta, AffiliateDetails, UserDetailsData, TrackingList, OrderingStoreDetails, OrderDetailsData, PlatformDeliveryAddress, OrderBagArticle, BagStateMapper, CurrentStatus, OrderBrandName, Identifier, FinancialBreakup, BagGST, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagConfigs, OrderBags, BagStatusHistory, ShipmentPayments, DPDetailsData, PhoneDetails, ContactDetails, CompanyDetails, FulfillingStore, ShipmentStatusData, InvoiceInfo, PlatformShipment, ShipmentInfoResponse, TransactionData, BillingStaffDetails, PlatformUserDetails, OrderMeta, TaxDetails, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, B2BPODetails, BagMeta, EInvoicePortalDetails, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, StoreMeta, StoreAddress, Store, ReturnConfig, Weight, Article, Brand, Dates, ArticleDetails, BagReturnableCancelableStatus, BagGSTDetails, Attributes, Item, AffiliateBagDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateInventoryPaymentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, MarketPlacePdf, AffiliateBag, OrderUser, OrderPriority, UserData, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, Meta1, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, TaxInfo, ShippingInfo, ProcessingDates, Tax, Charge, LineItem, Shipment, BillingInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, DeleteResponse, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, ApplicationItemMOQ, MetaFields, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionSchedule, CollectionQuery, UserInfo, CollectionImage, CollectionBanner, SeoDetail, CollectionBadge, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, Media1, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, CollectionItem, CollectionItemUpdate, UpdatedResponse, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, UserInfo1, ProductTemplateExportResponse, ProductDownloadsResponse, ProductTemplateExportFilterRequest, ProductTemplateDownloadsExport, ProductConfigurationDownloads, Hierarchy, CategoryMappingValues, CategoryMapping, Media2, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, SingleCategoryResponse, CategoryUpdateResponse, TaxIdentifier, NetQuantity, CustomOrder, TeaserTag, Trader, ProductPublish, ProductCreateUpdateSchemaV2, VerifiedBy, NetQuantityResponse, ReturnConfigResponse, Logo, Image, ProductPublish1, ProductSchemaV2, ProductListingResponseV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, InventoryResponse, InventoryResponsePaginated, ManufacturerResponse, WeightResponse, BrandMeta, PriceMeta, DimensionResponse, CompanyMeta, QuantityBase, Quantities, Trader1, ReturnConfig1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ManufacturerResponse1, WeightResponse1, BrandMeta1, PriceArticle, ArticleStoreResponse, DimensionResponse1, CompanyMeta1, Quantity, QuantitiesArticle, Trader2, ReturnConfig2, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportQuantityFilter, InventoryExportAdvanceOption, InventoryExportJob, InventoryExportFilter, InventoryCreateRequest, InventoryJobFilters, InventoryJobDetailResponse, InventoryExportJobListResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, PageResponse, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, LocationIntegrationType, UserSerializer1, SellerPhoneNumber, LocationManagerSerializer, ProductReturnConfigSerializer, GetAddressSerializer, UserSerializer2, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, Website, BusinessDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, DisplayMetaDict, DisplayMeta, BulkBundleRestriction, PriceRange, UsesRemaining, UsesRestriction, PostOrder, PaymentAllowValue, PaymentModes, Restrictions, CouponSchedule, State, Ownership, RuleDefinition, Rule, Validity, Validation, CouponDateMeta, CouponAction, CouponAuthor, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, UserRegistered, UsesRemaining1, UsesRestriction1, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, CompareObject, ItemCriteria, PromotionDateMeta, DisplayMeta1, Ownership1, PromotionAction, Visibility, DiscountOffer, DiscountRule, PromotionSchedule, PromotionAuthor, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ProductPrice, ProductPriceInfo, CouponDetails, CategoryInfo, BaseInfo, ProductImage, Tags, ActionQuery, ProductAction, CartProduct, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, BasePrice, ArticlePriceInfo, ProductArticle, PromoMeta, CartProductIdentifer, ProductAvailability, CartProductInfo, DisplayBreakup, LoyaltyPoints, RawBreakup, CouponBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartRequest, DeleteCartDetailResponse, CartItemCountResponse, Coupon, PageCoupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, Files, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, ServiceabilityrErrorResponse, ApplicationServiceabilityConfig, ApplicationServiceabilityConfigResponse, EntityRegionView_Request, EntityRegionView_Error, EntityRegionView_Items, EntityRegionView_page, EntityRegionView_Response, ListViewSummary, ZoneDataItem, ListViewProduct, ListViewChannels, ListViewItems, ListViewResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, UpdateZoneData, ZoneUpdateRequest, ZoneSuccessResponse, GetZoneDataViewItems, GetSingleZoneDataViewResponse, CreateZoneData, ZoneRequest, ZoneResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, OpeningClosing, TimmingResponse, ModifiedByResponse, Dp, LogisticsResponse, MobileNo, ManagerResponse, DocumentsResponse, IntegrationTypeResponse, ContactNumberResponse, WarningsResponse, AddressResponse, EinvoiceResponse, EwayBillResponse, GstCredentialsResponse, CreatedByResponse, ProductReturnConfigResponse, ItemResponse, GetStoresViewResponse };
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
    excluded_fields: string[];
    created: boolean;
    display_fields: string[];
    success: boolean;
    aggregators?: any[];
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    key: string;
    merchant_salt: string;
    config_type: string;
    secret: string;
    is_active?: boolean;
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
    code?: string;
    logos?: PaymentModeLogo;
    display_name?: string;
    package_name?: string;
};
type PaymentModeList = {
    card_issuer?: string;
    expired?: boolean;
    display_name?: string;
    card_name?: string;
    nickname?: string;
    card_type?: string;
    name?: string;
    card_fingerprint?: string;
    exp_year?: number;
    card_reference?: string;
    card_brand?: string;
    exp_month?: number;
    retry_count?: number;
    card_number?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    intent_app_error_dict_list?: IntentAppErrorList[];
    aggregator_name: string;
    timeout?: number;
    fynd_vpa?: string;
    display_priority?: number;
    card_token?: string;
    code?: string;
    intent_flow?: boolean;
    cod_limit?: number;
    card_isin?: string;
    remaining_limit?: number;
    cod_limit_per_order?: number;
    intent_app_error_list?: string[];
    card_id?: string;
    merchant_code?: string;
    card_brand_image?: string;
    intent_app?: IntentApp[];
    logo_url?: PaymentModeLogo;
};
type RootPaymentMode = {
    display_priority: number;
    list?: PaymentModeList[];
    display_name: string;
    save_card?: boolean;
    aggregator_name?: string;
    anonymous_enable?: boolean;
    name: string;
    is_pay_by_card_pl?: boolean;
    add_card_enabled?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    more_attributes: any;
    transfer_type: string;
    payouts_aggregators: any[];
    unique_transfer_no: any;
    customers: any;
    is_default: boolean;
    is_active: boolean;
};
type PayoutBankDetails = {
    ifsc_code: string;
    branch_name?: string;
    city?: string;
    bank_name?: string;
    account_no?: string;
    state?: string;
    pincode?: number;
    country?: string;
    account_type: string;
    account_holder?: string;
};
type PayoutRequest = {
    users: any;
    transfer_type: string;
    aggregator: string;
    bank_details: PayoutBankDetails;
    unique_external_id: string;
    is_active: boolean;
};
type PayoutResponse = {
    payouts: any;
    users: any;
    transfer_type: string;
    payment_status: string;
    created: boolean;
    is_active: boolean;
    aggregator: string;
    unique_transfer_no: string;
    success: boolean;
    bank_details: any;
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
    config: any;
    aggregator: string;
    success: boolean;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    success: boolean;
    data: any;
};
type RefundAccountResponse = {
    message: string;
    is_verified_flag?: boolean;
    success: boolean;
    data?: any;
};
type NotFoundResourceError = {
    code: string;
    description: string;
    success: boolean;
};
type BankDetailsForOTP = {
    ifsc_code: string;
    branch_name: string;
    bank_name: string;
    account_no: string;
    account_holder: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    bank_name: string;
    branch_name: string;
    success?: boolean;
};
type OrderBeneficiaryDetails = {
    account_no: string;
    display_name: string;
    bank_name: string;
    beneficiary_id: string;
    id: number;
    ifsc_code: string;
    comment?: string;
    mobile?: string;
    email: string;
    title: string;
    is_active: boolean;
    account_holder: string;
    branch_name?: string;
    delights_user_name?: string;
    created_on: string;
    transfer_mode: string;
    modified_on: string;
    subtitle: string;
    address: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    payment_gateway?: string;
    order_id?: string;
    extra_meta?: any;
    current_status?: string;
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
    message: string;
    order_id: string;
    success: boolean;
};
type CODdata = {
    limit: number;
    remaining_limit: number;
    usages: number;
    is_active: boolean;
    user_id: string;
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
    message: string;
    success: boolean;
};
type EdcModelData = {
    aggregator: string;
    aggregator_id: number;
    models: string[];
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
    statistics: StatisticsData;
    success: boolean;
};
type EdcAddRequest = {
    store_id: number;
    edc_device_serial_no: string;
    terminal_serial_no: string;
    edc_model: string;
    device_tag?: string;
    aggregator_id: number;
};
type EdcDevice = {
    application_id: string;
    store_id: number;
    merchant_store_pos_code?: string;
    edc_device_serial_no: string;
    terminal_serial_no: string;
    edc_model?: string;
    terminal_unique_identifier: string;
    device_tag: string;
    aggregator_name?: string;
    aggregator_id: number;
    is_active: boolean;
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
    store_id?: number;
    merchant_store_pos_code?: string;
    edc_device_serial_no?: string;
    edc_model?: string;
    device_tag?: string;
    aggregator_id?: number;
    is_active?: boolean;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    items: EdcDevice[];
    success: boolean;
    page: Page;
};
type PaymentInitializationRequest = {
    customer_id: string;
    vpa?: string;
    amount: number;
    order_id: string;
    aggregator: string;
    razorpay_payment_id?: string;
    contact: string;
    currency: string;
    method: string;
    merchant_order_id: string;
    device_id?: string;
    timeout?: number;
    email: string;
};
type PaymentInitializationResponse = {
    polling_url: string;
    upi_poll_url?: string;
    vpa?: string;
    amount?: number;
    aggregator_order_id?: string;
    aggregator: string;
    razorpay_payment_id?: string;
    virtual_id?: string;
    bqr_image?: string;
    currency?: string;
    method: string;
    merchant_order_id: string;
    device_id?: string;
    success: boolean;
    timeout?: number;
    customer_id?: string;
    status?: string;
};
type PaymentStatusUpdateRequest = {
    customer_id: string;
    vpa?: string;
    amount: number;
    order_id: string;
    aggregator: string;
    contact: string;
    currency: string;
    method: string;
    merchant_order_id: string;
    device_id?: string;
    email: string;
    status: string;
};
type PaymentStatusUpdateResponse = {
    redirect_url?: string;
    retry: boolean;
    success?: boolean;
    aggregator_name: string;
    status: string;
};
type ResendOrCancelPaymentRequest = {
    order_id: string;
    device_id?: string;
    request_type: string;
};
type LinkStatus = {
    message: string;
    status: boolean;
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
    options?: FilterInfoOption[];
    value: string;
    text: string;
};
type ShipmentStatus = {
    actual_status: string;
    title: string;
    hex_code: string;
    ops_status: string;
    status: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type UserDataInfo = {
    is_anonymous_user?: boolean;
    email?: string;
    last_name?: string;
    gender?: string;
    uid?: number;
    mobile?: string;
    avis_user_id?: string;
    first_name?: string;
    name?: string;
};
type Prices = {
    promotion_effective_discount?: number;
    refund_amount?: number;
    delivery_charge?: number;
    discount?: number;
    price_effective?: number;
    coupon_value?: number;
    cashback_applied?: number;
    cashback?: number;
    amount_paid_roundoff?: number;
    tax_collected_at_source?: number;
    value_of_good?: number;
    transfer_price?: number;
    fynd_credits?: number;
    refund_credit?: number;
    price_marked?: number;
    cod_charges?: number;
    amount_paid?: number;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type PlatformItem = {
    images?: string[];
    l3_category_name?: string;
    code?: string;
    department_id?: number;
    can_cancel?: boolean;
    image?: string[];
    id?: number;
    size?: string;
    can_return?: boolean;
    l3_category?: number;
    name?: string;
    color?: string;
    l1_category?: string[];
};
type GSTDetailsData = {
    gst_fee: number;
    tax_collected_at_source: number;
    gstin_code: string;
    value_of_good: number;
    brand_calculated_amount: number;
};
type BagUnit = {
    bag_id: number;
    item_quantity: number;
    can_cancel?: boolean;
    item?: PlatformItem;
    total_shipment_bags: number;
    prices?: Prices;
    ordering_channel: string;
    shipment_id: string;
    can_return?: boolean;
    gst?: GSTDetailsData;
    status: any;
};
type ShipmentItem = {
    channel?: any;
    created_at: string;
    shipment_created_at: string;
    sla?: any;
    application?: any;
    shipment_status?: ShipmentStatus;
    payment_mode_info?: PaymentModeInfo;
    user?: UserDataInfo;
    id: string;
    prices?: Prices;
    fulfilling_store?: ShipmentItemFulFillingStore;
    fulfilling_centre: string;
    shipment_id?: string;
    bags?: BagUnit[];
    payment_methods?: any;
    total_bags_count: number;
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
type Dimensions = {
    is_default?: boolean;
    unit?: string;
    length?: number;
    width?: number;
    height?: number;
};
type Meta = {
    dimension?: Dimensions;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type BuyerDetails = {
    address: string;
    ajio_site_id?: string;
    city: string;
    state: string;
    pincode: number;
    gstin: string;
    name: string;
};
type EinvoiceInfo = {
    credit_note?: any;
    invoice?: any;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type ShipmentMeta = {
    forward_affiliate_shipment_id?: string;
    return_store_node?: number;
    formatted?: Formatted;
    packaging_name?: string;
    box_type?: string;
    due_date?: string;
    weight: number;
    dp_name?: string;
    return_awb_number?: string;
    store_invoice_updated_date?: string;
    lock_data?: LockData;
    assign_dp_from_sb?: boolean;
    b2b_buyer_details?: BuyerDetails;
    dp_id?: string;
    return_affiliate_shipment_id?: string;
    b2c_buyer_details?: any;
    einvoice_info?: EinvoiceInfo;
    awb_number?: string;
    po_number?: string;
    debug_info?: DebugInfo;
    ewaybill_info?: any;
    dp_sort_key?: string;
    shipment_volumetric_weight?: number;
    return_details?: any;
    marketplace_store_id?: string;
    fulfilment_priority_text?: string;
    dp_options?: any;
    auto_trigger_dp_assignment_acf: boolean;
    same_store_available: boolean;
    timestamp?: ShipmentTimeStamp;
    bag_weight?: any;
    shipment_weight?: number;
    order_type?: string;
    forward_affiliate_order_id?: string;
    external?: any;
    return_affiliate_order_id?: string;
};
type PDFLinks = {
    label_a4?: string;
    credit_note_url?: string;
    po_invoice?: string;
    delivery_challan_a4?: string;
    label_pos?: string;
    label_a6?: string;
    invoice_pos?: string;
    label_type: string;
    invoice_type: string;
    b2b?: string;
    invoice_a4?: string;
    label?: string;
    invoice?: string;
    invoice_a6?: string;
};
type AffiliateMeta = {
    channel_order_id?: string;
    coupon_code?: string;
    loyalty_discount?: number;
    due_date?: string;
    size_level_total_qty?: number;
    quantity?: number;
    is_priority?: boolean;
    employee_discount?: number;
    box_type?: string;
    channel_shipment_id?: string;
    order_item_id?: string;
};
type AffiliateDetails = {
    ad_id?: string;
    affiliate_id?: string;
    shipment_meta: ShipmentMeta;
    affiliate_store_id: string;
    pdf_links?: PDFLinks;
    affiliate_shipment_id: string;
    company_affiliate_tag?: string;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
};
type UserDetailsData = {
    country: string;
    address: string;
    city: string;
    address_type?: string;
    email?: string;
    phone: string;
    address1?: string;
    state: string;
    pincode: string;
    landmark?: string;
    name: string;
    area?: string;
};
type TrackingList = {
    is_passed?: boolean;
    text: string;
    is_current?: boolean;
    time?: string;
    status: string;
};
type OrderingStoreDetails = {
    country: string;
    address: string;
    meta: any;
    city: string;
    code: string;
    store_name: string;
    ordering_store_id: number;
    contact_person: string;
    phone: string;
    state: string;
    pincode: string;
};
type OrderDetailsData = {
    ordering_channel_logo?: any;
    affiliate_id?: string;
    ordering_channel?: string;
    fynd_order_id: string;
    order_date?: string;
    tax_details?: any;
    order_value?: string;
    source?: string;
    cod_charges?: string;
};
type PlatformDeliveryAddress = {
    country?: string;
    address2?: string;
    version?: string;
    latitude?: number;
    city?: string;
    created_at?: string;
    updated_at?: string;
    address_type?: string;
    email?: string;
    phone?: string;
    contact_person?: string;
    address1?: string;
    state?: string;
    pincode?: string;
    address_category?: string;
    landmark?: string;
    longitude?: number;
    area?: string;
};
type OrderBagArticle = {
    identifiers?: any;
    uid?: string;
    return_config?: any;
};
type BagStateMapper = {
    is_active?: boolean;
    app_display_name?: string;
    app_state_name?: string;
    journey_type: string;
    bs_id: number;
    app_facing?: boolean;
    name: string;
    state_type: string;
    display_name: string;
    notify_customer?: boolean;
};
type CurrentStatus = {
    bag_id?: number;
    updated_at?: string;
    created_at?: string;
    kafka_sync?: boolean;
    delivery_awb_number?: string;
    current_status_id: number;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    store_id?: number;
    shipment_id?: string;
    delivery_partner_id?: number;
    state_type?: string;
    status?: string;
};
type OrderBrandName = {
    brand_name: string;
    id: number;
    logo: string;
    company: string;
    modified_on?: string;
    created_on: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    promotion_effective_discount: number;
    cashback_applied: number;
    coupon_value: number;
    amount_paid_roundoff?: number;
    value_of_good: number;
    fynd_credits: number;
    hsn_code: string;
    discount: number;
    gst_fee: number;
    cashback: number;
    transfer_price: number;
    gst_tax_percentage: number;
    total_units: number;
    added_to_fynd_cash: boolean;
    price_effective: number;
    amount_paid: number;
    coupon_effective_discount: number;
    tax_collected_at_source?: number;
    size: string;
    identifiers: Identifier;
    brand_calculated_amount: number;
    refund_credit: number;
    cod_charges: number;
    delivery_charge: number;
    gst_tag: string;
    price_marked: number;
    item_name: string;
};
type BagGST = {
    gst_fee?: number;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    gst_tag?: string;
    value_of_good?: number;
    brand_calculated_amount?: number;
    gst_tax_percentage?: number;
    hsn_code?: string;
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
    promotion_name?: string;
    buy_rules?: BuyRules[];
    amount?: number;
    discount_rules?: DiscountRules[];
    article_quantity?: number;
    promo_id?: string;
    promotion_type?: string;
    mrp_promotion?: boolean;
};
type BagConfigs = {
    is_active: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    allow_force_return: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
};
type OrderBags = {
    bag_id: number;
    delivery_address?: PlatformDeliveryAddress;
    parent_promo_bags?: any;
    article?: OrderBagArticle;
    current_status?: CurrentStatus;
    brand?: OrderBrandName;
    line_number?: number;
    seller_identifier?: string;
    entity_type?: string;
    can_cancel?: boolean;
    can_return?: boolean;
    financial_breakup?: FinancialBreakup;
    gst_details?: BagGST;
    item?: PlatformItem;
    applied_promos?: AppliedPromos[];
    prices?: Prices;
    bag_configs?: BagConfigs;
    quantity?: number;
    identifier?: string;
    display_name?: string;
};
type BagStatusHistory = {
    updated_at?: string;
    bag_id?: number;
    created_at?: string;
    kafka_sync?: boolean;
    delivery_awb_number?: string;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    store_id?: number;
    reasons?: any[];
    shipment_id?: string;
    forward?: boolean;
    display_name?: string;
    delivery_partner_id?: number;
    state_type?: string;
    status: string;
    app_display_name?: string;
    bsh_id?: number;
};
type ShipmentPayments = {
    logo?: string;
    source?: string;
    mode?: string;
};
type DPDetailsData = {
    country?: string;
    awb_no?: string;
    eway_bill_id?: string;
    id?: number;
    gst_tag?: string;
    track_url?: string;
    pincode?: string;
    name?: string;
};
type PhoneDetails = {
    country_code?: number;
    mobile_number?: string;
};
type ContactDetails = {
    phone?: PhoneDetails[];
    emails?: string[];
};
type CompanyDetails = {
    address?: any;
    company_id?: number;
    company_gst?: string;
    company_cin?: string;
    company_name?: string;
    company_contact?: ContactDetails;
};
type FulfillingStore = {
    country: string;
    address: string;
    meta: any;
    city: string;
    code: string;
    store_name: string;
    id: number;
    contact_person: string;
    phone: string;
    fulfillment_channel: string;
    state: string;
    pincode: string;
};
type ShipmentStatusData = {
    created_at?: string;
    id?: number;
    shipment_id?: string;
    status?: string;
    bag_list?: string[];
};
type InvoiceInfo = {
    credit_note_id?: string;
    updated_date?: string;
    invoice_url?: string;
    store_invoice_id?: string;
    label_url?: string;
};
type PlatformShipment = {
    fulfilment_priority?: number;
    meta?: Meta;
    platform_logo?: string;
    affiliate_details?: AffiliateDetails;
    billing_details?: UserDetailsData;
    tracking_list?: TrackingList[];
    ordering_store?: OrderingStoreDetails;
    order?: OrderDetailsData;
    bags?: OrderBags[];
    picked_date?: string;
    forward_shipment_id?: string;
    bag_status_history?: BagStatusHistory[];
    journey_type?: string;
    shipment_status?: string;
    payments?: ShipmentPayments;
    shipment_quantity?: number;
    shipment_id: string;
    dp_details?: DPDetailsData;
    lock_status?: boolean;
    shipment_images?: string[];
    company_details?: CompanyDetails;
    invoice_id?: string;
    packaging_type?: string;
    user?: UserDataInfo;
    total_items?: number;
    fulfilling_store?: FulfillingStore;
    custom_meta?: any[];
    total_bags?: number;
    payment_methods?: any;
    delivery_details?: UserDetailsData;
    coupon?: any;
    status?: ShipmentStatusData;
    delivery_slot?: any;
    invoice?: InvoiceInfo;
    priority_text?: string;
    gst_details?: GSTDetailsData;
    operational_status?: string;
    prices?: Prices;
    payment_mode?: string;
    user_agent?: string;
    enable_dp_tracking?: boolean;
    vertical?: string;
};
type ShipmentInfoResponse = {
    message?: string;
    shipments?: PlatformShipment[];
    success: boolean;
};
type TransactionData = {
    entity?: string;
    currency?: string;
    payment_id?: string;
    transaction_id?: string;
    unique_reference_number?: string;
    status?: string;
    terminal_id?: string;
    amount_paid?: string;
};
type BillingStaffDetails = {
    user?: string;
    last_name?: string;
    staff_id?: number;
    employee_code?: string;
    first_name?: string;
};
type PlatformUserDetails = {
    platform_user_employee_code?: string;
    platform_user_first_name?: string;
    platform_user_last_name?: string;
    platform_user_id?: string;
};
type OrderMeta = {
    transaction_data?: TransactionData;
    currency_symbol?: string;
    billing_staff_details?: BillingStaffDetails;
    extra_meta?: any;
    order_platform?: string;
    ordering_store?: number;
    platform_user_details?: PlatformUserDetails;
    employee_id?: number;
    cart_id?: number;
    order_child_entities?: string[];
    files?: any[];
    mongo_cart_id?: number;
    customer_note?: string;
    staff?: any;
    comment?: string;
    company_logo?: string;
    order_type?: string;
    order_tags?: any[];
    payment_type?: string;
};
type TaxDetails = {
    pan_no?: string;
    gstin?: string;
};
type OrderDict = {
    meta?: OrderMeta;
    prices?: Prices;
    fynd_order_id: string;
    order_date: string;
    tax_details?: TaxDetails;
    payment_methods?: any;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    order?: OrderDict;
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
    options?: SubLane[];
    value: string;
    text: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformBreakupValues = {
    name?: string;
    value?: string;
    display?: string;
};
type PlatformOrderItems = {
    meta?: any;
    channel?: PlatformChannel;
    breakup_values?: PlatformBreakupValues[];
    user_info?: UserDataInfo;
    order_created_time?: string;
    payment_mode?: string;
    shipments?: PlatformShipment[];
    order_id?: string;
    order_value?: number;
    total_order_value?: number;
};
type OrderListingResponse = {
    success?: boolean;
    lane?: string;
    page?: Page;
    items?: PlatformOrderItems[];
    total_count?: number;
    message?: string;
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
    updated_at?: string;
    meta?: any;
    reason?: string;
    account_name?: string;
    awb?: string;
    status?: string;
    last_location_recieved_at?: string;
    raw_status?: string;
    updated_time?: string;
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
    report_requested_at?: string;
    request_details?: any;
    report_name?: string;
    report_created_at?: string;
    s3_key?: string;
    report_id?: string;
    report_type?: string;
    status?: string;
    display_name?: string;
};
type JioCodeUpsertDataSet = {
    article_id?: string;
    jio_code?: string;
    item_id?: string;
    company_id?: string;
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
    data?: any[];
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
    identifier?: string;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    company_id?: string;
    data?: any;
    store_name?: string;
    do_invoice_label_generated: boolean;
    store_id?: string;
    batch_id: string;
    store_code?: string;
    label?: any;
    invoice?: any;
    invoice_status?: string;
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
    file_path?: string;
    operation?: string;
    cdn?: URL;
    file_name?: string;
    method?: string;
    namespace?: string;
    size?: number;
    tags?: string[];
    upload?: FileUploadResponse;
};
type bulkListingData = {
    user_id?: string;
    store_name?: string;
    processing_shipments?: string[];
    excel_url?: string;
    batch_id?: string;
    failed_shipments?: any[];
    successful?: number;
    id?: string;
    successful_shipments?: any[];
    company_id?: number;
    store_id?: number;
    store_code?: string;
    status?: string;
    processing?: number;
    failed?: number;
    total?: number;
    file_name?: string;
    user_name?: string;
    uploaded_on?: string;
};
type BulkListingPage = {
    total?: number;
    current?: number;
    type?: string;
    has_previous?: boolean;
    size?: number;
    has_next?: boolean;
};
type BulkListingResponse = {
    error?: string;
    data?: bulkListingData[];
    success?: boolean;
    page?: BulkListingPage;
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    qc_type?: string[];
    question_set?: QuestionSet[];
    display_name?: string;
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
    successful_shipment_ids?: string[];
    company_id?: string;
    total_shipments_count?: number;
    failed_shipments_count?: number;
    batch_id?: string;
    successful_shipments_count?: number;
    processing_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    user_id?: string;
    data?: BulkActionDetailsDataField[];
    success?: string;
    error?: string[];
    failed_records?: string[];
    uploaded_on?: string;
    message?: string;
    uploaded_by?: string;
    status?: boolean;
};
type B2BPODetails = {
    po_tax_amount?: number;
    total_gst_percentage?: number;
    po_line_amount?: number;
    partial_can_ret?: boolean;
    item_base_price?: number;
    docker_number?: string;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type EInvoicePortalDetails = {
    user?: string;
    username?: string;
    password?: string;
};
type Document = {
    value: string;
    verified: boolean;
    legal_name: string;
    url?: string;
    ds_type: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    user?: string;
    username?: string;
    enabled: boolean;
    password?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type StoreMeta = {
    product_return_config?: any;
    stage: string;
    gst_number?: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    timing?: any[];
    ewaybill_portal_details?: any;
    notification_emails?: string[];
    documents?: StoreDocuments;
    additional_contact_details?: any;
    gst_credentials: StoreGstCredentials;
    display_name: string;
};
type StoreAddress = {
    country: string;
    created_at: string;
    email?: string;
    contact_person: string;
    phone: string;
    state: string;
    landmark?: string;
    address_type: string;
    address_category: string;
    pincode: number;
    longitude: number;
    address2?: string;
    updated_at: string;
    city: string;
    country_code: string;
    area?: string;
    latitude: number;
    version?: string;
    address1: string;
};
type Store = {
    country: string;
    meta: StoreMeta;
    is_active?: boolean;
    created_at: string;
    parent_store_id?: number;
    mall_name?: string;
    contact_person: string;
    phone: number;
    fulfillment_channel: string;
    state: string;
    store_address_json?: StoreAddress;
    name: string;
    store_email: string;
    is_enabled_for_recon?: boolean;
    store_active_from?: string;
    packaging_material_count?: number;
    pincode: string;
    alohomora_user_id?: number;
    longitude: number;
    address2?: string;
    updated_at?: string;
    is_archived?: boolean;
    city: string;
    company_id: number;
    vat_no?: string;
    brand_store_tags?: string[];
    latitude: number;
    brand_id?: any;
    code?: string;
    order_integration_id?: string;
    location_type: string;
    address1: string;
    mall_area?: string;
    s_id: string;
    login_username: string;
};
type ReturnConfig = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Weight = {
    unit?: string;
    shipping?: number;
    is_default?: boolean;
};
type Article = {
    _id: string;
    esp_modified?: any;
    code?: string;
    raw_meta?: any;
    dimensions?: Dimensions;
    a_set?: any;
    return_config?: ReturnConfig;
    size: string;
    identifiers: Identifier;
    uid: string;
    child_details?: any;
    is_set?: boolean;
    seller_identifier: string;
    weight?: Weight;
};
type Brand = {
    credit_note_allowed?: boolean;
    brand_id: number;
    start_date?: string;
    brand_name: string;
    script_last_ran?: string;
    logo?: string;
    credit_note_expiry_days?: number;
    company: string;
    is_virtual_invoice?: boolean;
    modified_on?: number;
    created_on?: number;
    invoice_prefix?: string;
    pickup_location?: string;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type ArticleDetails = {
    status?: any;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
};
type BagGSTDetails = {
    gst_fee: number;
    sgst_tax_percentage: number;
    sgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    tax_collected_at_source: number;
    gstin_code?: string;
    hsn_code_id: string;
    gst_tag: string;
    value_of_good: number;
    cgst_gst_fee: string;
    brand_calculated_amount: number;
    igst_gst_fee: string;
    gst_tax_percentage: number;
    cgst_tax_percentage: number;
    hsn_code: string;
    igst_tax_percentage: number;
};
type Attributes = {
    brand_name?: string;
    marketer_name?: string;
    gender?: string[];
    primary_material?: string;
    essential?: string;
    primary_color_hex?: string;
    name?: string;
    marketer_address?: string;
    primary_color?: string;
};
type Item = {
    meta?: any;
    department_id?: number;
    webstore_product_url?: string;
    l2_category?: string[];
    brand: string;
    name: string;
    branch_url?: string;
    slug_key: string;
    gender?: string;
    l1_category_id?: number;
    l3_category?: number;
    l2_category_id?: number;
    item_id: number;
    l3_category_name?: string;
    can_cancel?: boolean;
    image: string[];
    size: string;
    can_return?: boolean;
    color?: string;
    l1_category?: string[];
    attributes: Attributes;
    last_updated_at?: string;
    brand_id: number;
    code?: string;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
};
type BagDetailsPlatformResponse = {
    meta?: BagMeta;
    affiliate_details?: AffiliateDetails;
    current_operational_status: BagStatusHistory;
    bag_status: BagStatusHistory[];
    original_bag_list?: number[];
    ordering_store?: Store;
    parent_promo_bags?: any;
    article: Article;
    current_status: BagStatusHistory;
    brand: Brand;
    line_number?: number;
    bag_status_history?: BagStatusHistory;
    journey_type: string;
    qc_required?: any;
    reasons?: any[];
    shipment_id?: string;
    tags?: string[];
    seller_identifier?: string;
    b_id: number;
    dates?: Dates;
    entity_type?: string;
    bag_update_time?: number;
    no_of_bags_order?: number;
    article_details?: ArticleDetails;
    financial_breakup: FinancialBreakup[];
    status: BagReturnableCancelableStatus;
    b_type?: string;
    restore_coupon?: boolean;
    gst_details: BagGSTDetails;
    order_integration_id?: string;
    applied_promos?: any[];
    item: Item;
    operational_status?: string;
    prices: Prices;
    identifier?: string;
    affiliate_bag_details: AffiliateBagDetails;
    quantity?: number;
    restore_promos?: any;
    display_name?: string;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    current: number;
    size: number;
    page_type: string;
    has_next: boolean;
    item_total: number;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type GeneratePosOrderReceiptResponse = {
    payment_receipt?: string;
    invoice_receipt?: string;
    success?: boolean;
    order_id?: string;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    error?: string;
    message?: string;
    shipment_id?: string;
    status?: number;
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
    bag_id?: number;
    set_id?: string;
    store_id: number;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    fynd_order_id?: string;
    mongo_article_id?: string;
    reason_ids?: number[];
    item_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_order_id?: string;
    id?: string;
    affiliate_shipment_id?: string;
    reason_text: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    action_type: string;
    action: string;
    entities: Entities[];
};
type Bags = {
    is_locked?: boolean;
    bag_id?: number;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    bags?: Bags[];
    is_bag_locked?: boolean;
    affiliate_shipment_id?: string;
    status?: string;
    shipment_id?: string;
    affiliate_id?: string;
    lock_status?: boolean;
    original_filter?: OriginalFilter;
    is_shipment_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    message?: string;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    created_at?: string;
    platform_name?: string;
    id: number;
    to_datetime?: string;
    title?: string;
    platform_id?: string;
    description?: string;
    from_datetime?: string;
    company_id?: number;
    logo_url?: string;
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
type Products = {
    quantity?: number;
    line_number?: number;
    identifier?: string;
};
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
    products?: Products[];
    identifier: string;
};
type StatuesRequest = {
    status?: string;
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
    force_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
};
type ShipmentsResponse = {
    final_state?: any;
    message?: string;
    stack_trace?: string;
    meta?: any;
    status?: number;
    code?: string;
    exception?: string;
    identifier?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
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
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    created_at: string;
    updated_at: string;
    secret: string;
    id: string;
    meta?: AffiliateAppConfigMeta[];
    token: string;
    owner: string;
    name: string;
    description?: string;
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
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    create_user?: boolean;
    affiliate: Affiliate;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
    store_lookup?: string;
    bag_end_state?: string;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    fynd_store_id: string;
    delivery_charge: number;
    item_id: number;
    item_size: string;
    affiliate_meta: any;
    price_effective: number;
    avl_qty: number;
    price_marked: number;
    identifier: any;
    seller_identifier: string;
    quantity: number;
    modified_on: string;
    store_id: number;
    pdf_links?: MarketPlacePdf;
    sku: string;
    _id: string;
    amount_paid: number;
    hsn_code_id: string;
    affiliate_store_id: string;
    unit_price: number;
    transfer_price: number;
    discount: number;
    company_id: number;
};
type OrderUser = {
    address2?: string;
    state: string;
    phone: number;
    mobile: number;
    address1?: string;
    first_name: string;
    country: string;
    pincode: string;
    city: string;
    last_name: string;
    email: string;
};
type OrderPriority = {
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type ArticleDetails1 = {
    attributes: any;
    category: any;
    dimension: any;
    weight: any;
    brand_id: number;
    quantity: number;
    _id: string;
};
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentDetails = {
    box_type?: string;
    meta?: any;
    affiliate_shipment_id: string;
    shipments: number;
    dp_id?: number;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentConfig = {
    journey: string;
    payment_mode: string;
    location_details?: LocationDetails;
    source: string;
    to_pincode: string;
    identifier: string;
    shipment: ShipmentDetails[];
    action: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    coupon?: string;
    order_value: number;
    payment_mode: string;
    bags: AffiliateBag[];
    billing_address: OrderUser;
    payment?: any;
    affiliate_order_id?: string;
    shipping_address: OrderUser;
    cod_charges: number;
    items: any;
    order_priority?: OrderPriority;
    user: UserData;
    delivery_charges: number;
    discount: number;
    shipment?: ShipmentData;
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
    success?: boolean;
    message?: string;
};
type ActionInfo = {
    id: number;
    description: string;
    display_text: string;
    slug: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    message: string;
    bag_id?: number;
    l2_detail?: string;
    type: string;
    ticket_url?: string;
    user: string;
    createdat: string;
    ticket_id?: string;
    l1_detail?: string;
    l3_detail?: string;
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
    message: string;
    payment_mode: string;
    amount_paid: number;
    brand_name: string;
    country_code: string;
    phone_number: number;
    order_id: string;
    shipment_id: number;
    customer_name: string;
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
    remarks?: string;
    meta: Meta1;
    id: number;
    status?: string;
    shipment_id?: string;
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
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    dp_id: number;
    order_type: string;
    qc_required: string;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ShippingInfo = {
    gender?: string;
    address1: string;
    first_name: string;
    country: string;
    pincode: string;
    landmark?: string;
    floor_no?: string;
    external_customer_code?: string;
    primary_email: string;
    shipping_type?: string;
    alternate_mobile_number?: string;
    state: string;
    primary_mobile_number: string;
    customer_code?: string;
    address_type?: string;
    address2?: string;
    middle_name?: string;
    title?: string;
    city: string;
    last_name?: string;
    house_no?: string;
    country_code?: string;
    geo_location?: any;
    slot?: any[];
    state_code?: string;
    alternate_email?: string;
};
type ProcessingDates = {
    dispatch_by_date?: string;
    dispatch_after_date?: string;
    customer_pickup_slot?: any;
    confirm_by_date?: string;
    pack_by_date?: string;
    dp_pickup_slot?: any;
};
type Tax = {
    breakup?: any[];
    name: string;
    amount: any;
    rate: number;
};
type Charge = {
    amount: any;
    tax?: Tax;
    type: string;
    code?: string;
    name: string;
};
type LineItem = {
    external_line_id?: string;
    meta?: any;
    seller_identifier: string;
    custom_messasge?: string;
    quantity?: number;
    charges?: Charge[];
};
type Shipment = {
    external_shipment_id?: string;
    meta?: any;
    location_id: number;
    processing_dates?: ProcessingDates;
    priority?: number;
    line_items: LineItem[];
};
type BillingInfo = {
    gender?: string;
    address1: string;
    first_name: string;
    country: string;
    pincode: string;
    floor_no?: string;
    external_customer_code?: string;
    primary_email: string;
    alternate_mobile_number?: string;
    state: string;
    primary_mobile_number: string;
    customer_code?: string;
    address2?: string;
    middle_name?: string;
    title?: string;
    city: string;
    last_name?: string;
    house_no?: string;
    country_code?: string;
    state_code?: string;
    alternate_email?: string;
};
type PaymentMethod = {
    amount: number;
    meta?: any;
    collect_by: string;
    name: string;
    mode: string;
    transaction_data?: any;
    refund_by: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type CreateOrderAPI = {
    external_creation_date?: string;
    tax_info?: TaxInfo;
    meta?: any;
    shipping_info: ShippingInfo;
    shipments: Shipment[];
    external_order_id?: string;
    currency_info?: any;
    billing_info: BillingInfo;
    charges?: Charge[];
    payment_info: PaymentInfo;
};
type CreateOrderErrorReponse = {
    message: string;
    stack_trace?: string;
    info?: any;
    meta?: string;
    status: number;
    code?: string;
    exception?: string;
    request_id?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    collect_by?: string;
    refund_by?: string;
    mode?: string;
};
type CreateChannelPaymentInfo = {
    payment_methods?: PaymentMethods[];
    source?: string;
    mode_of_payment?: string;
};
type CreateChannelConfig = {
    lock_states?: string[];
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
    location_reassignment?: boolean;
    payment_info?: CreateChannelPaymentInfo;
    logo_url?: any;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    is_inserted?: boolean;
    acknowledged?: boolean;
    is_upserted?: boolean;
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
    end_date: string;
    mobile: number;
    start_date: string;
    order_details?: FyndOrderIdList[];
};
type GetSearchWordsData = {
    result?: any;
    words?: string[];
    _custom_json?: any;
    uid?: string;
    is_active?: boolean;
    app_id?: string;
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
    result: SearchKeywordResult;
    words?: string[];
    _custom_json?: any;
    is_active?: boolean;
    app_id?: string;
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
    _custom_json?: any;
    uid?: string;
    results?: any[];
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type AutocompletePageAction = {
    query?: any;
    params?: any;
    url?: string;
    type?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type Media = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type AutocompleteResult = {
    action?: AutocompleteAction;
    _custom_json?: any;
    display?: string;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    words?: string[];
    _custom_json?: any;
    is_active?: boolean;
    results?: AutocompleteResult[];
    app_id?: string;
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    words?: string[];
    results?: any[];
    app_id?: string;
};
type ProductBundleItem = {
    product_uid: number;
    auto_add_to_cart?: boolean;
    min_quantity: number;
    max_quantity: number;
    allow_remove?: boolean;
    auto_select?: boolean;
};
type ProductBundleRequest = {
    slug: string;
    modified_by?: any;
    logo?: string;
    products: ProductBundleItem[];
    modified_on?: string;
    page_visibility?: string[];
    company_id?: number;
    created_on?: string;
    name: string;
    choice: string;
    meta?: any;
    same_store_assignment?: boolean;
    is_active: boolean;
    created_by?: any;
};
type GetProductBundleCreateResponse = {
    slug: string;
    modified_by?: any;
    id?: string;
    logo?: string;
    products: ProductBundleItem[];
    modified_on?: string;
    page_visibility?: string[];
    company_id?: number;
    created_on?: string;
    name: string;
    choice: string;
    meta?: any;
    same_store_assignment?: boolean;
    is_active: boolean;
    created_by?: any;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type Size = {
    is_available?: boolean;
    display?: string;
    quantity?: number;
    value?: string;
};
type Price = {
    currency?: string;
    min_marked?: number;
    max_effective?: number;
    max_marked?: number;
    min_effective?: number;
};
type LimitedProductData = {
    slug?: string;
    sizes?: string[];
    images?: string[];
    price?: any;
    quantity?: number;
    uid?: number;
    item_code?: string;
    short_description?: string;
    attributes?: any;
    name?: string;
    country_of_origin?: string;
    identifier?: any;
};
type GetProducts = {
    product_uid?: number;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    min_quantity?: number;
    max_quantity?: number;
    price?: Price;
    allow_remove?: boolean;
    product_details?: LimitedProductData;
    auto_select?: boolean;
};
type GetProductBundleResponse = {
    slug?: string;
    meta?: any;
    logo?: string;
    page_visibility?: string[];
    company_id?: number;
    name?: string;
    choice?: string;
    products?: GetProducts[];
    same_store_assignment?: boolean;
    is_active?: boolean;
};
type ProductBundleUpdateRequest = {
    slug: string;
    modified_by?: any;
    logo?: string;
    products: ProductBundleItem[];
    modified_on?: string;
    page_visibility?: string[];
    company_id?: number;
    name: string;
    choice: string;
    meta?: any;
    same_store_assignment?: boolean;
    is_active: boolean;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    modified_by?: any;
    image?: string;
    id?: string;
    guide?: Guide;
    created_by?: any;
    active?: boolean;
    subtitle?: string;
    modified_on?: string;
    company_id?: number;
    created_on?: string;
    tag?: string;
    name: string;
    title: string;
    description?: string;
    brand_id?: number;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    modified_by?: any;
    id?: string;
    guide?: any;
    title?: string;
    active?: boolean;
    subtitle?: string;
    modified_on?: string;
    company_id?: number;
    created_on?: string;
    name?: string;
    tag?: string;
    created_by?: any;
    brand_id?: number;
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
    seo?: SEOData;
    moq?: MOQData;
    is_cod?: boolean;
    alt_text?: any;
    is_gift?: boolean;
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
    seo?: ApplicationItemSEO;
    moq?: ApplicationItemMOQ;
    _custom_meta?: MetaFields[];
    is_cod?: boolean;
    _custom_json?: any;
    alt_text?: any;
    is_gift?: boolean;
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
type AttributeDetailsGroup = {
    slug?: string;
    is_active: boolean;
    logo?: string;
    name: string;
    unit?: string;
    key?: string;
    display_type: string;
    priority: number;
};
type AppConfigurationDetail = {
    slug: string;
    is_default: boolean;
    logo?: string;
    name?: string;
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    is_active: boolean;
    priority: number;
    app_id: string;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    total_count: number;
    next: number;
    current: number;
    has_next: boolean;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_default: boolean;
    logo?: string;
    name?: string;
    default_key: string;
    key: string;
    priority: number;
    is_active: boolean;
    app_id: string;
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
    compare?: any;
    similar?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
    value?: string;
    map_values?: any[];
    map?: any;
};
type ConfigurationListingFilterConfig = {
    value_config?: ConfigurationListingFilterValue;
    is_active: boolean;
    logo?: string;
    type: string;
    name?: string;
    display_name?: string;
    key: string;
    priority: number;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    logo?: string;
    name?: string;
    key: string;
    priority: number;
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
    is_active: boolean;
    logo?: string;
    size: ProductSize;
    name: string;
    key: string;
    display_type: string;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    is_active: boolean;
    logo?: string;
    subtitle?: string;
    size?: ProductSize;
    title?: string;
    key: string;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppConfiguration = {
    modified_by?: any;
    config_type: string;
    config_id?: string;
    type?: string;
    modified_on?: string;
    created_on?: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    created_by?: any;
    app_id: string;
};
type AppCatalogConfiguration = {
    modified_by?: any;
    id?: string;
    config_type: string;
    config_id?: string;
    type?: string;
    modified_on?: string;
    created_on?: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    created_by?: any;
    app_id: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    id?: string;
    config_type: string;
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    product?: GetCatalogConfigurationDetailsProduct;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    value?: string;
    is_selected?: boolean;
    name?: string;
};
type ProductFiltersKey = {
    operators?: string[];
    kind?: string;
    display: string;
    logo?: string;
    name: string;
};
type ProductFiltersValue = {
    count?: number;
    display: string;
    min?: number;
    query_format?: string;
    selected_max?: number;
    currency_code?: string;
    is_selected: boolean;
    value: any;
    display_format?: string;
    currency_symbol?: string;
    max?: number;
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
type CollectionSchedule = {
    start?: string;
    end?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
    cron?: string;
};
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
};
type UserInfo = {
    user_id?: string;
    uid?: string;
    username?: string;
    email?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
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
type CreateCollection = {
    tags?: string[];
    visible_facets_keys?: string[];
    _schedule?: CollectionSchedule;
    allow_sort?: boolean;
    published?: boolean;
    query?: CollectionQuery[];
    app_id: string;
    modified_by?: UserInfo;
    is_visible?: boolean;
    logo: CollectionImage;
    banners: CollectionBanner;
    name: string;
    created_by?: UserInfo;
    _locale_language?: any;
    seo?: SeoDetail;
    allow_facets?: boolean;
    type: string;
    badge?: CollectionBadge;
    priority?: number;
    slug: string;
    _custom_json?: any;
    description?: string;
    sort_on?: string;
    meta?: any;
    is_active?: boolean;
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
    visible_facets_keys?: string[];
    _schedule?: any;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    cron?: any;
    app_id?: string;
    logo?: BannerImage;
    banners?: ImageUrls;
    name?: string;
    tag?: string[];
    allow_facets?: boolean;
    type?: string;
    badge?: any;
    priority?: number;
    slug?: string;
    description?: string;
    sort_on?: string;
    meta?: any;
    is_active?: boolean;
};
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type GetCollectionDetailNest = {
    visible_facets_keys?: string[];
    _schedule?: any;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    cron?: any;
    app_id?: string;
    logo?: Media1;
    banners?: ImageUrls;
    name?: string;
    tag?: string[];
    action?: Action;
    allow_facets?: boolean;
    type?: string;
    badge?: any;
    priority?: number;
    slug?: string;
    uid?: string;
    description?: string;
    meta?: any;
    is_active?: boolean;
};
type CollectionListingFilterTag = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilterType = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    page?: Page;
    filters?: CollectionListingFilter;
};
type CollectionDetailResponse = {
    visible_facets_keys?: string[];
    _schedule?: any;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    cron?: any;
    app_id?: string;
    logo?: Media1;
    banners?: ImageUrls;
    name?: string;
    tag?: string[];
    allow_facets?: boolean;
    type?: string;
    badge?: any;
    priority?: number;
    slug?: string;
    uid?: string;
    description?: string;
    meta?: any;
    is_active?: boolean;
};
type UpdateCollection = {
    tags?: string[];
    visible_facets_keys?: string[];
    _schedule?: CollectionSchedule;
    allow_sort?: boolean;
    published?: boolean;
    query?: CollectionQuery[];
    modified_by?: UserInfo;
    is_visible?: boolean;
    logo?: CollectionImage;
    banners?: CollectionBanner;
    name?: string;
    _locale_language?: any;
    seo?: SeoDetail;
    allow_facets?: boolean;
    type?: string;
    badge?: CollectionBadge;
    priority?: number;
    slug?: string;
    _custom_json?: any;
    description?: string;
    sort_on?: string;
    meta?: any;
    is_active?: boolean;
};
type CollectionItem = {
    action: string;
    item_id: number;
    priority?: number;
};
type CollectionItemUpdate = {
    items?: CollectionItem[];
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    type?: string;
    allow_sort?: boolean;
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type ProductDetailAttribute = {
    value?: string;
    key?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductBrand = {
    action?: Action;
    uid?: number;
    logo?: Media1;
    name?: string;
};
type Price1 = {
    max?: number;
    currency_symbol?: string;
    currency_code?: string;
    min?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    rating?: number;
    image_nature?: string;
    product_online_date?: string;
    short_description?: string;
    item_code?: string;
    highlights?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    name?: string;
    rating_count?: number;
    brand?: ProductBrand;
    attributes?: any;
    discount?: string;
    price?: ProductListingPrice;
    type?: string;
    sellable?: boolean;
    similars?: string[];
    slug: string;
    medias?: Media1[];
    item_type?: string;
    teaser_tag?: any;
    uid?: number;
    description?: string;
    color?: string;
    tryouts?: string[];
    has_variant?: boolean;
    promo_meta?: any;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page?: Page;
    filters?: ProductFilters[];
};
type CatalogInsightItem = {
    sellable_count?: number;
    count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightBrand = {
    article_freshness?: number;
    available_articles?: number;
    total_sizes?: number;
    name?: string;
    total_articles?: number;
    available_sizes?: number;
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
    brand_ids?: number[];
    platform?: string;
    opt_level: string;
    company_id?: number;
    enabled?: boolean;
    store_ids?: number[];
};
type CompanyOptIn = {
    modified_by?: any;
    brand_ids: number[];
    platform: string;
    opt_level: string;
    modified_on: number;
    company_id: number;
    created_on: number;
    created_by?: any;
    enabled: boolean;
    store_ids: number[];
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    company_type?: string;
    uid?: number;
    name?: string;
    business_type?: string;
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
    manager?: any;
    timing?: any;
    modified_on?: string;
    uid?: number;
    company_id?: number;
    created_on?: string;
    name?: string;
    documents?: any[];
    address?: any;
    display_name?: string;
    store_type?: string;
    store_code?: string;
    additional_contacts?: any[];
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    indexing: boolean;
    priority?: number;
    depends_on?: string[];
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    mandatory?: boolean;
    type: string;
    allowed_values?: string[];
    format?: string;
    range?: AttributeSchemaRange;
    multi?: boolean;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type GenderDetail = {
    slug?: string;
    id?: string;
    details?: AttributeMasterDetails;
    filters?: AttributeMasterFilter;
    schema?: AttributeMaster;
    is_nested?: boolean;
    logo?: string;
    enabled_for_end_consumer?: boolean;
    name?: string;
    description?: string;
    departments?: string[];
    meta?: AttributeMasterMeta;
};
type CategoriesResponse = {
    slug?: string;
    slug_key?: string;
    template_slug?: string;
    uid?: number;
    name?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: CategoriesResponse[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    errors?: any;
    status?: number;
    meta?: any;
    code?: string;
};
type DepartmentCreateUpdate = {
    platforms?: any;
    slug?: string;
    tags?: string[];
    _cls?: string;
    priority_order: number;
    synonyms?: string[];
    logo: string;
    uid?: number;
    _custom_json?: any;
    name: string;
    is_active?: boolean;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    user_id?: string;
    _id?: string;
    uid?: string;
    contact?: string;
    username?: string;
};
type GetDepartment = {
    slug?: string;
    modified_by?: UserSerializer;
    priority_order?: number;
    page_no?: number;
    synonyms?: string[];
    item_type?: string;
    logo?: string;
    search?: string;
    modified_on?: string;
    page_size?: number;
    uid?: number;
    created_on?: string;
    name?: string;
    created_by?: UserSerializer;
    is_active?: boolean;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    errors?: any;
    status?: number;
    meta?: any;
    code?: string;
};
type UserDetail = {
    user_id: string;
    super_user?: boolean;
    contact?: string;
    username: string;
};
type DepartmentModel = {
    modified_by?: UserDetail;
    slug: any;
    _cls?: any;
    priority_order: number;
    synonyms?: any[];
    logo: string;
    _id?: any;
    modified_on: string;
    uid: number;
    _custom_json?: any;
    created_on: string;
    name: any;
    verified_by?: UserDetail;
    created_by?: UserDetail;
    verified_on?: string;
    is_active?: boolean;
};
type ProductTemplate = {
    slug: string;
    modified_by?: any;
    is_physical: boolean;
    created_by?: any;
    is_expirable: boolean;
    logo?: string;
    modified_on?: string;
    created_on?: string;
    categories?: string[];
    name?: string;
    tag?: string;
    description?: string;
    departments?: string[];
    is_active?: boolean;
    attributes?: string[];
    is_archived?: boolean;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    tags?: any;
    no_of_boxes?: any;
    sizes?: any;
    multi_size?: any;
    item_code?: any;
    variants?: any;
    short_description?: any;
    highlights?: any;
    currency?: any;
    category_slug?: any;
    size_guide?: any;
    name?: any;
    command?: any;
    media?: any;
    product_group_tag?: any;
    brand_uid?: any;
    custom_order?: any;
    hsn_code?: any;
    slug?: any;
    trader_type?: any;
    is_dependent?: any;
    item_type?: any;
    teaser_tag?: any;
    description?: any;
    trader?: any;
    return_config?: any;
    is_active?: any;
    product_publish?: any;
    country_of_origin?: any;
};
type GlobalValidation = {
    properties?: Properties;
    required?: string[];
    type?: string;
    definitions?: any;
    description?: string;
    title?: string;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    slug: string;
    id?: string;
    is_physical: boolean;
    is_expirable: boolean;
    logo?: string;
    categories?: string[];
    name?: string;
    tag?: string;
    description?: string;
    departments?: string[];
    is_active?: boolean;
    attributes?: string[];
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
    country_of_origin?: string[];
    hsn_code?: string[];
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type UserInfo1 = {
    user_id?: string;
    uid?: string;
    username?: string;
    email?: string;
};
type ProductTemplateExportResponse = {
    seller_id: number;
    filters?: any;
    notification_emails?: string[];
    url?: string;
    type?: string;
    task_id: string;
    modified_on?: string;
    status?: string;
    completed_on?: string;
    created_by?: UserInfo1;
};
type ProductDownloadsResponse = {
    items?: ProductTemplateExportResponse[];
};
type ProductTemplateExportFilterRequest = {
    catalogue_types: string[];
    from_date?: string;
    templates: string[];
    to_date?: string;
    brands?: string[];
};
type ProductTemplateDownloadsExport = {
    notification_emails?: string[];
    type?: string;
    filters?: ProductTemplateExportFilterRequest;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type Media2 = {
    portrait: string;
    landscape: string;
    logo: string;
};
type CategoryRequestBody = {
    slug?: string;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    level: number;
    marketplaces?: CategoryMapping;
    name: string;
    departments: number[];
    tryouts?: string[];
    is_active: boolean;
    media?: Media2;
    priority?: number;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    slug?: string;
    modified_by?: any;
    id?: string;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    level: number;
    modified_on?: string;
    uid?: number;
    marketplaces?: CategoryMapping;
    created_on?: string;
    name: string;
    created_by?: any;
    departments: number[];
    tryouts?: string[];
    is_active: boolean;
    media?: Media2;
    priority?: number;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
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
    address?: string[];
    name: any;
    type?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductCreateUpdateSchemaV2 = {
    tags?: string[];
    is_image_less_product?: boolean;
    no_of_boxes?: number;
    bulk_job_id?: string;
    sizes: any[];
    requester?: string;
    multi_size?: boolean;
    is_set?: boolean;
    item_code: string;
    variants?: any;
    short_description?: string;
    departments: number[];
    template_tag: string;
    highlights?: string[];
    currency: string;
    tax_identifier: TaxIdentifier;
    net_quantity?: NetQuantity;
    category_slug: string;
    size_guide?: string;
    return_config: ReturnConfig;
    name: string;
    attributes?: any;
    media?: Media1[];
    product_group_tag?: string[];
    action?: string;
    brand_uid: number;
    variant_media?: any;
    company_id: number;
    custom_order?: CustomOrder;
    variant_group?: any;
    slug: string;
    is_dependent?: boolean;
    item_type: string;
    teaser_tag?: TeaserTag;
    _custom_json?: any;
    uid?: number;
    description?: string;
    trader: Trader[];
    change_request_id?: any;
    is_active?: boolean;
    product_publish?: ProductPublish;
    country_of_origin: string;
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
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Logo = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type Image = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type ProductPublish1 = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductSchemaV2 = {
    tags?: string[];
    id?: string;
    primary_color?: string;
    sizes?: any[];
    no_of_boxes?: number;
    is_image_less_product?: boolean;
    verified_by?: VerifiedBy;
    multi_size?: boolean;
    is_set?: boolean;
    item_code?: string;
    image_nature?: string;
    short_description?: string;
    variants?: any;
    departments?: number[];
    pending?: string;
    template_tag?: string;
    highlights?: string[];
    all_sizes?: any[];
    modified_by?: any;
    currency?: string;
    tax_identifier?: any;
    net_quantity?: NetQuantityResponse;
    stage?: string;
    category_slug?: string;
    size_guide?: string;
    return_config?: ReturnConfigResponse;
    name?: string;
    brand?: Brand;
    attributes?: any;
    created_by?: any;
    verified_on?: string;
    media?: Media1[];
    product_group_tag?: string[];
    category?: any;
    brand_uid?: number;
    l3_mapping?: string[];
    images?: Image[];
    is_expirable?: boolean;
    variant_media?: any;
    company_id?: number;
    all_identifiers?: string[];
    custom_order?: any;
    all_company_ids?: number[];
    variant_group?: any;
    slug?: string;
    is_physical?: boolean;
    is_dependent?: boolean;
    category_uid?: number;
    moq?: any;
    item_type?: string;
    teaser_tag?: any;
    modified_on?: string;
    _custom_json?: any;
    uid?: number;
    created_on?: string;
    description?: string;
    hsn_code?: string;
    color?: string;
    trader?: Trader[];
    is_active?: boolean;
    product_publish?: ProductPublish1;
    country_of_origin?: string;
};
type ProductListingResponseV2 = {
    items?: ProductSchemaV2[];
    page?: Page;
};
type ProductVariants = {
    brand_uid?: number;
    category_uid?: number;
    uid?: number;
    item_code?: string;
    name?: string;
    media?: Media1[];
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    tags?: string[];
    filters: AttributeMasterFilter;
    departments: string[];
    modified_by?: any;
    logo?: string;
    raw_key?: string;
    name?: string;
    created_by?: any;
    synonyms?: any;
    variant?: boolean;
    is_nested?: boolean;
    suggestion?: string;
    unit?: string;
    slug: string;
    details: AttributeMasterDetails;
    schema: AttributeMaster;
    modified_on?: string;
    enabled_for_end_consumer?: boolean;
    created_on?: string;
    description?: string;
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
    identifiers?: ValidateIdentifier[];
    item_dimensions_unit_of_measure: string;
    item_weight_unit_of_measure: any;
    item_width: number;
    size: any;
    item_height: number;
    item_length: number;
    item_weight: number;
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
    tags?: string[];
    id?: string;
    primary_color?: string;
    sizes?: any[];
    no_of_boxes?: number;
    is_image_less_product?: boolean;
    verified_by?: VerifiedBy;
    multi_size?: boolean;
    is_set?: boolean;
    item_code?: string;
    image_nature?: string;
    short_description?: string;
    variants?: any;
    departments?: number[];
    pending?: string;
    template_tag?: string;
    highlights?: string[];
    all_sizes?: any[];
    modified_by?: any;
    currency?: string;
    tax_identifier?: any;
    net_quantity?: NetQuantityResponse;
    stage?: string;
    category_slug?: string;
    size_guide?: string;
    return_config?: ReturnConfigResponse;
    name?: string;
    brand?: Brand;
    attributes?: any;
    created_by?: any;
    verified_on?: string;
    media?: Media1[];
    product_group_tag?: string[];
    category?: any;
    brand_uid?: number;
    l3_mapping?: string[];
    images?: Image[];
    is_expirable?: boolean;
    variant_media?: any;
    company_id?: number;
    all_identifiers?: string[];
    custom_order?: any;
    all_company_ids?: number[];
    variant_group?: any;
    slug?: string;
    is_physical?: boolean;
    is_dependent?: boolean;
    category_uid?: number;
    moq?: any;
    item_type?: string;
    teaser_tag?: any;
    modified_on?: string;
    _custom_json?: any;
    uid?: number;
    created_on?: string;
    description?: string;
    hsn_code?: string;
    color?: string;
    trader?: Trader[];
    is_active?: boolean;
    product_publish?: ProductPublished;
    country_of_origin?: string;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type BulkJob = {
    modified_by?: UserInfo1;
    failed?: number;
    custom_template_tag?: string;
    file_path?: string;
    cancelled?: number;
    total?: number;
    stage?: string;
    failed_records?: any[];
    modified_on?: string;
    succeed?: number;
    tracking_url?: string;
    company_id: number;
    created_on: string;
    created_by?: UserInfo1;
    is_active?: boolean;
    cancelled_records?: any[];
    template_tag?: string;
};
type BulkResponse = {
    modified_by?: UserInfo1;
    batch_id: string;
    modified_on?: string;
    created_on: string;
    created_by?: UserInfo1;
    is_active?: boolean;
};
type UserDetail1 = {
    user_id?: string;
    username?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    modified_by?: UserDetail1;
    file_path?: string;
    cancelled?: number;
    template?: ProductTemplate;
    stage?: string;
    total?: number;
    failed_records?: string[];
    modified_on?: string;
    succeed?: number;
    company_id?: number;
    created_on?: string;
    failed?: number;
    created_by?: UserDetail1;
    is_active?: boolean;
    cancelled_records?: string[];
    template_tag?: string;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
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
type ProductBulkAssets = {
    company_id?: number;
    url: string;
    user: any;
};
type UserCommon = {
    user_id?: string;
    company_id?: number;
    username?: string;
};
type Items = {
    modified_by?: UserCommon;
    failed?: number;
    retry?: number;
    id?: string;
    cancelled?: number;
    stage?: string;
    total?: number;
    failed_records?: string[];
    modified_on?: string;
    succeed?: number;
    tracking_url?: string;
    company_id?: number;
    created_on?: string;
    cancelled_records?: string[];
    created_by?: UserCommon;
    is_active?: boolean;
    file_path?: string;
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
    quantity?: number;
    name?: string;
};
type InvSize = {
    item_dimensions_unit_of_measure?: string;
    identifiers: GTIN[];
    item_weight_unit_of_measure?: string;
    currency: string;
    price_transfer?: number;
    item_width?: number;
    price?: number;
    set?: InventorySet;
    price_effective: number;
    size: any;
    item_height?: number;
    quantity: number;
    is_set?: boolean;
    expiration_date?: string;
    item_length?: number;
    store_code: string;
    item_weight?: number;
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
type InventoryResponse = {
    identifiers?: any;
    currency?: string;
    price_transfer?: number;
    sellable_quantity?: number;
    price?: number;
    quantity?: number;
    inventory_updated_on?: string;
    price_effective?: number;
    size?: string;
    store?: any;
    uid?: string;
    seller_identifier?: string;
    item_id?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ManufacturerResponse = {
    is_default: boolean;
    address: string;
    name: string;
};
type WeightResponse = {
    shipping: number;
    is_default: boolean;
    unit: string;
};
type BrandMeta = {
    id: number;
    name: string;
};
type PriceMeta = {
    marked: number;
    transfer: number;
    currency: string;
    updated_at?: string;
    tp_notes?: any;
    effective: number;
};
type DimensionResponse = {
    is_default: boolean;
    height: number;
    length: number;
    width: number;
    unit: string;
};
type CompanyMeta = {
    id: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    sellable?: QuantityBase;
    order_committed?: QuantityBase;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type ReturnConfig1 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type InventorySellerResponse = {
    tags?: string[];
    trace_id?: string;
    manufacturer: ManufacturerResponse;
    set?: InventorySet;
    is_set?: boolean;
    added_on_store?: string;
    fragile: boolean;
    modified_by?: UserSerializer;
    tax_identifier?: any;
    weight: WeightResponse;
    fynd_item_code: string;
    stage?: string;
    fynd_meta?: any;
    seller_identifier: string;
    brand: BrandMeta;
    created_by?: UserSerializer;
    identifier: any;
    track_inventory?: boolean;
    raw_meta?: any;
    price: PriceMeta;
    store: StoreMeta;
    dimension: DimensionResponse;
    expiration_date?: string;
    company: CompanyMeta;
    item_id: number;
    fynd_article_code: string;
    total_quantity: number;
    quantities?: Quantities;
    size: string;
    uid: string;
    _custom_json?: any;
    trader?: Trader1[];
    return_config?: ReturnConfig1;
    meta?: any;
    is_active?: boolean;
    country_of_origin: string;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    address?: string;
    name?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type PriceArticle = {
    marked?: number;
    transfer?: number;
    currency?: string;
    tp_notes?: any;
    effective?: number;
};
type ArticleStoreResponse = {
    store_code?: string;
    uid?: number;
    store_type?: string;
    name?: string;
};
type DimensionResponse1 = {
    unit?: string;
    height?: number;
    width?: number;
    length?: number;
};
type CompanyMeta1 = {
    id?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    not_available?: Quantity;
    damaged?: Quantity;
    sellable?: Quantity;
    order_committed?: Quantity;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type ReturnConfig2 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type GetInventories = {
    tags?: string[];
    id?: string;
    trace_id?: string;
    manufacturer?: ManufacturerResponse1;
    is_set?: boolean;
    modified_by?: UserSerializer;
    platforms?: any;
    tax_identifier?: any;
    weight?: WeightResponse1;
    stage?: string;
    inventory_updated_on?: string;
    seller_identifier?: string;
    brand?: BrandMeta1;
    created_by?: UserSerializer;
    identifier?: any;
    track_inventory?: boolean;
    price?: PriceArticle;
    store?: ArticleStoreResponse;
    dimension?: DimensionResponse1;
    expiration_date?: string;
    company?: CompanyMeta1;
    item_id?: number;
    total_quantity?: number;
    quantities?: QuantitiesArticle;
    size?: string;
    date_meta?: DateMeta;
    uid?: string;
    trader?: Trader2[];
    return_config?: ReturnConfig2;
    country_of_origin?: string;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    failed?: number;
    modified_by?: any;
    id?: string;
    file_path?: string;
    cancelled?: number;
    stage?: string;
    total?: number;
    failed_records?: string[];
    modified_on?: string;
    succeed?: number;
    company_id?: number;
    created_on?: string;
    created_by?: any;
    is_active?: boolean;
    cancelled_records?: string[];
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    total_quantity?: number;
    item_dimensions_unit_of_measure?: string;
    tags?: string[];
    item_weight_unit_of_measure?: string;
    currency?: string;
    price_marked?: number;
    trace_id?: string;
    price?: number;
    quantity?: number;
    price_effective?: number;
    seller_identifier: string;
    expiration_date?: string;
    store_code: string;
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    batch_id: string;
    company_id: number;
    user?: any;
};
type InventoryExportRequest = {
    store?: number[];
    type?: string;
    brand?: number[];
};
type InventoryExportResponse = {
    seller_id: number;
    filters?: any;
    notification_emails?: string[];
    type?: string;
    task_id: string;
    modified_on?: string;
    status?: string;
    created_on?: string;
    created_by?: string;
};
type InventoryExportQuantityFilter = {
    max?: number;
    operators: string;
    min?: number;
};
type InventoryExportAdvanceOption = {
    brand_ids?: number[];
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    to_date?: string;
    store_ids?: number[];
};
type InventoryExportJob = {
    seller_id: number;
    filters?: InventoryExportAdvanceOption;
    notification_emails?: string[];
    url?: string;
    type: string;
    task_id: string;
    status?: string;
    completed_on?: string;
};
type InventoryExportFilter = {
    brand_ids?: number[];
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    to_date?: string;
    store_ids: number[];
};
type InventoryCreateRequest = {
    data?: string[];
    notification_emails?: string[];
    type?: string;
    filters: InventoryExportFilter;
};
type InventoryJobFilters = {
    stores?: string[];
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    to_date?: string;
    brands?: string[];
};
type InventoryJobDetailResponse = {
    cancelled_on?: string;
    id: string;
    seller_id: number;
    filters: InventoryJobFilters;
    notification_emails?: string[];
    url: string;
    type?: string;
    task_id: string;
    modified_on?: string;
    status?: any;
    completed_on?: string;
    cancelled_by?: UserDetail;
    created_on?: string;
    created_by?: UserDetail;
};
type InventoryExportJobListResponse = {
    items: InventoryJobDetailResponse;
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
    tags?: string[];
    price_marked?: number;
    trace_id?: string;
    price_effective?: number;
    seller_identifier: string;
    expiration_date?: string;
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
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    threshold2?: number;
    tax2?: number;
    id?: string;
    threshold1?: number;
    hs2_code?: string;
    tax1?: number;
    modified_on?: string;
    tax_on_esp?: boolean;
    company_id?: number;
    hsn_code?: string;
    tax_on_mrp?: boolean;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    threshold2?: number;
    tax2?: number;
    threshold1: number;
    hs2_code: string;
    tax1: number;
    tax_on_esp?: boolean;
    company_id: number;
    uid?: number;
    hsn_code: string;
    is_active?: boolean;
    tax_on_mrp: boolean;
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
    cess?: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    modified_by?: any;
    type: string;
    reporting_hsn: string;
    hsn_code_id?: string;
    modified_on?: string;
    taxes: TaxSlab[];
    created_on?: string;
    description: string;
    hsn_code: string;
    country_code: string;
    created_by?: any;
};
type PageResponse = {
    item_total?: number;
    has_previous?: boolean;
    current?: string;
    size?: number;
    has_next?: boolean;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    slug?: string;
    action?: Action;
    discount?: string;
    logo?: Media;
    banners?: ImageUrls;
    uid?: number;
    name?: string;
    departments?: string[];
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    slug?: string;
    priority_order?: number;
    logo?: Media;
    uid?: number;
    name?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    slug?: string;
    action?: Action;
    childs?: any[];
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
    name?: string;
};
type SecondLevelChild = {
    slug?: string;
    action?: Action;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
    name?: string;
};
type Child = {
    slug?: string;
    action?: Action;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
    name?: string;
};
type CategoryItems = {
    slug?: string;
    action?: Action;
    childs?: Child[];
    banners?: ImageUrls;
    uid?: number;
    name?: string;
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
    operators?: any;
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page: Page;
};
type ProductDetail = {
    rating?: number;
    image_nature?: string;
    product_online_date?: string;
    short_description?: string;
    item_code?: string;
    highlights?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    name?: string;
    rating_count?: number;
    brand?: ProductBrand;
    attributes?: any;
    type?: string;
    similars?: string[];
    slug: string;
    medias?: Media1[];
    item_type?: string;
    teaser_tag?: any;
    uid?: number;
    description?: string;
    color?: string;
    tryouts?: string[];
    has_variant?: boolean;
    promo_meta?: any;
};
type InventoryPage = {
    next_id?: string;
    item_total: number;
    has_previous?: boolean;
    type: string;
    has_next?: boolean;
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
    meta?: any;
    article_assignment?: ArticleAssignment;
    quantity?: number;
    query?: ArticleQuery;
};
type AssignStore = {
    articles: AssignStoreArticle[];
    pincode: string;
    channel_identifier?: string;
    company_id?: number;
    channel_type?: string;
    store_ids?: number[];
    app_id: string;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    group_id?: string;
    price_marked?: number;
    article_assignment: ArticleAssignment1;
    strategy_wise_listing?: any[];
    quantity: number;
    index?: number;
    size: string;
    price_effective?: number;
    _id?: string;
    store_pincode?: number;
    uid?: string;
    status: boolean;
    company_id?: number;
    s_city?: string;
    meta?: any;
    store_id?: number;
    item_id: number;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type UserSerializer1 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobile_no: SellerPhoneNumber;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetAddressSerializer = {
    address1?: string;
    city?: string;
    landmark?: string;
    latitude?: number;
    address_type?: string;
    pincode?: number;
    address2?: string;
    longitude?: number;
    state?: string;
    country_code?: string;
    country?: string;
};
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetCompanySerializer = {
    modified_by?: UserSerializer2;
    reject_reason?: string;
    company_type?: string;
    stage?: string;
    modified_on?: string;
    uid?: number;
    created_on?: string;
    name?: string;
    verified_by?: UserSerializer2;
    created_by?: UserSerializer2;
    verified_on?: string;
    addresses?: GetAddressSerializer[];
    business_type?: string;
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
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
};
type GetLocationSerializer = {
    documents?: Document[];
    integration_type?: LocationIntegrationType;
    store_type?: string;
    modified_by?: UserSerializer1;
    phone_number: string;
    stage?: string;
    name: string;
    created_by?: UserSerializer1;
    verified_on?: string;
    manager?: LocationManagerSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    warnings?: any;
    contact_numbers?: SellerPhoneNumber[];
    address: GetAddressSerializer;
    company?: GetCompanySerializer;
    code: string;
    notification_emails?: string[];
    gst_credentials?: InvoiceDetailsSerializer;
    timing?: LocationDayWiseSerializer[];
    modified_on?: string;
    uid?: number;
    _custom_json?: any;
    created_on?: string;
    verified_by?: UserSerializer1;
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
    logo?: string;
    uid: number;
    _custom_json?: any;
    name?: string;
    is_active?: boolean;
    app_id: string;
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
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type GetCompanyProfileSerializerResponse = {
    created_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    warnings?: any;
    franchise_enabled?: boolean;
    mode?: string;
    documents?: Document[];
    business_details?: BusinessDetails;
    business_type: string;
    business_info?: string;
    modified_by?: UserSerializer;
    uid: number;
    notification_emails?: string[];
    verified_on?: string;
    created_on?: string;
    taxes?: CompanyTaxesSerializer[];
    contact_details?: ContactDetails;
    verified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    _custom_json?: any;
    stage?: string;
    company_type: string;
    name?: string;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type CreateUpdateAddressSerializer = {
    country: string;
    country_code?: string;
    landmark?: string;
    longitude: number;
    state: string;
    latitude: number;
    address_type: string;
    city: string;
    address1: string;
    address2?: string;
    pincode: number;
};
type UpdateCompany = {
    warnings?: any;
    notification_emails?: string[];
    franchise_enabled?: boolean;
    _custom_json?: any;
    documents?: Document[];
    business_details?: BusinessDetails;
    taxes?: CompanyTaxesSerializer1[];
    contact_details?: ContactDetails;
    company_type?: string;
    reject_reason?: string;
    addresses?: CreateUpdateAddressSerializer[];
    business_type?: string;
    business_info?: string;
    name?: string;
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
    product?: DocumentsObj;
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
    stage?: string;
    brand?: DocumentsObj;
    store?: DocumentsObj;
    uid?: number;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    description?: string;
    created_by?: UserSerializer;
    warnings?: any;
    mode?: string;
    modified_by?: UserSerializer;
    uid?: number;
    verified_on?: string;
    logo?: string;
    created_on?: string;
    banner?: BrandBannerSerializer;
    verified_by?: UserSerializer;
    reject_reason?: string;
    modified_on?: string;
    _custom_json?: any;
    _locale_language?: any;
    synonyms?: string[];
    stage?: string;
    slug_key?: string;
    name: string;
};
type CreateUpdateBrandRequestSerializer = {
    description?: string;
    company_id?: number;
    _custom_json?: any;
    _locale_language?: any;
    brand_tier?: string;
    logo: string;
    synonyms?: string[];
    banner?: BrandBannerSerializer;
    name: string;
    uid?: number;
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanySerializer = {
    addresses?: GetAddressSerializer[];
    notification_emails?: string[];
    modified_on?: string;
    market_channels?: string[];
    _custom_json?: any;
    verified_on?: string;
    details?: CompanyDetails;
    stage?: string;
    created_on?: string;
    reject_reason?: string;
    verified_by?: UserSerializer;
    company_type: string;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    name?: string;
    uid?: number;
};
type CompanyBrandSerializer = {
    warnings?: any;
    company?: CompanySerializer;
    modified_on?: string;
    verified_on?: string;
    stage?: string;
    created_on?: string;
    reject_reason?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    uid?: number;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
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
    holiday_type: string;
    date: HolidayDateSerializer;
};
type AddressSerializer = {
    country?: string;
    country_code?: string;
    landmark?: string;
    address_type?: string;
    state?: string;
    latitude: number;
    longitude: number;
    city?: string;
    address1?: string;
    address2?: string;
    pincode?: number;
};
type LocationSerializer = {
    contact_numbers?: SellerPhoneNumber[];
    address: AddressSerializer;
    warnings?: any;
    notification_emails?: string[];
    company: number;
    _custom_json?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    documents?: Document[];
    timing?: LocationDayWiseSerializer[];
    stage?: string;
    product_return_config?: ProductReturnConfigSerializer;
    holiday?: HolidaySchemaSerializer[];
    store_type?: string;
    uid?: number;
    manager?: LocationManagerSerializer;
    code: string;
    name: string;
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
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    title?: string;
    auto?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    subtitle?: string;
    description?: string;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type UsesRemaining = {
    total?: number;
    user?: number;
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
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue;
    networks?: string[];
    types?: string[];
};
type Restrictions = {
    platforms?: string[];
    ordering_stores?: number[];
    user_groups?: number[];
    coupon_allowed?: boolean;
    bulk_bundle?: BulkBundleRestriction;
    price_range?: PriceRange;
    uses?: UsesRestriction;
    post_order?: PostOrder;
    user_type?: string;
    payments?: any;
};
type CouponSchedule = {
    end?: string;
    start?: string;
    duration?: number;
    next_schedule?: any[];
    cron?: string;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type RuleDefinition = {
    calculate_on: string;
    applicable_on: string;
    is_exact?: boolean;
    type: string;
    currency_code?: string;
    auto_apply?: boolean;
    scope?: string[];
    value_type: string;
};
type Rule = {
    discount_qty?: number;
    min?: number;
    key?: number;
    max?: number;
    value?: number;
};
type Validity = {
    priority?: number;
};
type Validation = {
    user_registered_after?: string;
    app_id?: string[];
    anonymous?: boolean;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CouponAdd = {
    display_meta: DisplayMeta;
    type_slug: string;
    restrictions?: Restrictions;
    _schedule?: CouponSchedule;
    tags?: string[];
    state?: State;
    ownership: Ownership;
    code: string;
    rule_definition: RuleDefinition;
    rule: Rule[];
    validity: Validity;
    validation?: Validation;
    date_meta?: CouponDateMeta;
    identifiers: Identifier;
    action?: CouponAction;
    author?: CouponAuthor;
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
    display_meta: DisplayMeta;
    type_slug: string;
    restrictions?: Restrictions;
    _schedule?: CouponSchedule;
    tags?: string[];
    state?: State;
    ownership: Ownership;
    code: string;
    rule_definition: RuleDefinition;
    rule: Rule[];
    validity: Validity;
    validation?: Validation;
    date_meta?: CouponDateMeta;
    identifiers: Identifier;
    action?: CouponAction;
    author?: CouponAuthor;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
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
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
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
type Restrictions1 = {
    platforms?: string[];
    order_quantity?: number;
    user_groups?: number[];
    user_registered?: UserRegistered;
    anonymous_users?: boolean;
    user_id?: string[];
    uses: UsesRestriction1;
    post_order?: PostOrder1;
    payments?: PromotionPaymentModes[];
};
type CompareObject = {
    equals?: number;
    less_than_equals?: number;
    less_than?: number;
    greater_than_equals?: number;
    greater_than?: number;
};
type ItemCriteria = {
    cart_quantity?: CompareObject;
    item_exclude_brand?: number[];
    item_exclude_category?: number[];
    item_exclude_id?: number[];
    item_exclude_sku?: string[];
    buy_rules?: string[];
    item_company?: number[];
    available_zones?: string[];
    item_exclude_store?: number[];
    cart_total?: CompareObject;
    item_size?: string[];
    item_exclude_company?: number[];
    all_items?: boolean;
    item_category?: number[];
    item_store?: number[];
    item_id?: number[];
    cart_unique_item_amount?: CompareObject;
    item_brand?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_sku?: string[];
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type DisplayMeta1 = {
    description?: string;
    name?: string;
    offer_text?: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type DiscountOffer = {
    max_offer_quantity?: number;
    max_usage_per_transaction?: number;
    code?: string;
    apportion_discount?: boolean;
    discount_percentage?: number;
    partial_can_ret?: boolean;
    min_offer_quantity?: number;
    discount_amount?: number;
    discount_price?: number;
    max_discount_amount?: number;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    discount_type: string;
    offer: DiscountOffer;
};
type PromotionSchedule = {
    end?: string;
    start: string;
    duration?: number;
    next_schedule?: any[];
    cron?: string;
    published: boolean;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionListItem = {
    code?: string;
    apply_priority?: number;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    _custom_json?: any;
    buy_rules: any;
    apply_all_discount?: boolean;
    stackable?: boolean;
    promo_group: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    promotion_type: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    visiblility?: Visibility;
    discount_rules: DiscountRule[];
    mode: string;
    _schedule?: PromotionSchedule;
    application_id: string;
    author?: PromotionAuthor;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    code?: string;
    apply_priority?: number;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    _custom_json?: any;
    buy_rules: any;
    apply_all_discount?: boolean;
    stackable?: boolean;
    promo_group: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    promotion_type: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    visiblility?: Visibility;
    discount_rules: DiscountRule[];
    mode: string;
    _schedule?: PromotionSchedule;
    application_id: string;
    author?: PromotionAuthor;
};
type PromotionUpdate = {
    code?: string;
    apply_priority?: number;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    _custom_json?: any;
    buy_rules: any;
    apply_all_discount?: boolean;
    stackable?: boolean;
    promo_group: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    display_meta: DisplayMeta1;
    calculate_on?: string;
    promotion_type: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    visiblility?: Visibility;
    discount_rules: DiscountRule[];
    mode: string;
    _schedule?: PromotionSchedule;
    application_id: string;
    author?: PromotionAuthor;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    entity_slug?: string;
    title?: string;
    example?: string;
    created_on?: string;
    entity_type?: string;
    type?: string;
    is_hidden?: boolean;
    modified_on?: string;
    subtitle?: string;
    description?: string;
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
    effective?: number;
    currency_code?: string;
    add_on?: number;
    marked?: number;
    currency_symbol?: string;
    selling?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type CouponDetails = {
    discount_total_quantity?: number;
    discount_single_quantity?: number;
    code?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type Tags = {
    tags?: any;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    url?: string;
    type?: string;
    query?: ActionQuery;
};
type CartProduct = {
    tags?: string[];
    categories?: CategoryInfo[];
    brand?: BaseInfo;
    images?: ProductImage[];
    _custom_json?: any;
    type?: string;
    slug?: string;
    name?: string;
    teaser_tag?: Tags;
    item_code?: string;
    uid?: number;
    action?: ProductAction;
};
type DiscountRulesApp = {
    raw_offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
    offer?: any;
};
type FreeGiftItem = {
    item_slug?: string;
    item_brand_name?: string;
    item_id?: number;
    item_price_details?: any;
    item_name?: string;
    item_images_url?: string[];
};
type AppliedFreeArticles = {
    quantity?: number;
    parent_item_identifier?: string;
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
};
type AppliedPromotion = {
    mrp_promotion?: boolean;
    promotion_type?: string;
    buy_rules?: BuyRules[];
    promotion_group?: string;
    promotion_name?: string;
    discount_rules?: DiscountRulesApp[];
    applied_free_articles?: AppliedFreeArticles[];
    promo_id?: string;
    article_quantity?: number;
    amount?: number;
    offer_text?: string;
};
type BasePrice = {
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
    marked?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    identifier?: any;
    price?: ArticlePriceInfo;
    quantity?: number;
    type?: string;
    cart_item_meta?: any;
    parent_item_identifiers?: any;
    store?: BaseInfo;
    gift_card?: any;
    extra_meta?: any;
    is_gift_visible?: boolean;
    product_group_tags?: string[];
    size?: string;
    seller?: BaseInfo;
    uid?: string;
    seller_identifier?: string;
};
type PromoMeta = {
    message?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductAvailability = {
    is_valid?: boolean;
    deliverable?: boolean;
    other_store_quantity?: number;
    sizes?: string[];
    out_of_stock?: boolean;
};
type CartProductInfo = {
    coupon_message?: string;
    price?: ProductPriceInfo;
    coupon?: CouponDetails;
    message?: string;
    product?: CartProduct;
    discount?: string;
    key?: string;
    bulk_offer?: any;
    parent_item_identifiers?: any;
    promotions_applied?: AppliedPromotion[];
    is_set?: boolean;
    article?: ProductArticle;
    promo_meta?: PromoMeta;
    quantity?: number;
    identifiers: CartProductIdentifer;
    availability?: ProductAvailability;
    price_per_unit?: ProductPriceInfo;
};
type DisplayBreakup = {
    display?: string;
    currency_code?: string;
    message?: string[];
    key?: string;
    value?: number;
    currency_symbol?: string;
};
type LoyaltyPoints = {
    applicable?: number;
    total?: number;
    description?: string;
    is_applied?: boolean;
};
type RawBreakup = {
    gst_charges?: number;
    vog?: number;
    subtotal?: number;
    coupon?: number;
    convenience_fee?: number;
    delivery_charge?: number;
    you_saved?: number;
    discount?: number;
    total?: number;
    mrp_total?: number;
    cod_charge?: number;
    gift_card?: number;
    fynd_cash?: number;
};
type CouponBreakup = {
    title?: string;
    max_discount_value?: number;
    code?: string;
    message?: string;
    type?: string;
    minimum_cart_value?: number;
    coupon_type?: string;
    sub_title?: string;
    description?: string;
    value?: number;
    uid?: string;
    is_applied?: boolean;
    coupon_value?: number;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    coupon?: CouponBreakup;
};
type OpenapiCartDetailsResponse = {
    items?: CartProductInfo[];
    message?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    errors?: any;
    message?: string;
    success?: boolean;
};
type ShippingAddress = {
    pincode?: number;
    address?: string;
    state?: string;
    meta?: any;
    area_code_slug?: string;
    country_code?: string;
    area_code: string;
    email?: string;
    area?: string;
    city?: string;
    name?: string;
    landmark?: string;
    country?: string;
    phone?: number;
    address_type?: string;
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
    message?: string;
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
};
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type OpenApiOrderItem = {
    price_marked: number;
    employee_discount?: number;
    meta?: CartItemMeta;
    product_id: number;
    coupon_effective_discount: number;
    size: string;
    delivery_charges: number;
    discount: number;
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    extra_meta?: any;
    cashback_applied: number;
    price_effective: number;
    quantity?: number;
    amount_paid: number;
    loyalty_discount?: number;
    cod_charges: number;
};
type OpenApiPlatformCheckoutReq = {
    coupon_code: string;
    shipping_address?: ShippingAddress;
    employee_discount?: any;
    billing_address: ShippingAddress;
    coupon?: string;
    order_id?: string;
    payment_mode?: string;
    cart_value: number;
    cashback_applied: number;
    comment?: string;
    payment_methods: MultiTenderPaymentMethod[];
    cod_charges: number;
    cart_items: OpenApiOrderItem[];
    affiliate_order_id?: string;
    currency_code?: string;
    gstin?: string;
    delivery_charges: number;
    files?: OpenApiFiles[];
    loyalty_discount?: number;
    coupon_value: number;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    message?: string;
    success?: boolean;
    order_ref_id?: string;
};
type AbandonedCart = {
    created_on: string;
    meta?: any;
    is_archive?: boolean;
    pick_up_customer_details?: any;
    order_id?: string;
    discount?: number;
    cart_value?: number;
    comment?: string;
    payment_methods?: any[];
    cod_charges?: any;
    promotion?: any;
    fc_index_map?: number[];
    is_active?: boolean;
    articles: any[];
    delivery_charges?: any;
    bulk_coupon_discount?: number;
    shipments?: any[];
    uid: number;
    coupon?: any;
    _id: string;
    payment_mode?: string;
    is_default: boolean;
    expire_at: string;
    buy_now?: boolean;
    app_id?: string;
    gstin?: string;
    user_id: string;
    checkout_mode?: string;
    cashback: any;
    merge_qty?: boolean;
    payments?: any;
    last_modified: string;
    fynd_credits?: any;
};
type AbandonedCartResponse = {
    page?: Page;
    message?: string;
    result?: any;
    success?: boolean;
    items?: AbandonedCart[];
};
type AddProductCart = {
    seller_id?: number;
    article_assignment?: any;
    quantity?: number;
    item_id?: number;
    display?: string;
    item_size?: string;
    article_id?: string;
    parent_item_identifiers?: any;
    store_id?: number;
    pos?: boolean;
    extra_meta?: any;
    product_group_tags?: string[];
};
type AddCartRequest = {
    items?: AddProductCart[];
    new_cart?: boolean;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    pan_config?: any;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    message?: string;
    id?: string;
    gstin?: string;
    is_valid?: boolean;
    checkout_mode?: string;
    currency?: CartCurrency;
    breakup_values?: CartBreakup;
    pan_no?: string;
    restrict_checkout?: boolean;
    items?: CartProductInfo[];
    comment?: string;
    delivery_charge_info?: string;
    buy_now?: boolean;
    coupon_text?: string;
    last_modified?: string;
};
type AddCartDetailResponse = {
    partial?: boolean;
    message?: string;
    success?: boolean;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    item_index?: number;
    item_id?: number;
    article_id?: string;
    item_size?: string;
    parent_item_identifiers?: any;
    extra_meta?: any;
    quantity?: number;
    identifiers: CartProductIdentifer;
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
    share_url?: string;
    token?: string;
};
type SharedCartDetails = {
    created_on?: string;
    meta?: any;
    token?: string;
    source?: any;
    user?: any;
};
type SharedCart = {
    cart_id?: number;
    message?: string;
    is_valid?: boolean;
    comment?: string;
    currency?: CartCurrency;
    payment_selection_lock?: PaymentSelectionLock;
    uid?: string;
    id?: string;
    restrict_checkout?: boolean;
    items?: CartProductInfo[];
    delivery_charge_info?: string;
    buy_now?: boolean;
    gstin?: string;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    shared_cart_details?: SharedCartDetails;
    delivery_promise?: ShipmentPromise;
    coupon_text?: string;
    last_modified?: string;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    created_on?: string;
    cart_id?: string;
    pick_up_customer_details?: any;
    user_id?: string;
    cart_value?: number;
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
    pan_config?: any;
    message?: string;
    is_valid?: boolean;
    comment?: string;
    currency?: CartCurrency;
    user?: UserInfo;
    pan_no?: string;
    payment_selection_lock?: PaymentSelectionLock;
    id?: string;
    restrict_checkout?: boolean;
    items?: CartProductInfo[];
    delivery_charge_info?: string;
    buy_now?: boolean;
    gstin?: string;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    coupon_text?: string;
    last_modified?: string;
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
    expires_on?: string;
    coupon_code?: string;
    title?: string;
    max_discount_value?: number;
    minimum_cart_value?: number;
    message?: string;
    coupon_type?: string;
    sub_title?: string;
    is_applicable?: boolean;
    description?: string;
    is_applied?: boolean;
    coupon_value?: number;
};
type PageCoupon = {
    has_previous?: boolean;
    current?: number;
    total?: number;
    has_next?: boolean;
    total_item_count?: number;
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
    cart_id?: string;
    meta?: any;
    country_code?: string;
    phone?: string;
    google_map_point?: any;
    is_active?: boolean;
    area?: string;
    is_default_address?: boolean;
    country?: string;
    address_type?: string;
    geo_location?: GeoLocation;
    state?: string;
    id?: string;
    area_code?: string;
    created_by_user_id?: string;
    address?: string;
    area_code_slug?: string;
    user_id?: string;
    checkout_mode?: string;
    city?: string;
    name?: string;
    landmark?: string;
    email?: string;
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
    cart_id?: string;
    id?: string;
    user_id?: string;
    billing_address_id?: string;
    checkout_mode?: string;
};
type ShipmentResponse = {
    fulfillment_type?: string;
    dp_id?: string;
    order_type?: string;
    dp_options?: any;
    shipments?: number;
    shipment_type?: string;
    items?: CartProductInfo[];
    promise?: ShipmentPromise;
    box_type?: string;
    fulfillment_id?: number;
};
type CartShipmentsResponse = {
    cart_id?: number;
    message?: string;
    id?: string;
    is_valid?: boolean;
    restrict_checkout?: boolean;
    error?: boolean;
    comment?: string;
    delivery_charge_info?: string;
    buy_now?: boolean;
    coupon_text?: string;
    gstin?: string;
    currency?: CartCurrency;
    checkout_mode?: string;
    shipments?: ShipmentResponse[];
    breakup_values?: CartBreakup;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_promise?: ShipmentPromise;
    uid?: string;
    last_modified?: string;
};
type UpdateCartShipmentItem = {
    quantity?: number;
    article_uid: string;
    shipment_type: string;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    pick_up_customer_details?: any;
    gstin?: string;
    checkout_mode?: string;
    pan_no?: string;
    comment?: string;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type StaffCheckout = {
    _id: string;
    first_name: string;
    user: string;
    employee_code?: string;
    last_name: string;
};
type Files = {
    values: string[];
    key: string;
};
type PlatformCartCheckoutDetailRequest = {
    payment_params?: any;
    billing_address?: any;
    meta?: any;
    pick_at_store_uid?: number;
    pos?: boolean;
    extra_meta?: any;
    ordering_store?: number;
    aggregator?: string;
    delivery_address?: any;
    staff?: StaffCheckout;
    device_id?: string;
    id: string;
    payment_mode: string;
    callback_url?: string;
    payment_auto_confirm?: boolean;
    order_type: string;
    payment_identifier?: string;
    merchant_code?: string;
    user_id: string;
    billing_address_id?: string;
    files?: Files[];
    checkout_mode?: string;
    address_id?: string;
    employee_code?: string;
};
type CheckCart = {
    cart_id?: number;
    order_id?: string;
    message?: string;
    is_valid?: boolean;
    comment?: string;
    cod_available?: boolean;
    cod_charges?: number;
    delivery_charge_order_value?: number;
    currency?: CartCurrency;
    delivery_charges?: number;
    success?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    uid?: string;
    id?: string;
    error_message?: string;
    user_type?: string;
    restrict_checkout?: boolean;
    items?: CartProductInfo[];
    store_code?: string;
    delivery_charge_info?: string;
    buy_now?: boolean;
    gstin?: string;
    cod_message?: string;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    store_emps?: any[];
    delivery_promise?: ShipmentPromise;
    coupon_text?: string;
    last_modified?: string;
};
type CartCheckoutResponse = {
    app_intercept_url?: string;
    order_id?: string;
    message?: string;
    callback_url?: string;
    success?: boolean;
    data?: any;
    payment_confirm_url?: string;
    cart?: CheckCart;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    store_code?: string;
    pincode?: number;
    address?: string;
    state?: string;
    area_code_slug?: string;
    area_code?: string;
    id?: number;
    email?: string;
    area?: string;
    city?: string;
    name?: string;
    landmark?: string;
    country?: string;
    phone?: string;
    address_type?: string;
    uid?: number;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    id?: string;
    payment_mode?: string;
    payment_identifier?: string;
    aggregator_name?: string;
    address_id?: string;
    merchant_code?: string;
};
type CouponValidity = {
    title?: string;
    valid?: boolean;
    display_message_en?: string;
    code?: string;
    discount?: number;
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
