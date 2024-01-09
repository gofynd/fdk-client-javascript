const Joi = require("joi");

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
 * @property {Links[]} [links]
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
 * @property {Charges[]} [charges] - Holds values for delivery charges.
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
 * @property {number[]} [brands]
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
 * @property {AppStoreRules[]} [rules] - Rules to show which brands or companies
 *   products should be listed on sales channel.
 * @property {Object[]} [stores] - List of stores
 */

/**
 * @typedef InventoryStoreRule
 * @property {string} [criteria] - Whether all stores are enabled, or explicitly
 *   few stores in the inventory, or use brands and company filter.
 * @property {StoreCriteriaRule[]} [rules] - List of rules with company and
 *   brands uids. Used when critera is `filter`.
 * @property {number[]} [stores] - List of store uids. Used when critera is `explicit`.
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
 * @typedef OrderingStoreSelect
 * @property {number} uid - Ordering store unique uid. It is required.
 */

/**
 * @typedef OrderingStoreSelectRequest
 * @property {OrderingStoreSelect} ordering_store
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
 * @property {number[]} [brands] - List of brand UID
 * @property {number[]} [companies] - List of company UID
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

class ConfigurationPlatformModel {
  /** @returns {Android} */
  static Android() {
    return Joi.object({
      api_key: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
    });
  }

  /** @returns {App} */
  static App() {
    return Joi.object({
      auth: ConfigurationPlatformModel.ApplicationAuth(),
      channel_type: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      desc: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {AppCartConfig} */
  static AppCartConfig() {
    return Joi.object({
      bulk_coupons: Joi.boolean(),
      delivery_charges: ConfigurationPlatformModel.DeliveryCharges(),
      enabled: Joi.boolean(),
      max_cart_items: Joi.number(),
      min_cart_value: Joi.number(),
      pan_card: ConfigurationPlatformModel.PanCardConfig(),
      revenue_engine_coupon: Joi.boolean(),
    });
  }

  /** @returns {AppCurrencyResponse} */
  static AppCurrencyResponse() {
    return Joi.object({
      application: Joi.string().allow(""),
      default_currency: ConfigurationPlatformModel.DefaultCurrency(),
      supported_currency: Joi.array().items(
        ConfigurationPlatformModel.Currency()
      ),
    });
  }

  /** @returns {AppDomain} */
  static AppDomain() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  /** @returns {AppFeature} */
  static AppFeature() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      app: Joi.string().allow(""),
      cart: ConfigurationPlatformModel.CartFeature(),
      common: ConfigurationPlatformModel.CommonFeature(),
      created_at: Joi.string().allow(""),
      home_page: ConfigurationPlatformModel.HomePageFeature(),
      landing_page: ConfigurationPlatformModel.LandingPageFeature(),
      order: ConfigurationPlatformModel.OrderFeature(),
      pcr: ConfigurationPlatformModel.PcrFeature(),
      product_detail: ConfigurationPlatformModel.ProductDetailFeature(),
      qr: ConfigurationPlatformModel.QrFeature(),
      registration_page: ConfigurationPlatformModel.RegistrationPageFeature(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {AppFeatureRequest} */
  static AppFeatureRequest() {
    return Joi.object({
      feature: ConfigurationPlatformModel.AppFeature(),
    });
  }

  /** @returns {AppFeatureResponse} */
  static AppFeatureResponse() {
    return Joi.object({
      feature: ConfigurationPlatformModel.AppFeature(),
    });
  }

  /** @returns {AppInventory} */
  static AppInventory() {
    return Joi.object({
      article_assignment: ConfigurationPlatformModel.InventoryArticleAssignment(),
      brand: ConfigurationPlatformModel.InventoryBrandRule(),
      franchise_enabled: Joi.boolean(),
      image: Joi.array().items(Joi.string().allow("")),
      only_verified_products: Joi.boolean(),
      out_of_stock: Joi.boolean(),
      payment: ConfigurationPlatformModel.InventoryPaymentConfig(),
      store: ConfigurationPlatformModel.InventoryStoreRule(),
    });
  }

  /** @returns {AppInventoryCompanies} */
  static AppInventoryCompanies() {
    return Joi.object({
      company_type: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {AppInventoryConfig} */
  static AppInventoryConfig() {
    return Joi.object({
      brand: ConfigurationPlatformModel.InventoryBrand(),
      category: ConfigurationPlatformModel.InventoryCategory(),
      company_store: Joi.array().items(Joi.any()),
      discount: ConfigurationPlatformModel.InventoryDiscount(),
      exclude_category: Joi.array().items(Joi.any()),
      franchise_enabled: Joi.boolean(),
      image: Joi.array().items(Joi.string().allow("")),
      only_verified_products: Joi.boolean(),
      out_of_stock: Joi.boolean(),
      price: ConfigurationPlatformModel.InventoryPrice(),
      store: ConfigurationPlatformModel.InventoryStore(),
    });
  }

  /** @returns {AppInventoryPartialUpdate} */
  static AppInventoryPartialUpdate() {
    return Joi.object({
      cart: ConfigurationPlatformModel.AppCartConfig(),
      comms_enabled: Joi.boolean(),
      communication: ConfigurationPlatformModel.CommunicationConfig(),
      loyalty_points: ConfigurationPlatformModel.LoyaltyPointsConfig(),
      payment: ConfigurationPlatformModel.AppPaymentConfig(),
      reward_points: ConfigurationPlatformModel.RewardPointsConfig(),
    });
  }

  /** @returns {AppInventoryStores} */
  static AppInventoryStores() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.number(),
      display_name: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {Application} */
  static Application() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      app_type: Joi.string().allow(""),
      auth: ConfigurationPlatformModel.ApplicationAuth(),
      banner: ConfigurationPlatformModel.SecureUrl(),
      cache_ttl: Joi.number(),
      channel_type: Joi.string().allow(""),
      company_id: Joi.number(),
      cors: ConfigurationPlatformModel.ApplicationCors(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      domain: ConfigurationPlatformModel.Domain(),
      domains: Joi.array().items(ConfigurationPlatformModel.Domain()),
      favicon: ConfigurationPlatformModel.SecureUrl(),
      is_active: Joi.boolean(),
      is_internal: Joi.boolean(),
      logo: ConfigurationPlatformModel.SecureUrl(),
      meta: Joi.array().items(ConfigurationPlatformModel.ApplicationMeta()),
      mobile_logo: ConfigurationPlatformModel.SecureUrl(),
      name: Joi.string().allow(""),
      owner: Joi.string().allow(""),
      redirections: Joi.array().items(
        ConfigurationPlatformModel.ApplicationRedirections()
      ),
      slug: Joi.string().allow(""),
      token: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      website: ConfigurationPlatformModel.ApplicationWebsite(),
    });
  }

  /** @returns {ApplicationAuth} */
  static ApplicationAuth() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {ApplicationCors} */
  static ApplicationCors() {
    return Joi.object({
      domains: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ApplicationDetail} */
  static ApplicationDetail() {
    return Joi.object({
      _id: Joi.string().allow(""),
      banner: ConfigurationPlatformModel.SecureUrl(),
      description: Joi.string().allow(""),
      domain: ConfigurationPlatformModel.Domain(),
      domains: Joi.array().items(ConfigurationPlatformModel.Domain()),
      favicon: ConfigurationPlatformModel.SecureUrl(),
      logo: ConfigurationPlatformModel.SecureUrl(),
      mobile_logo: ConfigurationPlatformModel.SecureUrl(),
      name: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplicationInformation} */
  static ApplicationInformation() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      address: ConfigurationPlatformModel.InformationAddress(),
      application: Joi.string().allow(""),
      business_highlights: ConfigurationPlatformModel.BusinessHighlights(),
      copyright_text: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      links: Joi.array().items(ConfigurationPlatformModel.Links()),
      social_links: ConfigurationPlatformModel.SocialLinks(),
      support: ConfigurationPlatformModel.InformationSupport(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationInventory} */
  static ApplicationInventory() {
    return Joi.object({
      _id: Joi.string().allow(""),
      app: Joi.string().allow(""),
      article_assignment: ConfigurationPlatformModel.ArticleAssignmentConfig(),
      authentication: ConfigurationPlatformModel.AuthenticationConfig(),
      business: Joi.string().allow(""),
      cart: ConfigurationPlatformModel.AppCartConfig(),
      comms_enabled: Joi.boolean(),
      communication: ConfigurationPlatformModel.CommunicationConfig(),
      created_at: Joi.string().allow(""),
      inventory: ConfigurationPlatformModel.AppInventoryConfig(),
      logistics: ConfigurationPlatformModel.AppLogisticsConfig(),
      loyalty_points: ConfigurationPlatformModel.LoyaltyPointsConfig(),
      modified_by: Joi.string().allow(""),
      order: ConfigurationPlatformModel.AppOrderConfig(),
      payment: ConfigurationPlatformModel.AppPaymentConfig(),
      platforms: Joi.array().items(Joi.string().allow("")),
      reward_points: ConfigurationPlatformModel.RewardPointsConfig(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationMeta} */
  static ApplicationMeta() {
    return Joi.object({
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationRedirections} */
  static ApplicationRedirections() {
    return Joi.object({
      redirect_from: Joi.string().allow(""),
      redirect_to: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationsResponse} */
  static ApplicationsResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPlatformModel.Application()),
      page: ConfigurationPlatformModel.Page(),
    });
  }

  /** @returns {ApplicationWebsite} */
  static ApplicationWebsite() {
    return Joi.object({
      basepath: Joi.string().allow(""),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {AppLogisticsConfig} */
  static AppLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
      logistics_by_seller: Joi.boolean(),
      same_day_delivery: Joi.boolean(),
      serviceability_check: Joi.boolean(),
    });
  }

  /** @returns {AppOrderConfig} */
  static AppOrderConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
      force_reassignment: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {AppPaymentConfig} */
  static AppPaymentConfig() {
    return Joi.object({
      anonymous_cod: Joi.boolean(),
      callback_url: ConfigurationPlatformModel.CallbackUrl(),
      cod_amount_limit: Joi.number(),
      cod_charges: Joi.number(),
      enabled: Joi.boolean(),
      methods: ConfigurationPlatformModel.Methods(),
      mode_of_payment: Joi.string().allow(""),
      payment_selection_lock: ConfigurationPlatformModel.PaymentSelectionLock(),
      source: Joi.string().allow(""),
    });
  }

  /** @returns {AppStoreRules} */
  static AppStoreRules() {
    return Joi.object({
      brands: Joi.array().items(Joi.any()),
      companies: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {AppSupportedCurrency} */
  static AppSupportedCurrency() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      default_currency: ConfigurationPlatformModel.DefaultCurrency(),
      supported_currency: Joi.array().items(Joi.string().allow("")),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {ArticleAssignmentConfig} */
  static ArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
      rules: ConfigurationPlatformModel.ArticleAssignmentRules(),
    });
  }

  /** @returns {ArticleAssignmentRule} */
  static ArticleAssignmentRule() {
    return Joi.object({
      store_priority: ConfigurationPlatformModel.StorePriorityRule(),
    });
  }

  /** @returns {ArticleAssignmentRules} */
  static ArticleAssignmentRules() {
    return Joi.object({
      store_priority: ConfigurationPlatformModel.StorePriority(),
    });
  }

  /** @returns {AuthenticationConfig} */
  static AuthenticationConfig() {
    return Joi.object({
      provider: Joi.string().allow(""),
      required: Joi.boolean(),
    });
  }

  /** @returns {BlogLink} */
  static BlogLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {BrandCompanyInfo} */
  static BrandCompanyInfo() {
    return Joi.object({
      company_id: Joi.number(),
      company_name: Joi.string().allow(""),
    });
  }

  /** @returns {BrandsByCompanyResponse} */
  static BrandsByCompanyResponse() {
    return Joi.object({
      brands: ConfigurationPlatformModel.CompanyBrandInfo(),
    });
  }

  /** @returns {BrandStoreInfo} */
  static BrandStoreInfo() {
    return Joi.object({
      company: ConfigurationPlatformModel.OptedCompany(),
      store_address: ConfigurationPlatformModel.OptedStoreAddress(),
      store_code: Joi.string().allow(""),
      store_id: Joi.number(),
      store_name: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
    });
  }

  /** @returns {BuildVersion} */
  static BuildVersion() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      build_status: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      platform_type: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version_code: Joi.number(),
      version_name: Joi.string().allow(""),
    });
  }

  /** @returns {BuildVersionHistory} */
  static BuildVersionHistory() {
    return Joi.object({
      latest_available_version_name: Joi.string().allow(""),
      versions: ConfigurationPlatformModel.BuildVersion(),
    });
  }

  /** @returns {BusinessHighlights} */
  static BusinessHighlights() {
    return Joi.object({
      _id: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      sub_title: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {CallbackUrl} */
  static CallbackUrl() {
    return Joi.object({
      app: Joi.string().allow(""),
      web: Joi.string().allow(""),
    });
  }

  /** @returns {CartFeature} */
  static CartFeature() {
    return Joi.object({
      google_map: Joi.boolean(),
      gst_input: Joi.boolean(),
      placing_for_customer: Joi.boolean(),
      revenue_engine_coupon: Joi.boolean(),
      staff_selection: Joi.boolean(),
    });
  }

  /** @returns {Charges} */
  static Charges() {
    return Joi.object({
      charges: Joi.number(),
      threshold: Joi.number(),
    });
  }

  /** @returns {CommonFeature} */
  static CommonFeature() {
    return Joi.object({
      communication_optin_dialog: ConfigurationPlatformModel.CommunicationOptinDialogFeature(),
      compare_products: ConfigurationPlatformModel.CompareProductsFeature(),
      currency: ConfigurationPlatformModel.CurrencyFeature(),
      deployment_store_selection: ConfigurationPlatformModel.DeploymentStoreSelectionFeature(),
      feedback: ConfigurationPlatformModel.FeedbackFeature(),
      listing_price: ConfigurationPlatformModel.ListingPriceFeature(),
      revenue_engine: ConfigurationPlatformModel.RevenueEngineFeature(),
      reward_points: ConfigurationPlatformModel.RewardPointsConfig(),
    });
  }

  /** @returns {CommsConfig} */
  static CommsConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {CommunicationConfig} */
  static CommunicationConfig() {
    return Joi.object({
      email: ConfigurationPlatformModel.CommsConfig(),
      sms: ConfigurationPlatformModel.CommsConfig(),
      voice: ConfigurationPlatformModel.CommsConfig(),
    });
  }

  /** @returns {CommunicationOptinDialogFeature} */
  static CommunicationOptinDialogFeature() {
    return Joi.object({
      visibility: Joi.boolean(),
    });
  }

  /** @returns {CompaniesResponse} */
  static CompaniesResponse() {
    return Joi.object({
      items: ConfigurationPlatformModel.AppInventoryCompanies(),
      page: ConfigurationPlatformModel.Page(),
    });
  }

  /** @returns {CompanyBrandInfo} */
  static CompanyBrandInfo() {
    return Joi.object({
      brand_banner_portrait_url: Joi.string().allow(""),
      brand_banner_url: Joi.string().allow(""),
      brand_logo_url: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {CompanyByBrandsRequest} */
  static CompanyByBrandsRequest() {
    return Joi.object({
      brands: Joi.number().required(),
      search_text: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyByBrandsResponse} */
  static CompanyByBrandsResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPlatformModel.BrandCompanyInfo()),
      page: ConfigurationPlatformModel.Page(),
    });
  }

  /** @returns {CompanyValidator} */
  static CompanyValidator() {
    return Joi.object({
      browser_script: Joi.string().allow(""),
      json_schema: Joi.array().items(ConfigurationPlatformModel.JsonSchema()),
    });
  }

  /** @returns {CompareProductsFeature} */
  static CompareProductsFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {CreateApplicationRequest} */
  static CreateApplicationRequest() {
    return Joi.object({
      app: ConfigurationPlatformModel.App(),
      configuration: ConfigurationPlatformModel.AppInventory(),
      domain: ConfigurationPlatformModel.AppDomain(),
    });
  }

  /** @returns {CreateAppResponse} */
  static CreateAppResponse() {
    return Joi.object({
      app: ConfigurationPlatformModel.Application(),
      configuration: ConfigurationPlatformModel.ApplicationInventory(),
    });
  }

  /** @returns {Credentials} */
  static Credentials() {
    return Joi.object({
      android: ConfigurationPlatformModel.Android(),
      api_key: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      gcm_sender_id: Joi.string().allow(""),
      ios: ConfigurationPlatformModel.Ios(),
      project_id: Joi.string().allow(""),
    });
  }

  /** @returns {Credit} */
  static Credit() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {CurrenciesResponse} */
  static CurrenciesResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPlatformModel.Currency()),
    });
  }

  /** @returns {Currency} */
  static Currency() {
    return Joi.object({
      _id: Joi.string().allow(""),
      code: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      decimal_digits: Joi.number(),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {CurrencyFeature} */
  static CurrencyFeature() {
    return Joi.object({
      default_currency: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Debit} */
  static Debit() {
    return Joi.object({
      auto_apply: Joi.boolean(),
      enabled: Joi.boolean(),
      strategy_channel: Joi.string().allow(""),
    });
  }

  /** @returns {DefaultCurrency} */
  static DefaultCurrency() {
    return Joi.object({
      code: Joi.string().allow(""),
      ref: Joi.string().allow(""),
    });
  }

  /** @returns {DeliveryCharges} */
  static DeliveryCharges() {
    return Joi.object({
      charges: Joi.array().items(ConfigurationPlatformModel.Charges()),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {DeploymentMeta} */
  static DeploymentMeta() {
    return Joi.object({
      _id: Joi.string().allow(""),
      all_stores: Joi.boolean(),
      app: Joi.string().allow(""),
      deployed_stores: Joi.array().items(Joi.number()),
      enabled: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {DeploymentStoreSelectionFeature} */
  static DeploymentStoreSelectionFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Domain} */
  static Domain() {
    return Joi.object({
      _id: Joi.string().allow(""),
      is_predefined: Joi.boolean(),
      is_primary: Joi.boolean(),
      is_shortlink: Joi.boolean(),
      name: Joi.string().allow(""),
      verified: Joi.boolean(),
    });
  }

  /** @returns {DomainAdd} */
  static DomainAdd() {
    return Joi.object({
      _id: Joi.string().allow(""),
      is_primary: Joi.boolean(),
      is_shortlink: Joi.boolean(),
      message: Joi.string().allow(""),
      name: Joi.string().allow(""),
      txt_records: Joi.array().items(Joi.string().allow("")),
      verified: Joi.boolean(),
    });
  }

  /** @returns {DomainAddRequest} */
  static DomainAddRequest() {
    return Joi.object({
      domain: ConfigurationPlatformModel.DomainAdd(),
    });
  }

  /** @returns {DomainsResponse} */
  static DomainsResponse() {
    return Joi.object({
      domains: Joi.array().items(ConfigurationPlatformModel.Domain()),
    });
  }

  /** @returns {DomainStatus} */
  static DomainStatus() {
    return Joi.object({
      display: Joi.string().allow(""),
      status: Joi.boolean(),
    });
  }

  /** @returns {DomainStatusRequest} */
  static DomainStatusRequest() {
    return Joi.object({
      domain_url: Joi.string().allow(""),
    });
  }

  /** @returns {DomainStatusResponse} */
  static DomainStatusResponse() {
    return Joi.object({
      connected: Joi.boolean(),
      status: Joi.array().items(ConfigurationPlatformModel.DomainStatus()),
    });
  }

  /** @returns {DomainSuggestion} */
  static DomainSuggestion() {
    return Joi.object({
      currency: Joi.string().allow(""),
      is_available: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      price: Joi.number(),
      unsupported: Joi.boolean(),
    });
  }

  /** @returns {DomainSuggestionsRequest} */
  static DomainSuggestionsRequest() {
    return Joi.object({
      custom: Joi.boolean(),
      domain_url: Joi.string().allow(""),
    });
  }

  /** @returns {DomainSuggestionsResponse} */
  static DomainSuggestionsResponse() {
    return Joi.object({
      domains: Joi.array().items(ConfigurationPlatformModel.DomainSuggestion()),
    });
  }

  /** @returns {FacebookLink} */
  static FacebookLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {FeedbackFeature} */
  static FeedbackFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {FilterOrderingStoreRequest} */
  static FilterOrderingStoreRequest() {
    return Joi.object({
      all_stores: Joi.boolean(),
      deployed_stores: Joi.array().items(Joi.number()),
      q: Joi.string().allow(""),
    });
  }

  /** @returns {Firebase} */
  static Firebase() {
    return Joi.object({
      credentials: ConfigurationPlatformModel.Credentials(),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {Freshchat} */
  static Freshchat() {
    return Joi.object({
      credentials: ConfigurationPlatformModel.FreshchatCredentials(),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {FreshchatCredentials} */
  static FreshchatCredentials() {
    return Joi.object({
      app_id: Joi.string().allow(""),
      app_key: Joi.string().allow(""),
      web_token: Joi.string().allow(""),
    });
  }

  /** @returns {FyndRewards} */
  static FyndRewards() {
    return Joi.object({
      credentials: ConfigurationPlatformModel.FyndRewardsCredentials(),
    });
  }

  /** @returns {FyndRewardsCredentials} */
  static FyndRewardsCredentials() {
    return Joi.object({
      public_key: Joi.string().allow(""),
    });
  }

  /** @returns {GetIntegrationsOptInsResponse} */
  static GetIntegrationsOptInsResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPlatformModel.IntegrationOptIn()),
      page: ConfigurationPlatformModel.Page(),
    });
  }

  /** @returns {GoogleMap} */
  static GoogleMap() {
    return Joi.object({
      credentials: ConfigurationPlatformModel.GoogleMapCredentials(),
    });
  }

  /** @returns {GoogleMapCredentials} */
  static GoogleMapCredentials() {
    return Joi.object({
      api_key: Joi.string().allow(""),
    });
  }

  /** @returns {GooglePlusLink} */
  static GooglePlusLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {Gtm} */
  static Gtm() {
    return Joi.object({
      credentials: ConfigurationPlatformModel.GtmCredentials(),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {GtmCredentials} */
  static GtmCredentials() {
    return Joi.object({
      api_key: Joi.string().allow(""),
    });
  }

  /** @returns {HomePageFeature} */
  static HomePageFeature() {
    return Joi.object({
      order_processing: Joi.boolean(),
    });
  }

  /** @returns {InformationAddress} */
  static InformationAddress() {
    return Joi.object({
      address_line: Joi.array().items(Joi.string().allow("")),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      loc: Joi.string().allow(""),
      phone: Joi.array().items(ConfigurationPlatformModel.InformationPhone()),
      pincode: Joi.number(),
    });
  }

  /** @returns {InformationPhone} */
  static InformationPhone() {
    return Joi.object({
      code: Joi.string().allow(""),
      number: Joi.string().allow(""),
    });
  }

  /** @returns {InformationSupport} */
  static InformationSupport() {
    return Joi.object({
      email: Joi.array().items(Joi.string().allow("")),
      phone: Joi.array().items(Joi.string().allow("")),
      timing: Joi.string().allow(""),
    });
  }

  /** @returns {InstagramLink} */
  static InstagramLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {Integration} */
  static Integration() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      companies: Joi.array().items(Joi.any()),
      constants: Joi.any(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      description_html: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      meta: Joi.array().items(ConfigurationPlatformModel.IntegrationMeta()),
      name: Joi.string().allow(""),
      owner: Joi.string().allow(""),
      secret: Joi.string().allow(""),
      support: Joi.array().items(Joi.string().allow("")),
      token: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      validators: ConfigurationPlatformModel.Validators(),
    });
  }

  /** @returns {IntegrationConfigResponse} */
  static IntegrationConfigResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPlatformModel.IntegrationLevel()),
    });
  }

  /** @returns {IntegrationLevel} */
  static IntegrationLevel() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      data: Joi.any(),
      integration: Joi.string().allow(""),
      last_patch: Joi.array().items(ConfigurationPlatformModel.LastPatch()),
      level: Joi.string().allow(""),
      meta: Joi.array().items(ConfigurationPlatformModel.IntegrationMeta()),
      opted: Joi.boolean(),
      permissions: Joi.array().items(Joi.any()),
      token: Joi.string().allow(""),
      uid: Joi.number(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {IntegrationMeta} */
  static IntegrationMeta() {
    return Joi.object({
      _id: Joi.string().allow(""),
      is_public: Joi.boolean(),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {IntegrationOptIn} */
  static IntegrationOptIn() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      companies: Joi.array().items(Joi.any()),
      constants: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      description_html: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      meta: Joi.array().items(ConfigurationPlatformModel.IntegrationMeta()),
      name: Joi.string().allow(""),
      owner: Joi.string().allow(""),
      secret: Joi.string().allow(""),
      support: Joi.array().items(Joi.string().allow("")),
      token: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      validators: ConfigurationPlatformModel.Validators(),
    });
  }

  /** @returns {InvalidPayloadRequest} */
  static InvalidPayloadRequest() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryArticleAssignment} */
  static InventoryArticleAssignment() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
      rules: ConfigurationPlatformModel.ArticleAssignmentRule(),
    });
  }

  /** @returns {InventoryBrand} */
  static InventoryBrand() {
    return Joi.object({
      brands: Joi.array().items(Joi.any()),
      criteria: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryBrandRule} */
  static InventoryBrandRule() {
    return Joi.object({
      brands: Joi.array().items(Joi.number()),
      criteria: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryCategory} */
  static InventoryCategory() {
    return Joi.object({
      categories: Joi.array().items(Joi.any()),
      criteria: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryDiscount} */
  static InventoryDiscount() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {InventoryPaymentConfig} */
  static InventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),
      source: Joi.string().allow(""),
    });
  }

  /** @returns {InventoryPrice} */
  static InventoryPrice() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
    });
  }

  /** @returns {InventoryStore} */
  static InventoryStore() {
    return Joi.object({
      criteria: Joi.string().allow(""),
      rules: Joi.array().items(ConfigurationPlatformModel.AppStoreRules()),
      stores: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {InventoryStoreRule} */
  static InventoryStoreRule() {
    return Joi.object({
      criteria: Joi.string().allow(""),
      rules: Joi.array().items(ConfigurationPlatformModel.StoreCriteriaRule()),
      stores: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {InventoryValidator} */
  static InventoryValidator() {
    return Joi.object({
      browser_script: Joi.string().allow(""),
      json_schema: Joi.array().items(ConfigurationPlatformModel.JsonSchema()),
    });
  }

  /** @returns {Ios} */
  static Ios() {
    return Joi.object({
      api_key: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
    });
  }

  /** @returns {JsonSchema} */
  static JsonSchema() {
    return Joi.object({
      display: Joi.string().allow(""),
      key: Joi.string().allow(""),
      tooltip: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {LandingImage} */
  static LandingImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
    });
  }

  /** @returns {LandingPageFeature} */
  static LandingPageFeature() {
    return Joi.object({
      continue_as_guest: Joi.boolean(),
      launch_page: ConfigurationPlatformModel.LaunchPage(),
      login_btn_text: Joi.string().allow(""),
      show_domain_textbox: Joi.boolean(),
      show_register_btn: Joi.boolean(),
    });
  }

  /** @returns {LastPatch} */
  static LastPatch() {
    return Joi.object({
      op: Joi.string().allow(""),
      path: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {LaunchPage} */
  static LaunchPage() {
    return Joi.object({
      page_type: Joi.string().allow(""),
      params: Joi.any(),
      query: Joi.any(),
    });
  }

  /** @returns {LinkedInLink} */
  static LinkedInLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {Links} */
  static Links() {
    return Joi.object({
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {ListingPriceFeature} */
  static ListingPriceFeature() {
    return Joi.object({
      sort: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {LoyaltyPointsConfig} */
  static LoyaltyPointsConfig() {
    return Joi.object({
      auto_apply: Joi.boolean(),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {Methods} */
  static Methods() {
    return Joi.object({
      card: ConfigurationPlatformModel.PaymentModeConfig(),
      cod: ConfigurationPlatformModel.PaymentModeConfig(),
      fc: ConfigurationPlatformModel.PaymentModeConfig(),
      jiopp: ConfigurationPlatformModel.PaymentModeConfig(),
      jp: ConfigurationPlatformModel.PaymentModeConfig(),
      juspaypg: ConfigurationPlatformModel.PaymentModeConfig(),
      nb: ConfigurationPlatformModel.PaymentModeConfig(),
      pac: ConfigurationPlatformModel.PaymentModeConfig(),
      payubizpg: ConfigurationPlatformModel.PaymentModeConfig(),
      payumoneypg: ConfigurationPlatformModel.PaymentModeConfig(),
      pl: ConfigurationPlatformModel.PaymentModeConfig(),
      pp: ConfigurationPlatformModel.PaymentModeConfig(),
      ps: ConfigurationPlatformModel.PaymentModeConfig(),
      qr: ConfigurationPlatformModel.PaymentModeConfig(),
      rupifipg: ConfigurationPlatformModel.PaymentModeConfig(),
      simpl: ConfigurationPlatformModel.PaymentModeConfig(),
      stripepg: ConfigurationPlatformModel.PaymentModeConfig(),
      upi: ConfigurationPlatformModel.PaymentModeConfig(),
      wl: ConfigurationPlatformModel.PaymentModeConfig(),
    });
  }

  /** @returns {MobileAppConfigRequest} */
  static MobileAppConfigRequest() {
    return Joi.object({
      app_name: Joi.string().allow(""),
      is_active: Joi.boolean(),
      landing_image: ConfigurationPlatformModel.LandingImage(),
      splash_image: ConfigurationPlatformModel.SplashImage(),
    });
  }

  /** @returns {MobileAppConfiguration} */
  static MobileAppConfiguration() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      app_name: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      is_active: Joi.boolean(),
      landing_image: ConfigurationPlatformModel.LandingImage(),
      package_name: Joi.string().allow(""),
      platform_type: Joi.string().allow(""),
      splash_image: ConfigurationPlatformModel.SplashImage(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {Moengage} */
  static Moengage() {
    return Joi.object({
      credentials: ConfigurationPlatformModel.MoengageCredentials(),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {MoengageCredentials} */
  static MoengageCredentials() {
    return Joi.object({
      app_id: Joi.string().allow(""),
    });
  }

  /** @returns {NotFound} */
  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {OptedApplicationResponse} */
  static OptedApplicationResponse() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company: ConfigurationPlatformModel.OptedCompany(),
      description: Joi.string().allow(""),
      domain: Joi.string().allow(""),
      name: Joi.string().allow(""),
      opt_out_inventory: ConfigurationPlatformModel.OptOutInventory(),
      opted_inventory: ConfigurationPlatformModel.OptedInventory(),
    });
  }

  /** @returns {OptedCompany} */
  static OptedCompany() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {OptedInventory} */
  static OptedInventory() {
    return Joi.object({
      items: Joi.any(),
      opt_type: ConfigurationPlatformModel.OptType(),
    });
  }

  /** @returns {OptedStore} */
  static OptedStore() {
    return Joi.object({
      _id: Joi.string().allow(""),
      address: ConfigurationPlatformModel.OptedStoreAddress(),
      company_id: Joi.number(),
      display_name: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {OptedStoreAddress} */
  static OptedStoreAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      lat_long: ConfigurationPlatformModel.StoreLatLong(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }

  /** @returns {OptedStoreIntegration} */
  static OptedStoreIntegration() {
    return Joi.object({
      other_entity: ConfigurationPlatformModel.OtherEntity(),
      other_integration: ConfigurationPlatformModel.IntegrationOptIn(),
      other_opted: Joi.boolean(),
    });
  }

  /** @returns {OptOutInventory} */
  static OptOutInventory() {
    return Joi.object({
      company: Joi.array().items(Joi.number()).required(),
      store: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {OptType} */
  static OptType() {
    return Joi.object({
      display: Joi.string().allow(""),
      key: Joi.string().allow(""),
    });
  }

  /** @returns {OrderFeature} */
  static OrderFeature() {
    return Joi.object({
      buy_again: Joi.boolean(),
    });
  }

  /** @returns {OrderingStore} */
  static OrderingStore() {
    return Joi.object({
      _id: Joi.string().allow(""),
      address: ConfigurationPlatformModel.OptedStoreAddress(),
      code: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      pincode: Joi.number(),
      store_code: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {OrderingStoreConfig} */
  static OrderingStoreConfig() {
    return Joi.object({
      deployment_meta: ConfigurationPlatformModel.DeploymentMeta(),
    });
  }

  /** @returns {OrderingStores} */
  static OrderingStores() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      all_stores: Joi.boolean(),
      app: Joi.string().allow(""),
      deployed_stores: Joi.array().items(Joi.number()),
      enabled: Joi.boolean(),
      items: Joi.array().items(ConfigurationPlatformModel.OrderingStore()),
      page: ConfigurationPlatformModel.Page(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {OrderingStoreSelect} */
  static OrderingStoreSelect() {
    return Joi.object({
      uid: Joi.number().required(),
    });
  }

  /** @returns {OrderingStoreSelectRequest} */
  static OrderingStoreSelectRequest() {
    return Joi.object({
      ordering_store: ConfigurationPlatformModel.OrderingStoreSelect().required(),
    });
  }

  /** @returns {OrderingStoresResponse} */
  static OrderingStoresResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPlatformModel.OrderingStore()),
      page: ConfigurationPlatformModel.Page(),
    });
  }

  /** @returns {OrderValidator} */
  static OrderValidator() {
    return Joi.object({
      browser_script: Joi.string().allow(""),
      json_schema: Joi.array().items(ConfigurationPlatformModel.JsonSchema()),
    });
  }

  /** @returns {OtherEntity} */
  static OtherEntity() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      data: ConfigurationPlatformModel.OtherEntityData(),
      integration: Joi.string().allow(""),
      last_patch: Joi.array().items(ConfigurationPlatformModel.LastPatch()),
      level: Joi.string().allow(""),
      meta: Joi.array().items(Joi.any()),
      opted: Joi.boolean(),
      permissions: Joi.array().items(Joi.string().allow("")),
      token: Joi.string().allow(""),
      uid: Joi.number(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {OtherEntityData} */
  static OtherEntityData() {
    return Joi.object({
      article_identifier: Joi.string().allow(""),
    });
  }

  /** @returns {OtherSellerApplication} */
  static OtherSellerApplication() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company: ConfigurationPlatformModel.OtherSellerCompany(),
      description: Joi.string().allow(""),
      domain: Joi.string().allow(""),
      name: Joi.string().allow(""),
      opt_type: Joi.string().allow(""),
    });
  }

  /** @returns {OtherSellerApplications} */
  static OtherSellerApplications() {
    return Joi.object({
      items: Joi.array().items(
        ConfigurationPlatformModel.OtherSellerApplication()
      ),
      page: ConfigurationPlatformModel.Page(),
    });
  }

  /** @returns {OtherSellerCompany} */
  static OtherSellerCompany() {
    return Joi.object({
      name: Joi.string().allow(""),
      uid: Joi.number(),
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

  /** @returns {PanCardConfig} */
  static PanCardConfig() {
    return Joi.object({
      cod_threshold_amount: Joi.number(),
      enabled: Joi.boolean(),
      online_threshold_amount: Joi.number(),
    });
  }

  /** @returns {PaymentModeConfig} */
  static PaymentModeConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {PaymentSelectionLock} */
  static PaymentSelectionLock() {
    return Joi.object({
      default_options: Joi.string().allow(""),
      enabled: Joi.boolean(),
      payment_identifier: Joi.string().allow(""),
    });
  }

  /** @returns {PcrFeature} */
  static PcrFeature() {
    return Joi.object({
      staff_selection: Joi.boolean(),
    });
  }

  /** @returns {PinterestLink} */
  static PinterestLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {ProductDetailFeature} */
  static ProductDetailFeature() {
    return Joi.object({
      request_product: Joi.boolean(),
      seller_selection: Joi.boolean(),
      similar: Joi.array().items(Joi.string().allow("")),
      update_product_meta: Joi.boolean(),
    });
  }

  /** @returns {QrFeature} */
  static QrFeature() {
    return Joi.object({
      application: Joi.boolean(),
      collections: Joi.boolean(),
      products: Joi.boolean(),
    });
  }

  /** @returns {RegistrationPageFeature} */
  static RegistrationPageFeature() {
    return Joi.object({
      ask_store_address: Joi.boolean(),
    });
  }

  /** @returns {RevenueEngineFeature} */
  static RevenueEngineFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {RewardPointsConfig} */
  static RewardPointsConfig() {
    return Joi.object({
      credit: ConfigurationPlatformModel.Credit(),
      debit: ConfigurationPlatformModel.Debit(),
    });
  }

  /** @returns {Safetynet} */
  static Safetynet() {
    return Joi.object({
      credentials: ConfigurationPlatformModel.SafetynetCredentials(),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {SafetynetCredentials} */
  static SafetynetCredentials() {
    return Joi.object({
      api_key: Joi.string().allow(""),
    });
  }

  /** @returns {SecureUrl} */
  static SecureUrl() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }

  /** @returns {Segment} */
  static Segment() {
    return Joi.object({
      credentials: ConfigurationPlatformModel.SegmentCredentials(),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {SegmentCredentials} */
  static SegmentCredentials() {
    return Joi.object({
      write_key: Joi.string().allow(""),
    });
  }

  /** @returns {SocialLinks} */
  static SocialLinks() {
    return Joi.object({
      blog_link: ConfigurationPlatformModel.BlogLink(),
      facebook: ConfigurationPlatformModel.FacebookLink(),
      google_plus: ConfigurationPlatformModel.GooglePlusLink(),
      instagram: ConfigurationPlatformModel.InstagramLink(),
      linked_in: ConfigurationPlatformModel.LinkedInLink(),
      pinterest: ConfigurationPlatformModel.PinterestLink(),
      twitter: ConfigurationPlatformModel.TwitterLink(),
      vimeo: ConfigurationPlatformModel.VimeoLink(),
      youtube: ConfigurationPlatformModel.YoutubeLink(),
    });
  }

  /** @returns {SplashImage} */
  static SplashImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
    });
  }

  /** @returns {StoreByBrandsRequest} */
  static StoreByBrandsRequest() {
    return Joi.object({
      brands: Joi.number().required(),
      company_id: Joi.number(),
      search_text: Joi.string().allow(""),
    });
  }

  /** @returns {StoreByBrandsResponse} */
  static StoreByBrandsResponse() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPlatformModel.BrandStoreInfo()),
      page: ConfigurationPlatformModel.Page(),
    });
  }

  /** @returns {StoreCriteriaRule} */
  static StoreCriteriaRule() {
    return Joi.object({
      brands: Joi.array().items(Joi.number()),
      companies: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {StoreLatLong} */
  static StoreLatLong() {
    return Joi.object({
      coordinates: Joi.array().items(Joi.number()),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {StorePriority} */
  static StorePriority() {
    return Joi.object({
      enabled: Joi.boolean(),
      storetype_order: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {StorePriorityRule} */
  static StorePriorityRule() {
    return Joi.object({
      enabled: Joi.boolean(),
      storetype_order: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {StoresResponse} */
  static StoresResponse() {
    return Joi.object({
      items: ConfigurationPlatformModel.AppInventoryStores(),
      page: ConfigurationPlatformModel.Page(),
    });
  }

  /** @returns {StoreValidator} */
  static StoreValidator() {
    return Joi.object({
      browser_script: Joi.string().allow(""),
      json_schema: Joi.array().items(ConfigurationPlatformModel.JsonSchema()),
    });
  }

  /** @returns {SuccessMessageResponse} */
  static SuccessMessageResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {TokenResponse} */
  static TokenResponse() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      tokens: ConfigurationPlatformModel.Tokens(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {Tokens} */
  static Tokens() {
    return Joi.object({
      firebase: ConfigurationPlatformModel.Firebase(),
      freshchat: ConfigurationPlatformModel.Freshchat(),
      fynd_rewards: ConfigurationPlatformModel.FyndRewards(),
      google_map: ConfigurationPlatformModel.GoogleMap(),
      gtm: ConfigurationPlatformModel.Gtm(),
      moengage: ConfigurationPlatformModel.Moengage(),
      safetynet: ConfigurationPlatformModel.Safetynet(),
      segment: ConfigurationPlatformModel.Segment(),
    });
  }

  /** @returns {TwitterLink} */
  static TwitterLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateDomain} */
  static UpdateDomain() {
    return Joi.object({
      _id: Joi.string().allow(""),
      is_primary: Joi.boolean(),
      is_shortlink: Joi.boolean(),
      name: Joi.string().allow(""),
      verified: Joi.boolean(),
    });
  }

  /** @returns {UpdateDomainTypeRequest} */
  static UpdateDomainTypeRequest() {
    return Joi.object({
      action: Joi.string().allow(""),
      domain: ConfigurationPlatformModel.UpdateDomain(),
    });
  }

  /** @returns {UpdateIntegrationLevelRequest} */
  static UpdateIntegrationLevelRequest() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPlatformModel.IntegrationLevel()),
    });
  }

  /** @returns {ValidationFailedResponse} */
  static ValidationFailedResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Validators} */
  static Validators() {
    return Joi.object({
      company: ConfigurationPlatformModel.CompanyValidator(),
      inventory: ConfigurationPlatformModel.InventoryValidator(),
      order: ConfigurationPlatformModel.OrderValidator(),
      store: ConfigurationPlatformModel.StoreValidator(),
    });
  }

  /** @returns {VimeoLink} */
  static VimeoLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {YoutubeLink} */
  static YoutubeLink() {
    return Joi.object({
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
}
module.exports = ConfigurationPlatformModel;
