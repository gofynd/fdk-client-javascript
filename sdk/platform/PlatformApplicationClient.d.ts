export = PlatformApplicationClient;
declare class PlatformApplicationClient {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
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
    serviceability: Serviceability;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformApplicationClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, GenerateSEOContent, GeneratedSEOContent, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentAppErrorList, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, ShipmentStatus, PaymentModeInfo, ShipmentItemFulFillingStore, GSTDetailsData, PlatformItem, Prices, BagUnit, UserDataInfo, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, PlatformDeliveryAddress, OrderBagArticle, BagConfigs, OrderBrandName, BagGST, BagStateMapper, CurrentStatus, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, Identifier, FinancialBreakup, OrderBags, BagStatusHistory, OrderDetailsData, Dimensions, Meta, ShipmentStatusData, UserDetailsData, FulfillingStore, InvoiceInfo, OrderingStoreDetails, PDFLinks, AffiliateMeta, Formatted, LockData, ShipmentTimeStamp, EinvoiceInfo, BuyerDetails, DebugInfo, ShipmentMeta, AffiliateDetails, DPDetailsData, PhoneDetails, ContactDetails, CompanyDetails, TrackingList, ShipmentPayments, PlatformShipment, ShipmentInfoResponse, TaxDetails, PlatformUserDetails, BillingStaffDetails, TransactionData, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Dates, Attributes, Item, B2BPODetails, BagMeta, AffiliateBagDetails, BagReturnableCancelableStatus, ArticleDetails, ReturnConfig, Weight, Article, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, Document, StoreDocuments, StoreMeta, StoreAddress, Store, Brand, BagGSTDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, UserData, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderPriority, MarketPlacePdf, AffiliateBag, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, BillingInfo, ShippingInfo, PaymentMethod, PaymentInfo, TaxInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, ApplicationItemMOQ, ApplicationItemSEO, MetaFields, ApplicationItemMeta, SuccessResponse1, MOQData, SEOData, OwnerAppItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionQuery, BannerImage, ImageUrls, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionSchedule, CollectionBadge, UserInfo, SeoDetail, CollectionImage, CollectionBanner, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, ReturnConfigResponse, Image, NetQuantityResponse, Logo, ProductPublished, Product, ProductListingResponse, NetQuantity, TaxIdentifier, TeaserTag, ProductPublish, Trader, CustomOrder, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, ReturnConfig1, WeightResponse, BrandMeta, QuantityBase, Quantities, ManufacturerResponse, DimensionResponse, CompanyMeta, Trader1, PriceMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ReturnConfig2, WeightResponse1, BrandMeta1, Quantity, QuantitiesArticle, ManufacturerResponse1, DimensionResponse1, CompanyMeta1, Trader2, PriceArticle, ArticleStoreResponse, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, LocationIntegrationType, UserSerializer1, InvoiceCredSerializer, InvoiceDetailsSerializer, SellerPhoneNumber, LocationTimingSerializer, LocationDayWiseSerializer, LocationManagerSerializer, GetAddressSerializer, UserSerializer2, GetCompanySerializer, ProductReturnConfigSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponSchedule, Rule, CouponDateMeta, UsesRemaining, UsesRestriction, PostOrder, PriceRange, BulkBundleRestriction, PaymentAllowValue, PaymentModes, Restrictions, State, Validation, CouponAction, RuleDefinition, Validity, Ownership, CouponAuthor, DisplayMetaDict, DisplayMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionDateMeta, Visibility, DisplayMeta1, UsesRemaining1, UsesRestriction1, PostOrder1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, PromotionAction, PromotionAuthor, PromotionSchedule, Ownership1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, LoyaltyPoints, DisplayBreakup, CouponBreakup, RawBreakup, CartBreakup, BasePrice, ArticlePriceInfo, BaseInfo, ProductArticle, PromoMeta, ProductPrice, ProductPriceInfo, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, ProductAvailability, CouponDetails, ProductImage, CategoryInfo, Tags, ActionQuery, ProductAction, CartProduct, CartProductIdentifer, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartRequest, DeleteCartDetailResponse, CartItemCountResponse, Coupon, PageCoupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, Files, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, ApplicationServiceabilityConfig, ServiceabilityrErrorResponse, ApplicationServiceabilityConfigResponse, EntityRegionView_Request, EntityRegionView_page, EntityRegionView_Items, EntityRegionView_Error, EntityRegionView_Response, ZoneDataItem, ListViewProduct, ListViewChannels, ListViewItems, ListViewSummary, ListViewResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, UpdateZoneData, ZoneUpdateRequest, ZoneSuccessResponse, GetZoneDataViewItems, GetSingleZoneDataViewResponse, CreateZoneData, ZoneRequest, ZoneResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, AddressResponse, ContactNumberResponse, IntegrationTypeResponse, CreatedByResponse, MobileNo, ManagerResponse, ProductReturnConfigResponse, ModifiedByResponse, EwayBillResponse, EinvoiceResponse, GstCredentialsResponse, DocumentsResponse, Dp, LogisticsResponse, OpeningClosing, TimmingResponse, WarningsResponse, ItemResponse, GetStoresViewResponse };
}
import Lead = require("./Lead/LeadPlatformApplicationClient");
import Theme = require("./Theme/ThemePlatformApplicationClient");
import User = require("./User/UserPlatformApplicationClient");
import Content = require("./Content/ContentPlatformApplicationClient");
import Communication = require("./Communication/CommunicationPlatformApplicationClient");
import Payment = require("./Payment/PaymentPlatformApplicationClient");
import Order = require("./Order/OrderPlatformApplicationClient");
import Catalog = require("./Catalog/CatalogPlatformApplicationClient");
import FileStorage = require("./FileStorage/FileStoragePlatformApplicationClient");
import Share = require("./Share/SharePlatformApplicationClient");
import Configuration = require("./Configuration/ConfigurationPlatformApplicationClient");
import Cart = require("./Cart/CartPlatformApplicationClient");
import Rewards = require("./Rewards/RewardsPlatformApplicationClient");
import Analytics = require("./Analytics/AnalyticsPlatformApplicationClient");
import Partner = require("./Partner/PartnerPlatformApplicationClient");
import Serviceability = require("./Serviceability/ServiceabilityPlatformApplicationClient");
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
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
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
type GenerateSEOContent = {
    text?: string;
    existing_text?: string;
    keywords?: string[];
    type?: string;
};
type GeneratedSEOContent = {
    title?: string;
    description?: string;
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
    __source?: PathSourceSchema;
};
type PathSourceSchema = {
    type?: string;
    id?: string;
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
type DateMeta = {
    created_on?: string;
    modified_on?: string;
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
    excluded_fields: string[];
    created: boolean;
    aggregators?: any[];
    success: boolean;
};
type ErrorCodeDescription = {
    success: boolean;
    code: string;
    description: string;
};
type PaymentGatewayConfig = {
    config_type: string;
    secret: string;
    merchant_salt: string;
    key: string;
    is_active?: boolean;
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
    logos?: PaymentModeLogo;
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    cod_limit?: number;
    expired?: boolean;
    intent_app_error_list?: string[];
    compliant_with_tokenisation_guidelines?: boolean;
    code?: string;
    timeout?: number;
    display_name?: string;
    display_priority?: number;
    logo_url?: PaymentModeLogo;
    intent_app_error_dict_list?: IntentAppErrorList[];
    merchant_code?: string;
    name?: string;
    fynd_vpa?: string;
    card_id?: string;
    card_brand_image?: string;
    exp_month?: number;
    card_brand?: string;
    nickname?: string;
    intent_flow?: boolean;
    exp_year?: number;
    card_isin?: string;
    remaining_limit?: number;
    card_reference?: string;
    card_issuer?: string;
    cod_limit_per_order?: number;
    card_type?: string;
    intent_app?: IntentApp[];
    card_number?: string;
    card_token?: string;
    retry_count?: number;
    card_fingerprint?: string;
    aggregator_name: string;
    card_name?: string;
};
type RootPaymentMode = {
    display_name: string;
    display_priority: number;
    is_pay_by_card_pl?: boolean;
    name: string;
    save_card?: boolean;
    add_card_enabled?: boolean;
    anonymous_enable?: boolean;
    aggregator_name?: string;
    list?: PaymentModeList[];
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    unique_transfer_no: any;
    more_attributes: any;
    customers: any;
    is_default: boolean;
    transfer_type: string;
    is_active: boolean;
    payouts_aggregators: any[];
};
type PayoutBankDetails = {
    country?: string;
    state?: string;
    ifsc_code: string;
    account_type: string;
    account_no?: string;
    account_holder?: string;
    bank_name?: string;
    city?: string;
    branch_name?: string;
    pincode?: number;
};
type PayoutRequest = {
    unique_external_id: string;
    aggregator: string;
    users: any;
    bank_details: PayoutBankDetails;
    transfer_type: string;
    is_active: boolean;
};
type PayoutResponse = {
    unique_transfer_no: string;
    created: boolean;
    payment_status: string;
    payouts: any;
    users: any;
    transfer_type: string;
    bank_details: any;
    aggregator: string;
    success: boolean;
    is_active: boolean;
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
    data?: any;
    message: string;
    success: boolean;
    is_verified_flag?: boolean;
};
type NotFoundResourceError = {
    success: boolean;
    code: string;
    description: string;
};
type BankDetailsForOTP = {
    ifsc_code: string;
    account_holder: string;
    account_no: string;
    bank_name: string;
    branch_name: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    branch_name: string;
    success?: boolean;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    created_on: string;
    comment?: string;
    email: string;
    account_no: string;
    beneficiary_id: string;
    display_name: string;
    delights_user_name?: string;
    subtitle: string;
    id: number;
    is_active: boolean;
    account_holder: string;
    address: string;
    bank_name: string;
    title: string;
    branch_name?: string;
    mobile?: string;
    ifsc_code: string;
    modified_on: string;
    transfer_mode: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    payment_gateway?: string;
    order_id?: string;
    extra_meta?: any;
    current_status?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    mode: string;
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
type CODdata = {
    limit: number;
    remaining_limit: number;
    user_id: string;
    usages: number;
    is_active: boolean;
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
type EdcModelData = {
    aggregator: string;
    models: string[];
    aggregator_id: number;
};
type EdcAggregatorAndModelListResponse = {
    data: EdcModelData[];
    success: boolean;
};
type StatisticsData = {
    active_device_count: number;
    inactive_device_count: number;
};
type EdcDeviceStatsResponse = {
    statistics: StatisticsData;
    success: boolean;
};
type EdcAddRequest = {
    store_id: number;
    device_tag?: string;
    edc_device_serial_no: string;
    aggregator_id: number;
    terminal_serial_no: string;
    edc_model: string;
};
type EdcDevice = {
    merchant_store_pos_code?: string;
    terminal_unique_identifier: string;
    application_id: string;
    store_id: number;
    device_tag: string;
    edc_device_serial_no: string;
    aggregator_id: number;
    aggregator_name?: string;
    terminal_serial_no: string;
    edc_model?: string;
    is_active: boolean;
};
type EdcDeviceAddResponse = {
    data: EdcDevice;
    success: boolean;
};
type EdcDeviceDetailsResponse = {
    data: EdcDevice;
    success: boolean;
};
type EdcUpdateRequest = {
    merchant_store_pos_code?: string;
    store_id?: number;
    device_tag?: string;
    edc_device_serial_no?: string;
    aggregator_id?: number;
    edc_model?: string;
    is_active?: boolean;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    items: EdcDevice[];
    page: Page;
    success: boolean;
};
type PaymentInitializationRequest = {
    merchant_order_id: string;
    method: string;
    vpa?: string;
    order_id: string;
    razorpay_payment_id?: string;
    currency: string;
    customer_id: string;
    device_id?: string;
    email: string;
    amount: number;
    timeout?: number;
    aggregator: string;
    contact: string;
};
type PaymentInitializationResponse = {
    bqr_image?: string;
    virtual_id?: string;
    merchant_order_id: string;
    aggregator_order_id?: string;
    method: string;
    vpa?: string;
    polling_url: string;
    upi_poll_url?: string;
    status?: string;
    currency?: string;
    customer_id?: string;
    razorpay_payment_id?: string;
    device_id?: string;
    amount?: number;
    timeout?: number;
    aggregator: string;
    success: boolean;
};
type PaymentStatusUpdateRequest = {
    merchant_order_id: string;
    method: string;
    vpa?: string;
    order_id: string;
    status: string;
    currency: string;
    customer_id: string;
    device_id?: string;
    email: string;
    amount: number;
    aggregator: string;
    contact: string;
};
type PaymentStatusUpdateResponse = {
    status: string;
    retry: boolean;
    redirect_url?: string;
    aggregator_name: string;
    success?: boolean;
};
type ResendOrCancelPaymentRequest = {
    order_id: string;
    request_type: string;
    device_id?: string;
};
type LinkStatus = {
    message: string;
    status: boolean;
};
type ResendOrCancelPaymentResponse = {
    data: LinkStatus;
    success: boolean;
};
type FilterInfoOption = {
    name?: string;
    value?: string;
    text: string;
};
type FiltersInfo = {
    value: string;
    type: string;
    options?: FilterInfoOption[];
    text: string;
};
type ShipmentStatus = {
    hex_code: string;
    actual_status: string;
    status: string;
    ops_status: string;
    title: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    value_of_good: number;
    brand_calculated_amount: number;
    gstin_code: string;
    gst_fee: number;
};
type PlatformItem = {
    images?: string[];
    l3_category_name?: string;
    can_cancel?: boolean;
    name?: string;
    can_return?: boolean;
    color?: string;
    l3_category?: number;
    code?: string;
    l1_category?: string[];
    size?: string;
    id?: number;
    department_id?: number;
    image?: string[];
};
type Prices = {
    delivery_charge?: number;
    price_marked?: number;
    cod_charges?: number;
    amount_paid?: number;
    refund_credit?: number;
    transfer_price?: number;
    cashback?: number;
    tax_collected_at_source?: number;
    fynd_credits?: number;
    value_of_good?: number;
    amount_paid_roundoff?: number;
    price_effective?: number;
    promotion_effective_discount?: number;
    discount?: number;
    refund_amount?: number;
    cashback_applied?: number;
    coupon_value?: number;
};
type BagUnit = {
    bag_id: number;
    total_shipment_bags: number;
    can_cancel?: boolean;
    shipment_id: string;
    gst?: GSTDetailsData;
    item?: PlatformItem;
    can_return?: boolean;
    item_quantity: number;
    status: any;
    ordering_channel: string;
    prices?: Prices;
};
type UserDataInfo = {
    last_name?: string;
    is_anonymous_user?: boolean;
    name?: string;
    uid?: number;
    gender?: string;
    avis_user_id?: string;
    first_name?: string;
    mobile?: string;
    email?: string;
};
type ShipmentItem = {
    total_shipments_in_order: number;
    fulfilling_centre: string;
    shipment_status?: ShipmentStatus;
    payment_mode_info?: PaymentModeInfo;
    payment_methods?: any;
    shipment_created_at: string;
    sla?: any;
    shipment_id?: string;
    channel?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    bags?: BagUnit[];
    total_bags_count: number;
    user?: UserDataInfo;
    created_at: string;
    id: string;
    application?: any;
    prices?: Prices;
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    applied_filters?: any;
    page?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type PlatformDeliveryAddress = {
    country?: string;
    pincode?: string;
    city?: string;
    landmark?: string;
    address2?: string;
    address_category?: string;
    latitude?: number;
    address_type?: string;
    version?: string;
    phone?: string;
    address1?: string;
    state?: string;
    longitude?: number;
    created_at?: string;
    email?: string;
    contact_person?: string;
    area?: string;
    updated_at?: string;
};
type OrderBagArticle = {
    return_config?: any;
    identifiers?: any;
    uid?: string;
};
type BagConfigs = {
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    is_active: boolean;
    allow_force_return: boolean;
};
type OrderBrandName = {
    brand_name: string;
    company: string;
    modified_on?: string;
    logo: string;
    id: number;
    created_on: string;
};
type BagGST = {
    gst_tag?: string;
    is_default_hsn_code?: boolean;
    value_of_good?: number;
    gst_tax_percentage?: number;
    gstin_code?: string;
    hsn_code?: string;
    brand_calculated_amount?: number;
    gst_fee?: number;
};
type BagStateMapper = {
    bs_id: number;
    journey_type: string;
    notify_customer?: boolean;
    display_name: string;
    name: string;
    state_type: string;
    app_facing?: boolean;
    app_display_name?: string;
    is_active?: boolean;
    app_state_name?: string;
};
type CurrentStatus = {
    current_status_id: number;
    delivery_awb_number?: string;
    bag_id?: number;
    state_type?: string;
    kafka_sync?: boolean;
    shipment_id?: string;
    state_id?: number;
    status?: string;
    delivery_partner_id?: number;
    created_at?: string;
    bag_state_mapper?: BagStateMapper;
    store_id?: number;
    updated_at?: string;
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
    promotion_name?: string;
    discount_rules?: DiscountRules[];
    buy_rules?: BuyRules[];
    article_quantity?: number;
    promo_id?: string;
    mrp_promotion?: boolean;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    gst_tag: string;
    refund_credit: number;
    added_to_fynd_cash: boolean;
    value_of_good: number;
    identifiers: Identifier;
    item_name: string;
    total_units: number;
    delivery_charge: number;
    price_marked: number;
    amount_paid: number;
    tax_collected_at_source?: number;
    fynd_credits: number;
    cashback_applied: number;
    transfer_price: number;
    cod_charges: number;
    coupon_effective_discount: number;
    price_effective: number;
    brand_calculated_amount: number;
    hsn_code: string;
    gst_fee: number;
    coupon_value: number;
    cashback: number;
    amount_paid_roundoff?: number;
    promotion_effective_discount: number;
    gst_tax_percentage: number;
    discount: number;
    size: string;
};
type OrderBags = {
    line_number?: number;
    item?: PlatformItem;
    can_cancel?: boolean;
    can_return?: boolean;
    parent_promo_bags?: any;
    delivery_address?: PlatformDeliveryAddress;
    prices?: Prices;
    article?: OrderBagArticle;
    quantity?: number;
    entity_type?: string;
    display_name?: string;
    identifier?: string;
    bag_configs?: BagConfigs;
    bag_id: number;
    brand?: OrderBrandName;
    gst_details?: BagGST;
    seller_identifier?: string;
    current_status?: CurrentStatus;
    applied_promos?: AppliedPromos[];
    financial_breakup?: FinancialBreakup;
};
type BagStatusHistory = {
    bag_id?: number;
    delivery_awb_number?: string;
    display_name?: string;
    state_type?: string;
    kafka_sync?: boolean;
    shipment_id?: string;
    bsh_id?: number;
    state_id?: number;
    reasons?: any[];
    app_display_name?: string;
    status: string;
    delivery_partner_id?: number;
    forward?: boolean;
    created_at?: string;
    bag_state_mapper?: BagStateMapper;
    store_id?: number;
    updated_at?: string;
};
type OrderDetailsData = {
    cod_charges?: string;
    tax_details?: any;
    order_date?: string;
    ordering_channel_logo?: any;
    affiliate_id?: string;
    source?: string;
    ordering_channel?: string;
    order_value?: string;
    fynd_order_id: string;
};
type Dimensions = {
    is_default?: boolean;
    length?: number;
    width?: number;
    height?: number;
    unit?: string;
};
type Meta = {
    dimension?: Dimensions;
};
type ShipmentStatusData = {
    bag_list?: string[];
    shipment_id?: string;
    status?: string;
    created_at?: string;
    id?: number;
};
type UserDetailsData = {
    country: string;
    pincode: string;
    city: string;
    landmark?: string;
    name: string;
    address: string;
    address_type?: string;
    phone: string;
    address1?: string;
    state: string;
    email?: string;
    area?: string;
};
type FulfillingStore = {
    country: string;
    pincode: string;
    city: string;
    address: string;
    phone: string;
    meta: any;
    code: string;
    state: string;
    contact_person: string;
    id: number;
    store_name: string;
    fulfillment_channel: string;
};
type InvoiceInfo = {
    label_url?: string;
    invoice_url?: string;
    credit_note_id?: string;
    updated_date?: string;
    store_invoice_id?: string;
};
type OrderingStoreDetails = {
    country: string;
    pincode: string;
    city: string;
    address: string;
    phone: string;
    meta: any;
    code: string;
    state: string;
    contact_person: string;
    store_name: string;
    ordering_store_id: number;
};
type PDFLinks = {
    label_a6?: string;
    invoice_a6?: string;
    invoice_type: string;
    label?: string;
    label_pos?: string;
    po_invoice?: string;
    credit_note_url?: string;
    invoice?: string;
    delivery_challan_a4?: string;
    label_type: string;
    label_a4?: string;
    b2b?: string;
    invoice_a4?: string;
    invoice_pos?: string;
};
type AffiliateMeta = {
    is_priority?: boolean;
    box_type?: string;
    quantity?: number;
    employee_discount?: number;
    order_item_id?: string;
    coupon_code?: string;
    channel_shipment_id?: string;
    loyalty_discount?: number;
    due_date?: string;
    size_level_total_qty?: number;
    channel_order_id?: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type LockData = {
    locked?: boolean;
    mto?: boolean;
    lock_message?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type EinvoiceInfo = {
    invoice?: any;
    credit_note?: any;
};
type BuyerDetails = {
    pincode: number;
    city: string;
    name: string;
    ajio_site_id?: string;
    address: string;
    state: string;
    gstin: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentMeta = {
    marketplace_store_id?: string;
    formatted?: Formatted;
    external?: any;
    awb_number?: string;
    return_details?: any;
    forward_affiliate_shipment_id?: string;
    lock_data?: LockData;
    ewaybill_info?: any;
    box_type?: string;
    store_invoice_updated_date?: string;
    bag_weight?: any;
    timestamp?: ShipmentTimeStamp;
    return_affiliate_order_id?: string;
    shipment_weight?: number;
    po_number?: string;
    due_date?: string;
    einvoice_info?: EinvoiceInfo;
    dp_sort_key?: string;
    shipment_volumetric_weight?: number;
    return_store_node?: number;
    forward_affiliate_order_id?: string;
    assign_dp_from_sb?: boolean;
    same_store_available: boolean;
    return_awb_number?: string;
    b2b_buyer_details?: BuyerDetails;
    packaging_name?: string;
    order_type?: string;
    dp_id?: string;
    b2c_buyer_details?: any;
    fulfilment_priority_text?: string;
    return_affiliate_shipment_id?: string;
    dp_options?: any;
    auto_trigger_dp_assignment_acf: boolean;
    dp_name?: string;
    weight: number;
    debug_info?: DebugInfo;
};
type AffiliateDetails = {
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    affiliate_bag_id: string;
    affiliate_order_id: string;
    company_affiliate_tag?: string;
    ad_id?: string;
    affiliate_store_id: string;
    affiliate_shipment_id: string;
    affiliate_meta: AffiliateMeta;
    shipment_meta: ShipmentMeta;
};
type DPDetailsData = {
    gst_tag?: string;
    country?: string;
    pincode?: string;
    awb_no?: string;
    name?: string;
    track_url?: string;
    eway_bill_id?: string;
    id?: number;
};
type PhoneDetails = {
    mobile_number?: string;
    country_code?: number;
};
type ContactDetails = {
    emails?: string[];
    phone?: PhoneDetails[];
};
type CompanyDetails = {
    company_id?: number;
    address?: any;
    company_contact?: ContactDetails;
    company_name?: string;
    company_cin?: string;
    company_gst?: string;
};
type TrackingList = {
    time?: string;
    status: string;
    is_passed?: boolean;
    is_current?: boolean;
    text: string;
};
type ShipmentPayments = {
    logo?: string;
    mode?: string;
    source?: string;
};
type PlatformShipment = {
    total_bags?: number;
    shipment_status?: string;
    total_items?: number;
    journey_type?: string;
    picked_date?: string;
    invoice_id?: string;
    bags?: OrderBags[];
    shipment_id: string;
    user_agent?: string;
    bag_status_history?: BagStatusHistory[];
    enable_dp_tracking?: boolean;
    shipment_quantity?: number;
    payment_mode?: string;
    lock_status?: boolean;
    payment_methods?: any;
    custom_meta?: any[];
    order?: OrderDetailsData;
    meta?: Meta;
    status?: ShipmentStatusData;
    user?: UserDataInfo;
    billing_details?: UserDetailsData;
    prices?: Prices;
    delivery_slot?: any;
    fulfilling_store?: FulfillingStore;
    platform_logo?: string;
    invoice?: InvoiceInfo;
    ordering_store?: OrderingStoreDetails;
    priority_text?: string;
    coupon?: any;
    packaging_type?: string;
    forward_shipment_id?: string;
    affiliate_details?: AffiliateDetails;
    vertical?: string;
    fulfilment_priority?: number;
    dp_details?: DPDetailsData;
    gst_details?: GSTDetailsData;
    delivery_details?: UserDetailsData;
    shipment_images?: string[];
    operational_status?: string;
    company_details?: CompanyDetails;
    tracking_list?: TrackingList[];
    payments?: ShipmentPayments;
};
type ShipmentInfoResponse = {
    shipments?: PlatformShipment[];
    message?: string;
    success: boolean;
};
type TaxDetails = {
    pan_no?: string;
    gstin?: string;
};
type PlatformUserDetails = {
    platform_user_id?: string;
    platform_user_first_name?: string;
    platform_user_employee_code?: string;
    platform_user_last_name?: string;
};
type BillingStaffDetails = {
    last_name?: string;
    staff_id?: number;
    user?: string;
    employee_code?: string;
    first_name?: string;
};
type TransactionData = {
    currency?: string;
    entity?: string;
    payment_id?: string;
    amount_paid?: string;
    status?: string;
    terminal_id?: string;
    transaction_id?: string;
    unique_reference_number?: string;
};
type OrderMeta = {
    platform_user_details?: PlatformUserDetails;
    cart_id?: number;
    customer_note?: string;
    currency_symbol?: string;
    order_child_entities?: string[];
    company_logo?: string;
    billing_staff_details?: BillingStaffDetails;
    extra_meta?: any;
    order_platform?: string;
    comment?: string;
    order_tags?: any[];
    mongo_cart_id?: number;
    ordering_store?: number;
    order_type?: string;
    staff?: any;
    employee_id?: number;
    payment_type?: string;
    files?: any[];
    transaction_data?: TransactionData;
};
type OrderDict = {
    payment_methods?: any;
    tax_details?: TaxDetails;
    order_date: string;
    meta?: OrderMeta;
    fynd_order_id: string;
    prices?: Prices;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    order?: OrderDict;
    success: boolean;
};
type SubLane = {
    value?: string;
    total_items?: number;
    index?: number;
    actions?: any[];
    text?: string;
};
type SuperLane = {
    value: string;
    total_items?: number;
    options?: SubLane[];
    text: string;
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
    display?: string;
    value?: string;
};
type PlatformOrderItems = {
    order_id?: string;
    channel?: PlatformChannel;
    total_order_value?: number;
    meta?: any;
    breakup_values?: PlatformBreakupValues[];
    user_info?: UserDataInfo;
    order_created_time?: string;
    order_value?: number;
    shipments?: PlatformShipment[];
    payment_mode?: string;
};
type OrderListingResponse = {
    page?: Page;
    items?: PlatformOrderItems[];
    success?: boolean;
    message?: string;
    lane?: string;
    total_count?: number;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    text: string;
    key: string;
    value: number;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    updated_time?: string;
    last_location_recieved_at?: string;
    awb?: string;
    account_name?: string;
    reason?: string;
    shipment_type?: string;
    meta?: any;
    status?: string;
    raw_status?: string;
    updated_at?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type FiltersResponse = {
    advance?: any[];
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    s3_key?: string;
    display_name?: string;
    report_name?: string;
    report_id?: string;
    request_details?: any;
    status?: string;
    report_requested_at?: string;
    report_type?: string;
    report_created_at?: string;
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
    message?: string;
    type?: string;
};
type JioCodeUpsertResponse = {
    data?: any[];
    identifier?: string;
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    store_code?: string;
    data?: any;
    store_id?: string;
    label?: any;
    company_id?: string;
    invoice_status?: string;
    do_invoice_label_generated: boolean;
    invoice?: any;
    batch_id: string;
    store_name?: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type FileResponse = {
    cdn?: URL;
    tags?: string[];
    upload?: FileUploadResponse;
    file_name?: string;
    method?: string;
    operation?: string;
    namespace?: string;
    file_path?: string;
    size?: number;
    content_type?: string;
};
type bulkListingData = {
    failed_shipments?: any[];
    processing_shipments?: string[];
    excel_url?: string;
    file_name?: string;
    processing?: number;
    successful_shipments?: any[];
    total?: number;
    failed?: number;
    company_id?: number;
    status?: string;
    batch_id?: string;
    store_name?: string;
    user_name?: string;
    id?: string;
    successful?: number;
    store_code?: string;
    user_id?: string;
    uploaded_on?: string;
    store_id?: number;
};
type BulkListingPage = {
    current?: number;
    total?: number;
    has_previous?: boolean;
    has_next?: boolean;
    size?: number;
    type?: string;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    page?: BulkListingPage;
    error?: string;
    success?: boolean;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    qc_type?: string[];
    question_set?: QuestionSet[];
    id?: number;
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
    total_shipments_count?: number;
    successful_shipments_count?: number;
    company_id?: string;
    successful_shipment_ids?: string[];
    failed_shipments_count?: number;
    batch_id?: string;
    processing_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    data?: BulkActionDetailsDataField[];
    success?: string;
    error?: string[];
    message?: string;
    user_id?: string;
    uploaded_by?: string;
    uploaded_on?: string;
    status?: boolean;
    failed_records?: string[];
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type Attributes = {
    essential?: string;
    brand_name?: string;
    name?: string;
    marketer_address?: string;
    gender?: string[];
    primary_color?: string;
    primary_material?: string;
    marketer_name?: string;
    primary_color_hex?: string;
};
type Item = {
    gender?: string;
    color?: string;
    brand_id: number;
    can_cancel?: boolean;
    item_id: number;
    can_return?: boolean;
    l2_category?: string[];
    slug_key: string;
    meta?: any;
    code?: string;
    l1_category_id?: number;
    last_updated_at?: string;
    image: string[];
    branch_url?: string;
    l3_category_name?: string;
    name: string;
    l2_category_id?: number;
    l1_category?: string[];
    department_id?: number;
    brand: string;
    webstore_product_url?: string;
    attributes: Attributes;
    l3_category?: number;
    size: string;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    item_base_price?: number;
    po_line_amount?: number;
    partial_can_ret?: boolean;
    docker_number?: string;
    po_tax_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type AffiliateBagDetails = {
    employee_discount?: number;
    loyalty_discount?: number;
    affiliate_bag_id: string;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
};
type BagReturnableCancelableStatus = {
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    is_active: boolean;
};
type ArticleDetails = {
    status?: any;
};
type ReturnConfig = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type Weight = {
    unit?: string;
    is_default?: boolean;
    shipping?: number;
};
type Article = {
    raw_meta?: any;
    child_details?: any;
    dimensions?: Dimensions;
    a_set?: any;
    _id: string;
    return_config?: ReturnConfig;
    uid: string;
    is_set?: boolean;
    seller_identifier: string;
    esp_modified?: any;
    identifiers: Identifier;
    code?: string;
    size: string;
    weight?: Weight;
};
type StoreEinvoice = {
    user?: string;
    password?: string;
    username?: string;
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
    user?: string;
    password?: string;
    username?: string;
};
type Document = {
    value: string;
    verified: boolean;
    url?: string;
    ds_type: string;
    legal_name: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    display_name: string;
    notification_emails?: string[];
    gst_credentials: StoreGstCredentials;
    additional_contact_details?: any;
    ewaybill_portal_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    gst_number?: string;
    product_return_config?: any;
    timing?: any[];
    stage: string;
    documents?: StoreDocuments;
};
type StoreAddress = {
    landmark?: string;
    address_type: string;
    version?: string;
    email?: string;
    updated_at: string;
    country: string;
    pincode: number;
    address2?: string;
    latitude: number;
    area?: string;
    country_code: string;
    city: string;
    address_category: string;
    phone: string;
    address1: string;
    longitude: number;
    state: string;
    created_at: string;
    contact_person: string;
};
type Store = {
    store_active_from?: string;
    parent_store_id?: number;
    updated_at?: string;
    store_email: string;
    country: string;
    s_id: string;
    brand_id?: any;
    pincode: string;
    address2?: string;
    company_id: number;
    latitude: number;
    meta: StoreMeta;
    packaging_material_count?: number;
    code?: string;
    is_enabled_for_recon?: boolean;
    fulfillment_channel: string;
    vat_no?: string;
    is_archived?: boolean;
    name: string;
    alohomora_user_id?: number;
    mall_area?: string;
    order_integration_id?: string;
    mall_name?: string;
    store_address_json?: StoreAddress;
    city: string;
    phone: number;
    address1: string;
    longitude: number;
    state: string;
    created_at: string;
    brand_store_tags?: string[];
    is_active?: boolean;
    contact_person: string;
    location_type: string;
    login_username: string;
};
type Brand = {
    brand_name: string;
    brand_id: number;
    credit_note_expiry_days?: number;
    start_date?: string;
    company: string;
    credit_note_allowed?: boolean;
    pickup_location?: string;
    is_virtual_invoice?: boolean;
    script_last_ran?: string;
    invoice_prefix?: string;
    modified_on?: number;
    logo?: string;
    created_on?: number;
};
type BagGSTDetails = {
    gst_tag: string;
    cgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    hsn_code_id: string;
    tax_collected_at_source: number;
    igst_gst_fee: string;
    value_of_good: number;
    sgst_tax_percentage: number;
    cgst_tax_percentage: number;
    gst_tax_percentage: number;
    gstin_code?: string;
    hsn_code: string;
    brand_calculated_amount: number;
    gst_fee: number;
    igst_tax_percentage: number;
    sgst_gst_fee: string;
};
type BagDetailsPlatformResponse = {
    journey_type: string;
    line_number?: number;
    shipment_id?: string;
    dates?: Dates;
    item: Item;
    bag_status_history?: BagStatusHistory;
    bag_update_time?: number;
    b_id: number;
    tags?: string[];
    b_type?: string;
    restore_coupon?: boolean;
    meta?: BagMeta;
    affiliate_bag_details: AffiliateBagDetails;
    status: BagReturnableCancelableStatus;
    parent_promo_bags?: any;
    qc_required?: any;
    article_details?: ArticleDetails;
    bag_status: BagStatusHistory[];
    prices: Prices;
    article: Article;
    no_of_bags_order?: number;
    original_bag_list?: number[];
    quantity?: number;
    entity_type?: string;
    display_name?: string;
    identifier?: string;
    restore_promos?: any;
    current_operational_status: BagStatusHistory;
    ordering_store?: Store;
    order_integration_id?: string;
    affiliate_details?: AffiliateDetails;
    brand: Brand;
    gst_details: BagGSTDetails;
    reasons?: any[];
    operational_status?: string;
    seller_identifier?: string;
    current_status: BagStatusHistory;
    applied_promos?: any[];
    financial_breakup: FinancialBreakup[];
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    page_type: string;
    current: number;
    item_total: number;
    has_next: boolean;
    size: number;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
};
type GeneratePosOrderReceiptResponse = {
    payment_receipt?: string;
    success?: boolean;
    order_id?: string;
    invoice_receipt?: string;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    error?: string;
    status?: number;
    message?: string;
    shipment_id?: string;
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
    set_id?: string;
    affiliate_order_id?: string;
    store_id: number;
    affiliate_bag_id?: string;
    bag_id?: number;
    affiliate_id?: string;
    mongo_article_id?: string;
    reason_ids?: number[];
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    id?: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    reason_text: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockPayload = {
    entity_type: string;
    action_type: string;
    entities: Entities[];
    action: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    affiliate_order_id?: string;
    is_locked?: boolean;
    affiliate_bag_id?: string;
    bag_id?: number;
};
type CheckResponse = {
    original_filter?: OriginalFilter;
    status?: string;
    is_bag_locked?: boolean;
    affiliate_id?: string;
    is_shipment_locked?: boolean;
    lock_status?: boolean;
    bags?: Bags[];
    affiliate_shipment_id?: string;
    shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    id: number;
    created_at?: string;
    logo_url?: string;
    title?: string;
    company_id?: number;
    platform_name?: string;
    platform_id?: string;
    to_datetime?: string;
    from_datetime?: string;
    description?: string;
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
    identifier?: string;
    line_number?: number;
    quantity?: number;
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
type Products = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
};
type ShipmentsRequest = {
    reasons?: ReasonsData;
    identifier: string;
    data_updates?: DataUpdates;
    products?: Products[];
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    status?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
    task?: boolean;
    force_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    final_state?: any;
    message?: string;
    identifier?: string;
    status?: number;
    meta?: any;
    code?: string;
    stack_trace?: string;
    exception?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
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
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryConfig = {
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    name: string;
    id: string;
    created_at: string;
    meta?: AffiliateAppConfigMeta[];
    owner: string;
    secret: string;
    updated_at: string;
    token: string;
    description?: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    config?: AffiliateConfig;
    token: string;
    id: string;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    create_user?: boolean;
    store_lookup?: string;
    bag_end_state?: string;
    affiliate: Affiliate;
    article_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
};
type OrderUser = {
    last_name: string;
    email: string;
    pincode: string;
    state: string;
    city: string;
    phone: number;
    address2?: string;
    first_name: string;
    address1?: string;
    country: string;
    mobile: number;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type ArticleDetails1 = {
    dimension: any;
    attributes: any;
    brand_id: number;
    weight: any;
    _id: string;
    category: any;
    quantity: number;
};
type ShipmentDetails = {
    articles: ArticleDetails1[];
    dp_id?: number;
    affiliate_shipment_id: string;
    box_type?: string;
    meta?: any;
    shipments: number;
    fulfillment_id: number;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_id: number;
    fulfillment_type: string;
};
type ShipmentConfig = {
    source: string;
    shipment: ShipmentDetails[];
    identifier: string;
    payment_mode: string;
    to_pincode: string;
    location_details?: LocationDetails;
    action: string;
    journey: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    discount: number;
    sku: string;
    _id: string;
    unit_price: number;
    affiliate_meta: any;
    fynd_store_id: string;
    transfer_price: number;
    identifier: any;
    store_id: number;
    delivery_charge: number;
    modified_on: string;
    item_size: string;
    seller_identifier: string;
    pdf_links?: MarketPlacePdf;
    hsn_code_id: string;
    affiliate_store_id: string;
    amount_paid: number;
    item_id: number;
    price_effective: number;
    company_id: number;
    avl_qty: number;
    price_marked: number;
    quantity: number;
};
type OrderInfo = {
    coupon?: string;
    user: UserData;
    discount: number;
    shipment?: ShipmentData;
    billing_address: OrderUser;
    affiliate_order_id?: string;
    items: any;
    cod_charges: number;
    order_priority?: OrderPriority;
    payment_mode: string;
    order_value: number;
    payment?: any;
    shipping_address: OrderUser;
    delivery_charges: number;
    bags: AffiliateBag[];
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
    success?: boolean;
    message?: string;
};
type ActionInfo = {
    slug: string;
    description: string;
    id: number;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    user: string;
    l2_detail?: string;
    message: string;
    ticket_id?: string;
    l1_detail?: string;
    l3_detail?: string;
    bag_id?: number;
    type: string;
    ticket_url?: string;
    createdat: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type PostHistoryData = {
    user_name: string;
    message: string;
};
type PostHistoryFilters = {
    identifier?: string;
    line_number?: string;
    shipment_id: string;
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
type SmsDataPayload = {
    message: string;
    customer_name: string;
    payment_mode: string;
    shipment_id: number;
    country_code: string;
    order_id: string;
    brand_name: string;
    phone_number: number;
    amount_paid: number;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    slug: string;
    bag_id: number;
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
};
type Meta1 = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    id: number;
    bag_list?: number[];
    meta: Meta1;
    status?: string;
    remarks?: string;
    shipment_id?: string;
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
    shipment_ids?: string[];
    dp_id: number;
    order_type: string;
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type BillingInfo = {
    alternate_mobile_number?: string;
    house_no?: string;
    floor_no?: string;
    state: string;
    last_name?: string;
    state_code?: string;
    pincode: string;
    primary_email: string;
    alternate_email?: string;
    address2?: string;
    primary_mobile_number: string;
    country_code?: string;
    address1: string;
    gender?: string;
    middle_name?: string;
    external_customer_code?: string;
    city: string;
    title?: string;
    customer_code?: string;
    first_name: string;
    country: string;
};
type ShippingInfo = {
    alternate_mobile_number?: string;
    landmark?: string;
    house_no?: string;
    floor_no?: string;
    address_type?: string;
    state: string;
    geo_location?: any;
    last_name?: string;
    state_code?: string;
    pincode: string;
    shipping_type?: string;
    primary_email: string;
    alternate_email?: string;
    address2?: string;
    primary_mobile_number: string;
    country_code?: string;
    address1: string;
    gender?: string;
    slot?: any[];
    external_customer_code?: string;
    middle_name?: string;
    city: string;
    title?: string;
    customer_code?: string;
    first_name: string;
    country: string;
};
type PaymentMethod = {
    name: string;
    mode: string;
    transaction_data?: any;
    amount: number;
    meta?: any;
    refund_by: string;
    collect_by: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type Tax = {
    name: string;
    rate: number;
    amount: any;
    breakup?: any[];
};
type Charge = {
    name: string;
    tax?: Tax;
    amount: any;
    code?: string;
    type: string;
};
type LineItem = {
    custom_messasge?: string;
    meta?: any;
    seller_identifier: string;
    charges?: Charge[];
    external_line_id?: string;
    quantity?: number;
};
type ProcessingDates = {
    confirm_by_date?: string;
    dispatch_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_after_date?: string;
    pack_by_date?: string;
    dp_pickup_slot?: any;
};
type Shipment = {
    priority?: number;
    line_items: LineItem[];
    meta?: any;
    processing_dates?: ProcessingDates;
    external_shipment_id?: string;
    location_id: number;
};
type CreateOrderAPI = {
    external_creation_date?: string;
    billing_info: BillingInfo;
    meta?: any;
    shipping_info: ShippingInfo;
    currency_info?: any;
    payment_info: PaymentInfo;
    tax_info?: TaxInfo;
    shipments: Shipment[];
    charges?: Charge[];
    external_order_id?: string;
};
type CreateOrderErrorReponse = {
    message: string;
    request_id?: string;
    meta?: string;
    status: number;
    code?: string;
    stack_trace?: string;
    info?: any;
    exception?: string;
};
type PaymentMethods = {
    mode?: string;
    refund_by?: string;
    collect_by?: string;
};
type CreateChannelPaymentInfo = {
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
    source?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    lock_states?: string[];
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
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
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsData = {
    uid?: string;
    result?: any;
    _custom_json?: any;
    words?: string[];
    app_id?: string;
    is_active?: boolean;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    _custom_json?: any;
    words?: string[];
    app_id?: string;
    is_active?: boolean;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    uid?: string;
    _custom_json?: any;
    results?: any[];
    words?: string[];
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type AutocompletePageAction = {
    params?: any;
    query?: any;
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
    _custom_json?: any;
    action?: AutocompleteAction;
    logo?: Media;
    display?: string;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    results?: AutocompleteResult[];
    words?: string[];
    app_id?: string;
    is_active?: boolean;
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    words?: string[];
    app_id?: string;
    results?: any[];
};
type ProductBundleItem = {
    min_quantity: number;
    product_uid: number;
    max_quantity: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
};
type GetProductBundleCreateResponse = {
    company_id?: number;
    modified_on?: string;
    name: string;
    page_visibility?: string[];
    created_on?: string;
    created_by?: any;
    same_store_assignment?: boolean;
    choice: string;
    id?: string;
    slug: string;
    meta?: any;
    products: ProductBundleItem[];
    modified_by?: any;
    logo?: string;
    is_active: boolean;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    company_id?: number;
    modified_on?: string;
    name: string;
    page_visibility?: string[];
    created_on?: string;
    created_by?: any;
    same_store_assignment?: boolean;
    choice: string;
    slug: string;
    meta?: any;
    products: ProductBundleItem[];
    modified_by?: any;
    logo?: string;
    is_active: boolean;
};
type ProductBundleUpdateRequest = {
    company_id?: number;
    modified_on?: string;
    name: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    choice: string;
    slug: string;
    meta?: any;
    products: ProductBundleItem[];
    modified_by?: any;
    logo?: string;
    is_active: boolean;
};
type LimitedProductData = {
    uid?: number;
    sizes?: string[];
    attributes?: any;
    name?: string;
    identifier?: any;
    item_code?: string;
    slug?: string;
    price?: any;
    short_description?: string;
    images?: string[];
    quantity?: number;
    country_of_origin?: string;
};
type Size = {
    is_available?: boolean;
    quantity?: number;
    value?: string;
    display?: string;
};
type Price = {
    min_marked?: number;
    max_effective?: number;
    currency?: string;
    max_marked?: number;
    min_effective?: number;
};
type GetProducts = {
    product_details?: LimitedProductData;
    min_quantity?: number;
    sizes?: Size[];
    product_uid?: number;
    max_quantity?: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    price?: Price;
    allow_remove?: boolean;
};
type GetProductBundleResponse = {
    company_id?: number;
    page_visibility?: string[];
    name?: string;
    same_store_assignment?: boolean;
    choice?: string;
    slug?: string;
    meta?: any;
    products?: GetProducts[];
    logo?: string;
    is_active?: boolean;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    company_id?: number;
    tag?: string;
    name: string;
    modified_on?: string;
    created_by?: any;
    subtitle?: string;
    image?: string;
    brand_id?: number;
    title: string;
    id?: string;
    active?: boolean;
    guide?: Guide;
    modified_by?: any;
    created_on?: string;
    description?: string;
};
type SizeGuideResponse = {
    modified_on?: string;
    company_id?: number;
    name?: string;
    tag?: string;
    subtitle?: string;
    brand_id?: number;
    title?: string;
    id?: string;
    active?: boolean;
    guide?: any;
    modified_by?: any;
    created_on?: string;
    created_by?: any;
};
type ApplicationItemMOQ = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemMeta = {
    alt_text?: any;
    moq?: ApplicationItemMOQ;
    is_cod?: boolean;
    _custom_json?: any;
    is_gift?: boolean;
    seo?: ApplicationItemSEO;
    _custom_meta?: MetaFields[];
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
    description?: any;
    title?: any;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    moq?: MOQData;
    is_cod?: boolean;
    seo?: SEOData;
    is_gift?: boolean;
};
type GetConfigMetadataResponse = {
    data: any[];
    condition?: any[];
    values?: any[];
};
type PageResponseType = {
    next: number;
    total_count: number;
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
    priority: number;
    name: string;
    key?: string;
    slug?: string;
    unit?: string;
    display_type: string;
    logo?: string;
    is_active: boolean;
};
type AppConfigurationDetail = {
    attributes?: AttributeDetailsGroup[];
    name?: string;
    priority: number;
    is_default: boolean;
    slug: string;
    template_slugs?: string[];
    app_id: string;
    logo?: string;
    is_active: boolean;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    priority: number;
    name?: string;
    is_default: boolean;
    key: string;
    default_key: string;
    app_id: string;
    logo?: string;
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
    similar?: any;
    compare?: any;
    variant?: any;
    detail?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    map_values?: any[];
    value?: string;
    sort?: string;
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    map?: any;
};
type ConfigurationListingFilterConfig = {
    value_config?: ConfigurationListingFilterValue;
    name?: string;
    priority: number;
    type: string;
    key: string;
    display_name?: string;
    logo?: string;
    is_active: boolean;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    name?: string;
    priority: number;
    key: string;
    logo?: string;
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
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    priority: number;
    subtitle?: string;
    title?: string;
    key: string;
    size?: ProductSize;
    logo?: string;
    is_active: boolean;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    name: string;
    priority: number;
    key: string;
    display_type: string;
    size: ProductSize;
    logo?: string;
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
    modified_on?: string;
    config_type: string;
    product?: ConfigurationProduct;
    type?: string;
    id?: string;
    modified_by?: any;
    config_id?: string;
    app_id: string;
    created_on?: string;
    created_by?: any;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    modified_on?: string;
    config_type: string;
    product?: ConfigurationProduct;
    type?: string;
    modified_by?: any;
    config_id?: string;
    app_id: string;
    created_on?: string;
    created_by?: any;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
    id?: string;
    config_id?: string;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    name?: string;
    is_selected?: boolean;
    value?: string;
};
type ProductFiltersKey = {
    name: string;
    display: string;
    operators?: string[];
    kind?: string;
    logo?: string;
};
type ProductFiltersValue = {
    count?: number;
    selected_max?: number;
    max?: number;
    display: string;
    currency_symbol?: string;
    display_format?: string;
    selected_min?: number;
    is_selected: boolean;
    query_format?: string;
    currency_code?: string;
    value: any;
    min?: number;
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
type BannerImage = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type GetCollectionDetailNest = {
    priority?: number;
    _schedule?: any;
    type?: string;
    visible_facets_keys?: string[];
    app_id?: string;
    badge?: any;
    uid?: string;
    cron?: any;
    action?: Action;
    allow_facets?: boolean;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    is_active?: boolean;
    banners?: ImageUrls;
    description?: string;
    tag?: string[];
    name?: string;
    slug?: string;
    meta?: any;
    logo?: Media1;
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
type GetCollectionListingResponse = {
    page?: Page;
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
};
type CollectionSchedule = {
    cron?: string;
    end?: string;
    duration?: number;
    start?: string;
    next_schedule?: NextSchedule[];
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type UserInfo = {
    uid?: string;
    username?: string;
    user_id?: string;
    email?: string;
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
    is_visible?: boolean;
    priority?: number;
    tags?: string[];
    _schedule?: CollectionSchedule;
    type: string;
    published?: boolean;
    visible_facets_keys?: string[];
    app_id: string;
    badge?: CollectionBadge;
    created_by?: UserInfo;
    _locale_language?: any;
    allow_facets?: boolean;
    _custom_json?: any;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    sort_on?: string;
    modified_by?: UserInfo;
    seo?: SeoDetail;
    is_active?: boolean;
    description?: string;
    banners: CollectionBanner;
    name: string;
    slug: string;
    meta?: any;
    logo: CollectionImage;
};
type CollectionCreateResponse = {
    priority?: number;
    _schedule?: any;
    type?: string;
    visible_facets_keys?: string[];
    app_id?: string;
    badge?: any;
    cron?: any;
    allow_facets?: boolean;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    sort_on?: string;
    is_active?: boolean;
    banners?: ImageUrls;
    description?: string;
    tag?: string[];
    name?: string;
    slug?: string;
    meta?: any;
    logo?: BannerImage;
};
type CollectionDetailResponse = {
    cron?: any;
    tag?: string[];
    name?: string;
    priority?: number;
    badge?: any;
    query?: CollectionQuery[];
    allow_facets?: boolean;
    _schedule?: any;
    type?: string;
    is_active?: boolean;
    slug?: string;
    meta?: any;
    visible_facets_keys?: string[];
    banners?: ImageUrls;
    app_id?: string;
    logo?: Media1;
    description?: string;
    allow_sort?: boolean;
};
type UpdateCollection = {
    is_visible?: boolean;
    priority?: number;
    tags?: string[];
    _schedule?: CollectionSchedule;
    type?: string;
    published?: boolean;
    visible_facets_keys?: string[];
    badge?: CollectionBadge;
    _locale_language?: any;
    allow_facets?: boolean;
    _custom_json?: any;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    sort_on?: string;
    modified_by?: UserInfo;
    seo?: SeoDetail;
    is_active?: boolean;
    description?: string;
    banners?: CollectionBanner;
    name?: string;
    slug?: string;
    meta?: any;
    logo?: CollectionImage;
};
type ProductBrand = {
    uid?: number;
    logo?: Media1;
    action?: Action;
    name?: string;
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
type Price1 = {
    currency_code?: string;
    currency_symbol?: string;
    max?: number;
    min?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    attributes?: any;
    similars?: string[];
    item_code?: string;
    tryouts?: string[];
    color?: string;
    type?: string;
    product_online_date?: string;
    promo_meta?: any;
    rating?: number;
    medias?: Media1[];
    highlights?: string[];
    uid?: number;
    teaser_tag?: any;
    brand?: ProductBrand;
    short_description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    discount?: string;
    has_variant?: boolean;
    rating_count?: number;
    description?: string;
    sellable?: boolean;
    name?: string;
    image_nature?: string;
    slug: string;
    item_type?: string;
    price?: ProductListingPrice;
};
type GetCollectionItemsResponse = {
    page?: Page;
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
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
type CatalogInsightBrand = {
    total_sizes?: number;
    name?: string;
    available_sizes?: number;
    article_freshness?: number;
    available_articles?: number;
    total_articles?: number;
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
type CrossSellingData = {
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    company_id?: number;
    enabled?: boolean;
    store_ids?: number[];
    brand_ids?: number[];
    opt_level: string;
    platform?: string;
};
type CompanyOptIn = {
    company_id: number;
    modified_on: number;
    enabled: boolean;
    store_ids: number[];
    brand_ids: number[];
    opt_level: string;
    modified_by?: any;
    platform: string;
    created_on: number;
    created_by?: any;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    uid?: number;
    business_type?: string;
    company_type?: string;
    name?: string;
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
    store?: number;
    company?: string;
    brand?: number;
};
type StoreDetail = {
    uid?: number;
    documents?: any[];
    modified_on?: string;
    store_type?: string;
    name?: string;
    company_id?: number;
    address?: any;
    timing?: any;
    manager?: any;
    store_code?: string;
    display_name?: string;
    created_on?: string;
    additional_contacts?: any[];
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
    range?: AttributeSchemaRange;
    type: string;
    mandatory?: boolean;
    multi?: boolean;
    format?: string;
    allowed_values?: string[];
};
type AttributeMasterFilter = {
    indexing: boolean;
    depends_on?: string[];
    priority?: number;
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
type GenderDetail = {
    name?: string;
    departments?: string[];
    schema?: AttributeMaster;
    enabled_for_end_consumer?: boolean;
    filters?: AttributeMasterFilter;
    id?: string;
    slug?: string;
    meta?: AttributeMasterMeta;
    details?: AttributeMasterDetails;
    is_nested?: boolean;
    logo?: string;
    description?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    code?: string;
    meta?: any;
    message?: string;
    errors?: any;
    status?: number;
};
type UserSerializer = {
    uid?: string;
    user_id?: string;
    contact?: string;
    _id?: string;
    username?: string;
};
type GetDepartment = {
    uid?: number;
    modified_on?: string;
    created_on?: string;
    name?: string;
    page_size?: number;
    page_no?: number;
    created_by?: UserSerializer;
    slug?: string;
    search?: string;
    priority_order?: number;
    modified_by?: UserSerializer;
    item_type?: string;
    logo?: string;
    synonyms?: string[];
    is_active?: boolean;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    code?: string;
    meta?: any;
    message?: string;
    errors?: any;
    status?: number;
};
type DepartmentCreateUpdate = {
    uid?: number;
    _cls?: string;
    name: string;
    tags?: string[];
    platforms?: any;
    slug?: string;
    _custom_json?: any;
    priority_order: number;
    logo: string;
    synonyms?: string[];
    is_active?: boolean;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
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
    verified_on?: string;
    uid?: number;
    modified_on: string;
    logo: string;
    name: any;
    _cls?: any;
    slug?: any;
    is_active?: boolean;
    verified_by?: UserDetail;
    _custom_json?: any;
    priority_order: number;
    _id?: any;
    modified_by?: UserDetail;
    created_on: string;
    synonyms?: any[];
    created_by?: UserDetail;
};
type ProductTemplate = {
    attributes?: string[];
    tag?: string;
    name?: string;
    departments?: string[];
    is_physical: boolean;
    created_by?: any;
    created_on?: string;
    modified_on?: string;
    is_expirable: boolean;
    categories?: string[];
    slug: string;
    is_active?: boolean;
    modified_by?: any;
    logo?: string;
    is_archived?: boolean;
    description?: string;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    brand_uid?: any;
    item_code?: any;
    media?: any;
    tags?: any;
    product_group_tag?: any;
    return_config?: any;
    no_of_boxes?: any;
    multi_size?: any;
    variants?: any;
    highlights?: any;
    teaser_tag?: any;
    size_guide?: any;
    trader_type?: any;
    hsn_code?: any;
    short_description?: any;
    currency?: any;
    product_publish?: any;
    category_slug?: any;
    is_dependent?: any;
    description?: any;
    country_of_origin?: any;
    is_active?: any;
    sizes?: any;
    trader?: any;
    name?: any;
    slug?: any;
    command?: any;
    custom_order?: any;
    item_type?: any;
};
type GlobalValidation = {
    required?: string[];
    definitions?: any;
    type?: string;
    title?: string;
    properties?: Properties;
    description?: string;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    attributes?: string[];
    tag?: string;
    name?: string;
    departments?: string[];
    is_physical: boolean;
    is_expirable: boolean;
    categories?: string[];
    id?: string;
    slug: string;
    is_active?: boolean;
    logo?: string;
    is_archived?: boolean;
    description?: string;
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
type ProductDownloadItemsData = {
    templates?: string[];
    type?: string;
    brand?: string[];
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadsItems = {
    data?: ProductDownloadItemsData;
    seller_id?: number;
    url?: string;
    id?: string;
    completed_on?: string;
    task_id?: string;
    trigger_on?: string;
    template_tags?: any;
    created_by?: VerifiedBy;
    status?: string;
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
    landscape: string;
    logo: string;
    portrait: string;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
};
type Category = {
    uid?: number;
    modified_on?: string;
    name: string;
    departments: number[];
    priority?: number;
    media?: Media2;
    tryouts?: string[];
    created_by?: any;
    id?: string;
    slug?: string;
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    modified_by?: any;
    hierarchy?: Hierarchy[];
    created_on?: string;
    level: number;
    is_active: boolean;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    name: string;
    departments: number[];
    priority?: number;
    media?: Media2;
    tryouts?: string[];
    slug?: string;
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    level: number;
    is_active: boolean;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type ReturnConfigResponse = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Image = {
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Logo = {
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Product = {
    is_image_less_product?: boolean;
    attributes?: any;
    brand_uid?: number;
    departments?: number[];
    item_code?: string;
    all_sizes?: any[];
    media?: Media1[];
    tags?: string[];
    color?: string;
    l3_mapping?: string[];
    return_config?: ReturnConfigResponse;
    product_group_tag?: string[];
    moq?: any;
    all_identifiers?: string[];
    primary_color?: string;
    multi_size?: boolean;
    no_of_boxes?: number;
    images?: Image[];
    variants?: any;
    net_quantity?: NetQuantityResponse;
    created_by?: any;
    highlights?: string[];
    uid?: number;
    verified_on?: string;
    modified_on?: string;
    is_physical?: boolean;
    tax_identifier?: any;
    teaser_tag?: any;
    size_guide?: string;
    brand?: Brand;
    category_uid?: number;
    _custom_json?: any;
    all_company_ids?: number[];
    hsn_code?: string;
    short_description?: string;
    pending?: string;
    company_id?: number;
    currency?: string;
    product_publish?: ProductPublished;
    modified_by?: any;
    category_slug?: string;
    created_on?: string;
    is_dependent?: boolean;
    description?: string;
    country_of_origin?: string;
    sizes?: any[];
    is_active?: boolean;
    trader?: any[];
    is_set?: boolean;
    name?: string;
    image_nature?: string;
    template_tag?: string;
    is_expirable?: boolean;
    category?: any;
    variant_group?: any;
    id?: string;
    slug?: string;
    verified_by?: VerifiedBy;
    custom_order?: any;
    variant_media?: any;
    item_type?: string;
    stage?: string;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    reporting_hsn?: string;
    hsn_code?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type Trader = {
    address?: string[];
    name: any;
    type?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type ProductCreateUpdateSchemaV2 = {
    is_image_less_product?: boolean;
    attributes: any;
    brand_uid: number;
    departments: number[];
    item_code: string;
    media?: Media1[];
    tags?: string[];
    product_group_tag?: string[];
    return_config: ReturnConfig;
    no_of_boxes?: number;
    multi_size?: boolean;
    variants?: any;
    net_quantity?: NetQuantity;
    requester?: string;
    highlights?: string[];
    uid?: number;
    action?: string;
    tax_identifier: TaxIdentifier;
    teaser_tag?: TeaserTag;
    size_guide?: string;
    _custom_json?: any;
    short_description?: string;
    company_id: number;
    currency: string;
    product_publish?: ProductPublish;
    category_slug: string;
    is_dependent?: boolean;
    description?: string;
    country_of_origin: string;
    is_active?: boolean;
    bulk_job_id?: string;
    trader: Trader[];
    is_set?: boolean;
    name: string;
    sizes: any[];
    template_tag: string;
    variant_group?: any;
    change_request_id?: any;
    slug: string;
    variant_media?: any;
    custom_order?: CustomOrder;
    item_type: string;
};
type ProductVariants = {
    uid?: number;
    name?: string;
    brand_uid?: number;
    media?: Media1[];
    item_code?: string;
    category_uid?: number;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    raw_key?: string;
    departments: string[];
    tags?: string[];
    suggestion?: string;
    created_by?: any;
    modified_on?: string;
    enabled_for_end_consumer?: boolean;
    synonyms?: any;
    variant?: boolean;
    filters: AttributeMasterFilter;
    unit?: string;
    details: AttributeMasterDetails;
    modified_by?: any;
    is_nested?: boolean;
    created_on?: string;
    description?: string;
    name?: string;
    schema: AttributeMaster;
    slug: string;
    logo?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    primary?: boolean;
    gtin_value: string;
    gtin_type: string;
};
type AllSizes = {
    item_width: number;
    item_weight: number;
    item_length: number;
    identifiers?: ValidateIdentifier[];
    item_height: number;
    item_weight_unit_of_measure: any;
    item_dimensions_unit_of_measure: string;
    size: any;
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
    company_id?: number;
    modified_on?: string;
    cancelled_records?: string[];
    created_by?: UserDetail1;
    template?: ProductTemplate;
    template_tag?: string;
    stage?: string;
    succeed?: number;
    modified_by?: UserDetail1;
    file_path?: string;
    cancelled?: number;
    failed?: number;
    failed_records?: string[];
    total?: number;
    created_on?: string;
    is_active?: boolean;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    uid?: string;
    username?: string;
    user_id?: string;
    email?: string;
};
type BulkJob = {
    modified_on?: string;
    company_id: number;
    custom_template_tag?: string;
    cancelled_records?: any[];
    created_by?: UserInfo1;
    tracking_url?: string;
    template_tag?: string;
    stage?: string;
    succeed?: number;
    file_path?: string;
    failed_records?: any[];
    modified_by?: UserInfo1;
    failed?: number;
    cancelled?: number;
    total?: number;
    created_on: string;
    is_active?: boolean;
};
type BulkResponse = {
    batch_id: string;
    modified_on?: string;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
    created_on: string;
    is_active?: boolean;
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
type UserCommon = {
    username?: string;
    user_id?: string;
    company_id?: number;
};
type Items = {
    retry?: number;
    modified_on?: string;
    company_id?: number;
    cancelled_records?: string[];
    tracking_url?: string;
    cancelled?: number;
    stage?: string;
    is_active?: boolean;
    succeed?: number;
    id?: string;
    file_path?: string;
    modified_by?: UserCommon;
    failed?: number;
    failed_records?: string[];
    total?: number;
    created_on?: string;
    created_by?: UserCommon;
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
    size?: string;
    company_id?: number;
    item_id?: number;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    uid?: string;
    identifiers?: any;
    quantity?: number;
    seller_identifier?: string;
    currency?: string;
    inventory_updated_on?: string;
    price_transfer?: number;
    sellable_quantity?: number;
    item_id?: number;
    size?: string;
    price_effective?: number;
    price?: number;
    store?: any;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type GTIN = {
    primary?: boolean;
    gtin_value: any;
    gtin_type: string;
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
    size_distribution: SizeDistribution;
    quantity?: number;
};
type InvSize = {
    is_set?: boolean;
    item_width?: number;
    item_weight?: number;
    item_height?: number;
    item_length?: number;
    item_weight_unit_of_measure?: string;
    identifiers: GTIN[];
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    set?: InventorySet;
    quantity: number;
    currency: string;
    price_transfer?: number;
    store_code: string;
    size: any;
    price_effective: number;
    price?: number;
};
type ItemQuery = {
    uid?: number;
    brand_uid?: number;
    item_code?: string;
};
type InventoryRequest = {
    sizes: InvSize[];
    company_id: number;
    item: ItemQuery;
};
type ReturnConfig1 = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type BrandMeta = {
    id: number;
    name: string;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type DimensionResponse = {
    length: number;
    is_default: boolean;
    unit: string;
    height: number;
    width: number;
};
type CompanyMeta = {
    id: number;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type PriceMeta = {
    currency: string;
    marked: number;
    transfer: number;
    updated_at?: string;
    tp_notes?: any;
    effective: number;
};
type InventorySellerResponse = {
    tags?: string[];
    expiration_date?: string;
    added_on_store?: string;
    return_config?: ReturnConfig1;
    seller_identifier: string;
    weight: WeightResponse;
    trace_id?: string;
    created_by?: UserSerializer;
    uid: string;
    tax_identifier?: any;
    brand: BrandMeta;
    _custom_json?: any;
    size: string;
    quantities?: Quantities;
    manufacturer: ManufacturerResponse;
    dimension: DimensionResponse;
    fynd_meta?: any;
    raw_meta?: any;
    item_id: number;
    modified_by?: UserSerializer;
    track_inventory?: boolean;
    fynd_article_code: string;
    company: CompanyMeta;
    is_active?: boolean;
    country_of_origin: string;
    trader?: Trader1[];
    is_set?: boolean;
    fynd_item_code: string;
    identifier: any;
    total_quantity: number;
    set?: InventorySet;
    fragile: boolean;
    meta?: any;
    price: PriceMeta;
    stage?: string;
    store: StoreMeta;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type ReturnConfig2 = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    not_available?: Quantity;
    damaged?: Quantity;
    order_committed?: Quantity;
    sellable?: Quantity;
};
type ManufacturerResponse1 = {
    address?: string;
    name?: string;
    is_default?: boolean;
};
type DimensionResponse1 = {
    height?: number;
    unit?: string;
    length?: number;
    width?: number;
};
type CompanyMeta1 = {
    id?: number;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type PriceArticle = {
    currency?: string;
    marked?: number;
    transfer?: number;
    tp_notes?: any;
    effective?: number;
};
type ArticleStoreResponse = {
    uid?: number;
    store_type?: string;
    name?: string;
    store_code?: string;
};
type GetInventories = {
    date_meta?: DateMeta;
    tags?: string[];
    expiration_date?: string;
    return_config?: ReturnConfig2;
    platforms?: any;
    inventory_updated_on?: string;
    seller_identifier?: string;
    weight?: WeightResponse1;
    trace_id?: string;
    created_by?: UserSerializer;
    uid?: string;
    tax_identifier?: any;
    brand?: BrandMeta1;
    size?: string;
    quantities?: QuantitiesArticle;
    manufacturer?: ManufacturerResponse1;
    dimension?: DimensionResponse1;
    item_id?: number;
    modified_by?: UserSerializer;
    track_inventory?: boolean;
    company?: CompanyMeta1;
    country_of_origin?: string;
    trader?: Trader2[];
    is_set?: boolean;
    identifier?: any;
    total_quantity?: number;
    id?: string;
    price?: PriceArticle;
    stage?: string;
    store?: ArticleStoreResponse;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    company_id?: number;
    modified_on?: string;
    cancelled_records?: string[];
    id?: string;
    is_active?: boolean;
    stage?: string;
    modified_by?: any;
    succeed?: number;
    file_path?: string;
    cancelled?: number;
    failed?: number;
    failed_records?: string[];
    total?: number;
    created_on?: string;
    created_by?: any;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    tags?: string[];
    item_weight_unit_of_measure?: string;
    total_quantity?: number;
    quantity?: number;
    expiration_date?: string;
    currency?: string;
    item_dimensions_unit_of_measure?: string;
    price_marked?: number;
    store_code: string;
    seller_identifier: string;
    trace_id?: string;
    price_effective?: number;
    price?: number;
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    batch_id: string;
    company_id: number;
    user?: any;
};
type InventoryExportJob = {
    seller_id: number;
    request_params?: any;
    url?: string;
    completed_on?: string;
    task_id: string;
    trigger_on?: string;
    status?: string;
};
type InventoryExportRequest = {
    store?: number[];
    type?: string;
    brand?: number[];
};
type InventoryExportResponse = {
    seller_id: number;
    request_params?: any;
    task_id: string;
    trigger_on?: string;
    status?: string;
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
    tags?: string[];
    total_quantity?: number;
    expiration_date?: string;
    store_id: number;
    price_marked?: number;
    seller_identifier: string;
    trace_id?: string;
    price_effective?: number;
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
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type PageResponse = {
    has_previous?: boolean;
    current?: string;
    size?: number;
    has_next?: boolean;
    item_total?: number;
};
type HsnCodesObject = {
    company_id?: number;
    tax1?: number;
    modified_on?: string;
    threshold1?: number;
    tax_on_mrp?: boolean;
    threshold2?: number;
    id?: string;
    hsn_code?: string;
    tax_on_esp?: boolean;
    hs2_code?: string;
    tax2?: number;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    uid?: number;
    company_id: number;
    tax1: number;
    threshold1: number;
    tax_on_mrp: boolean;
    threshold2?: number;
    hsn_code: string;
    tax_on_esp?: boolean;
    hs2_code: string;
    is_active?: boolean;
    tax2?: number;
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
    threshold: number;
    effective_date: string;
    rate: number;
};
type HSNDataInsertV2 = {
    modified_on?: string;
    created_by?: any;
    type: string;
    country_code: string;
    hsn_code: string;
    taxes: TaxSlab[];
    modified_by?: any;
    created_on?: string;
    reporting_hsn: string;
    description: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type ArticleQuery = {
    size: string;
    ignored_stores?: number[];
    item_id: number;
};
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type AssignStoreArticle = {
    group_id?: string;
    query?: ArticleQuery;
    article_assignment?: ArticleAssignment;
    meta?: any;
    quantity?: number;
};
type AssignStore = {
    company_id?: number;
    pincode: string;
    articles: AssignStoreArticle[];
    store_ids?: number[];
    channel_identifier?: string;
    app_id: string;
    channel_type?: string;
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    uid?: string;
    company_id?: number;
    strategy_wise_listing?: any[];
    group_id?: string;
    store_pincode?: number;
    article_assignment: ArticleAssignment1;
    store_id?: number;
    meta?: any;
    _id?: string;
    item_id: number;
    size: string;
    price_marked?: number;
    index?: number;
    price_effective?: number;
    quantity: number;
    s_city?: string;
    status: boolean;
};
type BrandItem = {
    uid?: number;
    action?: Action;
    name?: string;
    departments?: string[];
    discount?: string;
    slug?: string;
    logo?: Media;
    banners?: ImageUrls;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    uid?: number;
    name?: string;
    slug?: string;
    priority_order?: number;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    uid?: number;
    action?: Action;
    name?: string;
    childs?: any[];
    slug?: string;
    _custom_json?: any;
    banners?: ImageUrls;
};
type SecondLevelChild = {
    uid?: number;
    action?: Action;
    name?: string;
    childs?: ThirdLevelChild[];
    slug?: string;
    _custom_json?: any;
    banners?: ImageUrls;
};
type Child = {
    uid?: number;
    action?: Action;
    name?: string;
    childs?: SecondLevelChild[];
    slug?: string;
    _custom_json?: any;
    banners?: ImageUrls;
};
type CategoryItems = {
    uid?: number;
    action?: Action;
    name?: string;
    childs?: Child[];
    slug?: string;
    banners?: ImageUrls;
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
    filters?: ProductFilters[];
    operators?: any;
    page: Page;
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
};
type ProductDetail = {
    attributes?: any;
    similars?: string[];
    item_code?: string;
    tryouts?: string[];
    color?: string;
    type?: string;
    product_online_date?: string;
    promo_meta?: any;
    rating?: number;
    medias?: Media1[];
    highlights?: string[];
    uid?: number;
    teaser_tag?: any;
    brand?: ProductBrand;
    short_description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    has_variant?: boolean;
    rating_count?: number;
    description?: string;
    name?: string;
    image_nature?: string;
    slug: string;
    item_type?: string;
};
type InventoryPage = {
    next_id?: string;
    has_previous?: boolean;
    type: string;
    has_next?: boolean;
    item_total: number;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type UserSerializer1 = {
    username?: string;
    user_id?: string;
    contact?: string;
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
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    closing?: LocationTimingSerializer;
    weekday: string;
    opening?: LocationTimingSerializer;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type GetAddressSerializer = {
    pincode?: number;
    latitude?: number;
    address_type?: string;
    state?: string;
    longitude?: number;
    country?: string;
    address2?: string;
    country_code?: string;
    landmark?: string;
    address1?: string;
    city?: string;
};
type UserSerializer2 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetCompanySerializer = {
    uid?: number;
    verified_on?: string;
    modified_on?: string;
    name?: string;
    company_type?: string;
    reject_reason?: string;
    business_type?: string;
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer2;
    modified_by?: UserSerializer2;
    stage?: string;
    created_on?: string;
    created_by?: UserSerializer2;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetLocationSerializer = {
    integration_type?: LocationIntegrationType;
    warnings?: any;
    phone_number: string;
    created_by?: UserSerializer1;
    uid?: number;
    verified_on?: string;
    modified_on?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    _custom_json?: any;
    contact_numbers?: SellerPhoneNumber[];
    code: string;
    timing?: LocationDayWiseSerializer[];
    manager?: LocationManagerSerializer;
    modified_by?: UserSerializer1;
    company?: GetCompanySerializer;
    created_on?: string;
    documents?: Document[];
    store_type?: string;
    name: string;
    address: GetAddressSerializer;
    verified_by?: UserSerializer1;
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigSerializer;
    display_name: string;
    stage?: string;
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
    uid: number;
    name?: string;
    _custom_json?: any;
    app_id: string;
    logo?: string;
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
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type CompanyTaxesSerializer = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type GetCompanyProfileSerializerResponse = {
    mode?: string;
    modified_by?: UserSerializer;
    warnings?: any;
    name?: string;
    addresses?: GetAddressSerializer[];
    notification_emails?: string[];
    business_details?: BusinessDetails;
    documents?: Document[];
    created_on?: string;
    _custom_json?: any;
    uid: number;
    business_info?: string;
    created_by?: UserSerializer;
    franchise_enabled?: boolean;
    verified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    company_type: string;
    modified_on?: string;
    verified_on?: string;
    contact_details?: ContactDetails;
    stage?: string;
    taxes?: CompanyTaxesSerializer[];
};
type CreateUpdateAddressSerializer = {
    latitude: number;
    address2?: string;
    longitude: number;
    country_code?: string;
    landmark?: string;
    state: string;
    city: string;
    address_type: string;
    country: string;
    pincode: number;
    address1: string;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type UpdateCompany = {
    business_type?: string;
    addresses?: CreateUpdateAddressSerializer[];
    notification_emails?: string[];
    company_type?: string;
    business_details?: BusinessDetails;
    taxes?: CompanyTaxesSerializer1[];
    documents?: Document[];
    franchise_enabled?: boolean;
    contact_details?: ContactDetails;
    warnings?: any;
    reject_reason?: string;
    business_info?: string;
    name?: string;
    _custom_json?: any;
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
    store?: DocumentsObj;
    store_documents?: DocumentsObj;
    uid?: number;
    stage?: string;
    company_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    logo?: string;
    mode?: string;
    modified_by?: UserSerializer;
    warnings?: any;
    reject_reason?: string;
    _locale_language?: any;
    name: string;
    slug_key?: string;
    created_on?: string;
    uid?: number;
    description?: string;
    created_by?: UserSerializer;
    banner?: BrandBannerSerializer;
    verified_by?: UserSerializer;
    modified_on?: string;
    verified_on?: string;
    stage?: string;
    _custom_json?: any;
    synonyms?: string[];
};
type CreateUpdateBrandRequestSerializer = {
    _locale_language?: any;
    company_id?: number;
    logo: string;
    brand_tier?: string;
    banner?: BrandBannerSerializer;
    uid?: number;
    name: string;
    description?: string;
    _custom_json?: any;
    synonyms?: string[];
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanySerializer = {
    business_type: string;
    addresses?: GetAddressSerializer[];
    notification_emails?: string[];
    company_type: string;
    modified_on?: string;
    verified_on?: string;
    details?: CompanyDetails;
    market_channels?: string[];
    created_on?: string;
    modified_by?: UserSerializer;
    verified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    uid?: number;
    reject_reason?: string;
    stage?: string;
    name?: string;
    _custom_json?: any;
    created_by?: UserSerializer;
};
type CompanyBrandSerializer = {
    brand?: GetBrandResponseSerializer;
    modified_on?: string;
    verified_on?: string;
    company?: CompanySerializer;
    created_on?: string;
    modified_by?: UserSerializer;
    verified_by?: UserSerializer;
    warnings?: any;
    uid?: number;
    stage?: string;
    reject_reason?: string;
    created_by?: UserSerializer;
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
    start_date: string;
    end_date: string;
};
type HolidaySchemaSerializer = {
    title: string;
    holiday_type: string;
    date: HolidayDateSerializer;
};
type AddressSerializer = {
    latitude: number;
    address2?: string;
    longitude: number;
    country_code?: string;
    landmark?: string;
    state?: string;
    city?: string;
    address_type?: string;
    country?: string;
    pincode?: number;
    address1?: string;
};
type LocationSerializer = {
    display_name: string;
    notification_emails?: string[];
    holiday?: HolidaySchemaSerializer[];
    company: number;
    code: string;
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    _custom_json?: any;
    address: AddressSerializer;
    timing?: LocationDayWiseSerializer[];
    warnings?: any;
    manager?: LocationManagerSerializer;
    uid?: number;
    stage?: string;
    name: string;
    store_type?: string;
    contact_numbers?: SellerPhoneNumber[];
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type FailedResponse = {
    message: string;
};
type CDN = {
    url: string;
    absolute_url?: string;
    relative_url?: string;
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
    gstores?: GStore[];
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
    integration: string;
    integration_data?: any;
    company_name?: string;
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
    integration: string;
    company_name: string;
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
    mapping?: any;
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
type CouponSchedule = {
    duration?: number;
    start?: string;
    cron?: string;
    end?: string;
    next_schedule?: any[];
};
type Rule = {
    value?: number;
    min?: number;
    max?: number;
    discount_qty?: number;
    key?: number;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type UsesRemaining = {
    app?: number;
    total?: number;
    user?: number;
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
    uses?: PaymentAllowValue;
    types?: string[];
    networks?: string[];
    codes?: string[];
};
type Restrictions = {
    uses?: UsesRestriction;
    post_order?: PostOrder;
    price_range?: PriceRange;
    ordering_stores?: number[];
    user_groups?: number[];
    platforms?: string[];
    user_type?: string;
    bulk_bundle?: BulkBundleRestriction;
    coupon_allowed?: boolean;
    payments?: any;
};
type State = {
    is_archived?: boolean;
    is_display?: boolean;
    is_public?: boolean;
};
type Validation = {
    app_id?: string[];
    user_registered_after?: string;
    anonymous?: boolean;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type RuleDefinition = {
    applicable_on: string;
    scope?: string[];
    currency_code?: string;
    calculate_on: string;
    value_type: string;
    type: string;
    auto_apply?: boolean;
    is_exact?: boolean;
};
type Validity = {
    priority?: number;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    title?: string;
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    subtitle?: string;
    auto?: DisplayMetaDict;
    description?: string;
};
type CouponAdd = {
    _schedule?: CouponSchedule;
    code: string;
    rule: Rule[];
    date_meta?: CouponDateMeta;
    restrictions?: Restrictions;
    state?: State;
    validation?: Validation;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    validity: Validity;
    tags?: string[];
    ownership: Ownership;
    author?: CouponAuthor;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    type_slug: string;
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
    _schedule?: CouponSchedule;
    code: string;
    rule: Rule[];
    date_meta?: CouponDateMeta;
    restrictions?: Restrictions;
    state?: State;
    validation?: Validation;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    validity: Validity;
    tags?: string[];
    ownership: Ownership;
    author?: CouponAuthor;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    type_slug: string;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type DisplayMeta1 = {
    offer_text?: string;
    name?: string;
    description?: string;
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
    end?: string;
    start?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    uses?: PaymentAllowValue1;
    type: string;
    codes?: string[];
};
type Restrictions1 = {
    uses: UsesRestriction1;
    post_order?: PostOrder1;
    user_registered?: UserRegistered;
    order_quantity?: number;
    user_groups?: number[];
    platforms?: string[];
    user_id?: string[];
    payments?: PromotionPaymentModes[];
    anonymous_users?: boolean;
};
type DiscountOffer = {
    max_offer_quantity?: number;
    code?: string;
    min_offer_quantity?: number;
    partial_can_ret?: boolean;
    max_discount_amount?: number;
    discount_price?: number;
    apportion_discount?: boolean;
    discount_amount?: number;
    max_usage_per_transaction?: number;
    discount_percentage?: number;
};
type CompareObject = {
    less_than_equals?: number;
    equals?: number;
    greater_than?: number;
    less_than?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    item_exclude_sku?: string[];
    item_category?: number[];
    item_id?: number[];
    item_exclude_brand?: number[];
    item_brand?: number[];
    item_sku?: string[];
    cart_quantity?: CompareObject;
    item_exclude_store?: number[];
    item_exclude_category?: number[];
    item_size?: string[];
    item_store?: number[];
    all_items?: boolean;
    cart_total?: CompareObject;
    available_zones?: string[];
    buy_rules?: string[];
    item_exclude_company?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_id?: number[];
    item_company?: number[];
    cart_unique_item_amount?: CompareObject;
};
type DiscountRule = {
    buy_condition: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
    discount_type: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionSchedule = {
    published: boolean;
    duration?: number;
    start: string;
    cron?: string;
    end?: string;
    next_schedule?: any[];
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionListItem = {
    application_id: string;
    date_meta?: PromotionDateMeta;
    calculate_on?: string;
    promotion_type: string;
    visiblility?: Visibility;
    apply_exclusive?: string;
    display_meta: DisplayMeta1;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    promo_group: string;
    post_order_action?: PromotionAction;
    currency?: string;
    author?: PromotionAuthor;
    apply_priority?: number;
    _custom_json?: any;
    code?: string;
    apply_all_discount?: boolean;
    buy_rules: any;
    _schedule?: PromotionSchedule;
    stackable?: boolean;
    mode: string;
    ownership: Ownership1;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    application_id: string;
    date_meta?: PromotionDateMeta;
    calculate_on?: string;
    promotion_type: string;
    visiblility?: Visibility;
    apply_exclusive?: string;
    display_meta: DisplayMeta1;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    promo_group: string;
    post_order_action?: PromotionAction;
    currency?: string;
    author?: PromotionAuthor;
    apply_priority?: number;
    _custom_json?: any;
    code?: string;
    apply_all_discount?: boolean;
    buy_rules: any;
    _schedule?: PromotionSchedule;
    stackable?: boolean;
    mode: string;
    ownership: Ownership1;
};
type PromotionUpdate = {
    application_id: string;
    date_meta?: PromotionDateMeta;
    calculate_on?: string;
    promotion_type: string;
    visiblility?: Visibility;
    apply_exclusive?: string;
    display_meta: DisplayMeta1;
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    promo_group: string;
    post_order_action?: PromotionAction;
    currency?: string;
    author?: PromotionAuthor;
    apply_priority?: number;
    _custom_json?: any;
    code?: string;
    apply_all_discount?: boolean;
    buy_rules: any;
    _schedule?: PromotionSchedule;
    stackable?: boolean;
    mode: string;
    ownership: Ownership1;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    entity_slug?: string;
    title?: string;
    example?: string;
    is_hidden?: boolean;
    created_on?: string;
    modified_on?: string;
    subtitle?: string;
    type?: string;
    description?: string;
    entity_type?: string;
};
type CartItem = {
    size: string;
    quantity?: number;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type LoyaltyPoints = {
    description?: string;
    applicable?: number;
    is_applied?: boolean;
    total?: number;
};
type DisplayBreakup = {
    value?: number;
    currency_symbol?: string;
    currency_code?: string;
    display?: string;
    key?: string;
    message?: string[];
};
type CouponBreakup = {
    sub_title?: string;
    value?: number;
    title?: string;
    code?: string;
    is_applied?: boolean;
    minimum_cart_value?: number;
    coupon_value?: number;
    coupon_type?: string;
    uid?: string;
    type?: string;
    message?: string;
    description?: string;
    max_discount_value?: number;
};
type RawBreakup = {
    you_saved?: number;
    mrp_total?: number;
    gift_card?: number;
    subtotal?: number;
    fynd_cash?: number;
    cod_charge?: number;
    discount?: number;
    coupon?: number;
    total?: number;
    convenience_fee?: number;
    vog?: number;
    delivery_charge?: number;
    gst_charges?: number;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
    raw?: RawBreakup;
};
type BasePrice = {
    currency_symbol?: string;
    effective?: number;
    marked?: number;
    currency_code?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type ProductArticle = {
    seller_identifier?: string;
    gift_card?: any;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
    extra_meta?: any;
    uid?: string;
    is_gift_visible?: boolean;
    store?: BaseInfo;
    cart_item_meta?: any;
    type?: string;
    size?: string;
    seller?: BaseInfo;
    parent_item_identifiers?: any;
    identifier?: any;
    quantity?: number;
};
type PromoMeta = {
    message?: string;
};
type ProductPrice = {
    effective?: number;
    selling?: number;
    currency_symbol?: string;
    currency_code?: string;
    add_on?: number;
    marked?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    offer?: any;
    item_criteria?: any;
    raw_offer?: any;
};
type FreeGiftItem = {
    item_images_url?: string[];
    item_name?: string;
    item_price_details?: any;
    item_brand_name?: string;
    item_id?: number;
    item_slug?: string;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    quantity?: number;
};
type AppliedPromotion = {
    article_quantity?: number;
    promo_id?: string;
    discount_rules?: DiscountRulesApp[];
    offer_text?: string;
    promotion_group?: string;
    promotion_name?: string;
    promotion_type?: string;
    buy_rules?: BuyRules[];
    applied_free_articles?: AppliedFreeArticles[];
    amount?: number;
    mrp_promotion?: boolean;
};
type ProductAvailability = {
    other_store_quantity?: number;
    is_valid?: boolean;
    sizes?: string[];
    deliverable?: boolean;
    out_of_stock?: boolean;
};
type CouponDetails = {
    discount_single_quantity?: number;
    discount_total_quantity?: number;
    code?: string;
};
type ProductImage = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type Tags = {
    tags?: any;
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
    name?: string;
    images?: ProductImage[];
    categories?: CategoryInfo[];
    item_code?: string;
    _custom_json?: any;
    uid?: number;
    teaser_tag?: Tags;
    tags?: string[];
    slug?: string;
    type?: string;
    brand?: BaseInfo;
    action?: ProductAction;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    article?: ProductArticle;
    coupon_message?: string;
    promo_meta?: PromoMeta;
    price?: ProductPriceInfo;
    message?: string;
    promotions_applied?: AppliedPromotion[];
    availability?: ProductAvailability;
    discount?: string;
    bulk_offer?: any;
    coupon?: CouponDetails;
    key?: string;
    product?: CartProduct;
    quantity?: number;
    parent_item_identifiers?: any;
    price_per_unit?: ProductPriceInfo;
    is_set?: boolean;
    identifiers: CartProductIdentifer;
};
type OpenapiCartDetailsResponse = {
    message?: string;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    name?: string;
    address?: string;
    area?: string;
    state?: string;
    meta?: any;
    area_code: string;
    phone?: number;
    country?: string;
    area_code_slug?: string;
    city?: string;
    country_code?: string;
    address_type?: string;
    email?: string;
    pincode?: number;
    landmark?: string;
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
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    message?: string;
    items?: CartProductInfo[];
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiOrderItem = {
    payment_methods: MultiTenderPaymentMethod[];
    cashback_applied: number;
    coupon_effective_discount: number;
    price_effective: number;
    price_marked: number;
    files?: OpenApiFiles[];
    meta?: CartItemMeta;
    extra_meta?: any;
    product_id: number;
    size: string;
    cod_charges: number;
    discount: number;
    delivery_charges: number;
    loyalty_discount?: number;
    employee_discount?: number;
    quantity?: number;
    amount_paid: number;
};
type OpenApiPlatformCheckoutReq = {
    cart_items: OpenApiOrderItem[];
    coupon_value: number;
    cart_value: number;
    billing_address: ShippingAddress;
    order_id?: string;
    shipping_address?: ShippingAddress;
    affiliate_order_id?: string;
    loyalty_discount?: number;
    comment?: string;
    employee_discount?: any;
    payment_methods: MultiTenderPaymentMethod[];
    files?: OpenApiFiles[];
    gstin?: string;
    currency_code?: string;
    cod_charges: number;
    payment_mode?: string;
    delivery_charges: number;
    coupon?: string;
    cashback_applied: number;
    coupon_code: string;
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    message?: string;
    order_ref_id?: string;
    order_id: string;
};
type AbandonedCart = {
    expire_at: string;
    promotion?: any;
    fynd_credits?: any;
    pick_up_customer_details?: any;
    order_id?: string;
    is_archive?: boolean;
    payment_methods?: any[];
    cashback: any;
    payment_mode?: string;
    fc_index_map?: number[];
    payments?: any;
    last_modified: string;
    cart_value?: number;
    uid: number;
    buy_now?: boolean;
    discount?: number;
    app_id?: string;
    _id: string;
    comment?: string;
    is_default: boolean;
    checkout_mode?: string;
    is_active?: boolean;
    gstin?: string;
    bulk_coupon_discount?: number;
    created_on: string;
    meta?: any;
    cod_charges?: any;
    articles: any[];
    shipments?: any[];
    delivery_charges?: any;
    coupon?: any;
    user_id: string;
    merge_qty?: boolean;
};
type AbandonedCartResponse = {
    page?: Page;
    result?: any;
    success?: boolean;
    message?: string;
    items?: AbandonedCart[];
};
type AddProductCart = {
    store_id?: number;
    pos?: boolean;
    article_id?: string;
    product_group_tags?: string[];
    extra_meta?: any;
    item_id?: number;
    item_size?: string;
    display?: string;
    parent_item_identifiers?: any;
    seller_id?: number;
    article_assignment?: any;
    quantity?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
    new_cart?: boolean;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    pan_no?: string;
    gstin?: string;
    delivery_charge_info?: string;
    is_valid?: boolean;
    last_modified?: string;
    buy_now?: boolean;
    id?: string;
    restrict_checkout?: boolean;
    comment?: string;
    payment_selection_lock?: PaymentSelectionLock;
    currency?: CartCurrency;
    pan_config?: any;
    message?: string;
    items?: CartProductInfo[];
    coupon_text?: string;
    checkout_mode?: string;
};
type AddCartDetailResponse = {
    success?: boolean;
    message?: string;
    partial?: boolean;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    article_id?: string;
    extra_meta?: any;
    item_id?: number;
    item_size?: string;
    identifiers: CartProductIdentifer;
    parent_item_identifiers?: any;
    quantity?: number;
    item_index?: number;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    success?: boolean;
    message?: string;
    cart?: CartDetailResponse;
};
type GetShareCartLinkRequest = {
    id?: string;
    meta?: any;
};
type GetShareCartLinkResponse = {
    token?: string;
    share_url?: string;
};
type SharedCartDetails = {
    source?: any;
    created_on?: string;
    meta?: any;
    token?: string;
    user?: any;
};
type SharedCart = {
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    delivery_charge_info?: string;
    shared_cart_details?: SharedCartDetails;
    currency?: CartCurrency;
    items?: CartProductInfo[];
    last_modified?: string;
    uid?: string;
    buy_now?: boolean;
    id?: string;
    restrict_checkout?: boolean;
    comment?: string;
    message?: string;
    coupon_text?: string;
    checkout_mode?: string;
    gstin?: string;
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    cart_id?: number;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    item_counts?: number;
    created_on?: string;
    cart_value?: number;
    pick_up_customer_details?: any;
    cart_id?: string;
    user_id?: string;
};
type MultiCartResponse = {
    success?: boolean;
    data?: CartList[];
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    pan_config?: any;
    delivery_charge_info?: string;
    currency?: CartCurrency;
    user?: UserInfo;
    items?: CartProductInfo[];
    last_modified?: string;
    buy_now?: boolean;
    id?: string;
    restrict_checkout?: boolean;
    comment?: string;
    message?: string;
    coupon_text?: string;
    checkout_mode?: string;
    pan_no?: string;
    gstin?: string;
    is_valid?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
};
type DeleteCartRequest = {
    cart_id_list?: string[];
};
type DeleteCartDetailResponse = {
    success?: boolean;
    message?: string;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type Coupon = {
    minimum_cart_value?: number;
    sub_title?: string;
    title?: string;
    is_applied?: boolean;
    coupon_value?: number;
    coupon_type?: string;
    message?: string;
    expires_on?: string;
    is_applicable?: boolean;
    description?: string;
    max_discount_value?: number;
    coupon_code?: string;
};
type PageCoupon = {
    has_previous?: boolean;
    total_item_count?: number;
    has_next?: boolean;
    total?: number;
    current?: number;
};
type GetCouponResponse = {
    available_coupon_list?: Coupon[];
    page?: PageCoupon;
};
type ApplyCouponRequest = {
    coupon_code: string;
};
type GeoLocation = {
    longitude?: number;
    latitude?: number;
};
type PlatformAddress = {
    address?: string;
    geo_location?: GeoLocation;
    country_code?: string;
    email?: string;
    name?: string;
    area?: string;
    google_map_point?: any;
    area_code?: string;
    phone?: string;
    area_code_slug?: string;
    created_by_user_id?: string;
    id?: string;
    tags?: string[];
    country?: string;
    checkout_mode?: string;
    state?: string;
    is_active?: boolean;
    meta?: any;
    city?: string;
    cart_id?: string;
    address_type?: string;
    user_id?: string;
    is_default_address?: boolean;
    landmark?: string;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type SaveAddressResponse = {
    id?: string;
    success?: boolean;
    is_default_address?: boolean;
};
type UpdateAddressResponse = {
    id?: string;
    success?: boolean;
    is_default_address?: boolean;
    is_updated?: boolean;
};
type DeleteAddressResponse = {
    id?: string;
    is_deleted?: boolean;
};
type PlatformSelectCartAddressRequest = {
    id?: string;
    cart_id?: string;
    billing_address_id?: string;
    user_id?: string;
    checkout_mode?: string;
};
type ShipmentResponse = {
    shipment_type?: string;
    promise?: ShipmentPromise;
    fulfillment_type?: string;
    dp_options?: any;
    fulfillment_id?: number;
    dp_id?: string;
    shipments?: number;
    order_type?: string;
    box_type?: string;
    items?: CartProductInfo[];
};
type CartShipmentsResponse = {
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    last_modified?: string;
    uid?: string;
    buy_now?: boolean;
    id?: string;
    restrict_checkout?: boolean;
    comment?: string;
    message?: string;
    coupon_text?: string;
    checkout_mode?: string;
    gstin?: string;
    delivery_charge_info?: string;
    is_valid?: boolean;
    shipments?: ShipmentResponse[];
    error?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    cart_id?: number;
    currency?: CartCurrency;
};
type UpdateCartShipmentItem = {
    article_uid: string;
    shipment_type: string;
    quantity?: number;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    pan_no?: string;
    gstin?: string;
    pick_up_customer_details?: any;
    comment?: string;
    checkout_mode?: string;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type Files = {
    values: string[];
    key: string;
};
type StaffCheckout = {
    _id: string;
    employee_code?: string;
    user: string;
    last_name: string;
    first_name: string;
};
type PlatformCartCheckoutDetailRequest = {
    billing_address?: any;
    order_type: string;
    delivery_address?: any;
    files?: Files[];
    device_id?: string;
    payment_mode: string;
    merchant_code?: string;
    ordering_store?: number;
    pos?: boolean;
    callback_url?: string;
    address_id?: string;
    id: string;
    payment_identifier?: string;
    payment_params?: any;
    checkout_mode?: string;
    aggregator?: string;
    extra_meta?: any;
    meta?: any;
    payment_auto_confirm?: boolean;
    employee_code?: string;
    staff?: StaffCheckout;
    billing_address_id?: string;
    user_id: string;
    pick_at_store_uid?: number;
};
type CheckCart = {
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    order_id?: string;
    success?: boolean;
    error_message?: string;
    store_code?: string;
    delivery_charge_info?: string;
    user_type?: string;
    currency?: CartCurrency;
    items?: CartProductInfo[];
    cod_available?: boolean;
    last_modified?: string;
    uid?: string;
    buy_now?: boolean;
    id?: string;
    restrict_checkout?: boolean;
    cod_message?: string;
    comment?: string;
    message?: string;
    coupon_text?: string;
    checkout_mode?: string;
    gstin?: string;
    is_valid?: boolean;
    cod_charges?: number;
    delivery_charges?: number;
    payment_selection_lock?: PaymentSelectionLock;
    cart_id?: number;
    store_emps?: any[];
    delivery_charge_order_value?: number;
};
type CartCheckoutResponse = {
    data?: any;
    cart?: CheckCart;
    callback_url?: string;
    message?: string;
    order_id?: string;
    success?: boolean;
    payment_confirm_url?: string;
    app_intercept_url?: string;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    name?: string;
    address?: string;
    area?: string;
    state?: string;
    area_code?: string;
    uid?: number;
    store_code?: string;
    phone?: string;
    country?: string;
    id?: number;
    area_code_slug?: string;
    city?: string;
    address_type?: string;
    email?: string;
    pincode?: number;
    landmark?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    address_id?: string;
    id?: string;
    payment_mode?: string;
    aggregator_name?: string;
    merchant_code?: string;
    payment_identifier?: string;
};
type CouponValidity = {
    title?: string;
    code?: string;
    discount?: number;
    valid?: boolean;
    display_message_en?: string;
};
type PaymentCouponValidate = {
    success: boolean;
    message?: string;
    coupon_validity?: CouponValidity;
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
type ApplicationServiceabilityConfig = {
    serviceability_type: string;
    channel_id: string;
    channel_type: string;
};
type ServiceabilityrErrorResponse = {
    value: string;
    message: string;
    type: string;
};
type ApplicationServiceabilityConfigResponse = {
    success: boolean;
    data?: ApplicationServiceabilityConfig;
    error?: ServiceabilityrErrorResponse;
};
type EntityRegionView_Request = {
    parent_id?: string[];
    sub_type: string[];
};
type EntityRegionView_page = {
    type: string;
    current: number;
    size: number;
    item_total: number;
    has_next: boolean;
};
type EntityRegionView_Items = {
    sub_type: string;
    uid: string;
    name: string;
};
type EntityRegionView_Error = {
    value?: string;
    message?: string;
    type?: string;
};
type EntityRegionView_Response = {
    success: boolean;
    page: EntityRegionView_page;
    data: EntityRegionView_Items[];
    error: EntityRegionView_Error;
};
type ZoneDataItem = {
    current: number;
    size: number;
    type: string;
    item_total: number;
    has_next: boolean;
};
type ListViewProduct = {
    count: number;
    type: string;
};
type ListViewChannels = {
    channel_id: string;
    channel_type: string;
};
type ListViewItems = {
    pincodes_count: number;
    slug: string;
    company_id: number;
    zone_id: string;
    name: string;
    stores_count: number;
    product: ListViewProduct;
    channels: ListViewChannels;
    is_active: boolean;
};
type ListViewSummary = {
    total_zones: number;
    total_active_zones: number;
    total_pincodes_served: number;
};
type ListViewResponse = {
    page: ZoneDataItem[];
    items: ListViewItems[];
    summary: ListViewSummary[];
};
type CompanyStoreView_PageItems = {
    type: string;
    current: number;
    size: number;
    item_total: number;
    has_next: boolean;
};
type CompanyStoreView_Response = {
    items?: any[];
    page: CompanyStoreView_PageItems[];
};
type GetZoneDataViewChannels = {
    channel_id: string;
    channel_type: string;
};
type ZoneProductTypes = {
    tags: string[];
    type: string;
};
type ZoneMappingType = {
    state?: string[];
    country: string;
    pincode?: string[];
};
type UpdateZoneData = {
    zone_id: string;
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
type ZoneUpdateRequest = {
    data: UpdateZoneData;
    identifier: string;
};
type ZoneSuccessResponse = {
    success: boolean;
    status_code: number;
};
type GetZoneDataViewItems = {
    zone_id: string;
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
    stores_count: number;
    pincodes_count: number;
};
type GetSingleZoneDataViewResponse = {
    data: GetZoneDataViewItems;
};
type CreateZoneData = {
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
type ZoneRequest = {
    data: CreateZoneData;
    identifier: string;
};
type ZoneResponse = {
    success: boolean;
    status_code: number;
    zone_id: string;
};
type GetZoneFromPincodeViewRequest = {
    country: string;
    pincode: string;
};
type GetZoneFromPincodeViewResponse = {
    serviceability_type: string;
    zones: string[];
};
type AddressResponse = {
    address2?: string;
    longitude?: number;
    city?: string;
    address1?: string;
    latitude?: number;
    landmark?: string;
    pincode?: number;
    state?: string;
    country?: string;
};
type ContactNumberResponse = {
    country_code?: number;
    number?: string;
};
type IntegrationTypeResponse = {
    order?: string;
    inventory?: string;
};
type CreatedByResponse = {
    user_id?: string;
    username?: string;
};
type MobileNo = {
    country_code?: number;
    number?: string;
};
type ManagerResponse = {
    mobile_no?: MobileNo;
    name?: string;
    email?: string;
};
type ProductReturnConfigResponse = {
    on_same_store?: boolean;
};
type ModifiedByResponse = {
    user_id?: string;
    username?: string;
};
type EwayBillResponse = {
    enabled?: boolean;
};
type EinvoiceResponse = {
    enabled?: boolean;
};
type GstCredentialsResponse = {
    e_waybill?: EwayBillResponse;
    e_invoice?: EinvoiceResponse;
};
type DocumentsResponse = {
    legal_name?: string;
    value?: string;
    verified?: boolean;
    type?: string;
};
type Dp = {
    external_account_id?: string;
    rvp_priority?: number;
    area_code?: number;
    lm_priority?: number;
    assign_dp_from_sb?: boolean;
    transport_mode?: string;
    fm_priority?: number;
    payment_mode?: string;
    operations?: string[];
    internal_account_id?: string;
};
type LogisticsResponse = {
    dp?: Dp;
    override?: boolean;
};
type OpeningClosing = {
    hour?: number;
    minute?: number;
};
type TimmingResponse = {
    opening?: OpeningClosing;
    closing?: OpeningClosing;
    open?: boolean;
    weekday?: string;
};
type WarningsResponse = {
    store_address?: string;
};
type ItemResponse = {
    address?: AddressResponse;
    verified_on?: string;
    company_id?: number;
    _cls?: string;
    created_on?: string;
    contact_numbers?: ContactNumberResponse[];
    integration_type?: IntegrationTypeResponse;
    notification_emails?: string[];
    created_by?: CreatedByResponse;
    stage?: string;
    manager?: ManagerResponse;
    modified_on?: string;
    product_return_config?: ProductReturnConfigResponse;
    verified_by?: ModifiedByResponse;
    store_type?: string;
    name?: string;
    display_name?: string;
    company?: number;
    _custom_json?: any;
    code?: string;
    gst_credentials?: GstCredentialsResponse;
    documents?: DocumentsResponse[];
    logistics?: LogisticsResponse;
    uid?: number;
    timing?: TimmingResponse[];
    warnings?: WarningsResponse;
    modified_by?: ModifiedByResponse;
    sub_type?: string;
};
type GetStoresViewResponse = {
    items?: ItemResponse[];
    page: PageResponse;
};
