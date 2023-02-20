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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcDevice, EdcDeviceDetailsResponse, EdcAddRequest, EdcDeviceAddResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, UserDataInfo, ShipmentItemFulFillingStore, PaymentModeInfo, GSTDetailsData, PlatformItem, Prices, BagUnit, ShipmentStatus, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, FulfillingStore, OrderDetailsData, TrackingList, BagStateMapper, BagStatusHistory, DPDetailsData, UserDetailsData, OrderBagArticle, Identifier, FinancialBreakup, CurrentStatus, BagGST, OrderBrandName, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagConfigs, PlatformDeliveryAddress, OrderBags, ShipmentPayments, ShipmentStatusData, ShipmentInfoResponse, PlatformShipment, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, ReturnConfig, Dimensions, Weight, Article, Attributes, Item, B2BPODetails, BagMeta, BagGSTDetails, StoreEwaybill, StoreEinvoice, StoreGstCredentials, Document, StoreDocuments, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, ArticleDetails, Brand, Dates, AffiliateMeta, AffiliateBagDetails, PDFLinks, EInvoice, EinvoiceInfo, DebugInfo, ShipmentTimeStamp, BuyerDetails, LockData, Formatted, ShipmentMeta, AffiliateDetails, BagReturnableCancelableStatus, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, Products, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderPriority, OrderUser, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, UserData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, PaymentMethod, PaymentInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, TaxInfo, BillingInfo, ShippingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, LimitedProductData, Price, Size, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionImage, CollectionBanner, UserInfo, SeoDetail, CollectionBadge, CollectionQuery, CollectionSchedule, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, Media2, CategoryMappingValues, CategoryMapping, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, SingleCategoryResponse, CategoryUpdateResponse, TaxIdentifier, ProductPublish, CustomOrder, TeaserTag, NetQuantity, Trader, ProductCreateUpdateSchemaV2, ProductPublished, Logo, Image, NetQuantityResponse, ReturnConfigResponse, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ProductCreateUpdate, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, ManufacturerResponse, BrandMeta, DimensionResponse, WeightResponse, PriceMeta, QuantityBase, Quantities, CompanyMeta, ReturnConfig1, Trader1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, ManufacturerResponse1, ArticleStoreResponse, BrandMeta1, DimensionResponse1, WeightResponse1, PriceArticle, Quantity, QuantitiesArticle, CompanyMeta1, Trader2, ReturnConfig2, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, LocationIntegrationType, UserSerializer1, GetAddressSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, ProductReturnConfigSerializer, SellerPhoneNumber, UserSerializer2, GetCompanySerializer, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, CompanyTaxesSerializer, BusinessCountryInfo, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponSchedule, Ownership, Rule, DisplayMetaDict, DisplayMeta, Validation, State, RuleDefinition, CouponAction, Validity, CouponDateMeta, BulkBundleRestriction, PriceRange, PaymentAllowValue, PaymentModes, PostOrder, UsesRemaining, UsesRestriction, Restrictions, CouponAuthor, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, DisplayMeta1, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, UserRegistered, UsesRemaining1, UsesRestriction1, Restrictions1, Ownership1, Visibility, PromotionDateMeta, PromotionAuthor, PromotionSchedule, PromotionAction, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, DisplayBreakup, LoyaltyPoints, CouponBreakup, RawBreakup, CartBreakup, Ownership2, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, ProductPrice, ProductPriceInfo, ProductImage, CategoryInfo, ActionQuery, ProductAction, BaseInfo, CartProduct, CartProductIdentifer, ProductAvailability, BasePrice, ArticlePriceInfo, ProductArticle, PromoMeta, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, UserCartMappingResponse, CartItemCountResponse, Coupon, PageCoupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, Address, GetAddressesResponse, GeoLocation1, PlatformAddress, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, CartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    success: boolean;
    aggregators?: any[];
    display_fields: string[];
    created: boolean;
    excluded_fields: string[];
    app_id: string;
};
type ErrorCodeDescription = {
    description: string;
    success: boolean;
    code: string;
};
type PaymentGatewayConfig = {
    merchant_salt: string;
    secret: string;
    key: string;
    is_active?: boolean;
    config_type: string;
};
type PaymentGatewayConfigRequest = {
    is_active?: boolean;
    app_id: string;
    aggregator_name?: PaymentGatewayConfig;
};
type PaymentGatewayToBeReviewed = {
    aggregator: string[];
    success: boolean;
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
    display_name?: string;
    logos?: PaymentModeLogo;
    package_name?: string;
    code?: string;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    name?: string;
    aggregator_name: string;
    cod_limit?: number;
    display_priority?: number;
    intent_app_error_list?: string[];
    fynd_vpa?: string;
    exp_year?: number;
    intent_app?: IntentApp[];
    cod_limit_per_order?: number;
    card_token?: string;
    display_name?: string;
    card_name?: string;
    card_type?: string;
    card_fingerprint?: string;
    card_reference?: string;
    card_number?: string;
    exp_month?: number;
    compliant_with_tokenisation_guidelines?: boolean;
    card_issuer?: string;
    nickname?: string;
    remaining_limit?: number;
    intent_flow?: boolean;
    card_brand?: string;
    card_brand_image?: string;
    card_isin?: string;
    timeout?: number;
    card_id?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    expired?: boolean;
    code?: string;
    retry_count?: number;
    merchant_code?: string;
    logo_url?: PaymentModeLogo;
};
type RootPaymentMode = {
    name: string;
    aggregator_name?: string;
    display_name: string;
    add_card_enabled?: boolean;
    is_pay_by_card_pl?: boolean;
    list?: PaymentModeList[];
    display_priority: number;
    save_card?: boolean;
    anonymous_enable?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type Payout = {
    is_default: boolean;
    payouts_aggregators: any[];
    customers: any;
    more_attributes: any;
    transfer_type: string;
    unique_transfer_no: any;
    is_active: boolean;
};
type PayoutsResponse = {
    items: Payout[];
    success: boolean;
};
type PayoutBankDetails = {
    country?: string;
    account_no?: string;
    account_holder?: string;
    account_type: string;
    branch_name?: string;
    bank_name?: string;
    state?: string;
    pincode?: number;
    city?: string;
    ifsc_code: string;
};
type PayoutRequest = {
    aggregator: string;
    bank_details: PayoutBankDetails;
    users: any;
    transfer_type: string;
    is_active: boolean;
    unique_external_id: string;
};
type PayoutResponse = {
    success: boolean;
    aggregator: string;
    bank_details: any;
    users: any;
    created: boolean;
    transfer_type: string;
    payouts: any;
    unique_transfer_no: string;
    is_active: boolean;
    payment_status: string;
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
    aggregator: string;
    success: boolean;
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
    message: string;
    is_verified_flag?: boolean;
    success: boolean;
    data?: any;
};
type NotFoundResourceError = {
    description: string;
    success: boolean;
    code: string;
};
type BankDetailsForOTP = {
    account_no: string;
    account_holder: string;
    branch_name: string;
    bank_name: string;
    ifsc_code: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    branch_name: string;
    success?: boolean;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    account_holder: string;
    transfer_mode: string;
    id: number;
    beneficiary_id: string;
    is_active: boolean;
    ifsc_code: string;
    display_name: string;
    email: string;
    subtitle: string;
    branch_name?: string;
    title: string;
    delights_user_name?: string;
    modified_on: string;
    address: string;
    account_no: string;
    created_on: string;
    mobile?: string;
    comment?: string;
    bank_name: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    current_status?: string;
    payment_gateway?: string;
    payment_id?: string;
    order_id?: string;
    extra_meta?: any;
};
type MultiTenderPaymentMethod = {
    name?: string;
    mode: string;
    meta?: MultiTenderPaymentMeta;
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
type PlatformPaymentOptions = {
    cod_amount_limit?: number;
    payment_selection_lock?: any;
    methods: any;
    cod_charges?: number;
    anonymous_cod?: boolean;
    callback_url?: any;
    mode_of_payment: string;
    source: string;
    enabled: boolean;
};
type PlatfromPaymentConfig = {
    message: string;
    success: boolean;
    data: PlatformPaymentOptions;
};
type UpdatePlatformPaymentConfig = {
    cod_amount_limit?: number;
    payment_selection_lock?: any;
    methods: any;
    cod_charges?: number;
    anonymous_cod?: boolean;
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
    message: string;
    success: boolean;
};
type EdcDevice = {
    application_id: string;
    device_tag: string;
    merchant_store_pos_code?: string;
    edc_device_serial_no: string;
    aggregator_id: number;
    terminal_serial_no: string;
    is_active: string;
    store_id: number;
    terminal_unique_identifier: string;
};
type EdcDeviceDetailsResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcAddRequest = {
    device_tag?: string;
    aggregator_id: number;
    terminal_serial_no: string;
    store_id?: number;
    edc_serial_no: string;
};
type EdcDeviceAddResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcUpdateRequest = {
    device_tag?: string;
    merchant_store_pos_code?: string;
    aggregator_id?: number;
    terminal_serial_no: string;
    is_active?: string;
    store_id?: number;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    device_count: number;
    total_page: number;
    success: boolean;
    next_page: boolean;
    inactive_device_count: number;
    device_list: EdcDevice[];
    total_stores: number;
    current_page: number;
    active_device_count: number;
};
type PaymentInitializationRequest = {
    currency: string;
    vpa?: string;
    customer_id: string;
    contact: string;
    aggregator: string;
    email: string;
    method: string;
    razorpay_payment_id?: string;
    device_id?: string;
    amount: number;
    merchant_order_id: string;
    order_id: string;
    timeout?: number;
};
type PaymentInitializationResponse = {
    currency?: string;
    vpa?: string;
    customer_id?: string;
    success: boolean;
    virtual_id?: string;
    aggregator: string;
    method: string;
    device_id?: string;
    razorpay_payment_id?: string;
    upi_poll_url?: string;
    aggregator_order_id?: string;
    merchant_order_id: string;
    status?: string;
    amount?: number;
    polling_url: string;
    timeout?: number;
    bqr_image?: string;
};
type PaymentStatusUpdateRequest = {
    currency: string;
    vpa?: string;
    customer_id: string;
    contact: string;
    aggregator: string;
    email: string;
    method: string;
    device_id?: string;
    amount: number;
    merchant_order_id: string;
    status: string;
    order_id: string;
};
type PaymentStatusUpdateResponse = {
    success?: boolean;
    aggregator_name: string;
    redirect_url?: string;
    status: string;
    retry: boolean;
};
type UserDataInfo = {
    gender?: string;
    mobile?: string;
    last_name?: string;
    first_name?: string;
    email?: string;
    name?: string;
    is_anonymous_user?: boolean;
    uid?: number;
    avis_user_id?: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type GSTDetailsData = {
    brand_calculated_amount: number;
    value_of_good: number;
    gst_fee: number;
    tax_collected_at_source: number;
    gstin_code: string;
};
type PlatformItem = {
    l3_category_name?: string;
    id?: number;
    l1_category?: string[];
    image?: string[];
    code?: string;
    can_cancel?: boolean;
    l3_category?: number;
    images?: string[];
    department_id?: number;
    size?: string;
    color?: string;
    name?: string;
    can_return?: boolean;
};
type Prices = {
    amount_paid?: number;
    value_of_good?: number;
    refund_credit?: number;
    refund_amount?: number;
    discount?: number;
    coupon_value?: number;
    cashback_applied?: number;
    price_marked?: number;
    cod_charges?: number;
    price_effective?: number;
    tax_collected_at_source?: number;
    promotion_effective_discount?: number;
    cashback?: number;
    amount_paid_roundoff?: number;
    delivery_charge?: number;
    fynd_credits?: number;
};
type BagUnit = {
    gst?: GSTDetailsData;
    can_return?: boolean;
    bag_id: number;
    total_shipment_bags: number;
    can_cancel?: boolean;
    ordering_channel: string;
    shipment_id: string;
    item_quantity: number;
    item?: PlatformItem;
    status: any;
    prices?: Prices;
};
type ShipmentStatus = {
    hex_code: string;
    title: string;
    ops_status: string;
    actual_status: string;
    status: string;
};
type ShipmentItem = {
    user?: UserDataInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    sla?: any;
    payment_methods?: any;
    id: string;
    payment_mode_info?: PaymentModeInfo;
    created_at: string;
    total_bags_count: number;
    channel?: any;
    fulfilling_centre: string;
    bags?: BagUnit[];
    shipment_status?: ShipmentStatus;
    application?: any;
    total_shipments_in_order: number;
    shipment_created_at: number;
    prices?: Prices;
};
type FilterInfoOption = {
    value?: string;
    text: string;
    name?: string;
};
type FiltersInfo = {
    value: string;
    type: string;
    text: string;
    options?: FilterInfoOption[];
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    applied_filters?: any;
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type FulfillingStore = {
    meta: any;
    city: string;
    id: number;
    pincode: string;
    store_name: string;
    fulfillment_channel: string;
    code: string;
    country: string;
    address: string;
    state: string;
    phone: string;
    contact_person: string;
};
type OrderDetailsData = {
    tax_details?: any;
    source?: string;
    cod_charges?: string;
    ordering_channel?: string;
    affiliate_id?: string;
    order_value?: string;
    order_date?: string;
    ordering_channel_logo?: any;
    fynd_order_id: string;
};
type TrackingList = {
    text: string;
    is_current?: boolean;
    is_passed?: boolean;
    time?: string;
    status: string;
};
type BagStateMapper = {
    app_facing?: boolean;
    is_active?: boolean;
    journey_type: string;
    state_type: string;
    display_name: string;
    app_display_name?: string;
    app_state_name?: string;
    bs_id: number;
    name: string;
    notify_customer?: boolean;
};
type BagStatusHistory = {
    forward?: boolean;
    reasons?: any[];
    kafka_sync?: boolean;
    created_at?: string;
    delivery_partner_id?: number;
    bag_state_mapper?: BagStateMapper;
    display_name?: string;
    bag_id?: number;
    app_display_name?: string;
    bsh_id?: number;
    store_id?: number;
    updated_at?: string;
    shipment_id?: string;
    state_id?: number;
    delivery_awb_number?: string;
    status: string;
    state_type?: string;
};
type DPDetailsData = {
    awb_no?: string;
    id?: number;
    pincode?: string;
    eway_bill_id?: string;
    gst_tag?: string;
    track_url?: string;
    country?: string;
    name?: string;
};
type UserDetailsData = {
    city: string;
    pincode: string;
    country: string;
    address: string;
    email?: string;
    name: string;
    state: string;
    phone: string;
};
type OrderBagArticle = {
    uid?: string;
    return_config?: any;
    identifiers?: any;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    item_name: string;
    cashback: number;
    amount_paid: number;
    gst_fee: number;
    price_effective: number;
    coupon_effective_discount: number;
    cashback_applied: number;
    identifiers: Identifier;
    hsn_code: string;
    amount_paid_roundoff?: number;
    added_to_fynd_cash: boolean;
    gst_tax_percentage: number;
    refund_credit: number;
    discount: number;
    coupon_value: number;
    size: string;
    tax_collected_at_source?: number;
    fynd_credits: number;
    transfer_price: number;
    brand_calculated_amount: number;
    value_of_good: number;
    cod_charges: number;
    price_marked: number;
    promotion_effective_discount: number;
    gst_tag: string;
    total_units: number;
    delivery_charge: number;
};
type CurrentStatus = {
    kafka_sync?: boolean;
    created_at?: string;
    delivery_partner_id?: number;
    bag_state_mapper?: BagStateMapper;
    current_status_id: number;
    bag_id?: number;
    store_id?: number;
    shipment_id?: string;
    updated_at?: number;
    state_id?: number;
    delivery_awb_number?: string;
    status?: string;
    state_type?: string;
};
type BagGST = {
    brand_calculated_amount?: number;
    value_of_good?: number;
    gst_fee?: number;
    gst_tax_percentage?: number;
    gst_tag?: string;
    is_default_hsn_code?: boolean;
    hsn_code?: string;
    gstin_code?: string;
};
type OrderBrandName = {
    created_on: string;
    id: number;
    company?: string;
    logo: string;
    modified_on?: string;
    brand_name: string;
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
    promotion_name?: string;
    amount?: number;
    buy_rules?: BuyRules[];
    promo_id?: string;
    article_quantity?: number;
    promotion_type?: string;
    discount_rules?: DiscountRules[];
    mrp_promotion?: boolean;
};
type BagConfigs = {
    is_active: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    allow_force_return: boolean;
};
type PlatformDeliveryAddress = {
    address2?: string;
    latitude?: number;
    landmark?: string;
    city?: string;
    pincode?: string;
    longitude?: number;
    version?: string;
    area?: string;
    created_at?: string;
    address_type?: string;
    address_category?: string;
    country?: string;
    updated_at?: string;
    address1?: string;
    email?: string;
    state?: string;
    phone?: string;
    contact_person?: string;
};
type OrderBags = {
    article?: OrderBagArticle;
    can_cancel?: boolean;
    financial_breakup?: FinancialBreakup;
    entity_type?: string;
    line_number?: number;
    item?: PlatformItem;
    current_status?: CurrentStatus;
    gst_details?: BagGST;
    display_name?: string;
    brand?: OrderBrandName;
    prices?: Prices;
    quantity?: number;
    parent_promo_bags?: any;
    seller_identifier?: string;
    applied_promos?: AppliedPromos[];
    bag_configs?: BagConfigs;
    identifier?: string;
    delivery_address?: PlatformDeliveryAddress;
    bag_id: number;
    can_return?: boolean;
};
type ShipmentPayments = {
    mode?: string;
    logo?: string;
    source?: string;
};
type ShipmentStatusData = {
    id?: number;
    created_at?: string;
    status?: string;
    shipment_id?: string;
    bag_list?: string[];
};
type ShipmentInfoResponse = {
    coupon?: any;
    fulfilling_store?: FulfillingStore;
    order?: OrderDetailsData;
    platform_logo: boolean;
    order_created_time?: string;
    picked_date?: string;
    lock_status: string;
    affiliate_shipment_id: string;
    is_invoiced: boolean;
    current_shipment_status: any;
    kirana_store_id?: string;
    tracking_list?: TrackingList[];
    user_agent?: string;
    priority_text?: string;
    total_items?: number;
    company: any;
    can_cancel?: boolean;
    status_progress: number;
    bank_data?: any;
    forward_tracking_list?: any[];
    beneficiary_details?: boolean;
    shipment_quantity?: number;
    gst_details?: GSTDetailsData;
    total_bags?: number;
    bag_status_history?: BagStatusHistory[];
    can_return?: boolean;
    is_fynd_coupon: boolean;
    tracking_url: string;
    vertical?: string;
    ordering_store: any;
    invoice: any;
    delivery_status: any[];
    enable_tracking?: boolean;
    is_fynd_store?: string;
    escalation?: any;
    items: any[];
    packaging_type?: string;
    forward_shipment_status?: any[];
    dp_details?: DPDetailsData;
    fyndstore_emp: any;
    enable_dp_tracking?: boolean;
    is_packaging_order: boolean;
    forward_order_status?: any[];
    user_info?: any;
    go_green?: boolean;
    operational_status?: string;
    prices?: Prices;
    replacement_details?: string;
    journey_type?: string;
    shipment_images?: string[];
    delivery_slot?: any;
    refund_text?: string;
    billing_details?: UserDetailsData;
    is_pdsr?: string;
    user_id: string;
    custom_meta?: any[];
    shipment_id: string;
    shipment_status?: string;
    credit_note_id: string;
    secured_delivery_flag?: string;
    due_date?: string;
    delivery_details?: UserDetailsData;
    bags?: OrderBags[];
    can_break: string;
    email_id: string;
    order_type: string;
    is_not_fynd_source: boolean;
    order_status: any;
    child_nodes?: string[];
    payment_mode?: string;
    mid?: string;
    refund_details?: any;
    payments?: ShipmentPayments;
    status?: ShipmentStatusData;
    pay_button?: string;
};
type PlatformShipment = {
    coupon?: any;
    fulfilling_store?: FulfillingStore;
    order?: OrderDetailsData;
    platform_logo?: string;
    picked_date?: string;
    tracking_list?: TrackingList[];
    user_agent?: string;
    priority_text?: string;
    total_items?: number;
    shipment_quantity?: number;
    gst_details?: GSTDetailsData;
    total_bags?: number;
    bag_status_history?: BagStatusHistory[];
    vertical?: string;
    packaging_type?: string;
    dp_details?: DPDetailsData;
    enable_dp_tracking?: boolean;
    operational_status?: string;
    prices?: Prices;
    journey_type?: string;
    shipment_images?: string[];
    delivery_slot?: any;
    billing_details?: UserDetailsData;
    custom_meta?: any[];
    shipment_id: string;
    shipment_status?: string;
    delivery_details?: UserDetailsData;
    bags?: OrderBags[];
    payment_mode?: string;
    payments?: ShipmentPayments;
    status?: ShipmentStatusData;
};
type OrderMeta = {
    order_type?: string;
    extra_meta?: any;
    staff?: any;
    files?: any[];
    employee_id?: number;
    order_tags?: any[];
    payment_type?: string;
    ordering_store?: number;
    comment?: string;
    order_platform?: string;
    mongo_cart_id?: number;
    order_child_entities?: string[];
    customer_note?: string;
    currency_symbol?: string;
    cart_id?: number;
};
type OrderDict = {
    meta?: OrderMeta;
    payment_methods?: any;
    fynd_order_id: string;
    order_date: string;
    prices?: Prices;
};
type ShipmentDetailsResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    order?: OrderDict;
};
type SubLane = {
    text?: string;
    total_items?: number;
    value?: string;
    actions?: any[];
    index?: number;
};
type SuperLane = {
    value: string;
    text: string;
    total_items?: number;
    options?: SubLane[];
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformBreakupValues = {
    name?: string;
    value?: string;
    display?: string;
};
type PlatformOrderItems = {
    order_created_time?: string;
    order_id?: string;
    total_order_value?: number;
    payment_mode?: string;
    shipments?: PlatformShipment[];
    channel?: PlatformChannel;
    order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    user_info?: UserDataInfo;
    meta?: any;
};
type OrderListingResponse = {
    lane?: string;
    success?: boolean;
    items?: PlatformOrderItems[];
    page?: Page;
    message?: string;
    total_count?: number;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    value: number;
    text: string;
    key: string;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    meta?: any;
    last_location_recieved_at?: string;
    reason?: string;
    updated_time?: string;
    account_name?: string;
    shipment_type?: string;
    updated_at?: string;
    status?: string;
    awb?: string;
    raw_status?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    filters?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    processed?: FiltersInfo[];
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
    s3_key?: string;
    report_requested_at?: string;
    display_name?: string;
    report_id?: string;
    request_details?: any;
    report_name?: string;
    report_type?: string;
    status?: string;
    report_created_at?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    company_id?: string;
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
    error?: NestedErrorSchemaDataSet[];
    data?: any[];
    trace_id?: string;
    identifier?: string;
    success?: boolean;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    company_id?: string;
    invoice_status?: string;
    batch_id: string;
    label?: any;
    data?: any;
    invoice?: any;
    store_name?: string;
    store_code?: string;
    store_id?: string;
    do_invoice_label_generated: boolean;
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
    namespace?: string;
    content_type?: string;
    operation?: string;
    size?: number;
    upload?: FileUploadResponse;
    method?: string;
    cdn?: URL;
    tags?: string[];
    file_path?: string;
};
type bulkListingData = {
    processing_shipments?: string[];
    file_name?: string;
    id?: string;
    user_name?: string;
    successful_shipments?: any[];
    company_id?: number;
    failed?: number;
    total?: number;
    store_code?: string;
    uploaded_on?: string;
    processing?: number;
    successful?: number;
    store_name?: string;
    user_id?: string;
    batch_id?: string;
    excel_url?: string;
    store_id?: number;
    failed_shipments?: any[];
    status?: string;
};
type BulkListingPage = {
    has_previous?: boolean;
    total?: number;
    size?: number;
    type?: string;
    has_next?: boolean;
    current?: number;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    success?: boolean;
    error?: string;
    page?: BulkListingPage;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    id?: number;
    display_name?: string;
    qc_type?: string[];
    question_set?: QuestionSet[];
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
    total_shipments_count?: number;
    company_id?: string;
    failed_shipments_count?: number;
    batch_id?: string;
    successful_shipment_ids?: string[];
    successful_shipments_count?: number;
    processing_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    error?: string[];
    uploaded_by?: string;
    data?: BulkActionDetailsDataField[];
    failed_records?: string[];
    user_id?: string;
    success?: string;
    uploaded_on?: string;
    message?: string;
    status?: boolean;
};
type ReturnConfig = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Dimensions = {
    length?: number;
    width?: number;
    is_default?: boolean;
    height?: number;
    unit?: string;
};
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
type Article = {
    seller_identifier: string;
    child_details?: any;
    esp_modified?: any;
    a_set?: any;
    size: string;
    identifiers: Identifier;
    code?: string;
    return_config?: ReturnConfig;
    raw_meta?: any;
    _id: string;
    dimensions?: Dimensions;
    weight?: Weight;
    uid: string;
    is_set?: boolean;
};
type Attributes = {
    marketer_name?: string;
    primary_color_hex?: string;
    gender?: string[];
    primary_material?: string;
    primary_color?: string;
    essential?: string;
    marketer_address?: string;
    name?: string;
    brand_name?: string;
};
type Item = {
    branch_url?: string;
    can_cancel?: boolean;
    item_id: number;
    meta?: any;
    l2_category?: string[];
    l2_category_id?: number;
    image: string[];
    gender?: string;
    department_id?: number;
    last_updated_at?: string;
    color?: string;
    brand: string;
    brand_id: number;
    size: string;
    slug_key: string;
    l3_category_name?: string;
    attributes: Attributes;
    webstore_product_url?: string;
    l1_category?: string[];
    l1_category_id?: number;
    code?: string;
    l3_category?: number;
    name: string;
    can_return?: boolean;
};
type B2BPODetails = {
    docker_number?: string;
    po_line_amount?: number;
    partial_can_ret?: boolean;
    total_gst_percentage?: number;
    po_tax_amount?: number;
    item_base_price?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type BagGSTDetails = {
    brand_calculated_amount: number;
    value_of_good: number;
    gst_fee: number;
    sgst_gst_fee: string;
    gst_tax_percentage: number;
    cgst_gst_fee: string;
    hsn_code_id: string;
    sgst_tax_percentage: number;
    gst_tag: string;
    cgst_tax_percentage: number;
    is_default_hsn_code?: boolean;
    hsn_code: string;
    tax_collected_at_source: number;
    igst_tax_percentage: number;
    igst_gst_fee: string;
    gstin_code?: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    enabled: boolean;
    username?: string;
    user?: string;
    password?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type Document = {
    verified: boolean;
    url?: string;
    value: string;
    ds_type: string;
    legal_name: string;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    user?: string;
    username?: string;
    password?: string;
};
type StoreMeta = {
    additional_contact_details?: any;
    gst_credentials: StoreGstCredentials;
    ewaybill_portal_details?: any;
    display_name: string;
    documents?: StoreDocuments;
    gst_number?: string;
    product_return_config?: any;
    stage: string;
    timing?: any[];
    einvoice_portal_details?: EInvoicePortalDetails;
    notification_emails?: string[];
};
type StoreAddress = {
    pincode: number;
    created_at: string;
    area?: string;
    address1: string;
    email?: string;
    contact_person: string;
    landmark?: string;
    address_type: string;
    country_code: string;
    address_category: string;
    country: string;
    state: string;
    address2?: string;
    latitude: number;
    city: string;
    longitude: number;
    version?: string;
    updated_at: string;
    phone: string;
};
type Store = {
    created_at: string;
    pincode: string;
    fulfillment_channel: string;
    address1: string;
    store_email: string;
    meta: StoreMeta;
    contact_person: string;
    order_integration_id?: string;
    is_archived?: boolean;
    company_id: number;
    store_active_from?: string;
    alohomora_user_id?: number;
    store_address_json?: StoreAddress;
    is_active?: boolean;
    is_enabled_for_recon?: boolean;
    parent_store_id?: number;
    brand_id?: any;
    country: string;
    state: string;
    s_id: string;
    location_type: string;
    mall_name?: string;
    address2?: string;
    latitude: number;
    city: string;
    longitude: number;
    code?: string;
    brand_store_tags?: string[];
    login_username: string;
    packaging_material_count?: number;
    updated_at?: string;
    name: string;
    phone: number;
    vat_no?: string;
    mall_area?: string;
};
type ArticleDetails = {
    status?: any;
};
type Brand = {
    script_last_ran?: string;
    created_on?: number;
    brand_id: number;
    modified_on?: number;
    pickup_location?: string;
    credit_note_expiry_days?: number;
    company: string;
    credit_note_allowed?: boolean;
    start_date?: string;
    logo?: string;
    is_virtual_invoice?: boolean;
    brand_name: string;
    invoice_prefix?: string;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type AffiliateMeta = {
    coupon_code?: string;
    loyalty_discount?: number;
    channel_shipment_id?: string;
    employee_discount?: number;
    quantity?: number;
    size_level_total_qty?: number;
    channel_order_id?: string;
    order_item_id?: string;
    box_type?: string;
    due_date?: string;
    is_priority?: boolean;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
};
type PDFLinks = {
    label_a6?: string;
    po_invoice?: string;
    label_type: string;
    label?: string;
    invoice_type: string;
    invoice_pos?: string;
    label_a4?: string;
    credit_note_url?: string;
    invoice?: string;
    label_pos?: string;
    b2b?: string;
    invoice_a6?: string;
    invoice_a4?: string;
};
type EInvoice = {
    error_message?: string;
    signed_invoice?: string;
    error_code?: string;
    acknowledge_no?: number;
    signed_qr_code?: string;
    irn?: string;
    acknowledge_date?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type BuyerDetails = {
    city: string;
    pincode: number;
    address: string;
    gstin: string;
    name: string;
    ajio_site_id?: string;
    state: string;
};
type LockData = {
    mto?: boolean;
    locked?: boolean;
    lock_message?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentMeta = {
    external?: any;
    return_awb_number?: string;
    awb_number?: string;
    return_affiliate_shipment_id?: string;
    box_type?: string;
    bag_weight?: any;
    shipment_volumetric_weight?: number;
    einvoice_info?: EinvoiceInfo;
    ewaybill_info?: any;
    return_store_node?: number;
    store_invoice_updated_date?: string;
    shipment_weight?: number;
    debug_info?: DebugInfo;
    timestamp?: ShipmentTimeStamp;
    same_store_available: boolean;
    packaging_name?: string;
    return_details?: any;
    marketplace_store_id?: string;
    assign_dp_from_sb?: boolean;
    weight: number;
    due_date?: string;
    b2b_buyer_details?: BuyerDetails;
    fulfilment_priority_text?: string;
    lock_data?: LockData;
    order_type?: string;
    formatted?: Formatted;
    forward_affiliate_order_id?: string;
    dp_id?: string;
    dp_options?: any;
    po_number?: string;
    return_affiliate_order_id?: string;
    dp_sort_key?: string;
    b2c_buyer_details?: any;
    forward_affiliate_shipment_id?: string;
    auto_trigger_dp_assignment_acf: boolean;
    dp_name?: string;
};
type AffiliateDetails = {
    affiliate_shipment_id: string;
    ad_id?: string;
    pdf_links?: PDFLinks;
    company_affiliate_tag?: string;
    affiliate_id?: string;
    affiliate_order_id: string;
    affiliate_store_id: string;
    affiliate_bag_id: string;
    shipment_meta: ShipmentMeta;
    affiliate_meta: AffiliateMeta;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
};
type BagDetailsPlatformResponse = {
    bag_update_time?: number;
    article: Article;
    original_bag_list?: number[];
    financial_breakup: FinancialBreakup[];
    entity_type?: string;
    line_number?: number;
    b_type?: string;
    no_of_bags_order?: number;
    item: Item;
    meta?: BagMeta;
    order_integration_id?: string;
    current_status: BagStatusHistory;
    gst_details: BagGSTDetails;
    bag_status_history?: BagStatusHistory;
    b_id: number;
    display_name?: string;
    ordering_store?: Store;
    qc_required?: any;
    article_details?: ArticleDetails;
    restore_promos?: any;
    prices: Prices;
    brand: Brand;
    dates?: Dates;
    operational_status?: string;
    journey_type: string;
    quantity?: number;
    restore_coupon?: boolean;
    shipment_id?: string;
    current_operational_status: BagStatusHistory;
    bag_status: BagStatusHistory[];
    tags?: string[];
    parent_promo_bags?: any;
    seller_identifier?: string;
    affiliate_bag_details: AffiliateBagDetails;
    applied_promos?: any[];
    reasons?: any[];
    identifier?: string;
    affiliate_details?: AffiliateDetails;
    status: BagReturnableCancelableStatus;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    item_total: number;
    size: number;
    page_type: string;
    has_next: boolean;
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
    error?: string;
    message?: string;
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
    item_id?: string;
    bag_id?: number;
    affiliate_id?: string;
    store_id: number;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    mongo_article_id?: string;
    reason_ids?: number[];
    fynd_order_id?: string;
    set_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_id?: string;
    id?: string;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    reason_text: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    action: string;
    action_type: string;
    entities: Entities[];
};
type Bags = {
    affiliate_bag_id?: string;
    bag_id?: number;
    affiliate_order_id?: string;
    is_locked?: boolean;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    affiliate_id?: string;
    status?: string;
    shipment_id?: string;
    bags?: Bags[];
    is_bag_locked?: boolean;
    original_filter?: OriginalFilter;
    is_shipment_locked?: boolean;
    affiliate_shipment_id?: string;
    lock_status?: boolean;
};
type UpdateShipmentLockResponse = {
    message?: string;
    success?: boolean;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    logo_url?: string;
    id: number;
    platform_name?: string;
    company_id?: number;
    to_datetime?: string;
    title?: string;
    description?: string;
    from_datetime?: string;
    platform_id?: string;
    created_at?: string;
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
    identifier: string;
    data_updates?: DataUpdates;
    products?: Products[];
    reasons?: ReasonsData;
};
type StatuesRequest = {
    status?: string;
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
    force_transition?: boolean;
    unlock_before_transition?: boolean;
};
type ShipmentsResponse = {
    code?: string;
    stack_trace?: string;
    status?: number;
    message?: string;
    identifier?: string;
    meta?: any;
    final_state?: any;
    exception?: string;
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
    updated_at: string;
    id: string;
    name: string;
    token: string;
    owner: string;
    secret: string;
    description?: string;
    meta?: AffiliateAppConfigMeta[];
    created_at: string;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
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
type AffiliateInventoryConfig = {
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    token: string;
    id: string;
    config?: AffiliateConfig;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    bag_end_state?: string;
    affiliate: Affiliate;
    store_lookup?: string;
    create_user?: boolean;
    article_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
};
type OrderUser = {
    mobile: number;
    address1?: string;
    pincode: string;
    email: string;
    address2?: string;
    country: string;
    phone: number;
    state: string;
    last_name: string;
    city: string;
    first_name: string;
};
type ArticleDetails1 = {
    brand_id: number;
    _id: string;
    weight: any;
    attributes: any;
    dimension: any;
    quantity: number;
    category: any;
};
type ShipmentDetails = {
    box_type?: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
    meta?: any;
    affiliate_shipment_id: string;
    shipments: number;
    dp_id?: number;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_type: string;
    fulfillment_id: number;
};
type ShipmentConfig = {
    payment_mode: string;
    shipment: ShipmentDetails[];
    to_pincode: string;
    action: string;
    location_details?: LocationDetails;
    identifier: string;
    source: string;
    journey: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    discount: number;
    item_id: number;
    unit_price: number;
    store_id: number;
    amount_paid: number;
    modified_on: string;
    hsn_code_id: string;
    avl_qty: number;
    affiliate_meta: any;
    price_marked: number;
    fynd_store_id: string;
    price_effective: number;
    _id: string;
    sku: string;
    pdf_links?: MarketPlacePdf;
    delivery_charge: number;
    quantity: number;
    seller_identifier: string;
    item_size: string;
    affiliate_store_id: string;
    company_id: number;
    transfer_price: number;
    identifier: any;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type OrderInfo = {
    payment?: any;
    discount: number;
    order_priority?: OrderPriority;
    billing_address: OrderUser;
    delivery_charges: number;
    payment_mode: string;
    order_value: number;
    coupon?: string;
    shipment?: ShipmentData;
    affiliate_order_id?: string;
    bags: AffiliateBag[];
    items: any;
    cod_charges: number;
    shipping_address: OrderUser;
    user: UserData;
};
type CreateOrderPayload = {
    order_config: OrderConfig;
    affiliate_id: string;
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
    slug: string;
    description: string;
    id: number;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
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
type HistoryDict = {
    l3_detail?: string;
    bag_id?: number;
    message: string;
    ticket_id?: string;
    user: string;
    l2_detail?: string;
    ticket_url?: string;
    createdat: string;
    l1_detail?: string;
    type: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    order_id: string;
    phone_number: number;
    shipment_id: number;
    payment_mode: string;
    customer_name: string;
    message: string;
    brand_name: string;
    amount_paid: number;
    country_code: string;
};
type SendSmsPayload = {
    slug: string;
    bag_id: number;
    data?: SmsDataPayload;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    status?: string;
    id: number;
    shipment_id?: string;
    remarks?: string;
    bag_list?: number[];
    meta: Meta;
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
    shipment_ids?: string[];
    qc_required: string;
    order_type: string;
    dp_id: number;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type PaymentMethod = {
    refund_by: string;
    collect_by: string;
    name: string;
    amount: number;
    transaction_data?: any;
    meta?: any;
    mode: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type Tax = {
    name: string;
    breakup?: any[];
    rate: number;
    amount: any;
};
type Charge = {
    code?: string;
    name: string;
    amount: any;
    tax?: Tax;
    type: string;
};
type LineItem = {
    external_line_id?: string;
    charges?: Charge[];
    meta?: any;
    quantity?: number;
    custom_messasge?: string;
    seller_identifier: string;
};
type ProcessingDates = {
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
    dispatch_after_date?: string;
    pack_by_date?: string;
    dispatch_by_date?: string;
    confirm_by_date?: string;
};
type Shipment = {
    location_id: number;
    line_items: LineItem[];
    priority?: number;
    processing_dates?: ProcessingDates;
    meta?: any;
    external_shipment_id?: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type BillingInfo = {
    country: string;
    primary_mobile_number: string;
    customer_code?: string;
    last_name?: string;
    title?: string;
    address1: string;
    state: string;
    house_no?: string;
    floor_no?: string;
    external_customer_code?: string;
    alternate_email?: string;
    gender?: string;
    country_code?: string;
    first_name: string;
    pincode: string;
    primary_email: string;
    address2?: string;
    middle_name?: string;
    state_code?: string;
    alternate_mobile_number?: string;
    city: string;
};
type ShippingInfo = {
    country: string;
    landmark?: string;
    shipping_type?: string;
    primary_mobile_number: string;
    customer_code?: string;
    last_name?: string;
    title?: string;
    address1: string;
    state: string;
    house_no?: string;
    address_type?: string;
    floor_no?: string;
    external_customer_code?: string;
    alternate_email?: string;
    gender?: string;
    country_code?: string;
    first_name: string;
    geo_location?: any;
    pincode: string;
    primary_email: string;
    address2?: string;
    middle_name?: string;
    slot?: any[];
    state_code?: string;
    alternate_mobile_number?: string;
    city: string;
};
type CreateOrderAPI = {
    payment_info: PaymentInfo;
    shipments: Shipment[];
    tax_info?: TaxInfo;
    billing_info: BillingInfo;
    external_creation_date?: string;
    external_order_id?: string;
    charges?: Charge[];
    meta?: any;
    currency_info?: any;
    shipping_info: ShippingInfo;
};
type CreateOrderErrorReponse = {
    code?: string;
    stack_trace?: string;
    status: number;
    message: string;
    request_id?: string;
    info?: any;
    meta?: string;
    exception?: string;
};
type PaymentMethods = {
    refund_by?: string;
    collect_by?: string;
    mode?: string;
};
type CreateChannelPaymentInfo = {
    payment_methods?: PaymentMethods[];
    source?: string;
    mode_of_payment?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    payment_info?: CreateChannelPaymentInfo;
    logo_url?: any;
    location_reassignment?: boolean;
    shipment_assignment?: string;
    dp_configuration?: DpConfiguration;
    lock_states?: string[];
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    is_inserted?: boolean;
    acknowledged?: boolean;
    is_upserted?: boolean;
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
    mobile: number;
    start_date: string;
    end_date: string;
    order_details?: FyndOrderIdList[];
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsData = {
    words?: string[];
    uid?: string;
    app_id?: string;
    result?: any;
    _custom_json?: any;
    is_active?: boolean;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    words?: string[];
    app_id?: string;
    result: SearchKeywordResult;
    _custom_json?: any;
    is_active?: boolean;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    words?: string[];
    results?: any[];
    uid?: string;
    app_id?: string;
    _custom_json?: any;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type AutocompletePageAction = {
    type?: string;
    url?: string;
    query?: any;
    params?: any;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
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
    results?: AutocompleteResult[];
    app_id?: string;
    _custom_json?: any;
    is_active?: boolean;
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    _custom_json?: any;
    results?: any[];
    words?: string[];
};
type ProductBundleItem = {
    max_quantity: number;
    product_uid: number;
    min_quantity: number;
    auto_select?: boolean;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
};
type ProductBundleRequest = {
    page_visibility?: string[];
    products: ProductBundleItem[];
    name: string;
    slug: string;
    meta?: any;
    modified_by?: any;
    choice: string;
    same_store_assignment?: boolean;
    modified_on?: string;
    created_on?: string;
    company_id?: number;
    logo?: string;
    is_active: boolean;
    created_by?: any;
};
type GetProductBundleCreateResponse = {
    page_visibility?: string[];
    products: ProductBundleItem[];
    name: string;
    slug: string;
    meta?: any;
    modified_by?: any;
    choice: string;
    same_store_assignment?: boolean;
    modified_on?: string;
    created_on?: string;
    company_id?: number;
    logo?: string;
    is_active: boolean;
    created_by?: any;
    id?: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type LimitedProductData = {
    quantity?: number;
    images?: string[];
    uid?: number;
    price?: any;
    slug?: string;
    name?: string;
    item_code?: string;
    country_of_origin?: string;
    sizes?: string[];
    identifier?: any;
    short_description?: string;
    attributes?: any;
};
type Price = {
    min_marked?: number;
    max_effective?: number;
    max_marked?: number;
    min_effective?: number;
    currency?: string;
};
type Size = {
    is_available?: boolean;
    value?: string;
    display?: string;
    quantity?: number;
};
type GetProducts = {
    max_quantity?: number;
    product_details?: LimitedProductData;
    product_uid?: number;
    price?: Price;
    min_quantity?: number;
    sizes?: Size[];
    allow_remove?: boolean;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
};
type GetProductBundleResponse = {
    page_visibility?: string[];
    products?: GetProducts[];
    name?: string;
    slug?: string;
    meta?: any;
    choice?: string;
    same_store_assignment?: boolean;
    company_id?: number;
    logo?: string;
    is_active?: boolean;
};
type ProductBundleUpdateRequest = {
    page_visibility?: string[];
    products: ProductBundleItem[];
    name: string;
    slug: string;
    meta?: any;
    modified_by?: any;
    choice: string;
    same_store_assignment?: boolean;
    modified_on?: string;
    company_id?: number;
    logo?: string;
    is_active: boolean;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    tag?: string;
    guide?: Guide;
    active?: boolean;
    title: string;
    name: string;
    brand_id?: number;
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
    company_id?: number;
    image?: string;
    subtitle?: string;
    created_by?: any;
    description?: string;
    id?: string;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type SizeGuideResponse = {
    tag?: string;
    guide?: any;
    active?: boolean;
    title?: string;
    name?: string;
    brand_id?: number;
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
    company_id?: number;
    subtitle?: string;
    created_by?: any;
    id?: string;
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
    is_gift?: boolean;
    moq?: MOQData;
    seo?: SEOData;
    is_cod?: boolean;
    alt_text?: any;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
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
    is_gift?: boolean;
    moq?: ApplicationItemMOQ;
    _custom_meta?: MetaFields[];
    _custom_json?: any;
    seo?: ApplicationItemSEO;
    is_cod?: boolean;
    alt_text?: any;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
};
type AttributeDetailsGroup = {
    name: string;
    slug?: string;
    priority: number;
    key?: string;
    logo?: string;
    unit?: string;
    display_type: string;
    is_active: boolean;
};
type AppConfigurationDetail = {
    is_default: boolean;
    app_id: string;
    slug: string;
    name?: string;
    priority: number;
    template_slugs?: string[];
    logo?: string;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    current: number;
    has_next: boolean;
    total_count: number;
    next: number;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    default_key: string;
    is_default: boolean;
    app_id: string;
    name?: string;
    priority: number;
    key: string;
    logo?: string;
    is_active: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    variant?: any;
    compare?: any;
    detail?: any;
    similar?: any;
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
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductVariantConfig = {
    name: string;
    priority: number;
    key: string;
    size: ProductSize;
    logo?: string;
    display_type: string;
    is_active: boolean;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    title?: string;
    priority: number;
    key: string;
    size?: ProductSize;
    logo?: string;
    subtitle?: string;
    is_active: boolean;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type ConfigurationBucketPoints = {
    display?: string;
    start?: number;
    end?: number;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    bucket_points?: ConfigurationBucketPoints[];
    value?: string;
    map?: any;
    condition?: string;
    map_values?: any[];
};
type ConfigurationListingFilterConfig = {
    name?: string;
    type: string;
    priority: number;
    key: string;
    logo?: string;
    is_active: boolean;
    display_name?: string;
    value_config?: ConfigurationListingFilterValue;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    name?: string;
    priority: number;
    key: string;
    logo?: string;
    is_active: boolean;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type AppConfiguration = {
    config_id?: string;
    app_id: string;
    type?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
    config_type: string;
    created_by?: any;
};
type AppCatalogConfiguration = {
    config_id?: string;
    app_id: string;
    type?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
    config_type: string;
    created_by?: any;
    id?: string;
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
    config_id?: string;
    app_id: string;
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
    id?: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    name?: string;
    value?: string;
    is_selected?: boolean;
};
type ProductFiltersKey = {
    name: string;
    operators?: string[];
    display: string;
    kind?: string;
    logo?: string;
};
type ProductFiltersValue = {
    selected_max?: number;
    max?: number;
    query_format?: string;
    currency_code?: string;
    display_format?: string;
    value: any;
    display: string;
    min?: number;
    currency_symbol?: string;
    count?: number;
    selected_min?: number;
    is_selected: boolean;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type GetCollectionQueryOptionResponse = {
    operators: any;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
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
    uid?: string;
    user_id?: string;
    username?: string;
    email?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
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
type CollectionSchedule = {
    cron?: string;
    next_schedule?: NextSchedule[];
    end?: string;
    duration?: number;
    start?: string;
};
type CreateCollection = {
    is_visible?: boolean;
    name: string;
    sort_on?: string;
    logo: CollectionImage;
    is_active?: boolean;
    banners: CollectionBanner;
    created_by?: UserInfo;
    allow_sort?: boolean;
    description?: string;
    type: string;
    slug: string;
    priority?: number;
    _custom_json?: any;
    seo?: SeoDetail;
    allow_facets?: boolean;
    _locale_language?: any;
    badge?: CollectionBadge;
    published?: boolean;
    meta?: any;
    query?: CollectionQuery[];
    modified_by?: UserInfo;
    app_id: string;
    _schedule?: CollectionSchedule;
    visible_facets_keys?: string[];
    tags?: string[];
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
type CollectionCreateResponse = {
    name?: string;
    sort_on?: string;
    logo?: BannerImage;
    is_active?: boolean;
    banners?: ImageUrls;
    allow_sort?: boolean;
    description?: string;
    slug?: string;
    type?: string;
    priority?: number;
    allow_facets?: boolean;
    badge?: any;
    meta?: any;
    query?: CollectionQuery[];
    cron?: any;
    tag?: string[];
    app_id?: string;
    _schedule?: any;
    visible_facets_keys?: string[];
};
type Media1 = {
    meta?: any;
    type?: string;
    url: string;
};
type GetCollectionDetailNest = {
    uid?: string;
    name?: string;
    logo?: Media1;
    is_active?: boolean;
    banners?: ImageUrls;
    allow_sort?: boolean;
    description?: string;
    slug?: string;
    type?: string;
    priority?: number;
    allow_facets?: boolean;
    badge?: any;
    meta?: any;
    query?: CollectionQuery[];
    cron?: any;
    tag?: string[];
    action?: Action;
    app_id?: string;
    _schedule?: any;
    visible_facets_keys?: string[];
};
type CollectionListingFilterType = {
    name?: string;
    display?: string;
    is_selected?: boolean;
};
type CollectionListingFilterTag = {
    name?: string;
    display?: string;
    is_selected?: boolean;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type GetCollectionListingResponse = {
    page?: Page;
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
};
type CollectionDetailResponse = {
    uid?: string;
    name?: string;
    logo?: Media1;
    is_active?: boolean;
    banners?: ImageUrls;
    allow_sort?: boolean;
    description?: string;
    slug?: string;
    type?: string;
    priority?: number;
    allow_facets?: boolean;
    badge?: any;
    meta?: any;
    query?: CollectionQuery[];
    cron?: any;
    tag?: string[];
    app_id?: string;
    _schedule?: any;
    visible_facets_keys?: string[];
};
type UpdateCollection = {
    is_visible?: boolean;
    name?: string;
    sort_on?: string;
    logo?: CollectionImage;
    is_active?: boolean;
    banners?: CollectionBanner;
    allow_sort?: boolean;
    description?: string;
    slug?: string;
    type?: string;
    priority?: number;
    _custom_json?: any;
    seo?: SeoDetail;
    allow_facets?: boolean;
    _locale_language?: any;
    badge?: CollectionBadge;
    published?: boolean;
    meta?: any;
    query?: CollectionQuery[];
    modified_by?: UserInfo;
    _schedule?: CollectionSchedule;
    visible_facets_keys?: string[];
    tags?: string[];
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    item?: ItemQueryForUserCollection[];
    type?: string;
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type ProductDetailAttribute = {
    key?: string;
    type?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductBrand = {
    name?: string;
    logo?: Media1;
    action?: Action;
    uid?: number;
};
type Price1 = {
    currency_symbol?: string;
    currency_code?: string;
    min?: number;
    max?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    similars?: string[];
    uid?: number;
    name?: string;
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    type?: string;
    slug: string;
    tryouts?: string[];
    highlights?: string[];
    product_online_date?: string;
    item_type?: string;
    attributes?: any;
    rating_count?: number;
    image_nature?: string;
    rating?: number;
    item_code?: string;
    brand?: ProductBrand;
    short_description?: string;
    discount?: string;
    teaser_tag?: any;
    price?: ProductListingPrice;
    promo_meta?: any;
    sellable?: boolean;
    medias?: Media1[];
    has_variant?: boolean;
};
type GetCollectionItemsResponse = {
    page?: Page;
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    count?: number;
    sellable_count?: number;
};
type CatalogInsightBrand = {
    available_sizes?: number;
    total_articles?: number;
    name?: string;
    total_sizes?: number;
    article_freshness?: number;
    available_articles?: number;
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
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    enabled?: boolean;
    brand_ids?: number[];
    store_ids?: number[];
    platform?: string;
    company_id?: number;
    opt_level: string;
};
type CompanyOptIn = {
    created_by?: any;
    enabled: boolean;
    brand_ids: number[];
    store_ids: number[];
    platform: string;
    modified_on: number;
    modified_by?: any;
    created_on: number;
    company_id: number;
    opt_level: string;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    name?: string;
    company_type?: string;
    business_type?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    brand_id?: number;
    total_article?: number;
    brand_name?: string;
    company_id?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    store?: number;
    company?: string;
    brand?: number;
};
type StoreDetail = {
    uid?: number;
    name?: string;
    documents?: any[];
    address?: any;
    store_type?: string;
    store_code?: string;
    modified_on?: string;
    manager?: any;
    created_on?: string;
    company_id?: number;
    additional_contacts?: any[];
    timing?: any;
    display_name?: string;
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
    allowed_values?: string[];
    multi?: boolean;
    type: string;
    mandatory?: boolean;
    range?: AttributeSchemaRange;
    format?: string;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type GenderDetail = {
    is_nested?: boolean;
    meta?: AttributeMasterMeta;
    slug?: string;
    name?: string;
    details?: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    schema?: AttributeMaster;
    filters?: AttributeMasterFilter;
    logo?: string;
    departments?: string[];
    description?: string;
    id?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    status?: number;
    code?: string;
    meta?: any;
    message?: string;
    errors?: any;
};
type DepartmentCreateUpdate = {
    _cls?: string;
    tags?: string[];
    uid?: number;
    name: string;
    platforms?: any;
    slug?: string;
    _custom_json?: any;
    synonyms?: string[];
    logo: string;
    is_active?: boolean;
    priority_order: number;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    uid?: string;
    contact?: string;
    username?: string;
    user_id?: string;
    _id?: string;
};
type GetDepartment = {
    page_no?: number;
    created_by?: UserSerializer;
    search?: string;
    uid?: number;
    name?: string;
    slug?: string;
    modified_by?: UserSerializer;
    page_size?: number;
    modified_on?: string;
    synonyms?: string[];
    created_on?: string;
    logo?: string;
    item_type?: string;
    is_active?: boolean;
    priority_order?: number;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    status?: number;
    code?: string;
    meta?: any;
    message?: string;
    errors?: any;
};
type UserDetail = {
    user_id: string;
    username: string;
    super_user?: boolean;
    contact?: string;
};
type DepartmentModel = {
    _cls?: any;
    priority_order: number;
    uid?: number;
    name: any;
    slug?: any;
    modified_by?: UserDetail;
    modified_on: string;
    _custom_json?: any;
    verified_by?: UserDetail;
    created_on: string;
    synonyms?: any[];
    logo: any;
    _id?: any;
    is_active?: boolean;
    created_by?: UserDetail;
    verified_on?: string;
};
type ProductTemplate = {
    created_by?: any;
    tag?: string;
    attributes_schema?: any[];
    is_physical: boolean;
    name?: string;
    slug: string;
    categories?: string[];
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
    is_archived?: boolean;
    logo?: string;
    is_expirable?: boolean;
    is_active?: boolean;
    departments?: string[];
    description?: string;
    attributes?: string[];
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type TemplateDetails = {
    tag?: string;
    attributes_schema?: any[];
    is_physical: boolean;
    id?: string;
    name?: string;
    slug: string;
    categories?: string[];
    is_archived?: boolean;
    logo?: string;
    is_expirable?: boolean;
    is_active?: boolean;
    departments?: string[];
    description?: string;
    attributes?: string[];
};
type Properties = {
    multi_size?: any;
    name?: any;
    is_active?: any;
    description?: any;
    tags?: any;
    product_publish?: any;
    slug?: any;
    sizes?: any;
    highlights?: any;
    custom_order?: any;
    is_dependent?: any;
    size_guide?: any;
    item_type?: any;
    variants?: any;
    country_of_origin?: any;
    item_code?: any;
    trader_type?: any;
    media?: any;
    no_of_boxes?: any;
    short_description?: any;
    category_slug?: any;
    teaser_tag?: any;
    brand_uid?: any;
    hsn_code?: any;
    product_group_tag?: any;
    return_config?: any;
    command?: any;
    trader?: any;
    currency?: any;
};
type GlobalValidation = {
    title?: string;
    type?: string;
    definitions?: any;
    properties?: Properties;
    required?: string[];
    description?: string;
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
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    trigger_on?: string;
    status?: string;
    data?: ProductDownloadItemsData;
    seller_id?: number;
    task_id?: string;
    url?: string;
    template_tags?: any;
    created_by?: VerifiedBy;
    completed_on?: string;
    id?: string;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Hierarchy = {
    l2: number;
    l1: number;
    department: number;
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
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type CategoryRequestBody = {
    name: string;
    level: number;
    slug?: string;
    priority?: number;
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    media?: Media2;
    synonyms?: string[];
    is_active: boolean;
    departments: number[];
    marketplaces?: CategoryMapping;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    created_by?: any;
    uid?: number;
    name: string;
    level: number;
    slug?: string;
    priority?: number;
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    modified_by?: any;
    media?: Media2;
    modified_on?: string;
    synonyms?: string[];
    created_on?: string;
    is_active: boolean;
    departments: number[];
    marketplaces?: CategoryMapping;
    id?: string;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
    manufacturing_time?: number;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type Trader = {
    name: any;
    type?: string;
    address?: string[];
};
type ProductCreateUpdateSchemaV2 = {
    uid?: number;
    name: string;
    tax_identifier: TaxIdentifier;
    multi_size?: boolean;
    bulk_job_id?: string;
    is_active?: boolean;
    description?: string;
    tags?: string[];
    variant_group?: any;
    product_publish?: ProductPublish;
    slug: string;
    sizes: any[];
    highlights?: string[];
    custom_order?: CustomOrder;
    _custom_json?: any;
    is_dependent?: boolean;
    company_id: number;
    size_guide?: string;
    item_type: string;
    variants?: any;
    attributes?: any;
    country_of_origin: string;
    item_code: string;
    media?: Media1[];
    no_of_boxes?: number;
    short_description?: string;
    category_slug: string;
    departments: number[];
    brand_uid: number;
    teaser_tag?: TeaserTag;
    product_group_tag?: string[];
    change_request_id?: any;
    net_quantity?: NetQuantity;
    action?: string;
    is_set?: boolean;
    requester?: string;
    return_config: ReturnConfig;
    variant_media?: any;
    trader: Trader[];
    currency: string;
    template_tag: string;
    is_image_less_product?: boolean;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Logo = {
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type Image = {
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
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
type Product = {
    category_uid?: number;
    uid?: number;
    name?: string;
    multi_size?: boolean;
    tax_identifier?: any;
    color?: string;
    all_company_ids?: number[];
    moq?: any;
    stage?: string;
    all_identifiers?: string[];
    verified_by?: VerifiedBy;
    is_active?: boolean;
    created_by?: any;
    description?: string;
    pending?: string;
    is_physical?: boolean;
    primary_color?: string;
    variant_group?: any;
    product_publish?: ProductPublished;
    slug?: string;
    sizes?: any[];
    highlights?: string[];
    custom_order?: any;
    _custom_json?: any;
    is_dependent?: boolean;
    created_on?: string;
    size_guide?: string;
    company_id?: number;
    item_type?: string;
    variants?: any;
    all_sizes?: any[];
    attributes?: any;
    verified_on?: string;
    is_image_less_product?: boolean;
    image_nature?: string;
    country_of_origin?: string;
    item_code?: string;
    modified_by?: any;
    media?: Media1[];
    no_of_boxes?: number;
    category_slug?: string;
    short_description?: string;
    brand?: Brand;
    is_expirable?: boolean;
    departments?: number[];
    brand_uid?: number;
    l3_mapping?: string[];
    hsn_code?: string;
    teaser_tag?: any;
    product_group_tag?: string[];
    images?: Image[];
    net_quantity?: NetQuantityResponse;
    is_set?: boolean;
    trader?: any[];
    modified_on?: string;
    return_config?: ReturnConfigResponse;
    variant_media?: any;
    tags?: string[];
    currency?: string;
    category?: any;
    template_tag?: string;
    id?: string;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type ProductVariants = {
    category_uid?: number;
    uid?: number;
    name?: string;
    item_code?: string;
    media?: Media1[];
    brand_uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    name?: string;
    enabled_for_end_consumer?: boolean;
    schema: AttributeMaster;
    filters: AttributeMasterFilter;
    logo?: string;
    created_by?: any;
    description?: string;
    slug: string;
    suggestion?: string;
    raw_key?: string;
    synonyms?: any;
    created_on?: string;
    is_nested?: boolean;
    variant?: boolean;
    details: AttributeMasterDetails;
    modified_by?: any;
    departments: string[];
    modified_on?: string;
    tags?: string[];
    unit?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ProductCreateUpdate = {
    uid?: number;
    name: any;
    tax_identifier: TaxIdentifier;
    multi_size?: boolean;
    bulk_job_id?: string;
    is_active?: boolean;
    description?: string;
    tags?: string[];
    variant_group?: any;
    product_publish?: ProductPublish;
    slug: string;
    highlights?: string[];
    custom_order?: CustomOrder;
    _custom_json?: any;
    is_dependent?: boolean;
    company_id: number;
    size_guide?: string;
    item_type: string;
    variants?: any;
    country_of_origin: string;
    item_code: any;
    media?: Media1[];
    no_of_boxes?: number;
    short_description?: string;
    category_slug: string;
    departments: number[];
    brand_uid: number;
    teaser_tag?: TeaserTag;
    product_group_tag?: string[];
    change_request_id?: any;
    net_quantity?: NetQuantity;
    action?: string;
    is_set?: boolean;
    requester?: string;
    return_config: ReturnConfig;
    variant_media?: any;
    trader: Trader[];
    currency: string;
    template_tag: string;
    is_image_less_product?: boolean;
};
type ValidateIdentifier = {
    primary?: boolean;
    gtin_type: string;
    gtin_value: string;
};
type AllSizes = {
    item_length: number;
    item_weight: number;
    item_width: number;
    item_weight_unit_of_measure: any;
    item_height: number;
    size: any;
    item_dimensions_unit_of_measure: string;
    identifiers?: ValidateIdentifier[];
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    uid?: string;
    user_id?: string;
    username?: string;
    email?: string;
};
type BulkJob = {
    failed?: number;
    succeed?: number;
    file_path?: string;
    tracking_url?: string;
    custom_template_tag?: string;
    total?: number;
    cancelled?: number;
    stage?: string;
    modified_by?: UserInfo1;
    modified_on?: string;
    cancelled_records?: any[];
    failed_records?: any[];
    created_on: string;
    company_id: number;
    is_active?: boolean;
    created_by?: UserInfo1;
    template_tag?: string;
};
type BulkResponse = {
    modified_by?: UserInfo1;
    modified_on?: string;
    created_on: string;
    is_active?: boolean;
    created_by?: UserInfo1;
    batch_id: string;
};
type UserDetail1 = {
    user_id?: string;
    username?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    failed?: number;
    file_path?: string;
    succeed?: number;
    total?: number;
    cancelled?: number;
    stage?: string;
    cancelled_records?: string[];
    modified_on?: string;
    failed_records?: string[];
    modified_by?: UserDetail1;
    created_on?: string;
    company_id?: number;
    template?: ProductTemplate;
    is_active?: boolean;
    created_by?: UserDetail1;
    template_tag?: string;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkProductRequest = {
    data: any[];
    template_tag: string;
    company_id: number;
    batch_id: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    url: string;
    company_id?: number;
    user: any;
};
type UserCommon = {
    user_id?: string;
    username?: string;
    company_id?: number;
};
type Items = {
    failed?: number;
    is_active?: boolean;
    retry?: number;
    file_path?: string;
    tracking_url?: string;
    total?: number;
    cancelled?: number;
    stage?: string;
    modified_by?: UserCommon;
    modified_on?: string;
    cancelled_records?: string[];
    failed_records?: string[];
    created_on?: string;
    company_id?: number;
    succeed?: number;
    created_by?: UserCommon;
    id?: string;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductSizeDeleteDataResponse = {
    size?: string;
    company_id?: number;
    item_id?: number;
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
    primary?: boolean;
    gtin_type: string;
    gtin_value: any;
};
type InvSize = {
    quantity: number;
    item_length?: number;
    item_weight?: number;
    item_width?: number;
    price?: number;
    price_transfer?: number;
    item_weight_unit_of_measure?: string;
    is_set?: boolean;
    store_code: string;
    item_height?: number;
    size: any;
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    price_effective: number;
    set?: InventorySet;
    currency: string;
    identifiers: GTIN[];
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type InventoryResponse = {
    quantity?: number;
    inventory_updated_on?: string;
    seller_identifier?: string;
    store?: any;
    sellable_quantity?: number;
    price?: number;
    price_transfer?: number;
    uid?: string;
    item_id?: number;
    size?: string;
    price_effective?: number;
    currency?: string;
    identifiers?: any;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type ManufacturerResponse = {
    name: string;
    address: string;
    is_default: boolean;
};
type BrandMeta = {
    name: string;
    id: number;
};
type DimensionResponse = {
    is_default: boolean;
    height: number;
    length: number;
    unit: string;
    width: number;
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type PriceMeta = {
    updated_at?: string;
    effective: number;
    tp_notes?: any;
    marked: number;
    currency: string;
    transfer: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
    damaged?: QuantityBase;
};
type CompanyMeta = {
    id: number;
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Trader1 = {
    name: string;
    type: string;
    address: string[];
};
type InventorySellerResponse = {
    seller_identifier: string;
    manufacturer: ManufacturerResponse;
    uid: string;
    tax_identifier?: any;
    stage?: string;
    identifier: any;
    is_active?: boolean;
    fynd_meta?: any;
    created_by?: UserSerializer;
    trace_id?: string;
    tags?: string[];
    added_on_store?: string;
    item_id: number;
    _custom_json?: any;
    size: string;
    raw_meta?: any;
    store: StoreMeta;
    meta?: any;
    country_of_origin: string;
    fynd_article_code: string;
    track_inventory?: boolean;
    fragile: boolean;
    modified_by?: UserSerializer;
    brand: BrandMeta;
    set?: InventorySet;
    dimension: DimensionResponse;
    total_quantity: number;
    weight: WeightResponse;
    price: PriceMeta;
    quantities?: Quantities;
    fynd_item_code: string;
    company: CompanyMeta;
    is_set?: boolean;
    return_config?: ReturnConfig1;
    expiration_date?: string;
    trader?: Trader1[];
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    failed?: number;
    file_path?: string;
    succeed?: number;
    total?: number;
    cancelled?: number;
    stage?: string;
    cancelled_records?: string[];
    failed_records?: string[];
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
    company_id?: number;
    is_active?: boolean;
    created_by?: any;
    id?: string;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    quantity?: number;
    seller_identifier: string;
    price?: number;
    price_marked?: number;
    item_weight_unit_of_measure?: string;
    trace_id?: string;
    store_code: string;
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    tags?: string[];
    price_effective?: number;
    currency?: string;
    total_quantity?: number;
};
type InventoryBulkRequest = {
    user?: any;
    sizes: InventoryJobPayload[];
    company_id: number;
    batch_id: string;
};
type InventoryExportRequest = {
    type?: string;
    store?: number[];
    brand?: number[];
};
type InventoryExportResponse = {
    trigger_on?: string;
    status?: string;
    request_params?: any;
    seller_id: number;
    task_id: string;
};
type InventoryExportJob = {
    trigger_on?: string;
    status?: string;
    request_params?: any;
    seller_id: number;
    task_id: string;
    url?: string;
    completed_on?: string;
};
type ManufacturerResponse1 = {
    name?: string;
    address?: string;
    is_default?: boolean;
};
type ArticleStoreResponse = {
    name?: string;
    store_code?: string;
    store_type?: string;
    uid?: number;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type DimensionResponse1 = {
    unit?: string;
    width?: number;
    length?: number;
    height?: number;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type PriceArticle = {
    effective?: number;
    tp_notes?: any;
    marked?: number;
    currency?: string;
    transfer?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    not_available?: Quantity;
    order_committed?: Quantity;
    sellable?: Quantity;
    damaged?: Quantity;
};
type CompanyMeta1 = {
    id?: number;
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
    seller_identifier?: string;
    manufacturer?: ManufacturerResponse1;
    uid?: string;
    tax_identifier?: any;
    stage?: string;
    identifier?: any;
    trace_id?: string;
    created_by?: UserSerializer;
    item_id?: number;
    size?: string;
    date_meta?: DateMeta;
    inventory_updated_on?: string;
    store?: ArticleStoreResponse;
    track_inventory?: boolean;
    country_of_origin?: string;
    modified_by?: UserSerializer;
    brand?: BrandMeta1;
    dimension?: DimensionResponse1;
    weight?: WeightResponse1;
    total_quantity?: number;
    platforms?: any;
    price?: PriceArticle;
    quantities?: QuantitiesArticle;
    company?: CompanyMeta1;
    is_set?: boolean;
    trader?: Trader2[];
    return_config?: ReturnConfig2;
    expiration_date?: string;
    tags?: string[];
    id?: string;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
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
    seller_identifier: string;
    price_marked?: number;
    trace_id?: string;
    expiration_date?: string;
    tags?: string[];
    price_effective?: number;
    total_quantity?: number;
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
    hsn_code: string;
    threshold1: number;
    uid?: number;
    tax1: number;
    tax2?: number;
    tax_on_esp?: boolean;
    threshold2?: number;
    company_id: number;
    tax_on_mrp: boolean;
    is_active?: boolean;
    hs2_code: string;
};
type HsnCodesObject = {
    hsn_code?: string;
    threshold1?: number;
    tax1?: number;
    tax2?: number;
    modified_on?: string;
    tax_on_esp?: boolean;
    threshold2?: number;
    company_id?: number;
    tax_on_mrp?: boolean;
    hs2_code?: string;
    id?: string;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    current?: string;
    has_next?: boolean;
    size?: number;
    item_total?: number;
    has_previous?: boolean;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    rate: number;
    threshold: number;
    cess?: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    hsn_code: string;
    country_code: string;
    taxes: TaxSlab[];
    type: string;
    reporting_hsn: string;
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
    created_by?: any;
    description: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    action?: Action;
    uid?: number;
    name?: string;
    slug?: string;
    logo?: Media;
    departments?: string[];
    discount?: string;
    banners?: ImageUrls;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    uid?: number;
    name?: string;
    slug?: string;
    logo?: Media;
    priority_order?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    childs?: any[];
    action?: Action;
    uid?: number;
    name?: string;
    slug?: string;
    _custom_json?: any;
    banners?: ImageUrls;
};
type SecondLevelChild = {
    childs?: ThirdLevelChild[];
    action?: Action;
    uid?: number;
    name?: string;
    slug?: string;
    _custom_json?: any;
    banners?: ImageUrls;
};
type Child = {
    childs?: SecondLevelChild[];
    action?: Action;
    uid?: number;
    name?: string;
    slug?: string;
    _custom_json?: any;
    banners?: ImageUrls;
};
type CategoryItems = {
    childs?: Child[];
    action?: Action;
    uid?: number;
    name?: string;
    slug?: string;
    banners?: ImageUrls;
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
    page: Page;
    operators?: any;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
};
type ProductDetail = {
    similars?: string[];
    uid?: number;
    name?: string;
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    description?: string;
    type?: string;
    slug: string;
    tryouts?: string[];
    highlights?: string[];
    product_online_date?: string;
    item_type?: string;
    attributes?: any;
    rating_count?: number;
    image_nature?: string;
    rating?: number;
    item_code?: string;
    brand?: ProductBrand;
    short_description?: string;
    teaser_tag?: any;
    promo_meta?: any;
    medias?: Media1[];
    has_variant?: boolean;
};
type InventoryPage = {
    type: string;
    has_next?: boolean;
    next_id?: string;
    item_total: number;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type UserSerializer1 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type GetAddressSerializer = {
    longitude?: number;
    address2?: string;
    country_code?: string;
    address_type?: string;
    state?: string;
    address1?: string;
    latitude?: number;
    pincode?: number;
    city?: string;
    landmark?: string;
    country?: string;
};
type InvoiceCredSerializer = {
    enabled?: boolean;
    username?: string;
    password?: string;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type UserSerializer2 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type GetCompanySerializer = {
    company_type?: string;
    uid?: number;
    name?: string;
    business_type?: string;
    stage?: string;
    modified_by?: UserSerializer2;
    modified_on?: string;
    verified_by?: UserSerializer2;
    created_on?: string;
    reject_reason?: string;
    addresses?: GetAddressSerializer[];
    created_by?: UserSerializer2;
    verified_on?: string;
};
type LocationManagerSerializer = {
    name?: string;
    mobile_no: SellerPhoneNumber;
    email?: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
    closing?: LocationTimingSerializer;
};
type GetLocationSerializer = {
    uid?: number;
    name: string;
    integration_type?: LocationIntegrationType;
    stage?: string;
    verified_by?: UserSerializer1;
    created_by?: UserSerializer1;
    display_name: string;
    code: string;
    address: GetAddressSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    _custom_json?: any;
    created_on?: string;
    verified_on?: string;
    documents?: Document[];
    warnings?: any;
    store_type?: string;
    modified_by?: UserSerializer1;
    product_return_config?: ProductReturnConfigSerializer;
    notification_emails?: string[];
    contact_numbers?: SellerPhoneNumber[];
    company?: GetCompanySerializer;
    modified_on?: string;
    manager?: LocationManagerSerializer;
    timing?: LocationDayWiseSerializer[];
    phone_number?: string;
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
    uid: number;
    app_id: string;
    name?: string;
    _custom_json?: any;
    logo?: string;
    is_active?: boolean;
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
    country_code?: string;
    country?: string;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type GetCompanyProfileSerializerResponse = {
    business_details?: BusinessDetails;
    taxes?: CompanyTaxesSerializer[];
    modified_on?: string;
    stage?: string;
    addresses?: GetAddressSerializer[];
    franchise_enabled?: boolean;
    verified_by?: UserSerializer;
    created_on?: string;
    uid: number;
    _custom_json?: any;
    business_country_info?: BusinessCountryInfo;
    notification_emails?: string[];
    modified_by?: UserSerializer;
    verified_on?: string;
    mode?: string;
    warnings?: any;
    contact_details?: ContactDetails;
    company_type: string;
    business_type: string;
    business_info?: string;
    documents?: Document[];
    name?: string;
    created_by?: UserSerializer;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type CreateUpdateAddressSerializer = {
    state: string;
    address1: string;
    address_type: string;
    latitude: number;
    pincode: number;
    city: string;
    address2?: string;
    country: string;
    longitude: number;
    country_code?: string;
    landmark?: string;
};
type UpdateCompany = {
    reject_reason?: string;
    notification_emails?: string[];
    business_details?: BusinessDetails;
    contact_details?: ContactDetails;
    company_type?: string;
    business_type?: string;
    taxes?: CompanyTaxesSerializer1[];
    business_info?: string;
    documents?: Document[];
    name?: string;
    _custom_json?: any;
    addresses?: CreateUpdateAddressSerializer[];
    warnings?: any;
    franchise_enabled?: boolean;
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
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    product?: DocumentsObj;
    uid?: number;
    stage?: string;
    brand?: DocumentsObj;
    store_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    banner?: BrandBannerSerializer;
    _locale_language?: any;
    modified_on?: string;
    stage?: string;
    synonyms?: string[];
    description?: string;
    verified_by?: UserSerializer;
    created_on?: string;
    uid?: number;
    slug_key?: string;
    _custom_json?: any;
    modified_by?: UserSerializer;
    verified_on?: string;
    mode?: string;
    warnings?: any;
    logo?: string;
    name: string;
    created_by?: UserSerializer;
    reject_reason?: string;
};
type CreateUpdateBrandRequestSerializer = {
    logo: string;
    banner?: BrandBannerSerializer;
    _locale_language?: any;
    company_id?: number;
    uid?: number;
    brand_tier?: string;
    name: string;
    synonyms?: string[];
    _custom_json?: any;
    description?: string;
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
    reject_reason?: string;
    notification_emails?: string[];
    verified_by?: UserSerializer;
    details?: CompanyDetails;
    created_on?: string;
    company_type: string;
    modified_by?: UserSerializer;
    business_type: string;
    verified_on?: string;
    modified_on?: string;
    uid?: number;
    market_channels?: string[];
    stage?: string;
    name?: string;
    _custom_json?: any;
    created_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    business_country_info?: BusinessCountryInfo;
};
type CompanyBrandSerializer = {
    verified_by?: UserSerializer;
    created_on?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    modified_on?: string;
    uid?: number;
    stage?: string;
    brand?: GetBrandResponseSerializer;
    created_by?: UserSerializer;
    reject_reason?: string;
    company?: CompanySerializer;
    warnings?: any;
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
    date: HolidayDateSerializer;
    holiday_type: string;
    title: string;
};
type AddressSerializer = {
    address1?: string;
    state?: string;
    address_type?: string;
    latitude: number;
    pincode?: number;
    city?: string;
    address2?: string;
    country?: string;
    longitude: number;
    country_code?: string;
    landmark?: string;
};
type LocationSerializer = {
    notification_emails?: string[];
    display_name: string;
    code: string;
    holiday?: HolidaySchemaSerializer[];
    uid?: number;
    gst_credentials?: InvoiceDetailsSerializer;
    store_type?: string;
    stage?: string;
    documents?: Document[];
    name: string;
    address: AddressSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    _custom_json?: any;
    contact_numbers?: SellerPhoneNumber[];
    company: number;
    timing?: LocationDayWiseSerializer[];
    manager?: LocationManagerSerializer;
    warnings?: any;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleQuery = {
    item_id?: number;
    size?: string;
    ignored_stores?: number[];
};
type _ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type _AssignStoreArticle = {
    meta?: any;
    group_id?: string;
    quantity?: number;
    query?: _ArticleQuery;
    article_assignment?: _ArticleAssignment;
};
type AssignStoreRequestValidator = {
    app_id?: string;
    channel_identifier?: string;
    articles?: _AssignStoreArticle[];
    company_id?: number;
    pincode?: string;
    channel_type?: string;
    store_ids?: number[];
};
type AssignStoreResponseSerializer = {
    item_id?: number;
    _id?: string;
    meta?: any;
    price_effective?: number;
    price_marked?: number;
    quantity?: number;
    store_id?: number;
    company_id?: number;
    uid?: string;
    s_city?: string;
    store_pincode?: string;
    article_assignment?: _ArticleAssignment;
    size?: string;
    status?: boolean;
    index?: number;
};
type FailedResponse = {
    message: string;
};
type CDN = {
    url: string;
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
    name: string;
    description: string;
    logo: SecureUrl;
    mobile_logo: SecureUrl;
    favicon: SecureUrl;
    banner: SecureUrl;
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
    end?: string;
    cron?: string;
    start?: string;
    next_schedule?: any[];
    duration?: number;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type Rule = {
    key?: number;
    value?: number;
    max?: number;
    min?: number;
    discount_qty?: number;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    title?: string;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    description?: string;
    remove?: DisplayMetaDict;
    subtitle?: string;
};
type Validation = {
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: string[];
};
type State = {
    is_archived?: boolean;
    is_public?: boolean;
    is_display?: boolean;
};
type RuleDefinition = {
    auto_apply?: boolean;
    type: string;
    calculate_on: string;
    scope?: string[];
    applicable_on: string;
    is_exact?: boolean;
    currency_code?: string;
    value_type: string;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type Validity = {
    priority?: number;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    types?: string[];
    networks?: string[];
    codes?: string[];
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
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
type Restrictions = {
    bulk_bundle?: BulkBundleRestriction;
    platforms?: string[];
    price_range?: PriceRange;
    coupon_allowed?: boolean;
    payments?: any;
    user_type?: string;
    ordering_stores?: number[];
    user_groups?: number[];
    post_order?: PostOrder;
    uses?: UsesRestriction;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CouponAdd = {
    _schedule?: CouponSchedule;
    ownership: Ownership;
    rule: Rule[];
    display_meta: DisplayMeta;
    validation?: Validation;
    state?: State;
    identifiers: Identifier;
    rule_definition: RuleDefinition;
    action?: CouponAction;
    tags?: string[];
    validity: Validity;
    date_meta?: CouponDateMeta;
    type_slug: string;
    restrictions?: Restrictions;
    code: string;
    author?: CouponAuthor;
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
    _schedule?: CouponSchedule;
    ownership: Ownership;
    rule: Rule[];
    display_meta: DisplayMeta;
    validation?: Validation;
    state?: State;
    identifiers: Identifier;
    rule_definition: RuleDefinition;
    action?: CouponAction;
    tags?: string[];
    validity: Validity;
    date_meta?: CouponDateMeta;
    type_slug: string;
    restrictions?: Restrictions;
    code: string;
    author?: CouponAuthor;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type DisplayMeta1 = {
    offer_text?: string;
    name?: string;
    offer_label?: string;
    description?: string;
};
type DiscountOffer = {
    discount_amount?: number;
    min_offer_quantity?: number;
    max_offer_quantity?: number;
    discount_percentage?: number;
    partial_can_ret?: boolean;
    apportion_discount?: boolean;
    code?: string;
    max_discount_amount?: number;
    discount_price?: number;
    max_usage_per_transaction?: number;
};
type CompareObject = {
    less_than?: number;
    greater_than_equals?: number;
    greater_than?: number;
    less_than_equals?: number;
    equals?: number;
};
type ItemCriteria = {
    item_exclude_company?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_id?: number[];
    cart_quantity?: CompareObject;
    available_zones?: string[];
    item_company?: number[];
    item_exclude_sku?: string[];
    item_size?: string[];
    item_exclude_category?: number[];
    all_items?: boolean;
    item_category?: number[];
    item_exclude_store?: number[];
    item_exclude_brand?: number[];
    buy_rules?: string[];
    item_brand?: number[];
    cart_total?: CompareObject;
    item_sku?: string[];
    item_store?: number[];
    product_tags?: string[];
    item_id?: number[];
    cart_unique_item_amount?: CompareObject;
};
type DiscountRule = {
    offer: DiscountOffer;
    discount_type: string;
    buy_condition: string;
    item_criteria: ItemCriteria;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    uses?: PaymentAllowValue1;
    codes?: string[];
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type Restrictions1 = {
    user_id?: string[];
    platforms?: string[];
    anonymous_users?: boolean;
    payments?: PromotionPaymentModes[];
    user_groups?: number[];
    post_order?: PostOrder1;
    user_registered?: UserRegistered;
    order_quantity?: number;
    uses: UsesRestriction1;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionSchedule = {
    published: boolean;
    end?: string;
    cron?: string;
    start: string;
    next_schedule?: any[];
    duration?: number;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionListItem = {
    display_meta: DisplayMeta1;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    ownership: Ownership1;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    _custom_json?: any;
    calculate_on?: string;
    stackable?: boolean;
    apply_exclusive?: string;
    promo_group: string;
    apply_priority?: number;
    currency?: string;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    code?: string;
    author?: PromotionAuthor;
    _schedule?: PromotionSchedule;
    promotion_type: string;
    application_id: string;
    post_order_action?: PromotionAction;
    mode: string;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    display_meta: DisplayMeta1;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    ownership: Ownership1;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    _custom_json?: any;
    calculate_on?: string;
    stackable?: boolean;
    apply_exclusive?: string;
    promo_group: string;
    apply_priority?: number;
    currency?: string;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    code?: string;
    author?: PromotionAuthor;
    _schedule?: PromotionSchedule;
    promotion_type: string;
    application_id: string;
    post_order_action?: PromotionAction;
    mode: string;
};
type PromotionUpdate = {
    display_meta: DisplayMeta1;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    ownership: Ownership1;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    _custom_json?: any;
    calculate_on?: string;
    stackable?: boolean;
    apply_exclusive?: string;
    promo_group: string;
    apply_priority?: number;
    currency?: string;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    code?: string;
    author?: PromotionAuthor;
    _schedule?: PromotionSchedule;
    promotion_type: string;
    application_id: string;
    post_order_action?: PromotionAction;
    mode: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    type?: string;
    is_hidden?: boolean;
    title?: string;
    modified_on?: string;
    description?: string;
    created_on?: string;
    entity_slug?: string;
    entity_type?: string;
    subtitle?: string;
    example?: string;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type DisplayBreakup = {
    key?: string;
    value?: number;
    currency_symbol?: string;
    currency_code?: string;
    display?: string;
    message?: string[];
};
type LoyaltyPoints = {
    applicable?: number;
    is_applied?: boolean;
    description?: string;
    total?: number;
};
type CouponBreakup = {
    is_applied?: boolean;
    type?: string;
    coupon_type?: string;
    coupon_value?: number;
    title?: string;
    value?: number;
    max_discount_value?: number;
    description?: string;
    uid?: string;
    sub_title?: string;
    code?: string;
    minimum_cart_value?: number;
    message?: string;
};
type RawBreakup = {
    vog?: number;
    subtotal?: number;
    delivery_charge?: number;
    coupon?: number;
    fynd_cash?: number;
    cod_charge?: number;
    mrp_total?: number;
    gst_charges?: number;
    discount?: number;
    total?: number;
    convenience_fee?: number;
    you_saved?: number;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
    raw?: RawBreakup;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    offer?: any;
    raw_offer?: any;
    item_criteria?: any;
};
type FreeGiftItem = {
    item_name?: string;
    item_brand_name?: string;
    item_price_details?: any;
    item_id?: number;
    item_images_url?: string[];
    item_slug?: string;
};
type AppliedFreeArticles = {
    quantity?: number;
    parent_item_identifier?: string;
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
};
type AppliedPromotion = {
    ownership?: Ownership2;
    amount?: number;
    promotion_type?: string;
    promotion_group?: string;
    promotion_name?: string;
    discount_rules?: DiscountRulesApp[];
    offer_text?: string;
    mrp_promotion?: boolean;
    promo_id?: string;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    applied_free_articles?: AppliedFreeArticles[];
};
type ProductPrice = {
    add_on?: number;
    effective?: number;
    selling?: number;
    marked?: number;
    currency_symbol?: string;
    currency_code?: string;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type CategoryInfo = {
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
type BaseInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    images?: ProductImage[];
    type?: string;
    net_quantity?: NetQuantity;
    categories?: CategoryInfo[];
    action?: ProductAction;
    brand?: BaseInfo;
    slug?: string;
    uid?: number;
    name?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductAvailability = {
    is_valid?: boolean;
    sizes?: string[];
    other_store_quantity?: number;
    out_of_stock?: boolean;
    deliverable?: boolean;
};
type BasePrice = {
    currency_symbol?: string;
    effective?: number;
    marked?: number;
    currency_code?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    type?: string;
    price?: ArticlePriceInfo;
    _custom_json?: any;
    parent_item_identifiers?: any;
    quantity?: number;
    product_group_tags?: string[];
    seller?: BaseInfo;
    store?: BaseInfo;
    size?: string;
    extra_meta?: any;
    uid?: string;
};
type PromoMeta = {
    message?: string;
};
type CartProductInfo = {
    promotions_applied?: AppliedPromotion[];
    key?: string;
    price?: ProductPriceInfo;
    product?: CartProduct;
    parent_item_identifiers?: any;
    coupon_message?: string;
    quantity?: number;
    identifiers: CartProductIdentifer;
    is_set?: boolean;
    discount?: string;
    bulk_offer?: any;
    availability?: ProductAvailability;
    article?: ProductArticle;
    price_per_unit?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    message?: string;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    is_valid?: boolean;
    message?: string;
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    address_type?: string;
    state?: string;
    phone?: number;
    address?: string;
    landmark?: string;
    area_code: string;
    city?: string;
    area?: string;
    country_code?: string;
    area_code_slug?: string;
    pincode?: number;
    email?: string;
    country?: string;
    name?: string;
    meta?: any;
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
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    message?: string;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiOrderItem = {
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
    price_marked: number;
    cashback_applied: number;
    quantity?: number;
    cod_charges: number;
    delivery_charges: number;
    files?: OpenApiFiles[];
    coupon_effective_discount: number;
    size: string;
    discount: number;
    employee_discount?: number;
    price_effective: number;
    extra_meta?: any;
    product_id: number;
    amount_paid: number;
    meta?: CartItemMeta;
};
type OpenApiPlatformCheckoutReq = {
    coupon_value: number;
    files?: OpenApiFiles[];
    loyalty_discount?: number;
    cod_charges: number;
    delivery_charges: number;
    cashback_applied: number;
    employee_discount?: any;
    comment?: string;
    gstin?: string;
    cart_value: number;
    shipping_address?: ShippingAddress;
    affiliate_order_id?: string;
    coupon?: string;
    payment_methods: MultiTenderPaymentMethod[];
    coupon_code: string;
    order_id?: string;
    currency_code?: string;
    cart_items: OpenApiOrderItem[];
    billing_address: ShippingAddress;
    payment_mode?: string;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    success?: boolean;
    order_ref_id?: string;
    message?: string;
};
type AbandonedCart = {
    is_active?: boolean;
    checkout_mode?: string;
    bulk_coupon_discount?: number;
    pick_up_customer_details?: any;
    discount?: number;
    comment?: string;
    gstin?: string;
    last_modified: string;
    cart_value?: number;
    cashback: any;
    user_id: string;
    app_id?: string;
    created_on: string;
    promotion?: any;
    payments?: any;
    buy_now?: boolean;
    articles: any[];
    uid: number;
    shipments?: any[];
    is_default: boolean;
    cod_charges?: any;
    delivery_charges?: any;
    meta?: any;
    merge_qty?: boolean;
    coupon?: any;
    payment_methods?: any[];
    fc_index_map?: number[];
    is_archive?: boolean;
    order_id?: string;
    expire_at: string;
    fynd_credits?: any;
    _id: string;
    payment_mode?: string;
};
type AbandonedCartResponse = {
    message?: string;
    success?: boolean;
    result?: any;
    items?: AbandonedCart[];
    page?: Page;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    coupon_text?: string;
    payment_selection_lock?: PaymentSelectionLock;
    id?: string;
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
    currency?: CartCurrency;
    delivery_promise?: ShipmentPromise;
    comment?: string;
    gstin?: string;
    buy_now?: boolean;
    last_modified?: string;
    items?: CartProductInfo[];
    message?: string;
};
type AddProductCart = {
    _custom_json?: any;
    parent_item_identifiers?: any;
    article_id?: string;
    quantity?: number;
    display?: string;
    product_group_tags?: string[];
    store_id?: number;
    item_size?: string;
    pos?: boolean;
    article_assignment?: any;
    extra_meta?: any;
    item_id?: number;
    seller_id?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    partial?: boolean;
    cart?: CartDetailResponse;
    success?: boolean;
    message?: string;
};
type UpdateProductCart = {
    _custom_json?: any;
    article_id?: string;
    parent_item_identifiers?: any;
    quantity?: number;
    item_index?: number;
    identifiers: CartProductIdentifer;
    item_size?: string;
    extra_meta?: any;
    item_id?: number;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    success?: boolean;
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
    user?: any;
    source?: any;
    token?: string;
    created_on?: string;
    meta?: any;
};
type SharedCart = {
    checkout_mode?: string;
    shared_cart_details?: SharedCartDetails;
    comment?: string;
    gstin?: string;
    last_modified?: string;
    message?: string;
    id?: string;
    buy_now?: boolean;
    uid?: string;
    breakup_values?: CartBreakup;
    restrict_checkout?: boolean;
    cart_id?: number;
    currency?: CartCurrency;
    coupon_text?: string;
    is_valid?: boolean;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    items?: CartProductInfo[];
};
type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
type CartList = {
    user_id?: string;
    created_on?: string;
    cart_id?: string;
    item_counts?: string;
    cart_value?: string;
};
type UserCartMappingResponse = {
    user?: UserInfo;
    coupon_text?: string;
    payment_selection_lock?: PaymentSelectionLock;
    id?: string;
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
    currency?: CartCurrency;
    delivery_promise?: ShipmentPromise;
    comment?: string;
    gstin?: string;
    buy_now?: boolean;
    last_modified?: string;
    items?: CartProductInfo[];
    message?: string;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type Coupon = {
    is_applied?: boolean;
    coupon_value?: number;
    title?: string;
    max_discount_value?: number;
    coupon_code?: string;
    description?: string;
    sub_title?: string;
    is_applicable?: boolean;
    expires_on?: string;
    coupon_type?: string;
    minimum_cart_value?: number;
    message?: string;
};
type PageCoupon = {
    total_item_count?: number;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    total?: number;
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
type Address = {
    country_phone_code?: string;
    is_active?: boolean;
    address_type?: string;
    state?: string;
    checkout_mode?: string;
    geo_location?: GeoLocation;
    address?: string;
    city?: string;
    country?: string;
    name?: string;
    user_id?: string;
    id?: string;
    phone?: string;
    area?: string;
    area_code_slug?: string;
    created_by_user_id?: string;
    area_code?: string;
    email?: string;
    meta?: any;
    country_iso_code?: string;
    landmark?: string;
    is_default_address?: boolean;
    country_code?: string;
    google_map_point?: any;
    tags?: string[];
};
type GetAddressesResponse = {
    address?: Address[];
};
type GeoLocation1 = {
    latitude?: number;
    longitude?: number;
};
type PlatformAddress = {
    is_active?: boolean;
    address_type?: string;
    state?: string;
    checkout_mode?: string;
    geo_location?: GeoLocation1;
    address?: string;
    city?: string;
    country?: string;
    name?: string;
    user_id?: string;
    id?: string;
    phone?: string;
    area?: string;
    area_code_slug?: string;
    created_by_user_id?: string;
    cart_id?: string;
    area_code?: string;
    email?: string;
    meta?: any;
    landmark?: string;
    is_default_address?: boolean;
    country_code?: string;
    google_map_point?: any;
    tags?: string[];
};
type SaveAddressResponse = {
    is_default_address?: boolean;
    success?: boolean;
    id?: string;
};
type UpdateAddressResponse = {
    is_default_address?: boolean;
    success?: boolean;
    is_updated?: boolean;
    id?: string;
};
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
type PlatformSelectCartAddressRequest = {
    checkout_mode?: string;
    cart_id?: string;
    id?: string;
    billing_address_id?: string;
};
type ShipmentResponse = {
    shipment_type?: string;
    fulfillment_id?: number;
    dp_id?: string;
    fulfillment_type?: string;
    promise?: ShipmentPromise;
    box_type?: string;
    dp_options?: any;
    items?: CartProductInfo[];
    order_type?: string;
    shipments?: number;
};
type CartShipmentsResponse = {
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    restrict_checkout?: boolean;
    cart_id?: number;
    currency?: CartCurrency;
    comment?: string;
    gstin?: string;
    last_modified?: string;
    error?: boolean;
    message?: string;
    coupon_text?: string;
    id?: string;
    is_valid?: boolean;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    buy_now?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    uid?: string;
    shipments?: ShipmentResponse[];
};
type CartMetaRequest = {
    pick_up_customer_details?: any;
    checkout_mode?: string;
    comment?: string;
    gstin?: string;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type StaffCheckout = {
    user: string;
    _id: string;
    last_name: string;
    first_name: string;
};
type PlatformCartCheckoutDetailRequest = {
    user_id: string;
    payment_identifier?: string;
    staff?: StaffCheckout;
    aggregator?: string;
    ordering_store?: number;
    payment_auto_confirm?: boolean;
    id: string;
    payment_params?: any;
    delivery_address?: any;
    meta?: any;
    extra_meta?: any;
    address_id?: string;
    merchant_code?: string;
    billing_address?: any;
    payment_mode: string;
    callback_url?: string;
    billing_address_id?: string;
};
type CheckCart = {
    store_emps?: any[];
    checkout_mode?: string;
    comment?: string;
    gstin?: string;
    last_modified?: string;
    user_type?: string;
    message?: string;
    id?: string;
    buy_now?: boolean;
    uid?: string;
    breakup_values?: CartBreakup;
    cod_charges?: number;
    delivery_charges?: number;
    restrict_checkout?: boolean;
    cart_id?: number;
    currency?: CartCurrency;
    delivery_charge_order_value?: number;
    success?: boolean;
    cod_available?: boolean;
    coupon_text?: string;
    is_valid?: boolean;
    error_message?: string;
    store_code?: string;
    delivery_charge_info?: string;
    order_id?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    items?: CartProductInfo[];
    cod_message?: string;
};
type CartCheckoutResponse = {
    cart?: CheckCart;
    app_intercept_url?: string;
    data?: any;
    order_id?: string;
    success?: boolean;
    payment_confirm_url?: string;
    callback_url?: string;
    message?: string;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    address_type?: string;
    state?: string;
    id?: number;
    phone?: string;
    store_code?: string;
    uid?: number;
    address?: string;
    landmark?: string;
    area_code?: string;
    city?: string;
    area?: string;
    area_code_slug?: string;
    pincode?: number;
    email?: string;
    country?: string;
    name?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    payment_identifier?: string;
    id?: string;
    aggregator_name?: string;
    address_id?: string;
    merchant_code?: string;
    payment_mode?: string;
};
type CouponValidity = {
    title?: string;
    discount?: number;
    display_message_en?: string;
    valid?: boolean;
    code?: string;
};
type PaymentCouponValidate = {
    coupon_validity?: CouponValidity;
    success: boolean;
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
