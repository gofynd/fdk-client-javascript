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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, ShipmentItemFulFillingStore, PaymentModeInfo, ShipmentStatus, GSTDetailsData, PlatformItem, Prices, BagUnit, UserDataInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, OrderDetailsData, ShipmentStatusData, OrderBrandName, BagConfigs, OrderBagArticle, PlatformDeliveryAddress, BagGST, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, Identifier, FinancialBreakup, OrderBags, TrackingList, FulfillingStore, UserDetailsData, ShipmentPayments, BagStateMapper, BagStatusHistory, DPDetailsData, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, DateRange, ManifestFilter, GeneratedManifestItem, ManifestPage, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, BagReturnableCancelableStatus, ArticleDetails, Brand, Attributes, Item, Dates, Dimensions, ReturnConfig, Weight, Article, PDFLinks, AffiliateMeta, Formatted, EInvoice, EinvoiceInfo, LockData, DebugInfo, BuyerDetails, ShipmentTimeStamp, ShipmentMeta, AffiliateDetails, AffiliateBagDetails, B2BPODetails, BagMeta, BagGSTDetails, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, OrderPriority, MarketPlacePdf, AffiliateBag, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, UserData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, BillingInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, TaxInfo, PaymentMethod, PaymentInfo, ShippingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, ApplicationItemSEO, ApplicationItemMOQ, MetaFields, ApplicationItemMeta, SuccessResponse1, SEOData, MOQData, OwnerAppItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, BannerImage, ImageUrls, CollectionQuery, Media1, GetCollectionDetailNest, GetCollectionListingResponse, UserInfo, CollectionImage, CollectionBanner, CollectionBadge, SeoDetail, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, Image, NetQuantity, Logo, ProductPublished, Product, ProductListingResponse, TaxIdentifier, Trader, NetQuantity1, CustomOrder, ProductPublish, TeaserTag, ReturnConfig1, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, ProductCreateUpdate, SingleProductResponse, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, Trader1, CompanyMeta, DimensionResponse, ManufacturerResponse, WeightResponse, BrandMeta, ReturnConfig2, PriceMeta, QuantityBase, Quantities, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, Trader2, CompanyMeta1, DimensionResponse1, ManufacturerResponse1, WeightResponse1, BrandMeta1, ReturnConfig3, PriceArticle, ArticleStoreResponse, Quantity, QuantitiesArticle, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ProductReturnConfigSerializer, UserSerializer1, SellerPhoneNumber, UserSerializer2, GetAddressSerializer, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, Website, BusinessDetails, BusinessCountryInfo, ContactDetails, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, PriceRange, UsesRemaining, UsesRestriction, PostOrder, BulkBundleRestriction, PaymentAllowValue, PaymentModes, Restrictions, DisplayMetaDict, DisplayMeta, Ownership, CouponAuthor, RuleDefinition, CouponDateMeta, State, Rule, CouponAction, Validation, CouponSchedule, Validity, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, DisplayMeta1, Visibility, CompareObject, ItemCriteria, PromotionDateMeta, DiscountOffer, DiscountRule, PromotionAction, UserRegistered, UsesRemaining1, UsesRestriction1, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, Ownership1, PromotionSchedule, PromotionAuthor, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, RawBreakup, DisplayBreakup, LoyaltyPoints, CouponBreakup, CartBreakup, CartProductIdentifer, PromoMeta, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, ProductAvailability, ProductPrice, ProductPriceInfo, ActionQuery, ProductAction, CategoryInfo, ProductImage, CartProduct, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    app_id: string;
    display_fields: string[];
    success: boolean;
    excluded_fields: string[];
    created: boolean;
};
type ErrorCodeDescription = {
    description: string;
    code: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    key: string;
    is_active?: boolean;
    merchant_salt: string;
    config_type: string;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
    is_active?: boolean;
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
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type IntentApp = {
    display_name?: string;
    package_name?: string;
    logos?: PaymentModeLogo;
    code?: string;
};
type PaymentModeList = {
    card_fingerprint?: string;
    aggregator_name: string;
    card_token?: string;
    logo_url?: PaymentModeLogo;
    intent_app_error_list?: string[];
    remaining_limit?: number;
    intent_flow?: boolean;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_number?: string;
    card_reference?: string;
    card_brand_image?: string;
    card_brand?: string;
    fynd_vpa?: string;
    card_isin?: string;
    cod_limit_per_order?: number;
    name?: string;
    nickname?: string;
    exp_year?: number;
    compliant_with_tokenisation_guidelines?: boolean;
    card_id?: string;
    display_name?: string;
    cod_limit?: number;
    card_type?: string;
    retry_count?: number;
    expired?: boolean;
    exp_month?: number;
    code?: string;
    timeout?: number;
    intent_app?: IntentApp[];
    card_issuer?: string;
    merchant_code?: string;
    card_name?: string;
    display_priority?: number;
};
type RootPaymentMode = {
    display_name: string;
    is_pay_by_card_pl?: boolean;
    add_card_enabled?: boolean;
    name: string;
    aggregator_name?: string;
    save_card?: boolean;
    list?: PaymentModeList[];
    anonymous_enable?: boolean;
    display_priority: number;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type Payout = {
    transfer_type: string;
    is_default: boolean;
    payouts_aggregators: any[];
    is_active: boolean;
    unique_transfer_no: any;
    more_attributes: any;
    customers: any;
};
type PayoutsResponse = {
    items: Payout[];
    success: boolean;
};
type PayoutBankDetails = {
    account_no?: string;
    account_type: string;
    city?: string;
    bank_name?: string;
    state?: string;
    account_holder?: string;
    country?: string;
    pincode?: number;
    branch_name?: string;
    ifsc_code: string;
};
type PayoutRequest = {
    transfer_type: string;
    aggregator: string;
    bank_details: PayoutBankDetails;
    is_active: boolean;
    users: any;
    unique_external_id: string;
};
type PayoutResponse = {
    transfer_type: string;
    aggregator: string;
    bank_details: any;
    is_active: boolean;
    success: boolean;
    unique_transfer_no: string;
    users: any;
    payment_status: string;
    payouts: any;
    created: boolean;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    is_active: boolean;
    success: boolean;
};
type UpdatePayoutRequest = {
    unique_external_id: string;
    is_default: boolean;
    is_active: boolean;
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
    message: string;
    is_verified_flag?: boolean;
    data?: any;
    success: boolean;
};
type NotFoundResourceError = {
    description: string;
    code: string;
    success: boolean;
};
type BankDetailsForOTP = {
    account_no: string;
    bank_name: string;
    account_holder: string;
    branch_name: string;
    ifsc_code: string;
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
    modified_on: string;
    email: string;
    comment?: string;
    transfer_mode: string;
    delights_user_name?: string;
    bank_name: string;
    account_holder: string;
    mobile?: string;
    is_active: boolean;
    beneficiary_id: string;
    address: string;
    account_no: string;
    id: number;
    title: string;
    subtitle: string;
    ifsc_code: string;
    display_name: string;
    created_on: string;
    branch_name?: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    current_status?: string;
    payment_id?: string;
    payment_gateway?: string;
    order_id?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    name?: string;
    mode: string;
    amount: number;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    message: string;
    order_id: string;
    success: boolean;
};
type PlatformPaymentOptions = {
    callback_url?: any;
    enabled: boolean;
    cod_amount_limit?: number;
    anonymous_cod?: boolean;
    source: string;
    methods: any;
    payment_selection_lock?: any;
    mode_of_payment: string;
    cod_charges?: number;
};
type PlatfromPaymentConfig = {
    message: string;
    data: PlatformPaymentOptions;
    success: boolean;
};
type UpdatePlatformPaymentConfig = {
    cod_amount_limit?: number;
    anonymous_cod?: boolean;
    methods: any;
    payment_selection_lock?: any;
    cod_charges?: number;
};
type CODdata = {
    usages: number;
    user_id: string;
    is_active: boolean;
    limit: number;
    remaining_limit: number;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
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
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentStatus = {
    status: string;
    hex_code: string;
    actual_status: string;
    title: string;
    ops_status: string;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    gst_fee: number;
    value_of_good: number;
    brand_calculated_amount: number;
    gstin_code: string;
};
type PlatformItem = {
    code?: string;
    images?: string[];
    name?: string;
    size?: string;
    can_return?: boolean;
    l3_category?: number;
    color?: string;
    image?: string[];
    department_id?: number;
    can_cancel?: boolean;
    id?: number;
    l3_category_name?: string;
    l1_category?: string[];
};
type Prices = {
    price_marked?: number;
    price_effective?: number;
    fynd_credits?: number;
    amount_paid?: number;
    discount?: number;
    amount_paid_roundoff?: number;
    coupon_value?: number;
    promotion_effective_discount?: number;
    refund_credit?: number;
    tax_collected_at_source?: number;
    cashback?: number;
    value_of_good?: number;
    delivery_charge?: number;
    cod_charges?: number;
    cashback_applied?: number;
    refund_amount?: number;
};
type BagUnit = {
    status: any;
    bag_id: number;
    gst?: GSTDetailsData;
    item?: PlatformItem;
    can_return?: boolean;
    ordering_channel: string;
    item_quantity: number;
    can_cancel?: boolean;
    prices?: Prices;
    total_shipment_bags: number;
    shipment_id: string;
};
type UserDataInfo = {
    mobile?: string;
    first_name?: string;
    email?: string;
    is_anonymous_user?: boolean;
    name?: string;
    last_name?: string;
    uid?: number;
    avis_user_id?: string;
    gender?: string;
};
type ShipmentItem = {
    created_at: string;
    shipment_created_at: number;
    sla?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    fulfilling_centre: string;
    payment_mode_info?: PaymentModeInfo;
    total_bags_count: number;
    channel?: any;
    shipment_status?: ShipmentStatus;
    total_shipments_in_order: number;
    bags?: BagUnit[];
    prices?: Prices;
    id: string;
    payment_methods?: any;
    application?: any;
    user?: UserDataInfo;
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
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    applied_filters?: any;
    filters?: FiltersInfo[];
    page?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type OrderDetailsData = {
    source?: string;
    order_value?: string;
    cod_charges?: string;
    ordering_channel_logo?: any;
    ordering_channel?: string;
    affiliate_id?: string;
    fynd_order_id: string;
    order_date?: string;
    tax_details?: any;
};
type ShipmentStatusData = {
    created_at?: string;
    status?: string;
    bag_list?: number[];
    id?: number;
    shipment_id?: string;
};
type OrderBrandName = {
    modified_on?: number;
    created_on: number;
    logo: string;
    brand_name: string;
    company: string;
    id: number;
};
type BagConfigs = {
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type PlatformDeliveryAddress = {
    latitude?: number;
    longitude?: number;
    created_at?: string;
    landmark?: string;
    version?: string;
    updated_at?: string;
    city?: string;
    address2?: string;
    email?: string;
    state?: string;
    address_category?: string;
    address_type?: string;
    contact_person?: string;
    area?: string;
    pincode?: string;
    phone?: string;
    address1?: string;
    country?: string;
};
type BagGST = {
    gst_tag?: string;
    is_default_hsn_code?: boolean;
    gst_fee?: number;
    hsn_code?: string;
    value_of_good?: number;
    gst_tax_percentage?: number;
    brand_calculated_amount?: number;
    gstin_code?: string;
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
    discount_rules?: DiscountRules[];
    article_quantity?: number;
    promotion_name?: string;
    promo_id?: string;
    mrp_promotion?: boolean;
    amount?: number;
    promotion_type?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    size: string;
    gst_fee: string;
    cashback: number;
    delivery_charge: number;
    gst_tax_percentage: number;
    cashback_applied: number;
    total_units: number;
    gst_tag: string;
    added_to_fynd_cash: boolean;
    coupon_effective_discount: number;
    item_name: string;
    price_effective: number;
    amount_paid: number;
    discount: number;
    amount_paid_roundoff?: number;
    coupon_value: number;
    identifiers: Identifier;
    refund_credit: number;
    hsn_code: string;
    value_of_good: number;
    cod_charges: number;
    price_marked: number;
    fynd_credits: number;
    pm_price_split: any;
    promotion_effective_discount: number;
    tax_collected_at_source?: number;
    transfer_price: number;
    brand_calculated_amount: number;
};
type OrderBags = {
    quantity?: number;
    bag_id: number;
    brand?: OrderBrandName;
    item?: PlatformItem;
    can_return?: boolean;
    seller_identifier?: string;
    parent_promo_bags?: any;
    current_status?: string;
    can_cancel?: boolean;
    bag_configs?: BagConfigs;
    entity_type?: string;
    article?: OrderBagArticle;
    identifier?: string;
    delivery_address?: PlatformDeliveryAddress;
    gst_details?: BagGST;
    line_number?: number;
    applied_promos?: AppliedPromos[];
    display_name?: string;
    prices?: Prices;
    financial_breakup?: FinancialBreakup[];
};
type TrackingList = {
    is_current?: boolean;
    status: string;
    text: string;
    is_passed?: boolean;
    time?: string;
};
type FulfillingStore = {
    code: string;
    city: string;
    meta: any;
    fulfillment_channel: string;
    state: string;
    store_name: string;
    contact_person: string;
    pincode: string;
    phone: string;
    id: string;
    address: string;
    country: string;
};
type UserDetailsData = {
    city: string;
    email: string;
    name: string;
    state: string;
    pincode: string;
    phone: string;
    address: string;
    country: string;
};
type ShipmentPayments = {
    source?: string;
    logo?: string;
    mode: string;
};
type BagStateMapper = {
    bs_id: number;
    is_active?: boolean;
    journey_type: string;
    state_type: string;
    app_display_name?: string;
    name: string;
    notify_customer?: boolean;
    app_state_name?: string;
    app_facing?: boolean;
    display_name: string;
};
type BagStatusHistory = {
    created_at: string;
    reasons?: any[];
    state_id: number;
    store_id: number;
    updated_at?: string;
    status: string;
    bag_id: number;
    kafka_sync?: boolean;
    state_type?: string;
    forward?: boolean;
    bsh_id: number;
    delivery_awb_number?: string;
    app_display_name?: boolean;
    display_name?: boolean;
    bag_state_mapper: BagStateMapper;
    shipment_id: string;
    delivery_partner_id?: number;
};
type DPDetailsData = {
    gst_tag?: string;
    awb_no?: string;
    name?: string;
    track_url?: string;
    pincode?: string;
    id?: string;
    country?: string;
    eway_bill_id?: string;
};
type ShipmentInfoResponse = {
    is_invoiced: boolean;
    order?: OrderDetailsData;
    replacement_details?: string;
    status?: ShipmentStatusData;
    status_progress: number;
    refund_details?: any;
    shipment_images?: string[];
    priority_text?: string;
    credit_note_id: string;
    forward_order_status?: any[];
    delivery_status: any[];
    user_agent?: string;
    custom_meta?: any[];
    can_return?: boolean;
    bank_data?: any;
    tracking_url: string;
    bags?: OrderBags[];
    company: any;
    invoice: any;
    affiliate_shipment_id: string;
    lock_status: string;
    tracking_list?: TrackingList[];
    current_shipment_status: any;
    shipment_id: string;
    picked_date?: string;
    order_status: any;
    enable_tracking?: boolean;
    email_id: string;
    is_pdsr?: string;
    fulfilling_store?: FulfillingStore;
    delivery_details?: UserDetailsData;
    order_type: string;
    platform_logo: boolean;
    payments?: ShipmentPayments;
    total_bags?: number;
    packaging_type?: string;
    shipment_status?: string;
    can_cancel?: boolean;
    bag_status_history?: BagStatusHistory[];
    vertical?: string;
    beneficiary_details?: boolean;
    refund_text?: string;
    due_date?: string;
    fyndstore_emp: any;
    kirana_store_id?: string;
    journey_type?: string;
    go_green?: boolean;
    forward_shipment_status?: any[];
    billing_details?: UserDetailsData;
    order_created_time?: string;
    enable_dp_tracking?: string;
    is_packaging_order: boolean;
    total_items?: number;
    payment_mode?: string;
    is_not_fynd_source: boolean;
    shipment_quantity?: number;
    delivery_slot?: any;
    items: any[];
    operational_status?: string;
    can_break: string;
    mid?: string;
    coupon?: any;
    escalation?: any;
    forward_tracking_list?: any[];
    pay_button?: string;
    gst_details?: GSTDetailsData;
    ordering_store: any;
    is_fynd_coupon: boolean;
    user_id: string;
    secured_delivery_flag?: string;
    is_fynd_store?: string;
    prices?: Prices;
    user_info?: any;
    dp_details?: DPDetailsData;
    child_nodes?: string[];
};
type PlatformShipment = {
    order?: OrderDetailsData;
    status?: ShipmentStatusData;
    shipment_images?: string[];
    priority_text?: string;
    user_agent?: string;
    custom_meta?: any[];
    bags?: OrderBags[];
    tracking_list?: TrackingList[];
    shipment_id: string;
    picked_date?: string;
    fulfilling_store?: FulfillingStore;
    delivery_details?: UserDetailsData;
    platform_logo?: string;
    payments?: ShipmentPayments;
    total_bags?: number;
    packaging_type?: string;
    shipment_status?: string;
    bag_status_history?: BagStatusHistory[];
    vertical?: string;
    journey_type?: string;
    billing_details?: UserDetailsData;
    enable_dp_tracking?: string;
    total_items?: number;
    payment_mode?: string;
    shipment_quantity?: number;
    delivery_slot?: any;
    operational_status?: string;
    coupon?: any;
    gst_details?: GSTDetailsData;
    prices?: Prices;
    dp_details?: DPDetailsData;
};
type OrderDict = {
    fynd_order_id: string;
    order_date: string;
    shipment_count: number;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    order?: OrderDict;
    custom_meta?: any[];
    success: boolean;
};
type SubLane = {
    text?: string;
    total_items?: number;
    value?: string;
    actions?: any[];
    index?: number;
};
type SuperLane = {
    text: string;
    value: string;
    total_items?: number;
    options?: SubLane[];
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
    order_value?: number;
    order_id?: string;
    shipments?: PlatformShipment[];
    total_order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    order_created_time?: string;
    payment_mode?: string;
    channel?: PlatformChannel;
    user_info?: UserDataInfo;
    meta?: any;
};
type OrderListingResponse = {
    page?: Page;
    lane?: string;
    message?: string;
    total_count?: number;
    success?: boolean;
    items?: PlatformOrderItems[];
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    text: string;
    options?: Options[];
    value: number;
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    account_name?: string;
    status?: string;
    reason?: string;
    updated_at?: string;
    shipment_type?: string;
    last_location_recieved_at?: string;
    raw_status?: string;
    awb?: string;
    meta?: any;
    updated_time?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    returned?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    filters?: FiltersInfo[];
    processed?: FiltersInfo[];
};
type FiltersResponse = {
    global_filter?: FiltersInfo[];
    advance_filter?: AdvanceFilterInfo;
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    report_created_at?: string;
    status?: string;
    report_requested_at?: string;
    report_name?: string;
    report_type?: string;
    request_details?: any;
    display_name?: string;
    s3_key?: string;
    report_id?: string;
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
    type?: string;
    message?: string;
    value?: string;
};
type JioCodeUpsertResponse = {
    identifier?: string;
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
    data?: any[];
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    batch_id: string;
    store_code?: string;
    store_id?: string;
    invoice_status?: string;
    company_id?: string;
    store_name?: string;
    label?: any;
    data?: any;
    invoice?: any;
    do_invoice_label_generated: boolean;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type FileResponse = {
    operation?: string;
    file_path?: string;
    namespace?: string;
    content_type?: string;
    size?: number;
    tags?: string[];
    cdn?: URL;
    upload?: FileUploadResponse;
    method?: string;
    file_name?: string;
};
type BulkListingPage = {
    size?: number;
    has_previous?: boolean;
    total?: number;
    current?: number;
    type?: string;
    has_next?: boolean;
};
type bulkListingData = {
    batch_id?: string;
    status?: string;
    excel_url?: string;
    failed?: number;
    successful_shipments?: any[];
    store_code?: string;
    store_id?: number;
    store_name?: string;
    user_name?: string;
    total?: number;
    uploaded_on?: string;
    id?: string;
    successful?: number;
    processing?: number;
    company_id?: number;
    user_id?: string;
    failed_shipments?: any[];
    processing_shipments?: string[];
    file_name?: string;
};
type BulkListingResponse = {
    page?: BulkListingPage;
    error?: string;
    data?: bulkListingData[];
    success?: boolean;
};
type DateRange = {
    to_date?: string;
    from_date?: string;
};
type ManifestFilter = {
    lane?: string;
    sales_channel_name?: string;
    store_name?: string;
    date_range?: DateRange;
    dp_name?: string;
    stores?: string;
    dp_ids?: string;
    sales_channels?: string;
};
type GeneratedManifestItem = {
    created_at?: string;
    is_active?: boolean;
    status?: string;
    company_id?: number;
    manifest_id?: string;
    filters?: ManifestFilter;
    created_by?: string;
};
type ManifestPage = {
    size?: string;
    has_previous?: boolean;
    total?: number;
    current?: string;
    type?: string;
    has_next?: boolean;
};
type GeneratedManifestResponse = {
    items?: GeneratedManifestItem[];
    page?: ManifestPage;
};
type ManifestDetailItem = {
    order_id?: string;
    invoice_id?: string;
    item_qty?: number;
    awb?: string;
    shipment_id?: string;
};
type ManifestDetailTotalShipmentPricesCount = {
    total_price?: number;
    shipment_count?: number;
};
type ManifestDetailMeta = {
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
    filters?: ManifestFilter;
};
type ManifestDetail = {
    created_at?: string;
    is_active?: boolean;
    status?: string;
    company_id?: number;
    manifest_id?: string;
    user_id?: number;
    uid?: number;
    id?: number;
    filters?: ManifestFilter;
    created_by?: string;
    meta?: ManifestDetailMeta;
};
type ManifestDetailResponse = {
    items?: ManifestDetailItem[];
    additional_shipment_count?: number;
    page?: ManifestPage;
    manifest_details?: ManifestDetail[];
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
    batch_id?: string;
    processing_shipments_count?: number;
    failed_shipments_count?: number;
    total_shipments_count?: number;
    company_id?: string;
    successful_shipment_ids?: string[];
    successful_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    message?: string;
    uploaded_by?: string;
    status?: boolean;
    success?: string;
    error?: string[];
    user_id?: string;
    failed_records?: string[];
    data?: BulkActionDetailsDataField[];
    uploaded_on?: string;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
};
type ArticleDetails = {
    status?: any;
};
type Brand = {
    credit_note_allowed?: boolean;
    modified_on?: number;
    is_virtual_invoice?: boolean;
    brand_id: number;
    created_on?: number;
    pickup_location?: string;
    credit_note_expiry_days?: number;
    logo?: string;
    brand_name: string;
    invoice_prefix?: string;
    script_last_ran?: string;
    company: string;
    start_date?: string;
};
type Attributes = {
    marketer_name?: string;
    name?: string;
    brand_name?: string;
    marketer_address?: string;
    primary_material?: string;
    essential?: string;
    primary_color_hex?: string;
    primary_color?: string;
    gender?: string[];
};
type Item = {
    l2_category?: string[];
    brand: string;
    size: string;
    can_return?: boolean;
    l1_category_id?: number;
    image: string[];
    color?: string;
    can_cancel?: boolean;
    l3_category_name?: string;
    l2_category_id?: number;
    brand_id: number;
    l3_category?: number;
    attributes: Attributes;
    department_id?: number;
    branch_url?: string;
    last_updated_at?: string;
    webstore_product_url?: string;
    l1_category?: string[];
    meta?: any;
    code?: string;
    name: string;
    slug_key: string;
    item_id: number;
    gender?: string;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type Dimensions = {
    is_default?: boolean;
    length?: number;
    unit?: string;
    width?: number;
    height?: number;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
type Article = {
    code?: string;
    dimensions?: Dimensions;
    uid: string;
    identifiers: Identifier;
    size: string;
    esp_modified?: any;
    return_config?: ReturnConfig;
    raw_meta?: any;
    child_details?: any;
    weight?: Weight;
    seller_identifier: string;
    _id: string;
    a_set?: any;
    is_set?: boolean;
};
type PDFLinks = {
    b2b?: string;
    invoice_a6?: string;
    label_pos?: string;
    po_invoice?: string;
    label_type: string;
    invoice_pos?: string;
    credit_note_url?: string;
    label?: string;
    label_a6?: string;
    invoice?: string;
    label_a4?: string;
    invoice_type: string;
    invoice_a4?: string;
};
type AffiliateMeta = {
    is_priority?: boolean;
    quantity?: number;
    coupon_code?: string;
    employee_discount?: number;
    channel_order_id?: string;
    channel_shipment_id?: string;
    order_item_id?: string;
    box_type?: string;
    loyalty_discount?: number;
    size_level_total_qty?: number;
    due_date?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type EInvoice = {
    acknowledge_no?: number;
    acknowledge_date?: string;
    error_message?: string;
    error_code?: string;
    signed_qr_code?: string;
    irn?: string;
    signed_invoice?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type LockData = {
    mto?: boolean;
    lock_message?: string;
    locked?: boolean;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type BuyerDetails = {
    gstin: string;
    city: string;
    state: string;
    name: string;
    ajio_site_id?: string;
    pincode: number;
    address: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type ShipmentMeta = {
    formatted?: Formatted;
    same_store_available: boolean;
    shipment_weight?: number;
    packaging_name?: string;
    einvoice_info?: EinvoiceInfo;
    bag_weight?: any;
    lock_data?: LockData;
    marketplace_store_id?: string;
    order_type?: string;
    dp_name?: string;
    forward_affiliate_shipment_id?: string;
    dp_sort_key?: string;
    due_date?: string;
    debug_info?: DebugInfo;
    b2b_buyer_details?: BuyerDetails;
    forward_affiliate_order_id?: string;
    return_affiliate_shipment_id?: string;
    auto_trigger_dp_assignment_acf: boolean;
    return_affiliate_order_id?: string;
    return_store_node?: number;
    dp_id?: string;
    po_number?: string;
    b2c_buyer_details?: any;
    fulfilment_priority_text?: string;
    store_invoice_updated_date?: string;
    awb_number?: string;
    ewaybill_info?: any;
    return_details?: any;
    external?: any;
    assign_dp_from_sb?: boolean;
    return_awb_number?: string;
    timestamp?: ShipmentTimeStamp;
    weight: number;
    shipment_volumetric_weight?: number;
    box_type?: string;
    dp_options?: any;
};
type AffiliateDetails = {
    pdf_links?: PDFLinks;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    company_affiliate_tag?: string;
    affiliate_id?: string;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    ad_id?: string;
    shipment_meta: ShipmentMeta;
};
type AffiliateBagDetails = {
    affiliate_meta: AffiliateMeta;
    employee_discount?: number;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    loyalty_discount?: number;
};
type B2BPODetails = {
    item_base_price?: number;
    partial_can_ret?: boolean;
    docker_number?: string;
    po_line_amount?: number;
    po_tax_amount?: number;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type BagGSTDetails = {
    hsn_code_id: string;
    gst_tag: string;
    is_default_hsn_code?: boolean;
    tax_collected_at_source: number;
    gst_fee: number;
    hsn_code: string;
    value_of_good: number;
    cgst_gst_fee: string;
    gst_tax_percentage: number;
    brand_calculated_amount: number;
    igst_tax_percentage: number;
    igst_gst_fee: string;
    cgst_tax_percentage: number;
    sgst_gst_fee: string;
    gstin_code?: string;
    sgst_tax_percentage: number;
};
type Document = {
    url?: string;
    legal_name: string;
    value: string;
    verified: boolean;
    ds_type: string;
};
type StoreDocuments = {
    gst?: Document;
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
type StoreMeta = {
    documents?: StoreDocuments;
    gst_credentials: StoreGstCredentials;
    gst_number?: string;
    ewaybill_portal_details?: any;
    additional_contact_details?: any;
    display_name: string;
    notification_emails?: string[];
    einvoice_portal_details?: EInvoicePortalDetails;
    timing?: any[];
    product_return_config?: any;
    stage: string;
};
type StoreAddress = {
    latitude: number;
    landmark?: string;
    city: string;
    address1: string;
    updated_at: string;
    email?: string;
    state: string;
    address_type: string;
    area?: string;
    address_category: string;
    longitude: number;
    version?: string;
    pincode: number;
    country: string;
    created_at: string;
    address2?: string;
    contact_person: string;
    country_code: string;
    phone: string;
};
type Store = {
    latitude: number;
    city: string;
    store_active_from?: string;
    is_archived?: boolean;
    is_enabled_for_recon?: boolean;
    address1: string;
    updated_at?: string;
    state: string;
    store_email: string;
    mall_name?: string;
    longitude: number;
    brand_id?: any;
    is_active?: boolean;
    order_integration_id?: string;
    fulfillment_channel: string;
    login_username: string;
    packaging_material_count?: number;
    mall_area?: string;
    location_type: string;
    parent_store_id?: number;
    pincode: string;
    brand_store_tags?: string[];
    country: string;
    meta: StoreMeta;
    created_at: string;
    code?: string;
    store_address_json?: StoreAddress;
    vat_no?: string;
    address2?: string;
    alohomora_user_id?: number;
    s_id: string;
    company_id: number;
    name: string;
    contact_person: string;
    phone: number;
};
type BagDetailsPlatformResponse = {
    qc_required?: any;
    quantity?: number;
    status: BagReturnableCancelableStatus;
    article_details?: ArticleDetails;
    brand: Brand;
    item: Item;
    tags?: string[];
    seller_identifier?: string;
    parent_promo_bags?: any;
    shipment_id?: string;
    reasons?: any[];
    restore_coupon?: boolean;
    current_status: BagStatusHistory;
    dates?: Dates;
    current_operational_status: BagStatusHistory;
    bag_status_history?: BagStatusHistory;
    bag_status: BagStatusHistory[];
    entity_type?: string;
    journey_type: string;
    order_integration_id?: string;
    b_type?: string;
    bag_update_time?: number;
    original_bag_list?: number[];
    article: Article;
    affiliate_details?: AffiliateDetails;
    operational_status?: string;
    affiliate_bag_details: AffiliateBagDetails;
    meta?: BagMeta;
    identifier?: string;
    gst_details: BagGSTDetails;
    no_of_bags_order?: number;
    ordering_store?: Store;
    restore_promos?: any;
    b_id: number;
    line_number?: number;
    applied_promos?: any[];
    display_name?: string;
    prices: Prices;
    financial_breakup: FinancialBreakup[];
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    page_type: string;
    size: number;
    current: number;
    has_next: boolean;
    item_total: number;
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
    error?: string;
    shipment_id?: string;
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
    affiliate_bag_id?: string;
    reason_ids?: number[];
    item_id?: string;
    bag_id?: number;
    store_id: number;
    affiliate_id?: string;
    mongo_article_id?: string;
    set_id?: string;
    affiliate_order_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_bag_id?: string;
    id?: string;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
    reason_text: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    entity_type: string;
    action_type: string;
    action: string;
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
    shipment_id?: string;
    status?: string;
    is_shipment_locked?: boolean;
    original_filter?: OriginalFilter;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    bags?: Bags[];
    lock_status?: boolean;
    is_bag_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    message?: string;
    check_response?: CheckResponse[];
    success?: boolean;
};
type AnnouncementResponse = {
    id: number;
    platform_id?: string;
    platform_name?: string;
    description?: string;
    logo_url?: string;
    created_at?: string;
    to_datetime?: string;
    from_datetime?: string;
    title?: string;
    company_id?: number;
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
    identifier: string;
    products?: Products[];
    reasons?: ReasonsData;
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    status?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
    unlock_before_transition?: boolean;
    force_transition?: boolean;
};
type ShipmentsResponse = {
    status?: number;
    meta?: any;
    code?: string;
    stack_trace?: string;
    message?: string;
    final_state?: any;
    identifier?: string;
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
    meta?: AffiliateAppConfigMeta[];
    id: string;
    description?: string;
    token: string;
    owner: string;
    secret: string;
    created_at: string;
    updated_at: string;
    name: string;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryConfig = {
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    config?: AffiliateConfig;
    id: string;
    token: string;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    bag_end_state?: string;
    store_lookup?: string;
    affiliate: Affiliate;
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
};
type OrderUser = {
    address1?: string;
    city: string;
    email: string;
    address2?: string;
    last_name: string;
    first_name: string;
    phone: number;
    mobile: number;
    state: string;
    country: string;
    pincode: string;
};
type OrderPriority = {
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    sku: string;
    amount_paid: number;
    affiliate_store_id: string;
    item_size: string;
    unit_price: number;
    modified_on: string;
    price_effective: number;
    transfer_price: number;
    avl_qty: number;
    identifier: any;
    item_id: number;
    store_id: number;
    price_marked: number;
    discount: number;
    affiliate_meta: any;
    company_id: number;
    fynd_store_id: string;
    _id: string;
    pdf_links?: MarketPlacePdf;
    quantity: number;
    hsn_code_id: string;
    seller_identifier: string;
    delivery_charge: number;
};
type ArticleDetails1 = {
    _id: string;
    quantity: number;
    weight: any;
    brand_id: number;
    dimension: any;
    category: any;
    attributes: any;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_id: number;
    fulfillment_type: string;
};
type ShipmentDetails = {
    fulfillment_id: number;
    meta?: any;
    shipments: number;
    articles: ArticleDetails1[];
    dp_id?: number;
    affiliate_shipment_id: string;
    box_type?: string;
};
type ShipmentConfig = {
    journey: string;
    location_details?: LocationDetails;
    payment_mode: string;
    action: string;
    source: string;
    shipment: ShipmentDetails[];
    identifier: string;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderInfo = {
    payment?: any;
    billing_address: OrderUser;
    items: any;
    payment_mode: string;
    cod_charges: number;
    order_value: number;
    coupon?: string;
    shipping_address: OrderUser;
    order_priority?: OrderPriority;
    bags: AffiliateBag[];
    shipment?: ShipmentData;
    discount: number;
    delivery_charges: number;
    affiliate_order_id?: string;
    user: UserData;
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
    display_text: string;
    slug: string;
    id: number;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    type: string;
    ticket_id?: string;
    l3_detail?: string;
    bag_id?: number;
    l2_detail?: string;
    createdat: string;
    message: string;
    l1_detail?: string;
    ticket_url?: string;
    user: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    shipment_id: number;
    amount_paid: number;
    payment_mode: string;
    message: string;
    order_id: string;
    customer_name: string;
    phone_number: number;
    country_code: string;
    brand_name: string;
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
    shipment_id?: string;
    status?: string;
    remarks?: string;
    meta: Meta;
    id: number;
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
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    dp_id: number;
    shipment_ids?: string[];
    qc_required: string;
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type BillingInfo = {
    house_no?: string;
    middle_name?: string;
    external_customer_code?: string;
    state: string;
    primary_email: string;
    address1: string;
    address2?: string;
    last_name?: string;
    country: string;
    alternate_email?: string;
    customer_code?: string;
    state_code?: string;
    first_name: string;
    primary_mobile_number: string;
    floor_no?: string;
    country_code?: string;
    pincode: string;
    city: string;
    alternate_mobile_number?: string;
    gender?: string;
    title?: string;
};
type Tax = {
    amount: any;
    rate: number;
    breakup?: any[];
    name: string;
};
type Charge = {
    type: string;
    code?: string;
    tax?: Tax;
    amount: any;
    name: string;
};
type LineItem = {
    meta?: any;
    charges?: Charge[];
    quantity?: number;
    external_line_id?: string;
    custom_messasge?: string;
    seller_identifier: string;
};
type ProcessingDates = {
    dispatch_by_date?: string;
    confirm_by_date?: string;
    dispatch_after_date?: string;
    pack_by_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
};
type Shipment = {
    meta?: any;
    priority?: number;
    external_shipment_id?: string;
    line_items: LineItem[];
    processing_dates?: ProcessingDates;
    location_id: number;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type PaymentMethod = {
    meta?: any;
    mode: string;
    refund_by: string;
    collect_by: string;
    transaction_data?: any;
    amount: number;
    name: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type ShippingInfo = {
    house_no?: string;
    middle_name?: string;
    external_customer_code?: string;
    state: string;
    geo_location?: any;
    primary_email: string;
    address1: string;
    address2?: string;
    last_name?: string;
    country: string;
    alternate_email?: string;
    landmark?: string;
    customer_code?: string;
    state_code?: string;
    first_name: string;
    primary_mobile_number: string;
    address_type?: string;
    floor_no?: string;
    shipping_type?: string;
    country_code?: string;
    pincode: string;
    slot?: any[];
    city: string;
    alternate_mobile_number?: string;
    gender?: string;
    title?: string;
};
type CreateOrderAPI = {
    meta?: any;
    billing_info: BillingInfo;
    shipments: Shipment[];
    tax_info?: TaxInfo;
    charges: Charge[];
    payment_info: PaymentInfo;
    external_creation_date?: string;
    currency_info?: any;
    shipping_info: ShippingInfo;
    external_order_id?: string;
};
type CreateOrderErrorReponse = {
    status: number;
    meta?: string;
    code?: string;
    request_id?: string;
    stack_trace?: string;
    message: string;
    info?: any;
    exception?: string;
};
type PaymentMethods = {
    collect_by?: string;
    mode?: string;
    refund_by?: string;
};
type CreateChannelPaymentInfo = {
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
    source?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    logo_url?: any;
    lock_states?: string[];
    payment_info?: CreateChannelPaymentInfo;
    shipment_assignment?: string;
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
    end_date: string;
    order_details?: FyndOrderIdList[];
    mobile: number;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    words?: string[];
    is_active?: boolean;
    app_id?: string;
    _custom_json?: any;
};
type GetSearchWordsData = {
    result?: any;
    words?: string[];
    is_active?: boolean;
    app_id?: string;
    uid?: string;
    _custom_json?: any;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type Media = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type AutocompletePageAction = {
    query?: any;
    url?: string;
    params?: any;
    type?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    logo?: Media;
    display?: string;
    _custom_json?: any;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    results?: AutocompleteResult[];
    words?: string[];
    is_active?: boolean;
    app_id?: string;
    _custom_json?: any;
};
type GetAutocompleteWordsData = {
    results?: any[];
    words?: string[];
    app_id?: string;
    uid?: string;
    _custom_json?: any;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    results?: any[];
    _custom_json?: any;
    app_id?: string;
};
type ProductBundleItem = {
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    auto_select?: boolean;
    max_quantity: number;
    min_quantity: number;
    product_uid: number;
};
type GetProductBundleCreateResponse = {
    name: string;
    choice: string;
    modified_by?: any;
    is_active: boolean;
    same_store_assignment?: boolean;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    meta?: any;
    products: ProductBundleItem[];
    page_visibility?: string[];
    slug: string;
    id?: string;
    company_id?: number;
    logo?: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    name: string;
    choice: string;
    modified_by?: any;
    is_active: boolean;
    same_store_assignment?: boolean;
    modified_on?: string;
    created_by?: any;
    created_on?: string;
    meta?: any;
    products: ProductBundleItem[];
    page_visibility?: string[];
    slug: string;
    company_id?: number;
    logo?: string;
};
type ProductBundleUpdateRequest = {
    name: string;
    choice: string;
    modified_by?: any;
    is_active: boolean;
    same_store_assignment?: boolean;
    modified_on?: string;
    meta?: any;
    products: ProductBundleItem[];
    page_visibility?: string[];
    slug: string;
    company_id?: number;
    logo?: string;
};
type LimitedProductData = {
    name?: string;
    country_of_origin?: string;
    short_description?: string;
    sizes?: string[];
    price?: any;
    images?: string[];
    attributes?: any;
    quantity?: number;
    uid?: number;
    slug?: string;
    identifier?: any;
    item_code?: string;
};
type Size = {
    quantity?: number;
    display?: string;
    value?: string;
    is_available?: boolean;
};
type Price = {
    min_marked?: number;
    min_effective?: number;
    currency?: string;
    max_marked?: number;
    max_effective?: number;
};
type GetProducts = {
    auto_add_to_cart?: boolean;
    product_details?: LimitedProductData;
    sizes?: Size[];
    price?: Price;
    allow_remove?: boolean;
    auto_select?: boolean;
    max_quantity?: number;
    min_quantity?: number;
    product_uid?: number;
};
type GetProductBundleResponse = {
    name?: string;
    choice?: string;
    is_active?: boolean;
    same_store_assignment?: boolean;
    logo?: string;
    page_visibility?: string[];
    products?: GetProducts[];
    slug?: string;
    company_id?: number;
    meta?: any;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    name: string;
    title: string;
    brand_id?: number;
    modified_by?: any;
    description?: string;
    image?: string;
    guide?: Guide;
    created_by?: any;
    modified_on?: string;
    created_on?: string;
    id?: string;
    subtitle?: string;
    tag?: string;
    active?: boolean;
    company_id?: number;
};
type SizeGuideResponse = {
    name?: string;
    brand_id?: number;
    modified_by?: any;
    title?: string;
    guide?: any;
    modified_on?: string;
    created_on?: string;
    company_id?: number;
    id?: string;
    subtitle?: string;
    tag?: string;
    active?: boolean;
    created_by?: any;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
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
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    alt_text?: any;
    is_gift?: boolean;
    moq?: ApplicationItemMOQ;
    is_cod?: boolean;
    _custom_meta?: MetaFields[];
    _custom_json?: any;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    alt_text?: any;
    is_gift?: boolean;
    moq?: MOQData;
    is_cod?: boolean;
};
type GetConfigMetadataResponse = {
    data: any[];
    condition?: any[];
    values?: any[];
};
type PageResponseType = {
    current: number;
    total_count: number;
    next: number;
    has_next: boolean;
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
    is_active: boolean;
    priority: number;
    unit?: string;
    display_type: string;
    key?: string;
    slug?: string;
    logo?: string;
};
type AppConfigurationDetail = {
    name?: string;
    template_slugs?: string[];
    is_active: boolean;
    priority: number;
    attributes?: AttributeDetailsGroup[];
    app_id: string;
    slug: string;
    logo?: string;
    is_default: boolean;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    name?: string;
    default_key: string;
    is_active: boolean;
    priority: number;
    app_id: string;
    key: string;
    logo?: string;
    is_default: boolean;
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
    units?: any[];
    key?: string;
    display?: string;
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
    detail?: any;
    compare?: any;
    similar?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationListingSortConfig = {
    name?: string;
    is_active: boolean;
    priority: number;
    key: string;
    logo?: string;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    map?: any;
    map_values?: any[];
    condition?: string;
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    name?: string;
    value_config?: ConfigurationListingFilterValue;
    is_active: boolean;
    priority: number;
    key: string;
    display_name?: string;
    logo?: string;
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
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    name: string;
    is_active: boolean;
    priority: number;
    display_type: string;
    size: ProductSize;
    key: string;
    logo?: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    title?: string;
    is_active: boolean;
    priority: number;
    size?: ProductSize;
    key: string;
    subtitle?: string;
    logo?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppCatalogConfiguration = {
    listing?: ConfigurationListing;
    modified_by?: any;
    type?: string;
    config_id?: string;
    product?: ConfigurationProduct;
    modified_on?: string;
    app_id: string;
    created_on?: string;
    id?: string;
    created_by?: any;
    config_type: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    modified_by?: any;
    type?: string;
    config_id?: string;
    product?: ConfigurationProduct;
    modified_on?: string;
    app_id: string;
    created_on?: string;
    created_by?: any;
    config_type: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    app_id: string;
    id?: string;
    config_type: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersValue = {
    count?: number;
    selected_max?: number;
    display_format?: string;
    min?: number;
    is_selected: boolean;
    currency_code?: string;
    query_format?: string;
    display: string;
    selected_min?: number;
    value: any;
    currency_symbol?: string;
    max?: number;
};
type ProductFiltersKey = {
    name: string;
    display: string;
    operators?: string[];
    logo?: string;
    kind?: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type ProductSortOn = {
    name?: string;
    value?: string;
    is_selected?: boolean;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    operators: any;
};
type CollectionListingFilterTag = {
    name?: string;
    display?: string;
    is_selected?: boolean;
};
type CollectionListingFilterType = {
    name?: string;
    display?: string;
    is_selected?: boolean;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type BannerImage = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
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
type Media1 = {
    url: string;
    meta?: any;
    type?: string;
};
type GetCollectionDetailNest = {
    description?: string;
    uid?: string;
    meta?: any;
    name?: string;
    is_active?: boolean;
    app_id?: string;
    slug?: string;
    banners?: ImageUrls;
    allow_facets?: boolean;
    type?: string;
    query?: CollectionQuery[];
    priority?: number;
    action?: Action;
    visible_facets_keys?: string[];
    logo?: Media1;
    badge?: any;
    allow_sort?: boolean;
    cron?: any;
    _schedule?: any;
    tag?: string[];
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type UserInfo = {
    username?: string;
    uid?: string;
    user_id?: string;
    email?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionSchedule = {
    next_schedule?: NextSchedule[];
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
};
type CreateCollection = {
    modified_by?: UserInfo;
    description?: string;
    is_visible?: boolean;
    published?: boolean;
    sort_on?: string;
    meta?: any;
    _custom_json?: any;
    name: string;
    is_active?: boolean;
    app_id: string;
    banners: CollectionBanner;
    slug: string;
    allow_facets?: boolean;
    tags?: string[];
    type: string;
    query?: CollectionQuery[];
    _locale_language?: any;
    priority?: number;
    visible_facets_keys?: string[];
    created_by?: UserInfo;
    logo: CollectionImage;
    badge?: CollectionBadge;
    allow_sort?: boolean;
    seo?: SeoDetail;
    _schedule?: CollectionSchedule;
};
type CollectionCreateResponse = {
    description?: string;
    sort_on?: string;
    meta?: any;
    name?: string;
    is_active?: boolean;
    app_id?: string;
    slug?: string;
    banners?: ImageUrls;
    allow_facets?: boolean;
    type?: string;
    query?: CollectionQuery[];
    priority?: number;
    visible_facets_keys?: string[];
    logo?: BannerImage;
    badge?: any;
    allow_sort?: boolean;
    cron?: any;
    _schedule?: any;
    tag?: string[];
};
type CollectionDetailResponse = {
    name?: string;
    allow_sort?: boolean;
    tag?: string[];
    slug?: string;
    cron?: any;
    description?: string;
    is_active?: boolean;
    query?: CollectionQuery[];
    priority?: number;
    _schedule?: any;
    app_id?: string;
    badge?: any;
    meta?: any;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    logo?: Media1;
    allow_facets?: boolean;
    type?: string;
};
type UpdateCollection = {
    modified_by?: UserInfo;
    description?: string;
    is_visible?: boolean;
    published?: boolean;
    sort_on?: string;
    meta?: any;
    _custom_json?: any;
    name?: string;
    is_active?: boolean;
    slug?: string;
    banners?: CollectionBanner;
    allow_facets?: boolean;
    tags?: string[];
    type?: string;
    query?: CollectionQuery[];
    _locale_language?: any;
    priority?: number;
    visible_facets_keys?: string[];
    logo?: CollectionImage;
    badge?: CollectionBadge;
    allow_sort?: boolean;
    seo?: SeoDetail;
    _schedule?: CollectionSchedule;
};
type ProductBrand = {
    name?: string;
    uid?: number;
    logo?: Media1;
    action?: Action;
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
type Price1 = {
    currency_symbol?: string;
    max?: number;
    currency_code?: string;
    min?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    short_description?: string;
    description?: string;
    rating_count?: number;
    highlights?: string[];
    uid?: number;
    discount?: string;
    has_variant?: boolean;
    item_code?: string;
    name?: string;
    medias?: Media1[];
    slug: string;
    promo_meta?: any;
    image_nature?: string;
    rating?: number;
    type?: string;
    product_online_date?: string;
    color?: string;
    brand?: ProductBrand;
    sellable?: boolean;
    tryouts?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    similars?: string[];
    teaser_tag?: any;
    price?: ProductListingPrice;
    attributes?: any;
    item_type?: string;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    page?: Page;
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
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightItem = {
    count?: number;
    out_of_stock_count?: number;
    sellable_count?: number;
};
type CatalogInsightBrand = {
    name?: string;
    total_sizes?: number;
    available_articles?: number;
    available_sizes?: number;
    total_articles?: number;
    article_freshness?: number;
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
    store_ids?: number[];
    platform?: string;
    opt_level: string;
    brand_ids?: number[];
    enabled?: boolean;
    company_id?: number;
};
type CompanyOptIn = {
    modified_by?: any;
    store_ids: number[];
    platform: string;
    created_by?: any;
    modified_on: number;
    opt_level: string;
    brand_ids: number[];
    enabled: boolean;
    created_on: number;
    company_id: number;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    name?: string;
    uid?: number;
    business_type?: string;
    company_type?: string;
};
type CompanyBrandDetail = {
    company_id?: number;
    brand_id?: number;
    brand_name?: string;
    total_article?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    brand?: number;
    company?: string;
    store?: number;
};
type StoreDetail = {
    name?: string;
    documents?: any[];
    address?: any;
    manager?: any;
    additional_contacts?: any[];
    modified_on?: string;
    uid?: number;
    created_on?: string;
    timing?: any;
    store_type?: string;
    store_code?: string;
    display_name?: string;
    company_id?: number;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    format?: string;
    mandatory?: boolean;
    allowed_values?: string[];
    range?: AttributeSchemaRange;
    multi?: boolean;
    type: string;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    priority?: number;
    indexing: boolean;
    depends_on?: string[];
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type GenderDetail = {
    schema?: AttributeMaster;
    name?: string;
    details?: AttributeMasterDetails;
    description?: string;
    is_nested?: boolean;
    filters?: AttributeMasterFilter;
    logo?: string;
    enabled_for_end_consumer?: boolean;
    id?: string;
    slug?: string;
    meta?: AttributeMasterMeta;
    departments?: string[];
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    status?: number;
    code?: string;
    errors?: any;
    meta?: any;
    message?: string;
};
type UserSerializer = {
    username?: string;
    contact?: string;
    uid?: string;
    user_id?: string;
    _id?: string;
};
type GetDepartment = {
    name?: string;
    search?: string;
    modified_by?: UserSerializer;
    synonyms?: string[];
    is_active?: boolean;
    priority_order?: number;
    modified_on?: string;
    item_type?: string;
    uid?: number;
    created_on?: string;
    page_no?: number;
    page_size?: number;
    slug?: string;
    created_by?: UserSerializer;
    logo?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    status?: number;
    code?: string;
    errors?: any;
    meta?: any;
    message?: string;
};
type DepartmentCreateUpdate = {
    name: string;
    synonyms?: string[];
    _custom_json?: any;
    is_active?: boolean;
    priority_order: number;
    platforms?: any;
    uid?: number;
    _cls?: string;
    slug?: string;
    logo: string;
    tags?: string[];
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    username: string;
    user_id: string;
    super_user?: boolean;
    contact?: string;
};
type DepartmentModel = {
    verified_by?: UserDetail;
    name: any;
    modified_by?: UserDetail;
    synonyms?: any[];
    slug?: any;
    verified_on?: string;
    is_active?: boolean;
    priority_order: number;
    modified_on: string;
    uid?: number;
    created_on: string;
    _cls?: any;
    _id?: any;
    created_by?: UserDetail;
    logo: string;
    _custom_json?: any;
};
type ProductTemplate = {
    name?: string;
    modified_by?: any;
    tag?: string;
    description?: string;
    is_active?: boolean;
    categories?: string[];
    attributes?: string[];
    modified_on?: string;
    is_expirable?: boolean;
    created_on?: string;
    is_physical: boolean;
    is_archived?: boolean;
    slug: string;
    created_by?: any;
    logo?: string;
    departments?: string[];
    attributes_schema?: any[];
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type TemplateDetails = {
    name?: string;
    tag?: string;
    description?: string;
    is_active?: boolean;
    categories?: string[];
    attributes?: string[];
    is_expirable?: boolean;
    is_physical: boolean;
    is_archived?: boolean;
    id?: string;
    slug: string;
    logo?: string;
    departments?: string[];
    attributes_schema?: any[];
};
type Properties = {
    short_description?: any;
    currency?: any;
    variants?: any;
    command?: any;
    description?: any;
    highlights?: any;
    trader_type?: any;
    trader?: any;
    item_code?: any;
    no_of_boxes?: any;
    name?: any;
    multi_size?: any;
    is_active?: any;
    is_dependent?: any;
    slug?: any;
    tags?: any;
    country_of_origin?: any;
    product_group_tag?: any;
    custom_order?: any;
    category_slug?: any;
    hsn_code?: any;
    size_guide?: any;
    product_publish?: any;
    teaser_tag?: any;
    return_config?: any;
    sizes?: any;
    item_type?: any;
    brand_uid?: any;
    media?: any;
};
type GlobalValidation = {
    title?: string;
    description?: string;
    required?: string[];
    definitions?: any;
    properties?: Properties;
    type?: string;
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
    brand?: string[];
    templates?: string[];
    type?: string;
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadsItems = {
    data?: ProductDownloadItemsData;
    seller_id?: number;
    trigger_on?: string;
    completed_on?: string;
    template_tags?: any;
    url?: string;
    id?: string;
    status?: string;
    created_by?: VerifiedBy;
    task_id?: string;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Media2 = {
    portrait: string;
    logo: string;
    landscape: string;
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
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type Category = {
    name: string;
    modified_by?: any;
    synonyms?: string[];
    is_active: boolean;
    priority?: number;
    created_by?: any;
    modified_on?: string;
    uid?: number;
    media?: Media2;
    tryouts?: string[];
    created_on?: string;
    marketplaces?: CategoryMapping;
    id?: string;
    slug?: string;
    level: number;
    hierarchy?: Hierarchy[];
    departments: number[];
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    name: string;
    synonyms?: string[];
    is_active: boolean;
    priority?: number;
    media?: Media2;
    tryouts?: string[];
    marketplaces?: CategoryMapping;
    slug?: string;
    level: number;
    hierarchy?: Hierarchy[];
    departments: number[];
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type Image = {
    url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type NetQuantity = {
    unit?: string;
    value?: number;
};
type Logo = {
    url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type ProductPublished = {
    product_online_date?: string;
    is_set?: boolean;
};
type Product = {
    variant_group?: any;
    l3_mapping?: string[];
    currency?: string;
    short_description?: string;
    variants?: any;
    modified_by?: any;
    description?: string;
    tax_identifier?: any;
    stage?: string;
    is_image_less_product?: boolean;
    highlights?: string[];
    all_sizes?: any[];
    uid?: number;
    trader?: any[];
    moq?: any;
    _custom_json?: any;
    item_code?: string;
    no_of_boxes?: number;
    name?: string;
    verified_by?: VerifiedBy;
    is_set?: boolean;
    multi_size?: boolean;
    is_active?: boolean;
    images?: Image[];
    is_dependent?: boolean;
    modified_on?: string;
    is_physical?: boolean;
    slug?: string;
    image_nature?: string;
    tags?: string[];
    country_of_origin?: string;
    net_quantity?: NetQuantity;
    product_group_tag?: string[];
    all_identifiers?: string[];
    custom_order?: any;
    verified_on?: string;
    all_company_ids?: number[];
    color?: string;
    category_slug?: string;
    hsn_code?: string;
    brand?: Brand;
    template_tag?: string;
    is_expirable?: boolean;
    variant_media?: any;
    size_guide?: string;
    id?: string;
    created_by?: any;
    product_publish?: ProductPublished;
    company_id?: number;
    departments?: number[];
    primary_color?: string;
    return_config?: ReturnConfig;
    sizes?: any[];
    teaser_tag?: any;
    category_uid?: number;
    category?: any;
    attributes?: any;
    item_type?: string;
    brand_uid?: number;
    media?: Media1[];
    created_on?: string;
    pending?: string;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type TaxIdentifier = {
    hsn_code_id?: string;
    hsn_code?: string;
    reporting_hsn?: string;
};
type Trader = {
    name: any;
    address?: string[];
    type?: string;
};
type NetQuantity1 = {
    unit?: any;
    value?: number;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ReturnConfig1 = {
    returnable: boolean;
    unit: string;
    time: number;
};
type ProductCreateUpdateSchemaV2 = {
    variant_group?: any;
    short_description?: string;
    variants?: any;
    currency: string;
    description?: string;
    tax_identifier: TaxIdentifier;
    is_image_less_product?: boolean;
    highlights?: string[];
    uid?: number;
    trader: Trader[];
    change_request_id?: any;
    item_code: string;
    _custom_json?: any;
    no_of_boxes?: number;
    name: string;
    is_set?: boolean;
    multi_size?: boolean;
    is_active?: boolean;
    is_dependent?: boolean;
    slug: string;
    tags?: string[];
    country_of_origin: string;
    product_group_tag?: string[];
    net_quantity?: NetQuantity1;
    bulk_job_id?: string;
    custom_order?: CustomOrder;
    category_slug: string;
    variant_media?: any;
    template_tag: string;
    requester?: string;
    action?: string;
    size_guide?: string;
    company_id: number;
    product_publish?: ProductPublish;
    departments: number[];
    teaser_tag?: TeaserTag;
    return_config: ReturnConfig1;
    sizes: any[];
    attributes: any;
    item_type: string;
    brand_uid: number;
    media?: Media1[];
};
type ProductVariants = {
    name?: string;
    category_uid?: number;
    brand_uid?: number;
    uid?: number;
    media?: Media1[];
    item_code?: string;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    schema: AttributeMaster;
    modified_by?: any;
    details: AttributeMasterDetails;
    description?: string;
    enabled_for_end_consumer?: boolean;
    name?: string;
    modified_on?: string;
    slug: string;
    tags?: string[];
    suggestion?: string;
    raw_key?: string;
    is_nested?: boolean;
    filters: AttributeMasterFilter;
    created_by?: any;
    logo?: string;
    departments: string[];
    synonyms?: any;
    unit?: string;
    variant?: boolean;
    created_on?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ProductCreateUpdate = {
    variant_group?: any;
    short_description?: string;
    variants?: any;
    currency: string;
    description?: string;
    tax_identifier: TaxIdentifier;
    is_image_less_product?: boolean;
    highlights?: string[];
    uid?: number;
    trader: Trader[];
    change_request_id?: any;
    item_code: any;
    _custom_json?: any;
    no_of_boxes?: number;
    name: any;
    is_set?: boolean;
    multi_size?: boolean;
    is_active?: boolean;
    is_dependent?: boolean;
    slug: string;
    tags?: string[];
    country_of_origin: string;
    product_group_tag?: string[];
    net_quantity?: NetQuantity1;
    bulk_job_id?: string;
    custom_order?: CustomOrder;
    category_slug: string;
    variant_media?: any;
    template_tag: string;
    requester?: string;
    action?: string;
    size_guide?: string;
    company_id: number;
    product_publish?: ProductPublish;
    departments: number[];
    teaser_tag?: TeaserTag;
    return_config: ReturnConfig1;
    item_type: string;
    brand_uid: number;
    media?: Media1[];
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
    item_dimensions_unit_of_measure: string;
    item_weight: number;
    item_weight_unit_of_measure: any;
    identifiers?: ValidateIdentifier[];
    item_height: number;
    item_length: number;
    size: any;
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
    username?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    failed?: number;
    cancelled_records?: string[];
    modified_by?: UserDetail1;
    stage?: string;
    is_active?: boolean;
    succeed?: number;
    created_by?: UserDetail1;
    modified_on?: string;
    total?: number;
    template_tag?: string;
    created_on?: string;
    failed_records?: string[];
    template?: ProductTemplate;
    company_id?: number;
    file_path?: string;
    cancelled?: number;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    username?: string;
    uid?: string;
    user_id?: string;
    email?: string;
};
type BulkJob = {
    failed?: number;
    cancelled_records?: any[];
    modified_by?: UserInfo1;
    stage?: string;
    is_active?: boolean;
    succeed?: number;
    tracking_url?: string;
    modified_on?: string;
    total?: number;
    template_tag?: string;
    created_on: string;
    company_id: number;
    failed_records?: any[];
    created_by?: UserInfo1;
    file_path?: string;
    custom_template_tag?: string;
    cancelled?: number;
};
type BulkResponse = {
    modified_by?: UserInfo1;
    is_active?: boolean;
    modified_on?: string;
    created_on: string;
    batch_id: string;
    created_by?: UserInfo1;
};
type BulkProductRequest = {
    batch_id: string;
    template_tag: string;
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
    username?: string;
    user_id?: string;
    company_id?: number;
};
type Items = {
    failed?: number;
    cancelled_records?: string[];
    modified_by?: UserCommon;
    stage?: string;
    is_active?: boolean;
    succeed?: number;
    retry?: number;
    tracking_url?: string;
    modified_on?: string;
    total?: number;
    created_on?: string;
    company_id?: number;
    failed_records?: string[];
    id?: string;
    created_by?: UserCommon;
    file_path?: string;
    cancelled?: number;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    company_id?: number;
    url: string;
    user: any;
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
    currency?: string;
    sellable_quantity?: number;
    price?: number;
    identifiers?: any;
    seller_identifier?: string;
    quantity?: number;
    price_effective?: number;
    size?: string;
    uid?: string;
    item_id?: number;
    store?: any;
    inventory_updated_on?: string;
    price_transfer?: number;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type ItemQuery = {
    uid?: number;
    item_code?: string;
    brand_uid?: number;
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
    name?: string;
    size_distribution: SizeDistribution;
};
type GTIN = {
    gtin_type: string;
    gtin_value: any;
    primary?: boolean;
};
type InvSize = {
    item_dimensions_unit_of_measure?: string;
    currency: string;
    set?: InventorySet;
    is_set?: boolean;
    price?: number;
    item_weight?: number;
    item_weight_unit_of_measure?: string;
    expiration_date?: string;
    identifiers: GTIN[];
    item_height?: number;
    item_length?: number;
    quantity: number;
    price_effective: number;
    size: any;
    store_code: string;
    item_width?: number;
    price_transfer?: number;
};
type InventoryRequest = {
    company_id: number;
    item: ItemQuery;
    sizes: InvSize[];
};
type Trader1 = {
    name: string;
    address: string[];
    type: string;
};
type CompanyMeta = {
    id: number;
};
type DimensionResponse = {
    length: number;
    unit: string;
    height: number;
    width: number;
    is_default: boolean;
};
type ManufacturerResponse = {
    name: string;
    address: string;
    is_default: boolean;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type BrandMeta = {
    name: string;
    id: number;
};
type ReturnConfig2 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type PriceMeta = {
    effective: number;
    currency: string;
    tp_notes?: any;
    transfer: number;
    marked: number;
    updated_at?: string;
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
type InventorySellerResponse = {
    modified_by?: UserSerializer;
    tax_identifier?: any;
    track_inventory?: boolean;
    stage?: string;
    uid: string;
    trader?: Trader1[];
    company: CompanyMeta;
    item_id: number;
    meta?: any;
    _custom_json?: any;
    is_set?: boolean;
    is_active?: boolean;
    seller_identifier: string;
    total_quantity: number;
    identifier: any;
    fragile: boolean;
    tags?: string[];
    dimension: DimensionResponse;
    raw_meta?: any;
    country_of_origin: string;
    manufacturer: ManufacturerResponse;
    expiration_date?: string;
    trace_id?: string;
    fynd_item_code: string;
    weight: WeightResponse;
    brand: BrandMeta;
    size: string;
    fynd_meta?: any;
    added_on_store?: string;
    created_by?: UserSerializer;
    return_config?: ReturnConfig2;
    set?: InventorySet;
    price: PriceMeta;
    fynd_article_code: string;
    store: StoreMeta;
    quantities?: Quantities;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    failed?: number;
    cancelled_records?: string[];
    modified_by?: any;
    stage?: string;
    is_active?: boolean;
    succeed?: number;
    modified_on?: string;
    total?: number;
    created_on?: string;
    company_id?: number;
    failed_records?: string[];
    id?: string;
    created_by?: any;
    file_path?: string;
    cancelled?: number;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    item_dimensions_unit_of_measure?: string;
    currency?: string;
    expiration_date?: string;
    trace_id?: string;
    price?: number;
    item_weight_unit_of_measure?: string;
    seller_identifier: string;
    quantity?: number;
    price_marked?: number;
    price_effective?: number;
    total_quantity?: number;
    store_code: string;
    tags?: string[];
};
type InventoryBulkRequest = {
    batch_id: string;
    company_id: number;
    sizes: InventoryJobPayload[];
    user?: any;
};
type InventoryExportJob = {
    seller_id: number;
    trigger_on?: string;
    completed_on?: string;
    url?: string;
    status?: string;
    request_params?: any;
    task_id: string;
};
type InventoryExportRequest = {
    brand?: number[];
    store?: number[];
    type?: string;
};
type InventoryExportResponse = {
    seller_id: number;
    trigger_on?: string;
    status?: string;
    request_params?: any;
    task_id: string;
};
type Trader2 = {
    name?: string;
    address?: string[];
    type?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type DimensionResponse1 = {
    length?: number;
    unit?: string;
    height?: number;
    width?: number;
};
type ManufacturerResponse1 = {
    name?: string;
    address?: string;
    is_default?: boolean;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type ReturnConfig3 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type PriceArticle = {
    effective?: number;
    currency?: string;
    tp_notes?: any;
    transfer?: number;
    marked?: number;
};
type ArticleStoreResponse = {
    name?: string;
    uid?: number;
    store_type?: string;
    store_code?: string;
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
type GetInventories = {
    modified_by?: UserSerializer;
    tax_identifier?: any;
    track_inventory?: boolean;
    stage?: string;
    uid?: string;
    trader?: Trader2[];
    company?: CompanyMeta1;
    item_id?: number;
    inventory_updated_on?: string;
    is_set?: boolean;
    seller_identifier?: string;
    platforms?: any;
    total_quantity?: number;
    identifier?: any;
    tags?: string[];
    dimension?: DimensionResponse1;
    manufacturer?: ManufacturerResponse1;
    country_of_origin?: string;
    expiration_date?: string;
    trace_id?: string;
    weight?: WeightResponse1;
    brand?: BrandMeta1;
    size?: string;
    id?: string;
    created_by?: UserSerializer;
    return_config?: ReturnConfig3;
    date_meta?: DateMeta;
    price?: PriceArticle;
    store?: ArticleStoreResponse;
    quantities?: QuantitiesArticle;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
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
    expiration_date?: string;
    trace_id?: string;
    seller_identifier: string;
    store_id: number;
    price_marked?: number;
    price_effective?: number;
    total_quantity?: number;
    tags?: string[];
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
type PageResponse = {
    item_total?: number;
    has_next?: boolean;
    current?: string;
    has_previous?: boolean;
    size?: number;
};
type HsnCodesObject = {
    modified_on?: string;
    hs2_code?: string;
    hsn_code?: string;
    threshold2?: number;
    tax_on_esp?: boolean;
    tax2?: number;
    tax_on_mrp?: boolean;
    id?: string;
    tax1?: number;
    company_id?: number;
    threshold1?: number;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    is_active?: boolean;
    hs2_code: string;
    hsn_code: string;
    threshold2?: number;
    tax_on_esp?: boolean;
    tax2?: number;
    tax_on_mrp: boolean;
    uid?: number;
    tax1: number;
    company_id: number;
    threshold1: number;
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
    cess?: number;
    threshold: number;
    rate: number;
};
type HSNDataInsertV2 = {
    country_code: string;
    modified_by?: any;
    taxes: TaxSlab[];
    description: string;
    modified_on?: string;
    hsn_code: string;
    created_on?: string;
    reporting_hsn: string;
    created_by?: any;
    type: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    name?: string;
    slug?: string;
    uid?: number;
    action?: Action;
    discount?: string;
    banners?: ImageUrls;
    logo?: Media;
    departments?: string[];
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    name?: string;
    priority_order?: number;
    uid?: number;
    slug?: string;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    name?: string;
    slug?: string;
    uid?: number;
    action?: Action;
    banners?: ImageUrls;
    childs?: any[];
    _custom_json?: any;
};
type SecondLevelChild = {
    name?: string;
    slug?: string;
    uid?: number;
    action?: Action;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
    _custom_json?: any;
};
type Child = {
    name?: string;
    slug?: string;
    uid?: number;
    action?: Action;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
    _custom_json?: any;
};
type CategoryItems = {
    name?: string;
    slug?: string;
    uid?: number;
    action?: Action;
    banners?: ImageUrls;
    childs?: Child[];
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
    filters?: ProductFilters[];
    operators?: any;
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
};
type ProductDetail = {
    short_description?: string;
    description?: string;
    rating_count?: number;
    highlights?: string[];
    uid?: number;
    has_variant?: boolean;
    item_code?: string;
    name?: string;
    medias?: Media1[];
    slug: string;
    promo_meta?: any;
    image_nature?: string;
    rating?: number;
    type?: string;
    product_online_date?: string;
    color?: string;
    brand?: ProductBrand;
    tryouts?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    similars?: string[];
    teaser_tag?: any;
    attributes?: any;
    item_type?: string;
};
type InventoryPage = {
    item_total: number;
    next_id?: string;
    has_next?: boolean;
    has_previous?: boolean;
    type: string;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type UserSerializer1 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type UserSerializer2 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetAddressSerializer = {
    pincode?: number;
    country_code?: string;
    latitude?: number;
    city?: string;
    address_type?: string;
    state?: string;
    longitude?: number;
    address2?: string;
    address1?: string;
    country?: string;
    landmark?: string;
};
type GetCompanySerializer = {
    verified_by?: UserSerializer2;
    name?: string;
    modified_by?: UserSerializer2;
    stage?: string;
    verified_on?: string;
    modified_on?: string;
    reject_reason?: string;
    uid?: number;
    created_on?: string;
    addresses?: GetAddressSerializer[];
    company_type?: string;
    created_by?: UserSerializer2;
    business_type?: string;
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
type LocationManagerSerializer = {
    name?: string;
    mobile_no: SellerPhoneNumber;
    email?: string;
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
    order?: string;
    inventory?: string;
};
type GetLocationSerializer = {
    product_return_config?: ProductReturnConfigSerializer;
    documents?: Document[];
    modified_by?: UserSerializer1;
    stage?: string;
    uid?: number;
    contact_numbers?: SellerPhoneNumber[];
    company?: GetCompanySerializer;
    _custom_json?: any;
    verified_by?: UserSerializer1;
    name: string;
    phone_number: string;
    modified_on?: string;
    store_type?: string;
    address: GetAddressSerializer;
    verified_on?: string;
    code: string;
    warnings?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    display_name: string;
    created_by?: UserSerializer1;
    manager?: LocationManagerSerializer;
    notification_emails?: string[];
    created_on?: string;
    timing?: LocationDayWiseSerializer[];
    integration_type?: LocationIntegrationType;
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
    name?: string;
    is_active?: boolean;
    app_id: string;
    uid: number;
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
    effective_date?: string;
    enable?: boolean;
    rate?: number;
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
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type GetCompanyProfileSerializerResponse = {
    business_type: string;
    created_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    taxes?: CompanyTaxesSerializer[];
    business_info?: string;
    warnings?: any;
    franchise_enabled?: boolean;
    business_details?: BusinessDetails;
    uid: number;
    notification_emails?: string[];
    created_on?: string;
    stage?: string;
    verified_by?: UserSerializer;
    verified_on?: string;
    mode?: string;
    modified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    modified_on?: string;
    name?: string;
    documents?: Document[];
    company_type: string;
    contact_details?: ContactDetails;
    _custom_json?: any;
};
type CreateUpdateAddressSerializer = {
    pincode: number;
    city: string;
    country_code?: string;
    latitude: number;
    address_type: string;
    country: string;
    address2?: string;
    landmark?: string;
    state: string;
    longitude: number;
    address1: string;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type UpdateCompany = {
    addresses?: CreateUpdateAddressSerializer[];
    taxes?: CompanyTaxesSerializer1[];
    business_type?: string;
    business_info?: string;
    contact_details?: ContactDetails;
    warnings?: any;
    franchise_enabled?: boolean;
    name?: string;
    business_details?: BusinessDetails;
    _custom_json?: any;
    notification_emails?: string[];
    reject_reason?: string;
    documents?: Document[];
    company_type?: string;
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
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
    uid?: number;
    stage?: string;
    store?: DocumentsObj;
    product?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    _locale_language?: any;
    logo?: string;
    created_by?: UserSerializer;
    warnings?: any;
    synonyms?: string[];
    uid?: number;
    banner?: BrandBannerSerializer;
    created_on?: string;
    stage?: string;
    verified_by?: UserSerializer;
    verified_on?: string;
    mode?: string;
    modified_by?: UserSerializer;
    slug_key?: string;
    modified_on?: string;
    name: string;
    reject_reason?: string;
    _custom_json?: any;
    description?: string;
};
type CreateUpdateBrandRequestSerializer = {
    _locale_language?: any;
    logo: string;
    name: string;
    _custom_json?: any;
    company_id?: number;
    synonyms?: string[];
    brand_tier?: string;
    uid?: number;
    description?: string;
    banner?: BrandBannerSerializer;
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
    verified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    business_type: string;
    market_channels?: string[];
    verified_on?: string;
    details?: CompanyDetails;
    modified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    modified_on?: string;
    name?: string;
    _custom_json?: any;
    uid?: number;
    created_by?: UserSerializer;
    notification_emails?: string[];
    reject_reason?: string;
    created_on?: string;
    stage?: string;
    company_type: string;
};
type CompanyBrandSerializer = {
    verified_by?: UserSerializer;
    warnings?: any;
    verified_on?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    company?: CompanySerializer;
    brand?: GetBrandResponseSerializer;
    uid?: number;
    created_by?: UserSerializer;
    reject_reason?: string;
    created_on?: string;
    stage?: string;
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
    holiday_type: string;
    title: string;
    date: HolidayDateSerializer;
};
type LocationSerializer = {
    gst_credentials?: InvoiceDetailsSerializer;
    contact_numbers?: SellerPhoneNumber[];
    address: GetAddressSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    warnings?: any;
    holiday?: HolidaySchemaSerializer[];
    manager?: LocationManagerSerializer;
    company: number;
    name: string;
    display_name: string;
    store_type?: string;
    _custom_json?: any;
    uid?: number;
    notification_emails?: string[];
    timing?: LocationDayWiseSerializer[];
    documents?: Document[];
    stage?: string;
    code: string;
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
    strategy?: string;
    level?: string;
};
type _AssignStoreArticle = {
    query?: _ArticleQuery;
    quantity?: number;
    meta?: any;
    article_assignment?: _ArticleAssignment;
    group_id?: string;
};
type AssignStoreRequestValidator = {
    pincode?: string;
    store_ids?: number[];
    channel_type?: string;
    company_id?: number;
    articles?: _AssignStoreArticle[];
    channel_identifier?: string;
    app_id?: string;
};
type AssignStoreResponseSerializer = {
    s_city?: string;
    store_id?: number;
    price_effective?: number;
    size?: string;
    index?: number;
    quantity?: number;
    status?: boolean;
    meta?: any;
    company_id?: number;
    uid?: string;
    article_assignment?: _ArticleAssignment;
    item_id?: number;
    price_marked?: number;
    _id?: string;
    store_pincode?: string;
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
type PriceRange = {
    max?: number;
    min?: number;
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
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    networks?: string[];
    types?: string[];
    uses?: PaymentAllowValue;
};
type Restrictions = {
    price_range?: PriceRange;
    user_type?: string;
    ordering_stores?: number[];
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    post_order?: PostOrder;
    platforms?: string[];
    bulk_bundle?: BulkBundleRestriction;
    payments?: any;
    user_groups?: number[];
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    description?: string;
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    subtitle?: string;
    title?: string;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type RuleDefinition = {
    applicable_on: string;
    calculate_on: string;
    type: string;
    scope?: string[];
    value_type: string;
    currency_code?: string;
    is_exact?: boolean;
    auto_apply?: boolean;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type Rule = {
    discount_qty?: number;
    key?: number;
    max?: number;
    min?: number;
    value?: number;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Validation = {
    user_registered_after?: string;
    app_id?: string[];
    anonymous?: boolean;
};
type CouponSchedule = {
    end?: string;
    next_schedule?: any[];
    duration?: number;
    start?: string;
    cron?: string;
};
type Validity = {
    priority?: number;
};
type CouponAdd = {
    identifiers: Identifier;
    restrictions?: Restrictions;
    display_meta: DisplayMeta;
    code: string;
    ownership: Ownership;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
    date_meta?: CouponDateMeta;
    state?: State;
    rule: Rule[];
    action?: CouponAction;
    validation?: Validation;
    _schedule?: CouponSchedule;
    tags?: string[];
    type_slug: string;
    validity: Validity;
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
    identifiers: Identifier;
    restrictions?: Restrictions;
    display_meta: DisplayMeta;
    code: string;
    ownership: Ownership;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
    date_meta?: CouponDateMeta;
    state?: State;
    rule: Rule[];
    action?: CouponAction;
    validation?: Validation;
    _schedule?: CouponSchedule;
    tags?: string[];
    type_slug: string;
    validity: Validity;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type DisplayMeta1 = {
    offer_label?: string;
    description?: string;
    offer_text?: string;
    name?: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type CompareObject = {
    greater_than?: number;
    greater_than_equals?: number;
    less_than?: number;
    less_than_equals?: number;
    equals?: number;
};
type ItemCriteria = {
    item_exclude_store?: number[];
    item_exclude_sku?: string[];
    item_exclude_category?: number[];
    item_exclude_brand?: number[];
    item_id?: number[];
    item_company?: number[];
    product_tags?: string[];
    item_brand?: number[];
    all_items?: boolean;
    cart_unique_item_amount?: CompareObject;
    available_zones?: string[];
    buy_rules?: string[];
    item_exclude_company?: number[];
    cart_quantity?: CompareObject;
    item_exclude_id?: number[];
    item_sku?: string[];
    cart_total?: CompareObject;
    item_store?: number[];
    item_size?: string[];
    item_category?: number[];
    cart_unique_item_quantity?: CompareObject;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type DiscountOffer = {
    discount_price?: number;
    code?: string;
    partial_can_ret?: boolean;
    max_offer_quantity?: number;
    max_usage_per_transaction?: number;
    apportion_discount?: boolean;
    discount_amount?: number;
    max_discount_amount?: number;
    discount_percentage?: number;
    min_offer_quantity?: number;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    discount_type: string;
    offer: DiscountOffer;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type UserRegistered = {
    start?: string;
    end?: string;
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
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    type: string;
    uses?: PaymentAllowValue1;
};
type Restrictions1 = {
    anonymous_users?: boolean;
    user_registered?: UserRegistered;
    uses: UsesRestriction1;
    post_order?: PostOrder1;
    platforms?: string[];
    user_id?: string[];
    order_quantity?: number;
    payments?: PromotionPaymentModes[];
    user_groups?: number[];
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionSchedule = {
    end?: string;
    published: boolean;
    next_schedule?: any[];
    duration?: number;
    start: string;
    cron?: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type PromotionListItem = {
    display_meta: DisplayMeta1;
    _custom_json?: any;
    apply_priority?: number;
    application_id: string;
    stackable?: boolean;
    calculate_on?: string;
    visiblility?: Visibility;
    buy_rules: any;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    discount_rules: DiscountRule[];
    mode: string;
    currency?: string;
    post_order_action?: PromotionAction;
    apply_exclusive?: string;
    restrictions?: Restrictions1;
    code?: string;
    ownership: Ownership1;
    promotion_type: string;
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    author?: PromotionAuthor;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    display_meta: DisplayMeta1;
    _custom_json?: any;
    apply_priority?: number;
    application_id: string;
    stackable?: boolean;
    calculate_on?: string;
    visiblility?: Visibility;
    buy_rules: any;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    discount_rules: DiscountRule[];
    mode: string;
    currency?: string;
    post_order_action?: PromotionAction;
    apply_exclusive?: string;
    restrictions?: Restrictions1;
    code?: string;
    ownership: Ownership1;
    promotion_type: string;
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    author?: PromotionAuthor;
};
type PromotionUpdate = {
    display_meta: DisplayMeta1;
    _custom_json?: any;
    apply_priority?: number;
    application_id: string;
    stackable?: boolean;
    calculate_on?: string;
    visiblility?: Visibility;
    buy_rules: any;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    discount_rules: DiscountRule[];
    mode: string;
    currency?: string;
    post_order_action?: PromotionAction;
    apply_exclusive?: string;
    restrictions?: Restrictions1;
    code?: string;
    ownership: Ownership1;
    promotion_type: string;
    _schedule?: PromotionSchedule;
    apply_all_discount?: boolean;
    author?: PromotionAuthor;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    description?: string;
    is_hidden?: boolean;
    entity_type?: string;
    type?: string;
    created_on?: string;
    subtitle?: string;
    entity_slug?: string;
    title?: string;
    modified_on?: string;
    example?: string;
};
type CartItem = {
    size: string;
    quantity?: number;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type RawBreakup = {
    discount?: number;
    mrp_total?: number;
    coupon?: number;
    vog?: number;
    fynd_cash?: number;
    cod_charge?: number;
    gst_charges?: number;
    subtotal?: number;
    total?: number;
    convenience_fee?: number;
    you_saved?: number;
    delivery_charge?: number;
};
type DisplayBreakup = {
    value?: number;
    key?: string;
    currency_code?: string;
    currency_symbol?: string;
    display?: string;
    message?: string[];
};
type LoyaltyPoints = {
    description?: string;
    total?: number;
    applicable?: number;
    is_applied?: boolean;
};
type CouponBreakup = {
    description?: string;
    max_discount_value?: number;
    code?: string;
    title?: string;
    minimum_cart_value?: number;
    type?: string;
    is_applied?: boolean;
    coupon_value?: number;
    value?: number;
    sub_title?: string;
    coupon_type?: string;
    message?: string;
    uid?: string;
};
type CartBreakup = {
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
};
type CartProductIdentifer = {
    identifier?: string;
};
type PromoMeta = {
    message?: string;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    marked?: number;
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    seller?: BaseInfo;
    store?: BaseInfo;
    size?: string;
    type?: string;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    extra_meta?: any;
    quantity?: number;
    uid?: string;
};
type DiscountRulesApp = {
    raw_offer?: any;
    item_criteria?: any;
    offer?: any;
    matched_buy_rules?: string[];
};
type FreeGiftItem = {
    item_name?: string;
    item_price_details?: any;
    item_brand_name?: string;
    item_slug?: string;
    item_id?: number;
    item_images_url?: string[];
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    parent_item_identifier?: string;
    quantity?: number;
};
type AppliedPromotion = {
    discount_rules?: DiscountRulesApp[];
    promo_id?: string;
    promotion_type?: string;
    article_quantity?: number;
    amount?: number;
    promotion_group?: string;
    mrp_promotion?: boolean;
    promotion_name?: string;
    offer_text?: string;
    applied_free_articles?: AppliedFreeArticles[];
    buy_rules?: BuyRules[];
};
type ProductAvailability = {
    sizes?: string[];
    deliverable?: boolean;
    out_of_stock?: boolean;
    is_valid?: boolean;
    other_store_quantity?: number;
};
type ProductPrice = {
    selling?: number;
    marked?: number;
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
    add_on?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    url?: string;
    type?: string;
    query?: ActionQuery;
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
type CartProduct = {
    action?: ProductAction;
    brand?: BaseInfo;
    type?: string;
    categories?: CategoryInfo[];
    net_quantity?: NetQuantity;
    images?: ProductImage[];
    slug?: string;
    name?: string;
    uid?: number;
};
type CartProductInfo = {
    identifiers: CartProductIdentifer;
    discount?: string;
    promo_meta?: PromoMeta;
    article?: ProductArticle;
    coupon_message?: string;
    promotions_applied?: AppliedPromotion[];
    key?: string;
    availability?: ProductAvailability;
    bulk_offer?: any;
    price?: ProductPriceInfo;
    parent_item_identifiers?: any;
    is_set?: boolean;
    price_per_unit?: ProductPriceInfo;
    quantity?: number;
    message?: string;
    product?: CartProduct;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    items?: CartProductInfo[];
    message?: string;
};
type OpenApiErrorResponse = {
    errors?: any;
    message?: string;
    success?: boolean;
};
type ShippingAddress = {
    pincode?: number;
    email?: string;
    state?: string;
    country?: string;
    address?: string;
    area?: string;
    area_code_slug?: string;
    landmark?: string;
    city?: string;
    area_code: string;
    country_code?: string;
    address_type?: string;
    name?: string;
    meta?: any;
    phone?: number;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
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
    message?: string;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
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
    discount: number;
    price_effective: number;
    employee_discount?: number;
    price_marked: number;
    payment_methods: MultiTenderPaymentMethod[];
    size: string;
    cod_charges: number;
    amount_paid: number;
    files?: OpenApiFiles[];
    loyalty_discount?: number;
    extra_meta?: any;
    product_id: number;
    coupon_effective_discount: number;
    quantity?: number;
    meta?: CartItemMeta;
    cashback_applied: number;
    delivery_charges: number;
};
type OpenApiPlatformCheckoutReq = {
    employee_discount?: any;
    cart_value: number;
    files?: OpenApiFiles[];
    loyalty_discount?: number;
    cart_items: OpenApiOrderItem[];
    billing_address: ShippingAddress;
    affiliate_order_id?: string;
    currency_code?: string;
    coupon_code: string;
    cod_charges: number;
    cashback_applied: number;
    shipping_address?: ShippingAddress;
    coupon?: string;
    payment_methods: MultiTenderPaymentMethod[];
    order_id?: string;
    payment_mode?: string;
    gstin?: string;
    coupon_value: number;
    comment?: string;
    delivery_charges: number;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    message?: string;
    order_ref_id?: string;
    success?: boolean;
};
type AbandonedCart = {
    discount?: number;
    last_modified: string;
    merge_qty?: boolean;
    fc_index_map?: number[];
    cart_value?: number;
    checkout_mode?: string;
    created_on: string;
    cod_charges?: any;
    uid: number;
    is_archive?: boolean;
    payment_methods?: any[];
    _id: string;
    payment_mode?: string;
    bulk_coupon_discount?: number;
    pick_up_customer_details?: any;
    is_default: boolean;
    user_id: string;
    is_active?: boolean;
    promotion?: any;
    payments?: any;
    fynd_credits?: any;
    cashback: any;
    shipments?: any[];
    coupon?: any;
    buy_now?: boolean;
    order_id?: string;
    gstin?: string;
    expire_at: string;
    articles: any[];
    app_id?: string;
    comment?: string;
    meta?: any;
    delivery_charges?: any;
};
type AbandonedCartResponse = {
    result?: any;
    page?: Page;
    items?: AbandonedCart[];
    message?: string;
    success?: boolean;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    last_modified?: string;
    comment?: string;
    restrict_checkout?: boolean;
    buy_now?: boolean;
    currency?: CartCurrency;
    gstin?: string;
    coupon_text?: string;
    checkout_mode?: string;
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    message?: string;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    delivery_charge_info?: string;
    id?: string;
    breakup_values?: CartBreakup;
};
type AddProductCart = {
    article_id?: string;
    store_id?: number;
    item_size?: string;
    seller_id?: number;
    article_assignment?: any;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    pos?: boolean;
    item_id?: number;
    display?: string;
    extra_meta?: any;
    quantity?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    partial?: boolean;
    message?: string;
    success?: boolean;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    identifiers: CartProductIdentifer;
    article_id?: string;
    item_index?: number;
    item_size?: string;
    parent_item_identifiers?: any;
    extra_meta?: any;
    item_id?: number;
    quantity?: number;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    message?: string;
    success?: boolean;
    cart?: CartDetailResponse;
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
