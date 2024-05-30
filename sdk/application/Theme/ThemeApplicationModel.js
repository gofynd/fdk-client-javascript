const Joi = require("joi");

/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef AvailablePageSchema
 * @property {string} [value]
 * @property {string} [text]
 * @property {string} [path]
 * @property {string} [type]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {string} [theme]
 * @property {AvailablePageSeo} [seo]
 * @property {Object[]} [props]
 * @property {string} [_id]
 */

/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */

/**
 * @typedef AvailablePageSeo
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [_id]
 */

/**
 * @typedef AvailablePageSchemaSections
 * @property {string} [name]
 * @property {string} [label]
 * @property {Object} [props]
 * @property {Object[]} [blocks]
 * @property {Object} [preset]
 * @property {AvailablePagePredicate} [predicate]
 */

/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {AvailablePageRoutePredicate} [route]
 */

/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [mobile]
 * @property {boolean} [desktop]
 * @property {boolean} [tablet]
 */

/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [authenticated]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [selected]
 * @property {string} [exact_url]
 * @property {Object} [query]
 */

/**
 * @typedef ThemesSchema
 * @property {Font} [font]
 * @property {Config} [config]
 * @property {boolean} [applied] - Whether the theme has been applied or not
 * @property {boolean} [is_private] - Whether the theme is private or not
 * @property {string[]} [tags] - An array of tags associated with the theme
 * @property {string} [_id] - The unique identifier of the theme
 * @property {string} [application_id] - The ID of the application
 * @property {string} [marketplace_theme_id] - The ID of the theme in the marketplace
 * @property {Meta} [meta]
 * @property {string} [name] - The name of the theme
 * @property {string} [template_theme_id] - The ID of the template theme
 * @property {string} [version] - The version of the theme
 * @property {Object} [styles] - The styles associated with the theme
 * @property {string} [created_at] - The creation timestamp of the theme
 * @property {string} [updated_at] - The last update timestamp of the theme
 * @property {Assets} [assets]
 * @property {SectionItem[]} [available_sections] - Available sections information
 */

/**
 * @typedef Font
 * @property {FontVariants} variants
 * @property {string} family - The font family
 */

/**
 * @typedef FontVariants
 * @property {FontVariant} [light]
 * @property {FontVariant} [regular]
 * @property {FontVariant} [medium]
 * @property {FontVariant} [semi_bold]
 * @property {FontVariant} [bold]
 */

/**
 * @typedef FontVariant
 * @property {string} name - The name of the font variant
 * @property {string} file - The URL of the font file
 */

/**
 * @typedef Config
 * @property {string} current - The current configuration
 * @property {ThemeConfiguration[]} list - A list of configurations
 * @property {GlobalSchema} [global_schema]
 * @property {Preset} [preset]
 */

/**
 * @typedef ThemeConfiguration
 * @property {string} [name] - The name of the configuration
 * @property {Object} [global_config]
 * @property {string[]} [page] - An array of pages
 */

/**
 * @typedef CustomConfig
 * @property {CustomProps} [props]
 */

/**
 * @typedef CustomProps
 * @property {string} [header_bg_color] - The header background color
 * @property {string} [header_text_color] - The header text color
 * @property {string} [header_border_color] - The header border color
 * @property {string} [header_icon_color] - The header icon color
 * @property {string} [header_cart_notification_bg_color] - The header cart
 *   notification background color
 * @property {string} [header_cart_notification_text_color] - The header cart
 *   notification text color
 * @property {string} [header_nav_hover_color] - The header navigation hover color
 * @property {string} [button_primary_color] - The primary button color
 * @property {string} [button_primary_label_color] - The primary button label color
 * @property {string} [button_add_to_cart_color] - The add to cart button color
 * @property {string} [button_add_to_cart_label_color] - The add to cart button
 *   label color
 * @property {string} [button_secondary_color] - The secondary button color
 * @property {string} [button_secondary_label_color] - The secondary button label color
 * @property {string} [button_tertiary_color] - The tertiary button color
 * @property {string} [button_tertiary_label_color] - The tertiary button label color
 * @property {string} [button_tertiary_hover_color] - The tertiary button hover color
 * @property {string} [button_tertiary_hover_text_color] - The tertiary button
 *   hover text color
 * @property {string} [text_heading_link_color] - The text heading link color
 * @property {string} [text_body_color] - The text body color
 * @property {string} [text_price_color] - The text price color
 * @property {string} [text_sale_price_color] - The text sale price color
 * @property {string} [text_strikethrough_price_color] - The text strikethrough
 *   price color
 * @property {string} [text_discount_color] - The text discount color
 * @property {string} [footer_bg_color] - The footer background color
 * @property {string} [footer_text_color] - The footer text color
 * @property {string} [footer_border_color] - The footer border color
 * @property {string} [footer_nav_hover_color] - The footer navigation hover color
 * @property {boolean} [disable_cart] - Whether to disable the cart or not
 * @property {boolean} [is_menu_below_logo] - Whether the menu is below the logo or not
 * @property {string} [menu_position] - The position of the menu
 */

/**
 * @typedef GlobalConfig
 * @property {StaticConfig} [statics]
 * @property {CustomConfig} [custom]
 */

/**
 * @typedef GeneralSetting
 * @property {ThemeSetting} [theme]
 * @property {TextSetting} [text]
 * @property {ButtonSetting} [button]
 * @property {SaleDiscountSetting} [sale_discount]
 * @property {HeaderSetting} [header]
 * @property {FooterSetting} [footer]
 */

/**
 * @typedef AdvanceSetting
 * @property {OverlayPopupSetting} [overlay_popup]
 * @property {DividerStrokeHighlightSetting} [divider_stroke_highlight]
 * @property {UserAlertsSetting} [user_alerts]
 */

/**
 * @typedef UserAlertsSetting
 * @property {string} [success_background] - The success background color
 * @property {string} [success_text] - The success text color
 * @property {string} [error_background] - The error background color
 * @property {string} [error_text] - The error text color
 * @property {string} [info_background] - The info background color
 * @property {string} [info_text] - The info text color
 */

/**
 * @typedef ThemeSetting
 * @property {string} [page_background] - The page background color
 * @property {string} [theme_accent] - The theme accent color
 */

/**
 * @typedef TextSetting
 * @property {string} [text_heading] - The text heading color
 * @property {string} [text_body] - The text body color
 * @property {string} [text_label] - The text label color
 * @property {string} [text_secondary] - The secondary text color
 */

/**
 * @typedef ButtonSetting
 * @property {string} [button_primary] - The primary button color
 * @property {string} [button_secondary] - The secondary button color
 * @property {string} [button_link] - The button link color
 */

/**
 * @typedef SaleDiscountSetting
 * @property {string} [sale_badge_background] - The sale badge background color
 * @property {string} [sale_badge_text] - The sale badge text color
 * @property {string} [sale_discount_text] - The sale discount text color
 * @property {string} [sale_timer] - The sale timer color
 */

/**
 * @typedef HeaderSetting
 * @property {string} [header_background] - The header background color
 * @property {string} [header_nav] - The header navigation color
 * @property {string} [header_icon] - The header icon color
 */

/**
 * @typedef FooterSetting
 * @property {string} [footer_background] - The footer background color
 * @property {string} [footer_bottom_background] - The footer bottom background color
 * @property {string} [footer_heading_text] - The footer heading text color
 * @property {string} [footer_body_text] - The footer body text color
 * @property {string} [footer_icon] - The footer icon color
 */

/**
 * @typedef OverlayPopupSetting
 * @property {string} [dialog_backgroung] - The dialog background color
 * @property {string} [overlay] - The overlay color
 */

/**
 * @typedef DividerStrokeHighlightSetting
 * @property {string} [divider_strokes] - The divider strokes color
 * @property {string} [highlight] - The highlight color
 */

/**
 * @typedef StaticConfig
 * @property {StaticProps} [props]
 */

/**
 * @typedef StaticProps
 * @property {Colors} [colors]
 * @property {AuthConfig} [auth]
 * @property {PaletteConfig} [palette]
 */

/**
 * @typedef Colors
 * @property {string} [primary_color] - The primary color
 * @property {string} [secondary_color] - The secondary color
 * @property {string} [accent_color] - The accent color
 * @property {string} [link_color] - The link color
 * @property {string} [button_secondary_color] - The secondary button color
 * @property {string} [bg_color] - The background color
 */

/**
 * @typedef AuthConfig
 * @property {boolean} [show_header_auth] - Whether to show header authentication or not
 * @property {boolean} [show_footer_auth] - Whether to show footer authentication or not
 */

/**
 * @typedef PaletteConfig
 * @property {GeneralSetting} [general_setting]
 * @property {AdvanceSetting} [advance_setting]
 */

/**
 * @typedef Meta
 * @property {ThemePayment} [payment]
 * @property {string} [description] - The description of the theme
 * @property {string[]} [industry] - An array of industries associated with the theme
 * @property {Release} [release]
 * @property {Images} [images]
 * @property {string} [slug] - The slug of the theme
 * @property {string} [name] - The name of the theme
 */

/**
 * @typedef ThemePayment
 * @property {boolean} [is_paid] - Whether the theme is paid or not
 * @property {number} [amount] - The amount of the theme
 */

/**
 * @typedef Release
 * @property {string} [notes] - The release notes of the theme
 * @property {string} [version] - The version of the theme
 */

/**
 * @typedef Images
 * @property {string} [desktop] - The URL of the desktop image
 * @property {string} [mobile] - The URL of the mobile image
 */

/**
 * @typedef Assets
 * @property {UMDJs} [umd_js]
 * @property {CommonJS} [common_js]
 * @property {CSS} [css]
 */

/**
 * @typedef UMDJs
 * @property {string[]} [links]
 */

/**
 * @typedef CommonJS
 * @property {string} [link]
 */

/**
 * @typedef CSS
 * @property {string[]} [links]
 */

/**
 * @typedef SectionItem
 * @property {Object[]} [props]
 * @property {Object[]} [blocks] - Blocks
 * @property {string} [name] - Name of the section
 * @property {string} [label] - Label for the section
 */

/**
 * @typedef GlobalSchema
 * @property {Prop[]} [props]
 */

/**
 * @typedef Prop
 * @property {string} [type] - The type of the property
 * @property {string} [category] - The category of the property
 * @property {string} [id] - The ID of the property
 * @property {string} [label] - The label of the property
 * @property {string} [info] - Additional information about the property
 */

/**
 * @typedef Preset
 * @property {Page[]} [pages]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef SectionProps
 * @property {TextProp} [title]
 * @property {TextProp} [item_margin]
 * @property {CheckboxProp} [autoplay]
 * @property {RangeProp} [slide_interval]
 */

/**
 * @typedef SectionPreset
 * @property {Block[]} [blocks]
 */

/**
 * @typedef ImagePickerProp
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the image picker property.
 */

/**
 * @typedef UrlProp
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the URL property.
 */

/**
 * @typedef BlockProps
 * @property {ImagePickerProp} [image]
 * @property {UrlProp} [slide_link]
 */

/**
 * @typedef TextProp
 * @property {string} [value] - The value of the text property.
 * @property {string} [type] - The type of the property.
 */

/**
 * @typedef CheckboxProp
 * @property {boolean} [value] - The value of the checkbox property.
 * @property {string} [type] - The type of the property.
 */

/**
 * @typedef RangeProp
 * @property {number} [value] - The value of the range property.
 * @property {string} [type] - The type of the property.
 */

/**
 * @typedef Section
 * @property {Block[]} [blocks]
 * @property {Predicate} [predicate]
 * @property {string} [name] - The name of the section.
 * @property {SectionProps} [props]
 * @property {SectionPreset} [preset]
 */

/**
 * @typedef Block
 * @property {string} [type] - The type of the block.
 * @property {string} [name] - The name of the block.
 * @property {BlockProps} [props]
 */

/**
 * @typedef Predicate
 * @property {Screen} [screen]
 * @property {ThemeUserSchema} [user]
 * @property {Route} [route]
 */

/**
 * @typedef Screen
 * @property {boolean} [mobile] - True if the screen is a mobile device.
 * @property {boolean} [desktop] - True if the screen is a desktop device.
 * @property {boolean} [tablet] - True if the screen is a tablet device.
 */

/**
 * @typedef ThemeUserSchema
 * @property {boolean} [authenticated] - True if the user is authenticated.
 * @property {boolean} [anonymous] - True if the user is anonymous.
 */

/**
 * @typedef Route
 * @property {string} [selected] - The selected route.
 * @property {string} [exact_url] - The exact URL of the route.
 */

/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */

class ThemeApplicationModel {
  /** @returns {AllAvailablePageSchema} */
  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(ThemeApplicationModel.AvailablePageSchema()),
    });
  }

  /** @returns {AvailablePageSchema} */
  static AvailablePageSchema() {
    return Joi.object({
      value: Joi.string().allow(""),
      text: Joi.string().allow(""),
      path: Joi.string().allow(""),
      type: Joi.string().allow(""),
      sections: Joi.array().items(
        ThemeApplicationModel.AvailablePageSchemaSections()
      ),
      sections_meta: Joi.array().items(
        ThemeApplicationModel.AvailablePageSectionMetaAttributes()
      ),
      theme: Joi.string().allow(""),
      seo: ThemeApplicationModel.AvailablePageSeo(),
      props: Joi.array().items(Joi.any()),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePageSectionMetaAttributes} */
  static AvailablePageSectionMetaAttributes() {
    return Joi.object({
      attributes: Joi.any(),
    });
  }

  /** @returns {AvailablePageSeo} */
  static AvailablePageSeo() {
    return Joi.object({
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePageSchemaSections} */
  static AvailablePageSchemaSections() {
    return Joi.object({
      name: Joi.string().allow(""),
      label: Joi.string().allow(""),
      props: Joi.any(),
      blocks: Joi.array().items(Joi.any()),
      preset: Joi.any(),
      predicate: ThemeApplicationModel.AvailablePagePredicate(),
    });
  }

  /** @returns {AvailablePagePredicate} */
  static AvailablePagePredicate() {
    return Joi.object({
      screen: ThemeApplicationModel.AvailablePageScreenPredicate(),
      user: ThemeApplicationModel.AvailablePageUserPredicate(),
      route: ThemeApplicationModel.AvailablePageRoutePredicate(),
    });
  }

  /** @returns {AvailablePageScreenPredicate} */
  static AvailablePageScreenPredicate() {
    return Joi.object({
      mobile: Joi.boolean(),
      desktop: Joi.boolean(),
      tablet: Joi.boolean(),
    });
  }

  /** @returns {AvailablePageUserPredicate} */
  static AvailablePageUserPredicate() {
    return Joi.object({
      authenticated: Joi.boolean(),
      anonymous: Joi.boolean(),
    });
  }

  /** @returns {AvailablePageRoutePredicate} */
  static AvailablePageRoutePredicate() {
    return Joi.object({
      selected: Joi.string().allow(""),
      exact_url: Joi.string().allow(""),
      query: Joi.any(),
    });
  }

  /** @returns {ThemesSchema} */
  static ThemesSchema() {
    return Joi.object({
      font: ThemeApplicationModel.Font(),
      config: ThemeApplicationModel.Config(),
      applied: Joi.boolean(),
      is_private: Joi.boolean(),
      tags: Joi.array().items(Joi.string().allow("")),
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      marketplace_theme_id: Joi.string().allow(""),
      meta: ThemeApplicationModel.Meta(),
      name: Joi.string().allow(""),
      template_theme_id: Joi.string().allow(""),
      version: Joi.string().allow(""),
      styles: Joi.any(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      assets: ThemeApplicationModel.Assets(),
      available_sections: Joi.array().items(
        ThemeApplicationModel.SectionItem()
      ),
    });
  }

  /** @returns {Font} */
  static Font() {
    return Joi.object({
      variants: ThemeApplicationModel.FontVariants().required(),
      family: Joi.string().allow("").required(),
    });
  }

  /** @returns {FontVariants} */
  static FontVariants() {
    return Joi.object({
      light: ThemeApplicationModel.FontVariant(),
      regular: ThemeApplicationModel.FontVariant(),
      medium: ThemeApplicationModel.FontVariant(),
      semi_bold: ThemeApplicationModel.FontVariant(),
      bold: ThemeApplicationModel.FontVariant(),
    });
  }

  /** @returns {FontVariant} */
  static FontVariant() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      file: Joi.string().allow("").required(),
    });
  }

  /** @returns {Config} */
  static Config() {
    return Joi.object({
      current: Joi.string().allow("").required(),
      list: Joi.array()
        .items(ThemeApplicationModel.ThemeConfiguration())
        .required(),
      global_schema: ThemeApplicationModel.GlobalSchema(),
      preset: ThemeApplicationModel.Preset(),
    });
  }

  /** @returns {ThemeConfiguration} */
  static ThemeConfiguration() {
    return Joi.object({
      name: Joi.string().allow(""),
      global_config: Joi.any(),
      page: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CustomConfig} */
  static CustomConfig() {
    return Joi.object({
      props: ThemeApplicationModel.CustomProps(),
    });
  }

  /** @returns {CustomProps} */
  static CustomProps() {
    return Joi.object({
      header_bg_color: Joi.string().allow(""),
      header_text_color: Joi.string().allow(""),
      header_border_color: Joi.string().allow(""),
      header_icon_color: Joi.string().allow(""),
      header_cart_notification_bg_color: Joi.string().allow(""),
      header_cart_notification_text_color: Joi.string().allow(""),
      header_nav_hover_color: Joi.string().allow(""),
      button_primary_color: Joi.string().allow(""),
      button_primary_label_color: Joi.string().allow(""),
      button_add_to_cart_color: Joi.string().allow(""),
      button_add_to_cart_label_color: Joi.string().allow(""),
      button_secondary_color: Joi.string().allow(""),
      button_secondary_label_color: Joi.string().allow(""),
      button_tertiary_color: Joi.string().allow(""),
      button_tertiary_label_color: Joi.string().allow(""),
      button_tertiary_hover_color: Joi.string().allow(""),
      button_tertiary_hover_text_color: Joi.string().allow(""),
      text_heading_link_color: Joi.string().allow(""),
      text_body_color: Joi.string().allow(""),
      text_price_color: Joi.string().allow(""),
      text_sale_price_color: Joi.string().allow(""),
      text_strikethrough_price_color: Joi.string().allow(""),
      text_discount_color: Joi.string().allow(""),
      footer_bg_color: Joi.string().allow(""),
      footer_text_color: Joi.string().allow(""),
      footer_border_color: Joi.string().allow(""),
      footer_nav_hover_color: Joi.string().allow(""),
      disable_cart: Joi.boolean(),
      is_menu_below_logo: Joi.boolean(),
      menu_position: Joi.string().allow(""),
    });
  }

  /** @returns {GlobalConfig} */
  static GlobalConfig() {
    return Joi.object({
      statics: ThemeApplicationModel.StaticConfig(),
      custom: ThemeApplicationModel.CustomConfig(),
    });
  }

  /** @returns {GeneralSetting} */
  static GeneralSetting() {
    return Joi.object({
      theme: ThemeApplicationModel.ThemeSetting(),
      text: ThemeApplicationModel.TextSetting(),
      button: ThemeApplicationModel.ButtonSetting(),
      sale_discount: ThemeApplicationModel.SaleDiscountSetting(),
      header: ThemeApplicationModel.HeaderSetting(),
      footer: ThemeApplicationModel.FooterSetting(),
    });
  }

  /** @returns {AdvanceSetting} */
  static AdvanceSetting() {
    return Joi.object({
      overlay_popup: ThemeApplicationModel.OverlayPopupSetting(),
      divider_stroke_highlight: ThemeApplicationModel.DividerStrokeHighlightSetting(),
      user_alerts: ThemeApplicationModel.UserAlertsSetting(),
    });
  }

  /** @returns {UserAlertsSetting} */
  static UserAlertsSetting() {
    return Joi.object({
      success_background: Joi.string().allow(""),
      success_text: Joi.string().allow(""),
      error_background: Joi.string().allow(""),
      error_text: Joi.string().allow(""),
      info_background: Joi.string().allow(""),
      info_text: Joi.string().allow(""),
    });
  }

  /** @returns {ThemeSetting} */
  static ThemeSetting() {
    return Joi.object({
      page_background: Joi.string().allow(""),
      theme_accent: Joi.string().allow(""),
    });
  }

  /** @returns {TextSetting} */
  static TextSetting() {
    return Joi.object({
      text_heading: Joi.string().allow(""),
      text_body: Joi.string().allow(""),
      text_label: Joi.string().allow(""),
      text_secondary: Joi.string().allow(""),
    });
  }

  /** @returns {ButtonSetting} */
  static ButtonSetting() {
    return Joi.object({
      button_primary: Joi.string().allow(""),
      button_secondary: Joi.string().allow(""),
      button_link: Joi.string().allow(""),
    });
  }

  /** @returns {SaleDiscountSetting} */
  static SaleDiscountSetting() {
    return Joi.object({
      sale_badge_background: Joi.string().allow(""),
      sale_badge_text: Joi.string().allow(""),
      sale_discount_text: Joi.string().allow(""),
      sale_timer: Joi.string().allow(""),
    });
  }

  /** @returns {HeaderSetting} */
  static HeaderSetting() {
    return Joi.object({
      header_background: Joi.string().allow(""),
      header_nav: Joi.string().allow(""),
      header_icon: Joi.string().allow(""),
    });
  }

  /** @returns {FooterSetting} */
  static FooterSetting() {
    return Joi.object({
      footer_background: Joi.string().allow(""),
      footer_bottom_background: Joi.string().allow(""),
      footer_heading_text: Joi.string().allow(""),
      footer_body_text: Joi.string().allow(""),
      footer_icon: Joi.string().allow(""),
    });
  }

  /** @returns {OverlayPopupSetting} */
  static OverlayPopupSetting() {
    return Joi.object({
      dialog_backgroung: Joi.string().allow(""),
      overlay: Joi.string().allow(""),
    });
  }

  /** @returns {DividerStrokeHighlightSetting} */
  static DividerStrokeHighlightSetting() {
    return Joi.object({
      divider_strokes: Joi.string().allow(""),
      highlight: Joi.string().allow(""),
    });
  }

  /** @returns {StaticConfig} */
  static StaticConfig() {
    return Joi.object({
      props: ThemeApplicationModel.StaticProps(),
    });
  }

  /** @returns {StaticProps} */
  static StaticProps() {
    return Joi.object({
      colors: ThemeApplicationModel.Colors(),
      auth: ThemeApplicationModel.AuthConfig(),
      palette: ThemeApplicationModel.PaletteConfig(),
    });
  }

  /** @returns {Colors} */
  static Colors() {
    return Joi.object({
      primary_color: Joi.string().allow(""),
      secondary_color: Joi.string().allow(""),
      accent_color: Joi.string().allow(""),
      link_color: Joi.string().allow(""),
      button_secondary_color: Joi.string().allow(""),
      bg_color: Joi.string().allow(""),
    });
  }

  /** @returns {AuthConfig} */
  static AuthConfig() {
    return Joi.object({
      show_header_auth: Joi.boolean(),
      show_footer_auth: Joi.boolean(),
    });
  }

  /** @returns {PaletteConfig} */
  static PaletteConfig() {
    return Joi.object({
      general_setting: ThemeApplicationModel.GeneralSetting(),
      advance_setting: ThemeApplicationModel.AdvanceSetting(),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      payment: ThemeApplicationModel.ThemePayment(),
      description: Joi.string().allow(""),
      industry: Joi.array().items(Joi.string().allow("")),
      release: ThemeApplicationModel.Release(),
      images: ThemeApplicationModel.Images(),
      slug: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ThemePayment} */
  static ThemePayment() {
    return Joi.object({
      is_paid: Joi.boolean(),
      amount: Joi.number(),
    });
  }

  /** @returns {Release} */
  static Release() {
    return Joi.object({
      notes: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {Images} */
  static Images() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {Assets} */
  static Assets() {
    return Joi.object({
      umd_js: ThemeApplicationModel.UMDJs(),
      common_js: ThemeApplicationModel.CommonJS(),
      css: ThemeApplicationModel.CSS(),
    });
  }

  /** @returns {UMDJs} */
  static UMDJs() {
    return Joi.object({
      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CommonJS} */
  static CommonJS() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }

  /** @returns {CSS} */
  static CSS() {
    return Joi.object({
      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {SectionItem} */
  static SectionItem() {
    return Joi.object({
      props: Joi.array().items(Joi.any()),
      blocks: Joi.array().items(Joi.any()),
      name: Joi.string().allow(""),
      label: Joi.string().allow(""),
    });
  }

  /** @returns {GlobalSchema} */
  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(ThemeApplicationModel.Prop()),
    });
  }

  /** @returns {Prop} */
  static Prop() {
    return Joi.object({
      type: Joi.string().allow(""),
      category: Joi.string().allow(""),
      id: Joi.string().allow(""),
      label: Joi.string().allow(""),
      info: Joi.string().allow(""),
    });
  }

  /** @returns {Preset} */
  static Preset() {
    return Joi.object({
      pages: Joi.array().items(ThemeApplicationModel.Page()),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
    });
  }

  /** @returns {SectionProps} */
  static SectionProps() {
    return Joi.object({
      title: ThemeApplicationModel.TextProp(),
      item_margin: ThemeApplicationModel.TextProp(),
      autoplay: ThemeApplicationModel.CheckboxProp(),
      slide_interval: ThemeApplicationModel.RangeProp(),
    });
  }

  /** @returns {SectionPreset} */
  static SectionPreset() {
    return Joi.object({
      blocks: Joi.array().items(ThemeApplicationModel.Block()),
    });
  }

  /** @returns {ImagePickerProp} */
  static ImagePickerProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {UrlProp} */
  static UrlProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {BlockProps} */
  static BlockProps() {
    return Joi.object({
      image: ThemeApplicationModel.ImagePickerProp(),
      slide_link: ThemeApplicationModel.UrlProp(),
    });
  }

  /** @returns {TextProp} */
  static TextProp() {
    return Joi.object({
      value: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {CheckboxProp} */
  static CheckboxProp() {
    return Joi.object({
      value: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {RangeProp} */
  static RangeProp() {
    return Joi.object({
      value: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Section} */
  static Section() {
    return Joi.object({
      blocks: Joi.array().items(ThemeApplicationModel.Block()),
      predicate: ThemeApplicationModel.Predicate(),
      name: Joi.string().allow(""),
      props: ThemeApplicationModel.SectionProps(),
      preset: ThemeApplicationModel.SectionPreset(),
    });
  }

  /** @returns {Block} */
  static Block() {
    return Joi.object({
      type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      props: ThemeApplicationModel.BlockProps(),
    });
  }

  /** @returns {Predicate} */
  static Predicate() {
    return Joi.object({
      screen: ThemeApplicationModel.Screen(),
      user: ThemeApplicationModel.ThemeUserSchema(),
      route: ThemeApplicationModel.Route(),
    });
  }

  /** @returns {Screen} */
  static Screen() {
    return Joi.object({
      mobile: Joi.boolean(),
      desktop: Joi.boolean(),
      tablet: Joi.boolean(),
    });
  }

  /** @returns {ThemeUserSchema} */
  static ThemeUserSchema() {
    return Joi.object({
      authenticated: Joi.boolean(),
      anonymous: Joi.boolean(),
    });
  }

  /** @returns {Route} */
  static Route() {
    return Joi.object({
      selected: Joi.string().allow(""),
      exact_url: Joi.string().allow(""),
    });
  }

  /** @returns {BlitzkriegInternalServerErrorSchema} */
  static BlitzkriegInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {BlitzkriegApiErrorSchema} */
  static BlitzkriegApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
}
module.exports = ThemeApplicationModel;
