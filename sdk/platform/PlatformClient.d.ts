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
    discount: Discount;
    webhook: Webhook;
    auditTrail: AuditTrail;
    finance: Finance;
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { Application, ApplicationAuth, ApplicationCors, ApplicationMeta, ApplicationRedirections, ApplicationResponse, ApplicationWebsite, BadRequest, Currency, Domain, LocationCountry, LocationDefaultCurrency, LocationDefaultLanguage, Locations, NotFound, Page, SecureUrl, AddTicketPayload, AgentChangePayload, CategoryData, CloseVideoRoomResponse, CommunicationDetails, CreateCustomFormPayload, CreatedOn, CreateVideoRoomPayload, CreateVideoRoomResponse, CustomForm, CustomFormList, CustomFormSubmissionPayload, Debug, EditCustomFormPayload, EditTicketPayload, Email, FeedbackForm, FeedbackResponseItem, Filter, GetParticipantsInsideVideoRoomResponse, GetTokenForVideoRoomResponse, IntegrationConfig, NotifyUser, Participant, PhoneNumber, PollForAssignment, Priority, Status, SubmitButton, SubmitCustomFormResponse, SupportGeneralConfig, Ticket, TicketAsset, TicketCategory, TicketContent, TicketContext, TicketFeedback, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, TicketHistory, TicketHistoryList, TicketHistoryPayload, TicketList, TicketSubCategory, UserSchema, AddThemeRequestSchema, AllAvailablePageSchema, AssetsSchema, AvailablePagePredicate, AvailablePageRoutePredicate, AvailablePageSchema, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageUserPredicate, availableSectionSchema, BlitzkriegApiErrorSchema, BlitzkriegInternalServerErrorSchema, BlitzkriegNotFoundSchema, Blocks, BlocksProps, Bold, Colors, CommonJs, Config, ConfigPage, Css, Custom, Font, FontsSchema, FontsSchemaItems, FontsSchemaItemsFiles, GlobalSchema, GlobalSchemaProps, Images, Information, Light, ListSchemaItem, Medium, PaginationSchema, Preset, Regular, Sections, SemiBold, Src, ThemesListingResponseSchema, ThemesSchema, UmdJs, UpgradableThemeSchema, Variants, Accountkit, ArchiveUserRequestSchema, ArchiveUserSuccess, AuthenticationApiErrorSchema, AuthenticationInternalServerErrorSchema, AuthSuccess, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, BlockUserRequestSchema, BlockUserSuccess, CodeRequestBodySchema, CreateUserGroupSchema, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, CustomerListResponseSchema, DeleteAccountConsent, DeleteAccountReasons, DeleteApplicationUserRequestSchema, DeleteUserSuccess, EditEmailRequestSchema, EditMobileRequestSchema, EditProfileMobileSchema, EditProfileRequestSchema, EmailOtpSuccess, Facebook, FlashCard, ForgotPasswordRequestSchema, FormRegisterRequestSchema, FormRegisterRequestSchemaPhone, Google, HasPasswordSuccess, Login, LoginSuccess, LogoutSuccess, LookAndFeel, MetaSchema, NotFoundSchema, OAuthRequestAppleSchema, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, OAuthRequestSchema, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OtpSuccess, PasswordLoginRequestSchema, PlatformEmail, PlatformMobile, PlatformSchema, ProfileEditSuccess, ProfileEditSuccessSchema, RegisterFormSuccess, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, RequiredFields, ResetPasswordSuccess, SendEmailOtpRequestSchema, SendEmailVerifyLinkSuccess, SendMobileOtpRequestSchema, SendMobileVerifyLinkSuccess, SendOtpRequestSchema, SendOtpResponse, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, SendVerificationLinkMobileRequestSchema, SessionDeleteResponseSchema, SessionExpiry, SessionListResponseInfo, SessionListResponseSchema, SessionListSuccess, Social, SocialTokens, TokenRequestBodySchema, UnauthenticatedSchema, UnauthorizedSchema, UnDeleteUserRequestSchema, UnDeleteUserSuccess, UpdatePasswordRequestSchema, UpdateUserGroupSchema, UpdateUserRequestSchema, UserEmails, UserGroupListResponseSchema, UserGroupResponseSchema, UserObjectSchema, UserPhoneNumbers, UserSearchResponseSchema, VerifyEmailOtpRequestSchema, VerifyEmailOTPSuccess, VerifyEmailSuccess, VerifyMobileOTPSuccess, VerifyOtpRequestSchema, VerifyOtpSuccess, Action, ActionPage, AdminAnnouncementSchema, AnnouncementAuthorSchema, AnnouncementPageSchema, AnnouncementSchema, AnnouncementsResponseSchema, ApplicationLegal, ApplicationLegalFAQ, Asset, Author, BlogGetResponse, BlogRequest, BlogSchema, CategoryRequestSchema, CategorySchema, ChildrenSchema, CommonError, ConfigurationSchema, ContactSchema, ContentAPIError, ContentSchema, CreateAnnouncementSchema, CreatedBySchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, CreateFaqResponseSchema, CreateFaqSchema, CreateTagRequestSchema, CreateTagSchema, CronSchedule, CustomMetaTag, CustomPage, CustomPageSchema, DataLoaderResetResponseSchema, DataLoaderResponseSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, DateMeta, DefaultNavigationResponse, Detail, EditorMeta, EmailProperties, EmailSchema, FAQ, FAQCategorySchema, FaqResponseSchema, FaqSchema, FeatureImage, GeneratedSEOContent, GenerateSEOContent, GetAnnouncementListSchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, GetFaqSchema, HandpickedTagSchema, LandingPage, LandingPageGetResponse, LandingPageSchema, Language, LocaleLanguage, Navigation, NavigationGetResponse, NavigationReference, NavigationRequest, NavigationSchema, NextSchedule, Orientation, PageContent, PageGetResponse, PageMeta, PageMetaSchema, PagePublishRequest, PageRequest, PageSchema, PageSpec, PageSpecItem, PageSpecParam, PathMappingSchema, PathSourceSchema, PhoneProperties, PhoneSchema, RemoveHandpickedSchema, ResourceContent, ScheduleSchema, ScheduleStartSchema, SEO, SeoComponent, SEOImage, SeoSchema, Slideshow, SlideshowGetResponse, SlideshowMedia, SlideshowRequest, SlideshowSchema, Support, TagDeleteSuccessResponse, TagSchema, TagSourceSchema, TagsSchema, UpdateFaqCategoryRequestSchema, UpdateHandpickedSchema, CancelSubscriptionReq, CancelSubscriptionRes, ChargeLineItem, CheckValidityResponse, CreateOneTimeCharge, CreateOneTimeChargeResponse, CreateSubscriptionCharge, CreateSubscriptionResponse, CurrentPeriod, DetailedPlan, DetailedPlanComponents, EntityChargePrice, EntityChargeRecurring, EntitySubscription, InternalServerError, Invoice, InvoiceDetails, InvoiceDetailsClient, InvoiceDetailsPaymentMethods, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPeriod, InvoiceDetailsStatusTrail, InvoiceItems, InvoiceItemsPeriod, InvoiceItemsPlan, InvoiceItemsPlanRecurring, InvoicePaymentMethod, Invoices, InvoicesData, InvoicesDataClient, InvoicesDataPaymentMethod, InvoicesDataPeriod, OneTimeChargeEntity, OneTimeChargeItem, Phone, Plan, PlanRecurring, ResourceNotFound, Subscription, SubscriptionActivateReq, SubscriptionActivateRes, SubscriptionBillingAddress, SubscriptionCharge, SubscriptionCurrentPeriod, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionInvoiceSettings, SubscriptionLimit, SubscriptionLimitApplication, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitProducts, SubscriptionLimitTeam, SubscriptionPauseCollection, SubscriptionStatus, SubscriptionTrial, SubscriptionTrialPeriod, UnauthenticatedApplication, UnauthenticatedUser, Audience, AudienceReq, Audiences, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersRes, BigqueryHeadersResHeaders, Campaign, CampaignEmail, CampaignEmailTemplate, CampaignReq, Campaigns, CampignEmailProvider, EmailProvider, EmailProviderReq, EmailProviderReqFrom, EmailProviders, EmailTemplate, EmailTemplateDeleteFailureRes, EmailTemplateDeleteSuccessRes, EmailTemplateHeaders, EmailTemplateKeys, EmailTemplateReq, EmailTemplateRes, EmailTemplates, EngineRequest, EngineResponse, EventSubscription, EventSubscriptions, EventSubscriptionTemplate, EventSubscriptionTemplateEmail, EventSubscriptionTemplateSms, GetNRecordsCsvReq, GetNRecordsCsvRes, GetNRecordsCsvResItems, GetStats, Job, JobLog, JobLogs, Jobs, Log, LogEmail, LogMeta, LogPushnotification, Logs, MetaStructure, Notification, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadEmailTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadSmsTemplateStructure, PayloadStructure, PushtokenReq, PushtokenRes, RecipientHeaders, SendOtpCommsReq, SendOtpCommsReqData, SendOtpCommsReqEmail, SendOtpCommsReqSms, SendOtpCommsRes, SendOtpCommsResEmail, SendOtpCommsResSms, SendOtpEmailCommsTemplate, SendOtpSmsCommsProvider, SendOtpSmsCommsTemplate, SmsProvider, SmsProviderReq, SmsProviders, SmsTemplate, SmsTemplateDeleteFailureRes, SmsTemplateDeleteSuccessRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplates, Stats, StatsImported, StatsProcessed, StatsProcessedEmail, StatsProcessedSms, SystemEmailTemplate, SystemEmailTemplates, SystemNotification, SystemNotifications, SystemNotificationSettings, SystemNotificationsPage, SystemNotificationUser, SystemSmsTemplate, SystemSmsTemplates, TemplateAndType, TriggerJobRequest, TriggerJobResponse, VerifyOtpCommsErrorRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, AddBeneficiaryDetailsOTPRequest, BankDetailsForOTP, CODdata, DeletePayoutResponse, DeleteSubscriptionPaymentMethodResponse, ErrorCodeAndDescription, ErrorCodeDescription, GetOauthUrlResponse, GetUserCODLimitResponse, HttpErrorCodeAndResponse, IfscCodeResponse, IntentApp, IntentAppErrorList, MultiTenderPaymentMeta, MultiTenderPaymentMethod, NotFoundResourceError, OrderBeneficiaryDetails, OrderBeneficiaryResponse, PaymentConfirmationRequest, PaymentConfirmationResponse, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayConfigResponse, PaymentGatewayToBeReviewed, PaymentModeList, PaymentModeLogo, PaymentOptions, PaymentOptionsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, PayoutsResponse, RefundAccountResponse, RevokeOAuthToken, RootPaymentMode, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, SetCODForUserRequest, SetCODOptionResponse, SubscriptionConfigResponse, SubscriptionPaymentMethodResponse, UpdatePayoutRequest, UpdatePayoutResponse, ActionInfo, AdvanceFilterInfo, Affiliate, AffiliateAppConfig, AffiliateAppConfigMeta, AffiliateBag, AffiliateBagDetails, AffiliateBagsDetails, AffiliateConfig, AffiliateDetails, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateMeta, AffiliateStoreIdMapping, AnnouncementResponse, AnnouncementsResponse, AppliedPromos, Article, ArticleDetails, ArticleDetails1, Attributes, B2BPODetails, BagConfigs, BagDetailsPlatformResponse, BagGST, BagGSTDetails, BagMeta, BagReturnableCancelableStatus, BagReturnableCancelableStatus1, Bags, BagsPage, BagStateMapper, BagStateTransitionMap, BagStatusHistory, BagUnit, BaseResponse, BillingInfo, BillingStaffDetails, Brand, BulkActionTemplate, BulkActionTemplateResponse, BuyerDetails, BuyRules, Charge, CheckResponse, Click2CallResponse, CompanyDetails, ContactDetails, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, CreateChannelPaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, CreateOrderPayload, CreateOrderResponse, CurrentStatus, DataUpdates, Dates, DebugInfo, Dimension, Dimensions, DiscountRules, DispatchManifest, Document, DpConfiguration, DPDetailsData, EinvoiceInfo, EInvoicePortalDetails, Entities, EntitiesDataUpdates, EntitiesReasons, EntityReasonData, Error, ErrorDetail, ErrorResponse, ErrorResponse1, FileResponse, FilterInfoOption, FiltersInfo, FiltersResponse, FinancialBreakup, Formatted, FulfillingStore, FyndOrderIdList, GetActionsResponse, GetBagsPlatformResponse, GiftCard, GSTDetailsData, HistoryDict, HistoryMeta, HistoryReason, Identifier, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheResponse, InvoiceInfo, Item, ItemCriterias, LaneConfigResponse, LineItem, LocationDetails, LockData, MarketPlacePdf, Meta, OrderBagArticle, OrderBags, OrderBrandName, OrderConfig, OrderData, OrderDetails, OrderDetailsData, OrderDetailsResponse, OrderInfo, OrderingStoreDetails, OrderListingResponse, OrderMeta, OrderPriority, OrderStatus, OrderStatusData, OrderStatusResult, OrderUser, OriginalFilter, PaymentInfo, PaymentMethod, PaymentMethods, PDFLinks, PhoneDetails, PlatformArticleAttributes, PlatformBreakupValues, PlatformChannel, PlatformDeliveryAddress, PlatformItem, PlatformOrderItems, PlatformOrderUpdate, PlatformShipment, PlatformShipmentReasonsResponse, PlatformShipmentTrack, PlatformTrack, PlatformUserDetails, PostActivityHistory, PostHistoryData, PostHistoryDict, PostHistoryFilters, PostShipmentHistory, Prices, ProcessingDates, Products, ProductsDataUpdates, ProductsDataUpdatesFilters, ProductsReasons, ProductsReasonsData, ProductsReasonsFilters, QuestionSet, Reason, ReasonsData, ReplacementDetails, ResponseDetail, ReturnConfig, ReturnConfig1, SendSmsPayload, Shipment, ShipmentConfig, ShipmentData, ShipmentDetail, ShipmentDetails, ShipmentDetails1, ShipmentHistoryResponse, ShipmentInfoResponse, ShipmentInternalPlatformViewResponse, ShipmentItem, ShipmentItemFulFillingStore, ShipmentItemMeta, ShipmentListingBrand, ShipmentListingChannel, ShipmentMeta, ShipmentPayments, ShipmentReasonsResponse, ShipmentResponseReasons, ShipmentsRequest, ShipmentsResponse, ShipmentStatus, ShipmentStatusData, ShipmentTags, ShipmentTimeStamp, ShippingInfo, SmsDataPayload, StatuesRequest, StatuesResponse, Store, StoreAddress, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, StoreReassign, StoreReassignResponse, SubLane, SuccessResponse, SuperLane, Tax, TaxDetails, TaxInfo, TrackingList, TransactionData, UpdatePackagingDimensionsPayload, UpdatePackagingDimensionsResponse, UpdateShipmentLockPayload, UpdateShipmentLockResponse, UpdateShipmentStatusRequest, UpdateShipmentStatusResponseBody, UploadConsent, URL, UserData, UserDataInfo, UserDetailsData, Weight, AllowSingleRequest, AllSizes, AppCatalogConfiguration, AppConfiguration, AppConfigurationDetail, AppConfigurationsSort, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentJson, ApplicationDepartmentListingResponse, ApplicationItemMeta, ApplicationItemMOQ, ApplicationItemSEO, ApplicationProductListingResponse, ApplicationStoreJson, ArticleAssignment, ArticleAssignment1, ArticleQuery, ArticleStoreResponse, AssignStore, AssignStoreArticle, AttributeDetailsGroup, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterSerializer, AttributeSchemaRange, AutocompleteAction, AutoCompleteMedia, AutocompletePageAction, AutocompleteResult, BannerImage, BrandItem, BrandListingResponse, BrandMeta, BrandMeta1, BulkAssetResponse, BulkHsnResponse, BulkHsnUpsert, BulkInventoryGet, BulkInventoryGetItems, BulkJob, BulkProductRequest, BulkResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CategoriesResponse, Category, CategoryCreateResponse, CategoryItems, CategoryListingResponse, CategoryMapping, CategoryMappingValues, CategoryRequestBody, CategoryResponse, CategoryUpdateResponse, Child, CollectionBadge, CollectionBanner, CollectionCreateResponse, CollectionDetailResponse, CollectionImage, CollectionItem, CollectionItemUpdate, CollectionListingFilter, CollectionListingFilterTag, CollectionListingFilterType, CollectionQuery, CollectionSchedule, CompanyBrandDetail, CompanyMeta, CompanyMeta1, CompanyOptIn, ConfigErrorResponse, ConfigSuccessResponse, ConfigurationBucketPoints, ConfigurationListing, ConfigurationListingFilter, ConfigurationListingFilterConfig, ConfigurationListingFilterValue, ConfigurationListingSort, ConfigurationListingSortConfig, ConfigurationProduct, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariant, ConfigurationProductVariantConfig, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, CreateCollection, CreateSearchKeyword, CrossSellingData, CrossSellingResponse, CustomOrder, DefaultKeyRequest, DeleteResponse, Department, DepartmentCategoryTree, DepartmentCreateErrorResponse, DepartmentCreateResponse, DepartmentCreateUpdate, DepartmentErrorResponse, DepartmentIdentifier, DepartmentModel, DepartmentResponse, DepartmentsResponse, DimensionResponse, DimensionResponse1, EntityConfiguration, FilerList, GenderDetail, GetAddressSerializer, GetAllSizes, GetAppCatalogConfiguration, GetAppCatalogEntityConfiguration, GetAutocompleteWordsData, GetAutocompleteWordsResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationDetailsSchemaListing, GetCatalogConfigurationMetaData, GetCollectionDetailNest, GetCollectionItemsResponse, GetCollectionListingResponse, GetCollectionQueryOptionResponse, GetCompanySerializer, GetConfigMetadataResponse, GetConfigResponse, GetDepartment, GetInventories, GetInventoriesResponse, GetLocationSerializer, GetOptInPlatform, GetProductBundleCreateResponse, GetProductBundleListingResponse, GetProductBundleResponse, GetProducts, GetSearchWordsData, GetSearchWordsDetailResponse, GetSearchWordsResponse, GlobalValidation, GTIN, Guide, Hierarchy, HsnCode, HsnCodesListingResponseSchemaV2, HsnCodesObject, HSNCodesResponse, HSNData, HSNDataInsertV2, HsnUpsert, Image, ImageUrls, InventoryBulkRequest, InventoryConfig, InventoryCreateRequest, InventoryExportAdvanceOption, InventoryExportFilter, InventoryExportJob, InventoryExportJobListResponse, InventoryExportQuantityFilter, InventoryExportRequest, InventoryExportResponse, InventoryFailedReason, InventoryJobDetailResponse, InventoryJobFilters, InventoryJobPayload, InventoryPage, InventoryPayload, InventoryRequest, InventoryRequestSchemaV2, InventoryResponse, InventoryResponseItem, InventoryResponsePaginated, InventorySellerIdentifierResponsePaginated, InventorySellerResponse, InventorySet, InventoryStockResponse, InventoryUpdateResponse, InventoryValidationResponse, InvoiceCredSerializer, InvoiceDetailsSerializer, InvSize, ItemQuery, Items, LimitedProductData, ListSizeGuide, LocationDayWiseSerializer, LocationIntegrationType, LocationListSerializer, LocationManagerSerializer, LocationTimingSerializer, Logo, ManufacturerResponse, ManufacturerResponse1, Media, Media1, Media2, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaFields, MOQData, NetQuantity, NetQuantityResponse, OptinCompanyBrandDetailsView, OptinCompanyDetail, OptinCompanyMetrics, OptInPostRequest, OptinStoreDetails, OwnerAppItemResponse, PageResponse, PageResponseType, Price, Price1, PriceArticle, PriceMeta, ProdcutTemplateCategoriesResponse, Product, ProductAttributesResponse, ProductBrand, ProductBulkAssets, ProductBulkRequest, ProductBulkRequestList, ProductBundleItem, ProductBundleRequest, ProductBundleUpdateRequest, ProductConfigurationDownloads, ProductCreateUpdateSchemaV2, ProductDetail, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductDownloadsResponse, ProductFilters, ProductFiltersKey, ProductFiltersValue, ProductListingDetail, ProductListingPrice, ProductListingResponse, ProductListingResponseV2, ProductPublish, ProductPublish1, ProductPublished, ProductReturnConfigSerializer, ProductSchemaV2, ProductSize, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ProductSortOn, ProductTagsViewResponse, ProductTemplate, ProductTemplateDownloadsExport, ProductTemplateExportFilterRequest, ProductTemplateExportResponse, ProductVariants, ProductVariantsResponse, Properties, PTErrorResponse, Quantities, QuantitiesArticle, Quantity, QuantityBase, ReturnConfig2, ReturnConfigResponse, SearchKeywordResult, SecondLevelChild, SellerPhoneNumber, SEOData, SeoDetail, SetSize, SingleCategoryResponse, SingleProductResponse, Size, SizeDistribution, SizeGuideResponse, StoreAssignResponse, StoreDetail, SuccessResponse1, TaxIdentifier, TaxSlab, TeaserTag, TemplateDetails, TemplatesResponse, TemplatesValidationResponse, TemplateValidationData, ThirdLevelChild, Trader, Trader1, Trader2, UpdateCollection, UpdatedResponse, UserCommon, UserDetail, UserDetail1, UserInfo, UserInfo1, UserSerializer, UserSerializer1, UserSerializer2, ValidateIdentifier, ValidateProduct, ValidateSizeGuide, VerifiedBy, WeightResponse, WeightResponse1, AddressSerializer, BrandBannerSerializer, BulkLocationSerializer, BusinessCountryInfo, BusinessDetails, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, CompanyBrandSerializer, CompanySerializer, CompanySocialAccounts, CompanyTaxesSerializer, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, CreateUpdateBrandRequestSerializer, DocumentsObj, GetBrandResponseSerializer, GetCompanyProfileSerializerResponse, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, MetricsSerializer, ProfileSuccessResponse, UpdateCompany, Website, BrowseResponse, BulkRequest, BulkUploadResponse, CDN, CompleteResponse, CopyFileTask, DbRecord, Destination, FailedResponse, Opts, ReqConfiguration, SignUrlRequest, SignUrlResponse, StartRequest, StartResponse, Upload, Urls, Attribution, CampaignShortLink, ClickStatsItem, ClickStatsResponse, ErrorRes, RedirectDevice, Redirects, ShortLinkList, ShortLinkReq, ShortLinkRes, SocialMediaTags, UrlInfo, WebRedirect, ArchiveConfig, Audit, AWSS3config, CatalogMasterConfig, CompanyConfig, DataTresholdDTO, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FileConfig, FTPConfig, GCompany, GenericDTO, GoogleSpreadSheetConfig, GStore, HttpConfig, JobConfig, JobConfigDTO, JobConfigListDTO, JobConfigRawDTO, JobHistoryDto, JobMetricsDto, JobStepsDTO, JsonDocConfig, KafkaMetaModel, KafkaResponse, LocalFileConfig, Metum, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeJobConfigDTO, ResponseEnvelopeJobMetricsDto, ResponseEnvelopeKafkaResponse, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeListJobConfigListDTO, ResponseEnvelopeListJobConfigRawDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListSlingshotConfigurationDetail, ResponseEnvelopeString, Send, SFTPConfig, SlingshotConfigurationDetail, SlingshotIntegration, StoreConfig, StoreData, StoreFilter, SuppressStoreModel, SuppressStorePayload, TaskConfig, TaskDTO, TaskParam, TaskStepConfig, Android, App, AppCartConfig, AppCurrencyResponse, AppDomain, AppFeature, AppFeatureRequest, AppFeatureResponse, AppInventory, AppInventoryCompanies, AppInventoryConfig, AppInventoryPartialUpdate, AppInventoryStores, ApplicationDetail, ApplicationInformation, ApplicationInventory, ApplicationsResponse, AppLogisticsConfig, AppOrderConfig, AppPaymentConfig, AppStoreRules, AppSupportedCurrency, ArticleAssignmentConfig, ArticleAssignmentRule, ArticleAssignmentRules, AuthenticationConfig, BlogLink, BrandCompanyInfo, BrandsByCompanyResponse, BrandStoreInfo, BuildVersion, BuildVersionHistory, BusinessHighlights, CallbackUrl, CartFeature, Charges, CommonFeature, CommsConfig, CommunicationConfig, CommunicationOptinDialogFeature, CompaniesResponse, CompanyAboutAddress, CompanyBrandInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, CompanyValidator, CompareProductsFeature, CreateApplicationRequest, CreateAppResponse, Credentials, Credit, CurrenciesResponse, CurrencyConfig, CurrencyFeature, Debit, DefaultCurrency, DeliveryCharges, DeploymentMeta, DeploymentStoreSelectionFeature, DomainAdd, DomainAddRequest, DomainsResponse, DomainStatus, DomainStatusRequest, DomainStatusResponse, DomainSuggestion, DomainSuggestionsRequest, DomainSuggestionsResponse, FacebookLink, FeedbackFeature, FilterOrderingStoreRequest, Firebase, Freshchat, FreshchatCredentials, FyndRewards, FyndRewardsCredentials, GetIntegrationsOptInsResponse, GoogleMap, GoogleMapCredentials, GooglePlusLink, Gtm, GtmCredentials, HomePageFeature, InformationAddress, InformationPhone, InformationSupport, InstagramLink, Integration, IntegrationConfigResponse, IntegrationLevel, IntegrationMeta, IntegrationOptIn, InvalidPayloadRequest, InventoryArticleAssignment, InventoryBrand, InventoryBrandRule, InventoryCategory, InventoryDiscount, InventoryPaymentConfig, InventoryPrice, InventoryStore, InventoryStoreRule, InventoryValidator, Ios, JsonSchema, LandingImage, LandingPageFeature, LastPatch, LaunchPage, LinkedInLink, Links, ListingPriceFeature, LoyaltyPointsConfig, Methods, MobileAppConfigRequest, MobileAppConfiguration, Moengage, MoengageCredentials, OptedApplicationResponse, OptedCompany, OptedInventory, OptedStore, OptedStoreAddress, OptedStoreIntegration, OptOutInventory, OptType, OrderFeature, OrderingStore, OrderingStoreConfig, OrderingStores, OrderingStoresResponse, OrderValidator, OtherEntity, OtherEntityData, OtherSellerApplication, OtherSellerApplications, OtherSellerCompany, PaymentModeConfig, PaymentSelectionLock, PcrFeature, PinterestLink, ProductDetailFeature, QrFeature, RegistrationPageFeature, RevenueEngineFeature, RewardPointsConfig, Safetynet, SafetynetCredentials, Segment, SegmentCredentials, SocialLinks, SplashImage, StoreByBrandsRequest, StoreByBrandsResponse, StoreCriteriaRule, StoreLatLong, StorePriority, StorePriorityRule, StoresResponse, StoreValidator, SuccessMessageResponse, TokenResponse, Tokens, TwitterLink, UnhandledError, UpdateDomain, UpdateDomainTypeRequest, UpdateIntegrationLevelRequest, UserEmail, UserPhoneNumber, ValidationFailedResponse, Validators, VimeoLink, YoutubeLink, AbandonedCart, AbandonedCartResponse, ActionQuery, ActivePromosResponse, AddCartDetailResponse, AddCartRequest, AddProductCart, AppliedFreeArticles, AppliedPromotion, ArticlePriceInfo, BaseInfo, BasePrice, BulkBundleRestriction, CartBreakup, CartCurrency, CartDetailResponse, CartItem, CartItemMeta, CartMetaConfigAdd, CartMetaConfigUpdate, CartProduct, CartProductIdentifer, CartProductInfo, CategoryInfo, CompareObject, CouponAction, CouponAdd, CouponAuthor, CouponBreakup, CouponDateMeta, CouponPartialUpdate, CouponSchedule, CouponsResponse, CouponUpdate, DiscountOffer, DiscountRule, DiscountRulesApp, DisplayBreakup, DisplayMeta, DisplayMeta1, DisplayMetaDict, FreeGiftItem, ItemCriteria, LoyaltyPoints, OpenapiCartDetailsRequest, OpenapiCartDetailsResponse, OpenApiCartServiceabilityRequest, OpenApiCartServiceabilityResponse, OpenApiCheckoutResponse, OpenApiErrorResponse, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OperationErrorResponse, OverrideCartItem, OverrideCartItemPromo, OverrideCheckoutReq, OverrideCheckoutResponse, Ownership, Ownership1, Ownership2, PaymentAllowValue, PaymentAllowValue1, PaymentModes, PostOrder, PostOrder1, PriceRange, ProductAction, ProductArticle, ProductAvailability, ProductAvailabilitySize, ProductImage, ProductPrice, ProductPriceInfo, PromiseFormatted, PromiseTimestamp, PromoMeta, PromotionAction, PromotionAdd, PromotionAuthor, PromotionDateMeta, PromotionListItem, PromotionPartialUpdate, PromotionPaymentModes, PromotionSchedule, PromotionsResponse, PromotionUpdate, RawBreakup, Restrictions, Restrictions1, Rule, RuleDefinition, ShipmentPromise, ShippingAddress, State, SuccessMessage, UpdateCartDetailResponse, UpdateCartRequest, UpdateProductCart, UserRegistered, UsesRemaining, UsesRemaining1, UsesRestriction, UsesRestriction1, Validation, Validity, Visibility, AppUser, ConfigurationRequest, ConfigurationRes, E, Giveaway, GiveawayAudience, GiveawayResponse, HistoryRes, Offer, Points, PointsHistory, Referral, RewardsAudience, RewardsRule, RewardUser, Schedule, SetConfigurationRes, ShareMessages, UserRes, BadRequestObject, BulkDiscount, CancelJobResponse, CreateUpdateDiscount, DiscountItems, DiscountJob, DownloadFileJob, FileJobRequest, FileJobResponse, ListOrCalender, UserDetails, ValidityObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, Association, AuthMeta, EventConfig, EventConfigBase, EventConfigList, EventConfigResponse, EventPayload, EventProcessedStatus, SubscriberConfig, SubscriberConfigList, SubscriberEvent, SubscriberResponse, CreateLogResponse, DeviceInfo, EntityObj, EntityObject, EntityTypeObj, EntityTypesResponse, Location, LogDocs, LogMetaObj, LogSchemaResponse, Modifier, RequestBodyAuditLog, CreditlineDataPlatformPayload, CreditlineDataPlatformRequest, CreditlineDataPlatformResponse, DownloadCreditDebitNote, DownloadCreditDebitNoteRequest, DownloadCreditDebitNoteResponse, DownloadCreditDebitNoteResponseData, DownloadReport, DownloadReportItems, DownloadReportList, GenerateReportFilters, GenerateReportJson, GenerateReportMeta, GenerateReportPlatform, GenerateReportRequest, GetAffiliate, GetAffiliateResponse, GetDocs, GetEngineData, GetEngineFilters, GetEngineRequest, GetEngineResponse, GetReason, GetReasonRequest, GetReasonResponse, GetReportListData, GetReportListRequest, InoviceListingPayloadDataFilters, InvoiceListingPayloadData, InvoiceListingRequest, InvoiceListingResponse, InvoiceListingResponseItems, InvoicePdfPayloadData, InvoicePdfRequest, InvoicePdfResponse, InvoiceTypePayloadData, InvoiceTypeRequest, InvoiceTypeResponse, InvoiceTypeResponseItems, IsCreditlinePayload, IsCreditlinePlatformRequest, IsCreditlinePlatformResponse, PaymentProcessPayload, PaymentProcessRequest, PaymentProcessResponse, UnpaidInvoiceDataItems };
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
import Discount = require("./Discount/DiscountPlatformClient");
import Webhook = require("./Webhook/WebhookPlatformClient");
import AuditTrail = require("./AuditTrail/AuditTrailPlatformClient");
import Finance = require("./Finance/FinancePlatformClient");
import PlatformApplicationClient = require("./PlatformApplicationClient");
type Application = {
    __v?: number;
    _id?: string;
    app_type?: string;
    auth?: ApplicationAuth;
    banner?: SecureUrl;
    cache_ttl?: number;
    channel_type?: string;
    company_id?: number;
    cors?: ApplicationCors;
    created_at?: string;
    description?: string;
    domain?: Domain;
    domains?: Domain[];
    favicon?: SecureUrl;
    is_active?: boolean;
    is_internal?: boolean;
    logo?: SecureUrl;
    meta?: ApplicationMeta[];
    mobile_logo?: SecureUrl;
    name?: string;
    owner?: string;
    redirections?: ApplicationRedirections[];
    token?: string;
    updated_at?: string;
    website?: ApplicationWebsite;
};
type ApplicationAuth = {
    enabled?: boolean;
};
type ApplicationCors = {
    domains?: string[];
};
type ApplicationMeta = {
    name?: string;
    value?: string;
};
type ApplicationRedirections = {
    redirect_from?: string;
    redirect_to?: string;
    type?: string;
};
type ApplicationResponse = {
    application?: Application;
};
type ApplicationWebsite = {
    basepath?: string;
    enabled?: boolean;
};
type BadRequest = {
    message?: string;
};
type Currency = {
    _id?: string;
    code?: string;
    created_at?: string;
    decimal_digits?: number;
    is_active?: boolean;
    name?: string;
    symbol?: string;
    updated_at?: string;
};
type Domain = {
    _id?: string;
    is_predefined?: boolean;
    is_primary?: boolean;
    is_shortlink?: boolean;
    name?: string;
    verified?: boolean;
};
type LocationCountry = {
    __v?: number;
    _id?: string;
    capital?: string;
    currency?: string;
    default_currency?: LocationDefaultCurrency;
    default_language?: LocationDefaultLanguage;
    iso2?: string;
    iso3?: string;
    name?: string;
    parent?: string;
    phone_code?: string;
    type?: string;
    uid?: number;
};
type LocationDefaultCurrency = {
    code?: string;
    name?: string;
    symbol?: string;
};
type LocationDefaultLanguage = {
    code?: string;
    name?: string;
};
type Locations = {
    items?: any[];
};
type NotFound = {
    message?: string;
};
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
type SecureUrl = {
    secure_url?: string;
};
type AddTicketPayload = {
    _custom_json?: any;
    category: string;
    content: TicketContent;
    created_by?: any;
    priority?: PriorityEnum;
    status?: string;
};
type AgentChangePayload = {
    agent_id: string;
};
type CategoryData = {
    list?: TicketCategory;
};
type CloseVideoRoomResponse = {
    success: boolean;
};
type CommunicationDetails = {
    description?: string;
    enabled?: boolean;
    title?: string;
    type?: string;
    value?: string;
};
type CreateCustomFormPayload = {
    description?: string;
    header_image?: string;
    inputs: any[];
    poll_for_assignment?: PollForAssignment;
    priority: PriorityEnum;
    should_notify?: boolean;
    slug: string;
    success_message?: string;
    title: string;
};
type CreatedOn = {
    user_agent: string;
};
type CreateVideoRoomPayload = {
    notify?: NotifyUser[];
    unique_name: string;
};
type CreateVideoRoomResponse = {
    unique_name: string;
};
type CustomForm = {
    _id: string;
    application_id: string;
    created_on?: CreatedOn;
    description?: string;
    header_image?: string;
    inputs: any[];
    login_required: boolean;
    poll_for_assignment?: PollForAssignment;
    priority: Priority;
    should_notify: boolean;
    slug: string;
    submit_button?: SubmitButton;
    success_message?: string;
    title: string;
};
type CustomFormList = {
    items?: CustomForm[];
    page?: Page;
};
type CustomFormSubmissionPayload = {
    attachments?: TicketAsset[];
    response: any[];
};
type Debug = {
    platform?: string;
    source?: string;
};
type EditCustomFormPayload = {
    description?: string;
    header_image?: string;
    inputs: any[];
    login_required?: boolean;
    poll_for_assignment?: PollForAssignment;
    priority: PriorityEnum;
    should_notify?: boolean;
    success_message?: string;
    title: string;
};
type EditTicketPayload = {
    assigned_to?: AgentChangePayload;
    category?: string;
    content?: TicketContent;
    priority?: PriorityEnum;
    source?: string;
    status?: string;
    sub_category?: string;
    tags?: string[];
};
type Email = {
    active?: boolean;
    email?: string;
    primary?: boolean;
    verified?: boolean;
};
type FeedbackForm = {
    inputs?: any;
    timestamps?: any;
    title?: string;
};
type FeedbackResponseItem = {
    display: string;
    key: string;
    value: string;
};
type Filter = {
    assignees: any[];
    categories?: TicketCategory[];
    priorities: Priority[];
    statuses: Status[];
};
type GetParticipantsInsideVideoRoomResponse = {
    participants: Participant[];
};
type GetTokenForVideoRoomResponse = {
    access_token: string;
};
type IntegrationConfig = {
    _id?: string;
    allow_ticket_creation: boolean;
    base_url?: string;
    category_data?: CategoryData;
    category_sync_apikey?: string;
    config_completed?: boolean;
    create_ticket_apikey?: string;
    integration_type: string;
    show_listing: boolean;
    update_ticket_apikey?: string;
    webhook_apikey?: string;
};
type NotifyUser = {
    country_code: string;
    phone_number: string;
};
type Participant = {
    identity?: string;
    status?: string;
    user?: UserSchema;
};
type PhoneNumber = {
    active?: boolean;
    country_code?: number;
    phone?: string;
    primary?: boolean;
    verified?: boolean;
};
type PollForAssignment = {
    duration: number;
    failure_message: string;
    message: string;
    success_message: string;
};
type Priority = {
    color: string;
    display: string;
    key: PriorityEnum;
};
type Status = {
    color: string;
    display: string;
    key: string;
};
type SubmitButton = {
    background_color: string;
    title: string;
    title_color: string;
};
type SubmitCustomFormResponse = {
    message: string;
    ticket?: Ticket;
};
type SupportGeneralConfig = {
    _id?: string;
    integration?: any;
    show_communication_info?: boolean;
    show_support_dris?: boolean;
    support_communication?: CommunicationDetails;
    support_email?: CommunicationDetails;
    support_faq?: CommunicationDetails;
    support_phone?: CommunicationDetails;
    type?: string;
};
type Ticket = {
    _custom_json?: any;
    _id: string;
    assigned_to?: any;
    category: TicketCategory;
    content?: TicketContent;
    context?: TicketContext;
    created_at?: string;
    created_by?: any;
    created_on?: CreatedOn;
    integration?: any;
    is_feedback_pending?: boolean;
    priority: Priority;
    response_id?: string;
    source: TicketSourceEnum;
    status: Status;
    sub_category?: string;
    tags?: string[];
    updated_at?: string;
};
type TicketAsset = {
    display?: string;
    type: TicketAssetTypeEnum;
    value: string;
};
type TicketCategory = {
    display: string;
    feedback_form?: FeedbackForm;
    group_id?: number;
    key: string;
    sub_categories?: TicketCategory;
};
type TicketContent = {
    attachments?: TicketAsset[];
    description?: string;
    title: string;
};
type TicketContext = {
    application_id?: string;
    company_id: string;
};
type TicketFeedback = {
    _id: string;
    category?: string;
    company_id: string;
    created_at?: string;
    response: FeedbackResponseItem[];
    ticket_id: string;
    updated_at?: string;
    user?: any;
};
type TicketFeedbackForm = {
    display?: any[];
    title: string;
};
type TicketFeedbackList = {
    items?: TicketFeedback[];
};
type TicketFeedbackPayload = {
    form_response?: any;
};
type TicketHistory = {
    _id: string;
    created_at?: string;
    created_by?: any;
    created_on?: CreatedOn;
    ticket_id: string;
    type: string;
    updated_at?: string;
    value: any;
};
type TicketHistoryList = {
    items?: TicketHistory[];
    page?: Page;
};
type TicketHistoryPayload = {
    type: HistoryTypeEnum;
    value: any;
};
type TicketList = {
    filters?: Filter;
    items?: Ticket[];
    page?: Page;
};
type TicketSubCategory = {
    display: string;
    key: string;
    sub_categories?: TicketSubCategory;
};
type UserSchema = {
    _id?: string;
    account_type?: string;
    active?: boolean;
    application_id?: string;
    created_at?: string;
    dob?: string;
    emails?: Email[];
    first_name?: string;
    gender?: string;
    last_name?: string;
    meta?: any;
    phone_numbers?: PhoneNumber[];
    profile_pic_url?: string;
    updated_at?: string;
    user_id?: string;
    username?: string;
};
type AddThemeRequestSchema = {
    theme_id?: string;
};
type AllAvailablePageSchema = {
    pages?: AvailablePageSchema[];
};
type AssetsSchema = {
    common_js?: CommonJs;
    css?: Css;
    umd_js?: UmdJs;
};
type AvailablePagePredicate = {
    route?: AvailablePageRoutePredicate;
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
};
type AvailablePageRoutePredicate = {
    exact_url?: string;
    query?: any;
    selected?: string;
};
type AvailablePageSchema = {
    _id?: string;
    path?: string;
    props?: any[];
    sections?: AvailablePageSchemaSections[];
    sections_meta?: AvailablePageSectionMetaAttributes[];
    seo?: AvailablePageSeo;
    text?: string;
    theme?: string;
    type?: string;
    value?: string;
};
type AvailablePageSchemaSections = {
    blocks?: any[];
    label?: string;
    name?: string;
    predicate?: AvailablePagePredicate;
    preset?: any;
    props?: any;
};
type AvailablePageScreenPredicate = {
    desktop?: boolean;
    mobile?: boolean;
    tablet?: boolean;
};
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
type AvailablePageSeo = {
    _id?: string;
    description?: string;
    title?: string;
};
type AvailablePageUserPredicate = {
    anonymous?: boolean;
    authenticated?: boolean;
};
type availableSectionSchema = {
    blocks?: Blocks[];
    label?: string;
    name?: string;
    props?: BlocksProps[];
};
type BlitzkriegApiErrorSchema = {
    message?: string;
};
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
type BlitzkriegNotFoundSchema = {
    message?: string;
};
type Blocks = {
    name?: string;
    props?: BlocksProps[];
    type?: string;
};
type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type Bold = {
    file?: string;
    name?: string;
};
type Colors = {
    accent_color?: string;
    bg_color?: string;
    button_secondary_color?: string;
    link_color?: string;
    primary_color?: string;
    secondary_color?: string;
};
type CommonJs = {
    link?: string;
};
type Config = {
    current?: string;
    global_schema?: GlobalSchema;
    list?: ListSchemaItem[];
    preset?: Preset;
};
type ConfigPage = {
    page?: string;
    settings?: any;
};
type Css = {
    link?: string;
    links?: string[];
};
type Custom = {
    props?: any;
};
type Font = {
    family?: string;
    variants?: Variants;
};
type FontsSchema = {
    items?: FontsSchemaItems;
    kind?: string;
};
type FontsSchemaItems = {
    category?: string;
    family?: string;
    files?: FontsSchemaItemsFiles;
    kind?: string;
    last_modified?: string;
    subsets?: string[];
    variants?: string[];
    version?: string;
};
type FontsSchemaItemsFiles = {
    bold?: string;
    italic?: string;
    regular?: string;
};
type GlobalSchema = {
    props?: GlobalSchemaProps[];
};
type GlobalSchemaProps = {
    category?: string;
    id?: string;
    label?: string;
    type?: string;
};
type Images = {
    android?: string[];
    desktop?: string[];
    ios?: string[];
    thumbnail?: string[];
};
type Information = {
    description?: string;
    features?: string[];
    images?: Images;
    name?: string;
};
type Light = {
    file?: string;
    name?: string;
};
type ListSchemaItem = {
    global_config?: any;
    name?: string;
    page?: ConfigPage[];
};
type Medium = {
    file?: string;
    name?: string;
};
type PaginationSchema = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
type Preset = {
    pages?: AvailablePageSchema[];
};
type Regular = {
    file?: string;
    name?: string;
};
type Sections = {
    attributes?: string;
};
type SemiBold = {
    file?: string;
    name?: string;
};
type Src = {
    link?: string;
};
type ThemesListingResponseSchema = {
    items?: ThemesSchema[];
    page?: PaginationSchema;
};
type ThemesSchema = {
    __v?: number;
    _id?: string;
    application?: string;
    applied?: boolean;
    archived?: boolean;
    assets?: AssetsSchema;
    available_sections?: availableSectionSchema[];
    colors?: Colors;
    config?: Config;
    created_at?: string;
    customized?: boolean;
    font?: Font;
    information?: Information;
    parent_theme?: string;
    parent_theme_version?: string;
    published?: boolean;
    src?: Src;
    styles?: any;
    tags?: string[];
    updated_at?: string;
    version?: string;
};
type UmdJs = {
    link?: string;
    links?: string[];
};
type UpgradableThemeSchema = {
    applied_theme?: string;
    parent_theme?: string;
    upgrade?: boolean;
};
type Variants = {
    bold?: Bold;
    light?: Light;
    medium?: Medium;
    regular?: Regular;
    semi_bold?: SemiBold;
};
type Accountkit = {
    app_id?: string;
};
type ArchiveUserRequestSchema = {
    user_id?: string;
};
type ArchiveUserSuccess = {
    success?: boolean;
};
type AuthenticationApiErrorSchema = {
    message?: string;
};
type AuthenticationInternalServerErrorSchema = {
    message?: string;
};
type AuthSuccess = {
    register_token?: string;
    user?: UserSchema;
    user_exists?: boolean;
};
type AuthSuccessUser = {
    active?: boolean;
    debug?: AuthSuccessUserDebug;
    emails?: AuthSuccessUserEmails;
    first_name?: string;
    last_name?: string;
};
type AuthSuccessUserDebug = {
    platform?: string;
};
type AuthSuccessUserEmails = {
    active?: boolean;
    email?: string;
    primary?: boolean;
    verified?: boolean;
};
type BlockUserRequestSchema = {
    reason?: string;
    status?: boolean;
    user_id?: string[];
};
type BlockUserSuccess = {
    success?: boolean;
};
type CodeRequestBodySchema = {
    code?: string;
};
type CreateUserGroupSchema = {
    description: string;
    file_url: string;
    name: string;
};
type CreateUserRequestSchema = {
    email?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    meta?: any;
    phone_number: string;
    username: string;
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
    cookie?: any;
    domain?: string;
    http_only?: boolean;
    max_age?: number;
    secure?: boolean;
};
type CustomerListResponseSchema = {
    items?: UserSchema[];
    page?: PaginationSchema;
};
type DeleteAccountConsent = {
    consent_text?: string;
};
type DeleteAccountReasons = {
    reason_id?: string;
    reason_text?: string;
    show_text_area?: boolean;
};
type DeleteApplicationUserRequestSchema = {
    otp?: string;
    reason?: string;
    reason_id?: string;
    request_id?: string;
    user_id?: string;
};
type DeleteUserSuccess = {
    success?: boolean;
};
type EditEmailRequestSchema = {
    email?: string;
};
type EditMobileRequestSchema = {
    country_code?: string;
    phone?: string;
};
type EditProfileMobileSchema = {
    country_code?: string;
    phone?: string;
};
type EditProfileRequestSchema = {
    android_hash?: string;
    country_code?: string;
    dob?: string;
    email?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    mobile?: EditProfileMobileSchema;
    profile_pic_url?: string;
    register_token?: string;
    sender?: string;
};
type EmailOtpSuccess = {
    success?: boolean;
};
type Facebook = {
    app_id?: string;
};
type FlashCard = {
    background_color?: string;
    text?: string;
    text_color?: string;
};
type ForgotPasswordRequestSchema = {
    code?: string;
    password?: string;
};
type FormRegisterRequestSchema = {
    email?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    register_token?: string;
};
type FormRegisterRequestSchemaPhone = {
    country_code?: string;
    mobile?: string;
};
type Google = {
    app_id?: string;
};
type HasPasswordSuccess = {
    result?: boolean;
};
type Login = {
    otp?: boolean;
    password?: boolean;
};
type LoginSuccess = {
    register_token?: string;
    request_id?: string;
    user?: UserSchema;
};
type LogoutSuccess = {
    logout?: boolean;
};
type LookAndFeel = {
    background_color?: string;
    card_position?: string;
};
type MetaSchema = {
    fynd_default?: boolean;
};
type NotFoundSchema = {
    message?: string;
};
type OAuthRequestAppleSchema = {
    oauth?: OAuthRequestAppleSchemaOauth;
    profile?: OAuthRequestAppleSchemaProfile;
    user_identifier?: string;
};
type OAuthRequestAppleSchemaOauth = {
    identity_token?: string;
};
type OAuthRequestAppleSchemaProfile = {
    first_name?: string;
    full_name?: string;
    last_name?: string;
};
type OAuthRequestSchema = {
    is_signed_in?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
type OAuthRequestSchemaOauth2 = {
    access_token?: string;
    expiry?: number;
    refresh_token?: string;
};
type OAuthRequestSchemaProfile = {
    email?: string;
    first_name?: string;
    full_name?: string;
    id?: string;
    image?: string;
    last_name?: string;
};
type OtpSuccess = {
    country_code?: string;
    message?: string;
    mobile?: string;
    register_token?: string;
    request_id?: string;
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
};
type PasswordLoginRequestSchema = {
    captcha_code?: string;
    password?: string;
    username?: string;
};
type PlatformEmail = {
    is_required?: boolean;
    level?: string;
};
type PlatformMobile = {
    is_required?: boolean;
    level?: string;
};
type PlatformSchema = {
    _id?: string;
    active?: boolean;
    created_at?: string;
    delete_account_consent?: any;
    delete_account_day?: number;
    delete_account_reasons?: DeleteAccountReasons[];
    desktop_image?: string;
    display?: string;
    flash_card?: FlashCard;
    forgot_password?: boolean;
    login?: Login;
    look_and_feel?: LookAndFeel;
    meta?: MetaSchema;
    mobile_image?: string;
    name?: string;
    register?: boolean;
    register_required_fields?: RegisterRequiredFields;
    required_fields?: RequiredFields;
    session_config?: any;
    skip_captcha?: boolean;
    skip_login?: boolean;
    social?: Social;
    social_tokens?: SocialTokens;
    subtext?: string;
    updated_at?: string;
};
type ProfileEditSuccess = {
    country_code?: string;
    email?: string;
    message?: string;
    mobile?: string;
    register_token?: string;
    request_id?: string;
    resend_email_token?: string;
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    user?: UserSchema;
    user_exists?: boolean;
    verify_email_link?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
};
type ProfileEditSuccessSchema = {
    email?: string;
    register_token?: string;
    user?: string;
    user_exists?: boolean;
    verify_email_link?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
};
type RegisterFormSuccess = {
    country_code?: string;
    email?: string;
    message?: string;
    mobile?: string;
    register_token?: string;
    request_id?: string;
    resend_email_token?: string;
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    user_exists?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
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
type RequiredFields = {
    email?: PlatformEmail;
    mobile?: PlatformMobile;
};
type ResetPasswordSuccess = {
    status?: string;
};
type SendEmailOtpRequestSchema = {
    action?: string;
    email?: string;
    register_token?: string;
    token?: string;
};
type SendEmailVerifyLinkSuccess = {
    verify_email_link?: boolean;
};
type SendMobileOtpRequestSchema = {
    action?: string;
    android_hash?: string;
    captcha_code?: string;
    country_code?: string;
    force?: string;
    mobile?: string;
    token?: string;
};
type SendMobileVerifyLinkSuccess = {
    verify_mobile_link?: boolean;
};
type SendOtpRequestSchema = {
    android_hash?: string;
    captcha_code?: string;
    country_code?: string;
    mobile?: string;
};
type SendOtpResponse = {
    country_code?: string;
    email?: string;
    message?: string;
    mobile?: string;
    register_token?: string;
    request_id?: string;
    resend_email_token?: string;
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    user_exists?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
};
type SendResetPasswordEmailRequestSchema = {
    captcha_code?: string;
    email?: string;
};
type SendResetPasswordMobileRequestSchema = {
    captcha_code?: string;
    country_code?: string;
    mobile?: string;
};
type SendVerificationLinkMobileRequestSchema = {
    active?: boolean;
    country_code?: string;
    phone?: string;
    primary?: boolean;
    verified?: boolean;
};
type SessionDeleteResponseSchema = {
    items?: string[];
};
type SessionExpiry = {
    duration?: number;
    is_rolling?: boolean;
    type?: string;
};
type SessionListResponseInfo = {
    domain?: string;
    expire_in?: string;
    ip?: string;
    session_id?: string;
    user_agent?: string;
};
type SessionListResponseSchema = {
    items?: SessionListResponseInfo[];
};
type SessionListSuccess = {
    sessions?: string[];
};
type Social = {
    account_kit?: boolean;
    apple?: boolean;
    facebook?: boolean;
    google?: boolean;
};
type SocialTokens = {
    account_kit?: Accountkit;
    facebook?: Facebook;
    google?: Google;
};
type TokenRequestBodySchema = {
    token?: string;
};
type UnauthenticatedSchema = {
    authenticated?: boolean;
};
type UnauthorizedSchema = {
    message?: string;
};
type UnDeleteUserRequestSchema = {
    reason?: string;
    reason_id?: string;
    user_id?: string;
};
type UnDeleteUserSuccess = {
    success?: boolean;
};
type UpdatePasswordRequestSchema = {
    new_password?: string;
    old_password?: string;
};
type UpdateUserGroupSchema = {
    description?: string;
    file_url?: string;
    name?: string;
};
type UpdateUserRequestSchema = {
    emails?: UserEmails[];
    external_id?: string;
    first_name?: string;
    gender?: string;
    last_name?: string;
    meta?: any;
    phone_numbers?: UserPhoneNumbers[];
};
type UserEmails = {
    active?: boolean;
    email?: string;
    primary?: boolean;
    verified?: boolean;
};
type UserGroupListResponseSchema = {
    items?: UserGroupResponseSchema[];
    page?: PaginationSchema;
};
type UserGroupResponseSchema = {
    __v?: number;
    _id?: string;
    application_id?: string;
    created_at?: string;
    description?: string;
    file_url?: string;
    modified_at?: string;
    name?: string;
    status?: string;
    uid?: number;
};
type UserObjectSchema = {
    user?: UserSchema;
};
type UserPhoneNumbers = {
    active?: boolean;
    country_code?: string;
    phone?: string;
    primary?: boolean;
    verified?: boolean;
};
type UserSearchResponseSchema = {
    users?: UserSchema[];
};
type VerifyEmailOtpRequestSchema = {
    action?: string;
    email?: string;
    otp?: string;
    register_token?: string;
};
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verify_email_link?: boolean;
};
type VerifyEmailSuccess = {
    message?: string;
};
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verify_mobile_link?: boolean;
};
type VerifyOtpRequestSchema = {
    otp?: string;
    register_token?: string;
    request_id?: string;
};
type VerifyOtpSuccess = {
    register_token?: string;
    user?: UserSchema;
    user_exists?: boolean;
};
type Action = {
    page?: ActionPage;
    popup?: ActionPage;
    type?: string;
};
type ActionPage = {
    params?: any;
    query?: any;
    type: PageType;
    url?: string;
};
type AdminAnnouncementSchema = {
    _id?: string;
    _schedule?: ScheduleSchema;
    announcement?: string;
    app?: string;
    author?: AnnouncementAuthorSchema;
    created_at?: string;
    editor_meta?: EditorMeta;
    modified_at?: string;
    pages?: AnnouncementPageSchema[];
    platforms?: string[];
    title?: string;
};
type AnnouncementAuthorSchema = {
    created_by?: string;
    modified_by?: string;
};
type AnnouncementPageSchema = {
    page_slug?: string;
    type?: string;
};
type AnnouncementSchema = {
    announcement?: string;
    schedule?: ScheduleStartSchema;
};
type AnnouncementsResponseSchema = {
    announcements?: any;
    refresh_pages?: string[];
    refresh_rate?: number;
};
type ApplicationLegal = {
    _id?: string;
    application?: string;
    created_at?: string;
    faq?: ApplicationLegalFAQ[];
    policy?: string;
    returns?: string;
    shipping?: string;
    tnc?: string;
    updated_at?: string;
};
type ApplicationLegalFAQ = {
    answer?: string;
    question?: string;
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
type BlogGetResponse = {
    items?: BlogSchema[];
    page?: Page;
};
type BlogRequest = {
    _custom_json?: any;
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
};
type BlogSchema = {
    _custom_json?: any;
    _id?: string;
    _schedule?: CronSchedule;
    application?: string;
    archived?: boolean;
    author?: Author;
    content?: ResourceContent[];
    date_meta?: DateMeta;
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
};
type CategoryRequestSchema = {
    slug?: string;
    title?: string;
};
type CategorySchema = {
    _custom_json?: any;
    _id?: string;
    application?: string;
    children?: string[];
    description?: string;
    icon_url?: string;
    index?: number;
    slug?: string;
    title?: string;
};
type ChildrenSchema = {
    _id?: string;
    answer?: string;
    application?: string;
    question?: string;
    slug?: string;
};
type CommonError = {
    message?: string;
};
type ConfigurationSchema = {
    duration?: number;
    sleep_time?: number;
    slide_direction?: string;
    start_on_launch?: boolean;
};
type ContactSchema = {
    email?: EmailSchema;
    phone?: PhoneSchema;
};
type ContentAPIError = {
    code?: string;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
type ContentSchema = {
    type?: string;
    value?: any;
};
type CreateAnnouncementSchema = {
    data?: AdminAnnouncementSchema;
    message?: string;
};
type CreatedBySchema = {
    id?: string;
};
type CreateFaqCategoryRequestSchema = {
    category?: CategoryRequestSchema;
};
type CreateFaqCategorySchema = {
    category?: CategorySchema;
};
type CreateFaqResponseSchema = {
    faq?: FaqSchema;
};
type CreateFaqSchema = {
    faq?: FAQ;
};
type CreateTagRequestSchema = {
    tags?: CreateTagSchema[];
};
type CreateTagSchema = {
    _id?: string;
    attributes?: any;
    content?: string;
    name?: string;
    pages?: any[];
    position?: string;
    sub_type?: string;
    type?: string;
    url?: string;
};
type CronSchedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
};
type CustomMetaTag = {
    _id?: string;
    content?: string;
    name?: string;
};
type CustomPage = {
    data?: CustomPageSchema;
};
type CustomPageSchema = {
    _id?: string;
    _schedule?: ScheduleSchema;
    application?: string;
    content?: any[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    description?: string;
    orientation?: string;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: string[];
    title?: string;
    type?: string;
};
type DataLoaderResetResponseSchema = {
    reset?: string;
};
type DataLoaderResponseSchema = {
    __source?: DataLoaderSourceSchema;
    _id?: string;
    application?: string;
    company?: string;
    content?: string;
    name?: string;
    operation_id?: string;
    service?: string;
    type?: string;
    url?: string;
};
type DataLoaderSchema = {
    __source?: DataLoaderSourceSchema;
    _id?: string;
    content?: string;
    name?: string;
    operation_id?: string;
    service?: string;
    type?: string;
    url?: string;
};
type DataLoaderSourceSchema = {
    id?: string;
    type?: string;
};
type DataLoadersSchema = {
    items?: DataLoaderSchema[];
};
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DefaultNavigationResponse = {
    items?: NavigationSchema[];
};
type Detail = {
    description?: string;
    image_url?: string;
    title?: string;
};
type EditorMeta = {
    background_color?: string;
    content?: string;
    content_type?: string;
    foreground_color?: string;
};
type EmailProperties = {
    key?: string;
    value?: string;
};
type EmailSchema = {
    active?: boolean;
    email?: EmailProperties[];
};
type FAQ = {
    answer?: string;
    question?: string;
    slug?: string;
};
type FAQCategorySchema = {
    _custom_json?: any;
    _id?: string;
    application?: string;
    children?: ChildrenSchema[];
    description?: string;
    icon_url?: string;
    index?: number;
    slug?: string;
    title?: string;
};
type FaqResponseSchema = {
    faqs?: FaqSchema[];
};
type FaqSchema = {
    _id?: string;
    answer?: string;
    application?: string;
    question?: string;
    slug?: string;
    tags?: string[];
};
type FeatureImage = {
    secure_url?: string;
};
type GeneratedSEOContent = {
    description?: string;
    title?: string;
};
type GenerateSEOContent = {
    existing_text?: string;
    keywords?: string[];
    text?: string;
    type?: string;
};
type GetAnnouncementListSchema = {
    items?: AdminAnnouncementSchema[];
    page?: Page;
};
type GetFaqCategoriesSchema = {
    categories?: CategorySchema[];
};
type GetFaqCategoryBySlugSchema = {
    category?: FAQCategorySchema;
};
type GetFaqSchema = {
    faqs?: FaqSchema[];
};
type HandpickedTagSchema = {
    attributes?: any;
    content?: string;
    name?: string;
    position?: string;
    sub_type?: string;
    type?: string;
    url?: string;
};
type LandingPage = {
    data?: LandingPageSchema;
    success?: boolean;
};
type LandingPageGetResponse = {
    items?: LandingPageSchema[];
    page?: Page;
};
type LandingPageSchema = {
    _custom_json?: any;
    _id?: string;
    action?: Action;
    application?: string;
    archived?: boolean;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    platform?: string[];
    slug?: string;
};
type Language = {
    display?: string;
};
type LocaleLanguage = {
    ar?: Language;
    en_us?: Language;
    hi?: Language;
};
type Navigation = {
    _id?: string;
    application?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    name?: string;
    navigation?: NavigationReference;
    orientation?: string;
    platform?: string;
    position?: string;
    slug?: string;
};
type NavigationGetResponse = {
    items?: NavigationSchema[];
    page?: Page;
};
type NavigationReference = {
    _locale_language?: LocaleLanguage;
    acl?: string[];
    action?: Action;
    active?: boolean;
    display?: string;
    image?: string;
    sort_order?: number;
    sub_navigation?: NavigationReference[];
    tags?: string[];
    type?: string;
};
type NavigationRequest = {
    name?: string;
    navigation?: NavigationReference[];
    orientation?: Orientation;
    platform?: string[];
    slug?: string;
};
type NavigationSchema = {
    _id?: string;
    application?: string;
    archived?: boolean;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    name?: string;
    navigation?: NavigationReference[];
    orientation?: Orientation;
    platform?: string[];
    slug?: string;
    version?: number;
};
type NextSchedule = {
    end?: string;
    start?: string;
};
type Orientation = {
    landscape?: string[];
    portrait?: string[];
};
type PageContent = {
    type?: string;
    value?: any;
};
type PageGetResponse = {
    items?: PageSchema[];
    page?: Page;
};
type PageMeta = {
    key?: string;
    value?: any;
};
type PageMetaSchema = {
    application_id?: string;
    custom_pages?: PageSchema[];
    system_pages?: NavigationSchema[];
};
type PagePublishRequest = {
    publish?: boolean;
};
type PageRequest = {
    _custom_json?: any;
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    content?: any[];
    feature_image?: Asset;
    orientation?: string;
    published?: boolean;
    reading_time?: string;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
};
type PageSchema = {
    _custom_json?: any;
    _id?: string;
    _schedule?: ScheduleSchema;
    application?: string;
    archived?: boolean;
    component_ids?: string[];
    content?: any[];
    content_path?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    description?: string;
    feature_image?: Asset;
    orientation?: string;
    page_meta?: any[];
    platform?: string;
    published?: boolean;
    seo?: SEO;
    slug?: string;
    tags?: string[];
    title?: string;
    type?: string;
    visibility?: any;
};
type PageSpec = {
    specifications?: any[];
};
type PageSpecItem = {
    display_name?: string;
    page_type?: string;
    params?: PageSpecParam[];
    query?: PageSpecParam[];
};
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
type PathMappingSchema = {
    __source?: PathSourceSchema;
    _id?: string;
    application?: string;
    created_at?: string;
    redirect_from?: string;
    redirect_to?: string;
    updated_at?: string;
};
type PathSourceSchema = {
    id?: string;
    type?: string;
};
type PhoneProperties = {
    code?: string;
    key?: string;
    number?: string;
};
type PhoneSchema = {
    active?: boolean;
    phone?: PhoneProperties[];
};
type RemoveHandpickedSchema = {
    tags?: string[];
};
type ResourceContent = {
    type?: string;
    value?: string;
};
type ScheduleSchema = {
    cron?: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    start?: string;
};
type ScheduleStartSchema = {
    end?: string;
    start?: string;
};
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
};
type SeoComponent = {
    seo?: SeoSchema;
};
type SEOImage = {
    url?: string;
};
type SeoSchema = {
    _id?: string;
    app?: string;
    cannonical_enabled?: boolean;
    created_at?: string;
    custom_meta_tags?: any[];
    details?: Detail;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    updated_at?: string;
};
type Slideshow = {
    data?: SlideshowSchema;
    success?: boolean;
};
type SlideshowGetResponse = {
    items?: SlideshowSchema[];
    page?: Page;
};
type SlideshowMedia = {
    action?: Action;
    auto_decide_duration?: boolean;
    bg_color?: string;
    duration?: number;
    type?: string;
    url?: string;
};
type SlideshowRequest = {
    active?: boolean;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia;
    platform?: string;
    slug?: string;
};
type SlideshowSchema = {
    _custom_json?: any;
    _id?: string;
    active?: boolean;
    application?: string;
    archived?: boolean;
    configuration?: ConfigurationSchema;
    date_meta?: DateMeta;
    media?: SlideshowMedia[];
    platform?: string;
    slug?: string;
};
type Support = {
    _id?: string;
    application?: string;
    config_type?: string;
    contact?: ContactSchema;
    created?: boolean;
    created_at?: string;
    updated_at?: string;
};
type TagDeleteSuccessResponse = {
    success?: boolean;
};
type TagSchema = {
    __source?: TagSourceSchema;
    _id?: string;
    attributes?: any;
    content?: string;
    name?: string;
    pages?: any[];
    position?: string;
    sub_type?: string;
    type?: string;
    url?: string;
};
type TagSourceSchema = {
    id?: string;
    type?: string;
};
type TagsSchema = {
    _id?: string;
    application?: string;
    tags?: TagSchema[];
};
type UpdateFaqCategoryRequestSchema = {
    category?: CategorySchema;
};
type UpdateHandpickedSchema = {
    tag?: HandpickedTagSchema;
};
type CancelSubscriptionReq = {
    product_suite?: string;
    subscription_id?: string;
    type?: string;
    unique_id?: string;
};
type CancelSubscriptionRes = {
    data?: Subscription;
    success?: boolean;
};
type ChargeLineItem = {
    capped_amount?: number;
    is_test?: boolean;
    metadata?: any;
    name: string;
    price: EntityChargePrice;
    pricing_type: string;
    recurring?: EntityChargeRecurring;
    term: string;
    trial_days?: number;
};
type CheckValidityResponse = {
    discount_amount?: number;
    is_valid?: boolean;
};
type CreateOneTimeCharge = {
    charge: OneTimeChargeItem;
    is_test?: boolean;
    name: string;
    return_url: string;
};
type CreateOneTimeChargeResponse = {
    charge?: OneTimeChargeEntity;
    confirm_url?: string;
};
type CreateSubscriptionCharge = {
    is_test?: boolean;
    line_items: ChargeLineItem[];
    name: string;
    return_url: string;
    trial_days?: number;
};
type CreateSubscriptionResponse = {
    confirm_url?: string;
    subscription?: EntitySubscription;
};
type CurrentPeriod = {
    end_date?: string;
    start_date?: string;
};
type DetailedPlan = {
    _id?: string;
    addons?: string[];
    amount?: number;
    components?: DetailedPlanComponents[];
    country?: string;
    created_at?: string;
    currency?: string;
    description?: string;
    is_active?: boolean;
    is_trial_plan?: boolean;
    is_visible?: boolean;
    modified_at?: string;
    name?: string;
    plan_group?: string;
    product_suite_id?: string;
    recurring?: PlanRecurring;
    tag_lines?: string[];
    tags?: string[];
    trial_period?: number;
    type?: string;
};
type DetailedPlanComponents = {
    config?: any;
    description?: string;
    display_text?: string;
    enabled?: boolean;
    group?: string;
    icon?: string;
    links?: any;
    name?: string;
    slug?: string;
};
type EntityChargePrice = {
    amount: number;
    currency_code: string;
};
type EntityChargeRecurring = {
    interval: string;
};
type EntitySubscription = {
    _id?: string;
    activated_on?: string;
    cancelled_on?: string;
    company_id?: number;
    line_items?: SubscriptionCharge[];
    metadata?: any;
    name?: string;
    status?: string;
    trial_days?: number;
    trial_period?: SubscriptionTrialPeriod;
};
type InternalServerError = {
    code?: string;
    message?: string;
};
type Invoice = {
    invoice?: InvoiceDetails;
    invoice_items?: InvoiceItems[];
};
type InvoiceDetails = {
    _id?: string;
    attemp?: number;
    auto_advance?: boolean;
    client?: InvoiceDetailsClient;
    collection_method?: string;
    created_at?: string;
    currency?: string;
    current_status?: string;
    hash_identifier?: string;
    invoice_url?: string;
    modified_at?: string;
    next_action_time?: string;
    number?: string;
    paid?: boolean;
    payment_method?: InvoicePaymentMethod;
    period?: InvoiceDetailsPeriod;
    pg_data?: any;
    receipt_number?: string;
    statement_descriptor?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subscriber_id?: string;
    subscription?: string;
    subtotal?: number;
    total?: number;
};
type InvoiceDetailsClient = {
    address_lines?: string[];
    email?: string;
    name?: string;
    phone?: string;
};
type InvoiceDetailsPaymentMethods = {
    data?: InvoiceDetailsPaymentMethodsData;
    id?: number;
    is_default?: boolean;
    pg_payment_method_id?: string;
    type?: string;
};
type InvoiceDetailsPaymentMethodsData = {
    brand?: string;
    checks?: InvoiceDetailsPaymentMethodsDataChecks;
    country?: string;
    exp_month?: number;
    exp_year?: number;
    fingerprint?: string;
    funding?: string;
    generated_from?: string;
    last4?: string;
    networks?: InvoiceDetailsPaymentMethodsDataNetworks;
    three_d_secure_usage?: InvoiceDetailsPaymentMethodsDataThreeDSecureUsage;
    wallet?: string;
};
type InvoiceDetailsPaymentMethodsDataChecks = {
    address_line1_check?: string;
    address_postal_code_check?: string;
    cvc_check?: string;
};
type InvoiceDetailsPaymentMethodsDataNetworks = {
    available?: string[];
    preferred?: string;
};
type InvoiceDetailsPaymentMethodsDataThreeDSecureUsage = {
    supported?: boolean;
};
type InvoiceDetailsPeriod = {
    end?: string;
    start?: string;
};
type InvoiceDetailsStatusTrail = {
    _id?: string;
    timestamp?: string;
    value?: string;
};
type InvoiceItems = {
    _id?: string;
    amount?: number;
    created_at?: string;
    currency?: string;
    description?: string;
    invoice_id?: string;
    modified_at?: string;
    name?: string;
    period?: InvoiceItemsPeriod;
    plan?: InvoiceItemsPlan;
    quantity?: number;
    type?: string;
    unit_amount?: number;
};
type InvoiceItemsPeriod = {
    end?: string;
    start?: string;
};
type InvoiceItemsPlan = {
    _id?: string;
    addons?: string[];
    amount?: number;
    country?: string;
    created_at?: string;
    currency?: string;
    description?: string;
    is_active?: boolean;
    is_trial_plan?: boolean;
    is_visible?: boolean;
    modified_at?: string;
    name?: string;
    plan_group?: string;
    product_suite_id?: string;
    recurring?: InvoiceItemsPlanRecurring;
    tag_lines?: string[];
    tags?: string[];
    trial_period?: number;
    type?: string;
};
type InvoiceItemsPlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type InvoicePaymentMethod = {
    pg_payment_method_id?: string;
};
type Invoices = {
    data?: InvoicesData[];
    end?: number;
    limit?: number;
    page?: number;
    start?: number;
    total?: number;
};
type InvoicesData = {
    _id?: string;
    attemp?: number;
    auto_advance?: boolean;
    client?: InvoicesDataClient;
    collection_method?: string;
    created_at?: string;
    currency?: string;
    current_status?: string;
    hash_identifier?: string;
    invoice_items?: InvoiceItems[];
    invoice_url?: string;
    modified_at?: string;
    next_action_time?: string;
    number?: string;
    paid?: boolean;
    payment_method?: InvoicesDataPaymentMethod;
    period?: InvoicesDataPeriod;
    pg_data?: any;
    receipt_number?: string;
    statement_descriptor?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subscriber_id?: string;
    subscription?: string;
    subtotal?: number;
    total?: number;
};
type InvoicesDataClient = {
    address_lines?: string[];
    email?: string;
    name?: string;
    phone?: string;
};
type InvoicesDataPaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoicesDataPeriod = {
    end?: string;
    start?: string;
};
type OneTimeChargeEntity = {
    _id?: string;
    activated_on?: string;
    cancelled_on?: string;
    entity_id?: string;
    entity_type?: string;
    is_test?: boolean;
    meta?: any;
    metadata?: any;
    name?: string;
    price?: EntityChargePrice;
    pricing_type?: string;
    return_url?: string;
    status?: string;
    subscriber_id?: string;
};
type OneTimeChargeItem = {
    capped_amount?: number;
    is_test?: boolean;
    metadata?: any;
    name: string;
    price: EntityChargePrice;
    pricing_type: string;
    term?: string;
};
type Phone = {
    phone_country_code?: string;
    phone_number?: string;
};
type Plan = {
    _id?: string;
    addons?: string[];
    amount?: number;
    country?: string;
    created_at?: string;
    currency?: string;
    description?: string;
    is_active?: boolean;
    is_trial_plan?: boolean;
    is_visible?: boolean;
    modified_at?: string;
    name?: string;
    plan_group?: string;
    product_suite_id?: string;
    recurring?: PlanRecurring;
    tag_lines?: string[];
    tags?: string[];
    trial_period?: number;
    type?: string;
};
type PlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type ResourceNotFound = {
    message?: string;
};
type Subscription = {
    _id?: string;
    cancel_at_period_end?: boolean;
    channel_type?: string;
    collection_method?: string;
    created_at?: string;
    current_period?: SubscriptionCurrentPeriod;
    current_status?: string;
    invoice_settings?: SubscriptionInvoiceSettings;
    is_active?: boolean;
    latest_invoice?: string;
    modified_at?: string;
    pause_collection?: SubscriptionPauseCollection;
    plan_data?: Plan;
    plan_id?: string;
    product_suite_id?: string;
    subscriber_id?: string;
    trial?: SubscriptionTrial;
};
type SubscriptionActivateReq = {
    payment_method?: string;
    plan_id?: string;
    product_suite?: string;
    type?: string;
    unique_id?: string;
};
type SubscriptionActivateRes = {
    data?: Subscription;
    success?: boolean;
};
type SubscriptionBillingAddress = {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
    state?: string;
};
type SubscriptionCharge = {
    _id?: string;
    activated_on?: string;
    billing_date?: string;
    cancelled_on?: string;
    capped_amount?: number;
    current_period?: CurrentPeriod;
    is_test?: boolean;
    metadata?: any;
    name?: string;
    price?: EntityChargePrice;
    pricing_type?: string;
    recurring?: EntityChargeRecurring;
    status?: string;
    term?: string;
};
type SubscriptionCurrentPeriod = {
    end?: string;
    start?: string;
};
type SubscriptionCustomer = {
    _id?: string;
    billing_address?: SubscriptionBillingAddress;
    created_at?: string;
    data?: any;
    email?: string;
    modified_at?: string;
    name?: string;
    phone?: Phone;
    type?: string;
    unique_id?: string;
};
type SubscriptionCustomerCreate = {
    billing_address?: SubscriptionBillingAddress;
    email?: string;
    name?: string;
    phone?: Phone;
    type?: string;
    unique_id?: string;
};
type SubscriptionInvoiceSettings = {
    charging?: boolean;
    generation?: boolean;
};
type SubscriptionLimit = {
    application?: SubscriptionLimitApplication;
    extensions?: SubscriptionLimitExtensions;
    integrations?: SubscriptionLimitIntegrations;
    is_trial_plan?: boolean;
    marketplace?: SubscriptionLimitMarketplace;
    other_platform?: SubscriptionLimitOtherPlatform;
    products?: SubscriptionLimitProducts;
    team?: SubscriptionLimitTeam;
};
type SubscriptionLimitApplication = {
    enabled?: boolean;
    hard_limit?: number;
    soft_limit?: number;
};
type SubscriptionLimitExtensions = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimitIntegrations = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimitMarketplace = {
    enabled?: boolean;
};
type SubscriptionLimitOtherPlatform = {
    enabled?: boolean;
};
type SubscriptionLimitProducts = {
    bulk?: boolean;
    limit?: number;
};
type SubscriptionLimitTeam = {
    limit?: number;
};
type SubscriptionPauseCollection = {
    behavior?: string;
    resume_at?: string;
};
type SubscriptionStatus = {
    current_subscriptions?: Subscription[];
    is_enabled?: boolean;
    latest_invoice?: InvoicesData;
    mandate_amount?: string;
    next_plan?: Plan;
    subscription?: Subscription;
};
type SubscriptionTrial = {
    end?: string;
    start?: string;
};
type SubscriptionTrialPeriod = {
    end_date?: string;
    start_date?: string;
};
type UnauthenticatedApplication = {
    message?: string;
};
type UnauthenticatedUser = {
    message?: string;
};
type Audience = {
    __v?: number;
    _id?: string;
    application?: string;
    created_at?: string;
    description?: string;
    file_url?: string;
    headers?: string[];
    is_active?: boolean;
    name?: string;
    records_count?: number;
    slug?: string;
    tags?: string[];
    type?: string;
    updated_at?: string;
};
type AudienceReq = {
    application?: string;
    description?: string;
    file_url?: string;
    headers?: string[];
    is_active?: boolean;
    name?: string;
    records_count?: number;
    tags?: string[];
    type?: string;
};
type Audiences = {
    items?: Audience[];
    page?: Page;
};
type BadRequestSchema = {
    message?: string;
    status?: string;
};
type BigqueryHeadersReq = {
    query?: string;
    type?: string;
};
type BigqueryHeadersRes = {
    headers?: BigqueryHeadersResHeaders[];
};
type BigqueryHeadersResHeaders = {
    name?: string;
    type?: string;
};
type Campaign = {
    __v?: number;
    _id?: string;
    application?: string;
    created_at?: string;
    datasource?: string;
    description?: string;
    email?: CampaignEmail;
    is_active?: boolean;
    name?: string;
    recipient_headers?: RecipientHeaders;
    slug?: string;
    tags?: any[];
    type?: string;
    updated_at?: string;
};
type CampaignEmail = {
    provider?: CampignEmailProvider;
    template?: CampaignEmailTemplate;
};
type CampaignEmailTemplate = {
    key?: string;
    value?: string;
};
type CampaignReq = {
    application?: string;
    description?: string;
    file_url?: string;
    headers?: string[];
    is_active?: boolean;
    name?: string;
    records_count?: number;
    tags?: string[];
    type?: string;
};
type Campaigns = {
    items?: Campaign[];
    page?: Page;
};
type CampignEmailProvider = {
    _id?: string;
    from_email?: string;
    from_name?: string;
};
type EmailProvider = {
    __v?: number;
    _id?: string;
    api_key?: string;
    application?: string;
    created_at?: string;
    description?: string;
    from_address?: EmailProviderReqFrom[];
    name?: string;
    provider?: string;
    slug?: string;
    type?: string;
    updated_at?: string;
};
type EmailProviderReq = {
    api_key?: string;
    description?: string;
    from_address?: EmailProviderReqFrom[];
    name?: string;
    provider?: string;
    type?: string;
};
type EmailProviderReqFrom = {
    email?: string;
    is_default?: boolean;
    name?: string;
};
type EmailProviders = {
    items?: EmailProvider[];
    page?: Page;
};
type EmailTemplate = {
    __v?: number;
    _id?: string;
    attachments?: any[];
    created_at?: string;
    description?: string;
    from_name?: string;
    headers?: any[];
    html?: TemplateAndType;
    is_internal?: boolean;
    is_system?: boolean;
    name?: string;
    priority?: string;
    published?: boolean;
    slug?: string;
    static_bcc?: any[];
    static_cc?: any[];
    static_to?: any[];
    subject?: TemplateAndType;
    tags?: any[];
    text?: TemplateAndType;
    updated_at?: string;
};
type EmailTemplateDeleteFailureRes = {
    message?: string;
    success?: boolean;
};
type EmailTemplateDeleteSuccessRes = {
    message?: string;
    success?: boolean;
};
type EmailTemplateHeaders = {
    key?: string;
    value?: string;
};
type EmailTemplateKeys = {
    bcc?: string;
    cc?: string;
    to?: string;
};
type EmailTemplateReq = {
    attachments?: any[];
    description?: string;
    headers?: EmailTemplateHeaders[];
    html?: TemplateAndType;
    keys?: EmailTemplateKeys;
    name?: string;
    priority?: string;
    reply_to?: string;
    static_bcc?: string[];
    static_cc?: string[];
    static_to?: string[];
    subject?: TemplateAndType;
    text?: TemplateAndType;
};
type EmailTemplateRes = {
    __v?: number;
    _id?: string;
    attachments?: any[];
    created_at?: string;
    description?: string;
    headers?: EmailTemplateHeaders[];
    html?: TemplateAndType;
    is_internal?: boolean;
    is_system?: boolean;
    keys?: EmailTemplateKeys;
    name?: string;
    priority?: string;
    published?: boolean;
    reply_to?: string;
    slug?: string;
    static_bcc?: string[];
    static_cc?: string[];
    static_to?: string[];
    subject?: TemplateAndType;
    tags?: any[];
    text?: TemplateAndType;
    updated_at?: string;
};
type EmailTemplates = {
    items?: EmailTemplate[];
    page?: Page;
};
type EngineRequest = {
    meta?: MetaStructure;
    payload?: PayloadStructure;
};
type EngineResponse = {
    success?: boolean;
};
type EventSubscription = {
    __v?: number;
    _id?: string;
    application?: string;
    created_at?: string;
    event?: string;
    is_default?: boolean;
    slug?: string;
    template?: EventSubscriptionTemplate;
    updated_at?: string;
};
type EventSubscriptions = {
    items?: EventSubscription[];
    page?: Page;
};
type EventSubscriptionTemplate = {
    email?: EventSubscriptionTemplateEmail;
    sms?: EventSubscriptionTemplateSms;
};
type EventSubscriptionTemplateEmail = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplateSms = {
    subscribed?: boolean;
    template?: string;
};
type GetNRecordsCsvReq = {
    count?: number;
    header?: boolean;
    url?: string;
};
type GetNRecordsCsvRes = {
    items?: GetNRecordsCsvResItems[];
};
type GetNRecordsCsvResItems = {
    email?: string;
    firstname?: string;
    lastname?: string;
    orderid?: string;
    phone_number?: string;
};
type GetStats = {
    items?: Stats[];
};
type Job = {
    __v?: number;
    _id?: string;
    application?: string;
    campaign?: string;
    completed?: boolean;
    created_at?: string;
    is_active?: boolean;
    updated_at?: string;
};
type JobLog = {
    __v?: number;
    _id?: string;
    campaign?: string;
    created_at?: string;
    imported?: any;
    job?: string;
    processed?: any;
    updated_at?: string;
};
type JobLogs = {
    items?: JobLog[];
    page?: Page;
};
type Jobs = {
    items?: Job[];
    page?: Page;
};
type Log = {
    _id?: string;
    application?: string;
    created_at?: string;
    data?: any;
    email?: LogEmail;
    expire_at?: string;
    meta?: LogMeta;
    pushnotification?: LogPushnotification;
    service?: string;
    status?: string;
    step?: string;
};
type LogEmail = {
    template?: string;
};
type LogMeta = {
    identifier?: string;
    key?: string;
    offset?: string;
    partition?: string;
    topic?: string;
    type?: string;
};
type LogPushnotification = {
    pushtokens?: string[];
};
type Logs = {
    items?: Log[];
    page?: Page;
};
type MetaStructure = {
    action?: string;
    job_type?: string;
    timestamp?: string;
    trace?: string;
};
type Notification = {
    body?: string;
    click_action?: string;
    deeplink?: string;
    icon?: string;
    subtitle?: string;
    title?: string;
};
type PayloadEmailProviderStructure = {
    _id?: string;
};
type PayloadEmailStructure = {
    provider?: PayloadEmailProviderStructure;
    template?: PayloadEmailTemplateStructure;
};
type PayloadEmailTemplateStructure = {
    key?: string;
    value?: any;
};
type PayloadSmsProviderStructure = {
    _id?: string;
};
type PayloadSmsStructure = {
    provider?: PayloadSmsProviderStructure;
    template?: PayloadSmsTemplateStructure;
};
type PayloadSmsTemplateStructure = {
    key?: string;
    value?: any;
};
type PayloadStructure = {
    application?: string;
    data?: any[];
    email?: PayloadEmailStructure;
    sms?: PayloadSmsStructure;
};
type PushtokenReq = {
    action?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
};
type PushtokenRes = {
    _id?: string;
    application_id?: string;
    bundle_identifier?: string;
    created_at?: string;
    expired_at?: string;
    platform?: string;
    push_token?: string;
    type?: string;
    unique_device_id?: string;
    updated_at?: string;
    user_id?: string;
};
type RecipientHeaders = {
    email?: string;
};
type SendOtpCommsReq = {
    data?: SendOtpCommsReqData;
    email?: SendOtpCommsReqEmail;
    sms?: SendOtpCommsReqSms;
};
type SendOtpCommsReqData = {
    country_code?: string;
    mobile?: string;
    send_same_otp_to_channel?: boolean;
    to?: string;
};
type SendOtpCommsReqEmail = {
    expiry?: number;
    otp_length?: number;
    template?: SendOtpEmailCommsTemplate;
};
type SendOtpCommsReqSms = {
    expiry?: number;
    otp_length?: number;
    provider?: SendOtpSmsCommsProvider;
    template?: SendOtpSmsCommsTemplate;
};
type SendOtpCommsRes = {
    email?: SendOtpCommsResEmail;
    sms?: SendOtpCommsResSms;
};
type SendOtpCommsResEmail = {
    message?: string;
    request_id?: string;
    resend_timer?: number;
    success?: boolean;
    to?: string;
};
type SendOtpCommsResSms = {
    country_code?: string;
    message?: string;
    mobile?: string;
    request_id?: string;
    resend_timer?: number;
    success?: boolean;
};
type SendOtpEmailCommsTemplate = {
    key?: string;
    value?: any;
};
type SendOtpSmsCommsProvider = {
    _id?: string;
    slug?: string;
};
type SendOtpSmsCommsTemplate = {
    key?: string;
    value?: any;
};
type SmsProvider = {
    __v?: number;
    _id?: string;
    application?: string;
    authkey?: string;
    created_at?: string;
    description?: string;
    name?: string;
    provider?: string;
    rpt?: number;
    sender?: string;
    slug?: string;
    type?: string;
    updated_at?: string;
    username?: string;
};
type SmsProviderReq = {
    authkey?: string;
    description?: string;
    name?: string;
    provider?: string;
    sender?: string;
    type?: string;
    username?: string;
};
type SmsProviders = {
    items?: SmsProvider[];
    page?: Page;
};
type SmsTemplate = {
    __v?: number;
    _id?: string;
    created_at?: string;
    description?: string;
    is_internal?: boolean;
    is_system?: boolean;
    message?: SmsTemplateMessage;
    name?: string;
    priority?: string;
    published?: boolean;
    slug?: string;
    tags?: any[];
    template_variables?: any;
    updated_at?: string;
};
type SmsTemplateDeleteFailureRes = {
    message?: string;
    success?: boolean;
};
type SmsTemplateDeleteSuccessRes = {
    message?: string;
    success?: boolean;
};
type SmsTemplateMessage = {
    template?: string;
    template_type?: string;
};
type SmsTemplateReq = {
    attachments?: any[];
    description?: string;
    message?: SmsTemplateMessage;
    name?: string;
    priority?: string;
    template_variables?: any;
};
type SmsTemplateRes = {
    __v?: number;
    _id?: string;
    created_at?: string;
    description?: string;
    is_internal?: boolean;
    is_system?: boolean;
    message?: SmsTemplateMessage;
    name?: string;
    priority?: string;
    published?: boolean;
    slug?: string;
    tags?: any[];
    template_variables?: any;
    updated_at?: string;
};
type SmsTemplates = {
    items?: SmsTemplate[];
    page?: Page;
};
type Stats = {
    _id?: string;
    imported?: any;
    processed?: any;
};
type StatsImported = {
    count?: number;
};
type StatsProcessed = {
    email?: StatsProcessedEmail;
    sms?: StatsProcessedSms;
};
type StatsProcessedEmail = {
    failed?: number;
    success?: number;
    suppressed?: number;
};
type StatsProcessedSms = {
    failed?: number;
    success?: number;
    suppressed?: number;
};
type SystemEmailTemplate = {
    __v?: number;
    _id?: string;
    attachments?: any[];
    created_at?: string;
    description?: string;
    from_name?: string;
    headers?: any[];
    html?: TemplateAndType;
    is_internal?: boolean;
    is_system?: boolean;
    name?: string;
    priority?: string;
    published?: boolean;
    slug?: string;
    static_bcc?: any[];
    static_cc?: any[];
    static_to?: any[];
    subject?: TemplateAndType;
    tags?: any[];
    text?: TemplateAndType;
    updated_at?: string;
};
type SystemEmailTemplates = {
    items?: SystemEmailTemplate[];
    page?: Page;
};
type SystemNotification = {
    _id?: string;
    created_at?: string;
    group?: string;
    notification?: Notification;
    settings?: SystemNotificationUser;
    user?: SystemNotificationUser;
};
type SystemNotifications = {
    items?: SystemNotification[];
    last_read_anchor?: number;
    page?: Page;
};
type SystemNotificationSettings = {
    priority?: string;
    sound?: boolean;
    time_to_live?: string;
};
type SystemNotificationsPage = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
type SystemNotificationUser = {
    type?: string;
    value?: string;
};
type SystemSmsTemplate = {
    __v?: number;
    _id?: string;
    created_at?: string;
    description?: string;
    is_internal?: boolean;
    is_system?: boolean;
    message?: SmsTemplateMessage;
    name?: string;
    priority?: string;
    published?: boolean;
    slug?: string;
    tags?: any[];
    template_variables?: any;
    updated_at?: string;
};
type SystemSmsTemplates = {
    items?: SystemSmsTemplate[];
    page?: Page;
};
type TemplateAndType = {
    template?: string;
    template_type?: string;
};
type TriggerJobRequest = {
    job_id?: string;
};
type TriggerJobResponse = {
    status?: number;
};
type VerifyOtpCommsErrorRes = {
    message?: string;
    success?: boolean;
};
type VerifyOtpCommsReq = {
    otp?: string;
    request_id?: string;
};
type VerifyOtpCommsSuccessRes = {
    country_code?: string;
    message?: string;
    mobile?: string;
    success?: boolean;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type BankDetailsForOTP = {
    account_holder: string;
    account_no: string;
    bank_name: string;
    branch_name: string;
    ifsc_code: string;
};
type CODdata = {
    is_active: boolean;
    limit: number;
    remaining_limit: number;
    usages: number;
    user_id: string;
};
type DeletePayoutResponse = {
    success: boolean;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type ErrorCodeAndDescription = {
    code: string;
    description: string;
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type GetOauthUrlResponse = {
    success: boolean;
    url: string;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
};
type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
    success: boolean;
};
type IfscCodeResponse = {
    bank_name: string;
    branch_name: string;
    success?: boolean;
};
type IntentApp = {
    code?: string;
    display_name?: string;
    logos?: PaymentModeLogo;
    package_name?: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type MultiTenderPaymentMeta = {
    current_status?: string;
    extra_meta?: any;
    order_id?: string;
    payment_gateway?: string;
    payment_id?: string;
};
type MultiTenderPaymentMethod = {
    amount: number;
    meta?: MultiTenderPaymentMeta;
    mode: string;
    name?: string;
};
type NotFoundResourceError = {
    code: string;
    description: string;
    success: boolean;
};
type OrderBeneficiaryDetails = {
    account_holder: string;
    account_no: string;
    address: string;
    bank_name: string;
    beneficiary_id: string;
    branch_name?: string;
    comment?: string;
    created_on: string;
    delights_user_name?: string;
    display_name: string;
    email: string;
    id: number;
    ifsc_code: string;
    is_active: boolean;
    mobile?: string;
    modified_on: string;
    subtitle: string;
    title: string;
    transfer_mode: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
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
type PaymentGatewayConfig = {
    config_type: string;
    is_active?: boolean;
    key: string;
    merchant_salt: string;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
    is_active?: boolean;
};
type PaymentGatewayConfigResponse = {
    aggregators?: any[];
    app_id: string;
    created: boolean;
    display_fields: string[];
    excluded_fields: string[];
    success: boolean;
};
type PaymentGatewayToBeReviewed = {
    aggregator: string[];
    success: boolean;
};
type PaymentModeList = {
    aggregator_name: string;
    card_brand?: string;
    card_brand_image?: string;
    card_fingerprint?: string;
    card_id?: string;
    card_isin?: string;
    card_issuer?: string;
    card_name?: string;
    card_number?: string;
    card_reference?: string;
    card_token?: string;
    card_type?: string;
    cod_limit?: number;
    cod_limit_per_order?: number;
    code?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    display_name?: string;
    display_priority?: number;
    exp_month?: number;
    exp_year?: number;
    expired?: boolean;
    fynd_vpa?: string;
    intent_app?: IntentApp[];
    intent_app_error_dict_list?: IntentAppErrorList[];
    intent_app_error_list?: string[];
    intent_flow?: boolean;
    logo_url?: PaymentModeLogo;
    merchant_code?: string;
    name?: string;
    nickname?: string;
    remaining_limit?: number;
    retry_count?: number;
    timeout?: number;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutBankDetails = {
    account_holder?: string;
    account_no?: string;
    account_type: string;
    bank_name?: string;
    branch_name?: string;
    city?: string;
    country?: string;
    ifsc_code: string;
    pincode?: number;
    state?: string;
};
type PayoutRequest = {
    aggregator: string;
    bank_details: PayoutBankDetails;
    is_active: boolean;
    transfer_type: string;
    unique_external_id: string;
    users: any;
};
type PayoutResponse = {
    aggregator: string;
    bank_details: any;
    created: boolean;
    is_active: boolean;
    payment_status: string;
    payouts: any;
    success: boolean;
    transfer_type: string;
    unique_transfer_no: string;
    users: any;
};
type PayoutsResponse = {
    customers: any;
    is_active: boolean;
    is_default: boolean;
    more_attributes: any;
    payouts_aggregators: any[];
    transfer_type: string;
    unique_transfer_no: any;
};
type RefundAccountResponse = {
    data?: any;
    is_verified_flag?: boolean;
    message: string;
    success: boolean;
};
type RevokeOAuthToken = {
    message: string;
    success: boolean;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    aggregator_name?: string;
    anonymous_enable?: boolean;
    display_name: string;
    display_priority: number;
    is_pay_by_card_pl?: boolean;
    list?: PaymentModeList[];
    name: string;
    save_card?: boolean;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    data: any;
    success: boolean;
};
type SetCODForUserRequest = {
    is_active: boolean;
    merchant_user_id: string;
    mobileno: string;
};
type SetCODOptionResponse = {
    message: string;
    success: boolean;
};
type SubscriptionConfigResponse = {
    aggregator: string;
    config: any;
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    data: any[];
    success: boolean;
};
type UpdatePayoutRequest = {
    is_active: boolean;
    is_default: boolean;
    unique_external_id: string;
};
type UpdatePayoutResponse = {
    is_active: boolean;
    is_default: boolean;
    success: boolean;
};
type ActionInfo = {
    description: string;
    display_text: string;
    id: number;
    slug: string;
};
type AdvanceFilterInfo = {
    action_centre?: FiltersInfo[];
    applied_filters?: any;
    filters?: FiltersInfo[];
    page?: any;
    processed?: FiltersInfo[];
    returned?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
};
type Affiliate = {
    config?: AffiliateConfig;
    id: string;
    token: string;
};
type AffiliateAppConfig = {
    created_at: string;
    description?: string;
    id: string;
    meta?: AffiliateAppConfigMeta[];
    name: string;
    owner: string;
    secret: string;
    token: string;
    updated_at: string;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateBag = {
    _id: string;
    affiliate_meta: any;
    affiliate_store_id: string;
    amount_paid: number;
    avl_qty: number;
    company_id: number;
    delivery_charge: number;
    discount: number;
    fynd_store_id: string;
    hsn_code_id: string;
    identifier: any;
    item_id: number;
    item_size: string;
    modified_on: string;
    pdf_links?: MarketPlacePdf;
    price_effective: number;
    price_marked: number;
    quantity: number;
    seller_identifier: string;
    sku: string;
    store_id: number;
    transfer_price: number;
    unit_price: number;
};
type AffiliateBagDetails = {
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    employee_discount?: number;
    loyalty_discount?: number;
};
type AffiliateBagsDetails = {
    affiliate_bag_id?: string;
    coupon_code?: string;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type AffiliateDetails = {
    ad_id?: string;
    affiliate_bag_id: string;
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    pdf_links?: PDFLinks;
    shipment_meta: ShipmentMeta;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateMeta = {
    box_type?: string;
    channel_order_id?: string;
    channel_shipment_id?: string;
    coupon_code?: string;
    due_date?: string;
    employee_discount?: number;
    is_priority?: boolean;
    loyalty_discount?: number;
    marketplace_invoice_id?: string;
    order_item_id?: string;
    quantity?: number;
    replacement_details?: ReplacementDetails;
    size_level_total_qty?: number;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type AnnouncementResponse = {
    company_id?: number;
    created_at?: string;
    description?: string;
    from_datetime?: string;
    id: number;
    logo_url?: string;
    platform_id?: string;
    platform_name?: string;
    title?: string;
    to_datetime?: string;
};
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
    message?: string;
    success?: boolean;
};
type AppliedPromos = {
    amount?: number;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRules[];
    mrp_promotion?: boolean;
    promo_id?: string;
    promotion_name?: string;
    promotion_type?: string;
};
type Article = {
    _id: string;
    a_set?: any;
    child_details?: any;
    code?: string;
    currency?: any;
    dimensions?: Dimensions;
    esp_modified?: boolean;
    identifiers: any;
    is_set?: boolean;
    raw_meta?: string;
    return_config?: ReturnConfig;
    seller_identifier: string;
    size: string;
    uid: string;
    weight?: Weight;
};
type ArticleDetails = {
    status?: any;
};
type ArticleDetails1 = {
    _id: string;
    attributes: any;
    brand_id: number;
    category: any;
    dimension: any;
    quantity: number;
    weight: any;
};
type Attributes = {
    brand_name?: string;
    essential?: string;
    gender?: string[];
    marketer_address?: string;
    marketer_name?: string;
    name?: string;
    primary_color?: string;
    primary_color_hex?: string;
    primary_material?: string;
};
type B2BPODetails = {
    docket_number?: string;
    item_base_price?: number;
    partial_can_ret?: boolean;
    po_line_amount?: number;
    po_tax_amount?: number;
    total_gst_percentage?: number;
};
type BagConfigs = {
    allow_force_return: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
};
type BagDetailsPlatformResponse = {
    affiliate_bag_details?: AffiliateBagDetails;
    affiliate_details?: AffiliateDetails;
    applied_promos?: any[];
    article?: Article;
    article_details?: ArticleDetails;
    bag_status?: BagStatusHistory[];
    bag_status_history?: BagStatusHistory;
    bag_update_time?: number;
    brand?: Brand;
    current_operational_status?: BagStatusHistory;
    current_status?: BagStatusHistory;
    dates?: Dates;
    display_name?: string;
    entity_type?: string;
    financial_breakup?: FinancialBreakup[];
    gst_details?: BagGSTDetails;
    id?: number;
    identifier?: string;
    item?: Item;
    journey_type?: string;
    line_number?: number;
    meta?: BagMeta;
    no_of_bags_order?: number;
    operational_status?: string;
    order_integration_id?: string;
    ordering_store?: Store;
    original_bag_list?: number[];
    parent_promo_bags?: any;
    prices?: Prices;
    qc_required?: any;
    quantity?: number;
    reasons?: any[];
    restore_coupon?: boolean;
    restore_promos?: any;
    seller_identifier?: string;
    shipment_id?: string;
    status?: BagReturnableCancelableStatus1;
    tags?: string[];
    type?: string;
};
type BagGST = {
    brand_calculated_amount?: number;
    cgst_gst_fee?: string;
    cgst_tax_percentage?: number;
    gst_fee?: number;
    gst_tag?: string;
    gst_tax_percentage?: number;
    gstin_code?: string;
    hsn_code?: string;
    hsn_code_id?: string;
    igst_gst_fee?: string;
    igst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
    sgst_gst_fee?: string;
    sgst_tax_percentage?: number;
    tax_collected_at_source?: number;
    value_of_good?: number;
};
type BagGSTDetails = {
    brand_calculated_amount: number;
    cgst_gst_fee: string;
    cgst_tax_percentage: number;
    gst_fee: number;
    gst_tag: string;
    gst_tax_percentage: number;
    gstin_code?: string;
    hsn_code: string;
    hsn_code_id: string;
    igst_gst_fee: string;
    igst_tax_percentage: number;
    is_default_hsn_code?: boolean;
    sgst_gst_fee: string;
    sgst_tax_percentage: number;
    tax_collected_at_source: number;
    value_of_good: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
    custom_json?: any;
    custom_message?: string;
    docket_number?: string;
    extra_meta?: any;
    gift_card?: GiftCard;
    group_id?: string;
    partial_can_ret?: boolean;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
};
type BagReturnableCancelableStatus1 = {
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
};
type Bags = {
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    bag_id?: number;
    is_locked?: boolean;
};
type BagsPage = {
    current: number;
    has_next: boolean;
    item_total: number;
    page_type: string;
    size: number;
};
type BagStateMapper = {
    app_display_name?: string;
    app_facing?: boolean;
    app_state_name?: string;
    display_name: string;
    id: number;
    is_active?: boolean;
    journey_type: string;
    name: string;
    notify_customer?: boolean;
    state_type: string;
};
type BagStateTransitionMap = {
    affiliate?: any;
    fynd?: any;
};
type BagStatusHistory = {
    app_display_name?: string;
    bag_id?: number;
    bag_state_mapper?: BagStateMapper;
    bsh_id?: number;
    created_at?: string;
    delivery_awb_number?: string;
    delivery_partner_id?: number;
    display_name?: string;
    forward?: boolean;
    kafka_sync?: boolean;
    reasons?: any[];
    shipment_id?: string;
    state_id?: number;
    state_type?: string;
    status: string;
    store_id?: number;
    updated_at?: string;
};
type BagUnit = {
    affiliate_bag_details?: AffiliateBagDetails;
    article?: Article;
    bag_expiry_date?: string;
    bag_id: number;
    bag_status?: BagStatusHistory[];
    bag_type?: string;
    brand?: ShipmentListingBrand;
    can_cancel?: boolean;
    can_return?: boolean;
    current_operational_status: BagStatusHistory;
    current_status: BagStatusHistory;
    dates?: Dates;
    display_name?: string;
    entity_type?: string;
    financial_breakup: FinancialBreakup[];
    gst?: GSTDetailsData;
    item?: PlatformItem;
    line_number?: number;
    meta?: any;
    prices?: Prices;
    product_quantity: number;
    reasons?: any[];
    size?: string;
    status: BagReturnableCancelableStatus;
};
type BaseResponse = {
    message?: string;
    success?: boolean;
};
type BillingInfo = {
    address1: string;
    address2?: string;
    alternate_email?: string;
    alternate_mobile_number?: string;
    city: string;
    country: string;
    country_code?: string;
    customer_code?: string;
    external_customer_code?: string;
    first_name: string;
    floor_no?: string;
    gender?: string;
    house_no?: string;
    last_name?: string;
    middle_name?: string;
    pincode: string;
    primary_email: string;
    primary_mobile_number: string;
    state: string;
    state_code?: string;
    title?: string;
};
type BillingStaffDetails = {
    employee_code?: string;
    first_name?: string;
    last_name?: string;
    staff_id?: number;
    user?: string;
};
type Brand = {
    brand_id: number;
    brand_name: string;
    company: string;
    created_on?: number;
    credit_note_allowed?: boolean;
    credit_note_expiry_days?: number;
    invoice_prefix?: string;
    is_virtual_invoice?: boolean;
    logo?: string;
    modified_on?: number;
    pickup_location?: string;
    script_last_ran?: string;
    start_date?: string;
};
type BulkActionTemplate = {
    text?: string;
    value?: string;
};
type BulkActionTemplateResponse = {
    template_x_slug?: BulkActionTemplate[];
};
type BuyerDetails = {
    address: string;
    ajio_site_id?: string;
    city: string;
    gstin: string;
    name: string;
    pincode: number;
    state: string;
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type Charge = {
    amount: any;
    code?: string;
    name: string;
    tax?: Tax;
    type: string;
};
type CheckResponse = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    bags?: Bags[];
    is_bag_locked?: boolean;
    is_shipment_locked?: boolean;
    lock_status?: string;
    original_filter?: OriginalFilter;
    shipment_id?: string;
    status?: string;
};
type Click2CallResponse = {
    call_id: string;
    success: boolean;
};
type CompanyDetails = {
    address?: any;
    company_cin?: string;
    company_contact?: ContactDetails;
    company_gst?: string;
    company_id?: number;
    company_name?: string;
};
type ContactDetails = {
    emails?: string[];
    phone?: PhoneDetails[];
};
type CreateChannelConfig = {
    dp_configuration?: DpConfiguration;
    location_reassignment?: boolean;
    lock_states?: string[];
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
    shipment_assignment?: string;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_inserted?: boolean;
    is_upserted?: boolean;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelPaymentInfo = {
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
    source?: string;
};
type CreateOrderAPI = {
    billing_info: BillingInfo;
    charges?: Charge[];
    config?: any;
    currency_info?: any;
    external_creation_date?: string;
    external_order_id?: string;
    meta?: any;
    payment_info: PaymentInfo;
    shipments: Shipment[];
    shipping_info: ShippingInfo;
    tax_info?: TaxInfo;
};
type CreateOrderErrorReponse = {
    code?: string;
    exception?: string;
    info?: any;
    message: string;
    meta?: string;
    request_id?: string;
    stack_trace?: string;
    status: number;
};
type CreateOrderPayload = {
    affiliate_id: string;
    order_config: OrderConfig;
    order_info: OrderInfo;
};
type CreateOrderResponse = {
    fynd_order_id: string;
};
type CurrentStatus = {
    bag_id?: number;
    bag_state_mapper?: BagStateMapper;
    created_at?: string;
    delivery_awb_number?: string;
    delivery_partner_id?: number;
    id: number;
    kafka_sync?: boolean;
    shipment_id?: string;
    state_id?: number;
    state_type?: string;
    status?: string;
    store_id?: number;
    updated_at?: number;
};
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    products?: ProductsDataUpdates[];
};
type Dates = {
    delivery_date?: string;
    order_created?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Dimension = {
    height?: string;
    length?: number;
    packaging_type?: string;
    weight?: string;
    width?: number;
};
type Dimensions = {
    height?: number;
    is_default?: boolean;
    length?: number;
    unit?: string;
    width?: number;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type DispatchManifest = {
    manifest_id: string;
};
type Document = {
    ds_type: string;
    legal_name: string;
    url?: string;
    value: string;
    verified: boolean;
};
type DpConfiguration = {
    shipping_by?: string;
};
type DPDetailsData = {
    awb_no?: string;
    country?: string;
    eway_bill_id?: string;
    gst_tag?: string;
    id?: number;
    name?: string;
    pincode?: string;
    track_url?: string;
};
type EinvoiceInfo = {
    credit_note?: any;
    invoice?: any;
};
type EInvoicePortalDetails = {
    password?: string;
    user?: string;
    username?: string;
};
type Entities = {
    affiliate_bag_id?: string;
    affiliate_id?: string;
    affiliate_order_id?: string;
    affiliate_shipment_id?: string;
    id?: string;
    reason_text: string;
};
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
type Error = {
    message?: string;
    success?: boolean;
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type ErrorResponse1 = {
    error_trace?: string;
    message?: string;
    status?: number;
    success?: boolean;
};
type FileResponse = {
    cdn?: URL;
    file_name?: string;
};
type FilterInfoOption = {
    min_search_size?: number;
    name?: string;
    placeholder_text?: string;
    show_ui?: boolean;
    text?: string;
    value?: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    placeholder_text?: string;
    required?: boolean;
    text: string;
    type: string;
    value: string;
};
type FiltersResponse = {
    advance_filter?: AdvanceFilterInfo;
    global_filter?: FiltersInfo[];
};
type FinancialBreakup = {
    added_to_fynd_cash: boolean;
    amount_paid: number;
    amount_paid_roundoff?: number;
    brand_calculated_amount: number;
    cashback: number;
    cashback_applied: number;
    cod_charges: number;
    coupon_effective_discount: number;
    coupon_value: number;
    delivery_charge: number;
    discount: number;
    fynd_credits: number;
    gst_fee: number;
    gst_tag: string;
    gst_tax_percentage: number;
    hsn_code: string;
    identifiers: Identifier;
    item_name: string;
    price_effective: number;
    price_marked: number;
    promotion_effective_discount: number;
    refund_credit: number;
    size: string;
    tax_collected_at_source?: number;
    total_units: number;
    transfer_price: number;
    value_of_good: number;
};
type Formatted = {
    max?: string;
    min?: string;
};
type FulfillingStore = {
    address: string;
    city: string;
    code: string;
    contact_person: string;
    country: string;
    fulfillment_channel: string;
    id: number;
    meta: any;
    phone: string;
    pincode: string;
    state: string;
    store_name: string;
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type GetActionsResponse = {
    permissions?: ActionInfo[];
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: BagsPage;
};
type GiftCard = {
    display_text?: string;
    gift_message?: string;
    gift_price?: number;
    is_gift_applied?: boolean;
};
type GSTDetailsData = {
    brand_calculated_amount: number;
    cgst_gst_fee?: string;
    cgst_tax_percentage?: number;
    gst_fee: number;
    gst_tag?: string;
    gst_tax_percentage?: number;
    gstin_code: string;
    hsn_code?: string;
    hsn_code_id?: string;
    igst_gst_fee?: string;
    igst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
    sgst_gst_fee?: string;
    sgst_tax_percentage?: number;
    tax_collected_at_source: number;
    value_of_good: number;
};
type HistoryDict = {
    assigned_agent?: string;
    bag_id?: number;
    createdat: string;
    display_message?: string;
    l1_detail?: string;
    l2_detail?: string;
    l3_detail?: string;
    message: string;
    meta?: HistoryMeta;
    ticket_id?: string;
    ticket_url?: string;
    type: string;
    user: string;
};
type HistoryMeta = {
    activity_comment?: string;
    activity_type?: string;
    billsec?: string;
    call_id?: string;
    caller?: string;
    callerid?: string;
    channel_type?: string;
    duration?: string;
    endtime?: string;
    message?: string;
    reason?: HistoryReason;
    receiver?: string;
    recipient?: string;
    recordpath?: string;
    short_link?: string;
    slug?: string;
    starttime?: string;
    status?: string;
    status1?: string;
    status2?: string;
    store_code?: string;
    store_id?: number;
    store_name?: string;
};
type HistoryReason = {
    category?: string;
    code?: number;
    dislay_name?: string;
    quantity?: number;
    state?: string;
    text?: string;
};
type Identifier = {
    alu?: string;
    ean?: string;
    isbn?: string;
    sku_code?: string;
    upc?: string;
};
type InvalidateShipmentCacheNestedResponse = {
    error?: string;
    message?: string;
    shipment_id?: string;
    status?: number;
};
type InvalidateShipmentCachePayload = {
    affiliate_bag_ids?: string[];
    bag_ids?: string[];
    shipment_ids?: string[];
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type InvoiceInfo = {
    credit_note_id?: string;
    external_invoice_id?: string;
    invoice_url?: string;
    label_url?: string;
    store_invoice_id?: string;
    updated_date?: string;
};
type Item = {
    attributes: Attributes;
    branch_url?: string;
    brand: string;
    brand_id: number;
    can_cancel?: boolean;
    can_return?: boolean;
    code?: string;
    color?: string;
    department_id?: number;
    gender?: string;
    image: string[];
    item_id: number;
    l1_category?: string[];
    l1_category_id?: number;
    l2_category?: string[];
    l2_category_id?: number;
    l3_category?: number;
    l3_category_name?: string;
    last_updated_at?: string;
    meta?: any;
    name: string;
    size: string;
    slug_key: string;
    webstore_product_url?: string;
};
type ItemCriterias = {
    item_brand?: number[];
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type LineItem = {
    charges?: Charge[];
    custom_messasge?: string;
    external_line_id?: string;
    meta?: any;
    quantity?: number;
    seller_identifier: string;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_id: number;
    fulfillment_type: string;
};
type LockData = {
    lock_message?: string;
    locked?: boolean;
    mto?: boolean;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type OrderBagArticle = {
    identifiers?: any;
    return_config?: ReturnConfig1;
    size?: string;
    uid?: string;
};
type OrderBags = {
    affiliate_bag_details?: AffiliateBagsDetails;
    applied_promos?: AppliedPromos[];
    article?: OrderBagArticle;
    bag_configs?: BagConfigs;
    bag_id: number;
    brand?: OrderBrandName;
    can_cancel?: boolean;
    can_return?: boolean;
    current_status?: CurrentStatus;
    delivery_address?: PlatformDeliveryAddress;
    display_name?: string;
    entity_type?: string;
    financial_breakup?: FinancialBreakup;
    group_id?: string;
    gst_details?: BagGST;
    identifier?: string;
    item?: PlatformItem;
    line_number?: number;
    meta?: BagMeta;
    parent_promo_bags?: any;
    prices?: Prices;
    quantity?: number;
    seller_identifier?: string;
};
type OrderBrandName = {
    brand_name?: string;
    company: number;
    created_on?: string;
    id: number;
    logo?: string;
    modified_on?: string;
};
type OrderConfig = {
    affiliate: Affiliate;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
    bag_end_state?: string;
    create_user?: boolean;
    store_lookup?: string;
};
type OrderData = {
    fynd_order_id: string;
    meta?: OrderMeta;
    order_date: string;
    payment_methods?: any;
    prices?: Prices;
    tax_details?: TaxDetails;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type OrderDetailsData = {
    affiliate_id?: string;
    cod_charges?: string;
    fynd_order_id: string;
    order_date?: string;
    order_value?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    source?: string;
    tax_details?: any;
};
type OrderDetailsResponse = {
    order?: OrderData;
    shipments?: PlatformShipment[];
    success: boolean;
};
type OrderInfo = {
    affiliate_order_id?: string;
    bags: AffiliateBag[];
    billing_address: OrderUser;
    cod_charges: number;
    coupon?: string;
    delivery_charges: number;
    discount: number;
    items: any;
    order_priority?: OrderPriority;
    order_value: number;
    payment?: any;
    payment_mode: string;
    shipment?: ShipmentData;
    shipping_address: OrderUser;
    user: UserData;
};
type OrderingStoreDetails = {
    address?: string;
    city?: string;
    code?: string;
    contact_person?: string;
    country?: string;
    id?: number;
    meta?: any;
    phone?: string;
    pincode?: string;
    state?: string;
    store_name?: string;
};
type OrderListingResponse = {
    items?: PlatformOrderItems[];
    lane?: string;
    message?: string;
    page?: Page;
    success?: boolean;
    total_count?: number;
};
type OrderMeta = {
    billing_staff_details?: BillingStaffDetails;
    cart_id?: number;
    comment?: string;
    company_logo?: string;
    currency_symbol?: string;
    customer_note?: string;
    employee_id?: number;
    extra_meta?: any;
    files?: any[];
    mongo_cart_id?: number;
    order_child_entities?: string[];
    order_platform?: string;
    order_tags?: any[];
    order_type?: string;
    ordering_store?: number;
    payment_type?: string;
    platform_user_details?: PlatformUserDetails;
    staff?: any;
    transaction_data?: TransactionData;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
};
type OrderStatus = {
    end_date: string;
    mobile: number;
    order_details?: FyndOrderIdList[];
    start_date: string;
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
type OrderUser = {
    address1?: string;
    address2?: string;
    city: string;
    country: string;
    email: string;
    first_name: string;
    last_name: string;
    mobile: number;
    phone: number;
    pincode: string;
    state: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type PaymentMethod = {
    amount: number;
    collect_by: string;
    meta?: any;
    mode: string;
    name: string;
    refund_by: string;
    transaction_data?: any;
};
type PaymentMethods = {
    collect_by?: string;
    mode?: string;
    refund_by?: string;
};
type PDFLinks = {
    b2b?: string;
    credit_note_url?: string;
    delivery_challan_a4?: string;
    invoice?: string;
    invoice_a4?: string;
    invoice_a6?: string;
    invoice_export?: string;
    invoice_pos?: string;
    invoice_type: string;
    label?: string;
    label_a4?: string;
    label_a6?: string;
    label_export?: string;
    label_pos?: string;
    label_type: string;
    po_invoice?: string;
};
type PhoneDetails = {
    country_code?: number;
    number?: string;
};
type PlatformArticleAttributes = {
    currency?: string;
};
type PlatformBreakupValues = {
    display?: string;
    name?: string;
    value?: string;
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformDeliveryAddress = {
    address1?: string;
    address2?: string;
    address_category?: string;
    address_type?: string;
    area?: string;
    city?: string;
    contact_person?: string;
    country?: string;
    created_at?: string;
    email?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    phone?: string;
    pincode?: string;
    state?: string;
    updated_at?: string;
    version?: string;
};
type PlatformItem = {
    attributes?: PlatformArticleAttributes;
    branch_url?: string;
    brand?: string;
    brand_id?: number;
    can_cancel?: boolean;
    can_return?: boolean;
    code?: string;
    color?: string;
    department_id?: number;
    id?: number;
    image?: string[];
    images?: string[];
    l1_category?: string[];
    l2_category?: string[];
    l3_category?: number;
    l3_category_name?: string;
    last_updated_at?: string;
    meta?: any;
    name?: string;
    size?: string;
    slug_key?: string;
};
type PlatformOrderItems = {
    breakup_values?: PlatformBreakupValues[];
    channel?: PlatformChannel;
    meta?: any;
    order_created_time?: string;
    order_id?: string;
    order_value?: number;
    payment_mode?: string;
    shipments?: PlatformShipment[];
    total_order_value?: number;
    user_info?: UserDataInfo;
};
type PlatformOrderUpdate = {
    order_id: string;
};
type PlatformShipment = {
    affiliate_details?: AffiliateDetails;
    bag_status_history?: BagStatusHistory[];
    bags?: OrderBags[];
    billing_details?: UserDetailsData;
    can_update_dimension?: boolean;
    company_details?: CompanyDetails;
    coupon?: any;
    custom_message?: string;
    custom_meta?: any[];
    delivery_details?: UserDetailsData;
    delivery_slot?: any;
    dp_assignment?: boolean;
    dp_details?: DPDetailsData;
    enable_dp_tracking?: boolean;
    estimated_sla_time?: string;
    forward_shipment_id?: string;
    fulfilling_store?: FulfillingStore;
    fulfilment_priority?: number;
    gst_details?: GSTDetailsData;
    invoice?: InvoiceInfo;
    invoice_id?: string;
    is_dp_assign_enabled?: boolean;
    journey_type?: string;
    lock_status?: boolean;
    meta?: ShipmentMeta;
    operational_status?: string;
    order?: OrderDetailsData;
    ordering_store?: OrderingStoreDetails;
    packaging_type?: string;
    payment_methods?: any;
    payment_mode?: string;
    payments?: ShipmentPayments;
    picked_date?: string;
    platform_logo?: string;
    prices?: Prices;
    priority_text?: string;
    shipment_created_at?: string;
    shipment_details?: ShipmentDetails;
    shipment_id: string;
    shipment_images?: string[];
    shipment_quantity?: number;
    shipment_status?: string;
    status?: ShipmentStatusData;
    total_bags?: number;
    total_items?: number;
    tracking_list?: TrackingList[];
    user?: UserDataInfo;
    user_agent?: string;
    vertical?: string;
};
type PlatformShipmentReasonsResponse = {
    reasons?: Reason[];
    success?: boolean;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type PlatformTrack = {
    account_name?: string;
    awb?: string;
    last_location_recieved_at?: string;
    meta?: any;
    raw_status?: string;
    reason?: string;
    shipment_type?: string;
    status?: string;
    updated_at?: string;
    updated_time?: string;
};
type PlatformUserDetails = {
    platform_user_employee_code?: string;
    platform_user_first_name?: string;
    platform_user_id?: string;
    platform_user_last_name?: string;
};
type PostActivityHistory = {
    data: PostHistoryData;
    filters: PostHistoryFilters[];
};
type PostHistoryData = {
    message: string;
    user_name: string;
};
type PostHistoryDict = {
    activity_history: PostActivityHistory;
};
type PostHistoryFilters = {
    identifier?: string;
    line_number?: string;
    shipment_id: string;
};
type PostShipmentHistory = {
    activity_history?: PostHistoryDict[];
};
type Prices = {
    amount_paid?: number;
    amount_paid_roundoff?: number;
    brand_calculated_amount?: number;
    cashback?: number;
    cashback_applied?: number;
    cod_charges?: number;
    coupon_effective_discount?: number;
    coupon_value?: number;
    delivery_charge?: number;
    discount?: number;
    fynd_credits?: number;
    gift_price?: number;
    pm_price_split?: number;
    price_effective?: number;
    price_marked?: number;
    promotion_effective_discount?: number;
    refund_amount?: number;
    refund_credit?: number;
    tax_collected_at_source?: number;
    transfer_price?: number;
    value_of_good?: number;
};
type ProcessingDates = {
    confirm_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_after_date?: string;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    pack_by_date?: string;
};
type Products = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
};
type ProductsDataUpdates = {
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
};
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
};
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasonsFilters = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    display_name?: string;
    id?: number;
    qc_type?: string[];
    question_set?: QuestionSet[];
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type ReplacementDetails = {
    original_affiliate_order_id?: string;
    replacement_type?: string;
};
type ResponseDetail = {
    message?: string[];
    success?: boolean;
};
type ReturnConfig = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type ReturnConfig1 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type SendSmsPayload = {
    bag_id: number;
    data?: SmsDataPayload;
    slug: string;
};
type Shipment = {
    external_shipment_id?: string;
    line_items: LineItem[];
    location_id: number;
    meta?: any;
    priority?: number;
    processing_dates?: ProcessingDates;
};
type ShipmentConfig = {
    action: string;
    identifier: string;
    journey: string;
    location_details?: LocationDetails;
    payment_mode: string;
    shipment: ShipmentDetails1[];
    source: string;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type ShipmentDetail = {
    bag_list?: number[];
    id: number;
    meta: Meta;
    remarks?: string;
    shipment_id?: string;
    status?: string;
};
type ShipmentDetails = {
    action_to_status?: any;
    lock_message?: string;
    lock_status?: boolean;
};
type ShipmentDetails1 = {
    affiliate_shipment_id: string;
    articles: ArticleDetails1[];
    box_type?: string;
    dp_id?: number;
    fulfillment_id: number;
    meta?: any;
    shipments: number;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
    success?: boolean;
};
type ShipmentInfoResponse = {
    message?: string;
    shipments?: PlatformShipment[];
    success: boolean;
};
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    lane?: string;
    message?: string;
    page?: Page;
    success?: boolean;
    total_count?: number;
};
type ShipmentItem = {
    bags?: BagUnit[];
    can_process?: boolean;
    channel?: ShipmentListingChannel;
    customer_note?: string;
    delivery_address?: PlatformDeliveryAddress;
    display_name?: string;
    estimated_sla_time?: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    invoice_id?: string;
    lock_status?: boolean;
    meta?: ShipmentItemMeta;
    order_date?: string;
    order_id: string;
    ordering_channnel?: string;
    payment_methods?: any;
    payment_mode?: string;
    previous_shipment_id?: string;
    prices?: Prices;
    shipment_created_at: string;
    shipment_id?: string;
    shipment_status?: ShipmentStatus;
    status_created_at?: string;
    total_bags: number;
    user?: UserDataInfo;
};
type ShipmentItemFulFillingStore = {
    address?: string;
    brand_store_tags?: string;
    city?: string;
    code: string;
    id: number;
    location_type?: string;
    meta?: any;
    name?: string;
    phone?: string;
    pincode?: string;
    state?: string;
    store_email?: string;
};
type ShipmentItemMeta = {
    activity_comment?: string;
    assign_dp_from_sb?: boolean;
    auto_trigger_dp_assignment_acf: boolean;
    bag_weight?: any;
    debug_info?: any;
    dp_options?: any;
    dp_sort_key?: string;
    ewaybill_info?: any;
    existing_dp_list?: string[];
    external?: any;
    formatted?: Formatted;
    fulfilment_priority_text?: string;
    is_international?: boolean;
    lock_data?: LockData;
    order_type?: string;
    packaging_name?: string;
    parent_dp_id?: string;
    pdf_media?: any[];
    same_store_available?: boolean;
    shipment_chargeable_weight?: number;
    shipment_tags?: ShipmentTags[];
    shipment_volumetric_weight?: number;
    shipment_weight?: number;
    shipping_zone?: string;
    sla?: number;
    store_invoice_updated_date?: string;
    tags?: any[];
    timestamp?: ShipmentTimeStamp;
    weight?: number;
};
type ShipmentListingBrand = {
    created_on?: string;
    logo?: string;
    logo_base64?: string;
    name?: string;
};
type ShipmentListingChannel = {
    channel_shipment_id?: string;
    is_affiliate?: boolean;
    logo?: string;
    name?: string;
};
type ShipmentMeta = {
    assign_dp_from_sb?: boolean;
    auto_trigger_dp_assignment_acf?: boolean;
    awb_number?: string;
    b2b_buyer_details?: BuyerDetails;
    b2c_buyer_details?: any;
    bag_weight?: any;
    box_type?: string;
    debug_info?: DebugInfo;
    dimension?: Dimensions;
    dp_id?: string;
    dp_name?: string;
    dp_options?: any;
    dp_sort_key?: string;
    due_date?: string;
    einvoice_info?: EinvoiceInfo;
    ewaybill_info?: any;
    external?: any;
    formatted?: Formatted;
    forward_affiliate_order_id?: string;
    forward_affiliate_shipment_id?: string;
    fulfilment_priority_text?: string;
    lock_data?: LockData;
    marketplace_store_id?: string;
    order_type?: string;
    packaging_name?: string;
    parent_dp_id?: string;
    po_number?: string;
    return_affiliate_order_id?: string;
    return_affiliate_shipment_id?: string;
    return_awb_number?: string;
    return_details?: any;
    return_store_node?: number;
    same_store_available: boolean;
    shipment_tags?: ShipmentTags[];
    shipment_volumetric_weight?: number;
    shipment_weight?: number;
    store_invoice_updated_date?: string;
    timestamp?: ShipmentTimeStamp;
    weight: number;
};
type ShipmentPayments = {
    logo?: string;
    mode?: string;
    source?: string;
};
type ShipmentReasonsResponse = {
    message: string;
    reasons: ShipmentResponseReasons[];
    success: boolean;
};
type ShipmentResponseReasons = {
    reason?: string;
    reason_id?: number;
};
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    identifier: string;
    products?: Products[];
    reasons?: ReasonsData;
};
type ShipmentsResponse = {
    code?: string;
    exception?: string;
    final_state?: any;
    identifier?: string;
    message?: string;
    meta?: any;
    stack_trace?: string;
    status?: number;
};
type ShipmentStatus = {
    bag_list?: string[];
    created_at?: string;
    current_shipment_status?: string;
    meta?: any;
    shipment_id?: string;
    shipment_status_id?: number;
    status: string;
    status_created_at?: string;
    title: string;
};
type ShipmentStatusData = {
    bag_list?: string[];
    created_at?: string;
    display_name?: string;
    id?: number;
    meta?: any;
    shipment_id?: string;
    status?: string;
};
type ShipmentTags = {
    display_text?: string;
    entity_type?: string;
    slug?: string;
};
type ShipmentTimeStamp = {
    max?: number;
    min?: number;
};
type ShippingInfo = {
    address1: string;
    address2?: string;
    address_type?: string;
    alternate_email?: string;
    alternate_mobile_number?: string;
    city: string;
    country: string;
    country_code?: string;
    customer_code?: string;
    external_customer_code?: string;
    first_name: string;
    floor_no?: string;
    gender?: string;
    geo_location?: any;
    house_no?: string;
    landmark?: string;
    last_name?: string;
    middle_name?: string;
    pincode: string;
    primary_email: string;
    primary_mobile_number: string;
    shipping_type?: string;
    slot?: any[];
    state: string;
    state_code?: string;
    title?: string;
};
type SmsDataPayload = {
    amount_paid?: number;
    brand_name?: string;
    country_code: string;
    customer_name?: string;
    message: string;
    order_id: string;
    payment_mode?: string;
    phone_number: number;
    shipment_id: number;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    split_shipment?: boolean;
    status?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type Store = {
    address1: string;
    address2?: string;
    alohomora_user_id?: number;
    brand_id?: any;
    brand_store_tags?: string[];
    city: string;
    code?: string;
    company_id: number;
    contact_person: string;
    country: string;
    created_at: string;
    fulfillment_channel: string;
    is_active?: boolean;
    is_archived?: boolean;
    is_enabled_for_recon?: boolean;
    latitude: number;
    location_type: string;
    login_username: string;
    longitude: number;
    mall_area?: string;
    mall_name?: string;
    meta: StoreMeta;
    name: string;
    order_integration_id?: string;
    packaging_material_count?: number;
    parent_store_id?: number;
    phone: number;
    pincode: string;
    s_id: string;
    state: string;
    store_active_from?: string;
    store_address_json?: StoreAddress;
    store_email: string;
    updated_at?: string;
    vat_no?: string;
};
type StoreAddress = {
    address1: string;
    address2?: string;
    address_category: string;
    address_type: string;
    area?: string;
    city: string;
    contact_person: string;
    country: string;
    country_code: string;
    created_at: string;
    email?: string;
    landmark?: string;
    latitude: number;
    longitude: number;
    phone: string;
    pincode: number;
    state: string;
    updated_at: string;
    version?: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEinvoice = {
    enabled: boolean;
    password?: string;
    user?: string;
    username?: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
type StoreMeta = {
    additional_contact_details?: any;
    display_name: string;
    documents?: StoreDocuments;
    einvoice_portal_details?: EInvoicePortalDetails;
    ewaybill_portal_details?: any;
    gst_credentials: StoreGstCredentials;
    gst_number?: string;
    notification_emails?: string[];
    product_return_config?: any;
    stage: string;
    timing?: any[];
};
type StoreReassign = {
    affiliate_bag_id?: string;
    affiliate_id?: string;
    affiliate_order_id?: string;
    bag_id?: number;
    fynd_order_id?: string;
    item_id?: string;
    mongo_article_id?: string;
    reason_ids?: number[];
    set_id?: string;
    store_id: number;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type SubLane = {
    actions?: any[];
    index?: number;
    text?: string;
    total_items?: number;
    value?: string;
};
type SuccessResponse = {
    message?: string;
    success?: boolean;
};
type SuperLane = {
    options?: SubLane[];
    text: string;
    total_items?: number;
    value: string;
};
type Tax = {
    amount: any;
    breakup?: any[];
    name: string;
    rate: number;
};
type TaxDetails = {
    gstin?: string;
    pan_no?: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type TrackingList = {
    is_current?: boolean;
    is_passed?: boolean;
    status: string;
    text: string;
    time?: string;
};
type TransactionData = {
    amount_paid?: number;
    currency?: string;
    entity?: string;
    payment_id?: string;
    status?: string;
    terminal_id?: string;
    transaction_id?: string;
    unique_reference_number?: string;
};
type UpdatePackagingDimensionsPayload = {
    current_status: string;
    dimension: Dimension[];
    shipment_id: string;
};
type UpdatePackagingDimensionsResponse = {
    message?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    action_type: string;
    entities: Entities[];
    entity_type: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    message?: string;
    success?: boolean;
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
    unlock_before_transition?: boolean;
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type UploadConsent = {
    consent_url: string;
    manifest_id: string;
};
type URL = {
    url?: string;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type UserDataInfo = {
    avis_user_id?: string;
    email?: string;
    first_name?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    last_name?: string;
    mobile?: string;
    name?: string;
    uid?: number;
};
type UserDetailsData = {
    address: string;
    address1?: string;
    address_type?: string;
    area?: string;
    city: string;
    country: string;
    email?: string;
    landmark?: string;
    name: string;
    phone: string;
    pincode: string;
    state: string;
};
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type AllSizes = {
    identifiers?: ValidateIdentifier[];
    item_dimensions_unit_of_measure: string;
    item_height: number;
    item_length: number;
    item_weight: number;
    item_weight_unit_of_measure: any;
    item_width: number;
    size: any;
};
type AppCatalogConfiguration = {
    app_id: string;
    config_id?: string;
    config_type: string;
    created_by?: any;
    created_on?: string;
    id?: string;
    listing?: ConfigurationListing;
    modified_by?: any;
    modified_on?: string;
    product?: ConfigurationProduct;
    type?: string;
};
type AppConfiguration = {
    app_id: string;
    config_id?: string;
    config_type: string;
    created_by?: any;
    created_on?: string;
    listing?: ConfigurationListing;
    modified_by?: any;
    modified_on?: string;
    product?: ConfigurationProduct;
    type?: string;
};
type AppConfigurationDetail = {
    app_id: string;
    attributes?: AttributeDetailsGroup[];
    is_active: boolean;
    is_default: boolean;
    logo?: string;
    name?: string;
    priority: number;
    slug: string;
    template_slugs?: string[];
};
type AppConfigurationsSort = {
    app_id: string;
    default_key: string;
    is_active: boolean;
    is_default: boolean;
    key: string;
    logo?: string;
    name?: string;
    priority: number;
};
type ApplicationBrandJson = {
    _custom_json: any;
};
type ApplicationCategoryJson = {
    _custom_json: any;
};
type ApplicationDepartment = {
    _custom_json?: any;
    app_id: string;
    is_active?: boolean;
    logo?: string;
    name?: string;
    uid: number;
};
type ApplicationDepartmentJson = {
    _custom_json: any;
};
type ApplicationDepartmentListingResponse = {
    items?: ApplicationDepartment[];
    page: Page;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    _custom_meta?: MetaFields[];
    alt_text?: any;
    is_cod?: boolean;
    is_gift?: boolean;
    moq?: ApplicationItemMOQ;
    seo?: ApplicationItemSEO;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationProductListingResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    operators?: any;
    page: Page;
    sort_on?: ProductSortOn[];
};
type ApplicationStoreJson = {
    _custom_json: any;
};
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type ArticleQuery = {
    ignored_stores?: number[];
    item_id: number;
    size: string;
};
type ArticleStoreResponse = {
    name?: string;
    store_code?: string;
    store_type?: string;
    uid?: number;
};
type AssignStore = {
    app_id: string;
    articles: AssignStoreArticle[];
    channel_identifier?: string;
    channel_type?: string;
    company_id?: number;
    pincode: string;
    store_ids?: number[];
};
type AssignStoreArticle = {
    article_assignment?: ArticleAssignment;
    group_id?: string;
    meta?: any;
    quantity?: number;
    query?: ArticleQuery;
};
type AttributeDetailsGroup = {
    display_type: string;
    is_active: boolean;
    key?: string;
    logo?: string;
    name: string;
    priority: number;
    slug?: string;
    unit?: string;
};
type AttributeMaster = {
    allowed_values?: string[];
    format?: string;
    mandatory?: boolean;
    multi?: boolean;
    range?: AttributeSchemaRange;
    type: string;
};
type AttributeMasterDetails = {
    display_type: string;
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
type AttributeMasterSerializer = {
    created_by?: any;
    created_on?: string;
    departments: string[];
    description?: string;
    details: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    example?: string;
    filters: AttributeMasterFilter;
    is_nested?: boolean;
    logo?: string;
    modified_by?: any;
    modified_on?: string;
    name?: string;
    raw_key?: string;
    schema: AttributeMaster;
    slug: string;
    suggestion?: string;
    synonyms?: any;
    tags?: string[];
    unit?: string;
    variant?: boolean;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutoCompleteMedia = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type AutocompletePageAction = {
    params?: any;
    query?: any;
    type?: string;
    url?: string;
};
type AutocompleteResult = {
    _custom_json?: any;
    action?: AutocompleteAction;
    display?: string;
    logo?: AutoCompleteMedia;
};
type BannerImage = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type BrandItem = {
    action?: Action;
    banners?: ImageUrls;
    departments?: string[];
    discount?: string;
    logo?: Media2;
    name?: string;
    slug?: string;
    uid?: number;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type BrandMeta = {
    id: number;
    name: string;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type BulkHsnResponse = {
    success?: boolean;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type BulkInventoryGetItems = {
    cancelled?: number;
    cancelled_records?: string[];
    company_id?: number;
    created_by?: any;
    created_on?: string;
    failed?: number;
    failed_records?: string[];
    file_path?: string;
    id?: string;
    is_active?: boolean;
    modified_by?: any;
    modified_on?: string;
    stage?: string;
    succeed?: number;
    total?: number;
};
type BulkJob = {
    cancelled?: number;
    cancelled_records?: any[];
    company_id: number;
    created_by?: UserInfo1;
    created_on: string;
    custom_template_tag?: string;
    failed?: number;
    failed_records?: any[];
    file_path?: string;
    is_active?: boolean;
    modified_by?: UserInfo1;
    modified_on?: string;
    stage?: string;
    succeed?: number;
    template_tag?: string;
    total?: number;
    tracking_url?: string;
};
type BulkProductRequest = {
    batch_id: string;
    company_id: number;
    data: any[];
    template_tag: string;
};
type BulkResponse = {
    batch_id: string;
    created_by?: UserInfo1;
    created_on: string;
    is_active?: boolean;
    modified_by?: UserInfo1;
    modified_on?: string;
};
type CatalogInsightBrand = {
    article_freshness?: number;
    available_articles?: number;
    available_sizes?: number;
    name?: string;
    total_articles?: number;
    total_sizes?: number;
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
type CategoriesResponse = {
    name?: string;
    slug?: string;
    slug_key?: string;
    template_slug?: string;
    uid?: number;
};
type Category = {
    created_by?: any;
    created_on?: string;
    departments: number[];
    hierarchy?: Hierarchy[];
    id?: string;
    is_active: boolean;
    level: number;
    marketplaces?: CategoryMapping;
    media?: Media1;
    modified_by?: any;
    modified_on?: string;
    name: string;
    priority?: number;
    slug?: string;
    synonyms?: string[];
    tryouts?: string[];
    uid?: number;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type CategoryItems = {
    action?: Action;
    banners?: ImageUrls;
    childs?: Child[];
    name?: string;
    slug?: string;
    uid?: number;
};
type CategoryListingResponse = {
    data?: DepartmentCategoryTree[];
    departments?: DepartmentIdentifier[];
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryRequestBody = {
    departments: number[];
    hierarchy?: Hierarchy[];
    is_active: boolean;
    level: number;
    marketplaces?: CategoryMapping;
    media?: Media1;
    name: string;
    priority?: number;
    slug?: string;
    synonyms?: string[];
    tryouts?: string[];
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type Child = {
    _custom_json?: any;
    action?: Action;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
    name?: string;
    slug?: string;
    uid?: number;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CollectionCreateResponse = {
    _schedule?: any;
    allow_facets?: boolean;
    allow_sort?: boolean;
    app_id?: string;
    badge?: any;
    banners?: ImageUrls;
    cron?: any;
    description?: string;
    is_active?: boolean;
    logo?: BannerImage;
    meta?: any;
    name?: string;
    priority?: number;
    query?: CollectionQuery[];
    slug?: string;
    sort_on?: string;
    tag?: string[];
    type?: string;
    visible_facets_keys?: string[];
};
type CollectionDetailResponse = {
    _schedule?: any;
    allow_facets?: boolean;
    allow_sort?: boolean;
    app_id?: string;
    badge?: any;
    banners?: ImageUrls;
    cron?: any;
    description?: string;
    is_active?: boolean;
    logo?: Media;
    meta?: any;
    name?: string;
    priority?: number;
    query?: CollectionQuery[];
    slug?: string;
    tag?: string[];
    type?: string;
    uid?: string;
    visible_facets_keys?: string[];
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionItem = {
    action: string;
    item_id: number;
    priority?: number;
};
type CollectionItemUpdate = {
    allow_facets?: boolean;
    allow_sort?: boolean;
    items?: CollectionItem[];
    query?: CollectionQuery[];
    type?: string;
    visible_facets_keys?: string[];
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
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
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type CollectionSchedule = {
    cron?: string;
    duration?: number;
    end?: string;
    next_schedule?: NextSchedule[];
    start?: string;
};
type CompanyBrandDetail = {
    brand_id?: number;
    brand_name?: string;
    company_id?: number;
    total_article?: number;
};
type CompanyMeta = {
    id: number;
};
type CompanyMeta1 = {
    id?: number;
};
type CompanyOptIn = {
    brand_ids: number[];
    company_id: number;
    created_by?: any;
    created_on: number;
    enabled: boolean;
    modified_by?: any;
    modified_on: number;
    opt_level: string;
    platform: string;
    store_ids: number[];
};
type ConfigErrorResponse = {
    message: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type ConfigurationBucketPoints = {
    display?: string;
    end?: number;
    start?: number;
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingFilterConfig = {
    display_name?: string;
    is_active: boolean;
    key: string;
    logo?: string;
    name?: string;
    priority: number;
    type: string;
    value_config?: ConfigurationListingFilterValue;
};
type ConfigurationListingFilterValue = {
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    map?: any;
    map_values?: any[];
    sort?: string;
    value?: string;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    key: string;
    logo?: string;
    name?: string;
    priority: number;
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationProductConfig = {
    is_active: boolean;
    key: string;
    logo?: string;
    priority: number;
    size?: ProductSize;
    subtitle?: string;
    title?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductVariantConfig = {
    display_type: string;
    is_active: boolean;
    key: string;
    logo?: string;
    name: string;
    priority: number;
    size: ProductSize;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    results?: AutocompleteResult[];
    words?: string[];
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    app_id?: string;
    results?: any[];
    words?: string[];
};
type CreateCollection = {
    _custom_json?: any;
    _locale_language?: any;
    _schedule?: CollectionSchedule;
    allow_facets?: boolean;
    allow_sort?: boolean;
    app_id: string;
    badge?: CollectionBadge;
    banners: CollectionBanner;
    created_by?: UserInfo;
    description?: string;
    is_active?: boolean;
    is_visible?: boolean;
    logo: CollectionImage;
    meta?: any;
    modified_by?: UserInfo;
    name: string;
    priority?: number;
    published?: boolean;
    query?: CollectionQuery[];
    seo?: SeoDetail;
    slug: string;
    sort_on?: string;
    tags?: string[];
    type: string;
    visible_facets_keys?: string[];
};
type CreateSearchKeyword = {
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    result: SearchKeywordResult;
    words?: string[];
};
type CrossSellingData = {
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type DefaultKeyRequest = {
    default_key: string;
};
type DeleteResponse = {
    message?: string;
};
type Department = {
    logo?: Media2;
    name?: string;
    priority_order?: number;
    slug?: string;
    uid?: number;
};
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateUpdate = {
    _cls?: string;
    _custom_json?: any;
    is_active?: boolean;
    logo: string;
    name: string;
    platforms?: any;
    priority_order: number;
    slug?: string;
    synonyms?: string[];
    tags?: string[];
    uid?: number;
};
type DepartmentErrorResponse = {
    code?: string;
    errors?: any;
    message?: string;
    meta?: any;
    status?: number;
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type DepartmentModel = {
    _cls?: any;
    _custom_json?: any;
    _id?: any;
    created_by?: UserDetail;
    created_on: string;
    is_active?: boolean;
    logo: any;
    modified_by?: UserDetail;
    modified_on: string;
    name: any;
    priority_order: number;
    slug: any;
    synonyms?: any[];
    uid: number;
    verified_by?: UserDetail;
    verified_on?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DimensionResponse = {
    height: number;
    is_default: boolean;
    length: number;
    unit: string;
    width: number;
};
type DimensionResponse1 = {
    height?: number;
    length?: number;
    unit?: string;
    width?: number;
};
type EntityConfiguration = {
    app_id: string;
    config_id?: string;
    config_type: string;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    product?: GetCatalogConfigurationDetailsProduct;
};
type FilerList = {
    display?: string;
    value?: string;
};
type GenderDetail = {
    departments?: string[];
    description?: string;
    details?: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    filters?: AttributeMasterFilter;
    id?: string;
    is_nested?: boolean;
    logo?: string;
    meta?: AttributeMasterMeta;
    name?: string;
    schema?: AttributeMaster;
    slug?: string;
};
type GetAddressSerializer = {
    address1?: string;
    address2?: string;
    address_type?: string;
    city?: string;
    country?: string;
    country_code?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    pincode?: number;
    state?: string;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
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
type GetCatalogConfigurationDetailsProduct = {
    compare?: any;
    detail?: any;
    similar?: any;
    variant?: any;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type GetCollectionDetailNest = {
    _schedule?: any;
    action?: Action;
    allow_facets?: boolean;
    allow_sort?: boolean;
    app_id?: string;
    badge?: any;
    banners?: ImageUrls;
    cron?: any;
    description?: string;
    is_active?: boolean;
    logo?: Media;
    meta?: any;
    name?: string;
    priority?: number;
    query?: CollectionQuery[];
    slug?: string;
    tag?: string[];
    type?: string;
    uid?: string;
    visible_facets_keys?: string[];
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page?: Page;
    sort_on?: ProductSortOn[];
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
};
type GetCompanySerializer = {
    addresses?: GetAddressSerializer[];
    business_type?: string;
    company_type?: string;
    created_by?: UserSerializer1;
    created_on?: string;
    modified_by?: UserSerializer1;
    modified_on?: string;
    name?: string;
    reject_reason?: string;
    stage?: string;
    uid?: number;
    verified_by?: UserSerializer1;
    verified_on?: string;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type GetDepartment = {
    created_by?: UserSerializer;
    created_on?: string;
    is_active?: boolean;
    item_type?: string;
    logo?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    name?: string;
    page_no?: number;
    page_size?: number;
    priority_order?: number;
    search?: string;
    slug?: string;
    synonyms?: string[];
    uid?: number;
};
type GetInventories = {
    brand?: BrandMeta1;
    company?: CompanyMeta1;
    country_of_origin?: string;
    created_by?: UserSerializer;
    date_meta?: DateMeta;
    dimension?: DimensionResponse1;
    expiration_date?: string;
    id?: string;
    identifier?: any;
    inventory_updated_on?: string;
    is_set?: boolean;
    item_id?: number;
    manufacturer?: ManufacturerResponse1;
    modified_by?: UserSerializer;
    platforms?: any;
    price?: PriceArticle;
    quantities?: QuantitiesArticle;
    return_config?: ReturnConfig2;
    seller_identifier?: string;
    size?: string;
    stage?: string;
    store?: ArticleStoreResponse;
    tags?: string[];
    tax_identifier?: any;
    total_quantity?: number;
    trace_id?: string;
    track_inventory?: boolean;
    trader?: Trader2[];
    uid?: string;
    weight?: WeightResponse1;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type GetLocationSerializer = {
    _custom_json?: any;
    address: GetAddressSerializer;
    code: string;
    company?: GetCompanySerializer;
    contact_numbers?: SellerPhoneNumber[];
    created_by?: UserSerializer2;
    created_on?: string;
    display_name: string;
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSerializer;
    integration_type?: LocationIntegrationType;
    manager?: LocationManagerSerializer;
    modified_by?: UserSerializer2;
    modified_on?: string;
    name: string;
    notification_emails?: string[];
    phone_number: string;
    product_return_config?: ProductReturnConfigSerializer;
    stage?: string;
    store_type?: string;
    timing?: LocationDayWiseSerializer[];
    uid?: number;
    verified_by?: UserSerializer2;
    verified_on?: string;
    warnings?: any;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type GetProductBundleCreateResponse = {
    choice: string;
    company_id?: number;
    created_by?: any;
    created_on?: string;
    id?: string;
    is_active: boolean;
    logo?: string;
    meta?: any;
    modified_by?: any;
    modified_on?: string;
    name: string;
    page_visibility?: string[];
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    slug: string;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type GetProductBundleResponse = {
    choice?: string;
    company_id?: number;
    is_active?: boolean;
    logo?: string;
    meta?: any;
    name?: string;
    page_visibility?: string[];
    products?: GetProducts[];
    same_store_assignment?: boolean;
    slug?: string;
};
type GetProducts = {
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    max_quantity?: number;
    min_quantity?: number;
    price?: Price;
    product_details?: LimitedProductData;
    product_uid?: number;
    sizes?: Size[];
};
type GetSearchWordsData = {
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    result?: any;
    uid?: string;
    words?: string[];
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GlobalValidation = {
    definitions?: any;
    description?: string;
    properties?: Properties;
    required?: string[];
    title?: string;
    type?: string;
};
type GTIN = {
    gtin_type: string;
    gtin_value: any;
    primary?: boolean;
};
type Guide = {
    meta?: Meta;
};
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type HsnCodesObject = {
    company_id?: number;
    hs2_code?: string;
    hsn_code?: string;
    id?: string;
    modified_on?: string;
    tax1?: number;
    tax2?: number;
    tax_on_esp?: boolean;
    tax_on_mrp?: boolean;
    threshold1?: number;
    threshold2?: number;
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type HSNData = {
    country_of_origin?: string[];
    hsn_code?: string[];
};
type HSNDataInsertV2 = {
    country_code: string;
    created_by?: any;
    created_on?: string;
    description: string;
    hsn_code: string;
    hsn_code_id?: string;
    modified_by?: any;
    modified_on?: string;
    reporting_hsn: string;
    taxes: TaxSlab[];
    type: string;
};
type HsnUpsert = {
    company_id: number;
    hs2_code: string;
    hsn_code: string;
    is_active?: boolean;
    tax1: number;
    tax2?: number;
    tax_on_esp?: boolean;
    tax_on_mrp: boolean;
    threshold1: number;
    threshold2?: number;
    uid?: number;
};
type Image = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type InventoryBulkRequest = {
    batch_id: string;
    company_id: number;
    sizes: InventoryJobPayload[];
    user?: any;
};
type InventoryConfig = {
    data?: FilerList[];
    multivalues?: boolean;
};
type InventoryCreateRequest = {
    data?: string[];
    filters: InventoryExportFilter;
    notification_emails?: string[];
    type?: string;
};
type InventoryExportAdvanceOption = {
    brand_ids?: number[];
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    store_ids?: number[];
    to_date?: string;
};
type InventoryExportFilter = {
    brand_ids?: number[];
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    store_ids: number[];
    to_date?: string;
};
type InventoryExportJob = {
    completed_on?: string;
    filters?: InventoryExportAdvanceOption;
    notification_emails?: string[];
    seller_id: number;
    status?: string;
    task_id: string;
    type: string;
    url?: string;
};
type InventoryExportJobListResponse = {
    items: InventoryJobDetailResponse;
};
type InventoryExportQuantityFilter = {
    max?: number;
    min?: number;
    operators: string;
};
type InventoryExportRequest = {
    brand?: number[];
    store?: number[];
    type?: string;
};
type InventoryExportResponse = {
    created_by?: string;
    created_on?: string;
    filters?: any;
    modified_on?: string;
    notification_emails?: string[];
    seller_id: number;
    status?: string;
    task_id: string;
    type?: string;
};
type InventoryFailedReason = {
    errors?: string;
    message: string;
};
type InventoryJobDetailResponse = {
    cancelled_by?: UserDetail;
    cancelled_on?: string;
    completed_on?: string;
    created_by?: UserDetail;
    created_on?: string;
    filters: InventoryJobFilters;
    id: string;
    modified_on?: string;
    notification_emails?: string[];
    seller_id: number;
    status?: any;
    task_id: string;
    type?: string;
    url: string;
};
type InventoryJobFilters = {
    brands?: string[];
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    stores?: string[];
    to_date?: string;
};
type InventoryJobPayload = {
    currency?: string;
    expiration_date?: string;
    item_dimensions_unit_of_measure?: string;
    item_weight_unit_of_measure?: string;
    price?: number;
    price_effective?: number;
    price_marked?: number;
    quantity?: number;
    seller_identifier: string;
    store_code: string;
    tags?: string[];
    total_quantity?: number;
    trace_id?: string;
};
type InventoryPage = {
    has_next?: boolean;
    has_previous?: boolean;
    item_total: number;
    next_id?: string;
    type: string;
};
type InventoryPayload = {
    expiration_date?: string;
    price_effective?: number;
    price_marked?: number;
    seller_identifier: string;
    store_id: number;
    tags?: string[];
    total_quantity?: number;
    trace_id?: string;
};
type InventoryRequest = {
    company_id: number;
    item: ItemQuery;
    sizes: InvSize[];
};
type InventoryRequestSchemaV2 = {
    company_id: number;
    meta?: any;
    payload?: InventoryPayload[];
};
type InventoryResponse = {
    currency?: string;
    identifiers?: any;
    inventory_updated_on?: string;
    item_id?: number;
    price?: number;
    price_effective?: number;
    price_transfer?: number;
    quantity?: number;
    sellable_quantity?: number;
    seller_identifier?: string;
    size?: string;
    store?: any;
    uid?: string;
};
type InventoryResponseItem = {
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type InventorySellerResponse = {
    _custom_json?: any;
    added_on_store?: string;
    brand: BrandMeta;
    company: CompanyMeta;
    country_of_origin: string;
    created_by?: UserSerializer;
    dimension: DimensionResponse;
    expiration_date?: string;
    fragile: boolean;
    fynd_article_code: string;
    fynd_item_code: string;
    fynd_meta?: any;
    identifier: any;
    is_active?: boolean;
    is_set?: boolean;
    item_id: number;
    manufacturer: ManufacturerResponse;
    meta?: any;
    modified_by?: UserSerializer;
    price: PriceMeta;
    quantities?: Quantities;
    raw_meta?: any;
    return_config?: ReturnConfig1;
    seller_identifier: string;
    set?: InventorySet;
    size: string;
    stage?: string;
    store: StoreMeta;
    tags?: string[];
    tax_identifier?: any;
    total_quantity: number;
    trace_id?: string;
    track_inventory?: boolean;
    trader?: Trader1[];
    uid: string;
    weight: WeightResponse;
};
type InventorySet = {
    name?: string;
    quantity?: number;
    size_distribution: SizeDistribution;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type InventoryValidationResponse = {
    data?: any;
    message?: string;
};
type InvoiceCredSerializer = {
    enabled?: boolean;
    password?: string;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type InvSize = {
    currency: string;
    expiration_date?: string;
    identifiers: GTIN[];
    is_set?: boolean;
    item_dimensions_unit_of_measure?: string;
    item_height?: number;
    item_length?: number;
    item_weight?: number;
    item_weight_unit_of_measure?: string;
    item_width?: number;
    price?: number;
    price_effective: number;
    price_transfer?: number;
    quantity: number;
    set?: InventorySet;
    size: any;
    store_code: string;
};
type ItemQuery = {
    brand_uid?: number;
    item_code?: string;
    uid?: number;
};
type Items = {
    cancelled?: number;
    cancelled_records?: string[];
    company_id?: number;
    created_by?: UserCommon;
    created_on?: string;
    failed?: number;
    failed_records?: string[];
    file_path?: string;
    id?: string;
    is_active?: boolean;
    modified_by?: UserCommon;
    modified_on?: string;
    retry?: number;
    stage?: string;
    succeed?: number;
    total?: number;
    tracking_url?: string;
};
type LimitedProductData = {
    attributes?: any;
    country_of_origin?: string;
    identifier?: any;
    images?: string[];
    item_code?: string;
    name?: string;
    price?: any;
    quantity?: number;
    short_description?: string;
    sizes?: string[];
    slug?: string;
    uid?: number;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    open: boolean;
    opening?: LocationTimingSerializer;
    weekday: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type LocationListSerializer = {
    items?: GetLocationSerializer[];
    page?: Page;
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
type Logo = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
    url?: string;
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
type Media = {
    meta?: any;
    type?: string;
    url: string;
};
type Media1 = {
    landscape: string;
    logo: string;
    portrait: string;
};
type Media2 = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    filter_types?: string[];
    key?: string;
    units?: any[];
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingResponse = {
    filter: MetaDataListingFilterResponse;
    sort: MetaDataListingSortResponse;
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaFields = {
    key: any;
    value: any;
};
type MOQData = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyDetail = {
    business_type?: string;
    company_type?: string;
    name?: string;
    uid?: number;
};
type OptinCompanyMetrics = {
    brand?: number;
    company?: string;
    store?: number;
};
type OptInPostRequest = {
    brand_ids?: number[];
    company_id?: number;
    enabled?: boolean;
    opt_level: string;
    platform?: string;
    store_ids?: number[];
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    is_cod?: boolean;
    is_gift?: boolean;
    moq?: MOQData;
    seo?: SEOData;
};
type PageResponse = {
    current?: string;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    size?: number;
};
type PageResponseType = {
    current: number;
    has_next: boolean;
    next: number;
    total_count: number;
};
type Price = {
    currency?: string;
    max_effective?: number;
    max_marked?: number;
    min_effective?: number;
    min_marked?: number;
};
type Price1 = {
    currency_code?: string;
    currency_symbol?: string;
    max?: number;
    min?: number;
};
type PriceArticle = {
    currency?: string;
    effective?: number;
    marked?: number;
    tp_notes?: any;
    transfer?: number;
};
type PriceMeta = {
    currency: string;
    effective: number;
    marked: number;
    tp_notes?: any;
    transfer: number;
    updated_at?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: CategoriesResponse[];
    page?: Page;
};
type Product = {
    _custom_json?: any;
    all_company_ids?: number[];
    all_identifiers?: string[];
    all_sizes?: any[];
    attributes?: any;
    brand?: Brand;
    brand_uid?: number;
    category?: any;
    category_slug?: string;
    category_uid?: number;
    color?: string;
    company_id?: number;
    country_of_origin?: string;
    created_by?: any;
    created_on?: string;
    currency?: string;
    custom_order?: any;
    departments?: number[];
    description?: string;
    highlights?: string[];
    hsn_code?: string;
    id?: string;
    image_nature?: string;
    images?: Image[];
    is_active?: boolean;
    is_dependent?: boolean;
    is_expirable?: boolean;
    is_image_less_product?: boolean;
    is_physical?: boolean;
    is_set?: boolean;
    item_code?: string;
    item_type?: string;
    l3_mapping?: string[];
    media?: Media[];
    modified_by?: any;
    modified_on?: string;
    moq?: any;
    multi_size?: boolean;
    name?: string;
    net_quantity?: NetQuantityResponse;
    no_of_boxes?: number;
    pending?: string;
    primary_color?: string;
    product_group_tag?: string[];
    product_publish?: ProductPublished;
    return_config?: ReturnConfigResponse;
    short_description?: string;
    size_guide?: string;
    sizes?: any[];
    slug?: string;
    stage?: string;
    tags?: string[];
    tax_identifier?: any;
    teaser_tag?: any;
    template_tag?: string;
    trader?: Trader[];
    uid?: number;
    variant_group?: any;
    variant_media?: any;
    variants?: any;
    verified_by?: VerifiedBy;
    verified_on?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ProductBrand = {
    action?: Action;
    logo?: Media;
    name?: string;
    uid?: number;
};
type ProductBulkAssets = {
    batch_id?: string;
    company_id?: number;
    url: string;
    user: any;
};
type ProductBulkRequest = {
    cancelled?: number;
    cancelled_records?: string[];
    company_id?: number;
    created_by?: UserDetail1;
    created_on?: string;
    failed?: number;
    failed_records?: string[];
    file_path?: string;
    is_active?: boolean;
    modified_by?: UserDetail1;
    modified_on?: string;
    stage?: string;
    succeed?: number;
    template?: ProductTemplate;
    template_tag?: string;
    total?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type ProductBundleItem = {
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    max_quantity: number;
    min_quantity: number;
    product_uid: number;
};
type ProductBundleRequest = {
    choice: string;
    company_id?: number;
    created_by?: any;
    created_on?: string;
    is_active: boolean;
    logo?: string;
    meta?: any;
    modified_by?: any;
    modified_on?: string;
    name: string;
    page_visibility?: string[];
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    slug: string;
};
type ProductBundleUpdateRequest = {
    choice: string;
    company_id?: number;
    is_active: boolean;
    logo?: string;
    meta?: any;
    modified_by?: any;
    modified_on?: string;
    name: string;
    page_visibility?: string[];
    products: ProductBundleItem[];
    same_store_assignment?: boolean;
    slug: string;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type ProductCreateUpdateSchemaV2 = {
    _custom_json?: any;
    action?: string;
    attributes?: any;
    brand_uid: number;
    bulk_job_id?: string;
    category_slug: string;
    change_request_id?: any;
    company_id: number;
    country_of_origin: string;
    currency: string;
    custom_order?: CustomOrder;
    departments: number[];
    description?: string;
    highlights?: string[];
    is_active?: boolean;
    is_dependent?: boolean;
    is_image_less_product?: boolean;
    is_set?: boolean;
    item_code: string;
    item_type: string;
    media?: Media[];
    multi_size?: boolean;
    name: string;
    net_quantity?: NetQuantity;
    no_of_boxes?: number;
    product_group_tag?: string[];
    product_publish?: ProductPublish;
    requester?: string;
    return_config: ReturnConfig;
    short_description?: string;
    size_guide?: string;
    sizes: any[];
    slug: string;
    tags?: string[];
    tax_identifier: TaxIdentifier;
    teaser_tag?: TeaserTag;
    template_tag: string;
    trader: Trader[];
    uid?: number;
    variant_group?: any;
    variant_media?: any;
    variants?: any;
};
type ProductDetail = {
    attributes?: any;
    brand?: ProductBrand;
    color?: string;
    description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    has_variant?: boolean;
    highlights?: string[];
    image_nature?: string;
    item_code?: string;
    item_type?: string;
    medias?: Media[];
    name?: string;
    product_online_date?: string;
    promo_meta?: any;
    rating?: number;
    rating_count?: number;
    short_description?: string;
    similars?: string[];
    slug: string;
    teaser_tag?: any;
    tryouts?: string[];
    type?: string;
    uid?: number;
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
type ProductDownloadsResponse = {
    items?: ProductTemplateExportResponse[];
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type ProductFiltersKey = {
    display: string;
    kind?: string;
    logo?: string;
    name: string;
    operators?: string[];
};
type ProductFiltersValue = {
    count?: number;
    currency_code?: string;
    currency_symbol?: string;
    display: string;
    display_format?: string;
    is_selected: boolean;
    max?: number;
    min?: number;
    query_format?: string;
    selected_max?: number;
    selected_min?: number;
    value: any;
};
type ProductListingDetail = {
    attributes?: any;
    brand?: ProductBrand;
    color?: string;
    description?: string;
    discount?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    has_variant?: boolean;
    highlights?: string[];
    image_nature?: string;
    item_code?: string;
    item_type?: string;
    medias?: Media[];
    name?: string;
    price?: ProductListingPrice;
    product_online_date?: string;
    promo_meta?: any;
    rating?: number;
    rating_count?: number;
    sellable?: boolean;
    short_description?: string;
    similars?: string[];
    slug: string;
    teaser_tag?: any;
    tryouts?: string[];
    type?: string;
    uid?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductListingResponseV2 = {
    items?: ProductSchemaV2[];
    page?: Page;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductPublish1 = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type ProductSchemaV2 = {
    _custom_json?: any;
    all_company_ids?: number[];
    all_identifiers?: string[];
    all_sizes?: any[];
    attributes?: any;
    brand?: Brand;
    brand_uid?: number;
    category?: any;
    category_slug?: string;
    category_uid?: number;
    color?: string;
    company_id?: number;
    country_of_origin?: string;
    created_by?: any;
    created_on?: string;
    currency?: string;
    custom_order?: any;
    departments?: number[];
    description?: string;
    highlights?: string[];
    hsn_code?: string;
    id?: string;
    image_nature?: string;
    images?: Image[];
    is_active?: boolean;
    is_dependent?: boolean;
    is_expirable?: boolean;
    is_image_less_product?: boolean;
    is_physical?: boolean;
    is_set?: boolean;
    item_code?: string;
    item_type?: string;
    l3_mapping?: string[];
    media?: Media[];
    modified_by?: any;
    modified_on?: string;
    moq?: any;
    multi_size?: boolean;
    name?: string;
    net_quantity?: NetQuantityResponse;
    no_of_boxes?: number;
    pending?: string;
    primary_color?: string;
    product_group_tag?: string[];
    product_publish?: ProductPublish1;
    return_config?: ReturnConfigResponse;
    short_description?: string;
    size_guide?: string;
    sizes?: any[];
    slug?: string;
    stage?: string;
    tags?: string[];
    tax_identifier?: any;
    teaser_tag?: any;
    template_tag?: string;
    trader?: Trader[];
    uid?: number;
    variant_group?: any;
    variant_media?: any;
    variants?: any;
    verified_by?: VerifiedBy;
    verified_on?: string;
};
type ProductSize = {
    max: number;
    min: number;
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
type ProductSortOn = {
    is_selected?: boolean;
    name?: string;
    value?: string;
};
type ProductTagsViewResponse = {
    items?: string[];
};
type ProductTemplate = {
    attributes?: string[];
    categories?: string[];
    created_by?: any;
    created_on?: string;
    departments?: string[];
    description?: string;
    is_active?: boolean;
    is_archived?: boolean;
    is_expirable: boolean;
    is_physical: boolean;
    logo?: string;
    modified_by?: any;
    modified_on?: string;
    name?: string;
    slug: string;
    tag?: string;
};
type ProductTemplateDownloadsExport = {
    filters?: ProductTemplateExportFilterRequest;
    notification_emails?: string[];
    type?: string;
};
type ProductTemplateExportFilterRequest = {
    brands?: string[];
    catalogue_types: string[];
    from_date?: string;
    templates: string[];
    to_date?: string;
};
type ProductTemplateExportResponse = {
    completed_on?: string;
    created_by?: UserInfo1;
    filters?: any;
    modified_on?: string;
    notification_emails?: string[];
    seller_id: number;
    status?: string;
    task_id: string;
    type?: string;
    url?: string;
};
type ProductVariants = {
    brand_uid?: number;
    category_uid?: number;
    item_code?: string;
    media?: Media[];
    name?: string;
    uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type Properties = {
    brand_uid?: any;
    category_slug?: any;
    command?: any;
    country_of_origin?: any;
    currency?: any;
    custom_order?: any;
    description?: any;
    highlights?: any;
    hsn_code?: any;
    is_active?: any;
    is_dependent?: any;
    item_code?: any;
    item_type?: any;
    media?: any;
    multi_size?: any;
    name?: any;
    no_of_boxes?: any;
    product_group_tag?: any;
    product_publish?: any;
    return_config?: any;
    short_description?: any;
    size_guide?: any;
    sizes?: any;
    slug?: any;
    tags?: any;
    teaser_tag?: any;
    trader?: any;
    trader_type?: any;
    variants?: any;
};
type PTErrorResponse = {
    code?: string;
    errors?: any;
    message?: string;
    meta?: any;
    status?: number;
};
type Quantities = {
    damaged?: QuantityBase;
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
};
type QuantitiesArticle = {
    damaged?: Quantity;
    not_available?: Quantity;
    order_committed?: Quantity;
    sellable?: Quantity;
};
type Quantity = {
    count?: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type ReturnConfig2 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type ReturnConfigResponse = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type SecondLevelChild = {
    _custom_json?: any;
    action?: Action;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
    name?: string;
    slug?: string;
    uid?: number;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type SEOData = {
    description?: any;
    title?: any;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type SingleProductResponse = {
    data?: ProductSchemaV2;
};
type Size = {
    display?: string;
    is_available?: boolean;
    quantity?: number;
    value?: string;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type SizeGuideResponse = {
    active?: boolean;
    brand_id?: number;
    company_id?: number;
    created_by?: any;
    created_on?: string;
    guide?: any;
    id?: string;
    modified_by?: any;
    modified_on?: string;
    name?: string;
    subtitle?: string;
    tag?: string;
    title?: string;
};
type StoreAssignResponse = {
    _id?: string;
    article_assignment: ArticleAssignment1;
    company_id?: number;
    group_id?: string;
    index?: number;
    item_id: number;
    meta?: any;
    price_effective?: number;
    price_marked?: number;
    quantity: number;
    s_city?: string;
    size: string;
    status: boolean;
    store_id?: number;
    store_pincode?: number;
    strategy_wise_listing?: any[];
    uid?: string;
};
type StoreDetail = {
    additional_contacts?: any[];
    address?: any;
    company_id?: number;
    created_on?: string;
    display_name?: string;
    documents?: any[];
    manager?: any;
    modified_on?: string;
    name?: string;
    store_code?: string;
    store_type?: string;
    timing?: any;
    uid?: number;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type TaxSlab = {
    cess?: number;
    effective_date: string;
    rate: number;
    threshold: number;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type TemplateDetails = {
    attributes?: string[];
    categories?: string[];
    departments?: string[];
    description?: string;
    id?: string;
    is_active?: boolean;
    is_archived?: boolean;
    is_expirable: boolean;
    is_physical: boolean;
    logo?: string;
    name?: string;
    slug: string;
    tag?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplatesValidationResponse = {
    data?: TemplateValidationData;
    template_details?: TemplateDetails;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type ThirdLevelChild = {
    _custom_json?: any;
    action?: Action;
    banners?: ImageUrls;
    childs?: any[];
    name?: string;
    slug?: string;
    uid?: number;
};
type Trader = {
    address?: string[];
    name: any;
    type?: string;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type UpdateCollection = {
    _custom_json?: any;
    _locale_language?: any;
    _schedule?: CollectionSchedule;
    allow_facets?: boolean;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    banners?: CollectionBanner;
    description?: string;
    is_active?: boolean;
    is_visible?: boolean;
    logo?: CollectionImage;
    meta?: any;
    modified_by?: UserInfo;
    name?: string;
    priority?: number;
    published?: boolean;
    query?: CollectionQuery[];
    seo?: SeoDetail;
    slug?: string;
    sort_on?: string;
    tags?: string[];
    type?: string;
    visible_facets_keys?: string[];
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type UserCommon = {
    company_id?: number;
    user_id?: string;
    username?: string;
};
type UserDetail = {
    contact?: string;
    super_user?: boolean;
    user_id: string;
    username: string;
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type UserInfo = {
    email?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type UserInfo1 = {
    email?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type UserSerializer = {
    _id?: string;
    contact?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type ValidateIdentifier = {
    gtin_type: string;
    gtin_value: string;
    primary?: boolean;
};
type ValidateProduct = {
    valid?: boolean;
};
type ValidateSizeGuide = {
    active?: boolean;
    brand_id?: number;
    company_id?: number;
    created_by?: any;
    created_on?: string;
    description?: string;
    guide?: Guide;
    id?: string;
    image?: string;
    modified_by?: any;
    modified_on?: string;
    name: string;
    subtitle?: string;
    tag?: string;
    title: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type WeightResponse = {
    is_default: boolean;
    shipping: number;
    unit: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type AddressSerializer = {
    address1?: string;
    address2?: string;
    address_type?: string;
    city?: string;
    country?: string;
    country_code?: string;
    landmark?: string;
    latitude: number;
    longitude: number;
    pincode?: number;
    state?: string;
};
type BrandBannerSerializer = {
    landscape: string;
    portrait: string;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type BusinessDetails = {
    website?: Website;
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
type CompanyBrandSerializer = {
    brand?: GetBrandResponseSerializer;
    company?: CompanySerializer;
    created_by?: UserSerializer;
    created_on?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    reject_reason?: string;
    stage?: string;
    uid?: number;
    verified_by?: UserSerializer;
    verified_on?: string;
    warnings?: any;
};
type CompanySerializer = {
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    company_type: string;
    created_by?: UserSerializer;
    created_on?: string;
    details?: CompanyDetails;
    market_channels?: string[];
    modified_by?: UserSerializer;
    modified_on?: string;
    name?: string;
    notification_emails?: string[];
    reject_reason?: string;
    stage?: string;
    uid?: number;
    verified_by?: UserSerializer;
    verified_on?: string;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanyTaxesSerializer = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    address1: string;
    address2?: string;
    address_type: string;
    city: string;
    country: string;
    country_code?: string;
    landmark?: string;
    latitude: number;
    longitude: number;
    pincode: number;
    state: string;
};
type CreateUpdateBrandRequestSerializer = {
    _custom_json?: any;
    _locale_language?: any;
    banner: BrandBannerSerializer;
    brand_tier?: string;
    company_id?: number;
    description?: string;
    logo: string;
    name: string;
    synonyms?: string[];
    uid?: number;
};
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
type GetBrandResponseSerializer = {
    _custom_json?: any;
    _locale_language?: any;
    banner?: BrandBannerSerializer;
    created_by?: UserSerializer;
    created_on?: string;
    description?: string;
    logo?: string;
    mode?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    name: string;
    reject_reason?: string;
    slug_key?: string;
    stage?: string;
    synonyms?: string[];
    uid?: number;
    verified_by?: UserSerializer;
    verified_on?: string;
    warnings?: any;
};
type GetCompanyProfileSerializerResponse = {
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    business_country_info?: BusinessCountryInfo;
    business_details?: BusinessDetails;
    business_info?: string;
    business_type?: string;
    company_type: string;
    contact_details?: ContactDetails;
    created_by?: UserSerializer;
    created_on?: string;
    documents?: Document[];
    franchise_enabled?: boolean;
    mode?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    name?: string;
    notification_emails?: string[];
    stage?: string;
    taxes?: CompanyTaxesSerializer[];
    uid: number;
    verified_by?: UserSerializer;
    verified_on?: string;
    warnings?: any;
};
type HolidayDateSerializer = {
    end_date: string;
    start_date: string;
};
type HolidaySchemaSerializer = {
    date: HolidayDateSerializer;
    holiday_type: string;
    title: string;
};
type LocationSerializer = {
    _custom_json?: any;
    address: AddressSerializer;
    auto_invoice?: boolean;
    code: string;
    company: number;
    contact_numbers?: SellerPhoneNumber[];
    credit_note?: boolean;
    display_name: string;
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSerializer;
    holiday?: HolidaySchemaSerializer[];
    manager?: LocationManagerSerializer;
    name: string;
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigSerializer;
    stage?: string;
    store_type?: string;
    timing?: LocationDayWiseSerializer[];
    uid?: number;
    warnings?: any;
};
type MetricsSerializer = {
    brand?: DocumentsObj;
    company_documents?: DocumentsObj;
    product?: DocumentsObj;
    stage?: string;
    store?: DocumentsObj;
    store_documents?: DocumentsObj;
    uid?: number;
};
type ProfileSuccessResponse = {
    message?: string;
    success?: boolean;
    uid?: number;
};
type UpdateCompany = {
    _custom_json?: any;
    addresses?: CreateUpdateAddressSerializer[];
    business_details?: BusinessDetails;
    business_info?: string;
    business_type?: string;
    company_type?: string;
    contact_details?: ContactDetails;
    documents?: Document[];
    franchise_enabled?: boolean;
    name?: string;
    notification_emails?: string[];
    reject_reason?: string;
    taxes?: CompanyTaxesSerializer1[];
    warnings?: any;
};
type Website = {
    url?: string;
};
type BrowseResponse = {
    items: DbRecord[];
    page: Page;
};
type BulkRequest = {
    configuration?: ReqConfiguration;
    destination: Destination;
    urls: string[];
};
type BulkUploadResponse = {
    task: CopyFileTask;
    tracking_url: string;
};
type CDN = {
    absolute_url: string;
    relative_url: string;
    url: string;
};
type CompleteResponse = {
    _id: string;
    cdn: CDN;
    content_type: string;
    created_on: string;
    file_name: string;
    file_path: string;
    modified_on: string;
    namespace: string;
    operation: string;
    size: number;
    success: boolean;
    tags?: string[];
    upload: Upload;
};
type CopyFileTask = {
    attempts_made: number;
    data: BulkRequest;
    delay: number;
    finished_on: number;
    id: string;
    name: string;
    opts: Opts;
    processed_on: number;
    progress: number;
    stacktrace?: string[];
    timestamp: number;
};
type DbRecord = {
    _id: string;
    cdn: CDN;
    content_type: string;
    created_on: string;
    file_name: string;
    file_path: string;
    modified_on: string;
    namespace: string;
    operation?: string;
    success: boolean;
    tags: string[];
    upload: Upload;
};
type Destination = {
    basepath?: string;
    namespace: string;
    rewrite: string;
};
type FailedResponse = {
    message: string;
};
type Opts = {
    attempts?: number;
    delay?: number;
    timestamp?: number;
};
type ReqConfiguration = {
    concurrency?: number;
};
type SignUrlRequest = {
    expiry: number;
    urls: string[];
};
type SignUrlResponse = {
    urls: Urls[];
};
type StartRequest = {
    content_type: string;
    file_name: string;
    params?: any;
    size: number;
    tags?: string[];
};
type StartResponse = {
    cdn: CDN;
    content_type: string;
    file_name: string;
    file_path: string;
    method?: string;
    namespace: string;
    operation: string;
    size: number;
    tags?: string[];
    upload: Upload;
};
type Upload = {
    expiry: number;
    url: string;
};
type Urls = {
    expiry: number;
    signed_url: string;
    url: string;
};
type Attribution = {
    campaign_cookie_expiry?: string;
};
type CampaignShortLink = {
    medium?: string;
    source?: string;
};
type ClickStatsItem = {
    display?: string;
    total?: number;
};
type ClickStatsResponse = {
    click_stats: ClickStatsItem[];
};
type ErrorRes = {
    message?: string;
};
type RedirectDevice = {
    link?: string;
    type?: string;
};
type Redirects = {
    android?: RedirectDevice;
    force_web?: boolean;
    ios?: RedirectDevice;
    web?: WebRedirect;
};
type ShortLinkList = {
    items?: ShortLinkRes[];
    page?: Page;
};
type ShortLinkReq = {
    active?: boolean;
    attribution?: Attribution;
    campaign?: CampaignShortLink;
    count?: number;
    enable_tracking?: boolean;
    expire_at?: string;
    hash?: string;
    personalized?: boolean;
    redirects?: Redirects;
    social_media_tags?: SocialMediaTags;
    title: string;
    url: string;
};
type ShortLinkRes = {
    _id?: string;
    active?: boolean;
    app_redirect?: boolean;
    application?: string;
    attribution?: Attribution;
    campaign?: CampaignShortLink;
    count?: number;
    created_at?: string;
    created_by?: string;
    enable_tracking?: boolean;
    expire_at?: string;
    fallback?: string;
    meta?: any;
    personalized?: boolean;
    redirects?: Redirects;
    social_media_tags?: SocialMediaTags;
    title?: string;
    updated_at?: string;
    url?: UrlInfo;
    user_id?: string;
};
type SocialMediaTags = {
    description?: string;
    image?: string;
    title?: string;
};
type UrlInfo = {
    hash?: string;
    original?: string;
    short?: string;
};
type WebRedirect = {
    link?: string;
    type?: string;
};
type ArchiveConfig = {
    archive?: boolean;
    archive_dir?: string;
    delete?: boolean;
};
type Audit = {
    created_by?: string;
    created_on?: string;
    modified_by?: string;
    modified_on?: string;
};
type AWSS3config = {
    access_key?: string;
    archive?: boolean;
    archive_config?: ArchiveConfig;
    archive_path?: string;
    bucket?: string;
    delete?: boolean;
    dir?: string;
    file_regex?: string;
    local_file_path?: string;
    region?: string;
    secret_key?: string;
    unzip?: boolean;
    zip_format?: string;
};
type CatalogMasterConfig = {
    source_slug?: string;
};
type CompanyConfig = {
    company_id?: number;
    delete_quantity_threshold?: number;
    exclude_steps?: number[];
    hidden_closet_keys?: string[];
    open_tags?: any;
    tax_identifiers?: string[];
};
type DataTresholdDTO = {
    min_price?: number;
    period_threshold?: number;
    period_threshold_type?: string;
    period_type_list?: GenericDTO[];
    safe_stock?: number;
};
type DBConfig = {
    dbname?: string;
    driver_class?: string;
    host?: string;
    jdbc_url?: string;
    optional_properties?: any;
    password?: string;
    port?: number;
    procedure?: boolean;
    query?: string;
    username?: string;
    vendor?: string;
};
type DBConnectionProfile = {
    inventory?: string;
};
type DBParamConfig = {
    params?: any;
};
type DefaultHeadersDTO = {
    intf_article_id?: PropBeanDTO;
    price_effective?: PropBeanDTO;
    quantity?: PropBeanDTO;
    store?: PropBeanDTO;
};
type DocMappingConfig = {
    default_headers?: DefaultHeadersDTO;
    junk_data_threshold_count?: number;
    prop_bean_configs?: PropBeanConfig[];
    properties?: any;
    unwind_field?: string;
};
type EmailConfig = {
    archive_config?: ArchiveConfig;
    attachment_mandate?: boolean;
    attachment_regex?: string;
    body_content_regex?: string;
    content_type?: string;
    downloadable_link?: boolean;
    filter_based_on_recepients?: boolean;
    filter_files_after_extraction?: boolean;
    folder_name_hierarchies?: string[];
    host?: string;
    local_dir?: string;
    password?: string;
    password_protected?: boolean;
    pcol?: string;
    properties?: any;
    read_all_unread_mails?: boolean;
    read_from_content?: boolean;
    recepient?: string;
    sender_address?: string;
    subject_line_regex?: string;
    unzip?: boolean;
    username?: string;
    zip_format?: string;
};
type FileConfig = {
    charset?: string;
    data_start_index?: number;
    default_headers?: DefaultHeadersDTO;
    delimiter?: string;
    escape_char?: string;
    file_has_header?: boolean;
    file_type?: string;
    header_array?: string[];
    header_index?: number;
    junk_data_threshold_count?: number;
    line_validity_check?: boolean;
    prop_bean_configs?: PropBeanConfig[];
    properties?: any;
    quote_char?: string;
    read_all_sheets?: boolean;
    sheet_names?: string[];
};
type FTPConfig = {
    archive_config?: ArchiveConfig;
    file_regex?: string;
    host?: string;
    interval?: number;
    local_dir?: string;
    password?: string;
    port?: number;
    read_all_files?: boolean;
    remote_dir?: string;
    retries?: number;
    unzip?: boolean;
    username?: string;
    zip_file_regex?: string;
    zip_format?: string;
};
type GCompany = {
    _id?: string;
    integration?: string;
    level?: string;
    name?: string;
    opted?: boolean;
    permissions?: string[];
    stores?: GStore[];
    token?: string;
    uid?: number;
};
type GenericDTO = {
    text?: string;
    value?: any;
};
type GoogleSpreadSheetConfig = {
    archive_config?: ArchiveConfig;
    client_secret_location?: string;
    cred_storage_directory?: string;
    local_dir?: string;
    range?: string;
    sheet_id?: string;
};
type GStore = {
    _id?: string;
    code?: string;
    data?: StoreData;
    integration?: string;
    level?: string;
    name?: string;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    uid?: number;
};
type HttpConfig = {
    archive_config?: ArchiveConfig;
    hosturl?: string;
    http_method?: string;
    local_path?: string;
    password?: string;
    request_params?: any;
    request_payload?: string;
    username?: string;
};
type JobConfig = {
    _id?: number;
    aggregator_types?: string[];
    alias?: string;
    audit?: Audit;
    catalog_master_config?: CatalogMasterConfig;
    company_config?: CompanyConfig[];
    company_ids?: number[];
    cron_expression?: string;
    db_connection_profile?: DBConnectionProfile;
    delete_quantity_threshold?: number;
    dependent_job_codes?: string[];
    disable?: boolean;
    immediate_first_run?: boolean;
    integration_type?: string;
    job_code?: string;
    min_price?: number;
    open_tags?: any;
    params?: any;
    period_threshold?: number;
    period_threshold_type?: string;
    priority?: string;
    process_config?: ProcessConfig;
    properties?: any;
    store_config?: StoreConfig[];
    store_filter?: StoreFilter;
    sync_delay?: number;
    task_type?: string;
    tax_identifiers?: string[];
    version?: number;
};
type JobConfigDTO = {
    alias?: string;
    company_id: number;
    company_name?: string;
    integration: string;
    integration_data?: any;
    job_code?: string;
    task_details?: TaskDTO;
    threshold_details?: DataTresholdDTO;
};
type JobConfigListDTO = {
    active?: boolean;
    alias?: string;
    code?: string;
    created_by?: string;
    created_on?: string;
    modified_by?: string;
    modified_on?: string;
    type?: string;
};
type JobConfigRawDTO = {
    company_id: number;
    company_name: string;
    data?: JobConfig;
    integration: string;
};
type JobHistoryDto = {
    error_type?: string;
    filename?: string[];
    job_code?: string;
    job_id?: number;
    message?: string;
    processed_on?: string;
    status?: string;
    total_added_count?: number;
    total_initial_count?: number;
    total_suppressed_count?: number;
    total_updated_count?: number;
};
type JobMetricsDto = {
    is_run_more_than_usual?: string;
    job_code?: string;
    job_history?: JobHistoryDto[];
    total_failure_count?: number;
    total_job_runs?: number;
    total_success_count?: number;
    total_suppressed_count?: number;
    total_warning_count?: number;
};
type JobStepsDTO = {
    deleted_count?: number;
    end_count?: number;
    processed_at?: string;
    processed_start_time?: string;
    start_count?: number;
    step_execution_time?: number;
    step_name?: string;
    type?: string;
};
type JsonDocConfig = {
    prop_bean_configs?: PropBeanConfig[];
};
type KafkaMetaModel = {
    action?: string;
    batch_id?: number;
    created_on?: string;
    created_timestamp?: number;
    job_type?: string;
    trace?: string[];
};
type KafkaResponse = {
    offset?: number;
    partition?: number;
};
type LocalFileConfig = {
    archive_config?: ArchiveConfig;
    file_regex?: string;
    interval?: number;
    local_dir?: string;
    read_all_files?: boolean;
    retries?: number;
    unzip?: boolean;
    working_dir?: string;
    zip_file_regex?: string;
    zip_format?: string;
};
type Metum = {
    _id?: string;
    name?: string;
    value?: string;
};
type MongoDocConfig = {
    aggregate_pipeline?: any[];
    collection_name?: string;
    find_query?: any;
    projection_query?: any;
    prop_bean_configs?: PropBeanConfig[];
    skip_save?: boolean;
};
type OAuthConfig = {
    consumer_key?: string;
    consumer_secret?: string;
    function_name?: string;
    interval?: number;
    limit?: number;
    pages?: number;
    rest_base_url?: string;
    rest_url?: string;
    token?: string;
    token_secret?: string;
};
type ProcessConfig = {
    aws_s3_config?: AWSS3config;
    db_config?: DBConfig;
    db_param_config?: DBParamConfig;
    doc_mapping_config?: DocMappingConfig;
    email_config?: EmailConfig;
    file_config?: FileConfig;
    ftp_config?: FTPConfig;
    google_spreadsheet_config?: GoogleSpreadSheetConfig;
    http_config?: HttpConfig;
    json_doc_config?: JsonDocConfig;
    local_file_config?: LocalFileConfig;
    mongo_doc_config?: MongoDocConfig;
    oauth_config?: OAuthConfig;
    sftp_config?: SFTPConfig;
    task_step_config?: TaskStepConfig;
};
type PropBeanConfig = {
    all_param_function_name?: string;
    concat_str?: string;
    const_value?: any;
    data_type?: string;
    default_value?: any;
    destination_field?: string;
    enrich_from_master?: boolean;
    function_name?: string;
    identifier_type?: string;
    ignore_if_not_exists?: boolean;
    include?: boolean;
    index_field?: string;
    optional?: boolean;
    projection_query?: any;
    required?: boolean;
    send?: Send;
    source_field?: string;
    source_fields?: string[];
    sub_separator?: string;
    transformer_name?: string;
    validations?: any[];
    values?: string[];
};
type PropBeanDTO = {
    all_param_function_name?: string;
    concat_str?: string;
    const_value?: any;
    data_type?: string;
    default_value?: any;
    destination_field?: string;
    enrich_from_master?: boolean;
    function_name?: string;
    identifier_type?: string;
    ignore_if_not_exists?: boolean;
    include?: boolean;
    index_field?: string;
    optional?: boolean;
    projection_query?: any;
    required?: boolean;
    source_field?: string;
    source_fields?: string[];
    sub_separator?: string;
    transformer_name?: string;
};
type ResponseEnvelopeJobConfigDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigDTO;
    message?: string;
    page?: Page;
    payload?: JobConfigDTO;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeJobMetricsDto = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobMetricsDto;
    message?: string;
    page?: Page;
    payload?: JobMetricsDto;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeKafkaResponse = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: KafkaResponse;
    message?: string;
    page?: Page;
    payload?: KafkaResponse;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeListJobConfigDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigDTO[];
    message?: string;
    page?: Page;
    payload?: JobConfigDTO[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeListJobConfigListDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigListDTO[];
    message?: string;
    page?: Page;
    payload?: JobConfigListDTO[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeListJobConfigRawDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobConfigRawDTO[];
    message?: string;
    page?: Page;
    payload?: JobConfigRawDTO[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeListJobStepsDTO = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: JobStepsDTO[];
    message?: string;
    page?: Page;
    payload?: JobStepsDTO[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeListSlingshotConfigurationDetail = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: SlingshotConfigurationDetail[];
    message?: string;
    page?: Page;
    payload?: SlingshotConfigurationDetail[];
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type ResponseEnvelopeString = {
    error?: string;
    exception?: string;
    http_status?: string;
    items?: string;
    message?: string;
    page?: Page;
    payload?: string;
    status?: number;
    timestamp?: string;
    total_time_taken_in_millis?: number;
    trace_id?: string;
};
type Send = {
    processed?: boolean;
    raw?: boolean;
};
type SFTPConfig = {
    archive_config?: ArchiveConfig;
    file_regex?: string;
    host?: string;
    interval?: number;
    local_dir?: string;
    password?: string;
    password_protected?: boolean;
    port?: number;
    private_key_path?: string;
    read_all_files?: boolean;
    remote_dir?: string;
    retries?: number;
    strict_host_key_checking?: boolean;
    unzip?: boolean;
    username?: string;
    zip_file_regex?: string;
    zip_format?: string;
};
type SlingshotConfigurationDetail = {
    companies?: GCompany[];
    integration?: SlingshotIntegration;
};
type SlingshotIntegration = {
    _id?: string;
    description?: string;
    meta?: Metum[];
    name?: string;
    slug?: string;
};
type StoreConfig = {
    job_code?: string;
    process_config?: ProcessConfig;
    properties?: any;
    store_alias?: string;
    store_file_name?: string;
    store_file_regex?: string;
    storeid?: string;
};
type StoreData = {
    location_id?: string;
};
type StoreFilter = {
    exclude_tags?: string[];
    include_tags?: string[];
    query?: any;
};
type SuppressStoreModel = {
    stores?: number[];
};
type SuppressStorePayload = {
    meta?: KafkaMetaModel;
    payload?: SuppressStoreModel[];
};
type TaskConfig = {
    name?: string;
    task_config_id?: number;
    task_params?: TaskParam[];
};
type TaskDTO = {
    group_list?: GenericDTO[];
    type?: number;
};
type TaskParam = {
    name?: string;
    value?: any;
};
type TaskStepConfig = {
    task_config_group_ids?: number[];
    task_config_ids?: number[];
    task_configs?: TaskConfig[];
};
type Android = {
    api_key?: string;
    application_id?: string;
};
type App = {
    auth?: ApplicationAuth;
    channel_type?: string;
    company_id?: string;
    desc?: string;
    name?: string;
};
type AppCartConfig = {
    bulk_coupons?: boolean;
    delivery_charges?: DeliveryCharges;
    enabled?: boolean;
    max_cart_items?: number;
    min_cart_value?: number;
    revenue_engine_coupon?: boolean;
};
type AppCurrencyResponse = {
    application?: string;
    default_currency?: DefaultCurrency;
    supported_currency?: Currency[];
};
type AppDomain = {
    name?: string;
};
type AppFeature = {
    __v?: number;
    _id?: string;
    app?: string;
    cart?: CartFeature;
    common?: CommonFeature;
    created_at?: string;
    home_page?: HomePageFeature;
    landing_page?: LandingPageFeature;
    order?: OrderFeature;
    pcr?: PcrFeature;
    product_detail?: ProductDetailFeature;
    qr?: QrFeature;
    registration_page?: RegistrationPageFeature;
    updated_at?: string;
};
type AppFeatureRequest = {
    feature?: AppFeature;
};
type AppFeatureResponse = {
    feature?: AppFeature;
};
type AppInventory = {
    article_assignment?: InventoryArticleAssignment;
    brand?: InventoryBrandRule;
    franchise_enabled?: boolean;
    image?: string[];
    only_verified_products?: boolean;
    out_of_stock?: boolean;
    payment?: InventoryPaymentConfig;
    store?: InventoryStoreRule;
};
type AppInventoryCompanies = {
    company_type?: string;
    name?: string;
    uid?: number;
};
type AppInventoryConfig = {
    brand?: InventoryBrand;
    category?: InventoryCategory;
    company_store?: any[];
    discount?: InventoryDiscount;
    exclude_category?: any[];
    franchise_enabled?: boolean;
    image?: string[];
    only_verified_products?: boolean;
    out_of_stock?: boolean;
    price?: InventoryPrice;
    store?: InventoryStore;
};
type AppInventoryPartialUpdate = {
    cart?: AppCartConfig;
    comms_enabled?: boolean;
    communication?: CommunicationConfig;
    loyalty_points?: LoyaltyPointsConfig;
    payment?: AppPaymentConfig;
    reward_points?: RewardPointsConfig;
};
type AppInventoryStores = {
    _id?: string;
    company_id?: number;
    display_name?: string;
    modified_on?: string;
    name?: string;
    store_code?: string;
    store_type?: string;
    uid?: number;
};
type ApplicationDetail = {
    _id?: string;
    banner: SecureUrl;
    description: string;
    domain?: Domain;
    domains?: Domain[];
    favicon: SecureUrl;
    logo: SecureUrl;
    mobile_logo: SecureUrl;
    name: string;
};
type ApplicationInformation = {
    __v?: number;
    _id?: string;
    address?: InformationAddress;
    application?: string;
    business_highlights?: BusinessHighlights;
    copyright_text?: string;
    created_at?: string;
    links?: Links;
    social_links?: SocialLinks;
    support?: InformationSupport;
    updated_at?: string;
};
type ApplicationInventory = {
    _id?: string;
    app?: string;
    article_assignment?: ArticleAssignmentConfig;
    authentication?: AuthenticationConfig;
    business?: string;
    cart?: AppCartConfig;
    comms_enabled?: boolean;
    communication?: CommunicationConfig;
    created_at?: string;
    inventory?: AppInventoryConfig;
    logistics?: AppLogisticsConfig;
    loyalty_points?: LoyaltyPointsConfig;
    modified_by?: string;
    order?: AppOrderConfig;
    payment?: AppPaymentConfig;
    platforms?: string[];
    reward_points?: RewardPointsConfig;
    updated_at?: string;
};
type ApplicationsResponse = {
    items?: Application[];
    page?: Page;
};
type AppLogisticsConfig = {
    dp_assignment?: boolean;
    logistics_by_seller?: boolean;
    same_day_delivery?: boolean;
    serviceability_check?: boolean;
};
type AppOrderConfig = {
    enabled?: boolean;
    force_reassignment?: boolean;
    message?: string;
};
type AppPaymentConfig = {
    anonymous_cod?: boolean;
    callback_url?: CallbackUrl;
    cod_amount_limit?: number;
    cod_charges?: number;
    enabled?: boolean;
    methods?: Methods;
    mode_of_payment?: string;
    payment_selection_lock?: PaymentSelectionLock;
    source?: string;
};
type AppStoreRules = {
    brands?: any[];
    companies?: number[];
};
type AppSupportedCurrency = {
    _id?: string;
    application?: string;
    created_at?: string;
    default_currency?: DefaultCurrency;
    supported_currency?: string[];
    updated_at?: string;
};
type ArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
    rules?: ArticleAssignmentRules;
};
type ArticleAssignmentRule = {
    store_priority?: StorePriorityRule;
};
type ArticleAssignmentRules = {
    store_priority?: StorePriority;
};
type AuthenticationConfig = {
    provider?: string;
    required?: boolean;
};
type BlogLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type BrandCompanyInfo = {
    company_id?: number;
    company_name?: string;
};
type BrandsByCompanyResponse = {
    brands?: CompanyBrandInfo;
};
type BrandStoreInfo = {
    company?: OptedCompany;
    store_address?: OptedStoreAddress;
    store_code?: string;
    store_id?: number;
    store_name?: string;
    store_type?: string;
};
type BuildVersion = {
    __v?: number;
    _id?: string;
    application?: string;
    build_status?: string;
    created_at?: string;
    platform_type?: string;
    updated_at?: string;
    version_code?: number;
    version_name?: string;
};
type BuildVersionHistory = {
    latest_available_version_name?: string;
    versions?: BuildVersion;
};
type BusinessHighlights = {
    _id?: string;
    icon?: string;
    sub_title?: string;
    title?: string;
};
type CallbackUrl = {
    app?: string;
    web?: string;
};
type CartFeature = {
    google_map?: boolean;
    gst_input?: boolean;
    placing_for_customer?: boolean;
    revenue_engine_coupon?: boolean;
    staff_selection?: boolean;
};
type Charges = {
    charges?: number;
    threshold?: number;
};
type CommonFeature = {
    communication_optin_dialog?: CommunicationOptinDialogFeature;
    compare_products?: CompareProductsFeature;
    currency?: CurrencyFeature;
    deployment_store_selection?: DeploymentStoreSelectionFeature;
    feedback?: FeedbackFeature;
    listing_price?: ListingPriceFeature;
    revenue_engine?: RevenueEngineFeature;
    reward_points?: RewardPointsConfig;
};
type CommsConfig = {
    enabled?: boolean;
};
type CommunicationConfig = {
    email?: CommsConfig;
    sms?: CommsConfig;
    voice?: CommsConfig;
};
type CommunicationOptinDialogFeature = {
    visibility?: boolean;
};
type CompaniesResponse = {
    items?: AppInventoryCompanies;
    page?: Page;
};
type CompanyAboutAddress = {
    address1?: string;
    address2?: string;
    address_type?: string;
    city?: string;
    country?: string;
    pincode?: number;
    state?: string;
};
type CompanyBrandInfo = {
    brand_banner_portrait_url?: string;
    brand_banner_url?: string;
    brand_logo_url?: string;
    name?: string;
    value?: number;
};
type CompanyByBrandsRequest = {
    brands: number;
    search_text?: string;
};
type CompanyByBrandsResponse = {
    items?: BrandCompanyInfo[];
    page?: Page;
};
type CompanyValidator = {
    browser_script?: string;
    json_schema?: JsonSchema[];
};
type CompareProductsFeature = {
    enabled?: boolean;
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
type Credentials = {
    android?: Android;
    api_key?: string;
    application_id?: string;
    gcm_sender_id?: string;
    ios?: Ios;
    project_id?: string;
};
type Credit = {
    enabled?: boolean;
};
type CurrenciesResponse = {
    items?: Currency[];
};
type CurrencyConfig = {
    _id?: string;
    code?: string;
    created_at?: string;
    decimal_digits?: number;
    is_active?: boolean;
    name?: string;
    symbol?: string;
    updated_at?: string;
};
type CurrencyFeature = {
    default_currency?: string;
    type?: string;
    value?: string[];
};
type Debit = {
    auto_apply?: boolean;
    enabled?: boolean;
    strategy_channel?: string;
};
type DefaultCurrency = {
    code?: string;
    ref?: string;
};
type DeliveryCharges = {
    charges?: Charges;
    enabled?: boolean;
};
type DeploymentMeta = {
    _id?: string;
    all_stores?: boolean;
    app?: string;
    deployed_stores?: number[];
    enabled?: boolean;
    type?: string;
};
type DeploymentStoreSelectionFeature = {
    enabled?: boolean;
    type?: string;
};
type DomainAdd = {
    _id?: string;
    is_primary?: boolean;
    is_shortlink?: boolean;
    message?: string;
    name?: string;
    txt_records?: string[];
    verified?: boolean;
};
type DomainAddRequest = {
    domain?: DomainAdd;
};
type DomainsResponse = {
    domains?: Domain[];
};
type DomainStatus = {
    display?: string;
    status?: boolean;
};
type DomainStatusRequest = {
    domain_url?: string;
};
type DomainStatusResponse = {
    connected?: boolean;
    status?: DomainStatus[];
};
type DomainSuggestion = {
    currency?: string;
    is_available: boolean;
    name: string;
    price?: number;
    unsupported?: boolean;
};
type DomainSuggestionsRequest = {
    custom?: boolean;
    domain_url?: string;
};
type DomainSuggestionsResponse = {
    domains?: DomainSuggestion[];
};
type FacebookLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type FeedbackFeature = {
    enabled?: boolean;
};
type FilterOrderingStoreRequest = {
    all_stores?: boolean;
    deployed_stores?: number[];
    q?: string;
};
type Firebase = {
    credentials?: Credentials;
    enabled?: boolean;
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
type FyndRewards = {
    credentials?: FyndRewardsCredentials;
};
type FyndRewardsCredentials = {
    public_key?: string;
};
type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn[];
    page?: Page;
};
type GoogleMap = {
    credentials?: GoogleMapCredentials;
};
type GoogleMapCredentials = {
    api_key?: string;
};
type GooglePlusLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type Gtm = {
    credentials?: GtmCredentials;
    enabled?: boolean;
};
type GtmCredentials = {
    api_key?: string;
};
type HomePageFeature = {
    order_processing?: boolean;
};
type InformationAddress = {
    address_line?: string[];
    city?: string;
    country?: string;
    loc?: string;
    phone?: InformationPhone;
    pincode?: number;
};
type InformationPhone = {
    code?: string;
    number?: string;
};
type InformationSupport = {
    email?: string[];
    phone?: string[];
    timing?: string;
};
type InstagramLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type Integration = {
    __v?: number;
    _id?: string;
    companies?: any[];
    constants?: any;
    created_at?: string;
    description?: string;
    description_html?: string;
    icon?: string;
    meta?: IntegrationMeta[];
    name?: string;
    owner?: string;
    secret?: string;
    support?: string[];
    token?: string;
    updated_at?: string;
    validators?: Validators;
};
type IntegrationConfigResponse = {
    items?: IntegrationLevel[];
};
type IntegrationLevel = {
    __v?: number;
    _id?: string;
    created_at?: string;
    data?: any;
    integration?: string;
    last_patch?: LastPatch[];
    level?: string;
    meta?: IntegrationMeta[];
    opted?: boolean;
    permissions?: any[];
    token?: string;
    uid?: number;
    updated_at?: string;
};
type IntegrationMeta = {
    _id?: string;
    is_public?: boolean;
    name?: string;
    value?: string;
};
type IntegrationOptIn = {
    __v?: number;
    _id?: string;
    companies?: any[];
    constants?: string;
    created_at?: string;
    description?: string;
    description_html?: string;
    icon?: string;
    meta?: IntegrationMeta[];
    name?: string;
    owner?: string;
    secret?: string;
    support?: string[];
    token?: string;
    updated_at?: string;
    validators?: Validators;
};
type InvalidPayloadRequest = {
    message?: string;
};
type InventoryArticleAssignment = {
    post_order_reassignment?: boolean;
    rules?: ArticleAssignmentRule;
};
type InventoryBrand = {
    brands?: any[];
    criteria?: string;
};
type InventoryBrandRule = {
    brands?: number[];
    criteria?: string;
};
type InventoryCategory = {
    categories?: any[];
    criteria?: string;
};
type InventoryDiscount = {
    max?: number;
    min?: number;
};
type InventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type InventoryPrice = {
    max?: number;
    min?: number;
};
type InventoryStore = {
    criteria?: string;
    rules?: AppStoreRules;
    stores?: any[];
};
type InventoryStoreRule = {
    criteria?: string;
    rules?: StoreCriteriaRule[];
    stores?: number[];
};
type InventoryValidator = {
    browser_script?: string;
    json_schema?: JsonSchema[];
};
type Ios = {
    api_key?: string;
    application_id?: string;
};
type JsonSchema = {
    display?: string;
    key?: string;
    tooltip?: string;
    type?: string;
};
type LandingImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type LandingPageFeature = {
    continue_as_guest?: boolean;
    launch_page?: LaunchPage;
    login_btn_text?: string;
    show_domain_textbox?: boolean;
    show_register_btn?: boolean;
};
type LastPatch = {
    op?: string;
    path?: string;
    value?: string;
};
type LaunchPage = {
    page_type?: string;
    params?: any;
    query?: any;
};
type LinkedInLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type Links = {
    link?: string;
    title?: string;
};
type ListingPriceFeature = {
    sort?: string;
    value?: string;
};
type LoyaltyPointsConfig = {
    auto_apply?: boolean;
    enabled?: boolean;
};
type Methods = {
    card?: PaymentModeConfig;
    cod?: PaymentModeConfig;
    fc?: PaymentModeConfig;
    jiopp?: PaymentModeConfig;
    jp?: PaymentModeConfig;
    juspaypg?: PaymentModeConfig;
    nb?: PaymentModeConfig;
    pac?: PaymentModeConfig;
    payubizpg?: PaymentModeConfig;
    payumoneypg?: PaymentModeConfig;
    pl?: PaymentModeConfig;
    pp?: PaymentModeConfig;
    ps?: PaymentModeConfig;
    qr?: PaymentModeConfig;
    rupifipg?: PaymentModeConfig;
    simpl?: PaymentModeConfig;
    stripepg?: PaymentModeConfig;
    upi?: PaymentModeConfig;
    wl?: PaymentModeConfig;
};
type MobileAppConfigRequest = {
    app_name?: string;
    is_active?: boolean;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
};
type MobileAppConfiguration = {
    __v?: number;
    _id?: string;
    app_name?: string;
    application?: string;
    created_at?: string;
    is_active?: boolean;
    landing_image?: LandingImage;
    package_name?: string;
    platform_type?: string;
    splash_image?: SplashImage;
    updated_at?: string;
};
type Moengage = {
    credentials?: MoengageCredentials;
    enabled?: boolean;
};
type MoengageCredentials = {
    app_id?: string;
};
type OptedApplicationResponse = {
    _id?: string;
    company?: OptedCompany;
    description?: string;
    domain?: string;
    name?: string;
    opt_out_inventory?: OptOutInventory;
    opted_inventory?: OptedInventory;
};
type OptedCompany = {
    name?: string;
    uid?: number;
};
type OptedInventory = {
    items?: any;
    opt_type?: OptType;
};
type OptedStore = {
    _id?: string;
    address?: OptedStoreAddress;
    company_id?: number;
    display_name?: string;
    modified_on?: string;
    name?: string;
    store_code?: string;
    store_type?: string;
    uid?: number;
};
type OptedStoreAddress = {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    lat_long?: StoreLatLong;
    pincode?: number;
    state?: string;
};
type OptedStoreIntegration = {
    other_entity?: OtherEntity;
    other_integration?: IntegrationOptIn;
    other_opted?: boolean;
};
type OptOutInventory = {
    company: number[];
    store: number[];
};
type OptType = {
    display?: string;
    key?: string;
};
type OrderFeature = {
    buy_again?: boolean;
};
type OrderingStore = {
    _id?: string;
    address?: OptedStoreAddress;
    code?: string;
    display_name?: string;
    name?: string;
    pincode?: number;
    store_code?: string;
    store_type?: string;
    uid?: number;
};
type OrderingStoreConfig = {
    deployment_meta?: DeploymentMeta;
};
type OrderingStores = {
    __v?: number;
    _id?: string;
    all_stores?: boolean;
    app?: string;
    deployed_stores?: number[];
    enabled?: boolean;
    items?: OrderingStore[];
    page?: Page;
    type?: string;
};
type OrderingStoresResponse = {
    items?: OrderingStore[];
    page?: Page;
};
type OrderValidator = {
    browser_script?: string;
    json_schema?: JsonSchema[];
};
type OtherEntity = {
    __v?: number;
    _id?: string;
    created_at?: string;
    data?: OtherEntityData;
    integration?: string;
    last_patch?: LastPatch[];
    level?: string;
    meta?: any[];
    opted?: boolean;
    permissions?: string[];
    token?: string;
    uid?: number;
    updated_at?: string;
};
type OtherEntityData = {
    article_identifier?: string;
};
type OtherSellerApplication = {
    _id?: string;
    company?: OtherSellerCompany;
    description?: string;
    domain?: string;
    name?: string;
    opt_type?: string;
};
type OtherSellerApplications = {
    items?: OtherSellerApplication[];
    page?: Page;
};
type OtherSellerCompany = {
    name?: string;
    uid?: number;
};
type PaymentModeConfig = {
    enabled?: boolean;
};
type PaymentSelectionLock = {
    default_options?: string;
    enabled?: boolean;
    payment_identifier?: string;
};
type PcrFeature = {
    staff_selection?: boolean;
};
type PinterestLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type ProductDetailFeature = {
    request_product?: boolean;
    seller_selection?: boolean;
    similar?: string[];
    update_product_meta?: boolean;
};
type QrFeature = {
    application?: boolean;
    collections?: boolean;
    products?: boolean;
};
type RegistrationPageFeature = {
    ask_store_address?: boolean;
};
type RevenueEngineFeature = {
    enabled?: boolean;
};
type RewardPointsConfig = {
    credit?: Credit;
    debit?: Debit;
};
type Safetynet = {
    credentials?: SafetynetCredentials;
    enabled?: boolean;
};
type SafetynetCredentials = {
    api_key?: string;
};
type Segment = {
    credentials?: SegmentCredentials;
    enabled?: boolean;
};
type SegmentCredentials = {
    write_key?: string;
};
type SocialLinks = {
    blog_link?: BlogLink;
    facebook?: FacebookLink;
    google_plus?: GooglePlusLink;
    instagram?: InstagramLink;
    linked_in?: LinkedInLink;
    pinterest?: PinterestLink;
    twitter?: TwitterLink;
    vimeo?: VimeoLink;
    youtube?: YoutubeLink;
};
type SplashImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type StoreByBrandsRequest = {
    brands: number;
    company_id?: number;
    search_text?: string;
};
type StoreByBrandsResponse = {
    items?: BrandStoreInfo[];
    page?: Page;
};
type StoreCriteriaRule = {
    brands?: number[];
    companies?: number[];
};
type StoreLatLong = {
    coordinates?: number[];
    type?: string;
};
type StorePriority = {
    enabled?: boolean;
    storetype_order?: any[];
};
type StorePriorityRule = {
    enabled?: boolean;
    storetype_order?: string[];
};
type StoresResponse = {
    items?: AppInventoryStores;
    page?: Page;
};
type StoreValidator = {
    browser_script?: string;
    json_schema?: JsonSchema[];
};
type SuccessMessageResponse = {
    message?: string;
    success?: boolean;
};
type TokenResponse = {
    __v?: number;
    _id?: string;
    application?: string;
    created_at?: string;
    tokens?: Tokens;
    updated_at?: string;
};
type Tokens = {
    firebase?: Firebase;
    freshchat?: Freshchat;
    fynd_rewards?: FyndRewards;
    google_map?: GoogleMap;
    gtm?: Gtm;
    moengage?: Moengage;
    safetynet?: Safetynet;
    segment?: Segment;
};
type TwitterLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type UnhandledError = {
    message?: string;
};
type UpdateDomain = {
    _id?: string;
    is_primary?: boolean;
    is_shortlink?: boolean;
    name?: string;
    verified?: boolean;
};
type UpdateDomainTypeRequest = {
    action?: string;
    domain?: UpdateDomain;
};
type UpdateIntegrationLevelRequest = {
    items?: IntegrationLevel[];
};
type UserEmail = {
    active?: boolean;
    email?: string;
    primary?: boolean;
    verified?: boolean;
};
type UserPhoneNumber = {
    active?: boolean;
    country_code?: number;
    phone?: string;
    primary?: boolean;
    verified?: boolean;
};
type ValidationFailedResponse = {
    message?: string;
};
type Validators = {
    company?: CompanyValidator;
    inventory?: InventoryValidator;
    order?: OrderValidator;
    store?: StoreValidator;
};
type VimeoLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type YoutubeLink = {
    icon?: string;
    link?: string;
    title?: string;
};
type AbandonedCart = {
    _id: string;
    app_id?: string;
    articles: any[];
    bulk_coupon_discount?: number;
    buy_now?: boolean;
    cart_value?: number;
    cashback: any;
    checkout_mode?: string;
    cod_charges?: any;
    comment?: string;
    coupon?: any;
    created_on: string;
    delivery_charges?: any;
    discount?: number;
    expire_at: string;
    fc_index_map?: number[];
    fynd_credits?: any;
    gstin?: string;
    is_active?: boolean;
    is_archive?: boolean;
    is_default: boolean;
    last_modified: string;
    merge_qty?: boolean;
    meta?: any;
    order_id?: string;
    payment_methods?: any[];
    payment_mode?: string;
    payments?: any;
    pick_up_customer_details?: any;
    promotion?: any;
    shipments?: any[];
    uid: number;
    user_id: string;
};
type AbandonedCartResponse = {
    items?: AbandonedCart[];
    message?: string;
    page?: Page;
    result?: any;
    success?: boolean;
};
type ActionQuery = {
    product_slug?: string[];
};
type ActivePromosResponse = {
    created_on?: string;
    description?: string;
    entity_slug?: string;
    entity_type?: string;
    example?: string;
    is_hidden?: boolean;
    modified_on?: string;
    subtitle?: string;
    title?: string;
    type?: string;
};
type AddCartDetailResponse = {
    cart?: CartDetailResponse;
    message?: string;
    partial?: boolean;
    success?: boolean;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddProductCart = {
    _custom_json?: any;
    article_assignment?: any;
    article_id?: string;
    display?: string;
    extra_meta?: any;
    item_id?: number;
    item_size?: string;
    parent_item_identifiers?: any[];
    pos?: boolean;
    product_group_tags?: string[];
    quantity?: number;
    seller_id?: number;
    store_id?: number;
};
type AppliedFreeArticles = {
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
    quantity?: number;
};
type AppliedPromotion = {
    amount?: number;
    applied_free_articles?: AppliedFreeArticles[];
    article_quantity?: number;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRulesApp[];
    mrp_promotion?: boolean;
    offer_text?: string;
    ownership?: Ownership2;
    promo_id?: string;
    promotion_group?: string;
    promotion_name?: string;
    promotion_type?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
    marked?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    applied_promo_details?: AppliedPromotion[];
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    checkout_mode?: string;
    comment?: string;
    coupon_text?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    gstin?: string;
    id?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    last_modified?: string;
    message?: string;
    payment_selection_lock?: PaymentSelectionLock;
    restrict_checkout?: boolean;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type CartMetaConfigAdd = {
    bulk_coupons?: boolean;
    delivery_charges?: DeliveryCharges;
    enabled?: boolean;
    gift_display_text?: string;
    gift_pricing?: number;
    max_cart_items?: number;
    min_cart_value?: number;
    revenue_engine_coupon?: boolean;
};
type CartMetaConfigUpdate = {
    bulk_coupons?: boolean;
    delivery_charges?: DeliveryCharges;
    enabled?: boolean;
    gift_display_text?: string;
    gift_pricing?: number;
    max_cart_items?: number;
    min_cart_value?: number;
    revenue_engine_coupon?: boolean;
};
type CartProduct = {
    action?: ProductAction;
    brand?: BaseInfo;
    categories?: CategoryInfo[];
    images?: ProductImage[];
    name?: string;
    slug?: string;
    type?: string;
    uid?: number;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    article?: ProductArticle;
    availability?: ProductAvailability;
    bulk_offer?: any;
    coupon_message?: string;
    delivery_promise?: ShipmentPromise;
    discount?: string;
    identifiers: CartProductIdentifer;
    is_set?: boolean;
    key?: string;
    message?: string;
    moq?: any;
    parent_item_identifiers?: any;
    price?: ProductPriceInfo;
    price_per_unit?: ProductPriceInfo;
    product?: CartProduct;
    promo_meta?: PromoMeta;
    promotions_applied?: AppliedPromotion[];
    quantity?: number;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type CompareObject = {
    equals?: number;
    greater_than?: number;
    greater_than_equals?: number;
    less_than?: number;
    less_than_equals?: number;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type CouponAdd = {
    _schedule?: CouponSchedule;
    action?: CouponAction;
    author?: CouponAuthor;
    code: string;
    date_meta?: CouponDateMeta;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    ownership: Ownership;
    restrictions?: Restrictions;
    rule: Rule[];
    rule_definition: RuleDefinition;
    state?: State;
    tags?: string[];
    type_slug: string;
    validation?: Validation;
    validity: Validity;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CouponBreakup = {
    code?: string;
    coupon_type?: string;
    coupon_value?: number;
    description?: string;
    is_applied?: boolean;
    max_discount_value?: number;
    message?: string;
    minimum_cart_value?: number;
    sub_title?: string;
    title?: string;
    type?: string;
    uid?: string;
    value?: number;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type CouponSchedule = {
    cron?: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    start?: string;
};
type CouponsResponse = {
    items?: CouponAdd;
    page?: Page;
};
type CouponUpdate = {
    _schedule?: CouponSchedule;
    action?: CouponAction;
    author?: CouponAuthor;
    code: string;
    date_meta?: CouponDateMeta;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    ownership: Ownership;
    restrictions?: Restrictions;
    rule: Rule[];
    rule_definition: RuleDefinition;
    state?: State;
    tags?: string[];
    type_slug: string;
    validation?: Validation;
    validity: Validity;
};
type DiscountOffer = {
    apportion_discount?: boolean;
    code?: string;
    discount_amount?: number;
    discount_percentage?: number;
    discount_price?: number;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
    partial_can_ret?: boolean;
};
type DiscountRule = {
    buy_condition: string;
    discount_type: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
};
type DiscountRulesApp = {
    item_criteria?: any;
    matched_buy_rules?: string[];
    offer?: any;
    raw_offer?: any;
};
type DisplayBreakup = {
    currency_code?: string;
    currency_symbol?: string;
    display?: string;
    key?: string;
    message?: string[];
    value?: number;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    description?: string;
    remove?: DisplayMetaDict;
    subtitle?: string;
    title?: string;
};
type DisplayMeta1 = {
    description?: string;
    name?: string;
    offer_text?: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type FreeGiftItem = {
    item_brand_name?: string;
    item_id?: number;
    item_images_url?: string[];
    item_name?: string;
    item_price_details?: any;
    item_slug?: string;
};
type ItemCriteria = {
    all_items?: boolean;
    available_zones?: string[];
    buy_rules?: string[];
    cart_quantity?: CompareObject;
    cart_total?: CompareObject;
    cart_unique_item_amount?: CompareObject;
    cart_unique_item_quantity?: CompareObject;
    item_brand?: number[];
    item_category?: number[];
    item_company?: number[];
    item_exclude_brand?: number[];
    item_exclude_category?: number[];
    item_exclude_company?: number[];
    item_exclude_id?: number[];
    item_exclude_sku?: string[];
    item_exclude_store?: number[];
    item_id?: number[];
    item_size?: string[];
    item_sku?: string[];
    item_store?: number[];
};
type LoyaltyPoints = {
    applicable?: number;
    description?: string;
    is_applied?: boolean;
    total?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items: CartItem[];
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    items?: CartProductInfo[];
    message?: string;
};
type OpenApiCartServiceabilityRequest = {
    cart_items: CartItem[];
    shipping_address: ShippingAddress;
};
type OpenApiCartServiceabilityResponse = {
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    items?: CartProductInfo[];
    message?: string;
};
type OpenApiCheckoutResponse = {
    message?: string;
    order_id: string;
    order_ref_id?: string;
    success?: boolean;
};
type OpenApiErrorResponse = {
    errors?: any;
    message?: string;
    success?: boolean;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type OpenApiOrderItem = {
    amount_paid: number;
    cashback_applied: number;
    cod_charges: number;
    coupon_effective_discount: number;
    delivery_charges: number;
    discount: number;
    employee_discount?: number;
    extra_meta?: any;
    files?: OpenApiFiles[];
    loyalty_discount?: number;
    meta?: CartItemMeta;
    payment_methods: MultiTenderPaymentMethod[];
    price_effective: number;
    price_marked: number;
    product_id: number;
    quantity?: number;
    size: string;
};
type OpenApiPlatformCheckoutReq = {
    affiliate_order_id?: string;
    billing_address: ShippingAddress;
    cart_items: OpenApiOrderItem[];
    cart_value: number;
    cashback_applied: number;
    cod_charges: number;
    comment?: string;
    coupon?: string;
    coupon_code: string;
    coupon_value: number;
    currency_code?: string;
    delivery_charges: number;
    employee_discount?: any;
    files?: OpenApiFiles[];
    gstin?: string;
    loyalty_discount?: number;
    order_id?: string;
    payment_methods: MultiTenderPaymentMethod[];
    payment_mode?: string;
    shipping_address?: ShippingAddress;
};
type OperationErrorResponse = {
    message?: string;
    success?: boolean;
};
type OverrideCartItem = {
    amount_paid: number;
    discount: number;
    extra_meta?: any;
    item_id: number;
    price_effective: number;
    price_marked: number;
    promo_list?: OverrideCartItemPromo[];
    quantity?: number;
    seller_identifier?: string;
    size: string;
};
type OverrideCartItemPromo = {
    item_list?: any[];
    promo_amount: string;
    promo_desc?: string;
    promo_id: string;
    rwrd_tndr?: string;
};
type OverrideCheckoutReq = {
    aggregator: string;
    billing_address?: any;
    cart_id: string;
    cart_items: OverrideCartItem[];
    currency_code: string;
    merchant_code: string;
    order_type: string;
    ordering_store?: number;
    payment_identifier: string;
    payment_mode: string;
    shipping_address?: any;
};
type OverrideCheckoutResponse = {
    cart: any;
    data: any;
    message: string;
    order_id: string;
    success: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    networks?: string[];
    types?: string[];
    uses?: PaymentAllowValue;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type ProductAction = {
    query?: ActionQuery;
    type?: string;
    url?: string;
};
type ProductArticle = {
    _custom_json?: any;
    extra_meta?: any;
    identifier?: any;
    parent_item_identifiers?: any;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
    quantity?: number;
    seller?: BaseInfo;
    seller_identifier?: string;
    size?: string;
    store?: BaseInfo;
    type?: string;
    uid?: string;
};
type ProductAvailability = {
    available_sizes?: ProductAvailabilitySize[];
    deliverable?: boolean;
    is_valid?: boolean;
    other_store_quantity?: number;
    out_of_stock?: boolean;
    sizes?: string[];
};
type ProductAvailabilitySize = {
    display?: string;
    is_available?: boolean;
    value?: string;
};
type ProductImage = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
type ProductPrice = {
    add_on?: number;
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
    marked?: number;
    selling?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type PromiseFormatted = {
    max?: string;
    min?: string;
};
type PromiseTimestamp = {
    max?: number;
    min?: number;
};
type PromoMeta = {
    message?: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionAdd = {
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    application_id: string;
    apply_all_discount?: boolean;
    apply_exclusive?: string;
    apply_priority?: number;
    author?: PromotionAuthor;
    buy_rules: any;
    calculate_on?: string;
    code?: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    mode: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    promo_group: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    stackable?: boolean;
    visiblility?: Visibility;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionListItem = {
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    application_id: string;
    apply_all_discount?: boolean;
    apply_exclusive?: string;
    apply_priority?: number;
    author?: PromotionAuthor;
    buy_rules: any;
    calculate_on?: string;
    code?: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    mode: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    promo_group: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    stackable?: boolean;
    visiblility?: Visibility;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type PromotionPaymentModes = {
    codes?: string[];
    type: string;
    uses?: PaymentAllowValue1;
};
type PromotionSchedule = {
    cron?: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    published: boolean;
    start: string;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionUpdate = {
    _custom_json?: any;
    _schedule?: PromotionSchedule;
    application_id: string;
    apply_all_discount?: boolean;
    apply_exclusive?: string;
    apply_priority?: number;
    author?: PromotionAuthor;
    buy_rules: any;
    calculate_on?: string;
    code?: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    mode: string;
    ownership: Ownership1;
    post_order_action?: PromotionAction;
    promo_group: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    stackable?: boolean;
    visiblility?: Visibility;
};
type RawBreakup = {
    cod_charge?: number;
    convenience_fee?: number;
    coupon?: number;
    delivery_charge?: number;
    discount?: number;
    fynd_cash?: number;
    gst_charges?: number;
    mrp_total?: number;
    subtotal?: number;
    total?: number;
    vog?: number;
    you_saved?: number;
};
type Restrictions = {
    bulk_bundle?: BulkBundleRestriction;
    coupon_allowed?: boolean;
    ordering_stores?: number[];
    payments?: any;
    platforms?: string[];
    post_order?: PostOrder;
    price_range?: PriceRange;
    user_groups?: number[];
    uses?: UsesRestriction;
};
type Restrictions1 = {
    anonymous_users?: boolean;
    order_quantity?: number;
    ordering_stores?: number[];
    payments?: PromotionPaymentModes[];
    platforms?: string[];
    post_order?: PostOrder1;
    user_groups?: number[];
    user_id?: string[];
    user_registered?: UserRegistered;
    uses: UsesRestriction1;
};
type Rule = {
    discount_qty?: number;
    key?: number;
    max?: number;
    min?: number;
    value?: number;
};
type RuleDefinition = {
    applicable_on: string;
    auto_apply?: boolean;
    calculate_on: string;
    currency_code?: string;
    is_exact?: boolean;
    scope?: string[];
    type: string;
    value_type: string;
};
type ShipmentPromise = {
    formatted?: PromiseFormatted;
    timestamp?: PromiseTimestamp;
};
type ShippingAddress = {
    address?: string;
    address_type?: string;
    area?: string;
    area_code: string;
    area_code_slug?: string;
    city?: string;
    country?: string;
    country_code?: string;
    country_iso_code?: string;
    country_phone_code?: string;
    email?: string;
    landmark?: string;
    meta?: any;
    name?: string;
    phone?: number;
    pincode?: number;
    state?: string;
};
type State = {
    is_archived?: boolean;
    is_display?: boolean;
    is_public?: boolean;
};
type SuccessMessage = {
    message?: string;
    success?: boolean;
};
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    message?: string;
    success?: boolean;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
type UpdateProductCart = {
    _custom_json?: any;
    article_id?: string;
    extra_meta?: any;
    identifiers: CartProductIdentifer;
    item_id?: number;
    item_index?: number;
    item_size?: string;
    parent_item_identifiers?: any;
    quantity?: number;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type UsesRemaining = {
    app?: number;
    total?: number;
    user?: number;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type Validity = {
    priority?: number;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
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
type ConfigurationRequest = {
    terms_conditions_link?: string;
    valid_android_packages?: string[];
};
type ConfigurationRes = {
    application_id?: string;
    success?: boolean;
    terms_conditions_link?: string;
    valid_android_packages?: string[];
};
type E = {
    code?: number;
    exception?: string;
    info?: string;
    message?: string;
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
type GiveawayAudience = {
    audience_id?: string;
    current_count?: number;
};
type GiveawayResponse = {
    items?: Giveaway[];
    page?: Page;
};
type HistoryRes = {
    items?: PointsHistory[];
    page?: Page;
    points?: number;
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
type Points = {
    available?: number;
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
type Referral = {
    code?: string;
};
type RewardsAudience = {
    header_user_id?: string;
    id?: string;
};
type RewardsRule = {
    amount?: number;
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
type Schedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
};
type SetConfigurationRes = {
    success?: boolean;
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
type BadRequestObject = {
    message: string;
};
type BulkDiscount = {
    company_id: number;
    items: DiscountItems[];
};
type CancelJobResponse = {
    success: boolean;
};
type CreateUpdateDiscount = {
    app_ids: string[];
    brand_ids?: number[];
    company_id: number;
    discount_level: string;
    discount_type: string;
    extension_ids: string[];
    file_path?: string;
    is_active: boolean;
    job_type: string;
    name: string;
    store_ids?: number[];
    validity: ValidityObject;
    value?: number;
};
type DiscountItems = {
    brand_uid?: number;
    discount_type: string;
    item_code?: string;
    seller_identifier?: string;
    value: number;
};
type DiscountJob = {
    _id: string;
    app_ids?: string[];
    brand_ids?: number[];
    company_id: number;
    created_by: UserDetails;
    created_on: string;
    discount_level?: string;
    discount_type?: string;
    file_path?: string;
    is_active: boolean;
    job_type?: string;
    meta?: any;
    modified_by: UserDetails;
    modified_on: string;
    name: string;
    store_ids?: number[];
    validity: ValidityObject;
    value?: number;
};
type DownloadFileJob = {
    brand_ids?: number[];
    store_ids?: number[];
};
type FileJobRequest = {
    app_ids?: string[];
    brand_ids?: number[];
    discount_level?: string;
    discount_type?: string;
    file_path?: string;
    is_active: boolean;
    job_type?: string;
    meta?: any;
    name: string;
    store_ids?: number[];
    validity: ValidityObject;
};
type FileJobResponse = {
    body?: any;
    company_id: number;
    failed: number;
    file_type: string;
    stage: string;
    total: number;
    type: string;
};
type ListOrCalender = {
    items: DiscountJob[];
    page: Page;
};
type UserDetails = {
    user_id: string;
    username: string;
};
type ValidityObject = {
    end: string;
    start: string;
};
type AddProxyReq = {
    attached_path?: string;
    proxy_url?: string;
};
type AddProxyResponse = {
    _id?: string;
    application_id?: string;
    attached_path?: string;
    company_id?: string;
    created_at?: string;
    extension_id?: string;
    modified_at?: string;
    proxy_url?: string;
};
type APIError = {
    code?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
};
type RemoveProxyResponse = {
    data?: any;
    message?: string;
};
type Association = {
    application_id?: string[];
    company_id?: number;
    criteria?: string;
    extension_id?: string;
};
type AuthMeta = {
    secret?: string;
    type?: string;
};
type EventConfig = {
    created_on?: string;
    description?: string;
    display_name?: string;
    event_category?: string;
    event_name?: string;
    event_type?: string;
    id?: number;
    version?: string;
};
type EventConfigBase = {
    event_category?: string;
    event_name?: string;
    event_type?: string;
    version?: string;
};
type EventConfigList = {
    items?: EventConfig[];
    page?: Page;
};
type EventConfigResponse = {
    event_configs?: EventConfig[];
};
type EventPayload = {
    event_name?: string;
    event_trace_id?: string;
    event_type?: string;
    id?: number;
    message_id?: string;
    status?: boolean;
    version?: string;
};
type EventProcessedStatus = {
    attempt?: number;
    created_on?: string;
    id?: number;
    processed_on?: string;
    response_code?: string;
    response_message?: string;
    status?: boolean;
    subscriber_id?: string;
};
type SubscriberConfig = {
    association?: Association;
    auth_meta?: AuthMeta;
    custom_headers?: any;
    email_id?: string;
    event_id?: number[];
    id?: number;
    name?: string;
    status?: SubscriberStatus;
    webhook_url?: string;
};
type SubscriberConfigList = {
    items?: SubscriberResponse[];
    page?: Page;
};
type SubscriberEvent = {
    created_date?: string;
    event_id?: number;
    id?: number;
    subscriber_id?: number;
};
type SubscriberResponse = {
    association?: Association;
    auth_meta?: AuthMeta;
    created_on?: string;
    custom_headers?: any;
    email_id?: string;
    event_configs?: EventConfig[];
    id?: number;
    name?: string;
    status?: SubscriberStatus;
    updated_on?: string;
    webhook_url?: string;
};
type CreateLogResponse = {
    internal_message?: string;
    message?: string;
};
type DeviceInfo = {
    extra_meta?: any;
    user_agent?: string;
};
type EntityObj = {
    action?: string;
    entity_details?: any;
    id?: string;
    type?: string;
};
type EntityObject = {
    action?: string;
    id?: string;
    type?: string;
};
type EntityTypeObj = {
    display_name?: string;
    entity_value?: string;
};
type EntityTypesResponse = {
    items?: EntityTypeObj[];
};
type Location = {
    extra_meta?: any;
};
type LogDocs = {
    _id?: string;
    application?: string;
    company?: string;
    date?: string;
    device_info?: DeviceInfo;
    entity?: EntityObj;
    location?: Location;
    logs?: any;
    modifier?: Modifier;
    sessions?: string;
};
type LogMetaObj = {
    application?: string;
    device_info?: any;
    entity?: EntityObject;
    location?: any;
    modifier?: any;
};
type LogSchemaResponse = {
    docs?: LogDocs[];
};
type Modifier = {
    as_administrator?: boolean;
    user_details?: any;
    user_id?: string;
};
type RequestBodyAuditLog = {
    log_meta: LogMetaObj;
    log_payload: any;
};
type CreditlineDataPlatformPayload = {
    end_end?: string;
    page?: number;
    pagesize?: number;
    seller_id?: string;
    start_end?: string;
};
type CreditlineDataPlatformRequest = {
    data?: CreditlineDataPlatformPayload;
};
type CreditlineDataPlatformResponse = {
    code?: number;
    headers?: string[];
    item_count?: number;
    items?: any[];
    message?: string;
    page?: any;
    show_mr?: boolean;
};
type DownloadCreditDebitNote = {
    note_id?: string[];
};
type DownloadCreditDebitNoteRequest = {
    data?: DownloadCreditDebitNote;
};
type DownloadCreditDebitNoteResponse = {
    data?: DownloadCreditDebitNoteResponseData[];
    success?: boolean;
};
type DownloadCreditDebitNoteResponseData = {
    id?: string;
    pdf_s3_url?: string;
};
type DownloadReport = {
    end_date?: string;
    page?: number;
    pagesize?: number;
    start_date?: string;
};
type DownloadReportItems = {
    end_date?: string;
    filters?: GenerateReportFilters;
    meta?: GenerateReportMeta;
    report_id?: string;
    start_date?: string;
    type_of_request?: string;
};
type DownloadReportList = {
    item_count?: number;
    items?: DownloadReportItems[];
    page?: Page;
};
type GenerateReportFilters = {
    brand?: string[];
    channel?: string[];
    company?: string[];
};
type GenerateReportJson = {
    end_date?: string;
    headers?: string[];
    item_count?: number;
    items?: string[][];
    page?: Page;
    start_date?: string;
};
type GenerateReportMeta = {
    brand?: string;
    channel?: string;
    company?: string;
};
type GenerateReportPlatform = {
    end_date?: string;
    filters?: GenerateReportFilters;
    meta?: GenerateReportMeta;
    report_id?: string;
    start_date?: string;
};
type GenerateReportRequest = {
    data?: GenerateReportPlatform;
};
type GetAffiliate = {
    company_id?: number;
};
type GetAffiliateResponse = {
    docs?: any[];
    success?: boolean;
};
type GetDocs = {
    docs?: any[];
    items?: any[];
};
type GetEngineData = {
    filters?: GetEngineFilters;
    project?: string[];
    table_name?: string;
};
type GetEngineFilters = {
    config_field?: string;
};
type GetEngineRequest = {
    data?: GetEngineData;
};
type GetEngineResponse = {
    item_count?: number;
    items?: any[];
    page?: Page;
    success?: boolean;
};
type GetReason = {
    reason_type?: string;
};
type GetReasonRequest = {
    data?: GetReason;
};
type GetReasonResponse = {
    data?: GetDocs;
    success?: boolean;
};
type GetReportListData = {
    listing_enabled?: boolean;
    role_name?: string;
};
type GetReportListRequest = {
    data?: GetReportListData;
};
type InoviceListingPayloadDataFilters = {
    company_id?: string[];
    invoice_type?: string[];
    payment_status?: string[];
};
type InvoiceListingPayloadData = {
    end_date?: string;
    filters?: InoviceListingPayloadDataFilters;
    page?: number;
    page_size?: number;
    search?: string;
    start_date?: string;
};
type InvoiceListingRequest = {
    data?: InvoiceListingPayloadData;
};
type InvoiceListingResponse = {
    item_count?: number;
    items?: InvoiceListingResponseItems[];
    page?: Page;
    unpaid_invoice_data?: UnpaidInvoiceDataItems;
};
type InvoiceListingResponseItems = {
    amount?: string;
    company?: string;
    due_date?: string;
    invoice_date?: string;
    invoice_id?: string;
    invoice_number?: string;
    invoice_type?: string;
    is_downloadable?: boolean;
    period?: string;
    status?: string;
};
type InvoicePdfPayloadData = {
    invoice_number?: string[];
};
type InvoicePdfRequest = {
    data?: InvoicePdfPayloadData;
};
type InvoicePdfResponse = {
    data?: string[];
    error?: string[];
    success?: boolean;
};
type InvoiceTypePayloadData = {
    is_active?: boolean;
};
type InvoiceTypeRequest = {
    data?: InvoiceTypePayloadData;
};
type InvoiceTypeResponse = {
    invoice_type_list?: InvoiceTypeResponseItems[];
    payment_status_list?: InvoiceTypeResponseItems[];
    success?: boolean;
};
type InvoiceTypeResponseItems = {
    text?: string;
    value?: string;
};
type IsCreditlinePayload = {
    seller_id?: string;
};
type IsCreditlinePlatformRequest = {
    data?: IsCreditlinePayload;
};
type IsCreditlinePlatformResponse = {
    code?: number;
    is_creditline_opted?: boolean;
};
type PaymentProcessPayload = {
    amount?: string;
    currency?: string;
    invoice_number?: string;
    meta?: any;
    mode_of_payment?: string;
    platform?: string;
    seller_id?: string;
    source_reference?: string;
    total_amount?: string;
    transaction_type?: string;
};
type PaymentProcessRequest = {
    data?: PaymentProcessPayload;
};
type PaymentProcessResponse = {
    code?: number;
    message?: string;
    meta?: any;
    redirect_url?: string;
    transaction_id?: string;
};
type UnpaidInvoiceDataItems = {
    currency?: string;
    total_unpaid_amount?: number;
    total_unpaid_invoice_count?: number;
};
