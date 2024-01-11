const Joi = require("joi");

/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {PageType} type
 * @property {string} [url]
 */

/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */

/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef AppliedThemes
 * @property {string} [_id] - ID of the application theme
 * @property {string} [application_id] - ID of the application
 */

/**
 * @typedef Assets
 * @property {CommonJS} [common_js]
 * @property {CSS} [css]
 * @property {UMDJs} [umd_js]
 */

/**
 * @typedef AvailablePagePlatformPredicate
 * @property {boolean} [android] - Section visibility on android platform
 * @property {boolean} [ios] - Section visibility on ios platform
 * @property {boolean} [web] - Section visibility on web platform
 */

/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePagePlatformPredicate} [platform]
 * @property {AvailablePageRoutePredicate} [route]
 * @property {AvailablePageSchedulePredicate} [schedule]
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {string[]} [zones] - An array of zone ids associated with the section
 */

/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [exact_url]
 * @property {Object} [query]
 * @property {string} [selected]
 */

/**
 * @typedef AvailablePageSchedulePredicate
 * @property {string} [cron]
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef AvailablePageSchema
 * @property {string} [_id]
 * @property {string} [created_at] - The creation timestamp of the page
 * @property {string} [path]
 * @property {Object[]} [props]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {AvailablePageSeo} [seo]
 * @property {string} [text]
 * @property {string} [theme]
 * @property {string} [type]
 * @property {string} [updated_at] - The last update timestamp of the page
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
 * @property {string} [source]
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
 * @property {SEObreadcrumb[]} [breadcrumb]
 * @property {string} [description]
 * @property {SEOMetaItem[]} [meta_tags]
 * @property {SEOSitemap} [sitemap]
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
 * @typedef CheckboxProp
 * @property {string} [type] - The type of the property.
 * @property {boolean} [value] - The value of the checkbox property.
 */

/**
 * @typedef CommonJS
 * @property {string} [link]
 */

/**
 * @typedef CompanyPrivateTheme
 * @property {string} [_id] - Unique identifier for the theme
 * @property {string} [application_id] - Identifier for the application
 * @property {boolean} [applied] - Whether the theme is applied or not
 * @property {string} [created_at] - Date and time when the theme was created
 * @property {boolean} [is_private] - Whether the theme is private or not
 * @property {CompanyThemeMeta} [meta]
 * @property {string} [name] - Name of the theme
 * @property {string} [theme_type] - Type of the theme
 * @property {string} [updated_at] - Date and time when the theme was last updated
 * @property {string} [version] - Version of the theme
 */

/**
 * @typedef CompanyThemeMeta
 * @property {string} [description] - A description of the theme.
 * @property {ThemeImages} [images]
 * @property {string[]} [industry] - A list of industry categories the theme is
 *   suitable for.
 * @property {ThemePayment} [payment]
 * @property {string} [slug] - The slug for the theme.
 */

/**
 * @typedef CompanyThemeSchema
 * @property {string} [_id] - The unique identifier for the theme.
 * @property {AppliedThemes[]} [applied_themes]
 * @property {number} [company_id] - The ID of the company that the theme belongs to.
 * @property {string} [created_at] - The timestamp when the theme was created.
 * @property {MarketplaceThemeId} [marketplace_theme_id]
 * @property {CompanyThemeMeta} [meta]
 * @property {string} [name] - The name of the theme.
 * @property {string} [updated_at] - The timestamp when the theme was last updated.
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
 * @property {string} [link]
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
 * @typedef DividerStrokeHighlight
 * @property {string} [divider_strokes]
 * @property {string} [highlight]
 */

/**
 * @typedef DummyResponse
 * @property {string} [message]
 */

/**
 * @typedef Font
 * @property {string} family - The font family
 * @property {FontVariants} variants
 */

/**
 * @typedef FontsSchema
 * @property {FontsSchemaItems} [items]
 * @property {string} [kind]
 */

/**
 * @typedef FontsSchemaItems
 * @property {string} [category]
 * @property {string} [family]
 * @property {FontsSchemaItemsFiles} [files]
 * @property {string} [kind]
 * @property {string} [last_modified]
 * @property {string[]} [subsets]
 * @property {string[]} [variants]
 * @property {string} [version]
 */

/**
 * @typedef FontsSchemaItemsFiles
 * @property {string} [bold]
 * @property {string} [italic]
 * @property {string} [regular]
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
 * @typedef GlobalSchema
 * @property {Prop[]} [props]
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
 * @typedef MarketplaceThemeId
 * @property {string} [_id] - The unique identifier for the marketplace theme.
 * @property {string} [created_at] - Creation date of the theme
 * @property {boolean} [is_default] - Whether the theme is the default theme.
 * @property {Release} [release]
 * @property {string} [updated_at] - Update date of the theme
 */

/**
 * @typedef OrderTracking
 * @property {boolean} [show_footer]
 * @property {boolean} [show_header]
 */

/**
 * @typedef OverlayPopup
 * @property {string} [dialog_backgroung]
 * @property {string} [overlay]
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
 * @property {string} [value] - The value of the property
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
 * @typedef SEObreadcrumb
 * @property {Action} [action]
 * @property {string} [url]
 */

/**
 * @typedef SEOMetaItem
 * @property {SEOMetaItems[]} [items]
 * @property {string} [title]
 */

/**
 * @typedef SEOMetaItems
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef SEOSitemap
 * @property {string} [frequency]
 * @property {number} [priority]
 */

/**
 * @typedef TextProp
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the text property.
 */

/**
 * @typedef ThemeConfigListPage
 * @property {string} [page] - Name of the page
 * @property {ThemeConfigListPageSettingsProps} [settings]
 */

/**
 * @typedef ThemeConfigListPageSettingsProps
 * @property {Object} [props]
 */

/**
 * @typedef ThemeConfiguration
 * @property {Object} [global_config]
 * @property {string} [name] - The name of the configuration
 * @property {ThemeConfigListPage[]} [page] - An array of pages
 */

/**
 * @typedef ThemeImages
 * @property {string} [desktop] - The URL of the desktop image for the theme.
 * @property {string} [mobile] - The URL of the mobile image for the theme.
 */

/**
 * @typedef ThemeMeta
 * @property {string} [description] - The description of the theme
 * @property {Images} [images]
 * @property {string[]} [industry] - An array of industries associated with the theme
 * @property {string} [name] - The name of the theme
 * @property {ThemePayment} [payment]
 * @property {Release} [release]
 * @property {string} [slug] - The slug of the theme
 */

/**
 * @typedef ThemePayment
 * @property {number} [amount] - The amount to be paid for the theme.
 * @property {boolean} [is_paid] - Whether the theme is a paid theme.
 */

/**
 * @typedef ThemeReq
 * @property {string} [marketplace_theme_id] - The ID of the marketplace theme
 *   to apply to the company.
 */

/**
 * @typedef ThemesSchema
 * @property {string} [_id] - The unique identifier of the theme
 * @property {string} [application_id] - The ID of the application
 * @property {boolean} [applied] - Whether the theme has been applied or not
 * @property {Assets} [assets]
 * @property {SectionItem[]} [available_sections] - Available sections information
 * @property {number} [company_id] - The company id in which sales channel exists
 * @property {Config} [config]
 * @property {string} [created_at] - The creation timestamp of the theme
 * @property {Font} [font]
 * @property {boolean} [is_private] - Whether the theme is private or not
 * @property {string} [marketplace_theme_id] - The ID of the theme in the marketplace
 * @property {ThemeMeta} [meta]
 * @property {string} [name] - The name of the theme
 * @property {string} [src]
 * @property {Object} [styles] - The styles associated with the theme
 * @property {string[]} [tags] - An array of tags associated with the theme
 * @property {string} [template_theme_id] - The ID of the template theme
 * @property {string} [theme_type]
 * @property {string} [updated_at] - The last update timestamp of the theme
 * @property {string} [version] - The version of the theme
 */

/**
 * @typedef ThemeUpgradableResponse
 * @property {string} [message] - A message describing the theme upgrade status
 * @property {boolean} [upgrade] - Indicates if the theme is upgradable or not
 * @property {ThemeVersions} [versions]
 */

/**
 * @typedef ThemeUserSchema
 * @property {boolean} [anonymous] - True if the user is anonymous.
 * @property {boolean} [authenticated] - True if the user is authenticated.
 */

/**
 * @typedef ThemeVersions
 * @property {string} [applied_theme] - The version of the applied theme
 * @property {string} [parent_theme] - The version of the parent theme
 */

/**
 * @typedef UMDJs
 * @property {string} [link]
 * @property {string[]} [links] - An array of pages
 */

/**
 * @typedef UpdateThemeNameRequestBody
 * @property {string} [name] - The new name of the theme.
 */

/**
 * @typedef UpdateThemeRequestBody
 * @property {Config} [config]
 * @property {Font} [font]
 */

/**
 * @typedef UrlProp
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the URL property.
 */

/**
 * @typedef UserAlerts
 * @property {string} [error_background]
 * @property {string} [error_text]
 * @property {string} [info_background]
 * @property {string} [info_text]
 * @property {string} [success_background]
 * @property {string} [success_text]
 */

/**
 * @typedef {| "about-us"
 *   | "addresses"
 *   | "blog"
 *   | "brands"
 *   | "cards"
 *   | "cart"
 *   | "categories"
 *   | "brand"
 *   | "category"
 *   | "collection"
 *   | "collections"
 *   | "contact-us"
 *   | "external"
 *   | "faq"
 *   | "freshchat"
 *   | "home"
 *   | "notification-settings"
 *   | "orders"
 *   | "page"
 *   | "policy"
 *   | "product"
 *   | "product-request"
 *   | "products"
 *   | "profile"
 *   | "profile-order-shipment"
 *   | "profile-basic"
 *   | "profile-company"
 *   | "profile-emails"
 *   | "profile-phones"
 *   | "rate-us"
 *   | "refer-earn"
 *   | "settings"
 *   | "shared-cart"
 *   | "tnc"
 *   | "track-order"
 *   | "wishlist"
 *   | "sections"
 *   | "form"
 *   | "cart-delivery"
 *   | "cart-payment"
 *   | "cart-review"
 *   | "login"
 *   | "register"
 *   | "shipping-policy"
 *   | "return-policy"
 *   | "order-status"} PageType
 */

class ThemePlatformModel {
  /** @returns {Action} */
  static Action() {
    return Joi.object({
      page: ThemePlatformModel.ActionPage(),
      popup: ThemePlatformModel.ActionPage(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {ActionPage} */
  static ActionPage() {
    return Joi.object({
      params: Joi.object().pattern(
        /\S/,
        Joi.array().items(Joi.string().allow(""))
      ),
      query: Joi.object().pattern(
        /\S/,
        Joi.array().items(Joi.string().allow(""))
      ),
      type: ThemePlatformModel.PageType().required(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {AddThemeRequestSchema} */
  static AddThemeRequestSchema() {
    return Joi.object({
      theme_id: Joi.string().allow(""),
    });
  }

  /** @returns {AllAvailablePageSchema} */
  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(ThemePlatformModel.AvailablePageSchema()),
    });
  }

  /** @returns {AppliedThemes} */
  static AppliedThemes() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
    });
  }

  /** @returns {Assets} */
  static Assets() {
    return Joi.object({
      common_js: ThemePlatformModel.CommonJS(),
      css: ThemePlatformModel.CSS(),
      umd_js: ThemePlatformModel.UMDJs(),
    });
  }

  /** @returns {AvailablePagePlatformPredicate} */
  static AvailablePagePlatformPredicate() {
    return Joi.object({
      android: Joi.boolean(),
      ios: Joi.boolean(),
      web: Joi.boolean(),
    });
  }

  /** @returns {AvailablePagePredicate} */
  static AvailablePagePredicate() {
    return Joi.object({
      platform: ThemePlatformModel.AvailablePagePlatformPredicate(),
      route: ThemePlatformModel.AvailablePageRoutePredicate(),
      schedule: ThemePlatformModel.AvailablePageSchedulePredicate(),
      screen: ThemePlatformModel.AvailablePageScreenPredicate(),
      user: ThemePlatformModel.AvailablePageUserPredicate(),
      zones: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {AvailablePageSchedulePredicate} */
  static AvailablePageSchedulePredicate() {
    return Joi.object({
      cron: Joi.string().allow(""),
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePageSchema} */
  static AvailablePageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      path: Joi.string().allow(""),
      props: Joi.array().items(Joi.any()),
      sections: Joi.array().items(
        ThemePlatformModel.AvailablePageSchemaSections()
      ),
      sections_meta: Joi.array().items(
        ThemePlatformModel.AvailablePageSectionMetaAttributes()
      ),
      seo: ThemePlatformModel.AvailablePageSeo(),
      text: Joi.string().allow(""),
      theme: Joi.string().allow(""),
      type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePageSchemaSections} */
  static AvailablePageSchemaSections() {
    return Joi.object({
      blocks: Joi.array().items(Joi.any()),
      label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      predicate: ThemePlatformModel.AvailablePagePredicate(),
      preset: Joi.any(),
      props: Joi.any(),
      source: Joi.string().allow(""),
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
      breadcrumb: Joi.array().items(ThemePlatformModel.SEObreadcrumb()),
      description: Joi.string().allow(""),
      meta_tags: Joi.array().items(ThemePlatformModel.SEOMetaItem()),
      sitemap: ThemePlatformModel.SEOSitemap(),
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
      props: ThemePlatformModel.BlockProps(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {BlockProps} */
  static BlockProps() {
    return Joi.object({
      image: ThemePlatformModel.ImagePickerProp(),
      slide_link: ThemePlatformModel.UrlProp(),
    });
  }

  /** @returns {CheckboxProp} */
  static CheckboxProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.boolean(),
    });
  }

  /** @returns {CommonJS} */
  static CommonJS() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyPrivateTheme} */
  static CompanyPrivateTheme() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      applied: Joi.boolean(),
      created_at: Joi.string().allow(""),
      is_private: Joi.boolean(),
      meta: ThemePlatformModel.CompanyThemeMeta(),
      name: Joi.string().allow(""),
      theme_type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyThemeMeta} */
  static CompanyThemeMeta() {
    return Joi.object({
      description: Joi.string().allow(""),
      images: ThemePlatformModel.ThemeImages(),
      industry: Joi.array().items(Joi.string().allow("")),
      payment: ThemePlatformModel.ThemePayment(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyThemeSchema} */
  static CompanyThemeSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      applied_themes: Joi.array().items(ThemePlatformModel.AppliedThemes()),
      company_id: Joi.number(),
      created_at: Joi.string().allow(""),
      marketplace_theme_id: ThemePlatformModel.MarketplaceThemeId(),
      meta: ThemePlatformModel.CompanyThemeMeta(),
      name: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {Config} */
  static Config() {
    return Joi.object({
      current: Joi.string().allow("").required(),
      global_schema: ThemePlatformModel.GlobalSchema(),
      list: Joi.array()
        .items(ThemePlatformModel.ThemeConfiguration())
        .required(),
      preset: ThemePlatformModel.Preset(),
    });
  }

  /** @returns {CSS} */
  static CSS() {
    return Joi.object({
      link: Joi.string().allow(""),
      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CustomConfig} */
  static CustomConfig() {
    return Joi.object({
      props: ThemePlatformModel.CustomProps(),
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

  /** @returns {DividerStrokeHighlight} */
  static DividerStrokeHighlight() {
    return Joi.object({
      divider_strokes: Joi.string().allow(""),
      highlight: Joi.string().allow(""),
    });
  }

  /** @returns {DummyResponse} */
  static DummyResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Font} */
  static Font() {
    return Joi.object({
      family: Joi.string().allow("").required(),
      variants: ThemePlatformModel.FontVariants().required(),
    });
  }

  /** @returns {FontsSchema} */
  static FontsSchema() {
    return Joi.object({
      items: ThemePlatformModel.FontsSchemaItems(),
      kind: Joi.string().allow(""),
    });
  }

  /** @returns {FontsSchemaItems} */
  static FontsSchemaItems() {
    return Joi.object({
      category: Joi.string().allow(""),
      family: Joi.string().allow(""),
      files: ThemePlatformModel.FontsSchemaItemsFiles(),
      kind: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      subsets: Joi.array().items(Joi.string().allow("")),
      variants: Joi.array().items(Joi.string().allow("")),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {FontsSchemaItemsFiles} */
  static FontsSchemaItemsFiles() {
    return Joi.object({
      bold: Joi.string().allow(""),
      italic: Joi.string().allow(""),
      regular: Joi.string().allow(""),
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
      bold: ThemePlatformModel.FontVariant(),
      light: ThemePlatformModel.FontVariant(),
      medium: ThemePlatformModel.FontVariant(),
      regular: ThemePlatformModel.FontVariant(),
      semi_bold: ThemePlatformModel.FontVariant(),
    });
  }

  /** @returns {GlobalSchema} */
  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(ThemePlatformModel.Prop()),
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

  /** @returns {MarketplaceThemeId} */
  static MarketplaceThemeId() {
    return Joi.object({
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      is_default: Joi.boolean(),
      release: ThemePlatformModel.Release(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {OrderTracking} */
  static OrderTracking() {
    return Joi.object({
      show_footer: Joi.boolean(),
      show_header: Joi.boolean(),
    });
  }

  /** @returns {OverlayPopup} */
  static OverlayPopup() {
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

  /** @returns {Predicate} */
  static Predicate() {
    return Joi.object({
      route: ThemePlatformModel.Route(),
      screen: ThemePlatformModel.Screen(),
      user: ThemePlatformModel.ThemeUserSchema(),
    });
  }

  /** @returns {Preset} */
  static Preset() {
    return Joi.object({
      pages: Joi.array().items(ThemePlatformModel.Page()),
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
      value: Joi.string().allow(""),
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
      blocks: Joi.array().items(ThemePlatformModel.Block()),
      name: Joi.string().allow(""),
      predicate: ThemePlatformModel.Predicate(),
      preset: ThemePlatformModel.SectionPreset(),
      props: ThemePlatformModel.SectionProps(),
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
      blocks: Joi.array().items(ThemePlatformModel.Block()),
    });
  }

  /** @returns {SectionProps} */
  static SectionProps() {
    return Joi.object({
      autoplay: ThemePlatformModel.CheckboxProp(),
      item_margin: ThemePlatformModel.TextProp(),
      slide_interval: ThemePlatformModel.RangeProp(),
      title: ThemePlatformModel.TextProp(),
    });
  }

  /** @returns {SEObreadcrumb} */
  static SEObreadcrumb() {
    return Joi.object({
      action: ThemePlatformModel.Action(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {SEOMetaItem} */
  static SEOMetaItem() {
    return Joi.object({
      items: Joi.array().items(ThemePlatformModel.SEOMetaItems()),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {SEOMetaItems} */
  static SEOMetaItems() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SEOSitemap} */
  static SEOSitemap() {
    return Joi.object({
      frequency: Joi.string().allow(""),
      priority: Joi.number(),
    });
  }

  /** @returns {TextProp} */
  static TextProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ThemeConfigListPage} */
  static ThemeConfigListPage() {
    return Joi.object({
      page: Joi.string().allow(""),
      settings: ThemePlatformModel.ThemeConfigListPageSettingsProps(),
    });
  }

  /** @returns {ThemeConfigListPageSettingsProps} */
  static ThemeConfigListPageSettingsProps() {
    return Joi.object({
      props: Joi.any(),
    });
  }

  /** @returns {ThemeConfiguration} */
  static ThemeConfiguration() {
    return Joi.object({
      global_config: Joi.any(),
      name: Joi.string().allow(""),
      page: Joi.array().items(ThemePlatformModel.ThemeConfigListPage()),
    });
  }

  /** @returns {ThemeImages} */
  static ThemeImages() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {ThemeMeta} */
  static ThemeMeta() {
    return Joi.object({
      description: Joi.string().allow(""),
      images: ThemePlatformModel.Images(),
      industry: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      payment: ThemePlatformModel.ThemePayment(),
      release: ThemePlatformModel.Release(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {ThemePayment} */
  static ThemePayment() {
    return Joi.object({
      amount: Joi.number(),
      is_paid: Joi.boolean(),
    });
  }

  /** @returns {ThemeReq} */
  static ThemeReq() {
    return Joi.object({
      marketplace_theme_id: Joi.string().allow(""),
    });
  }

  /** @returns {ThemesSchema} */
  static ThemesSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      applied: Joi.boolean(),
      assets: ThemePlatformModel.Assets(),
      available_sections: Joi.array().items(ThemePlatformModel.SectionItem()),
      company_id: Joi.number(),
      config: ThemePlatformModel.Config(),
      created_at: Joi.string().allow(""),
      font: ThemePlatformModel.Font(),
      is_private: Joi.boolean(),
      marketplace_theme_id: Joi.string().allow(""),
      meta: ThemePlatformModel.ThemeMeta(),
      name: Joi.string().allow(""),
      src: Joi.string().allow(""),
      styles: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      template_theme_id: Joi.string().allow(""),
      theme_type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {ThemeUpgradableResponse} */
  static ThemeUpgradableResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      upgrade: Joi.boolean(),
      versions: ThemePlatformModel.ThemeVersions(),
    });
  }

  /** @returns {ThemeUserSchema} */
  static ThemeUserSchema() {
    return Joi.object({
      anonymous: Joi.boolean(),
      authenticated: Joi.boolean(),
    });
  }

  /** @returns {ThemeVersions} */
  static ThemeVersions() {
    return Joi.object({
      applied_theme: Joi.string().allow(""),
      parent_theme: Joi.string().allow(""),
    });
  }

  /** @returns {UMDJs} */
  static UMDJs() {
    return Joi.object({
      link: Joi.string().allow(""),
      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {UpdateThemeNameRequestBody} */
  static UpdateThemeNameRequestBody() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateThemeRequestBody} */
  static UpdateThemeRequestBody() {
    return Joi.object({
      config: ThemePlatformModel.Config(),
      font: ThemePlatformModel.Font(),
    });
  }

  /** @returns {UrlProp} */
  static UrlProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {UserAlerts} */
  static UserAlerts() {
    return Joi.object({
      error_background: Joi.string().allow(""),
      error_text: Joi.string().allow(""),
      info_background: Joi.string().allow(""),
      info_text: Joi.string().allow(""),
      success_background: Joi.string().allow(""),
      success_text: Joi.string().allow(""),
    });
  }

  /**
   * Enum: PageType Used By: Theme
   *
   * @returns {PageType}
   */
  static PageType() {
    return Joi.string().valid(
      "about-us",

      "addresses",

      "blog",

      "brands",

      "cards",

      "cart",

      "categories",

      "brand",

      "category",

      "collection",

      "collections",

      "contact-us",

      "external",

      "faq",

      "freshchat",

      "home",

      "notification-settings",

      "orders",

      "page",

      "policy",

      "product",

      "product-request",

      "products",

      "profile",

      "profile-order-shipment",

      "profile-basic",

      "profile-company",

      "profile-emails",

      "profile-phones",

      "rate-us",

      "refer-earn",

      "settings",

      "shared-cart",

      "tnc",

      "track-order",

      "wishlist",

      "sections",

      "form",

      "cart-delivery",

      "cart-payment",

      "cart-review",

      "login",

      "register",

      "shipping-policy",

      "return-policy",

      "order-status"
    );
  }
}
module.exports = ThemePlatformModel;
