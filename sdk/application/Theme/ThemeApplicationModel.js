const Joi = require("joi");

class ThemeModel {
  static AdvanceSetting() {
    return Joi.object({
      divider_stroke_highlight: ThemeModel.DividerStrokeHighlightSetting(),
      overlay_popup: ThemeModel.OverlayPopupSetting(),
      user_alerts: ThemeModel.UserAlertsSetting(),
    });
  }
  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(ThemeModel.AvailablePageSchema()),
    });
  }
  static Assets() {
    return Joi.object({
      common_js: ThemeModel.CommonJS(),
      css: ThemeModel.CSS(),
      umd_js: ThemeModel.UMDJs(),
    });
  }
  static AuthConfig() {
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
  static Block() {
    return Joi.object({
      name: Joi.string().allow(""),
      props: ThemeModel.BlockProps(),
      type: Joi.string().allow(""),
    });
  }
  static BlockProps() {
    return Joi.object({
      image: ThemeModel.ImagePickerProp(),
      slide_link: ThemeModel.UrlProp(),
    });
  }
  static ButtonSetting() {
    return Joi.object({
      button_link: Joi.string().allow(""),
      button_primary: Joi.string().allow(""),
      button_secondary: Joi.string().allow(""),
    });
  }
  static CheckboxProp() {
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
  static CommonJS() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }
  static Config() {
    return Joi.object({
      current: Joi.string().allow("").required(),
      global_schema: ThemeModel.GlobalSchema(),
      list: Joi.array().items(ThemeModel.ThemeConfiguration()).required(),
      preset: ThemeModel.Preset(),
    });
  }
  static CSS() {
    return Joi.object({
      links: Joi.array().items(Joi.string().allow("")),
    });
  }
  static CustomConfig() {
    return Joi.object({
      props: ThemeModel.CustomProps(),
    });
  }
  static CustomProps() {
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
  static DividerStrokeHighlightSetting() {
    return Joi.object({
      divider_strokes: Joi.string().allow(""),
      highlight: Joi.string().allow(""),
    });
  }
  static Font() {
    return Joi.object({
      family: Joi.string().allow("").required(),
      variants: ThemeModel.FontVariants().required(),
    });
  }
  static FontVariant() {
    return Joi.object({
      file: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }
  static FontVariants() {
    return Joi.object({
      bold: ThemeModel.FontVariant(),
      light: ThemeModel.FontVariant(),
      medium: ThemeModel.FontVariant(),
      regular: ThemeModel.FontVariant(),
      semi_bold: ThemeModel.FontVariant(),
    });
  }
  static FooterSetting() {
    return Joi.object({
      footer_background: Joi.string().allow(""),
      footer_body_text: Joi.string().allow(""),
      footer_bottom_background: Joi.string().allow(""),
      footer_heading_text: Joi.string().allow(""),
      footer_icon: Joi.string().allow(""),
    });
  }
  static GeneralSetting() {
    return Joi.object({
      button: ThemeModel.ButtonSetting(),
      footer: ThemeModel.FooterSetting(),
      header: ThemeModel.HeaderSetting(),
      sale_discount: ThemeModel.SaleDiscountSetting(),
      text: ThemeModel.TextSetting(),
      theme: ThemeModel.ThemeSetting(),
    });
  }
  static GlobalConfig() {
    return Joi.object({
      auth: ThemeModel.AuthConfig(),
      palette: ThemeModel.PaletteConfig(),
      statics: ThemeModel.StaticConfig(),
    });
  }
  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(ThemeModel.Prop()),
    });
  }
  static HeaderSetting() {
    return Joi.object({
      header_background: Joi.string().allow(""),
      header_icon: Joi.string().allow(""),
      header_nav: Joi.string().allow(""),
    });
  }
  static ImagePickerProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static Images() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }
  static Meta() {
    return Joi.object({
      description: Joi.string().allow(""),
      images: ThemeModel.Images(),
      industry: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      payment: ThemeModel.ThemePayment(),
      release: ThemeModel.Release(),
      slug: Joi.string().allow(""),
    });
  }
  static OverlayPopupSetting() {
    return Joi.object({
      dialog_backgroung: Joi.string().allow(""),
      overlay: Joi.string().allow(""),
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
  static PaletteConfig() {
    return Joi.object({
      advance_setting: ThemeModel.AdvanceSetting(),
      general_setting: ThemeModel.GeneralSetting(),
    });
  }
  static Predicate() {
    return Joi.object({
      route: ThemeModel.Route(),
      screen: ThemeModel.Screen(),
      user: ThemeModel.ThemeUserSchema(),
    });
  }
  static Preset() {
    return Joi.object({
      pages: Joi.array().items(ThemeModel.Page()),
    });
  }
  static Prop() {
    return Joi.object({
      category: Joi.string().allow(""),
      id: Joi.string().allow(""),
      info: Joi.string().allow(""),
      label: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static RangeProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static Release() {
    return Joi.object({
      notes: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static Route() {
    return Joi.object({
      exact_url: Joi.string().allow(""),
      selected: Joi.string().allow(""),
    });
  }
  static SaleDiscountSetting() {
    return Joi.object({
      sale_badge_background: Joi.string().allow(""),
      sale_badge_text: Joi.string().allow(""),
      sale_discount_text: Joi.string().allow(""),
      sale_timer: Joi.string().allow(""),
    });
  }
  static Screen() {
    return Joi.object({
      desktop: Joi.boolean(),
      mobile: Joi.boolean(),
      tablet: Joi.boolean(),
    });
  }
  static Section() {
    return Joi.object({
      blocks: Joi.array().items(ThemeModel.Block()),
      name: Joi.string().allow(""),
      predicate: ThemeModel.Predicate(),
      preset: ThemeModel.SectionPreset(),
      props: ThemeModel.SectionProps(),
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
  static SectionPreset() {
    return Joi.object({
      blocks: Joi.array().items(ThemeModel.Block()),
    });
  }
  static SectionProps() {
    return Joi.object({
      autoplay: ThemeModel.CheckboxProp(),
      item_margin: ThemeModel.TextProp(),
      slide_interval: ThemeModel.RangeProp(),
      title: ThemeModel.TextProp(),
    });
  }
  static StaticConfig() {
    return Joi.object({
      props: ThemeModel.StaticProps(),
    });
  }
  static StaticProps() {
    return Joi.object({
      auth: ThemeModel.AuthConfig(),
      colors: ThemeModel.Colors(),
    });
  }
  static TextProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static TextSetting() {
    return Joi.object({
      text_body: Joi.string().allow(""),
      text_heading: Joi.string().allow(""),
      text_label: Joi.string().allow(""),
      text_secondary: Joi.string().allow(""),
    });
  }
  static ThemeConfiguration() {
    return Joi.object({
      custom: ThemeModel.CustomConfig(),
      global_config: ThemeModel.GlobalConfig(),
      name: Joi.string().allow(""),
      page: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ThemePayment() {
    return Joi.object({
      amount: Joi.number(),
      is_paid: Joi.boolean(),
    });
  }
  static ThemeSetting() {
    return Joi.object({
      page_background: Joi.string().allow(""),
      theme_accent: Joi.string().allow(""),
    });
  }
  static ThemesSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      applied: Joi.boolean(),
      assets: ThemeModel.Assets(),
      available_sections: Joi.array().items(ThemeModel.SectionItem()),
      config: ThemeModel.Config(),
      created_at: Joi.string().allow(""),
      font: ThemeModel.Font(),
      is_private: Joi.boolean(),
      marketplace_theme_id: Joi.string().allow(""),
      meta: ThemeModel.Meta(),
      name: Joi.string().allow(""),
      styles: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      template_theme_id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static ThemeUserSchema() {
    return Joi.object({
      anonymous: Joi.boolean(),
      authenticated: Joi.boolean(),
    });
  }
  static UMDJs() {
    return Joi.object({
      links: Joi.array().items(Joi.string().allow("")),
    });
  }
  static UrlProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static UserAlertsSetting() {
    return Joi.object({
      error_background: Joi.string().allow(""),
      error_text: Joi.string().allow(""),
      info_background: Joi.string().allow(""),
      info_text: Joi.string().allow(""),
      success_background: Joi.string().allow(""),
      success_text: Joi.string().allow(""),
    });
  }
}
module.exports = ThemeModel;
