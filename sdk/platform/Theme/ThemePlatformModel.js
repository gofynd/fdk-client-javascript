const Joi = require("joi");

/**
 * @typedef ThemeReq
 * @property {string} [marketplace_theme_id] - The ID of the marketplace theme
 *   to apply to the company.
 */

/**
 * @typedef CompanyThemeSchema
 * @property {string} [_id] - The unique identifier for the theme.
 * @property {string} [name] - The name of the theme.
 * @property {MarketplaceThemeId} [marketplace_theme_id]
 * @property {number} [company_id] - The ID of the company that the theme belongs to.
 * @property {CompanyThemeMeta} [meta]
 * @property {string} [created_at] - The timestamp when the theme was created.
 * @property {string} [updated_at] - The timestamp when the theme was last updated.
 * @property {AppliedThemes[]} [applied_themes]
 */

/**
 * @typedef MarketplaceThemeId
 * @property {string} [_id] - The unique identifier for the marketplace theme.
 * @property {boolean} [is_default] - Whether the theme is the default theme.
 * @property {Release} [release]
 * @property {string} [created_at] - Creation date of the theme
 * @property {string} [updated_at] - Update date of the theme
 */

/**
 * @typedef CompanyThemeMeta
 * @property {ThemePayment} [payment]
 * @property {string[]} [industry] - A list of industry categories the theme is
 *   suitable for.
 * @property {string} [description] - A description of the theme.
 * @property {ThemeImages} [images]
 * @property {string} [slug] - The slug for the theme.
 */

/**
 * @typedef ThemePayment
 * @property {boolean} [is_paid] - Whether the theme is a paid theme.
 * @property {number} [amount] - The amount to be paid for the theme.
 */

/**
 * @typedef ThemeImages
 * @property {string} [desktop] - The URL of the desktop image for the theme.
 * @property {string} [mobile] - The URL of the mobile image for the theme.
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
 * @property {string} [created_at] - The creation timestamp of the page
 * @property {string} [updated_at] - The last update timestamp of the page
 */

/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */

/**
 * @typedef SEOMetaItem
 * @property {string} [title]
 * @property {SEOMetaItems[]} [items]
 */

/**
 * @typedef SEOMetaItems
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef SEOSitemap
 * @property {number} [priority]
 * @property {string} [frequency]
 */

/**
 * @typedef SEObreadcrumb
 * @property {string} [url]
 * @property {Action} [action]
 */

/**
 * @typedef Action
 * @property {string} [type]
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 */

/**
 * @typedef AvailablePageSeo
 * @property {string} [title]
 * @property {string} [description]
 * @property {SEOMetaItem[]} [meta_tags]
 * @property {SEOSitemap} [sitemap]
 * @property {SEObreadcrumb[]} [breadcrumb]
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
 * @property {string} [source]
 */

/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {AvailablePageRoutePredicate} [route]
 * @property {AvailablePageSchedulePredicate} [schedule]
 * @property {AvailablePagePlatformPredicate} [platform]
 * @property {string[]} [zones] - An array of zone ids associated with the section
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
 * @typedef AvailablePagePlatformPredicate
 * @property {boolean} [ios] - Section visibility on ios platform
 * @property {boolean} [android] - Section visibility on android platform
 * @property {boolean} [web] - Section visibility on web platform
 */

/**
 * @typedef AvailablePageSchedulePredicate
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */

/**
 * @typedef FontsSchema
 * @property {FontsSchemaItems} [items]
 * @property {string} [kind]
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
 * @typedef FontsSchemaItems
 * @property {string} [family]
 * @property {string[]} [variants]
 * @property {string[]} [subsets]
 * @property {string} [version]
 * @property {string} [last_modified]
 * @property {FontsSchemaItemsFiles} [files]
 * @property {string} [category]
 * @property {string} [kind]
 */

/**
 * @typedef FontsSchemaItemsFiles
 * @property {string} [regular]
 * @property {string} [italic]
 * @property {string} [bold]
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
 * @property {ThemeMeta} [meta]
 * @property {string} [name] - The name of the theme
 * @property {string} [template_theme_id] - The ID of the template theme
 * @property {string} [version] - The version of the theme
 * @property {Object} [styles] - The styles associated with the theme
 * @property {string} [created_at] - The creation timestamp of the theme
 * @property {string} [updated_at] - The last update timestamp of the theme
 * @property {Assets} [assets]
 * @property {SectionItem[]} [available_sections] - Available sections information
 * @property {string} [theme_type]
 * @property {number} [company_id] - The company id in which sales channel exists
 * @property {string} [src]
 */

/**
 * @typedef ThemeUpgradableResponse
 * @property {boolean} [upgrade] - Indicates if the theme is upgradable or not
 * @property {ThemeVersions} [versions]
 * @property {string} [message] - A message describing the theme upgrade status
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
 * @property {ThemeConfigListPage[]} [page] - An array of pages
 */

/**
 * @typedef OverlayPopup
 * @property {string} [dialog_backgroung]
 * @property {string} [overlay]
 */

/**
 * @typedef DividerStrokeHighlight
 * @property {string} [divider_strokes]
 * @property {string} [highlight]
 */

/**
 * @typedef UserAlerts
 * @property {string} [success_background]
 * @property {string} [success_text]
 * @property {string} [error_background]
 * @property {string} [error_text]
 * @property {string} [info_background]
 * @property {string} [info_text]
 */

/**
 * @typedef OrderTracking
 * @property {boolean} [show_header]
 * @property {boolean} [show_footer]
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
 * @typedef CustomConfig
 * @property {CustomProps} [props]
 */

/**
 * @typedef ThemeMeta
 * @property {ThemePayment} [payment]
 * @property {string} [description] - The description of the theme
 * @property {string[]} [industry] - An array of industries associated with the theme
 * @property {Release} [release]
 * @property {Images} [images]
 * @property {string} [slug] - The slug of the theme
 * @property {string} [name] - The name of the theme
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
 * @typedef GlobalSchema
 * @property {Prop[]} [props]
 */

/**
 * @typedef Prop
 * @property {string} [type] - The type of the property
 * @property {string} [category] - The category of the property
 * @property {string} [value] - The value of the property
 * @property {string} [id] - The ID of the property
 * @property {string} [label] - The label of the property
 * @property {string} [info] - Additional information about the property
 */

/**
 * @typedef Assets
 * @property {UMDJs} [umd_js]
 * @property {CommonJS} [common_js]
 * @property {CSS} [css]
 */

/**
 * @typedef UMDJs
 * @property {string} [link]
 * @property {string[]} [links] - An array of pages
 */

/**
 * @typedef CommonJS
 * @property {string} [link]
 */

/**
 * @typedef CSS
 * @property {string} [link]
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
 * @typedef Preset
 * @property {Page[]} [pages]
 */

/**
 * @typedef Page
 * @property {Section[]} [sections]
 * @property {string} [value] - The value of the page.
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
 * @typedef ThemeVersions
 * @property {string} [parent_theme] - The version of the parent theme
 * @property {string} [applied_theme] - The version of the applied theme
 */

/**
 * @typedef DummyResponse
 * @property {string} [message]
 */

/**
 * @typedef AppliedThemes
 * @property {string} [_id] - ID of the application theme
 * @property {string} [application_id] - ID of the application
 */

/**
 * @typedef CompanyPrivateTheme
 * @property {string} [theme_type] - Type of the theme
 * @property {string} [_id] - Unique identifier for the theme
 * @property {string} [name] - Name of the theme
 * @property {string} [version] - Version of the theme
 * @property {string} [application_id] - Identifier for the application
 * @property {string} [created_at] - Date and time when the theme was created
 * @property {string} [updated_at] - Date and time when the theme was last updated
 * @property {boolean} [applied] - Whether the theme is applied or not
 * @property {boolean} [is_private] - Whether the theme is private or not
 * @property {CompanyThemeMeta} [meta]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {PageType} type
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
  /** @returns {ThemeReq} */
  static ThemeReq() {
    return Joi.object({
      marketplace_theme_id: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyThemeSchema} */
  static CompanyThemeSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      marketplace_theme_id: ThemePlatformModel.MarketplaceThemeId(),
      company_id: Joi.number(),
      meta: ThemePlatformModel.CompanyThemeMeta(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      applied_themes: Joi.array().items(ThemePlatformModel.AppliedThemes()),
    });
  }

  /** @returns {MarketplaceThemeId} */
  static MarketplaceThemeId() {
    return Joi.object({
      _id: Joi.string().allow(""),
      is_default: Joi.boolean(),
      release: ThemePlatformModel.Release(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyThemeMeta} */
  static CompanyThemeMeta() {
    return Joi.object({
      payment: ThemePlatformModel.ThemePayment(),
      industry: Joi.array().items(Joi.string().allow("")),
      description: Joi.string().allow(""),
      images: ThemePlatformModel.ThemeImages(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {ThemePayment} */
  static ThemePayment() {
    return Joi.object({
      is_paid: Joi.boolean(),
      amount: Joi.number(),
    });
  }

  /** @returns {ThemeImages} */
  static ThemeImages() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
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
        ThemePlatformModel.AvailablePageSchemaSections()
      ),
      sections_meta: Joi.array().items(
        ThemePlatformModel.AvailablePageSectionMetaAttributes()
      ),
      theme: Joi.string().allow(""),
      seo: ThemePlatformModel.AvailablePageSeo(),
      props: Joi.array().items(Joi.any()),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePageSectionMetaAttributes} */
  static AvailablePageSectionMetaAttributes() {
    return Joi.object({
      attributes: Joi.any(),
    });
  }

  /** @returns {SEOMetaItem} */
  static SEOMetaItem() {
    return Joi.object({
      title: Joi.string().allow(""),
      items: Joi.array().items(ThemePlatformModel.SEOMetaItems()),
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
      priority: Joi.number(),
      frequency: Joi.string().allow(""),
    });
  }

  /** @returns {SEObreadcrumb} */
  static SEObreadcrumb() {
    return Joi.object({
      url: Joi.string().allow(""),
      action: ThemePlatformModel.Action(),
    });
  }

  /** @returns {Action} */
  static Action() {
    return Joi.object({
      type: Joi.string().allow(""),
      page: ThemePlatformModel.ActionPage(),
      popup: ThemePlatformModel.ActionPage(),
    });
  }

  /** @returns {AvailablePageSeo} */
  static AvailablePageSeo() {
    return Joi.object({
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      meta_tags: Joi.array().items(ThemePlatformModel.SEOMetaItem()),
      sitemap: ThemePlatformModel.SEOSitemap(),
      breadcrumb: Joi.array().items(ThemePlatformModel.SEObreadcrumb()),
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
      predicate: ThemePlatformModel.AvailablePagePredicate(),
      source: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePagePredicate} */
  static AvailablePagePredicate() {
    return Joi.object({
      screen: ThemePlatformModel.AvailablePageScreenPredicate(),
      user: ThemePlatformModel.AvailablePageUserPredicate(),
      route: ThemePlatformModel.AvailablePageRoutePredicate(),
      schedule: ThemePlatformModel.AvailablePageSchedulePredicate(),
      platform: ThemePlatformModel.AvailablePagePlatformPredicate(),
      zones: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {AvailablePagePlatformPredicate} */
  static AvailablePagePlatformPredicate() {
    return Joi.object({
      ios: Joi.boolean(),
      android: Joi.boolean(),
      web: Joi.boolean(),
    });
  }

  /** @returns {AvailablePageSchedulePredicate} */
  static AvailablePageSchedulePredicate() {
    return Joi.object({
      cron: Joi.string().allow(""),
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {AllAvailablePageSchema} */
  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(ThemePlatformModel.AvailablePageSchema()),
    });
  }

  /** @returns {AddThemeRequestSchema} */
  static AddThemeRequestSchema() {
    return Joi.object({
      theme_id: Joi.string().allow(""),
    });
  }

  /** @returns {FontsSchema} */
  static FontsSchema() {
    return Joi.object({
      items: ThemePlatformModel.FontsSchemaItems(),
      kind: Joi.string().allow(""),
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

  /** @returns {FontsSchemaItems} */
  static FontsSchemaItems() {
    return Joi.object({
      family: Joi.string().allow(""),
      variants: Joi.array().items(Joi.string().allow("")),
      subsets: Joi.array().items(Joi.string().allow("")),
      version: Joi.string().allow(""),
      last_modified: Joi.string().allow(""),
      files: ThemePlatformModel.FontsSchemaItemsFiles(),
      category: Joi.string().allow(""),
      kind: Joi.string().allow(""),
    });
  }

  /** @returns {FontsSchemaItemsFiles} */
  static FontsSchemaItemsFiles() {
    return Joi.object({
      regular: Joi.string().allow(""),
      italic: Joi.string().allow(""),
      bold: Joi.string().allow(""),
    });
  }

  /** @returns {ThemesSchema} */
  static ThemesSchema() {
    return Joi.object({
      font: ThemePlatformModel.Font(),
      config: ThemePlatformModel.Config(),
      applied: Joi.boolean(),
      is_private: Joi.boolean(),
      tags: Joi.array().items(Joi.string().allow("")),
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      marketplace_theme_id: Joi.string().allow(""),
      meta: ThemePlatformModel.ThemeMeta(),
      name: Joi.string().allow(""),
      template_theme_id: Joi.string().allow(""),
      version: Joi.string().allow(""),
      styles: Joi.any(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      assets: ThemePlatformModel.Assets(),
      available_sections: Joi.array().items(ThemePlatformModel.SectionItem()),
      theme_type: Joi.string().allow(""),
      company_id: Joi.number(),
      src: Joi.string().allow(""),
    });
  }

  /** @returns {ThemeUpgradableResponse} */
  static ThemeUpgradableResponse() {
    return Joi.object({
      upgrade: Joi.boolean(),
      versions: ThemePlatformModel.ThemeVersions(),
      message: Joi.string().allow(""),
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

  /** @returns {Font} */
  static Font() {
    return Joi.object({
      variants: ThemePlatformModel.FontVariants().required(),
      family: Joi.string().allow("").required(),
    });
  }

  /** @returns {FontVariants} */
  static FontVariants() {
    return Joi.object({
      light: ThemePlatformModel.FontVariant(),
      regular: ThemePlatformModel.FontVariant(),
      medium: ThemePlatformModel.FontVariant(),
      semi_bold: ThemePlatformModel.FontVariant(),
      bold: ThemePlatformModel.FontVariant(),
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
        .items(ThemePlatformModel.ThemeConfiguration())
        .required(),
      global_schema: ThemePlatformModel.GlobalSchema(),
      preset: ThemePlatformModel.Preset(),
    });
  }

  /** @returns {ThemeConfiguration} */
  static ThemeConfiguration() {
    return Joi.object({
      name: Joi.string().allow(""),
      global_config: Joi.any(),
      page: Joi.array().items(ThemePlatformModel.ThemeConfigListPage()),
    });
  }

  /** @returns {OverlayPopup} */
  static OverlayPopup() {
    return Joi.object({
      dialog_backgroung: Joi.string().allow(""),
      overlay: Joi.string().allow(""),
    });
  }

  /** @returns {DividerStrokeHighlight} */
  static DividerStrokeHighlight() {
    return Joi.object({
      divider_strokes: Joi.string().allow(""),
      highlight: Joi.string().allow(""),
    });
  }

  /** @returns {UserAlerts} */
  static UserAlerts() {
    return Joi.object({
      success_background: Joi.string().allow(""),
      success_text: Joi.string().allow(""),
      error_background: Joi.string().allow(""),
      error_text: Joi.string().allow(""),
      info_background: Joi.string().allow(""),
      info_text: Joi.string().allow(""),
    });
  }

  /** @returns {OrderTracking} */
  static OrderTracking() {
    return Joi.object({
      show_header: Joi.boolean(),
      show_footer: Joi.boolean(),
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

  /** @returns {CustomConfig} */
  static CustomConfig() {
    return Joi.object({
      props: ThemePlatformModel.CustomProps(),
    });
  }

  /** @returns {ThemeMeta} */
  static ThemeMeta() {
    return Joi.object({
      payment: ThemePlatformModel.ThemePayment(),
      description: Joi.string().allow(""),
      industry: Joi.array().items(Joi.string().allow("")),
      release: ThemePlatformModel.Release(),
      images: ThemePlatformModel.Images(),
      slug: Joi.string().allow(""),
      name: Joi.string().allow(""),
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

  /** @returns {GlobalSchema} */
  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(ThemePlatformModel.Prop()),
    });
  }

  /** @returns {Prop} */
  static Prop() {
    return Joi.object({
      type: Joi.string().allow(""),
      category: Joi.string().allow(""),
      value: Joi.string().allow(""),
      id: Joi.string().allow(""),
      label: Joi.string().allow(""),
      info: Joi.string().allow(""),
    });
  }

  /** @returns {Assets} */
  static Assets() {
    return Joi.object({
      umd_js: ThemePlatformModel.UMDJs(),
      common_js: ThemePlatformModel.CommonJS(),
      css: ThemePlatformModel.CSS(),
    });
  }

  /** @returns {UMDJs} */
  static UMDJs() {
    return Joi.object({
      link: Joi.string().allow(""),
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
      link: Joi.string().allow(""),
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

  /** @returns {Preset} */
  static Preset() {
    return Joi.object({
      pages: Joi.array().items(ThemePlatformModel.Page()),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      sections: Joi.array().items(ThemePlatformModel.Section()),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {Section} */
  static Section() {
    return Joi.object({
      blocks: Joi.array().items(ThemePlatformModel.Block()),
      predicate: ThemePlatformModel.Predicate(),
      name: Joi.string().allow(""),
      props: ThemePlatformModel.SectionProps(),
      preset: ThemePlatformModel.SectionPreset(),
    });
  }

  /** @returns {Block} */
  static Block() {
    return Joi.object({
      type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      props: ThemePlatformModel.BlockProps(),
    });
  }

  /** @returns {Predicate} */
  static Predicate() {
    return Joi.object({
      screen: ThemePlatformModel.Screen(),
      user: ThemePlatformModel.ThemeUserSchema(),
      route: ThemePlatformModel.Route(),
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

  /** @returns {SectionProps} */
  static SectionProps() {
    return Joi.object({
      title: ThemePlatformModel.TextProp(),
      item_margin: ThemePlatformModel.TextProp(),
      autoplay: ThemePlatformModel.CheckboxProp(),
      slide_interval: ThemePlatformModel.RangeProp(),
    });
  }

  /** @returns {SectionPreset} */
  static SectionPreset() {
    return Joi.object({
      blocks: Joi.array().items(ThemePlatformModel.Block()),
    });
  }

  /** @returns {BlockProps} */
  static BlockProps() {
    return Joi.object({
      image: ThemePlatformModel.ImagePickerProp(),
      slide_link: ThemePlatformModel.UrlProp(),
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

  /** @returns {ThemeVersions} */
  static ThemeVersions() {
    return Joi.object({
      parent_theme: Joi.string().allow(""),
      applied_theme: Joi.string().allow(""),
    });
  }

  /** @returns {DummyResponse} */
  static DummyResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {AppliedThemes} */
  static AppliedThemes() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyPrivateTheme} */
  static CompanyPrivateTheme() {
    return Joi.object({
      theme_type: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      version: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      applied: Joi.boolean(),
      is_private: Joi.boolean(),
      meta: ThemePlatformModel.CompanyThemeMeta(),
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
      url: Joi.string().allow(""),
      type: ThemePlatformModel.PageType().required(),
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
