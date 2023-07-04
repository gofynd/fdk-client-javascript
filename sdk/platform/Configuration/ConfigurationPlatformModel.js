const Joi = require("joi");

class ConfigurationModel {
  static Android() {
    return Joi.object({
      api_key: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
    });
  }
  static App() {
    return Joi.object({
      auth: ConfigurationModel.ApplicationAuth(),
      channel_type: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      desc: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static AppCartConfig() {
    return Joi.object({
      bulk_coupons: Joi.boolean(),
      delivery_charges: ConfigurationModel.DeliveryCharges(),
      enabled: Joi.boolean(),
      max_cart_items: Joi.number(),
      min_cart_value: Joi.number(),
      revenue_engine_coupon: Joi.boolean(),
    });
  }
  static AppCurrencyResponse() {
    return Joi.object({
      application: Joi.string().allow(""),
      default_currency: ConfigurationModel.DefaultCurrency(),
      supported_currency: Joi.array().items(ConfigurationModel.Currency()),
    });
  }
  static AppDomain() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }
  static AppFeature() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      app: Joi.string().allow(""),
      cart: ConfigurationModel.CartFeature(),
      common: ConfigurationModel.CommonFeature(),
      created_at: Joi.string().allow(""),
      home_page: ConfigurationModel.HomePageFeature(),
      landing_page: ConfigurationModel.LandingPageFeature(),
      order: ConfigurationModel.OrderFeature(),
      pcr: ConfigurationModel.PcrFeature(),
      product_detail: ConfigurationModel.ProductDetailFeature(),
      qr: ConfigurationModel.QrFeature(),
      registration_page: ConfigurationModel.RegistrationPageFeature(),
      updated_at: Joi.string().allow(""),
    });
  }
  static AppFeatureRequest() {
    return Joi.object({
      feature: ConfigurationModel.AppFeature(),
    });
  }
  static AppFeatureResponse() {
    return Joi.object({
      feature: ConfigurationModel.AppFeature(),
    });
  }
  static AppInventory() {
    return Joi.object({
      article_assignment: ConfigurationModel.InventoryArticleAssignment(),
      brand: ConfigurationModel.InventoryBrandRule(),
      franchise_enabled: Joi.boolean(),
      image: Joi.array().items(Joi.string().allow("")),
      only_verified_products: Joi.boolean(),
      out_of_stock: Joi.boolean(),
      payment: ConfigurationModel.InventoryPaymentConfig(),
      store: ConfigurationModel.InventoryStoreRule(),
    });
  }
  static AppInventoryCompanies() {
    return Joi.object({
      company_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static AppInventoryConfig() {
    return Joi.object({
      brand: ConfigurationModel.InventoryBrand(),
      category: ConfigurationModel.InventoryCategory(),
      company_store: Joi.array().items(Joi.any()),
      discount: ConfigurationModel.InventoryDiscount(),
      exclude_category: Joi.array().items(Joi.any()),
      franchise_enabled: Joi.boolean(),
      image: Joi.array().items(Joi.string().allow("")),
      only_verified_products: Joi.boolean(),
      out_of_stock: Joi.boolean(),
      price: ConfigurationModel.InventoryPrice(),
      store: ConfigurationModel.InventoryStore(),
    });
  }
  static AppInventoryPartialUpdate() {
    return Joi.object({
      cart: ConfigurationModel.AppCartConfig(),
      comms_enabled: Joi.boolean(),
      communication: ConfigurationModel.CommunicationConfig(),
      loyalty_points: ConfigurationModel.LoyaltyPointsConfig(),
      payment: ConfigurationModel.AppPaymentConfig(),
      reward_points: ConfigurationModel.RewardPointsConfig(),
    });
  }
  static AppInventoryStores() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.number(),
      display_name: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static Application() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      app_type: Joi.string().allow(""),
      auth: ConfigurationModel.ApplicationAuth(),
      banner: ConfigurationModel.SecureUrl(),
      cache_ttl: Joi.number(),
      channel_type: Joi.string().allow(""),
      company_id: Joi.number(),
      cors: ConfigurationModel.ApplicationCors(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      domain: ConfigurationModel.Domain(),
      domains: Joi.array().items(ConfigurationModel.Domain()),
      favicon: ConfigurationModel.SecureUrl(),
      is_active: Joi.boolean(),
      is_internal: Joi.boolean(),
      logo: ConfigurationModel.SecureUrl(),
      meta: Joi.array().items(ConfigurationModel.ApplicationMeta()),
      mobile_logo: ConfigurationModel.SecureUrl(),
      name: Joi.string().allow(""),
      owner: Joi.string().allow(""),
      redirections: Joi.array().items(
        ConfigurationModel.ApplicationRedirections()
      ),
      token: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      website: ConfigurationModel.ApplicationWebsite(),
    });
  }
  static ApplicationAuth() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }
  static ApplicationCors() {
    return Joi.object({
      domains: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ApplicationDetail() {
    return Joi.object({
      _id: Joi.string().allow(""),
      banner: ConfigurationModel.SecureUrl().required(),
      description: Joi.string().allow("").required(),
      domain: ConfigurationModel.Domain(),
      domains: Joi.array().items(ConfigurationModel.Domain()),
      favicon: ConfigurationModel.SecureUrl().required(),
      logo: ConfigurationModel.SecureUrl().required(),
      mobile_logo: ConfigurationModel.SecureUrl().required(),
      name: Joi.string().allow("").required(),
    });
  }
  static ApplicationInformation() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      address: ConfigurationModel.InformationAddress(),
      application: Joi.string().allow(""),
      business_highlights: ConfigurationModel.BusinessHighlights(),
      copyright_text: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      links: ConfigurationModel.Links(),
      social_links: ConfigurationModel.SocialLinks(),
      support: ConfigurationModel.InformationSupport(),
      updated_at: Joi.string().allow(""),
    });
  }
  static ApplicationInventory() {
    return Joi.object({
      _id: Joi.string().allow(""),
      app: Joi.string().allow(""),
      article_assignment: ConfigurationModel.ArticleAssignmentConfig(),
      authentication: ConfigurationModel.AuthenticationConfig(),
      business: Joi.string().allow(""),
      cart: ConfigurationModel.AppCartConfig(),
      comms_enabled: Joi.boolean(),
      communication: ConfigurationModel.CommunicationConfig(),
      created_at: Joi.string().allow(""),
      inventory: ConfigurationModel.AppInventoryConfig(),
      logistics: ConfigurationModel.AppLogisticsConfig(),
      loyalty_points: ConfigurationModel.LoyaltyPointsConfig(),
      modified_by: Joi.string().allow(""),
      order: ConfigurationModel.AppOrderConfig(),
      payment: ConfigurationModel.AppPaymentConfig(),
      platforms: Joi.array().items(Joi.string().allow("")),
      reward_points: ConfigurationModel.RewardPointsConfig(),
      updated_at: Joi.string().allow(""),
    });
  }
  static ApplicationMeta() {
    return Joi.object({
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static ApplicationRedirections() {
    return Joi.object({
      redirect_from: Joi.string().allow(""),
      redirect_to: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static ApplicationsResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationModel.Application()),
      page: ConfigurationModel.Page(),
    });
  }
  static ApplicationWebsite() {
    return Joi.object({
      basepath: Joi.string().allow(""),
      enabled: Joi.boolean(),
    });
  }
  static AppLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
      logistics_by_seller: Joi.boolean(),
      same_day_delivery: Joi.boolean(),
      serviceability_check: Joi.boolean(),
    });
  }
  static AppOrderConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
      force_reassignment: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }
  static AppPaymentConfig() {
    return Joi.object({
      anonymous_cod: Joi.boolean(),
      callback_url: ConfigurationModel.CallbackUrl(),
      cod_amount_limit: Joi.number(),
      cod_charges: Joi.number(),
      enabled: Joi.boolean(),
      methods: ConfigurationModel.Methods(),
      mode_of_payment: Joi.string().allow(""),
      payment_selection_lock: ConfigurationModel.PaymentSelectionLock(),
      source: Joi.string().allow(""),
    });
  }
  static AppStoreRules() {
    return Joi.object({
      brands: Joi.array().items(Joi.any()),
      companies: Joi.array().items(Joi.number()),
    });
  }
  static AppSupportedCurrency() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      default_currency: ConfigurationModel.DefaultCurrency(),
      supported_currency: Joi.array().items(Joi.string().allow("")),
      updated_at: Joi.string().allow(""),
    });
  }
  static ArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
      rules: ConfigurationModel.ArticleAssignmentRules(),
    });
  }
  static ArticleAssignmentRule() {
    return Joi.object({
      store_priority: ConfigurationModel.StorePriorityRule(),
    });
  }
  static ArticleAssignmentRules() {
    return Joi.object({
      store_priority: ConfigurationModel.StorePriority(),
    });
  }
  static AuthenticationConfig() {
    return Joi.object({
      provider: Joi.string().allow(""),
      required: Joi.boolean(),
    });
  }
  static BlogLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static BrandCompanyInfo() {
    return Joi.object({
      company_id: Joi.number(),
      company_name: Joi.string().allow(""),
    });
  }
  static BrandsByCompanyResponse() {
    return Joi.object({
      brands: ConfigurationModel.CompanyBrandInfo(),
    });
  }
  static BrandStoreInfo() {
    return Joi.object({
      company: ConfigurationModel.OptedCompany(),
      store_address: ConfigurationModel.OptedStoreAddress(),
      store_code: Joi.string().allow(""),
      store_id: Joi.number(),
      store_name: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
    });
  }
  static BuildVersion() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      build_status: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      platform_type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version_code: Joi.number(),
      version_name: Joi.string().allow(""),
    });
  }
  static BuildVersionHistory() {
    return Joi.object({
      latest_available_version_name: Joi.string().allow(""),
      versions: ConfigurationModel.BuildVersion(),
    });
  }
  static BusinessHighlights() {
    return Joi.object({
      _id: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      sub_title: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static CallbackUrl() {
    return Joi.object({
      app: Joi.string().allow(""),
      web: Joi.string().allow(""),
    });
  }
  static CartFeature() {
    return Joi.object({
      google_map: Joi.boolean(),
      gst_input: Joi.boolean(),
      placing_for_customer: Joi.boolean(),
      revenue_engine_coupon: Joi.boolean(),
      staff_selection: Joi.boolean(),
    });
  }
  static Charges() {
    return Joi.object({
      charges: Joi.number(),
      threshold: Joi.number(),
    });
  }
  static CommonFeature() {
    return Joi.object({
      communication_optin_dialog: ConfigurationModel.CommunicationOptinDialogFeature(),
      compare_products: ConfigurationModel.CompareProductsFeature(),
      currency: ConfigurationModel.CurrencyFeature(),
      deployment_store_selection: ConfigurationModel.DeploymentStoreSelectionFeature(),
      feedback: ConfigurationModel.FeedbackFeature(),
      listing_price: ConfigurationModel.ListingPriceFeature(),
      revenue_engine: ConfigurationModel.RevenueEngineFeature(),
      reward_points: ConfigurationModel.RewardPointsConfig(),
    });
  }
  static CommsConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }
  static CommunicationConfig() {
    return Joi.object({
      email: ConfigurationModel.CommsConfig(),
      sms: ConfigurationModel.CommsConfig(),
      voice: ConfigurationModel.CommsConfig(),
    });
  }
  static CommunicationOptinDialogFeature() {
    return Joi.object({
      visibility: Joi.boolean(),
    });
  }
  static CompaniesResponse() {
    return Joi.object({
      items: ConfigurationModel.AppInventoryCompanies(),
      page: ConfigurationModel.Page(),
    });
  }
  static CompanyAboutAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }
  static CompanyBrandInfo() {
    return Joi.object({
      brand_banner_portrait_url: Joi.string().allow(""),
      brand_banner_url: Joi.string().allow(""),
      brand_logo_url: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static CompanyByBrandsRequest() {
    return Joi.object({
      brands: Joi.number().required(),
      search_text: Joi.string().allow(""),
    });
  }
  static CompanyByBrandsResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationModel.BrandCompanyInfo()),
      page: ConfigurationModel.Page(),
    });
  }
  static CompanyValidator() {
    return Joi.object({
      browser_script: Joi.string().allow(""),
      json_schema: Joi.array().items(ConfigurationModel.JsonSchema()),
    });
  }
  static CompareProductsFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }
  static CreateApplicationRequest() {
    return Joi.object({
      app: ConfigurationModel.App(),
      configuration: ConfigurationModel.AppInventory(),
      domain: ConfigurationModel.AppDomain(),
    });
  }
  static CreateAppResponse() {
    return Joi.object({
      app: ConfigurationModel.Application(),
      configuration: ConfigurationModel.ApplicationInventory(),
    });
  }
  static Credentials() {
    return Joi.object({
      android: ConfigurationModel.Android(),
      api_key: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      gcm_sender_id: Joi.string().allow(""),
      ios: ConfigurationModel.Ios(),
      project_id: Joi.string().allow(""),
    });
  }
  static Credit() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }
  static CurrenciesResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationModel.Currency()),
    });
  }
  static Currency() {
    return Joi.object({
      _id: Joi.string().allow(""),
      code: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      decimal_digits: Joi.number(),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static CurrencyConfig() {
    return Joi.object({
      _id: Joi.string().allow(""),
      code: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      decimal_digits: Joi.number(),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static CurrencyFeature() {
    return Joi.object({
      default_currency: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.array().items(Joi.string().allow("")),
    });
  }
  static Debit() {
    return Joi.object({
      auto_apply: Joi.boolean(),
      enabled: Joi.boolean(),
      strategy_channel: Joi.string().allow(""),
    });
  }
  static DefaultCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),
      ref: Joi.string().allow(""),
    });
  }
  static DeliveryCharges() {
    return Joi.object({
      charges: ConfigurationModel.Charges(),
      enabled: Joi.boolean(),
    });
  }
  static DeploymentMeta() {
    return Joi.object({
      _id: Joi.string().allow(""),
      all_stores: Joi.boolean(),
      app: Joi.string().allow(""),
      deployed_stores: Joi.array().items(Joi.number()),
      enabled: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }
  static DeploymentStoreSelectionFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }
  static Domain() {
    return Joi.object({
      _id: Joi.string().allow(""),
      is_predefined: Joi.boolean(),
      is_primary: Joi.boolean(),
      is_shortlink: Joi.boolean(),
      name: Joi.string().allow(""),
      verified: Joi.boolean(),
    });
  }
  static DomainAdd() {
    return Joi.object({
      _id: Joi.string().allow(""),
      is_primary: Joi.boolean(),
      is_shortlink: Joi.boolean(),
      message: Joi.string().allow(""),
      name: Joi.string().allow(""),
      txt_records: Joi.array().items(Joi.string().allow("")),
      verified: Joi.boolean(),
    });
  }
  static DomainAddRequest() {
    return Joi.object({
      domain: ConfigurationModel.DomainAdd(),
    });
  }
  static DomainsResponse() {
    return Joi.object({
      domains: Joi.array().items(ConfigurationModel.Domain()),
    });
  }
  static DomainStatus() {
    return Joi.object({
      display: Joi.string().allow(""),
      status: Joi.boolean(),
    });
  }
  static DomainStatusRequest() {
    return Joi.object({
      domain_url: Joi.string().allow(""),
    });
  }
  static DomainStatusResponse() {
    return Joi.object({
      connected: Joi.boolean(),
      status: Joi.array().items(ConfigurationModel.DomainStatus()),
    });
  }
  static DomainSuggestion() {
    return Joi.object({
      currency: Joi.string().allow(""),
      is_available: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      price: Joi.number(),
      unsupported: Joi.boolean(),
    });
  }
  static DomainSuggestionsRequest() {
    return Joi.object({
      custom: Joi.boolean(),
      domain_url: Joi.string().allow(""),
    });
  }
  static DomainSuggestionsResponse() {
    return Joi.object({
      domains: Joi.array().items(ConfigurationModel.DomainSuggestion()),
    });
  }
  static FacebookLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static FeedbackFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }
  static FilterOrderingStoreRequest() {
    return Joi.object({
      all_stores: Joi.boolean(),
      deployed_stores: Joi.array().items(Joi.number()),
      q: Joi.string().allow(""),
    });
  }
  static Firebase() {
    return Joi.object({
      credentials: ConfigurationModel.Credentials(),
      enabled: Joi.boolean(),
    });
  }
  static Freshchat() {
    return Joi.object({
      credentials: ConfigurationModel.FreshchatCredentials(),
      enabled: Joi.boolean(),
    });
  }
  static FreshchatCredentials() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      app_key: Joi.string().allow(""),
      web_token: Joi.string().allow(""),
    });
  }
  static FyndRewards() {
    return Joi.object({
      credentials: ConfigurationModel.FyndRewardsCredentials(),
    });
  }
  static FyndRewardsCredentials() {
    return Joi.object({
      public_key: Joi.string().allow(""),
    });
  }
  static GetIntegrationsOptInsResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationModel.IntegrationOptIn()),
      page: ConfigurationModel.Page(),
    });
  }
  static GoogleMap() {
    return Joi.object({
      credentials: ConfigurationModel.GoogleMapCredentials(),
    });
  }
  static GoogleMapCredentials() {
    return Joi.object({
      api_key: Joi.string().allow(""),
    });
  }
  static GooglePlusLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static Gtm() {
    return Joi.object({
      credentials: ConfigurationModel.GtmCredentials(),
      enabled: Joi.boolean(),
    });
  }
  static GtmCredentials() {
    return Joi.object({
      api_key: Joi.string().allow(""),
    });
  }
  static HomePageFeature() {
    return Joi.object({
      order_processing: Joi.boolean(),
    });
  }
  static InformationAddress() {
    return Joi.object({
      address_line: Joi.array().items(Joi.string().allow("")),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      loc: Joi.string().allow(""),
      phone: ConfigurationModel.InformationPhone(),
      pincode: Joi.number(),
    });
  }
  static InformationPhone() {
    return Joi.object({
      code: Joi.string().allow(""),
      number: Joi.string().allow(""),
    });
  }
  static InformationSupport() {
    return Joi.object({
      email: Joi.array().items(Joi.string().allow("")),
      phone: Joi.array().items(Joi.string().allow("")),
      timing: Joi.string().allow(""),
    });
  }
  static InstagramLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static Integration() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      companies: Joi.array().items(Joi.any()),
      constants: Joi.any(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      description_html: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      meta: Joi.array().items(ConfigurationModel.IntegrationMeta()),
      name: Joi.string().allow(""),
      owner: Joi.string().allow(""),
      secret: Joi.string().allow(""),
      support: Joi.array().items(Joi.string().allow("")),
      token: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      validators: ConfigurationModel.Validators(),
    });
  }
  static IntegrationConfigResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationModel.IntegrationLevel()),
    });
  }
  static IntegrationLevel() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      data: Joi.any(),
      integration: Joi.string().allow(""),
      last_patch: Joi.array().items(ConfigurationModel.LastPatch()),
      level: Joi.string().allow(""),
      meta: Joi.array().items(ConfigurationModel.IntegrationMeta()),
      opted: Joi.boolean(),
      permissions: Joi.array().items(Joi.any()),
      token: Joi.string().allow(""),
      uid: Joi.number(),
      updated_at: Joi.string().allow(""),
    });
  }
  static IntegrationMeta() {
    return Joi.object({
      _id: Joi.string().allow(""),
      is_public: Joi.boolean(),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static IntegrationOptIn() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      companies: Joi.array().items(Joi.any()),
      constants: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      description_html: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      meta: Joi.array().items(ConfigurationModel.IntegrationMeta()),
      name: Joi.string().allow(""),
      owner: Joi.string().allow(""),
      secret: Joi.string().allow(""),
      support: Joi.array().items(Joi.string().allow("")),
      token: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      validators: ConfigurationModel.Validators(),
    });
  }
  static InvalidPayloadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static InventoryArticleAssignment() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
      rules: ConfigurationModel.ArticleAssignmentRule(),
    });
  }
  static InventoryBrand() {
    return Joi.object({
      brands: Joi.array().items(Joi.any()),
      criteria: Joi.string().allow(""),
    });
  }
  static InventoryBrandRule() {
    return Joi.object({
      brands: Joi.array().items(Joi.number()),
      criteria: Joi.string().allow(""),
    });
  }
  static InventoryCategory() {
    return Joi.object({
      categories: Joi.array().items(Joi.any()),
      criteria: Joi.string().allow(""),
    });
  }
  static InventoryDiscount() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }
  static InventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),
      source: Joi.string().allow(""),
    });
  }
  static InventoryPrice() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }
  static InventoryStore() {
    return Joi.object({
      criteria: Joi.string().allow(""),
      rules: ConfigurationModel.AppStoreRules(),
      stores: Joi.array().items(Joi.any()),
    });
  }
  static InventoryStoreRule() {
    return Joi.object({
      criteria: Joi.string().allow(""),
      rules: Joi.array().items(ConfigurationModel.StoreCriteriaRule()),
      stores: Joi.array().items(Joi.number()),
    });
  }
  static InventoryValidator() {
    return Joi.object({
      browser_script: Joi.string().allow(""),
      json_schema: Joi.array().items(ConfigurationModel.JsonSchema()),
    });
  }
  static Ios() {
    return Joi.object({
      api_key: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
    });
  }
  static JsonSchema() {
    return Joi.object({
      display: Joi.string().allow(""),
      key: Joi.string().allow(""),
      tooltip: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static LandingImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
    });
  }
  static LandingPageFeature() {
    return Joi.object({
      continue_as_guest: Joi.boolean(),
      launch_page: ConfigurationModel.LaunchPage(),
      login_btn_text: Joi.string().allow(""),
      show_domain_textbox: Joi.boolean(),
      show_register_btn: Joi.boolean(),
    });
  }
  static LastPatch() {
    return Joi.object({
      op: Joi.string().allow(""),
      path: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static LaunchPage() {
    return Joi.object({
      page_type: Joi.string().allow(""),
      params: Joi.any(),
      query: Joi.any(),
    });
  }
  static LinkedInLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static Links() {
    return Joi.object({
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static ListingPriceFeature() {
    return Joi.object({
      sort: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static LoyaltyPointsConfig() {
    return Joi.object({
      auto_apply: Joi.boolean(),
      enabled: Joi.boolean(),
    });
  }
  static Methods() {
    return Joi.object({
      card: ConfigurationModel.PaymentModeConfig(),
      cod: ConfigurationModel.PaymentModeConfig(),
      fc: ConfigurationModel.PaymentModeConfig(),
      jiopp: ConfigurationModel.PaymentModeConfig(),
      jp: ConfigurationModel.PaymentModeConfig(),
      juspaypg: ConfigurationModel.PaymentModeConfig(),
      nb: ConfigurationModel.PaymentModeConfig(),
      pac: ConfigurationModel.PaymentModeConfig(),
      payubizpg: ConfigurationModel.PaymentModeConfig(),
      payumoneypg: ConfigurationModel.PaymentModeConfig(),
      pl: ConfigurationModel.PaymentModeConfig(),
      pp: ConfigurationModel.PaymentModeConfig(),
      ps: ConfigurationModel.PaymentModeConfig(),
      qr: ConfigurationModel.PaymentModeConfig(),
      rupifipg: ConfigurationModel.PaymentModeConfig(),
      simpl: ConfigurationModel.PaymentModeConfig(),
      stripepg: ConfigurationModel.PaymentModeConfig(),
      upi: ConfigurationModel.PaymentModeConfig(),
      wl: ConfigurationModel.PaymentModeConfig(),
    });
  }
  static MobileAppConfigRequest() {
    return Joi.object({
      app_name: Joi.string().allow(""),
      is_active: Joi.boolean(),
      landing_image: ConfigurationModel.LandingImage(),
      splash_image: ConfigurationModel.SplashImage(),
    });
  }
  static MobileAppConfiguration() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      app_name: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      is_active: Joi.boolean(),
      landing_image: ConfigurationModel.LandingImage(),
      package_name: Joi.string().allow(""),
      platform_type: Joi.string().allow(""),
      splash_image: ConfigurationModel.SplashImage(),
      updated_at: Joi.string().allow(""),
    });
  }
  static Moengage() {
    return Joi.object({
      credentials: ConfigurationModel.MoengageCredentials(),
      enabled: Joi.boolean(),
    });
  }
  static MoengageCredentials() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }
  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static OptedApplicationResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company: ConfigurationModel.OptedCompany(),
      description: Joi.string().allow(""),
      domain: Joi.string().allow(""),
      name: Joi.string().allow(""),
      opt_out_inventory: ConfigurationModel.OptOutInventory(),
      opted_inventory: ConfigurationModel.OptedInventory(),
    });
  }
  static OptedCompany() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static OptedInventory() {
    return Joi.object({
      items: Joi.any(),
      opt_type: ConfigurationModel.OptType(),
    });
  }
  static OptedStore() {
    return Joi.object({
      _id: Joi.string().allow(""),
      address: ConfigurationModel.OptedStoreAddress(),
      company_id: Joi.number(),
      display_name: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static OptedStoreAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      lat_long: ConfigurationModel.StoreLatLong(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }
  static OptedStoreIntegration() {
    return Joi.object({
      other_entity: ConfigurationModel.OtherEntity(),
      other_integration: ConfigurationModel.IntegrationOptIn(),
      other_opted: Joi.boolean(),
    });
  }
  static OptOutInventory() {
    return Joi.object({
      company: Joi.array().items(Joi.number()).required(),
      store: Joi.array().items(Joi.number()).required(),
    });
  }
  static OptType() {
    return Joi.object({
      display: Joi.string().allow(""),
      key: Joi.string().allow(""),
    });
  }
  static OrderFeature() {
    return Joi.object({
      buy_again: Joi.boolean(),
    });
  }
  static OrderingStore() {
    return Joi.object({
      _id: Joi.string().allow(""),
      address: ConfigurationModel.OptedStoreAddress(),
      code: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      pincode: Joi.number(),
      store_code: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static OrderingStoreConfig() {
    return Joi.object({
      deployment_meta: ConfigurationModel.DeploymentMeta(),
    });
  }
  static OrderingStores() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      all_stores: Joi.boolean(),
      app: Joi.string().allow(""),
      deployed_stores: Joi.array().items(Joi.number()),
      enabled: Joi.boolean(),
      items: Joi.array().items(ConfigurationModel.OrderingStore()),
      page: ConfigurationModel.Page(),
      type: Joi.string().allow(""),
    });
  }
  static OrderingStoresResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationModel.OrderingStore()),
      page: ConfigurationModel.Page(),
    });
  }
  static OrderValidator() {
    return Joi.object({
      browser_script: Joi.string().allow(""),
      json_schema: Joi.array().items(ConfigurationModel.JsonSchema()),
    });
  }
  static OtherEntity() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      data: ConfigurationModel.OtherEntityData(),
      integration: Joi.string().allow(""),
      last_patch: Joi.array().items(ConfigurationModel.LastPatch()),
      level: Joi.string().allow(""),
      meta: Joi.array().items(Joi.any()),
      opted: Joi.boolean(),
      permissions: Joi.array().items(Joi.string().allow("")),
      token: Joi.string().allow(""),
      uid: Joi.number(),
      updated_at: Joi.string().allow(""),
    });
  }
  static OtherEntityData() {
    return Joi.object({
      article_identifier: Joi.string().allow(""),
    });
  }
  static OtherSellerApplication() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company: ConfigurationModel.OtherSellerCompany(),
      description: Joi.string().allow(""),
      domain: Joi.string().allow(""),
      name: Joi.string().allow(""),
      opt_type: Joi.string().allow(""),
    });
  }
  static OtherSellerApplications() {
    return Joi.object({
      items: Joi.array().items(ConfigurationModel.OtherSellerApplication()),
      page: ConfigurationModel.Page(),
    });
  }
  static OtherSellerCompany() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }
  static PaymentModeConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }
  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),
      enabled: Joi.boolean(),
      payment_identifier: Joi.string().allow(""),
    });
  }
  static PcrFeature() {
    return Joi.object({
      staff_selection: Joi.boolean(),
    });
  }
  static PinterestLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static ProductDetailFeature() {
    return Joi.object({
      request_product: Joi.boolean(),
      seller_selection: Joi.boolean(),
      similar: Joi.array().items(Joi.string().allow("")),
      update_product_meta: Joi.boolean(),
    });
  }
  static QrFeature() {
    return Joi.object({
      application: Joi.boolean(),
      collections: Joi.boolean(),
      products: Joi.boolean(),
    });
  }
  static RegistrationPageFeature() {
    return Joi.object({
      ask_store_address: Joi.boolean(),
    });
  }
  static RevenueEngineFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }
  static RewardPointsConfig() {
    return Joi.object({
      credit: ConfigurationModel.Credit(),
      debit: ConfigurationModel.Debit(),
    });
  }
  static Safetynet() {
    return Joi.object({
      credentials: ConfigurationModel.SafetynetCredentials(),
      enabled: Joi.boolean(),
    });
  }
  static SafetynetCredentials() {
    return Joi.object({
      api_key: Joi.string().allow(""),
    });
  }
  static SecureUrl() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }
  static Segment() {
    return Joi.object({
      credentials: ConfigurationModel.SegmentCredentials(),
      enabled: Joi.boolean(),
    });
  }
  static SegmentCredentials() {
    return Joi.object({
      write_key: Joi.string().allow(""),
    });
  }
  static SocialLinks() {
    return Joi.object({
      blog_link: ConfigurationModel.BlogLink(),
      facebook: ConfigurationModel.FacebookLink(),
      google_plus: ConfigurationModel.GooglePlusLink(),
      instagram: ConfigurationModel.InstagramLink(),
      linked_in: ConfigurationModel.LinkedInLink(),
      pinterest: ConfigurationModel.PinterestLink(),
      twitter: ConfigurationModel.TwitterLink(),
      vimeo: ConfigurationModel.VimeoLink(),
      youtube: ConfigurationModel.YoutubeLink(),
    });
  }
  static SplashImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
    });
  }
  static StoreByBrandsRequest() {
    return Joi.object({
      brands: Joi.number().required(),
      company_id: Joi.number(),
      search_text: Joi.string().allow(""),
    });
  }
  static StoreByBrandsResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationModel.BrandStoreInfo()),
      page: ConfigurationModel.Page(),
    });
  }
  static StoreCriteriaRule() {
    return Joi.object({
      brands: Joi.array().items(Joi.number()),
      companies: Joi.array().items(Joi.number()),
    });
  }
  static StoreLatLong() {
    return Joi.object({
      coordinates: Joi.array().items(Joi.number()),
      type: Joi.string().allow(""),
    });
  }
  static StorePriority() {
    return Joi.object({
      enabled: Joi.boolean(),
      storetype_order: Joi.array().items(Joi.any()),
    });
  }
  static StorePriorityRule() {
    return Joi.object({
      enabled: Joi.boolean(),
      storetype_order: Joi.array().items(Joi.string().allow("")),
    });
  }
  static StoresResponse() {
    return Joi.object({
      items: ConfigurationModel.AppInventoryStores(),
      page: ConfigurationModel.Page(),
    });
  }
  static StoreValidator() {
    return Joi.object({
      browser_script: Joi.string().allow(""),
      json_schema: Joi.array().items(ConfigurationModel.JsonSchema()),
    });
  }
  static SuccessMessageResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static TokenResponse() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      tokens: ConfigurationModel.Tokens(),
      updated_at: Joi.string().allow(""),
    });
  }
  static Tokens() {
    return Joi.object({
      firebase: ConfigurationModel.Firebase(),
      freshchat: ConfigurationModel.Freshchat(),
      fynd_rewards: ConfigurationModel.FyndRewards(),
      google_map: ConfigurationModel.GoogleMap(),
      gtm: ConfigurationModel.Gtm(),
      moengage: ConfigurationModel.Moengage(),
      safetynet: ConfigurationModel.Safetynet(),
      segment: ConfigurationModel.Segment(),
    });
  }
  static TwitterLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static UnhandledError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static UpdateDomain() {
    return Joi.object({
      _id: Joi.string().allow(""),
      is_primary: Joi.boolean(),
      is_shortlink: Joi.boolean(),
      name: Joi.string().allow(""),
      verified: Joi.boolean(),
    });
  }
  static UpdateDomainTypeRequest() {
    return Joi.object({
      action: Joi.string().allow(""),
      domain: ConfigurationModel.UpdateDomain(),
    });
  }
  static UpdateIntegrationLevelRequest() {
    return Joi.object({
      items: Joi.array().items(ConfigurationModel.IntegrationLevel()),
    });
  }
  static UserEmail() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }
  static UserPhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),
      country_code: Joi.number(),
      phone: Joi.string().allow(""),
      primary: Joi.boolean(),
      verified: Joi.boolean(),
    });
  }
  static ValidationFailedResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static Validators() {
    return Joi.object({
      company: ConfigurationModel.CompanyValidator(),
      inventory: ConfigurationModel.InventoryValidator(),
      order: ConfigurationModel.OrderValidator(),
      store: ConfigurationModel.StoreValidator(),
    });
  }
  static VimeoLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static YoutubeLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
}
module.exports = ConfigurationModel;
