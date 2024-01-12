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
 * @property {string} [type]
 * @property {string} [url]
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
 * @typedef CarouselItem
 * @property {string} [desktop] - Desktop carousel image URL
 * @property {string} [mobile] - Mobile carousel image URL
 */

/**
 * @typedef CatalogSize
 * @property {number} [max] - Maximum catalog size
 * @property {number} [min] - Minimum catalog size
 */

/**
 * @typedef CheckboxProp
 * @property {string} [type] - The type of the property.
 * @property {boolean} [value] - The value of the checkbox property.
 */

/**
 * @typedef Comments
 * @property {string} [developer_remark] - Developer remark
 * @property {string} [reviewer_feedback] - Reviewer feedback
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
 * @typedef ContactInfo
 * @property {string[]} [developer_contact] - Developer contact information
 * @property {string} [seller_contact] - Seller contact information
 */

/**
 * @typedef CreateNewTheme
 * @property {SectionItem[]} available_sections - Available sections information
 * @property {string} [current] - The current configuration
 * @property {GlobalSchema} [global_schema]
 * @property {ThemeConfiguration[]} [list] - A list of configurations
 * @property {string} name - The name of the theme
 * @property {Page[]} [pages]
 * @property {Preset} [preset]
 * @property {string} theme_type - Type of the Theme
 * @property {string} version - The version of the theme
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
 * @typedef Documentation
 * @property {string} [notes] - Documentation notes
 * @property {string} [url] - Documentation URL
 */

/**
 * @typedef ExploreInfo
 * @property {string} [description] - Explore feature description
 * @property {string} [title] - Explore feature title
 */

/**
 * @typedef Feature
 * @property {string} [category] - Feature category
 * @property {FeatureItem[]} [list]
 */

/**
 * @typedef FeatureItem
 * @property {string} [description] - Feature description
 * @property {string} [label] - Feature label
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
 * @typedef GlobalSchema
 * @property {Prop[]} [props]
 */

/**
 * @typedef Highlight
 * @property {string} [description] - Highlight description
 * @property {string} [image] - Highlight image URL
 * @property {string} [title] - Highlight title
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
 * @typedef MarketplaceTheme
 * @property {string} [_id] - Theme ID
 * @property {CarouselItem[]} [carousel]
 * @property {CatalogSize} [catalog_size]
 * @property {Comments} [comments]
 * @property {ContactInfo} [contact]
 * @property {string} [created_at] - Theme creation timestamp
 * @property {string} [description] - Theme description
 * @property {Documentation} [documentation]
 * @property {ExploreInfo} [explore]
 * @property {Feature[]} [features]
 * @property {Highlight[]} [highlights]
 * @property {MarketplaceThemeImages} [images]
 * @property {string[]} [industry] - Industries the theme is suitable for
 * @property {boolean} [is_default] - Indicates if the theme is a default theme
 * @property {boolean} [is_update] - Indicates if the theme is an update
 * @property {string} [name] - Theme name
 * @property {string} [organization_id] - Organization ID
 * @property {PaymentInfo} [payment]
 * @property {Release} [release]
 * @property {string} [slug] - Theme slug
 * @property {string} [src] - Theme source URL
 * @property {string} [status] - Theme status
 * @property {number} [step] - Theme step
 * @property {string} [tagline] - Theme tagline
 * @property {string} [template_theme_id] - Template theme ID
 * @property {string} [updated_at] - Theme update timestamp
 * @property {string} [user_id] - User ID
 * @property {Variation[]} [variations]
 */

/**
 * @typedef MarketplaceThemeImages
 * @property {string} [desktop] - Desktop theme image URL
 * @property {string} [mobile] - Mobile theme image URL
 */

/**
 * @typedef MarketplaceThemeSchema
 * @property {PaginationSchema} [page]
 * @property {MarketplaceTheme[]} [themes]
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
 * @typedef PaginationSchema
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */

/**
 * @typedef PaymentInfo
 * @property {number} [amount] - Amount of payment
 * @property {boolean} [is_paid] - Indicates if the theme is paid
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
 * @property {number} [amount] - The amount of the theme
 * @property {boolean} [is_paid] - Whether the theme is paid or not
 */

/**
 * @typedef ThemeRejectionReasons
 * @property {string} _id - The ID of the theme rejection reasons object
 * @property {string} admin_id - The ID of the admin who rejected the theme
 * @property {string} [created_at] - The date and time when the theme rejection
 *   reasons object was created
 * @property {string} [message] - A general message about the rejection reasons
 * @property {string} organization_id - The ID of the organization
 * @property {Object} rejection_reasons
 * @property {string} status - The status of the theme (e.g., rejected)
 * @property {string} theme_id - The ID of the rejected theme
 * @property {string} [updated_at] - The date and time when the theme rejection
 *   reasons object was last updated
 * @property {string} user_id - The ID of the user who submitted the theme
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
 * @typedef ThemeUserSchema
 * @property {boolean} [anonymous] - True if the user is anonymous.
 * @property {boolean} [authenticated] - True if the user is authenticated.
 */

/**
 * @typedef UMDJs
 * @property {string} [link]
 * @property {string[]} [links]
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
 * @typedef Variation
 * @property {string} [color] - Variation color
 * @property {string} [demo_url] - Variation demo URL
 * @property {MarketplaceThemeImages} [images]
 * @property {string} [name] - Variation name
 */

class ThemePartnerModel {
  /** @returns {Action} */
  static Action() {
    return Joi.object({
      page: ThemePartnerModel.ActionPage(),
      popup: ThemePartnerModel.ActionPage(),
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
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {AllAvailablePageSchema} */
  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(ThemePartnerModel.AvailablePageSchema()),
    });
  }

  /** @returns {Assets} */
  static Assets() {
    return Joi.object({
      common_js: ThemePartnerModel.CommonJS(),
      css: ThemePartnerModel.CSS(),
      umd_js: ThemePartnerModel.UMDJs(),
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
      platform: ThemePartnerModel.AvailablePagePlatformPredicate(),
      route: ThemePartnerModel.AvailablePageRoutePredicate(),
      schedule: ThemePartnerModel.AvailablePageSchedulePredicate(),
      screen: ThemePartnerModel.AvailablePageScreenPredicate(),
      user: ThemePartnerModel.AvailablePageUserPredicate(),
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
        ThemePartnerModel.AvailablePageSchemaSections()
      ),
      sections_meta: Joi.array().items(
        ThemePartnerModel.AvailablePageSectionMetaAttributes()
      ),
      seo: ThemePartnerModel.AvailablePageSeo(),
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
      predicate: ThemePartnerModel.AvailablePagePredicate(),
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
      breadcrumb: Joi.array().items(ThemePartnerModel.SEObreadcrumb()),
      description: Joi.string().allow(""),
      meta_tags: Joi.array().items(ThemePartnerModel.SEOMetaItem()),
      sitemap: ThemePartnerModel.SEOSitemap(),
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
      props: ThemePartnerModel.BlockProps(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {BlockProps} */
  static BlockProps() {
    return Joi.object({
      image: ThemePartnerModel.ImagePickerProp(),
      slide_link: ThemePartnerModel.UrlProp(),
    });
  }

  /** @returns {CarouselItem} */
  static CarouselItem() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {CatalogSize} */
  static CatalogSize() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {CheckboxProp} */
  static CheckboxProp() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.boolean(),
    });
  }

  /** @returns {Comments} */
  static Comments() {
    return Joi.object({
      developer_remark: Joi.string().allow(""),
      reviewer_feedback: Joi.string().allow(""),
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
      global_schema: ThemePartnerModel.GlobalSchema(),
      list: Joi.array()
        .items(ThemePartnerModel.ThemeConfiguration())
        .required(),
      preset: ThemePartnerModel.Preset(),
    });
  }

  /** @returns {ContactInfo} */
  static ContactInfo() {
    return Joi.object({
      developer_contact: Joi.array().items(Joi.string().allow("")),
      seller_contact: Joi.string().allow(""),
    });
  }

  /** @returns {CreateNewTheme} */
  static CreateNewTheme() {
    return Joi.object({
      available_sections: Joi.array()
        .items(ThemePartnerModel.SectionItem())
        .required(),
      current: Joi.string().allow(""),
      global_schema: ThemePartnerModel.GlobalSchema(),
      list: Joi.array().items(ThemePartnerModel.ThemeConfiguration()),
      name: Joi.string().allow("").required(),
      pages: Joi.array().items(ThemePartnerModel.Page()),
      preset: ThemePartnerModel.Preset(),
      theme_type: Joi.string().allow("").required(),
      version: Joi.string().allow("").required(),
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
      props: ThemePartnerModel.CustomProps(),
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

  /** @returns {Documentation} */
  static Documentation() {
    return Joi.object({
      notes: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {ExploreInfo} */
  static ExploreInfo() {
    return Joi.object({
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {Feature} */
  static Feature() {
    return Joi.object({
      category: Joi.string().allow(""),
      list: Joi.array().items(ThemePartnerModel.FeatureItem()),
    });
  }

  /** @returns {FeatureItem} */
  static FeatureItem() {
    return Joi.object({
      description: Joi.string().allow(""),
      label: Joi.string().allow(""),
    });
  }

  /** @returns {Font} */
  static Font() {
    return Joi.object({
      family: Joi.string().allow("").required(),
      variants: ThemePartnerModel.FontVariants().required(),
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
      bold: ThemePartnerModel.FontVariant(),
      light: ThemePartnerModel.FontVariant(),
      medium: ThemePartnerModel.FontVariant(),
      regular: ThemePartnerModel.FontVariant(),
      semi_bold: ThemePartnerModel.FontVariant(),
    });
  }

  /** @returns {GlobalSchema} */
  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(ThemePartnerModel.Prop()),
    });
  }

  /** @returns {Highlight} */
  static Highlight() {
    return Joi.object({
      description: Joi.string().allow(""),
      image: Joi.string().allow(""),
      title: Joi.string().allow(""),
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

  /** @returns {MarketplaceTheme} */
  static MarketplaceTheme() {
    return Joi.object({
      _id: Joi.string().allow(""),
      carousel: Joi.array().items(ThemePartnerModel.CarouselItem()),
      catalog_size: ThemePartnerModel.CatalogSize(),
      comments: ThemePartnerModel.Comments(),
      contact: ThemePartnerModel.ContactInfo(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      documentation: ThemePartnerModel.Documentation(),
      explore: ThemePartnerModel.ExploreInfo(),
      features: Joi.array().items(ThemePartnerModel.Feature()),
      highlights: Joi.array().items(ThemePartnerModel.Highlight()),
      images: ThemePartnerModel.MarketplaceThemeImages(),
      industry: Joi.array().items(Joi.string().allow("")),
      is_default: Joi.boolean(),
      is_update: Joi.boolean(),
      name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      payment: ThemePartnerModel.PaymentInfo(),
      release: ThemePartnerModel.Release(),
      slug: Joi.string().allow(""),
      src: Joi.string().allow(""),
      status: Joi.string().allow(""),
      step: Joi.number(),
      tagline: Joi.string().allow(""),
      template_theme_id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      variations: Joi.array().items(ThemePartnerModel.Variation()),
    });
  }

  /** @returns {MarketplaceThemeImages} */
  static MarketplaceThemeImages() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {MarketplaceThemeSchema} */
  static MarketplaceThemeSchema() {
    return Joi.object({
      page: ThemePartnerModel.PaginationSchema(),
      themes: Joi.array().items(ThemePartnerModel.MarketplaceTheme()),
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

  /** @returns {PaginationSchema} */
  static PaginationSchema() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentInfo} */
  static PaymentInfo() {
    return Joi.object({
      amount: Joi.number(),
      is_paid: Joi.boolean(),
    });
  }

  /** @returns {Predicate} */
  static Predicate() {
    return Joi.object({
      route: ThemePartnerModel.Route(),
      screen: ThemePartnerModel.Screen(),
      user: ThemePartnerModel.ThemeUserSchema(),
    });
  }

  /** @returns {Preset} */
  static Preset() {
    return Joi.object({
      pages: Joi.array().items(ThemePartnerModel.Page()),
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
      blocks: Joi.array().items(ThemePartnerModel.Block()),
      name: Joi.string().allow(""),
      predicate: ThemePartnerModel.Predicate(),
      preset: ThemePartnerModel.SectionPreset(),
      props: ThemePartnerModel.SectionProps(),
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
      blocks: Joi.array().items(ThemePartnerModel.Block()),
    });
  }

  /** @returns {SectionProps} */
  static SectionProps() {
    return Joi.object({
      autoplay: ThemePartnerModel.CheckboxProp(),
      item_margin: ThemePartnerModel.TextProp(),
      slide_interval: ThemePartnerModel.RangeProp(),
      title: ThemePartnerModel.TextProp(),
    });
  }

  /** @returns {SEObreadcrumb} */
  static SEObreadcrumb() {
    return Joi.object({
      action: ThemePartnerModel.Action(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {SEOMetaItem} */
  static SEOMetaItem() {
    return Joi.object({
      items: Joi.array().items(ThemePartnerModel.SEOMetaItems()),
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
      settings: ThemePartnerModel.ThemeConfigListPageSettingsProps(),
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
      page: Joi.array().items(ThemePartnerModel.ThemeConfigListPage()),
    });
  }

  /** @returns {ThemeMeta} */
  static ThemeMeta() {
    return Joi.object({
      description: Joi.string().allow(""),
      images: ThemePartnerModel.Images(),
      industry: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      payment: ThemePartnerModel.ThemePayment(),
      release: ThemePartnerModel.Release(),
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

  /** @returns {ThemeRejectionReasons} */
  static ThemeRejectionReasons() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      admin_id: Joi.string().allow("").required(),
      created_at: Joi.string().allow(""),
      message: Joi.string().allow(""),
      organization_id: Joi.string().allow("").required(),
      rejection_reasons: Joi.object().pattern(/\S/, Joi.any()).required(),
      status: Joi.string().allow("").required(),
      theme_id: Joi.string().allow("").required(),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ThemesSchema} */
  static ThemesSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      applied: Joi.boolean(),
      assets: ThemePartnerModel.Assets(),
      available_sections: Joi.array().items(ThemePartnerModel.SectionItem()),
      company_id: Joi.number(),
      config: ThemePartnerModel.Config(),
      created_at: Joi.string().allow(""),
      font: ThemePartnerModel.Font(),
      is_private: Joi.boolean(),
      marketplace_theme_id: Joi.string().allow(""),
      meta: ThemePartnerModel.ThemeMeta(),
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
      link: Joi.string().allow(""),
      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {UpdateThemeRequestBody} */
  static UpdateThemeRequestBody() {
    return Joi.object({
      config: ThemePartnerModel.Config(),
      font: ThemePartnerModel.Font(),
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

  /** @returns {Variation} */
  static Variation() {
    return Joi.object({
      color: Joi.string().allow(""),
      demo_url: Joi.string().allow(""),
      images: ThemePartnerModel.MarketplaceThemeImages(),
      name: Joi.string().allow(""),
    });
  }
}
module.exports = ThemePartnerModel;
