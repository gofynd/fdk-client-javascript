export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    lead: Lead;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    fileStorage: FileStorage;
    configuration: Configuration;
    application(applicationId: any): PlatformApplicationClient;
}
declare namespace PlatformClient {
    export { TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, KeyValue, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, SubmitButton, PollForAssignment, CustomForm, TicketHistory, Ticket, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, SendEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, AuthSuccess, SendOtpResponse, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, PaginationSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, Mobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, GetActivityStatus, ActivityHistory, FailedOrders, FailOrder, MarketplaceOrder, TotalDiscountsSet, PresentmentMoney, ShopMoney, TotalPriceSet, TotalPriceSetShopMoney, TotalPriceSetPresentmentMoney, TotalTaxSet, TotalTaxSetShopMoney, TotalTaxSetPresentmentMoney, SubtotalPriceSet, SubtotalPriceSetShopMoney, SubtotalPriceSetPresentmentMoney, LineItems, LineItemsArticle, Quantities, NotAvailable, Sellable, OrderCommitted, Damaged, Manufacturer, ArticlePrice, Company, FailOrderDateMeta, MarketplaceIdentifiers, TatacliqLuxury, Dimension, Weight, Store, ArticleMeta, ArticleBrand, LineItemsArticleIdentifier, PriceSet, PriceSetShopMoney, PriceSetPresentmentMoney, TaxLines, TaxLinesPriceSet, TaxLinesPriceSetShopMoney, TaxLinesPriceSetPresentmentMoney, TotalDiscountSet, TotalDiscountSetPresentmentMoney, TotalDiscountSetShopMoney, BillingAddress, TotalShippingPriceSet, TotalShippingPriceSetShopMoney, TotalShippingPriceSetPresentmentMoney, Customer, DefaultAddress, TotalLineItemsPriceSet, TotalLineItemsPriceSetShopMoney, TotalLineItemsPriceSetPresentmentMoney, ShippingAddress, OrderListing, OrderItems, PlatformOrderUserInfo, PlatformDeliveryAddress, Channel, PlatformBreakupValues, PlatformApplication, ArticleAssignment, PlatformShipment, PlatformShipmentStatus, Bags, BagFinancialBreakup, Identifiers, BagCurrStatus, BagItem, BagItemAttributes, BagArticle, ArticleIdentifiers, Set, SetSizeDistribution, Sizes, BagArticleReturnConfig, ShipmentPrices, GstDetails, BagBreakupValues, BagCurrentStatus, BagStateMapper, BagStatus, BagStatusBagStateMapper, BagPrices, ShipmentBreakupValues, DpDetails, ShipmentInvoice, RtoAddress, StoreAddressJson, PlatformFulfillingStore, FulfillingStoreMeta, AdditionalContactDetails, Documents, Gst, ProductReturnConfig, Timing, Opening, Closing, FulfillingStoreStoreAddressJson, Payments, ShipmentGst, PlatformShipmentBrand, Promise, Timestamp, ShipmentTrackingDetails, ShipmentUser, ItemsPayments, Filters, Stages, StagesFilters, Options, NextOrderStatus, BagConfirmed, DpAssigned, ReturnBagDelivered, Placed, DeliveryDone, Pending, BagPacked, PlatformOrderPage, ItemTotal, AppliedFilters, UpdateOrderReprocessResponse, PlatformOrderTrack, GetPingResponse, UpdateShipmentStatusResponse, UpdateShipmentStatusBody, PlatformShipmentTrack, Results, UpdateProcessShipmenstRequestBody, UpdateProcessShipmenstRequestResponse, GetVoiceCallbackResponse, GetClickToCallResponse, ApefaceApiError, DeleteResponse, ErrorResponse, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Meta, Guide, ValidateSizeGuide, SuccessResponse, SizeGuideResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, BannerImage, ImageUrls, ProductListingActionPage, ProductListingAction, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionImage, CollectionBanner, SeoDetail, Schedule, UserInfo, CollectionBadge, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, BasePage, MultipleCommon, ProdcutTemplateCategoriesResponse, PTErrorResponse, BasePage1, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, ProductTemplate, TemplatesResponse, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductConfligurationDownloads, CategoryMappingValues, CategoryMapping, Media2, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, PageData, UserCommon, VerifiedBy, Attributes, Logo, Brand, ProductPublished, Product, ProductListingResponse, ReturnConfig, CustomOrder, OrderQuantity, ProductPublish, Trader, TeaserTag, ProductCreateUpdate, ValidateProduct, UserDetail, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkProductRequest, NestedTags, ProductTagsViewResponse, Items, BulkAssetResponse, ProductBulkAssets, InventoryRequest, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest1, BulkRequestGet, CommonResponse, Size1, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, FilerList, InventoryConfig, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, RewardPointsConfig, Credit, Debit, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPoints, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, ListingPageFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, Instagram, Twitter, Pinterest, GooglePlus, Youtube, LinkedIn, Vimeo, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, Auth, GoogleMap, GoogleMapCredentials, Ownership, PriceRange, PostOrder, BulkBundleRestriction, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, PaymentCodes, Restrictions, Validity, CouponDateMeta, CouponAction, CouponAuthor, Rule, CouponSchedule, RuleDefinition, Identifier, State, Validation, DisplayMetaDict, DisplayMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate };
}
/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Page
        
        
        @property { number } [item_total]
        
        @property { string } [next_id]
        
        @property { boolean } [has_previous]
        
        @property { boolean } [has_next]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } [size]
        
         
    */
/**
        @typedef TicketHistoryList
        
        
        @property { Array<TicketHistory> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */
/**
        @typedef CustomFormList
        
        
        @property { Array<CustomForm> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */
/**
        @typedef CreateCustomFormPayload
        
        
        @property { string } slug
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [header_image]
        
        @property { boolean } [should_notify]
        
        @property { string } [success_message]
        
        @property { PollForAssignment } [poll_for_assignment]
        
         
    */
/**
        @typedef EditCustomFormPayload
        
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [header_image]
        
        @property { boolean } [should_notify]
        
        @property { boolean } [login_required]
        
        @property { string } [success_message]
        
        @property { PollForAssignment } [poll_for_assignment]
        
         
    */
/**
        @typedef EditTicketPayload
        
        
        @property { TicketContent } [content]
        
        @property { string } [category]
        
        @property { string } [source]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { AgentChangePayload } [assigned_to]
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef AgentChangePayload
        
        
        @property { string } agent_id
        
         
    */
/**
        @typedef CreateVideoRoomResponse
        
        
        @property { string } unique_name
        
         
    */
/**
        @typedef CloseVideoRoomResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef CreateVideoRoomPayload
        
        
        @property { string } unique_name
        
        @property { Array<Object> } [notify]
        
         
    */
/**
        @typedef Filter
        
        
        @property { Array<Priority> } priorities
        
        @property { Array<TicketCategory> } [categories]
        
        @property { Array<Status> } statuses
        
        @property { Array<Object> } assignees
        
         
    */
/**
        @typedef TicketHistoryPayload
        
        
        @property { Object } value
        
        @property { string } type
        
         
    */
/**
        @typedef CustomFormSubmissionPayload
        
        
        @property { Array<KeyValue> } response
        
         
    */
/**
        @typedef KeyValue
        
        
        @property { string } key
        
        @property { string } value
        
         
    */
/**
        @typedef GetTokenForVideoRoomResponse
        
        
        @property { string } access_token
        
         
    */
/**
        @typedef GetParticipantsInsideVideoRoomResponse
        
        
        @property { Array<Participant> } participants
        
         
    */
/**
        @typedef Participant
        
        
        @property { UserSchema } [user]
        
        @property { string } [identity]
        
        @property { string } [status]
        
         
    */
/**
        @typedef PhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [country_code]
        
         
    */
/**
        @typedef Email
        
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef Debug
        
        
        @property { string } [source]
        
        @property { string } [platform]
        
         
    */
/**
        @typedef SubmitCustomFormResponse
        
        
        @property { Ticket } ticket
        
         
    */
/**
        @typedef TicketContext
        
        
        @property { string } [application_id]
        
        @property { string } company_id
        
         
    */
/**
        @typedef CreatedOn
        
        
        @property { string } user_agent
        
         
    */
/**
        @typedef TicketAsset
        
        
        @property { string } [display]
        
        @property { string } value
        
        @property { string } type
        
         
    */
/**
        @typedef TicketContent
        
        
        @property { string } title
        
        @property { string } [description]
        
        @property { Array<TicketAsset> } [attachments]
        
         
    */
/**
        @typedef AddTicketPayload
        
        
        @property { string } status
        
        @property { string } priority
        
        @property { string } category
        
        @property { TicketContent } content
        
         
    */
/**
        @typedef Priority
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */
/**
        @typedef Status
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */
/**
        @typedef TicketCategory
        
        
        @property { string } key
        
        @property { string } display
        
        @property { CustomForm } [form]
        
         
    */
/**
        @typedef SubmitButton
        
        
        @property { string } title
        
        @property { string } title_color
        
        @property { string } background_color
        
         
    */
/**
        @typedef PollForAssignment
        
        
        @property { number } duration
        
        @property { string } message
        
        @property { string } success_message
        
        @property { string } failure_message
        
         
    */
/**
        @typedef CustomForm
        
        
        @property { string } application_id
        
        @property { string } slug
        
        @property { string } [header_image]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { boolean } login_required
        
        @property { boolean } should_notify
        
        @property { string } [success_message]
        
        @property { SubmitButton } [submit_button]
        
        @property { Array<Object> } inputs
        
        @property { CreatedOn } [created_on]
        
        @property { Object } [created_by]
        
        @property { PollForAssignment } [poll_for_assignment]
        
        @property { string } _id
        
         
    */
/**
        @typedef TicketHistory
        
        
        @property { string } type
        
        @property { Object } value
        
        @property { string } ticket_id
        
        @property { CreatedOn } [created_on]
        
        @property { Object } [created_by]
        
        @property { string } _id
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */
/**
        @typedef Ticket
        
        
        @property { TicketContext } [context]
        
        @property { CreatedOn } [created_on]
        
        @property { string } [response_id]
        
        @property { TicketContent } [content]
        
        @property { string } ticket_id
        
        @property { TicketCategory } category
        
        @property { string } source
        
        @property { Status } status
        
        @property { Priority } priority
        
        @property { Object } [created_by]
        
        @property { Object } [assigned_to]
        
        @property { Array<string> } [tags]
        
        @property { Object } [_custom_json]
        
        @property { string } [_id]
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */
/**
        @typedef EditEmailRequestSchema
        
        
        @property { string } [email]
        
         
    */
/**
        @typedef SendVerificationLinkMobileRequestSchema
        
        
        @property { boolean } [verified]
        
        @property { boolean } [active]
        
        @property { string } [country_code]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */
/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [country_code]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [mobile]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profile_pic_url]
        
        @property { string } [android_hash]
        
        @property { string } [sender]
        
        @property { string } [register_token]
        
         
    */
/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [register_token]
        
         
    */
/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [request_id]
        
        @property { string } [register_token]
        
        @property { string } [otp]
        
         
    */
/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [android_hash]
        
        @property { string } [force]
        
         
    */
/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [old_password]
        
        @property { string } [new_password]
        
         
    */
/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { FormRegisterRequestSchemaPhone } [phone]
        
        @property { string } [register_token]
        
         
    */
/**
        @typedef TokenRequestBodySchema
        
        
        @property { string } [token]
        
         
    */
/**
        @typedef ForgotPasswordRequestSchema
        
        
        @property { string } [code]
        
        @property { string } [password]
        
         
    */
/**
        @typedef CodeRequestBodySchema
        
        
        @property { string } [code]
        
         
    */
/**
        @typedef SendResetPasswordEmailRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [captcha_code]
        
         
    */
/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [captcha_code]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */
/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [country_code]
        
        @property { string } [captcha_code]
        
        @property { string } [mobile]
        
         
    */
/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [is_signed_in]
        
        @property { OAuthRequestSchemaOauth2 } [oauth2]
        
        @property { OAuthRequestSchemaProfile } [profile]
        
         
    */
/**
        @typedef AuthSuccess
        
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
        @property { AuthSuccessUser } [user]
        
         
    */
/**
        @typedef SendOtpResponse
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
         
    */
/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
         
    */
/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [user_exists]
        
         
    */
/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */
/**
        @typedef RegisterFormSuccess
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
         
    */
/**
        @typedef VerifyEmailSuccess
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef HasPasswordSuccess
        
        
        @property { boolean } [result]
        
         
    */
/**
        @typedef LogoutSuccess
        
        
        @property { boolean } [logout]
        
         
    */
/**
        @typedef OtpSuccess
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
         
    */
/**
        @typedef EmailOtpSuccess
        
        
        @property { string } [resend_token]
        
         
    */
/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */
/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verify_mobile_link]
        
         
    */
/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verify_email_link]
        
         
    */
/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verify_mobile_link]
        
         
    */
/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verify_email_link]
        
         
    */
/**
        @typedef UserSearchResponseSchema
        
        
        @property { Array<UserSchema> } [users]
        
         
    */
/**
        @typedef CustomerListResponseSchema
        
        
        @property { Array<UserSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */
/**
        @typedef PaginationSchema
        
        
        @property { number } [size]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
        @property { string } [type]
        
        @property { number } [current]
        
         
    */
/**
        @typedef UnauthorizedSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnauthenticatedSchema
        
        
        @property { boolean } [authenticated]
        
         
    */
/**
        @typedef NotFoundSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef AuthenticationApiErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef ProfileEditSuccessSchema
        
        
        @property { string } [email]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_email_link]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { string } [user]
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
         
    */
/**
        @typedef FormRegisterRequestSchemaPhone
        
        
        @property { string } [country_code]
        
        @property { string } [mobile]
        
         
    */
/**
        @typedef OAuthRequestSchemaOauth2
        
        
        @property { string } [access_token]
        
        @property { number } [expiry]
        
        @property { string } [refresh_token]
        
         
    */
/**
        @typedef OAuthRequestSchemaProfile
        
        
        @property { string } [last_name]
        
        @property { string } [image]
        
        @property { string } [id]
        
        @property { string } [email]
        
        @property { string } [full_name]
        
        @property { string } [first_name]
        
         
    */
/**
        @typedef AuthSuccessUser
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { AuthSuccessUserDebug } [debug]
        
        @property { boolean } [active]
        
        @property { AuthSuccessUserEmails } [emails]
        
         
    */
/**
        @typedef AuthSuccessUserDebug
        
        
        @property { string } [platform]
        
         
    */
/**
        @typedef AuthSuccessUserEmails
        
        
        @property { string } [email]
        
        @property { boolean } [verified]
        
        @property { boolean } [primary]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef CreateUserRequestSchema
        
        
        @property { string } phone_number
        
        @property { string } [email]
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [gender]
        
        @property { string } username
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef CreateUserResponseSchema
        
        
        @property { UserSchema } [user]
        
         
    */
/**
        @typedef CreateUserSessionRequestSchema
        
        
        @property { string } [domain]
        
        @property { number } [max_age]
        
        @property { string } [user_id]
        
         
    */
/**
        @typedef CreateUserSessionResponseSchema
        
        
        @property { string } [domain]
        
        @property { number } [max_age]
        
        @property { boolean } [secure]
        
        @property { boolean } [http_only]
        
        @property { Object } [cookie]
        
         
    */
/**
        @typedef PlatformSchema
        
        
        @property { string } [display]
        
        @property { LookAndFeel } [look_and_feel]
        
        @property { string } [updated_at]
        
        @property { boolean } [active]
        
        @property { boolean } [forgot_password]
        
        @property { Login } [login]
        
        @property { boolean } [skip_captcha]
        
        @property { string } [name]
        
        @property { MetaSchema } [meta]
        
        @property { string } [_id]
        
        @property { Social } [social]
        
        @property { RequiredFields } [required_fields]
        
        @property { RegisterRequiredFields } [register_required_fields]
        
        @property { boolean } [skip_login]
        
        @property { FlashCard } [flash_card]
        
        @property { string } [subtext]
        
        @property { SocialTokens } [social_tokens]
        
        @property { string } [created_at]
        
        @property { boolean } [register]
        
        @property { string } [mobile_image]
        
        @property { string } [desktop_image]
        
         
    */
/**
        @typedef LookAndFeel
        
        
        @property { string } [card_position]
        
        @property { string } [background_color]
        
         
    */
/**
        @typedef Login
        
        
        @property { boolean } [password]
        
        @property { boolean } [otp]
        
         
    */
/**
        @typedef MetaSchema
        
        
        @property { boolean } [fynd_default]
        
         
    */
/**
        @typedef Social
        
        
        @property { boolean } [account_kit]
        
        @property { boolean } [facebook]
        
        @property { boolean } [google]
        
         
    */
/**
        @typedef RequiredFields
        
        
        @property { Email } [email]
        
        @property { Mobile } [mobile]
        
         
    */
/**
        @typedef Mobile
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */
/**
        @typedef RegisterRequiredFields
        
        
        @property { RegisterRequiredFieldsEmail } [email]
        
        @property { RegisterRequiredFieldsMobile } [mobile]
        
         
    */
/**
        @typedef RegisterRequiredFieldsEmail
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */
/**
        @typedef RegisterRequiredFieldsMobile
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */
/**
        @typedef FlashCard
        
        
        @property { string } [text]
        
        @property { string } [text_color]
        
        @property { string } [background_color]
        
         
    */
/**
        @typedef SocialTokens
        
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [account_kit]
        
        @property { Google } [google]
        
         
    */
/**
        @typedef Facebook
        
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef Accountkit
        
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef Google
        
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef UpdateUserRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [gender]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef UserSchema
        
        
        @property { string } [first_name]
        
        @property { Object } [meta]
        
        @property { string } [last_name]
        
        @property { Array<PhoneNumber> } [phone_numbers]
        
        @property { Array<Email> } [emails]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { boolean } [active]
        
        @property { string } [profile_pic_url]
        
        @property { string } [username]
        
        @property { string } [account_type]
        
        @property { string } [uid]
        
        @property { Debug } [debug]
        
        @property { boolean } [has_old_password_hash]
        
        @property { string } [_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { boolean } success
        
        @property { Array<string> } excluded_fields
        
        @property { string } app_id
        
        @property { Array<Object> } [aggregators]
        
        @property { boolean } created
        
        @property { Array<string> } display_fields
        
         
    */
/**
        @typedef ErrorCodeDescription
        
        
        @property { string } code
        
        @property { boolean } success
        
        @property { string } description
        
         
    */
/**
        @typedef PaymentGatewayConfig
        
        
        @property { boolean } [is_active]
        
        @property { string } merchant_salt
        
        @property { string } key
        
        @property { string } secret
        
        @property { string } config_type
        
         
    */
/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { PaymentGatewayConfig } [aggregator_name]
        
        @property { string } app_id
        
        @property { boolean } [is_active]
        
         
    */
/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { boolean } success
        
        @property { Array<string> } aggregator
        
         
    */
/**
        @typedef ErrorCodeAndDescription
        
        
        @property { string } code
        
        @property { string } description
        
         
    */
/**
        @typedef HttpErrorCodeAndResponse
        
        
        @property { boolean } success
        
        @property { ErrorCodeAndDescription } error
        
         
    */
/**
        @typedef PaymentModeLogo
        
        
        @property { string } large
        
        @property { string } small
        
         
    */
/**
        @typedef PaymentModeList
        
        
        @property { string } [name]
        
        @property { string } [card_brand]
        
        @property { string } [card_id]
        
        @property { boolean } [expired]
        
        @property { number } [exp_year]
        
        @property { string } [card_isin]
        
        @property { string } [code]
        
        @property { string } [merchant_code]
        
        @property { number } [display_priority]
        
        @property { number } [exp_month]
        
        @property { string } [intent_flow]
        
        @property { string } [display_name]
        
        @property { string } [card_token]
        
        @property { string } [fynd_vpa]
        
        @property { number } [timeout]
        
        @property { string } [card_reference]
        
        @property { PaymentModeLogo } [logo_url]
        
        @property { string } aggregator_name
        
        @property { string } [card_number]
        
        @property { string } [card_name]
        
        @property { string } [card_fingerprint]
        
        @property { Array<string> } [intent_app_error_list]
        
        @property { string } [card_brand_image]
        
        @property { number } [retry_count]
        
        @property { string } [nickname]
        
        @property { string } [card_issuer]
        
        @property { string } [card_type]
        
         
    */
/**
        @typedef RootPaymentMode
        
        
        @property { number } display_priority
        
        @property { string } name
        
        @property { Array<PaymentModeList> } [list]
        
        @property { string } display_name
        
        @property { string } [aggregator_name]
        
        @property { boolean } [add_card_enabled]
        
        @property { boolean } [anonymous_enable]
        
         
    */
/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } payment_option
        
         
    */
/**
        @typedef PaymentOptionsResponse
        
        
        @property { PaymentOptions } payment_options
        
        @property { boolean } success
        
         
    */
/**
        @typedef PayoutsResponse
        
        
        @property { Object } unique_transfer_no
        
        @property { boolean } is_active
        
        @property { string } transfer_type
        
        @property { Object } more_attributes
        
        @property { Array<Object> } payouts_aggregators
        
        @property { boolean } is_default
        
        @property { Object } customers
        
         
    */
/**
        @typedef PayoutRequest
        
        
        @property { Object } bank_details
        
        @property { boolean } is_active
        
        @property { string } transfer_type
        
        @property { Object } users
        
        @property { string } aggregator
        
        @property { string } unique_external_id
        
         
    */
/**
        @typedef PayoutResponse
        
        
        @property { Object } bank_details
        
        @property { boolean } success
        
        @property { string } unique_transfer_no
        
        @property { Object } payouts
        
        @property { boolean } is_active
        
        @property { string } payment_status
        
        @property { string } transfer_type
        
        @property { Object } users
        
        @property { string } aggregator
        
        @property { boolean } created
        
         
    */
/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } success
        
        @property { boolean } is_active
        
        @property { boolean } is_default
        
         
    */
/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } is_active
        
        @property { boolean } is_default
        
        @property { string } unique_external_id
        
         
    */
/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
        @property { Array<Object> } data
        
         
    */
/**
        @typedef DeleteSubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef SubscriptionConfigResponse
        
        
        @property { Object } config
        
        @property { boolean } success
        
        @property { string } aggregator
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } unique_external_id
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { boolean } success
        
        @property { Object } data
        
         
    */
/**
        @typedef GetActivityStatus
        
        
        @property { ActivityHistory } activity_history
        
         
    */
/**
        @typedef ActivityHistory
        
        
        @property { string } [createdat]
        
        @property { string } [message]
        
        @property { string } [type]
        
        @property { string } [user]
        
         
    */
/**
        @typedef FailedOrders
        
        
        @property { FailOrder } orders
        
         
    */
/**
        @typedef FailOrder
        
        
        @property { string } [updated_at]
        
        @property { string } [_id]
        
        @property { string } [reason]
        
        @property { MarketplaceOrder } [marketplace_order]
        
        @property { string } [marketplace_order_id]
        
        @property { string } [created_at]
        
        @property { string } [app_id]
        
        @property { string } [marketplace]
        
        @property { number } [company_id]
        
         
    */
/**
        @typedef MarketplaceOrder
        
        
        @property { string } [order_status_url]
        
        @property { string } [admin_graphql_api_id]
        
        @property { string } [email]
        
        @property { boolean } [test]
        
        @property { string } [note]
        
        @property { string } [total_price]
        
        @property { number } [app_id]
        
        @property { TotalDiscountsSet } [total_discounts_set]
        
        @property { TotalPriceSet } [total_price_set]
        
        @property { TotalTaxSet } [total_tax_set]
        
        @property { string } [gateway]
        
        @property { string } [name]
        
        @property { SubtotalPriceSet } [subtotal_price_set]
        
        @property { number } [number]
        
        @property { boolean } [buyer_accepts_marketing]
        
        @property { string } [contact_email]
        
        @property { string } [token]
        
        @property { string } [source_name]
        
        @property { Array<any> } [payment_gateway_names]
        
        @property { string } [presentment_currency]
        
        @property { string } [subtotal_price]
        
        @property { string } [processed_at]
        
        @property { number } [order_number]
        
        @property { string } [total_tip_received]
        
        @property { number } [id]
        
        @property { boolean } [confirmed]
        
        @property { string } [currency]
        
        @property { string } [total_line_items_price]
        
        @property { LineItems } [line_items]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [total_weight]
        
        @property { BillingAddress } [billing_address]
        
        @property { TotalShippingPriceSet } [total_shipping_price_set]
        
        @property { Customer } [customer]
        
        @property { string } [total_discounts]
        
        @property { TotalLineItemsPriceSet } [total_line_items_price_set]
        
        @property { string } [tags]
        
        @property { string } [total_price_usd]
        
        @property { number } [user_id]
        
        @property { string } [total_tax]
        
        @property { string } [processing_method]
        
        @property { ShippingAddress } [shipping_address]
        
        @property { boolean } [taxes_included]
        
        @property { string } [financial_status]
        
         
    */
/**
        @typedef TotalDiscountsSet
        
        
        @property { PresentmentMoney } [presentment_money]
        
        @property { ShopMoney } [shop_money]
        
         
    */
/**
        @typedef PresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef ShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalPriceSet
        
        
        @property { TotalPriceSetShopMoney } [shop_money]
        
        @property { TotalPriceSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef TotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalTaxSet
        
        
        @property { TotalTaxSetShopMoney } [shop_money]
        
        @property { TotalTaxSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef TotalTaxSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalTaxSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef SubtotalPriceSet
        
        
        @property { SubtotalPriceSetShopMoney } [shop_money]
        
        @property { SubtotalPriceSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef SubtotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef SubtotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef LineItems
        
        
        @property { string } [sku]
        
        @property { number } [fulfillable_quantity]
        
        @property { number } [grams]
        
        @property { string } [total_discount]
        
        @property { LineItemsArticle } [article]
        
        @property { string } [title]
        
        @property { string } [variant_inventory_management]
        
        @property { number } [id]
        
        @property { number } [variant_id]
        
        @property { string } [variant_title]
        
        @property { boolean } [product_exists]
        
        @property { string } [price]
        
        @property { string } [admin_graphql_api_id]
        
        @property { number } [quantity]
        
        @property { string } [vendor]
        
        @property { string } [fulfillment_service]
        
        @property { boolean } [taxable]
        
        @property { string } [name]
        
        @property { number } [product_id]
        
        @property { PriceSet } [price_set]
        
        @property { TaxLines } [tax_lines]
        
        @property { boolean } [requires_shipping]
        
        @property { boolean } [gift_card]
        
        @property { TotalDiscountSet } [total_discount_set]
        
         
    */
/**
        @typedef LineItemsArticle
        
        
        @property { Quantities } [quantities]
        
        @property { string } [old_article_uid]
        
        @property { number } [total_quantity]
        
        @property { Manufacturer } [manufacturer]
        
        @property { ArticlePrice } [price]
        
        @property { boolean } [track_inventory]
        
        @property { Company } [company]
        
        @property { boolean } [is_active]
        
        @property { FailOrderDateMeta } [date_meta]
        
        @property { boolean } [fragile]
        
        @property { MarketplaceIdentifiers } [marketplace_identifiers]
        
        @property { string } [size]
        
        @property { boolean } [is_set]
        
        @property { Dimension } [dimension]
        
        @property { Weight } [weight]
        
        @property { Store } [store]
        
        @property { ArticleMeta } [meta]
        
        @property { string } [uid]
        
        @property { ArticleBrand } [brand]
        
        @property { number } [item_id]
        
        @property { string } [fynd_article_code]
        
        @property { string } [_id]
        
        @property { LineItemsArticleIdentifier } [identifier]
        
        @property { string } [seller_identifier]
        
        @property { string } [fynd_item_code]
        
        @property { string } [country_of_origin]
        
         
    */
/**
        @typedef Quantities
        
        
        @property { NotAvailable } [not_available]
        
        @property { Sellable } [sellable]
        
        @property { OrderCommitted } [order_committed]
        
        @property { Damaged } [damaged]
        
         
    */
/**
        @typedef NotAvailable
        
        
        @property { number } [count]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef Sellable
        
        
        @property { number } [count]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef OrderCommitted
        
        
        @property { number } [count]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef Damaged
        
        
        @property { string } [updated_at]
        
        @property { number } [count]
        
         
    */
/**
        @typedef Manufacturer
        
        
        @property { boolean } [is_default]
        
        @property { string } [address]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ArticlePrice
        
        
        @property { number } [marked]
        
        @property { string } [currency]
        
        @property { number } [effective]
        
        @property { number } [transfer]
        
         
    */
/**
        @typedef Company
        
        
        @property { number } [id]
        
        @property { string } [company_type]
        
        @property { string } [business_type]
        
        @property { string } [company_name]
        
        @property { string } [created_on]
        
        @property { string } [pan_no]
        
        @property { boolean } [return_allowed]
        
        @property { string } [meta]
        
        @property { boolean } [exchange_allowed]
        
        @property { string } [agreement_start_date]
        
        @property { number } [exchange_within_days]
        
        @property { number } [payment_procesing_charge]
        
        @property { boolean } [fynd_a_fit_available]
        
        @property { string } [modified_on]
        
        @property { number } [return_within_days]
        
         
    */
/**
        @typedef FailOrderDateMeta
        
        
        @property { string } [added_on_store]
        
        @property { string } [inventory_updated_on]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef MarketplaceIdentifiers
        
        
        @property { TatacliqLuxury } [tatacliq_luxury]
        
         
    */
/**
        @typedef TatacliqLuxury
        
        
        @property { string } [sku]
        
         
    */
/**
        @typedef Dimension
        
        
        @property { number } [height]
        
        @property { number } [width]
        
        @property { string } [unit]
        
        @property { number } [length]
        
        @property { boolean } [is_default]
        
         
    */
/**
        @typedef Weight
        
        
        @property { boolean } [is_default]
        
        @property { string } [unit]
        
        @property { number } [shipping]
        
         
    */
/**
        @typedef Store
        
        
        @property { number } [id]
        
         
    */
/**
        @typedef ArticleMeta
        
        
        @property { string } [service]
        
         
    */
/**
        @typedef ArticleBrand
        
        
        @property { string } [name]
        
        @property { number } [id]
        
         
    */
/**
        @typedef LineItemsArticleIdentifier
        
        
        @property { string } [sku_code]
        
         
    */
/**
        @typedef PriceSet
        
        
        @property { PriceSetShopMoney } [shop_money]
        
        @property { PriceSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef PriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef PriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TaxLines
        
        
        @property { string } [title]
        
        @property { string } [price]
        
        @property { number } [rate]
        
        @property { TaxLinesPriceSet } [price_set]
        
         
    */
/**
        @typedef TaxLinesPriceSet
        
        
        @property { TaxLinesPriceSetShopMoney } [shop_money]
        
        @property { TaxLinesPriceSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef TaxLinesPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TaxLinesPriceSetPresentmentMoney
        
        
        @property { string } [currency_code]
        
        @property { string } [amount]
        
         
    */
/**
        @typedef TotalDiscountSet
        
        
        @property { TotalDiscountSetPresentmentMoney } [presentment_money]
        
        @property { TotalDiscountSetShopMoney } [shop_money]
        
         
    */
/**
        @typedef TotalDiscountSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalDiscountSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef BillingAddress
        
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [zip]
        
        @property { string } [last_name]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [province_code]
        
        @property { string } [phone]
        
        @property { string } [company]
        
        @property { number } [latitude]
        
        @property { string } [name]
        
        @property { string } [country]
        
        @property { string } [country_code]
        
        @property { string } [first_name]
        
        @property { string } [province]
        
         
    */
/**
        @typedef TotalShippingPriceSet
        
        
        @property { TotalShippingPriceSetShopMoney } [shop_money]
        
        @property { TotalShippingPriceSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef TotalShippingPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalShippingPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef Customer
        
        
        @property { string } [created_at]
        
        @property { number } [id]
        
        @property { string } [last_name]
        
        @property { string } [state]
        
        @property { number } [last_order_id]
        
        @property { string } [note]
        
        @property { boolean } [verified_email]
        
        @property { string } [phone]
        
        @property { boolean } [accepts_marketing]
        
        @property { string } [first_name]
        
        @property { string } [tags]
        
        @property { string } [last_order_name]
        
        @property { number } [orders_count]
        
        @property { string } [total_spent]
        
        @property { boolean } [tax_exempt]
        
        @property { string } [currency]
        
        @property { string } [accepts_marketing_updated_at]
        
        @property { string } [email]
        
        @property { string } [updated_at]
        
        @property { string } [admin_graphql_api_id]
        
        @property { DefaultAddress } [default_address]
        
         
    */
/**
        @typedef DefaultAddress
        
        
        @property { string } [last_name]
        
        @property { string } [name]
        
        @property { string } [province_code]
        
        @property { string } [country_code]
        
        @property { boolean } [is_default]
        
        @property { number } [id]
        
        @property { number } [customer_id]
        
        @property { string } [first_name]
        
        @property { string } [address1]
        
        @property { string } [phone]
        
        @property { string } [country_name]
        
        @property { string } [company]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [province]
        
        @property { string } [country]
        
        @property { string } [zip]
        
         
    */
/**
        @typedef TotalLineItemsPriceSet
        
        
        @property { TotalLineItemsPriceSetShopMoney } [shop_money]
        
        @property { TotalLineItemsPriceSetPresentmentMoney } [presentment_money]
        
         
    */
/**
        @typedef TotalLineItemsPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef TotalLineItemsPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */
/**
        @typedef ShippingAddress
        
        
        @property { string } [address1]
        
        @property { string } [zip]
        
        @property { string } [address2]
        
        @property { string } [country_code]
        
        @property { string } [country]
        
        @property { string } [last_name]
        
        @property { number } [latitude]
        
        @property { string } [province_code]
        
        @property { string } [first_name]
        
        @property { string } [phone]
        
        @property { string } [province]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [company]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OrderListing
        
        
        @property { Array<OrderItems> } items
        
        @property { Filters } filters
        
        @property { NextOrderStatus } next_order_status
        
        @property { PlatformOrderPage } page
        
        @property { AppliedFilters } applied_filters
        
         
    */
/**
        @typedef OrderItems
        
        
        @property { PlatformOrderUserInfo } [user]
        
        @property { PlatformDeliveryAddress } [delivery_address]
        
        @property { Channel } [channel]
        
        @property { PlatformBreakupValues } [breakup_values]
        
        @property { string } [id]
        
        @property { PlatformApplication } [application]
        
        @property { PlatformShipment } [shipments]
        
        @property { string } [created_at]
        
        @property { number } [total_shipments_in_order]
        
        @property { ItemsPayments } [payments]
        
         
    */
/**
        @typedef PlatformOrderUserInfo
        
        
        @property { string } [mobile]
        
        @property { string } [first_name]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [last_name]
        
        @property { boolean } [is_anonymous_user]
        
        @property { number } [uid]
        
        @property { string } [avis_user_id]
        
         
    */
/**
        @typedef PlatformDeliveryAddress
        
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { number } [latitude]
        
        @property { string } [updated_at]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [created_at]
        
        @property { string } [name]
        
        @property { string } [address]
        
        @property { string } [phone]
        
        @property { number } [longitude]
        
        @property { string } [address_type]
        
        @property { string } [email]
        
        @property { string } [pincode]
        
        @property { string } [address2]
        
        @property { string } [contact_person]
        
        @property { string } [address_category]
        
         
    */
/**
        @typedef Channel
        
        
        @property { string } [name]
        
        @property { string } [logo]
        
         
    */
/**
        @typedef PlatformBreakupValues
        
        
        @property { string } [display]
        
        @property { number } [value]
        
        @property { string } [name]
        
         
    */
/**
        @typedef PlatformApplication
        
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { boolean } [post_order_reassignment]
        
        @property { string } [id]
        
        @property { string } [description]
        
        @property { boolean } [dp_assignment]
        
        @property { ArticleAssignment } [article_assignment]
        
        @property { boolean } [force_reassignment]
        
        @property { string } [token]
        
        @property { string } [secret]
        
         
    */
/**
        @typedef ArticleAssignment
        
        
        @property { string } [strategy]
        
        @property { string } [level]
        
         
    */
/**
        @typedef PlatformShipment
        
        
        @property { PlatformShipmentStatus } [status]
        
        @property { Bags } [bags]
        
        @property { ShipmentPrices } [prices]
        
        @property { ShipmentBreakupValues } [breakup_values]
        
        @property { string } [id]
        
        @property { DpDetails } [dp_details]
        
        @property { ShipmentInvoice } [invoice]
        
        @property { PlatformFulfillingStore } [fulfilling_store]
        
        @property { Payments } [payments]
        
        @property { ShipmentGst } [gst]
        
        @property { Company } [company]
        
        @property { PlatformShipmentBrand } [brand]
        
        @property { Object } [coupon]
        
        @property { string } [order_source]
        
        @property { boolean } [is_not_fynd_source]
        
        @property { string } [comment]
        
        @property { Promise } [promise]
        
        @property { ShipmentTrackingDetails } [tracking_details]
        
        @property { boolean } [is_fynd_coupon]
        
        @property { string } [order_type]
        
        @property { ShipmentUser } [user]
        
         
    */
/**
        @typedef PlatformShipmentStatus
        
        
        @property { number } [id]
        
        @property { Array<number> } [bag_list]
        
        @property { string } [created_at]
        
        @property { string } [status]
        
        @property { string } [name]
        
        @property { number } [progress]
        
        @property { string } [shipment_id]
        
        @property { string } [current_shipment_status]
        
        @property { string } [color_code]
        
         
    */
/**
        @typedef Bags
        
        
        @property { Array<BagFinancialBreakup> } [financial_breakup]
        
        @property { BagCurrStatus } [status]
        
        @property { BagItem } [item]
        
        @property { BagArticle } [article]
        
        @property { number } [id]
        
        @property { BagPrices } [prices]
        
        @property { GstDetails } [gst_details]
        
        @property { BagBreakupValues } [breakup_values]
        
        @property { number } [update_time]
        
        @property { BagCurrentStatus } [current_status]
        
        @property { BagStatus } [bag_status]
        
         
    */
/**
        @typedef BagFinancialBreakup
        
        
        @property { number } [value_of_good]
        
        @property { string } [hsn_code]
        
        @property { number } [price_effective]
        
        @property { number } [cod_charges]
        
        @property { string } [gst_fee]
        
        @property { number } [fynd_credits]
        
        @property { number } [refund_amount]
        
        @property { number } [cashback_applied]
        
        @property { number } [transfer_price]
        
        @property { number } [amount_paid_roundoff]
        
        @property { number } [coupon_value]
        
        @property { number } [amount_paid]
        
        @property { number } [gst_tax_percentage]
        
        @property { string } [size]
        
        @property { number } [total_units]
        
        @property { number } [discount]
        
        @property { number } [coupon_effective_discount]
        
        @property { number } [cashback]
        
        @property { number } [promotion_effective_discount]
        
        @property { string } [gst_tag]
        
        @property { number } [delivery_charge]
        
        @property { number } [refund_credit]
        
        @property { number } [price_marked]
        
        @property { Identifiers } [identifiers]
        
        @property { string } [item_name]
        
        @property { boolean } [added_to_fynd_cash]
        
        @property { number } [brand_calculated_amount]
        
         
    */
/**
        @typedef Identifiers
        
        
        @property { string } [ean]
        
         
    */
/**
        @typedef BagCurrStatus
        
        
        @property { boolean } [enable_tracking]
        
        @property { boolean } [is_customer_return_allowed]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_returnable]
        
        @property { boolean } [can_be_cancelled]
        
         
    */
/**
        @typedef BagItem
        
        
        @property { number } [id]
        
        @property { string } [size]
        
        @property { string } [slug_key]
        
        @property { boolean } [can_return]
        
        @property { number } [brand_id]
        
        @property { Array<string> } [l2_category]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { boolean } [can_cancel]
        
        @property { BagItemAttributes } [attributes]
        
        @property { string } [l3_category_name]
        
        @property { number } [l3_category]
        
        @property { Array<string> } [l1_category]
        
        @property { Array<string> } [image]
        
        @property { string } [brand]
        
        @property { string } [last_updated_at]
        
         
    */
/**
        @typedef BagItemAttributes
        
        
        @property { string } [item_code]
        
        @property { string } [brand_name]
        
        @property { string } [country_of_origin]
        
         
    */
/**
        @typedef BagArticle
        
        
        @property { ArticleIdentifiers } [identifiers]
        
        @property { boolean } [esp_modified]
        
        @property { boolean } [is_set]
        
        @property { string } [size]
        
        @property { string } [code]
        
        @property { Set } [set]
        
        @property { string } [seller_identifier]
        
        @property { BagArticleReturnConfig } [return_config]
        
        @property { string } [_id]
        
        @property { string } [uid]
        
        @property { Object } [child_details]
        
         
    */
/**
        @typedef ArticleIdentifiers
        
        
        @property { string } [ean]
        
         
    */
/**
        @typedef Set
        
        
        @property { number } [quantity]
        
        @property { SetSizeDistribution } [size_distribution]
        
         
    */
/**
        @typedef SetSizeDistribution
        
        
        @property { Sizes } [sizes]
        
         
    */
/**
        @typedef Sizes
        
        
        @property { string } [size]
        
        @property { number } [pieces]
        
         
    */
/**
        @typedef BagArticleReturnConfig
        
        
        @property { number } [time]
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
         
    */
/**
        @typedef ShipmentPrices
        
        
        @property { number } [refund_amount]
        
        @property { number } [cashback_applied]
        
        @property { number } [transfer_price]
        
        @property { number } [coupon_value]
        
        @property { number } [amount_paid]
        
        @property { number } [delivery_charge]
        
        @property { number } [coupon_effective_discount]
        
        @property { number } [cod_charges]
        
        @property { number } [refund_credit]
        
        @property { boolean } [added_to_fynd_cash]
        
        @property { number } [gst_tax_percentage]
        
        @property { number } [price_marked]
        
        @property { number } [price_effective]
        
        @property { number } [discount]
        
        @property { number } [promotion_effective_discount]
        
        @property { number } [amount_paid_roundoff]
        
        @property { number } [fynd_credits]
        
        @property { number } [brand_calculated_amount]
        
        @property { number } [cashback]
        
        @property { number } [value_of_good]
        
         
    */
/**
        @typedef GstDetails
        
        
        @property { number } [brand_calculated_amount]
        
        @property { string } [gst_fee]
        
        @property { string } [gst_tag]
        
        @property { string } [hsn_code]
        
        @property { number } [value_of_good]
        
        @property { number } [gst_tax_percentage]
        
        @property { boolean } [is_default_hsn_code]
        
         
    */
/**
        @typedef BagBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */
/**
        @typedef BagCurrentStatus
        
        
        @property { string } [updated_at]
        
        @property { BagStateMapper } [bag_state_mapper]
        
        @property { string } [status]
        
        @property { string } [state_type]
        
         
    */
/**
        @typedef BagStateMapper
        
        
        @property { string } [app_state_name]
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [name]
        
        @property { string } [app_display_name]
        
         
    */
/**
        @typedef BagStatus
        
        
        @property { string } [status]
        
        @property { string } [state_type]
        
        @property { string } [updated_at]
        
        @property { BagStatusBagStateMapper } [bag_state_mapper]
        
         
    */
/**
        @typedef BagStatusBagStateMapper
        
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [name]
        
        @property { string } [app_display_name]
        
        @property { string } [app_state_name]
        
         
    */
/**
        @typedef BagPrices
        
        
        @property { number } [cashback]
        
        @property { number } [refund_credit]
        
        @property { number } [coupon_value]
        
        @property { number } [delivery_charge]
        
        @property { number } [fynd_credits]
        
        @property { number } [price_marked]
        
        @property { number } [cashback_applied]
        
        @property { number } [value_of_good]
        
        @property { number } [amount_paid_roundoff]
        
        @property { number } [amount_paid]
        
        @property { number } [cod_charges]
        
        @property { number } [price_effective]
        
        @property { number } [refund_amount]
        
        @property { number } [discount]
        
         
    */
/**
        @typedef ShipmentBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */
/**
        @typedef DpDetails
        
        
        @property { string } [gst_tag]
        
         
    */
/**
        @typedef ShipmentInvoice
        
        
        @property { string } [payment_type]
        
        @property { string } [updated_date]
        
        @property { string } [invoice_url]
        
        @property { string } [label_url]
        
        @property { string } [payment_mode]
        
        @property { number } [amount_to_collect]
        
        @property { RtoAddress } [rto_address]
        
         
    */
/**
        @typedef RtoAddress
        
        
        @property { string } [name]
        
        @property { number } [id]
        
        @property { string } [phone]
        
        @property { string } [location_type]
        
        @property { StoreAddressJson } [store_address_json]
        
        @property { string } [code]
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { number } [company_id]
        
        @property { string } [contact_person]
        
        @property { string } [state]
        
        @property { string } [store_email]
        
        @property { string } [address2]
        
         
    */
/**
        @typedef StoreAddressJson
        
        
        @property { string } [country]
        
        @property { number } [latitude]
        
        @property { string } [updated_at]
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [address_type]
        
        @property { string } [city]
        
        @property { string } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [created_at]
        
        @property { string } [contact_person]
        
        @property { string } [address_category]
        
        @property { string } [version]
        
        @property { string } [landmark]
        
         
    */
/**
        @typedef PlatformFulfillingStore
        
        
        @property { number } [packaging_material_count]
        
        @property { string } [location_type]
        
        @property { string } [code]
        
        @property { string } [city]
        
        @property { FulfillingStoreMeta } [meta]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { string } [address1]
        
        @property { string } [store_email]
        
        @property { boolean } [is_archived]
        
        @property { string } [state]
        
        @property { string } [address2]
        
        @property { string } [contact_person]
        
        @property { string } [phone]
        
        @property { boolean } [is_enabled_for_recon]
        
        @property { string } [fulfillment_channel]
        
        @property { string } [created_at]
        
        @property { number } [id]
        
        @property { string } [pincode]
        
        @property { Array<string> } [brand_store_tags]
        
        @property { number } [company_id]
        
        @property { FulfillingStoreStoreAddressJson } [store_address_json]
        
        @property { string } [updated_at]
        
        @property { string } [login_username]
        
        @property { string } [country]
        
         
    */
/**
        @typedef FulfillingStoreMeta
        
        
        @property { AdditionalContactDetails } [additional_contact_details]
        
        @property { Documents } [documents]
        
        @property { string } [gst_number]
        
        @property { string } [display_name]
        
        @property { ProductReturnConfig } [product_return_config]
        
        @property { boolean } [allow_dp_assignment_from_fynd]
        
        @property { string } [stage]
        
        @property { Timing } [timing]
        
         
    */
/**
        @typedef AdditionalContactDetails
        
        
        @property { Array<string> } [number]
        
         
    */
/**
        @typedef Documents
        
        
        @property { Gst } [gst]
        
         
    */
/**
        @typedef Gst
        
        
        @property { string } [legal_name]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { boolean } [verified]
        
         
    */
/**
        @typedef ProductReturnConfig
        
        
        @property { boolean } [on_same_store]
        
         
    */
/**
        @typedef Timing
        
        
        @property { Opening } [opening]
        
        @property { string } [weekday]
        
        @property { boolean } [open]
        
        @property { Closing } [closing]
        
         
    */
/**
        @typedef Opening
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */
/**
        @typedef Closing
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef FulfillingStoreStoreAddressJson
        
        
        @property { string } [address2]
        
        @property { string } [area]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [state]
        
        @property { string } [contact_person]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { string } [version]
        
        @property { string } [created_at]
        
        @property { string } [address_type]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [landmark]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [updated_at]
        
        @property { string } [address_category]
        
         
    */
/**
        @typedef Payments
        
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [logo]
        
        @property { string } [source]
        
        @property { string } [source_nickname]
        
        @property { number } [display_priority]
        
        @property { number } [id]
        
        @property { string } [mode]
        
        @property { string } [payment_identifier]
        
         
    */
/**
        @typedef ShipmentGst
        
        
        @property { number } [brand_calculated_amount]
        
        @property { number } [value_of_good]
        
        @property { number } [gst_fee]
        
         
    */
/**
        @typedef PlatformShipmentBrand
        
        
        @property { boolean } [credit_note_allowed]
        
        @property { string } [brand_name]
        
        @property { string } [modified_on]
        
        @property { number } [id]
        
        @property { boolean } [is_virtual_invoice]
        
        @property { string } [created_on]
        
        @property { string } [logo]
        
         
    */
/**
        @typedef Promise
        
        
        @property { Timestamp } [timestamp]
        
         
    */
/**
        @typedef Timestamp
        
        
        @property { string } [min]
        
        @property { string } [max]
        
         
    */
/**
        @typedef ShipmentTrackingDetails
        
        
        @property { string } [status]
        
        @property { string } [time]
        
        @property { boolean } [is_passed]
        
        @property { boolean } [is_current]
        
         
    */
/**
        @typedef ShipmentUser
        
        
        @property { string } [email]
        
        @property { number } [id]
        
        @property { string } [first_name]
        
        @property { string } [mobile]
        
        @property { string } [gender]
        
        @property { string } [last_name]
        
        @property { boolean } [is_anonymous_user]
        
        @property { string } [mongo_user_id]
        
         
    */
/**
        @typedef ItemsPayments
        
        
        @property { number } [display_priority]
        
        @property { number } [id]
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [logo]
        
        @property { string } [payment_identifier]
        
        @property { string } [source_nickname]
        
        @property { string } [mode]
        
        @property { string } [source]
        
         
    */
/**
        @typedef Filters
        
        
        @property { Stages } [stages]
        
         
    */
/**
        @typedef Stages
        
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { boolean } [is_default]
        
        @property { StagesFilters } [filters]
        
         
    */
/**
        @typedef StagesFilters
        
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { string } [type]
        
        @property { Options } [options]
        
         
    */
/**
        @typedef Options
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef NextOrderStatus
        
        
        @property { BagConfirmed } [bag_confirmed]
        
        @property { DpAssigned } [dp_assigned]
        
        @property { ReturnBagDelivered } [return_bag_delivered]
        
        @property { Placed } [placed]
        
        @property { DeliveryDone } [delivery_done]
        
        @property { Pending } [pending]
        
        @property { BagPacked } [bag_packed]
        
         
    */
/**
        @typedef BagConfirmed
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef DpAssigned
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef ReturnBagDelivered
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Placed
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef DeliveryDone
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Pending
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef BagPacked
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef PlatformOrderPage
        
        
        @property { string } [next]
        
        @property { string } [previous]
        
        @property { string } [type]
        
        @property { number } [size]
        
        @property { number } [current]
        
        @property { boolean } [has_next]
        
        @property { ItemTotal } [item_total]
        
         
    */
/**
        @typedef ItemTotal
        
        
        @property { number } [new]
        
        @property { number } [processing]
        
        @property { number } [returns]
        
        @property { number } [all]
        
         
    */
/**
        @typedef AppliedFilters
        
        
        @property { string } [stage]
        
        @property { Array<string> } [stores]
        
        @property { string } [from_date]
        
        @property { string } [to_date]
        
         
    */
/**
        @typedef UpdateOrderReprocessResponse
        
        
        @property { string } status
        
         
    */
/**
        @typedef PlatformOrderTrack
        
        
        @property { boolean } success
        
        @property { string } request_id
        
        @property { string } message
        
        @property { string } mobile
        
        @property { string } country_code
        
        @property { number } resend_timer
        
        @property { string } [resend_token]
        
         
    */
/**
        @typedef GetPingResponse
        
        
        @property { string } ping
        
         
    */
/**
        @typedef UpdateShipmentStatusResponse
        
        
        @property { Object } shipments
        
        @property { Array<any> } [error_shipments]
        
         
    */
/**
        @typedef UpdateShipmentStatusBody
        
        
        @property { Object } shipments
        
        @property { boolean } force_transition
        
        @property { boolean } task
        
         
    */
/**
        @typedef PlatformShipmentTrack
        
        
        @property { Results } results
        
         
    */
/**
        @typedef Results
        
        
        @property { string } [awb]
        
        @property { string } [updated_at]
        
        @property { string } [last_location_recieved_at]
        
        @property { string } [reason]
        
        @property { string } [shipment_type]
        
        @property { string } [status]
        
        @property { string } [updated_time]
        
        @property { string } [account_name]
        
         
    */
/**
        @typedef UpdateProcessShipmenstRequestBody
        
        
        @property { Array<string> } shipment_ids
        
        @property { string } expected_status
        
         
    */
/**
        @typedef UpdateProcessShipmenstRequestResponse
        
        
        @property { boolean } success
        
        @property { string } message
        
         
    */
/**
        @typedef GetVoiceCallbackResponse
        
        
        @property { string } message
        
         
    */
/**
        @typedef GetClickToCallResponse
        
        
        @property { string } message
        
         
    */
/**
        @typedef ApefaceApiError
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { number } [status]
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef GetSearchWordsData
        
        
        @property { string } [uid]
        
        @property { Array<string> } [words]
        
        @property { Object } [result]
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { Page } [page]
        
        @property { GetSearchWordsData } [items]
        
         
    */
/**
        @typedef SearchKeywordResult
        
        
        @property { Object } query
        
        @property { string } sort_on
        
         
    */
/**
        @typedef CreateSearchKeyword
        
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [words]
        
        @property { SearchKeywordResult } result
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef GetSearchWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetSearchWordsData> } [items]
        
         
    */
/**
        @typedef GetAutocompleteWordsData
        
        
        @property { string } [uid]
        
        @property { Array<string> } [words]
        
        @property { Array<Object> } [results]
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
         
    */
/**
        @typedef AutocompletePageAction
        
        
        @property { Object } query
        
        @property { string } type
        
        @property { Object } [params]
        
        @property { string } [url]
        
         
    */
/**
        @typedef AutocompleteAction
        
        
        @property { string } [type]
        
        @property { AutocompletePageAction } [page]
        
         
    */
/**
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
         
    */
/**
        @typedef AutocompleteResult
        
        
        @property { Object } [_custom_json]
        
        @property { string } [display]
        
        @property { AutocompleteAction } [action]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [words]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { Array<string> } [words]
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
        @property { Array<Object> } [results]
        
         
    */
/**
        @typedef ProductBundleItem
        
        
        @property { boolean } [auto_add_to_cart]
        
        @property { boolean } [allow_remove]
        
        @property { number } product_uid
        
        @property { boolean } [auto_select]
        
        @property { number } max_quantity
        
        @property { number } min_quantity
        
         
    */
/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { string } choice
        
        @property { string } slug
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { boolean } [same_store_assignment]
        
        @property { Object } [created_by]
        
        @property { string } name
        
        @property { Object } [modified_by]
        
        @property { boolean } is_active
        
        @property { string } [id]
        
        @property { Array<string> } [page_visibility]
        
        @property { Array<ProductBundleItem> } products
        
        @property { number } [company_id]
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
         
    */
/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
         
    */
/**
        @typedef ProductBundleRequest
        
        
        @property { string } choice
        
        @property { string } slug
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { boolean } [same_store_assignment]
        
        @property { Object } [created_by]
        
        @property { string } name
        
        @property { Object } [modified_by]
        
        @property { boolean } is_active
        
        @property { Array<string> } [page_visibility]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
         
    */
/**
        @typedef Size
        
        
        @property { number } [quantity]
        
        @property { string } [display]
        
        @property { boolean } [is_available]
        
        @property { string } [value]
        
         
    */
/**
        @typedef LimitedProductData
        
        
        @property { Object } [attributes]
        
        @property { number } [uid]
        
        @property { Array<string> } [sizes]
        
        @property { string } [slug]
        
        @property { Object } [identifier]
        
        @property { number } [quantity]
        
        @property { string } [name]
        
        @property { string } [short_description]
        
        @property { string } [country_of_origin]
        
        @property { string } [item_code]
        
        @property { Array<string> } [images]
        
        @property { Object } [price]
        
         
    */
/**
        @typedef Price
        
        
        @property { number } [max_effective]
        
        @property { number } [min_marked]
        
        @property { number } [min_effective]
        
        @property { string } [currency]
        
        @property { number } [max_marked]
        
         
    */
/**
        @typedef GetProducts
        
        
        @property { Array<Size> } [sizes]
        
        @property { boolean } [allow_remove]
        
        @property { boolean } [auto_add_to_cart]
        
        @property { number } [product_uid]
        
        @property { LimitedProductData } [product_details]
        
        @property { boolean } [auto_select]
        
        @property { number } [max_quantity]
        
        @property { number } [min_quantity]
        
        @property { Price } [price]
        
         
    */
/**
        @typedef GetProductBundleResponse
        
        
        @property { string } [choice]
        
        @property { string } [slug]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { boolean } [same_store_assignment]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [page_visibility]
        
        @property { Array<GetProducts> } [products]
        
        @property { number } [company_id]
        
         
    */
/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { string } choice
        
        @property { string } slug
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { boolean } [same_store_assignment]
        
        @property { string } name
        
        @property { Object } [modified_by]
        
        @property { boolean } is_active
        
        @property { Array<string> } [page_visibility]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef ListSizeGuide
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef Meta
        
        
        @property { string } [unit]
        
        @property { Array<Object> } [values]
        
        @property { Object } [headers]
        
         
    */
/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */
/**
        @typedef ValidateSizeGuide
        
        
        @property { string } [id]
        
        @property { string } name
        
        @property { string } [subtitle]
        
        @property { Object } [modified_by]
        
        @property { string } title
        
        @property { boolean } [active]
        
        @property { string } [description]
        
        @property { number } [brand_id]
        
        @property { string } [modified_on]
        
        @property { number } [company_id]
        
        @property { Object } [created_by]
        
        @property { string } [tag]
        
        @property { string } [created_on]
        
        @property { Guide } [guide]
        
        @property { string } [image]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { number } [uid]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef SizeGuideResponse
        
        
        @property { Object } [created_by]
        
        @property { string } [id]
        
        @property { Object } [modified_by]
        
        @property { string } [name]
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
        @property { boolean } [active]
        
        @property { number } [brand_id]
        
        @property { number } [company_id]
        
        @property { string } [modified_on]
        
        @property { string } [tag]
        
        @property { string } [created_on]
        
        @property { Object } [guide]
        
         
    */
/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { Array<string> } [filter_types]
        
        @property { Array<Object> } [units]
        
         
    */
/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
    */
/**
        @typedef MetaDataListingSortMetaResponse
        
        
        @property { string } [display]
        
        @property { string } [key]
        
         
    */
/**
        @typedef MetaDataListingSortResponse
        
        
        @property { Array<MetaDataListingSortMetaResponse> } [data]
        
         
    */
/**
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingFilterResponse } filter
        
        @property { MetaDataListingSortResponse } sort
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [variant]
        
        @property { Object } [compare]
        
        @property { Object } [similar]
        
        @property { Object } [detail]
        
         
    */
/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { MetaDataListingResponse } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */
/**
        @typedef ProductSize
        
        
        @property { number } min
        
        @property { number } max
        
         
    */
/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { string } [logo]
        
        @property { string } name
        
        @property { boolean } is_active
        
        @property { string } key
        
        @property { ProductSize } size
        
        @property { number } priority
        
        @property { string } display_type
        
         
    */
/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } [logo]
        
        @property { string } [subtitle]
        
        @property { boolean } is_active
        
        @property { string } key
        
        @property { string } [title]
        
        @property { ProductSize } [size]
        
        @property { number } priority
        
         
    */
/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProduct
        
        
        @property { ConfigurationProductVariant } variant
        
        @property { ConfigurationProductSimilar } similar
        
         
    */
/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [end]
        
        @property { number } [start]
        
         
    */
/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Object } [map]
        
        @property { string } [sort]
        
        @property { Array<ConfigurationBucketPoints> } [bucket_points]
        
        @property { string } [value]
        
        @property { string } [condition]
        
         
    */
/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } type
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { boolean } is_active
        
        @property { string } key
        
        @property { number } priority
        
        @property { ConfigurationListingFilterValue } [value_config]
        
         
    */
/**
        @typedef ConfigurationListingFilter
        
        
        @property { boolean } allow_single
        
        @property { Array<ConfigurationListingFilterConfig> } [attribute_config]
        
         
    */
/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { boolean } is_active
        
        @property { string } key
        
        @property { number } priority
        
         
    */
/**
        @typedef ConfigurationListingSort
        
        
        @property { string } default_key
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingFilter } filter
        
        @property { ConfigurationListingSort } sort
        
         
    */
/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } [config_id]
        
        @property { string } config_type
        
        @property { string } [id]
        
        @property { ConfigurationProduct } [product]
        
        @property { ConfigurationListing } [listing]
        
        @property { string } app_id
        
         
    */
/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { boolean } [is_default]
        
        @property { AppCatalogConfiguration } [data]
        
         
    */
/**
        @typedef AppConfiguration
        
        
        @property { string } [config_id]
        
        @property { string } config_type
        
        @property { ConfigurationProduct } [product]
        
        @property { ConfigurationListing } [listing]
        
        @property { string } app_id
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [filter]
        
        @property { Object } [sort]
        
         
    */
/**
        @typedef EntityConfiguration
        
        
        @property { string } [config_id]
        
        @property { string } config_type
        
        @property { string } [id]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { string } app_id
        
         
    */
/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { boolean } [is_default]
        
        @property { EntityConfiguration } [data]
        
         
    */
/**
        @typedef ProductSortOn
        
        
        @property { string } [name]
        
        @property { boolean } [is_selected]
        
        @property { string } [value]
        
         
    */
/**
        @typedef ProductFiltersKey
        
        
        @property { string } name
        
        @property { string } display
        
        @property { string } [logo]
        
        @property { string } [kind]
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { number } [count]
        
        @property { string } display
        
        @property { number } [min]
        
        @property { string } [display_format]
        
        @property { string } [currency_symbol]
        
        @property { string } [currency_code]
        
        @property { number } [selected_max]
        
        @property { boolean } is_selected
        
        @property { string } [query_format]
        
        @property { string } value
        
        @property { number } [selected_min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef ProductFilters
        
        
        @property { ProductFiltersKey } key
        
        @property { Array<ProductFiltersValue> } values
        
         
    */
/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductSortOn> } [sort_on]
        
        @property { Array<ProductFilters> } [filters]
        
         
    */
/**
        @typedef BannerImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [url]
        
         
    */
/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [portrait]
        
        @property { BannerImage } [landscape]
        
         
    */
/**
        @typedef ProductListingActionPage
        
        
        @property { Object } [query]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ProductListingAction
        
        
        @property { string } [type]
        
        @property { ProductListingActionPage } [page]
        
         
    */
/**
        @typedef Media1
        
        
        @property { string } [type]
        
        @property { Object } [meta]
        
        @property { string } url
        
         
    */
/**
        @typedef GetCollectionDetailNest
        
        
        @property { Object } [meta]
        
        @property { Object } [cron]
        
        @property { boolean } [is_active]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Object } [_schedule]
        
        @property { string } [description]
        
        @property { ProductListingAction } [action]
        
        @property { string } [type]
        
        @property { boolean } [allow_sort]
        
        @property { Object } [badge]
        
        @property { Array<string> } [tag]
        
        @property { string } [app_id]
        
        @property { string } [uid]
        
        @property { string } [slug]
        
        @property { Media1 } [logo]
        
        @property { Object } [query]
        
        @property { boolean } [allow_facets]
        
         
    */
/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { boolean } [is_selected]
        
         
    */
/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { boolean } [is_selected]
        
         
    */
/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterType> } [type]
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
         
    */
/**
        @typedef GetCollectionListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { CollectionListingFilter } [filters]
        
         
    */
/**
        @typedef CollectionImage
        
        
        @property { string } aspect_ratio
        
        @property { string } url
        
         
    */
/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } portrait
        
        @property { CollectionImage } landscape
        
         
    */
/**
        @typedef SeoDetail
        
        
        @property { string } [description]
        
        @property { string } [title]
        
         
    */
/**
        @typedef Schedule
        
        
        @property { string } [cron]
        
        @property { number } [duration]
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef UserInfo
        
        
        @property { string } [username]
        
        @property { string } [uid]
        
        @property { string } [user_id]
        
        @property { string } [email]
        
         
    */
/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */
/**
        @typedef CreateCollection
        
        
        @property { Object } [meta]
        
        @property { Array<string> } [tags]
        
        @property { boolean } [is_active]
        
        @property { CollectionBanner } banners
        
        @property { SeoDetail } [seo]
        
        @property { string } name
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Schedule } [_schedule]
        
        @property { string } [description]
        
        @property { string } [sort_on]
        
        @property { Object } [_custom_json]
        
        @property { boolean } [published]
        
        @property { string } type
        
        @property { boolean } [allow_sort]
        
        @property { UserInfo } [created_by]
        
        @property { CollectionBadge } [badge]
        
        @property { Object } [_locale_language]
        
        @property { string } app_id
        
        @property { string } slug
        
        @property { CollectionImage } logo
        
        @property { UserInfo } [modified_by]
        
        @property { Object } [query]
        
        @property { boolean } [allow_facets]
        
         
    */
/**
        @typedef CollectionCreateResponse
        
        
        @property { string } [app_id]
        
        @property { string } [type]
        
        @property { string } [slug]
        
        @property { Object } [meta]
        
        @property { BannerImage } [logo]
        
        @property { Object } [cron]
        
        @property { string } [name]
        
        @property { boolean } [allow_sort]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Object } [badge]
        
        @property { Object } [query]
        
        @property { Object } [_schedule]
        
        @property { boolean } [allow_facets]
        
        @property { string } [description]
        
        @property { Array<string> } [tag]
        
        @property { ImageUrls } [banners]
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { string } [app_id]
        
        @property { string } [type]
        
        @property { string } [slug]
        
        @property { Object } [meta]
        
        @property { Media1 } [logo]
        
        @property { Object } [cron]
        
        @property { string } [name]
        
        @property { boolean } [allow_sort]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Object } [badge]
        
        @property { Object } [query]
        
        @property { Object } [_schedule]
        
        @property { boolean } [allow_facets]
        
        @property { string } [description]
        
        @property { Array<string> } [tag]
        
        @property { ImageUrls } [banners]
        
         
    */
/**
        @typedef Price1
        
        
        @property { string } [currency_symbol]
        
        @property { number } [min]
        
        @property { string } [currency_code]
        
        @property { number } [max]
        
         
    */
/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [effective]
        
        @property { Price1 } [marked]
        
         
    */
/**
        @typedef ProductListingDetail
        
        
        @property { Object } [attributes]
        
        @property { Array<string> } [tryouts]
        
        @property { number } [rating_count]
        
        @property { string } [image_nature]
        
        @property { ProductListingPrice } [price]
        
        @property { boolean } [sellable]
        
        @property { string } [name]
        
        @property { Object } [promo_meta]
        
        @property { string } [short_description]
        
        @property { string } [description]
        
        @property { number } [rating]
        
        @property { boolean } [has_variant]
        
        @property { string } [type]
        
        @property { Array<Media1> } [medias]
        
        @property { string } [discount]
        
        @property { string } [product_online_date]
        
        @property { string } [color]
        
        @property { Array<string> } [similars]
        
        @property { number } [uid]
        
        @property { string } slug
        
        @property { Object } [teaser_tag]
        
        @property { string } [item_type]
        
        @property { Array<string> } [highlights]
        
         
    */
/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductSortOn> } [sort_on]
        
        @property { Page } [page]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Array<ProductFilters> } [filters]
        
         
    */
/**
        @typedef CollectionItemRequest
        
        
        @property { number } page_size
        
        @property { number } page_no
        
         
    */
/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef CatalogInsightItem
        
        
        @property { number } [sellable_count]
        
        @property { number } [count]
        
        @property { number } [out_of_stock_count]
        
         
    */
/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [available_sizes]
        
        @property { string } [name]
        
        @property { number } [total_articles]
        
        @property { number } [article_freshness]
        
        @property { number } [total_sizes]
        
        @property { number } [available_articles]
        
         
    */
/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightItem } [item]
        
        @property { CatalogInsightBrand } [brand_distribution]
        
         
    */
/**
        @typedef CrossSellingData
        
        
        @property { number } [articles]
        
        @property { number } [products]
        
         
    */
/**
        @typedef CrossSellingResponse
        
        
        @property { CatalogInsightBrand } [brand_distribution]
        
        @property { CrossSellingData } [data]
        
         
    */
/**
        @typedef OptInPostRequest
        
        
        @property { boolean } [enabled]
        
        @property { Array<number> } [brand_ids]
        
        @property { string } opt_level
        
        @property { Array<number> } [store_ids]
        
         
    */
/**
        @typedef CompanyOptIn
        
        
        @property { Array<number> } store_ids
        
        @property { Object } [created_by]
        
        @property { Object } [modified_by]
        
        @property { number } created_on
        
        @property { string } platform
        
        @property { boolean } enabled
        
        @property { number } company_id
        
        @property { number } modified_on
        
        @property { Array<number> } brand_ids
        
        @property { string } opt_level
        
         
    */
/**
        @typedef GetOptInPlatform
        
        
        @property { Page } page
        
        @property { Array<CompanyOptIn> } items
        
         
    */
/**
        @typedef OptinCompanyDetail
        
        
        @property { number } [uid]
        
        @property { string } [company_type]
        
        @property { string } [business_type]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [company_id]
        
        @property { number } [brand_id]
        
        @property { number } [total_article]
        
        @property { string } [brand_name]
        
         
    */
/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandDetail> } [items]
        
         
    */
/**
        @typedef OptinCompanyMetrics
        
        
        @property { string } [company]
        
        @property { number } [store]
        
        @property { number } [brand]
        
         
    */
/**
        @typedef StoreDetail
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { Array<Object> } [additional_contacts]
        
        @property { Array<Object> } [documents]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { string } [display_name]
        
        @property { number } [company_id]
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
        @property { Object } [timing]
        
         
    */
/**
        @typedef OptinStoreDetails
        
        
        @property { Page } [page]
        
        @property { Array<StoreDetail> } [items]
        
         
    */
/**
        @typedef BasePage
        
        
        @property { string } [type]
        
        @property { string } [next_id]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
        @property { boolean } [has_previous]
        
        @property { number } [size]
        
        @property { number } [current]
        
         
    */
/**
        @typedef MultipleCommon
        
        
        @property { string } [uid]
        
         
    */
/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { BasePage } [page]
        
        @property { MultipleCommon } [items]
        
         
    */
/**
        @typedef PTErrorResponse
        
        
        @property { Object } [meta]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { string } [message]
        
        @property { Object } [errors]
        
         
    */
/**
        @typedef BasePage1
        
        
        @property { string } [type]
        
        @property { string } [next_id]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
        @property { boolean } [has_previous]
        
        @property { number } [size]
        
        @property { number } [current]
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [contact]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */
/**
        @typedef GetDepartment
        
        
        @property { number } [uid]
        
        @property { string } [slug]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [logo]
        
        @property { UserSerializer } [created_by]
        
        @property { string } [name]
        
        @property { UserSerializer } [modified_by]
        
        @property { boolean } [is_active]
        
        @property { string } [item_type]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { number } [page_size]
        
        @property { string } [search]
        
        @property { number } [priority_order]
        
        @property { number } [page_no]
        
         
    */
/**
        @typedef DepartmentsResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<GetDepartment> } [items]
        
         
    */
/**
        @typedef DepartmentErrorResponse
        
        
        @property { Object } [meta]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { string } [message]
        
        @property { Object } [errors]
        
         
    */
/**
        @typedef ProductTemplate
        
        
        @property { Array<string> } [attributes]
        
        @property { boolean } is_physical
        
        @property { string } slug
        
        @property { Array<string> } [departments]
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { Object } [modified_by]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_archived]
        
        @property { string } [description]
        
        @property { string } [modified_on]
        
        @property { Array<string> } [categories]
        
        @property { Object } [created_by]
        
        @property { string } [tag]
        
        @property { string } [created_on]
        
         
    */
/**
        @typedef TemplatesResponse
        
        
        @property { BasePage } [page]
        
        @property { ProductTemplate } [items]
        
         
    */
/**
        @typedef TemplatesValidationResponse
        
        
        @property { MultipleCommon } [data]
        
         
    */
/**
        @typedef InventoryValidationResponse
        
        
        @property { string } [message]
        
        @property { MultipleCommon } [data]
        
         
    */
/**
        @typedef HSNData
        
        
        @property { Array<string> } [hsn_code]
        
        @property { Array<string> } [country_of_origin]
        
         
    */
/**
        @typedef HSNCodesResponse
        
        
        @property { string } [message]
        
        @property { HSNData } [data]
        
         
    */
/**
        @typedef ProductConfligurationDownloads
        
        
        @property { Array<MultipleCommon> } [data]
        
        @property { boolean } [multivalue]
        
         
    */
/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalog_id]
        
         
    */
/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [facebook]
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [ajio]
        
         
    */
/**
        @typedef Media2
        
        
        @property { string } portrait
        
        @property { string } landscape
        
        @property { string } logo
        
         
    */
/**
        @typedef Hierarchy
        
        
        @property { number } l2
        
        @property { number } department
        
        @property { number } l1
        
         
    */
/**
        @typedef Category
        
        
        @property { number } [uid]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<number> } departments
        
        @property { string } [slug]
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { CategoryMapping } [marketplaces]
        
        @property { boolean } is_active
        
        @property { Object } [modified_by]
        
        @property { Media2 } [media]
        
        @property { string } [created_on]
        
        @property { number } [priority]
        
        @property { number } level
        
        @property { string } [modified_on]
        
        @property { Object } [created_by]
        
        @property { string } [_id]
        
        @property { Array<Hierarchy> } [hierarchy]
        
         
    */
/**
        @typedef CategoryResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<Category> } [items]
        
         
    */
/**
        @typedef CategoryRequestBody
        
        
        @property { Array<string> } [tryouts]
        
        @property { Array<number> } departments
        
        @property { string } [slug]
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { CategoryMapping } [marketplaces]
        
        @property { boolean } is_active
        
        @property { Media2 } [media]
        
        @property { number } [priority]
        
        @property { number } level
        
        @property { Array<Hierarchy> } [hierarchy]
        
         
    */
/**
        @typedef CategoryCreateResponse
        
        
        @property { number } [uid]
        
        @property { string } [message]
        
         
    */
/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef PageData
        
        
        @property { boolean } [has_previous]
        
        @property { boolean } [has_next]
        
        @property { number } [item_total]
        
        @property { number } [size]
        
        @property { string } [current]
        
         
    */
/**
        @typedef UserCommon
        
        
        @property { number } [company_id]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */
/**
        @typedef VerifiedBy
        
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */
/**
        @typedef Attributes
        
        
        @property { Array<string> } [l3_mapping]
        
        @property { string } [material]
        
        @property { string } [meta_nature]
        
        @property { string } [verified_on]
        
        @property { string } [image_nature]
        
        @property { string } [product_fit]
        
        @property { string } [stage]
        
        @property { Array<string> } [gender]
        
        @property { string } [sleeve_length]
        
        @property { string } [modified_on]
        
        @property { string } [neck_type]
        
        @property { string } [color]
        
        @property { boolean } [is_image_less_product]
        
        @property { UserCommon } [created_by]
        
        @property { string } [created_on]
        
        @property { string } [pattern]
        
        @property { string } [essential]
        
        @property { string } [primary_color]
        
        @property { UserCommon } [modified_by]
        
        @property { string } [primary_material]
        
        @property { VerifiedBy } [verified_by]
        
         
    */
/**
        @typedef Logo
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
        @property { number } [aspect_ratio_f]
        
        @property { string } [url]
        
         
    */
/**
        @typedef Brand
        
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { Logo } [logo]
        
         
    */
/**
        @typedef ProductPublished
        
        
        @property { number } [product_online_date]
        
        @property { boolean } [is_set]
        
         
    */
/**
        @typedef Product
        
        
        @property { Attributes } [attributes]
        
        @property { Array<number> } [departments]
        
        @property { boolean } [is_active]
        
        @property { number } [company_id]
        
        @property { string } [item_code]
        
        @property { string } [size_guide]
        
        @property { boolean } [multi_size]
        
        @property { Brand } [brand]
        
        @property { Array<string> } [images]
        
        @property { string } [name]
        
        @property { Array<string> } [media]
        
        @property { string } [category_slug]
        
        @property { string } [description]
        
        @property { string } [currency]
        
        @property { string } [template_tag]
        
        @property { boolean } [is_set]
        
        @property { ProductPublished } [product_publish]
        
        @property { string } [hsn_code]
        
        @property { number } [uid]
        
        @property { Array<Object> } [sizes]
        
        @property { string } [slug]
        
        @property { string } [id]
        
        @property { string } [item_type]
        
        @property { Array<string> } [all_sizes]
        
        @property { string } [highlights]
        
        @property { string } [country_of_origin]
        
        @property { boolean } [is_dependent]
        
         
    */
/**
        @typedef ProductListingResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Product> } [items]
        
         
    */
/**
        @typedef ReturnConfig
        
        
        @property { boolean } [returnable]
        
        @property { string } [unit]
        
        @property { number } [time]
        
         
    */
/**
        @typedef CustomOrder
        
        
        @property { boolean } [is_custom_order]
        
        @property { string } [manufacturing_time_unit]
        
        @property { number } [manufacturing_time]
        
         
    */
/**
        @typedef OrderQuantity
        
        
        @property { number } [maximum]
        
        @property { number } [minimum]
        
        @property { boolean } [is_set]
        
         
    */
/**
        @typedef ProductPublish
        
        
        @property { string } [product_online_date]
        
        @property { boolean } [is_set]
        
         
    */
/**
        @typedef Trader
        
        
        @property { string } name
        
        @property { string } address
        
         
    */
/**
        @typedef TeaserTag
        
        
        @property { string } [tag]
        
        @property { string } [url]
        
         
    */
/**
        @typedef ProductCreateUpdate
        
        
        @property { string } [requester]
        
        @property { Array<number> } departments
        
        @property { string } [change_request_id]
        
        @property { Array<string> } [tags]
        
        @property { Object } [variants]
        
        @property { ReturnConfig } [return_config]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [product_group_tag]
        
        @property { number } company_id
        
        @property { string } item_code
        
        @property { string } [size_guide]
        
        @property { CustomOrder } [custom_order]
        
        @property { boolean } [multi_size]
        
        @property { string } name
        
        @property { string } [short_description]
        
        @property { Array<Media1> } [media]
        
        @property { string } category_slug
        
        @property { string } [description]
        
        @property { string } currency
        
        @property { Object } [_custom_json]
        
        @property { string } template_tag
        
        @property { number } brand_uid
        
        @property { OrderQuantity } [moq]
        
        @property { boolean } [is_set]
        
        @property { ProductPublish } [product_publish]
        
        @property { string } hsn_code
        
        @property { Trader } [trader]
        
        @property { boolean } [is_image_less_product]
        
        @property { number } [uid]
        
        @property { string } slug
        
        @property { TeaserTag } [teaser_tag]
        
        @property { string } item_type
        
        @property { Array<string> } [highlights]
        
        @property { string } [trader_type]
        
        @property { string } country_of_origin
        
        @property { boolean } [is_dependent]
        
        @property { number } [no_of_boxes]
        
         
    */
/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */
/**
        @typedef UserDetail
        
        
        @property { string } [full_name]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */
/**
        @typedef ProductBulkRequest
        
        
        @property { string } [stage]
        
        @property { number } [total]
        
        @property { UserDetail } [created_by]
        
        @property { ProductTemplate } [template]
        
        @property { string } [file_path]
        
        @property { number } [cancelled]
        
        @property { UserDetail } [modified_by]
        
        @property { boolean } [is_active]
        
        @property { number } [succeed]
        
        @property { Array<string> } [cancelled_records]
        
        @property { Array<string> } [failed_records]
        
        @property { string } [modified_on]
        
        @property { number } [company_id]
        
        @property { number } [failed]
        
        @property { string } [created_on]
        
        @property { string } [template_tag]
        
         
    */
/**
        @typedef ProductBulkRequestList
        
        
        @property { PageData } [page]
        
        @property { ProductBulkRequest } [items]
        
         
    */
/**
        @typedef UserInfo1
        
        
        @property { string } [username]
        
        @property { string } [uid]
        
        @property { string } [user_id]
        
        @property { string } [email]
        
         
    */
/**
        @typedef BulkJob
        
        
        @property { string } [stage]
        
        @property { number } total
        
        @property { string } [custom_template_tag]
        
        @property { string } [file_path]
        
        @property { UserInfo1 } [modified_by]
        
        @property { number } [cancelled]
        
        @property { boolean } [is_active]
        
        @property { number } [failed]
        
        @property { string } [tracking_url]
        
        @property { number } [succeed]
        
        @property { Array<Object> } [cancelled_records]
        
        @property { Array<Object> } [failed_records]
        
        @property { string } [modified_on]
        
        @property { number } company_id
        
        @property { UserInfo1 } [created_by]
        
        @property { string } created_on
        
        @property { string } [template_tag]
        
         
    */
/**
        @typedef BulkProductRequest
        
        
        @property { number } company_id
        
        @property { string } batch_id
        
        @property { Array<Object> } data
        
        @property { string } template_tag
        
         
    */
/**
        @typedef NestedTags
        
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef ProductTagsViewResponse
        
        
        @property { NestedTags } [items]
        
         
    */
/**
        @typedef Items
        
        
        @property { string } [stage]
        
        @property { number } [total]
        
        @property { string } [id]
        
        @property { string } [file_path]
        
        @property { UserCommon } [modified_by]
        
        @property { number } [cancelled]
        
        @property { number } [failed]
        
        @property { boolean } [is_active]
        
        @property { string } [tracking_url]
        
        @property { number } [succeed]
        
        @property { Array<string> } [cancelled_records]
        
        @property { Array<string> } [failed_records]
        
        @property { string } [modified_on]
        
        @property { number } [company_id]
        
        @property { UserCommon } [created_by]
        
        @property { number } [retry]
        
        @property { string } [created_on]
        
         
    */
/**
        @typedef BulkAssetResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Items> } [items]
        
         
    */
/**
        @typedef ProductBulkAssets
        
        
        @property { number } [company_id]
        
        @property { Object } user
        
        @property { string } url
        
         
    */
/**
        @typedef InventoryRequest
        
        
        @property { number } [total]
        
        @property { string } [size]
        
        @property { number } [page_size]
        
        @property { string } [search]
        
        @property { number } [page_no]
        
         
    */
/**
        @typedef ItemQuery
        
        
        @property { string } [item_code]
        
        @property { number } [uid]
        
        @property { number } [brand_uid]
        
         
    */
/**
        @typedef SetSize
        
        
        @property { number } pieces
        
        @property { string } size
        
         
    */
/**
        @typedef SizeDistribution
        
        
        @property { Array<SetSize> } sizes
        
         
    */
/**
        @typedef InventorySet
        
        
        @property { number } [quantity]
        
        @property { SizeDistribution } size_distribution
        
         
    */
/**
        @typedef GTIN
        
        
        @property { boolean } [primary]
        
        @property { string } gtin_value
        
        @property { string } gtin_type
        
         
    */
/**
        @typedef InvSize
        
        
        @property { number } [price_transfer]
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } [item_width]
        
        @property { boolean } [is_set]
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { number } quantity
        
        @property { InventorySet } [set]
        
        @property { string } size
        
        @property { string } store_code
        
        @property { number } [item_weight]
        
        @property { number } price_effective
        
        @property { string } currency
        
        @property { Array<GTIN> } identifiers
        
        @property { number } [item_length]
        
        @property { number } [item_height]
        
        @property { number } price
        
         
    */
/**
        @typedef InventoryRequest1
        
        
        @property { number } company_id
        
        @property { ItemQuery } item
        
        @property { Array<InvSize> } sizes
        
         
    */
/**
        @typedef BulkRequestGet
        
        
        @property { string } [stage]
        
        @property { string } [start_date]
        
        @property { number } [total]
        
        @property { string } [custom_template_tag]
        
        @property { string } [end_date]
        
        @property { number } [page_size]
        
        @property { string } [search]
        
        @property { number } [page_no]
        
        @property { string } [template_tag]
        
         
    */
/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */
/**
        @typedef Size1
        
        
        @property { number } [price_transfer]
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } [item_width]
        
        @property { boolean } [is_set]
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { number } quantity
        
        @property { string } seller_identifier
        
        @property { InventorySet } [set]
        
        @property { string } [size]
        
        @property { string } store_code
        
        @property { number } [item_weight]
        
        @property { number } price_effective
        
        @property { string } currency
        
        @property { Array<Object> } [identifiers]
        
        @property { number } [item_length]
        
        @property { number } [item_height]
        
        @property { number } price
        
         
    */
/**
        @typedef InventoryBulkRequest
        
        
        @property { number } company_id
        
        @property { Object } [user]
        
        @property { Array<Size1> } sizes
        
        @property { string } batch_id
        
         
    */
/**
        @typedef InventoryExportJob
        
        
        @property { string } task_id
        
        @property { string } [completed_on]
        
        @property { number } seller_id
        
        @property { string } [url]
        
        @property { Object } [request_params]
        
        @property { string } [trigger_on]
        
        @property { string } [status]
        
         
    */
/**
        @typedef InventoryExportRequest
        
        
        @property { string } [type]
        
        @property { Array<number> } [store]
        
        @property { Array<number> } [brand]
        
         
    */
/**
        @typedef FilerList
        
        
        @property { string } [display]
        
        @property { string } [value]
        
         
    */
/**
        @typedef InventoryConfig
        
        
        @property { boolean } [multivalues]
        
        @property { Array<FilerList> } [data]
        
         
    */
/**
        @typedef FailedResponse
        
        
        @property { string } message
        
         
    */
/**
        @typedef CDN
        
        
        @property { string } url
        
         
    */
/**
        @typedef Upload
        
        
        @property { number } expiry
        
        @property { string } url
        
         
    */
/**
        @typedef StartResponse
        
        
        @property { string } file_name
        
        @property { string } file_path
        
        @property { string } content_type
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
         
    */
/**
        @typedef StartRequest
        
        
        @property { string } file_name
        
        @property { string } content_type
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef CompleteResponse
        
        
        @property { string } _id
        
        @property { string } file_name
        
        @property { string } file_path
        
        @property { string } content_type
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } created_on
        
        @property { string } modified_on
        
         
    */
/**
        @typedef Opts
        
        
        @property { number } [attempts]
        
        @property { number } [timestamp]
        
        @property { number } [delay]
        
         
    */
/**
        @typedef CopyFileTask
        
        
        @property { string } id
        
        @property { string } name
        
        @property { BulkRequest } data
        
        @property { Opts } opts
        
        @property { number } progress
        
        @property { number } delay
        
        @property { number } timestamp
        
        @property { number } attempts_made
        
        @property { Array<string> } [stacktrace]
        
        @property { number } finished_on
        
        @property { number } processed_on
        
         
    */
/**
        @typedef BulkResponse
        
        
        @property { string } tracking_url
        
        @property { CopyFileTask } task
        
         
    */
/**
        @typedef ReqConfiguration
        
        
        @property { number } [concurrency]
        
         
    */
/**
        @typedef Destination
        
        
        @property { string } namespace
        
        @property { string } rewrite
        
        @property { string } [basepath]
        
         
    */
/**
        @typedef BulkRequest
        
        
        @property { Array<string> } urls
        
        @property { Destination } destination
        
        @property { ReqConfiguration } [configuration]
        
         
    */
/**
        @typedef Urls
        
        
        @property { string } url
        
        @property { string } signed_url
        
        @property { number } expiry
        
         
    */
/**
        @typedef SignUrlResponse
        
        
        @property { Array<Urls> } urls
        
         
    */
/**
        @typedef SignUrlRequest
        
        
        @property { number } expiry
        
        @property { Array<string> } urls
        
         
    */
/**
        @typedef DbRecord
        
        
        @property { boolean } success
        
        @property { Array<string> } tags
        
        @property { string } _id
        
        @property { string } file_name
        
        @property { string } [operation]
        
        @property { string } namespace
        
        @property { string } content_type
        
        @property { string } file_path
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } created_on
        
        @property { string } modified_on
        
         
    */
/**
        @typedef BrowseResponse
        
        
        @property { Array<DbRecord> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef RedirectDevice
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */
/**
        @typedef WebRedirect
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Redirects
        
        
        @property { RedirectDevice } [ios]
        
        @property { RedirectDevice } [android]
        
        @property { WebRedirect } [web]
        
        @property { boolean } [force_web]
        
         
    */
/**
        @typedef CampaignShortLink
        
        
        @property { string } [source]
        
        @property { string } [medium]
        
         
    */
/**
        @typedef Attribution
        
        
        @property { string } [campaign_cookie_expiry]
        
         
    */
/**
        @typedef SocialMediaTags
        
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { string } [image]
        
         
    */
/**
        @typedef ShortLinkReq
        
        
        @property { string } title
        
        @property { string } url
        
        @property { string } [hash]
        
        @property { boolean } [active]
        
        @property { string } [expire_at]
        
        @property { boolean } [enable_tracking]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [social_media_tags]
        
        @property { number } [count]
        
         
    */
/**
        @typedef UrlInfo
        
        
        @property { string } [original]
        
        @property { string } [short]
        
        @property { string } [hash]
        
         
    */
/**
        @typedef ShortLinkRes
        
        
        @property { string } [title]
        
        @property { UrlInfo } [url]
        
        @property { string } [created_by]
        
        @property { boolean } [app_redirect]
        
        @property { string } [fallback]
        
        @property { boolean } [active]
        
        @property { string } [_id]
        
        @property { boolean } [enable_tracking]
        
        @property { string } [expire_at]
        
        @property { string } [application]
        
        @property { string } [user_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [social_media_tags]
        
        @property { number } [count]
        
         
    */
/**
        @typedef ShortLinkList
        
        
        @property { Array<ShortLinkRes> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ErrorRes
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef ApplicationInventory
        
        
        @property { AppInventoryConfig } [inventory]
        
        @property { AuthenticationConfig } [authentication]
        
        @property { ArticleAssignmentConfig } [article_assignment]
        
        @property { RewardPointsConfig } [reward_points]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { AppOrderConfig } [order]
        
        @property { AppLogisticsConfig } [logistics]
        
        @property { string } [business]
        
        @property { boolean } [comms_enabled]
        
        @property { Array<string> } [platforms]
        
        @property { string } [_id]
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { string } [app]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [modified_by]
        
         
    */
/**
        @typedef AppInventoryConfig
        
        
        @property { InventoryBrand } [brand]
        
        @property { InventoryStore } [store]
        
        @property { InventoryCategory } [category]
        
        @property { InventoryPrice } [price]
        
        @property { InventoryDiscount } [discount]
        
        @property { boolean } [out_of_stock]
        
        @property { boolean } [franchise_enabled]
        
        @property { Array<any> } [exclude_category]
        
        @property { Array<string> } [image]
        
        @property { Array<any> } [company_store]
        
         
    */
/**
        @typedef InventoryBrand
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [brands]
        
         
    */
/**
        @typedef InventoryStore
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [stores]
        
        @property { AppStoreRules } [rules]
        
         
    */
/**
        @typedef AppStoreRules
        
        
        @property { Array<number> } [companies]
        
        @property { Array<any> } [brands]
        
         
    */
/**
        @typedef InventoryCategory
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [categories]
        
         
    */
/**
        @typedef InventoryPrice
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef InventoryDiscount
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef AuthenticationConfig
        
        
        @property { boolean } [required]
        
        @property { string } [provider]
        
         
    */
/**
        @typedef ArticleAssignmentConfig
        
        
        @property { ArticleAssignmentRules } [rules]
        
        @property { boolean } [post_order_reassignment]
        
        @property { Array<any> } [enforced_stores]
        
         
    */
/**
        @typedef ArticleAssignmentRules
        
        
        @property { StorePriority } [store_priority]
        
         
    */
/**
        @typedef StorePriority
        
        
        @property { boolean } [enabled]
        
        @property { Array<any> } [storetype_order]
        
         
    */
/**
        @typedef RewardPointsConfig
        
        
        @property { Credit } [credit]
        
        @property { Debit } [debit]
        
         
    */
/**
        @typedef Credit
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef Debit
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [auto_apply]
        
        @property { string } [strategy_channel]
        
         
    */
/**
        @typedef AppCartConfig
        
        
        @property { DeliveryCharges } [delivery_charges]
        
        @property { boolean } [enabled]
        
        @property { number } [max_cart_items]
        
        @property { number } [min_cart_value]
        
        @property { boolean } [bulk_coupons]
        
         
    */
/**
        @typedef DeliveryCharges
        
        
        @property { boolean } [enabled]
        
        @property { Charges } [charges]
        
         
    */
/**
        @typedef Charges
        
        
        @property { number } [threshold]
        
        @property { number } [charges]
        
         
    */
/**
        @typedef AppPaymentConfig
        
        
        @property { CallbackUrl } [callback_url]
        
        @property { Methods } [methods]
        
        @property { PaymentSelectionLock } [payment_selection_lock]
        
        @property { string } [mode_of_payment]
        
        @property { string } [source]
        
        @property { boolean } [enabled]
        
        @property { number } [cod_amount_limit]
        
        @property { number } [cod_charges]
        
         
    */
/**
        @typedef CallbackUrl
        
        
        @property { string } [app]
        
        @property { string } [web]
        
         
    */
/**
        @typedef Methods
        
        
        @property { PaymentModeConfig } [pl]
        
        @property { PaymentModeConfig } [card]
        
        @property { PaymentModeConfig } [nb]
        
        @property { PaymentModeConfig } [wl]
        
        @property { PaymentModeConfig } [ps]
        
        @property { PaymentModeConfig } [upi]
        
        @property { PaymentModeConfig } [qr]
        
        @property { PaymentModeConfig } [cod]
        
        @property { PaymentModeConfig } [pp]
        
        @property { PaymentModeConfig } [jp]
        
        @property { PaymentModeConfig } [pac]
        
        @property { PaymentModeConfig } [fc]
        
        @property { PaymentModeConfig } [jiopp]
        
        @property { PaymentModeConfig } [stripepg]
        
        @property { PaymentModeConfig } [juspaypg]
        
        @property { PaymentModeConfig } [payubizpg]
        
        @property { PaymentModeConfig } [payumoneypg]
        
        @property { PaymentModeConfig } [rupifipg]
        
        @property { PaymentModeConfig } [simpl]
        
         
    */
/**
        @typedef PaymentModeConfig
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef PaymentSelectionLock
        
        
        @property { boolean } [enabled]
        
        @property { string } [default_options]
        
        @property { string } [payment_identifier]
        
         
    */
/**
        @typedef AppOrderConfig
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [force_reassignment]
        
         
    */
/**
        @typedef AppLogisticsConfig
        
        
        @property { boolean } [logistics_by_seller]
        
        @property { boolean } [serviceability_check]
        
        @property { boolean } [same_day_delivery]
        
        @property { boolean } [dp_assignment]
        
         
    */
/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [auto_apply]
        
         
    */
/**
        @typedef AppInventoryPartialUpdate
        
        
        @property { RewardPointsConfig } [reward_points]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { boolean } [comms_enabled]
        
         
    */
/**
        @typedef BrandCompanyInfo
        
        
        @property { string } [company_name]
        
        @property { number } [company_id]
        
         
    */
/**
        @typedef CompanyByBrandsRequest
        
        
        @property { number } brands
        
        @property { string } [search_text]
        
         
    */
/**
        @typedef CompanyByBrandsResponse
        
        
        @property { Array<BrandCompanyInfo> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef StoreByBrandsRequest
        
        
        @property { number } [company_id]
        
        @property { number } brands
        
        @property { string } [search_text]
        
         
    */
/**
        @typedef StoreByBrandsResponse
        
        
        @property { Array<BrandStoreInfo> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef BrandStoreInfo
        
        
        @property { string } [store_name]
        
        @property { number } [store_id]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { OptedStoreAddress } [store_address]
        
        @property { OptedCompany } [company]
        
         
    */
/**
        @typedef CompanyBrandInfo
        
        
        @property { string } [name]
        
        @property { number } [value]
        
        @property { string } [brand_logo_url]
        
        @property { string } [brand_banner_url]
        
        @property { string } [brand_banner_portrait_url]
        
         
    */
/**
        @typedef BrandsByCompanyResponse
        
        
        @property { CompanyBrandInfo } [brands]
        
         
    */
/**
        @typedef CreateApplicationRequest
        
        
        @property { App } [app]
        
        @property { AppInventory } [configuration]
        
        @property { AppDomain } [domain]
        
         
    */
/**
        @typedef CreateAppResponse
        
        
        @property { Application } [app]
        
        @property { ApplicationInventory } [configuration]
        
         
    */
/**
        @typedef ApplicationsResponse
        
        
        @property { Array<Application> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef MobileAppConfiguration
        
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [app_name]
        
        @property { LandingImage } [landing_image]
        
        @property { SplashImage } [splash_image]
        
        @property { string } [application]
        
        @property { string } [platform_type]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { string } [package_name]
        
         
    */
/**
        @typedef LandingImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
         
    */
/**
        @typedef SplashImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
         
    */
/**
        @typedef MobileAppConfigRequest
        
        
        @property { string } [app_name]
        
        @property { LandingImage } [landing_image]
        
        @property { SplashImage } [splash_image]
        
        @property { boolean } [is_active]
        
         
    */
/**
        @typedef BuildVersionHistory
        
        
        @property { BuildVersion } [versions]
        
        @property { string } [latest_available_version_name]
        
         
    */
/**
        @typedef BuildVersion
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [platform_type]
        
        @property { string } [build_status]
        
        @property { string } [version_name]
        
        @property { number } [version_code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef AppSupportedCurrency
        
        
        @property { string } [_id]
        
        @property { Array<string> } [supported_currency]
        
        @property { string } [application]
        
        @property { DefaultCurrency } [default_currency]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */
/**
        @typedef DefaultCurrency
        
        
        @property { string } [ref]
        
        @property { string } [code]
        
         
    */
/**
        @typedef CurrencyConfig
        
        
        @property { string } [_id]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [decimal_digits]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef DomainAdd
        
        
        @property { string } [name]
        
         
    */
/**
        @typedef DomainAddRequest
        
        
        @property { DomainAdd } [domain]
        
         
    */
/**
        @typedef DomainsResponse
        
        
        @property { Array<Domain> } [domains]
        
         
    */
/**
        @typedef UpdateDomain
        
        
        @property { string } [_id]
        
         
    */
/**
        @typedef UpdateDomainTypeRequest
        
        
        @property { UpdateDomain } [domain]
        
        @property { string } [action]
        
         
    */
/**
        @typedef DomainStatusRequest
        
        
        @property { string } [domain_url]
        
         
    */
/**
        @typedef DomainStatus
        
        
        @property { string } [display]
        
        @property { boolean } [status]
        
         
    */
/**
        @typedef DomainStatusResponse
        
        
        @property { boolean } [connected]
        
        @property { Array<DomainStatus> } [status]
        
         
    */
/**
        @typedef DomainSuggestionsRequest
        
        
        @property { string } [domain_url]
        
        @property { boolean } [custom]
        
         
    */
/**
        @typedef DomainSuggestion
        
        
        @property { string } name
        
        @property { boolean } [unsupported]
        
        @property { boolean } is_available
        
        @property { number } [price]
        
        @property { string } [currency]
        
         
    */
/**
        @typedef DomainSuggestionsResponse
        
        
        @property { Array<DomainSuggestion> } [domains]
        
         
    */
/**
        @typedef GetIntegrationsOptInsResponse
        
        
        @property { IntegrationOptIn } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef IntegrationOptIn
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [description_html]
        
        @property { string } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef Validators
        
        
        @property { CompanyValidator } [company]
        
        @property { StoreValidator } [store]
        
        @property { InventoryValidator } [inventory]
        
        @property { OrderValidator } [order]
        
         
    */
/**
        @typedef CompanyValidator
        
        
        @property { JsonSchema } [json_schema]
        
        @property { string } [browser_script]
        
         
    */
/**
        @typedef JsonSchema
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [tooltip]
        
         
    */
/**
        @typedef StoreValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */
/**
        @typedef InventoryValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */
/**
        @typedef OrderValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */
/**
        @typedef IntegrationMeta
        
        
        @property { boolean } [is_public]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Integration
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [description_html]
        
        @property { Object } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef IntegrationConfigResponse
        
        
        @property { IntegrationLevel } [items]
        
         
    */
/**
        @typedef IntegrationLevel
        
        
        @property { boolean } [opted]
        
        @property { Array<Object> } [permissions]
        
        @property { Array<Object> } [last_patch]
        
        @property { string } [_id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { Array<any> } [meta]
        
        @property { string } [token]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef OptedStoreIntegration
        
        
        @property { boolean } [other_opted]
        
        @property { IntegrationOptIn } [other_integration]
        
        @property { OtherEntity } [other_entity]
        
         
    */
/**
        @typedef OtherEntity
        
        
        @property { boolean } [opted]
        
        @property { Array<string> } [permissions]
        
        @property { LastPatch } [last_patch]
        
        @property { string } [_id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { OtherEntityData } [data]
        
        @property { Array<Object> } [meta]
        
        @property { string } [token]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef LastPatch
        
        
        @property { string } [op]
        
        @property { string } [path]
        
        @property { string } [value]
        
         
    */
/**
        @typedef OtherEntityData
        
        
        @property { string } [article_identifier]
        
         
    */
/**
        @typedef App
        
        
        @property { string } [company_id]
        
        @property { string } [channel_type]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [name]
        
        @property { string } [desc]
        
         
    */
/**
        @typedef AppInventory
        
        
        @property { InventoryBrandRule } [brand]
        
        @property { InventoryStoreRule } [store]
        
        @property { Array<string> } [image]
        
        @property { boolean } [franchise_enabled]
        
        @property { boolean } [out_of_stock]
        
        @property { InventoryPaymentConfig } [payment]
        
        @property { InventoryArticleAssignment } [article_assignment]
        
         
    */
/**
        @typedef AppDomain
        
        
        @property { string } [name]
        
         
    */
/**
        @typedef CompaniesResponse
        
        
        @property { AppInventoryCompanies } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AppInventoryCompanies
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [company_type]
        
         
    */
/**
        @typedef StoresResponse
        
        
        @property { AppInventoryStores } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AppInventoryStores
        
        
        @property { string } [_id]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { number } [company_id]
        
         
    */
/**
        @typedef FilterOrderingStoreRequest
        
        
        @property { boolean } [all_stores]
        
        @property { Array<number> } [deployed_stores]
        
        @property { string } [q]
        
         
    */
/**
        @typedef DeploymentMeta
        
        
        @property { Array<number> } [deployed_stores]
        
        @property { boolean } [all_stores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef OrderingStoreConfig
        
        
        @property { DeploymentMeta } [deployment_meta]
        
         
    */
/**
        @typedef OtherSellerCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OtherSellerApplication
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [_id]
        
        @property { string } [domain]
        
        @property { OtherSellerCompany } [company]
        
        @property { string } [opt_type]
        
         
    */
/**
        @typedef OtherSellerApplications
        
        
        @property { Array<OtherSellerApplication> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef OptedApplicationResponse
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [_id]
        
        @property { string } [domain]
        
        @property { OptedCompany } [company]
        
        @property { OptedInventory } [opted_inventory]
        
        @property { OptOutInventory } [opt_out_inventory]
        
         
    */
/**
        @typedef OptedCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OptedInventory
        
        
        @property { OptType } [opt_type]
        
        @property { any } [items]
        
         
    */
/**
        @typedef OptType
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */
/**
        @typedef OptedStore
        
        
        @property { string } [name]
        
        @property { string } [store_code]
        
        @property { string } [_id]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { number } [company_id]
        
         
    */
/**
        @typedef OptOutInventory
        
        
        @property { Array<number> } store
        
        @property { Array<number> } company
        
         
    */
/**
        @typedef ProductDetailFeature
        
        
        @property { Array<string> } [similar]
        
        @property { boolean } [seller_selection]
        
        @property { boolean } [update_product_meta]
        
        @property { boolean } [request_product]
        
         
    */
/**
        @typedef LaunchPage
        
        
        @property { string } [page_type]
        
        @property { string } [params]
        
        @property { string } [query]
        
         
    */
/**
        @typedef LandingPageFeature
        
        
        @property { LaunchPage } [launch_page]
        
        @property { boolean } [continue_as_guest]
        
        @property { string } [login_btn_text]
        
        @property { boolean } [show_domain_textbox]
        
        @property { boolean } [show_register_btn]
        
         
    */
/**
        @typedef RegistrationPageFeature
        
        
        @property { boolean } [ask_store_address]
        
         
    */
/**
        @typedef AppFeature
        
        
        @property { ProductDetailFeature } [product_detail]
        
        @property { LandingPageFeature } [landing_page]
        
        @property { RegistrationPageFeature } [registration_page]
        
        @property { HomePageFeature } [home_page]
        
        @property { CommonFeature } [common]
        
        @property { CartFeature } [cart]
        
        @property { QrFeature } [qr]
        
        @property { PcrFeature } [pcr]
        
        @property { OrderFeature } [order]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef HomePageFeature
        
        
        @property { boolean } [order_processing]
        
         
    */
/**
        @typedef CommonFeature
        
        
        @property { CommunicationOptinDialogFeature } [communication_optin_dialog]
        
        @property { DeploymentStoreSelectionFeature } [deployment_store_selection]
        
        @property { ListingPriceFeature } [listing_price]
        
        @property { ListingPageFeature } [listing_page]
        
        @property { CurrencyFeature } [currency]
        
        @property { RevenueEngineFeature } [revenue_engine]
        
        @property { FeedbackFeature } [feedback]
        
        @property { CompareProductsFeature } [compare_products]
        
         
    */
/**
        @typedef CommunicationOptinDialogFeature
        
        
        @property { boolean } [visibility]
        
         
    */
/**
        @typedef DeploymentStoreSelectionFeature
        
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ListingPriceFeature
        
        
        @property { string } [value]
        
        @property { string } [sort]
        
         
    */
/**
        @typedef ListingPageFeature
        
        
        @property { string } [sort_on]
        
         
    */
/**
        @typedef CurrencyFeature
        
        
        @property { Array<string> } [value]
        
        @property { string } [type]
        
        @property { string } [default_currency]
        
         
    */
/**
        @typedef RevenueEngineFeature
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef FeedbackFeature
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef CompareProductsFeature
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef CartFeature
        
        
        @property { boolean } [gst_input]
        
        @property { boolean } [staff_selection]
        
        @property { boolean } [placing_for_customer]
        
        @property { boolean } [google_map]
        
         
    */
/**
        @typedef QrFeature
        
        
        @property { boolean } [application]
        
        @property { boolean } [products]
        
        @property { boolean } [collections]
        
         
    */
/**
        @typedef PcrFeature
        
        
        @property { boolean } [staff_selection]
        
         
    */
/**
        @typedef OrderFeature
        
        
        @property { boolean } [buy_again]
        
         
    */
/**
        @typedef AppFeatureRequest
        
        
        @property { AppFeature } [feature]
        
         
    */
/**
        @typedef AppFeatureResponse
        
        
        @property { AppFeature } [feature]
        
         
    */
/**
        @typedef Currency
        
        
        @property { string } [_id]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [decimal_digits]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef Domain
        
        
        @property { boolean } [verified]
        
        @property { boolean } [is_primary]
        
        @property { boolean } [is_default]
        
        @property { boolean } [is_shortlink]
        
        @property { string } [_id]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ApplicationWebsite
        
        
        @property { boolean } [enabled]
        
        @property { string } [basepath]
        
         
    */
/**
        @typedef ApplicationCors
        
        
        @property { Array<string> } [domains]
        
         
    */
/**
        @typedef ApplicationAuth
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef ApplicationRedirections
        
        
        @property { string } [from]
        
        @property { string } [redirect_to]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ApplicationMeta
        
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */
/**
        @typedef SecureUrl
        
        
        @property { string } [secure_url]
        
         
    */
/**
        @typedef Application
        
        
        @property { ApplicationWebsite } [website]
        
        @property { ApplicationCors } [cors]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [description]
        
        @property { string } [channel_type]
        
        @property { number } [cache_ttl]
        
        @property { boolean } [is_internal]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { number } [company_id]
        
        @property { string } [token]
        
        @property { Array<ApplicationRedirections> } [redirections]
        
        @property { Array<ApplicationMeta> } [meta]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { SecureUrl } [banner]
        
        @property { SecureUrl } [logo]
        
        @property { SecureUrl } [favicon]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [app_type]
        
        @property { SecureUrl } [mobile_logo]
        
        @property { Domain } [domain]
        
         
    */
/**
        @typedef NotFound
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnhandledError
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef InvalidPayloadRequest
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef SuccessMessageResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef InventoryBrandRule
        
        
        @property { string } [criteria]
        
        @property { Array<number> } [brands]
        
         
    */
/**
        @typedef StoreCriteriaRule
        
        
        @property { Array<number> } [companies]
        
        @property { Array<number> } [brands]
        
         
    */
/**
        @typedef InventoryStoreRule
        
        
        @property { string } [criteria]
        
        @property { Array<StoreCriteriaRule> } [rules]
        
        @property { Array<number> } [stores]
        
         
    */
/**
        @typedef InventoryPaymentConfig
        
        
        @property { string } [mode_of_payment]
        
        @property { string } [source]
        
         
    */
/**
        @typedef StorePriorityRule
        
        
        @property { boolean } [enabled]
        
        @property { Array<string> } [storetype_order]
        
         
    */
/**
        @typedef ArticleAssignmentRule
        
        
        @property { StorePriorityRule } [store_priority]
        
         
    */
/**
        @typedef InventoryArticleAssignment
        
        
        @property { boolean } [post_order_reassignment]
        
        @property { Array<number> } [enforced_stores]
        
        @property { ArticleAssignmentRule } [rules]
        
         
    */
/**
        @typedef CompanyAboutAddress
        
        
        @property { number } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [address_type]
        
         
    */
/**
        @typedef UserEmail
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
         
    */
/**
        @typedef UserPhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { number } [country_code]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef ApplicationInformation
        
        
        @property { InformationAddress } [address]
        
        @property { InformationSupport } [support]
        
        @property { SocialLinks } [social_links]
        
        @property { Links } [links]
        
        @property { string } [copyright_text]
        
        @property { string } [_id]
        
        @property { BusinessHighlights } [business_highlights]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef InformationAddress
        
        
        @property { string } [loc]
        
        @property { Array<string> } [address_line]
        
        @property { InformationPhone } [phone]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
         
    */
/**
        @typedef InformationPhone
        
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */
/**
        @typedef InformationSupport
        
        
        @property { Array<string> } [phone]
        
        @property { Array<string> } [email]
        
        @property { string } [timing]
        
         
    */
/**
        @typedef SocialLinks
        
        
        @property { Facebook } [facebook]
        
        @property { Instagram } [instagram]
        
        @property { Twitter } [twitter]
        
        @property { Pinterest } [pinterest]
        
        @property { GooglePlus } [google_plus]
        
        @property { Youtube } [youtube]
        
        @property { LinkedIn } [linked_in]
        
        @property { Vimeo } [vimeo]
        
        @property { BlogLink } [blog_link]
        
         
    */
/**
        @typedef Instagram
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Twitter
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Pinterest
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef GooglePlus
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Youtube
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef LinkedIn
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Vimeo
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef BlogLink
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Links
        
        
        @property { string } [title]
        
        @property { string } [link]
        
         
    */
/**
        @typedef BusinessHighlights
        
        
        @property { string } [_id]
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [sub_title]
        
         
    */
/**
        @typedef ApplicationDetail
        
        
        @property { string } name
        
        @property { string } description
        
        @property { SecureUrl } logo
        
        @property { SecureUrl } mobile_logo
        
        @property { SecureUrl } favicon
        
        @property { SecureUrl } banner
        
        @property { Domain } [domain]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [_id]
        
         
    */
/**
        @typedef CurrenciesResponse
        
        
        @property { Array<Currency> } [items]
        
         
    */
/**
        @typedef StoreLatLong
        
        
        @property { string } [type]
        
        @property { Array<number> } [coordinates]
        
         
    */
/**
        @typedef OptedStoreAddress
        
        
        @property { string } [state]
        
        @property { string } [address1]
        
        @property { StoreLatLong } [lat_long]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
         
    */
/**
        @typedef OrderingStore
        
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [_id]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { number } [pincode]
        
        @property { string } [code]
        
         
    */
/**
        @typedef OrderingStores
        
        
        @property { Page } [page]
        
        @property { Array<OrderingStore> } [items]
        
        @property { Array<number> } [deployed_stores]
        
        @property { boolean } [all_stores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef TokenResponse
        
        
        @property { Tokens } [tokens]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */
/**
        @typedef Tokens
        
        
        @property { Firebase } [firebase]
        
        @property { Moengage } [moengage]
        
        @property { Segment } [segment]
        
        @property { Gtm } [gtm]
        
        @property { Freshchat } [freshchat]
        
        @property { Safetynet } [safetynet]
        
        @property { FyndRewards } [fynd_rewards]
        
        @property { Auth } [auth]
        
        @property { GoogleMap } [google_map]
        
         
    */
/**
        @typedef Firebase
        
        
        @property { Credentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef Credentials
        
        
        @property { Ios } [ios]
        
        @property { Android } [android]
        
        @property { string } [project_id]
        
        @property { string } [gcm_sender_id]
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Ios
        
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Android
        
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Moengage
        
        
        @property { MoengageCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef MoengageCredentials
        
        
        @property { string } [app_id]
        
         
    */
/**
        @typedef Segment
        
        
        @property { SegmentCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SegmentCredentials
        
        
        @property { string } [write_key]
        
         
    */
/**
        @typedef Gtm
        
        
        @property { GtmCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef GtmCredentials
        
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Freshchat
        
        
        @property { FreshchatCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef FreshchatCredentials
        
        
        @property { string } [app_id]
        
        @property { string } [app_key]
        
        @property { string } [web_token]
        
         
    */
/**
        @typedef Safetynet
        
        
        @property { SafetynetCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SafetynetCredentials
        
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef FyndRewards
        
        
        @property { FyndRewardsCredentials } [credentials]
        
         
    */
/**
        @typedef FyndRewardsCredentials
        
        
        @property { string } [public_key]
        
         
    */
/**
        @typedef Auth
        
        
        @property { Google } [google]
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountkit]
        
         
    */
/**
        @typedef GoogleMap
        
        
        @property { GoogleMapCredentials } [credentials]
        
         
    */
/**
        @typedef GoogleMapCredentials
        
        
        @property { string } [api_key]
        
         
    */
/**
        @typedef Ownership
        
        
        @property { string } payable_by
        
        @property { string } payable_category
        
         
    */
/**
        @typedef PriceRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */
/**
        @typedef PostOrder
        
        
        @property { boolean } [return_allowed]
        
        @property { boolean } [cancellation_allowed]
        
         
    */
/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multi_store_allowed
        
         
    */
/**
        @typedef UsesRemaining
        
        
        @property { number } [user]
        
        @property { number } [app]
        
        @property { number } [total]
        
         
    */
/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [remaining]
        
        @property { UsesRemaining } [maximum]
        
         
    */
/**
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */
/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [codes]
        
        @property { Array<string> } [networks]
        
        @property { Array<string> } [types]
        
        @property { PaymentAllowValue } [uses]
        
         
    */
/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [card]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [nb]
        
         
    */
/**
        @typedef Restrictions
        
        
        @property { boolean } [coupon_allowed]
        
        @property { PriceRange } [price_range]
        
        @property { Array<number> } [ordering_stores]
        
        @property { PostOrder } [post_order]
        
        @property { BulkBundleRestriction } [bulk_bundle]
        
        @property { Array<string> } [platforms]
        
        @property { UsesRestriction } [uses]
        
        @property { PaymentCodes } [payments]
        
         
    */
/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */
/**
        @typedef CouponDateMeta
        
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */
/**
        @typedef CouponAction
        
        
        @property { string } [txn_mode]
        
        @property { string } [action_date]
        
         
    */
/**
        @typedef CouponAuthor
        
        
        @property { string } [modified_by]
        
        @property { string } [created_by]
        
         
    */
/**
        @typedef Rule
        
        
        @property { number } [discount_qty]
        
        @property { number } [max]
        
        @property { number } [min]
        
        @property { number } [key]
        
        @property { number } [value]
        
         
    */
/**
        @typedef CouponSchedule
        
        
        @property { number } [duration]
        
        @property { Array<Object> } [next_schedule]
        
        @property { string } [end]
        
        @property { string } [cron]
        
        @property { string } [start]
        
         
    */
/**
        @typedef RuleDefinition
        
        
        @property { string } applicable_on
        
        @property { Array<string> } [scope]
        
        @property { string } type
        
        @property { boolean } [auto_apply]
        
        @property { string } calculate_on
        
        @property { string } [currency_code]
        
        @property { boolean } [is_exact]
        
        @property { string } value_type
        
         
    */
/**
        @typedef Identifier
        
        
        @property { Array<number> } [item_id]
        
        @property { Array<string> } [collection_id]
        
        @property { Array<number> } [category_id]
        
        @property { Array<string> } [article_id]
        
        @property { Array<number> } [company_id]
        
        @property { Array<number> } [brand_id]
        
        @property { Array<number> } [store_id]
        
        @property { Array<string> } [user_id]
        
         
    */
/**
        @typedef State
        
        
        @property { boolean } [is_public]
        
        @property { boolean } [is_display]
        
        @property { boolean } [is_archived]
        
         
    */
/**
        @typedef Validation
        
        
        @property { Array<string> } [app_id]
        
        @property { boolean } [anonymous]
        
        @property { string } [user_registered_after]
        
         
    */
/**
        @typedef DisplayMetaDict
        
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
         
    */
/**
        @typedef DisplayMeta
        
        
        @property { DisplayMetaDict } [remove]
        
        @property { string } [title]
        
        @property { DisplayMetaDict } [apply]
        
        @property { string } [subtitle]
        
        @property { DisplayMetaDict } [auto]
        
        @property { string } [description]
        
         
    */
/**
        @typedef CouponAdd
        
        
        @property { string } code
        
        @property { Ownership } ownership
        
        @property { Restrictions } [restrictions]
        
        @property { Validity } validity
        
        @property { CouponDateMeta } [date_meta]
        
        @property { CouponAction } [action]
        
        @property { Array<string> } [tags]
        
        @property { CouponAuthor } [author]
        
        @property { Array<Rule> } rule
        
        @property { CouponSchedule } [_schedule]
        
        @property { RuleDefinition } rule_definition
        
        @property { Identifier } identifiers
        
        @property { State } [state]
        
        @property { Validation } [validation]
        
        @property { string } type_slug
        
        @property { DisplayMeta } display_meta
        
         
    */
/**
        @typedef CouponsResponse
        
        
        @property { Page } [page]
        
        @property { CouponAdd } [items]
        
         
    */
/**
        @typedef SuccessMessage
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef OperationErrorResponse
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef CouponUpdate
        
        
        @property { string } code
        
        @property { Ownership } ownership
        
        @property { Restrictions } [restrictions]
        
        @property { Validity } validity
        
        @property { CouponDateMeta } [date_meta]
        
        @property { CouponAction } [action]
        
        @property { Array<string> } [tags]
        
        @property { CouponAuthor } [author]
        
        @property { Array<Rule> } rule
        
        @property { CouponSchedule } [_schedule]
        
        @property { RuleDefinition } rule_definition
        
        @property { Identifier } identifiers
        
        @property { State } [state]
        
        @property { Validation } [validation]
        
        @property { string } type_slug
        
        @property { DisplayMeta } display_meta
        
         
    */
/**
        @typedef CouponPartialUpdate
        
        
        @property { boolean } [archive]
        
        @property { CouponSchedule } [schedule]
        
         
    */
declare class Lead {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * @description: Gets the list of company level tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getTickets({ items, filters, q, status, priority, category, pageNo, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * @description: Gets the list of company level tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getTicketsPaginator({ items, filters, q, status, priority, category, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Creates a company level ticket
     * @description: Creates a company level ticket
     * @param {Object} arg - arg object.
     * @param {AddTicketPayload} arg.body
     **/
    createTicket({ body }?: {
        body: AddTicketPayload;
    }): any;
    /**
      *
      * @summary: Retreives ticket details of a company level ticket with ticket ID
      * @description: Retreives ticket details of a company level ticket
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
      
      **/
    getTicket({ ticketId }?: {
        ticketId: string;
    }): any;
    /**
     *
     * @summary: Edits ticket details of a company level ticket
     * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     **/
    editTicket({ ticketId, body }?: {
        ticketId: string;
        body: EditTicketPayload;
    }): any;
    /**
     *
     * @summary: Create history for specific company level ticket
     * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     **/
    createHistory({ ticketId, body }?: {
        ticketId: string;
        body: TicketHistoryPayload;
    }): any;
    /**
      *
      * @summary: Gets history list for specific company level ticket
      * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
      
      **/
    getTicketHistory({ ticketId }?: {
        ticketId: string;
    }): any;
}
declare class Payment {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get All Payouts
      * @description: Get All Payouts
      * @param {Object} arg - arg object.
      * @param {string} [arg.uniqueExternalId] - Fetch payouts using unique external id
      
      **/
    getAllPayouts({ uniqueExternalId }?: {
        uniqueExternalId?: string;
    }): any;
    /**
     *
     * @summary: Save Payout
     * @description: Save Payout
     * @param {Object} arg - arg object.
     * @param {PayoutRequest} arg.body
     **/
    savePayout({ body }?: {
        body: PayoutRequest;
    }): any;
    /**
     *
     * @summary: Update Payout
     * @description: Update Payout
     * @param {Object} arg - arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {PayoutRequest} arg.body
     **/
    updatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: PayoutRequest;
    }): any;
    /**
     *
     * @summary: Partial Update Payout
     * @description: Partial Update Payout
     * @param {Object} arg - arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {UpdatePayoutRequest} arg.body
     **/
    activateAndDectivatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: UpdatePayoutRequest;
    }): any;
    /**
      *
      * @summary: Delete Payout
      * @description: Delete Payout
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueTransferNo - Unique transfer id
      
      **/
    deletePayout({ uniqueTransferNo }?: {
        uniqueTransferNo: string;
    }): any;
    /**
      *
      * @summary: List Subscription Payment Method
      * @description: Get all  Subscription  Payment Method
      * @param {Object} arg - arg object.
      
      **/
    getSubscriptionPaymentMethod({}?: any): any;
    /**
      *
      * @summary: Delete Subscription Payment Method
      * @description: Uses this api to Delete Subscription Payment Method
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueExternalId -
      * @param {string} arg.paymentMethodId -
      
      **/
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId }?: {
        uniqueExternalId: string;
        paymentMethodId: string;
    }): any;
    /**
      *
      * @summary: List Subscription Config
      * @description: Get all  Subscription Config details
      * @param {Object} arg - arg object.
      
      **/
    getSubscriptionConfig({}?: any): any;
    /**
     *
     * @summary: Save Subscription Setup Intent
     * @description: Uses this api to Save Subscription Setup Intent
     * @param {Object} arg - arg object.
     * @param {SaveSubscriptionSetupIntentRequest} arg.body
     **/
    saveSubscriptionSetupIntent({ body }?: {
        body: SaveSubscriptionSetupIntentRequest;
    }): any;
}
declare class Order {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Update status of Shipment
     * @description: Update Shipment Status
     * @param {Object} arg - arg object.
     * @param {UpdateShipmentStatusBody} arg.body
     **/
    shipmentStatusUpdate({ body }?: {
        body: UpdateShipmentStatusBody;
    }): any;
    /**
      *
      * @summary: Get Activity Status
      * @description: Get Activity Status
      * @param {Object} arg - arg object.
      * @param {string} arg.bagId - Bag Id
      
      **/
    activityStatus({ bagId }?: {
        bagId: string;
    }): any;
    /**
     *
     * @summary: Update Store Process-Shipment
     * @description: Update Store Process-Shipment
     * @param {Object} arg - arg object.
     * @param {UpdateProcessShipmenstRequestBody} arg.body
     **/
    storeProcessShipmentUpdate({ body }?: {
        body: UpdateProcessShipmenstRequestBody;
    }): any;
    /**
      *
      * @summary: Get Orders for company based on Company Id
      * @description: Get Orders
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageNo] - Current page number
      * @param {string} [arg.pageSize] - Page limit
      * @param {string} [arg.fromDate] - From Date
      * @param {string} [arg.toDate] - To Date
      * @param {string} [arg.q] - Keyword for Search
      * @param {string} [arg.stage] - Specefic Order Stage
      * @param {string} [arg.salesChannels] - Selected Sales Channel
      * @param {string} [arg.orderId] - Order Id
      * @param {string} [arg.stores] - Selected Stores
      * @param {string} [arg.status] - Status of order
      * @param {boolean} [arg.shortenUrls] - Shorten URL option
      * @param {string} [arg.filterType] - Filters
      
      **/
    getOrdersByCompanyId({ pageNo, pageSize, fromDate, toDate, q, stage, salesChannels, orderId, stores, status, shortenUrls, filterType, }?: {
        pageNo?: string;
        pageSize?: string;
        fromDate?: string;
        toDate?: string;
        q?: string;
        stage?: string;
        salesChannels?: string;
        orderId?: string;
        stores?: string;
        status?: string;
        shortenUrls?: boolean;
        filterType?: string;
    }): any;
    /**
      *
      * @summary: Get Ping
      * @description: Get Ping
      * @param {Object} arg - arg object.
      
      **/
    getPing({}?: any): any;
    /**
      *
      * @summary: Get Voice Callback
      * @description: Voice Callback
      * @param {Object} arg - arg object.
      
      **/
    voiceCallback({}?: any): any;
    /**
      *
      * @summary: Get Voice Click to Call
      * @description: Voice Click to Call
      * @param {Object} arg - arg object.
      * @param {string} arg.caller - Caller contact number
      * @param {string} arg.receiver - Receiver contact number
      
      **/
    voiceClickToCall({ caller, receiver }?: {
        caller: string;
        receiver: string;
    }): any;
}
declare class Catalog {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: List all Product Bundles
      * @description: Get all product bundles for a particular company
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - A search string that is searched with product bundle name.
      
      **/
    getProductBundle({ q }?: {
        q?: string;
    }): any;
    /**
     *
     * @summary: Create Product Bundle
     * @description: Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id
     * @param {Object} arg - arg object.
     * @param {ProductBundleRequest} arg.body
     **/
    createProductBundle({ body }?: {
        body: ProductBundleRequest;
    }): any;
    /**
      *
      * @summary: Get a particular Product Bundle details
      * @description: Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
      
      **/
    getProductBundleDetail({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update a Product Bundle
     * @description: Update a Product Bundle by its id. On successful request, returns the updated product bundle
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
     * @param {ProductBundleUpdateRequest} arg.body
     **/
    updateProductBundle({ id, body }?: {
        id: string;
        body: ProductBundleUpdateRequest;
    }): any;
    /**
      *
      * @summary: Get list of size guides
      * @description: This API allows to view all the size guides associated to the seller.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.active] - filter size guide on basis of active, in-active
      * @param {string} [arg.q] - Query that is to be searched.
      * @param {string} [arg.tag] - to filter size guide on basis of tag.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getSizeGuides({ active, q, tag, pageNo, pageSize }?: {
        active?: boolean;
        q?: string;
        tag?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Create a size guide.
     * @description: This API allows to create a size guide associated to a brand.
     * @param {Object} arg - arg object.
     * @param {ValidateSizeGuide} arg.body
     **/
    createSizeGuide({ body }?: {
        body: ValidateSizeGuide;
    }): any;
    /**
      *
      * @summary: Get a single size guide.
      * @description: This API helps to get data associated to a size guide.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Id of the size guide to be viewed.
      
      **/
    getSizeGuide({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Edit a size guide.
     * @description: This API allows to edit a size guide.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Mongo id of the size guide to be edited
     * @param {ValidateSizeGuide} arg.body
     **/
    updateSizeGuide({ id, body }?: {
        id: string;
        body: ValidateSizeGuide;
    }): any;
    /**
      *
      * @summary: Analytics data of catalog and inventory that are being cross-selled.
      * @description: Analytics data of catalog and inventory that are being cross-selled.
      * @param {Object} arg - arg object.
      * @param {string} arg.sellerAppId - Id of the seller application which is serving the invetory/catalog of the company
      
      **/
    getSellerInsights({ sellerAppId }?: {
        sellerAppId: string;
    }): any;
    /**
     *
     * @summary: Create/Update opt-in infomation.
     * @description: Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`
     * @param {Object} arg - arg object.
     * @param {string} arg.marketplace - The marketplace for which the detail needs to be retrieved.
     * @param {OptInPostRequest} arg.body
     **/
    createMarketplaceOptin({ marketplace, body }?: {
        marketplace: string;
        body: OptInPostRequest;
    }): any;
    /**
      *
      * @summary: Get opt-in infomation.
      * @description: Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`
      * @param {Object} arg - arg object.
      
      **/
    getMarketplaceOptinDetail({}?: any): any;
    /**
      *
      * @summary: Get the Company details.
      * @description: Get the details of the company associated with the given company_id passed.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyDetail({}?: any): any;
    /**
      *
      * @summary: Get the Company Brand details of Optin.
      * @description: Get the details of the Brands associated with the given company_id passed.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.isActive] - The is_active status for the optin id.
      * @param {boolean} [arg.q] - The search value to filter the list.
      * @param {number} [arg.pageNo] - The number of page for the company id.
      * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
      * @param {string} [arg.marketplace] - The marketplace platform associated with the company id.
      
      **/
    getCompanyBrandDetail({ isActive, q, pageNo, pageSize, marketplace }?: {
        isActive?: boolean;
        q?: boolean;
        pageNo?: number;
        pageSize?: number;
        marketplace?: string;
    }): any;
    /**
      *
      * @summary: Get the Company metrics
      * @description: Get the Company metrics associated with the company ID passed.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyMetrics({}?: any): any;
    /**
      *
      * @summary: Get the Store details.
      * @description: Get the details of the store associated with the company ID passed.
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search related the store for the company id.
      * @param {number} [arg.pageNo] - The number of page for the company id.
      * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
      
      **/
    getStoreDetail({ q, pageNo, pageSize }?: {
        q?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: List Department specifiec product categories
      * @description: Allows you to list all product categories values for the departments specified
      * @param {Object} arg - arg object.
      * @param {string} arg.departments - A `department` is name of a departments whose category needs to be listed. Can specify multiple departments.
      * @param {string} arg.itemType - An `item_type` is the type of item, it can be `set`, `standard`, `digital`, etc.
      
      **/
    listProductTemplateCategories({ departments, itemType }?: {
        departments: string;
        itemType: string;
    }): any;
    /**
      *
      * @summary: List all Departments
      * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type
      * @param {Object} arg - arg object.
      
      **/
    listDepartmentsData({}?: any): any;
    /**
      *
      * @summary: Get specific departments details by passing in unique id of the department
      * @description: Allows you to get department data, by uid
      * @param {Object} arg - arg object.
      * @param {string} arg.uid - A `uid` is a unique identifier of a department.
      
      **/
    getDepartmentData({ uid }?: {
        uid: string;
    }): any;
    /**
      *
      * @summary: List all Templates
      * @description: Allows you to list all product templates, also can filter by department
      * @param {Object} arg - arg object.
      * @param {string} arg.departments - A `departments` is the name of a particular department.
      
      **/
    listProductTemplate({ departments }?: {
        departments: string;
    }): any;
    /**
      *
      * @summary: Validate Product Template Schema
      * @description: Allows you to list all product templates validation values for all the fields present in the database
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
      
      **/
    validateProductTemplate({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Download Product Template View
      * @description: Allows you to download product template data
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
      
      **/
    downloadProductTemplateViews({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Download Product Template View
      * @description: Allows you to download product template data
      * @param {Object} arg - arg object.
      * @param {string} arg.itemType - An `item_type` defines the type of item.
      
      **/
    downloadProductTemplateView({ itemType }?: {
        itemType: string;
    }): any;
    /**
      *
      * @summary: Validate Product Template Schema
      * @description: Allows you to list all product templates validation values for all the fields present in the database
      * @param {Object} arg - arg object.
      * @param {string} arg.itemType - An `item_type` defines the type of item. The default value is standard.
      
      **/
    validateProductTemplateSchema({ itemType }?: {
        itemType: string;
    }): any;
    /**
      *
      * @summary: List HSN Codes
      * @description: Allows you to list all hsn Codes
      * @param {Object} arg - arg object.
      
      **/
    listHSNCodes({}?: any): any;
    /**
      *
      * @summary: Allows you to list all product templates export list details
      * @description: Can vies details including trigger data, task id , etc.
      * @param {Object} arg - arg object.
      
      **/
    listProductTemplateExportDetails({}?: any): any;
    /**
      *
      * @summary: Allows you to list all values for Templates, Brands or Type
      * @description: The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same
      * @param {Object} arg - arg object.
      * @param {string} arg.filter - A `filter` is the unique identifier of the type of value required.
      
      **/
    listTemplateBrandTypeValues({ filter }?: {
        filter: string;
    }): any;
    /**
      *
      * @summary: Get product categories list
      * @description: This API gets meta associated to product categories.
      * @param {Object} arg - arg object.
      * @param {string} [arg.level] - Get category for multiple levels
      * @param {string} [arg.q] - Get multiple categories filtered by search string
      
      **/
    listCategories({ level, q }?: {
        level?: string;
        q?: string;
    }): any;
    /**
     *
     * @summary: Create product categories
     * @description: This API lets user create product categories
     * @param {Object} arg - arg object.
     * @param {CategoryRequestBody} arg.body
     **/
    createCategories({ body }?: {
        body: CategoryRequestBody;
    }): any;
    /**
      *
      * @summary: Get product category by uid
      * @description: This API gets meta associated to product categories.
      * @param {Object} arg - arg object.
      * @param {string} arg.uid - Category unique id
      
      **/
    getCategoryData({ uid }?: {
        uid: string;
    }): any;
    /**
     *
     * @summary: Update product categories
     * @description: Update a product category using this apu
     * @param {Object} arg - arg object.
     * @param {string} arg.uid - Category unique id
     * @param {CategoryRequestBody} arg.body
     **/
    updateCategory({ uid, body }?: {
        uid: string;
        body: CategoryRequestBody;
    }): any;
    /**
      *
      * @summary: Get product list
      * @description: This API gets meta associated to products.
      * @param {Object} arg - arg object.
      * @param {number} [arg.brandIds] - Get multiple products filtered by brand Ids
      * @param {number} [arg.categoryIds] - Get multiple products filtered by category Ids
      * @param {string} [arg.search] - Get multiple products filtered by search string
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getProducts({ brandIds, categoryIds, search, pageNo, pageSize }?: {
        brandIds?: number;
        categoryIds?: number;
        search?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Create a product.
     * @description: This API allows to create product.
     * @param {Object} arg - arg object.
     * @param {ProductCreateUpdate} arg.body
     **/
    createProduct({ body }?: {
        body: ProductCreateUpdate;
    }): any;
    /**
      *
      * @summary: Delete a product.
      * @description: This API allows to delete product.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Id of the product to be updated.
      
      **/
    deleteProduct({ itemId }?: {
        itemId: number;
    }): any;
    /**
      *
      * @summary: Get a single product.
      * @description: This API helps to get data associated to a particular product.
      * @param {Object} arg - arg object.
      * @param {string} [arg.itemCode] - Item code of the product.
      * @param {number} arg.itemId - Item Id of the product.
      * @param {number} [arg.brandUid] - Brand Id of the product.
      * @param {number} [arg.uid] - Id of the product.
      
      **/
    getProduct({ itemId, itemCode, brandUid, uid }?: {
        itemCode?: string;
        itemId: number;
        brandUid?: number;
        uid?: number;
    }): any;
    /**
     *
     * @summary: Edit a product.
     * @description: This API allows to edit product.
     * @param {Object} arg - arg object.
     * @param {number} arg.itemId - Id of the product to be updated.
     * @param {ProductCreateUpdate} arg.body
     **/
    editProduct({ itemId, body }?: {
        itemId: number;
        body: ProductCreateUpdate;
    }): any;
    /**
      *
      * @summary: Validate product/size data
      * @description: This API validates product data.
      * @param {Object} arg - arg object.
      
      **/
    getProductValidation({}?: any): any;
    /**
      *
      * @summary: Get a single product size.
      * @description: This API helps to get data associated to a particular product size.
      * @param {Object} arg - arg object.
      * @param {string} [arg.itemCode] - Item code of the product size.
      * @param {number} arg.itemId - Item Id of the product size.
      * @param {number} [arg.brandUid] - Brand Id of the product size.
      * @param {number} [arg.uid] - Id of the product size.
      
      **/
    getProductSize({ itemId, itemCode, brandUid, uid }?: {
        itemCode?: string;
        itemId: number;
        brandUid?: number;
        uid?: number;
    }): any;
    /**
      *
      * @summary: Get a list of all bulk product upload jobs.
      * @description: This API helps to get bulk product upload jobs data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductBulkUploadHistory({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job.
     * @param {Object} arg - arg object.
     * @param {BulkJob} arg.body
     **/
    updateProductAssetsInBulk({ body }?: {
        body: BulkJob;
    }): any;
    /**
      *
      * @summary: Delete Bulk product job.
      * @description: This API allows to delete bulk product job associated with company.
      * @param {Object} arg - arg object.
      * @param {number} arg.batchId - Batch Id of the bulk product job to be deleted.
      
      **/
    deleteProductBulkJob({ batchId }?: {
        batchId: number;
    }): any;
    /**
     *
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     * @param {Object} arg - arg object.
     * @param {string} arg.batchId - Batch Id in which assets to be uploaded.
     * @param {BulkProductRequest} arg.body
     **/
    createProductsInBulk({ batchId, body }?: {
        batchId: string;
        body: BulkProductRequest;
    }): any;
    /**
      *
      * @summary: Get a list of all tags associated with company.
      * @description: This API helps to get tags data associated to a particular copmpany.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyTags({}?: any): any;
    /**
      *
      * @summary: Get a list of all bulk asset jobs.
      * @description: This API helps to get bulk asset jobs data associated to a particular company.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductAssetsInBulk({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job.
     * @param {Object} arg - arg object.
     * @param {ProductBulkAssets} arg.body
     **/
    createProductAssetsInBulk({ body }?: {
        body: ProductBulkAssets;
    }): any;
    /**
      *
      * @summary: Delete a Size associated with product.
      * @description: This API allows to delete size associated with product.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Item Id of the product associated with size to be deleted.
      * @param {number} arg.size - size to be deleted.
      
      **/
    deleteSize({ itemId, size }?: {
        itemId: number;
        size: number;
    }): any;
    /**
      *
      * @summary: Get Inventory for company
      * @description: This API allows get Inventory data for particular company grouped by size and store.
      * @param {Object} arg - arg object.
      * @param {string} arg.itemId - Item code of the product of which size is to be get.
      * @param {string} arg.size - Size of which inventory is to get.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getInventory({ itemId, size, pageNo, pageSize }?: {
        itemId: string;
        size: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     * @param {Object} arg - arg object.
     * @param {number} arg.itemId - Item of the company associated to product that is to be viewed.
     * @param {string} arg.size - Size in which inventory is to be added.
     * @param {InventoryRequest1} arg.body
     **/
    addInventory({ itemId, size, body }?: {
        itemId: number;
        size: string;
        body: InventoryRequest1;
    }): any;
    /**
      *
      * @summary: Delete a Inventory.
      * @description: This API allows to delete inventory of a particular product for particular company.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Id of the product associated with Inventory to be deleted.
      * @param {number} arg.locationId - Location ID of store of which inventory is to be deleted.
      
      **/
    deleteInventory({ itemId, locationId }?: {
        itemId: number;
        locationId: number;
    }): any;
    /**
      *
      * @summary: Get a list of all bulk Inventory upload jobs.
      * @description: This API helps to get bulk Inventory upload jobs data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getInventoryBulkUploadHistory({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Create a Bulk Inventory upload Job.
     * @description: This API helps to create a bulk Inventory upload job.
     * @param {Object} arg - arg object.
     * @param {BulkJob} arg.body
     **/
    createBulkInventoryJob({ body }?: {
        body: BulkJob;
    }): any;
    /**
      *
      * @summary: Delete Bulk Inventory job.
      * @description: This API allows to delete bulk Inventory job associated with company.
      * @param {Object} arg - arg object.
      
      **/
    deleteBulkInventoryJob({}?: any): any;
    /**
     *
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     * @param {Object} arg - arg object.
     * @param {InventoryBulkRequest} arg.body
     **/
    createBulkInventory({ body }?: {
        body: InventoryBulkRequest;
    }): any;
    /**
      *
      * @summary: Get Inventory export history.
      * @description: This API helps to get Inventory export history.
      * @param {Object} arg - arg object.
      
      **/
    getInventoryExport({}?: any): any;
    /**
     *
     * @summary: Create a Inventory export Job.
     * @description: This API helps to create a Inventory export job.
     * @param {Object} arg - arg object.
     * @param {InventoryExportRequest} arg.body
     **/
    createInventoryExportJob({ body }?: {
        body: InventoryExportRequest;
    }): any;
    /**
      *
      * @summary: Get List of different filters for inventory export
      * @description: This API allows get List of different filters like brand, store, and type for inventory export.
      * @param {Object} arg - arg object.
      * @param {string} [arg.filterType] - filter type from any one of ['brand', 'store', 'type']
      
      **/
    exportInventoryConfig({ filterType }?: {
        filterType?: string;
    }): any;
}
declare class FileStorage {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `startUpload`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `completeUpload` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartRequest} arg.body
      **/
    startUpload({ namespace, body }?: {
        namespace: string;
        body: StartRequest;
    }): any;
    /**
      *
      * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `startUpload`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `completeUpload` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartResponse} arg.body
      **/
    completeUpload({ namespace, body }?: {
        namespace: string;
        body: StartResponse;
    }): any;
    /**
     *
     * @summary: Explain here
     * @description: Describe here
     * @param {Object} arg - arg object.
     * @param {SignUrlRequest} arg.body
     **/
    getSignUrls({ body }?: {
        body: SignUrlRequest;
    }): any;
    /**
     *
     * @summary: Copy Files
     * @description: Copy Files
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.sync] - sync
     * @param {BulkRequest} arg.body
     **/
    copyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {number} [arg.pageNo] - page no
      
      **/
    browse({ namespace, pageNo }?: {
        namespace: string;
        pageNo?: number;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      
      **/
    browsePaginator({ namespace }?: {
        namespace: string;
    }): Paginator;
    /**
      *
      * @summary: Proxy
      * @description: Proxy
      * @param {Object} arg - arg object.
      * @param {string} arg.url - url
      
      **/
    proxy({ url }?: {
        url: string;
    }): any;
}
declare class Configuration {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Create application
     * @description: Create new application
     * @param {Object} arg - arg object.
     * @param {CreateApplicationRequest} arg.body
     **/
    createApplication({ body }?: {
        body: CreateApplicationRequest;
    }): any;
    /**
      *
      * @summary: Get list of application under company
      * @description: Get list of application under company
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] -
      * @param {number} [arg.pageSize] -
      * @param {string} [arg.q] - Url encoded object used as mongodb query
      
      **/
    getApplications({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): any;
    /**
      *
      * @summary: Get list of application under company
      * @description: Get list of application under company
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] -
      * @param {string} [arg.q] - Url encoded object used as mongodb query
      
      **/
    getApplicationsPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
      *
      * @summary: Get all currencies
      * @description: Get all currencies
      * @param {Object} arg - arg object.
      
      **/
    getCurrencies({}?: any): any;
    /**
     *
     * @summary: Check domain availibility before linking to application
     * @description: Check domain availibility before linking to application. Also sends domain suggestions with similar to queried domain. \ Custom domain search is currently powered by GoDaddy provider.
     * @param {Object} arg - arg object.
     * @param {DomainSuggestionsRequest} arg.body
     **/
    getDomainAvailibility({ body }?: {
        body: DomainSuggestionsRequest;
    }): any;
    /**
      *
      * @summary: Get integration data
      * @description: Get integration data
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Integration id
      
      **/
    getIntegrationById({ id }?: {
        id: number;
    }): any;
    /**
      *
      * @summary: Get all available integration opt-ins
      * @description: Get all available integration opt-ins
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAvailableOptIns({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get all available integration opt-ins
      * @description: Get all available integration opt-ins
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAvailableOptInsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get company/store level integration opt-ins
      * @description: Get company/store level integration opt-ins
      * @param {Object} arg - arg object.
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getSelectedOptIns({ level, uid, pageNo, pageSize }?: {
        level: string;
        uid: number;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get company/store level integration opt-ins
      * @description: Get company/store level integration opt-ins
      * @param {Object} arg - arg object.
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getSelectedOptInsPaginator({ level, uid, pageSize }?: {
        level: string;
        uid: number;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get integration level config
      * @description: Get integration level config
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      
      **/
    getIntegrationLevelConfig({ id, level }?: {
        id: string;
        level: string;
    }): any;
    /**
      *
      * @summary: Get level data for integration
      * @description: Get level data for integration
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      
      **/
    getIntegrationByLevelId({ id, level, uid }?: {
        id: string;
        level: string;
        uid: number;
    }): any;
    /**
      *
      * @summary: Check store has active integration
      * @description: API checks if a store is already opted in any other integrations
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      
      **/
    getLevelActiveIntegrations({ id, level, uid }?: {
        id: string;
        level: string;
        uid: number;
    }): any;
    /**
      *
      * @summary: Get brands by company
      * @description: Get brands by company
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - Search text for brand name
      
      **/
    getBrandsByCompany({ q }?: {
        q?: string;
    }): any;
    /**
     *
     * @summary: Get company by brand uids
     * @description: Get company by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {CompanyByBrandsRequest} arg.body
     **/
    getCompanyByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: CompanyByBrandsRequest;
    }): any;
    /**
     *
     * @summary: Get company by brand uids
     * @description: Get company by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageSize] - Current request items count
     * @param {CompanyByBrandsRequest} arg.body
     **/
    getCompanyByBrandsPaginator({ pageSize, body }?: {
        pageSize?: number;
        body: CompanyByBrandsRequest;
    }): Paginator;
    /**
     *
     * @summary: Get stores by brand uids
     * @description: Get stores by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {StoreByBrandsRequest} arg.body
     **/
    getStoreByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: StoreByBrandsRequest;
    }): any;
    /**
     *
     * @summary: Get stores by brand uids
     * @description: Get stores by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageSize] - Current request items count
     * @param {StoreByBrandsRequest} arg.body
     **/
    getStoreByBrandsPaginator({ pageSize, body }?: {
        pageSize?: number;
        body: StoreByBrandsRequest;
    }): Paginator;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller applications who has opted current company as inventory
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getOtherSellerApplications({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller applications who has opted current company as inventory
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getOtherSellerApplicationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller application
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Application Id
      
      **/
    getOtherSellerApplicationById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Opt out company or store from other seller application
     * @description: Opt out company or store from other seller application
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Application Id
     * @param {OptOutInventory} arg.body
     **/
    optOutFromApplication({ id, body }?: {
        id: string;
        body: OptOutInventory;
    }): any;
}
import PlatformApplicationClient = require("./PlatformApplicationClient");
type TicketList = {
    items?: Array<Ticket>;
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
    docs?: Array<TicketHistory>;
    limit?: number;
    page?: number;
    pages?: number;
    total?: number;
};
type CustomFormList = {
    docs?: Array<CustomForm>;
    limit?: number;
    page?: number;
    pages?: number;
    total?: number;
};
type CreateCustomFormPayload = {
    slug: string;
    title: string;
    inputs: Array<any>;
    description?: string;
    header_image?: string;
    should_notify?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: Array<any>;
    description?: string;
    header_image?: string;
    should_notify?: boolean;
    login_required?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditTicketPayload = {
    content?: TicketContent;
    category?: string;
    source?: string;
    status?: string;
    priority?: string;
    assigned_to?: AgentChangePayload;
    tags?: Array<string>;
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
    notify?: Array<any>;
};
type Filter = {
    priorities: Array<Priority>;
    categories?: Array<TicketCategory>;
    statuses: Array<Status>;
    assignees: Array<any>;
};
type TicketHistoryPayload = {
    value: any;
    type: string;
};
type CustomFormSubmissionPayload = {
    response: Array<KeyValue>;
};
type KeyValue = {
    key: string;
    value: string;
};
type GetTokenForVideoRoomResponse = {
    access_token: string;
};
type GetParticipantsInsideVideoRoomResponse = {
    participants: Array<Participant>;
};
type Participant = {
    user?: UserSchema;
    identity?: string;
    status?: string;
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
    type: string;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: Array<TicketAsset>;
};
type AddTicketPayload = {
    status: string;
    priority: string;
    category: string;
    content: TicketContent;
};
type Priority = {
    key: string;
    display: string;
    color: string;
};
type Status = {
    key: string;
    display: string;
    color: string;
};
type TicketCategory = {
    key: string;
    display: string;
    form?: CustomForm;
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
    login_required: boolean;
    should_notify: boolean;
    success_message?: string;
    submit_button?: SubmitButton;
    inputs: Array<any>;
    created_on?: CreatedOn;
    created_by?: any;
    poll_for_assignment?: PollForAssignment;
    _id: string;
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
    ticket_id: string;
    category: TicketCategory;
    source: string;
    status: Status;
    priority: Priority;
    created_by?: any;
    assigned_to?: any;
    tags?: Array<string>;
    _custom_json?: any;
    _id?: string;
    updated_at?: string;
    created_at?: string;
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
    mobile?: string;
    email?: string;
    gender?: string;
    dob?: string;
    profile_pic_url?: string;
    android_hash?: string;
    sender?: string;
    register_token?: string;
};
type SendEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    token?: string;
    register_token?: string;
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
type PasswordLoginRequestSchema = {
    captcha_code?: string;
    password?: string;
    username?: string;
};
type SendOtpRequestSchema = {
    country_code?: string;
    captcha_code?: string;
    mobile?: string;
};
type OAuthRequestSchema = {
    is_signed_in?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
type AuthSuccess = {
    register_token?: string;
    user_exists?: boolean;
    user?: AuthSuccessUser;
};
type SendOtpResponse = {
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
};
type LoginSuccess = {
    user?: UserSchema;
};
type VerifyOtpSuccess = {
    user?: UserSchema;
    user_exists?: boolean;
};
type ResetPasswordSuccess = {
    status?: string;
};
type RegisterFormSuccess = {
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
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
type OtpSuccess = {
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
};
type EmailOtpSuccess = {
    resend_token?: string;
};
type SessionListSuccess = {
    sessions?: Array<string>;
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
    users?: Array<UserSchema>;
};
type CustomerListResponseSchema = {
    items?: Array<UserSchema>;
    page?: PaginationSchema;
};
type PaginationSchema = {
    size?: number;
    item_total?: number;
    has_next?: boolean;
    type?: string;
    current?: number;
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
};
type RequiredFields = {
    email?: Email;
    mobile?: Mobile;
};
type Mobile = {
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
type Facebook = {
    app_id?: string;
};
type Accountkit = {
    app_id?: string;
};
type Google = {
    app_id?: string;
};
type UpdateUserRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    meta?: any;
};
type UserSchema = {
    first_name?: string;
    meta?: any;
    last_name?: string;
    phone_numbers?: Array<PhoneNumber>;
    emails?: Array<Email>;
    gender?: string;
    dob?: string;
    active?: boolean;
    profile_pic_url?: string;
    username?: string;
    account_type?: string;
    uid?: string;
    debug?: Debug;
    has_old_password_hash?: boolean;
    _id?: string;
    created_at?: string;
    updated_at?: string;
};
type PaymentGatewayConfigResponse = {
    success: boolean;
    excluded_fields: Array<string>;
    app_id: string;
    aggregators?: Array<any>;
    created: boolean;
    display_fields: Array<string>;
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
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
    app_id: string;
    is_active?: boolean;
};
type PaymentGatewayToBeReviewed = {
    success: boolean;
    aggregator: Array<string>;
};
type ErrorCodeAndDescription = {
    code: string;
    description: string;
};
type HttpErrorCodeAndResponse = {
    success: boolean;
    error: ErrorCodeAndDescription;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type PaymentModeList = {
    name?: string;
    card_brand?: string;
    card_id?: string;
    expired?: boolean;
    exp_year?: number;
    card_isin?: string;
    code?: string;
    merchant_code?: string;
    display_priority?: number;
    exp_month?: number;
    intent_flow?: string;
    display_name?: string;
    card_token?: string;
    fynd_vpa?: string;
    timeout?: number;
    card_reference?: string;
    logo_url?: PaymentModeLogo;
    aggregator_name: string;
    card_number?: string;
    card_name?: string;
    card_fingerprint?: string;
    intent_app_error_list?: Array<string>;
    card_brand_image?: string;
    retry_count?: number;
    nickname?: string;
    card_issuer?: string;
    card_type?: string;
};
type RootPaymentMode = {
    display_priority: number;
    name: string;
    list?: Array<PaymentModeList>;
    display_name: string;
    aggregator_name?: string;
    add_card_enabled?: boolean;
    anonymous_enable?: boolean;
};
type PaymentOptions = {
    payment_option: Array<RootPaymentMode>;
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    unique_transfer_no: any;
    is_active: boolean;
    transfer_type: string;
    more_attributes: any;
    payouts_aggregators: Array<any>;
    is_default: boolean;
    customers: any;
};
type PayoutRequest = {
    bank_details: any;
    is_active: boolean;
    transfer_type: string;
    users: any;
    aggregator: string;
    unique_external_id: string;
};
type PayoutResponse = {
    bank_details: any;
    success: boolean;
    unique_transfer_no: string;
    payouts: any;
    is_active: boolean;
    payment_status: string;
    transfer_type: string;
    users: any;
    aggregator: string;
    created: boolean;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_active: boolean;
    is_default: boolean;
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
    data: Array<any>;
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
type GetActivityStatus = {
    activity_history: ActivityHistory;
};
type ActivityHistory = {
    createdat?: string;
    message?: string;
    type?: string;
    user?: string;
};
type FailedOrders = {
    orders: FailOrder;
};
type FailOrder = {
    updated_at?: string;
    _id?: string;
    reason?: string;
    marketplace_order?: MarketplaceOrder;
    marketplace_order_id?: string;
    created_at?: string;
    app_id?: string;
    marketplace?: string;
    company_id?: number;
};
type MarketplaceOrder = {
    order_status_url?: string;
    admin_graphql_api_id?: string;
    email?: string;
    test?: boolean;
    note?: string;
    total_price?: string;
    app_id?: number;
    total_discounts_set?: TotalDiscountsSet;
    total_price_set?: TotalPriceSet;
    total_tax_set?: TotalTaxSet;
    gateway?: string;
    name?: string;
    subtotal_price_set?: SubtotalPriceSet;
    number?: number;
    buyer_accepts_marketing?: boolean;
    contact_email?: string;
    token?: string;
    source_name?: string;
    payment_gateway_names?: Array<any>;
    presentment_currency?: string;
    subtotal_price?: string;
    processed_at?: string;
    order_number?: number;
    total_tip_received?: string;
    id?: number;
    confirmed?: boolean;
    currency?: string;
    total_line_items_price?: string;
    line_items?: LineItems;
    created_at?: string;
    updated_at?: string;
    total_weight?: number;
    billing_address?: BillingAddress;
    total_shipping_price_set?: TotalShippingPriceSet;
    customer?: Customer;
    total_discounts?: string;
    total_line_items_price_set?: TotalLineItemsPriceSet;
    tags?: string;
    total_price_usd?: string;
    user_id?: number;
    total_tax?: string;
    processing_method?: string;
    shipping_address?: ShippingAddress;
    taxes_included?: boolean;
    financial_status?: string;
};
type TotalDiscountsSet = {
    presentment_money?: PresentmentMoney;
    shop_money?: ShopMoney;
};
type PresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type ShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalPriceSet = {
    shop_money?: TotalPriceSetShopMoney;
    presentment_money?: TotalPriceSetPresentmentMoney;
};
type TotalPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalTaxSet = {
    shop_money?: TotalTaxSetShopMoney;
    presentment_money?: TotalTaxSetPresentmentMoney;
};
type TotalTaxSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalTaxSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type SubtotalPriceSet = {
    shop_money?: SubtotalPriceSetShopMoney;
    presentment_money?: SubtotalPriceSetPresentmentMoney;
};
type SubtotalPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type SubtotalPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type LineItems = {
    sku?: string;
    fulfillable_quantity?: number;
    grams?: number;
    total_discount?: string;
    article?: LineItemsArticle;
    title?: string;
    variant_inventory_management?: string;
    id?: number;
    variant_id?: number;
    variant_title?: string;
    product_exists?: boolean;
    price?: string;
    admin_graphql_api_id?: string;
    quantity?: number;
    vendor?: string;
    fulfillment_service?: string;
    taxable?: boolean;
    name?: string;
    product_id?: number;
    price_set?: PriceSet;
    tax_lines?: TaxLines;
    requires_shipping?: boolean;
    gift_card?: boolean;
    total_discount_set?: TotalDiscountSet;
};
type LineItemsArticle = {
    quantities?: Quantities;
    old_article_uid?: string;
    total_quantity?: number;
    manufacturer?: Manufacturer;
    price?: ArticlePrice;
    track_inventory?: boolean;
    company?: Company;
    is_active?: boolean;
    date_meta?: FailOrderDateMeta;
    fragile?: boolean;
    marketplace_identifiers?: MarketplaceIdentifiers;
    size?: string;
    is_set?: boolean;
    dimension?: Dimension;
    weight?: Weight;
    store?: Store;
    meta?: ArticleMeta;
    uid?: string;
    brand?: ArticleBrand;
    item_id?: number;
    fynd_article_code?: string;
    _id?: string;
    identifier?: LineItemsArticleIdentifier;
    seller_identifier?: string;
    fynd_item_code?: string;
    country_of_origin?: string;
};
type Quantities = {
    not_available?: NotAvailable;
    sellable?: Sellable;
    order_committed?: OrderCommitted;
    damaged?: Damaged;
};
type NotAvailable = {
    count?: number;
    updated_at?: string;
};
type Sellable = {
    count?: number;
    updated_at?: string;
};
type OrderCommitted = {
    count?: number;
    updated_at?: string;
};
type Damaged = {
    updated_at?: string;
    count?: number;
};
type Manufacturer = {
    is_default?: boolean;
    address?: string;
    name?: string;
};
type ArticlePrice = {
    marked?: number;
    currency?: string;
    effective?: number;
    transfer?: number;
};
type Company = {
    id?: number;
    company_type?: string;
    business_type?: string;
    company_name?: string;
    created_on?: string;
    pan_no?: string;
    return_allowed?: boolean;
    meta?: string;
    exchange_allowed?: boolean;
    agreement_start_date?: string;
    exchange_within_days?: number;
    payment_procesing_charge?: number;
    fynd_a_fit_available?: boolean;
    modified_on?: string;
    return_within_days?: number;
};
type FailOrderDateMeta = {
    added_on_store?: string;
    inventory_updated_on?: string;
    created_on?: string;
    modified_on?: string;
};
type MarketplaceIdentifiers = {
    tatacliq_luxury?: TatacliqLuxury;
};
type TatacliqLuxury = {
    sku?: string;
};
type Dimension = {
    height?: number;
    width?: number;
    unit?: string;
    length?: number;
    is_default?: boolean;
};
type Weight = {
    is_default?: boolean;
    unit?: string;
    shipping?: number;
};
type Store = {
    id?: number;
};
type ArticleMeta = {
    service?: string;
};
type ArticleBrand = {
    name?: string;
    id?: number;
};
type LineItemsArticleIdentifier = {
    sku_code?: string;
};
type PriceSet = {
    shop_money?: PriceSetShopMoney;
    presentment_money?: PriceSetPresentmentMoney;
};
type PriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type PriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type TaxLines = {
    title?: string;
    price?: string;
    rate?: number;
    price_set?: TaxLinesPriceSet;
};
type TaxLinesPriceSet = {
    shop_money?: TaxLinesPriceSetShopMoney;
    presentment_money?: TaxLinesPriceSetPresentmentMoney;
};
type TaxLinesPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TaxLinesPriceSetPresentmentMoney = {
    currency_code?: string;
    amount?: string;
};
type TotalDiscountSet = {
    presentment_money?: TotalDiscountSetPresentmentMoney;
    shop_money?: TotalDiscountSetShopMoney;
};
type TotalDiscountSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalDiscountSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type BillingAddress = {
    address1?: string;
    city?: string;
    zip?: string;
    last_name?: string;
    address2?: string;
    longitude?: number;
    province_code?: string;
    phone?: string;
    company?: string;
    latitude?: number;
    name?: string;
    country?: string;
    country_code?: string;
    first_name?: string;
    province?: string;
};
type TotalShippingPriceSet = {
    shop_money?: TotalShippingPriceSetShopMoney;
    presentment_money?: TotalShippingPriceSetPresentmentMoney;
};
type TotalShippingPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalShippingPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type Customer = {
    created_at?: string;
    id?: number;
    last_name?: string;
    state?: string;
    last_order_id?: number;
    note?: string;
    verified_email?: boolean;
    phone?: string;
    accepts_marketing?: boolean;
    first_name?: string;
    tags?: string;
    last_order_name?: string;
    orders_count?: number;
    total_spent?: string;
    tax_exempt?: boolean;
    currency?: string;
    accepts_marketing_updated_at?: string;
    email?: string;
    updated_at?: string;
    admin_graphql_api_id?: string;
    default_address?: DefaultAddress;
};
type DefaultAddress = {
    last_name?: string;
    name?: string;
    province_code?: string;
    country_code?: string;
    is_default?: boolean;
    id?: number;
    customer_id?: number;
    first_name?: string;
    address1?: string;
    phone?: string;
    country_name?: string;
    company?: string;
    address2?: string;
    city?: string;
    province?: string;
    country?: string;
    zip?: string;
};
type TotalLineItemsPriceSet = {
    shop_money?: TotalLineItemsPriceSetShopMoney;
    presentment_money?: TotalLineItemsPriceSetPresentmentMoney;
};
type TotalLineItemsPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalLineItemsPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type ShippingAddress = {
    address1?: string;
    zip?: string;
    address2?: string;
    country_code?: string;
    country?: string;
    last_name?: string;
    latitude?: number;
    province_code?: string;
    first_name?: string;
    phone?: string;
    province?: string;
    longitude?: number;
    city?: string;
    company?: string;
    name?: string;
};
type OrderListing = {
    items: Array<OrderItems>;
    filters: Filters;
    next_order_status: NextOrderStatus;
    page: PlatformOrderPage;
    applied_filters: AppliedFilters;
};
type OrderItems = {
    user?: PlatformOrderUserInfo;
    delivery_address?: PlatformDeliveryAddress;
    channel?: Channel;
    breakup_values?: PlatformBreakupValues;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipment;
    created_at?: string;
    total_shipments_in_order?: number;
    payments?: ItemsPayments;
};
type PlatformOrderUserInfo = {
    mobile?: string;
    first_name?: string;
    gender?: string;
    email?: string;
    last_name?: string;
    is_anonymous_user?: boolean;
    uid?: number;
    avis_user_id?: string;
};
type PlatformDeliveryAddress = {
    area?: string;
    state?: string;
    country?: string;
    version?: string;
    address1?: string;
    latitude?: number;
    updated_at?: string;
    city?: string;
    landmark?: string;
    created_at?: string;
    name?: string;
    address?: string;
    phone?: string;
    longitude?: number;
    address_type?: string;
    email?: string;
    pincode?: string;
    address2?: string;
    contact_person?: string;
    address_category?: string;
};
type Channel = {
    name?: string;
    logo?: string;
};
type PlatformBreakupValues = {
    display?: string;
    value?: number;
    name?: string;
};
type PlatformApplication = {
    name?: string;
    owner?: string;
    post_order_reassignment?: boolean;
    id?: string;
    description?: string;
    dp_assignment?: boolean;
    article_assignment?: ArticleAssignment;
    force_reassignment?: boolean;
    token?: string;
    secret?: string;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type PlatformShipment = {
    status?: PlatformShipmentStatus;
    bags?: Bags;
    prices?: ShipmentPrices;
    breakup_values?: ShipmentBreakupValues;
    id?: string;
    dp_details?: DpDetails;
    invoice?: ShipmentInvoice;
    fulfilling_store?: PlatformFulfillingStore;
    payments?: Payments;
    gst?: ShipmentGst;
    company?: Company;
    brand?: PlatformShipmentBrand;
    coupon?: any;
    order_source?: string;
    is_not_fynd_source?: boolean;
    comment?: string;
    promise?: Promise;
    tracking_details?: ShipmentTrackingDetails;
    is_fynd_coupon?: boolean;
    order_type?: string;
    user?: ShipmentUser;
};
type PlatformShipmentStatus = {
    id?: number;
    bag_list?: Array<number>;
    created_at?: string;
    status?: string;
    name?: string;
    progress?: number;
    shipment_id?: string;
    current_shipment_status?: string;
    color_code?: string;
};
type Bags = {
    financial_breakup?: Array<BagFinancialBreakup>;
    status?: BagCurrStatus;
    item?: BagItem;
    article?: BagArticle;
    id?: number;
    prices?: BagPrices;
    gst_details?: GstDetails;
    breakup_values?: BagBreakupValues;
    update_time?: number;
    current_status?: BagCurrentStatus;
    bag_status?: BagStatus;
};
type BagFinancialBreakup = {
    value_of_good?: number;
    hsn_code?: string;
    price_effective?: number;
    cod_charges?: number;
    gst_fee?: string;
    fynd_credits?: number;
    refund_amount?: number;
    cashback_applied?: number;
    transfer_price?: number;
    amount_paid_roundoff?: number;
    coupon_value?: number;
    amount_paid?: number;
    gst_tax_percentage?: number;
    size?: string;
    total_units?: number;
    discount?: number;
    coupon_effective_discount?: number;
    cashback?: number;
    promotion_effective_discount?: number;
    gst_tag?: string;
    delivery_charge?: number;
    refund_credit?: number;
    price_marked?: number;
    identifiers?: Identifiers;
    item_name?: string;
    added_to_fynd_cash?: boolean;
    brand_calculated_amount?: number;
};
type Identifiers = {
    ean?: string;
};
type BagCurrStatus = {
    enable_tracking?: boolean;
    is_customer_return_allowed?: boolean;
    is_active?: boolean;
    is_returnable?: boolean;
    can_be_cancelled?: boolean;
};
type BagItem = {
    id?: number;
    size?: string;
    slug_key?: string;
    can_return?: boolean;
    brand_id?: number;
    l2_category?: Array<string>;
    name?: string;
    code?: string;
    can_cancel?: boolean;
    attributes?: BagItemAttributes;
    l3_category_name?: string;
    l3_category?: number;
    l1_category?: Array<string>;
    image?: Array<string>;
    brand?: string;
    last_updated_at?: string;
};
type BagItemAttributes = {
    item_code?: string;
    brand_name?: string;
    country_of_origin?: string;
};
type BagArticle = {
    identifiers?: ArticleIdentifiers;
    esp_modified?: boolean;
    is_set?: boolean;
    size?: string;
    code?: string;
    set?: Set;
    seller_identifier?: string;
    return_config?: BagArticleReturnConfig;
    _id?: string;
    uid?: string;
    child_details?: any;
};
type ArticleIdentifiers = {
    ean?: string;
};
type Set = {
    quantity?: number;
    size_distribution?: SetSizeDistribution;
};
type SetSizeDistribution = {
    sizes?: Sizes;
};
type Sizes = {
    size?: string;
    pieces?: number;
};
type BagArticleReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type ShipmentPrices = {
    refund_amount?: number;
    cashback_applied?: number;
    transfer_price?: number;
    coupon_value?: number;
    amount_paid?: number;
    delivery_charge?: number;
    coupon_effective_discount?: number;
    cod_charges?: number;
    refund_credit?: number;
    added_to_fynd_cash?: boolean;
    gst_tax_percentage?: number;
    price_marked?: number;
    price_effective?: number;
    discount?: number;
    promotion_effective_discount?: number;
    amount_paid_roundoff?: number;
    fynd_credits?: number;
    brand_calculated_amount?: number;
    cashback?: number;
    value_of_good?: number;
};
type GstDetails = {
    brand_calculated_amount?: number;
    gst_fee?: string;
    gst_tag?: string;
    hsn_code?: string;
    value_of_good?: number;
    gst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
};
type BagBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type BagCurrentStatus = {
    updated_at?: string;
    bag_state_mapper?: BagStateMapper;
    status?: string;
    state_type?: string;
};
type BagStateMapper = {
    app_state_name?: string;
    is_active?: boolean;
    display_name?: string;
    name?: string;
    app_display_name?: string;
};
type BagStatus = {
    status?: string;
    state_type?: string;
    updated_at?: string;
    bag_state_mapper?: BagStatusBagStateMapper;
};
type BagStatusBagStateMapper = {
    is_active?: boolean;
    display_name?: string;
    name?: string;
    app_display_name?: string;
    app_state_name?: string;
};
type BagPrices = {
    cashback?: number;
    refund_credit?: number;
    coupon_value?: number;
    delivery_charge?: number;
    fynd_credits?: number;
    price_marked?: number;
    cashback_applied?: number;
    value_of_good?: number;
    amount_paid_roundoff?: number;
    amount_paid?: number;
    cod_charges?: number;
    price_effective?: number;
    refund_amount?: number;
    discount?: number;
};
type ShipmentBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type DpDetails = {
    gst_tag?: string;
};
type ShipmentInvoice = {
    payment_type?: string;
    updated_date?: string;
    invoice_url?: string;
    label_url?: string;
    payment_mode?: string;
    amount_to_collect?: number;
    rto_address?: RtoAddress;
};
type RtoAddress = {
    name?: string;
    id?: number;
    phone?: string;
    location_type?: string;
    store_address_json?: StoreAddressJson;
    code?: string;
    address1?: string;
    city?: string;
    country?: string;
    pincode?: string;
    company_id?: number;
    contact_person?: string;
    state?: string;
    store_email?: string;
    address2?: string;
};
type StoreAddressJson = {
    country?: string;
    latitude?: number;
    updated_at?: string;
    area?: string;
    state?: string;
    address_type?: string;
    city?: string;
    pincode?: string;
    address1?: string;
    address2?: string;
    longitude?: number;
    email?: string;
    phone?: string;
    created_at?: string;
    contact_person?: string;
    address_category?: string;
    version?: string;
    landmark?: string;
};
type PlatformFulfillingStore = {
    packaging_material_count?: number;
    location_type?: string;
    code?: string;
    city?: string;
    meta?: FulfillingStoreMeta;
    name?: string;
    is_active?: boolean;
    address1?: string;
    store_email?: string;
    is_archived?: boolean;
    state?: string;
    address2?: string;
    contact_person?: string;
    phone?: string;
    is_enabled_for_recon?: boolean;
    fulfillment_channel?: string;
    created_at?: string;
    id?: number;
    pincode?: string;
    brand_store_tags?: Array<string>;
    company_id?: number;
    store_address_json?: FulfillingStoreStoreAddressJson;
    updated_at?: string;
    login_username?: string;
    country?: string;
};
type FulfillingStoreMeta = {
    additional_contact_details?: AdditionalContactDetails;
    documents?: Documents;
    gst_number?: string;
    display_name?: string;
    product_return_config?: ProductReturnConfig;
    allow_dp_assignment_from_fynd?: boolean;
    stage?: string;
    timing?: Timing;
};
type AdditionalContactDetails = {
    number?: Array<string>;
};
type Documents = {
    gst?: Gst;
};
type Gst = {
    legal_name?: string;
    type?: string;
    value?: string;
    verified?: boolean;
};
type ProductReturnConfig = {
    on_same_store?: boolean;
};
type Timing = {
    opening?: Opening;
    weekday?: string;
    open?: boolean;
    closing?: Closing;
};
type Opening = {
    minute?: number;
    hour?: number;
};
type Closing = {
    hour?: number;
    minute?: number;
};
type FulfillingStoreStoreAddressJson = {
    address2?: string;
    area?: string;
    email?: string;
    phone?: string;
    state?: string;
    contact_person?: string;
    country?: string;
    pincode?: string;
    version?: string;
    created_at?: string;
    address_type?: string;
    city?: string;
    address1?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    updated_at?: string;
    address_category?: string;
};
type Payments = {
    is_active?: boolean;
    display_name?: string;
    logo?: string;
    source?: string;
    source_nickname?: string;
    display_priority?: number;
    id?: number;
    mode?: string;
    payment_identifier?: string;
};
type ShipmentGst = {
    brand_calculated_amount?: number;
    value_of_good?: number;
    gst_fee?: number;
};
type PlatformShipmentBrand = {
    credit_note_allowed?: boolean;
    brand_name?: string;
    modified_on?: string;
    id?: number;
    is_virtual_invoice?: boolean;
    created_on?: string;
    logo?: string;
};
type Promise = {
    timestamp?: Timestamp;
};
type Timestamp = {
    min?: string;
    max?: string;
};
type ShipmentTrackingDetails = {
    status?: string;
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
};
type ShipmentUser = {
    email?: string;
    id?: number;
    first_name?: string;
    mobile?: string;
    gender?: string;
    last_name?: string;
    is_anonymous_user?: boolean;
    mongo_user_id?: string;
};
type ItemsPayments = {
    display_priority?: number;
    id?: number;
    is_active?: boolean;
    display_name?: string;
    logo?: string;
    payment_identifier?: string;
    source_nickname?: string;
    mode?: string;
    source?: string;
};
type Filters = {
    stages?: Stages;
};
type Stages = {
    text?: string;
    value?: string;
    is_default?: boolean;
    filters?: StagesFilters;
};
type StagesFilters = {
    text?: string;
    value?: string;
    type?: string;
    options?: Options;
};
type Options = {
    text?: string;
    value?: string;
};
type NextOrderStatus = {
    bag_confirmed?: BagConfirmed;
    dp_assigned?: DpAssigned;
    return_bag_delivered?: ReturnBagDelivered;
    placed?: Placed;
    delivery_done?: DeliveryDone;
    pending?: Pending;
    bag_packed?: BagPacked;
};
type BagConfirmed = {
    text?: string;
    value?: string;
};
type DpAssigned = {
    text?: string;
    value?: string;
};
type ReturnBagDelivered = {
    text?: string;
    value?: string;
};
type Placed = {
    text?: string;
    value?: string;
};
type DeliveryDone = {
    text?: string;
    value?: string;
};
type Pending = {
    text?: string;
    value?: string;
};
type BagPacked = {
    text?: string;
    value?: string;
};
type PlatformOrderPage = {
    next?: string;
    previous?: string;
    type?: string;
    size?: number;
    current?: number;
    has_next?: boolean;
    item_total?: ItemTotal;
};
type ItemTotal = {
    new?: number;
    processing?: number;
    returns?: number;
    all?: number;
};
type AppliedFilters = {
    stage?: string;
    stores?: Array<string>;
    from_date?: string;
    to_date?: string;
};
type UpdateOrderReprocessResponse = {
    status: string;
};
type PlatformOrderTrack = {
    success: boolean;
    request_id: string;
    message: string;
    mobile: string;
    country_code: string;
    resend_timer: number;
    resend_token?: string;
};
type GetPingResponse = {
    ping: string;
};
type UpdateShipmentStatusResponse = {
    shipments: any;
    error_shipments?: Array<any>;
};
type UpdateShipmentStatusBody = {
    shipments: any;
    force_transition: boolean;
    task: boolean;
};
type PlatformShipmentTrack = {
    results: Results;
};
type Results = {
    awb?: string;
    updated_at?: string;
    last_location_recieved_at?: string;
    reason?: string;
    shipment_type?: string;
    status?: string;
    updated_time?: string;
    account_name?: string;
};
type UpdateProcessShipmenstRequestBody = {
    shipment_ids: Array<string>;
    expected_status: string;
};
type UpdateProcessShipmenstRequestResponse = {
    success: boolean;
    message: string;
};
type GetVoiceCallbackResponse = {
    message: string;
};
type GetClickToCallResponse = {
    message: string;
};
type ApefaceApiError = {
    message?: string;
};
type DeleteResponse = {
    message?: string;
};
type ErrorResponse = {
    status?: number;
    message?: string;
    code?: string;
    meta?: any;
};
type GetSearchWordsData = {
    uid?: string;
    words?: Array<string>;
    result?: any;
    _custom_json?: any;
    app_id?: string;
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
    is_active?: boolean;
    words?: Array<string>;
    result: SearchKeywordResult;
    _custom_json?: any;
    app_id?: string;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: Array<GetSearchWordsData>;
};
type GetAutocompleteWordsData = {
    uid?: string;
    words?: Array<string>;
    results?: Array<any>;
    _custom_json?: any;
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: Array<GetAutocompleteWordsData>;
};
type AutocompletePageAction = {
    query: any;
    type: string;
    params?: any;
    url?: string;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type Media = {
    type?: string;
    url?: string;
};
type AutocompleteResult = {
    _custom_json?: any;
    display?: string;
    action?: AutocompleteAction;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    words?: Array<string>;
    results?: Array<AutocompleteResult>;
    _custom_json?: any;
    app_id?: string;
};
type CreateAutocompleteWordsResponse = {
    words?: Array<string>;
    _custom_json?: any;
    app_id?: string;
    results?: Array<any>;
};
type ProductBundleItem = {
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    product_uid: number;
    auto_select?: boolean;
    max_quantity: number;
    min_quantity: number;
};
type GetProductBundleCreateResponse = {
    choice: string;
    slug: string;
    meta?: any;
    logo?: string;
    same_store_assignment?: boolean;
    created_by?: any;
    name: string;
    modified_by?: any;
    is_active: boolean;
    id?: string;
    page_visibility?: Array<string>;
    products: Array<ProductBundleItem>;
    company_id?: number;
    modified_on?: string;
    created_on?: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: Array<GetProductBundleCreateResponse>;
};
type ProductBundleRequest = {
    choice: string;
    slug: string;
    meta?: any;
    logo?: string;
    same_store_assignment?: boolean;
    created_by?: any;
    name: string;
    modified_by?: any;
    is_active: boolean;
    page_visibility?: Array<string>;
    products: Array<ProductBundleItem>;
    modified_on?: string;
    created_on?: string;
};
type Size = {
    quantity?: number;
    display?: string;
    is_available?: boolean;
    value?: string;
};
type LimitedProductData = {
    attributes?: any;
    uid?: number;
    sizes?: Array<string>;
    slug?: string;
    identifier?: any;
    quantity?: number;
    name?: string;
    short_description?: string;
    country_of_origin?: string;
    item_code?: string;
    images?: Array<string>;
    price?: any;
};
type Price = {
    max_effective?: number;
    min_marked?: number;
    min_effective?: number;
    currency?: string;
    max_marked?: number;
};
type GetProducts = {
    sizes?: Array<Size>;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    product_uid?: number;
    product_details?: LimitedProductData;
    auto_select?: boolean;
    max_quantity?: number;
    min_quantity?: number;
    price?: Price;
};
type GetProductBundleResponse = {
    choice?: string;
    slug?: string;
    meta?: any;
    logo?: string;
    same_store_assignment?: boolean;
    name?: string;
    is_active?: boolean;
    page_visibility?: Array<string>;
    products?: Array<GetProducts>;
    company_id?: number;
};
type ProductBundleUpdateRequest = {
    choice: string;
    slug: string;
    meta?: any;
    logo?: string;
    same_store_assignment?: boolean;
    name: string;
    modified_by?: any;
    is_active: boolean;
    page_visibility?: Array<string>;
    products: Array<ProductBundleItem>;
    modified_on?: string;
};
type ListSizeGuide = {
    page?: any;
    items?: Array<any>;
};
type Meta = {
    unit?: string;
    values?: Array<any>;
    headers?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    id?: string;
    name: string;
    subtitle?: string;
    modified_by?: any;
    title: string;
    active?: boolean;
    description?: string;
    brand_id?: number;
    modified_on?: string;
    company_id?: number;
    created_by?: any;
    tag?: string;
    created_on?: string;
    guide?: Guide;
    image?: string;
};
type SuccessResponse = {
    uid?: number;
    success?: boolean;
};
type SizeGuideResponse = {
    created_by?: any;
    id?: string;
    modified_by?: any;
    name?: string;
    subtitle?: string;
    title?: string;
    active?: boolean;
    brand_id?: number;
    company_id?: number;
    modified_on?: string;
    tag?: string;
    created_on?: string;
    guide?: any;
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    key?: string;
    filter_types?: Array<string>;
    units?: Array<any>;
};
type MetaDataListingFilterResponse = {
    data?: Array<MetaDataListingFilterMetaResponse>;
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: Array<MetaDataListingSortMetaResponse>;
};
type MetaDataListingResponse = {
    filter: MetaDataListingFilterResponse;
    sort: MetaDataListingSortResponse;
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
    min: number;
    max: number;
};
type ConfigurationProductVariantConfig = {
    logo?: string;
    name: string;
    is_active: boolean;
    key: string;
    size: ProductSize;
    priority: number;
    display_type: string;
};
type ConfigurationProductVariant = {
    config?: Array<ConfigurationProductVariantConfig>;
};
type ConfigurationProductConfig = {
    logo?: string;
    subtitle?: string;
    is_active: boolean;
    key: string;
    title?: string;
    size?: ProductSize;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: Array<ConfigurationProductConfig>;
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    map?: any;
    sort?: string;
    bucket_points?: Array<ConfigurationBucketPoints>;
    value?: string;
    condition?: string;
};
type ConfigurationListingFilterConfig = {
    type: string;
    logo?: string;
    name?: string;
    is_active: boolean;
    key: string;
    priority: number;
    value_config?: ConfigurationListingFilterValue;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: Array<ConfigurationListingFilterConfig>;
};
type ConfigurationListingSortConfig = {
    logo?: string;
    name?: string;
    is_active: boolean;
    key: string;
    priority: number;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: Array<ConfigurationListingSortConfig>;
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type AppCatalogConfiguration = {
    config_id?: string;
    config_type: string;
    id?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    app_id: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    config_id?: string;
    config_type: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    app_id: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    config_id?: string;
    config_type: string;
    id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    name?: string;
    is_selected?: boolean;
    value?: string;
};
type ProductFiltersKey = {
    name: string;
    display: string;
    logo?: string;
    kind?: string;
};
type ProductFiltersValue = {
    count?: number;
    display: string;
    min?: number;
    display_format?: string;
    currency_symbol?: string;
    currency_code?: string;
    selected_max?: number;
    is_selected: boolean;
    query_format?: string;
    value: string;
    selected_min?: number;
    max?: number;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: Array<ProductFiltersValue>;
};
type GetCollectionQueryOptionResponse = {
    sort_on?: Array<ProductSortOn>;
    filters?: Array<ProductFilters>;
};
type BannerImage = {
    aspect_ratio?: string;
    url?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type ProductListingActionPage = {
    query?: any;
    type?: string;
};
type ProductListingAction = {
    type?: string;
    page?: ProductListingActionPage;
};
type Media1 = {
    type?: string;
    meta?: any;
    url: string;
};
type GetCollectionDetailNest = {
    meta?: any;
    cron?: any;
    is_active?: boolean;
    banners?: ImageUrls;
    name?: string;
    visible_facets_keys?: Array<string>;
    _schedule?: any;
    description?: string;
    action?: ProductListingAction;
    type?: string;
    allow_sort?: boolean;
    badge?: any;
    tag?: Array<string>;
    app_id?: string;
    uid?: string;
    slug?: string;
    logo?: Media1;
    query?: any;
    allow_facets?: boolean;
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
    type?: Array<CollectionListingFilterType>;
    tags?: Array<CollectionListingFilterTag>;
};
type GetCollectionListingResponse = {
    page?: Page;
    items?: Array<GetCollectionDetailNest>;
    filters?: CollectionListingFilter;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type Schedule = {
    cron?: string;
    duration?: number;
    start?: string;
    end?: string;
};
type UserInfo = {
    username?: string;
    uid?: string;
    user_id?: string;
    email?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CreateCollection = {
    meta?: any;
    tags?: Array<string>;
    is_active?: boolean;
    banners: CollectionBanner;
    seo?: SeoDetail;
    name: string;
    visible_facets_keys?: Array<string>;
    _schedule?: Schedule;
    description?: string;
    sort_on?: string;
    _custom_json?: any;
    published?: boolean;
    type: string;
    allow_sort?: boolean;
    created_by?: UserInfo;
    badge?: CollectionBadge;
    _locale_language?: any;
    app_id: string;
    slug: string;
    logo: CollectionImage;
    modified_by?: UserInfo;
    query?: any;
    allow_facets?: boolean;
};
type CollectionCreateResponse = {
    app_id?: string;
    type?: string;
    slug?: string;
    meta?: any;
    logo?: BannerImage;
    cron?: any;
    name?: string;
    allow_sort?: boolean;
    is_active?: boolean;
    visible_facets_keys?: Array<string>;
    badge?: any;
    query?: any;
    _schedule?: any;
    allow_facets?: boolean;
    description?: string;
    tag?: Array<string>;
    banners?: ImageUrls;
};
type CollectionDetailResponse = {
    app_id?: string;
    type?: string;
    slug?: string;
    meta?: any;
    logo?: Media1;
    cron?: any;
    name?: string;
    allow_sort?: boolean;
    is_active?: boolean;
    visible_facets_keys?: Array<string>;
    badge?: any;
    query?: any;
    _schedule?: any;
    allow_facets?: boolean;
    description?: string;
    tag?: Array<string>;
    banners?: ImageUrls;
};
type Price1 = {
    currency_symbol?: string;
    min?: number;
    currency_code?: string;
    max?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingDetail = {
    attributes?: any;
    tryouts?: Array<string>;
    rating_count?: number;
    image_nature?: string;
    price?: ProductListingPrice;
    sellable?: boolean;
    name?: string;
    promo_meta?: any;
    short_description?: string;
    description?: string;
    rating?: number;
    has_variant?: boolean;
    type?: string;
    medias?: Array<Media1>;
    discount?: string;
    product_online_date?: string;
    color?: string;
    similars?: Array<string>;
    uid?: number;
    slug: string;
    teaser_tag?: any;
    item_type?: string;
    highlights?: Array<string>;
};
type GetCollectionItemsResponse = {
    sort_on?: Array<ProductSortOn>;
    page?: Page;
    items?: Array<ProductListingDetail>;
    filters?: Array<ProductFilters>;
};
type CollectionItemRequest = {
    page_size: number;
    page_no: number;
};
type UpdatedResponse = {
    message?: string;
};
type CatalogInsightItem = {
    sellable_count?: number;
    count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightBrand = {
    available_sizes?: number;
    name?: string;
    total_articles?: number;
    article_freshness?: number;
    total_sizes?: number;
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
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    enabled?: boolean;
    brand_ids?: Array<number>;
    opt_level: string;
    store_ids?: Array<number>;
};
type CompanyOptIn = {
    store_ids: Array<number>;
    created_by?: any;
    modified_by?: any;
    created_on: number;
    platform: string;
    enabled: boolean;
    company_id: number;
    modified_on: number;
    brand_ids: Array<number>;
    opt_level: string;
};
type GetOptInPlatform = {
    page: Page;
    items: Array<CompanyOptIn>;
};
type OptinCompanyDetail = {
    uid?: number;
    company_type?: string;
    business_type?: string;
    name?: string;
};
type CompanyBrandDetail = {
    company_id?: number;
    brand_id?: number;
    total_article?: number;
    brand_name?: string;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: Array<CompanyBrandDetail>;
};
type OptinCompanyMetrics = {
    company?: string;
    store?: number;
    brand?: number;
};
type StoreDetail = {
    uid?: number;
    name?: string;
    additional_contacts?: Array<any>;
    documents?: Array<any>;
    store_type?: string;
    store_code?: string;
    display_name?: string;
    company_id?: number;
    modified_on?: string;
    created_on?: string;
    timing?: any;
};
type OptinStoreDetails = {
    page?: Page;
    items?: Array<StoreDetail>;
};
type BasePage = {
    type?: string;
    next_id?: string;
    item_total?: number;
    has_next?: boolean;
    has_previous?: boolean;
    size?: number;
    current?: number;
};
type MultipleCommon = {
    uid?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: BasePage;
    items?: MultipleCommon;
};
type PTErrorResponse = {
    meta?: any;
    code?: string;
    status?: number;
    message?: string;
    errors?: any;
};
type BasePage1 = {
    type?: string;
    next_id?: string;
    item_total?: number;
    has_next?: boolean;
    has_previous?: boolean;
    size?: number;
    current?: number;
};
type UserSerializer = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetDepartment = {
    uid?: number;
    slug?: string;
    synonyms?: Array<string>;
    logo?: string;
    created_by?: UserSerializer;
    name?: string;
    modified_by?: UserSerializer;
    is_active?: boolean;
    item_type?: string;
    created_on?: string;
    modified_on?: string;
    page_size?: number;
    search?: string;
    priority_order?: number;
    page_no?: number;
};
type DepartmentsResponse = {
    page?: BasePage1;
    items?: Array<GetDepartment>;
};
type DepartmentErrorResponse = {
    meta?: any;
    code?: string;
    status?: number;
    message?: string;
    errors?: any;
};
type ProductTemplate = {
    attributes?: Array<string>;
    is_physical: boolean;
    slug: string;
    departments?: Array<string>;
    logo?: string;
    name?: string;
    modified_by?: any;
    is_active?: boolean;
    is_archived?: boolean;
    description?: string;
    modified_on?: string;
    categories?: Array<string>;
    created_by?: any;
    tag?: string;
    created_on?: string;
};
type TemplatesResponse = {
    page?: BasePage;
    items?: ProductTemplate;
};
type TemplatesValidationResponse = {
    data?: MultipleCommon;
};
type InventoryValidationResponse = {
    message?: string;
    data?: MultipleCommon;
};
type HSNData = {
    hsn_code?: Array<string>;
    country_of_origin?: Array<string>;
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type ProductConfligurationDownloads = {
    data?: Array<MultipleCommon>;
    multivalue?: boolean;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type Media2 = {
    portrait: string;
    landscape: string;
    logo: string;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type Category = {
    uid?: number;
    tryouts?: Array<string>;
    departments: Array<number>;
    slug?: string;
    synonyms?: Array<string>;
    name: string;
    marketplaces?: CategoryMapping;
    is_active: boolean;
    modified_by?: any;
    media?: Media2;
    created_on?: string;
    priority?: number;
    level: number;
    modified_on?: string;
    created_by?: any;
    _id?: string;
    hierarchy?: Array<Hierarchy>;
};
type CategoryResponse = {
    page?: BasePage1;
    items?: Array<Category>;
};
type CategoryRequestBody = {
    tryouts?: Array<string>;
    departments: Array<number>;
    slug?: string;
    synonyms?: Array<string>;
    name: string;
    marketplaces?: CategoryMapping;
    is_active: boolean;
    media?: Media2;
    priority?: number;
    level: number;
    hierarchy?: Array<Hierarchy>;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type PageData = {
    has_previous?: boolean;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    current?: string;
};
type UserCommon = {
    company_id?: number;
    user_id?: string;
    username?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type Attributes = {
    l3_mapping?: Array<string>;
    material?: string;
    meta_nature?: string;
    verified_on?: string;
    image_nature?: string;
    product_fit?: string;
    stage?: string;
    gender?: Array<string>;
    sleeve_length?: string;
    modified_on?: string;
    neck_type?: string;
    color?: string;
    is_image_less_product?: boolean;
    created_by?: UserCommon;
    created_on?: string;
    pattern?: string;
    essential?: string;
    primary_color?: string;
    modified_by?: UserCommon;
    primary_material?: string;
    verified_by?: VerifiedBy;
};
type Logo = {
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
    url?: string;
};
type Brand = {
    name?: string;
    uid?: number;
    logo?: Logo;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Product = {
    attributes?: Attributes;
    departments?: Array<number>;
    is_active?: boolean;
    company_id?: number;
    item_code?: string;
    size_guide?: string;
    multi_size?: boolean;
    brand?: Brand;
    images?: Array<string>;
    name?: string;
    media?: Array<string>;
    category_slug?: string;
    description?: string;
    currency?: string;
    template_tag?: string;
    is_set?: boolean;
    product_publish?: ProductPublished;
    hsn_code?: string;
    uid?: number;
    sizes?: Array<any>;
    slug?: string;
    id?: string;
    item_type?: string;
    all_sizes?: Array<string>;
    highlights?: string;
    country_of_origin?: string;
    is_dependent?: boolean;
};
type ProductListingResponse = {
    page?: PageData;
    items?: Array<Product>;
};
type ReturnConfig = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
};
type OrderQuantity = {
    maximum?: number;
    minimum?: number;
    is_set?: boolean;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type Trader = {
    name: string;
    address: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductCreateUpdate = {
    requester?: string;
    departments: Array<number>;
    change_request_id?: string;
    tags?: Array<string>;
    variants?: any;
    return_config?: ReturnConfig;
    is_active?: boolean;
    product_group_tag?: Array<string>;
    company_id: number;
    item_code: string;
    size_guide?: string;
    custom_order?: CustomOrder;
    multi_size?: boolean;
    name: string;
    short_description?: string;
    media?: Array<Media1>;
    category_slug: string;
    description?: string;
    currency: string;
    _custom_json?: any;
    template_tag: string;
    brand_uid: number;
    moq?: OrderQuantity;
    is_set?: boolean;
    product_publish?: ProductPublish;
    hsn_code: string;
    trader?: Trader;
    is_image_less_product?: boolean;
    uid?: number;
    slug: string;
    teaser_tag?: TeaserTag;
    item_type: string;
    highlights?: Array<string>;
    trader_type?: string;
    country_of_origin: string;
    is_dependent?: boolean;
    no_of_boxes?: number;
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    stage?: string;
    total?: number;
    created_by?: UserDetail;
    template?: ProductTemplate;
    file_path?: string;
    cancelled?: number;
    modified_by?: UserDetail;
    is_active?: boolean;
    succeed?: number;
    cancelled_records?: Array<string>;
    failed_records?: Array<string>;
    modified_on?: string;
    company_id?: number;
    failed?: number;
    created_on?: string;
    template_tag?: string;
};
type ProductBulkRequestList = {
    page?: PageData;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    username?: string;
    uid?: string;
    user_id?: string;
    email?: string;
};
type BulkJob = {
    stage?: string;
    total: number;
    custom_template_tag?: string;
    file_path?: string;
    modified_by?: UserInfo1;
    cancelled?: number;
    is_active?: boolean;
    failed?: number;
    tracking_url?: string;
    succeed?: number;
    cancelled_records?: Array<any>;
    failed_records?: Array<any>;
    modified_on?: string;
    company_id: number;
    created_by?: UserInfo1;
    created_on: string;
    template_tag?: string;
};
type BulkProductRequest = {
    company_id: number;
    batch_id: string;
    data: Array<any>;
    template_tag: string;
};
type NestedTags = {
    tags?: Array<string>;
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type Items = {
    stage?: string;
    total?: number;
    id?: string;
    file_path?: string;
    modified_by?: UserCommon;
    cancelled?: number;
    failed?: number;
    is_active?: boolean;
    tracking_url?: string;
    succeed?: number;
    cancelled_records?: Array<string>;
    failed_records?: Array<string>;
    modified_on?: string;
    company_id?: number;
    created_by?: UserCommon;
    retry?: number;
    created_on?: string;
};
type BulkAssetResponse = {
    page?: PageData;
    items?: Array<Items>;
};
type ProductBulkAssets = {
    company_id?: number;
    user: any;
    url: string;
};
type InventoryRequest = {
    total?: number;
    size?: string;
    page_size?: number;
    search?: string;
    page_no?: number;
};
type ItemQuery = {
    item_code?: string;
    uid?: number;
    brand_uid?: number;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: Array<SetSize>;
};
type InventorySet = {
    quantity?: number;
    size_distribution: SizeDistribution;
};
type GTIN = {
    primary?: boolean;
    gtin_value: string;
    gtin_type: string;
};
type InvSize = {
    price_transfer?: number;
    item_weight_unit_of_measure?: string;
    item_width?: number;
    is_set?: boolean;
    item_dimensions_unit_of_measure?: string;
    quantity: number;
    set?: InventorySet;
    size: string;
    store_code: string;
    item_weight?: number;
    price_effective: number;
    currency: string;
    identifiers: Array<GTIN>;
    item_length?: number;
    item_height?: number;
    price: number;
};
type InventoryRequest1 = {
    company_id: number;
    item: ItemQuery;
    sizes: Array<InvSize>;
};
type BulkRequestGet = {
    stage?: string;
    start_date?: string;
    total?: number;
    custom_template_tag?: string;
    end_date?: string;
    page_size?: number;
    search?: string;
    page_no?: number;
    template_tag?: string;
};
type CommonResponse = {
    success?: string;
};
type Size1 = {
    price_transfer?: number;
    item_weight_unit_of_measure?: string;
    item_width?: number;
    is_set?: boolean;
    item_dimensions_unit_of_measure?: string;
    quantity: number;
    seller_identifier: string;
    set?: InventorySet;
    size?: string;
    store_code: string;
    item_weight?: number;
    price_effective: number;
    currency: string;
    identifiers?: Array<any>;
    item_length?: number;
    item_height?: number;
    price: number;
};
type InventoryBulkRequest = {
    company_id: number;
    user?: any;
    sizes: Array<Size1>;
    batch_id: string;
};
type InventoryExportJob = {
    task_id: string;
    completed_on?: string;
    seller_id: number;
    url?: string;
    request_params?: any;
    trigger_on?: string;
    status?: string;
};
type InventoryExportRequest = {
    type?: string;
    store?: Array<number>;
    brand?: Array<number>;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    multivalues?: boolean;
    data?: Array<FilerList>;
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
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
};
type StartRequest = {
    file_name: string;
    content_type: string;
    size: number;
    tags?: Array<string>;
};
type CompleteResponse = {
    _id: string;
    file_name: string;
    file_path: string;
    content_type: string;
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: string;
    tags?: Array<string>;
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
    stacktrace?: Array<string>;
    finished_on: number;
    processed_on: number;
};
type BulkResponse = {
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
    urls: Array<string>;
    destination: Destination;
    configuration?: ReqConfiguration;
};
type Urls = {
    url: string;
    signed_url: string;
    expiry: number;
};
type SignUrlResponse = {
    urls: Array<Urls>;
};
type SignUrlRequest = {
    expiry: number;
    urls: Array<string>;
};
type DbRecord = {
    success: boolean;
    tags: Array<string>;
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
    items: Array<DbRecord>;
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
    updated_at?: string;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    count?: number;
};
type ShortLinkList = {
    items?: Array<ShortLinkRes>;
    page?: Page;
};
type ErrorRes = {
    message?: string;
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
    platforms?: Array<string>;
    _id?: string;
    loyalty_points?: LoyaltyPoints;
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
    franchise_enabled?: boolean;
    exclude_category?: Array<any>;
    image?: Array<string>;
    company_store?: Array<any>;
};
type InventoryBrand = {
    criteria?: string;
    brands?: Array<any>;
};
type InventoryStore = {
    criteria?: string;
    stores?: Array<any>;
    rules?: AppStoreRules;
};
type AppStoreRules = {
    companies?: Array<number>;
    brands?: Array<any>;
};
type InventoryCategory = {
    criteria?: string;
    categories?: Array<any>;
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
    enforced_stores?: Array<any>;
};
type ArticleAssignmentRules = {
    store_priority?: StorePriority;
};
type StorePriority = {
    enabled?: boolean;
    storetype_order?: Array<any>;
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
type AppCartConfig = {
    delivery_charges?: DeliveryCharges;
    enabled?: boolean;
    max_cart_items?: number;
    min_cart_value?: number;
    bulk_coupons?: boolean;
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
};
type AppLogisticsConfig = {
    logistics_by_seller?: boolean;
    serviceability_check?: boolean;
    same_day_delivery?: boolean;
    dp_assignment?: boolean;
};
type LoyaltyPoints = {
    enabled?: boolean;
    auto_apply?: boolean;
};
type AppInventoryPartialUpdate = {
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    loyalty_points?: LoyaltyPoints;
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
    items?: Array<BrandCompanyInfo>;
    page?: Page;
};
type StoreByBrandsRequest = {
    company_id?: number;
    brands: number;
    search_text?: string;
};
type StoreByBrandsResponse = {
    items?: Array<BrandStoreInfo>;
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
    items?: Array<Application>;
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
    supported_currency?: Array<string>;
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
    domains?: Array<Domain>;
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
    status?: Array<DomainStatus>;
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
    domains?: Array<DomainSuggestion>;
};
type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn;
    page?: Page;
};
type IntegrationOptIn = {
    validators?: Validators;
    description?: string;
    description_html?: string;
    constants?: string;
    companies?: Array<any>;
    support?: Array<string>;
    _id?: string;
    name?: string;
    meta?: IntegrationMeta;
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
    json_schema?: JsonSchema;
    browser_script?: string;
};
type JsonSchema = {
    display?: string;
    key?: string;
    type?: string;
    tooltip?: string;
};
type StoreValidator = {
    json_schema?: Array<JsonSchema>;
    browser_script?: string;
};
type InventoryValidator = {
    json_schema?: Array<JsonSchema>;
    browser_script?: string;
};
type OrderValidator = {
    json_schema?: Array<JsonSchema>;
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
    companies?: Array<any>;
    support?: Array<string>;
    _id?: string;
    name?: string;
    meta?: IntegrationMeta;
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type IntegrationConfigResponse = {
    items?: IntegrationLevel;
};
type IntegrationLevel = {
    opted?: boolean;
    permissions?: Array<any>;
    last_patch?: Array<any>;
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    meta?: Array<any>;
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    data?: any;
};
type OptedStoreIntegration = {
    other_opted?: boolean;
    other_integration?: IntegrationOptIn;
    other_entity?: OtherEntity;
};
type OtherEntity = {
    opted?: boolean;
    permissions?: Array<string>;
    last_patch?: LastPatch;
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    data?: OtherEntityData;
    meta?: Array<any>;
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
    image?: Array<string>;
    franchise_enabled?: boolean;
    out_of_stock?: boolean;
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
    deployed_stores?: Array<number>;
    q?: string;
};
type DeploymentMeta = {
    deployed_stores?: Array<number>;
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
    __v?: number;
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
    items?: Array<OtherSellerApplication>;
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
    store: Array<number>;
    company: Array<number>;
};
type ProductDetailFeature = {
    similar?: Array<string>;
    seller_selection?: boolean;
    update_product_meta?: boolean;
    request_product?: boolean;
};
type LaunchPage = {
    page_type?: string;
    params?: string;
    query?: string;
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
    listing_page?: ListingPageFeature;
    currency?: CurrencyFeature;
    revenue_engine?: RevenueEngineFeature;
    feedback?: FeedbackFeature;
    compare_products?: CompareProductsFeature;
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
    sort?: string;
};
type ListingPageFeature = {
    sort_on?: string;
};
type CurrencyFeature = {
    value?: Array<string>;
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
    is_default?: boolean;
    is_shortlink?: boolean;
    _id?: string;
    name?: string;
};
type ApplicationWebsite = {
    enabled?: boolean;
    basepath?: string;
};
type ApplicationCors = {
    domains?: Array<string>;
};
type ApplicationAuth = {
    enabled?: boolean;
};
type ApplicationRedirections = {
    from?: string;
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
    redirections?: Array<ApplicationRedirections>;
    meta?: Array<ApplicationMeta>;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Array<Domain>;
    app_type?: string;
    mobile_logo?: SecureUrl;
    domain?: Domain;
};
type NotFound = {
    message?: string;
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
    brands?: Array<number>;
};
type StoreCriteriaRule = {
    companies?: Array<number>;
    brands?: Array<number>;
};
type InventoryStoreRule = {
    criteria?: string;
    rules?: Array<StoreCriteriaRule>;
    stores?: Array<number>;
};
type InventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type StorePriorityRule = {
    enabled?: boolean;
    storetype_order?: Array<string>;
};
type ArticleAssignmentRule = {
    store_priority?: StorePriorityRule;
};
type InventoryArticleAssignment = {
    post_order_reassignment?: boolean;
    enforced_stores?: Array<number>;
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
    address_line?: Array<string>;
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
    phone?: Array<string>;
    email?: Array<string>;
    timing?: string;
};
type SocialLinks = {
    facebook?: Facebook;
    instagram?: Instagram;
    twitter?: Twitter;
    pinterest?: Pinterest;
    google_plus?: GooglePlus;
    youtube?: Youtube;
    linked_in?: LinkedIn;
    vimeo?: Vimeo;
    blog_link?: BlogLink;
};
type Instagram = {
    title?: string;
    icon?: string;
    link?: string;
};
type Twitter = {
    title?: string;
    icon?: string;
    link?: string;
};
type Pinterest = {
    title?: string;
    icon?: string;
    link?: string;
};
type GooglePlus = {
    title?: string;
    icon?: string;
    link?: string;
};
type Youtube = {
    title?: string;
    icon?: string;
    link?: string;
};
type LinkedIn = {
    title?: string;
    icon?: string;
    link?: string;
};
type Vimeo = {
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
    domains?: Array<Domain>;
    _id?: string;
};
type CurrenciesResponse = {
    items?: Array<Currency>;
};
type StoreLatLong = {
    type?: string;
    coordinates?: Array<number>;
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
    items?: Array<OrderingStore>;
    deployed_stores?: Array<number>;
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
    __v?: number;
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
    auth?: Auth;
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
type Auth = {
    google?: Google;
    facebook?: Facebook;
    accountkit?: Accountkit;
};
type GoogleMap = {
    credentials?: GoogleMapCredentials;
};
type GoogleMapCredentials = {
    api_key?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
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
    codes?: Array<string>;
    networks?: Array<string>;
    types?: Array<string>;
    uses?: PaymentAllowValue;
};
type PaymentCodes = {
    pl?: PaymentModes;
    card?: PaymentModes;
    wl?: PaymentModes;
    ps?: PaymentModes;
    qr?: PaymentModes;
    upi?: PaymentModes;
    nb?: PaymentModes;
};
type Restrictions = {
    coupon_allowed?: boolean;
    price_range?: PriceRange;
    ordering_stores?: Array<number>;
    post_order?: PostOrder;
    bulk_bundle?: BulkBundleRestriction;
    platforms?: Array<string>;
    uses?: UsesRestriction;
    payments?: PaymentCodes;
};
type Validity = {
    priority?: number;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Rule = {
    discount_qty?: number;
    max?: number;
    min?: number;
    key?: number;
    value?: number;
};
type CouponSchedule = {
    duration?: number;
    next_schedule?: Array<any>;
    end?: string;
    cron?: string;
    start?: string;
};
type RuleDefinition = {
    applicable_on: string;
    scope?: Array<string>;
    type: string;
    auto_apply?: boolean;
    calculate_on: string;
    currency_code?: string;
    is_exact?: boolean;
    value_type: string;
};
type Identifier = {
    item_id?: Array<number>;
    collection_id?: Array<string>;
    category_id?: Array<number>;
    article_id?: Array<string>;
    company_id?: Array<number>;
    brand_id?: Array<number>;
    store_id?: Array<number>;
    user_id?: Array<string>;
};
type State = {
    is_public?: boolean;
    is_display?: boolean;
    is_archived?: boolean;
};
type Validation = {
    app_id?: Array<string>;
    anonymous?: boolean;
    user_registered_after?: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    remove?: DisplayMetaDict;
    title?: string;
    apply?: DisplayMetaDict;
    subtitle?: string;
    auto?: DisplayMetaDict;
    description?: string;
};
type CouponAdd = {
    code: string;
    ownership: Ownership;
    restrictions?: Restrictions;
    validity: Validity;
    date_meta?: CouponDateMeta;
    action?: CouponAction;
    tags?: Array<string>;
    author?: CouponAuthor;
    rule: Array<Rule>;
    _schedule?: CouponSchedule;
    rule_definition: RuleDefinition;
    identifiers: Identifier;
    state?: State;
    validation?: Validation;
    type_slug: string;
    display_meta: DisplayMeta;
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
    code: string;
    ownership: Ownership;
    restrictions?: Restrictions;
    validity: Validity;
    date_meta?: CouponDateMeta;
    action?: CouponAction;
    tags?: Array<string>;
    author?: CouponAuthor;
    rule: Array<Rule>;
    _schedule?: CouponSchedule;
    rule_definition: RuleDefinition;
    identifiers: Identifier;
    state?: State;
    validation?: Validation;
    type_slug: string;
    display_meta: DisplayMeta;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
import Paginator = require("../common/Paginator");
import { OrderValidator } from "./PlatformModels";
