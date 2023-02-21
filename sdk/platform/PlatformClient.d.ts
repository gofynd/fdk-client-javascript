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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcDevice, EdcDeviceDetailsResponse, EdcAddRequest, EdcDeviceAddResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, PaymentModeInfo, UserDataInfo, Prices, ShipmentItemFulFillingStore, ShipmentStatus, GSTDetailsData, PlatformItem, BagUnit, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, ShipmentStatusData, TrackingList, DPDetailsData, OrderDetailsData, ShipmentPayments, UserDetailsData, OrderBagArticle, BagConfigs, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, Identifier, FinancialBreakup, BagGST, OrderBrandName, BagStateMapper, CurrentStatus, PlatformDeliveryAddress, OrderBags, BagStatusHistory, FulfillingStore, ShipmentInfoResponse, OrderMeta, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Weight, ReturnConfig, Dimensions, Article, Dates, BagReturnableCancelableStatus, BagGSTDetails, B2BPODetails, BagMeta, Brand, AffiliateMeta, PDFLinks, EInvoice, EinvoiceInfo, Formatted, DebugInfo, ShipmentTimeStamp, BuyerDetails, LockData, ShipmentMeta, AffiliateDetails, AffiliateBagDetails, StoreAddress, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, Store, Attributes, Item, ArticleDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, UserData, OrderPriority, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, OrderInfo, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, ShippingInfo, ProcessingDates, LineItem, Shipment, TaxInfo, BillingInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, LimitedProductData, Price, Size, GetProducts, GetProductBundleResponse, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, SEOData, MOQData, OwnerAppItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, Media1, CollectionQuery, BannerImage, ImageUrls, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionImage, UserInfo, SeoDetail, CollectionBadge, CollectionBanner, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, NetQuantityResponse, ReturnConfigResponse, Image, Logo, ProductPublished, Product, ProductListingResponse, TaxIdentifier, NetQuantity, TeaserTag, CustomOrder, Trader, ProductPublish, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, ProductCreateUpdate, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, ReturnConfig1, CompanyMeta, WeightResponse, Trader1, BrandMeta, PriceMeta, QuantityBase, Quantities, ManufacturerResponse, DimensionResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, ReturnConfig2, CompanyMeta1, WeightResponse1, Trader2, BrandMeta1, ArticleStoreResponse, PriceArticle, Quantity, QuantitiesArticle, ManufacturerResponse1, DimensionResponse1, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, LocationIntegrationType, SellerPhoneNumber, LocationManagerSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer1, GetAddressSerializer, GetCompanySerializer, ProductReturnConfigSerializer, UserSerializer2, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, CompanyTaxesSerializer, Website, BusinessDetails, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validation, Ownership, CouponSchedule, RuleDefinition, Rule, Validity, DisplayMetaDict, DisplayMeta, State, CouponDateMeta, CouponAction, PostOrder, PriceRange, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, BulkBundleRestriction, Restrictions, CouponAuthor, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, CompareObject, ItemCriteria, DisplayMeta1, PromotionDateMeta, Ownership1, PromotionSchedule, DiscountOffer, DiscountRule, Visibility, PostOrder1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, Restrictions1, PromotionAction, PromotionAuthor, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CouponBreakup, RawBreakup, LoyaltyPoints, DisplayBreakup, CartBreakup, PromoMeta, DiscountRulesApp, Ownership2, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, ProductPrice, ProductPriceInfo, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, CategoryInfo, ActionQuery, ProductAction, ProductImage, CartProduct, ProductAvailability, CartProductIdentifer, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, UserCartMappingResponse, CartItemCountResponse, Coupon, PageCoupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, Address, GetAddressesResponse, GeoLocation1, PlatformAddress, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, CartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    app_id: string;
    created: boolean;
    success: boolean;
    aggregators?: any[];
    display_fields: string[];
    excluded_fields: string[];
};
type ErrorCodeDescription = {
    description: string;
    code: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    key: string;
    is_active?: boolean;
    secret: string;
    merchant_salt: string;
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
    description: string;
    code: string;
};
type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
    success: boolean;
};
type PaymentModeLogo = {
    small: string;
    large: string;
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
    timeout?: number;
    fynd_vpa?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_token?: string;
    card_type?: string;
    remaining_limit?: number;
    card_reference?: string;
    expired?: boolean;
    display_name?: string;
    logo_url?: PaymentModeLogo;
    card_isin?: string;
    card_brand?: string;
    retry_count?: number;
    cod_limit_per_order?: number;
    card_fingerprint?: string;
    cod_limit?: number;
    intent_app?: IntentApp[];
    card_number?: string;
    display_priority?: number;
    exp_year?: number;
    card_brand_image?: string;
    merchant_code?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    intent_app_error_list?: string[];
    card_id?: string;
    name?: string;
    card_name?: string;
    aggregator_name: string;
    card_issuer?: string;
    code?: string;
    exp_month?: number;
    nickname?: string;
    intent_flow?: boolean;
};
type RootPaymentMode = {
    display_name: string;
    display_priority: number;
    list?: PaymentModeList[];
    is_pay_by_card_pl?: boolean;
    save_card?: boolean;
    anonymous_enable?: boolean;
    name: string;
    add_card_enabled?: boolean;
    aggregator_name?: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type Payout = {
    is_active: boolean;
    unique_transfer_no: any;
    payouts_aggregators: any[];
    is_default: boolean;
    transfer_type: string;
    customers: any;
    more_attributes: any;
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    state?: string;
    bank_name?: string;
    ifsc_code: string;
    account_holder?: string;
    pincode?: number;
    branch_name?: string;
    account_no?: string;
    city?: string;
    country?: string;
    account_type: string;
};
type PayoutRequest = {
    is_active: boolean;
    bank_details: PayoutBankDetails;
    unique_external_id: string;
    users: any;
    transfer_type: string;
    aggregator: string;
};
type PayoutResponse = {
    is_active: boolean;
    payment_status: string;
    bank_details: any;
    payouts: any;
    users: any;
    created: boolean;
    transfer_type: string;
    aggregator: string;
    unique_transfer_no: string;
    success: boolean;
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
    aggregator: string;
    config: any;
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
    data?: any;
    message: string;
    success: boolean;
};
type NotFoundResourceError = {
    description: string;
    code: string;
    success: boolean;
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
    branch_name: string;
    bank_name: string;
    success?: boolean;
};
type OrderBeneficiaryDetails = {
    bank_name: string;
    comment?: string;
    mobile?: string;
    display_name: string;
    account_holder: string;
    transfer_mode: string;
    account_no: string;
    subtitle: string;
    delights_user_name?: string;
    beneficiary_id: string;
    ifsc_code: string;
    is_active: boolean;
    id: number;
    branch_name?: string;
    title: string;
    email: string;
    modified_on: string;
    address: string;
    created_on: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    payment_gateway?: string;
    current_status?: string;
    extra_meta?: any;
    payment_id?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    name?: string;
    amount: number;
    mode: string;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    order_id: string;
    message: string;
    success: boolean;
};
type PlatformPaymentOptions = {
    methods: any;
    enabled: boolean;
    source: string;
    callback_url?: any;
    mode_of_payment: string;
    anonymous_cod?: boolean;
    payment_selection_lock?: any;
    cod_charges?: number;
    cod_amount_limit?: number;
};
type PlatfromPaymentConfig = {
    data: PlatformPaymentOptions;
    message: string;
    success: boolean;
};
type UpdatePlatformPaymentConfig = {
    methods: any;
    payment_selection_lock?: any;
    anonymous_cod?: boolean;
    cod_charges?: number;
    cod_amount_limit?: number;
};
type CODdata = {
    usages: number;
    is_active: boolean;
    user_id: string;
    limit: number;
    remaining_limit: number;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    mobileno: string;
    merchant_user_id: string;
    is_active: boolean;
};
type SetCODOptionResponse = {
    message: string;
    success: boolean;
};
type EdcDevice = {
    edc_device_serial_no: string;
    is_active: string;
    aggregator_id: number;
    terminal_serial_no: string;
    application_id: string;
    store_id: number;
    device_tag: string;
    terminal_unique_identifier: string;
    merchant_store_pos_code?: string;
};
type EdcDeviceDetailsResponse = {
    data: EdcDevice;
    success: boolean;
};
type EdcAddRequest = {
    aggregator_id: number;
    terminal_serial_no: string;
    store_id?: number;
    edc_serial_no: string;
    device_tag?: string;
};
type EdcDeviceAddResponse = {
    data: EdcDevice;
    success: boolean;
};
type EdcUpdateRequest = {
    is_active?: string;
    aggregator_id?: number;
    terminal_serial_no: string;
    store_id?: number;
    device_tag?: string;
    merchant_store_pos_code?: string;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    current_page: number;
    active_device_count: number;
    inactive_device_count: number;
    device_count: number;
    next_page: boolean;
    total_stores: number;
    device_list: EdcDevice[];
    total_page: number;
    success: boolean;
};
type PaymentInitializationRequest = {
    customer_id: string;
    timeout?: number;
    amount: number;
    email: string;
    merchant_order_id: string;
    device_id?: string;
    currency: string;
    order_id: string;
    razorpay_payment_id?: string;
    vpa?: string;
    aggregator: string;
    method: string;
    contact: string;
};
type PaymentInitializationResponse = {
    customer_id?: string;
    polling_url: string;
    timeout?: number;
    bqr_image?: string;
    device_id?: string;
    aggregator_order_id?: string;
    aggregator: string;
    currency?: string;
    upi_poll_url?: string;
    razorpay_payment_id?: string;
    virtual_id?: string;
    status?: string;
    vpa?: string;
    merchant_order_id: string;
    method: string;
    amount?: number;
    success: boolean;
};
type PaymentStatusUpdateRequest = {
    customer_id: string;
    email: string;
    merchant_order_id: string;
    device_id?: string;
    currency: string;
    order_id: string;
    contact: string;
    status: string;
    vpa?: string;
    aggregator: string;
    method: string;
    amount: number;
};
type PaymentStatusUpdateResponse = {
    aggregator_name: string;
    status: string;
    redirect_url?: string;
    retry: boolean;
    success?: boolean;
};
type ResendOrCancelPaymentRequest = {
    order_id: string;
    request_type: string;
    device_id?: string;
};
type LinkStatus = {
    status: boolean;
    message: string;
};
type ResendOrCancelPaymentResponse = {
    data: LinkStatus;
    success: boolean;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type UserDataInfo = {
    uid?: number;
    last_name?: string;
    email?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    avis_user_id?: string;
    mobile?: string;
    name?: string;
    first_name?: string;
};
type Prices = {
    value_of_good?: number;
    discount?: number;
    tax_collected_at_source?: number;
    promotion_effective_discount?: number;
    price_effective?: number;
    refund_credit?: number;
    price_marked?: number;
    cashback?: number;
    coupon_value?: number;
    amount_paid?: number;
    cod_charges?: number;
    cashback_applied?: number;
    amount_paid_roundoff?: number;
    delivery_charge?: number;
    fynd_credits?: number;
    refund_amount?: number;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentStatus = {
    actual_status: string;
    hex_code: string;
    title: string;
    ops_status: string;
    status: string;
};
type GSTDetailsData = {
    value_of_good: number;
    tax_collected_at_source: number;
    gstin_code: string;
    gst_fee: number;
    brand_calculated_amount: number;
};
type PlatformItem = {
    images?: string[];
    code?: string;
    l1_category?: string[];
    id?: number;
    can_cancel?: boolean;
    color?: string;
    image?: string[];
    department_id?: number;
    l3_category?: number;
    size?: string;
    l3_category_name?: string;
    can_return?: boolean;
    name?: string;
};
type BagUnit = {
    bag_id: number;
    can_cancel?: boolean;
    can_return?: boolean;
    total_shipment_bags: number;
    prices?: Prices;
    shipment_id: string;
    item_quantity: number;
    status: any;
    ordering_channel: string;
    gst?: GSTDetailsData;
    item?: PlatformItem;
};
type ShipmentItem = {
    total_bags_count: number;
    application?: any;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_centre: string;
    user?: UserDataInfo;
    id: string;
    total_shipments_in_order: number;
    shipment_created_at: number;
    prices?: Prices;
    sla?: any;
    created_at: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    shipment_status?: ShipmentStatus;
    bags?: BagUnit[];
    channel?: any;
    payment_methods?: any;
};
type FilterInfoOption = {
    value?: string;
    name?: string;
    text: string;
};
type FiltersInfo = {
    value: string;
    options?: FilterInfoOption[];
    text: string;
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
type ShipmentStatusData = {
    id?: number;
    created_at?: string;
    status?: string;
    bag_list?: string[];
    shipment_id?: string;
};
type TrackingList = {
    time?: string;
    text: string;
    is_passed?: boolean;
    is_current?: boolean;
    status: string;
};
type DPDetailsData = {
    eway_bill_id?: string;
    pincode?: string;
    country?: string;
    id?: number;
    track_url?: string;
    awb_no?: string;
    gst_tag?: string;
    name?: string;
};
type OrderDetailsData = {
    tax_details?: any;
    order_value?: string;
    cod_charges?: string;
    fynd_order_id: string;
    ordering_channel_logo?: any;
    affiliate_id?: string;
    source?: string;
    ordering_channel?: string;
    order_date?: string;
};
type ShipmentPayments = {
    logo?: string;
    source?: string;
    mode?: string;
};
type UserDetailsData = {
    pincode: string;
    country: string;
    address: string;
    email?: string;
    city: string;
    phone: string;
    state: string;
    name: string;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type BagConfigs = {
    is_returnable: boolean;
    allow_force_return: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
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
    promotion_name?: string;
    article_quantity?: number;
    discount_rules?: DiscountRules[];
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
    promotion_type?: string;
    amount?: number;
    promo_id?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    coupon_value: number;
    brand_calculated_amount: number;
    item_name: string;
    size: string;
    cashback_applied: number;
    price_effective: number;
    value_of_good: number;
    cod_charges: number;
    gst_tag: string;
    discount: number;
    tax_collected_at_source?: number;
    identifiers: Identifier;
    refund_credit: number;
    cashback: number;
    added_to_fynd_cash: boolean;
    price_marked: number;
    hsn_code: string;
    gst_fee: number;
    amount_paid_roundoff?: number;
    transfer_price: number;
    coupon_effective_discount: number;
    promotion_effective_discount: number;
    amount_paid: number;
    gst_tax_percentage: number;
    total_units: number;
    delivery_charge: number;
    fynd_credits: number;
};
type BagGST = {
    value_of_good?: number;
    gstin_code?: string;
    gst_fee?: number;
    hsn_code?: string;
    brand_calculated_amount?: number;
    is_default_hsn_code?: boolean;
    gst_tax_percentage?: number;
    gst_tag?: string;
};
type OrderBrandName = {
    logo: string;
    id: number;
    company?: string;
    modified_on?: string;
    brand_name: string;
    created_on: string;
};
type BagStateMapper = {
    bs_id: number;
    notify_customer?: boolean;
    state_type: string;
    app_facing?: boolean;
    app_display_name?: string;
    display_name: string;
    is_active?: boolean;
    journey_type: string;
    name: string;
    app_state_name?: string;
};
type CurrentStatus = {
    updated_at?: number;
    state_type?: string;
    delivery_partner_id?: number;
    delivery_awb_number?: string;
    store_id?: number;
    bag_id?: number;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    current_status_id: number;
    created_at?: string;
    kafka_sync?: boolean;
    status?: string;
    shipment_id?: string;
};
type PlatformDeliveryAddress = {
    latitude?: number;
    pincode?: string;
    country?: string;
    landmark?: string;
    area?: string;
    updated_at?: string;
    address_category?: string;
    version?: string;
    email?: string;
    address2?: string;
    state?: string;
    city?: string;
    phone?: string;
    address1?: string;
    created_at?: string;
    longitude?: number;
    address_type?: string;
    contact_person?: string;
};
type OrderBags = {
    article?: OrderBagArticle;
    bag_id: number;
    can_cancel?: boolean;
    line_number?: number;
    prices?: Prices;
    identifier?: string;
    bag_configs?: BagConfigs;
    applied_promos?: AppliedPromos[];
    financial_breakup?: FinancialBreakup;
    gst_details?: BagGST;
    brand?: OrderBrandName;
    parent_promo_bags?: any;
    seller_identifier?: string;
    can_return?: boolean;
    quantity?: number;
    item?: PlatformItem;
    entity_type?: string;
    display_name?: string;
    current_status?: CurrentStatus;
    delivery_address?: PlatformDeliveryAddress;
};
type BagStatusHistory = {
    updated_at?: string;
    delivery_partner_id?: number;
    bag_id?: number;
    store_id?: number;
    state_id?: number;
    delivery_awb_number?: string;
    state_type?: string;
    bag_state_mapper?: BagStateMapper;
    app_display_name?: string;
    display_name?: string;
    created_at?: string;
    kafka_sync?: boolean;
    reasons?: any[];
    bsh_id?: number;
    forward?: boolean;
    status: string;
    shipment_id?: string;
};
type FulfillingStore = {
    pincode: string;
    country: string;
    address: string;
    fulfillment_channel: string;
    code: string;
    id: number;
    store_name: string;
    city: string;
    phone: string;
    state: string;
    meta: any;
    contact_person: string;
};
type ShipmentInfoResponse = {
    forward_tracking_list?: any[];
    replacement_details?: string;
    is_packaging_order: boolean;
    go_green?: boolean;
    can_cancel?: boolean;
    secured_delivery_flag?: string;
    kirana_store_id?: string;
    is_pdsr?: string;
    enable_tracking?: boolean;
    tracking_url: string;
    forward_shipment_status?: any[];
    prices?: Prices;
    pay_button?: string;
    credit_note_id: string;
    order_type: string;
    status?: ShipmentStatusData;
    delivery_status: any[];
    operational_status?: string;
    tracking_list?: TrackingList[];
    bank_data?: any;
    company: any;
    dp_details?: DPDetailsData;
    email_id: string;
    total_bags?: number;
    invoice: any;
    is_invoiced: boolean;
    gst_details?: GSTDetailsData;
    priority_text?: string;
    user_agent?: string;
    is_fynd_store?: string;
    order?: OrderDetailsData;
    payments?: ShipmentPayments;
    user_info?: any;
    payment_mode?: string;
    user_id: string;
    refund_text?: string;
    is_fynd_coupon: boolean;
    custom_meta?: any[];
    delivery_details?: UserDetailsData;
    enable_dp_tracking?: boolean;
    order_created_time?: string;
    ordering_store: any;
    can_break: string;
    current_shipment_status: any;
    coupon?: any;
    vertical?: string;
    picked_date?: string;
    items: any[];
    order_status: any;
    bags?: OrderBags[];
    beneficiary_details?: boolean;
    total_items?: number;
    fyndstore_emp: any;
    can_return?: boolean;
    is_not_fynd_source: boolean;
    lock_status: string;
    shipment_quantity?: number;
    platform_logo: boolean;
    escalation?: any;
    status_progress: number;
    child_nodes?: string[];
    packaging_type?: string;
    refund_details?: any;
    affiliate_shipment_id: string;
    bag_status_history?: BagStatusHistory[];
    shipment_images?: string[];
    due_date?: string;
    fulfilling_store?: FulfillingStore;
    journey_type?: string;
    shipment_status?: string;
    billing_details?: UserDetailsData;
    delivery_slot?: any;
    shipment_id: string;
    forward_order_status?: any[];
    mid?: string;
};
type OrderMeta = {
    employee_id?: number;
    staff?: any;
    files?: any[];
    extra_meta?: any;
    order_tags?: any[];
    order_platform?: string;
    cart_id?: number;
    comment?: string;
    mongo_cart_id?: number;
    customer_note?: string;
    ordering_store?: number;
    order_child_entities?: string[];
    payment_type?: string;
    order_type?: string;
    currency_symbol?: string;
};
type OrderDict = {
    prices?: Prices;
    meta?: OrderMeta;
    fynd_order_id: string;
    payment_methods?: any;
    order_date: string;
};
type PlatformShipment = {
    prices?: Prices;
    status?: ShipmentStatusData;
    operational_status?: string;
    tracking_list?: TrackingList[];
    dp_details?: DPDetailsData;
    total_bags?: number;
    gst_details?: GSTDetailsData;
    priority_text?: string;
    user_agent?: string;
    order?: OrderDetailsData;
    payments?: ShipmentPayments;
    payment_mode?: string;
    custom_meta?: any[];
    delivery_details?: UserDetailsData;
    enable_dp_tracking?: boolean;
    coupon?: any;
    vertical?: string;
    picked_date?: string;
    bags?: OrderBags[];
    total_items?: number;
    shipment_quantity?: number;
    platform_logo?: string;
    packaging_type?: string;
    bag_status_history?: BagStatusHistory[];
    shipment_images?: string[];
    fulfilling_store?: FulfillingStore;
    journey_type?: string;
    shipment_status?: string;
    billing_details?: UserDetailsData;
    delivery_slot?: any;
    shipment_id: string;
};
type ShipmentDetailsResponse = {
    success: boolean;
    order?: OrderDict;
    shipments?: PlatformShipment[];
};
type SubLane = {
    value?: string;
    text?: string;
    index?: number;
    total_items?: number;
    actions?: any[];
};
type SuperLane = {
    value: string;
    options?: SubLane[];
    text: string;
    total_items?: number;
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
    payment_mode?: string;
    user_info?: UserDataInfo;
    shipments?: PlatformShipment[];
    order_created_time?: string;
    order_id?: string;
    order_value?: number;
    meta?: any;
    breakup_values?: PlatformBreakupValues[];
    total_order_value?: number;
    channel?: PlatformChannel;
};
type OrderListingResponse = {
    total_count?: number;
    page?: Page;
    items?: PlatformOrderItems[];
    success?: boolean;
    lane?: string;
    message?: string;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    value: number;
    options?: Options[];
    text: string;
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    reason?: string;
    awb?: string;
    last_location_recieved_at?: string;
    raw_status?: string;
    updated_at?: string;
    updated_time?: string;
    account_name?: string;
    meta?: any;
    shipment_type?: string;
    status?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    unfulfilled?: FiltersInfo[];
    returned?: FiltersInfo[];
    filters?: FiltersInfo[];
    processed?: FiltersInfo[];
    action_centre?: FiltersInfo[];
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
    report_type?: string;
    report_created_at?: string;
    display_name?: string;
    report_id?: string;
    report_requested_at?: string;
    report_name?: string;
    status?: string;
    s3_key?: string;
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
    value?: string;
    type?: string;
};
type JioCodeUpsertResponse = {
    error?: NestedErrorSchemaDataSet[];
    data?: any[];
    identifier?: string;
    success?: boolean;
    trace_id?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    invoice_status?: string;
    label?: any;
    store_code?: string;
    store_id?: string;
    store_name?: string;
    invoice?: any;
    company_id?: string;
    batch_id: string;
    do_invoice_label_generated: boolean;
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
    upload?: FileUploadResponse;
    cdn?: URL;
    content_type?: string;
    file_path?: string;
    file_name?: string;
    operation?: string;
    namespace?: string;
    size?: number;
    tags?: string[];
    method?: string;
};
type bulkListingData = {
    excel_url?: string;
    id?: string;
    store_id?: number;
    company_id?: number;
    failed_shipments?: any[];
    status?: string;
    successful_shipments?: any[];
    uploaded_on?: string;
    processing_shipments?: string[];
    store_name?: string;
    batch_id?: string;
    user_id?: string;
    file_name?: string;
    user_name?: string;
    store_code?: string;
    total?: number;
    successful?: number;
    processing?: number;
    failed?: number;
};
type BulkListingPage = {
    has_previous?: boolean;
    current?: number;
    total?: number;
    size?: number;
    type?: string;
    has_next?: boolean;
};
type BulkListingResponse = {
    error?: string;
    success?: boolean;
    data?: bulkListingData[];
    page?: BulkListingPage;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    question_set?: QuestionSet[];
    id?: number;
    qc_type?: string[];
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
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
    company_id?: string;
    batch_id?: string;
    total_shipments_count?: number;
    successful_shipments_count?: number;
    failed_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    user_id?: string;
    uploaded_on?: string;
    status?: boolean;
    error?: string[];
    failed_records?: string[];
    uploaded_by?: string;
    success?: string;
    data?: BulkActionDetailsDataField[];
    message?: string;
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
type Dimensions = {
    is_default?: boolean;
    unit?: string;
    length?: number;
    height?: number;
    width?: number;
};
type Article = {
    weight?: Weight;
    uid: string;
    identifiers: Identifier;
    a_set?: any;
    return_config?: ReturnConfig;
    code?: string;
    child_details?: any;
    dimensions?: Dimensions;
    _id: string;
    seller_identifier: string;
    size: string;
    raw_meta?: any;
    esp_modified?: any;
    is_set?: boolean;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type BagReturnableCancelableStatus = {
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
};
type BagGSTDetails = {
    value_of_good: number;
    tax_collected_at_source: number;
    igst_tax_percentage: number;
    igst_gst_fee: string;
    gstin_code?: string;
    cgst_tax_percentage: number;
    gst_fee: number;
    hsn_code: string;
    brand_calculated_amount: number;
    hsn_code_id: string;
    cgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    sgst_gst_fee: string;
    gst_tax_percentage: number;
    gst_tag: string;
    sgst_tax_percentage: number;
};
type B2BPODetails = {
    po_line_amount?: number;
    item_base_price?: number;
    partial_can_ret?: boolean;
    docker_number?: string;
    po_tax_amount?: number;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Brand = {
    credit_note_allowed?: boolean;
    start_date?: string;
    script_last_ran?: string;
    invoice_prefix?: string;
    logo?: string;
    is_virtual_invoice?: boolean;
    company: string;
    pickup_location?: string;
    credit_note_expiry_days?: number;
    modified_on?: number;
    brand_name: string;
    brand_id: number;
    created_on?: number;
};
type AffiliateMeta = {
    box_type?: string;
    employee_discount?: number;
    is_priority?: boolean;
    order_item_id?: string;
    coupon_code?: string;
    size_level_total_qty?: number;
    due_date?: string;
    channel_order_id?: string;
    channel_shipment_id?: string;
    quantity?: number;
    loyalty_discount?: number;
};
type PDFLinks = {
    invoice_a4?: string;
    invoice_pos?: string;
    invoice_type: string;
    label?: string;
    label_type: string;
    label_a6?: string;
    invoice_a6?: string;
    po_invoice?: string;
    b2b?: string;
    invoice?: string;
    label_a4?: string;
    label_pos?: string;
    credit_note_url?: string;
};
type EInvoice = {
    error_message?: string;
    error_code?: string;
    acknowledge_no?: number;
    signed_qr_code?: string;
    acknowledge_date?: string;
    irn?: string;
    signed_invoice?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type BuyerDetails = {
    pincode: number;
    gstin: string;
    address: string;
    city: string;
    state: string;
    ajio_site_id?: string;
    name: string;
};
type LockData = {
    locked?: boolean;
    lock_message?: string;
    mto?: boolean;
};
type ShipmentMeta = {
    weight: number;
    packaging_name?: string;
    dp_sort_key?: string;
    auto_trigger_dp_assignment_acf: boolean;
    return_awb_number?: string;
    einvoice_info?: EinvoiceInfo;
    shipment_volumetric_weight?: number;
    formatted?: Formatted;
    po_number?: string;
    order_type?: string;
    return_affiliate_shipment_id?: string;
    return_store_node?: number;
    bag_weight?: any;
    return_affiliate_order_id?: string;
    marketplace_store_id?: string;
    dp_id?: string;
    debug_info?: DebugInfo;
    external?: any;
    b2c_buyer_details?: any;
    assign_dp_from_sb?: boolean;
    fulfilment_priority_text?: string;
    awb_number?: string;
    timestamp?: ShipmentTimeStamp;
    dp_options?: any;
    dp_name?: string;
    forward_affiliate_shipment_id?: string;
    store_invoice_updated_date?: string;
    same_store_available: boolean;
    b2b_buyer_details?: BuyerDetails;
    box_type?: string;
    return_details?: any;
    lock_data?: LockData;
    ewaybill_info?: any;
    due_date?: string;
    shipment_weight?: number;
    forward_affiliate_order_id?: string;
};
type AffiliateDetails = {
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
    pdf_links?: PDFLinks;
    affiliate_shipment_id: string;
    affiliate_order_id: string;
    company_affiliate_tag?: string;
    affiliate_store_id: string;
    affiliate_id?: string;
    ad_id?: string;
    shipment_meta: ShipmentMeta;
};
type AffiliateBagDetails = {
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
    employee_discount?: number;
    affiliate_order_id: string;
    loyalty_discount?: number;
};
type StoreAddress = {
    address2?: string;
    city: string;
    address1: string;
    landmark?: string;
    updated_at: string;
    country_code: string;
    latitude: number;
    pincode: number;
    email?: string;
    address_type: string;
    country: string;
    area?: string;
    address_category: string;
    version?: string;
    created_at: string;
    state: string;
    phone: string;
    longitude: number;
    contact_person: string;
};
type Document = {
    verified: boolean;
    value: string;
    ds_type: string;
    legal_name: string;
    url?: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    username?: string;
    user?: string;
    password?: string;
    enabled: boolean;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type EInvoicePortalDetails = {
    user?: string;
    password?: string;
    username?: string;
};
type StoreMeta = {
    notification_emails?: string[];
    documents?: StoreDocuments;
    display_name: string;
    additional_contact_details?: any;
    gst_credentials: StoreGstCredentials;
    stage: string;
    product_return_config?: any;
    timing?: any[];
    gst_number?: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    ewaybill_portal_details?: any;
};
type Store = {
    fulfillment_channel: string;
    is_archived?: boolean;
    location_type: string;
    address2?: string;
    is_enabled_for_recon?: boolean;
    address1: string;
    city: string;
    company_id: number;
    name: string;
    s_id: string;
    alohomora_user_id?: number;
    updated_at?: string;
    store_email: string;
    store_address_json?: StoreAddress;
    mall_area?: string;
    is_active?: boolean;
    meta: StoreMeta;
    packaging_material_count?: number;
    login_username: string;
    latitude: number;
    pincode: string;
    code?: string;
    vat_no?: string;
    brand_id?: any;
    brand_store_tags?: string[];
    country: string;
    parent_store_id?: number;
    store_active_from?: string;
    created_at: string;
    order_integration_id?: string;
    phone: number;
    state: string;
    longitude: number;
    mall_name?: string;
    contact_person: string;
};
type Attributes = {
    primary_color?: string;
    essential?: string;
    marketer_name?: string;
    primary_material?: string;
    brand_name?: string;
    gender?: string[];
    marketer_address?: string;
    primary_color_hex?: string;
    name?: string;
};
type Item = {
    can_cancel?: boolean;
    color?: string;
    department_id?: number;
    l3_category?: number;
    gender?: string;
    size: string;
    name: string;
    last_updated_at?: string;
    branch_url?: string;
    l1_category?: string[];
    meta?: any;
    brand: string;
    item_id: number;
    attributes: Attributes;
    code?: string;
    l1_category_id?: number;
    webstore_product_url?: string;
    l2_category?: string[];
    can_return?: boolean;
    brand_id: number;
    l2_category_id?: number;
    image: string[];
    slug_key: string;
    l3_category_name?: string;
};
type ArticleDetails = {
    status?: any;
};
type BagDetailsPlatformResponse = {
    article: Article;
    line_number?: number;
    prices: Prices;
    dates?: Dates;
    identifier?: string;
    restore_coupon?: boolean;
    status: BagReturnableCancelableStatus;
    operational_status?: string;
    bag_update_time?: number;
    applied_promos?: any[];
    financial_breakup: FinancialBreakup[];
    reasons?: any[];
    gst_details: BagGSTDetails;
    meta?: BagMeta;
    shipment_id?: string;
    tags?: string[];
    brand: Brand;
    restore_promos?: any;
    affiliate_details?: AffiliateDetails;
    parent_promo_bags?: any;
    affiliate_bag_details: AffiliateBagDetails;
    ordering_store?: Store;
    original_bag_list?: number[];
    seller_identifier?: string;
    b_id: number;
    current_operational_status: BagStatusHistory;
    quantity?: number;
    item: Item;
    entity_type?: string;
    qc_required?: any;
    bag_status_history?: BagStatusHistory;
    display_name?: string;
    current_status: BagStatusHistory;
    b_type?: string;
    order_integration_id?: string;
    article_details?: ArticleDetails;
    journey_type: string;
    no_of_bags_order?: number;
    bag_status: BagStatusHistory[];
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    current: number;
    item_total: number;
    size: number;
    page_type: string;
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
    shipment_id?: string;
    error?: string;
    message?: string;
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
    item_id?: string;
    mongo_article_id?: string;
    affiliate_order_id?: string;
    fynd_order_id?: string;
    set_id?: string;
    affiliate_bag_id?: string;
    bag_id?: number;
    reason_ids?: number[];
    store_id: number;
    affiliate_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
    affiliate_id?: string;
    id?: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    action: string;
    entities: Entities[];
    entity_type: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    bag_id?: number;
    is_locked?: boolean;
};
type CheckResponse = {
    original_filter?: OriginalFilter;
    affiliate_shipment_id?: string;
    status?: string;
    lock_status?: boolean;
    is_shipment_locked?: boolean;
    is_bag_locked?: boolean;
    bags?: Bags[];
    affiliate_id?: string;
    shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    description?: string;
    platform_id?: string;
    company_id?: number;
    from_datetime?: string;
    platform_name?: string;
    title?: string;
    to_datetime?: string;
    created_at?: string;
    logo_url?: string;
    id: number;
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
type ProductsReasonsFilters = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
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
type Products = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
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
    reasons?: ReasonsData;
    identifier: string;
    products?: Products[];
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
type UpdateShipmentStatusRequest = {
    statuses?: StatuesRequest[];
    task?: boolean;
    force_transition?: boolean;
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
};
type ShipmentsResponse = {
    meta?: any;
    status?: number;
    stack_trace?: string;
    identifier?: string;
    exception?: string;
    final_state?: any;
    message?: string;
    code?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    first_name: string;
    city: string;
    pincode: string;
    country: string;
    last_name: string;
    address2?: string;
    state: string;
    phone: number;
    email: string;
    mobile: number;
    address1?: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
};
type ArticleDetails1 = {
    quantity: number;
    weight: any;
    dimension: any;
    category: any;
    attributes: any;
    brand_id: number;
    _id: string;
};
type ShipmentDetails = {
    meta?: any;
    affiliate_shipment_id: string;
    dp_id?: number;
    articles: ArticleDetails1[];
    shipments: number;
    box_type?: string;
    fulfillment_id: number;
};
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentConfig = {
    source: string;
    to_pincode: string;
    payment_mode: string;
    journey: string;
    identifier: string;
    action: string;
    shipment: ShipmentDetails[];
    location_details?: LocationDetails;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    pdf_links?: MarketPlacePdf;
    quantity: number;
    affiliate_store_id: string;
    item_size: string;
    avl_qty: number;
    price_marked: number;
    modified_on: string;
    fynd_store_id: string;
    discount: number;
    unit_price: number;
    hsn_code_id: string;
    amount_paid: number;
    transfer_price: number;
    sku: string;
    item_id: number;
    delivery_charge: number;
    store_id: number;
    price_effective: number;
    _id: string;
    company_id: number;
    seller_identifier: string;
    affiliate_meta: any;
    identifier: any;
};
type OrderInfo = {
    cod_charges: number;
    user: UserData;
    affiliate_order_id?: string;
    payment_mode: string;
    discount: number;
    billing_address: OrderUser;
    order_priority?: OrderPriority;
    order_value: number;
    delivery_charges: number;
    payment?: any;
    shipment?: ShipmentData;
    coupon?: string;
    bags: AffiliateBag[];
    items: any;
    shipping_address: OrderUser;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
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
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    description?: string;
    meta?: AffiliateAppConfigMeta[];
    secret: string;
    owner: string;
    name: string;
    updated_at: string;
    created_at: string;
    token: string;
    id: string;
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
    article_lookup?: string;
    affiliate: Affiliate;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    bag_end_state?: string;
    create_user?: boolean;
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
    description: string;
    display_text: string;
    slug: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type PostHistoryFilters = {
    identifier?: string;
    line_number?: string;
    shipment_id: string;
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
type HistoryDict = {
    ticket_id?: string;
    user: string;
    type: string;
    createdat: string;
    l3_detail?: string;
    ticket_url?: string;
    bag_id?: number;
    l2_detail?: string;
    l1_detail?: string;
    message: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    order_id: string;
    payment_mode: string;
    customer_name: string;
    phone_number: number;
    brand_name: string;
    amount_paid: number;
    country_code: string;
    message: string;
    shipment_id: number;
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
    meta: Meta;
    status?: string;
    remarks?: string;
    id: number;
    bag_list?: number[];
    shipment_id?: string;
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
    shipment_ids?: string[];
    order_type: string;
    dp_id: number;
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type Tax = {
    rate: number;
    breakup?: any[];
    name: string;
    amount: any;
};
type Charge = {
    tax?: Tax;
    type: string;
    name: string;
    amount: any;
    code?: string;
};
type ShippingInfo = {
    pincode: string;
    state: string;
    state_code?: string;
    alternate_email?: string;
    shipping_type?: string;
    title?: string;
    primary_mobile_number: string;
    address1: string;
    external_customer_code?: string;
    country: string;
    gender?: string;
    address_type?: string;
    house_no?: string;
    country_code?: string;
    floor_no?: string;
    first_name: string;
    city: string;
    primary_email: string;
    last_name?: string;
    address2?: string;
    alternate_mobile_number?: string;
    slot?: any[];
    middle_name?: string;
    geo_location?: any;
    landmark?: string;
    customer_code?: string;
};
type ProcessingDates = {
    pack_by_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
    confirm_by_date?: string;
    dispatch_by_date?: string;
    dispatch_after_date?: string;
};
type LineItem = {
    external_line_id?: string;
    meta?: any;
    custom_messasge?: string;
    quantity?: number;
    seller_identifier: string;
    charges?: Charge[];
};
type Shipment = {
    processing_dates?: ProcessingDates;
    meta?: any;
    line_items: LineItem[];
    priority?: number;
    external_shipment_id?: string;
    location_id: number;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type BillingInfo = {
    pincode: string;
    state: string;
    state_code?: string;
    alternate_email?: string;
    title?: string;
    primary_mobile_number: string;
    address1: string;
    external_customer_code?: string;
    country: string;
    gender?: string;
    house_no?: string;
    country_code?: string;
    floor_no?: string;
    first_name: string;
    city: string;
    primary_email: string;
    last_name?: string;
    address2?: string;
    alternate_mobile_number?: string;
    middle_name?: string;
    customer_code?: string;
};
type PaymentMethod = {
    refund_by: string;
    meta?: any;
    transaction_data?: any;
    amount: number;
    mode: string;
    name: string;
    collect_by: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type CreateOrderAPI = {
    meta?: any;
    currency_info?: any;
    external_creation_date?: string;
    external_order_id?: string;
    charges?: Charge[];
    shipping_info: ShippingInfo;
    shipments: Shipment[];
    tax_info?: TaxInfo;
    billing_info: BillingInfo;
    payment_info: PaymentInfo;
};
type CreateOrderErrorReponse = {
    meta?: string;
    request_id?: string;
    status: number;
    stack_trace?: string;
    info?: any;
    exception?: string;
    message: string;
    code?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    refund_by?: string;
    mode?: string;
    collect_by?: string;
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
    payment_info?: CreateChannelPaymentInfo;
    location_reassignment?: boolean;
    logo_url?: any;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    is_upserted?: boolean;
    is_inserted?: boolean;
    acknowledged?: boolean;
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
    start_date: string;
    order_details?: FyndOrderIdList[];
    end_date: string;
    mobile: number;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    words?: string[];
};
type GetSearchWordsData = {
    result?: any;
    uid?: string;
    app_id?: string;
    _custom_json?: any;
    is_active?: boolean;
    words?: string[];
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type DeleteResponse = {
    message?: string;
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
    url?: string;
    query?: any;
    type?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    display?: string;
    _custom_json?: any;
    logo?: Media;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    words?: string[];
    results?: AutocompleteResult[];
};
type GetAutocompleteWordsData = {
    uid?: string;
    _custom_json?: any;
    app_id?: string;
    words?: string[];
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    results?: any[];
    _custom_json?: any;
    app_id?: string;
};
type ProductBundleItem = {
    max_quantity: number;
    auto_add_to_cart?: boolean;
    product_uid: number;
    auto_select?: boolean;
    min_quantity: number;
    allow_remove?: boolean;
};
type GetProductBundleCreateResponse = {
    products: ProductBundleItem[];
    modified_on?: string;
    page_visibility?: string[];
    created_on?: string;
    is_active: boolean;
    modified_by?: any;
    same_store_assignment?: boolean;
    choice: string;
    logo?: string;
    name: string;
    meta?: any;
    slug: string;
    id?: string;
    company_id?: number;
    created_by?: any;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    products: ProductBundleItem[];
    modified_on?: string;
    page_visibility?: string[];
    created_on?: string;
    is_active: boolean;
    modified_by?: any;
    same_store_assignment?: boolean;
    choice: string;
    logo?: string;
    name: string;
    meta?: any;
    slug: string;
    company_id?: number;
    created_by?: any;
};
type ProductBundleUpdateRequest = {
    products: ProductBundleItem[];
    modified_on?: string;
    page_visibility?: string[];
    is_active: boolean;
    modified_by?: any;
    same_store_assignment?: boolean;
    choice: string;
    logo?: string;
    name: string;
    meta?: any;
    slug: string;
    company_id?: number;
};
type LimitedProductData = {
    quantity?: number;
    attributes?: any;
    short_description?: string;
    item_code?: string;
    price?: any;
    uid?: number;
    sizes?: string[];
    country_of_origin?: string;
    identifier?: any;
    name?: string;
    slug?: string;
    images?: string[];
};
type Price = {
    max_effective?: number;
    currency?: string;
    max_marked?: number;
    min_effective?: number;
    min_marked?: number;
};
type Size = {
    display?: string;
    is_available?: boolean;
    value?: string;
    quantity?: number;
};
type GetProducts = {
    product_details?: LimitedProductData;
    max_quantity?: number;
    price?: Price;
    auto_add_to_cart?: boolean;
    product_uid?: number;
    sizes?: Size[];
    auto_select?: boolean;
    min_quantity?: number;
    allow_remove?: boolean;
};
type GetProductBundleResponse = {
    products?: GetProducts[];
    page_visibility?: string[];
    is_active?: boolean;
    same_store_assignment?: boolean;
    choice?: string;
    name?: string;
    meta?: any;
    logo?: string;
    slug?: string;
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
    image?: string;
    subtitle?: string;
    title: string;
    modified_on?: string;
    created_on?: string;
    modified_by?: any;
    active?: boolean;
    tag?: string;
    name: string;
    description?: string;
    id?: string;
    brand_id?: number;
    company_id?: number;
    created_by?: any;
};
type SizeGuideResponse = {
    guide?: any;
    modified_on?: string;
    title?: string;
    subtitle?: string;
    created_on?: string;
    modified_by?: any;
    active?: boolean;
    tag?: string;
    name?: string;
    id?: string;
    brand_id?: number;
    company_id?: number;
    created_by?: any;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemMOQ = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    _custom_json?: any;
    alt_text?: any;
    is_gift?: boolean;
    _custom_meta?: MetaFields[];
    is_cod?: boolean;
    moq?: ApplicationItemMOQ;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type SEOData = {
    title?: any;
    description?: any;
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
    key?: string;
    unit?: string;
    is_active: boolean;
    logo?: string;
    name: string;
    display_type: string;
    slug?: string;
    priority: number;
};
type AppConfigurationDetail = {
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    is_default: boolean;
    app_id: string;
    is_active: boolean;
    name?: string;
    logo?: string;
    slug: string;
    priority: number;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    key: string;
    is_default: boolean;
    app_id: string;
    is_active: boolean;
    default_key: string;
    logo?: string;
    name?: string;
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
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    key: string;
    size: ProductSize;
    is_active: boolean;
    name: string;
    logo?: string;
    display_type: string;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    key: string;
    subtitle?: string;
    title?: string;
    size?: ProductSize;
    is_active: boolean;
    logo?: string;
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
    key: string;
    is_active: boolean;
    name?: string;
    logo?: string;
    priority: number;
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
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
    value?: string;
    map?: any;
    sort?: string;
    map_values?: any[];
};
type ConfigurationListingFilterConfig = {
    key: string;
    display_name?: string;
    value_config?: ConfigurationListingFilterValue;
    is_active: boolean;
    name?: string;
    logo?: string;
    priority: number;
    type: string;
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
    config_type: string;
    product?: ConfigurationProduct;
    modified_on?: string;
    app_id: string;
    created_on?: string;
    modified_by?: any;
    listing?: ConfigurationListing;
    id?: string;
    config_id?: string;
    created_by?: any;
    type?: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    config_type: string;
    product?: ConfigurationProduct;
    modified_on?: string;
    app_id: string;
    created_on?: string;
    modified_by?: any;
    listing?: ConfigurationListing;
    config_id?: string;
    created_by?: any;
    type?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
    app_id: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
    config_id?: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    value?: string;
    name?: string;
    is_selected?: boolean;
};
type ProductFiltersValue = {
    selected_max?: number;
    max?: number;
    currency_symbol?: string;
    display_format?: string;
    count?: number;
    display: string;
    value: any;
    is_selected: boolean;
    currency_code?: string;
    min?: number;
    selected_min?: number;
    query_format?: string;
};
type ProductFiltersKey = {
    display: string;
    operators?: string[];
    logo?: string;
    name: string;
    kind?: string;
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
    url: string;
    meta?: any;
    type?: string;
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type BannerImage = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type GetCollectionDetailNest = {
    cron?: any;
    is_active?: boolean;
    tag?: string[];
    description?: string;
    logo?: Media1;
    meta?: any;
    slug?: string;
    visible_facets_keys?: string[];
    app_id?: string;
    name?: string;
    type?: string;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    priority?: number;
    action?: Action;
    allow_sort?: boolean;
    badge?: any;
    uid?: string;
    banners?: ImageUrls;
    _schedule?: any;
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
    page?: Page;
    filters?: CollectionListingFilter;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type UserInfo = {
    username?: string;
    uid?: string;
    user_id?: string;
    email?: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CollectionSchedule = {
    cron?: string;
    start?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
    end?: string;
};
type CreateCollection = {
    is_active?: boolean;
    logo: CollectionImage;
    description?: string;
    meta?: any;
    slug: string;
    _locale_language?: any;
    visible_facets_keys?: string[];
    app_id: string;
    name: string;
    published?: boolean;
    type: string;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    is_visible?: boolean;
    modified_by?: UserInfo;
    priority?: number;
    created_by?: UserInfo;
    seo?: SeoDetail;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    banners: CollectionBanner;
    _custom_json?: any;
    sort_on?: string;
    _schedule?: CollectionSchedule;
    tags?: string[];
};
type CollectionCreateResponse = {
    cron?: any;
    is_active?: boolean;
    tag?: string[];
    description?: string;
    logo?: BannerImage;
    meta?: any;
    slug?: string;
    visible_facets_keys?: string[];
    app_id?: string;
    name?: string;
    type?: string;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    priority?: number;
    allow_sort?: boolean;
    badge?: any;
    banners?: ImageUrls;
    sort_on?: string;
    _schedule?: any;
};
type CollectionDetailResponse = {
    cron?: any;
    is_active?: boolean;
    tag?: string[];
    description?: string;
    logo?: Media1;
    meta?: any;
    slug?: string;
    visible_facets_keys?: string[];
    app_id?: string;
    name?: string;
    type?: string;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    priority?: number;
    allow_sort?: boolean;
    badge?: any;
    uid?: string;
    banners?: ImageUrls;
    _schedule?: any;
};
type UpdateCollection = {
    is_active?: boolean;
    logo?: CollectionImage;
    description?: string;
    meta?: any;
    slug?: string;
    _locale_language?: any;
    visible_facets_keys?: string[];
    name?: string;
    published?: boolean;
    type?: string;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    is_visible?: boolean;
    modified_by?: UserInfo;
    priority?: number;
    seo?: SeoDetail;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    banners?: CollectionBanner;
    _custom_json?: any;
    sort_on?: string;
    _schedule?: CollectionSchedule;
    tags?: string[];
};
type ProductBrand = {
    uid?: number;
    logo?: Media1;
    name?: string;
    action?: Action;
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
    key?: string;
    value?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductListingDetail = {
    similars?: string[];
    short_description?: string;
    medias?: Media1[];
    rating_count?: number;
    product_online_date?: string;
    description?: string;
    slug: string;
    teaser_tag?: any;
    highlights?: string[];
    item_code?: string;
    sellable?: boolean;
    has_variant?: boolean;
    image_nature?: string;
    name?: string;
    promo_meta?: any;
    discount?: string;
    type?: string;
    brand?: ProductBrand;
    price?: ProductListingPrice;
    tryouts?: string[];
    rating?: number;
    attributes?: any;
    uid?: number;
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_type?: string;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    page?: Page;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    query?: CollectionQuery[];
    item?: ItemQueryForUserCollection[];
    type?: string;
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type CatalogInsightBrand = {
    article_freshness?: number;
    available_articles?: number;
    total_articles?: number;
    total_sizes?: number;
    name?: string;
    available_sizes?: number;
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
    products?: number;
    articles?: number;
};
type CrossSellingResponse = {
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    opt_level: string;
    brand_ids?: number[];
    store_ids?: number[];
    enabled?: boolean;
    platform?: string;
    company_id?: number;
};
type CompanyOptIn = {
    opt_level: string;
    brand_ids: number[];
    modified_on: number;
    store_ids: number[];
    enabled: boolean;
    created_on: number;
    modified_by?: any;
    platform: string;
    company_id: number;
    created_by?: any;
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
    brand_id?: number;
    company_id?: number;
    brand_name?: string;
    total_article?: number;
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
    manager?: any;
    modified_on?: string;
    display_name?: string;
    uid?: number;
    company_id?: number;
    created_on?: string;
    additional_contacts?: any[];
    name?: string;
    timing?: any;
    documents?: any[];
    store_type?: string;
    store_code?: string;
    address?: any;
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
    multi?: boolean;
    format?: string;
    allowed_values?: string[];
    range?: AttributeSchemaRange;
    type: string;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    indexing: boolean;
    priority?: number;
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
    filters?: AttributeMasterFilter;
    enabled_for_end_consumer?: boolean;
    meta?: AttributeMasterMeta;
    description?: string;
    name?: string;
    slug?: string;
    is_nested?: boolean;
    departments?: string[];
    logo?: string;
    id?: string;
    details?: AttributeMasterDetails;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    code?: string;
    meta?: any;
    status?: number;
    errors?: any;
};
type UserSerializer = {
    username?: string;
    uid?: string;
    user_id?: string;
    contact?: string;
    _id?: string;
};
type GetDepartment = {
    priority_order?: number;
    modified_on?: string;
    uid?: number;
    created_on?: string;
    is_active?: boolean;
    modified_by?: UserSerializer;
    page_no?: number;
    synonyms?: string[];
    logo?: string;
    name?: string;
    search?: string;
    slug?: string;
    page_size?: number;
    item_type?: string;
    created_by?: UserSerializer;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    code?: string;
    meta?: any;
    status?: number;
    errors?: any;
};
type DepartmentCreateUpdate = {
    priority_order: number;
    uid?: number;
    platforms?: any;
    _custom_json?: any;
    is_active?: boolean;
    synonyms?: string[];
    logo: string;
    name: string;
    tags?: string[];
    slug?: string;
    _cls?: string;
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
    super_user?: boolean;
    username: string;
};
type DepartmentModel = {
    priority_order: number;
    modified_on: string;
    uid?: number;
    _custom_json?: any;
    created_on: string;
    modified_by?: UserDetail;
    is_active?: boolean;
    synonyms?: any[];
    name: any;
    verified_on?: string;
    logo: any;
    slug?: any;
    verified_by?: UserDetail;
    _id?: any;
    created_by?: UserDetail;
    _cls?: any;
};
type ProductTemplate = {
    is_archived?: boolean;
    attributes?: string[];
    is_physical: boolean;
    is_expirable?: boolean;
    modified_on?: string;
    attributes_schema?: any[];
    created_on?: string;
    is_active?: boolean;
    modified_by?: any;
    tag?: string;
    categories?: string[];
    description?: string;
    name?: string;
    departments?: string[];
    slug: string;
    logo?: string;
    created_by?: any;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    is_archived?: boolean;
    attributes?: string[];
    is_physical: boolean;
    is_expirable?: boolean;
    attributes_schema?: any[];
    is_active?: boolean;
    tag?: string;
    categories?: string[];
    description?: string;
    name?: string;
    departments?: string[];
    slug: string;
    logo?: string;
    id?: string;
};
type Properties = {
    short_description?: any;
    category_slug?: any;
    is_active?: any;
    country_of_origin?: any;
    description?: any;
    slug?: any;
    size_guide?: any;
    trader_type?: any;
    brand_uid?: any;
    media?: any;
    teaser_tag?: any;
    highlights?: any;
    item_code?: any;
    return_config?: any;
    hsn_code?: any;
    variants?: any;
    no_of_boxes?: any;
    name?: any;
    custom_order?: any;
    trader?: any;
    is_dependent?: any;
    multi_size?: any;
    command?: any;
    product_publish?: any;
    sizes?: any;
    currency?: any;
    tags?: any;
    product_group_tag?: any;
    item_type?: any;
};
type GlobalValidation = {
    definitions?: any;
    title?: string;
    required?: string[];
    description?: string;
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
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadItemsData = {
    brand?: string[];
    templates?: string[];
    type?: string;
};
type ProductDownloadsItems = {
    trigger_on?: string;
    completed_on?: string;
    url?: string;
    created_by?: VerifiedBy;
    seller_id?: number;
    id?: string;
    status?: string;
    template_tags?: any;
    data?: ProductDownloadItemsData;
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
type Media2 = {
    portrait: string;
    landscape: string;
    logo: string;
};
type Hierarchy = {
    l1: number;
    department: number;
    l2: number;
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
type Category = {
    media?: Media2;
    modified_on?: string;
    tryouts?: string[];
    uid?: number;
    level: number;
    hierarchy?: Hierarchy[];
    is_active: boolean;
    created_on?: string;
    modified_by?: any;
    synonyms?: string[];
    departments: number[];
    name: string;
    id?: string;
    slug?: string;
    marketplaces?: CategoryMapping;
    priority?: number;
    created_by?: any;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    media?: Media2;
    tryouts?: string[];
    level: number;
    hierarchy?: Hierarchy[];
    is_active: boolean;
    synonyms?: string[];
    departments: number[];
    name: string;
    slug?: string;
    marketplaces?: CategoryMapping;
    priority?: number;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type ReturnConfigResponse = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Image = {
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type Logo = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Product = {
    short_description?: string;
    category_slug?: string;
    category_uid?: number;
    is_active?: boolean;
    pending?: string;
    country_of_origin?: string;
    description?: string;
    departments?: number[];
    id?: string;
    slug?: string;
    all_identifiers?: string[];
    verified_on?: string;
    size_guide?: string;
    variant_group?: any;
    template_tag?: string;
    tax_identifier?: any;
    net_quantity?: NetQuantityResponse;
    brand_uid?: number;
    media?: Media1[];
    return_config?: ReturnConfigResponse;
    highlights?: string[];
    item_code?: string;
    all_sizes?: any[];
    teaser_tag?: any;
    hsn_code?: string;
    image_nature?: string;
    variants?: any;
    no_of_boxes?: number;
    name?: string;
    custom_order?: any;
    l3_mapping?: string[];
    trader?: any[];
    company_id?: number;
    images?: Image[];
    is_set?: boolean;
    moq?: any;
    brand?: Brand;
    is_physical?: boolean;
    all_company_ids?: number[];
    is_expirable?: boolean;
    is_dependent?: boolean;
    modified_by?: any;
    created_by?: any;
    multi_size?: boolean;
    primary_color?: string;
    attributes?: any;
    product_publish?: ProductPublished;
    category?: any;
    modified_on?: string;
    uid?: number;
    sizes?: any[];
    _custom_json?: any;
    created_on?: string;
    color?: string;
    is_image_less_product?: boolean;
    stage?: string;
    currency?: string;
    tags?: string[];
    verified_by?: VerifiedBy;
    product_group_tag?: string[];
    item_type?: string;
    variant_media?: any;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type Trader = {
    address?: string[];
    name: any;
    type?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type ProductCreateUpdateSchemaV2 = {
    short_description?: string;
    category_slug: string;
    is_active?: boolean;
    requester?: string;
    country_of_origin: string;
    description?: string;
    departments: number[];
    slug: string;
    size_guide?: string;
    variant_group?: any;
    template_tag: string;
    tax_identifier: TaxIdentifier;
    net_quantity?: NetQuantity;
    brand_uid: number;
    media?: Media1[];
    teaser_tag?: TeaserTag;
    highlights?: string[];
    item_code: string;
    return_config: ReturnConfig;
    variants?: any;
    no_of_boxes?: number;
    name: string;
    custom_order?: CustomOrder;
    trader: Trader[];
    company_id: number;
    is_set?: boolean;
    is_dependent?: boolean;
    change_request_id?: any;
    action?: string;
    multi_size?: boolean;
    attributes?: any;
    product_publish?: ProductPublish;
    uid?: number;
    sizes: any[];
    _custom_json?: any;
    is_image_less_product?: boolean;
    currency: string;
    tags?: string[];
    bulk_job_id?: string;
    product_group_tag?: string[];
    item_type: string;
    variant_media?: any;
};
type ProductVariants = {
    brand_uid?: number;
    media?: Media1[];
    item_code?: string;
    uid?: number;
    category_uid?: number;
    name?: string;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    enabled_for_end_consumer?: boolean;
    unit?: string;
    synonyms?: any;
    description?: string;
    logo?: string;
    departments: string[];
    slug: string;
    schema: AttributeMaster;
    name?: string;
    raw_key?: string;
    modified_by?: any;
    is_nested?: boolean;
    variant?: boolean;
    created_by?: any;
    details: AttributeMasterDetails;
    filters: AttributeMasterFilter;
    modified_on?: string;
    created_on?: string;
    suggestion?: string;
    tags?: string[];
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ProductCreateUpdate = {
    short_description?: string;
    category_slug: string;
    is_active?: boolean;
    requester?: string;
    country_of_origin: string;
    description?: string;
    departments: number[];
    slug: string;
    size_guide?: string;
    variant_group?: any;
    template_tag: string;
    tax_identifier: TaxIdentifier;
    net_quantity?: NetQuantity;
    brand_uid: number;
    media?: Media1[];
    teaser_tag?: TeaserTag;
    highlights?: string[];
    item_code: any;
    return_config: ReturnConfig;
    variants?: any;
    no_of_boxes?: number;
    name: any;
    custom_order?: CustomOrder;
    trader: Trader[];
    company_id: number;
    is_set?: boolean;
    is_dependent?: boolean;
    change_request_id?: any;
    action?: string;
    multi_size?: boolean;
    product_publish?: ProductPublish;
    uid?: number;
    _custom_json?: any;
    is_image_less_product?: boolean;
    currency: string;
    tags?: string[];
    bulk_job_id?: string;
    product_group_tag?: string[];
    item_type: string;
    variant_media?: any;
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
    item_width: number;
    size: any;
    item_dimensions_unit_of_measure: string;
    item_weight: number;
    item_length: number;
    identifiers?: ValidateIdentifier[];
    item_height: number;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    user_id?: string;
    full_name?: string;
    username?: string;
};
type ProductBulkRequest = {
    failed_records?: string[];
    file_path?: string;
    modified_on?: string;
    succeed?: number;
    cancelled?: number;
    template?: ProductTemplate;
    created_on?: string;
    is_active?: boolean;
    modified_by?: UserDetail1;
    stage?: string;
    failed?: number;
    total?: number;
    cancelled_records?: string[];
    company_id?: number;
    created_by?: UserDetail1;
    template_tag?: string;
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
    failed_records?: any[];
    file_path?: string;
    modified_on?: string;
    succeed?: number;
    cancelled?: number;
    custom_template_tag?: string;
    created_on: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    stage?: string;
    failed?: number;
    total?: number;
    tracking_url?: string;
    cancelled_records?: any[];
    company_id: number;
    created_by?: UserInfo1;
    template_tag?: string;
};
type BulkResponse = {
    modified_on?: string;
    created_on: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    batch_id: string;
    created_by?: UserInfo1;
};
type BulkProductRequest = {
    batch_id: string;
    company_id: number;
    data: any[];
    template_tag: string;
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
    file_path?: string;
    failed_records?: string[];
    retry?: number;
    modified_on?: string;
    succeed?: number;
    cancelled?: number;
    created_on?: string;
    modified_by?: UserCommon;
    is_active?: boolean;
    stage?: string;
    failed?: number;
    total?: number;
    tracking_url?: string;
    id?: string;
    cancelled_records?: string[];
    company_id?: number;
    created_by?: UserCommon;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductBulkAssets = {
    user: any;
    company_id?: number;
    url: string;
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
type InventoryResponse = {
    quantity?: number;
    store?: any;
    item_id?: number;
    price_transfer?: number;
    price?: number;
    sellable_quantity?: number;
    seller_identifier?: string;
    uid?: string;
    price_effective?: number;
    size?: string;
    inventory_updated_on?: string;
    currency?: string;
    identifiers?: any;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
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
type GTIN = {
    gtin_type: string;
    gtin_value: any;
    primary?: boolean;
};
type InvSize = {
    item_weight_unit_of_measure?: string;
    quantity: number;
    price_transfer?: number;
    price?: number;
    item_width?: number;
    expiration_date?: string;
    size: any;
    price_effective: number;
    item_dimensions_unit_of_measure?: string;
    item_weight?: number;
    store_code: string;
    item_length?: number;
    currency: string;
    set?: InventorySet;
    identifiers: GTIN[];
    item_height?: number;
    is_set?: boolean;
};
type ItemQuery = {
    uid?: number;
    brand_uid?: number;
    item_code?: string;
};
type InventoryRequest = {
    sizes: InvSize[];
    company_id: number;
    item: ItemQuery;
};
type ReturnConfig1 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type CompanyMeta = {
    id: number;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type BrandMeta = {
    name: string;
    id: number;
};
type PriceMeta = {
    tp_notes?: any;
    effective: number;
    currency: string;
    marked: number;
    transfer: number;
    updated_at?: string;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type DimensionResponse = {
    width: number;
    height: number;
    length: number;
    unit: string;
    is_default: boolean;
};
type InventorySellerResponse = {
    track_inventory?: boolean;
    fynd_item_code: string;
    is_active?: boolean;
    country_of_origin: string;
    meta?: any;
    tax_identifier?: any;
    return_config?: ReturnConfig1;
    item_id: number;
    trace_id?: string;
    company: CompanyMeta;
    weight: WeightResponse;
    trader?: Trader1[];
    is_set?: boolean;
    raw_meta?: any;
    brand: BrandMeta;
    store: StoreMeta;
    seller_identifier: string;
    price: PriceMeta;
    expiration_date?: string;
    quantities?: Quantities;
    size: string;
    modified_by?: UserSerializer;
    fynd_meta?: any;
    manufacturer: ManufacturerResponse;
    fynd_article_code: string;
    created_by?: UserSerializer;
    total_quantity: number;
    dimension: DimensionResponse;
    fragile: boolean;
    uid: string;
    _custom_json?: any;
    stage?: string;
    identifier: any;
    added_on_store?: string;
    tags?: string[];
    set?: InventorySet;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    failed_records?: string[];
    file_path?: string;
    modified_on?: string;
    cancelled?: number;
    succeed?: number;
    created_on?: string;
    is_active?: boolean;
    modified_by?: any;
    stage?: string;
    failed?: number;
    total?: number;
    id?: string;
    cancelled_records?: string[];
    company_id?: number;
    created_by?: any;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    item_weight_unit_of_measure?: string;
    quantity?: number;
    total_quantity?: number;
    seller_identifier: string;
    price?: number;
    expiration_date?: string;
    price_effective?: number;
    item_dimensions_unit_of_measure?: string;
    currency?: string;
    trace_id?: string;
    tags?: string[];
    price_marked?: number;
    store_code: string;
};
type InventoryBulkRequest = {
    batch_id: string;
    sizes: InventoryJobPayload[];
    company_id: number;
    user?: any;
};
type InventoryExportJob = {
    trigger_on?: string;
    completed_on?: string;
    seller_id: number;
    request_params?: any;
    status?: string;
    url?: string;
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
type ReturnConfig2 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type CompanyMeta1 = {
    id?: number;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type ArticleStoreResponse = {
    uid?: number;
    store_type?: string;
    store_code?: string;
    name?: string;
};
type PriceArticle = {
    tp_notes?: any;
    effective?: number;
    currency?: string;
    marked?: number;
    transfer?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    not_available?: Quantity;
    damaged?: Quantity;
    order_committed?: Quantity;
    sellable?: Quantity;
};
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
type DimensionResponse1 = {
    length?: number;
    width?: number;
    unit?: string;
    height?: number;
};
type GetInventories = {
    track_inventory?: boolean;
    country_of_origin?: string;
    id?: string;
    tax_identifier?: any;
    return_config?: ReturnConfig2;
    item_id?: number;
    platforms?: any;
    trace_id?: string;
    company?: CompanyMeta1;
    weight?: WeightResponse1;
    trader?: Trader2[];
    is_set?: boolean;
    brand?: BrandMeta1;
    store?: ArticleStoreResponse;
    seller_identifier?: string;
    price?: PriceArticle;
    quantities?: QuantitiesArticle;
    expiration_date?: string;
    size?: string;
    modified_by?: UserSerializer;
    inventory_updated_on?: string;
    manufacturer?: ManufacturerResponse1;
    created_by?: UserSerializer;
    total_quantity?: number;
    dimension?: DimensionResponse1;
    uid?: string;
    date_meta?: DateMeta;
    stage?: string;
    identifier?: any;
    tags?: string[];
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
    multivalues?: boolean;
    data?: FilerList[];
};
type InventoryPayload = {
    total_quantity?: number;
    seller_identifier: string;
    expiration_date?: string;
    store_id: number;
    price_effective?: number;
    trace_id?: string;
    tags?: string[];
    price_marked?: number;
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
    tax_on_mrp?: boolean;
    hs2_code?: string;
    modified_on?: string;
    hsn_code?: string;
    threshold2?: number;
    threshold1?: number;
    tax2?: number;
    tax1?: number;
    tax_on_esp?: boolean;
    id?: string;
    company_id?: number;
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
    tax_on_mrp: boolean;
    hs2_code: string;
    uid?: number;
    hsn_code: string;
    threshold2?: number;
    threshold1: number;
    is_active?: boolean;
    tax2?: number;
    tax1: number;
    tax_on_esp?: boolean;
    company_id: number;
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
    threshold: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    modified_on?: string;
    country_code: string;
    hsn_code: string;
    created_on?: string;
    modified_by?: any;
    description: string;
    taxes: TaxSlab[];
    reporting_hsn: string;
    created_by?: any;
    type: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    uid?: number;
    banners?: ImageUrls;
    logo?: Media;
    name?: string;
    discount?: string;
    departments?: string[];
    slug?: string;
    action?: Action;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    priority_order?: number;
    uid?: number;
    logo?: Media;
    name?: string;
    slug?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    uid?: number;
    banners?: ImageUrls;
    _custom_json?: any;
    name?: string;
    childs?: any[];
    slug?: string;
    action?: Action;
};
type SecondLevelChild = {
    uid?: number;
    banners?: ImageUrls;
    _custom_json?: any;
    name?: string;
    childs?: ThirdLevelChild[];
    slug?: string;
    action?: Action;
};
type Child = {
    uid?: number;
    banners?: ImageUrls;
    _custom_json?: any;
    name?: string;
    childs?: SecondLevelChild[];
    slug?: string;
    action?: Action;
};
type CategoryItems = {
    uid?: number;
    banners?: ImageUrls;
    name?: string;
    childs?: Child[];
    slug?: string;
    action?: Action;
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
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    operators?: any;
    sort_on?: ProductSortOn[];
    page: Page;
};
type ProductDetail = {
    similars?: string[];
    short_description?: string;
    medias?: Media1[];
    rating_count?: number;
    product_online_date?: string;
    description?: string;
    slug: string;
    teaser_tag?: any;
    highlights?: string[];
    item_code?: string;
    has_variant?: boolean;
    image_nature?: string;
    name?: string;
    promo_meta?: any;
    type?: string;
    brand?: ProductBrand;
    tryouts?: string[];
    rating?: number;
    attributes?: any;
    uid?: number;
    color?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_type?: string;
};
type InventoryPage = {
    has_next?: boolean;
    has_previous?: boolean;
    item_total: number;
    next_id?: string;
    type: string;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
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
type InvoiceCredSerializer = {
    password?: string;
    username?: string;
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
type GetAddressSerializer = {
    address_type?: string;
    landmark?: string;
    address1?: string;
    pincode?: number;
    country_code?: string;
    city?: string;
    latitude?: number;
    address2?: string;
    longitude?: number;
    country?: string;
    state?: string;
};
type GetCompanySerializer = {
    company_type?: string;
    modified_on?: string;
    uid?: number;
    created_on?: string;
    modified_by?: UserSerializer1;
    addresses?: GetAddressSerializer[];
    stage?: string;
    name?: string;
    verified_on?: string;
    reject_reason?: string;
    verified_by?: UserSerializer1;
    created_by?: UserSerializer1;
    business_type?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    weekday: string;
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
    open: boolean;
};
type GetLocationSerializer = {
    display_name: string;
    phone_number?: string;
    verified_on?: string;
    integration_type?: LocationIntegrationType;
    notification_emails?: string[];
    manager?: LocationManagerSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    name: string;
    company?: GetCompanySerializer;
    documents?: Document[];
    contact_numbers?: SellerPhoneNumber[];
    product_return_config?: ProductReturnConfigSerializer;
    modified_by?: UserSerializer2;
    code: string;
    store_type?: string;
    created_by?: UserSerializer2;
    warnings?: any;
    modified_on?: string;
    uid?: number;
    _custom_json?: any;
    created_on?: string;
    stage?: string;
    timing?: LocationDayWiseSerializer[];
    verified_by?: UserSerializer2;
    address: GetAddressSerializer;
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
    uid: number;
    app_id: string;
    _custom_json?: any;
    is_active?: boolean;
    logo?: string;
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
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
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
    mode?: string;
    warnings?: any;
    business_country_info?: BusinessCountryInfo;
    created_on?: string;
    addresses?: GetAddressSerializer[];
    name?: string;
    company_type: string;
    verified_on?: string;
    business_type: string;
    verified_by?: UserSerializer;
    uid: number;
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer[];
    created_by?: UserSerializer;
    _custom_json?: any;
    documents?: Document[];
    franchise_enabled?: boolean;
    business_details?: BusinessDetails;
    modified_by?: UserSerializer;
    business_info?: string;
    stage?: string;
    modified_on?: string;
    contact_details?: ContactDetails;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    city: string;
    pincode: number;
    landmark?: string;
    address_type: string;
    address2?: string;
    country: string;
    address1: string;
    state: string;
    country_code?: string;
    latitude: number;
    longitude: number;
};
type UpdateCompany = {
    _custom_json?: any;
    name?: string;
    company_type?: string;
    documents?: Document[];
    business_type?: string;
    business_info?: string;
    warnings?: any;
    business_details?: BusinessDetails;
    contact_details?: ContactDetails;
    notification_emails?: string[];
    franchise_enabled?: boolean;
    taxes?: CompanyTaxesSerializer1[];
    reject_reason?: string;
    addresses?: CreateUpdateAddressSerializer[];
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
    store?: DocumentsObj;
    stage?: string;
    uid?: number;
    brand?: DocumentsObj;
    store_documents?: DocumentsObj;
    company_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    mode?: string;
    warnings?: any;
    created_on?: string;
    reject_reason?: string;
    name: string;
    description?: string;
    verified_on?: string;
    verified_by?: UserSerializer;
    uid?: number;
    slug_key?: string;
    logo?: string;
    created_by?: UserSerializer;
    _custom_json?: any;
    banner?: BrandBannerSerializer;
    modified_by?: UserSerializer;
    stage?: string;
    modified_on?: string;
    synonyms?: string[];
    _locale_language?: any;
};
type CreateUpdateBrandRequestSerializer = {
    _custom_json?: any;
    name: string;
    description?: string;
    company_id?: number;
    uid?: number;
    synonyms?: string[];
    brand_tier?: string;
    banner?: BrandBannerSerializer;
    logo: string;
    _locale_language?: any;
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
    name?: string;
    company_type: string;
    verified_on?: string;
    modified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    details?: CompanyDetails;
    business_type: string;
    stage?: string;
    verified_by?: UserSerializer;
    market_channels?: string[];
    modified_on?: string;
    uid?: number;
    notification_emails?: string[];
    business_country_info?: BusinessCountryInfo;
    created_on?: string;
    reject_reason?: string;
    created_by?: UserSerializer;
};
type CompanyBrandSerializer = {
    verified_on?: string;
    modified_by?: UserSerializer;
    company?: CompanySerializer;
    stage?: string;
    verified_by?: UserSerializer;
    warnings?: any;
    modified_on?: string;
    uid?: number;
    brand?: GetBrandResponseSerializer;
    created_on?: string;
    reject_reason?: string;
    created_by?: UserSerializer;
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
    date: HolidayDateSerializer;
    holiday_type: string;
    title: string;
};
type AddressSerializer = {
    city?: string;
    pincode?: number;
    address_type?: string;
    landmark?: string;
    address2?: string;
    country?: string;
    address1?: string;
    state?: string;
    country_code?: string;
    latitude: number;
    longitude: number;
};
type LocationSerializer = {
    _custom_json?: any;
    name: string;
    timing?: LocationDayWiseSerializer[];
    contact_numbers?: SellerPhoneNumber[];
    documents?: Document[];
    company: number;
    stage?: string;
    store_type?: string;
    warnings?: any;
    address: AddressSerializer;
    uid?: number;
    display_name: string;
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    code: string;
    manager?: LocationManagerSerializer;
    holiday?: HolidaySchemaSerializer[];
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type _ArticleQuery = {
    item_id?: number;
    ignored_stores?: number[];
    size?: string;
};
type _AssignStoreArticle = {
    article_assignment?: _ArticleAssignment;
    quantity?: number;
    meta?: any;
    query?: _ArticleQuery;
    group_id?: string;
};
type AssignStoreRequestValidator = {
    pincode?: string;
    company_id?: number;
    channel_identifier?: string;
    articles?: _AssignStoreArticle[];
    channel_type?: string;
    store_ids?: number[];
    app_id?: string;
};
type AssignStoreResponseSerializer = {
    item_id?: number;
    article_assignment?: _ArticleAssignment;
    company_id?: number;
    store_id?: number;
    quantity?: number;
    status?: boolean;
    meta?: any;
    _id?: string;
    s_city?: string;
    uid?: string;
    index?: number;
    store_pincode?: string;
    price_effective?: number;
    price_marked?: number;
    size?: string;
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
type Validation = {
    app_id?: string[];
    user_registered_after?: string;
    anonymous?: boolean;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponSchedule = {
    end?: string;
    next_schedule?: any[];
    duration?: number;
    start?: string;
    cron?: string;
};
type RuleDefinition = {
    auto_apply?: boolean;
    type: string;
    currency_code?: string;
    calculate_on: string;
    applicable_on: string;
    is_exact?: boolean;
    scope?: string[];
    value_type: string;
};
type Rule = {
    min?: number;
    max?: number;
    key?: number;
    discount_qty?: number;
    value?: number;
};
type Validity = {
    priority?: number;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    subtitle?: string;
    auto?: DisplayMetaDict;
    description?: string;
    title?: string;
    remove?: DisplayMetaDict;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PriceRange = {
    min?: number;
    max?: number;
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
type Restrictions = {
    post_order?: PostOrder;
    coupon_allowed?: boolean;
    price_range?: PriceRange;
    payments?: any;
    uses?: UsesRestriction;
    user_type?: string;
    user_groups?: number[];
    bulk_bundle?: BulkBundleRestriction;
    ordering_stores?: number[];
    platforms?: string[];
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CouponAdd = {
    validation?: Validation;
    tags?: string[];
    ownership: Ownership;
    type_slug: string;
    _schedule?: CouponSchedule;
    rule_definition: RuleDefinition;
    rule: Rule[];
    code: string;
    validity: Validity;
    identifiers: Identifier;
    display_meta: DisplayMeta;
    state?: State;
    date_meta?: CouponDateMeta;
    action?: CouponAction;
    restrictions?: Restrictions;
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
    validation?: Validation;
    tags?: string[];
    ownership: Ownership;
    type_slug: string;
    _schedule?: CouponSchedule;
    rule_definition: RuleDefinition;
    rule: Rule[];
    code: string;
    validity: Validity;
    identifiers: Identifier;
    display_meta: DisplayMeta;
    state?: State;
    date_meta?: CouponDateMeta;
    action?: CouponAction;
    restrictions?: Restrictions;
    author?: CouponAuthor;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type CompareObject = {
    greater_than_equals?: number;
    equals?: number;
    greater_than?: number;
    less_than_equals?: number;
    less_than?: number;
};
type ItemCriteria = {
    item_company?: number[];
    buy_rules?: string[];
    item_size?: string[];
    item_category?: number[];
    available_zones?: string[];
    item_brand?: number[];
    all_items?: boolean;
    cart_unique_item_amount?: CompareObject;
    item_exclude_store?: number[];
    item_exclude_company?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_brand?: number[];
    item_id?: number[];
    item_store?: number[];
    item_exclude_sku?: string[];
    cart_total?: CompareObject;
    item_exclude_id?: number[];
    item_exclude_category?: number[];
    item_sku?: string[];
    cart_quantity?: CompareObject;
    product_tags?: string[];
};
type DisplayMeta1 = {
    name?: string;
    offer_text?: string;
    offer_label?: string;
    description?: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionSchedule = {
    end?: string;
    next_schedule?: any[];
    duration?: number;
    published: boolean;
    start: string;
    cron?: string;
};
type DiscountOffer = {
    max_offer_quantity?: number;
    discount_amount?: number;
    discount_price?: number;
    min_offer_quantity?: number;
    max_discount_amount?: number;
    code?: string;
    partial_can_ret?: boolean;
    max_usage_per_transaction?: number;
    apportion_discount?: boolean;
    discount_percentage?: number;
};
type DiscountRule = {
    discount_type: string;
    offer: DiscountOffer;
    buy_condition: string;
    item_criteria: ItemCriteria;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue1;
    type: string;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type Restrictions1 = {
    anonymous_users?: boolean;
    post_order?: PostOrder1;
    user_registered?: UserRegistered;
    user_id?: string[];
    payments?: PromotionPaymentModes[];
    uses: UsesRestriction1;
    user_groups?: number[];
    order_quantity?: number;
    platforms?: string[];
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type PromotionListItem = {
    buy_rules: any;
    apply_all_discount?: boolean;
    mode: string;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    _schedule?: PromotionSchedule;
    calculate_on?: string;
    apply_exclusive?: string;
    promotion_type: string;
    promo_group: string;
    _custom_json?: any;
    application_id: string;
    discount_rules: DiscountRule[];
    visiblility?: Visibility;
    code?: string;
    stackable?: boolean;
    restrictions?: Restrictions1;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    currency?: string;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    buy_rules: any;
    apply_all_discount?: boolean;
    mode: string;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    _schedule?: PromotionSchedule;
    calculate_on?: string;
    apply_exclusive?: string;
    promotion_type: string;
    promo_group: string;
    _custom_json?: any;
    application_id: string;
    discount_rules: DiscountRule[];
    visiblility?: Visibility;
    code?: string;
    stackable?: boolean;
    restrictions?: Restrictions1;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    currency?: string;
};
type PromotionUpdate = {
    buy_rules: any;
    apply_all_discount?: boolean;
    mode: string;
    apply_priority?: number;
    display_meta: DisplayMeta1;
    date_meta?: PromotionDateMeta;
    ownership: Ownership1;
    _schedule?: PromotionSchedule;
    calculate_on?: string;
    apply_exclusive?: string;
    promotion_type: string;
    promo_group: string;
    _custom_json?: any;
    application_id: string;
    discount_rules: DiscountRule[];
    visiblility?: Visibility;
    code?: string;
    stackable?: boolean;
    restrictions?: Restrictions1;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    currency?: string;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    example?: string;
    created_on?: string;
    subtitle?: string;
    modified_on?: string;
    entity_slug?: string;
    type?: string;
    description?: string;
    title?: string;
    is_hidden?: boolean;
    entity_type?: string;
};
type CartItem = {
    quantity?: number;
    product_id: string;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type CouponBreakup = {
    sub_title?: string;
    max_discount_value?: number;
    minimum_cart_value?: number;
    type?: string;
    coupon_value?: number;
    description?: string;
    message?: string;
    value?: number;
    is_applied?: boolean;
    code?: string;
    title?: string;
    uid?: string;
    coupon_type?: string;
};
type RawBreakup = {
    coupon?: number;
    subtotal?: number;
    mrp_total?: number;
    cod_charge?: number;
    vog?: number;
    convenience_fee?: number;
    discount?: number;
    you_saved?: number;
    gst_charges?: number;
    total?: number;
    delivery_charge?: number;
    fynd_cash?: number;
};
type LoyaltyPoints = {
    applicable?: number;
    is_applied?: boolean;
    description?: string;
    total?: number;
};
type DisplayBreakup = {
    currency_code?: string;
    key?: string;
    currency_symbol?: string;
    message?: string[];
    value?: number;
    display?: string;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    raw?: RawBreakup;
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
};
type PromoMeta = {
    message?: string;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    raw_offer?: any;
    offer?: any;
    item_criteria?: any;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type FreeGiftItem = {
    item_price_details?: any;
    item_name?: string;
    item_slug?: string;
    item_images_url?: string[];
    item_id?: number;
    item_brand_name?: string;
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    parent_item_identifier?: string;
    quantity?: number;
};
type AppliedPromotion = {
    discount_rules?: DiscountRulesApp[];
    buy_rules?: BuyRules[];
    ownership?: Ownership2;
    article_quantity?: number;
    amount?: number;
    applied_free_articles?: AppliedFreeArticles[];
    promotion_name?: string;
    promotion_group?: string;
    promo_id?: string;
    offer_text?: string;
    promotion_type?: string;
    mrp_promotion?: boolean;
};
type ProductPrice = {
    currency_code?: string;
    effective?: number;
    currency_symbol?: string;
    marked?: number;
    add_on?: number;
    selling?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    currency_symbol?: string;
    marked?: number;
    effective?: number;
    currency_code?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    type?: string;
    extra_meta?: any;
    size?: string;
    _custom_json?: any;
    store?: BaseInfo;
    product_group_tags?: string[];
    seller?: BaseInfo;
    quantity?: number;
    uid?: string;
    price?: ArticlePriceInfo;
    parent_item_identifiers?: any;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
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
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type CartProduct = {
    brand?: BaseInfo;
    type?: string;
    name?: string;
    categories?: CategoryInfo[];
    action?: ProductAction;
    net_quantity?: NetQuantity;
    images?: ProductImage[];
    slug?: string;
    uid?: number;
};
type ProductAvailability = {
    other_store_quantity?: number;
    sizes?: string[];
    is_valid?: boolean;
    out_of_stock?: boolean;
    deliverable?: boolean;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    promo_meta?: PromoMeta;
    bulk_offer?: any;
    promotions_applied?: AppliedPromotion[];
    key?: string;
    price_per_unit?: ProductPriceInfo;
    discount?: string;
    article?: ProductArticle;
    product?: CartProduct;
    availability?: ProductAvailability;
    message?: string;
    coupon_message?: string;
    identifiers: CartProductIdentifer;
    is_set?: boolean;
    quantity?: number;
    price?: ProductPriceInfo;
    parent_item_identifiers?: any;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    message?: string;
    items?: CartProductInfo[];
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    message?: string;
    success?: boolean;
    errors?: any;
};
type ShippingAddress = {
    area?: string;
    address?: string;
    name?: string;
    email?: string;
    area_code_slug?: string;
    country?: string;
    meta?: any;
    pincode?: number;
    area_code: string;
    country_code?: string;
    landmark?: string;
    state?: string;
    city?: string;
    address_type?: string;
    phone?: number;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
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
    message?: string;
    items?: CartProductInfo[];
    is_valid?: boolean;
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
    quantity?: number;
    price_marked: number;
    price_effective: number;
    loyalty_discount?: number;
    extra_meta?: any;
    files?: OpenApiFiles[];
    cod_charges: number;
    coupon_effective_discount: number;
    discount: number;
    size: string;
    meta?: CartItemMeta;
    payment_methods: MultiTenderPaymentMethod[];
    employee_discount?: number;
    cashback_applied: number;
    amount_paid: number;
    product_id: number;
    delivery_charges: number;
};
type OpenApiPlatformCheckoutReq = {
    coupon?: string;
    order_id?: string;
    billing_address: ShippingAddress;
    comment?: string;
    coupon_code: string;
    payment_mode?: string;
    shipping_address?: ShippingAddress;
    currency_code?: string;
    loyalty_discount?: number;
    coupon_value: number;
    files?: OpenApiFiles[];
    cod_charges: number;
    payment_methods: MultiTenderPaymentMethod[];
    employee_discount?: any;
    cashback_applied: number;
    cart_value: number;
    delivery_charges: number;
    affiliate_order_id?: string;
    gstin?: string;
    cart_items: OpenApiOrderItem[];
};
type OpenApiCheckoutResponse = {
    message?: string;
    order_id: string;
    success?: boolean;
    order_ref_id?: string;
};
type AbandonedCart = {
    created_on: string;
    order_id?: string;
    comment?: string;
    bulk_coupon_discount?: number;
    app_id?: string;
    uid: number;
    payment_mode?: string;
    cashback: any;
    is_active?: boolean;
    discount?: number;
    checkout_mode?: string;
    is_default: boolean;
    cart_value?: number;
    promotion?: any;
    fynd_credits?: any;
    coupon?: any;
    articles: any[];
    shipments?: any[];
    fc_index_map?: number[];
    pick_up_customer_details?: any;
    merge_qty?: boolean;
    last_modified: string;
    is_archive?: boolean;
    _id: string;
    buy_now?: boolean;
    expire_at: string;
    cod_charges?: any;
    user_id: string;
    meta?: any;
    payment_methods?: any[];
    delivery_charges?: any;
    gstin?: string;
    payments?: any;
};
type AbandonedCartResponse = {
    page?: Page;
    result?: any;
    message?: string;
    items?: AbandonedCart[];
    success?: boolean;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    delivery_charge_info?: string;
    currency?: CartCurrency;
    payment_selection_lock?: PaymentSelectionLock;
    comment?: string;
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    message?: string;
    last_modified?: string;
    items?: CartProductInfo[];
    is_valid?: boolean;
    coupon_text?: string;
    id?: string;
    delivery_promise?: ShipmentPromise;
    gstin?: string;
    buy_now?: boolean;
    restrict_checkout?: boolean;
};
type AddProductCart = {
    quantity?: number;
    article_id?: string;
    extra_meta?: any;
    pos?: boolean;
    seller_id?: number;
    item_size?: string;
    store_id?: number;
    article_assignment?: any;
    display?: string;
    product_group_tags?: string[];
    item_id?: number;
    _custom_json?: any;
    parent_item_identifiers?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    message?: string;
    partial?: boolean;
    cart?: CartDetailResponse;
    success?: boolean;
};
type UpdateProductCart = {
    quantity?: number;
    article_id?: string;
    extra_meta?: any;
    item_size?: string;
    item_index?: number;
    identifiers: CartProductIdentifer;
    item_id?: number;
    _custom_json?: any;
    parent_item_identifiers?: any;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
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
    token?: string;
    share_url?: string;
};
type SharedCartDetails = {
    created_on?: string;
    source?: any;
    meta?: any;
    token?: string;
    user?: any;
};
type SharedCart = {
    delivery_charge_info?: string;
    comment?: string;
    message?: string;
    coupon_text?: string;
    delivery_promise?: ShipmentPromise;
    uid?: string;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    checkout_mode?: string;
    last_modified?: string;
    cart_id?: number;
    is_valid?: boolean;
    buy_now?: boolean;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    id?: string;
    shared_cart_details?: SharedCartDetails;
    gstin?: string;
    currency?: CartCurrency;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    created_on?: string;
    item_counts?: string;
    user_id?: string;
    cart_id?: string;
    cart_value?: string;
};
type UserCartMappingResponse = {
    delivery_charge_info?: string;
    currency?: CartCurrency;
    payment_selection_lock?: PaymentSelectionLock;
    comment?: string;
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    message?: string;
    last_modified?: string;
    items?: CartProductInfo[];
    is_valid?: boolean;
    coupon_text?: string;
    id?: string;
    user?: UserInfo;
    delivery_promise?: ShipmentPromise;
    gstin?: string;
    buy_now?: boolean;
    restrict_checkout?: boolean;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type Coupon = {
    sub_title?: string;
    max_discount_value?: number;
    expires_on?: string;
    coupon_value?: number;
    description?: string;
    message?: string;
    coupon_code?: string;
    is_applied?: boolean;
    title?: string;
    is_applicable?: boolean;
    minimum_cart_value?: number;
    coupon_type?: string;
};
type PageCoupon = {
    has_next?: boolean;
    total_item_count?: number;
    has_previous?: boolean;
    total?: number;
    current?: number;
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
type Address = {
    area?: string;
    name?: string;
    email?: string;
    created_by_user_id?: string;
    is_default_address?: boolean;
    country?: string;
    is_active?: boolean;
    tags?: string[];
    checkout_mode?: string;
    country_code?: string;
    landmark?: string;
    country_phone_code?: string;
    address_type?: string;
    phone?: string;
    country_iso_code?: string;
    area_code_slug?: string;
    google_map_point?: any;
    area_code?: string;
    city?: string;
    geo_location?: GeoLocation;
    address?: string;
    user_id?: string;
    meta?: any;
    state?: string;
    id?: string;
};
type GetAddressesResponse = {
    address?: Address[];
};
type GeoLocation1 = {
    longitude?: number;
    latitude?: number;
};
type PlatformAddress = {
    area?: string;
    name?: string;
    email?: string;
    created_by_user_id?: string;
    is_default_address?: boolean;
    country?: string;
    is_active?: boolean;
    tags?: string[];
    checkout_mode?: string;
    country_code?: string;
    landmark?: string;
    address_type?: string;
    phone?: string;
    area_code_slug?: string;
    google_map_point?: any;
    cart_id?: string;
    area_code?: string;
    city?: string;
    geo_location?: GeoLocation1;
    address?: string;
    user_id?: string;
    meta?: any;
    state?: string;
    id?: string;
};
type SaveAddressResponse = {
    is_default_address?: boolean;
    success?: boolean;
    id?: string;
};
type UpdateAddressResponse = {
    is_default_address?: boolean;
    is_updated?: boolean;
    success?: boolean;
    id?: string;
};
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
type PlatformSelectCartAddressRequest = {
    billing_address_id?: string;
    cart_id?: string;
    checkout_mode?: string;
    id?: string;
};
type ShipmentResponse = {
    dp_id?: string;
    fulfillment_id?: number;
    shipments?: number;
    fulfillment_type?: string;
    dp_options?: any;
    items?: CartProductInfo[];
    order_type?: string;
    shipment_type?: string;
    box_type?: string;
    promise?: ShipmentPromise;
};
type CartShipmentsResponse = {
    delivery_charge_info?: string;
    comment?: string;
    shipments?: ShipmentResponse[];
    message?: string;
    last_modified?: string;
    cart_id?: number;
    is_valid?: boolean;
    coupon_text?: string;
    delivery_promise?: ShipmentPromise;
    error?: boolean;
    uid?: string;
    buy_now?: boolean;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    id?: string;
    gstin?: string;
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
type CartMetaRequest = {
    pick_up_customer_details?: any;
    comment?: string;
    gstin?: string;
    checkout_mode?: string;
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
    first_name: string;
    last_name: string;
};
type PlatformCartCheckoutDetailRequest = {
    payment_mode: string;
    billing_address?: any;
    aggregator?: string;
    delivery_address?: any;
    ordering_store?: number;
    callback_url?: string;
    payment_auto_confirm?: boolean;
    extra_meta?: any;
    staff?: StaffCheckout;
    user_id: string;
    billing_address_id?: string;
    payment_identifier?: string;
    payment_params?: any;
    merchant_code?: string;
    address_id?: string;
    meta?: any;
    id: string;
};
type CheckCart = {
    delivery_charge_info?: string;
    order_id?: string;
    comment?: string;
    message?: string;
    coupon_text?: string;
    success?: boolean;
    delivery_promise?: ShipmentPromise;
    uid?: string;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    error_message?: string;
    checkout_mode?: string;
    user_type?: string;
    store_emps?: any[];
    last_modified?: string;
    cart_id?: number;
    store_code?: string;
    is_valid?: boolean;
    delivery_charge_order_value?: number;
    buy_now?: boolean;
    cod_available?: boolean;
    breakup_values?: CartBreakup;
    cod_charges?: number;
    cod_message?: string;
    items?: CartProductInfo[];
    id?: string;
    delivery_charges?: number;
    gstin?: string;
    currency?: CartCurrency;
};
type CartCheckoutResponse = {
    order_id?: string;
    callback_url?: string;
    payment_confirm_url?: string;
    message?: string;
    cart?: CheckCart;
    success?: boolean;
    app_intercept_url?: string;
    data?: any;
};
type CartDeliveryModesResponse = {
    available_modes?: string[];
    pickup_stores?: number[];
};
type PickupStoreDetail = {
    area?: string;
    address?: string;
    name?: string;
    email?: string;
    area_code_slug?: string;
    country?: string;
    pincode?: number;
    area_code?: string;
    store_code?: string;
    landmark?: string;
    state?: string;
    id?: number;
    city?: string;
    address_type?: string;
    uid?: number;
    phone?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    payment_mode?: string;
    payment_identifier?: string;
    merchant_code?: string;
    address_id?: string;
    id?: string;
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
