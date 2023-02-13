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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcDetailsRequest, EdcDevice, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceAddUpdateResponse, EdcAddRequest, EdcDeviceListResponse, ShipmentStatus, PaymentModeInfo, UserDataInfo, Prices, PlatformItem, GSTDetailsData, BagUnit, ShipmentItemFulFillingStore, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, FulfillingStore, BagStateMapper, BagStatusHistory, ShipmentStatusData, UserDetailsData, DPDetailsData, Identifier, FinancialBreakup, CurrentStatus, BagGST, OrderBrandName, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBagArticle, PlatformDeliveryAddress, BagConfigs, OrderBags, ShipmentPayments, OrderDetailsData, TrackingList, ShipmentInfoResponse, PlatformShipment, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, ShipmentTimeStamp, BuyerDetails, LockData, EInvoice, EinvoiceInfo, Formatted, DebugInfo, ShipmentMeta, AffiliateMeta, PDFLinks, AffiliateDetails, Attributes, Item, AffiliateBagDetails, BagGSTDetails, Brand, Dates, StoreAddress, EInvoicePortalDetails, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, StoreMeta, Store, B2BPODetails, BagMeta, ArticleDetails, BagReturnableCancelableStatus, ReturnConfig, Dimensions, Weight, Article, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, MarketPlacePdf, AffiliateBag, OrderUser, UserData, OrderPriority, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, TaxInfo, ShippingInfo, BillingInfo, ProcessingDates, LineItem, Shipment, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, ApplicationItemMOQ, MetaFields, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionQuery, Media1, BannerImage, ImageUrls, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionImage, CollectionBadge, CollectionBanner, UserInfo, SeoDetail, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, CategoryMappingValues, CategoryMapping, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, ReturnConfigResponse, Image, ProductPublished, Logo, NetQuantityResponse, Product, ProductListingResponse, CustomOrder, TaxIdentifier, Trader, ProductPublish, TeaserTag, NetQuantity, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ProductCreateUpdate, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, DimensionResponse, ReturnConfig1, Trader1, ManufacturerResponse, BrandMeta, WeightResponse, CompanyMeta, QuantityBase, Quantities, PriceMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, ArticleStoreResponse, DimensionResponse1, ReturnConfig2, Trader2, ManufacturerResponse1, BrandMeta1, WeightResponse1, CompanyMeta1, Quantity, QuantitiesArticle, PriceArticle, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, LocationTimingSerializer, LocationDayWiseSerializer, SellerPhoneNumber, LocationManagerSerializer, ProductReturnConfigSerializer, UserSerializer1, LocationIntegrationType, GetAddressSerializer, UserSerializer2, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, ContactDetails, BusinessCountryInfo, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, UsesRemaining, UsesRestriction, PostOrder, PriceRange, BulkBundleRestriction, PaymentAllowValue, PaymentModes, Restrictions, Rule, DisplayMetaDict, DisplayMeta, Validity, CouponAuthor, CouponAction, RuleDefinition, CouponDateMeta, CouponSchedule, State, Ownership, Validation, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, DisplayMeta1, PromotionAction, PromotionSchedule, Visibility, UsesRemaining1, UsesRestriction1, PostOrder1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, CompareObject, ItemCriteria, PromotionAuthor, PromotionDateMeta, DiscountOffer, DiscountRule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ProductAvailability, PromoMeta, ProductPrice, ProductPriceInfo, CartProductIdentifer, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, ProductImage, CategoryInfo, ActionQuery, ProductAction, CartProduct, CartProductInfo, CouponBreakup, RawBreakup, DisplayBreakup, LoyaltyPoints, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
 * @property {string[]} excluded_fields
 * @property {string} app_id
 * @property {string[]} display_fields
 * @property {boolean} created
 * @property {boolean} success
 * @property {Object[]} [aggregators]
 */
/**
 * @typedef ErrorCodeDescription
 * @property {string} description
 * @property {string} code
 * @property {boolean} success
 */
/**
 * @typedef PaymentGatewayConfig
 * @property {string} secret
 * @property {string} config_type
 * @property {string} merchant_salt
 * @property {boolean} [is_active]
 * @property {string} key
 */
/**
 * @typedef PaymentGatewayConfigRequest
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {string} app_id
 * @property {boolean} [is_active]
 */
/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {string[]} aggregator
 * @property {boolean} success
 */
/**
 * @typedef ErrorCodeAndDescription
 * @property {string} description
 * @property {string} code
 */
/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} error
 * @property {boolean} success
 */
/**
 * @typedef IntentAppErrorList
 * @property {string} [package_name]
 * @property {string} [code]
 */
/**
 * @typedef PaymentModeLogo
 * @property {string} small
 * @property {string} large
 */
/**
 * @typedef IntentApp
 * @property {string} [package_name]
 * @property {PaymentModeLogo} [logos]
 * @property {string} [display_name]
 * @property {string} [code]
 */
/**
 * @typedef PaymentModeList
 * @property {string} [card_fingerprint]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {string} [card_type]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [card_reference]
 * @property {number} [remaining_limit]
 * @property {string} [card_id]
 * @property {string} [merchant_code]
 * @property {boolean} [expired]
 * @property {string} [card_brand_image]
 * @property {string} [card_number]
 * @property {number} [exp_month]
 * @property {string} [display_name]
 * @property {number} [exp_year]
 * @property {string} [card_isin]
 * @property {string} [card_issuer]
 * @property {string} [card_name]
 * @property {string} aggregator_name
 * @property {string} [nickname]
 * @property {number} [cod_limit]
 * @property {string} [card_token]
 * @property {number} [cod_limit_per_order]
 * @property {string} [fynd_vpa]
 * @property {number} [timeout]
 * @property {number} [retry_count]
 * @property {string} [code]
 * @property {boolean} [intent_flow]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {PaymentModeLogo} [logo_url]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [card_brand]
 * @property {number} [display_priority]
 * @property {string} [name]
 */
/**
 * @typedef RootPaymentMode
 * @property {string} [aggregator_name]
 * @property {PaymentModeList[]} [list]
 * @property {boolean} [save_card]
 * @property {number} display_priority
 * @property {boolean} [anonymous_enable]
 * @property {string} display_name
 * @property {boolean} [is_pay_by_card_pl]
 * @property {string} name
 * @property {boolean} [add_card_enabled]
 */
/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option
 */
/**
 * @typedef PaymentOptionsResponse
 * @property {PaymentOptions} payment_options
 * @property {boolean} success
 */
/**
 * @typedef Payout
 * @property {Object} unique_transfer_no
 * @property {Object} more_attributes
 * @property {string} transfer_type
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {Object[]} payouts_aggregators
 * @property {Object} customers
 */
/**
 * @typedef PayoutsResponse
 * @property {Payout[]} items
 * @property {boolean} success
 */
/**
 * @typedef PayoutBankDetails
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [account_no]
 * @property {string} [account_holder]
 * @property {string} [bank_name]
 * @property {number} [pincode]
 * @property {string} ifsc_code
 * @property {string} account_type
 * @property {string} [city]
 * @property {string} [branch_name]
 */
/**
 * @typedef PayoutRequest
 * @property {string} transfer_type
 * @property {boolean} is_active
 * @property {Object} users
 * @property {PayoutBankDetails} bank_details
 * @property {string} unique_external_id
 * @property {string} aggregator
 */
/**
 * @typedef PayoutResponse
 * @property {Object} payouts
 * @property {string} unique_transfer_no
 * @property {string} payment_status
 * @property {string} transfer_type
 * @property {Object} users
 * @property {boolean} is_active
 * @property {boolean} created
 * @property {boolean} success
 * @property {Object} bank_details
 * @property {string} aggregator
 */
/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_default
 * @property {boolean} is_active
 * @property {boolean} success
 */
/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_default
 * @property {string} unique_external_id
 * @property {boolean} is_active
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
 * @property {Object} config
 * @property {string} aggregator
 * @property {boolean} success
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
 * @property {boolean} [is_verified_flag]
 * @property {string} message
 * @property {boolean} success
 * @property {Object} [data]
 */
/**
 * @typedef NotFoundResourceError
 * @property {string} description
 * @property {string} code
 * @property {boolean} success
 */
/**
 * @typedef BankDetailsForOTP
 * @property {string} account_no
 * @property {string} account_holder
 * @property {string} bank_name
 * @property {string} ifsc_code
 * @property {string} branch_name
 */
/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {BankDetailsForOTP} details
 * @property {string} order_id
 */
/**
 * @typedef IfscCodeResponse
 * @property {string} bank_name
 * @property {boolean} [success]
 * @property {string} branch_name
 */
/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} [mobile]
 * @property {number} id
 * @property {string} ifsc_code
 * @property {string} account_holder
 * @property {boolean} is_active
 * @property {string} display_name
 * @property {string} created_on
 * @property {string} beneficiary_id
 * @property {string} email
 * @property {string} [branch_name]
 * @property {string} subtitle
 * @property {string} account_no
 * @property {string} bank_name
 * @property {string} title
 * @property {string} address
 * @property {string} [delights_user_name]
 * @property {string} [comment]
 * @property {string} modified_on
 * @property {string} transfer_mode
 */
/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 * @property {boolean} [show_beneficiary_details]
 */
/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [order_id]
 * @property {Object} [extra_meta]
 * @property {string} [payment_gateway]
 * @property {string} [payment_id]
 * @property {string} [current_status]
 */
/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} mode
 * @property {string} [name]
 * @property {number} amount
 * @property {MultiTenderPaymentMeta} [meta]
 */
/**
 * @typedef PaymentConfirmationRequest
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} order_id
 */
/**
 * @typedef PaymentConfirmationResponse
 * @property {string} order_id
 * @property {string} message
 * @property {boolean} success
 */
/**
 * @typedef PlatformPaymentOptions
 * @property {number} [cod_amount_limit]
 * @property {number} [cod_charges]
 * @property {boolean} [anonymous_cod]
 * @property {Object} methods
 * @property {Object} [payment_selection_lock]
 * @property {boolean} enabled
 * @property {string} source
 * @property {string} mode_of_payment
 * @property {Object} [callback_url]
 */
/**
 * @typedef PlatfromPaymentConfig
 * @property {string} message
 * @property {boolean} success
 * @property {PlatformPaymentOptions} data
 */
/**
 * @typedef UpdatePlatformPaymentConfig
 * @property {number} [cod_amount_limit]
 * @property {number} [cod_charges]
 * @property {boolean} [anonymous_cod]
 * @property {Object} methods
 * @property {Object} [payment_selection_lock]
 */
/**
 * @typedef CODdata
 * @property {number} remaining_limit
 * @property {number} limit
 * @property {boolean} is_active
 * @property {number} usages
 * @property {string} user_id
 */
/**
 * @typedef GetUserCODLimitResponse
 * @property {CODdata} user_cod_data
 * @property {boolean} success
 */
/**
 * @typedef SetCODForUserRequest
 * @property {string} merchant_user_id
 * @property {boolean} is_active
 * @property {string} mobileno
 */
/**
 * @typedef SetCODOptionResponse
 * @property {string} message
 * @property {boolean} success
 */
/**
 * @typedef EdcDetailsRequest
 * @property {string} terminal_serial_no
 */
/**
 * @typedef EdcDevice
 * @property {string} [terminal_serial_no]
 * @property {string} [merchant_store_pos_code]
 * @property {string} [edc_serial_no]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {string} [device_tag]
 * @property {number} [store_id]
 */
/**
 * @typedef EdcDeviceDetailsResponse
 * @property {boolean} success
 * @property {EdcDevice} data
 */
/**
 * @typedef EdcUpdateRequest
 * @property {string} [is_active]
 * @property {string} terminal_serial_no
 * @property {number} store_id
 * @property {string} [device_tag]
 */
/**
 * @typedef EdcDeviceAddUpdateResponse
 * @property {boolean} success
 */
/**
 * @typedef EdcAddRequest
 * @property {string} terminal_serial_no
 * @property {string} merchant_store_pos_code
 * @property {string} edc_serial_no
 * @property {string} is_active
 * @property {string} device_tag
 * @property {number} store_id
 */
/**
 * @typedef EdcDeviceListResponse
 * @property {EdcDevice[]} device_list
 * @property {boolean} success
 */
/**
 * @typedef ShipmentStatus
 * @property {string} title
 * @property {string} actual_status
 * @property {string} hex_code
 * @property {string} ops_status
 * @property {string} status
 */
/**
 * @typedef PaymentModeInfo
 * @property {string} type
 * @property {string} logo
 */
/**
 * @typedef UserDataInfo
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {string} [first_name]
 * @property {string} [mobile]
 * @property {string} [name]
 * @property {string} [email]
 * @property {number} [uid]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [avis_user_id]
 */
/**
 * @typedef Prices
 * @property {number} [cashback]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [refund_credit]
 * @property {number} [tax_collected_at_source]
 * @property {number} [price_effective]
 * @property {number} [delivery_charge]
 * @property {number} [fynd_credits]
 * @property {number} [promotion_effective_discount]
 * @property {number} [discount]
 * @property {number} [cashback_applied]
 * @property {number} [value_of_good]
 * @property {number} [amount_paid]
 * @property {number} [refund_amount]
 * @property {number} [coupon_value]
 * @property {number} [price_marked]
 * @property {number} [cod_charges]
 */
/**
 * @typedef PlatformItem
 * @property {number} [id]
 * @property {string} [name]
 * @property {boolean} [can_return]
 * @property {number} [department_id]
 * @property {string} [code]
 * @property {number} [l3_category]
 * @property {string[]} [images]
 * @property {string} [size]
 * @property {string[]} [l1_category]
 * @property {boolean} [can_cancel]
 * @property {string} [l3_category_name]
 * @property {string} [color]
 * @property {string[]} [image]
 */
/**
 * @typedef GSTDetailsData
 * @property {number} gst_fee
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 * @property {number} value_of_good
 * @property {string} gstin_code
 */
/**
 * @typedef BagUnit
 * @property {string} ordering_channel
 * @property {number} total_shipment_bags
 * @property {boolean} [can_return]
 * @property {PlatformItem} [item]
 * @property {Prices} [prices]
 * @property {boolean} [can_cancel]
 * @property {string} shipment_id
 * @property {number} bag_id
 * @property {Object} status
 * @property {number} item_quantity
 * @property {GSTDetailsData} [gst]
 */
/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} id
 * @property {string} code
 */
/**
 * @typedef ShipmentItem
 * @property {Object} [channel]
 * @property {string} id
 * @property {string} fulfilling_centre
 * @property {number} total_bags_count
 * @property {number} total_shipments_in_order
 * @property {ShipmentStatus} [shipment_status]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {Object} [sla]
 * @property {UserDataInfo} [user]
 * @property {Prices} [prices]
 * @property {BagUnit[]} [bags]
 * @property {Object} [application]
 * @property {number} shipment_created_at
 * @property {Object} [payment_methods]
 * @property {string} created_at
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 */
/**
 * @typedef FilterInfoOption
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} text
 */
/**
 * @typedef FiltersInfo
 * @property {string} type
 * @property {string} value
 * @property {string} text
 * @property {FilterInfoOption[]} [options]
 */
/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {Object} [applied_filters]
 * @property {ShipmentItem[]} [items]
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [page]
 */
/**
 * @typedef Error
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef FulfillingStore
 * @property {string} contact_person
 * @property {number} id
 * @property {string} country
 * @property {string} city
 * @property {string} state
 * @property {string} code
 * @property {string} store_name
 * @property {string} fulfillment_channel
 * @property {Object} meta
 * @property {string} address
 * @property {string} pincode
 * @property {string} phone
 */
/**
 * @typedef BagStateMapper
 * @property {string} display_name
 * @property {string} [app_display_name]
 * @property {string} name
 * @property {boolean} [app_facing]
 * @property {string} [app_state_name]
 * @property {string} journey_type
 * @property {boolean} [is_active]
 * @property {string} state_type
 * @property {boolean} [notify_customer]
 * @property {number} bs_id
 */
/**
 * @typedef BagStatusHistory
 * @property {string} [display_name]
 * @property {string} [shipment_id]
 * @property {number} [delivery_partner_id]
 * @property {string} [app_display_name]
 * @property {number} [bsh_id]
 * @property {string} [created_at]
 * @property {boolean} [kafka_sync]
 * @property {number} [state_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [delivery_awb_number]
 * @property {string} [state_type]
 * @property {boolean} [forward]
 * @property {number} [store_id]
 * @property {number} [bag_id]
 * @property {Object[]} [reasons]
 * @property {string} [updated_at]
 * @property {string} status
 */
/**
 * @typedef ShipmentStatusData
 * @property {number} [id]
 * @property {string[]} [bag_list]
 * @property {string} [shipment_id]
 * @property {string} [created_at]
 * @property {string} [status]
 */
/**
 * @typedef UserDetailsData
 * @property {string} country
 * @property {string} name
 * @property {string} city
 * @property {string} state
 * @property {string} email
 * @property {string} address
 * @property {string} pincode
 * @property {string} phone
 */
/**
 * @typedef DPDetailsData
 * @property {number} [id]
 * @property {string} [country]
 * @property {string} [gst_tag]
 * @property {string} [name]
 * @property {string} [awb_no]
 * @property {string} [eway_bill_id]
 * @property {string} [pincode]
 * @property {string} [track_url]
 */
/**
 * @typedef Identifier
 * @property {string} [ean]
 */
/**
 * @typedef FinancialBreakup
 * @property {string} gst_fee
 * @property {number} [tax_collected_at_source]
 * @property {string} gst_tag
 * @property {string} hsn_code
 * @property {number} discount
 * @property {number} gst_tax_percentage
 * @property {number} refund_credit
 * @property {Object} pm_price_split
 * @property {number} fynd_credits
 * @property {number} coupon_effective_discount
 * @property {number} brand_calculated_amount
 * @property {number} value_of_good
 * @property {string} size
 * @property {number} cashback
 * @property {number} delivery_charge
 * @property {number} promotion_effective_discount
 * @property {number} cashback_applied
 * @property {number} amount_paid
 * @property {number} coupon_value
 * @property {number} price_marked
 * @property {number} [amount_paid_roundoff]
 * @property {Identifier} identifiers
 * @property {number} total_units
 * @property {boolean} added_to_fynd_cash
 * @property {string} item_name
 * @property {number} transfer_price
 * @property {number} price_effective
 * @property {number} cod_charges
 */
/**
 * @typedef CurrentStatus
 * @property {string} [shipment_id]
 * @property {number} [delivery_partner_id]
 * @property {number} current_status_id
 * @property {boolean} [kafka_sync]
 * @property {number} [state_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [state_type]
 * @property {number} [delivery_awb_number]
 * @property {number} [store_id]
 * @property {string} [created_at]
 * @property {number} [bag_id]
 * @property {number} [updated_at]
 * @property {string} [status]
 */
/**
 * @typedef BagGST
 * @property {number} [gst_fee]
 * @property {string} [gst_tag]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [brand_calculated_amount]
 * @property {string} [hsn_code]
 * @property {number} [value_of_good]
 * @property {number} [gst_tax_percentage]
 * @property {string} [gstin_code]
 */
/**
 * @typedef OrderBrandName
 * @property {number} id
 * @property {string} created_on
 * @property {string} logo
 * @property {string} [company]
 * @property {string} [modified_on]
 * @property {string} brand_name
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
 * @property {DiscountRules[]} [discount_rules]
 * @property {boolean} [mrp_promotion]
 * @property {number} [amount]
 * @property {string} [promo_id]
 * @property {number} [article_quantity]
 * @property {string} [promotion_name]
 * @property {BuyRules[]} [buy_rules]
 */
/**
 * @typedef OrderBagArticle
 * @property {string} [uid]
 * @property {Object} [return_config]
 * @property {Object} [identifiers]
 */
/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [version]
 * @property {string} [contact_person]
 * @property {string} [country]
 * @property {number} [longitude]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {string} [address2]
 * @property {string} [state]
 * @property {string} [created_at]
 * @property {string} [area]
 * @property {string} [address_category]
 * @property {string} [address_type]
 * @property {string} [landmark]
 * @property {string} [email]
 * @property {number} [latitude]
 * @property {string} [pincode]
 * @property {string} [phone]
 * @property {string} [updated_at]
 */
/**
 * @typedef BagConfigs
 * @property {boolean} enable_tracking
 * @property {boolean} can_be_cancelled
 * @property {boolean} allow_force_return
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_active
 * @property {boolean} is_returnable
 */
/**
 * @typedef OrderBags
 * @property {FinancialBreakup} [financial_breakup]
 * @property {boolean} [can_return]
 * @property {Prices} [prices]
 * @property {PlatformItem} [item]
 * @property {CurrentStatus} [current_status]
 * @property {BagGST} [gst_details]
 * @property {number} bag_id
 * @property {number} [line_number]
 * @property {string} [display_name]
 * @property {OrderBrandName} [brand]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {string} [identifier]
 * @property {boolean} [can_cancel]
 * @property {string} [seller_identifier]
 * @property {number} [quantity]
 * @property {string} [entity_type]
 * @property {OrderBagArticle} [article]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {BagConfigs} [bag_configs]
 * @property {Object} [parent_promo_bags]
 */
/**
 * @typedef ShipmentPayments
 * @property {string} mode
 * @property {string} [source]
 * @property {string} [logo]
 */
/**
 * @typedef OrderDetailsData
 * @property {string} [ordering_channel]
 * @property {string} [affiliate_id]
 * @property {Object} [tax_details]
 * @property {string} [order_value]
 * @property {string} [source]
 * @property {string} fynd_order_id
 * @property {string} [order_date]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [cod_charges]
 */
/**
 * @typedef TrackingList
 * @property {boolean} [is_passed]
 * @property {boolean} [is_current]
 * @property {string} [time]
 * @property {string} text
 * @property {string} status
 */
/**
 * @typedef ShipmentInfoResponse
 * @property {boolean} [enable_tracking]
 * @property {string[]} [shipment_images]
 * @property {string} order_type
 * @property {string} [operational_status]
 * @property {boolean} [can_return]
 * @property {boolean} platform_logo
 * @property {Object} company
 * @property {string} [journey_type]
 * @property {Prices} [prices]
 * @property {boolean} [go_green]
 * @property {Object} invoice
 * @property {boolean} [enable_dp_tracking]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} can_break
 * @property {string} shipment_id
 * @property {number} [shipment_quantity]
 * @property {Object[]} [forward_shipment_status]
 * @property {string} credit_note_id
 * @property {FulfillingStore} [fulfilling_store]
 * @property {boolean} is_packaging_order
 * @property {Object[]} items
 * @property {Object} order_status
 * @property {Object} [coupon]
 * @property {string} [refund_text]
 * @property {number} status_progress
 * @property {Object} ordering_store
 * @property {string} [user_agent]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {boolean} [can_cancel]
 * @property {string} [mid]
 * @property {string} [kirana_store_id]
 * @property {string} [order_created_time]
 * @property {Object} [escalation]
 * @property {string} user_id
 * @property {string} affiliate_shipment_id
 * @property {string} [is_pdsr]
 * @property {ShipmentStatusData} [status]
 * @property {string[]} [child_nodes]
 * @property {string} tracking_url
 * @property {string} [pay_button]
 * @property {Object} [delivery_slot]
 * @property {UserDetailsData} [billing_details]
 * @property {boolean} is_invoiced
 * @property {DPDetailsData} [dp_details]
 * @property {OrderBags[]} [bags]
 * @property {string} email_id
 * @property {Object[]} delivery_status
 * @property {Object} [user_info]
 * @property {string} lock_status
 * @property {string} [picked_date]
 * @property {string} [priority_text]
 * @property {Object} [refund_details]
 * @property {string} [replacement_details]
 * @property {string} [secured_delivery_flag]
 * @property {ShipmentPayments} [payments]
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [is_fynd_store]
 * @property {Object[]} [forward_tracking_list]
 * @property {boolean} is_not_fynd_source
 * @property {boolean} [beneficiary_details]
 * @property {OrderDetailsData} [order]
 * @property {Object[]} [forward_order_status]
 * @property {string} [shipment_status]
 * @property {number} [total_items]
 * @property {string} [payment_mode]
 * @property {boolean} is_fynd_coupon
 * @property {string} [packaging_type]
 * @property {Object[]} [custom_meta]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [vertical]
 * @property {Object} current_shipment_status
 * @property {Object} fyndstore_emp
 * @property {string} [due_date]
 * @property {number} [total_bags]
 * @property {Object} [bank_data]
 */
/**
 * @typedef PlatformShipment
 * @property {string[]} [shipment_images]
 * @property {string} [operational_status]
 * @property {string} [platform_logo]
 * @property {string} [journey_type]
 * @property {Prices} [prices]
 * @property {boolean} [enable_dp_tracking]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} shipment_id
 * @property {number} [shipment_quantity]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object} [coupon]
 * @property {string} [user_agent]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {ShipmentStatusData} [status]
 * @property {Object} [delivery_slot]
 * @property {UserDetailsData} [billing_details]
 * @property {DPDetailsData} [dp_details]
 * @property {OrderBags[]} [bags]
 * @property {string} [picked_date]
 * @property {string} [priority_text]
 * @property {ShipmentPayments} [payments]
 * @property {UserDetailsData} [delivery_details]
 * @property {OrderDetailsData} [order]
 * @property {string} [shipment_status]
 * @property {number} [total_items]
 * @property {string} [payment_mode]
 * @property {string} [packaging_type]
 * @property {Object[]} [custom_meta]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [vertical]
 * @property {number} [total_bags]
 */
/**
 * @typedef OrderMeta
 * @property {Object[]} [files]
 * @property {string} [comment]
 * @property {string} [order_type]
 * @property {string[]} [order_child_entities]
 * @property {Object[]} [order_tags]
 * @property {number} [employee_id]
 * @property {number} [ordering_store]
 * @property {string} [payment_type]
 * @property {string} [order_platform]
 * @property {Object} [extra_meta]
 * @property {number} [cart_id]
 * @property {string} [customer_note]
 * @property {Object} [staff]
 * @property {number} [mongo_cart_id]
 * @property {string} [currency_symbol]
 */
/**
 * @typedef OrderDict
 * @property {Object} [payment_methods]
 * @property {string} fynd_order_id
 * @property {OrderMeta} [meta]
 * @property {string} order_date
 */
/**
 * @typedef ShipmentDetailsResponse
 * @property {boolean} success
 * @property {PlatformShipment[]} [shipments]
 * @property {OrderDict} [order]
 */
/**
 * @typedef SubLane
 * @property {number} [index]
 * @property {number} [total_items]
 * @property {Object[]} [actions]
 * @property {string} [value]
 * @property {string} [text]
 */
/**
 * @typedef SuperLane
 * @property {string} value
 * @property {number} [total_items]
 * @property {string} text
 * @property {SubLane[]} [options]
 */
/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */
/**
 * @typedef PlatformChannel
 * @property {string} [name]
 * @property {string} [logo]
 */
/**
 * @typedef PlatformBreakupValues
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} [display]
 */
/**
 * @typedef PlatformOrderItems
 * @property {PlatformChannel} [channel]
 * @property {number} [total_order_value]
 * @property {number} [order_value]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {string} [order_id]
 * @property {UserDataInfo} [user_info]
 * @property {string} [payment_mode]
 * @property {Object} [meta]
 * @property {string} [order_created_time]
 * @property {PlatformShipment[]} [shipments]
 */
/**
 * @typedef OrderListingResponse
 * @property {string} [lane]
 * @property {PlatformOrderItems[]} [items]
 * @property {number} [total_count]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {Page} [page]
 */
/**
 * @typedef Options
 * @property {number} [value]
 * @property {string} [text]
 */
/**
 * @typedef MetricsCount
 * @property {number} value
 * @property {string} key
 * @property {string} text
 * @property {Options[]} [options]
 */
/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */
/**
 * @typedef PlatformTrack
 * @property {string} [raw_status]
 * @property {string} [shipment_type]
 * @property {string} [last_location_recieved_at]
 * @property {string} [account_name]
 * @property {Object} [meta]
 * @property {string} [awb]
 * @property {string} [updated_time]
 * @property {string} [reason]
 * @property {string} [updated_at]
 * @property {string} [status]
 */
/**
 * @typedef PlatformShipmentTrack
 * @property {PlatformTrack[]} [results]
 * @property {Object} [meta]
 */
/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [processed]
 * @property {FiltersInfo[]} [unfulfilled]
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [action_centre]
 * @property {FiltersInfo[]} [filters]
 */
/**
 * @typedef FiltersResponse
 * @property {FiltersInfo[]} [global_filter]
 * @property {AdvanceFilterInfo} [advance_filter]
 */
/**
 * @typedef Success
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef OmsReports
 * @property {string} [display_name]
 * @property {string} [s3_key]
 * @property {string} [report_name]
 * @property {Object} [request_details]
 * @property {string} [report_type]
 * @property {string} [report_requested_at]
 * @property {string} [report_id]
 * @property {string} [report_created_at]
 * @property {string} [status]
 */
/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [item_id]
 * @property {string} [jio_code]
 * @property {string} [company_id]
 * @property {string} [article_id]
 */
/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */
/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [message]
 */
/**
 * @typedef JioCodeUpsertResponse
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {boolean} [success]
 * @property {string} [identifier]
 * @property {string} [trace_id]
 * @property {Object[]} [data]
 */
/**
 * @typedef BulkInvoicingResponse
 * @property {string} [message]
 * @property {boolean} success
 */
/**
 * @typedef BulkInvoiceLabelResponse
 * @property {Object} [label]
 * @property {string} [company_id]
 * @property {string} [store_name]
 * @property {boolean} do_invoice_label_generated
 * @property {string} [invoice_status]
 * @property {Object} [invoice]
 * @property {string} [store_code]
 * @property {string} [store_id]
 * @property {Object} [data]
 * @property {string} batch_id
 */
/**
 * @typedef URL
 * @property {string} [url]
 */
/**
 * @typedef FileUploadResponse
 * @property {number} [expiry]
 * @property {string} [url]
 */
/**
 * @typedef FileResponse
 * @property {string} [file_path]
 * @property {URL} [cdn]
 * @property {string} [method]
 * @property {string} [namespace]
 * @property {FileUploadResponse} [upload]
 * @property {number} [size]
 * @property {string} [file_name]
 * @property {string} [operation]
 * @property {string[]} [tags]
 * @property {string} [content_type]
 */
/**
 * @typedef bulkListingData
 * @property {number} [company_id]
 * @property {number} [processing]
 * @property {number} [successful]
 * @property {string} [store_name]
 * @property {string} [uploaded_on]
 * @property {string} [file_name]
 * @property {number} [store_id]
 * @property {string} [user_id]
 * @property {string} [status]
 * @property {string} [id]
 * @property {Object[]} [successful_shipments]
 * @property {string[]} [processing_shipments]
 * @property {number} [total]
 * @property {Object[]} [failed_shipments]
 * @property {number} [failed]
 * @property {string} [excel_url]
 * @property {string} [store_code]
 * @property {string} [user_name]
 * @property {string} [batch_id]
 */
/**
 * @typedef BulkListingPage
 * @property {string} [type]
 * @property {boolean} [has_previous]
 * @property {number} [current]
 * @property {number} [size]
 * @property {boolean} [has_next]
 * @property {number} [total]
 */
/**
 * @typedef BulkListingResponse
 * @property {string} [error]
 * @property {boolean} [success]
 * @property {bulkListingData[]} [data]
 * @property {BulkListingPage} [page]
 */
/**
 * @typedef QuestionSet
 * @property {number} [id]
 * @property {string} [display_name]
 */
/**
 * @typedef Reason
 * @property {QuestionSet[]} [question_set]
 * @property {number} [id]
 * @property {string} [display_name]
 * @property {string[]} [qc_type]
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
 * @property {number} [failed_shipments_count]
 * @property {number} [processing_shipments_count]
 * @property {number} [total_shipments_count]
 * @property {string} [company_id]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [successful_shipments_count]
 * @property {string} [batch_id]
 */
/**
 * @typedef BulkActionDetailsResponse
 * @property {string[]} [error]
 * @property {string} [success]
 * @property {string[]} [failed_records]
 * @property {string} [uploaded_by]
 * @property {string} [uploaded_on]
 * @property {string} [message]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string} [user_id]
 * @property {boolean} [status]
 */
/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_min]
 * @property {string} [t_max]
 */
/**
 * @typedef BuyerDetails
 * @property {string} [ajio_site_id]
 * @property {string} city
 * @property {string} name
 * @property {string} state
 * @property {string} gstin
 * @property {string} address
 * @property {number} pincode
 */
/**
 * @typedef LockData
 * @property {string} [lock_message]
 * @property {boolean} [locked]
 * @property {boolean} [mto]
 */
/**
 * @typedef EInvoice
 * @property {string} [irn]
 * @property {string} [error_code]
 * @property {string} [signed_qr_code]
 * @property {string} [error_message]
 * @property {string} [signed_invoice]
 * @property {number} [acknowledge_no]
 * @property {string} [acknowledge_date]
 */
/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [credit_note]
 * @property {EInvoice} [invoice]
 */
/**
 * @typedef Formatted
 * @property {string} [f_max]
 * @property {string} [f_min]
 */
/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */
/**
 * @typedef ShipmentMeta
 * @property {number} [return_store_node]
 * @property {string} [order_type]
 * @property {number} [shipment_weight]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [store_invoice_updated_date]
 * @property {string} [dp_id]
 * @property {Object} [bag_weight]
 * @property {string} [return_affiliate_order_id]
 * @property {string} [forward_affiliate_order_id]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {Object} [return_details]
 * @property {string} [dp_name]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [fulfilment_priority_text]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {string} [marketplace_store_id]
 * @property {LockData} [lock_data]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [box_type]
 * @property {boolean} same_store_available
 * @property {string} [forward_affiliate_shipment_id]
 * @property {string} [awb_number]
 * @property {Object} [ewaybill_info]
 * @property {string} [po_number]
 * @property {Formatted} [formatted]
 * @property {boolean} [assign_dp_from_sb]
 * @property {Object} [external]
 * @property {number} weight
 * @property {DebugInfo} [debug_info]
 * @property {Object} [dp_options]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [return_awb_number]
 * @property {string} [due_date]
 * @property {string} [packaging_name]
 * @property {Object} [b2c_buyer_details]
 * @property {string} [dp_sort_key]
 */
/**
 * @typedef AffiliateMeta
 * @property {string} [channel_order_id]
 * @property {string} [coupon_code]
 * @property {string} [channel_shipment_id]
 * @property {number} [quantity]
 * @property {number} [size_level_total_qty]
 * @property {string} [order_item_id]
 * @property {string} [box_type]
 * @property {number} [loyalty_discount]
 * @property {string} [due_date]
 * @property {number} [employee_discount]
 * @property {boolean} [is_priority]
 */
/**
 * @typedef PDFLinks
 * @property {string} [credit_note_url]
 * @property {string} [invoice_pos]
 * @property {string} [po_invoice]
 * @property {string} [label_a4]
 * @property {string} [label]
 * @property {string} [label_pos]
 * @property {string} label_type
 * @property {string} [invoice_a6]
 * @property {string} [invoice]
 * @property {string} [invoice_a4]
 * @property {string} [b2b]
 * @property {string} [label_a6]
 * @property {string} invoice_type
 */
/**
 * @typedef AffiliateDetails
 * @property {ShipmentMeta} shipment_meta
 * @property {string} [affiliate_id]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {string} [ad_id]
 * @property {string} affiliate_store_id
 * @property {PDFLinks} [pdf_links]
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_shipment_id
 * @property {string} [company_affiliate_tag]
 */
/**
 * @typedef Attributes
 * @property {string[]} [gender]
 * @property {string} [marketer_name]
 * @property {string} [name]
 * @property {string} [primary_color_hex]
 * @property {string} [marketer_address]
 * @property {string} [essential]
 * @property {string} [primary_material]
 * @property {string} [brand_name]
 * @property {string} [primary_color]
 */
/**
 * @typedef Item
 * @property {string} [webstore_product_url]
 * @property {string} [branch_url]
 * @property {boolean} [can_return]
 * @property {string} brand
 * @property {number} [l3_category]
 * @property {string} size
 * @property {Object} [meta]
 * @property {boolean} [can_cancel]
 * @property {string} slug_key
 * @property {string[]} [l1_category]
 * @property {number} [department_id]
 * @property {string[]} image
 * @property {number} [l1_category_id]
 * @property {number} brand_id
 * @property {string[]} [l2_category]
 * @property {string} [gender]
 * @property {number} item_id
 * @property {number} [l2_category_id]
 * @property {string} name
 * @property {string} [code]
 * @property {Attributes} attributes
 * @property {string} [last_updated_at]
 * @property {string} [l3_category_name]
 * @property {string} [color]
 */
/**
 * @typedef AffiliateBagDetails
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {number} [loyalty_discount]
 * @property {number} [employee_discount]
 * @property {string} affiliate_bag_id
 */
/**
 * @typedef BagGSTDetails
 * @property {number} sgst_tax_percentage
 * @property {number} gst_fee
 * @property {string} igst_gst_fee
 * @property {number} tax_collected_at_source
 * @property {string} gst_tag
 * @property {boolean} [is_default_hsn_code]
 * @property {number} brand_calculated_amount
 * @property {string} cgst_gst_fee
 * @property {string} hsn_code
 * @property {number} value_of_good
 * @property {string} sgst_gst_fee
 * @property {string} hsn_code_id
 * @property {number} gst_tax_percentage
 * @property {string} [gstin_code]
 * @property {number} cgst_tax_percentage
 * @property {number} igst_tax_percentage
 */
/**
 * @typedef Brand
 * @property {number} brand_id
 * @property {string} [start_date]
 * @property {boolean} [credit_note_allowed]
 * @property {number} [created_on]
 * @property {string} [logo]
 * @property {string} company
 * @property {number} [credit_note_expiry_days]
 * @property {number} [modified_on]
 * @property {string} [pickup_location]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} brand_name
 * @property {string} [invoice_prefix]
 * @property {string} [script_last_ran]
 */
/**
 * @typedef Dates
 * @property {string} [order_created]
 * @property {Object} [delivery_date]
 */
/**
 * @typedef StoreAddress
 * @property {string} city
 * @property {string} address_category
 * @property {string} created_at
 * @property {number} pincode
 * @property {string} phone
 * @property {string} country
 * @property {string} [landmark]
 * @property {string} country_code
 * @property {string} [version]
 * @property {number} longitude
 * @property {string} [address2]
 * @property {string} [area]
 * @property {string} [email]
 * @property {string} updated_at
 * @property {string} contact_person
 * @property {string} address1
 * @property {string} state
 * @property {string} address_type
 * @property {number} latitude
 */
/**
 * @typedef EInvoicePortalDetails
 * @property {string} [user]
 * @property {string} [username]
 * @property {string} [password]
 */
/**
 * @typedef Document
 * @property {string} legal_name
 * @property {string} ds_type
 * @property {string} [url]
 * @property {string} value
 * @property {boolean} verified
 */
/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */
/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */
/**
 * @typedef StoreEinvoice
 * @property {boolean} enabled
 * @property {string} [user]
 * @property {string} [username]
 * @property {string} [password]
 */
/**
 * @typedef StoreGstCredentials
 * @property {StoreEwaybill} [e_waybill]
 * @property {StoreEinvoice} [e_invoice]
 */
/**
 * @typedef StoreMeta
 * @property {string} display_name
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {Object} [product_return_config]
 * @property {StoreDocuments} [documents]
 * @property {Object} [ewaybill_portal_details]
 * @property {string} stage
 * @property {Object} [additional_contact_details]
 * @property {Object[]} [timing]
 * @property {string} [gst_number]
 * @property {string[]} [notification_emails]
 * @property {StoreGstCredentials} gst_credentials
 */
/**
 * @typedef Store
 * @property {string} city
 * @property {number} [parent_store_id]
 * @property {number} company_id
 * @property {boolean} [is_enabled_for_recon]
 * @property {boolean} [is_active]
 * @property {string} created_at
 * @property {string} pincode
 * @property {number} phone
 * @property {string} store_email
 * @property {string} [mall_area]
 * @property {string} country
 * @property {string} [order_integration_id]
 * @property {string} [store_active_from]
 * @property {StoreAddress} [store_address_json]
 * @property {string} fulfillment_channel
 * @property {string} [mall_name]
 * @property {StoreMeta} meta
 * @property {number} longitude
 * @property {string} [address2]
 * @property {string} location_type
 * @property {number} [packaging_material_count]
 * @property {number} [alohomora_user_id]
 * @property {string} [updated_at]
 * @property {Object} [brand_id]
 * @property {string} contact_person
 * @property {string} address1
 * @property {boolean} [is_archived]
 * @property {string} name
 * @property {string} s_id
 * @property {string} state
 * @property {string} [code]
 * @property {string} [vat_no]
 * @property {string} login_username
 * @property {number} latitude
 * @property {string[]} [brand_store_tags]
 */
/**
 * @typedef B2BPODetails
 * @property {string} [docker_number]
 * @property {number} [total_gst_percentage]
 * @property {number} [po_line_amount]
 * @property {boolean} [partial_can_ret]
 * @property {number} [item_base_price]
 * @property {number} [po_tax_amount]
 */
/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */
/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */
/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} enable_tracking
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_active
 * @property {boolean} is_returnable
 */
/**
 * @typedef ReturnConfig
 * @property {number} [time]
 * @property {string} [unit]
 * @property {boolean} [returnable]
 */
/**
 * @typedef Dimensions
 * @property {number} [height]
 * @property {number} [width]
 * @property {boolean} [is_default]
 * @property {number} [length]
 * @property {string} [unit]
 */
/**
 * @typedef Weight
 * @property {number} [shipping]
 * @property {boolean} [is_default]
 * @property {string} [unit]
 */
/**
 * @typedef Article
 * @property {Identifier} identifiers
 * @property {boolean} [is_set]
 * @property {Object} [raw_meta]
 * @property {ReturnConfig} [return_config]
 * @property {string} _id
 * @property {Dimensions} [dimensions]
 * @property {Weight} [weight]
 * @property {string} [code]
 * @property {Object} [esp_modified]
 * @property {string} size
 * @property {Object} [a_set]
 * @property {Object} [child_details]
 * @property {string} uid
 * @property {string} seller_identifier
 */
/**
 * @typedef BagDetailsPlatformResponse
 * @property {AffiliateDetails} [affiliate_details]
 * @property {string} [operational_status]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {string} journey_type
 * @property {BagStatusHistory} current_status
 * @property {Item} item
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {Prices} prices
 * @property {BagGSTDetails} gst_details
 * @property {string} [shipment_id]
 * @property {string[]} [tags]
 * @property {number} [line_number]
 * @property {string} [display_name]
 * @property {string} [order_integration_id]
 * @property {Brand} brand
 * @property {Object[]} [applied_promos]
 * @property {Dates} [dates]
 * @property {string} [identifier]
 * @property {Store} [ordering_store]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {BagMeta} [meta]
 * @property {Object[]} [reasons]
 * @property {ArticleDetails} [article_details]
 * @property {string} [seller_identifier]
 * @property {BagReturnableCancelableStatus} status
 * @property {number[]} [original_bag_list]
 * @property {number} [quantity]
 * @property {BagStatusHistory} current_operational_status
 * @property {string} [entity_type]
 * @property {number} [no_of_bags_order]
 * @property {Article} article
 * @property {number} b_id
 * @property {BagStatusHistory[]} bag_status
 * @property {string} [b_type]
 * @property {boolean} [restore_coupon]
 * @property {Object} [restore_promos]
 * @property {Object} [qc_required]
 * @property {number} [bag_update_time]
 * @property {Object} [parent_promo_bags]
 */
/**
 * @typedef ErrorResponse
 * @property {string} error
 * @property {string} message
 */
/**
 * @typedef Page1
 * @property {number} item_total
 * @property {number} current
 * @property {number} size
 * @property {string} page_type
 * @property {boolean} has_next
 */
/**
 * @typedef GetBagsPlatformResponse
 * @property {BagDetailsPlatformResponse[]} items
 * @property {Page1} page
 */
/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} shipment_ids
 */
/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [error]
 * @property {string} [shipment_id]
 * @property {number} [status]
 * @property {string} [message]
 */
/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */
/**
 * @typedef ErrorResponse1
 * @property {string} [error_trace]
 * @property {number} status
 * @property {string} message
 */
/**
 * @typedef StoreReassign
 * @property {string} [item_id]
 * @property {string} [fynd_order_id]
 * @property {string} [set_id]
 * @property {string} [affiliate_bag_id]
 * @property {number} store_id
 * @property {string} [mongo_article_id]
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_id]
 * @property {number} [bag_id]
 * @property {number[]} [reason_ids]
 */
/**
 * @typedef StoreReassignResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef Entities
 * @property {string} [affiliate_shipment_id]
 * @property {string} [id]
 * @property {string} [affiliate_bag_id]
 * @property {string} reason_text
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_id]
 */
/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} entity_type
 * @property {string} action
 * @property {Entities[]} entities
 * @property {string} action_type
 */
/**
 * @typedef Bags
 * @property {string} [affiliate_bag_id]
 * @property {number} [bag_id]
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_order_id]
 */
/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 */
/**
 * @typedef CheckResponse
 * @property {Bags[]} [bags]
 * @property {string} [affiliate_shipment_id]
 * @property {boolean} [is_bag_locked]
 * @property {OriginalFilter} [original_filter]
 * @property {boolean} [lock_status]
 * @property {boolean} [is_shipment_locked]
 * @property {string} [shipment_id]
 * @property {string} [affiliate_id]
 * @property {string} [status]
 */
/**
 * @typedef UpdateShipmentLockResponse
 * @property {CheckResponse[]} [check_response]
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef AnnouncementResponse
 * @property {string} [description]
 * @property {number} id
 * @property {string} [title]
 * @property {string} [platform_name]
 * @property {string} [platform_id]
 * @property {string} [logo_url]
 * @property {string} [to_datetime]
 * @property {string} [created_at]
 * @property {number} [company_id]
 * @property {string} [from_datetime]
 */
/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 */
/**
 * @typedef BaseResponse
 * @property {boolean} success
 * @property {string} message
 */
/**
 * @typedef Click2CallResponse
 * @property {boolean} status
 * @property {string} call_id
 */
/**
 * @typedef ProductsReasonsData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */
/**
 * @typedef ProductsReasonsFilters
 * @property {string} [identifier]
 * @property {number} [quantity]
 * @property {number} [line_number]
 */
/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters]
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
 * @typedef ReasonsData
 * @property {ProductsReasons[]} [products]
 * @property {EntitiesReasons[]} [entities]
 */
/**
 * @typedef Products
 * @property {string} [identifier]
 * @property {number} [quantity]
 * @property {number} [line_number]
 */
/**
 * @typedef ProductsDataUpdatesFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 */
/**
 * @typedef ProductsDataUpdates
 * @property {Object} [data]
 * @property {ProductsDataUpdatesFilters[]} [filters]
 */
/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
 */
/**
 * @typedef DataUpdates
 * @property {ProductsDataUpdates[]} [products]
 * @property {EntitiesDataUpdates[]} [entities]
 */
/**
 * @typedef ShipmentsRequest
 * @property {string} identifier
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products]
 * @property {DataUpdates} [data_updates]
 */
/**
 * @typedef StatuesRequest
 * @property {string} [status]
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [exclude_bags_next_state]
 */
/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [force_transition]
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [lock_after_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task]
 */
/**
 * @typedef ShipmentsResponse
 * @property {string} [identifier]
 * @property {Object} [final_state]
 * @property {string} [exception]
 * @property {string} [code]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 * @property {number} [status]
 * @property {string} [message]
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
 * @typedef AffiliateAppConfigMeta
 * @property {string} name
 * @property {string} value
 */
/**
 * @typedef AffiliateAppConfig
 * @property {string} owner
 * @property {string} token
 * @property {string} [description]
 * @property {string} created_at
 * @property {string} id
 * @property {string} secret
 * @property {string} updated_at
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} name
 */
/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */
/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */
/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */
/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */
/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */
/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 */
/**
 * @typedef AffiliateConfig
 * @property {AffiliateAppConfig} [app]
 * @property {AffiliateInventoryConfig} [inventory]
 */
/**
 * @typedef Affiliate
 * @property {AffiliateConfig} [config]
 * @property {string} id
 * @property {string} token
 */
/**
 * @typedef AffiliateStoreIdMapping
 * @property {number} store_id
 * @property {string} marketplace_store_id
 */
/**
 * @typedef OrderConfig
 * @property {string} [article_lookup]
 * @property {Affiliate} affiliate
 * @property {string} [bag_end_state]
 * @property {string} [store_lookup]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {boolean} [create_user]
 */
/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */
/**
 * @typedef AffiliateBag
 * @property {Object} identifier
 * @property {number} amount_paid
 * @property {string} affiliate_store_id
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} avl_qty
 * @property {Object} affiliate_meta
 * @property {number} company_id
 * @property {string} sku
 * @property {number} item_id
 * @property {number} delivery_charge
 * @property {string} seller_identifier
 * @property {number} store_id
 * @property {number} discount
 * @property {string} modified_on
 * @property {string} fynd_store_id
 * @property {number} price_effective
 * @property {number} transfer_price
 * @property {string} hsn_code_id
 * @property {number} unit_price
 * @property {string} item_size
 * @property {number} price_marked
 * @property {string} _id
 * @property {number} quantity
 */
/**
 * @typedef OrderUser
 * @property {string} email
 * @property {number} phone
 * @property {string} city
 * @property {string} [address1]
 * @property {string} last_name
 * @property {string} first_name
 * @property {string} pincode
 * @property {number} mobile
 * @property {string} [address2]
 * @property {string} state
 * @property {string} country
 */
/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
 */
/**
 * @typedef OrderPriority
 * @property {number} [fulfilment_priority]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [affiliate_priority_code]
 */
/**
 * @typedef ArticleDetails1
 * @property {Object} dimension
 * @property {number} brand_id
 * @property {Object} attributes
 * @property {Object} weight
 * @property {string} _id
 * @property {Object} category
 * @property {number} quantity
 */
/**
 * @typedef LocationDetails
 * @property {number} fulfillment_id
 * @property {ArticleDetails1[]} articles
 * @property {string} fulfillment_type
 */
/**
 * @typedef ShipmentDetails
 * @property {string} affiliate_shipment_id
 * @property {string} [box_type]
 * @property {number} [dp_id]
 * @property {Object} [meta]
 * @property {number} fulfillment_id
 * @property {ArticleDetails1[]} articles
 * @property {number} shipments
 */
/**
 * @typedef ShipmentConfig
 * @property {string} journey
 * @property {string} identifier
 * @property {string} to_pincode
 * @property {LocationDetails} [location_details]
 * @property {string} action
 * @property {string} source
 * @property {ShipmentDetails[]} shipment
 * @property {string} payment_mode
 */
/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */
/**
 * @typedef OrderInfo
 * @property {AffiliateBag[]} bags
 * @property {number} cod_charges
 * @property {string} [coupon]
 * @property {string} payment_mode
 * @property {number} delivery_charges
 * @property {UserData} user
 * @property {number} discount
 * @property {Object} items
 * @property {OrderUser} shipping_address
 * @property {OrderUser} billing_address
 * @property {string} [affiliate_order_id]
 * @property {OrderPriority} [order_priority]
 * @property {ShipmentData} [shipment]
 * @property {Object} [payment]
 * @property {number} order_value
 */
/**
 * @typedef CreateOrderPayload
 * @property {string} affiliate_id
 * @property {OrderConfig} order_config
 * @property {OrderInfo} order_info
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
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef ActionInfo
 * @property {string} description
 * @property {number} id
 * @property {string} slug
 * @property {string} display_text
 */
/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */
/**
 * @typedef HistoryDict
 * @property {string} [l3_detail]
 * @property {string} [l1_detail]
 * @property {string} user
 * @property {string} [ticket_url]
 * @property {string} type
 * @property {string} [l2_detail]
 * @property {string} createdat
 * @property {string} [ticket_id]
 * @property {number} [bag_id]
 * @property {string} message
 */
/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} [activity_history]
 */
/**
 * @typedef ErrorDetail
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef SmsDataPayload
 * @property {number} amount_paid
 * @property {string} country_code
 * @property {string} message
 * @property {string} order_id
 * @property {string} brand_name
 * @property {number} shipment_id
 * @property {number} phone_number
 * @property {string} payment_mode
 * @property {string} customer_name
 */
/**
 * @typedef SendSmsPayload
 * @property {SmsDataPayload} [data]
 * @property {number} bag_id
 * @property {string} slug
 */
/**
 * @typedef Meta
 * @property {string} [state_manager_used]
 * @property {number} [kafka_emission_status]
 */
/**
 * @typedef ShipmentDetail
 * @property {number[]} [bag_list]
 * @property {string} [remarks]
 * @property {number} id
 * @property {string} [shipment_id]
 * @property {Meta} meta
 * @property {string} [status]
 */
/**
 * @typedef OrderDetails
 * @property {string} [created_at]
 * @property {string} [fynd_order_id]
 */
/**
 * @typedef OrderStatusData
 * @property {string[]} [errors]
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {OrderDetails} order_details
 */
/**
 * @typedef OrderStatusResult
 * @property {string} success
 * @property {OrderStatusData[]} [result]
 */
/**
 * @typedef ManualAssignDPToShipment
 * @property {string} order_type
 * @property {number} dp_id
 * @property {string} qc_required
 * @property {string[]} [shipment_ids]
 */
/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string[]} [errors]
 * @property {string} success
 */
/**
 * @typedef Tax
 * @property {Object[]} [breakup]
 * @property {string} name
 * @property {Object} amount
 * @property {number} rate
 */
/**
 * @typedef Charge
 * @property {Object} amount
 * @property {string} [code]
 * @property {Tax} [tax]
 * @property {string} type
 * @property {string} name
 */
/**
 * @typedef TaxInfo
 * @property {string} [gstin]
 * @property {string} [b2b_gstin_number]
 */
/**
 * @typedef ShippingInfo
 * @property {string} [floor_no]
 * @property {string} primary_email
 * @property {Object} [geo_location]
 * @property {string} first_name
 * @property {string} country
 * @property {string} [middle_name]
 * @property {string} city
 * @property {string} address1
 * @property {string} [title]
 * @property {string} [country_code]
 * @property {string} [customer_code]
 * @property {string} primary_mobile_number
 * @property {string} [address2]
 * @property {string} [landmark]
 * @property {string} [address_type]
 * @property {string} [alternate_email]
 * @property {string} [state_code]
 * @property {string} pincode
 * @property {string} [external_customer_code]
 * @property {Object[]} [slot]
 * @property {string} [alternate_mobile_number]
 * @property {string} [gender]
 * @property {string} [house_no]
 * @property {string} [last_name]
 * @property {string} state
 * @property {string} [shipping_type]
 */
/**
 * @typedef BillingInfo
 * @property {string} [floor_no]
 * @property {string} primary_email
 * @property {string} first_name
 * @property {string} country
 * @property {string} [middle_name]
 * @property {string} city
 * @property {string} address1
 * @property {string} [title]
 * @property {string} [country_code]
 * @property {string} [customer_code]
 * @property {string} primary_mobile_number
 * @property {string} [address2]
 * @property {string} [alternate_email]
 * @property {string} [state_code]
 * @property {string} pincode
 * @property {string} [external_customer_code]
 * @property {string} [alternate_mobile_number]
 * @property {string} [gender]
 * @property {string} [house_no]
 * @property {string} [last_name]
 * @property {string} state
 */
/**
 * @typedef ProcessingDates
 * @property {Object} [dp_pickup_slot]
 * @property {string} [pack_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [dispatch_by_date]
 * @property {string} [dispatch_after_date]
 * @property {string} [confirm_by_date]
 */
/**
 * @typedef LineItem
 * @property {Charge[]} [charges]
 * @property {string} [external_line_id]
 * @property {string} [custom_messasge]
 * @property {string} seller_identifier
 * @property {number} [quantity]
 * @property {Object} [meta]
 */
/**
 * @typedef Shipment
 * @property {number} [priority]
 * @property {ProcessingDates} [processing_dates]
 * @property {string} [external_shipment_id]
 * @property {number} location_id
 * @property {LineItem[]} line_items
 * @property {Object} [meta]
 */
/**
 * @typedef PaymentMethod
 * @property {string} collect_by
 * @property {number} amount
 * @property {string} refund_by
 * @property {string} mode
 * @property {Object} [meta]
 * @property {string} name
 * @property {Object} [transaction_data]
 */
/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */
/**
 * @typedef CreateOrderAPI
 * @property {Charge[]} charges
 * @property {Object} [currency_info]
 * @property {TaxInfo} [tax_info]
 * @property {ShippingInfo} shipping_info
 * @property {string} [external_order_id]
 * @property {BillingInfo} billing_info
 * @property {string} [external_creation_date]
 * @property {Object} [meta]
 * @property {Shipment[]} shipments
 * @property {PaymentInfo} payment_info
 */
/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [request_id]
 * @property {string} [exception]
 * @property {string} [code]
 * @property {string} [stack_trace]
 * @property {string} [meta]
 * @property {Object} [info]
 * @property {number} status
 * @property {string} message
 */
/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
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
 * @property {string} [mode_of_payment]
 * @property {PaymentMethods[]} [payment_methods]
 */
/**
 * @typedef CreateChannelConfig
 * @property {DpConfiguration} [dp_configuration]
 * @property {string[]} [lock_states]
 * @property {boolean} [location_reassignment]
 * @property {string} [shipment_assignment]
 * @property {Object} [logo_url]
 * @property {CreateChannelPaymentInfo} [payment_info]
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
 * @property {string} manifest_id
 * @property {string} consent_url
 */
/**
 * @typedef PlatformOrderUpdate
 * @property {string} order_id
 */
/**
 * @typedef ResponseDetail
 * @property {boolean} [success]
 * @property {string[]} [message]
 */
/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */
/**
 * @typedef OrderStatus
 * @property {string} end_date
 * @property {FyndOrderIdList[]} [order_details]
 * @property {string} start_date
 * @property {number} mobile
 */
/**
 * @typedef GetSearchWordsData
 * @property {Object} [result]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {string} [uid]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 */
/**
 * @typedef GetSearchWordsDetailResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData} [items]
 */
/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */
/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */
/**
 * @typedef CreateSearchKeyword
 * @property {SearchKeywordResult} result
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 */
/**
 * @typedef GetSearchWordsResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData[]} [items]
 */
/**
 * @typedef GetAutocompleteWordsData
 * @property {Object[]} [results]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {string} [uid]
 * @property {string[]} [words]
 */
/**
 * @typedef GetAutocompleteWordsResponse
 * @property {Page} [page]
 * @property {GetAutocompleteWordsData[]} [items]
 */
/**
 * @typedef AutocompletePageAction
 * @property {Object} [query]
 * @property {Object} [params]
 * @property {string} [url]
 * @property {string} [type]
 */
/**
 * @typedef AutocompleteAction
 * @property {AutocompletePageAction} [page]
 * @property {string} [type]
 */
/**
 * @typedef Media
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {string} [type]
 */
/**
 * @typedef AutocompleteResult
 * @property {string} [display]
 * @property {AutocompleteAction} [action]
 * @property {Media} [logo]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef CreateAutocompleteKeyword
 * @property {AutocompleteResult[]} [results]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 */
/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {Object[]} [results]
 */
/**
 * @typedef ProductBundleItem
 * @property {number} product_uid
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {number} max_quantity
 * @property {boolean} [allow_remove]
 * @property {number} min_quantity
 */
/**
 * @typedef GetProductBundleCreateResponse
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {string} slug
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} [id]
 * @property {string} choice
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} name
 * @property {boolean} is_active
 */
/**
 * @typedef GetProductBundleListingResponse
 * @property {Page} [page]
 * @property {GetProductBundleCreateResponse[]} [items]
 */
/**
 * @typedef ProductBundleRequest
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {string} slug
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} choice
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} name
 * @property {boolean} is_active
 */
/**
 * @typedef LimitedProductData
 * @property {string[]} [images]
 * @property {number} [quantity]
 * @property {string} [item_code]
 * @property {string} [slug]
 * @property {string[]} [sizes]
 * @property {Object} [attributes]
 * @property {Object} [identifier]
 * @property {number} [uid]
 * @property {string} [short_description]
 * @property {string} [country_of_origin]
 * @property {string} [name]
 * @property {Object} [price]
 */
/**
 * @typedef Size
 * @property {string} [display]
 * @property {boolean} [is_available]
 * @property {string} [value]
 * @property {number} [quantity]
 */
/**
 * @typedef Price
 * @property {string} [currency]
 * @property {number} [min_effective]
 * @property {number} [min_marked]
 * @property {number} [max_effective]
 * @property {number} [max_marked]
 */
/**
 * @typedef GetProducts
 * @property {LimitedProductData} [product_details]
 * @property {number} [product_uid]
 * @property {Size[]} [sizes]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {number} [max_quantity]
 * @property {boolean} [allow_remove]
 * @property {Price} [price]
 * @property {number} [min_quantity]
 */
/**
 * @typedef GetProductBundleResponse
 * @property {boolean} [same_store_assignment]
 * @property {GetProducts[]} [products]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} [choice]
 * @property {string} [name]
 * @property {boolean} [is_active]
 */
/**
 * @typedef ProductBundleUpdateRequest
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {string} slug
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} choice
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} name
 * @property {boolean} is_active
 */
/**
 * @typedef ListSizeGuide
 * @property {Object} [page]
 * @property {Object[]} [items]
 */
/**
 * @typedef Guide
 * @property {Meta} [meta]
 */
/**
 * @typedef ValidateSizeGuide
 * @property {Guide} [guide]
 * @property {string} [created_on]
 * @property {string} [subtitle]
 * @property {Object} [created_by]
 * @property {boolean} [active]
 * @property {string} [tag]
 * @property {number} [company_id]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} [description]
 * @property {string} title
 * @property {string} name
 * @property {number} [brand_id]
 * @property {string} [image]
 */
/**
 * @typedef SizeGuideResponse
 * @property {Object} [guide]
 * @property {string} [created_on]
 * @property {number} [brand_id]
 * @property {string} [subtitle]
 * @property {boolean} [active]
 * @property {number} [company_id]
 * @property {string} [tag]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} [title]
 * @property {string} [name]
 * @property {Object} [created_by]
 */
/**
 * @typedef SEOData
 * @property {Object} [description]
 * @property {Object} [title]
 */
/**
 * @typedef MOQData
 * @property {number} [minimum]
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 */
/**
 * @typedef OwnerAppItemResponse
 * @property {SEOData} [seo]
 * @property {boolean} [is_gift]
 * @property {MOQData} [moq]
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 */
/**
 * @typedef ApplicationItemSEO
 * @property {Object} [description]
 * @property {Object} [title]
 */
/**
 * @typedef ApplicationItemMOQ
 * @property {number} [minimum]
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 */
/**
 * @typedef MetaFields
 * @property {Object} key
 * @property {Object} value
 */
/**
 * @typedef ApplicationItemMeta
 * @property {ApplicationItemSEO} [seo]
 * @property {boolean} [is_gift]
 * @property {ApplicationItemMOQ} [moq]
 * @property {Object} [alt_text]
 * @property {MetaFields[]} [_custom_meta]
 * @property {boolean} [is_cod]
 * @property {Object} [_custom_json]
 */
/**
 * @typedef SuccessResponse1
 * @property {number} [uid]
 * @property {boolean} [success]
 */
/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} data
 * @property {Object[]} [condition]
 * @property {Object[]} [values]
 */
/**
 * @typedef PageResponseType
 * @property {number} next
 * @property {boolean} has_next
 * @property {number} current
 * @property {number} total_count
 */
/**
 * @typedef GetConfigResponse
 * @property {Object[]} data
 * @property {PageResponseType} page
 */
/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */
/**
 * @typedef AttributeDetailsGroup
 * @property {string} [slug]
 * @property {string} [key]
 * @property {string} display_type
 * @property {string} [logo]
 * @property {string} [unit]
 * @property {number} priority
 * @property {string} name
 * @property {boolean} is_active
 */
/**
 * @typedef AppConfigurationDetail
 * @property {string} slug
 * @property {boolean} is_default
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} app_id
 * @property {string} [logo]
 * @property {string[]} [template_slugs]
 * @property {number} priority
 * @property {string} [name]
 * @property {boolean} is_active
 */
/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */
/**
 * @typedef AppConfigurationsSort
 * @property {boolean} is_default
 * @property {string} key
 * @property {string} [logo]
 * @property {string} app_id
 * @property {number} priority
 * @property {string} default_key
 * @property {string} [name]
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
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [compare]
 * @property {Object} [detail]
 * @property {Object} [similar]
 * @property {Object} [variant]
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
 * @property {Object[]} [units]
 * @property {string[]} [filter_types]
 * @property {string} [display]
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
 * @typedef GetCatalogConfigurationMetaData
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {MetaDataListingResponse} [listing]
 */
/**
 * @typedef ProductSize
 * @property {number} min
 * @property {number} max
 */
/**
 * @typedef ConfigurationProductConfig
 * @property {string} key
 * @property {string} [subtitle]
 * @property {string} [logo]
 * @property {ProductSize} [size]
 * @property {number} priority
 * @property {string} [title]
 * @property {boolean} is_active
 */
/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */
/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} key
 * @property {string} display_type
 * @property {string} [logo]
 * @property {ProductSize} size
 * @property {number} priority
 * @property {string} name
 * @property {boolean} is_active
 */
/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */
/**
 * @typedef ConfigurationProduct
 * @property {ConfigurationProductSimilar} similar
 * @property {ConfigurationProductVariant} variant
 */
/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} key
 * @property {string} [logo]
 * @property {number} priority
 * @property {string} [name]
 * @property {boolean} is_active
 */
/**
 * @typedef ConfigurationListingSort
 * @property {string} default_key
 * @property {ConfigurationListingSortConfig[]} [config]
 */
/**
 * @typedef ConfigurationBucketPoints
 * @property {string} [display]
 * @property {number} [start]
 * @property {number} [end]
 */
/**
 * @typedef ConfigurationListingFilterValue
 * @property {string} [condition]
 * @property {string} [sort]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {Object} [map]
 * @property {Object[]} [map_values]
 * @property {string} [value]
 */
/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} [display_name]
 * @property {string} type
 * @property {string} key
 * @property {string} [logo]
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {number} priority
 * @property {string} [name]
 * @property {boolean} is_active
 */
/**
 * @typedef ConfigurationListingFilter
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 * @property {boolean} allow_single
 */
/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingSort} sort
 * @property {ConfigurationListingFilter} filter
 */
/**
 * @typedef AppCatalogConfiguration
 * @property {string} [config_id]
 * @property {ConfigurationProduct} [product]
 * @property {string} config_type
 * @property {string} [type]
 * @property {string} [created_on]
 * @property {Object} [created_by]
 * @property {string} app_id
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {ConfigurationListing} [listing]
 */
/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef AppConfiguration
 * @property {string} [config_id]
 * @property {ConfigurationProduct} [product]
 * @property {string} config_type
 * @property {string} [type]
 * @property {string} [created_on]
 * @property {Object} [created_by]
 * @property {string} app_id
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {ConfigurationListing} [listing]
 */
/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [sort]
 * @property {Object} [filter]
 */
/**
 * @typedef EntityConfiguration
 * @property {string} [config_id]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} config_type
 * @property {string} app_id
 * @property {string} [id]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 */
/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef ProductSortOn
 * @property {boolean} [is_selected]
 * @property {string} [value]
 * @property {string} [name]
 */
/**
 * @typedef ProductFiltersKey
 * @property {string} [kind]
 * @property {string} [logo]
 * @property {string[]} [operators]
 * @property {string} display
 * @property {string} name
 */
/**
 * @typedef ProductFiltersValue
 * @property {string} [query_format]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {number} [selected_min]
 * @property {string} [display_format]
 * @property {number} [count]
 * @property {number} [min]
 * @property {boolean} is_selected
 * @property {number} [max]
 * @property {number} [selected_max]
 * @property {string} display
 * @property {Object} value
 */
/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values
 */
/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {Object} operators
 * @property {ProductFilters[]} [filters]
 */
/**
 * @typedef CollectionQuery
 * @property {Object[]} value
 * @property {string} op
 * @property {string} attribute
 */
/**
 * @typedef Media1
 * @property {string} url
 * @property {string} [type]
 * @property {Object} [meta]
 */
/**
 * @typedef BannerImage
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 */
/**
 * @typedef ImageUrls
 * @property {BannerImage} [landscape]
 * @property {BannerImage} [portrait]
 */
/**
 * @typedef GetCollectionDetailNest
 * @property {boolean} [allow_sort]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {Object} [cron]
 * @property {CollectionQuery[]} [query]
 * @property {Action} [action]
 * @property {Media1} [logo]
 * @property {number} [priority]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {string} [description]
 * @property {string[]} [visible_facets_keys]
 * @property {ImageUrls} [banners]
 * @property {Object} [meta]
 * @property {string[]} [tag]
 * @property {string} [uid]
 * @property {Object} [_schedule]
 * @property {boolean} [allow_facets]
 */
/**
 * @typedef CollectionListingFilterType
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */
/**
 * @typedef CollectionListingFilterTag
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */
/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterType[]} [type]
 * @property {CollectionListingFilterTag[]} [tags]
 */
/**
 * @typedef GetCollectionListingResponse
 * @property {Page} [page]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {CollectionListingFilter} [filters]
 */
/**
 * @typedef CollectionImage
 * @property {string} aspect_ratio
 * @property {string} url
 */
/**
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
 */
/**
 * @typedef CollectionBanner
 * @property {CollectionImage} landscape
 * @property {CollectionImage} portrait
 */
/**
 * @typedef UserInfo
 * @property {string} [user_id]
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [username]
 */
/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 */
/**
 * @typedef CollectionSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef CreateCollection
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_visible]
 * @property {string} name
 * @property {boolean} [is_active]
 * @property {string} [sort_on]
 * @property {CollectionQuery[]} [query]
 * @property {CollectionImage} logo
 * @property {number} [priority]
 * @property {string} slug
 * @property {string} type
 * @property {CollectionBadge} [badge]
 * @property {string} app_id
 * @property {boolean} [published]
 * @property {string} [description]
 * @property {string[]} [visible_facets_keys]
 * @property {CollectionBanner} banners
 * @property {UserInfo} [created_by]
 * @property {string[]} [tags]
 * @property {SeoDetail} [seo]
 * @property {Object} [meta]
 * @property {Object} [_custom_json]
 * @property {UserInfo} [modified_by]
 * @property {Object} [_locale_language]
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [allow_facets]
 */
/**
 * @typedef CollectionCreateResponse
 * @property {boolean} [allow_sort]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {Object} [cron]
 * @property {CollectionQuery[]} [query]
 * @property {string} [sort_on]
 * @property {BannerImage} [logo]
 * @property {number} [priority]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {string} [description]
 * @property {string[]} [visible_facets_keys]
 * @property {ImageUrls} [banners]
 * @property {Object} [meta]
 * @property {string[]} [tag]
 * @property {Object} [_schedule]
 * @property {boolean} [allow_facets]
 */
/**
 * @typedef CollectionDetailResponse
 * @property {Object} [cron]
 * @property {Object} [_schedule]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [meta]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {Media1} [logo]
 * @property {string[]} [tag]
 * @property {boolean} [allow_sort]
 * @property {number} [priority]
 * @property {string} [description]
 * @property {boolean} [allow_facets]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef UpdateCollection
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_visible]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {CollectionQuery[]} [query]
 * @property {string} [sort_on]
 * @property {CollectionImage} [logo]
 * @property {number} [priority]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {CollectionBadge} [badge]
 * @property {boolean} [published]
 * @property {string} [description]
 * @property {string[]} [visible_facets_keys]
 * @property {CollectionBanner} [banners]
 * @property {string[]} [tags]
 * @property {SeoDetail} [seo]
 * @property {Object} [meta]
 * @property {Object} [_custom_json]
 * @property {UserInfo} [modified_by]
 * @property {Object} [_locale_language]
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [allow_facets]
 */
/**
 * @typedef ProductDetailAttribute
 * @property {string} [key]
 * @property {string} [value]
 * @property {string} [type]
 */
/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title]
 * @property {ProductDetailAttribute[]} [details]
 */
/**
 * @typedef ProductBrand
 * @property {Action} [action]
 * @property {Media1} [logo]
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef Price1
 * @property {number} [min]
 * @property {string} [currency_symbol]
 * @property {number} [max]
 * @property {string} [currency_code]
 */
/**
 * @typedef ProductListingPrice
 * @property {Price1} [marked]
 * @property {Price1} [effective]
 */
/**
 * @typedef ProductListingDetail
 * @property {boolean} [sellable]
 * @property {string} [product_online_date]
 * @property {Object} [promo_meta]
 * @property {Media1[]} [medias]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [name]
 * @property {string} [discount]
 * @property {string} [color]
 * @property {string} [item_code]
 * @property {number} [rating]
 * @property {string} [image_nature]
 * @property {string} [type]
 * @property {string} slug
 * @property {string} [item_type]
 * @property {string[]} [tryouts]
 * @property {string[]} [similars]
 * @property {string} [description]
 * @property {ProductBrand} [brand]
 * @property {Object} [teaser_tag]
 * @property {Object} [attributes]
 * @property {boolean} [has_variant]
 * @property {string[]} [highlights]
 * @property {number} [rating_count]
 * @property {number} [uid]
 * @property {string} [short_description]
 * @property {ProductListingPrice} [price]
 */
/**
 * @typedef GetCollectionItemsResponse
 * @property {Page} [page]
 * @property {ProductListingDetail[]} [items]
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef ItemQueryForUserCollection
 * @property {string} [action]
 * @property {number} [item_id]
 */
/**
 * @typedef CollectionItemRequest
 * @property {CollectionQuery[]} [query]
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {string} [type]
 */
/**
 * @typedef UpdatedResponse
 * @property {string} [message]
 * @property {number[]} [items_not_updated]
 */
/**
 * @typedef CatalogInsightItem
 * @property {number} [sellable_count]
 * @property {number} [out_of_stock_count]
 * @property {number} [count]
 */
/**
 * @typedef CatalogInsightBrand
 * @property {number} [available_sizes]
 * @property {number} [total_sizes]
 * @property {number} [article_freshness]
 * @property {number} [available_articles]
 * @property {string} [name]
 * @property {number} [total_articles]
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
 * @property {number[]} [brand_ids]
 * @property {string} [platform]
 * @property {number} [company_id]
 * @property {string} opt_level
 * @property {boolean} [enabled]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef CompanyOptIn
 * @property {string} platform
 * @property {number[]} brand_ids
 * @property {number} created_on
 * @property {number} company_id
 * @property {string} opt_level
 * @property {boolean} enabled
 * @property {number} modified_on
 * @property {number[]} store_ids
 * @property {Object} [modified_by]
 * @property {Object} [created_by]
 */
/**
 * @typedef GetOptInPlatform
 * @property {Page} page
 * @property {CompanyOptIn[]} items
 */
/**
 * @typedef OptinCompanyDetail
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef CompanyBrandDetail
 * @property {string} [brand_name]
 * @property {number} [company_id]
 * @property {number} [total_article]
 * @property {number} [brand_id]
 */
/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {Page} [page]
 * @property {CompanyBrandDetail[]} [items]
 */
/**
 * @typedef OptinCompanyMetrics
 * @property {number} [brand]
 * @property {string} [company]
 * @property {number} [store]
 */
/**
 * @typedef StoreDetail
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {Object} [timing]
 * @property {string} [created_on]
 * @property {string} [store_code]
 * @property {number} [company_id]
 * @property {Object[]} [documents]
 * @property {Object} [manager]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {Object} [address]
 * @property {Object[]} [additional_contacts]
 * @property {string} [name]
 */
/**
 * @typedef OptinStoreDetails
 * @property {Page} [page]
 * @property {StoreDetail[]} [items]
 */
/**
 * @typedef AttributeMasterFilter
 * @property {number} [priority]
 * @property {string[]} [depends_on]
 * @property {boolean} indexing
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
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */
/**
 * @typedef AttributeSchemaRange
 * @property {number} [min]
 * @property {number} [max]
 */
/**
 * @typedef AttributeMaster
 * @property {string} type
 * @property {boolean} [multi]
 * @property {string} [format]
 * @property {boolean} [mandatory]
 * @property {string[]} [allowed_values]
 * @property {AttributeSchemaRange} [range]
 */
/**
 * @typedef GenderDetail
 * @property {boolean} [is_nested]
 * @property {AttributeMasterFilter} [filters]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [slug]
 * @property {AttributeMasterMeta} [meta]
 * @property {AttributeMasterDetails} [details]
 * @property {string} [logo]
 * @property {string} [id]
 * @property {string[]} [departments]
 * @property {AttributeMaster} [schema]
 * @property {string} [description]
 * @property {string} [name]
 */
/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Page} [page]
 * @property {Object[]} [items]
 */
/**
 * @typedef PTErrorResponse
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 * @property {Object} [errors]
 * @property {string} [code]
 */
/**
 * @typedef UserSerializer
 * @property {string} [username]
 * @property {string} [_id]
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [contact]
 */
/**
 * @typedef GetDepartment
 * @property {number} [page_no]
 * @property {string} [slug]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [item_type]
 * @property {string} [logo]
 * @property {number} [priority_order]
 * @property {string} [search]
 * @property {string[]} [synonyms]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {number} [page_size]
 * @property {UserSerializer} [modified_by]
 * @property {string} [name]
 * @property {boolean} [is_active]
 */
/**
 * @typedef DepartmentsResponse
 * @property {Page} [page]
 * @property {GetDepartment[]} [items]
 */
/**
 * @typedef DepartmentErrorResponse
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 * @property {Object} [errors]
 * @property {string} [code]
 */
/**
 * @typedef DepartmentCreateUpdate
 * @property {string} [slug]
 * @property {string} logo
 * @property {number} priority_order
 * @property {Object} [_custom_json]
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 * @property {string} [_cls]
 * @property {Object} [platforms]
 * @property {string} name
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 */
/**
 * @typedef DepartmentCreateResponse
 * @property {string} message
 * @property {number} uid
 */
/**
 * @typedef DepartmentCreateErrorResponse
 * @property {string} [error]
 */
/**
 * @typedef UserDetail
 * @property {boolean} [super_user]
 * @property {string} username
 * @property {string} user_id
 * @property {string} [contact]
 */
/**
 * @typedef DepartmentModel
 * @property {UserDetail} [verified_by]
 * @property {Object} [_id]
 * @property {string} [verified_on]
 * @property {boolean} [is_active]
 * @property {Object} [slug]
 * @property {string} created_on
 * @property {string} logo
 * @property {number} priority_order
 * @property {Object} [_custom_json]
 * @property {Object[]} [synonyms]
 * @property {string} modified_on
 * @property {number} [uid]
 * @property {UserDetail} [modified_by]
 * @property {Object} [_cls]
 * @property {Object} name
 * @property {UserDetail} [created_by]
 */
/**
 * @typedef ProductTemplate
 * @property {boolean} is_physical
 * @property {string[]} [categories]
 * @property {Object[]} [attributes_schema]
 * @property {string} slug
 * @property {boolean} [is_expirable]
 * @property {string} [created_on]
 * @property {Object} [created_by]
 * @property {string[]} [attributes]
 * @property {string} [tag]
 * @property {string} [logo]
 * @property {string[]} [departments]
 * @property {boolean} [is_archived]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} [description]
 * @property {string} [name]
 * @property {boolean} [is_active]
 */
/**
 * @typedef TemplatesResponse
 * @property {Page} [page]
 * @property {ProductTemplate} [items]
 */
/**
 * @typedef Properties
 * @property {Object} [custom_order]
 * @property {Object} [return_config]
 * @property {Object} [name]
 * @property {Object} [is_active]
 * @property {Object} [size_guide]
 * @property {Object} [item_code]
 * @property {Object} [command]
 * @property {Object} [product_group_tag]
 * @property {Object} [multi_size]
 * @property {Object} [hsn_code]
 * @property {Object} [currency]
 * @property {Object} [slug]
 * @property {Object} [trader]
 * @property {Object} [category_slug]
 * @property {Object} [item_type]
 * @property {Object} [sizes]
 * @property {Object} [variants]
 * @property {Object} [trader_type]
 * @property {Object} [product_publish]
 * @property {Object} [description]
 * @property {Object} [media]
 * @property {Object} [tags]
 * @property {Object} [teaser_tag]
 * @property {Object} [highlights]
 * @property {Object} [is_dependent]
 * @property {Object} [short_description]
 * @property {Object} [brand_uid]
 * @property {Object} [no_of_boxes]
 * @property {Object} [country_of_origin]
 */
/**
 * @typedef GlobalValidation
 * @property {string} [type]
 * @property {Object} [definitions]
 * @property {Properties} [properties]
 * @property {string[]} [required]
 * @property {string} [description]
 * @property {string} [title]
 */
/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */
/**
 * @typedef TemplateDetails
 * @property {boolean} is_physical
 * @property {string[]} [categories]
 * @property {Object[]} [attributes_schema]
 * @property {string} slug
 * @property {boolean} [is_expirable]
 * @property {string[]} [attributes]
 * @property {string} [tag]
 * @property {string} [logo]
 * @property {string} [id]
 * @property {string[]} [departments]
 * @property {boolean} [is_archived]
 * @property {string} [description]
 * @property {string} [name]
 * @property {boolean} [is_active]
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
 * @typedef ProductDownloadItemsData
 * @property {string[]} [brand]
 * @property {string} [type]
 * @property {string[]} [templates]
 */
/**
 * @typedef VerifiedBy
 * @property {string} [username]
 * @property {string} [user_id]
 */
/**
 * @typedef ProductDownloadsItems
 * @property {number} [seller_id]
 * @property {string} [completed_on]
 * @property {string} [url]
 * @property {string} [status]
 * @property {string} [id]
 * @property {string} [task_id]
 * @property {string} [trigger_on]
 * @property {ProductDownloadItemsData} [data]
 * @property {Object} [template_tags]
 * @property {VerifiedBy} [created_by]
 */
/**
 * @typedef ProductDownloadsResponse
 * @property {Page} [page]
 * @property {ProductDownloadsItems} [items]
 */
/**
 * @typedef ProductConfigurationDownloads
 * @property {Object[]} [data]
 * @property {boolean} [multivalue]
 */
/**
 * @typedef Hierarchy
 * @property {number} l1
 * @property {number} l2
 * @property {number} department
 */
/**
 * @typedef CategoryMappingValues
 * @property {number} [catalog_id]
 * @property {string} name
 */
/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [google]
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [facebook]
 */
/**
 * @typedef Media2
 * @property {string} landscape
 * @property {string} logo
 * @property {string} portrait
 */
/**
 * @typedef Category
 * @property {Hierarchy[]} [hierarchy]
 * @property {string} [slug]
 * @property {string} [created_on]
 * @property {number} [priority]
 * @property {Object} [created_by]
 * @property {string[]} [tryouts]
 * @property {string} [id]
 * @property {number[]} departments
 * @property {CategoryMapping} [marketplaces]
 * @property {Media2} [media]
 * @property {number} [uid]
 * @property {number} level
 * @property {string[]} [synonyms]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {boolean} is_active
 */
/**
 * @typedef CategoryResponse
 * @property {Page} [page]
 * @property {Category[]} [items]
 */
/**
 * @typedef CategoryRequestBody
 * @property {Hierarchy[]} [hierarchy]
 * @property {string} [slug]
 * @property {string} name
 * @property {string[]} [tryouts]
 * @property {number[]} departments
 * @property {CategoryMapping} [marketplaces]
 * @property {string[]} [synonyms]
 * @property {number} level
 * @property {number} [priority]
 * @property {Media2} [media]
 * @property {boolean} is_active
 */
/**
 * @typedef CategoryCreateResponse
 * @property {string} [message]
 * @property {number} [uid]
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
 * @typedef ReturnConfigResponse
 * @property {string} unit
 * @property {number} time
 * @property {boolean} returnable
 */
/**
 * @typedef Image
 * @property {string} [secure_url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */
/**
 * @typedef ProductPublished
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */
/**
 * @typedef Logo
 * @property {string} [url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */
/**
 * @typedef NetQuantityResponse
 * @property {string} [unit]
 * @property {number} [value]
 */
/**
 * @typedef Product
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {string[]} [all_identifiers]
 * @property {Object} [custom_order]
 * @property {ReturnConfigResponse} [return_config]
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {string} [size_guide]
 * @property {boolean} [is_physical]
 * @property {Image[]} [images]
 * @property {Object} [moq]
 * @property {string} [color]
 * @property {string} [item_code]
 * @property {number[]} [all_company_ids]
 * @property {Object} [tax_identifier]
 * @property {string[]} [product_group_tag]
 * @property {number} [company_id]
 * @property {boolean} [multi_size]
 * @property {string} [hsn_code]
 * @property {string} [currency]
 * @property {Object} [variant_media]
 * @property {string} [image_nature]
 * @property {VerifiedBy} [verified_by]
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [is_set]
 * @property {string} [slug]
 * @property {string} [category_slug]
 * @property {string} [item_type]
 * @property {Object[]} [sizes]
 * @property {Object} [variants]
 * @property {Object[]} [trader]
 * @property {Object[]} [all_sizes]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {number} [category_uid]
 * @property {Object} [variant_group]
 * @property {string} [description]
 * @property {ProductPublished} [product_publish]
 * @property {string} [pending]
 * @property {Media1[]} [media]
 * @property {Object} [created_by]
 * @property {string[]} [tags]
 * @property {Brand} [brand]
 * @property {string} [template_tag]
 * @property {Object} [teaser_tag]
 * @property {string[]} [l3_mapping]
 * @property {Object} [attributes]
 * @property {string[]} [highlights]
 * @property {Object} [_custom_json]
 * @property {string} [primary_color]
 * @property {number[]} [departments]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {boolean} [is_dependent]
 * @property {string} [short_description]
 * @property {Object} [modified_by]
 * @property {number} [brand_uid]
 * @property {boolean} [is_expirable]
 * @property {number} [no_of_boxes]
 * @property {Object} [category]
 * @property {string} [country_of_origin]
 */
/**
 * @typedef ProductListingResponse
 * @property {Page} [page]
 * @property {Product[]} [items]
 */
/**
 * @typedef CustomOrder
 * @property {string} [manufacturing_time_unit]
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 */
/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code]
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code_id]
 */
/**
 * @typedef Trader
 * @property {string[]} [address]
 * @property {Object} name
 * @property {string} [type]
 */
/**
 * @typedef ProductPublish
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */
/**
 * @typedef TeaserTag
 * @property {string} [url]
 * @property {string} [tag]
 */
/**
 * @typedef NetQuantity
 * @property {Object} [unit]
 * @property {number} [value]
 */
/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {string} [bulk_job_id]
 * @property {CustomOrder} [custom_order]
 * @property {ReturnConfig} return_config
 * @property {string} name
 * @property {boolean} [is_active]
 * @property {string} [size_guide]
 * @property {string} item_code
 * @property {TaxIdentifier} tax_identifier
 * @property {string} [action]
 * @property {string[]} [product_group_tag]
 * @property {number} company_id
 * @property {boolean} [multi_size]
 * @property {string} currency
 * @property {Object} [variant_media]
 * @property {boolean} [is_image_less_product]
 * @property {string} slug
 * @property {string} category_slug
 * @property {boolean} [is_set]
 * @property {Trader[]} trader
 * @property {string} item_type
 * @property {Object} [variants]
 * @property {Object[]} sizes
 * @property {string} [requester]
 * @property {Object} [variant_group]
 * @property {string} [description]
 * @property {ProductPublish} [product_publish]
 * @property {Media1[]} [media]
 * @property {string[]} [tags]
 * @property {string} template_tag
 * @property {TeaserTag} [teaser_tag]
 * @property {Object} attributes
 * @property {string[]} [highlights]
 * @property {Object} [_custom_json]
 * @property {Object} [change_request_id]
 * @property {number[]} departments
 * @property {NetQuantity} [net_quantity]
 * @property {number} [uid]
 * @property {boolean} [is_dependent]
 * @property {string} [short_description]
 * @property {number} brand_uid
 * @property {number} [no_of_boxes]
 * @property {string} country_of_origin
 */
/**
 * @typedef ProductVariants
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {number} [category_uid]
 * @property {number} [brand_uid]
 * @property {Media1[]} [media]
 */
/**
 * @typedef ProductVariantsResponse
 * @property {Page} [page]
 * @property {ProductVariants[]} [variants]
 */
/**
 * @typedef AttributeMasterSerializer
 * @property {boolean} [variant]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [raw_key]
 * @property {AttributeMasterDetails} details
 * @property {string} [logo]
 * @property {Object} [synonyms]
 * @property {AttributeMaster} schema
 * @property {string} slug
 * @property {string} [suggestion]
 * @property {string} [modified_on]
 * @property {string} [description]
 * @property {AttributeMasterFilter} filters
 * @property {Object} [created_by]
 * @property {string[]} [tags]
 * @property {boolean} [is_nested]
 * @property {string} [unit]
 * @property {string[]} departments
 * @property {Object} [modified_by]
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
 * @property {string} [bulk_job_id]
 * @property {CustomOrder} [custom_order]
 * @property {ReturnConfig} return_config
 * @property {Object} name
 * @property {boolean} [is_active]
 * @property {string} [size_guide]
 * @property {Object} item_code
 * @property {TaxIdentifier} tax_identifier
 * @property {string} [action]
 * @property {string[]} [product_group_tag]
 * @property {number} company_id
 * @property {boolean} [multi_size]
 * @property {string} currency
 * @property {Object} [variant_media]
 * @property {boolean} [is_image_less_product]
 * @property {string} slug
 * @property {string} category_slug
 * @property {boolean} [is_set]
 * @property {Trader[]} trader
 * @property {string} item_type
 * @property {Object} [variants]
 * @property {string} [requester]
 * @property {Object} [variant_group]
 * @property {string} [description]
 * @property {ProductPublish} [product_publish]
 * @property {Media1[]} [media]
 * @property {string[]} [tags]
 * @property {string} template_tag
 * @property {TeaserTag} [teaser_tag]
 * @property {string[]} [highlights]
 * @property {Object} [_custom_json]
 * @property {Object} [change_request_id]
 * @property {number[]} departments
 * @property {NetQuantity} [net_quantity]
 * @property {number} [uid]
 * @property {boolean} [is_dependent]
 * @property {string} [short_description]
 * @property {number} brand_uid
 * @property {number} [no_of_boxes]
 * @property {string} country_of_origin
 */
/**
 * @typedef ValidateIdentifier
 * @property {string} gtin_value
 * @property {boolean} [primary]
 * @property {string} gtin_type
 */
/**
 * @typedef AllSizes
 * @property {string} item_dimensions_unit_of_measure
 * @property {number} item_weight
 * @property {Object} size
 * @property {number} item_height
 * @property {number} item_length
 * @property {Object} item_weight_unit_of_measure
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {number} item_width
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
 * @typedef UserDetail1
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [full_name]
 */
/**
 * @typedef ProductBulkRequest
 * @property {number} [succeed]
 * @property {string} [template_tag]
 * @property {string} [created_on]
 * @property {UserDetail1} [created_by]
 * @property {string} [file_path]
 * @property {string[]} [failed_records]
 * @property {number} [company_id]
 * @property {ProductTemplate} [template]
 * @property {number} [total]
 * @property {string} [modified_on]
 * @property {number} [cancelled]
 * @property {string} [stage]
 * @property {UserDetail1} [modified_by]
 * @property {number} [failed]
 * @property {boolean} [is_active]
 * @property {string[]} [cancelled_records]
 */
/**
 * @typedef ProductBulkRequestList
 * @property {Page} [page]
 * @property {ProductBulkRequest} [items]
 */
/**
 * @typedef UserInfo1
 * @property {string} [user_id]
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [username]
 */
/**
 * @typedef BulkJob
 * @property {boolean} [is_active]
 * @property {number} [succeed]
 * @property {string} [template_tag]
 * @property {string} created_on
 * @property {string} [file_path]
 * @property {Object[]} [failed_records]
 * @property {number} company_id
 * @property {string} [custom_template_tag]
 * @property {string} [stage]
 * @property {number} [total]
 * @property {string} [modified_on]
 * @property {string} [tracking_url]
 * @property {UserInfo1} [modified_by]
 * @property {number} [cancelled]
 * @property {number} [failed]
 * @property {UserInfo1} [created_by]
 * @property {Object[]} [cancelled_records]
 */
/**
 * @typedef BulkResponse
 * @property {boolean} [is_active]
 * @property {string} created_on
 * @property {string} [modified_on]
 * @property {UserInfo1} [modified_by]
 * @property {string} batch_id
 * @property {UserInfo1} [created_by]
 */
/**
 * @typedef BulkProductRequest
 * @property {Object[]} data
 * @property {string} batch_id
 * @property {number} company_id
 * @property {string} template_tag
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
 * @typedef UserCommon
 * @property {string} [username]
 * @property {number} [company_id]
 * @property {string} [user_id]
 */
/**
 * @typedef Items
 * @property {boolean} [is_active]
 * @property {number} [retry]
 * @property {number} [succeed]
 * @property {string} [created_on]
 * @property {string} [file_path]
 * @property {string[]} [failed_records]
 * @property {number} [company_id]
 * @property {string} [id]
 * @property {number} [total]
 * @property {string} [modified_on]
 * @property {string} [tracking_url]
 * @property {UserCommon} [modified_by]
 * @property {string} [stage]
 * @property {number} [cancelled]
 * @property {number} [failed]
 * @property {UserCommon} [created_by]
 * @property {string[]} [cancelled_records]
 */
/**
 * @typedef BulkAssetResponse
 * @property {Page} [page]
 * @property {Items[]} [items]
 */
/**
 * @typedef ProductBulkAssets
 * @property {Object} user
 * @property {string} url
 * @property {number} [company_id]
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
 * @typedef InventoryResponse
 * @property {number} [price_transfer]
 * @property {number} [quantity]
 * @property {number} [sellable_quantity]
 * @property {number} [price_effective]
 * @property {Object} [store]
 * @property {string} [currency]
 * @property {string} [size]
 * @property {string} [uid]
 * @property {string} [seller_identifier]
 * @property {number} [item_id]
 * @property {Object} [identifiers]
 * @property {string} [inventory_updated_on]
 * @property {number} [price]
 */
/**
 * @typedef InventoryResponsePaginated
 * @property {Page} [page]
 * @property {InventoryResponse[]} [items]
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
 * @property {boolean} [primary]
 * @property {string} gtin_type
 */
/**
 * @typedef InvSize
 * @property {number} [price_transfer]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} quantity
 * @property {boolean} [is_set]
 * @property {string} store_code
 * @property {number} price_effective
 * @property {number} [item_weight]
 * @property {string} currency
 * @property {Object} size
 * @property {number} [item_height]
 * @property {number} [item_length]
 * @property {InventorySet} [set]
 * @property {string} [expiration_date]
 * @property {string} [item_weight_unit_of_measure]
 * @property {GTIN[]} identifiers
 * @property {number} [item_width]
 * @property {number} [price]
 */
/**
 * @typedef InventoryRequest
 * @property {ItemQuery} item
 * @property {number} company_id
 * @property {InvSize[]} sizes
 */
/**
 * @typedef DimensionResponse
 * @property {number} length
 * @property {number} width
 * @property {boolean} is_default
 * @property {string} unit
 * @property {number} height
 */
/**
 * @typedef ReturnConfig1
 * @property {string} [unit]
 * @property {number} [time]
 * @property {boolean} [returnable]
 */
/**
 * @typedef Trader1
 * @property {string[]} address
 * @property {string} name
 * @property {string} type
 */
/**
 * @typedef ManufacturerResponse
 * @property {string} name
 * @property {string} address
 * @property {boolean} is_default
 */
/**
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
 */
/**
 * @typedef WeightResponse
 * @property {string} unit
 * @property {number} shipping
 * @property {boolean} is_default
 */
/**
 * @typedef CompanyMeta
 * @property {number} id
 */
/**
 * @typedef QuantityBase
 * @property {string} [updated_at]
 * @property {number} [count]
 */
/**
 * @typedef Quantities
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [order_committed]
 */
/**
 * @typedef PriceMeta
 * @property {number} marked
 * @property {number} transfer
 * @property {Object} [tp_notes]
 * @property {string} [updated_at]
 * @property {string} currency
 * @property {number} effective
 */
/**
 * @typedef InventorySellerResponse
 * @property {string} [added_on_store]
 * @property {StoreMeta} store
 * @property {DimensionResponse} dimension
 * @property {string} size
 * @property {InventorySet} [set]
 * @property {ReturnConfig1} [return_config]
 * @property {string} [expiration_date]
 * @property {boolean} [track_inventory]
 * @property {boolean} [is_active]
 * @property {Object} [tax_identifier]
 * @property {Object} identifier
 * @property {Object} [fynd_meta]
 * @property {boolean} [is_set]
 * @property {Trader1[]} [trader]
 * @property {Object} [raw_meta]
 * @property {string} seller_identifier
 * @property {UserSerializer} [created_by]
 * @property {number} total_quantity
 * @property {ManufacturerResponse} manufacturer
 * @property {string[]} [tags]
 * @property {BrandMeta} brand
 * @property {Object} [meta]
 * @property {Object} [_custom_json]
 * @property {WeightResponse} weight
 * @property {string} [stage]
 * @property {boolean} fragile
 * @property {CompanyMeta} company
 * @property {string} uid
 * @property {string} fynd_article_code
 * @property {string} fynd_item_code
 * @property {UserSerializer} [modified_by]
 * @property {string} [trace_id]
 * @property {number} item_id
 * @property {Quantities} [quantities]
 * @property {string} country_of_origin
 * @property {PriceMeta} price
 */
/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {Page} [page]
 * @property {InventorySellerResponse[]} [items]
 */
/**
 * @typedef BulkInventoryGetItems
 * @property {boolean} [is_active]
 * @property {number} [succeed]
 * @property {string} [created_on]
 * @property {string} [file_path]
 * @property {string[]} [failed_records]
 * @property {number} [company_id]
 * @property {string} [stage]
 * @property {string} [id]
 * @property {number} [total]
 * @property {string} [modified_on]
 * @property {number} [cancelled]
 * @property {Object} [modified_by]
 * @property {number} [failed]
 * @property {Object} [created_by]
 * @property {string[]} [cancelled_records]
 */
/**
 * @typedef BulkInventoryGet
 * @property {Page} [page]
 * @property {BulkInventoryGetItems[]} [items]
 */
/**
 * @typedef InventoryJobPayload
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [quantity]
 * @property {string} store_code
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {number} [price]
 * @property {string} [currency]
 * @property {string[]} [tags]
 * @property {string} [trace_id]
 * @property {string} seller_identifier
 * @property {string} [expiration_date]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [total_quantity]
 */
/**
 * @typedef InventoryBulkRequest
 * @property {string} batch_id
 * @property {Object} [user]
 * @property {number} company_id
 * @property {InventoryJobPayload[]} sizes
 */
/**
 * @typedef InventoryExportJob
 * @property {number} seller_id
 * @property {string} [completed_on]
 * @property {string} [url]
 * @property {string} [status]
 * @property {string} task_id
 * @property {string} [trigger_on]
 * @property {Object} [request_params]
 */
/**
 * @typedef InventoryExportRequest
 * @property {number[]} [store]
 * @property {number[]} [brand]
 * @property {string} [type]
 */
/**
 * @typedef InventoryExportResponse
 * @property {number} seller_id
 * @property {string} [status]
 * @property {string} task_id
 * @property {string} [trigger_on]
 * @property {Object} [request_params]
 */
/**
 * @typedef ArticleStoreResponse
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef DimensionResponse1
 * @property {string} [unit]
 * @property {number} [height]
 * @property {number} [length]
 * @property {number} [width]
 */
/**
 * @typedef ReturnConfig2
 * @property {string} [unit]
 * @property {number} [time]
 * @property {boolean} [returnable]
 */
/**
 * @typedef Trader2
 * @property {string[]} [address]
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef ManufacturerResponse1
 * @property {string} [name]
 * @property {string} [address]
 * @property {boolean} [is_default]
 */
/**
 * @typedef BrandMeta1
 * @property {number} [id]
 * @property {string} [name]
 */
/**
 * @typedef WeightResponse1
 * @property {string} [unit]
 * @property {number} [shipping]
 */
/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */
/**
 * @typedef Quantity
 * @property {number} [count]
 */
/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [sellable]
 * @property {Quantity} [damaged]
 * @property {Quantity} [not_available]
 * @property {Quantity} [order_committed]
 */
/**
 * @typedef PriceArticle
 * @property {number} [marked]
 * @property {number} [transfer]
 * @property {Object} [tp_notes]
 * @property {string} [currency]
 * @property {number} [effective]
 */
/**
 * @typedef GetInventories
 * @property {ArticleStoreResponse} [store]
 * @property {DimensionResponse1} [dimension]
 * @property {string} [size]
 * @property {ReturnConfig2} [return_config]
 * @property {string} [expiration_date]
 * @property {boolean} [track_inventory]
 * @property {string} [inventory_updated_on]
 * @property {Object} [tax_identifier]
 * @property {Object} [identifier]
 * @property {boolean} [is_set]
 * @property {Trader2[]} [trader]
 * @property {DateMeta} [date_meta]
 * @property {string} [id]
 * @property {Object} [platforms]
 * @property {string} [seller_identifier]
 * @property {UserSerializer} [created_by]
 * @property {number} [total_quantity]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {string[]} [tags]
 * @property {BrandMeta1} [brand]
 * @property {WeightResponse1} [weight]
 * @property {string} [trace_id]
 * @property {CompanyMeta1} [company]
 * @property {string} [uid]
 * @property {UserSerializer} [modified_by]
 * @property {string} [stage]
 * @property {number} [item_id]
 * @property {QuantitiesArticle} [quantities]
 * @property {string} [country_of_origin]
 * @property {PriceArticle} [price]
 */
/**
 * @typedef GetInventoriesResponse
 * @property {Page} [page]
 * @property {GetInventories[]} [items]
 */
/**
 * @typedef FilerList
 * @property {string} [display]
 * @property {string} [value]
 */
/**
 * @typedef InventoryConfig
 * @property {FilerList[]} [data]
 * @property {boolean} [multivalues]
 */
/**
 * @typedef InventoryPayload
 * @property {number} store_id
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {string[]} [tags]
 * @property {string} [trace_id]
 * @property {string} seller_identifier
 * @property {string} [expiration_date]
 * @property {number} [total_quantity]
 */
/**
 * @typedef InventoryRequestSchemaV2
 * @property {InventoryPayload[]} [payload]
 * @property {number} company_id
 * @property {Object} [meta]
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
 * @typedef PageResponse
 * @property {boolean} [has_previous]
 * @property {string} [current]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {number} [size]
 */
/**
 * @typedef HsnCodesObject
 * @property {boolean} [tax_on_mrp]
 * @property {number} [tax1]
 * @property {number} [threshold2]
 * @property {number} [company_id]
 * @property {string} [hsn_code]
 * @property {string} [id]
 * @property {string} [hs2_code]
 * @property {number} [tax2]
 * @property {boolean} [tax_on_esp]
 * @property {string} [modified_on]
 * @property {number} [threshold1]
 */
/**
 * @typedef HsnCodesListingResponse
 * @property {PageResponse} [page]
 * @property {HsnCodesObject[]} [items]
 */
/**
 * @typedef HsnUpsert
 * @property {boolean} tax_on_mrp
 * @property {number} tax1
 * @property {number} [threshold2]
 * @property {number} company_id
 * @property {string} hsn_code
 * @property {string} hs2_code
 * @property {number} [tax2]
 * @property {boolean} [tax_on_esp]
 * @property {number} [uid]
 * @property {number} threshold1
 * @property {boolean} [is_active]
 */
/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
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
 * @property {number} threshold
 * @property {number} rate
 * @property {number} [cess]
 * @property {string} effective_date
 */
/**
 * @typedef HSNDataInsertV2
 * @property {string} type
 * @property {string} [created_on]
 * @property {string} country_code
 * @property {string} hsn_code
 * @property {string} reporting_hsn
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} description
 * @property {Object} [created_by]
 * @property {TaxSlab[]} taxes
 */
/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {PageResponse} [page]
 * @property {HSNDataInsertV2[]} [items]
 */
/**
 * @typedef BrandItem
 * @property {string} [discount]
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {Media} [logo]
 * @property {string[]} [departments]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 */
/**
 * @typedef BrandListingResponse
 * @property {Page} page
 * @property {BrandItem[]} [items]
 */
/**
 * @typedef Department
 * @property {string} [slug]
 * @property {Media} [logo]
 * @property {number} [priority_order]
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */
/**
 * @typedef ThirdLevelChild
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {Object[]} [childs]
 */
/**
 * @typedef SecondLevelChild
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {ThirdLevelChild[]} [childs]
 */
/**
 * @typedef Child
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {SecondLevelChild[]} [childs]
 */
/**
 * @typedef CategoryItems
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {Child[]} [childs]
 */
/**
 * @typedef DepartmentCategoryTree
 * @property {CategoryItems[]} [items]
 * @property {string} [department]
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
 * @property {Page} page
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductListingDetail[]} [items]
 * @property {Object} [operators]
 * @property {ProductFilters[]} [filters]
 */
/**
 * @typedef ProductDetail
 * @property {string} [product_online_date]
 * @property {Object} [promo_meta]
 * @property {Media1[]} [medias]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [name]
 * @property {string} [color]
 * @property {string} [item_code]
 * @property {number} [rating]
 * @property {string} [image_nature]
 * @property {string} [type]
 * @property {string} slug
 * @property {string} [item_type]
 * @property {string[]} [tryouts]
 * @property {string[]} [similars]
 * @property {string} [description]
 * @property {ProductBrand} [brand]
 * @property {Object} [teaser_tag]
 * @property {Object} [attributes]
 * @property {boolean} [has_variant]
 * @property {string[]} [highlights]
 * @property {number} [rating_count]
 * @property {number} [uid]
 * @property {string} [short_description]
 */
/**
 * @typedef InventoryPage
 * @property {boolean} [has_previous]
 * @property {string} type
 * @property {string} [next_id]
 * @property {number} item_total
 * @property {boolean} [has_next]
 */
/**
 * @typedef InventoryStockResponse
 * @property {InventoryPage} page
 * @property {Object[]} [items]
 */
/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */
/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 * @property {boolean} open
 * @property {LocationTimingSerializer} [closing]
 */
/**
 * @typedef SellerPhoneNumber
 * @property {string} number
 * @property {number} country_code
 */
/**
 * @typedef LocationManagerSerializer
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [email]
 * @property {string} [name]
 */
/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */
/**
 * @typedef UserSerializer1
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [contact]
 */
/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */
/**
 * @typedef GetAddressSerializer
 * @property {string} [address_type]
 * @property {string} [address2]
 * @property {string} [country]
 * @property {number} [latitude]
 * @property {string} [country_code]
 * @property {string} [state]
 * @property {string} [city]
 * @property {number} [longitude]
 * @property {string} [address1]
 * @property {string} [landmark]
 * @property {number} [pincode]
 */
/**
 * @typedef UserSerializer2
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [contact]
 */
/**
 * @typedef GetCompanySerializer
 * @property {string} [business_type]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [company_type]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [name]
 * @property {UserSerializer2} [created_by]
 */
/**
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [username]
 * @property {string} [password]
 */
/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_waybill]
 * @property {InvoiceCredSerializer} [e_invoice]
 */
/**
 * @typedef GetLocationSerializer
 * @property {string} [verified_on]
 * @property {string} [store_type]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} [created_on]
 * @property {string} name
 * @property {Object} [warnings]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} [phone_number]
 * @property {Document[]} [documents]
 * @property {string[]} [notification_emails]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {UserSerializer1} [verified_by]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {LocationIntegrationType} [integration_type]
 * @property {string} [modified_on]
 * @property {string} code
 * @property {GetAddressSerializer} address
 * @property {UserSerializer1} [created_by]
 * @property {string} display_name
 * @property {Object} [_custom_json]
 * @property {GetCompanySerializer} [company]
 * @property {number} [uid]
 * @property {UserSerializer1} [modified_by]
 * @property {string} [stage]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 */
/**
 * @typedef LocationListSerializer
 * @property {Page} [page]
 * @property {GetLocationSerializer[]} [items]
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
 * @property {string} app_id
 * @property {Object} [_custom_json]
 * @property {number} uid
 * @property {string} [name]
 * @property {boolean} [is_active]
 */
/**
 * @typedef ApplicationDepartmentListingResponse
 * @property {Page} page
 * @property {ApplicationDepartment[]} [items]
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
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */
/**
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
 */
/**
 * @typedef CompanyTaxesSerializer
 * @property {number} [rate]
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 */
/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {BusinessDetails} [business_details]
 * @property {Document[]} [documents]
 * @property {string[]} [notification_emails]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} business_type
 * @property {Object} [warnings]
 * @property {Object} [_custom_json]
 * @property {ContactDetails} [contact_details]
 * @property {string} [stage]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [mode]
 * @property {string} [business_info]
 * @property {UserSerializer} [modified_by]
 * @property {number} uid
 * @property {boolean} [franchise_enabled]
 * @property {UserSerializer} [verified_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {string} [name]
 * @property {string} company_type
 */
/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} [address2]
 * @property {string} [landmark]
 * @property {number} pincode
 * @property {number} latitude
 * @property {string} country
 * @property {number} longitude
 * @property {string} city
 * @property {string} state
 * @property {string} [country_code]
 * @property {string} address_type
 * @property {string} address1
 */
/**
 * @typedef CompanyTaxesSerializer1
 * @property {number} [rate]
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 */
/**
 * @typedef UpdateCompany
 * @property {Object} [warnings]
 * @property {string} [reject_reason]
 * @property {Object} [_custom_json]
 * @property {boolean} [franchise_enabled]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {BusinessDetails} [business_details]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {ContactDetails} [contact_details]
 * @property {Document[]} [documents]
 * @property {string} [business_type]
 * @property {string[]} [notification_emails]
 * @property {string} [name]
 * @property {string} [company_type]
 * @property {string} [business_info]
 */
/**
 * @typedef ProfileSuccessResponse
 * @property {number} [uid]
 * @property {boolean} [success]
 */
/**
 * @typedef DocumentsObj
 * @property {number} [pending]
 * @property {number} [verified]
 */
/**
 * @typedef MetricsSerializer
 * @property {number} [uid]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [brand]
 * @property {string} [stage]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [product]
 */
/**
 * @typedef BrandBannerSerializer
 * @property {string} [landscape]
 * @property {string} [portrait]
 */
/**
 * @typedef GetBrandResponseSerializer
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {Object} [_custom_json]
 * @property {string} [reject_reason]
 * @property {Object} [warnings]
 * @property {string} [stage]
 * @property {string[]} [synonyms]
 * @property {string} [mode]
 * @property {BrandBannerSerializer} [banner]
 * @property {UserSerializer} [modified_by]
 * @property {string} [logo]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [slug_key]
 * @property {string} name
 * @property {string} [description]
 * @property {Object} [_locale_language]
 */
/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [description]
 * @property {number} [company_id]
 * @property {string[]} [synonyms]
 * @property {string} [brand_tier]
 * @property {string} name
 * @property {BrandBannerSerializer} [banner]
 * @property {string} logo
 * @property {Object} [_locale_language]
 */
/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */
/**
 * @typedef CompanyDetails
 * @property {string} [website_url]
 * @property {CompanySocialAccounts[]} [socials]
 */
/**
 * @typedef CompanySerializer
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [created_on]
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [verified_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string[]} [market_channels]
 * @property {CompanyDetails} [details]
 * @property {string} [modified_on]
 * @property {string} business_type
 * @property {string[]} [notification_emails]
 * @property {string} [stage]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} company_type
 * @property {string} [name]
 * @property {UserSerializer} [modified_by]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 */
/**
 * @typedef CompanyBrandSerializer
 * @property {number} [uid]
 * @property {string} [reject_reason]
 * @property {string} [created_on]
 * @property {Object} [warnings]
 * @property {UserSerializer} [verified_by]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [modified_on]
 * @property {CompanySerializer} [company]
 * @property {string} [stage]
 * @property {UserSerializer} [modified_by]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 */
/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} [uid]
 * @property {number[]} brands
 * @property {number} company
 */
/**
 * @typedef HolidayDateSerializer
 * @property {string} start_date
 * @property {string} end_date
 */
/**
 * @typedef HolidaySchemaSerializer
 * @property {HolidayDateSerializer} date
 * @property {string} title
 * @property {string} holiday_type
 */
/**
 * @typedef LocationSerializer
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {Object} [warnings]
 * @property {LocationManagerSerializer} [manager]
 * @property {Document[]} [documents]
 * @property {string} code
 * @property {number} company
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} [stage]
 * @property {string[]} [notification_emails]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {GetAddressSerializer} address
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [store_type]
 * @property {string} name
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} display_name
 * @property {HolidaySchemaSerializer[]} [holiday]
 */
/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */
/**
 * @typedef _ArticleQuery
 * @property {number[]} [ignored_stores]
 * @property {string} [size]
 * @property {number} [item_id]
 */
/**
 * @typedef _ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */
/**
 * @typedef _AssignStoreArticle
 * @property {_ArticleQuery} [query]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [quantity]
 * @property {string} [group_id]
 * @property {Object} [meta]
 */
/**
 * @typedef AssignStoreRequestValidator
 * @property {_AssignStoreArticle[]} [articles]
 * @property {string} [pincode]
 * @property {string} [channel_identifier]
 * @property {number[]} [store_ids]
 * @property {string} [app_id]
 * @property {string} [channel_type]
 * @property {number} [company_id]
 */
/**
 * @typedef AssignStoreResponseSerializer
 * @property {string} [uid]
 * @property {string} [size]
 * @property {number} [price_effective]
 * @property {string} [store_pincode]
 * @property {number} [index]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {boolean} [status]
 * @property {number} [price_marked]
 * @property {string} [s_city]
 * @property {number} [item_id]
 * @property {number} [quantity]
 * @property {number} [store_id]
 * @property {number} [company_id]
 * @property {Object} [meta]
 * @property {string} [_id]
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
 * @property {InformationPhone[]} [phone]
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
 * @property {string} [slug]
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
 * @typedef UsesRemaining
 * @property {number} [total]
 * @property {number} [user]
 * @property {number} [app]
 */
/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [maximum]
 * @property {UsesRemaining} [remaining]
 */
/**
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */
/**
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */
/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */
/**
 * @typedef PaymentModes
 * @property {string[]} [networks]
 * @property {string[]} [types]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [codes]
 */
/**
 * @typedef Restrictions
 * @property {string[]} [platforms]
 * @property {UsesRestriction} [uses]
 * @property {boolean} [coupon_allowed]
 * @property {number[]} [ordering_stores]
 * @property {PostOrder} [post_order]
 * @property {number[]} [user_groups]
 * @property {string} [user_type]
 * @property {PriceRange} [price_range]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {Object} [payments]
 */
/**
 * @typedef Rule
 * @property {number} [key]
 * @property {number} [min]
 * @property {number} [discount_qty]
 * @property {number} [max]
 * @property {number} [value]
 */
/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */
/**
 * @typedef DisplayMeta
 * @property {DisplayMetaDict} [remove]
 * @property {string} [subtitle]
 * @property {string} [title]
 * @property {DisplayMetaDict} [apply]
 * @property {string} [description]
 * @property {DisplayMetaDict} [auto]
 */
/**
 * @typedef Validity
 * @property {number} [priority]
 */
/**
 * @typedef CouponAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */
/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */
/**
 * @typedef RuleDefinition
 * @property {string} [currency_code]
 * @property {string[]} [scope]
 * @property {string} type
 * @property {boolean} [auto_apply]
 * @property {string} value_type
 * @property {string} applicable_on
 * @property {boolean} [is_exact]
 * @property {string} calculate_on
 */
/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef CouponSchedule
 * @property {string} [cron]
 * @property {Object[]} [next_schedule]
 * @property {string} [start]
 * @property {number} [duration]
 * @property {string} [end]
 */
/**
 * @typedef State
 * @property {boolean} [is_archived]
 * @property {boolean} [is_display]
 * @property {boolean} [is_public]
 */
/**
 * @typedef Ownership
 * @property {string} payable_category
 * @property {string} payable_by
 */
/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {string} [user_registered_after]
 * @property {boolean} [anonymous]
 */
/**
 * @typedef CouponAdd
 * @property {Restrictions} [restrictions]
 * @property {Rule[]} rule
 * @property {DisplayMeta} display_meta
 * @property {string} code
 * @property {Validity} validity
 * @property {CouponAuthor} [author]
 * @property {CouponAction} [action]
 * @property {Identifier} identifiers
 * @property {RuleDefinition} rule_definition
 * @property {CouponDateMeta} [date_meta]
 * @property {CouponSchedule} [_schedule]
 * @property {string[]} [tags]
 * @property {State} [state]
 * @property {Ownership} ownership
 * @property {string} type_slug
 * @property {Validation} [validation]
 */
/**
 * @typedef CouponsResponse
 * @property {Page} [page]
 * @property {CouponAdd} [items]
 */
/**
 * @typedef SuccessMessage
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef OperationErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef CouponUpdate
 * @property {Restrictions} [restrictions]
 * @property {Rule[]} rule
 * @property {DisplayMeta} display_meta
 * @property {string} code
 * @property {Validity} validity
 * @property {CouponAuthor} [author]
 * @property {CouponAction} [action]
 * @property {Identifier} identifiers
 * @property {RuleDefinition} rule_definition
 * @property {CouponDateMeta} [date_meta]
 * @property {CouponSchedule} [_schedule]
 * @property {string[]} [tags]
 * @property {State} [state]
 * @property {Ownership} ownership
 * @property {string} type_slug
 * @property {Validation} [validation]
 */
/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive]
 * @property {CouponSchedule} [schedule]
 */
/**
 * @typedef Ownership1
 * @property {string} payable_category
 * @property {string} payable_by
 */
/**
 * @typedef DisplayMeta1
 * @property {string} [offer_label]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [offer_text]
 */
/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */
/**
 * @typedef PromotionSchedule
 * @property {string} [cron]
 * @property {Object[]} [next_schedule]
 * @property {string} start
 * @property {number} [duration]
 * @property {string} [end]
 * @property {boolean} published
 */
/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */
/**
 * @typedef UsesRemaining1
 * @property {number} [total]
 * @property {number} [user]
 */
/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [maximum]
 * @property {UsesRemaining1} [remaining]
 */
/**
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */
/**
 * @typedef UserRegistered
 * @property {string} [start]
 * @property {string} [end]
 */
/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */
/**
 * @typedef PromotionPaymentModes
 * @property {string} type
 * @property {PaymentAllowValue1} [uses]
 * @property {string[]} [codes]
 */
/**
 * @typedef Restrictions1
 * @property {string[]} [platforms]
 * @property {UsesRestriction1} uses
 * @property {string[]} [user_id]
 * @property {number} [order_quantity]
 * @property {PostOrder1} [post_order]
 * @property {UserRegistered} [user_registered]
 * @property {number[]} [user_groups]
 * @property {boolean} [anonymous_users]
 * @property {PromotionPaymentModes[]} [payments]
 */
/**
 * @typedef CompareObject
 * @property {number} [greater_than_equals]
 * @property {number} [less_than_equals]
 * @property {number} [greater_than]
 * @property {number} [less_than]
 * @property {number} [equals]
 */
/**
 * @typedef ItemCriteria
 * @property {string[]} [item_exclude_sku]
 * @property {boolean} [all_items]
 * @property {number[]} [item_category]
 * @property {number[]} [item_store]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_id]
 * @property {number[]} [item_exclude_category]
 * @property {number[]} [item_company]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_exclude_store]
 * @property {string[]} [buy_rules]
 * @property {string[]} [item_size]
 * @property {string[]} [product_tags]
 * @property {string[]} [item_sku]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_exclude_company]
 * @property {string[]} [available_zones]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {CompareObject} [cart_total]
 */
/**
 * @typedef PromotionAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */
/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef DiscountOffer
 * @property {number} [discount_price]
 * @property {number} [discount_amount]
 * @property {string} [code]
 * @property {boolean} [partial_can_ret]
 * @property {number} [min_offer_quantity]
 * @property {number} [discount_percentage]
 * @property {number} [max_discount_amount]
 * @property {number} [max_offer_quantity]
 * @property {number} [max_usage_per_transaction]
 * @property {boolean} [apportion_discount]
 */
/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {DiscountOffer} offer
 * @property {ItemCriteria} item_criteria
 * @property {string} discount_type
 */
/**
 * @typedef PromotionListItem
 * @property {string} [code]
 * @property {string} [currency]
 * @property {boolean} [apply_all_discount]
 * @property {Ownership1} ownership
 * @property {string} application_id
 * @property {DisplayMeta1} display_meta
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionSchedule} [_schedule]
 * @property {Visibility} [visiblility]
 * @property {Restrictions1} [restrictions]
 * @property {string} promotion_type
 * @property {Object} buy_rules
 * @property {PromotionAuthor} [author]
 * @property {string} promo_group
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {Object} [_custom_json]
 * @property {DiscountRule[]} discount_rules
 * @property {boolean} [stackable]
 * @property {string} mode
 */
/**
 * @typedef PromotionsResponse
 * @property {Page} [page]
 * @property {PromotionListItem} [items]
 */
/**
 * @typedef PromotionAdd
 * @property {string} [code]
 * @property {string} [currency]
 * @property {boolean} [apply_all_discount]
 * @property {Ownership1} ownership
 * @property {string} application_id
 * @property {DisplayMeta1} display_meta
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionSchedule} [_schedule]
 * @property {Visibility} [visiblility]
 * @property {Restrictions1} [restrictions]
 * @property {string} promotion_type
 * @property {Object} buy_rules
 * @property {PromotionAuthor} [author]
 * @property {string} promo_group
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {Object} [_custom_json]
 * @property {DiscountRule[]} discount_rules
 * @property {boolean} [stackable]
 * @property {string} mode
 */
/**
 * @typedef PromotionUpdate
 * @property {string} [code]
 * @property {string} [currency]
 * @property {boolean} [apply_all_discount]
 * @property {Ownership1} ownership
 * @property {string} application_id
 * @property {DisplayMeta1} display_meta
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionSchedule} [_schedule]
 * @property {Visibility} [visiblility]
 * @property {Restrictions1} [restrictions]
 * @property {string} promotion_type
 * @property {Object} buy_rules
 * @property {PromotionAuthor} [author]
 * @property {string} promo_group
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {Object} [_custom_json]
 * @property {DiscountRule[]} discount_rules
 * @property {boolean} [stackable]
 * @property {string} mode
 */
/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive]
 * @property {PromotionSchedule} [schedule]
 */
/**
 * @typedef ActivePromosResponse
 * @property {string} [subtitle]
 * @property {string} [example]
 * @property {string} [entity_slug]
 * @property {string} [type]
 * @property {boolean} [is_hidden]
 * @property {string} [created_on]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {string} [modified_on]
 */
/**
 * @typedef CartItem
 * @property {number} [quantity]
 * @property {string} size
 * @property {string} product_id
 */
/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */
/**
 * @typedef ProductAvailability
 * @property {string[]} [sizes]
 * @property {boolean} [is_valid]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [deliverable]
 * @property {number} [other_store_quantity]
 */
/**
 * @typedef PromoMeta
 * @property {string} [message]
 */
/**
 * @typedef ProductPrice
 * @property {string} [currency_code]
 * @property {number} [add_on]
 * @property {string} [currency_symbol]
 * @property {number} [selling]
 * @property {number} [marked]
 * @property {number} [effective]
 */
/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */
/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */
/**
 * @typedef DiscountRulesApp
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [raw_offer]
 * @property {Object} [offer]
 * @property {Object} [item_criteria]
 */
/**
 * @typedef FreeGiftItem
 * @property {string[]} [item_images_url]
 * @property {Object} [item_price_details]
 * @property {number} [item_id]
 * @property {string} [item_brand_name]
 * @property {string} [item_name]
 * @property {string} [item_slug]
 */
/**
 * @typedef AppliedFreeArticles
 * @property {string} [parent_item_identifier]
 * @property {string} [article_id]
 * @property {FreeGiftItem} [free_gift_item_details]
 * @property {number} [quantity]
 */
/**
 * @typedef AppliedPromotion
 * @property {boolean} [mrp_promotion]
 * @property {string} [promotion_type]
 * @property {string} [offer_text]
 * @property {BuyRules[]} [buy_rules]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {string} [promotion_group]
 * @property {number} [amount]
 * @property {number} [article_quantity]
 * @property {string} [promo_id]
 * @property {string} [promotion_name]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 */
/**
 * @typedef BaseInfo
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef BasePrice
 * @property {number} [marked]
 * @property {number} [effective]
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
 * @property {Object} [extra_meta]
 * @property {string} [uid]
 * @property {BaseInfo} [seller]
 * @property {number} [quantity]
 * @property {string} [type]
 * @property {ArticlePriceInfo} [price]
 * @property {string} [size]
 * @property {string[]} [product_group_tags]
 * @property {Object} [parent_item_identifiers]
 * @property {BaseInfo} [store]
 */
/**
 * @typedef ProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 * @property {string} [url]
 */
/**
 * @typedef CategoryInfo
 * @property {number} [uid]
 * @property {string} [name]
 */
/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */
/**
 * @typedef ProductAction
 * @property {ActionQuery} [query]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef CartProduct
 * @property {number} [uid]
 * @property {string} [type]
 * @property {ProductImage[]} [images]
 * @property {CategoryInfo[]} [categories]
 * @property {ProductAction} [action]
 * @property {string} [name]
 * @property {NetQuantity} [net_quantity]
 * @property {string} [slug]
 * @property {BaseInfo} [brand]
 */
/**
 * @typedef CartProductInfo
 * @property {ProductAvailability} [availability]
 * @property {string} [key]
 * @property {number} [quantity]
 * @property {string} [coupon_message]
 * @property {PromoMeta} [promo_meta]
 * @property {ProductPriceInfo} [price]
 * @property {string} [message]
 * @property {string} [discount]
 * @property {CartProductIdentifer} identifiers
 * @property {boolean} [is_set]
 * @property {Object} [bulk_offer]
 * @property {Object} [parent_item_identifiers]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {ProductArticle} [article]
 * @property {CartProduct} [product]
 */
/**
 * @typedef CouponBreakup
 * @property {string} [uid]
 * @property {number} [minimum_cart_value]
 * @property {string} [code]
 * @property {string} [type]
 * @property {string} [coupon_type]
 * @property {boolean} [is_applied]
 * @property {string} [sub_title]
 * @property {number} [max_discount_value]
 * @property {string} [title]
 * @property {string} [description]
 * @property {number} [coupon_value]
 * @property {string} [message]
 * @property {number} [value]
 */
/**
 * @typedef RawBreakup
 * @property {number} [mrp_total]
 * @property {number} [convenience_fee]
 * @property {number} [total]
 * @property {number} [gst_charges]
 * @property {number} [discount]
 * @property {number} [cod_charge]
 * @property {number} [vog]
 * @property {number} [fynd_cash]
 * @property {number} [you_saved]
 * @property {number} [coupon]
 * @property {number} [subtotal]
 * @property {number} [delivery_charge]
 */
/**
 * @typedef DisplayBreakup
 * @property {string} [key]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {string} [display]
 * @property {string[]} [message]
 * @property {number} [value]
 */
/**
 * @typedef LoyaltyPoints
 * @property {number} [total]
 * @property {boolean} [is_applied]
 * @property {number} [applicable]
 * @property {string} [description]
 */
/**
 * @typedef CartBreakup
 * @property {CouponBreakup} [coupon]
 * @property {RawBreakup} [raw]
 * @property {DisplayBreakup[]} [display]
 * @property {LoyaltyPoints} [loyalty_points]
 */
/**
 * @typedef OpenapiCartDetailsResponse
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 */
/**
 * @typedef OpenApiErrorResponse
 * @property {boolean} [success]
 * @property {Object} [errors]
 * @property {string} [message]
 */
/**
 * @typedef ShippingAddress
 * @property {string} [country_code]
 * @property {number} [phone]
 * @property {Object} [meta]
 * @property {string} [area_code_slug]
 * @property {number} [pincode]
 * @property {string} [city]
 * @property {string} [area]
 * @property {string} [address_type]
 * @property {string} [name]
 * @property {string} [landmark]
 * @property {string} area_code
 * @property {string} [address]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [email]
 */
/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {ShippingAddress} shipping_address
 * @property {CartItem} [cart_items]
 */
/**
 * @typedef PromiseTimestamp
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef PromiseFormatted
 * @property {string} [max]
 * @property {string} [min]
 */
/**
 * @typedef ShipmentPromise
 * @property {PromiseTimestamp} [timestamp]
 * @property {PromiseFormatted} [formatted]
 */
/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 */
/**
 * @typedef CartItemMeta
 * @property {string} [group_id]
 * @property {boolean} [primary_item]
 */
/**
 * @typedef OpenApiFiles
 * @property {string} key
 * @property {string[]} values
 */
/**
 * @typedef OpenApiOrderItem
 * @property {Object} [extra_meta]
 * @property {number} cod_charges
 * @property {number} [employee_discount]
 * @property {number} cashback_applied
 * @property {CartItemMeta} [meta]
 * @property {number} [quantity]
 * @property {number} price_effective
 * @property {number} coupon_effective_discount
 * @property {number} discount
 * @property {OpenApiFiles[]} [files]
 * @property {number} product_id
 * @property {number} amount_paid
 * @property {string} size
 * @property {number} price_marked
 * @property {number} delivery_charges
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} [loyalty_discount]
 */
/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {number} cod_charges
 * @property {Object} [employee_discount]
 * @property {number} cashback_applied
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [payment_mode]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} [loyalty_discount]
 * @property {string} [order_id]
 * @property {OpenApiOrderItem[]} cart_items
 * @property {number} delivery_charges
 * @property {string} [coupon]
 * @property {number} coupon_value
 * @property {string} [comment]
 * @property {string} coupon_code
 * @property {string} [currency_code]
 * @property {ShippingAddress} billing_address
 * @property {OpenApiFiles[]} [files]
 * @property {string} [gstin]
 * @property {string} [affiliate_order_id]
 * @property {number} cart_value
 */
/**
 * @typedef OpenApiCheckoutResponse
 * @property {boolean} [success]
 * @property {string} [order_ref_id]
 * @property {string} order_id
 * @property {string} [message]
 */
/**
 * @typedef AbandonedCart
 * @property {number} uid
 * @property {string} [checkout_mode]
 * @property {boolean} [merge_qty]
 * @property {boolean} is_default
 * @property {string} last_modified
 * @property {boolean} [is_archive]
 * @property {Object} [pick_up_customer_details]
 * @property {string} expire_at
 * @property {Object[]} [payment_methods]
 * @property {string} created_on
 * @property {Object} [promotion]
 * @property {string} [gstin]
 * @property {Object[]} [shipments]
 * @property {Object} [coupon]
 * @property {Object} [delivery_charges]
 * @property {number} [cart_value]
 * @property {string} _id
 * @property {number[]} [fc_index_map]
 * @property {string} [app_id]
 * @property {Object} [cod_charges]
 * @property {boolean} [is_active]
 * @property {number} [discount]
 * @property {string} user_id
 * @property {string} [payment_mode]
 * @property {number} [bulk_coupon_discount]
 * @property {Object} [payments]
 * @property {string} [order_id]
 * @property {string} [comment]
 * @property {Object} [meta]
 * @property {boolean} [buy_now]
 * @property {Object} [fynd_credits]
 * @property {Object} cashback
 * @property {Object[]} articles
 */
/**
 * @typedef AbandonedCartResponse
 * @property {boolean} [success]
 * @property {Object} [result]
 * @property {Page} [page]
 * @property {string} [message]
 * @property {AbandonedCart[]} [items]
 */
/**
 * @typedef CartCurrency
 * @property {string} [code]
 * @property {string} [symbol]
 */
/**
 * @typedef CartDetailResponse
 * @property {string} [comment]
 * @property {string} [checkout_mode]
 * @property {boolean} [buy_now]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [is_valid]
 * @property {CartCurrency} [currency]
 * @property {boolean} [restrict_checkout]
 * @property {string} [last_modified]
 * @property {string} [gstin]
 * @property {string} [delivery_charge_info]
 * @property {string} [coupon_text]
 * @property {string} [message]
 * @property {string} [id]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 */
/**
 * @typedef AddProductCart
 * @property {Object} [extra_meta]
 * @property {number} [quantity]
 * @property {number} [store_id]
 * @property {boolean} [pos]
 * @property {string} [display]
 * @property {string} [article_id]
 * @property {number} [item_id]
 * @property {number} [seller_id]
 * @property {string[]} [product_group_tags]
 * @property {string} [item_size]
 * @property {Object} [article_assignment]
 * @property {Object} [parent_item_identifiers]
 */
/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 */
/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [partial]
 * @property {string} [message]
 */
/**
 * @typedef UpdateProductCart
 * @property {Object} [extra_meta]
 * @property {number} [quantity]
 * @property {string} [article_id]
 * @property {number} [item_index]
 * @property {CartProductIdentifer} identifiers
 * @property {number} [item_id]
 * @property {string} [item_size]
 * @property {Object} [parent_item_identifiers]
 */
/**
 * @typedef UpdateCartRequest
 * @property {UpdateProductCart[]} [items]
 * @property {string} operation
 */
/**
 * @typedef UpdateCartDetailResponse
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
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
    /**
     * @param {Object} arg - Arg object.
     * @param {EdcDetailsRequest} arg.body
     * @summary: get details of a single edc device
     * @description: Use this API to get details of a single edc device
     */
    edcDevice({ body }?: {
        body: EdcDetailsRequest;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @summary: get all the device list of an app
     * @description: Use this API to get all devices linked to a particular app.
     */
    edcDeviceList({}?: any): Promise<any>;
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
     * @summary: Delete a Search Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
     */
    deleteSearchKeywords({ id }?: {
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
     * @summary: List all Search Custom Keyword Listing
     * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
     */
    getAllSearchKeyword({}?: any): Promise<any>;
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
     * @summary: Delete a Autocomplete Keywords
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
     */
    deleteAutocompleteKeyword({ id }?: {
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
     * @summary: List all Autocomplete Keyword Listing
     * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
     */
    getAutocompleteConfig({}?: any): Promise<any>;
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
     * @summary: Get configured details for catalog
     * @description: configured details for catalog.
     */
    getConfigurations({}?: any): Promise<any>;
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
     * @param {string} arg.type - Type can be brands, categories etc.
     * @summary: Get configured details for catalog
     * @description: configured details for catalog.
     */
    getConfigurationByType({ type }?: {
        type: string;
    }): Promise<any>;
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
     * @summary: Get query filters to configure a collection
     * @description: Get query filters to configure a collection
     */
    getQueryFilters({}?: any): Promise<any>;
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
     * @param {CreateCollection} arg.body
     * @summary: Add a Collection
     * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
     */
    createCollection({ body }?: {
        body: CreateCollection;
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
     * @summary: Delete a Collection
     * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
     */
    deleteCollection({ id }?: {
        id: string;
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
     * @param {boolean} [arg.isDependent] - This query parameter is used to get
     *   the dependent products in the listing.
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
    getAppicationProducts({ q, f, c, filters, isDependent, sortOn, pageId, pageSize, pageNo, pageType, itemIds, }?: {
        q?: string;
        f?: string;
        c?: string;
        filters?: boolean;
        isDependent?: boolean;
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
     * @param {boolean} [arg.isDependent] - This query parameter is used to get
     *   the dependent products in the listing.
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
    getAppicationProductsPaginator({ companyId, applicationId, q, f, c, filters, isDependent, sortOn, pageSize, itemIds, }?: {
        companyId: string;
        applicationId: string;
        q?: string;
        f?: string;
        c?: string;
        filters?: boolean;
        isDependent?: boolean;
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
     * @param {boolean} [arg.isDependent] - This query parameter is used to get
     *   the dependent products in the listing.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 10.
     * @param {string} [arg.q] - Search with Item Code, Name, Slug or Identifier.
     * @summary: Get applicationwise products
     * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. If successful, returns a Product resource in the response body specified in `ApplicationProductListingResponseDatabasePowered`
     */
    getAppProducts({ brandIds, categoryIds, departmentIds, tags, isDependent, pageNo, pageSize, q, }?: {
        brandIds?: number[];
        categoryIds?: number[];
        departmentIds?: number[];
        tags?: string[];
        isDependent?: boolean;
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
     * @param {string} arg.extensionId - Extension id for which proxy URL will
     *   be generated
     * @param {AddProxyReq} arg.body
     * @summary: Create proxy URL for the external URL
     * @description: Use this API to generate proxy URL for the external URL
     */
    addProxyPath({ extensionId, body }?: {
        extensionId: string;
        body: AddProxyReq;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.extensionId - Extension id for which proxy URL needs
     *   to be removed
     * @param {string} arg.attachedPath - Attachaed path slug
     * @summary: Remove proxy URL for the external URL
     * @description: Use this API to remove the proxy URL which is already generated for the external URL
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
    excluded_fields: string[];
    app_id: string;
    display_fields: string[];
    created: boolean;
    success: boolean;
    aggregators?: any[];
};
type ErrorCodeDescription = {
    description: string;
    code: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    secret: string;
    config_type: string;
    merchant_salt: string;
    is_active?: boolean;
    key: string;
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
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentApp = {
    package_name?: string;
    logos?: PaymentModeLogo;
    display_name?: string;
    code?: string;
};
type PaymentModeList = {
    card_fingerprint?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_type?: string;
    intent_app_error_list?: string[];
    card_reference?: string;
    remaining_limit?: number;
    card_id?: string;
    merchant_code?: string;
    expired?: boolean;
    card_brand_image?: string;
    card_number?: string;
    exp_month?: number;
    display_name?: string;
    exp_year?: number;
    card_isin?: string;
    card_issuer?: string;
    card_name?: string;
    aggregator_name: string;
    nickname?: string;
    cod_limit?: number;
    card_token?: string;
    cod_limit_per_order?: number;
    fynd_vpa?: string;
    timeout?: number;
    retry_count?: number;
    code?: string;
    intent_flow?: boolean;
    intent_app_error_dict_list?: IntentAppErrorList[];
    logo_url?: PaymentModeLogo;
    intent_app?: IntentApp[];
    card_brand?: string;
    display_priority?: number;
    name?: string;
};
type RootPaymentMode = {
    aggregator_name?: string;
    list?: PaymentModeList[];
    save_card?: boolean;
    display_priority: number;
    anonymous_enable?: boolean;
    display_name: string;
    is_pay_by_card_pl?: boolean;
    name: string;
    add_card_enabled?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type Payout = {
    unique_transfer_no: any;
    more_attributes: any;
    transfer_type: string;
    is_active: boolean;
    is_default: boolean;
    payouts_aggregators: any[];
    customers: any;
};
type PayoutsResponse = {
    items: Payout[];
    success: boolean;
};
type PayoutBankDetails = {
    state?: string;
    country?: string;
    account_no?: string;
    account_holder?: string;
    bank_name?: string;
    pincode?: number;
    ifsc_code: string;
    account_type: string;
    city?: string;
    branch_name?: string;
};
type PayoutRequest = {
    transfer_type: string;
    is_active: boolean;
    users: any;
    bank_details: PayoutBankDetails;
    unique_external_id: string;
    aggregator: string;
};
type PayoutResponse = {
    payouts: any;
    unique_transfer_no: string;
    payment_status: string;
    transfer_type: string;
    users: any;
    is_active: boolean;
    created: boolean;
    success: boolean;
    bank_details: any;
    aggregator: string;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    is_active: boolean;
    success: boolean;
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
    is_verified_flag?: boolean;
    message: string;
    success: boolean;
    data?: any;
};
type NotFoundResourceError = {
    description: string;
    code: string;
    success: boolean;
};
type BankDetailsForOTP = {
    account_no: string;
    account_holder: string;
    bank_name: string;
    ifsc_code: string;
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
    mobile?: string;
    id: number;
    ifsc_code: string;
    account_holder: string;
    is_active: boolean;
    display_name: string;
    created_on: string;
    beneficiary_id: string;
    email: string;
    branch_name?: string;
    subtitle: string;
    account_no: string;
    bank_name: string;
    title: string;
    address: string;
    delights_user_name?: string;
    comment?: string;
    modified_on: string;
    transfer_mode: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    extra_meta?: any;
    payment_gateway?: string;
    payment_id?: string;
    current_status?: string;
};
type MultiTenderPaymentMethod = {
    mode: string;
    name?: string;
    amount: number;
    meta?: MultiTenderPaymentMeta;
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
    cod_amount_limit?: number;
    cod_charges?: number;
    anonymous_cod?: boolean;
    methods: any;
    payment_selection_lock?: any;
    enabled: boolean;
    source: string;
    mode_of_payment: string;
    callback_url?: any;
};
type PlatfromPaymentConfig = {
    message: string;
    success: boolean;
    data: PlatformPaymentOptions;
};
type UpdatePlatformPaymentConfig = {
    cod_amount_limit?: number;
    cod_charges?: number;
    anonymous_cod?: boolean;
    methods: any;
    payment_selection_lock?: any;
};
type CODdata = {
    remaining_limit: number;
    limit: number;
    is_active: boolean;
    usages: number;
    user_id: string;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
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
type EdcDetailsRequest = {
    terminal_serial_no: string;
};
type EdcDevice = {
    terminal_serial_no?: string;
    merchant_store_pos_code?: string;
    edc_serial_no?: string;
    is_active?: boolean;
    app_id?: string;
    device_tag?: string;
    store_id?: number;
};
type EdcDeviceDetailsResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcUpdateRequest = {
    is_active?: string;
    terminal_serial_no: string;
    store_id: number;
    device_tag?: string;
};
type EdcDeviceAddUpdateResponse = {
    success: boolean;
};
type EdcAddRequest = {
    terminal_serial_no: string;
    merchant_store_pos_code: string;
    edc_serial_no: string;
    is_active: string;
    device_tag: string;
    store_id: number;
};
type EdcDeviceListResponse = {
    device_list: EdcDevice[];
    success: boolean;
};
type ShipmentStatus = {
    title: string;
    actual_status: string;
    hex_code: string;
    ops_status: string;
    status: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type UserDataInfo = {
    gender?: string;
    last_name?: string;
    first_name?: string;
    mobile?: string;
    name?: string;
    email?: string;
    uid?: number;
    is_anonymous_user?: boolean;
    avis_user_id?: string;
};
type Prices = {
    cashback?: number;
    amount_paid_roundoff?: number;
    refund_credit?: number;
    tax_collected_at_source?: number;
    price_effective?: number;
    delivery_charge?: number;
    fynd_credits?: number;
    promotion_effective_discount?: number;
    discount?: number;
    cashback_applied?: number;
    value_of_good?: number;
    amount_paid?: number;
    refund_amount?: number;
    coupon_value?: number;
    price_marked?: number;
    cod_charges?: number;
};
type PlatformItem = {
    id?: number;
    name?: string;
    can_return?: boolean;
    department_id?: number;
    code?: string;
    l3_category?: number;
    images?: string[];
    size?: string;
    l1_category?: string[];
    can_cancel?: boolean;
    l3_category_name?: string;
    color?: string;
    image?: string[];
};
type GSTDetailsData = {
    gst_fee: number;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    value_of_good: number;
    gstin_code: string;
};
type BagUnit = {
    ordering_channel: string;
    total_shipment_bags: number;
    can_return?: boolean;
    item?: PlatformItem;
    prices?: Prices;
    can_cancel?: boolean;
    shipment_id: string;
    bag_id: number;
    status: any;
    item_quantity: number;
    gst?: GSTDetailsData;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type ShipmentItem = {
    channel?: any;
    id: string;
    fulfilling_centre: string;
    total_bags_count: number;
    total_shipments_in_order: number;
    shipment_status?: ShipmentStatus;
    payment_mode_info?: PaymentModeInfo;
    sla?: any;
    user?: UserDataInfo;
    prices?: Prices;
    bags?: BagUnit[];
    application?: any;
    shipment_created_at: number;
    payment_methods?: any;
    created_at: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
};
type FilterInfoOption = {
    name?: string;
    value?: string;
    text: string;
};
type FiltersInfo = {
    type: string;
    value: string;
    text: string;
    options?: FilterInfoOption[];
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
    page?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type FulfillingStore = {
    contact_person: string;
    id: number;
    country: string;
    city: string;
    state: string;
    code: string;
    store_name: string;
    fulfillment_channel: string;
    meta: any;
    address: string;
    pincode: string;
    phone: string;
};
type BagStateMapper = {
    display_name: string;
    app_display_name?: string;
    name: string;
    app_facing?: boolean;
    app_state_name?: string;
    journey_type: string;
    is_active?: boolean;
    state_type: string;
    notify_customer?: boolean;
    bs_id: number;
};
type BagStatusHistory = {
    display_name?: string;
    shipment_id?: string;
    delivery_partner_id?: number;
    app_display_name?: string;
    bsh_id?: number;
    created_at?: string;
    kafka_sync?: boolean;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    delivery_awb_number?: string;
    state_type?: string;
    forward?: boolean;
    store_id?: number;
    bag_id?: number;
    reasons?: any[];
    updated_at?: string;
    status: string;
};
type ShipmentStatusData = {
    id?: number;
    bag_list?: string[];
    shipment_id?: string;
    created_at?: string;
    status?: string;
};
type UserDetailsData = {
    country: string;
    name: string;
    city: string;
    state: string;
    email: string;
    address: string;
    pincode: string;
    phone: string;
};
type DPDetailsData = {
    id?: number;
    country?: string;
    gst_tag?: string;
    name?: string;
    awb_no?: string;
    eway_bill_id?: string;
    pincode?: string;
    track_url?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    gst_fee: string;
    tax_collected_at_source?: number;
    gst_tag: string;
    hsn_code: string;
    discount: number;
    gst_tax_percentage: number;
    refund_credit: number;
    pm_price_split: any;
    fynd_credits: number;
    coupon_effective_discount: number;
    brand_calculated_amount: number;
    value_of_good: number;
    size: string;
    cashback: number;
    delivery_charge: number;
    promotion_effective_discount: number;
    cashback_applied: number;
    amount_paid: number;
    coupon_value: number;
    price_marked: number;
    amount_paid_roundoff?: number;
    identifiers: Identifier;
    total_units: number;
    added_to_fynd_cash: boolean;
    item_name: string;
    transfer_price: number;
    price_effective: number;
    cod_charges: number;
};
type CurrentStatus = {
    shipment_id?: string;
    delivery_partner_id?: number;
    current_status_id: number;
    kafka_sync?: boolean;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    state_type?: string;
    delivery_awb_number?: number;
    store_id?: number;
    created_at?: string;
    bag_id?: number;
    updated_at?: number;
    status?: string;
};
type BagGST = {
    gst_fee?: number;
    gst_tag?: string;
    is_default_hsn_code?: boolean;
    brand_calculated_amount?: number;
    hsn_code?: string;
    value_of_good?: number;
    gst_tax_percentage?: number;
    gstin_code?: string;
};
type OrderBrandName = {
    id: number;
    created_on: string;
    logo: string;
    company?: string;
    modified_on?: string;
    brand_name: string;
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
    discount_rules?: DiscountRules[];
    mrp_promotion?: boolean;
    amount?: number;
    promo_id?: string;
    article_quantity?: number;
    promotion_name?: string;
    buy_rules?: BuyRules[];
};
type OrderBagArticle = {
    uid?: string;
    return_config?: any;
    identifiers?: any;
};
type PlatformDeliveryAddress = {
    version?: string;
    contact_person?: string;
    country?: string;
    longitude?: number;
    address1?: string;
    city?: string;
    address2?: string;
    state?: string;
    created_at?: string;
    area?: string;
    address_category?: string;
    address_type?: string;
    landmark?: string;
    email?: string;
    latitude?: number;
    pincode?: string;
    phone?: string;
    updated_at?: string;
};
type BagConfigs = {
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    allow_force_return: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
    is_returnable: boolean;
};
type OrderBags = {
    financial_breakup?: FinancialBreakup;
    can_return?: boolean;
    prices?: Prices;
    item?: PlatformItem;
    current_status?: CurrentStatus;
    gst_details?: BagGST;
    bag_id: number;
    line_number?: number;
    display_name?: string;
    brand?: OrderBrandName;
    applied_promos?: AppliedPromos[];
    identifier?: string;
    can_cancel?: boolean;
    seller_identifier?: string;
    quantity?: number;
    entity_type?: string;
    article?: OrderBagArticle;
    delivery_address?: PlatformDeliveryAddress;
    bag_configs?: BagConfigs;
    parent_promo_bags?: any;
};
type ShipmentPayments = {
    mode: string;
    source?: string;
    logo?: string;
};
type OrderDetailsData = {
    ordering_channel?: string;
    affiliate_id?: string;
    tax_details?: any;
    order_value?: string;
    source?: string;
    fynd_order_id: string;
    order_date?: string;
    ordering_channel_logo?: any;
    cod_charges?: string;
};
type TrackingList = {
    is_passed?: boolean;
    is_current?: boolean;
    time?: string;
    text: string;
    status: string;
};
type ShipmentInfoResponse = {
    enable_tracking?: boolean;
    shipment_images?: string[];
    order_type: string;
    operational_status?: string;
    can_return?: boolean;
    platform_logo: boolean;
    company: any;
    journey_type?: string;
    prices?: Prices;
    go_green?: boolean;
    invoice: any;
    enable_dp_tracking?: boolean;
    gst_details?: GSTDetailsData;
    can_break: string;
    shipment_id: string;
    shipment_quantity?: number;
    forward_shipment_status?: any[];
    credit_note_id: string;
    fulfilling_store?: FulfillingStore;
    is_packaging_order: boolean;
    items: any[];
    order_status: any;
    coupon?: any;
    refund_text?: string;
    status_progress: number;
    ordering_store: any;
    user_agent?: string;
    bag_status_history?: BagStatusHistory[];
    can_cancel?: boolean;
    mid?: string;
    kirana_store_id?: string;
    order_created_time?: string;
    escalation?: any;
    user_id: string;
    affiliate_shipment_id: string;
    is_pdsr?: string;
    status?: ShipmentStatusData;
    child_nodes?: string[];
    tracking_url: string;
    pay_button?: string;
    delivery_slot?: any;
    billing_details?: UserDetailsData;
    is_invoiced: boolean;
    dp_details?: DPDetailsData;
    bags?: OrderBags[];
    email_id: string;
    delivery_status: any[];
    user_info?: any;
    lock_status: string;
    picked_date?: string;
    priority_text?: string;
    refund_details?: any;
    replacement_details?: string;
    secured_delivery_flag?: string;
    payments?: ShipmentPayments;
    delivery_details?: UserDetailsData;
    is_fynd_store?: string;
    forward_tracking_list?: any[];
    is_not_fynd_source: boolean;
    beneficiary_details?: boolean;
    order?: OrderDetailsData;
    forward_order_status?: any[];
    shipment_status?: string;
    total_items?: number;
    payment_mode?: string;
    is_fynd_coupon: boolean;
    packaging_type?: string;
    custom_meta?: any[];
    tracking_list?: TrackingList[];
    vertical?: string;
    current_shipment_status: any;
    fyndstore_emp: any;
    due_date?: string;
    total_bags?: number;
    bank_data?: any;
};
type PlatformShipment = {
    shipment_images?: string[];
    operational_status?: string;
    platform_logo?: string;
    journey_type?: string;
    prices?: Prices;
    enable_dp_tracking?: boolean;
    gst_details?: GSTDetailsData;
    shipment_id: string;
    shipment_quantity?: number;
    fulfilling_store?: FulfillingStore;
    coupon?: any;
    user_agent?: string;
    bag_status_history?: BagStatusHistory[];
    status?: ShipmentStatusData;
    delivery_slot?: any;
    billing_details?: UserDetailsData;
    dp_details?: DPDetailsData;
    bags?: OrderBags[];
    picked_date?: string;
    priority_text?: string;
    payments?: ShipmentPayments;
    delivery_details?: UserDetailsData;
    order?: OrderDetailsData;
    shipment_status?: string;
    total_items?: number;
    payment_mode?: string;
    packaging_type?: string;
    custom_meta?: any[];
    tracking_list?: TrackingList[];
    vertical?: string;
    total_bags?: number;
};
type OrderMeta = {
    files?: any[];
    comment?: string;
    order_type?: string;
    order_child_entities?: string[];
    order_tags?: any[];
    employee_id?: number;
    ordering_store?: number;
    payment_type?: string;
    order_platform?: string;
    extra_meta?: any;
    cart_id?: number;
    customer_note?: string;
    staff?: any;
    mongo_cart_id?: number;
    currency_symbol?: string;
};
type OrderDict = {
    payment_methods?: any;
    fynd_order_id: string;
    meta?: OrderMeta;
    order_date: string;
};
type ShipmentDetailsResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    order?: OrderDict;
};
type SubLane = {
    index?: number;
    total_items?: number;
    actions?: any[];
    value?: string;
    text?: string;
};
type SuperLane = {
    value: string;
    total_items?: number;
    text: string;
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
    channel?: PlatformChannel;
    total_order_value?: number;
    order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    order_id?: string;
    user_info?: UserDataInfo;
    payment_mode?: string;
    meta?: any;
    order_created_time?: string;
    shipments?: PlatformShipment[];
};
type OrderListingResponse = {
    lane?: string;
    items?: PlatformOrderItems[];
    total_count?: number;
    success?: boolean;
    message?: string;
    page?: Page;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    value: number;
    key: string;
    text: string;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    raw_status?: string;
    shipment_type?: string;
    last_location_recieved_at?: string;
    account_name?: string;
    meta?: any;
    awb?: string;
    updated_time?: string;
    reason?: string;
    updated_at?: string;
    status?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    processed?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    returned?: FiltersInfo[];
    action_centre?: FiltersInfo[];
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
    display_name?: string;
    s3_key?: string;
    report_name?: string;
    request_details?: any;
    report_type?: string;
    report_requested_at?: string;
    report_id?: string;
    report_created_at?: string;
    status?: string;
};
type JioCodeUpsertDataSet = {
    item_id?: string;
    jio_code?: string;
    company_id?: string;
    article_id?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    type?: string;
    value?: string;
    message?: string;
};
type JioCodeUpsertResponse = {
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
    identifier?: string;
    trace_id?: string;
    data?: any[];
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    label?: any;
    company_id?: string;
    store_name?: string;
    do_invoice_label_generated: boolean;
    invoice_status?: string;
    invoice?: any;
    store_code?: string;
    store_id?: string;
    data?: any;
    batch_id: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type FileResponse = {
    file_path?: string;
    cdn?: URL;
    method?: string;
    namespace?: string;
    upload?: FileUploadResponse;
    size?: number;
    file_name?: string;
    operation?: string;
    tags?: string[];
    content_type?: string;
};
type bulkListingData = {
    company_id?: number;
    processing?: number;
    successful?: number;
    store_name?: string;
    uploaded_on?: string;
    file_name?: string;
    store_id?: number;
    user_id?: string;
    status?: string;
    id?: string;
    successful_shipments?: any[];
    processing_shipments?: string[];
    total?: number;
    failed_shipments?: any[];
    failed?: number;
    excel_url?: string;
    store_code?: string;
    user_name?: string;
    batch_id?: string;
};
type BulkListingPage = {
    type?: string;
    has_previous?: boolean;
    current?: number;
    size?: number;
    has_next?: boolean;
    total?: number;
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
    display_name?: string;
    qc_type?: string[];
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
    failed_shipments_count?: number;
    processing_shipments_count?: number;
    total_shipments_count?: number;
    company_id?: string;
    successful_shipment_ids?: string[];
    successful_shipments_count?: number;
    batch_id?: string;
};
type BulkActionDetailsResponse = {
    error?: string[];
    success?: string;
    failed_records?: string[];
    uploaded_by?: string;
    uploaded_on?: string;
    message?: string;
    data?: BulkActionDetailsDataField[];
    user_id?: string;
    status?: boolean;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type BuyerDetails = {
    ajio_site_id?: string;
    city: string;
    name: string;
    state: string;
    gstin: string;
    address: string;
    pincode: number;
};
type LockData = {
    lock_message?: string;
    locked?: boolean;
    mto?: boolean;
};
type EInvoice = {
    irn?: string;
    error_code?: string;
    signed_qr_code?: string;
    error_message?: string;
    signed_invoice?: string;
    acknowledge_no?: number;
    acknowledge_date?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentMeta = {
    return_store_node?: number;
    order_type?: string;
    shipment_weight?: number;
    shipment_volumetric_weight?: number;
    store_invoice_updated_date?: string;
    dp_id?: string;
    bag_weight?: any;
    return_affiliate_order_id?: string;
    forward_affiliate_order_id?: string;
    auto_trigger_dp_assignment_acf: boolean;
    return_details?: any;
    dp_name?: string;
    timestamp?: ShipmentTimeStamp;
    fulfilment_priority_text?: string;
    b2b_buyer_details?: BuyerDetails;
    marketplace_store_id?: string;
    lock_data?: LockData;
    einvoice_info?: EinvoiceInfo;
    box_type?: string;
    same_store_available: boolean;
    forward_affiliate_shipment_id?: string;
    awb_number?: string;
    ewaybill_info?: any;
    po_number?: string;
    formatted?: Formatted;
    assign_dp_from_sb?: boolean;
    external?: any;
    weight: number;
    debug_info?: DebugInfo;
    dp_options?: any;
    return_affiliate_shipment_id?: string;
    return_awb_number?: string;
    due_date?: string;
    packaging_name?: string;
    b2c_buyer_details?: any;
    dp_sort_key?: string;
};
type AffiliateMeta = {
    channel_order_id?: string;
    coupon_code?: string;
    channel_shipment_id?: string;
    quantity?: number;
    size_level_total_qty?: number;
    order_item_id?: string;
    box_type?: string;
    loyalty_discount?: number;
    due_date?: string;
    employee_discount?: number;
    is_priority?: boolean;
};
type PDFLinks = {
    credit_note_url?: string;
    invoice_pos?: string;
    po_invoice?: string;
    label_a4?: string;
    label?: string;
    label_pos?: string;
    label_type: string;
    invoice_a6?: string;
    invoice?: string;
    invoice_a4?: string;
    b2b?: string;
    label_a6?: string;
    invoice_type: string;
};
type AffiliateDetails = {
    shipment_meta: ShipmentMeta;
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    ad_id?: string;
    affiliate_store_id: string;
    pdf_links?: PDFLinks;
    affiliate_bag_id: string;
    affiliate_shipment_id: string;
    company_affiliate_tag?: string;
};
type Attributes = {
    gender?: string[];
    marketer_name?: string;
    name?: string;
    primary_color_hex?: string;
    marketer_address?: string;
    essential?: string;
    primary_material?: string;
    brand_name?: string;
    primary_color?: string;
};
type Item = {
    webstore_product_url?: string;
    branch_url?: string;
    can_return?: boolean;
    brand: string;
    l3_category?: number;
    size: string;
    meta?: any;
    can_cancel?: boolean;
    slug_key: string;
    l1_category?: string[];
    department_id?: number;
    image: string[];
    l1_category_id?: number;
    brand_id: number;
    l2_category?: string[];
    gender?: string;
    item_id: number;
    l2_category_id?: number;
    name: string;
    code?: string;
    attributes: Attributes;
    last_updated_at?: string;
    l3_category_name?: string;
    color?: string;
};
type AffiliateBagDetails = {
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_bag_id: string;
};
type BagGSTDetails = {
    sgst_tax_percentage: number;
    gst_fee: number;
    igst_gst_fee: string;
    tax_collected_at_source: number;
    gst_tag: string;
    is_default_hsn_code?: boolean;
    brand_calculated_amount: number;
    cgst_gst_fee: string;
    hsn_code: string;
    value_of_good: number;
    sgst_gst_fee: string;
    hsn_code_id: string;
    gst_tax_percentage: number;
    gstin_code?: string;
    cgst_tax_percentage: number;
    igst_tax_percentage: number;
};
type Brand = {
    brand_id: number;
    start_date?: string;
    credit_note_allowed?: boolean;
    created_on?: number;
    logo?: string;
    company: string;
    credit_note_expiry_days?: number;
    modified_on?: number;
    pickup_location?: string;
    is_virtual_invoice?: boolean;
    brand_name: string;
    invoice_prefix?: string;
    script_last_ran?: string;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type StoreAddress = {
    city: string;
    address_category: string;
    created_at: string;
    pincode: number;
    phone: string;
    country: string;
    landmark?: string;
    country_code: string;
    version?: string;
    longitude: number;
    address2?: string;
    area?: string;
    email?: string;
    updated_at: string;
    contact_person: string;
    address1: string;
    state: string;
    address_type: string;
    latitude: number;
};
type EInvoicePortalDetails = {
    user?: string;
    username?: string;
    password?: string;
};
type Document = {
    legal_name: string;
    ds_type: string;
    url?: string;
    value: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    enabled: boolean;
    user?: string;
    username?: string;
    password?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type StoreMeta = {
    display_name: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    product_return_config?: any;
    documents?: StoreDocuments;
    ewaybill_portal_details?: any;
    stage: string;
    additional_contact_details?: any;
    timing?: any[];
    gst_number?: string;
    notification_emails?: string[];
    gst_credentials: StoreGstCredentials;
};
type Store = {
    city: string;
    parent_store_id?: number;
    company_id: number;
    is_enabled_for_recon?: boolean;
    is_active?: boolean;
    created_at: string;
    pincode: string;
    phone: number;
    store_email: string;
    mall_area?: string;
    country: string;
    order_integration_id?: string;
    store_active_from?: string;
    store_address_json?: StoreAddress;
    fulfillment_channel: string;
    mall_name?: string;
    meta: StoreMeta;
    longitude: number;
    address2?: string;
    location_type: string;
    packaging_material_count?: number;
    alohomora_user_id?: number;
    updated_at?: string;
    brand_id?: any;
    contact_person: string;
    address1: string;
    is_archived?: boolean;
    name: string;
    s_id: string;
    state: string;
    code?: string;
    vat_no?: string;
    login_username: string;
    latitude: number;
    brand_store_tags?: string[];
};
type B2BPODetails = {
    docker_number?: string;
    total_gst_percentage?: number;
    po_line_amount?: number;
    partial_can_ret?: boolean;
    item_base_price?: number;
    po_tax_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type ArticleDetails = {
    status?: any;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
    is_returnable: boolean;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Dimensions = {
    height?: number;
    width?: number;
    is_default?: boolean;
    length?: number;
    unit?: string;
};
type Weight = {
    shipping?: number;
    is_default?: boolean;
    unit?: string;
};
type Article = {
    identifiers: Identifier;
    is_set?: boolean;
    raw_meta?: any;
    return_config?: ReturnConfig;
    _id: string;
    dimensions?: Dimensions;
    weight?: Weight;
    code?: string;
    esp_modified?: any;
    size: string;
    a_set?: any;
    child_details?: any;
    uid: string;
    seller_identifier: string;
};
type BagDetailsPlatformResponse = {
    affiliate_details?: AffiliateDetails;
    operational_status?: string;
    financial_breakup: FinancialBreakup[];
    journey_type: string;
    current_status: BagStatusHistory;
    item: Item;
    affiliate_bag_details: AffiliateBagDetails;
    prices: Prices;
    gst_details: BagGSTDetails;
    shipment_id?: string;
    tags?: string[];
    line_number?: number;
    display_name?: string;
    order_integration_id?: string;
    brand: Brand;
    applied_promos?: any[];
    dates?: Dates;
    identifier?: string;
    ordering_store?: Store;
    bag_status_history?: BagStatusHistory;
    meta?: BagMeta;
    reasons?: any[];
    article_details?: ArticleDetails;
    seller_identifier?: string;
    status: BagReturnableCancelableStatus;
    original_bag_list?: number[];
    quantity?: number;
    current_operational_status: BagStatusHistory;
    entity_type?: string;
    no_of_bags_order?: number;
    article: Article;
    b_id: number;
    bag_status: BagStatusHistory[];
    b_type?: string;
    restore_coupon?: boolean;
    restore_promos?: any;
    qc_required?: any;
    bag_update_time?: number;
    parent_promo_bags?: any;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    item_total: number;
    current: number;
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
    error?: string;
    shipment_id?: string;
    status?: number;
    message?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    error_trace?: string;
    status: number;
    message: string;
};
type StoreReassign = {
    item_id?: string;
    fynd_order_id?: string;
    set_id?: string;
    affiliate_bag_id?: string;
    store_id: number;
    mongo_article_id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    bag_id?: number;
    reason_ids?: number[];
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_shipment_id?: string;
    id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    action: string;
    entities: Entities[];
    action_type: string;
};
type Bags = {
    affiliate_bag_id?: string;
    bag_id?: number;
    is_locked?: boolean;
    affiliate_order_id?: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    bags?: Bags[];
    affiliate_shipment_id?: string;
    is_bag_locked?: boolean;
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    is_shipment_locked?: boolean;
    shipment_id?: string;
    affiliate_id?: string;
    status?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    description?: string;
    id: number;
    title?: string;
    platform_name?: string;
    platform_id?: string;
    logo_url?: string;
    to_datetime?: string;
    created_at?: string;
    company_id?: number;
    from_datetime?: string;
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
type ProductsReasonsData = {
    reason_text?: string;
    reason_id?: number;
};
type ProductsReasonsFilters = {
    identifier?: string;
    quantity?: number;
    line_number?: number;
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
    identifier?: string;
    quantity?: number;
    line_number?: number;
};
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
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
type ShipmentsRequest = {
    identifier: string;
    reasons?: ReasonsData;
    products?: Products[];
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    status?: string;
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
};
type ShipmentsResponse = {
    identifier?: string;
    final_state?: any;
    exception?: string;
    code?: string;
    stack_trace?: string;
    meta?: any;
    status?: number;
    message?: string;
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
    owner: string;
    token: string;
    description?: string;
    created_at: string;
    id: string;
    secret: string;
    updated_at: string;
    meta?: AffiliateAppConfigMeta[];
    name: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
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
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
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
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    article_lookup?: string;
    affiliate: Affiliate;
    bag_end_state?: string;
    store_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    create_user?: boolean;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    identifier: any;
    amount_paid: number;
    affiliate_store_id: string;
    pdf_links?: MarketPlacePdf;
    avl_qty: number;
    affiliate_meta: any;
    company_id: number;
    sku: string;
    item_id: number;
    delivery_charge: number;
    seller_identifier: string;
    store_id: number;
    discount: number;
    modified_on: string;
    fynd_store_id: string;
    price_effective: number;
    transfer_price: number;
    hsn_code_id: string;
    unit_price: number;
    item_size: string;
    price_marked: number;
    _id: string;
    quantity: number;
};
type OrderUser = {
    email: string;
    phone: number;
    city: string;
    address1?: string;
    last_name: string;
    first_name: string;
    pincode: string;
    mobile: number;
    address2?: string;
    state: string;
    country: string;
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
type ArticleDetails1 = {
    dimension: any;
    brand_id: number;
    attributes: any;
    weight: any;
    _id: string;
    category: any;
    quantity: number;
};
type LocationDetails = {
    fulfillment_id: number;
    articles: ArticleDetails1[];
    fulfillment_type: string;
};
type ShipmentDetails = {
    affiliate_shipment_id: string;
    box_type?: string;
    dp_id?: number;
    meta?: any;
    fulfillment_id: number;
    articles: ArticleDetails1[];
    shipments: number;
};
type ShipmentConfig = {
    journey: string;
    identifier: string;
    to_pincode: string;
    location_details?: LocationDetails;
    action: string;
    source: string;
    shipment: ShipmentDetails[];
    payment_mode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    bags: AffiliateBag[];
    cod_charges: number;
    coupon?: string;
    payment_mode: string;
    delivery_charges: number;
    user: UserData;
    discount: number;
    items: any;
    shipping_address: OrderUser;
    billing_address: OrderUser;
    affiliate_order_id?: string;
    order_priority?: OrderPriority;
    shipment?: ShipmentData;
    payment?: any;
    order_value: number;
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
    success?: boolean;
    message?: string;
};
type ActionInfo = {
    description: string;
    id: number;
    slug: string;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    l3_detail?: string;
    l1_detail?: string;
    user: string;
    ticket_url?: string;
    type: string;
    l2_detail?: string;
    createdat: string;
    ticket_id?: string;
    bag_id?: number;
    message: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    amount_paid: number;
    country_code: string;
    message: string;
    order_id: string;
    brand_name: string;
    shipment_id: number;
    phone_number: number;
    payment_mode: string;
    customer_name: string;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    bag_id: number;
    slug: string;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    bag_list?: number[];
    remarks?: string;
    id: number;
    shipment_id?: string;
    meta: Meta;
    status?: string;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type OrderStatusData = {
    errors?: string[];
    shipment_details?: ShipmentDetail[];
    order_details: OrderDetails;
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    order_type: string;
    dp_id: number;
    qc_required: string;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type Tax = {
    breakup?: any[];
    name: string;
    amount: any;
    rate: number;
};
type Charge = {
    amount: any;
    code?: string;
    tax?: Tax;
    type: string;
    name: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ShippingInfo = {
    floor_no?: string;
    primary_email: string;
    geo_location?: any;
    first_name: string;
    country: string;
    middle_name?: string;
    city: string;
    address1: string;
    title?: string;
    country_code?: string;
    customer_code?: string;
    primary_mobile_number: string;
    address2?: string;
    landmark?: string;
    address_type?: string;
    alternate_email?: string;
    state_code?: string;
    pincode: string;
    external_customer_code?: string;
    slot?: any[];
    alternate_mobile_number?: string;
    gender?: string;
    house_no?: string;
    last_name?: string;
    state: string;
    shipping_type?: string;
};
type BillingInfo = {
    floor_no?: string;
    primary_email: string;
    first_name: string;
    country: string;
    middle_name?: string;
    city: string;
    address1: string;
    title?: string;
    country_code?: string;
    customer_code?: string;
    primary_mobile_number: string;
    address2?: string;
    alternate_email?: string;
    state_code?: string;
    pincode: string;
    external_customer_code?: string;
    alternate_mobile_number?: string;
    gender?: string;
    house_no?: string;
    last_name?: string;
    state: string;
};
type ProcessingDates = {
    dp_pickup_slot?: any;
    pack_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_by_date?: string;
    dispatch_after_date?: string;
    confirm_by_date?: string;
};
type LineItem = {
    charges?: Charge[];
    external_line_id?: string;
    custom_messasge?: string;
    seller_identifier: string;
    quantity?: number;
    meta?: any;
};
type Shipment = {
    priority?: number;
    processing_dates?: ProcessingDates;
    external_shipment_id?: string;
    location_id: number;
    line_items: LineItem[];
    meta?: any;
};
type PaymentMethod = {
    collect_by: string;
    amount: number;
    refund_by: string;
    mode: string;
    meta?: any;
    name: string;
    transaction_data?: any;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type CreateOrderAPI = {
    charges: Charge[];
    currency_info?: any;
    tax_info?: TaxInfo;
    shipping_info: ShippingInfo;
    external_order_id?: string;
    billing_info: BillingInfo;
    external_creation_date?: string;
    meta?: any;
    shipments: Shipment[];
    payment_info: PaymentInfo;
};
type CreateOrderErrorReponse = {
    request_id?: string;
    exception?: string;
    code?: string;
    stack_trace?: string;
    meta?: string;
    info?: any;
    status: number;
    message: string;
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
    source?: string;
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
};
type CreateChannelConfig = {
    dp_configuration?: DpConfiguration;
    lock_states?: string[];
    location_reassignment?: boolean;
    shipment_assignment?: string;
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
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
    order_details?: FyndOrderIdList[];
    start_date: string;
    mobile: number;
};
type GetSearchWordsData = {
    result?: any;
    app_id?: string;
    _custom_json?: any;
    uid?: string;
    words?: string[];
    is_active?: boolean;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    app_id?: string;
    _custom_json?: any;
    words?: string[];
    is_active?: boolean;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    results?: any[];
    app_id?: string;
    _custom_json?: any;
    uid?: string;
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
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
    display?: string;
    action?: AutocompleteAction;
    logo?: Media;
    _custom_json?: any;
};
type CreateAutocompleteKeyword = {
    results?: AutocompleteResult[];
    app_id?: string;
    _custom_json?: any;
    words?: string[];
    is_active?: boolean;
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    results?: any[];
};
type ProductBundleItem = {
    product_uid: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    max_quantity: number;
    allow_remove?: boolean;
    min_quantity: number;
};
type GetProductBundleCreateResponse = {
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    slug: string;
    meta?: any;
    page_visibility?: string[];
    created_by?: any;
    created_on?: string;
    company_id?: number;
    logo?: string;
    id?: string;
    choice: string;
    modified_on?: string;
    modified_by?: any;
    name: string;
    is_active: boolean;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    slug: string;
    meta?: any;
    page_visibility?: string[];
    created_by?: any;
    created_on?: string;
    company_id?: number;
    logo?: string;
    choice: string;
    modified_on?: string;
    modified_by?: any;
    name: string;
    is_active: boolean;
};
type LimitedProductData = {
    images?: string[];
    quantity?: number;
    item_code?: string;
    slug?: string;
    sizes?: string[];
    attributes?: any;
    identifier?: any;
    uid?: number;
    short_description?: string;
    country_of_origin?: string;
    name?: string;
    price?: any;
};
type Size = {
    display?: string;
    is_available?: boolean;
    value?: string;
    quantity?: number;
};
type Price = {
    currency?: string;
    min_effective?: number;
    min_marked?: number;
    max_effective?: number;
    max_marked?: number;
};
type GetProducts = {
    product_details?: LimitedProductData;
    product_uid?: number;
    sizes?: Size[];
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    max_quantity?: number;
    allow_remove?: boolean;
    price?: Price;
    min_quantity?: number;
};
type GetProductBundleResponse = {
    same_store_assignment?: boolean;
    products?: GetProducts[];
    slug?: string;
    meta?: any;
    page_visibility?: string[];
    company_id?: number;
    logo?: string;
    choice?: string;
    name?: string;
    is_active?: boolean;
};
type ProductBundleUpdateRequest = {
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    slug: string;
    meta?: any;
    page_visibility?: string[];
    company_id?: number;
    logo?: string;
    choice: string;
    modified_on?: string;
    modified_by?: any;
    name: string;
    is_active: boolean;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    guide?: Guide;
    created_on?: string;
    subtitle?: string;
    created_by?: any;
    active?: boolean;
    tag?: string;
    company_id?: number;
    id?: string;
    modified_on?: string;
    modified_by?: any;
    description?: string;
    title: string;
    name: string;
    brand_id?: number;
    image?: string;
};
type SizeGuideResponse = {
    guide?: any;
    created_on?: string;
    brand_id?: number;
    subtitle?: string;
    active?: boolean;
    company_id?: number;
    tag?: string;
    id?: string;
    modified_on?: string;
    modified_by?: any;
    title?: string;
    name?: string;
    created_by?: any;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    is_gift?: boolean;
    moq?: MOQData;
    alt_text?: any;
    is_cod?: boolean;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationItemMOQ = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    is_gift?: boolean;
    moq?: ApplicationItemMOQ;
    alt_text?: any;
    _custom_meta?: MetaFields[];
    is_cod?: boolean;
    _custom_json?: any;
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
type PageResponseType = {
    next: number;
    has_next: boolean;
    current: number;
    total_count: number;
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
    unit?: string;
    priority: number;
    name: string;
    is_active: boolean;
};
type AppConfigurationDetail = {
    slug: string;
    is_default: boolean;
    attributes?: AttributeDetailsGroup[];
    app_id: string;
    logo?: string;
    template_slugs?: string[];
    priority: number;
    name?: string;
    is_active: boolean;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_default: boolean;
    key: string;
    logo?: string;
    app_id: string;
    priority: number;
    default_key: string;
    name?: string;
    is_active: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    compare?: any;
    detail?: any;
    similar?: any;
    variant?: any;
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
    units?: any[];
    filter_types?: string[];
    display?: string;
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductConfig = {
    key: string;
    subtitle?: string;
    logo?: string;
    size?: ProductSize;
    priority: number;
    title?: string;
    is_active: boolean;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    key: string;
    display_type: string;
    logo?: string;
    size: ProductSize;
    priority: number;
    name: string;
    is_active: boolean;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationListingSortConfig = {
    key: string;
    logo?: string;
    priority: number;
    name?: string;
    is_active: boolean;
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
    condition?: string;
    sort?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map?: any;
    map_values?: any[];
    value?: string;
};
type ConfigurationListingFilterConfig = {
    display_name?: string;
    type: string;
    key: string;
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    priority: number;
    name?: string;
    is_active: boolean;
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
    config_id?: string;
    product?: ConfigurationProduct;
    config_type: string;
    type?: string;
    created_on?: string;
    created_by?: any;
    app_id: string;
    id?: string;
    modified_on?: string;
    modified_by?: any;
    listing?: ConfigurationListing;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    config_id?: string;
    product?: ConfigurationProduct;
    config_type: string;
    type?: string;
    created_on?: string;
    created_by?: any;
    app_id: string;
    modified_on?: string;
    modified_by?: any;
    listing?: ConfigurationListing;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_type: string;
    app_id: string;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    is_selected?: boolean;
    value?: string;
    name?: string;
};
type ProductFiltersKey = {
    kind?: string;
    logo?: string;
    operators?: string[];
    display: string;
    name: string;
};
type ProductFiltersValue = {
    query_format?: string;
    currency_symbol?: string;
    currency_code?: string;
    selected_min?: number;
    display_format?: string;
    count?: number;
    min?: number;
    is_selected: boolean;
    max?: number;
    selected_max?: number;
    display: string;
    value: any;
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
type CollectionQuery = {
    value: any[];
    op: string;
    attribute: string;
};
type Media1 = {
    url: string;
    type?: string;
    meta?: any;
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
    allow_sort?: boolean;
    name?: string;
    is_active?: boolean;
    cron?: any;
    query?: CollectionQuery[];
    action?: Action;
    logo?: Media1;
    priority?: number;
    slug?: string;
    type?: string;
    badge?: any;
    app_id?: string;
    description?: string;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    meta?: any;
    tag?: string[];
    uid?: string;
    _schedule?: any;
    allow_facets?: boolean;
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
    aspect_ratio: string;
    url: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type UserInfo = {
    user_id?: string;
    email?: string;
    uid?: string;
    username?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionSchedule = {
    cron?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
    end?: string;
    start?: string;
};
type CreateCollection = {
    allow_sort?: boolean;
    is_visible?: boolean;
    name: string;
    is_active?: boolean;
    sort_on?: string;
    query?: CollectionQuery[];
    logo: CollectionImage;
    priority?: number;
    slug: string;
    type: string;
    badge?: CollectionBadge;
    app_id: string;
    published?: boolean;
    description?: string;
    visible_facets_keys?: string[];
    banners: CollectionBanner;
    created_by?: UserInfo;
    tags?: string[];
    seo?: SeoDetail;
    meta?: any;
    _custom_json?: any;
    modified_by?: UserInfo;
    _locale_language?: any;
    _schedule?: CollectionSchedule;
    allow_facets?: boolean;
};
type CollectionCreateResponse = {
    allow_sort?: boolean;
    name?: string;
    is_active?: boolean;
    cron?: any;
    query?: CollectionQuery[];
    sort_on?: string;
    logo?: BannerImage;
    priority?: number;
    slug?: string;
    type?: string;
    badge?: any;
    app_id?: string;
    description?: string;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    meta?: any;
    tag?: string[];
    _schedule?: any;
    allow_facets?: boolean;
};
type CollectionDetailResponse = {
    cron?: any;
    _schedule?: any;
    banners?: ImageUrls;
    slug?: string;
    type?: string;
    query?: CollectionQuery[];
    meta?: any;
    badge?: any;
    app_id?: string;
    logo?: Media1;
    tag?: string[];
    allow_sort?: boolean;
    priority?: number;
    description?: string;
    allow_facets?: boolean;
    name?: string;
    is_active?: boolean;
    visible_facets_keys?: string[];
};
type UpdateCollection = {
    allow_sort?: boolean;
    is_visible?: boolean;
    name?: string;
    is_active?: boolean;
    query?: CollectionQuery[];
    sort_on?: string;
    logo?: CollectionImage;
    priority?: number;
    slug?: string;
    type?: string;
    badge?: CollectionBadge;
    published?: boolean;
    description?: string;
    visible_facets_keys?: string[];
    banners?: CollectionBanner;
    tags?: string[];
    seo?: SeoDetail;
    meta?: any;
    _custom_json?: any;
    modified_by?: UserInfo;
    _locale_language?: any;
    _schedule?: CollectionSchedule;
    allow_facets?: boolean;
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
type ProductBrand = {
    action?: Action;
    logo?: Media1;
    uid?: number;
    name?: string;
};
type Price1 = {
    min?: number;
    currency_symbol?: string;
    max?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    sellable?: boolean;
    product_online_date?: string;
    promo_meta?: any;
    medias?: Media1[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    name?: string;
    discount?: string;
    color?: string;
    item_code?: string;
    rating?: number;
    image_nature?: string;
    type?: string;
    slug: string;
    item_type?: string;
    tryouts?: string[];
    similars?: string[];
    description?: string;
    brand?: ProductBrand;
    teaser_tag?: any;
    attributes?: any;
    has_variant?: boolean;
    highlights?: string[];
    rating_count?: number;
    uid?: number;
    short_description?: string;
    price?: ProductListingPrice;
};
type GetCollectionItemsResponse = {
    page?: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
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
type CatalogInsightItem = {
    sellable_count?: number;
    out_of_stock_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    available_sizes?: number;
    total_sizes?: number;
    article_freshness?: number;
    available_articles?: number;
    name?: string;
    total_articles?: number;
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
    company_id?: number;
    opt_level: string;
    enabled?: boolean;
    store_ids?: number[];
};
type CompanyOptIn = {
    platform: string;
    brand_ids: number[];
    created_on: number;
    company_id: number;
    opt_level: string;
    enabled: boolean;
    modified_on: number;
    store_ids: number[];
    modified_by?: any;
    created_by?: any;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    business_type?: string;
    company_type?: string;
    uid?: number;
    name?: string;
};
type CompanyBrandDetail = {
    brand_name?: string;
    company_id?: number;
    total_article?: number;
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
    display_name?: string;
    store_type?: string;
    timing?: any;
    created_on?: string;
    store_code?: string;
    company_id?: number;
    documents?: any[];
    manager?: any;
    modified_on?: string;
    uid?: number;
    address?: any;
    additional_contacts?: any[];
    name?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
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
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    type: string;
    multi?: boolean;
    format?: string;
    mandatory?: boolean;
    allowed_values?: string[];
    range?: AttributeSchemaRange;
};
type GenderDetail = {
    is_nested?: boolean;
    filters?: AttributeMasterFilter;
    enabled_for_end_consumer?: boolean;
    slug?: string;
    meta?: AttributeMasterMeta;
    details?: AttributeMasterDetails;
    logo?: string;
    id?: string;
    departments?: string[];
    schema?: AttributeMaster;
    description?: string;
    name?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    message?: string;
    meta?: any;
    status?: number;
    errors?: any;
    code?: string;
};
type UserSerializer = {
    username?: string;
    _id?: string;
    user_id?: string;
    uid?: string;
    contact?: string;
};
type GetDepartment = {
    page_no?: number;
    slug?: string;
    created_on?: string;
    created_by?: UserSerializer;
    item_type?: string;
    logo?: string;
    priority_order?: number;
    search?: string;
    synonyms?: string[];
    modified_on?: string;
    uid?: number;
    page_size?: number;
    modified_by?: UserSerializer;
    name?: string;
    is_active?: boolean;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    message?: string;
    meta?: any;
    status?: number;
    errors?: any;
    code?: string;
};
type DepartmentCreateUpdate = {
    slug?: string;
    logo: string;
    priority_order: number;
    _custom_json?: any;
    synonyms?: string[];
    uid?: number;
    _cls?: string;
    platforms?: any;
    name: string;
    is_active?: boolean;
    tags?: string[];
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
    username: string;
    user_id: string;
    contact?: string;
};
type DepartmentModel = {
    verified_by?: UserDetail;
    _id?: any;
    verified_on?: string;
    is_active?: boolean;
    slug?: any;
    created_on: string;
    logo: string;
    priority_order: number;
    _custom_json?: any;
    synonyms?: any[];
    modified_on: string;
    uid?: number;
    modified_by?: UserDetail;
    _cls?: any;
    name: any;
    created_by?: UserDetail;
};
type ProductTemplate = {
    is_physical: boolean;
    categories?: string[];
    attributes_schema?: any[];
    slug: string;
    is_expirable?: boolean;
    created_on?: string;
    created_by?: any;
    attributes?: string[];
    tag?: string;
    logo?: string;
    departments?: string[];
    is_archived?: boolean;
    modified_on?: string;
    modified_by?: any;
    description?: string;
    name?: string;
    is_active?: boolean;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    custom_order?: any;
    return_config?: any;
    name?: any;
    is_active?: any;
    size_guide?: any;
    item_code?: any;
    command?: any;
    product_group_tag?: any;
    multi_size?: any;
    hsn_code?: any;
    currency?: any;
    slug?: any;
    trader?: any;
    category_slug?: any;
    item_type?: any;
    sizes?: any;
    variants?: any;
    trader_type?: any;
    product_publish?: any;
    description?: any;
    media?: any;
    tags?: any;
    teaser_tag?: any;
    highlights?: any;
    is_dependent?: any;
    short_description?: any;
    brand_uid?: any;
    no_of_boxes?: any;
    country_of_origin?: any;
};
type GlobalValidation = {
    type?: string;
    definitions?: any;
    properties?: Properties;
    required?: string[];
    description?: string;
    title?: string;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    is_physical: boolean;
    categories?: string[];
    attributes_schema?: any[];
    slug: string;
    is_expirable?: boolean;
    attributes?: string[];
    tag?: string;
    logo?: string;
    id?: string;
    departments?: string[];
    is_archived?: boolean;
    description?: string;
    name?: string;
    is_active?: boolean;
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
type ProductDownloadItemsData = {
    brand?: string[];
    type?: string;
    templates?: string[];
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadsItems = {
    seller_id?: number;
    completed_on?: string;
    url?: string;
    status?: string;
    id?: string;
    task_id?: string;
    trigger_on?: string;
    data?: ProductDownloadItemsData;
    template_tags?: any;
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
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Media2 = {
    landscape: string;
    logo: string;
    portrait: string;
};
type Category = {
    hierarchy?: Hierarchy[];
    slug?: string;
    created_on?: string;
    priority?: number;
    created_by?: any;
    tryouts?: string[];
    id?: string;
    departments: number[];
    marketplaces?: CategoryMapping;
    media?: Media2;
    uid?: number;
    level: number;
    synonyms?: string[];
    modified_by?: any;
    modified_on?: string;
    name: string;
    is_active: boolean;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    hierarchy?: Hierarchy[];
    slug?: string;
    name: string;
    tryouts?: string[];
    departments: number[];
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    level: number;
    priority?: number;
    media?: Media2;
    is_active: boolean;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type ReturnConfigResponse = {
    unit: string;
    time: number;
    returnable: boolean;
};
type Image = {
    secure_url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    url?: string;
};
type ProductPublished = {
    product_online_date?: string;
    is_set?: boolean;
};
type Logo = {
    url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    secure_url?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Product = {
    verified_on?: string;
    created_on?: string;
    all_identifiers?: string[];
    custom_order?: any;
    return_config?: ReturnConfigResponse;
    name?: string;
    is_active?: boolean;
    size_guide?: string;
    is_physical?: boolean;
    images?: Image[];
    moq?: any;
    color?: string;
    item_code?: string;
    all_company_ids?: number[];
    tax_identifier?: any;
    product_group_tag?: string[];
    company_id?: number;
    multi_size?: boolean;
    hsn_code?: string;
    currency?: string;
    variant_media?: any;
    image_nature?: string;
    verified_by?: VerifiedBy;
    is_image_less_product?: boolean;
    is_set?: boolean;
    slug?: string;
    category_slug?: string;
    item_type?: string;
    sizes?: any[];
    variants?: any;
    trader?: any[];
    all_sizes?: any[];
    id?: string;
    modified_on?: string;
    category_uid?: number;
    variant_group?: any;
    description?: string;
    product_publish?: ProductPublished;
    pending?: string;
    media?: Media1[];
    created_by?: any;
    tags?: string[];
    brand?: Brand;
    template_tag?: string;
    teaser_tag?: any;
    l3_mapping?: string[];
    attributes?: any;
    highlights?: string[];
    _custom_json?: any;
    primary_color?: string;
    departments?: number[];
    net_quantity?: NetQuantityResponse;
    stage?: string;
    uid?: number;
    is_dependent?: boolean;
    short_description?: string;
    modified_by?: any;
    brand_uid?: number;
    is_expirable?: boolean;
    no_of_boxes?: number;
    category?: any;
    country_of_origin?: string;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
    manufacturing_time?: number;
};
type TaxIdentifier = {
    hsn_code?: string;
    reporting_hsn?: string;
    hsn_code_id?: string;
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
type TeaserTag = {
    url?: string;
    tag?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type ProductCreateUpdateSchemaV2 = {
    bulk_job_id?: string;
    custom_order?: CustomOrder;
    return_config: ReturnConfig;
    name: string;
    is_active?: boolean;
    size_guide?: string;
    item_code: string;
    tax_identifier: TaxIdentifier;
    action?: string;
    product_group_tag?: string[];
    company_id: number;
    multi_size?: boolean;
    currency: string;
    variant_media?: any;
    is_image_less_product?: boolean;
    slug: string;
    category_slug: string;
    is_set?: boolean;
    trader: Trader[];
    item_type: string;
    variants?: any;
    sizes: any[];
    requester?: string;
    variant_group?: any;
    description?: string;
    product_publish?: ProductPublish;
    media?: Media1[];
    tags?: string[];
    template_tag: string;
    teaser_tag?: TeaserTag;
    attributes: any;
    highlights?: string[];
    _custom_json?: any;
    change_request_id?: any;
    departments: number[];
    net_quantity?: NetQuantity;
    uid?: number;
    is_dependent?: boolean;
    short_description?: string;
    brand_uid: number;
    no_of_boxes?: number;
    country_of_origin: string;
};
type ProductVariants = {
    item_code?: string;
    name?: string;
    uid?: number;
    category_uid?: number;
    brand_uid?: number;
    media?: Media1[];
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    variant?: boolean;
    created_on?: string;
    name?: string;
    enabled_for_end_consumer?: boolean;
    raw_key?: string;
    details: AttributeMasterDetails;
    logo?: string;
    synonyms?: any;
    schema: AttributeMaster;
    slug: string;
    suggestion?: string;
    modified_on?: string;
    description?: string;
    filters: AttributeMasterFilter;
    created_by?: any;
    tags?: string[];
    is_nested?: boolean;
    unit?: string;
    departments: string[];
    modified_by?: any;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ProductCreateUpdate = {
    bulk_job_id?: string;
    custom_order?: CustomOrder;
    return_config: ReturnConfig;
    name: any;
    is_active?: boolean;
    size_guide?: string;
    item_code: any;
    tax_identifier: TaxIdentifier;
    action?: string;
    product_group_tag?: string[];
    company_id: number;
    multi_size?: boolean;
    currency: string;
    variant_media?: any;
    is_image_less_product?: boolean;
    slug: string;
    category_slug: string;
    is_set?: boolean;
    trader: Trader[];
    item_type: string;
    variants?: any;
    requester?: string;
    variant_group?: any;
    description?: string;
    product_publish?: ProductPublish;
    media?: Media1[];
    tags?: string[];
    template_tag: string;
    teaser_tag?: TeaserTag;
    highlights?: string[];
    _custom_json?: any;
    change_request_id?: any;
    departments: number[];
    net_quantity?: NetQuantity;
    uid?: number;
    is_dependent?: boolean;
    short_description?: string;
    brand_uid: number;
    no_of_boxes?: number;
    country_of_origin: string;
};
type ValidateIdentifier = {
    gtin_value: string;
    primary?: boolean;
    gtin_type: string;
};
type AllSizes = {
    item_dimensions_unit_of_measure: string;
    item_weight: number;
    size: any;
    item_height: number;
    item_length: number;
    item_weight_unit_of_measure: any;
    identifiers?: ValidateIdentifier[];
    item_width: number;
};
type ListALLSizes = {
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
    succeed?: number;
    template_tag?: string;
    created_on?: string;
    created_by?: UserDetail1;
    file_path?: string;
    failed_records?: string[];
    company_id?: number;
    template?: ProductTemplate;
    total?: number;
    modified_on?: string;
    cancelled?: number;
    stage?: string;
    modified_by?: UserDetail1;
    failed?: number;
    is_active?: boolean;
    cancelled_records?: string[];
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    user_id?: string;
    email?: string;
    uid?: string;
    username?: string;
};
type BulkJob = {
    is_active?: boolean;
    succeed?: number;
    template_tag?: string;
    created_on: string;
    file_path?: string;
    failed_records?: any[];
    company_id: number;
    custom_template_tag?: string;
    stage?: string;
    total?: number;
    modified_on?: string;
    tracking_url?: string;
    modified_by?: UserInfo1;
    cancelled?: number;
    failed?: number;
    created_by?: UserInfo1;
    cancelled_records?: any[];
};
type BulkResponse = {
    is_active?: boolean;
    created_on: string;
    modified_on?: string;
    modified_by?: UserInfo1;
    batch_id: string;
    created_by?: UserInfo1;
};
type BulkProductRequest = {
    data: any[];
    batch_id: string;
    company_id: number;
    template_tag: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type UserCommon = {
    username?: string;
    company_id?: number;
    user_id?: string;
};
type Items = {
    is_active?: boolean;
    retry?: number;
    succeed?: number;
    created_on?: string;
    file_path?: string;
    failed_records?: string[];
    company_id?: number;
    id?: string;
    total?: number;
    modified_on?: string;
    tracking_url?: string;
    modified_by?: UserCommon;
    stage?: string;
    cancelled?: number;
    failed?: number;
    created_by?: UserCommon;
    cancelled_records?: string[];
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    user: any;
    url: string;
    company_id?: number;
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
type InventoryResponse = {
    price_transfer?: number;
    quantity?: number;
    sellable_quantity?: number;
    price_effective?: number;
    store?: any;
    currency?: string;
    size?: string;
    uid?: string;
    seller_identifier?: string;
    item_id?: number;
    identifiers?: any;
    inventory_updated_on?: string;
    price?: number;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
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
    primary?: boolean;
    gtin_type: string;
};
type InvSize = {
    price_transfer?: number;
    item_dimensions_unit_of_measure?: string;
    quantity: number;
    is_set?: boolean;
    store_code: string;
    price_effective: number;
    item_weight?: number;
    currency: string;
    size: any;
    item_height?: number;
    item_length?: number;
    set?: InventorySet;
    expiration_date?: string;
    item_weight_unit_of_measure?: string;
    identifiers: GTIN[];
    item_width?: number;
    price?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    company_id: number;
    sizes: InvSize[];
};
type DimensionResponse = {
    length: number;
    width: number;
    is_default: boolean;
    unit: string;
    height: number;
};
type ReturnConfig1 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type ManufacturerResponse = {
    name: string;
    address: string;
    is_default: boolean;
};
type BrandMeta = {
    id: number;
    name: string;
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type CompanyMeta = {
    id: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    sellable?: QuantityBase;
    damaged?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
};
type PriceMeta = {
    marked: number;
    transfer: number;
    tp_notes?: any;
    updated_at?: string;
    currency: string;
    effective: number;
};
type InventorySellerResponse = {
    added_on_store?: string;
    store: StoreMeta;
    dimension: DimensionResponse;
    size: string;
    set?: InventorySet;
    return_config?: ReturnConfig1;
    expiration_date?: string;
    track_inventory?: boolean;
    is_active?: boolean;
    tax_identifier?: any;
    identifier: any;
    fynd_meta?: any;
    is_set?: boolean;
    trader?: Trader1[];
    raw_meta?: any;
    seller_identifier: string;
    created_by?: UserSerializer;
    total_quantity: number;
    manufacturer: ManufacturerResponse;
    tags?: string[];
    brand: BrandMeta;
    meta?: any;
    _custom_json?: any;
    weight: WeightResponse;
    stage?: string;
    fragile: boolean;
    company: CompanyMeta;
    uid: string;
    fynd_article_code: string;
    fynd_item_code: string;
    modified_by?: UserSerializer;
    trace_id?: string;
    item_id: number;
    quantities?: Quantities;
    country_of_origin: string;
    price: PriceMeta;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    is_active?: boolean;
    succeed?: number;
    created_on?: string;
    file_path?: string;
    failed_records?: string[];
    company_id?: number;
    stage?: string;
    id?: string;
    total?: number;
    modified_on?: string;
    cancelled?: number;
    modified_by?: any;
    failed?: number;
    created_by?: any;
    cancelled_records?: string[];
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    item_dimensions_unit_of_measure?: string;
    quantity?: number;
    store_code: string;
    price_effective?: number;
    price_marked?: number;
    price?: number;
    currency?: string;
    tags?: string[];
    trace_id?: string;
    seller_identifier: string;
    expiration_date?: string;
    item_weight_unit_of_measure?: string;
    total_quantity?: number;
};
type InventoryBulkRequest = {
    batch_id: string;
    user?: any;
    company_id: number;
    sizes: InventoryJobPayload[];
};
type InventoryExportJob = {
    seller_id: number;
    completed_on?: string;
    url?: string;
    status?: string;
    task_id: string;
    trigger_on?: string;
    request_params?: any;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    seller_id: number;
    status?: string;
    task_id: string;
    trigger_on?: string;
    request_params?: any;
};
type ArticleStoreResponse = {
    store_type?: string;
    store_code?: string;
    uid?: number;
    name?: string;
};
type DimensionResponse1 = {
    unit?: string;
    height?: number;
    length?: number;
    width?: number;
};
type ReturnConfig2 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type ManufacturerResponse1 = {
    name?: string;
    address?: string;
    is_default?: boolean;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type CompanyMeta1 = {
    id?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    sellable?: Quantity;
    damaged?: Quantity;
    not_available?: Quantity;
    order_committed?: Quantity;
};
type PriceArticle = {
    marked?: number;
    transfer?: number;
    tp_notes?: any;
    currency?: string;
    effective?: number;
};
type GetInventories = {
    store?: ArticleStoreResponse;
    dimension?: DimensionResponse1;
    size?: string;
    return_config?: ReturnConfig2;
    expiration_date?: string;
    track_inventory?: boolean;
    inventory_updated_on?: string;
    tax_identifier?: any;
    identifier?: any;
    is_set?: boolean;
    trader?: Trader2[];
    date_meta?: DateMeta;
    id?: string;
    platforms?: any;
    seller_identifier?: string;
    created_by?: UserSerializer;
    total_quantity?: number;
    manufacturer?: ManufacturerResponse1;
    tags?: string[];
    brand?: BrandMeta1;
    weight?: WeightResponse1;
    trace_id?: string;
    company?: CompanyMeta1;
    uid?: string;
    modified_by?: UserSerializer;
    stage?: string;
    item_id?: number;
    quantities?: QuantitiesArticle;
    country_of_origin?: string;
    price?: PriceArticle;
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
    store_id: number;
    price_effective?: number;
    price_marked?: number;
    tags?: string[];
    trace_id?: string;
    seller_identifier: string;
    expiration_date?: string;
    total_quantity?: number;
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
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type PageResponse = {
    has_previous?: boolean;
    current?: string;
    item_total?: number;
    has_next?: boolean;
    size?: number;
};
type HsnCodesObject = {
    tax_on_mrp?: boolean;
    tax1?: number;
    threshold2?: number;
    company_id?: number;
    hsn_code?: string;
    id?: string;
    hs2_code?: string;
    tax2?: number;
    tax_on_esp?: boolean;
    modified_on?: string;
    threshold1?: number;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    tax_on_mrp: boolean;
    tax1: number;
    threshold2?: number;
    company_id: number;
    hsn_code: string;
    hs2_code: string;
    tax2?: number;
    tax_on_esp?: boolean;
    uid?: number;
    threshold1: number;
    is_active?: boolean;
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
    type: string;
    created_on?: string;
    country_code: string;
    hsn_code: string;
    reporting_hsn: string;
    modified_on?: string;
    modified_by?: any;
    description: string;
    created_by?: any;
    taxes: TaxSlab[];
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    discount?: string;
    slug?: string;
    action?: Action;
    logo?: Media;
    departments?: string[];
    uid?: number;
    name?: string;
    banners?: ImageUrls;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    slug?: string;
    logo?: Media;
    priority_order?: number;
    uid?: number;
    name?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    slug?: string;
    action?: Action;
    _custom_json?: any;
    uid?: number;
    name?: string;
    banners?: ImageUrls;
    childs?: any[];
};
type SecondLevelChild = {
    slug?: string;
    action?: Action;
    _custom_json?: any;
    uid?: number;
    name?: string;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
};
type Child = {
    slug?: string;
    action?: Action;
    _custom_json?: any;
    uid?: number;
    name?: string;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
};
type CategoryItems = {
    slug?: string;
    action?: Action;
    uid?: number;
    name?: string;
    banners?: ImageUrls;
    childs?: Child[];
};
type DepartmentCategoryTree = {
    items?: CategoryItems[];
    department?: string;
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
    page: Page;
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    operators?: any;
    filters?: ProductFilters[];
};
type ProductDetail = {
    product_online_date?: string;
    promo_meta?: any;
    medias?: Media1[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    name?: string;
    color?: string;
    item_code?: string;
    rating?: number;
    image_nature?: string;
    type?: string;
    slug: string;
    item_type?: string;
    tryouts?: string[];
    similars?: string[];
    description?: string;
    brand?: ProductBrand;
    teaser_tag?: any;
    attributes?: any;
    has_variant?: boolean;
    highlights?: string[];
    rating_count?: number;
    uid?: number;
    short_description?: string;
};
type InventoryPage = {
    has_previous?: boolean;
    type: string;
    next_id?: string;
    item_total: number;
    has_next?: boolean;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
    closing?: LocationTimingSerializer;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    email?: string;
    name?: string;
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
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type GetAddressSerializer = {
    address_type?: string;
    address2?: string;
    country?: string;
    latitude?: number;
    country_code?: string;
    state?: string;
    city?: string;
    longitude?: number;
    address1?: string;
    landmark?: string;
    pincode?: number;
};
type UserSerializer2 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetCompanySerializer = {
    business_type?: string;
    verified_by?: UserSerializer2;
    verified_on?: string;
    created_on?: string;
    reject_reason?: string;
    stage?: string;
    modified_on?: string;
    uid?: number;
    modified_by?: UserSerializer2;
    company_type?: string;
    addresses?: GetAddressSerializer[];
    name?: string;
    created_by?: UserSerializer2;
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
type GetLocationSerializer = {
    verified_on?: string;
    store_type?: string;
    timing?: LocationDayWiseSerializer[];
    created_on?: string;
    name: string;
    warnings?: any;
    manager?: LocationManagerSerializer;
    phone_number?: string;
    documents?: Document[];
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigSerializer;
    verified_by?: UserSerializer1;
    contact_numbers?: SellerPhoneNumber[];
    integration_type?: LocationIntegrationType;
    modified_on?: string;
    code: string;
    address: GetAddressSerializer;
    created_by?: UserSerializer1;
    display_name: string;
    _custom_json?: any;
    company?: GetCompanySerializer;
    uid?: number;
    modified_by?: UserSerializer1;
    stage?: string;
    gst_credentials?: InvoiceDetailsSerializer;
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
    logo?: string;
    app_id: string;
    _custom_json?: any;
    uid: number;
    name?: string;
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
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type CompanyTaxesSerializer = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type GetCompanyProfileSerializerResponse = {
    business_details?: BusinessDetails;
    documents?: Document[];
    notification_emails?: string[];
    verified_on?: string;
    created_by?: UserSerializer;
    created_on?: string;
    modified_on?: string;
    business_type: string;
    warnings?: any;
    _custom_json?: any;
    contact_details?: ContactDetails;
    stage?: string;
    business_country_info?: BusinessCountryInfo;
    mode?: string;
    business_info?: string;
    modified_by?: UserSerializer;
    uid: number;
    franchise_enabled?: boolean;
    verified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    taxes?: CompanyTaxesSerializer[];
    name?: string;
    company_type: string;
};
type CreateUpdateAddressSerializer = {
    address2?: string;
    landmark?: string;
    pincode: number;
    latitude: number;
    country: string;
    longitude: number;
    city: string;
    state: string;
    country_code?: string;
    address_type: string;
    address1: string;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type UpdateCompany = {
    warnings?: any;
    reject_reason?: string;
    _custom_json?: any;
    franchise_enabled?: boolean;
    addresses?: CreateUpdateAddressSerializer[];
    business_details?: BusinessDetails;
    taxes?: CompanyTaxesSerializer1[];
    contact_details?: ContactDetails;
    documents?: Document[];
    business_type?: string;
    notification_emails?: string[];
    name?: string;
    company_type?: string;
    business_info?: string;
};
type ProfileSuccessResponse = {
    uid?: number;
    success?: boolean;
};
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
type MetricsSerializer = {
    uid?: number;
    store?: DocumentsObj;
    store_documents?: DocumentsObj;
    brand?: DocumentsObj;
    stage?: string;
    company_documents?: DocumentsObj;
    product?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    verified_on?: string;
    created_by?: UserSerializer;
    created_on?: string;
    modified_on?: string;
    _custom_json?: any;
    reject_reason?: string;
    warnings?: any;
    stage?: string;
    synonyms?: string[];
    mode?: string;
    banner?: BrandBannerSerializer;
    modified_by?: UserSerializer;
    logo?: string;
    uid?: number;
    verified_by?: UserSerializer;
    slug_key?: string;
    name: string;
    description?: string;
    _locale_language?: any;
};
type CreateUpdateBrandRequestSerializer = {
    uid?: number;
    _custom_json?: any;
    description?: string;
    company_id?: number;
    synonyms?: string[];
    brand_tier?: string;
    name: string;
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
    uid?: number;
    reject_reason?: string;
    created_on?: string;
    _custom_json?: any;
    verified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    market_channels?: string[];
    details?: CompanyDetails;
    modified_on?: string;
    business_type: string;
    notification_emails?: string[];
    stage?: string;
    business_country_info?: BusinessCountryInfo;
    company_type: string;
    name?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    created_by?: UserSerializer;
};
type CompanyBrandSerializer = {
    uid?: number;
    reject_reason?: string;
    created_on?: string;
    warnings?: any;
    verified_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    modified_on?: string;
    company?: CompanySerializer;
    stage?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    created_by?: UserSerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    uid?: number;
    brands: number[];
    company: number;
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
    uid?: number;
    _custom_json?: any;
    warnings?: any;
    manager?: LocationManagerSerializer;
    documents?: Document[];
    code: string;
    company: number;
    contact_numbers?: SellerPhoneNumber[];
    stage?: string;
    notification_emails?: string[];
    timing?: LocationDayWiseSerializer[];
    address: GetAddressSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    store_type?: string;
    name: string;
    gst_credentials?: InvoiceDetailsSerializer;
    display_name: string;
    holiday?: HolidaySchemaSerializer[];
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleQuery = {
    ignored_stores?: number[];
    size?: string;
    item_id?: number;
};
type _ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type _AssignStoreArticle = {
    query?: _ArticleQuery;
    article_assignment?: _ArticleAssignment;
    quantity?: number;
    group_id?: string;
    meta?: any;
};
type AssignStoreRequestValidator = {
    articles?: _AssignStoreArticle[];
    pincode?: string;
    channel_identifier?: string;
    store_ids?: number[];
    app_id?: string;
    channel_type?: string;
    company_id?: number;
};
type AssignStoreResponseSerializer = {
    uid?: string;
    size?: string;
    price_effective?: number;
    store_pincode?: string;
    index?: number;
    article_assignment?: _ArticleAssignment;
    status?: boolean;
    price_marked?: number;
    s_city?: string;
    item_id?: number;
    quantity?: number;
    store_id?: number;
    company_id?: number;
    meta?: any;
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
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
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
    platforms?: string[];
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    ordering_stores?: number[];
    post_order?: PostOrder;
    user_groups?: number[];
    user_type?: string;
    price_range?: PriceRange;
    bulk_bundle?: BulkBundleRestriction;
    payments?: any;
};
type Rule = {
    key?: number;
    min?: number;
    discount_qty?: number;
    max?: number;
    value?: number;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    remove?: DisplayMetaDict;
    subtitle?: string;
    title?: string;
    apply?: DisplayMetaDict;
    description?: string;
    auto?: DisplayMetaDict;
};
type Validity = {
    priority?: number;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type RuleDefinition = {
    currency_code?: string;
    scope?: string[];
    type: string;
    auto_apply?: boolean;
    value_type: string;
    applicable_on: string;
    is_exact?: boolean;
    calculate_on: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponSchedule = {
    cron?: string;
    next_schedule?: any[];
    start?: string;
    duration?: number;
    end?: string;
};
type State = {
    is_archived?: boolean;
    is_display?: boolean;
    is_public?: boolean;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type Validation = {
    app_id?: string[];
    user_registered_after?: string;
    anonymous?: boolean;
};
type CouponAdd = {
    restrictions?: Restrictions;
    rule: Rule[];
    display_meta: DisplayMeta;
    code: string;
    validity: Validity;
    author?: CouponAuthor;
    action?: CouponAction;
    identifiers: Identifier;
    rule_definition: RuleDefinition;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    tags?: string[];
    state?: State;
    ownership: Ownership;
    type_slug: string;
    validation?: Validation;
};
type CouponsResponse = {
    page?: Page;
    items?: CouponAdd;
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
    restrictions?: Restrictions;
    rule: Rule[];
    display_meta: DisplayMeta;
    code: string;
    validity: Validity;
    author?: CouponAuthor;
    action?: CouponAction;
    identifiers: Identifier;
    rule_definition: RuleDefinition;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    tags?: string[];
    state?: State;
    ownership: Ownership;
    type_slug: string;
    validation?: Validation;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type DisplayMeta1 = {
    offer_label?: string;
    description?: string;
    name?: string;
    offer_text?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionSchedule = {
    cron?: string;
    next_schedule?: any[];
    start: string;
    duration?: number;
    end?: string;
    published: boolean;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    uses?: PaymentAllowValue1;
    codes?: string[];
};
type Restrictions1 = {
    platforms?: string[];
    uses: UsesRestriction1;
    user_id?: string[];
    order_quantity?: number;
    post_order?: PostOrder1;
    user_registered?: UserRegistered;
    user_groups?: number[];
    anonymous_users?: boolean;
    payments?: PromotionPaymentModes[];
};
type CompareObject = {
    greater_than_equals?: number;
    less_than_equals?: number;
    greater_than?: number;
    less_than?: number;
    equals?: number;
};
type ItemCriteria = {
    item_exclude_sku?: string[];
    all_items?: boolean;
    item_category?: number[];
    item_store?: number[];
    cart_quantity?: CompareObject;
    item_exclude_id?: number[];
    item_id?: number[];
    item_exclude_category?: number[];
    item_company?: number[];
    item_brand?: number[];
    item_exclude_store?: number[];
    buy_rules?: string[];
    item_size?: string[];
    product_tags?: string[];
    item_sku?: string[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_brand?: number[];
    item_exclude_company?: number[];
    available_zones?: string[];
    cart_unique_item_amount?: CompareObject;
    cart_total?: CompareObject;
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
    discount_price?: number;
    discount_amount?: number;
    code?: string;
    partial_can_ret?: boolean;
    min_offer_quantity?: number;
    discount_percentage?: number;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    max_usage_per_transaction?: number;
    apportion_discount?: boolean;
};
type DiscountRule = {
    buy_condition: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
    discount_type: string;
};
type PromotionListItem = {
    code?: string;
    currency?: string;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    application_id: string;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    _schedule?: PromotionSchedule;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    promotion_type: string;
    buy_rules: any;
    author?: PromotionAuthor;
    promo_group: string;
    date_meta?: PromotionDateMeta;
    apply_exclusive?: string;
    apply_priority?: number;
    calculate_on?: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    stackable?: boolean;
    mode: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    code?: string;
    currency?: string;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    application_id: string;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    _schedule?: PromotionSchedule;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    promotion_type: string;
    buy_rules: any;
    author?: PromotionAuthor;
    promo_group: string;
    date_meta?: PromotionDateMeta;
    apply_exclusive?: string;
    apply_priority?: number;
    calculate_on?: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    stackable?: boolean;
    mode: string;
};
type PromotionUpdate = {
    code?: string;
    currency?: string;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    application_id: string;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    _schedule?: PromotionSchedule;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    promotion_type: string;
    buy_rules: any;
    author?: PromotionAuthor;
    promo_group: string;
    date_meta?: PromotionDateMeta;
    apply_exclusive?: string;
    apply_priority?: number;
    calculate_on?: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    stackable?: boolean;
    mode: string;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    subtitle?: string;
    example?: string;
    entity_slug?: string;
    type?: string;
    is_hidden?: boolean;
    created_on?: string;
    title?: string;
    description?: string;
    entity_type?: string;
    modified_on?: string;
};
type CartItem = {
    quantity?: number;
    size: string;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductAvailability = {
    sizes?: string[];
    is_valid?: boolean;
    out_of_stock?: boolean;
    deliverable?: boolean;
    other_store_quantity?: number;
};
type PromoMeta = {
    message?: string;
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
    converted?: ProductPrice;
    base?: ProductPrice;
};
type CartProductIdentifer = {
    identifier?: string;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    raw_offer?: any;
    offer?: any;
    item_criteria?: any;
};
type FreeGiftItem = {
    item_images_url?: string[];
    item_price_details?: any;
    item_id?: number;
    item_brand_name?: string;
    item_name?: string;
    item_slug?: string;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
};
type AppliedPromotion = {
    mrp_promotion?: boolean;
    promotion_type?: string;
    offer_text?: string;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRulesApp[];
    promotion_group?: string;
    amount?: number;
    article_quantity?: number;
    promo_id?: string;
    promotion_name?: string;
    applied_free_articles?: AppliedFreeArticles[];
};
type BaseInfo = {
    uid?: number;
    name?: string;
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
    extra_meta?: any;
    uid?: string;
    seller?: BaseInfo;
    quantity?: number;
    type?: string;
    price?: ArticlePriceInfo;
    size?: string;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    store?: BaseInfo;
};
type ProductImage = {
    aspect_ratio?: string;
    secure_url?: string;
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
    query?: ActionQuery;
    type?: string;
    url?: string;
};
type CartProduct = {
    uid?: number;
    type?: string;
    images?: ProductImage[];
    categories?: CategoryInfo[];
    action?: ProductAction;
    name?: string;
    net_quantity?: NetQuantity;
    slug?: string;
    brand?: BaseInfo;
};
type CartProductInfo = {
    availability?: ProductAvailability;
    key?: string;
    quantity?: number;
    coupon_message?: string;
    promo_meta?: PromoMeta;
    price?: ProductPriceInfo;
    message?: string;
    discount?: string;
    identifiers: CartProductIdentifer;
    is_set?: boolean;
    bulk_offer?: any;
    parent_item_identifiers?: any;
    price_per_unit?: ProductPriceInfo;
    promotions_applied?: AppliedPromotion[];
    article?: ProductArticle;
    product?: CartProduct;
};
type CouponBreakup = {
    uid?: string;
    minimum_cart_value?: number;
    code?: string;
    type?: string;
    coupon_type?: string;
    is_applied?: boolean;
    sub_title?: string;
    max_discount_value?: number;
    title?: string;
    description?: string;
    coupon_value?: number;
    message?: string;
    value?: number;
};
type RawBreakup = {
    mrp_total?: number;
    convenience_fee?: number;
    total?: number;
    gst_charges?: number;
    discount?: number;
    cod_charge?: number;
    vog?: number;
    fynd_cash?: number;
    you_saved?: number;
    coupon?: number;
    subtotal?: number;
    delivery_charge?: number;
};
type DisplayBreakup = {
    key?: string;
    currency_code?: string;
    currency_symbol?: string;
    display?: string;
    message?: string[];
    value?: number;
};
type LoyaltyPoints = {
    total?: number;
    is_applied?: boolean;
    applicable?: number;
    description?: string;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    message?: string;
};
type OpenApiErrorResponse = {
    success?: boolean;
    errors?: any;
    message?: string;
};
type ShippingAddress = {
    country_code?: string;
    phone?: number;
    meta?: any;
    area_code_slug?: string;
    pincode?: number;
    city?: string;
    area?: string;
    address_type?: string;
    name?: string;
    landmark?: string;
    area_code: string;
    address?: string;
    state?: string;
    country?: string;
    email?: string;
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
    delivery_promise?: ShipmentPromise;
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
    extra_meta?: any;
    cod_charges: number;
    employee_discount?: number;
    cashback_applied: number;
    meta?: CartItemMeta;
    quantity?: number;
    price_effective: number;
    coupon_effective_discount: number;
    discount: number;
    files?: OpenApiFiles[];
    product_id: number;
    amount_paid: number;
    size: string;
    price_marked: number;
    delivery_charges: number;
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
};
type OpenApiPlatformCheckoutReq = {
    cod_charges: number;
    employee_discount?: any;
    cashback_applied: number;
    shipping_address?: ShippingAddress;
    payment_mode?: string;
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
    order_id?: string;
    cart_items: OpenApiOrderItem[];
    delivery_charges: number;
    coupon?: string;
    coupon_value: number;
    comment?: string;
    coupon_code: string;
    currency_code?: string;
    billing_address: ShippingAddress;
    files?: OpenApiFiles[];
    gstin?: string;
    affiliate_order_id?: string;
    cart_value: number;
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    order_ref_id?: string;
    order_id: string;
    message?: string;
};
type AbandonedCart = {
    uid: number;
    checkout_mode?: string;
    merge_qty?: boolean;
    is_default: boolean;
    last_modified: string;
    is_archive?: boolean;
    pick_up_customer_details?: any;
    expire_at: string;
    payment_methods?: any[];
    created_on: string;
    promotion?: any;
    gstin?: string;
    shipments?: any[];
    coupon?: any;
    delivery_charges?: any;
    cart_value?: number;
    _id: string;
    fc_index_map?: number[];
    app_id?: string;
    cod_charges?: any;
    is_active?: boolean;
    discount?: number;
    user_id: string;
    payment_mode?: string;
    bulk_coupon_discount?: number;
    payments?: any;
    order_id?: string;
    comment?: string;
    meta?: any;
    buy_now?: boolean;
    fynd_credits?: any;
    cashback: any;
    articles: any[];
};
type AbandonedCartResponse = {
    success?: boolean;
    result?: any;
    page?: Page;
    message?: string;
    items?: AbandonedCart[];
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    comment?: string;
    checkout_mode?: string;
    buy_now?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    is_valid?: boolean;
    currency?: CartCurrency;
    restrict_checkout?: boolean;
    last_modified?: string;
    gstin?: string;
    delivery_charge_info?: string;
    coupon_text?: string;
    message?: string;
    id?: string;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
};
type AddProductCart = {
    extra_meta?: any;
    quantity?: number;
    store_id?: number;
    pos?: boolean;
    display?: string;
    article_id?: string;
    item_id?: number;
    seller_id?: number;
    product_group_tags?: string[];
    item_size?: string;
    article_assignment?: any;
    parent_item_identifiers?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
    partial?: boolean;
    message?: string;
};
type UpdateProductCart = {
    extra_meta?: any;
    quantity?: number;
    article_id?: string;
    item_index?: number;
    identifiers: CartProductIdentifer;
    item_id?: number;
    item_size?: string;
    parent_item_identifiers?: any;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
type UpdateCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
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
