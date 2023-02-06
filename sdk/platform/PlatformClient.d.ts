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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, ShipmentItemFulFillingStore, ShipmentStatus, Prices, GSTDetailsData, PlatformItem, BagUnit, UserDataInfo, PaymentModeInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, UserDetailsData, TrackingList, FulfillingStore, OrderDetailsData, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, Identifier, FinancialBreakup, BagGST, BagConfigs, OrderBrandName, PlatformDeliveryAddress, OrderBagArticle, OrderBags, BagStateMapper, BagStatusHistory, ShipmentPayments, ShipmentStatusData, DPDetailsData, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, B2BPODetails, BagMeta, AffiliateMeta, DebugInfo, LockData, Formatted, BuyerDetails, EInvoice, EinvoiceInfo, ShipmentTimeStamp, ShipmentMeta, PDFLinks, AffiliateDetails, Dates, ArticleDetails, BagGSTDetails, StoreAddress, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, Store, ReturnConfig, Weight, Dimensions, Article, Brand, BagReturnableCancelableStatus, AffiliateBagDetails, Attributes, Item, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryStoreConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, MarketPlacePdf, AffiliateBag, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderUser, OrderPriority, UserData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ShippingInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, TaxInfo, PaymentMethod, PaymentInfo, BillingInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Price, Size, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, CollectionQuery, BannerImage, ImageUrls, GetCollectionDetailNest, GetCollectionListingResponse, CollectionSchedule, UserInfo, CollectionBadge, CollectionImage, SeoDetail, CollectionBanner, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, NetQuantity, Image, Logo, ProductPublished, Product, ProductListingResponse, NetQuantity1, Trader, TaxIdentifier, ReturnConfig1, TeaserTag, CustomOrder, ProductPublish, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ProductCreateUpdate, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, Trader1, PriceMeta, QuantityBase, Quantities, ManufacturerResponse, ReturnConfig2, BrandMeta, CompanyMeta, WeightResponse, DimensionResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, Trader2, PriceArticle, Quantity, QuantitiesArticle, ManufacturerResponse1, ReturnConfig3, BrandMeta1, CompanyMeta1, WeightResponse1, ArticleStoreResponse, DimensionResponse1, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, UserSerializer1, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetAddressSerializer, UserSerializer2, GetCompanySerializer, LocationIntegrationType, SellerPhoneNumber, LocationManagerSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, ContactDetails, BusinessCountryInfo, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Rule, Validation, State, CouponAuthor, CouponDateMeta, RuleDefinition, UsesRemaining, UsesRestriction, PriceRange, BulkBundleRestriction, PostOrder, PaymentAllowValue, PaymentModes, Restrictions, CouponAction, Ownership, Validity, CouponSchedule, DisplayMetaDict, DisplayMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Visibility, PromotionDateMeta, CompareObject, ItemCriteria, UsesRemaining1, UsesRestriction1, UserRegistered, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, DisplayMeta1, PromotionAuthor, DiscountOffer, DiscountRule, PromotionSchedule, Ownership1, PromotionAction, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CartProductIdentifer, ProductPrice, ProductPriceInfo, PromoMeta, BaseInfo, ActionQuery, ProductAction, CategoryInfo, ProductImage, CartProduct, ProductAvailability, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, BasePrice, ArticlePriceInfo, ProductArticle, CartProductInfo, CouponBreakup, DisplayBreakup, LoyaltyPoints, RawBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
type ShipmentStatus = {
    hex_code: string;
    status: string;
    actual_status: string;
    ops_status: string;
    title: string;
};
type Prices = {
    price_effective?: number;
    amount_paid?: number;
    fynd_credits?: number;
    price_marked?: number;
    cashback?: number;
    amount_paid_roundoff?: number;
    value_of_good?: number;
    tax_collected_at_source?: number;
    refund_amount?: number;
    cod_charges?: number;
    cashback_applied?: number;
    delivery_charge?: number;
    refund_credit?: number;
    promotion_effective_discount?: number;
    coupon_value?: number;
    discount?: number;
};
type GSTDetailsData = {
    gst_fee: number;
    value_of_good: number;
    tax_collected_at_source: number;
    gstin_code: string;
    brand_calculated_amount: number;
};
type PlatformItem = {
    images?: string[];
    name?: string;
    id?: number;
    code?: string;
    image?: string[];
    l3_category_name?: string;
    can_return?: boolean;
    can_cancel?: boolean;
    department_id?: number;
    size?: string;
    color?: string;
    l3_category?: number;
    l1_category?: string[];
};
type BagUnit = {
    total_shipment_bags: number;
    ordering_channel: string;
    status: any;
    can_cancel?: boolean;
    bag_id: number;
    shipment_id: string;
    item_quantity: number;
    prices?: Prices;
    gst?: GSTDetailsData;
    can_return?: boolean;
    item?: PlatformItem;
};
type UserDataInfo = {
    name?: string;
    avis_user_id?: string;
    uid?: number;
    is_anonymous_user?: boolean;
    email?: string;
    gender?: string;
    last_name?: string;
    mobile?: string;
    first_name?: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentItem = {
    total_bags_count: number;
    fulfilling_store?: ShipmentItemFulFillingStore;
    id: string;
    sla?: any;
    application?: any;
    channel?: any;
    shipment_status?: ShipmentStatus;
    bags?: BagUnit[];
    payment_methods?: any;
    created_at: string;
    fulfilling_centre: string;
    total_shipments_in_order: number;
    prices?: Prices;
    shipment_created_at: number;
    user?: UserDataInfo;
    payment_mode_info?: PaymentModeInfo;
};
type FilterInfoOption = {
    value?: string;
    text: string;
    name?: string;
};
type FiltersInfo = {
    value: string;
    text: string;
    type: string;
    options?: FilterInfoOption[];
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    page?: any;
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type UserDetailsData = {
    name: string;
    address: string;
    country: string;
    phone: string;
    email: string;
    city: string;
    state: string;
    pincode: string;
};
type TrackingList = {
    text: string;
    status: string;
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
};
type FulfillingStore = {
    contact_person: string;
    fulfillment_channel: string;
    id: string;
    code: string;
    address: string;
    store_name: string;
    country: string;
    meta: any;
    phone: string;
    city: string;
    state: string;
    pincode: string;
};
type OrderDetailsData = {
    ordering_channel_logo?: any;
    affiliate_id?: string;
    ordering_channel?: string;
    fynd_order_id: string;
    order_value?: string;
    source?: string;
    cod_charges?: string;
    order_date?: string;
    tax_details?: any;
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
    promotion_type?: string;
    amount?: number;
    discount_rules?: DiscountRules[];
    mrp_promotion?: boolean;
    article_quantity?: number;
    promo_id?: string;
    buy_rules?: BuyRules[];
    promotion_name?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    coupon_effective_discount: number;
    brand_calculated_amount: number;
    coupon_value: number;
    transfer_price: number;
    discount: number;
    added_to_fynd_cash: boolean;
    fynd_credits: number;
    total_units: number;
    gst_fee: string;
    value_of_good: number;
    gst_tag: string;
    hsn_code: string;
    pm_price_split: any;
    price_marked: number;
    tax_collected_at_source?: number;
    refund_credit: number;
    cashback_applied: number;
    gst_tax_percentage: number;
    promotion_effective_discount: number;
    size: string;
    price_effective: number;
    amount_paid: number;
    identifiers: Identifier;
    cashback: number;
    amount_paid_roundoff?: number;
    cod_charges: number;
    delivery_charge: number;
    item_name: string;
};
type BagGST = {
    is_default_hsn_code?: boolean;
    gst_tag?: string;
    value_of_good?: number;
    gst_fee?: number;
    gstin_code?: string;
    gst_tax_percentage?: number;
    brand_calculated_amount?: number;
    hsn_code?: string;
};
type BagConfigs = {
    is_returnable: boolean;
    is_active: boolean;
    enable_tracking: boolean;
    allow_force_return: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
};
type OrderBrandName = {
    company: string;
    id: number;
    brand_name: string;
    logo: string;
    modified_on?: number;
    created_on: number;
};
type PlatformDeliveryAddress = {
    version?: string;
    contact_person?: string;
    country?: string;
    address_type?: string;
    address2?: string;
    phone?: string;
    landmark?: string;
    address_category?: string;
    email?: string;
    created_at?: string;
    latitude?: number;
    address1?: string;
    updated_at?: string;
    area?: string;
    longitude?: number;
    city?: string;
    state?: string;
    pincode?: string;
};
type OrderBagArticle = {
    identifiers?: any;
    uid?: string;
    return_config?: any;
};
type OrderBags = {
    entity_type?: string;
    line_number?: number;
    prices?: Prices;
    can_return?: boolean;
    parent_promo_bags?: any;
    seller_identifier?: string;
    can_cancel?: boolean;
    quantity?: number;
    current_status?: string;
    bag_id: number;
    applied_promos?: AppliedPromos[];
    display_name?: string;
    financial_breakup?: FinancialBreakup[];
    gst_details?: BagGST;
    bag_configs?: BagConfigs;
    brand?: OrderBrandName;
    identifier?: string;
    delivery_address?: PlatformDeliveryAddress;
    article?: OrderBagArticle;
    item?: PlatformItem;
};
type BagStateMapper = {
    name: string;
    app_state_name?: string;
    bs_id: number;
    notify_customer?: boolean;
    app_facing?: boolean;
    state_type: string;
    display_name: string;
    is_active?: boolean;
    journey_type: string;
    app_display_name?: string;
};
type BagStatusHistory = {
    kafka_sync?: boolean;
    delivery_awb_number?: string;
    display_name?: boolean;
    store_id: number;
    forward?: boolean;
    delivery_partner_id?: number;
    bsh_id: number;
    status: string;
    created_at: string;
    bag_id: number;
    shipment_id: string;
    state_id: number;
    reasons?: any[];
    state_type?: string;
    updated_at?: string;
    bag_state_mapper: BagStateMapper;
    app_display_name?: boolean;
};
type ShipmentPayments = {
    mode: string;
    source?: string;
    logo?: string;
};
type ShipmentStatusData = {
    id?: number;
    status?: string;
    created_at?: string;
    shipment_id?: string;
    bag_list?: number[];
};
type DPDetailsData = {
    name?: string;
    id?: string;
    gst_tag?: string;
    country?: string;
    eway_bill_id?: string;
    pincode?: string;
    awb_no?: string;
    track_url?: string;
};
type ShipmentInfoResponse = {
    is_fynd_store?: string;
    affiliate_shipment_id: string;
    platform_logo: boolean;
    custom_meta?: any[];
    mid?: string;
    shipment_id: string;
    packaging_type?: string;
    delivery_details?: UserDetailsData;
    prices?: Prices;
    refund_details?: any;
    is_pdsr?: string;
    can_return?: boolean;
    tracking_url: string;
    child_nodes?: string[];
    bank_data?: any;
    billing_details?: UserDetailsData;
    total_items?: number;
    shipment_images?: string[];
    tracking_list?: TrackingList[];
    credit_note_id: string;
    shipment_quantity?: number;
    payment_mode?: string;
    priority_text?: string;
    shipment_status?: string;
    forward_order_status?: any[];
    replacement_details?: string;
    can_cancel?: boolean;
    enable_dp_tracking?: string;
    status_progress: number;
    pay_button?: string;
    user_agent?: string;
    total_bags?: number;
    beneficiary_details?: boolean;
    order_type: string;
    order_created_time?: string;
    company: any;
    refund_text?: string;
    operational_status?: string;
    fulfilling_store?: FulfillingStore;
    order?: OrderDetailsData;
    is_packaging_order: boolean;
    user_info?: any;
    enable_tracking?: boolean;
    items: any[];
    kirana_store_id?: string;
    go_green?: boolean;
    lock_status: string;
    user_id: string;
    bags?: OrderBags[];
    forward_shipment_status?: any[];
    bag_status_history?: BagStatusHistory[];
    fyndstore_emp: any;
    coupon?: any;
    due_date?: string;
    order_status: any;
    journey_type?: string;
    email_id: string;
    delivery_slot?: any;
    escalation?: any;
    forward_tracking_list?: any[];
    gst_details?: GSTDetailsData;
    ordering_store: any;
    payments?: ShipmentPayments;
    vertical?: string;
    is_not_fynd_source: boolean;
    is_fynd_coupon: boolean;
    status?: ShipmentStatusData;
    current_shipment_status: any;
    can_break: string;
    secured_delivery_flag?: string;
    invoice: any;
    delivery_status: any[];
    is_invoiced: boolean;
    dp_details?: DPDetailsData;
    picked_date?: string;
};
type PlatformShipment = {
    platform_logo?: string;
    custom_meta?: any[];
    shipment_id: string;
    packaging_type?: string;
    delivery_details?: UserDetailsData;
    prices?: Prices;
    billing_details?: UserDetailsData;
    total_items?: number;
    shipment_images?: string[];
    tracking_list?: TrackingList[];
    shipment_quantity?: number;
    payment_mode?: string;
    priority_text?: string;
    shipment_status?: string;
    enable_dp_tracking?: string;
    user_agent?: string;
    total_bags?: number;
    operational_status?: string;
    fulfilling_store?: FulfillingStore;
    order?: OrderDetailsData;
    bags?: OrderBags[];
    bag_status_history?: BagStatusHistory[];
    coupon?: any;
    journey_type?: string;
    delivery_slot?: any;
    gst_details?: GSTDetailsData;
    payments?: ShipmentPayments;
    vertical?: string;
    status?: ShipmentStatusData;
    dp_details?: DPDetailsData;
    picked_date?: string;
};
type OrderDict = {
    shipment_count: number;
    order_date: string;
    fynd_order_id: string;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    order?: OrderDict;
    custom_meta?: any[];
};
type SubLane = {
    text?: string;
    total_items?: number;
    actions?: any[];
    value?: string;
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
    value?: string;
    name?: string;
    display?: string;
};
type PlatformOrderItems = {
    user_info?: UserDataInfo;
    order_id?: string;
    channel?: PlatformChannel;
    shipments?: PlatformShipment[];
    payment_mode?: string;
    meta?: any;
    order_value?: number;
    total_order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    order_created_time?: string;
};
type OrderListingResponse = {
    items?: PlatformOrderItems[];
    success?: boolean;
    lane?: string;
    total_count?: number;
    page?: Page;
    message?: string;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    value: number;
    text: string;
    options?: Options[];
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    account_name?: string;
    shipment_type?: string;
    meta?: any;
    status?: string;
    reason?: string;
    last_location_recieved_at?: string;
    awb?: string;
    raw_status?: string;
    updated_at?: string;
    updated_time?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    processed?: FiltersInfo[];
    returned?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    filters?: FiltersInfo[];
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
    report_id?: string;
    report_type?: string;
    s3_key?: string;
    status?: string;
    request_details?: any;
    report_name?: string;
    display_name?: string;
    report_requested_at?: string;
    report_created_at?: string;
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
    trace_id?: string;
    success?: boolean;
    identifier?: string;
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    label?: any;
    store_id?: string;
    store_name?: string;
    store_code?: string;
    batch_id: string;
    invoice_status?: string;
    do_invoice_label_generated: boolean;
    data?: any;
    company_id?: string;
    invoice?: any;
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
    file_name?: string;
    operation?: string;
    content_type?: string;
    tags?: string[];
    cdn?: URL;
    size?: number;
    method?: string;
    file_path?: string;
    namespace?: string;
};
type bulkListingData = {
    store_name?: string;
    file_name?: string;
    failed?: number;
    successful?: number;
    excel_url?: string;
    total?: number;
    uploaded_on?: string;
    store_id?: number;
    id?: string;
    user_id?: string;
    processing?: number;
    processing_shipments?: string[];
    failed_shipments?: any[];
    user_name?: string;
    status?: string;
    batch_id?: string;
    store_code?: string;
    company_id?: number;
    successful_shipments?: any[];
};
type BulkListingPage = {
    type?: string;
    current?: number;
    has_previous?: boolean;
    total?: number;
    size?: number;
    has_next?: boolean;
};
type BulkListingResponse = {
    success?: boolean;
    data?: bulkListingData[];
    page?: BulkListingPage;
    error?: string;
};
type ManifestPage = {
    type?: string;
    current?: string;
    has_previous?: boolean;
    total?: number;
    size?: string;
    has_next?: boolean;
};
type DateRange = {
    from_date?: string;
    to_date?: string;
};
type ManifestFilter = {
    dp_ids?: string;
    sales_channels?: string;
    store_name?: string;
    date_range?: DateRange;
    lane?: string;
    dp_name?: string;
    stores?: string;
    sales_channel_name?: string;
};
type GeneratedManifestItem = {
    status?: string;
    created_by?: string;
    manifest_id?: string;
    created_at?: string;
    company_id?: number;
    is_active?: boolean;
    filters?: ManifestFilter;
};
type GeneratedManifestResponse = {
    page?: ManifestPage;
    items?: GeneratedManifestItem[];
};
type ManifestDetailItem = {
    item_qty?: number;
    order_id?: string;
    shipment_id?: string;
    awb?: string;
    invoice_id?: string;
};
type ManifestDetailTotalShipmentPricesCount = {
    shipment_count?: number;
    total_price?: number;
};
type ManifestDetailMeta = {
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
    filters?: ManifestFilter;
};
type ManifestDetail = {
    uid?: number;
    id?: number;
    meta?: ManifestDetailMeta;
    status?: string;
    user_id?: number;
    created_by?: string;
    manifest_id?: string;
    created_at?: string;
    company_id?: number;
    is_active?: boolean;
    filters?: ManifestFilter;
};
type ManifestDetailResponse = {
    additional_shipment_count?: number;
    page?: ManifestPage;
    items?: ManifestDetailItem[];
    manifest_details?: ManifestDetail[];
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
    successful_shipment_ids?: string[];
    total_shipments_count?: number;
    batch_id?: string;
    company_id?: string;
    successful_shipments_count?: number;
    processing_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    success?: string;
    user_id?: string;
    status?: boolean;
    failed_records?: string[];
    data?: BulkActionDetailsDataField[];
    uploaded_by?: string;
    uploaded_on?: string;
    error?: string[];
    message?: string;
};
type B2BPODetails = {
    docker_number?: string;
    item_base_price?: number;
    partial_can_ret?: boolean;
    po_tax_amount?: number;
    total_gst_percentage?: number;
    po_line_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type AffiliateMeta = {
    is_priority?: boolean;
    employee_discount?: number;
    quantity?: number;
    order_item_id?: string;
    coupon_code?: string;
    channel_order_id?: string;
    size_level_total_qty?: number;
    due_date?: string;
    channel_shipment_id?: string;
    box_type?: string;
    loyalty_discount?: number;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type BuyerDetails = {
    name: string;
    address: string;
    ajio_site_id?: string;
    gstin: string;
    city: string;
    state: string;
    pincode: number;
};
type EInvoice = {
    acknowledge_no?: number;
    signed_invoice?: string;
    signed_qr_code?: string;
    irn?: string;
    error_message?: string;
    error_code?: string;
    acknowledge_date?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type ShipmentMeta = {
    packaging_name?: string;
    dp_options?: any;
    same_store_available: boolean;
    ewaybill_info?: any;
    debug_info?: DebugInfo;
    shipment_weight?: number;
    return_affiliate_order_id?: string;
    return_details?: any;
    lock_data?: LockData;
    bag_weight?: any;
    forward_affiliate_shipment_id?: string;
    formatted?: Formatted;
    marketplace_store_id?: string;
    return_store_node?: number;
    store_invoice_updated_date?: string;
    weight: number;
    b2c_buyer_details?: any;
    dp_name?: string;
    order_type?: string;
    auto_trigger_dp_assignment_acf: boolean;
    shipment_volumetric_weight?: number;
    fulfilment_priority_text?: string;
    forward_affiliate_order_id?: string;
    b2b_buyer_details?: BuyerDetails;
    einvoice_info?: EinvoiceInfo;
    due_date?: string;
    box_type?: string;
    external?: any;
    dp_sort_key?: string;
    po_number?: string;
    return_awb_number?: string;
    timestamp?: ShipmentTimeStamp;
    assign_dp_from_sb?: boolean;
    return_affiliate_shipment_id?: string;
    dp_id?: string;
    awb_number?: string;
};
type PDFLinks = {
    label_type: string;
    label?: string;
    label_a4?: string;
    invoice_pos?: string;
    invoice_type: string;
    credit_note_url?: string;
    label_pos?: string;
    invoice_a4?: string;
    po_invoice?: string;
    invoice?: string;
    label_a6?: string;
    invoice_a6?: string;
    b2b?: string;
};
type AffiliateDetails = {
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    ad_id?: string;
    affiliate_id?: string;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    shipment_meta: ShipmentMeta;
    pdf_links?: PDFLinks;
    affiliate_bag_id: string;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type ArticleDetails = {
    status?: any;
};
type BagGSTDetails = {
    igst_tax_percentage: number;
    cgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    cgst_tax_percentage: number;
    gst_tag: string;
    value_of_good: number;
    hsn_code_id: string;
    gstin_code?: string;
    tax_collected_at_source: number;
    gst_fee: number;
    gst_tax_percentage: number;
    brand_calculated_amount: number;
    hsn_code: string;
    sgst_tax_percentage: number;
    sgst_gst_fee: string;
    igst_gst_fee: string;
};
type StoreAddress = {
    version?: string;
    address_type: string;
    landmark?: string;
    area?: string;
    city: string;
    address2?: string;
    pincode: number;
    country_code: string;
    phone: string;
    longitude: number;
    address_category: string;
    email?: string;
    address1: string;
    updated_at: string;
    contact_person: string;
    country: string;
    created_at: string;
    latitude: number;
    state: string;
};
type Document = {
    verified: boolean;
    legal_name: string;
    value: string;
    ds_type: string;
    url?: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEinvoice = {
    user?: string;
    enabled: boolean;
    password?: string;
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
    user?: string;
    password?: string;
    username?: string;
};
type StoreMeta = {
    stage: string;
    gst_number?: string;
    documents?: StoreDocuments;
    additional_contact_details?: any;
    gst_credentials: StoreGstCredentials;
    ewaybill_portal_details?: any;
    timing?: any[];
    notification_emails?: string[];
    einvoice_portal_details?: EInvoicePortalDetails;
    display_name: string;
    product_return_config?: any;
};
type Store = {
    name: string;
    vat_no?: string;
    alohomora_user_id?: number;
    is_enabled_for_recon?: boolean;
    mall_area?: string;
    login_username: string;
    brand_id?: any;
    store_email: string;
    is_active?: boolean;
    city: string;
    address2?: string;
    brand_store_tags?: string[];
    pincode: string;
    store_address_json?: StoreAddress;
    store_active_from?: string;
    is_archived?: boolean;
    meta: StoreMeta;
    phone: number;
    longitude: number;
    s_id: string;
    mall_name?: string;
    address1: string;
    updated_at?: string;
    order_integration_id?: string;
    contact_person: string;
    code?: string;
    fulfillment_channel: string;
    country: string;
    location_type: string;
    packaging_material_count?: number;
    created_at: string;
    company_id: number;
    latitude: number;
    state: string;
    parent_store_id?: number;
};
type ReturnConfig = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Weight = {
    shipping?: number;
    is_default?: boolean;
    unit?: string;
};
type Dimensions = {
    width?: number;
    height?: number;
    unit?: string;
    length?: number;
    is_default?: boolean;
};
type Article = {
    identifiers: Identifier;
    is_set?: boolean;
    code?: string;
    return_config?: ReturnConfig;
    uid: string;
    child_details?: any;
    raw_meta?: any;
    seller_identifier: string;
    a_set?: any;
    weight?: Weight;
    dimensions?: Dimensions;
    size: string;
    _id: string;
    esp_modified?: any;
};
type Brand = {
    credit_note_expiry_days?: number;
    company: string;
    credit_note_allowed?: boolean;
    pickup_location?: string;
    brand_name: string;
    modified_on?: number;
    logo?: string;
    brand_id: number;
    is_virtual_invoice?: boolean;
    start_date?: string;
    created_on?: number;
    invoice_prefix?: string;
    script_last_ran?: string;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
};
type AffiliateBagDetails = {
    affiliate_meta: AffiliateMeta;
    employee_discount?: number;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    loyalty_discount?: number;
};
type Attributes = {
    name?: string;
    primary_color_hex?: string;
    brand_name?: string;
    primary_color?: string;
    marketer_address?: string;
    gender?: string[];
    essential?: string;
    primary_material?: string;
    marketer_name?: string;
};
type Item = {
    name: string;
    image: string[];
    webstore_product_url?: string;
    gender?: string;
    last_updated_at?: string;
    brand_id: number;
    l2_category?: string[];
    l3_category?: number;
    can_return?: boolean;
    item_id: number;
    meta?: any;
    can_cancel?: boolean;
    department_id?: number;
    branch_url?: string;
    size: string;
    color?: string;
    l1_category?: string[];
    slug_key: string;
    attributes: Attributes;
    code?: string;
    l1_category_id?: number;
    l3_category_name?: string;
    brand: string;
    l2_category_id?: number;
};
type BagDetailsPlatformResponse = {
    line_number?: number;
    tags?: string[];
    shipment_id?: string;
    prices: Prices;
    original_bag_list?: number[];
    parent_promo_bags?: any;
    qc_required?: any;
    bag_update_time?: number;
    seller_identifier?: string;
    meta?: BagMeta;
    bag_status: BagStatusHistory[];
    current_operational_status: BagStatusHistory;
    reasons?: any[];
    restore_coupon?: boolean;
    operational_status?: string;
    quantity?: number;
    current_status: BagStatusHistory;
    affiliate_details?: AffiliateDetails;
    no_of_bags_order?: number;
    bag_status_history?: BagStatusHistory;
    applied_promos?: any[];
    display_name?: string;
    dates?: Dates;
    journey_type: string;
    financial_breakup: FinancialBreakup[];
    b_type?: string;
    order_integration_id?: string;
    article_details?: ArticleDetails;
    gst_details: BagGSTDetails;
    ordering_store?: Store;
    restore_promos?: any;
    article: Article;
    brand: Brand;
    status: BagReturnableCancelableStatus;
    identifier?: string;
    entity_type?: string;
    affiliate_bag_details: AffiliateBagDetails;
    b_id: number;
    item: Item;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    current: number;
    page_type: string;
    item_total: number;
    size: number;
    has_next: boolean;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    message?: string;
    shipment_id?: string;
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
    set_id?: string;
    fynd_order_id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    item_id?: string;
    store_id: number;
    reason_ids?: number[];
    bag_id?: number;
    mongo_article_id?: string;
    affiliate_bag_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    reason_text: string;
    id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    entities: Entities[];
    action_type: string;
    action: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    bag_id?: number;
    affiliate_order_id?: string;
    is_locked?: boolean;
    affiliate_bag_id?: string;
};
type CheckResponse = {
    original_filter?: OriginalFilter;
    bags?: Bags[];
    status?: string;
    affiliate_id?: string;
    lock_status?: boolean;
    is_shipment_locked?: boolean;
    shipment_id?: string;
    affiliate_shipment_id?: string;
    is_bag_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    message?: string;
    check_response?: CheckResponse[];
    success?: boolean;
};
type AnnouncementResponse = {
    platform_id?: string;
    from_datetime?: string;
    description?: string;
    id: number;
    platform_name?: string;
    logo_url?: string;
    company_id?: number;
    created_at?: string;
    to_datetime?: string;
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
type Products = {
    identifier?: string;
    quantity?: number;
    line_number?: number;
};
type ShipmentsRequest = {
    identifier: string;
    reasons?: ReasonsData;
    data_updates?: DataUpdates;
    products?: Products[];
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    status?: string;
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    force_transition?: boolean;
    task?: boolean;
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    status?: number;
    code?: string;
    stack_trace?: string;
    exception?: string;
    message?: string;
    final_state?: any;
    identifier?: string;
    meta?: any;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    updated_at: string;
    secret: string;
    description?: string;
    id: string;
    name: string;
    created_at: string;
    owner: string;
    meta?: AffiliateAppConfigMeta[];
    token: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    inventory?: AffiliateInventoryStoreConfig;
    payment?: AffiliateInventoryPaymentConfig;
    order?: AffiliateInventoryOrderConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    id: string;
    config?: AffiliateConfig;
    token: string;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    create_user?: boolean;
    affiliate: Affiliate;
    article_lookup?: string;
    store_lookup?: string;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    modified_on: string;
    unit_price: number;
    affiliate_meta: any;
    affiliate_store_id: string;
    amount_paid: number;
    transfer_price: number;
    discount: number;
    price_marked: number;
    company_id: number;
    pdf_links?: MarketPlacePdf;
    hsn_code_id: string;
    item_size: string;
    sku: string;
    avl_qty: number;
    fynd_store_id: string;
    delivery_charge: number;
    quantity: number;
    _id: string;
    seller_identifier: string;
    item_id: number;
    store_id: number;
    identifier: any;
    price_effective: number;
};
type ArticleDetails1 = {
    _id: string;
    quantity: number;
    category: any;
    brand_id: number;
    weight: any;
    attributes: any;
    dimension: any;
};
type ShipmentDetails = {
    fulfillment_id: number;
    articles: ArticleDetails1[];
    shipments: number;
    box_type?: string;
    affiliate_shipment_id: string;
    dp_id?: number;
    meta?: any;
};
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentConfig = {
    journey: string;
    shipment: ShipmentDetails[];
    source: string;
    location_details?: LocationDetails;
    action: string;
    to_pincode: string;
    payment_mode: string;
    identifier: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderUser = {
    pincode: string;
    mobile: number;
    address2?: string;
    first_name: string;
    phone: number;
    address1?: string;
    email: string;
    country: string;
    state: string;
    city: string;
    last_name: string;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type OrderInfo = {
    items: any;
    coupon?: string;
    bags: AffiliateBag[];
    discount: number;
    shipment?: ShipmentData;
    shipping_address: OrderUser;
    affiliate_order_id?: string;
    delivery_charges: number;
    cod_charges: number;
    payment_mode: string;
    payment?: any;
    order_priority?: OrderPriority;
    user: UserData;
    order_value: number;
    billing_address: OrderUser;
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
    id: number;
    description: string;
    display_text: string;
    slug: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    ticket_id?: string;
    l1_detail?: string;
    l2_detail?: string;
    ticket_url?: string;
    createdat: string;
    message: string;
    user: string;
    bag_id?: number;
    l3_detail?: string;
    type: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    brand_name: string;
    order_id: string;
    phone_number: number;
    customer_name: string;
    message: string;
    payment_mode: string;
    shipment_id: number;
    amount_paid: number;
    country_code: string;
};
type SendSmsPayload = {
    bag_id: number;
    data?: SmsDataPayload;
    slug: string;
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
};
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    status?: string;
    id: number;
    meta: Meta;
    shipment_id?: string;
    bag_list?: number[];
    remarks?: string;
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
    shipment_ids?: string[];
    qc_required: string;
    dp_id: number;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type ShippingInfo = {
    pincode: string;
    state_code?: string;
    primary_mobile_number: string;
    city: string;
    last_name?: string;
    landmark?: string;
    primary_email: string;
    shipping_type?: string;
    middle_name?: string;
    geo_location?: any;
    gender?: string;
    address1: string;
    house_no?: string;
    floor_no?: string;
    alternate_email?: string;
    address_type?: string;
    address2?: string;
    title?: string;
    first_name: string;
    customer_code?: string;
    external_customer_code?: string;
    state: string;
    slot?: any[];
    alternate_mobile_number?: string;
    country: string;
    country_code?: string;
};
type Tax = {
    name: string;
    breakup?: any[];
    rate: number;
    amount: any;
};
type Charge = {
    amount: any;
    name: string;
    tax?: Tax;
    code?: string;
    type: string;
};
type LineItem = {
    quantity?: number;
    seller_identifier: string;
    meta?: any;
    custom_messasge?: string;
    external_line_id?: string;
    charges?: Charge[];
};
type ProcessingDates = {
    customer_pickup_slot?: any;
    pack_by_date?: string;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
    confirm_by_date?: string;
};
type Shipment = {
    line_items: LineItem[];
    external_shipment_id?: string;
    location_id: number;
    processing_dates?: ProcessingDates;
    meta?: any;
    priority?: number;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type PaymentMethod = {
    amount: number;
    name: string;
    mode: string;
    meta?: any;
    refund_by: string;
    collect_by: string;
    transaction_data?: any;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type BillingInfo = {
    pincode: string;
    state_code?: string;
    primary_mobile_number: string;
    city: string;
    last_name?: string;
    primary_email: string;
    middle_name?: string;
    gender?: string;
    address1: string;
    house_no?: string;
    floor_no?: string;
    alternate_email?: string;
    address2?: string;
    title?: string;
    first_name: string;
    customer_code?: string;
    external_customer_code?: string;
    state: string;
    alternate_mobile_number?: string;
    country: string;
    country_code?: string;
};
type CreateOrderAPI = {
    currency_info?: any;
    shipping_info: ShippingInfo;
    meta?: any;
    shipments: Shipment[];
    tax_info?: TaxInfo;
    payment_info: PaymentInfo;
    external_creation_date?: string;
    external_order_id?: string;
    charges: Charge[];
    billing_info: BillingInfo;
};
type CreateOrderErrorReponse = {
    request_id?: string;
    status: number;
    stack_trace?: string;
    exception?: string;
    message: string;
    info?: any;
    code?: string;
    meta?: string;
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
    logo_url?: any;
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
    lock_states?: string[];
    payment_info?: CreateChannelPaymentInfo;
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
    message?: string[];
    success?: boolean;
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    order_details?: FyndOrderIdList[];
    end_date: string;
    mobile: number;
    start_date: string;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsData = {
    result?: any;
    _custom_json?: any;
    app_id?: string;
    words?: string[];
    is_active?: boolean;
    uid?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    _custom_json?: any;
    app_id?: string;
    words?: string[];
    is_active?: boolean;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    app_id?: string;
    uid?: string;
    words?: string[];
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type Media = {
    type?: string;
    url?: string;
    aspect_ratio?: string;
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
type AutocompleteResult = {
    logo?: Media;
    display?: string;
    _custom_json?: any;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    app_id?: string;
    words?: string[];
    is_active?: boolean;
    results?: AutocompleteResult[];
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    results?: any[];
};
type ProductBundleItem = {
    product_uid: number;
    min_quantity: number;
    max_quantity: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    allow_remove?: boolean;
};
type GetProductBundleCreateResponse = {
    created_on?: string;
    meta?: any;
    same_store_assignment?: boolean;
    name: string;
    products: ProductBundleItem[];
    modified_on?: string;
    slug: string;
    page_visibility?: string[];
    id?: string;
    modified_by?: any;
    company_id?: number;
    logo?: string;
    created_by?: any;
    is_active: boolean;
    choice: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    created_on?: string;
    meta?: any;
    same_store_assignment?: boolean;
    name: string;
    products: ProductBundleItem[];
    modified_on?: string;
    slug: string;
    page_visibility?: string[];
    modified_by?: any;
    company_id?: number;
    logo?: string;
    created_by?: any;
    is_active: boolean;
    choice: string;
};
type Price = {
    min_marked?: number;
    max_marked?: number;
    currency?: string;
    min_effective?: number;
    max_effective?: number;
};
type Size = {
    display?: string;
    value?: string;
    quantity?: number;
    is_available?: boolean;
};
type LimitedProductData = {
    price?: any;
    quantity?: number;
    item_code?: string;
    images?: string[];
    name?: string;
    slug?: string;
    country_of_origin?: string;
    identifier?: any;
    sizes?: string[];
    short_description?: string;
    uid?: number;
    attributes?: any;
};
type GetProducts = {
    price?: Price;
    min_quantity?: number;
    max_quantity?: number;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    auto_select?: boolean;
    product_uid?: number;
    product_details?: LimitedProductData;
    allow_remove?: boolean;
};
type GetProductBundleResponse = {
    products?: GetProducts[];
    meta?: any;
    name?: string;
    same_store_assignment?: boolean;
    slug?: string;
    page_visibility?: string[];
    company_id?: number;
    logo?: string;
    is_active?: boolean;
    choice?: string;
};
type ProductBundleUpdateRequest = {
    meta?: any;
    same_store_assignment?: boolean;
    name: string;
    products: ProductBundleItem[];
    modified_on?: string;
    slug: string;
    page_visibility?: string[];
    modified_by?: any;
    company_id?: number;
    logo?: string;
    is_active: boolean;
    choice: string;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    created_on?: string;
    subtitle?: string;
    name: string;
    modified_on?: string;
    image?: string;
    brand_id?: number;
    tag?: string;
    title: string;
    description?: string;
    modified_by?: any;
    company_id?: number;
    id?: string;
    active?: boolean;
    guide?: Guide;
    created_by?: any;
};
type SizeGuideResponse = {
    created_on?: string;
    subtitle?: string;
    name?: string;
    modified_on?: string;
    brand_id?: number;
    tag?: string;
    title?: string;
    id?: string;
    modified_by?: any;
    company_id?: number;
    active?: boolean;
    guide?: any;
    created_by?: any;
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
    alt_text?: any;
    is_gift?: boolean;
    seo?: SEOData;
    moq?: MOQData;
    is_cod?: boolean;
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
    increment_unit?: number;
    minimum?: number;
};
type ApplicationItemMeta = {
    alt_text?: any;
    is_gift?: boolean;
    _custom_json?: any;
    seo?: ApplicationItemSEO;
    _custom_meta?: MetaFields[];
    moq?: ApplicationItemMOQ;
    is_cod?: boolean;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    values?: any[];
    data: any[];
};
type PageResponseType = {
    next: number;
    has_next: boolean;
    total_count: number;
    current: number;
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
    name: string;
    slug?: string;
    display_type: string;
    unit?: string;
    logo?: string;
    priority: number;
    is_active: boolean;
};
type AppConfigurationDetail = {
    name?: string;
    slug: string;
    app_id: string;
    template_slugs?: string[];
    is_default: boolean;
    logo?: string;
    priority: number;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    key: string;
    name?: string;
    default_key: string;
    app_id: string;
    is_default: boolean;
    logo?: string;
    priority: number;
    is_active: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    units?: any[];
    key?: string;
    filter_types?: string[];
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
    detail?: any;
    compare?: any;
    similar?: any;
    variant?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationBucketPoints = {
    display?: string;
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    map_values?: any[];
    sort?: string;
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map?: any;
    value?: string;
};
type ConfigurationListingFilterConfig = {
    key: string;
    name?: string;
    type: string;
    value_config?: ConfigurationListingFilterValue;
    logo?: string;
    priority: number;
    is_active: boolean;
    display_name?: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    key: string;
    name?: string;
    logo?: string;
    priority: number;
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
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductConfig = {
    key: string;
    subtitle?: string;
    size?: ProductSize;
    title?: string;
    logo?: string;
    priority: number;
    is_active: boolean;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    key: string;
    name: string;
    size: ProductSize;
    display_type: string;
    logo?: string;
    priority: number;
    is_active: boolean;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppCatalogConfiguration = {
    listing?: ConfigurationListing;
    created_on?: string;
    config_type: string;
    modified_on?: string;
    type?: string;
    app_id: string;
    product?: ConfigurationProduct;
    id?: string;
    modified_by?: any;
    created_by?: any;
    config_id?: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    created_on?: string;
    config_type: string;
    modified_on?: string;
    type?: string;
    app_id: string;
    product?: ConfigurationProduct;
    modified_by?: any;
    created_by?: any;
    config_id?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
    app_id: string;
    product?: GetCatalogConfigurationDetailsProduct;
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
type ProductFiltersKey = {
    name: string;
    display: string;
    operators?: string[];
    logo?: string;
    kind?: string;
};
type ProductFiltersValue = {
    query_format?: string;
    selected_max?: number;
    currency_code?: string;
    count?: number;
    min?: number;
    max?: number;
    display: string;
    selected_min?: number;
    currency_symbol?: string;
    is_selected: boolean;
    value: any;
    display_format?: string;
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
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type CollectionQuery = {
    value: any[];
    op: string;
    attribute: string;
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
type GetCollectionDetailNest = {
    _schedule?: any;
    name?: string;
    slug?: string;
    badge?: any;
    logo?: Media1;
    priority?: number;
    uid?: string;
    meta?: any;
    query?: CollectionQuery[];
    action?: Action;
    allow_facets?: boolean;
    app_id?: string;
    visible_facets_keys?: string[];
    allow_sort?: boolean;
    is_active?: boolean;
    cron?: any;
    type?: string;
    tag?: string[];
    description?: string;
    banners?: ImageUrls;
};
type GetCollectionListingResponse = {
    page?: Page;
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
};
type CollectionSchedule = {
    next_schedule?: NextSchedule[];
    end?: string;
    cron?: string;
    duration?: number;
    start?: string;
};
type UserInfo = {
    user_id?: string;
    username?: string;
    uid?: string;
    email?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CreateCollection = {
    _schedule?: CollectionSchedule;
    name: string;
    slug: string;
    modified_by?: UserInfo;
    badge?: CollectionBadge;
    logo: CollectionImage;
    priority?: number;
    tags?: string[];
    meta?: any;
    query?: CollectionQuery[];
    allow_facets?: boolean;
    _custom_json?: any;
    app_id: string;
    sort_on?: string;
    visible_facets_keys?: string[];
    allow_sort?: boolean;
    _locale_language?: any;
    created_by?: UserInfo;
    is_active?: boolean;
    type: string;
    is_visible?: boolean;
    seo?: SeoDetail;
    description?: string;
    banners: CollectionBanner;
    published?: boolean;
};
type CollectionCreateResponse = {
    _schedule?: any;
    name?: string;
    slug?: string;
    badge?: any;
    logo?: BannerImage;
    priority?: number;
    meta?: any;
    query?: CollectionQuery[];
    allow_facets?: boolean;
    app_id?: string;
    sort_on?: string;
    visible_facets_keys?: string[];
    allow_sort?: boolean;
    is_active?: boolean;
    cron?: any;
    type?: string;
    tag?: string[];
    description?: string;
    banners?: ImageUrls;
};
type CollectionDetailResponse = {
    priority?: number;
    query?: CollectionQuery[];
    name?: string;
    allow_sort?: boolean;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    cron?: any;
    type?: string;
    _schedule?: any;
    app_id?: string;
    slug?: string;
    tag?: string[];
    description?: string;
    badge?: any;
    logo?: Media1;
    banners?: ImageUrls;
    meta?: any;
    is_active?: boolean;
};
type UpdateCollection = {
    _schedule?: CollectionSchedule;
    name?: string;
    slug?: string;
    modified_by?: UserInfo;
    badge?: CollectionBadge;
    logo?: CollectionImage;
    priority?: number;
    tags?: string[];
    meta?: any;
    query?: CollectionQuery[];
    allow_facets?: boolean;
    _custom_json?: any;
    sort_on?: string;
    visible_facets_keys?: string[];
    allow_sort?: boolean;
    _locale_language?: any;
    is_active?: boolean;
    type?: string;
    is_visible?: boolean;
    seo?: SeoDetail;
    description?: string;
    banners?: CollectionBanner;
    published?: boolean;
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
type Price1 = {
    min?: number;
    currency_symbol?: string;
    currency_code?: string;
    max?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductBrand = {
    logo?: Media1;
    action?: Action;
    name?: string;
    uid?: number;
};
type ProductListingDetail = {
    rating?: number;
    discount?: string;
    name?: string;
    item_code?: string;
    slug: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    similars?: string[];
    uid?: number;
    attributes?: any;
    price?: ProductListingPrice;
    promo_meta?: any;
    item_type?: string;
    medias?: Media1[];
    brand?: ProductBrand;
    highlights?: string[];
    rating_count?: number;
    has_variant?: boolean;
    sellable?: boolean;
    teaser_tag?: any;
    tryouts?: string[];
    type?: string;
    description?: string;
    short_description?: string;
    color?: string;
    image_nature?: string;
};
type GetCollectionItemsResponse = {
    page?: Page;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    type?: string;
    item?: ItemQueryForUserCollection[];
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type CatalogInsightItem = {
    sellable_count?: number;
    out_of_stock_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    total_articles?: number;
    available_sizes?: number;
    article_freshness?: number;
    name?: string;
    available_articles?: number;
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
    brand_ids?: number[];
    opt_level: string;
    platform?: string;
    store_ids?: number[];
    company_id?: number;
    enabled?: boolean;
};
type CompanyOptIn = {
    created_on: number;
    brand_ids: number[];
    modified_on: number;
    opt_level: string;
    platform: string;
    created_by?: any;
    store_ids: number[];
    modified_by?: any;
    company_id: number;
    enabled: boolean;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    business_type?: string;
    company_type?: string;
    name?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    total_article?: number;
    company_id?: number;
    brand_name?: string;
    brand_id?: number;
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
    additional_contacts?: any[];
    created_on?: string;
    name?: string;
    modified_on?: string;
    store_code?: string;
    address?: any;
    company_id?: number;
    documents?: any[];
    timing?: any;
    store_type?: string;
    manager?: any;
    display_name?: string;
    uid?: number;
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
type AttributeMasterFilter = {
    priority?: number;
    indexing: boolean;
    depends_on?: string[];
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    mandatory?: boolean;
    type: string;
    multi?: boolean;
    allowed_values?: string[];
    range?: AttributeSchemaRange;
    format?: string;
};
type GenderDetail = {
    meta?: AttributeMasterMeta;
    logo?: string;
    name?: string;
    slug?: string;
    enabled_for_end_consumer?: boolean;
    id?: string;
    description?: string;
    is_nested?: boolean;
    filters?: AttributeMasterFilter;
    details?: AttributeMasterDetails;
    departments?: string[];
    schema?: AttributeMaster;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    meta?: any;
    message?: string;
    status?: number;
    errors?: any;
    code?: string;
};
type UserSerializer = {
    username?: string;
    user_id?: string;
    contact?: string;
    _id?: string;
    uid?: string;
};
type GetDepartment = {
    created_on?: string;
    synonyms?: string[];
    name?: string;
    modified_on?: string;
    slug?: string;
    priority_order?: number;
    search?: string;
    page_size?: number;
    modified_by?: UserSerializer;
    item_type?: string;
    page_no?: number;
    logo?: string;
    created_by?: UserSerializer;
    is_active?: boolean;
    uid?: number;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    meta?: any;
    message?: string;
    status?: number;
    errors?: any;
    code?: string;
};
type DepartmentCreateUpdate = {
    synonyms?: string[];
    name: string;
    platforms?: any;
    _custom_json?: any;
    priority_order: number;
    slug?: string;
    logo: string;
    _cls?: string;
    tags?: string[];
    is_active?: boolean;
    uid?: number;
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
    user_id: string;
    username: string;
    contact?: string;
};
type DepartmentModel = {
    created_on: string;
    synonyms?: any[];
    name: any;
    modified_on: string;
    _cls?: any;
    _custom_json?: any;
    slug?: any;
    is_active?: boolean;
    priority_order: number;
    verified_by?: UserDetail;
    modified_by?: UserDetail;
    logo: string;
    verified_on?: string;
    created_by?: UserDetail;
    _id?: any;
    uid?: number;
};
type ProductTemplate = {
    created_on?: string;
    name?: string;
    is_archived?: boolean;
    modified_on?: string;
    attributes_schema?: any[];
    slug: string;
    is_physical: boolean;
    tag?: string;
    categories?: string[];
    description?: string;
    modified_by?: any;
    departments?: string[];
    logo?: string;
    is_expirable?: boolean;
    created_by?: any;
    is_active?: boolean;
    attributes?: string[];
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type TemplateDetails = {
    name?: string;
    is_archived?: boolean;
    attributes_schema?: any[];
    slug: string;
    is_physical: boolean;
    tag?: string;
    categories?: string[];
    description?: string;
    id?: string;
    departments?: string[];
    logo?: string;
    is_expirable?: boolean;
    is_active?: boolean;
    attributes?: string[];
};
type Properties = {
    name?: any;
    item_code?: any;
    trader_type?: any;
    slug?: any;
    brand_uid?: any;
    trader?: any;
    tags?: any;
    no_of_boxes?: any;
    currency?: any;
    command?: any;
    country_of_origin?: any;
    size_guide?: any;
    item_type?: any;
    return_config?: any;
    multi_size?: any;
    variants?: any;
    hsn_code?: any;
    highlights?: any;
    teaser_tag?: any;
    category_slug?: any;
    media?: any;
    is_active?: any;
    custom_order?: any;
    is_dependent?: any;
    product_publish?: any;
    product_group_tag?: any;
    description?: any;
    sizes?: any;
    short_description?: any;
};
type GlobalValidation = {
    type?: string;
    properties?: Properties;
    definitions?: any;
    title?: string;
    description?: string;
    required?: string[];
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
    hsn_code?: string[];
    country_of_origin?: string[];
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type ProductDownloadItemsData = {
    type?: string;
    brand?: string[];
    templates?: string[];
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    seller_id?: number;
    trigger_on?: string;
    data?: ProductDownloadItemsData;
    task_id?: string;
    status?: string;
    completed_on?: string;
    id?: string;
    template_tags?: any;
    url?: string;
    created_by?: VerifiedBy;
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
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type Media2 = {
    logo: string;
    landscape: string;
    portrait: string;
};
type Category = {
    tryouts?: string[];
    created_on?: string;
    synonyms?: string[];
    name: string;
    marketplaces?: CategoryMapping;
    modified_on?: string;
    slug?: string;
    level: number;
    is_active: boolean;
    hierarchy?: Hierarchy[];
    id?: string;
    modified_by?: any;
    departments: number[];
    priority?: number;
    created_by?: any;
    media?: Media2;
    uid?: number;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    tryouts?: string[];
    synonyms?: string[];
    name: string;
    marketplaces?: CategoryMapping;
    slug?: string;
    level: number;
    is_active: boolean;
    hierarchy?: Hierarchy[];
    departments: number[];
    priority?: number;
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
    success?: boolean;
    message?: string;
};
type NetQuantity = {
    value?: number;
    unit?: string;
};
type Image = {
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type Logo = {
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: string;
};
type Product = {
    name?: string;
    item_code?: string;
    l3_mapping?: string[];
    slug?: string;
    is_set?: boolean;
    modified_by?: any;
    company_id?: number;
    net_quantity?: NetQuantity;
    brand_uid?: number;
    tags?: string[];
    trader?: any[];
    uid?: number;
    attributes?: any;
    no_of_boxes?: number;
    tax_identifier?: any;
    currency?: string;
    _custom_json?: any;
    is_image_less_product?: boolean;
    is_physical?: boolean;
    country_of_origin?: string;
    category_uid?: number;
    size_guide?: string;
    stage?: string;
    verified_by?: VerifiedBy;
    item_type?: string;
    departments?: number[];
    all_sizes?: any[];
    return_config?: ReturnConfig;
    multi_size?: boolean;
    category?: any;
    created_on?: string;
    variants?: any;
    hsn_code?: string;
    images?: Image[];
    brand?: Brand;
    highlights?: string[];
    variant_media?: any;
    teaser_tag?: any;
    category_slug?: string;
    is_expirable?: boolean;
    created_by?: any;
    media?: Media1[];
    is_active?: boolean;
    primary_color?: string;
    all_company_ids?: number[];
    custom_order?: any;
    is_dependent?: boolean;
    modified_on?: string;
    all_identifiers?: string[];
    variant_group?: any;
    template_tag?: string;
    product_publish?: ProductPublished;
    id?: string;
    description?: string;
    sizes?: any[];
    product_group_tag?: string[];
    moq?: any;
    short_description?: string;
    pending?: string;
    verified_on?: string;
    color?: string;
    image_nature?: string;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type NetQuantity1 = {
    value?: number;
    unit?: any;
};
type Trader = {
    type?: string;
    address?: string[];
    name: any;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code_id?: string;
    hsn_code?: string;
};
type ReturnConfig1 = {
    returnable: boolean;
    unit: string;
    time: number;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductCreateUpdateSchemaV2 = {
    name: string;
    item_code: string;
    slug: string;
    is_set?: boolean;
    company_id: number;
    net_quantity?: NetQuantity1;
    brand_uid: number;
    trader: Trader[];
    requester?: string;
    uid?: number;
    tags?: string[];
    no_of_boxes?: number;
    attributes: any;
    tax_identifier: TaxIdentifier;
    action?: string;
    currency: string;
    _custom_json?: any;
    is_image_less_product?: boolean;
    country_of_origin: string;
    size_guide?: string;
    item_type: string;
    departments: number[];
    return_config: ReturnConfig1;
    multi_size?: boolean;
    variants?: any;
    change_request_id?: any;
    highlights?: string[];
    bulk_job_id?: string;
    variant_media?: any;
    teaser_tag?: TeaserTag;
    category_slug: string;
    media?: Media1[];
    is_active?: boolean;
    custom_order?: CustomOrder;
    is_dependent?: boolean;
    variant_group?: any;
    template_tag: string;
    product_publish?: ProductPublish;
    product_group_tag?: string[];
    description?: string;
    sizes: any[];
    short_description?: string;
};
type ProductVariants = {
    name?: string;
    item_code?: string;
    category_uid?: number;
    brand_uid?: number;
    media?: Media1[];
    uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    name?: string;
    slug: string;
    variant?: boolean;
    is_nested?: boolean;
    modified_by?: any;
    logo?: string;
    schema: AttributeMaster;
    tags?: string[];
    unit?: string;
    departments: string[];
    suggestion?: string;
    created_on?: string;
    synonyms?: any;
    created_by?: any;
    modified_on?: string;
    enabled_for_end_consumer?: boolean;
    description?: string;
    filters: AttributeMasterFilter;
    raw_key?: string;
    details: AttributeMasterDetails;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ProductCreateUpdate = {
    name: any;
    item_code: any;
    slug: string;
    is_set?: boolean;
    company_id: number;
    net_quantity?: NetQuantity1;
    brand_uid: number;
    trader: Trader[];
    requester?: string;
    uid?: number;
    tags?: string[];
    no_of_boxes?: number;
    tax_identifier: TaxIdentifier;
    action?: string;
    currency: string;
    _custom_json?: any;
    is_image_less_product?: boolean;
    country_of_origin: string;
    size_guide?: string;
    item_type: string;
    departments: number[];
    return_config: ReturnConfig1;
    multi_size?: boolean;
    variants?: any;
    change_request_id?: any;
    highlights?: string[];
    bulk_job_id?: string;
    variant_media?: any;
    teaser_tag?: TeaserTag;
    category_slug: string;
    media?: Media1[];
    is_active?: boolean;
    custom_order?: CustomOrder;
    is_dependent?: boolean;
    variant_group?: any;
    template_tag: string;
    product_publish?: ProductPublish;
    product_group_tag?: string[];
    description?: string;
    short_description?: string;
};
type ValidateIdentifier = {
    gtin_type: string;
    gtin_value: string;
    primary?: boolean;
};
type AllSizes = {
    identifiers?: ValidateIdentifier[];
    size: any;
    item_weight: number;
    item_weight_unit_of_measure: any;
    item_length: number;
    item_width: number;
    item_height: number;
    item_dimensions_unit_of_measure: string;
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
    created_on?: string;
    template?: ProductTemplate;
    succeed?: number;
    modified_on?: string;
    template_tag?: string;
    cancelled?: number;
    stage?: string;
    cancelled_records?: string[];
    failed_records?: string[];
    modified_by?: UserDetail1;
    company_id?: number;
    file_path?: string;
    total?: number;
    failed?: number;
    created_by?: UserDetail1;
    is_active?: boolean;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    user_id?: string;
    username?: string;
    uid?: string;
    email?: string;
};
type BulkJob = {
    created_on: string;
    succeed?: number;
    modified_on?: string;
    template_tag?: string;
    cancelled?: number;
    cancelled_records?: any[];
    failed_records?: any[];
    stage?: string;
    modified_by?: UserInfo1;
    company_id: number;
    file_path?: string;
    total?: number;
    custom_template_tag?: string;
    failed?: number;
    created_by?: UserInfo1;
    is_active?: boolean;
    tracking_url?: string;
};
type BulkResponse = {
    created_on: string;
    batch_id: string;
    modified_on?: string;
    modified_by?: UserInfo1;
    created_by?: UserInfo1;
    is_active?: boolean;
};
type BulkProductRequest = {
    template_tag: string;
    company_id: number;
    data: any[];
    batch_id: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type UserCommon = {
    company_id?: number;
    user_id?: string;
    username?: string;
};
type Items = {
    created_on?: string;
    succeed?: number;
    modified_on?: string;
    cancelled?: number;
    retry?: number;
    cancelled_records?: string[];
    failed_records?: string[];
    stage?: string;
    modified_by?: UserCommon;
    company_id?: number;
    file_path?: string;
    total?: number;
    id?: string;
    failed?: number;
    created_by?: UserCommon;
    is_active?: boolean;
    tracking_url?: string;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    url: string;
    company_id?: number;
    user: any;
};
type ProductSizeDeleteDataResponse = {
    size?: string;
    item_id?: number;
    company_id?: number;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    price?: number;
    price_effective?: number;
    identifiers?: any;
    price_transfer?: number;
    quantity?: number;
    currency?: string;
    size?: string;
    item_id?: number;
    inventory_updated_on?: string;
    sellable_quantity?: number;
    store?: any;
    seller_identifier?: string;
    uid?: string;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type ItemQuery = {
    brand_uid?: number;
    item_code?: string;
    uid?: number;
};
type GTIN = {
    gtin_type: string;
    gtin_value: any;
    primary?: boolean;
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
type InvSize = {
    price_effective: number;
    price?: number;
    price_transfer?: number;
    identifiers: GTIN[];
    quantity: number;
    currency: string;
    size: any;
    item_weight?: number;
    set?: InventorySet;
    item_weight_unit_of_measure?: string;
    store_code: string;
    is_set?: boolean;
    item_width?: number;
    item_length?: number;
    item_height?: number;
    expiration_date?: string;
    item_dimensions_unit_of_measure?: string;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type PriceMeta = {
    tp_notes?: any;
    currency: string;
    updated_at?: string;
    marked: number;
    transfer: number;
    effective: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    sellable?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
    damaged?: QuantityBase;
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type ReturnConfig2 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type BrandMeta = {
    id: number;
    name: string;
};
type CompanyMeta = {
    id: number;
};
type WeightResponse = {
    shipping: number;
    is_default: boolean;
    unit: string;
};
type DimensionResponse = {
    height: number;
    length: number;
    unit: string;
    is_default: boolean;
    width: number;
};
type InventorySellerResponse = {
    set?: InventorySet;
    is_set?: boolean;
    modified_by?: UserSerializer;
    trace_id?: string;
    fragile: boolean;
    expiration_date?: string;
    seller_identifier: string;
    trader?: Trader1[];
    fynd_article_code: string;
    uid: string;
    fynd_item_code: string;
    price: PriceMeta;
    added_on_store?: string;
    tax_identifier?: any;
    meta?: any;
    tags?: string[];
    quantities?: Quantities;
    track_inventory?: boolean;
    _custom_json?: any;
    fynd_meta?: any;
    country_of_origin: string;
    stage?: string;
    manufacturer: ManufacturerResponse;
    return_config?: ReturnConfig2;
    brand: BrandMeta;
    company: CompanyMeta;
    total_quantity: number;
    weight: WeightResponse;
    created_by?: UserSerializer;
    is_active?: boolean;
    size: string;
    item_id: number;
    identifier: any;
    raw_meta?: any;
    store: StoreMeta;
    dimension: DimensionResponse;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    created_on?: string;
    succeed?: number;
    modified_on?: string;
    cancelled?: number;
    cancelled_records?: string[];
    failed_records?: string[];
    id?: string;
    modified_by?: any;
    company_id?: number;
    file_path?: string;
    stage?: string;
    total?: number;
    failed?: number;
    created_by?: any;
    is_active?: boolean;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    price_effective?: number;
    price?: number;
    quantity?: number;
    currency?: string;
    store_code: string;
    item_weight_unit_of_measure?: string;
    total_quantity?: number;
    tags?: string[];
    trace_id?: string;
    price_marked?: number;
    expiration_date?: string;
    seller_identifier: string;
    item_dimensions_unit_of_measure?: string;
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    company_id: number;
    batch_id: string;
    user?: any;
};
type InventoryExportJob = {
    seller_id: number;
    trigger_on?: string;
    task_id: string;
    status?: string;
    completed_on?: string;
    url?: string;
    request_params?: any;
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
    status?: string;
    request_params?: any;
};
type Trader2 = {
    type?: string;
    address?: string[];
    name?: string;
};
type PriceArticle = {
    tp_notes?: any;
    currency?: string;
    marked?: number;
    transfer?: number;
    effective?: number;
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
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
type ReturnConfig3 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type CompanyMeta1 = {
    id?: number;
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
type DimensionResponse1 = {
    width?: number;
    height?: number;
    unit?: string;
    length?: number;
};
type GetInventories = {
    inventory_updated_on?: string;
    is_set?: boolean;
    modified_by?: UserSerializer;
    trace_id?: string;
    expiration_date?: string;
    date_meta?: DateMeta;
    seller_identifier?: string;
    tags?: string[];
    trader?: Trader2[];
    uid?: string;
    price?: PriceArticle;
    tax_identifier?: any;
    quantities?: QuantitiesArticle;
    track_inventory?: boolean;
    country_of_origin?: string;
    stage?: string;
    manufacturer?: ManufacturerResponse1;
    return_config?: ReturnConfig3;
    platforms?: any;
    brand?: BrandMeta1;
    total_quantity?: number;
    company?: CompanyMeta1;
    weight?: WeightResponse1;
    created_by?: UserSerializer;
    size?: string;
    item_id?: number;
    id?: string;
    identifier?: any;
    store?: ArticleStoreResponse;
    dimension?: DimensionResponse1;
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
    multivalues?: boolean;
    data?: FilerList[];
};
type InventoryPayload = {
    price_effective?: number;
    total_quantity?: number;
    store_id: number;
    tags?: string[];
    trace_id?: string;
    price_marked?: number;
    expiration_date?: string;
    seller_identifier: string;
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
type PageResponse = {
    size?: number;
    item_total?: number;
    has_next?: boolean;
    has_previous?: boolean;
    current?: string;
};
type HsnCodesObject = {
    hsn_code?: string;
    modified_on?: string;
    threshold2?: number;
    threshold1?: number;
    tax1?: number;
    id?: string;
    company_id?: number;
    tax_on_mrp?: boolean;
    tax2?: number;
    hs2_code?: string;
    tax_on_esp?: boolean;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    hsn_code: string;
    threshold2?: number;
    threshold1: number;
    tax1: number;
    company_id: number;
    tax_on_mrp: boolean;
    tax2?: number;
    hs2_code: string;
    is_active?: boolean;
    uid?: number;
    tax_on_esp?: boolean;
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
    cess?: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    taxes: TaxSlab[];
    created_on?: string;
    hsn_code: string;
    type: string;
    modified_on?: string;
    country_code: string;
    reporting_hsn: string;
    description: string;
    modified_by?: any;
    created_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    discount?: string;
    action?: Action;
    name?: string;
    departments?: string[];
    slug?: string;
    logo?: Media;
    banners?: ImageUrls;
    uid?: number;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    name?: string;
    priority_order?: number;
    slug?: string;
    logo?: Media;
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
    name?: string;
    action?: Action;
    _custom_json?: any;
    slug?: string;
    childs?: any[];
    banners?: ImageUrls;
    uid?: number;
};
type SecondLevelChild = {
    name?: string;
    action?: Action;
    _custom_json?: any;
    slug?: string;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    uid?: number;
};
type Child = {
    name?: string;
    action?: Action;
    _custom_json?: any;
    slug?: string;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    uid?: number;
};
type CategoryItems = {
    action?: Action;
    name?: string;
    slug?: string;
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
    items?: ProductListingDetail[];
    operators?: any;
    filters?: ProductFilters[];
    page: Page;
    sort_on?: ProductSortOn[];
};
type ProductDetail = {
    rating?: number;
    name?: string;
    item_code?: string;
    slug: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    similars?: string[];
    uid?: number;
    attributes?: any;
    promo_meta?: any;
    item_type?: string;
    medias?: Media1[];
    brand?: ProductBrand;
    highlights?: string[];
    rating_count?: number;
    has_variant?: boolean;
    teaser_tag?: any;
    tryouts?: string[];
    type?: string;
    description?: string;
    short_description?: string;
    color?: string;
    image_nature?: string;
};
type InventoryPage = {
    type: string;
    next_id?: string;
    item_total: number;
    has_next?: boolean;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type UserSerializer1 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
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
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    weekday: string;
    opening?: LocationTimingSerializer;
    open: boolean;
};
type GetAddressSerializer = {
    address1?: string;
    country_code?: string;
    address2?: string;
    state?: string;
    pincode?: number;
    latitude?: number;
    longitude?: number;
    country?: string;
    city?: string;
    landmark?: string;
    address_type?: string;
};
type UserSerializer2 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type GetCompanySerializer = {
    created_on?: string;
    name?: string;
    reject_reason?: string;
    modified_on?: string;
    addresses?: GetAddressSerializer[];
    company_type?: string;
    business_type?: string;
    stage?: string;
    verified_by?: UserSerializer2;
    modified_by?: UserSerializer2;
    verified_on?: string;
    created_by?: UserSerializer2;
    uid?: number;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
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
type GetLocationSerializer = {
    name: string;
    modified_by?: UserSerializer1;
    phone_number?: string;
    product_return_config?: ProductReturnConfigSerializer;
    display_name: string;
    uid?: number;
    warnings?: any;
    _custom_json?: any;
    stage?: string;
    verified_by?: UserSerializer1;
    gst_credentials?: InvoiceDetailsSerializer;
    code: string;
    timing?: LocationDayWiseSerializer[];
    verified_on?: string;
    created_on?: string;
    company?: GetCompanySerializer;
    address: GetAddressSerializer;
    integration_type?: LocationIntegrationType;
    created_by?: UserSerializer1;
    modified_on?: string;
    notification_emails?: string[];
    documents?: Document[];
    contact_numbers?: SellerPhoneNumber[];
    store_type?: string;
    manager?: LocationManagerSerializer;
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
    _custom_json?: any;
    app_id: string;
    logo?: string;
    is_active?: boolean;
    uid: number;
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
    enable?: boolean;
    effective_date?: string;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
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
type GetCompanyProfileSerializerResponse = {
    taxes?: CompanyTaxesSerializer[];
    modified_on?: string;
    name?: string;
    _custom_json?: any;
    created_by?: UserSerializer;
    uid: number;
    stage?: string;
    franchise_enabled?: boolean;
    contact_details?: ContactDetails;
    documents?: Document[];
    verified_on?: string;
    created_on?: string;
    warnings?: any;
    business_info?: string;
    mode?: string;
    business_country_info?: BusinessCountryInfo;
    notification_emails?: string[];
    modified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    company_type: string;
    verified_by?: UserSerializer;
    business_type: string;
    business_details?: BusinessDetails;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type CreateUpdateAddressSerializer = {
    country: string;
    address2?: string;
    address_type: string;
    landmark?: string;
    state: string;
    pincode: number;
    address1: string;
    city: string;
    latitude: number;
    country_code?: string;
    longitude: number;
};
type UpdateCompany = {
    taxes?: CompanyTaxesSerializer1[];
    company_type?: string;
    franchise_enabled?: boolean;
    reject_reason?: string;
    name?: string;
    business_type?: string;
    business_info?: string;
    contact_details?: ContactDetails;
    warnings?: any;
    business_details?: BusinessDetails;
    documents?: Document[];
    notification_emails?: string[];
    _custom_json?: any;
    addresses?: CreateUpdateAddressSerializer[];
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
    uid?: number;
    product?: DocumentsObj;
    stage?: string;
    store_documents?: DocumentsObj;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    modified_on?: string;
    name: string;
    slug_key?: string;
    _custom_json?: any;
    created_by?: UserSerializer;
    logo?: string;
    banner?: BrandBannerSerializer;
    uid?: number;
    stage?: string;
    reject_reason?: string;
    description?: string;
    _locale_language?: any;
    verified_on?: string;
    synonyms?: string[];
    created_on?: string;
    warnings?: any;
    mode?: string;
    modified_by?: UserSerializer;
    verified_by?: UserSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    banner?: BrandBannerSerializer;
    uid?: number;
    synonyms?: string[];
    name: string;
    description?: string;
    _locale_language?: any;
    company_id?: number;
    _custom_json?: any;
    brand_tier?: string;
    logo: string;
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
    uid?: number;
    verified_on?: string;
    stage?: string;
    company_type: string;
    created_on?: string;
    modified_on?: string;
    verified_by?: UserSerializer;
    reject_reason?: string;
    name?: string;
    business_type: string;
    details?: CompanyDetails;
    market_channels?: string[];
    business_country_info?: BusinessCountryInfo;
    notification_emails?: string[];
    _custom_json?: any;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
};
type CompanyBrandSerializer = {
    uid?: number;
    verified_on?: string;
    stage?: string;
    created_on?: string;
    modified_on?: string;
    verified_by?: UserSerializer;
    reject_reason?: string;
    warnings?: any;
    company?: CompanySerializer;
    brand?: GetBrandResponseSerializer;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
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
    end_date: string;
    start_date: string;
};
type HolidaySchemaSerializer = {
    holiday_type: string;
    title: string;
    date: HolidayDateSerializer;
};
type LocationSerializer = {
    uid?: number;
    code: string;
    stage?: string;
    contact_numbers?: SellerPhoneNumber[];
    manager?: LocationManagerSerializer;
    name: string;
    warnings?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    documents?: Document[];
    company: number;
    display_name: string;
    timing?: LocationDayWiseSerializer[];
    holiday?: HolidaySchemaSerializer[];
    notification_emails?: string[];
    store_type?: string;
    _custom_json?: any;
    product_return_config?: ProductReturnConfigSerializer;
    address: GetAddressSerializer;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleQuery = {
    size?: string;
    item_id?: number;
    ignored_stores?: number[];
};
type _ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type _AssignStoreArticle = {
    meta?: any;
    group_id?: string;
    query?: _ArticleQuery;
    quantity?: number;
    article_assignment?: _ArticleAssignment;
};
type AssignStoreRequestValidator = {
    store_ids?: number[];
    app_id?: string;
    pincode?: string;
    channel_identifier?: string;
    articles?: _AssignStoreArticle[];
    company_id?: number;
    channel_type?: string;
};
type AssignStoreResponseSerializer = {
    status?: boolean;
    store_pincode?: string;
    meta?: any;
    uid?: string;
    item_id?: number;
    store_id?: number;
    s_city?: string;
    size?: string;
    company_id?: number;
    price_marked?: number;
    quantity?: number;
    price_effective?: number;
    index?: number;
    article_assignment?: _ArticleAssignment;
    _id?: string;
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
type Rule = {
    value?: number;
    min?: number;
    key?: number;
    discount_qty?: number;
    max?: number;
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type RuleDefinition = {
    value_type: string;
    scope?: string[];
    currency_code?: string;
    is_exact?: boolean;
    applicable_on: string;
    calculate_on: string;
    type: string;
    auto_apply?: boolean;
};
type UsesRemaining = {
    total?: number;
    app?: number;
    user?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
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
type Restrictions = {
    uses?: UsesRestriction;
    price_range?: PriceRange;
    user_type?: string;
    bulk_bundle?: BulkBundleRestriction;
    post_order?: PostOrder;
    payments?: any;
    ordering_stores?: number[];
    user_groups?: number[];
    coupon_allowed?: boolean;
    platforms?: string[];
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type Validity = {
    priority?: number;
};
type CouponSchedule = {
    cron?: string;
    duration?: number;
    start?: string;
    next_schedule?: any[];
    end?: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    subtitle?: string;
    description?: string;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    title?: string;
};
type CouponAdd = {
    rule: Rule[];
    tags?: string[];
    identifiers: Identifier;
    validation?: Validation;
    state?: State;
    author?: CouponAuthor;
    date_meta?: CouponDateMeta;
    rule_definition: RuleDefinition;
    restrictions?: Restrictions;
    action?: CouponAction;
    ownership: Ownership;
    code: string;
    validity: Validity;
    _schedule?: CouponSchedule;
    display_meta: DisplayMeta;
    type_slug: string;
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
    rule: Rule[];
    tags?: string[];
    identifiers: Identifier;
    validation?: Validation;
    state?: State;
    author?: CouponAuthor;
    date_meta?: CouponDateMeta;
    rule_definition: RuleDefinition;
    restrictions?: Restrictions;
    action?: CouponAction;
    ownership: Ownership;
    code: string;
    validity: Validity;
    _schedule?: CouponSchedule;
    display_meta: DisplayMeta;
    type_slug: string;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CompareObject = {
    less_than_equals?: number;
    greater_than?: number;
    equals?: number;
    greater_than_equals?: number;
    less_than?: number;
};
type ItemCriteria = {
    item_store?: number[];
    item_brand?: number[];
    item_exclude_sku?: string[];
    cart_unique_item_amount?: CompareObject;
    all_items?: boolean;
    item_exclude_company?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_store?: number[];
    buy_rules?: string[];
    item_sku?: string[];
    item_size?: string[];
    item_category?: number[];
    product_tags?: string[];
    item_company?: number[];
    cart_total?: CompareObject;
    item_exclude_brand?: number[];
    available_zones?: string[];
    item_id?: number[];
    item_exclude_category?: number[];
    item_exclude_id?: number[];
    cart_quantity?: CompareObject;
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
    end?: string;
    start?: string;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
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
    order_quantity?: number;
    uses: UsesRestriction1;
    user_registered?: UserRegistered;
    anonymous_users?: boolean;
    post_order?: PostOrder1;
    user_id?: string[];
    payments?: PromotionPaymentModes[];
    user_groups?: number[];
    platforms?: string[];
};
type DisplayMeta1 = {
    description?: string;
    offer_text?: string;
    name?: string;
    offer_label?: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type DiscountOffer = {
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
    discount_amount?: number;
    apportion_discount?: boolean;
    max_discount_amount?: number;
    discount_price?: number;
    discount_percentage?: number;
    partial_can_ret?: boolean;
    code?: string;
    max_offer_quantity?: number;
};
type DiscountRule = {
    discount_type: string;
    offer: DiscountOffer;
    buy_condition: string;
    item_criteria: ItemCriteria;
};
type PromotionSchedule = {
    cron?: string;
    duration?: number;
    start: string;
    next_schedule?: any[];
    end?: string;
    published: boolean;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionListItem = {
    promo_group: string;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    calculate_on?: string;
    restrictions?: Restrictions1;
    application_id: string;
    code?: string;
    _custom_json?: any;
    display_meta: DisplayMeta1;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    promotion_type: string;
    _schedule?: PromotionSchedule;
    apply_exclusive?: string;
    mode: string;
    apply_priority?: number;
    currency?: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    stackable?: boolean;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    promo_group: string;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    calculate_on?: string;
    restrictions?: Restrictions1;
    application_id: string;
    code?: string;
    _custom_json?: any;
    display_meta: DisplayMeta1;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    promotion_type: string;
    _schedule?: PromotionSchedule;
    apply_exclusive?: string;
    mode: string;
    apply_priority?: number;
    currency?: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    stackable?: boolean;
};
type PromotionUpdate = {
    promo_group: string;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    calculate_on?: string;
    restrictions?: Restrictions1;
    application_id: string;
    code?: string;
    _custom_json?: any;
    display_meta: DisplayMeta1;
    author?: PromotionAuthor;
    discount_rules: DiscountRule[];
    promotion_type: string;
    _schedule?: PromotionSchedule;
    apply_exclusive?: string;
    mode: string;
    apply_priority?: number;
    currency?: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    stackable?: boolean;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    created_on?: string;
    subtitle?: string;
    description?: string;
    is_hidden?: boolean;
    type?: string;
    entity_slug?: string;
    entity_type?: string;
    example?: string;
    title?: string;
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
type CartProductIdentifer = {
    identifier?: string;
};
type ProductPrice = {
    currency_symbol?: string;
    currency_code?: string;
    marked?: number;
    selling?: number;
    effective?: number;
    add_on?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
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
    uid?: number;
    name?: string;
};
type ProductImage = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type CartProduct = {
    brand?: BaseInfo;
    uid?: number;
    type?: string;
    action?: ProductAction;
    slug?: string;
    name?: string;
    net_quantity?: NetQuantity;
    categories?: CategoryInfo[];
    images?: ProductImage[];
};
type ProductAvailability = {
    sizes?: string[];
    deliverable?: boolean;
    out_of_stock?: boolean;
    is_valid?: boolean;
    other_store_quantity?: number;
};
type DiscountRulesApp = {
    offer?: any;
    raw_offer?: any;
    matched_buy_rules?: string[];
    item_criteria?: any;
};
type FreeGiftItem = {
    item_price_details?: any;
    item_brand_name?: string;
    item_name?: string;
    item_id?: number;
    item_slug?: string;
    item_images_url?: string[];
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    quantity?: number;
};
type AppliedPromotion = {
    promotion_name?: string;
    promo_id?: string;
    promotion_group?: string;
    discount_rules?: DiscountRulesApp[];
    buy_rules?: BuyRules[];
    promotion_type?: string;
    amount?: number;
    offer_text?: string;
    article_quantity?: number;
    mrp_promotion?: boolean;
    applied_free_articles?: AppliedFreeArticles[];
};
type BasePrice = {
    currency_symbol?: string;
    currency_code?: string;
    effective?: number;
    marked?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    store?: BaseInfo;
    seller?: BaseInfo;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    price?: ArticlePriceInfo;
    size?: string;
    uid?: string;
    type?: string;
    quantity?: number;
    extra_meta?: any;
};
type CartProductInfo = {
    message?: string;
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
    price?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    product?: CartProduct;
    is_set?: boolean;
    quantity?: number;
    availability?: ProductAvailability;
    discount?: string;
    bulk_offer?: any;
    price_per_unit?: ProductPriceInfo;
    key?: string;
    coupon_message?: string;
    promotions_applied?: AppliedPromotion[];
    article?: ProductArticle;
};
type CouponBreakup = {
    message?: string;
    minimum_cart_value?: number;
    max_discount_value?: number;
    sub_title?: string;
    value?: number;
    is_applied?: boolean;
    description?: string;
    uid?: string;
    coupon_value?: number;
    type?: string;
    code?: string;
    coupon_type?: string;
    title?: string;
};
type DisplayBreakup = {
    currency_symbol?: string;
    message?: string[];
    currency_code?: string;
    value?: number;
    key?: string;
    display?: string;
};
type LoyaltyPoints = {
    description?: string;
    applicable?: number;
    is_applied?: boolean;
    total?: number;
};
type RawBreakup = {
    fynd_cash?: number;
    coupon?: number;
    gst_charges?: number;
    total?: number;
    delivery_charge?: number;
    discount?: number;
    vog?: number;
    cod_charge?: number;
    mrp_total?: number;
    convenience_fee?: number;
    subtotal?: number;
    you_saved?: number;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
};
type OpenApiErrorResponse = {
    message?: string;
    errors?: any;
    success?: boolean;
};
type ShippingAddress = {
    area_code: string;
    email?: string;
    pincode?: number;
    city?: string;
    country?: string;
    state?: string;
    area_code_slug?: string;
    address_type?: string;
    country_code?: string;
    area?: string;
    name?: string;
    meta?: any;
    landmark?: string;
    address?: string;
    phone?: number;
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
    message?: string;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    is_valid?: boolean;
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
    product_id: number;
    cashback_applied: number;
    price_effective: number;
    amount_paid: number;
    price_marked: number;
    quantity?: number;
    coupon_effective_discount: number;
    discount: number;
    employee_discount?: number;
    extra_meta?: any;
    size: string;
    loyalty_discount?: number;
    meta?: CartItemMeta;
    delivery_charges: number;
    cod_charges: number;
    files?: OpenApiFiles[];
};
type OpenApiPlatformCheckoutReq = {
    order_id?: string;
    coupon_code: string;
    coupon?: string;
    shipping_address?: ShippingAddress;
    cart_items: OpenApiOrderItem[];
    comment?: string;
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    currency_code?: string;
    cashback_applied: number;
    coupon_value: number;
    cart_value: number;
    gstin?: string;
    employee_discount?: any;
    loyalty_discount?: number;
    affiliate_order_id?: string;
    delivery_charges: number;
    payment_mode?: string;
    cod_charges: number;
    billing_address: ShippingAddress;
};
type OpenApiCheckoutResponse = {
    message?: string;
    order_id: string;
    success?: boolean;
    order_ref_id?: string;
};
type AbandonedCart = {
    order_id?: string;
    buy_now?: boolean;
    created_on: string;
    uid: number;
    cashback: any;
    comment?: string;
    payment_methods?: any[];
    merge_qty?: boolean;
    _id: string;
    discount?: number;
    gstin?: string;
    fc_index_map?: number[];
    articles: any[];
    meta?: any;
    delivery_charges?: any;
    bulk_coupon_discount?: number;
    cod_charges?: any;
    checkout_mode?: string;
    is_default: boolean;
    fynd_credits?: any;
    pick_up_customer_details?: any;
    coupon?: any;
    is_active?: boolean;
    is_archive?: boolean;
    user_id: string;
    shipments?: any[];
    payments?: any;
    last_modified: string;
    expire_at: string;
    app_id?: string;
    promotion?: any;
    cart_value?: number;
    payment_mode?: string;
};
type AbandonedCartResponse = {
    message?: string;
    page?: Page;
    items?: AbandonedCart[];
    result?: any;
    success?: boolean;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    last_modified?: string;
    message?: string;
    buy_now?: boolean;
    coupon_text?: string;
    restrict_checkout?: boolean;
    delivery_charge_info?: string;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    items?: CartProductInfo[];
    currency?: CartCurrency;
    gstin?: string;
    is_valid?: boolean;
    id?: string;
    comment?: string;
    checkout_mode?: string;
};
type AddProductCart = {
    product_group_tags?: string[];
    article_id?: string;
    item_id?: number;
    parent_item_identifiers?: any;
    store_id?: number;
    seller_id?: number;
    pos?: boolean;
    quantity?: number;
    extra_meta?: any;
    item_size?: string;
    article_assignment?: any;
    display?: string;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    cart?: CartDetailResponse;
    message?: string;
    success?: boolean;
    partial?: boolean;
};
type UpdateProductCart = {
    article_id?: string;
    item_id?: number;
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
    item_index?: number;
    quantity?: number;
    extra_meta?: any;
    item_size?: string;
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
