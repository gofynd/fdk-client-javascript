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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, FilterInfoOption, FiltersInfo, Prices, UserDataInfo, PlatformItem, GSTDetailsData, BagUnit, ShipmentStatus, ShipmentItemFulFillingStore, PaymentModeInfo, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, ShipmentStatusData, TrackingList, OrderDetailsData, DPDetailsData, UserDetailsData, BagStateMapper, BagStatusHistory, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, BagGST, BagConfigs, PlatformDeliveryAddress, OrderBagArticle, OrderBrandName, Identifier, FinancialBreakup, CurrentStatus, OrderBags, FulfillingStore, ShipmentPayments, ShipmentInfoResponse, PlatformShipment, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, BagReturnableCancelableStatus, BagGSTDetails, EInvoicePortalDetails, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, StoreAddress, Store, Dimensions, ReturnConfig, Weight, Article, B2BPODetails, BagMeta, Attributes, Item, AffiliateMeta, AffiliateBagDetails, Brand, PDFLinks, DebugInfo, Formatted, ShipmentTimeStamp, LockData, EInvoice, EinvoiceInfo, BuyerDetails, ShipmentMeta, AffiliateDetails, Dates, ArticleDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateInventoryPaymentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, OrderPriority, UserData, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, PaymentMethod, PaymentInfo, BillingInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, TaxInfo, ShippingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, LimitedProductData, Price, Size, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionImage, SeoDetail, CollectionBanner, UserInfo, CollectionQuery, CollectionBadge, CollectionSchedule, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, SingleCategoryResponse, CategoryUpdateResponse, ProductPublish, TaxIdentifier, TeaserTag, Trader, CustomOrder, NetQuantity, ProductCreateUpdateSchemaV2, ProductPublished, ReturnConfigResponse, Image, Logo, NetQuantityResponse, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ProductCreateUpdate, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, ManufacturerResponse, DimensionResponse, Trader1, ReturnConfig1, CompanyMeta, WeightResponse, BrandMeta, PriceMeta, QuantityBase, Quantities, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, ManufacturerResponse1, DimensionResponse1, Trader2, ReturnConfig2, CompanyMeta1, WeightResponse1, BrandMeta1, ArticleStoreResponse, PriceArticle, Quantity, QuantitiesArticle, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, SellerPhoneNumber, LocationIntegrationType, ProductReturnConfigSerializer, UserSerializer1, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer2, GetAddressSerializer, GetCompanySerializer, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, CompanyTaxesSerializer, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, PriceRange, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, BulkBundleRestriction, PostOrder, Restrictions, Ownership, CouponDateMeta, RuleDefinition, DisplayMetaDict, DisplayMeta, State, CouponAuthor, Validity, CouponAction, CouponSchedule, Validation, Rule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, Visibility, DisplayMeta1, PromotionDateMeta, PromotionAction, PromotionSchedule, UserRegistered, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, Restrictions1, PromotionAuthor, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ProductPrice, ProductPriceInfo, PromoMeta, ProductAvailability, ProductImage, BaseInfo, ActionQuery, ProductAction, CategoryInfo, CartProduct, CartProductIdentifer, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, BasePrice, ArticlePriceInfo, ProductArticle, CartProductInfo, LoyaltyPoints, RawBreakup, CouponBreakup, DisplayBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
}
/**
 * @typedef ApplicationResponse
 * @property {Application} [application]
 */
/**
 * @typedef Currency
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */
/**
 * @typedef Domain
 * @property {boolean} [verified]
 * @property {boolean} [is_primary]
 * @property {boolean} [is_shortlink]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {boolean} [is_predefined]
 */
/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled]
 * @property {string} [basepath]
 */
/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */
/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled]
 */
/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [type]
 */
/**
 * @typedef ApplicationMeta
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef SecureUrl
 * @property {string} [secure_url]
 */
/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description]
 * @property {string} [channel_type]
 * @property {number} [cache_ttl]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {number} [company_id]
 * @property {string} [token]
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type]
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 */
/**
 * @typedef NotFound
 * @property {string} [message]
 */
/**
 * @typedef BadRequest
 * @property {string} [message]
 */
/**
 * @typedef LocationDefaultLanguage
 * @property {string} [name]
 * @property {string} [code]
 */
/**
 * @typedef LocationDefaultCurrency
 * @property {string} [name]
 * @property {string} [symbol]
 * @property {string} [code]
 */
/**
 * @typedef LocationCountry
 * @property {string} [capital]
 * @property {string} [currency]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [name]
 * @property {string} [parent]
 * @property {string} [phone_code]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 */
/**
 * @typedef Locations
 * @property {Object[]} [items]
 */
/**
 * @typedef TicketList
 * @property {Ticket[]} [items]
 * @property {Filter} [filters]
 * @property {Page} [page]
 */
/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */
/**
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateCustomFormPayload
 * @property {string} slug
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {string} [header_image]
 * @property {PriorityEnum} priority
 * @property {boolean} [should_notify]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */
/**
 * @typedef EditCustomFormPayload
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {PriorityEnum} priority
 * @property {string} [header_image]
 * @property {boolean} [should_notify]
 * @property {boolean} [login_required]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */
/**
 * @typedef EditTicketPayload
 * @property {TicketContent} [content]
 * @property {string} [category]
 * @property {string} [sub_category]
 * @property {string} [source]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {AgentChangePayload} [assigned_to]
 * @property {string[]} [tags]
 */
/**
 * @typedef AgentChangePayload
 * @property {string} agent_id
 */
/**
 * @typedef CreateVideoRoomResponse
 * @property {string} unique_name
 */
/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success
 */
/**
 * @typedef CreateVideoRoomPayload
 * @property {string} unique_name
 * @property {NotifyUser[]} [notify]
 */
/**
 * @typedef NotifyUser
 * @property {string} country_code
 * @property {string} phone_number
 */
/**
 * @typedef Filter
 * @property {Priority[]} priorities
 * @property {TicketCategory[]} [categories]
 * @property {Status[]} statuses
 * @property {Object[]} assignees
 */
/**
 * @typedef TicketHistoryPayload
 * @property {Object} value
 * @property {HistoryTypeEnum} type
 */
/**
 * @typedef CustomFormSubmissionPayload
 * @property {Object[]} response
 * @property {TicketAsset[]} [attachments]
 */
/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token
 */
/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants
 */
/**
 * @typedef Participant
 * @property {UserSchema} [user]
 * @property {string} [identity]
 * @property {string} [status]
 */
/**
 * @typedef Email
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 * @property {boolean} [active]
 */
/**
 * @typedef Debug
 * @property {string} [source]
 * @property {string} [platform]
 */
/**
 * @typedef SubmitCustomFormResponse
 * @property {string} message
 * @property {Ticket} [ticket]
 */
/**
 * @typedef TicketContext
 * @property {string} [application_id]
 * @property {string} company_id
 */
/**
 * @typedef CreatedOn
 * @property {string} user_agent
 */
/**
 * @typedef TicketAsset
 * @property {string} [display]
 * @property {string} value
 * @property {TicketAssetTypeEnum} type
 */
/**
 * @typedef TicketContent
 * @property {string} title
 * @property {string} [description]
 * @property {TicketAsset[]} [attachments]
 */
/**
 * @typedef AddTicketPayload
 * @property {Object} [created_by]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {string} category
 * @property {TicketContent} content
 * @property {Object} [_custom_json]
 */
/**
 * @typedef Priority
 * @property {PriorityEnum} key
 * @property {string} display
 * @property {string} color
 */
/**
 * @typedef Status
 * @property {string} key
 * @property {string} display
 * @property {string} color
 */
/**
 * @typedef TicketFeedbackForm
 * @property {string} title
 * @property {Object[]} [display]
 */
/**
 * @typedef TicketFeedbackList
 * @property {TicketFeedback[]} [items]
 */
/**
 * @typedef TicketFeedbackPayload
 * @property {Object} [form_response]
 */
/**
 * @typedef SubmitButton
 * @property {string} title
 * @property {string} title_color
 * @property {string} background_color
 */
/**
 * @typedef PollForAssignment
 * @property {number} duration
 * @property {string} message
 * @property {string} success_message
 * @property {string} failure_message
 */
/**
 * @typedef CustomForm
 * @property {string} application_id
 * @property {string} slug
 * @property {string} [header_image]
 * @property {string} title
 * @property {string} [description]
 * @property {Priority} priority
 * @property {boolean} login_required
 * @property {boolean} should_notify
 * @property {string} [success_message]
 * @property {SubmitButton} [submit_button]
 * @property {Object[]} inputs
 * @property {CreatedOn} [created_on]
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {string} _id
 */
/**
 * @typedef CommunicationDetails
 * @property {string} [type]
 * @property {string} [title]
 * @property {string} [value]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */
/**
 * @typedef SupportGeneralConfig
 * @property {string} [_id]
 * @property {CommunicationDetails} [support_email]
 * @property {CommunicationDetails} [support_phone]
 * @property {CommunicationDetails} [support_faq]
 * @property {boolean} [show_communication_info]
 * @property {CommunicationDetails} [support_communication]
 * @property {boolean} [show_support_dris]
 * @property {Object} [integration]
 */
/**
 * @typedef FeedbackForm
 * @property {Object} [inputs]
 * @property {string} [title]
 * @property {Object} [timestamps]
 */
/**
 * @typedef TicketSubCategory
 * @property {string} key
 * @property {string} display
 * @property {TicketSubCategory} [sub_categories]
 */
/**
 * @typedef TicketCategory
 * @property {string} display
 * @property {string} key
 * @property {TicketCategory} [sub_categories]
 * @property {number} [group_id]
 * @property {FeedbackForm} [feedback_form]
 */
/**
 * @typedef CategoryData
 * @property {TicketCategory} [list]
 */
/**
 * @typedef IntegrationConfig
 * @property {string} [_id]
 * @property {string} integration_type
 * @property {string} [base_url]
 * @property {string} [create_ticket_apikey]
 * @property {string} [update_ticket_apikey]
 * @property {string} [category_sync_apikey]
 * @property {CategoryData} [category_data]
 * @property {string} [webhook_apikey]
 * @property {boolean} [config_completed]
 * @property {boolean} allow_ticket_creation
 * @property {boolean} show_listing
 */
/**
 * @typedef FeedbackResponseItem
 * @property {string} display
 * @property {string} key
 * @property {string} value
 */
/**
 * @typedef TicketFeedback
 * @property {string} _id
 * @property {string} ticket_id
 * @property {string} company_id
 * @property {FeedbackResponseItem[]} response
 * @property {string} [category]
 * @property {Object} [user]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef TicketHistory
 * @property {string} type
 * @property {Object} value
 * @property {string} ticket_id
 * @property {CreatedOn} [created_on]
 * @property {Object} [created_by]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id]
 * @property {TicketContent} [content]
 * @property {TicketCategory} category
 * @property {string} [sub_category]
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {Object} [created_by]
 * @property {Object} [assigned_to]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_feedback_pending]
 * @property {Object} [integration]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef Activity
 * @property {Object} [current_state]
 * @property {string} [document_id]
 * @property {Object} [previous_state]
 */
/**
 * @typedef ActivityDump
 * @property {Activity} [activity]
 * @property {CreatedBy} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef AddMediaListRequest
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {AddMediaRequest[]} [media_list]
 * @property {string} [ref_id]
 * @property {string} [ref_type]
 */
/**
 * @typedef AddMediaRequest
 * @property {string} [cloud_id]
 * @property {string} [cloud_name]
 * @property {string} [cloud_provider]
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {string} [media_url]
 * @property {string} [ref_id]
 * @property {string} [ref_type]
 * @property {string[]} [tags]
 * @property {string} [thumbnail_url]
 * @property {string} [type]
 */
/**
 * @typedef ApproveRequest
 * @property {boolean} [approve]
 * @property {string} [entity_type]
 * @property {string} id
 * @property {string} [reason]
 */
/**
 * @typedef Attribute
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {TagMeta[]} [tags]
 */
/**
 * @typedef AttributeObject
 * @property {string} [description]
 * @property {string} name
 * @property {string} [slug]
 * @property {string} [title]
 * @property {string} type
 * @property {number} value
 */
/**
 * @typedef CreatedBy
 * @property {string} [id]
 * @property {string} [name]
 * @property {TagMeta[]} [tags]
 */
/**
 * @typedef CursorGetResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef DeviceMeta
 * @property {string} [app_version]
 * @property {string} [platform]
 */
/**
 * @typedef Entity
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef EntityRequest
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 */
/**
 * @typedef FeedbackAttributes
 * @property {Attribute[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef FeedbackError
 * @property {Object} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */
/**
 * @typedef FeedbackState
 * @property {boolean} [active]
 * @property {boolean} [archive]
 * @property {string} [media]
 * @property {boolean} [qna]
 * @property {boolean} [rating]
 * @property {boolean} [review]
 */
/**
 * @typedef GetResponse
 * @property {Object} [data]
 * @property {Page} [page]
 */
/**
 * @typedef GetReviewResponse
 * @property {ReviewFacet[]} [facets]
 * @property {Object[]} [items]
 * @property {Page} [page]
 * @property {SortMethod[]} [sort]
 */
/**
 * @typedef InsertResponse
 * @property {number} [count]
 */
/**
 * @typedef MediaMeta
 * @property {number} [max_count]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef MediaMetaRequest
 * @property {number} max_count
 * @property {number} size
 */
/**
 * @typedef NumberGetResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PageCursor
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} size
 * @property {string} type
 */
/**
 * @typedef PageNumber
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef Rating
 * @property {Attribute[]} [attributes]
 * @property {string[]} [attributes_slugs]
 * @property {UI} [ui]
 */
/**
 * @typedef RatingRequest
 * @property {string[]} attributes
 * @property {UI} [ui]
 */
/**
 * @typedef ReportAbuseRequest
 * @property {string} [description]
 * @property {string} entity_id
 * @property {string} entity_type
 */
/**
 * @typedef Review
 * @property {string} [description]
 * @property {string} [header]
 * @property {MediaMeta} [image_meta]
 * @property {string} [title]
 * @property {MediaMeta} [video_meta]
 * @property {boolean} [vote_allowed]
 */
/**
 * @typedef ReviewFacet
 * @property {string} [display]
 * @property {string} [name]
 * @property {boolean} [selected]
 * @property {string} [slug]
 * @property {string} [type]
 */
/**
 * @typedef ReviewRequest
 * @property {string} description
 * @property {string} header
 * @property {MediaMetaRequest} image_meta
 * @property {boolean} is_vote_allowed
 * @property {string} title
 * @property {MediaMetaRequest} video_meta
 */
/**
 * @typedef SaveAttributeRequest
 * @property {string} [description]
 * @property {string} name
 * @property {string} slug
 */
/**
 * @typedef SortMethod
 * @property {string} [name]
 * @property {boolean} [selected]
 * @property {string} [type]
 */
/**
 * @typedef TagMeta
 * @property {MediaMeta[]} [media]
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef Template
 * @property {DateMeta} [date_meta]
 * @property {Entity} [entity]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Rating} [rating]
 * @property {Review} [review]
 * @property {FeedbackState} [state]
 * @property {TagMeta[]} [tags]
 */
/**
 * @typedef TemplateGetResponse
 * @property {Template[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TemplateRequest
 * @property {boolean} active
 * @property {string} [enable_media_type]
 * @property {boolean} [enable_qna]
 * @property {boolean} enable_rating
 * @property {boolean} enable_review
 * @property {EntityRequest} entity
 * @property {RatingRequest} rating
 * @property {ReviewRequest} review
 */
/**
 * @typedef TemplateRequestList
 * @property {TemplateRequest[]} template_list
 */
/**
 * @typedef UI
 * @property {string[]} [feedback_question]
 * @property {UIIcon} [icon]
 * @property {string[]} [text]
 * @property {string} [type]
 */
/**
 * @typedef UIIcon
 * @property {string} [active]
 * @property {string} [inactive]
 * @property {string[]} [selected]
 */
/**
 * @typedef UpdateAttributeRequest
 * @property {string} [description]
 * @property {string} name
 * @property {string} [slug]
 */
/**
 * @typedef UpdateResponse
 * @property {number} [count]
 */
/**
 * @typedef UpdateReviewRequest
 * @property {boolean} [active]
 * @property {string} [application]
 * @property {boolean} [approve]
 * @property {boolean} [archive]
 * @property {AttributeObject[]} [attributes_rating]
 * @property {string} [description]
 * @property {DeviceMeta} [device_meta]
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {MediaMeta[]} [media_resource]
 * @property {number} [rating]
 * @property {string} [review_id]
 * @property {string} [template_id]
 * @property {string} [title]
 */
/**
 * @typedef UpdateTemplateRequest
 * @property {boolean} active
 * @property {string} [enable_media_type]
 * @property {boolean} [enable_qna]
 * @property {boolean} enable_rating
 * @property {boolean} enable_review
 * @property {EntityRequest} entity
 * @property {RatingRequest} rating
 * @property {ReviewRequest} review
 */
/**
 * @typedef UpdateTemplateStatusRequest
 * @property {boolean} [active]
 * @property {boolean} [archive]
 */
/**
 * @typedef AvailablePageSchema
 * @property {string} [value]
 * @property {string} [text]
 * @property {string} [path]
 * @property {string} [type]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {string} [theme]
 * @property {AvailablePageSeo} [seo]
 * @property {Object[]} [props]
 * @property {string} [_id]
 */
/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */
/**
 * @typedef AvailablePageSeo
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [_id]
 */
/**
 * @typedef AvailablePageSchemaSections
 * @property {string} [name]
 * @property {string} [label]
 * @property {Object} [props]
 * @property {Object[]} [blocks]
 * @property {Object} [preset]
 * @property {AvailablePagePredicate} [predicate]
 */
/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [mobile]
 * @property {boolean} [desktop]
 * @property {boolean} [tablet]
 */
/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [authenticated]
 * @property {boolean} [anonymous]
 */
/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [selected]
 * @property {string} [exact_url]
 * @property {Object} [query]
 */
/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {AvailablePageRoutePredicate} [route]
 */
/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {number} [current]
 */
/**
 * @typedef ThemesListingResponseSchema
 * @property {ThemesSchema[]} [items]
 * @property {PaginationSchema} [page]
 */
/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */
/**
 * @typedef UpgradableThemeSchema
 * @property {string} [parent_theme]
 * @property {string} [applied_theme]
 * @property {boolean} [upgrade]
 */
/**
 * @typedef FontsSchema
 * @property {FontsSchemaItems} [items]
 * @property {string} [kind]
 */
/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegNotFoundSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef FontsSchemaItems
 * @property {string} [family]
 * @property {string[]} [variants]
 * @property {string[]} [subsets]
 * @property {string} [version]
 * @property {string} [last_modified]
 * @property {FontsSchemaItemsFiles} [files]
 * @property {string} [category]
 * @property {string} [kind]
 */
/**
 * @typedef FontsSchemaItemsFiles
 * @property {string} [regular]
 * @property {string} [italic]
 * @property {string} [bold]
 */
/**
 * @typedef ThemesSchema
 * @property {string} [application]
 * @property {boolean} [applied]
 * @property {boolean} [customized]
 * @property {boolean} [published]
 * @property {boolean} [archived]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [version]
 * @property {string} [parent_theme_version]
 * @property {string} [parent_theme]
 * @property {Information} [information]
 * @property {string[]} [tags]
 * @property {Src} [src]
 * @property {AssetsSchema} [assets]
 * @property {availableSectionSchema[]} [available_sections]
 * @property {Object} [styles]
 * @property {Config} [config]
 * @property {Font} [font]
 * @property {string} [_id]
 * @property {number} [__v]
 * @property {Colors} [colors]
 */
/**
 * @typedef availableSectionSchema
 * @property {Blocks[]} [blocks]
 * @property {string} [name]
 * @property {string} [label]
 * @property {BlocksProps[]} [props]
 */
/**
 * @typedef Information
 * @property {Images} [images]
 * @property {string[]} [features]
 * @property {string} [name]
 * @property {string} [description]
 */
/**
 * @typedef Images
 * @property {string[]} [desktop]
 * @property {string[]} [android]
 * @property {string[]} [ios]
 * @property {string[]} [thumbnail]
 */
/**
 * @typedef Src
 * @property {string} [link]
 */
/**
 * @typedef AssetsSchema
 * @property {UmdJs} [umd_js]
 * @property {CommonJs} [common_js]
 * @property {Css} [css]
 */
/**
 * @typedef UmdJs
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef CommonJs
 * @property {string} [link]
 */
/**
 * @typedef Css
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef Sections
 * @property {string} [attributes]
 */
/**
 * @typedef Config
 * @property {Preset} [preset]
 * @property {GlobalSchema} [global_schema]
 * @property {string} [current]
 * @property {ListSchemaItem[]} [list]
 */
/**
 * @typedef Preset
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef GlobalSchema
 * @property {GlobalSchemaProps[]} [props]
 */
/**
 * @typedef ListSchemaItem
 * @property {Object} [global_config]
 * @property {ConfigPage[]} [page]
 * @property {string} [name]
 */
/**
 * @typedef Colors
 * @property {string} [bg_color]
 * @property {string} [primary_color]
 * @property {string} [secondary_color]
 * @property {string} [accent_color]
 * @property {string} [link_color]
 * @property {string} [button_secondary_color]
 */
/**
 * @typedef Custom
 * @property {Object} [props]
 */
/**
 * @typedef ConfigPage
 * @property {Object} [settings]
 * @property {string} [page]
 */
/**
 * @typedef Font
 * @property {string} [family]
 * @property {Variants} [variants]
 */
/**
 * @typedef Variants
 * @property {Medium} [medium]
 * @property {SemiBold} [semi_bold]
 * @property {Bold} [bold]
 * @property {Light} [light]
 * @property {Regular} [regular]
 */
/**
 * @typedef Medium
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef SemiBold
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Bold
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Light
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Regular
 * @property {string} [name]
 * @property {string} [file]
 */
/**
 * @typedef Blocks
 * @property {string} [type]
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 */
/**
 * @typedef GlobalSchemaProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 * @property {string} [category]
 */
/**
 * @typedef BlocksProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */
/**
 * @typedef BlockUserRequestSchema
 * @property {boolean} [status]
 * @property {string[]} [user_id]
 * @property {string} [reason]
 */
/**
 * @typedef ArchiveUserRequestSchema
 * @property {string} [user_id]
 */
/**
 * @typedef DeleteApplicationUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 * @property {string} [request_id]
 * @property {string} [otp]
 */
/**
 * @typedef UnDeleteUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 */
/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email]
 */
/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [verified]
 * @property {boolean} [active]
 * @property {string} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 */
/**
 * @typedef EditMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [phone]
 */
/**
 * @typedef EditProfileRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {EditProfileMobileSchema} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {string} [profile_pic_url]
 * @property {string} [android_hash]
 * @property {string} [sender]
 * @property {string} [register_token]
 */
/**
 * @typedef EditProfileMobileSchema
 * @property {string} [phone]
 * @property {string} [country_code]
 */
/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [register_token]
 */
/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [register_token]
 * @property {string} [otp]
 */
/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} [request_id]
 * @property {string} [register_token]
 * @property {string} [otp]
 */
/**
 * @typedef SendMobileOtpRequestSchema
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [android_hash]
 * @property {string} [force]
 * @property {string} [captcha_code]
 */
/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} [old_password]
 * @property {string} [new_password]
 */
/**
 * @typedef FormRegisterRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {string} [password]
 * @property {FormRegisterRequestSchemaPhone} [phone]
 * @property {string} [register_token]
 */
/**
 * @typedef TokenRequestBodySchema
 * @property {string} [token]
 */
/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} [code]
 * @property {string} [password]
 */
/**
 * @typedef CodeRequestBodySchema
 * @property {string} [code]
 */
/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} [email]
 * @property {string} [captcha_code]
 */
/**
 * @typedef SendResetPasswordMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {string} [captcha_code]
 */
/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [password]
 * @property {string} [username]
 */
/**
 * @typedef SendOtpRequestSchema
 * @property {string} [country_code]
 * @property {string} [captcha_code]
 * @property {string} [mobile]
 * @property {string} [android_hash]
 */
/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in]
 * @property {OAuthRequestSchemaOauth2} [oauth2]
 * @property {OAuthRequestSchemaProfile} [profile]
 */
/**
 * @typedef OAuthRequestAppleSchema
 * @property {string} [user_identifier]
 * @property {OAuthRequestAppleSchemaOauth} [oauth]
 * @property {OAuthRequestAppleSchemaProfile} [profile]
 */
/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */
/**
 * @typedef AuthSuccess
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 * @property {UserSchema} [user]
 */
/**
 * @typedef SendOtpResponse
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */
/**
 * @typedef ProfileEditSuccess
 * @property {UserSchema} [user]
 * @property {string} [register_token]
 * @property {string} [resend_email_token]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [email]
 * @property {string} [request_id]
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 */
/**
 * @typedef LoginSuccess
 * @property {UserSchema} [user]
 * @property {string} [request_id]
 * @property {string} [register_token]
 */
/**
 * @typedef VerifyOtpSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 * @property {string} [register_token]
 */
/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status]
 */
/**
 * @typedef RegisterFormSuccess
 * @property {string} [email]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */
/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message]
 */
/**
 * @typedef HasPasswordSuccess
 * @property {boolean} [result]
 */
/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout]
 */
/**
 * @typedef BlockUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef ArchiveUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef DeleteUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef UnDeleteUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef OtpSuccess
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 */
/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions]
 */
/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_mobile_link]
 */
/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_email_link]
 */
/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verify_mobile_link]
 */
/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verify_email_link]
 */
/**
 * @typedef UserSearchResponseSchema
 * @property {UserSchema[]} [users]
 */
/**
 * @typedef CustomerListResponseSchema
 * @property {UserSchema[]} [items]
 * @property {PaginationSchema} [page]
 */
/**
 * @typedef SessionListResponseSchema
 * @property {string[]} [items]
 */
/**
 * @typedef SessionDeleteResponseSchema
 * @property {string[]} [items]
 */
/**
 * @typedef UnauthorizedSchema
 * @property {string} [message]
 */
/**
 * @typedef UnauthenticatedSchema
 * @property {boolean} [authenticated]
 */
/**
 * @typedef NotFoundSchema
 * @property {string} [message]
 */
/**
 * @typedef AuthenticationInternalServerErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef AuthenticationApiErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef ProfileEditSuccessSchema
 * @property {string} [email]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [user]
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 */
/**
 * @typedef FormRegisterRequestSchemaPhone
 * @property {string} [country_code]
 * @property {string} [mobile]
 */
/**
 * @typedef OAuthRequestSchemaOauth2
 * @property {string} [access_token]
 * @property {number} [expiry]
 * @property {string} [refresh_token]
 */
/**
 * @typedef OAuthRequestSchemaProfile
 * @property {string} [last_name]
 * @property {string} [image]
 * @property {string} [id]
 * @property {string} [email]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */
/**
 * @typedef OAuthRequestAppleSchemaOauth
 * @property {string} [identity_token]
 */
/**
 * @typedef OAuthRequestAppleSchemaProfile
 * @property {string} [last_name]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */
/**
 * @typedef AuthSuccessUser
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {AuthSuccessUserDebug} [debug]
 * @property {boolean} [active]
 * @property {AuthSuccessUserEmails} [emails]
 */
/**
 * @typedef AuthSuccessUserDebug
 * @property {string} [platform]
 */
/**
 * @typedef AuthSuccessUserEmails
 * @property {string} [email]
 * @property {boolean} [verified]
 * @property {boolean} [primary]
 * @property {boolean} [active]
 */
/**
 * @typedef CreateUserRequestSchema
 * @property {string} phone_number
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} username
 * @property {Object} [meta]
 */
/**
 * @typedef CreateUserResponseSchema
 * @property {UserSchema} [user]
 */
/**
 * @typedef CreateUserSessionRequestSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {string} [user_id]
 */
/**
 * @typedef CreateUserSessionResponseSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {boolean} [secure]
 * @property {boolean} [http_only]
 * @property {Object} [cookie]
 */
/**
 * @typedef PlatformSchema
 * @property {string} [display]
 * @property {LookAndFeel} [look_and_feel]
 * @property {string} [updated_at]
 * @property {boolean} [active]
 * @property {boolean} [forgot_password]
 * @property {Login} [login]
 * @property {boolean} [skip_captcha]
 * @property {string} [name]
 * @property {MetaSchema} [meta]
 * @property {string} [_id]
 * @property {Social} [social]
 * @property {RequiredFields} [required_fields]
 * @property {RegisterRequiredFields} [register_required_fields]
 * @property {boolean} [skip_login]
 * @property {FlashCard} [flash_card]
 * @property {string} [subtext]
 * @property {SocialTokens} [social_tokens]
 * @property {string} [created_at]
 * @property {boolean} [register]
 * @property {string} [mobile_image]
 * @property {string} [desktop_image]
 * @property {number} [delete_account_day]
 * @property {DeleteAccountReasons[]} [delete_account_reasons]
 * @property {Object} [delete_account_consent]
 * @property {Object} [session_config]
 */
/**
 * @typedef LookAndFeel
 * @property {string} [card_position]
 * @property {string} [background_color]
 */
/**
 * @typedef Login
 * @property {boolean} [password]
 * @property {boolean} [otp]
 */
/**
 * @typedef MetaSchema
 * @property {boolean} [fynd_default]
 */
/**
 * @typedef Social
 * @property {boolean} [account_kit]
 * @property {boolean} [facebook]
 * @property {boolean} [google]
 * @property {boolean} [apple]
 */
/**
 * @typedef RequiredFields
 * @property {PlatformEmail} [email]
 * @property {PlatformMobile} [mobile]
 */
/**
 * @typedef PlatformEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef PlatformMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef RegisterRequiredFields
 * @property {RegisterRequiredFieldsEmail} [email]
 * @property {RegisterRequiredFieldsMobile} [mobile]
 */
/**
 * @typedef RegisterRequiredFieldsEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef RegisterRequiredFieldsMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */
/**
 * @typedef FlashCard
 * @property {string} [text]
 * @property {string} [text_color]
 * @property {string} [background_color]
 */
/**
 * @typedef SocialTokens
 * @property {Facebook} [facebook]
 * @property {Accountkit} [account_kit]
 * @property {Google} [google]
 */
/**
 * @typedef DeleteAccountReasons
 * @property {string} [reason_text]
 * @property {string} [reason_id]
 * @property {boolean} [show_text_area]
 */
/**
 * @typedef DeleteAccountConsent
 * @property {string} [consent_text]
 */
/**
 * @typedef Facebook
 * @property {string} [app_id]
 */
/**
 * @typedef Accountkit
 * @property {string} [app_id]
 */
/**
 * @typedef Google
 * @property {string} [app_id]
 */
/**
 * @typedef SessionExpiry
 * @property {number} [duration]
 * @property {string} [type]
 * @property {boolean} [is_rolling]
 */
/**
 * @typedef UpdateUserRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [external_id]
 * @property {Object} [meta]
 */
/**
 * @typedef UserSchema
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [first_name]
 * @property {Object} [meta]
 * @property {string} [last_name]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {Email[]} [emails]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {boolean} [active]
 * @property {string} [profile_pic_url]
 * @property {string} [username]
 * @property {string} [account_type]
 * @property {Debug} [debug]
 * @property {boolean} [has_old_password_hash]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef PhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [phone]
 * @property {number} [country_code]
 */
/**
 * @typedef ApplicationLegal
 * @property {string} [application]
 * @property {string} [tnc]
 * @property {string} [policy]
 * @property {string} [shipping]
 * @property {string} [returns]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */
/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [question]
 * @property {string} [answer]
 */
/**
 * @typedef PathMappingSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 * @property {TagSourceSchema} [__source]
 */
/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */
/**
 * @typedef SeoSchema
 * @property {string} [app]
 * @property {string} [_id]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {Object[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef CustomMetaTag
 * @property {string} [name]
 * @property {string} [content]
 * @property {string} [_id]
 */
/**
 * @typedef Detail
 * @property {string} [title]
 * @property {string} [description]
 */
/**
 * @typedef AnnouncementPageSchema
 * @property {string} [page_slug]
 * @property {string} [type]
 */
/**
 * @typedef EditorMeta
 * @property {string} [foreground_color]
 * @property {string} [background_color]
 * @property {string} [content_type]
 * @property {string} [content]
 */
/**
 * @typedef AnnouncementAuthorSchema
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */
/**
 * @typedef AdminAnnouncementSchema
 * @property {string} [_id]
 * @property {string[]} [platforms]
 * @property {string} [title]
 * @property {string} [announcement]
 * @property {AnnouncementPageSchema[]} [pages]
 * @property {EditorMeta} [editor_meta]
 * @property {AnnouncementAuthorSchema} [author]
 * @property {string} [created_at]
 * @property {string} [app]
 * @property {string} [modified_at]
 * @property {ScheduleSchema} [_schedule]
 */
/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 */
/**
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement]
 * @property {ScheduleStartSchema} [schedule]
 */
/**
 * @typedef ScheduleStartSchema
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */
/**
 * @typedef Author
 * @property {string} [designation]
 * @property {string} [id]
 * @property {string} [name]
 */
/**
 * @typedef BlogSchema
 * @property {string} [_id]
 * @property {Object} [_custom_json]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 * @property {string} [title]
 * @property {DateMeta} [date_meta]
 */
/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 */
/**
 * @typedef SEOImage
 * @property {string} [url]
 */
/**
 * @typedef BlogRequest
 * @property {string} [application]
 * @property {Object} [_custom_json]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 */
/**
 * @typedef GetAnnouncementListSchema
 * @property {AdminAnnouncementSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CreateAnnouncementSchema
 * @property {string} [message]
 * @property {AdminAnnouncementSchema} [data]
 */
/**
 * @typedef DataLoaderResponseSchema
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 */
/**
 * @typedef DataLoaderResetResponseSchema
 * @property {string} [reset]
 */
/**
 * @typedef Navigation
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [orientation]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {NavigationReference} [navigation]
 */
/**
 * @typedef LocaleLanguage
 * @property {Language} [hi]
 * @property {Language} [ar]
 * @property {Language} [en_us]
 */
/**
 * @typedef Language
 * @property {string} [display]
 */
/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */
/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {PageType} type
 */
/**
 * @typedef NavigationReference
 * @property {string[]} [acl]
 * @property {string[]} [tags]
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {number} [sort_order]
 * @property {SubNavigationReference[]} [sub_navigation]
 */
/**
 * @typedef SubNavigationReference
 * @property {string[]} [acl]
 * @property {string[]} [tags]
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 */
/**
 * @typedef LandingPage
 * @property {LandingPageSchema} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef ConfigurationSchema
 * @property {number} [sleep_time]
 * @property {boolean} [start_on_launch]
 * @property {number} [duration]
 * @property {string} [slide_direction]
 */
/**
 * @typedef SlideshowMedia
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {boolean} [auto_decide_duration]
 * @property {Action} [action]
 */
/**
 * @typedef Slideshow
 * @property {SlideshowSchema} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements]
 * @property {number} [refresh_rate]
 * @property {string[]} [refresh_pages]
 */
/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs]
 */
/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */
/**
 * @typedef HandpickedTagSchema
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [content]
 */
/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags]
 */
/**
 * @typedef CreateTagSchema
 * @property {string} [name]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {Object[]} [pages]
 * @property {string} [content]
 */
/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags]
 */
/**
 * @typedef DataLoaderSchema
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 */
/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */
/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */
/**
 * @typedef TagDeleteSuccessResponse
 * @property {boolean} [success]
 */
/**
 * @typedef ContentAPIError
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */
/**
 * @typedef CommonError
 * @property {string} [message]
 */
/**
 * @typedef CategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef ChildrenSchema
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 */
/**
 * @typedef CategoryRequestSchema
 * @property {string} [slug]
 * @property {string} [title]
 */
/**
 * @typedef FAQCategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef FaqSchema
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string[]} [tags]
 */
/**
 * @typedef FAQ
 * @property {string} [slug]
 * @property {string} [question]
 * @property {string} [answer]
 */
/**
 * @typedef CreateFaqResponseSchema
 * @property {FaqSchema} [faq]
 */
/**
 * @typedef CreateFaqSchema
 * @property {FAQ} [faq]
 */
/**
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs]
 */
/**
 * @typedef UpdateFaqCategoryRequestSchema
 * @property {CategorySchema} [category]
 */
/**
 * @typedef CreateFaqCategoryRequestSchema
 * @property {CategoryRequestSchema} [category]
 */
/**
 * @typedef CreateFaqCategorySchema
 * @property {CategorySchema} [category]
 */
/**
 * @typedef GetFaqCategoriesSchema
 * @property {CategorySchema[]} [categories]
 */
/**
 * @typedef GetFaqCategoryBySlugSchema
 * @property {FAQCategorySchema} [category]
 */
/**
 * @typedef LandingPageGetResponse
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LandingPageSchema
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef DefaultNavigationResponse
 * @property {NavigationSchema[]} [items]
 */
/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Orientation
 * @property {string[]} [portrait]
 * @property {string[]} [landscape]
 */
/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {Orientation} [orientation]
 * @property {number} [version]
 * @property {NavigationReference[]} [navigation]
 */
/**
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {Orientation} [orientation]
 * @property {NavigationReference[]} [navigation]
 */
/**
 * @typedef CustomPageSchema
 * @property {string} [_id]
 * @property {string} [platform]
 * @property {string} [title]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [orientation]
 * @property {string} [application]
 * @property {string} [description]
 * @property {boolean} [published]
 * @property {string[]} [tags]
 * @property {Object[]} [content]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {ScheduleSchema} [_schedule]
 */
/**
 * @typedef ContentSchema
 * @property {string} [type]
 * @property {Object} [value]
 */
/**
 * @typedef CustomPage
 * @property {CustomPageSchema} [data]
 */
/**
 * @typedef FeatureImage
 * @property {string} [secure_url]
 */
/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PageSpec
 * @property {Object[]} [specifications]
 */
/**
 * @typedef PageSpecParam
 * @property {string} [key]
 * @property {boolean} [required]
 */
/**
 * @typedef PageSpecItem
 * @property {string} [page_type]
 * @property {string} [display_name]
 * @property {PageSpecParam[]} [params]
 * @property {PageSpecParam[]} [query]
 */
/**
 * @typedef PageSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [component_ids]
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {Object[]} [page_meta]
 * @property {ScheduleSchema} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {SEO} [seo]
 * @property {Object} [visibility]
 * @property {boolean} [archived]
 */
/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */
/**
 * @typedef PageContent
 * @property {string} [type]
 * @property {Object} [value]
 */
/**
 * @typedef PageMeta
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef PageRequest
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {Object[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {string} [title]
 */
/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 */
/**
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */
/**
 * @typedef PageMetaSchema
 * @property {NavigationSchema[]} [system_pages]
 * @property {PageSchema[]} [custom_pages]
 * @property {string} [application_id]
 */
/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SlideshowSchema
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {DateMeta} [date_meta]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia[]} [media]
 * @property {boolean} [active]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef SlideshowRequest
 * @property {string} [slug]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia} [media]
 * @property {boolean} [active]
 */
/**
 * @typedef Support
 * @property {boolean} [created]
 * @property {string} [_id]
 * @property {string} [config_type]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {ContactSchema} [contact]
 */
/**
 * @typedef PhoneProperties
 * @property {string} [key]
 * @property {string} [code]
 * @property {string} [number]
 */
/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */
/**
 * @typedef EmailProperties
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef EmailSchema
 * @property {boolean} [active]
 * @property {EmailProperties[]} [email]
 */
/**
 * @typedef ContactSchema
 * @property {PhoneSchema} [phone]
 * @property {EmailSchema} [email]
 */
/**
 * @typedef TagsSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {TagSchema[]} [tags]
 */
/**
 * @typedef TagSchema
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {Object[]} [pages]
 * @property {TagSourceSchema} [__source]
 */
/**
 * @typedef TagSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */
/**
 * @typedef UnauthenticatedUser
 * @property {string} [message]
 */
/**
 * @typedef UnauthenticatedApplication
 * @property {string} [message]
 */
/**
 * @typedef ResourceNotFound
 * @property {string} [message]
 */
/**
 * @typedef InternalServerError
 * @property {string} [message]
 * @property {string} [code]
 */
/**
 * @typedef CheckValidityResponse
 * @property {boolean} [is_valid]
 * @property {number} [discount_amount]
 */
/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef Plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef DetailedPlanComponents
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [group]
 * @property {string} [icon]
 * @property {Object} [links]
 * @property {boolean} [enabled]
 * @property {string} [display_text]
 */
/**
 * @typedef DetailedPlan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {DetailedPlanComponents[]} [components]
 */
/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */
/**
 * @typedef EntityChargePrice
 * @property {number} amount
 * @property {string} currency_code
 */
/**
 * @typedef EntityChargeRecurring
 * @property {string} interval
 */
/**
 * @typedef ChargeLineItem
 * @property {string} name
 * @property {string} term
 * @property {string} pricing_type
 * @property {EntityChargePrice} price
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {number} [trial_days]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef CreateSubscriptionCharge
 * @property {string} name
 * @property {number} [trial_days]
 * @property {ChargeLineItem[]} line_items
 * @property {boolean} [is_test]
 * @property {string} return_url
 */
/**
 * @typedef OneTimeChargeItem
 * @property {string} name
 * @property {string} [term]
 * @property {string} pricing_type
 * @property {EntityChargePrice} price
 * @property {number} [capped_amount]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef CreateOneTimeCharge
 * @property {string} name
 * @property {OneTimeChargeItem} charge
 * @property {boolean} [is_test]
 * @property {string} return_url
 */
/**
 * @typedef CurrentPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */
/**
 * @typedef SubscriptionCharge
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [term]
 * @property {string} [pricing_type]
 * @property {EntityChargePrice} [price]
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {string} [billing_date]
 * @property {CurrentPeriod} [current_period]
 * @property {string} [status]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */
/**
 * @typedef EntitySubscription
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {number} [company_id]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {number} [trial_days]
 * @property {SubscriptionTrialPeriod} [trial_period]
 * @property {Object} [metadata]
 * @property {SubscriptionCharge[]} [line_items]
 */
/**
 * @typedef OneTimeChargeEntity
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {Object} [metadata]
 * @property {string} [return_url]
 * @property {boolean} [is_test]
 * @property {string} [pricing_type]
 * @property {string} [subscriber_id]
 * @property {string} [entity_type]
 * @property {string} [entity_id]
 * @property {Object} [meta]
 * @property {EntityChargePrice} [price]
 */
/**
 * @typedef CreateOneTimeChargeResponse
 * @property {OneTimeChargeEntity} [charge]
 * @property {string} [confirm_url]
 */
/**
 * @typedef CreateSubscriptionResponse
 * @property {EntitySubscription} [subscription]
 * @property {string} [confirm_url]
 */
/**
 * @typedef InvoiceDetailsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoiceDetailsClient
 * @property {string[]} [address_lines]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 */
/**
 * @typedef InvoiceDetailsStatusTrail
 * @property {string} [_id]
 * @property {string} [value]
 * @property {string} [timestamp]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataChecks
 * @property {string} [cvc_check]
 * @property {string} [address_line1_check]
 * @property {string} [address_postal_code_check]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataNetworks
 * @property {string[]} [available]
 * @property {string} [preferred]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
 * @property {boolean} [supported]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsData
 * @property {string} [brand]
 * @property {string} [last4]
 * @property {InvoiceDetailsPaymentMethodsDataChecks} [checks]
 * @property {string} [wallet]
 * @property {string} [country]
 * @property {string} [funding]
 * @property {number} [exp_year]
 * @property {InvoiceDetailsPaymentMethodsDataNetworks} [networks]
 * @property {number} [exp_month]
 * @property {string} [fingerprint]
 * @property {string} [generated_from]
 * @property {InvoiceDetailsPaymentMethodsDataThreeDSecureUsage} [three_d_secure_usage]
 */
/**
 * @typedef InvoiceDetailsPaymentMethods
 * @property {number} [id]
 * @property {string} [type]
 * @property {string} [pg_payment_method_id]
 * @property {InvoiceDetailsPaymentMethodsData} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef InvoicePaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef InvoiceDetails
 * @property {InvoiceDetailsPeriod} [period]
 * @property {InvoiceDetailsClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [_id]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicePaymentMethod} [payment_method]
 */
/**
 * @typedef InvoiceItemsPlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef InvoiceItemsPlan
 * @property {InvoiceItemsPlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef InvoiceItemsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoiceItems
 * @property {string} [_id]
 * @property {string} [currency]
 * @property {InvoiceItemsPlan} [plan]
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {string} [description]
 * @property {InvoiceItemsPeriod} [period]
 * @property {number} [unit_amount]
 * @property {number} [amount]
 * @property {string} [type]
 * @property {string} [invoice_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef Invoice
 * @property {InvoiceDetails} [invoice]
 * @property {InvoiceItems[]} [invoice_items]
 */
/**
 * @typedef InvoicesDataClient
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string[]} [address_lines]
 */
/**
 * @typedef InvoicesDataPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef InvoicesDataPaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef InvoicesData
 * @property {string} [_id]
 * @property {InvoicesDataClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {InvoicesDataPeriod} [period]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicesDataPaymentMethod} [payment_method]
 * @property {InvoiceItems[]} [invoice_items]
 */
/**
 * @typedef Invoices
 * @property {InvoicesData[]} [data]
 * @property {number} [start]
 * @property {number} [end]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {number} [total]
 */
/**
 * @typedef Phone
 * @property {string} [phone_number]
 * @property {string} [phone_country_code]
 */
/**
 * @typedef SubscriptionBillingAddress
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [postal_code]
 */
/**
 * @typedef SubscriptionCustomer
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [_id]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {Object} [data]
 */
/**
 * @typedef SubscriptionCustomerCreate
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 */
/**
 * @typedef SubscriptionCurrentPeriod
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef SubscriptionPauseCollection
 * @property {string} [behavior]
 * @property {string} [resume_at]
 */
/**
 * @typedef SubscriptionTrial
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef SubscriptionInvoiceSettings
 * @property {boolean} [generation]
 * @property {boolean} [charging]
 */
/**
 * @typedef Subscription
 * @property {SubscriptionCurrentPeriod} [current_period]
 * @property {SubscriptionPauseCollection} [pause_collection]
 * @property {SubscriptionTrial} [trial]
 * @property {SubscriptionInvoiceSettings} [invoice_settings]
 * @property {boolean} [is_active]
 * @property {boolean} [cancel_at_period_end]
 * @property {string} [_id]
 * @property {string} [subscriber_id]
 * @property {string} [plan_id]
 * @property {string} [product_suite_id]
 * @property {Plan} [plan_data]
 * @property {string} [current_status]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [latest_invoice]
 */
/**
 * @typedef SubscriptionStatus
 * @property {boolean} [is_enabled]
 * @property {Subscription} [subscription]
 */
/**
 * @typedef SubscriptionLimitApplication
 * @property {boolean} [enabled]
 * @property {number} [hard_limit]
 * @property {number} [soft_limit]
 */
/**
 * @typedef SubscriptionLimitMarketplace
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitOtherPlatform
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitTeam
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitProducts
 * @property {boolean} [bulk]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitExtensions
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitIntegrations
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimit
 * @property {SubscriptionLimitApplication} [application]
 * @property {SubscriptionLimitMarketplace} [marketplace]
 * @property {SubscriptionLimitOtherPlatform} [other_platform]
 * @property {SubscriptionLimitTeam} [team]
 * @property {SubscriptionLimitProducts} [products]
 * @property {SubscriptionLimitExtensions} [extensions]
 * @property {SubscriptionLimitIntegrations} [integrations]
 * @property {boolean} [is_trial_plan]
 */
/**
 * @typedef SubscriptionActivateReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [plan_id]
 * @property {string} [payment_method]
 */
/**
 * @typedef SubscriptionActivateRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */
/**
 * @typedef CancelSubscriptionReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [subscription_id]
 */
/**
 * @typedef CancelSubscriptionRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */
/**
 * @typedef StatsImported
 * @property {number} [count]
 */
/**
 * @typedef StatsProcessedEmail
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */
/**
 * @typedef StatsProcessedSms
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */
/**
 * @typedef StatsProcessed
 * @property {StatsProcessedEmail} [email]
 * @property {StatsProcessedSms} [sms]
 */
/**
 * @typedef Stats
 * @property {string} [_id]
 * @property {Object} [imported]
 * @property {Object} [processed]
 */
/**
 * @typedef GetStats
 * @property {Stats[]} [items]
 */
/**
 * @typedef CampaignReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */
/**
 * @typedef RecipientHeaders
 * @property {string} [email]
 */
/**
 * @typedef CampaignEmailTemplate
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef CampignEmailProvider
 * @property {string} [_id]
 * @property {string} [from_name]
 * @property {string} [from_email]
 */
/**
 * @typedef CampaignEmail
 * @property {CampaignEmailTemplate} [template]
 * @property {CampignEmailProvider} [provider]
 */
/**
 * @typedef Campaign
 * @property {RecipientHeaders} [recipient_headers]
 * @property {CampaignEmail} [email]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [datasource]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef Campaigns
 * @property {Campaign[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BadRequestSchema
 * @property {string} [status]
 * @property {string} [message]
 */
/**
 * @typedef BigqueryHeadersReq
 * @property {string} [query]
 * @property {string} [type]
 */
/**
 * @typedef BigqueryHeadersResHeaders
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef BigqueryHeadersRes
 * @property {BigqueryHeadersResHeaders[]} [headers]
 */
/**
 * @typedef GetNRecordsCsvReq
 * @property {string} [url]
 * @property {boolean} [header]
 * @property {number} [count]
 */
/**
 * @typedef GetNRecordsCsvResItems
 * @property {string} [phone_number]
 * @property {string} [email]
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [orderid]
 */
/**
 * @typedef GetNRecordsCsvRes
 * @property {GetNRecordsCsvResItems[]} [items]
 */
/**
 * @typedef AudienceReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */
/**
 * @typedef Audience
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef Audiences
 * @property {Audience[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EmailProviderReqFrom
 * @property {string} [name]
 * @property {string} [email]
 * @property {boolean} [is_default]
 */
/**
 * @typedef EmailProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 */
/**
 * @typedef EmailProvider
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef EmailProviders
 * @property {EmailProvider[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EmailTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef EmailTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef EmailTemplateKeys
 * @property {string} [to]
 * @property {string} [cc]
 * @property {string} [bcc]
 */
/**
 * @typedef EmailTemplateHeaders
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef EmailTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {EmailTemplateKeys} [keys]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */
/**
 * @typedef TemplateAndType
 * @property {string} [template_type]
 * @property {string} [template]
 */
/**
 * @typedef EmailTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {EmailTemplateKeys} [keys]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef EmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef SystemEmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef EmailTemplates
 * @property {EmailTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SystemEmailTemplates
 * @property {SystemEmailTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PayloadEmailTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef PayloadEmailProviderStructure
 * @property {string} [_id]
 */
/**
 * @typedef PayloadEmailStructure
 * @property {PayloadEmailTemplateStructure} [template]
 * @property {PayloadEmailProviderStructure} [provider]
 */
/**
 * @typedef PayloadSmsTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef PayloadSmsProviderStructure
 * @property {string} [_id]
 */
/**
 * @typedef PayloadSmsStructure
 * @property {PayloadSmsTemplateStructure} [template]
 * @property {PayloadSmsProviderStructure} [provider]
 */
/**
 * @typedef PayloadStructure
 * @property {Object[]} [data]
 * @property {PayloadEmailStructure} [email]
 * @property {PayloadSmsStructure} [sms]
 * @property {string} [application]
 */
/**
 * @typedef MetaStructure
 * @property {string} [job_type]
 * @property {string} [action]
 * @property {string} [trace]
 * @property {string} [timestamp]
 */
/**
 * @typedef EngineRequest
 * @property {PayloadStructure} [payload]
 * @property {MetaStructure} [meta]
 */
/**
 * @typedef EngineResponse
 * @property {boolean} [success]
 */
/**
 * @typedef EventSubscriptionTemplateSms
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */
/**
 * @typedef EventSubscriptionTemplateEmail
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */
/**
 * @typedef EventSubscriptionTemplate
 * @property {EventSubscriptionTemplateSms} [sms]
 * @property {EventSubscriptionTemplateEmail} [email]
 */
/**
 * @typedef EventSubscription
 * @property {EventSubscriptionTemplate} [template]
 * @property {boolean} [is_default]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [event]
 * @property {string} [slug]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef EventSubscriptions
 * @property {EventSubscription[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TriggerJobResponse
 * @property {number} [status]
 */
/**
 * @typedef TriggerJobRequest
 * @property {string} [job_id]
 */
/**
 * @typedef Job
 * @property {boolean} [completed]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [campaign]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef Jobs
 * @property {Job[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef JobLog
 * @property {Object} [imported]
 * @property {Object} [processed]
 * @property {string} [_id]
 * @property {string} [job]
 * @property {string} [campaign]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef JobLogs
 * @property {JobLog[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LogEmail
 * @property {string} [template]
 */
/**
 * @typedef LogPushnotification
 * @property {string[]} [pushtokens]
 */
/**
 * @typedef LogMeta
 * @property {string} [type]
 * @property {string} [identifier]
 * @property {string} [key]
 * @property {string} [offset]
 * @property {string} [partition]
 * @property {string} [topic]
 */
/**
 * @typedef Log
 * @property {LogEmail} [email]
 * @property {LogPushnotification} [pushnotification]
 * @property {LogMeta} [meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [service]
 * @property {string} [step]
 * @property {string} [status]
 * @property {Object} [data]
 * @property {string} [expire_at]
 * @property {string} [created_at]
 */
/**
 * @typedef Logs
 * @property {Log[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SendOtpSmsCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef SendOtpSmsCommsProvider
 * @property {string} [slug]
 * @property {string} [_id]
 */
/**
 * @typedef SendOtpEmailCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef SendOtpCommsReqData
 * @property {boolean} [send_same_otp_to_channel]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [to]
 */
/**
 * @typedef SendOtpCommsReqSms
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpSmsCommsTemplate} [template]
 * @property {SendOtpSmsCommsProvider} [provider]
 */
/**
 * @typedef SendOtpCommsReqEmail
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpEmailCommsTemplate} [template]
 */
/**
 * @typedef SendOtpCommsResSms
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {number} [resend_timer]
 */
/**
 * @typedef SendOtpCommsResEmail
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [to]
 * @property {number} [resend_timer]
 */
/**
 * @typedef SendOtpCommsReq
 * @property {SendOtpCommsReqData} [data]
 * @property {SendOtpCommsReqSms} [sms]
 * @property {SendOtpCommsReqEmail} [email]
 */
/**
 * @typedef SendOtpCommsRes
 * @property {SendOtpCommsResSms} [sms]
 * @property {SendOtpCommsResEmail} [email]
 */
/**
 * @typedef VerifyOtpCommsReq
 * @property {string} [request_id]
 * @property {string} [otp]
 */
/**
 * @typedef VerifyOtpCommsSuccessRes
 * @property {boolean} [success]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [message]
 */
/**
 * @typedef VerifyOtpCommsErrorRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef PushtokenReq
 * @property {string} [action]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 */
/**
 * @typedef PushtokenRes
 * @property {string} [_id]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 * @property {string} [type]
 * @property {string} [platform]
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [expired_at]
 */
/**
 * @typedef SmsProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [type]
 * @property {string} [provider]
 */
/**
 * @typedef SmsProvider
 * @property {number} [rpt]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef SmsProviders
 * @property {SmsProvider[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SmsTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef SmsTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef SmsTemplateMessage
 * @property {string} [template_type]
 * @property {string} [template]
 */
/**
 * @typedef SmsTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */
/**
 * @typedef SmsTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */
/**
 * @typedef SmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string} [priority]
 * @property {Object[]} [tags]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef SystemSmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef SmsTemplates
 * @property {SmsTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SystemSmsTemplates
 * @property {SystemSmsTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Notification
 * @property {string} [title]
 * @property {string} [body]
 * @property {string} [subtitle]
 * @property {string} [icon]
 * @property {string} [deeplink]
 * @property {string} [click_action]
 */
/**
 * @typedef SystemNotificationUser
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef SystemNotificationSettings
 * @property {boolean} [sound]
 * @property {string} [priority]
 * @property {string} [time_to_live]
 */
/**
 * @typedef SystemNotification
 * @property {Notification} [notification]
 * @property {SystemNotificationUser} [user]
 * @property {SystemNotificationUser} [settings]
 * @property {string} [_id]
 * @property {string} [group]
 * @property {string} [created_at]
 */
/**
 * @typedef SystemNotificationsPage
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 */
/**
 * @typedef SystemNotifications
 * @property {SystemNotification[]} [items]
 * @property {number} [last_read_anchor]
 * @property {Page} [page]
 */
/**
 * @typedef PaymentGatewayConfigResponse
 * @property {boolean} success
 * @property {Object[]} [aggregators]
 * @property {string} app_id
 * @property {string[]} display_fields
 * @property {string[]} excluded_fields
 * @property {boolean} created
 */
/**
 * @typedef ErrorCodeDescription
 * @property {boolean} success
 * @property {string} code
 * @property {string} description
 */
/**
 * @typedef PaymentGatewayConfig
 * @property {string} config_type
 * @property {string} merchant_salt
 * @property {string} secret
 * @property {string} key
 * @property {boolean} [is_active]
 */
/**
 * @typedef PaymentGatewayConfigRequest
 * @property {boolean} [is_active]
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {string} app_id
 */
/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {boolean} success
 * @property {string[]} aggregator
 */
/**
 * @typedef ErrorCodeAndDescription
 * @property {string} code
 * @property {string} description
 */
/**
 * @typedef HttpErrorCodeAndResponse
 * @property {boolean} success
 * @property {ErrorCodeAndDescription} error
 */
/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
 */
/**
 * @typedef PaymentModeLogo
 * @property {string} large
 * @property {string} small
 */
/**
 * @typedef IntentApp
 * @property {string} [code]
 * @property {string} [package_name]
 * @property {PaymentModeLogo} [logos]
 * @property {string} [display_name]
 */
/**
 * @typedef PaymentModeList
 * @property {string} [nickname]
 * @property {number} [cod_limit_per_order]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {number} [cod_limit]
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [card_number]
 * @property {string} [display_name]
 * @property {string} [card_reference]
 * @property {string} [card_issuer]
 * @property {number} [retry_count]
 * @property {string} [card_fingerprint]
 * @property {number} [remaining_limit]
 * @property {string} [card_brand]
 * @property {boolean} [expired]
 * @property {string} [fynd_vpa]
 * @property {string} [card_name]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {number} [timeout]
 * @property {string} [card_brand_image]
 * @property {number} [display_priority]
 * @property {string} aggregator_name
 * @property {number} [exp_month]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [card_id]
 * @property {number} [exp_year]
 * @property {string} [merchant_code]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_token]
 * @property {string} [card_isin]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [card_type]
 * @property {boolean} [intent_flow]
 */
/**
 * @typedef RootPaymentMode
 * @property {boolean} [anonymous_enable]
 * @property {string} name
 * @property {boolean} [save_card]
 * @property {boolean} [is_pay_by_card_pl]
 * @property {number} display_priority
 * @property {string} display_name
 * @property {PaymentModeList[]} [list]
 * @property {string} [aggregator_name]
 * @property {boolean} [add_card_enabled]
 */
/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option
 */
/**
 * @typedef PaymentOptionsResponse
 * @property {boolean} success
 * @property {PaymentOptions} payment_options
 */
/**
 * @typedef Payout
 * @property {string} transfer_type
 * @property {Object} more_attributes
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {Object} unique_transfer_no
 * @property {Object} customers
 * @property {Object[]} payouts_aggregators
 */
/**
 * @typedef PayoutsResponse
 * @property {boolean} success
 * @property {Payout[]} items
 */
/**
 * @typedef PayoutBankDetails
 * @property {string} [account_holder]
 * @property {string} [state]
 * @property {string} [bank_name]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [pincode]
 * @property {string} ifsc_code
 * @property {string} [branch_name]
 * @property {string} [account_no]
 * @property {string} account_type
 */
/**
 * @typedef PayoutRequest
 * @property {string} transfer_type
 * @property {string} unique_external_id
 * @property {string} aggregator
 * @property {Object} users
 * @property {boolean} is_active
 * @property {PayoutBankDetails} bank_details
 */
/**
 * @typedef PayoutResponse
 * @property {boolean} success
 * @property {Object} bank_details
 * @property {string} transfer_type
 * @property {Object} payouts
 * @property {string} aggregator
 * @property {Object} users
 * @property {boolean} is_active
 * @property {string} payment_status
 * @property {string} unique_transfer_no
 * @property {boolean} created
 */
/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} success
 * @property {boolean} is_default
 * @property {boolean} is_active
 */
/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {string} unique_external_id
 */
/**
 * @typedef DeletePayoutResponse
 * @property {boolean} success
 */
/**
 * @typedef SubscriptionPaymentMethodResponse
 * @property {boolean} success
 * @property {Object[]} data
 */
/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success
 */
/**
 * @typedef SubscriptionConfigResponse
 * @property {boolean} success
 * @property {Object} config
 * @property {string} aggregator
 */
/**
 * @typedef SaveSubscriptionSetupIntentRequest
 * @property {string} unique_external_id
 */
/**
 * @typedef SaveSubscriptionSetupIntentResponse
 * @property {boolean} success
 * @property {Object} data
 */
/**
 * @typedef RefundAccountResponse
 * @property {boolean} success
 * @property {Object} [data]
 * @property {string} message
 * @property {boolean} [is_verified_flag]
 */
/**
 * @typedef NotFoundResourceError
 * @property {boolean} success
 * @property {string} code
 * @property {string} description
 */
/**
 * @typedef BankDetailsForOTP
 * @property {string} account_holder
 * @property {string} bank_name
 * @property {string} ifsc_code
 * @property {string} branch_name
 * @property {string} account_no
 */
/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id
 * @property {BankDetailsForOTP} details
 */
/**
 * @typedef IfscCodeResponse
 * @property {boolean} [success]
 * @property {string} bank_name
 * @property {string} branch_name
 */
/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} created_on
 * @property {string} subtitle
 * @property {string} ifsc_code
 * @property {string} display_name
 * @property {string} beneficiary_id
 * @property {string} [delights_user_name]
 * @property {string} bank_name
 * @property {string} [branch_name]
 * @property {string} transfer_mode
 * @property {boolean} is_active
 * @property {string} email
 * @property {string} account_holder
 * @property {string} modified_on
 * @property {string} title
 * @property {number} id
 * @property {string} [mobile]
 * @property {string} account_no
 * @property {string} address
 * @property {string} [comment]
 */
/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 * @property {boolean} [show_beneficiary_details]
 */
/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [payment_id]
 * @property {string} [current_status]
 * @property {string} [order_id]
 * @property {Object} [extra_meta]
 * @property {string} [payment_gateway]
 */
/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} [name]
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {number} amount
 * @property {string} mode
 */
/**
 * @typedef PaymentConfirmationRequest
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} order_id
 */
/**
 * @typedef PaymentConfirmationResponse
 * @property {boolean} success
 * @property {string} message
 * @property {string} order_id
 */
/**
 * @typedef PlatformPaymentOptions
 * @property {string} source
 * @property {string} mode_of_payment
 * @property {Object} [callback_url]
 * @property {Object} [payment_selection_lock]
 * @property {number} [cod_amount_limit]
 * @property {boolean} [anonymous_cod]
 * @property {number} [cod_charges]
 * @property {Object} methods
 * @property {boolean} enabled
 */
/**
 * @typedef PlatfromPaymentConfig
 * @property {boolean} success
 * @property {PlatformPaymentOptions} data
 * @property {string} message
 */
/**
 * @typedef UpdatePlatformPaymentConfig
 * @property {Object} [payment_selection_lock]
 * @property {number} [cod_amount_limit]
 * @property {boolean} [anonymous_cod]
 * @property {number} [cod_charges]
 * @property {Object} methods
 */
/**
 * @typedef CODdata
 * @property {number} remaining_limit
 * @property {string} user_id
 * @property {number} limit
 * @property {number} usages
 * @property {boolean} is_active
 */
/**
 * @typedef GetUserCODLimitResponse
 * @property {boolean} success
 * @property {CODdata} user_cod_data
 */
/**
 * @typedef SetCODForUserRequest
 * @property {boolean} is_active
 * @property {string} merchant_user_id
 * @property {string} mobileno
 */
/**
 * @typedef SetCODOptionResponse
 * @property {boolean} success
 * @property {string} message
 */
/**
 * @typedef FilterInfoOption
 * @property {string} [name]
 * @property {string} text
 * @property {string} [value]
 */
/**
 * @typedef FiltersInfo
 * @property {FilterInfoOption[]} [options]
 * @property {string} type
 * @property {string} text
 * @property {string} value
 */
/**
 * @typedef Prices
 * @property {number} [discount]
 * @property {number} [cashback]
 * @property {number} [fynd_credits]
 * @property {number} [cod_charges]
 * @property {number} [price_effective]
 * @property {number} [cashback_applied]
 * @property {number} [tax_collected_at_source]
 * @property {number} [price_marked]
 * @property {number} [refund_amount]
 * @property {number} [promotion_effective_discount]
 * @property {number} [refund_credit]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [coupon_value]
 * @property {number} [amount_paid]
 * @property {number} [delivery_charge]
 * @property {number} [value_of_good]
 */
/**
 * @typedef UserDataInfo
 * @property {number} [uid]
 * @property {string} [last_name]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [mobile]
 * @property {string} [first_name]
 * @property {string} [avis_user_id]
 * @property {string} [gender]
 * @property {boolean} [is_anonymous_user]
 */
/**
 * @typedef PlatformItem
 * @property {string} [size]
 * @property {string[]} [image]
 * @property {string} [code]
 * @property {string[]} [l1_category]
 * @property {number} [department_id]
 * @property {string} [name]
 * @property {boolean} [can_return]
 * @property {boolean} [can_cancel]
 * @property {string} [color]
 * @property {number} [l3_category]
 * @property {string[]} [images]
 * @property {string} [l3_category_name]
 * @property {number} [id]
 */
/**
 * @typedef GSTDetailsData
 * @property {number} gst_fee
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 * @property {string} gstin_code
 * @property {number} value_of_good
 */
/**
 * @typedef BagUnit
 * @property {number} item_quantity
 * @property {PlatformItem} [item]
 * @property {Prices} [prices]
 * @property {number} bag_id
 * @property {boolean} [can_return]
 * @property {boolean} [can_cancel]
 * @property {string} shipment_id
 * @property {Object} status
 * @property {number} total_shipment_bags
 * @property {GSTDetailsData} [gst]
 * @property {string} ordering_channel
 */
/**
 * @typedef ShipmentStatus
 * @property {string} ops_status
 * @property {string} title
 * @property {string} hex_code
 * @property {string} status
 * @property {string} actual_status
 */
/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} code
 * @property {string} id
 */
/**
 * @typedef PaymentModeInfo
 * @property {string} logo
 * @property {string} type
 */
/**
 * @typedef ShipmentItem
 * @property {Object} [channel]
 * @property {Object} [application]
 * @property {Prices} [prices]
 * @property {Object} [payment_methods]
 * @property {UserDataInfo} [user]
 * @property {BagUnit[]} [bags]
 * @property {number} total_bags_count
 * @property {ShipmentStatus} [shipment_status]
 * @property {Object} [sla]
 * @property {string} created_at
 * @property {number} total_shipments_in_order
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {number} shipment_created_at
 * @property {string} fulfilling_centre
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {string} id
 */
/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [applied_filters]
 * @property {ShipmentItem[]} [items]
 * @property {Object} [page]
 */
/**
 * @typedef Error
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef ShipmentStatusData
 * @property {string} [created_at]
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {number[]} [bag_list]
 * @property {number} [id]
 */
/**
 * @typedef TrackingList
 * @property {string} [time]
 * @property {boolean} [is_passed]
 * @property {string} status
 * @property {string} text
 * @property {boolean} [is_current]
 */
/**
 * @typedef OrderDetailsData
 * @property {string} [order_value]
 * @property {string} [affiliate_id]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [cod_charges]
 * @property {string} fynd_order_id
 * @property {string} [order_date]
 * @property {Object} [tax_details]
 * @property {string} [ordering_channel]
 * @property {string} [source]
 */
/**
 * @typedef DPDetailsData
 * @property {string} [pincode]
 * @property {string} [awb_no]
 * @property {string} [name]
 * @property {string} [id]
 * @property {string} [gst_tag]
 * @property {string} [track_url]
 * @property {string} [country]
 * @property {string} [eway_bill_id]
 */
/**
 * @typedef UserDetailsData
 * @property {string} pincode
 * @property {string} city
 * @property {string} country
 * @property {string} name
 * @property {string} email
 * @property {string} state
 * @property {string} phone
 * @property {string} address
 */
/**
 * @typedef BagStateMapper
 * @property {boolean} [notify_customer]
 * @property {string} [app_state_name]
 * @property {number} bs_id
 * @property {boolean} [is_active]
 * @property {string} name
 * @property {boolean} [app_facing]
 * @property {string} display_name
 * @property {string} [app_display_name]
 * @property {string} state_type
 * @property {string} journey_type
 */
/**
 * @typedef BagStatusHistory
 * @property {number} [state_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {Object[]} [reasons]
 * @property {number} [bag_id]
 * @property {string} [updated_at]
 * @property {number} [delivery_partner_id]
 * @property {boolean} [kafka_sync]
 * @property {string} [created_at]
 * @property {string} [shipment_id]
 * @property {string} status
 * @property {string} [delivery_awb_number]
 * @property {number} [bsh_id]
 * @property {boolean} [app_display_name]
 * @property {boolean} [display_name]
 * @property {number} [store_id]
 * @property {string} [state_type]
 * @property {boolean} [forward]
 */
/**
 * @typedef DiscountRules
 * @property {string} [type]
 * @property {number} [value]
 */
/**
 * @typedef ItemCriterias
 * @property {number[]} [item_brand]
 */
/**
 * @typedef BuyRules
 * @property {ItemCriterias} [item_criteria]
 * @property {Object} [cart_conditions]
 */
/**
 * @typedef AppliedPromos
 * @property {string} [promotion_type]
 * @property {boolean} [mrp_promotion]
 * @property {string} [promotion_name]
 * @property {number} [article_quantity]
 * @property {string} [promo_id]
 * @property {DiscountRules[]} [discount_rules]
 * @property {BuyRules[]} [buy_rules]
 * @property {number} [amount]
 */
/**
 * @typedef BagGST
 * @property {string} [hsn_code]
 * @property {number} [gst_tax_percentage]
 * @property {number} [gst_fee]
 * @property {number} [brand_calculated_amount]
 * @property {boolean} [is_default_hsn_code]
 * @property {string} [gst_tag]
 * @property {string} [gstin_code]
 * @property {number} [value_of_good]
 */
/**
 * @typedef BagConfigs
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} allow_force_return
 * @property {boolean} enable_tracking
 * @property {boolean} is_returnable
 * @property {boolean} can_be_cancelled
 */
/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [pincode]
 * @property {string} [address1]
 * @property {number} [longitude]
 * @property {string} [city]
 * @property {string} [version]
 * @property {string} [address_type]
 * @property {string} [landmark]
 * @property {string} [updated_at]
 * @property {string} [email]
 * @property {string} [created_at]
 * @property {string} [contact_person]
 * @property {string} [address_category]
 * @property {string} [area]
 * @property {string} [state]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {string} [phone]
 * @property {string} [country]
 */
/**
 * @typedef OrderBagArticle
 * @property {string} [uid]
 * @property {Object} [identifiers]
 * @property {Object} [return_config]
 */
/**
 * @typedef OrderBrandName
 * @property {number} [modified_on]
 * @property {string} brand_name
 * @property {string} [company]
 * @property {number} created_on
 * @property {string} logo
 * @property {number} id
 */
/**
 * @typedef Identifier
 * @property {string} [ean]
 */
/**
 * @typedef FinancialBreakup
 * @property {number} transfer_price
 * @property {Object} pm_price_split
 * @property {number} gst_tax_percentage
 * @property {boolean} added_to_fynd_cash
 * @property {string} item_name
 * @property {number} coupon_value
 * @property {string} size
 * @property {number} coupon_effective_discount
 * @property {number} price_effective
 * @property {number} [tax_collected_at_source]
 * @property {number} price_marked
 * @property {number} brand_calculated_amount
 * @property {number} refund_credit
 * @property {number} [amount_paid_roundoff]
 * @property {number} total_units
 * @property {number} discount
 * @property {number} cashback
 * @property {number} fynd_credits
 * @property {string} hsn_code
 * @property {Identifier} identifiers
 * @property {number} amount_paid
 * @property {number} cod_charges
 * @property {number} cashback_applied
 * @property {string} gst_fee
 * @property {number} promotion_effective_discount
 * @property {string} gst_tag
 * @property {number} delivery_charge
 * @property {number} value_of_good
 */
/**
 * @typedef CurrentStatus
 * @property {number} [state_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [bag_id]
 * @property {boolean} [kafka_sync]
 * @property {number} [delivery_partner_id]
 * @property {number} [updated_at]
 * @property {string} [created_at]
 * @property {string} [shipment_id]
 * @property {number} [delivery_awb_number]
 * @property {string} [status]
 * @property {number} [store_id]
 * @property {string} [state_type]
 * @property {number} current_status_id
 */
/**
 * @typedef OrderBags
 * @property {AppliedPromos[]} [applied_promos]
 * @property {number} bag_id
 * @property {Object} [parent_promo_bags]
 * @property {BagGST} [gst_details]
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {BagConfigs} [bag_configs]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {boolean} [can_return]
 * @property {OrderBagArticle} [article]
 * @property {PlatformItem} [item]
 * @property {string} [entity_type]
 * @property {OrderBrandName} [brand]
 * @property {string} [seller_identifier]
 * @property {boolean} [can_cancel]
 * @property {number} [quantity]
 * @property {string} [display_name]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {Prices} [prices]
 * @property {CurrentStatus} [current_status]
 */
/**
 * @typedef FulfillingStore
 * @property {string} pincode
 * @property {string} store_name
 * @property {string} contact_person
 * @property {string} city
 * @property {string} country
 * @property {string} id
 * @property {string} state
 * @property {string} phone
 * @property {Object} meta
 * @property {string} address
 * @property {string} fulfillment_channel
 * @property {string} code
 */
/**
 * @typedef ShipmentPayments
 * @property {string} [logo]
 * @property {string} mode
 * @property {string} [source]
 */
/**
 * @typedef ShipmentInfoResponse
 * @property {boolean} is_not_fynd_source
 * @property {Object[]} delivery_status
 * @property {string} [is_fynd_store]
 * @property {string} [user_agent]
 * @property {string} user_id
 * @property {string} can_break
 * @property {boolean} is_invoiced
 * @property {Object[]} items
 * @property {ShipmentStatusData} [status]
 * @property {GSTDetailsData} [gst_details]
 * @property {Object} [coupon]
 * @property {Object} [delivery_slot]
 * @property {string} [replacement_details]
 * @property {string} [kirana_store_id]
 * @property {Object[]} [forward_shipment_status]
 * @property {Object} [escalation]
 * @property {Object[]} [forward_order_status]
 * @property {string} [vertical]
 * @property {string[]} [child_nodes]
 * @property {string} tracking_url
 * @property {boolean} [can_return]
 * @property {string[]} [shipment_images]
 * @property {number} [total_bags]
 * @property {string} shipment_id
 * @property {string} [operational_status]
 * @property {number} status_progress
 * @property {boolean} platform_logo
 * @property {Object} [bank_data]
 * @property {Object} order_status
 * @property {Object} ordering_store
 * @property {string} [secured_delivery_flag]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [due_date]
 * @property {OrderDetailsData} [order]
 * @property {string} lock_status
 * @property {string} [order_created_time]
 * @property {boolean} [beneficiary_details]
 * @property {DPDetailsData} [dp_details]
 * @property {Object} [user_info]
 * @property {number} [shipment_quantity]
 * @property {Object[]} [custom_meta]
 * @property {string} [enable_dp_tracking]
 * @property {boolean} [can_cancel]
 * @property {UserDetailsData} [billing_details]
 * @property {string} credit_note_id
 * @property {boolean} [enable_tracking]
 * @property {Object} invoice
 * @property {string} affiliate_shipment_id
 * @property {string} [refund_text]
 * @property {string} [mid]
 * @property {boolean} [go_green]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [pay_button]
 * @property {string} [journey_type]
 * @property {Object} [refund_details]
 * @property {Prices} [prices]
 * @property {boolean} is_packaging_order
 * @property {OrderBags[]} [bags]
 * @property {string} order_type
 * @property {Object} company
 * @property {string} [payment_mode]
 * @property {string} [is_pdsr]
 * @property {UserDetailsData} [delivery_details]
 * @property {Object[]} [forward_tracking_list]
 * @property {string} [shipment_status]
 * @property {Object} fyndstore_emp
 * @property {string} [packaging_type]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {string} [picked_date]
 * @property {ShipmentPayments} [payments]
 * @property {boolean} is_fynd_coupon
 * @property {string} email_id
 * @property {string} [priority_text]
 * @property {Object} current_shipment_status
 * @property {number} [total_items]
 */
/**
 * @typedef PlatformShipment
 * @property {string} [user_agent]
 * @property {ShipmentStatusData} [status]
 * @property {GSTDetailsData} [gst_details]
 * @property {Object} [coupon]
 * @property {Object} [delivery_slot]
 * @property {string} [vertical]
 * @property {string[]} [shipment_images]
 * @property {number} [total_bags]
 * @property {string} shipment_id
 * @property {string} [operational_status]
 * @property {string} [platform_logo]
 * @property {TrackingList[]} [tracking_list]
 * @property {OrderDetailsData} [order]
 * @property {DPDetailsData} [dp_details]
 * @property {number} [shipment_quantity]
 * @property {Object[]} [custom_meta]
 * @property {string} [enable_dp_tracking]
 * @property {UserDetailsData} [billing_details]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [journey_type]
 * @property {Prices} [prices]
 * @property {OrderBags[]} [bags]
 * @property {string} [payment_mode]
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [shipment_status]
 * @property {string} [packaging_type]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {string} [picked_date]
 * @property {ShipmentPayments} [payments]
 * @property {string} [priority_text]
 * @property {number} [total_items]
 */
/**
 * @typedef OrderMeta
 * @property {string[]} [order_child_entities]
 * @property {string} [order_type]
 * @property {number} [mongo_cart_id]
 * @property {string} [currency_symbol]
 * @property {Object} [extra_meta]
 * @property {number} [employee_id]
 * @property {string} [payment_type]
 * @property {Object[]} [order_tags]
 * @property {number} [cart_id]
 * @property {string} [comment]
 * @property {Object[]} [files]
 * @property {Object} [staff]
 * @property {string} [order_platform]
 * @property {number} [ordering_store]
 * @property {string} [customer_note]
 */
/**
 * @typedef OrderDict
 * @property {Object} [payment_methods]
 * @property {string} fynd_order_id
 * @property {string} order_date
 * @property {OrderMeta} [meta]
 * @property {number} shipment_count
 */
/**
 * @typedef ShipmentDetailsResponse
 * @property {boolean} success
 * @property {Object[]} [custom_meta]
 * @property {PlatformShipment[]} [shipments]
 * @property {OrderDict} [order]
 */
/**
 * @typedef SubLane
 * @property {number} [index]
 * @property {string} [text]
 * @property {number} [total_items]
 * @property {Object[]} [actions]
 * @property {string} [value]
 */
/**
 * @typedef SuperLane
 * @property {SubLane[]} [options]
 * @property {string} text
 * @property {string} value
 * @property {number} [total_items]
 */
/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */
/**
 * @typedef PlatformChannel
 * @property {string} [logo]
 * @property {string} [name]
 */
/**
 * @typedef PlatformBreakupValues
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} [display]
 */
/**
 * @typedef PlatformOrderItems
 * @property {number} [order_value]
 * @property {PlatformChannel} [channel]
 * @property {number} [total_order_value]
 * @property {string} [order_id]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {string} [payment_mode]
 * @property {UserDataInfo} [user_info]
 * @property {Object} [meta]
 * @property {PlatformShipment[]} [shipments]
 * @property {string} [order_created_time]
 */
/**
 * @typedef OrderListingResponse
 * @property {boolean} [success]
 * @property {string} [lane]
 * @property {number} [total_count]
 * @property {PlatformOrderItems[]} [items]
 * @property {string} [message]
 * @property {Page} [page]
 */
/**
 * @typedef Options
 * @property {string} [text]
 * @property {number} [value]
 */
/**
 * @typedef MetricsCount
 * @property {string} key
 * @property {Options[]} [options]
 * @property {string} text
 * @property {number} value
 */
/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */
/**
 * @typedef PlatformTrack
 * @property {string} [awb]
 * @property {string} [account_name]
 * @property {string} [updated_at]
 * @property {string} [raw_status]
 * @property {string} [last_location_recieved_at]
 * @property {string} [status]
 * @property {string} [updated_time]
 * @property {Object} [meta]
 * @property {string} [reason]
 * @property {string} [shipment_type]
 */
/**
 * @typedef PlatformShipmentTrack
 * @property {PlatformTrack[]} [results]
 * @property {Object} [meta]
 */
/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [filters]
 * @property {FiltersInfo[]} [action_centre]
 * @property {FiltersInfo[]} [processed]
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [unfulfilled]
 */
/**
 * @typedef FiltersResponse
 * @property {FiltersInfo[]} [global_filter]
 * @property {AdvanceFilterInfo} [advance_filter]
 */
/**
 * @typedef Success
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef OmsReports
 * @property {string} [report_type]
 * @property {string} [report_created_at]
 * @property {string} [s3_key]
 * @property {string} [status]
 * @property {string} [report_name]
 * @property {string} [display_name]
 * @property {string} [report_id]
 * @property {string} [report_requested_at]
 * @property {Object} [request_details]
 */
/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [company_id]
 * @property {string} [item_id]
 * @property {string} [article_id]
 * @property {string} [jio_code]
 */
/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */
/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef JioCodeUpsertResponse
 * @property {boolean} [success]
 * @property {Object[]} [data]
 * @property {string} [identifier]
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {string} [trace_id]
 */
/**
 * @typedef BulkInvoicingResponse
 * @property {boolean} success
 * @property {string} [message]
 */
/**
 * @typedef BulkInvoiceLabelResponse
 * @property {Object} [label]
 * @property {string} [store_name]
 * @property {string} [invoice_status]
 * @property {Object} [data]
 * @property {string} [store_code]
 * @property {boolean} do_invoice_label_generated
 * @property {string} batch_id
 * @property {Object} [invoice]
 * @property {string} [store_id]
 * @property {string} [company_id]
 */
/**
 * @typedef FileUploadResponse
 * @property {number} [expiry]
 * @property {string} [url]
 */
/**
 * @typedef URL
 * @property {string} [url]
 */
/**
 * @typedef FileResponse
 * @property {number} [size]
 * @property {string} [file_name]
 * @property {string} [content_type]
 * @property {string} [namespace]
 * @property {FileUploadResponse} [upload]
 * @property {URL} [cdn]
 * @property {string} [file_path]
 * @property {string[]} [tags]
 * @property {string} [operation]
 * @property {string} [method]
 */
/**
 * @typedef bulkListingData
 * @property {string} [store_code]
 * @property {string} [user_id]
 * @property {string} [status]
 * @property {Object[]} [successful_shipments]
 * @property {number} [store_id]
 * @property {string} [uploaded_on]
 * @property {string} [id]
 * @property {Object[]} [failed_shipments]
 * @property {number} [successful]
 * @property {string} [store_name]
 * @property {string} [batch_id]
 * @property {string} [user_name]
 * @property {number} [total]
 * @property {number} [failed]
 * @property {string[]} [processing_shipments]
 * @property {string} [file_name]
 * @property {string} [excel_url]
 * @property {number} [company_id]
 * @property {number} [processing]
 */
/**
 * @typedef BulkListingPage
 * @property {number} [size]
 * @property {boolean} [has_previous]
 * @property {number} [current]
 * @property {string} [type]
 * @property {number} [total]
 * @property {boolean} [has_next]
 */
/**
 * @typedef BulkListingResponse
 * @property {boolean} [success]
 * @property {bulkListingData[]} [data]
 * @property {BulkListingPage} [page]
 * @property {string} [error]
 */
/**
 * @typedef QuestionSet
 * @property {string} [display_name]
 * @property {number} [id]
 */
/**
 * @typedef Reason
 * @property {string[]} [qc_type]
 * @property {QuestionSet[]} [question_set]
 * @property {string} [display_name]
 * @property {number} [id]
 */
/**
 * @typedef PlatformShipmentReasonsResponse
 * @property {boolean} [success]
 * @property {Reason[]} [reasons]
 */
/**
 * @typedef BulkActionPayload
 * @property {string} url
 */
/**
 * @typedef BulkActionResponse
 * @property {string} [message]
 * @property {boolean} [status]
 */
/**
 * @typedef BulkActionDetailsDataField
 * @property {number} [total_shipments_count]
 * @property {number} [processing_shipments_count]
 * @property {string} [batch_id]
 * @property {number} [failed_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [successful_shipments_count]
 * @property {string} [company_id]
 */
/**
 * @typedef BulkActionDetailsResponse
 * @property {string} [success]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string} [uploaded_by]
 * @property {string} [user_id]
 * @property {string[]} [failed_records]
 * @property {boolean} [status]
 * @property {string[]} [error]
 * @property {string} [message]
 * @property {string} [uploaded_on]
 */
/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} enable_tracking
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_returnable
 */
/**
 * @typedef BagGSTDetails
 * @property {string} sgst_gst_fee
 * @property {number} sgst_tax_percentage
 * @property {string} igst_gst_fee
 * @property {string} hsn_code
 * @property {number} gst_tax_percentage
 * @property {number} gst_fee
 * @property {number} igst_tax_percentage
 * @property {number} tax_collected_at_source
 * @property {string} cgst_gst_fee
 * @property {number} brand_calculated_amount
 * @property {number} cgst_tax_percentage
 * @property {boolean} [is_default_hsn_code]
 * @property {string} hsn_code_id
 * @property {string} gst_tag
 * @property {string} [gstin_code]
 * @property {number} value_of_good
 */
/**
 * @typedef EInvoicePortalDetails
 * @property {string} [username]
 * @property {string} [user]
 * @property {string} [password]
 */
/**
 * @typedef Document
 * @property {string} ds_type
 * @property {boolean} verified
 * @property {string} legal_name
 * @property {string} [url]
 * @property {string} value
 */
/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */
/**
 * @typedef StoreEinvoice
 * @property {boolean} enabled
 * @property {string} [user]
 * @property {string} [username]
 * @property {string} [password]
 */
/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */
/**
 * @typedef StoreGstCredentials
 * @property {StoreEinvoice} [e_invoice]
 * @property {StoreEwaybill} [e_waybill]
 */
/**
 * @typedef StoreMeta
 * @property {string} stage
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {string} [gst_number]
 * @property {Object[]} [timing]
 * @property {StoreDocuments} [documents]
 * @property {string[]} [notification_emails]
 * @property {Object} [product_return_config]
 * @property {string} display_name
 * @property {Object} [ewaybill_portal_details]
 * @property {Object} [additional_contact_details]
 * @property {StoreGstCredentials} gst_credentials
 */
/**
 * @typedef StoreAddress
 * @property {string} address1
 * @property {number} longitude
 * @property {string} address_category
 * @property {string} address_type
 * @property {string} contact_person
 * @property {string} state
 * @property {string} phone
 * @property {string} country
 * @property {string} city
 * @property {string} created_at
 * @property {string} [area]
 * @property {number} pincode
 * @property {string} country_code
 * @property {string} [version]
 * @property {string} [landmark]
 * @property {string} [address2]
 * @property {string} updated_at
 * @property {string} [email]
 * @property {number} latitude
 */
/**
 * @typedef Store
 * @property {string} address1
 * @property {string} contact_person
 * @property {number} longitude
 * @property {number} [parent_store_id]
 * @property {string} state
 * @property {number} phone
 * @property {string} country
 * @property {boolean} [is_archived]
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} [code]
 * @property {boolean} [is_active]
 * @property {string} city
 * @property {string} [order_integration_id]
 * @property {string[]} [brand_store_tags]
 * @property {string} name
 * @property {string} created_at
 * @property {Object} [brand_id]
 * @property {string} login_username
 * @property {StoreMeta} meta
 * @property {string} pincode
 * @property {string} [mall_name]
 * @property {number} [packaging_material_count]
 * @property {string} store_email
 * @property {number} [alohomora_user_id]
 * @property {string} [store_active_from]
 * @property {string} [address2]
 * @property {StoreAddress} [store_address_json]
 * @property {string} s_id
 * @property {string} [updated_at]
 * @property {string} location_type
 * @property {number} latitude
 * @property {string} [mall_area]
 * @property {number} company_id
 * @property {string} fulfillment_channel
 * @property {string} [vat_no]
 */
/**
 * @typedef Dimensions
 * @property {number} [width]
 * @property {string} [unit]
 * @property {number} [length]
 * @property {boolean} [is_default]
 * @property {number} [height]
 */
/**
 * @typedef ReturnConfig
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */
/**
 * @typedef Weight
 * @property {boolean} [is_default]
 * @property {number} [shipping]
 * @property {string} [unit]
 */
/**
 * @typedef Article
 * @property {string} uid
 * @property {string} size
 * @property {Object} [esp_modified]
 * @property {Object} [raw_meta]
 * @property {boolean} [is_set]
 * @property {Dimensions} [dimensions]
 * @property {string} seller_identifier
 * @property {Object} [a_set]
 * @property {string} _id
 * @property {Identifier} identifiers
 * @property {ReturnConfig} [return_config]
 * @property {Object} [child_details]
 * @property {Weight} [weight]
 * @property {string} [code]
 */
/**
 * @typedef B2BPODetails
 * @property {number} [item_base_price]
 * @property {string} [docker_number]
 * @property {number} [po_tax_amount]
 * @property {number} [po_line_amount]
 * @property {boolean} [partial_can_ret]
 * @property {number} [total_gst_percentage]
 */
/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */
/**
 * @typedef Attributes
 * @property {string} [primary_material]
 * @property {string} [brand_name]
 * @property {string} [name]
 * @property {string} [essential]
 * @property {string} [primary_color]
 * @property {string[]} [gender]
 * @property {string} [marketer_address]
 * @property {string} [marketer_name]
 * @property {string} [primary_color_hex]
 */
/**
 * @typedef Item
 * @property {number} [l1_category_id]
 * @property {string[]} [l1_category]
 * @property {number} [l2_category_id]
 * @property {Attributes} attributes
 * @property {string} [branch_url]
 * @property {string} [code]
 * @property {string} size
 * @property {string} name
 * @property {boolean} [can_return]
 * @property {string[]} [l2_category]
 * @property {number} brand_id
 * @property {string} [gender]
 * @property {Object} [meta]
 * @property {string} [l3_category_name]
 * @property {string} [webstore_product_url]
 * @property {string} brand
 * @property {number} [department_id]
 * @property {boolean} [can_cancel]
 * @property {number} [l3_category]
 * @property {number} item_id
 * @property {string} slug_key
 * @property {string} [last_updated_at]
 * @property {string} [color]
 * @property {string[]} image
 */
/**
 * @typedef AffiliateMeta
 * @property {string} [channel_shipment_id]
 * @property {string} [order_item_id]
 * @property {string} [channel_order_id]
 * @property {number} [loyalty_discount]
 * @property {string} [box_type]
 * @property {string} [coupon_code]
 * @property {boolean} [is_priority]
 * @property {number} [quantity]
 * @property {number} [employee_discount]
 * @property {string} [due_date]
 * @property {number} [size_level_total_qty]
 */
/**
 * @typedef AffiliateBagDetails
 * @property {number} [loyalty_discount]
 * @property {string} affiliate_bag_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {number} [employee_discount]
 */
/**
 * @typedef Brand
 * @property {boolean} [credit_note_allowed]
 * @property {number} [modified_on]
 * @property {string} brand_name
 * @property {string} company
 * @property {number} [created_on]
 * @property {string} [script_last_ran]
 * @property {string} [logo]
 * @property {number} brand_id
 * @property {string} [start_date]
 * @property {string} [pickup_location]
 * @property {string} [invoice_prefix]
 * @property {boolean} [is_virtual_invoice]
 * @property {number} [credit_note_expiry_days]
 */
/**
 * @typedef PDFLinks
 * @property {string} [b2b]
 * @property {string} [label]
 * @property {string} label_type
 * @property {string} [po_invoice]
 * @property {string} [label_a6]
 * @property {string} [invoice]
 * @property {string} [label_pos]
 * @property {string} [credit_note_url]
 * @property {string} [invoice_a6]
 * @property {string} [invoice_a4]
 * @property {string} invoice_type
 * @property {string} [invoice_pos]
 * @property {string} [label_a4]
 */
/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */
/**
 * @typedef Formatted
 * @property {string} [f_min]
 * @property {string} [f_max]
 */
/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_max]
 * @property {string} [t_min]
 */
/**
 * @typedef LockData
 * @property {boolean} [locked]
 * @property {boolean} [mto]
 * @property {string} [lock_message]
 */
/**
 * @typedef EInvoice
 * @property {string} [error_message]
 * @property {string} [signed_qr_code]
 * @property {number} [acknowledge_no]
 * @property {string} [signed_invoice]
 * @property {string} [acknowledge_date]
 * @property {string} [error_code]
 * @property {string} [irn]
 */
/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [credit_note]
 * @property {EInvoice} [invoice]
 */
/**
 * @typedef BuyerDetails
 * @property {number} pincode
 * @property {string} city
 * @property {string} name
 * @property {string} [ajio_site_id]
 * @property {string} state
 * @property {string} address
 * @property {string} gstin
 */
/**
 * @typedef ShipmentMeta
 * @property {Object} [external]
 * @property {Object} [bag_weight]
 * @property {string} [forward_affiliate_order_id]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [return_affiliate_order_id]
 * @property {Object} [return_details]
 * @property {string} [po_number]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {string} [packaging_name]
 * @property {Object} [ewaybill_info]
 * @property {DebugInfo} [debug_info]
 * @property {number} [return_store_node]
 * @property {Object} [dp_options]
 * @property {string} [awb_number]
 * @property {Formatted} [formatted]
 * @property {string} [dp_id]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [store_invoice_updated_date]
 * @property {boolean} same_store_available
 * @property {number} weight
 * @property {string} [return_awb_number]
 * @property {number} [shipment_weight]
 * @property {string} [order_type]
 * @property {string} [marketplace_store_id]
 * @property {string} [box_type]
 * @property {LockData} [lock_data]
 * @property {string} [fulfilment_priority_text]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {Object} [b2c_buyer_details]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [dp_name]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {string} [due_date]
 * @property {string} [dp_sort_key]
 */
/**
 * @typedef AffiliateDetails
 * @property {string} [affiliate_id]
 * @property {PDFLinks} [pdf_links]
 * @property {string} affiliate_store_id
 * @property {ShipmentMeta} shipment_meta
 * @property {string} [ad_id]
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_shipment_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} [company_affiliate_tag]
 * @property {string} affiliate_order_id
 */
/**
 * @typedef Dates
 * @property {Object} [delivery_date]
 * @property {string} [order_created]
 */
/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */
/**
 * @typedef BagDetailsPlatformResponse
 * @property {Object} [restore_promos]
 * @property {Object[]} [applied_promos]
 * @property {BagStatusHistory[]} bag_status
 * @property {Object} [parent_promo_bags]
 * @property {BagReturnableCancelableStatus} status
 * @property {string[]} [tags]
 * @property {BagGSTDetails} gst_details
 * @property {number} [no_of_bags_order]
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {string} [order_integration_id]
 * @property {string} [operational_status]
 * @property {string} [shipment_id]
 * @property {Object} [qc_required]
 * @property {Store} [ordering_store]
 * @property {Article} article
 * @property {BagMeta} [meta]
 * @property {number} b_id
 * @property {Item} item
 * @property {string} [entity_type]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {Brand} brand
 * @property {string} [seller_identifier]
 * @property {number} [quantity]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {string} [display_name]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {string} journey_type
 * @property {number[]} [original_bag_list]
 * @property {Object[]} [reasons]
 * @property {Prices} prices
 * @property {string} [b_type]
 * @property {Dates} [dates]
 * @property {BagStatusHistory} current_operational_status
 * @property {number} [bag_update_time]
 * @property {ArticleDetails} [article_details]
 * @property {BagStatusHistory} current_status
 * @property {BagStatusHistory} [bag_status_history]
 * @property {boolean} [restore_coupon]
 */
/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} error
 */
/**
 * @typedef Page1
 * @property {number} size
 * @property {number} current
 * @property {string} page_type
 * @property {boolean} has_next
 * @property {number} item_total
 */
/**
 * @typedef GetBagsPlatformResponse
 * @property {Page1} page
 * @property {BagDetailsPlatformResponse[]} items
 */
/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} shipment_ids
 */
/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [shipment_id]
 * @property {string} [error]
 * @property {string} [message]
 * @property {number} [status]
 */
/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */
/**
 * @typedef ErrorResponse1
 * @property {string} [error_trace]
 * @property {string} message
 * @property {number} status
 */
/**
 * @typedef StoreReassign
 * @property {string} [affiliate_bag_id]
 * @property {number} [bag_id]
 * @property {string} [item_id]
 * @property {number[]} [reason_ids]
 * @property {string} [fynd_order_id]
 * @property {number} store_id
 * @property {string} [affiliate_id]
 * @property {string} [set_id]
 * @property {string} [mongo_article_id]
 * @property {string} [affiliate_order_id]
 */
/**
 * @typedef StoreReassignResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef Entities
 * @property {string} [id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 * @property {string} reason_text
 * @property {string} [affiliate_order_id]
 */
/**
 * @typedef UpdateShipmentLockPayload
 * @property {Entities[]} entities
 * @property {string} action_type
 * @property {string} action
 * @property {string} entity_type
 */
/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 */
/**
 * @typedef Bags
 * @property {string} [affiliate_order_id]
 * @property {number} [bag_id]
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_bag_id]
 */
/**
 * @typedef CheckResponse
 * @property {OriginalFilter} [original_filter]
 * @property {boolean} [is_shipment_locked]
 * @property {string} [affiliate_shipment_id]
 * @property {boolean} [is_bag_locked]
 * @property {string} [affiliate_id]
 * @property {boolean} [lock_status]
 * @property {string} [shipment_id]
 * @property {Bags[]} [bags]
 * @property {string} [status]
 */
/**
 * @typedef UpdateShipmentLockResponse
 * @property {CheckResponse[]} [check_response]
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef AnnouncementResponse
 * @property {number} id
 * @property {string} [platform_name]
 * @property {string} [description]
 * @property {string} [logo_url]
 * @property {string} [title]
 * @property {string} [platform_id]
 * @property {number} [company_id]
 * @property {string} [to_datetime]
 * @property {string} [from_datetime]
 * @property {string} [created_at]
 */
/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 */
/**
 * @typedef BaseResponse
 * @property {string} message
 * @property {boolean} success
 */
/**
 * @typedef Click2CallResponse
 * @property {boolean} status
 * @property {string} call_id
 */
/**
 * @typedef Products
 * @property {number} [quantity]
 * @property {number} [line_number]
 * @property {string} [identifier]
 */
/**
 * @typedef EntityReasonData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */
/**
 * @typedef EntitiesReasons
 * @property {EntityReasonData} [data]
 * @property {Object[]} [filters]
 */
/**
 * @typedef ProductsReasonsData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */
/**
 * @typedef ProductsReasonsFilters
 * @property {number} [quantity]
 * @property {number} [line_number]
 * @property {string} [identifier]
 */
/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters]
 */
/**
 * @typedef ReasonsData
 * @property {EntitiesReasons[]} [entities]
 * @property {ProductsReasons[]} [products]
 */
/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
 */
/**
 * @typedef ProductsDataUpdatesFilters
 * @property {number} [line_number]
 * @property {string} [identifier]
 */
/**
 * @typedef ProductsDataUpdates
 * @property {Object} [data]
 * @property {ProductsDataUpdatesFilters[]} [filters]
 */
/**
 * @typedef DataUpdates
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {ProductsDataUpdates[]} [products]
 */
/**
 * @typedef ShipmentsRequest
 * @property {Products[]} [products]
 * @property {ReasonsData} [reasons]
 * @property {string} identifier
 * @property {DataUpdates} [data_updates]
 */
/**
 * @typedef StatuesRequest
 * @property {string} [exclude_bags_next_state]
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [status]
 */
/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [force_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task]
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [lock_after_transition]
 */
/**
 * @typedef ShipmentsResponse
 * @property {string} [exception]
 * @property {Object} [meta]
 * @property {string} [stack_trace]
 * @property {string} [identifier]
 * @property {string} [code]
 * @property {string} [message]
 * @property {number} [status]
 * @property {Object} [final_state]
 */
/**
 * @typedef StatuesResponse
 * @property {ShipmentsResponse[]} [shipments]
 */
/**
 * @typedef UpdateShipmentStatusResponseBody
 * @property {StatuesResponse[]} [statuses]
 */
/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */
/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */
/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */
/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */
/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */
/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 */
/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} value
 * @property {string} name
 */
/**
 * @typedef AffiliateAppConfig
 * @property {string} id
 * @property {string} [description]
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} secret
 * @property {string} token
 * @property {string} owner
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} name
 */
/**
 * @typedef AffiliateConfig
 * @property {AffiliateInventoryConfig} [inventory]
 * @property {AffiliateAppConfig} [app]
 */
/**
 * @typedef Affiliate
 * @property {string} id
 * @property {string} token
 * @property {AffiliateConfig} [config]
 */
/**
 * @typedef AffiliateStoreIdMapping
 * @property {string} marketplace_store_id
 * @property {number} store_id
 */
/**
 * @typedef OrderConfig
 * @property {Affiliate} affiliate
 * @property {boolean} [create_user]
 * @property {string} [store_lookup]
 * @property {string} [bag_end_state]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [article_lookup]
 */
/**
 * @typedef OrderUser
 * @property {string} [address2]
 * @property {string} email
 * @property {string} state
 * @property {string} first_name
 * @property {string} city
 * @property {string} last_name
 * @property {string} country
 * @property {string} pincode
 * @property {number} phone
 * @property {number} mobile
 * @property {string} [address1]
 */
/**
 * @typedef OrderPriority
 * @property {number} [fulfilment_priority]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [affiliate_priority_code]
 */
/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
 */
/**
 * @typedef ArticleDetails1
 * @property {string} _id
 * @property {Object} weight
 * @property {number} brand_id
 * @property {Object} attributes
 * @property {number} quantity
 * @property {Object} category
 * @property {Object} dimension
 */
/**
 * @typedef ShipmentDetails
 * @property {number} fulfillment_id
 * @property {Object} [meta]
 * @property {string} [box_type]
 * @property {ArticleDetails1[]} articles
 * @property {string} affiliate_shipment_id
 * @property {number} shipments
 * @property {number} [dp_id]
 */
/**
 * @typedef LocationDetails
 * @property {number} fulfillment_id
 * @property {string} fulfillment_type
 * @property {ArticleDetails1[]} articles
 */
/**
 * @typedef ShipmentConfig
 * @property {string} source
 * @property {string} action
 * @property {string} identifier
 * @property {string} journey
 * @property {ShipmentDetails[]} shipment
 * @property {string} payment_mode
 * @property {LocationDetails} [location_details]
 * @property {string} to_pincode
 */
/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */
/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */
/**
 * @typedef AffiliateBag
 * @property {number} price_marked
 * @property {number} transfer_price
 * @property {number} discount
 * @property {number} quantity
 * @property {number} price_effective
 * @property {string} modified_on
 * @property {string} hsn_code_id
 * @property {string} _id
 * @property {string} seller_identifier
 * @property {number} amount_paid
 * @property {string} affiliate_store_id
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} delivery_charge
 * @property {number} unit_price
 * @property {string} item_size
 * @property {Object} identifier
 * @property {number} item_id
 * @property {string} fynd_store_id
 * @property {number} company_id
 * @property {number} avl_qty
 * @property {Object} affiliate_meta
 * @property {string} sku
 * @property {number} store_id
 */
/**
 * @typedef OrderInfo
 * @property {Object} [payment]
 * @property {number} discount
 * @property {number} cod_charges
 * @property {Object} items
 * @property {OrderUser} billing_address
 * @property {OrderPriority} [order_priority]
 * @property {number} delivery_charges
 * @property {number} order_value
 * @property {UserData} user
 * @property {ShipmentData} [shipment]
 * @property {string} payment_mode
 * @property {OrderUser} shipping_address
 * @property {string} [affiliate_order_id]
 * @property {AffiliateBag[]} bags
 * @property {string} [coupon]
 */
/**
 * @typedef CreateOrderPayload
 * @property {OrderConfig} order_config
 * @property {OrderInfo} order_info
 * @property {string} affiliate_id
 */
/**
 * @typedef CreateOrderResponse
 * @property {string} fynd_order_id
 */
/**
 * @typedef DispatchManifest
 * @property {string} manifest_id
 */
/**
 * @typedef SuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef ActionInfo
 * @property {number} id
 * @property {string} slug
 * @property {string} description
 * @property {string} display_text
 */
/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */
/**
 * @typedef HistoryDict
 * @property {string} [l1_detail]
 * @property {string} type
 * @property {string} [l2_detail]
 * @property {number} [bag_id]
 * @property {string} [ticket_id]
 * @property {string} [l3_detail]
 * @property {string} user
 * @property {string} message
 * @property {string} [ticket_url]
 * @property {string} createdat
 */
/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} [activity_history]
 */
/**
 * @typedef ErrorDetail
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef SmsDataPayload
 * @property {number} amount_paid
 * @property {string} order_id
 * @property {number} phone_number
 * @property {string} brand_name
 * @property {string} customer_name
 * @property {string} message
 * @property {string} payment_mode
 * @property {number} shipment_id
 * @property {string} country_code
 */
/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {SmsDataPayload} [data]
 * @property {number} bag_id
 */
/**
 * @typedef Meta
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */
/**
 * @typedef ShipmentDetail
 * @property {number} id
 * @property {number[]} [bag_list]
 * @property {Meta} meta
 * @property {string} [remarks]
 * @property {string} [shipment_id]
 * @property {string} [status]
 */
/**
 * @typedef OrderDetails
 * @property {string} [created_at]
 * @property {string} [fynd_order_id]
 */
/**
 * @typedef OrderStatusData
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {string[]} [errors]
 * @property {OrderDetails} order_details
 */
/**
 * @typedef OrderStatusResult
 * @property {OrderStatusData[]} [result]
 * @property {string} success
 */
/**
 * @typedef ManualAssignDPToShipment
 * @property {string} order_type
 * @property {string} qc_required
 * @property {number} dp_id
 * @property {string[]} [shipment_ids]
 */
/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */
/**
 * @typedef PaymentMethod
 * @property {string} mode
 * @property {Object} [meta]
 * @property {string} refund_by
 * @property {string} collect_by
 * @property {Object} [transaction_data]
 * @property {number} amount
 * @property {string} name
 */
/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */
/**
 * @typedef BillingInfo
 * @property {string} state
 * @property {string} [customer_code]
 * @property {string} city
 * @property {string} [last_name]
 * @property {string} [title]
 * @property {string} [house_no]
 * @property {string} [gender]
 * @property {string} primary_email
 * @property {string} [alternate_mobile_number]
 * @property {string} [floor_no]
 * @property {string} country
 * @property {string} pincode
 * @property {string} address1
 * @property {string} [external_customer_code]
 * @property {string} primary_mobile_number
 * @property {string} [middle_name]
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {string} [alternate_email]
 * @property {string} first_name
 * @property {string} [state_code]
 */
/**
 * @typedef Tax
 * @property {Object[]} [breakup]
 * @property {number} rate
 * @property {Object} amount
 * @property {string} name
 */
/**
 * @typedef Charge
 * @property {Tax} [tax]
 * @property {string} type
 * @property {string} [code]
 * @property {Object} amount
 * @property {string} name
 */
/**
 * @typedef LineItem
 * @property {string} seller_identifier
 * @property {Object} [meta]
 * @property {string} [custom_messasge]
 * @property {number} [quantity]
 * @property {Charge[]} [charges]
 * @property {string} [external_line_id]
 */
/**
 * @typedef ProcessingDates
 * @property {string} [confirm_by_date]
 * @property {string} [dispatch_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [dispatch_after_date]
 * @property {string} [pack_by_date]
 */
/**
 * @typedef Shipment
 * @property {string} [external_shipment_id]
 * @property {LineItem[]} line_items
 * @property {number} location_id
 * @property {ProcessingDates} [processing_dates]
 * @property {Object} [meta]
 * @property {number} [priority]
 */
/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 */
/**
 * @typedef ShippingInfo
 * @property {string} [shipping_type]
 * @property {string} state
 * @property {string} [customer_code]
 * @property {string} city
 * @property {string} [last_name]
 * @property {string} [title]
 * @property {string} [house_no]
 * @property {string} [address_type]
 * @property {string} [gender]
 * @property {string} primary_email
 * @property {string} [alternate_mobile_number]
 * @property {string} [floor_no]
 * @property {string} country
 * @property {string} pincode
 * @property {string} [landmark]
 * @property {string} address1
 * @property {string} [external_customer_code]
 * @property {Object} [geo_location]
 * @property {string} primary_mobile_number
 * @property {Object[]} [slot]
 * @property {string} [middle_name]
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {string} [alternate_email]
 * @property {string} first_name
 * @property {string} [state_code]
 */
/**
 * @typedef CreateOrderAPI
 * @property {Object} [meta]
 * @property {PaymentInfo} payment_info
 * @property {string} [external_order_id]
 * @property {BillingInfo} billing_info
 * @property {Charge[]} charges
 * @property {string} [external_creation_date]
 * @property {Shipment[]} shipments
 * @property {TaxInfo} [tax_info]
 * @property {ShippingInfo} shipping_info
 * @property {Object} [currency_info]
 */
/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [exception]
 * @property {string} [meta]
 * @property {string} [stack_trace]
 * @property {string} [code]
 * @property {Object} [info]
 * @property {string} message
 * @property {string} [request_id]
 * @property {number} status
 */
/**
 * @typedef PaymentMethods
 * @property {string} [refund_by]
 * @property {string} [mode]
 * @property {string} [collect_by]
 */
/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [source]
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [mode_of_payment]
 */
/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */
/**
 * @typedef CreateChannelConfig
 * @property {Object} [logo_url]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {string} [shipment_assignment]
 * @property {boolean} [location_reassignment]
 * @property {DpConfiguration} [dp_configuration]
 * @property {string[]} [lock_states]
 */
/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */
/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [is_inserted]
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_upserted]
 */
/**
 * @typedef CreateChannelConifgErrorResponse
 * @property {string} [error]
 */
/**
 * @typedef UploadConsent
 * @property {string} consent_url
 * @property {string} manifest_id
 */
/**
 * @typedef PlatformOrderUpdate
 * @property {string} order_id
 */
/**
 * @typedef ResponseDetail
 * @property {string[]} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */
/**
 * @typedef OrderStatus
 * @property {string} end_date
 * @property {string} start_date
 * @property {number} mobile
 * @property {FyndOrderIdList[]} [order_details]
 */
/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */
/**
 * @typedef GetSearchWordsData
 * @property {Object} [result]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {string} [uid]
 * @property {string[]} [words]
 */
/**
 * @typedef GetSearchWordsDetailResponse
 * @property {GetSearchWordsData} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */
/**
 * @typedef CreateSearchKeyword
 * @property {SearchKeywordResult} result
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {string[]} [words]
 */
/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetAutocompleteWordsData
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {Object[]} [results]
 * @property {string} [uid]
 * @property {string[]} [words]
 */
/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Media
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */
/**
 * @typedef AutocompletePageAction
 * @property {Object} [query]
 * @property {string} [type]
 * @property {string} [url]
 * @property {Object} [params]
 */
/**
 * @typedef AutocompleteAction
 * @property {string} [type]
 * @property {AutocompletePageAction} [page]
 */
/**
 * @typedef AutocompleteResult
 * @property {Media} [logo]
 * @property {string} [display]
 * @property {AutocompleteAction} [action]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef CreateAutocompleteKeyword
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {AutocompleteResult[]} [results]
 * @property {string[]} [words]
 */
/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {Object[]} [results]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 * @property {string} [app_id]
 */
/**
 * @typedef ProductBundleItem
 * @property {boolean} [allow_remove]
 * @property {number} min_quantity
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {number} product_uid
 * @property {number} max_quantity
 */
/**
 * @typedef ProductBundleRequest
 * @property {ProductBundleItem[]} products
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {string} [modified_on]
 * @property {string} slug
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {Object} [meta]
 * @property {Object} [modified_by]
 * @property {string} name
 * @property {Object} [created_by]
 * @property {string[]} [page_visibility]
 * @property {string} choice
 * @property {boolean} is_active
 */
/**
 * @typedef GetProductBundleCreateResponse
 * @property {ProductBundleItem[]} products
 * @property {string} [id]
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {string} [modified_on]
 * @property {string} slug
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {Object} [meta]
 * @property {Object} [modified_by]
 * @property {string} name
 * @property {Object} [created_by]
 * @property {string[]} [page_visibility]
 * @property {string} choice
 * @property {boolean} is_active
 */
/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LimitedProductData
 * @property {Object} [price]
 * @property {Object} [attributes]
 * @property {string} [short_description]
 * @property {Object} [identifier]
 * @property {string} [slug]
 * @property {string[]} [images]
 * @property {string} [name]
 * @property {string} [country_of_origin]
 * @property {string} [item_code]
 * @property {number} [uid]
 * @property {string[]} [sizes]
 * @property {number} [quantity]
 */
/**
 * @typedef Price
 * @property {number} [min_effective]
 * @property {number} [max_effective]
 * @property {number} [min_marked]
 * @property {string} [currency]
 * @property {number} [max_marked]
 */
/**
 * @typedef Size
 * @property {string} [value]
 * @property {boolean} [is_available]
 * @property {string} [display]
 * @property {number} [quantity]
 */
/**
 * @typedef GetProducts
 * @property {boolean} [allow_remove]
 * @property {LimitedProductData} [product_details]
 * @property {Price} [price]
 * @property {number} [min_quantity]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {number} [product_uid]
 * @property {Size[]} [sizes]
 * @property {number} [max_quantity]
 */
/**
 * @typedef GetProductBundleResponse
 * @property {GetProducts[]} [products]
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {string} [slug]
 * @property {number} [company_id]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string[]} [page_visibility]
 * @property {string} [choice]
 * @property {boolean} [is_active]
 */
/**
 * @typedef ProductBundleUpdateRequest
 * @property {ProductBundleItem[]} products
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {string} [modified_on]
 * @property {string} slug
 * @property {number} [company_id]
 * @property {Object} [meta]
 * @property {Object} [modified_by]
 * @property {string} name
 * @property {string[]} [page_visibility]
 * @property {string} choice
 * @property {boolean} is_active
 */
/**
 * @typedef Guide
 * @property {Meta} [meta]
 */
/**
 * @typedef ValidateSizeGuide
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} [image]
 * @property {string} [subtitle]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 * @property {string} name
 * @property {boolean} [active]
 * @property {number} [brand_id]
 * @property {string} [description]
 * @property {string} [tag]
 * @property {Guide} [guide]
 * @property {string} title
 */
/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
 */
/**
 * @typedef SizeGuideResponse
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} [subtitle]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [tag]
 * @property {boolean} [active]
 * @property {string} [name]
 * @property {number} [brand_id]
 * @property {Object} [modified_by]
 * @property {Object} [guide]
 * @property {string} [title]
 */
/**
 * @typedef SEOData
 * @property {Object} [title]
 * @property {Object} [description]
 */
/**
 * @typedef MOQData
 * @property {number} [maximum]
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 */
/**
 * @typedef OwnerAppItemResponse
 * @property {boolean} [is_gift]
 * @property {SEOData} [seo]
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 * @property {MOQData} [moq]
 */
/**
 * @typedef ApplicationItemSEO
 * @property {Object} [title]
 * @property {Object} [description]
 */
/**
 * @typedef MetaFields
 * @property {Object} key
 * @property {Object} value
 */
/**
 * @typedef ApplicationItemMOQ
 * @property {number} [maximum]
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 */
/**
 * @typedef ApplicationItemMeta
 * @property {Object} [_custom_json]
 * @property {boolean} [is_gift]
 * @property {ApplicationItemSEO} [seo]
 * @property {Object} [alt_text]
 * @property {MetaFields[]} [_custom_meta]
 * @property {boolean} [is_cod]
 * @property {ApplicationItemMOQ} [moq]
 */
/**
 * @typedef SuccessResponse1
 * @property {number} [uid]
 * @property {boolean} [success]
 */
/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} data
 * @property {Object[]} [values]
 * @property {Object[]} [condition]
 */
/**
 * @typedef AttributeDetailsGroup
 * @property {string} [logo]
 * @property {number} priority
 * @property {string} [slug]
 * @property {string} [key]
 * @property {string} name
 * @property {string} [unit]
 * @property {string} display_type
 * @property {boolean} is_active
 */
/**
 * @typedef AppConfigurationDetail
 * @property {string} [logo]
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {number} priority
 * @property {string} app_id
 * @property {string[]} [template_slugs]
 * @property {string} slug
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {boolean} is_active
 */
/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */
/**
 * @typedef PageResponseType
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} total_count
 * @property {number} next
 */
/**
 * @typedef GetConfigResponse
 * @property {Object[]} data
 * @property {PageResponseType} page
 */
/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */
/**
 * @typedef AppConfigurationsSort
 * @property {string} [logo]
 * @property {number} priority
 * @property {string} app_id
 * @property {string} key
 * @property {string} [name]
 * @property {string} default_key
 * @property {boolean} is_default
 * @property {boolean} is_active
 */
/**
 * @typedef AllowSingleRequest
 * @property {boolean} allow_single
 */
/**
 * @typedef DefaultKeyRequest
 * @property {string} default_key
 */
/**
 * @typedef MetaDataListingSortMetaResponse
 * @property {string} [key]
 * @property {string} [display]
 */
/**
 * @typedef MetaDataListingSortResponse
 * @property {MetaDataListingSortMetaResponse[]} [data]
 */
/**
 * @typedef MetaDataListingFilterMetaResponse
 * @property {string} [key]
 * @property {string} [display]
 * @property {Object[]} [units]
 * @property {string[]} [filter_types]
 */
/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
 */
/**
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingSortResponse} sort
 * @property {MetaDataListingFilterResponse} filter
 */
/**
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [detail]
 * @property {Object} [variant]
 * @property {Object} [similar]
 * @property {Object} [compare]
 */
/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {MetaDataListingResponse} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */
/**
 * @typedef ProductSize
 * @property {number} min
 * @property {number} max
 */
/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} [logo]
 * @property {number} priority
 * @property {ProductSize} size
 * @property {string} key
 * @property {string} name
 * @property {string} display_type
 * @property {boolean} is_active
 */
/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */
/**
 * @typedef ConfigurationProductConfig
 * @property {string} [logo]
 * @property {number} priority
 * @property {string} [subtitle]
 * @property {ProductSize} [size]
 * @property {string} key
 * @property {boolean} is_active
 * @property {string} [title]
 */
/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */
/**
 * @typedef ConfigurationProduct
 * @property {ConfigurationProductVariant} variant
 * @property {ConfigurationProductSimilar} similar
 */
/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} [logo]
 * @property {number} priority
 * @property {string} key
 * @property {string} [name]
 * @property {boolean} is_active
 */
/**
 * @typedef ConfigurationListingSort
 * @property {ConfigurationListingSortConfig[]} [config]
 * @property {string} default_key
 */
/**
 * @typedef ConfigurationBucketPoints
 * @property {number} [start]
 * @property {string} [display]
 * @property {number} [end]
 */
/**
 * @typedef ConfigurationListingFilterValue
 * @property {Object[]} [map_values]
 * @property {string} [value]
 * @property {Object} [map]
 * @property {string} [condition]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {string} [sort]
 */
/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} [logo]
 * @property {number} priority
 * @property {string} key
 * @property {string} [name]
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} type
 * @property {string} [display_name]
 * @property {boolean} is_active
 */
/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */
/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingSort} sort
 * @property {ConfigurationListingFilter} filter
 */
/**
 * @typedef AppConfiguration
 * @property {string} [modified_on]
 * @property {string} app_id
 * @property {string} config_type
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {Object} [created_by]
 * @property {ConfigurationProduct} [product]
 * @property {string} [config_id]
 * @property {string} [type]
 * @property {ConfigurationListing} [listing]
 */
/**
 * @typedef AppCatalogConfiguration
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} app_id
 * @property {string} config_type
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {Object} [created_by]
 * @property {ConfigurationProduct} [product]
 * @property {string} [config_id]
 * @property {string} [type]
 * @property {ConfigurationListing} [listing]
 */
/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [sort]
 * @property {Object} [filter]
 */
/**
 * @typedef EntityConfiguration
 * @property {string} [id]
 * @property {string} app_id
 * @property {string} config_type
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} [config_id]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 */
/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef ProductFiltersKey
 * @property {string} [logo]
 * @property {string} [kind]
 * @property {string} name
 * @property {string} display
 * @property {string[]} [operators]
 */
/**
 * @typedef ProductFiltersValue
 * @property {string} [currency_symbol]
 * @property {number} [selected_min]
 * @property {number} [min]
 * @property {Object} value
 * @property {number} [max]
 * @property {boolean} is_selected
 * @property {string} [display_format]
 * @property {number} [selected_max]
 * @property {number} [count]
 * @property {string} display
 * @property {string} [query_format]
 * @property {string} [currency_code]
 */
/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values
 */
/**
 * @typedef ProductSortOn
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [value]
 */
/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductFilters[]} [filters]
 * @property {Object} operators
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef CollectionImage
 * @property {string} url
 * @property {string} aspect_ratio
 */
/**
 * @typedef SeoDetail
 * @property {string} [title]
 * @property {string} [description]
 */
/**
 * @typedef CollectionBanner
 * @property {CollectionImage} landscape
 * @property {CollectionImage} portrait
 */
/**
 * @typedef UserInfo
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [user_id]
 */
/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {Object[]} value
 * @property {string} op
 */
/**
 * @typedef CollectionBadge
 * @property {string} [text]
 * @property {string} [color]
 */
/**
 * @typedef CollectionSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [start]
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [end]
 */
/**
 * @typedef CreateCollection
 * @property {CollectionImage} logo
 * @property {Object} [_locale_language]
 * @property {SeoDetail} [seo]
 * @property {boolean} [published]
 * @property {CollectionBanner} banners
 * @property {UserInfo} [modified_by]
 * @property {string} type
 * @property {CollectionQuery[]} [query]
 * @property {string[]} [tags]
 * @property {string} name
 * @property {boolean} [is_visible]
 * @property {boolean} [allow_sort]
 * @property {CollectionBadge} [badge]
 * @property {string} app_id
 * @property {string} [sort_on]
 * @property {boolean} [allow_facets]
 * @property {CollectionSchedule} [_schedule]
 * @property {Object} [_custom_json]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {string} slug
 * @property {Object} [meta]
 * @property {UserInfo} [created_by]
 * @property {string} [description]
 * @property {boolean} [is_active]
 */
/**
 * @typedef BannerImage
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */
/**
 * @typedef ImageUrls
 * @property {BannerImage} [landscape]
 * @property {BannerImage} [portrait]
 */
/**
 * @typedef CollectionCreateResponse
 * @property {BannerImage} [logo]
 * @property {Object} [cron]
 * @property {ImageUrls} [banners]
 * @property {string[]} [tag]
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {string} [sort_on]
 * @property {boolean} [allow_facets]
 * @property {Object} [_schedule]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {string} [description]
 * @property {boolean} [is_active]
 */
/**
 * @typedef CollectionListingFilterTag
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */
/**
 * @typedef CollectionListingFilterType
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */
/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterTag[]} [tags]
 * @property {CollectionListingFilterType[]} [type]
 */
/**
 * @typedef Media1
 * @property {string} [type]
 * @property {string} url
 * @property {Object} [meta]
 */
/**
 * @typedef GetCollectionDetailNest
 * @property {Media1} [logo]
 * @property {Object} [cron]
 * @property {ImageUrls} [banners]
 * @property {string[]} [tag]
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {Action} [action]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {boolean} [allow_facets]
 * @property {Object} [_schedule]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {string} [description]
 * @property {string} [uid]
 * @property {boolean} [is_active]
 */
/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CollectionDetailResponse
 * @property {CollectionQuery[]} [query]
 * @property {Object} [_schedule]
 * @property {Media1} [logo]
 * @property {Object} [cron]
 * @property {number} [priority]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {boolean} [allow_facets]
 * @property {string} [description]
 * @property {string[]} [tag]
 * @property {string} [type]
 * @property {boolean} [is_active]
 * @property {boolean} [allow_sort]
 */
/**
 * @typedef UpdateCollection
 * @property {CollectionImage} [logo]
 * @property {Object} [_locale_language]
 * @property {SeoDetail} [seo]
 * @property {boolean} [published]
 * @property {CollectionBanner} [banners]
 * @property {UserInfo} [modified_by]
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 * @property {string[]} [tags]
 * @property {string} [name]
 * @property {boolean} [is_visible]
 * @property {boolean} [allow_sort]
 * @property {CollectionBadge} [badge]
 * @property {string} [sort_on]
 * @property {boolean} [allow_facets]
 * @property {CollectionSchedule} [_schedule]
 * @property {Object} [_custom_json]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {string} [description]
 * @property {boolean} [is_active]
 */
/**
 * @typedef ItemQueryForUserCollection
 * @property {number} [item_id]
 * @property {string} [action]
 */
/**
 * @typedef CollectionItemRequest
 * @property {CollectionQuery[]} [query]
 * @property {string} [type]
 * @property {ItemQueryForUserCollection[]} [item]
 */
/**
 * @typedef UpdatedResponse
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */
/**
 * @typedef ProductDetailAttribute
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef ProductDetailGroupedAttribute
 * @property {ProductDetailAttribute[]} [details]
 * @property {string} [title]
 */
/**
 * @typedef ProductBrand
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Media1} [logo]
 * @property {Action} [action]
 */
/**
 * @typedef Price1
 * @property {string} [currency_symbol]
 * @property {number} [min]
 * @property {number} [max]
 * @property {string} [currency_code]
 */
/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 */
/**
 * @typedef ProductListingDetail
 * @property {Media1[]} [medias]
 * @property {Object} [attributes]
 * @property {string[]} [highlights]
 * @property {string} [product_online_date]
 * @property {Object} [teaser_tag]
 * @property {boolean} [sellable]
 * @property {string} [type]
 * @property {string[]} [similars]
 * @property {number} [rating_count]
 * @property {string} [item_type]
 * @property {number} [rating]
 * @property {string} [name]
 * @property {string} [color]
 * @property {string} [discount]
 * @property {string} [item_code]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [image_nature]
 * @property {string} [short_description]
 * @property {boolean} [has_variant]
 * @property {ProductBrand} [brand]
 * @property {Object} [promo_meta]
 * @property {ProductListingPrice} [price]
 * @property {string} slug
 * @property {string[]} [tryouts]
 * @property {string} [description]
 * @property {number} [uid]
 */
/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CatalogInsightItem
 * @property {number} [out_of_stock_count]
 * @property {number} [count]
 * @property {number} [sellable_count]
 */
/**
 * @typedef CatalogInsightBrand
 * @property {number} [total_sizes]
 * @property {number} [article_freshness]
 * @property {number} [available_articles]
 * @property {string} [name]
 * @property {number} [total_articles]
 * @property {number} [available_sizes]
 */
/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightItem} [item]
 * @property {CatalogInsightBrand} [brand_distribution]
 */
/**
 * @typedef CrossSellingData
 * @property {number} [products]
 * @property {number} [articles]
 */
/**
 * @typedef CrossSellingResponse
 * @property {CrossSellingData} [data]
 * @property {CatalogInsightBrand} [brand_distribution]
 */
/**
 * @typedef OptInPostRequest
 * @property {string} [platform]
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {string} opt_level
 * @property {boolean} [enabled]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef CompanyOptIn
 * @property {number} modified_on
 * @property {string} platform
 * @property {number[]} brand_ids
 * @property {number} created_on
 * @property {number} company_id
 * @property {Object} [created_by]
 * @property {string} opt_level
 * @property {Object} [modified_by]
 * @property {boolean} enabled
 * @property {number[]} store_ids
 */
/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */
/**
 * @typedef OptinCompanyDetail
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [business_type]
 * @property {string} [company_type]
 */
/**
 * @typedef CompanyBrandDetail
 * @property {number} [total_article]
 * @property {string} [brand_name]
 * @property {number} [brand_id]
 * @property {number} [company_id]
 */
/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OptinCompanyMetrics
 * @property {string} [company]
 * @property {number} [store]
 * @property {number} [brand]
 */
/**
 * @typedef StoreDetail
 * @property {string} [modified_on]
 * @property {Object} [address]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object[]} [additional_contacts]
 * @property {Object} [timing]
 * @property {string} [store_code]
 * @property {Object[]} [documents]
 * @property {Object} [manager]
 * @property {string} [display_name]
 * @property {string} [store_type]
 */
/**
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AttributeSchemaRange
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef AttributeMaster
 * @property {string[]} [allowed_values]
 * @property {AttributeSchemaRange} [range]
 * @property {boolean} [mandatory]
 * @property {string} [format]
 * @property {string} type
 * @property {boolean} [multi]
 */
/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */
/**
 * @typedef AttributeMasterMandatoryDetails
 * @property {string[]} [l3_keys]
 */
/**
 * @typedef AttributeMasterMeta
 * @property {boolean} [enriched]
 * @property {AttributeMasterMandatoryDetails} mandatory_details
 */
/**
 * @typedef AttributeMasterFilter
 * @property {boolean} indexing
 * @property {string[]} [depends_on]
 * @property {number} [priority]
 */
/**
 * @typedef GenderDetail
 * @property {string} [id]
 * @property {string} [logo]
 * @property {boolean} [is_nested]
 * @property {AttributeMaster} [schema]
 * @property {string} [slug]
 * @property {AttributeMasterDetails} [details]
 * @property {string[]} [departments]
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [name]
 * @property {AttributeMasterFilter} [filters]
 * @property {string} [description]
 * @property {boolean} [enabled_for_end_consumer]
 */
/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PTErrorResponse
 * @property {number} [status]
 * @property {Object} [meta]
 * @property {Object} [errors]
 * @property {string} [code]
 * @property {string} [message]
 */
/**
 * @typedef DepartmentCreateUpdate
 * @property {string[]} [synonyms]
 * @property {string} logo
 * @property {Object} [_custom_json]
 * @property {string[]} [tags]
 * @property {string} [slug]
 * @property {string} name
 * @property {Object} [platforms]
 * @property {string} [_cls]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {number} priority_order
 */
/**
 * @typedef DepartmentCreateResponse
 * @property {number} uid
 * @property {string} message
 */
/**
 * @typedef DepartmentCreateErrorResponse
 * @property {string} [error]
 */
/**
 * @typedef UserSerializer
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [contact]
 */
/**
 * @typedef GetDepartment
 * @property {string[]} [synonyms]
 * @property {string} [logo]
 * @property {number} [page_no]
 * @property {number} [page_size]
 * @property {string} [modified_on]
 * @property {string} [slug]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [name]
 * @property {UserSerializer} [modified_by]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {string} [search]
 * @property {number} [priority_order]
 * @property {string} [item_type]
 */
/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef DepartmentErrorResponse
 * @property {number} [status]
 * @property {Object} [meta]
 * @property {Object} [errors]
 * @property {string} [code]
 * @property {string} [message]
 */
/**
 * @typedef UserDetail
 * @property {string} [contact]
 * @property {string} username
 * @property {string} user_id
 * @property {boolean} [super_user]
 */
/**
 * @typedef DepartmentModel
 * @property {Object[]} [synonyms]
 * @property {string} modified_on
 * @property {Object} [_id]
 * @property {string} [verified_on]
 * @property {string} logo
 * @property {Object} [_custom_json]
 * @property {Object} [slug]
 * @property {string} created_on
 * @property {UserDetail} [verified_by]
 * @property {UserDetail} [created_by]
 * @property {Object} name
 * @property {Object} [_cls]
 * @property {UserDetail} [modified_by]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {number} priority_order
 */
/**
 * @typedef ProductTemplate
 * @property {Object[]} [attributes_schema]
 * @property {string[]} [attributes]
 * @property {string} [logo]
 * @property {string} [modified_on]
 * @property {boolean} is_physical
 * @property {string} slug
 * @property {string} [created_on]
 * @property {string[]} [departments]
 * @property {Object} [modified_by]
 * @property {Object} [created_by]
 * @property {string} [name]
 * @property {string[]} [categories]
 * @property {string} [description]
 * @property {string} [tag]
 * @property {boolean} [is_expirable]
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 */
/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Properties
 * @property {Object} [product_publish]
 * @property {Object} [product_group_tag]
 * @property {Object} [category_slug]
 * @property {Object} [highlights]
 * @property {Object} [trader_type]
 * @property {Object} [teaser_tag]
 * @property {Object} [sizes]
 * @property {Object} [hsn_code]
 * @property {Object} [item_type]
 * @property {Object} [trader]
 * @property {Object} [tags]
 * @property {Object} [currency]
 * @property {Object} [media]
 * @property {Object} [return_config]
 * @property {Object} [variants]
 * @property {Object} [multi_size]
 * @property {Object} [name]
 * @property {Object} [country_of_origin]
 * @property {Object} [item_code]
 * @property {Object} [no_of_boxes]
 * @property {Object} [custom_order]
 * @property {Object} [short_description]
 * @property {Object} [brand_uid]
 * @property {Object} [size_guide]
 * @property {Object} [slug]
 * @property {Object} [is_dependent]
 * @property {Object} [description]
 * @property {Object} [command]
 * @property {Object} [is_active]
 */
/**
 * @typedef GlobalValidation
 * @property {Object} [definitions]
 * @property {string[]} [required]
 * @property {Properties} [properties]
 * @property {string} [description]
 * @property {string} [type]
 * @property {string} [title]
 */
/**
 * @typedef TemplateValidationData
 * @property {GlobalValidation} [global_validation]
 * @property {Object} [template_validation]
 */
/**
 * @typedef TemplateDetails
 * @property {string} [id]
 * @property {Object[]} [attributes_schema]
 * @property {string[]} [attributes]
 * @property {string} [logo]
 * @property {boolean} is_physical
 * @property {string} slug
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {string[]} [categories]
 * @property {string} [description]
 * @property {string} [tag]
 * @property {boolean} [is_expirable]
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 */
/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateValidationData} [data]
 * @property {TemplateDetails} [template_details]
 */
/**
 * @typedef InventoryValidationResponse
 * @property {Object} [data]
 * @property {string} [message]
 */
/**
 * @typedef HSNData
 * @property {string[]} [country_of_origin]
 * @property {string[]} [hsn_code]
 */
/**
 * @typedef HSNCodesResponse
 * @property {HSNData} [data]
 * @property {string} [message]
 */
/**
 * @typedef VerifiedBy
 * @property {string} [username]
 * @property {string} [user_id]
 */
/**
 * @typedef ProductDownloadItemsData
 * @property {string} [type]
 * @property {string[]} [templates]
 * @property {string[]} [brand]
 */
/**
 * @typedef ProductDownloadsItems
 * @property {string} [status]
 * @property {string} [trigger_on]
 * @property {string} [id]
 * @property {Object} [template_tags]
 * @property {string} [task_id]
 * @property {string} [completed_on]
 * @property {VerifiedBy} [created_by]
 * @property {number} [seller_id]
 * @property {string} [url]
 * @property {ProductDownloadItemsData} [data]
 */
/**
 * @typedef ProductDownloadsResponse
 * @property {ProductDownloadsItems} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductConfigurationDownloads
 * @property {Object[]} [data]
 * @property {boolean} [multivalue]
 */
/**
 * @typedef Media2
 * @property {string} logo
 * @property {string} landscape
 * @property {string} portrait
 */
/**
 * @typedef Hierarchy
 * @property {number} department
 * @property {number} l1
 * @property {number} l2
 */
/**
 * @typedef CategoryMappingValues
 * @property {number} [catalog_id]
 * @property {string} name
 */
/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [google]
 */
/**
 * @typedef CategoryRequestBody
 * @property {boolean} is_active
 * @property {number} [priority]
 * @property {Media2} [media]
 * @property {string} [slug]
 * @property {number[]} departments
 * @property {number} level
 * @property {string} name
 * @property {string[]} [tryouts]
 * @property {Hierarchy[]} [hierarchy]
 * @property {string[]} [synonyms]
 * @property {CategoryMapping} [marketplaces]
 */
/**
 * @typedef CategoryCreateResponse
 * @property {number} [uid]
 * @property {string} [message]
 */
/**
 * @typedef Category
 * @property {string} [id]
 * @property {string[]} [synonyms]
 * @property {string} [modified_on]
 * @property {boolean} is_active
 * @property {number} [priority]
 * @property {Media2} [media]
 * @property {string} [slug]
 * @property {string} [created_on]
 * @property {number[]} departments
 * @property {number} level
 * @property {Object} [created_by]
 * @property {string} name
 * @property {string[]} [tryouts]
 * @property {Hierarchy[]} [hierarchy]
 * @property {Object} [modified_by]
 * @property {number} [uid]
 * @property {CategoryMapping} [marketplaces]
 */
/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */
/**
 * @typedef CategoryUpdateResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef ProductPublish
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */
/**
 * @typedef TaxIdentifier
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code_id]
 * @property {string} [hsn_code]
 */
/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
 */
/**
 * @typedef Trader
 * @property {string} [type]
 * @property {string[]} [address]
 * @property {Object} name
 */
/**
 * @typedef CustomOrder
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 */
/**
 * @typedef NetQuantity
 * @property {Object} [unit]
 * @property {number} [value]
 */
/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {boolean} [is_set]
 * @property {Object} attributes
 * @property {ProductPublish} [product_publish]
 * @property {string[]} [product_group_tag]
 * @property {string} category_slug
 * @property {string[]} [highlights]
 * @property {TaxIdentifier} tax_identifier
 * @property {TeaserTag} [teaser_tag]
 * @property {Object[]} sizes
 * @property {string} item_type
 * @property {Trader[]} trader
 * @property {string[]} [tags]
 * @property {string} currency
 * @property {Media1[]} [media]
 * @property {ReturnConfig} return_config
 * @property {Object} [variants]
 * @property {boolean} [multi_size]
 * @property {string} name
 * @property {string} country_of_origin
 * @property {string} item_code
 * @property {number} [no_of_boxes]
 * @property {boolean} [is_image_less_product]
 * @property {string} [action]
 * @property {string} [short_description]
 * @property {CustomOrder} [custom_order]
 * @property {number[]} departments
 * @property {number} company_id
 * @property {Object} [change_request_id]
 * @property {number} brand_uid
 * @property {Object} [_custom_json]
 * @property {NetQuantity} [net_quantity]
 * @property {string} template_tag
 * @property {string} [size_guide]
 * @property {string} slug
 * @property {boolean} [is_dependent]
 * @property {string} [bulk_job_id]
 * @property {string} [description]
 * @property {string} [requester]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {Object} [variant_group]
 * @property {Object} [variant_media]
 */
/**
 * @typedef ProductPublished
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */
/**
 * @typedef ReturnConfigResponse
 * @property {string} unit
 * @property {number} time
 * @property {boolean} returnable
 */
/**
 * @typedef Image
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */
/**
 * @typedef Logo
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */
/**
 * @typedef NetQuantityResponse
 * @property {string} [unit]
 * @property {number} [value]
 */
/**
 * @typedef Product
 * @property {boolean} [is_set]
 * @property {Object} [attributes]
 * @property {boolean} [is_active]
 * @property {ProductPublished} [product_publish]
 * @property {string} [primary_color]
 * @property {string[]} [product_group_tag]
 * @property {string} [category_slug]
 * @property {string[]} [highlights]
 * @property {number[]} [all_company_ids]
 * @property {Object} [tax_identifier]
 * @property {Object} [teaser_tag]
 * @property {Object} [modified_by]
 * @property {boolean} [is_expirable]
 * @property {string} [item_type]
 * @property {number} [category_uid]
 * @property {string} [hsn_code]
 * @property {string} [id]
 * @property {Object[]} [trader]
 * @property {string} [verified_on]
 * @property {string[]} [tags]
 * @property {string} [currency]
 * @property {Media1[]} [media]
 * @property {ReturnConfigResponse} [return_config]
 * @property {Object} [variants]
 * @property {boolean} [multi_size]
 * @property {string} [created_on]
 * @property {VerifiedBy} [verified_by]
 * @property {string} [name]
 * @property {string} [color]
 * @property {string} [country_of_origin]
 * @property {string} [item_code]
 * @property {Object[]} [all_sizes]
 * @property {number} [no_of_boxes]
 * @property {string} [modified_on]
 * @property {boolean} [is_image_less_product]
 * @property {string} [image_nature]
 * @property {string} [short_description]
 * @property {Object} [custom_order]
 * @property {Image[]} [images]
 * @property {number[]} [departments]
 * @property {number} [company_id]
 * @property {Brand} [brand]
 * @property {number} [brand_uid]
 * @property {string} [pending]
 * @property {string[]} [l3_mapping]
 * @property {string[]} [all_identifiers]
 * @property {Object} [_custom_json]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {string} [template_tag]
 * @property {string} [size_guide]
 * @property {boolean} [is_physical]
 * @property {string} [slug]
 * @property {Object} [category]
 * @property {Object} [created_by]
 * @property {Object} [moq]
 * @property {string} [stage]
 * @property {boolean} [is_dependent]
 * @property {string} [description]
 * @property {number} [uid]
 * @property {Object[]} [sizes]
 * @property {Object} [variant_group]
 * @property {Object} [variant_media]
 */
/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductVariants
 * @property {Media1[]} [media]
 * @property {string} [name]
 * @property {number} [brand_uid]
 * @property {string} [item_code]
 * @property {number} [uid]
 * @property {number} [category_uid]
 */
/**
 * @typedef ProductVariantsResponse
 * @property {ProductVariants[]} [variants]
 * @property {Page} [page]
 */
/**
 * @typedef AttributeMasterSerializer
 * @property {string} [raw_key]
 * @property {string} [logo]
 * @property {AttributeMaster} schema
 * @property {string} [unit]
 * @property {Object} [modified_by]
 * @property {boolean} [variant]
 * @property {boolean} [is_nested]
 * @property {string[]} [tags]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {AttributeMasterFilter} filters
 * @property {string} [suggestion]
 * @property {string} [modified_on]
 * @property {string[]} departments
 * @property {Object} [synonyms]
 * @property {string} slug
 * @property {AttributeMasterDetails} details
 * @property {Object} [created_by]
 * @property {string} [description]
 * @property {boolean} [enabled_for_end_consumer]
 */
/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */
/**
 * @typedef SingleProductResponse
 * @property {Product} [data]
 */
/**
 * @typedef ProductCreateUpdate
 * @property {boolean} [is_set]
 * @property {ProductPublish} [product_publish]
 * @property {string[]} [product_group_tag]
 * @property {string} category_slug
 * @property {string[]} [highlights]
 * @property {TaxIdentifier} tax_identifier
 * @property {TeaserTag} [teaser_tag]
 * @property {string} item_type
 * @property {Trader[]} trader
 * @property {string[]} [tags]
 * @property {string} currency
 * @property {Media1[]} [media]
 * @property {ReturnConfig} return_config
 * @property {Object} [variants]
 * @property {boolean} [multi_size]
 * @property {Object} name
 * @property {string} country_of_origin
 * @property {Object} item_code
 * @property {number} [no_of_boxes]
 * @property {boolean} [is_image_less_product]
 * @property {string} [action]
 * @property {string} [short_description]
 * @property {CustomOrder} [custom_order]
 * @property {number[]} departments
 * @property {number} company_id
 * @property {Object} [change_request_id]
 * @property {number} brand_uid
 * @property {Object} [_custom_json]
 * @property {NetQuantity} [net_quantity]
 * @property {string} template_tag
 * @property {string} [size_guide]
 * @property {string} slug
 * @property {boolean} [is_dependent]
 * @property {string} [bulk_job_id]
 * @property {string} [description]
 * @property {string} [requester]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {Object} [variant_group]
 * @property {Object} [variant_media]
 */
/**
 * @typedef ValidateIdentifier
 * @property {string} gtin_value
 * @property {string} gtin_type
 * @property {boolean} [primary]
 */
/**
 * @typedef AllSizes
 * @property {number} item_weight
 * @property {number} item_length
 * @property {number} item_width
 * @property {Object} size
 * @property {string} item_dimensions_unit_of_measure
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {Object} item_weight_unit_of_measure
 * @property {number} item_height
 */
/**
 * @typedef ListALLSizes
 * @property {AllSizes[]} [all_sizes]
 */
/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */
/**
 * @typedef UserInfo1
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [user_id]
 */
/**
 * @typedef BulkJob
 * @property {Object[]} [cancelled_records]
 * @property {string} [modified_on]
 * @property {Object[]} [failed_records]
 * @property {number} [failed]
 * @property {string} [template_tag]
 * @property {string} [file_path]
 * @property {string} created_on
 * @property {number} company_id
 * @property {UserInfo1} [created_by]
 * @property {number} [succeed]
 * @property {string} [stage]
 * @property {string} [custom_template_tag]
 * @property {string} [tracking_url]
 * @property {UserInfo1} [modified_by]
 * @property {boolean} [is_active]
 * @property {number} [cancelled]
 * @property {number} [total]
 */
/**
 * @typedef BulkResponse
 * @property {string} [modified_on]
 * @property {string} batch_id
 * @property {string} created_on
 * @property {UserInfo1} [created_by]
 * @property {UserInfo1} [modified_by]
 * @property {boolean} [is_active]
 */
/**
 * @typedef UserDetail1
 * @property {string} [full_name]
 * @property {string} [username]
 * @property {string} [user_id]
 */
/**
 * @typedef ProductBulkRequest
 * @property {string[]} [cancelled_records]
 * @property {string} [modified_on]
 * @property {string[]} [failed_records]
 * @property {number} [failed]
 * @property {string} [template_tag]
 * @property {string} [file_path]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {string} [stage]
 * @property {UserDetail1} [created_by]
 * @property {number} [succeed]
 * @property {ProductTemplate} [template]
 * @property {UserDetail1} [modified_by]
 * @property {boolean} [is_active]
 * @property {number} [cancelled]
 * @property {number} [total]
 */
/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BulkProductRequest
 * @property {string} template_tag
 * @property {Object[]} data
 * @property {string} batch_id
 * @property {number} company_id
 */
/**
 * @typedef NestedTags
 * @property {string[]} [tags]
 */
/**
 * @typedef ProductTagsViewResponse
 * @property {NestedTags} [items]
 */
/**
 * @typedef ProductBulkAssets
 * @property {string} url
 * @property {number} [company_id]
 * @property {Object} user
 */
/**
 * @typedef UserCommon
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {number} [company_id]
 */
/**
 * @typedef Items
 * @property {string[]} [cancelled_records]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string[]} [failed_records]
 * @property {number} [failed]
 * @property {string} [file_path]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {UserCommon} [created_by]
 * @property {number} [succeed]
 * @property {string} [stage]
 * @property {number} [retry]
 * @property {string} [tracking_url]
 * @property {UserCommon} [modified_by]
 * @property {boolean} [is_active]
 * @property {number} [cancelled]
 * @property {number} [total]
 */
/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {number} [item_id]
 * @property {number} [company_id]
 * @property {string} [size]
 */
/**
 * @typedef ProductSizeDeleteResponse
 * @property {ProductSizeDeleteDataResponse} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef ItemQuery
 * @property {number} [brand_uid]
 * @property {number} [uid]
 * @property {string} [item_code]
 */
/**
 * @typedef SetSize
 * @property {number} pieces
 * @property {string} size
 */
/**
 * @typedef SizeDistribution
 * @property {SetSize[]} sizes
 */
/**
 * @typedef InventorySet
 * @property {SizeDistribution} size_distribution
 * @property {number} [quantity]
 * @property {string} [name]
 */
/**
 * @typedef GTIN
 * @property {Object} gtin_value
 * @property {string} gtin_type
 * @property {boolean} [primary]
 */
/**
 * @typedef InvSize
 * @property {InventorySet} [set]
 * @property {boolean} [is_set]
 * @property {number} [price]
 * @property {number} [item_weight]
 * @property {string} [expiration_date]
 * @property {number} [item_length]
 * @property {string} currency
 * @property {number} price_effective
 * @property {number} [item_width]
 * @property {Object} size
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [price_transfer]
 * @property {GTIN[]} identifiers
 * @property {string} store_code
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [item_height]
 * @property {number} quantity
 */
/**
 * @typedef InventoryRequest
 * @property {ItemQuery} item
 * @property {InvSize[]} sizes
 * @property {number} company_id
 */
/**
 * @typedef InventoryResponse
 * @property {number} [price]
 * @property {number} [sellable_quantity]
 * @property {string} [currency]
 * @property {string} [seller_identifier]
 * @property {string} [inventory_updated_on]
 * @property {number} [price_effective]
 * @property {string} [size]
 * @property {number} [item_id]
 * @property {Object} [store]
 * @property {number} [price_transfer]
 * @property {Object} [identifiers]
 * @property {string} [uid]
 * @property {number} [quantity]
 */
/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ManufacturerResponse
 * @property {boolean} is_default
 * @property {string} address
 * @property {string} name
 */
/**
 * @typedef DimensionResponse
 * @property {string} unit
 * @property {number} width
 * @property {number} height
 * @property {boolean} is_default
 * @property {number} length
 */
/**
 * @typedef Trader1
 * @property {string} type
 * @property {string[]} address
 * @property {string} name
 */
/**
 * @typedef ReturnConfig1
 * @property {string} [unit]
 * @property {number} [time]
 * @property {boolean} [returnable]
 */
/**
 * @typedef CompanyMeta
 * @property {number} id
 */
/**
 * @typedef WeightResponse
 * @property {boolean} is_default
 * @property {string} unit
 * @property {number} shipping
 */
/**
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
 */
/**
 * @typedef PriceMeta
 * @property {string} [updated_at]
 * @property {number} marked
 * @property {Object} [tp_notes]
 * @property {string} currency
 * @property {number} effective
 * @property {number} transfer
 */
/**
 * @typedef QuantityBase
 * @property {string} [updated_at]
 * @property {number} [count]
 */
/**
 * @typedef Quantities
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [sellable]
 */
/**
 * @typedef InventorySellerResponse
 * @property {InventorySet} [set]
 * @property {boolean} [is_set]
 * @property {string} fynd_article_code
 * @property {string} [added_on_store]
 * @property {boolean} fragile
 * @property {Object} [tax_identifier]
 * @property {ManufacturerResponse} manufacturer
 * @property {DimensionResponse} dimension
 * @property {UserSerializer} [modified_by]
 * @property {Object} [fynd_meta]
 * @property {number} total_quantity
 * @property {Trader1[]} [trader]
 * @property {string[]} [tags]
 * @property {Object} identifier
 * @property {string} seller_identifier
 * @property {ReturnConfig1} [return_config]
 * @property {string} size
 * @property {number} item_id
 * @property {CompanyMeta} company
 * @property {string} country_of_origin
 * @property {string} fynd_item_code
 * @property {Object} [raw_meta]
 * @property {WeightResponse} weight
 * @property {BrandMeta} brand
 * @property {StoreMeta} store
 * @property {PriceMeta} price
 * @property {string} [expiration_date]
 * @property {Object} [_custom_json]
 * @property {string} [trace_id]
 * @property {Object} [meta]
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {boolean} [track_inventory]
 * @property {Quantities} [quantities]
 * @property {string} uid
 * @property {boolean} [is_active]
 */
/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BulkInventoryGetItems
 * @property {string[]} [cancelled_records]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string[]} [failed_records]
 * @property {number} [failed]
 * @property {string} [file_path]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [stage]
 * @property {number} [succeed]
 * @property {Object} [modified_by]
 * @property {boolean} [is_active]
 * @property {number} [cancelled]
 * @property {number} [total]
 */
/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef InventoryJobPayload
 * @property {number} [price]
 * @property {string} [expiration_date]
 * @property {string} [trace_id]
 * @property {string[]} [tags]
 * @property {number} [price_marked]
 * @property {string} seller_identifier
 * @property {string} [currency]
 * @property {number} [price_effective]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} store_code
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [total_quantity]
 * @property {number} [quantity]
 */
/**
 * @typedef InventoryBulkRequest
 * @property {string} batch_id
 * @property {InventoryJobPayload[]} sizes
 * @property {number} company_id
 * @property {Object} [user]
 */
/**
 * @typedef InventoryExportRequest
 * @property {string} [type]
 * @property {number[]} [store]
 * @property {number[]} [brand]
 */
/**
 * @typedef InventoryExportResponse
 * @property {string} [status]
 * @property {string} [trigger_on]
 * @property {string} task_id
 * @property {Object} [request_params]
 * @property {number} seller_id
 */
/**
 * @typedef InventoryExportJob
 * @property {string} [status]
 * @property {string} [trigger_on]
 * @property {string} task_id
 * @property {string} [completed_on]
 * @property {Object} [request_params]
 * @property {number} seller_id
 * @property {string} [url]
 */
/**
 * @typedef ManufacturerResponse1
 * @property {boolean} [is_default]
 * @property {string} [address]
 * @property {string} [name]
 */
/**
 * @typedef DimensionResponse1
 * @property {number} [height]
 * @property {string} [unit]
 * @property {number} [width]
 * @property {number} [length]
 */
/**
 * @typedef Trader2
 * @property {string} [type]
 * @property {string[]} [address]
 * @property {string} [name]
 */
/**
 * @typedef ReturnConfig2
 * @property {string} [unit]
 * @property {number} [time]
 * @property {boolean} [returnable]
 */
/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */
/**
 * @typedef WeightResponse1
 * @property {string} [unit]
 * @property {number} [shipping]
 */
/**
 * @typedef BrandMeta1
 * @property {number} [id]
 * @property {string} [name]
 */
/**
 * @typedef ArticleStoreResponse
 * @property {string} [store_code]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [store_type]
 */
/**
 * @typedef PriceArticle
 * @property {number} [marked]
 * @property {Object} [tp_notes]
 * @property {string} [currency]
 * @property {number} [effective]
 * @property {number} [transfer]
 */
/**
 * @typedef Quantity
 * @property {number} [count]
 */
/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [order_committed]
 * @property {Quantity} [not_available]
 * @property {Quantity} [damaged]
 * @property {Quantity} [sellable]
 */
/**
 * @typedef GetInventories
 * @property {boolean} [is_set]
 * @property {Object} [tax_identifier]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {DimensionResponse1} [dimension]
 * @property {UserSerializer} [modified_by]
 * @property {number} [total_quantity]
 * @property {string} [id]
 * @property {Trader2[]} [trader]
 * @property {string[]} [tags]
 * @property {Object} [identifier]
 * @property {string} [seller_identifier]
 * @property {ReturnConfig2} [return_config]
 * @property {string} [inventory_updated_on]
 * @property {string} [size]
 * @property {number} [item_id]
 * @property {CompanyMeta1} [company]
 * @property {string} [country_of_origin]
 * @property {WeightResponse1} [weight]
 * @property {DateMeta} [date_meta]
 * @property {BrandMeta1} [brand]
 * @property {Object} [platforms]
 * @property {ArticleStoreResponse} [store]
 * @property {PriceArticle} [price]
 * @property {string} [expiration_date]
 * @property {string} [trace_id]
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {boolean} [track_inventory]
 * @property {QuantitiesArticle} [quantities]
 * @property {string} [uid]
 */
/**
 * @typedef GetInventoriesResponse
 * @property {GetInventories[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef FilerList
 * @property {string} [value]
 * @property {string} [display]
 */
/**
 * @typedef InventoryConfig
 * @property {FilerList[]} [data]
 * @property {boolean} [multivalues]
 */
/**
 * @typedef InventoryPayload
 * @property {string} [expiration_date]
 * @property {string} [trace_id]
 * @property {string[]} [tags]
 * @property {number} [price_marked]
 * @property {string} seller_identifier
 * @property {number} [price_effective]
 * @property {number} store_id
 * @property {number} [total_quantity]
 */
/**
 * @typedef InventoryRequestSchemaV2
 * @property {number} company_id
 * @property {Object} [meta]
 * @property {InventoryPayload[]} [payload]
 */
/**
 * @typedef InventoryFailedReason
 * @property {string} [errors]
 * @property {string} message
 */
/**
 * @typedef InventoryResponseItem
 * @property {InventoryPayload} [data]
 * @property {InventoryFailedReason} [reason]
 */
/**
 * @typedef InventoryUpdateResponse
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message
 */
/**
 * @typedef HsnUpsert
 * @property {number} tax1
 * @property {boolean} [tax_on_esp]
 * @property {boolean} [is_active]
 * @property {number} company_id
 * @property {boolean} tax_on_mrp
 * @property {number} [tax2]
 * @property {number} [uid]
 * @property {string} hsn_code
 * @property {string} hs2_code
 * @property {number} [threshold2]
 * @property {number} threshold1
 */
/**
 * @typedef HsnCodesObject
 * @property {string} [id]
 * @property {number} [tax1]
 * @property {string} [modified_on]
 * @property {boolean} [tax_on_esp]
 * @property {number} [company_id]
 * @property {boolean} [tax_on_mrp]
 * @property {number} [tax2]
 * @property {string} [hsn_code]
 * @property {string} [hs2_code]
 * @property {number} [threshold2]
 * @property {number} [threshold1]
 */
/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */
/**
 * @typedef PageResponse
 * @property {number} [size]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {string} [current]
 * @property {number} [item_total]
 */
/**
 * @typedef HsnCodesListingResponse
 * @property {HsnCodesObject[]} [items]
 * @property {PageResponse} [page]
 */
/**
 * @typedef BulkHsnUpsert
 * @property {HsnUpsert[]} data
 */
/**
 * @typedef BulkHsnResponse
 * @property {boolean} [success]
 */
/**
 * @typedef TaxSlab
 * @property {number} rate
 * @property {number} threshold
 * @property {string} effective_date
 * @property {number} [cess]
 */
/**
 * @typedef HSNDataInsertV2
 * @property {string} reporting_hsn
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {Object} [created_by]
 * @property {TaxSlab[]} taxes
 * @property {string} description
 * @property {string} country_code
 * @property {string} type
 * @property {string} hsn_code
 */
/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */
/**
 * @typedef BrandItem
 * @property {Media} [logo]
 * @property {Action} [action]
 * @property {string} [slug]
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {string} [discount]
 * @property {number} [uid]
 */
/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */
/**
 * @typedef Department
 * @property {Media} [logo]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {number} [priority_order]
 */
/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */
/**
 * @typedef ThirdLevelChild
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {string} [slug]
 * @property {Object[]} [childs]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 */
/**
 * @typedef SecondLevelChild
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {string} [slug]
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 */
/**
 * @typedef Child
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {string} [slug]
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 */
/**
 * @typedef CategoryItems
 * @property {Action} [action]
 * @property {string} [slug]
 * @property {Child[]} [childs]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 */
/**
 * @typedef DepartmentCategoryTree
 * @property {string} [department]
 * @property {CategoryItems[]} [items]
 */
/**
 * @typedef DepartmentIdentifier
 * @property {number} [uid]
 * @property {string} [slug]
 */
/**
 * @typedef CategoryListingResponse
 * @property {DepartmentCategoryTree[]} [data]
 * @property {DepartmentIdentifier[]} [departments]
 */
/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {Object} [operators]
 * @property {Page} page
 */
/**
 * @typedef ProductDetail
 * @property {Media1[]} [medias]
 * @property {Object} [attributes]
 * @property {string[]} [highlights]
 * @property {string} [product_online_date]
 * @property {Object} [teaser_tag]
 * @property {string} [type]
 * @property {string[]} [similars]
 * @property {number} [rating_count]
 * @property {string} [item_type]
 * @property {number} [rating]
 * @property {string} [name]
 * @property {string} [color]
 * @property {string} [item_code]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [image_nature]
 * @property {string} [short_description]
 * @property {boolean} [has_variant]
 * @property {ProductBrand} [brand]
 * @property {Object} [promo_meta]
 * @property {string} slug
 * @property {string[]} [tryouts]
 * @property {string} [description]
 * @property {number} [uid]
 */
/**
 * @typedef InventoryPage
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {string} type
 * @property {number} item_total
 */
/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */
/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */
/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 * @property {string} [order]
 */
/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */
/**
 * @typedef UserSerializer1
 * @property {string} [contact]
 * @property {string} [username]
 * @property {string} [user_id]
 */
/**
 * @typedef InvoiceCredSerializer
 * @property {string} [password]
 * @property {string} [username]
 * @property {boolean} [enabled]
 */
/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */
/**
 * @typedef UserSerializer2
 * @property {string} [contact]
 * @property {string} [username]
 * @property {string} [user_id]
 */
/**
 * @typedef GetAddressSerializer
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [address1]
 * @property {string} [landmark]
 * @property {string} [address_type]
 * @property {number} [latitude]
 * @property {number} [pincode]
 * @property {string} [country_code]
 * @property {number} [longitude]
 * @property {string} [city]
 * @property {string} [address2]
 */
/**
 * @typedef GetCompanySerializer
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {UserSerializer2} [verified_by]
 * @property {UserSerializer2} [created_by]
 * @property {string} [stage]
 * @property {string} [name]
 * @property {string} [business_type]
 * @property {string} [reject_reason]
 * @property {string} [company_type]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {UserSerializer2} [modified_by]
 * @property {number} [uid]
 */
/**
 * @typedef LocationManagerSerializer
 * @property {string} [name]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [email]
 */
/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */
/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [opening]
 * @property {LocationTimingSerializer} [closing]
 * @property {boolean} open
 * @property {string} weekday
 */
/**
 * @typedef GetLocationSerializer
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {LocationIntegrationType} [integration_type]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {Object} [warnings]
 * @property {string[]} [notification_emails]
 * @property {UserSerializer1} [modified_by]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {UserSerializer1} [verified_by]
 * @property {string} name
 * @property {GetCompanySerializer} [company]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} [modified_on]
 * @property {GetAddressSerializer} address
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} display_name
 * @property {string} [store_type]
 * @property {Document[]} [documents]
 * @property {Object} [_custom_json]
 * @property {string} [phone_number]
 * @property {UserSerializer1} [created_by]
 * @property {string} [stage]
 * @property {string} code
 * @property {number} [uid]
 */
/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ApplicationBrandJson
 * @property {Object} _custom_json
 */
/**
 * @typedef ApplicationCategoryJson
 * @property {Object} _custom_json
 */
/**
 * @typedef ApplicationDepartment
 * @property {string} [logo]
 * @property {Object} [_custom_json]
 * @property {string} app_id
 * @property {string} [name]
 * @property {number} uid
 * @property {boolean} [is_active]
 */
/**
 * @typedef ApplicationDepartmentListingResponse
 * @property {ApplicationDepartment[]} [items]
 * @property {Page} page
 */
/**
 * @typedef ApplicationDepartmentJson
 * @property {Object} _custom_json
 */
/**
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */
/**
 * @typedef Website
 * @property {string} [url]
 */
/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */
/**
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
 */
/**
 * @typedef CompanyTaxesSerializer
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */
/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */
/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {string} business_type
 * @property {string} company_type
 * @property {Object} [warnings]
 * @property {string} [mode]
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {BusinessDetails} [business_details]
 * @property {string[]} [notification_emails]
 * @property {number} uid
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [modified_by]
 * @property {Document[]} [documents]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {Object} [_custom_json]
 * @property {ContactDetails} [contact_details]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [name]
 * @property {string} [business_info]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {boolean} [franchise_enabled]
 */
/**
 * @typedef CompanyTaxesSerializer1
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */
/**
 * @typedef CreateUpdateAddressSerializer
 * @property {number} latitude
 * @property {string} address1
 * @property {string} state
 * @property {string} city
 * @property {string} country
 * @property {string} address_type
 * @property {string} [address2]
 * @property {number} longitude
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} pincode
 */
/**
 * @typedef UpdateCompany
 * @property {string} [business_type]
 * @property {string} [business_info]
 * @property {string} [company_type]
 * @property {string[]} [notification_emails]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {Object} [warnings]
 * @property {Object} [_custom_json]
 * @property {ContactDetails} [contact_details]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {string} [reject_reason]
 * @property {Document[]} [documents]
 * @property {BusinessDetails} [business_details]
 * @property {string} [name]
 * @property {boolean} [franchise_enabled]
 */
/**
 * @typedef ProfileSuccessResponse
 * @property {number} [uid]
 * @property {boolean} [success]
 */
/**
 * @typedef DocumentsObj
 * @property {number} [verified]
 * @property {number} [pending]
 */
/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [product]
 * @property {number} [uid]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [brand]
 * @property {string} [stage]
 * @property {DocumentsObj} [store]
 */
/**
 * @typedef BrandBannerSerializer
 * @property {string} [portrait]
 * @property {string} [landscape]
 */
/**
 * @typedef GetBrandResponseSerializer
 * @property {string} [description]
 * @property {Object} [warnings]
 * @property {Object} [_locale_language]
 * @property {string} [mode]
 * @property {string} [logo]
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {number} [uid]
 * @property {UserSerializer} [created_by]
 * @property {string} [slug_key]
 * @property {BrandBannerSerializer} [banner]
 * @property {UserSerializer} [modified_by]
 * @property {string} [reject_reason]
 * @property {Object} [_custom_json]
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {string} [description]
 * @property {number} [uid]
 * @property {string} [brand_tier]
 * @property {Object} [_custom_json]
 * @property {string[]} [synonyms]
 * @property {Object} [_locale_language]
 * @property {string} logo
 * @property {BrandBannerSerializer} [banner]
 * @property {number} [company_id]
 * @property {string} name
 */
/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */
/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */
/**
 * @typedef CompanySerializer
 * @property {string} business_type
 * @property {string[]} [notification_emails]
 * @property {string} [created_on]
 * @property {string} company_type
 * @property {number} [uid]
 * @property {UserSerializer} [created_by]
 * @property {string[]} [market_channels]
 * @property {Object} [_custom_json]
 * @property {CompanyDetails} [details]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [verified_on]
 * @property {string} [reject_reason]
 * @property {UserSerializer} [verified_by]
 * @property {string} [stage]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [name]
 */
/**
 * @typedef CompanyBrandSerializer
 * @property {string} [created_on]
 * @property {number} [uid]
 * @property {Object} [warnings]
 * @property {UserSerializer} [created_by]
 * @property {CompanySerializer} [company]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [verified_on]
 * @property {string} [stage]
 * @property {UserSerializer} [verified_by]
 * @property {string} [reject_reason]
 */
/**
 * @typedef CompanyBrandListSerializer
 * @property {Page} [page]
 * @property {CompanyBrandSerializer[]} [items]
 */
/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} company
 * @property {number} [uid]
 * @property {number[]} brands
 */
/**
 * @typedef HolidayDateSerializer
 * @property {string} end_date
 * @property {string} start_date
 */
/**
 * @typedef HolidaySchemaSerializer
 * @property {HolidayDateSerializer} date
 * @property {string} title
 * @property {string} holiday_type
 */
/**
 * @typedef LocationSerializer
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string[]} [notification_emails]
 * @property {string} display_name
 * @property {number} [uid]
 * @property {Object} [warnings]
 * @property {string} code
 * @property {Object} [_custom_json]
 * @property {number} company
 * @property {LocationManagerSerializer} [manager]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {GetAddressSerializer} address
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {Document[]} [documents]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} name
 * @property {SellerPhoneNumber[]} [contact_numbers]
 */
/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */
/**
 * @typedef _ArticleQuery
 * @property {string} [size]
 * @property {number} [item_id]
 * @property {number[]} [ignored_stores]
 */
/**
 * @typedef _ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */
/**
 * @typedef _AssignStoreArticle
 * @property {_ArticleQuery} [query]
 * @property {Object} [meta]
 * @property {string} [group_id]
 * @property {number} [quantity]
 * @property {_ArticleAssignment} [article_assignment]
 */
/**
 * @typedef AssignStoreRequestValidator
 * @property {string} [channel_identifier]
 * @property {number[]} [store_ids]
 * @property {string} [app_id]
 * @property {_AssignStoreArticle[]} [articles]
 * @property {string} [channel_type]
 * @property {string} [pincode]
 * @property {number} [company_id]
 */
/**
 * @typedef AssignStoreResponseSerializer
 * @property {number} [store_id]
 * @property {string} [uid]
 * @property {Object} [meta]
 * @property {string} [size]
 * @property {number} [index]
 * @property {string} [_id]
 * @property {number} [price_marked]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [quantity]
 * @property {number} [price_effective]
 * @property {string} [s_city]
 * @property {string} [store_pincode]
 * @property {number} [item_id]
 * @property {number} [company_id]
 * @property {boolean} [status]
 */
/**
 * @typedef FailedResponse
 * @property {string} message
 */
/**
 * @typedef CDN
 * @property {string} url
 */
/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */
/**
 * @typedef StartResponse
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string[]} [tags]
 */
/**
 * @typedef StartRequest
 * @property {string} file_name
 * @property {string} content_type
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Object} [params]
 */
/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {string} created_on
 * @property {string} modified_on
 */
/**
 * @typedef Opts
 * @property {number} [attempts]
 * @property {number} [timestamp]
 * @property {number} [delay]
 */
/**
 * @typedef CopyFileTask
 * @property {string} id
 * @property {string} name
 * @property {BulkRequest} data
 * @property {Opts} opts
 * @property {number} progress
 * @property {number} delay
 * @property {number} timestamp
 * @property {number} attempts_made
 * @property {string[]} [stacktrace]
 * @property {number} finished_on
 * @property {number} processed_on
 */
/**
 * @typedef BulkUploadResponse
 * @property {string} tracking_url
 * @property {CopyFileTask} task
 */
/**
 * @typedef ReqConfiguration
 * @property {number} [concurrency]
 */
/**
 * @typedef Destination
 * @property {string} namespace
 * @property {string} rewrite
 * @property {string} [basepath]
 */
/**
 * @typedef BulkRequest
 * @property {string[]} urls
 * @property {Destination} destination
 * @property {ReqConfiguration} [configuration]
 */
/**
 * @typedef Urls
 * @property {string} url
 * @property {string} signed_url
 * @property {number} expiry
 */
/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */
/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */
/**
 * @typedef DbRecord
 * @property {boolean} success
 * @property {string[]} tags
 * @property {string} _id
 * @property {string} file_name
 * @property {string} [operation]
 * @property {string} namespace
 * @property {string} content_type
 * @property {string} file_path
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string} created_on
 * @property {string} modified_on
 */
/**
 * @typedef BrowseResponse
 * @property {DbRecord[]} items
 * @property {Page} page
 */
/**
 * @typedef RedirectDevice
 * @property {string} [link]
 * @property {string} [type]
 */
/**
 * @typedef WebRedirect
 * @property {string} [link]
 * @property {string} [type]
 */
/**
 * @typedef Redirects
 * @property {RedirectDevice} [ios]
 * @property {RedirectDevice} [android]
 * @property {WebRedirect} [web]
 * @property {boolean} [force_web]
 */
/**
 * @typedef CampaignShortLink
 * @property {string} [source]
 * @property {string} [medium]
 */
/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry]
 */
/**
 * @typedef SocialMediaTags
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image]
 */
/**
 * @typedef ShortLinkReq
 * @property {string} title
 * @property {string} url
 * @property {string} [hash]
 * @property {boolean} [active]
 * @property {string} [expire_at]
 * @property {boolean} [enable_tracking]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */
/**
 * @typedef UrlInfo
 * @property {string} [original]
 * @property {string} [short]
 * @property {string} [hash]
 */
/**
 * @typedef ShortLinkRes
 * @property {string} [title]
 * @property {UrlInfo} [url]
 * @property {string} [created_by]
 * @property {boolean} [app_redirect]
 * @property {string} [fallback]
 * @property {boolean} [active]
 * @property {string} [_id]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [application]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {Object} [meta]
 * @property {string} [updated_at]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */
/**
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ErrorRes
 * @property {string} [message]
 */
/**
 * @typedef DataTresholdDTO
 * @property {number} [min_price]
 * @property {number} [safe_stock]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {GenericDTO[]} [period_type_list]
 */
/**
 * @typedef GenericDTO
 * @property {string} [text]
 * @property {Object} [value]
 */
/**
 * @typedef JobConfigDTO
 * @property {Object} [integration_data]
 * @property {string} [company_name]
 * @property {string} integration
 * @property {number} company_id
 * @property {TaskDTO} [task_details]
 * @property {DataTresholdDTO} [threshold_details]
 * @property {string} [job_code]
 * @property {string} [alias]
 */
/**
 * @typedef TaskDTO
 * @property {number} [type]
 * @property {GenericDTO[]} [group_list]
 */
/**
 * @typedef ResponseEnvelopeString
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {string} [items]
 * @property {string} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef KafkaMetaModel
 * @property {string} [job_type]
 * @property {number} [batch_id]
 * @property {string} [action]
 * @property {string[]} [trace]
 * @property {string} [created_on]
 * @property {number} [created_timestamp]
 */
/**
 * @typedef SuppressStoreModel
 * @property {number[]} [stores]
 */
/**
 * @typedef SuppressStorePayload
 * @property {SuppressStoreModel[]} [payload]
 * @property {KafkaMetaModel} [meta]
 */
/**
 * @typedef KafkaResponse
 * @property {number} [offset]
 * @property {number} [partition]
 */
/**
 * @typedef ResponseEnvelopeKafkaResponse
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {KafkaResponse} [items]
 * @property {KafkaResponse} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef GCompany
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [name]
 * @property {GStore[]} [stores]
 */
/**
 * @typedef GStore
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [code]
 * @property {string} [name]
 * @property {StoreData} [data]
 */
/**
 * @typedef Metum
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef ResponseEnvelopeListSlingshotConfigurationDetail
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {SlingshotConfigurationDetail[]} [items]
 * @property {SlingshotConfigurationDetail[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef SlingshotConfigurationDetail
 * @property {SlingshotIntegration} [integration]
 * @property {GCompany[]} [companies]
 */
/**
 * @typedef SlingshotIntegration
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Metum[]} [meta]
 */
/**
 * @typedef StoreData
 * @property {string} [location_id]
 */
/**
 * @typedef AWSS3config
 * @property {string} [bucket]
 * @property {string} [region]
 * @property {string} [dir]
 * @property {string} [access_key]
 * @property {string} [secret_key]
 * @property {string} [local_file_path]
 * @property {string} [archive_path]
 * @property {boolean} [archive]
 * @property {boolean} [delete]
 * @property {boolean} [unzip]
 * @property {string} [zip_format]
 * @property {string} [file_regex]
 * @property {ArchiveConfig} [archive_config]
 */
/**
 * @typedef ArchiveConfig
 * @property {boolean} [delete]
 * @property {boolean} [archive]
 * @property {string} [archive_dir]
 */
/**
 * @typedef Audit
 * @property {string} [created_by]
 * @property {string} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef CatalogMasterConfig
 * @property {string} [source_slug]
 */
/**
 * @typedef CompanyConfig
 * @property {number} [company_id]
 * @property {number[]} [exclude_steps]
 * @property {string[]} [hidden_closet_keys]
 * @property {Object} [open_tags]
 * @property {string[]} [tax_identifiers]
 * @property {number} [delete_quantity_threshold]
 */
/**
 * @typedef DBConfig
 * @property {string} [vendor]
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [dbname]
 * @property {string} [query]
 * @property {boolean} [procedure]
 * @property {string} [driver_class]
 * @property {string} [jdbc_url]
 * @property {Object} [optional_properties]
 */
/**
 * @typedef DBConnectionProfile
 * @property {string} [inventory]
 */
/**
 * @typedef DBParamConfig
 * @property {Object} [params]
 */
/**
 * @typedef DefaultHeadersDTO
 * @property {PropBeanDTO} [store]
 * @property {PropBeanDTO} [intf_article_id]
 * @property {PropBeanDTO} [price_effective]
 * @property {PropBeanDTO} [quantity]
 */
/**
 * @typedef DocMappingConfig
 * @property {Object} [properties]
 * @property {number} [junk_data_threshold_count]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {string} [unwind_field]
 * @property {DefaultHeadersDTO} [default_headers]
 */
/**
 * @typedef EmailConfig
 * @property {string} [recepient]
 * @property {string} [host]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {boolean} [read_from_content]
 * @property {boolean} [filter_based_on_recepients]
 * @property {string} [pcol]
 * @property {string} [subject_line_regex]
 * @property {string} [sender_address]
 * @property {string} [local_dir]
 * @property {string[]} [folder_name_hierarchies]
 * @property {string} [attachment_regex]
 * @property {string} [body_content_regex]
 * @property {boolean} [password_protected]
 * @property {string} [zip_format]
 * @property {boolean} [attachment_mandate]
 * @property {boolean} [filter_files_after_extraction]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_unread_mails]
 * @property {string} [content_type]
 * @property {boolean} [downloadable_link]
 * @property {Object} [properties]
 */
/**
 * @typedef FTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {string} [zip_file_regex]
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {boolean} [read_all_files]
 */
/**
 * @typedef FileConfig
 * @property {string} [delimiter]
 * @property {string} [charset]
 * @property {Object} [properties]
 * @property {boolean} [file_has_header]
 * @property {number} [header_index]
 * @property {string[]} [header_array]
 * @property {number} [data_start_index]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {number} [junk_data_threshold_count]
 * @property {string} [file_type]
 * @property {boolean} [line_validity_check]
 * @property {string[]} [sheet_names]
 * @property {boolean} [read_all_sheets]
 * @property {string} [quote_char]
 * @property {string} [escape_char]
 * @property {DefaultHeadersDTO} [default_headers]
 */
/**
 * @typedef GoogleSpreadSheetConfig
 * @property {string} [range]
 * @property {string} [sheet_id]
 * @property {string} [client_secret_location]
 * @property {string} [cred_storage_directory]
 * @property {string} [local_dir]
 * @property {ArchiveConfig} [archive_config]
 */
/**
 * @typedef HttpConfig
 * @property {string} [hosturl]
 * @property {string} [username]
 * @property {string} [password]
 * @property {Object} [request_params]
 * @property {string} [http_method]
 * @property {string} [request_payload]
 * @property {string} [local_path]
 * @property {ArchiveConfig} [archive_config]
 */
/**
 * @typedef JobConfig
 * @property {number} [_id]
 * @property {string} [job_code]
 * @property {string} [task_type]
 * @property {number} [sync_delay]
 * @property {string} [cron_expression]
 * @property {StoreFilter} [store_filter]
 * @property {ProcessConfig} [process_config]
 * @property {StoreConfig[]} [store_config]
 * @property {Object} [properties]
 * @property {boolean} [immediate_first_run]
 * @property {boolean} [disable]
 * @property {string[]} [dependent_job_codes]
 * @property {CompanyConfig[]} [company_config]
 * @property {number[]} [company_ids]
 * @property {string[]} [tax_identifiers]
 * @property {string} [priority]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {DBConnectionProfile} [db_connection_profile]
 * @property {Object} [params]
 * @property {Object} [open_tags]
 * @property {number} [delete_quantity_threshold]
 * @property {CatalogMasterConfig} [catalog_master_config]
 * @property {string[]} [aggregator_types]
 * @property {string} [integration_type]
 * @property {number} [min_price]
 * @property {Audit} [audit]
 * @property {number} [version]
 * @property {string} [alias]
 */
/**
 * @typedef JobConfigRawDTO
 * @property {string} company_name
 * @property {string} integration
 * @property {number} company_id
 * @property {JobConfig} [data]
 */
/**
 * @typedef JsonDocConfig
 * @property {PropBeanConfig[]} [prop_bean_configs]
 */
/**
 * @typedef LocalFileConfig
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [working_dir]
 * @property {boolean} [unzip]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */
/**
 * @typedef MongoDocConfig
 * @property {string} [collection_name]
 * @property {Object} [find_query]
 * @property {Object} [projection_query]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {Object[]} [aggregate_pipeline]
 * @property {boolean} [skip_save]
 */
/**
 * @typedef OAuthConfig
 * @property {number} [limit]
 * @property {number} [pages]
 * @property {number} [interval]
 * @property {string} [consumer_key]
 * @property {string} [consumer_secret]
 * @property {string} [token]
 * @property {string} [token_secret]
 * @property {string} [rest_url]
 * @property {string} [rest_base_url]
 * @property {string} [function_name]
 */
/**
 * @typedef ProcessConfig
 * @property {DBConfig} [db_config]
 * @property {DBParamConfig} [db_param_config]
 * @property {SFTPConfig} [sftp_config]
 * @property {AWSS3config} [aws_s3_config]
 * @property {MongoDocConfig} [mongo_doc_config]
 * @property {FTPConfig} [ftp_config]
 * @property {EmailConfig} [email_config]
 * @property {FileConfig} [file_config]
 * @property {JsonDocConfig} [json_doc_config]
 * @property {DocMappingConfig} [doc_mapping_config]
 * @property {TaskStepConfig} [task_step_config]
 * @property {HttpConfig} [http_config]
 * @property {LocalFileConfig} [local_file_config]
 * @property {OAuthConfig} [oauth_config]
 * @property {GoogleSpreadSheetConfig} [google_spreadsheet_config]
 */
/**
 * @typedef PropBeanConfig
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {Send} [send]
 * @property {Object[]} [validations]
 * @property {string[]} [values]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */
/**
 * @typedef PropBeanDTO
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigRawDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigRawDTO[]} [items]
 * @property {JobConfigRawDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef SFTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [private_key_path]
 * @property {boolean} [strict_host_key_checking]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {boolean} [password_protected]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */
/**
 * @typedef Send
 * @property {boolean} [raw]
 * @property {boolean} [processed]
 */
/**
 * @typedef StoreConfig
 * @property {string} [job_code]
 * @property {string} [storeid]
 * @property {string} [store_alias]
 * @property {string} [store_file_regex]
 * @property {string} [store_file_name]
 * @property {ProcessConfig} [process_config]
 * @property {Object} [properties]
 */
/**
 * @typedef StoreFilter
 * @property {string[]} [include_tags]
 * @property {string[]} [exclude_tags]
 * @property {Object} [query]
 */
/**
 * @typedef TaskConfig
 * @property {string} [name]
 * @property {number} [task_config_id]
 * @property {TaskParam[]} [task_params]
 */
/**
 * @typedef TaskParam
 * @property {string} [name]
 * @property {Object} [value]
 */
/**
 * @typedef TaskStepConfig
 * @property {TaskConfig[]} [task_configs]
 * @property {number[]} [task_config_ids]
 * @property {number[]} [task_config_group_ids]
 */
/**
 * @typedef JobStepsDTO
 * @property {string} [step_name]
 * @property {string} [type]
 * @property {number} [step_execution_time]
 * @property {number} [start_count]
 * @property {number} [end_count]
 * @property {number} [deleted_count]
 * @property {string} [processed_start_time]
 * @property {string} [processed_at]
 */
/**
 * @typedef ResponseEnvelopeListJobStepsDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobStepsDTO[]} [items]
 * @property {JobStepsDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO[]} [items]
 * @property {JobConfigDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef ResponseEnvelopeJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO} [items]
 * @property {JobConfigDTO} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef JobHistoryDto
 * @property {number} [total_added_count]
 * @property {number} [total_updated_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_initial_count]
 * @property {number} [job_id]
 * @property {string} [status]
 * @property {string} [job_code]
 * @property {string} [processed_on]
 * @property {string[]} [filename]
 * @property {string} [error_type]
 * @property {string} [message]
 */
/**
 * @typedef JobMetricsDto
 * @property {string} [job_code]
 * @property {string} [is_run_more_than_usual]
 * @property {JobHistoryDto[]} [job_history]
 * @property {number} [total_success_count]
 * @property {number} [total_failure_count]
 * @property {number} [total_warning_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_job_runs]
 */
/**
 * @typedef ResponseEnvelopeJobMetricsDto
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobMetricsDto} [items]
 * @property {JobMetricsDto} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef JobConfigListDTO
 * @property {string} [code]
 * @property {string} [alias]
 * @property {string} [modified_by]
 * @property {string} [created_by]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {boolean} [active]
 * @property {string} [type]
 */
/**
 * @typedef ResponseEnvelopeListJobConfigListDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigListDTO[]} [items]
 * @property {JobConfigListDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */
/**
 * @typedef ApplicationInventory
 * @property {AppInventoryConfig} [inventory]
 * @property {AuthenticationConfig} [authentication]
 * @property {ArticleAssignmentConfig} [article_assignment]
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {AppOrderConfig} [order]
 * @property {AppLogisticsConfig} [logistics]
 * @property {string} [business]
 * @property {boolean} [comms_enabled]
 * @property {string[]} [platforms]
 * @property {string} [_id]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [modified_by]
 */
/**
 * @typedef AppInventoryConfig
 * @property {InventoryBrand} [brand]
 * @property {InventoryStore} [store]
 * @property {InventoryCategory} [category]
 * @property {InventoryPrice} [price]
 * @property {InventoryDiscount} [discount]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {boolean} [franchise_enabled]
 * @property {Object[]} [exclude_category]
 * @property {string[]} [image]
 * @property {Object[]} [company_store]
 */
/**
 * @typedef InventoryBrand
 * @property {string} [criteria]
 * @property {Object[]} [brands]
 */
/**
 * @typedef InventoryStore
 * @property {string} [criteria]
 * @property {Object[]} [stores]
 * @property {AppStoreRules} [rules]
 */
/**
 * @typedef AppStoreRules
 * @property {number[]} [companies]
 * @property {Object[]} [brands]
 */
/**
 * @typedef InventoryCategory
 * @property {string} [criteria]
 * @property {Object[]} [categories]
 */
/**
 * @typedef InventoryPrice
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef InventoryDiscount
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef AuthenticationConfig
 * @property {boolean} [required]
 * @property {string} [provider]
 */
/**
 * @typedef ArticleAssignmentConfig
 * @property {ArticleAssignmentRules} [rules]
 * @property {boolean} [post_order_reassignment]
 */
/**
 * @typedef ArticleAssignmentRules
 * @property {StorePriority} [store_priority]
 */
/**
 * @typedef StorePriority
 * @property {boolean} [enabled]
 * @property {Object[]} [storetype_order]
 */
/**
 * @typedef AppCartConfig
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [enabled]
 * @property {number} [max_cart_items]
 * @property {number} [min_cart_value]
 * @property {boolean} [bulk_coupons]
 * @property {boolean} [revenue_engine_coupon]
 * @property {boolean} [empty_cart]
 */
/**
 * @typedef DeliveryCharges
 * @property {boolean} [enabled]
 * @property {Charges} [charges]
 */
/**
 * @typedef Charges
 * @property {number} [threshold]
 * @property {number} [charges]
 */
/**
 * @typedef AppPaymentConfig
 * @property {CallbackUrl} [callback_url]
 * @property {Methods} [methods]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 * @property {boolean} [enabled]
 * @property {number} [cod_amount_limit]
 * @property {number} [cod_charges]
 */
/**
 * @typedef CallbackUrl
 * @property {string} [app]
 * @property {string} [web]
 */
/**
 * @typedef Methods
 * @property {PaymentModeConfig} [pl]
 * @property {PaymentModeConfig} [card]
 * @property {PaymentModeConfig} [nb]
 * @property {PaymentModeConfig} [wl]
 * @property {PaymentModeConfig} [ps]
 * @property {PaymentModeConfig} [upi]
 * @property {PaymentModeConfig} [qr]
 * @property {PaymentModeConfig} [cod]
 * @property {PaymentModeConfig} [pp]
 * @property {PaymentModeConfig} [jp]
 * @property {PaymentModeConfig} [pac]
 * @property {PaymentModeConfig} [fc]
 * @property {PaymentModeConfig} [jiopp]
 * @property {PaymentModeConfig} [stripepg]
 * @property {PaymentModeConfig} [juspaypg]
 * @property {PaymentModeConfig} [payubizpg]
 * @property {PaymentModeConfig} [payumoneypg]
 * @property {PaymentModeConfig} [rupifipg]
 * @property {PaymentModeConfig} [simpl]
 */
/**
 * @typedef PaymentModeConfig
 * @property {boolean} [enabled]
 */
/**
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled]
 * @property {string} [default_options]
 * @property {string} [payment_identifier]
 */
/**
 * @typedef AppOrderConfig
 * @property {boolean} [enabled]
 * @property {boolean} [force_reassignment]
 * @property {string} [message]
 */
/**
 * @typedef AppLogisticsConfig
 * @property {boolean} [logistics_by_seller]
 * @property {boolean} [serviceability_check]
 * @property {boolean} [same_day_delivery]
 * @property {boolean} [dp_assignment]
 */
/**
 * @typedef LoyaltyPointsConfig
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 */
/**
 * @typedef AppInventoryPartialUpdate
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {boolean} [comms_enabled]
 */
/**
 * @typedef BrandCompanyInfo
 * @property {string} [company_name]
 * @property {number} [company_id]
 */
/**
 * @typedef CompanyByBrandsRequest
 * @property {number} brands
 * @property {string} [search_text]
 */
/**
 * @typedef CompanyByBrandsResponse
 * @property {BrandCompanyInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef StoreByBrandsRequest
 * @property {number} [company_id]
 * @property {number} brands
 * @property {string} [search_text]
 */
/**
 * @typedef StoreByBrandsResponse
 * @property {BrandStoreInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BrandStoreInfo
 * @property {string} [store_name]
 * @property {number} [store_id]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {OptedStoreAddress} [store_address]
 * @property {OptedCompany} [company]
 */
/**
 * @typedef CompanyBrandInfo
 * @property {string} [name]
 * @property {number} [value]
 * @property {string} [brand_logo_url]
 * @property {string} [brand_banner_url]
 * @property {string} [brand_banner_portrait_url]
 */
/**
 * @typedef BrandsByCompanyResponse
 * @property {CompanyBrandInfo} [brands]
 */
/**
 * @typedef CreateApplicationRequest
 * @property {App} [app]
 * @property {AppInventory} [configuration]
 * @property {AppDomain} [domain]
 */
/**
 * @typedef CreateAppResponse
 * @property {Application} [app]
 * @property {ApplicationInventory} [configuration]
 */
/**
 * @typedef ApplicationsResponse
 * @property {Application[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef MobileAppConfiguration
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {string} [package_name]
 */
/**
 * @typedef LandingImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */
/**
 * @typedef SplashImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */
/**
 * @typedef MobileAppConfigRequest
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {boolean} [is_active]
 */
/**
 * @typedef BuildVersionHistory
 * @property {BuildVersion} [versions]
 * @property {string} [latest_available_version_name]
 */
/**
 * @typedef BuildVersion
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [build_status]
 * @property {string} [version_name]
 * @property {number} [version_code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef AppSupportedCurrency
 * @property {string} [_id]
 * @property {string[]} [supported_currency]
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef DefaultCurrency
 * @property {string} [ref]
 * @property {string} [code]
 */
/**
 * @typedef CurrencyConfig
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */
/**
 * @typedef DomainAdd
 * @property {string} [name]
 */
/**
 * @typedef DomainAddRequest
 * @property {DomainAdd} [domain]
 */
/**
 * @typedef DomainsResponse
 * @property {Domain[]} [domains]
 */
/**
 * @typedef UpdateDomain
 * @property {string} [_id]
 */
/**
 * @typedef UpdateDomainTypeRequest
 * @property {UpdateDomain} [domain]
 * @property {string} [action]
 */
/**
 * @typedef DomainStatusRequest
 * @property {string} [domain_url]
 */
/**
 * @typedef DomainStatus
 * @property {string} [display]
 * @property {boolean} [status]
 */
/**
 * @typedef DomainStatusResponse
 * @property {boolean} [connected]
 * @property {DomainStatus[]} [status]
 */
/**
 * @typedef DomainSuggestionsRequest
 * @property {string} [domain_url]
 * @property {boolean} [custom]
 */
/**
 * @typedef DomainSuggestion
 * @property {string} name
 * @property {boolean} [unsupported]
 * @property {boolean} is_available
 * @property {number} [price]
 * @property {string} [currency]
 */
/**
 * @typedef DomainSuggestionsResponse
 * @property {DomainSuggestion[]} [domains]
 */
/**
 * @typedef GetIntegrationsOptInsResponse
 * @property {IntegrationOptIn[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef IntegrationOptIn
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {string} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */
/**
 * @typedef Validators
 * @property {CompanyValidator} [company]
 * @property {StoreValidator} [store]
 * @property {InventoryValidator} [inventory]
 * @property {OrderValidator} [order]
 */
/**
 * @typedef CompanyValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef JsonSchema
 * @property {string} [display]
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [tooltip]
 */
/**
 * @typedef StoreValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef InventoryValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef OrderValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */
/**
 * @typedef IntegrationMeta
 * @property {boolean} [is_public]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef Integration
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {Object} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */
/**
 * @typedef IntegrationConfigResponse
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef IntegrationLevel
 * @property {boolean} [opted]
 * @property {Object[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {Object} [data]
 */
/**
 * @typedef UpdateIntegrationLevelRequest
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef OptedStoreIntegration
 * @property {boolean} [other_opted]
 * @property {IntegrationOptIn} [other_integration]
 * @property {OtherEntity} [other_entity]
 */
/**
 * @typedef OtherEntity
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {OtherEntityData} [data]
 * @property {Object[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef LastPatch
 * @property {string} [op]
 * @property {string} [path]
 * @property {string} [value]
 */
/**
 * @typedef OtherEntityData
 * @property {string} [article_identifier]
 */
/**
 * @typedef App
 * @property {string} [company_id]
 * @property {string} [channel_type]
 * @property {ApplicationAuth} [auth]
 * @property {string} [name]
 * @property {string} [desc]
 */
/**
 * @typedef AppInventory
 * @property {InventoryBrandRule} [brand]
 * @property {InventoryStoreRule} [store]
 * @property {string[]} [image]
 * @property {boolean} [franchise_enabled]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {InventoryPaymentConfig} [payment]
 * @property {InventoryArticleAssignment} [article_assignment]
 */
/**
 * @typedef AppDomain
 * @property {string} [name]
 */
/**
 * @typedef CompaniesResponse
 * @property {AppInventoryCompanies} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AppInventoryCompanies
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [company_type]
 */
/**
 * @typedef StoresResponse
 * @property {AppInventoryStores} [items]
 * @property {Page} [page]
 */
/**
 * @typedef AppInventoryStores
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [company_id]
 */
/**
 * @typedef FilterOrderingStoreRequest
 * @property {boolean} [all_stores]
 * @property {number[]} [deployed_stores]
 * @property {string} [q]
 * @property {boolean} [only_deployed]
 */
/**
 * @typedef DeploymentMeta
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 */
/**
 * @typedef OrderingStoreConfig
 * @property {DeploymentMeta} [deployment_meta]
 */
/**
 * @typedef OtherSellerCompany
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef OtherSellerApplication
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OtherSellerCompany} [company]
 * @property {string} [opt_type]
 */
/**
 * @typedef OtherSellerApplications
 * @property {OtherSellerApplication[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OptedApplicationResponse
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OptedCompany} [company]
 * @property {OptedInventory} [opted_inventory]
 * @property {OptOutInventory} [opt_out_inventory]
 */
/**
 * @typedef OptedCompany
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef OptedInventory
 * @property {OptType} [opt_type]
 * @property {Object} [items]
 */
/**
 * @typedef OptType
 * @property {string} [key]
 * @property {string} [display]
 */
/**
 * @typedef OptedStore
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {OptedStoreAddress} [address]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {number} [company_id]
 */
/**
 * @typedef OptOutInventory
 * @property {number[]} store
 * @property {number[]} company
 */
/**
 * @typedef TokenResponse
 * @property {Tokens} [tokens]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef Tokens
 * @property {Firebase} [firebase]
 * @property {Moengage} [moengage]
 * @property {Segment} [segment]
 * @property {Gtm} [gtm]
 * @property {Freshchat} [freshchat]
 * @property {Safetynet} [safetynet]
 * @property {FyndRewards} [fynd_rewards]
 * @property {GoogleMap} [google_map]
 */
/**
 * @typedef Firebase
 * @property {Credentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef Credentials
 * @property {Ios} [ios]
 * @property {Android} [android]
 * @property {string} [project_id]
 * @property {string} [gcm_sender_id]
 * @property {string} [application_id]
 * @property {string} [api_key]
 */
/**
 * @typedef Ios
 * @property {string} [application_id]
 * @property {string} [api_key]
 */
/**
 * @typedef Android
 * @property {string} [application_id]
 * @property {string} [api_key]
 */
/**
 * @typedef Moengage
 * @property {MoengageCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef MoengageCredentials
 * @property {string} [app_id]
 */
/**
 * @typedef Segment
 * @property {SegmentCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef SegmentCredentials
 * @property {string} [write_key]
 */
/**
 * @typedef Gtm
 * @property {GtmCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef GtmCredentials
 * @property {string} [api_key]
 */
/**
 * @typedef Freshchat
 * @property {FreshchatCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef FreshchatCredentials
 * @property {string} [app_id]
 * @property {string} [app_key]
 * @property {string} [web_token]
 */
/**
 * @typedef Safetynet
 * @property {SafetynetCredentials} [credentials]
 * @property {boolean} [enabled]
 */
/**
 * @typedef SafetynetCredentials
 * @property {string} [api_key]
 */
/**
 * @typedef FyndRewards
 * @property {FyndRewardsCredentials} [credentials]
 */
/**
 * @typedef FyndRewardsCredentials
 * @property {string} [public_key]
 */
/**
 * @typedef GoogleMap
 * @property {GoogleMapCredentials} [credentials]
 */
/**
 * @typedef GoogleMapCredentials
 * @property {string} [api_key]
 */
/**
 * @typedef RewardPointsConfig
 * @property {Credit} [credit]
 * @property {Debit} [debit]
 */
/**
 * @typedef Credit
 * @property {boolean} [enabled]
 */
/**
 * @typedef Debit
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 * @property {string} [strategy_channel]
 */
/**
 * @typedef ProductDetailFeature
 * @property {string[]} [similar]
 * @property {boolean} [seller_selection]
 * @property {boolean} [update_product_meta]
 * @property {boolean} [request_product]
 */
/**
 * @typedef LaunchPage
 * @property {string} [page_type]
 * @property {Object} [params]
 * @property {Object} [query]
 */
/**
 * @typedef LandingPageFeature
 * @property {LaunchPage} [launch_page]
 * @property {boolean} [continue_as_guest]
 * @property {string} [login_btn_text]
 * @property {boolean} [show_domain_textbox]
 * @property {boolean} [show_register_btn]
 */
/**
 * @typedef RegistrationPageFeature
 * @property {boolean} [ask_store_address]
 */
/**
 * @typedef AppFeature
 * @property {ProductDetailFeature} [product_detail]
 * @property {LandingPageFeature} [landing_page]
 * @property {RegistrationPageFeature} [registration_page]
 * @property {HomePageFeature} [home_page]
 * @property {CommonFeature} [common]
 * @property {CartFeature} [cart]
 * @property {QrFeature} [qr]
 * @property {PcrFeature} [pcr]
 * @property {OrderFeature} [order]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef HomePageFeature
 * @property {boolean} [order_processing]
 */
/**
 * @typedef CommonFeature
 * @property {CommunicationOptinDialogFeature} [communication_optin_dialog]
 * @property {DeploymentStoreSelectionFeature} [deployment_store_selection]
 * @property {ListingPriceFeature} [listing_price]
 * @property {CurrencyFeature} [currency]
 * @property {RevenueEngineFeature} [revenue_engine]
 * @property {FeedbackFeature} [feedback]
 * @property {CompareProductsFeature} [compare_products]
 * @property {RewardPointsConfig} [reward_points]
 */
/**
 * @typedef CommunicationOptinDialogFeature
 * @property {boolean} [visibility]
 */
/**
 * @typedef DeploymentStoreSelectionFeature
 * @property {boolean} [enabled]
 * @property {string} [type]
 */
/**
 * @typedef ListingPriceFeature
 * @property {string} [value]
 */
/**
 * @typedef CurrencyFeature
 * @property {string[]} [value]
 * @property {string} [type]
 * @property {string} [default_currency]
 */
/**
 * @typedef RevenueEngineFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef FeedbackFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef CompareProductsFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef CartFeature
 * @property {boolean} [gst_input]
 * @property {boolean} [staff_selection]
 * @property {boolean} [placing_for_customer]
 * @property {boolean} [google_map]
 * @property {boolean} [revenue_engine_coupon]
 */
/**
 * @typedef QrFeature
 * @property {boolean} [application]
 * @property {boolean} [products]
 * @property {boolean} [collections]
 */
/**
 * @typedef PcrFeature
 * @property {boolean} [staff_selection]
 */
/**
 * @typedef OrderFeature
 * @property {boolean} [buy_again]
 */
/**
 * @typedef AppFeatureRequest
 * @property {AppFeature} [feature]
 */
/**
 * @typedef AppFeatureResponse
 * @property {AppFeature} [feature]
 */
/**
 * @typedef UnhandledError
 * @property {string} [message]
 */
/**
 * @typedef InvalidPayloadRequest
 * @property {string} [message]
 */
/**
 * @typedef SuccessMessageResponse
 * @property {string} [message]
 */
/**
 * @typedef InventoryBrandRule
 * @property {string} [criteria]
 * @property {number[]} [brands]
 */
/**
 * @typedef StoreCriteriaRule
 * @property {number[]} [companies]
 * @property {number[]} [brands]
 */
/**
 * @typedef InventoryStoreRule
 * @property {string} [criteria]
 * @property {StoreCriteriaRule[]} [rules]
 * @property {number[]} [stores]
 */
/**
 * @typedef InventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */
/**
 * @typedef StorePriorityRule
 * @property {boolean} [enabled]
 * @property {string[]} [storetype_order]
 */
/**
 * @typedef ArticleAssignmentRule
 * @property {StorePriorityRule} [store_priority]
 */
/**
 * @typedef InventoryArticleAssignment
 * @property {boolean} [post_order_reassignment]
 * @property {ArticleAssignmentRule} [rules]
 */
/**
 * @typedef CompanyAboutAddress
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [address_type]
 */
/**
 * @typedef UserEmail
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 */
/**
 * @typedef UserPhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {number} [country_code]
 * @property {string} [phone]
 */
/**
 * @typedef ApplicationInformation
 * @property {InformationAddress} [address]
 * @property {InformationSupport} [support]
 * @property {SocialLinks} [social_links]
 * @property {Links} [links]
 * @property {string} [copyright_text]
 * @property {string} [_id]
 * @property {BusinessHighlights} [business_highlights]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */
/**
 * @typedef InformationAddress
 * @property {string} [loc]
 * @property {string[]} [address_line]
 * @property {InformationPhone} [phone]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [pincode]
 */
/**
 * @typedef InformationPhone
 * @property {string} [code]
 * @property {string} [number]
 */
/**
 * @typedef InformationSupport
 * @property {string[]} [phone]
 * @property {string[]} [email]
 * @property {string} [timing]
 */
/**
 * @typedef SocialLinks
 * @property {FacebookLink} [facebook]
 * @property {InstagramLink} [instagram]
 * @property {TwitterLink} [twitter]
 * @property {PinterestLink} [pinterest]
 * @property {GooglePlusLink} [google_plus]
 * @property {YoutubeLink} [youtube]
 * @property {LinkedInLink} [linked_in]
 * @property {VimeoLink} [vimeo]
 * @property {BlogLink} [blog_link]
 */
/**
 * @typedef FacebookLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef InstagramLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef TwitterLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef PinterestLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef GooglePlusLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef YoutubeLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef LinkedInLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef VimeoLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef BlogLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */
/**
 * @typedef Links
 * @property {string} [title]
 * @property {string} [link]
 */
/**
 * @typedef BusinessHighlights
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [sub_title]
 */
/**
 * @typedef ApplicationDetail
 * @property {string} name
 * @property {string} description
 * @property {SecureUrl} logo
 * @property {SecureUrl} mobile_logo
 * @property {SecureUrl} favicon
 * @property {SecureUrl} banner
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {string} [_id]
 */
/**
 * @typedef CurrenciesResponse
 * @property {Currency[]} [items]
 */
/**
 * @typedef AppCurrencyResponse
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {Currency[]} [supported_currency]
 */
/**
 * @typedef StoreLatLong
 * @property {string} [type]
 * @property {number[]} [coordinates]
 */
/**
 * @typedef OptedStoreAddress
 * @property {string} [state]
 * @property {string} [address1]
 * @property {StoreLatLong} [lat_long]
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [city]
 */
/**
 * @typedef OrderingStore
 * @property {OptedStoreAddress} [address]
 * @property {string} [_id]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [pincode]
 * @property {string} [code]
 */
/**
 * @typedef OrderingStores
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {number} [__v]
 */
/**
 * @typedef OrderingStoresResponse
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 */
/**
 * @typedef PriceRange
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef UsesRemaining
 * @property {number} [total]
 * @property {number} [app]
 * @property {number} [user]
 */
/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [remaining]
 * @property {UsesRemaining} [maximum]
 */
/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */
/**
 * @typedef PaymentModes
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [networks]
 * @property {string[]} [types]
 * @property {string[]} [codes]
 */
/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */
/**
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */
/**
 * @typedef Restrictions
 * @property {number[]} [ordering_stores]
 * @property {string[]} [platforms]
 * @property {PriceRange} [price_range]
 * @property {number[]} [user_groups]
 * @property {UsesRestriction} [uses]
 * @property {boolean} [coupon_allowed]
 * @property {Object} [payments]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {PostOrder} [post_order]
 * @property {string} [user_type]
 */
/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */
/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef RuleDefinition
 * @property {boolean} [auto_apply]
 * @property {string} applicable_on
 * @property {string[]} [scope]
 * @property {string} calculate_on
 * @property {boolean} [is_exact]
 * @property {string} value_type
 * @property {string} type
 * @property {string} [currency_code]
 */
/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */
/**
 * @typedef DisplayMeta
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [remove]
 * @property {DisplayMetaDict} [auto]
 * @property {DisplayMetaDict} [apply]
 */
/**
 * @typedef State
 * @property {boolean} [is_display]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_public]
 */
/**
 * @typedef CouponAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */
/**
 * @typedef Validity
 * @property {number} [priority]
 */
/**
 * @typedef CouponAction
 * @property {string} [action_date]
 * @property {string} [txn_mode]
 */
/**
 * @typedef CouponSchedule
 * @property {Object[]} [next_schedule]
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {string} [user_registered_after]
 * @property {boolean} [anonymous]
 */
/**
 * @typedef Rule
 * @property {number} [min]
 * @property {number} [discount_qty]
 * @property {number} [key]
 * @property {number} [value]
 * @property {number} [max]
 */
/**
 * @typedef CouponAdd
 * @property {Restrictions} [restrictions]
 * @property {Ownership} ownership
 * @property {CouponDateMeta} [date_meta]
 * @property {string[]} [tags]
 * @property {RuleDefinition} rule_definition
 * @property {DisplayMeta} display_meta
 * @property {State} [state]
 * @property {CouponAuthor} [author]
 * @property {Identifier} identifiers
 * @property {string} type_slug
 * @property {Validity} validity
 * @property {CouponAction} [action]
 * @property {string} code
 * @property {CouponSchedule} [_schedule]
 * @property {Validation} [validation]
 * @property {Rule[]} rule
 */
/**
 * @typedef CouponsResponse
 * @property {CouponAdd} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SuccessMessage
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef OperationErrorResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef CouponUpdate
 * @property {Restrictions} [restrictions]
 * @property {Ownership} ownership
 * @property {CouponDateMeta} [date_meta]
 * @property {string[]} [tags]
 * @property {RuleDefinition} rule_definition
 * @property {DisplayMeta} display_meta
 * @property {State} [state]
 * @property {CouponAuthor} [author]
 * @property {Identifier} identifiers
 * @property {string} type_slug
 * @property {Validity} validity
 * @property {CouponAction} [action]
 * @property {string} code
 * @property {CouponSchedule} [_schedule]
 * @property {Validation} [validation]
 * @property {Rule[]} rule
 */
/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive]
 * @property {CouponSchedule} [schedule]
 */
/**
 * @typedef Ownership1
 * @property {string} payable_by
 * @property {string} payable_category
 */
/**
 * @typedef DiscountOffer
 * @property {number} [max_discount_amount]
 * @property {boolean} [apportion_discount]
 * @property {number} [discount_price]
 * @property {number} [discount_percentage]
 * @property {boolean} [partial_can_ret]
 * @property {number} [max_offer_quantity]
 * @property {number} [discount_amount]
 * @property {string} [code]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [min_offer_quantity]
 */
/**
 * @typedef CompareObject
 * @property {number} [greater_than]
 * @property {number} [less_than_equals]
 * @property {number} [equals]
 * @property {number} [greater_than_equals]
 * @property {number} [less_than]
 */
/**
 * @typedef ItemCriteria
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_company]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_store]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {number[]} [item_exclude_store]
 * @property {string[]} [available_zones]
 * @property {CompareObject} [cart_total]
 * @property {string[]} [product_tags]
 * @property {number[]} [item_exclude_company]
 * @property {number[]} [item_id]
 * @property {number[]} [item_exclude_brand]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_brand]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_category]
 * @property {string[]} [item_sku]
 * @property {string[]} [item_size]
 * @property {number[]} [item_category]
 * @property {string[]} [buy_rules]
 * @property {boolean} [all_items]
 */
/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {DiscountOffer} offer
 * @property {string} discount_type
 * @property {ItemCriteria} item_criteria
 */
/**
 * @typedef Visibility
 * @property {boolean} coupon_list
 * @property {boolean} pdp
 */
/**
 * @typedef DisplayMeta1
 * @property {string} [description]
 * @property {string} [offer_text]
 * @property {string} [offer_label]
 * @property {string} [name]
 */
/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */
/**
 * @typedef PromotionSchedule
 * @property {Object[]} [next_schedule]
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} start
 * @property {string} [end]
 * @property {boolean} published
 */
/**
 * @typedef UserRegistered
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef UsesRemaining1
 * @property {number} [total]
 * @property {number} [user]
 */
/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [remaining]
 * @property {UsesRemaining1} [maximum]
 */
/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */
/**
 * @typedef PromotionPaymentModes
 * @property {PaymentAllowValue1} [uses]
 * @property {string} type
 * @property {string[]} [codes]
 */
/**
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */
/**
 * @typedef Restrictions1
 * @property {string[]} [platforms]
 * @property {UserRegistered} [user_registered]
 * @property {number[]} [user_groups]
 * @property {UsesRestriction1} uses
 * @property {boolean} [anonymous_users]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {PostOrder1} [post_order]
 * @property {number} [order_quantity]
 * @property {string[]} [user_id]
 */
/**
 * @typedef PromotionAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */
/**
 * @typedef PromotionListItem
 * @property {boolean} [stackable]
 * @property {Ownership1} ownership
 * @property {Object} [_custom_json]
 * @property {DiscountRule[]} discount_rules
 * @property {string} application_id
 * @property {string} promo_group
 * @property {Visibility} [visiblility]
 * @property {boolean} [apply_all_discount]
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAction} [post_order_action]
 * @property {string} [currency]
 * @property {PromotionSchedule} [_schedule]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {string} [code]
 * @property {string} promotion_type
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {Object} buy_rules
 * @property {PromotionAuthor} [author]
 */
/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PromotionAdd
 * @property {boolean} [stackable]
 * @property {Ownership1} ownership
 * @property {Object} [_custom_json]
 * @property {DiscountRule[]} discount_rules
 * @property {string} application_id
 * @property {string} promo_group
 * @property {Visibility} [visiblility]
 * @property {boolean} [apply_all_discount]
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAction} [post_order_action]
 * @property {string} [currency]
 * @property {PromotionSchedule} [_schedule]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {string} [code]
 * @property {string} promotion_type
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {Object} buy_rules
 * @property {PromotionAuthor} [author]
 */
/**
 * @typedef PromotionUpdate
 * @property {boolean} [stackable]
 * @property {Ownership1} ownership
 * @property {Object} [_custom_json]
 * @property {DiscountRule[]} discount_rules
 * @property {string} application_id
 * @property {string} promo_group
 * @property {Visibility} [visiblility]
 * @property {boolean} [apply_all_discount]
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAction} [post_order_action]
 * @property {string} [currency]
 * @property {PromotionSchedule} [_schedule]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {string} [code]
 * @property {string} promotion_type
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {Object} buy_rules
 * @property {PromotionAuthor} [author]
 */
/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive]
 * @property {PromotionSchedule} [schedule]
 */
/**
 * @typedef ActivePromosResponse
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [subtitle]
 * @property {string} [modified_on]
 * @property {string} [entity_type]
 * @property {string} [type]
 * @property {string} [entity_slug]
 * @property {string} [example]
 * @property {string} [created_on]
 * @property {boolean} [is_hidden]
 */
/**
 * @typedef CartItem
 * @property {string} product_id
 * @property {number} [quantity]
 * @property {string} size
 */
/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */
/**
 * @typedef ProductPrice
 * @property {number} [marked]
 * @property {number} [selling]
 * @property {number} [add_on]
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 */
/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */
/**
 * @typedef PromoMeta
 * @property {string} [message]
 */
/**
 * @typedef ProductAvailability
 * @property {boolean} [out_of_stock]
 * @property {boolean} [deliverable]
 * @property {string[]} [sizes]
 * @property {boolean} [is_valid]
 * @property {number} [other_store_quantity]
 */
/**
 * @typedef ProductImage
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 */
/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */
/**
 * @typedef ProductAction
 * @property {string} [url]
 * @property {string} [type]
 * @property {ActionQuery} [query]
 */
/**
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef CartProduct
 * @property {ProductImage[]} [images]
 * @property {NetQuantity} [net_quantity]
 * @property {BaseInfo} [brand]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {ProductAction} [action]
 * @property {string} [type]
 * @property {CategoryInfo[]} [categories]
 */
/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */
/**
 * @typedef FreeGiftItem
 * @property {string} [item_name]
 * @property {string[]} [item_images_url]
 * @property {string} [item_brand_name]
 * @property {number} [item_id]
 * @property {Object} [item_price_details]
 * @property {string} [item_slug]
 */
/**
 * @typedef AppliedFreeArticles
 * @property {FreeGiftItem} [free_gift_item_details]
 * @property {string} [article_id]
 * @property {number} [quantity]
 * @property {string} [parent_item_identifier]
 */
/**
 * @typedef DiscountRulesApp
 * @property {Object} [item_criteria]
 * @property {Object} [raw_offer]
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [offer]
 */
/**
 * @typedef AppliedPromotion
 * @property {string} [promo_id]
 * @property {number} [article_quantity]
 * @property {string} [offer_text]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {string} [promotion_group]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {string} [promotion_type]
 * @property {boolean} [mrp_promotion]
 * @property {number} [amount]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_name]
 */
/**
 * @typedef BasePrice
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 */
/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */
/**
 * @typedef ProductArticle
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [extra_meta]
 * @property {BaseInfo} [store]
 * @property {Object} [parent_item_identifiers]
 * @property {string[]} [product_group_tags]
 * @property {string} [size]
 * @property {string} [uid]
 * @property {BaseInfo} [seller]
 * @property {number} [quantity]
 * @property {string} [type]
 */
/**
 * @typedef CartProductInfo
 * @property {string} [message]
 * @property {ProductPriceInfo} [price]
 * @property {PromoMeta} [promo_meta]
 * @property {ProductAvailability} [availability]
 * @property {CartProduct} [product]
 * @property {boolean} [is_set]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {string} [key]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [quantity]
 * @property {CartProductIdentifer} identifiers
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {Object} [bulk_offer]
 * @property {string} [discount]
 * @property {ProductArticle} [article]
 * @property {string} [coupon_message]
 */
/**
 * @typedef LoyaltyPoints
 * @property {number} [total]
 * @property {number} [applicable]
 * @property {boolean} [is_applied]
 * @property {string} [description]
 */
/**
 * @typedef RawBreakup
 * @property {number} [total]
 * @property {number} [cod_charge]
 * @property {number} [you_saved]
 * @property {number} [vog]
 * @property {number} [mrp_total]
 * @property {number} [delivery_charge]
 * @property {number} [fynd_cash]
 * @property {number} [gst_charges]
 * @property {number} [subtotal]
 * @property {number} [discount]
 * @property {number} [convenience_fee]
 * @property {number} [coupon]
 */
/**
 * @typedef CouponBreakup
 * @property {string} [message]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [code]
 * @property {number} [coupon_value]
 * @property {boolean} [is_applied]
 * @property {number} [max_discount_value]
 * @property {number} [value]
 * @property {string} [uid]
 * @property {string} [sub_title]
 * @property {string} [type]
 * @property {number} [minimum_cart_value]
 * @property {string} [coupon_type]
 */
/**
 * @typedef DisplayBreakup
 * @property {string[]} [message]
 * @property {string} [display]
 * @property {string} [key]
 * @property {number} [value]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 */
/**
 * @typedef CartBreakup
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {RawBreakup} [raw]
 * @property {CouponBreakup} [coupon]
 * @property {DisplayBreakup[]} [display]
 */
/**
 * @typedef OpenapiCartDetailsResponse
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 */
/**
 * @typedef OpenApiErrorResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {Object} [errors]
 */
/**
 * @typedef ShippingAddress
 * @property {string} [email]
 * @property {Object} [meta]
 * @property {string} [city]
 * @property {string} [address_type]
 * @property {string} [country_code]
 * @property {string} [name]
 * @property {string} [area_code_slug]
 * @property {string} [state]
 * @property {string} [landmark]
 * @property {string} [area]
 * @property {string} [country]
 * @property {number} [pincode]
 * @property {string} [address]
 * @property {string} area_code
 * @property {number} [phone]
 */
/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {ShippingAddress} shipping_address
 * @property {CartItem} [cart_items]
 */
/**
 * @typedef PromiseTimestamp
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef PromiseFormatted
 * @property {string} [min]
 * @property {string} [max]
 */
/**
 * @typedef ShipmentPromise
 * @property {PromiseTimestamp} [timestamp]
 * @property {PromiseFormatted} [formatted]
 */
/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {boolean} [is_valid]
 */
/**
 * @typedef CartItemMeta
 * @property {string} [group_id]
 * @property {boolean} [primary_item]
 */
/**
 * @typedef OpenApiFiles
 * @property {string[]} values
 * @property {string} key
 */
/**
 * @typedef OpenApiOrderItem
 * @property {number} delivery_charges
 * @property {number} amount_paid
 * @property {number} [loyalty_discount]
 * @property {CartItemMeta} [meta]
 * @property {number} price_effective
 * @property {number} product_id
 * @property {Object} [extra_meta]
 * @property {number} price_marked
 * @property {number} [employee_discount]
 * @property {OpenApiFiles[]} [files]
 * @property {number} [quantity]
 * @property {number} coupon_effective_discount
 * @property {number} discount
 * @property {number} cashback_applied
 * @property {string} size
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} cod_charges
 */
/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [payment_mode]
 * @property {number} delivery_charges
 * @property {string} coupon_code
 * @property {number} coupon_value
 * @property {ShippingAddress} billing_address
 * @property {OpenApiOrderItem[]} cart_items
 * @property {Object} [employee_discount]
 * @property {OpenApiFiles[]} [files]
 * @property {number} cart_value
 * @property {string} [coupon]
 * @property {string} [gstin]
 * @property {number} [loyalty_discount]
 * @property {string} [affiliate_order_id]
 * @property {string} [order_id]
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [comment]
 * @property {number} cashback_applied
 * @property {string} [currency_code]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} cod_charges
 */
/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {string} [order_ref_id]
 * @property {string} order_id
 */
/**
 * @typedef AbandonedCart
 * @property {string} [app_id]
 * @property {Object} [promotion]
 * @property {number} [bulk_coupon_discount]
 * @property {number} uid
 * @property {string} last_modified
 * @property {string} _id
 * @property {string} [order_id]
 * @property {string} [checkout_mode]
 * @property {string} [comment]
 * @property {boolean} is_default
 * @property {boolean} [merge_qty]
 * @property {Object[]} [shipments]
 * @property {Object} cashback
 * @property {Object} [delivery_charges]
 * @property {string} [payment_mode]
 * @property {boolean} [is_archive]
 * @property {boolean} [buy_now]
 * @property {Object} [payments]
 * @property {number} [cart_value]
 * @property {string} created_on
 * @property {number} [discount]
 * @property {Object} [coupon]
 * @property {string} user_id
 * @property {string} [gstin]
 * @property {Object} [pick_up_customer_details]
 * @property {Object} [meta]
 * @property {string} expire_at
 * @property {Object} [fynd_credits]
 * @property {number[]} [fc_index_map]
 * @property {boolean} [is_active]
 * @property {Object[]} articles
 * @property {Object[]} [payment_methods]
 * @property {Object} [cod_charges]
 */
/**
 * @typedef AbandonedCartResponse
 * @property {string} [message]
 * @property {AbandonedCart[]} [items]
 * @property {Page} [page]
 * @property {boolean} [success]
 * @property {Object} [result]
 */
/**
 * @typedef CartCurrency
 * @property {string} [code]
 * @property {string} [symbol]
 */
/**
 * @typedef CartDetailResponse
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [last_modified]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [id]
 * @property {string} [checkout_mode]
 * @property {boolean} [buy_now]
 * @property {string} [comment]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [coupon_text]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [is_valid]
 * @property {CartCurrency} [currency]
 * @property {boolean} [restrict_checkout]
 * @property {string} [gstin]
 */
/**
 * @typedef AddProductCart
 * @property {number} [store_id]
 * @property {number} [item_id]
 * @property {Object} [extra_meta]
 * @property {string} [article_id]
 * @property {number} [seller_id]
 * @property {Object} [article_assignment]
 * @property {Object} [parent_item_identifiers]
 * @property {string[]} [product_group_tags]
 * @property {number} [quantity]
 * @property {boolean} [pos]
 * @property {string} [item_size]
 * @property {string} [display]
 */
/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 */
/**
 * @typedef AddCartDetailResponse
 * @property {string} [message]
 * @property {boolean} [partial]
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 */
/**
 * @typedef UpdateProductCart
 * @property {number} [item_id]
 * @property {Object} [extra_meta]
 * @property {string} [article_id]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [quantity]
 * @property {CartProductIdentifer} identifiers
 * @property {number} [item_index]
 * @property {string} [item_size]
 */
/**
 * @typedef UpdateCartRequest
 * @property {UpdateProductCart[]} [items]
 * @property {string} operation
 */
/**
 * @typedef UpdateCartDetailResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 */
/**
 * @typedef E
 * @property {number} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 */
/**
 * @typedef GiveawayResponse
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Giveaway
 * @property {string} [_id]
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {RewardsAudience} [audience]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {RewardsRule} [rule]
 * @property {string} [title]
 * @property {string} [updated_at]
 */
/**
 * @typedef Schedule
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 * @property {string} [cron]
 */
/**
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */
/**
 * @typedef RewardsRule
 * @property {number} [amount]
 */
/**
 * @typedef Offer
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {Object} [rule]
 * @property {ShareMessages} [share]
 * @property {string} [sub_text]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [url]
 */
/**
 * @typedef ShareMessages
 * @property {number} [email]
 * @property {string} [facebook]
 * @property {string} [fallback]
 * @property {string} [message]
 * @property {string} [messenger]
 * @property {string} [sms]
 * @property {string} [text]
 * @property {string} [twitter]
 * @property {string} [whatsapp]
 */
/**
 * @typedef UserRes
 * @property {Points} [points]
 * @property {RewardUser} [user]
 */
/**
 * @typedef Points
 * @property {number} [available]
 */
/**
 * @typedef RewardUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {Referral} [referral]
 * @property {number} [uid]
 * @property {string} [updated_at]
 * @property {string} [user_block_reason]
 * @property {string} [user_id]
 */
/**
 * @typedef Referral
 * @property {string} [code]
 */
/**
 * @typedef AppUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [block_reason]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [user_id]
 */
/**
 * @typedef GiveawayAudience
 * @property {string} [audience_id]
 * @property {number} [current_count]
 */
/**
 * @typedef HistoryRes
 * @property {PointsHistory[]} [items]
 * @property {Page} [page]
 * @property {number} [points]
 */
/**
 * @typedef PointsHistory
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {boolean} [claimed]
 * @property {string} [created_at]
 * @property {string} [expires_on]
 * @property {Object} [meta]
 * @property {number} [points]
 * @property {number} [remaining_points]
 * @property {string} [text_1]
 * @property {string} [text_2]
 * @property {string} [text_3]
 * @property {string} [txn_name]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 */
/**
 * @typedef StatGroup
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 */
/**
 * @typedef StatsGroups
 * @property {StatGroup[]} [groups]
 */
/**
 * @typedef StatsGroupComponent
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [filters]
 */
/**
 * @typedef StatsGroupComponents
 * @property {string} [title]
 * @property {StatsGroupComponent[]} [components]
 */
/**
 * @typedef StatsRes
 * @property {string} [key]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [data]
 */
/**
 * @typedef ReceivedAt
 * @property {string} [value]
 */
/**
 * @typedef AbandonCartsDetail
 * @property {string} [properties_cart_id]
 * @property {string} [context_traits_first_name]
 * @property {string} [context_traits_last_name]
 * @property {string} [context_traits_phone_number]
 * @property {string} [context_traits_email]
 * @property {string} [context_app_application_id]
 * @property {string} [properties_breakup_values_raw_total]
 * @property {ReceivedAt} [received_at]
 */
/**
 * @typedef AbandonCartsList
 * @property {AbandonCartsDetail[]} [items]
 * @property {string} [cart_total]
 * @property {Page} [page]
 */
/**
 * @typedef AbandonCartDetail
 * @property {string} [_id]
 * @property {string} [user_id]
 * @property {string} [cart_value]
 * @property {Object[]} [articles]
 * @property {Object} [breakup]
 * @property {Object} [address]
 */
/**
 * @typedef ExportJobReq
 * @property {string} [marketplace_name]
 * @property {string} [start_time]
 * @property {string} [end_time]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 */
/**
 * @typedef ExportJobRes
 * @property {string} [status]
 * @property {string} [job_id]
 */
/**
 * @typedef ExportJobStatusRes
 * @property {string} [status]
 * @property {string} [job_id]
 * @property {string} [download_url]
 */
/**
 * @typedef GetLogsListReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 */
/**
 * @typedef MkpLogsResp
 * @property {string} [start_time_iso]
 * @property {string} [end_time_iso]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 * @property {string} [count]
 * @property {string} [status]
 */
/**
 * @typedef GetLogsListRes
 * @property {MkpLogsResp[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SearchLogReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 * @property {string} [identifier]
 * @property {string} [identifier_value]
 */
/**
 * @typedef LogInfo
 * @property {string} [_id]
 * @property {string} [status]
 * @property {string} [event_type]
 * @property {string} [marketplace_name]
 * @property {string} [event]
 * @property {string} [trace_id]
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {number} [item_id]
 * @property {string} [article_id]
 * @property {string} [seller_identifier]
 */
/**
 * @typedef SearchLogRes
 * @property {LogInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ValidityObject
 * @property {string} start
 * @property {string} end
 */
/**
 * @typedef CreateUpdateDiscount
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} app_ids
 * @property {string[]} extension_ids
 * @property {string} job_type
 * @property {string} discount_type
 * @property {string} discount_level
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 */
/**
 * @typedef DiscountJob
 * @property {string} _id
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} [app_ids]
 * @property {string} [job_type]
 * @property {string} [discount_type]
 * @property {string} [discount_level]
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {string} created_on
 * @property {string} modified_on
 * @property {UserDetails} created_by
 * @property {UserDetails} modified_by
 * @property {Object} [meta]
 */
/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items
 * @property {Page} page
 */
/**
 * @typedef DiscountItems
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 * @property {string} [seller_identifier]
 * @property {string} discount_type
 * @property {number} value
 */
/**
 * @typedef BulkDiscount
 * @property {number} company_id
 * @property {DiscountItems[]} items
 */
/**
 * @typedef FileJobResponse
 * @property {string} stage
 * @property {number} total
 * @property {number} failed
 * @property {number} company_id
 * @property {Object} [body]
 * @property {string} type
 * @property {string} file_type
 */
/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef CancelJobResponse
 * @property {boolean} success
 */
/**
 * @typedef UserDetails
 * @property {string} username
 * @property {string} user_id
 */
/**
 * @typedef BadRequestObject
 * @property {string} message
 */
/**
 * @typedef AddProxyReq
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 */
/**
 * @typedef AddProxyResponse
 * @property {string} [_id]
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [extension_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {Object} [meta]
 */
/**
 * @typedef RemoveProxyResponse
 * @property {string} [message]
 * @property {Object} [data]
 */
/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 */
/**
 * @typedef EventConfigList
 * @property {EventConfig[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EventProcessedStatus
 * @property {number} [id]
 * @property {string} [subscriber_id]
 * @property {number} [attempt]
 * @property {string} [response_code]
 * @property {string} [response_message]
 * @property {string} [created_on]
 * @property {string} [processed_on]
 * @property {boolean} [status]
 */
/**
 * @typedef EventPayload
 * @property {number} [id]
 * @property {string} [event_trace_id]
 * @property {string} [message_id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 * @property {boolean} [status]
 */
/**
 * @typedef SubscriberConfig
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id]
 */
/**
 * @typedef SubscriberResponse
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {SubscriberStatus} [status]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {EventConfig[]} [event_configs]
 */
/**
 * @typedef SubscriberEvent
 * @property {number} [id]
 * @property {number} [subscriber_id]
 * @property {number} [event_id]
 * @property {string} [created_date]
 */
/**
 * @typedef AuthMeta
 * @property {string} [type]
 * @property {string} [secret]
 */
/**
 * @typedef Association
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
 */
/**
 * @typedef EventConfigBase
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */
/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */
/**
 * @typedef CreateLogResponse
 * @property {string} [message]
 * @property {string} [internal_message]
 */
/**
 * @typedef LogMetaObj
 * @property {Object} [modifier]
 * @property {string} [application]
 * @property {EntityObject} [entity]
 * @property {Object} [device_info]
 * @property {Object} [location]
 */
/**
 * @typedef EntityObject
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 */
/**
 * @typedef LogSchemaResponse
 * @property {LogDocs[]} [docs]
 */
/**
 * @typedef LogDocs
 * @property {EntityObj} [entity]
 * @property {Modifier} [modifier]
 * @property {DeviceInfo} [device_info]
 * @property {Location} [location]
 * @property {string} [_id]
 * @property {string} [company]
 * @property {string} [application]
 * @property {string} [sessions]
 * @property {string} [date]
 * @property {Object} [logs]
 */
/**
 * @typedef EntityObj
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 * @property {Object} [entity_details]
 */
/**
 * @typedef Modifier
 * @property {string} [user_id]
 * @property {boolean} [as_administrator]
 * @property {Object} [user_details]
 */
/**
 * @typedef DeviceInfo
 * @property {string} [user_agent]
 * @property {Object} [extra_meta]
 */
/**
 * @typedef Location
 * @property {Object} [extra_meta]
 */
/**
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */
/**
 * @typedef EntityTypeObj
 * @property {string} [entity_value]
 * @property {string} [display_name]
 */
declare class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.items] - Decides that the reponse will contain the
     *   list of tickets
     * @param {boolean} [arg.filters] - Decides that the reponse will contain
     *   the ticket filters
     * @param {string} [arg.q] - Search through ticket titles and description
     * @param {string} [arg.status] - Filter tickets on status
     * @param {PriorityEnum} [arg.priority] - Filter tickets on priority
     * @param {string} [arg.category] - Filter tickets on category
     * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
     * @description: Gets the list of Application level Tickets and/or ticket filters
     */
    getTickets({ items, filters, q, status, priority, category }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: PriorityEnum;
        category?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Tiket ID of the ticket to be fetched
     * @summary: Retreives ticket details of a application level ticket
     * @description: Retreives ticket details of a application level ticket with ticket ID
     */
    getTicket({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     */
    editTicket({ id, body }?: {
        id: string;
        body: EditTicketPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    createHistory({ id, body }?: {
        id: string;
        body: TicketHistoryPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is to be fetched
     * @summary: Gets history list for specific application level ticket
     * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    getTicketHistory({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @summary: Get specific custom form using it's slug
     * @description: Get specific custom form using it's slug, this is used to view the form.
     */
    getCustomForm({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {EditCustomFormPayload} arg.body
     * @summary: Edit the given custom form
     * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     */
    editCustomForm({ slug, body }?: {
        slug: string;
        body: EditCustomFormPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get list of custom form
     * @description: Get list of custom form for given application
     */
    getCustomForms({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateCustomFormPayload} arg.body
     * @summary: Creates a new custom form
     * @description: Creates a new custom form for given application
     */
    createCustomForm({ body }?: {
        body: CreateCustomFormPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of video room
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     */
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     */
    getVideoParticipants({ uniqueName }?: {
        uniqueName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateVideoRoomPayload} arg.body
     * @summary: Open a video room.
     * @description: Open a video room.
     */
    openVideoRoom({ body }?: {
        body: CreateVideoRoomPayload;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @summary: Close the video room and force all participants to leave.
     * @description: Close the video room and force all participants to leave.
     */
    closeVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): Promise<any>;
}
declare class Feedback {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Pagination page no
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of attribute data
     * @description: Provides a list of all attribute data.
     */
    getAttributes({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of attribute data
     * @description: Provides a list of all attribute data.
     */
    getAttributesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] - Review id
     * @param {string} [arg.entityId] - Entity id
     * @param {string} [arg.entityType] - Entity type
     * @param {string} [arg.userId] - User id
     * @param {string} [arg.media] - Media type e.g. image | video | video_file
     *   | video_link
     * @param {number[]} [arg.rating] - Rating filter, 1-5
     * @param {string[]} [arg.attributeRating] - Attribute rating filter with
     *   ma,e of attribute
     * @param {boolean} [arg.facets] - Facets (true|false)
     * @param {string} [arg.sort] - Sort by : default | top | recent
     * @param {string} [arg.next] - Pagination next
     * @param {string} [arg.start] - Pagination start
     * @param {string} [arg.limit] - Pagination limit
     * @param {string} [arg.count] - Pagination count
     * @param {string} [arg.pageId] - Pagination page id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of customer reviews [admin]
     * @description: The endpoint provides a list of customer reviews based on entity and provided filters
     */
    getCustomerReviews({ id, entityId, entityType, userId, media, rating, attributeRating, facets, sort, next, start, limit, count, pageId, pageSize, }?: {
        id?: string;
        entityId?: string;
        entityType?: string;
        userId?: string;
        media?: string;
        rating?: number[];
        attributeRating?: string[];
        facets?: boolean;
        sort?: string;
        next?: string;
        start?: string;
        limit?: string;
        count?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {string} [arg.id] - Review id
     * @param {string} [arg.entityId] - Entity id
     * @param {string} [arg.entityType] - Entity type
     * @param {string} [arg.userId] - User id
     * @param {string} [arg.media] - Media type e.g. image | video | video_file
     *   | video_link
     * @param {number[]} [arg.rating] - Rating filter, 1-5
     * @param {string[]} [arg.attributeRating] - Attribute rating filter with
     *   ma,e of attribute
     * @param {boolean} [arg.facets] - Facets (true|false)
     * @param {string} [arg.sort] - Sort by : default | top | recent
     * @param {string} [arg.next] - Pagination next
     * @param {string} [arg.start] - Pagination start
     * @param {string} [arg.limit] - Pagination limit
     * @param {string} [arg.count] - Pagination count
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of customer reviews [admin]
     * @description: The endpoint provides a list of customer reviews based on entity and provided filters
     */
    getCustomerReviewsPaginator({ companyId, applicationId, id, entityId, entityType, userId, media, rating, attributeRating, facets, sort, next, start, limit, count, pageSize, }?: {
        companyId: string;
        applicationId: string;
        id?: string;
        entityId?: string;
        entityType?: string;
        userId?: string;
        media?: string;
        rating?: number[];
        attributeRating?: string[];
        facets?: boolean;
        sort?: string;
        next?: string;
        start?: string;
        limit?: string;
        count?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.reviewId - Review id
     * @param {ApproveRequest} arg.body
     * @summary: update approve details
     * @description: The is used to update approve details like status and description text
     */
    updateApprove({ reviewId, body }?: {
        reviewId: string;
        body: ApproveRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.reviewId - Review id
     * @summary: get history details
     * @description: The is used to get the history details like status and description text
     */
    getHistory({ reviewId }?: {
        reviewId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageId] - Pagination page id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of templates
     * @description: Get all templates of application
     */
    getApplicationTemplates({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Pagination page size
     * @summary: Get list of templates
     * @description: Get all templates of application
     */
    getApplicationTemplatesPaginator({ companyId, applicationId, pageSize, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {TemplateRequestList} arg.body
     * @summary: Create a new template
     * @description: Create a new template for review with following data:
     * - Enable media, rating and review
     * - Rating - active/inactive/selected rate choices, attributes, text on rate, comment for each rate, type
     * - Review - header, title, description, image and video meta, enable votes
     */
    createTemplate({ body }?: {
        body: TemplateRequestList;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Template id
     * @summary: Get a template by ID
     * @description: Get the template for product or l3 type by ID
     */
    getTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Template id
     * @param {UpdateTemplateRequest} arg.body
     * @summary: Update a template's status
     * @description: Update existing template status, active/archive
     */
    updateTemplate({ id, body }?: {
        id: string;
        body: UpdateTemplateRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Template id
     * @param {UpdateTemplateStatusRequest} arg.body
     * @summary: Update a template's status
     * @description: Update existing template status, active/archive
     */
    updateTemplateStatus({ id, body }?: {
        id: string;
        body: UpdateTemplateStatusRequest;
    }): Promise<any>;
}
declare class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @summary: Get all pages of a theme
     * @description: Use this API to retrieve all the available pages of a theme by its ID.
     */
    getAllPages({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {AvailablePageSchema} arg.body
     * @summary: Create a page
     * @description: Use this API to create a page for a theme by its ID.
     */
    createPage({ themeId, body }?: {
        themeId: string;
        body: AvailablePageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {AllAvailablePageSchema} arg.body
     * @summary: Update multiple pages of a theme
     * @description: Use this API to update multiple pages of a theme by its ID.
     */
    updateMultiplePages({ themeId, body }?: {
        themeId: string;
        body: AllAvailablePageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @param {string} arg.pageValue - Value of the page to be retrieved
     * @summary: Get page of a theme
     * @description: Use this API to retrieve a page of a theme.
     */
    getPage({ themeId, pageValue }?: {
        themeId: string;
        pageValue: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {string} arg.pageValue - Value of the page to be updated
     * @param {AvailablePageSchema} arg.body
     * @summary: Updates a page
     * @description: Use this API to update a page for a theme by its ID.
     */
    updatePage({ themeId, pageValue, body }?: {
        themeId: string;
        pageValue: string;
        body: AvailablePageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme
     * @param {string} arg.pageValue - Value of the page to be updated
     * @summary: Deletes a page
     * @description: Use this API to delete a page for a theme by its ID and page_value.
     */
    deletePage({ themeId, pageValue }?: {
        themeId: string;
        pageValue: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get a list of themes from the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.
     */
    getThemeLibrary({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddThemeRequestSchema} arg.body
     * @summary: Add a theme to the theme library
     * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.
     */
    addToThemeLibrary({ body }?: {
        body: AddThemeRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddThemeRequestSchema} arg.body
     * @summary: Apply a theme
     * @description: Use this API to apply a theme to the website.
     */
    applyTheme({ body }?: {
        body: AddThemeRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - Theme ID
     * @summary: Checks if theme is upgradable
     * @description: There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available.
     */
    isUpgradable({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Upgrade a theme
     * @description: Use this API to upgrade the current theme to its latest version.
     */
    upgradeTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get all public themes
     * @description: Use this API to get a list of free themes that you can apply to your website.
     */
    getPublicThemes({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ThemesSchema} arg.body
     * @summary: Create a new theme
     * @description: Themes improve the look and appearance of a website. Use this API to create a theme.
     */
    createTheme({ body }?: {
        body: ThemesSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get the applied theme
     * @description: Use this API to retrieve the theme that is currently applied to the website along with its details.
     */
    getAppliedTheme({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all the supported fonts in a theme
     * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
     */
    getFonts({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Gets theme by id
     * @description: Use this API to retrieve the details of a specific theme by using its ID.
     */
    getThemeById({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @param {ThemesSchema} arg.body
     * @summary: Update a theme
     * @description: Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more.
     */
    updateTheme({ themeId, body }?: {
        themeId: string;
        body: ThemesSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Delete a theme
     * @description: Use this API to delete a theme from the theme library.
     */
    deleteTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Get a theme preview
     * @description: A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID.
     */
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Publish a theme
     * @description: Use this API to publish a theme that is either newly created or edited.
     */
    publishTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Unpublish a theme
     * @description: Use this API to remove an existing theme from the list of available themes.
     */
    unpublishTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Archive a theme
     * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.
     */
    archiveTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Unarchive a theme
     * @description: Use this API to restore an archived theme and bring it back for editing or publishing.
     */
    unarchiveTheme({ themeId }?: {
        themeId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID allotted to the theme.
     * @summary: Fetch last modified timestamp
     * @description: Use this API to fetch Last-Modified timestamp in header metadata.
     */
    getThemeLastModified({ themeId }?: {
        themeId: string;
    }): Promise<any>;
}
declare class User {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {Object} [arg.q] - The search query. Mobile number or email ID of
     *   a customer.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get a list of customers
     * @description: Use this API to retrieve a list of customers who have registered in the application.
     */
    getCustomers({ q, pageSize, pageNo }?: {
        q?: any;
        pageSize?: number;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search query. Mobile number or email ID of
     *   a customer.
     * @summary: Search an existing user.
     * @description: Use this API to retrieve an existing user from a list.
     */
    searchUsers({ q }?: {
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUserRequestSchema} arg.body
     * @summary: Create user
     * @description: Create user
     */
    createUser({ body }?: {
        body: CreateUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BlockUserRequestSchema} arg.body
     * @summary: Block/Unblock user
     * @description: Block/Unblock user
     */
    blockOrUnblockUsers({ body }?: {
        body: BlockUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ArchiveUserRequestSchema} arg.body
     * @summary: archive user
     * @description: archive user
     */
    archiveUser({ body }?: {
        body: ArchiveUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UnDeleteUserRequestSchema} arg.body
     * @summary: undelete user who deleted from application and have not elapsed the platform configured delete days
     * @description: undelete user who deleted from application and have not elapsed the platform configured delete days
     */
    unDeleteUser({ body }?: {
        body: UnDeleteUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User ID
     * @param {UpdateUserRequestSchema} arg.body
     * @summary: Update user
     * @description: Update user
     */
    updateUser({ userId, body }?: {
        userId: string;
        body: UpdateUserRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateUserSessionRequestSchema} arg.body
     * @summary: Create user session
     * @description: Create user session
     */
    createUserSession({ body }?: {
        body: CreateUserSessionRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID of a customer.
     * @summary: Get a list of all session for a user
     * @description: Use this API to retrieve a list of session of customers who have registered in the application.
     */
    getActiveSessions({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID of a customer.
     * @summary: Delete a list of all session for a user
     * @description: Use this API to Delete a list of session of customers who have registered in the application.
     */
    deleteActiveSessions({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get platform configurations
     * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    getPlatformConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PlatformSchema} arg.body
     * @summary: Update platform configurations
     * @description: Use this API to edit the existing platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    updatePlatformConfig({ body }?: {
        body: PlatformSchema;
    }): Promise<any>;
}
declare class Content {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
     */
    getAnnouncementsList({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
     */
    getAnnouncementsListPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {AdminAnnouncementSchema} arg.body
     * @summary: Create an announcement
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to create an announcement.
     */
    createAnnouncement({ body }?: {
        body: AdminAnnouncementSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @summary: Get announcement by ID
     * @description: Use this API to retrieve an announcement and its details such as the target platform and pages on which it's applicable
     */
    getAnnouncementById({ announcementId }?: {
        announcementId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @param {AdminAnnouncementSchema} arg.body
     * @summary: Update an announcement
     * @description: Use this API to edit an existing announcement and its details such as the target platform and pages on which it's applicable
     */
    updateAnnouncement({ announcementId, body }?: {
        announcementId: string;
        body: AdminAnnouncementSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @param {ScheduleSchema} arg.body
     * @summary: Update the schedule and the publish status of an announcement
     * @description: Use this API to edit the duration, i.e. start date-time and end date-time of an announcement. Moreover, you can enable/disable an announcement using this API.
     */
    updateAnnouncementSchedule({ announcementId, body }?: {
        announcementId: string;
        body: ScheduleSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.announcementId - ID allotted to the announcement.
     * @summary: Delete announcement by id
     * @description: Use this API to delete an existing announcement.
     */
    deleteAnnouncement({ announcementId }?: {
        announcementId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BlogRequest} arg.body
     * @summary: Create a blog
     * @description: Use this API to create a blog.
     */
    createBlog({ body }?: {
        body: BlogRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get blogs
     * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlogs({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get blogs
     * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlogsPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the blog.
     * @param {BlogRequest} arg.body
     * @summary: Update a blog
     * @description: Use this API to update the details of an existing blog which includes title, feature image, content, SEO details, expiry, etc.
     */
    updateBlog({ id, body }?: {
        id: string;
        body: BlogRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the blog.
     * @summary: Delete blogs
     * @description: Use this API to delete a blog.
     */
    deleteBlog({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a blog page. You can get slug value of a blog from `getBlogs` API.
     * @summary: Get components of a blog
     * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc.
     */
    getComponentById({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DataLoaderSchema} arg.body
     * @summary: Adds a data loader
     * @description: Use this API to add data loader. This includes the data loader name, operationId, service name and its type (url/function) with corresponding value.
     */
    addDataLoader({ body }?: {
        body: DataLoaderSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all the data loaders in an application
     * @description: Use this to get all data loaders of an application
     */
    getDataLoaders({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @summary: Delete data loader in application
     * @description: Use this API to delete data loader.
     */
    deleteDataLoader({ dataLoaderId }?: {
        dataLoaderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @param {DataLoaderSchema} arg.body
     * @summary: Edit a data loader by id
     * @description: Use this API to edit the details of an existing data loader by its ID.
     */
    editDataLoader({ dataLoaderId, body }?: {
        dataLoaderId: string;
        body: DataLoaderSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.dataLoaderId - ID allotted to the data loader.
     * @summary: Select a data loader by id
     * @description: Use this API to select a data loader to be used in applications.
     */
    selectDataLoader({ dataLoaderId }?: {
        dataLoaderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.service - Name of service.
     * @param {string} arg.operationId - Name of operation id of the service.
     * @summary: Reset a data loader by serive name and operation Id
     * @description: Use this API to reselect a data loader.
     */
    resetDataLoader({ service, operationId }?: {
        service: string;
        operationId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get a list of FAQ categories
     * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
     */
    getFaqCategories({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @summary: Get an FAQ category by slug or id
     * @description: FAQs can be divided into categories. Use this API to get an FAQ categories using its slug or ID.
     */
    getFaqCategoryBySlugOrId({ idOrSlug }?: {
        idOrSlug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateFaqCategoryRequestSchema} arg.body
     * @summary: Create an FAQ category
     * @description: FAQs help users to solve an issue or know more about a process. FAQs can be categorized separately, for e.g. some questions can be related to payment, some could be related to purchase, shipping, navigating, etc. Use this API to create an FAQ category.
     */
    createFaqCategory({ body }?: {
        body: CreateFaqCategoryRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to an FAQ category.
     * @param {UpdateFaqCategoryRequestSchema} arg.body
     * @summary: Update an FAQ category
     * @description: Use this API to edit an existing FAQ category.
     */
    updateFaqCategory({ id, body }?: {
        id: string;
        body: UpdateFaqCategoryRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to an FAQ category.
     * @summary: Delete an FAQ category
     * @description: Use this API to delete an FAQ category.
     */
    deleteFaqCategory({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @summary: Get question and answers within an FAQ category
     * @description: Use this API to retrieve all the commonly asked question and answers belonging to an FAQ category.
     */
    getFaqsByCategoryIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {CreateFaqSchema} arg.body
     * @summary: Create an FAQ
     * @description: FAQs help users to solve an issue or know more about a process. Use this API to create an FAQ for a given FAQ category.
     */
    addFaq({ categoryId, body }?: {
        categoryId: string;
        body: CreateFaqSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {string} arg.faqId - ID allotted to an FAQ.
     * @param {CreateFaqSchema} arg.body
     * @summary: Update an FAQ
     * @description: Use this API to edit an existing FAQ.
     */
    updateFaq({ categoryId, faqId, body }?: {
        categoryId: string;
        faqId: string;
        body: CreateFaqSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryId - ID allotted to an FAQ category.
     * @param {string} arg.faqId - ID allotted to an FAQ.
     * @summary: Delete an FAQ
     * @description: Use this API to delete an existing FAQ.
     */
    deleteFaq({ categoryId, faqId }?: {
        categoryId: string;
        faqId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
     *   category. Slug is a short, human-readable, URL-friendly identifier of
     *   an object. You can get slug value of an FAQ category from
     *   `getFaqCategories` API.
     * @summary: Get an FAQ
     * @description: Use this API to retrieve a specific FAQ. You will get the question and answer of that FAQ.
     */
    getFaqByIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get landing pages
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
     */
    getLandingPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get landing pages
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
     */
    getLandingPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {LandingPageSchema} arg.body
     * @summary: Create a landing page
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to create a landing page.
     */
    createLandingPage({ body }?: {
        body: LandingPageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to a landing page.
     * @param {LandingPageSchema} arg.body
     * @summary: Update a landing page
     * @description: Use this API to edit the details of an existing landing page.
     */
    updateLandingPage({ id, body }?: {
        id: string;
        body: LandingPageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to a landing page.
     * @summary: Delete a landing page
     * @description: Use this API to delete an existing landing page.
     */
    deleteLandingPage({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get legal information
     * @description: Use this API to get the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
     */
    getLegalInformation({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationLegal} arg.body
     * @summary: Save legal information
     * @description: Use this API to edit, update and save the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
     */
    updateLegalInformation({ body }?: {
        body: ApplicationLegal;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get navigations
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
     */
    getNavigations({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get navigations
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
     */
    getNavigationsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {NavigationRequest} arg.body
     * @summary: Create a navigation
     * @description: Navigation is the arrangement of navigational items to ease the accessibility of resources for users on a website. Use this API to create a navigation.
     */
    createNavigation({ body }?: {
        body: NavigationRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get default navigations
     * @description: On any website (application), there are navigations that are present by default. Use this API to retrieve those default navigations.
     */
    getDefaultNavigations({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a navigation. You can get slug value of a navigation from
     *   `getNavigations` API.
     * @param {string} arg.devicePlatform - Filter navigations by platform.
     *   Acceptable values are: web, android, ios, all
     * @summary: Get a navigation by slug
     * @description: Use this API to retrieve a navigation by its slug.
     */
    getNavigationBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the navigation.
     * @param {NavigationRequest} arg.body
     * @summary: Update a navigation
     * @description: Use this API to edit the details of an existing navigation.
     */
    updateNavigation({ id, body }?: {
        id: string;
        body: NavigationRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the navigation.
     * @summary: Delete a navigation
     * @description: Use this API to delete an existing navigation.
     */
    deleteNavigation({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get page meta
     * @description: Use this API to get the meta of custom pages (blog, page) and default system pages (e.g. home/brand/category/collection).
     */
    getPageMeta({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get page spec
     * @description: Use this API to get the specifications of a page, such as page type, display name, params and query.
     */
    getPageSpec({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a page. You can get slug value of a page from `getPages` API.
     * @param {PagePublishRequest} arg.body
     * @summary: Change the publish status of a page
     * @description: Use this API to change the publish status of an existing page. Allows you to publish and unpublish the page.
     */
    updatePagePreview({ slug, body }?: {
        slug: string;
        body: PagePublishRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the page.
     * @summary: Delete a page
     * @description: Use this API to delete an existing page.
     */
    deletePage({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PathMappingSchema} arg.body
     * @summary: Save path based redirection rules
     * @description: Use this API to add redirection rules
     */
    addPathRedirectionRules({ body }?: {
        body: PathMappingSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 5.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @summary: Get path based redirection rules
     * @description: Use this API to get path based redirection rules.
     */
    getPathRedirectionRules({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pathId - ID allotted to the path redirection rule.
     * @summary: Get path based redirection rule
     * @description: Use this API to get path based redirection rule.
     */
    getPathRedirectionRule({ pathId }?: {
        pathId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pathId - ID allotted to the path redirection rule.
     * @param {PathMappingSchema} arg.body
     * @summary: Update path based redirection rules
     * @description: Use this API to update redirection rules
     */
    updatePathRedirectionRules({ pathId, body }?: {
        pathId: string;
        body: PathMappingSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pathId - ID allotted to the path redirection rule.
     * @summary: Delete path based redirection rules
     * @description: Use this API to delete redirection rules
     */
    deletePathRedirectionRules({ pathId }?: {
        pathId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get SEO configuration of an application
     * @description: Use this API to know how the SEO is configured in the application. This includes the sitemap, robot.txt, custom meta tags, etc.
     */
    getSEOConfiguration({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SeoComponent} arg.body
     * @summary: Update SEO of application
     * @description: Use this API to edit the SEO details of an application. This includes the sitemap, robot.txt, custom meta tags, etc.
     */
    updateSEOConfiguration({ body }?: {
        body: SeoComponent;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get slideshows
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
     */
    getSlideshows({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get slideshows
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
     */
    getSlideshowsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SlideshowRequest} arg.body
     * @summary: Create a slideshow
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to create a slideshow.
     */
    createSlideshow({ body }?: {
        body: SlideshowRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a slideshow. You can get slug value of a page from
     *   `getSlideshows` API.
     * @param {string} arg.devicePlatform - Filter slideshows by platform.
     *   Acceptable values are: web, android, ios and all
     * @summary: Get slideshow by slug
     * @description: Use this API to retrieve the details of a slideshow by its slug.
     */
    getSlideshowBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the slideshow.
     * @param {SlideshowRequest} arg.body
     * @summary: Update a slideshow
     * @description: Use this API to edit the details of an existing slideshow.
     */
    updateSlideshow({ id, body }?: {
        id: string;
        body: SlideshowRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the slideshow.
     * @summary: Delete a slideshow
     * @description: Use this API to delete an existing slideshow.
     */
    deleteSlideshow({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get support information
     * @description: Use this API to get the contact details for customer support, including emails and phone numbers.
     */
    getSupportInformation({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {Support} arg.body
     * @summary: Update the support data of an application
     * @description: Use this API to edit the existing contact details for customer support, including emails and phone numbers.
     */
    updateSupportInformation({ body }?: {
        body: Support;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateTagRequestSchema} arg.body
     * @summary: Update a tag
     * @description: Use this API to edit the details of an existing tag. This includes the tag name, tag type (css/js), url and position of the tag.
     */
    updateInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Delete tags in application
     * @description: Use this API to delete all the existing tags at once.
     */
    deleteAllInjectableTags({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get all the tags in an application
     * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
     */
    getInjectableTags({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateTagRequestSchema} arg.body
     * @summary: Add a tag
     * @description: CSS and JS can be injected in the application (website) with the help of tags. Use this API to create such tags by entering the tag name, tag type (css/js), url and position of the tag.
     */
    addInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RemoveHandpickedSchema} arg.body
     * @summary: Remove a tag
     * @description: Use this API to delete an existing tag.
     */
    removeInjectableTag({ body }?: {
        body: RemoveHandpickedSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.tagId - ID allotted to the tag.
     * @param {UpdateHandpickedSchema} arg.body
     * @summary: Edit a tag by id
     * @description: Use this API to edit the details of an existing tag by its ID.
     */
    editInjectableTag({ tagId, body }?: {
        tagId: string;
        body: UpdateHandpickedSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PageRequest} arg.body
     * @summary: Create a page
     * @description: Use this API to create a custom page using a title, seo, publish status, feature image, tags, meta, etc.
     */
    createPage({ body }?: {
        body: PageRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of pages
     * @description: Use this API to retrieve a list of pages.
     */
    getPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Numeric ID allotted to an application
     *   created within a business account.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get a list of pages
     * @description: Use this API to retrieve a list of pages.
     */
    getPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID allotted to the page.
     * @param {PageSchema} arg.body
     * @summary: Update a page
     * @description: Use this API to edit the details of an existing page, such as its title, seo, publish status, feature image, tags, schedule, etc.
     */
    updatePage({ id, body }?: {
        id: string;
        body: PageSchema;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a page. You can get slug value of a page from `getPages` API.
     * @summary: Get pages by component Id
     * @description: Use this API to retrieve the components of a page, such as its title, seo, publish status, feature image, tags, schedule, etc.
     */
    getPageBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
}
declare class Communication {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get campaigns
     * @description: Get campaigns
     */
    getCampaigns({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get campaigns
     * @description: Get campaigns
     */
    getCampaignsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {CampaignReq} arg.body
     * @summary: Create campaign
     * @description: Create campaign
     */
    createCampaign({ body }?: {
        body: CampaignReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @summary: Get campaign by id
     * @description: Get campaign by id
     */
    getCampaignById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @param {CampaignReq} arg.body
     * @summary: Update campaign by id
     * @description: Update campaign by id
     */
    updateCampaignById({ id, body }?: {
        id: string;
        body: CampaignReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Campaign id
     * @summary: Get stats of campaign by id
     * @description: Get stats of campaign by id
     */
    getStatsOfCampaignById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get audiences
     * @description: Get audiences
     */
    getAudiences({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get audiences
     * @description: Get audiences
     */
    getAudiencesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {AudienceReq} arg.body
     * @summary: Create audience
     * @description: Create audience
     */
    createAudience({ body }?: {
        body: AudienceReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {BigqueryHeadersReq} arg.body
     * @summary: Get bigquery headers
     * @description: Get bigquery headers
     */
    getBigqueryHeaders({ body }?: {
        body: BigqueryHeadersReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Audience id
     * @summary: Get audience by id
     * @description: Get audience by id
     */
    getAudienceById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Audience id
     * @param {AudienceReq} arg.body
     * @summary: Update audience by id
     * @description: Update audience by id
     */
    updateAudienceById({ id, body }?: {
        id: string;
        body: AudienceReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetNRecordsCsvReq} arg.body
     * @summary: Get n sample records from csv
     * @description: Get n sample records from csv
     */
    getNSampleRecordsFromCsv({ body }?: {
        body: GetNRecordsCsvReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email providers
     * @description: Get email providers
     */
    getEmailProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email providers
     * @description: Get email providers
     */
    getEmailProvidersPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {EmailProviderReq} arg.body
     * @summary: Create email provider
     * @description: Create email provider
     */
    createEmailProvider({ body }?: {
        body: EmailProviderReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email provider id
     * @summary: Get email provider by id
     * @description: Get email provider by id
     */
    getEmailProviderById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email provider id
     * @param {EmailProviderReq} arg.body
     * @summary: Update email provider by id
     * @description: Update email provider by id
     */
    updateEmailProviderById({ id, body }?: {
        id: string;
        body: EmailProviderReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email templates
     * @description: Get email templates
     */
    getEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get email templates
     * @description: Get email templates
     */
    getEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {EmailTemplateReq} arg.body
     * @summary: Create email template
     * @description: Create email template
     */
    createEmailTemplate({ body }?: {
        body: EmailTemplateReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system email templates
     * @description: Get system email templates
     */
    getSystemEmailTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system email templates
     * @description: Get system email templates
     */
    getSystemEmailTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @summary: Get email template by id
     * @description: Get email template by id
     */
    getEmailTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @param {EmailTemplateReq} arg.body
     * @summary: Update email template by id
     * @description: Update email template by id
     */
    updateEmailTemplateById({ id, body }?: {
        id: string;
        body: EmailTemplateReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Email template id
     * @summary: Delete email template by id
     * @description: Delete email template by id
     */
    deleteEmailTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @summary: Send email or sms synchronously
     * @description: Send email or sms synchronously
     */
    sendCommunicationSynchronously({ body }?: {
        body: EngineRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EngineRequest} arg.body
     * @summary: Send email or sms asynchronously
     * @description: Send email or sms asynchronously
     */
    sendCommunicationAsynchronously({ body }?: {
        body: EngineRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {string} [arg.populate] - Populate fields
     * @summary: Get event subscriptions
     * @description: Get event subscriptions
     */
    getEventSubscriptions({ pageNo, pageSize, populate }?: {
        pageNo?: number;
        pageSize?: number;
        populate?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {string} [arg.populate] - Populate fields
     * @summary: Get event subscriptions
     * @description: Get event subscriptions
     */
    getEventSubscriptionsPaginator({ companyId, applicationId, pageSize, populate, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        populate?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get jobs
     * @description: Get jobs
     */
    getJobsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {TriggerJobRequest} arg.body
     * @summary: Trigger campaign job
     * @description: Trigger campaign job
     */
    triggerCampaignJob({ body }?: {
        body: TriggerJobRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogs({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get job logs
     * @description: Get job logs
     */
    getJobLogsPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageId] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on _id
     * @param {Object} [arg.query] -
     * @summary: Get communication logs
     * @description: Get communication logs
     */
    getCommunicationLogs({ pageId, pageSize, sort, query }?: {
        pageId?: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on _id
     * @param {Object} [arg.query] -
     * @summary: Get communication logs
     * @description: Get communication logs
     */
    getCommunicationLogsPaginator({ companyId, applicationId, pageSize, sort, query, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
        query?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SendOtpCommsReq} arg.body
     * @summary: Send OTP using email and sms
     * @description: Send OTP Comms via email and sms
     */
    sendOtp({ body }?: {
        body: SendOtpCommsReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {VerifyOtpCommsReq} arg.body
     * @summary: Verify OTP sent via email and sms
     * @description: Verify OTP sent via email and sms
     */
    verfiyOtp({ body }?: {
        body: VerifyOtpCommsReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms providers
     * @description: Get sms providers
     */
    getSmsProviders({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms providers
     * @description: Get sms providers
     */
    getSmsProvidersPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SmsProviderReq} arg.body
     * @summary: Create sms provider
     * @description: Create sms provider
     */
    createSmsProvider({ body }?: {
        body: SmsProviderReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms provider id
     * @summary: Get sms provider by id
     * @description: Get sms provider by id
     */
    getSmsProviderById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms provider id
     * @param {SmsProviderReq} arg.body
     * @summary: Update sms provider by id
     * @description: Update sms provider by id
     */
    updateSmsProviderById({ id, body }?: {
        id: string;
        body: SmsProviderReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms templates
     * @description: Get sms templates
     */
    getSmsTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get sms templates
     * @description: Get sms templates
     */
    getSmsTemplatesPaginator({ companyId, applicationId, pageSize, sort }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SmsTemplateReq} arg.body
     * @summary: Create sms template
     * @description: Create sms template
     */
    createSmsTemplate({ body }?: {
        body: SmsTemplateReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @summary: Get sms template by id
     * @description: Get sms template by id
     */
    getSmsTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @param {SmsTemplateReq} arg.body
     * @summary: Update sms template by id
     * @description: Update sms template by id
     */
    updateSmsTemplateById({ id, body }?: {
        id: string;
        body: SmsTemplateReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Sms template id
     * @summary: Delete sms template by id
     * @description: Delete sms template by id
     */
    deleteSmsTemplateById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system sms templates
     * @description: Get system sms templates
     */
    getSystemSystemTemplates({ pageNo, pageSize, sort }?: {
        pageNo?: number;
        pageSize?: number;
        sort?: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {Object} [arg.sort] - To sort based on created_at
     * @summary: Get system sms templates
     * @description: Get system sms templates
     */
    getSystemSystemTemplatesPaginator({ companyId, applicationId, pageSize, sort, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        sort?: any;
    }): Paginator;
}
declare class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get All Brand Payment Gateway Config Secret
     * @description: Get All Brand Payment Gateway Config Secret
     */
    getBrandPaymentGatewayConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     */
    saveBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     */
    updateBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} arg.refresh -
     * @param {string} arg.requestType -
     * @summary: Get All Valid Payment Options
     * @description: Use this API to get Get All Valid Payment Options for making payment
     */
    getPaymentModeRoutes({ refresh, requestType }?: {
        refresh: boolean;
        requestType: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @param {string} [arg.requestHash] -
     * @summary: Get bank details
     * @description: Use this API to get saved bank details for returned/cancelled order using order id.
     */
    getBankAccountDetailsOpenAPI({ orderId, requestHash }?: {
        orderId: string;
        requestHash?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddBeneficiaryDetailsOTPRequest} arg.body
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
     */
    addRefundBankAccountUsingOTP({ body }?: {
        body: AddBeneficiaryDetailsOTPRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary: List Order Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserOrderBeneficiaries({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary: List User Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserBeneficiaries({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentConfirmationRequest} arg.body
     * @summary: Confirm payment after successful payment from payment gateway
     * @description: Use this API to confirm payment after payment gateway accepted payment.
     */
    confirmPayment({ body }?: {
        body: PaymentConfirmationRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: API to fetch the payment options of the merchant for paltform
     * @description: Use this API to fetch the payment options.
     */
    getPlatformPaymentConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdatePlatformPaymentConfig} arg.body
     * @summary: API to update the payment options of the merchant for paltform
     * @description: Use this API to update the payment options.
     */
    updatePlatformPaymentConfig({ body }?: {
        body: UpdatePlatformPaymentConfig;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.merchantUserId -
     * @param {string} arg.mobileNo -
     * @summary: Get COD limit for user
     * @description: Use this API to get user cod limit and reamining limit for the payment
     */
    getUserCODlimitRoutes({ merchantUserId, mobileNo }?: {
        merchantUserId: string;
        mobileNo: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SetCODForUserRequest} arg.body
     * @summary: Set COD option for user for payment
     * @description: Use this API to set cod option as true or false for the payment
     */
    setUserCODlimitRoutes({ body }?: {
        body: SetCODForUserRequest;
    }): Promise<any>;
}
declare class Order {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.lane] -
     * @param {string} [arg.searchType] -
     * @param {string} [arg.searchId] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {string} [arg.dpIds] -
     * @param {string} [arg.orderingCompanyId] -
     * @param {string} [arg.stores] -
     * @param {string} [arg.salesChannel] -
     * @param {string} [arg.requestByExt] -
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.customerId] -
     * @param {boolean} [arg.isPrioritySort] -
     * @summary:
     * @description:
     */
    getApplicationShipments({ lane, searchType, searchId, fromDate, toDate, dpIds, orderingCompanyId, stores, salesChannel, requestByExt, pageNo, pageSize, customerId, isPrioritySort, }?: {
        lane?: string;
        searchType?: string;
        searchId?: string;
        fromDate?: string;
        toDate?: string;
        dpIds?: string;
        orderingCompanyId?: string;
        stores?: string;
        salesChannel?: string;
        requestByExt?: string;
        pageNo?: number;
        pageSize?: number;
        customerId?: string;
        isPrioritySort?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @summary:
     * @description:
     */
    getAppOrderShipmentDetails({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId -
     * @summary: Track shipment
     * @description: Track Shipment by shipment id, for application based on application Id
     */
    trackPlatformShipment({ shipmentId }?: {
        shipmentId: string;
    }): Promise<any>;
}
declare class Catalog {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @summary: Delete a Search Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
     */
    deleteSearchKeywords({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to retrieve.
     * @summary: Get a Search Keywords Details
     * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
     */
    getSearchKeywords({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateSearchKeyword} arg.body
     * @summary: Update Search Keyword
     * @description: Update Search Keyword by its id. On successful request, returns the updated collection
     */
    updateSearchKeywords({ id, body }?: {
        id: string;
        body: CreateSearchKeyword;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateSearchKeyword} arg.body
     * @summary: Add a Custom Search Keywords
     * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
     */
    createCustomKeyword({ body }?: {
        body: CreateSearchKeyword;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List all Search Custom Keyword Listing
     * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
     */
    getAllSearchKeyword({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @summary: Delete a Autocomplete Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
     */
    deleteAutocompleteKeyword({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to retrieve.
     * @summary: Get a Autocomplete Keywords Details
     * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
     */
    getAutocompleteKeywordDetail({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular
     *   detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateAutocompleteKeyword} arg.body
     * @summary: Create & Update Autocomplete Keyword
     * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
     */
    updateAutocompleteKeyword({ id, body }?: {
        id: string;
        body: CreateAutocompleteKeyword;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateAutocompleteKeyword} arg.body
     * @summary: Add a Custom Autocomplete Keywords
     * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
     */
    createCustomAutocompleteRule({ body }?: {
        body: CreateAutocompleteKeyword;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List all Autocomplete Keyword Listing
     * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
     */
    getAutocompleteConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.itemId - Product id for a particular product.
     * @summary: Get company application product data.
     * @description: Products are the core resource of an application. If successful, returns a Company Application Product resource in the response body depending upon filter sent.
     */
    getAppProduct({ itemId }?: {
        itemId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.itemId - Product id for which the custom_meta is associated.
     * @param {ApplicationItemMeta} arg.body
     * @summary: Update a single custom meta.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppProduct({ itemId, body }?: {
        itemId: string;
        body: ApplicationItemMeta;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is an identifier that
     *   defines a specific type of configuration.
     * @param {string} [arg.templateSlug] - Get configuration list filtered by
     *   `template_slug` string. This is for the details and comparision groups.
     * @summary: Get configuration metadata details for catalog for admin panel
     * @description: Get the configuraion metadata details for catalog.
     */
    getConfigurationMetadata({ configType, templateSlug }?: {
        configType: string;
        templateSlug?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular group configuration type.
     * @param {AppConfigurationDetail} arg.body
     * @summary: Create configuration for Group config types.
     * @description: Create configuration for Group config types.
     */
    createGroupConfiguration({ configType, body }?: {
        configType: string;
        body: AppConfigurationDetail;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is an identifier that
     *   defines a specific type of configuration.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.search] - Get configuration list filtered by `search` string.
     * @param {string} [arg.templateSlug] - Get configuration list filtered by
     *   `template_slug` string. This is for the details and comparision groups.
     * @summary: Get the details of the application configured configurations of group config types.
     * @description: Get the details of the application configured configurations of group config types.
     */
    getGroupConfigurations({ configType, pageNo, pageSize, search, templateSlug, }?: {
        configType: string;
        pageNo?: number;
        pageSize?: number;
        search?: string;
        templateSlug?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular group configuration type.
     * @param {string} arg.groupSlug - A `group_slug` is a unique identifier of
     *   a particular configuration.
     * @summary: Delete configuration of the product config type of the application.
     * @description: Delete configuration of the product config type of the application.
     */
    deleteGroupConfiguration({ configType, groupSlug }?: {
        configType: string;
        groupSlug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular group configuration type.
     * @param {string} arg.groupSlug - A `group_slug` is a unique identifier of
     *   a particular configuration.
     * @param {AppConfigurationDetail} arg.body
     * @summary: Update the group configurations for the application.
     * @description: Update the group configurations for the application.
     */
    updateGroupConfiguration({ configType, groupSlug, body }?: {
        configType: string;
        groupSlug: string;
        body: AppConfigurationDetail;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular listing configuration type.
     * @param {AppConfigurationsSort} arg.body
     * @summary: Add configuration for listings
     * @description: Add configuration for listing.
     */
    createListingConfiguration({ configType, body }?: {
        configType: string;
        body: AppConfigurationsSort;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is an identifier that
     *   defines a specific type of configuration.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.search] - Get configuration list filtered by `search` string.
     * @summary: Get the details of the application configured configurations of listing config types.
     * @description: Get the details of the application configured configurations of listing config types.
     */
    getListingConfigurations({ configType, pageNo, pageSize, search }?: {
        configType: string;
        pageNo?: number;
        pageSize?: number;
        search?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular listing configuration type.
     * @param {string} arg.configId - A `config_id` is a unique identifier of a
     *   particular configuration.
     * @summary: Delete configuration for listings
     * @description: Delete configuration for listing.
     */
    deleteListingConfiguration({ configType, configId }?: {
        configType: string;
        configId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.configType - A `config_type` is a unique identifier
     *   for a particular listing configuration type.
     * @param {string} arg.configId - A `config_id` is a unique identifier of a
     *   particular configuration.
     * @param {AppConfigurationsSort} arg.body
     * @summary: Update configuration for listings
     * @description: Update configuration for listing.
     */
    updateListingConfiguration({ configType, configId, body }?: {
        configType: string;
        configId: string;
        body: AppConfigurationsSort;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AllowSingleRequest} arg.body
     * @summary: Update allow single flag for filters of the application.
     * @description: Update allow single flag for filters of the application.
     */
    updateAllowSingle({ body }?: {
        body: AllowSingleRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DefaultKeyRequest} arg.body
     * @summary: Update the default sort key configuration for the application.
     * @description: Update the default sort key configuration for the application.
     */
    updateDefaultSort({ body }?: {
        body: DefaultKeyRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get configuration meta  details for catalog for admin panel
     * @description: configuration meta  details for catalog.
     */
    getCatalogConfiguration({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppConfiguration} arg.body
     * @summary: Add configuration for products & listings
     * @description: Add configuration for products & listing.
     */
    createConfigurationProductListing({ body }?: {
        body: AppConfiguration;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get configured details for catalog
     * @description: configured details for catalog.
     */
    getConfigurations({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.type - Type can be brands, categories etc.
     * @param {AppConfiguration} arg.body
     * @summary: Add configuration for categories and brands
     * @description: Add configuration for categories & brands.
     */
    createConfigurationByType({ type, body }?: {
        type: string;
        body: AppConfiguration;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.type - Type can be brands, categories etc.
     * @summary: Get configured details for catalog
     * @description: configured details for catalog.
     */
    getConfigurationByType({ type }?: {
        type: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get query filters to configure a collection
     * @description: Get query filters to configure a collection
     */
    getQueryFilters({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateCollection} arg.body
     * @summary: Add a Collection
     * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
     */
    createCollection({ body }?: {
        body: CreateCollection;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - Get collection list filtered by q string,
     * @param {string} [arg.scheduleStatus] - Get collection list filtered by
     *   scheduled status,
     * @param {string} [arg.type] - Type of the collections
     * @param {string[]} [arg.tags] - Each response will contain next_id param,
     *   which should be sent back to make pagination work.
     * @param {boolean} [arg.isActive] - Get collections filtered by active status.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: List all the collections
     * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
     */
    getAllCollections({ q, scheduleStatus, type, tags, isActive, pageNo, pageSize, }?: {
        q?: string;
        scheduleStatus?: string;
        type?: string;
        tags?: string[];
        isActive?: boolean;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A `slug` is a human readable, URL friendly
     *   unique identifier of an object. Pass the `slug` of the collection which
     *   you want to retrieve.
     * @summary: Get a particular collection
     * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
     */
    getCollectionDetail({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @summary: Delete a Collection
     * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
     */
    deleteCollection({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {UpdateCollection} arg.body
     * @summary: Update a collection
     * @description: Update a collection by it's id. On successful request, returns the updated collection
     */
    updateCollection({ id, body }?: {
        id: string;
        body: UpdateCollection;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {CollectionItemRequest} arg.body
     * @summary: Add items to a collection
     * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
     */
    addCollectionItems({ id, body }?: {
        id: string;
        body: CollectionItemRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {string} [arg.sortOn] - Each response will contain sort_on param,
     *   which should be sent back to make pagination work.
     * @param {string} [arg.pageId] - Each response will contain next_id param,
     *   which should be sent back to make pagination work.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @summary: Get the items for a collection
     * @description: Get items from a collection specified by its `id`.
     */
    getCollectionItems({ id, sortOn, pageId, pageSize }?: {
        id: string;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.brand] - Brand slug
     * @summary: Analytics data of catalog and inventory.
     * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
     */
    getCatalogInsights({ brand }?: {
        brand?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.sizeIdentifier - Size Identifier (Seller Identifier
     *   or Primary Identifier) of which inventory is to get.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search with help of store code.
     * @param {number[]} [arg.locationIds] - Search by store ids.
     * @summary: Get Inventory for company
     * @description: This API allows get Inventory data for particular company grouped by size and store.
     */
    getDiscountedInventoryBySizeIdentifier({ itemId, sizeIdentifier, pageNo, pageSize, q, locationIds, }?: {
        itemId: number;
        sizeIdentifier: string;
        pageNo?: number;
        pageSize?: number;
        q?: string;
        locationIds?: number[];
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @param {number[]} [arg.brandId] - Helps to sort the brands list on the
     *   basis of uid list.
     * @summary: List all the brands
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrands({ department, pageNo, pageSize, q, brandId }?: {
        department?: string;
        pageNo?: number;
        pageSize?: number;
        q?: string;
        brandId?: number[];
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @param {number[]} [arg.brandId] - Helps to sort the brands list on the
     *   basis of uid list.
     * @summary: List all the brands
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrandsPaginator({ companyId, applicationId, department, pageSize, q, brandId, }?: {
        companyId: string;
        applicationId: string;
        department?: string;
        pageSize?: number;
        q?: string;
        brandId?: number[];
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List all the departments
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
     */
    getDepartments({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @summary: List all the categories
     * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
     */
    getCategories({ department }?: {
        department?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search query. This can be a partial or
     *   complete name of a either a product, brand or category
     * @param {string} [arg.f] - The search filter parameters. All the parameter
     *   filtered from filter parameters will be passed in **f** parameter in
     *   this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
     * @param {string} [arg.c] - The search filter parameters for collection
     *   items. All the parameter filtered from filter parameters will be passed
     *   in **c** parameter in this format.
     *   **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
     * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
     *   filter details. This flag is used to fetch all filters
     * @param {string} [arg.sortOn] - The order to sort the list of products on.
     *   The supported sort parameters are popularity, price, redemption and
     *   discount in either ascending or descending order. See the supported
     *   values below.
     * @param {string} [arg.pageId] - Each response will contain **page_id**
     *   param, which should be sent back to make pagination work.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {number} [arg.pageNo] - If page_type is number then pass it to
     *   fetch page items. Default is 1.
     * @param {string} [arg.pageType] - For pagination type should be cursor or
     *   number. Default is cursor.
     * @param {number[]} [arg.itemIds] - Item Ids of product
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
     */
    getAppicationProducts({ q, f, c, filters, sortOn, pageId, pageSize, pageNo, pageType, itemIds, }?: {
        q?: string;
        f?: string;
        c?: string;
        filters?: boolean;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
        pageNo?: number;
        pageType?: string;
        itemIds?: number[];
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.q] - The search query. This can be a partial or
     *   complete name of a either a product, brand or category
     * @param {string} [arg.f] - The search filter parameters. All the parameter
     *   filtered from filter parameters will be passed in **f** parameter in
     *   this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
     * @param {string} [arg.c] - The search filter parameters for collection
     *   items. All the parameter filtered from filter parameters will be passed
     *   in **c** parameter in this format.
     *   **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
     * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
     *   filter details. This flag is used to fetch all filters
     * @param {string} [arg.sortOn] - The order to sort the list of products on.
     *   The supported sort parameters are popularity, price, redemption and
     *   discount in either ascending or descending order. See the supported
     *   values below.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {number[]} [arg.itemIds] - Item Ids of product
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
     */
    getAppicationProductsPaginator({ companyId, applicationId, q, f, c, filters, sortOn, pageSize, itemIds, }?: {
        companyId: string;
        applicationId: string;
        q?: string;
        f?: string;
        c?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
        itemIds?: number[];
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - The unique identifier of a product. i.e;
     *   `slug` of a product. You can retrieve these from the APIs that list
     *   products like **v1.0/products/**
     * @summary: Get a product
     * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
     */
    getProductDetailBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number[]} [arg.brandIds] - Get multiple products filtered by Brand Ids
     * @param {number[]} [arg.categoryIds] - Get multiple products filtered by
     *   Category Ids
     * @param {number[]} [arg.departmentIds] - Get multiple products filtered by
     *   Department Ids
     * @param {string[]} [arg.tags] - Get multiple products filtered by tags
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.q] - Search with Item Code, Name, Slug or Identifier.
     * @summary: Get applicationwise products
     * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. If successful, returns a Product resource in the response body specified in `ApplicationProductListingResponseDatabasePowered`
     */
    getAppProducts({ brandIds, categoryIds, departmentIds, tags, pageNo, pageSize, q, }?: {
        brandIds?: number[];
        categoryIds?: number[];
        departmentIds?: number[];
        tags?: string[];
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number[]} [arg.itemIds] - The Item Id of the product.
     * @param {number[]} [arg.storeIds] - The Store Id of products to fetch inventory.
     * @param {number[]} [arg.brandIds] - The Brand Id of products to fetch inventory.
     * @param {string[]} [arg.sellerIdentifiers] - Unique seller_identifier of
     *   the product.
     * @param {string} [arg.timestamp] - Timestamp in UTC format (2020-07-23T10:27:50Z)
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
     * @summary: Get the stock of a product
     * @description: Retrieve the available Inventory of the products. Use this API to get the Inventory status of products with the filters of timestamp, store_ids, brand_ids, item_id - Items - Pagination
     */
    getAppInventory({ itemIds, storeIds, brandIds, sellerIdentifiers, timestamp, pageSize, pageId, }?: {
        itemIds?: number[];
        storeIds?: number[];
        brandIds?: number[];
        sellerIdentifiers?: string[];
        timestamp?: string;
        pageSize?: number;
        pageId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {number[]} [arg.uid] - Helps to sort the location list on the
     *   basis of uid list.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 20.
     * @summary: Get list of locations
     * @description: This API allows to view all the locations asscoiated to a application.
     */
    getAppLocations({ storeType, uid, q, stage, pageNo, pageSize }?: {
        storeType?: string;
        uid?: number[];
        q?: string;
        stage?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Id of the company whose locations are to fetched
     * @param {string} arg.applicationId - Id of the application whose locations
     *   are to fetched
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {number[]} [arg.uid] - Helps to sort the location list on the
     *   basis of uid list.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 20.
     * @summary: Get list of locations
     * @description: This API allows to view all the locations asscoiated to a application.
     */
    getAppLocationsPaginator({ companyId, applicationId, storeType, uid, q, stage, pageSize, }?: {
        companyId: string;
        applicationId: string;
        storeType?: string;
        uid?: number[];
        q?: string;
        stage?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrandListing({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationBrandListingPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.brandUid - Brand id for which the custom_json is associated.
     * @param {ApplicationBrandJson} arg.body
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppBrand({ brandUid, body }?: {
        brandUid: string;
        body: ApplicationBrandJson;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.departmentId] - A `department_id` is a unique
     *   identifier for a particular department.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationCategoryListing({ departmentId, pageNo, pageSize, q }?: {
        departmentId?: number;
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.departmentId] - A `department_id` is a unique
     *   identifier for a particular department.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @summary: List all the brands for the application
     * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
     */
    getApplicationCategoryListingPaginator({ companyId, applicationId, departmentId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        departmentId?: number;
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.categoryUid - Category id for which the custom_json
     *   is associated.
     * @param {ApplicationCategoryJson} arg.body
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppCategory({ categoryUid, body }?: {
        categoryUid: string;
        body: ApplicationCategoryJson;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search department by name.
     * @summary: List all the departments for the application
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the application departments. If successful, returns the list of departments specified in `ApplicationDepartmentListingResponse`
     */
    getApplicationDepartmentListing({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search department by name.
     * @summary: List all the departments for the application
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the application departments. If successful, returns the list of departments specified in `ApplicationDepartmentListingResponse`
     */
    getApplicationDepartmentListingPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.departmentUid - Department id for which the
     *   custom_json is associated.
     * @param {ApplicationDepartmentJson} arg.body
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppDepartment({ departmentUid, body }?: {
        departmentUid: string;
        body: ApplicationDepartmentJson;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.storeUid - Store id for which the custom_json is associated.
     * @param {ApplicationStoreJson} arg.body
     * @summary: Update a single custom json.
     * @description: This API helps to update data associated to a item custom meta.
     */
    updateAppLocation({ storeUid, body }?: {
        storeUid: string;
        body: ApplicationStoreJson;
    }): Promise<any>;
}
declare class FileStorage {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {StartRequest} arg.body
     * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `appStartUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `appCompleteUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    appStartUpload({ namespace, body }?: {
        namespace: string;
        body: StartRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {StartResponse} arg.body
     * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `appStartUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `appCompleteUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    appCompleteUpload({ namespace, body }?: {
        namespace: string;
        body: StartResponse;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.sync] - Sync
     * @param {BulkRequest} arg.body
     * @summary: Copy Files
     * @description: Copy Files
     */
    appCopyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {number} [arg.pageNo] - Page no
     * @summary: Browse Files
     * @description: Browse Files
     */
    browse({ namespace, pageNo }?: {
        namespace: string;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Bucket name
     * @param {number} arg.companyId - Company_id
     * @param {number} arg.applicationId - Application_id
     * @summary: Browse Files
     * @description: Browse Files
     */
    browsePaginator({ namespace, companyId, applicationId }?: {
        namespace: string;
        companyId: number;
        applicationId: number;
    }): Paginator;
}
declare class Share {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {ShortLinkReq} arg.body
     * @summary: Create short link
     * @description: Create short link
     */
    createShortLink({ body }?: {
        body: ShortLinkReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} [arg.createdBy] - Short link creator
     * @param {string} [arg.active] - Short link active status
     * @param {string} [arg.q] - Search text for original and short url
     * @summary: Get short links
     * @description: Get short links
     */
    getShortLinks({ pageNo, pageSize, createdBy, active, q }?: {
        pageNo?: number;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company Id
     * @param {string} arg.applicationId - Application Id
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} [arg.createdBy] - Short link creator
     * @param {string} [arg.active] - Short link active status
     * @param {string} [arg.q] - Search text for original and short url
     * @summary: Get short links
     * @description: Get short links
     */
    getShortLinksPaginator({ companyId, applicationId, pageSize, createdBy, active, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.hash - Hash of short url
     * @summary: Get short link by hash
     * @description: Get short link by hash
     */
    getShortLinkByHash({ hash }?: {
        hash: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Short link document identifier
     * @param {ShortLinkReq} arg.body
     * @summary: Update short link by id
     * @description: Update short link by id
     */
    updateShortLinkById({ id, body }?: {
        id: string;
        body: ShortLinkReq;
    }): Promise<any>;
}
declare class Configuration {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - Current platform name
     * @summary: Get latest build config
     * @description: Get latest build config
     */
    getBuildConfig({ platformType }?: {
        platformType: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - Current platform name
     * @param {MobileAppConfigRequest} arg.body
     * @summary: Update build config for next build
     * @description: Update build config for next build
     */
    updateBuildConfig({ platformType, body }?: {
        platformType: string;
        body: MobileAppConfigRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - Current platform name
     * @summary: Get previous build versions
     * @description: Get previous build versions
     */
    getPreviousVersions({ platformType }?: {
        platformType: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get features of application
     * @description: Get features of application
     */
    getAppFeatures({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppFeatureRequest} arg.body
     * @summary: Update features of application
     * @description: Update features of application
     */
    updateAppFeatures({ body }?: {
        body: AppFeatureRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get basic application details
     * @description: Get basic application details like name
     */
    getAppBasicDetails({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationDetail} arg.body
     * @summary: Add or update application's basic details
     * @description: Add or update application's basic details
     */
    updateAppBasicDetails({ body }?: {
        body: ApplicationDetail;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application information
     * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
     */
    getAppContactInfo({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationInformation} arg.body
     * @summary: Get application information
     * @description: Save Application Current Information. This includes information about social links, address and contact information of an application.
     */
    updateAppContactInfo({ body }?: {
        body: ApplicationInformation;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get social tokens
     * @description: Get social tokens.
     */
    getAppApiTokens({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {TokenResponse} arg.body
     * @summary: Add social tokens
     * @description: Add social tokens.
     */
    updateAppApiTokens({ body }?: {
        body: TokenResponse;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - Uid of companies to be fetched
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled companies
     * @description: Application inventory enabled companies.
     */
    getAppCompanies({ uid, pageNo, pageSize }?: {
        uid?: number;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.uid] - Uid of companies to be fetched
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled companies
     * @description: Application inventory enabled companies.
     */
    getAppCompaniesPaginator({ companyId, applicationId, uid, pageSize }?: {
        companyId: string;
        applicationId: string;
        uid?: number;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled stores
     * @description: Application inventory enabled stores.
     */
    getAppStores({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - Current request items count
     * @summary: Application inventory enabled stores
     * @description: Application inventory enabled stores.
     */
    getAppStoresPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application configuration
     * @description: Get application configuration for various features and data
     */
    getInventoryConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationInventory} arg.body
     * @summary: Update application configuration
     * @description: Update application configuration for various features and data
     */
    updateInventoryConfig({ body }?: {
        body: ApplicationInventory;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppInventoryPartialUpdate} arg.body
     * @summary: Partially update application configuration
     * @description: Partially update application configuration for various features and data
     */
    partiallyUpdateInventoryConfig({ body }?: {
        body: AppInventoryPartialUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application enabled currency list
     * @description: Get application enabled currency list
     */
    getAppCurrencyConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppSupportedCurrency} arg.body
     * @summary: Add initial application supported currency
     * @description: Add initial application supported currency for various features and data. Default INR will be enabled.
     */
    updateAppCurrencyConfig({ body }?: {
        body: AppSupportedCurrency;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get currencies enabled in the application
     * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
     */
    getAppSupportedCurrency({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {FilterOrderingStoreRequest} arg.body
     * @summary: Get ordering store by filter
     * @description: Get ordering store by filter
     */
    getOrderingStoresByFilter({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: FilterOrderingStoreRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - Current request items count
     * @param {FilterOrderingStoreRequest} arg.body
     * @summary: Get ordering store by filter
     * @description: Get ordering store by filter
     */
    getOrderingStoresByFilterPaginator({ companyId, applicationId, pageSize, body, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        body: FilterOrderingStoreRequest;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {OrderingStoreConfig} arg.body
     * @summary: Add/Update ordering store config
     * @description: Add/Update ordering store config.
     */
    updateOrderingStoreConfig({ body }?: {
        body: OrderingStoreConfig;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
     */
    getStaffOrderingStores({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current application id
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
     */
    getStaffOrderingStoresPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get attached domain list
     * @description: Get attached domain list.
     */
    getDomains({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DomainAddRequest} arg.body
     * @summary: Add new domain to application
     * @description: Add new domain to application.
     */
    addDomain({ body }?: {
        body: DomainAddRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Domain _id
     * @summary: Remove attached domain
     * @description: Remove attached domain.
     */
    removeDomainById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateDomainTypeRequest} arg.body
     * @summary: Change domain type
     * @description: Change a domain to Primary or Shortlink domain
     */
    changeDomainType({ body }?: {
        body: UpdateDomainTypeRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DomainStatusRequest} arg.body
     * @summary: Get domain connected status.
     * @description: Get domain connected status. Check if domain is live and mapped to appropriate IP to fynd servers.
     */
    getDomainStatus({ body }?: {
        body: DomainStatusRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get application data from id
     * @description: Get application data from id
     */
    getApplicationById({}?: any): Promise<any>;
}
declare class Cart {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isArchived] -
     * @param {string} [arg.title] -
     * @param {boolean} [arg.isPublic] -
     * @param {boolean} [arg.isDisplay] -
     * @param {string} [arg.typeSlug] -
     * @param {string} [arg.code] -
     * @summary: Get with single coupon details or coupon list
     * @description: Get coupon list with pagination
     */
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        pageNo?: number;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {boolean} [arg.isArchived] -
     * @param {string} [arg.title] -
     * @param {boolean} [arg.isPublic] -
     * @param {boolean} [arg.isDisplay] -
     * @param {string} [arg.typeSlug] -
     * @param {string} [arg.code] -
     * @summary: Get with single coupon details or coupon list
     * @description: Get coupon list with pagination
     */
    getCouponsPaginator({ companyId, applicationId, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {CouponAdd} arg.body
     * @summary: Create new coupon
     * @description: Create new coupon
     */
    createCoupon({ body }?: {
        body: CouponAdd;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @summary: Get with single coupon details or coupon list
     * @description: Get single coupon details with `id` in path param
     */
    getCouponById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {CouponUpdate} arg.body
     * @summary: Update existing coupon configuration
     * @description: Update coupon with id sent in `id`
     */
    updateCoupon({ id, body }?: {
        id: string;
        body: CouponUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {CouponPartialUpdate} arg.body
     * @summary: Update coupon archive state and schedule
     * @description: Update archive/unarchive and change schedule for coupon
     */
    updateCouponPartially({ id, body }?: {
        id: string;
        body: CouponPartialUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] -
     * @param {string} [arg.status] -
     * @param {string} [arg.promoGroup] -
     * @param {string} [arg.promotionType] -
     * @param {string} [arg.fpPanel] -
     * @param {string} [arg.promotionId] -
     * @summary: Get promotion list
     * @description: Get promotion list with pagination
     */
    getPromotions({ pageNo, pageSize, q, status, promoGroup, promotionType, fpPanel, promotionId, }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
        status?: string;
        promoGroup?: string;
        promotionType?: string;
        fpPanel?: string;
        promotionId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] -
     * @param {string} [arg.status] -
     * @param {string} [arg.promoGroup] -
     * @param {string} [arg.promotionType] -
     * @param {string} [arg.fpPanel] -
     * @param {string} [arg.promotionId] -
     * @summary: Get promotion list
     * @description: Get promotion list with pagination
     */
    getPromotionsPaginator({ companyId, applicationId, pageSize, q, status, promoGroup, promotionType, fpPanel, promotionId, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
        status?: string;
        promoGroup?: string;
        promotionType?: string;
        fpPanel?: string;
        promotionId?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {PromotionAdd} arg.body
     * @summary: Create new promotion
     * @description: Create new promotion
     */
    createPromotion({ body }?: {
        body: PromotionAdd;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @summary: Get with single promotion details or promotion list
     * @description: Get single promotion details with `id` in path param
     */
    getPromotionById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {PromotionUpdate} arg.body
     * @summary: Update existing promotion configuration
     * @description: Update promotion with id sent in `id`
     */
    updatePromotion({ id, body }?: {
        id: string;
        body: PromotionUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id -
     * @param {PromotionPartialUpdate} arg.body
     * @summary: Update promotion publish state and schedule
     * @description: Update publish/unpublish and change schedule for promotion
     */
    updatePromotionPartially({ id, body }?: {
        id: string;
        body: PromotionPartialUpdate;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Fetch all promos that are set as active
     * @description: Use this API to get list of all the active promos/coupons.
     */
    getPromosCouponConfig({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenapiCartDetailsRequest} arg.body
     * @summary: Fetch Cart Details
     * @description: Get all the details of cart for a list of provided `cart_items`
     */
    fetchAndvalidateCartItems({ body }?: {
        body: OpenapiCartDetailsRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenApiCartServiceabilityRequest} arg.body
     * @summary: Check Pincode Serviceability
     * @description: Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address`
     */
    checkCartServiceability({ body }?: {
        body: OpenApiCartServiceabilityRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OpenApiPlatformCheckoutReq} arg.body
     * @summary: Create Fynd order with cart details
     * @description: Generate Fynd order for cart details send with provided `cart_items`
     */
    checkoutCart({ body }?: {
        body: OpenApiPlatformCheckoutReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {boolean} [arg.anonymousCart] -
     * @param {string} [arg.lastId] -
     * @param {string} [arg.sortOn] -
     * @summary: Get with abandoned cart list
     * @description: Get abandoned cart list with pagination
     */
    getAbandonedCart({ pageNo, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, }?: {
        pageNo?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
        anonymousCart?: boolean;
        lastId?: string;
        sortOn?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Current company id
     * @param {string} arg.applicationId - Current Application _id
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.fromDate] -
     * @param {string} [arg.toDate] -
     * @param {boolean} [arg.anonymousCart] -
     * @param {string} [arg.lastId] -
     * @param {string} [arg.sortOn] -
     * @summary: Get with abandoned cart list
     * @description: Get abandoned cart list with pagination
     */
    getAbandonedCartPaginator({ companyId, applicationId, pageSize, fromDate, toDate, anonymousCart, lastId, sortOn, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
        anonymousCart?: boolean;
        lastId?: string;
        sortOn?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] -
     * @param {boolean} [arg.i] -
     * @param {boolean} [arg.b] -
     * @summary: Fetch all items added to the cart
     * @description: Use this API to get details of all the items added to a cart.
     */
    getAbandonedCartDetails({ id, i, b }?: {
        id?: string;
        i?: boolean;
        b?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cartId - Current Cart _id
     * @param {boolean} [arg.b] -
     * @param {AddCartRequest} arg.body
     * @summary: Add items to abandoned cart
     * @description: Use this API to add items to the abandoned cart.
     */
    addItems({ cartId, body, b }?: {
        cartId: string;
        b?: boolean;
        body: AddCartRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cartId - Current Cart _id
     * @param {boolean} [arg.b] -
     * @param {UpdateCartRequest} arg.body
     * @summary: Update items in the abandoned cart
     * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     */
    updateCart({ cartId, body, b }?: {
        cartId: string;
        b?: boolean;
        body: UpdateCartRequest;
    }): Promise<any>;
}
declare class Rewards {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pageId - Pagination page id
     * @param {number} arg.pageSize - Pagination page size
     * @summary: List of giveaways of the current application.
     * @description: List of giveaways of the current application.
     */
    showGiveaways({ pageId, pageSize }?: {
        pageId: string;
        pageSize: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {Giveaway} arg.body
     * @summary: List of giveaways of the current application.
     * @description: Adds a new giveaway.
     */
    saveGiveAway({ body }?: {
        body: Giveaway;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Giveaway ID
     * @summary: Get giveaway by ID.
     * @description: Get giveaway by ID.
     */
    getGiveawayById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Giveaway ID
     * @param {Giveaway} arg.body
     * @summary: Updates the giveaway by it's ID.
     * @description: Updates the giveaway by it's ID.
     */
    updateGiveAway({ id, body }?: {
        id: string;
        body: Giveaway;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.audienceId - Audience id
     * @summary: Get the Giveaway audience status
     * @description: Get giveaway audience status
     */
    getGiveawayAudienceStatus({ audienceId }?: {
        audienceId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: List of offers of the current application.
     * @description: List of offers of the current application.
     */
    showOffers({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.name - The name given to the offer.
     * @param {string} arg.cookie - User's session cookie. This cookie is set in
     *   browser cookie when logged-in to fynd's authentication system i.e.
     *   `Grimlock` or by using grimlock-backend SDK for backend implementation.
     * @summary: Get offer by name
     * @description: Use this API to get the offer details and configuration by entering the name of the offer.
     */
    getOfferByName({ name, cookie }?: {
        name: string;
        cookie: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.name - The name given to the offer.
     * @param {Offer} arg.body
     * @summary: Update offer by name
     * @description: Use this API to update the offer details
     */
    updateOfferByName({ name, body }?: {
        name: string;
        body: Offer;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {AppUser} arg.body
     * @summary: Update user status
     * @description: Use this API to update the user status active/archive
     */
    updateUserStatus({ userId, body }?: {
        userId: string;
        body: AppUser;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @summary: Get user reward details
     * @description: Use this API to get the user reward details
     */
    user({ userId }?: {
        userId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {string} [arg.pageId] - PageID is the ID of the requested page.
     *   For first request it should be kept empty.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get all transactions of reward points
     * @description: Use this API to get a list of points transactions.
     */
    getUserPointsHistory({ userId, pageId, pageSize }?: {
        userId: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get all transactions of reward points
     * @description: Use this API to get a list of points transactions.
     */
    getUserPointsHistoryPaginator({ userId, companyId, applicationId, pageSize, }?: {
        userId: string;
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
}
declare class Analytics {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @summary: Get statistics groups
     * @description: Get statistics groups
     */
    getStatiscticsGroups({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.groupName - Group name
     * @summary: Get statistics group components
     * @description: Get statistics group components
     */
    getStatiscticsGroupComponents({ groupName }?: {
        groupName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.componentName - Component name
     * @summary: Get component statistics csv
     * @description: Get component statistics csv
     */
    getComponentStatsCSV({ componentName }?: {
        componentName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.componentName - Component name
     * @summary: Get component statistics pdf
     * @description: Get component statistics pdf
     */
    getComponentStatsPDF({ componentName }?: {
        componentName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.componentName - Component name
     * @summary: Get component statistics
     * @description: Get component statistics
     */
    getComponentStats({ componentName }?: {
        componentName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.fromDate - From date
     * @param {string} arg.toDate - To date
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @summary: Get abandon carts list
     * @description: Get abandon carts list
     */
    getAbandonCartList({ fromDate, toDate, pageNo, pageSize }?: {
        fromDate: string;
        toDate: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Company Id
     * @param {string} arg.applicationId - Application Id
     * @param {string} arg.fromDate - From date
     * @param {string} arg.toDate - To date
     * @param {number} [arg.pageSize] - Current page size
     * @summary: Get abandon carts list
     * @description: Get abandon carts list
     */
    getAbandonCartListPaginator({ companyId, applicationId, fromDate, toDate, pageSize, }?: {
        companyId: string;
        applicationId: string;
        fromDate: string;
        toDate: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.fromDate - From date
     * @param {string} arg.toDate - To date
     * @summary: Get abandon carts csv
     * @description: Get abandon carts csv
     */
    getAbandonCartsCSV({ fromDate, toDate }?: {
        fromDate: string;
        toDate: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.cartId - Cart Id
     * @summary: Get abandon carts details
     * @description: Get abandon cart details
     */
    getAbandonCartDetail({ cartId }?: {
        cartId: string;
    }): Promise<any>;
}
declare class Partner {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id
     * @param {AddProxyReq} arg.body
     * @summary: Add proxy path for external url
     * @description: Add proxy path for external url
     */
    addProxyPath({ extensionId, body }?: {
        extensionId: string;
        body: AddProxyReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id
     * @param {string} arg.attachedPath - Attachaed path slug
     * @summary: Remove proxy path for external url
     * @description: Remove proxy path for external url
     */
    removeProxyPath({ extensionId, attachedPath }?: {
        extensionId: string;
        attachedPath: string;
    }): Promise<any>;
}
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
    display_fields: string[];
    excluded_fields: string[];
    created: boolean;
};
type ErrorCodeDescription = {
    success: boolean;
    code: string;
    description: string;
};
type PaymentGatewayConfig = {
    config_type: string;
    merchant_salt: string;
    secret: string;
    key: string;
    is_active?: boolean;
};
type PaymentGatewayConfigRequest = {
    is_active?: boolean;
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
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
    package_name?: string;
    logos?: PaymentModeLogo;
    display_name?: string;
};
type PaymentModeList = {
    nickname?: string;
    cod_limit_per_order?: number;
    compliant_with_tokenisation_guidelines?: boolean;
    cod_limit?: number;
    code?: string;
    name?: string;
    card_number?: string;
    display_name?: string;
    card_reference?: string;
    card_issuer?: string;
    retry_count?: number;
    card_fingerprint?: string;
    remaining_limit?: number;
    card_brand?: string;
    expired?: boolean;
    fynd_vpa?: string;
    card_name?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    timeout?: number;
    card_brand_image?: string;
    display_priority?: number;
    aggregator_name: string;
    exp_month?: number;
    intent_app_error_list?: string[];
    card_id?: string;
    exp_year?: number;
    merchant_code?: string;
    logo_url?: PaymentModeLogo;
    card_token?: string;
    card_isin?: string;
    intent_app?: IntentApp[];
    card_type?: string;
    intent_flow?: boolean;
};
type RootPaymentMode = {
    anonymous_enable?: boolean;
    name: string;
    save_card?: boolean;
    is_pay_by_card_pl?: boolean;
    display_priority: number;
    display_name: string;
    list?: PaymentModeList[];
    aggregator_name?: string;
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
    transfer_type: string;
    more_attributes: any;
    is_active: boolean;
    is_default: boolean;
    unique_transfer_no: any;
    customers: any;
    payouts_aggregators: any[];
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    account_holder?: string;
    state?: string;
    bank_name?: string;
    city?: string;
    country?: string;
    pincode?: number;
    ifsc_code: string;
    branch_name?: string;
    account_no?: string;
    account_type: string;
};
type PayoutRequest = {
    transfer_type: string;
    unique_external_id: string;
    aggregator: string;
    users: any;
    is_active: boolean;
    bank_details: PayoutBankDetails;
};
type PayoutResponse = {
    success: boolean;
    bank_details: any;
    transfer_type: string;
    payouts: any;
    aggregator: string;
    users: any;
    is_active: boolean;
    payment_status: string;
    unique_transfer_no: string;
    created: boolean;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_default: boolean;
    is_active: boolean;
};
type UpdatePayoutRequest = {
    is_active: boolean;
    is_default: boolean;
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
    success: boolean;
    config: any;
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
    data?: any;
    message: string;
    is_verified_flag?: boolean;
};
type NotFoundResourceError = {
    success: boolean;
    code: string;
    description: string;
};
type BankDetailsForOTP = {
    account_holder: string;
    bank_name: string;
    ifsc_code: string;
    branch_name: string;
    account_no: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    success?: boolean;
    bank_name: string;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    created_on: string;
    subtitle: string;
    ifsc_code: string;
    display_name: string;
    beneficiary_id: string;
    delights_user_name?: string;
    bank_name: string;
    branch_name?: string;
    transfer_mode: string;
    is_active: boolean;
    email: string;
    account_holder: string;
    modified_on: string;
    title: string;
    id: number;
    mobile?: string;
    account_no: string;
    address: string;
    comment?: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    current_status?: string;
    order_id?: string;
    extra_meta?: any;
    payment_gateway?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    meta?: MultiTenderPaymentMeta;
    amount: number;
    mode: string;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    success: boolean;
    message: string;
    order_id: string;
};
type PlatformPaymentOptions = {
    source: string;
    mode_of_payment: string;
    callback_url?: any;
    payment_selection_lock?: any;
    cod_amount_limit?: number;
    anonymous_cod?: boolean;
    cod_charges?: number;
    methods: any;
    enabled: boolean;
};
type PlatfromPaymentConfig = {
    success: boolean;
    data: PlatformPaymentOptions;
    message: string;
};
type UpdatePlatformPaymentConfig = {
    payment_selection_lock?: any;
    cod_amount_limit?: number;
    anonymous_cod?: boolean;
    cod_charges?: number;
    methods: any;
};
type CODdata = {
    remaining_limit: number;
    user_id: string;
    limit: number;
    usages: number;
    is_active: boolean;
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
type FilterInfoOption = {
    name?: string;
    text: string;
    value?: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    type: string;
    text: string;
    value: string;
};
type Prices = {
    discount?: number;
    cashback?: number;
    fynd_credits?: number;
    cod_charges?: number;
    price_effective?: number;
    cashback_applied?: number;
    tax_collected_at_source?: number;
    price_marked?: number;
    refund_amount?: number;
    promotion_effective_discount?: number;
    refund_credit?: number;
    amount_paid_roundoff?: number;
    coupon_value?: number;
    amount_paid?: number;
    delivery_charge?: number;
    value_of_good?: number;
};
type UserDataInfo = {
    uid?: number;
    last_name?: string;
    name?: string;
    email?: string;
    mobile?: string;
    first_name?: string;
    avis_user_id?: string;
    gender?: string;
    is_anonymous_user?: boolean;
};
type PlatformItem = {
    size?: string;
    image?: string[];
    code?: string;
    l1_category?: string[];
    department_id?: number;
    name?: string;
    can_return?: boolean;
    can_cancel?: boolean;
    color?: string;
    l3_category?: number;
    images?: string[];
    l3_category_name?: string;
    id?: number;
};
type GSTDetailsData = {
    gst_fee: number;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    gstin_code: string;
    value_of_good: number;
};
type BagUnit = {
    item_quantity: number;
    item?: PlatformItem;
    prices?: Prices;
    bag_id: number;
    can_return?: boolean;
    can_cancel?: boolean;
    shipment_id: string;
    status: any;
    total_shipment_bags: number;
    gst?: GSTDetailsData;
    ordering_channel: string;
};
type ShipmentStatus = {
    ops_status: string;
    title: string;
    hex_code: string;
    status: string;
    actual_status: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItem = {
    channel?: any;
    application?: any;
    prices?: Prices;
    payment_methods?: any;
    user?: UserDataInfo;
    bags?: BagUnit[];
    total_bags_count: number;
    shipment_status?: ShipmentStatus;
    sla?: any;
    created_at: string;
    total_shipments_in_order: number;
    fulfilling_store?: ShipmentItemFulFillingStore;
    shipment_created_at: number;
    fulfilling_centre: string;
    payment_mode_info?: PaymentModeInfo;
    id: string;
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    applied_filters?: any;
    items?: ShipmentItem[];
    page?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type ShipmentStatusData = {
    created_at?: string;
    shipment_id?: string;
    status?: string;
    bag_list?: number[];
    id?: number;
};
type TrackingList = {
    time?: string;
    is_passed?: boolean;
    status: string;
    text: string;
    is_current?: boolean;
};
type OrderDetailsData = {
    order_value?: string;
    affiliate_id?: string;
    ordering_channel_logo?: any;
    cod_charges?: string;
    fynd_order_id: string;
    order_date?: string;
    tax_details?: any;
    ordering_channel?: string;
    source?: string;
};
type DPDetailsData = {
    pincode?: string;
    awb_no?: string;
    name?: string;
    id?: string;
    gst_tag?: string;
    track_url?: string;
    country?: string;
    eway_bill_id?: string;
};
type UserDetailsData = {
    pincode: string;
    city: string;
    country: string;
    name: string;
    email: string;
    state: string;
    phone: string;
    address: string;
};
type BagStateMapper = {
    notify_customer?: boolean;
    app_state_name?: string;
    bs_id: number;
    is_active?: boolean;
    name: string;
    app_facing?: boolean;
    display_name: string;
    app_display_name?: string;
    state_type: string;
    journey_type: string;
};
type BagStatusHistory = {
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    reasons?: any[];
    bag_id?: number;
    updated_at?: string;
    delivery_partner_id?: number;
    kafka_sync?: boolean;
    created_at?: string;
    shipment_id?: string;
    status: string;
    delivery_awb_number?: string;
    bsh_id?: number;
    app_display_name?: boolean;
    display_name?: boolean;
    store_id?: number;
    state_type?: string;
    forward?: boolean;
};
type DiscountRules = {
    type?: string;
    value?: number;
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
    mrp_promotion?: boolean;
    promotion_name?: string;
    article_quantity?: number;
    promo_id?: string;
    discount_rules?: DiscountRules[];
    buy_rules?: BuyRules[];
    amount?: number;
};
type BagGST = {
    hsn_code?: string;
    gst_tax_percentage?: number;
    gst_fee?: number;
    brand_calculated_amount?: number;
    is_default_hsn_code?: boolean;
    gst_tag?: string;
    gstin_code?: string;
    value_of_good?: number;
};
type BagConfigs = {
    is_active: boolean;
    is_customer_return_allowed: boolean;
    allow_force_return: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    can_be_cancelled: boolean;
};
type PlatformDeliveryAddress = {
    pincode?: string;
    address1?: string;
    longitude?: number;
    city?: string;
    version?: string;
    address_type?: string;
    landmark?: string;
    updated_at?: string;
    email?: string;
    created_at?: string;
    contact_person?: string;
    address_category?: string;
    area?: string;
    state?: string;
    address2?: string;
    latitude?: number;
    phone?: string;
    country?: string;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type OrderBrandName = {
    modified_on?: number;
    brand_name: string;
    company?: string;
    created_on: number;
    logo: string;
    id: number;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    transfer_price: number;
    pm_price_split: any;
    gst_tax_percentage: number;
    added_to_fynd_cash: boolean;
    item_name: string;
    coupon_value: number;
    size: string;
    coupon_effective_discount: number;
    price_effective: number;
    tax_collected_at_source?: number;
    price_marked: number;
    brand_calculated_amount: number;
    refund_credit: number;
    amount_paid_roundoff?: number;
    total_units: number;
    discount: number;
    cashback: number;
    fynd_credits: number;
    hsn_code: string;
    identifiers: Identifier;
    amount_paid: number;
    cod_charges: number;
    cashback_applied: number;
    gst_fee: string;
    promotion_effective_discount: number;
    gst_tag: string;
    delivery_charge: number;
    value_of_good: number;
};
type CurrentStatus = {
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    bag_id?: number;
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    updated_at?: number;
    created_at?: string;
    shipment_id?: string;
    delivery_awb_number?: number;
    status?: string;
    store_id?: number;
    state_type?: string;
    current_status_id: number;
};
type OrderBags = {
    applied_promos?: AppliedPromos[];
    bag_id: number;
    parent_promo_bags?: any;
    gst_details?: BagGST;
    identifier?: string;
    line_number?: number;
    bag_configs?: BagConfigs;
    delivery_address?: PlatformDeliveryAddress;
    can_return?: boolean;
    article?: OrderBagArticle;
    item?: PlatformItem;
    entity_type?: string;
    brand?: OrderBrandName;
    seller_identifier?: string;
    can_cancel?: boolean;
    quantity?: number;
    display_name?: string;
    financial_breakup?: FinancialBreakup[];
    prices?: Prices;
    current_status?: CurrentStatus;
};
type FulfillingStore = {
    pincode: string;
    store_name: string;
    contact_person: string;
    city: string;
    country: string;
    id: string;
    state: string;
    phone: string;
    meta: any;
    address: string;
    fulfillment_channel: string;
    code: string;
};
type ShipmentPayments = {
    logo?: string;
    mode: string;
    source?: string;
};
type ShipmentInfoResponse = {
    is_not_fynd_source: boolean;
    delivery_status: any[];
    is_fynd_store?: string;
    user_agent?: string;
    user_id: string;
    can_break: string;
    is_invoiced: boolean;
    items: any[];
    status?: ShipmentStatusData;
    gst_details?: GSTDetailsData;
    coupon?: any;
    delivery_slot?: any;
    replacement_details?: string;
    kirana_store_id?: string;
    forward_shipment_status?: any[];
    escalation?: any;
    forward_order_status?: any[];
    vertical?: string;
    child_nodes?: string[];
    tracking_url: string;
    can_return?: boolean;
    shipment_images?: string[];
    total_bags?: number;
    shipment_id: string;
    operational_status?: string;
    status_progress: number;
    platform_logo: boolean;
    bank_data?: any;
    order_status: any;
    ordering_store: any;
    secured_delivery_flag?: string;
    tracking_list?: TrackingList[];
    due_date?: string;
    order?: OrderDetailsData;
    lock_status: string;
    order_created_time?: string;
    beneficiary_details?: boolean;
    dp_details?: DPDetailsData;
    user_info?: any;
    shipment_quantity?: number;
    custom_meta?: any[];
    enable_dp_tracking?: string;
    can_cancel?: boolean;
    billing_details?: UserDetailsData;
    credit_note_id: string;
    enable_tracking?: boolean;
    invoice: any;
    affiliate_shipment_id: string;
    refund_text?: string;
    mid?: string;
    go_green?: boolean;
    bag_status_history?: BagStatusHistory[];
    pay_button?: string;
    journey_type?: string;
    refund_details?: any;
    prices?: Prices;
    is_packaging_order: boolean;
    bags?: OrderBags[];
    order_type: string;
    company: any;
    payment_mode?: string;
    is_pdsr?: string;
    delivery_details?: UserDetailsData;
    forward_tracking_list?: any[];
    shipment_status?: string;
    fyndstore_emp: any;
    packaging_type?: string;
    fulfilling_store?: FulfillingStore;
    picked_date?: string;
    payments?: ShipmentPayments;
    is_fynd_coupon: boolean;
    email_id: string;
    priority_text?: string;
    current_shipment_status: any;
    total_items?: number;
};
type PlatformShipment = {
    user_agent?: string;
    status?: ShipmentStatusData;
    gst_details?: GSTDetailsData;
    coupon?: any;
    delivery_slot?: any;
    vertical?: string;
    shipment_images?: string[];
    total_bags?: number;
    shipment_id: string;
    operational_status?: string;
    platform_logo?: string;
    tracking_list?: TrackingList[];
    order?: OrderDetailsData;
    dp_details?: DPDetailsData;
    shipment_quantity?: number;
    custom_meta?: any[];
    enable_dp_tracking?: string;
    billing_details?: UserDetailsData;
    bag_status_history?: BagStatusHistory[];
    journey_type?: string;
    prices?: Prices;
    bags?: OrderBags[];
    payment_mode?: string;
    delivery_details?: UserDetailsData;
    shipment_status?: string;
    packaging_type?: string;
    fulfilling_store?: FulfillingStore;
    picked_date?: string;
    payments?: ShipmentPayments;
    priority_text?: string;
    total_items?: number;
};
type OrderMeta = {
    order_child_entities?: string[];
    order_type?: string;
    mongo_cart_id?: number;
    currency_symbol?: string;
    extra_meta?: any;
    employee_id?: number;
    payment_type?: string;
    order_tags?: any[];
    cart_id?: number;
    comment?: string;
    files?: any[];
    staff?: any;
    order_platform?: string;
    ordering_store?: number;
    customer_note?: string;
};
type OrderDict = {
    payment_methods?: any;
    fynd_order_id: string;
    order_date: string;
    meta?: OrderMeta;
    shipment_count: number;
};
type ShipmentDetailsResponse = {
    success: boolean;
    custom_meta?: any[];
    shipments?: PlatformShipment[];
    order?: OrderDict;
};
type SubLane = {
    index?: number;
    text?: string;
    total_items?: number;
    actions?: any[];
    value?: string;
};
type SuperLane = {
    options?: SubLane[];
    text: string;
    value: string;
    total_items?: number;
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
    order_value?: number;
    channel?: PlatformChannel;
    total_order_value?: number;
    order_id?: string;
    breakup_values?: PlatformBreakupValues[];
    payment_mode?: string;
    user_info?: UserDataInfo;
    meta?: any;
    shipments?: PlatformShipment[];
    order_created_time?: string;
};
type OrderListingResponse = {
    success?: boolean;
    lane?: string;
    total_count?: number;
    items?: PlatformOrderItems[];
    message?: string;
    page?: Page;
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    key: string;
    options?: Options[];
    text: string;
    value: number;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    awb?: string;
    account_name?: string;
    updated_at?: string;
    raw_status?: string;
    last_location_recieved_at?: string;
    status?: string;
    updated_time?: string;
    meta?: any;
    reason?: string;
    shipment_type?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    filters?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    processed?: FiltersInfo[];
    returned?: FiltersInfo[];
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
    report_type?: string;
    report_created_at?: string;
    s3_key?: string;
    status?: string;
    report_name?: string;
    display_name?: string;
    report_id?: string;
    report_requested_at?: string;
    request_details?: any;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    item_id?: string;
    article_id?: string;
    jio_code?: string;
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
    success?: boolean;
    data?: any[];
    identifier?: string;
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    label?: any;
    store_name?: string;
    invoice_status?: string;
    data?: any;
    store_code?: string;
    do_invoice_label_generated: boolean;
    batch_id: string;
    invoice?: any;
    store_id?: string;
    company_id?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type URL = {
    url?: string;
};
type FileResponse = {
    size?: number;
    file_name?: string;
    content_type?: string;
    namespace?: string;
    upload?: FileUploadResponse;
    cdn?: URL;
    file_path?: string;
    tags?: string[];
    operation?: string;
    method?: string;
};
type bulkListingData = {
    store_code?: string;
    user_id?: string;
    status?: string;
    successful_shipments?: any[];
    store_id?: number;
    uploaded_on?: string;
    id?: string;
    failed_shipments?: any[];
    successful?: number;
    store_name?: string;
    batch_id?: string;
    user_name?: string;
    total?: number;
    failed?: number;
    processing_shipments?: string[];
    file_name?: string;
    excel_url?: string;
    company_id?: number;
    processing?: number;
};
type BulkListingPage = {
    size?: number;
    has_previous?: boolean;
    current?: number;
    type?: string;
    total?: number;
    has_next?: boolean;
};
type BulkListingResponse = {
    success?: boolean;
    data?: bulkListingData[];
    page?: BulkListingPage;
    error?: string;
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
    success?: boolean;
    reasons?: Reason[];
};
type BulkActionPayload = {
    url: string;
};
type BulkActionResponse = {
    message?: string;
    status?: boolean;
};
type BulkActionDetailsDataField = {
    total_shipments_count?: number;
    processing_shipments_count?: number;
    batch_id?: string;
    failed_shipments_count?: number;
    successful_shipment_ids?: string[];
    successful_shipments_count?: number;
    company_id?: string;
};
type BulkActionDetailsResponse = {
    success?: string;
    data?: BulkActionDetailsDataField[];
    uploaded_by?: string;
    user_id?: string;
    failed_records?: string[];
    status?: boolean;
    error?: string[];
    message?: string;
    uploaded_on?: string;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
};
type BagGSTDetails = {
    sgst_gst_fee: string;
    sgst_tax_percentage: number;
    igst_gst_fee: string;
    hsn_code: string;
    gst_tax_percentage: number;
    gst_fee: number;
    igst_tax_percentage: number;
    tax_collected_at_source: number;
    cgst_gst_fee: string;
    brand_calculated_amount: number;
    cgst_tax_percentage: number;
    is_default_hsn_code?: boolean;
    hsn_code_id: string;
    gst_tag: string;
    gstin_code?: string;
    value_of_good: number;
};
type EInvoicePortalDetails = {
    username?: string;
    user?: string;
    password?: string;
};
type Document = {
    ds_type: string;
    verified: boolean;
    legal_name: string;
    url?: string;
    value: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEinvoice = {
    enabled: boolean;
    user?: string;
    username?: string;
    password?: string;
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
    einvoice_portal_details?: EInvoicePortalDetails;
    gst_number?: string;
    timing?: any[];
    documents?: StoreDocuments;
    notification_emails?: string[];
    product_return_config?: any;
    display_name: string;
    ewaybill_portal_details?: any;
    additional_contact_details?: any;
    gst_credentials: StoreGstCredentials;
};
type StoreAddress = {
    address1: string;
    longitude: number;
    address_category: string;
    address_type: string;
    contact_person: string;
    state: string;
    phone: string;
    country: string;
    city: string;
    created_at: string;
    area?: string;
    pincode: number;
    country_code: string;
    version?: string;
    landmark?: string;
    address2?: string;
    updated_at: string;
    email?: string;
    latitude: number;
};
type Store = {
    address1: string;
    contact_person: string;
    longitude: number;
    parent_store_id?: number;
    state: string;
    phone: number;
    country: string;
    is_archived?: boolean;
    is_enabled_for_recon?: boolean;
    code?: string;
    is_active?: boolean;
    city: string;
    order_integration_id?: string;
    brand_store_tags?: string[];
    name: string;
    created_at: string;
    brand_id?: any;
    login_username: string;
    meta: StoreMeta;
    pincode: string;
    mall_name?: string;
    packaging_material_count?: number;
    store_email: string;
    alohomora_user_id?: number;
    store_active_from?: string;
    address2?: string;
    store_address_json?: StoreAddress;
    s_id: string;
    updated_at?: string;
    location_type: string;
    latitude: number;
    mall_area?: string;
    company_id: number;
    fulfillment_channel: string;
    vat_no?: string;
};
type Dimensions = {
    width?: number;
    unit?: string;
    length?: number;
    is_default?: boolean;
    height?: number;
};
type ReturnConfig = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
type Article = {
    uid: string;
    size: string;
    esp_modified?: any;
    raw_meta?: any;
    is_set?: boolean;
    dimensions?: Dimensions;
    seller_identifier: string;
    a_set?: any;
    _id: string;
    identifiers: Identifier;
    return_config?: ReturnConfig;
    child_details?: any;
    weight?: Weight;
    code?: string;
};
type B2BPODetails = {
    item_base_price?: number;
    docker_number?: string;
    po_tax_amount?: number;
    po_line_amount?: number;
    partial_can_ret?: boolean;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Attributes = {
    primary_material?: string;
    brand_name?: string;
    name?: string;
    essential?: string;
    primary_color?: string;
    gender?: string[];
    marketer_address?: string;
    marketer_name?: string;
    primary_color_hex?: string;
};
type Item = {
    l1_category_id?: number;
    l1_category?: string[];
    l2_category_id?: number;
    attributes: Attributes;
    branch_url?: string;
    code?: string;
    size: string;
    name: string;
    can_return?: boolean;
    l2_category?: string[];
    brand_id: number;
    gender?: string;
    meta?: any;
    l3_category_name?: string;
    webstore_product_url?: string;
    brand: string;
    department_id?: number;
    can_cancel?: boolean;
    l3_category?: number;
    item_id: number;
    slug_key: string;
    last_updated_at?: string;
    color?: string;
    image: string[];
};
type AffiliateMeta = {
    channel_shipment_id?: string;
    order_item_id?: string;
    channel_order_id?: string;
    loyalty_discount?: number;
    box_type?: string;
    coupon_code?: string;
    is_priority?: boolean;
    quantity?: number;
    employee_discount?: number;
    due_date?: string;
    size_level_total_qty?: number;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    employee_discount?: number;
};
type Brand = {
    credit_note_allowed?: boolean;
    modified_on?: number;
    brand_name: string;
    company: string;
    created_on?: number;
    script_last_ran?: string;
    logo?: string;
    brand_id: number;
    start_date?: string;
    pickup_location?: string;
    invoice_prefix?: string;
    is_virtual_invoice?: boolean;
    credit_note_expiry_days?: number;
};
type PDFLinks = {
    b2b?: string;
    label?: string;
    label_type: string;
    po_invoice?: string;
    label_a6?: string;
    invoice?: string;
    label_pos?: string;
    credit_note_url?: string;
    invoice_a6?: string;
    invoice_a4?: string;
    invoice_type: string;
    invoice_pos?: string;
    label_a4?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type LockData = {
    locked?: boolean;
    mto?: boolean;
    lock_message?: string;
};
type EInvoice = {
    error_message?: string;
    signed_qr_code?: string;
    acknowledge_no?: number;
    signed_invoice?: string;
    acknowledge_date?: string;
    error_code?: string;
    irn?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type BuyerDetails = {
    pincode: number;
    city: string;
    name: string;
    ajio_site_id?: string;
    state: string;
    address: string;
    gstin: string;
};
type ShipmentMeta = {
    external?: any;
    bag_weight?: any;
    forward_affiliate_order_id?: string;
    assign_dp_from_sb?: boolean;
    return_affiliate_order_id?: string;
    return_details?: any;
    po_number?: string;
    auto_trigger_dp_assignment_acf: boolean;
    packaging_name?: string;
    ewaybill_info?: any;
    debug_info?: DebugInfo;
    return_store_node?: number;
    dp_options?: any;
    awb_number?: string;
    formatted?: Formatted;
    dp_id?: string;
    timestamp?: ShipmentTimeStamp;
    shipment_volumetric_weight?: number;
    store_invoice_updated_date?: string;
    same_store_available: boolean;
    weight: number;
    return_awb_number?: string;
    shipment_weight?: number;
    order_type?: string;
    marketplace_store_id?: string;
    box_type?: string;
    lock_data?: LockData;
    fulfilment_priority_text?: string;
    einvoice_info?: EinvoiceInfo;
    b2c_buyer_details?: any;
    return_affiliate_shipment_id?: string;
    dp_name?: string;
    forward_affiliate_shipment_id?: string;
    b2b_buyer_details?: BuyerDetails;
    due_date?: string;
    dp_sort_key?: string;
};
type AffiliateDetails = {
    affiliate_id?: string;
    pdf_links?: PDFLinks;
    affiliate_store_id: string;
    shipment_meta: ShipmentMeta;
    ad_id?: string;
    affiliate_bag_id: string;
    affiliate_shipment_id: string;
    affiliate_meta: AffiliateMeta;
    company_affiliate_tag?: string;
    affiliate_order_id: string;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type ArticleDetails = {
    status?: any;
};
type BagDetailsPlatformResponse = {
    restore_promos?: any;
    applied_promos?: any[];
    bag_status: BagStatusHistory[];
    parent_promo_bags?: any;
    status: BagReturnableCancelableStatus;
    tags?: string[];
    gst_details: BagGSTDetails;
    no_of_bags_order?: number;
    identifier?: string;
    line_number?: number;
    order_integration_id?: string;
    operational_status?: string;
    shipment_id?: string;
    qc_required?: any;
    ordering_store?: Store;
    article: Article;
    meta?: BagMeta;
    b_id: number;
    item: Item;
    entity_type?: string;
    affiliate_bag_details: AffiliateBagDetails;
    brand: Brand;
    seller_identifier?: string;
    quantity?: number;
    affiliate_details?: AffiliateDetails;
    display_name?: string;
    financial_breakup: FinancialBreakup[];
    journey_type: string;
    original_bag_list?: number[];
    reasons?: any[];
    prices: Prices;
    b_type?: string;
    dates?: Dates;
    current_operational_status: BagStatusHistory;
    bag_update_time?: number;
    article_details?: ArticleDetails;
    current_status: BagStatusHistory;
    bag_status_history?: BagStatusHistory;
    restore_coupon?: boolean;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    size: number;
    current: number;
    page_type: string;
    has_next: boolean;
    item_total: number;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
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
    affiliate_bag_id?: string;
    bag_id?: number;
    item_id?: string;
    reason_ids?: number[];
    fynd_order_id?: string;
    store_id: number;
    affiliate_id?: string;
    set_id?: string;
    mongo_article_id?: string;
    affiliate_order_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    id?: string;
    affiliate_bag_id?: string;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    reason_text: string;
    affiliate_order_id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    action_type: string;
    action: string;
    entity_type: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    affiliate_order_id?: string;
    bag_id?: number;
    is_locked?: boolean;
    affiliate_bag_id?: string;
};
type CheckResponse = {
    original_filter?: OriginalFilter;
    is_shipment_locked?: boolean;
    affiliate_shipment_id?: string;
    is_bag_locked?: boolean;
    affiliate_id?: string;
    lock_status?: boolean;
    shipment_id?: string;
    bags?: Bags[];
    status?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    message?: string;
    success?: boolean;
};
type AnnouncementResponse = {
    id: number;
    platform_name?: string;
    description?: string;
    logo_url?: string;
    title?: string;
    platform_id?: string;
    company_id?: number;
    to_datetime?: string;
    from_datetime?: string;
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
type Products = {
    quantity?: number;
    line_number?: number;
    identifier?: string;
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
type ShipmentsRequest = {
    products?: Products[];
    reasons?: ReasonsData;
    identifier: string;
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    exception?: string;
    meta?: any;
    stack_trace?: string;
    identifier?: string;
    code?: string;
    message?: string;
    status?: number;
    final_state?: any;
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
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
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
type AffiliateInventoryConfig = {
    payment?: AffiliateInventoryPaymentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    id: string;
    description?: string;
    meta?: AffiliateAppConfigMeta[];
    secret: string;
    token: string;
    owner: string;
    created_at: string;
    updated_at: string;
    name: string;
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
    affiliate: Affiliate;
    create_user?: boolean;
    store_lookup?: string;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
};
type OrderUser = {
    address2?: string;
    email: string;
    state: string;
    first_name: string;
    city: string;
    last_name: string;
    country: string;
    pincode: string;
    phone: number;
    mobile: number;
    address1?: string;
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
    _id: string;
    weight: any;
    brand_id: number;
    attributes: any;
    quantity: number;
    category: any;
    dimension: any;
};
type ShipmentDetails = {
    fulfillment_id: number;
    meta?: any;
    box_type?: string;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    shipments: number;
    dp_id?: number;
};
type LocationDetails = {
    fulfillment_id: number;
    fulfillment_type: string;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    source: string;
    action: string;
    identifier: string;
    journey: string;
    shipment: ShipmentDetails[];
    payment_mode: string;
    location_details?: LocationDetails;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    price_marked: number;
    transfer_price: number;
    discount: number;
    quantity: number;
    price_effective: number;
    modified_on: string;
    hsn_code_id: string;
    _id: string;
    seller_identifier: string;
    amount_paid: number;
    affiliate_store_id: string;
    pdf_links?: MarketPlacePdf;
    delivery_charge: number;
    unit_price: number;
    item_size: string;
    identifier: any;
    item_id: number;
    fynd_store_id: string;
    company_id: number;
    avl_qty: number;
    affiliate_meta: any;
    sku: string;
    store_id: number;
};
type OrderInfo = {
    payment?: any;
    discount: number;
    cod_charges: number;
    items: any;
    billing_address: OrderUser;
    order_priority?: OrderPriority;
    delivery_charges: number;
    order_value: number;
    user: UserData;
    shipment?: ShipmentData;
    payment_mode: string;
    shipping_address: OrderUser;
    affiliate_order_id?: string;
    bags: AffiliateBag[];
    coupon?: string;
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
    l1_detail?: string;
    type: string;
    l2_detail?: string;
    bag_id?: number;
    ticket_id?: string;
    l3_detail?: string;
    user: string;
    message: string;
    ticket_url?: string;
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
    amount_paid: number;
    order_id: string;
    phone_number: number;
    brand_name: string;
    customer_name: string;
    message: string;
    payment_mode: string;
    shipment_id: number;
    country_code: string;
};
type SendSmsPayload = {
    slug: string;
    data?: SmsDataPayload;
    bag_id: number;
};
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    id: number;
    bag_list?: number[];
    meta: Meta;
    remarks?: string;
    shipment_id?: string;
    status?: string;
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
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    order_type: string;
    qc_required: string;
    dp_id: number;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type PaymentMethod = {
    mode: string;
    meta?: any;
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
type BillingInfo = {
    state: string;
    customer_code?: string;
    city: string;
    last_name?: string;
    title?: string;
    house_no?: string;
    gender?: string;
    primary_email: string;
    alternate_mobile_number?: string;
    floor_no?: string;
    country: string;
    pincode: string;
    address1: string;
    external_customer_code?: string;
    primary_mobile_number: string;
    middle_name?: string;
    country_code?: string;
    address2?: string;
    alternate_email?: string;
    first_name: string;
    state_code?: string;
};
type Tax = {
    breakup?: any[];
    rate: number;
    amount: any;
    name: string;
};
type Charge = {
    tax?: Tax;
    type: string;
    code?: string;
    amount: any;
    name: string;
};
type LineItem = {
    seller_identifier: string;
    meta?: any;
    custom_messasge?: string;
    quantity?: number;
    charges?: Charge[];
    external_line_id?: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    dispatch_by_date?: string;
    customer_pickup_slot?: any;
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
    pack_by_date?: string;
};
type Shipment = {
    external_shipment_id?: string;
    line_items: LineItem[];
    location_id: number;
    processing_dates?: ProcessingDates;
    meta?: any;
    priority?: number;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type ShippingInfo = {
    shipping_type?: string;
    state: string;
    customer_code?: string;
    city: string;
    last_name?: string;
    title?: string;
    house_no?: string;
    address_type?: string;
    gender?: string;
    primary_email: string;
    alternate_mobile_number?: string;
    floor_no?: string;
    country: string;
    pincode: string;
    landmark?: string;
    address1: string;
    external_customer_code?: string;
    geo_location?: any;
    primary_mobile_number: string;
    slot?: any[];
    middle_name?: string;
    country_code?: string;
    address2?: string;
    alternate_email?: string;
    first_name: string;
    state_code?: string;
};
type CreateOrderAPI = {
    meta?: any;
    payment_info: PaymentInfo;
    external_order_id?: string;
    billing_info: BillingInfo;
    charges: Charge[];
    external_creation_date?: string;
    shipments: Shipment[];
    tax_info?: TaxInfo;
    shipping_info: ShippingInfo;
    currency_info?: any;
};
type CreateOrderErrorReponse = {
    exception?: string;
    meta?: string;
    stack_trace?: string;
    code?: string;
    info?: any;
    message: string;
    request_id?: string;
    status: number;
};
type PaymentMethods = {
    refund_by?: string;
    mode?: string;
    collect_by?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
    shipment_assignment?: string;
    location_reassignment?: boolean;
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
    end_date: string;
    start_date: string;
    mobile: number;
    order_details?: FyndOrderIdList[];
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsData = {
    result?: any;
    _custom_json?: any;
    is_active?: boolean;
    app_id?: string;
    uid?: string;
    words?: string[];
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
    _custom_json?: any;
    is_active?: boolean;
    app_id?: string;
    words?: string[];
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    app_id?: string;
    results?: any[];
    uid?: string;
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type Media = {
    type?: string;
    url?: string;
    aspect_ratio?: string;
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
    display?: string;
    action?: AutocompleteAction;
    _custom_json?: any;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    is_active?: boolean;
    app_id?: string;
    results?: AutocompleteResult[];
    words?: string[];
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    _custom_json?: any;
    words?: string[];
    app_id?: string;
};
type ProductBundleItem = {
    allow_remove?: boolean;
    min_quantity: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    product_uid: number;
    max_quantity: number;
};
type ProductBundleRequest = {
    products: ProductBundleItem[];
    logo?: string;
    same_store_assignment?: boolean;
    modified_on?: string;
    slug: string;
    created_on?: string;
    company_id?: number;
    meta?: any;
    modified_by?: any;
    name: string;
    created_by?: any;
    page_visibility?: string[];
    choice: string;
    is_active: boolean;
};
type GetProductBundleCreateResponse = {
    products: ProductBundleItem[];
    id?: string;
    logo?: string;
    same_store_assignment?: boolean;
    modified_on?: string;
    slug: string;
    created_on?: string;
    company_id?: number;
    meta?: any;
    modified_by?: any;
    name: string;
    created_by?: any;
    page_visibility?: string[];
    choice: string;
    is_active: boolean;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type LimitedProductData = {
    price?: any;
    attributes?: any;
    short_description?: string;
    identifier?: any;
    slug?: string;
    images?: string[];
    name?: string;
    country_of_origin?: string;
    item_code?: string;
    uid?: number;
    sizes?: string[];
    quantity?: number;
};
type Price = {
    min_effective?: number;
    max_effective?: number;
    min_marked?: number;
    currency?: string;
    max_marked?: number;
};
type Size = {
    value?: string;
    is_available?: boolean;
    display?: string;
    quantity?: number;
};
type GetProducts = {
    allow_remove?: boolean;
    product_details?: LimitedProductData;
    price?: Price;
    min_quantity?: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    product_uid?: number;
    sizes?: Size[];
    max_quantity?: number;
};
type GetProductBundleResponse = {
    products?: GetProducts[];
    logo?: string;
    same_store_assignment?: boolean;
    slug?: string;
    company_id?: number;
    meta?: any;
    name?: string;
    page_visibility?: string[];
    choice?: string;
    is_active?: boolean;
};
type ProductBundleUpdateRequest = {
    products: ProductBundleItem[];
    logo?: string;
    same_store_assignment?: boolean;
    modified_on?: string;
    slug: string;
    company_id?: number;
    meta?: any;
    modified_by?: any;
    name: string;
    page_visibility?: string[];
    choice: string;
    is_active: boolean;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    id?: string;
    modified_on?: string;
    image?: string;
    subtitle?: string;
    created_on?: string;
    company_id?: number;
    created_by?: any;
    modified_by?: any;
    name: string;
    active?: boolean;
    brand_id?: number;
    description?: string;
    tag?: string;
    guide?: Guide;
    title: string;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    id?: string;
    modified_on?: string;
    subtitle?: string;
    created_on?: string;
    company_id?: number;
    created_by?: any;
    tag?: string;
    active?: boolean;
    name?: string;
    brand_id?: number;
    modified_by?: any;
    guide?: any;
    title?: string;
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
    is_gift?: boolean;
    seo?: SEOData;
    alt_text?: any;
    is_cod?: boolean;
    moq?: MOQData;
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
    _custom_json?: any;
    is_gift?: boolean;
    seo?: ApplicationItemSEO;
    alt_text?: any;
    _custom_meta?: MetaFields[];
    is_cod?: boolean;
    moq?: ApplicationItemMOQ;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    data: any[];
    values?: any[];
    condition?: any[];
};
type AttributeDetailsGroup = {
    logo?: string;
    priority: number;
    slug?: string;
    key?: string;
    name: string;
    unit?: string;
    display_type: string;
    is_active: boolean;
};
type AppConfigurationDetail = {
    logo?: string;
    attributes?: AttributeDetailsGroup[];
    priority: number;
    app_id: string;
    template_slugs?: string[];
    slug: string;
    name?: string;
    is_default: boolean;
    is_active: boolean;
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
    data: any[];
    page: PageResponseType;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    logo?: string;
    priority: number;
    app_id: string;
    key: string;
    name?: string;
    default_key: string;
    is_default: boolean;
    is_active: boolean;
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
    detail?: any;
    variant?: any;
    similar?: any;
    compare?: any;
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
    logo?: string;
    priority: number;
    size: ProductSize;
    key: string;
    name: string;
    display_type: string;
    is_active: boolean;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    logo?: string;
    priority: number;
    subtitle?: string;
    size?: ProductSize;
    key: string;
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
type ConfigurationListingSortConfig = {
    logo?: string;
    priority: number;
    key: string;
    name?: string;
    is_active: boolean;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    start?: number;
    display?: string;
    end?: number;
};
type ConfigurationListingFilterValue = {
    map_values?: any[];
    value?: string;
    map?: any;
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    logo?: string;
    priority: number;
    key: string;
    name?: string;
    value_config?: ConfigurationListingFilterValue;
    type: string;
    display_name?: string;
    is_active: boolean;
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
    modified_on?: string;
    app_id: string;
    config_type: string;
    created_on?: string;
    modified_by?: any;
    created_by?: any;
    product?: ConfigurationProduct;
    config_id?: string;
    type?: string;
    listing?: ConfigurationListing;
};
type AppCatalogConfiguration = {
    id?: string;
    modified_on?: string;
    app_id: string;
    config_type: string;
    created_on?: string;
    modified_by?: any;
    created_by?: any;
    product?: ConfigurationProduct;
    config_id?: string;
    type?: string;
    listing?: ConfigurationListing;
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
    id?: string;
    app_id: string;
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersKey = {
    logo?: string;
    kind?: string;
    name: string;
    display: string;
    operators?: string[];
};
type ProductFiltersValue = {
    currency_symbol?: string;
    selected_min?: number;
    min?: number;
    value: any;
    max?: number;
    is_selected: boolean;
    display_format?: string;
    selected_max?: number;
    count?: number;
    display: string;
    query_format?: string;
    currency_code?: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type ProductSortOn = {
    name?: string;
    is_selected?: boolean;
    value?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type UserInfo = {
    email?: string;
    uid?: string;
    username?: string;
    user_id?: string;
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionSchedule = {
    cron?: string;
    duration?: number;
    start?: string;
    next_schedule?: NextSchedule[];
    end?: string;
};
type CreateCollection = {
    logo: CollectionImage;
    _locale_language?: any;
    seo?: SeoDetail;
    published?: boolean;
    banners: CollectionBanner;
    modified_by?: UserInfo;
    type: string;
    query?: CollectionQuery[];
    tags?: string[];
    name: string;
    is_visible?: boolean;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    app_id: string;
    sort_on?: string;
    allow_facets?: boolean;
    _schedule?: CollectionSchedule;
    _custom_json?: any;
    priority?: number;
    visible_facets_keys?: string[];
    slug: string;
    meta?: any;
    created_by?: UserInfo;
    description?: string;
    is_active?: boolean;
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
    logo?: BannerImage;
    cron?: any;
    banners?: ImageUrls;
    tag?: string[];
    type?: string;
    query?: CollectionQuery[];
    name?: string;
    allow_sort?: boolean;
    badge?: any;
    app_id?: string;
    sort_on?: string;
    allow_facets?: boolean;
    _schedule?: any;
    priority?: number;
    visible_facets_keys?: string[];
    slug?: string;
    meta?: any;
    description?: string;
    is_active?: boolean;
};
type CollectionListingFilterTag = {
    name?: string;
    is_selected?: boolean;
    display?: string;
};
type CollectionListingFilterType = {
    name?: string;
    is_selected?: boolean;
    display?: string;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type Media1 = {
    type?: string;
    url: string;
    meta?: any;
};
type GetCollectionDetailNest = {
    logo?: Media1;
    cron?: any;
    banners?: ImageUrls;
    tag?: string[];
    type?: string;
    query?: CollectionQuery[];
    name?: string;
    allow_sort?: boolean;
    action?: Action;
    badge?: any;
    app_id?: string;
    allow_facets?: boolean;
    _schedule?: any;
    priority?: number;
    visible_facets_keys?: string[];
    slug?: string;
    meta?: any;
    description?: string;
    uid?: string;
    is_active?: boolean;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionDetailResponse = {
    query?: CollectionQuery[];
    _schedule?: any;
    logo?: Media1;
    cron?: any;
    priority?: number;
    badge?: any;
    app_id?: string;
    visible_facets_keys?: string[];
    slug?: string;
    meta?: any;
    name?: string;
    banners?: ImageUrls;
    allow_facets?: boolean;
    description?: string;
    tag?: string[];
    type?: string;
    is_active?: boolean;
    allow_sort?: boolean;
};
type UpdateCollection = {
    logo?: CollectionImage;
    _locale_language?: any;
    seo?: SeoDetail;
    published?: boolean;
    banners?: CollectionBanner;
    modified_by?: UserInfo;
    type?: string;
    query?: CollectionQuery[];
    tags?: string[];
    name?: string;
    is_visible?: boolean;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    sort_on?: string;
    allow_facets?: boolean;
    _schedule?: CollectionSchedule;
    _custom_json?: any;
    priority?: number;
    visible_facets_keys?: string[];
    slug?: string;
    meta?: any;
    description?: string;
    is_active?: boolean;
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
    uid?: number;
    logo?: Media1;
    action?: Action;
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
type ProductListingDetail = {
    medias?: Media1[];
    attributes?: any;
    highlights?: string[];
    product_online_date?: string;
    teaser_tag?: any;
    sellable?: boolean;
    type?: string;
    similars?: string[];
    rating_count?: number;
    item_type?: string;
    rating?: number;
    name?: string;
    color?: string;
    discount?: string;
    item_code?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    image_nature?: string;
    short_description?: string;
    has_variant?: boolean;
    brand?: ProductBrand;
    promo_meta?: any;
    price?: ProductListingPrice;
    slug: string;
    tryouts?: string[];
    description?: string;
    uid?: number;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page?: Page;
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    count?: number;
    sellable_count?: number;
};
type CatalogInsightBrand = {
    total_sizes?: number;
    article_freshness?: number;
    available_articles?: number;
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
    platform?: string;
    brand_ids?: number[];
    company_id?: number;
    opt_level: string;
    enabled?: boolean;
    store_ids?: number[];
};
type CompanyOptIn = {
    modified_on: number;
    platform: string;
    brand_ids: number[];
    created_on: number;
    company_id: number;
    created_by?: any;
    opt_level: string;
    modified_by?: any;
    enabled: boolean;
    store_ids: number[];
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    name?: string;
    uid?: number;
    business_type?: string;
    company_type?: string;
};
type CompanyBrandDetail = {
    total_article?: number;
    brand_name?: string;
    brand_id?: number;
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
    modified_on?: string;
    address?: any;
    created_on?: string;
    company_id?: number;
    name?: string;
    uid?: number;
    additional_contacts?: any[];
    timing?: any;
    store_code?: string;
    documents?: any[];
    manager?: any;
    display_name?: string;
    store_type?: string;
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
    allowed_values?: string[];
    range?: AttributeSchemaRange;
    mandatory?: boolean;
    format?: string;
    type: string;
    multi?: boolean;
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
    indexing: boolean;
    depends_on?: string[];
    priority?: number;
};
type GenderDetail = {
    id?: string;
    logo?: string;
    is_nested?: boolean;
    schema?: AttributeMaster;
    slug?: string;
    details?: AttributeMasterDetails;
    departments?: string[];
    meta?: AttributeMasterMeta;
    name?: string;
    filters?: AttributeMasterFilter;
    description?: string;
    enabled_for_end_consumer?: boolean;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    status?: number;
    meta?: any;
    errors?: any;
    code?: string;
    message?: string;
};
type DepartmentCreateUpdate = {
    synonyms?: string[];
    logo: string;
    _custom_json?: any;
    tags?: string[];
    slug?: string;
    name: string;
    platforms?: any;
    _cls?: string;
    uid?: number;
    is_active?: boolean;
    priority_order: number;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    _id?: string;
    uid?: string;
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetDepartment = {
    synonyms?: string[];
    logo?: string;
    page_no?: number;
    page_size?: number;
    modified_on?: string;
    slug?: string;
    created_on?: string;
    created_by?: UserSerializer;
    name?: string;
    modified_by?: UserSerializer;
    uid?: number;
    is_active?: boolean;
    search?: string;
    priority_order?: number;
    item_type?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    status?: number;
    meta?: any;
    errors?: any;
    code?: string;
    message?: string;
};
type UserDetail = {
    contact?: string;
    username: string;
    user_id: string;
    super_user?: boolean;
};
type DepartmentModel = {
    synonyms?: any[];
    modified_on: string;
    _id?: any;
    verified_on?: string;
    logo: string;
    _custom_json?: any;
    slug?: any;
    created_on: string;
    verified_by?: UserDetail;
    created_by?: UserDetail;
    name: any;
    _cls?: any;
    modified_by?: UserDetail;
    uid?: number;
    is_active?: boolean;
    priority_order: number;
};
type ProductTemplate = {
    attributes_schema?: any[];
    attributes?: string[];
    logo?: string;
    modified_on?: string;
    is_physical: boolean;
    slug: string;
    created_on?: string;
    departments?: string[];
    modified_by?: any;
    created_by?: any;
    name?: string;
    categories?: string[];
    description?: string;
    tag?: string;
    is_expirable?: boolean;
    is_active?: boolean;
    is_archived?: boolean;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    product_publish?: any;
    product_group_tag?: any;
    category_slug?: any;
    highlights?: any;
    trader_type?: any;
    teaser_tag?: any;
    sizes?: any;
    hsn_code?: any;
    item_type?: any;
    trader?: any;
    tags?: any;
    currency?: any;
    media?: any;
    return_config?: any;
    variants?: any;
    multi_size?: any;
    name?: any;
    country_of_origin?: any;
    item_code?: any;
    no_of_boxes?: any;
    custom_order?: any;
    short_description?: any;
    brand_uid?: any;
    size_guide?: any;
    slug?: any;
    is_dependent?: any;
    description?: any;
    command?: any;
    is_active?: any;
};
type GlobalValidation = {
    definitions?: any;
    required?: string[];
    properties?: Properties;
    description?: string;
    type?: string;
    title?: string;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    id?: string;
    attributes_schema?: any[];
    attributes?: string[];
    logo?: string;
    is_physical: boolean;
    slug: string;
    departments?: string[];
    name?: string;
    categories?: string[];
    description?: string;
    tag?: string;
    is_expirable?: boolean;
    is_active?: boolean;
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
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadItemsData = {
    type?: string;
    templates?: string[];
    brand?: string[];
};
type ProductDownloadsItems = {
    status?: string;
    trigger_on?: string;
    id?: string;
    template_tags?: any;
    task_id?: string;
    completed_on?: string;
    created_by?: VerifiedBy;
    seller_id?: number;
    url?: string;
    data?: ProductDownloadItemsData;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type Media2 = {
    logo: string;
    landscape: string;
    portrait: string;
};
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
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
type CategoryRequestBody = {
    is_active: boolean;
    priority?: number;
    media?: Media2;
    slug?: string;
    departments: number[];
    level: number;
    name: string;
    tryouts?: string[];
    hierarchy?: Hierarchy[];
    synonyms?: string[];
    marketplaces?: CategoryMapping;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type Category = {
    id?: string;
    synonyms?: string[];
    modified_on?: string;
    is_active: boolean;
    priority?: number;
    media?: Media2;
    slug?: string;
    created_on?: string;
    departments: number[];
    level: number;
    created_by?: any;
    name: string;
    tryouts?: string[];
    hierarchy?: Hierarchy[];
    modified_by?: any;
    uid?: number;
    marketplaces?: CategoryMapping;
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
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code_id?: string;
    hsn_code?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type Trader = {
    type?: string;
    address?: string[];
    name: any;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type ProductCreateUpdateSchemaV2 = {
    is_set?: boolean;
    attributes: any;
    product_publish?: ProductPublish;
    product_group_tag?: string[];
    category_slug: string;
    highlights?: string[];
    tax_identifier: TaxIdentifier;
    teaser_tag?: TeaserTag;
    sizes: any[];
    item_type: string;
    trader: Trader[];
    tags?: string[];
    currency: string;
    media?: Media1[];
    return_config: ReturnConfig;
    variants?: any;
    multi_size?: boolean;
    name: string;
    country_of_origin: string;
    item_code: string;
    no_of_boxes?: number;
    is_image_less_product?: boolean;
    action?: string;
    short_description?: string;
    custom_order?: CustomOrder;
    departments: number[];
    company_id: number;
    change_request_id?: any;
    brand_uid: number;
    _custom_json?: any;
    net_quantity?: NetQuantity;
    template_tag: string;
    size_guide?: string;
    slug: string;
    is_dependent?: boolean;
    bulk_job_id?: string;
    description?: string;
    requester?: string;
    uid?: number;
    is_active?: boolean;
    variant_group?: any;
    variant_media?: any;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: string;
};
type ReturnConfigResponse = {
    unit: string;
    time: number;
    returnable: boolean;
};
type Image = {
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type Logo = {
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Product = {
    is_set?: boolean;
    attributes?: any;
    is_active?: boolean;
    product_publish?: ProductPublished;
    primary_color?: string;
    product_group_tag?: string[];
    category_slug?: string;
    highlights?: string[];
    all_company_ids?: number[];
    tax_identifier?: any;
    teaser_tag?: any;
    modified_by?: any;
    is_expirable?: boolean;
    item_type?: string;
    category_uid?: number;
    hsn_code?: string;
    id?: string;
    trader?: any[];
    verified_on?: string;
    tags?: string[];
    currency?: string;
    media?: Media1[];
    return_config?: ReturnConfigResponse;
    variants?: any;
    multi_size?: boolean;
    created_on?: string;
    verified_by?: VerifiedBy;
    name?: string;
    color?: string;
    country_of_origin?: string;
    item_code?: string;
    all_sizes?: any[];
    no_of_boxes?: number;
    modified_on?: string;
    is_image_less_product?: boolean;
    image_nature?: string;
    short_description?: string;
    custom_order?: any;
    images?: Image[];
    departments?: number[];
    company_id?: number;
    brand?: Brand;
    brand_uid?: number;
    pending?: string;
    l3_mapping?: string[];
    all_identifiers?: string[];
    _custom_json?: any;
    net_quantity?: NetQuantityResponse;
    template_tag?: string;
    size_guide?: string;
    is_physical?: boolean;
    slug?: string;
    category?: any;
    created_by?: any;
    moq?: any;
    stage?: string;
    is_dependent?: boolean;
    description?: string;
    uid?: number;
    sizes?: any[];
    variant_group?: any;
    variant_media?: any;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductVariants = {
    media?: Media1[];
    name?: string;
    brand_uid?: number;
    item_code?: string;
    uid?: number;
    category_uid?: number;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    raw_key?: string;
    logo?: string;
    schema: AttributeMaster;
    unit?: string;
    modified_by?: any;
    variant?: boolean;
    is_nested?: boolean;
    tags?: string[];
    created_on?: string;
    name?: string;
    filters: AttributeMasterFilter;
    suggestion?: string;
    modified_on?: string;
    departments: string[];
    synonyms?: any;
    slug: string;
    details: AttributeMasterDetails;
    created_by?: any;
    description?: string;
    enabled_for_end_consumer?: boolean;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ProductCreateUpdate = {
    is_set?: boolean;
    product_publish?: ProductPublish;
    product_group_tag?: string[];
    category_slug: string;
    highlights?: string[];
    tax_identifier: TaxIdentifier;
    teaser_tag?: TeaserTag;
    item_type: string;
    trader: Trader[];
    tags?: string[];
    currency: string;
    media?: Media1[];
    return_config: ReturnConfig;
    variants?: any;
    multi_size?: boolean;
    name: any;
    country_of_origin: string;
    item_code: any;
    no_of_boxes?: number;
    is_image_less_product?: boolean;
    action?: string;
    short_description?: string;
    custom_order?: CustomOrder;
    departments: number[];
    company_id: number;
    change_request_id?: any;
    brand_uid: number;
    _custom_json?: any;
    net_quantity?: NetQuantity;
    template_tag: string;
    size_guide?: string;
    slug: string;
    is_dependent?: boolean;
    bulk_job_id?: string;
    description?: string;
    requester?: string;
    uid?: number;
    is_active?: boolean;
    variant_group?: any;
    variant_media?: any;
};
type ValidateIdentifier = {
    gtin_value: string;
    gtin_type: string;
    primary?: boolean;
};
type AllSizes = {
    item_weight: number;
    item_length: number;
    item_width: number;
    size: any;
    item_dimensions_unit_of_measure: string;
    identifiers?: ValidateIdentifier[];
    item_weight_unit_of_measure: any;
    item_height: number;
};
type ListALLSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    email?: string;
    uid?: string;
    username?: string;
    user_id?: string;
};
type BulkJob = {
    cancelled_records?: any[];
    modified_on?: string;
    failed_records?: any[];
    failed?: number;
    template_tag?: string;
    file_path?: string;
    created_on: string;
    company_id: number;
    created_by?: UserInfo1;
    succeed?: number;
    stage?: string;
    custom_template_tag?: string;
    tracking_url?: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    cancelled?: number;
    total?: number;
};
type BulkResponse = {
    modified_on?: string;
    batch_id: string;
    created_on: string;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
    is_active?: boolean;
};
type UserDetail1 = {
    full_name?: string;
    username?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    cancelled_records?: string[];
    modified_on?: string;
    failed_records?: string[];
    failed?: number;
    template_tag?: string;
    file_path?: string;
    created_on?: string;
    company_id?: number;
    stage?: string;
    created_by?: UserDetail1;
    succeed?: number;
    template?: ProductTemplate;
    modified_by?: UserDetail1;
    is_active?: boolean;
    cancelled?: number;
    total?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    template_tag: string;
    data: any[];
    batch_id: string;
    company_id: number;
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
    username?: string;
    user_id?: string;
    company_id?: number;
};
type Items = {
    cancelled_records?: string[];
    id?: string;
    modified_on?: string;
    failed_records?: string[];
    failed?: number;
    file_path?: string;
    created_on?: string;
    company_id?: number;
    created_by?: UserCommon;
    succeed?: number;
    stage?: string;
    retry?: number;
    tracking_url?: string;
    modified_by?: UserCommon;
    is_active?: boolean;
    cancelled?: number;
    total?: number;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    company_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type ItemQuery = {
    brand_uid?: number;
    uid?: number;
    item_code?: string;
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
type GTIN = {
    gtin_value: any;
    gtin_type: string;
    primary?: boolean;
};
type InvSize = {
    set?: InventorySet;
    is_set?: boolean;
    price?: number;
    item_weight?: number;
    expiration_date?: string;
    item_length?: number;
    currency: string;
    price_effective: number;
    item_width?: number;
    size: any;
    item_dimensions_unit_of_measure?: string;
    price_transfer?: number;
    identifiers: GTIN[];
    store_code: string;
    item_weight_unit_of_measure?: string;
    item_height?: number;
    quantity: number;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type InventoryResponse = {
    price?: number;
    sellable_quantity?: number;
    currency?: string;
    seller_identifier?: string;
    inventory_updated_on?: string;
    price_effective?: number;
    size?: string;
    item_id?: number;
    store?: any;
    price_transfer?: number;
    identifiers?: any;
    uid?: string;
    quantity?: number;
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
type DimensionResponse = {
    unit: string;
    width: number;
    height: number;
    is_default: boolean;
    length: number;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type ReturnConfig1 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type CompanyMeta = {
    id: number;
};
type WeightResponse = {
    is_default: boolean;
    unit: string;
    shipping: number;
};
type BrandMeta = {
    id: number;
    name: string;
};
type PriceMeta = {
    updated_at?: string;
    marked: number;
    tp_notes?: any;
    currency: string;
    effective: number;
    transfer: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    sellable?: QuantityBase;
};
type InventorySellerResponse = {
    set?: InventorySet;
    is_set?: boolean;
    fynd_article_code: string;
    added_on_store?: string;
    fragile: boolean;
    tax_identifier?: any;
    manufacturer: ManufacturerResponse;
    dimension: DimensionResponse;
    modified_by?: UserSerializer;
    fynd_meta?: any;
    total_quantity: number;
    trader?: Trader1[];
    tags?: string[];
    identifier: any;
    seller_identifier: string;
    return_config?: ReturnConfig1;
    size: string;
    item_id: number;
    company: CompanyMeta;
    country_of_origin: string;
    fynd_item_code: string;
    raw_meta?: any;
    weight: WeightResponse;
    brand: BrandMeta;
    store: StoreMeta;
    price: PriceMeta;
    expiration_date?: string;
    _custom_json?: any;
    trace_id?: string;
    meta?: any;
    created_by?: UserSerializer;
    stage?: string;
    track_inventory?: boolean;
    quantities?: Quantities;
    uid: string;
    is_active?: boolean;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    cancelled_records?: string[];
    id?: string;
    modified_on?: string;
    failed_records?: string[];
    failed?: number;
    file_path?: string;
    created_on?: string;
    company_id?: number;
    created_by?: any;
    stage?: string;
    succeed?: number;
    modified_by?: any;
    is_active?: boolean;
    cancelled?: number;
    total?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    price?: number;
    expiration_date?: string;
    trace_id?: string;
    tags?: string[];
    price_marked?: number;
    seller_identifier: string;
    currency?: string;
    price_effective?: number;
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    item_weight_unit_of_measure?: string;
    total_quantity?: number;
    quantity?: number;
};
type InventoryBulkRequest = {
    batch_id: string;
    sizes: InventoryJobPayload[];
    company_id: number;
    user?: any;
};
type InventoryExportRequest = {
    type?: string;
    store?: number[];
    brand?: number[];
};
type InventoryExportResponse = {
    status?: string;
    trigger_on?: string;
    task_id: string;
    request_params?: any;
    seller_id: number;
};
type InventoryExportJob = {
    status?: string;
    trigger_on?: string;
    task_id: string;
    completed_on?: string;
    request_params?: any;
    seller_id: number;
    url?: string;
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    address?: string;
    name?: string;
};
type DimensionResponse1 = {
    height?: number;
    unit?: string;
    width?: number;
    length?: number;
};
type Trader2 = {
    type?: string;
    address?: string[];
    name?: string;
};
type ReturnConfig2 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type CompanyMeta1 = {
    id?: number;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type ArticleStoreResponse = {
    store_code?: string;
    name?: string;
    uid?: number;
    store_type?: string;
};
type PriceArticle = {
    marked?: number;
    tp_notes?: any;
    currency?: string;
    effective?: number;
    transfer?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    order_committed?: Quantity;
    not_available?: Quantity;
    damaged?: Quantity;
    sellable?: Quantity;
};
type GetInventories = {
    is_set?: boolean;
    tax_identifier?: any;
    manufacturer?: ManufacturerResponse1;
    dimension?: DimensionResponse1;
    modified_by?: UserSerializer;
    total_quantity?: number;
    id?: string;
    trader?: Trader2[];
    tags?: string[];
    identifier?: any;
    seller_identifier?: string;
    return_config?: ReturnConfig2;
    inventory_updated_on?: string;
    size?: string;
    item_id?: number;
    company?: CompanyMeta1;
    country_of_origin?: string;
    weight?: WeightResponse1;
    date_meta?: DateMeta;
    brand?: BrandMeta1;
    platforms?: any;
    store?: ArticleStoreResponse;
    price?: PriceArticle;
    expiration_date?: string;
    trace_id?: string;
    created_by?: UserSerializer;
    stage?: string;
    track_inventory?: boolean;
    quantities?: QuantitiesArticle;
    uid?: string;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type FilerList = {
    value?: string;
    display?: string;
};
type InventoryConfig = {
    data?: FilerList[];
    multivalues?: boolean;
};
type InventoryPayload = {
    expiration_date?: string;
    trace_id?: string;
    tags?: string[];
    price_marked?: number;
    seller_identifier: string;
    price_effective?: number;
    store_id: number;
    total_quantity?: number;
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
    tax_on_esp?: boolean;
    is_active?: boolean;
    company_id: number;
    tax_on_mrp: boolean;
    tax2?: number;
    uid?: number;
    hsn_code: string;
    hs2_code: string;
    threshold2?: number;
    threshold1: number;
};
type HsnCodesObject = {
    id?: string;
    tax1?: number;
    modified_on?: string;
    tax_on_esp?: boolean;
    company_id?: number;
    tax_on_mrp?: boolean;
    tax2?: number;
    hsn_code?: string;
    hs2_code?: string;
    threshold2?: number;
    threshold1?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    size?: number;
    has_previous?: boolean;
    has_next?: boolean;
    current?: string;
    item_total?: number;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
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
    effective_date: string;
    cess?: number;
};
type HSNDataInsertV2 = {
    reporting_hsn: string;
    modified_on?: string;
    created_on?: string;
    modified_by?: any;
    created_by?: any;
    taxes: TaxSlab[];
    description: string;
    country_code: string;
    type: string;
    hsn_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    logo?: Media;
    action?: Action;
    slug?: string;
    departments?: string[];
    name?: string;
    banners?: ImageUrls;
    discount?: string;
    uid?: number;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    logo?: Media;
    slug?: string;
    name?: string;
    uid?: number;
    priority_order?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    _custom_json?: any;
    action?: Action;
    slug?: string;
    childs?: any[];
    name?: string;
    banners?: ImageUrls;
    uid?: number;
};
type SecondLevelChild = {
    _custom_json?: any;
    action?: Action;
    slug?: string;
    childs?: ThirdLevelChild[];
    name?: string;
    banners?: ImageUrls;
    uid?: number;
};
type Child = {
    _custom_json?: any;
    action?: Action;
    slug?: string;
    childs?: SecondLevelChild[];
    name?: string;
    banners?: ImageUrls;
    uid?: number;
};
type CategoryItems = {
    action?: Action;
    slug?: string;
    childs?: Child[];
    name?: string;
    banners?: ImageUrls;
    uid?: number;
};
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
};
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
type CategoryListingResponse = {
    data?: DepartmentCategoryTree[];
    departments?: DepartmentIdentifier[];
};
type ApplicationProductListingResponse = {
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    operators?: any;
    page: Page;
};
type ProductDetail = {
    medias?: Media1[];
    attributes?: any;
    highlights?: string[];
    product_online_date?: string;
    teaser_tag?: any;
    type?: string;
    similars?: string[];
    rating_count?: number;
    item_type?: string;
    rating?: number;
    name?: string;
    color?: string;
    item_code?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    image_nature?: string;
    short_description?: string;
    has_variant?: boolean;
    brand?: ProductBrand;
    promo_meta?: any;
    slug: string;
    tryouts?: string[];
    description?: string;
    uid?: number;
};
type InventoryPage = {
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    type: string;
    item_total: number;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type InvoiceCredSerializer = {
    password?: string;
    username?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type UserSerializer2 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetAddressSerializer = {
    country?: string;
    state?: string;
    address1?: string;
    landmark?: string;
    address_type?: string;
    latitude?: number;
    pincode?: number;
    country_code?: string;
    longitude?: number;
    city?: string;
    address2?: string;
};
type GetCompanySerializer = {
    modified_on?: string;
    verified_on?: string;
    created_on?: string;
    verified_by?: UserSerializer2;
    created_by?: UserSerializer2;
    stage?: string;
    name?: string;
    business_type?: string;
    reject_reason?: string;
    company_type?: string;
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer2;
    uid?: number;
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
    closing?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
};
type GetLocationSerializer = {
    contact_numbers?: SellerPhoneNumber[];
    integration_type?: LocationIntegrationType;
    product_return_config?: ProductReturnConfigSerializer;
    warnings?: any;
    notification_emails?: string[];
    modified_by?: UserSerializer1;
    gst_credentials?: InvoiceDetailsSerializer;
    verified_on?: string;
    created_on?: string;
    verified_by?: UserSerializer1;
    name: string;
    company?: GetCompanySerializer;
    manager?: LocationManagerSerializer;
    modified_on?: string;
    address: GetAddressSerializer;
    timing?: LocationDayWiseSerializer[];
    display_name: string;
    store_type?: string;
    documents?: Document[];
    _custom_json?: any;
    phone_number?: string;
    created_by?: UserSerializer1;
    stage?: string;
    code: string;
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
    logo?: string;
    _custom_json?: any;
    app_id: string;
    name?: string;
    uid: number;
    is_active?: boolean;
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
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type GetCompanyProfileSerializerResponse = {
    business_type: string;
    company_type: string;
    warnings?: any;
    mode?: string;
    stage?: string;
    verified_on?: string;
    verified_by?: UserSerializer;
    business_details?: BusinessDetails;
    notification_emails?: string[];
    uid: number;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    documents?: Document[];
    business_country_info?: BusinessCountryInfo;
    taxes?: CompanyTaxesSerializer[];
    _custom_json?: any;
    contact_details?: ContactDetails;
    addresses?: GetAddressSerializer[];
    name?: string;
    business_info?: string;
    created_on?: string;
    modified_on?: string;
    franchise_enabled?: boolean;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    latitude: number;
    address1: string;
    state: string;
    city: string;
    country: string;
    address_type: string;
    address2?: string;
    longitude: number;
    country_code?: string;
    landmark?: string;
    pincode: number;
};
type UpdateCompany = {
    business_type?: string;
    business_info?: string;
    company_type?: string;
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer1[];
    warnings?: any;
    _custom_json?: any;
    contact_details?: ContactDetails;
    addresses?: CreateUpdateAddressSerializer[];
    reject_reason?: string;
    documents?: Document[];
    business_details?: BusinessDetails;
    name?: string;
    franchise_enabled?: boolean;
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
    company_documents?: DocumentsObj;
    product?: DocumentsObj;
    uid?: number;
    store_documents?: DocumentsObj;
    brand?: DocumentsObj;
    stage?: string;
    store?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    description?: string;
    warnings?: any;
    _locale_language?: any;
    mode?: string;
    logo?: string;
    stage?: string;
    verified_on?: string;
    verified_by?: UserSerializer;
    uid?: number;
    created_by?: UserSerializer;
    slug_key?: string;
    banner?: BrandBannerSerializer;
    modified_by?: UserSerializer;
    reject_reason?: string;
    _custom_json?: any;
    synonyms?: string[];
    name: string;
    created_on?: string;
    modified_on?: string;
};
type CreateUpdateBrandRequestSerializer = {
    description?: string;
    uid?: number;
    brand_tier?: string;
    _custom_json?: any;
    synonyms?: string[];
    _locale_language?: any;
    logo: string;
    banner?: BrandBannerSerializer;
    company_id?: number;
    name: string;
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
    business_type: string;
    notification_emails?: string[];
    created_on?: string;
    company_type: string;
    uid?: number;
    created_by?: UserSerializer;
    market_channels?: string[];
    _custom_json?: any;
    details?: CompanyDetails;
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    reject_reason?: string;
    verified_by?: UserSerializer;
    stage?: string;
    business_country_info?: BusinessCountryInfo;
    name?: string;
};
type CompanyBrandSerializer = {
    created_on?: string;
    uid?: number;
    warnings?: any;
    created_by?: UserSerializer;
    company?: CompanySerializer;
    brand?: GetBrandResponseSerializer;
    modified_on?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    stage?: string;
    verified_by?: UserSerializer;
    reject_reason?: string;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
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
    date: HolidayDateSerializer;
    title: string;
    holiday_type: string;
};
type LocationSerializer = {
    holiday?: HolidaySchemaSerializer[];
    notification_emails?: string[];
    display_name: string;
    uid?: number;
    warnings?: any;
    code: string;
    _custom_json?: any;
    company: number;
    manager?: LocationManagerSerializer;
    timing?: LocationDayWiseSerializer[];
    address: GetAddressSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    stage?: string;
    store_type?: string;
    documents?: Document[];
    product_return_config?: ProductReturnConfigSerializer;
    name: string;
    contact_numbers?: SellerPhoneNumber[];
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
    strategy?: string;
    level?: string;
};
type _AssignStoreArticle = {
    query?: _ArticleQuery;
    meta?: any;
    group_id?: string;
    quantity?: number;
    article_assignment?: _ArticleAssignment;
};
type AssignStoreRequestValidator = {
    channel_identifier?: string;
    store_ids?: number[];
    app_id?: string;
    articles?: _AssignStoreArticle[];
    channel_type?: string;
    pincode?: string;
    company_id?: number;
};
type AssignStoreResponseSerializer = {
    store_id?: number;
    uid?: string;
    meta?: any;
    size?: string;
    index?: number;
    _id?: string;
    price_marked?: number;
    article_assignment?: _ArticleAssignment;
    quantity?: number;
    price_effective?: number;
    s_city?: string;
    store_pincode?: string;
    item_id?: number;
    company_id?: number;
    status?: boolean;
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
    min?: number;
    max?: number;
};
type UsesRemaining = {
    total?: number;
    app?: number;
    user?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    networks?: string[];
    types?: string[];
    codes?: string[];
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions = {
    ordering_stores?: number[];
    platforms?: string[];
    price_range?: PriceRange;
    user_groups?: number[];
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    payments?: any;
    bulk_bundle?: BulkBundleRestriction;
    post_order?: PostOrder;
    user_type?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type RuleDefinition = {
    auto_apply?: boolean;
    applicable_on: string;
    scope?: string[];
    calculate_on: string;
    is_exact?: boolean;
    value_type: string;
    type: string;
    currency_code?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    title?: string;
    description?: string;
    subtitle?: string;
    remove?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Validity = {
    priority?: number;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type CouponSchedule = {
    next_schedule?: any[];
    cron?: string;
    duration?: number;
    start?: string;
    end?: string;
};
type Validation = {
    app_id?: string[];
    user_registered_after?: string;
    anonymous?: boolean;
};
type Rule = {
    min?: number;
    discount_qty?: number;
    key?: number;
    value?: number;
    max?: number;
};
type CouponAdd = {
    restrictions?: Restrictions;
    ownership: Ownership;
    date_meta?: CouponDateMeta;
    tags?: string[];
    rule_definition: RuleDefinition;
    display_meta: DisplayMeta;
    state?: State;
    author?: CouponAuthor;
    identifiers: Identifier;
    type_slug: string;
    validity: Validity;
    action?: CouponAction;
    code: string;
    _schedule?: CouponSchedule;
    validation?: Validation;
    rule: Rule[];
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
    restrictions?: Restrictions;
    ownership: Ownership;
    date_meta?: CouponDateMeta;
    tags?: string[];
    rule_definition: RuleDefinition;
    display_meta: DisplayMeta;
    state?: State;
    author?: CouponAuthor;
    identifiers: Identifier;
    type_slug: string;
    validity: Validity;
    action?: CouponAction;
    code: string;
    _schedule?: CouponSchedule;
    validation?: Validation;
    rule: Rule[];
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type DiscountOffer = {
    max_discount_amount?: number;
    apportion_discount?: boolean;
    discount_price?: number;
    discount_percentage?: number;
    partial_can_ret?: boolean;
    max_offer_quantity?: number;
    discount_amount?: number;
    code?: string;
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
};
type CompareObject = {
    greater_than?: number;
    less_than_equals?: number;
    equals?: number;
    greater_than_equals?: number;
    less_than?: number;
};
type ItemCriteria = {
    item_exclude_id?: number[];
    item_company?: number[];
    cart_quantity?: CompareObject;
    item_store?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_store?: number[];
    available_zones?: string[];
    cart_total?: CompareObject;
    product_tags?: string[];
    item_exclude_company?: number[];
    item_id?: number[];
    item_exclude_brand?: number[];
    item_exclude_sku?: string[];
    item_brand?: number[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_category?: number[];
    item_sku?: string[];
    item_size?: string[];
    item_category?: number[];
    buy_rules?: string[];
    all_items?: boolean;
};
type DiscountRule = {
    buy_condition: string;
    offer: DiscountOffer;
    discount_type: string;
    item_criteria: ItemCriteria;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type DisplayMeta1 = {
    description?: string;
    offer_text?: string;
    offer_label?: string;
    name?: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionSchedule = {
    next_schedule?: any[];
    cron?: string;
    duration?: number;
    start: string;
    end?: string;
    published: boolean;
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
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    uses?: PaymentAllowValue1;
    type: string;
    codes?: string[];
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions1 = {
    platforms?: string[];
    user_registered?: UserRegistered;
    user_groups?: number[];
    uses: UsesRestriction1;
    anonymous_users?: boolean;
    payments?: PromotionPaymentModes[];
    post_order?: PostOrder1;
    order_quantity?: number;
    user_id?: string[];
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionListItem = {
    stackable?: boolean;
    ownership: Ownership1;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    application_id: string;
    promo_group: string;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    display_meta: DisplayMeta1;
    mode: string;
    date_meta?: PromotionDateMeta;
    post_order_action?: PromotionAction;
    currency?: string;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    code?: string;
    promotion_type: string;
    apply_priority?: number;
    calculate_on?: string;
    buy_rules: any;
    author?: PromotionAuthor;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    stackable?: boolean;
    ownership: Ownership1;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    application_id: string;
    promo_group: string;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    display_meta: DisplayMeta1;
    mode: string;
    date_meta?: PromotionDateMeta;
    post_order_action?: PromotionAction;
    currency?: string;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    code?: string;
    promotion_type: string;
    apply_priority?: number;
    calculate_on?: string;
    buy_rules: any;
    author?: PromotionAuthor;
};
type PromotionUpdate = {
    stackable?: boolean;
    ownership: Ownership1;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    application_id: string;
    promo_group: string;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    display_meta: DisplayMeta1;
    mode: string;
    date_meta?: PromotionDateMeta;
    post_order_action?: PromotionAction;
    currency?: string;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    code?: string;
    promotion_type: string;
    apply_priority?: number;
    calculate_on?: string;
    buy_rules: any;
    author?: PromotionAuthor;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    title?: string;
    description?: string;
    subtitle?: string;
    modified_on?: string;
    entity_type?: string;
    type?: string;
    entity_slug?: string;
    example?: string;
    created_on?: string;
    is_hidden?: boolean;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductPrice = {
    marked?: number;
    selling?: number;
    add_on?: number;
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type ProductAvailability = {
    out_of_stock?: boolean;
    deliverable?: boolean;
    sizes?: string[];
    is_valid?: boolean;
    other_store_quantity?: number;
};
type ProductImage = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type BaseInfo = {
    name?: string;
    uid?: number;
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
type CartProduct = {
    images?: ProductImage[];
    net_quantity?: NetQuantity;
    brand?: BaseInfo;
    name?: string;
    slug?: string;
    uid?: number;
    action?: ProductAction;
    type?: string;
    categories?: CategoryInfo[];
};
type CartProductIdentifer = {
    identifier?: string;
};
type FreeGiftItem = {
    item_name?: string;
    item_images_url?: string[];
    item_brand_name?: string;
    item_id?: number;
    item_price_details?: any;
    item_slug?: string;
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    quantity?: number;
    parent_item_identifier?: string;
};
type DiscountRulesApp = {
    item_criteria?: any;
    raw_offer?: any;
    matched_buy_rules?: string[];
    offer?: any;
};
type AppliedPromotion = {
    promo_id?: string;
    article_quantity?: number;
    offer_text?: string;
    applied_free_articles?: AppliedFreeArticles[];
    promotion_group?: string;
    discount_rules?: DiscountRulesApp[];
    promotion_type?: string;
    mrp_promotion?: boolean;
    amount?: number;
    buy_rules?: BuyRules[];
    promotion_name?: string;
};
type BasePrice = {
    effective?: number;
    marked?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    price?: ArticlePriceInfo;
    extra_meta?: any;
    store?: BaseInfo;
    parent_item_identifiers?: any;
    product_group_tags?: string[];
    size?: string;
    uid?: string;
    seller?: BaseInfo;
    quantity?: number;
    type?: string;
};
type CartProductInfo = {
    message?: string;
    price?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    availability?: ProductAvailability;
    product?: CartProduct;
    is_set?: boolean;
    price_per_unit?: ProductPriceInfo;
    key?: string;
    parent_item_identifiers?: any;
    quantity?: number;
    identifiers: CartProductIdentifer;
    promotions_applied?: AppliedPromotion[];
    bulk_offer?: any;
    discount?: string;
    article?: ProductArticle;
    coupon_message?: string;
};
type LoyaltyPoints = {
    total?: number;
    applicable?: number;
    is_applied?: boolean;
    description?: string;
};
type RawBreakup = {
    total?: number;
    cod_charge?: number;
    you_saved?: number;
    vog?: number;
    mrp_total?: number;
    delivery_charge?: number;
    fynd_cash?: number;
    gst_charges?: number;
    subtotal?: number;
    discount?: number;
    convenience_fee?: number;
    coupon?: number;
};
type CouponBreakup = {
    message?: string;
    title?: string;
    description?: string;
    code?: string;
    coupon_value?: number;
    is_applied?: boolean;
    max_discount_value?: number;
    value?: number;
    uid?: string;
    sub_title?: string;
    type?: string;
    minimum_cart_value?: number;
    coupon_type?: string;
};
type DisplayBreakup = {
    message?: string[];
    display?: string;
    key?: string;
    value?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
};
type OpenapiCartDetailsResponse = {
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    message?: string;
    success?: boolean;
    errors?: any;
};
type ShippingAddress = {
    email?: string;
    meta?: any;
    city?: string;
    address_type?: string;
    country_code?: string;
    name?: string;
    area_code_slug?: string;
    state?: string;
    landmark?: string;
    area?: string;
    country?: string;
    pincode?: number;
    address?: string;
    area_code: string;
    phone?: number;
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
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
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
    delivery_charges: number;
    amount_paid: number;
    loyalty_discount?: number;
    meta?: CartItemMeta;
    price_effective: number;
    product_id: number;
    extra_meta?: any;
    price_marked: number;
    employee_discount?: number;
    files?: OpenApiFiles[];
    quantity?: number;
    coupon_effective_discount: number;
    discount: number;
    cashback_applied: number;
    size: string;
    payment_methods: MultiTenderPaymentMethod[];
    cod_charges: number;
};
type OpenApiPlatformCheckoutReq = {
    payment_mode?: string;
    delivery_charges: number;
    coupon_code: string;
    coupon_value: number;
    billing_address: ShippingAddress;
    cart_items: OpenApiOrderItem[];
    employee_discount?: any;
    files?: OpenApiFiles[];
    cart_value: number;
    coupon?: string;
    gstin?: string;
    loyalty_discount?: number;
    affiliate_order_id?: string;
    order_id?: string;
    shipping_address?: ShippingAddress;
    comment?: string;
    cashback_applied: number;
    currency_code?: string;
    payment_methods: MultiTenderPaymentMethod[];
    cod_charges: number;
};
type OpenApiCheckoutResponse = {
    message?: string;
    success?: boolean;
    order_ref_id?: string;
    order_id: string;
};
type AbandonedCart = {
    app_id?: string;
    promotion?: any;
    bulk_coupon_discount?: number;
    uid: number;
    last_modified: string;
    _id: string;
    order_id?: string;
    checkout_mode?: string;
    comment?: string;
    is_default: boolean;
    merge_qty?: boolean;
    shipments?: any[];
    cashback: any;
    delivery_charges?: any;
    payment_mode?: string;
    is_archive?: boolean;
    buy_now?: boolean;
    payments?: any;
    cart_value?: number;
    created_on: string;
    discount?: number;
    coupon?: any;
    user_id: string;
    gstin?: string;
    pick_up_customer_details?: any;
    meta?: any;
    expire_at: string;
    fynd_credits?: any;
    fc_index_map?: number[];
    is_active?: boolean;
    articles: any[];
    payment_methods?: any[];
    cod_charges?: any;
};
type AbandonedCartResponse = {
    message?: string;
    items?: AbandonedCart[];
    page?: Page;
    success?: boolean;
    result?: any;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    last_modified?: string;
    payment_selection_lock?: PaymentSelectionLock;
    id?: string;
    checkout_mode?: string;
    buy_now?: boolean;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    coupon_text?: string;
    delivery_charge_info?: string;
    is_valid?: boolean;
    currency?: CartCurrency;
    restrict_checkout?: boolean;
    gstin?: string;
};
type AddProductCart = {
    store_id?: number;
    item_id?: number;
    extra_meta?: any;
    article_id?: string;
    seller_id?: number;
    article_assignment?: any;
    parent_item_identifiers?: any;
    product_group_tags?: string[];
    quantity?: number;
    pos?: boolean;
    item_size?: string;
    display?: string;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    message?: string;
    partial?: boolean;
    success?: boolean;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    item_id?: number;
    extra_meta?: any;
    article_id?: string;
    parent_item_identifiers?: any;
    quantity?: number;
    identifiers: CartProductIdentifer;
    item_index?: number;
    item_size?: string;
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
import Paginator = require("../common/Paginator");
import { OrderValidator } from "./PlatformApplicationModels";
