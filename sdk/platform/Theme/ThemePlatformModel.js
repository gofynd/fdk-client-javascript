const Joi = require("joi");

class ThemeModel {
  static AddThemeRequestSchema() {
    return Joi.object({
      theme_id: Joi.string().allow(""),
    });
  }
  static AdvanceSettingV2() {
    return Joi.object({
      divider_stroke_highlight: ThemeModel.DividerStrokeHighlightSettingV2(),
      overlay_popup: ThemeModel.OverlayPopupSettingV2(),
      user_alerts: ThemeModel.UserAlertsSettingV2(),
    });
  }
  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(ThemeModel.AvailablePageSchema()),
    });
  }
  static AllThemesApplicationResponseV2() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      applied: Joi.boolean(),
      assets: ThemeModel.AssetsV2(),
      available_sections: Joi.array().items(ThemeModel.SectionItem()),
      config: ThemeModel.ConfigV2(),
      created_at: Joi.string().allow(""),
      font: ThemeModel.FontV2(),
      is_private: Joi.boolean(),
      marketplace_theme_id: Joi.string().allow(""),
      meta: ThemeModel.MetaV2(),
      name: Joi.string().allow(""),
      styles: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      template_theme_id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static ApplyThemeRequestV2() {
    return Joi.object({
      marketplace_theme_id: Joi.string().allow("").required(),
    });
  }
  static ApplyThemeResponseV2() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      applied: Joi.boolean(),
      config: ThemeModel.ConfigV2(),
      created_at: Joi.string().allow(""),
      font: ThemeModel.FontV2(),
      is_private: Joi.boolean(),
      marketplace_theme_id: Joi.string().allow(""),
      meta: ThemeModel.MetaV2(),
      name: Joi.string().allow(""),
      styles: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      template_theme_id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static AssetsSchema() {
    return Joi.object({
      common_js: ThemeModel.CommonJs(),
      css: ThemeModel.Css(),
      umd_js: ThemeModel.UmdJs(),
    });
  }
  static AssetsV2() {
    return Joi.object({
      common_js: ThemeModel.CommonJS(),
      css: ThemeModel.CSS(),
      umd_js: ThemeModel.UMDJs(),
    });
  }
  static AuthConfigV2() {
    return Joi.object({
      show_footer_auth: Joi.boolean(),
      show_header_auth: Joi.boolean(),
    });
  }
  static AvailablePagePredicate() {
    return Joi.object({
      route: ThemeModel.AvailablePageRoutePredicate(),
      screen: ThemeModel.AvailablePageScreenPredicate(),
      user: ThemeModel.AvailablePageUserPredicate(),
    });
  }
  static AvailablePageRoutePredicate() {
    return Joi.object({
      exact_url: Joi.string().allow(""),
      query: Joi.any(),
      selected: Joi.string().allow(""),
    });
  }
  static AvailablePageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      path: Joi.string().allow(""),
      props: Joi.array().items(Joi.any()),
      sections: Joi.array().items(ThemeModel.AvailablePageSchemaSections()),
      sections_meta: Joi.array().items(
        ThemeModel.AvailablePageSectionMetaAttributes()
      ),
      seo: ThemeModel.AvailablePageSeo(),
      text: Joi.string().allow(""),
      theme: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static AvailablePageSchemaSections() {
    return Joi.object({
      blocks: Joi.array().items(Joi.any()),
      label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      predicate: ThemeModel.AvailablePagePredicate(),
      preset: Joi.any(),
      props: Joi.any(),
    });
  }
  static AvailablePageScreenPredicate() {
    return Joi.object({
      desktop: Joi.boolean(),
      mobile: Joi.boolean(),
      tablet: Joi.boolean(),
    });
  }
  static AvailablePageSectionMetaAttributes() {
    return Joi.object({
      attributes: Joi.any(),
    });
  }
  static AvailablePageSeo() {
    return Joi.object({
      _id: Joi.string().allow(""),
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static AvailablePageUserPredicate() {
    return Joi.object({
      anonymous: Joi.boolean(),
      authenticated: Joi.boolean(),
    });
  }
  static availableSectionSchema() {
    return Joi.object({
      blocks: Joi.array().items(ThemeModel.Blocks()),
      label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      props: Joi.array().items(ThemeModel.BlocksProps()),
    });
  }
  static BlitzkriegApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static BlitzkriegInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static BlitzkriegNotFoundSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static BlockPropsV2() {
    return Joi.object({
      image: ThemeModel.ImagePickerPropV2(),
      slide_link: ThemeModel.UrlPropV2(),
    });
  }
  static Blocks() {
    return Joi.object({
      name: Joi.string().allow(""),
      props: Joi.array().items(ThemeModel.BlocksProps()),
      type: Joi.string().allow(""),
    });
  }
  static BlocksProps() {
    return Joi.object({
      id: Joi.string().allow(""),
      label: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static BlockV2() {
    return Joi.object({
      name: Joi.string().allow(""),
      props: ThemeModel.BlockPropsV2(),
      type: Joi.string().allow(""),
    });
  }
  static Bold() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static ButtonSettingV2() {
    return Joi.object({
      button_link: Joi.string().allow(""),
      button_primary: Joi.string().allow(""),
      button_secondary: Joi.string().allow(""),
    });
  }
  static CarouselItem() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }
  static CatalogSize() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }
  static CheckboxPropV2() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.boolean(),
    });
  }
  static Colors() {
    return Joi.object({
      accent_color: Joi.string().allow(""),
      bg_color: Joi.string().allow(""),
      button_secondary_color: Joi.string().allow(""),
      link_color: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      secondary_color: Joi.string().allow(""),
    });
  }
  static ColorsV2() {
    return Joi.object({
      accent_color: Joi.string().allow(""),
      bg_color: Joi.string().allow(""),
      button_secondary_color: Joi.string().allow(""),
      link_color: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      secondary_color: Joi.string().allow(""),
    });
  }
  static Comments() {
    return Joi.object({
      developer_remark: Joi.string().allow(""),
      reviewer_feedback: Joi.string().allow(""),
    });
  }
  static CommonJs() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }
  static CommonJS() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }
  static Config() {
    return Joi.object({
      current: Joi.string().allow(""),
      global_schema: ThemeModel.GlobalSchema(),
      list: Joi.array().items(ThemeModel.ListSchemaItem()),
      preset: ThemeModel.Preset(),
    });
  }
  static ConfigPage() {
    return Joi.object({
      page: Joi.string().allow(""),
      settings: Joi.any(),
    });
  }
  static ConfigurationV2() {
    return Joi.object({
      custom: ThemeModel.CustomConfigV2(),
      global_config: ThemeModel.GlobalConfigV2(),
      name: Joi.string().allow(""),
      page: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ConfigV2() {
    return Joi.object({
      current: Joi.string().allow("").required(),
      global_schema: ThemeModel.GlobalSchemaV2(),
      list: Joi.array().items(ThemeModel.ConfigurationV2()).required(),
      preset: ThemeModel.PresetV2(),
    });
  }
  static ContactInfo() {
    return Joi.object({
      developer_contact: Joi.array().items(Joi.string().allow("")),
      seller_contact: Joi.string().allow(""),
    });
  }
  static Css() {
    return Joi.object({
      link: Joi.string().allow(""),
      links: Joi.array().items(Joi.string().allow("")),
    });
  }
  static CSS() {
    return Joi.object({
      links: Joi.array().items(Joi.string().allow("")),
    });
  }
  static Custom() {
    return Joi.object({
      props: Joi.any(),
    });
  }
  static CustomConfigV2() {
    return Joi.object({
      props: ThemeModel.CustomPropsV2(),
    });
  }
  static CustomPropsV2() {
    return Joi.object({
      button_add_to_cart_color: Joi.string().allow(""),
      button_add_to_cart_label_color: Joi.string().allow(""),
      button_primary_color: Joi.string().allow(""),
      button_primary_label_color: Joi.string().allow(""),
      button_secondary_color: Joi.string().allow(""),
      button_secondary_label_color: Joi.string().allow(""),
      button_tertiary_color: Joi.string().allow(""),
      button_tertiary_hover_color: Joi.string().allow(""),
      button_tertiary_hover_text_color: Joi.string().allow(""),
      button_tertiary_label_color: Joi.string().allow(""),
      disable_cart: Joi.boolean(),
      footer_bg_color: Joi.string().allow(""),
      footer_border_color: Joi.string().allow(""),
      footer_nav_hover_color: Joi.string().allow(""),
      footer_text_color: Joi.string().allow(""),
      header_bg_color: Joi.string().allow(""),
      header_border_color: Joi.string().allow(""),
      header_cart_notification_bg_color: Joi.string().allow(""),
      header_cart_notification_text_color: Joi.string().allow(""),
      header_icon_color: Joi.string().allow(""),
      header_nav_hover_color: Joi.string().allow(""),
      header_text_color: Joi.string().allow(""),
      is_menu_below_logo: Joi.boolean(),
      menu_position: Joi.string().allow(""),
      text_body_color: Joi.string().allow(""),
      text_discount_color: Joi.string().allow(""),
      text_heading_link_color: Joi.string().allow(""),
      text_price_color: Joi.string().allow(""),
      text_sale_price_color: Joi.string().allow(""),
      text_strikethrough_price_color: Joi.string().allow(""),
    });
  }
  static DividerStrokeHighlightSettingV2() {
    return Joi.object({
      divider_strokes: Joi.string().allow(""),
      highlight: Joi.string().allow(""),
    });
  }
  static Documentation() {
    return Joi.object({
      notes: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static Email() {
    return Joi.object({
      active: Joi.boolean().required(),
      email: Joi.string().allow("").required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
    });
  }
  static ExploreInfo() {
    return Joi.object({
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static Feature() {
    return Joi.object({
      category: Joi.string().allow(""),
      list: Joi.array().items(ThemeModel.FeatureItem()),
    });
  }
  static FeatureItem() {
    return Joi.object({
      description: Joi.string().allow(""),
      label: Joi.string().allow(""),
    });
  }
  static Font() {
    return Joi.object({
      family: Joi.string().allow(""),
      variants: ThemeModel.Variants(),
    });
  }
  static FontsSchema() {
    return Joi.object({
      items: ThemeModel.FontsSchemaItems(),
      kind: Joi.string().allow(""),
    });
  }
  static FontsSchemaItems() {
    return Joi.object({
      category: Joi.string().allow(""),
      family: Joi.string().allow(""),
      files: ThemeModel.FontsSchemaItemsFiles(),
      kind: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      subsets: Joi.array().items(Joi.string().allow("")),
      variants: Joi.array().items(Joi.string().allow("")),
      version: Joi.string().allow(""),
    });
  }
  static FontsSchemaItemsFiles() {
    return Joi.object({
      bold: Joi.string().allow(""),
      italic: Joi.string().allow(""),
      regular: Joi.string().allow(""),
    });
  }
  static FontV2() {
    return Joi.object({
      family: Joi.string().allow("").required(),
      variants: ThemeModel.FontVariantsV2().required(),
    });
  }
  static FontVariantsV2() {
    return Joi.object({
      bold: ThemeModel.FontVariantV2(),
      light: ThemeModel.FontVariantV2(),
      medium: ThemeModel.FontVariantV2(),
      regular: ThemeModel.FontVariantV2(),
      semi_bold: ThemeModel.FontVariantV2(),
    });
  }
  static FontVariantV2() {
    return Joi.object({
      file: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }
  static FooterSettingV2() {
    return Joi.object({
      footer_background: Joi.string().allow(""),
      footer_body_text: Joi.string().allow(""),
      footer_bottom_background: Joi.string().allow(""),
      footer_heading_text: Joi.string().allow(""),
      footer_icon: Joi.string().allow(""),
    });
  }
  static GeneralSettingV2() {
    return Joi.object({
      button: ThemeModel.ButtonSettingV2(),
      footer: ThemeModel.FooterSettingV2(),
      header: ThemeModel.HeaderSettingV2(),
      sale_discount: ThemeModel.SaleDiscountSettingV2(),
      text: ThemeModel.TextSettingV2(),
      theme: ThemeModel.ThemeSettingV2(),
    });
  }
  static GlobalConfigV2() {
    return Joi.object({
      auth: ThemeModel.AuthConfigV2(),
      palette: ThemeModel.PaletteConfigV2(),
      statics: ThemeModel.StaticConfigV2(),
    });
  }
  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(ThemeModel.GlobalSchemaProps()),
    });
  }
  static GlobalSchemaProps() {
    return Joi.object({
      category: Joi.string().allow(""),
      id: Joi.string().allow(""),
      label: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static GlobalSchemaV2() {
    return Joi.object({
      props: Joi.array().items(ThemeModel.PropV2()),
    });
  }
  static HeaderSettingV2() {
    return Joi.object({
      header_background: Joi.string().allow(""),
      header_icon: Joi.string().allow(""),
      header_nav: Joi.string().allow(""),
    });
  }
  static Highlight() {
    return Joi.object({
      description: Joi.string().allow(""),
      image: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static ImagePickerPropV2() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static Images() {
    return Joi.object({
      android: Joi.array().items(Joi.string().allow("")),
      desktop: Joi.array().items(Joi.string().allow("")),
      ios: Joi.array().items(Joi.string().allow("")),
      mobile: Joi.string().allow(""),
      thumbnail: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ImagesV2() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }
  static Information() {
    return Joi.object({
      description: Joi.string().allow(""),
      features: Joi.array().items(Joi.string().allow("")),
      images: ThemeModel.Images(),
      name: Joi.string().allow(""),
    });
  }
  static Light() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static ListSchemaItem() {
    return Joi.object({
      global_config: Joi.any(),
      name: Joi.string().allow(""),
      page: Joi.array().items(ThemeModel.ConfigPage()),
    });
  }
  static MarketplaceTheme() {
    return Joi.object({
      _id: Joi.string().allow(""),
      carousel: Joi.array().items(ThemeModel.CarouselItem()),
      catalog_size: ThemeModel.CatalogSize(),
      comments: ThemeModel.Comments(),
      contact: ThemeModel.ContactInfo(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      documentation: ThemeModel.Documentation(),
      explore: ThemeModel.ExploreInfo(),
      features: Joi.array().items(ThemeModel.Feature()),
      highlights: Joi.array().items(ThemeModel.Highlight()),
      images: ThemeModel.Images(),
      industry: Joi.array().items(Joi.string().allow("")),
      is_default: Joi.boolean(),
      is_update: Joi.boolean(),
      name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      payment: ThemeModel.PaymentInfo(),
      release: ThemeModel.Release(),
      slug: Joi.string().allow(""),
      src: Joi.string().allow(""),
      status: Joi.string().allow(""),
      step: Joi.number(),
      tagline: Joi.string().allow(""),
      template_theme_id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      variations: Joi.array().items(ThemeModel.Variation()),
    });
  }
  static MarketplaceThemeId() {
    return Joi.object({
      _id: Joi.string().allow(""),
      is_default: Joi.boolean(),
    });
  }
  static MarketplaceThemeResponse() {
    return Joi.object({
      body: ThemeModel.MarketplaceThemeResponseBody(),
      status: Joi.number(),
    });
  }
  static MarketplaceThemeResponseBody() {
    return Joi.object({
      items: Joi.array().items(ThemeModel.MarketplaceTheme()),
      page: ThemeModel.PaginationSchema(),
    });
  }
  static Medium() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static MetaV2() {
    return Joi.object({
      description: Joi.string().allow(""),
      images: ThemeModel.ImagesV2(),
      industry: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      payment: ThemeModel.PaymentV2(),
      release: ThemeModel.ReleaseV2(),
      slug: Joi.string().allow(""),
    });
  }
  static Organization() {
    return Joi.object({
      _id: Joi.string().allow(""),
      meta: ThemeModel.OrganizationMeta(),
    });
  }
  static OrganizationMeta() {
    return Joi.object({
      ecomm_platform_used: Joi.array().items(Joi.string().allow("")),
      goals: Joi.array().items(Joi.string().allow("")),
    });
  }
  static OverlayPopupSettingV2() {
    return Joi.object({
      dialog_backgroung: Joi.string().allow(""),
      overlay: Joi.string().allow(""),
    });
  }
  static PageV2() {
    return Joi.object({
      sections: Joi.array().items(ThemeModel.SectionV2()),
      value: Joi.string().allow(""),
    });
  }
  static PaginationSchema() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }
  static PaletteConfigV2() {
    return Joi.object({
      advance_setting: ThemeModel.AdvanceSettingV2(),
      general_setting: ThemeModel.GeneralSettingV2(),
    });
  }
  static PaymentInfo() {
    return Joi.object({
      amount: Joi.number(),
      is_paid: Joi.boolean(),
    });
  }
  static PaymentV2() {
    return Joi.object({
      amount: Joi.number(),
      is_paid: Joi.boolean(),
    });
  }
  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean().required(),
      country_code: Joi.number(),
      phone: Joi.string().allow("").required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
    });
  }
  static PredicateV2() {
    return Joi.object({
      route: ThemeModel.RouteV2(),
      screen: ThemeModel.ScreenV2(),
      user: ThemeModel.UserV2(),
    });
  }
  static Preset() {
    return Joi.object({
      pages: Joi.array().items(ThemeModel.AvailablePageSchema()),
    });
  }
  static PresetV2() {
    return Joi.object({
      pages: Joi.array().items(ThemeModel.PageV2()),
    });
  }
  static PropV2() {
    return Joi.object({
      category: Joi.string().allow(""),
      id: Joi.string().allow(""),
      info: Joi.string().allow(""),
      label: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static RangePropV2() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static Regular() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static Release() {
    return Joi.object({
      notes: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static ReleaseV2() {
    return Joi.object({
      notes: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static RouteV2() {
    return Joi.object({
      exact_url: Joi.string().allow(""),
      selected: Joi.string().allow(""),
    });
  }
  static SaleDiscountSettingV2() {
    return Joi.object({
      sale_badge_background: Joi.string().allow(""),
      sale_badge_text: Joi.string().allow(""),
      sale_discount_text: Joi.string().allow(""),
      sale_timer: Joi.string().allow(""),
    });
  }
  static ScreenV2() {
    return Joi.object({
      desktop: Joi.boolean(),
      mobile: Joi.boolean(),
      tablet: Joi.boolean(),
    });
  }
  static SectionItem() {
    return Joi.object({
      blocks: Joi.array().items(Joi.any()),
      label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      props: Joi.array().items(Joi.any()),
    });
  }
  static SectionPresetV2() {
    return Joi.object({
      blocks: Joi.array().items(ThemeModel.BlockV2()),
    });
  }
  static SectionPropsV2() {
    return Joi.object({
      autoplay: ThemeModel.CheckboxPropV2(),
      item_margin: ThemeModel.TextPropV2(),
      slide_interval: ThemeModel.RangePropV2(),
      title: ThemeModel.TextPropV2(),
    });
  }
  static Sections() {
    return Joi.object({
      attributes: Joi.string().allow(""),
    });
  }
  static SectionV2() {
    return Joi.object({
      blocks: Joi.array().items(ThemeModel.BlockV2()),
      name: Joi.string().allow(""),
      predicate: ThemeModel.PredicateV2(),
      preset: ThemeModel.SectionPresetV2(),
      props: ThemeModel.SectionPropsV2(),
    });
  }
  static SemiBold() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static Src() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }
  static StaticConfigV2() {
    return Joi.object({
      props: ThemeModel.StaticPropsV2(),
    });
  }
  static StaticPropsV2() {
    return Joi.object({
      auth: ThemeModel.AuthConfigV2(),
      colors: ThemeModel.ColorsV2(),
    });
  }
  static TextPropV2() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static TextSettingV2() {
    return Joi.object({
      text_body: Joi.string().allow(""),
      text_heading: Joi.string().allow(""),
      text_label: Joi.string().allow(""),
      text_secondary: Joi.string().allow(""),
    });
  }
  static ThemeAndUserDetailsResponse() {
    return Joi.object({
      themes: Joi.array().items(ThemeModel.MarketplaceTheme()),
      user: Joi.array().items(ThemeModel.ThemeCreator()),
    });
  }
  static ThemeCreator() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      account_type: Joi.string().allow(""),
      active: Joi.boolean().required(),
      emails: Joi.array().items(ThemeModel.Email()).required(),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow("").allow(null),
      last_name: Joi.string().allow(""),
      phone_numbers: Joi.array().items(ThemeModel.PhoneNumber()),
    });
  }
  static ThemeImages() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }
  static ThemeMeta() {
    return Joi.object({
      description: Joi.string().allow(""),
      images: ThemeModel.ThemeImages(),
      industry: Joi.array().items(Joi.string().allow("")),
      payment: ThemeModel.ThemePayment(),
      slug: Joi.string().allow(""),
    });
  }
  static ThemePayment() {
    return Joi.object({
      amount: Joi.number(),
      is_paid: Joi.boolean(),
    });
  }
  static ThemeReq() {
    return Joi.object({
      marketplace_theme_id: Joi.string().allow(""),
    });
  }
  static ThemeSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.number(),
      created_at: Joi.string().allow(""),
      marketplace_theme_id: ThemeModel.MarketplaceThemeId(),
      meta: ThemeModel.ThemeMeta(),
      name: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static ThemeSettingV2() {
    return Joi.object({
      page_background: Joi.string().allow(""),
      theme_accent: Joi.string().allow(""),
    });
  }
  static ThemesListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(ThemeModel.ThemesSchema()),
      page: ThemeModel.PaginationSchema(),
    });
  }
  static ThemeSlugResponse() {
    return Joi.object({
      organization: ThemeModel.Organization(),
      theme: ThemeModel.MarketplaceTheme(),
      user: Joi.array().items(ThemeModel.ThemeCreator()),
    });
  }
  static ThemesSchema() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      applied: Joi.boolean(),
      archived: Joi.boolean(),
      assets: ThemeModel.AssetsSchema(),
      available_sections: Joi.array().items(
        ThemeModel.availableSectionSchema()
      ),
      colors: ThemeModel.Colors(),
      config: ThemeModel.Config(),
      created_at: Joi.string().allow(""),
      customized: Joi.boolean(),
      font: ThemeModel.Font(),
      information: ThemeModel.Information(),
      parent_theme: Joi.string().allow(""),
      parent_theme_version: Joi.string().allow(""),
      published: Joi.boolean(),
      src: ThemeModel.Src(),
      styles: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static UmdJs() {
    return Joi.object({
      link: Joi.string().allow(""),
      links: Joi.array().items(Joi.string().allow("")),
    });
  }
  static UMDJs() {
    return Joi.object({
      links: Joi.array().items(Joi.string().allow("")),
    });
  }
  static UpdateThemeNameRequestBodyV2() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }
  static UpdateThemeRequestBodyV2() {
    return Joi.object({
      config: ThemeModel.ConfigV2(),
      font: ThemeModel.FontV2(),
    });
  }
  static UpgradableThemeSchema() {
    return Joi.object({
      applied_theme: Joi.string().allow(""),
      parent_theme: Joi.string().allow(""),
      upgrade: Joi.boolean(),
    });
  }
  static UrlPropV2() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static UserAlertsSettingV2() {
    return Joi.object({
      error_background: Joi.string().allow(""),
      error_text: Joi.string().allow(""),
      info_background: Joi.string().allow(""),
      info_text: Joi.string().allow(""),
      success_background: Joi.string().allow(""),
      success_text: Joi.string().allow(""),
    });
  }
  static UserV2() {
    return Joi.object({
      anonymous: Joi.boolean(),
      authenticated: Joi.boolean(),
    });
  }
  static Variants() {
    return Joi.object({
      bold: ThemeModel.Bold(),
      light: ThemeModel.Light(),
      medium: ThemeModel.Medium(),
      regular: ThemeModel.Regular(),
      semi_bold: ThemeModel.SemiBold(),
    });
  }
  static Variation() {
    return Joi.object({
      color: Joi.string().allow(""),
      demo_url: Joi.string().allow(""),
      images: ThemeModel.Images(),
      name: Joi.string().allow(""),
    });
  }
}
module.exports = ThemeModel;
