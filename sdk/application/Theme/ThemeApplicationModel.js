const Joi = require("joi");

/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */

/**
 * @typedef AdvanceSettingV2
 * @property {DividerStrokeHighlightSettingV2} [divider_stroke_highlight]
 * @property {OverlayPopupSettingV2} [overlay_popup]
 * @property {UserAlertsSettingV2} [user_alerts]
 */

/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef AllThemesApplicationResponseV2
 * @property {string} [_id] - The unique identifier of the theme
 * @property {string} [application_id] - The ID of the application
 * @property {boolean} [applied] - Whether the theme has been applied or not
 * @property {AssetsV2} [assets]
 * @property {SectionItem[]} [available_sections] - Available sections information
 * @property {ConfigV2} [config]
 * @property {string} [created_at] - The creation timestamp of the theme
 * @property {FontV2} [font]
 * @property {boolean} [is_private] - Whether the theme is private or not
 * @property {string} [marketplace_theme_id] - The ID of the theme in the marketplace
 * @property {MetaV2} [meta]
 * @property {string} [name] - The name of the theme
 * @property {Object} [styles] - The styles associated with the theme
 * @property {string[]} [tags] - An array of tags associated with the theme
 * @property {string} [template_theme_id] - The ID of the template theme
 * @property {string} [updated_at] - The last update timestamp of the theme
 * @property {string} [version] - The version of the theme
 */

/**
 * @typedef ApplyThemeRequestV2
 * @property {string} marketplace_theme_id - The ID of the theme to be applied
 */

/**
 * @typedef ApplyThemeResponseV2
 * @property {string} [_id] - The unique identifier of the theme
 * @property {string} [application_id] - The ID of the application
 * @property {boolean} [applied] - Whether the theme has been applied or not
 * @property {ConfigV2} [config]
 * @property {string} [created_at] - The creation timestamp of the theme
 * @property {FontV2} [font]
 * @property {boolean} [is_private] - Whether the theme is private or not
 * @property {string} [marketplace_theme_id] - The ID of the theme in the marketplace
 * @property {MetaV2} [meta]
 * @property {string} [name] - The name of the theme
 * @property {Object} [styles] - The styles associated with the theme
 * @property {string[]} [tags] - An array of tags associated with the theme
 * @property {string} [template_theme_id] - The ID of the template theme
 * @property {string} [updated_at] - The last update timestamp of the theme
 * @property {string} [version] - The version of the theme
 */

/**
 * @typedef ArrayOfMarketplaceTheme
 * @property {MarketplaceTheme[]} [body] - An array containing the latest version of theme
 */

/**
 * @typedef AssetsSchema
 * @property {CommonJs} [common_js]
 * @property {Css} [css]
 * @property {UmdJs} [umd_js]
 */

/**
 * @typedef AssetsV2
 * @property {CommonJS} [common_js]
 * @property {CSS} [css]
 * @property {UMDJs} [umd_js]
 */

/**
 * @typedef AuthConfigV2
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
 * @typedef availableSectionSchema
 * @property {Blocks[]} [blocks]
 * @property {string} [label]
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
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
 * @typedef BlitzkriegNotFoundSchema
 * @property {string} [message]
 */

/**
 * @typedef BlockPropsV2
 * @property {ImagePickerPropV2} [image]
 * @property {UrlPropV2} [slide_link]
 */

/**
 * @typedef Blocks
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 * @property {string} [type]
 */

/**
 * @typedef BlocksProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */

/**
 * @typedef BlockV2
 * @property {string} [name] - The name of the block.
 * @property {BlockPropsV2} [props]
 * @property {string} [type] - The type of the block.
 */

/**
 * @typedef Bold
 * @property {string} [file]
 * @property {string} [name]
 */

/**
 * @typedef ButtonSettingV2
 * @property {string} [button_link] - The button link color
 * @property {string} [button_primary] - The primary button color
 * @property {string} [button_secondary] - The secondary button color
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
 * @typedef CheckboxPropV2
 * @property {string} [type] - The type of the property.
 * @property {boolean} [value] - The value of the checkbox property.
 */

/**
 * @typedef Colors
 * @property {string} [accent_color]
 * @property {string} [bg_color]
 * @property {string} [button_secondary_color]
 * @property {string} [link_color]
 * @property {string} [primary_color]
 * @property {string} [secondary_color]
 */

/**
 * @typedef ColorsV2
 * @property {string} [accent_color] - The accent color
 * @property {string} [bg_color] - The background color
 * @property {string} [button_secondary_color] - The secondary button color
 * @property {string} [link_color] - The link color
 * @property {string} [primary_color] - The primary color
 * @property {string} [secondary_color] - The secondary color
 */

/**
 * @typedef Comments
 * @property {string} [developer_remark] - Developer remark
 * @property {string} [reviewer_feedback] - Reviewer feedback
 */

/**
 * @typedef CommonJs
 * @property {string} [link]
 */

/**
 * @typedef CommonJS
 * @property {string} [link]
 */

/**
 * @typedef Config
 * @property {string} [current]
 * @property {GlobalSchema} [global_schema]
 * @property {ListSchemaItem[]} [list]
 * @property {Preset} [preset]
 */

/**
 * @typedef ConfigPage
 * @property {string} [page]
 * @property {Object} [settings]
 */

/**
 * @typedef ConfigurationV2
 * @property {CustomConfigV2} [custom]
 * @property {GlobalConfigV2} [global_config]
 * @property {string} [name] - The name of the configuration
 * @property {string[]} [page] - An array of pages
 */

/**
 * @typedef ConfigV2
 * @property {string} current - The current configuration
 * @property {GlobalSchemaV2} [global_schema]
 * @property {ConfigurationV2[]} list - A list of configurations
 * @property {PresetV2} [preset]
 */

/**
 * @typedef ContactInfo
 * @property {string[]} [developer_contact] - Developer contact information
 * @property {string} [seller_contact] - Seller contact information
 */

/**
 * @typedef Css
 * @property {string} [link]
 * @property {string[]} [links]
 */

/**
 * @typedef CSS
 * @property {string[]} [links]
 */

/**
 * @typedef Custom
 * @property {Object} [props]
 */

/**
 * @typedef CustomConfigV2
 * @property {CustomPropsV2} [props]
 */

/**
 * @typedef CustomPropsV2
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
 * @typedef DividerStrokeHighlightSettingV2
 * @property {string} [divider_strokes] - The divider strokes color
 * @property {string} [highlight] - The highlight color
 */

/**
 * @typedef Documentation
 * @property {string} [notes] - Documentation notes
 * @property {string} [url] - Documentation URL
 */

/**
 * @typedef Email
 * @property {boolean} active - Whether the email address is active or not
 * @property {string} email - Email address
 * @property {boolean} primary - Whether the email address is the primary
 *   contact email for the user
 * @property {boolean} verified - Whether the email address has been verified or not
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
 * @property {string} [family]
 * @property {Variants} [variants]
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
 * @typedef FontV2
 * @property {string} family - The font family
 * @property {FontVariantsV2} variants
 */

/**
 * @typedef FontVariantsV2
 * @property {FontVariantV2} [bold]
 * @property {FontVariantV2} [light]
 * @property {FontVariantV2} [medium]
 * @property {FontVariantV2} [regular]
 * @property {FontVariantV2} [semi_bold]
 */

/**
 * @typedef FontVariantV2
 * @property {string} file - The URL of the font file
 * @property {string} name - The name of the font variant
 */

/**
 * @typedef FooterSettingV2
 * @property {string} [footer_background] - The footer background color
 * @property {string} [footer_body_text] - The footer body text color
 * @property {string} [footer_bottom_background] - The footer bottom background color
 * @property {string} [footer_heading_text] - The footer heading text color
 * @property {string} [footer_icon] - The footer icon color
 */

/**
 * @typedef GeneralSettingV2
 * @property {ButtonSettingV2} [button]
 * @property {FooterSettingV2} [footer]
 * @property {HeaderSettingV2} [header]
 * @property {SaleDiscountSettingV2} [sale_discount]
 * @property {TextSettingV2} [text]
 * @property {ThemeSettingV2} [theme]
 */

/**
 * @typedef GlobalConfigV2
 * @property {AuthConfigV2} [auth]
 * @property {PaletteConfigV2} [palette]
 * @property {StaticConfigV2} [statics]
 */

/**
 * @typedef GlobalSchema
 * @property {GlobalSchemaProps[]} [props]
 */

/**
 * @typedef GlobalSchemaProps
 * @property {string} [category]
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */

/**
 * @typedef GlobalSchemaV2
 * @property {PropV2[]} [props]
 */

/**
 * @typedef HeaderSettingV2
 * @property {string} [header_background] - The header background color
 * @property {string} [header_icon] - The header icon color
 * @property {string} [header_nav] - The header navigation color
 */

/**
 * @typedef Highlight
 * @property {string} [description] - Highlight description
 * @property {string} [image] - Highlight image URL
 * @property {string} [title] - Highlight title
 */

/**
 * @typedef ImagePickerPropV2
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the image picker property.
 */

/**
 * @typedef Images
 * @property {string[]} [android]
 * @property {string[]} [desktop]
 * @property {string[]} [ios]
 * @property {string[]} [thumbnail]
 */

/**
 * @typedef ImagesV2
 * @property {string} [desktop] - The URL of the desktop image
 * @property {string} [mobile] - The URL of the mobile image
 */

/**
 * @typedef Information
 * @property {string} [description]
 * @property {string[]} [features]
 * @property {Images} [images]
 * @property {string} [name]
 */

/**
 * @typedef Light
 * @property {string} [file]
 * @property {string} [name]
 */

/**
 * @typedef ListSchemaItem
 * @property {Object} [global_config]
 * @property {string} [name]
 * @property {ConfigPage[]} [page]
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
 * @typedef MarketplaceThemeId
 * @property {string} [_id] - The unique identifier for the marketplace theme.
 * @property {boolean} [is_default] - Whether the theme is the default theme.
 */

/**
 * @typedef MarketplaceThemeImages
 * @property {string} [desktop] - Desktop theme image URL
 * @property {string} [mobile] - Mobile theme image URL
 */

/**
 * @typedef MarketplaceThemeResponse
 * @property {MarketplaceThemeResponseBody} [body]
 * @property {number} [status] - HTTP status code
 */

/**
 * @typedef MarketplaceThemeResponseBody
 * @property {PaginationSchema} [page]
 * @property {MarketplaceTheme[]} [themes]
 */

/**
 * @typedef Medium
 * @property {string} [file]
 * @property {string} [name]
 */

/**
 * @typedef MetaV2
 * @property {string} [description] - The description of the theme
 * @property {ImagesV2} [images]
 * @property {string[]} [industry] - An array of industries associated with the theme
 * @property {string} [name] - The name of the theme
 * @property {PaymentV2} [payment]
 * @property {ReleaseV2} [release]
 * @property {string} [slug] - The slug of the theme
 */

/**
 * @typedef Organization
 * @property {string} [_id] - The unique identifier of the organization
 * @property {OrganizationMeta} [meta]
 */

/**
 * @typedef OrganizationMeta
 * @property {string[]} [ecomm_platform_used] - List of e-commerce platforms
 *   used by the organization
 * @property {string[]} [goals] - List of goals for the organization
 */

/**
 * @typedef OverlayPopupSettingV2
 * @property {string} [dialog_backgroung] - The dialog background color
 * @property {string} [overlay] - The overlay color
 */

/**
 * @typedef PageV2
 * @property {SectionV2[]} [sections]
 * @property {string} [value] - The value of the page.
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
 * @typedef PaletteConfigV2
 * @property {AdvanceSettingV2} [advance_setting]
 * @property {GeneralSettingV2} [general_setting]
 */

/**
 * @typedef PaymentInfo
 * @property {number} [amount] - Amount of payment
 * @property {boolean} [is_paid] - Indicates if the theme is paid
 */

/**
 * @typedef PaymentV2
 * @property {number} [amount] - The amount of the theme
 * @property {boolean} [is_paid] - Whether the theme is paid or not
 */

/**
 * @typedef PhoneNumber
 * @property {boolean} active - Whether the phone number is active or not
 * @property {number} [country_code] - Country code for the phone number
 * @property {string} phone - Phone number
 * @property {boolean} primary - Whether the phone number is the primary contact
 *   number for the user
 * @property {boolean} verified - Whether the phone number has been verified or not
 */

/**
 * @typedef PredicateV2
 * @property {RouteV2} [route]
 * @property {ScreenV2} [screen]
 * @property {UserV2} [user]
 */

/**
 * @typedef Preset
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef PresetV2
 * @property {PageV2[]} [pages]
 */

/**
 * @typedef PropV2
 * @property {string} [category] - The category of the property
 * @property {string} [id] - The ID of the property
 * @property {string} [info] - Additional information about the property
 * @property {string} [label] - The label of the property
 * @property {string} [type] - The type of the property
 */

/**
 * @typedef RangePropV2
 * @property {string} [type] - The type of the property.
 * @property {number} [value] - The value of the range property.
 */

/**
 * @typedef Regular
 * @property {string} [file]
 * @property {string} [name]
 */

/**
 * @typedef RejectionReason
 * @property {string} message - The reason for rejecting the theme
 */

/**
 * @typedef Release
 * @property {string} [notes] - Release notes
 * @property {string} [version] - Release version
 */

/**
 * @typedef ReleaseV2
 * @property {string} [notes] - The release notes of the theme
 * @property {string} [version] - The version of the theme
 */

/**
 * @typedef RouteV2
 * @property {string} [exact_url] - The exact URL of the route.
 * @property {string} [selected] - The selected route.
 */

/**
 * @typedef SaleDiscountSettingV2
 * @property {string} [sale_badge_background] - The sale badge background color
 * @property {string} [sale_badge_text] - The sale badge text color
 * @property {string} [sale_discount_text] - The sale discount text color
 * @property {string} [sale_timer] - The sale timer color
 */

/**
 * @typedef ScreenV2
 * @property {boolean} [desktop] - True if the screen is a desktop device.
 * @property {boolean} [mobile] - True if the screen is a mobile device.
 * @property {boolean} [tablet] - True if the screen is a tablet device.
 */

/**
 * @typedef SectionItem
 * @property {Object[]} [blocks] - Blocks
 * @property {string} [label] - Label for the section
 * @property {string} [name] - Name of the section
 * @property {Object[]} [props]
 */

/**
 * @typedef SectionPresetV2
 * @property {BlockV2[]} [blocks]
 */

/**
 * @typedef SectionPropsV2
 * @property {CheckboxPropV2} [autoplay]
 * @property {TextPropV2} [item_margin]
 * @property {RangePropV2} [slide_interval]
 * @property {TextPropV2} [title]
 */

/**
 * @typedef Sections
 * @property {string} [attributes]
 */

/**
 * @typedef SectionV2
 * @property {BlockV2[]} [blocks]
 * @property {string} [name] - The name of the section.
 * @property {PredicateV2} [predicate]
 * @property {SectionPresetV2} [preset]
 * @property {SectionPropsV2} [props]
 */

/**
 * @typedef SemiBold
 * @property {string} [file]
 * @property {string} [name]
 */

/**
 * @typedef Src
 * @property {string} [link]
 */

/**
 * @typedef StaticConfigV2
 * @property {StaticPropsV2} [props]
 */

/**
 * @typedef StaticPropsV2
 * @property {AuthConfigV2} [auth]
 * @property {ColorsV2} [colors]
 */

/**
 * @typedef TextPropV2
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the text property.
 */

/**
 * @typedef TextSettingV2
 * @property {string} [text_body] - The text body color
 * @property {string} [text_heading] - The text heading color
 * @property {string} [text_label] - The text label color
 * @property {string} [text_secondary] - The secondary text color
 */

/**
 * @typedef ThemeAndUserDetailsResponse
 * @property {MarketplaceTheme[]} [themes] - List of themes
 * @property {ThemeCreator[]} [user] - List of users
 */

/**
 * @typedef ThemeCreateRequest
 * @property {Release} [release]
 * @property {string} [src] - The source URL of the theme file
 */

/**
 * @typedef ThemeCreator
 * @property {string} _id - Unique identifier for the user
 * @property {string} [account_type] - Type of user account
 * @property {boolean} active - Whether the user is active or not
 * @property {Email[]} emails - List of email addresses associated with the user
 * @property {string} [first_name] - First name of the user
 * @property {string} [gender] - Gender of the user (null if not specified)
 * @property {string} [last_name] - Last name of the user
 * @property {PhoneNumber[]} [phone_numbers] - List of phone numbers associated
 *   with the user
 */

/**
 * @typedef ThemeImages
 * @property {string} [desktop] - The URL of the desktop image for the theme.
 * @property {string} [mobile] - The URL of the mobile image for the theme.
 */

/**
 * @typedef ThemeMeta
 * @property {string} [description] - A description of the theme.
 * @property {ThemeImages} [images]
 * @property {string[]} [industry] - A list of industry categories the theme is
 *   suitable for.
 * @property {ThemePayment} [payment]
 * @property {string} [slug] - The slug for the theme.
 */

/**
 * @typedef ThemePayment
 * @property {number} [amount] - The amount to be paid for the theme.
 * @property {boolean} [is_paid] - Whether the theme is a paid theme.
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
 * @typedef ThemeReq
 * @property {string} [marketplace_theme_id] - The ID of the marketplace theme
 *   to apply to the company.
 */

/**
 * @typedef ThemeReviewRequest
 * @property {Object} [dynamic_properties]
 */

/**
 * @typedef ThemeSchema
 * @property {string} [_id] - The unique identifier for the theme.
 * @property {number} [company_id] - The ID of the company that the theme belongs to.
 * @property {string} [created_at] - The timestamp when the theme was created.
 * @property {MarketplaceThemeId} [marketplace_theme_id]
 * @property {ThemeMeta} [meta]
 * @property {string} [name] - The name of the theme.
 * @property {string} [updated_at] - The timestamp when the theme was last updated.
 */

/**
 * @typedef ThemeSettingV2
 * @property {string} [page_background] - The page background color
 * @property {string} [theme_accent] - The theme accent color
 */

/**
 * @typedef ThemesListingResponseSchema
 * @property {ThemesSchema[]} [items]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef ThemeSlugResponse
 * @property {Organization} [organization]
 * @property {MarketplaceTheme} [theme]
 * @property {ThemeCreator[]} [user] - An array of user objects
 */

/**
 * @typedef ThemesSchema
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [applied]
 * @property {boolean} [archived]
 * @property {AssetsSchema} [assets]
 * @property {availableSectionSchema[]} [available_sections]
 * @property {Colors} [colors]
 * @property {Config} [config]
 * @property {string} [created_at]
 * @property {boolean} [customized]
 * @property {Font} [font]
 * @property {Information} [information]
 * @property {string} [parent_theme]
 * @property {string} [parent_theme_version]
 * @property {boolean} [published]
 * @property {Src} [src]
 * @property {Object} [styles]
 * @property {string[]} [tags]
 * @property {string} [updated_at]
 * @property {string} [version]
 */

/**
 * @typedef ThemeUpgradableResponseV2
 * @property {string} [message] - A message describing the theme upgrade status
 * @property {boolean} [upgrade] - Indicates if the theme is upgradable or not
 * @property {ThemeVersionsV2} [versions]
 */

/**
 * @typedef ThemeVersionsV2
 * @property {string} [applied_theme] - The version of the applied theme
 * @property {string} [parent_theme] - The version of the parent theme
 */

/**
 * @typedef UmdJs
 * @property {string} [link]
 * @property {string[]} [links]
 */

/**
 * @typedef UMDJs
 * @property {string[]} [links]
 */

/**
 * @typedef UpdateReviewStatusRequest
 * @property {string} status - The new status of the theme review
 */

/**
 * @typedef UpdateThemeNameRequestBodyV2
 * @property {string} [name] - The new name of the theme.
 */

/**
 * @typedef UpdateThemeRequestBodyV2
 * @property {ConfigV2} [config]
 * @property {FontV2} [font]
 */

/**
 * @typedef UpgradableThemeSchema
 * @property {string} [applied_theme]
 * @property {string} [parent_theme]
 * @property {boolean} [upgrade]
 */

/**
 * @typedef UrlPropV2
 * @property {string} [type] - The type of the property.
 * @property {string} [value] - The value of the URL property.
 */

/**
 * @typedef UserAlertsSettingV2
 * @property {string} [error_background] - The error background color
 * @property {string} [error_text] - The error text color
 * @property {string} [info_background] - The info background color
 * @property {string} [info_text] - The info text color
 * @property {string} [success_background] - The success background color
 * @property {string} [success_text] - The success text color
 */

/**
 * @typedef UserV2
 * @property {boolean} [anonymous] - True if the user is anonymous.
 * @property {boolean} [authenticated] - True if the user is authenticated.
 */

/**
 * @typedef Variants
 * @property {Bold} [bold]
 * @property {Light} [light]
 * @property {Medium} [medium]
 * @property {Regular} [regular]
 * @property {SemiBold} [semi_bold]
 */

/**
 * @typedef Variation
 * @property {string} [color] - Variation color
 * @property {string} [demo_url] - Variation demo URL
 * @property {MarketplaceThemeImages} [images]
 * @property {string} [name] - Variation name
 */

class ThemeApplicationModel {
  /** @returns {AddThemeRequestSchema} */
  static AddThemeRequestSchema() {
    return Joi.object({
      theme_id: Joi.string().allow(""),
    });
  }

  /** @returns {AdvanceSettingV2} */
  static AdvanceSettingV2() {
    return Joi.object({
      divider_stroke_highlight: ThemeApplicationModel.DividerStrokeHighlightSettingV2(),
      overlay_popup: ThemeApplicationModel.OverlayPopupSettingV2(),
      user_alerts: ThemeApplicationModel.UserAlertsSettingV2(),
    });
  }

  /** @returns {AllAvailablePageSchema} */
  static AllAvailablePageSchema() {
    return Joi.object({
      pages: Joi.array().items(ThemeApplicationModel.AvailablePageSchema()),
    });
  }

  /** @returns {AllThemesApplicationResponseV2} */
  static AllThemesApplicationResponseV2() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      applied: Joi.boolean(),
      assets: ThemeApplicationModel.AssetsV2(),
      available_sections: Joi.array().items(
        ThemeApplicationModel.SectionItem()
      ),
      config: ThemeApplicationModel.ConfigV2(),
      created_at: Joi.string().allow(""),
      font: ThemeApplicationModel.FontV2(),
      is_private: Joi.boolean(),
      marketplace_theme_id: Joi.string().allow(""),
      meta: ThemeApplicationModel.MetaV2(),
      name: Joi.string().allow(""),
      styles: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      template_theme_id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {ApplyThemeRequestV2} */
  static ApplyThemeRequestV2() {
    return Joi.object({
      marketplace_theme_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplyThemeResponseV2} */
  static ApplyThemeResponseV2() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      applied: Joi.boolean(),
      config: ThemeApplicationModel.ConfigV2(),
      created_at: Joi.string().allow(""),
      font: ThemeApplicationModel.FontV2(),
      is_private: Joi.boolean(),
      marketplace_theme_id: Joi.string().allow(""),
      meta: ThemeApplicationModel.MetaV2(),
      name: Joi.string().allow(""),
      styles: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      template_theme_id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {ArrayOfMarketplaceTheme} */
  static ArrayOfMarketplaceTheme() {
    return Joi.object({
      body: Joi.array().items(ThemeApplicationModel.MarketplaceTheme()),
    });
  }

  /** @returns {AssetsSchema} */
  static AssetsSchema() {
    return Joi.object({
      common_js: ThemeApplicationModel.CommonJs(),
      css: ThemeApplicationModel.Css(),
      umd_js: ThemeApplicationModel.UmdJs(),
    });
  }

  /** @returns {AssetsV2} */
  static AssetsV2() {
    return Joi.object({
      common_js: ThemeApplicationModel.CommonJS(),
      css: ThemeApplicationModel.CSS(),
      umd_js: ThemeApplicationModel.UMDJs(),
    });
  }

  /** @returns {AuthConfigV2} */
  static AuthConfigV2() {
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

  /** @returns {availableSectionSchema} */
  static availableSectionSchema() {
    return Joi.object({
      blocks: Joi.array().items(ThemeApplicationModel.Blocks()),
      label: Joi.string().allow(""),
      name: Joi.string().allow(""),
      props: Joi.array().items(ThemeApplicationModel.BlocksProps()),
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

  /** @returns {BlitzkriegNotFoundSchema} */
  static BlitzkriegNotFoundSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {BlockPropsV2} */
  static BlockPropsV2() {
    return Joi.object({
      image: ThemeApplicationModel.ImagePickerPropV2(),
      slide_link: ThemeApplicationModel.UrlPropV2(),
    });
  }

  /** @returns {Blocks} */
  static Blocks() {
    return Joi.object({
      name: Joi.string().allow(""),
      props: Joi.array().items(ThemeApplicationModel.BlocksProps()),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {BlocksProps} */
  static BlocksProps() {
    return Joi.object({
      id: Joi.string().allow(""),
      label: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {BlockV2} */
  static BlockV2() {
    return Joi.object({
      name: Joi.string().allow(""),
      props: ThemeApplicationModel.BlockPropsV2(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Bold} */
  static Bold() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ButtonSettingV2} */
  static ButtonSettingV2() {
    return Joi.object({
      button_link: Joi.string().allow(""),
      button_primary: Joi.string().allow(""),
      button_secondary: Joi.string().allow(""),
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

  /** @returns {CheckboxPropV2} */
  static CheckboxPropV2() {
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

  /** @returns {ColorsV2} */
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

  /** @returns {Comments} */
  static Comments() {
    return Joi.object({
      developer_remark: Joi.string().allow(""),
      reviewer_feedback: Joi.string().allow(""),
    });
  }

  /** @returns {CommonJs} */
  static CommonJs() {
    return Joi.object({
      link: Joi.string().allow(""),
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
      current: Joi.string().allow(""),
      global_schema: ThemeApplicationModel.GlobalSchema(),
      list: Joi.array().items(ThemeApplicationModel.ListSchemaItem()),
      preset: ThemeApplicationModel.Preset(),
    });
  }

  /** @returns {ConfigPage} */
  static ConfigPage() {
    return Joi.object({
      page: Joi.string().allow(""),
      settings: Joi.any(),
    });
  }

  /** @returns {ConfigurationV2} */
  static ConfigurationV2() {
    return Joi.object({
      custom: ThemeApplicationModel.CustomConfigV2(),
      global_config: ThemeApplicationModel.GlobalConfigV2(),
      name: Joi.string().allow(""),
      page: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ConfigV2} */
  static ConfigV2() {
    return Joi.object({
      current: Joi.string().allow("").required(),
      global_schema: ThemeApplicationModel.GlobalSchemaV2(),
      list: Joi.array()
        .items(ThemeApplicationModel.ConfigurationV2())
        .required(),
      preset: ThemeApplicationModel.PresetV2(),
    });
  }

  /** @returns {ContactInfo} */
  static ContactInfo() {
    return Joi.object({
      developer_contact: Joi.array().items(Joi.string().allow("")),
      seller_contact: Joi.string().allow(""),
    });
  }

  /** @returns {Css} */
  static Css() {
    return Joi.object({
      link: Joi.string().allow(""),
      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CSS} */
  static CSS() {
    return Joi.object({
      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Custom} */
  static Custom() {
    return Joi.object({
      props: Joi.any(),
    });
  }

  /** @returns {CustomConfigV2} */
  static CustomConfigV2() {
    return Joi.object({
      props: ThemeApplicationModel.CustomPropsV2(),
    });
  }

  /** @returns {CustomPropsV2} */
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

  /** @returns {DividerStrokeHighlightSettingV2} */
  static DividerStrokeHighlightSettingV2() {
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

  /** @returns {Email} */
  static Email() {
    return Joi.object({
      active: Joi.boolean().required(),
      email: Joi.string().allow("").required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
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
      list: Joi.array().items(ThemeApplicationModel.FeatureItem()),
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
      family: Joi.string().allow(""),
      variants: ThemeApplicationModel.Variants(),
    });
  }

  /** @returns {FontsSchema} */
  static FontsSchema() {
    return Joi.object({
      items: ThemeApplicationModel.FontsSchemaItems(),
      kind: Joi.string().allow(""),
    });
  }

  /** @returns {FontsSchemaItems} */
  static FontsSchemaItems() {
    return Joi.object({
      category: Joi.string().allow(""),
      family: Joi.string().allow(""),
      files: ThemeApplicationModel.FontsSchemaItemsFiles(),
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

  /** @returns {FontV2} */
  static FontV2() {
    return Joi.object({
      family: Joi.string().allow("").required(),
      variants: ThemeApplicationModel.FontVariantsV2().required(),
    });
  }

  /** @returns {FontVariantsV2} */
  static FontVariantsV2() {
    return Joi.object({
      bold: ThemeApplicationModel.FontVariantV2(),
      light: ThemeApplicationModel.FontVariantV2(),
      medium: ThemeApplicationModel.FontVariantV2(),
      regular: ThemeApplicationModel.FontVariantV2(),
      semi_bold: ThemeApplicationModel.FontVariantV2(),
    });
  }

  /** @returns {FontVariantV2} */
  static FontVariantV2() {
    return Joi.object({
      file: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {FooterSettingV2} */
  static FooterSettingV2() {
    return Joi.object({
      footer_background: Joi.string().allow(""),
      footer_body_text: Joi.string().allow(""),
      footer_bottom_background: Joi.string().allow(""),
      footer_heading_text: Joi.string().allow(""),
      footer_icon: Joi.string().allow(""),
    });
  }

  /** @returns {GeneralSettingV2} */
  static GeneralSettingV2() {
    return Joi.object({
      button: ThemeApplicationModel.ButtonSettingV2(),
      footer: ThemeApplicationModel.FooterSettingV2(),
      header: ThemeApplicationModel.HeaderSettingV2(),
      sale_discount: ThemeApplicationModel.SaleDiscountSettingV2(),
      text: ThemeApplicationModel.TextSettingV2(),
      theme: ThemeApplicationModel.ThemeSettingV2(),
    });
  }

  /** @returns {GlobalConfigV2} */
  static GlobalConfigV2() {
    return Joi.object({
      auth: ThemeApplicationModel.AuthConfigV2(),
      palette: ThemeApplicationModel.PaletteConfigV2(),
      statics: ThemeApplicationModel.StaticConfigV2(),
    });
  }

  /** @returns {GlobalSchema} */
  static GlobalSchema() {
    return Joi.object({
      props: Joi.array().items(ThemeApplicationModel.GlobalSchemaProps()),
    });
  }

  /** @returns {GlobalSchemaProps} */
  static GlobalSchemaProps() {
    return Joi.object({
      category: Joi.string().allow(""),
      id: Joi.string().allow(""),
      label: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {GlobalSchemaV2} */
  static GlobalSchemaV2() {
    return Joi.object({
      props: Joi.array().items(ThemeApplicationModel.PropV2()),
    });
  }

  /** @returns {HeaderSettingV2} */
  static HeaderSettingV2() {
    return Joi.object({
      header_background: Joi.string().allow(""),
      header_icon: Joi.string().allow(""),
      header_nav: Joi.string().allow(""),
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

  /** @returns {ImagePickerPropV2} */
  static ImagePickerPropV2() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {Images} */
  static Images() {
    return Joi.object({
      android: Joi.array().items(Joi.string().allow("")),
      desktop: Joi.array().items(Joi.string().allow("")),
      ios: Joi.array().items(Joi.string().allow("")),
      thumbnail: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ImagesV2} */
  static ImagesV2() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {Information} */
  static Information() {
    return Joi.object({
      description: Joi.string().allow(""),
      features: Joi.array().items(Joi.string().allow("")),
      images: ThemeApplicationModel.Images(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Light} */
  static Light() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ListSchemaItem} */
  static ListSchemaItem() {
    return Joi.object({
      global_config: Joi.any(),
      name: Joi.string().allow(""),
      page: Joi.array().items(ThemeApplicationModel.ConfigPage()),
    });
  }

  /** @returns {MarketplaceTheme} */
  static MarketplaceTheme() {
    return Joi.object({
      _id: Joi.string().allow(""),
      carousel: Joi.array().items(ThemeApplicationModel.CarouselItem()),
      catalog_size: ThemeApplicationModel.CatalogSize(),
      comments: ThemeApplicationModel.Comments(),
      contact: ThemeApplicationModel.ContactInfo(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      documentation: ThemeApplicationModel.Documentation(),
      explore: ThemeApplicationModel.ExploreInfo(),
      features: Joi.array().items(ThemeApplicationModel.Feature()),
      highlights: Joi.array().items(ThemeApplicationModel.Highlight()),
      images: ThemeApplicationModel.MarketplaceThemeImages(),
      industry: Joi.array().items(Joi.string().allow("")),
      is_default: Joi.boolean(),
      is_update: Joi.boolean(),
      name: Joi.string().allow(""),
      organization_id: Joi.string().allow(""),
      payment: ThemeApplicationModel.PaymentInfo(),
      release: ThemeApplicationModel.Release(),
      slug: Joi.string().allow(""),
      src: Joi.string().allow(""),
      status: Joi.string().allow(""),
      step: Joi.number(),
      tagline: Joi.string().allow(""),
      template_theme_id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      variations: Joi.array().items(ThemeApplicationModel.Variation()),
    });
  }

  /** @returns {MarketplaceThemeId} */
  static MarketplaceThemeId() {
    return Joi.object({
      _id: Joi.string().allow(""),
      is_default: Joi.boolean(),
    });
  }

  /** @returns {MarketplaceThemeImages} */
  static MarketplaceThemeImages() {
    return Joi.object({
      desktop: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
    });
  }

  /** @returns {MarketplaceThemeResponse} */
  static MarketplaceThemeResponse() {
    return Joi.object({
      body: ThemeApplicationModel.MarketplaceThemeResponseBody(),
      status: Joi.number(),
    });
  }

  /** @returns {MarketplaceThemeResponseBody} */
  static MarketplaceThemeResponseBody() {
    return Joi.object({
      page: ThemeApplicationModel.PaginationSchema(),
      themes: Joi.array().items(ThemeApplicationModel.MarketplaceTheme()),
    });
  }

  /** @returns {Medium} */
  static Medium() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {MetaV2} */
  static MetaV2() {
    return Joi.object({
      description: Joi.string().allow(""),
      images: ThemeApplicationModel.ImagesV2(),
      industry: Joi.array().items(Joi.string().allow("")),
      name: Joi.string().allow(""),
      payment: ThemeApplicationModel.PaymentV2(),
      release: ThemeApplicationModel.ReleaseV2(),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Organization} */
  static Organization() {
    return Joi.object({
      _id: Joi.string().allow(""),
      meta: ThemeApplicationModel.OrganizationMeta(),
    });
  }

  /** @returns {OrganizationMeta} */
  static OrganizationMeta() {
    return Joi.object({
      ecomm_platform_used: Joi.array().items(Joi.string().allow("")),
      goals: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {OverlayPopupSettingV2} */
  static OverlayPopupSettingV2() {
    return Joi.object({
      dialog_backgroung: Joi.string().allow(""),
      overlay: Joi.string().allow(""),
    });
  }

  /** @returns {PageV2} */
  static PageV2() {
    return Joi.object({
      sections: Joi.array().items(ThemeApplicationModel.SectionV2()),
      value: Joi.string().allow(""),
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

  /** @returns {PaletteConfigV2} */
  static PaletteConfigV2() {
    return Joi.object({
      advance_setting: ThemeApplicationModel.AdvanceSettingV2(),
      general_setting: ThemeApplicationModel.GeneralSettingV2(),
    });
  }

  /** @returns {PaymentInfo} */
  static PaymentInfo() {
    return Joi.object({
      amount: Joi.number(),
      is_paid: Joi.boolean(),
    });
  }

  /** @returns {PaymentV2} */
  static PaymentV2() {
    return Joi.object({
      amount: Joi.number(),
      is_paid: Joi.boolean(),
    });
  }

  /** @returns {PhoneNumber} */
  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean().required(),
      country_code: Joi.number(),
      phone: Joi.string().allow("").required(),
      primary: Joi.boolean().required(),
      verified: Joi.boolean().required(),
    });
  }

  /** @returns {PredicateV2} */
  static PredicateV2() {
    return Joi.object({
      route: ThemeApplicationModel.RouteV2(),
      screen: ThemeApplicationModel.ScreenV2(),
      user: ThemeApplicationModel.UserV2(),
    });
  }

  /** @returns {Preset} */
  static Preset() {
    return Joi.object({
      pages: Joi.array().items(ThemeApplicationModel.AvailablePageSchema()),
    });
  }

  /** @returns {PresetV2} */
  static PresetV2() {
    return Joi.object({
      pages: Joi.array().items(ThemeApplicationModel.PageV2()),
    });
  }

  /** @returns {PropV2} */
  static PropV2() {
    return Joi.object({
      category: Joi.string().allow(""),
      id: Joi.string().allow(""),
      info: Joi.string().allow(""),
      label: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {RangePropV2} */
  static RangePropV2() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {Regular} */
  static Regular() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {RejectionReason} */
  static RejectionReason() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {Release} */
  static Release() {
    return Joi.object({
      notes: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {ReleaseV2} */
  static ReleaseV2() {
    return Joi.object({
      notes: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {RouteV2} */
  static RouteV2() {
    return Joi.object({
      exact_url: Joi.string().allow(""),
      selected: Joi.string().allow(""),
    });
  }

  /** @returns {SaleDiscountSettingV2} */
  static SaleDiscountSettingV2() {
    return Joi.object({
      sale_badge_background: Joi.string().allow(""),
      sale_badge_text: Joi.string().allow(""),
      sale_discount_text: Joi.string().allow(""),
      sale_timer: Joi.string().allow(""),
    });
  }

  /** @returns {ScreenV2} */
  static ScreenV2() {
    return Joi.object({
      desktop: Joi.boolean(),
      mobile: Joi.boolean(),
      tablet: Joi.boolean(),
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

  /** @returns {SectionPresetV2} */
  static SectionPresetV2() {
    return Joi.object({
      blocks: Joi.array().items(ThemeApplicationModel.BlockV2()),
    });
  }

  /** @returns {SectionPropsV2} */
  static SectionPropsV2() {
    return Joi.object({
      autoplay: ThemeApplicationModel.CheckboxPropV2(),
      item_margin: ThemeApplicationModel.TextPropV2(),
      slide_interval: ThemeApplicationModel.RangePropV2(),
      title: ThemeApplicationModel.TextPropV2(),
    });
  }

  /** @returns {Sections} */
  static Sections() {
    return Joi.object({
      attributes: Joi.string().allow(""),
    });
  }

  /** @returns {SectionV2} */
  static SectionV2() {
    return Joi.object({
      blocks: Joi.array().items(ThemeApplicationModel.BlockV2()),
      name: Joi.string().allow(""),
      predicate: ThemeApplicationModel.PredicateV2(),
      preset: ThemeApplicationModel.SectionPresetV2(),
      props: ThemeApplicationModel.SectionPropsV2(),
    });
  }

  /** @returns {SemiBold} */
  static SemiBold() {
    return Joi.object({
      file: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Src} */
  static Src() {
    return Joi.object({
      link: Joi.string().allow(""),
    });
  }

  /** @returns {StaticConfigV2} */
  static StaticConfigV2() {
    return Joi.object({
      props: ThemeApplicationModel.StaticPropsV2(),
    });
  }

  /** @returns {StaticPropsV2} */
  static StaticPropsV2() {
    return Joi.object({
      auth: ThemeApplicationModel.AuthConfigV2(),
      colors: ThemeApplicationModel.ColorsV2(),
    });
  }

  /** @returns {TextPropV2} */
  static TextPropV2() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {TextSettingV2} */
  static TextSettingV2() {
    return Joi.object({
      text_body: Joi.string().allow(""),
      text_heading: Joi.string().allow(""),
      text_label: Joi.string().allow(""),
      text_secondary: Joi.string().allow(""),
    });
  }

  /** @returns {ThemeAndUserDetailsResponse} */
  static ThemeAndUserDetailsResponse() {
    return Joi.object({
      themes: Joi.array().items(ThemeApplicationModel.MarketplaceTheme()),
      user: Joi.array().items(ThemeApplicationModel.ThemeCreator()),
    });
  }

  /** @returns {ThemeCreateRequest} */
  static ThemeCreateRequest() {
    return Joi.object({
      release: ThemeApplicationModel.Release(),
      src: Joi.string().allow(""),
    });
  }

  /** @returns {ThemeCreator} */
  static ThemeCreator() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      account_type: Joi.string().allow(""),
      active: Joi.boolean().required(),
      emails: Joi.array().items(ThemeApplicationModel.Email()).required(),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow("").allow(null),
      last_name: Joi.string().allow(""),
      phone_numbers: Joi.array().items(ThemeApplicationModel.PhoneNumber()),
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
      images: ThemeApplicationModel.ThemeImages(),
      industry: Joi.array().items(Joi.string().allow("")),
      payment: ThemeApplicationModel.ThemePayment(),
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

  /** @returns {ThemeReq} */
  static ThemeReq() {
    return Joi.object({
      marketplace_theme_id: Joi.string().allow(""),
    });
  }

  /** @returns {ThemeReviewRequest} */
  static ThemeReviewRequest() {
    return Joi.object({
      dynamic_properties: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {ThemeSchema} */
  static ThemeSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.number(),
      created_at: Joi.string().allow(""),
      marketplace_theme_id: ThemeApplicationModel.MarketplaceThemeId(),
      meta: ThemeApplicationModel.ThemeMeta(),
      name: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {ThemeSettingV2} */
  static ThemeSettingV2() {
    return Joi.object({
      page_background: Joi.string().allow(""),
      theme_accent: Joi.string().allow(""),
    });
  }

  /** @returns {ThemesListingResponseSchema} */
  static ThemesListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(ThemeApplicationModel.ThemesSchema()),
      page: ThemeApplicationModel.PaginationSchema(),
    });
  }

  /** @returns {ThemeSlugResponse} */
  static ThemeSlugResponse() {
    return Joi.object({
      organization: ThemeApplicationModel.Organization(),
      theme: ThemeApplicationModel.MarketplaceTheme(),
      user: Joi.array().items(ThemeApplicationModel.ThemeCreator()),
    });
  }

  /** @returns {ThemesSchema} */
  static ThemesSchema() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      applied: Joi.boolean(),
      archived: Joi.boolean(),
      assets: ThemeApplicationModel.AssetsSchema(),
      available_sections: Joi.array().items(
        ThemeApplicationModel.availableSectionSchema()
      ),
      colors: ThemeApplicationModel.Colors(),
      config: ThemeApplicationModel.Config(),
      created_at: Joi.string().allow(""),
      customized: Joi.boolean(),
      font: ThemeApplicationModel.Font(),
      information: ThemeApplicationModel.Information(),
      parent_theme: Joi.string().allow(""),
      parent_theme_version: Joi.string().allow(""),
      published: Joi.boolean(),
      src: ThemeApplicationModel.Src(),
      styles: Joi.any(),
      tags: Joi.array().items(Joi.string().allow("")),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {ThemeUpgradableResponseV2} */
  static ThemeUpgradableResponseV2() {
    return Joi.object({
      message: Joi.string().allow(""),
      upgrade: Joi.boolean(),
      versions: ThemeApplicationModel.ThemeVersionsV2(),
    });
  }

  /** @returns {ThemeVersionsV2} */
  static ThemeVersionsV2() {
    return Joi.object({
      applied_theme: Joi.string().allow(""),
      parent_theme: Joi.string().allow(""),
    });
  }

  /** @returns {UmdJs} */
  static UmdJs() {
    return Joi.object({
      link: Joi.string().allow(""),
      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {UMDJs} */
  static UMDJs() {
    return Joi.object({
      links: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {UpdateReviewStatusRequest} */
  static UpdateReviewStatusRequest() {
    return Joi.object({
      status: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdateThemeNameRequestBodyV2} */
  static UpdateThemeNameRequestBodyV2() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateThemeRequestBodyV2} */
  static UpdateThemeRequestBodyV2() {
    return Joi.object({
      config: ThemeApplicationModel.ConfigV2(),
      font: ThemeApplicationModel.FontV2(),
    });
  }

  /** @returns {UpgradableThemeSchema} */
  static UpgradableThemeSchema() {
    return Joi.object({
      applied_theme: Joi.string().allow(""),
      parent_theme: Joi.string().allow(""),
      upgrade: Joi.boolean(),
    });
  }

  /** @returns {UrlPropV2} */
  static UrlPropV2() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {UserAlertsSettingV2} */
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

  /** @returns {UserV2} */
  static UserV2() {
    return Joi.object({
      anonymous: Joi.boolean(),
      authenticated: Joi.boolean(),
    });
  }

  /** @returns {Variants} */
  static Variants() {
    return Joi.object({
      bold: ThemeApplicationModel.Bold(),
      light: ThemeApplicationModel.Light(),
      medium: ThemeApplicationModel.Medium(),
      regular: ThemeApplicationModel.Regular(),
      semi_bold: ThemeApplicationModel.SemiBold(),
    });
  }

  /** @returns {Variation} */
  static Variation() {
    return Joi.object({
      color: Joi.string().allow(""),
      demo_url: Joi.string().allow(""),
      images: ThemeApplicationModel.MarketplaceThemeImages(),
      name: Joi.string().allow(""),
    });
  }
}
module.exports = ThemeApplicationModel;
