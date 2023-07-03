export = ConfigurationPlatformModel;
/**
 * @typedef Android
 * @property {string} [api_key] - Firebase secret credential API key for Android
 * @property {string} [application_id] - Alphanumeric ID allotted to a sales
 *   channel application created within a business account
 */
/**
 * @typedef App
 * @property {ApplicationAuth} [auth]
 * @property {string} [channel_type] - It indicates different channel types like
 *   store, website-and-mobile-apps. Default value is store
 * @property {string} [company_id] - Numeric ID allotted to a business account
 *   on Fynd Platform.
 * @property {string} [desc] - Detailed description about the sales channel
 * @property {string} [name] - User-friendly name for sales channel, e.g. Zenz Fashion
 */
/**
 * @typedef AppCartConfig
 * @property {boolean} [bulk_coupons] - Allow creation of bulk coupons
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [empty_cart] - Enable/disable to allow adding cart items
 *   added before login to user's cart once user is logged in
 * @property {boolean} [enabled] - Shows whether cart configuration is enabled or not
 * @property {number} [max_cart_items] - Maximum number of items that can be
 *   added to cart by the customer
 * @property {number} [min_cart_value] - Minimum cart value below which customer
 *   cannot place an order
 * @property {PanCardConfig} [pan_card]
 * @property {boolean} [revenue_engine_coupon] - Allow coupon apply and credits
 *   together. Default value is false.
 */
/**
 * @typedef AppCurrencyResponse
 * @property {string} [application] - Alphanumeric ID allotted to an application
 *   (sales channel website) created within a business account
 * @property {DefaultCurrency} [default_currency]
 * @property {Currency[]} [supported_currency]
 */
/**
 * @typedef AppDomain
 * @property {string} [name] - Domain URL of current sales channel, e.g. zenz.com
 */
/**
 * @typedef AppFeature
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   for the sales channel features
 * @property {string} [app] - Application ID of the sales channel
 * @property {CartFeature} [cart]
 * @property {CommonFeature} [common]
 * @property {string} [created_at] - ISO 8601 timestamp showing the date when
 *   the features were configured
 * @property {HomePageFeature} [home_page]
 * @property {LandingPageFeature} [landing_page]
 * @property {OrderFeature} [order]
 * @property {PcrFeature} [pcr]
 * @property {ProductDetailFeature} [product_detail]
 * @property {QrFeature} [qr]
 * @property {RegistrationPageFeature} [registration_page]
 * @property {string} [updated_at] - ISO 8601 timestamp of last known
 *   modifications to the sales channel feature configuration
 */
/**
 * @typedef AppFeatureRequest
 * @property {AppFeature} [feature]
 */
/**
 * @typedef AppFeatureResponse
 * @property {AppFeature} [feature]
 */
/**
 * @typedef AppInventory
 * @property {InventoryArticleAssignment} [article_assignment]
 * @property {InventoryBrandRule} [brand]
 * @property {boolean} [franchise_enabled] - Allow other businesses (companies)
 *   to consume the current sales channel's inventory and sell products
 * @property {string[]} [image]
 * @property {boolean} [only_verified_products] - Show only verified products
 *   (the ones whose data have been verified by the admin)
 * @property {boolean} [out_of_stock] - Indicates whether out of stock products
 *   are allowed to show up on the website.
 * @property {InventoryPaymentConfig} [payment]
 * @property {InventoryStoreRule} [store]
 */
/**
 * @typedef AppInventoryCompanies
 * @property {string} [company_type] - Indicates the type of the company, e.g.
 *   franchisee, distributor, etc.
 * @property {string} [name] - Name of the company, e.g. Newton Traders
 * @property {number} [uid] - UID of the company, e.g. 108
 */
/**
 * @typedef AppInventoryConfig
 * @property {InventoryBrand} [brand]
 * @property {InventoryCategory} [category]
 * @property {Object[]} [company_store] - List of selling locations whose
 *   inventory is available to the sales channel for displaying on the website
 * @property {InventoryDiscount} [discount]
 * @property {Object[]} [exclude_category] - List of excluded brands category
 * @property {boolean} [franchise_enabled] - Allow other businesses (companies)
 *   to consume the current sales channel's inventory and sell products
 * @property {string[]} [image]
 * @property {boolean} [only_verified_products] - Show only verified products
 *   (the ones whose data has been verified by the admin)
 * @property {boolean} [out_of_stock] - Indicates whether out of stock products
 *   are allowed to show up on the website
 * @property {InventoryPrice} [price]
 * @property {InventoryStore} [store]
 */
/**
 * @typedef AppInventoryPartialUpdate
 * @property {AppCartConfig} [cart]
 * @property {boolean} [comms_enabled] - Shows communication (comms) is enabled
 *   or not for sales channel partial inventory update
 * @property {CommunicationConfig} [communication]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {AppPaymentConfig} [payment]
 * @property {RewardPointsConfig} [reward_points]
 */
/**
 * @typedef AppInventoryStores
 * @property {string} [_id] - The unique identifier of the store (24-digit Mongo
 *   Object ID) in the sales channel inventory
 * @property {number} [company_id] - Company ID of the selling location (store)
 *   added to the sales channel's inventory
 * @property {string} [display_name] - Display name of the sales channel
 *   inventory store (can be different than the actual store name), e.g. Reebok MUM
 * @property {string} [modified_on] - ISO 8601 timestamp of last known updation
 *   to the stores in sales channel inventory
 * @property {string} [name] - Name of the store in the sales channel inventory,
 *   e.g. Reebok Mumbai
 * @property {string} [store_code] - Store code of the enabled inventory store,
 *   e.g. HS-c9bac. It is unique for every store.
 * @property {string} [store_type] - Store type of the sales channel inventory
 *   store, such as mall, warehouse, high_street
 * @property {number} [uid] - Sales channel inventory store UID
 */
/**
 * @typedef Application
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel
 * @property {string} [app_type] - It shows application is live or in development mode.
 * @property {ApplicationAuth} [auth]
 * @property {SecureUrl} [banner]
 * @property {number} [cache_ttl] - An integer value that specifies the number
 *   of seconds until the key expires
 * @property {string} [channel_type] - It indicates different channel types like
 *   store, website-and-mobile-apps. Default value is store
 * @property {number} [company_id] - Numeric ID allotted to a business account
 *   where the sales channel exists
 * @property {ApplicationCors} [cors]
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel creation
 * @property {string} [description] - It contains detailed information about the
 *   sales channel.
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {SecureUrl} [favicon]
 * @property {boolean} [is_active] - Indicates sales channel is active or not active
 * @property {boolean} [is_internal] - Indicates whether a sales channel is
 *   internal or not
 * @property {SecureUrl} [logo]
 * @property {ApplicationMeta[]} [meta]
 * @property {SecureUrl} [mobile_logo]
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion
 * @property {string} [owner] - The unique identifier (24-digit Mongo Object ID)
 *   of owner who owns the application
 * @property {ApplicationRedirections[]} [redirections]
 * @property {string} [slug]
 * @property {string} [token] - Random generated fix length string for sales
 *   channel. It is required and auto-generated.
 * @property {string} [updated_at] - ISO 8601 timestamp of sales channel updation
 * @property {ApplicationWebsite} [website]
 */
/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled] - Shows sales channel auth is enabled or not enabled.
 */
/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */
/**
 * @typedef ApplicationDetail
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   for the sales channel details
 * @property {SecureUrl} [banner]
 * @property {string} [description] - It gives a detailed information about the
 *   sales channel. It is required.
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {SecureUrl} [favicon]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [mobile_logo]
 * @property {string} name - Name of the sales channel. It is required.
 * @property {string} [slug]
 */
/**
 * @typedef ApplicationInformation
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {string} [_id] - Unique identifier (24-digit Mongo Object ID) of
 *   the application information
 * @property {InformationAddress} [address]
 * @property {string} [application] - Alphanumeric ID allotted to a sales
 *   channel application created within a business account
 * @property {BusinessHighlights} [business_highlights]
 * @property {string} [copyright_text] - Copyright statement usually seen at the
 *   site's footer
 * @property {string} [created_at] - ISO 8601 timestamp of creation of the
 *   application information
 * @property {Links} [links]
 * @property {SocialLinks} [social_links]
 * @property {InformationSupport} [support]
 * @property {string} [updated_at] - ISO 8601 timestamp of updation of the
 *   application information
 */
/**
 * @typedef ApplicationInventory
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel inventory
 * @property {string} [app] - Current sales channel ID
 * @property {ArticleAssignmentConfig} [article_assignment]
 * @property {AuthenticationConfig} [authentication]
 * @property {string} [business] - Indicates the business type for sales channel
 *   e.g. retail or wholesale
 * @property {AppCartConfig} [cart]
 * @property {boolean} [comms_enabled] - Shows communication(comms) is enabled
 *   or not for sales channel inventory
 * @property {CommunicationConfig} [communication]
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel
 *   inventory creation
 * @property {AppInventoryConfig} [inventory]
 * @property {AppLogisticsConfig} [logistics]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {string} [modified_by] - User ID of the person who made the latest
 *   changes in the sales channel inventory
 * @property {AppOrderConfig} [order]
 * @property {AppPaymentConfig} [payment]
 * @property {string[]} [platforms]
 * @property {RewardPointsConfig} [reward_points]
 * @property {string} [updated_at] - ISO 8601 timestamp of sales channel
 *   inventory updation
 */
/**
 * @typedef ApplicationMeta
 * @property {string} [name] - Indicates to name of application meta
 * @property {string} [value] - Value related to application meta name
 */
/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from] - Old domain url of the sales channel
 * @property {string} [redirect_to] - New domain URL of the sales channel. Users
 *   will be automatically redirected from old domain to new domain.
 * @property {string} [type] - It shows domain redirection type. Permanent
 *   redirection is for long time period redirection, and temporary redirection
 *   for a short time period.
 */
/**
 * @typedef ApplicationsResponse
 * @property {Application[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ApplicationWebsite
 * @property {string} [basepath] - Base path for the current sales channel website
 * @property {boolean} [enabled] - Shows whether sales channel website URL is
 *   enabled or not
 */
/**
 * @typedef AppLogisticsConfig
 * @property {boolean} [dp_assignment]
 * @property {boolean} [logistics_by_seller]
 * @property {boolean} [same_day_delivery]
 * @property {boolean} [serviceability_check]
 */
/**
 * @typedef AppOrderConfig
 * @property {boolean} [enabled] - Allow orders to be accepted from the sales channel
 * @property {boolean} [force_reassignment] - Allow force reassigning of an order
 * @property {string} [message] - Reason for reassigning an order
 */
/**
 * @typedef AppPaymentConfig
 * @property {boolean} [anonymous_cod] - Allow cash on delivery for anonymous user
 * @property {CallbackUrl} [callback_url]
 * @property {number} [cod_amount_limit] - Maximum amount allowed for COD order.
 *   Beyond this, customer cannot opt for COD.
 * @property {number} [cod_charges] - Extra charge applicable for COD orders
 * @property {boolean} [enabled] - Allow payment option within sales channel
 * @property {Methods} [methods]
 * @property {string} [mode_of_payment] - Mode of payment for sales channel
 *   payment, e.g. 'ECOMM'.
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [source] - Source of the payment mode, e.g. 'ECOMM'.
 *   Default value is FYND.
 */
/**
 * @typedef AppStoreRules
 * @property {Object[]} [brands] - List of brands whose products will be shown
 *   on the website
 * @property {number[]} [companies] - List of companies whose inventory is
 *   available to the sales channel for displaying on the website
 */
/**
 * @typedef AppSupportedCurrency
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the currency configuration supported by the application
 * @property {string} [application] - Alphanumeric ID allotted to an application
 *   (sales channel website) created within a business account.
 * @property {string} [created_at] - ISO 8601 timestamp when currency was added
 *   in the list of currencies supported by the sales channel
 * @property {DefaultCurrency} [default_currency]
 * @property {string[]} [supported_currency]
 * @property {string} [updated_at] - ISO 8601 timestamp when currency was
 *   updated in the list of currencies supported by the sales channel
 */
/**
 * @typedef ArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment] - Allow post order reassigment of article
 * @property {ArticleAssignmentRules} [rules]
 */
/**
 * @typedef ArticleAssignmentRule
 * @property {StorePriorityRule} [store_priority]
 */
/**
 * @typedef ArticleAssignmentRules
 * @property {StorePriority} [store_priority]
 */
/**
 * @typedef AuthenticationConfig
 * @property {string} [provider] - Shows inventory authentication provider
 * @property {boolean} [required] - Shows sales channel inventory authentication
 *   is required or not
 */
/**
 * @typedef BlogLink
 * @property {string} [icon] - Hosted URL of icon image shown on the website
 * @property {string} [link] - Web URL of brand's blog page
 * @property {string} [title] - Name of the brand's blog page
 */
/**
 * @typedef BrandCompanyInfo
 * @property {number} [company_id] - Numeric ID allotted to a business account
 * @property {string} [company_name] - Name of the company dealing with the brand
 */
/**
 * @typedef BrandsByCompanyResponse
 * @property {CompanyBrandInfo} [brands]
 */
/**
 * @typedef BrandStoreInfo
 * @property {OptedCompany} [company]
 * @property {OptedStoreAddress} [store_address]
 * @property {string} [store_code] - Store code of the brand. It is unique for
 *   every brand store.
 * @property {number} [store_id] - The unique identifier of the selling location (store)
 * @property {string} [store_name] - Name of the selling location (store)
 * @property {string} [store_type] - Store type of the brand like warehouse,
 *   high_street, mall
 */
/**
 * @typedef BuildVersion
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {string} [_id] - 24-digit Mongo Object ID
 * @property {string} [application] - Application ID of the sales channel
 * @property {string} [build_status] - Current progress of the mobile build,
 *   e.g. pending, cancelled, failed, success
 * @property {string} [created_at] - ISO 8601 timestamp of app creation
 * @property {string} [platform_type] - Device platform for which the mobile app
 *   was built, e.g. android, ios.
 * @property {string} [updated_at] - ISO 8601 timestamp of last known
 *   modifications to the app build
 * @property {number} [version_code] - A positive integer used as an internal
 *   version number
 * @property {string} [version_name] - Version number of the mobile build, in
 *   dot-decimal notation
 */
/**
 * @typedef BuildVersionHistory
 * @property {string} [latest_available_version_name] - Latest version number of
 *   the mobile build, in dot-decimal notation
 * @property {BuildVersion} [versions]
 */
/**
 * @typedef BusinessHighlights
 * @property {string} [_id] - Unique identifier (24-digit Mongo Object ID) of
 *   the related business
 * @property {string} [icon] - Hosted URL of icon image representing the
 *   business highlight
 * @property {string} [sub_title] - Detailed information about the highlight
 * @property {string} [title] - Title of the business highlight, e.g. Superfast Delivery
 */
/**
 * @typedef CallbackUrl
 * @property {string} [app] - Payment callback url for app
 * @property {string} [web] - Payment callback url for web
 */
/**
 * @typedef CartFeature
 * @property {boolean} [google_map] - Allow adding of Google Maps. Default value is true.
 * @property {boolean} [gst_input] - Shows whether customer is allowed to enter
 *   GST on the cart page for claiming input credits
 * @property {boolean} [placing_for_customer] - Shows whether the staff is
 *   placing order on behalf of customer. Default value is true.
 * @property {boolean} [revenue_engine_coupon] - Allow coupon apply and credits,
 *   together. Default value is false.
 * @property {boolean} [staff_selection] - Shows whether staff selection is
 *   enabled on cart page
 */
/**
 * @typedef Charges
 * @property {number} [charges] - Delivery amount to be charged when order value
 *   is below the defined threshold value
 * @property {number} [threshold] - The order value below which an extra
 *   delivery fee will be applicable
 */
/**
 * @typedef CommonFeature
 * @property {CommunicationOptinDialogFeature} [communication_optin_dialog]
 * @property {CompareProductsFeature} [compare_products]
 * @property {CurrencyFeature} [currency]
 * @property {DeploymentStoreSelectionFeature} [deployment_store_selection]
 * @property {FeedbackFeature} [feedback]
 * @property {ListingPriceFeature} [listing_price]
 * @property {RevenueEngineFeature} [revenue_engine]
 * @property {RewardPointsConfig} [reward_points]
 */
/**
 * @typedef CommsConfig
 * @property {boolean} [enabled] - Check current communication channel is enabled
 */
/**
 * @typedef CommunicationConfig
 * @property {CommsConfig} [email]
 * @property {CommsConfig} [sms]
 * @property {CommsConfig} [voice]
 */
/**
 * @typedef CommunicationOptinDialogFeature
 * @property {boolean} [visibility] - Shows whether WhatsApp communication is enabled
 */
/**
 * @typedef CompaniesResponse
 * @property {AppInventoryCompanies} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CompanyAboutAddress
 * @property {string} [address_type] - Indicates different office types like
 *   office, registered, and home.
 * @property {string} [address1] - Primary address line of the company
 * @property {string} [address2] - Secondary address line of the company
 * @property {string} [city] - City name, e.g. Mumbai
 * @property {string} [country] - Country name, e.g. India
 * @property {number} [pincode] - 6-digit PIN code of the city, e.g. 400001
 * @property {string} [state] - State name, e.g. Maharashtra
 */
/**
 * @typedef CompanyBrandInfo
 * @property {string} [brand_banner_portrait_url] - Hosted URL of the brand's
 *   portrait banner
 * @property {string} [brand_banner_url] - Hosted URL of the brand's banner image
 * @property {string} [brand_logo_url] - Hosted URL of the brand's logo
 * @property {string} [name] - Brand name, e.g. Raymonds
 * @property {number} [value] - Brand UID for identifying the brand
 */
/**
 * @typedef CompanyByBrandsRequest
 * @property {number} brands - Brand UID
 * @property {string} [search_text] - A search field for finding a company by its name
 */
/**
 * @typedef CompanyByBrandsResponse
 * @property {BrandCompanyInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CompanyValidator
 * @property {string} [browser_script] - Browser script for the company validator
 * @property {JsonSchema[]} [json_schema]
 */
/**
 * @typedef CompareProductsFeature
 * @property {boolean} [enabled] - Shows whether product comparison feature is
 *   enabled on PDP
 */
/**
 * @typedef CreateApplicationRequest
 * @property {App} [app]
 * @property {AppInventory} [configuration]
 * @property {AppDomain} [domain]
 */
/**
 * @typedef CreateAppResponse
 * @property {Application} [app]
 * @property {ApplicationInventory} [configuration]
 */
/**
 * @typedef Credentials
 * @property {Android} [android]
 * @property {string} [api_key] - An API key is a unique string that's used to
 *   route requests to your Firebase project when interacting with Firebase.
 * @property {string} [application_id] - Alphanumeric ID allotted to the current
 *   application created within the current business account
 * @property {string} [gcm_sender_id] - Google Cloud Manager's Sender ID for
 *   Firebase. It is a unique numerical value which is created when you
 *   configure your project in the Google Developers Console/Google Cloud Console.
 * @property {Ios} [ios]
 * @property {string} [project_id] - Project ID for Firebase integration.
 *   Project ID is a unique identifier for a project and is used only within the console.
 */
/**
 * @typedef Credit
 * @property {boolean} [enabled] - Shows whether reward points should be credited
 */
/**
 * @typedef CurrenciesResponse
 * @property {Currency[]} [items]
 */
/**
 * @typedef Currency
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the current sales channel supported currency
 * @property {string} [code] - 3-character currency code, e.g. INR, USD, EUR.
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel support
 *   currency creation
 * @property {number} [decimal_digits] - Acceptable decimal limits for a given
 *   currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid
 *   value of a currency.
 * @property {boolean} [is_active] - Shows currency is enabled or not in current
 *   sales channel
 * @property {string} [name] - Name of the currency, e.g Indian Rupee
 * @property {string} [symbol] - Unique symbol for identifying the currency, e.g. ₹
 * @property {string} [updated_at] - ISO 8601 timestamp of sales channel support
 *   currency updation
 */
/**
 * @typedef CurrencyConfig
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of all the currency configuration
 * @property {string} [code] - 3-character currency code, e.g. INR, USD, EUR.
 * @property {string} [created_at] - ISO 8601 timestamp of a given currency creation
 * @property {number} [decimal_digits] - Acceptable decimal limits for a given
 *   currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid
 *   value of a currency.
 * @property {boolean} [is_active] - Currency is enabled or not for the current
 *   sales channel
 * @property {string} [name] - Name of the currency, e.g Indian Rupee
 * @property {string} [symbol] - Unique symbol for identifying the currency, e.g. ₹
 * @property {string} [updated_at] - ISO 8601 timestamp of a given currency updation
 */
/**
 * @typedef CurrencyFeature
 * @property {string} [default_currency] - 3-letter code of the default currency
 *   used in the application. Default vaule is 'INR'.
 * @property {string} [type] - If 'explicit', currency formatting shows currency
 *   code with price. For explicit or all currency selection.
 * @property {string[]} [value] - 3-letter currency code
 */
/**
 * @typedef Debit
 * @property {boolean} [auto_apply] - Allow automatic debit of reward points
 * @property {boolean} [enabled] - Shows whether reward points are available for debit
 * @property {string} [strategy_channel] - Strategy channel for debiting reward points
 */
/**
 * @typedef DefaultCurrency
 * @property {string} [code] - 3-character code of the default currency, e.g.
 *   INR, EUR, USD
 * @property {string} [ref] - The unique identifier (24-digit Mongo Object ID)
 *   of the default currency
 */
/**
 * @typedef DeliveryCharges
 * @property {Charges} [charges]
 * @property {boolean} [enabled] - Allow delivery charges
 */
/**
 * @typedef DeploymentMeta
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the ordering stores
 * @property {boolean} [all_stores] - Allow all stores from the ordering store
 * @property {string} [app] - Alphanumeric ID allotted to an application (sales
 *   channel website) created within a business account
 * @property {number[]} [deployed_stores]
 * @property {boolean} [enabled] - Allow ordering stores for current sales channel
 * @property {string} [type] - Permitted values are 'hard' and 'soft'. For hard
 *   type delivery, store selection is compulsory. For soft type, delivery store
 *   selection is optional.
 */
/**
 * @typedef DeploymentStoreSelectionFeature
 * @property {boolean} [enabled] - Shows whether selection of store (for
 *   deploying the application) is permitted
 * @property {string} [type] - Permitted values are 'hard' and 'soft'. For hard
 *   type delivery, store selection is compulsory. For soft type, delivery store
 *   selection is optional.
 */
/**
 * @typedef Domain
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the sales channel domain
 * @property {boolean} [is_predefined] - Domain is hosting domain or not.
 * @property {boolean} [is_primary] - Domain is primary or not. Primary domain
 *   is the default/main domain.
 * @property {boolean} [is_shortlink] - Shortlink is present or not for the domain
 * @property {string} [name] - Full domain name, e.g. newton.com
 * @property {boolean} [verified] - Domain is verified or not. TXT and A records
 *   should propagate correctly.
 */
/**
 * @typedef DomainAdd
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the domain
 * @property {boolean} [is_primary] - Domain is primary or not (indicates if the
 *   domain has been made the main URL of the sales channel)
 * @property {boolean} [is_shortlink] - Indicates if the domain is a short link
 *   domain (short URL e.g. bitly)
 * @property {string} [message] - Shows the message shown after adding a domain
 *   successfully, e.g. 'New domain added successfully'
 * @property {string} [name] - Full domain name, e.g. uniket.hostx0.de
 * @property {string[]} [txt_records]
 * @property {boolean} [verified] - Domain is verified or not (indicates if A
 *   records and TXT records are correct)
 */
/**
 * @typedef DomainAddRequest
 * @property {DomainAdd} [domain]
 */
/**
 * @typedef DomainsResponse
 * @property {Domain[]} [domains]
 */
/**
 * @typedef DomainStatus
 * @property {string} [display] - Shows TXT record and A records for the domain
 * @property {boolean} [status] - Shows whether TXT record or A records for the
 *   domain are correctly propagating via DNS servers
 */
/**
 * @typedef DomainStatusRequest
 * @property {string} [domain_url] - URL of the domain, e.g. uniket.hostx0.de
 */
/**
 * @typedef DomainStatusResponse
 * @property {boolean} [connected] - Check if domain is live and mapped to
 *   appropriate IP of Fynd Servers
 * @property {DomainStatus[]} [status]
 */
/**
 * @typedef DomainSuggestion
 * @property {string} [currency] - Custom domain currency. Not present for Fynd domains.
 * @property {boolean} is_available - Shows whether the custom domain of your
 *   choice is available or not available
 * @property {string} name - URL of the custom domain
 * @property {number} [price] - Cost of purchasing a custom domain. Not present
 *   for Fynd domains.
 * @property {boolean} [unsupported] - Shows whether TLD domain is supported or not
 */
/**
 * @typedef DomainSuggestionsRequest
 * @property {boolean} [custom] - Get suggestions for custom domains or Fynd domains
 * @property {string} [domain_url] - Domain url
 */
/**
 * @typedef DomainSuggestionsResponse
 * @property {DomainSuggestion[]} [domains] - Domain URL
 */
/**
 * @typedef FacebookLink
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's Facebook page
 * @property {string} [title] - Name of the social media platform, e.g. Facebook
 */
/**
 * @typedef FeedbackFeature
 * @property {boolean} [enabled] - Shows whether customer feedback is enabled on
 *   PDP. Default value is false.
 */
/**
 * @typedef FilterOrderingStoreRequest
 * @property {boolean} [all_stores] - Allow all stores from the ordering stores
 * @property {number[]} [deployed_stores]
 * @property {boolean} [only_deployed]
 * @property {string} [q] - Store code or name of the ordering store
 */
/**
 * @typedef Firebase
 * @property {Credentials} [credentials]
 * @property {boolean} [enabled] - Shows whether Firebase integration is enabled
 *   or disabled for the sales channel
 */
/**
 * @typedef Freshchat
 * @property {FreshchatCredentials} [credentials]
 * @property {boolean} [enabled] - Shows whether Freshchat integration is
 *   enabled or disabled for the sales channel
 */
/**
 * @typedef FreshchatCredentials
 * @property {string} [app_id] - The unique app_id of your Freshchat account for
 *   integrating Freshchat with your sales channel
 * @property {string} [app_key] - The unique app_key of your Freshchat account
 *   for integrating Freshchat with your sales channel
 * @property {string} [web_token] - Web token used for accessing the Freshchat APIs
 */
/**
 * @typedef FyndRewards
 * @property {FyndRewardsCredentials} [credentials]
 */
/**
 * @typedef FyndRewardsCredentials
 * @property {string} [public_key] - Public key for integrating with Fynd rewards.
 */
/**
 * @typedef GetIntegrationsOptInsResponse
 * @property {IntegrationOptIn[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GoogleMap
 * @property {GoogleMapCredentials} [credentials]
 */
/**
 * @typedef GoogleMapCredentials
 * @property {string} [api_key] - Secret API key for Google Maps. A unique
 *   identifier that authenticates requests made to Google Maps API.
 */
/**
 * @typedef GooglePlusLink
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's Google+ account
 * @property {string} [title] - Name of the social media platform, e.g. Google+
 */
/**
 * @typedef Gtm
 * @property {GtmCredentials} [credentials]
 * @property {boolean} [enabled] - Shows whether GTM integration is enabled or
 *   disabled for the sales channel
 */
/**
 * @typedef GtmCredentials
 * @property {string} [api_key] - Secret credential API key for GTM
 */
/**
 * @typedef HomePageFeature
 * @property {boolean} [order_processing] - Shows whether order processing is
 *   enabled or not enabled
 */
/**
 * @typedef InformationAddress
 * @property {string[]} [address_line] - Contact address of the sales channel
 * @property {string} [city] - Name of the city, e.g. Mumbai
 * @property {string} [country] - Name of the country, e.g. India
 * @property {string} [loc] - Co-ordinates of the location
 * @property {InformationPhone[]} [phone]
 * @property {number} [pincode] - 6-digit PIN Code of the city, e.g. 400001
 */
/**
 * @typedef InformationPhone
 * @property {string} [code] - Country code for contact number, e.g. +91 (for India)
 * @property {string} [number] - 10-digit mobile number
 */
/**
 * @typedef InformationSupport
 * @property {string[]} [email]
 * @property {string[]} [phone]
 * @property {string} [timing] - Working hours of support team, e.g. 9 AM to 9 PM
 */
/**
 * @typedef InstagramLink
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's Instagram page
 * @property {string} [title] - Name of the social media platform, e.g. Instagram
 */
/**
 * @typedef Integration
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the integration
 * @property {Object[]} [companies]
 * @property {Object} [constants]
 * @property {string} [created_at] - ISO 8601 timestamp of integration creation
 * @property {string} [description] - Basic description about the integration
 * @property {string} [description_html] - Basic HTML description about the integration
 * @property {string} [icon] - Hosted URL of the icon image
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [name] - Name of the integration, e.g. SAP RBL Integration
 * @property {string} [owner] - The unique identifier (24-digit Mongo Object ID)
 *   of the user who created the integration
 * @property {string} [secret] - Randomly generated fixed-length string for
 *   opted integration. It is auto-generated. It would never change once it is generated.
 * @property {string[]} [support]
 * @property {string} [token] - Randomly generated fixed-length string for opted
 *   integration. It is auto-generated. It would never change once it is generated.
 * @property {string} [updated_at] - ISO 8601 timestamp of integration updation
 * @property {Validators} [validators]
 */
/**
 * @typedef IntegrationConfigResponse
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef IntegrationLevel
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the integration config
 * @property {string} [created_at] - ISO 8601 timestamp of integration config creation
 * @property {Object} [data] - Schema data of the integration stored in key-value pairs
 * @property {string} [integration] - Integration id. Shows which integration
 *   you are enabling.
 * @property {LastPatch[]} [last_patch]
 * @property {string} [level] - Shows for what level the integration is set up.
 *   It can be company level or store level.
 * @property {IntegrationMeta[]} [meta]
 * @property {boolean} [opted] - Shows this integration is opted or not opted
 *   for the current company
 * @property {Object[]} [permissions]
 * @property {string} [token] - Randomly generated fixed-length string for opted
 *   integration. It is auto-generated. It would never change once it is generated.
 * @property {number} [uid] - It can be store uid or company uid. Depends on the
 *   level of integration.
 * @property {string} [updated_at] - ISO 8601 timestamp of integration config updation
 */
/**
 * @typedef IntegrationMeta
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the integration meta
 * @property {boolean} [is_public]
 * @property {string} [name] - Nmae of integration meta, e.g. price_level
 * @property {string} [value] - Value related to integration meta name, e.g. store
 */
/**
 * @typedef IntegrationOptIn
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the opted integration
 * @property {Object[]} [companies]
 * @property {string} [constants]
 * @property {string} [created_at] - ISO 8601 timestamp of integration creation
 * @property {string} [description] - Basic description about the opted integration
 * @property {string} [description_html] - Basic HTML description about the
 *   opted integration
 * @property {string} [icon] - Hosted URL of the icon image
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [name] - Nmae of the opted integration, e.g. SAP RBL Integration
 * @property {string} [owner] - The unique identifier (24-digit Mongo Object ID)
 *   of the user who created the integration
 * @property {string} [secret] - Randomly generated fixed-length string for
 *   opted integration. It is auto-generated. It would never change once it is generated.
 * @property {string[]} [support]
 * @property {string} [token] - Randomly generated fixed-length string for opted
 *   integration. It is auto-generated. It would never change once it is generated.
 * @property {string} [updated_at] - ISO 8601 timestamp of integration updation
 * @property {Validators} [validators]
 */
/**
 * @typedef InvalidPayloadRequest
 * @property {string} [message] - Error message when request body payload is improper
 */
/**
 * @typedef InventoryArticleAssignment
 * @property {boolean} [post_order_reassignment] - Allow post order reassigment of article
 * @property {ArticleAssignmentRule} [rules]
 */
/**
 * @typedef InventoryBrand
 * @property {Object[]} [brands] - List of brands
 * @property {string} [criteria] - All brands or specific (explicit) brands to
 *   be shown on the website
 */
/**
 * @typedef InventoryBrandRule
 * @property {number[]} [brands] - Brand uids in case of explicit criteria
 * @property {string} [criteria] - Whether all brands are enabled, or explicitly
 *   few brands in the inventory
 */
/**
 * @typedef InventoryCategory
 * @property {Object[]} [categories] - List of categories whose products will be
 *   shown on the website
 * @property {string} [criteria]
 */
/**
 * @typedef InventoryDiscount
 * @property {number} [max] - Maximum inventory discount
 * @property {number} [min] - Minimum inventory discount
 */
/**
 * @typedef InventoryPaymentConfig
 * @property {string} [mode_of_payment] - Mode of payment for the inventory of
 *   sales channel. It is required and default value is null.
 * @property {string} [source] - Source of the payment mode for the inventory
 *   payment of sales channel. Default value is FYND.
 */
/**
 * @typedef InventoryPrice
 * @property {number} [max] - Maximum inventory price
 * @property {number} [min] - Minimum inventory price
 */
/**
 * @typedef InventoryStore
 * @property {string} [criteria] - All stores or specific (explicit) stores to
 *   be shown on the website
 * @property {AppStoreRules} [rules]
 * @property {Object[]} [stores] - List of stores
 */
/**
 * @typedef InventoryStoreRule
 * @property {string} [criteria] - Whether enable all or explicitly few stores
 *   or use filter of brands and company as inventory stores
 * @property {StoreCriteriaRule[]} [rules] - List of rules with company and
 *   brands uids. Used when critera is `filter`
 * @property {number[]} [stores] - List of store uids. Used when critera is `explicit`
 */
/**
 * @typedef InventoryValidator
 * @property {string} [browser_script] - Browser script for the inventory validator
 * @property {JsonSchema[]} [json_schema]
 */
/**
 * @typedef Ios
 * @property {string} [api_key] - Firebase secret credential API key for IOS
 * @property {string} [application_id] - Alphanumeric ID allotted to a sales
 *   channel application created within a business account
 */
/**
 * @typedef JsonSchema
 * @property {string} [display] - Display text of the validator JSON schema. It
 *   will show in the UI.
 * @property {string} [key] - Key related to the display text of the validator JSON schema
 * @property {string} [tooltip] - Tooltip text for the UI of the validator JSON
 *   schema. It will show in the UI.
 * @property {string} [type] - Indicates the type of form field, e.g. Text, Dropdown.
 */
/**
 * @typedef LandingImage
 * @property {string} [aspect_ratio] - Width-to-height ratio of landing image
 * @property {string} [secure_url] - URL where the landing image is hosted
 */
/**
 * @typedef LandingPageFeature
 * @property {boolean} [continue_as_guest] - Shows whether a guest can checkout
 *   from cart without logging in
 * @property {LaunchPage} [launch_page]
 * @property {string} [login_btn_text] - Shows the text displayed over the login button
 * @property {boolean} [show_domain_textbox] - Shows whether a textbox for
 *   entering domain is available
 * @property {boolean} [show_register_btn] - Shows whether register button is
 *   available in the login/landing page
 */
/**
 * @typedef LastPatch
 * @property {string} [op]
 * @property {string} [path]
 * @property {string} [value] - It can be inventory level or order level
 */
/**
 * @typedef LaunchPage
 * @property {string} [page_type] - Type of the launch page
 * @property {Object} [params] - Launch page params. It can be nullable.
 * @property {Object} [query] - Query related to launch page. It can be nullable.
 */
/**
 * @typedef LinkedInLink
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's LinkedIn channel
 * @property {string} [title] - Name of the social media platform, e.g. LinkedIn
 */
/**
 * @typedef Links
 * @property {string} [link] - Web URL for redirecting to a related page
 * @property {string} [title] - Name of the related page or link
 */
/**
 * @typedef ListingPriceFeature
 * @property {string} [sort] - Sorting of listing price with min or max value.
 *   Default value is min.
 * @property {string} [value] - Shows which price to display on PLP if one
 *   product has multiple prices (for each size), valid values are 'min', 'max',
 *   'range'. Default value is range.
 */
/**
 * @typedef LoyaltyPointsConfig
 * @property {boolean} [auto_apply] - Allow auto apply of loyalty points
 * @property {boolean} [enabled] - Shows loyalty points is enabled or not enabled
 */
/**
 * @typedef Methods
 * @property {PaymentModeConfig} [card]
 * @property {PaymentModeConfig} [cod]
 * @property {PaymentModeConfig} [fc]
 * @property {PaymentModeConfig} [jiopp]
 * @property {PaymentModeConfig} [jp]
 * @property {PaymentModeConfig} [juspaypg]
 * @property {PaymentModeConfig} [nb]
 * @property {PaymentModeConfig} [pac]
 * @property {PaymentModeConfig} [payubizpg]
 * @property {PaymentModeConfig} [payumoneypg]
 * @property {PaymentModeConfig} [pl]
 * @property {PaymentModeConfig} [pp]
 * @property {PaymentModeConfig} [ps]
 * @property {PaymentModeConfig} [qr]
 * @property {PaymentModeConfig} [rupifipg]
 * @property {PaymentModeConfig} [simpl]
 * @property {PaymentModeConfig} [stripepg]
 * @property {PaymentModeConfig} [upi]
 * @property {PaymentModeConfig} [wl]
 */
/**
 * @typedef MobileAppConfigRequest
 * @property {string} [app_name] - Name of the mobile app
 * @property {boolean} [is_active] - Shows update in mobile app config is active or not
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 */
/**
 * @typedef MobileAppConfiguration
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   for mobile application configuration
 * @property {string} [app_name] - Name of the mobile app
 * @property {string} [application] - Application ID of the current sales channel
 * @property {string} [created_at] - ISO 8601 timestamp of application
 *   configuration creation
 * @property {boolean} [is_active] - Indicates the availability of the mobile build
 * @property {LandingImage} [landing_image]
 * @property {string} [package_name] - Shows bundle identifier if device
 *   platform is iOS, and directory of the app if device platform is Android
 * @property {string} [platform_type] - Device platform for which the mobile app
 *   was built, e.g. android, ios.
 * @property {SplashImage} [splash_image]
 * @property {string} [updated_at] - ISO 8601 timestamp of last known
 *   modifications to the app build
 */
/**
 * @typedef Moengage
 * @property {MoengageCredentials} [credentials]
 * @property {boolean} [enabled] - Shows whether MoEngage integation is enabled
 *   or disabled for the sales channel
 */
/**
 * @typedef MoengageCredentials
 * @property {string} [app_id] - APP ID provided by MoEngage to identify a
 *   specific app. The app_id for your MoEngage account is available on the
 *   MoEngage Dashboard.
 */
/**
 * @typedef NotFound
 * @property {string} [message] - Response message for not found
 */
/**
 * @typedef OptedApplicationResponse
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the other seller's sales channel
 * @property {OptedCompany} [company]
 * @property {string} [description] - Basic details about the other seller's sales channel
 * @property {string} [domain] - Domain URL of the other seller's sales channel
 * @property {string} [name] - Name of the other seller's sales channel
 * @property {OptOutInventory} [opt_out_inventory]
 * @property {OptedInventory} [opted_inventory]
 */
/**
 * @typedef OptedCompany
 * @property {string} [name] - Name of the company opted by the other seller's
 *   sales channel in its inventory
 * @property {number} [uid] - Company UID opted by the other seller's sales
 *   channel in its inventory. It has unique value for the company.
 */
/**
 * @typedef OptedInventory
 * @property {Object} [items]
 * @property {OptType} [opt_type]
 */
/**
 * @typedef OptedStore
 * @property {string} [_id] - The unique identifier of the opted inventory store
 * @property {OptedStoreAddress} [address]
 * @property {number} [company_id] - Company ID of the opted inventory store
 * @property {string} [display_name] - Display name of the opted inventory store
 * @property {string} [modified_on] - ISO 8601 timestamp of opted inventory store creation
 * @property {string} [name] - Name of the inventory store opted by other
 *   seller's application
 * @property {string} [store_code] - Store code of the opted inventory store. It
 *   is unique for every store.
 * @property {string} [store_type] - Store type of the opted inventory store
 *   like warehouse, high_street, mall.
 * @property {number} [uid] - UID of opted inventory store
 */
/**
 * @typedef OptedStoreAddress
 * @property {string} [address1] - Address of the opted store
 * @property {string} [address2] - Address of the opted store
 * @property {string} [city] - City of the opted store, e.g. Mumbai
 * @property {string} [country] - Country of the opted store, e.g. India
 * @property {StoreLatLong} [lat_long]
 * @property {number} [pincode] - 6-digit PIN code of the opted store location
 * @property {string} [state] - State of the opted store, e.g. Maharashtra
 */
/**
 * @typedef OptedStoreIntegration
 * @property {OtherEntity} [other_entity]
 * @property {IntegrationOptIn} [other_integration]
 * @property {boolean} [other_opted] - Allow user to opt same store in other integration
 */
/**
 * @typedef OptOutInventory
 * @property {number[]} company - List of companies opted out from the inventory
 *   of other seller's application
 * @property {number[]} store - List of selling locations (stores) opted out
 *   from the inventory of other seller's application
 */
/**
 * @typedef OptType
 * @property {string} [display] - Display text of opted type for inventory store
 * @property {string} [key] - Opted type of inventory store. It can be store or company.
 */
/**
 * @typedef OrderFeature
 * @property {boolean} [buy_again] - Allow buy again option for order. Default
 *   value is false.
 */
/**
 * @typedef OrderingStore
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the ordering store
 * @property {OptedStoreAddress} [address]
 * @property {string} [code] - Code of the ordering store (usually same as Store Code)
 * @property {string} [display_name] - Display name of the ordering store
 * @property {string} [name] - Store name of the ordering store
 * @property {number} [pincode] - 6-digit PIN Code of the ordering store, e.g. 400001
 * @property {string} [store_code] - Store code of the ordering store, e.g. MUM-102
 * @property {string} [store_type] - Store type of the ordering store, e.g.
 *   high_street, mall, warehouse
 * @property {number} [uid] - Ordering store UID
 */
/**
 * @typedef OrderingStoreConfig
 * @property {DeploymentMeta} [deployment_meta]
 */
/**
 * @typedef OrderingStores
 * @property {number} [__v] - Version key for tracking ordering stores. Default
 *   value is zero.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the ordering store
 * @property {boolean} [all_stores] - Allow all stores of the ordering stores
 * @property {string} [app] - Alphanumeric ID allotted to an application (sales
 *   channel website) created within a business account
 * @property {number[]} [deployed_stores]
 * @property {boolean} [enabled] - Allow ordering stores for current sales channel
 * @property {OrderingStore[]} [items]
 * @property {Page} [page]
 * @property {string} [type] - For hard type delivery, store selection is
 *   compulsory. For soft type, delivery store selection is optional.
 */
/**
 * @typedef OrderingStoresResponse
 * @property {OrderingStore[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OrderValidator
 * @property {string} [browser_script] - Browser script for the order validator
 * @property {JsonSchema[]} [json_schema]
 */
/**
 * @typedef OtherEntity
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {string} [_id] - The unique identifier of the other entity for
 *   opted store integration
 * @property {string} [created_at] - ISO 8601 timestamp of other entity creation
 *   for opted store integration
 * @property {OtherEntityData} [data]
 * @property {string} [integration] - Integration ID. Shows which integration
 *   you are enabling.
 * @property {LastPatch[]} [last_patch]
 * @property {string} [level] - Indicates integration level. It can be company
 *   level or store level.
 * @property {Object[]} [meta]
 * @property {boolean} [opted] - Allow other entity opted in integration
 * @property {string[]} [permissions]
 * @property {string} [token] - Randomly generated fixed-length string for opted
 *   integration. It is auto-generated. It would never change once it is generated.
 * @property {number} [uid] - It can be store uid or company uid. Depends on the
 *   level of integration.
 * @property {string} [updated_at] - ISO 8601 timestamp of other entity updation
 *   for opted store integration
 */
/**
 * @typedef OtherEntityData
 * @property {string} [article_identifier]
 */
/**
 * @typedef OtherSellerApplication
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the other seller's sales channel
 * @property {OtherSellerCompany} [company]
 * @property {string} [description] - Basic details about the other seller's sales channel
 * @property {string} [domain] - Domain URL of the other seller's sales channel
 * @property {string} [name] - Name of the other seller's sales channel
 * @property {string} [opt_type] - Inventory opted by the other seller's sales
 *   channel. It can be the current company or stores in the current company.
 */
/**
 * @typedef OtherSellerApplications
 * @property {OtherSellerApplication[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OtherSellerCompany
 * @property {string} [name] - Name of the seller company
 * @property {number} [uid] - Uid of the seller company
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
 * @typedef PanCardConfig
 * @property {number} [cod_threshold_amount] - On which COD order amount pan
 *   card number is expected from customer for order
 * @property {boolean} [enabled] - If pan card accepting is enabled on cart
 * @property {number} [online_threshold_amount] - On which online payment order
 *   amount pan card number is expected from customer for order
 */
/**
 * @typedef PaymentModeConfig
 * @property {boolean} [enabled] - Shows if a given payment method is enabled or
 *   not, e.g. if 'nb' is enabled, customer can use NetBanking for payment.
 */
/**
 * @typedef PaymentSelectionLock
 * @property {string} [default_options] - Shows default payment method, e.g. COD
 * @property {boolean} [enabled] - Shows whether payment mode is restricted to a
 *   specific option, e.g. 'HDFC Netbanking'
 * @property {string} [payment_identifier] - Payment method chosen from default
 *   options, e.g. COD
 */
/**
 * @typedef PcrFeature
 * @property {boolean} [staff_selection] - Allow staff selection. Default value is false.
 */
/**
 * @typedef PinterestLink
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's Pinterest page
 * @property {string} [title] - Name of the social media platform, e.g. Pinterest
 */
/**
 * @typedef ProductDetailFeature
 * @property {boolean} [request_product] - Indicates whether customers can
 *   request for a product. Default value is false.
 * @property {boolean} [seller_selection] - Shows whether the customers can
 *   choose the seller on PDP
 * @property {string[]} [similar] - Configuration to show similar products,
 *   other products from same seller, other products in same category, other
 *   products in same price range, etc.
 * @property {boolean} [update_product_meta] - Allow user to update product
 *   meta. Default value is true.
 */
/**
 * @typedef QrFeature
 * @property {boolean} [application] - Shows whether sharing of mobile app via
 *   QR code is allowed. Default value is false.
 * @property {boolean} [collections] - Shows whether sharing collection via QR
 *   code is allowed. Default value is false.
 * @property {boolean} [products] - Shows whether sharing product via QR code is
 *   allowed. Default value is false.
 */
/**
 * @typedef RegistrationPageFeature
 * @property {boolean} [ask_store_address] - Shows whether a form to collect the
 *   address of the store, should be displayed upon visiting the website
 */
/**
 * @typedef RevenueEngineFeature
 * @property {boolean} [enabled] - Enable revenue engine. Default value is false.
 */
/**
 * @typedef RewardPointsConfig
 * @property {Credit} [credit]
 * @property {Debit} [debit]
 */
/**
 * @typedef Safetynet
 * @property {SafetynetCredentials} [credentials]
 * @property {boolean} [enabled] - Shows whether Safetynet integration is
 *   enabled or disabled for the sales channel
 */
/**
 * @typedef SafetynetCredentials
 * @property {string} [api_key] - Secret credential API key for Safetynet. This
 *   API key is used for calling the methods of Safetynet APIs.
 */
/**
 * @typedef SecureUrl
 * @property {string} [secure_url] - Hosted URL of the image
 */
/**
 * @typedef Segment
 * @property {SegmentCredentials} [credentials]
 * @property {boolean} [enabled] - Shows whether Segment integration is enabled
 *   or disabled for the sales channel
 */
/**
 * @typedef SegmentCredentials
 * @property {string} [write_key] - The unique identifier for a source that
 *   tells Segment from which source data is coming from, to which workspace the
 *   data belongs, and which destinations should receive the data.
 */
/**
 * @typedef SocialLinks
 * @property {BlogLink} [blog_link]
 * @property {FacebookLink} [facebook]
 * @property {GooglePlusLink} [google_plus]
 * @property {InstagramLink} [instagram]
 * @property {LinkedInLink} [linked_in]
 * @property {PinterestLink} [pinterest]
 * @property {TwitterLink} [twitter]
 * @property {VimeoLink} [vimeo]
 * @property {YoutubeLink} [youtube]
 */
/**
 * @typedef SplashImage
 * @property {string} [aspect_ratio] - Width-to-height ratio of splash image
 * @property {string} [secure_url] - URL where the splash image is hosted
 */
/**
 * @typedef StoreByBrandsRequest
 * @property {number} brands - Brand UID
 * @property {number} [company_id] - Current company ID for current company
 *   stores only. Don't send in case cross-selling (franchise) is enabled.
 * @property {string} [search_text] - Search store by its name or store code
 */
/**
 * @typedef StoreByBrandsResponse
 * @property {BrandStoreInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef StoreCriteriaRule
 * @property {number[]} [brands] - List of brand uids
 * @property {number[]} [companies] - List of company uids
 */
/**
 * @typedef StoreLatLong
 * @property {number[]} [coordinates]
 * @property {string} [type] - Coordinates type of the opted store
 */
/**
 * @typedef StorePriority
 * @property {boolean} [enabled] - Shows store priority is enabled or disabled
 *   for assignment of article
 * @property {Object[]} [storetype_order] - List of store types for article
 *   assignment e.g. warehouse, mall, highstreet
 */
/**
 * @typedef StorePriorityRule
 * @property {boolean} [enabled] - Shows store priority is enabled or not
 *   enabled for the article assignment.
 * @property {string[]} [storetype_order]
 */
/**
 * @typedef StoresResponse
 * @property {AppInventoryStores} [items]
 * @property {Page} [page]
 */
/**
 * @typedef StoreValidator
 * @property {string} [browser_script] - Browser script for the store validator
 * @property {JsonSchema[]} [json_schema]
 */
/**
 * @typedef SuccessMessageResponse
 * @property {string} [message] - Success message shown to the user (in a string format)
 * @property {boolean} [success] - Shows whether domain was deleted successfully
 */
/**
 * @typedef TokenResponse
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the token
 * @property {string} [application] - Alphanumeric ID allotted to the current
 *   application created within the current business account
 * @property {string} [created_at] - ISO 8601 timestamp of token creation
 * @property {Tokens} [tokens]
 * @property {string} [updated_at] - ISO 8601 timestamp of token updation
 */
/**
 * @typedef Tokens
 * @property {Firebase} [firebase]
 * @property {Freshchat} [freshchat]
 * @property {FyndRewards} [fynd_rewards]
 * @property {GoogleMap} [google_map]
 * @property {Gtm} [gtm]
 * @property {Moengage} [moengage]
 * @property {Safetynet} [safetynet]
 * @property {Segment} [segment]
 */
/**
 * @typedef TwitterLink
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's Twitter account
 * @property {string} [title] - Name of the social media platform, e.g. Twitter
 */
/**
 * @typedef UnhandledError
 * @property {string} [message]
 */
/**
 * @typedef UpdateDomain
 * @property {string} [_id] - The unique identifier (24-digit Mongo Object ID)
 *   of the domain
 * @property {boolean} [is_primary] - Domain is primary or not (indicates if the
 *   domain has been made the main URL of the sales channel)
 * @property {boolean} [is_shortlink] - Indicates if the domain is a short link
 *   domain (short URL e.g. bit.ly)
 * @property {string} [name] - Full domain name, e.g. zenz.com
 * @property {boolean} [verified] - Domain is verified or not (indicates if A
 *   records and TXT records are correct)
 */
/**
 * @typedef UpdateDomainTypeRequest
 * @property {string} [action] - Shows domain is made primary domain for the
 *   sales channel or shorlink is created for the sales channel domain
 * @property {UpdateDomain} [domain]
 */
/**
 * @typedef UpdateIntegrationLevelRequest
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef UserEmail
 * @property {boolean} [active] - Current email is active or not active
 * @property {string} [email] - Email address of the user
 * @property {boolean} [primary] - Indicates current email is primay email or
 *   not primary email of user
 * @property {boolean} [verified] - Indicates current email is verified email or
 *   not verified email
 */
/**
 * @typedef UserPhoneNumber
 * @property {boolean} [active] - Current phone number is active or not active
 * @property {number} [country_code] - Country code, e.g. +91
 * @property {string} [phone] - Phone number of the user
 * @property {boolean} [primary] - Indicates current phone number is primay or
 *   not primary of user
 * @property {boolean} [verified] - Indicates current phone number is verified
 *   or not verified
 */
/**
 * @typedef ValidationFailedResponse
 * @property {string} [message] - Response message for failed validation
 */
/**
 * @typedef Validators
 * @property {CompanyValidator} [company]
 * @property {InventoryValidator} [inventory]
 * @property {OrderValidator} [order]
 * @property {StoreValidator} [store]
 */
/**
 * @typedef VimeoLink
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's Vimeo channel
 * @property {string} [title] - Name of the video hosting platform, e.g. Vimeo
 */
/**
 * @typedef YoutubeLink
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's YouTube channel
 * @property {string} [title] - Name of the social media platform, e.g. YouTube
 */
declare class ConfigurationPlatformModel {
}
declare namespace ConfigurationPlatformModel {
    export { Android, App, AppCartConfig, AppCurrencyResponse, AppDomain, AppFeature, AppFeatureRequest, AppFeatureResponse, AppInventory, AppInventoryCompanies, AppInventoryConfig, AppInventoryPartialUpdate, AppInventoryStores, Application, ApplicationAuth, ApplicationCors, ApplicationDetail, ApplicationInformation, ApplicationInventory, ApplicationMeta, ApplicationRedirections, ApplicationsResponse, ApplicationWebsite, AppLogisticsConfig, AppOrderConfig, AppPaymentConfig, AppStoreRules, AppSupportedCurrency, ArticleAssignmentConfig, ArticleAssignmentRule, ArticleAssignmentRules, AuthenticationConfig, BlogLink, BrandCompanyInfo, BrandsByCompanyResponse, BrandStoreInfo, BuildVersion, BuildVersionHistory, BusinessHighlights, CallbackUrl, CartFeature, Charges, CommonFeature, CommsConfig, CommunicationConfig, CommunicationOptinDialogFeature, CompaniesResponse, CompanyAboutAddress, CompanyBrandInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, CompanyValidator, CompareProductsFeature, CreateApplicationRequest, CreateAppResponse, Credentials, Credit, CurrenciesResponse, Currency, CurrencyConfig, CurrencyFeature, Debit, DefaultCurrency, DeliveryCharges, DeploymentMeta, DeploymentStoreSelectionFeature, Domain, DomainAdd, DomainAddRequest, DomainsResponse, DomainStatus, DomainStatusRequest, DomainStatusResponse, DomainSuggestion, DomainSuggestionsRequest, DomainSuggestionsResponse, FacebookLink, FeedbackFeature, FilterOrderingStoreRequest, Firebase, Freshchat, FreshchatCredentials, FyndRewards, FyndRewardsCredentials, GetIntegrationsOptInsResponse, GoogleMap, GoogleMapCredentials, GooglePlusLink, Gtm, GtmCredentials, HomePageFeature, InformationAddress, InformationPhone, InformationSupport, InstagramLink, Integration, IntegrationConfigResponse, IntegrationLevel, IntegrationMeta, IntegrationOptIn, InvalidPayloadRequest, InventoryArticleAssignment, InventoryBrand, InventoryBrandRule, InventoryCategory, InventoryDiscount, InventoryPaymentConfig, InventoryPrice, InventoryStore, InventoryStoreRule, InventoryValidator, Ios, JsonSchema, LandingImage, LandingPageFeature, LastPatch, LaunchPage, LinkedInLink, Links, ListingPriceFeature, LoyaltyPointsConfig, Methods, MobileAppConfigRequest, MobileAppConfiguration, Moengage, MoengageCredentials, NotFound, OptedApplicationResponse, OptedCompany, OptedInventory, OptedStore, OptedStoreAddress, OptedStoreIntegration, OptOutInventory, OptType, OrderFeature, OrderingStore, OrderingStoreConfig, OrderingStores, OrderingStoresResponse, OrderValidator, OtherEntity, OtherEntityData, OtherSellerApplication, OtherSellerApplications, OtherSellerCompany, Page, PanCardConfig, PaymentModeConfig, PaymentSelectionLock, PcrFeature, PinterestLink, ProductDetailFeature, QrFeature, RegistrationPageFeature, RevenueEngineFeature, RewardPointsConfig, Safetynet, SafetynetCredentials, SecureUrl, Segment, SegmentCredentials, SocialLinks, SplashImage, StoreByBrandsRequest, StoreByBrandsResponse, StoreCriteriaRule, StoreLatLong, StorePriority, StorePriorityRule, StoresResponse, StoreValidator, SuccessMessageResponse, TokenResponse, Tokens, TwitterLink, UnhandledError, UpdateDomain, UpdateDomainTypeRequest, UpdateIntegrationLevelRequest, UserEmail, UserPhoneNumber, ValidationFailedResponse, Validators, VimeoLink, YoutubeLink };
}
/** @returns {Android} */
declare function Android(): Android;
type Android = {
    /**
     * - Firebase secret credential API key for Android
     */
    api_key?: string;
    /**
     * - Alphanumeric ID allotted to a sales
     * channel application created within a business account
     */
    application_id?: string;
};
/** @returns {App} */
declare function App(): App;
type App = {
    auth?: ApplicationAuth;
    /**
     * - It indicates different channel types like
     * store, website-and-mobile-apps. Default value is store
     */
    channel_type?: string;
    /**
     * - Numeric ID allotted to a business account
     * on Fynd Platform.
     */
    company_id?: string;
    /**
     * - Detailed description about the sales channel
     */
    desc?: string;
    /**
     * - User-friendly name for sales channel, e.g. Zenz Fashion
     */
    name?: string;
};
/** @returns {AppCartConfig} */
declare function AppCartConfig(): AppCartConfig;
type AppCartConfig = {
    /**
     * - Allow creation of bulk coupons
     */
    bulk_coupons?: boolean;
    delivery_charges?: DeliveryCharges;
    /**
     * - Enable/disable to allow adding cart items
     * added before login to user's cart once user is logged in
     */
    empty_cart?: boolean;
    /**
     * - Shows whether cart configuration is enabled or not
     */
    enabled?: boolean;
    /**
     * - Maximum number of items that can be
     * added to cart by the customer
     */
    max_cart_items?: number;
    /**
     * - Minimum cart value below which customer
     * cannot place an order
     */
    min_cart_value?: number;
    pan_card?: PanCardConfig;
    /**
     * - Allow coupon apply and credits
     * together. Default value is false.
     */
    revenue_engine_coupon?: boolean;
};
/** @returns {AppCurrencyResponse} */
declare function AppCurrencyResponse(): AppCurrencyResponse;
type AppCurrencyResponse = {
    /**
     * - Alphanumeric ID allotted to an application
     * (sales channel website) created within a business account
     */
    application?: string;
    default_currency?: DefaultCurrency;
    supported_currency?: Currency[];
};
/** @returns {AppDomain} */
declare function AppDomain(): AppDomain;
type AppDomain = {
    /**
     * - Domain URL of current sales channel, e.g. zenz.com
     */
    name?: string;
};
/** @returns {AppFeature} */
declare function AppFeature(): AppFeature;
type AppFeature = {
    /**
     * - Version key for tracking revisions. Default value is zero
     */
    __v?: number;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * for the sales channel features
     */
    _id?: string;
    /**
     * - Application ID of the sales channel
     */
    app?: string;
    cart?: CartFeature;
    common?: CommonFeature;
    /**
     * - ISO 8601 timestamp showing the date when
     * the features were configured
     */
    created_at?: string;
    home_page?: HomePageFeature;
    landing_page?: LandingPageFeature;
    order?: OrderFeature;
    pcr?: PcrFeature;
    product_detail?: ProductDetailFeature;
    qr?: QrFeature;
    registration_page?: RegistrationPageFeature;
    /**
     * - ISO 8601 timestamp of last known
     * modifications to the sales channel feature configuration
     */
    updated_at?: string;
};
/** @returns {AppFeatureRequest} */
declare function AppFeatureRequest(): AppFeatureRequest;
type AppFeatureRequest = {
    feature?: AppFeature;
};
/** @returns {AppFeatureResponse} */
declare function AppFeatureResponse(): AppFeatureResponse;
type AppFeatureResponse = {
    feature?: AppFeature;
};
/** @returns {AppInventory} */
declare function AppInventory(): AppInventory;
type AppInventory = {
    article_assignment?: InventoryArticleAssignment;
    brand?: InventoryBrandRule;
    /**
     * - Allow other businesses (companies)
     * to consume the current sales channel's inventory and sell products
     */
    franchise_enabled?: boolean;
    image?: string[];
    /**
     * - Show only verified products
     * (the ones whose data have been verified by the admin)
     */
    only_verified_products?: boolean;
    /**
     * - Indicates whether out of stock products
     * are allowed to show up on the website.
     */
    out_of_stock?: boolean;
    payment?: InventoryPaymentConfig;
    store?: InventoryStoreRule;
};
/** @returns {AppInventoryCompanies} */
declare function AppInventoryCompanies(): AppInventoryCompanies;
type AppInventoryCompanies = {
    /**
     * - Indicates the type of the company, e.g.
     * franchisee, distributor, etc.
     */
    company_type?: string;
    /**
     * - Name of the company, e.g. Newton Traders
     */
    name?: string;
    /**
     * - UID of the company, e.g. 108
     */
    uid?: number;
};
/** @returns {AppInventoryConfig} */
declare function AppInventoryConfig(): AppInventoryConfig;
type AppInventoryConfig = {
    brand?: InventoryBrand;
    category?: InventoryCategory;
    /**
     * - List of selling locations whose
     * inventory is available to the sales channel for displaying on the website
     */
    company_store?: any[];
    discount?: InventoryDiscount;
    /**
     * - List of excluded brands category
     */
    exclude_category?: any[];
    /**
     * - Allow other businesses (companies)
     * to consume the current sales channel's inventory and sell products
     */
    franchise_enabled?: boolean;
    image?: string[];
    /**
     * - Show only verified products
     * (the ones whose data has been verified by the admin)
     */
    only_verified_products?: boolean;
    /**
     * - Indicates whether out of stock products
     * are allowed to show up on the website
     */
    out_of_stock?: boolean;
    price?: InventoryPrice;
    store?: InventoryStore;
};
/** @returns {AppInventoryPartialUpdate} */
declare function AppInventoryPartialUpdate(): AppInventoryPartialUpdate;
type AppInventoryPartialUpdate = {
    cart?: AppCartConfig;
    /**
     * - Shows communication (comms) is enabled
     * or not for sales channel partial inventory update
     */
    comms_enabled?: boolean;
    communication?: CommunicationConfig;
    loyalty_points?: LoyaltyPointsConfig;
    payment?: AppPaymentConfig;
    reward_points?: RewardPointsConfig;
};
/** @returns {AppInventoryStores} */
declare function AppInventoryStores(): AppInventoryStores;
type AppInventoryStores = {
    /**
     * - The unique identifier of the store (24-digit Mongo
     * Object ID) in the sales channel inventory
     */
    _id?: string;
    /**
     * - Company ID of the selling location (store)
     * added to the sales channel's inventory
     */
    company_id?: number;
    /**
     * - Display name of the sales channel
     * inventory store (can be different than the actual store name), e.g. Reebok MUM
     */
    display_name?: string;
    /**
     * - ISO 8601 timestamp of last known updation
     * to the stores in sales channel inventory
     */
    modified_on?: string;
    /**
     * - Name of the store in the sales channel inventory,
     * e.g. Reebok Mumbai
     */
    name?: string;
    /**
     * - Store code of the enabled inventory store,
     * e.g. HS-c9bac. It is unique for every store.
     */
    store_code?: string;
    /**
     * - Store type of the sales channel inventory
     * store, such as mall, warehouse, high_street
     */
    store_type?: string;
    /**
     * - Sales channel inventory store UID
     */
    uid?: number;
};
/** @returns {Application} */
declare function Application(): Application;
type Application = {
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the sales channel
     */
    _id?: string;
    /**
     * - It shows application is live or in development mode.
     */
    app_type?: string;
    auth?: ApplicationAuth;
    banner?: SecureUrl;
    /**
     * - An integer value that specifies the number
     * of seconds until the key expires
     */
    cache_ttl?: number;
    /**
     * - It indicates different channel types like
     * store, website-and-mobile-apps. Default value is store
     */
    channel_type?: string;
    /**
     * - Numeric ID allotted to a business account
     * where the sales channel exists
     */
    company_id?: number;
    cors?: ApplicationCors;
    /**
     * - ISO 8601 timestamp of sales channel creation
     */
    created_at?: string;
    /**
     * - It contains detailed information about the
     * sales channel.
     */
    description?: string;
    domain?: Domain;
    domains?: Domain[];
    favicon?: SecureUrl;
    /**
     * - Indicates sales channel is active or not active
     */
    is_active?: boolean;
    /**
     * - Indicates whether a sales channel is
     * internal or not
     */
    is_internal?: boolean;
    logo?: SecureUrl;
    meta?: ApplicationMeta[];
    mobile_logo?: SecureUrl;
    /**
     * - Name of the sales channel, e.g. Zenz Fashion
     */
    name?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of owner who owns the application
     */
    owner?: string;
    redirections?: ApplicationRedirections[];
    slug?: string;
    /**
     * - Random generated fix length string for sales
     * channel. It is required and auto-generated.
     */
    token?: string;
    /**
     * - ISO 8601 timestamp of sales channel updation
     */
    updated_at?: string;
    website?: ApplicationWebsite;
};
/** @returns {ApplicationAuth} */
declare function ApplicationAuth(): ApplicationAuth;
type ApplicationAuth = {
    /**
     * - Shows sales channel auth is enabled or not enabled.
     */
    enabled?: boolean;
};
/** @returns {ApplicationCors} */
declare function ApplicationCors(): ApplicationCors;
type ApplicationCors = {
    domains?: string[];
};
/** @returns {ApplicationDetail} */
declare function ApplicationDetail(): ApplicationDetail;
type ApplicationDetail = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * for the sales channel details
     */
    _id?: string;
    banner?: SecureUrl;
    /**
     * - It gives a detailed information about the
     * sales channel. It is required.
     */
    description?: string;
    domain?: Domain;
    domains?: Domain[];
    favicon?: SecureUrl;
    logo?: SecureUrl;
    mobile_logo?: SecureUrl;
    /**
     * - Name of the sales channel. It is required.
     */
    name: string;
    slug?: string;
};
/** @returns {ApplicationInformation} */
declare function ApplicationInformation(): ApplicationInformation;
type ApplicationInformation = {
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    /**
     * - Unique identifier (24-digit Mongo Object ID) of
     * the application information
     */
    _id?: string;
    address?: InformationAddress;
    /**
     * - Alphanumeric ID allotted to a sales
     * channel application created within a business account
     */
    application?: string;
    business_highlights?: BusinessHighlights;
    /**
     * - Copyright statement usually seen at the
     * site's footer
     */
    copyright_text?: string;
    /**
     * - ISO 8601 timestamp of creation of the
     * application information
     */
    created_at?: string;
    links?: Links;
    social_links?: SocialLinks;
    support?: InformationSupport;
    /**
     * - ISO 8601 timestamp of updation of the
     * application information
     */
    updated_at?: string;
};
/** @returns {ApplicationInventory} */
declare function ApplicationInventory(): ApplicationInventory;
type ApplicationInventory = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the sales channel inventory
     */
    _id?: string;
    /**
     * - Current sales channel ID
     */
    app?: string;
    article_assignment?: ArticleAssignmentConfig;
    authentication?: AuthenticationConfig;
    /**
     * - Indicates the business type for sales channel
     * e.g. retail or wholesale
     */
    business?: string;
    cart?: AppCartConfig;
    /**
     * - Shows communication(comms) is enabled
     * or not for sales channel inventory
     */
    comms_enabled?: boolean;
    communication?: CommunicationConfig;
    /**
     * - ISO 8601 timestamp of sales channel
     * inventory creation
     */
    created_at?: string;
    inventory?: AppInventoryConfig;
    logistics?: AppLogisticsConfig;
    loyalty_points?: LoyaltyPointsConfig;
    /**
     * - User ID of the person who made the latest
     * changes in the sales channel inventory
     */
    modified_by?: string;
    order?: AppOrderConfig;
    payment?: AppPaymentConfig;
    platforms?: string[];
    reward_points?: RewardPointsConfig;
    /**
     * - ISO 8601 timestamp of sales channel
     * inventory updation
     */
    updated_at?: string;
};
/** @returns {ApplicationMeta} */
declare function ApplicationMeta(): ApplicationMeta;
type ApplicationMeta = {
    /**
     * - Indicates to name of application meta
     */
    name?: string;
    /**
     * - Value related to application meta name
     */
    value?: string;
};
/** @returns {ApplicationRedirections} */
declare function ApplicationRedirections(): ApplicationRedirections;
type ApplicationRedirections = {
    /**
     * - Old domain url of the sales channel
     */
    redirect_from?: string;
    /**
     * - New domain URL of the sales channel. Users
     * will be automatically redirected from old domain to new domain.
     */
    redirect_to?: string;
    /**
     * - It shows domain redirection type. Permanent
     * redirection is for long time period redirection, and temporary redirection
     * for a short time period.
     */
    type?: string;
};
/** @returns {ApplicationsResponse} */
declare function ApplicationsResponse(): ApplicationsResponse;
type ApplicationsResponse = {
    items?: Application[];
    page?: Page;
};
/** @returns {ApplicationWebsite} */
declare function ApplicationWebsite(): ApplicationWebsite;
type ApplicationWebsite = {
    /**
     * - Base path for the current sales channel website
     */
    basepath?: string;
    /**
     * - Shows whether sales channel website URL is
     * enabled or not
     */
    enabled?: boolean;
};
/** @returns {AppLogisticsConfig} */
declare function AppLogisticsConfig(): AppLogisticsConfig;
type AppLogisticsConfig = {
    dp_assignment?: boolean;
    logistics_by_seller?: boolean;
    same_day_delivery?: boolean;
    serviceability_check?: boolean;
};
/** @returns {AppOrderConfig} */
declare function AppOrderConfig(): AppOrderConfig;
type AppOrderConfig = {
    /**
     * - Allow orders to be accepted from the sales channel
     */
    enabled?: boolean;
    /**
     * - Allow force reassigning of an order
     */
    force_reassignment?: boolean;
    /**
     * - Reason for reassigning an order
     */
    message?: string;
};
/** @returns {AppPaymentConfig} */
declare function AppPaymentConfig(): AppPaymentConfig;
type AppPaymentConfig = {
    /**
     * - Allow cash on delivery for anonymous user
     */
    anonymous_cod?: boolean;
    callback_url?: CallbackUrl;
    /**
     * - Maximum amount allowed for COD order.
     * Beyond this, customer cannot opt for COD.
     */
    cod_amount_limit?: number;
    /**
     * - Extra charge applicable for COD orders
     */
    cod_charges?: number;
    /**
     * - Allow payment option within sales channel
     */
    enabled?: boolean;
    methods?: Methods;
    /**
     * - Mode of payment for sales channel
     * payment, e.g. 'ECOMM'.
     */
    mode_of_payment?: string;
    payment_selection_lock?: PaymentSelectionLock;
    /**
     * - Source of the payment mode, e.g. 'ECOMM'.
     * Default value is FYND.
     */
    source?: string;
};
/** @returns {AppStoreRules} */
declare function AppStoreRules(): AppStoreRules;
type AppStoreRules = {
    /**
     * - List of brands whose products will be shown
     * on the website
     */
    brands?: any[];
    /**
     * - List of companies whose inventory is
     * available to the sales channel for displaying on the website
     */
    companies?: number[];
};
/** @returns {AppSupportedCurrency} */
declare function AppSupportedCurrency(): AppSupportedCurrency;
type AppSupportedCurrency = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the currency configuration supported by the application
     */
    _id?: string;
    /**
     * - Alphanumeric ID allotted to an application
     * (sales channel website) created within a business account.
     */
    application?: string;
    /**
     * - ISO 8601 timestamp when currency was added
     * in the list of currencies supported by the sales channel
     */
    created_at?: string;
    default_currency?: DefaultCurrency;
    supported_currency?: string[];
    /**
     * - ISO 8601 timestamp when currency was
     * updated in the list of currencies supported by the sales channel
     */
    updated_at?: string;
};
/** @returns {ArticleAssignmentConfig} */
declare function ArticleAssignmentConfig(): ArticleAssignmentConfig;
type ArticleAssignmentConfig = {
    /**
     * - Allow post order reassigment of article
     */
    post_order_reassignment?: boolean;
    rules?: ArticleAssignmentRules;
};
/** @returns {ArticleAssignmentRule} */
declare function ArticleAssignmentRule(): ArticleAssignmentRule;
type ArticleAssignmentRule = {
    store_priority?: StorePriorityRule;
};
/** @returns {ArticleAssignmentRules} */
declare function ArticleAssignmentRules(): ArticleAssignmentRules;
type ArticleAssignmentRules = {
    store_priority?: StorePriority;
};
/** @returns {AuthenticationConfig} */
declare function AuthenticationConfig(): AuthenticationConfig;
type AuthenticationConfig = {
    /**
     * - Shows inventory authentication provider
     */
    provider?: string;
    /**
     * - Shows sales channel inventory authentication
     * is required or not
     */
    required?: boolean;
};
/** @returns {BlogLink} */
declare function BlogLink(): BlogLink;
type BlogLink = {
    /**
     * - Hosted URL of icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's blog page
     */
    link?: string;
    /**
     * - Name of the brand's blog page
     */
    title?: string;
};
/** @returns {BrandCompanyInfo} */
declare function BrandCompanyInfo(): BrandCompanyInfo;
type BrandCompanyInfo = {
    /**
     * - Numeric ID allotted to a business account
     */
    company_id?: number;
    /**
     * - Name of the company dealing with the brand
     */
    company_name?: string;
};
/** @returns {BrandsByCompanyResponse} */
declare function BrandsByCompanyResponse(): BrandsByCompanyResponse;
type BrandsByCompanyResponse = {
    brands?: CompanyBrandInfo;
};
/** @returns {BrandStoreInfo} */
declare function BrandStoreInfo(): BrandStoreInfo;
type BrandStoreInfo = {
    company?: OptedCompany;
    store_address?: OptedStoreAddress;
    /**
     * - Store code of the brand. It is unique for
     * every brand store.
     */
    store_code?: string;
    /**
     * - The unique identifier of the selling location (store)
     */
    store_id?: number;
    /**
     * - Name of the selling location (store)
     */
    store_name?: string;
    /**
     * - Store type of the brand like warehouse,
     * high_street, mall
     */
    store_type?: string;
};
/** @returns {BuildVersion} */
declare function BuildVersion(): BuildVersion;
type BuildVersion = {
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    /**
     * - 24-digit Mongo Object ID
     */
    _id?: string;
    /**
     * - Application ID of the sales channel
     */
    application?: string;
    /**
     * - Current progress of the mobile build,
     * e.g. pending, cancelled, failed, success
     */
    build_status?: string;
    /**
     * - ISO 8601 timestamp of app creation
     */
    created_at?: string;
    /**
     * - Device platform for which the mobile app
     * was built, e.g. android, ios.
     */
    platform_type?: string;
    /**
     * - ISO 8601 timestamp of last known
     * modifications to the app build
     */
    updated_at?: string;
    /**
     * - A positive integer used as an internal
     * version number
     */
    version_code?: number;
    /**
     * - Version number of the mobile build, in
     * dot-decimal notation
     */
    version_name?: string;
};
/** @returns {BuildVersionHistory} */
declare function BuildVersionHistory(): BuildVersionHistory;
type BuildVersionHistory = {
    /**
     * - Latest version number of
     * the mobile build, in dot-decimal notation
     */
    latest_available_version_name?: string;
    versions?: BuildVersion;
};
/** @returns {BusinessHighlights} */
declare function BusinessHighlights(): BusinessHighlights;
type BusinessHighlights = {
    /**
     * - Unique identifier (24-digit Mongo Object ID) of
     * the related business
     */
    _id?: string;
    /**
     * - Hosted URL of icon image representing the
     * business highlight
     */
    icon?: string;
    /**
     * - Detailed information about the highlight
     */
    sub_title?: string;
    /**
     * - Title of the business highlight, e.g. Superfast Delivery
     */
    title?: string;
};
/** @returns {CallbackUrl} */
declare function CallbackUrl(): CallbackUrl;
type CallbackUrl = {
    /**
     * - Payment callback url for app
     */
    app?: string;
    /**
     * - Payment callback url for web
     */
    web?: string;
};
/** @returns {CartFeature} */
declare function CartFeature(): CartFeature;
type CartFeature = {
    /**
     * - Allow adding of Google Maps. Default value is true.
     */
    google_map?: boolean;
    /**
     * - Shows whether customer is allowed to enter
     * GST on the cart page for claiming input credits
     */
    gst_input?: boolean;
    /**
     * - Shows whether the staff is
     * placing order on behalf of customer. Default value is true.
     */
    placing_for_customer?: boolean;
    /**
     * - Allow coupon apply and credits,
     * together. Default value is false.
     */
    revenue_engine_coupon?: boolean;
    /**
     * - Shows whether staff selection is
     * enabled on cart page
     */
    staff_selection?: boolean;
};
/** @returns {Charges} */
declare function Charges(): Charges;
type Charges = {
    /**
     * - Delivery amount to be charged when order value
     * is below the defined threshold value
     */
    charges?: number;
    /**
     * - The order value below which an extra
     * delivery fee will be applicable
     */
    threshold?: number;
};
/** @returns {CommonFeature} */
declare function CommonFeature(): CommonFeature;
type CommonFeature = {
    communication_optin_dialog?: CommunicationOptinDialogFeature;
    compare_products?: CompareProductsFeature;
    currency?: CurrencyFeature;
    deployment_store_selection?: DeploymentStoreSelectionFeature;
    feedback?: FeedbackFeature;
    listing_price?: ListingPriceFeature;
    revenue_engine?: RevenueEngineFeature;
    reward_points?: RewardPointsConfig;
};
/** @returns {CommsConfig} */
declare function CommsConfig(): CommsConfig;
type CommsConfig = {
    /**
     * - Check current communication channel is enabled
     */
    enabled?: boolean;
};
/** @returns {CommunicationConfig} */
declare function CommunicationConfig(): CommunicationConfig;
type CommunicationConfig = {
    email?: CommsConfig;
    sms?: CommsConfig;
    voice?: CommsConfig;
};
/** @returns {CommunicationOptinDialogFeature} */
declare function CommunicationOptinDialogFeature(): CommunicationOptinDialogFeature;
type CommunicationOptinDialogFeature = {
    /**
     * - Shows whether WhatsApp communication is enabled
     */
    visibility?: boolean;
};
/** @returns {CompaniesResponse} */
declare function CompaniesResponse(): CompaniesResponse;
type CompaniesResponse = {
    items?: AppInventoryCompanies;
    page?: Page;
};
/** @returns {CompanyAboutAddress} */
declare function CompanyAboutAddress(): CompanyAboutAddress;
type CompanyAboutAddress = {
    /**
     * - Indicates different office types like
     * office, registered, and home.
     */
    address_type?: string;
    /**
     * - Primary address line of the company
     */
    address1?: string;
    /**
     * - Secondary address line of the company
     */
    address2?: string;
    /**
     * - City name, e.g. Mumbai
     */
    city?: string;
    /**
     * - Country name, e.g. India
     */
    country?: string;
    /**
     * - 6-digit PIN code of the city, e.g. 400001
     */
    pincode?: number;
    /**
     * - State name, e.g. Maharashtra
     */
    state?: string;
};
/** @returns {CompanyBrandInfo} */
declare function CompanyBrandInfo(): CompanyBrandInfo;
type CompanyBrandInfo = {
    /**
     * - Hosted URL of the brand's
     * portrait banner
     */
    brand_banner_portrait_url?: string;
    /**
     * - Hosted URL of the brand's banner image
     */
    brand_banner_url?: string;
    /**
     * - Hosted URL of the brand's logo
     */
    brand_logo_url?: string;
    /**
     * - Brand name, e.g. Raymonds
     */
    name?: string;
    /**
     * - Brand UID for identifying the brand
     */
    value?: number;
};
/** @returns {CompanyByBrandsRequest} */
declare function CompanyByBrandsRequest(): CompanyByBrandsRequest;
type CompanyByBrandsRequest = {
    /**
     * - Brand UID
     */
    brands: number;
    /**
     * - A search field for finding a company by its name
     */
    search_text?: string;
};
/** @returns {CompanyByBrandsResponse} */
declare function CompanyByBrandsResponse(): CompanyByBrandsResponse;
type CompanyByBrandsResponse = {
    items?: BrandCompanyInfo[];
    page?: Page;
};
/** @returns {CompanyValidator} */
declare function CompanyValidator(): CompanyValidator;
type CompanyValidator = {
    /**
     * - Browser script for the company validator
     */
    browser_script?: string;
    json_schema?: JsonSchema[];
};
/** @returns {CompareProductsFeature} */
declare function CompareProductsFeature(): CompareProductsFeature;
type CompareProductsFeature = {
    /**
     * - Shows whether product comparison feature is
     * enabled on PDP
     */
    enabled?: boolean;
};
/** @returns {CreateApplicationRequest} */
declare function CreateApplicationRequest(): CreateApplicationRequest;
type CreateApplicationRequest = {
    app?: App;
    configuration?: AppInventory;
    domain?: AppDomain;
};
/** @returns {CreateAppResponse} */
declare function CreateAppResponse(): CreateAppResponse;
type CreateAppResponse = {
    app?: Application;
    configuration?: ApplicationInventory;
};
/** @returns {Credentials} */
declare function Credentials(): Credentials;
type Credentials = {
    android?: Android;
    /**
     * - An API key is a unique string that's used to
     * route requests to your Firebase project when interacting with Firebase.
     */
    api_key?: string;
    /**
     * - Alphanumeric ID allotted to the current
     * application created within the current business account
     */
    application_id?: string;
    /**
     * - Google Cloud Manager's Sender ID for
     * Firebase. It is a unique numerical value which is created when you
     * configure your project in the Google Developers Console/Google Cloud Console.
     */
    gcm_sender_id?: string;
    ios?: Ios;
    /**
     * - Project ID for Firebase integration.
     * Project ID is a unique identifier for a project and is used only within the console.
     */
    project_id?: string;
};
/** @returns {Credit} */
declare function Credit(): Credit;
type Credit = {
    /**
     * - Shows whether reward points should be credited
     */
    enabled?: boolean;
};
/** @returns {CurrenciesResponse} */
declare function CurrenciesResponse(): CurrenciesResponse;
type CurrenciesResponse = {
    items?: Currency[];
};
/** @returns {Currency} */
declare function Currency(): Currency;
type Currency = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the current sales channel supported currency
     */
    _id?: string;
    /**
     * - 3-character currency code, e.g. INR, USD, EUR.
     */
    code?: string;
    /**
     * - ISO 8601 timestamp of sales channel support
     * currency creation
     */
    created_at?: string;
    /**
     * - Acceptable decimal limits for a given
     * currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid
     * value of a currency.
     */
    decimal_digits?: number;
    /**
     * - Shows currency is enabled or not in current
     * sales channel
     */
    is_active?: boolean;
    /**
     * - Name of the currency, e.g Indian Rupee
     */
    name?: string;
    /**
     * - Unique symbol for identifying the currency, e.g. ₹
     */
    symbol?: string;
    /**
     * - ISO 8601 timestamp of sales channel support
     * currency updation
     */
    updated_at?: string;
};
/** @returns {CurrencyConfig} */
declare function CurrencyConfig(): CurrencyConfig;
type CurrencyConfig = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of all the currency configuration
     */
    _id?: string;
    /**
     * - 3-character currency code, e.g. INR, USD, EUR.
     */
    code?: string;
    /**
     * - ISO 8601 timestamp of a given currency creation
     */
    created_at?: string;
    /**
     * - Acceptable decimal limits for a given
     * currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid
     * value of a currency.
     */
    decimal_digits?: number;
    /**
     * - Currency is enabled or not for the current
     * sales channel
     */
    is_active?: boolean;
    /**
     * - Name of the currency, e.g Indian Rupee
     */
    name?: string;
    /**
     * - Unique symbol for identifying the currency, e.g. ₹
     */
    symbol?: string;
    /**
     * - ISO 8601 timestamp of a given currency updation
     */
    updated_at?: string;
};
/** @returns {CurrencyFeature} */
declare function CurrencyFeature(): CurrencyFeature;
type CurrencyFeature = {
    /**
     * - 3-letter code of the default currency
     * used in the application. Default vaule is 'INR'.
     */
    default_currency?: string;
    /**
     * - If 'explicit', currency formatting shows currency
     * code with price. For explicit or all currency selection.
     */
    type?: string;
    /**
     * - 3-letter currency code
     */
    value?: string[];
};
/** @returns {Debit} */
declare function Debit(): Debit;
type Debit = {
    /**
     * - Allow automatic debit of reward points
     */
    auto_apply?: boolean;
    /**
     * - Shows whether reward points are available for debit
     */
    enabled?: boolean;
    /**
     * - Strategy channel for debiting reward points
     */
    strategy_channel?: string;
};
/** @returns {DefaultCurrency} */
declare function DefaultCurrency(): DefaultCurrency;
type DefaultCurrency = {
    /**
     * - 3-character code of the default currency, e.g.
     * INR, EUR, USD
     */
    code?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the default currency
     */
    ref?: string;
};
/** @returns {DeliveryCharges} */
declare function DeliveryCharges(): DeliveryCharges;
type DeliveryCharges = {
    charges?: Charges;
    /**
     * - Allow delivery charges
     */
    enabled?: boolean;
};
/** @returns {DeploymentMeta} */
declare function DeploymentMeta(): DeploymentMeta;
type DeploymentMeta = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the ordering stores
     */
    _id?: string;
    /**
     * - Allow all stores from the ordering store
     */
    all_stores?: boolean;
    /**
     * - Alphanumeric ID allotted to an application (sales
     * channel website) created within a business account
     */
    app?: string;
    deployed_stores?: number[];
    /**
     * - Allow ordering stores for current sales channel
     */
    enabled?: boolean;
    /**
     * - Permitted values are 'hard' and 'soft'. For hard
     * type delivery, store selection is compulsory. For soft type, delivery store
     * selection is optional.
     */
    type?: string;
};
/** @returns {DeploymentStoreSelectionFeature} */
declare function DeploymentStoreSelectionFeature(): DeploymentStoreSelectionFeature;
type DeploymentStoreSelectionFeature = {
    /**
     * - Shows whether selection of store (for
     * deploying the application) is permitted
     */
    enabled?: boolean;
    /**
     * - Permitted values are 'hard' and 'soft'. For hard
     * type delivery, store selection is compulsory. For soft type, delivery store
     * selection is optional.
     */
    type?: string;
};
/** @returns {Domain} */
declare function Domain(): Domain;
type Domain = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the sales channel domain
     */
    _id?: string;
    /**
     * - Domain is hosting domain or not.
     */
    is_predefined?: boolean;
    /**
     * - Domain is primary or not. Primary domain
     * is the default/main domain.
     */
    is_primary?: boolean;
    /**
     * - Shortlink is present or not for the domain
     */
    is_shortlink?: boolean;
    /**
     * - Full domain name, e.g. newton.com
     */
    name?: string;
    /**
     * - Domain is verified or not. TXT and A records
     * should propagate correctly.
     */
    verified?: boolean;
};
/** @returns {DomainAdd} */
declare function DomainAdd(): DomainAdd;
type DomainAdd = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the domain
     */
    _id?: string;
    /**
     * - Domain is primary or not (indicates if the
     * domain has been made the main URL of the sales channel)
     */
    is_primary?: boolean;
    /**
     * - Indicates if the domain is a short link
     * domain (short URL e.g. bitly)
     */
    is_shortlink?: boolean;
    /**
     * - Shows the message shown after adding a domain
     * successfully, e.g. 'New domain added successfully'
     */
    message?: string;
    /**
     * - Full domain name, e.g. uniket.hostx0.de
     */
    name?: string;
    txt_records?: string[];
    /**
     * - Domain is verified or not (indicates if A
     * records and TXT records are correct)
     */
    verified?: boolean;
};
/** @returns {DomainAddRequest} */
declare function DomainAddRequest(): DomainAddRequest;
type DomainAddRequest = {
    domain?: DomainAdd;
};
/** @returns {DomainsResponse} */
declare function DomainsResponse(): DomainsResponse;
type DomainsResponse = {
    domains?: Domain[];
};
/** @returns {DomainStatus} */
declare function DomainStatus(): DomainStatus;
type DomainStatus = {
    /**
     * - Shows TXT record and A records for the domain
     */
    display?: string;
    /**
     * - Shows whether TXT record or A records for the
     * domain are correctly propagating via DNS servers
     */
    status?: boolean;
};
/** @returns {DomainStatusRequest} */
declare function DomainStatusRequest(): DomainStatusRequest;
type DomainStatusRequest = {
    /**
     * - URL of the domain, e.g. uniket.hostx0.de
     */
    domain_url?: string;
};
/** @returns {DomainStatusResponse} */
declare function DomainStatusResponse(): DomainStatusResponse;
type DomainStatusResponse = {
    /**
     * - Check if domain is live and mapped to
     * appropriate IP of Fynd Servers
     */
    connected?: boolean;
    status?: DomainStatus[];
};
/** @returns {DomainSuggestion} */
declare function DomainSuggestion(): DomainSuggestion;
type DomainSuggestion = {
    /**
     * - Custom domain currency. Not present for Fynd domains.
     */
    currency?: string;
    /**
     * - Shows whether the custom domain of your
     * choice is available or not available
     */
    is_available: boolean;
    /**
     * - URL of the custom domain
     */
    name: string;
    /**
     * - Cost of purchasing a custom domain. Not present
     * for Fynd domains.
     */
    price?: number;
    /**
     * - Shows whether TLD domain is supported or not
     */
    unsupported?: boolean;
};
/** @returns {DomainSuggestionsRequest} */
declare function DomainSuggestionsRequest(): DomainSuggestionsRequest;
type DomainSuggestionsRequest = {
    /**
     * - Get suggestions for custom domains or Fynd domains
     */
    custom?: boolean;
    /**
     * - Domain url
     */
    domain_url?: string;
};
/** @returns {DomainSuggestionsResponse} */
declare function DomainSuggestionsResponse(): DomainSuggestionsResponse;
type DomainSuggestionsResponse = {
    /**
     * - Domain URL
     */
    domains?: DomainSuggestion[];
};
/** @returns {FacebookLink} */
declare function FacebookLink(): FacebookLink;
type FacebookLink = {
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's Facebook page
     */
    link?: string;
    /**
     * - Name of the social media platform, e.g. Facebook
     */
    title?: string;
};
/** @returns {FeedbackFeature} */
declare function FeedbackFeature(): FeedbackFeature;
type FeedbackFeature = {
    /**
     * - Shows whether customer feedback is enabled on
     * PDP. Default value is false.
     */
    enabled?: boolean;
};
/** @returns {FilterOrderingStoreRequest} */
declare function FilterOrderingStoreRequest(): FilterOrderingStoreRequest;
type FilterOrderingStoreRequest = {
    /**
     * - Allow all stores from the ordering stores
     */
    all_stores?: boolean;
    deployed_stores?: number[];
    only_deployed?: boolean;
    /**
     * - Store code or name of the ordering store
     */
    q?: string;
};
/** @returns {Firebase} */
declare function Firebase(): Firebase;
type Firebase = {
    credentials?: Credentials;
    /**
     * - Shows whether Firebase integration is enabled
     * or disabled for the sales channel
     */
    enabled?: boolean;
};
/** @returns {Freshchat} */
declare function Freshchat(): Freshchat;
type Freshchat = {
    credentials?: FreshchatCredentials;
    /**
     * - Shows whether Freshchat integration is
     * enabled or disabled for the sales channel
     */
    enabled?: boolean;
};
/** @returns {FreshchatCredentials} */
declare function FreshchatCredentials(): FreshchatCredentials;
type FreshchatCredentials = {
    /**
     * - The unique app_id of your Freshchat account for
     * integrating Freshchat with your sales channel
     */
    app_id?: string;
    /**
     * - The unique app_key of your Freshchat account
     * for integrating Freshchat with your sales channel
     */
    app_key?: string;
    /**
     * - Web token used for accessing the Freshchat APIs
     */
    web_token?: string;
};
/** @returns {FyndRewards} */
declare function FyndRewards(): FyndRewards;
type FyndRewards = {
    credentials?: FyndRewardsCredentials;
};
/** @returns {FyndRewardsCredentials} */
declare function FyndRewardsCredentials(): FyndRewardsCredentials;
type FyndRewardsCredentials = {
    /**
     * - Public key for integrating with Fynd rewards.
     */
    public_key?: string;
};
/** @returns {GetIntegrationsOptInsResponse} */
declare function GetIntegrationsOptInsResponse(): GetIntegrationsOptInsResponse;
type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn[];
    page?: Page;
};
/** @returns {GoogleMap} */
declare function GoogleMap(): GoogleMap;
type GoogleMap = {
    credentials?: GoogleMapCredentials;
};
/** @returns {GoogleMapCredentials} */
declare function GoogleMapCredentials(): GoogleMapCredentials;
type GoogleMapCredentials = {
    /**
     * - Secret API key for Google Maps. A unique
     * identifier that authenticates requests made to Google Maps API.
     */
    api_key?: string;
};
/** @returns {GooglePlusLink} */
declare function GooglePlusLink(): GooglePlusLink;
type GooglePlusLink = {
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's Google+ account
     */
    link?: string;
    /**
     * - Name of the social media platform, e.g. Google+
     */
    title?: string;
};
/** @returns {Gtm} */
declare function Gtm(): Gtm;
type Gtm = {
    credentials?: GtmCredentials;
    /**
     * - Shows whether GTM integration is enabled or
     * disabled for the sales channel
     */
    enabled?: boolean;
};
/** @returns {GtmCredentials} */
declare function GtmCredentials(): GtmCredentials;
type GtmCredentials = {
    /**
     * - Secret credential API key for GTM
     */
    api_key?: string;
};
/** @returns {HomePageFeature} */
declare function HomePageFeature(): HomePageFeature;
type HomePageFeature = {
    /**
     * - Shows whether order processing is
     * enabled or not enabled
     */
    order_processing?: boolean;
};
/** @returns {InformationAddress} */
declare function InformationAddress(): InformationAddress;
type InformationAddress = {
    /**
     * - Contact address of the sales channel
     */
    address_line?: string[];
    /**
     * - Name of the city, e.g. Mumbai
     */
    city?: string;
    /**
     * - Name of the country, e.g. India
     */
    country?: string;
    /**
     * - Co-ordinates of the location
     */
    loc?: string;
    phone?: InformationPhone[];
    /**
     * - 6-digit PIN Code of the city, e.g. 400001
     */
    pincode?: number;
};
/** @returns {InformationPhone} */
declare function InformationPhone(): InformationPhone;
type InformationPhone = {
    /**
     * - Country code for contact number, e.g. +91 (for India)
     */
    code?: string;
    /**
     * - 10-digit mobile number
     */
    number?: string;
};
/** @returns {InformationSupport} */
declare function InformationSupport(): InformationSupport;
type InformationSupport = {
    email?: string[];
    phone?: string[];
    /**
     * - Working hours of support team, e.g. 9 AM to 9 PM
     */
    timing?: string;
};
/** @returns {InstagramLink} */
declare function InstagramLink(): InstagramLink;
type InstagramLink = {
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's Instagram page
     */
    link?: string;
    /**
     * - Name of the social media platform, e.g. Instagram
     */
    title?: string;
};
/** @returns {Integration} */
declare function Integration(): Integration;
type Integration = {
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the integration
     */
    _id?: string;
    companies?: any[];
    constants?: any;
    /**
     * - ISO 8601 timestamp of integration creation
     */
    created_at?: string;
    /**
     * - Basic description about the integration
     */
    description?: string;
    /**
     * - Basic HTML description about the integration
     */
    description_html?: string;
    /**
     * - Hosted URL of the icon image
     */
    icon?: string;
    meta?: IntegrationMeta[];
    /**
     * - Name of the integration, e.g. SAP RBL Integration
     */
    name?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the user who created the integration
     */
    owner?: string;
    /**
     * - Randomly generated fixed-length string for
     * opted integration. It is auto-generated. It would never change once it is generated.
     */
    secret?: string;
    support?: string[];
    /**
     * - Randomly generated fixed-length string for opted
     * integration. It is auto-generated. It would never change once it is generated.
     */
    token?: string;
    /**
     * - ISO 8601 timestamp of integration updation
     */
    updated_at?: string;
    validators?: Validators;
};
/** @returns {IntegrationConfigResponse} */
declare function IntegrationConfigResponse(): IntegrationConfigResponse;
type IntegrationConfigResponse = {
    items?: IntegrationLevel[];
};
/** @returns {IntegrationLevel} */
declare function IntegrationLevel(): IntegrationLevel;
type IntegrationLevel = {
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the integration config
     */
    _id?: string;
    /**
     * - ISO 8601 timestamp of integration config creation
     */
    created_at?: string;
    /**
     * - Schema data of the integration stored in key-value pairs
     */
    data?: any;
    /**
     * - Integration id. Shows which integration
     * you are enabling.
     */
    integration?: string;
    last_patch?: LastPatch[];
    /**
     * - Shows for what level the integration is set up.
     * It can be company level or store level.
     */
    level?: string;
    meta?: IntegrationMeta[];
    /**
     * - Shows this integration is opted or not opted
     * for the current company
     */
    opted?: boolean;
    permissions?: any[];
    /**
     * - Randomly generated fixed-length string for opted
     * integration. It is auto-generated. It would never change once it is generated.
     */
    token?: string;
    /**
     * - It can be store uid or company uid. Depends on the
     * level of integration.
     */
    uid?: number;
    /**
     * - ISO 8601 timestamp of integration config updation
     */
    updated_at?: string;
};
/** @returns {IntegrationMeta} */
declare function IntegrationMeta(): IntegrationMeta;
type IntegrationMeta = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the integration meta
     */
    _id?: string;
    is_public?: boolean;
    /**
     * - Nmae of integration meta, e.g. price_level
     */
    name?: string;
    /**
     * - Value related to integration meta name, e.g. store
     */
    value?: string;
};
/** @returns {IntegrationOptIn} */
declare function IntegrationOptIn(): IntegrationOptIn;
type IntegrationOptIn = {
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the opted integration
     */
    _id?: string;
    companies?: any[];
    constants?: string;
    /**
     * - ISO 8601 timestamp of integration creation
     */
    created_at?: string;
    /**
     * - Basic description about the opted integration
     */
    description?: string;
    /**
     * - Basic HTML description about the
     * opted integration
     */
    description_html?: string;
    /**
     * - Hosted URL of the icon image
     */
    icon?: string;
    meta?: IntegrationMeta[];
    /**
     * - Nmae of the opted integration, e.g. SAP RBL Integration
     */
    name?: string;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the user who created the integration
     */
    owner?: string;
    /**
     * - Randomly generated fixed-length string for
     * opted integration. It is auto-generated. It would never change once it is generated.
     */
    secret?: string;
    support?: string[];
    /**
     * - Randomly generated fixed-length string for opted
     * integration. It is auto-generated. It would never change once it is generated.
     */
    token?: string;
    /**
     * - ISO 8601 timestamp of integration updation
     */
    updated_at?: string;
    validators?: Validators;
};
/** @returns {InvalidPayloadRequest} */
declare function InvalidPayloadRequest(): InvalidPayloadRequest;
type InvalidPayloadRequest = {
    /**
     * - Error message when request body payload is improper
     */
    message?: string;
};
/** @returns {InventoryArticleAssignment} */
declare function InventoryArticleAssignment(): InventoryArticleAssignment;
type InventoryArticleAssignment = {
    /**
     * - Allow post order reassigment of article
     */
    post_order_reassignment?: boolean;
    rules?: ArticleAssignmentRule;
};
/** @returns {InventoryBrand} */
declare function InventoryBrand(): InventoryBrand;
type InventoryBrand = {
    /**
     * - List of brands
     */
    brands?: any[];
    /**
     * - All brands or specific (explicit) brands to
     * be shown on the website
     */
    criteria?: string;
};
/** @returns {InventoryBrandRule} */
declare function InventoryBrandRule(): InventoryBrandRule;
type InventoryBrandRule = {
    /**
     * - Brand uids in case of explicit criteria
     */
    brands?: number[];
    /**
     * - Whether all brands are enabled, or explicitly
     * few brands in the inventory
     */
    criteria?: string;
};
/** @returns {InventoryCategory} */
declare function InventoryCategory(): InventoryCategory;
type InventoryCategory = {
    /**
     * - List of categories whose products will be
     * shown on the website
     */
    categories?: any[];
    criteria?: string;
};
/** @returns {InventoryDiscount} */
declare function InventoryDiscount(): InventoryDiscount;
type InventoryDiscount = {
    /**
     * - Maximum inventory discount
     */
    max?: number;
    /**
     * - Minimum inventory discount
     */
    min?: number;
};
/** @returns {InventoryPaymentConfig} */
declare function InventoryPaymentConfig(): InventoryPaymentConfig;
type InventoryPaymentConfig = {
    /**
     * - Mode of payment for the inventory of
     * sales channel. It is required and default value is null.
     */
    mode_of_payment?: string;
    /**
     * - Source of the payment mode for the inventory
     * payment of sales channel. Default value is FYND.
     */
    source?: string;
};
/** @returns {InventoryPrice} */
declare function InventoryPrice(): InventoryPrice;
type InventoryPrice = {
    /**
     * - Maximum inventory price
     */
    max?: number;
    /**
     * - Minimum inventory price
     */
    min?: number;
};
/** @returns {InventoryStore} */
declare function InventoryStore(): InventoryStore;
type InventoryStore = {
    /**
     * - All stores or specific (explicit) stores to
     * be shown on the website
     */
    criteria?: string;
    rules?: AppStoreRules;
    /**
     * - List of stores
     */
    stores?: any[];
};
/** @returns {InventoryStoreRule} */
declare function InventoryStoreRule(): InventoryStoreRule;
type InventoryStoreRule = {
    /**
     * - Whether enable all or explicitly few stores
     * or use filter of brands and company as inventory stores
     */
    criteria?: string;
    /**
     * - List of rules with company and
     * brands uids. Used when critera is `filter`
     */
    rules?: StoreCriteriaRule[];
    /**
     * - List of store uids. Used when critera is `explicit`
     */
    stores?: number[];
};
/** @returns {InventoryValidator} */
declare function InventoryValidator(): InventoryValidator;
type InventoryValidator = {
    /**
     * - Browser script for the inventory validator
     */
    browser_script?: string;
    json_schema?: JsonSchema[];
};
/** @returns {Ios} */
declare function Ios(): Ios;
type Ios = {
    /**
     * - Firebase secret credential API key for IOS
     */
    api_key?: string;
    /**
     * - Alphanumeric ID allotted to a sales
     * channel application created within a business account
     */
    application_id?: string;
};
/** @returns {JsonSchema} */
declare function JsonSchema(): JsonSchema;
type JsonSchema = {
    /**
     * - Display text of the validator JSON schema. It
     * will show in the UI.
     */
    display?: string;
    /**
     * - Key related to the display text of the validator JSON schema
     */
    key?: string;
    /**
     * - Tooltip text for the UI of the validator JSON
     * schema. It will show in the UI.
     */
    tooltip?: string;
    /**
     * - Indicates the type of form field, e.g. Text, Dropdown.
     */
    type?: string;
};
/** @returns {LandingImage} */
declare function LandingImage(): LandingImage;
type LandingImage = {
    /**
     * - Width-to-height ratio of landing image
     */
    aspect_ratio?: string;
    /**
     * - URL where the landing image is hosted
     */
    secure_url?: string;
};
/** @returns {LandingPageFeature} */
declare function LandingPageFeature(): LandingPageFeature;
type LandingPageFeature = {
    /**
     * - Shows whether a guest can checkout
     * from cart without logging in
     */
    continue_as_guest?: boolean;
    launch_page?: LaunchPage;
    /**
     * - Shows the text displayed over the login button
     */
    login_btn_text?: string;
    /**
     * - Shows whether a textbox for
     * entering domain is available
     */
    show_domain_textbox?: boolean;
    /**
     * - Shows whether register button is
     * available in the login/landing page
     */
    show_register_btn?: boolean;
};
/** @returns {LastPatch} */
declare function LastPatch(): LastPatch;
type LastPatch = {
    op?: string;
    path?: string;
    /**
     * - It can be inventory level or order level
     */
    value?: string;
};
/** @returns {LaunchPage} */
declare function LaunchPage(): LaunchPage;
type LaunchPage = {
    /**
     * - Type of the launch page
     */
    page_type?: string;
    /**
     * - Launch page params. It can be nullable.
     */
    params?: any;
    /**
     * - Query related to launch page. It can be nullable.
     */
    query?: any;
};
/** @returns {LinkedInLink} */
declare function LinkedInLink(): LinkedInLink;
type LinkedInLink = {
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's LinkedIn channel
     */
    link?: string;
    /**
     * - Name of the social media platform, e.g. LinkedIn
     */
    title?: string;
};
/** @returns {Links} */
declare function Links(): Links;
type Links = {
    /**
     * - Web URL for redirecting to a related page
     */
    link?: string;
    /**
     * - Name of the related page or link
     */
    title?: string;
};
/** @returns {ListingPriceFeature} */
declare function ListingPriceFeature(): ListingPriceFeature;
type ListingPriceFeature = {
    /**
     * - Sorting of listing price with min or max value.
     * Default value is min.
     */
    sort?: string;
    /**
     * - Shows which price to display on PLP if one
     * product has multiple prices (for each size), valid values are 'min', 'max',
     * 'range'. Default value is range.
     */
    value?: string;
};
/** @returns {LoyaltyPointsConfig} */
declare function LoyaltyPointsConfig(): LoyaltyPointsConfig;
type LoyaltyPointsConfig = {
    /**
     * - Allow auto apply of loyalty points
     */
    auto_apply?: boolean;
    /**
     * - Shows loyalty points is enabled or not enabled
     */
    enabled?: boolean;
};
/** @returns {Methods} */
declare function Methods(): Methods;
type Methods = {
    card?: PaymentModeConfig;
    cod?: PaymentModeConfig;
    fc?: PaymentModeConfig;
    jiopp?: PaymentModeConfig;
    jp?: PaymentModeConfig;
    juspaypg?: PaymentModeConfig;
    nb?: PaymentModeConfig;
    pac?: PaymentModeConfig;
    payubizpg?: PaymentModeConfig;
    payumoneypg?: PaymentModeConfig;
    pl?: PaymentModeConfig;
    pp?: PaymentModeConfig;
    ps?: PaymentModeConfig;
    qr?: PaymentModeConfig;
    rupifipg?: PaymentModeConfig;
    simpl?: PaymentModeConfig;
    stripepg?: PaymentModeConfig;
    upi?: PaymentModeConfig;
    wl?: PaymentModeConfig;
};
/** @returns {MobileAppConfigRequest} */
declare function MobileAppConfigRequest(): MobileAppConfigRequest;
type MobileAppConfigRequest = {
    /**
     * - Name of the mobile app
     */
    app_name?: string;
    /**
     * - Shows update in mobile app config is active or not
     */
    is_active?: boolean;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
};
/** @returns {MobileAppConfiguration} */
declare function MobileAppConfiguration(): MobileAppConfiguration;
type MobileAppConfiguration = {
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * for mobile application configuration
     */
    _id?: string;
    /**
     * - Name of the mobile app
     */
    app_name?: string;
    /**
     * - Application ID of the current sales channel
     */
    application?: string;
    /**
     * - ISO 8601 timestamp of application
     * configuration creation
     */
    created_at?: string;
    /**
     * - Indicates the availability of the mobile build
     */
    is_active?: boolean;
    landing_image?: LandingImage;
    /**
     * - Shows bundle identifier if device
     * platform is iOS, and directory of the app if device platform is Android
     */
    package_name?: string;
    /**
     * - Device platform for which the mobile app
     * was built, e.g. android, ios.
     */
    platform_type?: string;
    splash_image?: SplashImage;
    /**
     * - ISO 8601 timestamp of last known
     * modifications to the app build
     */
    updated_at?: string;
};
/** @returns {Moengage} */
declare function Moengage(): Moengage;
type Moengage = {
    credentials?: MoengageCredentials;
    /**
     * - Shows whether MoEngage integation is enabled
     * or disabled for the sales channel
     */
    enabled?: boolean;
};
/** @returns {MoengageCredentials} */
declare function MoengageCredentials(): MoengageCredentials;
type MoengageCredentials = {
    /**
     * - APP ID provided by MoEngage to identify a
     * specific app. The app_id for your MoEngage account is available on the
     * MoEngage Dashboard.
     */
    app_id?: string;
};
/** @returns {NotFound} */
declare function NotFound(): NotFound;
type NotFound = {
    /**
     * - Response message for not found
     */
    message?: string;
};
/** @returns {OptedApplicationResponse} */
declare function OptedApplicationResponse(): OptedApplicationResponse;
type OptedApplicationResponse = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the other seller's sales channel
     */
    _id?: string;
    company?: OptedCompany;
    /**
     * - Basic details about the other seller's sales channel
     */
    description?: string;
    /**
     * - Domain URL of the other seller's sales channel
     */
    domain?: string;
    /**
     * - Name of the other seller's sales channel
     */
    name?: string;
    opt_out_inventory?: OptOutInventory;
    opted_inventory?: OptedInventory;
};
/** @returns {OptedCompany} */
declare function OptedCompany(): OptedCompany;
type OptedCompany = {
    /**
     * - Name of the company opted by the other seller's
     * sales channel in its inventory
     */
    name?: string;
    /**
     * - Company UID opted by the other seller's sales
     * channel in its inventory. It has unique value for the company.
     */
    uid?: number;
};
/** @returns {OptedInventory} */
declare function OptedInventory(): OptedInventory;
type OptedInventory = {
    items?: any;
    opt_type?: OptType;
};
/** @returns {OptedStore} */
declare function OptedStore(): OptedStore;
type OptedStore = {
    /**
     * - The unique identifier of the opted inventory store
     */
    _id?: string;
    address?: OptedStoreAddress;
    /**
     * - Company ID of the opted inventory store
     */
    company_id?: number;
    /**
     * - Display name of the opted inventory store
     */
    display_name?: string;
    /**
     * - ISO 8601 timestamp of opted inventory store creation
     */
    modified_on?: string;
    /**
     * - Name of the inventory store opted by other
     * seller's application
     */
    name?: string;
    /**
     * - Store code of the opted inventory store. It
     * is unique for every store.
     */
    store_code?: string;
    /**
     * - Store type of the opted inventory store
     * like warehouse, high_street, mall.
     */
    store_type?: string;
    /**
     * - UID of opted inventory store
     */
    uid?: number;
};
/** @returns {OptedStoreAddress} */
declare function OptedStoreAddress(): OptedStoreAddress;
type OptedStoreAddress = {
    /**
     * - Address of the opted store
     */
    address1?: string;
    /**
     * - Address of the opted store
     */
    address2?: string;
    /**
     * - City of the opted store, e.g. Mumbai
     */
    city?: string;
    /**
     * - Country of the opted store, e.g. India
     */
    country?: string;
    lat_long?: StoreLatLong;
    /**
     * - 6-digit PIN code of the opted store location
     */
    pincode?: number;
    /**
     * - State of the opted store, e.g. Maharashtra
     */
    state?: string;
};
/** @returns {OptedStoreIntegration} */
declare function OptedStoreIntegration(): OptedStoreIntegration;
type OptedStoreIntegration = {
    other_entity?: OtherEntity;
    other_integration?: IntegrationOptIn;
    /**
     * - Allow user to opt same store in other integration
     */
    other_opted?: boolean;
};
/** @returns {OptOutInventory} */
declare function OptOutInventory(): OptOutInventory;
type OptOutInventory = {
    /**
     * - List of companies opted out from the inventory
     * of other seller's application
     */
    company: number[];
    /**
     * - List of selling locations (stores) opted out
     * from the inventory of other seller's application
     */
    store: number[];
};
/** @returns {OptType} */
declare function OptType(): OptType;
type OptType = {
    /**
     * - Display text of opted type for inventory store
     */
    display?: string;
    /**
     * - Opted type of inventory store. It can be store or company.
     */
    key?: string;
};
/** @returns {OrderFeature} */
declare function OrderFeature(): OrderFeature;
type OrderFeature = {
    /**
     * - Allow buy again option for order. Default
     * value is false.
     */
    buy_again?: boolean;
};
/** @returns {OrderingStore} */
declare function OrderingStore(): OrderingStore;
type OrderingStore = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the ordering store
     */
    _id?: string;
    address?: OptedStoreAddress;
    /**
     * - Code of the ordering store (usually same as Store Code)
     */
    code?: string;
    /**
     * - Display name of the ordering store
     */
    display_name?: string;
    /**
     * - Store name of the ordering store
     */
    name?: string;
    /**
     * - 6-digit PIN Code of the ordering store, e.g. 400001
     */
    pincode?: number;
    /**
     * - Store code of the ordering store, e.g. MUM-102
     */
    store_code?: string;
    /**
     * - Store type of the ordering store, e.g.
     * high_street, mall, warehouse
     */
    store_type?: string;
    /**
     * - Ordering store UID
     */
    uid?: number;
};
/** @returns {OrderingStoreConfig} */
declare function OrderingStoreConfig(): OrderingStoreConfig;
type OrderingStoreConfig = {
    deployment_meta?: DeploymentMeta;
};
/** @returns {OrderingStores} */
declare function OrderingStores(): OrderingStores;
type OrderingStores = {
    /**
     * - Version key for tracking ordering stores. Default
     * value is zero.
     */
    __v?: number;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the ordering store
     */
    _id?: string;
    /**
     * - Allow all stores of the ordering stores
     */
    all_stores?: boolean;
    /**
     * - Alphanumeric ID allotted to an application (sales
     * channel website) created within a business account
     */
    app?: string;
    deployed_stores?: number[];
    /**
     * - Allow ordering stores for current sales channel
     */
    enabled?: boolean;
    items?: OrderingStore[];
    page?: Page;
    /**
     * - For hard type delivery, store selection is
     * compulsory. For soft type, delivery store selection is optional.
     */
    type?: string;
};
/** @returns {OrderingStoresResponse} */
declare function OrderingStoresResponse(): OrderingStoresResponse;
type OrderingStoresResponse = {
    items?: OrderingStore[];
    page?: Page;
};
/** @returns {OrderValidator} */
declare function OrderValidator(): OrderValidator;
type OrderValidator = {
    /**
     * - Browser script for the order validator
     */
    browser_script?: string;
    json_schema?: JsonSchema[];
};
/** @returns {OtherEntity} */
declare function OtherEntity(): OtherEntity;
type OtherEntity = {
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    /**
     * - The unique identifier of the other entity for
     * opted store integration
     */
    _id?: string;
    /**
     * - ISO 8601 timestamp of other entity creation
     * for opted store integration
     */
    created_at?: string;
    data?: OtherEntityData;
    /**
     * - Integration ID. Shows which integration
     * you are enabling.
     */
    integration?: string;
    last_patch?: LastPatch[];
    /**
     * - Indicates integration level. It can be company
     * level or store level.
     */
    level?: string;
    meta?: any[];
    /**
     * - Allow other entity opted in integration
     */
    opted?: boolean;
    permissions?: string[];
    /**
     * - Randomly generated fixed-length string for opted
     * integration. It is auto-generated. It would never change once it is generated.
     */
    token?: string;
    /**
     * - It can be store uid or company uid. Depends on the
     * level of integration.
     */
    uid?: number;
    /**
     * - ISO 8601 timestamp of other entity updation
     * for opted store integration
     */
    updated_at?: string;
};
/** @returns {OtherEntityData} */
declare function OtherEntityData(): OtherEntityData;
type OtherEntityData = {
    article_identifier?: string;
};
/** @returns {OtherSellerApplication} */
declare function OtherSellerApplication(): OtherSellerApplication;
type OtherSellerApplication = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the other seller's sales channel
     */
    _id?: string;
    company?: OtherSellerCompany;
    /**
     * - Basic details about the other seller's sales channel
     */
    description?: string;
    /**
     * - Domain URL of the other seller's sales channel
     */
    domain?: string;
    /**
     * - Name of the other seller's sales channel
     */
    name?: string;
    /**
     * - Inventory opted by the other seller's sales
     * channel. It can be the current company or stores in the current company.
     */
    opt_type?: string;
};
/** @returns {OtherSellerApplications} */
declare function OtherSellerApplications(): OtherSellerApplications;
type OtherSellerApplications = {
    items?: OtherSellerApplication[];
    page?: Page;
};
/** @returns {OtherSellerCompany} */
declare function OtherSellerCompany(): OtherSellerCompany;
type OtherSellerCompany = {
    /**
     * - Name of the seller company
     */
    name?: string;
    /**
     * - Uid of the seller company
     */
    uid?: number;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {PanCardConfig} */
declare function PanCardConfig(): PanCardConfig;
type PanCardConfig = {
    /**
     * - On which COD order amount pan
     * card number is expected from customer for order
     */
    cod_threshold_amount?: number;
    /**
     * - If pan card accepting is enabled on cart
     */
    enabled?: boolean;
    /**
     * - On which online payment order
     * amount pan card number is expected from customer for order
     */
    online_threshold_amount?: number;
};
/** @returns {PaymentModeConfig} */
declare function PaymentModeConfig(): PaymentModeConfig;
type PaymentModeConfig = {
    /**
     * - Shows if a given payment method is enabled or
     * not, e.g. if 'nb' is enabled, customer can use NetBanking for payment.
     */
    enabled?: boolean;
};
/** @returns {PaymentSelectionLock} */
declare function PaymentSelectionLock(): PaymentSelectionLock;
type PaymentSelectionLock = {
    /**
     * - Shows default payment method, e.g. COD
     */
    default_options?: string;
    /**
     * - Shows whether payment mode is restricted to a
     * specific option, e.g. 'HDFC Netbanking'
     */
    enabled?: boolean;
    /**
     * - Payment method chosen from default
     * options, e.g. COD
     */
    payment_identifier?: string;
};
/** @returns {PcrFeature} */
declare function PcrFeature(): PcrFeature;
type PcrFeature = {
    /**
     * - Allow staff selection. Default value is false.
     */
    staff_selection?: boolean;
};
/** @returns {PinterestLink} */
declare function PinterestLink(): PinterestLink;
type PinterestLink = {
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's Pinterest page
     */
    link?: string;
    /**
     * - Name of the social media platform, e.g. Pinterest
     */
    title?: string;
};
/** @returns {ProductDetailFeature} */
declare function ProductDetailFeature(): ProductDetailFeature;
type ProductDetailFeature = {
    /**
     * - Indicates whether customers can
     * request for a product. Default value is false.
     */
    request_product?: boolean;
    /**
     * - Shows whether the customers can
     * choose the seller on PDP
     */
    seller_selection?: boolean;
    /**
     * - Configuration to show similar products,
     * other products from same seller, other products in same category, other
     * products in same price range, etc.
     */
    similar?: string[];
    /**
     * - Allow user to update product
     * meta. Default value is true.
     */
    update_product_meta?: boolean;
};
/** @returns {QrFeature} */
declare function QrFeature(): QrFeature;
type QrFeature = {
    /**
     * - Shows whether sharing of mobile app via
     * QR code is allowed. Default value is false.
     */
    application?: boolean;
    /**
     * - Shows whether sharing collection via QR
     * code is allowed. Default value is false.
     */
    collections?: boolean;
    /**
     * - Shows whether sharing product via QR code is
     * allowed. Default value is false.
     */
    products?: boolean;
};
/** @returns {RegistrationPageFeature} */
declare function RegistrationPageFeature(): RegistrationPageFeature;
type RegistrationPageFeature = {
    /**
     * - Shows whether a form to collect the
     * address of the store, should be displayed upon visiting the website
     */
    ask_store_address?: boolean;
};
/** @returns {RevenueEngineFeature} */
declare function RevenueEngineFeature(): RevenueEngineFeature;
type RevenueEngineFeature = {
    /**
     * - Enable revenue engine. Default value is false.
     */
    enabled?: boolean;
};
/** @returns {RewardPointsConfig} */
declare function RewardPointsConfig(): RewardPointsConfig;
type RewardPointsConfig = {
    credit?: Credit;
    debit?: Debit;
};
/** @returns {Safetynet} */
declare function Safetynet(): Safetynet;
type Safetynet = {
    credentials?: SafetynetCredentials;
    /**
     * - Shows whether Safetynet integration is
     * enabled or disabled for the sales channel
     */
    enabled?: boolean;
};
/** @returns {SafetynetCredentials} */
declare function SafetynetCredentials(): SafetynetCredentials;
type SafetynetCredentials = {
    /**
     * - Secret credential API key for Safetynet. This
     * API key is used for calling the methods of Safetynet APIs.
     */
    api_key?: string;
};
/** @returns {SecureUrl} */
declare function SecureUrl(): SecureUrl;
type SecureUrl = {
    /**
     * - Hosted URL of the image
     */
    secure_url?: string;
};
/** @returns {Segment} */
declare function Segment(): Segment;
type Segment = {
    credentials?: SegmentCredentials;
    /**
     * - Shows whether Segment integration is enabled
     * or disabled for the sales channel
     */
    enabled?: boolean;
};
/** @returns {SegmentCredentials} */
declare function SegmentCredentials(): SegmentCredentials;
type SegmentCredentials = {
    /**
     * - The unique identifier for a source that
     * tells Segment from which source data is coming from, to which workspace the
     * data belongs, and which destinations should receive the data.
     */
    write_key?: string;
};
/** @returns {SocialLinks} */
declare function SocialLinks(): SocialLinks;
type SocialLinks = {
    blog_link?: BlogLink;
    facebook?: FacebookLink;
    google_plus?: GooglePlusLink;
    instagram?: InstagramLink;
    linked_in?: LinkedInLink;
    pinterest?: PinterestLink;
    twitter?: TwitterLink;
    vimeo?: VimeoLink;
    youtube?: YoutubeLink;
};
/** @returns {SplashImage} */
declare function SplashImage(): SplashImage;
type SplashImage = {
    /**
     * - Width-to-height ratio of splash image
     */
    aspect_ratio?: string;
    /**
     * - URL where the splash image is hosted
     */
    secure_url?: string;
};
/** @returns {StoreByBrandsRequest} */
declare function StoreByBrandsRequest(): StoreByBrandsRequest;
type StoreByBrandsRequest = {
    /**
     * - Brand UID
     */
    brands: number;
    /**
     * - Current company ID for current company
     * stores only. Don't send in case cross-selling (franchise) is enabled.
     */
    company_id?: number;
    /**
     * - Search store by its name or store code
     */
    search_text?: string;
};
/** @returns {StoreByBrandsResponse} */
declare function StoreByBrandsResponse(): StoreByBrandsResponse;
type StoreByBrandsResponse = {
    items?: BrandStoreInfo[];
    page?: Page;
};
/** @returns {StoreCriteriaRule} */
declare function StoreCriteriaRule(): StoreCriteriaRule;
type StoreCriteriaRule = {
    /**
     * - List of brand uids
     */
    brands?: number[];
    /**
     * - List of company uids
     */
    companies?: number[];
};
/** @returns {StoreLatLong} */
declare function StoreLatLong(): StoreLatLong;
type StoreLatLong = {
    coordinates?: number[];
    /**
     * - Coordinates type of the opted store
     */
    type?: string;
};
/** @returns {StorePriority} */
declare function StorePriority(): StorePriority;
type StorePriority = {
    /**
     * - Shows store priority is enabled or disabled
     * for assignment of article
     */
    enabled?: boolean;
    /**
     * - List of store types for article
     * assignment e.g. warehouse, mall, highstreet
     */
    storetype_order?: any[];
};
/** @returns {StorePriorityRule} */
declare function StorePriorityRule(): StorePriorityRule;
type StorePriorityRule = {
    /**
     * - Shows store priority is enabled or not
     * enabled for the article assignment.
     */
    enabled?: boolean;
    storetype_order?: string[];
};
/** @returns {StoresResponse} */
declare function StoresResponse(): StoresResponse;
type StoresResponse = {
    items?: AppInventoryStores;
    page?: Page;
};
/** @returns {StoreValidator} */
declare function StoreValidator(): StoreValidator;
type StoreValidator = {
    /**
     * - Browser script for the store validator
     */
    browser_script?: string;
    json_schema?: JsonSchema[];
};
/** @returns {SuccessMessageResponse} */
declare function SuccessMessageResponse(): SuccessMessageResponse;
type SuccessMessageResponse = {
    /**
     * - Success message shown to the user (in a string format)
     */
    message?: string;
    /**
     * - Shows whether domain was deleted successfully
     */
    success?: boolean;
};
/** @returns {TokenResponse} */
declare function TokenResponse(): TokenResponse;
type TokenResponse = {
    /**
     * - Version key for tracking revisions. Default value is zero.
     */
    __v?: number;
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the token
     */
    _id?: string;
    /**
     * - Alphanumeric ID allotted to the current
     * application created within the current business account
     */
    application?: string;
    /**
     * - ISO 8601 timestamp of token creation
     */
    created_at?: string;
    tokens?: Tokens;
    /**
     * - ISO 8601 timestamp of token updation
     */
    updated_at?: string;
};
/** @returns {Tokens} */
declare function Tokens(): Tokens;
type Tokens = {
    firebase?: Firebase;
    freshchat?: Freshchat;
    fynd_rewards?: FyndRewards;
    google_map?: GoogleMap;
    gtm?: Gtm;
    moengage?: Moengage;
    safetynet?: Safetynet;
    segment?: Segment;
};
/** @returns {TwitterLink} */
declare function TwitterLink(): TwitterLink;
type TwitterLink = {
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's Twitter account
     */
    link?: string;
    /**
     * - Name of the social media platform, e.g. Twitter
     */
    title?: string;
};
/** @returns {UnhandledError} */
declare function UnhandledError(): UnhandledError;
type UnhandledError = {
    message?: string;
};
/** @returns {UpdateDomain} */
declare function UpdateDomain(): UpdateDomain;
type UpdateDomain = {
    /**
     * - The unique identifier (24-digit Mongo Object ID)
     * of the domain
     */
    _id?: string;
    /**
     * - Domain is primary or not (indicates if the
     * domain has been made the main URL of the sales channel)
     */
    is_primary?: boolean;
    /**
     * - Indicates if the domain is a short link
     * domain (short URL e.g. bit.ly)
     */
    is_shortlink?: boolean;
    /**
     * - Full domain name, e.g. zenz.com
     */
    name?: string;
    /**
     * - Domain is verified or not (indicates if A
     * records and TXT records are correct)
     */
    verified?: boolean;
};
/** @returns {UpdateDomainTypeRequest} */
declare function UpdateDomainTypeRequest(): UpdateDomainTypeRequest;
type UpdateDomainTypeRequest = {
    /**
     * - Shows domain is made primary domain for the
     * sales channel or shorlink is created for the sales channel domain
     */
    action?: string;
    domain?: UpdateDomain;
};
/** @returns {UpdateIntegrationLevelRequest} */
declare function UpdateIntegrationLevelRequest(): UpdateIntegrationLevelRequest;
type UpdateIntegrationLevelRequest = {
    items?: IntegrationLevel[];
};
/** @returns {UserEmail} */
declare function UserEmail(): UserEmail;
type UserEmail = {
    /**
     * - Current email is active or not active
     */
    active?: boolean;
    /**
     * - Email address of the user
     */
    email?: string;
    /**
     * - Indicates current email is primay email or
     * not primary email of user
     */
    primary?: boolean;
    /**
     * - Indicates current email is verified email or
     * not verified email
     */
    verified?: boolean;
};
/** @returns {UserPhoneNumber} */
declare function UserPhoneNumber(): UserPhoneNumber;
type UserPhoneNumber = {
    /**
     * - Current phone number is active or not active
     */
    active?: boolean;
    /**
     * - Country code, e.g. +91
     */
    country_code?: number;
    /**
     * - Phone number of the user
     */
    phone?: string;
    /**
     * - Indicates current phone number is primay or
     * not primary of user
     */
    primary?: boolean;
    /**
     * - Indicates current phone number is verified
     * or not verified
     */
    verified?: boolean;
};
/** @returns {ValidationFailedResponse} */
declare function ValidationFailedResponse(): ValidationFailedResponse;
type ValidationFailedResponse = {
    /**
     * - Response message for failed validation
     */
    message?: string;
};
/** @returns {Validators} */
declare function Validators(): Validators;
type Validators = {
    company?: CompanyValidator;
    inventory?: InventoryValidator;
    order?: OrderValidator;
    store?: StoreValidator;
};
/** @returns {VimeoLink} */
declare function VimeoLink(): VimeoLink;
type VimeoLink = {
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's Vimeo channel
     */
    link?: string;
    /**
     * - Name of the video hosting platform, e.g. Vimeo
     */
    title?: string;
};
/** @returns {YoutubeLink} */
declare function YoutubeLink(): YoutubeLink;
type YoutubeLink = {
    /**
     * - Hosted URL of social icon image shown on the website
     */
    icon?: string;
    /**
     * - Web URL of brand's YouTube channel
     */
    link?: string;
    /**
     * - Name of the social media platform, e.g. YouTube
     */
    title?: string;
};
