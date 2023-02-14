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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcDetailsRequest, EdcDevice, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceAddUpdateResponse, EdcAddRequest, EdcDeviceListResponse, ShipmentStatus, Prices, UserDataInfo, PaymentModeInfo, ShipmentItemFulFillingStore, PlatformItem, GSTDetailsData, BagUnit, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, UserDetailsData, TrackingList, DPDetailsData, BagStateMapper, BagStatusHistory, ShipmentPayments, OrderDetailsData, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, CurrentStatus, Identifier, FinancialBreakup, BagConfigs, PlatformDeliveryAddress, BagGST, OrderBagArticle, OrderBrandName, OrderBags, FulfillingStore, ShipmentStatusData, ShipmentInfoResponse, OrderMeta, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Dates, AffiliateMeta, LockData, ShipmentTimeStamp, DebugInfo, BuyerDetails, EInvoice, EinvoiceInfo, Formatted, ShipmentMeta, PDFLinks, AffiliateDetails, B2BPODetails, BagMeta, Attributes, Item, EInvoicePortalDetails, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, StoreMeta, StoreAddress, Store, BagReturnableCancelableStatus, ArticleDetails, AffiliateBagDetails, BagGSTDetails, ReturnConfig, Dimensions, Weight, Article, Brand, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, UserData, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderPriority, MarketPlacePdf, AffiliateBag, OrderInfo, AffiliateInventoryLogisticsConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, BillingInfo, PaymentMethod, PaymentInfo, TaxInfo, ShippingInfo, ProcessingDates, LineItem, Shipment, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, Price, Size, LimitedProductData, GetProducts, GetProductBundleResponse, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, MetaFields, ApplicationItemMOQ, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, CollectionQuery, Media1, BannerImage, ImageUrls, GetCollectionDetailNest, GetCollectionListingResponse, CollectionBadge, CollectionImage, UserInfo, CollectionBanner, SeoDetail, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Media2, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, NetQuantityResponse, Image, Logo, ReturnConfigResponse, ProductPublished, Product, ProductListingResponse, TaxIdentifier, NetQuantity, Trader, CustomOrder, TeaserTag, ProductPublish, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ProductCreateUpdate, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, PriceMeta, DimensionResponse, Trader1, QuantityBase, Quantities, BrandMeta, ManufacturerResponse, ReturnConfig1, WeightResponse, CompanyMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, PriceArticle, DimensionResponse1, Quantity, QuantitiesArticle, Trader2, ArticleStoreResponse, BrandMeta1, ManufacturerResponse1, ReturnConfig2, WeightResponse1, CompanyMeta1, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, GetAddressSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, SellerPhoneNumber, UserSerializer1, LocationTimingSerializer, LocationDayWiseSerializer, LocationIntegrationType, ProductReturnConfigSerializer, UserSerializer2, GetCompanySerializer, LocationManagerSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, CompanyTaxesSerializer, ContactDetails, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, PaymentAllowValue, PaymentModes, PriceRange, UsesRemaining, UsesRestriction, BulkBundleRestriction, PostOrder, Restrictions, Validation, Validity, Rule, CouponAuthor, CouponAction, CouponDateMeta, DisplayMetaDict, DisplayMeta, State, RuleDefinition, CouponSchedule, Ownership, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, CompareObject, ItemCriteria, DisplayMeta1, Ownership1, DiscountOffer, DiscountRule, Visibility, PromotionDateMeta, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, UsesRemaining1, UsesRestriction1, PostOrder1, Restrictions1, PromotionAction, PromotionAuthor, PromotionSchedule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, BaseInfo, ProductImage, CategoryInfo, ActionQuery, ProductAction, CartProduct, ProductPrice, ProductPriceInfo, PromoMeta, FreeGiftItem, AppliedFreeArticles, Ownership2, DiscountRulesApp, AppliedPromotion, ProductAvailability, CartProductIdentifer, BasePrice, ArticlePriceInfo, ProductArticle, CartProductInfo, LoyaltyPoints, DisplayBreakup, CouponBreakup, RawBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    display_fields: string[];
    excluded_fields: string[];
    success: boolean;
    aggregators?: any[];
    created: boolean;
    app_id: string;
};
type ErrorCodeDescription = {
    description: string;
    code: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    is_active?: boolean;
    merchant_salt: string;
    key: string;
    secret: string;
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
    error: ErrorCodeAndDescription;
    success: boolean;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type IntentApp = {
    code?: string;
    package_name?: string;
    display_name?: string;
    logos?: PaymentModeLogo;
};
type PaymentModeList = {
    cod_limit?: number;
    card_token?: string;
    display_priority?: number;
    remaining_limit?: number;
    timeout?: number;
    display_name?: string;
    logo_url?: PaymentModeLogo;
    name?: string;
    card_reference?: string;
    card_type?: string;
    card_brand?: string;
    card_fingerprint?: string;
    retry_count?: number;
    intent_flow?: boolean;
    cod_limit_per_order?: number;
    exp_month?: number;
    aggregator_name: string;
    card_number?: string;
    exp_year?: number;
    merchant_code?: string;
    fynd_vpa?: string;
    card_brand_image?: string;
    card_isin?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    intent_app_error_dict_list?: IntentAppErrorList[];
    expired?: boolean;
    card_id?: string;
    card_name?: string;
    code?: string;
    intent_app?: IntentApp[];
    card_issuer?: string;
    intent_app_error_list?: string[];
    nickname?: string;
};
type RootPaymentMode = {
    save_card?: boolean;
    is_pay_by_card_pl?: boolean;
    add_card_enabled?: boolean;
    display_priority: number;
    list?: PaymentModeList[];
    display_name: string;
    anonymous_enable?: boolean;
    name: string;
    aggregator_name?: string;
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
    transfer_type: string;
    is_active: boolean;
    payouts_aggregators: any[];
    customers: any;
    more_attributes: any;
    unique_transfer_no: any;
};
type PayoutsResponse = {
    items: Payout[];
    success: boolean;
};
type PayoutBankDetails = {
    country?: string;
    account_holder?: string;
    state?: string;
    ifsc_code: string;
    branch_name?: string;
    city?: string;
    bank_name?: string;
    account_no?: string;
    pincode?: number;
    account_type: string;
};
type PayoutRequest = {
    transfer_type: string;
    is_active: boolean;
    bank_details: PayoutBankDetails;
    aggregator: string;
    unique_external_id: string;
    users: any;
};
type PayoutResponse = {
    transfer_type: string;
    success: boolean;
    is_active: boolean;
    payment_status: string;
    bank_details: any;
    created: boolean;
    aggregator: string;
    unique_transfer_no: string;
    payouts: any;
    users: any;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    success: boolean;
    is_active: boolean;
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
    success: boolean;
    data: any[];
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    config: any;
    success: boolean;
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
    is_verified_flag?: boolean;
    success: boolean;
    message: string;
    data?: any;
};
type NotFoundResourceError = {
    description: string;
    code: string;
    success: boolean;
};
type BankDetailsForOTP = {
    account_holder: string;
    ifsc_code: string;
    branch_name: string;
    bank_name: string;
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
    account_holder: string;
    transfer_mode: string;
    display_name: string;
    title: string;
    address: string;
    delights_user_name?: string;
    ifsc_code: string;
    mobile?: string;
    created_on: string;
    bank_name: string;
    beneficiary_id: string;
    modified_on: string;
    comment?: string;
    subtitle: string;
    id: number;
    account_no: string;
    email: string;
    is_active: boolean;
    branch_name?: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    payment_gateway?: string;
    extra_meta?: any;
    current_status?: string;
    payment_id?: string;
    order_id?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    name?: string;
    amount: number;
    mode: string;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    success: boolean;
    message: string;
    order_id: string;
};
type PlatformPaymentOptions = {
    mode_of_payment: string;
    cod_amount_limit?: number;
    anonymous_cod?: boolean;
    payment_selection_lock?: any;
    cod_charges?: number;
    methods: any;
    source: string;
    enabled: boolean;
    callback_url?: any;
};
type PlatfromPaymentConfig = {
    success: boolean;
    message: string;
    data: PlatformPaymentOptions;
};
type UpdatePlatformPaymentConfig = {
    payment_selection_lock?: any;
    cod_amount_limit?: number;
    anonymous_cod?: boolean;
    cod_charges?: number;
    methods: any;
};
type CODdata = {
    usages: number;
    is_active: boolean;
    user_id: string;
    remaining_limit: number;
    limit: number;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
};
type SetCODForUserRequest = {
    merchant_user_id: string;
    is_active: boolean;
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
    is_active?: boolean;
    store_id?: number;
    merchant_store_pos_code?: string;
    edc_serial_no?: string;
    terminal_serial_no?: string;
    app_id?: string;
    device_tag?: string;
};
type EdcDeviceDetailsResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcUpdateRequest = {
    is_active?: string;
    device_tag?: string;
    terminal_serial_no: string;
    store_id: number;
};
type EdcDeviceAddUpdateResponse = {
    success: boolean;
};
type EdcAddRequest = {
    is_active: string;
    store_id: number;
    merchant_store_pos_code: string;
    edc_serial_no: string;
    terminal_serial_no: string;
    device_tag: string;
};
type EdcDeviceListResponse = {
    device_list: EdcDevice[];
    success: boolean;
};
type ShipmentStatus = {
    hex_code: string;
    ops_status: string;
    title: string;
    actual_status: string;
    status: string;
};
type Prices = {
    price_effective?: number;
    tax_collected_at_source?: number;
    price_marked?: number;
    amount_paid_roundoff?: number;
    cashback_applied?: number;
    refund_credit?: number;
    coupon_value?: number;
    promotion_effective_discount?: number;
    delivery_charge?: number;
    discount?: number;
    cashback?: number;
    cod_charges?: number;
    refund_amount?: number;
    fynd_credits?: number;
    value_of_good?: number;
    amount_paid?: number;
};
type UserDataInfo = {
    avis_user_id?: string;
    gender?: string;
    mobile?: string;
    email?: string;
    name?: string;
    uid?: number;
    first_name?: string;
    is_anonymous_user?: boolean;
    last_name?: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type PlatformItem = {
    can_return?: boolean;
    l3_category?: number;
    department_id?: number;
    color?: string;
    size?: string;
    name?: string;
    images?: string[];
    can_cancel?: boolean;
    l3_category_name?: string;
    image?: string[];
    code?: string;
    l1_category?: string[];
    id?: number;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    gstin_code: string;
    value_of_good: number;
    brand_calculated_amount: number;
    gst_fee: number;
};
type BagUnit = {
    can_return?: boolean;
    shipment_id: string;
    item_quantity: number;
    prices?: Prices;
    can_cancel?: boolean;
    bag_id: number;
    item?: PlatformItem;
    total_shipment_bags: number;
    gst?: GSTDetailsData;
    ordering_channel: string;
    status: any;
};
type ShipmentItem = {
    payment_methods?: any;
    channel?: any;
    created_at: string;
    shipment_status?: ShipmentStatus;
    prices?: Prices;
    fulfilling_centre: string;
    user?: UserDataInfo;
    total_shipments_in_order: number;
    total_bags_count: number;
    shipment_created_at: number;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    sla?: any;
    application?: any;
    bags?: BagUnit[];
    id: string;
};
type FilterInfoOption = {
    text: string;
    name?: string;
    value?: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    text: string;
    type: string;
    value: string;
};
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    page?: any;
    filters?: FiltersInfo[];
    applied_filters?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type UserDetailsData = {
    state: string;
    email?: string;
    city: string;
    name: string;
    phone: string;
    address: string;
    pincode: string;
    country: string;
};
type TrackingList = {
    text: string;
    time?: string;
    status: string;
    is_current?: boolean;
    is_passed?: boolean;
};
type DPDetailsData = {
    name?: string;
    gst_tag?: string;
    awb_no?: string;
    pincode?: string;
    eway_bill_id?: string;
    country?: string;
    track_url?: string;
    id?: number;
};
type BagStateMapper = {
    notify_customer?: boolean;
    name: string;
    app_display_name?: string;
    bs_id: number;
    state_type: string;
    journey_type: string;
    is_active?: boolean;
    app_facing?: boolean;
    display_name: string;
    app_state_name?: string;
};
type BagStatusHistory = {
    shipment_id?: string;
    forward?: boolean;
    updated_at?: string;
    bsh_id?: number;
    delivery_awb_number?: string;
    created_at?: string;
    bag_state_mapper?: BagStateMapper;
    reasons?: any[];
    app_display_name?: string;
    state_id?: number;
    kafka_sync?: boolean;
    bag_id?: number;
    state_type?: string;
    store_id?: number;
    delivery_partner_id?: number;
    status: string;
    display_name?: string;
};
type ShipmentPayments = {
    logo?: string;
    mode?: string;
    source?: string;
};
type OrderDetailsData = {
    fynd_order_id: string;
    order_value?: string;
    cod_charges?: string;
    source?: string;
    order_date?: string;
    ordering_channel?: string;
    tax_details?: any;
    ordering_channel_logo?: any;
    affiliate_id?: string;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type AppliedPromos = {
    promo_id?: string;
    promotion_type?: string;
    amount?: number;
    discount_rules?: DiscountRules[];
    article_quantity?: number;
    buy_rules?: BuyRules[];
    promotion_name?: string;
    mrp_promotion?: boolean;
};
type CurrentStatus = {
    current_status_id: number;
    shipment_id?: string;
    delivery_awb_number?: string;
    created_at?: string;
    updated_at?: number;
    bag_state_mapper?: BagStateMapper;
    state_id?: number;
    kafka_sync?: boolean;
    bag_id?: number;
    store_id?: number;
    delivery_partner_id?: number;
    state_type?: string;
    status?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    price_effective: number;
    tax_collected_at_source?: number;
    price_marked: number;
    hsn_code: string;
    cashback_applied: number;
    added_to_fynd_cash: boolean;
    coupon_value: number;
    coupon_effective_discount: number;
    transfer_price: number;
    amount_paid: number;
    discount: number;
    value_of_good: number;
    total_units: number;
    promotion_effective_discount: number;
    gst_tax_percentage: number;
    item_name: string;
    refund_credit: number;
    delivery_charge: number;
    cod_charges: number;
    fynd_credits: number;
    gst_fee: number;
    identifiers: Identifier;
    amount_paid_roundoff?: number;
    size: string;
    gst_tag: string;
    cashback: number;
    brand_calculated_amount: number;
};
type BagConfigs = {
    is_active: boolean;
    allow_force_return: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
};
type PlatformDeliveryAddress = {
    state?: string;
    address2?: string;
    longitude?: number;
    created_at?: string;
    updated_at?: string;
    email?: string;
    city?: string;
    version?: string;
    address_type?: string;
    area?: string;
    phone?: string;
    contact_person?: string;
    landmark?: string;
    address_category?: string;
    pincode?: string;
    address1?: string;
    country?: string;
    latitude?: number;
};
type BagGST = {
    hsn_code?: string;
    gst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
    gst_tag?: string;
    gstin_code?: string;
    gst_fee?: number;
    value_of_good?: number;
    brand_calculated_amount?: number;
};
type OrderBagArticle = {
    identifiers?: any;
    uid?: string;
    return_config?: any;
};
type OrderBrandName = {
    company?: string;
    created_on: string;
    modified_on?: string;
    logo: string;
    brand_name: string;
    id: number;
};
type OrderBags = {
    can_return?: boolean;
    item?: PlatformItem;
    display_name?: string;
    applied_promos?: AppliedPromos[];
    prices?: Prices;
    bag_id: number;
    current_status?: CurrentStatus;
    entity_type?: string;
    financial_breakup?: FinancialBreakup;
    quantity?: number;
    can_cancel?: boolean;
    bag_configs?: BagConfigs;
    delivery_address?: PlatformDeliveryAddress;
    seller_identifier?: string;
    line_number?: number;
    gst_details?: BagGST;
    parent_promo_bags?: any;
    article?: OrderBagArticle;
    brand?: OrderBrandName;
    identifier?: string;
};
type FulfillingStore = {
    state: string;
    store_name: string;
    meta: any;
    city: string;
    phone: string;
    address: string;
    pincode: string;
    code: string;
    fulfillment_channel: string;
    contact_person: string;
    country: string;
    id: number;
};
type ShipmentStatusData = {
    shipment_id?: string;
    created_at?: string;
    bag_list?: string[];
    status?: string;
    id?: number;
};
type ShipmentInfoResponse = {
    can_return?: boolean;
    invoice: any;
    shipment_id: string;
    current_shipment_status: any;
    refund_text?: string;
    enable_tracking?: boolean;
    due_date?: string;
    is_fynd_coupon: boolean;
    fyndstore_emp: any;
    email_id: string;
    go_green?: boolean;
    secured_delivery_flag?: string;
    billing_details?: UserDetailsData;
    forward_tracking_list?: any[];
    items: any[];
    tracking_list?: TrackingList[];
    platform_logo: boolean;
    dp_details?: DPDetailsData;
    total_bags?: number;
    journey_type?: string;
    child_nodes?: string[];
    can_break: string;
    is_pdsr?: string;
    coupon?: any;
    bag_status_history?: BagStatusHistory[];
    vertical?: string;
    prices?: Prices;
    shipment_images?: string[];
    credit_note_id: string;
    ordering_store: any;
    total_items?: number;
    shipment_quantity?: number;
    forward_shipment_status?: any[];
    enable_dp_tracking?: boolean;
    delivery_details?: UserDetailsData;
    payments?: ShipmentPayments;
    affiliate_shipment_id: string;
    bank_data?: any;
    order?: OrderDetailsData;
    custom_meta?: any[];
    order_created_time?: string;
    is_not_fynd_source: boolean;
    refund_details?: any;
    pay_button?: string;
    priority_text?: string;
    lock_status: string;
    status_progress: number;
    packaging_type?: string;
    can_cancel?: boolean;
    picked_date?: string;
    user_id: string;
    bags?: OrderBags[];
    fulfilling_store?: FulfillingStore;
    user_info?: any;
    payment_mode?: string;
    status?: ShipmentStatusData;
    is_packaging_order: boolean;
    escalation?: any;
    tracking_url: string;
    company: any;
    is_fynd_store?: string;
    order_type: string;
    delivery_status: any[];
    gst_details?: GSTDetailsData;
    shipment_status?: string;
    forward_order_status?: any[];
    kirana_store_id?: string;
    is_invoiced: boolean;
    order_status: any;
    delivery_slot?: any;
    user_agent?: string;
    beneficiary_details?: boolean;
    mid?: string;
    operational_status?: string;
    replacement_details?: string;
};
type OrderMeta = {
    order_tags?: any[];
    currency_symbol?: string;
    extra_meta?: any;
    order_type?: string;
    payment_type?: string;
    employee_id?: number;
    comment?: string;
    ordering_store?: number;
    customer_note?: string;
    staff?: any;
    order_child_entities?: string[];
    cart_id?: number;
    order_platform?: string;
    files?: any[];
    mongo_cart_id?: number;
};
type OrderDict = {
    meta?: OrderMeta;
    order_date: string;
    fynd_order_id: string;
    payment_methods?: any;
};
type PlatformShipment = {
    shipment_id: string;
    billing_details?: UserDetailsData;
    tracking_list?: TrackingList[];
    platform_logo?: string;
    dp_details?: DPDetailsData;
    total_bags?: number;
    journey_type?: string;
    coupon?: any;
    bag_status_history?: BagStatusHistory[];
    vertical?: string;
    prices?: Prices;
    shipment_images?: string[];
    total_items?: number;
    shipment_quantity?: number;
    enable_dp_tracking?: boolean;
    delivery_details?: UserDetailsData;
    payments?: ShipmentPayments;
    order?: OrderDetailsData;
    custom_meta?: any[];
    priority_text?: string;
    packaging_type?: string;
    picked_date?: string;
    bags?: OrderBags[];
    fulfilling_store?: FulfillingStore;
    payment_mode?: string;
    status?: ShipmentStatusData;
    gst_details?: GSTDetailsData;
    shipment_status?: string;
    delivery_slot?: any;
    user_agent?: string;
    operational_status?: string;
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    success: boolean;
    shipments?: PlatformShipment[];
};
type SubLane = {
    text?: string;
    actions?: any[];
    index?: number;
    total_items?: number;
    value?: string;
};
type SuperLane = {
    options?: SubLane[];
    text: string;
    total_items?: number;
    value: string;
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
    display?: string;
    value?: string;
};
type PlatformOrderItems = {
    order_created_time?: string;
    channel?: PlatformChannel;
    order_id?: string;
    shipments?: PlatformShipment[];
    meta?: any;
    total_order_value?: number;
    breakup_values?: PlatformBreakupValues[];
    order_value?: number;
    user_info?: UserDataInfo;
    payment_mode?: string;
};
type OrderListingResponse = {
    total_count?: number;
    page?: Page;
    lane?: string;
    success?: boolean;
    message?: string;
    items?: PlatformOrderItems[];
};
type Options = {
    text?: string;
    value?: number;
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
    updated_at?: string;
    status?: string;
    raw_status?: string;
    meta?: any;
    awb?: string;
    last_location_recieved_at?: string;
    account_name?: string;
    shipment_type?: string;
    updated_time?: string;
    reason?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type AdvanceFilterInfo = {
    action_centre?: FiltersInfo[];
    processed?: FiltersInfo[];
    returned?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    filters?: FiltersInfo[];
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
    report_type?: string;
    report_requested_at?: string;
    report_id?: string;
    request_details?: any;
    s3_key?: string;
    report_created_at?: string;
    status?: string;
    display_name?: string;
    report_name?: string;
};
type JioCodeUpsertDataSet = {
    jio_code?: string;
    article_id?: string;
    company_id?: string;
    item_id?: string;
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
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
    trace_id?: string;
    identifier?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    invoice?: any;
    label?: any;
    store_name?: string;
    data?: any;
    invoice_status?: string;
    do_invoice_label_generated: boolean;
    store_code?: string;
    store_id?: string;
    company_id?: string;
    batch_id: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type URL = {
    url?: string;
};
type FileResponse = {
    namespace?: string;
    tags?: string[];
    content_type?: string;
    file_name?: string;
    size?: number;
    upload?: FileUploadResponse;
    cdn?: URL;
    method?: string;
    operation?: string;
    file_path?: string;
};
type bulkListingData = {
    failed?: number;
    successful?: number;
    processing?: number;
    failed_shipments?: any[];
    batch_id?: string;
    successful_shipments?: any[];
    store_name?: string;
    excel_url?: string;
    processing_shipments?: string[];
    uploaded_on?: string;
    store_id?: number;
    company_id?: number;
    user_name?: string;
    user_id?: string;
    total?: number;
    store_code?: string;
    status?: string;
    file_name?: string;
    id?: string;
};
type BulkListingPage = {
    has_previous?: boolean;
    current?: number;
    size?: number;
    has_next?: boolean;
    total?: number;
    type?: string;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    error?: string;
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
    status?: boolean;
    message?: string;
};
type BulkActionDetailsDataField = {
    successful_shipment_ids?: string[];
    total_shipments_count?: number;
    successful_shipments_count?: number;
    failed_shipments_count?: number;
    processing_shipments_count?: number;
    company_id?: string;
    batch_id?: string;
};
type BulkActionDetailsResponse = {
    data?: BulkActionDetailsDataField[];
    error?: string[];
    failed_records?: string[];
    uploaded_by?: string;
    user_id?: string;
    uploaded_on?: string;
    success?: string;
    message?: string;
    status?: boolean;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type AffiliateMeta = {
    order_item_id?: string;
    coupon_code?: string;
    channel_shipment_id?: string;
    quantity?: number;
    channel_order_id?: string;
    due_date?: string;
    loyalty_discount?: number;
    size_level_total_qty?: number;
    employee_discount?: number;
    is_priority?: boolean;
    box_type?: string;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type BuyerDetails = {
    state: string;
    city: string;
    name: string;
    address: string;
    pincode: number;
    gstin: string;
    ajio_site_id?: string;
};
type EInvoice = {
    error_message?: string;
    acknowledge_date?: string;
    signed_qr_code?: string;
    acknowledge_no?: number;
    error_code?: string;
    irn?: string;
    signed_invoice?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentMeta = {
    return_details?: any;
    dp_name?: string;
    fulfilment_priority_text?: string;
    due_date?: string;
    return_awb_number?: string;
    lock_data?: LockData;
    weight: number;
    auto_trigger_dp_assignment_acf: boolean;
    po_number?: string;
    store_invoice_updated_date?: string;
    box_type?: string;
    awb_number?: string;
    bag_weight?: any;
    forward_affiliate_order_id?: string;
    b2c_buyer_details?: any;
    return_store_node?: number;
    shipment_weight?: number;
    dp_sort_key?: string;
    timestamp?: ShipmentTimeStamp;
    dp_id?: string;
    return_affiliate_shipment_id?: string;
    external?: any;
    ewaybill_info?: any;
    same_store_available: boolean;
    marketplace_store_id?: string;
    debug_info?: DebugInfo;
    b2b_buyer_details?: BuyerDetails;
    order_type?: string;
    assign_dp_from_sb?: boolean;
    shipment_volumetric_weight?: number;
    packaging_name?: string;
    forward_affiliate_shipment_id?: string;
    return_affiliate_order_id?: string;
    dp_options?: any;
    einvoice_info?: EinvoiceInfo;
    formatted?: Formatted;
};
type PDFLinks = {
    label_a6?: string;
    invoice?: string;
    label?: string;
    invoice_type: string;
    credit_note_url?: string;
    invoice_pos?: string;
    invoice_a4?: string;
    label_type: string;
    label_pos?: string;
    po_invoice?: string;
    label_a4?: string;
    b2b?: string;
    invoice_a6?: string;
};
type AffiliateDetails = {
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    ad_id?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    shipment_meta: ShipmentMeta;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    po_line_amount?: number;
    item_base_price?: number;
    partial_can_ret?: boolean;
    po_tax_amount?: number;
    docker_number?: string;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Attributes = {
    essential?: string;
    gender?: string[];
    primary_color?: string;
    primary_material?: string;
    name?: string;
    marketer_address?: string;
    marketer_name?: string;
    brand_name?: string;
    primary_color_hex?: string;
};
type Item = {
    can_return?: boolean;
    l3_category?: number;
    meta?: any;
    color?: string;
    l3_category_name?: string;
    brand_id: number;
    l2_category?: string[];
    l1_category?: string[];
    branch_url?: string;
    slug_key: string;
    department_id?: number;
    webstore_product_url?: string;
    image: string[];
    code?: string;
    item_id: number;
    l1_category_id?: number;
    gender?: string;
    can_cancel?: boolean;
    attributes: Attributes;
    l2_category_id?: number;
    size: string;
    name: string;
    last_updated_at?: string;
    brand: string;
};
type EInvoicePortalDetails = {
    user?: string;
    username?: string;
    password?: string;
};
type Document = {
    legal_name: string;
    url?: string;
    value: string;
    verified: boolean;
    ds_type: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    enabled: boolean;
    username?: string;
    password?: string;
    user?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type StoreMeta = {
    einvoice_portal_details?: EInvoicePortalDetails;
    documents?: StoreDocuments;
    additional_contact_details?: any;
    notification_emails?: string[];
    stage: string;
    timing?: any[];
    ewaybill_portal_details?: any;
    gst_credentials: StoreGstCredentials;
    product_return_config?: any;
    gst_number?: string;
    display_name: string;
};
type StoreAddress = {
    address2?: string;
    longitude: number;
    city: string;
    contact_person: string;
    address1: string;
    address_type: string;
    version?: string;
    area?: string;
    country_code: string;
    address_category: string;
    landmark?: string;
    pincode: number;
    country: string;
    state: string;
    created_at: string;
    updated_at: string;
    email?: string;
    phone: string;
    latitude: number;
};
type Store = {
    address2?: string;
    longitude: number;
    meta: StoreMeta;
    city: string;
    mall_area?: string;
    alohomora_user_id?: number;
    parent_store_id?: number;
    brand_id?: any;
    fulfillment_channel: string;
    contact_person: string;
    address1: string;
    is_enabled_for_recon?: boolean;
    location_type: string;
    order_integration_id?: string;
    code?: string;
    is_active?: boolean;
    company_id: number;
    store_address_json?: StoreAddress;
    mall_name?: string;
    store_email: string;
    vat_no?: string;
    is_archived?: boolean;
    pincode: string;
    login_username: string;
    country: string;
    brand_store_tags?: string[];
    state: string;
    packaging_material_count?: number;
    store_active_from?: string;
    created_at: string;
    updated_at?: string;
    name: string;
    phone: number;
    latitude: number;
    s_id: string;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
};
type ArticleDetails = {
    status?: any;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    employee_discount?: number;
    affiliate_bag_id: string;
};
type BagGSTDetails = {
    tax_collected_at_source: number;
    hsn_code: string;
    gst_tax_percentage: number;
    is_default_hsn_code?: boolean;
    cgst_tax_percentage: number;
    sgst_gst_fee: string;
    igst_tax_percentage: number;
    gst_tag: string;
    sgst_tax_percentage: number;
    gstin_code?: string;
    hsn_code_id: string;
    gst_fee: number;
    cgst_gst_fee: string;
    igst_gst_fee: string;
    value_of_good: number;
    brand_calculated_amount: number;
};
type ReturnConfig = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Dimensions = {
    height?: number;
    unit?: string;
    length?: number;
    width?: number;
    is_default?: boolean;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type Article = {
    return_config?: ReturnConfig;
    size: string;
    is_set?: boolean;
    child_details?: any;
    a_set?: any;
    dimensions?: Dimensions;
    weight?: Weight;
    uid: string;
    raw_meta?: any;
    code?: string;
    esp_modified?: any;
    identifiers: Identifier;
    _id: string;
    seller_identifier: string;
};
type Brand = {
    invoice_prefix?: string;
    pickup_location?: string;
    company: string;
    script_last_ran?: string;
    created_on?: number;
    is_virtual_invoice?: boolean;
    credit_note_expiry_days?: number;
    start_date?: string;
    credit_note_allowed?: boolean;
    modified_on?: number;
    brand_id: number;
    logo?: string;
    brand_name: string;
};
type BagDetailsPlatformResponse = {
    shipment_id?: string;
    dates?: Dates;
    affiliate_details?: AffiliateDetails;
    meta?: BagMeta;
    item: Item;
    bag_update_time?: number;
    journey_type: string;
    display_name?: string;
    tags?: string[];
    b_id: number;
    applied_promos?: any[];
    bag_status_history?: BagStatusHistory;
    prices: Prices;
    ordering_store?: Store;
    current_status: BagStatusHistory;
    order_integration_id?: string;
    entity_type?: string;
    restore_promos?: any;
    financial_breakup: FinancialBreakup[];
    original_bag_list?: number[];
    qc_required?: any;
    quantity?: number;
    reasons?: any[];
    current_operational_status: BagStatusHistory;
    b_type?: string;
    status: BagReturnableCancelableStatus;
    seller_identifier?: string;
    article_details?: ArticleDetails;
    line_number?: number;
    affiliate_bag_details: AffiliateBagDetails;
    gst_details: BagGSTDetails;
    parent_promo_bags?: any;
    no_of_bags_order?: number;
    restore_coupon?: boolean;
    article: Article;
    brand: Brand;
    bag_status: BagStatusHistory[];
    operational_status?: string;
    identifier?: string;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    page_type: string;
    current: number;
    item_total: number;
    size: number;
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
    status: number;
    message: string;
    error_trace?: string;
};
type StoreReassign = {
    reason_ids?: number[];
    set_id?: string;
    bag_id?: number;
    affiliate_order_id?: string;
    mongo_article_id?: string;
    affiliate_id?: string;
    item_id?: string;
    affiliate_bag_id?: string;
    fynd_order_id?: string;
    store_id: number;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
    id?: string;
    affiliate_id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    action_type: string;
    action: string;
    entities: Entities[];
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    is_locked?: boolean;
    affiliate_bag_id?: string;
    bag_id?: number;
    affiliate_order_id?: string;
};
type CheckResponse = {
    is_shipment_locked?: boolean;
    shipment_id?: string;
    affiliate_shipment_id?: string;
    status?: string;
    original_filter?: OriginalFilter;
    affiliate_id?: string;
    lock_status?: boolean;
    is_bag_locked?: boolean;
    bags?: Bags[];
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    check_response?: CheckResponse[];
    message?: string;
};
type AnnouncementResponse = {
    created_at?: string;
    platform_name?: string;
    to_datetime?: string;
    platform_id?: string;
    title?: string;
    from_datetime?: string;
    description?: string;
    id: number;
    logo_url?: string;
    company_id?: number;
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
type Products = {
    quantity?: number;
    line_number?: number;
    identifier?: string;
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
type ShipmentsRequest = {
    products?: Products[];
    data_updates?: DataUpdates;
    identifier: string;
    reasons?: ReasonsData;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    status?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    code?: string;
    status?: number;
    exception?: string;
    message?: string;
    stack_trace?: string;
    final_state?: any;
    meta?: any;
    identifier?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    pincode: string;
    phone: number;
    first_name: string;
    address2?: string;
    address1?: string;
    city: string;
    state: string;
    email: string;
    country: string;
    mobile: number;
    last_name: string;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type ArticleDetails1 = {
    _id: string;
    weight: any;
    category: any;
    dimension: any;
    quantity: number;
    brand_id: number;
    attributes: any;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_id: number;
    fulfillment_type: string;
};
type ShipmentDetails = {
    fulfillment_id: number;
    affiliate_shipment_id: string;
    dp_id?: number;
    articles: ArticleDetails1[];
    box_type?: string;
    meta?: any;
    shipments: number;
};
type ShipmentConfig = {
    to_pincode: string;
    location_details?: LocationDetails;
    action: string;
    shipment: ShipmentDetails[];
    payment_mode: string;
    journey: string;
    source: string;
    identifier: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderPriority = {
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    affiliate_meta: any;
    modified_on: string;
    _id: string;
    hsn_code_id: string;
    item_size: string;
    amount_paid: number;
    price_marked: number;
    delivery_charge: number;
    fynd_store_id: string;
    seller_identifier: string;
    sku: string;
    item_id: number;
    transfer_price: number;
    avl_qty: number;
    identifier: any;
    store_id: number;
    pdf_links?: MarketPlacePdf;
    discount: number;
    unit_price: number;
    affiliate_store_id: string;
    quantity: number;
    price_effective: number;
    company_id: number;
};
type OrderInfo = {
    coupon?: string;
    user: UserData;
    billing_address: OrderUser;
    payment?: any;
    items: any;
    shipment?: ShipmentData;
    payment_mode: string;
    affiliate_order_id?: string;
    order_value: number;
    discount: number;
    cod_charges: number;
    order_priority?: OrderPriority;
    shipping_address: OrderUser;
    delivery_charges: number;
    bags: AffiliateBag[];
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    payment?: AffiliateInventoryPaymentConfig;
    order?: AffiliateInventoryOrderConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    created_at: string;
    description?: string;
    token: string;
    id: string;
    secret: string;
    owner: string;
    name: string;
    updated_at: string;
    meta?: AffiliateAppConfigMeta[];
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
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
    article_lookup?: string;
    affiliate: Affiliate;
    store_lookup?: string;
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    bag_end_state?: string;
};
type CreateOrderPayload = {
    affiliate_id: string;
    order_info: OrderInfo;
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
    display_text: string;
    slug: string;
    id: number;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    user: string;
    ticket_url?: string;
    l3_detail?: string;
    bag_id?: number;
    message: string;
    ticket_id?: string;
    l1_detail?: string;
    type: string;
    createdat: string;
    l2_detail?: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    shipment_id: number;
    payment_mode: string;
    order_id: string;
    message: string;
    brand_name: string;
    phone_number: number;
    country_code: string;
    amount_paid: number;
    customer_name: string;
};
type SendSmsPayload = {
    slug: string;
    bag_id: number;
    data?: SmsDataPayload;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    bag_list?: number[];
    shipment_id?: string;
    status?: string;
    id: number;
    meta: Meta;
    remarks?: string;
};
type OrderStatusData = {
    errors?: string[];
    order_details: OrderDetails;
    shipment_details?: ShipmentDetail[];
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    qc_required: string;
    shipment_ids?: string[];
    order_type: string;
    dp_id: number;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type Tax = {
    breakup?: any[];
    amount: any;
    name: string;
    rate: number;
};
type Charge = {
    tax?: Tax;
    code?: string;
    amount: any;
    name: string;
    type: string;
};
type BillingInfo = {
    alternate_email?: string;
    country: string;
    title?: string;
    external_customer_code?: string;
    primary_email: string;
    gender?: string;
    state: string;
    country_code?: string;
    floor_no?: string;
    pincode: string;
    house_no?: string;
    address2?: string;
    address1: string;
    city: string;
    alternate_mobile_number?: string;
    middle_name?: string;
    first_name: string;
    customer_code?: string;
    state_code?: string;
    primary_mobile_number: string;
    last_name?: string;
};
type PaymentMethod = {
    collect_by: string;
    transaction_data?: any;
    amount: number;
    name: string;
    mode: string;
    refund_by: string;
    meta?: any;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type ShippingInfo = {
    alternate_email?: string;
    country: string;
    title?: string;
    external_customer_code?: string;
    primary_email: string;
    gender?: string;
    state: string;
    landmark?: string;
    country_code?: string;
    floor_no?: string;
    pincode: string;
    house_no?: string;
    address2?: string;
    address1: string;
    city: string;
    address_type?: string;
    alternate_mobile_number?: string;
    middle_name?: string;
    shipping_type?: string;
    slot?: any[];
    first_name: string;
    customer_code?: string;
    state_code?: string;
    primary_mobile_number: string;
    geo_location?: any;
    last_name?: string;
};
type ProcessingDates = {
    dp_pickup_slot?: any;
    confirm_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_by_date?: string;
    pack_by_date?: string;
    dispatch_after_date?: string;
};
type LineItem = {
    charges?: Charge[];
    external_line_id?: string;
    quantity?: number;
    seller_identifier: string;
    custom_messasge?: string;
    meta?: any;
};
type Shipment = {
    processing_dates?: ProcessingDates;
    external_shipment_id?: string;
    priority?: number;
    line_items: LineItem[];
    location_id: number;
    meta?: any;
};
type CreateOrderAPI = {
    currency_info?: any;
    charges?: Charge[];
    external_creation_date?: string;
    billing_info: BillingInfo;
    payment_info: PaymentInfo;
    tax_info?: TaxInfo;
    external_order_id?: string;
    meta?: any;
    shipping_info: ShippingInfo;
    shipments: Shipment[];
};
type CreateOrderErrorReponse = {
    code?: string;
    status: number;
    exception?: string;
    message: string;
    stack_trace?: string;
    request_id?: string;
    meta?: string;
    info?: any;
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
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
    source?: string;
};
type CreateChannelConfig = {
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
    location_reassignment?: boolean;
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
    mobile: number;
    end_date: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    is_active?: boolean;
    app_id?: string;
    result: SearchKeywordResult;
    words?: string[];
    _custom_json?: any;
};
type GetSearchWordsData = {
    is_active?: boolean;
    app_id?: string;
    result?: any;
    uid?: string;
    words?: string[];
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
    type?: string;
    url?: string;
    aspect_ratio?: string;
};
type AutocompletePageAction = {
    params?: any;
    query?: any;
    type?: string;
    url?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    _custom_json?: any;
    logo?: Media;
    action?: AutocompleteAction;
    display?: string;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    app_id?: string;
    words?: string[];
    _custom_json?: any;
    results?: AutocompleteResult[];
};
type GetAutocompleteWordsData = {
    app_id?: string;
    uid?: string;
    words?: string[];
    _custom_json?: any;
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    app_id?: string;
    results?: any[];
    words?: string[];
};
type ProductBundleItem = {
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    min_quantity: number;
    product_uid: number;
    max_quantity: number;
    allow_remove?: boolean;
};
type GetProductBundleCreateResponse = {
    created_by?: any;
    created_on?: string;
    products: ProductBundleItem[];
    slug: string;
    choice: string;
    is_active: boolean;
    same_store_assignment?: boolean;
    meta?: any;
    id?: string;
    name: string;
    modified_by?: any;
    logo?: string;
    modified_on?: string;
    page_visibility?: string[];
    company_id?: number;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    created_by?: any;
    created_on?: string;
    products: ProductBundleItem[];
    slug: string;
    choice: string;
    is_active: boolean;
    same_store_assignment?: boolean;
    meta?: any;
    name: string;
    modified_by?: any;
    logo?: string;
    modified_on?: string;
    page_visibility?: string[];
    company_id?: number;
};
type ProductBundleUpdateRequest = {
    products: ProductBundleItem[];
    slug: string;
    choice: string;
    is_active: boolean;
    same_store_assignment?: boolean;
    meta?: any;
    name: string;
    modified_by?: any;
    logo?: string;
    modified_on?: string;
    page_visibility?: string[];
    company_id?: number;
};
type Price = {
    min_effective?: number;
    min_marked?: number;
    max_effective?: number;
    currency?: string;
    max_marked?: number;
};
type Size = {
    is_available?: boolean;
    quantity?: number;
    display?: string;
    value?: string;
};
type LimitedProductData = {
    price?: any;
    short_description?: string;
    slug?: string;
    sizes?: string[];
    country_of_origin?: string;
    images?: string[];
    uid?: number;
    quantity?: number;
    name?: string;
    item_code?: string;
    identifier?: any;
    attributes?: any;
};
type GetProducts = {
    price?: Price;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    product_uid?: number;
    min_quantity?: number;
    product_details?: LimitedProductData;
    max_quantity?: number;
    allow_remove?: boolean;
};
type GetProductBundleResponse = {
    products?: GetProducts[];
    slug?: string;
    choice?: string;
    is_active?: boolean;
    same_store_assignment?: boolean;
    meta?: any;
    name?: string;
    logo?: string;
    page_visibility?: string[];
    company_id?: number;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    title: string;
    image?: string;
    brand_id?: number;
    created_by?: any;
    tag?: string;
    created_on?: string;
    active?: boolean;
    id?: string;
    name: string;
    modified_by?: any;
    guide?: Guide;
    subtitle?: string;
    description?: string;
    modified_on?: string;
    company_id?: number;
};
type SizeGuideResponse = {
    created_by?: any;
    title?: string;
    brand_id?: number;
    created_on?: string;
    tag?: string;
    active?: boolean;
    id?: string;
    name?: string;
    modified_by?: any;
    guide?: any;
    modified_on?: string;
    subtitle?: string;
    company_id?: number;
};
type MOQData = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type SEOData = {
    title?: any;
    description?: any;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    moq?: MOQData;
    is_cod?: boolean;
    is_gift?: boolean;
    seo?: SEOData;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type ApplicationItemMeta = {
    is_gift?: boolean;
    _custom_meta?: MetaFields[];
    _custom_json?: any;
    alt_text?: any;
    is_cod?: boolean;
    moq?: ApplicationItemMOQ;
    seo?: ApplicationItemSEO;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type GetConfigMetadataResponse = {
    data: any[];
    condition?: any[];
    values?: any[];
};
type PageResponseType = {
    total_count: number;
    has_next: boolean;
    current: number;
    next: number;
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
    is_active: boolean;
    display_type: string;
    priority: number;
    name: string;
    unit?: string;
    logo?: string;
    key?: string;
};
type AppConfigurationDetail = {
    is_default: boolean;
    slug: string;
    is_active: boolean;
    app_id: string;
    priority: number;
    name?: string;
    logo?: string;
    template_slugs?: string[];
    attributes?: AttributeDetailsGroup[];
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_default: boolean;
    is_active: boolean;
    app_id: string;
    default_key: string;
    priority: number;
    name?: string;
    logo?: string;
    key: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    compare?: any;
    detail?: any;
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
    filter_types?: string[];
    key?: string;
    units?: any[];
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
type ConfigurationListingSortConfig = {
    is_active: boolean;
    priority: number;
    name?: string;
    logo?: string;
    key: string;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    bucket_points?: ConfigurationBucketPoints[];
    map?: any;
    value?: string;
    map_values?: any[];
    sort?: string;
    condition?: string;
};
type ConfigurationListingFilterConfig = {
    value_config?: ConfigurationListingFilterValue;
    type: string;
    is_active: boolean;
    priority: number;
    display_name?: string;
    name?: string;
    logo?: string;
    key: string;
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
    min: number;
    max: number;
};
type ConfigurationProductConfig = {
    title?: string;
    is_active: boolean;
    priority: number;
    size?: ProductSize;
    logo?: string;
    key: string;
    subtitle?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    is_active: boolean;
    display_type: string;
    priority: number;
    name: string;
    size: ProductSize;
    logo?: string;
    key: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppCatalogConfiguration = {
    created_by?: any;
    config_id?: string;
    created_on?: string;
    listing?: ConfigurationListing;
    type?: string;
    app_id: string;
    id?: string;
    product?: ConfigurationProduct;
    modified_by?: any;
    config_type: string;
    modified_on?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    created_by?: any;
    config_id?: string;
    created_on?: string;
    listing?: ConfigurationListing;
    type?: string;
    app_id: string;
    product?: ConfigurationProduct;
    modified_by?: any;
    config_type: string;
    modified_on?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    app_id: string;
    id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_type: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersKey = {
    display: string;
    operators?: string[];
    kind?: string;
    name: string;
    logo?: string;
};
type ProductFiltersValue = {
    min?: number;
    selected_max?: number;
    display: string;
    count?: number;
    max?: number;
    currency_symbol?: string;
    value: any;
    is_selected: boolean;
    currency_code?: string;
    query_format?: string;
    display_format?: string;
    selected_min?: number;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
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
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type Media1 = {
    meta?: any;
    type?: string;
    url: string;
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
type GetCollectionDetailNest = {
    cron?: any;
    allow_sort?: boolean;
    description?: string;
    tag?: string[];
    slug?: string;
    priority?: number;
    query?: CollectionQuery[];
    badge?: any;
    logo?: Media1;
    visible_facets_keys?: string[];
    is_active?: boolean;
    app_id?: string;
    meta?: any;
    banners?: ImageUrls;
    type?: string;
    _schedule?: any;
    action?: Action;
    uid?: string;
    name?: string;
    allow_facets?: boolean;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    page?: Page;
    items?: GetCollectionDetailNest[];
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type UserInfo = {
    user_id?: string;
    uid?: string;
    username?: string;
    email?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionSchedule = {
    end?: string;
    cron?: string;
    next_schedule?: NextSchedule[];
    start?: string;
    duration?: number;
};
type CreateCollection = {
    sort_on?: string;
    allow_sort?: boolean;
    published?: boolean;
    description?: string;
    slug: string;
    priority?: number;
    query?: CollectionQuery[];
    badge?: CollectionBadge;
    _locale_language?: any;
    logo: CollectionImage;
    visible_facets_keys?: string[];
    created_by?: UserInfo;
    is_active?: boolean;
    app_id: string;
    meta?: any;
    is_visible?: boolean;
    _custom_json?: any;
    banners: CollectionBanner;
    modified_by?: UserInfo;
    tags?: string[];
    seo?: SeoDetail;
    type: string;
    _schedule?: CollectionSchedule;
    name: string;
    allow_facets?: boolean;
};
type CollectionCreateResponse = {
    cron?: any;
    sort_on?: string;
    allow_sort?: boolean;
    description?: string;
    tag?: string[];
    slug?: string;
    priority?: number;
    query?: CollectionQuery[];
    badge?: any;
    logo?: BannerImage;
    visible_facets_keys?: string[];
    is_active?: boolean;
    app_id?: string;
    meta?: any;
    banners?: ImageUrls;
    type?: string;
    _schedule?: any;
    name?: string;
    allow_facets?: boolean;
};
type CollectionDetailResponse = {
    cron?: any;
    tag?: string[];
    slug?: string;
    type?: string;
    is_active?: boolean;
    app_id?: string;
    _schedule?: any;
    meta?: any;
    priority?: number;
    allow_sort?: boolean;
    banners?: ImageUrls;
    name?: string;
    query?: CollectionQuery[];
    allow_facets?: boolean;
    badge?: any;
    logo?: Media1;
    description?: string;
    visible_facets_keys?: string[];
};
type UpdateCollection = {
    sort_on?: string;
    allow_sort?: boolean;
    published?: boolean;
    description?: string;
    slug?: string;
    priority?: number;
    query?: CollectionQuery[];
    badge?: CollectionBadge;
    _locale_language?: any;
    logo?: CollectionImage;
    visible_facets_keys?: string[];
    is_active?: boolean;
    meta?: any;
    is_visible?: boolean;
    _custom_json?: any;
    banners?: CollectionBanner;
    modified_by?: UserInfo;
    tags?: string[];
    seo?: SeoDetail;
    type?: string;
    _schedule?: CollectionSchedule;
    name?: string;
    allow_facets?: boolean;
};
type Price1 = {
    min?: number;
    max?: number;
    currency_symbol?: string;
    currency_code?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
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
type ProductBrand = {
    logo?: Media1;
    name?: string;
    uid?: number;
    action?: Action;
};
type ProductListingDetail = {
    promo_meta?: any;
    sellable?: boolean;
    attributes?: any;
    description?: string;
    discount?: string;
    tryouts?: string[];
    medias?: Media1[];
    item_type?: string;
    price?: ProductListingPrice;
    slug: string;
    color?: string;
    rating?: number;
    product_online_date?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    highlights?: string[];
    rating_count?: number;
    teaser_tag?: any;
    brand?: ProductBrand;
    has_variant?: boolean;
    short_description?: string;
    type?: string;
    similars?: string[];
    uid?: number;
    name?: string;
    image_nature?: string;
    item_code?: string;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    page?: Page;
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
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
type CatalogInsightBrand = {
    available_articles?: number;
    available_sizes?: number;
    article_freshness?: number;
    total_articles?: number;
    name?: string;
    total_sizes?: number;
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    sellable_count?: number;
    count?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    brand_ids?: number[];
    store_ids?: number[];
    enabled?: boolean;
    opt_level: string;
    platform?: string;
    company_id?: number;
};
type CompanyOptIn = {
    created_by?: any;
    created_on: number;
    brand_ids: number[];
    store_ids: number[];
    enabled: boolean;
    opt_level: string;
    modified_by?: any;
    platform: string;
    modified_on: number;
    company_id: number;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    business_type?: string;
    name?: string;
    uid?: number;
    company_type?: string;
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
    brand?: number;
    company?: string;
};
type StoreDetail = {
    documents?: any[];
    created_on?: string;
    address?: any;
    additional_contacts?: any[];
    store_type?: string;
    uid?: number;
    display_name?: string;
    store_code?: string;
    name?: string;
    timing?: any;
    manager?: any;
    modified_on?: string;
    company_id?: number;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    range?: AttributeSchemaRange;
    type: string;
    mandatory?: boolean;
    allowed_values?: string[];
    format?: string;
    multi?: boolean;
};
type AttributeMasterFilter = {
    priority?: number;
    depends_on?: string[];
    indexing: boolean;
};
type GenderDetail = {
    details?: AttributeMasterDetails;
    slug?: string;
    logo?: string;
    meta?: AttributeMasterMeta;
    schema?: AttributeMaster;
    is_nested?: boolean;
    departments?: string[];
    name?: string;
    enabled_for_end_consumer?: boolean;
    id?: string;
    filters?: AttributeMasterFilter;
    description?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    status?: number;
    meta?: any;
    errors?: any;
    message?: string;
    code?: string;
};
type UserSerializer = {
    user_id?: string;
    contact?: string;
    uid?: string;
    _id?: string;
    username?: string;
};
type GetDepartment = {
    created_by?: UserSerializer;
    created_on?: string;
    item_type?: string;
    slug?: string;
    synonyms?: string[];
    priority_order?: number;
    is_active?: boolean;
    page_size?: number;
    uid?: number;
    page_no?: number;
    name?: string;
    modified_by?: UserSerializer;
    logo?: string;
    search?: string;
    modified_on?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    status?: number;
    meta?: any;
    errors?: any;
    message?: string;
    code?: string;
};
type DepartmentCreateUpdate = {
    synonyms?: string[];
    slug?: string;
    priority_order: number;
    _cls?: string;
    is_active?: boolean;
    uid?: number;
    platforms?: any;
    _custom_json?: any;
    name: string;
    tags?: string[];
    logo: string;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    user_id: string;
    super_user?: boolean;
    contact?: string;
    username: string;
};
type DepartmentModel = {
    created_by?: UserDetail;
    created_on: string;
    slug?: any;
    synonyms?: any[];
    priority_order: number;
    verified_on?: string;
    is_active?: boolean;
    _cls?: any;
    _id?: any;
    uid?: number;
    _custom_json?: any;
    name: any;
    modified_by?: UserDetail;
    verified_by?: UserDetail;
    logo: any;
    modified_on: string;
};
type ProductTemplate = {
    created_by?: any;
    categories?: string[];
    created_on?: string;
    tag?: string;
    slug: string;
    is_archived?: boolean;
    is_active?: boolean;
    attributes_schema?: any[];
    departments?: string[];
    name?: string;
    modified_by?: any;
    logo?: string;
    is_expirable?: boolean;
    attributes?: string[];
    description?: string;
    is_physical: boolean;
    modified_on?: string;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    no_of_boxes?: any;
    size_guide?: any;
    description?: any;
    multi_size?: any;
    item_type?: any;
    variants?: any;
    slug?: any;
    product_group_tag?: any;
    trader?: any;
    command?: any;
    custom_order?: any;
    brand_uid?: any;
    hsn_code?: any;
    category_slug?: any;
    is_active?: any;
    highlights?: any;
    teaser_tag?: any;
    media?: any;
    tags?: any;
    trader_type?: any;
    return_config?: any;
    short_description?: any;
    product_publish?: any;
    country_of_origin?: any;
    sizes?: any;
    currency?: any;
    name?: any;
    item_code?: any;
    is_dependent?: any;
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
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    categories?: string[];
    tag?: string;
    slug: string;
    is_archived?: boolean;
    is_active?: boolean;
    attributes_schema?: any[];
    departments?: string[];
    name?: string;
    id?: string;
    logo?: string;
    is_expirable?: boolean;
    attributes?: string[];
    description?: string;
    is_physical: boolean;
};
type TemplatesValidationResponse = {
    data?: TemplateValidationData;
    template_details?: TemplateDetails;
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
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadItemsData = {
    brand?: string[];
    type?: string;
    templates?: string[];
};
type ProductDownloadsItems = {
    created_by?: VerifiedBy;
    seller_id?: number;
    task_id?: string;
    data?: ProductDownloadItemsData;
    status?: string;
    template_tags?: any;
    id?: string;
    url?: string;
    completed_on?: string;
    trigger_on?: string;
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
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Media2 = {
    logo: string;
    portrait: string;
    landscape: string;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type Category = {
    created_by?: any;
    created_on?: string;
    tryouts?: string[];
    slug?: string;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
    is_active: boolean;
    uid?: number;
    priority?: number;
    departments: number[];
    level: number;
    name: string;
    modified_by?: any;
    id?: string;
    media?: Media2;
    modified_on?: string;
    hierarchy?: Hierarchy[];
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    tryouts?: string[];
    slug?: string;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
    is_active: boolean;
    priority?: number;
    departments: number[];
    level: number;
    name: string;
    media?: Media2;
    hierarchy?: Hierarchy[];
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Image = {
    aspect_ratio_f?: number;
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type Logo = {
    secure_url?: string;
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
};
type ReturnConfigResponse = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Product = {
    created_on?: string;
    no_of_boxes?: number;
    company_id?: number;
    primary_color?: string;
    tax_identifier?: any;
    size_guide?: string;
    is_set?: boolean;
    variant_media?: any;
    departments?: number[];
    attributes?: any;
    description?: string;
    is_physical?: boolean;
    is_expirable?: boolean;
    multi_size?: boolean;
    item_type?: string;
    variants?: any;
    slug?: string;
    net_quantity?: NetQuantityResponse;
    color?: string;
    template_tag?: string;
    product_group_tag?: string[];
    variant_group?: any;
    all_company_ids?: number[];
    category_uid?: number;
    trader?: any[];
    custom_order?: any;
    stage?: string;
    moq?: any;
    brand_uid?: number;
    l3_mapping?: string[];
    hsn_code?: string;
    created_by?: any;
    category_slug?: string;
    is_active?: boolean;
    images?: Image[];
    highlights?: string[];
    _custom_json?: any;
    id?: string;
    pending?: string;
    modified_by?: any;
    tags?: string[];
    media?: Media1[];
    category?: any;
    teaser_tag?: any;
    brand?: Brand;
    verified_by?: VerifiedBy;
    return_config?: ReturnConfigResponse;
    short_description?: string;
    product_publish?: ProductPublished;
    country_of_origin?: string;
    sizes?: any[];
    verified_on?: string;
    all_identifiers?: string[];
    uid?: number;
    currency?: string;
    all_sizes?: any[];
    name?: string;
    item_code?: string;
    image_nature?: string;
    modified_on?: string;
    is_image_less_product?: boolean;
    is_dependent?: boolean;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type TaxIdentifier = {
    hsn_code_id?: string;
    reporting_hsn?: string;
    hsn_code?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type Trader = {
    address?: string[];
    name: any;
    type?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductCreateUpdateSchemaV2 = {
    no_of_boxes?: number;
    tax_identifier: TaxIdentifier;
    size_guide?: string;
    is_set?: boolean;
    variant_media?: any;
    departments: number[];
    attributes: any;
    description?: string;
    multi_size?: boolean;
    item_type: string;
    variants?: any;
    slug: string;
    net_quantity?: NetQuantity;
    template_tag: string;
    product_group_tag?: string[];
    variant_group?: any;
    requester?: string;
    change_request_id?: any;
    trader: Trader[];
    custom_order?: CustomOrder;
    brand_uid: number;
    category_slug: string;
    is_active?: boolean;
    highlights?: string[];
    _custom_json?: any;
    teaser_tag?: TeaserTag;
    media?: Media1[];
    tags?: string[];
    bulk_job_id?: string;
    is_dependent?: boolean;
    return_config: ReturnConfig;
    short_description?: string;
    product_publish?: ProductPublish;
    country_of_origin: string;
    sizes: any[];
    uid?: number;
    action?: string;
    currency: string;
    name: string;
    item_code: string;
    is_image_less_product?: boolean;
    company_id: number;
};
type ProductVariants = {
    uid?: number;
    name?: string;
    category_uid?: number;
    item_code?: string;
    media?: Media1[];
    brand_uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    details: AttributeMasterDetails;
    created_on?: string;
    schema: AttributeMaster;
    variant?: boolean;
    departments: string[];
    unit?: string;
    filters: AttributeMasterFilter;
    description?: string;
    slug: string;
    synonyms?: any;
    enabled_for_end_consumer?: boolean;
    logo?: string;
    created_by?: any;
    is_nested?: boolean;
    modified_by?: any;
    tags?: string[];
    raw_key?: string;
    suggestion?: string;
    name?: string;
    modified_on?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ProductCreateUpdate = {
    no_of_boxes?: number;
    tax_identifier: TaxIdentifier;
    size_guide?: string;
    is_set?: boolean;
    variant_media?: any;
    departments: number[];
    description?: string;
    multi_size?: boolean;
    item_type: string;
    variants?: any;
    slug: string;
    net_quantity?: NetQuantity;
    template_tag: string;
    product_group_tag?: string[];
    variant_group?: any;
    requester?: string;
    change_request_id?: any;
    trader: Trader[];
    custom_order?: CustomOrder;
    brand_uid: number;
    category_slug: string;
    is_active?: boolean;
    highlights?: string[];
    _custom_json?: any;
    teaser_tag?: TeaserTag;
    media?: Media1[];
    tags?: string[];
    bulk_job_id?: string;
    is_dependent?: boolean;
    return_config: ReturnConfig;
    short_description?: string;
    product_publish?: ProductPublish;
    country_of_origin: string;
    uid?: number;
    action?: string;
    currency: string;
    name: any;
    item_code: any;
    is_image_less_product?: boolean;
    company_id: number;
};
type ValidateIdentifier = {
    primary?: boolean;
    gtin_type: string;
    gtin_value: string;
};
type AllSizes = {
    item_height: number;
    item_width: number;
    item_weight: number;
    item_length: number;
    item_dimensions_unit_of_measure: string;
    item_weight_unit_of_measure: any;
    identifiers?: ValidateIdentifier[];
    size: any;
};
type ListALLSizes = {
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
    created_by?: UserDetail1;
    file_path?: string;
    created_on?: string;
    is_active?: boolean;
    template_tag?: string;
    failed_records?: string[];
    total?: number;
    cancelled?: number;
    cancelled_records?: string[];
    template?: ProductTemplate;
    modified_by?: UserDetail1;
    succeed?: number;
    stage?: string;
    failed?: number;
    modified_on?: string;
    company_id?: number;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    user_id?: string;
    uid?: string;
    username?: string;
    email?: string;
};
type BulkJob = {
    created_by?: UserInfo1;
    stage?: string;
    created_on: string;
    file_path?: string;
    custom_template_tag?: string;
    is_active?: boolean;
    template_tag?: string;
    total?: number;
    cancelled?: number;
    cancelled_records?: any[];
    tracking_url?: string;
    modified_by?: UserInfo1;
    succeed?: number;
    modified_on?: string;
    failed?: number;
    failed_records?: any[];
    company_id: number;
};
type BulkResponse = {
    created_by?: UserInfo1;
    created_on: string;
    batch_id: string;
    is_active?: boolean;
    modified_by?: UserInfo1;
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
    created_by?: UserCommon;
    file_path?: string;
    created_on?: string;
    stage?: string;
    is_active?: boolean;
    retry?: number;
    total?: number;
    cancelled?: number;
    cancelled_records?: string[];
    id?: string;
    tracking_url?: string;
    modified_by?: UserCommon;
    succeed?: number;
    modified_on?: string;
    failed?: number;
    failed_records?: string[];
    company_id?: number;
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
    company_id?: number;
    size?: string;
    item_id?: number;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    store?: any;
    price?: number;
    price_transfer?: number;
    item_id?: number;
    sellable_quantity?: number;
    seller_identifier?: string;
    uid?: string;
    quantity?: number;
    currency?: string;
    identifiers?: any;
    size?: string;
    inventory_updated_on?: string;
    price_effective?: number;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type ItemQuery = {
    uid?: number;
    brand_uid?: number;
    item_code?: string;
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
    item_height?: number;
    price?: number;
    item_width?: number;
    price_transfer?: number;
    item_weight?: number;
    set?: InventorySet;
    item_length?: number;
    item_dimensions_unit_of_measure?: string;
    item_weight_unit_of_measure?: string;
    quantity: number;
    is_set?: boolean;
    identifiers: GTIN[];
    store_code: string;
    expiration_date?: string;
    size: any;
    currency: string;
    price_effective: number;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type PriceMeta = {
    tp_notes?: any;
    effective: number;
    transfer: number;
    currency: string;
    marked: number;
    updated_at?: string;
};
type DimensionResponse = {
    width: number;
    is_default: boolean;
    height: number;
    length: number;
    unit: string;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    not_available?: QuantityBase;
    sellable?: QuantityBase;
    order_committed?: QuantityBase;
    damaged?: QuantityBase;
};
type BrandMeta = {
    id: number;
    name: string;
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type ReturnConfig1 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type CompanyMeta = {
    id: number;
};
type InventorySellerResponse = {
    tax_identifier?: any;
    is_set?: boolean;
    fynd_article_code: string;
    price: PriceMeta;
    added_on_store?: string;
    dimension: DimensionResponse;
    identifier: any;
    trader?: Trader1[];
    quantities?: Quantities;
    raw_meta?: any;
    stage?: string;
    created_by?: UserSerializer;
    store: StoreMeta;
    is_active?: boolean;
    seller_identifier: string;
    meta?: any;
    trace_id?: string;
    _custom_json?: any;
    fynd_meta?: any;
    modified_by?: UserSerializer;
    tags?: string[];
    brand: BrandMeta;
    manufacturer: ManufacturerResponse;
    fragile: boolean;
    return_config?: ReturnConfig1;
    track_inventory?: boolean;
    total_quantity: number;
    item_id: number;
    set?: InventorySet;
    fynd_item_code: string;
    country_of_origin: string;
    weight: WeightResponse;
    uid: string;
    company: CompanyMeta;
    expiration_date?: string;
    size: string;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    created_by?: any;
    file_path?: string;
    created_on?: string;
    stage?: string;
    is_active?: boolean;
    cancelled?: number;
    total?: number;
    cancelled_records?: string[];
    id?: string;
    modified_by?: any;
    succeed?: number;
    modified_on?: string;
    failed?: number;
    failed_records?: string[];
    company_id?: number;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    price?: number;
    total_quantity?: number;
    seller_identifier: string;
    item_dimensions_unit_of_measure?: string;
    item_weight_unit_of_measure?: string;
    currency?: string;
    quantity?: number;
    trace_id?: string;
    store_code: string;
    expiration_date?: string;
    tags?: string[];
    price_effective?: number;
    price_marked?: number;
};
type InventoryBulkRequest = {
    batch_id: string;
    user?: any;
    sizes: InventoryJobPayload[];
    company_id: number;
};
type InventoryExportJob = {
    seller_id: number;
    task_id: string;
    status?: string;
    request_params?: any;
    url?: string;
    completed_on?: string;
    trigger_on?: string;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    seller_id: number;
    task_id: string;
    status?: string;
    request_params?: any;
    trigger_on?: string;
};
type PriceArticle = {
    tp_notes?: any;
    effective?: number;
    transfer?: number;
    currency?: string;
    marked?: number;
};
type DimensionResponse1 = {
    unit?: string;
    width?: number;
    height?: number;
    length?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    not_available?: Quantity;
    sellable?: Quantity;
    order_committed?: Quantity;
    damaged?: Quantity;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type ArticleStoreResponse = {
    store_code?: string;
    name?: string;
    store_type?: string;
    uid?: number;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
type ReturnConfig2 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type CompanyMeta1 = {
    id?: number;
};
type GetInventories = {
    tax_identifier?: any;
    is_set?: boolean;
    price?: PriceArticle;
    platforms?: any;
    dimension?: DimensionResponse1;
    identifier?: any;
    quantities?: QuantitiesArticle;
    inventory_updated_on?: string;
    trader?: Trader2[];
    stage?: string;
    created_by?: UserSerializer;
    store?: ArticleStoreResponse;
    date_meta?: DateMeta;
    seller_identifier?: string;
    trace_id?: string;
    id?: string;
    modified_by?: UserSerializer;
    tags?: string[];
    brand?: BrandMeta1;
    manufacturer?: ManufacturerResponse1;
    return_config?: ReturnConfig2;
    track_inventory?: boolean;
    total_quantity?: number;
    item_id?: number;
    weight?: WeightResponse1;
    country_of_origin?: string;
    uid?: string;
    company?: CompanyMeta1;
    expiration_date?: string;
    size?: string;
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
    total_quantity?: number;
    seller_identifier: string;
    trace_id?: string;
    store_id: number;
    expiration_date?: string;
    tags?: string[];
    price_effective?: number;
    price_marked?: number;
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    meta?: any;
    company_id: number;
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
    current?: string;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    has_previous?: boolean;
};
type HsnCodesObject = {
    hsn_code?: string;
    tax_on_esp?: boolean;
    hs2_code?: string;
    tax2?: number;
    id?: string;
    tax1?: number;
    tax_on_mrp?: boolean;
    modified_on?: string;
    threshold2?: number;
    threshold1?: number;
    company_id?: number;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    hsn_code: string;
    tax_on_esp?: boolean;
    hs2_code: string;
    is_active?: boolean;
    tax2?: number;
    uid?: number;
    tax1: number;
    tax_on_mrp: boolean;
    threshold2?: number;
    threshold1: number;
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
    hsn_code: string;
    country_code: string;
    created_by?: any;
    created_on?: string;
    type: string;
    reporting_hsn: string;
    taxes: TaxSlab[];
    modified_by?: any;
    modified_on?: string;
    description: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    slug?: string;
    uid?: number;
    action?: Action;
    departments?: string[];
    name?: string;
    banners?: ImageUrls;
    logo?: Media;
    discount?: string;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    slug?: string;
    priority_order?: number;
    uid?: number;
    name?: string;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    slug?: string;
    uid?: number;
    action?: Action;
    _custom_json?: any;
    name?: string;
    banners?: ImageUrls;
    childs?: any[];
};
type SecondLevelChild = {
    slug?: string;
    uid?: number;
    action?: Action;
    _custom_json?: any;
    name?: string;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
};
type Child = {
    slug?: string;
    uid?: number;
    action?: Action;
    _custom_json?: any;
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
    operators?: any;
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    page: Page;
};
type ProductDetail = {
    promo_meta?: any;
    attributes?: any;
    description?: string;
    tryouts?: string[];
    medias?: Media1[];
    item_type?: string;
    slug: string;
    color?: string;
    rating?: number;
    product_online_date?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    highlights?: string[];
    rating_count?: number;
    teaser_tag?: any;
    brand?: ProductBrand;
    has_variant?: boolean;
    short_description?: string;
    type?: string;
    similars?: string[];
    uid?: number;
    name?: string;
    image_nature?: string;
    item_code?: string;
};
type InventoryPage = {
    type: string;
    next_id?: string;
    has_next?: boolean;
    item_total: number;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type GetAddressSerializer = {
    address1?: string;
    address2?: string;
    country_code?: string;
    state?: string;
    pincode?: number;
    city?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    country?: string;
    address_type?: string;
};
type InvoiceCredSerializer = {
    password?: string;
    enabled?: boolean;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type UserSerializer1 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    open: boolean;
    closing?: LocationTimingSerializer;
    weekday: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetCompanySerializer = {
    created_by?: UserSerializer2;
    stage?: string;
    created_on?: string;
    addresses?: GetAddressSerializer[];
    verified_on?: string;
    reject_reason?: string;
    business_type?: string;
    uid?: number;
    name?: string;
    modified_by?: UserSerializer2;
    company_type?: string;
    verified_by?: UserSerializer2;
    modified_on?: string;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type GetLocationSerializer = {
    address: GetAddressSerializer;
    created_on?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    contact_numbers?: SellerPhoneNumber[];
    documents?: Document[];
    phone_number?: string;
    display_name: string;
    stage?: string;
    warnings?: any;
    created_by?: UserSerializer1;
    _custom_json?: any;
    timing?: LocationDayWiseSerializer[];
    integration_type?: LocationIntegrationType;
    modified_by?: UserSerializer1;
    verified_by?: UserSerializer1;
    product_return_config?: ProductReturnConfigSerializer;
    verified_on?: string;
    store_type?: string;
    uid?: number;
    company?: GetCompanySerializer;
    name: string;
    manager?: LocationManagerSerializer;
    notification_emails?: string[];
    modified_on?: string;
    code: string;
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
    is_active?: boolean;
    app_id: string;
    uid: number;
    _custom_json?: any;
    name?: string;
    logo?: string;
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
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type CompanyTaxesSerializer = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type GetCompanyProfileSerializerResponse = {
    verified_by?: UserSerializer;
    business_info?: string;
    name?: string;
    mode?: string;
    _custom_json?: any;
    created_on?: string;
    business_details?: BusinessDetails;
    franchise_enabled?: boolean;
    verified_on?: string;
    addresses?: GetAddressSerializer[];
    stage?: string;
    warnings?: any;
    created_by?: UserSerializer;
    company_type: string;
    business_type: string;
    business_country_info?: BusinessCountryInfo;
    taxes?: CompanyTaxesSerializer[];
    modified_on?: string;
    documents?: Document[];
    modified_by?: UserSerializer;
    uid: number;
    notification_emails?: string[];
    contact_details?: ContactDetails;
};
type CreateUpdateAddressSerializer = {
    address_type: string;
    state: string;
    longitude: number;
    pincode: number;
    address1: string;
    country: string;
    country_code?: string;
    latitude: number;
    city: string;
    address2?: string;
    landmark?: string;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type UpdateCompany = {
    business_details?: BusinessDetails;
    franchise_enabled?: boolean;
    business_info?: string;
    name?: string;
    documents?: Document[];
    company_type?: string;
    notification_emails?: string[];
    addresses?: CreateUpdateAddressSerializer[];
    business_type?: string;
    warnings?: any;
    reject_reason?: string;
    _custom_json?: any;
    contact_details?: ContactDetails;
    taxes?: CompanyTaxesSerializer1[];
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
    brand?: DocumentsObj;
    product?: DocumentsObj;
    uid?: number;
    store?: DocumentsObj;
    company_documents?: DocumentsObj;
    stage?: string;
    store_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    verified_by?: UserSerializer;
    name: string;
    description?: string;
    mode?: string;
    slug_key?: string;
    _custom_json?: any;
    logo?: string;
    created_on?: string;
    verified_on?: string;
    warnings?: any;
    stage?: string;
    created_by?: UserSerializer;
    synonyms?: string[];
    _locale_language?: any;
    reject_reason?: string;
    banner?: BrandBannerSerializer;
    modified_on?: string;
    modified_by?: UserSerializer;
    uid?: number;
};
type CreateUpdateBrandRequestSerializer = {
    logo: string;
    synonyms?: string[];
    company_id?: number;
    name: string;
    _locale_language?: any;
    description?: string;
    uid?: number;
    brand_tier?: string;
    _custom_json?: any;
    banner?: BrandBannerSerializer;
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
    details?: CompanyDetails;
    market_channels?: string[];
    created_on?: string;
    verified_by?: UserSerializer;
    created_by?: UserSerializer;
    stage?: string;
    name?: string;
    modified_on?: string;
    company_type: string;
    modified_by?: UserSerializer;
    uid?: number;
    verified_on?: string;
    business_type: string;
    addresses?: GetAddressSerializer[];
    notification_emails?: string[];
    reject_reason?: string;
    _custom_json?: any;
    business_country_info?: BusinessCountryInfo;
};
type CompanyBrandSerializer = {
    created_on?: string;
    brand?: GetBrandResponseSerializer;
    verified_by?: UserSerializer;
    created_by?: UserSerializer;
    modified_on?: string;
    company?: CompanySerializer;
    modified_by?: UserSerializer;
    uid?: number;
    verified_on?: string;
    warnings?: any;
    stage?: string;
    reject_reason?: string;
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
    date: HolidayDateSerializer;
    holiday_type: string;
    title: string;
};
type LocationSerializer = {
    display_name: string;
    contact_numbers?: SellerPhoneNumber[];
    manager?: LocationManagerSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    store_type?: string;
    holiday?: HolidaySchemaSerializer[];
    name: string;
    documents?: Document[];
    company: number;
    uid?: number;
    notification_emails?: string[];
    address: GetAddressSerializer;
    stage?: string;
    warnings?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    _custom_json?: any;
    timing?: LocationDayWiseSerializer[];
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
    quantity?: number;
    query?: _ArticleQuery;
    group_id?: string;
    article_assignment?: _ArticleAssignment;
    meta?: any;
};
type AssignStoreRequestValidator = {
    channel_identifier?: string;
    company_id?: number;
    pincode?: string;
    app_id?: string;
    store_ids?: number[];
    channel_type?: string;
    articles?: _AssignStoreArticle[];
};
type AssignStoreResponseSerializer = {
    s_city?: string;
    status?: boolean;
    quantity?: number;
    store_pincode?: string;
    item_id?: number;
    company_id?: number;
    price_marked?: number;
    price_effective?: number;
    _id?: string;
    store_id?: number;
    uid?: string;
    index?: number;
    article_assignment?: _ArticleAssignment;
    meta?: any;
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
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    types?: string[];
    uses?: PaymentAllowValue;
    networks?: string[];
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
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type Restrictions = {
    user_groups?: number[];
    payments?: any;
    price_range?: PriceRange;
    ordering_stores?: number[];
    uses?: UsesRestriction;
    user_type?: string;
    coupon_allowed?: boolean;
    platforms?: string[];
    bulk_bundle?: BulkBundleRestriction;
    post_order?: PostOrder;
};
type Validation = {
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: string[];
};
type Validity = {
    priority?: number;
};
type Rule = {
    discount_qty?: number;
    value?: number;
    min?: number;
    max?: number;
    key?: number;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    description?: string;
    apply?: DisplayMetaDict;
    title?: string;
    auto?: DisplayMetaDict;
    subtitle?: string;
    remove?: DisplayMetaDict;
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type RuleDefinition = {
    value_type: string;
    calculate_on: string;
    scope?: string[];
    auto_apply?: boolean;
    currency_code?: string;
    is_exact?: boolean;
    applicable_on: string;
    type: string;
};
type CouponSchedule = {
    cron?: string;
    next_schedule?: any[];
    start?: string;
    duration?: number;
    end?: string;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponAdd = {
    restrictions?: Restrictions;
    tags?: string[];
    validation?: Validation;
    type_slug: string;
    validity: Validity;
    rule: Rule[];
    author?: CouponAuthor;
    action?: CouponAction;
    date_meta?: CouponDateMeta;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    state?: State;
    code: string;
    rule_definition: RuleDefinition;
    _schedule?: CouponSchedule;
    ownership: Ownership;
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
    restrictions?: Restrictions;
    tags?: string[];
    validation?: Validation;
    type_slug: string;
    validity: Validity;
    rule: Rule[];
    author?: CouponAuthor;
    action?: CouponAction;
    date_meta?: CouponDateMeta;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    state?: State;
    code: string;
    rule_definition: RuleDefinition;
    _schedule?: CouponSchedule;
    ownership: Ownership;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type CompareObject = {
    less_than?: number;
    less_than_equals?: number;
    greater_than?: number;
    equals?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    item_exclude_company?: number[];
    item_exclude_brand?: number[];
    item_company?: number[];
    buy_rules?: string[];
    item_store?: number[];
    item_category?: number[];
    all_items?: boolean;
    product_tags?: string[];
    available_zones?: string[];
    item_id?: number[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_store?: number[];
    cart_unique_item_quantity?: CompareObject;
    cart_quantity?: CompareObject;
    item_exclude_category?: number[];
    item_sku?: string[];
    item_exclude_id?: number[];
    item_size?: string[];
    cart_total?: CompareObject;
    item_exclude_sku?: string[];
    item_brand?: number[];
};
type DisplayMeta1 = {
    name?: string;
    description?: string;
    offer_label?: string;
    offer_text?: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type DiscountOffer = {
    max_offer_quantity?: number;
    apportion_discount?: boolean;
    discount_percentage?: number;
    max_discount_amount?: number;
    partial_can_ret?: boolean;
    code?: string;
    min_offer_quantity?: number;
    discount_amount?: number;
    max_usage_per_transaction?: number;
    discount_price?: number;
};
type DiscountRule = {
    discount_type: string;
    item_criteria: ItemCriteria;
    buy_condition: string;
    offer: DiscountOffer;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue1;
    type: string;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type Restrictions1 = {
    anonymous_users?: boolean;
    user_groups?: number[];
    payments?: PromotionPaymentModes[];
    user_registered?: UserRegistered;
    user_id?: string[];
    order_quantity?: number;
    uses: UsesRestriction1;
    platforms?: string[];
    post_order?: PostOrder1;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type PromotionSchedule = {
    cron?: string;
    start: string;
    next_schedule?: any[];
    published: boolean;
    duration?: number;
    end?: string;
};
type PromotionListItem = {
    apply_priority?: number;
    calculate_on?: string;
    buy_rules: any;
    display_meta: DisplayMeta1;
    ownership: Ownership1;
    promo_group: string;
    discount_rules: DiscountRule[];
    code?: string;
    visiblility?: Visibility;
    date_meta?: PromotionDateMeta;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    stackable?: boolean;
    promotion_type: string;
    mode: string;
    _custom_json?: any;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    currency?: string;
    apply_all_discount?: boolean;
    application_id: string;
    _schedule?: PromotionSchedule;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    apply_priority?: number;
    calculate_on?: string;
    buy_rules: any;
    display_meta: DisplayMeta1;
    ownership: Ownership1;
    promo_group: string;
    discount_rules: DiscountRule[];
    code?: string;
    visiblility?: Visibility;
    date_meta?: PromotionDateMeta;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    stackable?: boolean;
    promotion_type: string;
    mode: string;
    _custom_json?: any;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    currency?: string;
    apply_all_discount?: boolean;
    application_id: string;
    _schedule?: PromotionSchedule;
};
type PromotionUpdate = {
    apply_priority?: number;
    calculate_on?: string;
    buy_rules: any;
    display_meta: DisplayMeta1;
    ownership: Ownership1;
    promo_group: string;
    discount_rules: DiscountRule[];
    code?: string;
    visiblility?: Visibility;
    date_meta?: PromotionDateMeta;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    stackable?: boolean;
    promotion_type: string;
    mode: string;
    _custom_json?: any;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    currency?: string;
    apply_all_discount?: boolean;
    application_id: string;
    _schedule?: PromotionSchedule;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    description?: string;
    example?: string;
    title?: string;
    entity_slug?: string;
    is_hidden?: boolean;
    subtitle?: string;
    created_on?: string;
    entity_type?: string;
    modified_on?: string;
    type?: string;
};
type CartItem = {
    size: string;
    quantity?: number;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ProductImage = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
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
    url?: string;
    type?: string;
};
type CartProduct = {
    brand?: BaseInfo;
    images?: ProductImage[];
    categories?: CategoryInfo[];
    action?: ProductAction;
    uid?: number;
    slug?: string;
    name?: string;
    net_quantity?: NetQuantity;
    type?: string;
};
type ProductPrice = {
    effective?: number;
    selling?: number;
    currency_code?: string;
    add_on?: number;
    currency_symbol?: string;
    marked?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type FreeGiftItem = {
    item_images_url?: string[];
    item_name?: string;
    item_price_details?: any;
    item_slug?: string;
    item_brand_name?: string;
    item_id?: number;
};
type AppliedFreeArticles = {
    article_id?: string;
    parent_item_identifier?: string;
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type DiscountRulesApp = {
    raw_offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
    offer?: any;
};
type AppliedPromotion = {
    amount?: number;
    promotion_group?: string;
    promotion_type?: string;
    promotion_name?: string;
    promo_id?: string;
    offer_text?: string;
    applied_free_articles?: AppliedFreeArticles[];
    buy_rules?: BuyRules[];
    ownership?: Ownership2;
    discount_rules?: DiscountRulesApp[];
    article_quantity?: number;
    mrp_promotion?: boolean;
};
type ProductAvailability = {
    out_of_stock?: boolean;
    other_store_quantity?: number;
    deliverable?: boolean;
    is_valid?: boolean;
    sizes?: string[];
};
type CartProductIdentifer = {
    identifier?: string;
};
type BasePrice = {
    currency_code?: string;
    effective?: number;
    currency_symbol?: string;
    marked?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    quantity?: number;
    price?: ArticlePriceInfo;
    seller?: BaseInfo;
    parent_item_identifiers?: any;
    uid?: string;
    _custom_json?: any;
    size?: string;
    extra_meta?: any;
    product_group_tags?: string[];
    type?: string;
    store?: BaseInfo;
};
type CartProductInfo = {
    product?: CartProduct;
    quantity?: number;
    price?: ProductPriceInfo;
    message?: string;
    promo_meta?: PromoMeta;
    promotions_applied?: AppliedPromotion[];
    availability?: ProductAvailability;
    price_per_unit?: ProductPriceInfo;
    parent_item_identifiers?: any;
    discount?: string;
    identifiers: CartProductIdentifer;
    coupon_message?: string;
    key?: string;
    bulk_offer?: any;
    is_set?: boolean;
    article?: ProductArticle;
};
type LoyaltyPoints = {
    description?: string;
    total?: number;
    is_applied?: boolean;
    applicable?: number;
};
type DisplayBreakup = {
    message?: string[];
    display?: string;
    value?: number;
    currency_code?: string;
    currency_symbol?: string;
    key?: string;
};
type CouponBreakup = {
    coupon_type?: string;
    description?: string;
    minimum_cart_value?: number;
    title?: string;
    message?: string;
    is_applied?: boolean;
    value?: number;
    uid?: string;
    sub_title?: string;
    code?: string;
    coupon_value?: number;
    type?: string;
    max_discount_value?: number;
};
type RawBreakup = {
    cod_charge?: number;
    total?: number;
    fynd_cash?: number;
    gst_charges?: number;
    you_saved?: number;
    coupon?: number;
    discount?: number;
    mrp_total?: number;
    delivery_charge?: number;
    convenience_fee?: number;
    subtotal?: number;
    vog?: number;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
    raw?: RawBreakup;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    message?: string;
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    pincode?: number;
    area_code: string;
    city?: string;
    country?: string;
    area_code_slug?: string;
    email?: string;
    name?: string;
    country_code?: string;
    landmark?: string;
    address?: string;
    phone?: number;
    state?: string;
    meta?: any;
    area?: string;
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
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
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
    amount_paid: number;
    quantity?: number;
    coupon_effective_discount: number;
    loyalty_discount?: number;
    employee_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    price_effective: number;
    size: string;
    cashback_applied: number;
    cod_charges: number;
    delivery_charges: number;
    product_id: number;
    discount: number;
    extra_meta?: any;
    meta?: CartItemMeta;
    price_marked: number;
    files?: OpenApiFiles[];
};
type OpenApiPlatformCheckoutReq = {
    cart_value: number;
    payment_methods: MultiTenderPaymentMethod[];
    cart_items: OpenApiOrderItem[];
    cod_charges: number;
    cashback_applied: number;
    coupon_value: number;
    gstin?: string;
    order_id?: string;
    loyalty_discount?: number;
    employee_discount?: any;
    shipping_address?: ShippingAddress;
    affiliate_order_id?: string;
    coupon?: string;
    billing_address: ShippingAddress;
    currency_code?: string;
    delivery_charges: number;
    files?: OpenApiFiles[];
    comment?: string;
    payment_mode?: string;
    coupon_code: string;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    order_ref_id?: string;
    success?: boolean;
    message?: string;
};
type AbandonedCart = {
    checkout_mode?: string;
    cart_value?: number;
    shipments?: any[];
    meta?: any;
    merge_qty?: boolean;
    fynd_credits?: any;
    created_on: string;
    delivery_charges?: any;
    discount?: number;
    comment?: string;
    payment_mode?: string;
    app_id?: string;
    _id: string;
    pick_up_customer_details?: any;
    payment_methods?: any[];
    is_active?: boolean;
    uid: number;
    cod_charges?: any;
    last_modified: string;
    gstin?: string;
    buy_now?: boolean;
    articles: any[];
    order_id?: string;
    bulk_coupon_discount?: number;
    is_default: boolean;
    payments?: any;
    coupon?: any;
    cashback: any;
    fc_index_map?: number[];
    user_id: string;
    promotion?: any;
    expire_at: string;
    is_archive?: boolean;
};
type AbandonedCartResponse = {
    message?: string;
    items?: AbandonedCart[];
    page?: Page;
    result?: any;
    success?: boolean;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    payment_selection_lock?: PaymentSelectionLock;
    checkout_mode?: string;
    message?: string;
    restrict_checkout?: boolean;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    currency?: CartCurrency;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    delivery_charge_info?: string;
    last_modified?: string;
    gstin?: string;
    buy_now?: boolean;
    comment?: string;
    id?: string;
    coupon_text?: string;
};
type AddProductCart = {
    article_assignment?: any;
    quantity?: number;
    extra_meta?: any;
    pos?: boolean;
    article_id?: string;
    parent_item_identifiers?: any;
    item_size?: string;
    display?: string;
    _custom_json?: any;
    item_id?: number;
    product_group_tags?: string[];
    seller_id?: number;
    store_id?: number;
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
    quantity?: number;
    article_id?: string;
    item_index?: number;
    parent_item_identifiers?: any;
    item_size?: string;
    _custom_json?: any;
    identifiers: CartProductIdentifer;
    item_id?: number;
    extra_meta?: any;
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
