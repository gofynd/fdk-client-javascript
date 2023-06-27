export = ThemePlatformModel;
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
declare class ThemePlatformModel {
}
declare namespace ThemePlatformModel {
    export { AddThemeRequestSchema, AdvanceSettingV2, AllAvailablePageSchema, AllThemesApplicationResponseV2, ApplyThemeRequestV2, ApplyThemeResponseV2, ArrayOfMarketplaceTheme, AssetsSchema, AssetsV2, AuthConfigV2, AvailablePagePredicate, AvailablePageRoutePredicate, AvailablePageSchema, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageUserPredicate, availableSectionSchema, BlitzkriegApiErrorSchema, BlitzkriegInternalServerErrorSchema, BlitzkriegNotFoundSchema, BlockPropsV2, Blocks, BlocksProps, BlockV2, Bold, ButtonSettingV2, CarouselItem, CatalogSize, CheckboxPropV2, Colors, ColorsV2, Comments, CommonJs, CommonJS, Config, ConfigPage, ConfigurationV2, ConfigV2, ContactInfo, Css, CSS, Custom, CustomConfigV2, CustomPropsV2, DividerStrokeHighlightSettingV2, Documentation, Email, ExploreInfo, Feature, FeatureItem, Font, FontsSchema, FontsSchemaItems, FontsSchemaItemsFiles, FontV2, FontVariantsV2, FontVariantV2, FooterSettingV2, GeneralSettingV2, GlobalConfigV2, GlobalSchema, GlobalSchemaProps, GlobalSchemaV2, HeaderSettingV2, Highlight, ImagePickerPropV2, Images, ImagesV2, Information, Light, ListSchemaItem, MarketplaceTheme, MarketplaceThemeId, MarketplaceThemeImages, MarketplaceThemeResponse, MarketplaceThemeResponseBody, Medium, MetaV2, Organization, OrganizationMeta, OverlayPopupSettingV2, PageV2, PaginationSchema, PaletteConfigV2, PaymentInfo, PaymentV2, PhoneNumber, PredicateV2, Preset, PresetV2, PropV2, RangePropV2, Regular, RejectionReason, Release, ReleaseV2, RouteV2, SaleDiscountSettingV2, ScreenV2, SectionItem, SectionPresetV2, SectionPropsV2, Sections, SectionV2, SemiBold, Src, StaticConfigV2, StaticPropsV2, TextPropV2, TextSettingV2, ThemeAndUserDetailsResponse, ThemeCreateRequest, ThemeCreator, ThemeImages, ThemeMeta, ThemePayment, ThemeRejectionReasons, ThemeReq, ThemeReviewRequest, ThemeSchema, ThemeSettingV2, ThemesListingResponseSchema, ThemeSlugResponse, ThemesSchema, ThemeUpgradableResponseV2, ThemeVersionsV2, UmdJs, UMDJs, UpdateReviewStatusRequest, UpdateThemeNameRequestBodyV2, UpdateThemeRequestBodyV2, UpgradableThemeSchema, UrlPropV2, UserAlertsSettingV2, UserV2, Variants, Variation };
}
/** @returns {AddThemeRequestSchema} */
declare function AddThemeRequestSchema(): AddThemeRequestSchema;
type AddThemeRequestSchema = {
    theme_id?: string;
};
/** @returns {AdvanceSettingV2} */
declare function AdvanceSettingV2(): AdvanceSettingV2;
type AdvanceSettingV2 = {
    divider_stroke_highlight?: DividerStrokeHighlightSettingV2;
    overlay_popup?: OverlayPopupSettingV2;
    user_alerts?: UserAlertsSettingV2;
};
/** @returns {AllAvailablePageSchema} */
declare function AllAvailablePageSchema(): AllAvailablePageSchema;
type AllAvailablePageSchema = {
    pages?: AvailablePageSchema[];
};
/** @returns {AllThemesApplicationResponseV2} */
declare function AllThemesApplicationResponseV2(): AllThemesApplicationResponseV2;
type AllThemesApplicationResponseV2 = {
    /**
     * - The unique identifier of the theme
     */
    _id?: string;
    /**
     * - The ID of the application
     */
    application_id?: string;
    /**
     * - Whether the theme has been applied or not
     */
    applied?: boolean;
    assets?: AssetsV2;
    /**
     * - Available sections information
     */
    available_sections?: SectionItem[];
    config?: ConfigV2;
    /**
     * - The creation timestamp of the theme
     */
    created_at?: string;
    font?: FontV2;
    /**
     * - Whether the theme is private or not
     */
    is_private?: boolean;
    /**
     * - The ID of the theme in the marketplace
     */
    marketplace_theme_id?: string;
    meta?: MetaV2;
    /**
     * - The name of the theme
     */
    name?: string;
    /**
     * - The styles associated with the theme
     */
    styles?: any;
    /**
     * - An array of tags associated with the theme
     */
    tags?: string[];
    /**
     * - The ID of the template theme
     */
    template_theme_id?: string;
    /**
     * - The last update timestamp of the theme
     */
    updated_at?: string;
    /**
     * - The version of the theme
     */
    version?: string;
};
/** @returns {ApplyThemeRequestV2} */
declare function ApplyThemeRequestV2(): ApplyThemeRequestV2;
type ApplyThemeRequestV2 = {
    /**
     * - The ID of the theme to be applied
     */
    marketplace_theme_id: string;
};
/** @returns {ApplyThemeResponseV2} */
declare function ApplyThemeResponseV2(): ApplyThemeResponseV2;
type ApplyThemeResponseV2 = {
    /**
     * - The unique identifier of the theme
     */
    _id?: string;
    /**
     * - The ID of the application
     */
    application_id?: string;
    /**
     * - Whether the theme has been applied or not
     */
    applied?: boolean;
    config?: ConfigV2;
    /**
     * - The creation timestamp of the theme
     */
    created_at?: string;
    font?: FontV2;
    /**
     * - Whether the theme is private or not
     */
    is_private?: boolean;
    /**
     * - The ID of the theme in the marketplace
     */
    marketplace_theme_id?: string;
    meta?: MetaV2;
    /**
     * - The name of the theme
     */
    name?: string;
    /**
     * - The styles associated with the theme
     */
    styles?: any;
    /**
     * - An array of tags associated with the theme
     */
    tags?: string[];
    /**
     * - The ID of the template theme
     */
    template_theme_id?: string;
    /**
     * - The last update timestamp of the theme
     */
    updated_at?: string;
    /**
     * - The version of the theme
     */
    version?: string;
};
/** @returns {ArrayOfMarketplaceTheme} */
declare function ArrayOfMarketplaceTheme(): ArrayOfMarketplaceTheme;
type ArrayOfMarketplaceTheme = {
    /**
     * - An array containing the latest version of theme
     */
    body?: MarketplaceTheme[];
};
/** @returns {AssetsSchema} */
declare function AssetsSchema(): AssetsSchema;
type AssetsSchema = {
    common_js?: CommonJs;
    css?: Css;
    umd_js?: UmdJs;
};
/** @returns {AssetsV2} */
declare function AssetsV2(): AssetsV2;
type AssetsV2 = {
    common_js?: CommonJS;
    css?: CSS;
    umd_js?: UMDJs;
};
/** @returns {AuthConfigV2} */
declare function AuthConfigV2(): AuthConfigV2;
type AuthConfigV2 = {
    /**
     * - Whether to show footer authentication or not
     */
    show_footer_auth?: boolean;
    /**
     * - Whether to show header authentication or not
     */
    show_header_auth?: boolean;
};
/** @returns {AvailablePagePredicate} */
declare function AvailablePagePredicate(): AvailablePagePredicate;
type AvailablePagePredicate = {
    route?: AvailablePageRoutePredicate;
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
};
/** @returns {AvailablePageRoutePredicate} */
declare function AvailablePageRoutePredicate(): AvailablePageRoutePredicate;
type AvailablePageRoutePredicate = {
    exact_url?: string;
    query?: any;
    selected?: string;
};
/** @returns {AvailablePageSchema} */
declare function AvailablePageSchema(): AvailablePageSchema;
type AvailablePageSchema = {
    _id?: string;
    path?: string;
    props?: any[];
    sections?: AvailablePageSchemaSections[];
    sections_meta?: AvailablePageSectionMetaAttributes[];
    seo?: AvailablePageSeo;
    text?: string;
    theme?: string;
    type?: string;
    value?: string;
};
/** @returns {AvailablePageSchemaSections} */
declare function AvailablePageSchemaSections(): AvailablePageSchemaSections;
type AvailablePageSchemaSections = {
    blocks?: any[];
    label?: string;
    name?: string;
    predicate?: AvailablePagePredicate;
    preset?: any;
    props?: any;
};
/** @returns {AvailablePageScreenPredicate} */
declare function AvailablePageScreenPredicate(): AvailablePageScreenPredicate;
type AvailablePageScreenPredicate = {
    desktop?: boolean;
    mobile?: boolean;
    tablet?: boolean;
};
/** @returns {AvailablePageSectionMetaAttributes} */
declare function AvailablePageSectionMetaAttributes(): AvailablePageSectionMetaAttributes;
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
/** @returns {AvailablePageSeo} */
declare function AvailablePageSeo(): AvailablePageSeo;
type AvailablePageSeo = {
    _id?: string;
    description?: string;
    title?: string;
};
/** @returns {AvailablePageUserPredicate} */
declare function AvailablePageUserPredicate(): AvailablePageUserPredicate;
type AvailablePageUserPredicate = {
    anonymous?: boolean;
    authenticated?: boolean;
};
/** @returns {availableSectionSchema} */
declare function availableSectionSchema(): availableSectionSchema;
type availableSectionSchema = {
    blocks?: Blocks[];
    label?: string;
    name?: string;
    props?: BlocksProps[];
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
/** @returns {BlitzkriegNotFoundSchema} */
declare function BlitzkriegNotFoundSchema(): BlitzkriegNotFoundSchema;
type BlitzkriegNotFoundSchema = {
    message?: string;
};
/** @returns {BlockPropsV2} */
declare function BlockPropsV2(): BlockPropsV2;
type BlockPropsV2 = {
    image?: ImagePickerPropV2;
    slide_link?: UrlPropV2;
};
/** @returns {Blocks} */
declare function Blocks(): Blocks;
type Blocks = {
    name?: string;
    props?: BlocksProps[];
    type?: string;
};
/** @returns {BlocksProps} */
declare function BlocksProps(): BlocksProps;
type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
/** @returns {BlockV2} */
declare function BlockV2(): BlockV2;
type BlockV2 = {
    /**
     * - The name of the block.
     */
    name?: string;
    props?: BlockPropsV2;
    /**
     * - The type of the block.
     */
    type?: string;
};
/** @returns {Bold} */
declare function Bold(): Bold;
type Bold = {
    file?: string;
    name?: string;
};
/** @returns {ButtonSettingV2} */
declare function ButtonSettingV2(): ButtonSettingV2;
type ButtonSettingV2 = {
    /**
     * - The button link color
     */
    button_link?: string;
    /**
     * - The primary button color
     */
    button_primary?: string;
    /**
     * - The secondary button color
     */
    button_secondary?: string;
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
/** @returns {CatalogSize} */
declare function CatalogSize(): CatalogSize;
type CatalogSize = {
    /**
     * - Maximum catalog size
     */
    max?: number;
    /**
     * - Minimum catalog size
     */
    min?: number;
};
/** @returns {CheckboxPropV2} */
declare function CheckboxPropV2(): CheckboxPropV2;
type CheckboxPropV2 = {
    /**
     * - The type of the property.
     */
    type?: string;
    /**
     * - The value of the checkbox property.
     */
    value?: boolean;
};
/** @returns {Colors} */
declare function Colors(): Colors;
type Colors = {
    accent_color?: string;
    bg_color?: string;
    button_secondary_color?: string;
    link_color?: string;
    primary_color?: string;
    secondary_color?: string;
};
/** @returns {ColorsV2} */
declare function ColorsV2(): ColorsV2;
type ColorsV2 = {
    /**
     * - The accent color
     */
    accent_color?: string;
    /**
     * - The background color
     */
    bg_color?: string;
    /**
     * - The secondary button color
     */
    button_secondary_color?: string;
    /**
     * - The link color
     */
    link_color?: string;
    /**
     * - The primary color
     */
    primary_color?: string;
    /**
     * - The secondary color
     */
    secondary_color?: string;
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
/** @returns {CommonJs} */
declare function CommonJs(): CommonJs;
type CommonJs = {
    link?: string;
};
/** @returns {CommonJS} */
declare function CommonJS(): CommonJS;
type CommonJS = {
    link?: string;
};
/** @returns {Config} */
declare function Config(): Config;
type Config = {
    current?: string;
    global_schema?: GlobalSchema;
    list?: ListSchemaItem[];
    preset?: Preset;
};
/** @returns {ConfigPage} */
declare function ConfigPage(): ConfigPage;
type ConfigPage = {
    page?: string;
    settings?: any;
};
/** @returns {ConfigurationV2} */
declare function ConfigurationV2(): ConfigurationV2;
type ConfigurationV2 = {
    custom?: CustomConfigV2;
    global_config?: GlobalConfigV2;
    /**
     * - The name of the configuration
     */
    name?: string;
    /**
     * - An array of pages
     */
    page?: string[];
};
/** @returns {ConfigV2} */
declare function ConfigV2(): ConfigV2;
type ConfigV2 = {
    /**
     * - The current configuration
     */
    current: string;
    global_schema?: GlobalSchemaV2;
    /**
     * - A list of configurations
     */
    list: ConfigurationV2[];
    preset?: PresetV2;
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
/** @returns {Css} */
declare function Css(): Css;
type Css = {
    link?: string;
    links?: string[];
};
/** @returns {CSS} */
declare function CSS(): CSS;
type CSS = {
    links?: string[];
};
/** @returns {Custom} */
declare function Custom(): Custom;
type Custom = {
    props?: any;
};
/** @returns {CustomConfigV2} */
declare function CustomConfigV2(): CustomConfigV2;
type CustomConfigV2 = {
    props?: CustomPropsV2;
};
/** @returns {CustomPropsV2} */
declare function CustomPropsV2(): CustomPropsV2;
type CustomPropsV2 = {
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
     * - The primary button color
     */
    button_primary_color?: string;
    /**
     * - The primary button label color
     */
    button_primary_label_color?: string;
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
     * - The tertiary button hover color
     */
    button_tertiary_hover_color?: string;
    /**
     * - The tertiary button
     * hover text color
     */
    button_tertiary_hover_text_color?: string;
    /**
     * - The tertiary button label color
     */
    button_tertiary_label_color?: string;
    /**
     * - Whether to disable the cart or not
     */
    disable_cart?: boolean;
    /**
     * - The footer background color
     */
    footer_bg_color?: string;
    /**
     * - The footer border color
     */
    footer_border_color?: string;
    /**
     * - The footer navigation hover color
     */
    footer_nav_hover_color?: string;
    /**
     * - The footer text color
     */
    footer_text_color?: string;
    /**
     * - The header background color
     */
    header_bg_color?: string;
    /**
     * - The header border color
     */
    header_border_color?: string;
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
     * - The header icon color
     */
    header_icon_color?: string;
    /**
     * - The header navigation hover color
     */
    header_nav_hover_color?: string;
    /**
     * - The header text color
     */
    header_text_color?: string;
    /**
     * - Whether the menu is below the logo or not
     */
    is_menu_below_logo?: boolean;
    /**
     * - The position of the menu
     */
    menu_position?: string;
    /**
     * - The text body color
     */
    text_body_color?: string;
    /**
     * - The text discount color
     */
    text_discount_color?: string;
    /**
     * - The text heading link color
     */
    text_heading_link_color?: string;
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
};
/** @returns {DividerStrokeHighlightSettingV2} */
declare function DividerStrokeHighlightSettingV2(): DividerStrokeHighlightSettingV2;
type DividerStrokeHighlightSettingV2 = {
    /**
     * - The divider strokes color
     */
    divider_strokes?: string;
    /**
     * - The highlight color
     */
    highlight?: string;
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
/** @returns {Email} */
declare function Email(): Email;
type Email = {
    /**
     * - Whether the email address is active or not
     */
    active: boolean;
    /**
     * - Email address
     */
    email: string;
    /**
     * - Whether the email address is the primary
     * contact email for the user
     */
    primary: boolean;
    /**
     * - Whether the email address has been verified or not
     */
    verified: boolean;
};
/** @returns {ExploreInfo} */
declare function ExploreInfo(): ExploreInfo;
type ExploreInfo = {
    /**
     * - Explore feature description
     */
    description?: string;
    /**
     * - Explore feature title
     */
    title?: string;
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
     * - Feature description
     */
    description?: string;
    /**
     * - Feature label
     */
    label?: string;
};
/** @returns {Font} */
declare function Font(): Font;
type Font = {
    family?: string;
    variants?: Variants;
};
/** @returns {FontsSchema} */
declare function FontsSchema(): FontsSchema;
type FontsSchema = {
    items?: FontsSchemaItems;
    kind?: string;
};
/** @returns {FontsSchemaItems} */
declare function FontsSchemaItems(): FontsSchemaItems;
type FontsSchemaItems = {
    category?: string;
    family?: string;
    files?: FontsSchemaItemsFiles;
    kind?: string;
    last_modified?: string;
    subsets?: string[];
    variants?: string[];
    version?: string;
};
/** @returns {FontsSchemaItemsFiles} */
declare function FontsSchemaItemsFiles(): FontsSchemaItemsFiles;
type FontsSchemaItemsFiles = {
    bold?: string;
    italic?: string;
    regular?: string;
};
/** @returns {FontV2} */
declare function FontV2(): FontV2;
type FontV2 = {
    /**
     * - The font family
     */
    family: string;
    variants: FontVariantsV2;
};
/** @returns {FontVariantsV2} */
declare function FontVariantsV2(): FontVariantsV2;
type FontVariantsV2 = {
    bold?: FontVariantV2;
    light?: FontVariantV2;
    medium?: FontVariantV2;
    regular?: FontVariantV2;
    semi_bold?: FontVariantV2;
};
/** @returns {FontVariantV2} */
declare function FontVariantV2(): FontVariantV2;
type FontVariantV2 = {
    /**
     * - The URL of the font file
     */
    file: string;
    /**
     * - The name of the font variant
     */
    name: string;
};
/** @returns {FooterSettingV2} */
declare function FooterSettingV2(): FooterSettingV2;
type FooterSettingV2 = {
    /**
     * - The footer background color
     */
    footer_background?: string;
    /**
     * - The footer body text color
     */
    footer_body_text?: string;
    /**
     * - The footer bottom background color
     */
    footer_bottom_background?: string;
    /**
     * - The footer heading text color
     */
    footer_heading_text?: string;
    /**
     * - The footer icon color
     */
    footer_icon?: string;
};
/** @returns {GeneralSettingV2} */
declare function GeneralSettingV2(): GeneralSettingV2;
type GeneralSettingV2 = {
    button?: ButtonSettingV2;
    footer?: FooterSettingV2;
    header?: HeaderSettingV2;
    sale_discount?: SaleDiscountSettingV2;
    text?: TextSettingV2;
    theme?: ThemeSettingV2;
};
/** @returns {GlobalConfigV2} */
declare function GlobalConfigV2(): GlobalConfigV2;
type GlobalConfigV2 = {
    auth?: AuthConfigV2;
    palette?: PaletteConfigV2;
    statics?: StaticConfigV2;
};
/** @returns {GlobalSchema} */
declare function GlobalSchema(): GlobalSchema;
type GlobalSchema = {
    props?: GlobalSchemaProps[];
};
/** @returns {GlobalSchemaProps} */
declare function GlobalSchemaProps(): GlobalSchemaProps;
type GlobalSchemaProps = {
    category?: string;
    id?: string;
    label?: string;
    type?: string;
};
/** @returns {GlobalSchemaV2} */
declare function GlobalSchemaV2(): GlobalSchemaV2;
type GlobalSchemaV2 = {
    props?: PropV2[];
};
/** @returns {HeaderSettingV2} */
declare function HeaderSettingV2(): HeaderSettingV2;
type HeaderSettingV2 = {
    /**
     * - The header background color
     */
    header_background?: string;
    /**
     * - The header icon color
     */
    header_icon?: string;
    /**
     * - The header navigation color
     */
    header_nav?: string;
};
/** @returns {Highlight} */
declare function Highlight(): Highlight;
type Highlight = {
    /**
     * - Highlight description
     */
    description?: string;
    /**
     * - Highlight image URL
     */
    image?: string;
    /**
     * - Highlight title
     */
    title?: string;
};
/** @returns {ImagePickerPropV2} */
declare function ImagePickerPropV2(): ImagePickerPropV2;
type ImagePickerPropV2 = {
    /**
     * - The type of the property.
     */
    type?: string;
    /**
     * - The value of the image picker property.
     */
    value?: string;
};
/** @returns {Images} */
declare function Images(): Images;
type Images = {
    android?: string[];
    desktop?: string[];
    ios?: string[];
    thumbnail?: string[];
};
/** @returns {ImagesV2} */
declare function ImagesV2(): ImagesV2;
type ImagesV2 = {
    /**
     * - The URL of the desktop image
     */
    desktop?: string;
    /**
     * - The URL of the mobile image
     */
    mobile?: string;
};
/** @returns {Information} */
declare function Information(): Information;
type Information = {
    description?: string;
    features?: string[];
    images?: Images;
    name?: string;
};
/** @returns {Light} */
declare function Light(): Light;
type Light = {
    file?: string;
    name?: string;
};
/** @returns {ListSchemaItem} */
declare function ListSchemaItem(): ListSchemaItem;
type ListSchemaItem = {
    global_config?: any;
    name?: string;
    page?: ConfigPage[];
};
/** @returns {MarketplaceTheme} */
declare function MarketplaceTheme(): MarketplaceTheme;
type MarketplaceTheme = {
    /**
     * - Theme ID
     */
    _id?: string;
    carousel?: CarouselItem[];
    catalog_size?: CatalogSize;
    comments?: Comments;
    contact?: ContactInfo;
    /**
     * - Theme creation timestamp
     */
    created_at?: string;
    /**
     * - Theme description
     */
    description?: string;
    documentation?: Documentation;
    explore?: ExploreInfo;
    features?: Feature[];
    highlights?: Highlight[];
    images?: MarketplaceThemeImages;
    /**
     * - Industries the theme is suitable for
     */
    industry?: string[];
    /**
     * - Indicates if the theme is a default theme
     */
    is_default?: boolean;
    /**
     * - Indicates if the theme is an update
     */
    is_update?: boolean;
    /**
     * - Theme name
     */
    name?: string;
    /**
     * - Organization ID
     */
    organization_id?: string;
    payment?: PaymentInfo;
    release?: Release;
    /**
     * - Theme slug
     */
    slug?: string;
    /**
     * - Theme source URL
     */
    src?: string;
    /**
     * - Theme status
     */
    status?: string;
    /**
     * - Theme step
     */
    step?: number;
    /**
     * - Theme tagline
     */
    tagline?: string;
    /**
     * - Template theme ID
     */
    template_theme_id?: string;
    /**
     * - Theme update timestamp
     */
    updated_at?: string;
    /**
     * - User ID
     */
    user_id?: string;
    variations?: Variation[];
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
/** @returns {MarketplaceThemeResponse} */
declare function MarketplaceThemeResponse(): MarketplaceThemeResponse;
type MarketplaceThemeResponse = {
    body?: MarketplaceThemeResponseBody;
    /**
     * - HTTP status code
     */
    status?: number;
};
/** @returns {MarketplaceThemeResponseBody} */
declare function MarketplaceThemeResponseBody(): MarketplaceThemeResponseBody;
type MarketplaceThemeResponseBody = {
    page?: PaginationSchema;
    themes?: MarketplaceTheme[];
};
/** @returns {Medium} */
declare function Medium(): Medium;
type Medium = {
    file?: string;
    name?: string;
};
/** @returns {MetaV2} */
declare function MetaV2(): MetaV2;
type MetaV2 = {
    /**
     * - The description of the theme
     */
    description?: string;
    images?: ImagesV2;
    /**
     * - An array of industries associated with the theme
     */
    industry?: string[];
    /**
     * - The name of the theme
     */
    name?: string;
    payment?: PaymentV2;
    release?: ReleaseV2;
    /**
     * - The slug of the theme
     */
    slug?: string;
};
/** @returns {Organization} */
declare function Organization(): Organization;
type Organization = {
    /**
     * - The unique identifier of the organization
     */
    _id?: string;
    meta?: OrganizationMeta;
};
/** @returns {OrganizationMeta} */
declare function OrganizationMeta(): OrganizationMeta;
type OrganizationMeta = {
    /**
     * - List of e-commerce platforms
     * used by the organization
     */
    ecomm_platform_used?: string[];
    /**
     * - List of goals for the organization
     */
    goals?: string[];
};
/** @returns {OverlayPopupSettingV2} */
declare function OverlayPopupSettingV2(): OverlayPopupSettingV2;
type OverlayPopupSettingV2 = {
    /**
     * - The dialog background color
     */
    dialog_backgroung?: string;
    /**
     * - The overlay color
     */
    overlay?: string;
};
/** @returns {PageV2} */
declare function PageV2(): PageV2;
type PageV2 = {
    sections?: SectionV2[];
    /**
     * - The value of the page.
     */
    value?: string;
};
/** @returns {PaginationSchema} */
declare function PaginationSchema(): PaginationSchema;
type PaginationSchema = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
/** @returns {PaletteConfigV2} */
declare function PaletteConfigV2(): PaletteConfigV2;
type PaletteConfigV2 = {
    advance_setting?: AdvanceSettingV2;
    general_setting?: GeneralSettingV2;
};
/** @returns {PaymentInfo} */
declare function PaymentInfo(): PaymentInfo;
type PaymentInfo = {
    /**
     * - Amount of payment
     */
    amount?: number;
    /**
     * - Indicates if the theme is paid
     */
    is_paid?: boolean;
};
/** @returns {PaymentV2} */
declare function PaymentV2(): PaymentV2;
type PaymentV2 = {
    /**
     * - The amount of the theme
     */
    amount?: number;
    /**
     * - Whether the theme is paid or not
     */
    is_paid?: boolean;
};
/** @returns {PhoneNumber} */
declare function PhoneNumber(): PhoneNumber;
type PhoneNumber = {
    /**
     * - Whether the phone number is active or not
     */
    active: boolean;
    /**
     * - Country code for the phone number
     */
    country_code?: number;
    /**
     * - Phone number
     */
    phone: string;
    /**
     * - Whether the phone number is the primary contact
     * number for the user
     */
    primary: boolean;
    /**
     * - Whether the phone number has been verified or not
     */
    verified: boolean;
};
/** @returns {PredicateV2} */
declare function PredicateV2(): PredicateV2;
type PredicateV2 = {
    route?: RouteV2;
    screen?: ScreenV2;
    user?: UserV2;
};
/** @returns {Preset} */
declare function Preset(): Preset;
type Preset = {
    pages?: AvailablePageSchema[];
};
/** @returns {PresetV2} */
declare function PresetV2(): PresetV2;
type PresetV2 = {
    pages?: PageV2[];
};
/** @returns {PropV2} */
declare function PropV2(): PropV2;
type PropV2 = {
    /**
     * - The category of the property
     */
    category?: string;
    /**
     * - The ID of the property
     */
    id?: string;
    /**
     * - Additional information about the property
     */
    info?: string;
    /**
     * - The label of the property
     */
    label?: string;
    /**
     * - The type of the property
     */
    type?: string;
};
/** @returns {RangePropV2} */
declare function RangePropV2(): RangePropV2;
type RangePropV2 = {
    /**
     * - The type of the property.
     */
    type?: string;
    /**
     * - The value of the range property.
     */
    value?: number;
};
/** @returns {Regular} */
declare function Regular(): Regular;
type Regular = {
    file?: string;
    name?: string;
};
/** @returns {RejectionReason} */
declare function RejectionReason(): RejectionReason;
type RejectionReason = {
    /**
     * - The reason for rejecting the theme
     */
    message: string;
};
/** @returns {Release} */
declare function Release(): Release;
type Release = {
    /**
     * - Release notes
     */
    notes?: string;
    /**
     * - Release version
     */
    version?: string;
};
/** @returns {ReleaseV2} */
declare function ReleaseV2(): ReleaseV2;
type ReleaseV2 = {
    /**
     * - The release notes of the theme
     */
    notes?: string;
    /**
     * - The version of the theme
     */
    version?: string;
};
/** @returns {RouteV2} */
declare function RouteV2(): RouteV2;
type RouteV2 = {
    /**
     * - The exact URL of the route.
     */
    exact_url?: string;
    /**
     * - The selected route.
     */
    selected?: string;
};
/** @returns {SaleDiscountSettingV2} */
declare function SaleDiscountSettingV2(): SaleDiscountSettingV2;
type SaleDiscountSettingV2 = {
    /**
     * - The sale badge background color
     */
    sale_badge_background?: string;
    /**
     * - The sale badge text color
     */
    sale_badge_text?: string;
    /**
     * - The sale discount text color
     */
    sale_discount_text?: string;
    /**
     * - The sale timer color
     */
    sale_timer?: string;
};
/** @returns {ScreenV2} */
declare function ScreenV2(): ScreenV2;
type ScreenV2 = {
    /**
     * - True if the screen is a desktop device.
     */
    desktop?: boolean;
    /**
     * - True if the screen is a mobile device.
     */
    mobile?: boolean;
    /**
     * - True if the screen is a tablet device.
     */
    tablet?: boolean;
};
/** @returns {SectionItem} */
declare function SectionItem(): SectionItem;
type SectionItem = {
    /**
     * - Blocks
     */
    blocks?: any[];
    /**
     * - Label for the section
     */
    label?: string;
    /**
     * - Name of the section
     */
    name?: string;
    props?: any[];
};
/** @returns {SectionPresetV2} */
declare function SectionPresetV2(): SectionPresetV2;
type SectionPresetV2 = {
    blocks?: BlockV2[];
};
/** @returns {SectionPropsV2} */
declare function SectionPropsV2(): SectionPropsV2;
type SectionPropsV2 = {
    autoplay?: CheckboxPropV2;
    item_margin?: TextPropV2;
    slide_interval?: RangePropV2;
    title?: TextPropV2;
};
/** @returns {Sections} */
declare function Sections(): Sections;
type Sections = {
    attributes?: string;
};
/** @returns {SectionV2} */
declare function SectionV2(): SectionV2;
type SectionV2 = {
    blocks?: BlockV2[];
    /**
     * - The name of the section.
     */
    name?: string;
    predicate?: PredicateV2;
    preset?: SectionPresetV2;
    props?: SectionPropsV2;
};
/** @returns {SemiBold} */
declare function SemiBold(): SemiBold;
type SemiBold = {
    file?: string;
    name?: string;
};
/** @returns {Src} */
declare function Src(): Src;
type Src = {
    link?: string;
};
/** @returns {StaticConfigV2} */
declare function StaticConfigV2(): StaticConfigV2;
type StaticConfigV2 = {
    props?: StaticPropsV2;
};
/** @returns {StaticPropsV2} */
declare function StaticPropsV2(): StaticPropsV2;
type StaticPropsV2 = {
    auth?: AuthConfigV2;
    colors?: ColorsV2;
};
/** @returns {TextPropV2} */
declare function TextPropV2(): TextPropV2;
type TextPropV2 = {
    /**
     * - The type of the property.
     */
    type?: string;
    /**
     * - The value of the text property.
     */
    value?: string;
};
/** @returns {TextSettingV2} */
declare function TextSettingV2(): TextSettingV2;
type TextSettingV2 = {
    /**
     * - The text body color
     */
    text_body?: string;
    /**
     * - The text heading color
     */
    text_heading?: string;
    /**
     * - The text label color
     */
    text_label?: string;
    /**
     * - The secondary text color
     */
    text_secondary?: string;
};
/** @returns {ThemeAndUserDetailsResponse} */
declare function ThemeAndUserDetailsResponse(): ThemeAndUserDetailsResponse;
type ThemeAndUserDetailsResponse = {
    /**
     * - List of themes
     */
    themes?: MarketplaceTheme[];
    /**
     * - List of users
     */
    user?: ThemeCreator[];
};
/** @returns {ThemeCreateRequest} */
declare function ThemeCreateRequest(): ThemeCreateRequest;
type ThemeCreateRequest = {
    release?: Release;
    /**
     * - The source URL of the theme file
     */
    src?: string;
};
/** @returns {ThemeCreator} */
declare function ThemeCreator(): ThemeCreator;
type ThemeCreator = {
    /**
     * - Unique identifier for the user
     */
    _id: string;
    /**
     * - Type of user account
     */
    account_type?: string;
    /**
     * - Whether the user is active or not
     */
    active: boolean;
    /**
     * - List of email addresses associated with the user
     */
    emails: Email[];
    /**
     * - First name of the user
     */
    first_name?: string;
    /**
     * - Gender of the user (null if not specified)
     */
    gender?: string;
    /**
     * - Last name of the user
     */
    last_name?: string;
    /**
     * - List of phone numbers associated
     * with the user
     */
    phone_numbers?: PhoneNumber[];
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
/** @returns {ThemeMeta} */
declare function ThemeMeta(): ThemeMeta;
type ThemeMeta = {
    /**
     * - A description of the theme.
     */
    description?: string;
    images?: ThemeImages;
    /**
     * - A list of industry categories the theme is
     * suitable for.
     */
    industry?: string[];
    payment?: ThemePayment;
    /**
     * - The slug for the theme.
     */
    slug?: string;
};
/** @returns {ThemePayment} */
declare function ThemePayment(): ThemePayment;
type ThemePayment = {
    /**
     * - The amount to be paid for the theme.
     */
    amount?: number;
    /**
     * - Whether the theme is a paid theme.
     */
    is_paid?: boolean;
};
/** @returns {ThemeRejectionReasons} */
declare function ThemeRejectionReasons(): ThemeRejectionReasons;
type ThemeRejectionReasons = {
    /**
     * - The ID of the theme rejection reasons object
     */
    _id: string;
    /**
     * - The ID of the admin who rejected the theme
     */
    admin_id: string;
    /**
     * - The date and time when the theme rejection
     * reasons object was created
     */
    created_at?: string;
    /**
     * - A general message about the rejection reasons
     */
    message?: string;
    /**
     * - The ID of the organization
     */
    organization_id: string;
    rejection_reasons: any;
    /**
     * - The status of the theme (e.g., rejected)
     */
    status: string;
    /**
     * - The ID of the rejected theme
     */
    theme_id: string;
    /**
     * - The date and time when the theme rejection
     * reasons object was last updated
     */
    updated_at?: string;
    /**
     * - The ID of the user who submitted the theme
     */
    user_id: string;
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
/** @returns {ThemeReviewRequest} */
declare function ThemeReviewRequest(): ThemeReviewRequest;
type ThemeReviewRequest = {
    dynamic_properties?: any;
};
/** @returns {ThemeSchema} */
declare function ThemeSchema(): ThemeSchema;
type ThemeSchema = {
    /**
     * - The unique identifier for the theme.
     */
    _id?: string;
    /**
     * - The ID of the company that the theme belongs to.
     */
    company_id?: number;
    /**
     * - The timestamp when the theme was created.
     */
    created_at?: string;
    marketplace_theme_id?: MarketplaceThemeId;
    meta?: ThemeMeta;
    /**
     * - The name of the theme.
     */
    name?: string;
    /**
     * - The timestamp when the theme was last updated.
     */
    updated_at?: string;
};
/** @returns {ThemeSettingV2} */
declare function ThemeSettingV2(): ThemeSettingV2;
type ThemeSettingV2 = {
    /**
     * - The page background color
     */
    page_background?: string;
    /**
     * - The theme accent color
     */
    theme_accent?: string;
};
/** @returns {ThemesListingResponseSchema} */
declare function ThemesListingResponseSchema(): ThemesListingResponseSchema;
type ThemesListingResponseSchema = {
    items?: ThemesSchema[];
    page?: PaginationSchema;
};
/** @returns {ThemeSlugResponse} */
declare function ThemeSlugResponse(): ThemeSlugResponse;
type ThemeSlugResponse = {
    organization?: Organization;
    theme?: MarketplaceTheme;
    /**
     * - An array of user objects
     */
    user?: ThemeCreator[];
};
/** @returns {ThemesSchema} */
declare function ThemesSchema(): ThemesSchema;
type ThemesSchema = {
    __v?: number;
    _id?: string;
    application?: string;
    applied?: boolean;
    archived?: boolean;
    assets?: AssetsSchema;
    available_sections?: availableSectionSchema[];
    colors?: Colors;
    config?: Config;
    created_at?: string;
    customized?: boolean;
    font?: Font;
    information?: Information;
    parent_theme?: string;
    parent_theme_version?: string;
    published?: boolean;
    src?: Src;
    styles?: any;
    tags?: string[];
    updated_at?: string;
    version?: string;
};
/** @returns {ThemeUpgradableResponseV2} */
declare function ThemeUpgradableResponseV2(): ThemeUpgradableResponseV2;
type ThemeUpgradableResponseV2 = {
    /**
     * - A message describing the theme upgrade status
     */
    message?: string;
    /**
     * - Indicates if the theme is upgradable or not
     */
    upgrade?: boolean;
    versions?: ThemeVersionsV2;
};
/** @returns {ThemeVersionsV2} */
declare function ThemeVersionsV2(): ThemeVersionsV2;
type ThemeVersionsV2 = {
    /**
     * - The version of the applied theme
     */
    applied_theme?: string;
    /**
     * - The version of the parent theme
     */
    parent_theme?: string;
};
/** @returns {UmdJs} */
declare function UmdJs(): UmdJs;
type UmdJs = {
    link?: string;
    links?: string[];
};
/** @returns {UMDJs} */
declare function UMDJs(): UMDJs;
type UMDJs = {
    links?: string[];
};
/** @returns {UpdateReviewStatusRequest} */
declare function UpdateReviewStatusRequest(): UpdateReviewStatusRequest;
type UpdateReviewStatusRequest = {
    /**
     * - The new status of the theme review
     */
    status: string;
};
/** @returns {UpdateThemeNameRequestBodyV2} */
declare function UpdateThemeNameRequestBodyV2(): UpdateThemeNameRequestBodyV2;
type UpdateThemeNameRequestBodyV2 = {
    /**
     * - The new name of the theme.
     */
    name?: string;
};
/** @returns {UpdateThemeRequestBodyV2} */
declare function UpdateThemeRequestBodyV2(): UpdateThemeRequestBodyV2;
type UpdateThemeRequestBodyV2 = {
    config?: ConfigV2;
    font?: FontV2;
};
/** @returns {UpgradableThemeSchema} */
declare function UpgradableThemeSchema(): UpgradableThemeSchema;
type UpgradableThemeSchema = {
    applied_theme?: string;
    parent_theme?: string;
    upgrade?: boolean;
};
/** @returns {UrlPropV2} */
declare function UrlPropV2(): UrlPropV2;
type UrlPropV2 = {
    /**
     * - The type of the property.
     */
    type?: string;
    /**
     * - The value of the URL property.
     */
    value?: string;
};
/** @returns {UserAlertsSettingV2} */
declare function UserAlertsSettingV2(): UserAlertsSettingV2;
type UserAlertsSettingV2 = {
    /**
     * - The error background color
     */
    error_background?: string;
    /**
     * - The error text color
     */
    error_text?: string;
    /**
     * - The info background color
     */
    info_background?: string;
    /**
     * - The info text color
     */
    info_text?: string;
    /**
     * - The success background color
     */
    success_background?: string;
    /**
     * - The success text color
     */
    success_text?: string;
};
/** @returns {UserV2} */
declare function UserV2(): UserV2;
type UserV2 = {
    /**
     * - True if the user is anonymous.
     */
    anonymous?: boolean;
    /**
     * - True if the user is authenticated.
     */
    authenticated?: boolean;
};
/** @returns {Variants} */
declare function Variants(): Variants;
type Variants = {
    bold?: Bold;
    light?: Light;
    medium?: Medium;
    regular?: Regular;
    semi_bold?: SemiBold;
};
/** @returns {Variation} */
declare function Variation(): Variation;
type Variation = {
    /**
     * - Variation color
     */
    color?: string;
    /**
     * - Variation demo URL
     */
    demo_url?: string;
    images?: MarketplaceThemeImages;
    /**
     * - Variation name
     */
    name?: string;
};
