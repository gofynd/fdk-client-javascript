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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, FilterInfoOption, FiltersInfo, ShipmentStatus, Prices, PlatformItem, GSTDetailsData, BagUnit, UserDataInfo, PaymentModeInfo, ShipmentItemFulFillingStore, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, BagStateMapper, BagStatusHistory, TrackingList, UserDetailsData, DPDetailsData, OrderBagArticle, BagConfigs, Identifier, FinancialBreakup, OrderBrandName, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, PlatformDeliveryAddress, BagGST, OrderBags, OrderDetailsData, ShipmentPayments, ShipmentStatusData, FulfillingStore, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, AffiliateMeta, AffiliateBagDetails, StoreAddress, StoreEwaybill, StoreEinvoice, StoreGstCredentials, Document, StoreDocuments, EInvoicePortalDetails, StoreMeta, Store, ReturnConfig, Weight, Dimensions, Article, Brand, B2BPODetails, BagMeta, ArticleDetails, BagReturnableCancelableStatus, Dates, Attributes, Item, EInvoice, EinvoiceInfo, ShipmentTimeStamp, DebugInfo, BuyerDetails, LockData, Formatted, ShipmentMeta, PDFLinks, AffiliateDetails, BagGSTDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, MarketPlacePdf, AffiliateBag, OrderUser, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, UserData, OrderPriority, OrderInfo, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, PaymentMethod, PaymentInfo, BillingInfo, ShippingInfo, TaxInfo, ProcessingDates, LineItem, Shipment, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, MetaFields, ApplicationItemMOQ, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, MOQData, SEOData, OwnerAppItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionBadge, CollectionQuery, CollectionImage, CollectionSchedule, UserInfo, CollectionBanner, SeoDetail, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, SingleCategoryResponse, CategoryUpdateResponse, Trader, NetQuantity, CustomOrder, ProductPublish, TeaserTag, TaxIdentifier, ProductCreateUpdateSchemaV2, NetQuantityResponse, ProductPublished, Logo, ReturnConfigResponse, Image, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ProductCreateUpdate, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, DimensionResponse, Trader1, ManufacturerResponse, BrandMeta, WeightResponse, PriceMeta, ReturnConfig1, QuantityBase, Quantities, CompanyMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, DimensionResponse1, Trader2, ManufacturerResponse1, BrandMeta1, WeightResponse1, PriceArticle, ArticleStoreResponse, ReturnConfig2, Quantity, QuantitiesArticle, CompanyMeta1, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, LocationIntegrationType, SellerPhoneNumber, LocationTimingSerializer, LocationDayWiseSerializer, LocationManagerSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer1, GetAddressSerializer, UserSerializer2, GetCompanySerializer, ProductReturnConfigSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, CompanyTaxesSerializer, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Ownership, PriceRange, BulkBundleRestriction, PostOrder, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, Restrictions, Validation, CouponDateMeta, CouponSchedule, CouponAuthor, RuleDefinition, Rule, State, CouponAction, Validity, DisplayMetaDict, DisplayMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionAction, PromotionDateMeta, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, PostOrder1, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, Restrictions1, PromotionAuthor, Visibility, PromotionSchedule, Ownership1, DisplayMeta1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, RawBreakup, DisplayBreakup, CouponBreakup, LoyaltyPoints, CartBreakup, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, ProductAvailability, ProductImage, ActionQuery, ProductAction, BaseInfo, CategoryInfo, CartProduct, ProductPrice, ProductPriceInfo, PromoMeta, BasePrice, ArticlePriceInfo, ProductArticle, CartProductIdentifer, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    created: boolean;
    excluded_fields: string[];
    display_fields: string[];
    success: boolean;
};
type ErrorCodeDescription = {
    description: string;
    success: boolean;
    code: string;
};
type PaymentGatewayConfig = {
    key: string;
    merchant_salt: string;
    secret: string;
    is_active?: boolean;
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
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
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
type PaymentModeList = {
    intent_app_error_list?: string[];
    card_issuer?: string;
    cod_limit_per_order?: number;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_brand_image?: string;
    card_brand?: string;
    card_name?: string;
    exp_year?: number;
    display_name?: string;
    nickname?: string;
    name?: string;
    cod_limit?: number;
    remaining_limit?: number;
    retry_count?: number;
    card_reference?: string;
    exp_month?: number;
    logo_url?: PaymentModeLogo;
    intent_flow?: boolean;
    timeout?: number;
    card_fingerprint?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    display_priority?: number;
    card_number?: string;
    fynd_vpa?: string;
    intent_app?: IntentApp[];
    card_token?: string;
    card_id?: string;
    aggregator_name: string;
    card_type?: string;
    merchant_code?: string;
    expired?: boolean;
    card_isin?: string;
    code?: string;
};
type RootPaymentMode = {
    display_name: string;
    anonymous_enable?: boolean;
    aggregator_name?: string;
    name: string;
    is_pay_by_card_pl?: boolean;
    save_card?: boolean;
    display_priority: number;
    add_card_enabled?: boolean;
    list?: PaymentModeList[];
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
    payouts_aggregators: any[];
    customers: any;
    more_attributes: any;
    is_default: boolean;
    unique_transfer_no: any;
    is_active: boolean;
};
type PayoutsResponse = {
    items: Payout[];
    success: boolean;
};
type PayoutBankDetails = {
    account_no?: string;
    city?: string;
    branch_name?: string;
    country?: string;
    state?: string;
    account_holder?: string;
    pincode?: number;
    ifsc_code: string;
    account_type: string;
    bank_name?: string;
};
type PayoutRequest = {
    transfer_type: string;
    bank_details: PayoutBankDetails;
    unique_external_id: string;
    aggregator: string;
    is_active: boolean;
    users: any;
};
type PayoutResponse = {
    transfer_type: string;
    payouts: any;
    created: boolean;
    bank_details: any;
    unique_transfer_no: string;
    payment_status: string;
    aggregator: string;
    is_active: boolean;
    users: any;
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
    message: string;
    data?: any;
    success: boolean;
};
type NotFoundResourceError = {
    description: string;
    success: boolean;
    code: string;
};
type BankDetailsForOTP = {
    account_no: string;
    ifsc_code: string;
    account_holder: string;
    branch_name: string;
    bank_name: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    branch_name: string;
    success?: boolean;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    mobile?: string;
    id: number;
    modified_on: string;
    display_name: string;
    title: string;
    email: string;
    beneficiary_id: string;
    branch_name?: string;
    created_on: string;
    is_active: boolean;
    account_holder: string;
    ifsc_code: string;
    bank_name: string;
    account_no: string;
    address: string;
    subtitle: string;
    transfer_mode: string;
    comment?: string;
    delights_user_name?: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    order_id?: string;
    payment_gateway?: string;
    current_status?: string;
    extra_meta?: any;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    mode: string;
    amount: number;
    name?: string;
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
    enabled: boolean;
    cod_amount_limit?: number;
    source: string;
    payment_selection_lock?: any;
    cod_charges?: number;
    callback_url?: any;
    anonymous_cod?: boolean;
    methods: any;
    mode_of_payment: string;
};
type PlatfromPaymentConfig = {
    message: string;
    data: PlatformPaymentOptions;
    success: boolean;
};
type UpdatePlatformPaymentConfig = {
    cod_amount_limit?: number;
    payment_selection_lock?: any;
    cod_charges?: number;
    anonymous_cod?: boolean;
    methods: any;
};
type CODdata = {
    usages: number;
    user_id: string;
    limit: number;
    remaining_limit: number;
    is_active: boolean;
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
    message: string;
    success: boolean;
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
type ShipmentStatus = {
    ops_status: string;
    title: string;
    status: string;
    hex_code: string;
    actual_status: string;
};
type Prices = {
    amount_paid?: number;
    delivery_charge?: number;
    price_effective?: number;
    cod_charges?: number;
    coupon_value?: number;
    cashback?: number;
    discount?: number;
    refund_amount?: number;
    cashback_applied?: number;
    value_of_good?: number;
    price_marked?: number;
    refund_credit?: number;
    promotion_effective_discount?: number;
    fynd_credits?: number;
    tax_collected_at_source?: number;
    amount_paid_roundoff?: number;
};
type PlatformItem = {
    size?: string;
    can_return?: boolean;
    l1_category?: string[];
    can_cancel?: boolean;
    l3_category_name?: string;
    color?: string;
    department_id?: number;
    name?: string;
    id?: number;
    image?: string[];
    code?: string;
    images?: string[];
    l3_category?: number;
};
type GSTDetailsData = {
    gstin_code: string;
    value_of_good: number;
    brand_calculated_amount: number;
    gst_fee: number;
    tax_collected_at_source: number;
};
type BagUnit = {
    can_return?: boolean;
    item_quantity: number;
    can_cancel?: boolean;
    total_shipment_bags: number;
    prices?: Prices;
    status: any;
    bag_id: number;
    ordering_channel: string;
    item?: PlatformItem;
    shipment_id: string;
    gst?: GSTDetailsData;
};
type UserDataInfo = {
    mobile?: string;
    last_name?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    avis_user_id?: string;
    first_name?: string;
    email?: string;
    name?: string;
    uid?: number;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type ShipmentItem = {
    channel?: any;
    shipment_status?: ShipmentStatus;
    payment_methods?: any;
    total_bags_count: number;
    bags?: BagUnit[];
    user?: UserDataInfo;
    prices?: Prices;
    total_shipments_in_order: number;
    payment_mode_info?: PaymentModeInfo;
    id: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    application?: any;
    fulfilling_centre: string;
    sla?: any;
    shipment_created_at: number;
    created_at: string;
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    page?: any;
    applied_filters?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type BagStateMapper = {
    app_display_name?: string;
    is_active?: boolean;
    bs_id: number;
    state_type: string;
    app_facing?: boolean;
    display_name: string;
    journey_type: string;
    name: string;
    app_state_name?: string;
    notify_customer?: boolean;
};
type BagStatusHistory = {
    updated_at?: string;
    bsh_id: number;
    app_display_name?: boolean;
    delivery_partner_id?: number;
    reasons?: any[];
    state_type?: string;
    state_id: number;
    delivery_awb_number?: string;
    status: string;
    bag_id: number;
    kafka_sync?: boolean;
    display_name?: boolean;
    created_at: string;
    bag_state_mapper: BagStateMapper;
    shipment_id: string;
    forward?: boolean;
    store_id: number;
};
type TrackingList = {
    time?: string;
    is_current?: boolean;
    is_passed?: boolean;
    status: string;
    text: string;
};
type UserDetailsData = {
    address: string;
    country: string;
    city: string;
    email: string;
    state: string;
    phone: string;
    name: string;
    pincode: string;
};
type DPDetailsData = {
    awb_no?: string;
    country?: string;
    track_url?: string;
    eway_bill_id?: string;
    name?: string;
    gst_tag?: string;
    id?: string;
    pincode?: string;
};
type OrderBagArticle = {
    return_config?: any;
    uid?: string;
    identifiers?: any;
};
type BagConfigs = {
    is_active: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    can_be_cancelled: boolean;
    allow_force_return: boolean;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    size: string;
    added_to_fynd_cash: boolean;
    cashback: number;
    coupon_value: number;
    gst_tag: string;
    discount: number;
    gst_tax_percentage: number;
    value_of_good: number;
    coupon_effective_discount: number;
    promotion_effective_discount: number;
    fynd_credits: number;
    pm_price_split: any;
    amount_paid: number;
    hsn_code: string;
    cashback_applied: number;
    identifiers: Identifier;
    total_units: number;
    amount_paid_roundoff?: number;
    transfer_price: number;
    delivery_charge: number;
    price_effective: number;
    cod_charges: number;
    item_name: string;
    refund_credit: number;
    price_marked: number;
    brand_calculated_amount: number;
    gst_fee: string;
    tax_collected_at_source?: number;
};
type OrderBrandName = {
    created_on: number;
    logo: string;
    brand_name: string;
    modified_on?: number;
    company: string;
    id: number;
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
    article_quantity?: number;
    mrp_promotion?: boolean;
    amount?: number;
    promotion_type?: string;
    discount_rules?: DiscountRules[];
    buy_rules?: BuyRules[];
    promotion_name?: string;
    promo_id?: string;
};
type PlatformDeliveryAddress = {
    updated_at?: string;
    country?: string;
    city?: string;
    area?: string;
    latitude?: number;
    address_type?: string;
    address_category?: string;
    email?: string;
    state?: string;
    phone?: string;
    landmark?: string;
    version?: string;
    longitude?: number;
    created_at?: string;
    contact_person?: string;
    address2?: string;
    address1?: string;
    pincode?: string;
};
type BagGST = {
    gstin_code?: string;
    hsn_code?: string;
    gst_tag?: string;
    value_of_good?: number;
    gst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
    brand_calculated_amount?: number;
    gst_fee?: number;
};
type OrderBags = {
    can_return?: boolean;
    quantity?: number;
    article?: OrderBagArticle;
    bag_configs?: BagConfigs;
    financial_breakup?: FinancialBreakup[];
    can_cancel?: boolean;
    brand?: OrderBrandName;
    prices?: Prices;
    display_name?: string;
    applied_promos?: AppliedPromos[];
    bag_id: number;
    seller_identifier?: string;
    current_status?: string;
    identifier?: string;
    parent_promo_bags?: any;
    line_number?: number;
    entity_type?: string;
    item?: PlatformItem;
    delivery_address?: PlatformDeliveryAddress;
    gst_details?: BagGST;
};
type OrderDetailsData = {
    affiliate_id?: string;
    tax_details?: any;
    order_value?: string;
    source?: string;
    cod_charges?: string;
    fynd_order_id: string;
    ordering_channel?: string;
    order_date?: string;
    ordering_channel_logo?: any;
};
type ShipmentPayments = {
    logo?: string;
    source?: string;
    mode: string;
};
type ShipmentStatusData = {
    status?: string;
    id?: number;
    created_at?: string;
    shipment_id?: string;
    bag_list?: number[];
};
type FulfillingStore = {
    store_name: string;
    fulfillment_channel: string;
    address: string;
    city: string;
    country: string;
    meta: any;
    state: string;
    phone: string;
    id: string;
    contact_person: string;
    code: string;
    pincode: string;
};
type ShipmentInfoResponse = {
    bag_status_history?: BagStatusHistory[];
    can_return?: boolean;
    kirana_store_id?: string;
    email_id: string;
    shipment_status?: string;
    tracking_list?: TrackingList[];
    status_progress: number;
    refund_text?: string;
    custom_meta?: any[];
    lock_status: string;
    is_fynd_store?: string;
    user_agent?: string;
    packaging_type?: string;
    total_bags?: number;
    company: any;
    billing_details?: UserDetailsData;
    dp_details?: DPDetailsData;
    go_green?: boolean;
    fyndstore_emp: any;
    enable_tracking?: boolean;
    bank_data?: any;
    delivery_slot?: any;
    ordering_store: any;
    payment_mode?: string;
    delivery_details?: UserDetailsData;
    child_nodes?: string[];
    shipment_quantity?: number;
    refund_details?: any;
    secured_delivery_flag?: string;
    is_pdsr?: string;
    forward_shipment_status?: any[];
    order_status: any;
    is_invoiced: boolean;
    can_cancel?: boolean;
    replacement_details?: string;
    pay_button?: string;
    bags?: OrderBags[];
    order?: OrderDetailsData;
    prices?: Prices;
    journey_type?: string;
    priority_text?: string;
    is_fynd_coupon: boolean;
    user_id: string;
    enable_dp_tracking?: string;
    is_packaging_order: boolean;
    order_type: string;
    beneficiary_details?: boolean;
    user_info?: any;
    current_shipment_status: any;
    shipment_id: string;
    forward_order_status?: any[];
    is_not_fynd_source: boolean;
    operational_status?: string;
    coupon?: any;
    total_items?: number;
    platform_logo: boolean;
    tracking_url: string;
    picked_date?: string;
    payments?: ShipmentPayments;
    delivery_status: any[];
    vertical?: string;
    affiliate_shipment_id: string;
    due_date?: string;
    forward_tracking_list?: any[];
    credit_note_id: string;
    status?: ShipmentStatusData;
    escalation?: any;
    invoice: any;
    fulfilling_store?: FulfillingStore;
    items: any[];
    shipment_images?: string[];
    order_created_time?: string;
    gst_details?: GSTDetailsData;
    can_break: string;
    mid?: string;
};
type PlatformShipment = {
    bag_status_history?: BagStatusHistory[];
    shipment_status?: string;
    tracking_list?: TrackingList[];
    custom_meta?: any[];
    user_agent?: string;
    packaging_type?: string;
    total_bags?: number;
    billing_details?: UserDetailsData;
    dp_details?: DPDetailsData;
    delivery_slot?: any;
    payment_mode?: string;
    delivery_details?: UserDetailsData;
    shipment_quantity?: number;
    bags?: OrderBags[];
    order?: OrderDetailsData;
    prices?: Prices;
    journey_type?: string;
    priority_text?: string;
    enable_dp_tracking?: string;
    shipment_id: string;
    operational_status?: string;
    coupon?: any;
    total_items?: number;
    platform_logo?: string;
    picked_date?: string;
    payments?: ShipmentPayments;
    vertical?: string;
    status?: ShipmentStatusData;
    fulfilling_store?: FulfillingStore;
    shipment_images?: string[];
    gst_details?: GSTDetailsData;
};
type OrderDict = {
    fynd_order_id: string;
    order_date: string;
    shipment_count: number;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    custom_meta?: any[];
    order?: OrderDict;
};
type SubLane = {
    total_items?: number;
    text?: string;
    value?: string;
    actions?: any[];
    index?: number;
};
type SuperLane = {
    total_items?: number;
    text: string;
    value: string;
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
    display?: string;
    value?: string;
    name?: string;
};
type PlatformOrderItems = {
    order_id?: string;
    channel?: PlatformChannel;
    meta?: any;
    order_value?: number;
    shipments?: PlatformShipment[];
    user_info?: UserDataInfo;
    total_order_value?: number;
    payment_mode?: string;
    breakup_values?: PlatformBreakupValues[];
    order_created_time?: string;
};
type OrderListingResponse = {
    page?: Page;
    lane?: string;
    message?: string;
    total_count?: number;
    items?: PlatformOrderItems[];
    success?: boolean;
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    key: string;
    text: string;
    value: number;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    updated_at?: string;
    meta?: any;
    shipment_type?: string;
    status?: string;
    awb?: string;
    reason?: string;
    updated_time?: string;
    account_name?: string;
    raw_status?: string;
    last_location_recieved_at?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    filters?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    returned?: FiltersInfo[];
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
    report_name?: string;
    report_id?: string;
    report_type?: string;
    display_name?: string;
    status?: string;
    request_details?: any;
    report_created_at?: string;
    s3_key?: string;
    report_requested_at?: string;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    article_id?: string;
    item_id?: string;
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
    trace_id?: string;
    error?: NestedErrorSchemaDataSet[];
    data?: any[];
    identifier?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    company_id?: string;
    store_name?: string;
    invoice_status?: string;
    do_invoice_label_generated: boolean;
    label?: any;
    store_code?: string;
    invoice?: any;
    batch_id: string;
    data?: any;
    store_id?: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type FileResponse = {
    content_type?: string;
    size?: number;
    cdn?: URL;
    tags?: string[];
    namespace?: string;
    method?: string;
    operation?: string;
    upload?: FileUploadResponse;
    file_path?: string;
    file_name?: string;
};
type BulkListingPage = {
    has_next?: boolean;
    current?: number;
    size?: number;
    type?: string;
    has_previous?: boolean;
    total?: number;
};
type bulkListingData = {
    store_code?: string;
    failed_shipments?: any[];
    file_name?: string;
    store_name?: string;
    processing_shipments?: string[];
    batch_id?: string;
    failed?: number;
    successful?: number;
    successful_shipments?: any[];
    user_id?: string;
    user_name?: string;
    total?: number;
    excel_url?: string;
    company_id?: number;
    processing?: number;
    status?: string;
    id?: string;
    uploaded_on?: string;
    store_id?: number;
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
    qc_type?: string[];
    question_set?: QuestionSet[];
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
    company_id?: string;
    processing_shipments_count?: number;
    successful_shipments_count?: number;
    total_shipments_count?: number;
    failed_shipments_count?: number;
    batch_id?: string;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    message?: string;
    failed_records?: string[];
    user_id?: string;
    status?: boolean;
    success?: string;
    uploaded_by?: string;
    error?: string[];
    data?: BulkActionDetailsDataField[];
    uploaded_on?: string;
};
type AffiliateMeta = {
    channel_order_id?: string;
    order_item_id?: string;
    employee_discount?: number;
    box_type?: string;
    channel_shipment_id?: string;
    quantity?: number;
    due_date?: string;
    size_level_total_qty?: number;
    coupon_code?: string;
    is_priority?: boolean;
    loyalty_discount?: number;
};
type AffiliateBagDetails = {
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
    loyalty_discount?: number;
    affiliate_bag_id: string;
    affiliate_order_id: string;
};
type StoreAddress = {
    address_type: string;
    address_category: string;
    email?: string;
    longitude: number;
    created_at: string;
    country: string;
    latitude: number;
    state: string;
    phone: string;
    landmark?: string;
    address2?: string;
    area?: string;
    version?: string;
    contact_person: string;
    address1: string;
    updated_at: string;
    country_code: string;
    city: string;
    pincode: number;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    password?: string;
    username?: string;
    user?: string;
    enabled: boolean;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type Document = {
    legal_name: string;
    verified: boolean;
    value: string;
    ds_type: string;
    url?: string;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    password?: string;
    username?: string;
    user?: string;
};
type StoreMeta = {
    notification_emails?: string[];
    additional_contact_details?: any;
    gst_number?: string;
    ewaybill_portal_details?: any;
    stage: string;
    timing?: any[];
    gst_credentials: StoreGstCredentials;
    display_name: string;
    documents?: StoreDocuments;
    einvoice_portal_details?: EInvoicePortalDetails;
    product_return_config?: any;
};
type Store = {
    login_username: string;
    mall_area?: string;
    name: string;
    created_at: string;
    longitude: number;
    mall_name?: string;
    store_address_json?: StoreAddress;
    is_enabled_for_recon?: boolean;
    store_email: string;
    is_active?: boolean;
    fulfillment_channel: string;
    country: string;
    latitude: number;
    state: string;
    phone: number;
    order_integration_id?: string;
    is_archived?: boolean;
    address2?: string;
    s_id: string;
    meta: StoreMeta;
    store_active_from?: string;
    brand_id?: any;
    contact_person: string;
    code?: string;
    address1: string;
    alohomora_user_id?: number;
    packaging_material_count?: number;
    company_id: number;
    updated_at?: string;
    city: string;
    vat_no?: string;
    parent_store_id?: number;
    brand_store_tags?: string[];
    location_type: string;
    pincode: string;
};
type ReturnConfig = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type Weight = {
    shipping?: number;
    is_default?: boolean;
    unit?: string;
};
type Dimensions = {
    is_default?: boolean;
    length?: number;
    unit?: string;
    width?: number;
    height?: number;
};
type Article = {
    size: string;
    a_set?: any;
    return_config?: ReturnConfig;
    seller_identifier: string;
    child_details?: any;
    raw_meta?: any;
    _id: string;
    uid: string;
    is_set?: boolean;
    identifiers: Identifier;
    weight?: Weight;
    esp_modified?: any;
    code?: string;
    dimensions?: Dimensions;
};
type Brand = {
    start_date?: string;
    created_on?: number;
    logo?: string;
    brand_name: string;
    modified_on?: number;
    credit_note_expiry_days?: number;
    company: string;
    is_virtual_invoice?: boolean;
    brand_id: number;
    pickup_location?: string;
    invoice_prefix?: string;
    credit_note_allowed?: boolean;
    script_last_ran?: string;
};
type B2BPODetails = {
    po_line_amount?: number;
    docker_number?: string;
    partial_can_ret?: boolean;
    total_gst_percentage?: number;
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
    is_active: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    can_be_cancelled: boolean;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type Attributes = {
    marketer_address?: string;
    primary_color?: string;
    gender?: string[];
    essential?: string;
    brand_name?: string;
    name?: string;
    primary_color_hex?: string;
    primary_material?: string;
    marketer_name?: string;
};
type Item = {
    size: string;
    can_return?: boolean;
    last_updated_at?: string;
    department_id?: number;
    name: string;
    l1_category_id?: number;
    image: string[];
    l2_category?: string[];
    color?: string;
    attributes: Attributes;
    l3_category?: number;
    can_cancel?: boolean;
    meta?: any;
    brand: string;
    gender?: string;
    l3_category_name?: string;
    brand_id: number;
    code?: string;
    slug_key: string;
    l2_category_id?: number;
    item_id: number;
    branch_url?: string;
    l1_category?: string[];
    webstore_product_url?: string;
};
type EInvoice = {
    signed_invoice?: string;
    error_message?: string;
    signed_qr_code?: string;
    acknowledge_date?: string;
    error_code?: string;
    acknowledge_no?: number;
    irn?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type BuyerDetails = {
    address: string;
    city: string;
    gstin: string;
    state: string;
    name: string;
    ajio_site_id?: string;
    pincode: number;
};
type LockData = {
    mto?: boolean;
    lock_message?: string;
    locked?: boolean;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentMeta = {
    marketplace_store_id?: string;
    external?: any;
    shipment_volumetric_weight?: number;
    einvoice_info?: EinvoiceInfo;
    timestamp?: ShipmentTimeStamp;
    b2c_buyer_details?: any;
    return_affiliate_shipment_id?: string;
    debug_info?: DebugInfo;
    bag_weight?: any;
    ewaybill_info?: any;
    packaging_name?: string;
    forward_affiliate_shipment_id?: string;
    return_awb_number?: string;
    po_number?: string;
    return_store_node?: number;
    store_invoice_updated_date?: string;
    return_affiliate_order_id?: string;
    dp_options?: any;
    same_store_available: boolean;
    assign_dp_from_sb?: boolean;
    awb_number?: string;
    auto_trigger_dp_assignment_acf: boolean;
    dp_name?: string;
    return_details?: any;
    order_type?: string;
    b2b_buyer_details?: BuyerDetails;
    dp_id?: string;
    shipment_weight?: number;
    box_type?: string;
    lock_data?: LockData;
    due_date?: string;
    fulfilment_priority_text?: string;
    formatted?: Formatted;
    weight: number;
    forward_affiliate_order_id?: string;
    dp_sort_key?: string;
};
type PDFLinks = {
    label_pos?: string;
    credit_note_url?: string;
    po_invoice?: string;
    invoice_a6?: string;
    b2b?: string;
    invoice_type: string;
    label?: string;
    label_a4?: string;
    invoice?: string;
    label_a6?: string;
    invoice_pos?: string;
    invoice_a4?: string;
    label_type: string;
};
type AffiliateDetails = {
    affiliate_id?: string;
    company_affiliate_tag?: string;
    affiliate_shipment_id: string;
    shipment_meta: ShipmentMeta;
    affiliate_meta: AffiliateMeta;
    ad_id?: string;
    affiliate_store_id: string;
    pdf_links?: PDFLinks;
    affiliate_bag_id: string;
    affiliate_order_id: string;
};
type BagGSTDetails = {
    gstin_code?: string;
    cgst_tax_percentage: number;
    sgst_tax_percentage: number;
    hsn_code: string;
    gst_tag: string;
    igst_tax_percentage: number;
    value_of_good: number;
    gst_tax_percentage: number;
    sgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    hsn_code_id: string;
    brand_calculated_amount: number;
    gst_fee: number;
    cgst_gst_fee: string;
    tax_collected_at_source: number;
    igst_gst_fee: string;
};
type BagDetailsPlatformResponse = {
    bag_status_history?: BagStatusHistory;
    original_bag_list?: number[];
    quantity?: number;
    b_id: number;
    affiliate_bag_details: AffiliateBagDetails;
    current_operational_status: BagStatusHistory;
    restore_promos?: any;
    no_of_bags_order?: number;
    ordering_store?: Store;
    order_integration_id?: string;
    article: Article;
    financial_breakup: FinancialBreakup[];
    restore_coupon?: boolean;
    brand: Brand;
    meta?: BagMeta;
    prices: Prices;
    applied_promos?: any[];
    display_name?: string;
    journey_type: string;
    qc_required?: any;
    seller_identifier?: string;
    tags?: string[];
    bag_update_time?: number;
    b_type?: string;
    current_status: BagStatusHistory;
    shipment_id?: string;
    identifier?: string;
    line_number?: number;
    operational_status?: string;
    parent_promo_bags?: any;
    reasons?: any[];
    entity_type?: string;
    article_details?: ArticleDetails;
    bag_status: BagStatusHistory[];
    status: BagReturnableCancelableStatus;
    dates?: Dates;
    item: Item;
    affiliate_details?: AffiliateDetails;
    gst_details: BagGSTDetails;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    has_next: boolean;
    size: number;
    current: number;
    page_type: string;
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
    status?: number;
    error?: string;
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
    fynd_order_id?: string;
    item_id?: string;
    mongo_article_id?: string;
    set_id?: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    bag_id?: number;
    store_id: number;
    reason_ids?: number[];
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    id?: string;
    reason_text: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    entities: Entities[];
    entity_type: string;
    action: string;
};
type Bags = {
    bag_id?: number;
    is_locked?: boolean;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    is_bag_locked?: boolean;
    bags?: Bags[];
    affiliate_shipment_id?: string;
    original_filter?: OriginalFilter;
    is_shipment_locked?: boolean;
    status?: string;
    lock_status?: boolean;
    affiliate_id?: string;
    shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    check_response?: CheckResponse[];
    message?: string;
};
type AnnouncementResponse = {
    platform_name?: string;
    title?: string;
    description?: string;
    logo_url?: string;
    from_datetime?: string;
    company_id?: number;
    created_at?: string;
    platform_id?: string;
    id: number;
    to_datetime?: string;
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
    identifier?: string;
    line_number?: number;
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
type ShipmentsRequest = {
    identifier: string;
    products?: Products[];
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    status?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    force_transition?: boolean;
    task?: boolean;
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    identifier?: string;
    meta?: any;
    exception?: string;
    status?: number;
    final_state?: any;
    stack_trace?: string;
    message?: string;
    code?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    item_size: string;
    modified_on: string;
    pdf_links?: MarketPlacePdf;
    item_id: number;
    sku: string;
    quantity: number;
    affiliate_meta: any;
    transfer_price: number;
    price_marked: number;
    price_effective: number;
    avl_qty: number;
    affiliate_store_id: string;
    hsn_code_id: string;
    identifier: any;
    amount_paid: number;
    discount: number;
    company_id: number;
    delivery_charge: number;
    seller_identifier: string;
    unit_price: number;
    _id: string;
    store_id: number;
    fynd_store_id: string;
};
type OrderUser = {
    country: string;
    email: string;
    pincode: string;
    mobile: number;
    last_name: string;
    phone: number;
    address1?: string;
    first_name: string;
    state: string;
    city: string;
    address2?: string;
};
type ArticleDetails1 = {
    brand_id: number;
    dimension: any;
    category: any;
    attributes: any;
    _id: string;
    weight: any;
    quantity: number;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_type: string;
    fulfillment_id: number;
};
type ShipmentDetails = {
    meta?: any;
    affiliate_shipment_id: string;
    box_type?: string;
    dp_id?: number;
    articles: ArticleDetails1[];
    fulfillment_id: number;
    shipments: number;
};
type ShipmentConfig = {
    identifier: string;
    payment_mode: string;
    to_pincode: string;
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
    source: string;
    action: string;
    journey: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
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
type OrderInfo = {
    payment_mode: string;
    bags: AffiliateBag[];
    billing_address: OrderUser;
    coupon?: string;
    discount: number;
    items: any;
    cod_charges: number;
    order_value: number;
    shipment?: ShipmentData;
    shipping_address: OrderUser;
    user: UserData;
    affiliate_order_id?: string;
    order_priority?: OrderPriority;
    delivery_charges: number;
    payment?: any;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    meta?: AffiliateAppConfigMeta[];
    token: string;
    secret: string;
    description?: string;
    name: string;
    created_at: string;
    updated_at: string;
    owner: string;
    id: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryConfig = {
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    config?: AffiliateConfig;
    token: string;
    id: string;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    article_lookup?: string;
    affiliate: Affiliate;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    create_user?: boolean;
    bag_end_state?: string;
    store_lookup?: string;
};
type CreateOrderPayload = {
    order_info: OrderInfo;
    order_config: OrderConfig;
    affiliate_id: string;
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
    slug: string;
    id: number;
    description: string;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    type: string;
    ticket_url?: string;
    ticket_id?: string;
    user: string;
    l1_detail?: string;
    message: string;
    l3_detail?: string;
    bag_id?: number;
    l2_detail?: string;
    createdat: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    payment_mode: string;
    country_code: string;
    amount_paid: number;
    brand_name: string;
    customer_name: string;
    phone_number: number;
    message: string;
    order_id: string;
    shipment_id: number;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    bag_id: number;
    slug: string;
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
    meta: Meta;
    bag_list?: number[];
    status?: string;
    shipment_id?: string;
    id: number;
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
    dp_id: number;
    qc_required: string;
    shipment_ids?: string[];
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type Tax = {
    amount: any;
    breakup?: any[];
    name: string;
    rate: number;
};
type Charge = {
    type: string;
    amount: any;
    name: string;
    tax?: Tax;
    code?: string;
};
type PaymentMethod = {
    meta?: any;
    transaction_data?: any;
    amount: number;
    name: string;
    collect_by: string;
    refund_by: string;
    mode: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type BillingInfo = {
    alternate_email?: string;
    primary_mobile_number: string;
    gender?: string;
    address2?: string;
    last_name?: string;
    state_code?: string;
    floor_no?: string;
    middle_name?: string;
    house_no?: string;
    title?: string;
    address1: string;
    primary_email: string;
    external_customer_code?: string;
    city: string;
    customer_code?: string;
    country: string;
    country_code?: string;
    pincode: string;
    first_name: string;
    state: string;
    alternate_mobile_number?: string;
};
type ShippingInfo = {
    alternate_email?: string;
    landmark?: string;
    primary_mobile_number: string;
    gender?: string;
    address2?: string;
    last_name?: string;
    address_type?: string;
    state_code?: string;
    floor_no?: string;
    middle_name?: string;
    house_no?: string;
    title?: string;
    address1: string;
    shipping_type?: string;
    external_customer_code?: string;
    primary_email: string;
    city: string;
    customer_code?: string;
    geo_location?: any;
    country: string;
    country_code?: string;
    pincode: string;
    slot?: any[];
    first_name: string;
    state: string;
    alternate_mobile_number?: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ProcessingDates = {
    customer_pickup_slot?: any;
    dispatch_by_date?: string;
    pack_by_date?: string;
    dispatch_after_date?: string;
    confirm_by_date?: string;
    dp_pickup_slot?: any;
};
type LineItem = {
    meta?: any;
    charges?: Charge[];
    custom_messasge?: string;
    external_line_id?: string;
    seller_identifier: string;
    quantity?: number;
};
type Shipment = {
    meta?: any;
    processing_dates?: ProcessingDates;
    priority?: number;
    line_items: LineItem[];
    location_id: number;
    external_shipment_id?: string;
};
type CreateOrderAPI = {
    currency_info?: any;
    meta?: any;
    charges: Charge[];
    external_creation_date?: string;
    payment_info: PaymentInfo;
    external_order_id?: string;
    billing_info: BillingInfo;
    shipping_info: ShippingInfo;
    tax_info?: TaxInfo;
    shipments: Shipment[];
};
type CreateOrderErrorReponse = {
    meta?: string;
    info?: any;
    exception?: string;
    status: number;
    stack_trace?: string;
    message: string;
    request_id?: string;
    code?: string;
};
type PaymentMethods = {
    refund_by?: string;
    mode?: string;
    collect_by?: string;
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
    payment_info?: CreateChannelPaymentInfo;
    shipment_assignment?: string;
    lock_states?: string[];
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    is_inserted?: boolean;
    is_upserted?: boolean;
    acknowledged?: boolean;
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
    end_date: string;
    start_date: string;
    order_details?: FyndOrderIdList[];
    mobile: number;
};
type GetSearchWordsData = {
    words?: string[];
    uid?: string;
    _custom_json?: any;
    app_id?: string;
    result?: any;
    is_active?: boolean;
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
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    result: SearchKeywordResult;
    is_active?: boolean;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    words?: string[];
    uid?: string;
    _custom_json?: any;
    results?: any[];
    app_id?: string;
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
    type?: string;
    query?: any;
    url?: string;
    params?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type AutocompleteResult = {
    logo?: Media;
    action?: AutocompleteAction;
    display?: string;
    _custom_json?: any;
};
type CreateAutocompleteKeyword = {
    words?: string[];
    _custom_json?: any;
    results?: AutocompleteResult[];
    app_id?: string;
    is_active?: boolean;
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    results?: any[];
};
type ProductBundleItem = {
    min_quantity: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    product_uid: number;
    max_quantity: number;
};
type ProductBundleRequest = {
    logo?: string;
    choice: string;
    page_visibility?: string[];
    created_by?: any;
    meta?: any;
    same_store_assignment?: boolean;
    name: string;
    created_on?: string;
    slug: string;
    modified_by?: any;
    modified_on?: string;
    is_active: boolean;
    company_id?: number;
    products: ProductBundleItem[];
};
type GetProductBundleCreateResponse = {
    logo?: string;
    choice: string;
    page_visibility?: string[];
    created_by?: any;
    meta?: any;
    same_store_assignment?: boolean;
    name: string;
    created_on?: string;
    slug: string;
    modified_by?: any;
    modified_on?: string;
    is_active: boolean;
    id?: string;
    company_id?: number;
    products: ProductBundleItem[];
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type LimitedProductData = {
    short_description?: string;
    uid?: number;
    item_code?: string;
    images?: string[];
    attributes?: any;
    identifier?: any;
    name?: string;
    sizes?: string[];
    slug?: string;
    quantity?: number;
    country_of_origin?: string;
    price?: any;
};
type Size = {
    quantity?: number;
    value?: string;
    is_available?: boolean;
    display?: string;
};
type Price = {
    max_effective?: number;
    min_marked?: number;
    max_marked?: number;
    min_effective?: number;
    currency?: string;
};
type GetProducts = {
    min_quantity?: number;
    auto_select?: boolean;
    product_details?: LimitedProductData;
    sizes?: Size[];
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    product_uid?: number;
    price?: Price;
    max_quantity?: number;
};
type GetProductBundleResponse = {
    logo?: string;
    choice?: string;
    page_visibility?: string[];
    meta?: any;
    same_store_assignment?: boolean;
    name?: string;
    slug?: string;
    is_active?: boolean;
    company_id?: number;
    products?: GetProducts[];
};
type ProductBundleUpdateRequest = {
    logo?: string;
    choice: string;
    page_visibility?: string[];
    meta?: any;
    same_store_assignment?: boolean;
    name: string;
    slug: string;
    modified_by?: any;
    modified_on?: string;
    is_active: boolean;
    company_id?: number;
    products: ProductBundleItem[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    brand_id?: number;
    description?: string;
    image?: string;
    created_by?: any;
    subtitle?: string;
    tag?: string;
    name: string;
    title: string;
    company_id?: number;
    modified_by?: any;
    created_on?: string;
    modified_on?: string;
    guide?: Guide;
    id?: string;
    active?: boolean;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    brand_id?: number;
    created_by?: any;
    company_id?: number;
    name?: string;
    created_on?: string;
    tag?: string;
    modified_by?: any;
    modified_on?: string;
    title?: string;
    subtitle?: string;
    guide?: any;
    id?: string;
    active?: boolean;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemMOQ = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type ApplicationItemMeta = {
    alt_text?: any;
    _custom_json?: any;
    _custom_meta?: MetaFields[];
    is_gift?: boolean;
    moq?: ApplicationItemMOQ;
    seo?: ApplicationItemSEO;
    is_cod?: boolean;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type MOQData = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type SEOData = {
    title?: any;
    description?: any;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    is_gift?: boolean;
    moq?: MOQData;
    seo?: SEOData;
    is_cod?: boolean;
};
type GetConfigMetadataResponse = {
    data: any[];
    values?: any[];
    condition?: any[];
};
type AttributeDetailsGroup = {
    logo?: string;
    display_type: string;
    priority: number;
    name: string;
    key?: string;
    slug?: string;
    unit?: string;
    is_active: boolean;
};
type AppConfigurationDetail = {
    logo?: string;
    attributes?: AttributeDetailsGroup[];
    app_id: string;
    priority: number;
    is_default: boolean;
    template_slugs?: string[];
    name?: string;
    slug: string;
    is_active: boolean;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    next: number;
    current: number;
    has_next: boolean;
    total_count: number;
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
    app_id: string;
    priority: number;
    is_default: boolean;
    name?: string;
    key: string;
    default_key: string;
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
    filter_types?: string[];
    display?: string;
    key?: string;
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingResponse = {
    filter: MetaDataListingFilterResponse;
    sort: MetaDataListingSortResponse;
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
    logo?: string;
    display_type: string;
    priority: number;
    name: string;
    key: string;
    size: ProductSize;
    is_active: boolean;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    logo?: string;
    priority: number;
    subtitle?: string;
    key: string;
    title?: string;
    size?: ProductSize;
    is_active: boolean;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type ConfigurationBucketPoints = {
    display?: string;
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    map_values?: any[];
    sort?: string;
    map?: any;
    value?: string;
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
};
type ConfigurationListingFilterConfig = {
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    priority: number;
    type: string;
    name?: string;
    key: string;
    is_active: boolean;
    display_name?: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    logo?: string;
    priority: number;
    name?: string;
    key: string;
    is_active: boolean;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type AppConfiguration = {
    config_type: string;
    app_id: string;
    created_by?: any;
    type?: string;
    config_id?: string;
    created_on?: string;
    modified_by?: any;
    modified_on?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
};
type AppCatalogConfiguration = {
    config_type: string;
    app_id: string;
    created_by?: any;
    type?: string;
    config_id?: string;
    created_on?: string;
    modified_by?: any;
    modified_on?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    id?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    config_type: string;
    app_id: string;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersValue = {
    is_selected: boolean;
    selected_min?: number;
    currency_symbol?: string;
    max?: number;
    display: string;
    value: any;
    min?: number;
    display_format?: string;
    selected_max?: number;
    query_format?: string;
    count?: number;
    currency_code?: string;
};
type ProductFiltersKey = {
    logo?: string;
    display: string;
    name: string;
    kind?: string;
    operators?: string[];
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type ProductSortOn = {
    is_selected?: boolean;
    value?: string;
    name?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    operators: any;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionQuery = {
    op: string;
    value: any[];
    attribute: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionSchedule = {
    next_schedule?: NextSchedule[];
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
};
type UserInfo = {
    email?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CreateCollection = {
    app_id: string;
    priority?: number;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    _locale_language?: any;
    _custom_json?: any;
    type: string;
    query?: CollectionQuery[];
    is_active?: boolean;
    visible_facets_keys?: string[];
    is_visible?: boolean;
    logo: CollectionImage;
    description?: string;
    _schedule?: CollectionSchedule;
    created_by?: UserInfo;
    banners: CollectionBanner;
    meta?: any;
    slug: string;
    seo?: SeoDetail;
    published?: boolean;
    allow_facets?: boolean;
    name: string;
    sort_on?: string;
    modified_by?: UserInfo;
    tags?: string[];
};
type BannerImage = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionCreateResponse = {
    app_id?: string;
    priority?: number;
    allow_sort?: boolean;
    badge?: any;
    cron?: any;
    query?: CollectionQuery[];
    type?: string;
    is_active?: boolean;
    visible_facets_keys?: string[];
    description?: string;
    logo?: BannerImage;
    _schedule?: any;
    banners?: ImageUrls;
    meta?: any;
    tag?: string[];
    slug?: string;
    allow_facets?: boolean;
    name?: string;
    sort_on?: string;
};
type CollectionListingFilterType = {
    is_selected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilterTag = {
    is_selected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type Media1 = {
    type?: string;
    meta?: any;
    url: string;
};
type GetCollectionDetailNest = {
    app_id?: string;
    priority?: number;
    allow_sort?: boolean;
    badge?: any;
    cron?: any;
    query?: CollectionQuery[];
    type?: string;
    is_active?: boolean;
    visible_facets_keys?: string[];
    description?: string;
    logo?: Media1;
    _schedule?: any;
    banners?: ImageUrls;
    meta?: any;
    tag?: string[];
    slug?: string;
    action?: Action;
    allow_facets?: boolean;
    uid?: string;
    name?: string;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionDetailResponse = {
    description?: string;
    logo?: Media1;
    _schedule?: any;
    cron?: any;
    app_id?: string;
    priority?: number;
    query?: CollectionQuery[];
    banners?: ImageUrls;
    type?: string;
    name?: string;
    tag?: string[];
    slug?: string;
    allow_sort?: boolean;
    meta?: any;
    badge?: any;
    is_active?: boolean;
    visible_facets_keys?: string[];
    allow_facets?: boolean;
};
type UpdateCollection = {
    priority?: number;
    allow_sort?: boolean;
    badge?: CollectionBadge;
    _locale_language?: any;
    _custom_json?: any;
    query?: CollectionQuery[];
    type?: string;
    is_active?: boolean;
    visible_facets_keys?: string[];
    is_visible?: boolean;
    logo?: CollectionImage;
    description?: string;
    _schedule?: CollectionSchedule;
    banners?: CollectionBanner;
    meta?: any;
    slug?: string;
    seo?: SeoDetail;
    published?: boolean;
    allow_facets?: boolean;
    name?: string;
    sort_on?: string;
    modified_by?: UserInfo;
    tags?: string[];
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
    message?: string;
    items_not_updated?: number[];
};
type ProductBrand = {
    logo?: Media1;
    uid?: number;
    action?: Action;
    name?: string;
};
type Price1 = {
    currency_code?: string;
    max?: number;
    currency_symbol?: string;
    min?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductDetailAttribute = {
    type?: string;
    value?: string;
    key?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductListingDetail = {
    short_description?: string;
    item_code?: string;
    rating?: number;
    has_variant?: boolean;
    brand?: ProductBrand;
    color?: string;
    attributes?: any;
    image_nature?: string;
    item_type?: string;
    promo_meta?: any;
    type?: string;
    teaser_tag?: any;
    price?: ProductListingPrice;
    rating_count?: number;
    medias?: Media1[];
    discount?: string;
    description?: string;
    tryouts?: string[];
    highlights?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    slug: string;
    product_online_date?: string;
    similars?: string[];
    uid?: number;
    name?: string;
    sellable?: boolean;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page?: Page;
    sort_on?: ProductSortOn[];
};
type CatalogInsightItem = {
    sellable_count?: number;
    out_of_stock_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    article_freshness?: number;
    total_articles?: number;
    name?: string;
    total_sizes?: number;
    available_sizes?: number;
    available_articles?: number;
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
    opt_level: string;
    enabled?: boolean;
    platform?: string;
    store_ids?: number[];
    company_id?: number;
    brand_ids?: number[];
};
type CompanyOptIn = {
    opt_level: string;
    created_by?: any;
    enabled: boolean;
    created_on: number;
    modified_by?: any;
    platform: string;
    modified_on: number;
    store_ids: number[];
    company_id: number;
    brand_ids: number[];
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    business_type?: string;
    uid?: number;
    company_type?: string;
    name?: string;
};
type CompanyBrandDetail = {
    brand_id?: number;
    company_id?: number;
    total_article?: number;
    brand_name?: string;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    store?: number;
    brand?: number;
    company?: string;
};
type StoreDetail = {
    address?: any;
    timing?: any;
    uid?: number;
    documents?: any[];
    additional_contacts?: any[];
    name?: string;
    created_on?: string;
    manager?: any;
    modified_on?: string;
    store_code?: string;
    store_type?: string;
    company_id?: number;
    display_name?: string;
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
    allowed_values?: string[];
    type: string;
    multi?: boolean;
    format?: string;
    range?: AttributeSchemaRange;
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
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeMasterDetails = {
    display_type: string;
};
type GenderDetail = {
    schema?: AttributeMaster;
    description?: string;
    filters?: AttributeMasterFilter;
    logo?: string;
    departments?: string[];
    meta?: AttributeMasterMeta;
    name?: string;
    slug?: string;
    enabled_for_end_consumer?: boolean;
    details?: AttributeMasterDetails;
    id?: string;
    is_nested?: boolean;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    meta?: any;
    errors?: any;
    status?: number;
    code?: string;
};
type DepartmentCreateUpdate = {
    logo: string;
    _cls?: string;
    uid?: number;
    platforms?: any;
    is_active?: boolean;
    _custom_json?: any;
    tags?: string[];
    name: string;
    slug?: string;
    synonyms?: string[];
    priority_order: number;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    uid?: string;
    _id?: string;
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetDepartment = {
    logo?: string;
    uid?: number;
    item_type?: string;
    created_by?: UserSerializer;
    priority_order?: number;
    page_no?: number;
    name?: string;
    search?: string;
    slug?: string;
    synonyms?: string[];
    created_on?: string;
    modified_on?: string;
    modified_by?: UserSerializer;
    page_size?: number;
    is_active?: boolean;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    meta?: any;
    errors?: any;
    status?: number;
    code?: string;
};
type UserDetail = {
    super_user?: boolean;
    contact?: string;
    user_id: string;
    username: string;
};
type DepartmentModel = {
    logo: string;
    _cls?: any;
    uid?: number;
    verified_by?: UserDetail;
    _custom_json?: any;
    _id?: any;
    created_by?: UserDetail;
    priority_order: number;
    name: any;
    created_on: string;
    slug?: any;
    modified_by?: UserDetail;
    modified_on: string;
    synonyms?: any[];
    verified_on?: string;
    is_active?: boolean;
};
type ProductTemplate = {
    description?: string;
    logo?: string;
    categories?: string[];
    attributes?: string[];
    is_expirable?: boolean;
    created_by?: any;
    departments?: string[];
    name?: string;
    tag?: string;
    slug: string;
    is_archived?: boolean;
    modified_by?: any;
    created_on?: string;
    attributes_schema?: any[];
    modified_on?: string;
    is_active?: boolean;
    is_physical: boolean;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    short_description?: any;
    item_code?: any;
    trader?: any;
    media?: any;
    size_guide?: any;
    custom_order?: any;
    currency?: any;
    product_publish?: any;
    item_type?: any;
    teaser_tag?: any;
    sizes?: any;
    variants?: any;
    hsn_code?: any;
    is_active?: any;
    description?: any;
    highlights?: any;
    return_config?: any;
    slug?: any;
    command?: any;
    multi_size?: any;
    category_slug?: any;
    is_dependent?: any;
    name?: any;
    no_of_boxes?: any;
    country_of_origin?: any;
    brand_uid?: any;
    tags?: any;
    trader_type?: any;
    product_group_tag?: any;
};
type GlobalValidation = {
    description?: string;
    type?: string;
    title?: string;
    definitions?: any;
    properties?: Properties;
    required?: string[];
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    description?: string;
    logo?: string;
    categories?: string[];
    attributes?: string[];
    is_expirable?: boolean;
    departments?: string[];
    name?: string;
    tag?: string;
    slug: string;
    is_archived?: boolean;
    attributes_schema?: any[];
    is_active?: boolean;
    is_physical: boolean;
    id?: string;
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
    brand?: string[];
    templates?: string[];
    type?: string;
};
type ProductDownloadsItems = {
    created_by?: VerifiedBy;
    template_tags?: any;
    task_id?: string;
    completed_on?: string;
    id?: string;
    url?: string;
    seller_id?: number;
    trigger_on?: string;
    status?: string;
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
    portrait: string;
    landscape: string;
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
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type CategoryRequestBody = {
    tryouts?: string[];
    priority?: number;
    departments: number[];
    media?: Media2;
    name: string;
    slug?: string;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    is_active: boolean;
    marketplaces?: CategoryMapping;
    level: number;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    uid?: number;
    tryouts?: string[];
    priority?: number;
    created_by?: any;
    departments: number[];
    media?: Media2;
    name: string;
    created_on?: string;
    slug?: string;
    synonyms?: string[];
    modified_by?: any;
    modified_on?: string;
    id?: string;
    hierarchy?: Hierarchy[];
    is_active: boolean;
    marketplaces?: CategoryMapping;
    level: number;
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
type Trader = {
    address?: string[];
    type?: string;
    name: any;
};
type NetQuantity = {
    value?: number;
    unit?: any;
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
type TeaserTag = {
    url?: string;
    tag?: string;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    reporting_hsn?: string;
    hsn_code?: string;
};
type ProductCreateUpdateSchemaV2 = {
    short_description?: string;
    item_code: string;
    trader: Trader[];
    template_tag: string;
    media?: Media1[];
    variant_group?: any;
    net_quantity?: NetQuantity;
    variant_media?: any;
    size_guide?: string;
    change_request_id?: any;
    custom_order?: CustomOrder;
    currency: string;
    product_publish?: ProductPublish;
    bulk_job_id?: string;
    attributes: any;
    _custom_json?: any;
    item_type: string;
    teaser_tag?: TeaserTag;
    departments: number[];
    sizes: any[];
    variants?: any;
    is_set?: boolean;
    is_active?: boolean;
    company_id: number;
    is_image_less_product?: boolean;
    description?: string;
    highlights?: string[];
    return_config: ReturnConfig;
    tax_identifier: TaxIdentifier;
    slug: string;
    action?: string;
    requester?: string;
    multi_size?: boolean;
    category_slug: string;
    uid?: number;
    is_dependent?: boolean;
    name: string;
    no_of_boxes?: number;
    country_of_origin: string;
    brand_uid: number;
    tags?: string[];
    product_group_tag?: string[];
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: string;
};
type Logo = {
    aspect_ratio_f?: number;
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type ReturnConfigResponse = {
    unit: string;
    time: number;
    returnable: boolean;
};
type Image = {
    aspect_ratio_f?: number;
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
type Product = {
    short_description?: string;
    item_code?: string;
    pending?: string;
    trader?: any[];
    template_tag?: string;
    l3_mapping?: string[];
    is_expirable?: boolean;
    media?: Media1[];
    all_sizes?: any[];
    variant_group?: any;
    net_quantity?: NetQuantityResponse;
    primary_color?: string;
    variant_media?: any;
    size_guide?: string;
    custom_order?: any;
    is_physical?: boolean;
    currency?: string;
    id?: string;
    product_publish?: ProductPublished;
    brand?: Brand;
    color?: string;
    all_company_ids?: number[];
    attributes?: any;
    _custom_json?: any;
    image_nature?: string;
    item_type?: string;
    departments?: number[];
    teaser_tag?: any;
    sizes?: any[];
    stage?: string;
    variants?: any;
    hsn_code?: string;
    moq?: any;
    is_set?: boolean;
    is_active?: boolean;
    company_id?: number;
    is_image_less_product?: boolean;
    description?: string;
    highlights?: string[];
    return_config?: ReturnConfigResponse;
    created_by?: any;
    tax_identifier?: any;
    slug?: string;
    category_uid?: number;
    all_identifiers?: string[];
    verified_on?: string;
    multi_size?: boolean;
    category_slug?: string;
    category?: any;
    uid?: number;
    verified_by?: VerifiedBy;
    is_dependent?: boolean;
    images?: Image[];
    name?: string;
    created_on?: string;
    modified_by?: any;
    no_of_boxes?: number;
    modified_on?: string;
    country_of_origin?: string;
    brand_uid?: number;
    tags?: string[];
    product_group_tag?: string[];
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductVariants = {
    uid?: number;
    item_code?: string;
    media?: Media1[];
    name?: string;
    brand_uid?: number;
    category_uid?: number;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    is_nested?: boolean;
    filters: AttributeMasterFilter;
    variant?: boolean;
    departments: string[];
    enabled_for_end_consumer?: boolean;
    schema: AttributeMaster;
    description?: string;
    logo?: string;
    created_by?: any;
    slug: string;
    suggestion?: string;
    name?: string;
    unit?: string;
    created_on?: string;
    synonyms?: any;
    modified_by?: any;
    modified_on?: string;
    details: AttributeMasterDetails;
    tags?: string[];
    raw_key?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ProductCreateUpdate = {
    short_description?: string;
    item_code: any;
    trader: Trader[];
    template_tag: string;
    media?: Media1[];
    variant_group?: any;
    net_quantity?: NetQuantity;
    variant_media?: any;
    size_guide?: string;
    change_request_id?: any;
    custom_order?: CustomOrder;
    currency: string;
    product_publish?: ProductPublish;
    bulk_job_id?: string;
    _custom_json?: any;
    item_type: string;
    teaser_tag?: TeaserTag;
    departments: number[];
    variants?: any;
    is_set?: boolean;
    is_active?: boolean;
    company_id: number;
    is_image_less_product?: boolean;
    description?: string;
    highlights?: string[];
    return_config: ReturnConfig;
    tax_identifier: TaxIdentifier;
    slug: string;
    action?: string;
    requester?: string;
    multi_size?: boolean;
    category_slug: string;
    uid?: number;
    is_dependent?: boolean;
    name: any;
    no_of_boxes?: number;
    country_of_origin: string;
    brand_uid: number;
    tags?: string[];
    product_group_tag?: string[];
};
type ValidateIdentifier = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: string;
};
type AllSizes = {
    item_weight_unit_of_measure: any;
    item_height: number;
    size: any;
    item_dimensions_unit_of_measure: string;
    item_length: number;
    item_weight: number;
    identifiers?: ValidateIdentifier[];
    item_width: number;
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
    user_id?: string;
    username?: string;
};
type BulkJob = {
    tracking_url?: string;
    total?: number;
    template_tag?: string;
    failed?: number;
    failed_records?: any[];
    created_by?: UserInfo1;
    cancelled?: number;
    custom_template_tag?: string;
    cancelled_records?: any[];
    created_on: string;
    stage?: string;
    modified_by?: UserInfo1;
    modified_on?: string;
    succeed?: number;
    is_active?: boolean;
    file_path?: string;
    company_id: number;
};
type BulkResponse = {
    created_by?: UserInfo1;
    created_on: string;
    modified_by?: UserInfo1;
    modified_on?: string;
    batch_id: string;
    is_active?: boolean;
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    total?: number;
    template_tag?: string;
    failed?: number;
    failed_records?: string[];
    created_by?: UserDetail1;
    cancelled?: number;
    cancelled_records?: string[];
    stage?: string;
    created_on?: string;
    modified_by?: UserDetail1;
    modified_on?: string;
    succeed?: number;
    is_active?: boolean;
    file_path?: string;
    company_id?: number;
    template?: ProductTemplate;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    batch_id: string;
    data: any[];
    company_id: number;
    template_tag: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    user: any;
    company_id?: number;
    url: string;
};
type UserCommon = {
    company_id?: number;
    user_id?: string;
    username?: string;
};
type Items = {
    retry?: number;
    total?: number;
    tracking_url?: string;
    failed?: number;
    failed_records?: string[];
    created_by?: UserCommon;
    cancelled?: number;
    cancelled_records?: string[];
    company_id?: number;
    created_on?: string;
    stage?: string;
    modified_by?: UserCommon;
    modified_on?: string;
    succeed?: number;
    is_active?: boolean;
    id?: string;
    file_path?: string;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
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
type ItemQuery = {
    item_code?: string;
    uid?: number;
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
    size_distribution: SizeDistribution;
    name?: string;
};
type GTIN = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: any;
};
type InvSize = {
    price_effective: number;
    set?: InventorySet;
    item_weight_unit_of_measure?: string;
    item_weight?: number;
    expiration_date?: string;
    quantity: number;
    item_height?: number;
    size: any;
    is_set?: boolean;
    price_transfer?: number;
    item_dimensions_unit_of_measure?: string;
    item_length?: number;
    price?: number;
    currency: string;
    identifiers: GTIN[];
    store_code: string;
    item_width?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    company_id: number;
    sizes: InvSize[];
};
type InventoryResponse = {
    inventory_updated_on?: string;
    item_id?: number;
    price_effective?: number;
    store?: any;
    uid?: string;
    quantity?: number;
    size?: string;
    price_transfer?: number;
    seller_identifier?: string;
    sellable_quantity?: number;
    price?: number;
    currency?: string;
    identifiers?: any;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type DimensionResponse = {
    is_default: boolean;
    unit: string;
    width: number;
    height: number;
    length: number;
};
type Trader1 = {
    address: string[];
    type: string;
    name: string;
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type BrandMeta = {
    id: number;
    name: string;
};
type WeightResponse = {
    shipping: number;
    is_default: boolean;
    unit: string;
};
type PriceMeta = {
    tp_notes?: any;
    transfer: number;
    effective: number;
    marked: number;
    updated_at?: string;
    currency: string;
};
type ReturnConfig1 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    damaged?: QuantityBase;
    sellable?: QuantityBase;
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
};
type CompanyMeta = {
    id: number;
};
type InventorySellerResponse = {
    dimension: DimensionResponse;
    trader?: Trader1[];
    size: string;
    manufacturer: ManufacturerResponse;
    fynd_item_code: string;
    brand: BrandMeta;
    set?: InventorySet;
    _custom_json?: any;
    fynd_article_code: string;
    stage?: string;
    weight: WeightResponse;
    is_set?: boolean;
    is_active?: boolean;
    price: PriceMeta;
    store: StoreMeta;
    item_id: number;
    added_on_store?: string;
    identifier: any;
    raw_meta?: any;
    return_config?: ReturnConfig1;
    total_quantity: number;
    created_by?: UserSerializer;
    tax_identifier?: any;
    meta?: any;
    seller_identifier: string;
    uid: string;
    fragile: boolean;
    trace_id?: string;
    expiration_date?: string;
    modified_by?: UserSerializer;
    quantities?: Quantities;
    company: CompanyMeta;
    country_of_origin: string;
    tags?: string[];
    fynd_meta?: any;
    track_inventory?: boolean;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    total?: number;
    failed?: number;
    failed_records?: string[];
    created_by?: any;
    cancelled_records?: string[];
    company_id?: number;
    created_on?: string;
    stage?: string;
    modified_by?: any;
    modified_on?: string;
    succeed?: number;
    is_active?: boolean;
    file_path?: string;
    id?: string;
    cancelled?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    price_effective?: number;
    item_weight_unit_of_measure?: string;
    price_marked?: number;
    total_quantity?: number;
    trace_id?: string;
    expiration_date?: string;
    quantity?: number;
    seller_identifier: string;
    item_dimensions_unit_of_measure?: string;
    tags?: string[];
    store_code: string;
    price?: number;
    currency?: string;
};
type InventoryBulkRequest = {
    user?: any;
    batch_id: string;
    company_id: number;
    sizes: InventoryJobPayload[];
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    request_params?: any;
    task_id: string;
    seller_id: number;
    trigger_on?: string;
    status?: string;
};
type InventoryExportJob = {
    request_params?: any;
    task_id: string;
    completed_on?: string;
    url?: string;
    seller_id: number;
    trigger_on?: string;
    status?: string;
};
type DimensionResponse1 = {
    width?: number;
    height?: number;
    length?: number;
    unit?: string;
};
type Trader2 = {
    address?: string[];
    type?: string;
    name?: string;
};
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type PriceArticle = {
    tp_notes?: any;
    transfer?: number;
    effective?: number;
    marked?: number;
    currency?: string;
};
type ArticleStoreResponse = {
    store_code?: string;
    store_type?: string;
    uid?: number;
    name?: string;
};
type ReturnConfig2 = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    damaged?: Quantity;
    sellable?: Quantity;
    order_committed?: Quantity;
    not_available?: Quantity;
};
type CompanyMeta1 = {
    id?: number;
};
type GetInventories = {
    dimension?: DimensionResponse1;
    trader?: Trader2[];
    size?: string;
    manufacturer?: ManufacturerResponse1;
    id?: string;
    brand?: BrandMeta1;
    date_meta?: DateMeta;
    stage?: string;
    weight?: WeightResponse1;
    is_set?: boolean;
    price?: PriceArticle;
    store?: ArticleStoreResponse;
    inventory_updated_on?: string;
    item_id?: number;
    platforms?: any;
    return_config?: ReturnConfig2;
    identifier?: any;
    total_quantity?: number;
    created_by?: UserSerializer;
    tax_identifier?: any;
    seller_identifier?: string;
    uid?: string;
    trace_id?: string;
    expiration_date?: string;
    modified_by?: UserSerializer;
    quantities?: QuantitiesArticle;
    company?: CompanyMeta1;
    country_of_origin?: string;
    tags?: string[];
    track_inventory?: boolean;
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
    multivalues?: boolean;
    data?: FilerList[];
};
type InventoryPayload = {
    price_effective?: number;
    price_marked?: number;
    total_quantity?: number;
    trace_id?: string;
    expiration_date?: string;
    seller_identifier: string;
    tags?: string[];
    store_id: number;
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
    message: string;
    items?: InventoryResponseItem[];
};
type HsnUpsert = {
    uid?: number;
    threshold2?: number;
    threshold1: number;
    tax1: number;
    hsn_code: string;
    hs2_code: string;
    tax_on_esp?: boolean;
    is_active?: boolean;
    tax2?: number;
    company_id: number;
    tax_on_mrp: boolean;
};
type HsnCodesObject = {
    threshold2?: number;
    threshold1?: number;
    tax1?: number;
    hs2_code?: string;
    hsn_code?: string;
    tax_on_esp?: boolean;
    modified_on?: string;
    tax2?: number;
    id?: string;
    company_id?: number;
    tax_on_mrp?: boolean;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    has_next?: boolean;
    item_total?: number;
    size?: number;
    has_previous?: boolean;
    current?: string;
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
    cess?: number;
    rate: number;
    threshold: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    description: string;
    reporting_hsn: string;
    created_by?: any;
    type: string;
    created_on?: string;
    modified_by?: any;
    hsn_code: string;
    country_code: string;
    modified_on?: string;
    taxes: TaxSlab[];
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    discount?: string;
    logo?: Media;
    uid?: number;
    departments?: string[];
    banners?: ImageUrls;
    name?: string;
    slug?: string;
    action?: Action;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    logo?: Media;
    uid?: number;
    name?: string;
    slug?: string;
    priority_order?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    uid?: number;
    _custom_json?: any;
    childs?: any[];
    banners?: ImageUrls;
    name?: string;
    slug?: string;
    action?: Action;
};
type SecondLevelChild = {
    uid?: number;
    _custom_json?: any;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    name?: string;
    slug?: string;
    action?: Action;
};
type Child = {
    uid?: number;
    _custom_json?: any;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    name?: string;
    slug?: string;
    action?: Action;
};
type CategoryItems = {
    uid?: number;
    childs?: Child[];
    banners?: ImageUrls;
    name?: string;
    slug?: string;
    action?: Action;
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
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page: Page;
    sort_on?: ProductSortOn[];
    operators?: any;
};
type ProductDetail = {
    short_description?: string;
    item_code?: string;
    rating?: number;
    has_variant?: boolean;
    brand?: ProductBrand;
    color?: string;
    attributes?: any;
    image_nature?: string;
    item_type?: string;
    promo_meta?: any;
    type?: string;
    teaser_tag?: any;
    rating_count?: number;
    medias?: Media1[];
    description?: string;
    tryouts?: string[];
    highlights?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    slug: string;
    product_online_date?: string;
    similars?: string[];
    uid?: number;
    name?: string;
};
type InventoryPage = {
    has_next?: boolean;
    item_total: number;
    next_id?: string;
    type: string;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
};
type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobile_no: SellerPhoneNumber;
};
type InvoiceCredSerializer = {
    username?: string;
    password?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetAddressSerializer = {
    address2?: string;
    latitude?: number;
    address_type?: string;
    pincode?: number;
    state?: string;
    address1?: string;
    country_code?: string;
    city?: string;
    country?: string;
    longitude?: number;
    landmark?: string;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetCompanySerializer = {
    business_type?: string;
    uid?: number;
    verified_by?: UserSerializer2;
    created_by?: UserSerializer2;
    name?: string;
    created_on?: string;
    stage?: string;
    modified_by?: UserSerializer2;
    modified_on?: string;
    verified_on?: string;
    reject_reason?: string;
    company_type?: string;
    addresses?: GetAddressSerializer[];
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type GetLocationSerializer = {
    display_name: string;
    integration_type?: LocationIntegrationType;
    contact_numbers?: SellerPhoneNumber[];
    code: string;
    timing?: LocationDayWiseSerializer[];
    _custom_json?: any;
    stage?: string;
    manager?: LocationManagerSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    notification_emails?: string[];
    documents?: Document[];
    created_by?: UserSerializer1;
    verified_on?: string;
    phone_number?: string;
    address: GetAddressSerializer;
    uid?: number;
    verified_by?: UserSerializer1;
    warnings?: any;
    name: string;
    created_on?: string;
    modified_by?: UserSerializer1;
    modified_on?: string;
    company?: GetCompanySerializer;
    product_return_config?: ProductReturnConfigSerializer;
    store_type?: string;
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
    uid: number;
    _custom_json?: any;
    app_id: string;
    name?: string;
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
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type PriceRange = {
    min?: number;
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
    user?: number;
    app?: number;
    total?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
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
type Restrictions = {
    price_range?: PriceRange;
    ordering_stores?: number[];
    bulk_bundle?: BulkBundleRestriction;
    user_groups?: number[];
    platforms?: string[];
    post_order?: PostOrder;
    uses?: UsesRestriction;
    payments?: any;
    user_type?: string;
    coupon_allowed?: boolean;
};
type Validation = {
    anonymous?: boolean;
    user_registered_after?: string;
    app_id?: string[];
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CouponSchedule = {
    duration?: number;
    end?: string;
    start?: string;
    cron?: string;
    next_schedule?: any[];
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type RuleDefinition = {
    value_type: string;
    calculate_on: string;
    auto_apply?: boolean;
    type: string;
    currency_code?: string;
    applicable_on: string;
    is_exact?: boolean;
    scope?: string[];
};
type Rule = {
    discount_qty?: number;
    max?: number;
    min?: number;
    key?: number;
    value?: number;
};
type State = {
    is_archived?: boolean;
    is_public?: boolean;
    is_display?: boolean;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Validity = {
    priority?: number;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    auto?: DisplayMetaDict;
    title?: string;
    description?: string;
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    subtitle?: string;
};
type CouponAdd = {
    ownership: Ownership;
    restrictions?: Restrictions;
    validation?: Validation;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
    type_slug: string;
    rule: Rule[];
    state?: State;
    action?: CouponAction;
    tags?: string[];
    validity: Validity;
    identifiers: Identifier;
    display_meta: DisplayMeta;
    code: string;
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
    ownership: Ownership;
    restrictions?: Restrictions;
    validation?: Validation;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
    type_slug: string;
    rule: Rule[];
    state?: State;
    action?: CouponAction;
    tags?: string[];
    validity: Validity;
    identifiers: Identifier;
    display_meta: DisplayMeta;
    code: string;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type DiscountOffer = {
    partial_can_ret?: boolean;
    discount_amount?: number;
    discount_percentage?: number;
    discount_price?: number;
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
    max_discount_amount?: number;
    apportion_discount?: boolean;
    max_offer_quantity?: number;
    code?: string;
};
type CompareObject = {
    less_than_equals?: number;
    equals?: number;
    less_than?: number;
    greater_than?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    item_id?: number[];
    item_store?: number[];
    all_items?: boolean;
    item_size?: string[];
    cart_total?: CompareObject;
    item_sku?: string[];
    cart_unique_item_quantity?: CompareObject;
    item_brand?: number[];
    buy_rules?: string[];
    item_category?: number[];
    product_tags?: string[];
    item_exclude_brand?: number[];
    item_exclude_store?: number[];
    item_exclude_company?: number[];
    cart_unique_item_amount?: CompareObject;
    cart_quantity?: CompareObject;
    item_exclude_category?: number[];
    available_zones?: string[];
    item_exclude_id?: number[];
    item_company?: number[];
    item_exclude_sku?: string[];
};
type DiscountRule = {
    discount_type: string;
    buy_condition: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    type: string;
    uses?: PaymentAllowValue1;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type Restrictions1 = {
    user_id?: string[];
    user_groups?: number[];
    platforms?: string[];
    post_order?: PostOrder1;
    uses: UsesRestriction1;
    order_quantity?: number;
    anonymous_users?: boolean;
    payments?: PromotionPaymentModes[];
    user_registered?: UserRegistered;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionSchedule = {
    duration?: number;
    published: boolean;
    end?: string;
    start: string;
    cron?: string;
    next_schedule?: any[];
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type DisplayMeta1 = {
    description?: string;
    name?: string;
    offer_text?: string;
    offer_label?: string;
};
type PromotionListItem = {
    stackable?: boolean;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    currency?: string;
    restrictions?: Restrictions1;
    _custom_json?: any;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    apply_exclusive?: string;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    code?: string;
    calculate_on?: string;
    promotion_type: string;
    apply_all_discount?: boolean;
    apply_priority?: number;
    ownership: Ownership1;
    application_id: string;
    promo_group: string;
    mode: string;
    display_meta: DisplayMeta1;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    stackable?: boolean;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    currency?: string;
    restrictions?: Restrictions1;
    _custom_json?: any;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    apply_exclusive?: string;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    code?: string;
    calculate_on?: string;
    promotion_type: string;
    apply_all_discount?: boolean;
    apply_priority?: number;
    ownership: Ownership1;
    application_id: string;
    promo_group: string;
    mode: string;
    display_meta: DisplayMeta1;
};
type PromotionUpdate = {
    stackable?: boolean;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    currency?: string;
    restrictions?: Restrictions1;
    _custom_json?: any;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    apply_exclusive?: string;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    code?: string;
    calculate_on?: string;
    promotion_type: string;
    apply_all_discount?: boolean;
    apply_priority?: number;
    ownership: Ownership1;
    application_id: string;
    promo_group: string;
    mode: string;
    display_meta: DisplayMeta1;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    example?: string;
    is_hidden?: boolean;
    entity_type?: string;
    created_on?: string;
    title?: string;
    type?: string;
    entity_slug?: string;
    description?: string;
    modified_on?: string;
    subtitle?: string;
};
type CartItem = {
    product_id: string;
    size: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type RawBreakup = {
    vog?: number;
    subtotal?: number;
    convenience_fee?: number;
    mrp_total?: number;
    fynd_cash?: number;
    discount?: number;
    delivery_charge?: number;
    gst_charges?: number;
    total?: number;
    cod_charge?: number;
    you_saved?: number;
    coupon?: number;
};
type DisplayBreakup = {
    display?: string;
    message?: string[];
    currency_symbol?: string;
    currency_code?: string;
    key?: string;
    value?: number;
};
type CouponBreakup = {
    uid?: string;
    is_applied?: boolean;
    message?: string;
    title?: string;
    type?: string;
    sub_title?: string;
    description?: string;
    coupon_value?: number;
    value?: number;
    max_discount_value?: number;
    coupon_type?: string;
    minimum_cart_value?: number;
    code?: string;
};
type LoyaltyPoints = {
    description?: string;
    is_applied?: boolean;
    total?: number;
    applicable?: number;
};
type CartBreakup = {
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
};
type FreeGiftItem = {
    item_id?: number;
    item_price_details?: any;
    item_slug?: string;
    item_brand_name?: string;
    item_name?: string;
    item_images_url?: string[];
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    quantity?: number;
    parent_item_identifier?: string;
};
type DiscountRulesApp = {
    raw_offer?: any;
    matched_buy_rules?: string[];
    item_criteria?: any;
    offer?: any;
};
type AppliedPromotion = {
    applied_free_articles?: AppliedFreeArticles[];
    offer_text?: string;
    promotion_type?: string;
    promotion_group?: string;
    mrp_promotion?: boolean;
    promotion_name?: string;
    discount_rules?: DiscountRulesApp[];
    article_quantity?: number;
    amount?: number;
    promo_id?: string;
    buy_rules?: BuyRules[];
};
type ProductAvailability = {
    is_valid?: boolean;
    deliverable?: boolean;
    out_of_stock?: boolean;
    sizes?: string[];
    other_store_quantity?: number;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    query?: ActionQuery;
    type?: string;
    url?: string;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type CartProduct = {
    uid?: number;
    images?: ProductImage[];
    type?: string;
    action?: ProductAction;
    brand?: BaseInfo;
    name?: string;
    net_quantity?: NetQuantity;
    categories?: CategoryInfo[];
    slug?: string;
};
type ProductPrice = {
    selling?: number;
    currency_symbol?: string;
    currency_code?: string;
    add_on?: number;
    effective?: number;
    marked?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type PromoMeta = {
    message?: string;
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
    product_group_tags?: string[];
    uid?: string;
    size?: string;
    seller?: BaseInfo;
    type?: string;
    quantity?: number;
    parent_item_identifiers?: any;
    extra_meta?: any;
    price?: ArticlePriceInfo;
    store?: BaseInfo;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    promotions_applied?: AppliedPromotion[];
    availability?: ProductAvailability;
    coupon_message?: string;
    message?: string;
    product?: CartProduct;
    is_set?: boolean;
    price_per_unit?: ProductPriceInfo;
    discount?: string;
    promo_meta?: PromoMeta;
    quantity?: number;
    parent_item_identifiers?: any;
    article?: ProductArticle;
    key?: string;
    identifiers: CartProductIdentifer;
    bulk_offer?: any;
    price?: ProductPriceInfo;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    message?: string;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    address?: string;
    address_type?: string;
    meta?: any;
    area?: string;
    landmark?: string;
    email?: string;
    phone?: number;
    area_code_slug?: string;
    state?: string;
    name?: string;
    country?: string;
    pincode?: number;
    city?: string;
    country_code?: string;
    area_code: string;
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
    delivery_promise?: ShipmentPromise;
    message?: string;
    items?: CartProductInfo[];
    is_valid?: boolean;
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
    product_id: number;
    cashback_applied: number;
    size: string;
    cod_charges: number;
    meta?: CartItemMeta;
    delivery_charges: number;
    employee_discount?: number;
    price_effective: number;
    discount: number;
    extra_meta?: any;
    files?: OpenApiFiles[];
    quantity?: number;
    price_marked: number;
    loyalty_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
    amount_paid: number;
    coupon_effective_discount: number;
};
type OpenApiPlatformCheckoutReq = {
    cashback_applied: number;
    cod_charges: number;
    delivery_charges: number;
    employee_discount?: any;
    billing_address: ShippingAddress;
    gstin?: string;
    shipping_address?: ShippingAddress;
    comment?: string;
    coupon_code: string;
    files?: OpenApiFiles[];
    loyalty_discount?: number;
    coupon?: string;
    payment_mode?: string;
    cart_value: number;
    order_id?: string;
    coupon_value: number;
    currency_code?: string;
    payment_methods: MultiTenderPaymentMethod[];
    affiliate_order_id?: string;
    cart_items: OpenApiOrderItem[];
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    message?: string;
    order_id: string;
    order_ref_id?: string;
};
type AbandonedCart = {
    cod_charges?: any;
    cashback: any;
    shipments?: any[];
    is_active?: boolean;
    created_on: string;
    last_modified: string;
    gstin?: string;
    app_id?: string;
    bulk_coupon_discount?: number;
    articles: any[];
    promotion?: any;
    _id: string;
    checkout_mode?: string;
    user_id: string;
    cart_value?: number;
    meta?: any;
    buy_now?: boolean;
    order_id?: string;
    merge_qty?: boolean;
    fynd_credits?: any;
    payments?: any;
    payment_methods?: any[];
    delivery_charges?: any;
    is_archive?: boolean;
    fc_index_map?: number[];
    comment?: string;
    discount?: number;
    pick_up_customer_details?: any;
    coupon?: any;
    payment_mode?: string;
    uid: number;
    is_default: boolean;
    expire_at: string;
};
type AbandonedCartResponse = {
    success?: boolean;
    message?: string;
    result?: any;
    items?: AbandonedCart[];
    page?: Page;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    delivery_promise?: ShipmentPromise;
    delivery_charge_info?: string;
    buy_now?: boolean;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    message?: string;
    last_modified?: string;
    gstin?: string;
    items?: CartProductInfo[];
    comment?: string;
    is_valid?: boolean;
    id?: string;
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    currency?: CartCurrency;
    coupon_text?: string;
};
type AddProductCart = {
    product_group_tags?: string[];
    item_id?: number;
    item_size?: string;
    store_id?: number;
    article_assignment?: any;
    display?: string;
    pos?: boolean;
    article_id?: string;
    seller_id?: number;
    quantity?: number;
    parent_item_identifiers?: any;
    extra_meta?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    cart?: CartDetailResponse;
    success?: boolean;
    message?: string;
    partial?: boolean;
};
type UpdateProductCart = {
    item_id?: number;
    item_size?: string;
    article_id?: string;
    item_index?: number;
    quantity?: number;
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
    extra_meta?: any;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    success?: boolean;
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
