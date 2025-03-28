export = ThemePlatformModel;
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
declare class ThemePlatformModel {
}
declare namespace ThemePlatformModel {
    export { MarketplaceTheme, PaymentInfo, ContactInfo, CatalogSize, MarketplaceThemeImages, CarouselItem, ExploreInfo, Feature, FeatureItem, Highlight, Variation, Documentation, Comments, GetExtensionSectionRes, ExtensionSection, PropExtension, AssetsExtension, ThemeReq, CompanyThemeSchema, CompanyThemeReqSchema, CompanyTheme, MarketplaceThemeId, CompanyThemeMeta, ThemePayment, ThemeImages, AvailablePageSchema, AvailablePageSectionMetaAttributes, SEOMetaItem, SEOMetaItems, SEOSitemap, SEObreadcrumb, Action, AvailablePageSeo, AvailablePageSchemaSections, SectionSource, AvailablePagePredicate, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePlatformPredicate, AvailablePageSchedulePredicate, AllAvailablePageSchema, AddThemeRequestSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, ThemeUpgradable, UpdateThemeNameRequestBody, UpdateThemeRequestBody, Font, FontVariants, FontVariant, Config, ThemeConfiguration, OverlayPopup, DividerStrokeHighlight, UserAlerts, OrderTracking, ThemeConfigListPage, ThemeConfigListPageSettingsProps, CustomConfig, ThemeMeta, Release, Images, CustomProps, GlobalSchema, Assets, UMDJs, CommonJS, CSS, SectionItem, Preset, Page, Section, Block, Predicate, Screen, ThemeUserSchema, Route, SectionProps, SectionPreset, BlockProps, TextProp, CheckboxProp, RangeProp, ImagePickerProp, UrlProp, ThemeVersions, DummyTheme, AppliedThemes, CompanyPrivateTheme, Option, ActionPage, PageType };
}
/** @returns {MarketplaceTheme} */
declare function MarketplaceTheme(): MarketplaceTheme;
type MarketplaceTheme = {
    /**
     * - Theme ID
     */
    _id?: string;
    payment?: PaymentInfo;
    contact?: ContactInfo;
    /**
     * - Industries the theme is suitable for
     */
    industry?: string[];
    /**
     * - Indicates if the theme is an update
     */
    is_update?: boolean;
    /**
     * - Indicates if the theme is a default theme
     */
    is_default?: boolean;
    /**
     * - Theme name
     */
    name?: string;
    /**
     * - Theme tagline
     */
    tagline?: string;
    /**
     * - Theme description
     */
    description?: string;
    catalog_size?: CatalogSize;
    images?: MarketplaceThemeImages;
    carousel?: CarouselItem[];
    /**
     * - Theme source URL
     */
    src?: string;
    explore?: ExploreInfo;
    features?: Feature[];
    highlights?: Highlight[];
    variations?: Variation[];
    documentation?: Documentation;
    /**
     * - Theme status
     */
    status?: string;
    /**
     * - Theme step
     */
    step?: number;
    comments?: Comments;
    release?: Release;
    /**
     * - Theme slug
     */
    slug?: string;
    /**
     * - Organization ID
     */
    organization_id?: string;
    /**
     * - User ID
     */
    user_id?: string;
    /**
     * - Theme creation timestamp
     */
    created_at?: string;
    /**
     * - Theme update timestamp
     */
    updated_at?: string;
    /**
     * - Template theme ID
     */
    template_theme_id?: string;
    /**
     * - Theme type
     */
    theme_type?: string;
};
/** @returns {PaymentInfo} */
declare function PaymentInfo(): PaymentInfo;
type PaymentInfo = {
    /**
     * - Indicates if the theme is paid
     */
    is_paid?: boolean;
    /**
     * - Amount of payment
     */
    amount?: number;
};
/** @returns {ContactInfo} */
declare function ContactInfo(): ContactInfo;
type ContactInfo = {
    /**
     * - Developer contact information
     */
    developer_contact?: string[];
    /**
     * - Seller contact information
     */
    seller_contact?: string;
};
/** @returns {CatalogSize} */
declare function CatalogSize(): CatalogSize;
type CatalogSize = {
    /**
     * - Minimum catalog size
     */
    min?: number;
    /**
     * - Maximum catalog size
     */
    max?: number;
};
/** @returns {MarketplaceThemeImages} */
declare function MarketplaceThemeImages(): MarketplaceThemeImages;
type MarketplaceThemeImages = {
    /**
     * - Desktop theme image URL
     */
    desktop?: string;
    /**
     * - Mobile theme image URL
     */
    mobile?: string;
};
/** @returns {CarouselItem} */
declare function CarouselItem(): CarouselItem;
type CarouselItem = {
    /**
     * - Desktop carousel image URL
     */
    desktop?: string;
    /**
     * - Mobile carousel image URL
     */
    mobile?: string;
};
/** @returns {ExploreInfo} */
declare function ExploreInfo(): ExploreInfo;
type ExploreInfo = {
    /**
     * - Explore feature title
     */
    title?: string;
    /**
     * - Explore feature description
     */
    description?: string;
};
/** @returns {Feature} */
declare function Feature(): Feature;
type Feature = {
    /**
     * - Feature category
     */
    category?: string;
    list?: FeatureItem[];
};
/** @returns {FeatureItem} */
declare function FeatureItem(): FeatureItem;
type FeatureItem = {
    /**
     * - Feature properties
     */
    label?: string;
    /**
     * - Feature description
     */
    description?: string;
};
/** @returns {Highlight} */
declare function Highlight(): Highlight;
type Highlight = {
    /**
     * - Highlight title
     */
    title?: string;
    /**
     * - Highlight description
     */
    description?: string;
    /**
     * - Highlight image URL
     */
    image?: string;
};
/** @returns {Variation} */
declare function Variation(): Variation;
type Variation = {
    /**
     * - Variation name
     */
    name?: string;
    /**
     * - Variation color
     */
    color?: string;
    /**
     * - Variation demo URL
     */
    demo_url?: string;
    images?: MarketplaceThemeImages;
};
/** @returns {Documentation} */
declare function Documentation(): Documentation;
type Documentation = {
    /**
     * - Documentation notes
     */
    notes?: string;
    /**
     * - Documentation URL
     */
    url?: string;
};
/** @returns {Comments} */
declare function Comments(): Comments;
type Comments = {
    /**
     * - Developer remark
     */
    developer_remark?: string;
    /**
     * - Reviewer feedback
     */
    reviewer_feedback?: string;
};
/** @returns {GetExtensionSectionRes} */
declare function GetExtensionSectionRes(): GetExtensionSectionRes;
type GetExtensionSectionRes = {
    extension_id?: string;
    bundle_name?: string;
    organization_id?: string;
    sections?: ExtensionSection[];
    assets?: AssetsExtension;
    status?: string;
    type?: string;
    created_at?: string;
    updated_at?: string;
};
/** @returns {ExtensionSection} */
declare function ExtensionSection(): ExtensionSection;
type ExtensionSection = {
    label?: string;
    name?: string;
    props?: PropExtension[];
    blocks?: any[];
};
/** @returns {PropExtension} */
declare function PropExtension(): PropExtension;
type PropExtension = {
    id?: string;
    label?: string;
    type?: string;
    info?: string;
};
/** @returns {AssetsExtension} */
declare function AssetsExtension(): AssetsExtension;
type AssetsExtension = {
    js?: string;
    css?: string;
};
/** @returns {ThemeReq} */
declare function ThemeReq(): ThemeReq;
type ThemeReq = {
    /**
     * - The ID of the marketplace theme
     * to apply to the company.
     */
    marketplace_theme_id?: string;
};
/** @returns {CompanyThemeSchema} */
declare function CompanyThemeSchema(): CompanyThemeSchema;
type CompanyThemeSchema = {
    /**
     * - The unique identifier for the theme.
     */
    _id?: string;
    /**
     * - The name of the theme.
     */
    name?: string;
    marketplace_theme_id?: MarketplaceThemeId;
    /**
     * - The ID of the company that the theme belongs to.
     */
    company_id?: number;
    meta?: CompanyThemeMeta;
    /**
     * - The timestamp when the theme was created.
     */
    created_at?: string;
    /**
     * - The timestamp when the theme was last updated.
     */
    updated_at?: string;
    applied_themes?: AppliedThemes[];
};
/** @returns {CompanyThemeReqSchema} */
declare function CompanyThemeReqSchema(): CompanyThemeReqSchema;
type CompanyThemeReqSchema = {
    /**
     * - Theme id of the marketplace
     */
    marketplace_theme_id?: string;
};
/** @returns {CompanyTheme} */
declare function CompanyTheme(): CompanyTheme;
type CompanyTheme = {
    /**
     * - The unique identifier for the theme.
     */
    _id?: string;
    /**
     * - The name of the theme.
     */
    name?: string;
    marketplace_theme_id?: string;
    /**
     * - The ID of the company that the theme belongs to.
     */
    company_id?: number;
    meta?: CompanyThemeMeta;
    /**
     * - The timestamp when the theme was created.
     */
    created_at?: string;
    /**
     * - The timestamp when the theme was last updated.
     */
    updated_at?: string;
};
/** @returns {MarketplaceThemeId} */
declare function MarketplaceThemeId(): MarketplaceThemeId;
type MarketplaceThemeId = {
    /**
     * - The unique identifier for the marketplace theme.
     */
    _id?: string;
    /**
     * - Whether the theme is the default theme.
     */
    is_default?: boolean;
    release?: Release;
    /**
     * - Creation date of the theme
     */
    created_at?: string;
    /**
     * - Update date of the theme
     */
    updated_at?: string;
};
/** @returns {CompanyThemeMeta} */
declare function CompanyThemeMeta(): CompanyThemeMeta;
type CompanyThemeMeta = {
    payment?: ThemePayment;
    /**
     * - A list of industry categories the theme is
     * suitable for.
     */
    industry?: string[];
    /**
     * - A description of the theme.
     */
    description?: string;
    images?: ThemeImages;
    /**
     * - The slug for the theme.
     */
    slug?: string;
};
/** @returns {ThemePayment} */
declare function ThemePayment(): ThemePayment;
type ThemePayment = {
    /**
     * - Whether the theme is a paid theme.
     */
    is_paid?: boolean;
    /**
     * - The amount to be paid for the theme.
     */
    amount?: number;
};
/** @returns {ThemeImages} */
declare function ThemeImages(): ThemeImages;
type ThemeImages = {
    /**
     * - The URL of the desktop image for the theme.
     */
    desktop?: string;
    /**
     * - The URL of the mobile image for the theme.
     */
    mobile?: string;
};
/** @returns {AvailablePageSchema} */
declare function AvailablePageSchema(): AvailablePageSchema;
type AvailablePageSchema = {
    value?: string;
    text?: string;
    path?: string;
    type?: string;
    sections?: AvailablePageSchemaSections[];
    sections_meta?: AvailablePageSectionMetaAttributes[];
    theme?: string;
    seo?: AvailablePageSeo;
    props?: any[];
    _id?: string;
    /**
     * - The creation timestamp of the page
     */
    created_at?: string;
    /**
     * - The last update timestamp of the page
     */
    updated_at?: string;
    application?: string;
};
/** @returns {AvailablePageSectionMetaAttributes} */
declare function AvailablePageSectionMetaAttributes(): AvailablePageSectionMetaAttributes;
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
/** @returns {SEOMetaItem} */
declare function SEOMetaItem(): SEOMetaItem;
type SEOMetaItem = {
    title?: string;
    items?: SEOMetaItems[];
};
/** @returns {SEOMetaItems} */
declare function SEOMetaItems(): SEOMetaItems;
type SEOMetaItems = {
    key?: string;
    value?: string;
};
/** @returns {SEOSitemap} */
declare function SEOSitemap(): SEOSitemap;
type SEOSitemap = {
    priority?: number;
    frequency?: string;
    /**
     * - Timestamp at which the document was last modified on
     */
    modified_on?: string;
};
/** @returns {SEObreadcrumb} */
declare function SEObreadcrumb(): SEObreadcrumb;
type SEObreadcrumb = {
    url?: string;
    action?: Action;
};
/** @returns {Action} */
declare function Action(): Action;
type Action = {
    /**
     * - Type of action to be taken e.g, page.
     */
    type?: string;
    page?: ActionPage;
    popup?: ActionPage;
};
/** @returns {AvailablePageSeo} */
declare function AvailablePageSeo(): AvailablePageSeo;
type AvailablePageSeo = {
    title?: string;
    description?: string;
    meta_tags?: SEOMetaItem[];
    sitemap?: SEOSitemap;
    breadcrumbs?: SEObreadcrumb[];
    _id?: string;
    canonical_url?: string;
};
/** @returns {AvailablePageSchemaSections} */
declare function AvailablePageSchemaSections(): AvailablePageSchemaSections;
type AvailablePageSchemaSections = {
    /**
     * - Unique Id for section.
     */
    _id?: string;
    name?: string;
    label?: string;
    props?: any;
    blocks?: any[];
    preset?: any;
    predicate?: AvailablePagePredicate;
    __source?: SectionSource;
};
/** @returns {SectionSource} */
declare function SectionSource(): SectionSource;
type SectionSource = {
    /**
     * - The source id specifying the source of the section.
     */
    id?: string;
    /**
     * - This is the extension binding name
     * containing this section.
     */
    bundle_name?: string;
    /**
     * - This is source type. It will either be
     * themeBundle or extension.
     */
    type?: string;
};
/** @returns {AvailablePagePredicate} */
declare function AvailablePagePredicate(): AvailablePagePredicate;
type AvailablePagePredicate = {
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
    route?: AvailablePageRoutePredicate;
    schedule?: AvailablePageSchedulePredicate;
    platform?: AvailablePagePlatformPredicate;
    /**
     * - An array of zone ids associated with the section
     */
    zones?: string[];
};
/** @returns {AvailablePageScreenPredicate} */
declare function AvailablePageScreenPredicate(): AvailablePageScreenPredicate;
type AvailablePageScreenPredicate = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
/** @returns {AvailablePageUserPredicate} */
declare function AvailablePageUserPredicate(): AvailablePageUserPredicate;
type AvailablePageUserPredicate = {
    authenticated?: boolean;
    anonymous?: boolean;
};
/** @returns {AvailablePageRoutePredicate} */
declare function AvailablePageRoutePredicate(): AvailablePageRoutePredicate;
type AvailablePageRoutePredicate = {
    selected?: string;
    exact_url?: string;
    query?: any;
};
/** @returns {AvailablePagePlatformPredicate} */
declare function AvailablePagePlatformPredicate(): AvailablePagePlatformPredicate;
type AvailablePagePlatformPredicate = {
    /**
     * - Section visibility on ios platform
     */
    ios?: boolean;
    /**
     * - Section visibility on android platform
     */
    android?: boolean;
    /**
     * - Section visibility on web platform
     */
    web?: boolean;
};
/** @returns {AvailablePageSchedulePredicate} */
declare function AvailablePageSchedulePredicate(): AvailablePageSchedulePredicate;
type AvailablePageSchedulePredicate = {
    cron?: string;
    start?: string;
    end?: string;
};
/** @returns {AllAvailablePageSchema} */
declare function AllAvailablePageSchema(): AllAvailablePageSchema;
type AllAvailablePageSchema = {
    pages?: AvailablePageSchema[];
};
/** @returns {AddThemeRequestSchema} */
declare function AddThemeRequestSchema(): AddThemeRequestSchema;
type AddThemeRequestSchema = {
    theme_id?: string;
};
/** @returns {FontsSchema} */
declare function FontsSchema(): FontsSchema;
type FontsSchema = {
    items?: any[];
    kind?: string;
};
/** @returns {BlitzkriegApiErrorSchema} */
declare function BlitzkriegApiErrorSchema(): BlitzkriegApiErrorSchema;
type BlitzkriegApiErrorSchema = {
    message?: string;
};
/** @returns {BlitzkriegInternalServerErrorSchema} */
declare function BlitzkriegInternalServerErrorSchema(): BlitzkriegInternalServerErrorSchema;
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
/** @returns {FontsSchemaItems} */
declare function FontsSchemaItems(): FontsSchemaItems;
type FontsSchemaItems = {
    family?: string;
    variants?: string[];
    subsets?: string[];
    version?: string;
    last_modified?: string;
    files?: FontsSchemaItemsFiles;
    category?: string;
    kind?: string;
    menu?: string;
};
/** @returns {FontsSchemaItemsFiles} */
declare function FontsSchemaItemsFiles(): FontsSchemaItemsFiles;
type FontsSchemaItemsFiles = {
    regular?: string;
    italic?: string;
    bold?: string;
};
/** @returns {ThemesSchema} */
declare function ThemesSchema(): ThemesSchema;
type ThemesSchema = {
    font?: Font;
    config?: Config;
    /**
     * - Whether the theme has been applied or not
     */
    applied?: boolean;
    /**
     * - Whether the theme is private or not
     */
    is_private?: boolean;
    /**
     * - An array of tags associated with the theme
     */
    tags?: string[];
    /**
     * - The unique identifier of the theme
     */
    _id?: string;
    /**
     * - The ID of the application
     */
    application_id?: string;
    /**
     * - The ID of the theme in the marketplace
     */
    marketplace_theme_id?: string;
    meta?: ThemeMeta;
    /**
     * - The name of the theme
     */
    name?: string;
    /**
     * - The ID of the template theme
     */
    template_theme_id?: string;
    /**
     * - The version of the theme
     */
    version?: string;
    /**
     * - The styles associated with the theme
     */
    styles?: any;
    /**
     * - The creation timestamp of the theme
     */
    created_at?: string;
    /**
     * - The last update timestamp of the theme
     */
    updated_at?: string;
    global_sections?: any[];
    assets?: Assets;
    /**
     * - Available sections information
     */
    available_sections?: SectionItem[];
    theme_type?: string;
    /**
     * - The company id in which sales channel exists
     */
    company_id?: number;
    src?: string;
    /**
     * - Applied themes array
     */
    applied_themes?: any[];
};
/** @returns {ThemeUpgradable} */
declare function ThemeUpgradable(): ThemeUpgradable;
type ThemeUpgradable = {
    /**
     * - Indicates if the theme is upgradable or not
     */
    upgrade?: boolean;
    /**
     * - Information about theme versions.
     */
    versions?: any;
    /**
     * - A message describing the theme upgrade status
     */
    message?: string;
};
/** @returns {UpdateThemeNameRequestBody} */
declare function UpdateThemeNameRequestBody(): UpdateThemeNameRequestBody;
type UpdateThemeNameRequestBody = {
    /**
     * - The new name of the theme.
     */
    name?: string;
};
/** @returns {UpdateThemeRequestBody} */
declare function UpdateThemeRequestBody(): UpdateThemeRequestBody;
type UpdateThemeRequestBody = {
    config?: Config;
    font?: Font;
};
/** @returns {Font} */
declare function Font(): Font;
type Font = {
    variants: FontVariants;
    /**
     * - The font family
     */
    family: string;
};
/** @returns {FontVariants} */
declare function FontVariants(): FontVariants;
type FontVariants = {
    light?: FontVariant;
    regular?: FontVariant;
    medium?: FontVariant;
    semi_bold?: FontVariant;
    bold?: FontVariant;
};
/** @returns {FontVariant} */
declare function FontVariant(): FontVariant;
type FontVariant = {
    /**
     * - The name of the font variant
     */
    name: string;
    /**
     * - The URL of the font file
     */
    file: string;
};
/** @returns {Config} */
declare function Config(): Config;
type Config = {
    /**
     * - The current configuration
     */
    current: string;
    /**
     * - A list of configurations
     */
    list: ThemeConfiguration[];
    global_schema?: GlobalSchema;
    /**
     * - An Object of default theme configurations
     */
    preset?: any;
};
/** @returns {ThemeConfiguration} */
declare function ThemeConfiguration(): ThemeConfiguration;
type ThemeConfiguration = {
    /**
     * - The name of the configuration
     */
    name?: string;
    global_config?: any;
    /**
     * - An array of pages
     */
    page?: ThemeConfigListPage[];
};
/** @returns {OverlayPopup} */
declare function OverlayPopup(): OverlayPopup;
type OverlayPopup = {
    dialog_backgroung?: string;
    overlay?: string;
};
/** @returns {DividerStrokeHighlight} */
declare function DividerStrokeHighlight(): DividerStrokeHighlight;
type DividerStrokeHighlight = {
    divider_strokes?: string;
    highlight?: string;
};
/** @returns {UserAlerts} */
declare function UserAlerts(): UserAlerts;
type UserAlerts = {
    success_background?: string;
    success_text?: string;
    error_background?: string;
    error_text?: string;
    info_background?: string;
    info_text?: string;
};
/** @returns {OrderTracking} */
declare function OrderTracking(): OrderTracking;
type OrderTracking = {
    show_header?: boolean;
    show_footer?: boolean;
};
/** @returns {ThemeConfigListPage} */
declare function ThemeConfigListPage(): ThemeConfigListPage;
type ThemeConfigListPage = {
    /**
     * - Name of the page
     */
    page?: string;
    settings?: ThemeConfigListPageSettingsProps;
};
/** @returns {ThemeConfigListPageSettingsProps} */
declare function ThemeConfigListPageSettingsProps(): ThemeConfigListPageSettingsProps;
type ThemeConfigListPageSettingsProps = {
    props?: any;
};
/** @returns {CustomConfig} */
declare function CustomConfig(): CustomConfig;
type CustomConfig = {
    props?: CustomProps;
};
/** @returns {ThemeMeta} */
declare function ThemeMeta(): ThemeMeta;
type ThemeMeta = {
    payment?: ThemePayment;
    /**
     * - The description of the theme
     */
    description?: string;
    /**
     * - An array of industries associated with the theme
     */
    industry?: string[];
    release?: Release;
    images?: Images;
    /**
     * - The slug of the theme
     */
    slug?: string;
    /**
     * - The name of the theme
     */
    name?: string;
};
/** @returns {Release} */
declare function Release(): Release;
type Release = {
    /**
     * - The release notes of the theme
     */
    notes?: string;
    /**
     * - The version of the theme
     */
    version?: string;
};
/** @returns {Images} */
declare function Images(): Images;
type Images = {
    /**
     * - The URL of the desktop image
     */
    desktop?: string;
    /**
     * - The URL of the mobile image
     */
    mobile?: string;
};
/** @returns {CustomProps} */
declare function CustomProps(): CustomProps;
type CustomProps = {
    /**
     * - The header background color
     */
    header_bg_color?: string;
    /**
     * - The header text color
     */
    header_text_color?: string;
    /**
     * - The header border color
     */
    header_border_color?: string;
    /**
     * - The header icon color
     */
    header_icon_color?: string;
    /**
     * - The header cart
     * notification background color
     */
    header_cart_notification_bg_color?: string;
    /**
     * - The header cart
     * notification text color
     */
    header_cart_notification_text_color?: string;
    /**
     * - The header navigation hover color
     */
    header_nav_hover_color?: string;
    /**
     * - The primary button color
     */
    button_primary_color?: string;
    /**
     * - The primary button label color
     */
    button_primary_label_color?: string;
    /**
     * - The add to cart button color
     */
    button_add_to_cart_color?: string;
    /**
     * - The add to cart button
     * label color
     */
    button_add_to_cart_label_color?: string;
    /**
     * - The secondary button color
     */
    button_secondary_color?: string;
    /**
     * - The secondary button label color
     */
    button_secondary_label_color?: string;
    /**
     * - The tertiary button color
     */
    button_tertiary_color?: string;
    /**
     * - The tertiary button label color
     */
    button_tertiary_label_color?: string;
    /**
     * - The tertiary button hover color
     */
    button_tertiary_hover_color?: string;
    /**
     * - The tertiary button
     * hover text color
     */
    button_tertiary_hover_text_color?: string;
    /**
     * - The text heading link color
     */
    text_heading_link_color?: string;
    /**
     * - The text body color
     */
    text_body_color?: string;
    /**
     * - The text price color
     */
    text_price_color?: string;
    /**
     * - The text sale price color
     */
    text_sale_price_color?: string;
    /**
     * - The text strikethrough
     * price color
     */
    text_strikethrough_price_color?: string;
    /**
     * - The text discount color
     */
    text_discount_color?: string;
    /**
     * - The footer background color
     */
    footer_bg_color?: string;
    /**
     * - The footer text color
     */
    footer_text_color?: string;
    /**
     * - The footer border color
     */
    footer_border_color?: string;
    /**
     * - The footer navigation hover color
     */
    footer_nav_hover_color?: string;
    /**
     * - Whether to disable the cart or not
     */
    disable_cart?: boolean;
    /**
     * - Whether the menu is below the logo or not
     */
    is_menu_below_logo?: boolean;
    /**
     * - The position of the menu
     */
    menu_position?: string;
};
/** @returns {GlobalSchema} */
declare function GlobalSchema(): GlobalSchema;
type GlobalSchema = {
    props?: any[];
};
/** @returns {Assets} */
declare function Assets(): Assets;
type Assets = {
    umd_js?: UMDJs;
    common_js?: CommonJS;
    css?: CSS;
};
/** @returns {UMDJs} */
declare function UMDJs(): UMDJs;
type UMDJs = {
    link?: string;
    /**
     * - An array of pages
     */
    links?: string[];
};
/** @returns {CommonJS} */
declare function CommonJS(): CommonJS;
type CommonJS = {
    link?: string;
};
/** @returns {CSS} */
declare function CSS(): CSS;
type CSS = {
    link?: string;
    links?: string[];
};
/** @returns {SectionItem} */
declare function SectionItem(): SectionItem;
type SectionItem = {
    props?: any[];
    /**
     * - Blocks
     */
    blocks?: any[];
    /**
     * - Name of the section
     */
    name?: string;
    preset?: SectionPreset;
    /**
     * - Label for the section
     */
    label?: string;
};
/** @returns {Preset} */
declare function Preset(): Preset;
type Preset = {
    pages?: Page[];
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    sections?: Section[];
    /**
     * - The value of the page.
     */
    value?: string;
};
/** @returns {Section} */
declare function Section(): Section;
type Section = {
    blocks?: Block[];
    predicate?: Predicate;
    /**
     * - The name of the section.
     */
    name?: string;
    props?: SectionProps;
    preset?: SectionPreset;
};
/** @returns {Block} */
declare function Block(): Block;
type Block = {
    /**
     * - The type of the block.
     */
    type?: string;
    /**
     * - The name of the block.
     */
    name?: string;
    props?: BlockProps;
};
/** @returns {Predicate} */
declare function Predicate(): Predicate;
type Predicate = {
    screen?: Screen;
    user?: ThemeUserSchema;
    route?: Route;
};
/** @returns {Screen} */
declare function Screen(): Screen;
type Screen = {
    /**
     * - True if the screen is a mobile device.
     */
    mobile?: boolean;
    /**
     * - True if the screen is a desktop device.
     */
    desktop?: boolean;
    /**
     * - True if the screen is a tablet device.
     */
    tablet?: boolean;
};
/** @returns {ThemeUserSchema} */
declare function ThemeUserSchema(): ThemeUserSchema;
type ThemeUserSchema = {
    /**
     * - True if the user is authenticated.
     */
    authenticated?: boolean;
    /**
     * - True if the user is anonymous.
     */
    anonymous?: boolean;
};
/** @returns {Route} */
declare function Route(): Route;
type Route = {
    /**
     * - The selected route.
     */
    selected?: string;
    /**
     * - The exact URL of the route.
     */
    exact_url?: string;
};
/** @returns {SectionProps} */
declare function SectionProps(): SectionProps;
type SectionProps = {
    title?: TextProp;
    item_margin?: TextProp;
    autoplay?: CheckboxProp;
    slide_interval?: RangeProp;
};
/** @returns {SectionPreset} */
declare function SectionPreset(): SectionPreset;
type SectionPreset = {
    blocks?: Block[];
};
/** @returns {BlockProps} */
declare function BlockProps(): BlockProps;
type BlockProps = {
    image?: ImagePickerProp;
    slide_link?: UrlProp;
};
/** @returns {TextProp} */
declare function TextProp(): TextProp;
type TextProp = {
    /**
     * - The value of the text property.
     */
    value?: string;
    /**
     * - The type of the property.
     */
    type?: string;
};
/** @returns {CheckboxProp} */
declare function CheckboxProp(): CheckboxProp;
type CheckboxProp = {
    /**
     * - The value of the checkbox property.
     */
    value?: boolean;
    /**
     * - The type of the property.
     */
    type?: string;
};
/** @returns {RangeProp} */
declare function RangeProp(): RangeProp;
type RangeProp = {
    /**
     * - The value of the range property.
     */
    value?: number;
    /**
     * - The type of the property.
     */
    type?: string;
};
/** @returns {ImagePickerProp} */
declare function ImagePickerProp(): ImagePickerProp;
type ImagePickerProp = {
    /**
     * - The type of the property.
     */
    type?: string;
    /**
     * - The value of the image picker property.
     */
    value?: string;
};
/** @returns {UrlProp} */
declare function UrlProp(): UrlProp;
type UrlProp = {
    /**
     * - The type of the property.
     */
    type?: string;
    /**
     * - The value of the URL property.
     */
    value?: string;
};
/** @returns {ThemeVersions} */
declare function ThemeVersions(): ThemeVersions;
type ThemeVersions = {
    /**
     * - The version of the parent theme
     */
    parent_theme?: string;
    /**
     * - The version of the applied theme
     */
    applied_theme?: string;
};
/** @returns {DummyTheme} */
declare function DummyTheme(): DummyTheme;
type DummyTheme = {
    message?: string;
};
/** @returns {AppliedThemes} */
declare function AppliedThemes(): AppliedThemes;
type AppliedThemes = {
    /**
     * - ID of the application theme
     */
    _id?: string;
    /**
     * - ID of the application
     */
    application_id?: string;
};
/** @returns {CompanyPrivateTheme} */
declare function CompanyPrivateTheme(): CompanyPrivateTheme;
type CompanyPrivateTheme = {
    /**
     * - Type of the theme
     */
    theme_type?: string;
    /**
     * - Unique identifier for the theme
     */
    _id?: string;
    /**
     * - Name of the theme
     */
    name?: string;
    /**
     * - Version of the theme
     */
    version?: string;
    /**
     * - Identifier for the application
     */
    application_id?: string;
    /**
     * - Date and time when the theme was created
     */
    created_at?: string;
    /**
     * - Date and time when the theme was last updated
     */
    updated_at?: string;
    /**
     * - Whether the theme is applied or not
     */
    applied?: boolean;
    /**
     * - Whether the theme is private or not
     */
    is_private?: boolean;
    meta?: CompanyThemeMeta;
};
/** @returns {Option} */
declare function Option(): Option;
type Option = {
    text?: string;
    value?: string;
};
/** @returns {ActionPage} */
declare function ActionPage(): ActionPage;
type ActionPage = {
    /**
     * - Parameters that should be considered in path.
     */
    params?: any;
    /**
     * - Query parameter if any to be added to the action.
     */
    query?: any;
    /**
     * - The URL for the action.
     */
    url?: string;
    type: PageType;
};
/**
 * Enum: PageType Used By: Theme
 *
 * @returns {PageType}
 */
declare function PageType(): PageType;
type PageType = "about-us" | "addresses" | "blog" | "brands" | "cards" | "cart" | "categories" | "brand" | "category" | "collection" | "collections" | "custom" | "contact-us" | "external" | "faq" | "freshchat" | "home" | "notification-settings" | "orders" | "page" | "policy" | "product" | "product-request" | "products" | "profile" | "profile-order-shipment" | "profile-basic" | "profile-company" | "profile-emails" | "profile-phones" | "rate-us" | "refer-earn" | "settings" | "shared-cart" | "tnc" | "track-order" | "wishlist" | "sections" | "form" | "cart-delivery" | "cart-payment" | "cart-review" | "login" | "register" | "shipping-policy" | "return-policy" | "order-status" | "locate-us";
