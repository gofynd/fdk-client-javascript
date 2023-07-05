const Joi = require("joi");

class ConfigurationModel {
  static Android() {
    return Joi.object({
      api_key: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
    });
  }
  static AppCurrencyResponse() {
    return Joi.object({
      application: Joi.string().allow(""),
      default_currency: ConfigurationModel.DefaultCurrency(),
      supported_currency: Joi.array().items(ConfigurationModel.Currency()),
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
  static ApplicationAboutResponse() {
    return Joi.object({
      application_info: ConfigurationModel.ApplicationInfo(),
      company_info: ConfigurationModel.CompanyInfo(),
      owner_info: ConfigurationModel.OwnerInfo(),
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
  static ApplicationInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),
      banner: ConfigurationModel.SecureUrl(),
      cors: ConfigurationModel.ApplicationCors(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      domain: ConfigurationModel.Domain(),
      is_active: Joi.boolean(),
      logo: ConfigurationModel.SecureUrl(),
      meta: ConfigurationModel.ApplicationMeta(),
      name: Joi.string().allow(""),
      secret: Joi.string().allow(""),
      token: Joi.string().allow(""),
      website: ConfigurationModel.ApplicationWebsite(),
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
  static ApplicationVersionRequest() {
    return Joi.object({
      id: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      namespace: Joi.string().allow(""),
      token: Joi.string().allow(""),
      version: Joi.string().allow("").required(),
    });
  }
  static ApplicationWebsite() {
    return Joi.object({
      basepath: Joi.string().allow(""),
      enabled: Joi.boolean(),
    });
  }
  static AppStaff() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      employee_code: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      order_incent: Joi.boolean(),
      profile_pic_url: Joi.string().allow(""),
      stores: Joi.array().items(Joi.number()),
      title: Joi.string().allow(""),
      user: Joi.string().allow(""),
    });
  }
  static AppStaffListResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationModel.AppStaff()),
      page: ConfigurationModel.Page(),
    });
  }
  static AppStaffResponse() {
    return Joi.object({
      staff_users: Joi.array().items(ConfigurationModel.AppStaff()),
    });
  }
  static AppTokenResponse() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      tokens: ConfigurationModel.Tokens(),
      updated_at: Joi.string().allow(""),
    });
  }
  static AppVersionRequest() {
    return Joi.object({
      application: ConfigurationModel.ApplicationVersionRequest().required(),
      device: ConfigurationModel.Device().required(),
      locale: Joi.string().allow(""),
      timezone: Joi.string().allow(""),
    });
  }
  static ArticleAssignmentRule() {
    return Joi.object({
      store_priority: ConfigurationModel.StorePriorityRule(),
    });
  }
  static BlogLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
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
  static CartFeature() {
    return Joi.object({
      google_map: Joi.boolean(),
      gst_input: Joi.boolean(),
      placing_for_customer: Joi.boolean(),
      revenue_engine_coupon: Joi.boolean(),
      staff_selection: Joi.boolean(),
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
  static CommunicationOptinDialogFeature() {
    return Joi.object({
      visibility: Joi.boolean(),
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
  static CompanyInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),
      addresses: Joi.array().items(ConfigurationModel.CompanyAboutAddress()),
      created_on: Joi.string().allow(""),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      uid: Joi.number(),
    });
  }
  static CompareProductsFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
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
  static DeploymentStoreSelectionFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }
  static Device() {
    return Joi.object({
      build: Joi.number(),
      model: Joi.string().allow(""),
      os: ConfigurationModel.OS().required(),
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
  static InventoryBrandRule() {
    return Joi.object({
      brands: Joi.array().items(Joi.number()),
      criteria: Joi.string().allow(""),
    });
  }
  static InventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),
      source: Joi.string().allow(""),
    });
  }
  static InventoryStoreRule() {
    return Joi.object({
      criteria: Joi.string().allow(""),
      rules: Joi.array().items(ConfigurationModel.StoreCriteriaRule()),
      stores: Joi.array().items(Joi.number()),
    });
  }
  static Ios() {
    return Joi.object({
      api_key: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
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
  static LanguageResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationModel.SupportedLanguage()),
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
  static OrderingStoreSelect() {
    return Joi.object({
      uid: Joi.number().required(),
    });
  }
  static OrderingStoreSelectRequest() {
    return Joi.object({
      ordering_store: ConfigurationModel.OrderingStoreSelect().required(),
    });
  }
  static OrderingStoresResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationModel.OrderingStore()),
      page: ConfigurationModel.Page(),
    });
  }
  static OS() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      version: Joi.string().allow(""),
    });
  }
  static OwnerInfo() {
    return Joi.object({
      _id: Joi.string().allow(""),
      emails: Joi.array().items(ConfigurationModel.UserEmail()),
      first_name: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      phone_numbers: Joi.array().items(ConfigurationModel.UserPhoneNumber()),
      profile_pic: Joi.string().allow(""),
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
  static StorePriorityRule() {
    return Joi.object({
      enabled: Joi.boolean(),
      storetype_order: Joi.array().items(Joi.string().allow("")),
    });
  }
  static SuccessMessageResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static SupportedLanguage() {
    return Joi.object({
      code: Joi.string().allow(""),
      name: Joi.string().allow(""),
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
  static UpdateDialog() {
    return Joi.object({
      interval: Joi.number(),
      type: Joi.string().allow(""),
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
