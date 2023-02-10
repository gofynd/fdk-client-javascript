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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcDetailsRequest, EdcDevice, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceAddUpdateResponse, EdcAddRequest, EdcDeviceListResponse, FilterInfoOption, FiltersInfo, ShipmentStatus, UserDataInfo, ShipmentItemFulFillingStore, Prices, PlatformItem, GSTDetailsData, BagUnit, PaymentModeInfo, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, TrackingList, OrderBrandName, BagConfigs, BagGST, OrderBagArticle, Identifier, FinancialBreakup, PlatformDeliveryAddress, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, BagStateMapper, CurrentStatus, OrderBags, ShipmentPayments, FulfillingStore, BagStatusHistory, UserDetailsData, OrderDetailsData, ShipmentStatusData, DPDetailsData, ShipmentInfoResponse, OrderMeta, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, AffiliateMeta, AffiliateBagDetails, StoreAddress, Document, StoreDocuments, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, Store, Brand, BagGSTDetails, Weight, ReturnConfig, Dimensions, Article, ArticleDetails, B2BPODetails, BagMeta, BagReturnableCancelableStatus, PDFLinks, LockData, Formatted, ShipmentTimeStamp, DebugInfo, BuyerDetails, EInvoice, EinvoiceInfo, ShipmentMeta, AffiliateDetails, Attributes, Item, Dates, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, OrderPriority, MarketPlacePdf, AffiliateBag, UserData, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, TaxInfo, ShippingInfo, BillingInfo, ProcessingDates, Tax, Charge, LineItem, Shipment, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Price, LimitedProductData, Size, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionQuery, Media1, BannerImage, ImageUrls, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponse, CollectionSchedule, UserInfo, CollectionBadge, SeoDetail, CollectionImage, CollectionBanner, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Image, ReturnConfigResponse, Logo, ProductPublished, NetQuantityResponse, Product, ProductListingResponse, Trader, TeaserTag, CustomOrder, ProductPublish, NetQuantity, TaxIdentifier, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ProductCreateUpdate, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, WeightResponse, Trader1, DimensionResponse, CompanyMeta, ManufacturerResponse, ReturnConfig1, BrandMeta, PriceMeta, QuantityBase, Quantities, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, WeightResponse1, Trader2, DimensionResponse1, CompanyMeta1, ArticleStoreResponse, ManufacturerResponse1, ReturnConfig2, BrandMeta1, PriceArticle, Quantity, QuantitiesArticle, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, LocationIntegrationType, LocationTimingSerializer, LocationDayWiseSerializer, UserSerializer1, SellerPhoneNumber, LocationManagerSerializer, UserSerializer2, GetAddressSerializer, GetCompanySerializer, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, ContactDetails, BusinessCountryInfo, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, UsesRemaining, UsesRestriction, PostOrder, PriceRange, BulkBundleRestriction, PaymentAllowValue, PaymentModes, Restrictions, Rule, DisplayMetaDict, DisplayMeta, Validity, CouponAuthor, CouponAction, RuleDefinition, CouponDateMeta, CouponSchedule, State, Ownership, Validation, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, DisplayMeta1, PromotionAction, PromotionSchedule, Visibility, UsesRemaining1, UsesRestriction1, PostOrder1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, CompareObject, ItemCriteria, PromotionAuthor, PromotionDateMeta, DiscountOffer, DiscountRule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ProductAvailability, PromoMeta, ProductPrice, ProductPriceInfo, CartProductIdentifer, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, ProductImage, CategoryInfo, ActionQuery, ProductAction, CartProduct, CartProductInfo, CouponBreakup, RawBreakup, DisplayBreakup, LoyaltyPoints, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    app_id: string;
    aggregators?: any[];
    success: boolean;
    created: boolean;
    excluded_fields: string[];
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
    aggregator_name?: PaymentGatewayConfig;
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
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentApp = {
    package_name?: string;
    code?: string;
    display_name?: string;
    logos?: PaymentModeLogo;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    card_token?: string;
    card_issuer?: string;
    intent_app_error_list?: string[];
    merchant_code?: string;
    remaining_limit?: number;
    card_type?: string;
    code?: string;
    card_brand?: string;
    intent_flow?: boolean;
    cod_limit_per_order?: number;
    exp_month?: number;
    card_brand_image?: string;
    card_reference?: string;
    logo_url?: PaymentModeLogo;
    nickname?: string;
    timeout?: number;
    fynd_vpa?: string;
    exp_year?: number;
    card_fingerprint?: string;
    intent_app?: IntentApp[];
    aggregator_name: string;
    retry_count?: number;
    display_name?: string;
    card_name?: string;
    card_isin?: string;
    expired?: boolean;
    card_id?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_number?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    cod_limit?: number;
    name?: string;
    display_priority?: number;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    save_card?: boolean;
    is_pay_by_card_pl?: boolean;
    aggregator_name?: string;
    display_name: string;
    list?: PaymentModeList[];
    anonymous_enable?: boolean;
    name: string;
    display_priority: number;
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
    unique_transfer_no: any;
    payouts_aggregators: any[];
    more_attributes: any;
    customers: any;
    is_active: boolean;
    transfer_type: string;
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    city?: string;
    bank_name?: string;
    ifsc_code: string;
    country?: string;
    branch_name?: string;
    account_no?: string;
    account_type: string;
    pincode?: number;
    account_holder?: string;
    state?: string;
};
type PayoutRequest = {
    users: any;
    bank_details: PayoutBankDetails;
    is_active: boolean;
    aggregator: string;
    transfer_type: string;
    unique_external_id: string;
};
type PayoutResponse = {
    users: any;
    payouts: any;
    is_active: boolean;
    bank_details: any;
    unique_transfer_no: string;
    payment_status: string;
    success: boolean;
    aggregator: string;
    transfer_type: string;
    created: boolean;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_active: boolean;
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
    data?: any;
    message: string;
    is_verified_flag?: boolean;
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
    branch_name: string;
    success?: boolean;
};
type OrderBeneficiaryDetails = {
    account_holder: string;
    address: string;
    comment?: string;
    beneficiary_id: string;
    transfer_mode: string;
    bank_name: string;
    id: number;
    mobile?: string;
    delights_user_name?: string;
    account_no: string;
    display_name: string;
    branch_name?: string;
    subtitle: string;
    ifsc_code: string;
    email: string;
    created_on: string;
    title: string;
    is_active: boolean;
    modified_on: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    current_status?: string;
    extra_meta?: any;
    order_id?: string;
    payment_gateway?: string;
    payment_id?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    amount: number;
    meta?: MultiTenderPaymentMeta;
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
    callback_url?: any;
    cod_charges?: number;
    anonymous_cod?: boolean;
    enabled: boolean;
    mode_of_payment: string;
    payment_selection_lock?: any;
    cod_amount_limit?: number;
    source: string;
    methods: any;
};
type PlatfromPaymentConfig = {
    success: boolean;
    data: PlatformPaymentOptions;
    message: string;
};
type UpdatePlatformPaymentConfig = {
    cod_charges?: number;
    anonymous_cod?: boolean;
    payment_selection_lock?: any;
    methods: any;
    cod_amount_limit?: number;
};
type CODdata = {
    remaining_limit: number;
    usages: number;
    limit: number;
    is_active: boolean;
    user_id: string;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    is_active: boolean;
    mobileno: string;
    merchant_user_id: string;
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
    merchant_store_pos_code?: string;
    edc_serial_no?: string;
    app_id?: string;
    device_tag?: string;
    is_active?: boolean;
    store_id?: number;
};
type EdcDeviceDetailsResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcUpdateRequest = {
    is_active?: string;
    device_tag?: string;
    store_id: number;
    terminal_serial_no: string;
};
type EdcDeviceAddUpdateResponse = {
    success: boolean;
};
type EdcAddRequest = {
    terminal_serial_no: string;
    merchant_store_pos_code: string;
    edc_serial_no: string;
    device_tag: string;
    is_active: string;
    store_id: number;
};
type EdcDeviceListResponse = {
    success: boolean;
    device_list: EdcDevice[];
};
type FilterInfoOption = {
    value?: string;
    text: string;
    name?: string;
};
type FiltersInfo = {
    value: string;
    text: string;
    options?: FilterInfoOption[];
    type: string;
};
type ShipmentStatus = {
    hex_code: string;
    title: string;
    status: string;
    actual_status: string;
    ops_status: string;
};
type UserDataInfo = {
    mobile?: string;
    last_name?: string;
    uid?: number;
    gender?: string;
    email?: string;
    name?: string;
    first_name?: string;
    is_anonymous_user?: boolean;
    avis_user_id?: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type Prices = {
    cod_charges?: number;
    cashback?: number;
    price_marked?: number;
    cashback_applied?: number;
    refund_credit?: number;
    value_of_good?: number;
    tax_collected_at_source?: number;
    promotion_effective_discount?: number;
    amount_paid_roundoff?: number;
    delivery_charge?: number;
    discount?: number;
    coupon_value?: number;
    refund_amount?: number;
    fynd_credits?: number;
    price_effective?: number;
    amount_paid?: number;
};
type PlatformItem = {
    image?: string[];
    l1_category?: string[];
    l3_category_name?: string;
    l3_category?: number;
    id?: number;
    size?: string;
    department_id?: number;
    code?: string;
    can_cancel?: boolean;
    name?: string;
    images?: string[];
    color?: string;
    can_return?: boolean;
};
type GSTDetailsData = {
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    gst_fee: number;
    value_of_good: number;
    gstin_code: string;
};
type BagUnit = {
    total_shipment_bags: number;
    can_cancel?: boolean;
    prices?: Prices;
    bag_id: number;
    item_quantity: number;
    status: any;
    ordering_channel: string;
    item?: PlatformItem;
    gst?: GSTDetailsData;
    shipment_id: string;
    can_return?: boolean;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentItem = {
    shipment_status?: ShipmentStatus;
    created_at: string;
    shipment_created_at: number;
    fulfilling_centre: string;
    id: string;
    user?: UserDataInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    bags?: BagUnit[];
    application?: any;
    sla?: any;
    total_bags_count: number;
    total_shipments_in_order: number;
    payment_mode_info?: PaymentModeInfo;
    payment_methods?: any;
    channel?: any;
    prices?: Prices;
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
type TrackingList = {
    text: string;
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
    status: string;
};
type OrderBrandName = {
    created_on: string;
    company?: string;
    id: number;
    brand_name: string;
    modified_on?: string;
    logo: string;
};
type BagConfigs = {
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    is_returnable: boolean;
    allow_force_return: boolean;
    can_be_cancelled: boolean;
};
type BagGST = {
    gst_tax_percentage?: number;
    brand_calculated_amount?: number;
    value_of_good?: number;
    gst_fee?: number;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    hsn_code?: string;
    gst_tag?: string;
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
    promotion_effective_discount: number;
    size: string;
    total_units: number;
    value_of_good: number;
    item_name: string;
    gst_fee: string;
    pm_price_split: any;
    transfer_price: number;
    delivery_charge: number;
    coupon_value: number;
    amount_paid: number;
    identifiers: Identifier;
    amount_paid_roundoff?: number;
    fynd_credits: number;
    cashback: number;
    gst_tax_percentage: number;
    refund_credit: number;
    tax_collected_at_source?: number;
    added_to_fynd_cash: boolean;
    hsn_code: string;
    cod_charges: number;
    cashback_applied: number;
    price_marked: number;
    brand_calculated_amount: number;
    coupon_effective_discount: number;
    discount: number;
    price_effective: number;
    gst_tag: string;
};
type PlatformDeliveryAddress = {
    country?: string;
    contact_person?: string;
    address1?: string;
    latitude?: number;
    created_at?: string;
    address_type?: string;
    updated_at?: string;
    phone?: string;
    landmark?: string;
    email?: string;
    address_category?: string;
    version?: string;
    address2?: string;
    city?: string;
    pincode?: string;
    area?: string;
    longitude?: number;
    state?: string;
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
    promo_id?: string;
    amount?: number;
    promotion_name?: string;
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
    promotion_type?: string;
    buy_rules?: BuyRules[];
    article_quantity?: number;
};
type BagStateMapper = {
    state_type: string;
    app_state_name?: string;
    is_active?: boolean;
    name: string;
    app_display_name?: string;
    display_name: string;
    journey_type: string;
    app_facing?: boolean;
    notify_customer?: boolean;
    bs_id: number;
};
type CurrentStatus = {
    state_type?: string;
    state_id?: number;
    created_at?: string;
    store_id?: number;
    updated_at?: number;
    delivery_partner_id?: number;
    kafka_sync?: boolean;
    bag_id?: number;
    status?: string;
    delivery_awb_number?: number;
    current_status_id: number;
    bag_state_mapper?: BagStateMapper;
    shipment_id?: string;
};
type OrderBags = {
    identifier?: string;
    brand?: OrderBrandName;
    bag_configs?: BagConfigs;
    gst_details?: BagGST;
    article?: OrderBagArticle;
    line_number?: number;
    seller_identifier?: string;
    parent_promo_bags?: any;
    display_name?: string;
    financial_breakup?: FinancialBreakup;
    item?: PlatformItem;
    quantity?: number;
    can_cancel?: boolean;
    can_return?: boolean;
    delivery_address?: PlatformDeliveryAddress;
    applied_promos?: AppliedPromos[];
    entity_type?: string;
    bag_id: number;
    current_status?: CurrentStatus;
    prices?: Prices;
};
type ShipmentPayments = {
    mode: string;
    logo?: string;
    source?: string;
};
type FulfillingStore = {
    contact_person: string;
    country: string;
    id: number;
    phone: string;
    meta: any;
    code: string;
    store_name: string;
    fulfillment_channel: string;
    address: string;
    city: string;
    pincode: string;
    state: string;
};
type BagStatusHistory = {
    state_type?: string;
    state_id?: number;
    created_at?: string;
    reasons?: any[];
    store_id?: number;
    updated_at?: string;
    delivery_partner_id?: number;
    kafka_sync?: boolean;
    bag_id?: number;
    app_display_name?: string;
    forward?: boolean;
    status: string;
    bsh_id?: number;
    display_name?: string;
    delivery_awb_number?: string;
    bag_state_mapper?: BagStateMapper;
    shipment_id?: string;
};
type UserDetailsData = {
    country: string;
    phone: string;
    email: string;
    name: string;
    address: string;
    city: string;
    pincode: string;
    state: string;
};
type OrderDetailsData = {
    ordering_channel_logo?: any;
    affiliate_id?: string;
    cod_charges?: string;
    tax_details?: any;
    ordering_channel?: string;
    order_date?: string;
    order_value?: string;
    fynd_order_id: string;
    source?: string;
};
type ShipmentStatusData = {
    created_at?: string;
    id?: number;
    status?: string;
    bag_list?: string[];
    shipment_id?: string;
};
type DPDetailsData = {
    country?: string;
    id?: number;
    eway_bill_id?: string;
    awb_no?: string;
    name?: string;
    track_url?: string;
    pincode?: string;
    gst_tag?: string;
};
type ShipmentInfoResponse = {
    tracking_list?: TrackingList[];
    escalation?: any;
    secured_delivery_flag?: string;
    is_pdsr?: string;
    forward_order_status?: any[];
    is_packaging_order: boolean;
    bags?: OrderBags[];
    payments?: ShipmentPayments;
    bank_data?: any;
    fulfilling_store?: FulfillingStore;
    lock_status: string;
    bag_status_history?: BagStatusHistory[];
    beneficiary_details?: boolean;
    is_invoiced: boolean;
    total_items?: number;
    ordering_store: any;
    billing_details?: UserDetailsData;
    order?: OrderDetailsData;
    operational_status?: string;
    picked_date?: string;
    gst_details?: GSTDetailsData;
    forward_tracking_list?: any[];
    go_green?: boolean;
    shipment_images?: string[];
    order_type: string;
    company: any;
    refund_details?: any;
    platform_logo: boolean;
    total_bags?: number;
    fyndstore_emp: any;
    vertical?: string;
    tracking_url: string;
    child_nodes?: string[];
    delivery_slot?: any;
    user_agent?: string;
    email_id: string;
    shipment_status?: string;
    priority_text?: string;
    can_break: string;
    delivery_status: any[];
    user_info?: any;
    refund_text?: string;
    mid?: string;
    kirana_store_id?: string;
    forward_shipment_status?: any[];
    coupon?: any;
    order_status: any;
    user_id: string;
    is_fynd_store?: string;
    status?: ShipmentStatusData;
    custom_meta?: any[];
    payment_mode?: string;
    packaging_type?: string;
    pay_button?: string;
    can_cancel?: boolean;
    affiliate_shipment_id: string;
    can_return?: boolean;
    items: any[];
    current_shipment_status: any;
    dp_details?: DPDetailsData;
    due_date?: string;
    is_fynd_coupon: boolean;
    shipment_quantity?: number;
    status_progress: number;
    order_created_time?: string;
    enable_tracking?: boolean;
    replacement_details?: string;
    delivery_details?: UserDetailsData;
    credit_note_id: string;
    invoice: any;
    is_not_fynd_source: boolean;
    enable_dp_tracking?: boolean;
    shipment_id: string;
    prices?: Prices;
    journey_type?: string;
};
type OrderMeta = {
    order_child_entities?: string[];
    order_type?: string;
    staff?: any;
    currency_symbol?: string;
    extra_meta?: any;
    cart_id?: number;
    comment?: string;
    customer_note?: string;
    employee_id?: number;
    payment_type?: string;
    mongo_cart_id?: number;
    order_tags?: any[];
    order_platform?: string;
    ordering_store?: number;
    files?: any[];
};
type OrderDict = {
    fynd_order_id: string;
    meta?: OrderMeta;
    order_date: string;
    payment_methods?: any;
};
type PlatformShipment = {
    tracking_list?: TrackingList[];
    bags?: OrderBags[];
    payments?: ShipmentPayments;
    fulfilling_store?: FulfillingStore;
    bag_status_history?: BagStatusHistory[];
    total_items?: number;
    billing_details?: UserDetailsData;
    order?: OrderDetailsData;
    operational_status?: string;
    picked_date?: string;
    gst_details?: GSTDetailsData;
    shipment_images?: string[];
    platform_logo?: string;
    total_bags?: number;
    vertical?: string;
    delivery_slot?: any;
    user_agent?: string;
    shipment_status?: string;
    priority_text?: string;
    coupon?: any;
    status?: ShipmentStatusData;
    custom_meta?: any[];
    payment_mode?: string;
    packaging_type?: string;
    dp_details?: DPDetailsData;
    shipment_quantity?: number;
    delivery_details?: UserDetailsData;
    enable_dp_tracking?: boolean;
    shipment_id: string;
    prices?: Prices;
    journey_type?: string;
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    success: boolean;
    shipments?: PlatformShipment[];
};
type SubLane = {
    value?: string;
    text?: string;
    actions?: any[];
    total_items?: number;
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
    logo?: string;
    name?: string;
};
type PlatformBreakupValues = {
    value?: string;
    display?: string;
    name?: string;
};
type PlatformOrderItems = {
    user_info?: UserDataInfo;
    shipments?: PlatformShipment[];
    order_id?: string;
    meta?: any;
    order_created_time?: string;
    total_order_value?: number;
    payment_mode?: string;
    order_value?: number;
    channel?: PlatformChannel;
    breakup_values?: PlatformBreakupValues[];
};
type OrderListingResponse = {
    page?: Page;
    message?: string;
    success?: boolean;
    lane?: string;
    total_count?: number;
    items?: PlatformOrderItems[];
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
    reason?: string;
    awb?: string;
    updated_at?: string;
    account_name?: string;
    raw_status?: string;
    meta?: any;
    shipment_type?: string;
    updated_time?: string;
    status?: string;
    last_location_recieved_at?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    returned?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    processed?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    filters?: FiltersInfo[];
};
type FiltersResponse = {
    advance_filter?: AdvanceFilterInfo;
    global_filter?: FiltersInfo[];
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    report_type?: string;
    report_requested_at?: string;
    s3_key?: string;
    report_id?: string;
    report_created_at?: string;
    report_name?: string;
    status?: string;
    display_name?: string;
    request_details?: any;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    jio_code?: string;
    article_id?: string;
    item_id?: string;
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
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
    identifier?: string;
    trace_id?: string;
    data?: any[];
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    store_code?: string;
    store_id?: string;
    invoice_status?: string;
    company_id?: string;
    batch_id: string;
    label?: any;
    store_name?: string;
    do_invoice_label_generated: boolean;
    invoice?: any;
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
    operation?: string;
    file_name?: string;
    content_type?: string;
    tags?: string[];
    size?: number;
    method?: string;
    upload?: FileUploadResponse;
    namespace?: string;
    cdn?: URL;
    file_path?: string;
};
type BulkListingPage = {
    total?: number;
    has_next?: boolean;
    type?: string;
    size?: number;
    current?: number;
    has_previous?: boolean;
};
type bulkListingData = {
    file_name?: string;
    store_code?: string;
    successful?: number;
    id?: string;
    excel_url?: string;
    store_id?: number;
    batch_id?: string;
    user_id?: string;
    failed_shipments?: any[];
    status?: string;
    processing_shipments?: string[];
    processing?: number;
    successful_shipments?: any[];
    total?: number;
    company_id?: number;
    store_name?: string;
    uploaded_on?: string;
    failed?: number;
    user_name?: string;
};
type BulkListingResponse = {
    page?: BulkListingPage;
    success?: boolean;
    error?: string;
    data?: bulkListingData[];
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    id?: number;
    display_name?: string;
    question_set?: QuestionSet[];
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
    total_shipments_count?: number;
    failed_shipments_count?: number;
    company_id?: string;
    batch_id?: string;
    successful_shipments_count?: number;
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    message?: string;
    success?: string;
    error?: string[];
    uploaded_by?: string;
    user_id?: string;
    uploaded_on?: string;
    status?: boolean;
    failed_records?: string[];
    data?: BulkActionDetailsDataField[];
};
type AffiliateMeta = {
    channel_order_id?: string;
    size_level_total_qty?: number;
    box_type?: string;
    employee_discount?: number;
    order_item_id?: string;
    channel_shipment_id?: string;
    due_date?: string;
    is_priority?: boolean;
    loyalty_discount?: number;
    coupon_code?: string;
    quantity?: number;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    employee_discount?: number;
    affiliate_bag_id: string;
    loyalty_discount?: number;
    affiliate_meta: AffiliateMeta;
};
type StoreAddress = {
    latitude: number;
    landmark?: string;
    version?: string;
    area?: string;
    longitude: number;
    address_type: string;
    updated_at: string;
    phone: string;
    email?: string;
    address_category: string;
    city: string;
    state: string;
    address1: string;
    country_code: string;
    address2?: string;
    country: string;
    contact_person: string;
    created_at: string;
    pincode: number;
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
type EInvoicePortalDetails = {
    username?: string;
    user?: string;
    password?: string;
};
type StoreEinvoice = {
    username?: string;
    enabled: boolean;
    user?: string;
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
    notification_emails?: string[];
    timing?: any[];
    documents?: StoreDocuments;
    product_return_config?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    stage: string;
    gst_number?: string;
    display_name: string;
    gst_credentials: StoreGstCredentials;
    ewaybill_portal_details?: any;
    additional_contact_details?: any;
};
type Store = {
    brand_id?: any;
    latitude: number;
    order_integration_id?: string;
    fulfillment_channel: string;
    parent_store_id?: number;
    mall_name?: string;
    alohomora_user_id?: number;
    longitude: number;
    is_enabled_for_recon?: boolean;
    store_email: string;
    updated_at?: string;
    phone: number;
    is_active?: boolean;
    store_address_json?: StoreAddress;
    s_id: string;
    city: string;
    mall_area?: string;
    is_archived?: boolean;
    state: string;
    address1: string;
    location_type: string;
    meta: StoreMeta;
    code?: string;
    name: string;
    address2?: string;
    brand_store_tags?: string[];
    vat_no?: string;
    contact_person: string;
    country: string;
    created_at: string;
    store_active_from?: string;
    company_id: number;
    login_username: string;
    pincode: string;
    packaging_material_count?: number;
};
type Brand = {
    credit_note_expiry_days?: number;
    script_last_ran?: string;
    brand_id: number;
    credit_note_allowed?: boolean;
    created_on?: number;
    company: string;
    pickup_location?: string;
    is_virtual_invoice?: boolean;
    logo?: string;
    brand_name: string;
    modified_on?: number;
    invoice_prefix?: string;
    start_date?: string;
};
type BagGSTDetails = {
    hsn_code_id: string;
    cgst_gst_fee: string;
    gst_tax_percentage: number;
    brand_calculated_amount: number;
    cgst_tax_percentage: number;
    tax_collected_at_source: number;
    value_of_good: number;
    gst_fee: number;
    is_default_hsn_code?: boolean;
    igst_tax_percentage: number;
    sgst_tax_percentage: number;
    sgst_gst_fee: string;
    gstin_code?: string;
    hsn_code: string;
    igst_gst_fee: string;
    gst_tag: string;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type ReturnConfig = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Dimensions = {
    length?: number;
    unit?: string;
    is_default?: boolean;
    width?: number;
    height?: number;
};
type Article = {
    weight?: Weight;
    return_config?: ReturnConfig;
    raw_meta?: any;
    esp_modified?: any;
    seller_identifier: string;
    size: string;
    uid: string;
    dimensions?: Dimensions;
    code?: string;
    child_details?: any;
    _id: string;
    a_set?: any;
    is_set?: boolean;
    identifiers: Identifier;
};
type ArticleDetails = {
    status?: any;
};
type B2BPODetails = {
    po_line_amount?: number;
    partial_can_ret?: boolean;
    docker_number?: string;
    po_tax_amount?: number;
    total_gst_percentage?: number;
    item_base_price?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type BagReturnableCancelableStatus = {
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    is_returnable: boolean;
    can_be_cancelled: boolean;
};
type PDFLinks = {
    po_invoice?: string;
    label?: string;
    invoice_a6?: string;
    b2b?: string;
    invoice_type: string;
    label_pos?: string;
    invoice_pos?: string;
    invoice?: string;
    credit_note_url?: string;
    invoice_a4?: string;
    label_a6?: string;
    label_a4?: string;
    label_type: string;
};
type LockData = {
    lock_message?: string;
    locked?: boolean;
    mto?: boolean;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type BuyerDetails = {
    ajio_site_id?: string;
    pincode: number;
    name: string;
    address: string;
    state: string;
    city: string;
    gstin: string;
};
type EInvoice = {
    acknowledge_no?: number;
    error_message?: string;
    error_code?: string;
    signed_qr_code?: string;
    irn?: string;
    acknowledge_date?: string;
    signed_invoice?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type ShipmentMeta = {
    auto_trigger_dp_assignment_acf: boolean;
    weight: number;
    dp_id?: string;
    return_affiliate_order_id?: string;
    forward_affiliate_shipment_id?: string;
    return_awb_number?: string;
    lock_data?: LockData;
    dp_sort_key?: string;
    formatted?: Formatted;
    dp_options?: any;
    packaging_name?: string;
    return_details?: any;
    box_type?: string;
    same_store_available: boolean;
    order_type?: string;
    awb_number?: string;
    assign_dp_from_sb?: boolean;
    timestamp?: ShipmentTimeStamp;
    bag_weight?: any;
    return_affiliate_shipment_id?: string;
    shipment_volumetric_weight?: number;
    fulfilment_priority_text?: string;
    forward_affiliate_order_id?: string;
    b2c_buyer_details?: any;
    debug_info?: DebugInfo;
    return_store_node?: number;
    b2b_buyer_details?: BuyerDetails;
    marketplace_store_id?: string;
    po_number?: string;
    store_invoice_updated_date?: string;
    due_date?: string;
    external?: any;
    einvoice_info?: EinvoiceInfo;
    shipment_weight?: number;
    ewaybill_info?: any;
    dp_name?: string;
};
type AffiliateDetails = {
    affiliate_order_id: string;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    affiliate_bag_id: string;
    ad_id?: string;
    affiliate_meta: AffiliateMeta;
    shipment_meta: ShipmentMeta;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    affiliate_shipment_id: string;
};
type Attributes = {
    primary_color_hex?: string;
    brand_name?: string;
    primary_material?: string;
    gender?: string[];
    marketer_name?: string;
    essential?: string;
    name?: string;
    primary_color?: string;
    marketer_address?: string;
};
type Item = {
    brand_id: number;
    last_updated_at?: string;
    l1_category_id?: number;
    size: string;
    brand: string;
    webstore_product_url?: string;
    l3_category_name?: string;
    l2_category_id?: number;
    slug_key: string;
    meta?: any;
    department_id?: number;
    code?: string;
    gender?: string;
    name: string;
    item_id: number;
    color?: string;
    can_cancel?: boolean;
    can_return?: boolean;
    image: string[];
    l1_category?: string[];
    branch_url?: string;
    attributes: Attributes;
    l3_category?: number;
    l2_category?: string[];
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type BagDetailsPlatformResponse = {
    reasons?: any[];
    restore_coupon?: boolean;
    current_operational_status: BagStatusHistory;
    order_integration_id?: string;
    tags?: string[];
    bag_status_history?: BagStatusHistory;
    bag_status: BagStatusHistory[];
    original_bag_list?: number[];
    identifier?: string;
    affiliate_bag_details: AffiliateBagDetails;
    shipment_id?: string;
    ordering_store?: Store;
    brand: Brand;
    operational_status?: string;
    gst_details: BagGSTDetails;
    article: Article;
    line_number?: number;
    bag_update_time?: number;
    article_details?: ArticleDetails;
    seller_identifier?: string;
    qc_required?: any;
    b_id: number;
    no_of_bags_order?: number;
    meta?: BagMeta;
    parent_promo_bags?: any;
    display_name?: string;
    b_type?: string;
    status: BagReturnableCancelableStatus;
    financial_breakup: FinancialBreakup[];
    affiliate_details?: AffiliateDetails;
    item: Item;
    restore_promos?: any;
    quantity?: number;
    applied_promos?: any[];
    entity_type?: string;
    current_status: BagStatusHistory;
    dates?: Dates;
    prices: Prices;
    journey_type: string;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    page_type: string;
    item_total: number;
    has_next: boolean;
    size: number;
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
    message: string;
    error_trace?: string;
};
type StoreReassign = {
    set_id?: string;
    affiliate_id?: string;
    store_id: number;
    reason_ids?: number[];
    item_id?: string;
    bag_id?: number;
    affiliate_order_id?: string;
    fynd_order_id?: string;
    mongo_article_id?: string;
    affiliate_bag_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_id?: string;
    id?: string;
    reason_text: string;
    affiliate_order_id?: string;
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
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
    affiliate_order_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
};
type CheckResponse = {
    affiliate_id?: string;
    lock_status?: boolean;
    shipment_id?: string;
    original_filter?: OriginalFilter;
    status?: string;
    bags?: Bags[];
    is_bag_locked?: boolean;
    affiliate_shipment_id?: string;
    is_shipment_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    message?: string;
    success?: boolean;
};
type AnnouncementResponse = {
    created_at?: string;
    id: number;
    from_datetime?: string;
    description?: string;
    to_datetime?: string;
    platform_name?: string;
    title?: string;
    logo_url?: string;
    platform_id?: string;
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
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
};
type ProductsDataUpdates = {
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
};
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    products?: ProductsDataUpdates[];
};
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasonsFilters = {
    quantity?: number;
    identifier?: string;
    line_number?: number;
};
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type Products = {
    quantity?: number;
    identifier?: string;
    line_number?: number;
};
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
    identifier: string;
    products?: Products[];
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    status?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
    task?: boolean;
    force_transition?: boolean;
};
type ShipmentsResponse = {
    exception?: string;
    meta?: any;
    message?: string;
    final_state?: any;
    code?: string;
    status?: number;
    stack_trace?: string;
    identifier?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    mobile: number;
    city: string;
    country: string;
    pincode: string;
    email: string;
    address2?: string;
    address1?: string;
    last_name: string;
    state: string;
    phone: number;
    first_name: string;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    hsn_code_id: string;
    amount_paid: number;
    sku: string;
    price_marked: number;
    item_id: number;
    avl_qty: number;
    unit_price: number;
    pdf_links?: MarketPlacePdf;
    company_id: number;
    identifier: any;
    seller_identifier: string;
    store_id: number;
    transfer_price: number;
    _id: string;
    item_size: string;
    affiliate_store_id: string;
    price_effective: number;
    affiliate_meta: any;
    fynd_store_id: string;
    discount: number;
    quantity: number;
    modified_on: string;
    delivery_charge: number;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type ArticleDetails1 = {
    category: any;
    _id: string;
    quantity: number;
    brand_id: number;
    attributes: any;
    dimension: any;
    weight: any;
};
type LocationDetails = {
    fulfillment_id: number;
    articles: ArticleDetails1[];
    fulfillment_type: string;
};
type ShipmentDetails = {
    meta?: any;
    shipments: number;
    fulfillment_id: number;
    dp_id?: number;
    affiliate_shipment_id: string;
    box_type?: string;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    journey: string;
    source: string;
    to_pincode: string;
    payment_mode: string;
    location_details?: LocationDetails;
    action: string;
    shipment: ShipmentDetails[];
    identifier: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    billing_address: OrderUser;
    delivery_charges: number;
    cod_charges: number;
    order_priority?: OrderPriority;
    discount: number;
    shipping_address: OrderUser;
    payment_mode: string;
    bags: AffiliateBag[];
    affiliate_order_id?: string;
    payment?: any;
    coupon?: string;
    user: UserData;
    items: any;
    shipment?: ShipmentData;
    order_value: number;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    owner: string;
    created_at: string;
    id: string;
    meta?: AffiliateAppConfigMeta[];
    description?: string;
    name: string;
    token: string;
    secret: string;
    updated_at: string;
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
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    bag_end_state?: string;
    store_lookup?: string;
    article_lookup?: string;
    affiliate: Affiliate;
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
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
    message?: string;
    success?: boolean;
};
type ActionInfo = {
    description: string;
    id: number;
    display_text: string;
    slug: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    type: string;
    message: string;
    ticket_url?: string;
    bag_id?: number;
    l3_detail?: string;
    createdat: string;
    l1_detail?: string;
    user: string;
    ticket_id?: string;
    l2_detail?: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    message: string;
    shipment_id: number;
    brand_name: string;
    order_id: string;
    payment_mode: string;
    country_code: string;
    amount_paid: number;
    phone_number: number;
    customer_name: string;
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
    meta: Meta;
    id: number;
    shipment_id?: string;
    status?: string;
    bag_list?: number[];
    remarks?: string;
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
};
type OrderStatusData = {
    errors?: string[];
    shipment_details?: ShipmentDetail[];
    order_details: OrderDetails;
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    dp_id: number;
    order_type: string;
    shipment_ids?: string[];
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ShippingInfo = {
    city: string;
    primary_email: string;
    country: string;
    slot?: any[];
    address1: string;
    external_customer_code?: string;
    address_type?: string;
    alternate_email?: string;
    pincode: string;
    address2?: string;
    state: string;
    first_name: string;
    house_no?: string;
    primary_mobile_number: string;
    last_name?: string;
    customer_code?: string;
    title?: string;
    geo_location?: any;
    country_code?: string;
    floor_no?: string;
    middle_name?: string;
    state_code?: string;
    shipping_type?: string;
    gender?: string;
    alternate_mobile_number?: string;
    landmark?: string;
};
type BillingInfo = {
    city: string;
    primary_email: string;
    country: string;
    address1: string;
    external_customer_code?: string;
    alternate_email?: string;
    pincode: string;
    address2?: string;
    state: string;
    first_name: string;
    house_no?: string;
    primary_mobile_number: string;
    last_name?: string;
    customer_code?: string;
    title?: string;
    country_code?: string;
    floor_no?: string;
    middle_name?: string;
    state_code?: string;
    gender?: string;
    alternate_mobile_number?: string;
};
type ProcessingDates = {
    pack_by_date?: string;
    confirm_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_after_date?: string;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
};
type Tax = {
    amount: any;
    name: string;
    rate: number;
    breakup?: any[];
};
type Charge = {
    type: string;
    tax?: Tax;
    code?: string;
    name: string;
    amount: any;
};
type LineItem = {
    custom_messasge?: string;
    seller_identifier: string;
    meta?: any;
    quantity?: number;
    external_line_id?: string;
    charges?: Charge[];
};
type Shipment = {
    meta?: any;
    processing_dates?: ProcessingDates;
    priority?: number;
    line_items: LineItem[];
    external_shipment_id?: string;
    location_id: number;
};
type PaymentMethod = {
    meta?: any;
    transaction_data?: any;
    name: string;
    mode: string;
    collect_by: string;
    amount: number;
    refund_by: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type CreateOrderAPI = {
    tax_info?: TaxInfo;
    external_order_id?: string;
    meta?: any;
    shipping_info: ShippingInfo;
    billing_info: BillingInfo;
    shipments: Shipment[];
    payment_info: PaymentInfo;
    currency_info?: any;
    external_creation_date?: string;
    charges: Charge[];
};
type CreateOrderErrorReponse = {
    exception?: string;
    meta?: string;
    message: string;
    info?: any;
    code?: string;
    status: number;
    request_id?: string;
    stack_trace?: string;
};
type PaymentMethods = {
    mode?: string;
    collect_by?: string;
    refund_by?: string;
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
    shipment_assignment?: string;
    payment_info?: CreateChannelPaymentInfo;
    dp_configuration?: DpConfiguration;
    location_reassignment?: boolean;
    logo_url?: any;
    lock_states?: string[];
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    is_upserted?: boolean;
    acknowledged?: boolean;
    is_inserted?: boolean;
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
    order_details?: FyndOrderIdList[];
    mobile: number;
    start_date: string;
    end_date: string;
};
type GetSearchWordsData = {
    is_active?: boolean;
    app_id?: string;
    uid?: string;
    words?: string[];
    result?: any;
    _custom_json?: any;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    is_active?: boolean;
    app_id?: string;
    words?: string[];
    result: SearchKeywordResult;
    _custom_json?: any;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    app_id?: string;
    _custom_json?: any;
    results?: any[];
    words?: string[];
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type AutocompletePageAction = {
    query?: any;
    url?: string;
    type?: string;
    params?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type Media = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type AutocompleteResult = {
    action?: AutocompleteAction;
    _custom_json?: any;
    logo?: Media;
    display?: string;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    app_id?: string;
    results?: AutocompleteResult[];
    words?: string[];
    _custom_json?: any;
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    results?: any[];
};
type ProductBundleItem = {
    product_uid: number;
    max_quantity: number;
    auto_select?: boolean;
    allow_remove?: boolean;
    min_quantity: number;
    auto_add_to_cart?: boolean;
};
type GetProductBundleCreateResponse = {
    created_on?: string;
    is_active: boolean;
    modified_by?: any;
    choice: string;
    name: string;
    products: ProductBundleItem[];
    created_by?: any;
    modified_on?: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    id?: string;
    meta?: any;
    slug: string;
    logo?: string;
    company_id?: number;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    created_on?: string;
    is_active: boolean;
    modified_by?: any;
    choice: string;
    name: string;
    products: ProductBundleItem[];
    created_by?: any;
    modified_on?: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    meta?: any;
    slug: string;
    logo?: string;
    company_id?: number;
};
type Price = {
    currency?: string;
    max_marked?: number;
    max_effective?: number;
    min_marked?: number;
    min_effective?: number;
};
type LimitedProductData = {
    attributes?: any;
    item_code?: string;
    sizes?: string[];
    name?: string;
    price?: any;
    short_description?: string;
    images?: string[];
    country_of_origin?: string;
    identifier?: any;
    slug?: string;
    uid?: number;
    quantity?: number;
};
type Size = {
    is_available?: boolean;
    value?: string;
    quantity?: number;
    display?: string;
};
type GetProducts = {
    product_uid?: number;
    max_quantity?: number;
    price?: Price;
    auto_select?: boolean;
    allow_remove?: boolean;
    product_details?: LimitedProductData;
    min_quantity?: number;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
};
type GetProductBundleResponse = {
    is_active?: boolean;
    choice?: string;
    name?: string;
    products?: GetProducts[];
    page_visibility?: string[];
    same_store_assignment?: boolean;
    meta?: any;
    slug?: string;
    logo?: string;
    company_id?: number;
};
type ProductBundleUpdateRequest = {
    is_active: boolean;
    modified_by?: any;
    choice: string;
    name: string;
    products: ProductBundleItem[];
    modified_on?: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    meta?: any;
    slug: string;
    logo?: string;
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
    description?: string;
    title: string;
    subtitle?: string;
    image?: string;
    created_on?: string;
    active?: boolean;
    modified_by?: any;
    name: string;
    created_by?: any;
    modified_on?: string;
    guide?: Guide;
    tag?: string;
    id?: string;
    brand_id?: number;
    company_id?: number;
};
type SizeGuideResponse = {
    title?: string;
    created_on?: string;
    subtitle?: string;
    active?: boolean;
    modified_by?: any;
    name?: string;
    created_by?: any;
    modified_on?: string;
    guide?: any;
    tag?: string;
    id?: string;
    brand_id?: number;
    company_id?: number;
};
type MOQData = {
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
};
type SEOData = {
    description?: any;
    title?: any;
};
type OwnerAppItemResponse = {
    is_gift?: boolean;
    is_cod?: boolean;
    moq?: MOQData;
    alt_text?: any;
    seo?: SEOData;
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
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationItemMeta = {
    is_gift?: boolean;
    is_cod?: boolean;
    moq?: ApplicationItemMOQ;
    _custom_meta?: MetaFields[];
    alt_text?: any;
    _custom_json?: any;
    seo?: ApplicationItemSEO;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    values?: any[];
    data: any[];
    condition?: any[];
};
type PageResponseType = {
    total_count: number;
    next: number;
    has_next: boolean;
    current: number;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    is_active: boolean;
    name: string;
    unit?: string;
    priority: number;
    key?: string;
    slug?: string;
    display_type: string;
    logo?: string;
};
type AppConfigurationDetail = {
    is_active: boolean;
    is_default: boolean;
    attributes?: AttributeDetailsGroup[];
    name?: string;
    priority: number;
    app_id: string;
    template_slugs?: string[];
    slug: string;
    logo?: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_active: boolean;
    is_default: boolean;
    name?: string;
    priority: number;
    key: string;
    app_id: string;
    default_key: string;
    logo?: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    detail?: any;
    variant?: any;
    compare?: any;
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
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    bucket_points?: ConfigurationBucketPoints[];
    map_values?: any[];
    sort?: string;
    map?: any;
    value?: string;
    condition?: string;
};
type ConfigurationListingFilterConfig = {
    is_active: boolean;
    value_config?: ConfigurationListingFilterValue;
    type: string;
    name?: string;
    priority: number;
    key: string;
    display_name?: string;
    logo?: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    name?: string;
    priority: number;
    key: string;
    logo?: string;
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
    title?: string;
    subtitle?: string;
    size?: ProductSize;
    is_active: boolean;
    priority: number;
    key: string;
    logo?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    size: ProductSize;
    is_active: boolean;
    name: string;
    priority: number;
    key: string;
    display_type: string;
    logo?: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppCatalogConfiguration = {
    config_type: string;
    created_on?: string;
    config_id?: string;
    modified_by?: any;
    listing?: ConfigurationListing;
    created_by?: any;
    modified_on?: string;
    app_id: string;
    product?: ConfigurationProduct;
    id?: string;
    type?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    config_type: string;
    created_on?: string;
    config_id?: string;
    modified_by?: any;
    listing?: ConfigurationListing;
    created_by?: any;
    modified_on?: string;
    app_id: string;
    product?: ConfigurationProduct;
    type?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    config_type: string;
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    app_id: string;
    product?: GetCatalogConfigurationDetailsProduct;
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
    kind?: string;
    operators?: string[];
    name: string;
    display: string;
    logo?: string;
};
type ProductFiltersValue = {
    currency_symbol?: string;
    display_format?: string;
    value: any;
    min?: number;
    selected_max?: number;
    display: string;
    max?: number;
    is_selected: boolean;
    currency_code?: string;
    selected_min?: number;
    query_format?: string;
    count?: number;
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
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type Media1 = {
    type?: string;
    meta?: any;
    url: string;
};
type BannerImage = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type GetCollectionDetailNest = {
    cron?: any;
    query?: CollectionQuery[];
    tag?: string[];
    meta?: any;
    _schedule?: any;
    priority?: number;
    allow_sort?: boolean;
    badge?: any;
    slug?: string;
    is_active?: boolean;
    allow_facets?: boolean;
    app_id?: string;
    visible_facets_keys?: string[];
    logo?: Media1;
    description?: string;
    action?: Action;
    banners?: ImageUrls;
    name?: string;
    uid?: string;
    type?: string;
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
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
    page?: Page;
};
type CollectionSchedule = {
    cron?: string;
    start?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
    end?: string;
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
    description?: string;
    title?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CreateCollection = {
    query?: CollectionQuery[];
    is_visible?: boolean;
    meta?: any;
    _custom_json?: any;
    _schedule?: CollectionSchedule;
    sort_on?: string;
    created_by?: UserInfo;
    allow_sort?: boolean;
    _locale_language?: any;
    priority?: number;
    badge?: CollectionBadge;
    slug: string;
    seo?: SeoDetail;
    is_active?: boolean;
    allow_facets?: boolean;
    published?: boolean;
    app_id: string;
    visible_facets_keys?: string[];
    logo: CollectionImage;
    description?: string;
    modified_by?: UserInfo;
    banners: CollectionBanner;
    tags?: string[];
    name: string;
    type: string;
};
type CollectionCreateResponse = {
    cron?: any;
    query?: CollectionQuery[];
    tag?: string[];
    meta?: any;
    _schedule?: any;
    sort_on?: string;
    allow_sort?: boolean;
    priority?: number;
    badge?: any;
    slug?: string;
    is_active?: boolean;
    allow_facets?: boolean;
    app_id?: string;
    visible_facets_keys?: string[];
    logo?: BannerImage;
    description?: string;
    banners?: ImageUrls;
    name?: string;
    type?: string;
};
type CollectionDetailResponse = {
    description?: string;
    is_active?: boolean;
    allow_facets?: boolean;
    _schedule?: any;
    banners?: ImageUrls;
    cron?: any;
    query?: CollectionQuery[];
    name?: string;
    type?: string;
    priority?: number;
    allow_sort?: boolean;
    app_id?: string;
    tag?: string[];
    visible_facets_keys?: string[];
    meta?: any;
    badge?: any;
    slug?: string;
    logo?: Media1;
};
type UpdateCollection = {
    query?: CollectionQuery[];
    is_visible?: boolean;
    meta?: any;
    _custom_json?: any;
    _schedule?: CollectionSchedule;
    sort_on?: string;
    _locale_language?: any;
    allow_sort?: boolean;
    priority?: number;
    badge?: CollectionBadge;
    slug?: string;
    seo?: SeoDetail;
    is_active?: boolean;
    allow_facets?: boolean;
    published?: boolean;
    visible_facets_keys?: string[];
    logo?: CollectionImage;
    description?: string;
    modified_by?: UserInfo;
    banners?: CollectionBanner;
    tags?: string[];
    name?: string;
    type?: string;
};
type ProductDetailAttribute = {
    key?: string;
    value?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductBrand = {
    action?: Action;
    name?: string;
    uid?: number;
    logo?: Media1;
};
type Price1 = {
    min?: number;
    currency_code?: string;
    currency_symbol?: string;
    max?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingDetail = {
    image_nature?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    tryouts?: string[];
    discount?: string;
    attributes?: any;
    color?: string;
    rating?: number;
    medias?: Media1[];
    rating_count?: number;
    slug: string;
    highlights?: string[];
    has_variant?: boolean;
    teaser_tag?: any;
    short_description?: string;
    item_type?: string;
    brand?: ProductBrand;
    description?: string;
    sellable?: boolean;
    promo_meta?: any;
    item_code?: string;
    name?: string;
    price?: ProductListingPrice;
    product_online_date?: string;
    similars?: string[];
    uid?: number;
    type?: string;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    page?: Page;
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
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
    out_of_stock_count?: number;
    count?: number;
    sellable_count?: number;
};
type CatalogInsightBrand = {
    total_sizes?: number;
    name?: string;
    article_freshness?: number;
    total_articles?: number;
    available_sizes?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    opt_level: string;
    platform?: string;
    store_ids?: number[];
    enabled?: boolean;
    brand_ids?: number[];
    company_id?: number;
};
type CompanyOptIn = {
    opt_level: string;
    platform: string;
    created_on: number;
    modified_by?: any;
    store_ids: number[];
    created_by?: any;
    enabled: boolean;
    brand_ids: number[];
    modified_on: number;
    company_id: number;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    business_type?: string;
    name?: string;
    company_type?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    brand_name?: string;
    total_article?: number;
    brand_id?: number;
    company_id?: number;
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
    created_on?: string;
    manager?: any;
    timing?: any;
    additional_contacts?: any[];
    address?: any;
    name?: string;
    modified_on?: string;
    store_type?: string;
    store_code?: string;
    display_name?: string;
    uid?: number;
    documents?: any[];
    company_id?: number;
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
    mandatory?: boolean;
    format?: string;
    multi?: boolean;
    range?: AttributeSchemaRange;
    type: string;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    indexing: boolean;
    priority?: number;
};
type GenderDetail = {
    description?: string;
    is_nested?: boolean;
    schema?: AttributeMaster;
    name?: string;
    enabled_for_end_consumer?: boolean;
    id?: string;
    meta?: AttributeMasterMeta;
    details?: AttributeMasterDetails;
    slug?: string;
    departments?: string[];
    logo?: string;
    filters?: AttributeMasterFilter;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    code?: string;
    status?: number;
    meta?: any;
    errors?: any;
};
type UserSerializer = {
    username?: string;
    _id?: string;
    contact?: string;
    user_id?: string;
    uid?: string;
};
type GetDepartment = {
    created_on?: string;
    priority_order?: number;
    is_active?: boolean;
    modified_by?: UserSerializer;
    synonyms?: string[];
    name?: string;
    page_size?: number;
    created_by?: UserSerializer;
    modified_on?: string;
    item_type?: string;
    page_no?: number;
    slug?: string;
    search?: string;
    uid?: number;
    logo?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    code?: string;
    status?: number;
    meta?: any;
    errors?: any;
};
type DepartmentCreateUpdate = {
    priority_order: number;
    platforms?: any;
    is_active?: boolean;
    synonyms?: string[];
    _cls?: string;
    name: string;
    tags?: string[];
    _custom_json?: any;
    slug?: string;
    uid?: number;
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
    username: string;
    contact?: string;
    user_id: string;
    super_user?: boolean;
};
type DepartmentModel = {
    created_on: string;
    priority_order: number;
    modified_by?: UserDetail;
    is_active?: boolean;
    synonyms?: any[];
    _id?: any;
    _cls?: any;
    name: any;
    created_by?: UserDetail;
    verified_on?: string;
    verified_by?: UserDetail;
    _custom_json?: any;
    slug?: any;
    logo: string;
    uid?: number;
    modified_on: string;
};
type ProductTemplate = {
    description?: string;
    is_physical: boolean;
    created_on?: string;
    is_archived?: boolean;
    is_active?: boolean;
    categories?: string[];
    attributes?: string[];
    is_expirable?: boolean;
    modified_by?: any;
    name?: string;
    attributes_schema?: any[];
    created_by?: any;
    modified_on?: string;
    tag?: string;
    slug: string;
    departments?: string[];
    logo?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    description?: string;
    is_physical: boolean;
    is_archived?: boolean;
    is_active?: boolean;
    categories?: string[];
    attributes?: string[];
    is_expirable?: boolean;
    name?: string;
    attributes_schema?: any[];
    tag?: string;
    id?: string;
    slug: string;
    departments?: string[];
    logo?: string;
};
type Properties = {
    command?: any;
    currency?: any;
    no_of_boxes?: any;
    trader?: any;
    category_slug?: any;
    size_guide?: any;
    multi_size?: any;
    brand_uid?: any;
    slug?: any;
    highlights?: any;
    teaser_tag?: any;
    custom_order?: any;
    is_active?: any;
    product_group_tag?: any;
    short_description?: any;
    hsn_code?: any;
    item_type?: any;
    return_config?: any;
    country_of_origin?: any;
    media?: any;
    is_dependent?: any;
    description?: any;
    variants?: any;
    product_publish?: any;
    tags?: any;
    name?: any;
    trader_type?: any;
    item_code?: any;
    sizes?: any;
};
type GlobalValidation = {
    description?: string;
    title?: string;
    definitions?: any;
    properties?: Properties;
    required?: string[];
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
    brand?: string[];
    type?: string;
    templates?: string[];
};
type ProductDownloadsItems = {
    completed_on?: string;
    url?: string;
    created_by?: VerifiedBy;
    data?: ProductDownloadItemsData;
    template_tags?: any;
    status?: string;
    id?: string;
    seller_id?: number;
    trigger_on?: string;
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
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type Media2 = {
    landscape: string;
    logo: string;
    portrait: string;
};
type Category = {
    created_on?: string;
    is_active: boolean;
    modified_by?: any;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
    name: string;
    created_by?: any;
    priority?: number;
    tryouts?: string[];
    hierarchy?: Hierarchy[];
    media?: Media2;
    id?: string;
    slug?: string;
    departments: number[];
    level: number;
    uid?: number;
    modified_on?: string;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    is_active: boolean;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
    name: string;
    priority?: number;
    tryouts?: string[];
    media?: Media2;
    hierarchy?: Hierarchy[];
    slug?: string;
    departments: number[];
    level: number;
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
type Image = {
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
    url?: string;
};
type ReturnConfigResponse = {
    returnable: boolean;
    time: number;
    unit: string;
};
type Logo = {
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
    url?: string;
};
type ProductPublished = {
    product_online_date?: string;
    is_set?: boolean;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Product = {
    currency?: string;
    created_on?: string;
    template_tag?: string;
    no_of_boxes?: number;
    trader?: any[];
    category?: any;
    image_nature?: string;
    moq?: any;
    category_uid?: number;
    variant_group?: any;
    verified_by?: VerifiedBy;
    category_slug?: string;
    _custom_json?: any;
    modified_on?: string;
    all_sizes?: any[];
    primary_color?: string;
    attributes?: any;
    color?: string;
    size_guide?: string;
    multi_size?: boolean;
    created_by?: any;
    brand_uid?: number;
    images?: Image[];
    verified_on?: string;
    id?: string;
    slug?: string;
    highlights?: string[];
    all_company_ids?: number[];
    teaser_tag?: any;
    custom_order?: any;
    is_active?: boolean;
    is_set?: boolean;
    product_group_tag?: string[];
    is_image_less_product?: boolean;
    short_description?: string;
    hsn_code?: string;
    pending?: string;
    item_type?: string;
    return_config?: ReturnConfigResponse;
    country_of_origin?: string;
    media?: Media1[];
    brand?: Brand;
    is_dependent?: boolean;
    description?: string;
    variants?: any;
    l3_mapping?: string[];
    is_physical?: boolean;
    modified_by?: any;
    is_expirable?: boolean;
    product_publish?: ProductPublished;
    item_code?: string;
    variant_media?: any;
    name?: string;
    tags?: string[];
    all_identifiers?: string[];
    net_quantity?: NetQuantityResponse;
    stage?: string;
    tax_identifier?: any;
    departments?: number[];
    uid?: number;
    sizes?: any[];
    company_id?: number;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type Trader = {
    address?: string[];
    name: any;
    type?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
    manufacturing_time?: number;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type ProductCreateUpdateSchemaV2 = {
    currency: string;
    template_tag: string;
    no_of_boxes?: number;
    trader: Trader[];
    variant_group?: any;
    category_slug: string;
    _custom_json?: any;
    attributes: any;
    size_guide?: string;
    multi_size?: boolean;
    brand_uid: number;
    requester?: string;
    slug: string;
    highlights?: string[];
    teaser_tag?: TeaserTag;
    custom_order?: CustomOrder;
    is_active?: boolean;
    is_set?: boolean;
    product_group_tag?: string[];
    is_image_less_product?: boolean;
    short_description?: string;
    item_type: string;
    return_config: ReturnConfig;
    country_of_origin: string;
    media?: Media1[];
    bulk_job_id?: string;
    is_dependent?: boolean;
    description?: string;
    variants?: any;
    action?: string;
    change_request_id?: any;
    product_publish?: ProductPublish;
    variant_media?: any;
    name: string;
    tags?: string[];
    net_quantity?: NetQuantity;
    tax_identifier: TaxIdentifier;
    uid?: number;
    departments: number[];
    item_code: string;
    sizes: any[];
    company_id: number;
};
type ProductVariants = {
    name?: string;
    brand_uid?: number;
    category_uid?: number;
    media?: Media1[];
    uid?: number;
    item_code?: string;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    created_on?: string;
    variant?: boolean;
    suggestion?: string;
    filters: AttributeMasterFilter;
    modified_on?: string;
    raw_key?: string;
    synonyms?: any;
    created_by?: any;
    slug: string;
    enabled_for_end_consumer?: boolean;
    details: AttributeMasterDetails;
    logo?: string;
    description?: string;
    modified_by?: any;
    is_nested?: boolean;
    schema: AttributeMaster;
    tags?: string[];
    name?: string;
    unit?: string;
    departments: string[];
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ProductCreateUpdate = {
    currency: string;
    template_tag: string;
    no_of_boxes?: number;
    trader: Trader[];
    variant_group?: any;
    category_slug: string;
    _custom_json?: any;
    size_guide?: string;
    multi_size?: boolean;
    brand_uid: number;
    requester?: string;
    slug: string;
    highlights?: string[];
    teaser_tag?: TeaserTag;
    custom_order?: CustomOrder;
    is_active?: boolean;
    is_set?: boolean;
    product_group_tag?: string[];
    is_image_less_product?: boolean;
    short_description?: string;
    item_type: string;
    return_config: ReturnConfig;
    country_of_origin: string;
    media?: Media1[];
    bulk_job_id?: string;
    is_dependent?: boolean;
    description?: string;
    variants?: any;
    action?: string;
    change_request_id?: any;
    product_publish?: ProductPublish;
    variant_media?: any;
    name: any;
    tags?: string[];
    net_quantity?: NetQuantity;
    tax_identifier: TaxIdentifier;
    uid?: number;
    departments: number[];
    item_code: any;
    company_id: number;
};
type ValidateIdentifier = {
    gtin_value: string;
    primary?: boolean;
    gtin_type: string;
};
type AllSizes = {
    item_weight_unit_of_measure: any;
    size: any;
    item_weight: number;
    identifiers?: ValidateIdentifier[];
    item_width: number;
    item_dimensions_unit_of_measure: string;
    item_length: number;
    item_height: number;
};
type ListALLSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    username?: string;
    full_name?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    cancelled?: number;
    created_on?: string;
    template_tag?: string;
    is_active?: boolean;
    file_path?: string;
    modified_by?: UserDetail1;
    total?: number;
    cancelled_records?: string[];
    created_by?: UserDetail1;
    stage?: string;
    template?: ProductTemplate;
    succeed?: number;
    failed?: number;
    failed_records?: string[];
    modified_on?: string;
    company_id?: number;
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
    cancelled?: number;
    tracking_url?: string;
    created_on: string;
    template_tag?: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    file_path?: string;
    total?: number;
    cancelled_records?: any[];
    created_by?: UserInfo1;
    stage?: string;
    succeed?: number;
    custom_template_tag?: string;
    failed?: number;
    failed_records?: any[];
    modified_on?: string;
    company_id: number;
};
type BulkResponse = {
    created_on: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    created_by?: UserInfo1;
    batch_id: string;
    modified_on?: string;
};
type BulkProductRequest = {
    data: any[];
    batch_id: string;
    template_tag: string;
    company_id: number;
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
    cancelled?: number;
    tracking_url?: string;
    created_on?: string;
    modified_by?: UserCommon;
    file_path?: string;
    is_active?: boolean;
    retry?: number;
    total?: number;
    cancelled_records?: string[];
    created_by?: UserCommon;
    stage?: string;
    succeed?: number;
    id?: string;
    failed?: number;
    failed_records?: string[];
    modified_on?: string;
    company_id?: number;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductBulkAssets = {
    user: any;
    url: string;
    company_id?: number;
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    size?: string;
    company_id?: number;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    currency?: string;
    size?: string;
    sellable_quantity?: number;
    seller_identifier?: string;
    identifiers?: any;
    price?: number;
    price_transfer?: number;
    store?: any;
    item_id?: number;
    price_effective?: number;
    inventory_updated_on?: string;
    uid?: string;
    quantity?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ItemQuery = {
    brand_uid?: number;
    item_code?: string;
    uid?: number;
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
    name?: string;
    quantity?: number;
};
type GTIN = {
    gtin_value: any;
    primary?: boolean;
    gtin_type: string;
};
type InvSize = {
    currency: string;
    item_weight_unit_of_measure?: string;
    size: any;
    is_set?: boolean;
    item_weight?: number;
    expiration_date?: string;
    price?: number;
    price_transfer?: number;
    item_width?: number;
    set?: InventorySet;
    item_dimensions_unit_of_measure?: string;
    identifiers: GTIN[];
    store_code: string;
    item_length?: number;
    price_effective: number;
    quantity: number;
    item_height?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
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
type DimensionResponse = {
    is_default: boolean;
    unit: string;
    width: number;
    height: number;
    length: number;
};
type CompanyMeta = {
    id: number;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type ReturnConfig1 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type BrandMeta = {
    name: string;
    id: number;
};
type PriceMeta = {
    currency: string;
    tp_notes?: any;
    effective: number;
    updated_at?: string;
    transfer: number;
    marked: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
    not_available?: QuantityBase;
    damaged?: QuantityBase;
};
type InventorySellerResponse = {
    total_quantity: number;
    trace_id?: string;
    weight: WeightResponse;
    trader?: Trader1[];
    meta?: any;
    track_inventory?: boolean;
    item_id: number;
    _custom_json?: any;
    dimension: DimensionResponse;
    company: CompanyMeta;
    fynd_item_code: string;
    created_by?: UserSerializer;
    set?: InventorySet;
    store: StoreMeta;
    identifier: any;
    manufacturer: ManufacturerResponse;
    is_active?: boolean;
    is_set?: boolean;
    fragile: boolean;
    seller_identifier: string;
    raw_meta?: any;
    fynd_meta?: any;
    return_config?: ReturnConfig1;
    country_of_origin: string;
    fynd_article_code: string;
    brand: BrandMeta;
    size: string;
    modified_by?: UserSerializer;
    expiration_date?: string;
    tags?: string[];
    price: PriceMeta;
    stage?: string;
    quantities?: Quantities;
    tax_identifier?: any;
    added_on_store?: string;
    uid: string;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    cancelled?: number;
    created_on?: string;
    is_active?: boolean;
    file_path?: string;
    modified_by?: any;
    total?: number;
    cancelled_records?: string[];
    created_by?: any;
    stage?: string;
    id?: string;
    succeed?: number;
    failed?: number;
    failed_records?: string[];
    modified_on?: string;
    company_id?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    total_quantity?: number;
    currency?: string;
    item_weight_unit_of_measure?: string;
    trace_id?: string;
    seller_identifier: string;
    expiration_date?: string;
    tags?: string[];
    price?: number;
    price_marked?: number;
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    price_effective?: number;
    quantity?: number;
};
type InventoryBulkRequest = {
    batch_id: string;
    user?: any;
    sizes: InventoryJobPayload[];
    company_id: number;
};
type InventoryExportJob = {
    completed_on?: string;
    url?: string;
    request_params?: any;
    status?: string;
    seller_id: number;
    trigger_on?: string;
    task_id: string;
};
type InventoryExportRequest = {
    brand?: number[];
    store?: number[];
    type?: string;
};
type InventoryExportResponse = {
    request_params?: any;
    status?: string;
    seller_id: number;
    trigger_on?: string;
    task_id: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type DimensionResponse1 = {
    length?: number;
    unit?: string;
    height?: number;
    width?: number;
};
type CompanyMeta1 = {
    id?: number;
};
type ArticleStoreResponse = {
    store_type?: string;
    name?: string;
    store_code?: string;
    uid?: number;
};
type ManufacturerResponse1 = {
    address?: string;
    name?: string;
    is_default?: boolean;
};
type ReturnConfig2 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type PriceArticle = {
    currency?: string;
    tp_notes?: any;
    effective?: number;
    transfer?: number;
    marked?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    order_committed?: Quantity;
    sellable?: Quantity;
    not_available?: Quantity;
    damaged?: Quantity;
};
type GetInventories = {
    total_quantity?: number;
    trace_id?: string;
    weight?: WeightResponse1;
    trader?: Trader2[];
    track_inventory?: boolean;
    item_id?: number;
    inventory_updated_on?: string;
    dimension?: DimensionResponse1;
    company?: CompanyMeta1;
    created_by?: UserSerializer;
    store?: ArticleStoreResponse;
    id?: string;
    identifier?: any;
    manufacturer?: ManufacturerResponse1;
    is_set?: boolean;
    seller_identifier?: string;
    return_config?: ReturnConfig2;
    country_of_origin?: string;
    brand?: BrandMeta1;
    date_meta?: DateMeta;
    size?: string;
    platforms?: any;
    modified_by?: UserSerializer;
    expiration_date?: string;
    tags?: string[];
    price?: PriceArticle;
    stage?: string;
    quantities?: QuantitiesArticle;
    tax_identifier?: any;
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
    total_quantity?: number;
    trace_id?: string;
    seller_identifier: string;
    expiration_date?: string;
    tags?: string[];
    price_marked?: number;
    store_id: number;
    price_effective?: number;
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    meta?: any;
    company_id: number;
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
    message: string;
    items?: InventoryResponseItem[];
};
type HsnCodesObject = {
    tax1?: number;
    hs2_code?: string;
    tax_on_mrp?: boolean;
    tax2?: number;
    hsn_code?: string;
    threshold1?: number;
    tax_on_esp?: boolean;
    threshold2?: number;
    id?: string;
    modified_on?: string;
    company_id?: number;
};
type PageResponse = {
    size?: number;
    has_previous?: boolean;
    item_total?: number;
    has_next?: boolean;
    current?: string;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    tax1: number;
    hs2_code: string;
    tax_on_mrp: boolean;
    is_active?: boolean;
    tax2?: number;
    hsn_code: string;
    threshold1: number;
    tax_on_esp?: boolean;
    threshold2?: number;
    uid?: number;
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
    effective_date: string;
    cess?: number;
    rate: number;
    threshold: number;
};
type HSNDataInsertV2 = {
    description: string;
    created_on?: string;
    taxes: TaxSlab[];
    modified_by?: any;
    country_code: string;
    hsn_code: string;
    created_by?: any;
    reporting_hsn: string;
    modified_on?: string;
    type: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    action?: Action;
    banners?: ImageUrls;
    name?: string;
    slug?: string;
    departments?: string[];
    uid?: number;
    logo?: Media;
    discount?: string;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    priority_order?: number;
    name?: string;
    slug?: string;
    uid?: number;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    action?: Action;
    banners?: ImageUrls;
    name?: string;
    _custom_json?: any;
    slug?: string;
    uid?: number;
    childs?: any[];
};
type SecondLevelChild = {
    action?: Action;
    banners?: ImageUrls;
    name?: string;
    _custom_json?: any;
    slug?: string;
    uid?: number;
    childs?: ThirdLevelChild[];
};
type Child = {
    action?: Action;
    banners?: ImageUrls;
    name?: string;
    _custom_json?: any;
    slug?: string;
    uid?: number;
    childs?: SecondLevelChild[];
};
type CategoryItems = {
    action?: Action;
    banners?: ImageUrls;
    name?: string;
    slug?: string;
    uid?: number;
    childs?: Child[];
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
    operators?: any;
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    page: Page;
};
type ProductDetail = {
    image_nature?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    tryouts?: string[];
    attributes?: any;
    color?: string;
    rating?: number;
    medias?: Media1[];
    rating_count?: number;
    slug: string;
    highlights?: string[];
    has_variant?: boolean;
    teaser_tag?: any;
    short_description?: string;
    item_type?: string;
    brand?: ProductBrand;
    description?: string;
    promo_meta?: any;
    item_code?: string;
    name?: string;
    product_online_date?: string;
    similars?: string[];
    uid?: number;
    type?: string;
};
type InventoryPage = {
    has_previous?: boolean;
    item_total: number;
    next_id?: string;
    has_next?: boolean;
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
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    opening?: LocationTimingSerializer;
    weekday: string;
    closing?: LocationTimingSerializer;
};
type UserSerializer1 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type UserSerializer2 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetAddressSerializer = {
    address_type?: string;
    country_code?: string;
    longitude?: number;
    country?: string;
    pincode?: number;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    latitude?: number;
    landmark?: string;
};
type GetCompanySerializer = {
    reject_reason?: string;
    created_on?: string;
    business_type?: string;
    company_type?: string;
    modified_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    name?: string;
    created_by?: UserSerializer2;
    stage?: string;
    verified_on?: string;
    verified_by?: UserSerializer2;
    uid?: number;
    modified_on?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type InvoiceCredSerializer = {
    username?: string;
    enabled?: boolean;
    password?: string;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type GetLocationSerializer = {
    created_on?: string;
    integration_type?: LocationIntegrationType;
    timing?: LocationDayWiseSerializer[];
    verified_by?: UserSerializer1;
    manager?: LocationManagerSerializer;
    _custom_json?: any;
    phone_number?: string;
    modified_on?: string;
    company?: GetCompanySerializer;
    created_by?: UserSerializer1;
    verified_on?: string;
    display_name: string;
    product_return_config?: ProductReturnConfigSerializer;
    code: string;
    address: GetAddressSerializer;
    warnings?: any;
    store_type?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    documents?: Document[];
    modified_by?: UserSerializer1;
    name: string;
    stage?: string;
    uid?: number;
    notification_emails?: string[];
    contact_numbers?: SellerPhoneNumber[];
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
    is_active?: boolean;
    name?: string;
    app_id: string;
    _custom_json?: any;
    uid: number;
    logo?: string;
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
