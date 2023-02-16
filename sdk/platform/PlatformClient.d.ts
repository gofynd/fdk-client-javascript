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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcDetailsRequest, EdcDevice, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceAddUpdateResponse, EdcAddRequest, EdcDeviceListResponse, FilterInfoOption, FiltersInfo, GSTDetailsData, PlatformItem, Prices, BagUnit, ShipmentItemFulFillingStore, PaymentModeInfo, UserDataInfo, ShipmentStatus, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, ShipmentStatusData, UserDetailsData, ShipmentPayments, FulfillingStore, TrackingList, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, OrderBrandName, PlatformDeliveryAddress, BagConfigs, Identifier, FinancialBreakup, OrderBagArticle, BagGST, BagStateMapper, CurrentStatus, OrderBags, OrderDetailsData, DPDetailsData, BagStatusHistory, ShipmentInfoResponse, PlatformShipment, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Dates, BagReturnableCancelableStatus, DebugInfo, ShipmentTimeStamp, LockData, BuyerDetails, Formatted, EInvoice, EinvoiceInfo, ShipmentMeta, PDFLinks, AffiliateMeta, AffiliateDetails, Brand, ArticleDetails, B2BPODetails, BagMeta, Attributes, Item, AffiliateBagDetails, Dimensions, ReturnConfig, Weight, Article, BagGSTDetails, StoreAddress, Document, StoreDocuments, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, Store, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, OrderPriority, UserData, OrderInfo, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, BillingInfo, LineItem, ProcessingDates, Shipment, TaxInfo, ShippingInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, BannerImage, ImageUrls, Media1, CollectionQuery, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionImage, CollectionBanner, UserInfo, CollectionBadge, SeoDetail, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, Price1, ProductListingPrice, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, ReturnConfigResponse, NetQuantityResponse, Image, ProductPublished, Logo, Product, ProductListingResponse, TeaserTag, NetQuantity, TaxIdentifier, CustomOrder, ProductPublish, Trader, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ProductCreateUpdate, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, DimensionResponse, ManufacturerResponse, ReturnConfig1, QuantityBase, Quantities, CompanyMeta, WeightResponse, PriceMeta, BrandMeta, Trader1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, DimensionResponse1, ReturnConfig2, Quantity, QuantitiesArticle, ArticleStoreResponse, CompanyMeta1, WeightResponse1, PriceArticle, BrandMeta1, Trader2, ManufacturerResponse1, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, LocationTimingSerializer, LocationDayWiseSerializer, UserSerializer1, SellerPhoneNumber, ProductReturnConfigSerializer, UserSerializer2, GetAddressSerializer, GetCompanySerializer, LocationManagerSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, ContactDetails, BusinessCountryInfo, Website, BusinessDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validation, CouponAction, RuleDefinition, CouponSchedule, CouponAuthor, Validity, DisplayMetaDict, DisplayMeta, State, Ownership, CouponDateMeta, Rule, BulkBundleRestriction, PostOrder, UsesRemaining, UsesRestriction, PriceRange, PaymentAllowValue, PaymentModes, Restrictions, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, CompareObject, ItemCriteria, PromotionSchedule, Visibility, PromotionAuthor, PromotionDateMeta, DiscountOffer, DiscountRule, DisplayMeta1, Ownership1, PromotionAction, PostOrder1, UsesRemaining1, UsesRestriction1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ProductAvailability, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, ProductPrice, ProductPriceInfo, DiscountRulesApp, Ownership2, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, ProductImage, ActionQuery, ProductAction, CategoryInfo, CartProduct, PromoMeta, CartProductIdentifer, CartProductInfo, DisplayBreakup, RawBreakup, CouponBreakup, LoyaltyPoints, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    app_id: string;
    excluded_fields: string[];
    created: boolean;
    display_fields: string[];
};
type ErrorCodeDescription = {
    description: string;
    success: boolean;
    code: string;
};
type PaymentGatewayConfig = {
    secret: string;
    is_active?: boolean;
    key: string;
    merchant_salt: string;
    config_type: string;
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
    success: boolean;
    error: ErrorCodeAndDescription;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentApp = {
    display_name?: string;
    logos?: PaymentModeLogo;
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    display_name?: string;
    card_issuer?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    cod_limit?: number;
    card_token?: string;
    expired?: boolean;
    fynd_vpa?: string;
    display_priority?: number;
    intent_app_error_list?: string[];
    exp_year?: number;
    cod_limit_per_order?: number;
    name?: string;
    card_type?: string;
    card_isin?: string;
    card_id?: string;
    merchant_code?: string;
    intent_flow?: boolean;
    code?: string;
    card_brand_image?: string;
    remaining_limit?: number;
    card_reference?: string;
    logo_url?: PaymentModeLogo;
    compliant_with_tokenisation_guidelines?: boolean;
    card_name?: string;
    aggregator_name: string;
    nickname?: string;
    intent_app?: IntentApp[];
    card_number?: string;
    card_fingerprint?: string;
    card_brand?: string;
    timeout?: number;
    retry_count?: number;
    exp_month?: number;
};
type RootPaymentMode = {
    aggregator_name?: string;
    is_pay_by_card_pl?: boolean;
    display_name: string;
    save_card?: boolean;
    list?: PaymentModeList[];
    anonymous_enable?: boolean;
    name: string;
    display_priority: number;
    add_card_enabled?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type Payout = {
    more_attributes: any;
    customers: any;
    payouts_aggregators: any[];
    is_active: boolean;
    is_default: boolean;
    transfer_type: string;
    unique_transfer_no: any;
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    pincode?: number;
    account_type: string;
    bank_name?: string;
    ifsc_code: string;
    state?: string;
    account_no?: string;
    account_holder?: string;
    city?: string;
    country?: string;
    branch_name?: string;
};
type PayoutRequest = {
    unique_external_id: string;
    aggregator: string;
    users: any;
    bank_details: PayoutBankDetails;
    is_active: boolean;
    transfer_type: string;
};
type PayoutResponse = {
    success: boolean;
    aggregator: string;
    users: any;
    bank_details: any;
    payouts: any;
    is_active: boolean;
    transfer_type: string;
    created: boolean;
    unique_transfer_no: string;
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
    description: string;
    success: boolean;
    code: string;
};
type BankDetailsForOTP = {
    bank_name: string;
    ifsc_code: string;
    account_no: string;
    account_holder: string;
    branch_name: string;
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
    email: string;
    delights_user_name?: string;
    display_name: string;
    account_no: string;
    transfer_mode: string;
    mobile?: string;
    is_active: boolean;
    branch_name?: string;
    modified_on: string;
    id: number;
    account_holder: string;
    subtitle: string;
    address: string;
    comment?: string;
    beneficiary_id: string;
    bank_name: string;
    ifsc_code: string;
    title: string;
    created_on: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    payment_gateway?: string;
    extra_meta?: any;
    payment_id?: string;
    order_id?: string;
    current_status?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    amount: number;
    mode: string;
    meta?: MultiTenderPaymentMeta;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    success: boolean;
    order_id: string;
    message: string;
};
type PlatformPaymentOptions = {
    payment_selection_lock?: any;
    anonymous_cod?: boolean;
    enabled: boolean;
    mode_of_payment: string;
    cod_amount_limit?: number;
    cod_charges?: number;
    methods: any;
    source: string;
    callback_url?: any;
};
type PlatfromPaymentConfig = {
    success: boolean;
    data: PlatformPaymentOptions;
    message: string;
};
type UpdatePlatformPaymentConfig = {
    payment_selection_lock?: any;
    anonymous_cod?: boolean;
    cod_amount_limit?: number;
    cod_charges?: number;
    methods: any;
};
type CODdata = {
    user_id: string;
    is_active: boolean;
    remaining_limit: number;
    limit: number;
    usages: number;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
};
type SetCODForUserRequest = {
    is_active: boolean;
    merchant_user_id: string;
    mobileno: string;
};
type SetCODOptionResponse = {
    success: boolean;
    message: string;
};
type EdcDetailsRequest = {
    terminal_serial_no: string;
};
type EdcDevice = {
    terminal_serial_no?: string;
    app_id?: string;
    is_active?: boolean;
    device_tag?: string;
    store_id?: number;
    edc_serial_no?: string;
    merchant_store_pos_code?: string;
};
type EdcDeviceDetailsResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcUpdateRequest = {
    device_tag?: string;
    terminal_serial_no: string;
    store_id: number;
    is_active?: string;
};
type EdcDeviceAddUpdateResponse = {
    success: boolean;
};
type EdcAddRequest = {
    terminal_serial_no: string;
    is_active: string;
    device_tag: string;
    store_id: number;
    edc_serial_no: string;
    merchant_store_pos_code: string;
};
type EdcDeviceListResponse = {
    success: boolean;
    device_list: EdcDevice[];
};
type FilterInfoOption = {
    text: string;
    name?: string;
    value?: string;
};
type FiltersInfo = {
    text: string;
    options?: FilterInfoOption[];
    type: string;
    value: string;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    gstin_code: string;
    brand_calculated_amount: number;
    value_of_good: number;
    gst_fee: number;
};
type PlatformItem = {
    l1_category?: string[];
    images?: string[];
    l3_category_name?: string;
    code?: string;
    l3_category?: number;
    id?: number;
    can_cancel?: boolean;
    name?: string;
    size?: string;
    can_return?: boolean;
    image?: string[];
    department_id?: number;
    color?: string;
};
type Prices = {
    tax_collected_at_source?: number;
    refund_amount?: number;
    cod_charges?: number;
    coupon_value?: number;
    delivery_charge?: number;
    discount?: number;
    amount_paid?: number;
    value_of_good?: number;
    promotion_effective_discount?: number;
    price_marked?: number;
    cashback?: number;
    cashback_applied?: number;
    amount_paid_roundoff?: number;
    fynd_credits?: number;
    price_effective?: number;
    refund_credit?: number;
};
type BagUnit = {
    total_shipment_bags: number;
    gst?: GSTDetailsData;
    item?: PlatformItem;
    status: any;
    ordering_channel: string;
    prices?: Prices;
    can_cancel?: boolean;
    item_quantity: number;
    bag_id: number;
    can_return?: boolean;
    shipment_id: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type UserDataInfo = {
    gender?: string;
    is_anonymous_user?: boolean;
    uid?: number;
    email?: string;
    mobile?: string;
    name?: string;
    last_name?: string;
    first_name?: string;
    avis_user_id?: string;
};
type ShipmentStatus = {
    actual_status: string;
    title: string;
    status: string;
    hex_code: string;
    ops_status: string;
};
type ShipmentItem = {
    fulfilling_centre: string;
    application?: any;
    bags?: BagUnit[];
    sla?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    created_at: string;
    total_bags_count: number;
    prices?: Prices;
    payment_mode_info?: PaymentModeInfo;
    id: string;
    channel?: any;
    total_shipments_in_order: number;
    user?: UserDataInfo;
    shipment_created_at: number;
    shipment_status?: ShipmentStatus;
    payment_methods?: any;
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    filters?: FiltersInfo[];
    page?: any;
    items?: ShipmentItem[];
};
type Error = {
    message?: string;
    success?: boolean;
};
type ShipmentStatusData = {
    bag_list?: string[];
    status?: string;
    created_at?: string;
    id?: number;
    shipment_id?: string;
};
type UserDetailsData = {
    phone: string;
    country: string;
    address: string;
    pincode: string;
    email?: string;
    name: string;
    state: string;
    city: string;
};
type ShipmentPayments = {
    mode?: string;
    source?: string;
    logo?: string;
};
type FulfillingStore = {
    phone: string;
    country: string;
    code: string;
    address: string;
    store_name: string;
    pincode: string;
    fulfillment_channel: string;
    id: number;
    state: string;
    meta: any;
    contact_person: string;
    city: string;
};
type TrackingList = {
    text: string;
    time?: string;
    status: string;
    is_passed?: boolean;
    is_current?: boolean;
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
    buy_rules?: BuyRules[];
    amount?: number;
    promotion_type?: string;
    promo_id?: string;
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
    promotion_name?: string;
    article_quantity?: number;
};
type OrderBrandName = {
    logo: string;
    company?: string;
    brand_name: string;
    id: number;
    modified_on?: string;
    created_on: string;
};
type PlatformDeliveryAddress = {
    phone?: string;
    landmark?: string;
    country?: string;
    area?: string;
    latitude?: number;
    longitude?: number;
    created_at?: string;
    updated_at?: string;
    contact_person?: string;
    pincode?: string;
    email?: string;
    address2?: string;
    state?: string;
    version?: string;
    address_category?: string;
    address_type?: string;
    address1?: string;
    city?: string;
};
type BagConfigs = {
    can_be_cancelled: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    allow_force_return: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    gst_tag: string;
    brand_calculated_amount: number;
    amount_paid: number;
    price_marked: number;
    gst_fee: number;
    price_effective: number;
    cod_charges: number;
    delivery_charge: number;
    size: string;
    item_name: string;
    added_to_fynd_cash: boolean;
    identifiers: Identifier;
    tax_collected_at_source?: number;
    coupon_value: number;
    value_of_good: number;
    cashback_applied: number;
    amount_paid_roundoff?: number;
    fynd_credits: number;
    hsn_code: string;
    discount: number;
    total_units: number;
    gst_tax_percentage: number;
    promotion_effective_discount: number;
    cashback: number;
    transfer_price: number;
    coupon_effective_discount: number;
    refund_credit: number;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type BagGST = {
    gstin_code?: string;
    gst_tag?: string;
    gst_tax_percentage?: number;
    value_of_good?: number;
    is_default_hsn_code?: boolean;
    brand_calculated_amount?: number;
    gst_fee?: number;
    hsn_code?: string;
};
type BagStateMapper = {
    bs_id: number;
    app_display_name?: string;
    is_active?: boolean;
    journey_type: string;
    name: string;
    state_type: string;
    app_facing?: boolean;
    display_name: string;
    app_state_name?: string;
    notify_customer?: boolean;
};
type CurrentStatus = {
    delivery_partner_id?: number;
    status?: string;
    updated_at?: number;
    created_at?: string;
    store_id?: number;
    kafka_sync?: boolean;
    bag_id?: number;
    state_id?: number;
    state_type?: string;
    shipment_id?: string;
    bag_state_mapper?: BagStateMapper;
    current_status_id: number;
    delivery_awb_number?: string;
};
type OrderBags = {
    identifier?: string;
    quantity?: number;
    applied_promos?: AppliedPromos[];
    display_name?: string;
    seller_identifier?: string;
    line_number?: number;
    brand?: OrderBrandName;
    parent_promo_bags?: any;
    prices?: Prices;
    can_return?: boolean;
    item?: PlatformItem;
    delivery_address?: PlatformDeliveryAddress;
    can_cancel?: boolean;
    bag_id: number;
    bag_configs?: BagConfigs;
    financial_breakup?: FinancialBreakup;
    article?: OrderBagArticle;
    gst_details?: BagGST;
    entity_type?: string;
    current_status?: CurrentStatus;
};
type OrderDetailsData = {
    cod_charges?: string;
    ordering_channel_logo?: any;
    ordering_channel?: string;
    fynd_order_id: string;
    affiliate_id?: string;
    order_date?: string;
    source?: string;
    tax_details?: any;
    order_value?: string;
};
type DPDetailsData = {
    country?: string;
    gst_tag?: string;
    eway_bill_id?: string;
    awb_no?: string;
    pincode?: string;
    id?: number;
    name?: string;
    track_url?: string;
};
type BagStatusHistory = {
    delivery_partner_id?: number;
    bsh_id?: number;
    status: string;
    updated_at?: string;
    app_display_name?: string;
    created_at?: string;
    store_id?: number;
    reasons?: any[];
    kafka_sync?: boolean;
    forward?: boolean;
    bag_id?: number;
    state_id?: number;
    state_type?: string;
    shipment_id?: string;
    bag_state_mapper?: BagStateMapper;
    display_name?: string;
    delivery_awb_number?: string;
};
type ShipmentInfoResponse = {
    user_agent?: string;
    status?: ShipmentStatusData;
    secured_delivery_flag?: string;
    user_id: string;
    email_id: string;
    mid?: string;
    credit_note_id: string;
    total_items?: number;
    is_packaging_order: boolean;
    child_nodes?: string[];
    total_bags?: number;
    current_shipment_status: any;
    beneficiary_details?: boolean;
    vertical?: string;
    order_type: string;
    shipment_quantity?: number;
    platform_logo: boolean;
    can_break: string;
    delivery_details?: UserDetailsData;
    delivery_slot?: any;
    prices?: Prices;
    operational_status?: string;
    priority_text?: string;
    journey_type?: string;
    payments?: ShipmentPayments;
    status_progress: number;
    coupon?: any;
    custom_meta?: any[];
    enable_dp_tracking?: boolean;
    is_fynd_coupon: boolean;
    can_return?: boolean;
    fulfilling_store?: FulfillingStore;
    refund_details?: any;
    replacement_details?: string;
    tracking_list?: TrackingList[];
    escalation?: any;
    lock_status: string;
    bags?: OrderBags[];
    go_green?: boolean;
    delivery_status: any[];
    refund_text?: string;
    company: any;
    is_fynd_store?: string;
    forward_shipment_status?: any[];
    forward_order_status?: any[];
    bank_data?: any;
    is_pdsr?: string;
    user_info?: any;
    can_cancel?: boolean;
    order?: OrderDetailsData;
    payment_mode?: string;
    packaging_type?: string;
    invoice: any;
    tracking_url: string;
    pay_button?: string;
    items: any[];
    due_date?: string;
    billing_details?: UserDetailsData;
    fyndstore_emp: any;
    dp_details?: DPDetailsData;
    shipment_images?: string[];
    order_status: any;
    enable_tracking?: boolean;
    gst_details?: GSTDetailsData;
    order_created_time?: string;
    bag_status_history?: BagStatusHistory[];
    kirana_store_id?: string;
    is_invoiced: boolean;
    forward_tracking_list?: any[];
    shipment_id: string;
    affiliate_shipment_id: string;
    ordering_store: any;
    shipment_status?: string;
    picked_date?: string;
    is_not_fynd_source: boolean;
};
type PlatformShipment = {
    user_agent?: string;
    status?: ShipmentStatusData;
    total_items?: number;
    total_bags?: number;
    vertical?: string;
    shipment_quantity?: number;
    platform_logo?: string;
    delivery_details?: UserDetailsData;
    delivery_slot?: any;
    prices?: Prices;
    operational_status?: string;
    priority_text?: string;
    journey_type?: string;
    payments?: ShipmentPayments;
    coupon?: any;
    custom_meta?: any[];
    enable_dp_tracking?: boolean;
    fulfilling_store?: FulfillingStore;
    tracking_list?: TrackingList[];
    bags?: OrderBags[];
    order?: OrderDetailsData;
    payment_mode?: string;
    packaging_type?: string;
    billing_details?: UserDetailsData;
    dp_details?: DPDetailsData;
    shipment_images?: string[];
    gst_details?: GSTDetailsData;
    bag_status_history?: BagStatusHistory[];
    shipment_id: string;
    shipment_status?: string;
    picked_date?: string;
};
type OrderMeta = {
    order_platform?: string;
    comment?: string;
    mongo_cart_id?: number;
    files?: any[];
    order_child_entities?: string[];
    currency_symbol?: string;
    employee_id?: number;
    order_tags?: any[];
    payment_type?: string;
    customer_note?: string;
    cart_id?: number;
    extra_meta?: any;
    staff?: any;
    ordering_store?: number;
    order_type?: string;
};
type OrderDict = {
    order_date: string;
    fynd_order_id: string;
    prices?: Prices;
    meta?: OrderMeta;
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
    index?: number;
    value?: string;
    total_items?: number;
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
type PlatformBreakupValues = {
    display?: string;
    name?: string;
    value?: string;
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformOrderItems = {
    breakup_values?: PlatformBreakupValues[];
    channel?: PlatformChannel;
    order_created_time?: string;
    user_info?: UserDataInfo;
    shipments?: PlatformShipment[];
    payment_mode?: string;
    meta?: any;
    order_id?: string;
    total_order_value?: number;
    order_value?: number;
};
type OrderListingResponse = {
    lane?: string;
    total_count?: number;
    page?: Page;
    success?: boolean;
    message?: string;
    items?: PlatformOrderItems[];
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    text: string;
    options?: Options[];
    key: string;
    value: number;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    reason?: string;
    status?: string;
    updated_at?: string;
    awb?: string;
    account_name?: string;
    updated_time?: string;
    last_location_recieved_at?: string;
    raw_status?: string;
    shipment_type?: string;
    meta?: any;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    returned?: FiltersInfo[];
    processed?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    filters?: FiltersInfo[];
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
    report_name?: string;
    report_id?: string;
    report_requested_at?: string;
    s3_key?: string;
    request_details?: any;
    report_type?: string;
    display_name?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    item_id?: string;
    article_id?: string;
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
    error?: NestedErrorSchemaDataSet[];
    identifier?: string;
    trace_id?: string;
    data?: any[];
    success?: boolean;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    invoice_status?: string;
    store_code?: string;
    do_invoice_label_generated: boolean;
    batch_id: string;
    data?: any;
    store_name?: string;
    store_id?: string;
    company_id?: string;
    label?: any;
    invoice?: any;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type URL = {
    url?: string;
};
type FileResponse = {
    operation?: string;
    file_path?: string;
    method?: string;
    upload?: FileUploadResponse;
    tags?: string[];
    size?: number;
    namespace?: string;
    cdn?: URL;
    file_name?: string;
    content_type?: string;
};
type bulkListingData = {
    excel_url?: string;
    total?: number;
    status?: string;
    user_id?: string;
    store_name?: string;
    company_id?: number;
    successful_shipments?: any[];
    processing_shipments?: string[];
    failed_shipments?: any[];
    batch_id?: string;
    user_name?: string;
    store_code?: string;
    processing?: number;
    uploaded_on?: string;
    store_id?: number;
    id?: string;
    successful?: number;
    file_name?: string;
    failed?: number;
};
type BulkListingPage = {
    total?: number;
    type?: string;
    has_previous?: boolean;
    size?: number;
    has_next?: boolean;
    current?: number;
};
type BulkListingResponse = {
    error?: string;
    data?: bulkListingData[];
    success?: boolean;
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
    batch_id?: string;
    total_shipments_count?: number;
    company_id?: string;
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    processing_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    error?: string[];
    failed_records?: string[];
    status?: boolean;
    uploaded_by?: string;
    data?: BulkActionDetailsDataField[];
    user_id?: string;
    uploaded_on?: string;
    success?: string;
    message?: string;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type LockData = {
    lock_message?: string;
    locked?: boolean;
    mto?: boolean;
};
type BuyerDetails = {
    ajio_site_id?: string;
    gstin: string;
    address: string;
    pincode: number;
    name: string;
    state: string;
    city: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type EInvoice = {
    error_message?: string;
    acknowledge_date?: string;
    error_code?: string;
    signed_qr_code?: string;
    acknowledge_no?: number;
    irn?: string;
    signed_invoice?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type ShipmentMeta = {
    store_invoice_updated_date?: string;
    return_details?: any;
    return_affiliate_order_id?: string;
    forward_affiliate_order_id?: string;
    b2c_buyer_details?: any;
    debug_info?: DebugInfo;
    timestamp?: ShipmentTimeStamp;
    order_type?: string;
    return_store_node?: number;
    shipment_volumetric_weight?: number;
    dp_options?: any;
    lock_data?: LockData;
    packaging_name?: string;
    ewaybill_info?: any;
    b2b_buyer_details?: BuyerDetails;
    fulfilment_priority_text?: string;
    po_number?: string;
    forward_affiliate_shipment_id?: string;
    same_store_available: boolean;
    auto_trigger_dp_assignment_acf: boolean;
    box_type?: string;
    marketplace_store_id?: string;
    formatted?: Formatted;
    bag_weight?: any;
    dp_id?: string;
    dp_sort_key?: string;
    assign_dp_from_sb?: boolean;
    return_affiliate_shipment_id?: string;
    due_date?: string;
    shipment_weight?: number;
    einvoice_info?: EinvoiceInfo;
    dp_name?: string;
    weight: number;
    external?: any;
    awb_number?: string;
    return_awb_number?: string;
};
type PDFLinks = {
    invoice_type: string;
    label_a4?: string;
    invoice_a6?: string;
    label_type: string;
    po_invoice?: string;
    invoice_a4?: string;
    label_a6?: string;
    b2b?: string;
    label?: string;
    invoice?: string;
    invoice_pos?: string;
    label_pos?: string;
    credit_note_url?: string;
};
type AffiliateMeta = {
    channel_shipment_id?: string;
    employee_discount?: number;
    channel_order_id?: string;
    size_level_total_qty?: number;
    box_type?: string;
    quantity?: number;
    order_item_id?: string;
    is_priority?: boolean;
    coupon_code?: string;
    loyalty_discount?: number;
    due_date?: string;
};
type AffiliateDetails = {
    affiliate_store_id: string;
    ad_id?: string;
    shipment_meta: ShipmentMeta;
    affiliate_id?: string;
    affiliate_bag_id: string;
    company_affiliate_tag?: string;
    pdf_links?: PDFLinks;
    affiliate_shipment_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
};
type Brand = {
    script_last_ran?: string;
    credit_note_expiry_days?: number;
    logo?: string;
    company: string;
    brand_name: string;
    start_date?: string;
    pickup_location?: string;
    invoice_prefix?: string;
    modified_on?: number;
    is_virtual_invoice?: boolean;
    created_on?: number;
    credit_note_allowed?: boolean;
    brand_id: number;
};
type ArticleDetails = {
    status?: any;
};
type B2BPODetails = {
    item_base_price?: number;
    po_tax_amount?: number;
    docker_number?: string;
    total_gst_percentage?: number;
    po_line_amount?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Attributes = {
    primary_material?: string;
    gender?: string[];
    brand_name?: string;
    primary_color_hex?: string;
    name?: string;
    primary_color?: string;
    essential?: string;
    marketer_name?: string;
    marketer_address?: string;
};
type Item = {
    l3_category_name?: string;
    branch_url?: string;
    item_id: number;
    attributes: Attributes;
    department_id?: number;
    brand: string;
    code?: string;
    l3_category?: number;
    size: string;
    image: string[];
    name: string;
    can_return?: boolean;
    meta?: any;
    l1_category?: string[];
    l1_category_id?: number;
    can_cancel?: boolean;
    color?: string;
    l2_category?: string[];
    gender?: string;
    slug_key: string;
    webstore_product_url?: string;
    l2_category_id?: number;
    last_updated_at?: string;
    brand_id: number;
};
type AffiliateBagDetails = {
    employee_discount?: number;
    affiliate_bag_id: string;
    loyalty_discount?: number;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
};
type Dimensions = {
    height?: number;
    length?: number;
    width?: number;
    unit?: string;
    is_default?: boolean;
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
    child_details?: any;
    _id: string;
    dimensions?: Dimensions;
    code?: string;
    is_set?: boolean;
    raw_meta?: any;
    uid: string;
    return_config?: ReturnConfig;
    weight?: Weight;
    size: string;
    esp_modified?: any;
    a_set?: any;
    seller_identifier: string;
    identifiers: Identifier;
};
type BagGSTDetails = {
    tax_collected_at_source: number;
    igst_tax_percentage: number;
    cgst_gst_fee: string;
    gstin_code?: string;
    gst_tag: string;
    gst_tax_percentage: number;
    value_of_good: number;
    is_default_hsn_code?: boolean;
    brand_calculated_amount: number;
    sgst_tax_percentage: number;
    sgst_gst_fee: string;
    gst_fee: number;
    igst_gst_fee: string;
    hsn_code_id: string;
    cgst_tax_percentage: number;
    hsn_code: string;
};
type StoreAddress = {
    country_code: string;
    version?: string;
    address_category: string;
    city: string;
    phone: string;
    landmark?: string;
    longitude: number;
    area?: string;
    created_at: string;
    pincode: number;
    address_type: string;
    latitude: number;
    contact_person: string;
    address1: string;
    country: string;
    updated_at: string;
    email?: string;
    address2?: string;
    state: string;
};
type Document = {
    legal_name: string;
    url?: string;
    value: string;
    ds_type: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    password?: string;
    username?: string;
    user?: string;
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
type StoreMeta = {
    stage: string;
    documents?: StoreDocuments;
    ewaybill_portal_details?: any;
    timing?: any[];
    product_return_config?: any;
    gst_number?: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    additional_contact_details?: any;
    notification_emails?: string[];
    display_name: string;
    gst_credentials: StoreGstCredentials;
};
type Store = {
    s_id: string;
    company_id: number;
    is_enabled_for_recon?: boolean;
    packaging_material_count?: number;
    fulfillment_channel: string;
    city: string;
    phone: number;
    order_integration_id?: string;
    store_active_from?: string;
    longitude: number;
    code?: string;
    created_at: string;
    pincode: string;
    alohomora_user_id?: number;
    store_address_json?: StoreAddress;
    name: string;
    mall_area?: string;
    is_archived?: boolean;
    meta: StoreMeta;
    latitude: number;
    login_username: string;
    store_email: string;
    contact_person: string;
    address1: string;
    mall_name?: string;
    vat_no?: string;
    brand_store_tags?: string[];
    country: string;
    updated_at?: string;
    location_type: string;
    address2?: string;
    state: string;
    is_active?: boolean;
    parent_store_id?: number;
    brand_id?: any;
};
type BagDetailsPlatformResponse = {
    dates?: Dates;
    identifier?: string;
    status: BagReturnableCancelableStatus;
    quantity?: number;
    affiliate_details?: AffiliateDetails;
    applied_promos?: any[];
    reasons?: any[];
    original_bag_list?: number[];
    bag_update_time?: number;
    display_name?: string;
    line_number?: number;
    seller_identifier?: string;
    order_integration_id?: string;
    brand: Brand;
    parent_promo_bags?: any;
    bag_status: BagStatusHistory[];
    prices: Prices;
    operational_status?: string;
    journey_type: string;
    article_details?: ArticleDetails;
    meta?: BagMeta;
    restore_coupon?: boolean;
    current_operational_status: BagStatusHistory;
    item: Item;
    no_of_bags_order?: number;
    b_type?: string;
    restore_promos?: any;
    financial_breakup: FinancialBreakup[];
    affiliate_bag_details: AffiliateBagDetails;
    qc_required?: any;
    article: Article;
    tags?: string[];
    gst_details: BagGSTDetails;
    bag_status_history?: BagStatusHistory;
    shipment_id?: string;
    entity_type?: string;
    ordering_store?: Store;
    current_status: BagStatusHistory;
    b_id: number;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    size: number;
    page_type: string;
    has_next: boolean;
    item_total: number;
    current: number;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    status?: number;
    error?: string;
    message?: string;
    shipment_id?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    status: number;
    error_trace?: string;
    message: string;
};
type StoreReassign = {
    affiliate_order_id?: string;
    mongo_article_id?: string;
    item_id?: string;
    set_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
    reason_ids?: number[];
    fynd_order_id?: string;
    store_id: number;
    affiliate_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    reason_text: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    id?: string;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    entities: Entities[];
    action_type: string;
    entity_type: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    is_locked?: boolean;
    bag_id?: number;
};
type CheckResponse = {
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    affiliate_shipment_id?: string;
    shipment_id?: string;
    bags?: Bags[];
    status?: string;
    is_shipment_locked?: boolean;
    is_bag_locked?: boolean;
    affiliate_id?: string;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    message?: string;
    check_response?: CheckResponse[];
};
type AnnouncementResponse = {
    description?: string;
    created_at?: string;
    title?: string;
    from_datetime?: string;
    to_datetime?: string;
    company_id?: number;
    platform_id?: string;
    platform_name?: string;
    id: number;
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
    status: boolean;
    call_id: string;
};
type ProductsDataUpdatesFilters = {
    line_number?: number;
    identifier?: string;
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
    line_number?: number;
    identifier?: string;
    quantity?: number;
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
type Products = {
    line_number?: number;
    identifier?: string;
    quantity?: number;
};
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    identifier: string;
    reasons?: ReasonsData;
    products?: Products[];
};
type StatuesRequest = {
    status?: string;
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
    force_transition?: boolean;
    unlock_before_transition?: boolean;
};
type ShipmentsResponse = {
    identifier?: string;
    code?: string;
    message?: string;
    stack_trace?: string;
    exception?: string;
    meta?: any;
    final_state?: any;
    status?: number;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    mobile: number;
    country: string;
    address2?: string;
    pincode: string;
    city: string;
    first_name: string;
    phone: number;
    address1?: string;
    state: string;
    last_name: string;
    email: string;
};
type ArticleDetails1 = {
    _id: string;
    attributes: any;
    weight: any;
    dimension: any;
    quantity: number;
    brand_id: number;
    category: any;
};
type LocationDetails = {
    fulfillment_id: number;
    articles: ArticleDetails1[];
    fulfillment_type: string;
};
type ShipmentDetails = {
    fulfillment_id: number;
    meta?: any;
    shipments: number;
    dp_id?: number;
    box_type?: string;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
};
type ShipmentConfig = {
    action: string;
    identifier: string;
    journey: string;
    source: string;
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
    payment_mode: string;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    price_marked: number;
    item_id: number;
    affiliate_store_id: string;
    company_id: number;
    amount_paid: number;
    sku: string;
    fynd_store_id: string;
    quantity: number;
    unit_price: number;
    delivery_charge: number;
    pdf_links?: MarketPlacePdf;
    discount: number;
    seller_identifier: string;
    avl_qty: number;
    store_id: number;
    _id: string;
    identifier: any;
    price_effective: number;
    transfer_price: number;
    item_size: string;
    affiliate_meta: any;
    modified_on: string;
    hsn_code_id: string;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderInfo = {
    affiliate_order_id?: string;
    discount: number;
    items: any;
    order_value: number;
    delivery_charges: number;
    payment?: any;
    cod_charges: number;
    shipping_address: OrderUser;
    shipment?: ShipmentData;
    billing_address: OrderUser;
    coupon?: string;
    bags: AffiliateBag[];
    payment_mode: string;
    order_priority?: OrderPriority;
    user: UserData;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    secret: string;
    description?: string;
    name: string;
    meta?: AffiliateAppConfigMeta[];
    owner: string;
    token: string;
    updated_at: string;
    id: string;
    created_at: string;
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
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryConfig = {
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
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
type OrderConfig = {
    bag_end_state?: string;
    store_lookup?: string;
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
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
    id: number;
    display_text: string;
    description: string;
    slug: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type PostHistoryData = {
    user_name: string;
    message: string;
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
    message: string;
    l2_detail?: string;
    ticket_url?: string;
    bag_id?: number;
    type: string;
    createdat: string;
    l3_detail?: string;
    user: string;
    l1_detail?: string;
    ticket_id?: string;
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
    message: string;
    phone_number: number;
    shipment_id: number;
    order_id: string;
    payment_mode: string;
    customer_name: string;
    brand_name: string;
    amount_paid: number;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    slug: string;
    bag_id: number;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    shipment_id?: string;
    meta: Meta;
    status?: string;
    id: number;
    bag_list?: number[];
    remarks?: string;
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
    dp_id: number;
    qc_required: string;
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type Tax = {
    breakup?: any[];
    name: string;
    amount: any;
    rate: number;
};
type Charge = {
    code?: string;
    tax?: Tax;
    name: string;
    type: string;
    amount: any;
};
type BillingInfo = {
    country_code?: string;
    address2?: string;
    pincode: string;
    first_name: string;
    middle_name?: string;
    address1: string;
    last_name?: string;
    city: string;
    alternate_mobile_number?: string;
    title?: string;
    state: string;
    external_customer_code?: string;
    gender?: string;
    floor_no?: string;
    state_code?: string;
    country: string;
    house_no?: string;
    primary_email: string;
    customer_code?: string;
    primary_mobile_number: string;
    alternate_email?: string;
};
type LineItem = {
    charges?: Charge[];
    seller_identifier: string;
    quantity?: number;
    meta?: any;
    external_line_id?: string;
    custom_messasge?: string;
};
type ProcessingDates = {
    dp_pickup_slot?: any;
    pack_by_date?: string;
    customer_pickup_slot?: any;
    confirm_by_date?: string;
    dispatch_by_date?: string;
    dispatch_after_date?: string;
};
type Shipment = {
    location_id: number;
    meta?: any;
    priority?: number;
    external_shipment_id?: string;
    line_items: LineItem[];
    processing_dates?: ProcessingDates;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type ShippingInfo = {
    country_code?: string;
    address2?: string;
    pincode: string;
    first_name: string;
    middle_name?: string;
    address1: string;
    last_name?: string;
    shipping_type?: string;
    city: string;
    alternate_mobile_number?: string;
    title?: string;
    state: string;
    external_customer_code?: string;
    address_type?: string;
    gender?: string;
    landmark?: string;
    slot?: any[];
    floor_no?: string;
    state_code?: string;
    country: string;
    house_no?: string;
    primary_email: string;
    geo_location?: any;
    customer_code?: string;
    primary_mobile_number: string;
    alternate_email?: string;
};
type PaymentMethod = {
    name: string;
    collect_by: string;
    meta?: any;
    transaction_data?: any;
    refund_by: string;
    amount: number;
    mode: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type CreateOrderAPI = {
    charges?: Charge[];
    currency_info?: any;
    external_creation_date?: string;
    meta?: any;
    billing_info: BillingInfo;
    shipments: Shipment[];
    tax_info?: TaxInfo;
    external_order_id?: string;
    shipping_info: ShippingInfo;
    payment_info: PaymentInfo;
};
type CreateOrderErrorReponse = {
    request_id?: string;
    code?: string;
    info?: any;
    message: string;
    stack_trace?: string;
    exception?: string;
    meta?: string;
    status: number;
};
type PaymentMethods = {
    collect_by?: string;
    refund_by?: string;
    mode?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    payment_info?: CreateChannelPaymentInfo;
    dp_configuration?: DpConfiguration;
    lock_states?: string[];
    shipment_assignment?: string;
    logo_url?: any;
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
    success?: boolean;
    message?: string[];
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    mobile: number;
    end_date: string;
    start_date: string;
    order_details?: FyndOrderIdList[];
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsData = {
    app_id?: string;
    uid?: string;
    words?: string[];
    is_active?: boolean;
    _custom_json?: any;
    result?: any;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    app_id?: string;
    words?: string[];
    is_active?: boolean;
    _custom_json?: any;
    result: SearchKeywordResult;
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
    url?: string;
    type?: string;
    query?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type AutocompleteResult = {
    _custom_json?: any;
    logo?: Media;
    display?: string;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    words?: string[];
    is_active?: boolean;
    _custom_json?: any;
    results?: AutocompleteResult[];
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    _custom_json?: any;
    app_id?: string;
    words?: string[];
};
type ProductBundleItem = {
    product_uid: number;
    auto_add_to_cart?: boolean;
    min_quantity: number;
    auto_select?: boolean;
    max_quantity: number;
    allow_remove?: boolean;
};
type GetProductBundleCreateResponse = {
    created_on?: string;
    slug: string;
    company_id?: number;
    id?: string;
    meta?: any;
    modified_by?: any;
    logo?: string;
    products: ProductBundleItem[];
    created_by?: any;
    is_active: boolean;
    choice: string;
    page_visibility?: string[];
    modified_on?: string;
    same_store_assignment?: boolean;
    name: string;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    created_on?: string;
    slug: string;
    company_id?: number;
    meta?: any;
    modified_by?: any;
    logo?: string;
    products: ProductBundleItem[];
    created_by?: any;
    is_active: boolean;
    choice: string;
    page_visibility?: string[];
    modified_on?: string;
    same_store_assignment?: boolean;
    name: string;
};
type Size = {
    is_available?: boolean;
    display?: string;
    value?: string;
    quantity?: number;
};
type LimitedProductData = {
    slug?: string;
    identifier?: any;
    uid?: number;
    sizes?: string[];
    short_description?: string;
    item_code?: string;
    images?: string[];
    quantity?: number;
    country_of_origin?: string;
    attributes?: any;
    price?: any;
    name?: string;
};
type Price = {
    min_marked?: number;
    max_marked?: number;
    min_effective?: number;
    currency?: string;
    max_effective?: number;
};
type GetProducts = {
    product_uid?: number;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    min_quantity?: number;
    max_quantity?: number;
    auto_select?: boolean;
    product_details?: LimitedProductData;
    allow_remove?: boolean;
    price?: Price;
};
type GetProductBundleResponse = {
    slug?: string;
    company_id?: number;
    meta?: any;
    logo?: string;
    products?: GetProducts[];
    is_active?: boolean;
    page_visibility?: string[];
    choice?: string;
    same_store_assignment?: boolean;
    name?: string;
};
type ProductBundleUpdateRequest = {
    slug: string;
    company_id?: number;
    meta?: any;
    modified_by?: any;
    logo?: string;
    products: ProductBundleItem[];
    is_active: boolean;
    choice: string;
    page_visibility?: string[];
    modified_on?: string;
    same_store_assignment?: boolean;
    name: string;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    created_on?: string;
    active?: boolean;
    company_id?: number;
    id?: string;
    modified_by?: any;
    created_by?: any;
    guide?: Guide;
    title: string;
    description?: string;
    brand_id?: number;
    subtitle?: string;
    image?: string;
    modified_on?: string;
    tag?: string;
    name: string;
};
type SizeGuideResponse = {
    created_on?: string;
    active?: boolean;
    company_id?: number;
    id?: string;
    modified_by?: any;
    created_by?: any;
    guide?: any;
    brand_id?: number;
    title?: string;
    subtitle?: string;
    modified_on?: string;
    tag?: string;
    name?: string;
};
type SEOData = {
    title?: any;
    description?: any;
};
type MOQData = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    alt_text?: any;
    moq?: MOQData;
    is_cod?: boolean;
    is_gift?: boolean;
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
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    alt_text?: any;
    _custom_meta?: MetaFields[];
    _custom_json?: any;
    moq?: ApplicationItemMOQ;
    is_cod?: boolean;
    is_gift?: boolean;
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
type PageResponseType = {
    current: number;
    total_count: number;
    next: number;
    has_next: boolean;
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
    key?: string;
    display_type: string;
    logo?: string;
    priority: number;
    unit?: string;
    is_active: boolean;
    name: string;
};
type AppConfigurationDetail = {
    slug: string;
    logo?: string;
    app_id: string;
    priority: number;
    is_active: boolean;
    template_slugs?: string[];
    is_default: boolean;
    attributes?: AttributeDetailsGroup[];
    name?: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    key: string;
    logo?: string;
    app_id: string;
    priority: number;
    default_key: string;
    is_active: boolean;
    is_default: boolean;
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
    min: number;
    max: number;
};
type ConfigurationProductVariantConfig = {
    key: string;
    display_type: string;
    logo?: string;
    priority: number;
    size: ProductSize;
    is_active: boolean;
    name: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    key: string;
    logo?: string;
    priority: number;
    title?: string;
    size?: ProductSize;
    is_active: boolean;
    subtitle?: string;
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
    logo?: string;
    priority: number;
    is_active: boolean;
    name?: string;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationBucketPoints = {
    display?: string;
    start?: number;
    end?: number;
};
type ConfigurationListingFilterValue = {
    map_values?: any[];
    sort?: string;
    bucket_points?: ConfigurationBucketPoints[];
    value?: string;
    map?: any;
    condition?: string;
};
type ConfigurationListingFilterConfig = {
    key: string;
    logo?: string;
    priority: number;
    value_config?: ConfigurationListingFilterValue;
    display_name?: string;
    is_active: boolean;
    type: string;
    name?: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type AppCatalogConfiguration = {
    created_on?: string;
    product?: ConfigurationProduct;
    id?: string;
    type?: string;
    modified_by?: any;
    app_id: string;
    created_by?: any;
    config_id?: string;
    listing?: ConfigurationListing;
    modified_on?: string;
    config_type: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    created_on?: string;
    product?: ConfigurationProduct;
    type?: string;
    modified_by?: any;
    app_id: string;
    created_by?: any;
    config_id?: string;
    listing?: ConfigurationListing;
    modified_on?: string;
    config_type: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    product?: GetCatalogConfigurationDetailsProduct;
    id?: string;
    app_id: string;
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersKey = {
    kind?: string;
    operators?: string[];
    logo?: string;
    display: string;
    name: string;
};
type ProductFiltersValue = {
    currency_code?: string;
    is_selected: boolean;
    min?: number;
    currency_symbol?: string;
    query_format?: string;
    max?: number;
    value: any;
    selected_max?: number;
    selected_min?: number;
    display: string;
    count?: number;
    display_format?: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type ProductSortOn = {
    is_selected?: boolean;
    value?: string;
    name?: string;
};
type GetCollectionQueryOptionResponse = {
    operators: any;
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
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
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type GetCollectionDetailNest = {
    banners?: ImageUrls;
    allow_facets?: boolean;
    logo?: Media1;
    priority?: number;
    badge?: any;
    type?: string;
    action?: Action;
    tag?: string[];
    slug?: string;
    is_active?: boolean;
    name?: string;
    allow_sort?: boolean;
    app_id?: string;
    uid?: string;
    cron?: any;
    query?: CollectionQuery[];
    _schedule?: any;
    visible_facets_keys?: string[];
    meta?: any;
    description?: string;
};
type CollectionListingFilterType = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilterTag = {
    display?: string;
    is_selected?: boolean;
    name?: string;
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
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type UserInfo = {
    user_id?: string;
    username?: string;
    email?: string;
    uid?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionSchedule = {
    duration?: number;
    start?: string;
    next_schedule?: NextSchedule[];
    cron?: string;
    end?: string;
};
type CreateCollection = {
    banners: CollectionBanner;
    allow_facets?: boolean;
    tags?: string[];
    modified_by?: UserInfo;
    logo: CollectionImage;
    priority?: number;
    badge?: CollectionBadge;
    type: string;
    slug: string;
    is_visible?: boolean;
    is_active?: boolean;
    _custom_json?: any;
    name: string;
    _locale_language?: any;
    seo?: SeoDetail;
    allow_sort?: boolean;
    app_id: string;
    published?: boolean;
    query?: CollectionQuery[];
    _schedule?: CollectionSchedule;
    sort_on?: string;
    visible_facets_keys?: string[];
    meta?: any;
    created_by?: UserInfo;
    description?: string;
};
type CollectionCreateResponse = {
    banners?: ImageUrls;
    allow_facets?: boolean;
    logo?: BannerImage;
    priority?: number;
    badge?: any;
    type?: string;
    tag?: string[];
    slug?: string;
    is_active?: boolean;
    name?: string;
    allow_sort?: boolean;
    app_id?: string;
    cron?: any;
    query?: CollectionQuery[];
    _schedule?: any;
    sort_on?: string;
    visible_facets_keys?: string[];
    meta?: any;
    description?: string;
};
type CollectionDetailResponse = {
    _schedule?: any;
    query?: CollectionQuery[];
    slug?: string;
    banners?: ImageUrls;
    allow_sort?: boolean;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    meta?: any;
    logo?: Media1;
    app_id?: string;
    priority?: number;
    badge?: any;
    description?: string;
    is_active?: boolean;
    cron?: any;
    type?: string;
    tag?: string[];
    name?: string;
};
type UpdateCollection = {
    banners?: CollectionBanner;
    allow_facets?: boolean;
    tags?: string[];
    modified_by?: UserInfo;
    logo?: CollectionImage;
    priority?: number;
    badge?: CollectionBadge;
    type?: string;
    slug?: string;
    is_visible?: boolean;
    is_active?: boolean;
    _custom_json?: any;
    _locale_language?: any;
    name?: string;
    seo?: SeoDetail;
    allow_sort?: boolean;
    published?: boolean;
    query?: CollectionQuery[];
    _schedule?: CollectionSchedule;
    sort_on?: string;
    visible_facets_keys?: string[];
    meta?: any;
    description?: string;
};
type Price1 = {
    min?: number;
    currency_code?: string;
    currency_symbol?: string;
    max?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductBrand = {
    logo?: Media1;
    uid?: number;
    action?: Action;
    name?: string;
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
    item_type?: string;
    medias?: Media1[];
    short_description?: string;
    similars?: string[];
    teaser_tag?: any;
    product_online_date?: string;
    type?: string;
    has_variant?: boolean;
    rating?: number;
    slug: string;
    discount?: string;
    tryouts?: string[];
    promo_meta?: any;
    sellable?: boolean;
    attributes?: any;
    name?: string;
    image_nature?: string;
    uid?: number;
    price?: ProductListingPrice;
    brand?: ProductBrand;
    color?: string;
    rating_count?: number;
    highlights?: string[];
    description?: string;
    item_code?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
};
type GetCollectionItemsResponse = {
    page?: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    item?: ItemQueryForUserCollection[];
    type?: string;
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightBrand = {
    available_articles?: number;
    name?: string;
    total_sizes?: number;
    total_articles?: number;
    article_freshness?: number;
    available_sizes?: number;
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    count?: number;
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
    brand_ids?: number[];
    company_id?: number;
    enabled?: boolean;
    platform?: string;
    store_ids?: number[];
    opt_level: string;
};
type CompanyOptIn = {
    created_on: number;
    brand_ids: number[];
    company_id: number;
    modified_by?: any;
    created_by?: any;
    enabled: boolean;
    platform: string;
    store_ids: number[];
    modified_on: number;
    opt_level: string;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    company_type?: string;
    uid?: number;
    business_type?: string;
    name?: string;
};
type CompanyBrandDetail = {
    total_article?: number;
    brand_id?: number;
    brand_name?: string;
    company_id?: number;
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
    timing?: any;
    company_id?: number;
    documents?: any[];
    uid?: number;
    display_name?: string;
    store_code?: string;
    manager?: any;
    additional_contacts?: any[];
    store_type?: string;
    modified_on?: string;
    address?: any;
    name?: string;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    range?: AttributeSchemaRange;
    multi?: boolean;
    format?: string;
    mandatory?: boolean;
    allowed_values?: string[];
    type: string;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type AttributeMasterDetails = {
    display_type: string;
};
type GenderDetail = {
    slug?: string;
    id?: string;
    departments?: string[];
    schema?: AttributeMaster;
    meta?: AttributeMasterMeta;
    enabled_for_end_consumer?: boolean;
    logo?: string;
    is_nested?: boolean;
    description?: string;
    filters?: AttributeMasterFilter;
    details?: AttributeMasterDetails;
    name?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    code?: string;
    message?: string;
    meta?: any;
    errors?: any;
    status?: number;
};
type UserSerializer = {
    _id?: string;
    username?: string;
    uid?: string;
    contact?: string;
    user_id?: string;
};
type GetDepartment = {
    created_on?: string;
    synonyms?: string[];
    slug?: string;
    item_type?: string;
    search?: string;
    priority_order?: number;
    page_no?: number;
    logo?: string;
    uid?: number;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    is_active?: boolean;
    page_size?: number;
    modified_on?: string;
    name?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    code?: string;
    message?: string;
    meta?: any;
    errors?: any;
    status?: number;
};
type DepartmentCreateUpdate = {
    synonyms?: string[];
    slug?: string;
    _cls?: string;
    priority_order: number;
    tags?: string[];
    logo: string;
    uid?: number;
    is_active?: boolean;
    platforms?: any;
    _custom_json?: any;
    name: string;
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
    username: string;
    super_user?: boolean;
    contact?: string;
};
type DepartmentModel = {
    created_on: string;
    synonyms?: any[];
    slug?: any;
    _id?: any;
    priority_order: number;
    _cls?: any;
    modified_by?: UserDetail;
    verified_by?: UserDetail;
    uid?: number;
    logo: any;
    created_by?: UserDetail;
    is_active?: boolean;
    _custom_json?: any;
    verified_on?: string;
    modified_on: string;
    name: any;
};
type ProductTemplate = {
    created_on?: string;
    slug: string;
    departments?: string[];
    attributes_schema?: any[];
    modified_by?: any;
    logo?: string;
    created_by?: any;
    modified_on?: string;
    description?: string;
    categories?: string[];
    is_active?: boolean;
    is_physical: boolean;
    is_archived?: boolean;
    is_expirable?: boolean;
    attributes?: string[];
    tag?: string;
    name?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    slug: string;
    id?: string;
    departments?: string[];
    attributes_schema?: any[];
    logo?: string;
    description?: string;
    categories?: string[];
    is_active?: boolean;
    is_physical: boolean;
    is_archived?: boolean;
    is_expirable?: boolean;
    attributes?: string[];
    tag?: string;
    name?: string;
};
type Properties = {
    item_type?: any;
    tags?: any;
    trader_type?: any;
    sizes?: any;
    return_config?: any;
    short_description?: any;
    brand_uid?: any;
    teaser_tag?: any;
    country_of_origin?: any;
    command?: any;
    slug?: any;
    no_of_boxes?: any;
    is_active?: any;
    media?: any;
    name?: any;
    custom_order?: any;
    product_publish?: any;
    hsn_code?: any;
    category_slug?: any;
    currency?: any;
    size_guide?: any;
    variants?: any;
    trader?: any;
    description?: any;
    item_code?: any;
    highlights?: any;
    multi_size?: any;
    product_group_tag?: any;
    is_dependent?: any;
};
type GlobalValidation = {
    definitions?: any;
    title?: string;
    description?: string;
    properties?: Properties;
    type?: string;
    required?: string[];
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
    trigger_on?: string;
    id?: string;
    template_tags?: any;
    status?: string;
    created_by?: VerifiedBy;
    completed_on?: string;
    data?: ProductDownloadItemsData;
    task_id?: string;
    url?: string;
    seller_id?: number;
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
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type Category = {
    created_on?: string;
    synonyms?: string[];
    slug?: string;
    level: number;
    id?: string;
    departments: number[];
    modified_by?: any;
    media?: Media2;
    uid?: number;
    priority?: number;
    created_by?: any;
    tryouts?: string[];
    marketplaces?: CategoryMapping;
    is_active: boolean;
    modified_on?: string;
    hierarchy?: Hierarchy[];
    name: string;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    synonyms?: string[];
    slug?: string;
    level: number;
    departments: number[];
    priority?: number;
    tryouts?: string[];
    marketplaces?: CategoryMapping;
    is_active: boolean;
    hierarchy?: Hierarchy[];
    media?: Media2;
    name: string;
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
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Image = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Logo = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type Product = {
    created_on?: string;
    all_identifiers?: string[];
    item_type?: string;
    tags?: string[];
    departments?: number[];
    variant_group?: any;
    modified_by?: any;
    verified_by?: VerifiedBy;
    sizes?: any[];
    category_uid?: number;
    return_config?: ReturnConfigResponse;
    short_description?: string;
    brand_uid?: number;
    all_company_ids?: number[];
    teaser_tag?: any;
    net_quantity?: NetQuantityResponse;
    country_of_origin?: string;
    slug?: string;
    company_id?: number;
    pending?: string;
    is_image_less_product?: boolean;
    no_of_boxes?: number;
    is_active?: boolean;
    _custom_json?: any;
    images?: Image[];
    tax_identifier?: any;
    is_set?: boolean;
    attributes?: any;
    media?: Media1[];
    variant_media?: any;
    name?: string;
    custom_order?: any;
    product_publish?: ProductPublished;
    modified_on?: string;
    image_nature?: string;
    id?: string;
    hsn_code?: string;
    uid?: number;
    category_slug?: string;
    is_physical?: boolean;
    moq?: any;
    currency?: string;
    category?: any;
    size_guide?: string;
    stage?: string;
    verified_on?: string;
    l3_mapping?: string[];
    variants?: any;
    brand?: Brand;
    template_tag?: string;
    color?: string;
    trader?: any[];
    created_by?: any;
    description?: string;
    item_code?: string;
    highlights?: string[];
    is_expirable?: boolean;
    primary_color?: string;
    multi_size?: boolean;
    all_sizes?: any[];
    product_group_tag?: string[];
    is_dependent?: boolean;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type Trader = {
    address?: string[];
    type?: string;
    name: any;
};
type ProductCreateUpdateSchemaV2 = {
    item_type: string;
    tags?: string[];
    departments: number[];
    variant_group?: any;
    sizes: any[];
    return_config: ReturnConfig;
    brand_uid: number;
    short_description?: string;
    teaser_tag?: TeaserTag;
    net_quantity?: NetQuantity;
    country_of_origin: string;
    action?: string;
    slug: string;
    company_id: number;
    is_image_less_product?: boolean;
    no_of_boxes?: number;
    is_active?: boolean;
    _custom_json?: any;
    tax_identifier: TaxIdentifier;
    is_set?: boolean;
    attributes: any;
    media?: Media1[];
    variant_media?: any;
    name: string;
    change_request_id?: any;
    custom_order?: CustomOrder;
    product_publish?: ProductPublish;
    category_slug: string;
    uid?: number;
    currency: string;
    size_guide?: string;
    bulk_job_id?: string;
    variants?: any;
    template_tag: string;
    trader: Trader[];
    requester?: string;
    description?: string;
    item_code: string;
    highlights?: string[];
    multi_size?: boolean;
    product_group_tag?: string[];
    is_dependent?: boolean;
};
type ProductVariants = {
    uid?: number;
    category_uid?: number;
    brand_uid?: number;
    item_code?: string;
    media?: Media1[];
    name?: string;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    created_on?: string;
    variant?: boolean;
    tags?: string[];
    departments: string[];
    schema: AttributeMaster;
    modified_by?: any;
    logo?: string;
    unit?: string;
    details: AttributeMasterDetails;
    slug: string;
    is_nested?: boolean;
    modified_on?: string;
    name?: string;
    raw_key?: string;
    synonyms?: any;
    enabled_for_end_consumer?: boolean;
    created_by?: any;
    description?: string;
    filters: AttributeMasterFilter;
    suggestion?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ProductCreateUpdate = {
    item_type: string;
    tags?: string[];
    departments: number[];
    variant_group?: any;
    return_config: ReturnConfig;
    brand_uid: number;
    short_description?: string;
    teaser_tag?: TeaserTag;
    net_quantity?: NetQuantity;
    country_of_origin: string;
    action?: string;
    slug: string;
    company_id: number;
    is_image_less_product?: boolean;
    no_of_boxes?: number;
    is_active?: boolean;
    _custom_json?: any;
    tax_identifier: TaxIdentifier;
    is_set?: boolean;
    media?: Media1[];
    variant_media?: any;
    name: any;
    change_request_id?: any;
    custom_order?: CustomOrder;
    product_publish?: ProductPublish;
    category_slug: string;
    uid?: number;
    currency: string;
    size_guide?: string;
    bulk_job_id?: string;
    variants?: any;
    template_tag: string;
    trader: Trader[];
    requester?: string;
    description?: string;
    item_code: any;
    highlights?: string[];
    multi_size?: boolean;
    product_group_tag?: string[];
    is_dependent?: boolean;
};
type ValidateIdentifier = {
    primary?: boolean;
    gtin_value: string;
    gtin_type: string;
};
type AllSizes = {
    identifiers?: ValidateIdentifier[];
    item_weight: number;
    item_height: number;
    size: any;
    item_weight_unit_of_measure: any;
    item_width: number;
    item_length: number;
    item_dimensions_unit_of_measure: string;
};
type ListALLSizes = {
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
    created_on?: string;
    failed_records?: string[];
    succeed?: number;
    company_id?: number;
    failed?: number;
    template_tag?: string;
    total?: number;
    cancelled?: number;
    modified_by?: UserDetail1;
    created_by?: UserDetail1;
    template?: ProductTemplate;
    file_path?: string;
    is_active?: boolean;
    cancelled_records?: string[];
    stage?: string;
    modified_on?: string;
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
    created_on: string;
    failed_records?: any[];
    succeed?: number;
    custom_template_tag?: string;
    company_id: number;
    failed?: number;
    modified_by?: UserInfo1;
    total?: number;
    cancelled?: number;
    template_tag?: string;
    created_by?: UserInfo1;
    file_path?: string;
    is_active?: boolean;
    tracking_url?: string;
    cancelled_records?: any[];
    stage?: string;
    modified_on?: string;
};
type BulkResponse = {
    created_on: string;
    modified_by?: UserInfo1;
    batch_id: string;
    created_by?: UserInfo1;
    is_active?: boolean;
    modified_on?: string;
};
type BulkProductRequest = {
    template_tag: string;
    batch_id: string;
    data: any[];
    company_id: number;
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
    created_on?: string;
    failed_records?: string[];
    succeed?: number;
    retry?: number;
    company_id?: number;
    id?: string;
    failed?: number;
    modified_by?: UserCommon;
    total?: number;
    cancelled?: number;
    created_by?: UserCommon;
    file_path?: string;
    is_active?: boolean;
    tracking_url?: string;
    cancelled_records?: string[];
    stage?: string;
    modified_on?: string;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
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
    identifiers?: any;
    inventory_updated_on?: string;
    store?: any;
    sellable_quantity?: number;
    item_id?: number;
    uid?: string;
    price_effective?: number;
    size?: string;
    quantity?: number;
    currency?: string;
    seller_identifier?: string;
    price?: number;
    price_transfer?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ItemQuery = {
    item_code?: string;
    uid?: number;
    brand_uid?: number;
};
type GTIN = {
    primary?: boolean;
    gtin_value: any;
    gtin_type: string;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    name?: string;
    size_distribution: SizeDistribution;
    quantity?: number;
};
type InvSize = {
    identifiers: GTIN[];
    currency: string;
    item_weight?: number;
    item_height?: number;
    expiration_date?: string;
    price_effective: number;
    store_code: string;
    size: any;
    item_weight_unit_of_measure?: string;
    set?: InventorySet;
    is_set?: boolean;
    item_width?: number;
    item_length?: number;
    quantity: number;
    item_dimensions_unit_of_measure?: string;
    price?: number;
    price_transfer?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type DimensionResponse = {
    width: number;
    unit: string;
    is_default: boolean;
    height: number;
    length: number;
};
type ManufacturerResponse = {
    is_default: boolean;
    address: string;
    name: string;
};
type ReturnConfig1 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    sellable?: QuantityBase;
    order_committed?: QuantityBase;
};
type CompanyMeta = {
    id: number;
};
type WeightResponse = {
    is_default: boolean;
    shipping: number;
    unit: string;
};
type PriceMeta = {
    updated_at?: string;
    effective: number;
    tp_notes?: any;
    marked: number;
    transfer: number;
    currency: string;
};
type BrandMeta = {
    id: number;
    name: string;
};
type Trader1 = {
    address: string[];
    type: string;
    name: string;
};
type InventorySellerResponse = {
    dimension: DimensionResponse;
    manufacturer: ManufacturerResponse;
    tags?: string[];
    modified_by?: UserSerializer;
    expiration_date?: string;
    return_config?: ReturnConfig1;
    size: string;
    quantities?: Quantities;
    country_of_origin: string;
    fragile: boolean;
    identifier: any;
    item_id: number;
    added_on_store?: string;
    is_active?: boolean;
    company: CompanyMeta;
    tax_identifier?: any;
    _custom_json?: any;
    is_set?: boolean;
    uid: string;
    total_quantity: number;
    weight: WeightResponse;
    track_inventory?: boolean;
    set?: InventorySet;
    stage?: string;
    seller_identifier: string;
    price: PriceMeta;
    fynd_item_code: string;
    brand: BrandMeta;
    meta?: any;
    trader?: Trader1[];
    raw_meta?: any;
    fynd_article_code: string;
    created_by?: UserSerializer;
    trace_id?: string;
    fynd_meta?: any;
    store: StoreMeta;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    created_on?: string;
    failed_records?: string[];
    succeed?: number;
    company_id?: number;
    id?: string;
    failed?: number;
    modified_by?: any;
    cancelled?: number;
    total?: number;
    created_by?: any;
    modified_on?: string;
    is_active?: boolean;
    cancelled_records?: string[];
    stage?: string;
    file_path?: string;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    tags?: string[];
    price_marked?: number;
    expiration_date?: string;
    total_quantity?: number;
    item_dimensions_unit_of_measure?: string;
    price_effective?: number;
    store_code: string;
    item_weight_unit_of_measure?: string;
    trace_id?: string;
    quantity?: number;
    currency?: string;
    seller_identifier: string;
    price?: number;
};
type InventoryBulkRequest = {
    batch_id: string;
    sizes: InventoryJobPayload[];
    company_id: number;
    user?: any;
};
type InventoryExportJob = {
    trigger_on?: string;
    status?: string;
    request_params?: any;
    completed_on?: string;
    task_id: string;
    url?: string;
    seller_id: number;
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
    task_id: string;
    seller_id: number;
};
type DimensionResponse1 = {
    height?: number;
    length?: number;
    unit?: string;
    width?: number;
};
type ReturnConfig2 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
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
type ArticleStoreResponse = {
    store_code?: string;
    store_type?: string;
    uid?: number;
    name?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type PriceArticle = {
    effective?: number;
    tp_notes?: any;
    marked?: number;
    transfer?: number;
    currency?: string;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type Trader2 = {
    address?: string[];
    type?: string;
    name?: string;
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    address?: string;
    name?: string;
};
type GetInventories = {
    dimension?: DimensionResponse1;
    tags?: string[];
    modified_by?: UserSerializer;
    expiration_date?: string;
    return_config?: ReturnConfig2;
    size?: string;
    quantities?: QuantitiesArticle;
    country_of_origin?: string;
    inventory_updated_on?: string;
    identifier?: any;
    store?: ArticleStoreResponse;
    item_id?: number;
    company?: CompanyMeta1;
    tax_identifier?: any;
    is_set?: boolean;
    date_meta?: DateMeta;
    id?: string;
    weight?: WeightResponse1;
    total_quantity?: number;
    uid?: string;
    platforms?: any;
    track_inventory?: boolean;
    stage?: string;
    seller_identifier?: string;
    price?: PriceArticle;
    brand?: BrandMeta1;
    trader?: Trader2[];
    created_by?: UserSerializer;
    trace_id?: string;
    manufacturer?: ManufacturerResponse1;
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
    store_id: number;
    tags?: string[];
    price_marked?: number;
    expiration_date?: string;
    total_quantity?: number;
    price_effective?: number;
    trace_id?: string;
    seller_identifier: string;
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
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    tax_on_esp?: boolean;
    hs2_code?: string;
    tax2?: number;
    threshold2?: number;
    company_id?: number;
    id?: string;
    hsn_code?: string;
    tax_on_mrp?: boolean;
    tax1?: number;
    modified_on?: string;
    threshold1?: number;
};
type PageResponse = {
    current?: string;
    has_next?: boolean;
    size?: number;
    has_previous?: boolean;
    item_total?: number;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    tax_on_esp?: boolean;
    hs2_code: string;
    tax2?: number;
    threshold2?: number;
    company_id: number;
    hsn_code: string;
    tax_on_mrp: boolean;
    uid?: number;
    tax1: number;
    is_active?: boolean;
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
    threshold: number;
    rate: number;
    cess?: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    created_on?: string;
    country_code: string;
    reporting_hsn: string;
    hsn_code: string;
    modified_by?: any;
    created_by?: any;
    description: string;
    taxes: TaxSlab[];
    modified_on?: string;
    type: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    slug?: string;
    banners?: ImageUrls;
    departments?: string[];
    logo?: Media;
    uid?: number;
    discount?: string;
    action?: Action;
    name?: string;
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
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
    childs?: any[];
    action?: Action;
    name?: string;
};
type SecondLevelChild = {
    slug?: string;
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
    childs?: ThirdLevelChild[];
    action?: Action;
    name?: string;
};
type Child = {
    slug?: string;
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
    childs?: SecondLevelChild[];
    action?: Action;
    name?: string;
};
type CategoryItems = {
    slug?: string;
    banners?: ImageUrls;
    uid?: number;
    childs?: Child[];
    action?: Action;
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
    page: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
};
type ProductDetail = {
    item_type?: string;
    medias?: Media1[];
    short_description?: string;
    similars?: string[];
    teaser_tag?: any;
    product_online_date?: string;
    type?: string;
    has_variant?: boolean;
    rating?: number;
    slug: string;
    tryouts?: string[];
    promo_meta?: any;
    attributes?: any;
    name?: string;
    image_nature?: string;
    uid?: number;
    brand?: ProductBrand;
    color?: string;
    rating_count?: number;
    highlights?: string[];
    description?: string;
    item_code?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
};
type InventoryPage = {
    next_id?: string;
    has_next?: boolean;
    has_previous?: boolean;
    item_total: number;
    type: string;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
    opening?: LocationTimingSerializer;
};
type UserSerializer1 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type UserSerializer2 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type GetAddressSerializer = {
    country_code?: string;
    landmark?: string;
    address_type?: string;
    state?: string;
    longitude?: number;
    address1?: string;
    latitude?: number;
    city?: string;
    address2?: string;
    pincode?: number;
    country?: string;
};
type GetCompanySerializer = {
    created_on?: string;
    stage?: string;
    modified_by?: UserSerializer2;
    verified_by?: UserSerializer2;
    uid?: number;
    created_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    reject_reason?: string;
    verified_on?: string;
    company_type?: string;
    modified_on?: string;
    business_type?: string;
    name?: string;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    email?: string;
    name?: string;
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
    order?: string;
    inventory?: string;
};
type GetLocationSerializer = {
    created_on?: string;
    timing?: LocationDayWiseSerializer[];
    modified_by?: UserSerializer1;
    verified_by?: UserSerializer1;
    contact_numbers?: SellerPhoneNumber[];
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigSerializer;
    _custom_json?: any;
    company?: GetCompanySerializer;
    modified_on?: string;
    name: string;
    code: string;
    uid?: number;
    manager?: LocationManagerSerializer;
    stage?: string;
    verified_on?: string;
    phone_number?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    integration_type?: LocationIntegrationType;
    warnings?: any;
    documents?: Document[];
    created_by?: UserSerializer1;
    display_name: string;
    store_type?: string;
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
    logo?: string;
    app_id: string;
    uid: number;
    is_active?: boolean;
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
type CompanyTaxesSerializer = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type GetCompanyProfileSerializerResponse = {
    verified_on?: string;
    documents?: Document[];
    contact_details?: ContactDetails;
    notification_emails?: string[];
    modified_by?: UserSerializer;
    name?: string;
    business_country_info?: BusinessCountryInfo;
    verified_by?: UserSerializer;
    business_info?: string;
    uid: number;
    mode?: string;
    business_details?: BusinessDetails;
    stage?: string;
    addresses?: GetAddressSerializer[];
    franchise_enabled?: boolean;
    created_by?: UserSerializer;
    _custom_json?: any;
    modified_on?: string;
    business_type: string;
    created_on?: string;
    warnings?: any;
    taxes?: CompanyTaxesSerializer[];
    company_type: string;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    country_code?: string;
    city: string;
    address2?: string;
    state: string;
    longitude: number;
    pincode: number;
    landmark?: string;
    country: string;
    latitude: number;
    address1: string;
    address_type: string;
};
type UpdateCompany = {
    documents?: Document[];
    franchise_enabled?: boolean;
    business_type?: string;
    contact_details?: ContactDetails;
    notification_emails?: string[];
    business_details?: BusinessDetails;
    warnings?: any;
    reject_reason?: string;
    _custom_json?: any;
    name?: string;
    taxes?: CompanyTaxesSerializer1[];
    addresses?: CreateUpdateAddressSerializer[];
    business_info?: string;
    company_type?: string;
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
    stage?: string;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
    product?: DocumentsObj;
    uid?: number;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    verified_on?: string;
    modified_by?: UserSerializer;
    name: string;
    _locale_language?: any;
    verified_by?: UserSerializer;
    uid?: number;
    mode?: string;
    stage?: string;
    description?: string;
    logo?: string;
    created_by?: UserSerializer;
    _custom_json?: any;
    modified_on?: string;
    created_on?: string;
    warnings?: any;
    banner?: BrandBannerSerializer;
    reject_reason?: string;
    slug_key?: string;
    synonyms?: string[];
};
type CreateUpdateBrandRequestSerializer = {
    description?: string;
    banner?: BrandBannerSerializer;
    _custom_json?: any;
    company_id?: number;
    brand_tier?: string;
    name: string;
    _locale_language?: any;
    synonyms?: string[];
    uid?: number;
    logo: string;
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
    verified_on?: string;
    modified_on?: string;
    stage?: string;
    business_type: string;
    created_on?: string;
    created_by?: UserSerializer;
    notification_emails?: string[];
    modified_by?: UserSerializer;
    details?: CompanyDetails;
    market_channels?: string[];
    reject_reason?: string;
    _custom_json?: any;
    name?: string;
    addresses?: GetAddressSerializer[];
    business_country_info?: BusinessCountryInfo;
    verified_by?: UserSerializer;
    uid?: number;
    company_type: string;
};
type CompanyBrandSerializer = {
    verified_on?: string;
    modified_on?: string;
    stage?: string;
    created_on?: string;
    created_by?: UserSerializer;
    company?: CompanySerializer;
    modified_by?: UserSerializer;
    warnings?: any;
    reject_reason?: string;
    brand?: GetBrandResponseSerializer;
    verified_by?: UserSerializer;
    uid?: number;
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
    title: string;
    holiday_type: string;
    date: HolidayDateSerializer;
};
type LocationSerializer = {
    holiday?: HolidaySchemaSerializer[];
    documents?: Document[];
    stage?: string;
    store_type?: string;
    company: number;
    code: string;
    contact_numbers?: SellerPhoneNumber[];
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigSerializer;
    warnings?: any;
    display_name: string;
    address: GetAddressSerializer;
    _custom_json?: any;
    manager?: LocationManagerSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    name: string;
    timing?: LocationDayWiseSerializer[];
    uid?: number;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleQuery = {
    ignored_stores?: number[];
    item_id?: number;
    size?: string;
};
type _ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type _AssignStoreArticle = {
    meta?: any;
    query?: _ArticleQuery;
    group_id?: string;
    quantity?: number;
    article_assignment?: _ArticleAssignment;
};
type AssignStoreRequestValidator = {
    store_ids?: number[];
    app_id?: string;
    company_id?: number;
    pincode?: string;
    channel_identifier?: string;
    channel_type?: string;
    articles?: _AssignStoreArticle[];
};
type AssignStoreResponseSerializer = {
    meta?: any;
    item_id?: number;
    price_marked?: number;
    store_pincode?: string;
    index?: number;
    company_id?: number;
    s_city?: string;
    quantity?: number;
    _id?: string;
    status?: boolean;
    article_assignment?: _ArticleAssignment;
    price_effective?: number;
    store_id?: number;
    uid?: string;
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
    anonymous?: boolean;
    user_registered_after?: string;
    app_id?: string[];
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type RuleDefinition = {
    auto_apply?: boolean;
    currency_code?: string;
    applicable_on: string;
    calculate_on: string;
    value_type: string;
    is_exact?: boolean;
    type: string;
    scope?: string[];
};
type CouponSchedule = {
    start?: string;
    duration?: number;
    cron?: string;
    next_schedule?: any[];
    end?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Validity = {
    priority?: number;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    description?: string;
    subtitle?: string;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    title?: string;
};
type State = {
    is_public?: boolean;
    is_display?: boolean;
    is_archived?: boolean;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Rule = {
    value?: number;
    key?: number;
    min?: number;
    discount_qty?: number;
    max?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
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
type PriceRange = {
    min?: number;
    max?: number;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    types?: string[];
    codes?: string[];
    networks?: string[];
};
type Restrictions = {
    user_groups?: number[];
    platforms?: string[];
    bulk_bundle?: BulkBundleRestriction;
    post_order?: PostOrder;
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    ordering_stores?: number[];
    price_range?: PriceRange;
    user_type?: string;
    payments?: any;
};
type CouponAdd = {
    validation?: Validation;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    _schedule?: CouponSchedule;
    tags?: string[];
    author?: CouponAuthor;
    type_slug: string;
    validity: Validity;
    display_meta: DisplayMeta;
    state?: State;
    ownership: Ownership;
    date_meta?: CouponDateMeta;
    rule: Rule[];
    code: string;
    restrictions?: Restrictions;
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
    action?: CouponAction;
    rule_definition: RuleDefinition;
    _schedule?: CouponSchedule;
    tags?: string[];
    author?: CouponAuthor;
    type_slug: string;
    validity: Validity;
    display_meta: DisplayMeta;
    state?: State;
    ownership: Ownership;
    date_meta?: CouponDateMeta;
    rule: Rule[];
    code: string;
    restrictions?: Restrictions;
    identifiers: Identifier;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type CompareObject = {
    equals?: number;
    less_than?: number;
    greater_than_equals?: number;
    greater_than?: number;
    less_than_equals?: number;
};
type ItemCriteria = {
    item_store?: number[];
    item_exclude_store?: number[];
    buy_rules?: string[];
    available_zones?: string[];
    all_items?: boolean;
    item_sku?: string[];
    item_exclude_id?: number[];
    cart_unique_item_amount?: CompareObject;
    item_brand?: number[];
    cart_quantity?: CompareObject;
    item_exclude_sku?: string[];
    item_size?: string[];
    item_id?: number[];
    product_tags?: string[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_brand?: number[];
    item_exclude_category?: number[];
    item_company?: number[];
    item_category?: number[];
    item_exclude_company?: number[];
    cart_total?: CompareObject;
};
type PromotionSchedule = {
    start: string;
    duration?: number;
    published: boolean;
    cron?: string;
    next_schedule?: any[];
    end?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DiscountOffer = {
    discount_percentage?: number;
    max_usage_per_transaction?: number;
    max_discount_amount?: number;
    partial_can_ret?: boolean;
    apportion_discount?: boolean;
    discount_amount?: number;
    discount_price?: number;
    min_offer_quantity?: number;
    code?: string;
    max_offer_quantity?: number;
};
type DiscountRule = {
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
    discount_type: string;
    buy_condition: string;
};
type DisplayMeta1 = {
    description?: string;
    name?: string;
    offer_label?: string;
    offer_text?: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
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
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    uses?: PaymentAllowValue1;
    codes?: string[];
    type: string;
};
type Restrictions1 = {
    user_groups?: number[];
    platforms?: string[];
    post_order?: PostOrder1;
    uses: UsesRestriction1;
    user_id?: string[];
    anonymous_users?: boolean;
    order_quantity?: number;
    user_registered?: UserRegistered;
    payments?: PromotionPaymentModes[];
};
type PromotionListItem = {
    buy_rules: any;
    _schedule?: PromotionSchedule;
    currency?: string;
    apply_exclusive?: string;
    visiblility?: Visibility;
    apply_priority?: number;
    _custom_json?: any;
    mode: string;
    apply_all_discount?: boolean;
    stackable?: boolean;
    author?: PromotionAuthor;
    promo_group: string;
    code?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    calculate_on?: string;
    promotion_type: string;
    display_meta: DisplayMeta1;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    restrictions?: Restrictions1;
    application_id: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    buy_rules: any;
    _schedule?: PromotionSchedule;
    currency?: string;
    apply_exclusive?: string;
    visiblility?: Visibility;
    apply_priority?: number;
    _custom_json?: any;
    mode: string;
    apply_all_discount?: boolean;
    stackable?: boolean;
    author?: PromotionAuthor;
    promo_group: string;
    code?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    calculate_on?: string;
    promotion_type: string;
    display_meta: DisplayMeta1;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    restrictions?: Restrictions1;
    application_id: string;
};
type PromotionUpdate = {
    buy_rules: any;
    _schedule?: PromotionSchedule;
    currency?: string;
    apply_exclusive?: string;
    visiblility?: Visibility;
    apply_priority?: number;
    _custom_json?: any;
    mode: string;
    apply_all_discount?: boolean;
    stackable?: boolean;
    author?: PromotionAuthor;
    promo_group: string;
    code?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    calculate_on?: string;
    promotion_type: string;
    display_meta: DisplayMeta1;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    restrictions?: Restrictions1;
    application_id: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    description?: string;
    subtitle?: string;
    is_hidden?: boolean;
    modified_on?: string;
    type?: string;
    example?: string;
    entity_type?: string;
    title?: string;
    created_on?: string;
    entity_slug?: string;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductAvailability = {
    other_store_quantity?: number;
    deliverable?: boolean;
    sizes?: string[];
    is_valid?: boolean;
    out_of_stock?: boolean;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type BasePrice = {
    currency_code?: string;
    marked?: number;
    effective?: number;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    uid?: string;
    parent_item_identifiers?: any;
    store?: BaseInfo;
    type?: string;
    product_group_tags?: string[];
    size?: string;
    seller?: BaseInfo;
    price?: ArticlePriceInfo;
    _custom_json?: any;
    quantity?: number;
    extra_meta?: any;
};
type ProductPrice = {
    currency_code?: string;
    add_on?: number;
    currency_symbol?: string;
    selling?: number;
    marked?: number;
    effective?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    item_criteria?: any;
    raw_offer?: any;
    offer?: any;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type FreeGiftItem = {
    item_id?: number;
    item_name?: string;
    item_slug?: string;
    item_brand_name?: string;
    item_price_details?: any;
    item_images_url?: string[];
};
type AppliedFreeArticles = {
    article_id?: string;
    parent_item_identifier?: string;
    quantity?: number;
    free_gift_item_details?: FreeGiftItem;
};
type AppliedPromotion = {
    promo_id?: string;
    discount_rules?: DiscountRulesApp[];
    amount?: number;
    article_quantity?: number;
    offer_text?: string;
    buy_rules?: BuyRules[];
    promotion_type?: string;
    mrp_promotion?: boolean;
    promotion_name?: string;
    promotion_group?: string;
    ownership?: Ownership2;
    applied_free_articles?: AppliedFreeArticles[];
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
    uid?: number;
    name?: string;
};
type CartProduct = {
    net_quantity?: NetQuantity;
    uid?: number;
    images?: ProductImage[];
    brand?: BaseInfo;
    action?: ProductAction;
    name?: string;
    slug?: string;
    type?: string;
    categories?: CategoryInfo[];
};
type PromoMeta = {
    message?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    availability?: ProductAvailability;
    message?: string;
    article?: ProductArticle;
    price_per_unit?: ProductPriceInfo;
    parent_item_identifiers?: any;
    key?: string;
    is_set?: boolean;
    promotions_applied?: AppliedPromotion[];
    discount?: string;
    product?: CartProduct;
    promo_meta?: PromoMeta;
    price?: ProductPriceInfo;
    coupon_message?: string;
    quantity?: number;
    identifiers: CartProductIdentifer;
    bulk_offer?: any;
};
type DisplayBreakup = {
    currency_code?: string;
    message?: string[];
    value?: number;
    key?: string;
    currency_symbol?: string;
    display?: string;
};
type RawBreakup = {
    vog?: number;
    coupon?: number;
    delivery_charge?: number;
    convenience_fee?: number;
    subtotal?: number;
    cod_charge?: number;
    you_saved?: number;
    discount?: number;
    gst_charges?: number;
    fynd_cash?: number;
    total?: number;
    mrp_total?: number;
};
type CouponBreakup = {
    description?: string;
    uid?: string;
    message?: string;
    value?: number;
    max_discount_value?: number;
    is_applied?: boolean;
    coupon_value?: number;
    sub_title?: string;
    type?: string;
    minimum_cart_value?: number;
    title?: string;
    coupon_type?: string;
    code?: string;
};
type LoyaltyPoints = {
    total?: number;
    description?: string;
    applicable?: number;
    is_applied?: boolean;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
};
type OpenapiCartDetailsResponse = {
    message?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
};
type OpenApiErrorResponse = {
    errors?: any;
    message?: string;
    success?: boolean;
};
type ShippingAddress = {
    pincode?: number;
    area_code_slug?: string;
    address_type?: string;
    name?: string;
    email?: string;
    country_code?: string;
    landmark?: string;
    country?: string;
    phone?: number;
    meta?: any;
    area?: string;
    area_code: string;
    state?: string;
    city?: string;
    address?: string;
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
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
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
    cod_charges: number;
    payment_methods: MultiTenderPaymentMethod[];
    delivery_charges: number;
    price_effective: number;
    size: string;
    amount_paid: number;
    coupon_effective_discount: number;
    price_marked: number;
    product_id: number;
    files?: OpenApiFiles[];
    cashback_applied: number;
    employee_discount?: number;
    loyalty_discount?: number;
    discount: number;
    meta?: CartItemMeta;
    quantity?: number;
    extra_meta?: any;
};
type OpenApiPlatformCheckoutReq = {
    currency_code?: string;
    billing_address: ShippingAddress;
    files?: OpenApiFiles[];
    cashback_applied: number;
    order_id?: string;
    employee_discount?: any;
    loyalty_discount?: number;
    affiliate_order_id?: string;
    payment_methods: MultiTenderPaymentMethod[];
    payment_mode?: string;
    gstin?: string;
    cod_charges: number;
    delivery_charges: number;
    coupon?: string;
    coupon_code: string;
    comment?: string;
    cart_value: number;
    shipping_address?: ShippingAddress;
    cart_items: OpenApiOrderItem[];
    coupon_value: number;
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    message?: string;
    success?: boolean;
    order_id: string;
};
type AbandonedCart = {
    is_active?: boolean;
    uid: number;
    shipments?: any[];
    expire_at: string;
    user_id: string;
    order_id?: string;
    meta?: any;
    payment_methods?: any[];
    payments?: any;
    cod_charges?: any;
    checkout_mode?: string;
    delivery_charges?: any;
    coupon?: any;
    comment?: string;
    last_modified: string;
    cart_value?: number;
    pick_up_customer_details?: any;
    created_on: string;
    fc_index_map?: number[];
    is_archive?: boolean;
    cashback: any;
    fynd_credits?: any;
    buy_now?: boolean;
    promotion?: any;
    is_default: boolean;
    bulk_coupon_discount?: number;
    payment_mode?: string;
    gstin?: string;
    _id: string;
    merge_qty?: boolean;
    articles: any[];
    discount?: number;
    app_id?: string;
};
type AbandonedCartResponse = {
    items?: AbandonedCart[];
    result?: any;
    page?: Page;
    message?: string;
    success?: boolean;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    checkout_mode?: string;
    restrict_checkout?: boolean;
    items?: CartProductInfo[];
    comment?: string;
    id?: string;
    delivery_promise?: ShipmentPromise;
    buy_now?: boolean;
    last_modified?: string;
    coupon_text?: string;
    currency?: CartCurrency;
    is_valid?: boolean;
    delivery_charge_info?: string;
    message?: string;
    payment_selection_lock?: PaymentSelectionLock;
    gstin?: string;
    breakup_values?: CartBreakup;
};
type AddProductCart = {
    item_size?: string;
    parent_item_identifiers?: any;
    item_id?: number;
    article_id?: string;
    article_assignment?: any;
    seller_id?: number;
    product_group_tags?: string[];
    pos?: boolean;
    display?: string;
    store_id?: number;
    _custom_json?: any;
    quantity?: number;
    extra_meta?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    message?: string;
    cart?: CartDetailResponse;
    partial?: boolean;
    success?: boolean;
};
type UpdateProductCart = {
    item_size?: string;
    parent_item_identifiers?: any;
    item_id?: number;
    article_id?: string;
    extra_meta?: any;
    item_index?: number;
    _custom_json?: any;
    quantity?: number;
    identifiers: CartProductIdentifer;
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
