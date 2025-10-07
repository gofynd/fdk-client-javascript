const Joi = require("joi");

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
 * @typedef DraftExtensionSection
 * @property {string} [extension_id]
 * @property {string} [bundle_name]
 * @property {string} [organization_id]
 * @property {ExtensionSection[]} [sections]
 * @property {AssetsExtension} [assets]
 * @property {string} [type]
 * @property {string} [status]
 */

/**
 * @typedef ExtensionSectionDraft
 * @property {Sections} [sections]
 */

/**
 * @typedef Sections
 * @property {boolean} [acknowledged]
 * @property {number} [matched_count]
 * @property {number} [modified_count]
 * @property {string} [upserted_id]
 * @property {number} [upserted_count]
 */

/**
 * @typedef ExtensionSection
 * @property {string} [label]
 * @property {string} [name]
 * @property {PropExtension[]} [props]
 * @property {Object[]} [blocks]
 */

/**
 * @typedef PropExtension
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 * @property {string} [info]
 */

/**
 * @typedef AssetsExtension
 * @property {string} [js]
 * @property {string} [css]
 */

/**
 * @typedef PublishExtensionSection
 * @property {string} [extension_id]
 * @property {string} [bundle_name]
 * @property {string} [organization_id]
 * @property {ExtensionSection[]} [sections]
 * @property {AssetsExtension} [assets]
 * @property {string} [type]
 * @property {string} [status]
 */

/**
 * @typedef PreviewExtension
 * @property {string} [application_id] - Application ID
 * @property {string} [section_preview_hash] - Hash for the section preview
 */

/**
 * @typedef ExtensionPreview
 * @property {string} [message]
 */

/**
 * @typedef ExtensionSectionPublish
 * @property {Sections} [sections]
 */

/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
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
 * @property {string} [type] - Type of action to be taken e.g, page.
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 */

/**
 * @typedef AvailablePageSchemaSections
 * @property {string} [name]
 * @property {string} [label]
 * @property {Object} [props]
 * @property {Object[]} [blocks]
 * @property {Object} [preset]
 * @property {AvailablePagePredicate} [predicate]
 * @property {SectionSource} [__source]
 */

/**
 * @typedef SectionSource
 * @property {string} [id] - The source id specifying the source of the section.
 * @property {string} [bundle_name] - This is the extension binding name
 *   containing this section.
 * @property {string} [type] - This is source type. It will either be
 *   themeBundle or extension.
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
 * @typedef AvailablePagePredicate
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {AvailablePageRoutePredicate} [route]
 * @property {AvailablePageSchedulePredicate} [schedule]
 * @property {AvailablePagePlatformPredicate} [platform]
 * @property {string[]} [zones] - An array of zone ids associated with the section
 */

/**
 * @typedef MarketplaceThemeSchema
 * @property {MarketplaceTheme[]} [themes]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef MarketplaceTheme
 * @property {string} [_id] - Theme ID
 * @property {PaymentInfo} [payment]
 * @property {ContactInfo} [contact]
 * @property {string[]} [industry] - Industries the theme is suitable for
 * @property {boolean} [is_update] - Indicates if the theme is an update
 * @property {boolean} [is_default] - Indicates if the theme is a default theme
 * @property {string} [name] - Theme name
 * @property {string} [tagline] - Theme tagline
 * @property {string} [description] - Theme description
 * @property {CatalogSize} [catalog_size]
 * @property {MarketplaceThemeImages} [images]
 * @property {CarouselItem[]} [carousel]
 * @property {string} [src] - Theme source URL
 * @property {ExploreInfo} [explore]
 * @property {Feature[]} [features]
 * @property {Highlight[]} [highlights]
 * @property {Variation[]} [variations]
 * @property {Documentation} [documentation]
 * @property {string} [status] - Theme status
 * @property {number} [step] - Theme step
 * @property {Comments} [comments]
 * @property {Release} [release]
 * @property {string} [slug] - Theme slug
 * @property {string} [organization_id] - Organization ID
 * @property {string} [user_id] - User ID
 * @property {string} [created_at] - Theme creation timestamp
 * @property {string} [updated_at] - Theme update timestamp
 * @property {string} [template_theme_id] - Template theme ID
 */

/**
 * @typedef PaymentInfo
 * @property {boolean} [is_paid] - Indicates if the theme is paid
 * @property {number} [amount] - Amount of payment
 */

/**
 * @typedef ContactInfo
 * @property {string[]} [developer_contact] - Developer contact information
 * @property {string} [seller_contact] - Seller contact information
 */

/**
 * @typedef CatalogSize
 * @property {number} [min] - Minimum catalog size
 * @property {number} [max] - Maximum catalog size
 */

/**
 * @typedef MarketplaceThemeImages
 * @property {string} [desktop] - Desktop theme image URL
 * @property {string} [mobile] - Mobile theme image URL
 */

/**
 * @typedef CarouselItem
 * @property {string} [desktop] - Desktop carousel image URL
 * @property {string} [mobile] - Mobile carousel image URL
 */

/**
 * @typedef ExploreInfo
 * @property {string} [title] - Explore feature title
 * @property {string} [description] - Explore feature description
 */

/**
 * @typedef Feature
 * @property {string} [category] - Feature category
 * @property {FeatureItem[]} [list]
 */

/**
 * @typedef FeatureItem
 * @property {string} [label] - Feature label
 * @property {string} [description] - Feature description
 */

/**
 * @typedef Highlight
 * @property {string} [title] - Highlight title
 * @property {string} [description] - Highlight description
 * @property {string} [image] - Highlight image URL
 */

/**
 * @typedef Variation
 * @property {string} [name] - Variation name
 * @property {string} [color] - Variation color
 * @property {string} [demo_url] - Variation demo URL
 * @property {MarketplaceThemeImages} [images]
 */

/**
 * @typedef Documentation
 * @property {string} [notes] - Documentation notes
 * @property {string} [url] - Documentation URL
 */

/**
 * @typedef Comments
 * @property {string} [developer_remark] - Developer remark
 * @property {string} [reviewer_feedback] - Reviewer feedback
 */

/**
 * @typedef ThemeRejectionReasons
 * @property {string} _id - The ID of the theme rejection reasons object
 * @property {string} [message] - A general message about the rejection reasons
 * @property {string} theme_id - The ID of the rejected theme
 * @property {string} organization_id - The ID of the organization
 * @property {string} admin_id - The ID of the admin who rejected the theme
 * @property {string} user_id - The ID of the user who submitted the theme
 * @property {string} status - The status of the theme (e.g., rejected)
 * @property {RejectedMessages} rejection_reasons
 * @property {string} [created_at] - The date and time when the theme rejection
 *   reasons object was created
 * @property {string} [updated_at] - The date and time when the theme rejection
 *   reasons object was last updated
 */

/**
 * @typedef RejectedMessages
 * @property {ThemeReviewRequestMessage} [theme_file]
 * @property {ThemeReviewRequestMessage} [theme_details]
 * @property {ThemeReviewRequestMessage} [theme_value_proposition]
 * @property {ThemeReviewRequestMessage} [theme_attributes]
 * @property {ThemeReviewRequestMessage} [theme_variations]
 * @property {ThemeReviewRequestMessage} [theme_docs]
 * @property {ThemeReviewRequestMessage} [theme_review]
 */

/**
 * @typedef ThemeReviewRequestMessage
 * @property {string} [message] - Message Explaining what the issue is
 */

/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {number} [current]
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
 * @property {string} [link]
 * @property {string[]} [links]
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
 * @typedef Preset
 * @property {Page[]} [pages]
 */

/**
 * @typedef Page
 * @property {Section[]} [sections]
 * @property {string} [value] - The value of the page.
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
 * @typedef UpdateThemeRequestBody
 * @property {Config} [config]
 * @property {Font} [font]
 */

/**
 * @typedef CreateNewTheme
 * @property {string} name - The name of the theme
 * @property {SectionItem[]} available_sections - Available sections information
 * @property {string} version - The version of the theme
 * @property {string} theme_type - Type of the Theme
 * @property {ThemeConfiguration[]} [list] - A list of configurations
 * @property {GlobalSchema} [global_schema]
 * @property {Preset} [preset]
 * @property {string} [current] - The current configuration
 * @property {Page[]} [pages]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params] - Parameters that should be considered in path.
 * @property {Object} [query] - Query parameter if any to be added to the action.
 * @property {string} [url] - The URL for the action.
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
 *   | "custom"
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
 *   | "order-status"
 *   | "locate-us"
 *   | "single-page-checkout"} PageType
 */

class ThemePartnerModel {
  /** @returns {AvailablePageSchema} */
  static AvailablePageSchema() {
    return Joi.object({
      value: Joi.string().allow(""),
      text: Joi.string().allow(""),
      path: Joi.string().allow(""),
      type: Joi.string().allow(""),
      sections: Joi.array().items(
        ThemePartnerModel.AvailablePageSchemaSections()
      ),
      sections_meta: Joi.array().items(
        ThemePartnerModel.AvailablePageSectionMetaAttributes()
      ),
      theme: Joi.string().allow(""),
      seo: ThemePartnerModel.AvailablePageSeo(),
      props: Joi.array().items(Joi.any()),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {DraftExtensionSection} */
  static DraftExtensionSection() {
    return Joi.object({
      extension_id: Joi.string().allow(""),
      bundle_name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      sections: Joi.array().items(ThemePartnerModel.ExtensionSection()),
      assets: ThemePartnerModel.AssetsExtension(),
      type: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {ExtensionSectionDraft} */
  static ExtensionSectionDraft() {
    return Joi.object({
      sections: ThemePartnerModel.Sections(),
    });
  }

  /** @returns {Sections} */
  static Sections() {
    return Joi.object({
      acknowledged: Joi.boolean(),
      matched_count: Joi.number(),
      modified_count: Joi.number(),
      upserted_id: Joi.string().allow(""),
      upserted_count: Joi.number(),
    });
  }

  /** @returns {ExtensionSection} */
  static ExtensionSection() {
    return Joi.object({
      label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      props: Joi.array().items(ThemePartnerModel.PropExtension()),
      blocks: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {PropExtension} */
  static PropExtension() {
    return Joi.object({
      id: Joi.string().allow(""),
      label: Joi.string().allow(""),
      type: Joi.string().allow(""),
      info: Joi.string().allow(""),
    });
  }

  /** @returns {AssetsExtension} */
  static AssetsExtension() {
    return Joi.object({
      js: Joi.string().allow(""),
      css: Joi.string().allow(""),
    });
  }

  /** @returns {PublishExtensionSection} */
  static PublishExtensionSection() {
    return Joi.object({
      extension_id: Joi.string().allow(""),
      bundle_name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      sections: Joi.array().items(ThemePartnerModel.ExtensionSection()),
      assets: ThemePartnerModel.AssetsExtension(),
      type: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {PreviewExtension} */
  static PreviewExtension() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      section_preview_hash: Joi.string().allow(""),
    });
  }

  /** @returns {ExtensionPreview} */
  static ExtensionPreview() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ExtensionSectionPublish} */
  static ExtensionSectionPublish() {
    return Joi.object({
      sections: ThemePartnerModel.Sections(),
    });
  }

  /** @returns {AvailablePageSectionMetaAttributes} */
  static AvailablePageSectionMetaAttributes() {
    return Joi.object({
      attributes: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {AvailablePageSeo} */
  static AvailablePageSeo() {
    return Joi.object({
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      meta_tags: Joi.array().items(ThemePartnerModel.SEOMetaItem()),
      sitemap: ThemePartnerModel.SEOSitemap(),
      breadcrumb: Joi.array().items(ThemePartnerModel.SEObreadcrumb()),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {SEOMetaItem} */
  static SEOMetaItem() {
    return Joi.object({
      title: Joi.string().allow(""),
      items: Joi.array().items(ThemePartnerModel.SEOMetaItems()),
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
      action: ThemePartnerModel.Action(),
    });
  }

  /** @returns {Action} */
  static Action() {
    return Joi.object({
      type: Joi.string().allow(""),
      page: ThemePartnerModel.ActionPage(),
      popup: ThemePartnerModel.ActionPage(),
    });
  }

  /** @returns {AvailablePageSchemaSections} */
  static AvailablePageSchemaSections() {
    return Joi.object({
      name: Joi.string().allow(""),
      label: Joi.string().allow(""),
      props: Joi.object().pattern(/\S/, Joi.any()),
      blocks: Joi.array().items(Joi.any()),
      preset: Joi.object().pattern(/\S/, Joi.any()),
      predicate: ThemePartnerModel.AvailablePagePredicate(),
      __source: ThemePartnerModel.SectionSource(),
    });
  }

  /** @returns {SectionSource} */
  static SectionSource() {
    return Joi.object({
      id: Joi.string().allow(""),
      bundle_name: Joi.string().allow(""),
      type: Joi.string().allow(""),
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
      query: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {AvailablePagePredicate} */
  static AvailablePagePredicate() {
    return Joi.object({
      screen: ThemePartnerModel.AvailablePageScreenPredicate(),
      user: ThemePartnerModel.AvailablePageUserPredicate(),
      route: ThemePartnerModel.AvailablePageRoutePredicate(),
      schedule: ThemePartnerModel.AvailablePageSchedulePredicate(),
      platform: ThemePartnerModel.AvailablePagePlatformPredicate(),
      zones: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {MarketplaceThemeSchema} */
  static MarketplaceThemeSchema() {
    return Joi.object({
      themes: Joi.array().items(ThemePartnerModel.MarketplaceTheme()),
      page: ThemePartnerModel.PaginationSchema(),
    });
  }

  /** @returns {MarketplaceTheme} */
  static MarketplaceTheme() {
    return Joi.object({
      _id: Joi.string().allow(""),
      payment: ThemePartnerModel.PaymentInfo(),
      contact: ThemePartnerModel.ContactInfo(),
      industry: Joi.array().items(Joi.string().allow("")),
      is_update: Joi.boolean(),
      is_default: Joi.boolean(),
      name: Joi.string().allow(""),
      tagline: Joi.string().allow(""),
      description: Joi.string().allow(""),
      catalog_size: ThemePartnerModel.CatalogSize(),
      images: ThemePartnerModel.MarketplaceThemeImages(),
      carousel: Joi.array().items(ThemePartnerModel.CarouselItem()),
      src: Joi.string().allow(""),
      explore: ThemePartnerModel.ExploreInfo(),
      features: Joi.array().items(ThemePartnerModel.Feature()),
      highlights: Joi.array().items(ThemePartnerModel.Highlight()),
      variations: Joi.array().items(ThemePartnerModel.Variation()),
      documentation: ThemePartnerModel.Documentation(),
      status: Joi.string().allow(""),
      step: Joi.number(),
      comments: ThemePartnerModel.Comments(),
      release: ThemePartnerModel.Release(),
      slug: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      template_theme_id: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentInfo} */
  static PaymentInfo() {
    return Joi.object({
      is_paid: Joi.boolean(),
      amount: Joi.number(),
    });
  }

  /** @returns {ContactInfo} */
  static ContactInfo() {
    return Joi.object({
      developer_contact: Joi.array().items(Joi.string().allow("")),
      seller_contact: Joi.string().allow(""),
    });
  }

  /** @returns {CatalogSize} */
  static CatalogSize() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {MarketplaceThemeImages} */
  static MarketplaceThemeImages() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {CarouselItem} */
  static CarouselItem() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {ExploreInfo} */
  static ExploreInfo() {
    return Joi.object({
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
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
      label: Joi.string().allow(""),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {Highlight} */
  static Highlight() {
    return Joi.object({
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      image: Joi.string().allow(""),
    });
  }

  /** @returns {Variation} */
  static Variation() {
    return Joi.object({
      name: Joi.string().allow(""),
      color: Joi.string().allow(""),
      demo_url: Joi.string().allow(""),
      images: ThemePartnerModel.MarketplaceThemeImages(),
    });
  }

  /** @returns {Documentation} */
  static Documentation() {
    return Joi.object({
      notes: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {Comments} */
  static Comments() {
    return Joi.object({
      developer_remark: Joi.string().allow(""),
      reviewer_feedback: Joi.string().allow(""),
    });
  }

  /** @returns {ThemeRejectionReasons} */
  static ThemeRejectionReasons() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      message: Joi.string().allow(""),
      theme_id: Joi.string().allow("").required(),
      organization_id: Joi.string().allow("").required(),
      admin_id: Joi.string().allow("").required(),
      user_id: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      rejection_reasons: ThemePartnerModel.RejectedMessages().required(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {RejectedMessages} */
  static RejectedMessages() {
    return Joi.object({
      theme_file: ThemePartnerModel.ThemeReviewRequestMessage(),
      theme_details: ThemePartnerModel.ThemeReviewRequestMessage(),
      theme_value_proposition: ThemePartnerModel.ThemeReviewRequestMessage(),
      theme_attributes: ThemePartnerModel.ThemeReviewRequestMessage(),
      theme_variations: ThemePartnerModel.ThemeReviewRequestMessage(),
      theme_docs: ThemePartnerModel.ThemeReviewRequestMessage(),
      theme_review: ThemePartnerModel.ThemeReviewRequestMessage(),
    });
  }

  /** @returns {ThemeReviewRequestMessage} */
  static ThemeReviewRequestMessage() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {AllAvailablePageSchema} */
  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(ThemePartnerModel.AvailablePageSchema()),
    });
  }

  /** @returns {PaginationSchema} */
  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),
      item_total: Joi.number(),
      has_next: Joi.boolean(),
      type: Joi.string().allow(""),
      current: Joi.number(),
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

  /** @returns {ThemesSchema} */
  static ThemesSchema() {
    return Joi.object({
      font: ThemePartnerModel.Font(),
      config: ThemePartnerModel.Config(),
      applied: Joi.boolean(),
      is_private: Joi.boolean(),
      tags: Joi.array().items(Joi.string().allow("")),
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      marketplace_theme_id: Joi.string().allow(""),
      meta: ThemePartnerModel.ThemeMeta(),
      name: Joi.string().allow(""),
      template_theme_id: Joi.string().allow(""),
      version: Joi.string().allow(""),
      styles: Joi.object().pattern(/\S/, Joi.any()),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      assets: ThemePartnerModel.Assets(),
      available_sections: Joi.array().items(ThemePartnerModel.SectionItem()),
      theme_type: Joi.string().allow(""),
      company_id: Joi.number(),
      src: Joi.string().allow(""),
    });
  }

  /** @returns {Font} */
  static Font() {
    return Joi.object({
      variants: ThemePartnerModel.FontVariants().required(),
      family: Joi.string().allow("").required(),
    });
  }

  /** @returns {FontVariants} */
  static FontVariants() {
    return Joi.object({
      light: ThemePartnerModel.FontVariant(),
      regular: ThemePartnerModel.FontVariant(),
      medium: ThemePartnerModel.FontVariant(),
      semi_bold: ThemePartnerModel.FontVariant(),
      bold: ThemePartnerModel.FontVariant(),
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
        .items(ThemePartnerModel.ThemeConfiguration())
        .required(),
      global_schema: ThemePartnerModel.GlobalSchema(),
      preset: ThemePartnerModel.Preset(),
    });
  }

  /** @returns {ThemeConfiguration} */
  static ThemeConfiguration() {
    return Joi.object({
      name: Joi.string().allow(""),
      global_config: Joi.object().pattern(/\S/, Joi.any()),
      page: Joi.array().items(ThemePartnerModel.ThemeConfigListPage()),
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
      settings: ThemePartnerModel.ThemeConfigListPageSettingsProps(),
    });
  }

  /** @returns {ThemeConfigListPageSettingsProps} */
  static ThemeConfigListPageSettingsProps() {
    return Joi.object({
      props: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {ThemeMeta} */
  static ThemeMeta() {
    return Joi.object({
      payment: ThemePartnerModel.ThemePayment(),
      description: Joi.string().allow(""),
      industry: Joi.array().items(Joi.string().allow("")),
      release: ThemePartnerModel.Release(),
      images: ThemePartnerModel.Images(),
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
      umd_js: ThemePartnerModel.UMDJs(),
      common_js: ThemePartnerModel.CommonJS(),
      css: ThemePartnerModel.CSS(),
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

  /** @returns {GlobalSchema} */
  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(ThemePartnerModel.Prop()),
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

  /** @returns {Preset} */
  static Preset() {
    return Joi.object({
      pages: Joi.array().items(ThemePartnerModel.Page()),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      sections: Joi.array().items(ThemePartnerModel.Section()),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SectionProps} */
  static SectionProps() {
    return Joi.object({
      title: ThemePartnerModel.TextProp(),
      item_margin: ThemePartnerModel.TextProp(),
      autoplay: ThemePartnerModel.CheckboxProp(),
      slide_interval: ThemePartnerModel.RangeProp(),
    });
  }

  /** @returns {SectionPreset} */
  static SectionPreset() {
    return Joi.object({
      blocks: Joi.array().items(ThemePartnerModel.Block()),
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
      image: ThemePartnerModel.ImagePickerProp(),
      slide_link: ThemePartnerModel.UrlProp(),
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
      blocks: Joi.array().items(ThemePartnerModel.Block()),
      predicate: ThemePartnerModel.Predicate(),
      name: Joi.string().allow(""),
      props: ThemePartnerModel.SectionProps(),
      preset: ThemePartnerModel.SectionPreset(),
    });
  }

  /** @returns {Block} */
  static Block() {
    return Joi.object({
      type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      props: ThemePartnerModel.BlockProps(),
    });
  }

  /** @returns {Predicate} */
  static Predicate() {
    return Joi.object({
      screen: ThemePartnerModel.Screen(),
      user: ThemePartnerModel.ThemeUserSchema(),
      route: ThemePartnerModel.Route(),
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

  /** @returns {UpdateThemeRequestBody} */
  static UpdateThemeRequestBody() {
    return Joi.object({
      config: ThemePartnerModel.Config(),
      font: ThemePartnerModel.Font(),
    });
  }

  /** @returns {CreateNewTheme} */
  static CreateNewTheme() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      available_sections: Joi.array()
        .items(ThemePartnerModel.SectionItem())
        .required(),
      version: Joi.string().allow("").required(),
      theme_type: Joi.string().allow("").required(),
      list: Joi.array().items(ThemePartnerModel.ThemeConfiguration()),
      global_schema: ThemePartnerModel.GlobalSchema(),
      preset: ThemePartnerModel.Preset(),
      current: Joi.string().allow(""),
      pages: Joi.array().items(ThemePartnerModel.Page()),
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
      type: ThemePartnerModel.PageType().required(),
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

      "custom",

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

      "order-status",

      "locate-us",

      "single-page-checkout"
    );
  }
}
module.exports = ThemePartnerModel;
