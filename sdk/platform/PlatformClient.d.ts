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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcDetailsRequest, EdcDevice, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceAddUpdateResponse, EdcAddRequest, EdcDeviceListResponse, FilterInfoOption, FiltersInfo, ShipmentItemFulFillingStore, UserDataInfo, ShipmentStatus, Prices, GSTDetailsData, PlatformItem, BagUnit, PaymentModeInfo, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, TrackingList, BagStateMapper, BagStatusHistory, UserDetailsData, Identifier, FinancialBreakup, PlatformDeliveryAddress, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBagArticle, BagConfigs, CurrentStatus, OrderBrandName, BagGST, OrderBags, FulfillingStore, ShipmentPayments, ShipmentStatusData, DPDetailsData, OrderDetailsData, ShipmentInfoResponse, PlatformShipment, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, B2BPODetails, BagMeta, Attributes, Item, ArticleDetails, Dates, EInvoicePortalDetails, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, StoreMeta, StoreAddress, Store, PDFLinks, AffiliateMeta, EInvoice, EinvoiceInfo, DebugInfo, ShipmentTimeStamp, BuyerDetails, Formatted, LockData, ShipmentMeta, AffiliateDetails, Weight, Dimensions, ReturnConfig, Article, Brand, BagReturnableCancelableStatus, BagGSTDetails, AffiliateBagDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, MarketPlacePdf, AffiliateBag, OrderUser, UserData, OrderPriority, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, TaxInfo, ShippingInfo, BillingInfo, ProcessingDates, LineItem, Shipment, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, ApplicationItemSEO, ApplicationItemMOQ, MetaFields, ApplicationItemMeta, SuccessResponse1, SEOData, MOQData, OwnerAppItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionImage, CollectionBanner, CollectionBadge, SeoDetail, CollectionQuery, CollectionSchedule, UserInfo, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, Price1, ProductListingPrice, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterFilter, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, Trader, ProductPublish, TaxIdentifier, NetQuantity, TeaserTag, CustomOrder, ProductCreateUpdateSchemaV2, ProductPublished, NetQuantityResponse, ReturnConfigResponse, Logo, Image, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, ProductCreateUpdate, SingleProductResponse, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, Trader1, ManufacturerResponse, ReturnConfig1, PriceMeta, WeightResponse, CompanyMeta, BrandMeta, DimensionResponse, QuantityBase, Quantities, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, Trader2, ManufacturerResponse1, ArticleStoreResponse, ReturnConfig2, PriceArticle, WeightResponse1, CompanyMeta1, BrandMeta1, DimensionResponse1, Quantity, QuantitiesArticle, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, SellerPhoneNumber, LocationManagerSerializer, GetAddressSerializer, LocationIntegrationType, UserSerializer1, GetCompanySerializer, LocationTimingSerializer, LocationDayWiseSerializer, UserSerializer2, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, ContactDetails, BusinessCountryInfo, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, UsesRemaining, UsesRestriction, PostOrder, PriceRange, BulkBundleRestriction, PaymentAllowValue, PaymentModes, Restrictions, Rule, DisplayMetaDict, DisplayMeta, Validity, CouponAuthor, CouponAction, RuleDefinition, CouponDateMeta, CouponSchedule, State, Ownership, Validation, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, DisplayMeta1, PromotionAction, PromotionSchedule, Visibility, UsesRemaining1, UsesRestriction1, PostOrder1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, CompareObject, ItemCriteria, PromotionAuthor, PromotionDateMeta, DiscountOffer, DiscountRule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ProductAvailability, PromoMeta, ProductPrice, ProductPriceInfo, CartProductIdentifer, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, ProductImage, CategoryInfo, ActionQuery, ProductAction, CartProduct, CartProductInfo, CouponBreakup, RawBreakup, DisplayBreakup, LoyaltyPoints, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
type FilterInfoOption = {
    text: string;
    name?: string;
    value?: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    text: string;
    value: string;
    type: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type UserDataInfo = {
    last_name?: string;
    avis_user_id?: string;
    mobile?: string;
    name?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    uid?: number;
    first_name?: string;
    email?: string;
};
type ShipmentStatus = {
    hex_code: string;
    ops_status: string;
    actual_status: string;
    status: string;
    title: string;
};
type Prices = {
    delivery_charge?: number;
    amount_paid?: number;
    cashback_applied?: number;
    price_effective?: number;
    tax_collected_at_source?: number;
    price_marked?: number;
    value_of_good?: number;
    coupon_value?: number;
    refund_amount?: number;
    discount?: number;
    cashback?: number;
    amount_paid_roundoff?: number;
    fynd_credits?: number;
    promotion_effective_discount?: number;
    refund_credit?: number;
    cod_charges?: number;
};
type GSTDetailsData = {
    gst_fee: number;
    tax_collected_at_source: number;
    gstin_code: string;
    value_of_good: number;
    brand_calculated_amount: number;
};
type PlatformItem = {
    id?: number;
    images?: string[];
    l1_category?: string[];
    l3_category?: number;
    size?: string;
    name?: string;
    can_return?: boolean;
    code?: string;
    color?: string;
    department_id?: number;
    image?: string[];
    can_cancel?: boolean;
    l3_category_name?: string;
};
type BagUnit = {
    item_quantity: number;
    ordering_channel: string;
    prices?: Prices;
    can_return?: boolean;
    bag_id: number;
    shipment_id: string;
    gst?: GSTDetailsData;
    can_cancel?: boolean;
    total_shipment_bags: number;
    item?: PlatformItem;
    status: any;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItem = {
    fulfilling_store?: ShipmentItemFulFillingStore;
    id: string;
    user?: UserDataInfo;
    total_shipments_in_order: number;
    created_at: string;
    shipment_status?: ShipmentStatus;
    sla?: any;
    prices?: Prices;
    fulfilling_centre: string;
    payment_methods?: any;
    bags?: BagUnit[];
    channel?: any;
    application?: any;
    shipment_created_at: number;
    payment_mode_info?: PaymentModeInfo;
    total_bags_count: number;
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    applied_filters?: any;
    page?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type TrackingList = {
    text: string;
    status: string;
    is_passed?: boolean;
    time?: string;
    is_current?: boolean;
};
type BagStateMapper = {
    display_name: string;
    app_display_name?: string;
    state_type: string;
    name: string;
    bs_id: number;
    is_active?: boolean;
    app_state_name?: string;
    notify_customer?: boolean;
    app_facing?: boolean;
    journey_type: string;
};
type BagStatusHistory = {
    display_name?: string;
    state_id?: number;
    app_display_name?: string;
    status: string;
    state_type?: string;
    delivery_awb_number?: string;
    created_at?: string;
    updated_at?: string;
    bag_state_mapper?: BagStateMapper;
    reasons?: any[];
    bag_id?: number;
    shipment_id?: string;
    forward?: boolean;
    store_id?: number;
    delivery_partner_id?: number;
    bsh_id?: number;
    kafka_sync?: boolean;
};
type UserDetailsData = {
    address: string;
    name: string;
    city: string;
    phone: string;
    email: string;
    state: string;
    pincode: string;
    country: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    price_effective: number;
    gst_tag: string;
    coupon_value: number;
    pm_price_split: any;
    coupon_effective_discount: number;
    gst_fee: string;
    size: string;
    tax_collected_at_source?: number;
    price_marked: number;
    fynd_credits: number;
    total_units: number;
    identifiers: Identifier;
    amount_paid: number;
    value_of_good: number;
    discount: number;
    amount_paid_roundoff?: number;
    cod_charges: number;
    gst_tax_percentage: number;
    delivery_charge: number;
    cashback_applied: number;
    transfer_price: number;
    item_name: string;
    hsn_code: string;
    cashback: number;
    added_to_fynd_cash: boolean;
    promotion_effective_discount: number;
    refund_credit: number;
    brand_calculated_amount: number;
};
type PlatformDeliveryAddress = {
    address2?: string;
    landmark?: string;
    area?: string;
    longitude?: number;
    address_category?: string;
    created_at?: string;
    updated_at?: string;
    city?: string;
    state?: string;
    email?: string;
    phone?: string;
    version?: string;
    pincode?: string;
    address_type?: string;
    latitude?: number;
    contact_person?: string;
    country?: string;
    address1?: string;
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
    discount_rules?: DiscountRules[];
    promotion_name?: string;
    promotion_type?: string;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    promo_id?: string;
    amount?: number;
    mrp_promotion?: boolean;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type BagConfigs = {
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
};
type CurrentStatus = {
    state_id?: number;
    current_status_id: number;
    state_type?: string;
    created_at?: string;
    delivery_awb_number?: number;
    status?: string;
    updated_at?: number;
    bag_state_mapper?: BagStateMapper;
    bag_id?: number;
    shipment_id?: string;
    store_id?: number;
    delivery_partner_id?: number;
    kafka_sync?: boolean;
};
type OrderBrandName = {
    id: number;
    brand_name: string;
    logo: string;
    modified_on?: string;
    created_on: string;
    company?: string;
};
type BagGST = {
    gst_fee?: number;
    gstin_code?: string;
    value_of_good?: number;
    hsn_code?: string;
    gst_tag?: string;
    brand_calculated_amount?: number;
    is_default_hsn_code?: boolean;
    gst_tax_percentage?: number;
};
type OrderBags = {
    financial_breakup?: FinancialBreakup;
    display_name?: string;
    delivery_address?: PlatformDeliveryAddress;
    quantity?: number;
    can_cancel?: boolean;
    item?: PlatformItem;
    identifier?: string;
    applied_promos?: AppliedPromos[];
    line_number?: number;
    parent_promo_bags?: any;
    bag_id: number;
    entity_type?: string;
    seller_identifier?: string;
    article?: OrderBagArticle;
    bag_configs?: BagConfigs;
    current_status?: CurrentStatus;
    brand?: OrderBrandName;
    gst_details?: BagGST;
    prices?: Prices;
    can_return?: boolean;
};
type FulfillingStore = {
    id: number;
    store_name: string;
    meta: any;
    address: string;
    code: string;
    city: string;
    fulfillment_channel: string;
    phone: string;
    state: string;
    pincode: string;
    contact_person: string;
    country: string;
};
type ShipmentPayments = {
    mode: string;
    source?: string;
    logo?: string;
};
type ShipmentStatusData = {
    id?: number;
    created_at?: string;
    bag_list?: string[];
    shipment_id?: string;
    status?: string;
};
type DPDetailsData = {
    id?: number;
    track_url?: string;
    name?: string;
    awb_no?: string;
    gst_tag?: string;
    eway_bill_id?: string;
    pincode?: string;
    country?: string;
};
type OrderDetailsData = {
    ordering_channel_logo?: any;
    ordering_channel?: string;
    cod_charges?: string;
    affiliate_id?: string;
    fynd_order_id: string;
    source?: string;
    order_value?: string;
    tax_details?: any;
    order_date?: string;
};
type ShipmentInfoResponse = {
    is_not_fynd_source: boolean;
    tracking_list?: TrackingList[];
    items: any[];
    user_id: string;
    enable_tracking?: boolean;
    shipment_status?: string;
    priority_text?: string;
    current_shipment_status: any;
    refund_text?: string;
    shipment_id: string;
    refund_details?: any;
    lock_status: string;
    credit_note_id: string;
    order_created_time?: string;
    can_cancel?: boolean;
    beneficiary_details?: boolean;
    picked_date?: string;
    pay_button?: string;
    tracking_url: string;
    child_nodes?: string[];
    bag_status_history?: BagStatusHistory[];
    billing_details?: UserDetailsData;
    enable_dp_tracking?: boolean;
    forward_tracking_list?: any[];
    email_id: string;
    bags?: OrderBags[];
    user_info?: any;
    coupon?: any;
    forward_shipment_status?: any[];
    total_bags?: number;
    delivery_details?: UserDetailsData;
    bank_data?: any;
    ordering_store: any;
    journey_type?: string;
    packaging_type?: string;
    fulfilling_store?: FulfillingStore;
    is_pdsr?: string;
    payments?: ShipmentPayments;
    order_status: any;
    due_date?: string;
    custom_meta?: any[];
    delivery_status: any[];
    fyndstore_emp: any;
    go_green?: boolean;
    user_agent?: string;
    order_type: string;
    can_break: string;
    operational_status?: string;
    shipment_quantity?: number;
    vertical?: string;
    status_progress: number;
    shipment_images?: string[];
    status?: ShipmentStatusData;
    is_invoiced: boolean;
    secured_delivery_flag?: string;
    mid?: string;
    kirana_store_id?: string;
    forward_order_status?: any[];
    is_fynd_store?: string;
    gst_details?: GSTDetailsData;
    escalation?: any;
    dp_details?: DPDetailsData;
    delivery_slot?: any;
    prices?: Prices;
    invoice: any;
    order?: OrderDetailsData;
    platform_logo: boolean;
    is_fynd_coupon: boolean;
    affiliate_shipment_id: string;
    can_return?: boolean;
    is_packaging_order: boolean;
    total_items?: number;
    company: any;
    replacement_details?: string;
    payment_mode?: string;
};
type PlatformShipment = {
    tracking_list?: TrackingList[];
    shipment_status?: string;
    priority_text?: string;
    shipment_id: string;
    picked_date?: string;
    bag_status_history?: BagStatusHistory[];
    billing_details?: UserDetailsData;
    enable_dp_tracking?: boolean;
    bags?: OrderBags[];
    coupon?: any;
    total_bags?: number;
    delivery_details?: UserDetailsData;
    journey_type?: string;
    packaging_type?: string;
    fulfilling_store?: FulfillingStore;
    payments?: ShipmentPayments;
    custom_meta?: any[];
    user_agent?: string;
    operational_status?: string;
    shipment_quantity?: number;
    vertical?: string;
    shipment_images?: string[];
    status?: ShipmentStatusData;
    gst_details?: GSTDetailsData;
    dp_details?: DPDetailsData;
    delivery_slot?: any;
    prices?: Prices;
    order?: OrderDetailsData;
    platform_logo?: string;
    total_items?: number;
    payment_mode?: string;
};
type OrderMeta = {
    customer_note?: string;
    currency_symbol?: string;
    order_child_entities?: string[];
    order_platform?: string;
    extra_meta?: any;
    staff?: any;
    mongo_cart_id?: number;
    comment?: string;
    order_type?: string;
    employee_id?: number;
    order_tags?: any[];
    files?: any[];
    payment_type?: string;
    cart_id?: number;
    ordering_store?: number;
};
type OrderDict = {
    order_date: string;
    meta?: OrderMeta;
    payment_methods?: any;
    fynd_order_id: string;
};
type ShipmentDetailsResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    order?: OrderDict;
};
type SubLane = {
    index?: number;
    text?: string;
    actions?: any[];
    value?: string;
    total_items?: number;
};
type SuperLane = {
    text: string;
    value: string;
    options?: SubLane[];
    total_items?: number;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformBreakupValues = {
    name?: string;
    value?: string;
    display?: string;
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformOrderItems = {
    breakup_values?: PlatformBreakupValues[];
    order_id?: string;
    meta?: any;
    user_info?: UserDataInfo;
    channel?: PlatformChannel;
    total_order_value?: number;
    order_value?: number;
    order_created_time?: string;
    shipments?: PlatformShipment[];
    payment_mode?: string;
};
type OrderListingResponse = {
    success?: boolean;
    total_count?: number;
    items?: PlatformOrderItems[];
    lane?: string;
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
    value: number;
    text: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    shipment_type?: string;
    raw_status?: string;
    meta?: any;
    reason?: string;
    updated_at?: string;
    updated_time?: string;
    last_location_recieved_at?: string;
    awb?: string;
    account_name?: string;
    status?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type AdvanceFilterInfo = {
    returned?: FiltersInfo[];
    filters?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    processed?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
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
    request_details?: any;
    display_name?: string;
    report_id?: string;
    s3_key?: string;
    report_requested_at?: string;
    report_name?: string;
    report_created_at?: string;
    status?: string;
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
    message?: string;
    value?: string;
    type?: string;
};
type JioCodeUpsertResponse = {
    trace_id?: string;
    success?: boolean;
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
    identifier?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    store_name?: string;
    company_id?: string;
    data?: any;
    do_invoice_label_generated: boolean;
    invoice?: any;
    label?: any;
    store_id?: string;
    batch_id: string;
    store_code?: string;
    invoice_status?: string;
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
    tags?: string[];
    size?: number;
    file_path?: string;
    content_type?: string;
    cdn?: URL;
    file_name?: string;
    namespace?: string;
    operation?: string;
    method?: string;
};
type bulkListingData = {
    failed_shipments?: any[];
    user_id?: string;
    processing_shipments?: string[];
    successful_shipments?: any[];
    user_name?: string;
    store_code?: string;
    id?: string;
    company_id?: number;
    successful?: number;
    failed?: number;
    file_name?: string;
    uploaded_on?: string;
    processing?: number;
    total?: number;
    store_name?: string;
    store_id?: number;
    batch_id?: string;
    status?: string;
    excel_url?: string;
};
type BulkListingPage = {
    size?: number;
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    type?: string;
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
    company_id?: string;
    successful_shipments_count?: number;
    successful_shipment_ids?: string[];
    processing_shipments_count?: number;
    total_shipments_count?: number;
    failed_shipments_count?: number;
    batch_id?: string;
};
type BulkActionDetailsResponse = {
    success?: string;
    data?: BulkActionDetailsDataField[];
    user_id?: string;
    message?: string;
    uploaded_by?: string;
    error?: string[];
    uploaded_on?: string;
    failed_records?: string[];
    status?: boolean;
};
type B2BPODetails = {
    partial_can_ret?: boolean;
    docker_number?: string;
    total_gst_percentage?: number;
    po_line_amount?: number;
    po_tax_amount?: number;
    item_base_price?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Attributes = {
    marketer_name?: string;
    marketer_address?: string;
    brand_name?: string;
    gender?: string[];
    name?: string;
    primary_color_hex?: string;
    essential?: string;
    primary_color?: string;
    primary_material?: string;
};
type Item = {
    meta?: any;
    slug_key: string;
    last_updated_at?: string;
    item_id: number;
    can_cancel?: boolean;
    l1_category?: string[];
    size: string;
    webstore_product_url?: string;
    l3_category_name?: string;
    l3_category?: number;
    gender?: string;
    l2_category?: string[];
    image: string[];
    code?: string;
    department_id?: number;
    l1_category_id?: number;
    brand: string;
    attributes: Attributes;
    l2_category_id?: number;
    name: string;
    brand_id: number;
    can_return?: boolean;
    branch_url?: string;
    color?: string;
};
type ArticleDetails = {
    status?: any;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type EInvoicePortalDetails = {
    user?: string;
    username?: string;
    password?: string;
};
type Document = {
    ds_type: string;
    verified: boolean;
    value: string;
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
    notification_emails?: string[];
    einvoice_portal_details?: EInvoicePortalDetails;
    documents?: StoreDocuments;
    timing?: any[];
    product_return_config?: any;
    ewaybill_portal_details?: any;
    stage: string;
    gst_number?: string;
    additional_contact_details?: any;
    gst_credentials: StoreGstCredentials;
};
type StoreAddress = {
    landmark?: string;
    address_category: string;
    country_code: string;
    latitude: number;
    address2?: string;
    updated_at: string;
    state: string;
    version?: string;
    contact_person: string;
    area?: string;
    created_at: string;
    city: string;
    phone: string;
    pincode: number;
    address1: string;
    longitude: number;
    email?: string;
    address_type: string;
    country: string;
};
type Store = {
    alohomora_user_id?: number;
    meta: StoreMeta;
    vat_no?: string;
    fulfillment_channel: string;
    mall_name?: string;
    order_integration_id?: string;
    location_type: string;
    brand_store_tags?: string[];
    store_address_json?: StoreAddress;
    latitude: number;
    address2?: string;
    mall_area?: string;
    company_id: number;
    is_enabled_for_recon?: boolean;
    s_id: string;
    updated_at?: string;
    is_archived?: boolean;
    is_active?: boolean;
    state: string;
    login_username: string;
    contact_person: string;
    packaging_material_count?: number;
    parent_store_id?: number;
    created_at: string;
    code?: string;
    city: string;
    phone: number;
    store_active_from?: string;
    address1: string;
    longitude: number;
    pincode: string;
    name: string;
    brand_id?: any;
    store_email: string;
    country: string;
};
type PDFLinks = {
    label_a4?: string;
    label_type: string;
    invoice?: string;
    credit_note_url?: string;
    label_pos?: string;
    label?: string;
    invoice_a4?: string;
    label_a6?: string;
    po_invoice?: string;
    invoice_pos?: string;
    b2b?: string;
    invoice_type: string;
    invoice_a6?: string;
};
type AffiliateMeta = {
    employee_discount?: number;
    channel_order_id?: string;
    coupon_code?: string;
    is_priority?: boolean;
    channel_shipment_id?: string;
    due_date?: string;
    loyalty_discount?: number;
    box_type?: string;
    quantity?: number;
    order_item_id?: string;
    size_level_total_qty?: number;
};
type EInvoice = {
    signed_invoice?: string;
    signed_qr_code?: string;
    acknowledge_no?: number;
    error_message?: string;
    acknowledge_date?: string;
    error_code?: string;
    irn?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type BuyerDetails = {
    address: string;
    name: string;
    ajio_site_id?: string;
    city: string;
    state: string;
    gstin: string;
    pincode: number;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type LockData = {
    lock_message?: string;
    locked?: boolean;
    mto?: boolean;
};
type ShipmentMeta = {
    awb_number?: string;
    ewaybill_info?: any;
    return_affiliate_shipment_id?: string;
    forward_affiliate_order_id?: string;
    einvoice_info?: EinvoiceInfo;
    debug_info?: DebugInfo;
    auto_trigger_dp_assignment_acf: boolean;
    dp_options?: any;
    weight: number;
    store_invoice_updated_date?: string;
    shipment_volumetric_weight?: number;
    return_details?: any;
    same_store_available: boolean;
    timestamp?: ShipmentTimeStamp;
    b2c_buyer_details?: any;
    packaging_name?: string;
    external?: any;
    due_date?: string;
    assign_dp_from_sb?: boolean;
    bag_weight?: any;
    order_type?: string;
    b2b_buyer_details?: BuyerDetails;
    dp_id?: string;
    dp_sort_key?: string;
    fulfilment_priority_text?: string;
    dp_name?: string;
    forward_affiliate_shipment_id?: string;
    po_number?: string;
    formatted?: Formatted;
    return_awb_number?: string;
    box_type?: string;
    lock_data?: LockData;
    return_affiliate_order_id?: string;
    marketplace_store_id?: string;
    shipment_weight?: number;
    return_store_node?: number;
};
type AffiliateDetails = {
    affiliate_order_id: string;
    ad_id?: string;
    pdf_links?: PDFLinks;
    affiliate_meta: AffiliateMeta;
    affiliate_id?: string;
    affiliate_shipment_id: string;
    company_affiliate_tag?: string;
    shipment_meta: ShipmentMeta;
    affiliate_store_id: string;
    affiliate_bag_id: string;
};
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
type Dimensions = {
    is_default?: boolean;
    unit?: string;
    width?: number;
    height?: number;
    length?: number;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Article = {
    _id: string;
    a_set?: any;
    size: string;
    weight?: Weight;
    raw_meta?: any;
    esp_modified?: any;
    code?: string;
    uid: string;
    child_details?: any;
    is_set?: boolean;
    identifiers: Identifier;
    dimensions?: Dimensions;
    return_config?: ReturnConfig;
    seller_identifier: string;
};
type Brand = {
    credit_note_expiry_days?: number;
    brand_name: string;
    brand_id: number;
    logo?: string;
    script_last_ran?: string;
    created_on?: number;
    modified_on?: number;
    is_virtual_invoice?: boolean;
    credit_note_allowed?: boolean;
    pickup_location?: string;
    invoice_prefix?: string;
    start_date?: string;
    company: string;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
};
type BagGSTDetails = {
    gst_fee: number;
    sgst_tax_percentage: number;
    hsn_code_id: string;
    tax_collected_at_source: number;
    gstin_code?: string;
    sgst_gst_fee: string;
    cgst_tax_percentage: number;
    value_of_good: number;
    hsn_code: string;
    igst_tax_percentage: number;
    gst_tag: string;
    igst_gst_fee: string;
    cgst_gst_fee: string;
    brand_calculated_amount: number;
    is_default_hsn_code?: boolean;
    gst_tax_percentage: number;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
    loyalty_discount?: number;
    affiliate_bag_id: string;
};
type BagDetailsPlatformResponse = {
    financial_breakup: FinancialBreakup[];
    display_name?: string;
    meta?: BagMeta;
    qc_required?: any;
    order_integration_id?: string;
    quantity?: number;
    shipment_id?: string;
    item: Item;
    identifier?: string;
    applied_promos?: any[];
    no_of_bags_order?: number;
    line_number?: number;
    bag_status_history?: BagStatusHistory;
    article_details?: ArticleDetails;
    parent_promo_bags?: any;
    b_type?: string;
    entity_type?: string;
    dates?: Dates;
    ordering_store?: Store;
    journey_type: string;
    restore_promos?: any;
    seller_identifier?: string;
    affiliate_details?: AffiliateDetails;
    article: Article;
    reasons?: any[];
    operational_status?: string;
    current_operational_status: BagStatusHistory;
    current_status: BagStatusHistory;
    b_id: number;
    original_bag_list?: number[];
    brand: Brand;
    bag_status: BagStatusHistory[];
    status: BagReturnableCancelableStatus;
    gst_details: BagGSTDetails;
    affiliate_bag_details: AffiliateBagDetails;
    bag_update_time?: number;
    prices: Prices;
    restore_coupon?: boolean;
    tags?: string[];
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    size: number;
    page_type: string;
    current: number;
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
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    app_id?: string;
    _custom_json?: any;
    result: SearchKeywordResult;
    words?: string[];
    is_active?: boolean;
};
type GetSearchWordsData = {
    app_id?: string;
    _custom_json?: any;
    result?: any;
    words?: string[];
    uid?: string;
    is_active?: boolean;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type Media = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type AutocompletePageAction = {
    query?: any;
    url?: string;
    type?: string;
    params?: any;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    logo?: Media;
    _custom_json?: any;
    display?: string;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    _custom_json?: any;
    words?: string[];
    results?: AutocompleteResult[];
    is_active?: boolean;
};
type GetAutocompleteWordsData = {
    app_id?: string;
    _custom_json?: any;
    uid?: string;
    words?: string[];
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    _custom_json?: any;
    results?: any[];
    words?: string[];
};
type ProductBundleItem = {
    allow_remove?: boolean;
    max_quantity: number;
    product_uid: number;
    min_quantity: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
};
type ProductBundleRequest = {
    logo?: string;
    company_id?: number;
    slug: string;
    products: ProductBundleItem[];
    created_on?: string;
    modified_by?: any;
    same_store_assignment?: boolean;
    meta?: any;
    name: string;
    choice: string;
    modified_on?: string;
    page_visibility?: string[];
    created_by?: any;
    is_active: boolean;
};
type GetProductBundleCreateResponse = {
    logo?: string;
    company_id?: number;
    slug: string;
    products: ProductBundleItem[];
    created_on?: string;
    modified_by?: any;
    same_store_assignment?: boolean;
    meta?: any;
    name: string;
    choice: string;
    modified_on?: string;
    page_visibility?: string[];
    id?: string;
    created_by?: any;
    is_active: boolean;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleUpdateRequest = {
    logo?: string;
    company_id?: number;
    slug: string;
    products: ProductBundleItem[];
    modified_by?: any;
    same_store_assignment?: boolean;
    meta?: any;
    name: string;
    choice: string;
    modified_on?: string;
    page_visibility?: string[];
    is_active: boolean;
};
type Size = {
    is_available?: boolean;
    value?: string;
    display?: string;
    quantity?: number;
};
type LimitedProductData = {
    images?: string[];
    slug?: string;
    identifier?: any;
    sizes?: string[];
    name?: string;
    short_description?: string;
    country_of_origin?: string;
    uid?: number;
    attributes?: any;
    item_code?: string;
    price?: any;
    quantity?: number;
};
type Price = {
    min_effective?: number;
    currency?: string;
    min_marked?: number;
    max_effective?: number;
    max_marked?: number;
};
type GetProducts = {
    allow_remove?: boolean;
    sizes?: Size[];
    max_quantity?: number;
    product_uid?: number;
    min_quantity?: number;
    auto_select?: boolean;
    product_details?: LimitedProductData;
    auto_add_to_cart?: boolean;
    price?: Price;
};
type GetProductBundleResponse = {
    logo?: string;
    company_id?: number;
    slug?: string;
    products?: GetProducts[];
    same_store_assignment?: boolean;
    meta?: any;
    name?: string;
    choice?: string;
    page_visibility?: string[];
    is_active?: boolean;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    company_id?: number;
    title: string;
    created_on?: string;
    modified_by?: any;
    brand_id?: number;
    subtitle?: string;
    tag?: string;
    name: string;
    description?: string;
    modified_on?: string;
    id?: string;
    created_by?: any;
    guide?: Guide;
    image?: string;
    active?: boolean;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type SizeGuideResponse = {
    company_id?: number;
    title?: string;
    created_on?: string;
    modified_by?: any;
    brand_id?: number;
    subtitle?: string;
    tag?: string;
    modified_on?: string;
    name?: string;
    id?: string;
    created_by?: any;
    guide?: any;
    active?: boolean;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
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
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    moq?: ApplicationItemMOQ;
    is_gift?: boolean;
    _custom_json?: any;
    is_cod?: boolean;
    _custom_meta?: MetaFields[];
    alt_text?: any;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    moq?: MOQData;
    is_gift?: boolean;
    is_cod?: boolean;
    alt_text?: any;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    values?: any[];
    data: any[];
};
type AttributeDetailsGroup = {
    logo?: string;
    priority: number;
    slug?: string;
    display_type: string;
    name: string;
    unit?: string;
    key?: string;
    is_active: boolean;
};
type AppConfigurationDetail = {
    logo?: string;
    is_default: boolean;
    slug: string;
    priority: number;
    template_slugs?: string[];
    app_id: string;
    name?: string;
    attributes?: AttributeDetailsGroup[];
    is_active: boolean;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    next: number;
    current: number;
    total_count: number;
    has_next: boolean;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    logo?: string;
    is_default: boolean;
    priority: number;
    app_id: string;
    name?: string;
    default_key: string;
    key: string;
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
    units?: any[];
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
    compare?: any;
    similar?: any;
    detail?: any;
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
    logo?: string;
    size: ProductSize;
    priority: number;
    display_type: string;
    name: string;
    key: string;
    is_active: boolean;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    logo?: string;
    size?: ProductSize;
    priority: number;
    title?: string;
    subtitle?: string;
    key: string;
    is_active: boolean;
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
    name?: string;
    key: string;
    is_active: boolean;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    value?: string;
    map_values?: any[];
    map?: any;
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    logo?: string;
    priority: number;
    name?: string;
    type: string;
    value_config?: ConfigurationListingFilterValue;
    key: string;
    is_active: boolean;
    display_name?: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type AppConfiguration = {
    product?: ConfigurationProduct;
    app_id: string;
    config_type: string;
    created_on?: string;
    modified_by?: any;
    config_id?: string;
    listing?: ConfigurationListing;
    modified_on?: string;
    type?: string;
    created_by?: any;
};
type AppCatalogConfiguration = {
    product?: ConfigurationProduct;
    app_id: string;
    config_type: string;
    created_on?: string;
    modified_by?: any;
    config_id?: string;
    listing?: ConfigurationListing;
    modified_on?: string;
    type?: string;
    id?: string;
    created_by?: any;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    product?: GetCatalogConfigurationDetailsProduct;
    app_id: string;
    config_type: string;
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    is_selected?: boolean;
    name?: string;
    value?: string;
};
type ProductFiltersKey = {
    logo?: string;
    kind?: string;
    operators?: string[];
    name: string;
    display: string;
};
type ProductFiltersValue = {
    is_selected: boolean;
    display_format?: string;
    currency_code?: string;
    selected_min?: number;
    selected_max?: number;
    currency_symbol?: string;
    max?: number;
    min?: number;
    value: any;
    count?: number;
    query_format?: string;
    display: string;
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
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionQuery = {
    value: any[];
    attribute: string;
    op: string;
};
type CollectionSchedule = {
    start?: string;
    end?: string;
    next_schedule?: NextSchedule[];
    cron?: string;
    duration?: number;
};
type UserInfo = {
    username?: string;
    user_id?: string;
    uid?: string;
    email?: string;
};
type CreateCollection = {
    slug: string;
    name: string;
    banners: CollectionBanner;
    _locale_language?: any;
    sort_on?: string;
    badge?: CollectionBadge;
    is_active?: boolean;
    seo?: SeoDetail;
    allow_facets?: boolean;
    priority?: number;
    description?: string;
    logo: CollectionImage;
    query?: CollectionQuery[];
    app_id: string;
    is_visible?: boolean;
    tags?: string[];
    allow_sort?: boolean;
    _schedule?: CollectionSchedule;
    published?: boolean;
    visible_facets_keys?: string[];
    modified_by?: UserInfo;
    meta?: any;
    type: string;
    _custom_json?: any;
    created_by?: UserInfo;
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
type CollectionCreateResponse = {
    slug?: string;
    name?: string;
    banners?: ImageUrls;
    sort_on?: string;
    badge?: any;
    is_active?: boolean;
    allow_facets?: boolean;
    priority?: number;
    tag?: string[];
    description?: string;
    logo?: BannerImage;
    query?: CollectionQuery[];
    app_id?: string;
    allow_sort?: boolean;
    _schedule?: any;
    cron?: any;
    visible_facets_keys?: string[];
    meta?: any;
    type?: string;
};
type CollectionListingFilterType = {
    name?: string;
    is_selected?: boolean;
    display?: string;
};
type CollectionListingFilterTag = {
    name?: string;
    is_selected?: boolean;
    display?: string;
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
type GetCollectionDetailNest = {
    slug?: string;
    name?: string;
    banners?: ImageUrls;
    badge?: any;
    is_active?: boolean;
    allow_facets?: boolean;
    priority?: number;
    tag?: string[];
    description?: string;
    uid?: string;
    action?: Action;
    logo?: Media1;
    query?: CollectionQuery[];
    app_id?: string;
    allow_sort?: boolean;
    _schedule?: any;
    cron?: any;
    visible_facets_keys?: string[];
    meta?: any;
    type?: string;
};
type GetCollectionListingResponse = {
    page?: Page;
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
};
type CollectionDetailResponse = {
    logo?: Media1;
    query?: CollectionQuery[];
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    priority?: number;
    slug?: string;
    app_id?: string;
    tag?: string[];
    meta?: any;
    name?: string;
    banners?: ImageUrls;
    description?: string;
    type?: string;
    allow_sort?: boolean;
    _schedule?: any;
    cron?: any;
    badge?: any;
    is_active?: boolean;
};
type UpdateCollection = {
    slug?: string;
    name?: string;
    banners?: CollectionBanner;
    _locale_language?: any;
    sort_on?: string;
    badge?: CollectionBadge;
    is_active?: boolean;
    seo?: SeoDetail;
    allow_facets?: boolean;
    priority?: number;
    description?: string;
    logo?: CollectionImage;
    query?: CollectionQuery[];
    is_visible?: boolean;
    tags?: string[];
    _schedule?: CollectionSchedule;
    allow_sort?: boolean;
    published?: boolean;
    visible_facets_keys?: string[];
    modified_by?: UserInfo;
    meta?: any;
    _custom_json?: any;
    type?: string;
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
type Price1 = {
    max?: number;
    currency_symbol?: string;
    min?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductBrand = {
    logo?: Media1;
    name?: string;
    uid?: number;
    action?: Action;
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
    slug: string;
    rating_count?: number;
    product_online_date?: string;
    name?: string;
    attributes?: any;
    short_description?: string;
    rating?: number;
    description?: string;
    uid?: number;
    price?: ProductListingPrice;
    color?: string;
    sellable?: boolean;
    has_variant?: boolean;
    promo_meta?: any;
    medias?: Media1[];
    similars?: string[];
    image_nature?: string;
    tryouts?: string[];
    teaser_tag?: any;
    brand?: ProductBrand;
    item_type?: string;
    discount?: string;
    highlights?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    type?: string;
    item_code?: string;
};
type GetCollectionItemsResponse = {
    page?: Page;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
};
type CatalogInsightBrand = {
    available_sizes?: number;
    available_articles?: number;
    name?: string;
    total_articles?: number;
    article_freshness?: number;
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
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    company_id?: number;
    brand_ids?: number[];
    opt_level: string;
    enabled?: boolean;
    platform?: string;
    store_ids?: number[];
};
type CompanyOptIn = {
    company_id: number;
    brand_ids: number[];
    created_by?: any;
    opt_level: string;
    created_on: number;
    modified_by?: any;
    enabled: boolean;
    platform: string;
    modified_on: number;
    store_ids: number[];
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    name?: string;
    company_type?: string;
    uid?: number;
    business_type?: string;
};
type CompanyBrandDetail = {
    total_article?: number;
    company_id?: number;
    brand_id?: number;
    brand_name?: string;
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
    address?: any;
    company_id?: number;
    created_on?: string;
    store_code?: string;
    timing?: any;
    name?: string;
    modified_on?: string;
    documents?: any[];
    uid?: number;
    store_type?: string;
    manager?: any;
    additional_contacts?: any[];
    display_name?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeMasterFilter = {
    depends_on?: string[];
    indexing: boolean;
    priority?: number;
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
    max?: number;
    min?: number;
};
type AttributeMaster = {
    range?: AttributeSchemaRange;
    format?: string;
    allowed_values?: string[];
    mandatory?: boolean;
    type: string;
    multi?: boolean;
};
type GenderDetail = {
    logo?: string;
    slug?: string;
    filters?: AttributeMasterFilter;
    details?: AttributeMasterDetails;
    meta?: AttributeMasterMeta;
    name?: string;
    description?: string;
    is_nested?: boolean;
    id?: string;
    departments?: string[];
    schema?: AttributeMaster;
    enabled_for_end_consumer?: boolean;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    message?: string;
    code?: string;
    errors?: any;
    meta?: any;
    status?: number;
};
type DepartmentCreateUpdate = {
    logo: string;
    slug?: string;
    priority_order: number;
    platforms?: any;
    tags?: string[];
    name: string;
    _custom_json?: any;
    synonyms?: string[];
    uid?: number;
    _cls?: string;
    is_active?: boolean;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    contact?: string;
    _id?: string;
    username?: string;
    user_id?: string;
    uid?: string;
};
type GetDepartment = {
    logo?: string;
    slug?: string;
    priority_order?: number;
    page_size?: number;
    created_on?: string;
    search?: string;
    modified_by?: UserSerializer;
    item_type?: string;
    name?: string;
    modified_on?: string;
    synonyms?: string[];
    uid?: number;
    created_by?: UserSerializer;
    page_no?: number;
    is_active?: boolean;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    message?: string;
    code?: string;
    errors?: any;
    meta?: any;
    status?: number;
};
type UserDetail = {
    contact?: string;
    super_user?: boolean;
    username: string;
    user_id: string;
};
type DepartmentModel = {
    verified_on?: string;
    logo: string;
    slug?: any;
    priority_order: number;
    created_on: string;
    modified_by?: UserDetail;
    _id?: any;
    modified_on: string;
    name: any;
    _custom_json?: any;
    synonyms?: any[];
    uid?: number;
    _cls?: any;
    created_by?: UserDetail;
    verified_by?: UserDetail;
    is_active?: boolean;
};
type ProductTemplate = {
    logo?: string;
    is_physical: boolean;
    attributes_schema?: any[];
    slug: string;
    is_archived?: boolean;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
    categories?: string[];
    tag?: string;
    name?: string;
    description?: string;
    modified_on?: string;
    attributes?: string[];
    departments?: string[];
    is_active?: boolean;
    is_expirable?: boolean;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    slug?: any;
    sizes?: any;
    name?: any;
    trader?: any;
    hsn_code?: any;
    product_publish?: any;
    is_active?: any;
    command?: any;
    media?: any;
    description?: any;
    short_description?: any;
    country_of_origin?: any;
    return_config?: any;
    size_guide?: any;
    is_dependent?: any;
    trader_type?: any;
    tags?: any;
    variants?: any;
    teaser_tag?: any;
    currency?: any;
    multi_size?: any;
    custom_order?: any;
    item_type?: any;
    highlights?: any;
    no_of_boxes?: any;
    brand_uid?: any;
    product_group_tag?: any;
    category_slug?: any;
    item_code?: any;
};
type GlobalValidation = {
    title?: string;
    properties?: Properties;
    definitions?: any;
    description?: string;
    type?: string;
    required?: string[];
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    logo?: string;
    is_physical: boolean;
    attributes_schema?: any[];
    slug: string;
    is_archived?: boolean;
    categories?: string[];
    tag?: string;
    name?: string;
    description?: string;
    id?: string;
    attributes?: string[];
    departments?: string[];
    is_active?: boolean;
    is_expirable?: boolean;
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
    url?: string;
    completed_on?: string;
    seller_id?: number;
    status?: string;
    data?: ProductDownloadItemsData;
    task_id?: string;
    id?: string;
    created_by?: VerifiedBy;
    trigger_on?: string;
    template_tags?: any;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
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
type CategoryRequestBody = {
    slug?: string;
    priority?: number;
    media?: Media2;
    name: string;
    level: number;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
    departments: number[];
    hierarchy?: Hierarchy[];
    is_active: boolean;
    tryouts?: string[];
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    slug?: string;
    priority?: number;
    media?: Media2;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
    name: string;
    modified_on?: string;
    level: number;
    synonyms?: string[];
    uid?: number;
    marketplaces?: CategoryMapping;
    departments: number[];
    id?: string;
    hierarchy?: Hierarchy[];
    is_active: boolean;
    tryouts?: string[];
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
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
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type ProductCreateUpdateSchemaV2 = {
    slug: string;
    sizes: any[];
    variant_media?: any;
    name: string;
    trader: Trader[];
    attributes: any;
    variant_group?: any;
    departments: number[];
    is_set?: boolean;
    product_publish?: ProductPublish;
    is_active?: boolean;
    company_id: number;
    tax_identifier: TaxIdentifier;
    requester?: string;
    media?: Media1[];
    description?: string;
    short_description?: string;
    country_of_origin: string;
    return_config: ReturnConfig;
    uid?: number;
    bulk_job_id?: string;
    net_quantity?: NetQuantity;
    size_guide?: string;
    action?: string;
    is_dependent?: boolean;
    tags?: string[];
    variants?: any;
    change_request_id?: any;
    template_tag: string;
    teaser_tag?: TeaserTag;
    currency: string;
    multi_size?: boolean;
    is_image_less_product?: boolean;
    custom_order?: CustomOrder;
    item_type: string;
    highlights?: string[];
    no_of_boxes?: number;
    brand_uid: number;
    product_group_tag?: string[];
    category_slug: string;
    _custom_json?: any;
    item_code: string;
};
type ProductPublished = {
    product_online_date?: string;
    is_set?: boolean;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type ReturnConfigResponse = {
    returnable: boolean;
    unit: string;
    time: number;
};
type Logo = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type Image = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
};
type Product = {
    l3_mapping?: string[];
    slug?: string;
    sizes?: any[];
    variant_media?: any;
    all_identifiers?: string[];
    stage?: string;
    name?: string;
    trader?: any[];
    modified_on?: string;
    attributes?: any;
    departments?: number[];
    hsn_code?: string;
    variant_group?: any;
    is_set?: boolean;
    product_publish?: ProductPublished;
    is_active?: boolean;
    is_expirable?: boolean;
    primary_color?: string;
    company_id?: number;
    verified_on?: string;
    tax_identifier?: any;
    media?: Media1[];
    moq?: any;
    created_on?: string;
    description?: string;
    country_of_origin?: string;
    short_description?: string;
    net_quantity?: NetQuantityResponse;
    uid?: number;
    return_config?: ReturnConfigResponse;
    size_guide?: string;
    color?: string;
    is_dependent?: boolean;
    all_sizes?: any[];
    tags?: string[];
    image_nature?: string;
    variants?: any;
    id?: string;
    template_tag?: string;
    verified_by?: VerifiedBy;
    category_uid?: number;
    category?: any;
    teaser_tag?: any;
    pending?: string;
    currency?: string;
    multi_size?: boolean;
    brand?: Brand;
    images?: Image[];
    is_image_less_product?: boolean;
    custom_order?: any;
    item_type?: string;
    modified_by?: any;
    highlights?: string[];
    no_of_boxes?: number;
    brand_uid?: number;
    product_group_tag?: string[];
    all_company_ids?: number[];
    category_slug?: string;
    _custom_json?: any;
    created_by?: any;
    item_code?: string;
    is_physical?: boolean;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type ProductVariants = {
    media?: Media1[];
    brand_uid?: number;
    name?: string;
    uid?: number;
    item_code?: string;
    category_uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    slug: string;
    name?: string;
    modified_on?: string;
    suggestion?: string;
    departments: string[];
    enabled_for_end_consumer?: boolean;
    created_on?: string;
    filters: AttributeMasterFilter;
    is_nested?: boolean;
    description?: string;
    raw_key?: string;
    unit?: string;
    synonyms?: any;
    logo?: string;
    tags?: string[];
    variant?: boolean;
    modified_by?: any;
    details: AttributeMasterDetails;
    created_by?: any;
    schema: AttributeMaster;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ProductCreateUpdate = {
    slug: string;
    variant_media?: any;
    name: any;
    trader: Trader[];
    variant_group?: any;
    departments: number[];
    is_set?: boolean;
    product_publish?: ProductPublish;
    is_active?: boolean;
    company_id: number;
    tax_identifier: TaxIdentifier;
    requester?: string;
    media?: Media1[];
    description?: string;
    short_description?: string;
    country_of_origin: string;
    return_config: ReturnConfig;
    uid?: number;
    bulk_job_id?: string;
    net_quantity?: NetQuantity;
    size_guide?: string;
    action?: string;
    is_dependent?: boolean;
    tags?: string[];
    variants?: any;
    change_request_id?: any;
    template_tag: string;
    teaser_tag?: TeaserTag;
    currency: string;
    multi_size?: boolean;
    is_image_less_product?: boolean;
    custom_order?: CustomOrder;
    item_type: string;
    highlights?: string[];
    no_of_boxes?: number;
    brand_uid: number;
    product_group_tag?: string[];
    category_slug: string;
    _custom_json?: any;
    item_code: any;
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    gtin_value: string;
    gtin_type: string;
    primary?: boolean;
};
type AllSizes = {
    size: any;
    item_height: number;
    item_dimensions_unit_of_measure: string;
    item_weight_unit_of_measure: any;
    identifiers?: ValidateIdentifier[];
    item_width: number;
    item_weight: number;
    item_length: number;
};
type ListALLSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    username?: string;
    user_id?: string;
    uid?: string;
    email?: string;
};
type BulkJob = {
    company_id: number;
    cancelled_records?: any[];
    failed?: number;
    created_on: string;
    modified_by?: UserInfo1;
    cancelled?: number;
    tracking_url?: string;
    custom_template_tag?: string;
    stage?: string;
    file_path?: string;
    failed_records?: any[];
    modified_on?: string;
    template_tag?: string;
    created_by?: UserInfo1;
    succeed?: number;
    total?: number;
    is_active?: boolean;
};
type BulkResponse = {
    created_on: string;
    modified_by?: UserInfo1;
    modified_on?: string;
    batch_id: string;
    created_by?: UserInfo1;
    is_active?: boolean;
};
type UserDetail1 = {
    full_name?: string;
    username?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    company_id?: number;
    failed?: number;
    cancelled_records?: string[];
    created_on?: string;
    cancelled?: number;
    modified_by?: UserDetail1;
    stage?: string;
    file_path?: string;
    failed_records?: string[];
    modified_on?: string;
    template?: ProductTemplate;
    template_tag?: string;
    created_by?: UserDetail1;
    succeed?: number;
    total?: number;
    is_active?: boolean;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
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
type ProductBulkAssets = {
    company_id?: number;
    url: string;
    user: any;
};
type UserCommon = {
    company_id?: number;
    username?: string;
    user_id?: string;
};
type Items = {
    company_id?: number;
    cancelled_records?: string[];
    failed?: number;
    created_on?: string;
    modified_by?: UserCommon;
    cancelled?: number;
    retry?: number;
    tracking_url?: string;
    stage?: string;
    file_path?: string;
    failed_records?: string[];
    modified_on?: string;
    id?: string;
    created_by?: UserCommon;
    succeed?: number;
    total?: number;
    is_active?: boolean;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    company_id?: number;
    size?: string;
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
    size_distribution: SizeDistribution;
    name?: string;
    quantity?: number;
};
type GTIN = {
    gtin_value: any;
    gtin_type: string;
    primary?: boolean;
};
type InvSize = {
    size: any;
    price_effective: number;
    item_height?: number;
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    currency: string;
    set?: InventorySet;
    item_weight_unit_of_measure?: string;
    store_code: string;
    price_transfer?: number;
    identifiers: GTIN[];
    is_set?: boolean;
    item_width?: number;
    quantity: number;
    item_weight?: number;
    price?: number;
    item_length?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    company_id: number;
    sizes: InvSize[];
};
type InventoryResponse = {
    price_effective?: number;
    size?: string;
    seller_identifier?: string;
    price_transfer?: number;
    inventory_updated_on?: string;
    sellable_quantity?: number;
    identifiers?: any;
    item_id?: number;
    store?: any;
    uid?: string;
    quantity?: number;
    price?: number;
    currency?: string;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type ReturnConfig1 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type PriceMeta = {
    transfer: number;
    marked: number;
    effective: number;
    tp_notes?: any;
    updated_at?: string;
    currency: string;
};
type WeightResponse = {
    shipping: number;
    is_default: boolean;
    unit: string;
};
type CompanyMeta = {
    id: number;
};
type BrandMeta = {
    name: string;
    id: number;
};
type DimensionResponse = {
    is_default: boolean;
    width: number;
    unit: string;
    height: number;
    length: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    sellable?: QuantityBase;
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    damaged?: QuantityBase;
};
type InventorySellerResponse = {
    size: string;
    total_quantity: number;
    stage?: string;
    trace_id?: string;
    trader?: Trader1[];
    is_set?: boolean;
    is_active?: boolean;
    tax_identifier?: any;
    manufacturer: ManufacturerResponse;
    store: StoreMeta;
    return_config?: ReturnConfig1;
    fynd_article_code: string;
    country_of_origin: string;
    uid: string;
    price: PriceMeta;
    weight: WeightResponse;
    fynd_meta?: any;
    company: CompanyMeta;
    tags?: string[];
    fynd_item_code: string;
    brand: BrandMeta;
    expiration_date?: string;
    identifier: any;
    seller_identifier: string;
    set?: InventorySet;
    added_on_store?: string;
    dimension: DimensionResponse;
    modified_by?: UserSerializer;
    fragile: boolean;
    meta?: any;
    item_id: number;
    _custom_json?: any;
    raw_meta?: any;
    created_by?: UserSerializer;
    track_inventory?: boolean;
    quantities?: Quantities;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    company_id?: number;
    cancelled_records?: string[];
    failed?: number;
    cancelled?: number;
    created_on?: string;
    modified_by?: any;
    stage?: string;
    file_path?: string;
    failed_records?: string[];
    modified_on?: string;
    id?: string;
    created_by?: any;
    succeed?: number;
    total?: number;
    is_active?: boolean;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    price_effective?: number;
    expiration_date?: string;
    item_dimensions_unit_of_measure?: string;
    total_quantity?: number;
    seller_identifier: string;
    item_weight_unit_of_measure?: string;
    store_code: string;
    trace_id?: string;
    tags?: string[];
    quantity?: number;
    price_marked?: number;
    price?: number;
    currency?: string;
};
type InventoryBulkRequest = {
    batch_id: string;
    company_id: number;
    sizes: InventoryJobPayload[];
    user?: any;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    request_params?: any;
    seller_id: number;
    status?: string;
    task_id: string;
    trigger_on?: string;
};
type InventoryExportJob = {
    request_params?: any;
    url?: string;
    completed_on?: string;
    seller_id: number;
    status?: string;
    task_id: string;
    trigger_on?: string;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type ManufacturerResponse1 = {
    address?: string;
    name?: string;
    is_default?: boolean;
};
type ArticleStoreResponse = {
    store_type?: string;
    name?: string;
    store_code?: string;
    uid?: number;
};
type ReturnConfig2 = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type PriceArticle = {
    transfer?: number;
    marked?: number;
    effective?: number;
    tp_notes?: any;
    currency?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type DimensionResponse1 = {
    width?: number;
    height?: number;
    unit?: string;
    length?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    sellable?: Quantity;
    order_committed?: Quantity;
    not_available?: Quantity;
    damaged?: Quantity;
};
type GetInventories = {
    size?: string;
    total_quantity?: number;
    inventory_updated_on?: string;
    stage?: string;
    trace_id?: string;
    trader?: Trader2[];
    is_set?: boolean;
    tax_identifier?: any;
    platforms?: any;
    manufacturer?: ManufacturerResponse1;
    store?: ArticleStoreResponse;
    return_config?: ReturnConfig2;
    country_of_origin?: string;
    uid?: string;
    price?: PriceArticle;
    weight?: WeightResponse1;
    company?: CompanyMeta1;
    tags?: string[];
    id?: string;
    expiration_date?: string;
    brand?: BrandMeta1;
    identifier?: any;
    seller_identifier?: string;
    date_meta?: DateMeta;
    dimension?: DimensionResponse1;
    modified_by?: UserSerializer;
    item_id?: number;
    created_by?: UserSerializer;
    track_inventory?: boolean;
    quantities?: QuantitiesArticle;
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
    data?: FilerList[];
    multivalues?: boolean;
};
type InventoryPayload = {
    price_effective?: number;
    expiration_date?: string;
    total_quantity?: number;
    seller_identifier: string;
    store_id: number;
    trace_id?: string;
    tags?: string[];
    price_marked?: number;
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
type HsnUpsert = {
    tax_on_mrp: boolean;
    company_id: number;
    tax2?: number;
    hs2_code: string;
    tax1: number;
    threshold1: number;
    threshold2?: number;
    uid?: number;
    hsn_code: string;
    tax_on_esp?: boolean;
    is_active?: boolean;
};
type HsnCodesObject = {
    tax_on_mrp?: boolean;
    company_id?: number;
    tax2?: number;
    hs2_code?: string;
    tax1?: number;
    threshold1?: number;
    modified_on?: string;
    threshold2?: number;
    id?: string;
    hsn_code?: string;
    tax_on_esp?: boolean;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    size?: number;
    has_previous?: boolean;
    current?: string;
    item_total?: number;
    has_next?: boolean;
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
    threshold: number;
    effective_date: string;
    rate: number;
    cess?: number;
};
type HSNDataInsertV2 = {
    country_code: string;
    created_by?: any;
    reporting_hsn: string;
    modified_by?: any;
    created_on?: string;
    taxes: TaxSlab[];
    modified_on?: string;
    description: string;
    type: string;
    hsn_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    logo?: Media;
    slug?: string;
    discount?: string;
    name?: string;
    banners?: ImageUrls;
    uid?: number;
    departments?: string[];
    action?: Action;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    logo?: Media;
    slug?: string;
    priority_order?: number;
    name?: string;
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
    slug?: string;
    childs?: any[];
    name?: string;
    banners?: ImageUrls;
    _custom_json?: any;
    uid?: number;
    action?: Action;
};
type SecondLevelChild = {
    slug?: string;
    childs?: ThirdLevelChild[];
    name?: string;
    banners?: ImageUrls;
    _custom_json?: any;
    uid?: number;
    action?: Action;
};
type Child = {
    slug?: string;
    childs?: SecondLevelChild[];
    name?: string;
    banners?: ImageUrls;
    _custom_json?: any;
    uid?: number;
    action?: Action;
};
type CategoryItems = {
    slug?: string;
    childs?: Child[];
    name?: string;
    banners?: ImageUrls;
    uid?: number;
    action?: Action;
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
    slug: string;
    rating_count?: number;
    product_online_date?: string;
    name?: string;
    attributes?: any;
    short_description?: string;
    rating?: number;
    description?: string;
    uid?: number;
    color?: string;
    has_variant?: boolean;
    promo_meta?: any;
    medias?: Media1[];
    similars?: string[];
    image_nature?: string;
    tryouts?: string[];
    teaser_tag?: any;
    brand?: ProductBrand;
    item_type?: string;
    highlights?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    type?: string;
    item_code?: string;
};
type InventoryPage = {
    next_id?: string;
    type: string;
    has_previous?: boolean;
    item_total: number;
    has_next?: boolean;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type InvoiceCredSerializer = {
    password?: string;
    enabled?: boolean;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    name?: string;
    mobile_no: SellerPhoneNumber;
    email?: string;
};
type GetAddressSerializer = {
    country_code?: string;
    address1?: string;
    state?: string;
    pincode?: number;
    longitude?: number;
    landmark?: string;
    address_type?: string;
    address2?: string;
    city?: string;
    latitude?: number;
    country?: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetCompanySerializer = {
    verified_on?: string;
    company_type?: string;
    created_on?: string;
    modified_by?: UserSerializer1;
    stage?: string;
    addresses?: GetAddressSerializer[];
    reject_reason?: string;
    modified_on?: string;
    name?: string;
    uid?: number;
    created_by?: UserSerializer1;
    verified_by?: UserSerializer1;
    business_type?: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
    opening?: LocationTimingSerializer;
};
type UserSerializer2 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetLocationSerializer = {
    product_return_config?: ProductReturnConfigSerializer;
    notification_emails?: string[];
    stage?: string;
    modified_on?: string;
    name: string;
    store_type?: string;
    verified_on?: string;
    created_on?: string;
    documents?: Document[];
    uid?: number;
    gst_credentials?: InvoiceDetailsSerializer;
    manager?: LocationManagerSerializer;
    address: GetAddressSerializer;
    integration_type?: LocationIntegrationType;
    company?: GetCompanySerializer;
    timing?: LocationDayWiseSerializer[];
    contact_numbers?: SellerPhoneNumber[];
    verified_by?: UserSerializer2;
    display_name: string;
    modified_by?: UserSerializer2;
    code: string;
    _custom_json?: any;
    created_by?: UserSerializer2;
    phone_number?: string;
    warnings?: any;
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
    name?: string;
    _custom_json?: any;
    uid: number;
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
