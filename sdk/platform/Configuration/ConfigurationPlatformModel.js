const Joi = require("joi");

/**
 * @typedef CurrencyExchangeResponseV2
 * @property {string} base - The 3-letter ISO 4217 code representing the base currency.
 * @property {string} base_currency_name - The name of the base currency.
 * @property {number} ttl_seconds - Time in seconds for which the exchange rates
 *   are valid.
 * @property {CurrencyExchangeItem[]} items - List of exchange rates and currency details.
 * @property {number} total - Total number of currency exchange items.
 */

/**
 * @typedef CurrencyExchangeItem
 * @property {string} currency_code - 3-letter ISO 4217 exchange currency code.
 * @property {string} name - Name of the exchange currency
 * @property {number} rate - Exchange rate of the currency with respect to the
 *   base currency.
 * @property {string} country_code - ISO 3166 country code.
 * @property {string} country_name - Name of the country using this currency.
 * @property {string} subunit - The name of the subunit for the currency.
 * @property {number} decimal_digits - Number of decimal digits the currency supports.
 * @property {string} symbol - The symbol of the currency.
 */

/**
 * @typedef ApplicationInventory
 * @property {SearchConfig} [search]
 * @property {AppInventoryConfig} [inventory]
 * @property {AuthenticationConfig} [authentication]
 * @property {ArticleAssignmentConfig} [article_assignment]
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {AppOrderConfig} [order]
 * @property {AppLogisticsConfig} [logistics]
 * @property {PiiMasking} [pii_masking]
 * @property {string[]} [tags]
 * @property {number} [__v]
 * @property {string} [business] - Indicates the business type for sales channel
 *   e.g. retail or wholesale
 * @property {boolean} [comms_enabled] - Shows communication(comms) is enabled
 *   or not for sales channel inventory
 * @property {CommunicationConfig} [communication]
 * @property {string[]} [platforms]
 * @property {string} [_id] - The unique identifier of the sales channel inventory
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {string} [app] - Current sales channel ID
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel
 *   inventory creation
 * @property {string} [modified_at] - ISO 8601 timestamp of sales channel
 *   inventory updation
 * @property {string} [modified_by] - User ID of the person who made the latest
 *   changes in the sales channel inventory
 */

/**
 * @typedef PiiMasking
 * @property {boolean} [enabled]
 */

/**
 * @typedef FstIdentification
 * @property {boolean} [enabled] - Indicates whether search query interpretation
 *   is enabled for the application.
 */

/**
 * @typedef QuerySuggestions
 * @property {boolean} [enabled] - Indicates whether to enable or disable query
 *   suggestions powered by the GPT model using the current live catalog within
 *   the application.
 * @property {number} [max_limit] - Specifies the maximum number of query
 *   suggestions that can be returned.
 */

/**
 * @typedef SearchConfig
 * @property {FstIdentification} [fst_identification]
 * @property {QuerySuggestions} [query_suggestions]
 */

/**
 * @typedef AppInventoryConfig
 * @property {DeliveryStrategy} [delivery_strategy]
 * @property {InventoryBrand} [brand]
 * @property {InventoryStore} [store]
 * @property {InventoryCategory} [category]
 * @property {InventoryPrice} [price]
 * @property {InventoryDiscount} [discount]
 * @property {boolean} [out_of_stock] - Indicates whether out of stock products
 *   are allowed to show up on the website
 * @property {boolean} [only_verified_products] - Show only verified products
 *   (the ones whose data has been verified by the admin)
 * @property {boolean} [franchise_enabled] - Allow other businesses (companies)
 *   to consume the current sales channel's inventory and sell products
 * @property {Object[]} [exclude_category] - List of excluded brands category
 * @property {string[]} [image]
 * @property {Object[]} [company_store] - List of selling locations whose
 *   inventory is available to the sales channel for displaying on the website
 * @property {number} [company_id]
 */

/**
 * @typedef InventoryBrand
 * @property {string} [criteria] - All brands or specific (explicit) brands to
 *   be shown on the website
 * @property {number[]} [brands] - List of brands
 */

/**
 * @typedef InventoryStore
 * @property {string} [criteria] - All stores or specific (explicit) stores to
 *   be shown on the website
 * @property {Object[]} [stores] - List of stores
 * @property {AppStoreRules[]} [rules] - Rules to show which brands or companies
 *   products should be listed on sales channel.
 */

/**
 * @typedef AppStoreRules
 * @property {number[]} [companies] - List of companies whose inventory is
 *   available to the sales channel for displaying on the website
 * @property {number[]} [brands] - List of brands whose products will be shown
 *   on the website
 */

/**
 * @typedef InventoryCategory
 * @property {string} [criteria]
 * @property {Object[]} [categories] - List of categories whose products will be
 *   shown on the website
 */

/**
 * @typedef InventoryPrice
 * @property {number} [min] - Minimum inventory price
 * @property {number} [max] - Maximum inventory price
 */

/**
 * @typedef InventoryDiscount
 * @property {number} [min] - Minimum inventory discount
 * @property {number} [max] - Maximum inventory discount
 */

/**
 * @typedef AuthenticationConfig
 * @property {boolean} [required] - Shows sales channel inventory authentication
 *   is required or not
 * @property {string} [provider] - Shows inventory authentication provider
 */

/**
 * @typedef ArticleAssignmentConfig
 * @property {ArticleAssignmentRules} [rules]
 * @property {boolean} [post_order_reassignment] - Allow post order reassigment of article
 * @property {number[]} [enforced_stores]
 */

/**
 * @typedef ArticleAssignmentRules
 * @property {StorePriority} [store_priority]
 */

/**
 * @typedef StorePriority
 * @property {boolean} [enabled] - Shows store priority is enabled or disabled
 *   for assignment of article
 * @property {Object[]} [storetype_order] - List of store types for article
 *   assignment e.g. warehouse, mall, highstreet
 */

/**
 * @typedef AppCartConfig
 * @property {DeliveryCharges} [delivery_charges]
 * @property {InternationalDeliveryCharges} [international_delivery_charges]
 * @property {boolean} [enabled] - Shows whether cart configuration is enabled or not
 * @property {number} [max_cart_items] - Maximum number of items that can be
 *   added to cart by the customer
 * @property {number} [min_cart_value] - Minimum cart value below which customer
 *   cannot place an order
 * @property {boolean} [bulk_coupons] - Allow creation of bulk coupons
 * @property {boolean} [revenue_engine_coupon] - Allow coupon apply and credits
 *   together. Default value is false.
 * @property {PanCardConfig} [pan_card]
 */

/**
 * @typedef InternationalDeliveryCharges
 * @property {boolean} [enabled] - Allow international delivery charges
 * @property {Charges[]} [charges]
 */

/**
 * @typedef DeliveryCharges
 * @property {boolean} [enabled] - Allow delivery charges
 * @property {Charges[]} [charges] - Holds values for delivery charges.
 */

/**
 * @typedef Charges
 * @property {number} [threshold] - The order value below which an extra
 *   delivery fee will be applicable
 * @property {number} [charges] - Delivery amount to be charged when order value
 *   is below the defined threshold value
 */

/**
 * @typedef AppPaymentConfig
 * @property {CallbackUrl} [callback_url]
 * @property {Methods} [methods]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [mode_of_payment] - Mode of payment for sales channel
 *   payment, e.g. 'ECOMM'.
 * @property {string} [source] - Source of the payment mode, e.g. 'ECOMM'.
 *   Default value is FYND.
 * @property {boolean} [enabled] - Allow payment option within sales channel
 * @property {number} [cod_amount_limit] - Maximum amount allowed for COD order.
 *   Beyond this, customer cannot opt for COD.
 * @property {number} [cod_charges] - Extra charge applicable for COD orders
 * @property {boolean} [anonymous_cod] - Allow cash on delivery for anonymous user
 * @property {number} [user_cod_limit]
 */

/**
 * @typedef CallbackUrl
 * @property {string} [app] - Payment callback url for app
 * @property {string} [web] - Payment callback url for web
 */

/**
 * @typedef Methods
 * @property {PaymentModeConfig} [pl]
 * @property {PaymentModeConfig} [card]
 * @property {PaymentModeConfig} [nb]
 * @property {PaymentModeConfig} [wl]
 * @property {PaymentModeConfig} [ps]
 * @property {PaymentModeConfig} [upi]
 * @property {PaymentModeConfig} [qr]
 * @property {PaymentModeConfig} [cod]
 * @property {PaymentModeConfig} [pp]
 * @property {PaymentModeConfig} [jp]
 * @property {PaymentModeConfig} [pac]
 * @property {PaymentModeConfig} [fc]
 * @property {PaymentModeConfig} [jiopp]
 * @property {PaymentModeConfig} [stripepg]
 * @property {PaymentModeConfig} [juspaypg]
 * @property {PaymentModeConfig} [payubizpg]
 * @property {PaymentModeConfig} [payumoneypg]
 * @property {PaymentModeConfig} [rupifipg]
 * @property {PaymentModeConfig} [simpl]
 */

/**
 * @typedef PaymentModeConfig
 * @property {boolean} [enabled] - Shows if a given payment method is enabled or
 *   not, e.g. if 'nb' is enabled, customer can use NetBanking for payment.
 */

/**
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled] - Shows whether payment mode is restricted to a
 *   specific option, e.g. 'HDFC Netbanking'
 * @property {string} [default_options] - Shows default payment method, e.g. COD
 * @property {string} [payment_identifier] - Payment method chosen from default
 *   options, e.g. COD
 */

/**
 * @typedef AppOrderConfig
 * @property {boolean} [enabled] - Allow orders to be accepted from the sales channel
 * @property {boolean} [force_reassignment] - Allow force reassigning of an order
 * @property {string} [message] - Reason for reassigning an order
 * @property {ProcessingSchedule} [processing_schedule]
 */

/**
 * @typedef ProcessingSchedule
 * @property {boolean} [is_scheduled] - Indicates whether the order processing
 *   is scheduled for future.
 * @property {StartAfter} [start_after]
 */

/**
 * @typedef StartAfter
 * @property {number} [days] - Number of days to wait before starting the process.
 * @property {number} [hours] - Number of hours to wait before starting the process.
 * @property {number} [minutes] - Number of minutes to wait before starting the process.
 */

/**
 * @typedef AppLogisticsConfig
 * @property {boolean} [logistics_by_seller]
 * @property {boolean} [serviceability_check]
 * @property {boolean} [same_day_delivery]
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef LoyaltyPointsConfig
 * @property {boolean} [enabled] - Shows loyalty points is enabled or not enabled
 * @property {boolean} [auto_apply] - Allow auto apply of loyalty points
 */

/**
 * @typedef AppInventoryPartialUpdate
 * @property {SearchConfig} [search]
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {boolean} [comms_enabled] - Shows communication (comms) is enabled
 *   or not for sales channel partial inventory update
 * @property {CommunicationConfig} [communication]
 */

/**
 * @typedef BrandCompanyInfo
 * @property {string} [company_name] - Name of the company dealing with the brand
 * @property {number} [company_id] - Numeric ID allotted to a business account
 */

/**
 * @typedef CompanyByBrandsRequestSchema
 * @property {number} brands - Brand UID
 * @property {string} [search_text] - A search field for finding a company by its name
 */

/**
 * @typedef CompanyByBrandsResponseSchema
 * @property {BrandCompanyInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef StoreByBrandsRequestSchema
 * @property {number} [company_id] - Current company ID for current company
 *   stores only. Don't send in case cross-selling (franchise) is enabled.
 * @property {number} brands - Brand UID
 * @property {string} [search_text] - Search store by its name or store code
 */

/**
 * @typedef StoreByBrandsResponseSchema
 * @property {BrandStoreInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BrandStoreInfo
 * @property {string} [store_name] - Name of the selling location (store)
 * @property {number} [store_id] - The unique identifier of the selling location (store)
 * @property {string} [store_type] - Store type of the brand like warehouse,
 *   high_street, mall
 * @property {string} [store_code] - Store code of the brand. It is unique for
 *   every brand store.
 * @property {OptedStoreAddress} [store_address]
 * @property {OptedCompany} [company]
 */

/**
 * @typedef CompanyBrandInfo
 * @property {string} [name] - Brand name, e.g. Raymonds
 * @property {number} [value] - Brand UID for identifying the brand
 * @property {string} [brand_logo_url] - Hosted URL of the brand's logo
 * @property {string} [brand_banner_url] - Hosted URL of the brand's banner image
 * @property {string} [brand_banner_portrait_url] - Hosted URL of the brand's
 *   portrait banner
 */

/**
 * @typedef BrandsByCompanyResponseSchema
 * @property {CompanyBrandInfo[]} [brands]
 */

/**
 * @typedef ValidationFailedResponseSchema
 * @property {string} [message] - Response message for failed validation
 */

/**
 * @typedef NotFound
 * @property {string} [message] - Response message for not found
 * @property {boolean} [success] - Flag for required not successfull.
 */

/**
 * @typedef CommunicationConfig
 * @property {CommsConfig} [email]
 * @property {CommsConfig} [sms]
 * @property {CommsConfig} [voice]
 */

/**
 * @typedef CommsConfig
 * @property {boolean} [enabled] - Check current communication channel is enabled
 */

/**
 * @typedef PanCardConfig
 * @property {boolean} [enabled] - If pan card accepting is enabled on cart
 * @property {number} [cod_threshold_amount] - On which COD order amount pan
 *   card number is expected from customer for order
 * @property {number} [online_threshold_amount] - On which online payment order
 *   amount pan card number is expected from customer for order
 */

/**
 * @typedef CreateApplicationRequestSchema
 * @property {App} [app]
 * @property {ApplicationInventory} [configuration]
 * @property {AppDomain} [domain]
 */

/**
 * @typedef CreateAppResponseSchema
 * @property {Application} [app]
 * @property {ApplicationInventory} [configuration]
 */

/**
 * @typedef ApplicationsResponseSchema
 * @property {Application[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef MobileAppConfiguration
 * @property {boolean} [is_active] - Indicates the availability of the mobile build
 * @property {string} [_id] - The unique identifier for mobile application configuration
 * @property {string} [app_name] - Name of the mobile app
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {string} [application] - Application ID of the current sales channel
 * @property {string} [platform_type] - Device platform for which the mobile app
 *   was built, e.g. android, ios.
 * @property {string} [created_at] - ISO 8601 timestamp of application
 *   configuration creation
 * @property {string} [modified_at] - ISO 8601 timestamp of last known
 *   modifications to the app build
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {string} [package_name] - Shows bundle identifier if device
 *   platform is iOS, and directory of the app if device platform is Android
 */

/**
 * @typedef LandingImage
 * @property {string} [aspect_ratio] - Width-to-height ratio of landing image
 * @property {string} [secure_url] - URL where the landing image is hosted
 */

/**
 * @typedef SplashImage
 * @property {string} [aspect_ratio] - Width-to-height ratio of splash image
 * @property {string} [secure_url] - URL where the splash image is hosted
 */

/**
 * @typedef MobileAppConfigRequestSchema
 * @property {string} [app_name] - Name of the mobile app
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {boolean} [is_active] - Shows update in mobile app config is active or not
 */

/**
 * @typedef BuildVersionHistory
 * @property {BuildVersion[]} [versions]
 * @property {string} [latest_available_version_name] - Latest version number of
 *   the mobile build, in dot-decimal notation
 */

/**
 * @typedef BuildVersion
 * @property {string} [_id] - Primary Identifier of the build version.
 * @property {string} [application] - Application ID of the sales channel
 * @property {string} [platform_type] - Device platform for which the mobile app
 *   was built, e.g. android, ios.
 * @property {string} [build_status] - Current progress of the mobile build,
 *   e.g. pending, cancelled, failed, success
 * @property {string} [version_name] - Version number of the mobile build, in
 *   dot-decimal notation
 * @property {number} [version_code] - A positive integer used as an internal
 *   version number
 * @property {LandingImage} [download_url]
 * @property {string} [created_at] - ISO 8601 timestamp of app creation
 * @property {string} [modified_at] - ISO 8601 timestamp of last known
 *   modifications to the app build
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 */

/**
 * @typedef AppSupportedCurrency
 * @property {string} [_id] - The unique identifier of the currency
 *   configuration supported by the application
 * @property {string[]} [supported_currency]
 * @property {string} [application] - Alphanumeric ID allotted to an application
 *   (sales channel website) created within a business account.
 * @property {DefaultCurrency} [default_currency]
 * @property {string} [created_at] - ISO 8601 timestamp when currency was added
 *   in the list of currencies supported by the sales channel
 * @property {string} [modified_at] - ISO 8601 timestamp when currency was
 *   updated in the list of currencies supported by the sales channel
 */

/**
 * @typedef DefaultCurrency
 * @property {string} [ref] - The unique identifier of the default currency
 * @property {string} [code] - 3-character code of the default currency, e.g.
 *   INR, EUR, USD
 */

/**
 * @typedef DomainAdd
 * @property {string} [name] - Full domain name, e.g. uniket.hostx0.de
 * @property {string} [_id] - The unique identifier of the domain
 * @property {boolean} [verified] - Domain is verified or not (indicates if A
 *   records and TXT records are correct)
 * @property {boolean} [is_primary] - Domain is primary or not (indicates if the
 *   domain has been made the main URL of the sales channel)
 * @property {boolean} [is_shortlink] - Indicates if the domain is a short link
 *   domain (short URL e.g. bitly)
 * @property {string} [message] - Shows the message shown after adding a domain
 *   successfully, e.g. 'New domain added successfully'
 * @property {string[]} [txt_records]
 */

/**
 * @typedef DomainAddRequestSchema
 * @property {DomainAdd} [domain]
 */

/**
 * @typedef Domain
 * @property {string} [name] - Full domain name, e.g. newton.com
 * @property {string} [_id] - The unique identifier of the sales channel domain
 * @property {boolean} [verified] - Domain is verified or not. TXT and A records
 *   should propagate correctly.
 * @property {boolean} [is_primary] - Domain is primary or not. Primary domain
 *   is the default/main domain.
 * @property {boolean} [is_shortlink] - Shortlink is present or not for the domain
 * @property {boolean} [is_predefined] - Domain is hosting domain or not.
 * @property {string} [message]
 */

/**
 * @typedef DomainsResponseSchema
 * @property {Domain[]} [domains]
 */

/**
 * @typedef UpdateDomain
 * @property {string} [name] - Full domain name, e.g. zenz.com
 * @property {string} [_id] - The unique identifier of the domain
 * @property {boolean} [verified] - Domain is verified or not (indicates if A
 *   records and TXT records are correct)
 * @property {boolean} [is_primary] - Domain is primary or not (indicates if the
 *   domain has been made the main URL of the sales channel)
 * @property {boolean} [is_shortlink] - Indicates if the domain is a short link
 *   domain (short URL e.g. bit.ly)
 */

/**
 * @typedef UpdateDomainTypeRequestSchema
 * @property {UpdateDomain} [domain]
 * @property {string} [action] - Shows domain is made primary domain for the
 *   sales channel or shorlink is created for the sales channel domain
 */

/**
 * @typedef DomainStatusRequestSchema
 * @property {string} [domain_url] - URL of the domain, e.g. uniket.hostx0.de
 */

/**
 * @typedef DomainStatus
 * @property {string} [display] - Shows TXT record and A records for the domain
 * @property {boolean} [status] - Shows whether TXT record or A records for the
 *   domain are correctly propagating via DNS servers
 */

/**
 * @typedef DomainStatusResponseSchema
 * @property {boolean} [connected] - Check if domain is live and mapped to
 *   appropriate IP of Fynd Servers
 * @property {DomainStatus[]} [status]
 */

/**
 * @typedef DomainSuggestionsRequestSchema
 * @property {string} [domain_url] - Domain url
 * @property {boolean} [custom_domain] - Get suggestions for custom domains or
 *   Fynd domains
 */

/**
 * @typedef DomainSuggestion
 * @property {string} name - URL of the custom domain
 * @property {boolean} [unsupported] - Shows whether TLD domain is supported or not
 * @property {boolean} is_available - Shows whether the custom domain of your
 *   choice is available or not available
 * @property {number} [price] - Cost of purchasing a custom domain. Not present
 *   for Fynd domains.
 * @property {string} [currency] - Custom domain currency. Not present for Fynd domains.
 */

/**
 * @typedef DomainSuggestionsResponseSchema
 * @property {DomainSuggestion[]} [domains] - Domain URL
 */

/**
 * @typedef SuccessMessageResponseSchema
 * @property {boolean} [success] - Shows whether domain was deleted successfully
 * @property {string} [message] - Success message shown to the user (in a string format)
 */

/**
 * @typedef App
 * @property {string} [company_id] - Numeric ID allotted to a business account
 *   on Fynd Platform.
 * @property {string} [channel_type] - It indicates different channel types like
 *   store, website-and-mobile-apps. Default value is store
 * @property {ApplicationAuth} [auth]
 * @property {string} [name] - User-friendly name for sales channel, e.g. Zenz Fashion
 * @property {string} [desc] - Detailed description about the sales channel
 */

/**
 * @typedef AppDomain
 * @property {string} [name] - Domain URL of current sales channel, e.g. zenz.com
 */

/**
 * @typedef CompaniesResponseSchema
 * @property {AppInventoryCompanies[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AppInventoryCompanies
 * @property {number} [uid] - UID of the company, e.g. 108
 * @property {string} [name] - Name of the company, e.g. Newton Traders
 * @property {string} [company_type] - Indicates the type of the company, e.g.
 *   franchisee, distributor, etc.
 */

/**
 * @typedef StoresResponseSchema
 * @property {AppInventoryStores[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AppInventoryStores
 * @property {string} [_id] - The unique identifier of the store in the sales
 *   channel inventory
 * @property {string} [modified_on] - ISO 8601 timestamp of last known updation
 *   to the stores in sales channel inventory
 * @property {number} [uid] - Sales channel inventory store UID
 * @property {string} [name] - Name of the store in the sales channel inventory,
 *   e.g. Reebok Mumbai
 * @property {string} [display_name] - Display name of the sales channel
 *   inventory store (can be different than the actual store name), e.g. Reebok MUM
 * @property {string} [store_type] - Store type of the sales channel inventory
 *   store, such as mall, warehouse, high_street
 * @property {string} [store_code] - Store code of the enabled inventory store,
 *   e.g. HS-c9bac. It is unique for every store.
 * @property {number} [company_id] - Company ID of the selling location (store)
 *   added to the sales channel's inventory
 * @property {Object} [address]
 * @property {Object} [integration_type]
 */

/**
 * @typedef FilterOrderingStoreRequestSchema
 * @property {boolean} [all_stores] - Allow all stores from the ordering stores
 * @property {number[]} [deployed_stores]
 * @property {string} [q] - Store code or name of the ordering store
 */

/**
 * @typedef DeploymentMeta
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores] - Allow all stores from the ordering store
 * @property {boolean} [enabled] - Allow ordering stores for current sales channel
 * @property {string} [type] - Permitted values are 'hard' and 'soft'. For hard
 *   type delivery, store selection is compulsory. For soft type, delivery store
 *   selection is optional.
 * @property {string} [_id] - The unique identifier of the ordering stores
 * @property {string} [app] - Alphanumeric ID allotted to an application (sales
 *   channel website) created within a business account
 * @property {number} [__v]
 */

/**
 * @typedef OrderingStoreConfig
 * @property {DeploymentMeta} [deployment_meta]
 */

/**
 * @typedef OrderingStoreSelectRequestSchema
 * @property {OrderingStoreSelect} ordering_store
 */

/**
 * @typedef OrderingStoreSelect
 * @property {number} uid - Ordering store unique uid. It is required.
 */

/**
 * @typedef OtherSellerCompany
 * @property {number} [uid] - Uid of the seller company
 * @property {string} [name] - Name of the seller company
 */

/**
 * @typedef OtherSellerApplication
 * @property {string} [name] - Name of the other seller's sales channel
 * @property {string} [description] - Basic details about the other seller's sales channel
 * @property {string} [_id] - The unique identifier of the other seller's sales channel
 * @property {string} [domain] - Domain URL of the other seller's sales channel
 * @property {OtherSellerCompany} [company]
 * @property {string} [opt_type] - Inventory opted by the other seller's sales
 *   channel. It can be the current company or stores in the current company.
 */

/**
 * @typedef OtherSellerApplications
 * @property {OtherSellerApplication[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OptedApplicationResponseSchema
 * @property {string} [name] - Name of the other seller's sales channel
 * @property {string} [description] - Basic details about the other seller's sales channel
 * @property {string} [_id] - The unique identifier of the other seller's sales channel
 * @property {string} [domain] - Domain URL of the other seller's sales channel
 * @property {OptedCompany} [company]
 * @property {OptedInventory} [opted_inventory]
 * @property {OptOutInventory} [opt_out_inventory]
 */

/**
 * @typedef OptedCompany
 * @property {number} [uid] - Company UID opted by the other seller's sales
 *   channel in its inventory. It has unique value for the company.
 * @property {string} [name] - Name of the company opted by the other seller's
 *   sales channel in its inventory
 * @property {number} [id] - The unique identifier of the opted inventory company
 */

/**
 * @typedef OptedInventory
 * @property {OptType} [opt_type]
 * @property {Object[]} [items]
 */

/**
 * @typedef OptType
 * @property {string} [key] - Opted type of inventory store. It can be store or company.
 * @property {string} [display] - Display text of opted type for inventory store
 */

/**
 * @typedef OptedStore
 * @property {string} [name] - Name of the inventory store opted by other
 *   seller's application
 * @property {string} [store_code] - Store code of the opted inventory store. It
 *   is unique for every store.
 * @property {string} [_id] - The unique identifier of the opted inventory store
 * @property {string} [modified_on] - ISO 8601 timestamp of opted inventory store creation
 * @property {number} [uid] - UID of opted inventory store
 * @property {OptedStoreAddress} [address]
 * @property {string} [display_name] - Display name of the opted inventory store
 * @property {string} [store_type] - Store type of the opted inventory store
 *   like warehouse, high_street, mall.
 * @property {number} [company_id] - Company ID of the opted inventory store
 */

/**
 * @typedef OptOutInventory
 * @property {number[]} store - List of selling locations (stores) opted out
 *   from the inventory of other seller's application
 * @property {number[]} company - List of companies opted out from the inventory
 *   of other seller's application
 */

/**
 * @typedef TokenResponseSchema
 * @property {Tokens} [tokens]
 * @property {string} [_id] - The unique identifier of the token
 * @property {string} [application] - Alphanumeric ID allotted to the current
 *   application created within the current business account
 * @property {string} [created_at] - ISO 8601 timestamp of token creation
 * @property {string} [modified_at] - ISO 8601 timestamp of token updation
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 */

/**
 * @typedef Tokens
 * @property {Firebase} [firebase]
 * @property {Moengage} [moengage]
 * @property {Segment} [segment]
 * @property {Gtm} [gtm]
 * @property {Freshchat} [freshchat]
 * @property {Safetynet} [safetynet]
 * @property {FyndRewards} [fynd_rewards]
 * @property {GoogleMap} [google_map]
 */

/**
 * @typedef Firebase
 * @property {Credentials} [credentials]
 * @property {boolean} [enabled] - Shows whether Firebase integration is enabled
 *   or disabled for the sales channel
 */

/**
 * @typedef Credentials
 * @property {Ios} [ios]
 * @property {Android} [android]
 * @property {string} [project_id] - Project ID for Firebase integration.
 *   Project ID is a unique identifier for a project and is used only within the console.
 * @property {string} [gcm_sender_id] - Google Cloud Manager's Sender ID for
 *   Firebase. It is a unique numerical value which is created when you
 *   configure your project in the Google Developers Console/Google Cloud Console.
 * @property {string} [application_id] - Alphanumeric ID allotted to the current
 *   application created within the current business account
 * @property {string} [api_key] - An API key is a unique string that's used to
 *   route requests to your Firebase project when interacting with Firebase.
 */

/**
 * @typedef Ios
 * @property {string} [application_id] - Alphanumeric ID allotted to a sales
 *   channel application created within a business account
 * @property {string} [api_key] - Firebase secret credential API key for IOS
 */

/**
 * @typedef Android
 * @property {string} [application_id] - Alphanumeric ID allotted to a sales
 *   channel application created within a business account
 * @property {string} [api_key] - Firebase secret credential API key for Android
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
 * @typedef FyndRewards
 * @property {FyndRewardsCredentials} [credentials]
 */

/**
 * @typedef FyndRewardsCredentials
 * @property {string} [public_key] - Public key for integrating with Fynd rewards.
 * @property {string} [private_key] - Public key for integrating with Fynd rewards.
 */

/**
 * @typedef GoogleMap
 * @property {boolean} [enabled] - Shows whether Google map integration is enabled or not.
 * @property {GoogleMapCredentials} [credentials]
 */

/**
 * @typedef GoogleMapCredentials
 * @property {string} [api_key] - Secret API key for Google Maps. A unique
 *   identifier that authenticates requests made to Google Maps API.
 */

/**
 * @typedef RewardPointsConfig
 * @property {Credit} [credit]
 * @property {Debit} [debit]
 */

/**
 * @typedef Credit
 * @property {boolean} [enabled] - Shows whether reward points should be credited
 */

/**
 * @typedef Debit
 * @property {boolean} [enabled] - Shows whether reward points are available for debit
 * @property {boolean} [auto_apply] - Allow automatic debit of reward points
 * @property {string} [strategy_channel] - Strategy channel for debiting reward points
 */

/**
 * @typedef ProductDetailFeature
 * @property {string[]} [similar] - Configuration to show similar products,
 *   other products from same seller, other products in same category, other
 *   products in same price range, etc.
 * @property {boolean} [seller_selection] - Shows whether the customers can
 *   choose the seller on PDP
 * @property {boolean} [update_product_meta] - Allow user to update product
 *   meta. Default value is true.
 * @property {boolean} [request_product] - Indicates whether customers can
 *   request for a product. Default value is false.
 */

/**
 * @typedef LaunchPage
 * @property {string} [page_type] - Type of the launch page
 * @property {Object} [params] - Launch page params. It can be nullable.
 * @property {Object} [query] - Query related to launch page. It can be nullable.
 */

/**
 * @typedef LandingPageFeature
 * @property {LaunchPage} [launch_page]
 * @property {boolean} [continue_as_guest] - Shows whether a guest can checkout
 *   from cart without logging in
 * @property {string} [login_btn_text] - Shows the text displayed over the login button
 * @property {boolean} [show_domain_textbox] - Shows whether a textbox for
 *   entering domain is available
 * @property {boolean} [show_register_btn] - Shows whether register button is
 *   available in the login/landing page
 */

/**
 * @typedef ListingPageFeature
 * @property {string} [sort_on]
 */

/**
 * @typedef RegistrationPageFeature
 * @property {boolean} [ask_store_address] - Shows whether a form to collect the
 *   address of the store, should be displayed upon visiting the website
 */

/**
 * @typedef BuyboxFeature
 * @property {boolean} [show_name] - Allow users to see seller/stores name on
 *   PDP (product detail page).
 * @property {boolean} [enable_selection] - Allow selection of sellers/stores on
 *   PDP (product detail page).
 * @property {boolean} [is_seller_buybox_enabled] - Toggle buybox listing
 *   between sellers and stores. True indicates seller listing, while False
 *   indicates store listing.
 */

/**
 * @typedef DeliveryStrategy
 * @property {string} [value] - Indicates the delivery strategy value.
 */

/**
 * @typedef FulfillmentOption
 * @property {number} [count] - Total count of available fulfillment options
 *   configured for a specific application.
 */

/**
 * @typedef AppFeature
 * @property {ProductDetailFeature} [product_detail]
 * @property {LandingPageFeature} [landing_page]
 * @property {RegistrationPageFeature} [registration_page]
 * @property {HomePageFeature} [home_page]
 * @property {CommonFeature} [common]
 * @property {CartFeature} [cart]
 * @property {QrFeature} [qr]
 * @property {PcrFeature} [pcr]
 * @property {OrderFeature} [order]
 * @property {BuyboxFeature} [buybox]
 * @property {DeliveryStrategy} [delivery_strategy]
 * @property {FulfillmentOption} [fulfillment_option]
 * @property {string} [_id] - The unique identifier for the sales channel features
 * @property {string} [app] - Application ID of the sales channel
 * @property {string} [created_at] - ISO 8601 timestamp showing the date when
 *   the features were configured
 * @property {string} [modified_at] - ISO 8601 timestamp of last known
 *   modifications to the sales channel feature configuration
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero
 */

/**
 * @typedef HomePageFeature
 * @property {boolean} [order_processing] - Shows whether order processing is
 *   enabled or not enabled
 */

/**
 * @typedef CommonFeature
 * @property {CommunicationOptinDialogFeature} [communication_optin_dialog]
 * @property {DeploymentStoreSelectionFeature} [deployment_store_selection]
 * @property {ListingPriceFeature} [listing_price]
 * @property {ListingPageFeature} [listing_page]
 * @property {CurrencyFeature} [currency]
 * @property {RevenueEngineFeature} [revenue_engine]
 * @property {FeedbackFeature} [feedback]
 * @property {CompareProductsFeature} [compare_products]
 * @property {RewardPointsConfig} [reward_points]
 * @property {InternationalShipping} [international_shipping]
 */

/**
 * @typedef InternationalShipping
 * @property {boolean} [enabled] - International shipping is enabled or not.
 */

/**
 * @typedef CommunicationOptinDialogFeature
 * @property {boolean} [visibility] - Shows whether WhatsApp communication is enabled
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
 * @typedef ListingPriceFeature
 * @property {string} [value] - Shows which price to display on PLP if one
 *   product has multiple prices (for each size), valid values are 'min', 'max',
 *   'range'. Default value is range.
 * @property {string} [sort] - Sorting of listing price with min or max value.
 *   Default value is min.
 */

/**
 * @typedef CurrencyFeature
 * @property {string[]} [value] - 3-letter currency code
 * @property {string} [type] - If 'explicit', currency formatting shows currency
 *   code with price. For explicit or all currency selection.
 * @property {string} [default_currency] - 3-letter code of the default currency
 *   used in the application. Default vaule is 'INR'.
 */

/**
 * @typedef RevenueEngineFeature
 * @property {boolean} [enabled] - Enable revenue engine. Default value is false.
 */

/**
 * @typedef FeedbackFeature
 * @property {boolean} [enabled] - Shows whether customer feedback is enabled on
 *   PDP. Default value is false.
 */

/**
 * @typedef CompareProductsFeature
 * @property {boolean} [enabled] - Shows whether product comparison feature is
 *   enabled on PDP
 */

/**
 * @typedef CartFeature
 * @property {boolean} [gst_input] - Shows whether customer is allowed to enter
 *   GST on the cart page for claiming input credits
 * @property {boolean} [staff_selection] - Shows whether staff selection is
 *   enabled on cart page
 * @property {boolean} [placing_for_customer] - Shows whether the staff is
 *   placing order on behalf of customer. Default value is true.
 * @property {boolean} [google_map] - Allow adding of Google Maps. Default value is true.
 * @property {boolean} [revenue_engine_coupon] - Allow coupon apply and credits,
 *   together. Default value is false.
 */

/**
 * @typedef QrFeature
 * @property {boolean} [application] - Shows whether sharing of mobile app via
 *   QR code is allowed. Default value is false.
 * @property {boolean} [products] - Shows whether sharing product via QR code is
 *   allowed. Default value is false.
 * @property {boolean} [collections] - Shows whether sharing collection via QR
 *   code is allowed. Default value is false.
 */

/**
 * @typedef PcrFeature
 * @property {boolean} [staff_selection] - Allow staff selection. Default value is false.
 */

/**
 * @typedef OrderFeature
 * @property {boolean} [buy_again] - Allow buy again option for order. Default
 *   value is false.
 */

/**
 * @typedef AppFeatureRequestSchema
 * @property {AppFeature} [feature]
 */

/**
 * @typedef AppFeatureResponseSchema
 * @property {AppFeature} [feature]
 */

/**
 * @typedef Currency
 * @property {string} [_id] - The unique identifier of the current sales channel
 *   supported currency
 * @property {boolean} [is_active] - Shows currency is enabled or not in current
 *   sales channel
 * @property {string} [name] - Name of the currency, e.g Indian Rupee
 * @property {string} [code] - 3-character currency code, e.g. INR, USD, EUR.
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel support
 *   currency creation
 * @property {string} [modified_at] - ISO 8601 timestamp of sales channel
 *   support currency updation
 * @property {number} [decimal_digits] - Acceptable decimal limits for a given
 *   currency, e.g. 1.05$ means upto 2 decimal digits can be accepted as a valid
 *   value of a currency.
 * @property {string} [symbol] - Unique symbol for identifying the currency, e.g. ₹
 * @property {string} [country_name]
 * @property {string} [country_code]
 */

/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled] - Shows whether sales channel website URL is
 *   enabled or not
 * @property {string} [basepath] - Base path for the current sales channel website
 */

/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */

/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled] - Shows sales channel auth is enabled or not enabled.
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
 * @typedef ApplicationMeta
 * @property {string} [name] - Indicates to name of application meta
 * @property {string} [value] - Value related to application meta name
 */

/**
 * @typedef SecureUrl
 * @property {string} [secure_url] - Hosted URL of the image
 */

/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description] - It contains detailed information about the
 *   sales channel.
 * @property {string} [channel_type] - It indicates different channel types like
 *   store, website-and-mobile-apps. Default value is store
 * @property {number} [cache_ttl] - An integer value that specifies the number
 *   of seconds until the key expires
 * @property {boolean} [is_internal] - Indicates whether a sales channel is
 *   internal or not
 * @property {boolean} [is_active] - Indicates sales channel is active or not active
 * @property {string} [_id] - The unique identifier of the sales channel
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion
 * @property {string} [owner] - The unique identifier of owner who owns the application
 * @property {number} [company_id] - Numeric ID allotted to a business account
 *   where the sales channel exists
 * @property {string} [token] - Random generated fix length string for sales
 *   channel. It is required and auto-generated.
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel creation
 * @property {string} [modified_at] - ISO 8601 timestamp of sales channel updation
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type] - It shows application is live or in development mode.
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 * @property {string} [slug]
 * @property {string} [mode]
 * @property {string} [status]
 * @property {TokenSchema[]} [tokens]
 * @property {string} [secret]
 */

/**
 * @typedef ApplicationById
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description] - It contains detailed information about the
 *   sales channel.
 * @property {string} [channel_type] - It indicates different types of channels,
 *   such as store, website, and mobile apps, with 'store' being the default value.
 * @property {number} [cache_ttl] - An integer value that specifies the number
 *   of seconds until the key expires
 * @property {boolean} [is_internal] - Indicates whether a sales channel is
 *   internal or not
 * @property {boolean} [is_active] - Indicates sales channel is active or not active
 * @property {string} [_id] - The unique identifier of the sales channel
 * @property {string} [name] - Name of the sales channel, e.g. Zenz Fashion
 * @property {string} [owner] - The unique identifier of owner who owns the application
 * @property {number} [company_id] - Numeric ID allotted to a business account
 *   where the sales channel exists
 * @property {string} [token] - Random generated fix length string for sales
 *   channel. It is required and auto-generated.
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at] - ISO 8601 timestamp of sales channel creation
 * @property {string} [modified_at] - ISO 8601 timestamp of sales channel updation
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type] - It shows application is live or in development mode.
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 * @property {string} [slug]
 * @property {string} [mode]
 * @property {string} [status]
 * @property {TokenSchemaID[]} [tokens]
 * @property {string} [secret]
 */

/**
 * @typedef TokenSchemaID
 * @property {string} [token]
 * @property {string} [created_by]
 * @property {string} [created_at] - ISO 8601 timestamp of when token created
 */

/**
 * @typedef TokenSchema
 * @property {string} [token]
 * @property {Object} [created_by]
 * @property {string} [created_at] - ISO 8601 timestamp of when token created
 */

/**
 * @typedef InvalidPayloadRequestSchema
 * @property {string} [message] - Error message when request body payload is improper
 * @property {boolean} [success] - Flag for required not successfull.
 */

/**
 * @typedef Page
 * @property {number} [item_total] - The total number of all items across all pages.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [page_size] - The number of items per page.
 */

/**
 * @typedef ApplicationInformation
 * @property {InformationAddress} [address]
 * @property {InformationSupport} [support]
 * @property {SocialLinks} [social_links]
 * @property {Links[]} [links]
 * @property {string} [copyright_text] - Copyright statement usually seen at the
 *   site's footer
 * @property {string} [_id] - Unique identifier of the application information
 * @property {BusinessHighlights[]} [business_highlights]
 * @property {string} [application] - Alphanumeric ID allotted to a sales
 *   channel application created within a business account
 * @property {string} [created_at] - ISO 8601 timestamp of creation of the
 *   application information
 * @property {string} [modified_at] - ISO 8601 timestamp of updation of the
 *   application information
 * @property {number} [__v] - Version key for tracking revisions. Default value is zero.
 */

/**
 * @typedef InformationAddress
 * @property {InformationLoc} [loc]
 * @property {string[]} [address_line] - Contact address of the sales channel
 * @property {InformationPhone[]} [phone]
 * @property {string} [city] - Name of the city, e.g. Mumbai
 * @property {string} [country] - Name of the country, e.g. India
 * @property {number} [pincode] - 6-digit PIN Code of the city, e.g. 400001
 */

/**
 * @typedef InformationPhone
 * @property {string} [code] - Country code for contact number, e.g. +91 (for India)
 * @property {string} [number] - 10-digit mobile number
 */

/**
 * @typedef InformationLoc
 * @property {string} [type] - Country code for contact number, e.g. +91 (for India)
 * @property {number[]} [coordinates] - 10-digit mobile number
 */

/**
 * @typedef InformationSupport
 * @property {InformationSupportPhone[]} [phone]
 * @property {InformationSupportEmail[]} [email]
 * @property {string} [timing] - Working hours of support team, e.g. 9 AM to 9 PM
 */

/**
 * @typedef InformationSupportPhone
 * @property {string} [code] - Country code for contact number, e.g. +91 (for India)
 * @property {string} [number] - 10-digit mobile number
 * @property {string} [key]
 */

/**
 * @typedef InformationSupportEmail
 * @property {string} [value] - Value of email.
 * @property {string} [key]
 */

/**
 * @typedef SocialLinks
 * @property {FacebookLink} [facebook]
 * @property {InstagramLink} [instagram]
 * @property {TwitterLink} [twitter]
 * @property {PinterestLink} [pinterest]
 * @property {GooglePlusLink} [google_plus]
 * @property {YoutubeLink} [youtube]
 * @property {LinkedInLink} [linked_in]
 * @property {VimeoLink} [vimeo]
 * @property {BlogLink} [blog_link]
 */

/**
 * @typedef FacebookLink
 * @property {string} [title] - Name of the social media platform, e.g. Facebook
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's Facebook page
 */

/**
 * @typedef InstagramLink
 * @property {string} [title] - Name of the social media platform, e.g. Instagram
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's Instagram page
 */

/**
 * @typedef TwitterLink
 * @property {string} [title] - Name of the social media platform, e.g. Twitter
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's Twitter account
 */

/**
 * @typedef PinterestLink
 * @property {string} [title] - Name of the social media platform, e.g. Pinterest
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's Pinterest page
 */

/**
 * @typedef GooglePlusLink
 * @property {string} [title] - Name of the social media platform, e.g. Google+
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's Google+ account
 */

/**
 * @typedef YoutubeLink
 * @property {string} [title] - Name of the social media platform, e.g. YouTube
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's YouTube channel
 */

/**
 * @typedef LinkedInLink
 * @property {string} [title] - Name of the social media platform, e.g. LinkedIn
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's LinkedIn channel
 */

/**
 * @typedef VimeoLink
 * @property {string} [title] - Name of the video hosting platform, e.g. Vimeo
 * @property {string} [icon] - Hosted URL of social icon image shown on the website
 * @property {string} [link] - Web URL of brand's Vimeo channel
 */

/**
 * @typedef BlogLink
 * @property {string} [title] - Name of the brand's blog page
 * @property {string} [icon] - Hosted URL of icon image shown on the website
 * @property {string} [link] - Web URL of brand's blog page
 */

/**
 * @typedef Links
 * @property {string} [title] - Name of the related page or link
 * @property {string} [link] - Web URL for redirecting to a related page
 */

/**
 * @typedef BusinessHighlights
 * @property {string} [_id] - Unique identifier of the related business
 * @property {string} [title] - Title of the business highlight, e.g. Superfast Delivery
 * @property {string} [icon] - Hosted URL of icon image representing the
 *   business highlight
 * @property {string} [sub_title] - Detailed information about the highlight
 */

/**
 * @typedef ApplicationDetail
 * @property {string} name - Name of the sales channel. It is required.
 * @property {string} [description] - It gives a detailed information about the
 *   sales channel. It is required.
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [mobile_logo]
 * @property {SecureUrl} [favicon]
 * @property {SecureUrl} [banner]
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {string} [_id] - The unique identifier for the sales channel details
 * @property {string} [slug]
 * @property {number} [company_id]
 */

/**
 * @typedef CurrenciesResponseSchema
 * @property {Currency[]} [items]
 */

/**
 * @typedef AppCurrencyResponseSchema
 * @property {string} [_id] - The unique identifier of the currency
 *   configuration supported by the application
 * @property {string} [application] - Alphanumeric ID allotted to an application
 *   (sales channel website) created within a business account
 * @property {DefaultCurrency} [default_currency]
 * @property {Currency[]} [supported_currency]
 * @property {string} [created_at] - ISO 8601 timestamp when currency was added
 *   in the list of currencies supported by the sales channel
 * @property {string} [modified_at] - ISO 8601 timestamp when currency was
 *   updated in the list of currencies supported by the sales channel
 */

/**
 * @typedef StoreLatLong
 * @property {string} [type] - Coordinates type of the opted store
 * @property {number[]} [coordinates]
 */

/**
 * @typedef OptedStoreAddress
 * @property {string} [state] - State of the opted store, e.g. Maharashtra
 * @property {string} [address1] - Address of the opted store
 * @property {StoreLatLong} [lat_long]
 * @property {string} [address2] - Address of the opted store
 * @property {string} [pincode] - 6-digit PIN code of the opted store location
 * @property {string} [country] - Country of the opted store, e.g. India
 * @property {string} [city] - City of the opted store, e.g. Mumbai
 * @property {string} [sector] - Sector for the opted store.
 * @property {string} [country_code] - Country code of the selected country
 * @property {string} [state_code] - Selected state code
 */

/**
 * @typedef OrderingStore
 * @property {OptedStoreAddress} [address]
 * @property {string} [_id] - The unique identifier of the ordering store
 * @property {number} [uid] - Ordering store UID
 * @property {string} [name] - Store name of the ordering store
 * @property {string} [display_name] - Display name of the ordering store
 * @property {string} [store_type] - Store type of the ordering store, e.g.
 *   high_street, mall, warehouse
 * @property {string} [store_code] - Store code of the ordering store, e.g. MUM-102
 * @property {string} [pincode] - 6-digit PIN Code of the ordering store, e.g. 400001
 * @property {string} [code] - Code of the ordering store (usually same as Store Code)
 */

/**
 * @typedef OrderingStores
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores] - Allow all stores of the ordering stores
 * @property {boolean} [enabled] - Allow ordering stores for current sales channel
 * @property {string} [type] - For hard type delivery, store selection is
 *   compulsory. For soft type, delivery store selection is optional.
 * @property {string} [_id] - The unique identifier of the ordering store
 * @property {string} [app] - Alphanumeric ID allotted to an application (sales
 *   channel website) created within a business account
 * @property {number} [__v] - Version key for tracking ordering stores. Default
 *   value is zero.
 */

/**
 * @typedef OrderingStoresResponseSchema
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 */

/**
 * @typedef ValidationErrors
 * @property {ValidationError[]} errors - A list of validation errors in the request.
 */

/**
 * @typedef ValidationError
 * @property {string} message - A brief description of the error encountered.
 * @property {string} field - The field in the request that caused the error.
 */

class ConfigurationPlatformModel {
  /** @returns {CurrencyExchangeResponseV2} */
  static CurrencyExchangeResponseV2() {
    return Joi.object({
      base: Joi.string().allow("").required(),
      base_currency_name: Joi.string().allow("").required(),
      ttl_seconds: Joi.number().required(),
      items: Joi.array()
        .items(ConfigurationPlatformModel.CurrencyExchangeItem())
        .required(),
      total: Joi.number().required(),
    });
  }

  /** @returns {CurrencyExchangeItem} */
  static CurrencyExchangeItem() {
    return Joi.object({
      currency_code: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      rate: Joi.number().required(),
      country_code: Joi.string().allow("").required(),
      country_name: Joi.string().allow("").required(),
      subunit: Joi.string().allow("").required(),
      decimal_digits: Joi.number().required(),
      symbol: Joi.string().allow("").required(),
    });
  }

  /** @returns {ApplicationInventory} */
  static ApplicationInventory() {
    return Joi.object({
      search: ConfigurationPlatformModel.SearchConfig(),
      inventory: ConfigurationPlatformModel.AppInventoryConfig(),
      authentication: ConfigurationPlatformModel.AuthenticationConfig(),
      article_assignment: ConfigurationPlatformModel.ArticleAssignmentConfig(),
      reward_points: ConfigurationPlatformModel.RewardPointsConfig(),
      cart: ConfigurationPlatformModel.AppCartConfig(),
      payment: ConfigurationPlatformModel.AppPaymentConfig(),
      order: ConfigurationPlatformModel.AppOrderConfig(),
      logistics: ConfigurationPlatformModel.AppLogisticsConfig(),
      pii_masking: ConfigurationPlatformModel.PiiMasking(),
      tags: Joi.array().items(Joi.string().allow("")),
      __v: Joi.number(),
      business: Joi.string().allow(""),
      comms_enabled: Joi.boolean(),
      communication: ConfigurationPlatformModel.CommunicationConfig(),
      platforms: Joi.array().items(Joi.string().allow("")),
      _id: Joi.string().allow(""),
      loyalty_points: ConfigurationPlatformModel.LoyaltyPointsConfig(),
      app: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
    });
  }

  /** @returns {PiiMasking} */
  static PiiMasking() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {FstIdentification} */
  static FstIdentification() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {QuerySuggestions} */
  static QuerySuggestions() {
    return Joi.object({
      enabled: Joi.boolean(),
      max_limit: Joi.number(),
    });
  }

  /** @returns {SearchConfig} */
  static SearchConfig() {
    return Joi.object({
      fst_identification: ConfigurationPlatformModel.FstIdentification(),
      query_suggestions: ConfigurationPlatformModel.QuerySuggestions(),
    });
  }

  /** @returns {AppInventoryConfig} */
  static AppInventoryConfig() {
    return Joi.object({
      delivery_strategy: ConfigurationPlatformModel.DeliveryStrategy(),
      brand: ConfigurationPlatformModel.InventoryBrand(),
      store: ConfigurationPlatformModel.InventoryStore(),
      category: ConfigurationPlatformModel.InventoryCategory(),
      price: ConfigurationPlatformModel.InventoryPrice(),
      discount: ConfigurationPlatformModel.InventoryDiscount(),
      out_of_stock: Joi.boolean(),
      only_verified_products: Joi.boolean(),
      franchise_enabled: Joi.boolean(),
      exclude_category: Joi.array().items(Joi.any()),
      image: Joi.array().items(Joi.string().allow("")),
      company_store: Joi.array().items(Joi.any()),
      company_id: Joi.number(),
    });
  }

  /** @returns {InventoryBrand} */
  static InventoryBrand() {
    return Joi.object({
      criteria: Joi.string().allow(""),
      brands: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {InventoryStore} */
  static InventoryStore() {
    return Joi.object({
      criteria: Joi.string().allow(""),
      stores: Joi.array().items(Joi.any()),
      rules: Joi.array().items(ConfigurationPlatformModel.AppStoreRules()),
    });
  }

  /** @returns {AppStoreRules} */
  static AppStoreRules() {
    return Joi.object({
      companies: Joi.array().items(Joi.number()),
      brands: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {InventoryCategory} */
  static InventoryCategory() {
    return Joi.object({
      criteria: Joi.string().allow(""),
      categories: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {InventoryPrice} */
  static InventoryPrice() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {InventoryDiscount} */
  static InventoryDiscount() {
    return Joi.object({
      min: Joi.number(),
      max: Joi.number(),
    });
  }

  /** @returns {AuthenticationConfig} */
  static AuthenticationConfig() {
    return Joi.object({
      required: Joi.boolean(),
      provider: Joi.string().allow(""),
    });
  }

  /** @returns {ArticleAssignmentConfig} */
  static ArticleAssignmentConfig() {
    return Joi.object({
      rules: ConfigurationPlatformModel.ArticleAssignmentRules(),
      post_order_reassignment: Joi.boolean(),
      enforced_stores: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {ArticleAssignmentRules} */
  static ArticleAssignmentRules() {
    return Joi.object({
      store_priority: ConfigurationPlatformModel.StorePriority(),
    });
  }

  /** @returns {StorePriority} */
  static StorePriority() {
    return Joi.object({
      enabled: Joi.boolean(),
      storetype_order: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {AppCartConfig} */
  static AppCartConfig() {
    return Joi.object({
      delivery_charges: ConfigurationPlatformModel.DeliveryCharges(),
      international_delivery_charges: ConfigurationPlatformModel.InternationalDeliveryCharges(),
      enabled: Joi.boolean(),
      max_cart_items: Joi.number(),
      min_cart_value: Joi.number(),
      bulk_coupons: Joi.boolean(),
      revenue_engine_coupon: Joi.boolean(),
      pan_card: ConfigurationPlatformModel.PanCardConfig(),
    });
  }

  /** @returns {InternationalDeliveryCharges} */
  static InternationalDeliveryCharges() {
    return Joi.object({
      enabled: Joi.boolean(),
      charges: Joi.array().items(ConfigurationPlatformModel.Charges()),
    });
  }

  /** @returns {DeliveryCharges} */
  static DeliveryCharges() {
    return Joi.object({
      enabled: Joi.boolean(),
      charges: Joi.array().items(ConfigurationPlatformModel.Charges()),
    });
  }

  /** @returns {Charges} */
  static Charges() {
    return Joi.object({
      threshold: Joi.number(),
      charges: Joi.number(),
    });
  }

  /** @returns {AppPaymentConfig} */
  static AppPaymentConfig() {
    return Joi.object({
      callback_url: ConfigurationPlatformModel.CallbackUrl(),
      methods: ConfigurationPlatformModel.Methods(),
      payment_selection_lock: ConfigurationPlatformModel.PaymentSelectionLock(),
      mode_of_payment: Joi.string().allow(""),
      source: Joi.string().allow(""),
      enabled: Joi.boolean(),
      cod_amount_limit: Joi.number(),
      cod_charges: Joi.number(),
      anonymous_cod: Joi.boolean(),
      user_cod_limit: Joi.number(),
    });
  }

  /** @returns {CallbackUrl} */
  static CallbackUrl() {
    return Joi.object({
      app: Joi.string().allow(""),
      web: Joi.string().allow(""),
    });
  }

  /** @returns {Methods} */
  static Methods() {
    return Joi.object({
      pl: ConfigurationPlatformModel.PaymentModeConfig(),
      card: ConfigurationPlatformModel.PaymentModeConfig(),
      nb: ConfigurationPlatformModel.PaymentModeConfig(),
      wl: ConfigurationPlatformModel.PaymentModeConfig(),
      ps: ConfigurationPlatformModel.PaymentModeConfig(),
      upi: ConfigurationPlatformModel.PaymentModeConfig(),
      qr: ConfigurationPlatformModel.PaymentModeConfig(),
      cod: ConfigurationPlatformModel.PaymentModeConfig(),
      pp: ConfigurationPlatformModel.PaymentModeConfig(),
      jp: ConfigurationPlatformModel.PaymentModeConfig(),
      pac: ConfigurationPlatformModel.PaymentModeConfig(),
      fc: ConfigurationPlatformModel.PaymentModeConfig(),
      jiopp: ConfigurationPlatformModel.PaymentModeConfig(),
      stripepg: ConfigurationPlatformModel.PaymentModeConfig(),
      juspaypg: ConfigurationPlatformModel.PaymentModeConfig(),
      payubizpg: ConfigurationPlatformModel.PaymentModeConfig(),
      payumoneypg: ConfigurationPlatformModel.PaymentModeConfig(),
      rupifipg: ConfigurationPlatformModel.PaymentModeConfig(),
      simpl: ConfigurationPlatformModel.PaymentModeConfig(),
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
      enabled: Joi.boolean(),
      default_options: Joi.string().allow(""),
      payment_identifier: Joi.string().allow(""),
    });
  }

  /** @returns {AppOrderConfig} */
  static AppOrderConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
      force_reassignment: Joi.boolean(),
      message: Joi.string().allow(""),
      processing_schedule: ConfigurationPlatformModel.ProcessingSchedule(),
    });
  }

  /** @returns {ProcessingSchedule} */
  static ProcessingSchedule() {
    return Joi.object({
      is_scheduled: Joi.boolean(),
      start_after: ConfigurationPlatformModel.StartAfter(),
    });
  }

  /** @returns {StartAfter} */
  static StartAfter() {
    return Joi.object({
      days: Joi.number(),
      hours: Joi.number(),
      minutes: Joi.number(),
    });
  }

  /** @returns {AppLogisticsConfig} */
  static AppLogisticsConfig() {
    return Joi.object({
      logistics_by_seller: Joi.boolean(),
      serviceability_check: Joi.boolean(),
      same_day_delivery: Joi.boolean(),
      dp_assignment: Joi.boolean(),
    });
  }

  /** @returns {LoyaltyPointsConfig} */
  static LoyaltyPointsConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
      auto_apply: Joi.boolean(),
    });
  }

  /** @returns {AppInventoryPartialUpdate} */
  static AppInventoryPartialUpdate() {
    return Joi.object({
      search: ConfigurationPlatformModel.SearchConfig(),
      reward_points: ConfigurationPlatformModel.RewardPointsConfig(),
      cart: ConfigurationPlatformModel.AppCartConfig(),
      payment: ConfigurationPlatformModel.AppPaymentConfig(),
      loyalty_points: ConfigurationPlatformModel.LoyaltyPointsConfig(),
      comms_enabled: Joi.boolean(),
      communication: ConfigurationPlatformModel.CommunicationConfig(),
    });
  }

  /** @returns {BrandCompanyInfo} */
  static BrandCompanyInfo() {
    return Joi.object({
      company_name: Joi.string().allow(""),
      company_id: Joi.number(),
    });
  }

  /** @returns {CompanyByBrandsRequestSchema} */
  static CompanyByBrandsRequestSchema() {
    return Joi.object({
      brands: Joi.number().required(),
      search_text: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyByBrandsResponseSchema} */
  static CompanyByBrandsResponseSchema() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPlatformModel.BrandCompanyInfo()),
      page: ConfigurationPlatformModel.Page(),
    });
  }

  /** @returns {StoreByBrandsRequestSchema} */
  static StoreByBrandsRequestSchema() {
    return Joi.object({
      company_id: Joi.number(),
      brands: Joi.number().required(),
      search_text: Joi.string().allow(""),
    });
  }

  /** @returns {StoreByBrandsResponseSchema} */
  static StoreByBrandsResponseSchema() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPlatformModel.BrandStoreInfo()),
      page: ConfigurationPlatformModel.Page(),
    });
  }

  /** @returns {BrandStoreInfo} */
  static BrandStoreInfo() {
    return Joi.object({
      store_name: Joi.string().allow(""),
      store_id: Joi.number(),
      store_type: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_address: ConfigurationPlatformModel.OptedStoreAddress(),
      company: ConfigurationPlatformModel.OptedCompany(),
    });
  }

  /** @returns {CompanyBrandInfo} */
  static CompanyBrandInfo() {
    return Joi.object({
      name: Joi.string().allow(""),
      value: Joi.number(),
      brand_logo_url: Joi.string().allow(""),
      brand_banner_url: Joi.string().allow(""),
      brand_banner_portrait_url: Joi.string().allow(""),
    });
  }

  /** @returns {BrandsByCompanyResponseSchema} */
  static BrandsByCompanyResponseSchema() {
    return Joi.object({
      brands: Joi.array().items(ConfigurationPlatformModel.CompanyBrandInfo()),
    });
  }

  /** @returns {ValidationFailedResponseSchema} */
  static ValidationFailedResponseSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {NotFound} */
  static NotFound() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
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

  /** @returns {CommsConfig} */
  static CommsConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {PanCardConfig} */
  static PanCardConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
      cod_threshold_amount: Joi.number(),
      online_threshold_amount: Joi.number(),
    });
  }

  /** @returns {CreateApplicationRequestSchema} */
  static CreateApplicationRequestSchema() {
    return Joi.object({
      app: ConfigurationPlatformModel.App(),
      configuration: ConfigurationPlatformModel.ApplicationInventory(),
      domain: ConfigurationPlatformModel.AppDomain(),
    });
  }

  /** @returns {CreateAppResponseSchema} */
  static CreateAppResponseSchema() {
    return Joi.object({
      app: ConfigurationPlatformModel.Application(),
      configuration: ConfigurationPlatformModel.ApplicationInventory(),
    });
  }

  /** @returns {ApplicationsResponseSchema} */
  static ApplicationsResponseSchema() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPlatformModel.Application()),
      page: ConfigurationPlatformModel.Page(),
    });
  }

  /** @returns {MobileAppConfiguration} */
  static MobileAppConfiguration() {
    return Joi.object({
      is_active: Joi.boolean(),
      _id: Joi.string().allow(""),
      app_name: Joi.string().allow(""),
      landing_image: ConfigurationPlatformModel.LandingImage(),
      splash_image: ConfigurationPlatformModel.SplashImage(),
      application: Joi.string().allow(""),
      platform_type: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
      package_name: Joi.string().allow(""),
    });
  }

  /** @returns {LandingImage} */
  static LandingImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
    });
  }

  /** @returns {SplashImage} */
  static SplashImage() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
    });
  }

  /** @returns {MobileAppConfigRequestSchema} */
  static MobileAppConfigRequestSchema() {
    return Joi.object({
      app_name: Joi.string().allow(""),
      landing_image: ConfigurationPlatformModel.LandingImage(),
      splash_image: ConfigurationPlatformModel.SplashImage(),
      is_active: Joi.boolean(),
    });
  }

  /** @returns {BuildVersionHistory} */
  static BuildVersionHistory() {
    return Joi.object({
      versions: Joi.array().items(ConfigurationPlatformModel.BuildVersion()),
      latest_available_version_name: Joi.string().allow(""),
    });
  }

  /** @returns {BuildVersion} */
  static BuildVersion() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      platform_type: Joi.string().allow(""),
      build_status: Joi.string().allow(""),
      version_name: Joi.string().allow(""),
      version_code: Joi.number(),
      download_url: ConfigurationPlatformModel.LandingImage(),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {AppSupportedCurrency} */
  static AppSupportedCurrency() {
    return Joi.object({
      _id: Joi.string().allow(""),
      supported_currency: Joi.array().items(Joi.string().allow("")),
      application: Joi.string().allow(""),
      default_currency: ConfigurationPlatformModel.DefaultCurrency(),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }

  /** @returns {DefaultCurrency} */
  static DefaultCurrency() {
    return Joi.object({
      ref: Joi.string().allow(""),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {DomainAdd} */
  static DomainAdd() {
    return Joi.object({
      name: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      verified: Joi.boolean(),
      is_primary: Joi.boolean(),
      is_shortlink: Joi.boolean(),
      message: Joi.string().allow(""),
      txt_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {DomainAddRequestSchema} */
  static DomainAddRequestSchema() {
    return Joi.object({
      domain: ConfigurationPlatformModel.DomainAdd(),
    });
  }

  /** @returns {Domain} */
  static Domain() {
    return Joi.object({
      name: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      verified: Joi.boolean(),
      is_primary: Joi.boolean(),
      is_shortlink: Joi.boolean(),
      is_predefined: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {DomainsResponseSchema} */
  static DomainsResponseSchema() {
    return Joi.object({
      domains: Joi.array().items(ConfigurationPlatformModel.Domain()),
    });
  }

  /** @returns {UpdateDomain} */
  static UpdateDomain() {
    return Joi.object({
      name: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      verified: Joi.boolean(),
      is_primary: Joi.boolean(),
      is_shortlink: Joi.boolean(),
    });
  }

  /** @returns {UpdateDomainTypeRequestSchema} */
  static UpdateDomainTypeRequestSchema() {
    return Joi.object({
      domain: ConfigurationPlatformModel.UpdateDomain(),
      action: Joi.string().allow(""),
    });
  }

  /** @returns {DomainStatusRequestSchema} */
  static DomainStatusRequestSchema() {
    return Joi.object({
      domain_url: Joi.string().allow(""),
    });
  }

  /** @returns {DomainStatus} */
  static DomainStatus() {
    return Joi.object({
      display: Joi.string().allow(""),
      status: Joi.boolean(),
    });
  }

  /** @returns {DomainStatusResponseSchema} */
  static DomainStatusResponseSchema() {
    return Joi.object({
      connected: Joi.boolean(),
      status: Joi.array().items(ConfigurationPlatformModel.DomainStatus()),
    });
  }

  /** @returns {DomainSuggestionsRequestSchema} */
  static DomainSuggestionsRequestSchema() {
    return Joi.object({
      domain_url: Joi.string().allow(""),
      custom_domain: Joi.boolean(),
    });
  }

  /** @returns {DomainSuggestion} */
  static DomainSuggestion() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      unsupported: Joi.boolean(),
      is_available: Joi.boolean().required(),
      price: Joi.number(),
      currency: Joi.string().allow(""),
    });
  }

  /** @returns {DomainSuggestionsResponseSchema} */
  static DomainSuggestionsResponseSchema() {
    return Joi.object({
      domains: Joi.array().items(ConfigurationPlatformModel.DomainSuggestion()),
    });
  }

  /** @returns {SuccessMessageResponseSchema} */
  static SuccessMessageResponseSchema() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {App} */
  static App() {
    return Joi.object({
      company_id: Joi.string().allow(""),
      channel_type: Joi.string().allow(""),
      auth: ConfigurationPlatformModel.ApplicationAuth(),
      name: Joi.string().allow(""),
      desc: Joi.string().allow(""),
    });
  }

  /** @returns {AppDomain} */
  static AppDomain() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  /** @returns {CompaniesResponseSchema} */
  static CompaniesResponseSchema() {
    return Joi.object({
      items: Joi.array().items(
        ConfigurationPlatformModel.AppInventoryCompanies()
      ),
      page: ConfigurationPlatformModel.Page(),
    });
  }

  /** @returns {AppInventoryCompanies} */
  static AppInventoryCompanies() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
      company_type: Joi.string().allow(""),
    });
  }

  /** @returns {StoresResponseSchema} */
  static StoresResponseSchema() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPlatformModel.AppInventoryStores()),
      page: ConfigurationPlatformModel.Page(),
    });
  }

  /** @returns {AppInventoryStores} */
  static AppInventoryStores() {
    return Joi.object({
      _id: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      uid: Joi.number(),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      company_id: Joi.number(),
      address: Joi.object().pattern(/\S/, Joi.any()),
      integration_type: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {FilterOrderingStoreRequestSchema} */
  static FilterOrderingStoreRequestSchema() {
    return Joi.object({
      all_stores: Joi.boolean(),
      deployed_stores: Joi.array().items(Joi.number()),
      q: Joi.string().allow(""),
    });
  }

  /** @returns {DeploymentMeta} */
  static DeploymentMeta() {
    return Joi.object({
      deployed_stores: Joi.array().items(Joi.number()),
      all_stores: Joi.boolean(),
      enabled: Joi.boolean(),
      type: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      app: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {OrderingStoreConfig} */
  static OrderingStoreConfig() {
    return Joi.object({
      deployment_meta: ConfigurationPlatformModel.DeploymentMeta(),
    });
  }

  /** @returns {OrderingStoreSelectRequestSchema} */
  static OrderingStoreSelectRequestSchema() {
    return Joi.object({
      ordering_store: ConfigurationPlatformModel.OrderingStoreSelect().required(),
    });
  }

  /** @returns {OrderingStoreSelect} */
  static OrderingStoreSelect() {
    return Joi.object({
      uid: Joi.number().required(),
    });
  }

  /** @returns {OtherSellerCompany} */
  static OtherSellerCompany() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {OtherSellerApplication} */
  static OtherSellerApplication() {
    return Joi.object({
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      domain: Joi.string().allow(""),
      company: ConfigurationPlatformModel.OtherSellerCompany(),
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

  /** @returns {OptedApplicationResponseSchema} */
  static OptedApplicationResponseSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      domain: Joi.string().allow(""),
      company: ConfigurationPlatformModel.OptedCompany(),
      opted_inventory: ConfigurationPlatformModel.OptedInventory(),
      opt_out_inventory: ConfigurationPlatformModel.OptOutInventory(),
    });
  }

  /** @returns {OptedCompany} */
  static OptedCompany() {
    return Joi.object({
      uid: Joi.number(),
      name: Joi.string().allow(""),
      id: Joi.number(),
    });
  }

  /** @returns {OptedInventory} */
  static OptedInventory() {
    return Joi.object({
      opt_type: ConfigurationPlatformModel.OptType(),
      items: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {OptType} */
  static OptType() {
    return Joi.object({
      key: Joi.string().allow(""),
      display: Joi.string().allow(""),
    });
  }

  /** @returns {OptedStore} */
  static OptedStore() {
    return Joi.object({
      name: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      uid: Joi.number(),
      address: ConfigurationPlatformModel.OptedStoreAddress(),
      display_name: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      company_id: Joi.number(),
    });
  }

  /** @returns {OptOutInventory} */
  static OptOutInventory() {
    return Joi.object({
      store: Joi.array().items(Joi.number()).required(),
      company: Joi.array().items(Joi.number()).required(),
    });
  }

  /** @returns {TokenResponseSchema} */
  static TokenResponseSchema() {
    return Joi.object({
      tokens: ConfigurationPlatformModel.Tokens(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {Tokens} */
  static Tokens() {
    return Joi.object({
      firebase: ConfigurationPlatformModel.Firebase(),
      moengage: ConfigurationPlatformModel.Moengage(),
      segment: ConfigurationPlatformModel.Segment(),
      gtm: ConfigurationPlatformModel.Gtm(),
      freshchat: ConfigurationPlatformModel.Freshchat(),
      safetynet: ConfigurationPlatformModel.Safetynet(),
      fynd_rewards: ConfigurationPlatformModel.FyndRewards(),
      google_map: ConfigurationPlatformModel.GoogleMap(),
    });
  }

  /** @returns {Firebase} */
  static Firebase() {
    return Joi.object({
      credentials: ConfigurationPlatformModel.Credentials(),
      enabled: Joi.boolean(),
    });
  }

  /** @returns {Credentials} */
  static Credentials() {
    return Joi.object({
      ios: ConfigurationPlatformModel.Ios(),
      android: ConfigurationPlatformModel.Android(),
      project_id: Joi.string().allow(""),
      gcm_sender_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      api_key: Joi.string().allow(""),
    });
  }

  /** @returns {Ios} */
  static Ios() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      api_key: Joi.string().allow(""),
    });
  }

  /** @returns {Android} */
  static Android() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      api_key: Joi.string().allow(""),
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
      private_key: Joi.string().allow(""),
    });
  }

  /** @returns {GoogleMap} */
  static GoogleMap() {
    return Joi.object({
      enabled: Joi.boolean(),
      credentials: ConfigurationPlatformModel.GoogleMapCredentials(),
    });
  }

  /** @returns {GoogleMapCredentials} */
  static GoogleMapCredentials() {
    return Joi.object({
      api_key: Joi.string().allow(""),
    });
  }

  /** @returns {RewardPointsConfig} */
  static RewardPointsConfig() {
    return Joi.object({
      credit: ConfigurationPlatformModel.Credit(),
      debit: ConfigurationPlatformModel.Debit(),
    });
  }

  /** @returns {Credit} */
  static Credit() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {Debit} */
  static Debit() {
    return Joi.object({
      enabled: Joi.boolean(),
      auto_apply: Joi.boolean(),
      strategy_channel: Joi.string().allow(""),
    });
  }

  /** @returns {ProductDetailFeature} */
  static ProductDetailFeature() {
    return Joi.object({
      similar: Joi.array().items(Joi.string().allow("")),
      seller_selection: Joi.boolean(),
      update_product_meta: Joi.boolean(),
      request_product: Joi.boolean(),
    });
  }

  /** @returns {LaunchPage} */
  static LaunchPage() {
    return Joi.object({
      page_type: Joi.string().allow(""),
      params: Joi.object().pattern(/\S/, Joi.any()),
      query: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {LandingPageFeature} */
  static LandingPageFeature() {
    return Joi.object({
      launch_page: ConfigurationPlatformModel.LaunchPage(),
      continue_as_guest: Joi.boolean(),
      login_btn_text: Joi.string().allow(""),
      show_domain_textbox: Joi.boolean(),
      show_register_btn: Joi.boolean(),
    });
  }

  /** @returns {ListingPageFeature} */
  static ListingPageFeature() {
    return Joi.object({
      sort_on: Joi.string().allow(""),
    });
  }

  /** @returns {RegistrationPageFeature} */
  static RegistrationPageFeature() {
    return Joi.object({
      ask_store_address: Joi.boolean(),
    });
  }

  /** @returns {BuyboxFeature} */
  static BuyboxFeature() {
    return Joi.object({
      show_name: Joi.boolean(),
      enable_selection: Joi.boolean(),
      is_seller_buybox_enabled: Joi.boolean(),
    });
  }

  /** @returns {DeliveryStrategy} */
  static DeliveryStrategy() {
    return Joi.object({
      value: Joi.string().allow(""),
    });
  }

  /** @returns {FulfillmentOption} */
  static FulfillmentOption() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  /** @returns {AppFeature} */
  static AppFeature() {
    return Joi.object({
      product_detail: ConfigurationPlatformModel.ProductDetailFeature(),
      landing_page: ConfigurationPlatformModel.LandingPageFeature(),
      registration_page: ConfigurationPlatformModel.RegistrationPageFeature(),
      home_page: ConfigurationPlatformModel.HomePageFeature(),
      common: ConfigurationPlatformModel.CommonFeature(),
      cart: ConfigurationPlatformModel.CartFeature(),
      qr: ConfigurationPlatformModel.QrFeature(),
      pcr: ConfigurationPlatformModel.PcrFeature(),
      order: ConfigurationPlatformModel.OrderFeature(),
      buybox: ConfigurationPlatformModel.BuyboxFeature(),
      delivery_strategy: ConfigurationPlatformModel.DeliveryStrategy(),
      fulfillment_option: ConfigurationPlatformModel.FulfillmentOption(),
      _id: Joi.string().allow(""),
      app: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {HomePageFeature} */
  static HomePageFeature() {
    return Joi.object({
      order_processing: Joi.boolean(),
    });
  }

  /** @returns {CommonFeature} */
  static CommonFeature() {
    return Joi.object({
      communication_optin_dialog: ConfigurationPlatformModel.CommunicationOptinDialogFeature(),
      deployment_store_selection: ConfigurationPlatformModel.DeploymentStoreSelectionFeature(),
      listing_price: ConfigurationPlatformModel.ListingPriceFeature(),
      listing_page: ConfigurationPlatformModel.ListingPageFeature(),
      currency: ConfigurationPlatformModel.CurrencyFeature(),
      revenue_engine: ConfigurationPlatformModel.RevenueEngineFeature(),
      feedback: ConfigurationPlatformModel.FeedbackFeature(),
      compare_products: ConfigurationPlatformModel.CompareProductsFeature(),
      reward_points: ConfigurationPlatformModel.RewardPointsConfig(),
      international_shipping: ConfigurationPlatformModel.InternationalShipping(),
    });
  }

  /** @returns {InternationalShipping} */
  static InternationalShipping() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {CommunicationOptinDialogFeature} */
  static CommunicationOptinDialogFeature() {
    return Joi.object({
      visibility: Joi.boolean(),
    });
  }

  /** @returns {DeploymentStoreSelectionFeature} */
  static DeploymentStoreSelectionFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {ListingPriceFeature} */
  static ListingPriceFeature() {
    return Joi.object({
      value: Joi.string().allow(""),
      sort: Joi.string().allow(""),
    });
  }

  /** @returns {CurrencyFeature} */
  static CurrencyFeature() {
    return Joi.object({
      value: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
      default_currency: Joi.string().allow(""),
    });
  }

  /** @returns {RevenueEngineFeature} */
  static RevenueEngineFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {FeedbackFeature} */
  static FeedbackFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {CompareProductsFeature} */
  static CompareProductsFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  /** @returns {CartFeature} */
  static CartFeature() {
    return Joi.object({
      gst_input: Joi.boolean(),
      staff_selection: Joi.boolean(),
      placing_for_customer: Joi.boolean(),
      google_map: Joi.boolean(),
      revenue_engine_coupon: Joi.boolean(),
    });
  }

  /** @returns {QrFeature} */
  static QrFeature() {
    return Joi.object({
      application: Joi.boolean(),
      products: Joi.boolean(),
      collections: Joi.boolean(),
    });
  }

  /** @returns {PcrFeature} */
  static PcrFeature() {
    return Joi.object({
      staff_selection: Joi.boolean(),
    });
  }

  /** @returns {OrderFeature} */
  static OrderFeature() {
    return Joi.object({
      buy_again: Joi.boolean(),
    });
  }

  /** @returns {AppFeatureRequestSchema} */
  static AppFeatureRequestSchema() {
    return Joi.object({
      feature: ConfigurationPlatformModel.AppFeature(),
    });
  }

  /** @returns {AppFeatureResponseSchema} */
  static AppFeatureResponseSchema() {
    return Joi.object({
      feature: ConfigurationPlatformModel.AppFeature(),
    });
  }

  /** @returns {Currency} */
  static Currency() {
    return Joi.object({
      _id: Joi.string().allow(""),
      is_active: Joi.boolean(),
      name: Joi.string().allow(""),
      code: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      decimal_digits: Joi.number(),
      symbol: Joi.string().allow(""),
      country_name: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationWebsite} */
  static ApplicationWebsite() {
    return Joi.object({
      enabled: Joi.boolean(),
      basepath: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationCors} */
  static ApplicationCors() {
    return Joi.object({
      domains: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ApplicationAuth} */
  static ApplicationAuth() {
    return Joi.object({
      enabled: Joi.boolean(),
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

  /** @returns {ApplicationMeta} */
  static ApplicationMeta() {
    return Joi.object({
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SecureUrl} */
  static SecureUrl() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }

  /** @returns {Application} */
  static Application() {
    return Joi.object({
      website: ConfigurationPlatformModel.ApplicationWebsite(),
      cors: ConfigurationPlatformModel.ApplicationCors(),
      auth: ConfigurationPlatformModel.ApplicationAuth(),
      description: Joi.string().allow(""),
      channel_type: Joi.string().allow(""),
      cache_ttl: Joi.number(),
      is_internal: Joi.boolean(),
      is_active: Joi.boolean(),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      owner: Joi.string().allow(""),
      company_id: Joi.number(),
      token: Joi.string().allow(""),
      redirections: Joi.array().items(
        ConfigurationPlatformModel.ApplicationRedirections()
      ),
      meta: Joi.array().items(ConfigurationPlatformModel.ApplicationMeta()),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
      banner: ConfigurationPlatformModel.SecureUrl(),
      logo: ConfigurationPlatformModel.SecureUrl(),
      favicon: ConfigurationPlatformModel.SecureUrl(),
      domains: Joi.array().items(ConfigurationPlatformModel.Domain()),
      app_type: Joi.string().allow(""),
      mobile_logo: ConfigurationPlatformModel.SecureUrl(),
      domain: ConfigurationPlatformModel.Domain(),
      slug: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      status: Joi.string().allow(""),
      tokens: Joi.array().items(ConfigurationPlatformModel.TokenSchema()),
      secret: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationById} */
  static ApplicationById() {
    return Joi.object({
      website: ConfigurationPlatformModel.ApplicationWebsite(),
      cors: ConfigurationPlatformModel.ApplicationCors(),
      auth: ConfigurationPlatformModel.ApplicationAuth(),
      description: Joi.string().allow(""),
      channel_type: Joi.string().allow(""),
      cache_ttl: Joi.number(),
      is_internal: Joi.boolean(),
      is_active: Joi.boolean(),
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      owner: Joi.string().allow(""),
      company_id: Joi.number(),
      token: Joi.string().allow(""),
      redirections: Joi.array().items(
        ConfigurationPlatformModel.ApplicationRedirections()
      ),
      meta: Joi.array().items(ConfigurationPlatformModel.ApplicationMeta()),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
      banner: ConfigurationPlatformModel.SecureUrl(),
      logo: ConfigurationPlatformModel.SecureUrl(),
      favicon: ConfigurationPlatformModel.SecureUrl(),
      domains: Joi.array().items(ConfigurationPlatformModel.Domain()),
      app_type: Joi.string().allow(""),
      mobile_logo: ConfigurationPlatformModel.SecureUrl(),
      domain: ConfigurationPlatformModel.Domain(),
      slug: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      status: Joi.string().allow(""),
      tokens: Joi.array().items(ConfigurationPlatformModel.TokenSchemaID()),
      secret: Joi.string().allow(""),
    });
  }

  /** @returns {TokenSchemaID} */
  static TokenSchemaID() {
    return Joi.object({
      token: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
    });
  }

  /** @returns {TokenSchema} */
  static TokenSchema() {
    return Joi.object({
      token: Joi.string().allow(""),
      created_by: Joi.object().pattern(/\S/, Joi.any()),
      created_at: Joi.string().allow(""),
    });
  }

  /** @returns {InvalidPayloadRequestSchema} */
  static InvalidPayloadRequestSchema() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
      page_size: Joi.number(),
    });
  }

  /** @returns {ApplicationInformation} */
  static ApplicationInformation() {
    return Joi.object({
      address: ConfigurationPlatformModel.InformationAddress(),
      support: ConfigurationPlatformModel.InformationSupport(),
      social_links: ConfigurationPlatformModel.SocialLinks(),
      links: Joi.array().items(ConfigurationPlatformModel.Links()),
      copyright_text: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      business_highlights: Joi.array().items(
        ConfigurationPlatformModel.BusinessHighlights()
      ),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {InformationAddress} */
  static InformationAddress() {
    return Joi.object({
      loc: ConfigurationPlatformModel.InformationLoc(),
      address_line: Joi.array().items(Joi.string().allow("")),
      phone: Joi.array().items(ConfigurationPlatformModel.InformationPhone()),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
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

  /** @returns {InformationLoc} */
  static InformationLoc() {
    return Joi.object({
      type: Joi.string().allow(""),
      coordinates: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {InformationSupport} */
  static InformationSupport() {
    return Joi.object({
      phone: Joi.array().items(
        ConfigurationPlatformModel.InformationSupportPhone()
      ),
      email: Joi.array().items(
        ConfigurationPlatformModel.InformationSupportEmail()
      ),
      timing: Joi.string().allow(""),
    });
  }

  /** @returns {InformationSupportPhone} */
  static InformationSupportPhone() {
    return Joi.object({
      code: Joi.string().allow(""),
      number: Joi.string().allow(""),
      key: Joi.string().allow(""),
    });
  }

  /** @returns {InformationSupportEmail} */
  static InformationSupportEmail() {
    return Joi.object({
      value: Joi.string().allow(""),
      key: Joi.string().allow(""),
    });
  }

  /** @returns {SocialLinks} */
  static SocialLinks() {
    return Joi.object({
      facebook: ConfigurationPlatformModel.FacebookLink(),
      instagram: ConfigurationPlatformModel.InstagramLink(),
      twitter: ConfigurationPlatformModel.TwitterLink(),
      pinterest: ConfigurationPlatformModel.PinterestLink(),
      google_plus: ConfigurationPlatformModel.GooglePlusLink(),
      youtube: ConfigurationPlatformModel.YoutubeLink(),
      linked_in: ConfigurationPlatformModel.LinkedInLink(),
      vimeo: ConfigurationPlatformModel.VimeoLink(),
      blog_link: ConfigurationPlatformModel.BlogLink(),
    });
  }

  /** @returns {FacebookLink} */
  static FacebookLink() {
    return Joi.object({
      title: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
    });
  }

  /** @returns {InstagramLink} */
  static InstagramLink() {
    return Joi.object({
      title: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
    });
  }

  /** @returns {TwitterLink} */
  static TwitterLink() {
    return Joi.object({
      title: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
    });
  }

  /** @returns {PinterestLink} */
  static PinterestLink() {
    return Joi.object({
      title: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
    });
  }

  /** @returns {GooglePlusLink} */
  static GooglePlusLink() {
    return Joi.object({
      title: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
    });
  }

  /** @returns {YoutubeLink} */
  static YoutubeLink() {
    return Joi.object({
      title: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
    });
  }

  /** @returns {LinkedInLink} */
  static LinkedInLink() {
    return Joi.object({
      title: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
    });
  }

  /** @returns {VimeoLink} */
  static VimeoLink() {
    return Joi.object({
      title: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
    });
  }

  /** @returns {BlogLink} */
  static BlogLink() {
    return Joi.object({
      title: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      link: Joi.string().allow(""),
    });
  }

  /** @returns {Links} */
  static Links() {
    return Joi.object({
      title: Joi.string().allow(""),
      link: Joi.string().allow(""),
    });
  }

  /** @returns {BusinessHighlights} */
  static BusinessHighlights() {
    return Joi.object({
      _id: Joi.string().allow(""),
      title: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      sub_title: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationDetail} */
  static ApplicationDetail() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      description: Joi.string().allow(""),
      logo: ConfigurationPlatformModel.SecureUrl(),
      mobile_logo: ConfigurationPlatformModel.SecureUrl(),
      favicon: ConfigurationPlatformModel.SecureUrl(),
      banner: ConfigurationPlatformModel.SecureUrl(),
      domain: ConfigurationPlatformModel.Domain(),
      domains: Joi.array().items(ConfigurationPlatformModel.Domain()),
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      company_id: Joi.number(),
    });
  }

  /** @returns {CurrenciesResponseSchema} */
  static CurrenciesResponseSchema() {
    return Joi.object({
      items: Joi.array().items(ConfigurationPlatformModel.Currency()),
    });
  }

  /** @returns {AppCurrencyResponseSchema} */
  static AppCurrencyResponseSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      default_currency: ConfigurationPlatformModel.DefaultCurrency(),
      supported_currency: Joi.array().items(
        ConfigurationPlatformModel.Currency()
      ),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
    });
  }

  /** @returns {StoreLatLong} */
  static StoreLatLong() {
    return Joi.object({
      type: Joi.string().allow(""),
      coordinates: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {OptedStoreAddress} */
  static OptedStoreAddress() {
    return Joi.object({
      state: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      lat_long: ConfigurationPlatformModel.StoreLatLong(),
      address2: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      country: Joi.string().allow(""),
      city: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
    });
  }

  /** @returns {OrderingStore} */
  static OrderingStore() {
    return Joi.object({
      address: ConfigurationPlatformModel.OptedStoreAddress(),
      _id: Joi.string().allow(""),
      uid: Joi.number(),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      store_type: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      code: Joi.string().allow(""),
    });
  }

  /** @returns {OrderingStores} */
  static OrderingStores() {
    return Joi.object({
      page: ConfigurationPlatformModel.Page(),
      items: Joi.array().items(ConfigurationPlatformModel.OrderingStore()),
      deployed_stores: Joi.array().items(Joi.number()),
      all_stores: Joi.boolean(),
      enabled: Joi.boolean(),
      type: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      app: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {OrderingStoresResponseSchema} */
  static OrderingStoresResponseSchema() {
    return Joi.object({
      page: ConfigurationPlatformModel.Page(),
      items: Joi.array().items(ConfigurationPlatformModel.OrderingStore()),
    });
  }

  /** @returns {ValidationErrors} */
  static ValidationErrors() {
    return Joi.object({
      errors: Joi.array()
        .items(ConfigurationPlatformModel.ValidationError())
        .required(),
    });
  }

  /** @returns {ValidationError} */
  static ValidationError() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      field: Joi.string().allow("").required(),
    });
  }
}
module.exports = ConfigurationPlatformModel;
