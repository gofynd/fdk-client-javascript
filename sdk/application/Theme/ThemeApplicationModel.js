const Joi = require("joi");

/**
 * @typedef AdvanceSetting
 * @property {DividerStrokeHighlightSetting} [divider_stroke_highlight]
 * @property {OverlayPopupSetting} [overlay_popup]
 * @property {UserAlertsSetting} [user_alerts]
 */

/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef Assets
 * @property {CommonJS} [common_js]
 * @property {CSS} [css]
 * @property {UMDJs} [umd_js]
 */

/**
 * @typedef AuthConfig
 * @property {boolean} [show_footer_auth] - Whether to show footer authentication or not
 * @property {boolean} [show_header_auth] - Whether to show header authentication or not
 */

/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageRoutePredicate} [route]
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 */

/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [exact_url]
 * @property {Object} [query]
 * @property {string} [selected]
 */

/**
 * @typedef AvailablePageSchema
 * @property {string} [_id]
 * @property {string} [path]
 * @property {Object[]} [props]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {AvailablePageSeo} [seo]
 * @property {string} [text]
 * @property {string} [theme]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef AvailablePageSchemaSections
 * @property {Object[]} [blocks]
 * @property {string} [label]
 * @property {string} [name]
 * @property {AvailablePagePredicate} [predicate]
 * @property {Object} [preset]
 * @property {Object} [props]
 */

/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [desktop]
 * @property {boolean} [mobile]
 * @property {boolean} [tablet]
 */

/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */

/**
 * @typedef AvailablePageSeo
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [title]
 */

/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [anonymous]
 * @property {boolean} [authenticated]
 */

/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef Block
 * @property {string} [name] - The name of the block.
 * @property {BlockProps} [props]
 * @property {string} [type] - The type of the block.
 */

/**
 * @typedef BlockProps
 * @property {ImagePickerProp} [image]
 * @property {UrlProp} [slide_link]
 */

/**
 * @typedef ButtonSetting
 * @property {string} [button_link] - The button link color
 * @property {string} [button_primary] - The primary button color
 * @property {string} [button_secondary] - The secondary button color
 */

/**
 * @typedef CheckboxProp
 * @property {string} [type] - The type of the property.
 * @property {boolean} [value] - The value of the checkbox property.
 */

/**
 * @typedef Colors
 * @property {string} [accent_color] - The accent color
 * @property {string} [bg_color] - The background color
 * @property {string} [button_secondary_color] - The secondary button color
 * @property {string} [link_color] - The link color
 * @property {string} [primary_color] - The primary color
 * @property {string} [secondary_color] - The secondary color
 */

/**
 * @typedef CommonJS
 * @property {string} [link]
 */

/**
 * @typedef Config
 * @property {string} current - The current configuration
 * @property {GlobalSchema} [global_schema]
 * @property {ThemeConfiguration[]} list - A list of configurations
 * @property {Preset} [preset]
 */

/**
 * @typedef CSS
 * @property {string[]} [links]
 */

/**
 * @typedef CustomConfig
 * @property {CustomProps} [props]
 */

/**
 * @typedef CustomProps
 * @property {string} [button_add_to_cart_color] - The add to cart button color
 * @property {string} [button_add_to_cart_label_color] - The add to cart button
 *   label color
 * @property {string} [button_primary_color] - The primary button color
 * @property {string} [button_primary_label_color] - The primary button label color
 * @property {string} [button_secondary_color] - The secondary button color
 * @property {string} [button_secondary_label_color] - The secondary button label color
 * @property {string} [button_tertiary_color] - The tertiary button color
 * @property {string} [button_tertiary_hover_color] - The tertiary button hover color
 * @property {string} [button_tertiary_hover_text_color] - The tertiary button
 *   hover text color
 * @property {string} [button_tertiary_label_color] - The tertiary button label color
 * @property {boolean} [disable_cart] - Whether to disable the cart or not
 * @property {string} [footer_bg_color] - The footer background color
 * @property {string} [footer_border_color] - The footer border color
 * @property {string} [footer_nav_hover_color] - The footer navigation hover color
 * @property {string} [footer_text_color] - The footer text color
 * @property {string} [header_bg_color] - The header background color
 * @property {string} [header_border_color] - The header border color
 * @property {string} [header_cart_notification_bg_color] - The header cart
 *   notification background color
 * @property {string} [header_cart_notification_text_color] - The header cart
 *   notification text color
 * @property {string} [header_icon_color] - The header icon color
 * @property {string} [header_nav_hover_color] - The header navigation hover color
 * @property {string} [header_text_color] - The header text color
 * @property {boolean} [is_menu_below_logo] - Whether the menu is below the logo or not
 * @property {string} [menu_position] - The position of the menu
 * @property {string} [text_body_color] - The text body color
 * @property {string} [text_discount_color] - The text discount color
 * @property {string} [text_heading_link_color] - The text heading link color
 * @property {string} [text_price_color] - The text price color
 * @property {string} [text_sale_price_color] - The text sale price color
 * @property {string} [text_strikethrough_price_color] - The text strikethrough
 *   price color
 */

/**
 * @typedef DividerStrokeHighlightSetting
 * @property {string} [divider_strokes] - The divider strokes color
 * @property {string} [highlight] - The highlight color
 */

/**
 * @typedef Font
 * @property {string} family - The font family
 * @property {FontVariants} variants
 */

/**
 * @typedef FontVariant
 * @property {string} file - The URL of the font file
 * @property {string} name - The name of the font variant
 */

/**
 * @typedef FontVariants
 * @property {FontVariant} [bold]
 * @property {FontVariant} [light]
 * @property {FontVariant} [medium]
 * @property {FontVariant} [regular]
 * @property {FontVariant} [semi_bold]
 */

/**
 * @typedef FooterSetting
 * @property {string} [footer_background] - The footer background color
 * @property {string} [footer_body_text] - The footer body text color
 * @property {string} [footer_bottom_background] - The footer bottom background color
 * @property {string} [footer_heading_text] - The footer heading text color
 * @property {string} [footer_icon] - The footer icon color
 */

/**
 * @typedef GeneralSetting
 * @property {ButtonSetting} [button]
 * @property {FooterSetting} [footer]
 * @property {HeaderSetting} [header]
 * @property {SaleDiscountSetting} [sale_discount]
 * @property {TextSetting} [text]
 * @property {ThemeSetting} [theme]
 */

/**
 * @typedef GlobalConfig
 * @property {CustomConfig} [custom]
 * @property {StaticConfig} [statics]
 */

/**
 * @typedef GlobalSchema
 * @property {Prop[]} [props]
 */

/**
 * @typedef HeaderSetting
 * @property {string} [header_background] - The header background color
 * @property {string} [header_icon] - The header icon color
 * @property {string} [header_nav] - The header navigation color
 */

/**
 * @typedef ImagePickerProp
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the image picker property.
 */

/**
 * @typedef Images
 * @property {string} [desktop] - The URL of the desktop image
 * @property {string} [mobile] - The URL of the mobile image
 */

/**
 * @typedef Meta
 * @property {string} [description] - The description of the theme
 * @property {Images} [images]
 * @property {string[]} [industry] - An array of industries associated with the theme
 * @property {string} [name] - The name of the theme
 * @property {ThemePayment} [payment]
 * @property {Release} [release]
 * @property {string} [slug] - The slug of the theme
 */

/**
 * @typedef OverlayPopupSetting
 * @property {string} [dialog_backgroung] - The dialog background color
 * @property {string} [overlay] - The overlay color
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef PaletteConfig
 * @property {AdvanceSetting} [advance_setting]
 * @property {GeneralSetting} [general_setting]
 */

/**
 * @typedef Predicate
 * @property {Route} [route]
 * @property {Screen} [screen]
 * @property {ThemeUserSchema} [user]
 */

/**
 * @typedef Preset
 * @property {Page[]} [pages]
 */

/**
 * @typedef Prop
 * @property {string} [category] - The category of the property
 * @property {string} [id] - The ID of the property
 * @property {string} [info] - Additional information about the property
 * @property {string} [label] - The label of the property
 * @property {string} [type] - The type of the property
 */

/**
 * @typedef RangeProp
 * @property {string} [type] - The type of the property.
 * @property {number} [value] - The value of the range property.
 */

/**
 * @typedef Release
 * @property {string} [notes] - The release notes of the theme
 * @property {string} [version] - The version of the theme
 */

/**
 * @typedef Route
 * @property {string} [exact_url] - The exact URL of the route.
 * @property {string} [selected] - The selected route.
 */

/**
 * @typedef SaleDiscountSetting
 * @property {string} [sale_badge_background] - The sale badge background color
 * @property {string} [sale_badge_text] - The sale badge text color
 * @property {string} [sale_discount_text] - The sale discount text color
 * @property {string} [sale_timer] - The sale timer color
 */

/**
 * @typedef Screen
 * @property {boolean} [desktop] - True if the screen is a desktop device.
 * @property {boolean} [mobile] - True if the screen is a mobile device.
 * @property {boolean} [tablet] - True if the screen is a tablet device.
 */

/**
 * @typedef Section
 * @property {Block[]} [blocks]
 * @property {string} [name] - The name of the section.
 * @property {Predicate} [predicate]
 * @property {SectionPreset} [preset]
 * @property {SectionProps} [props]
 */

/**
 * @typedef SectionItem
 * @property {Object[]} [blocks] - Blocks
 * @property {string} [label] - Label for the section
 * @property {string} [name] - Name of the section
 * @property {Object[]} [props]
 */

/**
 * @typedef SectionPreset
 * @property {Block[]} [blocks]
 */

/**
 * @typedef SectionProps
 * @property {CheckboxProp} [autoplay]
 * @property {TextProp} [item_margin]
 * @property {RangeProp} [slide_interval]
 * @property {TextProp} [title]
 */

/**
 * @typedef StaticConfig
 * @property {StaticProps} [props]
 */

/**
 * @typedef StaticProps
 * @property {AuthConfig} [auth]
 * @property {Colors} [colors]
 * @property {PaletteConfig} [palette]
 */

/**
 * @typedef TextProp
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the text property.
 */

/**
 * @typedef TextSetting
 * @property {string} [text_body] - The text body color
 * @property {string} [text_heading] - The text heading color
 * @property {string} [text_label] - The text label color
 * @property {string} [text_secondary] - The secondary text color
 */

/**
 * @typedef ThemeConfiguration
 * @property {Object} [global_config]
 * @property {string} [name] - The name of the configuration
 * @property {string[]} [page] - An array of pages
 */

/**
 * @typedef ThemePayment
 * @property {number} [amount] - The amount of the theme
 * @property {boolean} [is_paid] - Whether the theme is paid or not
 */

/**
 * @typedef ThemeSetting
 * @property {string} [page_background] - The page background color
 * @property {string} [theme_accent] - The theme accent color
 */

/**
 * @typedef ThemesSchema
 * @property {string} [_id] - The unique identifier of the theme
 * @property {string} [application_id] - The ID of the application
 * @property {boolean} [applied] - Whether the theme has been applied or not
 * @property {Assets} [assets]
 * @property {SectionItem[]} [available_sections] - Available sections information
 * @property {Config} [config]
 * @property {string} [created_at] - The creation timestamp of the theme
 * @property {Font} [font]
 * @property {boolean} [is_private] - Whether the theme is private or not
 * @property {string} [marketplace_theme_id] - The ID of the theme in the marketplace
 * @property {Meta} [meta]
 * @property {string} [name] - The name of the theme
 * @property {Object} [styles] - The styles associated with the theme
 * @property {string[]} [tags] - An array of tags associated with the theme
 * @property {string} [template_theme_id] - The ID of the template theme
 * @property {string} [updated_at] - The last update timestamp of the theme
 * @property {string} [version] - The version of the theme
 */

/**
 * @typedef ThemeUserSchema
 * @property {boolean} [anonymous] - True if the user is anonymous.
 * @property {boolean} [authenticated] - True if the user is authenticated.
 */

/**
 * @typedef UMDJs
 * @property {string[]} [links]
 */

/**
 * @typedef UrlProp
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the URL property.
 */

/**
 * @typedef UserAlertsSetting
 * @property {string} [error_background] - The error background color
 * @property {string} [error_text] - The error text color
 * @property {string} [info_background] - The info background color
 * @property {string} [info_text] - The info text color
 * @property {string} [success_background] - The success background color
 * @property {string} [success_text] - The success text color
 */

class ThemeApplicationModel {
  /** @returns {AdvanceSetting} */
  static AdvanceSetting() {
    return Joi.object({
      divider_stroke_highlight: ThemeApplicationModel.DividerStrokeHighlightSetting(),
      overlay_popup: ThemeApplicationModel.OverlayPopupSetting(),
      user_alerts: ThemeApplicationModel.UserAlertsSetting(),
    });
  }

  /** @returns {AllAvailablePageSchema} */
  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(ThemeApplicationModel.AvailablePageSchema()),
    });
  }

  /** @returns {Assets} */
  static Assets() {
    return Joi.object({
      common_js: ThemeApplicationModel.CommonJS(),
      css: ThemeApplicationModel.CSS(),
      umd_js: ThemeApplicationModel.UMDJs(),
    });
  }

  /** @returns {AuthConfig} */
  static AuthConfig() {
    return Joi.object({
      show_footer_auth: Joi.boolean(),
      show_header_auth: Joi.boolean(),
    });
  }

  /** @returns {AvailablePagePredicate} */
  static AvailablePagePredicate() {
    return Joi.object({
      route: ThemeApplicationModel.AvailablePageRoutePredicate(),
      screen: ThemeApplicationModel.AvailablePageScreenPredicate(),
      user: ThemeApplicationModel.AvailablePageUserPredicate(),
    });
  }

  /** @returns {AvailablePageRoutePredicate} */
  static AvailablePageRoutePredicate() {
    return Joi.object({
      exact_url: Joi.string().allow(""),
      query: Joi.any(),
      selected: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePageSchema} */
  static AvailablePageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      path: Joi.string().allow(""),
      props: Joi.array().items(Joi.any()),
      sections: Joi.array().items(
        ThemeApplicationModel.AvailablePageSchemaSections()
      ),
      sections_meta: Joi.array().items(
        ThemeApplicationModel.AvailablePageSectionMetaAttributes()
      ),
      seo: ThemeApplicationModel.AvailablePageSeo(),
      text: Joi.string().allow(""),
      theme: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePageSchemaSections} */
  static AvailablePageSchemaSections() {
    return Joi.object({
      blocks: Joi.array().items(Joi.any()),
      label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      predicate: ThemeApplicationModel.AvailablePagePredicate(),
      preset: Joi.any(),
      props: Joi.any(),
    });
  }

  /** @returns {AvailablePageScreenPredicate} */
  static AvailablePageScreenPredicate() {
    return Joi.object({
      desktop: Joi.boolean(),
      mobile: Joi.boolean(),
      tablet: Joi.boolean(),
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
      _id: Joi.string().allow(""),
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePageUserPredicate} */
  static AvailablePageUserPredicate() {
    return Joi.object({
      anonymous: Joi.boolean(),
      authenticated: Joi.boolean(),
    });
  }

  /** @returns {BlitzkriegApiErrorSchema} */
  static BlitzkriegApiErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {BlitzkriegInternalServerErrorSchema} */
  static BlitzkriegInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Block} */
  static Block() {
    return Joi.object({
      name: Joi.string().allow(""),
      props: ThemeApplicationModel.BlockProps(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {BlockProps} */
  static BlockProps() {
    return Joi.object({
      image: ThemeApplicationModel.ImagePickerProp(),
      slide_link: ThemeApplicationModel.UrlProp(),
    });
  }

  /** @returns {ButtonSetting} */
  static ButtonSetting() {
    return Joi.object({
      button_link: Joi.string().allow(""),
      button_primary: Joi.string().allow(""),
      button_secondary: Joi.string().allow(""),
    });
  }

  /** @returns {CheckboxProp} */
  static CheckboxProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.boolean(),
    });
  }

  /** @returns {Colors} */
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

  /** @returns {CommonJS} */
  static CommonJS() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }

  /** @returns {Config} */
  static Config() {
    return Joi.object({
      current: Joi.string().allow("").required(),
      global_schema: ThemeApplicationModel.GlobalSchema(),
      list: Joi.array()
        .items(ThemeApplicationModel.ThemeConfiguration())
        .required(),
      preset: ThemeApplicationModel.Preset(),
    });
  }

  /** @returns {CSS} */
  static CSS() {
    return Joi.object({
      links: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {DividerStrokeHighlightSetting} */
  static DividerStrokeHighlightSetting() {
    return Joi.object({
      divider_strokes: Joi.string().allow(""),
      highlight: Joi.string().allow(""),
    });
  }

  /** @returns {Font} */
  static Font() {
    return Joi.object({
      family: Joi.string().allow("").required(),
      variants: ThemeApplicationModel.FontVariants().required(),
    });
  }

  /** @returns {FontVariant} */
  static FontVariant() {
    return Joi.object({
      file: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {FontVariants} */
  static FontVariants() {
    return Joi.object({
      bold: ThemeApplicationModel.FontVariant(),
      light: ThemeApplicationModel.FontVariant(),
      medium: ThemeApplicationModel.FontVariant(),
      regular: ThemeApplicationModel.FontVariant(),
      semi_bold: ThemeApplicationModel.FontVariant(),
    });
  }

  /** @returns {FooterSetting} */
  static FooterSetting() {
    return Joi.object({
      footer_background: Joi.string().allow(""),
      footer_body_text: Joi.string().allow(""),
      footer_bottom_background: Joi.string().allow(""),
      footer_heading_text: Joi.string().allow(""),
      footer_icon: Joi.string().allow(""),
    });
  }

  /** @returns {GeneralSetting} */
  static GeneralSetting() {
    return Joi.object({
      button: ThemeApplicationModel.ButtonSetting(),
      footer: ThemeApplicationModel.FooterSetting(),
      header: ThemeApplicationModel.HeaderSetting(),
      sale_discount: ThemeApplicationModel.SaleDiscountSetting(),
      text: ThemeApplicationModel.TextSetting(),
      theme: ThemeApplicationModel.ThemeSetting(),
    });
  }

  /** @returns {GlobalConfig} */
  static GlobalConfig() {
    return Joi.object({
      custom: ThemeApplicationModel.CustomConfig(),
      statics: ThemeApplicationModel.StaticConfig(),
    });
  }

  /** @returns {GlobalSchema} */
  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(ThemeApplicationModel.Prop()),
    });
  }

  /** @returns {HeaderSetting} */
  static HeaderSetting() {
    return Joi.object({
      header_background: Joi.string().allow(""),
      header_icon: Joi.string().allow(""),
      header_nav: Joi.string().allow(""),
    });
  }

  /** @returns {ImagePickerProp} */
  static ImagePickerProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {Images} */
  static Images() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      description: Joi.string().allow(""),
      images: ThemeApplicationModel.Images(),
      industry: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      payment: ThemeApplicationModel.ThemePayment(),
      release: ThemeApplicationModel.Release(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {OverlayPopupSetting} */
  static OverlayPopupSetting() {
    return Joi.object({
      dialog_backgroung: Joi.string().allow(""),
      overlay: Joi.string().allow(""),
    });
  }

  /** @returns {Page} */
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

  /** @returns {PaletteConfig} */
  static PaletteConfig() {
    return Joi.object({
      advance_setting: ThemeApplicationModel.AdvanceSetting(),
      general_setting: ThemeApplicationModel.GeneralSetting(),
    });
  }

  /** @returns {Predicate} */
  static Predicate() {
    return Joi.object({
      route: ThemeApplicationModel.Route(),
      screen: ThemeApplicationModel.Screen(),
      user: ThemeApplicationModel.ThemeUserSchema(),
    });
  }

  /** @returns {Preset} */
  static Preset() {
    return Joi.object({
      pages: Joi.array().items(ThemeApplicationModel.Page()),
    });
  }

  /** @returns {Prop} */
  static Prop() {
    return Joi.object({
      category: Joi.string().allow(""),
      id: Joi.string().allow(""),
      info: Joi.string().allow(""),
      label: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {RangeProp} */
  static RangeProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {Release} */
  static Release() {
    return Joi.object({
      notes: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {Route} */
  static Route() {
    return Joi.object({
      exact_url: Joi.string().allow(""),
      selected: Joi.string().allow(""),
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

  /** @returns {Screen} */
  static Screen() {
    return Joi.object({
      desktop: Joi.boolean(),
      mobile: Joi.boolean(),
      tablet: Joi.boolean(),
    });
  }

  /** @returns {Section} */
  static Section() {
    return Joi.object({
      blocks: Joi.array().items(ThemeApplicationModel.Block()),
      name: Joi.string().allow(""),
      predicate: ThemeApplicationModel.Predicate(),
      preset: ThemeApplicationModel.SectionPreset(),
      props: ThemeApplicationModel.SectionProps(),
    });
  }

  /** @returns {SectionItem} */
  static SectionItem() {
    return Joi.object({
      blocks: Joi.array().items(Joi.any()),
      label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      props: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {SectionPreset} */
  static SectionPreset() {
    return Joi.object({
      blocks: Joi.array().items(ThemeApplicationModel.Block()),
    });
  }

  /** @returns {SectionProps} */
  static SectionProps() {
    return Joi.object({
      autoplay: ThemeApplicationModel.CheckboxProp(),
      item_margin: ThemeApplicationModel.TextProp(),
      slide_interval: ThemeApplicationModel.RangeProp(),
      title: ThemeApplicationModel.TextProp(),
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
      auth: ThemeApplicationModel.AuthConfig(),
      colors: ThemeApplicationModel.Colors(),
      palette: ThemeApplicationModel.PaletteConfig(),
    });
  }

  /** @returns {TextProp} */
  static TextProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {TextSetting} */
  static TextSetting() {
    return Joi.object({
      text_body: Joi.string().allow(""),
      text_heading: Joi.string().allow(""),
      text_label: Joi.string().allow(""),
      text_secondary: Joi.string().allow(""),
    });
  }

  /** @returns {ThemeConfiguration} */
  static ThemeConfiguration() {
    return Joi.object({
      global_config: Joi.any(),
      name: Joi.string().allow(""),
      page: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ThemePayment} */
  static ThemePayment() {
    return Joi.object({
      amount: Joi.number(),
      is_paid: Joi.boolean(),
    });
  }

  /** @returns {ThemeSetting} */
  static ThemeSetting() {
    return Joi.object({
      page_background: Joi.string().allow(""),
      theme_accent: Joi.string().allow(""),
    });
  }

  /** @returns {ThemesSchema} */
  static ThemesSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      applied: Joi.boolean(),
      assets: ThemeApplicationModel.Assets(),
      available_sections: Joi.array().items(
        ThemeApplicationModel.SectionItem()
      ),
      config: ThemeApplicationModel.Config(),
      created_at: Joi.string().allow(""),
      font: ThemeApplicationModel.Font(),
      is_private: Joi.boolean(),
      marketplace_theme_id: Joi.string().allow(""),
      meta: ThemeApplicationModel.Meta(),
      name: Joi.string().allow(""),
      styles: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      template_theme_id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {ThemeUserSchema} */
  static ThemeUserSchema() {
    return Joi.object({
      anonymous: Joi.boolean(),
      authenticated: Joi.boolean(),
    });
  }

  /** @returns {UMDJs} */
  static UMDJs() {
    return Joi.object({
      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {UrlProp} */
  static UrlProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {UserAlertsSetting} */
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
module.exports = ThemeApplicationModel;
