const Joi = require("joi");

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
 * @property {string} [theme_type] - Theme type
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
 * @property {string} [label] - Feature properties
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
 * @typedef GetExtensionSectionRes
 * @property {string} [extension_id]
 * @property {string} [bundle_name]
 * @property {string} [organization_id]
 * @property {ExtensionSection[]} [sections]
 * @property {AssetsExtension} [assets]
 * @property {string} [status]
 * @property {string} [type]
 * @property {string} [created_at]
 * @property {string} [updated_at]
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
 * @typedef CompanyThemeReqSchema
 * @property {string} [marketplace_theme_id] - Theme id of the marketplace
 */

/**
 * @typedef CompanyTheme
 * @property {string} [_id] - The unique identifier for the theme.
 * @property {string} [name] - The name of the theme.
 * @property {string} [marketplace_theme_id]
 * @property {number} [company_id] - The ID of the company that the theme belongs to.
 * @property {CompanyThemeMeta} [meta]
 * @property {string} [created_at] - The timestamp when the theme was created.
 * @property {string} [updated_at] - The timestamp when the theme was last updated.
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
 * @property {string} [application]
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
 * @property {string} [modified_on] - Timestamp at which the document was last modified on
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
 * @typedef AvailablePageSeo
 * @property {string} [title]
 * @property {string} [description]
 * @property {SEOMetaItem[]} [meta_tags]
 * @property {SEOSitemap} [sitemap]
 * @property {SEObreadcrumb[]} [breadcrumbs]
 * @property {string} [_id]
 * @property {string} [canonical_url]
 */

/**
 * @typedef AvailablePageSchemaSections
 * @property {string} [_id] - Unique Id for section.
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
 * @property {Object[]} [items]
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
 * @property {string} [menu]
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
 * @property {Object[]} [global_sections]
 * @property {Assets} [assets]
 * @property {SectionItem[]} [available_sections] - Available sections information
 * @property {string} [theme_type]
 * @property {number} [company_id] - The company id in which sales channel exists
 * @property {string} [src]
 * @property {Object[]} [applied_themes] - Applied themes array
 */

/**
 * @typedef ThemeUpgradable
 * @property {boolean} [upgrade] - Indicates if the theme is upgradable or not
 * @property {Object} [versions] - Information about theme versions.
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
 * @property {Object} [preset] - An Object of default theme configurations
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
 * @property {Object[]} [props]
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
 * @property {SectionPreset} [preset]
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
 * @typedef DummyTheme
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
 * @typedef Option
 * @property {string} [text]
 * @property {string} [value]
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
 *   | "locate-us"} PageType
 */

class ThemePlatformModel {
  /** @returns {MarketplaceTheme} */
  static MarketplaceTheme() {
    return Joi.object({
      _id: Joi.string().allow(""),
      payment: ThemePlatformModel.PaymentInfo(),
      contact: ThemePlatformModel.ContactInfo(),
      industry: Joi.array().items(Joi.string().allow("")),
      is_update: Joi.boolean(),
      is_default: Joi.boolean(),
      name: Joi.string().allow(""),
      tagline: Joi.string().allow(""),
      description: Joi.string().allow(""),
      catalog_size: ThemePlatformModel.CatalogSize(),
      images: ThemePlatformModel.MarketplaceThemeImages(),
      carousel: Joi.array().items(ThemePlatformModel.CarouselItem()),
      src: Joi.string().allow(""),
      explore: ThemePlatformModel.ExploreInfo(),
      features: Joi.array().items(ThemePlatformModel.Feature()),
      highlights: Joi.array().items(ThemePlatformModel.Highlight()),
      variations: Joi.array().items(ThemePlatformModel.Variation()),
      documentation: ThemePlatformModel.Documentation(),
      status: Joi.string().allow(""),
      step: Joi.number(),
      comments: ThemePlatformModel.Comments(),
      release: ThemePlatformModel.Release(),
      slug: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      template_theme_id: Joi.string().allow(""),
      theme_type: Joi.string().allow(""),
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
      list: Joi.array().items(ThemePlatformModel.FeatureItem()),
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
      images: ThemePlatformModel.MarketplaceThemeImages(),
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

  /** @returns {GetExtensionSectionRes} */
  static GetExtensionSectionRes() {
    return Joi.object({
      extension_id: Joi.string().allow(""),
      bundle_name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      sections: Joi.array().items(ThemePlatformModel.ExtensionSection()),
      assets: ThemePlatformModel.AssetsExtension(),
      status: Joi.string().allow(""),
      type: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {ExtensionSection} */
  static ExtensionSection() {
    return Joi.object({
      label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      props: Joi.array().items(ThemePlatformModel.PropExtension()),
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

  /** @returns {CompanyThemeReqSchema} */
  static CompanyThemeReqSchema() {
    return Joi.object({
      marketplace_theme_id: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyTheme} */
  static CompanyTheme() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      marketplace_theme_id: Joi.string().allow(""),
      company_id: Joi.number(),
      meta: ThemePlatformModel.CompanyThemeMeta(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
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
      application: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePageSectionMetaAttributes} */
  static AvailablePageSectionMetaAttributes() {
    return Joi.object({
      attributes: Joi.object().pattern(/\S/, Joi.any()),
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
      modified_on: Joi.string().allow(""),
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
      breadcrumbs: Joi.array().items(ThemePlatformModel.SEObreadcrumb()),
      _id: Joi.string().allow(""),
      canonical_url: Joi.string().allow(""),
    });
  }

  /** @returns {AvailablePageSchemaSections} */
  static AvailablePageSchemaSections() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      label: Joi.string().allow(""),
      props: Joi.object().pattern(/\S/, Joi.any()),
      blocks: Joi.array().items(Joi.any()),
      preset: Joi.object().pattern(/\S/, Joi.any()),
      predicate: ThemePlatformModel.AvailablePagePredicate(),
      __source: ThemePlatformModel.SectionSource(),
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
      items: Joi.array().items(Joi.any()),
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
      menu: Joi.string().allow(""),
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
      styles: Joi.object().pattern(/\S/, Joi.any()),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      global_sections: Joi.array().items(Joi.any()),
      assets: ThemePlatformModel.Assets(),
      available_sections: Joi.array().items(ThemePlatformModel.SectionItem()),
      theme_type: Joi.string().allow(""),
      company_id: Joi.number(),
      src: Joi.string().allow(""),
      applied_themes: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {ThemeUpgradable} */
  static ThemeUpgradable() {
    return Joi.object({
      upgrade: Joi.boolean(),
      versions: Joi.object().pattern(/\S/, Joi.any()),
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
      preset: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {ThemeConfiguration} */
  static ThemeConfiguration() {
    return Joi.object({
      name: Joi.string().allow(""),
      global_config: Joi.object().pattern(/\S/, Joi.any()),
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
      props: Joi.object().pattern(/\S/, Joi.any()),
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
      props: Joi.array().items(Joi.any()),
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
      props: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      blocks: Joi.array().items(Joi.object().pattern(/\S/, Joi.any())),
      name: Joi.string().allow(""),
      preset: ThemePlatformModel.SectionPreset(),
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

  /** @returns {DummyTheme} */
  static DummyTheme() {
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

  /** @returns {Option} */
  static Option() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
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

      "locate-us"
    );
  }
}
module.exports = ThemePlatformModel;
